/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Locator, Page } from '@playwright/test'

import { expect } from '@playwright/test'
import { escapeRegExp } from './strings.ts'

// The viewer modal is the only structural selector we keep: it is the scope
// every other (role-based) locator hangs off, and it has no stable a11y name.
/** The viewer modal root. */
export const getViewer = (page: Page): Locator => page.locator('body > .viewer')

/** The name shown in the viewer header. */
export const getViewerName = (page: Page): Locator => getViewer(page).locator('.modal-header__name')

/** The header actions menu toggle. */
export const getMenuToggle = (page: Page): Locator =>
	getViewer(page).getByRole('button', { name: 'Actions' })

/** The header close button. */
export const getCloseButton = (page: Page): Locator =>
	getViewer(page).getByRole('button', { name: 'Close', exact: true })

/** The header edit (image editor) button. */
export const getEditButton = (page: Page): Locator =>
	getViewer(page).getByRole('button', { name: 'Edit' })

/** The previous-slide navigation button. */
export const getPrevButton = (page: Page): Locator =>
	getViewer(page).getByRole('button', { name: 'Previous' })

/** The next-slide navigation button. */
export const getNextButton = (page: Page): Locator =>
	getViewer(page).getByRole('button', { name: 'Next' })

/** The media element of the active slide. */
export const getActiveMedia = (page: Page, type: 'img' | 'video' | 'audio'): Locator =>
	getViewer(page).locator(`.modal-container .viewer__file.viewer__file--active ${type}`)

/** All media elements of the given type currently mounted in the viewer (active + preloaded neighbours). */
export const getMediaInContainer = (page: Page, type: 'img' | 'video' | 'audio'): Locator =>
	getViewer(page).locator(`.modal-container ${type}`)

/** Go to the next slide. */
export const goNext = (page: Page): Promise<void> => getNextButton(page).click()

/** Go to the previous slide. */
export const goPrev = (page: Page): Promise<void> => getPrevButton(page).click()

/**
 * Assert both navigation arrows are visible (slideshow with neighbours).
 *
 * @param page the page
 */
export async function expectNavArrows(page: Page): Promise<void> {
	await expect(getPrevButton(page)).toBeVisible()
	await expect(getNextButton(page)).toBeVisible()
}

/**
 * Assert the active media element is served from a url matching the given fragment.
 *
 * @param page the page
 * @param type the media element type
 * @param urlFragment a substring the src attribute must contain
 */
export async function expectActiveSource(
	page: Page,
	type: 'img' | 'video' | 'audio',
	urlFragment: string,
): Promise<void> {
	await expect(getActiveMedia(page, type)).toHaveAttribute('src', new RegExp(escapeRegExp(urlFragment)))
}

/** Open the viewer header actions menu. */
export const openHeaderMenu = (page: Page): Promise<void> => getMenuToggle(page).click()

/**
 * Locator for an item in the viewer header actions menu, by accessible name.
 *
 * @param page the page
 * @param name the menu item name
 */
export const getMenuItem = (page: Page, name: string | RegExp): Locator =>
	page.getByRole('menuitem', { name })

/**
 * Wait for the viewer to be open and finished loading.
 *
 * @param page the page
 */
export async function expectViewerLoaded(page: Page): Promise<void> {
	const viewer = getViewer(page)
	await expect(viewer).toBeVisible()
	await expect(viewer).toHaveClass(/modal-mask/)
	await expect(viewer).not.toHaveClass(/icon-loading/)
}
