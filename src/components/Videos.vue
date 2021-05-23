<!--
 - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @author John Molakvoæ <skjnldsv@protonmail.com>
 -
 - @license GNU AGPL version 3 or any later version
 -
 - This program is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as
 - published by the Free Software Foundation, either version 3 of the
 - License, or (at your option) any later version.
 -
 - This program is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 - GNU Affero General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with this program. If not, see <http://www.gnu.org/licenses/>.
 -
 -->

<template>
	<!-- Plyr currently replaces the parent. Wrapping to prevent this
	https://github.com/redxtech/vue-plyr/issues/259 -->
	<div v-if="davPath">
		<VuePlyr
			ref="plyr"
			:options="options"
			:style="{
				height: height + 'px',
				width: width + 'px'
			}">
			<video
				ref="video"
				:autoplay="active"
				:playsinline="true"
				:poster="livePhotoPath"
				:src="davPath"
				preload="metadata"
				@ended="donePlaying"
				@canplay="doneLoading"
				@loadedmetadata="onLoadedMetadata">

				<track v-for="track in tracks"
					:key="track"
					:src="track.src"
					:label="track.label"
					kind="captions"
					:srclang="track.lang">

				<!-- Omitting `type` on purpose because most of the
					browsers auto detect the appropriate codec.
					Having it set force the browser to comply to
					the provided mime instead of detecting a potential
					compatibility. -->

				{{ t('viewer', 'Your browser does not support videos.') }}
			</video>
		</VuePlyr>
	</div>
</template>

<script>
import Vue from 'vue'
import VuePlyr from '@skjnldsv/vue-plyr'
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'
import { extractFilePaths } from '../utils/fileUtils'
import getFileList from '../services/FileList'

const liveExt = ['jpg', 'jpeg', 'png']
const liveExtRegex = new RegExp(`\\.(${liveExt.join('|')})$`, 'i')

Vue.use(VuePlyr)

