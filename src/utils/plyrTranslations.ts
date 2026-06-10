/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { translate as t } from '@nextcloud/l10n'

/**
 * Plyr `i18n` option so the player controls and menus
 * (e.g. the settings/speed dropdown) are translated.
 *
 * Plyr ships English defaults only; passing this map makes it use the
 * Nextcloud translations instead.
 */
export const plyrTranslations: Record<string, string> = {
	restart: t('viewer', 'Restart'),
	rewind: t('viewer', 'Rewind {seektime}s'),
	play: t('viewer', 'Play'),
	pause: t('viewer', 'Pause'),
	fastForward: t('viewer', 'Forward {seektime}s'),
	seek: t('viewer', 'Seek'),
	seekLabel: t('viewer', '{currentTime} of {duration}'),
	played: t('viewer', 'Played'),
	buffered: t('viewer', 'Buffered'),
	currentTime: t('viewer', 'Current time'),
	duration: t('viewer', 'Duration'),
	volume: t('viewer', 'Volume'),
	mute: t('viewer', 'Mute'),
	unmute: t('viewer', 'Unmute'),
	enableCaptions: t('viewer', 'Enable captions'),
	disableCaptions: t('viewer', 'Disable captions'),
	download: t('viewer', 'Download'),
	enterFullscreen: t('viewer', 'Enter fullscreen'),
	exitFullscreen: t('viewer', 'Exit fullscreen'),
	frameTitle: t('viewer', 'Player for {title}'),
	captions: t('viewer', 'Captions'),
	settings: t('viewer', 'Settings'),
	pip: t('viewer', 'PIP'),
	menuBack: t('viewer', 'Go back to previous menu'),
	speed: t('viewer', 'Speed'),
	normal: t('viewer', 'Normal'),
	quality: t('viewer', 'Quality'),
	loop: t('viewer', 'Loop'),
	start: t('viewer', 'Start'),
	end: t('viewer', 'End'),
	all: t('viewer', 'All'),
	reset: t('viewer', 'Reset'),
	disabled: t('viewer', 'Disabled'),
	enabled: t('viewer', 'Enabled'),
	advertisement: t('viewer', 'Ad'),
}
