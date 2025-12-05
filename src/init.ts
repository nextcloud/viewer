/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { createApp } from 'vue'
import Viewer from './views/Viewer.vue'
import { getViewer } from './api_package/viewer.ts'
import { registerVideoCustomElement, registerVideoHandler } from './models/videos.ts'
import { logger } from './services/logger.ts'

const ViewerService = getViewer()
const ViewerApp = createApp(Viewer)

// Create top wrapper element
const ViewerRoot = document.createElement('div')
ViewerRoot.id = 'viewer'
document.body.appendChild(ViewerRoot)

// Put controls for video viewer
// Needed as Firefox CSP blocks the loading of the svg through the normal plyr system
const VideoControls = document.createElement('div')
// @ts-expect-error PLYR_ICONS is a global injected by vite
VideoControls.innerHTML = PLYR_ICONS
VideoControls.style.display = 'none'
document.body.appendChild(VideoControls)

// Mount and set the viewer instance
const ViewerInstance = ViewerApp.mount(ViewerRoot)
ViewerService._setViewer(ViewerInstance as InstanceType<typeof Viewer>)
logger.info('Viewer initialized', { ViewerInstance })

// register the custom elements for all handlers
registerVideoCustomElement()
registerVideoHandler()
