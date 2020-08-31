/**
 * @copyright Copyright (c) 2020 Jakob Röhrl <jakob.roehrl@web.de>
 *
 * @author Jakob Röhrl <jakob.roehrl@web.de>
 *
 * @license GNU AGPL version 3 or any later version
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

import { randHash } from '../utils/'
const randUser = randHash()

describe('Open image.png in viewer', function() {
	before(function() {
		// Init user
		cy.nextcloudCreateUser(randUser, 'password')
		cy.login(randUser, 'password')

		// Upload test files
		cy.uploadFile('image.png', 'image/png')
		cy.visit('/apps/files')

		// wait a bit for things to be settled
		cy.wait(2000)
	})
	after(function() {
		cy.logout()
	})

	it('Open the viewer on file click', function() {
		cy.openFile('image.png')
		cy.get('#viewer-content').should('be.visible')
	})

    it('Delete', function() {
		cy.get('.action-item__menutoggle').click()
        cy.wait(1000)
        cy.get('.btn_delete').click()
        cy.wait(2000)
        cy.get('.icon-close').click()
    })
    
    it('Reload', function() {
        cy.reload()
    })
    
    it('Check that the file is gone', function() {
		cy.get('#fileList tr[data-file="image.png"]', { timeout: 10000 })
			.should('not.contain', 'image.png')
	})
})