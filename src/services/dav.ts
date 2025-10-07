/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { FileType, type File, type Folder, type Node } from '@nextcloud/files'
import type { FileStat, ResponseDataDetailed } from 'webdav'
import { getClient, getDefaultPropfind, resultToNode } from '@nextcloud/files/dav'

export const client = getClient()

export const fetchFolderContent = async (folder: Folder): Promise<File[]> => {
	const propfindPayload = getDefaultPropfind()
	const result = (await client.getDirectoryContents(`${folder.root}${folder.path}`, {
		details: true,
		data: propfindPayload,
	}))as ResponseDataDetailed<Array<FileStat>>

	return result.data
		.map(node => resultToNode(node))
		.filter((node) => node.type === FileType.File) as File[]
}
