/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: MIT
 */

import type { Locator, Page } from '@playwright/test'

import { SectionNewMenu } from './SectionNewMenu.ts'

export class FilesAppPage {
	public readonly buttonNewMenuLocator: Locator
	public readonly tableFilesList: Locator

	constructor(public readonly page: Page) {
		this.tableFilesList = this.page.getByRole('table', { name: /List of your files and folders/i })
		this.buttonNewMenuLocator = this.page.getByRole('button', {
			name: 'New',
		})
	}

	public async openFilesApp(): Promise<void> {
		await this.page.goto('/apps/files')
	}

	public async openNewMenu(): Promise<SectionNewMenu> {
		await this.buttonNewMenuLocator.click()
		return new SectionNewMenu(this.page)
	}

	public getFileOrFolder(name: string): Locator {
		return this.tableFilesList
			.getByRole('row')
			.filter({ has: this.page.getByRole('cell', { name }) })
	}

	/**
	 * A file/folder row located by its exact name via the Files app test hook.
	 * Robust for names containing dots, spaces or special characters.
	 *
	 * @param name - The exact file or folder name
	 */
	public getRowByName(name: string): Locator {
		return this.page.locator(`[data-cy-files-list-row-name=${JSON.stringify(name)}]`)
	}

	/**
	 * Open a file/folder by clicking its name link, triggering the default action
	 * (the viewer for viewable files, navigation for folders).
	 *
	 * @param name - The exact file or folder name
	 */
	public async openFile(name: string): Promise<void> {
		await this.getRowByName(name)
			.locator('[data-cy-files-list-row-name-link]')
			.click()
	}
}
