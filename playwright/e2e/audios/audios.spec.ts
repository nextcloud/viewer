/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { expect, setupFilesPage, test, type User } from '../../support/fixtures.ts'
import { getRowForFile, openFile } from '../../support/filesUtils.ts'
import {
	expectActiveSource,
	expectNavArrows,
	expectViewerLoaded,
	getMediaInContainer,
	getMenuToggle,
	getCloseButton,
	getViewer,
	getViewerName,
	goNext,
} from '../../support/viewerUtils.ts'

test.describe.serial('Open mp3 and ogg audio in viewer', () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		({ page, user } = await setupFilesPage(browser, [
			{ fixture: 'audio.mp3', mimeType: 'audio/mpeg' },
			{ fixture: 'audio.ogg', mimeType: 'audio/ogg' },
		]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See audios in the list', async () => {
		await expect(getRowForFile(page, 'audio.mp3')).toContainText('audio .mp3')
		await expect(getRowForFile(page, 'audio.ogg')).toContainText('audio .ogg')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'audio.mp3')
		await expect(getViewer(page)).toBeVisible()
	})

	test('See the menu icon and title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('audio.mp3')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does see next navigation arrows', async () => {
		await expect(getMediaInContainer(page, 'audio')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The audio source is the remote url (mp3)', async () => {
		await expectActiveSource(page, 'audio', `/remote.php/dav/files/${user.userId}/audio.mp3`)
	})

	test('Does not see a loading animation (mp3)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show audio.ogg on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'audio')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The audio source is the remote url (ogg)', async () => {
		await expectActiveSource(page, 'audio', `/remote.php/dav/files/${user.userId}/audio.ogg`)
	})

	test('Does not see a loading animation (ogg)', async () => {
		await expectViewerLoaded(page)
	})
})
