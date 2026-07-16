/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'
import type { ViewerFileInfo } from '../../support/globals.d.ts'

import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getFileId, getRowForFile } from '../../support/filesUtils.ts'
import {
	expectActiveSource,
	expectNavArrows,
	expectViewerLoaded,
	getMediaInContainer,
	getMenuToggle,
	getCloseButton,
	getViewer,
	getViewerName,
	goNext,
} from '../../support/viewerUtils.ts'

const PREVIEW_URL = '/index.php/core/preview'

test.describe.serial('Open custom images list in viewer', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [1, 2, 3, 4].map((i) => ({
			fixture: `image${i}.jpg`,
			mimeType: 'image/jpeg',
		}))))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See images in the list', async () => {
		for (const i of [1, 2, 3, 4]) {
			await expect(getRowForFile(page, `image${i}.jpg`)).toContainText(`image${i} .jpg`)
		}
	})

	test('Open the viewer with a specific list', async () => {
		// Build a 2-item list (image1 + image3 only) with hand-crafted permissions/etags.
		const list: ViewerFileInfo[] = [
			{
				basename: 'image1.jpg',
				filename: '/image1.jpg',
				hasPreview: true,
				fileid: Number(await getFileId(page, 'image1.jpg')),
				permissions: 'RWD',
				mime: 'image/jpeg',
				etag: '123456789',
			},
			{
				basename: 'image3.jpg',
				filename: '/image3.jpg',
				hasPreview: true,
				fileid: Number(await getFileId(page, 'image3.jpg')),
				permissions: 'R',
				mime: 'image/jpeg',
				etag: '987654321',
			},
		]

		await page.evaluate((entries) => {
			window.OCA.Viewer.open({ path: '/image1.jpg', list: entries })
		}, list)

		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation (image1)', async () => {
		await expectViewerLoaded(page)
	})

	test('See the menu icon and title on the viewer header (image1)', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does see next navigation arrows', async () => {
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The image source is the preview url (image1)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('Show image3 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image3)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (image3)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('See the menu icon and title on the viewer header (image3)', async () => {
		await expect(getViewerName(page)).toContainText('image3.jpg')
	})

	test('Show image1 on next (wraps)', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The image source is the preview url (wrap to image1)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('Does not see a loading animation (wrap to image1)', async () => {
		await expectViewerLoaded(page)
	})

	test('See the menu icon and title on the viewer header (wrap to image1)', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
	})
})
