/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Sheetmusic from '../components/Sheetmusic.vue'

export default {
	id: 'sheetmusic',
	group: 'media',
	mimes: [
		// These are the official mime types but nextcloud has no proper mechanism to 
		// update existing files to match them
		'application/vnd.recordare.musicxml',
		'application/vnd.recordare.musicxml+xml',
		// this registers a binary file for the sheet viewer. 
		// The Viewer itself checks if it can make sense of it
		'application/octet-stream', 
	],
	component: Sheetmusic,
}
