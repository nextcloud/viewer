/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRandomUser, expect, loginUser, test, type User } from '../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../support/filesUtils.ts'
import { getViewer, getViewerName, openHeaderMenu } from '../support/viewerUtils.ts'
import { createFolder, createShare, ShareType, uploadFile } from '../support/webdav.ts'

test.describe('Disable download button if forbidden', () => {
	let sharee: User

	test.beforeAll(async () => {
		sharee = await createRandomUser()
		const owner = await createRandomUser()
		await createFolder(owner, '/Photos')
		await uploadFile(owner, 'image1.jpg', 'image/jpeg', '/Photos/image1.jpg')
		await createShare(owner, '/Photos', {
			shareWith: sharee.userId,
			shareType: ShareType.User,
			attributes: [{ scope: 'permissions', key: 'download', value: false }],
		})
	})

	test.beforeEach(async ({ page }) => {
		await loginUser(page, sharee)
		await page.goto('apps/files')
		await navigateToFolder(page, 'Photos')
	})

	test('See the shared folder and images in files list', async ({ page }) => {
		await expect(getRowForFile(page, 'image1.jpg')).toContainText('image1 .jpg')
	})

	// TODO: Fix no-download files on the server.
	test.fixme('See the image can be shown', async ({ page }) => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
		await expect(getViewer(page)).toHaveClass(/modal-mask/)
		await expect(getViewer(page)).not.toHaveClass(/icon-loading/)
	})

	test('See the title on the viewer header but not the Download nor the menu button', async ({ page }) => {
		await openFile(page, 'image1.jpg')
		await expect(getViewerName(page)).toContainText('image1.jpg')

		await openHeaderMenu(page)
		// Only "Full screen" and "Open sidebar" remain — no Download entry.
		const menu = page.locator('[role="menu"]:visible')
		await expect(menu.getByRole('menuitem')).toHaveCount(2)
		await expect(menu.getByRole('menuitem', { name: 'Full screen' })).toBeVisible()
		await expect(menu.getByRole('menuitem', { name: 'Open sidebar' })).toBeVisible()
		await expect(menu.getByRole('menuitem', { name: 'Download' })).toHaveCount(0)
	})
})
