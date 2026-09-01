/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'
import { openPublicShare } from '../support/publicShare.ts'
import { createLinkShare } from '../support/shares.ts'
import { createFolder } from '../support/uploadFile.ts'

test.describe('Viewer on public link shares', () => {
	test('opens a single shared image in the viewer', async ({ browser, baseURL, user, uploadMedia }) => {
		await uploadMedia('image1.jpg', 'image1.jpg', 'image/jpeg')
		const token = await createLinkShare(user, '/image1.jpg')

		const { context, viewer } = await openPublicShare(browser, baseURL, token)
		try {
			// A single-file public share opens the viewer automatically. On a
			// public share the node is exposed under the share token, so we only
			// assert the correct handler renders, not the (token) file name.
			await viewer.waitForOpen()

			await viewer.expectHandler('image')
		} finally {
			await context.close()
		}
	})

	test('opens a single shared video in the viewer', async ({ browser, baseURL, user, uploadMedia }) => {
		await uploadMedia('video1.mp4', 'video1.mp4', 'video/mp4')
		const token = await createLinkShare(user, '/video1.mp4')

		const { context, viewer } = await openPublicShare(browser, baseURL, token)
		try {
			// A single-file public share opens the viewer automatically.
			await viewer.waitForOpen()

			await viewer.expectHandler('video')
			// The public share serves the video from the public WebDAV endpoint.
			await expect(viewer.mediaElement('video'))
				.toHaveAttribute('src', new RegExp(`/public\\.php/dav/files/${token}`))
		} finally {
			await context.close()
		}
	})

	test('navigates through a shared folder of images', async ({ browser, baseURL, user, uploadMedia }) => {
		await createFolder(user, '/Photos')
		const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']
		for (const image of images) {
			await uploadMedia(image, `/Photos/${image}`, 'image/jpeg')
		}
		const token = await createLinkShare(user, '/Photos')

		const { context, filesApp, viewer } = await openPublicShare(browser, baseURL, token)
		try {
			await expect(filesApp.getRowByName('image1.jpg')).toBeVisible()

			await filesApp.openFile('image1.jpg')
			await viewer.waitForOpen()
			expect(await viewer.currentName()).toBe('image1.jpg')

			await expect(viewer.nextButton).toBeVisible()
			await expect(viewer.previousButton).toBeVisible()

			for (const image of ['image2.jpg', 'image3.jpg', 'image4.jpg']) {
				await viewer.next()
				await viewer.waitForOpen()
				expect(await viewer.currentName()).toBe(image)
				await viewer.expectHandler('image')
			}
		} finally {
			await context.close()
		}
	})
})
