/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { OGV_UNSUPPORTED } from '../../support/codecs.ts'
import { oddnameTest } from '../../mixins/oddname.ts'

const files: [string, string, string?][] = [
	['video1.mp4', 'video/mp4'],
	['video.mkv', 'video/mkv'],
	['video.ogv', 'video/ogv', OGV_UNSUPPORTED],
	['video.webm', 'video/webm'],
]

for (const [file, mimeType, skipReason] of files) {
	oddnameTest(file, mimeType, false, skipReason)
}
