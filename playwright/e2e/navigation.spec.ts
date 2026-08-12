/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRandomUser, expect, loginUser, setupFilesPage, test } from '../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../support/filesUtils.ts'
import { getCloseButton, getViewer } from '../support/viewerUtils.ts'
import { createFolder, uploadFile } from '../support/webdav.ts'

test.describe('Browser navigation', () => {
	test('Navigating back to the files overview', async ({ browser }) => {
		const { page } = await setupFilesPage(browser, [
			{ fixture: 'image.png', mimeType: 'image/png', target: '/image1.png' },
		])

		await expect(getRowForFile(page, 'image1.png')).toBeVisible()
		await openFile(page, 'image1.png')
		await expect(getViewer(page)).toBeVisible()

		await page.goBack()
		await expect(getViewer(page)).toHaveCount(0)

		await page.close()
	})

	test('Navigating back after closing leaves the folder the file was opened from', async ({ browser }) => {
		const page = await browser.newPage()
		const user = await createRandomUser()
		await createFolder(user, '/Photos')
		await uploadFile(user, 'image.png', 'image/png', '/Photos/image1.png')
		await loginUser(page, user)
		await page.goto('apps/files')

		await navigateToFolder(page, 'Photos')
		await openFile(page, 'image1.png')
		await expect(getViewer(page)).toBeVisible()

		await getCloseButton(page).click()
		await expect(getViewer(page)).toHaveCount(0)

		// Closing must not stack an extra entry on top of the folder: one step back
		// leaves the folder instead of reopening the file that was just closed.
		await page.goBack()
		await expect(getViewer(page)).toHaveCount(0)
		await expect(getRowForFile(page, 'Photos')).toBeVisible()

		await page.close()
	})
})
