/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { createApp } from 'vue'

import { getViewer } from './api_package/viewer.ts'
import { logger } from './services/logger.ts'
import Viewer from './views/Viewer.vue'

import { registerVideoCustomElement, registerVideoHandler } from './models/videos.ts'

const ViewerService = getViewer()
const ViewerApp = createApp(Viewer)

// Create top wrapper element
const ViewerRoot = document.createElement('div')
ViewerRoot.id = 'viewer'
document.body.appendChild(ViewerRoot)

// Mount and set the viewer instance
const ViewerInstance = ViewerApp.mount(ViewerRoot)
ViewerService._setViewer(ViewerInstance as InstanceType<typeof Viewer>)
logger.info('Viewer initialized', { ViewerInstance })

// register the custom elements for all handlers
registerVideoCustomElement()
registerVideoHandler()
