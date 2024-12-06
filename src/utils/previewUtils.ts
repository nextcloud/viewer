/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { FileInfo } from './fileUtils.js'

import { encodePath } from '@nextcloud/paths'
import { generateUrl } from '@nextcloud/router'
import { getSharingToken, isPublicShare } from '@nextcloud/sharing/public'
import { canDownload } from './canDownload'

import axios from '@nextcloud/axios'
import logger from '../services/logger.js'

/**
 * Fetch a preview for download-disabled shares
 * @param url The preview URL to fetch
 */
async function loadPrivatePreview(url: string): Promise<string> {
	try {
		const { data } = await axios.get(url, { headers: { 'X-NC-Preview': 'true' }, responseType: 'blob' })
		const { promise, resolve } = Promise.withResolvers<string>()
		const reader = new FileReader()
		reader.addEventListener('load', () => resolve(reader.result!.toString()), false)
		reader.readAsDataURL(data)

		return promise
	} catch (error) {
		logger.error('Could not fetch preview image', { error })
		throw error
	}
}

/**
 * @param fileInfo The file info
 * @return the preview url if the file have an existing preview or the absolute dav remote path if none.
 */
export async function getPreviewIfAny(fileInfo: FileInfo): Promise<string> {
	if (fileInfo.previewUrl) {
		return fileInfo.previewUrl
	}

	const { fileid, filename, hasPreview, davPath, etag } = fileInfo
	const searchParams = `fileId=${fileid}`
		+ `&x=${Math.floor(screen.width * devicePixelRatio)}`
		+ `&y=${Math.floor(screen.height * devicePixelRatio)}`
		+ '&a=true'
		+ (etag ? `&etag=${etag.replace(/&quot;/g, '')}` : '')

	if (hasPreview) {
		let url: string
		if (isPublicShare()) {
			url = generateUrl(`/apps/files_sharing/publicpreview/${getSharingToken()}?file=${encodePath(filename)}&${searchParams}`)
		} else {
			url = generateUrl(`/core/preview?${searchParams}`)
		}

		// Best case: We have download permission, so we can just use the URL
		if (canDownload(fileInfo)) {
			return url
		}

		// If not set correct header and fetch the image manually
		return await loadPrivatePreview(url)
	}

	// If nothing worked, we fallback to the dav path
	return davPath!
}
