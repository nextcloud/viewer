/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Used by the playwright workflow to merge the blob reports of all shards
export default {
	testDir: 'playwright',
	reporter: [['html', { open: 'never' }]],
}
