/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { ViewerProps } from '../../src/api_package/viewer.ts'

import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { makeFile } from '../factories.ts'

// Resolve/keep the real network-free path: preloadMedia is the only fetch the
// media components perform, so we replace it with a deterministic fake blob URL.
vi.mock('../../src/services/mediaPreloader.ts', () => ({
	preloadMedia: vi.fn(async () => 'blob:mock-preloaded-media'),
}))

// imagePath is evaluated at module load of usePlyrPlayer (blank.mp4). Keep the
// rest of the router real; only pin the two URL helpers so tests never depend on
// the OC bootstrap globals.
vi.mock('@nextcloud/router', async (importOriginal) => ({
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports -- vitest importOriginal idiom
	...(await importOriginal<typeof import('@nextcloud/router')>()),
	imagePath: () => '/apps/viewer/img/blank.mp4',
	generateUrl: (url: string) => url,
}))

// plyr is heavy and DOM-driven; stub the class the composable references by type.
vi.mock('plyr', () => ({
	default: class PlyrStub {
		on = vi.fn()
		once = vi.fn()
		off = vi.fn()
		destroy = vi.fn()
		stop = vi.fn()
		play = vi.fn()
		pause = vi.fn()
	},
}))

// @skjnldsv/vue-plyr wraps plyr in a Vue component. Replace it with a passthrough
// that renders its default slot (so the inner <video>/<audio> still mounts) and
// exposes a `player` object so the composable's lifecycle hooks never throw.
vi.mock('@skjnldsv/vue-plyr', async () => {
	const { defineComponent, h } = await import('vue')
	return {
		default: defineComponent({
			name: 'VuePlyrStub',
			data() {
				return {
					player: {
						on: vi.fn(),
						once: vi.fn(),
						stop: vi.fn(),
						destroy: vi.fn(),
						play: vi.fn(),
					},
				}
			},
			render() {
				return h('div', { class: 'vue-plyr-stub' }, this.$slots.default?.())
			},
		}),
	}
})

import Audios from '../../src/components/Audios.vue'
import Images from '../../src/components/Images.vue'
import Videos from '../../src/components/Videos.vue'
import { preloadMedia } from '../../src/services/mediaPreloader.ts'

const preloadMediaMock = vi.mocked(preloadMedia)

/**
 * Build the full ViewerProps set with sensible defaults for a mounted media component.
 *
 * @param overrides - Props to override
 */
function makeProps(overrides: Partial<ViewerProps> = {}): ViewerProps {
	const file = overrides.file ?? makeFile()
	return {
		file,
		files: [file],
		maxHeight: 1000,
		maxWidth: 1000,
		editing: false,
		isSidebarShown: false,
		...overrides,
	}
}

/**
 * Mount Images.vue with the ImageEditor child stubbed out.
 *
 * @param overrides - Props to override
 */
function mountImages(overrides: Partial<ViewerProps> = {}) {
	return mount(Images, {
		props: makeProps(overrides),
		global: {
			stubs: { ImageEditor: true },
		},
	})
}

beforeEach(() => {
	preloadMediaMock.mockClear()
})

describe('Images.vue', () => {
	it('renders the image and not the editor when editing is false', async () => {
		const wrapper = mountImages({ editing: false })
		await flushPromises()

		expect(wrapper.find('img').exists()).toBe(true)
		expect(wrapper.find('image-editor-stub').exists()).toBe(false)
	})

	it('renders the source directly (no preview) without any network call', async () => {
		const file = makeFile({ basename: 'photo.jpg', mime: 'image/jpeg' })
		const wrapper = mountImages({ file, files: [file] })
		await flushPromises()

		expect(wrapper.find('img').attributes('src')).toBe(file.source)
		expect(preloadMediaMock).not.toHaveBeenCalled()
	})

	it('swaps to the ImageEditor and hides the image when editing becomes true', async () => {
		const wrapper = mountImages({ editing: false })
		await flushPromises()

		expect(wrapper.find('img').exists()).toBe(true)
		expect(wrapper.find('image-editor-stub').exists()).toBe(false)

		await wrapper.setProps({ editing: true })

		expect(wrapper.find('image-editor-stub').exists()).toBe(true)
		expect(wrapper.find('img').exists()).toBe(false)
	})

	it('falls back to preloadMedia on the first load error without emitting errored', async () => {
		const file = makeFile({ basename: 'broken.jpg' })
		const wrapper = mountImages({ file, files: [file] })
		await flushPromises()

		await wrapper.find('img').trigger('error')
		await flushPromises()

		// First failure: fetch the file by hand, do not surface an error yet.
		expect(preloadMediaMock).toHaveBeenCalledTimes(1)
		expect(preloadMediaMock).toHaveBeenCalledWith(file)
		expect(wrapper.emitted('errored')).toBeUndefined()
	})

	it('emits errored with an image-accurate message when the fallback also fails', async () => {
		const file = makeFile({ basename: 'broken.jpg' })
		const wrapper = mountImages({ file, files: [file] })
		await flushPromises()

		// First error puts the component into fallback mode.
		await wrapper.find('img').trigger('error')
		await flushPromises()
		expect(wrapper.emitted('errored')).toBeUndefined()

		// Remount a fresh <img> (the @error handler is `.once`) while keeping the
		// component instance — and thus the fallback flag — alive.
		await wrapper.setProps({ editing: true })
		await wrapper.setProps({ editing: false })
		await flushPromises()

		await wrapper.find('img').trigger('error')
		await flushPromises()

		const errored = wrapper.emitted('errored')
		expect(errored).toHaveLength(1)
		expect(errored![0][0]).toBeInstanceOf(Error)
		expect((errored![0][0] as Error).message).toBe('Failed to load image.')
	})
})

describe('Videos.vue (smoke)', () => {
	it('mounts and renders a <video> element', async () => {
		const file = makeFile({ basename: 'clip.mp4', mime: 'video/mp4' })
		const wrapper = mount(Videos, { props: makeProps({ file, files: [file] }) })
		await flushPromises()

		expect(wrapper.find('video').exists()).toBe(true)
		expect(wrapper.find('.vue-plyr-stub').exists()).toBe(true)
	})
})

describe('Audios.vue (smoke)', () => {
	it('mounts and renders an <audio> element', async () => {
		const file = makeFile({ basename: 'song.mp3', mime: 'audio/mpeg' })
		const wrapper = mount(Audios, { props: makeProps({ file, files: [file] }) })
		await flushPromises()

		expect(wrapper.find('audio').exists()).toBe(true)
		expect(wrapper.find('.vue-plyr-stub').exists()).toBe(true)
	})
})
