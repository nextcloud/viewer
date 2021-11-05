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
	<img
		:class="{
			dragging,
			'animate-transition': animateTransition,
		}"
		:src="data"
		:style="{
			transform: 'translate(' + posX + 'px, ' + posY + 'px) scale(' + zoomRatio + ', ' + zoomRatio + ')',
		}"
		@load="updateImgSize"
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
		updateImgSize() {
			this.naturalHeight = this.$el.naturalHeight
			this.naturalWidth = this.$el.naturalWidth

			this.updateHeightWidth()
			this.doneLoading()
		},

		/**
		 * Manually retrieve the path and return its base64
		 *
		 * @returns {String}
		 */
		async getBase64FromImage() {
			const file = await axios.get(this.davPath)
			return `data:${this.mime};base64,${btoa(file.data)}`
		},

		/**
		 * Handle zooming
		 * Code based on https://stackoverflow.com/a/46833254/15603854
		 *
		 * @param {Event} event the scroll event
		 * @returns {null}
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
		 * @param {Event} event the event
		 */
		dragStart(event) {
			this.dragX = event.clientX
			this.dragY = event.clientY
			this.dragging = true
			this.$el.onmouseup = this.dragEnd
			this.$el.onmousemove = this.dragHandler
		},
		dragEnd(event) {
			event.preventDefault()

			this.dragging = false
			this.$el.onmouseup = null
			this.$el.onmousemove = null
		},
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
img {
	align-self: center;
	justify-self: center;
	position: absolute;
	width: 100%;
	height: 100vh;
	object-fit: contain;
	transform-origin: 0 0;
	transition: none !important;

	&.dragging {
		transition: none !important;
		cursor: move;
	}

	&.animate-transition {
		transition: transform 100ms ease !important;
	}
}
</style>
