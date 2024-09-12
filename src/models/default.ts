/**
 * SPDX-FileCopyrightText: 2024 STRATO AG
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Default from '../components/Default.vue'
import config from './config.ts'

export default {
	id: 'default',
	group: 'other',
	mimes: [
		config.defaultMimeType,
	],
	mimesAliases: {},
	component: Default,
}
