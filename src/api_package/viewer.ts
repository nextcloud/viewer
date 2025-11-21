/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { File, Folder } from '@nextcloud/files'
import ViewerVue from '../views/Viewer.vue'

export type ViewerOptions = {
	loadMore: () => Promise<File[]>
	onPrev: () => void
	onNext: () => void
	onClose: () => void
	canLoop: boolean
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
	 */
  	_setViewer(viewer: InstanceType<typeof ViewerVue>) {
		this.viewer = viewer
	}

	async open(nodes: File[], file?: File, options?: ViewerOptions, handlerId?: string): Promise<any> {
		if (!this.viewer) {
			throw new Error('Viewer is not initialized')
		}
		this.viewer.open(nodes, file, options, handlerId)
	}

	async openFolder(folder: Folder, file?: File, options?: ViewerOptions, handlerId?: string): Promise<any> {
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
export function getViewer(): Viewer {
	return window._oca_viewer_service ??= new Viewer()
}

// Create a new Viewer instance in the given element
export function createViewer(el: HTMLElement, file: File): Viewer {
	const instance = new Viewer()
	// el.appendChild(instance)
	return instance
}
