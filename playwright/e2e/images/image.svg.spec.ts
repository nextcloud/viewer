/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { imageTest } from '../../mixins/image.ts'

// SVGs are inlined as a data URI.
imageTest('image.svg', 'image/svg+xml', 'data:image/svg+xml;base64')
