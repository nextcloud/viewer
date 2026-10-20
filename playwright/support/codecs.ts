/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Playwright's bundled Chromium ships without the Ogg/Theora decoder (verified
// on CI: canPlayType returns "" and the <video> raises MEDIA_ERR_SRC_NOT_SUPPORTED),
// so the viewer never leaves its loading state for .ogv files. The previous
// Cypress runner used Electron, which bundles the proprietary FFmpeg codecs.
export const OGV_UNSUPPORTED = 'Ogg/Theora is not supported by Playwright\'s bundled Chromium'
