(self["webpackChunkviewer"] = self["webpackChunkviewer"] || []).push([["components"],{

/***/ "./node_modules/@nextcloud/l10n/dist/gettext.js":
/*!******************************************************!*\
  !*** ./node_modules/@nextcloud/l10n/dist/gettext.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var GetText = __webpack_require__(/*! node-gettext */ "./node_modules/node-gettext/lib/gettext.js");
__webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
__webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
__webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");

/**
 * Returns the user's locale
 */
/**
 * Returns the user's language
 */
function getLanguage() {
    return document.documentElement.lang || 'en';
}

/**
 * This module provides functionality to translate applications independent from Nextcloud
 *
 * @packageDocumentation
 * @module @nextcloud/l10n/gettext
 * @example
 * ```js
import { getGettextBuilder } from '@nextcloud/l10n/gettext'
const gt = getGettextBuilder()
            .detectLocale() // or use setLanguage()
            .addTranslation(/* ... *\/)
            .build()
gt.gettext('some string to translate')
```
 */
/**
 * @notExported
 */
class GettextBuilder {
    constructor() {
        this.translations = {};
        this.debug = false;
    }
    setLanguage(language) {
        this.locale = language;
        return this;
    }
    /** Try to detect locale from context with `en` as fallback value */
    detectLocale() {
        return this.setLanguage(getLanguage().replace('-', '_'));
    }
    addTranslation(language, data) {
        this.translations[language] = data;
        return this;
    }
    enableDebugMode() {
        this.debug = true;
        return this;
    }
    build() {
        return new GettextWrapper(this.locale || 'en', this.translations, this.debug);
    }
}
/**
 * @notExported
 */
class GettextWrapper {
    constructor(locale, data, debug) {
        this.gt = new GetText({
            debug,
            sourceLocale: 'en',
        });
        for (const key in data) {
            this.gt.addTranslations(key, 'messages', data[key]);
        }
        this.gt.setLocale(locale);
    }
    subtitudePlaceholders(translated, vars) {
        return translated.replace(/{([^{}]*)}/g, (a, b) => {
            const r = vars[b];
            if (typeof r === 'string' || typeof r === 'number') {
                return r.toString();
            }
            else {
                return a;
            }
        });
    }
    /**
     * Get translated string (singular form), optionally with placeholders
     *
     * @param original original string to translate
     * @param placeholders map of placeholder key to value
     */
    gettext(original, placeholders = {}) {
        return this.subtitudePlaceholders(this.gt.gettext(original), placeholders);
    }
    /**
     * Get translated string with plural forms
     *
     * @param singular Singular text form
     * @param plural Plural text form to be used if `count` requires it
     * @param count The number to insert into the text
     * @param placeholders optional map of placeholder key to value
     */
    ngettext(singular, plural, count, placeholders = {}) {
        return this.subtitudePlaceholders(this.gt.ngettext(singular, plural, count).replace(/%n/g, count.toString()), placeholders);
    }
}
/**
 * Create a new GettextBuilder instance
 */
function getGettextBuilder() {
    return new GettextBuilder();
}

exports.getGettextBuilder = getGettextBuilder;


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see NcActionButton.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={723:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(2734),i=n.n(o);const a={before(){this.$slots.default&&""!==this.text.trim()||(i().util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate(){this.text=this.getText()},data(){return{text:this.getText()}},computed:{isLongText(){return this.text&&this.text.trim().length>20}},methods:{getText(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},1139:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(723);const i=function(t,e){let n=t.$parent;for(;n;){if(n.$options.name===e)return n;n=n.$parent}},a={mixins:[o.Z],props:{icon:{type:String,default:""},name:{type:String,default:""},title:{type:String,default:""},closeAfterClick:{type:Boolean,default:!1},ariaLabel:{type:String,default:""},ariaHidden:{type:Boolean,default:null}},emits:["click"],computed:{isIconUrl(){try{return new URL(this.icon)}catch(t){return!1}}},methods:{onClick(t){if(this.$emit("click",t),this.closeAfterClick){const t=i(this,"NcActions");t&&t.closeMenu&&t.closeMenu(!1)}}}}},9776:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(7537),i=n.n(o),a=n(3645),r=n.n(a)()(i());r.push([t.id,".material-design-icon[data-v-38d8193f]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}li.active[data-v-38d8193f]{background-color:var(--color-background-hover);border-radius:6px;padding:0}.action--disabled[data-v-38d8193f]{pointer-events:none;opacity:.5}.action--disabled[data-v-38d8193f]:hover,.action--disabled[data-v-38d8193f]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-38d8193f]{opacity:1 !important}.action-button[data-v-38d8193f]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;box-sizing:border-box;cursor:pointer;white-space:nowrap;color:var(--color-main-text);border:0;border-radius:0;background-color:rgba(0,0,0,0);box-shadow:none;font-weight:normal;font-size:var(--default-font-size);line-height:44px}.action-button>span[data-v-38d8193f]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-38d8193f]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px;background-repeat:no-repeat}.action-button[data-v-38d8193f] .material-design-icon{width:44px;height:44px;opacity:1}.action-button[data-v-38d8193f] .material-design-icon .material-design-icon__svg{vertical-align:middle}.action-button p[data-v-38d8193f]{max-width:220px;line-height:1.6em;padding:10.8px 0;cursor:pointer;text-align:left;overflow:hidden;text-overflow:ellipsis}.action-button__longtext[data-v-38d8193f]{cursor:pointer;white-space:pre-wrap}.action-button__name[data-v-38d8193f]{font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/assets/action.scss","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCiBC,2BACC,8CAAA,CACA,iBAAA,CACA,SAAA,CAMF,mCACC,mBAAA,CACA,UCMiB,CDLjB,kFACC,cAAA,CACA,UCGgB,CDDjB,qCACC,oBAAA,CAOF,gCACC,YAAA,CACA,sBAAA,CAEA,UAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,kBCxBY,CDyBZ,qBAAA,CAEA,cAAA,CACA,kBAAA,CAEA,4BAAA,CACA,QAAA,CACA,eAAA,CACA,8BAAA,CACA,eAAA,CAEA,kBAAA,CACA,kCAAA,CACA,gBC9Ce,CDgDf,qCACC,cAAA,CACA,kBAAA,CAGD,sCACC,UCtDc,CDuDd,WCvDc,CDwDd,SCrCY,CDsCZ,+BAAA,CACA,oBCtDS,CDuDT,2BAAA,CAGD,sDACC,UC/Dc,CDgEd,WChEc,CDiEd,SC9CY,CDgDZ,iFACC,qBAAA,CAKF,kCACC,eAAA,CACA,iBAAA,CAGA,gBAAA,CAEA,cAAA,CACA,eAAA,CAGA,eAAA,CACA,sBAAA,CAGD,0CACC,cAAA,CAEA,oBAAA,CAGD,sCACC,gBAAA,CACA,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,oBAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n * @author Marco Ambrosini <marcoambrosini@icloud.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n@mixin action-active {\n\tli {\n\t\t&.active {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n\n@mixin action--disabled {\n\t.action--disabled {\n\t\tpointer-events: none;\n\t\topacity: $opacity_disabled;\n\t\t&:hover, &:focus {\n\t\t\tcursor: default;\n\t\t\topacity: $opacity_disabled;\n\t\t}\n\t\t& * {\n\t\t\topacity: 1 !important;\n\t\t}\n\t}\n}\n\n\n@mixin action-item($name) {\n\t.action-#{$name} {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tpadding-right: $icon-margin;\n\t\tbox-sizing: border-box; // otherwise router-link overflows in Firefox\n\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\n\t\tcolor: var(--color-main-text);\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tbox-shadow: none;\n\n\t\tfont-weight: normal;\n\t\tfont-size: var(--default-font-size);\n\t\tline-height: $clickable-area;\n\n\t\t& > span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t&__icon {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\t\t\tbackground-position: $icon-margin center;\n\t\t\tbackground-size: $icon-size;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\n\t\t&:deep(.material-design-icon) {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\n\t\t\t.material-design-icon__svg {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t}\n\n\t\t// long text area\n\t\tp {\n\t\t\tmax-width: 220px;\n\t\t\tline-height: 1.6em;\n\n\t\t\t// 14px are currently 1em line-height. Mixing units as '44px - 1.6em' does not work.\n\t\t\tpadding: #{math.div($clickable-area - 1.6 * 14px, 2)} 0;\n\n\t\t\tcursor: pointer;\n\t\t\ttext-align: left;\n\n\t\t\t// in case there are no spaces like long email addresses\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__longtext {\n\t\t\tcursor: pointer;\n\t\t\t// allow the use of `\\n`\n\t\t\twhite-space: pre-wrap;\n\t\t}\n\n\t\t&__name {\n\t\t\tfont-weight: bold;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\tmax-width: 100%;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(i," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},r=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var f=i(A,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function i(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=o(t=t||[],i=i||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var s=n(a[r]);e[s].references--}for(var c=o(t,i),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},4216:()=>{},1900:(t,e,n)=>{"use strict";function o(t,e,n,o,i,a,r,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>o})},2734:t=>{"use strict";t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>x});const t={name:"NcActionButton",mixins:[n(1139).Z],props:{disabled:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null}},computed:{isFocusable(){return!this.disabled}}};var e=n(3379),i=n.n(e),a=n(7795),r=n.n(a),s=n(569),c=n.n(s),l=n(3565),d=n.n(l),u=n(9216),p=n.n(u),A=n(4589),f=n.n(A),h=n(9776),C={};C.styleTagTransform=f(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=p();i()(h.Z,C);h.Z&&h.Z.locals&&h.Z.locals;var g=n(1900),m=n(4216),v=n.n(m),b=(0,g.Z)(t,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"action",class:{"action--disabled":t.disabled},attrs:{role:"presentation"}},[e("button",{staticClass:"action-button",class:{focusable:t.isFocusable},attrs:{"aria-label":t.ariaLabel,title:t.title,role:"menuitem",type:"button"},on:{click:t.onClick}},[t._t("icon",(function(){return[e("span",{staticClass:"action-button__icon",class:[t.isIconUrl?"action-button__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url(".concat(t.icon,")"):null},attrs:{"aria-hidden":t.ariaHidden}})]})),t._v(" "),t.name?e("p",[e("strong",{staticClass:"action-button__name"},[t._v("\n\t\t\t\t"+t._s(t.name)+"\n\t\t\t")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?e("p",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}}):e("span",{staticClass:"action-button__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])}),[],!1,null,"38d8193f",null);"function"==typeof v()&&v()(b);const x=b.exports})(),o})()));
//# sourceMappingURL=NcActionButton.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcActionLink.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcActionLink.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see NcActionLink.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={723:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(2734),i=n.n(o);const r={before(){this.$slots.default&&""!==this.text.trim()||(i().util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate(){this.text=this.getText()},data(){return{text:this.getText()}},computed:{isLongText(){return this.text&&this.text.trim().length>20}},methods:{getText(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},1139:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(723);const i=function(t,e){let n=t.$parent;for(;n;){if(n.$options.name===e)return n;n=n.$parent}},r={mixins:[o.Z],props:{icon:{type:String,default:""},name:{type:String,default:""},title:{type:String,default:""},closeAfterClick:{type:Boolean,default:!1},ariaLabel:{type:String,default:""},ariaHidden:{type:Boolean,default:null}},emits:["click"],computed:{isIconUrl(){try{return new URL(this.icon)}catch(t){return!1}}},methods:{onClick(t){if(this.$emit("click",t),this.closeAfterClick){const t=i(this,"NcActions");t&&t.closeMenu&&t.closeMenu(!1)}}}}},3490:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(7537),i=n.n(o),r=n(3645),a=n.n(r)()(i());a.push([t.id,".material-design-icon[data-v-63ee0e66]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}li.active[data-v-63ee0e66]{background-color:var(--color-background-hover);border-radius:6px;padding:0}.action-link[data-v-63ee0e66]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;box-sizing:border-box;cursor:pointer;white-space:nowrap;color:var(--color-main-text);border:0;border-radius:0;background-color:rgba(0,0,0,0);box-shadow:none;font-weight:normal;font-size:var(--default-font-size);line-height:44px}.action-link>span[data-v-63ee0e66]{cursor:pointer;white-space:nowrap}.action-link__icon[data-v-63ee0e66]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px;background-repeat:no-repeat}.action-link[data-v-63ee0e66] .material-design-icon{width:44px;height:44px;opacity:1}.action-link[data-v-63ee0e66] .material-design-icon .material-design-icon__svg{vertical-align:middle}.action-link p[data-v-63ee0e66]{max-width:220px;line-height:1.6em;padding:10.8px 0;cursor:pointer;text-align:left;overflow:hidden;text-overflow:ellipsis}.action-link__longtext[data-v-63ee0e66]{cursor:pointer;white-space:pre-wrap}.action-link__name[data-v-63ee0e66]{font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/assets/action.scss","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCiBC,2BACC,8CAAA,CACA,iBAAA,CACA,SAAA,CAqBF,8BACC,YAAA,CACA,sBAAA,CAEA,UAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,kBCxBY,CDyBZ,qBAAA,CAEA,cAAA,CACA,kBAAA,CAEA,4BAAA,CACA,QAAA,CACA,eAAA,CACA,8BAAA,CACA,eAAA,CAEA,kBAAA,CACA,kCAAA,CACA,gBC9Ce,CDgDf,mCACC,cAAA,CACA,kBAAA,CAGD,oCACC,UCtDc,CDuDd,WCvDc,CDwDd,SCrCY,CDsCZ,+BAAA,CACA,oBCtDS,CDuDT,2BAAA,CAGD,oDACC,UC/Dc,CDgEd,WChEc,CDiEd,SC9CY,CDgDZ,+EACC,qBAAA,CAKF,gCACC,eAAA,CACA,iBAAA,CAGA,gBAAA,CAEA,cAAA,CACA,eAAA,CAGA,eAAA,CACA,sBAAA,CAGD,wCACC,cAAA,CAEA,oBAAA,CAGD,oCACC,gBAAA,CACA,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,oBAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n * @author Marco Ambrosini <marcoambrosini@icloud.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n@mixin action-active {\n\tli {\n\t\t&.active {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n\n@mixin action--disabled {\n\t.action--disabled {\n\t\tpointer-events: none;\n\t\topacity: $opacity_disabled;\n\t\t&:hover, &:focus {\n\t\t\tcursor: default;\n\t\t\topacity: $opacity_disabled;\n\t\t}\n\t\t& * {\n\t\t\topacity: 1 !important;\n\t\t}\n\t}\n}\n\n\n@mixin action-item($name) {\n\t.action-#{$name} {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tpadding-right: $icon-margin;\n\t\tbox-sizing: border-box; // otherwise router-link overflows in Firefox\n\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\n\t\tcolor: var(--color-main-text);\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tbox-shadow: none;\n\n\t\tfont-weight: normal;\n\t\tfont-size: var(--default-font-size);\n\t\tline-height: $clickable-area;\n\n\t\t& > span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t&__icon {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\t\t\tbackground-position: $icon-margin center;\n\t\t\tbackground-size: $icon-size;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\n\t\t&:deep(.material-design-icon) {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\n\t\t\t.material-design-icon__svg {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t}\n\n\t\t// long text area\n\t\tp {\n\t\t\tmax-width: 220px;\n\t\t\tline-height: 1.6em;\n\n\t\t\t// 14px are currently 1em line-height. Mixing units as '44px - 1.6em' does not work.\n\t\t\tpadding: #{math.div($clickable-area - 1.6 * 14px, 2)} 0;\n\n\t\t\tcursor: pointer;\n\t\t\ttext-align: left;\n\n\t\t\t// in case there are no spaces like long email addresses\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__longtext {\n\t\t\tcursor: pointer;\n\t\t\t// allow the use of `\\n`\n\t\t\twhite-space: pre-wrap;\n\t\t}\n\n\t\t&__name {\n\t\t\tfont-weight: bold;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\tmax-width: 100%;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var f=i(A,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var c=o(t,i),l=0;l<r.length;l++){var d=n(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},9158:()=>{},1900:(t,e,n)=>{"use strict";function o(t,e,n,o,i,r,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>o})},2734:t=>{"use strict";t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>x});const t={name:"NcActionLink",mixins:[n(1139).Z],props:{href:{type:String,default:"#",required:!0,validator:t=>{try{return new URL(t)}catch(e){return t.startsWith("#")||t.startsWith("/")}}},download:{type:String,default:null},target:{type:String,default:"_self",validator:t=>t&&(!t.startsWith("_")||["_blank","_self","_parent","_top"].indexOf(t)>-1)},title:{type:String,default:null},ariaHidden:{type:Boolean,default:null}}};var e=n(3379),i=n.n(e),r=n(7795),a=n.n(r),s=n(569),c=n.n(s),l=n(3565),d=n.n(l),u=n(9216),p=n.n(u),A=n(4589),f=n.n(A),h=n(3490),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p();i()(h.Z,g);h.Z&&h.Z.locals&&h.Z.locals;var C=n(1900),m=n(9158),v=n.n(m),b=(0,C.Z)(t,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"action"},[e("a",{staticClass:"action-link focusable",attrs:{download:t.download,href:t.href,"aria-label":t.ariaLabel,target:t.target,title:t.title,rel:"nofollow noreferrer noopener"},on:{click:t.onClick}},[t._t("icon",(function(){return[e("span",{staticClass:"action-link__icon",class:[t.isIconUrl?"action-link__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url(".concat(t.icon,")"):null},attrs:{"aria-hidden":t.ariaHidden}})]})),t._v(" "),t.name?e("p",[e("strong",{staticClass:"action-link__name"},[t._v("\n\t\t\t\t"+t._s(t.name)+"\n\t\t\t")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"action-link__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?e("p",{staticClass:"action-link__longtext",domProps:{textContent:t._s(t.text)}}):e("span",{staticClass:"action-link__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])}),[],!1,null,"63ee0e66",null);"function"==typeof v()&&v()(b);const x=b.exports})(),o})()));
//# sourceMappingURL=NcActionLink.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcModal.js":
/*!****************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcModal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see NcModal.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={8250:(e,t,a)=>{"use strict";a.d(t,{default:()=>_});var o=a(4462),i=a(2297),n=a(1205),r=a(932),s=a(2734),l=a.n(s),c=a(1441),d=a.n(c);const u=".focusable",p={name:"NcActions",components:{NcButton:o.default,DotsHorizontal:d(),NcPopover:i.default},props:{open:{type:Boolean,default:!1},manualOpen:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},forceName:{type:Boolean,default:!1},menuName:{type:String,default:null},primary:{type:Boolean,default:!1},type:{type:String,validator:e=>-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e),default:null},defaultIcon:{type:String,default:""},ariaLabel:{type:String,default:(0,r.t)("Actions")},ariaHidden:{type:Boolean,default:null},placement:{type:String,default:"bottom"},boundariesElement:{type:Element,default:()=>document.querySelector("body")},container:{type:[String,Object,Element,Boolean],default:"body"},disabled:{type:Boolean,default:!1},inline:{type:Number,default:0}},emits:["open","update:open","close","focus","blur"],data(){return{opened:this.open,focusIndex:0,randomId:"menu-".concat((0,n.Z)())}},computed:{triggerBtnType(){return this.type||(this.primary?"primary":this.menuName?"secondary":"tertiary")}},watch:{open(e){e!==this.opened&&(this.opened=e)}},methods:{isValidSingleAction(e){var t,a,o,i,n;const r=null!==(t=null==e||null===(a=e.componentOptions)||void 0===a||null===(o=a.Ctor)||void 0===o||null===(i=o.extendOptions)||void 0===i?void 0:i.name)&&void 0!==t?t:null==e||null===(n=e.componentOptions)||void 0===n?void 0:n.tag;return["NcActionButton","NcActionLink","NcActionRouter"].includes(r)},openMenu(e){this.opened||(this.opened=!0,this.$emit("update:open",!0),this.$emit("open"))},closeMenu(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.opened&&(this.opened=!1,this.$refs.popover.clearFocusTrap({returnFocus:e}),this.$emit("update:open",!1),this.$emit("close"),this.focusIndex=0,this.$refs.menuButton.$el.focus())},onOpen(e){this.$nextTick((()=>{this.focusFirstAction(e)}))},onMouseFocusAction(e){if(document.activeElement===e.target)return;const t=e.target.closest("li");if(t){const e=t.querySelector(u);if(e){const t=[...this.$refs.menu.querySelectorAll(u)].indexOf(e);t>-1&&(this.focusIndex=t,this.focusAction())}}},onKeydown(e){(38===e.keyCode||9===e.keyCode&&e.shiftKey)&&this.focusPreviousAction(e),(40===e.keyCode||9===e.keyCode&&!e.shiftKey)&&this.focusNextAction(e),33===e.keyCode&&this.focusFirstAction(e),34===e.keyCode&&this.focusLastAction(e),27===e.keyCode&&(this.closeMenu(),e.preventDefault())},removeCurrentActive(){const e=this.$refs.menu.querySelector("li.active");e&&e.classList.remove("active")},focusAction(){const e=this.$refs.menu.querySelectorAll(u)[this.focusIndex];if(e){this.removeCurrentActive();const t=e.closest("li.action");e.focus(),t&&t.classList.add("active")}},focusPreviousAction(e){this.opened&&(0===this.focusIndex?this.closeMenu():(this.preventIfEvent(e),this.focusIndex=this.focusIndex-1),this.focusAction())},focusNextAction(e){if(this.opened){const t=this.$refs.menu.querySelectorAll(u).length-1;this.focusIndex===t?this.closeMenu():(this.preventIfEvent(e),this.focusIndex=this.focusIndex+1),this.focusAction()}},focusFirstAction(e){this.opened&&(this.preventIfEvent(e),this.focusIndex=0,this.focusAction())},focusLastAction(e){this.opened&&(this.preventIfEvent(e),this.focusIndex=this.$refs.menu.querySelectorAll(u).length-1,this.focusAction())},preventIfEvent(e){e&&(e.preventDefault(),e.stopPropagation())},onFocus(e){this.$emit("focus",e)},onBlur(e){this.$emit("blur",e)}},render(e){const t=(this.$slots.default||[]).filter((e=>{var t,a,o,i;return(null==e||null===(t=e.componentOptions)||void 0===t?void 0:t.tag)||(null==e||null===(a=e.componentOptions)||void 0===a||null===(o=a.Ctor)||void 0===o||null===(i=o.extendOptions)||void 0===i?void 0:i.name)})),a=t.every((e=>{var t,a,o,i,n,r,s,l;return"NcActionLink"===(null!==(t=null==e||null===(a=e.componentOptions)||void 0===a||null===(o=a.Ctor)||void 0===o||null===(i=o.extendOptions)||void 0===i?void 0:i.name)&&void 0!==t?t:null==e||null===(n=e.componentOptions)||void 0===n?void 0:n.tag)&&(null==e||null===(r=e.componentOptions)||void 0===r||null===(s=r.propsData)||void 0===s||null===(l=s.href)||void 0===l?void 0:l.startsWith(window.location.origin))}));let o=t.filter(this.isValidSingleAction);if(this.forceMenu&&o.length>0&&this.inline>0&&(l().util.warn("Specifying forceMenu will ignore any inline actions rendering."),o=[]),0===t.length)return;const i=t=>{var a,o,i,n,r,s,l,c,d,u,p,m,A,h,g,v,C,b,y,f,k,w;const S=(null==t||null===(a=t.data)||void 0===a||null===(o=a.scopedSlots)||void 0===o||null===(i=o.icon())||void 0===i?void 0:i[0])||e("span",{class:["icon",null==t||null===(n=t.componentOptions)||void 0===n||null===(r=n.propsData)||void 0===r?void 0:r.icon]}),x=null==t||null===(s=t.componentOptions)||void 0===s||null===(l=s.listeners)||void 0===l?void 0:l.click,z=null==t||null===(c=t.componentOptions)||void 0===c||null===(d=c.children)||void 0===d||null===(u=d[0])||void 0===u||null===(p=u.text)||void 0===p||null===(m=p.trim)||void 0===m?void 0:m.call(p),N=(null==t||null===(A=t.componentOptions)||void 0===A||null===(h=A.propsData)||void 0===h?void 0:h.ariaLabel)||z,j=this.forceName?z:"";let P=null==t||null===(g=t.componentOptions)||void 0===g||null===(v=g.propsData)||void 0===v?void 0:v.title;return this.forceName||P||(P=z),e("NcButton",{class:["action-item action-item--single",null==t||null===(C=t.data)||void 0===C?void 0:C.staticClass,null==t||null===(b=t.data)||void 0===b?void 0:b.class],attrs:{"aria-label":N,title:P},ref:null==t||null===(y=t.data)||void 0===y?void 0:y.ref,props:{type:this.type||(j?"secondary":"tertiary"),disabled:this.disabled||(null==t||null===(f=t.componentOptions)||void 0===f||null===(k=f.propsData)||void 0===k?void 0:k.disabled),ariaHidden:this.ariaHidden,...null==t||null===(w=t.componentOptions)||void 0===w?void 0:w.propsData},on:{focus:this.onFocus,blur:this.onBlur,...!!x&&{click:e=>{x&&x(e)}}}},[e("template",{slot:"icon"},[S]),j])},n=t=>{var o,i;const n=(null===(o=this.$slots.icon)||void 0===o?void 0:o[0])||(this.defaultIcon?e("span",{class:["icon",this.defaultIcon]}):e("DotsHorizontal",{props:{size:20}}));return e("NcPopover",{ref:"popover",props:{delay:0,handleResize:!0,shown:this.opened,placement:this.placement,boundary:this.boundariesElement,container:this.container,popoverBaseClass:"action-item__popper",setReturnFocus:null===(i=this.$refs.menuButton)||void 0===i?void 0:i.$el},attrs:{delay:0,handleResize:!0,shown:this.opened,placement:this.placement,boundary:this.boundariesElement,container:this.container,...this.manualOpen&&{triggers:[]},popoverBaseClass:"action-item__popper"},on:{show:this.openMenu,"after-show":this.onOpen,hide:this.closeMenu}},[e("NcButton",{class:"action-item__menutoggle",props:{type:this.triggerBtnType,disabled:this.disabled,ariaHidden:this.ariaHidden},slot:"trigger",ref:"menuButton",attrs:{"aria-haspopup":a?null:"menu","aria-label":this.ariaLabel,"aria-controls":this.opened?this.randomId:null,"aria-expanded":this.opened.toString()},on:{focus:this.onFocus,blur:this.onBlur}},[e("template",{slot:"icon"},[n]),this.menuName]),e("div",{class:{open:this.opened},attrs:{tabindex:"-1"},on:{keydown:this.onKeydown,mousemove:this.onMouseFocusAction},ref:"menu"},[e("ul",{attrs:{id:this.randomId,tabindex:"-1",role:a?null:"menu"}},[t])])])};if(1===t.length&&1===o.length&&!this.forceMenu)return i(o[0]);if(o.length>0&&this.inline>0){const a=o.slice(0,this.inline),r=t.filter((e=>!a.includes(e)));return e("div",{class:["action-items","action-item--".concat(this.triggerBtnType)]},[...a.map(i),r.length>0?e("div",{class:["action-item",{"action-item--open":this.opened}]},[n(r)]):null])}return e("div",{class:["action-item action-item--default-popover","action-item--".concat(this.triggerBtnType),{"action-item--open":this.opened}]},[n(t)])}};var m=a(3379),A=a.n(m),h=a(7795),g=a.n(h),v=a(569),C=a.n(v),b=a(3565),y=a.n(b),f=a(9216),k=a.n(f),w=a(4589),S=a.n(w),x=a(4825),z={};z.styleTagTransform=S(),z.setAttributes=y(),z.insert=C().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=k();A()(x.Z,z);x.Z&&x.Z.locals&&x.Z.locals;var N=a(4946),j={};j.styleTagTransform=S(),j.setAttributes=y(),j.insert=C().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=k();A()(N.Z,j);N.Z&&N.Z.locals&&N.Z.locals;var P=a(1900),E=a(5727),B=a.n(E),T=(0,P.Z)(p,undefined,undefined,!1,null,"29452b76",null);"function"==typeof B()&&B()(T);const _=T.exports},4462:(e,t,a)=>{"use strict";a.d(t,{default:()=>k});const o={name:"NcButton",props:{disabled:{type:Boolean,default:!1},type:{type:String,validator:e=>-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e),default:"secondary"},nativeType:{type:String,validator:e=>-1!==["submit","reset","button"].indexOf(e),default:"button"},wide:{type:Boolean,default:!1},ariaLabel:{type:String,default:null},href:{type:String,default:null},to:{type:[String,Object],default:null},exact:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null}},render(e){var t,a,o,i,n,r=this;const s=null===(t=this.$slots.default)||void 0===t||null===(a=t[0])||void 0===a||null===(o=a.text)||void 0===o||null===(i=o.trim)||void 0===i?void 0:i.call(o),l=!!s,c=null===(n=this.$slots)||void 0===n?void 0:n.icon;s||this.ariaLabel||console.warn("You need to fill either the text or the ariaLabel props in the button component.",{text:s,ariaLabel:this.ariaLabel},this);const d=function(){let{navigate:t,isActive:a,isExactActive:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(r.to||!r.href?"button":"a",{class:["button-vue",{"button-vue--icon-only":c&&!l,"button-vue--text-only":l&&!c,"button-vue--icon-and-text":c&&l,["button-vue--vue-".concat(r.type)]:r.type,"button-vue--wide":r.wide,active:a,"router-link-exact-active":o}],attrs:{"aria-label":r.ariaLabel,disabled:r.disabled,type:r.href?null:r.nativeType,role:r.href?"button":null,href:!r.to&&r.href?r.href:null,...r.$attrs},on:{...r.$listeners,click:e=>{var a,o;null===(a=r.$listeners)||void 0===a||null===(o=a.click)||void 0===o||o.call(a,e),null==t||t(e)}}},[e("span",{class:"button-vue__wrapper"},[c?e("span",{class:"button-vue__icon",attrs:{"aria-hidden":r.ariaHidden}},[r.$slots.icon]):null,l?e("span",{class:"button-vue__text"},[s]):null])])};return this.to?e("router-link",{props:{custom:!0,to:this.to,exact:this.exact},scopedSlots:{default:d}}):d()}};var i=a(3379),n=a.n(i),r=a(7795),s=a.n(r),l=a(569),c=a.n(l),d=a(3565),u=a.n(d),p=a(9216),m=a.n(p),A=a(4589),h=a.n(A),g=a(7196),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m();n()(g.Z,v);g.Z&&g.Z.locals&&g.Z.locals;var C=a(1900),b=a(2102),y=a.n(b),f=(0,C.Z)(o,undefined,undefined,!1,null,"4d05be2c",null);"function"==typeof y()&&y()(f);const k=f.exports},2297:(e,t,a)=>{"use strict";a.d(t,{default:()=>z});var o=a(9454),i=a(4505),n=a(1206);const r={name:"NcPopover",components:{Dropdown:o.Dropdown},inheritAttrs:!1,props:{popoverBaseClass:{type:String,default:""},focusTrap:{type:Boolean,default:!0},setReturnFocus:{default:void 0,type:[HTMLElement,SVGElement,String,Boolean]}},emits:["after-show","after-hide"],beforeDestroy(){this.clearFocusTrap()},methods:{async useFocusTrap(){var e,t;if(await this.$nextTick(),!this.focusTrap)return;const a=null===(e=this.$refs.popover)||void 0===e||null===(t=e.$refs.popperContent)||void 0===t?void 0:t.$el;a&&(this.$focusTrap=(0,i.createFocusTrap)(a,{escapeDeactivates:!1,allowOutsideClick:!0,setReturnFocus:this.setReturnFocus,trapStack:(0,n.L)()}),this.$focusTrap.activate())},clearFocusTrap(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t;null===(t=this.$focusTrap)||void 0===t||t.deactivate(e),this.$focusTrap=null}catch(e){console.warn(e)}},afterShow(){this.$nextTick((()=>{this.$emit("after-show"),this.useFocusTrap()}))},afterHide(){this.$emit("after-hide"),this.clearFocusTrap()}}},s=r;var l=a(3379),c=a.n(l),d=a(7795),u=a.n(d),p=a(569),m=a.n(p),A=a(3565),h=a.n(A),g=a(9216),v=a.n(g),C=a(4589),b=a.n(C),y=a(1625),f={};f.styleTagTransform=b(),f.setAttributes=h(),f.insert=m().bind(null,"head"),f.domAPI=u(),f.insertStyleElement=v();c()(y.Z,f);y.Z&&y.Z.locals&&y.Z.locals;var k=a(1900),w=a(2405),S=a.n(w),x=(0,k.Z)(s,(function(){var e=this;return(0,e._self._c)("Dropdown",e._g(e._b({ref:"popover",attrs:{distance:10,"arrow-padding":10,"no-auto-focus":!0,"popper-class":e.popoverBaseClass},on:{"apply-show":e.afterShow,"apply-hide":e.afterHide},scopedSlots:e._u([{key:"popper",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"Dropdown",e.$attrs,!1),e.$listeners),[e._t("trigger")],2)}),[],!1,null,null,null);"function"==typeof S()&&S()(x);const z=x.exports},336:(e,t,a)=>{"use strict";a.d(t,{default:()=>C});var o=a(9454),i=a(3379),n=a.n(i),r=a(7795),s=a.n(r),l=a(569),c=a.n(l),d=a(3565),u=a.n(d),p=a(9216),m=a.n(p),A=a(4589),h=a.n(A),g=a(8384),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m();n()(g.Z,v);g.Z&&g.Z.locals&&g.Z.locals;o.options.themes.tooltip.html=!1,o.options.themes.tooltip.delay={show:500,hide:200},o.options.themes.tooltip.distance=10,o.options.themes.tooltip["arrow-padding"]=3;const C=o.VTooltip},932:(e,t,a)=>{"use strict";a.d(t,{n:()=>r,t:()=>s});var o=a(7931);const i=(0,o.getGettextBuilder)().detectLocale();[{locale:"ar",translations:{"{tag} (invisible)":"{tag} (غير مرئي)","{tag} (restricted)":"{tag} (مقيد)",Actions:"الإجراءات",Activities:"النشاطات","Animals & Nature":"الحيوانات والطبيعة","Anything shared with the same group of people will show up here":"أي مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا","Avatar of {displayName}":"صورة {displayName} الرمزية","Avatar of {displayName}, {status}":"صورة {displayName} الرمزية، {status}","Cancel changes":"إلغاء التغييرات","Change title":"تغيير العنوان",Choose:"إختيار","Clear text":"مسح النص",Close:"أغلق","Close modal":"قفل الشرط","Close navigation":"إغلاق المتصفح","Close sidebar":"قفل الشريط الجانبي","Confirm changes":"تأكيد التغييرات",Custom:"مخصص","Edit item":"تعديل عنصر","Error getting related resources":"خطأ في تحصيل مصادر ذات صلة","External documentation for {title}":"الوثائق الخارجية لـ{title}",Favorite:"مفضلة",Flags:"الأعلام","Food & Drink":"الطعام والشراب","Frequently used":"كثيرا ما تستخدم",Global:"عالمي","Go back to the list":"العودة إلى القائمة","Hide password":"إخفاء كلمة السر","Message limit of {count} characters reached":"تم الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف","More items …":"عناصر أخرى ...",Next:"التالي","No emoji found":"لم يتم العثور على أي رمز تعبيري","No results":"ليس هناك أية نتيجة",Objects:"الأشياء",Open:"فتح",'Open link to "{resourceTitle}"':'فتح رابط إلى "{resourceTitle}"',"Open navigation":"فتح المتصفح","Password is secure":"كلمة السر مُؤمّنة","Pause slideshow":"إيقاف العرض مؤقتًا","People & Body":"الناس والجسم","Pick an emoji":"اختر رمزًا تعبيريًا","Please select a time zone:":"الرجاء تحديد المنطقة الزمنية:",Previous:"السابق","Related resources":"مصادر ذات صلة",Search:"بحث","Search results":"نتائج البحث","Select a tag":"اختر علامة",Settings:"الإعدادات","Settings navigation":"إعدادات المتصفح","Show password":"أعرض كلمة السر","Smileys & Emotion":"الوجوه و الرموز التعبيرية","Start slideshow":"بدء العرض",Submit:"إرسال",Symbols:"الرموز","Travel & Places":"السفر والأماكن","Type to search time zone":"اكتب للبحث عن منطقة زمنية","Unable to search the group":"تعذر البحث في المجموعة","Undo changes":"التراجع عن التغييرات","Write message, @ to mention someone, : for emoji autocompletion …":"اكتب رسالة، @ للإشارة إلى شخص ما، : للإكمال التلقائي للرموز التعبيرية ..."}},{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura","Anything shared with the same group of people will show up here":"Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancel·la els canvis","Change title":"Canviar títol",Choose:"Tria","Clear text":"Netejar text",Close:"Tanca","Close modal":"Tancar el mode","Close navigation":"Tanca la navegació","Close sidebar":"Tancar la barra lateral","Confirm changes":"Confirmeu els canvis",Custom:"Personalitzat","Edit item":"Edita l'element","Error getting related resources":"Error obtenint els recursos relacionats","Error parsing svg":"Error en l'anàlisi del svg","External documentation for {title}":"Documentació externa per a {title}",Favorite:"Preferit",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment",Global:"Global","Go back to the list":"Torna a la llista","Hide password":"Amagar contrasenya","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge","More items …":"Més artícles...",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes",Open:"Obrir",'Open link to "{resourceTitle}"':'Obrir enllaç a "{resourceTitle}"',"Open navigation":"Obre la navegació","Password is secure":"Contrasenya segura<br>","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji","Please select a time zone:":"Seleccioneu una zona horària:",Previous:"Anterior","Related resources":"Recursos relacionats",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Seleccioneu una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Show password":"Mostrar contrasenya","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Submit:"Envia",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Type to search time zone":"Escriviu per cercar la zona horària","Unable to search the group":"No es pot cercar el grup","Undo changes":"Desfés els canvis",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escriu missatge, fes servir "@" per esmentar algú, fes servir ":" per autocompletar emojis...'}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda","Anything shared with the same group of people will show up here":"Cokoli nasdíleného stejné skupině lidí se zobrazí zde","Avatar of {displayName}":"Zástupný obrázek uživatele {displayName}","Avatar of {displayName}, {status}":"Zástupný obrázek uživatele {displayName}, {status}","Cancel changes":"Zrušit změny","Change title":"Změnit nadpis",Choose:"Zvolit","Clear text":"Čitelný text",Close:"Zavřít","Close modal":"Zavřít dialogové okno","Close navigation":"Zavřít navigaci","Close sidebar":"Zavřít postranní panel","Confirm changes":"Potvrdit změny",Custom:"Uživatelsky určené","Edit item":"Upravit položku","Error getting related resources":"Chyba při získávání souvisejících prostředků","Error parsing svg":"Chyba při zpracovávání svg","External documentation for {title}":"Externí dokumentace k {title}",Favorite:"Oblíbené",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané",Global:"Globální","Go back to the list":"Jít zpět na seznam","Hide password":"Skrýt heslo","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy","More items …":"Další položky…",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty",Open:"Otevřít",'Open link to "{resourceTitle}"':"Otevřít odkaz na „{resourceTitle}“","Open navigation":"Otevřít navigaci","Password is secure":"Heslo je bezpečné","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji","Please select a time zone:":"Vyberte časovou zónu:",Previous:"Předchozí","Related resources":"Související prostředky",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Show password":"Zobrazit heslo","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Type to search time zone":"Psaním vyhledejte časovou zónu","Unable to search the group":"Nedaří se hledat skupinu","Undo changes":"Vzít změny zpět",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem „@“ (zavináč); automatické doplňování emotikonů zahájíte napsáním „:“ (dvojtečky)…"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur","Anything shared with the same group of people will show up here":"Alt der deles med samme gruppe af personer vil vises her","Avatar of {displayName}":"Avatar af {displayName}","Avatar of {displayName}, {status}":"Avatar af {displayName}, {status}","Cancel changes":"Annuller ændringer","Change title":"Ret titel",Choose:"Vælg","Clear text":"Ryd tekst",Close:"Luk","Close modal":"Luk vindue","Close navigation":"Luk navigation","Close sidebar":"Luk sidepanel","Confirm changes":"Bekræft ændringer",Custom:"Brugerdefineret","Edit item":"Rediger emne","Error getting related resources":"Kunne ikke hente tilknyttede data","Error parsing svg":"Fejl ved analysering af svg","External documentation for {title}":"Ekstern dokumentation for {title}",Favorite:"Favorit",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt",Global:"Global","Go back to the list":"Tilbage til listen","Hide password":"Skjul kodeord","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået","More items …":"Mere ...",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter",Open:"Åbn",'Open link to "{resourceTitle}"':'Åbn link til "{resourceTitle}"',"Open navigation":"Åbn navigation","Password is secure":"Kodeordet er sikkert","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji","Please select a time zone:":"Vælg venligst en tidszone:",Previous:"Forrige","Related resources":"Relaterede emner",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Show password":"Vis kodeord","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Type to search time zone":"Indtast for at søge efter tidszone","Unable to search the group":"Kan ikke søge på denne gruppe","Undo changes":"Fortryd ændringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv besked, brug "@" for at nævne nogen, brug ":" til emoji-autofuldførelse ...'}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte wählen Sie eine Zeitzone:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um Zeitzone zu suchen","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}","Cancel changes":"Änderungen verwerfen","Change title":"Titel ändern",Choose:"Auswählen","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Error getting related resources":"Fehler beim Abrufen verwandter Ressourcen","Error parsing svg":"Fehler beim Einlesen der SVG","External documentation for {title}":"Externe Dokumentation für {title}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Objekte",Open:"Öffnen",'Open link to "{resourceTitle}"':'Link zu "{resourceTitle}" öffnen',"Open navigation":"Navigation öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte eine Zeitzone auswählen:",Previous:"Vorherige","Related resources":"Verwandte Ressourcen",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um eine Zeitzone zu suchen","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση","Anything shared with the same group of people will show up here":"Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ","Avatar of {displayName}":"Άβαταρ του {displayName}","Avatar of {displayName}, {status}":"Άβαταρ του {displayName}, {status}","Cancel changes":"Ακύρωση αλλαγών","Change title":"Αλλαγή τίτλου",Choose:"Επιλογή","Clear text":"Εκκαθάριση κειμένου",Close:"Κλείσιμο","Close modal":"Βοηθητικό κλείσιμο","Close navigation":"Κλείσιμο πλοήγησης","Close sidebar":"Κλείσιμο πλευρικής μπάρας","Confirm changes":"Επιβεβαίωση αλλαγών",Custom:"Προσαρμογή","Edit item":"Επεξεργασία","Error getting related resources":"Σφάλμα λήψης σχετικών πόρων","Error parsing svg":"Σφάλμα ανάλυσης svg","External documentation for {title}":"Εξωτερική τεκμηρίωση για {title}",Favorite:"Αγαπημένα",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Global:"Καθολικό","Go back to the list":"Επιστροφή στην αρχική λίστα ","Hide password":"Απόκρυψη κωδικού πρόσβασης","Message limit of {count} characters reached":"Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος","More items …":"Περισσότερα στοιχεία …",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα",Open:"Άνοιγμα",'Open link to "{resourceTitle}"':'Άνοιγμα συνδέσμου στο "{resourceTitle}"',"Open navigation":"Άνοιγμα πλοήγησης","Password is secure":"Ο κωδικός πρόσβασης είναι ασφαλής","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji","Please select a time zone:":"Παρακαλούμε επιλέξτε μια ζώνη ώρας:",Previous:"Προηγούμενο","Related resources":"Σχετικοί πόροι",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Settings navigation":"Πλοήγηση ρυθμίσεων","Show password":"Εμφάνιση κωδικού πρόσβασης","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Submit:"Υποβολή",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Type to search time zone":"Πληκτρολογήστε για αναζήτηση ζώνης ώρας","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας","Undo changes":"Αναίρεση Αλλαγών",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Γράψτε μήνυμα, χρησιμοποιείστε "@" για να αναφέρετε κάποιον, χρησιμοποιείστε ":" για αυτόματη συμπλήρωση emoji …'}},{locale:"en_GB",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Actions",Activities:"Activities","Animals & Nature":"Animals & Nature","Anything shared with the same group of people will show up here":"Anything shared with the same group of people will show up here","Avatar of {displayName}":"Avatar of {displayName}","Avatar of {displayName}, {status}":"Avatar of {displayName}, {status}","Cancel changes":"Cancel changes","Change title":"Change title",Choose:"Choose","Clear text":"Clear text",Close:"Close","Close modal":"Close modal","Close navigation":"Close navigation","Close sidebar":"Close sidebar","Confirm changes":"Confirm changes",Custom:"Custom","Edit item":"Edit item","Error getting related resources":"Error getting related resources","Error parsing svg":"Error parsing svg","External documentation for {title}":"External documentation for {title}",Favorite:"Favourite",Flags:"Flags","Food & Drink":"Food & Drink","Frequently used":"Frequently used",Global:"Global","Go back to the list":"Go back to the list","Hide password":"Hide password","Message limit of {count} characters reached":"Message limit of {count} characters reached","More items …":"More items …",Next:"Next","No emoji found":"No emoji found","No results":"No results",Objects:"Objects",Open:"Open",'Open link to "{resourceTitle}"':'Open link to "{resourceTitle}"',"Open navigation":"Open navigation","Password is secure":"Password is secure","Pause slideshow":"Pause slideshow","People & Body":"People & Body","Pick an emoji":"Pick an emoji","Please select a time zone:":"Please select a time zone:",Previous:"Previous","Related resources":"Related resources",Search:"Search","Search results":"Search results","Select a tag":"Select a tag",Settings:"Settings","Settings navigation":"Settings navigation","Show password":"Show password","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start slideshow",Submit:"Submit",Symbols:"Symbols","Travel & Places":"Travel & Places","Type to search time zone":"Type to search time zone","Unable to search the group":"Unable to search the group","Undo changes":"Undo changes",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Write message, use "@" to mention someone, use ":" for emoji autocompletion …'}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza","Anything shared with the same group of people will show up here":"Cualquier cosa que sea compartida con el mismo grupo de personas se mostrará aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar cambios","Change title":"Cambiar título",Choose:"Elegir","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Error getting related resources":"Se encontró un error al obtener los recursos relacionados","Error parsing svg":"Error procesando svg","External documentation for {title}":"Documentacion externa de {title}",Favorite:"Favorito",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres","More items …":"Más ítems...",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos",Open:"Abrir",'Open link to "{resourceTitle}"':'Abrir enlace a "{resourceTitle}"',"Open navigation":"Abrir navegación","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji","Please select a time zone:":"Por favor elige un huso de horario:",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Show password":"Mostrar contraseña","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Type to search time zone":"Escribe para buscar un huso de horario","Unable to search the group":"No es posible buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, utilice "@" para mencionar a alguien, utilice ":" para autocompletado de emojis ...'}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Actions:"Ekintzak",Activities:"Jarduerak","Animals & Nature":"Animaliak eta Natura","Anything shared with the same group of people will show up here":"Pertsona-talde berarekin partekatutako edozer agertuko da hemen","Avatar of {displayName}":"{displayName}-(e)n irudia","Avatar of {displayName}, {status}":"{displayName} -(e)n irudia, {status}","Cancel changes":"Ezeztatu aldaketak","Change title":"Aldatu titulua",Choose:"Aukeratu","Clear text":"Garbitu testua",Close:"Itxi","Close modal":"Itxi modala","Close navigation":"Itxi nabigazioa","Close sidebar":"Itxi albo-barra","Confirm changes":"Baieztatu aldaketak",Custom:"Pertsonalizatua","Edit item":"Editatu elementua","Error getting related resources":"Errorea erlazionatutako baliabideak lortzerakoan","Error parsing svg":"Errore bat gertatu da svg-a analizatzean","External documentation for {title}":"Kanpoko dokumentazioa {title}(r)entzat",Favorite:"Gogokoa",Flags:"Banderak","Food & Drink":"Janaria eta edariak","Frequently used":"Askotan erabilia",Global:"Globala","Go back to the list":"Bueltatu zerrendara","Hide password":"Ezkutatu pasahitza","Message limit of {count} characters reached":"Mezuaren {count} karaketere-limitera heldu zara","More items …":"Elementu gehiago …",Next:"Hurrengoa","No emoji found":"Ez da emojirik aurkitu","No results":"Emaitzarik ez",Objects:"Objektuak",Open:"Ireki",'Open link to "{resourceTitle}"':'Ireki esteka: "{resourceTitle}"',"Open navigation":"Ireki nabigazioa","Password is secure":"Pasahitza segurua da","Pause slideshow":"Pausatu diaporama","People & Body":"Jendea eta gorputza","Pick an emoji":"Hautatu emoji bat","Please select a time zone:":"Mesedez hautatu ordu-zona bat:",Previous:"Aurrekoa","Related resources":"Erlazionatutako baliabideak",Search:"Bilatu","Search results":"Bilaketa emaitzak","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Settings navigation":"Nabigazio ezarpenak","Show password":"Erakutsi pasahitza","Smileys & Emotion":"Smileyak eta emozioa","Start slideshow":"Hasi diaporama",Submit:"Bidali",Symbols:"Sinboloak","Travel & Places":"Bidaiak eta lekuak","Type to search time zone":"Idatzi ordu-zona bat bilatzeko","Unable to search the group":"Ezin izan da taldea bilatu","Undo changes":"Aldaketak desegin",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Idatzi mezua, erabili "@" norbait aipatzeko, erabili ":" emojiak automatikoki osatzeko...'}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto","Avatar of {displayName}":"Käyttäjän {displayName} avatar","Avatar of {displayName}, {status}":"Käyttäjän {displayName} avatar, {status}","Cancel changes":"Peruuta muutokset",Choose:"Valitse",Close:"Sulje","Close navigation":"Sulje navigaatio","Confirm changes":"Vahvista muutokset",Custom:"Mukautettu","Edit item":"Muokkaa kohdetta","External documentation for {title}":"Ulkoinen dokumentaatio kohteelle {title}",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt",Global:"Yleinen","Go back to the list":"Siirry takaisin listaan","Message limit of {count} characters reached":"Viestin merkken enimmäisimäärä {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Open navigation":"Avaa navigaatio","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji","Please select a time zone:":"Valitse aikavyöhyke:",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt & tunteet","Start slideshow":"Aloita diaesitys",Submit:"Lähetä",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Type to search time zone":"Kirjoita etsiäksesi aikavyöhyke","Unable to search the group":"Ryhmää ei voi hakea","Undo changes":"Kumoa muutokset","Write message, @ to mention someone, : for emoji autocompletion …":"Kirjoita viesti, @ mainitaksesi käyttäjän, : emojin automaattitäydennykseen…"}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature","Anything shared with the same group of people will show up here":"Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Annuler les modifications","Change title":"Modifier le titre",Choose:"Choisir","Clear text":"Effacer le texte",Close:"Fermer","Close modal":"Fermer la fenêtre","Close navigation":"Fermer la navigation","Close sidebar":"Fermer la barre latérale","Confirm changes":"Confirmer les modifications",Custom:"Personnalisé","Edit item":"Éditer l'élément","Error getting related resources":"Erreur à la récupération des ressources liées","Error parsing svg":"Erreur d'analyse SVG","External documentation for {title}":"Documentation externe pour {title}",Favorite:"Favori",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment",Global:"Global","Go back to the list":"Retourner à la liste","Hide password":"Cacher le mot de passe","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte","More items …":"Plus d'éléments...",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets",Open:"Ouvrir",'Open link to "{resourceTitle}"':'Ouvrir le lien vers "{resourceTitle}"',"Open navigation":"Ouvrir la navigation","Password is secure":"Le mot de passe est sécurisé","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji","Please select a time zone:":"Sélectionnez un fuseau horaire : ",Previous:"Précédent","Related resources":"Ressources liées",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Show password":"Afficher le mot de passe","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Submit:"Valider",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Type to search time zone":"Saisissez les premiers lettres pour rechercher un fuseau horaire","Unable to search the group":"Impossible de chercher le groupe","Undo changes":"Annuler les changements",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Écrire un message, utiliser "@" pour mentionner une personne, ":" pour l\'autocomplétion des émojis...'}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza","Cancel changes":"Cancelar os cambios",Choose:"Escoller",Close:"Pechar","Confirm changes":"Confirma os cambios",Custom:"Personalizado","External documentation for {title}":"Documentación externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación polos axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet","Anything shared with the same group of people will show up here":"Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni","Avatar of {displayName}":"{displayName} profilképe","Avatar of {displayName}, {status}":"{displayName} profilképe, {status}","Cancel changes":"Változtatások elvetése","Change title":"Cím megváltoztatása",Choose:"Válassszon","Clear text":"Szöveg törlése",Close:"Bezárás","Close modal":"Ablak bezárása","Close navigation":"Navigáció bezárása","Close sidebar":"Oldalsáv bezárása","Confirm changes":"Változtatások megerősítése",Custom:"Egyéni","Edit item":"Elem szerkesztése","Error getting related resources":"Hiba a kapcsolódó erőforrások lekérésekor","Error parsing svg":"Hiba az SVG feldolgozásakor","External documentation for {title}":"Külső dokumentáció ehhez: {title}",Favorite:"Kedvenc",Flags:"Zászlók","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt",Global:"Globális","Go back to the list":"Ugrás vissza a listához","Hide password":"Jelszó elrejtése","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve","More items …":"További elemek...",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak",Open:"Megnyitás",'Open link to "{resourceTitle}"':"A(z) „{resourceTitle}” hivatkozásának megnyitása","Open navigation":"Navigáció megnyitása","Password is secure":"A jelszó biztonságos","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit","Please select a time zone:":"Válasszon időzónát:",Previous:"Előző","Related resources":"Kapcsolódó erőforrások",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Show password":"Jelszó megjelenítése","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Submit:"Beküldés",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Type to search time zone":"Gépeljen az időzóna kereséséhez","Unable to search the group":"A csoport nem kereshető","Undo changes":"Változtatások visszavonása",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Írjon egy üzenetet, használja a „@”-ot valaki megemlítéséhet, illetve a „:”-ot az emodzsik automatikus kiegészítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura","Anything shared with the same group of people will show up here":"Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui","Avatar of {displayName}":"Avatar di {displayName}","Avatar of {displayName}, {status}":"Avatar di {displayName}, {status}","Cancel changes":"Annulla modifiche","Change title":"Modifica il titolo",Choose:"Scegli","Clear text":"Cancella il testo",Close:"Chiudi","Close modal":"Chiudi il messaggio modale","Close navigation":"Chiudi la navigazione","Close sidebar":"Chiudi la barra laterale","Confirm changes":"Conferma modifiche",Custom:"Personalizzato","Edit item":"Modifica l'elemento","Error getting related resources":"Errore nell'ottenere risorse correlate","Error parsing svg":"Errore nell'analizzare l'svg","External documentation for {title}":"Documentazione esterna per {title}",Favorite:"Preferito",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente",Global:"Globale","Go back to the list":"Torna all'elenco","Hide password":"Nascondi la password","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto","More items …":"Più elementi ...",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti",Open:"Apri",'Open link to "{resourceTitle}"':'Apri il link a "{resourceTitle}"',"Open navigation":"Apri la navigazione","Password is secure":"La password è sicura","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji","Please select a time zone:":"Si prega di selezionare un fuso orario:",Previous:"Precedente","Related resources":"Risorse correlate",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Show password":"Mostra la password","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Type to search time zone":"Digita per cercare un fuso orario","Unable to search the group":"Impossibile cercare il gruppo","Undo changes":"Cancella i cambiamenti",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrivi un messaggio, "@" per menzionare qualcuno, ":" per il completamento automatico delle emoji ...'}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然","Anything shared with the same group of people will show up here":"同じグループで共有しているものは、全てここに表示されます","Avatar of {displayName}":"{displayName} のアバター","Avatar of {displayName}, {status}":"{displayName}, {status} のアバター","Cancel changes":"変更をキャンセル","Change title":"タイトルを変更",Choose:"選択","Clear text":"テキストをクリア",Close:"閉じる","Close modal":"モーダルを閉じる","Close navigation":"ナビゲーションを閉じる","Close sidebar":"サイドバーを閉じる","Confirm changes":"変更を承認",Custom:"カスタム","Edit item":"編集","Error getting related resources":"関連リソースの取得エラー","Error parsing svg":"svgの解析エラー","External documentation for {title}":"{title} のための添付文書",Favorite:"お気に入り",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの",Global:"全体","Go back to the list":"リストに戻る","Hide password":"パスワードを非表示","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています","More items …":"他のアイテム",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物",Open:"開く",'Open link to "{resourceTitle}"':'"{resourceTitle}"のリンクを開く',"Open navigation":"ナビゲーションを開く","Password is secure":"パスワードは保護されています","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択","Please select a time zone:":"タイムゾーンを選んで下さい：",Previous:"前","Related resources":"関連リソース",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Show password":"パスワードを表示","Smileys & Emotion":"感情表現","Start slideshow":"スライドショーを開始",Submit:"提出",Symbols:"記号","Travel & Places":"旅行と場所","Type to search time zone":"タイムゾーン検索のため入力してください","Unable to search the group":"グループを検索できません","Undo changes":"変更を取り消し",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'メッセージを記入、"@"でメンション、"："で絵文字の自動補完 ...'}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа","Avatar of {displayName}":"Аватар на {displayName}","Avatar of {displayName}, {status}":"Аватар на {displayName}, {status}","Cancel changes":"Откажи ги промените","Change title":"Промени наслов",Choose:"Избери",Close:"Затвори","Close modal":"Затвори модал","Close navigation":"Затвори навигација","Confirm changes":"Потврди ги промените",Custom:"Прилагодени","Edit item":"Уреди","External documentation for {title}":"Надворешна документација за {title}",Favorite:"Фаворити",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени",Global:"Глобално","Go back to the list":"Врати се на листата",items:"ставки","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато","More {dashboardItemType} …":"Повеќе {dashboardItemType} …",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти",Open:"Отвори","Open navigation":"Отвори навигација","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон","Please select a time zone:":"Изберете временска зона:",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Submit:"Испрати",Symbols:"Симболи","Travel & Places":"Патувања & Места","Type to search time zone":"Напишете за да пребарате временска зона","Unable to search the group":"Неможе да се принајде групата","Undo changes":"Врати ги промените","Write message, @ to mention someone, : for emoji autocompletion …":"Напиши порака, @ за да спомнете некого, : за емотинони автоатско комплетирање ..."}},{locale:"my",translations:{"{tag} (invisible)":"{tag} (ကွယ်ဝှက်ထား)","{tag} (restricted)":"{tag} (ကန့်သတ်)",Actions:"လုပ်ဆောင်ချက်များ",Activities:"ပြုလုပ်ဆောင်တာများ","Animals & Nature":"တိရစ္ဆာန်များနှင့် သဘာဝ","Avatar of {displayName}":"{displayName} ၏ ကိုယ်ပွား","Cancel changes":"ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်",Choose:"ရွေးချယ်ရန်",Close:"ပိတ်ရန်","Confirm changes":"ပြောင်းလဲမှုများ အတည်ပြုရန်",Custom:"အလိုကျချိန်ညှိမှု","External documentation for {title}":"{title} အတွက် ပြင်ပ စာရွက်စာတမ်း",Flags:"အလံများ","Food & Drink":"အစားအသောက်","Frequently used":"မကြာခဏအသုံးပြုသော",Global:"ကမ္ဘာလုံးဆိုင်ရာ","Message limit of {count} characters reached":"ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ",Next:"နောက်သို့ဆက်ရန်","No emoji found":"အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ","No results":"ရလဒ်မရှိပါ",Objects:"အရာဝတ္ထုများ","Pause slideshow":"စလိုက်ရှိုး ခေတ္တရပ်ရန်","People & Body":"လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်","Pick an emoji":"အီမိုဂျီရွေးရန်","Please select a time zone:":"ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",Previous:"ယခင်",Search:"ရှာဖွေရန်","Search results":"ရှာဖွေမှု ရလဒ်များ","Select a tag":"tag ရွေးချယ်ရန်",Settings:"ချိန်ညှိချက်များ","Settings navigation":"ချိန်ညှိချက်အညွှန်း","Smileys & Emotion":"စမိုင်လီများနှင့် အီမိုရှင်း","Start slideshow":"စလိုက်ရှိုးအား စတင်ရန်",Submit:"တင်သွင်းရန်",Symbols:"သင်္ကေတများ","Travel & Places":"ခရီးသွားလာခြင်းနှင့် နေရာများ","Type to search time zone":"ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ","Unable to search the group":"အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ","Write message, @ to mention someone …":"စာရေးသားရန်၊ တစ်စုံတစ်ဦးအား @ အသုံးပြု ရည်ညွှန်းရန်..."}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur","Anything shared with the same group of people will show up here":"Alt som er delt med den samme gruppen vil vises her","Avatar of {displayName}":"Avataren til {displayName}","Avatar of {displayName}, {status}":"{displayName}'s avatar, {status}","Cancel changes":"Avbryt endringer","Change title":"Endre tittel",Choose:"Velg","Clear text":"Fjern tekst",Close:"Lukk","Close modal":"Lukk modal","Close navigation":"Lukk navigasjon","Close sidebar":"Lukk sidepanel","Confirm changes":"Bekreft endringer",Custom:"Tilpasset","Edit item":"Rediger","Error getting related resources":"Feil ved henting av relaterte ressurser","Error parsing svg":"Feil ved parsing av svg","External documentation for {title}":"Ekstern dokumentasjon for {title}",Favorite:"Favoritt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Global:"Global","Go back to the list":"Gå tilbake til listen","Hide password":"Skjul passord","Message limit of {count} characters reached":"Karakter begrensing {count} nådd i melding","More items …":"Flere gjenstander...",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter",Open:"Åpne",'Open link to "{resourceTitle}"':'Åpne link til "{resourceTitle}"',"Open navigation":"Åpne navigasjon","Password is secure":"Passordet er sikkert","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji","Please select a time zone:":"Vennligst velg tidssone",Previous:"Forrige","Related resources":"Relaterte ressurser",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Settings navigation":"Navigasjonsinstillinger","Show password":"Vis passord","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Submit:"Send",Symbols:"Symboler","Travel & Places":"Reise og steder","Type to search time zone":"Tast for å søke etter tidssone","Unable to search the group":"Kunne ikke søke i gruppen","Undo changes":"Tilbakestill endringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv melding, bruk "@" for å nevne noen, bruk ":" for autofullføring av emoji...'}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur","Avatar of {displayName}":"Avatar van {displayName}","Avatar of {displayName}, {status}":"Avatar van {displayName}, {status}","Cancel changes":"Wijzigingen annuleren",Choose:"Kies",Close:"Sluiten","Close navigation":"Navigatie sluiten","Confirm changes":"Wijzigingen bevestigen",Custom:"Aangepast","Edit item":"Item bewerken","External documentation for {title}":"Externe documentatie voor {title}",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt",Global:"Globaal","Go back to the list":"Ga terug naar de lijst","Message limit of {count} characters reached":"Berichtlimiet van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Open navigation":"Navigatie openen","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji","Please select a time zone:":"Selecteer een tijdzone:",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Submit:"Verwerken",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Type to search time zone":"Type om de tijdzone te zoeken","Unable to search the group":"Kan niet in de groep zoeken","Undo changes":"Wijzigingen ongedaan maken","Write message, @ to mention someone, : for emoji autocompletion …":"Schrijf bericht, @ om iemand te noemen, : voor emoji auto-aanvullen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura","Anything shared with the same group of people will show up here":"Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób","Avatar of {displayName}":"Awatar {displayName}","Avatar of {displayName}, {status}":"Awatar {displayName}, {status}","Cancel changes":"Anuluj zmiany","Change title":"Zmień tytuł",Choose:"Wybierz","Clear text":"Wyczyść tekst",Close:"Zamknij","Close modal":"Zamknij modal","Close navigation":"Zamknij nawigację","Close sidebar":"Zamknij pasek boczny","Confirm changes":"Potwierdź zmiany",Custom:"Zwyczajne","Edit item":"Edytuj element","Error getting related resources":"Błąd podczas pobierania powiązanych zasobów","Error parsing svg":"Błąd podczas analizowania svg","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Favorite:"Ulubiony",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane",Global:"Globalnie","Go back to the list":"Powrót do listy","Hide password":"Ukryj hasło","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków","More items …":"Więcej pozycji…",Next:"Następny","No emoji found":"Nie znaleziono emoji","No results":"Brak wyników",Objects:"Obiekty",Open:"Otwórz",'Open link to "{resourceTitle}"':'Otwórz link do "{resourceTitle}"',"Open navigation":"Otwórz nawigację","Password is secure":"Hasło jest bezpieczne","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji","Please select a time zone:":"Wybierz strefę czasową:",Previous:"Poprzedni","Related resources":"Powiązane zasoby",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Ustawienia nawigacji","Show password":"Pokaż hasło","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Type to search time zone":"Wpisz, aby wyszukać strefę czasową","Unable to search the group":"Nie można przeszukać grupy","Undo changes":"Cofnij zmiany",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Napisz wiadomość, "@" aby o kimś wspomnieć, ":" dla autouzupełniania emoji…'}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}","Cancel changes":"Cancelar alterações","Change title":"Alterar título",Choose:"Escolher","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Error getting related resources":"Erro ao obter recursos relacionados","Error parsing svg":"Erro ao analisar svg","External documentation for {title}":"Documentação externa para {title}",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados",Global:"Global","Go back to the list":"Volte para a lista","Hide password":"Ocultar a senha","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido","More items …":"Mais itens …",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos",Open:"Aberto",'Open link to "{resourceTitle}"':'Abrir link para "{resourceTitle}"',"Open navigation":"Abrir navegação","Password is secure":"A senha é segura","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Selecione um fuso horário: ",Previous:"Anterior","Related resources":"Recursos relacionados",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não foi possível pesquisar o grupo","Undo changes":"Desfazer modificações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva mensagens, use "@" para mencionar algum, use ":" for autocompletar emoji …'}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ro",translations:{"{tag} (invisible)":"{tag} (invizibil)","{tag} (restricted)":"{tag} (restricționat)",Actions:"Acțiuni",Activities:"Activități","Animals & Nature":"Animale și natură","Anything shared with the same group of people will show up here":"Tot ceea ce este partajat cu același grup de persoane va fi afișat aici","Avatar of {displayName}":"Avatarul lui {displayName}","Avatar of {displayName}, {status}":"Avatarul lui {displayName}, {status}","Cancel changes":"Anulează modificările","Change title":"Modificați titlul",Choose:"Alegeți","Clear text":"Șterge textul",Close:"Închideți","Close modal":"Închideți modulul","Close navigation":"Închideți navigarea","Close sidebar":"Închide bara laterală","Confirm changes":"Confirmați modificările",Custom:"Personalizat","Edit item":"Editați elementul","Error getting related resources":" Eroare la returnarea resurselor legate","Error parsing svg":"Eroare de analizare a svg","External documentation for {title}":"Documentație externă pentru {title}",Favorite:"Favorit",Flags:"Marcaje","Food & Drink":"Alimente și băuturi","Frequently used":"Utilizate frecvent",Global:"Global","Go back to the list":"Întoarceți-vă la listă","Hide password":"Ascunde parola","Message limit of {count} characters reached":"Limita mesajului de {count} caractere a fost atinsă","More items …":"Mai multe articole ...",Next:"Următorul","No emoji found":"Nu s-a găsit niciun emoji","No results":"Nu există rezultate",Objects:"Obiecte",Open:"Deschideți",'Open link to "{resourceTitle}"':'Deschide legătura la "{resourceTitle}"',"Open navigation":"Deschideți navigația","Password is secure":"Parola este sigură","Pause slideshow":"Pauză prezentare de diapozitive","People & Body":"Oameni și corp","Pick an emoji":"Alege un emoji","Please select a time zone:":"Vă rugăm să selectați un fus orar:",Previous:"Anterior","Related resources":"Resurse legate",Search:"Căutare","Search results":"Rezultatele căutării","Select a tag":"Selectați o etichetă",Settings:"Setări","Settings navigation":"Navigare setări","Show password":"Arată parola","Smileys & Emotion":"Zâmbete și emoții","Start slideshow":"Începeți prezentarea de diapozitive",Submit:"Trimiteți",Symbols:"Simboluri","Travel & Places":"Călătorii și locuri","Type to search time zone":"Tastați pentru a căuta fusul orar","Unable to search the group":"Imposibilitatea de a căuta în grup","Undo changes":"Anularea modificărilor",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrie un mesaj, folosește "@" pentru a menționa pe cineva, folosește ":" pentru autocompletarea cu emoji ...'}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Actions:"Действия ",Activities:"События","Animals & Nature":"Животные и природа ","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Фотография {displayName}, {status}","Cancel changes":"Отменить изменения",Choose:"Выберите",Close:"Закрыть","Close modal":"Закрыть модальное окно","Close navigation":"Закрыть навигацию","Confirm changes":"Подтвердить изменения",Custom:"Пользовательское","Edit item":"Изменить элемент","External documentation for {title}":"Внешняя документация для {title}",Flags:"Флаги","Food & Drink":"Еда, напиток","Frequently used":"Часто используемый",Global:"Глобальный","Go back to the list":"Вернуться к списку",items:"элементов","Message limit of {count} characters reached":"Достигнуто ограничение на количество символов в {count}","More {dashboardItemType} …":"Больше {dashboardItemType} …",Next:"Следующее","No emoji found":"Эмодзи не найдено","No results":"Результаты отсуствуют",Objects:"Объекты",Open:"Открыть","Open navigation":"Открыть навигацию","Pause slideshow":"Приостановить показ слйдов","People & Body":"Люди и тело","Pick an emoji":"Выберите эмодзи","Please select a time zone:":"Пожалуйста, выберите часовой пояс:",Previous:"Предыдущее",Search:"Поиск","Search results":"Результаты поиска","Select a tag":"Выберите метку",Settings:"Параметры","Settings navigation":"Навигация по настройкам","Smileys & Emotion":"Смайлики и эмоции","Start slideshow":"Начать показ слайдов",Submit:"Утвердить",Symbols:"Символы","Travel & Places":"Путешествия и места","Type to search time zone":"Введите для поиска часового пояса","Unable to search the group":"Невозможно найти группу","Undo changes":"Отменить изменения","Write message, @ to mention someone, : for emoji autocompletion …":"Напишите сообщение, @ - чтобы упомянуть кого-то, : - для автозаполнения эмодзи …"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda","Avatar of {displayName}":"Avatar {displayName}","Avatar of {displayName}, {status}":"Avatar {displayName}, {status}","Cancel changes":"Zrušiť zmeny",Choose:"Vybrať",Close:"Zatvoriť","Close navigation":"Zavrieť navigáciu","Confirm changes":"Potvrdiť zmeny",Custom:"Zvyk","Edit item":"Upraviť položku","External documentation for {title}":"Externá dokumentácia pre {title}",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Global:"Globálne","Go back to the list":"Naspäť na zoznam","Message limit of {count} characters reached":"Limit správy na {count} znakov dosiahnutý",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Open navigation":"Otvoriť navigáciu","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži","Please select a time zone:":"Prosím vyberte časovú zónu:",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Settings navigation":"Navigácia v nastaveniach","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Submit:"Odoslať",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Type to search time zone":"Začníte písať pre vyhľadávanie časovej zóny","Unable to search the group":"Skupinu sa nepodarilo nájsť","Undo changes":"Vrátiť zmeny","Write message, @ to mention someone, : for emoji autocompletion …":"Napíšte správu, @ ak chcete niekoho spomenúť, : pre automatické dopĺňanie emotikonov…"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava","Avatar of {displayName}":"Podoba {displayName}","Avatar of {displayName}, {status}":"Prikazna slika {displayName}, {status}","Cancel changes":"Prekliči spremembe","Change title":"Spremeni naziv",Choose:"Izbor","Clear text":"Počisti besedilo",Close:"Zapri","Close modal":"Zapri pojavno okno","Close navigation":"Zapri krmarjenje","Close sidebar":"Zapri stransko vrstico","Confirm changes":"Potrdi spremembe",Custom:"Po meri","Edit item":"Uredi predmet","Error getting related resources":"Napaka pridobivanja povezanih virov","External documentation for {title}":"Zunanja dokumentacija za {title}",Favorite:"Priljubljeno",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe",Global:"Splošno","Go back to the list":"Vrni se na seznam","Hide password":"Skrij geslo","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.","More items …":"Več predmetov ...",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti",Open:"Odpri",'Open link to "{resourceTitle}"':"Odpri povezavo do »{resourceTitle}«","Open navigation":"Odpri krmarjenje","Password is secure":"Geslo je varno","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick a date":"Izbor datuma","Pick a date and a time":"Izbor datuma in časa","Pick a month":"Izbor meseca","Pick a time":"Izbor časa","Pick a week":"Izbor tedna","Pick a year":"Izbor leta","Pick an emoji":"Izbor izrazne ikone","Please select a time zone:":"Izbor časovnega pasu:",Previous:"Predhodni","Related resources":"Povezani viri",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Show password":"Pokaži geslo","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Type to search time zone":"Vpišite niz za iskanje časovnega pasu","Unable to search the group":"Ni mogoče iskati po skupini","Undo changes":"Razveljavi spremembe","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite sporočilo, za omembo pred ime postavite@, začnite z : za vstavljanje izraznih ikon …"}},{locale:"sr",translations:{"{tag} (invisible)":"{tag} (nevidljivo)","{tag} (restricted)":"{tag} (ograničeno)",Actions:"Radnje",Activities:"Aktivnosti","Animals & Nature":"Životinje i Priroda","Avatar of {displayName}":"Avatar za {displayName}","Avatar of {displayName}, {status}":"Avatar za {displayName}, {status}","Cancel changes":"Otkaži izmene","Change title":"Izmeni naziv",Choose:"Изаберите",Close:"Затвори","Close modal":"Zatvori modal","Close navigation":"Zatvori navigaciju","Close sidebar":"Zatvori bočnu traku","Confirm changes":"Potvrdite promene",Custom:"Po meri","Edit item":"Uredi stavku","External documentation for {title}":"Eksterna dokumentacija za {title}",Favorite:"Omiljeni",Flags:"Zastave","Food & Drink":"Hrana i Piće","Frequently used":"Često korišćeno",Global:"Globalno","Go back to the list":"Natrag na listu",items:"stavke","Message limit of {count} characters reached":"Dostignuto je ograničenje za poruke od {count} znakova","More {dashboardItemType} …":"Više  {dashboardItemType} …",Next:"Следеће","No emoji found":"Nije pronađen nijedan emodži","No results":"Нема резултата",Objects:"Objekti",Open:"Otvori","Open navigation":"Otvori navigaciju","Pause slideshow":"Паузирај слајд шоу","People & Body":"Ljudi i Telo","Pick an emoji":"Izaberi emodži","Please select a time zone:":"Molimo izaberite vremensku zonu:",Previous:"Претходно",Search:"Pretraži","Search results":"Rezultati pretrage","Select a tag":"Изаберите ознаку",Settings:"Поставке","Settings navigation":"Navigacija u podešavanjima","Smileys & Emotion":"Smajli i Emocije","Start slideshow":"Покрени слајд шоу",Submit:"Prihvati",Symbols:"Simboli","Travel & Places":"Putovanja i Mesta","Type to search time zone":"Ukucaj da pretražiš vremenske zone","Unable to search the group":"Nije moguće pretražiti grupu","Undo changes":"Poništi promene","Write message, @ to mention someone, : for emoji autocompletion …":"Napišite poruku, @ da pomenete nekoga, : za automatsko dovršavanje emodžija…"}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur","Anything shared with the same group of people will show up here":"Något som delats med samma grupp av personer kommer att visas här","Avatar of {displayName}":"{displayName}s avatar","Avatar of {displayName}, {status}":"{displayName}s avatar, {status}","Cancel changes":"Avbryt ändringar","Change title":"Ändra titel",Choose:"Välj","Clear text":"Ta bort text",Close:"Stäng","Close modal":"Stäng modal","Close navigation":"Stäng navigering","Close sidebar":"Stäng sidopanel","Confirm changes":"Bekräfta ändringar",Custom:"Anpassad","Edit item":"Ändra","Error getting related resources":"Problem att hämta relaterade resurser","Error parsing svg":"Fel vid inläsning av svg","External documentation for {title}":"Extern dokumentation för {title}",Favorite:"Favorit",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta",Global:"Global","Go back to the list":"Gå tillbaka till listan","Hide password":"Göm lössenordet","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används","More items …":"Fler objekt",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt",Open:"Öppna",'Open link to "{resourceTitle}"':'Öppna länk till "{resourceTitle}"',"Open navigation":"Öppna navigering","Password is secure":"Lössenordet är säkert","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji","Please select a time zone:":"Välj tidszon:",Previous:"Föregående","Related resources":"Relaterade resurser",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Show password":"Visa lössenordet","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Submit:"Skicka",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Type to search time zone":"Skriv för att välja tidszon","Unable to search the group":"Kunde inte söka i gruppen","Undo changes":"Ångra ändringar",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv meddelande, använd "@" för att nämna någon, använd ":" för automatiska emojiförslag ...'}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa","Anything shared with the same group of people will show up here":"Aynı kişi grubu ile paylaşılan herşey burada görüntülenir","Avatar of {displayName}":"{displayName} avatarı","Avatar of {displayName}, {status}":"{displayName}, {status} avatarı","Cancel changes":"Değişiklikleri iptal et","Change title":"Başlığı değiştir",Choose:"Seçin","Clear text":"Metni temizle",Close:"Kapat","Close modal":"Üste açılan pencereyi kapat","Close navigation":"Gezinmeyi kapat","Close sidebar":"Yan çubuğu kapat","Confirm changes":"Değişiklikleri onayla",Custom:"Özel","Edit item":"Ögeyi düzenle","Error getting related resources":"İlgili kaynaklar alınırken sorun çıktı","Error parsing svg":"svg işlenirken sorun çıktı","External documentation for {title}":"{title} için dış belgeler",Favorite:"Sık kullanılanlara ekle",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar",Global:"Evrensel","Go back to the list":"Listeye dön","Hide password":"Parolayı gizle","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı","More items …":"Diğer ögeler…",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler",Open:"Aç",'Open link to "{resourceTitle}"':'"{resourceTitle}" bağlantısını aç',"Open navigation":"Gezinmeyi aç","Password is secure":"Parola güvenli","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin","Please select a time zone:":"Lütfen bir saat dilimi seçin:",Previous:"Önceki","Related resources":"İlgili kaynaklar",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Show password":"Parolayı görüntüle","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Type to search time zone":"Saat dilimi aramak için yazmaya başlayın","Unable to search the group":"Grupta arama yapılamadı","Undo changes":"Değişiklikleri geri al",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'İleti yazın, birini anmak için @, otomatik emoji tamamlamak için ":" kullanın…'}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (невидимий)","{tag} (restricted)":"{tag} (обмежений)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Аватар {displayName}, {status}","Cancel changes":"Скасувати зміни","Change title":"Змінити назву",Choose:"ВиберітьВиберіть","Clear text":"Очистити текст",Close:"Закрити","Close modal":"Закрити модаль","Close navigation":"Закрити навігацію","Close sidebar":"Закрити бічну панель","Confirm changes":"Підтвердити зміни",Custom:"Власне","Edit item":"Редагувати елемент","External documentation for {title}":"Зовнішня документація для {title}",Favorite:"Улюблений",Flags:"Прапори","Food & Drink":"Їжа та напої","Frequently used":"Найчастіші",Global:"Глобальний","Go back to the list":"Повернутися до списку","Hide password":"Приховати пароль",items:"елементи","Message limit of {count} characters reached":"Вичерпано ліміт у {count} символів для повідомлення","More {dashboardItemType} …":"Більше {dashboardItemType}…",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти",Open:"Відкрити","Open navigation":"Відкрити навігацію","Password is secure":"Пароль безпечний","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку","Please select a time zone:":"Виберіть часовий пояс:",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Settings navigation":"Навігація у налаштуваннях","Show password":"Показати пароль","Smileys & Emotion":"Смайли та емоції","Start slideshow":"Почати показ слайдів",Submit:"Надіслати",Symbols:"Символи","Travel & Places":"Поїздки та місця","Type to search time zone":"Введіть для пошуку часовий пояс","Unable to search the group":"Неможливо шукати в групі","Undo changes":"Скасувати зміни","Write message, @ to mention someone, : for emoji autocompletion …":"Напишіть повідомлення, @, щоб згадати когось, : для автозаповнення емодзі…"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然","Anything shared with the same group of people will show up here":"与同组用户分享的所有内容都会显示于此","Avatar of {displayName}":"{displayName}的头像","Avatar of {displayName}, {status}":"{displayName}的头像，{status}","Cancel changes":"取消更改","Change title":"更改标题",Choose:"选择","Clear text":"清除文本",Close:"关闭","Close modal":"关闭窗口","Close navigation":"关闭导航","Close sidebar":"关闭侧边栏","Confirm changes":"确认更改",Custom:"自定义","Edit item":"编辑项目","Error getting related resources":"获取相关资源时出错","Error parsing svg":"解析 svg 时出错","External documentation for {title}":"{title}的外部文档",Favorite:"喜爱",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用",Global:"全局","Go back to the list":"返回至列表","Hide password":"隐藏密码","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制","More items …":"更多项目…",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体",Open:"打开",'Open link to "{resourceTitle}"':'打开"{resourceTitle}"的连接',"Open navigation":"开启导航","Password is secure":"密码安全","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情","Please select a time zone:":"请选择一个时区：",Previous:"上一个","Related resources":"相关资源",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Show password":"显示密码","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Submit:"提交",Symbols:"符号","Travel & Places":"旅游 & 地点","Type to search time zone":"打字以搜索时区","Unable to search the group":"无法搜索分组","Undo changes":"撤销更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'写信息，使用"@"来提及某人，使用":"进行表情符号自动完成 ...'}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然","Anything shared with the same group of people will show up here":"與同一組人共享的任何內容都會顯示在此處","Avatar of {displayName}":"{displayName} 的頭像","Avatar of {displayName}, {status}":"{displayName} 的頭像，{status}","Cancel changes":"取消更改","Change title":"更改標題",Choose:"選擇","Clear text":"清除文本",Close:"關閉","Close modal":"關閉模態","Close navigation":"關閉導航","Close sidebar":"關閉側邊欄","Confirm changes":"確認更改",Custom:"自定義","Edit item":"編輯項目","Error getting related resources":"獲取相關資源出錯","Error parsing svg":"解析 svg 時出錯","External documentation for {title}":"{title} 的外部文檔",Favorite:"喜愛",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用",Global:"全球的","Go back to the list":"返回清單","Hide password":"隱藏密碼","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"更多項目 …",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件",Open:"打開",'Open link to "{resourceTitle}"':"打開指向 “{resourceTitle}” 的鏈結","Open navigation":"開啟導航","Password is secure":"密碼是安全的","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號","Please select a time zone:":"請選擇時區：",Previous:"上一個","Related resources":"相關資源",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Show password":"顯示密碼","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"鍵入以搜索時區","Unable to search the group":"無法搜尋群組","Undo changes":"取消更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'寫訊息，使用 "@" 來指代某人，使用 ":" 用於表情符號自動填充 ...'}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((e=>{const t={};for(const a in e.translations)e.translations[a].pluralId?t[a]={msgid:a,msgid_plural:e.translations[a].pluralId,msgstr:e.translations[a].msgstr}:t[a]={msgid:a,msgstr:[e.translations[a]]};i.addTranslation(e.locale,{translations:{"":t}})}));const n=i.build(),r=n.ngettext.bind(n),s=n.gettext.bind(n)},3648:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(932);const i={methods:{n:o.n,t:o.t}}},1205:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=e=>Math.random().toString(36).replace(/[^a-z]+/g,"").slice(0,e||5)},7645:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=e=>{e.mounted?Array.isArray(e.mounted)||(e.mounted=[e.mounted]):e.mounted=[],e.mounted.push((function(){this.$el.setAttribute("data-v-".concat("f7c85e6"),"")}))}},1206:(e,t,a)=>{"use strict";a.d(t,{L:()=>o});a(4505);const o=function(){return Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap}},8384:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.v-popper--theme-tooltip.v-popper__popper{position:absolute;z-index:100000;top:0;right:auto;left:auto;display:block;margin:0;padding:0;text-align:left;text-align:start;opacity:0;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{right:100%;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-tooltip.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{left:100%;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-tooltip.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity .15s,visibility .15s;opacity:0}.v-popper--theme-tooltip.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity .15s;opacity:1}.v-popper--theme-tooltip .v-popper__inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.v-popper--theme-tooltip .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/directives/Tooltip/index.scss"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCSA,0CACC,iBAAA,CACA,cAAA,CACA,KAAA,CACA,UAAA,CACA,SAAA,CACA,aAAA,CACA,QAAA,CACA,SAAA,CACA,eAAA,CACA,gBAAA,CACA,SAAA,CACA,eAAA,CAEA,eAAA,CACA,sDAAA,CAGA,iGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAID,oGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAID,mGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAID,kGACC,SAAA,CACA,oBAAA,CACA,8CAAA,CAID,4DACC,iBAAA,CACA,uCAAA,CACA,SAAA,CAED,6DACC,kBAAA,CACA,uBAAA,CACA,SAAA,CAKF,0CACC,eAAA,CACA,eAAA,CACA,iBAAA,CACA,4BAAA,CACA,kCAAA,CACA,6CAAA,CAID,oDACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBAhFY",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap (http://getbootstrap.com)\n* SCSS copied from version 3.3.5\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n\n$arrow-width: 10px;\n\n.v-popper--theme-tooltip {\n\t&.v-popper__popper {\n\t\tposition: absolute;\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tright: auto;\n\t\tleft: auto;\n\t\tdisplay: block;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\ttext-align: left;\n\t\ttext-align: start;\n\t\topacity: 0;\n\t\tline-height: 1.6;\n\n\t\tline-break: auto;\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t// TOP\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t// BOTTOM\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t// RIGHT\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tright: 100%;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t// LEFT\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tleft: 100%;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t// HIDDEN / SHOWN\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity .15s, visibility .15s;\n\t\t\topacity: 0;\n\t\t}\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity .15s;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\t// CONTENT\n\t.v-popper__inner {\n\t\tmax-width: 350px;\n\t\tpadding: 5px 8px;\n\t\ttext-align: center;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-main-background);\n\t}\n\n\t// ARROW\n\t.v-popper__arrow-container {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: 0;\n\t\tborder-style: solid;\n\t\tborder-color: transparent;\n\t\tborder-width: $arrow-width;\n\t}\n}\n"],sourceRoot:""}]);const s=r},4825:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon[data-v-29452b76]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.action-items[data-v-29452b76]{display:flex;align-items:center}.action-items>button[data-v-29452b76]{margin-right:7px}.action-item[data-v-29452b76]{--open-background-color: var(--color-background-hover, $action-background-hover);position:relative;display:inline-block}.action-item.action-item--primary[data-v-29452b76]{--open-background-color: var(--color-primary-element-hover)}.action-item.action-item--secondary[data-v-29452b76]{--open-background-color: var(--color-primary-element-light-hover)}.action-item.action-item--error[data-v-29452b76]{--open-background-color: var(--color-error-hover)}.action-item.action-item--warning[data-v-29452b76]{--open-background-color: var(--color-warning-hover)}.action-item.action-item--success[data-v-29452b76]{--open-background-color: var(--color-success-hover)}.action-item.action-item--tertiary-no-background[data-v-29452b76]{--open-background-color: transparent}.action-item.action-item--open .action-item__menutoggle[data-v-29452b76]{background-color:var(--open-background-color)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcActions/NcActions.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,+BACC,YAAA,CACA,kBAAA,CAGA,sCACC,gBAAA,CAIF,8BACC,gFAAA,CACA,iBAAA,CACA,oBAAA,CAEA,mDACC,2DAAA,CAGD,qDACC,iEAAA,CAGD,iDACC,iDAAA,CAGD,mDACC,mDAAA,CAGD,mDACC,mDAAA,CAGD,kEACC,oCAAA,CAGD,yEACC,6CAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n// Inline buttons\n.action-items {\n\tdisplay: flex;\n\talign-items: center;\n\n\t// Spacing between buttons\n\t& > button {\n\t\tmargin-right: math.div($icon-margin, 2);\n\t}\n}\n\n.action-item {\n\t--open-background-color: var(--color-background-hover, $action-background-hover);\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t&.action-item--primary {\n\t\t--open-background-color: var(--color-primary-element-hover);\n\t}\n\n\t&.action-item--secondary {\n\t\t--open-background-color: var(--color-primary-element-light-hover);\n\t}\n\n\t&.action-item--error {\n\t\t--open-background-color: var(--color-error-hover);\n\t}\n\n\t&.action-item--warning {\n\t\t--open-background-color: var(--color-warning-hover);\n\t}\n\n\t&.action-item--success {\n\t\t--open-background-color: var(--color-success-hover);\n\t}\n\n\t&.action-item--tertiary-no-background {\n\t\t--open-background-color: transparent;\n\t}\n\n\t&.action-item--open .action-item__menutoggle {\n\t\tbackground-color: var(--open-background-color);\n\t}\n}\n"],sourceRoot:""}]);const s=r},4946:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper{border-radius:var(--border-radius-large);overflow:hidden}.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper .v-popper__inner{border-radius:var(--border-radius-large);padding:4px;max-height:calc(50vh - 16px);overflow:auto}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcActions/NcActions.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCJD,kFACC,wCAAA,CACA,eAAA,CAEA,mGACC,wCAAA,CACA,WAAA,CACA,4BAAA,CACA,aAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n// We overwrote the popover base class, so we can style\n// the popover__inner for actions only.\n.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper {\n\tborder-radius: var(--border-radius-large);\n\toverflow:hidden;\n\n\t.v-popper__inner {\n\t\tborder-radius: var(--border-radius-large);\n\t\tpadding: 4px;\n\t\tmax-height: calc(50vh - 16px);\n\t\toverflow: auto;\n\t}\n}\n"],sourceRoot:""}]);const s=r},7196:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon[data-v-4d05be2c]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-4d05be2c]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:bold;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-4d05be2c],.button-vue span[data-v-4d05be2c]{cursor:pointer}.button-vue[data-v-4d05be2c]:focus{outline:none}.button-vue[data-v-4d05be2c]:disabled{cursor:default;opacity:.5;filter:saturate(0.7)}.button-vue:disabled *[data-v-4d05be2c]{cursor:default}.button-vue[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-4d05be2c]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-4d05be2c]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue__icon[data-v-4d05be2c]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-4d05be2c]{font-weight:bold;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-4d05be2c]{width:44px !important}.button-vue--text-only[data-v-4d05be2c]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-4d05be2c]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-4d05be2c]{padding:0 16px 0 4px}.button-vue--wide[data-v-4d05be2c]{width:100%}.button-vue[data-v-4d05be2c]:focus-visible{outline:2px solid var(--color-main-text) !important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:rgba(0,0,0,0)}.button-vue--vue-primary[data-v-4d05be2c]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-4d05be2c]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-4d05be2c]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-4d05be2c]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color);background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-no-background[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]{color:var(--color-primary-element-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-4d05be2c]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-success[data-v-4d05be2c]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-4d05be2c]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-4d05be2c]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-4d05be2c]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-4d05be2c]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-4d05be2c]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-4d05be2c]:active{background-color:var(--color-error)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcButton/NcButton.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kCAAA,CACA,gBAAA,CACA,eCcgB,CDbhB,cCagB,CDZhB,YAAA,CACA,kBAAA,CACA,sBAAA,CAGA,cAAA,CAKA,kBAAA,CACA,uDAAA,CACA,uBAAA,CACA,iCAAA,CAkBA,6CAAA,CACA,mDAAA,CA1BA,iEAEC,cAAA,CAQD,mCACC,YAAA,CAGD,sCACC,cAAA,CAIA,UCIiB,CDFjB,oBAAA,CALA,wCACC,cAAA,CAUF,kDACC,yDAAA,CAKD,oCACC,mDAAA,CAGD,sCACC,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGD,mCACC,WCvCe,CDwCf,UCxCe,CDyCf,eCzCe,CD0Cf,cC1Ce,CD2Cf,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,mCACC,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAID,wCACC,qBAAA,CAID,wCACC,cAAA,CACA,0DACC,eAAA,CACA,gBAAA,CAKF,4CACC,oBAAA,CAID,mCACC,UAAA,CAGD,2CACC,mDAAA,CACA,+EACC,mDAAA,CACA,kCAAA,CACA,8BAAA,CAOF,0CACC,6CAAA,CACA,uCAAA,CACA,+DACC,mDAAA,CAID,iDACC,6CAAA,CAKF,4CACC,6CAAA,CACA,mDAAA,CACA,iEACC,6CAAA,CACA,yDAAA,CAKF,2CACC,4BAAA,CACA,8BAAA,CACA,gEACC,6BAAA,CACA,8CAAA,CAKF,yDACC,4BAAA,CACA,8BAAA,CACA,8EACC,8BAAA,CAKF,sDACC,uCAAA,CACA,8BAAA,CAEA,2EACC,8BAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,wCACC,mCAAA,CACA,UAAA,CACA,6DACC,yCAAA,CAID,+CACC,mCAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.button-vue {\n\tposition: relative;\n\twidth: fit-content;\n\toverflow: hidden;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\tmin-height: $clickable-area;\n\tmin-width: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t// Cursor pointer on element and all children\n\tcursor: pointer;\n\t& *,\n\tspan {\n\t\tcursor: pointer;\n\t}\n\tborder-radius: math.div($clickable-area, 2);\n\ttransition-property: color, border-color, background-color;\n\ttransition-duration: 0.1s;\n\ttransition-timing-function: linear;\n\n\t// No outline feedback for focus. Handled with a toggled class in js (see data)\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:disabled {\n\t\tcursor: default;\n\t\t& * {\n\t\t\tcursor: default;\n\t\t}\n\t\topacity: $opacity_disabled;\n\t\t// Gives a wash out effect\n\t\tfilter: saturate($opacity_normal);\n\t}\n\n\t// Default button type\n\tcolor: var(--color-primary-element-light-text);\n\tbackground-color: var(--color-primary-element-light);\n\t&:hover:not(:disabled) {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\t// Back to the default color for this button when active\n\t// TODO: add ripple effect\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n\n\t&__wrapper {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t&__icon {\n\t\theight: $clickable-area;\n\t\twidth: $clickable-area;\n\t\tmin-height: $clickable-area;\n\t\tmin-width: $clickable-area;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t&__text {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 1px;\n\t\tpadding: 2px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t// Icon-only button\n\t&--icon-only {\n\t\twidth: $clickable-area !important;\n\t}\n\n\t// Text-only button\n\t&--text-only {\n\t\tpadding: 0 12px;\n\t\t& .button-vue__text {\n\t\t\tmargin-left: 4px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n\n\t// Icon and text button\n\t&--icon-and-text {\n\t\tpadding: 0 16px 0 4px;\n\t}\n\n\t// Wide button spans the whole width of the container\n\t&--wide {\n\t\twidth: 100%;\n\t}\n\n\t&:focus-visible {\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t\t&.button-vue--vue-tertiary-on-primary {\n\t\t\toutline: 2px solid var(--color-primary-element-text);\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Button types\n\n\t// Primary\n\t&--vue-primary {\n\t\tbackground-color: var(--color-primary-element);\n\t\tcolor: var(--color-primary-element-text);\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-primary-element-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t// Secondary\n\t&--vue-secondary {\n\t\tcolor: var(--color-primary-element-light-text);\n\t\tbackground-color: var(--color-primary-element-light);\n\t\t&:hover:not(:disabled) {\n\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t}\n\t}\n\n\t// Tertiary\n\t&--vue-tertiary {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color);\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n\n\t// Tertiary, no background\n\t&--vue-tertiary-no-background {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Tertiary on primary color (like the header)\n\t&--vue-tertiary-on-primary {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: transparent;\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Success\n\t&--vue-success {\n\t\tbackground-color: var(--color-success);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-success-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// : add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t}\n\n\t// Warning\n\t&--vue-warning {\n\t\tbackground-color: var(--color-warning);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-warning-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-warning);\n\t\t}\n\t}\n\n\t// Error\n\t&--vue-error {\n\t\tbackground-color: var(--color-error);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-error-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},2482:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,'.material-design-icon[data-v-234c4d21]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.modal-mask[data-v-234c4d21]{position:fixed;z-index:9998;top:0;left:0;display:block;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.modal-mask--dark[data-v-234c4d21]{background-color:rgba(0,0,0,.92)}.modal-header[data-v-234c4d21]{position:absolute;z-index:10001;top:0;right:0;left:0;display:flex !important;align-items:center;justify-content:center;width:100%;height:50px;overflow:hidden;transition:opacity 250ms,visibility 250ms}.modal-header.invisible[style*="display:none"][data-v-234c4d21],.modal-header.invisible[style*="display: none"][data-v-234c4d21]{visibility:hidden}.modal-header .modal-name[data-v-234c4d21]{overflow-x:hidden;box-sizing:border-box;width:100%;padding:0 132px 0 12px;transition:padding ease 100ms;white-space:nowrap;text-overflow:ellipsis;color:#fff;font-size:14px;margin-bottom:0}@media only screen and (min-width: 1024px){.modal-header .modal-name[data-v-234c4d21]{padding-left:132px;text-align:center}}.modal-header .icons-menu[data-v-234c4d21]{position:absolute;right:0;display:flex;align-items:center;justify-content:flex-end}.modal-header .icons-menu .header-close[data-v-234c4d21]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;margin:3px;padding:0}.modal-header .icons-menu .play-pause-icons[data-v-234c4d21]{position:relative;width:50px;height:50px;margin:0;padding:0;cursor:pointer;border:none;background-color:rgba(0,0,0,0)}.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__play[data-v-234c4d21],.modal-header .icons-menu .play-pause-icons:hover .play-pause-icons__pause[data-v-234c4d21],.modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__play[data-v-234c4d21],.modal-header .icons-menu .play-pause-icons:focus .play-pause-icons__pause[data-v-234c4d21]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,.25)}.modal-header .icons-menu .play-pause-icons__play[data-v-234c4d21],.modal-header .icons-menu .play-pause-icons__pause[data-v-234c4d21]{box-sizing:border-box;width:44px;height:44px;margin:3px;cursor:pointer;opacity:.7}.modal-header .icons-menu .header-actions[data-v-234c4d21]{color:#fff}.modal-header .icons-menu[data-v-234c4d21]  .action-item{margin:3px}.modal-header .icons-menu[data-v-234c4d21]  .action-item--single{box-sizing:border-box;width:44px;height:44px;cursor:pointer;background-position:center;background-size:22px}.modal-header .icons-menu[data-v-234c4d21] button{color:#fff}.modal-header .icons-menu[data-v-234c4d21] .action-item__menutoggle{padding:0}.modal-header .icons-menu[data-v-234c4d21] .action-item__menutoggle span,.modal-header .icons-menu[data-v-234c4d21] .action-item__menutoggle svg{width:var(--icon-size);height:var(--icon-size)}.modal-wrapper[data-v-234c4d21]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.modal-wrapper .prev[data-v-234c4d21],.modal-wrapper .next[data-v-234c4d21]{z-index:10000;display:flex !important;height:35vw;position:absolute;transition:opacity 250ms,visibility 250ms;color:var(--color-primary-element-text)}.modal-wrapper .prev[data-v-234c4d21]:focus-visible,.modal-wrapper .next[data-v-234c4d21]:focus-visible{box-shadow:0 0 0 2px var(--color-primary-element-text);background-color:var(--color-box-shadow)}.modal-wrapper .prev.invisible[style*="display:none"][data-v-234c4d21],.modal-wrapper .prev.invisible[style*="display: none"][data-v-234c4d21],.modal-wrapper .next.invisible[style*="display:none"][data-v-234c4d21],.modal-wrapper .next.invisible[style*="display: none"][data-v-234c4d21]{visibility:hidden}.modal-wrapper .prev[data-v-234c4d21]{left:2px}.modal-wrapper .next[data-v-234c4d21]{right:2px}.modal-wrapper .modal-container[data-v-234c4d21]{position:relative;display:block;overflow:auto;padding:0;transition:transform 300ms ease;border-radius:var(--border-radius-large);background-color:var(--color-main-background);color:var(--color-main-text);box-shadow:0 0 40px rgba(0,0,0,.2)}.modal-wrapper .modal-container__close[data-v-234c4d21]{position:absolute;top:4px;right:4px}.modal-wrapper--small .modal-container[data-v-234c4d21]{width:400px;max-width:90%;max-height:90%}.modal-wrapper--normal .modal-container[data-v-234c4d21]{max-width:90%;width:600px;max-height:90%}.modal-wrapper--large .modal-container[data-v-234c4d21]{max-width:90%;width:900px;max-height:90%}.modal-wrapper--full .modal-container[data-v-234c4d21]{width:100%;height:calc(100% - var(--header-height));position:absolute;top:50px;border-radius:0}@media only screen and (max-width: 512px){.modal-wrapper .modal-container[data-v-234c4d21]{max-width:initial;width:100%;max-height:initial;height:calc(100% - var(--header-height));position:absolute;top:50px;border-radius:0}}.fade-enter-active[data-v-234c4d21],.fade-leave-active[data-v-234c4d21]{transition:opacity 250ms}.fade-enter[data-v-234c4d21],.fade-leave-to[data-v-234c4d21]{opacity:0}.fade-visibility-enter[data-v-234c4d21],.fade-visibility-leave-to[data-v-234c4d21]{visibility:hidden;opacity:0}.modal-in-enter-active[data-v-234c4d21],.modal-in-leave-active[data-v-234c4d21],.modal-out-enter-active[data-v-234c4d21],.modal-out-leave-active[data-v-234c4d21]{transition:opacity 250ms}.modal-in-enter[data-v-234c4d21],.modal-in-leave-to[data-v-234c4d21],.modal-out-enter[data-v-234c4d21],.modal-out-leave-to[data-v-234c4d21]{opacity:0}.modal-in-enter .modal-container[data-v-234c4d21],.modal-in-leave-to .modal-container[data-v-234c4d21]{transform:scale(0.9)}.modal-out-enter .modal-container[data-v-234c4d21],.modal-out-leave-to .modal-container[data-v-234c4d21]{transform:scale(1.1)}.modal-mask .play-pause-icons .progress-ring[data-v-234c4d21]{position:absolute;top:0;left:0;transform:rotate(-90deg)}.modal-mask .play-pause-icons .progress-ring .progress-ring__circle[data-v-234c4d21]{transition:100ms stroke-dashoffset;transform-origin:50% 50%;animation:progressring-234c4d21 linear var(--slideshow-duration) infinite;stroke-linecap:round;stroke-dashoffset:94.2477796077;stroke-dasharray:94.2477796077}.modal-mask .play-pause-icons--paused .icon-pause[data-v-234c4d21]{animation:breath-234c4d21 2s cubic-bezier(0.4, 0, 0.2, 1) infinite}.modal-mask .play-pause-icons--paused .progress-ring__circle[data-v-234c4d21]{animation-play-state:paused !important}@keyframes progressring-234c4d21{from{stroke-dashoffset:94.2477796077}to{stroke-dashoffset:0}}@keyframes breath-234c4d21{0%{opacity:1}50%{opacity:0}100%{opacity:1}}',"",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcModal/NcModal.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,cAAA,CACA,YAAA,CACA,KAAA,CACA,MAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,+BAAA,CACA,mCACC,gCAAA,CAIF,+BACC,iBAAA,CACA,aAAA,CACA,KAAA,CACA,OAAA,CACA,MAAA,CAGA,uBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WCuBe,CDtBf,eAAA,CACA,yCAAA,CAIA,iIAEC,iBAAA,CAGD,2CACC,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,sBAAA,CACA,6BAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,cChBY,CDiBZ,eAAA,CAID,2CACC,2CACC,kBAAA,CACA,iBAAA,CAAA,CAIF,2CACC,iBAAA,CACA,OAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CAEA,yDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA,CACA,UAAA,CACA,SAAA,CAGD,6DACC,iBAAA,CACA,UC3Ba,CD4Bb,WC5Ba,CD6Bb,QAAA,CACA,SAAA,CACA,cAAA,CACA,WAAA,CACA,8BAAA,CAGC,8WAEC,SC9CU,CD+CV,kBAAA,CACA,sCCxDW,CD2Db,uIAEC,qBAAA,CACA,UCzEa,CD0Eb,WC1Ea,CD2Eb,UAAA,CACA,cAAA,CACA,UC3Da,CD+Df,2DACC,UAAA,CAGD,yDACC,UAAA,CAEA,iEACC,qBAAA,CACA,UC1Fa,CD2Fb,WC3Fa,CD4Fb,cAAA,CACA,0BAAA,CACA,oBAAA,CAIF,kDAEC,UAAA,CAID,oEACC,SAAA,CACA,iJACC,sBAAA,CACA,uBAAA,CAMJ,gCACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CAGA,4EAEC,aAAA,CAEA,uBAAA,CACA,WAAA,CACA,iBAAA,CACA,yCAAA,CAEA,uCAAA,CAEA,wGAEC,sDAAA,CACA,wCAAA,CAOD,8RAEC,iBAAA,CAGF,sCACC,QAAA,CAED,sCACC,SAAA,CAID,iDACC,iBAAA,CACA,aAAA,CACA,aAAA,CACA,SAAA,CACA,+BAAA,CACA,wCAAA,CACA,6CAAA,CACA,4BAAA,CACA,kCAAA,CACA,wDACC,iBAAA,CACA,OAAA,CACA,SAAA,CAMD,wDACC,WAAA,CACA,aAAA,CACA,cAAA,CAID,yDACC,aAAA,CACA,WAAA,CACA,cAAA,CAID,wDACC,aAAA,CACA,WAAA,CACA,cAAA,CAID,uDACC,UAAA,CACA,wCAAA,CACA,iBAAA,CACA,QC9Ka,CD+Kb,eAAA,CAKF,0CACC,iDACC,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,wCAAA,CACA,iBAAA,CACA,QC3La,CD4Lb,eAAA,CAAA,CAMH,wEAEC,wBAAA,CAGD,6DAEC,SAAA,CAGD,mFAEC,iBAAA,CACA,SAAA,CAGD,kKAIC,wBAAA,CAGD,4IAIC,SAAA,CAGD,uGAEC,oBAAA,CAGD,yGAEC,oBAAA,CAQA,8DACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CACA,qFACC,kCAAA,CACA,wBAAA,CACA,yEAAA,CAEA,oBAAA,CACA,+BAAA,CACA,8BAAA,CAID,mEACC,kEAAA,CAED,8EACC,sCAAA,CAMH,iCACC,KACC,+BAAA,CAED,GACC,mBAAA,CAAA,CAIF,2BACC,GACC,SAAA,CAED,IACC,SAAA,CAED,KACC,SAAA,CAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.modal-mask {\n\tposition: fixed;\n\tz-index: 9998;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, .5);\n\t&--dark {\n\t\tbackground-color: rgba(0, 0, 0, .92);\n\t}\n}\n\n.modal-header {\n\tposition: absolute;\n\tz-index: 10001;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\t// prevent vue show to use display:none and reseting\n\t// the circle animation loop\n\tdisplay: flex !important;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: $header-height;\n\toverflow: hidden;\n\ttransition: opacity 250ms,\n\t\tvisibility 250ms;\n\n\t// replace display by visibility\n\t&.invisible[style*='display:none'],\n\t&.invisible[style*='display: none'] {\n\t\tvisibility: hidden;\n\t}\n\n\t.modal-name {\n\t\toverflow-x: hidden;\n\t\tbox-sizing: border-box;\n\t\twidth: 100%;\n\t\tpadding: 0 #{$clickable-area * 3} 0 12px; // maximum actions is 3\n\t\ttransition: padding ease 100ms;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: #fff;\n\t\tfont-size: $icon-margin;\n\t\tmargin-bottom: 0;\n\t}\n\n\t// On wider screens the name can be centered\n\t@media only screen and (min-width: $breakpoint-mobile) {\n\t\t.modal-name {\n\t\t\tpadding-left: #{$clickable-area * 3}; // maximum actions is 3\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.icons-menu {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: flex-end;\n\n\t\t.header-close {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin: math.div($header-height - $clickable-area, 2);\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t.play-pause-icons {\n\t\t\tposition: relative;\n\t\t\twidth: $header-height;\n\t\t\theight: $header-height;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tcursor: pointer;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\t.play-pause-icons__play,\n\t\t\t\t.play-pause-icons__pause {\n\t\t\t\t\topacity: $opacity_full;\n\t\t\t\t\tborder-radius: math.div($clickable-area, 2);\n\t\t\t\t\tbackground-color: $icon-focus-bg;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&__play,\n\t\t\t&__pause {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: $clickable-area;\n\t\t\t\theight: $clickable-area;\n\t\t\t\tmargin: math.div($header-height - $clickable-area, 2);\n\t\t\t\tcursor: pointer;\n\t\t\t\topacity: $opacity_normal;\n\t\t\t}\n\t\t}\n\n\t\t.header-actions {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t&:deep() .action-item {\n\t\t\tmargin: math.div($header-height - $clickable-area, 2);\n\n\t\t\t&--single {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: $clickable-area;\n\t\t\t\theight: $clickable-area;\n\t\t\t\tcursor: pointer;\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-size: 22px;\n\t\t\t}\n\t\t}\n\n\t\t:deep(button) {\n\t\t\t// force white instead of default main text\n\t\t\tcolor: #fff;\n\t\t}\n\n\t\t// Force the Actions menu icon to be the same size as other icons\n\t\t&:deep(.action-item__menutoggle) {\n\t\t\tpadding: 0;\n\t\t\tspan, svg {\n\t\t\t\twidth: var(--icon-size);\n\t\t\t\theight: var(--icon-size);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.modal-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 100%;\n\n\t/* Navigation buttons */\n\t.prev,\n\t.next {\n\t\tz-index: 10000;\n\t\t// ignore display: none\n\t\tdisplay: flex !important;\n\t\theight: 35vw;\n\t\tposition: absolute;\n\t\ttransition: opacity 250ms,\n\t\t\tvisibility 250ms;\n\t\tcolor: var(--color-primary-element-text);\n\n\t\t&:focus-visible {\n\t\t\t// Override NcButton focus styles\n\t\t\tbox-shadow: 0 0 0 2px var(--color-primary-element-text);\n\t\t\tbackground-color: var(--color-box-shadow);\n\t\t}\n\n\t\t// we want to keep the elements on page\n\t\t// even if hidden to avoid having a unbalanced\n\t\t// centered content\n\t\t// replace display by visibility\n\t\t&.invisible[style*='display:none'],\n\t\t&.invisible[style*='display: none'] {\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\t.prev {\n\t\tleft: 2px;\n\t}\n\t.next {\n\t\tright: 2px;\n\t}\n\n\t/* Content */\n\t.modal-container {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\toverflow: auto; // avoids unecessary hacks if the content should be bigger than the modal\n\t\tpadding: 0;\n\t\ttransition: transform 300ms ease;\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-color: var(--color-main-background);\n\t\tcolor: var(--color-main-text);\n\t\tbox-shadow: 0 0 40px rgba(0, 0, 0, .2);\n\t\t&__close {\n\t\t\tposition: absolute;\n\t\t\ttop: 4px;\n\t\t\tright: 4px;\n\t\t}\n\t}\n\n\t// Sizing\n\t&--small {\n\t\t.modal-container {\n\t\t\twidth: 400px;\n\t\t\tmax-width: 90%;\n\t\t\tmax-height: 90%;\n\t\t}\n\t}\n\t&--normal {\n\t\t.modal-container {\n\t\t\tmax-width: 90%;\n\t\t\twidth: 600px;\n\t\t\tmax-height: 90%;\n\t\t}\n\t}\n\t&--large {\n\t\t.modal-container {\n\t\t\tmax-width: 90%;\n\t\t\twidth: 900px;\n\t\t\tmax-height: 90%;\n\t\t}\n\t}\n\t&--full {\n\t\t.modal-container {\n\t\t\twidth: 100%;\n\t\t\theight: calc(100% - var(--header-height));\n\t\t\tposition: absolute;\n\t\t\ttop: $header-height;\n\t\t\tborder-radius: 0;\n\t\t}\n\t}\n\n\t// Make modal full screen on mobile\n\t@media only screen and (max-width: math.div($breakpoint-mobile, 2)) {\n\t\t.modal-container {\n\t\t\tmax-width: initial;\n\t\t\twidth: 100%;\n\t\t\tmax-height: initial;\n\t\t\theight: calc(100% - var(--header-height));\n\t\t\tposition: absolute;\n\t\t\ttop: $header-height;\n\t\t\tborder-radius: 0;\n\t\t}\n\t}\n}\n\n/* TRANSITIONS */\n.fade-enter-active,\n.fade-leave-active {\n\ttransition: opacity 250ms;\n}\n\n.fade-enter,\n.fade-leave-to {\n\topacity: 0;\n}\n\n.fade-visibility-enter,\n.fade-visibility-leave-to {\n\tvisibility: hidden;\n\topacity: 0;\n}\n\n.modal-in-enter-active,\n.modal-in-leave-active,\n.modal-out-enter-active,\n.modal-out-leave-active {\n\ttransition: opacity 250ms;\n}\n\n.modal-in-enter,\n.modal-in-leave-to,\n.modal-out-enter,\n.modal-out-leave-to {\n\topacity: 0;\n}\n\n.modal-in-enter .modal-container,\n.modal-in-leave-to .modal-container {\n\ttransform: scale(.9);\n}\n\n.modal-out-enter .modal-container,\n.modal-out-leave-to .modal-container {\n\ttransform: scale(1.1);\n}\n\n// animated circle\n$radius: 15;\n$pi: 3.14159265358979;\n\n.modal-mask .play-pause-icons {\n\t.progress-ring {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\ttransform: rotate(-90deg);\n\t\t.progress-ring__circle {\n\t\t\ttransition: 100ms stroke-dashoffset;\n\t\t\ttransform-origin: 50% 50%; // axis compensation\n\t\t\tanimation: progressring linear var(--slideshow-duration) infinite;\n\n\t\t\tstroke-linecap: round;\n\t\t\tstroke-dashoffset: $radius * 2 * $pi; // radius * 2 * PI\n\t\t\tstroke-dasharray: $radius * 2 * $pi; // radius * 2 * PI\n\t\t}\n\t}\n\t&--paused {\n\t\t.icon-pause {\n\t\t\tanimation: breath 2s cubic-bezier(.4, 0, .2, 1) infinite;\n\t\t}\n\t\t.progress-ring__circle {\n\t\t\tanimation-play-state: paused !important;\n\t\t}\n\t}\n}\n\n// keyframes get scoped too and break the animation name, we need them unscoped\n@keyframes progressring {\n\tfrom {\n\t\tstroke-dashoffset: $radius * 2 * $pi; // radius * 2 * PI\n\t}\n\tto {\n\t\tstroke-dashoffset: 0;\n\t}\n}\n\n@keyframes breath {\n\t0% {\n\t\topacity: 1;\n\t}\n\t50% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=r},1625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(7537),i=a.n(o),n=a(3645),r=a.n(n)()(i());r.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:rgba(0,0,0,0);pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown.v-popper__popper{z-index:100000;top:0;left:0;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-dropdown.v-popper__popper .v-popper__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius-large);overflow:hidden;background:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{left:-10px;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity var(--animation-quick);opacity:1}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcPopover/NcPopover.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,iBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CAGD,wBACC,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,UAAA,CAMA,2CACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CAEA,sDAAA,CAEA,4DACC,SAAA,CACA,4BAAA,CACA,wCAAA,CACA,eAAA,CACA,uCAAA,CAGD,sEACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBA1BW,CA6BZ,kGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAGD,qGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAGD,oGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAGD,mGACC,WAAA,CACA,oBAAA,CACA,8CAAA,CAGD,6DACC,iBAAA,CACA,2EAAA,CACA,SAAA,CAGD,8DACC,kBAAA,CACA,yCAAA,CACA,SAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"f7c85e6\"; @import 'variables'; @import 'material-icons';\n\n\n.resize-observer {\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:-1;\n\twidth:100%;\n\theight:100%;\n\tborder:none;\n\tbackground-color:transparent;\n\tpointer-events:none;\n\tdisplay:block;\n\toverflow:hidden;\n\topacity:0\n}\n\n.resize-observer object {\n\tdisplay:block;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\theight:100%;\n\twidth:100%;\n\toverflow:hidden;\n\tpointer-events:none;\n\tz-index:-1\n}\n\n$arrow-width: 10px;\n\n.v-popper--theme-dropdown {\n\t&.v-popper__popper {\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block !important;\n\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t.v-popper__inner {\n\t\t\tpadding: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--color-main-background);\n\t\t}\n\n\t\t.v-popper__arrow-container {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: transparent;\n\t\t\tborder-width: $arrow-width;\n\t\t}\n\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tleft: -$arrow-width;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tright: -$arrow-width;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=r},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",o=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),o&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),o&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,o,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),n="/*# ".concat(i," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},3379:e=>{"use strict";var t=[];function a(e){for(var a=-1,o=0;o<t.length;o++)if(t[o].identifier===e){a=o;break}return a}function o(e,o){for(var n={},r=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var p=a(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var A=i(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:A,references:1})}r.push(u)}return r}function i(e,t){var a=t.domAPI(t);a.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var n=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var s=a(n[r]);t[s].references--}for(var l=o(e,i),c=0;c<n.length;c++){var d=a(n[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}n=l}}},569:e=>{"use strict";var t={};e.exports=function(e,a){var o=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,a)=>{"use strict";e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,i&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},5727:()=>{},2102:()=>{},9989:()=>{},2405:()=>{},1900:(e,t,a)=>{"use strict";function o(e,t,a,o,i,n,r,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a.d(t,{Z:()=>o})},7931:e=>{"use strict";e.exports=__webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},1804:e=>{"use strict";e.exports=__webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.cjs")},9454:e=>{"use strict";e.exports=__webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js")},4505:e=>{"use strict";e.exports=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js")},2734:e=>{"use strict";e.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},9044:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/ChevronRight.vue */ "./node_modules/vue-material-design-icons/ChevronRight.vue")},8618:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue")},1441:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue")}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var o={};return(()=>{"use strict";a.r(o),a.d(o,{default:()=>q});var e=a(7645),t=a(1206),i=a(932),n=a(1205),r=a(3648),s=a(8250),l=a(4462);function c(e,t){let a,o,i,n=t;this.start=function(){i=!0,o=new Date,a=setTimeout(e,n)},this.pause=function(){i=!1,clearTimeout(a),n-=new Date-o},this.clear=function(){i=!1,clearTimeout(a),n=0},this.getTimeLeft=function(){return i&&(this.pause(),this.start()),n},this.getStateRunning=function(){return i},this.start()}var d=a(336);const u=__webpack_require__(/*! vue-material-design-icons/ChevronLeft.vue */ "./node_modules/vue-material-design-icons/ChevronLeft.vue");var p=a.n(u),m=a(9044),A=a.n(m),h=a(8618),g=a.n(h);const v=__webpack_require__(/*! vue-material-design-icons/Pause.vue */ "./node_modules/vue-material-design-icons/Pause.vue");var C=a.n(v);const b=__webpack_require__(/*! vue-material-design-icons/Play.vue */ "./node_modules/vue-material-design-icons/Play.vue");var y=a.n(b),f=a(4505),k=a(1804);const w={name:"NcModal",components:{NcActions:s.default,ChevronLeft:p(),ChevronRight:A(),Close:g(),Pause:C(),Play:y(),NcButton:l.default},directives:{tooltip:d.default},mixins:[r.Z],props:{name:{type:String,default:""},hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1},outTransition:{type:Boolean,default:!1},enableSlideshow:{type:Boolean,default:!1},slideshowDelay:{type:Number,default:5e3},slideshowPaused:{type:Boolean,default:!1},enableSwipe:{type:Boolean,default:!0},spreadNavigation:{type:Boolean,default:!1},size:{type:String,default:"normal",validator:e=>["small","normal","large","full"].includes(e)},canClose:{type:Boolean,default:!0},dark:{type:Boolean,default:!1},container:{type:[String,null],default:"body"},closeButtonContained:{type:Boolean,default:!0},additionalTrapElements:{type:Array,default:()=>[]},inlineActions:{type:Number,default:0},show:{type:Boolean,default:void 0}},emits:["previous","next","close","update:show"],data:()=>({mc:null,playing:!1,slideshowTimeout:null,iconSize:24,focusTrap:null,randId:(0,n.Z)(),internalShow:!0}),computed:{showModal(){return void 0===this.show?this.internalShow:this.show},modalTransitionName(){return"modal-".concat(this.outTransition?"out":"in")},playPauseName(){return this.playing?(0,i.t)("Pause slideshow"):(0,i.t)("Start slideshow")},cssVariables(){return{"--slideshow-duration":this.slideshowDelay+"ms","--icon-size":this.iconSize+"px"}},closeButtonAriaLabel:()=>(0,i.t)("Close modal"),prevButtonAriaLabel:()=>(0,i.t)("Previous"),nextButtonAriaLabel:()=>(0,i.t)("Next")},watch:{slideshowPaused(e){this.slideshowTimeout&&(e?this.slideshowTimeout.pause():this.slideshowTimeout.start())},additionalTrapElements(e){if(this.focusTrap){const t=this.$refs.mask;this.focusTrap.updateContainerElements([t,...e])}}},beforeMount(){window.addEventListener("keydown",this.handleKeydown)},beforeDestroy(){window.removeEventListener("keydown",this.handleKeydown),this.mc.stop()},mounted(){if(this.useFocusTrap(),this.mc=(0,k.useSwipe)(this.$refs.mask,{onSwipeEnd:this.handleSwipe}),this.container)if("body"===this.container)document.body.insertBefore(this.$el,document.body.lastChild);else{document.querySelector(this.container).appendChild(this.$el)}},destroyed(){this.clearFocusTrap(),this.$el.remove()},methods:{previous(e){this.hasPrevious&&(e&&this.resetSlideshow(),this.$emit("previous",e))},next(e){this.hasNext&&(e&&this.resetSlideshow(),this.$emit("next",e))},close(e){this.canClose&&(this.internalShow=!1,this.$emit("update:show",!1),setTimeout((()=>{this.$emit("close",e)}),300))},handleKeydown(e){switch(e.keyCode){case 37:this.previous(e);break;case 39:this.next(e);break;case 27:this.close(e)}},handleSwipe(e,t){this.enableSwipe&&("left"===t?this.next(e):"right"===t&&this.previous(e))},togglePlayPause(){this.playing=!this.playing,this.playing?this.handleSlideshow():this.clearSlideshowTimeout()},resetSlideshow(){this.playing=!this.playing,this.clearSlideshowTimeout(),this.$nextTick((function(){this.togglePlayPause()}))},handleSlideshow(){this.playing=!0,this.hasNext?this.slideshowTimeout=new c((()=>{this.next(),this.handleSlideshow()}),this.slideshowDelay):(this.playing=!1,this.clearSlideshowTimeout())},clearSlideshowTimeout(){this.slideshowTimeout&&this.slideshowTimeout.clear()},async useFocusTrap(){if(!this.showModal||this.focusTrap)return;const e=this.$refs.mask;await this.$nextTick();const a={allowOutsideClick:!0,fallbackFocus:e,trapStack:(0,t.L)()};this.focusTrap=(0,f.createFocusTrap)(e,a),this.focusTrap.activate()},clearFocusTrap(){var e;this.focusTrap&&(null===(e=this.focusTrap)||void 0===e||e.deactivate(),this.focusTrap=null)}}},S=w;var x=a(3379),z=a.n(x),N=a(7795),j=a.n(N),P=a(569),E=a.n(P),B=a(3565),T=a.n(B),_=a(9216),D=a.n(_),F=a(4589),O=a.n(F),G=a(2482),M={};M.styleTagTransform=O(),M.setAttributes=T(),M.insert=E().bind(null,"head"),M.domAPI=j(),M.insertStyleElement=D();z()(G.Z,M);G.Z&&G.Z.locals&&G.Z.locals;var I=a(1900),$=a(9989),U=a.n($),R=(0,I.Z)(S,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade",appear:""},on:{"after-enter":e.useFocusTrap,"before-leave":e.clearFocusTrap}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],ref:"mask",staticClass:"modal-mask",class:{"modal-mask--dark":e.dark},style:e.cssVariables,attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-name-"+e.randId,"aria-describedby":"modal-description-"+e.randId,tabindex:"-1"}},[t("transition",{attrs:{name:"fade-visibility",appear:""}},[t("div",{staticClass:"modal-header"},[""!==e.name.trim()?t("h2",{staticClass:"modal-name",attrs:{id:"modal-name-"+e.randId}},[e._v("\n\t\t\t\t\t"+e._s(e.name)+"\n\t\t\t\t")]):e._e(),e._v(" "),t("div",{staticClass:"icons-menu"},[e.hasNext&&e.enableSlideshow?t("button",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.playPauseName,expression:"playPauseName",modifiers:{auto:!0}}],staticClass:"play-pause-icons",class:{"play-pause-icons--paused":e.slideshowPaused},attrs:{type:"button"},on:{click:e.togglePlayPause}},[e.playing?t("Pause",{staticClass:"play-pause-icons__pause",attrs:{size:e.iconSize}}):t("Play",{staticClass:"play-pause-icons__play",attrs:{size:e.iconSize}}),e._v(" "),t("span",{staticClass:"hidden-visually"},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.playPauseName)+"\n\t\t\t\t\t\t")]),e._v(" "),e.playing?t("svg",{staticClass:"progress-ring",attrs:{height:"50",width:"50"}},[t("circle",{staticClass:"progress-ring__circle",attrs:{stroke:"white","stroke-width":"2",fill:"transparent",r:"15",cx:"25",cy:"25"}})]):e._e()],1):e._e(),e._v(" "),t("NcActions",{staticClass:"header-actions",attrs:{inline:e.inlineActions}},[e._t("actions")],2),e._v(" "),e.canClose&&!e.closeButtonContained?t("NcButton",{staticClass:"header-close",attrs:{"aria-label":e.closeButtonAriaLabel,type:"tertiary"},on:{click:e.close},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close",{attrs:{size:e.iconSize}})]},proxy:!0}],null,!1,1841713362)}):e._e()],1)])]),e._v(" "),t("transition",{attrs:{name:e.modalTransitionName,appear:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"modal-wrapper",class:["modal-wrapper--".concat(e.size),e.spreadNavigation?"modal-wrapper--spread-navigation":""],on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.close.apply(null,arguments)}}},[t("transition",{attrs:{name:"fade-visibility",appear:""}},[t("NcButton",{directives:[{name:"show",rawName:"v-show",value:e.hasPrevious,expression:"hasPrevious"}],staticClass:"prev",class:{invisible:!e.hasPrevious},attrs:{type:"tertiary-no-background","aria-label":e.prevButtonAriaLabel},on:{click:e.previous},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ChevronLeft",{attrs:{size:40}})]},proxy:!0}])})],1),e._v(" "),t("div",{staticClass:"modal-container",attrs:{id:"modal-description-"+e.randId}},[e._t("default"),e._v(" "),e.canClose&&e.closeButtonContained?t("NcButton",{staticClass:"modal-container__close",attrs:{type:"tertiary","aria-label":e.closeButtonAriaLabel},on:{click:e.close},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Close",{attrs:{size:20}})]},proxy:!0}],null,!1,2121748766)}):e._e()],2),e._v(" "),t("transition",{attrs:{name:"fade-visibility",appear:""}},[t("NcButton",{directives:[{name:"show",rawName:"v-show",value:e.hasNext,expression:"hasNext"}],staticClass:"next",class:{invisible:!e.hasNext},attrs:{type:"tertiary-no-background","aria-label":e.nextButtonAriaLabel},on:{click:e.next},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ChevronRight",{attrs:{size:40}})]},proxy:!0}])})],1)],1)])],1)])}),[],!1,null,"234c4d21",null);"function"==typeof U()&&U()(R);const L=R.exports;(0,e.Z)(L);const q=L})(),o})()));
//# sourceMappingURL=NcModal.js.map

/***/ }),

/***/ "./node_modules/floating-vue/dist/floating-vue.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/floating-vue/dist/floating-vue.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   HIDE_EVENT_MAP: () => (/* binding */ HIDE_EVENT_MAP),
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   Popper: () => (/* binding */ Popper),
/* harmony export */   PopperContent: () => (/* binding */ PopperContent),
/* harmony export */   PopperMethods: () => (/* binding */ PopperMethods),
/* harmony export */   PopperWrapper: () => (/* binding */ PopperWrapper),
/* harmony export */   SHOW_EVENT_MAP: () => (/* binding */ SHOW_EVENT_MAP),
/* harmony export */   ThemeClass: () => (/* binding */ ThemeClass),
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipDirective: () => (/* binding */ TooltipDirective),
/* harmony export */   VClosePopper: () => (/* binding */ VClosePopper),
/* harmony export */   VTooltip: () => (/* binding */ VTooltip),
/* harmony export */   createTooltip: () => (/* binding */ createTooltip),
/* harmony export */   "default": () => (/* binding */ plugin),
/* harmony export */   destroyTooltip: () => (/* binding */ destroyTooltip),
/* harmony export */   hideAllPoppers: () => (/* binding */ hideAllPoppers),
/* harmony export */   install: () => (/* binding */ install),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   placements: () => (/* binding */ placements)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/floating-vue/node_modules/@floating-ui/core/dist/floating-ui.core.esm.js");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


function assign(to, from) {
  for (const key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
const config = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: true,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (events) => [...events, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  let themeConfig = config.themes[theme] || {};
  let value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map((c) => `v-popper--theme-${c}`);
}
function getAllParentThemes(theme) {
  const result = [theme];
  let themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result;
}
var vueResize = "";
let supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
let isIOS = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
const placements = ["auto", "top", "bottom", "left", "right"].reduce((acc, base) => acc.concat([
  base,
  `${base}-start`,
  `${base}-end`
]), []);
const SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
const HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => {
    requestAnimationFrame(resolve);
  }));
}
const shownPoppers = [];
let hidingPopper = null;
const shownPoppersByTheme = {};
function getShownPoppersByTheme(theme) {
  let list = shownPoppersByTheme[theme];
  if (!list) {
    list = shownPoppersByTheme[theme] = [];
  }
  return list;
}
let Element = function() {
};
if (typeof window !== "undefined") {
  Element = window.Element;
}
function defaultPropFactory(prop) {
  return function() {
    const props = this.$props;
    return getDefaultConfig(props.theme, prop);
  };
}
const PROVIDE_KEY = "__floating-vue__popper";
var PrivatePopper = () => ({
  name: "VPopper",
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      required: true
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: defaultPropFactory("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: defaultPropFactory("positioningDisabled")
    },
    placement: {
      type: String,
      default: defaultPropFactory("placement"),
      validator: (value) => placements.includes(value)
    },
    delay: {
      type: [String, Number, Object],
      default: defaultPropFactory("delay")
    },
    distance: {
      type: [Number, String],
      default: defaultPropFactory("distance")
    },
    skidding: {
      type: [Number, String],
      default: defaultPropFactory("skidding")
    },
    triggers: {
      type: Array,
      default: defaultPropFactory("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: defaultPropFactory("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperHideTriggers")
    },
    container: {
      type: [String, Object, Element, Boolean],
      default: defaultPropFactory("container")
    },
    boundary: {
      type: [String, Element],
      default: defaultPropFactory("boundary")
    },
    strategy: {
      type: String,
      validator: (value) => ["absolute", "fixed"].includes(value),
      default: defaultPropFactory("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: defaultPropFactory("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: defaultPropFactory("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: defaultPropFactory("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: defaultPropFactory("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: defaultPropFactory("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: defaultPropFactory("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: defaultPropFactory("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: defaultPropFactory("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: defaultPropFactory("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: defaultPropFactory("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: defaultPropFactory("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: defaultPropFactory("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: defaultPropFactory("flip")
    },
    shift: {
      type: Boolean,
      default: defaultPropFactory("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: defaultPropFactory("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: defaultPropFactory("noAutoFocus")
    }
  },
  provide() {
    return {
      [PROVIDE_KEY]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [PROVIDE_KEY]: { default: null }
  },
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide === "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: __spreadProps(__spreadValues({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result
      };
    },
    parentPopper() {
      var _a;
      return (_a = this[PROVIDE_KEY]) == null ? void 0 : _a.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var _a, _b;
      return ((_a = this.popperTriggers) == null ? void 0 : _a.includes("hover")) || ((_b = this.popperShowTriggers) == null ? void 0 : _b.includes("hover"));
    }
  },
  watch: __spreadValues(__spreadValues({
    shown: "$_autoShowHide",
    disabled(value) {
      if (value) {
        this.dispose();
      } else {
        this.init();
      }
    },
    async container() {
      if (this.isShown) {
        this.$_ensureTeleport();
        await this.$_computePosition();
      }
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce((acc, prop) => {
    acc[prop] = "$_refreshListeners";
    return acc;
  }, {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce((acc, prop) => {
    acc[prop] = "$_computePosition";
    return acc;
  }, {})),
  created() {
    this.$_isDisposed = true;
    this.randomId = `popper_${[Math.random(), Date.now()].map((n) => n.toString(36).substring(2, 10)).join("_")}`;
    if (this.autoMinSize) {
      console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.');
    }
    if (this.autoMaxSize) {
      console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    }
  },
  mounted() {
    this.init();
    this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeDestroy() {
    this.dispose();
  },
  methods: {
    show({ event = null, skipDelay = false, force = false } = {}) {
      var _a, _b;
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) && this.parentPopper.lockedChild !== this)
        return;
      this.$_pendingHide = false;
      if (force || !this.disabled) {
        if (((_b = this.parentPopper) == null ? void 0 : _b.lockedChild) === this) {
          this.parentPopper.lockedChild = null;
        }
        this.$_scheduleShow(event, skipDelay);
        this.$emit("show");
        this.$_showFrameLocked = true;
        requestAnimationFrame(() => {
          this.$_showFrameLocked = false;
        });
      }
      this.$emit("update:shown", true);
    },
    hide({ event = null, skipDelay = false, skipAiming = false } = {}) {
      var _a;
      if (this.$_hideInProgress)
        return;
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      if (!skipAiming && this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
        if (this.parentPopper) {
          this.parentPopper.lockedChild = this;
          clearTimeout(this.parentPopper.lockedChildTimer);
          this.parentPopper.lockedChildTimer = setTimeout(() => {
            if (this.parentPopper.lockedChild === this) {
              this.parentPopper.lockedChild.hide({ skipDelay });
              this.parentPopper.lockedChild = null;
            }
          }, 1e3);
        }
        return;
      }
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) === this) {
        this.parentPopper.lockedChild = null;
      }
      this.$_pendingHide = false;
      this.$_scheduleHide(event, skipDelay);
      this.$emit("hide");
      this.$emit("update:shown", false);
    },
    init() {
      if (!this.$_isDisposed)
        return;
      this.$_isDisposed = false;
      this.isMounted = false;
      this.$_events = [];
      this.$_preventShow = false;
      this.$_referenceNode = this.referenceNode();
      this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE);
      this.$_popperNode = this.popperNode();
      this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner");
      this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container");
      this.$_swapTargetAttrs("title", "data-original-title");
      this.$_detachPopperNode();
      if (this.triggers.length) {
        this.$_addEventListeners();
      }
      if (this.shown) {
        this.show();
      }
    },
    dispose() {
      if (this.$_isDisposed)
        return;
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({ skipDelay: true });
      this.$_detachPopperNode();
      this.isMounted = false;
      this.isShown = false;
      this.$_updateParentShownChildren(false);
      this.$_swapTargetAttrs("data-original-title", "title");
      this.$emit("dispose");
    },
    async onResize() {
      if (this.isShown) {
        await this.$_computePosition();
        this.$emit("resize");
      }
    },
    async $_computePosition() {
      var _a;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const options2 = {
        strategy: this.strategy,
        middleware: []
      };
      if (this.distance || this.skidding) {
        options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)({
          mainAxis: this.distance,
          crossAxis: this.skidding
        }));
      }
      const isPlacementAuto = this.placement.startsWith("auto");
      if (isPlacementAuto) {
        options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)({
          alignment: (_a = this.placement.split("-")[1]) != null ? _a : ""
        }));
      } else {
        options2.placement = this.placement;
      }
      if (this.preventOverflow) {
        if (this.shift) {
          options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)({
            padding: this.overflowPadding,
            boundary: this.boundary,
            crossAxis: this.shiftCrossAxis
          }));
        }
        if (!isPlacementAuto && this.flip) {
          options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)({
            padding: this.overflowPadding,
            boundary: this.boundary
          }));
        }
      }
      options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      }));
      if (this.arrowOverflow) {
        options2.middleware.push({
          name: "arrowOverflow",
          fn: ({ placement, rects, middlewareData }) => {
            let overflow;
            const { centerOffset } = middlewareData.arrow;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              overflow = Math.abs(centerOffset) > rects.reference.width / 2;
            } else {
              overflow = Math.abs(centerOffset) > rects.reference.height / 2;
            }
            return {
              data: {
                overflow
              }
            };
          }
        });
      }
      if (this.autoMinSize || this.autoSize) {
        const autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        options2.middleware.push({
          name: "autoSize",
          fn: ({ rects, placement, middlewareData }) => {
            var _a2;
            if ((_a2 = middlewareData.autoSize) == null ? void 0 : _a2.skip) {
              return {};
            }
            let width;
            let height;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              width = rects.reference.width;
            } else {
              height = rects.reference.height;
            }
            this.$_innerNode.style[autoSize === "min" ? "minWidth" : autoSize === "max" ? "maxWidth" : "width"] = width != null ? `${width}px` : null;
            this.$_innerNode.style[autoSize === "min" ? "minHeight" : autoSize === "max" ? "maxHeight" : "height"] = height != null ? `${height}px` : null;
            return {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      if (this.autoMaxSize || this.autoBoundaryMaxSize) {
        this.$_innerNode.style.maxWidth = null;
        this.$_innerNode.style.maxHeight = null;
        options2.middleware.push((0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: ({ width, height }) => {
            this.$_innerNode.style.maxWidth = width != null ? `${width}px` : null;
            this.$_innerNode.style.maxHeight = height != null ? `${height}px` : null;
          }
        }));
      }
      const data = await (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.computePosition)(this.$_referenceNode, this.$_popperNode, options2);
      Object.assign(this.result, {
        x: data.x,
        y: data.y,
        placement: data.placement,
        strategy: data.strategy,
        arrow: __spreadValues(__spreadValues({}, data.middlewareData.arrow), data.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(event = null, skipDelay = false) {
      this.$_updateParentShownChildren(true);
      this.$_hideInProgress = false;
      clearTimeout(this.$_scheduleTimer);
      if (hidingPopper && this.instantMove && hidingPopper.instantMove && hidingPopper !== this.parentPopper) {
        hidingPopper.$_applyHide(true);
        this.$_applyShow(true);
        return;
      }
      if (skipDelay) {
        this.$_applyShow();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      }
    },
    $_scheduleHide(event = null, skipDelay = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false);
      this.$_hideInProgress = true;
      clearTimeout(this.$_scheduleTimer);
      if (this.isShown) {
        hidingPopper = this;
      }
      if (skipDelay) {
        this.$_applyHide();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      }
    },
    $_computeDelay(type) {
      const delay = this.delay;
      return parseInt(delay && delay[type] || delay || 0);
    },
    async $_applyShow(skipTransition = false) {
      clearTimeout(this.$_disposeTimer);
      clearTimeout(this.$_scheduleTimer);
      this.skipTransition = skipTransition;
      if (this.isShown) {
        return;
      }
      this.$_ensureTeleport();
      await nextFrame();
      await this.$_computePosition();
      await this.$_applyShowEffect();
      if (!this.positioningDisabled) {
        this.$_registerEventListeners([
          ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getScrollParents)(this.$_referenceNode),
          ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getScrollParents)(this.$_popperNode)
        ], "scroll", () => {
          this.$_computePosition();
        });
      }
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const bounds = this.$_referenceNode.getBoundingClientRect();
        const popperWrapper = this.$_popperNode.querySelector(".v-popper__wrapper");
        const parentBounds = popperWrapper.parentNode.getBoundingClientRect();
        const x = bounds.x + bounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
        const y = bounds.y + bounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
        this.result.transformOrigin = `${x}px ${y}px`;
      }
      this.isShown = true;
      this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const showGroup = this.showGroup;
      if (showGroup) {
        let popover;
        for (let i = 0; i < shownPoppers.length; i++) {
          popover = shownPoppers[i];
          if (popover.showGroup !== showGroup) {
            popover.hide();
            popover.$emit("close-group");
          }
        }
      }
      shownPoppers.push(this);
      document.body.classList.add("v-popper--some-open");
      for (const theme of getAllParentThemes(this.theme)) {
        getShownPoppersByTheme(theme).push(this);
        document.body.classList.add(`v-popper--some-open--${theme}`);
      }
      this.$emit("apply-show");
      this.classes.showFrom = true;
      this.classes.showTo = false;
      this.classes.hideFrom = false;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.showFrom = false;
      this.classes.showTo = true;
      if (!this.noAutoFocus)
        this.$_popperNode.focus();
    },
    async $_applyHide(skipTransition = false) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        this.$_hideInProgress = false;
        return;
      }
      clearTimeout(this.$_scheduleTimer);
      if (!this.isShown) {
        return;
      }
      this.skipTransition = skipTransition;
      removeFromArray(shownPoppers, this);
      if (shownPoppers.length === 0) {
        document.body.classList.remove("v-popper--some-open");
      }
      for (const theme of getAllParentThemes(this.theme)) {
        const list = getShownPoppersByTheme(theme);
        removeFromArray(list, this);
        if (list.length === 0) {
          document.body.classList.remove(`v-popper--some-open--${theme}`);
        }
      }
      if (hidingPopper === this) {
        hidingPopper = null;
      }
      this.isShown = false;
      this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      });
      clearTimeout(this.$_disposeTimer);
      const disposeTime = getDefaultConfig(this.theme, "disposeTimeout");
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(() => {
          if (this.$_popperNode) {
            this.$_detachPopperNode();
            this.isMounted = false;
          }
        }, disposeTime);
      }
      this.$_removeEventListeners("scroll");
      this.$emit("apply-hide");
      this.classes.showFrom = false;
      this.classes.showTo = false;
      this.classes.hideFrom = true;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.hideFrom = false;
      this.classes.hideTo = true;
    },
    $_autoShowHide() {
      if (this.shown) {
        this.show();
      } else {
        this.hide();
      }
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let container = this.container;
      if (typeof container === "string") {
        container = window.document.querySelector(container);
      } else if (container === false) {
        container = this.$_targetNodes[0].parentNode;
      }
      if (!container) {
        throw new Error("No container for popover: " + this.container);
      }
      container.appendChild(this.$_popperNode);
      this.isMounted = true;
    },
    $_addEventListeners() {
      const handleShow = (event) => {
        if (this.isShown && !this.$_hideInProgress) {
          return;
        }
        event.usedByTooltip = true;
        !this.$_preventShow && this.show({ event });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
      this.$_registerTriggerListeners([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
      const handleHide = (skipAiming) => (event) => {
        if (event.usedByTooltip) {
          return;
        }
        this.hide({ event, skipAiming });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide(false));
      this.$_registerTriggerListeners([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide(true));
    },
    $_registerEventListeners(targetNodes, eventType, handler) {
      this.$_events.push({ targetNodes, eventType, handler });
      targetNodes.forEach((node) => node.addEventListener(eventType, handler, supportsPassive ? {
        passive: true
      } : void 0));
    },
    $_registerTriggerListeners(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
      let triggers = commonTriggers;
      if (customTrigger != null) {
        triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
      }
      triggers.forEach((trigger) => {
        const eventType = eventMap[trigger];
        if (eventType) {
          this.$_registerEventListeners(targetNodes, eventType, handler);
        }
      });
    },
    $_removeEventListeners(filterEventType) {
      const newList = [];
      this.$_events.forEach((listener) => {
        const { targetNodes, eventType, handler } = listener;
        if (!filterEventType || filterEventType === eventType) {
          targetNodes.forEach((node) => node.removeEventListener(eventType, handler));
        } else {
          newList.push(listener);
        }
      });
      this.$_events = newList;
    },
    $_refreshListeners() {
      if (!this.$_isDisposed) {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      }
    },
    $_handleGlobalClose(event, touch = false) {
      if (this.$_showFrameLocked)
        return;
      this.hide({ event });
      if (event.closePopover) {
        this.$emit("close-directive");
      } else {
        this.$emit("auto-hide");
      }
      if (touch) {
        this.$_preventShow = true;
        setTimeout(() => {
          this.$_preventShow = false;
        }, 300);
      }
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(attrFrom, attrTo) {
      for (const el of this.$_targetNodes) {
        const value = el.getAttribute(attrFrom);
        if (value) {
          el.removeAttribute(attrFrom);
          el.setAttribute(attrTo, value);
        }
      }
    },
    $_applyAttrsToTarget(attrs) {
      for (const el of this.$_targetNodes) {
        for (const n in attrs) {
          const value = attrs[n];
          if (value == null) {
            el.removeAttribute(n);
          } else {
            el.setAttribute(n, value);
          }
        }
      }
    },
    $_updateParentShownChildren(value) {
      let parent = this.parentPopper;
      while (parent) {
        if (value) {
          parent.shownChildren.add(this.randomId);
        } else {
          parent.shownChildren.delete(this.randomId);
          if (parent.$_pendingHide) {
            parent.hide();
          }
        }
        parent = parent.parentPopper;
      }
    },
    $_isAimingPopper() {
      const referenceBounds = this.$el.getBoundingClientRect();
      if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
        const popperBounds = this.$_popperNode.getBoundingClientRect();
        const vectorX = mouseX - mousePreviousX;
        const vectorY = mouseY - mousePreviousY;
        const distance = popperBounds.left + popperBounds.width / 2 - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY;
        const newVectorLength = distance + popperBounds.width + popperBounds.height;
        const edgeX = mousePreviousX + vectorX * newVectorLength;
        const edgeY = mousePreviousY + vectorY * newVectorLength;
        return lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$scopedSlots.default(this.slotData)[0];
  }
});
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS) {
    document.addEventListener("touchstart", handleGlobalMousedown, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("mousedown", handleGlobalMousedown, true);
    window.addEventListener("click", handleGlobalClick, true);
  }
  window.addEventListener("resize", computePositionAllShownPoppers);
}
function handleGlobalMousedown(event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i];
    try {
      const popperContent = popper.popperNode();
      popper.$_mouseDownContains = popperContent.contains(event.target);
    } catch (e) {
    }
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event, touch = false) {
  const preventClose = {};
  for (let i = shownPoppers.length - 1; i >= 0; i--) {
    const popper = shownPoppers[i];
    try {
      const contains = popper.$_containsGlobalTarget = isContainingEventTarget(popper, event);
      popper.$_pendingHide = false;
      requestAnimationFrame(() => {
        popper.$_pendingHide = false;
        if (preventClose[popper.randomId])
          return;
        if (shouldAutoHide(popper, contains, event)) {
          popper.$_handleGlobalClose(event, touch);
          if (!event.closeAllPopover && event.closePopover && contains) {
            let parent2 = popper.parentPopper;
            while (parent2) {
              preventClose[parent2.randomId] = true;
              parent2 = parent2.parentPopper;
            }
            return;
          }
          let parent = popper.parentPopper;
          while (parent) {
            if (shouldAutoHide(parent, parent.$_containsGlobalTarget, event)) {
              parent.$_handleGlobalClose(event, touch);
            } else {
              break;
            }
            parent = parent.parentPopper;
          }
        }
      });
    } catch (e) {
    }
  }
}
function isContainingEventTarget(popper, event) {
  const popperContent = popper.popperNode();
  return popper.$_mouseDownContains || popperContent.contains(event.target);
}
function shouldAutoHide(popper, contains, event) {
  return event.closeAllPopover || event.closePopover && contains || getAutoHideResult(popper, event) && !contains;
}
function getAutoHideResult(popper, event) {
  if (typeof popper.autoHide === "function") {
    const result = popper.autoHide(event);
    popper.lastAutoHide = result;
    return result;
  }
  return popper.autoHide;
}
function computePositionAllShownPoppers(event) {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i];
    popper.$_computePosition(event);
  }
}
function hideAllPoppers() {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i];
    popper.hide();
  }
}
let mousePreviousX = 0;
let mousePreviousY = 0;
let mouseX = 0;
let mouseY = 0;
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (event) => {
    mousePreviousX = mouseX;
    mousePreviousY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }, supportsPassive ? {
    passive: true
  } : void 0);
}
function lineIntersectsLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
}
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
var isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;
    initCompat();
    this.$nextTick(function() {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;
      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
function normalizeComponent$1(template, style, script2, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== "boolean") {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options2 = typeof script2 === "function" ? script2.options : script2;
  if (template && template.render) {
    options2.render = template.render;
    options2.staticRenderFns = template.staticRenderFns;
    options2._compiled = true;
    if (isFunctionalTemplate) {
      options2.functional = true;
    }
  }
  if (scopeId) {
    options2._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook2(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function(context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function(context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options2.functional) {
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script2;
}
var __vue_script__ = script;
var __vue_render__ = function __vue_render__2() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = "data-v-8859cc6c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
var __vue_component__ = /* @__PURE__ */ normalizeComponent$1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, void 0, void 0, void 0);
function install$1(Vue2) {
  Vue2.component("resize-observer", __vue_component__);
  Vue2.component("ResizeObserver", __vue_component__);
}
var plugin$1 = {
  version: "1.0.1",
  install: install$1
};
var GlobalVue$1 = null;
if (typeof window !== "undefined") {
  GlobalVue$1 = window.Vue;
} else if (typeof __webpack_require__.g !== "undefined") {
  GlobalVue$1 = __webpack_require__.g.Vue;
}
if (GlobalVue$1) {
  GlobalVue$1.use(plugin$1);
}
var PrivateThemeClass = {
  computed: {
    themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};
var __vue2_script$5 = {
  name: "VPopperContent",
  components: {
    ResizeObserver: __vue_component__
  },
  mixins: [
    PrivateThemeClass
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  methods: {
    toPx(value) {
      if (value != null && !isNaN(value)) {
        return `${value}px`;
      }
      return null;
    }
  }
};
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "popover", staticClass: "v-popper__popper", class: [
    _vm.themeClass,
    _vm.classes.popperClass,
    {
      "v-popper__popper--shown": _vm.shown,
      "v-popper__popper--hidden": !_vm.shown,
      "v-popper__popper--show-from": _vm.classes.showFrom,
      "v-popper__popper--show-to": _vm.classes.showTo,
      "v-popper__popper--hide-from": _vm.classes.hideFrom,
      "v-popper__popper--hide-to": _vm.classes.hideTo,
      "v-popper__popper--skip-transition": _vm.skipTransition,
      "v-popper__popper--arrow-overflow": _vm.result && _vm.result.arrow.overflow,
      "v-popper__popper--no-positioning": !_vm.result
    }
  ], style: _vm.result ? {
    position: _vm.result.strategy,
    transform: "translate3d(" + Math.round(_vm.result.x) + "px," + Math.round(_vm.result.y) + "px,0)"
  } : void 0, attrs: { "id": _vm.popperId, "aria-hidden": _vm.shown ? "false" : "true", "tabindex": _vm.autoHide ? 0 : void 0, "data-popper-placement": _vm.result ? _vm.result.placement : void 0 }, on: { "keyup": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
      return null;
    }
    _vm.autoHide && _vm.$emit("hide");
  } } }, [_c("div", { staticClass: "v-popper__backdrop", on: { "click": function($event) {
    _vm.autoHide && _vm.$emit("hide");
  } } }), _c("div", { staticClass: "v-popper__wrapper", style: _vm.result ? {
    transformOrigin: _vm.result.transformOrigin
  } : void 0 }, [_c("div", { ref: "inner", staticClass: "v-popper__inner" }, [_vm.mounted ? [_c("div", [_vm._t("default")], 2), _vm.handleResize ? _c("ResizeObserver", { on: { "notify": function($event) {
    return _vm.$emit("resize", $event);
  } } }) : _vm._e()] : _vm._e()], 2), _c("div", { ref: "arrow", staticClass: "v-popper__arrow-container", style: _vm.result ? {
    left: _vm.toPx(_vm.result.arrow.x),
    top: _vm.toPx(_vm.result.arrow.y)
  } : void 0 }, [_c("div", { staticClass: "v-popper__arrow-outer" }), _c("div", { staticClass: "v-popper__arrow-inner" })])])]);
};
var staticRenderFns$2 = [];
var PopperContent_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options2 = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options2.render = render2;
    options2.staticRenderFns = staticRenderFns2;
    options2._compiled = true;
  }
  if (functionalTemplate) {
    options2.functional = true;
  }
  if (scopeId) {
    options2._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options2.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options2.functional) {
      options2._injectStyles = hook;
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options: options2
  };
}
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$2, staticRenderFns$2, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var PrivatePopperContent = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var PrivatePopperMethods = {
  methods: {
    show(...args) {
      return this.$refs.popper.show(...args);
    },
    hide(...args) {
      return this.$refs.popper.hide(...args);
    },
    dispose(...args) {
      return this.$refs.popper.dispose(...args);
    },
    onResize(...args) {
      return this.$refs.popper.onResize(...args);
    }
  }
};
var __vue2_script$4 = {
  name: "VPopperWrapper",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods,
    PrivateThemeClass
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default() {
        return this.$options.vPopperTheme;
      }
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$refs.reference.children).filter((node) => node !== this.$refs.popperContent.$el);
    }
  }
};
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "target-nodes": _vm.getTargetNodes, "reference-node": function() {
    return _vm.$refs.reference;
  }, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var show = ref.show;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("div", { ref: "reference", staticClass: "v-popper", class: [
      _vm.themeClass,
      {
        "v-popper--shown": isShown
      }
    ] }, [_vm._t("default", null, { "shown": isShown, "show": show, "hide": hide }), _c("PopperContent", { ref: "popperContent", attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm._t("popper", null, { "shown": isShown, "hide": hide })], 2)], 2)];
  } }], null, true) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$1 = [];
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$1, staticRenderFns$1, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var PrivatePopperWrapper = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var __vue2_script$3 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
var Dropdown_vue_vue_type_style_index_0_lang = "";
let __vue2_render$2, __vue2_staticRenderFns$2;
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, __vue2_render$2, __vue2_staticRenderFns$2, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var PrivateDropdown = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var __vue2_script$2 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VMenu",
  vPopperTheme: "menu"
});
let __vue2_render$1, __vue2_staticRenderFns$1;
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, __vue2_render$1, __vue2_staticRenderFns$1, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var PrivateMenu = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var __vue2_script$1 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
var Tooltip_vue_vue_type_style_index_0_lang = "";
let __vue2_render, __vue2_staticRenderFns;
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var PrivateTooltip = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var __vue2_script = {
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default() {
        return getDefaultConfig(this.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default() {
        return getDefaultConfig(this.theme, "loadingContent");
      }
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content === "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent(value) {
      await this.$nextTick();
      this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(force) {
      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        const fetchId = ++this.$_fetchId;
        const result = this.content(this);
        if (result.then) {
          result.then((res) => this.onResult(fetchId, res));
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
};
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, on: { "apply-show": _vm.onShow, "apply-hide": _vm.onHide }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("PopperContent", { ref: "popperContent", class: {
      "v-popper--tooltip-loading": _vm.loading
    }, attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm.html ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.finalContent) } }) : _c("div", { domProps: { "textContent": _vm._s(_vm.finalContent) } })])];
  } }]) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns = [];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var PrivateTooltipDirective = /* @__PURE__ */ function() {
  return __component__.exports;
}();
const TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options2, modifiers) {
  let result = options2.placement;
  if (!result && modifiers) {
    for (const pos of placements) {
      if (modifiers[pos]) {
        result = pos;
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(options2.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  let options2;
  const type = typeof value;
  if (type === "string") {
    options2 = { content: value };
  } else if (value && type === "object") {
    options2 = value;
  } else {
    options2 = { content: false };
  }
  options2.placement = getPlacement(options2, modifiers);
  options2.targetNodes = () => [el];
  options2.referenceNode = () => el;
  return options2;
}
function createTooltip(el, value, modifiers) {
  const options2 = getOptions(el, value, modifiers);
  const tooltipApp = el.$_popper = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
    mixins: [
      PrivatePopperMethods
    ],
    data() {
      return {
        options: options2
      };
    },
    render(h) {
      const _a = this.options, {
        theme,
        html,
        content,
        loadingContent
      } = _a, otherOptions = __objRest(_a, [
        "theme",
        "html",
        "content",
        "loadingContent"
      ]);
      return h(PrivateTooltipDirective, {
        props: {
          theme,
          html,
          content,
          loadingContent
        },
        attrs: otherOptions,
        ref: "popper"
      });
    },
    devtools: {
      hide: true
    }
  });
  const mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  tooltipApp.$mount(mountTarget);
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  return tooltipApp;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.$destroy();
    delete el.$_popper;
    delete el.$_popperOldShown;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, { value, oldValue, modifiers }) {
  const options2 = getOptions(el, value, modifiers);
  if (!options2.content || getDefaultConfig(options2.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    let tooltipApp;
    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options = options2;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  bind,
  update: bind,
  unbind(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  const el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    const touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0];
    const firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  const el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  bind(el, { value, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  update(el, { value, oldValue, modifiers }) {
    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind(el) {
    removeListeners(el);
  }
};
const options = config;
const VTooltip = PrivateVTooltip;
const VClosePopper = PrivateVClosePopper;
const Dropdown = PrivateDropdown;
const Menu = PrivateMenu;
const Popper = PrivatePopper;
const PopperContent = PrivatePopperContent;
const PopperMethods = PrivatePopperMethods;
const PopperWrapper = PrivatePopperWrapper;
const ThemeClass = PrivateThemeClass;
const Tooltip = PrivateTooltip;
const TooltipDirective = PrivateTooltipDirective;
function install(app, options2 = {}) {
  if (app.$_vTooltipInstalled)
    return;
  app.$_vTooltipInstalled = true;
  assign(config, options2);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("v-tooltip", PrivateTooltip);
  app.component("VTooltip", PrivateTooltip);
  app.component("v-dropdown", PrivateDropdown);
  app.component("VDropdown", PrivateDropdown);
  app.component("v-menu", PrivateMenu);
  app.component("VMenu", PrivateMenu);
}
const plugin = {
  version: "1.0.0-beta.19",
  install,
  options: config
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== "undefined") {
  GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}



/***/ }),

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFocusTrap: () => (/* binding */ createFocusTrap)
/* harmony export */ });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 7.4.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};
var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event]
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes
      var focusableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container, config.tabbableOptions);
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          // NOTE: If tabindex is positive (in order to manipulate the tab order separate
          //  from the DOM order), this __will not work__ because the list of focusableNodes,
          //  while it contains tabbable nodes, does not sort its nodes in any order other
          //  than DOM order, because it can't: Where would you place focusable (but not
          //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
          // Support for positive tabindex is already broken and hard to manage (possibly
          //  not supportable, TBD), so this isn't going to make things worse than they
          //  already are, and at least makes things better for the majority of cases where
          //  tabindex is either 0/unset or negative.
          // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
          var nodeIdx = focusableNodes.findIndex(function (n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return undefined;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function (n) {
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target, e) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var target = getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };

  var checkKey = function checkKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
      return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 ? void 0 : onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 ? void 0 : onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 ? void 0 : onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 ? void 0 : onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 ? void 0 : onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 ? void 0 : onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 ? void 0 : onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 ? void 0 : onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: () => (/* binding */ focusable),
/* harmony export */   getTabIndex: () => (/* binding */ getTabIndex),
/* harmony export */   isFocusable: () => (/* binding */ isFocusable),
/* harmony export */   isTabbable: () => (/* binding */ isTabbable),
/* harmony export */   tabbable: () => (/* binding */ tabbable)
/* harmony export */ });
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronLeft.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronLeft.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChevronLeft.vue?vue&type=template&id=737b3c66& */ "./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66&");
/* harmony import */ var _ChevronLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChevronLeft.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChevronLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ChevronLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChevronLeftIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronRight.vue":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronRight.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChevronRight.vue?vue&type=template&id=39316a4d& */ "./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d&");
/* harmony import */ var _ChevronRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChevronRight.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChevronRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ChevronRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChevronRightIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Close.vue":
/*!**********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Close.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Close.vue?vue&type=template&id=3cc2737c& */ "./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c&");
/* harmony import */ var _Close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Close.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Close.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CloseIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/DotsHorizontal.vue":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/DotsHorizontal.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DotsHorizontal.vue?vue&type=template&id=3174c38c& */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c&");
/* harmony import */ var _DotsHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DotsHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DotsHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__.render,
  _DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/DotsHorizontal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DotsHorizontalIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Pause.vue":
