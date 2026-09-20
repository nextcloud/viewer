/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Locator, Page } from '@playwright/test'

import { expect } from '@playwright/test'

// CSS.escape is a browser API unavailable in Node.js (where specs run), so we
// escape every non-word char ourselves. Needed for the oddname specs, which use
// emoji, quotes and percent-encoding in file names.
const cssEscape = (value: string) => value.replace(/([^\w-])/g, '\\$1')

/**
 * Locator for a file row in the files list, by name.
 *
 * @param page the page
 * @param fileName the file name as shown in the list
 */
export function getRowForFile(page: Page, fileName: string): Locator {
	return page.locator(`[data-cy-files-list] tr[data-cy-files-list-row-name="${cssEscape(fileName)}"]`)
}

/**
 * Read the fileid attribute of a file row.
 *
 * @param page the page
 * @param fileName the file name
 */
export async function getFileId(page: Page, fileName: string): Promise<string> {
	const row = getRowForFile(page, fileName)
	await expect(row).toHaveAttribute('data-cy-files-list-row-fileid', /\d+/)
	return (await row.getAttribute('data-cy-files-list-row-fileid'))!
}

/**
 * Open a file by clicking its row (opens the viewer for viewable files).
 *
 * @param page the page
 * @param fileName the file name
 */
export async function openFile(page: Page, fileName: string): Promise<void> {
	await getRowForFile(page, fileName).getByRole('button').first().click()
}

/**
 * Trigger a row action from the row's actions menu.
 *
 * @param page the page
 * @param fileName the file name
 * @param action the data-cy action id (e.g. 'delete')
 */
export async function clickRowAction(page: Page, fileName: string, action: string): Promise<void> {
	await getRowForFile(page, fileName)
		.locator('[data-cy-files-list-row-actions] button')
		.click()
	await page.locator(`[data-cy-files-list-row-action="${cssEscape(action)}"]`).click()
}

/**
 * Reload the current directory via the breadcrumb reload button.
 *
 * @param page the page
 */
export async function reloadFilesList(page: Page): Promise<void> {
	await page.locator('[data-cy-files-content-breadcrumbs] a[title="Reload current directory"]').click()
}

/**
 * Navigate into a folder by clicking its row link.
 *
 * @param page the page
 * @param folderName the folder name
 */
export async function navigateToFolder(page: Page, folderName: string): Promise<void> {
	const navResponse = page.waitForResponse(/\/remote\.php\/dav\/files\//)
	await getRowForFile(page, folderName).locator('[data-cy-files-list-row-name-link]').click()
	await navResponse
}
