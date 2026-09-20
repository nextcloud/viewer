/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { ADMIN, expect, loginUser, test } from '../support/fixtures.ts'
import { getRowForFile } from '../support/filesUtils.ts'

test.describe('Files default view', () => {
	test.beforeEach(async ({ page }) => {
		await loginUser(page, ADMIN)
	})

	test('See the default files list', async ({ page }) => {
		await page.goto('apps/files')
		await expect(getRowForFile(page, 'welcome.txt')).toContainText('welcome .txt')
	})
})