/*!**********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Pause.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pause.vue?vue&type=template&id=ea16e70c& */ "./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c&");
/* harmony import */ var _Pause_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pause.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pause_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Pause.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PauseIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Play.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Play.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Play.vue?vue&type=template&id=12215140& */ "./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140&");
/* harmony import */ var _Play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Play.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__.render,
  _Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Play.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PlayIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ChevronLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ChevronLeft.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ChevronLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ChevronRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ChevronRight.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ChevronRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Close.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Close_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_DotsHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./DotsHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_DotsHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Pause.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Play.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronLeft_vue_vue_type_template_id_737b3c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ChevronLeft.vue?vue&type=template&id=737b3c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ChevronRight_vue_vue_type_template_id_39316a4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ChevronRight.vue?vue&type=template&id=39316a4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c&":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Close_vue_vue_type_template_id_3cc2737c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Close.vue?vue&type=template&id=3cc2737c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c&":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_DotsHorizontal_vue_vue_type_template_id_3174c38c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./DotsHorizontal.vue?vue&type=template&id=3174c38c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c&":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Pause_vue_vue_type_template_id_ea16e70c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Pause.vue?vue&type=template&id=ea16e70c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Play_vue_vue_type_template_id_12215140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Play.vue?vue&type=template&id=12215140& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronLeft.vue?vue&type=template&id=737b3c66& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon chevron-left-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ChevronRight.vue?vue&type=template&id=39316a4d& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon chevron-right-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=3cc2737c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon close-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/DotsHorizontal.vue?vue&type=template&id=3174c38c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon dots-horizontal-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Pause.vue?vue&type=template&id=ea16e70c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon pause-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c("path", { attrs: { d: "M14,19H18V5H14M6,19H10V5H6V19Z" } }, [
            _vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Play.vue?vue&type=template&id=12215140& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon play-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c("path", { attrs: { d: "M8,5.14V19.14L19,12.14L8,5.14Z" } }, [
            _vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@vueuse/core/index.cjs":
/*!*********************************************!*\
  !*** ./node_modules/@vueuse/core/index.cjs ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var shared = __webpack_require__(/*! @vueuse/shared */ "./node_modules/@vueuse/shared/index.cjs");
var vueDemi = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.cjs");

function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (vueDemi.isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    shallow = true,
    onError = shared.noop
  } = options;
  const started = vueDemi.ref(!lazy);
  const current = shallow ? vueDemi.shallowRef(initialState) : vueDemi.ref(initialState);
  let counter = 0;
  vueDemi.watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return vueDemi.computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = vueDemi.inject(key);
  if (defaultSource)
    source = vueDemi.inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = vueDemi.inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return vueDemi.computed((ctx) => options(source, ctx));
  } else {
    return vueDemi.computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

var __defProp$q = Object.defineProperty;
var __defProps$d = Object.defineProperties;
var __getOwnPropDescs$d = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$t = Object.getOwnPropertySymbols;
var __hasOwnProp$t = Object.prototype.hasOwnProperty;
var __propIsEnum$t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$q = (obj, key, value) => key in obj ? __defProp$q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$t.call(b, prop))
      __defNormalProp$q(a, prop, b[prop]);
  if (__getOwnPropSymbols$t)
    for (var prop of __getOwnPropSymbols$t(b)) {
      if (__propIsEnum$t.call(b, prop))
        __defNormalProp$q(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$d = (a, b) => __defProps$d(a, __getOwnPropDescs$d(b));
function createReusableTemplate() {
  if (!vueDemi.isVue3 && !vueDemi.version.startsWith("2.7.")) {
    if (true)
      throw new Error("[VueUse] createReusableTemplate only works in Vue 2.7 or above.");
    return;
  }
  const render = vueDemi.shallowRef();
  const define = /* #__PURE__ */ vueDemi.defineComponent({
    setup(_, { slots }) {
      return () => {
        render.value = slots.default;
      };
    }
  });
  const reuse = /* #__PURE__ */ vueDemi.defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      return () => {
        var _a;
        if (!render.value && "development" !== "production")
          throw new Error("[VueUse] Failed to find the definition of reusable template");
        return (_a = render.value) == null ? void 0 : _a.call(render, __spreadProps$d(__spreadValues$q({}, attrs), { $slots: slots }));
      };
    }
  });
  return shared.makeDestructurable(
    { define, reuse },
    [define, reuse]
  );
}

