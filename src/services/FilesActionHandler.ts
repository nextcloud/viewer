/**
 * @copyright Copyright (c) 2020 Azul <azul@riseup.net>
 *
 * @author Azul <azul@riseup.net>
 *
 * @license AGPL-3.0-or-later
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

import EyeSvg from '@mdi/svg/svg/eye.svg?raw'

import { DefaultType, FileAction, Permission, registerFileAction } from '@nextcloud/files'
import { translate as t } from '@nextcloud/l10n'

/**
 * @param {Node} node The file to open
 * @param {any} view any The files view
 * @param {string} dir the directory path
 */
function filesActionHandler(node, view, dir) {
	// replace potential leading double slashes
	const path = `${node.dirname}/${node.basename}`.replace(/^\/\//, '/')
	const onClose = () => {
		// This can sometime be called with the openfile set to true already. But we don't want to keep openfile when closing the viewer.
		const newQuery = { ...window.OCP.Files.Router.query }
		delete newQuery.openfile
		window.OCP.Files.Router.goToRoute(null, window.OCP.Files.Router.params, newQuery)
	}
	pushToHistory(node, view, dir)
	OCA.Viewer.open({ path, onPrev: pushToHistory, onNext: pushToHistory, onClose })
}

/**
 * @param {Node} node The file to open
 * @param {any} view any The files view
 * @param {string} dir the directory path
 */
function pushToHistory(node, view, dir) {
	window.OCP.Files.Router.goToRoute(
		null,
		{ view: view.id, fileid: node.fileid },
		{ dir, openfile: true },
		true,
	)
}

/**
 *
 */
export function registerViewerAction() {
	registerFileAction(new FileAction({
		id: 'view',
		displayName() {
			return t('viewer', 'View')
		},
		iconSvgInline: () => EyeSvg,
		default: DefaultType.DEFAULT,
		enabled: (nodes) => {
			// Disable if not located in user root
			if (nodes.some(node => !(node.isDavRessource && node.root?.startsWith('/files')))) {
				return false
			}
			// Faster to check if at least one node doesn't match the requirements
			return !nodes.some(node => (
				(node.permissions & Permission.READ) === 0
				|| !window.OCA.Viewer.mimetypes.includes(node.mime)
			))
		},
		exec: filesActionHandler,
	}))
}
