<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<!-- Plyr currently replaces the parent. Wrapping to prevent this
	https://github.com/redxtech/vue-plyr/issues/259 -->
	<div>
		<VuePlyr ref="plyr"
			:options="options"
			:style="{
				height: height + 'px',
				width: width + 'px'
			}">
			<video ref="video"
				:autoplay="true"
				:playsinline="true"
				:poster="livePhotoPath"
				:src="src"
				:style="{
					height: height + 'px',
					width: width + 'px'
				}"
				preload="metadata"
				@error.capture.prevent.stop.once="onFail"
				@ended="donePlaying"
				@canplay="doneLoading"
				@loadedmetadata="onLoadedMetadata">

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

<script setup lang="ts">
import type { File } from '@nextcloud/files'
import { imagePath } from '@nextcloud/router'
import { ref, computed, onUpdated, onBeforeUnmount, useTemplateRef, watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import VuePlyr from '@skjnldsv/vue-plyr'

import { findLivePhotoPeerFromName } from '../utils/livePhotoUtils'
import { getPreviewIfAny } from '../utils/previewUtils'
import { logger } from '../services/logger.ts'
import { preloadMedia } from '../services/mediaPreloader.js'

const blankVideo = imagePath('viewer', 'blank.mp4')

const props = defineProps<{
	file: File,
	files: File[],
	maxHeight: number,
	maxWidth: number,
}>()

const emit = defineEmits<{
	load: [],
	error: [Error],
	'update:canSwipe': [boolean],
}>()

const video = useTemplateRef<HTMLVideoElement>('video')
const plyr = useTemplateRef<InstanceType<typeof VuePlyr>>('plyr')
const player = ref(plyr.value?.player)!

const filename = computed(() => props.file.basename)
const src = ref(props.file.source)

const isFullscreenButtonVisible = ref(false)
const fallback = ref(false)

const height = ref(0)
const width = ref(0)

// Update video size when max height or width props change
watch(() => props.maxHeight, updateVideoSize)
watch(() => props.maxWidth, updateVideoSize)

const livePhotoPath = computed(() => {
	const peerFile = findLivePhotoPeerFromName(props.file, props.files)
	if (peerFile === undefined) {
		return undefined
	}
	return getPreviewIfAny(peerFile)
})

const options = computed(() => {
	return {
		autoplay: true,
		// Used to reset the video streams https://github.com/sampotts/plyr#javascript-1
		blankVideo,
		controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
		loadSprite: false,
		fullscreen: {
			iosNative: true,
		},
	}
})

// Work around to get the state of the fullscreen button,
// aria-selected attribute is not reliable.
function hideHeaderAndFooter() {
	isFullscreenButtonVisible.value = !isFullscreenButtonVisible.value
	const main = document.body.querySelector('main')!
	const footer = document.body.querySelector('footer')!
	if (isFullscreenButtonVisible.value) {
		main.classList.add('viewer__hidden-fullscreen')
		footer.classList.add('viewer__hidden-fullscreen')
	} else {
		main.classList.remove('viewer__hidden-fullscreen')
		footer.classList.remove('viewer__hidden-fullscreen')
	}
}

// Update the video size based on the max height and width props
// We need to keep the aspect ratio of the video
// and fit it within the max height and width.
function updateVideoSize() {
	const videoHeight = video?.value?.videoHeight
	const videoWidth = video?.value?.videoWidth
	if (!videoHeight || !videoWidth) {
		return
	}

	const heightRatio = props.maxHeight / videoHeight
	const widthRatio = props.maxWidth / videoWidth

	const ratio = Math.min(heightRatio, widthRatio)
	height.value = Math.floor(videoHeight * ratio)
	width.value = Math.floor(videoWidth * ratio)
}

// Tell Viewer that the video is ready to be shown
function doneLoading() {
	emit('load')
}

function donePlaying() {
	// Should not happen™
	if (!video.value) {
		logger.error('Video element not found in donePlaying')
		return
	}

	// reset and show poster after play
	video.value.autoplay = false
	video.value.load()
}

// Update video size when metadata is loaded
function onLoadedMetadata() {
	updateVideoSize()
}

// Fallback to the original image if not already done
async function onFail() {
	if (fallback.value) {
		logger.error(`Loading of file ${filename.value} failed even after fallback`)
		emit('error', new Error(t('viewer', 'Failed to load video.')) )
		return
	}

	// Try to load E2EE file as a fallback
	logger.error(`Loading of file ${filename.value} failed, falling back to fetching it by hand`)
	fallback.value = true
	src.value = await preloadMedia(props.file)
}

// For some reason the video controls don't get mounted to
// the dom until after the component (Videos) is mounted,
// using the mounted() hook will leave us with an empty array
onUpdated(() => {
	if (!plyr.value || !plyr.value.player) {
		logger.warn('Plyr player not initialized yet')
		return
	}

	// Prevent swiping to the next/previous item when scrubbing the timeline or changing volume
	const plyrControls = plyr.value.$el.querySelectorAll('.plyr__controls__item')
	if (!plyrControls || !plyrControls.length) {
		return
	}
	[...plyrControls].forEach(control => {
		if (control.getAttribute('data-plyr') === 'fullscreen') {
			control.addEventListener('click', hideHeaderAndFooter)
		}
		if (!control?.addEventListener) {
			return
		}
		control.addEventListener('mouseenter', emit('update:canSwipe', false))
		control.addEventListener('mouseleave', emit('update:canSwipe', true))
	})
})

onBeforeUnmount(() => {
	// Force stop any ongoing request
	logger.debug('Closing video stream', { filename: props.file.basename })
	video?.value?.pause?.()
	player.stop()
	player.destroy()
})
</script>

<script lang='ts'>
export default {
	name: 'Videos',
}
</script>

<style scoped lang="scss">
video {
	/* over arrows in tiny screens */
	z-index: 20050;
	align-self: center;
	max-width: 100%;
	max-height: 100% !important;
	background-color: black;

	justify-self: center;
}

:deep() {
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
				color: var(--color-primary-element-text);
				background-color: var(--color-primary-element);
			}
		}
	}
}
</style>

<style lang="scss">
@import '@skjnldsv/vue-plyr/dist/vue-plyr.css';

// Fullscreen styles to hide header and footer
// when in fullscreen mode
main.viewer__hidden-fullscreen {
	height: 100vh !important;
	width: 100vw !important;
	margin: 0 !important;
}

footer.viewer__hidden-fullscreen {
	display: none !important;
}
</style>