function createTemplatePromise(options = {}) {
  if (!vueDemi.isVue3) {
    if (true)
      throw new Error("[VueUse] createTemplatePromise only works in Vue 3 or above.");
    return;
  }
  let index = 0;
  const instances = vueDemi.ref([]);
  function create(...args) {
    const props = vueDemi.shallowReactive({
      key: index++,
      args,
      promise: void 0,
      resolve: () => {
      },
      reject: () => {
      },
      isResolving: false,
      options
    });
    instances.value.push(props);
    props.promise = new Promise((_resolve, _reject) => {
      props.resolve = (v) => {
        props.isResolving = true;
        return _resolve(v);
      };
      props.reject = _reject;
    }).finally(() => {
      props.promise = void 0;
      const index2 = instances.value.indexOf(props);
      if (index2 !== -1)
        instances.value.splice(index2, 1);
    });
    return props.promise;
  }
  function start(...args) {
    if (options.singleton && instances.value.length > 0)
      return instances.value[0].promise;
    return create(...args);
  }
  const component = /* #__PURE__ */ vueDemi.defineComponent((_, { slots }) => {
    const renderList = () => instances.value.map((props) => {
      var _a;
      return vueDemi.h(vueDemi.Fragment, { key: props.key }, (_a = slots.default) == null ? void 0 : _a.call(slots, props));
    });
    if (options.transition)
      return () => vueDemi.h(vueDemi.TransitionGroup, options.transition, renderList);
    return renderList;
  });
  component.start = start;
  return component;
}

