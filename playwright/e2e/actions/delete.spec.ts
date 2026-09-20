/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { expectViewerLoaded, getMenuItem, getViewer, openHeaderMenu } from '../../support/viewerUtils.ts'

test.describe.serial('Delete image.png in viewer', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [{ fixture: 'image.png', mimeType: 'image/png' }]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See image.png in the list', async () => {
		await expect(getRowForFile(page, 'image.png')).toContainText('image .png')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image.png')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('Delete the image and close viewer', async () => {
		await openHeaderMenu(page)
		await getMenuItem(page, 'Delete').click()
	})

	test('Does not see the viewer anymore', async () => {
		await expect(getViewer(page)).toHaveCount(0)
	})

	test('Does not see image.png in the list anymore', async () => {
		await page.goto('apps/files')
		await expect(getRowForFile(page, 'image.png')).toHaveCount(0)
	})
})
