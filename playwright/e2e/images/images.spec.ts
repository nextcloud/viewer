/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
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

test.describe.serial('Open images in viewer', () => {
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

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation (image1)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (image1)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('See the menu icon and title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does see next navigation arrows', async () => {
		// 2 images: the current one and its single neighbour (start of the list).
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Show image2 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(3)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image2)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (image2)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('Show image3 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(3)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image3)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (image3)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('Show image4 on next', async () => {
		await goNext(page)
		// 2 images: the current one and its single neighbour (end of the list).
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (image4)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (image4)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})

	test('Show image1 again on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('Does not see a loading animation (wrap to image1)', async () => {
		await expectViewerLoaded(page)
	})

	test('The image source is the preview url (wrap to image1)', async () => {
		await expectActiveSource(page, 'img', PREVIEW_URL)
	})
})
