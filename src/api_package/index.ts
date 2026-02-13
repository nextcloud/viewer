/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { AsyncComponent, Component } from 'vue'

export interface IHandler {
	/**
	 * Unique identifier for the handler
	 */
	id: string

	/**
	 * Indicate support for comparing two files
	 */
	canCompare?: boolean

	/**
	 * Vue 2 component to render the file.
	 */
	component: Component | AsyncComponent

	/**
	 * Group identifier to combine for navigating to the next/previous files
	 */
	group?: string

	/**
	 * List of mime types that are supported for opening
	 */
	mimes?: string[]

	/**
	 * Aliases for mime types, used to map different mime types to the same handler.
	 */
	mimesAliases?: Record<string, string>

	/**
	 * Viewer modal theme (one of 'dark', 'light', 'default')
	 */
	theme?: 'dark' | 'light' | 'default'
}

/**
 * Register a new handler for the viewer.
 * Should be called from an initialization script (`OCP\Util::addInitScript`).
 * If the ViewerService is already initialized the handler is registered
 * immediately, otherwise it will be picked up on DOMContentLoaded.
 *
 * @param handler - The handler to register
 * @throws Error if the handler is invalid
 */
export function registerHandler(handler: IHandler): void {
	validateHandler(handler)

	window._oca_viewer_handlers ??= new Map<string, IHandler>()
	if (window._oca_viewer_handlers.has(handler.id)) {
		console.warn(`Handler with id ${handler.id} is already registered.`)
		return
	}

	window._oca_viewer_handlers.set(handler.id, handler)

	// If the ViewerService is already initialized, register the handler
	// directly so its mimetypes are available immediately for file actions.
	// Without this, mimetypes are only bridged on DOMContentLoaded which
	// can race with the file list rendering — causing downloads instead of
	// opening files in the viewer.
	if (window.OCA?.Viewer?.registerHandler) {
		window.OCA.Viewer.registerHandler(handler)
	}
}

/**
 * Validate the handler object.
 *
 * @param handler - The handler to validate
 */
function validateHandler(handler: IHandler) {
	const { id, mimes, mimesAliases, component } = handler

	// checking valid handler id
	if (!id || id.trim() === '' || typeof id !== 'string') {
		throw new Error('The handler does not have a valid id')
	}

	// Nothing available to process! Failure
	if ((!mimes || !Array.isArray(mimes)) && !mimesAliases) {
		throw new Error('Handler needs a valid mime array or mimesAliases')
	}

	// checking valid handler component data
	if ((!component || (typeof component !== 'object' && typeof component !== 'function'))) {
		throw new Error('The handler does not have a valid component')
	}
}
