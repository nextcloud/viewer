/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { ADMIN, expect, loginUser, test } from '../support/fixtures.ts'
import { getRowForFile } from '../support/filesUtils.ts'

test.describe('Handlers queued before the viewer starts', () => {
	test.beforeEach(async ({ page }) => {
		await loginUser(page, ADMIN)
	})

	// The viewer registers the queue as it starts, and again on
	// DOMContentLoaded for handlers queued in between: the second pass used
	// to reject the first ones as duplicates (nextcloud/viewer#3362)
	test('are registered once, without an error', async ({ page }) => {
		const errors: string[] = []
		page.on('console', (message) => {
			if (message.type() === 'error') {
				errors.push(message.text())
			}
		})
		await page.addInitScript(() => {
			window._oca_viewer_handlers = new Map([
				['queued-early', { id: 'queued-early', mimes: ['application/x-queued-early'], component: {} }],
			])
		})

		await page.goto('apps/files')
		await expect(getRowForFile(page, 'welcome.txt')).toBeVisible()

		const registered = await page.evaluate(() => window.OCA.Viewer.availableHandlers
			.filter((handler) => handler.id === 'queued-early').length)
		expect(registered).toBe(1)
		expect(errors.filter((text) => text.includes('Could not register handler'))).toEqual([])
	})
})