function createUnrefFn(fn) {
  return function(...args) {
    return fn.apply(this, args.map((i) => shared.toValue(i)));
  };
}

function unrefElement(elRef) {
  var _a;
  const plain = shared.toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = shared.isClient ? window : void 0;
const defaultDocument = shared.isClient ? window.document : void 0;
const defaultNavigator = shared.isClient ? window.navigator : void 0;
const defaultLocation = shared.isClient ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return shared.noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = vueDemi.watch(
    () => [unrefElement(target), shared.toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options2));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  shared.tryOnScopeDispose(stop);
  return stop;
}

let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window)
    return;
  if (shared.isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", shared.noop));
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$p = Object.defineProperty;
var __defProps$c = Object.defineProperties;
var __getOwnPropDescs$c = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$s = Object.getOwnPropertySymbols;
var __hasOwnProp$s = Object.prototype.hasOwnProperty;
var __propIsEnum$s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$p = (obj, key, value) => key in obj ? __defProp$p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$s.call(b, prop))
      __defNormalProp$p(a, prop, b[prop]);
  if (__getOwnPropSymbols$s)
    for (var prop of __getOwnPropSymbols$s(b)) {
      if (__propIsEnum$s.call(b, prop))
        __defNormalProp$p(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$c = (a, b) => __defProps$c(a, __getOwnPropDescs$c(b));
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && shared.toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$c(__spreadValues$p({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$c(__spreadValues$p({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$c(__spreadValues$p({}, options), { eventName: "keyup" }));
}

const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
  var _a, _b;
  const elementRef = vueDemi.computed(() => unrefElement(target));
  let timeout;
  function clear() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
  }
  function onDown(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    clear();
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    timeout = setTimeout(
      () => handler(ev),
      (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY
    );
  }
  const listenerOptions = {
    capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
    once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
  };
  useEventListener(elementRef, "pointerdown", onDown, listenerOptions);
  useEventListener(elementRef, "pointerup", clear, listenerOptions);
  useEventListener(elementRef, "pointerleave", clear, listenerOptions);
}

function isFocusedElementEditable() {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
}
function isTypedCharValid({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  if (keyCode >= 97 && keyCode <= 122)
    return true;
  return false;
}
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = vueDemi.getCurrentInstance();
  let _trigger = () => {
  };
  const element = vueDemi.customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  shared.tryOnMounted(_trigger);
  vueDemi.onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  var _a;
  const { window = defaultWindow } = options;
  const document = (_a = options.document) != null ? _a : window == null ? void 0 : window.document;
  const activeElement = shared.computedWithControl(
    () => null,
    () => document == null ? void 0 : document.activeElement
  );
  if (window) {
    useEventListener(window, "blur", (event) => {
      if (event.relatedTarget !== null)
        return;
      activeElement.trigger();
    }, true);
    useEventListener(window, "focus", activeElement.trigger, true);
  }
  return activeElement;
}

function useMounted() {
  const isMounted = vueDemi.ref(false);
  if (vueDemi.getCurrentInstance()) {
    vueDemi.onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}

function useSupported(callback) {
  const isMounted = useMounted();
  return vueDemi.computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = vueDemi.ref(false);
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp) {
    if (!isActive.value || !window)
      return;
    const delta = timestamp - previousFrameTimestamp;
    fn({ delta, timestamp });
    previousFrameTimestamp = timestamp;
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      rafId = window.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  shared.tryOnScopeDispose(pause);
  return {
    isActive: vueDemi.readonly(isActive),
    pause,
    resume
  };
}

function useAnimate(target, keyframes, options) {
  let config;
  let animateOptions;
  if (shared.isObject(options)) {
    config = options;
    animateOptions = shared.objectOmit(options, ["window", "immediate", "commitStyles", "persist", "onReady", "onError"]);
  } else {
    config = { duration: options };
    animateOptions = options;
  }
  const {
    window = defaultWindow,
    immediate = true,
    commitStyles,
    persist,
    playbackRate: _playbackRate = 1,
    onReady,
    onError = (e) => {
      console.error(e);
    }
  } = config;
  const isSupported = useSupported(() => window && HTMLElement && "animate" in HTMLElement.prototype);
  const animate = vueDemi.shallowRef(void 0);
  const store = vueDemi.shallowReactive({
    startTime: null,
    currentTime: null,
    timeline: null,
    playbackRate: _playbackRate,
    pending: false,
    playState: immediate ? "idle" : "paused",
    replaceState: "active"
  });
  const pending = vueDemi.computed(() => store.pending);
  const playState = vueDemi.computed(() => store.playState);
  const replaceState = vueDemi.computed(() => store.replaceState);
  const startTime = vueDemi.computed({
    get() {
      return store.startTime;
    },
    set(value) {
      store.startTime = value;
      if (animate.value)
        animate.value.startTime = value;
    }
  });
  const currentTime = vueDemi.computed({
    get() {
      return store.currentTime;
    },
    set(value) {
      store.currentTime = value;
      if (animate.value) {
        animate.value.currentTime = value;
        syncResume();
      }
    }
  });
  const timeline = vueDemi.computed({
    get() {
      return store.timeline;
    },
    set(value) {
      store.timeline = value;
      if (animate.value)
        animate.value.timeline = value;
    }
  });
  const playbackRate = vueDemi.computed({
    get() {
      return store.playbackRate;
    },
    set(value) {
      store.playbackRate = value;
      if (animate.value)
        animate.value.playbackRate = value;
    }
  });
  const play = () => {
    if (animate.value) {
      try {
        animate.value.play();
        syncResume();
      } catch (e) {
        syncPause();
        onError(e);
      }
    } else {
      update();
    }
  };
  const pause = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.pause();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const reverse = () => {
    var _a;
    !animate.value && update();
    try {
      (_a = animate.value) == null ? void 0 : _a.reverse();
      syncResume();
    } catch (e) {
      syncPause();
      onError(e);
    }
  };
  const finish = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.finish();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  const cancel = () => {
    var _a;
    try {
      (_a = animate.value) == null ? void 0 : _a.cancel();
      syncPause();
    } catch (e) {
      onError(e);
    }
  };
  vueDemi.watch(() => unrefElement(target), (el) => {
    el && update();
  });
  vueDemi.watch(() => keyframes, (value) => {
    !animate.value && update();
    if (!unrefElement(target) && animate.value) {
      animate.value.effect = new KeyframeEffect(
        unrefElement(target),
        shared.toValue(value),
        animateOptions
      );
    }
  }, { deep: true });
  shared.tryOnMounted(() => {
    vueDemi.nextTick(() => update(true));
  });
  shared.tryOnScopeDispose(cancel);
  function update(init) {
    const el = unrefElement(target);
    if (!isSupported.value || !el)
      return;
    animate.value = el.animate(shared.toValue(keyframes), animateOptions);
    if (commitStyles)
      animate.value.commitStyles();
    if (persist)
      animate.value.persist();
    if (_playbackRate !== 1)
      animate.value.playbackRate = _playbackRate;
    if (init && !immediate)
      animate.value.pause();
    else
      syncResume();
    onReady == null ? void 0 : onReady(animate.value);
  }
  useEventListener(animate, "cancel", syncPause);
  useEventListener(animate, "finish", syncPause);
  useEventListener(animate, "remove", syncPause);
  const { resume: resumeRef, pause: pauseRef } = useRafFn(() => {
    if (!animate.value)
      return;
    store.pending = animate.value.pending;
    store.playState = animate.value.playState;
    store.replaceState = animate.value.replaceState;
    store.startTime = animate.value.startTime;
    store.currentTime = animate.value.currentTime;
    store.timeline = animate.value.timeline;
    store.playbackRate = animate.value.playbackRate;
  }, { immediate: false });
  function syncResume() {
    if (isSupported.value)
      resumeRef();
  }
  function syncPause() {
    if (isSupported.value && window)
      window.requestAnimationFrame(pauseRef);
  }
  return {
    isSupported,
    animate,
    // actions
    play,
    pause,
    reverse,
    finish,
    cancel,
    // state
    pending,
    playState,
    replaceState,
    startTime,
    currentTime,
    timeline,
    playbackRate
  };
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = shared.noop,
    onFinished = shared.noop,
    signal
  } = options;
  const promiseState = {
    aborted: "aborted",
    fulfilled: "fulfilled",
    pending: "pending",
    rejected: "rejected"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = vueDemi.reactive(initialResult);
  const activeIndex = vueDemi.ref(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (signal == null ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, new Error("aborted"));
        return;
      }
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      const done = curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
      if (!signal)
        return done;
      return Promise.race([done, whenAborted(signal)]);
    }).catch((e) => {
      if (signal == null ? void 0 : signal.aborted) {
        updateResult(promiseState.aborted, e);
        return e;
      }
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}
function whenAborted(signal) {
  return new Promise((resolve, reject) => {
    const error = new Error("aborted");
    if (signal.aborted)
      reject(error);
    else
      signal.addEventListener("abort", () => reject(error), { once: true });
  });
}

var __defProp$o = Object.defineProperty;
var __defProps$b = Object.defineProperties;
var __getOwnPropDescs$b = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$r = Object.getOwnPropertySymbols;
var __hasOwnProp$r = Object.prototype.hasOwnProperty;
var __propIsEnum$r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$o = (obj, key, value) => key in obj ? __defProp$o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$r.call(b, prop))
      __defNormalProp$o(a, prop, b[prop]);
  if (__getOwnPropSymbols$r)
    for (var prop of __getOwnPropSymbols$r(b)) {
      if (__propIsEnum$r.call(b, prop))
        __defNormalProp$o(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$b = (a, b) => __defProps$b(a, __getOwnPropDescs$b(b));
function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = shared.noop,
    onSuccess = shared.noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? vueDemi.shallowRef(initialState) : vueDemi.ref(initialState);
  const isReady = vueDemi.ref(false);
  const isLoading = vueDemi.ref(false);
  const error = vueDemi.shallowRef(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await shared.promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
      onSuccess(data);
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw e;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      shared.until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return __spreadProps$b(__spreadValues$o({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  });
}

const defaults = {
  array: (v) => JSON.stringify(v),
  object: (v) => JSON.stringify(v),
  set: (v) => JSON.stringify(Array.from(v)),
  map: (v) => JSON.stringify(Object.fromEntries(v)),
  null: () => ""
};
function getDefaultSerialization(target) {
  if (!target)
    return defaults.null;
  if (target instanceof Map)
    return defaults.map;
  else if (target instanceof Set)
    return defaults.set;
  else if (Array.isArray(target))
    return defaults.array;
  else
    return defaults.object;
}

function useBase64(target, options) {
  const base64 = vueDemi.ref("");
  const promise = vueDemi.ref();
  function execute() {
    if (!shared.isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = shared.toValue(target);
        if (_target == null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else if (typeof _target === "object") {
          const _serializeFn = (options == null ? void 0 : options.serializer) || getDefaultSerialization(_target);
          const serialized = _serializeFn(_target);
          return resolve(blobToBase64(new Blob([serialized], { type: "application/json" })));
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  if (vueDemi.isRef(target) || typeof target === "function")
    vueDemi.watch(target, execute, { immediate: true });
  else
    execute();
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = useSupported(() => navigator && "getBattery" in navigator);
  const charging = vueDemi.ref(false);
  const chargingTime = vueDemi.ref(0);
  const dischargingTime = vueDemi.ref(0);
  const level = vueDemi.ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported.value) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useBluetooth(options) {
  let {
    acceptAllDevices = false
  } = options || {};
  const {
    filters = void 0,
    optionalServices = void 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => navigator && "bluetooth" in navigator);
  const device = vueDemi.shallowRef(void 0);
  const error = vueDemi.shallowRef(null);
  vueDemi.watch(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported.value)
      return;
    error.value = null;
    if (filters && filters.length > 0)
      acceptAllDevices = false;
    try {
      device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = vueDemi.ref();
  const isConnected = vueDemi.computed(() => {
    var _a;
    return ((_a = server.value) == null ? void 0 : _a.connected) || false;
  });
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      device.value.addEventListener("gattserverdisconnected", () => {
      });
      try {
        server.value = await device.value.gatt.connect();
      } catch (err) {
        error.value = err;
      }
    }
  }
  shared.tryOnMounted(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.connect();
  });
  shared.tryOnScopeDispose(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.disconnect();
  });
  return {
    isSupported,
    isConnected,
    // Device:
    device,
    requestDevice,
    // Server:
    server,
    // Errors:
    error
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = vueDemi.ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window.matchMedia(shared.toRef(query).value);
    matches.value = !!(mediaQuery == null ? void 0 : mediaQuery.matches);
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  vueDemi.watchEffect(update);
  shared.tryOnScopeDispose(() => cleanup());
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};
const breakpointsMasterCss = {
  "3xs": 360,
  "2xs": 480,
  "xs": 600,
  "sm": 768,
  "md": 1024,
  "lg": 1280,
  "xl": 1440,
  "2xl": 1600,
  "3xl": 1920,
  "4xl": 2560
};

function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = shared.increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greaterOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return Object.assign(shortcutMethods, {
    greater(k) {
      return useMediaQuery(`(min-width: ${getValue(k, 0.1)})`, options);
    },
    greaterOrEqual,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    smallerOrEqual(k) {
      return useMediaQuery(`(max-width: ${getValue(k)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    },
    current() {
      const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
      return vueDemi.computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
    }
  });
}

function useBroadcastChannel(options) {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "BroadcastChannel" in window);
  const isClosed = vueDemi.ref(false);
  const channel = vueDemi.ref();
  const data = vueDemi.ref();
  const error = vueDemi.shallowRef(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported.value) {
    shared.tryOnMounted(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  shared.tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
}

var __defProp$n = Object.defineProperty;
var __getOwnPropSymbols$q = Object.getOwnPropertySymbols;
var __hasOwnProp$q = Object.prototype.hasOwnProperty;
var __propIsEnum$q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$n = (obj, key, value) => key in obj ? __defProp$n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$q.call(b, prop))
      __defNormalProp$n(a, prop, b[prop]);
  if (__getOwnPropSymbols$q)
    for (var prop of __getOwnPropSymbols$q(b)) {
      if (__propIsEnum$q.call(b, prop))
        __defNormalProp$n(a, prop, b[prop]);
    }
  return a;
};
const WRITABLE_PROPERTIES = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function useBrowserLocation({ window = defaultWindow } = {}) {
  const refs = Object.fromEntries(
    WRITABLE_PROPERTIES.map((key) => [key, vueDemi.ref()])
  );
  for (const [key, ref2] of shared.objectEntries(refs)) {
    vueDemi.watch(ref2, (value) => {
      if (!(window == null ? void 0 : window.location) || window.location[key] === value)
        return;
      window.location[key] = value;
    });
  }
  const buildState = (trigger) => {
    var _a;
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { origin } = (window == null ? void 0 : window.location) || {};
    for (const key of WRITABLE_PROPERTIES)
      refs[key].value = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a[key];
    return vueDemi.reactive(__spreadValues$n({
      trigger,
      state: state2,
      length,
      origin
    }, refs));
  };
  const state = vueDemi.ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = vueDemi.ref(refValue.value);
  vueDemi.watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const events = ["copy", "cut"];
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const isSupported = vueDemi.computed(() => isClipboardApiSupported.value || legacy);
  const text = vueDemi.ref("");
  const copied = vueDemi.ref(false);
  const timeout = shared.useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = shared.toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

var __defProp$m = Object.defineProperty;
var __defProps$a = Object.defineProperties;
var __getOwnPropDescs$a = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$p = Object.getOwnPropertySymbols;
var __hasOwnProp$p = Object.prototype.hasOwnProperty;
var __propIsEnum$p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$m = (obj, key, value) => key in obj ? __defProp$m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$p.call(b, prop))
      __defNormalProp$m(a, prop, b[prop]);
  if (__getOwnPropSymbols$p)
    for (var prop of __getOwnPropSymbols$p(b)) {
      if (__propIsEnum$p.call(b, prop))
        __defNormalProp$m(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$a = (a, b) => __defProps$a(a, __getOwnPropDescs$a(b));
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useCloned(source, options = {}) {
  const cloned = vueDemi.ref({});
  const {
    manual,
    clone = cloneFnJSON,
    // watch options
    deep = true,
    immediate = true
  } = options;
  function sync() {
    cloned.value = clone(shared.toValue(source));
  }
  if (!manual && (vueDemi.isRef(source) || typeof source === "function")) {
    vueDemi.watch(source, sync, __spreadProps$a(__spreadValues$m({}, options), {
      deep,
      immediate
    }));
  } else {
    sync();
  }
  return { cloned, sync };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

var __defProp$l = Object.defineProperty;
var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
var __hasOwnProp$o = Object.prototype.hasOwnProperty;
var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$o.call(b, prop))
      __defNormalProp$l(a, prop, b[prop]);
  if (__getOwnPropSymbols$o)
    for (var prop of __getOwnPropSymbols$o(b)) {
      if (__propIsEnum$o.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? vueDemi.shallowRef : vueDemi.ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = shared.toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = shared.pausableWatch(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window && listenToStorageChanges) {
    useEventListener(window, "storage", update);
    useEventListener(window, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window) {
            window.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$l(__spreadValues$l({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        vueDemi.nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$n = Object.getOwnPropertySymbols;
var __hasOwnProp$n = Object.prototype.hasOwnProperty;
var __propIsEnum$n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$n.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$n)
    for (var prop of __getOwnPropSymbols$n(b)) {
      if (__propIsEnum$n.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto,
    disableTransition = true
  } = options;
  const modes = __spreadValues$k({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const system = vueDemi.computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? shared.toRef(initialValue) : useStorage(storageKey, initialValue, storage, { window, listenToStorageChanges }));
  const state = vueDemi.computed(
    () => store.value === "auto" ? system.value : store.value
  );
  const updateHTMLAttrs = getSSRHandler(
    "updateHTMLAttrs",
    (selector2, attribute2, value) => {
      const el = typeof selector2 === "string" ? window == null ? void 0 : window.document.querySelector(selector2) : unrefElement(selector2);
      if (!el)
        return;
      let style;
      if (disableTransition) {
        style = window.document.createElement("style");
        const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        style.appendChild(document.createTextNode(styleString));
        window.document.head.appendChild(style);
      }
      if (attribute2 === "class") {
        const current = value.split(/\s/g);
        Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
          if (current.includes(v))
            el.classList.add(v);
          else
            el.classList.remove(v);
        });
      } else {
        el.setAttribute(attribute2, value);
      }
      if (disableTransition) {
        window.getComputedStyle(style).opacity;
        document.head.removeChild(style);
      }
    }
  );
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  vueDemi.watch(state, onChanged, { flush: "post", immediate: true });
  shared.tryOnMounted(() => onChanged(state.value));
  const auto = vueDemi.computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v) {
      store.value = v;
    }
  });
  try {
    return Object.assign(auto, { store, system, state });
  } catch (e) {
    return auto;
  }
}

function useConfirmDialog(revealed = vueDemi.ref(false)) {
  const confirmHook = shared.createEventHook();
  const cancelHook = shared.createEventHook();
  const revealHook = shared.createEventHook();
  let _resolve = shared.noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: vueDemi.computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = __objRest$3(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "MutationObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = vueDemi.watch(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (isSupported.value && window && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    },
    { immediate: true }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  shared.tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useCssVar(prop, target, options = {}) {
  const { window = defaultWindow, initialValue = "", observe = false } = options;
  const variable = vueDemi.ref(initialValue);
  const elRef = vueDemi.computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  function updateCssVar() {
    var _a;
    const key = shared.toValue(prop);
    const el = shared.toValue(elRef);
    if (el && window) {
      const value = (_a = window.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }
  if (observe) {
    useMutationObserver(elRef, updateCssVar, {
      attributeFilter: ["style", "class"],
      window
    });
  }
  vueDemi.watch(
    [elRef, () => shared.toValue(prop)],
    updateCssVar,
    { immediate: true }
  );
  vueDemi.watch(
    variable,
    (val) => {
      var _a;
      if ((_a = elRef.value) == null ? void 0 : _a.style)
        elRef.value.style.setProperty(shared.toValue(prop), val);
    }
  );
  return variable;
}

function useCurrentElement() {
  const vm = vueDemi.getCurrentInstance();
  const currentElement = shared.computedWithControl(
    () => null,
    () => vm.proxy.$el
  );
  vueDemi.onUpdated(currentElement.trigger);
  vueDemi.onMounted(currentElement.trigger);
  return currentElement;
}

function useCycleList(list, options) {
  const state = vueDemi.shallowRef(getInitialValue());
  const listRef = shared.toRef(list);
  const index = vueDemi.computed({
    get() {
      var _a;
      const targetList = listRef.value;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, targetList) : targetList.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a = options == null ? void 0 : options.fallbackIndex) != null ? _a : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const targetList = listRef.value;
    const length = targetList.length;
    const index2 = (i % length + length) % length;
    const value = targetList[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  function getInitialValue() {
    var _a, _b;
    return (_b = shared.toValue((_a = options == null ? void 0 : options.initialValue) != null ? _a : shared.toValue(list)[0])) != null ? _b : void 0;
  }
  vueDemi.watch(listRef, () => set(index.value));
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$j = Object.defineProperty;
var __defProps$9 = Object.defineProperties;
var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$9 = (a, b) => __defProps$9(a, __getOwnPropDescs$9(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = ""
  } = options;
  const mode = useColorMode(__spreadProps$9(__spreadValues$j({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark", defaultHandler, mode2);
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const isDark = vueDemi.computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      const modeVal = v ? "dark" : "light";
      if (mode.system.value === modeVal)
        mode.value = "auto";
      else
        mode.value = modeVal;
    }
  });
  return isDark;
}

function fnBypass(v) {
  return v;
}
function fnSetSource(source, value) {
  return source.value = value;
}
function defaultDump(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function defaultParse(clone) {
  return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return vueDemi.markRaw({
      snapshot: dump(source.value),
      timestamp: shared.timestamp()
    });
  }
  const last = vueDemi.ref(_createHistoryRecord());
  const undoStack = vueDemi.ref([]);
  const redoStack = vueDemi.ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = vueDemi.computed(() => [last.value, ...undoStack.value]);
  const canUndo = vueDemi.computed(() => undoStack.value.length > 0);
  const canRedo = vueDemi.computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$i = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = shared.pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = shared.watchIgnorable(
    source,
    commit,
    { deep, flush, eventFilter: composedFilter }
  );
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$8(__spreadValues$i({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$8(__spreadValues$i({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$h = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? shared.debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, __spreadProps$7(__spreadValues$h({}, options), { eventFilter: filter }));
  return __spreadValues$h({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = shared.bypassFilter
  } = options;
  const acceleration = vueDemi.ref({ x: null, y: null, z: null });
  const rotationRate = vueDemi.ref({ alpha: null, beta: null, gamma: null });
  const interval = vueDemi.ref(0);
  const accelerationIncludingGravity = vueDemi.ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = shared.createFilterWrapper(
      eventFilter,
      (event) => {
        acceleration.value = event.acceleration;
        accelerationIncludingGravity.value = event.accelerationIncludingGravity;
        rotationRate.value = event.rotationRate;
        interval.value = event.interval;
      }
    );
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "DeviceOrientationEvent" in window);
  const isAbsolute = vueDemi.ref(false);
  const alpha = vueDemi.ref(null);
  const beta = vueDemi.ref(null);
  const gamma = vueDemi.ref(null);
  if (window && isSupported.value) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  const pixelRatio = vueDemi.ref(1);
  if (window) {
    let observe = function() {
      pixelRatio.value = window.devicePixelRatio;
      cleanup();
      media = window.matchMedia(`(resolution: ${pixelRatio.value}dppx)`);
      media.addEventListener("change", observe, { once: true });
    }, cleanup = function() {
      media == null ? void 0 : media.removeEventListener("change", observe);
    };
    let media;
    observe();
    shared.tryOnScopeDispose(cleanup);
  }
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = vueDemi.ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = shared.createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = vueDemi.ref([]);
  const videoInputs = vueDemi.computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = vueDemi.computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = vueDemi.computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  const isSupported = useSupported(() => navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
  const permissionGranted = vueDemi.ref(false);
  let stream;
  async function update() {
    if (!isSupported.value)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
  }
  async function ensurePermissions() {
    if (!isSupported.value)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (isSupported.value) {
    if (requestPermissions)
      ensurePermissions();
    useEventListener(navigator.mediaDevices, "devicechange", update);
    update();
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a;
  const enabled = vueDemi.ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getDisplayMedia;
  });
  const constraint = { audio, video };
  const stream = vueDemi.shallowRef();
  async function _start() {
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  vueDemi.watch(
    enabled,
    (v) => {
      if (v)
        _start();
      else
        _stop();
    },
    { immediate: true }
  );
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return vueDemi.ref("visible");
  const visibility = vueDemi.ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$g = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const {
    pointerTypes,
    preventDefault,
    stopPropagation,
    exact,
    onMove,
    onEnd,
    onStart,
    initialValue,
    axis = "both",
    draggingElement = defaultWindow,
    handle: draggingHandle = target
  } = options;
  const position = vueDemi.ref(
    (_a = shared.toValue(initialValue)) != null ? _a : { x: 0, y: 0 }
  );
  const pressedDelta = vueDemi.ref();
  const filterEvent = (e) => {
    if (pointerTypes)
      return pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (shared.toValue(preventDefault))
      e.preventDefault();
    if (shared.toValue(stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    if (!filterEvent(e))
      return;
    if (shared.toValue(exact) && e.target !== shared.toValue(target))
      return;
    const rect = shared.toValue(target).getBoundingClientRect();
    const pos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    if ((onStart == null ? void 0 : onStart(pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    let { x, y } = position.value;
    if (axis === "x" || axis === "both")
      x = e.clientX - pressedDelta.value.x;
    if (axis === "y" || axis === "both")
      y = e.clientY - pressedDelta.value.y;
    position.value = {
      x,
      y
    };
    onMove == null ? void 0 : onMove(position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    onEnd == null ? void 0 : onEnd(position.value, e);
    handleEvent(e);
  };
  if (shared.isClient) {
    const config = { capture: (_b = options.capture) != null ? _b : true };
    useEventListener(draggingHandle, "pointerdown", start, config);
    useEventListener(draggingElement, "pointermove", move, config);
    useEventListener(draggingElement, "pointerup", end, config);
  }
  return __spreadProps$6(__spreadValues$g({}, shared.toRefs(position)), {
    position,
    isDragging: vueDemi.computed(() => !!pressedDelta.value),
    style: vueDemi.computed(
      () => `left:${position.value.x}px;top:${position.value.y}px;`
    )
  });
}

function useDropZone(target, onDrop) {
  const isOverDropZone = vueDemi.ref(false);
  let counter = 0;
  if (shared.isClient) {
    useEventListener(target, "dragenter", (event) => {
      event.preventDefault();
      counter += 1;
      isOverDropZone.value = true;
    });
    useEventListener(target, "dragover", (event) => {
      event.preventDefault();
    });
    useEventListener(target, "dragleave", (event) => {
      event.preventDefault();
      counter -= 1;
      if (counter === 0)
        isOverDropZone.value = false;
    });
    useEventListener(target, "drop", (event) => {
      var _a, _b;
      event.preventDefault();
      counter = 0;
      isOverDropZone.value = false;
      const files = Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []);
      onDrop == null ? void 0 : onDrop(files.length === 0 ? null : files);
    });
  }
  return {
    isOverDropZone
  };
}

var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = vueDemi.computed(
    () => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]
  );
  const stopWatch = vueDemi.watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post", deep: true }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  shared.tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true
  } = options;
  const height = vueDemi.ref(0);
  const bottom = vueDemi.ref(0);
  const left = vueDemi.ref(0);
  const right = vueDemi.ref(0);
  const top = vueDemi.ref(0);
  const width = vueDemi.ref(0);
  const x = vueDemi.ref(0);
  const y = vueDemi.ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  vueDemi.watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { capture: true, passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  shared.tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

var __defProp$f = Object.defineProperty;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const {
    x,
    y,
    document = defaultDocument,
    multiple,
    interval = "requestAnimationFrame",
    immediate = true
  } = options;
  const isSupported = useSupported(() => {
    if (shared.toValue(multiple))
      return document && "elementsFromPoint" in document;
    return document && "elementFromPoint" in document;
  });
  const element = vueDemi.ref(null);
  const cb = () => {
    var _a, _b;
    element.value = shared.toValue(multiple) ? (_a = document == null ? void 0 : document.elementsFromPoint(shared.toValue(x), shared.toValue(y))) != null ? _a : [] : (_b = document == null ? void 0 : document.elementFromPoint(shared.toValue(x), shared.toValue(y))) != null ? _b : null;
  };
  const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : shared.useIntervalFn(cb, interval, { immediate });
  return __spreadValues$f({
    isSupported,
    element
  }, controls);
}

function useElementHover(el, options = {}) {
  const {
    delayEnter = 0,
    delayLeave = 0,
    window = defaultWindow
  } = options;
  const isHovered = vueDemi.ref(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay)
      timer = setTimeout(() => isHovered.value = entering, delay);
    else
      isHovered.value = entering;
  };
  if (!window)
    return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window = defaultWindow, box = "content-box" } = options;
  const isSVG = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = vueDemi.ref(initialSize.width);
  const height = vueDemi.ref(initialSize.height);
  useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const styles = window.getComputedStyle($elem);
          width.value = Number.parseFloat(styles.width);
          height.value = Number.parseFloat(styles.height);
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  vueDemi.watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  return {
    width,
    height
  };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  const targets = vueDemi.computed(() => {
    const _target = shared.toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(shared.notNullish);
  });
  let cleanup = shared.noop;
  const isActive = vueDemi.ref(immediate);
  const stopWatch = isSupported.value ? vueDemi.watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = shared.noop;
      };
    },
    { immediate, flush: "post" }
  ) : shared.noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  shared.tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = vueDemi.ref(false);
  useIntersectionObserver(
    element,
    ([{ isIntersecting }]) => {
      elementIsVisible.value = isIntersecting;
    },
    {
      root: scrollTarget,
      window
    }
  );
  return elementIsVisible;
}

const events = /* @__PURE__ */ new Map();

function useEventBus(key) {
  const scope = vueDemi.getCurrentScope();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    listeners.delete(listener);
    if (!listeners.size)
      reset();
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = vueDemi.ref(null);
  const data = vueDemi.ref(null);
  const status = vueDemi.ref("CONNECTING");
  const eventSource = vueDemi.ref(null);
  const error = vueDemi.shallowRef(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  shared.tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = useSupported(() => typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = vueDemi.ref(initialValue);
  async function open(openOptions) {
    if (!isSupported.value)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = shared.toRef(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  vueDemi.watch(
    favicon,
    (i, o) => {
      if (typeof i === "string" && i !== o)
        applyIcon(i);
    },
    { immediate: true }
  );
  return favicon;
}

var __defProp$e = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain"
};
function isFetchOptions(obj) {
  return obj && shared.containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch");
}
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function combineCallbacks(combination, ...callbacks) {
  if (combination === "overwrite") {
    return async (ctx) => {
      const callback = callbacks[callbacks.length - 1];
      if (callback)
        return __spreadValues$e(__spreadValues$e({}, ctx), await callback(ctx));
      return ctx;
    };
  } else {
    return async (ctx) => {
      for (const callback of callbacks) {
        if (callback)
          ctx = __spreadValues$e(__spreadValues$e({}, ctx), await callback(ctx));
      }
      return ctx;
    };
  }
}
function createFetch(config = {}) {
  const _combination = config.combination || "chain";
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = vueDemi.computed(() => {
      const baseUrl = shared.toValue(config.baseUrl);
      const targetUrl = shared.toValue(url);
      return baseUrl && !isAbsoluteURL(targetUrl) ? joinPaths(baseUrl, targetUrl) : targetUrl;
    });
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadProps$5(__spreadValues$e(__spreadValues$e({}, options), args[0]), {
          beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[0].beforeFetch),
          afterFetch: combineCallbacks(_combination, _options.afterFetch, args[0].afterFetch),
          onFetchError: combineCallbacks(_combination, _options.onFetchError, args[0].onFetchError)
        });
      } else {
        fetchOptions = __spreadProps$5(__spreadValues$e(__spreadValues$e({}, fetchOptions), args[0]), {
          headers: __spreadValues$e(__spreadValues$e({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1])) {
      options = __spreadProps$5(__spreadValues$e(__spreadValues$e({}, options), args[1]), {
        beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[1].beforeFetch),
        afterFetch: combineCallbacks(_combination, _options.afterFetch, args[1].afterFetch),
        onFetchError: combineCallbacks(_combination, _options.onFetchError, args[1].onFetchError)
      });
    }
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$e(__spreadValues$e({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$e(__spreadValues$e({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = shared.createEventHook();
  const errorEvent = shared.createEventHook();
  const finallyEvent = shared.createEventHook();
  const isFinished = vueDemi.ref(false);
  const isFetching = vueDemi.ref(false);
  const aborted = vueDemi.ref(false);
  const statusCode = vueDemi.ref(null);
  const response = vueDemi.shallowRef(null);
  const error = vueDemi.shallowRef(null);
  const data = vueDemi.shallowRef(initialData || null);
  const canAbort = vueDemi.computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort) {
      controller == null ? void 0 : controller.abort();
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = __spreadProps$5(__spreadValues$e({}, fetchOptions), {
        signal: controller.signal
      });
    }
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = shared.useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    abort();
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      const payload = shared.toValue(config.payload);
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(payload) : payload;
    }
    let isCanceled = false;
    const context = {
      url: shared.toValue(url),
      options: __spreadValues$e(__spreadValues$e({}, defaultFetchOptions), fetchOptions),
      cancel: () => {
        isCanceled = true;
      }
    };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(
        context.url,
        __spreadProps$5(__spreadValues$e(__spreadValues$e({}, defaultFetchOptions), context.options), {
          headers: __spreadValues$e(__spreadValues$e({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
        })
      ).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (!fetchResponse.ok) {
          data.value = initialData || null;
          throw new Error(fetchResponse.statusText);
        }
        if (options.afterFetch)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ error: errorData } = await options.onFetchError({ data: responseData, error: fetchError, response: response.value }));
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  const refetch = shared.toRef(options.refetch);
  vueDemi.watch(
    [
      refetch,
      shared.toRef(url)
    ],
    ([refetch2]) => refetch2 && execute(),
    { deep: true }
  );
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    // method
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    // type
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (vueDemi.isRef(config.payload)) {
          vueDemi.watch(
            [
              refetch,
              shared.toRef(config.payload)
            ],
            ([refetch2]) => refetch2 && execute(),
            { deep: true }
          );
        }
        const rawPayload = shared.toValue(config.payload);
        if (!payloadType && rawPayload && Object.getPrototypeOf(rawPayload) === Object.prototype && !(rawPayload instanceof FormData))
          config.payloadType = "json";
        return __spreadProps$5(__spreadValues$e({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      shared.until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return __spreadProps$5(__spreadValues$e({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    Promise.resolve().then(() => execute());
  return __spreadProps$5(__spreadValues$e({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

var __defProp$d = Object.defineProperty;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*",
  reset: false
};
function useFileDialog(options = {}) {
  const {
    document = defaultDocument
  } = options;
  const files = vueDemi.ref(null);
  const { on: onChange, trigger } = shared.createEventHook();
  let input;
  if (document) {
    input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
      trigger(files.value);
    };
  }
  const reset = () => {
    files.value = null;
    if (input)
      input.value = "";
  };
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = __spreadValues$d(__spreadValues$d(__spreadValues$d({}, DEFAULT_OPTIONS), options), localOptions);
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    if (shared.hasOwn(_options, "capture"))
      input.capture = _options.capture;
    if (_options.reset)
      reset();
    input.click();
  };
  return {
    files: vueDemi.readonly(files),
    open,
    reset,
    onChange
  };
}

var __defProp$c = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = options;
  const window = _window;
  const isSupported = useSupported(() => window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = vueDemi.ref();
  const data = vueDemi.ref();
  const file = vueDemi.ref();
  const fileName = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported.value)
      return;
    const [handle] = await window.showOpenFilePicker(__spreadValues$c(__spreadValues$c({}, shared.toValue(options)), _options));
    fileHandle.value = handle;
    await updateFile();
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$c(__spreadValues$c({}, options), _options));
    data.value = void 0;
    await updateFile();
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported.value)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$c(__spreadValues$c({}, options), _options));
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    const type = shared.toValue(dataType);
    if (type === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    else if (type === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    else if (type === "Blob")
      data.value = file.value;
  }
  vueDemi.watch(() => shared.toValue(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const innerFocused = vueDemi.ref(false);
  const targetElement = vueDemi.computed(() => unrefElement(target));
  useEventListener(targetElement, "focus", () => innerFocused.value = true);
  useEventListener(targetElement, "blur", () => innerFocused.value = false);
  const focused = vueDemi.computed({
    get: () => innerFocused.value,
    set(value) {
      var _a, _b;
      if (!value && innerFocused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      else if (value && !innerFocused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  vueDemi.watch(
    targetElement,
    () => {
      focused.value = initialValue;
    },
    { immediate: true, flush: "post" }
  );
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = vueDemi.computed(() => unrefElement(target));
  const focused = vueDemi.computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = vueDemi.ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const {
    document = defaultDocument,
    autoExit = false
  } = options;
  const targetRef = vueDemi.computed(() => {
    var _a;
    return (_a = unrefElement(target)) != null ? _a : document == null ? void 0 : document.querySelector("html");
  });
  const isFullscreen = vueDemi.ref(false);
  const requestMethod = vueDemi.computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const exitMethod = vueDemi.computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const fullscreenEnabled = vueDemi.computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m) => document && m in document || targetRef.value && m in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m) => document && m in document);
  const isSupported = useSupported(
    () => targetRef.value && document && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0
  );
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document == null ? void 0 : document[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document && document[fullscreenEnabled.value] != null) {
        return document[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value)
      return;
    if (exitMethod.value) {
      if ((document == null ? void 0 : document[exitMethod.value]) != null) {
        await document[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    shared.tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

var __defProp$b = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function mapGamepadToXbox360Controller(gamepad) {
  return vueDemi.computed(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "getGamepads" in navigator);
  const gamepads = vueDemi.ref([]);
  const onConnectedHook = shared.createEventHook();
  const onDisconnectedHook = shared.createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return __spreadProps$4(__spreadValues$b({}, gamepad), {
      id: gamepad.id,
      hapticActuators,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    });
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (let i = 0; i < _gamepads.length; ++i) {
      const gamepad = _gamepads[i];
      if (gamepad) {
        const index = gamepads.value.findIndex(({ index: index2 }) => index2 === gamepad.index);
        if (index > -1)
          gamepads.value[index] = stateFromGamepad(gamepad);
      }
    }
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  shared.tryOnMounted(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    if (_gamepads) {
      for (let i = 0; i < _gamepads.length; ++i) {
        const gamepad = _gamepads[i];
        if (gamepad)
          onGamepadConnected(gamepad);
      }
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator,
    immediate = true
  } = options;
  const isSupported = useSupported(() => navigator && "geolocation" in navigator);
  const locatedAt = vueDemi.ref(null);
  const error = vueDemi.shallowRef(null);
  const coords = vueDemi.ref({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  function resume() {
    if (isSupported.value) {
      watcher = navigator.geolocation.watchPosition(
        updatePosition,
        (err) => error.value = err,
        {
          enableHighAccuracy,
          maximumAge,
          timeout
        }
      );
    }
  }
  if (immediate)
    resume();
  function pause() {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  }
  shared.tryOnScopeDispose(() => {
    pause();
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error,
    resume,
    pause
  };
}

const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = shared.throttleFilter(50)
  } = options;
  const idle = vueDemi.ref(initialState);
  const lastActive = vueDemi.ref(shared.timestamp());
  let timer;
  const reset = () => {
    idle.value = false;
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  };
  const onEvent = shared.createFilterWrapper(
    eventFilter,
    () => {
      lastActive.value = shared.timestamp();
      reset();
    }
  );
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
    reset();
  }
  return {
    idle,
    lastActive,
    reset
  };
}

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    if (clazz)
      img.className = clazz;
    if (loading)
      img.loading = loading;
    if (crossorigin)
      img.crossOrigin = crossorigin;
    if (referrerPolicy)
      img.referrerPolicy = referrerPolicy;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
function useImage(options, asyncStateOptions = {}) {
  const state = useAsyncState(
    () => loadImage(shared.toValue(options)),
    void 0,
    __spreadValues$a({
      resetOnExecute: true
    }, asyncStateOptions)
  );
  vueDemi.watch(
    () => shared.toValue(options),
    () => state.execute(asyncStateOptions.delay),
    { deep: true }
  );
  return state;
}

const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = shared.noop,
    onScroll = shared.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto"
  } = options;
  const internalX = vueDemi.ref(0);
  const internalY = vueDemi.ref(0);
  const x = vueDemi.computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y = vueDemi.computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo(void 0, y2);
    }
  });
  function scrollTo(_x, _y) {
    var _a, _b, _c;
    const _element = shared.toValue(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a = shared.toValue(_y)) != null ? _a : y.value,
      left: (_b = shared.toValue(_x)) != null ? _b : x.value,
      behavior: shared.toValue(behavior)
    });
  }
  const isScrolling = vueDemi.ref(false);
  const arrivedState = vueDemi.reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = vueDemi.reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = shared.useDebounceFn(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    const el = target === window ? target.document.documentElement : target === document ? target.documentElement : target;
    const { display, flexDirection } = getComputedStyle(el);
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft) <= 0 + (offset.left || 0);
    const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === document && !scrollTop)
      scrollTop = document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= 0 + (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    const eventTarget = e.target === document ? e.target.documentElement : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle ? shared.useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler,
    eventListenerOptions
  );
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = shared.toValue(element);
      if (_element)
        setArrivedState(_element);
    }
  };
}

var __defProp$9 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a;
  const {
    direction = "bottom",
    interval = 100
  } = options;
  const state = vueDemi.reactive(useScroll(
    element,
    __spreadProps$3(__spreadValues$9({}, options), {
      offset: __spreadValues$9({
        [direction]: (_a = options.distance) != null ? _a : 0
      }, options.offset)
    })
  ));
  const promise = vueDemi.ref();
  const isLoading = vueDemi.computed(() => !!promise.value);
  function checkAndLoad() {
    state.measure();
    const el = shared.toValue(element);
    if (!el)
      return;
    const isNarrower = direction === "bottom" || direction === "top" ? el.scrollHeight <= el.clientHeight : el.scrollWidth <= el.clientWidth;
    if (state.arrivedState[direction] || isNarrower) {
      if (!promise.value) {
        promise.value = Promise.all([
          onLoadMore(state),
          new Promise((resolve) => setTimeout(resolve, interval))
        ]).finally(() => {
          promise.value = null;
          vueDemi.nextTick(() => checkAndLoad());
        });
      }
    }
  }
  vueDemi.watch(
    () => [state.arrivedState[direction], shared.toValue(element)],
    checkAndLoad,
    { immediate: true }
  );
  return {
    isLoading
  };
}

const defaultEvents = ["mousedown", "mouseup", "keydown", "keyup"];
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = vueDemi.ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = shared.noop
  } = options;
  const current = vueDemi.reactive(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? vueDemi.reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    current.clear();
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(
    refs,
    {
      get(target2, prop, rec) {
        if (typeof prop !== "string")
          return Reflect.get(target2, prop, rec);
        prop = prop.toLowerCase();
        if (prop in aliasMap)
          prop = aliasMap[prop];
        if (!(prop in refs)) {
          if (/[+_-]/.test(prop)) {
            const keys = prop.split(/[+_-]/g).map((i) => i.trim());
            refs[prop] = vueDemi.computed(() => keys.every((key) => shared.toValue(proxy[key])));
          } else {
            refs[prop] = vueDemi.ref(false);
          }
        }
        const r = Reflect.get(target2, prop, rec);
        return useReactive ? shared.toValue(r) : r;
      }
    }
  );
  return proxy;
}

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (shared.toValue(source))
    cb(shared.toValue(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = __spreadValues$8(__spreadValues$8({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = vueDemi.ref(0);
  const duration = vueDemi.ref(0);
  const seeking = vueDemi.ref(false);
  const volume = vueDemi.ref(1);
  const waiting = vueDemi.ref(false);
  const ended = vueDemi.ref(false);
  const playing = vueDemi.ref(false);
  const rate = vueDemi.ref(1);
  const stalled = vueDemi.ref(false);
  const buffered = vueDemi.ref([]);
  const tracks = vueDemi.ref([]);
  const selectedTrack = vueDemi.ref(-1);
  const isPictureInPicture = vueDemi.ref(false);
  const muted = vueDemi.ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = shared.createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = typeof track === "number" ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = typeof track === "number" ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  vueDemi.watchEffect(() => {
    if (!document)
      return;
    const el = shared.toValue(target);
    if (!el)
      return;
    const src = shared.toValue(options.src);
    let sources = [];
    if (!src)
      return;
    if (typeof src === "string")
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (shared.isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  shared.tryOnScopeDispose(() => {
    const el = shared.toValue(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  vueDemi.watch([target, volume], () => {
    const el = shared.toValue(target);
    if (!el)
      return;
    el.volume = volume.value;
  });
  vueDemi.watch([target, muted], () => {
    const el = shared.toValue(target);
    if (!el)
      return;
    el.muted = muted.value;
  });
  vueDemi.watch([target, rate], () => {
    const el = shared.toValue(target);
    if (!el)
      return;
    el.playbackRate = rate.value;
  });
  vueDemi.watchEffect(() => {
    if (!document)
      return;
    const textTracks = shared.toValue(options.tracks);
    const el = shared.toValue(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = shared.watchIgnorable(currentTime, (time) => {
    const el = shared.toValue(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = shared.watchIgnorable(playing, (isPlaying) => {
    const el = shared.toValue(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = shared.toValue(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = shared.toValue(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(shared.toValue(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, ["waiting", "loadstart"], () => {
    waiting.value = true;
    ignorePlayingUpdates(() => playing.value = false);
  });
  useEventListener(target, "loadeddata", () => waiting.value = false);
  useEventListener(target, "playing", () => {
    waiting.value = false;
    ended.value = false;
    ignorePlayingUpdates(() => playing.value = true);
  });
  useEventListener(target, "ratechange", () => rate.value = shared.toValue(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = shared.toValue(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = vueDemi.watch([target], () => {
    const el = shared.toValue(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  shared.tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    // Volume
    volume,
    muted,
    // Tracks
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    // Picture in Picture
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    // Events
    onSourceError: sourceErrorEvent.on
  };
}

function getMapVue2Compat() {
  const data = vueDemi.reactive({});
  return {
    get: (key) => data[key],
    set: (key, value) => vueDemi.set(data, key, value),
    has: (key) => shared.hasOwn(data, key),
    delete: (key) => vueDemi.del(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        vueDemi.del(data, key);
      });
    }
  };
}
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return vueDemi.reactive(options.cache);
    if (vueDemi.isVue2)
      return getMapVue2Compat();
    return vueDemi.reactive(/* @__PURE__ */ new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = vueDemi.ref();
  const isSupported = useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    shared.useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

const BuiltinExtractors = {
  page: (event) => [event.pageX, event.pageY],
  client: (event) => [event.clientX, event.clientY],
  screen: (event) => [event.screenX, event.screenY],
  movement: (event) => event instanceof Touch ? null : [event.movementX, event.movementY]
};
function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    target = window,
    eventFilter
  } = options;
  const x = vueDemi.ref(initialValue.x);
  const y = vueDemi.ref(initialValue.y);
  const sourceType = vueDemi.ref(null);
  const extractor = typeof type === "function" ? type : BuiltinExtractors[type];
  const mouseHandler = (event) => {
    const result = extractor(event);
    if (result) {
      [x.value, y.value] = result;
      sourceType.value = "mouse";
    }
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const result = extractor(event.touches[0]);
      if (result) {
        [x.value, y.value] = result;
        sourceType.value = "touch";
      }
    }
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const mouseHandlerWrapper = eventFilter ? (event) => eventFilter(() => mouseHandler(event), {}) : (event) => mouseHandler(event);
  const touchHandlerWrapper = eventFilter ? (event) => eventFilter(() => touchHandler(event), {}) : (event) => touchHandler(event);
  if (target) {
    useEventListener(target, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(target, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch && type !== "movement") {
      useEventListener(target, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(target, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(target, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = vueDemi.ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = vueDemi.ref(0);
  const elementY = vueDemi.ref(0);
  const elementPositionX = vueDemi.ref(0);
  const elementPositionY = vueDemi.ref(0);
  const elementHeight = vueDemi.ref(0);
  const elementWidth = vueDemi.ref(0);
  const isOutside = vueDemi.ref(true);
  let stop = () => {
  };
  if (window) {
    stop = vueDemi.watch(
      [targetRef, x, y],
      () => {
        const el = unrefElement(targetRef);
        if (!el)
          return;
        const {
          left,
          top,
          width,
          height
        } = el.getBoundingClientRect();
        elementPositionX.value = left + window.pageXOffset;
        elementPositionY.value = top + window.pageYOffset;
        elementHeight.value = height;
        elementWidth.value = width;
        const elX = x.value - elementPositionX.value;
        const elY = y.value - elementPositionY.value;
        isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
        if (handleOutside || !isOutside.value) {
          elementX.value = elX;
          elementY.value = elY;
        }
      },
      { immediate: true }
    );
    useEventListener(document, "mouseleave", () => {
      isOutside.value = true;
    });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = vueDemi.ref(initialValue);
  const sourceType = vueDemi.ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = vueDemi.computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

function useNavigatorLanguage(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "language" in navigator);
  const language = vueDemi.ref(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
}

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "connection" in navigator);
  const isOnline = vueDemi.ref(true);
  const saveData = vueDemi.ref(false);
  const offlineAt = vueDemi.ref(void 0);
  const onlineAt = vueDemi.ref(void 0);
  const downlink = vueDemi.ref(void 0);
  const downlinkMax = vueDemi.ref(void 0);
  const rtt = vueDemi.ref(void 0);
  const effectiveType = vueDemi.ref(void 0);
  const type = vueDemi.ref("unknown");
  const connection = isSupported.value && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = vueDemi.ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : shared.useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$7({
      now
    }, controls);
  } else {
    return now;
  }
}

function useObjectUrl(object) {
  const url = vueDemi.ref();
  const release = () => {
    if (url.value)
      URL.revokeObjectURL(url.value);
    url.value = void 0;
  };
  vueDemi.watch(
    () => shared.toValue(object),
    (newObject) => {
      release();
      if (newObject)
        url.value = URL.createObjectURL(newObject);
    },
    { immediate: true }
  );
  shared.tryOnScopeDispose(release);
  return vueDemi.readonly(url);
}

function useClamp(value, min, max) {
  if (typeof value === "function" || vueDemi.isReadonly(value))
    return vueDemi.computed(() => shared.clamp(shared.toValue(value), shared.toValue(min), shared.toValue(max)));
  const _value = vueDemi.ref(value);
  return vueDemi.computed({
    get() {
      return _value.value = shared.clamp(_value.value, shared.toValue(min), shared.toValue(max));
    },
    set(value2) {
      _value.value = shared.clamp(value2, shared.toValue(min), shared.toValue(max));
    }
  });
}

function useOffsetPagination(options) {
  const {
    total = Infinity,
    pageSize = 10,
    page = 1,
    onPageChange = shared.noop,
    onPageSizeChange = shared.noop,
    onPageCountChange = shared.noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Infinity);
  const pageCount = vueDemi.computed(() => Math.max(
    1,
    Math.ceil(shared.toValue(total) / shared.toValue(currentPageSize))
  ));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = vueDemi.computed(() => currentPage.value === 1);
  const isLastPage = vueDemi.computed(() => currentPage.value === pageCount.value);
  if (vueDemi.isRef(page))
    shared.syncRef(page, currentPage);
  if (vueDemi.isRef(pageSize))
    shared.syncRef(pageSize, currentPageSize);
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  vueDemi.watch(currentPage, () => {
    onPageChange(vueDemi.reactive(returnValue));
  });
  vueDemi.watch(currentPageSize, () => {
    onPageSizeChange(vueDemi.reactive(returnValue));
  });
  vueDemi.watch(pageCount, () => {
    onPageCountChange(vueDemi.reactive(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = vueDemi.ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = vueDemi.reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = vueDemi.computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = vueDemi.computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = vueDemi.computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

function useParentElement(element = useCurrentElement()) {
  const parentElement = vueDemi.shallowRef();
  const update = () => {
    const el = unrefElement(element);
    if (el)
      parentElement.value = el.parentElement;
  };
  shared.tryOnMounted(update);
  vueDemi.watch(() => shared.toValue(element), update);
  return parentElement;
}

var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function usePerformanceObserver(options, callback) {
  const _a = options, {
    window = defaultWindow,
    immediate = true
  } = _a, performanceOptions = __objRest$1(_a, [
    "window",
    "immediate"
  ]);
  const isSupported = useSupported(() => window && "PerformanceObserver" in window);
  let observer;
  const stop = () => {
    observer == null ? void 0 : observer.disconnect();
  };
  const start = () => {
    if (isSupported.value) {
      stop();
      observer = new PerformanceObserver(callback);
      observer.observe(performanceOptions);
    }
  };
  shared.tryOnScopeDispose(stop);
  if (immediate)
    start();
  return {
    isSupported,
    start,
    stop
  };
}

var __defProp$6 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = vueDemi.ref(false);
  const state = vueDemi.ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = shared.objectPick(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return __spreadProps$2(__spreadValues$6({}, shared.toRefs(state)), {
    isInside
  });
}

function usePointerLock(target, options = {}) {
  const { document = defaultDocument, pointerLockOptions } = options;
  const isSupported = useSupported(() => document && "pointerLockElement" in document);
  const element = vueDemi.ref();
  const triggerElement = vueDemi.ref();
  let targetElement;
  if (isSupported.value) {
    useEventListener(document, "pointerlockchange", () => {
      var _a;
      const currentElement = (_a = document.pointerLockElement) != null ? _a : element.value;
      if (targetElement && currentElement === targetElement) {
        element.value = document.pointerLockElement;
        if (!element.value)
          targetElement = triggerElement.value = null;
      }
    });
    useEventListener(document, "pointerlockerror", () => {
      var _a;
      const currentElement = (_a = document.pointerLockElement) != null ? _a : element.value;
      if (targetElement && currentElement === targetElement) {
        const action = document.pointerLockElement ? "release" : "acquire";
        throw new Error(`Failed to ${action} pointer lock.`);
      }
    });
  }
  async function lock(e, options2) {
    var _a;
    if (!isSupported.value)
      throw new Error("Pointer Lock API is not supported by your browser.");
    triggerElement.value = e instanceof Event ? e.currentTarget : null;
    targetElement = e instanceof Event ? (_a = unrefElement(target)) != null ? _a : triggerElement.value : unrefElement(e);
    if (!targetElement)
      throw new Error("Target element undefined.");
    targetElement.requestPointerLock(options2 != null ? options2 : pointerLockOptions);
    return await shared.until(element).toBe(targetElement);
  }
  async function unlock() {
    if (!element.value)
      return false;
    document.exitPointerLock();
    await shared.until(element).toBeNull();
    return true;
  }
  return {
    isSupported,
    element,
    triggerElement,
    lock,
    unlock
  };
}

function usePointerSwipe(target, options = {}) {
  const targetRef = shared.toRef(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = vueDemi.reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = vueDemi.reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = vueDemi.computed(() => posStart.x - posEnd.x);
  const distanceY = vueDemi.computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = vueDemi.computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = vueDemi.ref(false);
  const isPointerDown = vueDemi.ref(false);
  const direction = vueDemi.computed(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? "left" : "right";
    } else {
      return distanceY.value > 0 ? "up" : "down";
    }
  });
  const eventIsAllowed = (e) => {
    var _a, _b, _c;
    const isReleasingButton = e.buttons === 0;
    const isPrimaryButton = e.buttons === 1;
    return (_c = (_b = (_a = options.pointerTypes) == null ? void 0 : _a.includes(e.pointerType)) != null ? _b : isReleasingButton || isPrimaryButton) != null ? _c : true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!eventIsAllowed(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!eventIsAllowed(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!eventIsAllowed(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: vueDemi.readonly(isSwiping),
    direction: vueDemi.readonly(direction),
    posStart: vueDemi.readonly(posStart),
    posEnd: vueDemi.readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return vueDemi.computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredContrast(options) {
  const isMore = useMediaQuery("(prefers-contrast: more)", options);
  const isLess = useMediaQuery("(prefers-contrast: less)", options);
  const isCustom = useMediaQuery("(prefers-contrast: custom)", options);
  return vueDemi.computed(() => {
    if (isMore.value)
      return "more";
    if (isLess.value)
      return "less";
    if (isCustom.value)
      return "custom";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return vueDemi.ref(["en"]);
  const navigator = window.navigator;
  const value = vueDemi.ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return vueDemi.computed(() => {
    if (isReduced.value)
      return "reduce";
    return "no-preference";
  });
}

function usePrevious(value, initialValue) {
  const previous = vueDemi.shallowRef(initialValue);
  vueDemi.watch(
    shared.toRef(value),
    (_, oldValue) => {
      previous.value = oldValue;
    },
    { flush: "sync" }
  );
  return vueDemi.readonly(previous);
}

function useScreenOrientation(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "screen" in window && "orientation" in window.screen);
  const screenOrientation = isSupported.value ? window.screen.orientation : {};
  const orientation = vueDemi.ref(screenOrientation.type);
  const angle = vueDemi.ref(screenOrientation.angle || 0);
  if (isSupported.value) {
    useEventListener(window, "orientationchange", () => {
      orientation.value = screenOrientation.type;
      angle.value = screenOrientation.angle;
    });
  }
  const lockOrientation = (type) => {
    if (!isSupported.value)
      return Promise.reject(new Error("Not supported"));
    return screenOrientation.lock(type);
  };
  const unlockOrientation = () => {
    if (isSupported.value)
      screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
}

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = vueDemi.ref("");
  const right = vueDemi.ref("");
  const bottom = vueDemi.ref("");
  const left = vueDemi.ref("");
  if (shared.isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", shared.useDebounceFn(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = shared.noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = vueDemi.ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${shared.toValue(src)}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = shared.toValue(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${shared.toValue(src)}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    shared.tryOnMounted(load);
  if (!manual)
    shared.tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = vueDemi.ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  vueDemi.watch(shared.toRef(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = shared.toValue(element);
    if (!ele || isLocked.value)
      return;
    if (shared.isIOS) {
      stopTouchMoveListener = useEventListener(
        ele,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = shared.toValue(element);
    if (!ele || !isLocked.value)
      return;
    shared.isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  shared.tryOnScopeDispose(unlock);
  return vueDemi.computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = __spreadValues$5(__spreadValues$5({}, shared.toValue(shareOptions)), shared.toValue(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

const defaultSortFn = (source, compareFn) => source.sort(compareFn);
const defaultCompare = (a, b) => a - b;
function useSorted(...args) {
  var _a, _b, _c, _d;
  const [source] = args;
  let compareFn = defaultCompare;
  let options = {};
  if (args.length === 2) {
    if (typeof args[1] === "object") {
      options = args[1];
      compareFn = (_a = options.compareFn) != null ? _a : defaultCompare;
    } else {
      compareFn = (_b = args[1]) != null ? _b : defaultCompare;
    }
  } else if (args.length > 2) {
    compareFn = (_c = args[1]) != null ? _c : defaultCompare;
    options = (_d = args[2]) != null ? _d : {};
  }
  const {
    dirty = false,
    sortFn = defaultSortFn
  } = options;
  if (!dirty)
    return vueDemi.computed(() => sortFn([...shared.toValue(source)], compareFn));
  vueDemi.watchEffect(() => {
    const result = sortFn(shared.toValue(source), compareFn);
    if (vueDemi.isRef(source))
      source.value = result;
    else
      source.splice(0, source.length, ...result);
  });
  return source;
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = shared.toRef(options.lang || "en-US");
  const isListening = vueDemi.ref(false);
  const isFinal = vueDemi.ref(false);
  const result = vueDemi.ref("");
  const error = vueDemi.shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = useSupported(() => SpeechRecognition);
  let recognition;
  if (isSupported.value) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = shared.toValue(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    vueDemi.watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = shared.toValue(lang);
    };
    vueDemi.watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  shared.tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = useSupported(() => synth);
  const isPlaying = vueDemi.ref(false);
  const status = vueDemi.ref("init");
  const spokenText = shared.toRef(text || "");
  const lang = shared.toRef(options.lang || "en-US");
  const error = vueDemi.shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = shared.toValue(lang);
    utterance2.voice = shared.toValue(options.voice) || null;
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
  };
  const utterance = vueDemi.computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  const stop = () => {
    synth.cancel();
    isPlaying.value = false;
  };
  if (isSupported.value) {
    bindEventsForUtterance(utterance.value);
    vueDemi.watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    if (options.voice) {
      vueDemi.watch(options.voice, () => {
        synth.cancel();
      });
    }
    vueDemi.watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  shared.tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    utterance,
    error,
    stop,
    toggle,
    speak
  };
}

function useStepper(steps, initialStep) {
  const stepsRef = vueDemi.ref(steps);
  const stepNames = vueDemi.computed(() => Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
  const index = vueDemi.ref(stepNames.value.indexOf(initialStep != null ? initialStep : stepNames.value[0]));
  const current = vueDemi.computed(() => at(index.value));
  const isFirst = vueDemi.computed(() => index.value === 0);
  const isLast = vueDemi.computed(() => index.value === stepNames.value.length - 1);
  const next = vueDemi.computed(() => stepNames.value[index.value + 1]);
  const previous = vueDemi.computed(() => stepNames.value[index.value - 1]);
  function at(index2) {
    if (Array.isArray(stepsRef.value))
      return stepsRef.value[index2];
    return stepsRef.value[stepNames.value[index2]];
  }
  function get(step) {
    if (!stepNames.value.includes(step))
      return;
    return at(stepNames.value.indexOf(step));
  }
  function goTo(step) {
    if (stepNames.value.includes(step))
      index.value = stepNames.value.indexOf(step);
  }
  function goToNext() {
    if (isLast.value)
      return;
    index.value++;
  }
  function goToPrevious() {
    if (isFirst.value)
      return;
    index.value--;
  }
  function goBackTo(step) {
    if (isAfter(step))
      goTo(step);
  }
  function isNext(step) {
    return stepNames.value.indexOf(step) === index.value + 1;
  }
  function isPrevious(step) {
    return stepNames.value.indexOf(step) === index.value - 1;
  }
  function isCurrent(step) {
    return stepNames.value.indexOf(step) === index.value;
  }
  function isBefore(step) {
    return index.value < stepNames.value.indexOf(step);
  }
  function isAfter(step) {
    return index.value > stepNames.value.indexOf(step);
  }
  return {
    steps: stepsRef,
    stepNames,
    index,
    current,
    next,
    previous,
    isFirst,
    isLast,
    at,
    get,
    goTo,
    goToNext,
    goToPrevious,
    goBackTo,
    isNext,
    isPrevious,
    isCurrent,
    isBefore,
    isAfter
  };
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = shared.toValue(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? vueDemi.shallowRef : vueDemi.ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else if (mergeDefaults) {
        const value = await serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          data.value = mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          data.value = __spreadValues$4(__spreadValues$4({}, rawInit), value);
        else
          data.value = value;
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => Promise.resolve().then(() => read(e)));
  if (storage) {
    shared.watchWithFilter(
      data,
      async () => {
        try {
          if (data.value == null)
            await storage.removeItem(key);
          else
            await storage.setItem(key, await serializer.write(data.value));
        } catch (e) {
          onError(e);
        }
      },
      {
        flush,
        deep,
        eventFilter
      }
    );
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = vueDemi.ref(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = vueDemi.ref(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    if (!el.isConnected) {
      el.type = "text/css";
      el.id = id;
      if (options.media)
        el.media = options.media;
      document.head.appendChild(el);
    }
    if (isLoaded.value)
      return;
    stop = vueDemi.watch(
      cssRef,
      (value) => {
        el.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    shared.tryOnMounted(load);
  if (!manual)
    shared.tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: vueDemi.readonly(isLoaded)
  };
}

function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = vueDemi.reactive({ x: 0, y: 0 });
  const coordsEnd = vueDemi.reactive({ x: 0, y: 0 });
  const diffX = vueDemi.computed(() => coordsStart.x - coordsEnd.x);
  const diffY = vueDemi.computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = vueDemi.computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = vueDemi.ref(false);
  const direction = vueDemi.computed(() => {
    if (!isThresholdExceeded.value)
      return "none";
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "left" : "right";
    } else {
      return diffY.value > 0 ? "up" : "down";
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (e.touches.length !== 1)
        return;
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      if (e.touches.length !== 1)
        return;
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", shared.noop, optionsBlock);
  document.removeEventListener("x", shared.noop);
  return supportsPassive;
}

function useTemplateRefsList() {
  const refs = vueDemi.ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  vueDemi.onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

function useTextDirection(options = {}) {
  const {
    document = defaultDocument,
    selector = "html",
    observe = false,
    initialValue = "ltr"
  } = options;
  function getValue() {
    var _a, _b;
    return (_b = (_a = document == null ? void 0 : document.querySelector(selector)) == null ? void 0 : _a.getAttribute("dir")) != null ? _b : initialValue;
  }
  const dir = vueDemi.ref(getValue());
  shared.tryOnMounted(() => dir.value = getValue());
  if (observe && document) {
    useMutationObserver(
      document.querySelector(selector),
      () => dir.value = getValue(),
      { attributes: true }
    );
  }
  return vueDemi.computed({
    get() {
      return dir.value;
    },
    set(v) {
      var _a, _b;
      dir.value = v;
      if (!document)
        return;
      if (dir.value)
        (_a = document.querySelector(selector)) == null ? void 0 : _a.setAttribute("dir", dir.value);
      else
        (_b = document.querySelector(selector)) == null ? void 0 : _b.removeAttribute("dir");
    }
  });
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  const ranges = new Array(rangeCount);
  for (let i = 0; i < rangeCount; i++) {
    const range = selection.getRangeAt(i);
    ranges[i] = range;
  }
  return ranges;
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = vueDemi.ref(null);
  const text = vueDemi.computed(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = vueDemi.computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = vueDemi.computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

function useTextareaAutosize(options) {
  const textarea = vueDemi.ref(options == null ? void 0 : options.element);
  const input = vueDemi.ref(options == null ? void 0 : options.input);
  const textareaScrollHeight = vueDemi.ref(1);
  function triggerResize() {
    var _a, _b;
    if (!textarea.value)
      return;
    let height = "";
    textarea.value.style.height = "1px";
    textareaScrollHeight.value = (_a = textarea.value) == null ? void 0 : _a.scrollHeight;
    if (options == null ? void 0 : options.styleTarget)
      shared.toValue(options.styleTarget).style.height = `${textareaScrollHeight.value}px`;
    else
      height = `${textareaScrollHeight.value}px`;
    textarea.value.style.height = height;
    (_b = options == null ? void 0 : options.onResize) == null ? void 0 : _b.call(options);
  }
  vueDemi.watch([input, textarea], () => vueDemi.nextTick(triggerResize), { immediate: true });
  useResizeObserver(textarea, () => triggerResize());
  if (options == null ? void 0 : options.watch)
    vueDemi.watch(options.watch, triggerResize, { immediate: true, deep: true });
  return {
    textarea,
    input,
    triggerResize
  };
}

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = shared.throttleFilter(throttle, trailing);
  const history = useRefHistory(source, __spreadProps$1(__spreadValues$3({}, options), { eventFilter: filter }));
  return __spreadValues$3({}, history);
}

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`,
  invalid: ""
};
function DEFAULT_FORMATTER(date) {
  return date.toISOString().slice(0, 10);
}
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    updateInterval = 3e4
  } = options;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  const timeAgo = vueDemi.computed(() => formatTimeAgo(new Date(shared.toValue(time)), options, shared.toValue(now)));
  if (exposeControls) {
    return __spreadValues$2({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
  var _a;
  const {
    max,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
    units = DEFAULT_UNITS,
    showSecond = false,
    rounding = "round"
  } = options;
  const roundFn = typeof rounding === "number" ? (n) => +n.toFixed(rounding) : Math[rounding];
  const diff = +now - +from;
  const absDiff = Math.abs(diff);
  function getValue(diff2, unit) {
    return roundFn(Math.abs(diff2) / unit.value);
  }
  function format(diff2, unit) {
    const val = getValue(diff2, unit);
    const past = diff2 > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  if (absDiff < 6e4 && !showSecond)
    return messages.justNow;
  if (typeof max === "number" && absDiff > max)
    return fullDateFormatter(new Date(from));
  if (typeof max === "string") {
    const unitMax = (_a = units.find((i) => i.name === max)) == null ? void 0 : _a.max;
    if (unitMax && absDiff > unitMax)
      return fullDateFormatter(new Date(from));
  }
  for (const [idx, unit] of units.entries()) {
    const val = getValue(diff, unit);
    if (val <= 0 && units[idx - 1])
      return format(diff, units[idx - 1]);
    if (absDiff < unit.max)
      return format(diff, unit);
  }
  return messages.invalid;
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = shared.useTimeoutFn(loop, interval);
  const isActive = vueDemi.ref(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  shared.tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame",
    callback
  } = options;
  const ts = vueDemi.ref(shared.timestamp() + offset);
  const update = () => ts.value = shared.timestamp() + offset;
  const cb = callback ? () => {
    update();
    callback(ts.value);
  } : update;
  const controls = interval === "requestAnimationFrame" ? useRafFn(cb, { immediate }) : shared.useIntervalFn(cb, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$1({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument
  } = options;
  const title = shared.toRef((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  const isReadonly = newTitle && typeof newTitle === "function";
  function format(t) {
    if (!("titleTemplate" in options))
      return t;
    const template = options.titleTemplate || "%s";
    return typeof template === "function" ? template(t) : shared.toValue(template).replace(/%s/g, t);
  }
  vueDemi.watch(
    title,
    (t, o) => {
      if (t !== o && document)
        document.title = format(typeof t === "string" ? t : "");
    },
    { immediate: true }
  );
  if (options.observe && !options.titleTemplate && document && !isReadonly) {
    useMutationObserver(
      (_b = document.head) == null ? void 0 : _b.querySelector("title"),
      () => {
        if (document && document.title !== title.value)
          title.value = format(document.title);
      },
      { childList: true }
    );
  }
  return title;
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
const TransitionPresets = /* @__PURE__ */ Object.assign({}, { linear: shared.identity }, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}
function toVec(t) {
  return (typeof t === "number" ? [t] : t) || [];
}
function executeTransition(source, from, to, options = {}) {
  var _a, _b;
  const fromVal = shared.toValue(from);
  const toVal = shared.toValue(to);
  const v1 = toVec(fromVal);
  const v2 = toVec(toVal);
  const duration = (_a = shared.toValue(options.duration)) != null ? _a : 1e3;
  const startedAt = Date.now();
  const endAt = Date.now() + duration;
  const trans = typeof options.transition === "function" ? options.transition : (_b = shared.toValue(options.transition)) != null ? _b : shared.identity;
  const ease = typeof trans === "function" ? trans : createEasingFunction(trans);
  return new Promise((resolve) => {
    source.value = fromVal;
    const tick = () => {
      var _a2;
      if ((_a2 = options.abort) == null ? void 0 : _a2.call(options)) {
        resolve();
        return;
      }
      const now = Date.now();
      const alpha = ease((now - startedAt) / duration);
      const arr = toVec(source.value).map((n, i) => lerp(v1[i], v2[i], alpha));
      if (Array.isArray(source.value))
        source.value = arr.map((n, i) => {
          var _a3, _b2;
          return lerp((_a3 = v1[i]) != null ? _a3 : 0, (_b2 = v2[i]) != null ? _b2 : 0, alpha);
        });
      else if (typeof source.value === "number")
        source.value = arr[0];
      if (now < endAt) {
        requestAnimationFrame(tick);
      } else {
        source.value = toVal;
        resolve();
      }
    };
    tick();
  });
}
function useTransition(source, options = {}) {
  let currentId = 0;
  const sourceVal = () => {
    const v = shared.toValue(source);
    return typeof v === "number" ? v : v.map(shared.toValue);
  };
  const outputRef = vueDemi.ref(sourceVal());
  vueDemi.watch(sourceVal, async (to) => {
    var _a, _b;
    if (shared.toValue(options.disabled))
      return;
    const id = ++currentId;
    if (options.delay)
      await shared.promiseTimeout(shared.toValue(options.delay));
    if (id !== currentId)
      return;
    const toVal = Array.isArray(to) ? to.map(shared.toValue) : shared.toValue(to);
    (_a = options.onStarted) == null ? void 0 : _a.call(options);
    await executeTransition(outputRef, outputRef.value, toVal, __spreadProps(__spreadValues({}, options), {
      abort: () => {
        var _a2;
        return id !== currentId || ((_a2 = options.abort) == null ? void 0 : _a2.call(options));
      }
    }));
    (_b = options.onFinished) == null ? void 0 : _b.call(options);
  }, { deep: true });
  vueDemi.watch(() => shared.toValue(options.disabled), (disabled) => {
    if (disabled) {
      currentId++;
      outputRef.value = sourceVal();
    }
  });
  shared.tryOnScopeDispose(() => {
    currentId++;
  });
  return vueDemi.computed(() => shared.toValue(options.disabled) ? sourceVal() : outputRef.value);
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    write: enableWrite = true,
    window = defaultWindow
  } = options;
  if (!window)
    return vueDemi.reactive(initialValue);
  const state = vueDemi.reactive({});
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${window.location.hash || ""}`;
    if (mode === "hash-params")
      return `${window.location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = shared.pausableWatch(
    state,
    () => {
      const params = new URLSearchParams("");
      Object.keys(state).forEach((key) => {
        const mapEntry = state[key];
        if (Array.isArray(mapEntry))
          mapEntry.forEach((value) => params.append(key, value));
        else if (removeNullishValues && mapEntry == null)
          params.delete(key);
        else if (removeFalsyValues && !mapEntry)
          params.delete(key);
        else
          params.set(key, mapEntry);
      });
      write(params);
    },
    { deep: true }
  );
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState(
      window.history.state,
      window.document.title,
      window.location.pathname + constructQuery(params)
    );
    resume();
  }
  function onChanged() {
    if (!enableWrite)
      return;
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  const initial = read();
  if (initial.keys().next().value)
    updateState(initial);
  else
    Object.assign(state, initialValue);
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b;
  const enabled = vueDemi.ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = vueDemi.ref((_b = options.autoSwitch) != null ? _b : true);
  const constraints = vueDemi.ref(options.constraints);
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getUserMedia;
  });
  const stream = vueDemi.shallowRef();
  function getDeviceOptions(type) {
    switch (type) {
      case "video": {
        if (constraints.value)
          return constraints.value.video || false;
        break;
      }
      case "audio": {
        if (constraints.value)
          return constraints.value.audio || false;
        break;
      }
    }
  }
  async function _start() {
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions("video"),
      audio: getDeviceOptions("audio")
    });
    return stream.value;
  }
  function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  vueDemi.watch(
    enabled,
    (v) => {
      if (v)
        _start();
      else
        _stop();
    },
    { immediate: true }
  );
  vueDemi.watch(
    constraints,
    () => {
      if (autoSwitch.value && stream.value)
        restart();
    },
    { immediate: true }
  );
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    constraints,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c, _d, _e;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = vueDemi.getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    if (vueDemi.isVue2) {
      const modelOptions = (_e = (_d = vm == null ? void 0 : vm.proxy) == null ? void 0 : _d.$options) == null ? void 0 : _e.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => shared.isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = vueDemi.ref(initialValue);
    vueDemi.watch(
      () => props[key],
      (v) => proxy.value = cloneFn(v)
    );
    vueDemi.watch(
      proxy,
      (v) => {
        if (v !== props[key] || deep)
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return vueDemi.computed({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => typeof navigator !== "undefined" && "vibrate" in navigator);
  const patternRef = shared.toRef(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported.value)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported.value)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = shared.useIntervalFn(
      vibrate,
      interval,
      {
        immediate: false,
        immediateCallback: false
      }
    );
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const { containerStyle, wrapperProps, scrollTo, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}
function useVirtualListResources(list) {
  const containerRef = vueDemi.ref(null);
  const size = useElementSize(containerRef);
  const currentList = vueDemi.ref([]);
  const source = vueDemi.shallowRef(list);
  const state = vueDemi.ref({ start: 0, end: 10 });
  return { state, source, currentList, size, containerRef };
}
function createGetViewCapacity(state, source, itemSize) {
  return (containerSize) => {
    if (typeof itemSize === "number")
      return Math.ceil(containerSize / itemSize);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      capacity = i;
      if (sum > containerSize)
        break;
    }
    return capacity - start;
  };
}
function createGetOffset(source, itemSize) {
  return (scrollDirection) => {
    if (typeof itemSize === "number")
      return Math.floor(scrollDirection / itemSize) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      if (sum >= scrollDirection) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
  return () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
      const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
}
function createGetDistance(itemSize, source) {
  return (index) => {
    if (typeof itemSize === "number") {
      const size2 = index * itemSize;
      return size2;
    }
    const size = source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
    return size;
  };
}
function useWatchForSizes(size, list, calculateRange) {
  vueDemi.watch([size.width, size.height, list], () => {
    calculateRange();
  });
}
function createComputedTotalSize(itemSize, source) {
  return vueDemi.computed(() => {
    if (typeof itemSize === "number")
      return source.value.length * itemSize;
    return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
  });
}
const scrollToDictionaryForElementScrollKey = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
  return (index) => {
    if (containerRef.value) {
      containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
      calculateRange();
    }
  };
}
function useHorizontalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowX: "auto" };
  const { itemWidth, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
  const getOffset = createGetOffset(source, itemWidth);
  const calculateRange = createCalculateRange("horizontal", overscan, getOffset, getViewCapacity, resources);
  const getDistanceLeft = createGetDistance(itemWidth, source);
  const offsetLeft = vueDemi.computed(() => getDistanceLeft(state.value.start));
  const totalWidth = createComputedTotalSize(itemWidth, source);
  useWatchForSizes(size, list, calculateRange);
  const scrollTo = createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef);
  const wrapperProps = vueDemi.computed(() => {
    return {
      style: {
        height: "100%",
        width: `${totalWidth.value - offsetLeft.value}px`,
        marginLeft: `${offsetLeft.value}px`,
        display: "flex"
      }
    };
  });
  return {
    scrollTo,
    calculateRange,
    wrapperProps,
    containerStyle,
    currentList,
    containerRef
  };
}
function useVerticalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowY: "auto" };
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
  const getOffset = createGetOffset(source, itemHeight);
  const calculateRange = createCalculateRange("vertical", overscan, getOffset, getViewCapacity, resources);
  const getDistanceTop = createGetDistance(itemHeight, source);
  const offsetTop = vueDemi.computed(() => getDistanceTop(state.value.start));
  const totalHeight = createComputedTotalSize(itemHeight, source);
  useWatchForSizes(size, list, calculateRange);
  const scrollTo = createScrollTo("vertical", calculateRange, getDistanceTop, containerRef);
  const wrapperProps = vueDemi.computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  return {
    calculateRange,
    scrollTo,
    containerStyle,
    wrapperProps,
    currentList,
    containerRef
  };
}

function useWakeLock(options = {}) {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = useSupported(() => navigator && "wakeLock" in navigator);
  const isActive = vueDemi.ref(false);
  async function onVisibilityChange() {
    if (!isSupported.value || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported.value)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported.value || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
}

function useWebNotification(defaultOptions = {}) {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = useSupported(() => !!window && "Notification" in window);
  const notification = vueDemi.ref(null);
  const requestPermission = async () => {
    if (!isSupported.value)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const { on: onClick, trigger: clickTrigger } = shared.createEventHook();
  const { on: onShow, trigger: showTrigger } = shared.createEventHook();
  const { on: onError, trigger: errorTrigger } = shared.createEventHook();
  const { on: onClose, trigger: closeTrigger } = shared.createEventHook();
  const show = async (overrides) => {
    if (!isSupported.value)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = clickTrigger;
    notification.value.onshow = showTrigger;
    notification.value.onerror = errorTrigger;
    notification.value.onclose = closeTrigger;
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  shared.tryOnMounted(async () => {
    if (isSupported.value)
      await requestPermission();
  });
  shared.tryOnScopeDispose(close);
  if (isSupported.value && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
}

const DEFAULT_PING_MESSAGE = "ping";
function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = vueDemi.ref(null);
  const status = vueDemi.ref("CLOSED");
  const wsRef = vueDemi.ref();
  const urlRef = shared.toRef(url);
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  let pongTimeoutWait;
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const resetHeartbeat = () => {
    clearTimeout(pongTimeoutWait);
    pongTimeoutWait = void 0;
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === "undefined")
      return;
    const ws = new WebSocket(urlRef.value, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      if (options.heartbeat) {
        resetHeartbeat();
        const {
          message = DEFAULT_PING_MESSAGE
        } = resolveNestedOptions(options.heartbeat);
        if (e.data === message)
          return;
      }
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = DEFAULT_PING_MESSAGE,
      interval = 1e3,
      pongTimeout = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = shared.useIntervalFn(
      () => {
        send(message, false);
        if (pongTimeoutWait != null)
          return;
        pongTimeoutWait = setTimeout(() => {
          close();
        }, pongTimeout);
      },
      interval,
      { immediate: false }
    );
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    shared.tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    explicitlyClosed = false;
    retried = 0;
    _init();
  };
  if (immediate)
    vueDemi.watch(urlRef, open, { immediate: true });
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(arg0, workerOptions, options) {
  const {
    window = defaultWindow
  } = options != null ? options : {};
  const data = vueDemi.ref(null);
  const worker = vueDemi.shallowRef();
  const post = (...args) => {
    if (!worker.value)
      return;
    worker.value.postMessage(...args);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    if (typeof arg0 === "string")
      worker.value = new Worker(arg0, workerOptions);
    else if (typeof arg0 === "function")
      worker.value = arg0();
    else
      worker.value = arg0;
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    shared.tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

function jobRunner(userFunc) {
  return (e) => {
    const userFuncArgs = e.data[0];
    return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
      postMessage(["SUCCESS", result]);
    }).catch((error) => {
      postMessage(["ERROR", error]);
    });
  };
}

function depsParser(deps) {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
}

function createWorkerBlobUrl(fn, deps) {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
}

function useWebWorkerFn(fn, options = {}) {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = vueDemi.ref();
  const workerStatus = vueDemi.ref("PENDING");
  const promise = vueDemi.ref({});
  const timeoutId = vueDemi.ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  shared.tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(
        () => workerTerminate("TIMEOUT_EXPIRED"),
        timeout
      );
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error(
        "[useWebWorkerFn] You can only run one instance of the worker at a time."
      );
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
}

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return vueDemi.ref(false);
  const focused = vueDemi.ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: vueDemi.ref(0),
      y: vueDemi.ref(0)
    };
  }
  const x = vueDemi.ref(window.scrollX);
  const y = vueDemi.ref(window.scrollY);
  useEventListener(
    window,
    "scroll",
    () => {
      x.value = window.scrollX;
      y.value = window.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = vueDemi.ref(initialWidth);
  const height = vueDemi.ref(initialHeight);
  const update = () => {
    if (window) {
      if (includeScrollbar) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      } else {
        width.value = window.document.documentElement.clientWidth;
        height.value = window.document.documentElement.clientHeight;
      }
    }
  };
  update();
  shared.tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    vueDemi.watch(matches, () => update());
  }
  return { width, height };
}

exports.DefaultMagicKeysAliasMap = DefaultMagicKeysAliasMap;
exports.StorageSerializers = StorageSerializers;
exports.TransitionPresets = TransitionPresets;
exports.asyncComputed = computedAsync;
exports.breakpointsAntDesign = breakpointsAntDesign;
exports.breakpointsBootstrapV5 = breakpointsBootstrapV5;
exports.breakpointsMasterCss = breakpointsMasterCss;
exports.breakpointsQuasar = breakpointsQuasar;
exports.breakpointsSematic = breakpointsSematic;
exports.breakpointsTailwind = breakpointsTailwind;
exports.breakpointsVuetify = breakpointsVuetify;
exports.cloneFnJSON = cloneFnJSON;
exports.computedAsync = computedAsync;
exports.computedInject = computedInject;
exports.createFetch = createFetch;
exports.createReusableTemplate = createReusableTemplate;
exports.createTemplatePromise = createTemplatePromise;
exports.createUnrefFn = createUnrefFn;
exports.customStorageEventName = customStorageEventName;
exports.defaultDocument = defaultDocument;
exports.defaultLocation = defaultLocation;
exports.defaultNavigator = defaultNavigator;
exports.defaultWindow = defaultWindow;
exports.executeTransition = executeTransition;
exports.formatTimeAgo = formatTimeAgo;
exports.getSSRHandler = getSSRHandler;
exports.mapGamepadToXbox360Controller = mapGamepadToXbox360Controller;
exports.onClickOutside = onClickOutside;
exports.onKeyDown = onKeyDown;
exports.onKeyPressed = onKeyPressed;
exports.onKeyStroke = onKeyStroke;
exports.onKeyUp = onKeyUp;
exports.onLongPress = onLongPress;
exports.onStartTyping = onStartTyping;
exports.setSSRHandler = setSSRHandler;
exports.templateRef = templateRef;
exports.unrefElement = unrefElement;
exports.useActiveElement = useActiveElement;
exports.useAnimate = useAnimate;
exports.useAsyncQueue = useAsyncQueue;
exports.useAsyncState = useAsyncState;
exports.useBase64 = useBase64;
exports.useBattery = useBattery;
exports.useBluetooth = useBluetooth;
exports.useBreakpoints = useBreakpoints;
exports.useBroadcastChannel = useBroadcastChannel;
exports.useBrowserLocation = useBrowserLocation;
exports.useCached = useCached;
exports.useClipboard = useClipboard;
exports.useCloned = useCloned;
exports.useColorMode = useColorMode;
exports.useConfirmDialog = useConfirmDialog;
exports.useCssVar = useCssVar;
exports.useCurrentElement = useCurrentElement;
exports.useCycleList = useCycleList;
exports.useDark = useDark;
exports.useDebouncedRefHistory = useDebouncedRefHistory;
exports.useDeviceMotion = useDeviceMotion;
exports.useDeviceOrientation = useDeviceOrientation;
exports.useDevicePixelRatio = useDevicePixelRatio;
exports.useDevicesList = useDevicesList;
exports.useDisplayMedia = useDisplayMedia;
exports.useDocumentVisibility = useDocumentVisibility;
exports.useDraggable = useDraggable;
exports.useDropZone = useDropZone;
exports.useElementBounding = useElementBounding;
exports.useElementByPoint = useElementByPoint;
exports.useElementHover = useElementHover;
exports.useElementSize = useElementSize;
exports.useElementVisibility = useElementVisibility;
exports.useEventBus = useEventBus;
exports.useEventListener = useEventListener;
exports.useEventSource = useEventSource;
exports.useEyeDropper = useEyeDropper;
exports.useFavicon = useFavicon;
exports.useFetch = useFetch;
exports.useFileDialog = useFileDialog;
exports.useFileSystemAccess = useFileSystemAccess;
exports.useFocus = useFocus;
exports.useFocusWithin = useFocusWithin;
exports.useFps = useFps;
exports.useFullscreen = useFullscreen;
exports.useGamepad = useGamepad;
exports.useGeolocation = useGeolocation;
exports.useIdle = useIdle;
exports.useImage = useImage;
exports.useInfiniteScroll = useInfiniteScroll;
exports.useIntersectionObserver = useIntersectionObserver;
exports.useKeyModifier = useKeyModifier;
exports.useLocalStorage = useLocalStorage;
exports.useMagicKeys = useMagicKeys;
exports.useManualRefHistory = useManualRefHistory;
exports.useMediaControls = useMediaControls;
exports.useMediaQuery = useMediaQuery;
exports.useMemoize = useMemoize;
exports.useMemory = useMemory;
exports.useMounted = useMounted;
exports.useMouse = useMouse;
exports.useMouseInElement = useMouseInElement;
exports.useMousePressed = useMousePressed;
exports.useMutationObserver = useMutationObserver;
exports.useNavigatorLanguage = useNavigatorLanguage;
exports.useNetwork = useNetwork;
exports.useNow = useNow;
exports.useObjectUrl = useObjectUrl;
exports.useOffsetPagination = useOffsetPagination;
exports.useOnline = useOnline;
exports.usePageLeave = usePageLeave;
exports.useParallax = useParallax;
exports.useParentElement = useParentElement;
exports.usePerformanceObserver = usePerformanceObserver;
exports.usePermission = usePermission;
exports.usePointer = usePointer;
exports.usePointerLock = usePointerLock;
exports.usePointerSwipe = usePointerSwipe;
exports.usePreferredColorScheme = usePreferredColorScheme;
exports.usePreferredContrast = usePreferredContrast;
exports.usePreferredDark = usePreferredDark;
exports.usePreferredLanguages = usePreferredLanguages;
exports.usePreferredReducedMotion = usePreferredReducedMotion;
exports.usePrevious = usePrevious;
exports.useRafFn = useRafFn;
exports.useRefHistory = useRefHistory;
exports.useResizeObserver = useResizeObserver;
exports.useScreenOrientation = useScreenOrientation;
exports.useScreenSafeArea = useScreenSafeArea;
exports.useScriptTag = useScriptTag;
exports.useScroll = useScroll;
exports.useScrollLock = useScrollLock;
exports.useSessionStorage = useSessionStorage;
exports.useShare = useShare;
exports.useSorted = useSorted;
exports.useSpeechRecognition = useSpeechRecognition;
exports.useSpeechSynthesis = useSpeechSynthesis;
exports.useStepper = useStepper;
exports.useStorage = useStorage;
exports.useStorageAsync = useStorageAsync;
exports.useStyleTag = useStyleTag;
exports.useSupported = useSupported;
exports.useSwipe = useSwipe;
exports.useTemplateRefsList = useTemplateRefsList;
exports.useTextDirection = useTextDirection;
exports.useTextSelection = useTextSelection;
exports.useTextareaAutosize = useTextareaAutosize;
exports.useThrottledRefHistory = useThrottledRefHistory;
exports.useTimeAgo = useTimeAgo;
exports.useTimeoutPoll = useTimeoutPoll;
exports.useTimestamp = useTimestamp;
exports.useTitle = useTitle;
exports.useTransition = useTransition;
exports.useUrlSearchParams = useUrlSearchParams;
exports.useUserMedia = useUserMedia;
exports.useVModel = useVModel;
exports.useVModels = useVModels;
exports.useVibrate = useVibrate;
exports.useVirtualList = useVirtualList;
exports.useWakeLock = useWakeLock;
exports.useWebNotification = useWebNotification;
exports.useWebSocket = useWebSocket;
exports.useWebWorker = useWebWorker;
exports.useWebWorkerFn = useWebWorkerFn;
exports.useWindowFocus = useWindowFocus;
exports.useWindowScroll = useWindowScroll;
exports.useWindowSize = useWindowSize;
Object.keys(shared).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return shared[k]; }
  });
});


/***/ }),

/***/ "./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.cjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.cjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var VueModule = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")

// get the real Vue https://github.com/vueuse/vue-demi/issues/192
var Vue = VueModule.default || VueModule

exports.Vue = Vue
exports.Vue2 = Vue
exports.isVue2 = true
exports.isVue3 = false
exports.install = function () {}
exports.warn = Vue.util.warn

// createApp polyfill
exports.createApp = function (rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: Vue.config,
    use: Vue.use.bind(Vue),
    mixin: Vue.mixin.bind(Vue),
    component: Vue.component.bind(Vue),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        Vue.directive(name, dir)
        return app
      } else {
        return Vue.directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new Vue(Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}

Object.keys(VueModule).forEach(function (key) {
  exports[key] = VueModule[key]
})

// Not implemented https://github.com/vuejs/core/pull/8111, falls back to getCurrentInstance()
exports.hasInjectionContext = () => !!VueModule.getCurrentInstance()


/***/ }),

/***/ "./node_modules/@vueuse/shared/index.cjs":
/*!***********************************************!*\
  !*** ./node_modules/@vueuse/shared/index.cjs ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var vueDemi = __webpack_require__(/*! vue-demi */ "./node_modules/@vueuse/shared/node_modules/vue-demi/lib/index.cjs");

var __defProp$b = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
function computedEager(fn, options) {
  var _a;
  const result = vueDemi.shallowRef();
  vueDemi.watchEffect(() => {
    result.value = fn();
  }, __spreadProps$8(__spreadValues$b({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return vueDemi.readonly(result);
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = vueDemi.ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  vueDemi.watch(source, update, { flush: "sync" });
  const get = typeof fn === "function" ? fn : fn.get;
  const set = typeof fn === "function" ? void 0 : fn.set;
  const result = vueDemi.customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}

function tryOnScopeDispose(fn) {
  if (vueDemi.getCurrentScope()) {
    vueDemi.onScopeDispose(fn);
    return true;
  }
  return false;
}

function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (param) => {
    return Promise.all(Array.from(fns).map((fn) => fn(param)));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = vueDemi.effectScope(true);
  return (...args) => {
    if (!initialized) {
      state = scope.run(() => stateFactory(...args));
      initialized = true;
    }
    return state;
  };
}

function createInjectionState(composable) {
  const key = Symbol("InjectionState");
  const useProvidingState = (...args) => {
    const state = composable(...args);
    vueDemi.provide(key, state);
    return state;
  };
  const useInjectedState = () => vueDemi.inject(key);
  return [useProvidingState, useInjectedState];
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = vueDemi.effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  if (!vueDemi.isVue3 && !vueDemi.version.startsWith("2.7.")) {
    if (true)
      throw new Error("[VueUse] extendRef only works in Vue 2.7 or above.");
    return;
  }
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (vueDemi.isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function get(obj, key) {
  if (key == null)
    return vueDemi.unref(obj);
  return vueDemi.unref(obj)[key];
}

function isDefined(v) {
  return vueDemi.unref(v) != null;
}

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$a({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function toValue(r) {
  return typeof r === "function" ? r() : vueDemi.unref(r);
}
const resolveUnref = toValue;

function reactify(fn, options) {
  const unrefFn = (options == null ? void 0 : options.computedGetter) === false ? vueDemi.unref : toValue;
  return function(...args) {
    return vueDemi.computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  let options;
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    options = optionsOrKeys;
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(
    keys.map((key) => {
      const value = obj[key];
      return [
        key,
        typeof value === "function" ? reactify(value.bind(obj), options) : value
      ];
    })
  );
}

function toReactive(objectRef) {
  if (!vueDemi.isRef(objectRef))
    return vueDemi.reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return vueDemi.unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (vueDemi.isRef(objectRef.value[p]) && !vueDemi.isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return vueDemi.reactive(proxy);
}

function reactiveComputed(fn) {
  return toReactive(vueDemi.computed(fn));
}

function reactiveOmit(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(
    () => typeof predicate === "function" ? Object.fromEntries(Object.entries(vueDemi.toRefs(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries(vueDemi.toRefs(obj)).filter((e) => !flatKeys.includes(e[0])))
  );
}

const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const hasOwn = (val, key) => Object.prototype.hasOwnProperty.call(val, key);
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = vueDemi.ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: vueDemi.readonly(isActive), pause, resume, eventFilter };
}

const directiveHooks = {
  mounted: vueDemi.isVue3 ? "mounted" : "inserted",
  updated: vueDemi.isVue3 ? "updated" : "componentUpdated",
  unmounted: vueDemi.isVue3 ? "unmounted" : "unbind"
};

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
function objectOmit(obj, keys, omitUndefined = false) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return (!omitUndefined || value !== void 0) && !keys.includes(key);
  }));
}
function objectEntries(obj) {
  return Object.entries(obj);
}

function toRef(...args) {
  if (args.length !== 1)
    return vueDemi.toRef(...args);
  const r = args[0];
  return typeof r === "function" ? vueDemi.readonly(vueDemi.customRef(() => ({ get: r, set: noop }))) : vueDemi.ref(r);
}
const resolveRef = toRef;

function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(vueDemi.toRefs(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return vueDemi.customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, toValue(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}

function refDebounced(value, ms = 200, options = {}) {
  const debounced = vueDemi.ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  vueDemi.watch(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return vueDemi.computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = vueDemi.ref(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  vueDemi.watch(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = vueDemi.customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(
    ref,
    {
      get,
      set,
      untrackedGet,
      silentSet,
      peek,
      lay
    },
    { enumerable: true }
  );
}
const controlledRef = refWithControl;

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (vueDemi.isVue2) {
      vueDemi.set(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(left, right, options = {}) {
  var _a, _b;
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both",
    transform = {}
  } = options;
  let watchLeft;
  let watchRight;
  const transformLTR = (_a = transform.ltr) != null ? _a : (v) => v;
  const transformRTL = (_b = transform.rtl) != null ? _b : (v) => v;
  if (direction === "both" || direction === "ltr") {
    watchLeft = vueDemi.watch(
      left,
      (newValue) => right.value = transformLTR(newValue),
      { flush, deep, immediate }
    );
  }
  if (direction === "both" || direction === "rtl") {
    watchRight = vueDemi.watch(
      right,
      (newValue) => left.value = transformRTL(newValue),
      { flush, deep, immediate }
    );
  }
  return () => {
    watchLeft == null ? void 0 : watchLeft();
    watchRight == null ? void 0 : watchRight();
  };
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return vueDemi.watch(
    source,
    (newValue) => targets.forEach((target) => target.value = newValue),
    { flush, deep, immediate }
  );
}

var __defProp$9 = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function toRefs(objectRef) {
  if (!vueDemi.isRef(objectRef))
    return vueDemi.toRefs(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = vueDemi.customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          const newObject = __spreadProps$7(__spreadValues$9({}, objectRef.value), { [key]: v });
          Object.setPrototypeOf(newObject, objectRef.value);
          objectRef.value = newObject;
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeMount(fn, sync = true) {
  if (vueDemi.getCurrentInstance())
    vueDemi.onBeforeMount(fn);
  else if (sync)
    fn();
  else
    vueDemi.nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (vueDemi.getCurrentInstance())
    vueDemi.onBeforeUnmount(fn);
}

function tryOnMounted(fn, sync = true) {
  if (vueDemi.getCurrentInstance())
    vueDemi.onMounted(fn);
  else if (sync)
    fn();
  else
    vueDemi.nextTick(fn);
}

function tryOnUnmounted(fn) {
  if (vueDemi.getCurrentInstance())
    vueDemi.onUnmounted(fn);
}

function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = vueDemi.watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!vueDemi.isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = vueDemi.watch(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}

function defaultComparator(value, othVal) {
  return value === othVal;
}
function useArrayDifference(...args) {
  var _a;
  const list = args[0];
  const values = args[1];
  let compareFn = (_a = args[2]) != null ? _a : defaultComparator;
  if (typeof compareFn === "string") {
    const key = compareFn;
    compareFn = (value, othVal) => value[key] === othVal[key];
  }
  return vueDemi.computed(() => toValue(list).filter((x) => toValue(values).findIndex((y) => compareFn(x, y)) === -1));
}

function useArrayEvery(list, fn) {
  return vueDemi.computed(() => toValue(list).every((element, index, array) => fn(toValue(element), index, array)));
}

function useArrayFilter(list, fn) {
  return vueDemi.computed(() => toValue(list).map((i) => toValue(i)).filter(fn));
}

function useArrayFind(list, fn) {
  return vueDemi.computed(
    () => toValue(
      toValue(list).find((element, index, array) => fn(toValue(element), index, array))
    )
  );
}

function useArrayFindIndex(list, fn) {
  return vueDemi.computed(() => toValue(list).findIndex((element, index, array) => fn(toValue(element), index, array)));
}

function findLast(arr, cb) {
  let index = arr.length;
  while (index-- > 0) {
    if (cb(arr[index], index, arr))
      return arr[index];
  }
  return void 0;
}
function useArrayFindLast(list, fn) {
  return vueDemi.computed(
    () => toValue(
      !Array.prototype.findLast ? findLast(toValue(list), (element, index, array) => fn(toValue(element), index, array)) : toValue(list).findLast((element, index, array) => fn(toValue(element), index, array))
    )
  );
}

function isArrayIncludesOptions(obj) {
  return isObject(obj) && containsProp(obj, "formIndex", "comparator");
}
function useArrayIncludes(...args) {
  var _a;
  const list = args[0];
  const value = args[1];
  let comparator = args[2];
  let formIndex = 0;
  if (isArrayIncludesOptions(comparator)) {
    formIndex = (_a = comparator.fromIndex) != null ? _a : 0;
    comparator = comparator.comparator;
  }
  if (typeof comparator === "string") {
    const key = comparator;
    comparator = (element, value2) => element[key] === toValue(value2);
  }
  comparator = comparator != null ? comparator : (element, value2) => element === toValue(value2);
  return vueDemi.computed(
    () => toValue(list).slice(formIndex).some(
      (element, index, array) => comparator(toValue(element), toValue(value), index, toValue(array))
    )
  );
}

function useArrayJoin(list, separator) {
  return vueDemi.computed(() => toValue(list).map((i) => toValue(i)).join(toValue(separator)));
}

function useArrayMap(list, fn) {
  return vueDemi.computed(() => toValue(list).map((i) => toValue(i)).map(fn));
}

function useArrayReduce(list, reducer, ...args) {
  const reduceCallback = (sum, value, index) => reducer(toValue(sum), toValue(value), index);
  return vueDemi.computed(() => {
    const resolved = toValue(list);
    return args.length ? resolved.reduce(reduceCallback, toValue(args[0])) : resolved.reduce(reduceCallback);
  });
}

function useArraySome(list, fn) {
  return vueDemi.computed(() => toValue(list).some((element, index, array) => fn(toValue(element), index, array)));
}

function uniq(array) {
  return Array.from(new Set(array));
}
function uniqueElementsBy(array, fn) {
  return array.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x, array)))
      acc.push(v);
    return acc;
  }, []);
}
function useArrayUnique(list, compareFn) {
  return vueDemi.computed(() => {
    const resolvedList = toValue(list).map((element) => toValue(element));
    return compareFn ? uniqueElementsBy(resolvedList, compareFn) : uniq(resolvedList);
  });
}

function useCounter(initialValue = 0, options = {}) {
  const count = vueDemi.ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = Math.max(min, Math.min(max, val));
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function defaultMeridiem(hours, minutes, isLowercase, hasPeriod) {
  let m = hours < 12 ? "AM" : "PM";
  if (hasPeriod)
    m = m.split("").reduce((acc, curr) => acc += `${curr}.`, "");
  return isLowercase ? m.toLowerCase() : m;
}
function formatDate(date, formatStr, options = {}) {
  var _a;
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const meridiem = (_a = options.customMeridiem) != null ? _a : defaultMeridiem;
  const matches = {
    YY: () => String(years).slice(-2),
    YYYY: () => years,
    M: () => month + 1,
    MM: () => `${month + 1}`.padStart(2, "0"),
    MMM: () => date.toLocaleDateString(options.locales, { month: "short" }),
    MMMM: () => date.toLocaleDateString(options.locales, { month: "long" }),
    D: () => String(days),
    DD: () => `${days}`.padStart(2, "0"),
    H: () => String(hours),
    HH: () => `${hours}`.padStart(2, "0"),
    h: () => `${hours % 12 || 12}`.padStart(1, "0"),
    hh: () => `${hours % 12 || 12}`.padStart(2, "0"),
    m: () => String(minutes),
    mm: () => `${minutes}`.padStart(2, "0"),
    s: () => String(seconds),
    ss: () => `${seconds}`.padStart(2, "0"),
    SSS: () => `${milliseconds}`.padStart(3, "0"),
    d: () => day,
    dd: () => date.toLocaleDateString(options.locales, { weekday: "narrow" }),
    ddd: () => date.toLocaleDateString(options.locales, { weekday: "short" }),
    dddd: () => date.toLocaleDateString(options.locales, { weekday: "long" }),
    A: () => meridiem(hours, minutes),
    AA: () => meridiem(hours, minutes, false, true),
    a: () => meridiem(hours, minutes, true),
    aa: () => meridiem(hours, minutes, true, true)
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => {
    var _a2;
    return $1 || ((_a2 = matches[match]) == null ? void 0 : _a2.call(matches)) || match;
  });
}
function normalizeDate(date) {
  if (date === null)
    return /* @__PURE__ */ new Date(NaN);
  if (date === void 0)
    return /* @__PURE__ */ new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
}
function useDateFormat(date, formatStr = "HH:mm:ss", options = {}) {
  return vueDemi.computed(() => formatDate(normalizeDate(toValue(date)), toValue(formatStr), options));
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = vueDemi.ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (vueDemi.isRef(interval) || typeof interval === "function") {
    const stopWatch = vueDemi.watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true,
    callback
  } = options;
  const counter = vueDemi.ref(0);
  const update = () => counter.value += 1;
  const reset = () => {
    counter.value = 0;
  };
  const controls = useIntervalFn(
    callback ? () => {
      update();
      callback(counter.value);
    } : update,
    interval,
    { immediate }
  );
  if (exposeControls) {
    return __spreadValues$8({
      counter,
      reset
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = vueDemi.ref((_a = options.initialValue) != null ? _a : null);
  vueDemi.watch(
    source,
    () => ms.value = timestamp(),
    options
  );
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = vueDemi.ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: vueDemi.readonly(isPending),
    start,
    stop
  };
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    callback
  } = options;
  const controls = useTimeoutFn(
    callback != null ? callback : noop,
    interval,
    options
  );
  const ready = vueDemi.computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$7({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToNumber(value, options = {}) {
  const {
    method = "parseFloat",
    radix,
    nanToZero
  } = options;
  return vueDemi.computed(() => {
    let resolved = toValue(value);
    if (typeof resolved === "string")
      resolved = Number[method](resolved, radix);
    if (nanToZero && Number.isNaN(resolved))
      resolved = 0;
    return resolved;
  });
}

function useToString(value) {
  return vueDemi.computed(() => `${toValue(value)}`);
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = vueDemi.isRef(initialValue);
  const _value = vueDemi.ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}

function watchArray(source, cb, options) {
  let oldList = (options == null ? void 0 : options.immediate) ? [] : [
    ...source instanceof Function ? source() : Array.isArray(source) ? source : toValue(source)
  ];
  return vueDemi.watch(source, (newList, _, onCleanup) => {
    const oldListRemains = new Array(oldList.length);
    const added = [];
    for (const obj of newList) {
      let found = false;
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true;
          found = true;
          break;
        }
      }
      if (!found)
        added.push(obj);
    }
    const removed = oldList.filter((_2, i) => !oldListRemains[i]);
    cb(newList, oldList, added, removed, onCleanup);
    oldList = [...newList];
  }, options);
}

var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return vueDemi.watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}

var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest$4(_a, [
    "count"
  ]);
  const current = vueDemi.ref(0);
  const stop = watchWithFilter(
    source,
    (...args) => {
      current.value += 1;
      if (current.value >= toValue(count))
        vueDemi.nextTick(() => stop());
      cb(...args);
    },
    watchOptions
  );
  return { count: current, stop };
}

var __defProp$6 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0,
    maxWait = void 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce",
    "maxWait"
  ]);
  return watchWithFilter(
    source,
    cb,
    __spreadProps$6(__spreadValues$6({}, watchOptions), {
      eventFilter: debounceFilter(debounce, { maxWait })
    })
  );
}

var __defProp$5 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function watchDeep(source, cb, options) {
  return vueDemi.watch(
    source,
    cb,
    __spreadProps$5(__spreadValues$5({}, options), {
      deep: true
    })
  );
}

var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchIgnorable(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const filteredCb = createFilterWrapper(
    eventFilter,
    cb
  );
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = vueDemi.ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = vueDemi.watch(
      source,
      (...args) => {
        if (!ignore.value)
          filteredCb(...args);
      },
      watchOptions
    );
  } else {
    const disposables = [];
    const ignoreCounter = vueDemi.ref(0);
    const syncCounter = vueDemi.ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(
      vueDemi.watch(
        source,
        () => {
          syncCounter.value++;
        },
        __spreadProps$4(__spreadValues$4({}, watchOptions), { flush: "sync" })
      )
    );
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(
      vueDemi.watch(
        source,
        (...args) => {
          const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
          ignoreCounter.value = 0;
          syncCounter.value = 0;
          if (ignore)
            return;
          filteredCb(...args);
        },
        watchOptions
      )
    );
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
function watchImmediate(source, cb, options) {
  return vueDemi.watch(
    source,
    cb,
    __spreadProps$3(__spreadValues$3({}, options), {
      immediate: true
    })
  );
}

function watchOnce(source, cb, options) {
  const stop = vueDemi.watch(source, (...args) => {
    vueDemi.nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    __spreadProps$2(__spreadValues$2({}, watchOptions), {
      eventFilter
    })
  );
  return { stop, pause, resume, isActive };
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchThrottled(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(
    source,
    cb,
    __spreadProps$1(__spreadValues$1({}, watchOptions), {
      eventFilter: throttleFilter(throttle, trailing, leading)
    })
  );
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function watchTriggerable(source, cb, options = {}) {
  let cleanupFn;
  function onEffect() {
    if (!cleanupFn)
      return;
    const fn = cleanupFn;
    cleanupFn = void 0;
    fn();
  }
  function onCleanup(callback) {
    cleanupFn = callback;
  }
  const _cb = (value, oldValue) => {
    onEffect();
    return cb(value, oldValue, onCleanup);
  };
  const res = watchIgnorable(source, _cb, options);
  const { ignoreUpdates } = res;
  const trigger = () => {
    let res2;
    ignoreUpdates(() => {
      res2 = _cb(getWatchSources(source), getOldValue(source));
    });
    return res2;
  };
  return __spreadProps(__spreadValues({}, res), {
    trigger
  });
}
function getWatchSources(sources) {
  if (vueDemi.isReactive(sources))
    return sources;
  if (Array.isArray(sources))
    return sources.map((item) => toValue(item));
  return toValue(sources);
}
function getOldValue(source) {
  return Array.isArray(source) ? source.map(() => void 0) : void 0;
}

function whenever(source, cb, options) {
  return vueDemi.watch(
    source,
    (v, ov, onInvalidate) => {
      if (v)
        cb(v, ov, onInvalidate);
    },
    options
  );
}

exports.assert = assert;
exports.autoResetRef = refAutoReset;
exports.bypassFilter = bypassFilter;
exports.clamp = clamp;
exports.computedEager = computedEager;
exports.computedWithControl = computedWithControl;
exports.containsProp = containsProp;
exports.controlledComputed = computedWithControl;
exports.controlledRef = controlledRef;
exports.createEventHook = createEventHook;
exports.createFilterWrapper = createFilterWrapper;
exports.createGlobalState = createGlobalState;
exports.createInjectionState = createInjectionState;
exports.createReactiveFn = reactify;
exports.createSharedComposable = createSharedComposable;
exports.createSingletonPromise = createSingletonPromise;
exports.debounceFilter = debounceFilter;
exports.debouncedRef = refDebounced;
exports.debouncedWatch = watchDebounced;
exports.directiveHooks = directiveHooks;
exports.eagerComputed = computedEager;
exports.extendRef = extendRef;
exports.formatDate = formatDate;
exports.get = get;
exports.hasOwn = hasOwn;
exports.identity = identity;
exports.ignorableWatch = watchIgnorable;
exports.increaseWithUnit = increaseWithUnit;
exports.invoke = invoke;
exports.isClient = isClient;
exports.isDef = isDef;
exports.isDefined = isDefined;
exports.isIOS = isIOS;
exports.isObject = isObject;
exports.makeDestructurable = makeDestructurable;
exports.noop = noop;
exports.normalizeDate = normalizeDate;
exports.notNullish = notNullish;
exports.now = now;
exports.objectEntries = objectEntries;
exports.objectOmit = objectOmit;
exports.objectPick = objectPick;
exports.pausableFilter = pausableFilter;
exports.pausableWatch = watchPausable;
exports.promiseTimeout = promiseTimeout;
exports.rand = rand;
exports.reactify = reactify;
exports.reactifyObject = reactifyObject;
exports.reactiveComputed = reactiveComputed;
exports.reactiveOmit = reactiveOmit;
exports.reactivePick = reactivePick;
exports.refAutoReset = refAutoReset;
exports.refDebounced = refDebounced;
exports.refDefault = refDefault;
exports.refThrottled = refThrottled;
exports.refWithControl = refWithControl;
exports.resolveRef = resolveRef;
exports.resolveUnref = resolveUnref;
exports.set = set;
exports.syncRef = syncRef;
exports.syncRefs = syncRefs;
exports.throttleFilter = throttleFilter;
exports.throttledRef = refThrottled;
exports.throttledWatch = watchThrottled;
exports.timestamp = timestamp;
exports.toReactive = toReactive;
exports.toRef = toRef;
exports.toRefs = toRefs;
exports.toValue = toValue;
exports.tryOnBeforeMount = tryOnBeforeMount;
exports.tryOnBeforeUnmount = tryOnBeforeUnmount;
exports.tryOnMounted = tryOnMounted;
exports.tryOnScopeDispose = tryOnScopeDispose;
exports.tryOnUnmounted = tryOnUnmounted;
exports.until = until;
exports.useArrayDifference = useArrayDifference;
exports.useArrayEvery = useArrayEvery;
exports.useArrayFilter = useArrayFilter;
exports.useArrayFind = useArrayFind;
exports.useArrayFindIndex = useArrayFindIndex;
exports.useArrayFindLast = useArrayFindLast;
exports.useArrayIncludes = useArrayIncludes;
exports.useArrayJoin = useArrayJoin;
exports.useArrayMap = useArrayMap;
exports.useArrayReduce = useArrayReduce;
exports.useArraySome = useArraySome;
exports.useArrayUnique = useArrayUnique;
exports.useCounter = useCounter;
exports.useDateFormat = useDateFormat;
exports.useDebounce = refDebounced;
exports.useDebounceFn = useDebounceFn;
exports.useInterval = useInterval;
exports.useIntervalFn = useIntervalFn;
exports.useLastChanged = useLastChanged;
exports.useThrottle = refThrottled;
exports.useThrottleFn = useThrottleFn;
exports.useTimeout = useTimeout;
exports.useTimeoutFn = useTimeoutFn;
exports.useToNumber = useToNumber;
exports.useToString = useToString;
exports.useToggle = useToggle;
exports.watchArray = watchArray;
exports.watchAtMost = watchAtMost;
exports.watchDebounced = watchDebounced;
exports.watchDeep = watchDeep;
exports.watchIgnorable = watchIgnorable;
exports.watchImmediate = watchImmediate;
exports.watchOnce = watchOnce;
exports.watchPausable = watchPausable;
exports.watchThrottled = watchThrottled;
exports.watchTriggerable = watchTriggerable;
exports.watchWithFilter = watchWithFilter;
exports.whenever = whenever;


/***/ }),

/***/ "./node_modules/@vueuse/shared/node_modules/vue-demi/lib/index.cjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@vueuse/shared/node_modules/vue-demi/lib/index.cjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var VueModule = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")

// get the real Vue https://github.com/vueuse/vue-demi/issues/192
var Vue = VueModule.default || VueModule

exports.Vue = Vue
exports.Vue2 = Vue
exports.isVue2 = true
exports.isVue3 = false
exports.install = function () {}
exports.warn = Vue.util.warn

// createApp polyfill
exports.createApp = function (rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: Vue.config,
    use: Vue.use.bind(Vue),
    mixin: Vue.mixin.bind(Vue),
    component: Vue.component.bind(Vue),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        Vue.directive(name, dir)
        return app
      } else {
        return Vue.directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new Vue(Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}

Object.keys(VueModule).forEach(function (key) {
  exports[key] = VueModule[key]
})

// Not implemented https://github.com/vuejs/core/pull/8111, falls back to getCurrentInstance()
exports.hasInjectionContext = () => !!VueModule.getCurrentInstance()


/***/ }),

/***/ "./node_modules/floating-vue/node_modules/@floating-ui/core/dist/floating-ui.core.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/floating-vue/node_modules/@floating-ui/core/dist/floating-ui.core.esm.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getBasePlacement(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref) {
  let {
    reference,
    floating,
    placement
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  let coords;

  switch (getBasePlacement(placement)) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] = coords[mainAxis] - (reference[length] / 2 - floating[length] / 2);
      break;

    case 'end':
      coords[mainAxis] = coords[mainAxis] + (reference[length] / 2 - floating[length] / 2);
      break;
  }

  return coords;
}

const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;

  if (true) {
    if (platform == null) {
      console.error(['Floating UI: `platform` property was not passed to config. If you', 'want to use Floating UI on the web, install @floating-ui/dom', 'instead of the /core package. Otherwise, you can create your own', '`platform`: https://floating-ui.com/docs/platform'].join(' '));
    }

    if (middleware.filter(_ref => {
      let {
        name
      } = _ref;
      return name === 'autoPlacement' || name === 'flip';
    }).length > 1) {
      throw new Error(['Floating UI: duplicate `flip` and/or `autoPlacement`', 'middleware detected. This will lead to an infinite loop. Ensure only', 'one of either has been passed to the `middleware` array.'].join(' '));
    }
  }

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement({ ...rects,
    placement
  });
  let statefulPlacement = placement;
  let middlewareData = {};
  let _debug_loop_count_ = 0;

  for (let i = 0; i < middleware.length; i++) {
    if (true) {
      _debug_loop_count_++;

      if (_debug_loop_count_ > 100) {
        throw new Error(['Floating UI: The middleware lifecycle appears to be', 'running in an infinite loop. This is usually caused by a `reset`', 'continually being returned without a break condition.'].join(' '));
      }
    }

    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: data != null ? data : {}
    };

    if (reset) {
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement({ ...rects,
          placement: statefulPlacement
        }));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

async function detectOverflow(middlewareArguments, options) {
  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingParents',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = await platform.getClippingClientRect({
    element: (await platform.isElement(element)) ? element : element.contextElement || (await platform.getDocumentElement({
      element: elements.floating
    })),
    boundary,
    rootBoundary
  });
  const elementClientRect = rectToClientRect(await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await platform.getOffsetParent({
      element: elements.floating
    }),
    strategy
  })); // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

const arrow = options => ({
  name: 'arrow',
  options,

  async fn(middlewareArguments) {
    // Since `element` is required, we don't Partial<> the type
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform
    } = middlewareArguments;

    if (element == null) {
      if (true) {
        console.warn('Floating UI: No `element` was passed to the `arrow` middleware.');
      }

      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const basePlacement = getBasePlacement(placement);
    const axis = getMainAxisFromPlacement(basePlacement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions({
      element
    });
    const minProp = axis === 'y' ? 'top' : 'left';
    const maxProp = axis === 'y' ? 'bottom' : 'right';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await platform.getOffsetParent({
      element
    });
    const clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside of the floating element's bounds

    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);
    return {
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }

});

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects) {
  const isStart = getAlignment(placement) === 'start';
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? isStart ? 'right' : 'left' : isStart ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

const basePlacements = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/basePlacements.reduce((acc, basePlacement) => acc.concat(basePlacement, basePlacement + "-start", basePlacement + "-end"), []);

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getBasePlacement(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }

    return true;
  });
}
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'autoPlacement',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _middlewareData$autoP5, _placementsSortedByLe;

      const {
        x,
        y,
        rects,
        middlewareData,
        placement
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;

      if ((_middlewareData$autoP = middlewareData.autoPlacement) != null && _middlewareData$autoP.skip) {
        return {};
      }

      const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP2 = (_middlewareData$autoP3 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP3.index) != null ? _middlewareData$autoP2 : 0;
      const currentPlacement = placements[currentIndex];
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects); // Make `computeCoords` start from the right place

      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements[0]
          }
        };
      }

      const currentOverflows = [overflow[getBasePlacement(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...((_middlewareData$autoP4 = (_middlewareData$autoP5 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP5.overflows) != null ? _middlewareData$autoP4 : []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1]; // There are more placements to check

      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find(_ref => {
        let {
          overflows
        } = _ref;
        return overflows.every(overflow => overflow <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      return {
        data: {
          skip: true
        },
        reset: {
          placement: placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement
        }
      };
    }

  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip, _middlewareData$flip2;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement
      } = middlewareArguments;

      if ((_middlewareData$flip = middlewareData.flip) != null && _middlewareData$flip.skip) {
        return {};
      }

      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const basePlacement = getBasePlacement(placement);
      const isBasePlacement = basePlacement === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[basePlacement]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects);
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip3;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip3 = middlewareData.flip) == null ? void 0 : _middlewareData$flip3.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$slice$;

              const placement = (_overflowsData$slice$ = overflowsData.slice().sort((a, b) => a.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0) - b.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0))[0]) == null ? void 0 : _overflowsData$slice$.placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        return {
          data: {
            skip: true
          },
          reset: {
            placement: resetPlacement
          }
        };
      }

      return {};
    }

  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}

function isAnySideFullyClipped(overflow) {
  return basePlacements.some(side => overflow[side] >= 0);
}

const hide = () => ({
  name: 'hide',

  async fn(modifierArguments) {
    const referenceOverflow = await detectOverflow(modifierArguments, {
      elementContext: 'reference'
    });
    const floatingAltOverflow = await detectOverflow(modifierArguments, {
      altBoundary: true
    });
    const referenceHiddenOffsets = getSideOffsets(referenceOverflow, modifierArguments.rects.reference);
    const escapedOffsets = getSideOffsets(floatingAltOverflow, modifierArguments.rects.floating);
    const referenceHidden = isAnySideFullyClipped(referenceHiddenOffsets);
    const escaped = isAnySideFullyClipped(escapedOffsets);
    return {
      data: {
        referenceHidden,
        referenceHiddenOffsets,
        escaped,
        escapedOffsets
      }
    };
  }

});

function convertValueToCoords(_ref) {
  let {
    placement,
    rects,
    value
  } = _ref;
  const basePlacement = getBasePlacement(placement);
  const multiplier = ['left', 'top'].includes(basePlacement) ? -1 : 1;
  const rawValue = typeof value === 'function' ? value({ ...rects,
    placement
  }) : value;
  const {
    mainAxis,
    crossAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...rawValue
  };
  return getMainAxisFromPlacement(basePlacement) === 'x' ? {
    x: crossAxis,
    y: mainAxis * multiplier
  } : {
    x: mainAxis * multiplier,
    y: crossAxis
  };
}
const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects
      } = middlewareArguments;
      const diffCoords = convertValueToCoords({
        placement,
        rects,
        value
      });
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

const shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getBasePlacement(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }

      const limitedCoords = limiter.fn({ ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return { ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }

  };
};
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    options,

    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = options;
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = typeof offset === 'function' ? offset({ ...rects,
        placement
      }) : offset;
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };

      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;

        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }

      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;

        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getBasePlacement(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);

        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }

      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }

  };
};

const size = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'size',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$size;

      const {
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;

      if ((_middlewareData$size = middlewareData.size) != null && _middlewareData$size.skip) {
        return {};
      }

      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const basePlacement = getBasePlacement(placement);
      const isEnd = getAlignment(placement) === 'end';
      let heightSide;
      let widthSide;

      if (basePlacement === 'top' || basePlacement === 'bottom') {
        heightSide = basePlacement;
        widthSide = isEnd ? 'left' : 'right';
      } else {
        widthSide = basePlacement;
        heightSide = isEnd ? 'top' : 'bottom';
      }

      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        height: rects.floating.height - (['left', 'right'].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (['top', 'bottom'].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply({ ...dimensions,
        ...rects
      });
      return {
        data: {
          skip: true
        },
        reset: {
          rects: true
        }
      };
    }

  };
};

const inline = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'inline',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$inlin, _await$platform$getCl;

      const {
        placement,
        elements,
        rects,
        platform,
        strategy,
        middlewareData
      } = middlewareArguments; // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.

      const {
        padding = 2,
        x,
        y
      } = options;

      if ((_middlewareData$inlin = middlewareData.inline) != null && _middlewareData$inlin.skip) {
        return {};
      }

      const fallback = rectToClientRect(await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: rects.reference,
        offsetParent: await platform.getOffsetParent({
          element: elements.floating
        }),
        strategy
      }));
      const clientRects = Array.from((_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects({
        element: elements.reference
      }))) != null ? _await$platform$getCl : []);
      const paddingObject = getSideObjectFromPadding(padding);

      function getBoundingClientRect() {
        // There are two rects and they are disjoined
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          var _clientRects$find;

          // Find the first rect in which the point is fully inside
          return (_clientRects$find = clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
        } // There are 2 or more connected rects


        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getBasePlacement(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }

          const isLeftPlacement = getBasePlacement(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftPlacement ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }

        return fallback;
      }

      return {
        data: {
          skip: true
        },
        reset: {
          rects: await platform.getElementRects({
            reference: {
              getBoundingClientRect
            },
            floating: elements.floating,
            strategy
          })
        }
      };
    }

  };
};




