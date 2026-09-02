/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect, test } from '@playwright/test'

/**
 * Global setup project referenced by playwright.config.ts.
 *
 * The Nextcloud docker container is started and configured by the webServer
 * command (`playwright:start-nextcloud`). This setup only asserts the instance
 * is installed and reachable before the test projects depending on it run.
 */
test('Nextcloud server is up and installed', async ({ request }) => {
	const response = await request.get('/status.php')
	expect(response.ok()).toBe(true)

	const status = await response.json()
	expect(status.installed).toBe(true)
})
