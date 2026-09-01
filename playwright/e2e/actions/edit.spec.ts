/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { test } from '../../support/fixtures/viewer.ts'

test.describe('Viewer image editor action', () => {
	// The image editor component (ImageEditor.vue) exists and the viewer wires an
	// `editing` v-model on the image handler, but no control in the 7.0.0 viewer
	// modal toggles `editing` to true, so the editor cannot be reached from the UI.
	// This test is a placeholder to enable once the edit action is (re)introduced.
	test.fixme('opens the image editor from the viewer', async () => {
		// Blocked: no edit action is rendered in the viewer modal actions menu.
	})
})
