/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'

// The viewer no longer sorts the list itself; it follows the order the Files
// app provides. These guard nextcloud/viewer#2596 (underscore ordering) and
// nextcloud/viewer#3027 (respect the active sort order).
test.describe('Viewer follows the files list order', () => {
	test('steps through underscore-suffixed names in list order', async ({ filesApp, uploadMedia, viewer }) => {
		// Files app natural order is name.jpg, name_1.jpg, name_2.jpg, name_3.jpg.
		const names = ['name.jpg', 'name_1.jpg', 'name_2.jpg', 'name_3.jpg']
		for (const name of names) {
			await uploadMedia('image1.jpg', name, 'image/jpeg')
		}
		await filesApp.openFilesApp()

		await filesApp.openFile('name.jpg')
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe('name.jpg')

		for (const name of names.slice(1)) {
			await viewer.next()
			await viewer.waitForOpen()
			expect(await viewer.currentName()).toBe(name)
		}
	})
})
