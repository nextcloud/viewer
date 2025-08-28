/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import type { FileStat } from 'webdav'
import { dirname, encodePath } from '@nextcloud/paths'
import { generateUrl } from '@nextcloud/router'
import camelcase from 'camelcase'

import { getRootPath, getToken, getUserRoot, isPublic } from './davUtils'
import { isNumber } from './numberUtil'

declare const OC: Nextcloud.v27.OC

/**
 * Extract dir and name from file path
 *
 * @param {string} path the full path
 * @return {string[]} [dirPath, fileName]
 */
const extractFilePaths = function(path) {
	const pathSections = path.split('/')
	const fileName = pathSections[pathSections.length - 1]
	const dirPath = pathSections.slice(0, pathSections.length - 1).join('/')
	return [dirPath, fileName]
}

/**
 * Sorting comparison function
 *
 * @param {object} fileInfo1 file 1 fileinfo
 * @param {object} fileInfo2 file 2 fileinfo
 * @param {string} key key to sort with
 * @param {boolean} [asc] sort ascending?
 * @return {number}
 */
const sortCompare = function(fileInfo1, fileInfo2, key, asc = true) {

	if (fileInfo1.isFavorite && !fileInfo2.isFavorite) {
		return -1
	} else if (!fileInfo1.isFavorite && fileInfo2.isFavorite) {
		return 1
	}

	// if this is a number, let's sort by integer
	if (isNumber(fileInfo1[key]) && isNumber(fileInfo2[key])) {
		const result = Number(fileInfo1[key]) - Number(fileInfo2[key])
		return asc ? result : -result
	}

	// else we sort by string, so let's sort directories first
	if (fileInfo1.type === 'directory' && fileInfo2.type !== 'directory') {
		return -1
	} else if (fileInfo1.type !== 'directory' && fileInfo2.type === 'directory') {
		return 1
	}
	// sort by date if key is lastmod
	if (key === 'lastmod') {
		const result = new Date(fileInfo1[key]).getTime() - new Date(fileInfo2[key]).getTime()
		return asc ? -result : result
	}
	// finally sort by name
	return asc
		? fileInfo1[key].localeCompare(fileInfo2[key], OC.getLanguage(), { numeric: true })
		: -fileInfo1[key].localeCompare(fileInfo2[key], OC.getLanguage(), { numeric: true })
}

export type FileInfo = object

/**
 * Generate a fileinfo object based on the full dav properties
 * It will flatten everything and put all keys to camelCase
 * @param obj
 */
const genFileInfo = function(obj: FileStat): FileInfo {
	const fileInfo = {}

	Object.keys(obj).forEach(key => {
		const data = obj[key]

		// flatten object if any
		if (!!data && typeof data === 'object' && !Array.isArray(data)) {
			Object.assign(fileInfo, genFileInfo(data))
		} else {
			// format key and add it to the fileInfo
			if (data === 'false') {
				fileInfo[camelcase(key)] = false
			} else if (data === 'true') {
				fileInfo[camelcase(key)] = true
			} else {
				// preserve string typed properties as string (FileStat interface in webdav)
				const stringTypedProperties = ['filename', 'basename', 'owner-Id']
				if (stringTypedProperties.includes(key)) {
					fileInfo[camelcase(key)] = String(data)
					return
				}
				fileInfo[camelcase(key)] = isNumber(data)
					? Number(data)
					: data
			}
		}
	})
	return fileInfo
}

/**
 * Generate absolute dav remote path of the file
 *
 * @param fileInfo The fileInfo
 * @param fileInfo.filename the file full path
 * @param fileInfo.basename the file name
 * @param fileInfo.source the file source if any
 */
function getDavPath({ filename, basename, source = '' }: { filename: string, basename: string, source?: string }): string|null {
	// TODO: allow proper dav access without the need of basic auth
	// https://github.com/nextcloud/server/issues/19700
	if (isPublic()) {
		return generateUrl(`/s/${getToken()}/download?path={dirname}&files={basename}`,
			{ dirname: dirname(filename), basename })
	}

	const prefixUser = getUserRoot()

	if (!filename || typeof filename !== 'string') {
		return null
	}

	// If we have a source but we're not a dav resource, return null
	if (source && !source.includes(prefixUser)) {
		return null
	}

	// Workaround for files with different root like /remote.php/dav
	if (filename.startsWith(prefixUser)) {
		filename = filename.slice(prefixUser.length)
	}
	return getRootPath() + encodePath(filename)
}

export { extractFilePaths, sortCompare, genFileInfo, getDavPath }
