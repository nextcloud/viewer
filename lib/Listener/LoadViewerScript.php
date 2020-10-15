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

use OCA\Viewer\AppInfo\Application;
use OCA\Viewer\Event\LoadViewer;
use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCP\EventDispatcher\Event;
use OCP\AppFramework\Services\IInitialState;
use OCP\IUserSession;
use OCP\EventDispatcher\IEventListener;
use OCP\IConfig;
use OCP\Util;

class LoadViewerScript implements IEventListener {
		
	/** @var IInitialState */
	private $initialStateService;

	/** @var IUserSession */
	private $userSession;

	/** @var IConfig */
	private $config;

	public function __construct(IInitialState $initialStateService,
								IUserSession $userSession,
								IConfig $config) {
		$this->initialStateService = $initialStateService;
		$this->userSession = $userSession;
		$this->config = $config;
	}

	public function handle(Event $event): void {
		if (!($event instanceof LoadViewer || $event instanceof LoadAdditionalScriptsEvent)) {
			return;
		}

		$fileSorting = 'name';
		$fileSortingDirection = 'asc';

		$user = $this->userSession->getUser();
		if ($user !== null) {
			$fileSorting = $this->config->getUserValue($user->getUID(), 'files', 'file_sorting', 'name');
			$fileSortingDirection = $this->config->getUserValue($user->getUID(), 'files', 'file_sorting_direction', 'asc');
		}

		$this->initialStateService->provideInitialState('file-sorting', $fileSorting);
		$this->initialStateService->provideInitialState('file-sorting-direction', $fileSortingDirection);

		Util::addScript(Application::APP_ID, 'viewer-main');
	}
}
