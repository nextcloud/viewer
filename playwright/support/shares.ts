/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import type { RandomUser } from './fixtures/random-user.ts'

import { getUserApi } from './uploadFile.ts'

/** Share types as defined by the OCS sharing API. */
export const ShareType = {
	User: 0,
	Link: 3,
} as const

/** A single share attribute (e.g. to forbid download on a user share). */
export interface ShareAttribute {
	scope: string
	key: string
	value: boolean
}

export interface ShareOptions {
	shareType: number
	shareWith?: string
	permissions?: number
	attributes?: ShareAttribute[]
}

/**
 * Create a share through the OCS sharing API.
 *
 * @param user - The owner of the shared file/folder
 * @param path - The path to share, relative to the user root
 * @param options - The share options (type, sharee, permissions, attributes)
 * @return The created share token
 */
export async function createShare(
	user: RandomUser,
	path: string,
	options: ShareOptions,
): Promise<string> {
	const form: Record<string, string> = {
		path,
		shareType: String(options.shareType),
	}
	if (options.shareWith !== undefined) {
		form.shareWith = options.shareWith
	}
	if (options.permissions !== undefined) {
		form.permissions = String(options.permissions)
	}
	if (options.attributes !== undefined) {
		form.attributes = JSON.stringify(options.attributes)
	}

	const api = await getUserApi(user)
	try {
		const response = await api.post('/ocs/v2.php/apps/files_sharing/api/v1/shares?format=json', { form })
		if (!response.ok()) {
			throw new Error(`Failed to create share for ${path}: ${response.status()} ${response.statusText()}`)
		}

		const body = await response.json()
		// Only link shares carry a token; user shares return null here.
		return body?.ocs?.data?.token ?? ''
	} finally {
		await api.dispose()
	}
}

/**
 * Create a public link share and return its token.
 *
 * @param user - The owner of the shared file/folder
 * @param path - The path to share, relative to the user root
 */
export async function createLinkShare(user: RandomUser, path: string): Promise<string> {
	const token = await createShare(user, path, { shareType: ShareType.Link })
	if (!token) {
		throw new Error('Invalid OCS response: no share token returned for link share')
	}
	return token
}
