/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'

const IMAGES = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']

test.describe('Viewer navigation', () => {
	test.beforeEach(async ({ filesApp, uploadMedia }) => {
		for (const image of IMAGES) {
			await uploadMedia(image, image, 'image/jpeg')
		}
		await filesApp.openFilesApp()
		await expect(filesApp.getRowByName('image1.jpg')).toBeVisible()
	})

	test('navigates forward through the list and loops back to the first image', async ({ filesApp, viewer }) => {
		await filesApp.openFile('image1.jpg')
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe('image1.jpg')

		// The list has several images: navigation arrows are shown.
		await expect(viewer.nextButton).toBeVisible()
		await expect(viewer.previousButton).toBeVisible()

		for (const image of ['image2.jpg', 'image3.jpg', 'image4.jpg']) {
			await viewer.next()
			await viewer.waitForOpen()
			expect(await viewer.currentName()).toBe(image)
			await viewer.expectHandler('image')
		}

		// Looping from the last image back to the first.
		await viewer.next()
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe('image1.jpg')
	})

	test('navigates backward and loops from the first image to the last', async ({ filesApp, viewer }) => {
		await filesApp.openFile('image1.jpg')
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe('image1.jpg')

		await viewer.previous()
		await viewer.waitForOpen()
		expect(await viewer.currentName()).toBe('image4.jpg')
	})

	test('closes the viewer when navigating back in the browser', async ({ page, filesApp, viewer }) => {
		await filesApp.openFile('image1.jpg')
		await viewer.isVisible()

		await page.goBack()
		await expect(viewer.container).toBeHidden()
	})
})
