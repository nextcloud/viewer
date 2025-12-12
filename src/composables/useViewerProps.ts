/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { ViewerProps } from '../api_package/viewer.ts'

import { computed, ref, watch } from 'vue'

/**
 * Composable to extract common viewer props.
 *
 * @param props The viewer props
 */
export function useViewerProps(props: ViewerProps) {
	const filename = computed(() => props.file.basename)

	// Src is not a computed as we want to be able to change it on error
	const src = ref(props.file.source)

	// Update the src when the file changes
	watch(filename, () => {
		src.value = props.file.source
	})

	return {
		filename,
		src,
	}
}
