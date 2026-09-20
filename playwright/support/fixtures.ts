/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { User } from '@nextcloud/e2e-test-server'
import type { Browser, Page } from '@playwright/test'

import { createRandomUser, login } from '@nextcloud/e2e-test-server/playwright'
import { test, expect } from '@playwright/test'
import { uploadFile } from './webdav.ts'

export { test, expect, createRandomUser }
export { escapeRegExp } from './strings.ts'
export type { User }

/** Static admin credentials for specs that need the default admin account. */
export const ADMIN: User = { userId: 'admin', password: 'admin', language: 'en' } as User

/**
 * Log the page's browser context in as the given user.
 *
 * `login` authenticates the shared cookie jar via `page.request`, so subsequent
 * `page.goto` calls are authenticated.
 *
 * @param page the page whose context should be authenticated
 * @param user the user to log in as
 */
export async function loginUser(page: Page, user: User): Promise<void> {
	await login(page.request, user)
}

export interface Upload {
	fixture: string
	mimeType: string
	target?: string
}

/**
 * Create a random user, upload fixtures for them, log in on a fresh page and
 * open the Files app. This is the shared `beforeAll` setup for the serial specs
 * that mirror the previous Cypress `before` hooks.
 *
 * @param browser the Playwright browser to open a page from
 * @param uploads fixtures to upload before logging in
 */
export async function setupFilesPage(
	browser: Browser,
	uploads: Upload[] = [],
): Promise<{ page: Page, user: User }> {
	const page = await browser.newPage()
	const user = await createRandomUser()
	for (const { fixture, mimeType, target } of uploads) {
		await uploadFile(user, fixture, mimeType, target)
	}
	await loginUser(page, user)
	await page.goto('apps/files')
	return { page, user }
}
