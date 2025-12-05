/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { File, Node } from '@nextcloud/files'

import FileSvg from '@mdi/svg/svg/file.svg?raw'
import OpenInAppSvg from '@mdi/svg/svg/open-in-app.svg?raw'
import { DefaultType, FileAction, FileType, getFileActions, registerFileAction } from '@nextcloud/files'
import { t } from '@nextcloud/l10n'
import { logger } from '../services/logger.ts'
import { getViewer } from './viewer.ts'

const ACTION_VIEWER = 'viewer-open'
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
	 * Optional icon for the handler
	 */
	iconSvgInline?: string

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
	 * @return A promise that resolves when the data is preloaded
	 */
	preload?: (node: File) => Promise<void>

	/**
	 * Viewer modal theme (one of 'dark', 'light', 'default')
	 */
	theme?: 'dark' | 'light' | 'default'
}

const topLevelViewerAction = new FileAction({
	id: ACTION_VIEWER,
	displayName: () => t('viewer', 'Open with …'),
	iconSvgInline: () => OpenInAppSvg,
	order: -1000,

	enabled: ({ nodes }) => {
		if (nodes.length === 0) {
			return false
		}

		// We do not support folders
		if (nodes.some((node) => node.type !== FileType.File)) {
			return false
		}

		// Check if we have more than one handler that can handle this mime
		// If yes, we return true to show the "Open with ..." menu
		let supportedHandlerCount = 0
		for (const handler of getHandlers().values()) {
			if (handler.enabled(nodes)) {
				supportedHandlerCount++
			}
			// TODO: Change to 1
			if (supportedHandlerCount > 0) {
				return true
			}
		}

		logger.debug('No hander found for the given nodes', { nodes })
		return false
	},
	exec() {
		return Promise.resolve(null)
	},
})

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

	window._oca_viewer_handlers ??= new Map<string, IHandler>()
	if (window._oca_viewer_handlers.has(handler.id)) {
		console.warn(`Handler with id ${handler.id} is already registered.`)
		return
	}

	window._oca_viewer_handlers.set(handler.id, handler)

	registerFileAction(new FileAction({
		id: `${ACTION_VIEWER}-${handler.id}`,
		// TRANSLATORS: handler is the translated name of the handler.
		displayName: () => t('viewer', 'Open with {handler}', { handler: handler.displayName }),

		iconSvgInline: () => handler.iconSvgInline ?? FileSvg,
		parent: ACTION_VIEWER,
		order: -999,
		default: DefaultType.HIDDEN,

		enabled: ({ nodes }) => {
			if (nodes.length === 0) {
				return false
			}

			// We do not support folders
			if (nodes.some((node) => node.type !== FileType.File)) {
				return false
			}

			return handler.enabled(nodes)
		},
		async exec({ nodes }) {
			if (nodes[0].type !== FileType.File) {
				return null
			}

			getViewer().open(nodes, nodes[0] as File)
			return null
		},
	}))

	// Only register the main "Open with ..." action if not already registered
	// This action will be shown if more than one handler is available for the given mime
	const actions = getFileActions()
	if (!actions.find((action) => action.id === ACTION_VIEWER)) {
		registerFileAction(topLevelViewerAction)

		logger.info('Registered top level viewer file action', { id: ACTION_VIEWER })
	}
}

/**
 * Get all registered handlers.
 */
export function getHandlers(): Map<string, IHandler> {
	return window._oca_viewer_handlers ??= new Map<string, IHandler>()
}

/**
 * Validate the handler object.
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

	validateCustomElementName(handler.tagname)
}

/**
 * Validate that the given tag name is a valid custom element name.
 */
function validateCustomElementName(tagname: string): void {
	if (!tagname.includes('-')) {
		throw new Error('Handler tagname must contain a hyphen (-)')
	}
	if (/^[A-Z]/.test(tagname)) {
		throw new Error('Handler tagname must not start with an uppercase letter')
	}
	if (/--/.test(tagname)) {
		throw new Error('Handler tagname must not contain consecutive hyphens (--)')
	}
	if (tagname.startsWith('-') || tagname.endsWith('-')) {
		throw new Error('Handler tagname must not start or end with a hyphen (-)')
	}
	if (!/^[a-z][a-z0-9-]*$/.test(tagname)) {
		throw new Error('Handler tagname must only contain lowercase letters, numbers, and hyphens (-)')
	}
}
