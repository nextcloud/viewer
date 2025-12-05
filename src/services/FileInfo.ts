/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { FileStat, ResponseDataDetailed } from 'webdav'

import { davGetClient, getDavNameSpaces, getDavProperties } from '@nextcloud/files'
import {
	type FileInfo,

	genFileInfo,
} from '../utils/fileUtils'
import { client } from './WebdavClient'

const statData = `<?xml version="1.0"?>
	<d:propfind ${getDavNameSpaces()}>
		<d:prop>
			<oc:tags />
			${getDavProperties()}
		</d:prop>
	</d:propfind>`

/**
 * Retrieve the files list
 *
 * @param path
 * @param options
 */
export default async function(path: string, options = {}): Promise<FileInfo> {
	const response = await client.stat(path, {
		data: statData,
		details: true,
		...options,
	}) as ResponseDataDetailed<FileStat>
	return genFileInfo(response.data)
}

/**
 * Retrieve the files list
 *
 * @param origin
 * @param path
 * @param options
 */
export async function rawStat(origin: string, path: string, options = {}) {
	const response = await davGetClient(origin).stat(path, {
		...options,
		data: statData,
		details: true,
	}) as ResponseDataDetailed<FileStat>

	return response.data
}
