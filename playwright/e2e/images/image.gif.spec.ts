/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { imageTest } from '../../mixins/image.ts'

// GIFs are served raw from DAV instead of through the preview endpoint.
imageTest('image.gif', 'image/gif', '/remote.php/dav/files')
