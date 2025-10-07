/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { createApp } from 'vue'

import { getViewer } from './api_package/viewer.ts'
import { logger } from './services/logger.ts'
import Viewer from './views/Viewer.vue'

const ViewerService = getViewer()
const ViewerApp = createApp(Viewer)
ViewerApp.config.devtools = { appId: 'Viewer' }

// Create top wrapper element
const ViewerRoot = document.createElement('div')
ViewerRoot.id = 'viewer'
document.body.appendChild(ViewerRoot)

// Mount and set the viewer instance
const ViewerInstance = ViewerApp.mount(ViewerRoot)
ViewerService._setViewer(ViewerInstance as InstanceType<typeof Viewer>)
logger.debug('Viewer initialized', { ViewerInstance })