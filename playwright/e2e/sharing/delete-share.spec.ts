/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { createRandomUser, expect, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { visitPublicShare } from '../../support/shareUtils.ts'
import {
	expectViewerLoaded,
	getMenuItem,
	getViewer,
	openHeaderMenu,
} from '../../support/viewerUtils.ts'
import {
	createFolder,
	createShare,
	Permission,
	ShareType,
	uploadFile,
} from '../../support/webdav.ts'

const fileName = 'image1.jpg'

test.describe.serial(`Delete ${fileName} in viewer in link share`, () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage()
		user = await createRandomUser()
		await createFolder(user, '/Photos')
		await uploadFile(user, 'image1.jpg', 'image/jpeg', '/Photos/image1.jpg')
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See the shared file in the list', async () => {
		// Delete from the viewer is only offered with the delete permission.
		const token = await createShare(user, '/Photos', {
			shareType: ShareType.Link,
			permissions: Permission.READ | Permission.UPDATE | Permission.CREATE | Permission.DELETE,
		})
		if (!token) {
			throw new Error('createShare: no token returned for /Photos')
		}
		await visitPublicShare(page, token)
		await expect(getRowForFile(page, fileName)).toContainText('image1 .jpg')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, fileName)
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('See the delete entry in the menu', async () => {
		await openHeaderMenu(page)
		await expect(getMenuItem(page, 'Delete')).toBeVisible()
	})

	test('Delete the image and close the viewer', async () => {
		await getMenuItem(page, 'Delete').click()
	})

	test('Does not see the viewer anymore', async () => {
		await expect(getViewer(page)).toHaveCount(0)
	})

	test('Does not see the image in the list anymore', async () => {
		await expect(getRowForFile(page, fileName)).toHaveCount(0)
	})
})
