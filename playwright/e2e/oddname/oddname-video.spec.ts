/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { oddnameTest } from '../../mixins/oddname.ts'

// [file, mimeType, decodable] — see mediaTest's `decodable` param in media.ts.
// Ogg Theora isn't decodable by Chromium's open-source build.
const files: [string, string, boolean?][] = [
	['video1.mp4', 'video/mp4'],
	['video.mkv', 'video/mkv'],
	['video.ogv', 'video/ogv', false],
	['video.webm', 'video/webm'],
]

for (const [file, mimeType, decodable] of files) {
	oddnameTest(file, mimeType, false, decodable)
}
