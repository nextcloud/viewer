/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

/**
 * Open a public share as an anonymous visitor. Clears the current session first
 * so the owner's login does not leak into the public view.
 *
 * @param page the page
 * @param token the public share token
 */
export async function visitPublicShare(page: Page, token: string): Promise<void> {
	await page.context().clearCookies()
	await page.goto(`s/${token}`)
}
