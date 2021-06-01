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
use OCP\AppFramework\Controller;
use OCP\L10N\IFactory;

use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IUserSession;

use OCA\Viewer\AppInfo\Application;

class VideoController extends Controller {

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

	// I copied the annotation below without understanding it... is it useful?
	/**
	 * @NoAdminRequired
	 */
	public function getTracks($videoPath): DataResponse  {
		// $videoPath is the path to the main video file, eg: 'mypath/movie.mkv'
		// Return an array of found tracks associated with the main video.
		// Each track is an object:
		//   - basename  /* basename of the track */
		//   - language  /* language for the track */
		//   - locale    /* (usuallu) 2-letter code for the language */
		//
		$video = $this->rootFolder
			->getUserFolder($this->userSession->getUser()->getUID())
			->get($videoPath);
		$rootName = pathinfo($video->getFileInfo()->getPath())['filename'];
		$rootLen = strlen($rootName);
		// eg: $rootName is 'movie', $rooLen is 5
		$files = $video->getParent()->getDirectoryListing();
		// $files if the array of files within the same directory
		$res = [];
		foreach ($files as $file) {
			$path = $file->getFileInfo()->getPath();
			// eg: $path is 'mypath/.movie.en.vtt'
			$baseName = pathinfo($path)['basename'];
			$rootPos = strpos($baseName, $rootName);
			// eg: $basename is '.movie.en.vtt', $rootPos is 1
			if (rootPos == 0 || (rootPos == 1 && $baseName[0] == '.')) {
				$extension = substr($baseName, $rootPos + $rootLen);
				// eg: $extension is '.en.vtt'
				$pattern = "/^[.]([^.]+)[.]vtt$/";
				$locales = $this->l10nFactory->findAvailableLocales();
				if (preg_match($pattern, $extension)) {
					$locale = preg_replace($pattern, "$1", $extension);
					$key = array_search($locale, array_column($locales, 'code'));
					$language = $key ? $locales[$key]['name'] : $locale;
					array_push($res, [
						basename => $baseName,
						language => $language, // eg: 'English'
						locale => $locale // eg: 'en'
					]);
				}
			}
		}
		$response = new DataResponse($res);
		return $response;
	}
}