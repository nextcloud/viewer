/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { getCloseButton, getEditButton, getViewer, getViewerName } from '../../support/viewerUtils.ts'

test.describe.serial('Open the new saved as image', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [{ fixture: 'image1.jpg', mimeType: 'image/jpeg' }]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See images in the list', async () => {
		await expect(getRowForFile(page, 'image1.jpg')).toContainText('image1 .jpg')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Open the image editor', async () => {
		await getEditButton(page).click()
	})

	test('Save the image', async () => {
		// Filerobot image editor (third-party) selectors.
		await page.locator('.FIE_topbar-save-button').click()
		const nameInput = page.locator('input[type="text"].SfxInput-Base')
		await nameInput.clear()
		await nameInput.fill('imageSave')
		await page.locator('.SfxModal-Container button[color="primary"].SfxButton-root')
			.filter({ hasText: 'Save' })
			.click()
		await page.locator('.FIE_topbar-close-button').click()

		await expect(getViewerName(page)).toContainText('imageSave.jpg')
		await getCloseButton(page).click()
	})

	test('See the new saved image in the list', async () => {
		await expect(getRowForFile(page, 'imageSave.jpg')).toContainText('imageSave .jpg')
	})
})
