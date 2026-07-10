/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { createRandomUser, expect, loginUser, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../../support/filesUtils.ts'
import { getSidebar } from '../../support/sidebarUtils.ts'
import { visitPublicShare } from '../../support/shareUtils.ts'
import {
	expectViewerLoaded,
	getCloseButton,
	getMenuToggle,
	getViewer,
	getViewerName,
} from '../../support/viewerUtils.ts'
import { createFolder, createLinkShare, uploadFile } from '../../support/webdav.ts'

const fileName = 'image1.jpg'

test.describe.serial(`Download ${fileName} in viewer`, () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage()
		user = await createRandomUser()
		await createFolder(user, '/Photos')
		await uploadFile(user, 'image1.jpg', 'image/jpeg', '/Photos/image1.jpg')
		await uploadFile(user, 'image2.jpg', 'image/jpeg', '/Photos/image2.jpg')
		await loginUser(page, user)
		await page.goto('apps/files')
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See the default files list', async () => {
		await expect(getRowForFile(page, 'welcome.txt')).toContainText('welcome .txt')
		await expect(getRowForFile(page, 'Photos')).toContainText('Photos')
	})

	test('See shared files in the list', async () => {
		await navigateToFolder(page, 'Photos')
		await expect(getRowForFile(page, 'image1.jpg')).toContainText('image1 .jpg')
		await expect(getRowForFile(page, 'image2.jpg')).toContainText('image2 .jpg')
	})

	test('Share the Photos folder with a share link, disable download and access the share link', async () => {
		const token = await createLinkShare(user, '/Photos')

		// Open the share sidebar from the breadcrumbs.
		const sharingApi = page.waitForResponse(/\/apps\/files_sharing\/api\/v1\/shares/)
		await page.getByRole('navigation', { name: 'Current directory path' })
			.getByRole('button', { name: 'Photos' })
			.click()
		await page.getByRole('menuitem', { name: 'Share' }).click()
		await expect(getSidebar(page)).toBeVisible()
		await sharingApi

		// Open the link share settings and switch on "Hide download".
		await page.locator('.sharing-link-list > .sharing-entry button[aria-label*="Actions for "]').click()
		await page.getByRole('menuitem', { name: 'Customize link' }).click()
		await page.getByRole('button', { name: 'Advanced settings' }).click()

		// NcCheckboxRadioSwitch hides the real <input>; toggle it by clicking the
		// visible label text, then read the state from the (hidden) checkbox.
		const hideSwitch = page.locator('.checkbox-radio-switch', { hasText: 'Hide download' })
		await hideSwitch.locator('.checkbox-radio-switch__text').click()
		await expect(hideSwitch.locator('input[type="checkbox"]')).toBeChecked()

		const updateShare = page.waitForResponse(
			(r) => /\/apps\/files_sharing\/api\/v1\/shares\//.test(r.url()) && r.request().method() === 'PUT',
		)
		await page.getByRole('button', { name: 'Update share' }).click()
		await updateShare

		await visitPublicShare(page, token)
	})

	test('See only view action', async () => {
		for (const file of ['image1.jpg', 'image2.jpg']) {
			const actions = getRowForFile(page, file).locator('[data-cy-files-list-row-actions] button')
			await actions.click()
			const menu = page.locator('[role="menu"]:visible')
			await expect(menu.getByRole('menuitem')).toHaveCount(1)
			await expect(menu.getByRole('menuitem', { name: 'View' })).toBeVisible()
			await actions.click()
		}
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'image1.jpg')
		await expect(getViewer(page)).toBeVisible()
	})

	// TODO: Fix download-disabled shares on the server.
	test.fixme('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	// TODO: Fix download-disabled shares on the server.
	test.fixme('See the title on the viewer header but not the Download nor the menu button', async () => {
		await expect(getViewerName(page)).toContainText('image1.jpg')
		await expect(page.locator('body a[download="image1.jpg"]')).toHaveCount(0)
		await expect(getMenuToggle(page)).toHaveCount(0)
		await expect(getCloseButton(page)).toBeVisible()
	})
})
