/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { oddnameTest } from '../../mixins/oddname.ts'

const files: [string, string][] = [
	['image1.jpg', 'image/jpeg'],
	['image.gif', 'image/gif'],
	['image.png', 'image/png'],
	['image-small.png', 'image/png'],
	['image.svg', 'image/svg'],
]

for (const [file, mimeType] of files) {
	oddnameTest(file, mimeType)
}
