/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { statSync } from 'node:fs'
import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { expectViewerLoaded, getMenuItem, getViewer, openHeaderMenu } from '../../support/viewerUtils.ts'
import { fixturePath } from '../../support/webdav.ts'

const fileName = 'image.png'

test.describe.serial(`Download ${fileName} in viewer`, () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [{ fixture: fileName, mimeType: 'image/png' }]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test(`See "${fileName}" in the list`, async () => {
		await expect(getRowForFile(page, fileName)).toContainText(fileName.replace(/(.*)\./, '$1 .'))
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, fileName)
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('Download the image and compare it with the fixture by size', async () => {
		const downloadPromise = page.waitForEvent('download')
		await openHeaderMenu(page)
		await getMenuItem(page, 'Download').click()

		const download = await downloadPromise
		const downloadedPath = await download.path()
		expect(statSync(downloadedPath).size).toBe(statSync(fixturePath(fileName)).size)
	})
})
