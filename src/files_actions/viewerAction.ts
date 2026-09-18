/*
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { INode, IView } from '@nextcloud/files'

import { DefaultType, Permission, registerFileAction } from '@nextcloud/files'
import { emit } from '@nextcloud/event-bus'
import { t } from '@nextcloud/l10n'
import svgEye from '@mdi/svg/svg/eye.svg?raw'

import logger from '../services/logger.js'

// TODO: provide API to let apps register their support for e2ee
export const VIEWER_E2EE_SUPPORTED_MIMETYPES: RegExp[] = [/^audio\//i, /^image\//i, /^video\//i]

/**
 * @param node The file to open
 * @param view any The files view
 * @param dir the directory path
 */
function pushToHistory(node: INode, view: IView, dir: string) {
	if (!window.OCP?.Files?.Router) {
		// No router, we're in standalone mode
		logger.debug('No router found, skipping history push')
		return
	}

	const editing = window.OCP.Files.Router.query.editing === 'true' ? 'true' : 'false'
	window.OCP.Files.Router.goToRoute(
		null,
		{ ...window.OCP.Files.Router.params, view: view.id, fileid: String(node.fileid) },
		{ ...window.OCP.Files.Router.query, dir, openfile: 'true', editing },
		true,
	)
}
/**
 * @param editing True if the file is being edited
 */
export function toggleEditor(editing = false) {
	if (!window.OCP?.Files?.Router) {
		// No router, we're in standalone mode
		logger.debug('No router found, skipping toggle editor')
		return
	}

	// Update the URL query param
	const newQuery = { ...window.OCP.Files.Router.query, editing: editing ? 'true' : 'false' }
	window.OCP.Files.Router.goToRoute(null, window.OCP.Files.Router.params, newQuery)
}

const onPopState = () => {
	emit('editor:toggle', window.OCP?.Files?.Router?.query?.editing === 'true')
	if (window.OCP?.Files?.Router?.query?.openfile !== 'true') {
		window.OCA.Viewer.close()
		window.removeEventListener('popstate', onPopState)
	}
}

/**
 * Execute the viewer files action
 */
async function execAction({ nodes, view, folder }): Promise<boolean|null> {
	const onClose = () => {
		// If there is no router, we're in standalone mode
		if (!window.OCP?.Files?.Router) {
			return
		}

		// This can sometime be called with the openfile set to true already. But we don't want to keep openfile when closing the viewer.
		const newQuery = { ...window.OCP?.Files?.Router?.query }
		delete newQuery.openfile
		delete newQuery.editing
		window.OCP?.Files?.Router?.goToRoute(null, window.OCP?.Files?.Router?.params, newQuery)
	}

	if (window.OCP?.Files?.Router) {
		window.addEventListener('popstate', onPopState)
	}

	pushToHistory(nodes[0], view, folder.path)
	window.OCA.Viewer.open({
		path: nodes[0].path,
		onPrev(fileInfo) {
			pushToHistory(fileInfo, view, folder.path)
		},
		onNext(fileInfo) {
			pushToHistory(fileInfo, view, folder.path)
		},
		onClose,
	})

	return null
}

/**
 * Register the viewer action on the files API
 */
export function registerViewerAction() {
	registerFileAction({
		id: 'view',
		displayName: () => t('viewer', 'View'),
		iconSvgInline: () => svgEye,
		default: DefaultType.DEFAULT,
		enabled: ({ nodes }) => {
			// Disable if not located in user root
			if (nodes.some(node => !(node.isDavResource && node.root?.startsWith('/files')))) {
				return false
			}

			const canReadAllNodes = nodes.every((node) => Boolean(node.permissions & Permission.READ))
			if (!canReadAllNodes) {
				return false
			}

			const isEncrypted = nodes.some((node) => node.attributes['e2ee-is-encrypted'])
			const isSupportedByCore = nodes.every((node) => VIEWER_E2EE_SUPPORTED_MIMETYPES.some((regex) => regex.test(node.mime)))
			if (isEncrypted && !isSupportedByCore) {
				// only allow encrypted files if they are supported by the core viewer (video and image)
				return false
			}

			const isSupportedByViewer = nodes.every((node) => window.OCA.Viewer.mimetypes.includes(node.mime))
			return isSupportedByViewer
		},
		exec: execAction,
	})
}
