<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div id="emptycontent">
		<div class="icon-error" />
		<h2>
			<slot>{{ t('viewer', 'Error loading {name}', { name: escapeHtml(name) }) }}</slot>
		</h2>
	</div>
</template>

<script>
import { escapeHtml } from '../utils/escapeHtml.js'

export default {
	name: 'Error',

	props: {
		name: {
			type: String,
			default: '',
		},
	},

	methods: {
		escapeHtml,
	},
}
</script>

<style scoped>
#emptycontent {
	margin: 0;
	padding: 10% 5%;
	background-color: var(--color-main-background);
}
</style>
