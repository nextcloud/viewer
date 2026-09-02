/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'

test.describe('Viewer accessibility', () => {
	test.beforeEach(async ({ filesApp, uploadMedia }) => {
		await uploadMedia('image1.jpg', 'image1.jpg', 'image/jpeg')
		await uploadMedia('image2.jpg', 'image2.jpg', 'image/jpeg')
		await uploadMedia('video1.mp4', 'video1.mp4', 'video/mp4')
		await filesApp.openFilesApp()
		await expect(filesApp.getRowByName('image1.jpg')).toBeVisible()
	})

	test('exposes the viewer as a labelled dialog with accessible controls', async ({ page, filesApp, viewer }) => {
		await filesApp.openFile('image2.jpg')
		await viewer.waitForOpen()

		// The modal is a dialog labelled by the current file name.
		const dialog = page.locator('.viewer__modal[role="dialog"]')
		await expect(dialog).toBeVisible()
		expect(await viewer.currentName()).toBe('image2.jpg')

		// Navigation and close controls have accessible names.
		await expect(viewer.nextButton).toBeVisible()
		await expect(viewer.previousButton).toBeVisible()
		await expect(viewer.closeButton).toBeVisible()
	})
})
