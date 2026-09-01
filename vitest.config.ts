/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [vue()],
	define: {
		// Injected by the app build; stubbed for tests that pull in the video handler.
		PLYR_ICONS: '""',
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./test/setup.ts'],
		include: ['test/**/*.spec.ts', 'src/**/*.spec.ts'],
		// Inline Nextcloud (and known CJS/CSS-shipping) deps so their `.css`
		// imports and CommonJS named exports are transformed instead of
		// externalized (which fails under node's ESM loader).
		server: {
			deps: {
				inline: [/@nextcloud\//, /cancelable-promise/, /plyr/],
			},
		},
		coverage: {
			provider: 'v8',
			include: ['src/**/*.{ts,vue}'],
			exclude: ['src/**/*.d.ts', 'src/init.ts', 'src/**/*.spec.ts'],
		},
	},
})
