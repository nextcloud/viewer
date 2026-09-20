/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { createRandomUser, expect, loginUser, test, type User } from '../support/fixtures.ts'
import { getRowForFile, navigateToFolder, openFile } from '../support/filesUtils.ts'
import { getSidebar, getSidebarName, openSidebarFromViewer } from '../support/sidebarUtils.ts'
import {
	getCloseButton,
	getNextButton,
	getPrevButton,
	getViewer,
	getViewerName,
	expectViewerLoaded,
} from '../support/viewerUtils.ts'
import { createLinkShare, createFolder, uploadFile } from '../support/webdav.ts'

/**
 * Build a file name designed to break the viewer if escaping is wrong.
 *
 * @param realName the original file name (its extension is preserved)
 */
function naughtyFileName(realName: string): string {
	const ext = realName.split('.').pop()!
	return (
		'~⛰️ shot of a $[big} mountain`, '
		+ "realy #1's "
		+ '" #_+="%2520%27%22%60%25%21%23 was this called '
		+ realName
		+ 'in the'
		+ '☁️'
		+ '👩‍💻'
		+ '? :* .'
		+ ext.toUpperCase()
	)
}

/**
 * Generate viewer checks for a file with a hostile name, in both the files app
 * and a public share.
 *
 * @param file the fixture file to upload
 * @param mimeType the fixture mime type
 * @param sidebar whether to also exercise the sidebar
 */
export function oddnameTest(file: string, mimeType: string, sidebar = false) {
	const placedName = naughtyFileName(file)
	const folderName = 'Nextcloud "%27%22%60%25%21%23" >`⛰️<' + file + "><` e*'rocks!#?#%~"

	const expectMenuOk = async (page: Page) => {
		await expect(getViewer(page).locator('.icon-error')).toHaveCount(0)
		await expect(getViewerName(page)).toContainText(placedName)
		await expect(getCloseButton(page)).toBeVisible()
	}

	const expectNoArrows = async (page: Page) => {
		await expect(getPrevButton(page)).not.toBeVisible()
		await expect(getNextButton(page)).not.toBeVisible()
	}

	test.describe.serial(`Open ${file} in viewer with a naughty name ${sidebar ? 'with sidebar' : ''}`, () => {
		let page: Page
		let user: User

		test.beforeAll(async ({ browser }) => {
			page = await browser.newPage()
			user = await createRandomUser()
			await createFolder(user, `/${folderName}`)
			await uploadFile(user, file, mimeType, `/${folderName}/${placedName}`)
			await loginUser(page, user)
			await page.goto('apps/files')
			await navigateToFolder(page, folderName)
		})

		test.afterAll(async () => {
			await page.close()
		})

		test(`See ${file} as its naughty name in the list`, async () => {
			await expect(getRowForFile(page, placedName)).toContainText(placedName.replace(/(.*)\./, '$1 .'))
		})

		test('Open the viewer on file click', async () => {
			await openFile(page, placedName)
			await expect(getViewer(page)).toBeVisible()
		})

		test('Does not see a loading animation', async () => {
			await expectViewerLoaded(page)
		})

		test('See the menu icon and title on the viewer header', async () => {
			await expectMenuOk(page)
		})

		test('Does not see navigation arrows', async () => {
			await expectNoArrows(page)
		})

		if (sidebar) {
			test('Open the sidebar', async () => {
				await openSidebarFromViewer(page)
				await expect(getSidebar(page)).toBeVisible()
				await expect(page.locator('.action-button__icon.icon-menu-sidebar')).toHaveCount(0)
				await expect(getSidebarName(page)).toContainText(placedName)
			})
		}

		test('Share the folder with a share link and access the share link', async () => {
			const token = await createLinkShare(user, folderName)
			await page.context().clearCookies()
			await page.goto(`s/${token}`)
		})

		test('Open the viewer on file click (public)', async () => {
			await openFile(page, placedName)
			await expect(getViewer(page)).toBeVisible()
		})

		test('Does not see a loading animation (public)', async () => {
			await expectViewerLoaded(page)
		})

		test('See the menu icon and title on the viewer header (public)', async () => {
			await expectMenuOk(page)
		})

		test('Does not see navigation arrows (public)', async () => {
			await expectNoArrows(page)
		})
	})
}
