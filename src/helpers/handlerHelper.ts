/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { File } from "@nextcloud/files"
import type { IHandler } from "../api_package"

/**
 * Get the registered handlers
 */
export function getHandlers(): Map<string, IHandler> {
	return window._nc_viewer_handlers
}

/**
 * Get a handler by its ID
 */
export function getHandler(id: string): IHandler | undefined {
	return window._nc_viewer_handlers.get(id)
}

/**
 * Find the first handler available for the given file
 */
export function getHandlerForFile(file: File, group?: string): IHandler | undefined {
	const handlers = Array.from(window._nc_viewer_handlers.values())
	return handlers.find(handler => {
		if (group && handler.group !== group) {
			return false
		}
		return handler.enabled([file])
	})
}