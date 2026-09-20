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

test.describe.serial('Open mp4 videos in viewer', () => {
	let page: Page
	let user: User

	test.beforeAll(async ({ browser }) => {
		({ page, user } = await setupFilesPage(browser, [
			{ fixture: 'video1.mp4', mimeType: 'video/mp4' },
			{ fixture: 'video2.mp4', mimeType: 'video/mp4' },
		]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('See videos in the list', async () => {
		await expect(getRowForFile(page, 'video1.mp4')).toContainText('video1 .mp4')
		await expect(getRowForFile(page, 'video2.mp4')).toContainText('video2 .mp4')
	})

	test('Open the viewer on file click', async () => {
		await openFile(page, 'video1.mp4')
		await expect(getViewer(page)).toBeVisible()
	})

	test('See the menu icon and title on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText('video1.mp4')
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does see next navigation arrows', async () => {
		await expect(getMediaInContainer(page, 'video')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The video source is the remote url (video1)', async () => {
		await expectActiveSource(page, 'video', `/remote.php/dav/files/${user.userId}/video1.mp4`)
	})

	test('Does not see a loading animation (video1)', async () => {
		await expectViewerLoaded(page)
	})

	test('Show video 2 on next', async () => {
		await goNext(page)
		await expect(getMediaInContainer(page, 'video')).toHaveCount(2)
		await expectNavArrows(page)
	})

	test('The video source is the remote url (video2)', async () => {
		await expectActiveSource(page, 'video', `/remote.php/dav/files/${user.userId}/video2.mp4`)
	})

	test('Does not see a loading animation (video2)', async () => {
		await expectViewerLoaded(page)
	})
})