export default {
	name: 'Videos',

	computed: {
		livePhoto() {
			return this.fileList.find(file => {
				// if same filename and extension is allowed
				return file.filename !== this.filename
					&& file.basename.startsWith(this.name)
					&& liveExtRegex.test(file.basename)
			})
		},
		livePhotoPath() {
			return this.livePhoto && this.getPreviewIfAny(this.livePhoto)
		},
		player() {
			return this.$refs.plyr.player
		},
		options() {
			this.fetchTracks()
			return {
				autoplay: this.active === true,
				captions: { active: false, language: 'auto', update: true },
				controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen'],
				loadSprite: false,
			}
		},
	},

	watch: {
		active(val, old) {
			// the item was hidden before and is now the current view
			if (val === true && old === false) {
				this.player.play()

			// the item was playing before and is now hidden
			} else if (val === false && old === true) {
				this.player.pause()
			}
		},
	},

	methods: {
		// Updates the dimensions of the modal
		updateVideoSize() {
			this.naturalHeight = this.$refs.video && this.$refs.video.videoHeight
			this.naturalWidth = this.$refs.video && this.$refs.video.videoWidth
			this.updateHeightWidth()
		},

		donePlaying() {
			// reset and show poster after play
			this.$refs.video.autoplay = false
			this.$refs.video.load()
		},

		onLoadedMetadata() {
			this.updateVideoSize()
		},

		fetchTracks() {
			const dirPath = extractFilePaths(this.filename)[0]
			getFileList(dirPath).then(folder => {
				// ISO code for languages
				// See https://www.loc.gov/standards/iso639-2/php/code_list.php
				const languages = {
					aa: 'Afar',
					ab: 'Abkhazian',
					ae: 'Avestan',
					af: 'Afrikaans',
					ak: 'Akan',
					am: 'Amharic',
					an: 'Aragonese',
					ar: 'Arabic',
					as: 'Assamese',
					av: 'Avaric',
					ay: 'Aymara',
					az: 'Azerbaijani',
					ba: 'Bashkir',
					be: 'Belarusian',
					bg: 'Bulgarian',
					bh: 'Bihari languages',
					bi: 'Bislama',
					bm: 'Bambara',
					bn: 'Bengali',
					bo: 'Tibetan',
					br: 'Breton',
					bs: 'Bosnian',
					ca: 'Catalan',
					ce: 'Chechen',
					ch: 'Chamorro',
					co: 'Corsican',
					cr: 'Cree',
					cs: 'Czech',
					cu: 'Church Slavic',
					cv: 'Chuvash',
					cy: 'Welsh',
					da: 'Danish',
					de: 'German',
					dv: 'Divehi',
					dz: 'Dzongkha',
					ee: 'Ewe',
					el: 'Greek',
					en: 'English',
					eo: 'Esperanto',
					es: 'Spanish',
					et: 'Estonian',
					eu: 'Basque',
					fa: 'Persian',
					ff: 'Fulah',
					fi: 'Finnish',
					fj: 'Fijian',
					fo: 'Faroese',
					fr: 'French',
					fy: 'Western Frisian',
					ga: 'Irish',
					gd: 'Gaelic',
					gl: 'Galician',
					gn: 'Guarani',
					gu: 'Gujarati',
					gv: 'Manx',
					ha: 'Hausa',
					he: 'Hebrew',
					hi: 'Hindi',
					ho: 'Hiri Motu',
					hr: 'Croatian',
					ht: 'Haitian',
					hu: 'Hungarian',
					hy: 'Armenian',
					hz: 'Herero',
					ia: 'Interlingua',
					id: 'Indonesian',
					ie: 'Interlingue',
					ig: 'Igbo',
					ii: 'Sichuan Yi',
					ik: 'Inupiaq',
					io: 'Ido',
					is: 'Icelandic',
					it: 'Italian',
					iu: 'Inuktitut',
					ja: 'Japanese',
					jv: 'Javanese',
					ka: 'Georgian',
					kg: 'Kongo',
					ki: 'Kikuyu',
					kj: 'Kuanyama',
					kk: 'Kazakh',
					kl: 'Kalaallisut',
					km: 'Central Khmer',
					kn: 'Kannada',
					ko: 'Korean',
					kr: 'Kanuri',
					ks: 'Kashmiri',
					ku: 'Kurdish',
					kv: 'Komi',
					kw: 'Cornish',
					ky: 'Kirghiz',
					la: 'Latin',
					lb: 'Luxembourgish',
					lg: 'Ganda',
					li: 'Limburgan',
					ln: 'Lingala',
					lo: 'Lao',
					lt: 'Lithuanian',
					lu: 'Luba-Katanga',
					lv: 'Latvian',
					mg: 'Malagasy',
					mh: 'Marshallese',
					mi: 'Maori',
					mk: 'Macedonian',
					ml: 'Malayalam',
					mn: 'Mongolian',
					mr: 'Marathi',
					ms: 'Malay',
					mt: 'Maltese',
					my: 'Burmese',
					na: 'Nauru',
					nb: 'Norwegian Bokmål',
					nd: 'Ndebele, North',
					ne: 'Nepali',
					ng: 'Ndonga',
					nl: 'Dutch',
					nn: 'Norwegian Nynorsk',
					no: 'Norwegian',
					nr: 'Ndebele, South',
					nv: 'Navajo',
					ny: 'Nyanja',
					oc: 'Occitan',
					oj: 'Ojibwa',
					om: 'Oromo',
					or: 'Oriya',
					os: 'Ossetian',
					pa: 'Panjabi',
					pi: 'Pali',
					pl: 'Polish',
					ps: 'Pushto',
					pt: 'Portuguese',
					qu: 'Quechua',
					rm: 'Romansh',
					rn: 'Rundi',
					ro: 'Romanian',
					ru: 'Russian',
					rw: 'Kinyarwanda',
					sa: 'Sanskrit',
					sc: 'Sardinian',
					sd: 'Sindhi',
					se: 'Northern Sami',
					sg: 'Sango',
					si: 'Sinhala',
					sk: 'Slovak',
					sl: 'Slovenian',
					sm: 'Samoan',
					sn: 'Shona',
					so: 'Somali',
					sq: 'Albanian',
					sr: 'Serbian',
					ss: 'Swati',
					st: 'Sotho',
					su: 'Sundanese',
					sv: 'Swedish',
					sw: 'Swahili',
					ta: 'Tamil',
					te: 'Telugu',
					tg: 'Tajik',
					th: 'Thai',
					ti: 'Tigrinya',
					tk: 'Turkmen',
					tl: 'Tagalog',
					tn: 'Tswana',
					to: 'Tonga',
					tr: 'Turkish',
					ts: 'Tsonga',
					tt: 'Tatar',
					tw: 'Twi',
					ty: 'Tahitian',
					ug: 'Uighur',
					uk: 'Ukrainian',
					ur: 'Urdu',
					uz: 'Uzbek',
					ve: 'Venda',
					vi: 'Vietnamese',
					vo: 'Volapük',
					wa: 'Walloon',
					wo: 'Wolof',
					xh: 'Xhosa',
					yi: 'Yiddish',
					yo: 'Yoruba',
					za: 'Zhuang',
					zh: 'Chinese',
					zu: 'Zulu',
				}
				const davDir = this.davPath.replace(/[^/]*$/, '')
				const videoRoot = this.basename.replace(/[.][^.]+$/, '')
				// Create caption tracks for the HTML5 player
				// E.g.: <file>.mkv: look for <file>.xx.vtt or .<file>.xx.vtt
				const capTracks = []
				for (let i = 0; i < folder.length; ++i) {
					const basename = folder[i].basename
					const index = basename.indexOf(videoRoot)
					// Consider only file... or .file...
					if (!(index === 0 || (index === 1 && basename[0] === '.'))) {
						continue
					}
					const suffix = basename.slice(videoRoot.length + index)
					// Consider only ...xx.vtt
					if (suffix.search(/^[.]..[.]vtt$/) !== 0) {
						continue
					}
					const lang = suffix.slice(1, 3)
					const language = languages[lang] || lang
					// an array of objects with src, label and lang keys
					capTracks.push({
						src: davDir + basename,
						label: language,
						srclang: lang,
					})
				}
				this.tracks = capTracks
			})
		},
	},
}
</script>

<style scoped lang="scss">
video {
	background-color: black;
	max-width: 100%;
	max-height: 100%;
	align-self: center;
	justify-self: center;
	/* over arrows in tiny screens */
	z-index: 20050;
}

::v-deep {
	.plyr:-webkit-full-screen video,
	.plyr:fullscreen video {
		height: 100% !important;
		width: 100% !important;
	}
	.plyr__progress__container {
		flex: 1 1;
	}
	.plyr__volume {
		min-width: 80px;
	}
	// plyr buttons style
	.plyr--video .plyr__progress__buffer,
	.plyr--video .plyr__control {
		&.plyr__tab-focus,
		&:hover,
		&[aria-expanded=true] {
			background-color: var(--color-primary-element);
			color: var(--color-primary-text);
			box-shadow: none !important;
		}
	}
	.plyr__control--overlaid {
		background-color: var(--color-primary-element);
	}
	// plyr volume control
	.plyr--full-ui input[type=range] {
		color: var(--color-primary-element);
	}
}
</style>
