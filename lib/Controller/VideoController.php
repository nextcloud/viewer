<?php
/**
 * @copyright Copyright (c) 2021 Frederic Ruget <fred@atlant.is>
 *
 * @author Frederic Ruget (douzebis) <fred@atlant.is>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Viewer\Controller;

use Exception;

use OCP\IRequest;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCSController;
use OCP\L10N\IFactory;

use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IUserSession;

use OCA\Viewer\AppInfo\Application;

class VideoController extends OCSController {

	/** @var IRootFolder */
	private $rootFolder;

	/** @var IFactory */
	private $l10nFactory;

	/** @var IUserSession */
	private $userSession;

	public function __construct(
		IRequest $request,
		IRootFolder $rootFolder,
		IFactory $l10nFactory,
		IUserSession $userSession
	){
		parent::__construct(Application::APP_ID, $request);
		$this->rootFolder = $rootFolder;
		$this->l10nFactory = $l10nFactory;
		$this->userSession = $userSession;
	}

	/**
	 * @NoAdminRequired
	 */
	public function getTracks($videoPath): DataResponse  {
		/**
		 * $videoPath is the path to the main video file, eg: 'mypath/movie.mkv'
		 * Return an array of found tracks associated with the main video.
		 * Each track is an object:
		 *   - basename  // basename of the track
		 *   - language  // language for the track
		 *   - locale    // (usually 2-letter) code for the language
		 */
		$locales = array_filter($this->l10nFactory->findAvailableLocales(),
			function($v) {
				// Discard codes that are more than 3 characters long
				// Otherwise we get a list of 1500 candidate tracks !!
				return (strlen($v['code']) <= 3);
			});
		$video = $this->rootFolder
			->getUserFolder($this->userSession->getUser()->getUID())
			->get($videoPath);
		$videoDir = $video->getParent();
		$videoName = pathinfo($video->getFileInfo()->getPath())['filename'];
		$candidateTracks = array_merge(
			// List candidateTracks of the form 'video.<locale>.vtt'
			array_map(function ($locale) use ($videoName) {
				return [
					basename => $videoName . '.' . $locale['code'] . '.vtt',
					language => $locale['name'],
					locale => $locale['code']
				];
			}, $locales),
			// Add candidateTracks of the form '.video.<locale>.vtt' (dotted)
			array_map(function ($locale) use ($videoName) {
				return [
					basename => '.' . $videoName . '.' . $locale['code'] . '.vtt',
					language => $locale['name'],
					locale => $locale['code']
				];
			}, $locales));
		// Keep only tracks actually available in the video folder
		$availableTracks = array_filter($candidateTracks, function($v) use ($videoDir) {
			return $videoDir->nodeExists($v['basename']);
		});
		return new DataResponse($availableTracks);
	}
}