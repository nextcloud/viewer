/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { createRandomUser, expect, loginUser, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../../support/filesUtils.ts'
import { visitPublicShare } from '../../support/shareUtils.ts'
import {
	expectNavArrows,
	expectViewerLoaded,
	getCloseButton,
	getMediaInContainer,
	getViewer,
	getViewerName,
	goNext,
} from '../../support/viewerUtils.ts'
import { createFolder, createLinkShare, uploadFile } from '../../support/webdav.ts'

test.describe.serial('See shared folder with link share', () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage()
		user = await createRandomUser()
		await createFolder(user, '/Photos')
		for (const i of [1, 2, 3, 4]) {
			await uploadFile(user, `image${i}.jpg`, 'image/jpeg', `/Photos/image${i}.jpg`)
		}
		await uploadFile(user, 'video1.mp4', 'video/mp4', '/Photos/video1.mp4')
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
		for (const i of [1, 2, 3, 4]) {
			await expect(getRowForFile(page, `image${i}.jpg`)).toContainText(`image${i} .jpg`)
		}
		await expect(getRowForFile(page, 'video1.mp4')).toContainText('video1 .mp4')
	})

	test('Share the Photos folder with a share link and access the share link', async () => {
		const token = await createLinkShare(user, '/Photos')
		await visitPublicShare(page, token)
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation (image1)', async () => {
		await expectViewerLoaded(page)
	})

	test('See the title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does see next navigation arrows', async () => {
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Show image2 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(3)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image2)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show image3 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(3)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image3)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show image4 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image4)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show video1 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(1)
		await expect(getMediaInContainer(page, 'video')).toHaveCount(1)
		await expectNavArrows(page)
		await expect(getViewerName(page)).toContainText('video1.mp4')
	})

	test('Does not see a loading animation (video1)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show image1 again on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (wrap to image1)', async () => {
		await expectViewerLoaded(page)
	})
})
