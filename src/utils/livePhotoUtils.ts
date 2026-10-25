/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { BasicFileInfo } from './models'

const livePictureExt = ['jpg', 'jpeg', 'png']
const livePictureExtRegex = new RegExp(`\\.(${livePictureExt.join('|')})$`, 'i')

/**
 * Return the peer live photo from a list of files based on its fileId
 * @param peerFileId
 * @param fileList
 */
export function findLivePhotoPeerFromFileId(peerFileId: number, fileList: BasicFileInfo[]): BasicFileInfo | undefined {
	return fileList.find(file => file.fileid === peerFileId)
}

/**
 * Return the peer live photo from a list of files based on the original file name.
 * @param referenceFile
 * @param fileList
 */
export function findLivePhotoPeerFromName(referenceFile: BasicFileInfo, fileList: BasicFileInfo[]): BasicFileInfo | undefined {
	return fileList.find(comparedFile => {
		// if same filename and extension is allowed
		return comparedFile.filename !== referenceFile.filename
				&& (comparedFile.basename.startsWith(referenceFile.name) && livePictureExtRegex.test(comparedFile.basename))
	})
}

/**
 * Return the image associated with a live photo video using its DAV peer file ID.
 * @param referenceFile
 * @param fileList
 */
export function findLivePhotoImageForVideo(referenceFile: BasicFileInfo, fileList: BasicFileInfo[]): BasicFileInfo | undefined {
	// Try metadata-based matching first
	const byMetadata = fileList.find(comparedFile => comparedFile.metadataFilesLivePhoto !== undefined
		&& Number(comparedFile.metadataFilesLivePhoto) === Number(referenceFile.fileid)
		&& livePictureExtRegex.test(comparedFile.basename))
	if (byMetadata) {
		return byMetadata
	}
	// Fallback to name-based matching for compatibility
	return fileList.find(comparedFile => {
		return comparedFile.filename !== referenceFile.filename
			&& (comparedFile.basename.startsWith(referenceFile.name) && livePictureExtRegex.test(comparedFile.basename))
	})
}

