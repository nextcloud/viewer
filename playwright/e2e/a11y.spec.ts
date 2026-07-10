/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test } from '../support/fixtures.ts'
import { getRowForFile, openFile } from '../support/filesUtils.ts'
import {
	expectNavArrows,
	expectViewerLoaded,
	getMediaInContainer,
	getViewer,
	getViewerName,
} from '../support/viewerUtils.ts'

/** Media element of an inactive (neighbour) slide. */
const inactiveMedia = (page: Page, type: 'img' | 'video') =>
	getViewer(page).locator(`.modal-container .viewer__file:not(.viewer__file--active) ${type}`)

test.describe.serial('A11y tests', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [
			{ fixture: 'image1.jpg', mimeType: 'image/jpeg' },
			{ fixture: 'image2.jpg', mimeType: 'image/jpeg' },
			{ fixture: 'video1.mp4', mimeType: 'video/mp4' },
		]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See files in the list', async () => {
		await expect(getRowForFile(page, 'image1.jpg')).toContainText('image1 .jpg')
		await expect(getRowForFile(page, 'image2.jpg')).toContainText('image2 .jpg')
		await expect(getRowForFile(page, 'video1.mp4')).toContainText('video1 .mp4')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image2.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('See the title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('image2.jpg')
	})

	test('Should have rendered the previous video and the next image', async () => {
		await expectNavArrows(page)
		// The previous and the next image slides are preloaded around the active one.
		await expect(getMediaInContainer(page, 'img')).toHaveCount(2)
		await expect(getMediaInContainer(page, 'video')).toHaveCount(1)
	})

	test('Should make the previous and the next slides hidden for assistive technologies', async () => {
		for (const type of ['video', 'img'] as const) {
			const media = inactiveMedia(page, type)
			await expect(media.locator('xpath=ancestor::*[@aria-hidden="true"]')).not.toHaveCount(0)
			await expect(media.locator('xpath=ancestor::*[@inert]')).not.toHaveCount(0)
		}
	})

	test('Should make video controls on the next slide not focusable', async () => {
		const control = getViewer(page)
			.locator('.modal-container .viewer__file:not(.viewer__file--active):has(video) button')
			.first()
		// Force a focus attempt via the DOM; the [inert] ancestor must reject it.
		await control.evaluate((el: HTMLElement) => el.focus())
		await expect(control).not.toBeFocused()
	})
})
