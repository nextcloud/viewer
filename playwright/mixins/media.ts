/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'

import { escapeRegExp, expect, setupFilesPage, test, type User } from '../support/fixtures.ts'
import { getRowForFile, openFile } from '../support/filesUtils.ts'
import {
	expectActiveSource,
	expectViewerLoaded,
	getCloseButton,
	getMenuToggle,
	getNextButton,
	getPrevButton,
	getViewer,
	getViewerName,
} from '../support/viewerUtils.ts'

/**
 * Generate the standard viewer checks for a single video/audio file. The media
 * is streamed directly from DAV (partial `206` responses), unlike images which
 * go through the preview endpoint.
 *
 * @param type the media element to assert on
 * @param fileName the media file to upload and test against
 * @param mimeType the media mime type
 */
function mediaTest(type: 'video' | 'audio', fileName: string, mimeType: string, skipReason?: string) {
	test.describe.serial(`Open ${fileName} in viewer`, () => {
		test.skip(!!skipReason, skipReason)

		let page: Page
		let user: User

		test.beforeAll(async ({ browser }) => {
			({ page, user } = await setupFilesPage(browser, [{ fixture: fileName, mimeType }]))
		})

		test.afterAll(async () => {
			await page.close()
		})

		test(`See ${fileName} in the list`, async () => {
			await expect(getRowForFile(page, fileName)).toContainText(fileName.replace(/(.*)\./, '$1 .'))
		})

		test('Open the viewer on file click and wait for loading to end', async () => {
			const sourceRegExp = new RegExp(`/remote\\.php/dav/files/${escapeRegExp(user.userId)}/${escapeRegExp(fileName)}`)
			// Media is streamed with HTTP range requests, so the DAV GET answers 206.
			const sourceResponse = page.waitForResponse((r) => sourceRegExp.test(r.url()) && r.status() === 206)

			await openFile(page, fileName)
			await expect(getViewer(page)).toBeVisible()

			await sourceResponse
			await expectViewerLoaded(page)
		})

		test('See the menu icon and title on the viewer header', async () => {
			await expect(getViewerName(page)).toContainText(fileName)
			await expect(getMenuToggle(page)).toBeVisible()
			await expect(getCloseButton(page)).toBeVisible()
		})

		test('Does not see navigation arrows', async () => {
			await expect(getPrevButton(page)).not.toBeVisible()
			await expect(getNextButton(page)).not.toBeVisible()
		})

		test(`The ${type} source is the remote url`, async () => {
			await expectActiveSource(page, type, `/remote.php/dav/files/${user.userId}/${fileName}`)
		})
	})
}

/**
 * Generate the standard viewer checks for a single video file.
 *
 * @param fileName the video to upload and test against
 * @param mimeType the video mime type
 * @param skipReason if set, the whole group is skipped with this reason
 */
export function videoTest(fileName: string, mimeType: string, skipReason?: string) {
	mediaTest('video', fileName, mimeType, skipReason)
}

/**
 * Generate the standard viewer checks for a single audio file.
 *
 * @param fileName the audio to upload and test against
 * @param mimeType the audio mime type
 */
export function audioTest(fileName = 'audio.ogg', mimeType = 'audio/ogg') {
	mediaTest('audio', fileName, mimeType)
}
