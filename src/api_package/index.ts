/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { File } from '@nextcloud/files'

export interface IHandler {
	/**
	 * Unique identifier for the handler
	 */
	id: string

	/**
	 * The handler translated name
	 */
	displayName: string

	/**
	 * The custom element tag name to use for this handler.
	 */
	tagname: string

	/**
	 * Identifier to group handlers by.
	 * When opening a folder we'll check
	 * against all handlers that are enabled
	 * for the given group AND matches the
	 * group property.
	 */
	group?: string

	/**
	 * Is this enabled for the given mimes ?
	 */
	enabled: (nodes: File[]) => boolean

	/**
	 * Optional function to preload data for the given node.
	 * This will be called for the previous and next nodes on
	 * opening a file to allow the handler to be faster when navigating.
	 *
	 * @param node - The node to preload data for
	 * @returns A promise that resolves when the data is preloaded
	 */
	preload?: (node: File) => Promise<void>

	/**
	 * Viewer modal theme (one of 'dark', 'light', 'default')
	 */
	theme?: 'dark' | 'light' | 'default'
}

/**
 * Register a new handler for the viewer.
 * This needs to be called before the viewer is initialized to ensure the handler is available.
 * So this should be called from an initialization script (`OCP\Util::addInitScript`).
 *
 * @param handler - The handler to register
 * @throws Error if the handler is invalid
 */
export function registerHandler(handler: IHandler): void {
	validateHandler(handler)

	window._nc_viewer_handlers ??= new Map<string, IHandler>()
	if (window._nc_viewer_handlers.has(handler.id)) {
		console.warn(`Handler with id ${handler.id} is already registered.`)
		return
	}

	window._nc_viewer_handlers.set(handler.id, handler)
}

/**
 * Validate the handler object.
 *
 * @param handler - The handler to validate
 */
function validateHandler(handler: IHandler): void {
	const { id, displayName, group, enabled } = handler
	if (typeof id !== 'string' || id.trim() === '') {
		throw new Error('Handler id must be a non-empty string')
	}

	if (typeof displayName !== 'string' || displayName.trim() === '') {
		throw new Error('Handler displayName must be a non-empty string')
	}

	if (typeof handler.tagname !== 'string' || handler.tagname.trim() === '') {
		throw new Error('Handler tagname must be a non-empty string')
	}

	if (group && (typeof group !== 'string' || group.trim() === '')) {
		throw new Error('Handler group must be a non-empty string if provided')
	}

	if (typeof enabled !== 'function') {
		throw new Error('Handler enabled must be a function')
	}

	if (handler.preload && typeof handler.preload !== 'function') {
		throw new Error('Handler preload must be a function if provided')
	}

	if (handler.theme && !['dark', 'light', 'default'].includes(handler.theme)) {
		throw new Error("Handler theme must be one of 'dark', 'light', 'default' if provided")
	}
}
