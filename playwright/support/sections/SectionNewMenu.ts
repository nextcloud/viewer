/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import type { Locator, Page } from '@playwright/test'

export class SectionNewMenu {
	public readonly menuLocator: Locator

	constructor(public readonly page: Page) {
		this.menuLocator = page.getByRole('menu', { name: 'New' })
	}

	public getMenuEntry(name: string | RegExp): Locator {
		return this.menuLocator.getByRole('menuitem', { name })
	}
}
