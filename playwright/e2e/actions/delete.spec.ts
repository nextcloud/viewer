/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { expect } from '@playwright/test'
import { test } from '../../support/fixtures/viewer.ts'

test.describe('Viewer delete action', () => {
	// Deleting the shown file advances the viewer to the next file, then the
	// previous one, then closes when nothing is left.
	test('advances to the next file, then closes when the list is empty', async ({ filesApp, uploadMedia, viewer }) => {
		await uploadMedia('image1.jpg', 'image1.jpg', 'image/jpeg')
		await uploadMedia('image2.jpg', 'image2.jpg', 'image/jpeg')
		await filesApp.openFilesApp()
		await filesApp.openFile('image1.jpg')
		await viewer.waitForOpen()

		// Delete the first file → viewer moves to the second, staying open.
		await viewer.runAction('Delete file')
		await viewer.waitForOpen()
		await expect(async () => {
			expect(await viewer.currentName()).toBe('image2.jpg')
		}).toPass()

		// Delete the only remaining file → viewer closes.
		await viewer.runAction('Delete file')
		await viewer.waitForClosed()
	})
})
