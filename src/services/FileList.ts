/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { FileStat, ResponseDataDetailed } from 'webdav'

import { getDavNameSpaces, getDavProperties } from '@nextcloud/files'
import {
	type FileInfo,

	genFileInfo,
} from '../utils/fileUtils'
import { client } from './WebdavClient'

/**
 * Retrieve the files list
 *
 * @param path
 * @param options
 */
export default async function(path: string, options = {}): Promise<FileInfo[]> {
	const response = await client.getDirectoryContents(path, {
		data: `<?xml version="1.0"?>
			<d:propfind ${getDavNameSpaces()}>
				<d:prop>
					<oc:tags />
					${getDavProperties()}
				</d:prop>
			</d:propfind>`,
		details: true,
		...options,
	}) as ResponseDataDetailed<FileStat[]>

	return response.data.map(genFileInfo)
}
