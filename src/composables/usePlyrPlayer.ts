/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type Plyr from 'plyr'
import type { EmitFn } from 'vue'
import type { ViewerEmits, ViewerProps } from '../api_package/viewer.ts'

import { imagePath } from '@nextcloud/router'
import { computed, onBeforeUnmount, onUpdated, ref, useTemplateRef } from 'vue'
import { logger } from '../services/logger.ts'
import { preloadMedia } from '../services/mediaPreloader.ts'
import { useViewerProps } from './useViewerProps.ts'

const blankVideo = imagePath('viewer', 'blank.mp4')

/**
 * Composable to setup a Plyr player instance.
 *
 * @param forAudio Whether the player is used for audio files
 * @param props
 * @param emit
 */
export function usePlyrPlayer(forAudio: boolean, props: ViewerProps, emit: EmitFn<ViewerEmits>) {
	const { filename, src } = useViewerProps(props)

	const plyr = useTemplateRef('plyr')
	const player = computed<Plyr>(() => plyr.value?.player)
	const video = useTemplateRef<HTMLVideoElement>('video')
	const audio = useTemplateRef<HTMLAudioElement>('audio')

	const fallback = ref(false)

	const isFullscreenButtonVisible = ref(false)

	const options = computed(() => {
		return {
			autoplay: true,
			// Used to reset the video streams https://github.com/sampotts/plyr#javascript-1
			blankVideo,
			controls: [
				'play-large',
				'play',
				'progress',
				'current-time',
				'mute',
				'volume',
				...forAudio ? ['settings'] : ['captions', 'settings', 'fullscreen'],
			],
			loadSprite: false,
			fullscreen: {
				iosNative: true,
			},
		}
	})

	/**
	 * Tell Viewer that the video is ready to be shown
	 */
	function doneLoading() {
		emit('load')
	}

	/**
	 * Reset video after playing to show poster again
	 */
	function donePlaying() {
		const media = forAudio ? audio : video
		// Should not happen™
		if (!media.value) {
			logger.error('Media element not found in donePlaying')
			return
		}

		// reset and show poster after play
		media.value.autoplay = false
		media.value.load()
	}

	/**
	 * Fallback to the original image if not already done
	 */
	async function onFail() {
		// If we fail on the blank media, don't do anything.
		// This is expected to cancel any network requests when switching files.
		if (src.value === blankVideo) {
			return
		}

		if (fallback.value) {
			logger.error(`Loading of file ${filename.value} failed even after fallback`)
			emit('error', new Error(t('viewer', 'Failed to load video.')))
			return
		}

		// Try to load E2EE file as a fallback
		logger.error(`Loading of file ${filename.value} failed, falling back to fetching it by hand`)
		fallback.value = true
		src.value = await preloadMedia(props.file)
	}

	/**
	 * Work around to get the state of the fullscreen button,
	 * aria-selected attribute is not reliable.
	 */
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
		[...plyrControls].forEach((control) => {
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
		logger.debug('Closing media stream', { filename: props.file.basename })
		video?.value?.pause?.()
		player.value.stop()
		player.value.destroy()
	})

	return {
		doneLoading,
		donePlaying,
		onFail,
		options,
		video,
	}
}
