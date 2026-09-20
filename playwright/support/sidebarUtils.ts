/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Locator, Page } from '@playwright/test'

import { getMenuItem, openHeaderMenu } from './viewerUtils.ts'

/** The files/viewer sidebar. */
export const getSidebar = (page: Page): Locator => page.locator('aside.app-sidebar')

/** The main file name shown in the sidebar header. */
export const getSidebarName = (page: Page): Locator =>
	getSidebar(page).locator('.app-sidebar-header .app-sidebar-header__mainname')

/**
 * Open the sidebar from the viewer's header actions menu.
 *
 * @param page the page
 */
export async function openSidebarFromViewer(page: Page): Promise<void> {
	await openHeaderMenu(page)
	await getMenuItem(page, 'Open sidebar').click()
}

/**
 * Close the sidebar via its close button.
 *
 * @param page the page
 */
export async function closeSidebar(page: Page): Promise<void> {
	await getSidebar(page).getByRole('button', { name: 'Close sidebar' }).click()
}
