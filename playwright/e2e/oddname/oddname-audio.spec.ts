/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { oddnameTest } from '../../mixins/oddname.ts'

const files: [string, string][] = [
	['audio.mp3', 'audio/mpeg'],
	['audio.ogg', 'audio/ogg'],
]

for (const [file, mimeType] of files) {
	oddnameTest(file, mimeType)
}
