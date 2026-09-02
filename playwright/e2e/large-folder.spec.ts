/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'
import { uploadFile } from '../support/uploadFile.ts'

// Zero-padded so the natural file-list order matches the numeric order.
const COUNT = 30
const name = (index: number): string => `image-${String(index).padStart(3, '0')}.jpg`

test.describe('Viewer in a large folder', () => {
	// Regression for nextcloud/viewer#3015: opening a file in a directory with
	// many files used to hang (O(n^2) sort). The viewer now trusts the caller's
	// order, so opening and navigating stays responsive.
	test('opens quickly and navigates in a folder with many files', async ({ user, filesApp, viewer }) => {
		await Promise.all(Array.from({ length: COUNT }, (_, index) => uploadFile(user, 'image1.jpg', name(index), 'image/jpeg')))
		await filesApp.openFilesApp()
		await expect(filesApp.getRowByName(name(0))).toBeVisible()

		const start = Date.now()
		await filesApp.openFile(name(0))
		await viewer.waitForOpen()
		// The prev/next controls become available well within a sane budget.
		expect(Date.now() - start).toBeLessThan(15000)

		expect(await viewer.currentName()).toBe(name(0))

		await viewer.next()
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe(name(1))
	})
})
