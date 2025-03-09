/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Sheetmusic from '../components/Sheetmusic.vue'

export default {
	id: 'sheetmusic',
	group: 'media',
	mimes: [
		'application/vnd.recordare.musicxml',
		'application/vnd.recordare.musicxml+xml',
		'application/xml'
	],
	component: Sheetmusic,
}
