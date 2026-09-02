/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { test } from '../../support/fixtures/viewer.ts'

test.describe('Viewer close on click outside', () => {
	test.beforeEach(async ({ filesApp, uploadMedia }) => {
		await uploadMedia('image1.jpg', 'image1.jpg', 'image/jpeg')
		await filesApp.openFilesApp()
	})

	// Regression for nextcloud/viewer#2166: clicking outside the image closes it.
	test('closes when clicking outside the media', async ({ filesApp, viewer }) => {
		await filesApp.openFile('image1.jpg')
		await viewer.waitForOpen()

		await viewer.clickOutside()

		await viewer.waitForClosed()
	})
})
