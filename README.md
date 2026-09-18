<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
# Files viewer for Nextcloud

The viewer is no longer an app. It lives in
[`@nextcloud/viewer`](https://github.com/nextcloud-libraries/nextcloud-viewer),
a library the server bundles, so every page can open a file without an app
having to be installed and enabled first.

> [!IMPORTANT]
> Issues and pull requests belong in
> [nextcloud-libraries/nextcloud-viewer](https://github.com/nextcloud-libraries/nextcloud-viewer/issues)
> now. This repository stays for the stable branches that still ship the app,
> and for its history.

## Which one you are running

| Nextcloud | Where the viewer comes from |
| --- | --- |
| 35 and older | This app, from the app store. Maintained on the `stableXX` branches here |
| 36 and newer | The server, built on `@nextcloud/viewer`. Nothing to install |

The move into the server is [nextcloud/server#63954](https://github.com/nextcloud/server/pull/63954).

`master` is frozen and locked: it is the last state of the app as an app, kept
for its history. The `stableXX` branches keep getting fixes for as long as the
Nextcloud release they belong to is supported, and once the last of them is end
of life this repository is archived.

## If your app opens files in the viewer

`OCA.Viewer` was this app's global and goes with it, as does the `LoadViewer`
event. Your app depends on the package instead, rather than hoping the viewer
app is enabled. What each old call became is documented where it can stay
correct:

- [Package README](https://github.com/nextcloud-libraries/nextcloud-viewer#readme),
  including a table of the old API and its replacement
- [API documentation](https://nextcloud-libraries.github.io/nextcloud-viewer/)
- [`@nextcloud/viewer` on npm](https://www.npmjs.com/package/@nextcloud/viewer)

## Fixing something for an older Nextcloud

Branch from the `stableXX` branch for the release you are fixing, not from
`main`. Those branches still build and ship the app, and they take the same
[contribution rules](https://github.com/nextcloud/.github/blob/master/CONTRIBUTING.md)
as before.
