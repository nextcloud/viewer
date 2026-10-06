/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRandomUser, expect, test } from '../../support/fixtures.ts'
import { visitPublicShare } from '../../support/shareUtils.ts'
import {
	expectActiveSource,
	expectViewerLoaded,
	getCloseButton,
	getMenuToggle,
} from '../../support/viewerUtils.ts'
import { createLinkShare, uploadFile } from '../../support/webdav.ts'

test.describe('See shared single file with link share', () => {
	let imageToken: string
	let videoToken: string

	test.beforeAll(async () => {
		const user = await createRandomUser()
		await uploadFile(user, 'image1.jpg', 'image/jpeg')
		await uploadFile(user, 'video1.mp4', 'video/mp4')
		imageToken = await createLinkShare(user, '/image1.jpg')
		videoToken = await createLinkShare(user, '/video1.mp4')
	})

	test('Opens the shared image in the viewer', async ({ page }) => {
		const imageResponse = page.waitForResponse(
			(r) => r.url().includes('/apps/files_sharing/publicpreview/') && r.status() === 200,
		)
		// A single-file share opens the viewer automatically on load.
		await visitPublicShare(page, imageToken)
		await imageResponse

		await expectViewerLoaded(page)
		await expectActiveSource(page, 'img', '/apps/files_sharing/publicpreview/')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Opens the shared video in the viewer', async ({ page }) => {
		const videoResponse = page.waitForResponse((r) => r.url().includes('/public.php/dav/files/'))
		// A single-file share opens the viewer automatically on load.
		await visitPublicShare(page, videoToken)
		await videoResponse

		await expectViewerLoaded(page)
		await expectActiveSource(page, 'video', `/public.php/dav/files/${videoToken}`)
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Opens the shared image before the page finished loading', async ({ page }) => {
		// Deferred scripts run in document order and DOMContentLoaded waits for all of them,
		// so a slow last script lets the files app open the shared file before the event fires
		await page.route('**/playwright-delay-dom-content-loaded.js', async (route) => {
			await new Promise((resolve) => setTimeout(resolve, 3000))
			await route.fulfill({ contentType: 'text/javascript', body: '' })
		})
		await page.route(`**/s/${imageToken}`, async (route) => {
			const response = await route.fetch()
			const body = await response.text()
			const nonce = body.match(/nonce="([^"]+)"/)?.[1] ?? ''
			await route.fulfill({
				response,
				body: body.replace('</body>', `<script defer nonce="${nonce}" src="/playwright-delay-dom-content-loaded.js"></script></body>`),
			})
		})

		await visitPublicShare(page, imageToken)

		await expectViewerLoaded(page)
		await expectActiveSource(page, 'img', '/apps/files_sharing/publicpreview/')
		await expect(page.getByText('There is no plugin available to display this file type')).toHaveCount(0)
	})
})
