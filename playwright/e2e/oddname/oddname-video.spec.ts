/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { oddnameTest } from '../../mixins/oddname.ts'

const files: [string, string][] = [
	['video1.mp4', 'video/mp4'],
	['video.mkv', 'video/mkv'],
	['video.ogv', 'video/ogv'],
	['video.webm', 'video/webm'],
]

for (const [file, mimeType] of files) {
	oddnameTest(file, mimeType)
}
