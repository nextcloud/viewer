/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createRandomUser, login } from '@nextcloud/e2e-test-server/playwright'
import { expect } from '@playwright/test'
import { test } from '../../support/fixtures/viewer.ts'
import { FilesAppPage } from '../../support/sections/FilesAppPage.ts'
import { ViewerPage } from '../../support/sections/ViewerPage.ts'
import { createShare, ShareType } from '../../support/shares.ts'
import { createFolder } from '../../support/uploadFile.ts'

test.describe('Viewer download restrictions', () => {
	test('does not expose a download control when download is forbidden', async ({ browser, baseURL, user, uploadMedia }) => {
		// The owner shares a folder with the sharee, forbidding download.
		const sharee = await createRandomUser()
		await createFolder(user, '/Photos')
		await uploadMedia('image1.jpg', '/Photos/image1.jpg', 'image/jpeg')
		await createShare(user, '/Photos', {
			shareType: ShareType.User,
			shareWith: sharee.userId,
			attributes: [{ scope: 'permissions', key: 'download', value: false }],
		})

		// Act as the sharee in a separate, clean context.
		const shareeContext = await browser.newContext({ storageState: undefined, baseURL })
		const shareePage = await shareeContext.newPage()
		await login(shareePage.request, sharee)

		const shareeFiles = new FilesAppPage(shareePage)
		const shareeViewer = new ViewerPage(shareePage)

		await shareeFiles.openFilesApp()
		await shareeFiles.openFile('Photos')
		await expect(shareeFiles.getRowByName('image1.jpg')).toBeVisible()

		await shareeFiles.openFile('image1.jpg')
		await shareeViewer.isVisible()
		expect(await shareeViewer.currentName()).toBe('image1.jpg')

		// No download link nor download action is offered in the viewer.
		await expect(shareeViewer.modal.locator('a[download]')).toHaveCount(0)
		await expect(shareeViewer.modal.getByRole('button', { name: /download/i })).toHaveCount(0)

		await shareeContext.close()
	})
})
