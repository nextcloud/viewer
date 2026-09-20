/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { imageTest } from '../../mixins/image.ts'

// ICOs are served raw from DAV instead of through the preview endpoint.
imageTest('image.ico', 'image/x-icon', '/remote.php/dav/files')
