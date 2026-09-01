/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { beforeEach, vi } from 'vitest'

// Ambient Nextcloud globals referenced by some components without importing them.
// The @nextcloud/l10n `t`/`n` used through imports resolve to the real package;
// these cover the bare `window`/global references.
type NcGlobal = typeof globalThis & {
	t: (app: string, text: string) => string
	n: (app: string, singular: string, plural: string, count: number) => string
	OC: Record<string, unknown>
	OCA: Record<string, unknown>
	OCP: Record<string, unknown>
}

const g = globalThis as NcGlobal
g.t = (_app: string, text: string) => text
g.n = (_app: string, singular: string, plural: string, count: number) => (count === 1 ? singular : plural)
g.OC = {}
g.OCA = { Files: {} }
g.OCP = {}

// Reset the viewer handler registry between tests so registrations never leak,
// and clear mock call history (shared manual mocks keep their implementation).
beforeEach(() => {
	vi.clearAllMocks()
	// @ts-expect-error test-only reset of the global handler map
	window._oca_viewer_handlers = new Map()
	// @ts-expect-error test-only reset of the global viewer instance
	window._oca_viewer_service = undefined
})
