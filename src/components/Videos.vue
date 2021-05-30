<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @license AGPL-3.0-or-later
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
 -->

<template>
	<!-- Plyr currently replaces the parent. Wrapping to prevent this
	https://github.com/redxtech/vue-plyr/issues/259 -->
	<div v-if="src">
		<VuePlyr ref="plyr"
			:options="options"
			:style="{
				height: height + 'px',
				width: width + 'px'
			}">
			<video ref="video"
				:autoplay="active ? true : null"
				:playsinline="true"
				:poster="livePhotoPath"
				:src="src"
				preload="metadata"
				@ended="donePlaying"
				@canplay="doneLoading"
				@loadedmetadata="onLoadedMetadata">

				<track v-for="track in tracks"
					:key="track"
					:src="track.davPath"
					:label="track.locale"
					kind="captions"
					:srclang="track.language">

				<!-- Omitting `type` on purpose because most of the
					browsers auto detect the appropriate codec.
					Having it set force the browser to comply to
					the provided mime instead of detecting a potential
					compatibility. -->

				{{ t('viewer', 'Your browser does not support videos.') }}
			</video>
		</VuePlyr>
	</div>
</template>

<script>
import Vue from 'vue'
import VuePlyr from '@skjnldsv/vue-plyr'
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'
import logger from '../services/logger.js'
import { extractFilePaths } from '../utils/fileUtils'
import getFileList from '../services/FileList'
import { generateUrl } from '@nextcloud/router'
import axios from '@nextcloud/axios'

const liveExt = ['jpg', 'jpeg', 'png']
const liveExtRegex = new RegExp(`\\.(${liveExt.join('|')})$`, 'i')

Vue.use(VuePlyr)

export default {
	name: 'Videos',

	data() {
		// This is required so that tracks is declared and reactive
		// Otherwise updates may fail to make it to plyr
		return { tracks: [] }
	},

	computed: {
		livePhoto() {
			return this.fileList.find(file => {
				// if same filename and extension is allowed
				return file.filename !== this.filename
					&& file.basename.startsWith(this.name)
					&& liveExtRegex.test(file.basename)
			})
		},
		livePhotoPath() {
			return this.livePhoto && this.getPreviewIfAny(this.livePhoto)
		},
		player() {
			return this.$refs.plyr.player
		},
		options() {
			return {
				autoplay: this.active === true,
				// Make sure plyr _reacts_ on caption updates
				captions: { active: false, language: 'auto', update: true },
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
				loadSprite: false,
			}
		},
	},

	watch: {
		active(val, old) {
			// the item was hidden before and is now the current view
			if (val === true && old === false) {
				this.player.play()

			// the item was playing before and is now hidden
			} else if (val === false && old === true) {
				this.player.pause()
			}
		},
	},

	mounted() {
		// Prevent swiping to the next/previous item when scrubbing the timeline or changing volume
		[...this.$el.querySelectorAll('.plyr__controls__item')].forEach(control => {
			if (!control?.addEventListener) {
				return
			}
			control.addEventListener('mouseenter', this.disableSwipe)
			control.addEventListener('mouseleave', this.enableSwipe)
		})
	},

	beforeDestroy() {
		// Force stop any ongoing request
		logger.debug('Closing video stream', { filename: this.filename })
		this.$refs.video.pause()
		this.player.stop()
		this.player.destroy()
	},

	methods: {
		// Updates the dimensions of the modal
		updateVideoSize() {
			this.naturalHeight = this.$refs.video?.videoHeight
			this.naturalWidth = this.$refs.video?.videoWidth
			this.updateHeightWidth()
		},

		// Fetch caption tracks and build HTML5 block
		fetchTracks() {
			const url = generateUrl('/apps/viewer/video/tracks')
			const params = { params: { videoPath: this.filename } }
			axios.get(url, params).then(response => {
				const davDir = this.davPath.replace(/[^/]*$/, '')
				const tracks = response.data
				const capTracks = []
				for (const track of tracks) {
					capTracks.push({
						davPath: davDir + track.basename,
						language: track.language,
						locale: track.locale,
					})
				}
				this.tracks = capTracks
			})
		},

		donePlaying() {
			// reset and show poster after play
			this.$refs.video.autoplay = false
			this.$refs.video.load()
		},

		onLoadedMetadata() {
			this.fetchTracks()
			this.updateVideoSize()
			// Force any further loading once we have the metadata
			if (!this.active) {
				this.player.stop()
			}
		},
	},
}
</script>

<style scoped lang="scss">
video {
	/* over arrows in tiny screens */
	z-index: 20050;
	align-self: center;
	max-width: 100%;
	max-height: 100%;
	background-color: black;

	justify-self: center;
}

::v-deep {
	.plyr:-webkit-full-screen video {
		width: 100% !important;
		height: 100% !important;
	}
	.plyr:fullscreen video {
		width: 100% !important;
		height: 100% !important;
	}
	.plyr__progress__container {
		flex: 1 1;
	}

	.plyr {
		@import '../mixins/Plyr';

		// Override server font style
		button {
			color: white;

			&:hover,
			&:focus {
				color: var(--color-primary-text);
				background-color: var(--color-primary-element);
			}
		}
	}
}

</style>