/***/ }),

/***/ "./node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.arrow),
/* harmony export */   autoPlacement: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.autoPlacement),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),
/* harmony export */   flip: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.flip),
/* harmony export */   getScrollParents: () => (/* binding */ getScrollParents),
/* harmony export */   hide: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   inline: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.inline),
/* harmony export */   limitShift: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.limitShift),
/* harmony export */   offset: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.offset),
/* harmony export */   shift: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.shift),
/* harmony export */   size: () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.size)
/* harmony export */ });
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/core */ "./node_modules/floating-vue/node_modules/@floating-ui/core/dist/floating-ui.core.esm.js");



function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === '[object Window]';
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  const css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }

  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed

    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].includes(getNodeName(node))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

function getScrollParents(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollParent = getScrollParent(node);
  const isBody = scrollParent === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollParent);
  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getScrollParents(getParentNode(target)));
}

function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element) {
  const clientRect = getBoundingClientRect(element);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingParent(element, clippingParent) {
  if (clippingParent === 'viewport') {
    return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getViewportRect(element));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }

  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  const clippingParents = getScrollParents(getParentNode(element));
  const canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingParents.filter(clippingParent => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingClientRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary
  } = _ref;
  const mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  const clippingParents = [...mainClippingParents, rootBoundary];
  const firstClippingParent = clippingParents[0];
  const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
    const rect = getClientRectFromClippingParent(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingParent(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

const platform = {
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: args => convertOffsetParentRelativeRectToViewportRelativeRect(args),
  getOffsetParent: _ref2 => {
    let {
      element
    } = _ref2;
    return getOffsetParent(element);
  },
  isElement: value => isElement(value),
  getDocumentElement: _ref3 => {
    let {
      element
    } = _ref3;
    return getDocumentElement(element);
  },
  getClippingClientRect: args => getClippingClientRect(args),
  getDimensions: _ref4 => {
    let {
      element
    } = _ref4;
    return getDimensions(element);
  },
  getClientRects: _ref5 => {
    let {
      element
    } = _ref5;
    return element.getClientRects();
  }
};

const computePosition = (reference, floating, options) => (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.computePosition)(reference, floating, {
  platform,
  ...options
});




/***/ })

}]);
//# sourceMappingURL=viewer-components.js.map?v=889c75db72f8d2c070d1