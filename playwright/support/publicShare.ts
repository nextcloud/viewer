/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import type { Browser, BrowserContext, Page } from '@playwright/test'

import { FilesAppPage } from './sections/FilesAppPage.ts'
import { ViewerPage } from './sections/ViewerPage.ts'

export interface PublicShareSession {
	/** The isolated (unauthenticated) browser context. Close it when done. */
	context: BrowserContext
	/** The page navigated to the public share. */
	page: Page
	/** Files app page object bound to the public share page. */
	filesApp: FilesAppPage
	/** Viewer page object bound to the public share page. */
	viewer: ViewerPage
}

/**
 * Open a public link share in a fresh, unauthenticated browser context.
 * This mirrors an anonymous visitor accessing `/s/<token>`.
 *
 * @param browser - The Playwright browser
 * @param baseURL - The base URL used to resolve the share path
 * @param token - The public share token
 */
export async function openPublicShare(
	browser: Browser,
	baseURL: string | undefined,
	token: string,
): Promise<PublicShareSession> {
	const context = await browser.newContext({ storageState: undefined, baseURL })
	const page = await context.newPage()
	await page.goto(`/s/${token}`)

	return {
		context,
		page,
		filesApp: new FilesAppPage(page),
		viewer: new ViewerPage(page),
	}
}
