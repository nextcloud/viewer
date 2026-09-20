/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import { closeSidebar, getSidebar, getSidebarName, openSidebarFromViewer } from '../../support/sidebarUtils.ts'
import {
	expectViewerLoaded,
	getCloseButton,
	getMenuItem,
	getMenuToggle,
	getNextButton,
	getPrevButton,
	getViewer,
	getViewerName,
	openHeaderMenu,
} from '../../support/viewerUtils.ts'

test.describe.serial('Open the sidebar from the viewer and open viewer with sidebar already opened', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [1, 2, 3, 4].map((i) => ({
			fixture: `image${i}.jpg`,
			mimeType: 'image/jpeg',
		}))))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See images in the list', async () => {
		for (const i of [1, 2, 3, 4]) {
			await expect(getRowForFile(page, `image${i}.jpg`)).toContainText(`image${i} .jpg`)
		}
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('See the menu icon and title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Open the sidebar', async () => {
		await openSidebarFromViewer(page)
		await expect(getSidebar(page)).toBeVisible()
		// The sidebar toggle is hidden while the sidebar is open.
		await expect(page.locator('.action-button__icon.icon-menu-sidebar')).toHaveCount(0)
		await expect(getSidebarName(page)).toContainText('image1.jpg')
	})

	test('Change to next image with sidebar open', async () => {
		await expect(getSidebar(page)).toBeVisible()
		await expect(getSidebarName(page)).toContainText('image1.jpg')
		await getNextButton(page).click()
		await expect(getSidebarName(page)).toContainText('image2.jpg')
	})

	test('Change to previous image with sidebar open', async () => {
		await expect(getSidebar(page)).toBeVisible()
		await expect(getSidebarName(page)).toContainText('image2.jpg')
		await getPrevButton(page).click()
		await expect(getSidebarName(page)).toContainText('image1.jpg')
	})

	test('Close the sidebar', async () => {
		await closeSidebar(page)
		await expect(getSidebar(page)).not.toBeVisible()
		await expect(getMenuToggle(page)).toBeVisible()
		await openHeaderMenu(page)
		// The "Open sidebar" entry is back once the sidebar is closed.
		await expect(getMenuItem(page, 'Open sidebar')).toBeVisible()
	})

	test('Open the viewer with the sidebar open', async () => {
		await getCloseButton(page).click()
		await expect(getViewer(page)).toHaveCount(0)

		// Open the sidebar from the files list (without the viewer).
		await getRowForFile(page, 'image1.jpg').locator('[data-cy-files-list-row-mtime]').click()
		await expect(getSidebar(page)).toBeVisible()
		await expect(page).toHaveURL(/opendetails=true/)

		await openFile(page, 'image1.jpg')
		await expectViewerLoaded(page)

		// Close the sidebar while the viewer is open.
		await closeSidebar(page)
		await expect(getSidebar(page)).not.toBeVisible()
		await expect(getMenuToggle(page)).toBeVisible()
	})
})
