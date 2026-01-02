/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { File, Folder } from '@nextcloud/files'
import type ViewerVue from '../views/Viewer.vue'

/**
 * List of props provided to your custom component.
 * Use it like this:
 * ```ts
 * <script setup lang="ts">
 * import type { ViewerProps } from '@nextcloud/viewer'
 *
 * const props = defineProps<ViewerProps>()
 * ```
 */
export interface ViewerProps {
	/**
	 * The file to be displayed
	 */
	file: File

	/**
	 * The list of files currently opened in the viewer
	 */
	files: File[]

	/**
	 * The max height of the viewer container
	 */
	maxHeight: number

	/**
	 * The max width of the viewer container
	 */
	maxWidth: number

	/**
	 * Whether the viewer is in editing mode
	 */
	editing: boolean,

	/**
	 * Whether the sidebar is shown
	 */
	isSidebarShown: boolean,
}

/**
 * List of emits that can be emitted by your custom component.
 * Use it like this:
 * ```ts
 * <script setup lang="ts">
 * import type { ViewerEmits } from '@nextcloud/viewer'
 *
 * const emit = defineEmits<ViewerEmits>()
 * ```
 */
export interface ViewerEmits {
	/**
	 * Emit this event to notify the viewer that your component is done loading.
	 */
	loaded: []

	/**
	 * Emit this event to notify the viewer that an  error occurred while loading the file.
	 * If provided, a custom error message will be shown.
	 * @param error The error that occurred
	 */
	errored: [Error]

	/**
	 * Emit this event to disable or enable the swiping gesture.
	 * This is usually used when your component provides its own swiping mechanism (e.g. the video player controls).
	 */
	'update:canSwipe': [boolean]

	/**
	 * Emit this event to notify the viewer that the editing mode changed.
	 * @param editing Whether the viewer is now in editing mode
	 */
	'update:editing': [boolean]
}

/**
 * Options for opening the viewer
 */
export type ViewerOptions = {
	/**
	 * Will be called to append more files when reaching the end of the current list
	 */
	loadMore: () => Promise<File[]>

	/**
	 * Called when navigating to the previous item
	 */
	onPrev: () => void

	/**
	 * Called when navigating to the next item
	 */
	onNext: () => void

	/**
	 * Called when the viewer is closed
	 */
	onClose: () => void

	/**
	 * Whether the viewer can loop from last to first item and vice versa
	 */
	canLoop: boolean
}

const defaultViewerOptions: ViewerOptions = {
	loadMore: async () => [],
	onPrev: () => {},
	onNext: () => {},
	onClose: () => {},
	canLoop: true,
}

export interface ViewerAPI {
	open(nodes: File[], file?: File, options?: ViewerOptions, handlerId?: string): Promise<any>
	openFolder(folder: Folder, file?: File, options?: ViewerOptions, handlerId?: string): Promise<any>
	compare(node1: File, node2: File, handlerId?: string): Promise<any>
}

export class Viewer extends EventTarget implements ViewerAPI {
	private viewer: InstanceType<typeof ViewerVue> | null = null

	/**
	 * Set the viewer instance (called from init.ts)
	 * Private, do not use directly.
	 *
	 * @param viewer
	 */
	_setViewer(viewer: InstanceType<typeof ViewerVue>) {
		this.viewer = viewer
	}

	async open(nodes: File[], file?: File, options: ViewerOptions = defaultViewerOptions, handlerId?: string): Promise<any> {
		if (!this.viewer) {
			throw new Error('Viewer is not initialized')
		}
		this.viewer.open(nodes, file, options, handlerId)
	}

	async openFolder(folder: Folder, file?: File, options: ViewerOptions = defaultViewerOptions, handlerId?: string): Promise<any> {
		if (!this.viewer) {
			throw new Error('Viewer is not initialized')
		}
		this.viewer.openFolder(folder, file, options, handlerId)
	}

	async compare(node1: File, node2: File, handlerId?: string): Promise<any> {
		if (!this.viewer) {
			throw new Error('Viewer is not initialized')
		}
		this.viewer.compare(node1, node2, handlerId)
	}
}

// Init and get the viewer in Modal
/**
 *
 */
export function getViewer(): Viewer {
	return window._oca_viewer_service ??= new Viewer()
}

// Create a new Viewer instance in the given element
/**
 *
 * @param el
 * @param file
 */
export function createViewer(el: HTMLElement, file: File): Viewer {
	const instance = new Viewer()
	// el.appendChild(instance)
	return instance
}
