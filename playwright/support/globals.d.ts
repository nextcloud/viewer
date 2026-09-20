/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** Minimal shape of a file info entry accepted by OCA.Viewer.open. */
export interface ViewerFileInfo {
	fileid: number
	filename: string
	basename: string
	mime: string
	source?: string
	etag?: string
	hasPreview?: boolean
	// The viewer accepts both the numeric bitmask and the legacy 'RWD' string form.
	permissions?: number | string
	davPath?: string
}

export interface ViewerOpenOptions {
	path?: string
	fileInfo?: ViewerFileInfo
	list?: ViewerFileInfo[]
	loadMore?: () => ViewerFileInfo[] | Promise<ViewerFileInfo[]>
}

declare global {
	interface Window {
		OCA: {
			Viewer: {
				open: (options: ViewerOpenOptions) => void
			}
		}
	}
}

export {}
