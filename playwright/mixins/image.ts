/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { escapeRegExp, expect, setupFilesPage, test } from '../support/fixtures.ts'
import { getFileId, getRowForFile, openFile } from '../support/filesUtils.ts'
import {
	expectViewerLoaded,
	getActiveMedia,
	getCloseButton,
	getMenuToggle,
	getNextButton,
	getPrevButton,
	getViewer,
	getViewerName,
} from '../support/viewerUtils.ts'

/**
 * Generate the standard viewer checks for a single image file.
 *
 * @param fileName the image to upload and test against
 * @param mimeType the image mime type
 * @param source optional custom source url the active image should be served from
 *               (null means the preview endpoint is expected)
 */
export function imageTest(fileName = 'image1.jpg', mimeType = 'image/jpeg', source: string | null = null) {
	test.describe.serial(`Open ${fileName} in viewer`, () => {
		let page: Page

		test.beforeAll(async ({ browser }) => {
			({ page } = await setupFilesPage(browser, [{ fixture: fileName, mimeType }]))
		})

		test.afterAll(async () => {
			await page.close()
		})

		test(`See ${fileName} in the list`, async () => {
			await expect(getRowForFile(page, fileName)).toContainText(fileName.replace(/(.*)\./, '$1 .'))
		})

		test('Open the viewer on file click and wait for loading to end', async () => {
			const fileId = await getFileId(page, fileName)
			const urlRegExp = source
				? new RegExp(`/remote\\.php/dav/files/.*/${escapeRegExp(fileName)}`)
				: new RegExp(`/index\\.php/core/preview.*fileId=${fileId}`)
			const imageResponse = page.waitForResponse((r) => urlRegExp.test(r.url()) && r.status() === 200)

			await openFile(page, fileName)
			await expect(getViewer(page)).toBeVisible()

			await imageResponse
			await expectViewerLoaded(page)
		})

		test('See the menu icon and title on the viewer header', async () => {
			await expect(getViewerName(page)).toContainText(fileName)
			await expect(getMenuToggle(page)).toBeVisible()
			await expect(getCloseButton(page)).toBeVisible()
		})

		test('Does not see navigation arrows', async () => {
			await expect(getPrevButton(page)).not.toBeVisible()
			await expect(getNextButton(page)).not.toBeVisible()
		})

		test(`The image source is the ${source ? 'remote' : 'preview'} url`, async () => {
			await expect(getActiveMedia(page, 'img')).toHaveAttribute('src', new RegExp(escapeRegExp(source ?? '/index.php/core/preview')))
		})
	})
}
