/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { FileStat, ResponseDataDetailed } from 'webdav'

import { getClient, getDavNameSpaces, getDavProperties } from '@nextcloud/files/dav'

/**
 * Retrieve the files list
 *
 * @param origin - The WebDAV base URL of the client to use
 * @param path - The path of the file to stat
 * @param options - Additional options passed to the WebDAV stat request
 */
export async function rawStat(origin: string, path: string, options = {}) {
	const response = await getClient(origin).stat(path, {
		...options,
		data: getStatData(),
		details: true,
	}) as ResponseDataDetailed<FileStat>

	return response.data
}

/**
 *
 */
function getStatData() {
	return `<?xml version="1.0"?>
	<d:propfind ${getDavNameSpaces()}>
		<d:prop>
			<oc:tags />
			${getDavProperties()}
		</d:prop>
	</d:propfind>`
}
