<!--
  - SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcModal v-show="!!currentFile"
		:additional-trap-elements="trapElements"
		:clear-view-delay="-1 /* disable fade-out because of accessibility reasons */"
		:close-button-outside="true"
		:dark="true"
		:data-handler="currentHandler?.id"
		:disable-swipe="!canSwipe && editing"
		:enable-slideshow="hasPrevious || hasNext"
		:has-next="hasNext"
		:has-previous="hasPrevious"
		:inline-actions="canEdit ? 1 : 0"
		:light-backdrop="lightBackdrop"
		:name="currentFile?.basename || ''"
		:slideshow-paused="editing"
		:spread-navigation="true"
		:style="{ width: isSidebarShown ? `${sidebarPosition}px` : null }"
		class="viewer__modal"
		size="full"
		ref="modal"
		@close="close"
		@previous="previous"
		@next="next">
		<!-- Loading status -->
		<span v-if="loading && !errorString" class="viewer__loading">
				<NcLoadingIcon :appearance="lightBackdrop ? 'dark' : 'light'" :size="32" />
		</span>

		<!-- Error message -->
		<NcEmptyContent v-else-if="errorString"
			:name="errorString"
			:description="t('viewer', 'We were unable to display the requested file.')">
			<template #icon>
				<FileAlertOutlineIcon />
			</template>
		</NcEmptyContent>

		<component v-show="!loading && !!currentFile"
			:is="currentHandler?.tagname"
			:file="currentFile"
			:files="currentFileList"
			:editing="editing"
			:isSidebarShown="isSidebarShown"
			:max-height="height"
			:max-width="width"
			v-model:canSwipe="canSwipe"
			@load="onLoad"
			@error="onError" />
	</NcModal>
</template>

<script setup lang="ts">
import type { File } from '@nextcloud/files'
import type { IHandler } from '../api_package/index.ts'
import type { ViewerAPI, ViewerOptions } from '../api_package/viewer.ts'

import { computed, onMounted, ref, useTemplateRef, watch} from 'vue'
import { FileType } from '@nextcloud/files'
import { t } from '@nextcloud/l10n'
import debounce from 'debounce'

import NcModal from '@nextcloud/vue/components/NcModal'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import FileAlertOutlineIcon from 'vue-material-design-icons/FileAlertOutline.vue'

import { fetchFolderContent } from '../services/dav.ts'
import { getHandlerForFile } from '../helpers/handlerHelper.ts'
import { getHandlers } from '../api_package/index.ts'
import { logger } from '../services/logger.ts'

let resizeObserver = null as ResizeObserver | null
const modal = useTemplateRef('modal')
const height = ref(0)
const width = ref(0)

// State
const loading = ref(true)
const errorString = ref<string | null>(null)

// Abilities
const canEdit = ref(true)
const canSwipe = ref(true)
const editing = ref(false)
const lightBackdrop = ref(false)

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

const open: ViewerAPI['open'] = async (files, file, options, handlerId) => {
	logger.debug('Opening files', { files, file, options, handlerId})
	loading.value = true
	
	// Filter out any non-file files
	files = files.filter(n => n.type === FileType.File)

	// Ensure we have at least one file to open
	if (files.length === 0 && !file) {
		logger.error('No files provided to open')
		errorString.value = t('viewer', 'No files were provided to open.')
		return
	}

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	// Slight adjustment: if there is a mismatch between
	// the provided file and the list of files
	if (!file) {
		file = files[0]
	} else if (!files.includes(file)) {
		files = [file, ...files]
	}

	// Last check, we need to have something to open
	if (!file) {
		logger.error('No file provided to open')
		errorString.value = t('viewer', 'No files were provided to open.')
		return
	}

	const handler = handlerId ? getHandlers().get(handlerId) : getHandlerForFile(file)
	if (!handler) {
		logger.error('No handler found for the given file', { file, files })
		errorString.value = t('viewer', 'There was no plugin available to open this file.')
		return
	}

	currentHandler.value = handler
	currentFile.value = file
	currentOptions.value = options ?? {} as ViewerOptions
	currentFileList.value = files

	onOpen()
}

const openFolder: ViewerAPI['openFolder'] = async (folder, file, options, handlerId) => {
	logger.debug('Opening folder', { folder, file, options, handlerId })
	loading.value = true

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
		const files = await fetchFolderContent(folder)
		return open(files, file, options, handlerId)
	} catch (error) {
		logger.error('Failed to fetch folder contents', { folder, error })
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}
}

const compare: ViewerAPI['compare'] = async (file1, file2, handlerId) => {
	logger.debug('Comparing files', { file1, file2, handlerId })
	loading.value = true

	if (handlerId && !getHandlers().has(handlerId)) {
		logger.error('There is no handler matching the given handler ID')
		errorString.value = t('viewer', 'We were not able to open the file.')
		return
	}

	onOpen()
}

function onOpen() {
	// Determine if we should use a light backdrop
	const backgroundInvertIfDark = getComputedStyle(document.documentElement).getPropertyValue('--background-invert-if-dark')
	const defaultThemeIsLight =  backgroundInvertIfDark.trim() !== 'invert(100%)'
	const theme = currentHandler.value?.theme ?? 'default'
	lightBackdrop.value = theme === 'light' || (theme === 'default' && defaultThemeIsLight)
}

function onLoad() {
	loading.value = false
	errorString.value = null
}

function onError(error: Error) {
	logger.error('Error while loading file in viewer', { error })
	loading.value = false
	errorString.value = error.message || t('viewer', 'An unknown error occurred while loading the file.')
}

function close() {
	currentFile.value = undefined
	currentFileList.value = []
	currentHandler.value = undefined
	currentOptions.value = {} as ViewerOptions
	errorString.value = null
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

function onViewerResize() {
	const modalContainer = modal.value?.$el?.querySelector('.modal-container')
	height.value = modalContainer?.clientHeight || 0
	width.value = modalContainer?.clientWidth || 0
	logger.debug('Screen resized, updating viewer dimensions', { height: height.value, width: width.value })
}

// Listen to Viewer opening to update dimensions
watch(currentFile, (newFile, oldFile) => {
	if (newFile && !oldFile) {
		onViewerResize()
	}
})

onMounted(() => {
	resizeObserver = new ResizeObserver(debounce(() => {
		onViewerResize()
	}, 100))

	// Observe viewer size changes
	resizeObserver.observe(modal.value.$el as HTMLElement)
	logger.debug('Resize observer initialized for viewer')
})

defineExpose<ViewerAPI>({
	open,
	openFolder,
	compare,
})
</script>
<style scoped lang="scss">
.viewer__modal {
	:deep(.modal-container__content) {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:deep(.modal-container) {
		top: var(--header-height) !important;
		bottom: var(--header-height) !important;
		height: auto !important;
		background-color: transparent !important;
		box-shadow: none !important;
	}
}
</style>