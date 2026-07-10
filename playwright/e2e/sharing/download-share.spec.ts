/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { statSync } from 'node:fs'
import { createRandomUser, expect, loginUser, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../../support/filesUtils.ts'
import { visitPublicShare } from '../../support/shareUtils.ts'
import {
	expectViewerLoaded,
	getCloseButton,
	getMenuItem,
	getViewer,
	getViewerName,
	openHeaderMenu,
} from '../../support/viewerUtils.ts'
import { createFolder, createLinkShare, fixturePath, uploadFile } from '../../support/webdav.ts'

const fileName = 'image1.jpg'

test.describe.serial(`Download ${fileName} from viewer in link share`, () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage()
		user = await createRandomUser()
		await createFolder(user, '/Photos')
		await uploadFile(user, 'image1.jpg', 'image/jpeg', '/Photos/image1.jpg')
		await uploadFile(user, 'image2.jpg', 'image/jpeg', '/Photos/image2.jpg')
		await loginUser(page, user)
		await page.goto('apps/files')
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See the default files list', async () => {
		await expect(getRowForFile(page, 'welcome.txt')).toContainText('welcome .txt')
		await expect(getRowForFile(page, 'Photos')).toContainText('Photos')
	})

	test('See shared files in the list', async () => {
		await navigateToFolder(page, 'Photos')
		await expect(getRowForFile(page, 'image1.jpg')).toContainText('image1 .jpg')
		await expect(getRowForFile(page, 'image2.jpg')).toContainText('image2 .jpg')
	})

	test('Share the Photos folder with a share link and access the share link', async () => {
		const token = await createLinkShare(user, '/Photos')
		await visitPublicShare(page, token)
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('See the title and the close icon on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('See the full screen and download entries in the menu', async () => {
		await openHeaderMenu(page)
		await expect(getMenuItem(page, 'Full screen')).toBeVisible()
		await expect(getMenuItem(page, 'Download')).toBeVisible()
	})

	test('Download the image and compare it with the fixture by size', async () => {
		const downloadPromise = page.waitForEvent('download')
		await getMenuItem(page, 'Download').click()

		const download = await downloadPromise
		const downloadedPath = await download.path()
		expect(statSync(downloadedPath).size).toBe(statSync(fixturePath(fileName)).size)
	})
})
