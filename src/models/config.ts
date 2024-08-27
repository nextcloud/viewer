/**
 * SPDX-FileLicenseText: 2024 STRATO AG
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * SPDX-FileContributor: Mikhailo Matiyenko-Kupriyanov <kupriyanov@strato.de>
 */
import { loadState } from '@nextcloud/initial-state'

const alwaysShowViewer = loadState<boolean>('viewer', 'always_show_viewer', false)

export default {
	alwaysShowViewer,
}
