/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Page } from '@playwright/test'
import type { ViewerFileInfo } from '../support/globals.d.ts'

import { basename as pathBasename } from 'node:path'
import { expect, setupFilesPage, test } from '../support/fixtures.ts'
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

const source = '/apps/theming/img/background/anatoly-mikhaltsov-butterfly-wing-scale.jpg'
const basename = pathBasename(source)

test.describe.serial('Open non-dav files in viewer', () => {
	let page: Page

	test.beforeAll(async ({ browser }) => {
		({ page } = await setupFilesPage(browser, [{ fixture: 'test-card.mp4', mimeType: 'video/mp4' }]))
	})

	test.afterAll(async () => {
		await page.close()
	})

	test('Open background', async () => {
		const fileInfo: ViewerFileInfo = {
			filename: source,
			basename,
			mime: 'image/jpeg',
			source,
			etag: 'abc',
			hasPreview: false,
			fileid: 123,
		}

		await page.evaluate((info) => {
			window.OCA.Viewer.open({ fileInfo: info, list: [info] })
		}, fileInfo)
	})

	test('Does not see a loading animation', async () => {
		await expectViewerLoaded(page)
	})

	test('See the title and close button on the viewer header', async () => {
		await expect(getViewerName(page)).toContainText(basename)
		await expect(getCloseButton(page)).toBeVisible()
	})

	test('Does not see navigation arrows', async () => {
		await expect(getPrevButton(page)).not.toBeVisible()
		await expect(getNextButton(page)).not.toBeVisible()
	})

	test('See the menu but does not see the sidebar button', async () => {
		await expect(getMenuToggle(page)).toBeVisible()
		await expect(page.locator('.action-button__icon.icon-menu-sidebar')).toHaveCount(0)
	})

	test('The image source is the remote url', async () => {
		await expectActiveSource(page, 'img', source)
	})
})
