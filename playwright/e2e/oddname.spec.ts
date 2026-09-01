/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { MediaKind } from '../support/sections/ViewerPage.ts'

import { expect } from '@playwright/test'
import { test } from '../support/fixtures/viewer.ts'
import { openPublicShare } from '../support/publicShare.ts'
import { createLinkShare } from '../support/shares.ts'
import { createFolder } from '../support/uploadFile.ts'

/**
 * Build a name aimed at breaking the viewer in case of escaping errors.
 *
 * @param realName - The original file name
 */
function naughtyFileName(realName: string): string {
	const ext = realName.split('.').pop() ?? ''
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
 * Build a folder name with special characters around a file name.
 *
 * @param realName - The original file name
 */
function naughtyFolderName(realName: string): string {
	return 'Nextcloud "%27%22%60%25%21%23" >`⛰️<' + realName + "><` e*'rocks!#?#%~"
}

interface OddCase {
	fixture: string
	mime: string
	kind: MediaKind
}

const CASES: OddCase[] = [
	{ fixture: 'image.png', mime: 'image/png', kind: 'image' },
	{ fixture: 'video1.mp4', mime: 'video/mp4', kind: 'video' },
	{ fixture: 'audio.mp3', mime: 'audio/mpeg', kind: 'audio' },
]

for (const testCase of CASES) {
	const placedName = naughtyFileName(testCase.fixture)
	const folderName = naughtyFolderName(testCase.fixture)

	test.describe(`Odd file name (${testCase.fixture})`, () => {
		test.beforeEach(async ({ user, filesApp, uploadMedia }) => {
			await createFolder(user, `/${folderName}`)
			await uploadMedia(testCase.fixture, `/${folderName}/${placedName}`, testCase.mime)
			await filesApp.openFilesApp()
		})

		test('opens a file with an odd name in the viewer', async ({ filesApp, viewer }) => {
			await filesApp.openFile(folderName)
			await expect(filesApp.getRowByName(placedName)).toBeVisible()

			await filesApp.openFile(placedName)
			await viewer.waitForOpen()

			expect(await viewer.currentName()).toBe(placedName)
			await viewer.expectHandler(testCase.kind)

			await viewer.close()
		})
	})
}

test.describe('Odd file name (image, sidebar and public share)', () => {
	const fixture = 'image.png'
	const placedName = naughtyFileName(fixture)
	const folderName = naughtyFolderName(fixture)

	test.beforeEach(async ({ user, filesApp, uploadMedia }) => {
		await createFolder(user, `/${folderName}`)
		await uploadMedia(fixture, `/${folderName}/${placedName}`, 'image/png')
		await filesApp.openFilesApp()
	})

	test('opens the sidebar for an odd file name', async ({ page, filesApp, viewer }) => {
		await filesApp.openFile(folderName)
		await filesApp.openFile(placedName)
		await viewer.waitForOpen()

		await viewer.openSidebar()

		const sidebar = page.locator('aside.app-sidebar')
		await expect(sidebar).toBeVisible()
		await expect(sidebar.locator('.app-sidebar-header__mainname')).toContainText(placedName)
	})

	test('opens an odd file name from a public link share', async ({ browser, baseURL, user }) => {
		const token = await createLinkShare(user, `/${folderName}`)

		const { context, filesApp, viewer } = await openPublicShare(browser, baseURL, token)
		try {
			await expect(filesApp.getRowByName(placedName)).toBeVisible()

			await filesApp.openFile(placedName)
			await viewer.waitForOpen()

			expect(await viewer.currentName()).toBe(placedName)
			await viewer.expectHandler('image')
		} finally {
			await context.close()
		}
	})
})
