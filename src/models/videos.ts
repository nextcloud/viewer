/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineCustomElement } from 'vue'
import { t } from '@nextcloud/l10n'

import MovieOutlineSvg from '@mdi/svg/svg/movie-outline.svg?raw'

import { logger } from '../services/logger'
import { registerHandler } from '../api_package'
import Videos from '../components/Videos.vue'


const browserSupportedMimes = [
	'video/mpeg',
	'video/ogg',
	'video/webm',
	'video/mp4',
	'video/x-m4v',
	'video/x-flv',
	'video/quicktime',
]

export const aliasedMimes = {
	'video/x-matroska': 'video/webm',
}

export const tagname = 'oca-viewer-video'
export function registerVideoCustomElement() {
	const VideoElement = defineCustomElement(Videos, {
		shadowRoot: false,
	})

	// Register the custom element.
	window.customElements.define(tagname, VideoElement)
}

export function registerVideoHandler() {
	registerHandler({
		id: 'videos',
		displayName: t('viewer', 'Video player'),
		tagname,

		iconSvgInline: MovieOutlineSvg,

		group: 'media',

		enabled: (nodes) => {
			if (nodes.length === 0) {
				return false
			}

			return nodes.every(node => {
				// Always allow browser supported mimes
				if (browserSupportedMimes.includes(node.mime)) {
					return true
				}

				// Also allow aliased mimes
				if (Object.keys(aliasedMimes).includes(node.mime)
					&& browserSupportedMimes.includes(aliasedMimes[node.mime])) {
					return true
				}
				return false
			})
		},
	})
	logger.info('Video handler registered', { tagname })
}