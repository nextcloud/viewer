/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import { mergeTests } from '@playwright/test'
import { ViewerPage } from '../sections/ViewerPage.ts'
import { uploadFile } from '../uploadFile.ts'
import { test as filesTest } from './files-app.ts'
import { test as randomUserTest } from './random-user.ts'

interface ViewerFixture {
	/** Page object for the viewer modal. */
	viewer: ViewerPage

	/**
	 * Upload a media fixture to the current user root.
	 * Returns a helper bound to the current user's request context.
	 */
	uploadMedia: (fixtureName: string, remoteName?: string, mimeType?: string) => Promise<void>
}

/**
 * Combined test fixture providing a logged-in random user, the Files app page
 * object, the viewer page object and a bound media upload helper.
 */
export const test = mergeTests(randomUserTest, filesTest).extend<ViewerFixture>({
	viewer: async ({ page }, use) => {
		await use(new ViewerPage(page))
	},

	uploadMedia: async ({ user }, use) => {
		await use((fixtureName, remoteName, mimeType) => uploadFile(user, fixtureName, remoteName, mimeType))
	},
})
