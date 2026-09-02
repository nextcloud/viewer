/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import { createRandomUser, login } from '@nextcloud/e2e-test-server/playwright'
import { test as base } from '@playwright/test'

/** The random user created for a test, as returned by `createRandomUser()`. */
export type RandomUser = Awaited<ReturnType<typeof createRandomUser>>

export interface RandomUserFixture {
	/**
	 * The random user created for the current test.
	 * Exposed so helpers (e.g. WebDAV uploads or share creation) can
	 * authenticate with the user credentials.
	 */
	user: RandomUser
}

/**
 * This test fixture ensures a new random user is created and used for the test (current page)
 */
export const test = base.extend<RandomUserFixture>({
	// eslint-disable-next-line no-empty-pattern
	user: async ({}, use) => {
		const user = await createRandomUser()
		await use(user)
	},

	page: async ({ browser, baseURL, user }, use) => {
		// Important: make sure we authenticate in a clean environment by unsetting storage state.
		const page = await browser.newPage({
			storageState: undefined,
			baseURL,
		})

		await login(page.request, user)

		await use(page)
		await page.close()
	},
})
