/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { User } from '@nextcloud/e2e-test-server'
import type { APIRequestContext } from '@playwright/test'

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, request } from '@playwright/test'

export const NEXTCLOUD_URL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:8081'

const FIXTURES_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../fixtures')

/**
 * Absolute path to a fixture file.
 *
 * @param fixture the fixture file name
 */
export const fixturePath = (fixture: string): string => resolve(FIXTURES_DIR, fixture)

// Share constants, mirrored from @nextcloud/sharing (ShareType) and
// @nextcloud/files (Permission) to avoid pulling browser-only deps into Node.
export const ShareType = { User: 0, Link: 3 } as const
export const Permission = { READ: 1 } as const

export interface ShareOptions {
	shareType: number
	shareWith?: string
	permissions?: number
	attributes?: { value: boolean, key: string, scope: string }[]
}

const basicAuth = (user: User) =>
	'Basic ' + Buffer.from(`${user.userId}:${user.password}`).toString('base64')

/**
 * Build an APIRequestContext authenticated as the given user with Basic auth.
 * Basic auth sidesteps session/CSRF handling, so it works for WebDAV and OCS
 * regardless of the browser session state.
 *
 * @param user the user to authenticate as
 */
export async function getUserApi(user: User): Promise<APIRequestContext> {
	return await request.newContext({
		baseURL: NEXTCLOUD_URL,
		extraHTTPHeaders: {
			Authorization: basicAuth(user),
			'OCS-APIRequest': 'true',
			Accept: 'application/json',
		},
		ignoreHTTPSErrors: true,
	})
}

const davPath = (user: User, target: string) =>
	`/remote.php/dav/files/${encodeURIComponent(user.userId)}`
	+ target.split('/').map(encodeURIComponent).join('/')

/**
 * Upload a fixture file to the user's DAV root.
 *
 * @param user the file owner
 * @param fixture the fixture file name under playwright/fixtures
 * @param mimeType the content type to send
 * @param target the DAV target path relative to the user root (default `/<fixture>`)
 */
export async function uploadFile(
	user: User,
	fixture: string,
	mimeType: string,
	target = `/${fixture}`,
): Promise<void> {
	const api = await getUserApi(user)
	try {
		const body = readFileSync(resolve(FIXTURES_DIR, fixture))
		const response = await api.put(davPath(user, target), {
			headers: { 'Content-Type': mimeType },
			data: body,
		})
		expect(
			response.ok(),
			`upload of ${fixture} expected 2xx, got ${response.status()}`,
		).toBeTruthy()
	} finally {
		await api.dispose()
	}
}

/**
 * Create a folder in the user's DAV root (MKCOL).
 *
 * @param user the folder owner
 * @param target the DAV target path relative to the user root
 */
export async function createFolder(user: User, target: string): Promise<void> {
	const api = await getUserApi(user)
	try {
		const response = await api.fetch(davPath(user, target), { method: 'MKCOL' })
		expect(
			response.ok(),
			`MKCOL ${target} expected 2xx, got ${response.status()}`,
		).toBeTruthy()
	} finally {
		await api.dispose()
	}
}

/**
 * Create a share via OCS. Returns the share token, which is only present for
 * link shares (user shares resolve to `null`).
 *
 * @param user the sharing user
 * @param path the file/folder path to share
 * @param options extra share options (shareType defaults to link share)
 */
export async function createShare(
	user: User,
	path: string,
	options: ShareOptions = { shareType: ShareType.Link },
): Promise<string | null> {
	const api = await getUserApi(user)
	try {
		const response = await api.post('/ocs/v2.php/apps/files_sharing/api/v1/shares?format=json', {
			headers: { 'Content-Type': 'application/json' },
			data: {
				path,
				permissions: Permission.READ,
				...options,
				attributes: options.attributes && JSON.stringify(options.attributes),
			},
		})
		const body = await response.json().catch(() => ({}))
		const statuscode = body?.ocs?.meta?.statuscode
		if (statuscode !== 100 && statuscode !== 200) {
			throw new Error(`createShare failed: ${JSON.stringify(body)}`)
		}
		return body?.ocs?.data?.token ?? null
	} finally {
		await api.dispose()
	}
}

/**
 * Create a public link share and return its (required) token.
 *
 * @param user the sharing user
 * @param path the file/folder path to share
 */
export async function createLinkShare(user: User, path: string): Promise<string> {
	const token = await createShare(user, path, { shareType: ShareType.Link })
	if (!token) {
		throw new Error(`createLinkShare: no token returned for ${path}`)
	}
	return token
}
