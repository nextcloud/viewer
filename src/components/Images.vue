<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 - @copyright Copyright (c) 2021, Keith Toh <ktprograms@gmail.com>
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
	<img
		:class="{
			dragging,
			loaded,
			zoomed: zoomRatio !== 1,
			'animate-transition': animateTransition,
			'fit-height': fitHeight,
			'fit-width': fitWidth,
		}"
		:src="data"
		:style="{
			transform: 'translate(' + posX + 'px, ' + posY + 'px) scale(' + zoomRatio + ', ' + zoomRatio + ')',
		}"
		@load="onLoad"
		@wheel.prevent.stop="updateZoom"
		@dblclick.prevent="onDblclick"
		@mousedown.prevent="dragStart">
</template>

<script>
import axios from '@nextcloud/axios'
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)

export default {
	name: 'Images',

	props: {
		// file etag, used for cache reset
		etag: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			dragging: false,
			animateTransition: false,
			zoomRatio: 1,
			posX: 0,
			posY: 0,
			fitHeight: false,
			fitWidth: false,
		}
	},
	asyncComputed: {
		data() {
			switch (this.mime) {
			case 'image/svg+xml':
				return this.getBase64FromImage()
			case 'image/gif':
				return this.davPath
			default:
				return this.previewpath
			}
		},
	},
	watch: {
		active(val, old) {
			// the item was hidden before and is now the current view
			if (val === true && old === false) {
				this.resetZoom()
				// end the dragging if your mouse go out of the content
				window.addEventListener('mouseout', this.dragEnd)
			// the item is not displayed
			} else if (val === false) {
				window.removeEventListener('mouseout', this.dragEnd)
			}
		},
	},
	methods: {
		// Updates the dimensions of the modal
		// also adds a resize event listener
		onLoad() {
			this.naturalHeight = this.$el.naturalHeight
			this.naturalWidth = this.$el.naturalWidth

			window.addEventListener('resize', () => {
				const imageAspectRatio = this.naturalWidth / this.naturalHeight
				const containerAspectRatio = this.$parent.$el.clientWidth / this.$parent.$el.clientHeight
				// Arbitary decision to make the 'or equals' with the 'less than'
				this.fitHeight = imageAspectRatio <= containerAspectRatio
				this.fitWidth = imageAspectRatio > containerAspectRatio
			})
			window.dispatchEvent(new Event('resize')) // Trigger the first fit calculation

			this.updateHeightWidth()
			this.doneLoading()
		},

		/**
		 * Manually retrieve the path and return its base64
		 *
		 * @returns {Promise<String>}
		 */
		async getBase64FromImage() {
			const file = await axios.get(this.davPath)
			return `data:${this.mime};base64,${btoa(file.data)}`
		},

		/**
		 * Handle zooming
		 * Code based on https://stackoverflow.com/a/46833254/15603854
		 *
		 * @param {WheelEvent} event the scroll event
		 * @returns {void}
		 */
		updateZoom(event) {
			const isZoomIn = event.deltaY < 0
			const delta = isZoomIn ? 0.1 : -0.1
			// do not continue, img is back to its original state
			if (this.zoomRatio + delta === 1) {
				return this.resetZoom()
			}

			this.disableSwipe()

			// scrolling position in the page
			const scrollX = event.clientX - this.$el.x
			const scrollY = event.clientY - this.$el.y
			// scrolling position relative to the image
			const targetX = (scrollX - this.posX) / this.zoomRatio
			const targetY = (scrollY - this.posY) / this.zoomRatio

			// apply zoom
			this.zoomRatio += delta
			this.zoomRatio = Math.max(1, Math.min(5, this.zoomRatio))
			// bounds checking:       ^-smallest  ^-largest zoom ratio

			// calculate x and y based on zoom
			this.posX = -targetX * this.zoomRatio + scrollX
			this.posY = -targetY * this.zoomRatio + scrollY
		},

		resetZoom() {
			this.animateTransition = true
			this.enableSwipe()
			this.zoomRatio = 1
			this.posX = 0
			this.posY = 0
			// Animation is 100ms so give it double the time to finish
			setTimeout(() => { this.animateTransition = false }, 200)
		},

		/**
		 * Dragging handlers
		 *
		 * @param {MouseEvent} event the event
		 */
		dragStart(event) {
			this.dragX = event.clientX
			this.dragY = event.clientY
			this.dragging = true
			this.$el.onmouseup = this.dragEnd
			this.$el.onmousemove = this.dragHandler
		},
		/**
		 * @param {MouseEvent} event the event
		 */
		dragEnd(event) {
			event.preventDefault()

			this.dragging = false
			this.$el.onmouseup = null
			this.$el.onmousemove = null
		},
		/**
		 * @param {MouseEvent} event the event
		 */
		dragHandler(event) {
			const { clientX, clientY } = event

			if (this.dragging && this.zoomRatio > 1 && clientX > 0 && clientY > 0) {
				this.posX += (clientX - this.dragX)
				this.posY += (clientY - this.dragY)

				this.dragX = clientX
				this.dragY = clientY
			}
		},

		/**
		 * Double click handler
		 */
		onDblclick() {
			if (this.zoomRatio > 1) {
				this.resetZoom()
			} else {
				this.animateTransition = true
				// 0.15 is half of the delta in zoom,
				// so that multiplied by width/height centers the image
				this.posX = -(this.$el.width * 0.15)
				this.posY = -(this.$el.height * 0.15)
				this.zoomRatio = 1.3
				// Animation is 100ms so give it double the time to finish
				setTimeout(() => { this.animateTransition = false }, 200)
			}
		},
	},
}
</script>

<style scoped lang="scss">
$checkered-size: 8px;
$checkered-color: #efefef;

img {
	align-self: center;
	justify-self: center;
	position: absolute;
	object-fit: contain;
	transform-origin: 0 0;
	transition: none !important;

	&.fit-height {
		height: 100%;
		max-width: 100%;
	}
	&.fit-width {
		width: 100%;
		max-height: 100%;
	}

	&:hover {
		background-image: linear-gradient(45deg, #{$checkered-color} 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #{$checkered-color} 75%),
			linear-gradient(45deg, transparent 75%, #{$checkered-color} 75%),
			linear-gradient(45deg, #{$checkered-color} 25%, #fff 25%);
		background-size: 2 * $checkered-size 2 * $checkered-size;
		background-position: 0 0, 0 0, -#{$checkered-size} -#{$checkered-size}, $checkered-size $checkered-size;
	}

	&.zoomed {
		z-index: 10010;
		cursor: move;
	}

	&.loaded {
		background-color: #fff;
	}

	&.dragging {
		transition: none !important;
		cursor: move;
	}

	&.animate-transition {
		transition: transform 100ms ease !important;
	}
}
</style>
