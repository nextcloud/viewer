/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

describe('Browser navigation', function() {
	before(function() {
		// Init user
		cy.createRandomUser().then(user => {
			// Upload test files
			cy.uploadFile(user, 'image.png', 'image/png', '/image1.png')
			cy.createFolder(user, '/Photos')
			cy.uploadFile(user, 'image.png', 'image/png', '/Photos/image1.png')

			// Visit nextcloud
			cy.login(user)
			cy.visit('/apps/files')
		})
	})
	after(function() {
		cy.logout()
	})

	it('Navigating back to the files overview', function() {
		cy.getFile('image1.png', { timeout: 10000 })
		cy.openFile('image1.png')
		cy.get('body > .viewer').should('be.visible')
		cy.go('back')
		cy.get('body > .viewer').should('not.exist')
	})

	it('Navigating back after closing leaves the folder the file was opened from', function() {
		cy.visit('/apps/files')
		cy.getFile('Photos', { timeout: 10000 })
		cy.openFile('Photos')
		cy.getFile('image1.png', { timeout: 10000 })
		cy.openFile('image1.png')
		cy.get('body > .viewer').should('be.visible')

		cy.get('body > .viewer button.header-close').click()
		cy.get('body > .viewer').should('not.exist')

		// Closing must not stack an entry on top of the folder's: one step back
		// leaves the folder, rather than reopening the file that was just closed
		cy.go('back')
		cy.get('body > .viewer').should('not.exist')
		cy.getFile('Photos').should('be.visible')
	})
})
