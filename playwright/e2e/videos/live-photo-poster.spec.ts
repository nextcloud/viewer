/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { createRandomUser, expect, loginUser, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { expectViewerLoaded, getActiveMedia, getViewer } from '../../support/viewerUtils.ts'
import { setLivePhotoMetadata, uploadFile } from '../../support/webdav.ts'

// The two files deliberately do not share a base name: a poster resolved by
// file name (the old heuristic) would not match, only the DAV live photo
// metadata can point the video at its still frame.
test.describe.serial('Live photo poster', () => {
	let page: Page
	let user: User
	let stillId: number
	let videoId: number

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage()
		user = await createRandomUser()

		// Upload both files first so each side can reference the other's id.
		stillId = await uploadFile(user, 'image1.jpg', 'image/jpeg', '/still.jpg')
		videoId = await uploadFile(user, 'video1.mp4', 'video/mp4', '/clip.mp4')
		await setLivePhotoMetadata(user, '/still.jpg', videoId)
		await setLivePhotoMetadata(user, '/clip.mp4', stillId)

		await loginUser(page, user)
		await page.goto('apps/files')
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See both live photo files in the list', async () => {
		await expect(getRowForFile(page, 'still.jpg')).toBeVisible()
		await expect(getRowForFile(page, 'clip.mp4')).toBeVisible()
	})

	test('Use the linked image as video poster', async () => {
		await openFile(page, 'clip.mp4')
		await expect(getViewer(page)).toBeVisible()
		await expectViewerLoaded(page)

		const video = getActiveMedia(page, 'video')
		await expect(video).toHaveAttribute('poster', new RegExp(`[?&]fileId=${stillId}(&|$)`))
		await expect(video).not.toHaveAttribute('poster', new RegExp(`[?&]fileId=${videoId}(&|$)`))

		const poster = await video.getAttribute('poster')
		await test.info().attach('video-poster-url.txt', { body: poster ?? '', contentType: 'text/plain' })

		await video.evaluate((element: HTMLVideoElement) => element.pause())
		await test.info().attach('viewer-live-photo-poster.png', {
			body: await page.screenshot({ fullPage: true }),
			contentType: 'image/png',
		})
	})
})
