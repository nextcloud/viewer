/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { FileStat } from 'webdav'

import { davRemoteURL, davRootPath } from '@nextcloud/files'
import { getLanguage } from '@nextcloud/l10n'
import { encodePath } from '@nextcloud/paths'
import camelcase from 'camelcase'

export interface FileInfo {
	/** ID of the file (not unique if shared, use source instead) */
	fileid?: number
	/** Filename (name with path) */
	filename: string
	/** Basename of the file */
	basename: string
	/** DAV source URL */
	source: string
	/** File size in bytes */
	size: number
	/** E-Tag */
	etag?: string
	/** MIME type */
	mime?: string
	/** Last modification date */
	lastmod?: string
	/** File is marked as favorite */
	isFavorite?: boolean
	/** File type */
	type: 'directory'|'file'
	/** Attributes for file shares */
	shareAttributes?: string|Array<{ value: unknown, key: string, scope: string }>

	// custom attributes not fetch from API

	/** Does the file has an existing preview */
	hasPreview?: boolean
	/** URL of the preview image */
	previewUrl?: string
	/** The id of the peer live photo */
	metadataFilesLivePhoto?: number
	/** The absolute dav path */
	davPath?: string
	/** filename without extension */
	name?: string
}

/**
 * Extract dir and name from file path
 *
 * @param path the full path
 * @return [dirPath, fileName]
 */
export function extractFilePaths(path: string): [string, string] {
	const pathSections = path.split('/')
	const fileName = pathSections[pathSections.length - 1]
	const dirPath = pathSections.slice(0, pathSections.length - 1).join('/')
	return [dirPath, fileName]
}

/**
 * Sorting comparison function
 *
 * @param fileInfo1 file 1 FileInfo
 * @param fileInfo2 file 2 FileInfo
 * @param key key to sort with
 * @param asc sort ascending (default true)
 */
export function sortCompare(fileInfo1: FileInfo, fileInfo2: FileInfo, key: string, asc = true): number {

	if (fileInfo1.isFavorite && !fileInfo2.isFavorite) {
		return -1
	} else if (!fileInfo1.isFavorite && fileInfo2.isFavorite) {
		return 1
	}

	// let's sort directories first
	if (fileInfo1.type === 'directory' && fileInfo2.type !== 'directory') {
		return -1
	} else if (fileInfo1.type !== 'directory' && fileInfo2.type === 'directory') {
		return 1
	}
	// sort by date if key is lastmod
	if (key === 'lastmod') {
		const result = new Date(fileInfo1.lastmod ?? 0).getTime() - new Date(fileInfo2.lastmod ?? 0).getTime()
		return asc ? -result : result
	}
	// finally sort by name
	return asc
		? String(fileInfo1[key]).localeCompare(fileInfo2[key], getLanguage(), { numeric: true })
		: -String(fileInfo1[key]).localeCompare(fileInfo2[key], getLanguage(), { numeric: true })
}

/**
 * Generate a FileInfo object based on the full dav properties
 * It will flatten everything and put all keys to camelCase
 * @param obj The stat response to convert
 */
export function genFileInfo(obj: FileStat): FileInfo {
	const fileStat = {
		...(obj.props ?? {}),
		...obj,
		props: undefined,
	}

	const fileInfo = Object.entries(fileStat)
		// Make property names camel case
		.map(([key, value]) => [camelcase(key), value])
		// Convert boolean - Numbers are already parsed by the WebDAV client
		.map(([key, value]) => [key, ['true', 'false'].includes(value as never) ? value === 'true' : value])
		// remove undefined properties
		.filter(([, value]) => value !== undefined)
	return Object.fromEntries(fileInfo)
}

/**
 * Generate absolute dav remote path of the file
 *
 * @param fileInfo The fileInfo
 * @param fileInfo.filename the file full path
 * @param fileInfo.source the file source if any
 */
export function getDavPath({ filename, source = '' }: { filename: string, source?: string }): string|null {
	if (!filename || typeof filename !== 'string') {
		return null
	}

	// If we have a source but we're not a dav resource, return null
	if (source && !source.includes(davRootPath)) {
		return null
	}

	// Workaround for files with different root like /remote.php/dav
	if (!filename.startsWith(davRootPath)) {
		filename = `${davRootPath}${filename}`
	}
	return davRemoteURL + encodePath(filename)
}
