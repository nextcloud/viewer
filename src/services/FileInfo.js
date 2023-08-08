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

import client from './DavClient.js'
import { genFileInfo } from '../utils/fileUtils.js'
import { createClient } from 'webdav'
import { getRequestToken } from '@nextcloud/auth'

const statData = `<?xml version="1.0"?>
<d:propfind  xmlns:d="DAV:"
	xmlns:oc="http://owncloud.org/ns"
	xmlns:nc="http://nextcloud.org/ns"
	xmlns:ocs="http://open-collaboration-services.org/ns">
	<d:prop>
		<d:getlastmodified />
		<d:getcontenttype />
		<d:resourcetype />
		<d:getetag />
		<oc:fileid />
		<oc:permissions />
		<oc:size />
		<d:getcontentlength />
		<nc:has-preview />
		<nc:mount-type />
		<nc:is-encrypted />
		<ocs:share-permissions />
		<oc:tags />
		<oc:favorite />
		<oc:comments-unread />
		<oc:owner-id />
		<oc:owner-display-name />
		<oc:share-types />
	</d:prop>
</d:propfind>`

/**
 * Retrieve the files list
 *
 * @param {string} path the path relative to the user root
 * @param {object} [options] optional options for axios
 * @return {Promise<Array>} the file list
 */
export default async function(path, options) {
	const response = await client.stat(path, Object.assign({
		data: statData,
		details: true,
	}, options))
	return genFileInfo(response.data)
}

/**
 * Retrieve the files list
 *
 * @param {string} origin
 * @param {string} path the path relative to the user root
 * @param {object} [options] optional options for axios
 * @return {Promise<object>} the file list
 */
export async function rawStat(origin, path, options) {
	const response = await createClient(origin, { headers: { requesttoken: getRequestToken() || '' } }).stat(path, {
		...options,
		data: statData,
		details: true,
	})

	return response.data
}