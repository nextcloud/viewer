<!--
  - SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcModal v-if="currentFile"
		:additional-trap-elements="trapElements"
		:clear-view-delay="-1 /* disable fade-out because of accessibility reasons */"
		:close-button-contained="false"
		:dark="true"
		:light-backdrop="lightBackdrop"
		:data-handler="currentHandler?.id"
		:enable-slideshow="hasPrevious || hasNext"
		:slideshow-paused="editing"
		:enable-swipe="canSwipe && !editing"
		:has-next="hasNext"
		:has-previous="hasPrevious"
		:inline-actions="canEdit ? 1 : 0"
		:spread-navigation="true"
		:style="{ width: isSidebarShown ? `${sidebarPosition}px` : null }"
		:name="currentFile.basename"
		class="viewer__modal"
		size="full"
		@close="close"
		@previous="previous"
		@next="next">
		<span>Lorem ipsum</span>
	</NcModal>

</template>

<script setup lang="ts">
import type { File } from '@nextcloud/files'
import { getHandlers, type IHandler } from '../api_package/index.ts'
import type { ViewerAPI, ViewerOptions } from '../api_package/viewer.ts'

import { computed, defineComponent, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import { FileType } from '@nextcloud/files'
import NcModal from '@nextcloud/vue/components/NcModal'

import { fetchFolderContent } from '../services/dav.ts'
import { getHandlerForFile } from '../helpers/handlerHelper.ts'
import { logger } from '../services/logger.ts'

const errorString = ref()

const lightBackdrop = ref(false)

// Abilities
const canSwipe = ref(true)
const canEdit = ref(true)
const editing = ref(false)

// Sidebar handling
const sidebarPosition = ref(0)
const isSidebarShown = computed(() => sidebarPosition.value > 0)
const trapElements = ref<Element[]>([])

// Current context
const currentFile = ref<File>()
const currentFileList = ref<File[]>([])
const currentHandler = ref<IHandler>()
const currentOptions = ref<ViewerOptions>({
	canLoop: true,
	onClose: () => {},
	onNext: () => {},
	onPrev: () => {},
	loadMore: () => Promise.resolve([]),
})

const hasNext = computed(() => {
	const canLoop = currentOptions.value.canLoop
	const currentIndex = currentFileList.value.findIndex(f => f === currentFile.value)
	if (currentIndex === -1) {
		return false
	}

	// If we are not allowed to loop and we are at the end,
	// we cannot go next
	if (currentIndex < currentFileList.value.length - 1) {
		return true
	}

	// If we are allowed to loop and we are at the end,
	// we can go next if there is more than one file
	if (canLoop && currentIndex === currentFileList.value.length - 1 && currentFileList.value.length > 1) {
		return true
	}

	return false

})
const hasPrevious = computed(() => {
	const canLoop = currentOptions.value.canLoop
	const currentIndex = currentFileList.value.findIndex(f => f === currentFile.value)
	if (currentIndex === -1) {
		return false
	}

	// If we are not allowed to loop and we are at the start,
	// we cannot go previous
	if (currentIndex > 0) {
		return true
	}

	// If we are allowed to loop and we are at the start,
	// we can go previous if there is more than one file
	if (canLoop && currentIndex === 0 && currentFileList.value.length > 1) {
		return true
	}

	return false
})

const open: ViewerAPI['open'] = async (nodes, file, options, handlerId) => {
	logger.debug('Open nodes', { nodes, file, options, handlerId})
	
	// Filter out any non-file nodes
	nodes = nodes.filter(n => n.type === FileType.File)

	// Ensure we have at least one node to open
	if (nodes.length === 0 && !file) {
		logger.error('No nodes provided to open')
		errorString.value = t('viewer', 'No files were provided to open.')
		return
	}

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	// Slight adjustment: if there is a mismatch between
	// the provided file and the list of nodes
	if (!file) {
		file = nodes[0]
	} else if (!nodes.includes(file)) {
		nodes = [file, ...nodes]
	}

	// Last check, we need to have something to open
	if (!file) {
		logger.error('No file provided to open')
		errorString.value = t('viewer', 'No files were provided to open.')
		return
	}

	const handler = handlerId ? getHandlers().get(handlerId) : getHandlerForFile(file)
	if (!handler) {
		logger.error('No handler found for the given file', { file, nodes })
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	currentHandler.value = handler
	currentFile.value = file
	currentOptions.value = options ?? {} as ViewerOptions
	currentFileList.value = nodes

	onOpen()
}

const openFolder: ViewerAPI['openFolder'] = async (folder, file, options, handlerId) => {
	logger.debug('Opening folder', { folder, file, options, handlerId })

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}

	if (!folder || folder.type !== FileType.Folder) {
		logger.error('The provided folder is not a directory', { folder })
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}

	try {
		const nodes = await fetchFolderContent(folder)
		return open(nodes, file, options, handlerId)
	} catch (error) {
		logger.error('Failed to fetch folder contents', { folder, error })
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}
}

const compare: ViewerAPI['compare'] = async (node1, node2, handlerId) => {
	logger.debug('Comparing nodes', { node1, node2, handlerId })

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}

	onOpen()
}

