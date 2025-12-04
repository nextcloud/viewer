<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div>
		Hello
	</div>
</template>

<script setup lang="ts">
defineProps<{
	file: File,
	files: File[],
	height: number,
	width: number,
}>()

const emit = defineEmits<{
	error: [Error],
	load: [],
}>()

setTimeout(() => {
  // Simulate some loading process
  emit('load')
}, 5000)
</script>