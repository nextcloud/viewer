/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { videoTest } from '../../mixins/media.ts'

// Ogg Theora isn't decodable by Chromium's open-source build (canPlayType
// returns '' for `video/ogg; codecs="theora"`), unlike Electron's Cypress
// browser which had it. See mediaTest's `decodable` param.
videoTest('video.ogv', 'video/ogv', false)
