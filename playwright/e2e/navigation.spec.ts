/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect, setupFilesPage, test } from '../support/fixtures.ts'
import { getRowForFile, openFile } from '../support/filesUtils.ts'
import { getViewer } from '../support/viewerUtils.ts'

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
})
