/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineConfig, devices } from '@playwright/test'

// Defaults to the isolated test container on port 8081 started by start-server.mjs.
// Override with PLAYWRIGHT_BASE_URL to run against an existing instance.
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:8081'

export default defineConfig({
	testDir: './playwright',

	// Files run in parallel (specs isolate by createRandomUser()), but tests
	// within a file stay ordered — the stateful viewer flows depend on it, and
	// full within-file parallelism overwhelms the single shared test container.
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: 2,

	reporter: process.env.CI ? [['blob'], ['dot'], ['github']] : 'html',

	// The Cypress suite waited up to 10s for file-list rows; bump it further so
	// slower list renders / DAV responses under parallel load don't flake.
	expect: { timeout: 15000 },

	use: {
		baseURL: baseURL + '/index.php/',
		trace: 'on-first-retry',
		video: 'on-first-retry',
		// 16/9 viewport, matching the previous Cypress setup.
		viewport: { width: 1280, height: 720 },
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],

	webServer: {
		command: 'node playwright/start-server.mjs',
		// Wait for the ready log line instead of polling the URL — avoids false
		// positives where the HTTP port opens before Nextcloud finishes booting.
		wait: {
			stdout: /Nextcloud ready at/,
		},
		gracefulShutdown: {
			signal: 'SIGTERM',
			timeout: 10000,
		},
		// Reuse a container left running from a previous local run.
		// In CI the container won't exist yet, so start-server.mjs will create it.
		reuseExistingServer: !process.env.CI,
		stdout: 'pipe',
		stderr: 'pipe',
		timeout: 5 * 60 * 1000,
	},
})
