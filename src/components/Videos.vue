<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @license GNU AGPL version 3 or any later version
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
	<vue-plyr v-if="path" ref="plyr" :options="options">
		<video
			ref="video"
			:autoplay="active"
			:playsinline="true"
			:poster="livePhotoPath"
			:src="davPath"
			:style="{
				height: height + 'px',
				width: width + 'px'
			}"
			preload="metadata"
			@ended="donePlaying"
			@click.prevent="playPause"
			@dblclick.prevent="toggleFullScreen"
			@canplay="doneLoading"
			@loadedmetadata="onLoadedMetadata"
			@volumechange="saveVolume">

			<!-- Omitting `type` on purpose because most of the
				browsers auto detect the appropriate codec.
				Having it set force the browser to comply to
				the provided mime instead of detecting a potential
				compatibility. -->

			{{ t('viewer', 'Your browser does not support the video tag.') }}
		</video>
	</vue-plyr>
</template>

<script>
import { generateFilePath } from 'nextcloud-router'
import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import Mime from '../mixins/Mime'
import PreviewUrl from '../mixins/PreviewUrl'

Vue.use(VuePlyr)

const liveExt = ['jpg', 'jpeg', 'png']

export default {
	name: 'Videos',

	mixins: [Mime, PreviewUrl],

	data() {
		return {}
	},

	computed: {
		livePhoto() {
			return this.fileList.find(file => {
				// if same filename and extension is allowed
				return file.href !== this.davPath
					&& file.name.startsWith(this.name)
					&& liveExt.indexOf(file.name.split('.')[1]) > -1
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
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
				iconUrl: generateFilePath('viewer', 'img', 'plyr.svg')
			}
		}
	},

	watch: {
		active: function(val, old) {
			// the item was hidden before and is now the current view
			if (val === true && old === false) {
				this.player.play()

			// the item was playing before and is now hidden
			} else if (val === false && old === true) {
				this.player.pause()
			}
		}
	},

	methods: {
		// Updates the dimensions of the modal
		updateVideoSize() {
			this.naturalHeight = this.$refs.video.videoHeight
			this.naturalWidth = this.$refs.video.videoWidth
			this.updateHeightWidth()
		},

		// Toggle play/pause
		playPause() {
			if (this.$el.paused) {
				this.player.play()
			} else {
				this.player.pause()
			}
		},

		donePlaying() {
			// reset and show poster after play
			this.player.autoplay = false
			this.player.load()
		},

		// Save video player's volume and mute status
		saveVolume() {
			let videoVolume = {
				volume: this.player.volume,
				muted: this.player.muted
			}
			// try to store volume settings in localStorage for persistent storage
			try {
				localStorage.viewerVideoVolume = JSON.stringify(videoVolume)
			} catch (e) {
				// if localStorage is not available, use the root component as fallback
				this.$root.$data.videoVolume = videoVolume
			}
		},

		// Restore video player's volume and mute status
		restoreVolume() {
			let videoVolume
			try {
				// try to load volume settings from localStorage
				if (localStorage.viewerVideoVolume) {
					videoVolume = JSON.parse(localStorage.viewerVideoVolume)
				}
			} catch (e) {
				// if localStorage is not available, try to load from the root component
				if (this.videoVolume) {
					videoVolume = this.$root.$data.videoVolume
				}
			}
			if (videoVolume) {
				this.$el.volume = videoVolume.volume
				this.$el.muted = videoVolume.muted
			}
		},

		onLoadedMetadata() {
			this.updateVideoSize()
			this.restoreVolume()
		}
	}
}
</script>

<style scoped lang="scss">
video {
	background-color: black;
	max-width: 100%;
	max-height: 100%;
	align-self: center;
	justify-self: center;
	/* over arrows in tiny screens */
	z-index: 20050;
}

::v-deep {
	.plyr__progress__container {
		flex: 1 1;
	}
	.plyr__volume {
		min-width: 80px;
	}

	// plyr buttons style
	.plyr--video .plyr__progress__buffer,
	.plyr--video .plyr__control {
		&.plyr__tab-focus,
		&:hover,
		&[aria-expanded=true] {
			background-color: var(--color-primary-element);
			color: var(--color-primary-text);
			box-shadow: none !important;
		}
	}
	// plyr volume control
	.plyr--full-ui input[type=range] {
		color: var(--color-primary-element);
	}
}
</style>
