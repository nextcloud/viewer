/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect, mergeTests } from '@playwright/test'
import { test as filesTest } from '../support/fixtures/files-app.ts'
import { test as randomUserTest } from '../support/fixtures/random-user.ts'

const test = mergeTests(randomUserTest, filesTest)

test('Can see the files list', async ({ filesApp }) => {
	await filesApp.openFilesApp()
	await expect(filesApp.tableFilesList).toBeVisible()
})