function onOpen() {
	// Determine if we should use a light backdrop
	const defaultThemeIsLight = window.getComputedStyle(document.body).getPropertyValue('--background-invert-if-dark') !== 'invert(100%)'
	const theme = currentHandler.value?.theme ?? 'default'
	lightBackdrop.value = theme === 'light' || (theme === 'default' && defaultThemeIsLight)
}

function close() {
	currentFile.value = undefined
	currentFileList.value = []
	currentHandler.value = undefined
	currentOptions.value = {} as ViewerOptions
	errorString.value = undefined
}

async function next() {
	const canLoop = currentOptions.value.canLoop
	const currentIndex = currentFileList.value.findIndex(f => f === currentFile.value)

	if (currentIndex === -1) {
		logger.error('Current file not found in the file list', { currentFile: currentFile.value, fileList: currentFileList.value })
		return
	}

	// If we are not allowed to loop and we are at the end, do nothing
	if (currentIndex >= currentFileList.value.length - 1) {
		// We are at the end and cannot loop, do nothing
		return
	}

	let newIndex = currentIndex + 1
	// If we are allowed to loop and we are at the end, go to the start
	if (canLoop && newIndex >= currentFileList.value.length) {
		newIndex = 0
	}

	const newFile = currentFileList.value[newIndex]
	// Should not happen™, but just in case
	if (!newFile) {
		logger.error('Next file not found in the file list', { newIndex, fileList: currentFileList.value })
		return
	}

	currentFile.value = newFile as File

	// If we are at the end of the list, try to load more files if possible
	if (newIndex === currentFileList.value.length - 1) {
		try {
			const moreFiles = await currentOptions.value.loadMore?.() ?? []
			if (moreFiles.length > 0) {
				currentFileList.value = currentFileList.value.concat(moreFiles)
			}
		} catch (error) {
			logger.error('Failed to load more files', { error })
		}
	}
}

function previous() {
	const canLoop = currentOptions.value.canLoop
	const currentIndex = currentFileList.value.findIndex(f => f === currentFile.value)

	if (currentIndex === -1) {
		logger.error('Current file not found in the file list', { currentFile: currentFile.value, fileList: currentFileList.value })
		return
	}

	// If we are not allowed to loop and we are at the start, do nothing
	if (currentIndex <= 0) {
		// We are at the start and cannot loop, do nothing
		return
	}

	let newIndex = currentIndex - 1
	// If we are allowed to loop and we are at the start, go to the end
	if (canLoop && newIndex < 0) {
		newIndex = currentFileList.value.length - 1
	}

	const newFile = currentFileList.value[newIndex]
	// Should not happen™, but just in case
	if (!newFile) {
		logger.error('Previous file not found in the file list', { newIndex, fileList: currentFileList.value })
		return
	}

	currentFile.value = newFile as File
}

function handleAppSidebarOpen() {
	const sidebar = document.querySelector('aside.app-sidebar')
	if (sidebar) {
		sidebarPosition.value = sidebar.getBoundingClientRect().left
		trapElements.value = [sidebar]
	}
}

function handleAppSidebarClose() {
	sidebarPosition.value = 0
	trapElements.value = []
}

defineExpose<ViewerAPI>({
	open,
	openFolder,
	compare,
})	

</script>
<style scoped>

</style>