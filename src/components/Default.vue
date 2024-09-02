<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-FileCopyrightText: 2024 STRATO AG
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="default_container">
		<img :src="mimeIcon" alt="mimetype-icon">
		<span class="title">
			{{ basename }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'Default',

	props: {
		basename: {
			type: String,
			default: '',
		},
		mime: {
			type: String,
			default: '',
		},
	},

	computed: {
		mimeIcon() {
			return OC.MimeType.getIconUrl(this.mime);
		}
	},

	mounted() {
		this.doneLoading();
	},
}
</script>

<style scoped lang="scss">
.default_container {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	flex-direction: column;
}

img {
	align-self: center;
	justify-self: center;
	margin-bottom: 16px;
	width: 100%;
	height: 10em;
}

.title {
	font-weight: bold;
	font-size: 1.4em;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
