/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import {
	configureNextcloud,
	runExec,
	runOcc,
	startNextcloud,
	stopNextcloud,
	waitOnNextcloud,
} from '@nextcloud/e2e-test-server/docker'

// Keep the event loop alive until Playwright signals shutdown; clearing this is
// what lets the process exit naturally (no process.exit needed).
const keepAlive = setInterval(() => { /* keep the event loop alive */ }, 60000)

async function stop() {
	process.stderr.write('Stopping Nextcloud server…\n')
	clearInterval(keepAlive)
	// Only tear down the container in CI; locally we leave it running so the
	// next test run can reuse it without a slow cold start.
	if (process.env.CI) {
		await stopNextcloud()
	}
}

process.on('SIGTERM', stop)
process.on('SIGINT', stop)

const ip = await startNextcloud(process.env.BRANCH ?? 'master', undefined, { exposePort: 8081 })
await waitOnNextcloud(ip)
await configureNextcloud(['viewer'])
// Cypress ran on Electron, whose user-agent passes Nextcloud's browserslist check.
// Playwright's Chromium is recent enough too, but disable the redirect explicitly
// so a future browserslist bump can't send tests to the "unsupported browser" page.
await runOcc(['config:system:set', 'no_unsupported_browser_warning', '--value', 'true', '--type', 'boolean'])
// Avoid hitting the app store during tests.
await runOcc(['config:system:set', 'appstoreenabled', '--value', 'false', '--type', 'boolean'])
// SQLite locks up under the parallel DAV/OCS traffic the specs generate; WAL avoids it.
await runExec(['php', '-r', '$db = new SQLite3("data/owncloud.db");$db->busyTimeout(5000);$db->exec("PRAGMA journal_mode = wal;");'])
await runExec(['php', 'cron.php'])

process.stdout.write('Nextcloud ready at http://localhost:8081\n')
