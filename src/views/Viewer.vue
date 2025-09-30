<!--
  - SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcModal v-if="currentFile"
		:additional-trap-elements="trapElements"
		:class="modalClass"
		:clear-view-delay="-1 /* disable fade-out because of accessibility reasons */"
		:close-button-contained="false"
		:dark="true"
		:light-backdrop="lightBackdrop"
		:data-handler="handlerId"
		:enable-slideshow="hasPrevious || hasNext"
		:slideshow-paused="editing"
		:enable-swipe="canSwipe && !editing"
		:has-next="hasNext"
		:has-previous="hasPrevious"
		:inline-actions="canEdit ? 1 : 0"
		:spread-navigation="true"
		:style="{ width: isSidebarShown ? `${sidebarPosition}px` : null }"
		:name="currentFile.basename"
		class="viewer"
		size="full"
		@close="close"
		@previous="previous"
		@next="next">

	</NcModal>

</template>

<script setup lang="ts">
import type { File } from '@nextcloud/files'
import type { IHandler } from '../api_package/index.ts'
import type { ViewerAPI, ViewerOptions } from '../api_package/viewer.ts'

import { ref } from 'vue'
import { t } from '@nextcloud/l10n'
import NcModal from '@nextcloud/vue/components/NcModal'

import { logger } from '../services/logger.ts'
import { getHandlerForFile, getHandlers } from '../helpers/handlerHelper.ts'

const errorString = ref()

// Current context
const currentFile = ref<File>()
const currentHandler = ref<IHandler>()
const currentOptions = ref<ViewerOptions>({} as ViewerOptions)

const open: ViewerAPI['open'] = async (nodes, file, options, handlerId) => {
	logger.debug('Open nodes', { nodes, file, options, handlerId})

	// Ensure we have at least one node to open
	if (nodes.length === 0 || !file) {
		logger.error('No nodes provided to open')
		errorString.value = t('viewer', 'No files were provided to open.')
		return
	}

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	const handler = handlerId ? getHandlers().get(handlerId) : getHandlerForFile(file ?? nodes[0])
	if (!handler) {
		logger.error('No handler found for the given file', { file, nodes })
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	currentHandler.value = handler
	currentFile.value = file
	currentOptions.value = options ?? {} as ViewerOptions
}

const openFolder: ViewerAPI['openFolder'] = async (nodes, file, options, handlerId) => {
	logger.debug('Opening folder', { nodes, file, options, handlerId })

	if (handlerId && !window._nc_viewer_handlers.has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'We were not able to open the file. Please try again later.')
		return
	}
}

const compare: ViewerAPI['compare'] = async (node1, node2, handlerId) => {
	logger.debug('Comparing nodes', { node1, node2, handlerId })

	if (handlerId && !window._nc_viewer_handlers.has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'We were not able to open the file. Please try again later.')
		return
	}

defineExpose<ViewerAPI>({
	open,
	openFolder,
	compare,
})	

</script>

<style scoped>

</style>