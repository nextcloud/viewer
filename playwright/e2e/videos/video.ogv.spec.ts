/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { OGV_UNSUPPORTED } from '../../support/codecs.ts'
import { videoTest } from '../../mixins/media.ts'

videoTest('video.ogv', 'video/ogv', OGV_UNSUPPORTED)
