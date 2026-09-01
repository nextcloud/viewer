/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import type { APIRequestContext } from '@playwright/test'
import type { RandomUser } from './fixtures/random-user.ts'

import { request } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const NEXTCLOUD_URL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:8081'

/**
 * Build a request context authenticated as the given user with Basic auth.
 * Basic auth sidesteps session/CSRF handling, so it works for WebDAV and OCS
 * regardless of the browser session state.
 *
 * @param user - The user to authenticate as
 */
export async function getUserApi(user: RandomUser): Promise<APIRequestContext> {
	return await request.newContext({
		baseURL: NEXTCLOUD_URL,
		extraHTTPHeaders: {
			Authorization: 'Basic ' + Buffer.from(`${user.userId}:${user.password}`).toString('base64'),
			'OCS-APIRequest': 'true',
		},
	})
}

/**
 * Read the bytes of a fixture from the `playwright/fixtures` directory.
 *
 * @param fixtureName - The fixture file name (e.g. `image1.jpg`)
 */
function readFixture(fixtureName: string): Buffer {
	const path = fileURLToPath(new URL(`../fixtures/${fixtureName}`, import.meta.url))
	return readFileSync(path)
}

/**
 * Encode a path segment by segment so slashes are kept but special
 * characters (spaces, emojis, quotes …) are percent-encoded.
 *
 * @param path - The remote path relative to the user root
 */
function encodeRemotePath(path: string): string {
	return path
		.split('/')
		.map((segment) => encodeURIComponent(segment))
		.join('/')
}

/**
 * The dav path of a target relative to the user's files root.
 *
 * @param user - The owner of the file
 * @param target - The remote path relative to the user root (leading slash optional)
 */
function davPath(user: RandomUser, target: string): string {
	const path = target.startsWith('/') ? target : `/${target}`
	return `/remote.php/dav/files/${encodeURIComponent(user.userId)}${encodeRemotePath(path)}`
}

/**
 * Upload a fixture to the user WebDAV root.
 *
 * @param user - The user owning the file
 * @param fixtureName - The fixture file name to read from `playwright/fixtures`
 * @param remoteName - The remote name/path relative to the user root (defaults to the fixture name)
 * @param mimeType - The content type sent with the upload
 * @param mtime - The modification time (unix seconds) to set via the `X-OC-MTime` header
 */
export async function uploadFile(
	user: RandomUser,
	fixtureName: string,
	remoteName: string = fixtureName,
	mimeType: string = 'application/octet-stream',
	mtime?: number,
): Promise<void> {
	const api = await getUserApi(user)
	try {
		const headers: Record<string, string> = { 'Content-Type': mimeType }
		// Set the modification time so specs can rely on a deterministic order.
		if (mtime !== undefined) {
			headers['X-OC-MTime'] = String(mtime)
		}
		const response = await api.put(davPath(user, remoteName), {
			data: readFixture(fixtureName),
			headers,
		})
		if (!response.ok()) {
			throw new Error(`Failed to upload ${fixtureName} to ${remoteName}: ${response.status()} ${response.statusText()}`)
		}
	} finally {
		await api.dispose()
	}
}

/**
 * Create a folder in the user WebDAV root.
 *
 * @param user - The user owning the folder
 * @param remotePath - The remote folder path relative to the user root
 */
export async function createFolder(user: RandomUser, remotePath: string): Promise<void> {
	const api = await getUserApi(user)
	try {
		const response = await api.fetch(davPath(user, remotePath), { method: 'MKCOL' })
		if (!response.ok()) {
			throw new Error(`Failed to create folder ${remotePath}: ${response.status()} ${response.statusText()}`)
		}
	} finally {
		await api.dispose()
	}
}
