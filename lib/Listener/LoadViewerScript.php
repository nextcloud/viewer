<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2019, John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Viewer\Listener;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\Viewer\AppInfo\Application;
use OCA\Viewer\Event\LoadViewer;
use OCP\AppFramework\Services\IAppConfig;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IPreview;
use OCP\Util;

/**
 * @template-implements IEventListener<Event>
 */
class LoadViewerScript implements IEventListener {
	private IInitialState $initialStateService;
	private IPreview $previewManager;
	private IAppConfig $appConfig;

	public function __construct(
		IInitialState $initialStateService,
		IPreview $previewManager,
		IAppConfig $appConfig
	) {
		$this->initialStateService = $initialStateService;
		$this->previewManager = $previewManager;
		$this->appConfig = $appConfig;
	}

	public function handle(Event $event): void {
		if (!($event instanceof LoadViewer || $event instanceof LoadAdditionalScriptsEvent)) {
			return;
		}

		$alwaysShowViewer = $this->appConfig->getAppValue('always_show_viewer', 'no') === 'yes';

		Util::addStyle(Application::APP_ID, 'viewer-main');
		Util::addScript(Application::APP_ID, 'viewer-main', 'files');
		$this->initialStateService->provideInitialState('enabled_preview_providers', array_keys($this->previewManager->getProviders()));
		$this->initialStateService->provideInitialState("always_show_viewer", $alwaysShowViewer);
	}
}
