const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('viewer', '', 'js/index-C7x6bWsg.chunk.mjs'),window.OC.filePath('viewer', '', 'js/previewUtils-BxmHU8XD.chunk.mjs'),window.OC.filePath('viewer', '', 'css/previewUtils-8w2LAIqc.chunk.css')])))=>i.map(i=>d[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{E as ae,o as Sl,N as vl,G as Bs,H as Aa,I as xs,J as Ta,K as rt,s as Wt,L as Rl,M as Cl,D as B,O as Nl,P as Ol,n as ii,Q as ie,R as Bl,V as ua,S as Ba,T as xl,U as Ml,W as j,h as ma,X as Pa,Y as jl,l as Ms,_ as js,Z as go,$ as Yl,a0 as ql,a1 as Ll,a2 as Zl,a3 as Il,a4 as Hl,a5 as Pl,a6 as kn,a7 as An,a8 as Gl,a9 as wn,aa as Ys,ab as $a,ac as Sn,ad as E0,ae as Bi,u as j0,v as Y0,af as vn,ag as Ul,ah as zl,ai as Wl,aj as qs,ak as $l,al as Rn,m as Cn,am as Vl,an as Ls,ao as Ql,ap as Zs,aq as Kl,ar as Jl,as as Xl,at as e1,au as a1,ax as t1,ay as Is,az as i1,aA as n1,aC as o1,aD as s1,aE as r1,aF as l1,aG as _1,aH as d1,aI as f1,aJ as g1,aK as Hs,aL as Ps,aM as h1,aN as F1,aO as u1,aP as c1,aQ as m1,aR as p1,aS as L2,aT as Gs,aU as b1,aV as T1,aW as D1,aX as Us,aY as y1,aZ as E1,a_ as k1,a$ as A1,B as Di,b0 as w1,b1 as S1,b2 as v1,b3 as Z2,b4 as R1,b5 as C1,b6 as N1,b7 as Nt,w as Nn,t as qa,b8 as O1,b9 as B1,ba as x1,y as M1,g as j1,bb as Y1,k as q1}from"./previewUtils-BxmHU8XD.chunk.mjs";import{C as On,N as L1}from"./NcActionButton-BU4vDaPf.chunk.mjs";import Z1 from"./NcActionLink-ChqnvkJv.chunk.mjs";import{A as zs,a as I1}from"./actionText-fFcUPi2g-1UIVDoW6.chunk.mjs";const Al="viewer",wl="2.3.0",H1=Sl({name:"NcDialog",components:{NcDialogButton:vl,NcModal:Bs},props:{name:{type:String,required:!0},message:{type:String,default:""},additionalTrapElements:{type:Array,validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="string"||a instanceof HTMLElement),default:()=>[]},container:{type:String,required:!1,default:"body"},open:{type:Boolean,default:!0},size:{type:String,required:!1,default:"small",validator:e=>typeof e=="string"&&["small","normal","large","full"].includes(e)},buttons:{type:Array,required:!1,default:()=>[],validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="object")},canClose:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!1},isForm:{type:Boolean,default:!1},outTransition:{type:Boolean,default:!1},navigationClasses:{type:[String,Array,Object],required:!1,default:""},navigationAriaLabel:{type:String,required:!1,default:""},navigationAriaLabelledby:{type:String,required:!1,default:""},contentClasses:{type:[String,Array,Object],required:!1,default:""},dialogClasses:{type:[String,Array,Object],required:!1,default:""}},emits:["closing","update:open","submit"],setup(e,{emit:a,slots:i}){const n=Aa(),{width:o}=xs(n,{width:900}),s=Ta(()=>o.value<876),r=Ta(()=>i?.navigation!==void 0),_=rt(),l=Ta(()=>e.navigationAriaLabel||void 0),g=Ta(()=>{if(!e.navigationAriaLabel)return e.navigationAriaLabelledby||_}),d=Aa(),f=Ta(()=>e.isForm&&!r.value?"form":"div"),h=Ta(()=>f.value==="form"?{submit(w){w.preventDefault(),a("submit",w)}}:{}),F=Aa(!0),m=(w,R)=>{f.value==="form"&&!d.value.reportValidity()||(b(R),window.setTimeout(()=>E(),300))},b=w=>{F.value=!1,a("closing",w)},E=()=>{F.value=!0,a("update:open",!1)},A=Ta(()=>({canClose:e.canClose,container:e.container===void 0?"body":e.container,labelId:_,size:e.size,show:e.open&&F.value,outTransition:e.outTransition,closeOnClickOutside:e.closeOnClickOutside,additionalTrapElements:e.additionalTrapElements}));return{dialogElement:d,dialogListeners:h,dialogTagName:f,handleButtonClose:m,handleClosing:b,handleClosed:E,hasNavigation:r,navigationId:_,navigationAriaLabelAttr:l,navigationAriaLabelledbyAttr:g,isNavigationCollapsed:s,modalProps:A,wrapper:n}}});var P1=function(){var e=this,a=e._self._c;return e._self._setupProxy,e.open?a("NcModal",e._b({staticClass:"dialog__modal",attrs:{"enable-slideshow":!1,"enable-swipe":!1},on:{close:e.handleClosed,"update:show":function(i){return e.handleClosing()}}},"NcModal",e.modalProps,!1),[a("h2",{staticClass:"dialog__name",attrs:{id:e.navigationId},domProps:{textContent:e._s(e.name)}}),a(e.dialogTagName,e._g({ref:"dialogElement",tag:"component",staticClass:"dialog",class:e.dialogClasses},e.dialogListeners),[a("div",{ref:"wrapper",class:["dialog__wrapper",{"dialog__wrapper--collapsed":e.isNavigationCollapsed}]},[e.hasNavigation?a("nav",{staticClass:"dialog__navigation",class:e.navigationClasses,attrs:{"aria-label":e.navigationAriaLabelAttr,"aria-labelledby":e.navigationAriaLabelledbyAttr}},[e._t("navigation",null,{isCollapsed:e.isNavigationCollapsed})],2):e._e(),a("div",{staticClass:"dialog__content",class:e.contentClasses},[e._t("default",function(){return[a("p",{staticClass:"dialog__text"},[e._v(" "+e._s(e.message)+" ")])]})],2)]),a("div",{staticClass:"dialog__actions"},[e._t("actions",function(){return e._l(e.buttons,function(i,n){return a("NcDialogButton",e._b({key:n,on:{click:e.handleButtonClose}},"NcDialogButton",i,!1))})})],2)])],1):e._e()},G1=[],U1=ae(H1,P1,G1,!1,null,"e79a4708");const G2=U1.exports;function Ws(){try{return Wt("core","capabilities")}catch{return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"),"_oc_capabilities"in window?window._oc_capabilities:{}}}const z1='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-eye" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>';function W1(e,a,i){const n=`${e.dirname}/${e.basename}`.replace(/^\/\//,"/"),o=()=>{const s={...window.OCP.Files.Router.query};delete s.openfile,window.OCP.Files.Router.goToRoute(null,window.OCP.Files.Router.params,s)};q0(e,a,i),window.OCA.Viewer.open({path:n,onPrev(s){q0(s,a,i)},onNext(s){q0(s,a,i)},onClose:o})}function q0(e,a,i){window.OCP.Files.Router.goToRoute(null,{view:a.id,fileid:e.fileid},{dir:i,openfile:!0},!0)}function $1(){Rl(new Cl({id:"view",displayName(){return B("viewer","View")},iconSvgInline:()=>z1,default:Nl.DEFAULT,enabled:e=>e.some(a=>!(a.isDavRessource&&a.root?.startsWith("/files")))?!1:!e.some(a=>(a.permissions&Ol.READ)===0||!window.OCA.Viewer.mimetypes.includes(a.mime)),exec:W1}))}function ri(e,a,i){e.$set(e.$data._asyncComputed[a],"state",i),e.$set(e.$data._asyncComputed[a],"updating",i==="updating"),e.$set(e.$data._asyncComputed[a],"error",i==="error"),e.$set(e.$data._asyncComputed[a],"success",i==="success")}function V1(e){return typeof e=="function"?e:e.get}function an(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function Bn(e){return an(e,"lazy")&&e.lazy}function Q1(e,a){return e[xn+a]}var xn="async_computed$lazy_active$",$t="async_computed$lazy_data$";function K1(e,a,i){e[xn+a]=!1,e[$t+a]=i}function J1(e){return{get:function(){return this[xn+e]=!0,this[$t+e]},set:function(a){this[$t+e]=a}}}function X1(e,a,i){e[$t+a]=i}function e_(e,a){return e[$t+a]}var a_=function(e){return function(){var a=this;return e.watch.forEach(function(i){var n=i.split(".");if(n.length===1)a[i];else try{var o=a;n.forEach(function(s){o=o[s]})}catch(s){throw console.error("AsyncComputed: bad path: ",i),s}}),e.get.call(this)}},t_=function(e){return function(){return e.watch.call(this),e.get.call(this)}};function i_(e){if(typeof e.watch=="function")return t_(e);if(Array.isArray(e.watch))return e.watch.forEach(function(a){if(typeof a!="string")throw new Error("AsyncComputed: watch elemnts must be strings")}),a_(e);throw Error("AsyncComputed: watch should be function or an array")}var $s=typeof Symbol=="function"?Symbol("did-not-update"):{},n_=function(e,a){return function(){return e.shouldUpdate.call(this)?a.call(this):$s}},o_=function(e){return $s===e},Vs="_async_computed$",Qs={install:function(e,a){a=a||{},e.config.optionMergeStrategies.asyncComputed=e.config.optionMergeStrategies.computed,e.mixin({data:function(){return{_asyncComputed:{}}},computed:{$asyncComputed:function(){return this.$data._asyncComputed}},beforeCreate:function(){var i=this.$options.asyncComputed||{};if(Object.keys(i).length){for(var n in i){var o=l_(n,i[n]);this.$options.computed[Vs+n]=o}this.$options.data=r_(this.$options,a)}},created:function(){for(var i in this.$options.asyncComputed||{}){var n=this.$options.asyncComputed[i],o=Ks.call(this,n,a);Bn(n)?X1(this,i,o):this[i]=o}for(var s in this.$options.asyncComputed||{})s_(this,s,a,e)}})}};function s_(e,a,i,n){var o=0,s=function(r){var _=++o;o_(r)||((!r||!r.then)&&(r=Promise.resolve(r)),ri(e,a,"updating"),r.then(function(l){_===o&&(ri(e,a,"success"),e[a]=l)}).catch(function(l){if(_===o&&(ri(e,a,"error"),n.set(e.$data._asyncComputed[a],"exception",l),i.errorHandler!==!1)){var g=i.errorHandler===void 0?console.error.bind(console,"Error evaluating async computed property:"):i.errorHandler;i.useRawError?g(l,e,l.stack):g(l.stack)}}))};n.set(e.$data._asyncComputed,a,{exception:null,update:function(){e._isDestroyed||s(V1(e.$options.asyncComputed[a]).apply(e))}}),ri(e,a,"updating"),e.$watch(Vs+a,s,{immediate:!0})}function r_(e,a){var i=e.data,n=e.asyncComputed||{};return function(o){var s=(typeof i=="function"?i.call(this,o):i)||{};for(var r in n){var _=this.$options.asyncComputed[r],l=Ks.call(this,_,a);Bn(_)?(K1(s,r,l),this.$options.computed[r]=J1(r)):s[r]=l}return s}}function l_(e,a){if(typeof a=="function")return a;var i=a.get;if(an(a,"watch")&&(i=i_(a)),an(a,"shouldUpdate")&&(i=n_(a,i)),Bn(a)){var n=i;i=function(){return Q1(this,e)?n.call(this):e_(this,e)}}return i}function Ks(e,a){var i=null;return"default"in e?i=e.default:"default"in a&&(i=a.default),typeof i=="function"?i.call(this):i}typeof window<"u"&&window.Vue&&window.Vue.use(Qs);const __={name:"PlayCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var d_=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon play-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},f_=[],g_=ii(__,d_,f_,!1,null,null);const h_=g_.exports;ie();function Va(e,a,i=!1){const n=Bl().proxy;return i&&n.$props[e]===void 0&&n.$props.modelValue===void 0&&ua.util.warn(`Missing required prop: "modelValue" or old "${e}"`),Ta({get(){return n.$props[e]!==void 0?n.$props[e]:n.$props.modelValue},set(o){n.$emit("update:modelValue",o),n.$emit("update:model-value",o),n.$emit(a,o)}})}let Js=class Xs{static fromString(a){return new Xs(a)}constructor(a){this.value=a}icaltype="binary";decodeValue(){return this._b64_decode(this.value)}setEncodedValue(a){this.value=this._b64_encode(a)}_b64_encode(a){let i,n,o,s,r,_,l,g,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=0,h=0,F="",m=[];if(!a)return a;do i=a.charCodeAt(f++),n=a.charCodeAt(f++),o=a.charCodeAt(f++),g=i<<16|n<<8|o,s=g>>18&63,r=g>>12&63,_=g>>6&63,l=63&g,m[h++]=d.charAt(s)+d.charAt(r)+d.charAt(_)+d.charAt(l);while(f<a.length);F=m.join("");let b=a.length%3;return(b?F.slice(0,b-3):F)+"===".slice(b||3)}_b64_decode(a){let i,n,o,s,r,_,l,g,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=0,h=0,F="",m=[];if(!a)return a;a+="";do s=d.indexOf(a.charAt(f++)),r=d.indexOf(a.charAt(f++)),_=d.indexOf(a.charAt(f++)),l=d.indexOf(a.charAt(f++)),g=s<<18|r<<12|_<<6|l,i=g>>16&255,n=g>>8&255,o=255&g,m[h++]=_==64?String.fromCharCode(i):l==64?String.fromCharCode(i,n):String.fromCharCode(i,n,o);while(f<a.length);return F=m.join(""),F}toString(){return this.value}};const F_=/([PDWHMTS]{1,1})/,u_=["weeks","days","hours","minutes","seconds","isNegative"];class Ze{static fromSeconds(a){return new Ze().fromSeconds(a)}static isValueString(a){return a[0]==="P"||a[1]==="P"}static fromString(a){let i=0,n=Object.create(null),o=0;for(;(i=a.search(F_))!==-1;){let s=a[i],r=a.slice(0,Math.max(0,i));a=a.slice(i+1),o+=c_(s,r,n)}if(o<2)throw new Error('invalid duration value: Not enough duration components in "'+a+'"');return new Ze(n)}static fromData(a){return new Ze(a)}constructor(a){this.wrappedJSObject=this,this.fromData(a)}weeks=0;days=0;hours=0;minutes=0;seconds=0;isNegative=!1;icalclass="icalduration";icaltype="duration";clone(){return Ze.fromData(this)}toSeconds(){let a=this.seconds+60*this.minutes+3600*this.hours+86400*this.days+604800*this.weeks;return this.isNegative?-a:a}fromSeconds(a){let i=Math.abs(a);return this.isNegative=a<0,this.days=Be(i/86400),this.days%7==0?(this.weeks=this.days/7,this.days=0):this.weeks=0,i-=86400*(this.days+7*this.weeks),this.hours=Be(i/3600),i-=3600*this.hours,this.minutes=Be(i/60),i-=60*this.minutes,this.seconds=i,this}fromData(a){for(let i of u_)this[i]=a&&i in a?a[i]:0}reset(){this.isNegative=!1,this.weeks=0,this.days=0,this.hours=0,this.minutes=0,this.seconds=0}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(i<n)}normalize(){this.fromSeconds(this.toSeconds())}toString(){if(this.toSeconds()==0)return"PT0S";{let a="";return this.isNegative&&(a+="-"),a+="P",this.weeks&&(a+=this.weeks+"W"),this.days&&(a+=this.days+"D"),(this.hours||this.minutes||this.seconds)&&(a+="T",this.hours&&(a+=this.hours+"H"),this.minutes&&(a+=this.minutes+"M"),this.seconds&&(a+=this.seconds+"S")),a}}toICALString(){return this.toString()}}function c_(e,a,i){let n;switch(e){case"P":i.isNegative=!(!a||a!=="-");break;case"D":n="days";break;case"W":n="weeks";break;case"H":n="hours";break;case"M":n="minutes";break;case"S":n="seconds";break;default:return 0}if(n){if(!a&&a!==0)throw new Error('invalid duration value: Missing number before "'+e+'"');let o=parseInt(a,10);if(Vt(o))throw new Error('invalid duration value: Invalid number "'+a+'" before "'+e+'"');i[n]=o}return 1}class x{static _dowCache={};static _wnCache={};static daysInMonth(a,i){let n=30;return a<1||a>12||(n=[0,31,28,31,30,31,30,31,31,30,31,30,31][a],a==2&&(n+=x.isLeapYear(i))),n}static isLeapYear(a){return a<=1752?a%4==0:a%4==0&&a%100!=0||a%400==0}static fromDayOfYear(a,i){let n=i,o=a,s=new x;s.auto_normalize=!1;let r=x.isLeapYear(n)?1:0;if(o<1)return n--,r=x.isLeapYear(n)?1:0,o+=x.daysInYearPassedMonth[r][12],x.fromDayOfYear(o,n);if(o>x.daysInYearPassedMonth[r][12])return r=x.isLeapYear(n)?1:0,o-=x.daysInYearPassedMonth[r][12],n++,x.fromDayOfYear(o,n);s.year=n,s.isDate=!0;for(let _=11;_>=0;_--)if(o>x.daysInYearPassedMonth[r][_]){s.month=_+1,s.day=o-x.daysInYearPassedMonth[r][_];break}return s.auto_normalize=!0,s}static fromStringv2(a){return new x({year:parseInt(a.slice(0,4),10),month:parseInt(a.slice(5,7),10),day:parseInt(a.slice(8,10),10),isDate:!0})}static fromDateString(a){return new x({year:qe(a.slice(0,4)),month:qe(a.slice(5,7)),day:qe(a.slice(8,10)),isDate:!0})}static fromDateTimeString(a,i){if(a.length<19)throw new Error('invalid date-time value: "'+a+'"');let n,o;a[19]&&a[19]==="Z"?n=K.utcTimezone:i&&(o=i.getParameter("tzid"),i.parent&&(i.parent.name==="standard"||i.parent.name==="daylight"?n=K.localTimezone:o&&(n=i.parent.getTimeZoneByID(o))));const s={year:qe(a.slice(0,4)),month:qe(a.slice(5,7)),day:qe(a.slice(8,10)),hour:qe(a.slice(11,13)),minute:qe(a.slice(14,16)),second:qe(a.slice(17,19))};return o&&!n&&(s.timezone=o),new x(s,n)}static fromString(a,i){return a.length>10?x.fromDateTimeString(a,i):x.fromDateString(a)}static fromJSDate(a,i){return new x().fromJSDate(a,i)}static fromData=function(a,i){return new x().fromData(a,i)};static now(){return x.fromJSDate(new Date,!1)}static weekOneStarts(a,i){let n=x.fromData({year:a,month:1,day:1,isDate:!0}),o=n.dayOfWeek(),s=i||x.DEFAULT_WEEK_START;return o>x.THURSDAY&&(n.day+=7),s>x.THURSDAY&&(n.day-=7),n.day-=o-s,n}static getDominicalLetter(a){let i="GFEDCBA",n=(a+(a/4|0)+(a/400|0)-(a/100|0)-1)%7;return x.isLeapYear(a)?i[(n+6)%7]+i[n]:i[n]}static#e=null;static get epochTime(){return this.#e||(this.#e=x.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0,isDate:!1,timezone:"Z"})),this.#e}static _cmp_attr(a,i,n){return a[n]>i[n]?1:a[n]<i[n]?-1:0}static daysInYearPassedMonth=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];static SUNDAY=1;static MONDAY=2;static TUESDAY=3;static WEDNESDAY=4;static THURSDAY=5;static FRIDAY=6;static SATURDAY=7;static DEFAULT_WEEK_START=2;constructor(a,i){this.wrappedJSObject=this;let n=this._time=Object.create(null);n.year=0,n.month=1,n.day=1,n.hour=0,n.minute=0,n.second=0,n.isDate=!1,this.fromData(a,i)}icalclass="icaltime";_cachedUnixTime=null;get icaltype(){return this.isDate?"date":"date-time"}zone=null;_pendingNormalization=!1;clone(){return new x(this._time,this.zone)}reset(){this.fromData(x.epochTime),this.zone=K.utcTimezone}resetTo(a,i,n,o,s,r,_){this.fromData({year:a,month:i,day:n,hour:o,minute:s,second:r,zone:_})}fromJSDate(a,i){return a?i?(this.zone=K.utcTimezone,this.year=a.getUTCFullYear(),this.month=a.getUTCMonth()+1,this.day=a.getUTCDate(),this.hour=a.getUTCHours(),this.minute=a.getUTCMinutes(),this.second=a.getUTCSeconds()):(this.zone=K.localTimezone,this.year=a.getFullYear(),this.month=a.getMonth()+1,this.day=a.getDate(),this.hour=a.getHours(),this.minute=a.getMinutes(),this.second=a.getSeconds()):this.reset(),this._cachedUnixTime=null,this}fromData(a,i){if(a)for(let[n,o]of Object.entries(a))n!=="icaltype"&&(this[n]=o);if(i&&(this.zone=i),a&&!("isDate"in a)?this.isDate=!("hour"in a):a&&"isDate"in a&&(this.isDate=a.isDate),a&&"timezone"in a){let n=xi.get(a.timezone);this.zone=n||K.localTimezone}return a&&"zone"in a&&(this.zone=a.zone),this.zone||(this.zone=K.localTimezone),this._cachedUnixTime=null,this}dayOfWeek(a){let i=a||x.SUNDAY,n=(this.year<<12)+(this.month<<8)+(this.day<<3)+i;if(n in x._dowCache)return x._dowCache[n];let o=this.day,s=this.month+(this.month<3?12:0),r=this.year-(this.month<3?1:0),_=o+r+Be(26*(s+1)/10)+Be(r/4);return _+=6*Be(r/100)+Be(r/400),_=(_+7-i)%7+1,x._dowCache[n]=_,_}dayOfYear(){let a=x.isLeapYear(this.year)?1:0;return x.daysInYearPassedMonth[a][this.month-1]+this.day}startOfWeek(a){let i=a||x.SUNDAY,n=this.clone();return n.day-=(this.dayOfWeek()+7-i)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}endOfWeek(a){let i=a||x.SUNDAY,n=this.clone();return n.day+=(7-this.dayOfWeek()+i-x.SUNDAY)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}startOfMonth(){let a=this.clone();return a.day=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfMonth(){let a=this.clone();return a.day=x.daysInMonth(a.month,a.year),a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startOfYear(){let a=this.clone();return a.day=1,a.month=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfYear(){let a=this.clone();return a.day=31,a.month=12,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startDoyWeek(a){let i=a||x.SUNDAY,n=this.dayOfWeek()-i;return n<0&&(n+=7),this.dayOfYear()-n}getDominicalLetter(){return x.getDominicalLetter(this.year)}nthWeekDay(a,i){let n,o=x.daysInMonth(this.month,this.year),s=i,r=0,_=this.clone();if(s>=0){_.day=1,s!=0&&s--,r=_.day;let l=a-_.dayOfWeek();l<0&&(l+=7),r+=l,r-=a,n=a}else _.day=o,s++,n=_.dayOfWeek()-a,n<0&&(n+=7),n=o-n;return n+=7*s,r+n}isNthWeekDay(a,i){let n=this.dayOfWeek();return i===0&&n===a||this.nthWeekDay(a,i)===this.day}weekNumber(a){let i,n=(this.year<<12)+(this.month<<8)+(this.day<<3)+a;if(n in x._wnCache)return x._wnCache[n];let o=this.clone();o.isDate=!0;let s=this.year;o.month==12&&o.day>25?(i=x.weekOneStarts(s+1,a),o.compare(i)<0?i=x.weekOneStarts(s,a):s++):(i=x.weekOneStarts(s,a),o.compare(i)<0&&(i=x.weekOneStarts(--s,a)));let r=Be(o.subtractDate(i).toSeconds()/86400/7)+1;return x._wnCache[n]=r,r}addDuration(a){let i=a.isNegative?-1:1,n=this.second,o=this.minute,s=this.hour,r=this.day;n+=i*a.seconds,o+=i*a.minutes,s+=i*a.hours,r+=i*a.days,r+=7*i*a.weeks,this.second=n,this.minute=o,this.hour=s,this.day=r,this._cachedUnixTime=null}subtractDate(a){let i=this.toUnixTime()+this.utcOffset(),n=a.toUnixTime()+a.utcOffset();return Ze.fromSeconds(i-n)}subtractDateTz(a){let i=this.toUnixTime(),n=a.toUnixTime();return Ze.fromSeconds(i-n)}compare(a){let i=this.toUnixTime(),n=a.toUnixTime();return i>n?1:n>i?-1:0}compareDateOnlyTz(a,i){let n=this.convertToZone(i),o=a.convertToZone(i),s=0;return(s=x._cmp_attr(n,o,"year"))!=0||(s=x._cmp_attr(n,o,"month"))!=0||(s=x._cmp_attr(n,o,"day")),s}convertToZone(a){let i=this.clone(),n=this.zone.tzid==a.tzid;return this.isDate||n||K.convert_time(i,this.zone,a),i.zone=a,i}utcOffset(){return this.zone==K.localTimezone||this.zone==K.utcTimezone?0:this.zone.utcOffset(this)}toICALString(){let a=this.toString();return a.length>10?Me.icalendar.value["date-time"].toICAL(a):Me.icalendar.value.date.toICAL(a)}toString(){let a=this.year+"-"+We(this.month)+"-"+We(this.day);return this.isDate||(a+="T"+We(this.hour)+":"+We(this.minute)+":"+We(this.second),this.zone===K.utcTimezone&&(a+="Z")),a}toJSDate(){return this.zone==K.localTimezone?this.isDate?new Date(this.year,this.month-1,this.day):new Date(this.year,this.month-1,this.day,this.hour,this.minute,this.second,0):new Date(1e3*this.toUnixTime())}_normalize(){return this._time.isDate&&(this._time.hour=0,this._time.minute=0,this._time.second=0),this.adjust(0,0,0,0),this}adjust(a,i,n,o,s){let r,_,l,g,d,f,h,F=0,m=0,b=s||this._time;if(b.isDate||(l=b.second+o,b.second=l%60,r=Be(l/60),b.second<0&&(b.second+=60,r--),g=b.minute+n+r,b.minute=g%60,_=Be(g/60),b.minute<0&&(b.minute+=60,_--),d=b.hour+i+_,b.hour=d%24,F=Be(d/24),b.hour<0&&(b.hour+=24,F--)),b.month>12?m=Be((b.month-1)/12):b.month<1&&(m=Be(b.month/12)-1),b.year+=m,b.month-=12*m,f=b.day+a+F,f>0)for(;h=x.daysInMonth(b.month,b.year),!(f<=h);)b.month++,b.month>12&&(b.year++,b.month=1),f-=h;else for(;f<=0;)b.month==1?(b.year--,b.month=12):b.month--,f+=x.daysInMonth(b.month,b.year);return b.day=f,this._cachedUnixTime=null,this}fromUnixTime(a){this.zone=K.utcTimezone;let i=new Date(1e3*a);this.year=i.getUTCFullYear(),this.month=i.getUTCMonth()+1,this.day=i.getUTCDate(),this._time.isDate?(this.hour=0,this.minute=0,this.second=0):(this.hour=i.getUTCHours(),this.minute=i.getUTCMinutes(),this.second=i.getUTCSeconds()),this._cachedUnixTime=null}toUnixTime(){if(this._cachedUnixTime!==null)return this._cachedUnixTime;let a=this.utcOffset(),i=Date.UTC(this.year,this.month-1,this.day,this.hour,this.minute,this.second-a);return this._cachedUnixTime=i/1e3,this._cachedUnixTime}toJSON(){let a,i=["year","month","day","hour","minute","second","isDate"],n=Object.create(null),o=0,s=i.length;for(;o<s;o++)a=i[o],n[a]=this[a];return this.zone&&(n.timezone=this.zone.tzid),n}}(function(){function e(a){Object.defineProperty(x.prototype,a,{get:function(){return this._pendingNormalization&&(this._normalize(),this._pendingNormalization=!1),this._time[a]},set:function(i){a==="isDate"&&i&&!this._time.isDate&&this.adjust(0,0,0,0),this._cachedUnixTime=null,this._pendingNormalization=!0,this._time[a]=i}})}e("year"),e("month"),e("day"),e("hour"),e("minute"),e("second"),e("isDate")})();const m_=/[^ \t]/,p_={"^'":'"',"^n":`
`,"^^":"^"};function fe(e){let a={},i=a.component=[];if(a.stack=[i],fe._eachLine(e,function(n,o){fe._handleContentLine(o,a)}),a.stack.length>1)throw new Xa("invalid ical body. component began but did not end");return a=null,i.length==1?i[0]:i}fe.property=function(e,a){let i={component:[[],[]],designSet:a||Me.defaultSet};return fe._handleContentLine(e,i),i.component[1][0]},fe.component=function(e){return fe(e)};class Xa extends Error{constructor(a){super(a),this.name=this.constructor.name;try{throw new Error}catch(i){if(i.stack){let n=i.stack.split(`
`);n.shift(),this.stack=n.join(`
`)}}}}fe.ParserError=Xa,fe._handleContentLine=function(e,a){let i,n,o,s,r,_,l=e.indexOf(":"),g=e.indexOf(";"),d={};if(g!==-1&&l!==-1&&g>l&&(g=-1),g!==-1){if(o=e.slice(0,Math.max(0,g)).toLowerCase(),r=fe._parseParameters(e.slice(Math.max(0,g)),0,a.designSet),r[2]==-1)throw new Xa("Invalid parameters in '"+e+"'");if(d=r[0],i=r[1].length+r[2]+g,(n=e.slice(Math.max(0,i)).indexOf(":"))===-1)throw new Xa("Missing parameter value in '"+e+"'");s=e.slice(Math.max(0,i+n+1))}else{if(l===-1)throw new Xa('invalid line (no token ";" or ":") "'+e+'"');if(o=e.slice(0,Math.max(0,l)).toLowerCase(),s=e.slice(Math.max(0,l+1)),o==="begin"){let A=[s.toLowerCase(),[],[]];return a.stack.length===1?a.component.push(A):a.component[2].push(A),a.stack.push(a.component),a.component=A,void(a.designSet||(a.designSet=Me.getDesignSet(a.component[0])))}if(o==="end")return void(a.component=a.stack.pop())}let f,h,F,m,b=!1,E=!1;a.designSet.propertyGroups&&o.indexOf(".")!==-1?(h=o.split("."),d.group=h[0],F=h[1]):F=o,F in a.designSet.property&&(f=a.designSet.property[F],"multiValue"in f&&(b=f.multiValue),"structuredValue"in f&&(E=f.structuredValue),s&&"detectType"in f&&(_=f.detectType(s))),_||(_="value"in d?d.value.toLowerCase():f?f.defaultType:"unknown"),delete d.value,b&&E?(s=fe._parseMultiValue(s,E,_,[],b,a.designSet,E),m=[F,d,_,s]):b?(m=[F,d,_],fe._parseMultiValue(s,b,_,m,null,a.designSet,!1)):E?(s=fe._parseMultiValue(s,E,_,[],null,a.designSet,E),m=[F,d,_,s]):(s=fe._parseValue(s,_,a.designSet,!1),m=[F,d,_,s]),a.component[0]!=="vcard"||a.component[1].length!==0||o==="version"&&s==="4.0"||(a.designSet=Me.getDesignSet("vcard3")),a.component[1].push(m)},fe._parseValue=function(e,a,i,n){return a in i.value&&"fromICAL"in i.value[a]?i.value[a].fromICAL(e,n):e},fe._parseParameters=function(e,a,i){let n,o,s,r,_,l,g=a,d=0,f={},h=-1;for(;d!==!1&&(d=sa(e,"=",d+1))!==-1;){if(n=e.slice(g+1,d),n.length==0)throw new Xa("Empty parameter name in '"+e+"'");if(o=n.toLowerCase(),l=!1,_=!1,r=o in i.param&&i.param[o].valueType?i.param[o].valueType:"text",o in i.param&&(_=i.param[o].multiValue,i.param[o].multiValueSeparateDQuote&&(l=fe._rfc6868Escape('"'+_+'"'))),e[d+1]==='"'){if(h=d+2,d=sa(e,'"',h),_&&d!=-1){let F=!0;for(;F;)e[d+1]==_&&e[d+2]=='"'?d=sa(e,'"',d+3):F=!1}if(d===-1)throw new Xa('invalid line (no matching double quote) "'+e+'"');s=e.slice(h,d),g=sa(e,";",d),g===-1&&(d=!1)}else{h=d+1;let F=sa(e,";",h),m=sa(e,":",h);m!==-1&&F>m?(F=m,d=!1):F===-1?(F=m===-1?e.length:m,d=!1):(g=F,d=F),s=e.slice(h,F)}if(s=fe._rfc6868Escape(s),_){let F=l||_;s=fe._parseMultiValue(s,F,r,[],null,i)}else s=fe._parseValue(s,r,i);_&&o in f?Array.isArray(f[o])?f[o].push(s):f[o]=[f[o],s]:f[o]=s}return[f,s,h]},fe._rfc6868Escape=function(e){return e.replace(/\^['n^]/g,function(a){return p_[a]})},fe._parseMultiValue=function(e,a,i,n,o,s,r){let _,l=0,g=0;if(a.length===0)return e;for(;(l=sa(e,a,g))!==-1;)_=e.slice(g,l),_=o?fe._parseMultiValue(_,o,i,[],null,s,r):fe._parseValue(_,i,s,r),n.push(_),g=l+a.length;return _=e.slice(g),_=o?fe._parseMultiValue(_,o,i,[],null,s,r):fe._parseValue(_,i,s,r),n.push(_),n.length==1?n[0]:n},fe._eachLine=function(e,a){let i,n,o,s=e.length,r=e.search(m_),_=r;do _=e.indexOf(`
`,r)+1,o=_>1&&e[_-2]==="\r"?2:1,_===0&&(_=s,o=0),n=e[r],n===" "||n==="	"?i+=e.slice(r+1,_-o):(i&&a(null,i),i=e.slice(r,_-o)),r=_;while(_!==s);i=i.trim(),i.length&&a(null,i)};const b_=["tzid","location","tznames","latitude","longitude"];class K{static _compare_change_fn(a,i){return a.year<i.year?-1:a.year>i.year?1:a.month<i.month?-1:a.month>i.month?1:a.day<i.day?-1:a.day>i.day?1:a.hour<i.hour?-1:a.hour>i.hour?1:a.minute<i.minute?-1:a.minute>i.minute?1:a.second<i.second?-1:a.second>i.second?1:0}static convert_time(a,i,n){if(a.isDate||i.tzid==n.tzid||i==K.localTimezone||n==K.localTimezone)return a.zone=n,a;let o=i.utcOffset(a);return a.adjust(0,0,0,-o),o=n.utcOffset(a),a.adjust(0,0,0,o),null}static fromData(a){return new K().fromData(a)}static#e=null;static get utcTimezone(){return this.#e||(this.#e=K.fromData({tzid:"UTC"})),this.#e}static#a=null;static get localTimezone(){return this.#a||(this.#a=K.fromData({tzid:"floating"})),this.#a}static adjust_change(a,i,n,o,s){return x.prototype.adjust.call(a,i,n,o,s,a)}static _minimumExpansionYear=-1;static EXTRA_COVERAGE=5;constructor(a){this.wrappedJSObject=this,this.fromData(a)}tzid="";location="";tznames="";latitude=0;longitude=0;component=null;expandedUntilYear=0;icalclass="icaltimezone";fromData(a){if(this.expandedUntilYear=0,this.changes=[],a instanceof $e)this.component=a;else{if(a&&"component"in a)if(typeof a.component=="string"){let i=fe(a.component);this.component=new $e(i)}else a.component instanceof $e?this.component=a.component:this.component=null;for(let i of b_)a&&i in a&&(this[i]=a[i])}return this.component instanceof $e&&!this.tzid&&(this.tzid=this.component.getFirstPropertyValue("tzid")),this}utcOffset(a){if(this==K.utcTimezone||this==K.localTimezone||(this._ensureCoverage(a.year),!this.changes.length))return 0;let i={year:a.year,month:a.month,day:a.day,hour:a.hour,minute:a.minute,second:a.second},n=this._findNearbyChange(i),o=-1,s=1;for(;;){let _=lt(this.changes[n],!0);if(_.utcOffset<_.prevUtcOffset?K.adjust_change(_,0,0,0,_.utcOffset):K.adjust_change(_,0,0,0,_.prevUtcOffset),K._compare_change_fn(i,_)>=0?o=n:s=-1,s==-1&&o!=-1)break;if(n+=s,n<0)return 0;if(n>=this.changes.length)break}let r=this.changes[o];if(r.utcOffset-r.prevUtcOffset<0&&o>0){let _=lt(r,!0);if(K.adjust_change(_,0,0,0,_.prevUtcOffset),K._compare_change_fn(i,_)<0){let l=this.changes[o-1],g=!1;r.is_daylight!=g&&l.is_daylight==g&&(r=l)}}return r.utcOffset}_findNearbyChange(a){let i=it(this.changes,a,K._compare_change_fn);return i>=this.changes.length?this.changes.length-1:i}_ensureCoverage(a){if(K._minimumExpansionYear==-1){let n=x.now();K._minimumExpansionYear=n.year}let i=a;if(i<K._minimumExpansionYear&&(i=K._minimumExpansionYear),i+=K.EXTRA_COVERAGE,!this.changes.length||this.expandedUntilYear<a){let n=this.component.getAllSubcomponents(),o=n.length,s=0;for(;s<o;s++)this._expandComponent(n[s],i,this.changes);this.changes.sort(K._compare_change_fn),this.expandedUntilYear=i}}_expandComponent(a,i,n){if(!a.hasProperty("dtstart")||!a.hasProperty("tzoffsetto")||!a.hasProperty("tzoffsetfrom"))return null;let o,s=a.getFirstProperty("dtstart").getFirstValue();function r(l){return l.factor*(3600*l.hours+60*l.minutes)}function _(){let l={};return l.is_daylight=a.name=="daylight",l.utcOffset=r(a.getFirstProperty("tzoffsetto").getFirstValue()),l.prevUtcOffset=r(a.getFirstProperty("tzoffsetfrom").getFirstValue()),l}if(a.hasProperty("rrule")||a.hasProperty("rdate")){let l=a.getAllProperties("rdate");for(let d of l){let f=d.getFirstValue();o=_(),o.year=f.year,o.month=f.month,o.day=f.day,f.isDate?(o.hour=s.hour,o.minute=s.minute,o.second=s.second,s.zone!=K.utcTimezone&&K.adjust_change(o,0,0,0,-o.prevUtcOffset)):(o.hour=f.hour,o.minute=f.minute,o.second=f.second,f.zone!=K.utcTimezone&&K.adjust_change(o,0,0,0,-o.prevUtcOffset)),n.push(o)}let g=a.getFirstProperty("rrule");if(g){g=g.getFirstValue(),o=_(),g.until&&g.until.zone==K.utcTimezone&&(g.until.adjust(0,0,0,o.prevUtcOffset),g.until.zone=K.localTimezone);let d,f=g.iterator(s);for(;(d=f.next())&&(o=_(),!(d.year>i)&&d);)o.year=d.year,o.month=d.month,o.day=d.day,o.hour=d.hour,o.minute=d.minute,o.second=d.second,o.isDate=d.isDate,K.adjust_change(o,0,0,0,-o.prevUtcOffset),n.push(o)}}else o=_(),o.year=s.year,o.month=s.month,o.day=s.day,o.hour=s.hour,o.minute=s.minute,o.second=s.second,K.adjust_change(o,0,0,0,-o.prevUtcOffset),n.push(o);return n}toString(){return this.tznames?this.tznames:this.tzid}}let Ue=null;const xi={get count(){return Ue===null?0:Object.keys(Ue).length},reset:function(){Ue=Object.create(null);let e=K.utcTimezone;Ue.Z=e,Ue.UTC=e,Ue.GMT=e},has:function(e){return Ue!==null&&!!Ue[e]},get:function(e){return Ue===null&&this.reset(),Ue[e]},register:function(e,a){if(Ue===null&&this.reset(),e instanceof $e&&e.name==="vtimezone"&&(e=(a=new K(e)).tzid),!(a instanceof K))throw new TypeError("timezone must be ICAL.Timezone or ICAL.Component");Ue[e]=a},remove:function(e){return Ue===null?null:delete Ue[e]}};function Vt(e){return typeof e=="number"&&isNaN(e)}function qe(e){let a=parseInt(e,10);if(Vt(a))throw new Error('Could not extract integer from "'+e+'"');return a}function Da(e,a){if(e!==void 0)return e instanceof a?e:new a(e)}function sa(e,a,i){for(;(i=e.indexOf(a,i))!==-1;){if(!(i>0&&e[i-1]==="\\"))return i;i+=1}return-1}function it(e,a,i){if(!e.length)return 0;let n,o,s=0,r=e.length-1;for(;s<=r;)if(n=s+Math.floor((r-s)/2),o=i(a,e[n]),o<0)r=n-1;else{if(!(o>0))break;s=n+1}return o<0?n:o>0?n+1:n}function lt(e,a){if(e&&typeof e=="object"){if(e instanceof Date)return new Date(e.getTime());if("clone"in e)return e.clone();if(Array.isArray(e)){let i=[];for(let n=0;n<e.length;n++)i.push(a?lt(e[n],!0):e[n]);return i}{let i={};for(let[n,o]of Object.entries(e))i[n]=a?lt(o,!0):o;return i}}return e}function er(e){let a="",i=e||"",n=0,o=0;for(;i.length;){let s=i.codePointAt(n);s<128?++o:o+=s<2048?2:s<65536?3:4,o<Ne.foldLength+1?n+=s>65535?2:1:(a+=Ne.newLineChar+" "+i.slice(0,Math.max(0,n)),i=i.slice(Math.max(0,n)),n=o=0)}return a.slice(Ne.newLineChar.length+1)}function We(e){switch(typeof e!="string"&&(typeof e=="number"&&(e=parseInt(e)),e=String(e)),e.length){case 0:return"00";case 1:return"0"+e;default:return e}}function Be(e){return e<0?Math.ceil(e):Math.floor(e)}function dt(e,a){for(let i in e){let n=Object.getOwnPropertyDescriptor(e,i);n&&!Object.getOwnPropertyDescriptor(a,i)&&Object.defineProperty(a,i,n)}return a}var T_=Object.freeze({__proto__:null,updateTimezones:function(e){let a,i,n,o,s;if(!e||e.name!=="vcalendar")return e;for(a=e.getAllSubcomponents(),i=[],n={},s=0;s<a.length;s++)a[s].name==="vtimezone"?n[a[s].getFirstProperty("tzid").getFirstValue()]=a[s]:i=i.concat(a[s].getAllProperties());for(o={},s=0;s<i.length;s++){let r=i[s].getParameter("tzid");r&&(o[r]=!0)}for(let[r,_]of Object.entries(n))o[r]||e.removeSubcomponent(_);for(let r of Object.keys(o))!n[r]&&xi.has(r)&&e.addSubcomponent(xi.get(r).component);return e},isStrictlyNaN:Vt,strictParseInt:qe,formatClassType:Da,unescapedIndexOf:sa,binsearchInsert:it,clone:lt,foldline:er,pad2:We,trunc:Be,extend:dt});class la{static fromString(a){let i={};return i.factor=a[0]==="+"?1:-1,i.hours=qe(a.slice(1,3)),i.minutes=qe(a.slice(4,6)),new la(i)}static fromSeconds(a){let i=new la;return i.fromSeconds(a),i}constructor(a){this.fromData(a)}hours=0;minutes=0;factor=1;icaltype="utc-offset";clone(){return la.fromSeconds(this.toSeconds())}fromData(a){if(a)for(let[i,n]of Object.entries(a))this[i]=n;this._normalize()}fromSeconds(a){let i=Math.abs(a);return this.factor=a<0?-1:1,this.hours=Be(i/3600),i-=3600*this.hours,this.minutes=Be(i/60),this}toSeconds(){return this.factor*(60*this.minutes+3600*this.hours)}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(n>i)}_normalize(){let a=this.toSeconds(),i=this.factor;for(;a<-43200;)a+=97200;for(;a>50400;)a-=97200;this.fromSeconds(a),a==0&&(this.factor=i)}toICALString(){return Me.icalendar.value["utc-offset"].toICAL(this.toString())}toString(){return(this.factor==1?"+":"-")+We(this.hours)+":"+We(this.minutes)}}class Ya extends x{static fromDateAndOrTimeString(a,i){function n(b,E,A){return b?qe(b.slice(E,E+A)):null}let o=a.split("T"),s=o[0],r=o[1],_=r?Me.vcard.value.time._splitZone(r):[],l=_[0],g=_[1],d=s?s.length:0,f=g?g.length:0,h=s&&s[0]=="-"&&s[1]=="-",F=g&&g[0]=="-",m={year:h?null:n(s,0,4),month:!h||d!=4&&d!=7?d==7||d==10?n(s,5,2):null:n(s,2,2),day:d==5?n(s,3,2):d==7&&h?n(s,5,2):d==10?n(s,8,2):null,hour:F?null:n(g,0,2),minute:F&&f==3?n(g,1,2):f>4?n(g,F?1:3,2):null,second:f==4?n(g,2,2):f==6?n(g,4,2):f==8?n(g,6,2):null};return l=l=="Z"?K.utcTimezone:l&&l[3]==":"?la.fromString(l):null,new Ya(m,l,i)}constructor(a,i,n){super(a,i),this.icaltype=n||"date-and-or-time"}icalclass="vcardtime";icaltype="date-and-or-time";clone(){return new Ya(this._time,this.zone,this.icaltype)}_normalize(){return this}utcOffset(){return this.zone instanceof la?this.zone.toSeconds():x.prototype.utcOffset.apply(this,arguments)}toICALString(){return Me.vcard.value[this.icaltype].toICAL(this.toString())}toString(){let a,i=this.year,n=this.month,o=this.day,s=this.hour,r=this.minute,_=this.second,l=n!==null,g=o!==null,d=s!==null,f=r!==null,h=_!==null,F=(i!==null?We(i)+(l||g?"-":""):l||g?"--":"")+(l?We(n):"")+(g?"-"+We(o):""),m=(d?We(s):"-")+(d&&f?":":"")+(f?We(r):"")+(d||f?"":"-")+(f&&h?":":"")+(h?We(_):"");switch(this.zone===K.utcTimezone?a="Z":this.zone instanceof la?a=this.zone.toString():this.zone===K.localTimezone?a="":this.zone instanceof K?a=la.fromSeconds(this.zone.utcOffset(this)).toString():a="",this.icaltype){case"time":return m+a;case"date-and-or-time":case"date-time":return F+(m=="--"?"":"T"+m+a);case"date":return F}return null}}class ha{static _indexMap={BYSECOND:0,BYMINUTE:1,BYHOUR:2,BYDAY:3,BYMONTHDAY:4,BYYEARDAY:5,BYWEEKNO:6,BYMONTH:7,BYSETPOS:8};static _expandMap={SECONDLY:[1,1,1,1,1,1,1,1],MINUTELY:[2,1,1,1,1,1,1,1],HOURLY:[2,2,1,1,1,1,1,1],DAILY:[2,2,2,1,1,1,1,1],WEEKLY:[2,2,2,2,3,3,1,1],MONTHLY:[2,2,2,2,2,3,3,1],YEARLY:[2,2,2,2,2,2,2,2]};static UNKNOWN=0;static CONTRACT=1;static EXPAND=2;static ILLEGAL=3;constructor(a){this.fromData(a)}completed=!1;rule=null;dtstart=null;last=null;occurrence_number=0;by_indices=null;initialized=!1;by_data=null;days=null;days_index=0;fromData(a){if(this.rule=Da(a.rule,Le),!this.rule)throw new Error("iterator requires a (ICAL.Recur) rule");if(this.dtstart=Da(a.dtstart,x),!this.dtstart)throw new Error("iterator requires a (ICAL.Time) dtstart");a.by_data?this.by_data=a.by_data:this.by_data=lt(this.rule.parts,!0),a.occurrence_number&&(this.occurrence_number=a.occurrence_number),this.days=a.days||[],a.last&&(this.last=Da(a.last,x)),this.by_indices=a.by_indices,this.by_indices||(this.by_indices={BYSECOND:0,BYMINUTE:0,BYHOUR:0,BYDAY:0,BYMONTH:0,BYWEEKNO:0,BYMONTHDAY:0}),this.initialized=a.initialized||!1,this.initialized||this.init()}init(){this.initialized=!0,this.last=this.dtstart.clone();let a=this.by_data;if("BYDAY"in a&&this.sort_byday_rules(a.BYDAY),"BYYEARDAY"in a&&("BYMONTH"in a||"BYWEEKNO"in a||"BYMONTHDAY"in a||"BYDAY"in a))throw new Error("Invalid BYYEARDAY rule");if("BYWEEKNO"in a&&"BYMONTHDAY"in a)throw new Error("BYWEEKNO does not fit to BYMONTHDAY");if(this.rule.freq=="MONTHLY"&&("BYYEARDAY"in a||"BYWEEKNO"in a))throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");if(this.rule.freq=="WEEKLY"&&("BYYEARDAY"in a||"BYMONTHDAY"in a))throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");if(this.rule.freq!="YEARLY"&&"BYYEARDAY"in a)throw new Error("BYYEARDAY may only appear in YEARLY rules");this.last.second=this.setup_defaults("BYSECOND","SECONDLY",this.dtstart.second),this.last.minute=this.setup_defaults("BYMINUTE","MINUTELY",this.dtstart.minute),this.last.hour=this.setup_defaults("BYHOUR","HOURLY",this.dtstart.hour);let i=this.last.day=this.setup_defaults("BYMONTHDAY","DAILY",this.dtstart.day);if(this.last.month=this.setup_defaults("BYMONTH","MONTHLY",this.dtstart.month),this.rule.freq=="WEEKLY")if("BYDAY"in a){let[,n]=this.ruleDayOfWeek(a.BYDAY[0],this.rule.wkst),o=n-this.last.dayOfWeek(this.rule.wkst);(this.last.dayOfWeek(this.rule.wkst)<n&&o>=0||o<0)&&(this.last.day+=o)}else{let n=Le.numericDayToIcalDay(this.dtstart.dayOfWeek());a.BYDAY=[n]}if(this.rule.freq=="YEARLY"){for(;this.expand_year_days(this.last.year),!(this.days.length>0);)this.increment_year(this.rule.interval);this._nextByYearDay()}if(this.rule.freq=="MONTHLY"&&this.has_by_data("BYDAY")){let n=null,o=this.last.clone(),s=x.daysInMonth(this.last.month,this.last.year);for(let r of this.by_data.BYDAY){this.last=o.clone();let[_,l]=this.ruleDayOfWeek(r),g=this.last.nthWeekDay(l,_);if(_>=6||_<=-6)throw new Error("Malformed values in BYDAY part");if(g>s||g<=0){if(n&&n.month==o.month)continue;for(;g>s||g<=0;)this.increment_month(),s=x.daysInMonth(this.last.month,this.last.year),g=this.last.nthWeekDay(l,_)}this.last.day=g,(!n||this.last.compare(n)<0)&&(n=this.last.clone())}if(this.last=n.clone(),this.has_by_data("BYMONTHDAY")&&this._byDayAndMonthDay(!0),this.last.day>s||this.last.day==0)throw new Error("Malformed values in BYDAY part")}else if(this.has_by_data("BYMONTHDAY")){this.last.day=1;let n=x.daysInMonth(this.last.month,this.last.year);if(i<0)this.last.day=n+i+1;else if(this.by_data.BYMONTHDAY[0]>n){if(!this.next_month()&&!this.next_month()&&!this.next_month())throw new Error("No possible occurrences")}else this.last.day=i}}next(){let a,i=this.last?this.last.clone():null;if(this.rule.count&&this.occurrence_number>=this.rule.count||this.rule.until&&this.last.compare(this.rule.until)>0)return this.completed=!0,null;if(this.occurrence_number==0&&this.last.compare(this.dtstart)>=0)return this.occurrence_number++,this.last;do switch(a=1,this.rule.freq){case"SECONDLY":this.next_second();break;case"MINUTELY":this.next_minute();break;case"HOURLY":this.next_hour();break;case"DAILY":this.next_day();break;case"WEEKLY":this.next_week();break;case"MONTHLY":a=this.next_month();break;case"YEARLY":this.next_year();break;default:return null}while(!this.check_contracting_rules()||this.last.compare(this.dtstart)<0||!a);if(this.last.compare(i)==0)throw new Error("Same occurrence found twice, protecting you from death by recursion");return this.rule.until&&this.last.compare(this.rule.until)>0?(this.completed=!0,null):(this.occurrence_number++,this.last)}next_second(){return this.next_generic("BYSECOND","SECONDLY","second","minute")}increment_second(a){return this.increment_generic(a,"second",60,"minute")}next_minute(){return this.next_generic("BYMINUTE","MINUTELY","minute","hour","next_second")}increment_minute(a){return this.increment_generic(a,"minute",60,"hour")}next_hour(){return this.next_generic("BYHOUR","HOURLY","hour","monthday","next_minute")}increment_hour(a){this.increment_generic(a,"hour",24,"monthday")}next_day(){let a=this.rule.freq=="DAILY";return this.next_hour()==0||(a?this.increment_monthday(this.rule.interval):this.increment_monthday(1)),0}next_week(){let a=0;if(this.next_weekday_by_week()==0)return a;if(this.has_by_data("BYWEEKNO")){this.by_indices.BYWEEKNO++,this.by_indices.BYWEEKNO==this.by_data.BYWEEKNO.length&&(this.by_indices.BYWEEKNO=0,a=1),this.last.month=1,this.last.day=1;let i=this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];this.last.day+=7*i,a&&this.increment_year(1)}else this.increment_monthday(7*this.rule.interval);return a}normalizeByMonthDayRules(a,i,n){let o,s=x.daysInMonth(i,a),r=[],_=0,l=n.length;for(;_<l;_++)if(o=n[_],!(Math.abs(o)>s)){if(o<0)o=s+(o+1);else if(o===0)continue;r.indexOf(o)===-1&&r.push(o)}return r.sort(function(g,d){return g-d})}_byDayAndMonthDay(a){let i,n,o,s,r=this.by_data.BYDAY,_=0,l=r.length,g=0,d=this,f=this.last.day;function h(){for(s=x.daysInMonth(d.last.month,d.last.year),i=d.normalizeByMonthDayRules(d.last.year,d.last.month,d.by_data.BYMONTHDAY),o=i.length;i[_]<=f&&(!a||i[_]!=f)&&_<o-1;)_++}function F(){f=0,d.increment_month(),_=0,h()}h(),a&&(f-=1);let m=48;for(;!g&&m;){if(m--,n=f+1,n>s){F();continue}let b=i[_++];if(b>=n){f=b;for(let E=0;E<l;E++){let A=this.ruleDayOfWeek(r[E]),w=A[0],R=A[1];if(this.last.day=f,this.last.isNthWeekDay(R,w)){g=1;break}}g||_!==o||F()}else F()}if(m<=0)throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");return g}next_month(){let a=1;if(this.next_hour()==0)return a;if(this.has_by_data("BYDAY")&&this.has_by_data("BYMONTHDAY"))a=this._byDayAndMonthDay();else if(this.has_by_data("BYDAY")){let i,n=x.daysInMonth(this.last.month,this.last.year),o=0,s=0;if(this.has_by_data("BYSETPOS")){let r=this.last.day;for(let _=1;_<=n;_++)this.last.day=_,this.is_day_in_byday(this.last)&&(s++,_<=r&&o++);this.last.day=r}for(a=0,i=this.last.day+1;i<=n;i++)if(this.last.day=i,this.is_day_in_byday(this.last)&&(!this.has_by_data("BYSETPOS")||this.check_set_position(++o)||this.check_set_position(o-s-1))){a=1;break}i>n&&(this.last.day=1,this.increment_month(),this.is_day_in_byday(this.last)?this.has_by_data("BYSETPOS")&&!this.check_set_position(1)||(a=1):a=0)}else if(this.has_by_data("BYMONTHDAY")){this.by_indices.BYMONTHDAY++,this.by_indices.BYMONTHDAY>=this.by_data.BYMONTHDAY.length&&(this.by_indices.BYMONTHDAY=0,this.increment_month());let i=x.daysInMonth(this.last.month,this.last.year),n=this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];n<0&&(n=i+n+1),n>i?(this.last.day=1,a=this.is_day_in_byday(this.last)):this.last.day=n}else{this.increment_month();let i=x.daysInMonth(this.last.month,this.last.year);this.by_data.BYMONTHDAY[0]>i?a=0:this.last.day=this.by_data.BYMONTHDAY[0]}return a}next_weekday_by_week(){let a=0;if(this.next_hour()==0)return a;if(!this.has_by_data("BYDAY"))return 1;for(;;){let i=new x;this.by_indices.BYDAY++,this.by_indices.BYDAY==Object.keys(this.by_data.BYDAY).length&&(this.by_indices.BYDAY=0,a=1);let n=this.by_data.BYDAY[this.by_indices.BYDAY],o=this.ruleDayOfWeek(n)[1];o-=this.rule.wkst,o<0&&(o+=7),i.year=this.last.year,i.month=this.last.month,i.day=this.last.day;let s=i.startDoyWeek(this.rule.wkst);if(o+s<1&&!a)continue;let r=x.fromDayOfYear(s+o,this.last.year);return this.last.year=r.year,this.last.month=r.month,this.last.day=r.day,a}}next_year(){if(this.next_hour()==0)return 0;if(++this.days_index==this.days.length){this.days_index=0;do this.increment_year(this.rule.interval),this.expand_year_days(this.last.year);while(this.days.length==0)}return this._nextByYearDay(),1}_nextByYearDay(){let a=this.days[this.days_index],i=this.last.year;a<1&&(a+=1,i+=1);let n=x.fromDayOfYear(a,i);this.last.day=n.day,this.last.month=n.month}ruleDayOfWeek(a,i){let n=a.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);return n?[parseInt(n[1]||0,10),a=Le.icalDayToNumericDay(n[2],i)]:[0,0]}next_generic(a,i,n,o,s){let r=a in this.by_data,_=this.rule.freq==i,l=0;if(s&&this[s]()==0)return l;if(r){this.by_indices[a]++;let g=this.by_data[a];this.by_indices[a]==g.length&&(this.by_indices[a]=0,l=1),this.last[n]=g[this.by_indices[a]]}else _&&this["increment_"+n](this.rule.interval);return r&&l&&_&&this["increment_"+o](1),l}increment_monthday(a){for(let i=0;i<a;i++){let n=x.daysInMonth(this.last.month,this.last.year);this.last.day++,this.last.day>n&&(this.last.day-=n,this.increment_month())}}increment_month(){if(this.last.day=1,this.has_by_data("BYMONTH"))this.by_indices.BYMONTH++,this.by_indices.BYMONTH==this.by_data.BYMONTH.length&&(this.by_indices.BYMONTH=0,this.increment_year(1)),this.last.month=this.by_data.BYMONTH[this.by_indices.BYMONTH];else{this.rule.freq=="MONTHLY"?this.last.month+=this.rule.interval:this.last.month++,this.last.month--;let a=Be(this.last.month/12);this.last.month%=12,this.last.month++,a!=0&&this.increment_year(a)}}increment_year(a){this.last.year+=a}increment_generic(a,i,n,o){this.last[i]+=a;let s=Be(this.last[i]/n);this.last[i]%=n,s!=0&&this["increment_"+o](s)}has_by_data(a){return a in this.rule.parts}expand_year_days(a){let i=new x;this.days=[];let n={},o=["BYDAY","BYWEEKNO","BYMONTHDAY","BYMONTH","BYYEARDAY"];for(let r of o)r in this.rule.parts&&(n[r]=this.rule.parts[r]);if("BYMONTH"in n&&"BYWEEKNO"in n){let r=1,_={};i.year=a,i.isDate=!0;for(let l=0;l<this.by_data.BYMONTH.length;l++){let g=this.by_data.BYMONTH[l];i.month=g,i.day=1;let d=i.weekNumber(this.rule.wkst);i.day=x.daysInMonth(g,a);let f=i.weekNumber(this.rule.wkst);for(l=d;l<f;l++)_[l]=1}for(let l=0;l<this.by_data.BYWEEKNO.length&&r;l++)this.by_data.BYWEEKNO[l]<52?r&=_[l]:r=0;r?delete n.BYMONTH:delete n.BYWEEKNO}let s=Object.keys(n).length;if(s==0){let r=this.dtstart.clone();r.year=this.last.year,this.days.push(r.dayOfYear())}else if(s==1&&"BYMONTH"in n)for(let r of this.by_data.BYMONTH){let _=this.dtstart.clone();_.year=a,_.month=r,_.isDate=!0,this.days.push(_.dayOfYear())}else if(s==1&&"BYMONTHDAY"in n)for(let r of this.by_data.BYMONTHDAY){let _=this.dtstart.clone();r<0&&(r=r+x.daysInMonth(_.month,a)+1),_.day=r,_.year=a,_.isDate=!0,this.days.push(_.dayOfYear())}else if(s==2&&"BYMONTHDAY"in n&&"BYMONTH"in n)for(let r of this.by_data.BYMONTH){let _=x.daysInMonth(r,a);for(let l of this.by_data.BYMONTHDAY)l<0&&(l=l+_+1),i.day=l,i.month=r,i.year=a,i.isDate=!0,this.days.push(i.dayOfYear())}else if(!(s==1&&"BYWEEKNO"in n)&&!(s==2&&"BYWEEKNO"in n&&"BYMONTHDAY"in n))if(s==1&&"BYDAY"in n)this.days=this.days.concat(this.expand_by_day(a));else if(s==2&&"BYDAY"in n&&"BYMONTH"in n){for(let r of this.by_data.BYMONTH){let _=x.daysInMonth(r,a);i.year=a,i.month=r,i.day=1,i.isDate=!0;let l=i.dayOfWeek(),g=i.dayOfYear()-1;i.day=_;let d=i.dayOfWeek();if(this.has_by_data("BYSETPOS")){let f=[];for(let h=1;h<=_;h++)i.day=h,this.is_day_in_byday(i)&&f.push(h);for(let h=0;h<f.length;h++)(this.check_set_position(h+1)||this.check_set_position(h-f.length))&&this.days.push(g+f[h])}else for(let f of this.by_data.BYDAY){let h,F=this.ruleDayOfWeek(f),m=F[0],b=F[1],E=(b+7-l)%7+1,A=_-(d+7-b)%7;if(m==0)for(let w=E;w<=_;w+=7)this.days.push(g+w);else m>0?(h=E+7*(m-1),h<=_&&this.days.push(g+h)):(h=A+7*(m+1),h>0&&this.days.push(g+h))}}this.days.sort(function(r,_){return r-_})}else if(s==2&&"BYDAY"in n&&"BYMONTHDAY"in n){let r=this.expand_by_day(a);for(let _ of r){let l=x.fromDayOfYear(_,a);this.by_data.BYMONTHDAY.indexOf(l.day)>=0&&this.days.push(_)}}else if(s==3&&"BYDAY"in n&&"BYMONTHDAY"in n&&"BYMONTH"in n){let r=this.expand_by_day(a);for(let _ of r){let l=x.fromDayOfYear(_,a);this.by_data.BYMONTH.indexOf(l.month)>=0&&this.by_data.BYMONTHDAY.indexOf(l.day)>=0&&this.days.push(_)}}else if(s==2&&"BYDAY"in n&&"BYWEEKNO"in n){let r=this.expand_by_day(a);for(let _ of r){let l=x.fromDayOfYear(_,a).weekNumber(this.rule.wkst);this.by_data.BYWEEKNO.indexOf(l)&&this.days.push(_)}}else s==3&&"BYDAY"in n&&"BYWEEKNO"in n&&"BYMONTHDAY"in n||(this.days=s==1&&"BYYEARDAY"in n?this.days.concat(this.by_data.BYYEARDAY):[]);return 0}expand_by_day(a){let i=[],n=this.last.clone();n.year=a,n.month=1,n.day=1,n.isDate=!0;let o=n.dayOfWeek();n.month=12,n.day=31,n.isDate=!0;let s=n.dayOfWeek(),r=n.dayOfYear();for(let _ of this.by_data.BYDAY){let l=this.ruleDayOfWeek(_),g=l[0],d=l[1];if(g==0)for(let f=(d+7-o)%7+1;f<=r;f+=7)i.push(f);else if(g>0){let f;f=d>=o?d-o+1:d-o+8,i.push(f+7*(g-1))}else{let f;g=-g,f=d<=s?r-s+d:r-s+d-7,i.push(f-7*(g-1))}}return i}is_day_in_byday(a){if(this.by_data.BYDAY)for(let i of this.by_data.BYDAY){let n=this.ruleDayOfWeek(i),o=n[0],s=n[1],r=a.dayOfWeek();if(o==0&&s==r||a.nthWeekDay(s,o)==a.day)return 1}return 0}check_set_position(a){return this.has_by_data("BYSETPOS")?this.by_data.BYSETPOS.indexOf(a)!==-1:!1}sort_byday_rules(a){for(let i=0;i<a.length;i++)for(let n=0;n<i;n++)if(this.ruleDayOfWeek(a[n],this.rule.wkst)[1]>this.ruleDayOfWeek(a[i],this.rule.wkst)[1]){let o=a[i];a[i]=a[n],a[n]=o}}check_contract_restriction(a,i){let n=ha._indexMap[a],o=ha._expandMap[this.rule.freq][n],s=!1;if(a in this.by_data&&o==ha.CONTRACT){let r=this.by_data[a];for(let _ of r)if(_==i){s=!0;break}}else s=!0;return s}check_contracting_rules(){let a=this.last.dayOfWeek(),i=this.last.weekNumber(this.rule.wkst),n=this.last.dayOfYear();return this.check_contract_restriction("BYSECOND",this.last.second)&&this.check_contract_restriction("BYMINUTE",this.last.minute)&&this.check_contract_restriction("BYHOUR",this.last.hour)&&this.check_contract_restriction("BYDAY",Le.numericDayToIcalDay(a))&&this.check_contract_restriction("BYWEEKNO",i)&&this.check_contract_restriction("BYMONTHDAY",this.last.day)&&this.check_contract_restriction("BYMONTH",this.last.month)&&this.check_contract_restriction("BYYEARDAY",n)}setup_defaults(a,i,n){let o=ha._indexMap[a];return ha._expandMap[this.rule.freq][o]!=ha.CONTRACT&&(a in this.by_data||(this.by_data[a]=[n]),this.rule.freq!=i)?this.by_data[a][0]:n}toJSON(){let a=Object.create(null);return a.initialized=this.initialized,a.rule=this.rule.toJSON(),a.dtstart=this.dtstart.toJSON(),a.by_data=this.by_data,a.days=this.days,a.last=this.last.toJSON(),a.by_indices=this.by_indices,a.occurrence_number=this.occurrence_number,a}}const D_=/^(SU|MO|TU|WE|TH|FR|SA)$/,y_=/^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/,ar={SU:x.SUNDAY,MO:x.MONDAY,TU:x.TUESDAY,WE:x.WEDNESDAY,TH:x.THURSDAY,FR:x.FRIDAY,SA:x.SATURDAY},E_=Object.fromEntries(Object.entries(ar).map(e=>e.reverse())),ho=["SECONDLY","MINUTELY","HOURLY","DAILY","WEEKLY","MONTHLY","YEARLY"];class Le{static fromString(a){let i=this._stringToData(a,!1);return new Le(i)}static fromData(a){return new Le(a)}static _stringToData(a,i){let n=Object.create(null),o=a.split(";"),s=o.length;for(let r=0;r<s;r++){let _=o[r].split("="),l=_[0].toUpperCase(),g=_[0].toLowerCase(),d=i?g:l,f=_[1];if(l in Z0){let h=f.split(","),F=0,m=h.length;for(;F<m;F++)h[F]=Z0[l](h[F]);n[d]=h.length==1?h[0]:h}else l in L0?L0[l](f,n,i):n[g]=f}return n}static icalDayToNumericDay(a,i){let n=i||x.SUNDAY;return(ar[a]-n+7)%7+1}static numericDayToIcalDay(a,i){let n=a+(i||x.SUNDAY)-x.SUNDAY;return n>7&&(n-=7),E_[n]}constructor(a){this.wrappedJSObject=this,this.parts={},a&&typeof a=="object"&&this.fromData(a)}parts=null;interval=1;wkst=x.MONDAY;until=null;count=null;freq=null;icalclass="icalrecur";icaltype="recur";iterator(a){return new ha({rule:this,dtstart:a})}clone(){return new Le(this.toJSON())}isFinite(){return!(!this.count&&!this.until)}isByCount(){return!(!this.count||this.until)}addComponent(a,i){let n=a.toUpperCase();n in this.parts?this.parts[n].push(i):this.parts[n]=[i]}setComponent(a,i){this.parts[a.toUpperCase()]=i.slice()}getComponent(a){let i=a.toUpperCase();return i in this.parts?this.parts[i].slice():[]}getNextOccurrence(a,i){let n,o=this.iterator(a);do n=o.next();while(n&&n.compare(i)<=0);return n&&i.zone&&(n.zone=i.zone),n}fromData(a){for(let i in a){let n=i.toUpperCase();n in Z0?Array.isArray(a[i])?this.parts[n]=a[i]:this.parts[n]=[a[i]]:this[i]=a[i]}this.interval&&typeof this.interval!="number"&&L0.INTERVAL(this.interval,this),this.wkst&&typeof this.wkst!="number"&&(this.wkst=Le.icalDayToNumericDay(this.wkst)),!this.until||this.until instanceof x||(this.until=x.fromString(this.until))}toJSON(){let a=Object.create(null);a.freq=this.freq,this.count&&(a.count=this.count),this.interval>1&&(a.interval=this.interval);for(let[i,n]of Object.entries(this.parts))Array.isArray(n)&&n.length==1?a[i.toLowerCase()]=n[0]:a[i.toLowerCase()]=lt(n);return this.until&&(a.until=this.until.toString()),"wkst"in this&&this.wkst!==x.DEFAULT_WEEK_START&&(a.wkst=Le.numericDayToIcalDay(this.wkst)),a}toString(){let a="FREQ="+this.freq;this.count&&(a+=";COUNT="+this.count),this.interval>1&&(a+=";INTERVAL="+this.interval);for(let[i,n]of Object.entries(this.parts))a+=";"+i+"="+n;return this.until&&(a+=";UNTIL="+this.until.toICALString()),"wkst"in this&&this.wkst!==x.DEFAULT_WEEK_START&&(a+=";WKST="+Le.numericDayToIcalDay(this.wkst)),a}}function Ra(e,a,i,n){let o=n;if(n[0]==="+"&&(o=n.slice(1)),o=qe(o),a!==void 0&&n<a)throw new Error(e+': invalid value "'+n+'" must be > '+a);if(i!==void 0&&n>i)throw new Error(e+': invalid value "'+n+'" must be < '+a);return o}const L0={FREQ:function(e,a,i){if(ho.indexOf(e)===-1)throw new Error('invalid frequency "'+e+'" expected: "'+ho.join(", ")+'"');a.freq=e},COUNT:function(e,a,i){a.count=qe(e)},INTERVAL:function(e,a,i){a.interval=qe(e),a.interval<1&&(a.interval=1)},UNTIL:function(e,a,i){e.length>10?a.until=Me.icalendar.value["date-time"].fromICAL(e):a.until=Me.icalendar.value.date.fromICAL(e),i||(a.until=x.fromString(a.until))},WKST:function(e,a,i){if(!D_.test(e))throw new Error('invalid WKST value "'+e+'"');a.wkst=Le.icalDayToNumericDay(e)}},Z0={BYSECOND:Ra.bind(void 0,"BYSECOND",0,60),BYMINUTE:Ra.bind(void 0,"BYMINUTE",0,59),BYHOUR:Ra.bind(void 0,"BYHOUR",0,23),BYDAY:function(e){if(y_.test(e))return e;throw new Error('invalid BYDAY value "'+e+'"')},BYMONTHDAY:Ra.bind(void 0,"BYMONTHDAY",-31,31),BYYEARDAY:Ra.bind(void 0,"BYYEARDAY",-366,366),BYWEEKNO:Ra.bind(void 0,"BYWEEKNO",-53,53),BYMONTH:Ra.bind(void 0,"BYMONTH",1,12),BYSETPOS:Ra.bind(void 0,"BYSETPOS",-366,366)};class xa{static fromString(a,i){let n=a.split("/");if(n.length!==2)throw new Error('Invalid string value: "'+a+'" must contain a "/" char.');let o={start:x.fromDateTimeString(n[0],i)},s=n[1];return Ze.isValueString(s)?o.duration=Ze.fromString(s):o.end=x.fromDateTimeString(s,i),new xa(o)}static fromData(a){return new xa(a)}static fromJSON(a,i,n){function o(s,r){return n?x.fromString(s,r):x.fromDateTimeString(s,r)}return Ze.isValueString(a[1])?xa.fromData({start:o(a[0],i),duration:Ze.fromString(a[1])}):xa.fromData({start:o(a[0],i),end:o(a[1],i)})}constructor(a){if(this.wrappedJSObject=this,a&&"start"in a){if(a.start&&!(a.start instanceof x))throw new TypeError(".start must be an instance of ICAL.Time");this.start=a.start}if(a&&a.end&&a.duration)throw new Error("cannot accept both end and duration");if(a&&"end"in a){if(a.end&&!(a.end instanceof x))throw new TypeError(".end must be an instance of ICAL.Time");this.end=a.end}if(a&&"duration"in a){if(a.duration&&!(a.duration instanceof Ze))throw new TypeError(".duration must be an instance of ICAL.Duration");this.duration=a.duration}}start=null;end=null;duration=null;icalclass="icalperiod";icaltype="period";clone(){return xa.fromData({start:this.start?this.start.clone():null,end:this.end?this.end.clone():null,duration:this.duration?this.duration.clone():null})}getDuration(){return this.duration?this.duration:this.end.subtractDate(this.start)}getEnd(){if(this.end)return this.end;{let a=this.start.clone();return a.addDuration(this.duration),a}}toString(){return this.start+"/"+(this.end||this.duration)}toJSON(){return[this.start.toString(),(this.end||this.duration).toString()]}toICALString(){return this.start.toICALString()+"/"+(this.end||this.duration).toICALString()}}const Fo=/\\\\|\\,|\\[Nn]/g,uo=/\\|,|\n/g;function tn(e,a){return{matches:/.*/,fromICAL:function(i,n){return function(o,s,r){return o.indexOf("\\")===-1?o:(r&&(s=new RegExp(s.source+"|\\\\"+r,s.flags)),o.replace(s,k_))}(i,e,n)},toICAL:function(i,n){let o=a;return n&&(o=new RegExp(o.source+"|"+n,o.flags)),i.replace(o,function(s){switch(s){case"\\":return"\\\\";case";":return"\\;";case",":return"\\,";case`
`:return"\\n";default:return s}})}}}const de={defaultType:"text"},Qt={defaultType:"text",multiValue:","},Mi={defaultType:"text",structuredValue:";"},li={defaultType:"integer"},_i={defaultType:"date-time",allowedTypes:["date-time","date"]},di={defaultType:"date-time"},ze={defaultType:"uri"},co={defaultType:"utc-offset"},mo={defaultType:"recur"},po={defaultType:"date-and-or-time",allowedTypes:["date-time","date","text"]};function k_(e){switch(e){case"\\\\":return"\\";case"\\;":return";";case"\\,":return",";case"\\n":case"\\N":return`
`;default:return e}}let Mn={categories:Qt,url:ze,version:de,uid:de},jn={boolean:{values:["TRUE","FALSE"],fromICAL:function(e){return e==="TRUE"},toICAL:function(e){return e?"TRUE":"FALSE"}},float:{matches:/^[+-]?\d+\.\d+$/,fromICAL:function(e){let a=parseFloat(e);return Vt(a)?0:a},toICAL:function(e){return String(e)}},integer:{fromICAL:function(e){let a=parseInt(e);return Vt(a)?0:a},toICAL:function(e){return String(e)}},"utc-offset":{toICAL:function(e){return e.length<7?e.slice(0,3)+e.slice(4,6):e.slice(0,3)+e.slice(4,6)+e.slice(7,9)},fromICAL:function(e){return e.length<6?e.slice(0,3)+":"+e.slice(3,5):e.slice(0,3)+":"+e.slice(3,5)+":"+e.slice(5,7)},decorate:function(e){return la.fromString(e)},undecorate:function(e){return e.toString()}}};const xe=dt(jn,{text:tn(/\\\\|\\;|\\,|\\[Nn]/g,/\\|;|,|\n/g),uri:{},binary:{decorate:function(e){return Js.fromString(e)},undecorate:function(e){return e.toString()}},"cal-address":{},date:{decorate:function(e,a){return ya.strict?x.fromDateString(e,a):x.fromString(e,a)},undecorate:function(e){return e.toString()},fromICAL:function(e){return!ya.strict&&e.length>=15?xe["date-time"].fromICAL(e):e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)},toICAL:function(e){let a=e.length;return a==10?e.slice(0,4)+e.slice(5,7)+e.slice(8,10):a>=19?xe["date-time"].toICAL(e):e}},"date-time":{fromICAL:function(e){{let a=e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)+"T"+e.slice(9,11)+":"+e.slice(11,13)+":"+e.slice(13,15);return e[15]&&e[15]==="Z"&&(a+="Z"),a}},toICAL:function(e){let a=e.length;if(a!=10||ya.strict){if(a>=19){let i=e.slice(0,4)+e.slice(5,7)+e.slice(8,13)+e.slice(14,16)+e.slice(17,19);return e[19]&&e[19]==="Z"&&(i+="Z"),i}return e}return xe.date.toICAL(e)},decorate:function(e,a){return ya.strict?x.fromDateTimeString(e,a):x.fromString(e,a)},undecorate:function(e){return e.toString()}},duration:{decorate:function(e){return Ze.fromString(e)},undecorate:function(e){return e.toString()}},period:{fromICAL:function(e){let a=e.split("/");return a[0]=xe["date-time"].fromICAL(a[0]),Ze.isValueString(a[1])||(a[1]=xe["date-time"].fromICAL(a[1])),a},toICAL:function(e){return e=e.slice(),e[0]=xe["date-time"].toICAL(e[0]),Ze.isValueString(e[1])||(e[1]=xe["date-time"].toICAL(e[1])),e.join("/")},decorate:function(e,a){return xa.fromJSON(e,a,!ya.strict)},undecorate:function(e){return e.toJSON()}},recur:{fromICAL:function(e){return Le._stringToData(e,!0)},toICAL:function(e){let a="";for(let[i,n]of Object.entries(e))i=="until"?n=n.length>10?xe["date-time"].toICAL(n):xe.date.toICAL(n):i=="wkst"?typeof n=="number"&&(n=Le.numericDayToIcalDay(n)):Array.isArray(n)&&(n=n.join(",")),a+=i.toUpperCase()+"="+n+";";return a.slice(0,Math.max(0,a.length-1))},decorate:function(e){return Le.fromData(e)},undecorate:function(e){return e.toJSON()}},time:{fromICAL:function(e){if(e.length<6)return e;let a=e.slice(0,2)+":"+e.slice(2,4)+":"+e.slice(4,6);return e[6]==="Z"&&(a+="Z"),a},toICAL:function(e){if(e.length<8)return e;let a=e.slice(0,2)+e.slice(3,5)+e.slice(6,8);return e[8]==="Z"&&(a+="Z"),a}}});let A_=dt(Mn,{action:de,attach:{defaultType:"uri"},attendee:{defaultType:"cal-address"},calscale:de,class:de,comment:de,completed:di,contact:de,created:di,description:de,dtend:_i,dtstamp:di,dtstart:_i,due:_i,duration:{defaultType:"duration"},exdate:{defaultType:"date-time",allowedTypes:["date-time","date"],multiValue:","},exrule:mo,freebusy:{defaultType:"period",multiValue:","},geo:{defaultType:"float",structuredValue:";"},"last-modified":di,location:de,method:de,organizer:{defaultType:"cal-address"},"percent-complete":li,priority:li,prodid:de,"related-to":de,repeat:li,rdate:{defaultType:"date-time",allowedTypes:["date-time","date","period"],multiValue:",",detectType:function(e){return e.indexOf("/")!==-1?"period":e.indexOf("T")===-1?"date":"date-time"}},"recurrence-id":_i,resources:Qt,"request-status":Mi,rrule:mo,sequence:li,status:de,summary:de,transp:de,trigger:{defaultType:"duration",allowedTypes:["duration","date-time"]},tzoffsetfrom:co,tzoffsetto:co,tzurl:ze,tzid:de,tzname:de});const ta=dt(jn,{text:tn(Fo,uo),uri:tn(Fo,uo),date:{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date")},undecorate:function(e){return e.toString()},fromICAL:function(e){return e.length==8?xe.date.fromICAL(e):e[0]=="-"&&e.length==6?e.slice(0,4)+"-"+e.slice(4):e},toICAL:function(e){return e.length==10?xe.date.toICAL(e):e[0]=="-"&&e.length==7?e.slice(0,4)+e.slice(5):e}},time:{decorate:function(e){return Ya.fromDateAndOrTimeString("T"+e,"time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=ta.time._splitZone(e,!0),i=a[0],n=a[1];return n.length==6?n=n.slice(0,2)+":"+n.slice(2,4)+":"+n.slice(4,6):n.length==4&&n[0]!="-"?n=n.slice(0,2)+":"+n.slice(2,4):n.length==5&&(n=n.slice(0,3)+":"+n.slice(3,5)),i.length!=5||i[0]!="-"&&i[0]!="+"||(i=i.slice(0,3)+":"+i.slice(3)),n+i},toICAL:function(e){let a=ta.time._splitZone(e),i=a[0],n=a[1];return n.length==8?n=n.slice(0,2)+n.slice(3,5)+n.slice(6,8):n.length==5&&n[0]!="-"?n=n.slice(0,2)+n.slice(3,5):n.length==6&&(n=n.slice(0,3)+n.slice(4,6)),i.length!=6||i[0]!="-"&&i[0]!="+"||(i=i.slice(0,3)+i.slice(4)),n+i},_splitZone:function(e,a){let i,n,o=e.length-1,s=e.length-(a?5:6),r=e[s];return e[o]=="Z"?(i=e[o],n=e.slice(0,Math.max(0,o))):e.length>6&&(r=="-"||r=="+")?(i=e.slice(s),n=e.slice(0,Math.max(0,s))):(i="",n=e),[i,n]}},"date-time":{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){return ta["date-and-or-time"].fromICAL(e)},toICAL:function(e){return ta["date-and-or-time"].toICAL(e)}},"date-and-or-time":{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date-and-or-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=e.split("T");return(a[0]?ta.date.fromICAL(a[0]):"")+(a[1]?"T"+ta.time.fromICAL(a[1]):"")},toICAL:function(e){let a=e.split("T");return ta.date.toICAL(a[0])+(a[1]?"T"+ta.time.toICAL(a[1]):"")}},timestamp:xe["date-time"],"language-tag":{matches:/^[a-zA-Z0-9-]+$/},"phone-number":{fromICAL:function(e){return Array.from(e).filter(function(a){return a==="\\"?void 0:a}).join("")},toICAL:function(e){return Array.from(e).map(function(a){return a===","||a===";"?"\\"+a:a}).join("")}}});let w_=dt(Mn,{adr:{defaultType:"text",structuredValue:";",multiValue:","},anniversary:po,bday:po,caladruri:ze,caluri:ze,clientpidmap:Mi,email:de,fburl:ze,fn:de,gender:Mi,geo:ze,impp:ze,key:ze,kind:de,lang:{defaultType:"language-tag"},logo:ze,member:ze,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:Qt,note:de,org:{defaultType:"text",structuredValue:";"},photo:ze,related:ze,rev:{defaultType:"timestamp"},role:de,sound:ze,source:ze,tel:{defaultType:"uri",allowedTypes:["uri","text"]},title:de,tz:{defaultType:"text",allowedTypes:["text","utc-offset","uri"]},xml:de}),S_=dt(jn,{binary:xe.binary,date:ta.date,"date-time":ta["date-time"],"phone-number":ta["phone-number"],uri:xe.uri,text:xe.text,time:xe.time,vcard:xe.text,"utc-offset":{toICAL:function(e){return e.slice(0,7)},fromICAL:function(e){return e.slice(0,7)},decorate:function(e){return la.fromString(e)},undecorate:function(e){return e.toString()}}}),v_=dt(Mn,{fn:de,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:Qt,photo:{defaultType:"binary",allowedTypes:["binary","uri"]},bday:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},adr:{defaultType:"text",structuredValue:";",multiValue:","},label:de,tel:{defaultType:"phone-number"},email:de,mailer:de,tz:{defaultType:"utc-offset",allowedTypes:["utc-offset","text"]},geo:{defaultType:"float",structuredValue:";"},title:de,role:de,logo:{defaultType:"binary",allowedTypes:["binary","uri"]},agent:{defaultType:"vcard",allowedTypes:["vcard","text","uri"]},org:Mi,note:Qt,prodid:de,rev:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},"sort-string":de,sound:{defaultType:"binary",allowedTypes:["binary","uri"]},class:de,key:{defaultType:"binary",allowedTypes:["binary","text"]}}),pa={value:xe,param:{cutype:{values:["INDIVIDUAL","GROUP","RESOURCE","ROOM","UNKNOWN"],allowXName:!0,allowIanaToken:!0},"delegated-from":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},"delegated-to":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},encoding:{values:["8BIT","BASE64"]},fbtype:{values:["FREE","BUSY","BUSY-UNAVAILABLE","BUSY-TENTATIVE"],allowXName:!0,allowIanaToken:!0},member:{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},partstat:{values:["NEEDS-ACTION","ACCEPTED","DECLINED","TENTATIVE","DELEGATED","COMPLETED","IN-PROCESS"],allowXName:!0,allowIanaToken:!0},range:{values:["THISANDFUTURE"]},related:{values:["START","END"]},reltype:{values:["PARENT","CHILD","SIBLING"],allowXName:!0,allowIanaToken:!0},role:{values:["REQ-PARTICIPANT","CHAIR","OPT-PARTICIPANT","NON-PARTICIPANT"],allowXName:!0,allowIanaToken:!0},rsvp:{values:["TRUE","FALSE"]},"sent-by":{valueType:"cal-address"},tzid:{matches:/^\//},value:{values:["binary","boolean","cal-address","date","date-time","duration","float","integer","period","recur","text","time","uri","utc-offset"],allowXName:!0,allowIanaToken:!0}},property:A_,propertyGroups:!1},bo={value:ta,param:{type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","time","date-time","date-and-or-time","timestamp","boolean","integer","float","utc-offset","language-tag"],allowXName:!0,allowIanaToken:!0}},property:w_,propertyGroups:!0},To={value:S_,param:{type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","date-time","phone-number","time","boolean","integer","float","utc-offset","vcard","binary"],allowXName:!0,allowIanaToken:!0}},property:v_,propertyGroups:!0};const ya={strict:!0,defaultSet:pa,defaultType:"unknown",components:{vcard:bo,vcard3:To,vevent:pa,vtodo:pa,vjournal:pa,valarm:pa,vtimezone:pa,daylight:pa,standard:pa},icalendar:pa,vcard:bo,vcard3:To,getDesignSet:function(e){return e&&e in ya.components?ya.components[e]:ya.defaultSet}};var Me=ya;const yi=`\r
`,Do="unknown",R_={'"':"^'","\n":"^n","^":"^^"};function ye(e){typeof e[0]=="string"&&(e=[e]);let a=0,i=e.length,n="";for(;a<i;a++)n+=ye.component(e[a])+yi;return n}ye.component=function(e,a){let i=e[0].toUpperCase(),n="BEGIN:"+i+yi,o=e[1],s=0,r=o.length,_=e[0];for(_==="vcard"&&e[1].length>0&&(e[1][0][0]!=="version"||e[1][0][3]!=="4.0")&&(_="vcard3"),a=a||Me.getDesignSet(_);s<r;s++)n+=ye.property(o[s],a)+yi;let l=e[2]||[],g=0,d=l.length;for(;g<d;g++)n+=ye.component(l[g],a)+yi;return n+="END:"+i,n},ye.property=function(e,a,i){let n=e[0].toUpperCase(),o=e[0],s=e[1];a||(a=Me.defaultSet);let r,_=s.group;r=a.propertyGroups&&_?_.toUpperCase()+"."+n:n;for(let[F,m]of Object.entries(s)){if(a.propertyGroups&&F=="group")continue;let b=a.param[F],E=b&&b.multiValue;E&&Array.isArray(m)?(m=m.map(function(A){return A=ye._rfc6868Unescape(A),A=ye.paramPropertyValue(A,b.multiValueSeparateDQuote)}),m=ye.multiValue(m,E,"unknown",null,a)):(m=ye._rfc6868Unescape(m),m=ye.paramPropertyValue(m)),r+=";"+F.toUpperCase()+"="+m}if(e.length===3)return r+":";let l,g=e[2],d=!1,f=!1,h=!1;return o in a.property?(l=a.property[o],"multiValue"in l&&(d=l.multiValue),"structuredValue"in l&&Array.isArray(e[3])&&(f=l.structuredValue),"defaultType"in l?g===l.defaultType&&(h=!0):g===Do&&(h=!0)):g===Do&&(h=!0),h||(r+=";VALUE="+g.toUpperCase()),r+=":",r+=d&&f?ye.multiValue(e[3],f,g,d,a,f):d?ye.multiValue(e.slice(3),d,g,null,a,!1):f?ye.multiValue(e[3],f,g,null,a,f):ye.value(e[3],g,a,!1),i?r:er(r)},ye.paramPropertyValue=function(e,a){return a||sa(e,",")!==-1||sa(e,":")!==-1||sa(e,";")!==-1?'"'+e+'"':e},ye.multiValue=function(e,a,i,n,o,s){let r="",_=e.length,l=0;for(;l<_;l++)n&&Array.isArray(e[l])?r+=ye.multiValue(e[l],n,i,null,o,s):r+=ye.value(e[l],i,o,s),l!==_-1&&(r+=a);return r},ye.value=function(e,a,i,n){return a in i.value&&"toICAL"in i.value[a]?i.value[a].toICAL(e,n):e},ye._rfc6868Unescape=function(e){return e.replace(/[\n^"]/g,function(a){return R_[a]})};class nt{static fromString(a,i){return new nt(fe.property(a,i))}constructor(a,i){this._parent=i||null,typeof a=="string"?(this.jCal=[a,{},Me.defaultType],this.jCal[2]=this.getDefaultType()):this.jCal=a,this._updateType()}get type(){return this.jCal[2]}get name(){return this.jCal[0]}get parent(){return this._parent}set parent(a){let i=!this._parent||a&&a._designSet!=this._parent._designSet;this._parent=a,this.type==Me.defaultType&&i&&(this.jCal[2]=this.getDefaultType(),this._updateType())}get _designSet(){return this.parent?this.parent._designSet:Me.defaultSet}_updateType(){let a=this._designSet;this.type in a.value&&("decorate"in a.value[this.type]?this.isDecorated=!0:this.isDecorated=!1,this.name in a.property&&(this.isMultiValue="multiValue"in a.property[this.name],this.isStructuredValue="structuredValue"in a.property[this.name]))}_hydrateValue(a){return this._values&&this._values[a]?this._values[a]:this.jCal.length<=3+a?null:this.isDecorated?(this._values||(this._values=[]),this._values[a]=this._decorate(this.jCal[3+a])):this.jCal[3+a]}_decorate(a){return this._designSet.value[this.type].decorate(a,this)}_undecorate(a){return this._designSet.value[this.type].undecorate(a,this)}_setDecoratedValue(a,i){this._values||(this._values=[]),typeof a=="object"&&"icaltype"in a?(this.jCal[3+i]=this._undecorate(a),this._values[i]=a):(this.jCal[3+i]=a,this._values[i]=this._decorate(a))}getParameter(a){return a in this.jCal[1]?this.jCal[1][a]:void 0}getFirstParameter(a){let i=this.getParameter(a);return Array.isArray(i)?i[0]:i}setParameter(a,i){let n=a.toLowerCase();typeof i=="string"&&n in this._designSet.param&&"multiValue"in this._designSet.param[n]&&(i=[i]),this.jCal[1][a]=i}removeParameter(a){delete this.jCal[1][a]}getDefaultType(){let a=this.jCal[0],i=this._designSet;if(a in i.property){let n=i.property[a];if("defaultType"in n)return n.defaultType}return Me.defaultType}resetType(a){this.removeAllValues(),this.jCal[2]=a,this._updateType()}getFirstValue(){return this._hydrateValue(0)}getValues(){let a=this.jCal.length-3;if(a<1)return[];let i=0,n=[];for(;i<a;i++)n[i]=this._hydrateValue(i);return n}removeAllValues(){this._values&&(this._values.length=0),this.jCal.length=3}setValues(a){if(!this.isMultiValue)throw new Error(this.name+`: does not not support mulitValue.
override isMultiValue`);let i=a.length,n=0;if(this.removeAllValues(),i>0&&typeof a[0]=="object"&&"icaltype"in a[0]&&this.resetType(a[0].icaltype),this.isDecorated)for(;n<i;n++)this._setDecoratedValue(a[n],n);else for(;n<i;n++)this.jCal[3+n]=a[n]}setValue(a){this.removeAllValues(),typeof a=="object"&&"icaltype"in a&&this.resetType(a.icaltype),this.isDecorated?this._setDecoratedValue(a,0):this.jCal[3]=a}toJSON(){return this.jCal}toICALString(){return ye.property(this.jCal,this._designSet,!0)}}class $e{static fromString(a){return new $e(fe.component(a))}constructor(a,i){typeof a=="string"&&(a=[a,[],[]]),this.jCal=a,this.parent=i||null,this.parent||this.name!=="vcalendar"||(this._timezoneCache=new Map)}_hydratedPropertyCount=0;_hydratedComponentCount=0;_timezoneCache=null;get name(){return this.jCal[0]}get _designSet(){return this.parent&&this.parent._designSet||Me.getDesignSet(this.name)}_hydrateComponent(a){if(this._components||(this._components=[],this._hydratedComponentCount=0),this._components[a])return this._components[a];let i=new $e(this.jCal[2][a],this);return this._hydratedComponentCount++,this._components[a]=i}_hydrateProperty(a){if(this._properties||(this._properties=[],this._hydratedPropertyCount=0),this._properties[a])return this._properties[a];let i=new nt(this.jCal[1][a],this);return this._hydratedPropertyCount++,this._properties[a]=i}getFirstSubcomponent(a){if(a){let i=0,n=this.jCal[2],o=n.length;for(;i<o;i++)if(n[i][0]===a)return this._hydrateComponent(i)}else if(this.jCal[2].length)return this._hydrateComponent(0);return null}getAllSubcomponents(a){let i=this.jCal[2].length,n=0;if(a){let o=this.jCal[2],s=[];for(;n<i;n++)a===o[n][0]&&s.push(this._hydrateComponent(n));return s}if(!this._components||this._hydratedComponentCount!==i)for(;n<i;n++)this._hydrateComponent(n);return this._components||[]}hasProperty(a){let i=this.jCal[1],n=i.length,o=0;for(;o<n;o++)if(i[o][0]===a)return!0;return!1}getFirstProperty(a){if(a){let i=0,n=this.jCal[1],o=n.length;for(;i<o;i++)if(n[i][0]===a)return this._hydrateProperty(i)}else if(this.jCal[1].length)return this._hydrateProperty(0);return null}getFirstPropertyValue(a){let i=this.getFirstProperty(a);return i?i.getFirstValue():null}getAllProperties(a){let i=this.jCal[1].length,n=0;if(a){let o=this.jCal[1],s=[];for(;n<i;n++)a===o[n][0]&&s.push(this._hydrateProperty(n));return s}if(!this._properties||this._hydratedPropertyCount!==i)for(;n<i;n++)this._hydrateProperty(n);return this._properties||[]}_removeObjectByIndex(a,i,n){if((i=i||[])[n]){let o=i[n];"parent"in o&&(o.parent=null)}i.splice(n,1),this.jCal[a].splice(n,1)}_removeObject(a,i,n){let o=0,s=this.jCal[a],r=s.length,_=this[i];if(typeof n=="string"){for(;o<r;o++)if(s[o][0]===n)return this._removeObjectByIndex(a,_,o),!0}else if(_){for(;o<r;o++)if(_[o]&&_[o]===n)return this._removeObjectByIndex(a,_,o),!0}return!1}_removeAllObjects(a,i,n){let o=this[i],s=this.jCal[a],r=s.length-1;for(;r>=0;r--)n&&s[r][0]!==n||this._removeObjectByIndex(a,o,r)}addSubcomponent(a){this._components||(this._components=[],this._hydratedComponentCount=0),a.parent&&a.parent.removeSubcomponent(a);let i=this.jCal[2].push(a.jCal);return this._components[i-1]=a,this._hydratedComponentCount++,a.parent=this,a}removeSubcomponent(a){let i=this._removeObject(2,"_components",a);return i&&this._hydratedComponentCount--,i}removeAllSubcomponents(a){let i=this._removeAllObjects(2,"_components",a);return this._hydratedComponentCount=0,i}addProperty(a){if(!(a instanceof nt))throw new TypeError("must be instance of ICAL.Property");this._properties||(this._properties=[],this._hydratedPropertyCount=0),a.parent&&a.parent.removeProperty(a);let i=this.jCal[1].push(a.jCal);return this._properties[i-1]=a,this._hydratedPropertyCount++,a.parent=this,a}addPropertyWithValue(a,i){let n=new nt(a);return n.setValue(i),this.addProperty(n),n}updatePropertyWithValue(a,i){let n=this.getFirstProperty(a);return n?n.setValue(i):n=this.addPropertyWithValue(a,i),n}removeProperty(a){let i=this._removeObject(1,"_properties",a);return i&&this._hydratedPropertyCount--,i}removeAllProperties(a){let i=this._removeAllObjects(1,"_properties",a);return this._hydratedPropertyCount=0,i}toJSON(){return this.jCal}toString(){return ye.component(this.jCal,this._designSet)}getTimeZoneByID(a){if(this.parent)return this.parent.getTimeZoneByID(a);if(!this._timezoneCache)return null;if(this._timezoneCache.has(a))return this._timezoneCache.get(a);const i=this.getAllSubcomponents("vtimezone");for(const n of i)if(n.getFirstProperty("tzid").getFirstValue()===a){const o=new K({component:n,tzid:a});return this._timezoneCache.set(a,o),o}return null}}class tr{constructor(a){this.ruleDates=[],this.exDates=[],this.fromData(a)}complete=!1;ruleIterators=null;ruleDates=null;exDates=null;ruleDateInc=0;exDateInc=0;exDate=null;ruleDate=null;dtstart=null;last=null;fromData(a){let i=Da(a.dtstart,x);if(!i)throw new Error(".dtstart (ICAL.Time) must be given");if(this.dtstart=i,a.component)this._init(a.component);else{if(this.last=Da(a.last,x)||i.clone(),!a.ruleIterators)throw new Error(".ruleIterators or .component must be given");this.ruleIterators=a.ruleIterators.map(function(n){return Da(n,ha)}),this.ruleDateInc=a.ruleDateInc,this.exDateInc=a.exDateInc,a.ruleDates&&(this.ruleDates=a.ruleDates.map(n=>Da(n,x)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.exDates&&(this.exDates=a.exDates.map(n=>Da(n,x)),this.exDate=this.exDates[this.exDateInc]),a.complete!==void 0&&(this.complete=a.complete)}}next(){let a,i,n,o=0;for(;;){if(o++>500)throw new Error("max tries have occurred, rule may be impossible to fulfill.");if(i=this.ruleDate,a=this._nextRecurrenceIter(this.last),!i&&!a){this.complete=!0;break}if((!i||a&&i.compare(a.last)>0)&&(i=a.last.clone(),a.next()),this.ruleDate===i&&this._nextRuleDay(),this.last=i,!this.exDate||(n=this.exDate.compare(this.last),n<0&&this._nextExDay(),n!==0))return this.last;this._nextExDay()}}toJSON(){function a(n){return n.toJSON()}let i=Object.create(null);return i.ruleIterators=this.ruleIterators.map(a),this.ruleDates&&(i.ruleDates=this.ruleDates.map(a)),this.exDates&&(i.exDates=this.exDates.map(a)),i.ruleDateInc=this.ruleDateInc,i.exDateInc=this.exDateInc,i.last=this.last.toJSON(),i.dtstart=this.dtstart.toJSON(),i.complete=this.complete,i}_extractDates(a,i){let n=[],o=a.getAllProperties(i);for(let s=0,r=o.length;s<r;s++)for(let _ of o[s].getValues()){let l=it(n,_,(g,d)=>g.compare(d));n.splice(l,0,_)}return n}_init(a){if(this.ruleIterators=[],this.last=this.dtstart.clone(),!a.hasProperty("rdate")&&!a.hasProperty("rrule")&&!a.hasProperty("recurrence-id"))return this.ruleDate=this.last.clone(),void(this.complete=!0);if(a.hasProperty("rdate")&&(this.ruleDates=this._extractDates(a,"rdate"),this.ruleDates[0]&&this.ruleDates[0].compare(this.dtstart)<0?(this.ruleDateInc=0,this.last=this.ruleDates[0].clone()):this.ruleDateInc=it(this.ruleDates,this.last,(i,n)=>i.compare(n)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.hasProperty("rrule")){let i,n,o=a.getAllProperties("rrule"),s=0,r=o.length;for(;s<r;s++)i=o[s].getFirstValue(),n=i.iterator(this.dtstart),this.ruleIterators.push(n),n.next()}a.hasProperty("exdate")&&(this.exDates=this._extractDates(a,"exdate"),this.exDateInc=it(this.exDates,this.last,(i,n)=>i.compare(n)),this.exDate=this.exDates[this.exDateInc])}_nextExDay(){this.exDate=this.exDates[++this.exDateInc]}_nextRuleDay(){this.ruleDate=this.ruleDates[++this.ruleDateInc]}_nextRecurrenceIter(){let a=this.ruleIterators;if(a.length===0)return null;let i,n,o,s=a.length,r=0;for(;r<s;r++)i=a[r],n=i.last,i.completed?(s--,r!==0&&r--,a.splice(r,1)):(!o||o.last.compare(n)>0)&&(o=i);return o}}class Kt{constructor(a,i){a instanceof $e||(i=a,a=null),this.component=a||new $e("vevent"),this._rangeExceptionCache=Object.create(null),this.exceptions=Object.create(null),this.rangeExceptions=[],i&&i.strictExceptions&&(this.strictExceptions=i.strictExceptions),i&&i.exceptions?i.exceptions.forEach(this.relateException,this):this.component.parent&&!this.isRecurrenceException()&&this.component.parent.getAllSubcomponents("vevent").forEach(function(n){n.hasProperty("recurrence-id")&&this.relateException(n)},this)}static THISANDFUTURE="THISANDFUTURE";exceptions=null;strictExceptions=!1;relateException(a){if(this.isRecurrenceException())throw new Error("cannot relate exception to exceptions");if(a instanceof $e&&(a=new Kt(a)),this.strictExceptions&&a.uid!==this.uid)throw new Error("attempted to relate unrelated exception");let i=a.recurrenceId.toString();if(this.exceptions[i]=a,a.modifiesFuture()){let n=[a.recurrenceId.toUnixTime(),i],o=it(this.rangeExceptions,n,yo);this.rangeExceptions.splice(o,0,n)}}modifiesFuture(){return this.component.hasProperty("recurrence-id")?this.component.getFirstProperty("recurrence-id").getParameter("range")===Kt.THISANDFUTURE:!1}findRangeException(a){if(!this.rangeExceptions.length)return null;let i=a.toUnixTime(),n=it(this.rangeExceptions,[i],yo);if(n-=1,n<0)return null;let o=this.rangeExceptions[n];return i<o[0]?null:o[1]}getOccurrenceDetails(a){let i,n=a.toString(),o=a.convertToZone(K.utcTimezone).toString(),s={recurrenceId:a};if(n in this.exceptions)i=s.item=this.exceptions[n],s.startDate=i.startDate,s.endDate=i.endDate,s.item=i;else if(o in this.exceptions)i=this.exceptions[o],s.startDate=i.startDate,s.endDate=i.endDate,s.item=i;else{let r,_=this.findRangeException(a);if(_){let l=this.exceptions[_];s.item=l;let g=this._rangeExceptionCache[_];if(!g){let f=l.recurrenceId.clone(),h=l.startDate.clone();f.zone=h.zone,g=h.subtractDate(f),this._rangeExceptionCache[_]=g}let d=a.clone();d.zone=l.startDate.zone,d.addDuration(g),r=d.clone(),r.addDuration(l.duration),s.startDate=d,s.endDate=r}else r=a.clone(),r.addDuration(this.duration),s.endDate=r,s.startDate=a,s.item=this}return s}iterator(a){return new tr({component:this.component,dtstart:a||this.startDate})}isRecurring(){let a=this.component;return a.hasProperty("rrule")||a.hasProperty("rdate")}isRecurrenceException(){return this.component.hasProperty("recurrence-id")}getRecurrenceTypes(){let a=this.component.getAllProperties("rrule"),i=0,n=a.length,o=Object.create(null);for(;i<n;i++)o[a[i].getFirstValue().freq]=!0;return o}get uid(){return this._firstProp("uid")}set uid(a){this._setProp("uid",a)}get startDate(){return this._firstProp("dtstart")}set startDate(a){this._setTime("dtstart",a)}get endDate(){let a=this._firstProp("dtend");if(!a){let i=this._firstProp("duration");a=this.startDate.clone(),i?a.addDuration(i):a.isDate&&(a.day+=1)}return a}set endDate(a){this.component.hasProperty("duration")&&this.component.removeProperty("duration"),this._setTime("dtend",a)}get duration(){return this._firstProp("duration")||this.endDate.subtractDateTz(this.startDate)}set duration(a){this.component.hasProperty("dtend")&&this.component.removeProperty("dtend"),this._setProp("duration",a)}get location(){return this._firstProp("location")}set location(a){this._setProp("location",a)}get attendees(){return this.component.getAllProperties("attendee")}get summary(){return this._firstProp("summary")}set summary(a){this._setProp("summary",a)}get description(){return this._firstProp("description")}set description(a){this._setProp("description",a)}get color(){return this._firstProp("color")}set color(a){this._setProp("color",a)}get organizer(){return this._firstProp("organizer")}set organizer(a){this._setProp("organizer",a)}get sequence(){return this._firstProp("sequence")}set sequence(a){this._setProp("sequence",a)}get recurrenceId(){return this._firstProp("recurrence-id")}set recurrenceId(a){this._setTime("recurrence-id",a)}_setTime(a,i){let n=this.component.getFirstProperty(a);n||(n=new nt(a),this.component.addProperty(n)),i.zone===K.localTimezone||i.zone===K.utcTimezone?n.removeParameter("tzid"):n.setParameter("tzid",i.zone.tzid),n.setValue(i)}_setProp(a,i){this.component.updatePropertyWithValue(a,i)}_firstProp(a){return this.component.getFirstPropertyValue(a)}toString(){return this.component.toString()}}function yo(e,a){return e[0]>a[0]?1:a[0]>e[0]?-1:0}var Ne={foldLength:75,debug:!1,newLineChar:`\r
`,Binary:Js,Component:$e,ComponentParser:class{constructor(e){e===void 0&&(e={});for(let[a,i]of Object.entries(e))this[a]=i}parseEvent=!0;parseTimezone=!0;oncomplete=function(){};onerror=function(e){};ontimezone=function(e){};onevent=function(e){};process(e){typeof e=="string"&&(e=fe(e)),e instanceof $e||(e=new $e(e));let a,i=e.getAllSubcomponents(),n=0,o=i.length;for(;n<o;n++)switch(a=i[n],a.name){case"vtimezone":if(this.parseTimezone){let s=a.getFirstPropertyValue("tzid");s&&this.ontimezone(new K({tzid:s,component:a}))}break;case"vevent":this.parseEvent&&this.onevent(new Kt(a));break;default:continue}this.oncomplete()}},Duration:Ze,Event:Kt,Period:xa,Property:nt,Recur:Le,RecurExpansion:tr,RecurIterator:ha,Time:x,Timezone:K,TimezoneService:xi,UtcOffset:la,VCardTime:Ya,parse:fe,stringify:ye,design:Me,helpers:T_};class Ea{constructor(a,i){this._timezoneId=null,this._ics=null,this._innerValue=null,this._initialized=!1,a instanceof Ne.Timezone?(this._innerValue=a,this._initialized=!0):a instanceof Ne.Component?(this._innerValue=new Ne.Timezone(a),this._initialized=!0):(this._timezoneId=a,this._ics=i)}get timezoneId(){return this._initialized?this._innerValue.tzid:this._timezoneId}offsetForArray(a,i,n,o,s,r){this._initialize();const _=new Ne.Time({year:a,month:i,day:n,hour:o,minute:s,second:r,isDate:!1});return this._innerValue.utcOffset(_)}timestampToArray(a){this._initialize();const i=Ne.Time.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0});i.fromUnixTime(Math.floor(a/1e3));const n=i.convertToZone(this._innerValue);return[n.year,n.month,n.day,n.hour,n.minute,n.second]}toICALTimezone(){return this._initialize(),this._innerValue}toICALJs(){return this._initialize(),this._innerValue.component}_initialize(){if(!this._initialized){const a=Ne.parse(this._ics),i=new Ne.Component(a);this._innerValue=new Ne.Timezone(i),this._initialized=!0}}}Ea.utc=new Ea(Ne.Timezone.utcTimezone),Ea.floating=new Ea(Ne.Timezone.localTimezone);const C_="2.2024a",N_={"AUS Central Standard Time":{aliasTo:"Australia/Darwin"},"AUS Eastern Standard Time":{aliasTo:"Australia/Sydney"},"Afghanistan Standard Time":{aliasTo:"Asia/Kabul"},"Africa/Asmera":{aliasTo:"Africa/Asmara"},"Africa/Timbuktu":{aliasTo:"Africa/Bamako"},"Alaskan Standard Time":{aliasTo:"America/Anchorage"},"America/Argentina/ComodRivadavia":{aliasTo:"America/Argentina/Catamarca"},"America/Buenos_Aires":{aliasTo:"America/Argentina/Buenos_Aires"},"America/Louisville":{aliasTo:"America/Kentucky/Louisville"},"America/Montreal":{aliasTo:"America/Toronto"},"America/Santa_Isabel":{aliasTo:"America/Tijuana"},"Arab Standard Time":{aliasTo:"Asia/Riyadh"},"Arabian Standard Time":{aliasTo:"Asia/Dubai"},"Arabic Standard Time":{aliasTo:"Asia/Baghdad"},"Argentina Standard Time":{aliasTo:"America/Argentina/Buenos_Aires"},"Asia/Calcutta":{aliasTo:"Asia/Kolkata"},"Asia/Katmandu":{aliasTo:"Asia/Kathmandu"},"Asia/Rangoon":{aliasTo:"Asia/Yangon"},"Asia/Saigon":{aliasTo:"Asia/Ho_Chi_Minh"},"Atlantic Standard Time":{aliasTo:"America/Halifax"},"Atlantic/Faeroe":{aliasTo:"Atlantic/Faroe"},"Atlantic/Jan_Mayen":{aliasTo:"Europe/Oslo"},"Azerbaijan Standard Time":{aliasTo:"Asia/Baku"},"Azores Standard Time":{aliasTo:"Atlantic/Azores"},"Bahia Standard Time":{aliasTo:"America/Bahia"},"Bangladesh Standard Time":{aliasTo:"Asia/Dhaka"},"Belarus Standard Time":{aliasTo:"Europe/Minsk"},"Canada Central Standard Time":{aliasTo:"America/Regina"},"Cape Verde Standard Time":{aliasTo:"Atlantic/Cape_Verde"},"Caucasus Standard Time":{aliasTo:"Asia/Yerevan"},"Cen. Australia Standard Time":{aliasTo:"Australia/Adelaide"},"Central America Standard Time":{aliasTo:"America/Guatemala"},"Central Asia Standard Time":{aliasTo:"Asia/Almaty"},"Central Brazilian Standard Time":{aliasTo:"America/Cuiaba"},"Central Europe Standard Time":{aliasTo:"Europe/Budapest"},"Central European Standard Time":{aliasTo:"Europe/Warsaw"},"Central Pacific Standard Time":{aliasTo:"Pacific/Guadalcanal"},"Central Standard Time":{aliasTo:"America/Chicago"},"Central Standard Time (Mexico)":{aliasTo:"America/Mexico_City"},"China Standard Time":{aliasTo:"Asia/Shanghai"},"E. Africa Standard Time":{aliasTo:"Africa/Nairobi"},"E. Australia Standard Time":{aliasTo:"Australia/Brisbane"},"E. South America Standard Time":{aliasTo:"America/Sao_Paulo"},"Eastern Standard Time":{aliasTo:"America/New_York"},"Egypt Standard Time":{aliasTo:"Africa/Cairo"},"Ekaterinburg Standard Time":{aliasTo:"Asia/Yekaterinburg"},"Etc/GMT":{aliasTo:"UTC"},"Etc/GMT+0":{aliasTo:"UTC"},"Etc/UCT":{aliasTo:"UTC"},"Etc/UTC":{aliasTo:"UTC"},"Etc/Unversal":{aliasTo:"UTC"},"Etc/Zulu":{aliasTo:"UTC"},"Europe/Belfast":{aliasTo:"Europe/London"},"FLE Standard Time":{aliasTo:"Europe/Kiev"},"Fiji Standard Time":{aliasTo:"Pacific/Fiji"},GMT:{aliasTo:"UTC"},"GMT Standard Time":{aliasTo:"Europe/London"},"GMT+0":{aliasTo:"UTC"},GMT0:{aliasTo:"UTC"},"GTB Standard Time":{aliasTo:"Europe/Bucharest"},"Georgian Standard Time":{aliasTo:"Asia/Tbilisi"},"Greenland Standard Time":{aliasTo:"America/Godthab"},Greenwich:{aliasTo:"UTC"},"Greenwich Standard Time":{aliasTo:"Atlantic/Reykjavik"},"Hawaiian Standard Time":{aliasTo:"Pacific/Honolulu"},"India Standard Time":{aliasTo:"Asia/Calcutta"},"Iran Standard Time":{aliasTo:"Asia/Tehran"},"Israel Standard Time":{aliasTo:"Asia/Jerusalem"},"Jordan Standard Time":{aliasTo:"Asia/Amman"},"Kaliningrad Standard Time":{aliasTo:"Europe/Kaliningrad"},"Korea Standard Time":{aliasTo:"Asia/Seoul"},"Libya Standard Time":{aliasTo:"Africa/Tripoli"},"Line Islands Standard Time":{aliasTo:"Pacific/Kiritimati"},"Magadan Standard Time":{aliasTo:"Asia/Magadan"},"Mauritius Standard Time":{aliasTo:"Indian/Mauritius"},"Middle East Standard Time":{aliasTo:"Asia/Beirut"},"Montevideo Standard Time":{aliasTo:"America/Montevideo"},"Morocco Standard Time":{aliasTo:"Africa/Casablanca"},"Mountain Standard Time":{aliasTo:"America/Denver"},"Mountain Standard Time (Mexico)":{aliasTo:"America/Chihuahua"},"Myanmar Standard Time":{aliasTo:"Asia/Rangoon"},"N. Central Asia Standard Time":{aliasTo:"Asia/Novosibirsk"},"Namibia Standard Time":{aliasTo:"Africa/Windhoek"},"Nepal Standard Time":{aliasTo:"Asia/Katmandu"},"New Zealand Standard Time":{aliasTo:"Pacific/Auckland"},"Newfoundland Standard Time":{aliasTo:"America/St_Johns"},"North Asia East Standard Time":{aliasTo:"Asia/Irkutsk"},"North Asia Standard Time":{aliasTo:"Asia/Krasnoyarsk"},"Pacific SA Standard Time":{aliasTo:"America/Santiago"},"Pacific Standard Time":{aliasTo:"America/Los_Angeles"},"Pacific Standard Time (Mexico)":{aliasTo:"America/Santa_Isabel"},"Pacific/Johnston":{aliasTo:"Pacific/Honolulu"},"Pakistan Standard Time":{aliasTo:"Asia/Karachi"},"Paraguay Standard Time":{aliasTo:"America/Asuncion"},"Romance Standard Time":{aliasTo:"Europe/Paris"},"Russia Time Zone 10":{aliasTo:"Asia/Srednekolymsk"},"Russia Time Zone 11":{aliasTo:"Asia/Kamchatka"},"Russia Time Zone 3":{aliasTo:"Europe/Samara"},"Russian Standard Time":{aliasTo:"Europe/Moscow"},"SA Eastern Standard Time":{aliasTo:"America/Cayenne"},"SA Pacific Standard Time":{aliasTo:"America/Bogota"},"SA Western Standard Time":{aliasTo:"America/La_Paz"},"SE Asia Standard Time":{aliasTo:"Asia/Bangkok"},"Samoa Standard Time":{aliasTo:"Pacific/Apia"},"Singapore Standard Time":{aliasTo:"Asia/Singapore"},"South Africa Standard Time":{aliasTo:"Africa/Johannesburg"},"Sri Lanka Standard Time":{aliasTo:"Asia/Colombo"},"Syria Standard Time":{aliasTo:"Asia/Damascus"},"Taipei Standard Time":{aliasTo:"Asia/Taipei"},"Tasmania Standard Time":{aliasTo:"Australia/Hobart"},"Tokyo Standard Time":{aliasTo:"Asia/Tokyo"},"Tonga Standard Time":{aliasTo:"Pacific/Tongatapu"},"Turkey Standard Time":{aliasTo:"Europe/Istanbul"},UCT:{aliasTo:"UTC"},"US Eastern Standard Time":{aliasTo:"America/Indiana/Indianapolis"},"US Mountain Standard Time":{aliasTo:"America/Phoenix"},"US/Central":{aliasTo:"America/Chicago"},"US/Eastern":{aliasTo:"America/New_York"},"US/Mountain":{aliasTo:"America/Denver"},"US/Pacific":{aliasTo:"America/Los_Angeles"},"US/Pacific-New":{aliasTo:"America/Los_Angeles"},"Ulaanbaatar Standard Time":{aliasTo:"Asia/Ulaanbaatar"},Universal:{aliasTo:"UTC"},"Venezuela Standard Time":{aliasTo:"America/Caracas"},"Vladivostok Standard Time":{aliasTo:"Asia/Vladivostok"},"W. Australia Standard Time":{aliasTo:"Australia/Perth"},"W. Central Africa Standard Time":{aliasTo:"Africa/Lagos"},"W. Europe Standard Time":{aliasTo:"Europe/Berlin"},"West Asia Standard Time":{aliasTo:"Asia/Tashkent"},"West Pacific Standard Time":{aliasTo:"Pacific/Port_Moresby"},"Yakutsk Standard Time":{aliasTo:"Asia/Yakutsk"},Z:{aliasTo:"UTC"},Zulu:{aliasTo:"UTC"},utc:{aliasTo:"UTC"}},O_={"Africa/Abidjan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0051900",longitude:"-0040200"},"Africa/Accra":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Addis_Ababa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Algiers":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0364700",longitude:"+0030300"},"Africa/Asmara":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Asmera":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Bamako":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Bangui":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Banjul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Bissau":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0115100",longitude:"-0153500"},"Africa/Blantyre":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Brazzaville":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Bujumbura":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Cairo":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700424T000000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=-1FR\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701030T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\r
END:STANDARD`],latitude:"+0300300",longitude:"+0311500"},"Africa/Casablanca":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:+01\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0333900",longitude:"-0073500"},"Africa/Ceuta":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0355300",longitude:"-0051900"},"Africa/Conakry":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Dakar":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Dar_es_Salaam":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Djibouti":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Douala":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/El_Aaiun":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:+01\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0270900",longitude:"-0131200"},"Africa/Freetown":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Gaborone":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Harare":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Johannesburg":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:SAST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0261500",longitude:"+0280000"},"Africa/Juba":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0045100",longitude:"+0313700"},"Africa/Kampala":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Khartoum":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0153600",longitude:"+0323200"},"Africa/Kigali":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Kinshasa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Lagos":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0062700",longitude:"+0032400"},"Africa/Libreville":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Lome":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Luanda":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Lubumbashi":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Lusaka":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Malabo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Maputo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0255800",longitude:"+0323500"},"Africa/Maseru":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:SAST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Mbabane":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:SAST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Mogadishu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Monrovia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0061800",longitude:"-0104700"},"Africa/Nairobi":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0011700",longitude:"+0364900"},"Africa/Ndjamena":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0120700",longitude:"+0150300"},"Africa/Niamey":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Nouakchott":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Ouagadougou":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Porto-Novo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:WAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Sao_Tome":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0002000",longitude:"+0064400"},"Africa/Timbuktu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Africa/Tripoli":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0325400",longitude:"+0131100"},"Africa/Tunis":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0364800",longitude:"+0101100"},"Africa/Windhoek":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:CAT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0223400",longitude:"+0170600"},"America/Adak":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-0900\r
TZNAME:HDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0515248",longitude:"-1763929"},"America/Anchorage":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0611305",longitude:"-1495401"},"America/Anguilla":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Antigua":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Araguaina":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0071200",longitude:"-0481200"},"America/Argentina/Buenos_Aires":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0343600",longitude:"-0582700"},"America/Argentina/Catamarca":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0282800",longitude:"-0654700"},"America/Argentina/ComodRivadavia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Argentina/Cordoba":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0312400",longitude:"-0641100"},"America/Argentina/Jujuy":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0241100",longitude:"-0651800"},"America/Argentina/La_Rioja":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0292600",longitude:"-0665100"},"America/Argentina/Mendoza":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0325300",longitude:"-0684900"},"America/Argentina/Rio_Gallegos":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0513800",longitude:"-0691300"},"America/Argentina/Salta":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0244700",longitude:"-0652500"},"America/Argentina/San_Juan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0313200",longitude:"-0683100"},"America/Argentina/San_Luis":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0331900",longitude:"-0662100"},"America/Argentina/Tucuman":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0264900",longitude:"-0651300"},"America/Argentina/Ushuaia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0544800",longitude:"-0681800"},"America/Aruba":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Asuncion":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19701004T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700322T000000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=4SU\r
END:STANDARD`],latitude:"-0251600",longitude:"-0574000"},"America/Atikokan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Atka":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-0900\r
TZNAME:HDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Bahia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0125900",longitude:"-0383100"},"America/Bahia_Banderas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0204800",longitude:"-1051500"},"America/Barbados":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0130600",longitude:"-0593700"},"America/Belem":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0012700",longitude:"-0482900"},"America/Belize":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0173000",longitude:"-0881200"},"America/Blanc-Sablon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Boa_Vista":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0024900",longitude:"-0604000"},"America/Bogota":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0043600",longitude:"-0740500"},"America/Boise":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0433649",longitude:"-1161209"},"America/Buenos_Aires":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Cambridge_Bay":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0690650",longitude:"-1050310"},"America/Campo_Grande":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0202700",longitude:"-0543700"},"America/Cancun":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0210500",longitude:"-0864600"},"America/Caracas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0103000",longitude:"-0665600"},"America/Catamarca":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Cayenne":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0045600",longitude:"-0522000"},"America/Cayman":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Chicago":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0415100",longitude:"-0873900"},"America/Chihuahua":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0283800",longitude:"-1060500"},"America/Ciudad_Juarez":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0314400",longitude:"-1062900"},"America/Coral_Harbour":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Cordoba":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Costa_Rica":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0095600",longitude:"-0840500"},"America/Creston":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Cuiaba":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0153500",longitude:"-0560500"},"America/Curacao":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Danmarkshavn":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0764600",longitude:"-0184000"},"America/Dawson":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0640400",longitude:"-1392500"},"America/Dawson_Creek":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0554600",longitude:"-1201400"},"America/Denver":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0394421",longitude:"-1045903"},"America/Detroit":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0421953",longitude:"-0830245"},"America/Dominica":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Edmonton":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0533300",longitude:"-1132800"},"America/Eirunepe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0064000",longitude:"-0695200"},"America/El_Salvador":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0134200",longitude:"-0891200"},"America/Ensenada":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Fort_Nelson":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0584800",longitude:"-1224200"},"America/Fort_Wayne":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Fortaleza":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0034300",longitude:"-0383000"},"America/Glace_Bay":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0461200",longitude:"-0595700"},"America/Godthab":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0100\r
TZNAME:-01\r
DTSTART:19700328T230000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0100\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19701025T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"America/Goose_Bay":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0532000",longitude:"-0602500"},"America/Grand_Turk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0212800",longitude:"-0710800"},"America/Grenada":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Guadeloupe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Guatemala":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0143800",longitude:"-0903100"},"America/Guayaquil":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0021000",longitude:"-0795000"},"America/Guyana":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0064800",longitude:"-0581000"},"America/Halifax":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0443900",longitude:"-0633600"},"America/Havana":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:CST\r
DTSTART:19701101T010000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:CDT\r
DTSTART:19700308T000000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0230800",longitude:"-0822200"},"America/Hermosillo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0290400",longitude:"-1105800"},"America/Indiana/Indianapolis":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0394606",longitude:"-0860929"},"America/Indiana/Knox":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0411745",longitude:"-0863730"},"America/Indiana/Marengo":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0382232",longitude:"-0862041"},"America/Indiana/Petersburg":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0382931",longitude:"-0871643"},"America/Indiana/Tell_City":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0375711",longitude:"-0864541"},"America/Indiana/Vevay":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0384452",longitude:"-0850402"},"America/Indiana/Vincennes":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0384038",longitude:"-0873143"},"America/Indiana/Winamac":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0410305",longitude:"-0863611"},"America/Indianapolis":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Inuvik":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0682059",longitude:"-1334300"},"America/Iqaluit":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0634400",longitude:"-0682800"},"America/Jamaica":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0175805",longitude:"-0764736"},"America/Jujuy":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Juneau":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0581807",longitude:"-1342511"},"America/Kentucky/Louisville":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0381515",longitude:"-0854534"},"America/Kentucky/Monticello":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0364947",longitude:"-0845057"},"America/Knox_IN":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Kralendijk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/La_Paz":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0163000",longitude:"-0680900"},"America/Lima":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0120300",longitude:"-0770300"},"America/Los_Angeles":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0340308",longitude:"-1181434"},"America/Louisville":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Lower_Princes":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Maceio":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0094000",longitude:"-0354300"},"America/Managua":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0120900",longitude:"-0861700"},"America/Manaus":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0030800",longitude:"-0600100"},"America/Marigot":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Martinique":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0143600",longitude:"-0610500"},"America/Matamoros":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0255000",longitude:"-0973000"},"America/Mazatlan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0231300",longitude:"-1062500"},"America/Mendoza":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Menominee":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0450628",longitude:"-0873651"},"America/Merida":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0205800",longitude:"-0893700"},"America/Metlakatla":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0550737",longitude:"-1313435"},"America/Mexico_City":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0192400",longitude:"-0990900"},"America/Miquelon":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0470300",longitude:"-0562000"},"America/Moncton":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0460600",longitude:"-0644700"},"America/Monterrey":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0254000",longitude:"-1001900"},"America/Montevideo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0345433",longitude:"-0561245"},"America/Montreal":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Montserrat":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Nassau":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/New_York":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0404251",longitude:"-0740023"},"America/Nipigon":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Nome":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0643004",longitude:"-1652423"},"America/Noronha":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0035100",longitude:"-0322500"},"America/North_Dakota/Beulah":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0471551",longitude:"-1014640"},"America/North_Dakota/Center":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0470659",longitude:"-1011757"},"America/North_Dakota/New_Salem":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0465042",longitude:"-1012439"},"America/Nuuk":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0100\r
TZNAME:-01\r
DTSTART:19700328T230000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0100\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19701025T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0641100",longitude:"-0514400"},"America/Ojinaga":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0293400",longitude:"-1042500"},"America/Panama":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0085800",longitude:"-0793200"},"America/Pangnirtung":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Paramaribo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0055000",longitude:"-0551000"},"America/Phoenix":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0332654",longitude:"-1120424"},"America/Port-au-Prince":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0183200",longitude:"-0722000"},"America/Port_of_Spain":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Porto_Acre":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Porto_Velho":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0084600",longitude:"-0635400"},"America/Puerto_Rico":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0182806",longitude:"-0660622"},"America/Punta_Arenas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0530900",longitude:"-0705500"},"America/Rainy_River":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Rankin_Inlet":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0624900",longitude:"-0920459"},"America/Recife":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0080300",longitude:"-0345400"},"America/Regina":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0502400",longitude:"-1043900"},"America/Resolute":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0744144",longitude:"-0944945"},"America/Rio_Branco":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0095800",longitude:"-0674800"},"America/Rosario":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Santa_Isabel":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Santarem":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0022600",longitude:"-0545200"},"America/Santiago":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700405T000000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700906T000000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0332700",longitude:"-0704000"},"America/Santo_Domingo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0182800",longitude:"-0695400"},"America/Sao_Paulo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0233200",longitude:"-0463700"},"America/Scoresbysund":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0100\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19701025T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0100\r
TZNAME:-01\r
DTSTART:19700328T230000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA\r
END:DAYLIGHT`],latitude:"+0702900",longitude:"-0215800"},"America/Shiprock":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Sitka":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0571035",longitude:"-1351807"},"America/St_Barthelemy":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/St_Johns":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0230\r
TZOFFSETTO:-0330\r
TZNAME:NST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0330\r
TZOFFSETTO:-0230\r
TZNAME:NDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`],latitude:"+0473400",longitude:"-0524300"},"America/St_Kitts":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/St_Lucia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/St_Thomas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/St_Vincent":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Swift_Current":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0501700",longitude:"-1075000"},"America/Tegucigalpa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0140600",longitude:"-0871300"},"America/Thule":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0763400",longitude:"-0684700"},"America/Thunder_Bay":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"America/Tijuana":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0323200",longitude:"-1170100"},"America/Toronto":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0433900",longitude:"-0792300"},"America/Tortola":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Vancouver":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0491600",longitude:"-1230700"},"America/Virgin":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"America/Whitehorse":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0604300",longitude:"-1350300"},"America/Winnipeg":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0495300",longitude:"-0970900"},"America/Yakutat":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0593249",longitude:"-1394338"},"America/Yellowknife":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Antarctica/Casey":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0661700",longitude:"+1103100"},"Antarctica/Davis":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0683500",longitude:"+0775800"},"Antarctica/DumontDUrville":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Antarctica/Macquarie":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0543000",longitude:"+1585700"},"Antarctica/Mawson":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0673600",longitude:"+0625300"},"Antarctica/McMurdo":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1300\r
TZNAME:NZDT\r
DTSTART:19700927T020000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1200\r
TZNAME:NZST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`]},"Antarctica/Palmer":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0644800",longitude:"-0640600"},"Antarctica/Rothera":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0673400",longitude:"-0680800"},"Antarctica/South_Pole":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1300\r
TZNAME:NZDT\r
DTSTART:19700927T020000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1200\r
TZNAME:NZST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`]},"Antarctica/Syowa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Antarctica/Troll":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0200\r
TZNAME:+02\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0000\r
TZNAME:+00\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"-0720041",longitude:"+0023206"},"Antarctica/Vostok":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0782400",longitude:"+1065400"},"Arctic/Longyearbyen":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Asia/Aden":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Almaty":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0431500",longitude:"+0765700"},"Asia/Amman":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0315700",longitude:"+0355600"},"Asia/Anadyr":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0644500",longitude:"+1772900"},"Asia/Aqtau":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0443100",longitude:"+0501600"},"Asia/Aqtobe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0501700",longitude:"+0571000"},"Asia/Ashgabat":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0375700",longitude:"+0582300"},"Asia/Ashkhabad":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Atyrau":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0470700",longitude:"+0515600"},"Asia/Baghdad":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0332100",longitude:"+0442500"},"Asia/Bahrain":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Baku":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0402300",longitude:"+0495100"},"Asia/Bangkok":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0134500",longitude:"+1003100"},"Asia/Barnaul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0532200",longitude:"+0834500"},"Asia/Beirut":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T000000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T000000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0335300",longitude:"+0353000"},"Asia/Bishkek":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0425400",longitude:"+0743600"},"Asia/Brunei":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Calcutta":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0530\r
TZOFFSETTO:+0530\r
TZNAME:IST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Chita":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:+09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0520300",longitude:"+1132800"},"Asia/Choibalsan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0480400",longitude:"+1143000"},"Asia/Chongqing":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Chungking":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Colombo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0530\r
TZOFFSETTO:+0530\r
TZNAME:+0530\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0065600",longitude:"+0795100"},"Asia/Dacca":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Damascus":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0333000",longitude:"+0361800"},"Asia/Dhaka":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0234300",longitude:"+0902500"},"Asia/Dili":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:+09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0083300",longitude:"+1253500"},"Asia/Dubai":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0251800",longitude:"+0551800"},"Asia/Dushanbe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0383500",longitude:"+0684800"},"Asia/Famagusta":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0350700",longitude:"+0335700"},"Asia/Gaza":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700328T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701031T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA\r
END:STANDARD`],latitude:"+0313000",longitude:"+0342800"},"Asia/Harbin":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Hebron":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700328T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701031T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA\r
END:STANDARD`],latitude:"+0313200",longitude:"+0350542"},"Asia/Ho_Chi_Minh":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0104500",longitude:"+1064000"},"Asia/Hong_Kong":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:HKT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0221700",longitude:"+1140900"},"Asia/Hovd":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0480100",longitude:"+0913900"},"Asia/Irkutsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0521600",longitude:"+1042000"},"Asia/Istanbul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Jakarta":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:WIB\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0061000",longitude:"+1064800"},"Asia/Jayapura":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:WIT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0023200",longitude:"+1404200"},"Asia/Jerusalem":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:IDT\r
DTSTART:19700327T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:IST\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0314650",longitude:"+0351326"},"Asia/Kabul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0430\r
TZOFFSETTO:+0430\r
TZNAME:+0430\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0343100",longitude:"+0691200"},"Asia/Kamchatka":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0530100",longitude:"+1583900"},"Asia/Karachi":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:PKT\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0245200",longitude:"+0670300"},"Asia/Kashgar":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Kathmandu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0545\r
TZOFFSETTO:+0545\r
TZNAME:+0545\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0274300",longitude:"+0851900"},"Asia/Katmandu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0545\r
TZOFFSETTO:+0545\r
TZNAME:+0545\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Khandyga":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:+09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0623923",longitude:"+1353314"},"Asia/Kolkata":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0530\r
TZOFFSETTO:+0530\r
TZNAME:IST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0223200",longitude:"+0882200"},"Asia/Krasnoyarsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0560100",longitude:"+0925000"},"Asia/Kuala_Lumpur":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Kuching":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0013300",longitude:"+1102000"},"Asia/Kuwait":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Macao":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Macau":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0221150",longitude:"+1133230"},"Asia/Magadan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0593400",longitude:"+1504800"},"Asia/Makassar":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:WITA\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0050700",longitude:"+1192400"},"Asia/Manila":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:PST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0143500",longitude:"+1210000"},"Asia/Muscat":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Nicosia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`],latitude:"+0351000",longitude:"+0332200"},"Asia/Novokuznetsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0534500",longitude:"+0870700"},"Asia/Novosibirsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0550200",longitude:"+0825500"},"Asia/Omsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0550000",longitude:"+0732400"},"Asia/Oral":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0511300",longitude:"+0512100"},"Asia/Phnom_Penh":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Pontianak":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:WIB\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0000200",longitude:"+1092000"},"Asia/Pyongyang":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:KST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0390100",longitude:"+1254500"},"Asia/Qatar":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0251700",longitude:"+0513200"},"Asia/Qostanay":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0531200",longitude:"+0633700"},"Asia/Qyzylorda":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0444800",longitude:"+0652800"},"Asia/Rangoon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0630\r
TZOFFSETTO:+0630\r
TZNAME:+0630\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Riyadh":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0243800",longitude:"+0464300"},"Asia/Saigon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Sakhalin":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0465800",longitude:"+1424200"},"Asia/Samarkand":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0394000",longitude:"+0664800"},"Asia/Seoul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:KST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0373300",longitude:"+1265800"},"Asia/Shanghai":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0311400",longitude:"+1212800"},"Asia/Singapore":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0011700",longitude:"+1035100"},"Asia/Srednekolymsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0672800",longitude:"+1534300"},"Asia/Taipei":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0250300",longitude:"+1213000"},"Asia/Tashkent":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0412000",longitude:"+0691800"},"Asia/Tbilisi":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0414300",longitude:"+0444900"},"Asia/Tehran":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0330\r
TZOFFSETTO:+0330\r
TZNAME:+0330\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0354000",longitude:"+0512600"},"Asia/Tel_Aviv":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:IDT\r
DTSTART:19700327T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:IST\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Asia/Thimbu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Thimphu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0272800",longitude:"+0893900"},"Asia/Tokyo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:JST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0353916",longitude:"+1394441"},"Asia/Tomsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0563000",longitude:"+0845800"},"Asia/Ujung_Pandang":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:WITA\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Ulaanbaatar":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0475500",longitude:"+1065300"},"Asia/Ulan_Bator":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:+08\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Urumqi":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0434800",longitude:"+0873500"},"Asia/Ust-Nera":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0643337",longitude:"+1431336"},"Asia/Vientiane":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Asia/Vladivostok":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0431000",longitude:"+1315600"},"Asia/Yakutsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:+09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0620000",longitude:"+1294000"},"Asia/Yangon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0630\r
TZOFFSETTO:+0630\r
TZNAME:+0630\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0164700",longitude:"+0961000"},"Asia/Yekaterinburg":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0565100",longitude:"+0603600"},"Asia/Yerevan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0401100",longitude:"+0443000"},"Atlantic/Azores":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0100\r
TZOFFSETTO:+0000\r
TZNAME:+00\r
DTSTART:19700329T000000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:-0100\r
TZNAME:-01\r
DTSTART:19701025T010000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0374400",longitude:"-0254000"},"Atlantic/Bermuda":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`],latitude:"+0321700",longitude:"-0644600"},"Atlantic/Canary":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:WEST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:WET\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0280600",longitude:"-0152400"},"Atlantic/Cape_Verde":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0100\r
TZOFFSETTO:-0100\r
TZNAME:-01\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0145500",longitude:"-0233100"},"Atlantic/Faeroe":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:WEST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:WET\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Atlantic/Faroe":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:WEST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:WET\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0620100",longitude:"-0064600"},"Atlantic/Jan_Mayen":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Atlantic/Madeira":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:WEST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:WET\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0323800",longitude:"-0165400"},"Atlantic/Reykjavik":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Atlantic/South_Georgia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0541600",longitude:"-0363200"},"Atlantic/St_Helena":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Atlantic/Stanley":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0514200",longitude:"-0575100"},"Australia/ACT":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/Adelaide":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+1030\r
TZNAME:ACDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0345500",longitude:"+1383500"},"Australia/Brisbane":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0272800",longitude:"+1530200"},"Australia/Broken_Hill":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+1030\r
TZNAME:ACDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0315700",longitude:"+1412700"},"Australia/Canberra":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/Currie":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`]},"Australia/Darwin":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0122800",longitude:"+1305000"},"Australia/Eucla":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0845\r
TZOFFSETTO:+0845\r
TZNAME:+0845\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0314300",longitude:"+1285200"},"Australia/Hobart":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`],latitude:"-0425300",longitude:"+1471900"},"Australia/LHI":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1030\r
TZNAME:+1030\r
DTSTART:19700405T020000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/Lindeman":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0201600",longitude:"+1490000"},"Australia/Lord_Howe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1030\r
TZNAME:+1030\r
DTSTART:19700405T020000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0313300",longitude:"+1590500"},"Australia/Melbourne":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0374900",longitude:"+1445800"},"Australia/NSW":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/North":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Australia/Perth":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:AWST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0315700",longitude:"+1155100"},"Australia/Queensland":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Australia/South":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+1030\r
TZNAME:ACDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/Sydney":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`],latitude:"-0335200",longitude:"+1511300"},"Australia/Tasmania":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`]},"Australia/Victoria":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1000\r
TZNAME:AEST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1100\r
TZNAME:AEDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Australia/West":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0800\r
TZOFFSETTO:+0800\r
TZNAME:AWST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Australia/Yancowinna":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1030\r
TZOFFSETTO:+0930\r
TZNAME:ACST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0930\r
TZOFFSETTO:+1030\r
TZNAME:ACDT\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`]},"Brazil/Acre":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Brazil/DeNoronha":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0200\r
TZOFFSETTO:-0200\r
TZNAME:-02\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Brazil/East":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Brazil/West":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Canada/Atlantic":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:ADT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:AST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Canada/Central":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Canada/Eastern":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Canada/Mountain":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Canada/Newfoundland":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0230\r
TZOFFSETTO:-0330\r
TZNAME:NST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0330\r
TZOFFSETTO:-0230\r
TZNAME:NDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`]},"Canada/Pacific":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Canada/Saskatchewan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Canada/Yukon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Chile/Continental":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0300\r
TZOFFSETTO:-0400\r
TZNAME:-04\r
DTSTART:19700405T000000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0300\r
TZNAME:-03\r
DTSTART:19700906T000000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SU\r
END:DAYLIGHT`]},"Chile/EasterIsland":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:-06\r
DTSTART:19700404T220000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SA\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700905T220000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SA\r
END:DAYLIGHT`]},"Europe/Amsterdam":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Andorra":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0423000",longitude:"+0013100"},"Europe/Astrakhan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0462100",longitude:"+0480300"},"Europe/Athens":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0375800",longitude:"+0234300"},"Europe/Belfast":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:BST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Belgrade":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0445000",longitude:"+0203000"},"Europe/Berlin":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0523000",longitude:"+0132200"},"Europe/Bratislava":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Brussels":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0505000",longitude:"+0042000"},"Europe/Bucharest":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0442600",longitude:"+0260600"},"Europe/Budapest":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0473000",longitude:"+0190500"},"Europe/Busingen":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Chisinau":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0470000",longitude:"+0285000"},"Europe/Copenhagen":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Dublin":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:IST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:DAYLIGHT`],latitude:"+0532000",longitude:"-0061500"},"Europe/Gibraltar":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0360800",longitude:"-0052100"},"Europe/Guernsey":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:BST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Helsinki":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0601000",longitude:"+0245800"},"Europe/Isle_of_Man":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:BST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Istanbul":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0410100",longitude:"+0285800"},"Europe/Jersey":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:BST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Kaliningrad":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0544300",longitude:"+0203000"},"Europe/Kiev":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`]},"Europe/Kirov":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:MSK\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0583600",longitude:"+0493900"},"Europe/Kyiv":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`],latitude:"+0502600",longitude:"+0303100"},"Europe/Lisbon":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:WET\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:WEST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`],latitude:"+0384300",longitude:"-0090800"},"Europe/Ljubljana":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/London":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0000\r
TZOFFSETTO:+0100\r
TZNAME:BST\r
DTSTART:19700329T010000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0000\r
TZNAME:GMT\r
DTSTART:19701025T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0513030",longitude:"+0000731"},"Europe/Luxembourg":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Madrid":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0402400",longitude:"-0034100"},"Europe/Malta":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0355400",longitude:"+0143100"},"Europe/Mariehamn":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Minsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:+03\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0535400",longitude:"+0273400"},"Europe/Monaco":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Moscow":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:MSK\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0554521",longitude:"+0373704"},"Europe/Nicosia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`]},"Europe/Oslo":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Paris":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0485200",longitude:"+0022000"},"Europe/Podgorica":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Prague":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0500500",longitude:"+0142600"},"Europe/Riga":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0565700",longitude:"+0240600"},"Europe/Rome":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0415400",longitude:"+0122900"},"Europe/Samara":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0531200",longitude:"+0500900"},"Europe/San_Marino":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Sarajevo":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Saratov":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0513400",longitude:"+0460200"},"Europe/Simferopol":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:MSK\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0445700",longitude:"+0340600"},"Europe/Skopje":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Sofia":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0424100",longitude:"+0231900"},"Europe/Stockholm":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Tallinn":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0592500",longitude:"+0244500"},"Europe/Tirane":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0412000",longitude:"+0195000"},"Europe/Tiraspol":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Ulyanovsk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0542000",longitude:"+0482400"},"Europe/Uzhgorod":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`]},"Europe/Vaduz":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Vatican":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Vienna":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0481300",longitude:"+0162000"},"Europe/Vilnius":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0544100",longitude:"+0251900"},"Europe/Volgograd":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:MSK\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0484400",longitude:"+0442500"},"Europe/Warsaw":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0521500",longitude:"+0210000"},"Europe/Zagreb":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`]},"Europe/Zaporozhye":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0200\r
TZNAME:EET\r
DTSTART:19701025T040000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0300\r
TZNAME:EEST\r
DTSTART:19700329T030000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`]},"Europe/Zurich":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+0100\r
TZOFFSETTO:+0200\r
TZNAME:CEST\r
DTSTART:19700329T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+0200\r
TZOFFSETTO:+0100\r
TZNAME:CET\r
DTSTART:19701025T030000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r
END:STANDARD`],latitude:"+0472300",longitude:"+0083200"},"Indian/Antananarivo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Chagos":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0600\r
TZOFFSETTO:+0600\r
TZNAME:+06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0072000",longitude:"+0722500"},"Indian/Christmas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0700\r
TZOFFSETTO:+0700\r
TZNAME:+07\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Cocos":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0630\r
TZOFFSETTO:+0630\r
TZNAME:+0630\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Comoro":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Kerguelen":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Mahe":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Maldives":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0500\r
TZOFFSETTO:+0500\r
TZNAME:+05\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0041000",longitude:"+0733000"},"Indian/Mauritius":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0201000",longitude:"+0573000"},"Indian/Mayotte":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0300\r
TZOFFSETTO:+0300\r
TZNAME:EAT\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Indian/Reunion":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0400\r
TZOFFSETTO:+0400\r
TZNAME:+04\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Mexico/BajaNorte":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"Mexico/BajaSur":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Mexico/General":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Apia":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1300\r
TZNAME:+13\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0135000",longitude:"-1714400"},"Pacific/Auckland":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1300\r
TZNAME:NZDT\r
DTSTART:19700927T020000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1200\r
TZNAME:NZST\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`],latitude:"-0365200",longitude:"+1744600"},"Pacific/Bougainville":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0061300",longitude:"+1553400"},"Pacific/Chatham":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1245\r
TZOFFSETTO:+1345\r
TZNAME:+1345\r
DTSTART:19700927T024500\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1345\r
TZOFFSETTO:+1245\r
TZNAME:+1245\r
DTSTART:19700405T034500\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`],latitude:"-0435700",longitude:"-1763300"},"Pacific/Chuuk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Easter":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:-06\r
DTSTART:19700404T220000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SA\r
END:STANDARD`,`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:-05\r
DTSTART:19700905T220000\r
RRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SA\r
END:DAYLIGHT`],latitude:"-0270900",longitude:"-1092600"},"Pacific/Efate":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0174000",longitude:"+1682500"},"Pacific/Enderbury":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1300\r
TZNAME:+13\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Fakaofo":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1300\r
TZNAME:+13\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0092200",longitude:"-1711400"},"Pacific/Fiji":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0180800",longitude:"+1782500"},"Pacific/Funafuti":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Galapagos":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0600\r
TZNAME:-06\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0005400",longitude:"-0893600"},"Pacific/Gambier":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0900\r
TZNAME:-09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0230800",longitude:"-1345700"},"Pacific/Guadalcanal":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0093200",longitude:"+1601200"},"Pacific/Guam":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:ChST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0132800",longitude:"+1444500"},"Pacific/Honolulu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0211825",longitude:"-1575130"},"Pacific/Johnston":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Kanton":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1300\r
TZNAME:+13\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0024700",longitude:"-1714300"},"Pacific/Kiritimati":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1400\r
TZOFFSETTO:+1400\r
TZNAME:+14\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0015200",longitude:"-1572000"},"Pacific/Kosrae":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0051900",longitude:"+1625900"},"Pacific/Kwajalein":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0090500",longitude:"+1672000"},"Pacific/Majuro":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Marquesas":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0930\r
TZOFFSETTO:-0930\r
TZNAME:-0930\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0090000",longitude:"-1393000"},"Pacific/Midway":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1100\r
TZOFFSETTO:-1100\r
TZNAME:SST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Nauru":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0003100",longitude:"+1665500"},"Pacific/Niue":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1100\r
TZOFFSETTO:-1100\r
TZNAME:-11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0190100",longitude:"-1695500"},"Pacific/Norfolk":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19701004T020000\r
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700405T030000\r
RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\r
END:STANDARD`],latitude:"-0290300",longitude:"+1675800"},"Pacific/Noumea":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0221600",longitude:"+1662700"},"Pacific/Pago_Pago":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1100\r
TZOFFSETTO:-1100\r
TZNAME:SST\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0141600",longitude:"-1704200"},"Pacific/Palau":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+0900\r
TZOFFSETTO:+0900\r
TZNAME:+09\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0072000",longitude:"+1342900"},"Pacific/Pitcairn":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0800\r
TZNAME:-08\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0250400",longitude:"-1300500"},"Pacific/Pohnpei":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Ponape":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1100\r
TZOFFSETTO:+1100\r
TZNAME:+11\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Port_Moresby":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0093000",longitude:"+1471000"},"Pacific/Rarotonga":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-1000\r
TZNAME:-10\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0211400",longitude:"-1594600"},"Pacific/Saipan":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:ChST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Samoa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1100\r
TZOFFSETTO:-1100\r
TZNAME:SST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Tahiti":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-1000\r
TZNAME:-10\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0173200",longitude:"-1493400"},"Pacific/Tarawa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"+0012500",longitude:"+1730000"},"Pacific/Tongatapu":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1300\r
TZOFFSETTO:+1300\r
TZNAME:+13\r
DTSTART:19700101T000000\r
END:STANDARD`],latitude:"-0210800",longitude:"-1751200"},"Pacific/Truk":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Wake":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Wallis":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1200\r
TZOFFSETTO:+1200\r
TZNAME:+12\r
DTSTART:19700101T000000\r
END:STANDARD`]},"Pacific/Yap":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:+1000\r
TZOFFSETTO:+1000\r
TZNAME:+10\r
DTSTART:19700101T000000\r
END:STANDARD`]},"US/Alaska":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-0800\r
TZNAME:AKDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0900\r
TZNAME:AKST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Aleutian":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-0900\r
TZNAME:HDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0900\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Arizona":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"US/Central":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/East-Indiana":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Eastern":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Hawaii":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1000\r
TZOFFSETTO:-1000\r
TZNAME:HST\r
DTSTART:19700101T000000\r
END:STANDARD`]},"US/Indiana-Starke":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0500\r
TZNAME:CDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0600\r
TZNAME:CST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Michigan":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0500\r
TZOFFSETTO:-0400\r
TZNAME:EDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0400\r
TZOFFSETTO:-0500\r
TZNAME:EST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Mountain":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0600\r
TZNAME:MDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0600\r
TZOFFSETTO:-0700\r
TZNAME:MST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Pacific":{ics:[`BEGIN:DAYLIGHT\r
TZOFFSETFROM:-0800\r
TZOFFSETTO:-0700\r
TZNAME:PDT\r
DTSTART:19700308T020000\r
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r
END:DAYLIGHT`,`BEGIN:STANDARD\r
TZOFFSETFROM:-0700\r
TZOFFSETTO:-0800\r
TZNAME:PST\r
DTSTART:19701101T020000\r
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r
END:STANDARD`]},"US/Samoa":{ics:[`BEGIN:STANDARD\r
TZOFFSETFROM:-1100\r
TZOFFSETTO:-1100\r
TZNAME:SST\r
DTSTART:19700101T000000\r
END:STANDARD`]}},Ka={version:C_,aliases:N_,zones:O_};class B_{constructor(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map}getTimezoneForId(a){return this._getTimezoneForIdRec(a,0)}_getTimezoneForIdRec(a,i){if(this._timezones.has(a))return this._timezones.get(a);if(i>=20)return console.error("TimezoneManager.getTimezoneForIdRec() exceeds recursion limits"),null;if(this._aliases.has(a)){const n=this._aliases.get(a);return this._getTimezoneForIdRec(n,i+1)}return null}hasTimezoneForId(a){return this._timezones.has(a)||this._aliases.has(a)}isAlias(a){return!this._timezones.has(a)&&this._aliases.has(a)}listAllTimezones(a=!1){const i=Array.from(this._timezones.keys());return a?i.concat(Array.from(this._aliases.keys())):i}registerTimezone(a){this._timezones.set(a.timezoneId,a),Ne.TimezoneService.register(a.timezoneId,a.toICALTimezone()),this._pendingAliases=this._pendingAliases.filter(([i,n])=>n!==a.timezoneId?!0:(Ne.TimezoneService.register(i,a.toICALTimezone()),!1))}registerDefaultTimezones(){console.debug(`@nextcloud/calendar-js app is using version ${Ka.version} of the timezone database`);for(const a in Ka.zones)if(Object.prototype.hasOwnProperty.call(Ka.zones,[a])){const i=["BEGIN:VTIMEZONE","TZID:"+a,...Ka.zones[a].ics,"END:VTIMEZONE"].join(`\r
`);this.registerTimezoneFromICS(a,i)}for(const a in Ka.aliases)Object.prototype.hasOwnProperty.call(Ka.aliases,[a])&&this.registerAlias(a,Ka.aliases[a].aliasTo)}registerTimezoneFromICS(a,i){const n=new Ea(a,i);this.registerTimezone(n)}registerAlias(a,i){this._aliases.set(a,i);const n=this.getTimezoneForId(i);if(!n){this._pendingAliases.push([a,i]);return}Ne.TimezoneService.register(a,n.toICALTimezone())}unregisterTimezones(a){this._timezones.delete(a),Ne.TimezoneService.remove(a)}unregisterAlias(a){this._aliases.delete(a),this._pendingAliases=this._pendingAliases.filter(([i])=>i!==a),Ne.TimezoneService.remove(a)}clearAllTimezones(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map,Ne.TimezoneService.reset(),bt.registerTimezone(Ea.utc),bt.registerTimezone(Ea.floating),bt.registerAlias("GMT",Ea.utc.timezoneId),bt.registerAlias("Z",Ea.utc.timezoneId)}}const bt=new B_;bt.clearAllTimezones();function x_(){return bt}var ir={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return(()=>{var i={646:r=>{r.exports=function(_){if(Array.isArray(_)){for(var l=0,g=new Array(_.length);l<_.length;l++)g[l]=_[l];return g}}},713:r=>{r.exports=function(_,l,g){return l in _?Object.defineProperty(_,l,{value:g,enumerable:!0,configurable:!0,writable:!0}):_[l]=g,_}},860:r=>{r.exports=function(_){if(Symbol.iterator in Object(_)||Object.prototype.toString.call(_)==="[object Arguments]")return Array.from(_)}},206:r=>{r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(r,_,l)=>{var g=l(646),d=l(860),f=l(206);r.exports=function(h){return g(h)||d(h)||f()}},8:r=>{function _(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r.exports=_=function(g){return typeof g}:r.exports=_=function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},_(l)}r.exports=_}},n={};function o(r){var _=n[r];if(_!==void 0)return _.exports;var l=n[r]={exports:{}};return i[r](l,l.exports,o),l.exports}o.n=r=>{var _=r&&r.__esModule?()=>r.default:()=>r;return o.d(_,{a:_}),_},o.d=(r,_)=>{for(var l in _)o.o(_,l)&&!o.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:_[l]})},o.o=(r,_)=>Object.prototype.hasOwnProperty.call(r,_),o.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var s={};return(()=>{o.r(s),o.d(s,{VueSelect:()=>I,default:()=>G,mixins:()=>U});var r=o(319),_=o.n(r),l=o(8),g=o.n(l),d=o(713),f=o.n(d);const h={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(c){var v=this;this.autoscroll&&c&&this.$nextTick(function(){return v.maybeAdjustScroll()})}},methods:{maybeAdjustScroll:function(){var c,v=((c=this.$refs.dropdownMenu)===null||c===void 0?void 0:c.children[this.typeAheadPointer])||!1;if(v){var C=this.getDropdownViewport(),O=v.getBoundingClientRect(),W=O.top,q=O.bottom,te=O.height;if(W<C.top)return this.$refs.dropdownMenu.scrollTop=v.offsetTop;if(q>C.bottom)return this.$refs.dropdownMenu.scrollTop=v.offsetTop-(C.height-te)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},F={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){if(this.resetFocusOnOptionsChange){for(var c=0;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}}},open:function(c){c&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var c=this.typeAheadPointer-1;c>=0;c--)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadDown:function(){for(var c=this.typeAheadPointer+1;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadSelect:function(){var c=this.filteredOptions[this.typeAheadPointer];c&&this.selectable(c)&&this.select(c)},typeAheadToLastSelected:function(){var c=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1;c!==-1&&(this.typeAheadPointer=c)}}},m={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(c){this.mutableLoading=c}},methods:{toggleLoading:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.mutableLoading=c??!this.mutableLoading}}};function b(c,v,C,O,W,q,te,X){var ce,_e=typeof c=="function"?c.options:c;return v&&(_e.render=v,_e.staticRenderFns=C,_e._compiled=!0),{exports:c,options:_e}}const E={Deselect:b({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[v("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])},[]).exports,OpenIndicator:b({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[v("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])},[]).exports},A={inserted:function(c,v,C){var O=C.context;if(O.appendToBody){document.body.appendChild(c);var W=O.$refs.toggle.getBoundingClientRect(),q=W.height,te=W.top,X=W.left,ce=W.width,_e=window.scrollX||window.pageXOffset,be=window.scrollY||window.pageYOffset;c.unbindPosition=O.calculatePosition(c,O,{width:ce+"px",left:_e+X+"px",top:be+te+q+"px"})}},unbind:function(c,v,C){C.context.appendToBody&&(c.unbindPosition&&typeof c.unbindPosition=="function"&&c.unbindPosition(),c.parentNode&&c.parentNode.removeChild(c))}},w=function(c){var v={};return Object.keys(c).sort().forEach(function(C){v[C]=c[C]}),JSON.stringify(v)};var R=0;const Y=function(){return++R};function Z(c,v){var C=Object.keys(c);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(c);v&&(O=O.filter(function(W){return Object.getOwnPropertyDescriptor(c,W).enumerable})),C.push.apply(C,O)}return C}function N(c){for(var v=1;v<arguments.length;v++){var C=arguments[v]!=null?arguments[v]:{};v%2?Z(Object(C),!0).forEach(function(O){f()(c,O,C[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(C)):Z(Object(C)).forEach(function(O){Object.defineProperty(c,O,Object.getOwnPropertyDescriptor(C,O))})}return c}const I=b({components:N({},E),directives:{appendToBody:A},mixins:[h,F,m],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},ariaLabelCombobox:{type:String,default:"Search for options"},ariaLabelListbox:{type:String,default:"Options"},ariaLabelClearSelected:{type:String,default:"Clear selected"},ariaLabelDeselectOption:{type:Function,default:function(c){return"Deselect ".concat(c)}},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(c){return c}},selectable:{type:Function,default:function(c){return!0}},getOptionLabel:{type:Function,default:function(c){return g()(c)==="object"?c.hasOwnProperty(this.label)?c[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(c),`.
`)+"https://vue-select.org/api/props.html#getoptionlabel"):c}},getOptionKey:{type:Function,default:function(c){if(g()(c)!=="object")return c;try{return c.hasOwnProperty("id")?c.id:w(c)}catch(v){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,c,v)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(c,v,C){return(v||"").toLocaleLowerCase().indexOf(C.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(c,v){var C=this;return c.filter(function(O){var W=C.getOptionLabel(O);return typeof W=="number"&&(W=W.toString()),C.filterBy(O,W,v)})}},createOption:{type:Function,default:function(c){return g()(this.optionList[0])==="object"?f()({},this.label,c):c}},resetFocusOnOptionsChange:{type:Boolean,default:!0},resetOnOptionsChange:{default:!1,validator:function(c){return["function","boolean"].includes(g()(c))}},clearSearchOnBlur:{type:Function,default:function(c){var v=c.clearSearchOnSelect,C=c.multiple;return v&&!C}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(c,v){return c}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(c,v,C){var O=C.width,W=C.top,q=C.left;c.style.top=W,c.style.left=q,c.style.width=O}},dropdownShouldOpen:{type:Function,default:function(c){var v=c.noDrop,C=c.open,O=c.mutableLoading;return!v&&C&&!O}},keyboardFocusBorder:{type:Boolean,default:!1},uid:{type:[String,Number],default:function(){return Y()}}},data:function(){return{search:"",open:!1,isComposing:!1,isKeyboardNavigation:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return this.value===void 0||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var c=this.value;return this.isTrackingValues&&(c=this.$data._value),c!=null&&c!==""?[].concat(c):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var c=this,v={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:N({id:this.inputId,disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,role:"combobox","aria-autocomplete":"list","aria-label":this.ariaLabelCombobox,"aria-controls":"vs-".concat(this.uid,"__listbox"),"aria-owns":"vs-".concat(this.uid,"__listbox"),"aria-expanded":this.dropdownOpen.toString(),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs-".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return c.isComposing=!0},compositionend:function(){return c.isComposing=!1},keydown:this.onSearchKeyDown,keypress:this.onSearchKeyPress,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(C){return c.search=C.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:v,listFooter:v,header:N({},v,{deselect:this.deselect}),footer:N({},v,{deselect:this.deselect})}},childComponents:function(){return N({},E,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var c=this,v=function(q){return c.limit!==null?q.slice(0,c.limit):q},C=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return v(C);var O=this.search.length?this.filter(C,this.search,this):C;if(this.taggable&&this.search.length){var W=this.createOption(this.search);this.optionExists(W)||O.unshift(W)}return v(O)},isValueEmpty:function(){return this.selectedValue.length===0},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(c,v){var C=this;!this.taggable&&(typeof C.resetOnOptionsChange=="function"?C.resetOnOptionsChange(c,v,C.selectedValue):C.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(c){this.isTrackingValues&&this.setInternalValueFromOptions(c)}},multiple:function(){this.clearSelection()},open:function(c){this.$emit(c?"open":"close")},search:function(c){c.length&&(this.open=!0)}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(c){var v=this;Array.isArray(c)?this.$data._value=c.map(function(C){return v.findOptionFromReducedValue(C)}):this.$data._value=this.findOptionFromReducedValue(c)},select:function(c){this.$emit("option:selecting",c),this.isOptionSelected(c)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(c):(this.taggable&&!this.optionExists(c)&&this.$emit("option:created",c),this.multiple&&(c=this.selectedValue.concat(c)),this.updateValue(c),this.$emit("option:selected",c)),this.onAfterSelect(c)},deselect:function(c){var v=this;this.$emit("option:deselecting",c),this.updateValue(this.selectedValue.filter(function(C){return!v.optionComparator(C,c)})),this.$emit("option:deselected",c)},keyboardDeselect:function(c,v){var C,O;this.deselect(c);var W=(C=this.$refs.deselectButtons)===null||C===void 0?void 0:C[v+1],q=(O=this.$refs.deselectButtons)===null||O===void 0?void 0:O[v-1],te=W??q;te?te.focus():this.searchEl.focus()},clearSelection:function(){this.updateValue(this.multiple?[]:null),this.searchEl.focus()},onAfterSelect:function(c){var v=this;this.closeOnSelect&&(this.open=!this.open),this.clearSearchOnSelect&&(this.search=""),this.noDrop&&this.multiple&&this.$nextTick(function(){return v.$refs.search.focus()})},updateValue:function(c){var v=this;this.value===void 0&&(this.$data._value=c),c!==null&&(c=Array.isArray(c)?c.map(function(C){return v.reduce(C)}):this.reduce(c)),this.$emit("input",c)},toggleDropdown:function(c){var v=c.target!==this.searchEl;v&&c.preventDefault();var C=[].concat(_()(this.$refs.deselectButtons||[]),_()([this.$refs.clearButton]));this.searchEl===void 0||C.filter(Boolean).some(function(O){return O.contains(c.target)||O===c.target})?c.preventDefault():this.open&&v?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(c){var v=this;return this.selectedValue.some(function(C){return v.optionComparator(C,c)})},isOptionDeselectable:function(c){return this.isOptionSelected(c)&&this.deselectFromDropdown},hasKeyboardFocusBorder:function(c){return!(!this.keyboardFocusBorder||!this.isKeyboardNavigation)&&c===this.typeAheadPointer},optionComparator:function(c,v){return this.getOptionKey(c)===this.getOptionKey(v)},findOptionFromReducedValue:function(c){var v=this,C=[].concat(_()(this.options),_()(this.pushedTags)).filter(function(O){return JSON.stringify(v.reduce(O))===JSON.stringify(c)});return C.length===1?C[0]:C.find(function(O){return v.optionComparator(O,v.$data._value)})||c},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var c=null;this.multiple&&(c=_()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(c)}},optionExists:function(c){var v=this;return this.optionList.some(function(C){return v.optionComparator(C,c)})},optionAriaSelected:function(c){return this.selectable(c)?String(this.isOptionSelected(c)):null},normalizeOptionForSlot:function(c){return g()(c)==="object"?c:f()({},this.label,c)},pushTag:function(c){this.pushedTags.push(c)},onEscape:function(){this.search.length?this.search="":this.open=!1},onSearchBlur:function(){if(!this.mousedown||this.searching){var c=this.clearSearchOnSelect,v=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:c,multiple:v})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,this.search.length!==0||this.options.length!==0||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onMouseMove:function(c,v){this.isKeyboardNavigation=!1,this.selectable(c)&&(this.typeAheadPointer=v)},onSearchKeyDown:function(c){var v=this,C=function(q){if(q.preventDefault(),v.open)return!v.isComposing&&v.typeAheadSelect();v.open=!0},O={8:function(q){return v.maybeDeleteValue()},9:function(q){return v.onTab()},27:function(q){return v.onEscape()},38:function(q){if(q.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadUp();v.open=!0},40:function(q){if(q.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadDown();v.open=!0}};this.selectOnKeyCodes.forEach(function(q){return O[q]=C});var W=this.mapKeydown(O,this);if(typeof W[c.keyCode]=="function")return W[c.keyCode](c)},onSearchKeyPress:function(c){this.open||c.keyCode!==32||(c.preventDefault(),this.open=!0)}}},function(){var c=this,v=c.$createElement,C=c._self._c||v;return C("div",{staticClass:"v-select",class:c.stateClasses,attrs:{id:"v-select-"+c.uid,dir:c.dir}},[c._t("header",null,null,c.scope.header),c._v(" "),C("div",{ref:"toggle",staticClass:"vs__dropdown-toggle"},[C("div",{ref:"selectedOptions",staticClass:"vs__selected-options",on:{mousedown:c.toggleDropdown}},[c._l(c.selectedValue,function(O,W){return c._t("selected-option-container",[C("span",{key:c.getOptionKey(O),staticClass:"vs__selected"},[c._t("selected-option",[c._v(`
            `+c._s(c.getOptionLabel(O))+`
          `)],null,c.normalizeOptionForSlot(O)),c._v(" "),c.multiple?C("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelDeselectOption(c.getOptionLabel(O)),"aria-label":c.ariaLabelDeselectOption(c.getOptionLabel(O))},on:{mousedown:function(q){return q.stopPropagation(),c.deselect(O)},keydown:function(q){return!q.type.indexOf("key")&&c._k(q.keyCode,"enter",13,q.key,"Enter")?null:c.keyboardDeselect(O,W)}}},[C(c.childComponents.Deselect,{tag:"component"})],1):c._e()],2)],{option:c.normalizeOptionForSlot(O),deselect:c.deselect,multiple:c.multiple,disabled:c.disabled})}),c._v(" "),c._t("search",[C("input",c._g(c._b({staticClass:"vs__search"},"input",c.scope.search.attributes,!1),c.scope.search.events))],null,c.scope.search)],2),c._v(" "),C("div",{ref:"actions",staticClass:"vs__actions"},[C("button",{directives:[{name:"show",rawName:"v-show",value:c.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelClearSelected,"aria-label":c.ariaLabelClearSelected},on:{click:c.clearSelection}},[C(c.childComponents.Deselect,{tag:"component"})],1),c._v(" "),c.noDrop?c._e():C("button",{ref:"openIndicatorButton",staticClass:"vs__open-indicator-button",attrs:{type:"button",tabindex:"-1","aria-labelledby":"vs-"+c.uid+"__listbox","aria-controls":"vs-"+c.uid+"__listbox","aria-expanded":c.dropdownOpen.toString()},on:{mousedown:c.toggleDropdown}},[c._t("open-indicator",[C(c.childComponents.OpenIndicator,c._b({tag:"component"},"component",c.scope.openIndicator.attributes,!1))],null,c.scope.openIndicator)],2),c._v(" "),c._t("spinner",[C("div",{directives:[{name:"show",rawName:"v-show",value:c.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[c._v("Loading...")])],null,c.scope.spinner)],2)]),c._v(" "),C("transition",{attrs:{name:c.transition}},[c.dropdownOpen?C("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs-"+c.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox,"aria-multiselectable":c.multiple,tabindex:"-1"},on:{mousedown:function(O){return O.preventDefault(),c.onMousedown(O)},mouseup:c.onMouseUp}},[c._t("list-header",null,null,c.scope.listHeader),c._v(" "),c._l(c.filteredOptions,function(O,W){return C("li",{key:c.getOptionKey(O),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":c.isOptionDeselectable(O)&&W===c.typeAheadPointer,"vs__dropdown-option--selected":c.isOptionSelected(O),"vs__dropdown-option--highlight":W===c.typeAheadPointer,"vs__dropdown-option--kb-focus":c.hasKeyboardFocusBorder(W),"vs__dropdown-option--disabled":!c.selectable(O)},attrs:{id:"vs-"+c.uid+"__option-"+W,role:"option","aria-selected":c.optionAriaSelected(O)},on:{mousemove:function(q){return c.onMouseMove(O,W)},click:function(q){q.preventDefault(),q.stopPropagation(),c.selectable(O)&&c.select(O)}}},[c._t("option",[c._v(`
          `+c._s(c.getOptionLabel(O))+`
        `)],null,c.normalizeOptionForSlot(O))],2)}),c._v(" "),c.filteredOptions.length===0?C("li",{staticClass:"vs__no-options"},[c._t("no-options",[c._v(`
          Sorry, no matching options.
        `)],null,c.scope.noOptions)],2):c._e(),c._v(" "),c._t("list-footer",null,null,c.scope.listFooter)],2):C("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox}})]),c._v(" "),c._t("footer",null,null,c.scope.footer)],2)},[]).exports,U={ajax:m,pointer:F,pointerScroll:h},G=I})(),s})()})})(ir);var Ja=ir.exports;const ji=Math.min,ot=Math.max,Yi=Math.round,fi=Math.floor,Ga=e=>({x:e,y:e}),M_={left:"right",right:"left",bottom:"top",top:"bottom"},j_={start:"end",end:"start"};function Eo(e,a,i){return ot(e,ji(a,i))}function yt(e,a){return typeof e=="function"?e(a):e}function Ua(e){return e.split("-")[0]}function k0(e){return e.split("-")[1]}function Yn(e){return e==="x"?"y":"x"}function nr(e){return e==="y"?"height":"width"}function ni(e){return["top","bottom"].includes(Ua(e))?"y":"x"}function or(e){return Yn(ni(e))}function Y_(e,a,i){i===void 0&&(i=!1);const n=k0(e),o=or(e),s=nr(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return a.reference[s]>a.floating[s]&&(r=qi(r)),[r,qi(r)]}function q_(e){const a=qi(e);return[nn(e),a,nn(a)]}function nn(e){return e.replace(/start|end/g,a=>j_[a])}function L_(e,a,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?a?o:n:a?n:o;case"left":case"right":return a?s:r;default:return[]}}function Z_(e,a,i,n){const o=k0(e);let s=L_(Ua(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),a&&(s=s.concat(s.map(nn)))),s}function qi(e){return e.replace(/left|right|bottom|top/g,a=>M_[a])}function I_(e){return{top:0,right:0,bottom:0,left:0,...e}}function H_(e){return typeof e!="number"?I_(e):{top:e,right:e,bottom:e,left:e}}function Li(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ko(e,a,i){let{reference:n,floating:o}=e;const s=ni(a),r=or(a),_=nr(r),l=Ua(a),g=s==="y",d=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2,h=n[_]/2-o[_]/2;let F;switch(l){case"top":F={x:d,y:n.y-o.height};break;case"bottom":F={x:d,y:n.y+n.height};break;case"right":F={x:n.x+n.width,y:f};break;case"left":F={x:n.x-o.width,y:f};break;default:F={x:n.x,y:n.y}}switch(k0(a)){case"start":F[r]-=h*(i&&g?-1:1);break;case"end":F[r]+=h*(i&&g?-1:1);break}return F}const P_=async(e,a,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,_=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(a));let g=await r.getElementRects({reference:e,floating:a,strategy:o}),{x:d,y:f}=ko(g,n,l),h=n,F={},m=0;for(let b=0;b<_.length;b++){const{name:E,fn:A}=_[b],{x:w,y:R,data:Y,reset:Z}=await A({x:d,y:f,initialPlacement:n,placement:h,strategy:o,middlewareData:F,rects:g,platform:r,elements:{reference:e,floating:a}});d=w??d,f=R??f,F={...F,[E]:{...F[E],...Y}},Z&&m<=50&&(m++,typeof Z=="object"&&(Z.placement&&(h=Z.placement),Z.rects&&(g=Z.rects===!0?await r.getElementRects({reference:e,floating:a,strategy:o}):Z.rects),{x:d,y:f}=ko(g,h,l)),b=-1)}return{x:d,y:f,placement:h,strategy:o,middlewareData:F}};async function sr(e,a){var i;a===void 0&&(a={});const{x:n,y:o,platform:s,rects:r,elements:_,strategy:l}=e,{boundary:g="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:F=0}=yt(a,e),m=H_(F),b=_[h?f==="floating"?"reference":"floating":f],E=Li(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(b)))==null||i?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(_.floating)),boundary:g,rootBoundary:d,strategy:l})),A=f==="floating"?{...r.floating,x:n,y:o}:r.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(_.floating)),R=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},Y=Li(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:_,rect:A,offsetParent:w,strategy:l}):A);return{top:(E.top-Y.top+m.top)/R.y,bottom:(Y.bottom-E.bottom+m.bottom)/R.y,left:(E.left-Y.left+m.left)/R.x,right:(Y.right-E.right+m.right)/R.x}}const G_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(a){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:_,platform:l,elements:g}=a,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:F="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...E}=yt(e,a);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const A=Ua(o),w=Ua(_)===_,R=await(l.isRTL==null?void 0:l.isRTL(g.floating)),Y=h||(w||!b?[qi(_)]:q_(_));!h&&m!=="none"&&Y.push(...Z_(_,b,m,R));const Z=[_,...Y],N=await sr(a,E),I=[];let U=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&I.push(N[A]),f){const C=Y_(o,r,R);I.push(N[C[0]],N[C[1]])}if(U=[...U,{placement:o,overflows:I}],!I.every(C=>C<=0)){var G,c;const C=(((G=s.flip)==null?void 0:G.index)||0)+1,O=Z[C];if(O)return{data:{index:C,overflows:U},reset:{placement:O}};let W=(c=U.filter(q=>q.overflows[0]<=0).sort((q,te)=>q.overflows[1]-te.overflows[1])[0])==null?void 0:c.placement;if(!W)switch(F){case"bestFit":{var v;const q=(v=U.map(te=>[te.placement,te.overflows.filter(X=>X>0).reduce((X,ce)=>X+ce,0)]).sort((te,X)=>te[1]-X[1])[0])==null?void 0:v[0];q&&(W=q);break}case"initialPlacement":W=_;break}if(o!==W)return{reset:{placement:W}}}return{}}}};async function U_(e,a){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=Ua(i),_=k0(i),l=ni(i)==="y",g=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,f=yt(a,e);let{mainAxis:h,crossAxis:F,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return _&&typeof m=="number"&&(F=_==="end"?m*-1:m),l?{x:F*d,y:h*g}:{x:h*g,y:F*d}}const z_=function(e){return{name:"offset",options:e,async fn(a){var i,n;const{x:o,y:s,placement:r,middlewareData:_}=a,l=await U_(a,e);return r===((i=_.offset)==null?void 0:i.placement)&&(n=_.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:r}}}}},W_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(a){const{x:i,y:n,placement:o}=a,{mainAxis:s=!0,crossAxis:r=!1,limiter:_={fn:E=>{let{x:A,y:w}=E;return{x:A,y:w}}},...l}=yt(e,a),g={x:i,y:n},d=await sr(a,l),f=ni(Ua(o)),h=Yn(f);let F=g[h],m=g[f];if(s){const E=h==="y"?"top":"left",A=h==="y"?"bottom":"right",w=F+d[E],R=F-d[A];F=Eo(w,F,R)}if(r){const E=f==="y"?"top":"left",A=f==="y"?"bottom":"right",w=m+d[E],R=m-d[A];m=Eo(w,m,R)}const b=_.fn({...a,[h]:F,[f]:m});return{...b,data:{x:b.x-i,y:b.y-n}}}}},$_=function(e){return e===void 0&&(e={}),{options:e,fn(a){const{x:i,y:n,placement:o,rects:s,middlewareData:r}=a,{offset:_=0,mainAxis:l=!0,crossAxis:g=!0}=yt(e,a),d={x:i,y:n},f=ni(o),h=Yn(f);let F=d[h],m=d[f];const b=yt(_,a),E=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const R=h==="y"?"height":"width",Y=s.reference[h]-s.floating[R]+E.mainAxis,Z=s.reference[h]+s.reference[R]-E.mainAxis;F<Y?F=Y:F>Z&&(F=Z)}if(g){var A,w;const R=h==="y"?"width":"height",Y=["top","left"].includes(Ua(o)),Z=s.reference[f]-s.floating[R]+(Y&&((A=r.offset)==null?void 0:A[f])||0)+(Y?0:E.crossAxis),N=s.reference[f]+s.reference[R]+(Y?0:((w=r.offset)==null?void 0:w[f])||0)-(Y?E.crossAxis:0);m<Z?m=Z:m>N&&(m=N)}return{[h]:F,[f]:m}}}};function za(e){return rr(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var a;return(e==null||(a=e.ownerDocument)==null?void 0:a.defaultView)||window}function va(e){var a;return(a=(rr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:a.documentElement}function rr(e){return e instanceof Node||e instanceof Je(e).Node}function wa(e){return e instanceof Element||e instanceof Je(e).Element}function ca(e){return e instanceof HTMLElement||e instanceof Je(e).HTMLElement}function Ao(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}function oi(e){const{overflow:a,overflowX:i,overflowY:n,display:o}=ia(e);return/auto|scroll|overlay|hidden|clip/.test(a+n+i)&&!["inline","contents"].includes(o)}function V_(e){return["table","td","th"].includes(za(e))}function qn(e){const a=Ln(),i=ia(e);return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!a&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!a&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function Q_(e){let a=Et(e);for(;ca(a)&&!A0(a);){if(qn(a))return a;a=Et(a)}return null}function Ln(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function A0(e){return["html","body","#document"].includes(za(e))}function ia(e){return Je(e).getComputedStyle(e)}function w0(e){return wa(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Et(e){if(za(e)==="html")return e;const a=e.assignedSlot||e.parentNode||Ao(e)&&e.host||va(e);return Ao(a)?a.host:a}function lr(e){const a=Et(e);return A0(a)?e.ownerDocument?e.ownerDocument.body:e.body:ca(a)&&oi(a)?a:lr(a)}function Jt(e,a,i){var n;a===void 0&&(a=[]),i===void 0&&(i=!0);const o=lr(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Je(o);return s?a.concat(r,r.visualViewport||[],oi(o)?o:[],r.frameElement&&i?Jt(r.frameElement):[]):a.concat(o,Jt(o,[],i))}function _r(e){const a=ia(e);let i=parseFloat(a.width)||0,n=parseFloat(a.height)||0;const o=ca(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,_=Yi(i)!==s||Yi(n)!==r;return _&&(i=s,n=r),{width:i,height:n,$:_}}function Zn(e){return wa(e)?e:e.contextElement}function Dt(e){const a=Zn(e);if(!ca(a))return Ga(1);const i=a.getBoundingClientRect(),{width:n,height:o,$:s}=_r(a);let r=(s?Yi(i.width):i.width)/n,_=(s?Yi(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!_||!Number.isFinite(_))&&(_=1),{x:r,y:_}}const K_=Ga(0);function dr(e){const a=Je(e);return!Ln()||!a.visualViewport?K_:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function J_(e,a,i){return a===void 0&&(a=!1),!i||a&&i!==Je(e)?!1:a}function _t(e,a,i,n){a===void 0&&(a=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=Zn(e);let r=Ga(1);a&&(n?wa(n)&&(r=Dt(n)):r=Dt(e));const _=J_(s,i,n)?dr(s):Ga(0);let l=(o.left+_.x)/r.x,g=(o.top+_.y)/r.y,d=o.width/r.x,f=o.height/r.y;if(s){const h=Je(s),F=n&&wa(n)?Je(n):n;let m=h,b=m.frameElement;for(;b&&n&&F!==m;){const E=Dt(b),A=b.getBoundingClientRect(),w=ia(b),R=A.left+(b.clientLeft+parseFloat(w.paddingLeft))*E.x,Y=A.top+(b.clientTop+parseFloat(w.paddingTop))*E.y;l*=E.x,g*=E.y,d*=E.x,f*=E.y,l+=R,g+=Y,m=Je(b),b=m.frameElement}}return Li({width:d,height:f,x:l,y:g})}const X_=[":popover-open",":modal"];function fr(e){return X_.some(a=>{try{return e.matches(a)}catch{return!1}})}function ed(e){let{elements:a,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=va(n),_=a?fr(a.floating):!1;if(n===r||_&&s)return i;let l={scrollLeft:0,scrollTop:0},g=Ga(1);const d=Ga(0),f=ca(n);if((f||!f&&!s)&&((za(n)!=="body"||oi(r))&&(l=w0(n)),ca(n))){const h=_t(n);g=Dt(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:i.width*g.x,height:i.height*g.y,x:i.x*g.x-l.scrollLeft*g.x+d.x,y:i.y*g.y-l.scrollTop*g.y+d.y}}function ad(e){return Array.from(e.getClientRects())}function gr(e){return _t(va(e)).left+w0(e).scrollLeft}function td(e){const a=va(e),i=w0(e),n=e.ownerDocument.body,o=ot(a.scrollWidth,a.clientWidth,n.scrollWidth,n.clientWidth),s=ot(a.scrollHeight,a.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+gr(e);const _=-i.scrollTop;return ia(n).direction==="rtl"&&(r+=ot(a.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:_}}function id(e,a){const i=Je(e),n=va(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,_=0,l=0;if(o){s=o.width,r=o.height;const g=Ln();(!g||g&&a==="fixed")&&(_=o.offsetLeft,l=o.offsetTop)}return{width:s,height:r,x:_,y:l}}function nd(e,a){const i=_t(e,!0,a==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=ca(e)?Dt(e):Ga(1),r=e.clientWidth*s.x,_=e.clientHeight*s.y,l=o*s.x,g=n*s.y;return{width:r,height:_,x:l,y:g}}function wo(e,a,i){let n;if(a==="viewport")n=id(e,i);else if(a==="document")n=td(va(e));else if(wa(a))n=nd(a,i);else{const o=dr(e);n={...a,x:a.x-o.x,y:a.y-o.y}}return Li(n)}function hr(e,a){const i=Et(e);return i===a||!wa(i)||A0(i)?!1:ia(i).position==="fixed"||hr(i,a)}function od(e,a){const i=a.get(e);if(i)return i;let n=Jt(e,[],!1).filter(_=>wa(_)&&za(_)!=="body"),o=null;const s=ia(e).position==="fixed";let r=s?Et(e):e;for(;wa(r)&&!A0(r);){const _=ia(r),l=qn(r);!l&&_.position==="fixed"&&(o=null),(s?!l&&!o:!l&&_.position==="static"&&o&&["absolute","fixed"].includes(o.position)||oi(r)&&!l&&hr(e,r))?n=n.filter(g=>g!==r):o=_,r=Et(r)}return a.set(e,n),n}function sd(e){let{element:a,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?od(a,this._c):[].concat(i),n],r=s[0],_=s.reduce((l,g)=>{const d=wo(a,g,o);return l.top=ot(d.top,l.top),l.right=ji(d.right,l.right),l.bottom=ji(d.bottom,l.bottom),l.left=ot(d.left,l.left),l},wo(a,r,o));return{width:_.right-_.left,height:_.bottom-_.top,x:_.left,y:_.top}}function rd(e){const{width:a,height:i}=_r(e);return{width:a,height:i}}function ld(e,a,i){const n=ca(a),o=va(a),s=i==="fixed",r=_t(e,!0,s,a);let _={scrollLeft:0,scrollTop:0};const l=Ga(0);if(n||!n&&!s)if((za(a)!=="body"||oi(o))&&(_=w0(a)),n){const f=_t(a,!0,s,a);l.x=f.x+a.clientLeft,l.y=f.y+a.clientTop}else o&&(l.x=gr(o));const g=r.left+_.scrollLeft-l.x,d=r.top+_.scrollTop-l.y;return{x:g,y:d,width:r.width,height:r.height}}function So(e,a){return!ca(e)||ia(e).position==="fixed"?null:a?a(e):e.offsetParent}function Fr(e,a){const i=Je(e);if(!ca(e)||fr(e))return i;let n=So(e,a);for(;n&&V_(n)&&ia(n).position==="static";)n=So(n,a);return n&&(za(n)==="html"||za(n)==="body"&&ia(n).position==="static"&&!qn(n))?i:n||Q_(e)||i}const _d=async function(e){const a=this.getOffsetParent||Fr,i=this.getDimensions;return{reference:ld(e.reference,await a(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function dd(e){return ia(e).direction==="rtl"}const fd={convertOffsetParentRelativeRectToViewportRelativeRect:ed,getDocumentElement:va,getClippingRect:sd,getOffsetParent:Fr,getElementRects:_d,getClientRects:ad,getDimensions:rd,getScale:Dt,isElement:wa,isRTL:dd};function gd(e,a){let i=null,n;const o=va(e);function s(){var _;clearTimeout(n),(_=i)==null||_.disconnect(),i=null}function r(_,l){_===void 0&&(_=!1),l===void 0&&(l=1),s();const{left:g,top:d,width:f,height:h}=e.getBoundingClientRect();if(_||a(),!f||!h)return;const F=fi(d),m=fi(o.clientWidth-(g+f)),b=fi(o.clientHeight-(d+h)),E=fi(g),A={rootMargin:-F+"px "+-m+"px "+-b+"px "+-E+"px",threshold:ot(0,ji(1,l))||1};let w=!0;function R(Y){const Z=Y[0].intersectionRatio;if(Z!==l){if(!w)return r();Z?r(!1,Z):n=setTimeout(()=>{r(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(R,{...A,root:o.ownerDocument})}catch{i=new IntersectionObserver(R,A)}i.observe(e)}return r(!0),s}function hd(e,a,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:_=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,g=Zn(e),d=o||s?[...g?Jt(g):[],...Jt(a)]:[];d.forEach(A=>{o&&A.addEventListener("scroll",i,{passive:!0}),s&&A.addEventListener("resize",i)});const f=g&&_?gd(g,i):null;let h=-1,F=null;r&&(F=new ResizeObserver(A=>{let[w]=A;w&&w.target===g&&F&&(F.unobserve(a),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var R;(R=F)==null||R.observe(a)})),i()}),g&&!l&&F.observe(g),F.observe(a));let m,b=l?_t(e):null;l&&E();function E(){const A=_t(e);b&&(A.x!==b.x||A.y!==b.y||A.width!==b.width||A.height!==b.height)&&i(),b=A,m=requestAnimationFrame(E)}return i(),()=>{var A;d.forEach(w=>{o&&w.removeEventListener("scroll",i),s&&w.removeEventListener("resize",i)}),f?.(),(A=F)==null||A.disconnect(),F=null,l&&cancelAnimationFrame(m)}}const Fd=W_,ud=G_,cd=$_,md=(e,a,i)=>{const n=new Map,o={platform:fd,...i},s={...o.platform,_c:n};return P_(e,a,{...o,platform:s})},pd={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bd=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Td=[],Dd=ae(pd,bd,Td,!1,null,null);const ur=Dd.exports,cr=(e,a)=>{const i=[];let n=0,o=e.toLowerCase().indexOf(a.toLowerCase(),n),s=0;for(;o>-1&&s<e.length;)n=o+a.length,i.push({start:o,end:n}),o=e.toLowerCase().indexOf(a.toLowerCase(),n),s++;return i},yd={name:"NcHighlight",props:{text:{type:String,default:""},search:{type:String,default:""},highlight:{type:Array,default:()=>[]}},computed:{ranges(){let e=[];return!this.search&&this.highlight.length===0||(this.highlight.length>0?e=this.highlight:e=cr(this.text,this.search),e.forEach((a,i)=>{a.end<a.start&&(e[i]={start:a.end,end:a.start})}),e=e.reduce((a,i)=>(i.start<this.text.length&&i.end>0&&a.push({start:i.start<0?0:i.start,end:i.end>this.text.length?this.text.length:i.end}),a),[]),e.sort((a,i)=>a.start-i.start),e=e.reduce((a,i)=>{if(!a.length)a.push(i);else{const n=a.length-1;a[n].end>=i.start?a[n]={start:a[n].start,end:Math.max(a[n].end,i.end)}:a.push(i)}return a},[])),e},chunks(){if(this.ranges.length===0)return[{start:0,end:this.text.length,highlight:!1,text:this.text}];const e=[];let a=0,i=0;for(;a<this.text.length;){const n=this.ranges[i];if(n.start===a){e.push({...n,highlight:!0,text:this.text.slice(n.start,n.end)}),i++,a=n.end,i>=this.ranges.length&&a<this.text.length&&(e.push({start:a,end:this.text.length,highlight:!1,text:this.text.slice(a)}),a=this.text.length);continue}e.push({start:a,end:n.start,highlight:!1,text:this.text.slice(a,n.start)}),a=n.start}return e}},render(e){return this.ranges.length?e("span",{},this.chunks.map(a=>a.highlight?e("strong",{},a.text):a.text)):e("span",{},this.text)}},Ed=null,kd=null;var Ad=ae(yd,Ed,kd,!1,null,null);const S0=Ad.exports,wd={name:"NcEllipsisedOption",components:{NcHighlight:S0},props:{name:{type:String,default:""},search:{type:String,default:""}},computed:{needsTruncate(){return this.name&&this.name.length>=10},split(){return this.name.length-Math.min(Math.floor(this.name.length/2),10)},part1(){return this.needsTruncate?this.name.slice(0,this.split):this.name},part2(){return this.needsTruncate?this.name.slice(this.split):""},highlight1(){return this.search?cr(this.name,this.search):[]},highlight2(){return this.highlight1.map(e=>({start:e.start-this.split,end:e.end-this.split}))}}};var Sd=function(){var e=this,a=e._self._c;return a("span",{staticClass:"name-parts",attrs:{dir:"auto",title:e.name}},[a("NcHighlight",{staticClass:"name-parts__first",attrs:{text:e.part1,search:e.search,highlight:e.highlight1}}),e.part2?a("NcHighlight",{staticClass:"name-parts__last",attrs:{text:e.part2,search:e.search,highlight:e.highlight2}}):e._e()],1)},vd=[],Rd=ae(wd,Sd,vd,!1,null,"f6384352");const Cd=Rd.exports,Nd={name:"NcActionRouter",mixins:[zs],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}},props:{to:{type:[String,Object],default:"",required:!0},exact:{type:Boolean,default:!1}}};var Od=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("RouterLink",{staticClass:"action-router focusable",attrs:{to:e.to,"aria-label":e.ariaLabel,exact:e.exact,title:e.title,rel:"nofollow noreferrer noopener",role:e.isInSemanticMenu&&"menuitem"},nativeOn:{click:function(i){return e.onClick.apply(null,arguments)}}},[e._t("icon",function(){return[a("span",{staticClass:"action-router__icon",class:[e.isIconUrl?"action-router__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?`url(${e.icon})`:null},attrs:{"aria-hidden":"true"}})]}),e.name?a("span",{staticClass:"action-router__longtext-wrapper"},[a("strong",{staticClass:"action-router__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-router__text"},[e._v(e._s(e.text))]),e._e()],2)],1)},Bd=[],xd=ae(Nd,Od,Bd,!1,null,"579c6b4d");const Md=xd.exports,jd={name:"NcActionText",mixins:[zs],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}}};var Yd=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("span",{staticClass:"action-text",on:{click:e.onClick}},[e._t("icon",function(){return[e.icon!==""?a("span",{staticClass:"action-text__icon",class:[e.isIconUrl?"action-text__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?`url(${e.icon})`:null},attrs:{"aria-hidden":"true"}}):e._e()]}),e.name?a("span",{staticClass:"action-text__longtext-wrapper"},[a("strong",{staticClass:"action-text__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-text__text"},[e._v(e._s(e.text))]),e._e()],2)])},qd=[],Ld=ae(jd,Yd,qd,!1,null,"824615f4");const Zd=Ld.exports,Id=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="var(--color-success)" d="M4.8 11.2h6.4V4.8H4.8v6.4zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
</svg>
`,vo=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4z" />
	<path fill="var(--color-warning)" d="M6.9.1C3 .6-.1 4-.1 8c0 4.4 3.6 8 8 8 4 0 7.4-3 8-6.9-1.2 1.3-2.9 2.1-4.7 2.1-3.5 0-6.4-2.9-6.4-6.4 0-1.9.8-3.6 2.1-4.7z" />
</svg>
`,Hd=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path fill="var(--color-error)" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
	<path fill="#fdffff" d="M5 6.5h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5S4.2 6.5 5 6.5z" />
</svg>
`,Ro=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3.2c2.7 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8S3.2 10.7 3.2 8 5.3 3.2 8 3.2z" />
</svg>
`;ie(xl);const mr=e=>{switch(e){case"away":return j("away");case"busy":return j("busy");case"dnd":return j("do not disturb");case"online":return j("online");case"invisible":return j("invisible");case"offline":return j("offline");default:return e}};ie(Ml);const Pd={name:"NcUserStatusIcon",props:{user:{type:String,default:null},status:{type:String,default:null,validator:e=>["online","away","busy","dnd","invisible","offline"].includes(e)},ariaHidden:{type:String,default:null,validator:e=>["true","false"].includes(e)}},data(){return{fetchedUserStatus:null}},computed:{activeStatus(){return this.status??this.fetchedUserStatus},activeSvg(){return{online:Id,away:vo,busy:vo,dnd:Hd,invisible:Ro,offline:Ro}[this.activeStatus]??null},ariaLabel(){return this.ariaHidden==="true"?null:j("User status: {status}",{status:mr(this.activeStatus)})}},watch:{user:{immediate:!0,async handler(e,a){if(!e||!Ws()?.user_status?.enabled){this.fetchedUserStatus=null;return}try{const{data:i}=await ma.get(Pa("/apps/user_status/api/v1/statuses/{user}",{user:e}));this.fetchedUserStatus=i.ocs?.data?.status}catch{this.fetchedUserStatus=null}}}}};var Gd=function(){var e=this,a=e._self._c;return e.activeStatus?a("span",{staticClass:"user-status-icon",class:{"user-status-icon--invisible":["invisible","offline"].includes(e.status)},attrs:{role:"img","aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},domProps:{innerHTML:e._s(e.activeSvg)}}):e._e()},Ud=[],zd=ae(Pd,Gd,Ud,!1,null,"0555d8d0");const pr=zd.exports;ie(jl);class ke{constructor(a,i,n,o){this.r=a,this.g=i,this.b=n,o&&(this.name=o)}get color(){const a=i=>`00${i.toString(16)}`.slice(-2);return`#${a(this.r)}${a(this.g)}${a(this.b)}`}}function Wd(e,a){const i=new Array(3);return i[0]=(a[1].r-a[0].r)/e,i[1]=(a[1].g-a[0].g)/e,i[2]=(a[1].b-a[0].b)/e,i}function I0(e,a,i){const n=[];n.push(a);const o=Wd(e,[a,i]);for(let s=1;s<e;s++){const r=Math.floor(a.r+o[0]*s),_=Math.floor(a.g+o[1]*s),l=Math.floor(a.b+o[2]*s);n.push(new ke(r,_,l))}return n}const $d=[new ke(182,70,157,j("Purple")),new ke(191,103,139,j("Rosy brown")),new ke(201,136,121,j("Feldspar")),new ke(211,169,103,j("Whiskey")),new ke(221,203,85,j("Gold")),new ke(165,184,114,j("Olivine")),new ke(110,166,143,j("Acapulco")),new ke(55,148,172,j("Boston Blue")),new ke(0,130,201,j("Nextcloud blue")),new ke(45,115,190,j("Mariner")),new ke(91,100,179,j("Blue Violet")),new ke(136,85,168,j("Deluge"))];function Vd(e){const a=new ke(182,70,157,j("Purple")),i=new ke(221,203,85,j("Gold")),n=new ke(0,130,201,j("Nextcloud blue")),o=I0(e,a,i),s=I0(e,i,n),r=I0(e,n,a);return o.concat(s).concat(r)}var br={exports:{}},Tr={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(i,n){return i<<n|i>>>32-n},rotr:function(i,n){return i<<32-n|i>>>n},endian:function(i){if(i.constructor==Number)return a.rotl(i,8)&16711935|a.rotl(i,24)&4278255360;for(var n=0;n<i.length;n++)i[n]=a.endian(i[n]);return i},randomBytes:function(i){for(var n=[];i>0;i--)n.push(Math.floor(Math.random()*256));return n},bytesToWords:function(i){for(var n=[],o=0,s=0;o<i.length;o++,s+=8)n[s>>>5]|=i[o]<<24-s%32;return n},wordsToBytes:function(i){for(var n=[],o=0;o<i.length*32;o+=8)n.push(i[o>>>5]>>>24-o%32&255);return n},bytesToHex:function(i){for(var n=[],o=0;o<i.length;o++)n.push((i[o]>>>4).toString(16)),n.push((i[o]&15).toString(16));return n.join("")},hexToBytes:function(i){for(var n=[],o=0;o<i.length;o+=2)n.push(parseInt(i.substr(o,2),16));return n},bytesToBase64:function(i){for(var n=[],o=0;o<i.length;o+=3)for(var s=i[o]<<16|i[o+1]<<8|i[o+2],r=0;r<4;r++)o*8+r*6<=i.length*8?n.push(e.charAt(s>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(i){i=i.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],o=0,s=0;o<i.length;s=++o%4)s!=0&&n.push((e.indexOf(i.charAt(o-1))&Math.pow(2,-2*s+8)-1)<<s*2|e.indexOf(i.charAt(o))>>>6-s*2);return n}};Tr.exports=a})();var Qd=Tr.exports,on={utf8:{stringToBytes:function(e){return on.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(on.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var a=[],i=0;i<e.length;i++)a.push(e.charCodeAt(i)&255);return a},bytesToString:function(e){for(var a=[],i=0;i<e.length;i++)a.push(String.fromCharCode(e[i]));return a.join("")}}},Co=on,Kd=function(e){return e!=null&&(Dr(e)||Jd(e)||!!e._isBuffer)};function Dr(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Jd(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Dr(e.slice(0,0))}(function(){var e=Qd,a=Co.utf8,i=Kd,n=Co.bin,o=function(s,r){s.constructor==String?r&&r.encoding==="binary"?s=n.stringToBytes(s):s=a.stringToBytes(s):i(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var _=e.bytesToWords(s),l=s.length*8,g=1732584193,d=-271733879,f=-1732584194,h=271733878,F=0;F<_.length;F++)_[F]=(_[F]<<8|_[F]>>>24)&16711935|(_[F]<<24|_[F]>>>8)&4278255360;_[l>>>5]|=128<<l%32,_[(l+64>>>9<<4)+14]=l;for(var m=o._ff,b=o._gg,E=o._hh,A=o._ii,F=0;F<_.length;F+=16){var w=g,R=d,Y=f,Z=h;g=m(g,d,f,h,_[F+0],7,-680876936),h=m(h,g,d,f,_[F+1],12,-389564586),f=m(f,h,g,d,_[F+2],17,606105819),d=m(d,f,h,g,_[F+3],22,-1044525330),g=m(g,d,f,h,_[F+4],7,-176418897),h=m(h,g,d,f,_[F+5],12,1200080426),f=m(f,h,g,d,_[F+6],17,-1473231341),d=m(d,f,h,g,_[F+7],22,-45705983),g=m(g,d,f,h,_[F+8],7,1770035416),h=m(h,g,d,f,_[F+9],12,-1958414417),f=m(f,h,g,d,_[F+10],17,-42063),d=m(d,f,h,g,_[F+11],22,-1990404162),g=m(g,d,f,h,_[F+12],7,1804603682),h=m(h,g,d,f,_[F+13],12,-40341101),f=m(f,h,g,d,_[F+14],17,-1502002290),d=m(d,f,h,g,_[F+15],22,1236535329),g=b(g,d,f,h,_[F+1],5,-165796510),h=b(h,g,d,f,_[F+6],9,-1069501632),f=b(f,h,g,d,_[F+11],14,643717713),d=b(d,f,h,g,_[F+0],20,-373897302),g=b(g,d,f,h,_[F+5],5,-701558691),h=b(h,g,d,f,_[F+10],9,38016083),f=b(f,h,g,d,_[F+15],14,-660478335),d=b(d,f,h,g,_[F+4],20,-405537848),g=b(g,d,f,h,_[F+9],5,568446438),h=b(h,g,d,f,_[F+14],9,-1019803690),f=b(f,h,g,d,_[F+3],14,-187363961),d=b(d,f,h,g,_[F+8],20,1163531501),g=b(g,d,f,h,_[F+13],5,-1444681467),h=b(h,g,d,f,_[F+2],9,-51403784),f=b(f,h,g,d,_[F+7],14,1735328473),d=b(d,f,h,g,_[F+12],20,-1926607734),g=E(g,d,f,h,_[F+5],4,-378558),h=E(h,g,d,f,_[F+8],11,-2022574463),f=E(f,h,g,d,_[F+11],16,1839030562),d=E(d,f,h,g,_[F+14],23,-35309556),g=E(g,d,f,h,_[F+1],4,-1530992060),h=E(h,g,d,f,_[F+4],11,1272893353),f=E(f,h,g,d,_[F+7],16,-155497632),d=E(d,f,h,g,_[F+10],23,-1094730640),g=E(g,d,f,h,_[F+13],4,681279174),h=E(h,g,d,f,_[F+0],11,-358537222),f=E(f,h,g,d,_[F+3],16,-722521979),d=E(d,f,h,g,_[F+6],23,76029189),g=E(g,d,f,h,_[F+9],4,-640364487),h=E(h,g,d,f,_[F+12],11,-421815835),f=E(f,h,g,d,_[F+15],16,530742520),d=E(d,f,h,g,_[F+2],23,-995338651),g=A(g,d,f,h,_[F+0],6,-198630844),h=A(h,g,d,f,_[F+7],10,1126891415),f=A(f,h,g,d,_[F+14],15,-1416354905),d=A(d,f,h,g,_[F+5],21,-57434055),g=A(g,d,f,h,_[F+12],6,1700485571),h=A(h,g,d,f,_[F+3],10,-1894986606),f=A(f,h,g,d,_[F+10],15,-1051523),d=A(d,f,h,g,_[F+1],21,-2054922799),g=A(g,d,f,h,_[F+8],6,1873313359),h=A(h,g,d,f,_[F+15],10,-30611744),f=A(f,h,g,d,_[F+6],15,-1560198380),d=A(d,f,h,g,_[F+13],21,1309151649),g=A(g,d,f,h,_[F+4],6,-145523070),h=A(h,g,d,f,_[F+11],10,-1120210379),f=A(f,h,g,d,_[F+2],15,718787259),d=A(d,f,h,g,_[F+9],21,-343485551),g=g+w>>>0,d=d+R>>>0,f=f+Y>>>0,h=h+Z>>>0}return e.endian([g,d,f,h])};o._ff=function(s,r,_,l,g,d,f){var h=s+(r&_|~r&l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._gg=function(s,r,_,l,g,d,f){var h=s+(r&l|_&~l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._hh=function(s,r,_,l,g,d,f){var h=s+(r^_^l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._ii=function(s,r,_,l,g,d,f){var h=s+(_^(r|~l))+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._blocksize=16,o._digestsize=16,br.exports=function(s,r){if(s==null)throw new Error("Illegal argument "+s);var _=e.wordsToBytes(o(s,r));return r&&r.asBytes?_:r&&r.asString?n.bytesToString(_):e.bytesToHex(_)}})();var Xd=br.exports;const ef=Ms(Xd),No=function(e){let a=e.toLowerCase();a.match(/^([0-9a-f]{4}-?){8}$/)===null&&(a=ef(a)),a=a.replace(/[^0-9a-f]/g,"");const i=6,n=Vd(i);function o(s,r){let _=0;const l=[];for(let g=0;g<s.length;g++)l.push(parseInt(s.charAt(g),16)%16);for(const g in l)_+=l[g];return parseInt(parseInt(_,10)%r,10)}return n[o(a,i*3)]},In=(e,a,i)=>{const n=window.getComputedStyle(document.body).getPropertyValue("--background-invert-if-dark")==="invert(100%)";return js("/avatar"+(i?"/guest":"")+"/{user}/{size}"+(n?"/dark":""),{user:e,size:a})},af="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",tf="ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",kt=(e,a)=>{for(const i in a)e[i]=a[i];return e},sn="numeric",rn="ascii",ln="alpha",Ei="asciinumeric",gi="alphanumeric",_n="domain",yr="emoji",nf="scheme",of="slashscheme",Oo="whitespace";function sf(e,a){return e in a||(a[e]=[]),a[e]}function at(e,a,i){a[sn]&&(a[Ei]=!0,a[gi]=!0),a[rn]&&(a[Ei]=!0,a[ln]=!0),a[Ei]&&(a[gi]=!0),a[ln]&&(a[gi]=!0),a[gi]&&(a[_n]=!0),a[yr]&&(a[_n]=!0);for(const n in a){const o=sf(n,i);o.indexOf(e)<0&&o.push(e)}}function rf(e,a){const i={};for(const n in a)a[n].indexOf(e)>=0&&(i[n]=!0);return i}function Ke(e){e===void 0&&(e=null),this.j={},this.jr=[],this.jd=null,this.t=e}Ke.groups={},Ke.prototype={accepts(){return!!this.t},go(e){const a=this,i=a.j[e];if(i)return i;for(let n=0;n<a.jr.length;n++){const o=a.jr[n][0],s=a.jr[n][1];if(s&&o.test(e))return s}return a.jd},has(e,a){return a===void 0&&(a=!1),a?e in this.j:!!this.go(e)},ta(e,a,i,n){for(let o=0;o<e.length;o++)this.tt(e[o],a,i,n)},tr(e,a,i,n){n=n||Ke.groups;let o;return a&&a.j?o=a:(o=new Ke(a),i&&n&&at(a,i,n)),this.jr.push([e,o]),o},ts(e,a,i,n){let o=this;const s=e.length;if(!s)return o;for(let r=0;r<s-1;r++)o=o.tt(e[r]);return o.tt(e[s-1],a,i,n)},tt(e,a,i,n){n=n||Ke.groups;const o=this;if(a&&a.j)return o.j[e]=a,a;const s=a;let r,_=o.go(e);if(_?(r=new Ke,kt(r.j,_.j),r.jr.push.apply(r.jr,_.jr),r.jd=_.jd,r.t=_.t):r=new Ke,s){if(n)if(r.t&&typeof r.t=="string"){const l=kt(rf(r.t,n),i);at(s,l,n)}else i&&at(s,i,n);r.t=s}return o.j[e]=r,r}};const oe=(e,a,i,n,o)=>e.ta(a,i,n,o),ea=(e,a,i,n,o)=>e.tr(a,i,n,o),Bo=(e,a,i,n,o)=>e.ts(a,i,n,o),H=(e,a,i,n,o)=>e.tt(a,i,n,o),ba="WORD",dn="UWORD",Xt="LOCALHOST",fn="TLD",gn="UTLD",ki="SCHEME",ct="SLASH_SCHEME",Hn="NUM",Er="WS",Pn="NL",jt="OPENBRACE",Yt="CLOSEBRACE",Zi="OPENBRACKET",Ii="CLOSEBRACKET",Hi="OPENPAREN",Pi="CLOSEPAREN",Gi="OPENANGLEBRACKET",Ui="CLOSEANGLEBRACKET",zi="FULLWIDTHLEFTPAREN",Wi="FULLWIDTHRIGHTPAREN",$i="LEFTCORNERBRACKET",Vi="RIGHTCORNERBRACKET",Qi="LEFTWHITECORNERBRACKET",Ki="RIGHTWHITECORNERBRACKET",Ji="FULLWIDTHLESSTHAN",Xi="FULLWIDTHGREATERTHAN",e0="AMPERSAND",a0="APOSTROPHE",t0="ASTERISK",Oa="AT",i0="BACKSLASH",n0="BACKTICK",o0="CARET",Ma="COLON",Gn="COMMA",s0="DOLLAR",da="DOT",r0="EQUALS",Un="EXCLAMATION",fa="HYPHEN",l0="PERCENT",_0="PIPE",d0="PLUS",f0="POUND",g0="QUERY",zn="QUOTE",Wn="SEMI",ga="SLASH",qt="TILDE",h0="UNDERSCORE",kr="EMOJI",F0="SYM";var Ar=Object.freeze({__proto__:null,WORD:ba,UWORD:dn,LOCALHOST:Xt,TLD:fn,UTLD:gn,SCHEME:ki,SLASH_SCHEME:ct,NUM:Hn,WS:Er,NL:Pn,OPENBRACE:jt,CLOSEBRACE:Yt,OPENBRACKET:Zi,CLOSEBRACKET:Ii,OPENPAREN:Hi,CLOSEPAREN:Pi,OPENANGLEBRACKET:Gi,CLOSEANGLEBRACKET:Ui,FULLWIDTHLEFTPAREN:zi,FULLWIDTHRIGHTPAREN:Wi,LEFTCORNERBRACKET:$i,RIGHTCORNERBRACKET:Vi,LEFTWHITECORNERBRACKET:Qi,RIGHTWHITECORNERBRACKET:Ki,FULLWIDTHLESSTHAN:Ji,FULLWIDTHGREATERTHAN:Xi,AMPERSAND:e0,APOSTROPHE:a0,ASTERISK:t0,AT:Oa,BACKSLASH:i0,BACKTICK:n0,CARET:o0,COLON:Ma,COMMA:Gn,DOLLAR:s0,DOT:da,EQUALS:r0,EXCLAMATION:Un,HYPHEN:fa,PERCENT:l0,PIPE:_0,PLUS:d0,POUND:f0,QUERY:g0,QUOTE:zn,SEMI:Wn,SLASH:ga,TILDE:qt,UNDERSCORE:h0,EMOJI:kr,SYM:F0});const Ft=/[a-z]/,H0=new RegExp("\\p{L}","u"),P0=new RegExp("\\p{Emoji}","u"),G0=/\d/,xo=/\s/,Mo=`
`,lf="️",_f="‍";let hi=null,Fi=null;function df(e){e===void 0&&(e=[]);const a={};Ke.groups=a;const i=new Ke;hi==null&&(hi=jo(af)),Fi==null&&(Fi=jo(tf)),H(i,"'",a0),H(i,"{",jt),H(i,"}",Yt),H(i,"[",Zi),H(i,"]",Ii),H(i,"(",Hi),H(i,")",Pi),H(i,"<",Gi),H(i,">",Ui),H(i,"（",zi),H(i,"）",Wi),H(i,"「",$i),H(i,"」",Vi),H(i,"『",Qi),H(i,"』",Ki),H(i,"＜",Ji),H(i,"＞",Xi),H(i,"&",e0),H(i,"*",t0),H(i,"@",Oa),H(i,"`",n0),H(i,"^",o0),H(i,":",Ma),H(i,",",Gn),H(i,"$",s0),H(i,".",da),H(i,"=",r0),H(i,"!",Un),H(i,"-",fa),H(i,"%",l0),H(i,"|",_0),H(i,"+",d0),H(i,"#",f0),H(i,"?",g0),H(i,'"',zn),H(i,"/",ga),H(i,";",Wn),H(i,"~",qt),H(i,"_",h0),H(i,"\\",i0);const n=ea(i,G0,Hn,{[sn]:!0});ea(n,G0,n);const o=ea(i,Ft,ba,{[rn]:!0});ea(o,Ft,o);const s=ea(i,H0,dn,{[ln]:!0});ea(s,Ft),ea(s,H0,s);const r=ea(i,xo,Er,{[Oo]:!0});H(i,Mo,Pn,{[Oo]:!0}),H(r,Mo),ea(r,xo,r);const _=ea(i,P0,kr,{[yr]:!0});ea(_,P0,_),H(_,lf,_);const l=H(_,_f);ea(l,P0,_);const g=[[Ft,o]],d=[[Ft,null],[H0,s]];for(let f=0;f<hi.length;f++)Ca(i,hi[f],fn,ba,g);for(let f=0;f<Fi.length;f++)Ca(i,Fi[f],gn,dn,d);at(fn,{tld:!0,ascii:!0},a),at(gn,{utld:!0,alpha:!0},a),Ca(i,"file",ki,ba,g),Ca(i,"mailto",ki,ba,g),Ca(i,"http",ct,ba,g),Ca(i,"https",ct,ba,g),Ca(i,"ftp",ct,ba,g),Ca(i,"ftps",ct,ba,g),at(ki,{scheme:!0,ascii:!0},a),at(ct,{slashscheme:!0,ascii:!0},a),e=e.sort((f,h)=>f[0]>h[0]?1:-1);for(let f=0;f<e.length;f++){const h=e[f][0],F=e[f][1]?{[nf]:!0}:{[of]:!0};h.indexOf("-")>=0?F[_n]=!0:Ft.test(h)?G0.test(h)?F[Ei]=!0:F[rn]=!0:F[sn]=!0,Bo(i,h,h,F)}return Bo(i,"localhost",Xt,{ascii:!0}),i.jd=new Ke(F0),{start:i,tokens:kt({groups:a},Ar)}}function ff(e,a){const i=gf(a.replace(/[A-Z]/g,_=>_.toLowerCase())),n=i.length,o=[];let s=0,r=0;for(;r<n;){let _=e,l=null,g=0,d=null,f=-1,h=-1;for(;r<n&&(l=_.go(i[r]));)_=l,_.accepts()?(f=0,h=0,d=_):f>=0&&(f+=i[r].length,h++),g+=i[r].length,s+=i[r].length,r++;s-=f,r-=h,g-=f,o.push({t:d.t,v:a.slice(s-g,s),s:s-g,e:s})}return o}function gf(e){const a=[],i=e.length;let n=0;for(;n<i;){let o=e.charCodeAt(n),s,r=o<55296||o>56319||n+1===i||(s=e.charCodeAt(n+1))<56320||s>57343?e[n]:e.slice(n,n+2);a.push(r),n+=r.length}return a}function Ca(e,a,i,n,o){let s;const r=a.length;for(let _=0;_<r-1;_++){const l=a[_];e.j[l]?s=e.j[l]:(s=new Ke(n),s.jr=o.slice(),e.j[l]=s),e=s}return s=new Ke(i),s.jr=o.slice(),e.j[a[r-1]]=s,s}function jo(e){const a=[],i=[];let n=0,o="0123456789";for(;n<e.length;){let s=0;for(;o.indexOf(e[n+s])>=0;)s++;if(s>0){a.push(i.join(""));for(let r=parseInt(e.substring(n,n+s),10);r>0;r--)i.pop();n+=s}else i.push(e[n]),n++}return a}const ei={defaultProtocol:"http",events:null,format:Yo,formatHref:Yo,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function $n(e,a){a===void 0&&(a=null);let i=kt({},ei);e&&(i=kt(i,e instanceof $n?e.o:e));const n=i.ignoreTags,o=[];for(let s=0;s<n.length;s++)o.push(n[s].toUpperCase());this.o=i,a&&(this.defaultRender=a),this.ignoreTags=o}$n.prototype={o:ei,ignoreTags:[],defaultRender(e){return e},check(e){return this.get("validate",e.toString(),e)},get(e,a,i){const n=a!=null;let o=this.o[e];return o&&(typeof o=="object"?(o=i.t in o?o[i.t]:ei[e],typeof o=="function"&&n&&(o=o(a,i))):typeof o=="function"&&n&&(o=o(a,i.t,i)),o)},getObj(e,a,i){let n=this.o[e];return typeof n=="function"&&a!=null&&(n=n(a,i.t,i)),n},render(e){const a=e.render(this);return(this.get("render",null,e)||this.defaultRender)(a,e.t,e)}};function Yo(e){return e}function wr(e,a){this.t="token",this.v=e,this.tk=a}wr.prototype={isLink:!1,toString(){return this.v},toHref(e){return this.toString()},toFormattedString(e){const a=this.toString(),i=e.get("truncate",a,this),n=e.get("format",a,this);return i&&n.length>i?n.substring(0,i)+"…":n},toFormattedHref(e){return e.get("formatHref",this.toHref(e.get("defaultProtocol")),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(e){return e===void 0&&(e=ei.defaultProtocol),{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(e){return{type:this.t,value:this.toFormattedString(e),isLink:this.isLink,href:this.toFormattedHref(e),start:this.startIndex(),end:this.endIndex()}},validate(e){return e.get("validate",this.toString(),this)},render(e){const a=this,i=this.toHref(e.get("defaultProtocol")),n=e.get("formatHref",i,this),o=e.get("tagName",i,a),s=this.toFormattedString(e),r={},_=e.get("className",i,a),l=e.get("target",i,a),g=e.get("rel",i,a),d=e.getObj("attributes",i,a),f=e.getObj("events",i,a);return r.href=n,_&&(r.class=_),l&&(r.target=l),g&&(r.rel=g),d&&kt(r,d),{tagName:o,attributes:r,content:s,eventListeners:f}}};function v0(e,a){class i extends wr{constructor(o,s){super(o,s),this.t=e}}for(const n in a)i.prototype[n]=a[n];return i.t=e,i}const qo=v0("email",{isLink:!0,toHref(){return"mailto:"+this.toString()}}),Lo=v0("text"),hf=v0("nl"),ui=v0("url",{isLink:!0,toHref(e){return e===void 0&&(e=ei.defaultProtocol),this.hasProtocol()?this.v:`${e}://${this.v}`},hasProtocol(){const e=this.tk;return e.length>=2&&e[0].t!==Xt&&e[1].t===Ma}}),aa=e=>new Ke(e);function Ff(e){let{groups:a}=e;const i=a.domain.concat([e0,t0,Oa,i0,n0,o0,s0,r0,fa,Hn,l0,_0,d0,f0,ga,F0,qt,h0]),n=[a0,Ma,Gn,da,Un,g0,zn,Wn,Gi,Ui,jt,Yt,Ii,Zi,Hi,Pi,zi,Wi,$i,Vi,Qi,Ki,Ji,Xi],o=[e0,a0,t0,i0,n0,o0,s0,r0,fa,jt,Yt,l0,_0,d0,f0,g0,ga,F0,qt,h0],s=aa(),r=H(s,qt);oe(r,o,r),oe(r,a.domain,r);const _=aa(),l=aa(),g=aa();oe(s,a.domain,_),oe(s,a.scheme,l),oe(s,a.slashscheme,g),oe(_,o,r),oe(_,a.domain,_);const d=H(_,Oa);H(r,Oa,d),H(l,Oa,d),H(g,Oa,d);const f=H(r,da);oe(f,o,r),oe(f,a.domain,r);const h=aa();oe(d,a.domain,h),oe(h,a.domain,h);const F=H(h,da);oe(F,a.domain,h);const m=aa(qo);oe(F,a.tld,m),oe(F,a.utld,m),H(d,Xt,m);const b=H(h,fa);oe(b,a.domain,h),oe(m,a.domain,h),H(m,da,F),H(m,fa,b);const E=H(m,Ma);oe(E,a.numeric,qo);const A=H(_,fa),w=H(_,da);oe(A,a.domain,_),oe(w,o,r),oe(w,a.domain,_);const R=aa(ui);oe(w,a.tld,R),oe(w,a.utld,R),oe(R,a.domain,_),oe(R,o,r),H(R,da,w),H(R,fa,A),H(R,Oa,d);const Y=H(R,Ma),Z=aa(ui);oe(Y,a.numeric,Z);const N=aa(ui),I=aa();oe(N,i,N),oe(N,n,I),oe(I,i,N),oe(I,n,I),H(R,ga,N),H(Z,ga,N);const U=H(l,Ma),G=H(g,Ma),c=H(G,ga),v=H(c,ga);oe(l,a.domain,_),H(l,da,w),H(l,fa,A),oe(g,a.domain,_),H(g,da,w),H(g,fa,A),oe(U,a.domain,N),H(U,ga,N),oe(v,a.domain,N),oe(v,i,N),H(v,ga,N);const C=[[jt,Yt],[Zi,Ii],[Hi,Pi],[Gi,Ui],[zi,Wi],[$i,Vi],[Qi,Ki],[Ji,Xi]];for(let O=0;O<C.length;O++){const[W,q]=C[O],te=H(N,W);H(I,W,te),H(te,q,N);const X=aa(ui);oe(te,i,X);const ce=aa();oe(te,n),oe(X,i,X),oe(X,n,ce),oe(ce,i,X),oe(ce,n,ce),H(X,q,N),H(ce,q,N)}return H(s,Xt,R),H(s,Pn,hf),{start:s,tokens:Ar}}function uf(e,a,i){let n=i.length,o=0,s=[],r=[];for(;o<n;){let _=e,l=null,g=null,d=0,f=null,h=-1;for(;o<n&&!(l=_.go(i[o].t));)r.push(i[o++]);for(;o<n&&(g=l||_.go(i[o].t));)l=null,_=g,_.accepts()?(h=0,f=_):h>=0&&h++,o++,d++;if(h<0)o-=d,o<n&&(r.push(i[o]),o++);else{r.length>0&&(s.push(U0(Lo,a,r)),r=[]),o-=h,d-=h;const F=f.t,m=i.slice(o-d,o);s.push(U0(F,a,m))}}return r.length>0&&s.push(U0(Lo,a,r)),s}function U0(e,a,i){const n=i[0].s,o=i[i.length-1].e,s=a.slice(n,o);return new e(s,i)}const He={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function cf(){He.scanner=df(He.customSchemes);for(let e=0;e<He.tokenQueue.length;e++)He.tokenQueue[e][1]({scanner:He.scanner});He.parser=Ff(He.scanner.tokens);for(let e=0;e<He.pluginQueue.length;e++)He.pluginQueue[e][1]({scanner:He.scanner,parser:He.parser});He.initialized=!0}function mf(e){return He.initialized||cf(),uf(He.parser.start,e,ff(He.scanner.start,e))}function Sr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pf(e){return e.replace(/"/g,"&quot;")}function bf(e){const a=[];for(const i in e){let n=e[i]+"";a.push(`${i}="${pf(n)}"`)}return a.join(" ")}function Tf(e){let{tagName:a,attributes:i,content:n}=e;return`<${a} ${bf(i)}>${Sr(n)}</${a}>`}function Df(e,a){a===void 0&&(a={}),a=new $n(a,Tf);const i=mf(e),n=[];for(let o=0;o<i.length;o++){const s=i[o];s.t==="nl"&&a.get("nl2br")?n.push(`<br>
`):!s.isLink||!a.check(s)?n.push(Sr(s.toString())):n.push(a.render(s))}return n.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(e){return Df(this,e)}});var vr={exports:{}};(function(e){(function(a){if(typeof i!="function"){var i=function(m){return m};i.nonNative=!0}const n=i("plaintext"),o=i("html"),s=i("comment"),r=/<(\w*)>/g,_=/<\/?([^\s\/>]+)/;function l(m,b,E){m=m||"",b=b||[],E=E||"";let A=d(b,E);return f(m,A)}function g(m,b){m=m||[],b=b||"";let E=d(m,b);return function(A){return f(A||"",E)}}l.init_streaming_mode=g;function d(m,b){return m=h(m),{allowable_tags:m,tag_replacement:b,state:n,tag_buffer:"",depth:0,in_quote_char:""}}function f(m,b){if(typeof m!="string")throw new TypeError("'html' parameter must be a string");let E=b.allowable_tags,A=b.tag_replacement,w=b.state,R=b.tag_buffer,Y=b.depth,Z=b.in_quote_char,N="";for(let I=0,U=m.length;I<U;I++){let G=m[I];if(w===n)switch(G){case"<":w=o,R+=G;break;default:N+=G;break}else if(w===o)switch(G){case"<":if(Z)break;Y++;break;case">":if(Z)break;if(Y){Y--;break}Z="",w=n,R+=">",E.has(F(R))?N+=R:N+=A,R="";break;case'"':case"'":G===Z?Z="":Z=Z||G,R+=G;break;case"-":R==="<!-"&&(w=s),R+=G;break;case" ":case`
`:if(R==="<"){w=n,N+="< ",R="";break}R+=G;break;default:R+=G;break}else if(w===s)switch(G){case">":R.slice(-2)=="--"&&(w=n),R="";break;default:R+=G;break}}return b.state=w,b.tag_buffer=R,b.depth=Y,b.in_quote_char=Z,N}function h(m){let b=new Set;if(typeof m=="string"){let E;for(;E=r.exec(m);)b.add(E[1])}else!i.nonNative&&typeof m[i.iterator]=="function"?b=new Set(m):typeof m.forEach=="function"&&m.forEach(b.add,b);return b}function F(m){let b=_.exec(m);return b?b[1].toLowerCase():null}e.exports?e.exports=l:a.striptags=l})(Ba)})(vr);var yf=vr.exports;const U2=Ms(yf),Vn=(e,a)=>{const i=(d,f)=>d.startsWith(f)?d.slice(f.length):d,n=(d,...f)=>f.reduce((h,F)=>i(h,F),d);if(!e)return null;const o=/^https?:\/\//.test(a),s=/^[a-z][a-z0-9+.-]*:.+/.test(a);if(!o&&s||o&&!a.startsWith(go())||!o&&!a.startsWith("/"))return null;const r=o?n(a,go(),"/index.php"):a,_=n(e.history.base,Yl(),"/index.php"),l=n(r,_)||"/",g=e.resolve(l).route;return g.matched.length?g.fullPath:null};ua.util.warn,ua.util.warn;function Rr(e){return Hl()?(Pl(e),!0):!1}function Lt(e){return typeof e=="function"?e():ql(e)}const Cr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ef=Object.prototype.toString,kf=e=>Ef.call(e)==="[object Object]",Zt=()=>{},hn=Af();function Af(){var e,a;return Cr&&((e=window?.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((a=window?.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}const Zo={mounted:"inserted",updated:"componentUpdated",unmounted:"unbind"};function wf(...e){if(e.length!==1)return Ll(...e);const a=e[0];return typeof a=="function"?Zl(Il(()=>({get:a,set:Zt}))):Aa(a)}function Bt(e){var a;const i=Lt(e);return(a=i?.$el)!=null?a:i}const Nr=Cr?window:void 0;function Ai(...e){let a,i,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,n,o]=e,a=Nr):[a,i,n,o]=e,!a)return Zt;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const s=[],r=()=>{s.forEach(d=>d()),s.length=0},_=(d,f,h,F)=>(d.addEventListener(f,h,F),()=>d.removeEventListener(f,h,F)),l=kn(()=>[Bt(a),Lt(o)],([d,f])=>{if(r(),!d)return;const h=kf(f)?{...f}:f;s.push(...i.flatMap(F=>n.map(m=>_(d,F,m,h))))},{immediate:!0,flush:"post"}),g=()=>{l(),r()};return Rr(g),g}let Io=!1;function Ho(e,a,i={}){const{window:n=Nr,ignore:o=[],capture:s=!0,detectIframe:r=!1}=i;if(!n)return Zt;hn&&!Io&&(Io=!0,Array.from(n.document.body.children).forEach(d=>d.addEventListener("click",Zt)),n.document.documentElement.addEventListener("click",Zt));let _=!0;const l=d=>o.some(f=>{if(typeof f=="string")return Array.from(n.document.querySelectorAll(f)).some(h=>h===d.target||d.composedPath().includes(h));{const h=Bt(f);return h&&(d.target===h||d.composedPath().includes(h))}}),g=[Ai(n,"click",d=>{const f=Bt(e);if(!(!f||f===d.target||d.composedPath().includes(f))){if(d.detail===0&&(_=!l(d)),!_){_=!0;return}a(d)}},{passive:!0,capture:s}),Ai(n,"pointerdown",d=>{const f=Bt(e);_=!l(d)&&!!(f&&!d.composedPath().includes(f))},{passive:!0}),r&&Ai(n,"blur",d=>{setTimeout(()=>{var f;const h=Bt(e);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!h?.contains(n.document.activeElement)&&a(d)},0)})].filter(Boolean);return()=>g.forEach(d=>d())}const Sf={[Zo.mounted](e,a){const i=!a.modifiers.bubble;if(typeof a.value=="function")e.__onClickOutside_stop=Ho(e,a.value,{capture:i});else{const[n,o]=a.value;e.__onClickOutside_stop=Ho(e,n,Object.assign({capture:i},o))}},[Zo.unmounted](e){e.__onClickOutside_stop()}};function z0(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function Or(e){const a=window.getComputedStyle(e);if(a.overflowX==="scroll"||a.overflowY==="scroll"||a.overflowX==="auto"&&e.clientWidth<e.scrollWidth||a.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const i=e.parentNode;return!i||i.tagName==="BODY"?!1:Or(i)}}function vf(e){const a=e||window.event,i=a.target;return Or(i)?!1:a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)}const W0=new WeakMap;function Rf(e,a=!1){const i=Aa(a);let n=null,o="";kn(wf(e),_=>{const l=z0(Lt(_));if(l){const g=l;if(W0.get(g)||W0.set(g,g.style.overflow),g.style.overflow!=="hidden"&&(o=g.style.overflow),g.style.overflow==="hidden")return i.value=!0;if(i.value)return g.style.overflow="hidden"}},{immediate:!0});const s=()=>{const _=z0(Lt(e));!_||i.value||(hn&&(n=Ai(_,"touchmove",l=>{vf(l)},{passive:!1})),_.style.overflow="hidden",i.value=!0)},r=()=>{const _=z0(Lt(e));!_||!i.value||(hn&&n?.(),_.style.overflow=o,W0.delete(_),i.value=!1)};return Rr(r),Ta({get(){return i.value},set(_){_?s():r()}})}function Cf(){let e=!1;const a=Aa(!1);return(i,n)=>{if(a.value=n.value,e)return;e=!0;const o=Rf(i,n.value);kn(a,s=>o.value=s)}}Cf();const Br={data(){return{hasStatus:!1,userStatus:{status:null,message:null,icon:null}}},methods:{async fetchUserStatus(e){if(!e)return;const a=Ws();if(!(!Object.prototype.hasOwnProperty.call(a,"user_status")||!a.user_status.enabled)&&Bi())try{const{data:i}=await ma.get(Pa("apps/user_status/api/v1/statuses/{userId}",{userId:e})),{status:n,message:o,icon:s}=i.ocs.data;this.userStatus.status=n,this.userStatus.message=o||"",this.userStatus.icon=s||"",this.hasStatus=!0}catch(i){if(i.response.status===404&&i.response.data.ocs?.data?.length===0)return;console.error(i)}}}};ie(Gl);const xr=An("nextcloud").persist().build();function Nf(e){const a=xr.getItem("user-has-avatar."+e);return typeof a=="string"?!!a:null}function Po(e,a){e&&xr.setItem("user-has-avatar."+e,a)}const Of={name:"NcAvatar",directives:{ClickOutside:Sf},components:{DotsHorizontal:wn,NcActions:Ys,NcButton:$a,NcIconSvgWrapper:Sn,NcLoadingIcon:E0,NcUserStatusIcon:pr},mixins:[Br],props:{url:{type:String,default:void 0},iconClass:{type:String,default:void 0},user:{type:String,default:void 0},showUserStatus:{type:Boolean,default:!0},showUserStatusCompact:{type:Boolean,default:!0},preloadedUserStatus:{type:Object,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},menuContainer:{type:[String,Object,Element,Boolean],default:"body"}},data(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuLoading:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{avatarAriaLabel(){if(this.hasMenu)return this.canDisplayUserStatus||this.showUserStatusIconOnAvatar?j("Avatar of {displayName}, {status}",{displayName:this.displayName??this.user,status:mr(this.userStatus.status)}):j("Avatar of {displayName}",{displayName:this.displayName??this.user})},canDisplayUserStatus(){return this.showUserStatus&&this.hasStatus&&["online","away","busy","dnd"].includes(this.userStatus.status)},showUserStatusIconOnAvatar(){return this.showUserStatus&&this.showUserStatusCompact&&this.hasStatus&&this.userStatus.status!=="dnd"&&this.userStatus.icon},userIdentifier(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined(){return typeof this.user<"u"},isDisplayNameDefined(){return typeof this.displayName<"u"},isUrlDefined(){return typeof this.url<"u"},hasMenu(){return this.disableMenu?!1:this.isMenuLoaded?this.menu.length>0:!(this.user===Bi()?.uid||this.userDoesNotExist||this.url)},showInitials(){return this.allowPlaceholder&&this.userDoesNotExist&&!(this.iconClass||this.$slots.icon)},avatarStyle(){return{"--size":this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(this.size*.45)+"px"}},initialsWrapperStyle(){const{r:e,g:a,b:i}=No(this.userIdentifier);return{backgroundColor:`rgba(${e}, ${a}, ${i}, 0.1)`}},initialsStyle(){const{r:e,g:a,b:i}=No(this.userIdentifier);return{color:`rgb(${e}, ${a}, ${i})`}},tooltip(){return this.disableTooltip?!1:this.tooltipMessage?this.tooltipMessage:this.displayName},initials(){let e="?";if(this.showInitials){const a=this.userIdentifier.trim();if(a==="")return e;const i=a.match(/[\p{L}\p{N}\s]/gu);if(i==null)return e;const n=i.join(""),o=n.lastIndexOf(" ");e=String.fromCodePoint(n.codePointAt(0)),o!==-1&&(e=e.concat(String.fromCodePoint(n.codePointAt(o+1))))}return e.toLocaleUpperCase()},menu(){const e=this.contactsMenuActions.map(i=>{const n=Vn(this.$router,i.hyperlink);return{ncActionComponent:n?Md:Z1,ncActionComponentProps:n?{to:n,icon:i.icon}:{href:i.hyperlink,icon:i.icon},text:i.title}});function a(i){const n=document.createTextNode(i),o=document.createElement("p");return o.appendChild(n),o.innerHTML}if(this.showUserStatus&&(this.userStatus.icon||this.userStatus.message)){const i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<text x="50%" y="50%" text-anchor="middle" style="dominant-baseline: central; font-size: 85%">${a(this.userStatus.icon)}</text>
				</svg>`;return[{ncActionComponent:Zd,ncActionComponentProps:{},iconSvg:this.userStatus.icon?i:void 0,text:`${this.userStatus.message}`}].concat(e)}return e}},watch:{url(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted(){this.loadAvatarUrl(),j0("settings:avatar:updated",this.loadAvatarUrl),j0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&(this.preloadedUserStatus?(this.userStatus.status=this.preloadedUserStatus.status||"",this.userStatus.message=this.preloadedUserStatus.message||"",this.userStatus.icon=this.preloadedUserStatus.icon||"",this.hasStatus=this.preloadedUserStatus.status!==null):this.fetchUserStatus(this.user),j0("user_status:status.updated",this.handleUserStatusUpdated))},beforeDestroy(){Y0("settings:avatar:updated",this.loadAvatarUrl),Y0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&Y0("user_status:status.updated",this.handleUserStatusUpdated)},methods:{t:j,handleUserStatusUpdated(e){this.user===e.userId&&(this.userStatus={status:e.status,icon:e.icon,message:e.message})},async toggleMenu(e){e.type==="keydown"&&e.key!=="Enter"||(this.contactsMenuOpenState||await this.fetchContactsMenu(),this.contactsMenuOpenState=!this.contactsMenuOpenState)},closeMenu(){this.contactsMenuOpenState=!1},async fetchContactsMenu(){this.contactsMenuLoading=!0;try{const e=encodeURIComponent(this.user),{data:a}=await ma.post(js("contactsmenu/findOne"),`shareType=0&shareWith=${e}`);this.contactsMenuActions=a.topAction?[a.topAction].concat(a.actions):a.actions}catch{this.contactsMenuOpenState=!1}this.contactsMenuLoading=!1,this.isMenuLoaded=!0},loadAvatarUrl(){if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser)){this.isAvatarLoaded=!0,this.userDoesNotExist=!0;return}if(this.isUrlDefined){this.updateImageIfValid(this.url);return}if(this.size<=64){const e=this.avatarUrlGenerator(this.user,64),a=[e+" 1x",this.avatarUrlGenerator(this.user,512)+" 8x"].join(", ");this.updateImageIfValid(e,a)}else{const e=this.avatarUrlGenerator(this.user,512);this.updateImageIfValid(e)}},avatarUrlGenerator(e,a){let i=In(e,a,this.isGuest);return e===Bi()?.uid&&typeof oc_userconfig<"u"&&(i+="?v="+oc_userconfig.avatar.version),i},updateImageIfValid(e,a=null){const i=Nf(this.user);if(this.isUserDefined&&typeof i=="boolean"){this.isAvatarLoaded=!0,this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),i===!1&&(this.userDoesNotExist=!0);return}const n=new Image;n.onload=()=>{this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),this.isAvatarLoaded=!0,Po(this.user,!0)},n.onerror=()=>{console.debug("Invalid avatar url",e),this.avatarUrlLoaded=null,this.avatarSrcSetLoaded=null,this.userDoesNotExist=!0,this.isAvatarLoaded=!1,Po(this.user,!1)},a&&(n.srcset=a),n.src=e}}};var Bf=function(){var e=this,a=e._self._c;return a("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeMenu,expression:"closeMenu"}],ref:"main",staticClass:"avatardiv popovermenu-wrapper",class:{"avatardiv--unknown":e.userDoesNotExist,"avatardiv--with-menu":e.hasMenu,"avatardiv--with-menu-loading":e.contactsMenuLoading},style:e.avatarStyle},[e._t("icon",function(){return[e.iconClass?a("span",{staticClass:"avatar-class-icon",class:e.iconClass}):e.isAvatarLoaded&&!e.userDoesNotExist?a("img",{attrs:{src:e.avatarUrlLoaded,srcset:e.avatarSrcSetLoaded,alt:""}}):e._e()]}),e.hasMenu&&e.menu.length===0?a("NcButton",{staticClass:"action-item action-item__menutoggle",attrs:{type:"tertiary-no-background","aria-label":e.avatarAriaLabel,title:e.tooltip},on:{click:e.toggleMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[e.contactsMenuLoading?a("NcLoadingIcon"):a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,2617833509)}):e.hasMenu?a("NcActions",{attrs:{"force-menu":"","manual-open":"",type:"tertiary-no-background",container:e.menuContainer,open:e.contactsMenuOpenState,"aria-label":e.avatarAriaLabel,title:e.tooltip},on:{"update:open":function(i){e.contactsMenuOpenState=i},click:e.toggleMenu},scopedSlots:e._u([e.contactsMenuLoading?{key:"icon",fn:function(){return[a("NcLoadingIcon")]},proxy:!0}:null],null,!0)},e._l(e.menu,function(i,n){return a(i.ncActionComponent,e._b({key:n,tag:"component",scopedSlots:e._u([i.iconSvg?{key:"icon",fn:function(){return[a("NcIconSvgWrapper",{attrs:{svg:i.iconSvg}})]},proxy:!0}:null],null,!0)},"component",i.ncActionComponentProps,!1),[e._v(" "+e._s(i.text)+" ")])}),1):e._e(),e.showUserStatusIconOnAvatar?a("span",{staticClass:"avatardiv__user-status avatardiv__user-status--icon"},[e._v(" "+e._s(e.userStatus.icon)+" ")]):e.canDisplayUserStatus?a("NcUserStatusIcon",{staticClass:"avatardiv__user-status",attrs:{status:e.userStatus.status,"aria-hidden":String(e.hasMenu)}}):e._e(),e.showInitials?a("span",{staticClass:"avatardiv__initials-wrapper",style:e.initialsWrapperStyle},[a("span",{staticClass:"avatardiv__initials",style:e.initialsStyle},[e._v(" "+e._s(e.initials)+" ")])]):e._e()],2)},xf=[],Mf=ae(Of,Bf,xf,!1,null,"e7e86f59");const Mr=Mf.exports,jf=8,Go=32,Yf={name:"NcListItemIcon",components:{NcAvatar:Mr,NcHighlight:S0,NcIconSvgWrapper:Sn},mixins:[Br],props:{name:{type:String,required:!0},subname:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:String,default:""},iconName:{type:String,default:""},search:{type:String,default:""},avatarSize:{type:Number,default:Go},noMargin:{type:Boolean,default:!1},displayName:{type:String,default:null},isNoUser:{type:Boolean,default:!1},id:{type:String,default:null}},setup(){return{margin:jf,defaultSize:Go}},computed:{hasIcon(){return this.icon!==""},hasIconSvg(){return this.iconSvg!==""},isValidSubname(){return this.subname?.trim?.()!==""},isSizeBigEnough(){return this.avatarSize>=26},cssVars(){const e=this.noMargin?0:this.margin;return{"--height":this.avatarSize+2*e+"px","--margin":this.margin+"px"}},searchParts(){const e=/^([^<]*)<([^>]+)>?$/,a=this.search.match(e);return this.isNoUser||!a?[this.search,this.search]:[a[1].trim(),a[2]]}},beforeMount(){!this.isNoUser&&!this.subname&&this.fetchUserStatus(this.user)}};var qf=function(){var e=this,a=e._self._c;return a("span",e._g({staticClass:"option",class:{"option--compact":e.avatarSize<e.defaultSize},style:e.cssVars,attrs:{id:e.id}},e.$listeners),[a("NcAvatar",e._b({staticClass:"option__avatar",attrs:{"disable-menu":!0,"disable-tooltip":!0,"display-name":e.displayName||e.name,"is-no-user":e.isNoUser,size:e.avatarSize}},"NcAvatar",e.$attrs,!1)),a("div",{staticClass:"option__details"},[a("NcHighlight",{staticClass:"option__lineone",attrs:{text:e.name,search:e.searchParts[0]}}),e.isValidSubname&&e.isSizeBigEnough?a("NcHighlight",{staticClass:"option__linetwo",attrs:{text:e.subname,search:e.searchParts[1]}}):e.hasStatus?a("span",[a("span",[e._v(e._s(e.userStatus.icon))]),a("span",[e._v(e._s(e.userStatus.message))])]):e._e()],1),e._t("default",function(){return[e.hasIconSvg?a("NcIconSvgWrapper",{staticClass:"option__icon",attrs:{svg:e.iconSvg,name:e.iconName}}):e.hasIcon?a("span",{staticClass:"icon option__icon",class:e.icon,attrs:{"aria-label":e.iconName}}):e._e()]})],2)},Lf=[],Zf=ae(Yf,qf,Lf,!1,null,"a0f4d73a");const If=Zf.exports;ie(Ul);const Hf={name:"NcSelect",components:{ChevronDown:ur,NcEllipsisedOption:Cd,NcListItemIcon:If,NcLoadingIcon:E0,VueSelect:Ja.VueSelect},model:{prop:"modelValue",event:"update:modelValue"},props:{...Ja.VueSelect.props,...Ja.VueSelect.mixins.reduce((e,a)=>({...e,...a.props}),{}),ariaLabelClearSelected:{type:String,default:j("Clear selected")},ariaLabelCombobox:{type:String,default:null},ariaLabelListbox:{type:String,default:j("Options")},ariaLabelDeselectOption:{type:Function,default:e=>j("Deselect {option}",{option:e})},appendToBody:{type:Boolean,default:!0},calculatePosition:{type:Function,default:null},closeOnSelect:{type:Boolean,default:!0},components:{type:Object,default:()=>({Deselect:{render:e=>e(vn,{props:{size:20,fillColor:"var(--vs-controls-color)"},style:{cursor:"pointer"}})}})},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},dropdownShouldOpen:{type:Function,default:({noDrop:e,open:a})=>e?!1:a},filterBy:{type:Function,default:null},inputClass:{type:[String,Object],default:null},inputId:{type:String,default:()=>`select-input-${rt()}`},inputLabel:{type:String,default:null},labelOutside:{type:Boolean,default:!1},keyboardFocusBorder:{type:Boolean,default:!0},label:{type:String,default:null},loading:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},mapKeydown:{type:Function,default(e,a){return{...e,27:i=>{a.open&&i.stopPropagation(),e[27](i)}}}},uid:{type:String,default:()=>rt()},placement:{type:String,default:"bottom"},resetFocusOnOptionsChange:{type:Boolean,default:!0},userSelect:{type:Boolean,default:!1},value:{type:[String,Number,Object,Array],default:void 0},modelValue:{type:[String,Number,Object,Array],default:null},required:{type:Boolean,default:!1}," ":{}},emits:[" ","input","update:modelValue","update:model-value"],setup(){const e=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-clickable-area")),a=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-grid-baseline")),i=e-2*a,n=Va("value","input");return{avatarSize:i,model:n}},data(){return{search:""}},computed:{inputRequired(){return this.required?this.model===null||Array.isArray(this.model)&&this.model.length===0:null},localCalculatePosition(){return this.calculatePosition!==null?this.calculatePosition:(e,a,{width:i})=>{e.style.width=i;const n={name:"addClass",fn(r){return e.classList.add("vs__dropdown-menu--floating"),{}}},o={name:"togglePlacementClass",fn({placement:r}){return a.$el.classList.toggle("select--drop-up",r==="top"),e.classList.toggle("vs__dropdown-menu--floating-placement-top",r==="top"),{}}},s=()=>{md(a.$refs.toggle,e,{placement:this.placement,middleware:[z_(-1),n,o,ud(),Fd({limiter:cd()})]}).then(({x:r,y:_})=>{Object.assign(e.style,{left:`${r}px`,top:`${_}px`,width:`${a.$refs.toggle.getBoundingClientRect().width}px`})})};return hd(a.$refs.toggle,e,s)}},localFilterBy(){const e=/[^<]*<([^>]+)/;return this.filterBy!==null?this.filterBy:this.userSelect?(a,i,n)=>{const o=n.match(e);return o&&a.subname?.toLocaleLowerCase?.()?.indexOf(o[1].toLocaleLowerCase())>-1||`${i} ${a.subname}`.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}:Ja.VueSelect.props.filterBy.default},localLabel(){return this.label!==null?this.label:this.userSelect?"displayName":Ja.VueSelect.props.label.default},propsToForward(){const e=[...Object.keys(Ja.VueSelect.props),...Ja.VueSelect.mixins.flatMap(a=>Object.keys(a.props??{}))];return{...Object.fromEntries(Object.entries(this.$props).filter(([a,i])=>e.includes(a))),value:this.model,calculatePosition:this.localCalculatePosition,filterBy:this.localFilterBy,label:this.localLabel}},listenersToForward(){return{...this.$listeners,input:e=>{this.model=e}}}},mounted(){!this.labelOutside&&!this.inputLabel&&!this.ariaLabelCombobox&&ua.util.warn("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`."),this.inputLabel&&this.ariaLabelCombobox&&ua.util.warn("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.")},methods:{t:j}};var Pf=function(){var e=this,a=e._self._c;return a("VueSelect",e._g(e._b({staticClass:"select",class:{"select--no-wrap":e.noWrap,"user-select":e.userSelect},on:{search:i=>e.search=i},scopedSlots:e._u([!e.labelOutside&&e.inputLabel?{key:"header",fn:function(){return[a("label",{staticClass:"select__label",attrs:{for:e.inputId}},[e._v(" "+e._s(e.inputLabel)+" ")])]},proxy:!0}:null,{key:"search",fn:function({attributes:i,events:n}){return[a("input",e._g(e._b({class:["vs__search",e.inputClass],attrs:{required:e.inputRequired,dir:"auto"}},"input",i,!1),n))]}},{key:"open-indicator",fn:function({attributes:i}){return[a("ChevronDown",e._b({style:{cursor:e.disabled?null:"pointer"},attrs:{"fill-color":"var(--vs-controls-color)",size:26}},"ChevronDown",i,!1))]}},{key:"option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":32,name:i[e.localLabel],search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"selected-option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":e.avatarSize,name:i[e.localLabel],"no-margin":"",search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"spinner",fn:function(i){return[i.loading?a("NcLoadingIcon"):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.t("No results"))+" ")]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"VueSelect",e.propsToForward,!1),e.listenersToForward))},Gf=[],Uf=ae(Hf,Pf,Gf,!1,null,null);const R0=Uf.exports;ie(zl);function zf(e=[],a=[]){const i={},n=[];for(const o of e){const s=o.split("/");let[r,_]=[s.shift(),s.join("/")];_||(_=r,r=j("Global")),i[r]=i[r]||{continent:r,regions:[]},i[r].regions.push({label:jr(_),cities:[],timezoneId:o})}for(const o of a){const{continent:s,label:r,timezoneId:_}=o;i[s]=i[s]||{continent:s,regions:[]},i[s].regions.push({label:r,cities:[],timezoneId:_})}for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&(i[o].regions.sort((s,r)=>s.label<r.label?-1:1),n.push(i[o]));return n.sort((o,s)=>o.continent<s.continent?-1:1),n}function jr(e){return e.split("_").join(" ").replace("St ","St. ").split("/").join(" - ")}const Uo=x_();let zo=!1;function Wf(){return zo||(Uo.registerDefaultTimezones(),zo=!0),Uo}ie(Wl);const $f={name:"NcTimezonePicker",components:{NcSelect:R0},model:{prop:"modelValue",event:"update:modelValue"},props:{additionalTimezones:{type:Array,default:()=>[]},value:{type:String,default:void 0},modelValue:{type:String,default:"floating"},uid:{type:[String,Number],default:()=>`tz-${rt(5)}`}},emits:["input","update:modelValue","update:model-value"],setup(){return{model:Va("value","input")}},computed:{placeholder(){return j("Type to search time zone")},selectedTimezone(){for(const e of this.additionalTimezones)if(e.timezoneId===this.model)return e;return{label:jr(this.model),timezoneId:this.model}},options(){const e=Wf(),a=zf(e.listAllTimezones(),this.additionalTimezones);let i=[];return Object.values(a).forEach(n=>{i=i.concat(n.regions)}),i}},methods:{t:j,change(e){e&&(this.model=e.timezoneId)},isSelectable(e){return!e.timezoneId.startsWith("tz-group__")},filterBy(e,a,i){const n=i.trim().split(" ");return e.timezoneId.startsWith("tz-group__")?e.regions.some(o=>this.matchTimezoneId(o.timezoneId,n)):this.matchTimezoneId(e.timezoneId,n)},matchTimezoneId(e,a){return a.every(i=>e.toLowerCase().includes(i.toLowerCase()))}}};var Vf=function(){var e=this,a=e._self._c;return a("NcSelect",{attrs:{"aria-label-combobox":e.t("Search for time zone"),clearable:!1,"filter-by":e.filterBy,multiple:!1,options:e.options,placeholder:e.placeholder,selectable:e.isSelectable,uid:e.uid,value:e.selectedTimezone,label:"label"},on:{"option:selected":e.change}})},Qf=[],Kf=ae($f,Vf,Qf,!1,null,null);const Jf=Kf.exports;function Xf(){return typeof window.firstDay>"u"?(console.warn("No firstDay found"),1):window.firstDay}function eg(){return typeof window.dayNames>"u"?(console.warn("No dayNames found"),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]):window.dayNames}function ag(){return typeof window.dayNamesShort>"u"?(console.warn("No dayNamesShort found"),["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."]):window.dayNamesShort}function tg(){return typeof window.dayNamesMin>"u"?(console.warn("No dayNamesMin found"),["Su","Mo","Tu","We","Th","Fr","Sa"]):window.dayNamesMin}function ig(){return typeof window.monthNames>"u"?(console.warn("No monthNames found"),["January","February","March","April","May","June","July","August","September","October","November","December"]):window.monthNames}function ng(){return typeof window.monthNamesShort>"u"?(console.warn("No monthNamesShort found"),["Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."]):window.monthNamesShort}function Yr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function C0(e){return Yr(e)?new Date(e.getTime()):e==null?new Date(NaN):new Date(e)}function og(e){return Yr(e)&&!isNaN(e.getTime())}function qr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var i=C0(e),n=i.getDay(),o=(n+7-a)%7;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Lr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o;if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7");for(var r=C0(e),_=r.getFullYear(),l=new Date(0),g=_+1;g>=_-1&&(l.setFullYear(g,0,s),l.setHours(0,0,0,0),l=qr(l,n),!(r.getTime()>=l.getTime()));g--);return l}function Qn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o,r=C0(e),_=qr(r,n),l=Lr(r,{firstDayOfWeek:n,firstWeekContainsDate:s}),g=_.getTime()-l.getTime();return Math.round(g/(7*24*3600*1e3))+1}var Zr={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},sg=/\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;function Qe(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i="".concat(Math.abs(e)),n=e<0?"-":"";i.length<a;)i="0".concat(i);return n+i}function Wo(e){return Math.round(e.getTimezoneOffset()/15)*15}function $o(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=e>0?"-":"+",n=Math.abs(e),o=Math.floor(n/60),s=n%60;return i+Qe(o,2)+a+Qe(s,2)}var Vo=function(e,a,i){var n=e<12?"AM":"PM";return i?n.toLocaleLowerCase():n},It={Y:function(e){var a=e.getFullYear();return a<=9999?"".concat(a):"+".concat(a)},YY:function(e){return Qe(e.getFullYear(),4).substr(2)},YYYY:function(e){return Qe(e.getFullYear(),4)},M:function(e){return e.getMonth()+1},MM:function(e){return Qe(e.getMonth()+1,2)},MMM:function(e,a){return a.monthsShort[e.getMonth()]},MMMM:function(e,a){return a.months[e.getMonth()]},D:function(e){return e.getDate()},DD:function(e){return Qe(e.getDate(),2)},H:function(e){return e.getHours()},HH:function(e){return Qe(e.getHours(),2)},h:function(e){var a=e.getHours();return a===0?12:a>12?a%12:a},hh:function(){var e=It.h.apply(It,arguments);return Qe(e,2)},m:function(e){return e.getMinutes()},mm:function(e){return Qe(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return Qe(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return Qe(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return Qe(e.getMilliseconds(),3)},d:function(e){return e.getDay()},dd:function(e,a){return a.weekdaysMin[e.getDay()]},ddd:function(e,a){return a.weekdaysShort[e.getDay()]},dddd:function(e,a){return a.weekdays[e.getDay()]},A:function(e,a){var i=a.meridiem||Vo;return i(e.getHours(),e.getMinutes(),!1)},a:function(e,a){var i=a.meridiem||Vo;return i(e.getHours(),e.getMinutes(),!0)},Z:function(e){return $o(Wo(e),":")},ZZ:function(e){return $o(Wo(e))},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()},w:function(e,a){return Qn(e,{firstDayOfWeek:a.firstDayOfWeek,firstWeekContainsDate:a.firstWeekContainsDate})},ww:function(e,a){return Qe(It.w(e,a),2)}};function N0(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a?String(a):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=C0(e);if(!og(o))return"Invalid Date";var s=i.locale||Zr;return n.replace(sg,function(r,_){return _||(typeof It[r]=="function"?"".concat(It[r](o,s)):r)})}function Qo(e){return _g(e)||lg(e)||rg()}function rg(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function lg(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function _g(e){if(Array.isArray(e)){for(var a=0,i=new Array(e.length);a<e.length;a++)i[a]=e[a];return i}}function Ko(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function dg(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ko(i,!0).forEach(function(n){ja(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ko(i).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function fg(e,a){return Fg(e)||hg(e,a)||gg()}function gg(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function hg(e,a){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]"){var i=[],n=!0,o=!1,s=void 0;try{for(var r=e[Symbol.iterator](),_;!(n=(_=r.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(l){o=!0,s=l}finally{try{!n&&r.return!=null&&r.return()}finally{if(o)throw s}}return i}}function Fg(e){if(Array.isArray(e))return e}function ja(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}var ug=/(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g,Ir=/\d/,Na=/\d\d/,cg=/\d{3}/,mg=/\d{4}/,mt=/\d\d?/,pg=/[+-]\d\d:?\d\d/,Hr=/[+-]?\d+/,bg=/[+-]?\d+(\.\d{1,3})?/,$0="year",ci="month",Jo="day",Xo="hour",es="minute",as="second",V0="millisecond",Pr={},he=function(e,a,i){var n=Array.isArray(e)?e:[e],o;typeof i=="string"?o=function(s){var r=parseInt(s,10);return ja({},i,r)}:o=i,n.forEach(function(s){Pr[s]=[a,o]})},Tg=function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},Ht=function(e){return function(a){var i=a[e];if(!Array.isArray(i))throw new Error("Locale[".concat(e,"] need an array"));return new RegExp(i.map(Tg).join("|"))}},Pt=function(e,a){return function(i,n){var o=n[e];if(!Array.isArray(o))throw new Error("Locale[".concat(e,"] need an array"));var s=o.indexOf(i);if(s<0)throw new Error("Invalid Word");return ja({},a,s)}};he("Y",Hr,$0),he("YY",Na,function(e){var a=new Date().getFullYear(),i=Math.floor(a/100),n=parseInt(e,10);return n=(n>68?i-1:i)*100+n,ja({},$0,n)}),he("YYYY",mg,$0),he("M",mt,function(e){return ja({},ci,parseInt(e,10)-1)}),he("MM",Na,function(e){return ja({},ci,parseInt(e,10)-1)}),he("MMM",Ht("monthsShort"),Pt("monthsShort",ci)),he("MMMM",Ht("months"),Pt("months",ci)),he("D",mt,Jo),he("DD",Na,Jo),he(["H","h"],mt,Xo),he(["HH","hh"],Na,Xo),he("m",mt,es),he("mm",Na,es),he("s",mt,as),he("ss",Na,as),he("S",Ir,function(e){return ja({},V0,parseInt(e,10)*100)}),he("SS",Na,function(e){return ja({},V0,parseInt(e,10)*10)}),he("SSS",cg,V0);function Dg(e){return e.meridiemParse||/[ap]\.?m?\.?/i}function yg(e){return"".concat(e).toLowerCase().charAt(0)==="p"}he(["A","a"],Dg,function(e,a){var i=typeof a.isPM=="function"?a.isPM(e):yg(e);return{isPM:i}});function Eg(e){var a=e.match(/([+-]|\d\d)/g)||["-","0","0"],i=fg(a,3),n=i[0],o=i[1],s=i[2],r=parseInt(o,10)*60+parseInt(s,10);return r===0?0:n==="+"?-r:+r}he(["Z","ZZ"],pg,function(e){return{offset:Eg(e)}}),he("x",Hr,function(e){return{date:new Date(parseInt(e,10))}}),he("X",bg,function(e){return{date:new Date(parseFloat(e)*1e3)}}),he("d",Ir,"weekday"),he("dd",Ht("weekdaysMin"),Pt("weekdaysMin","weekday")),he("ddd",Ht("weekdaysShort"),Pt("weekdaysShort","weekday")),he("dddd",Ht("weekdays"),Pt("weekdays","weekday")),he("w",mt,"week"),he("ww",Na,"week");function kg(e,a){if(e!==void 0&&a!==void 0){if(a){if(e<12)return e+12}else if(e===12)return 0}return e}function Ag(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Date,i=[0,0,1,0,0,0,0],n=[a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()],o=!0,s=0;s<7;s++)e[s]===void 0?i[s]=o?n[s]:i[s]:(i[s]=e[s],o=!1);return i}function wg(e,a,i,n,o,s,r){var _;return e<100&&e>=0?(_=new Date(e+400,a,i,n,o,s,r),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,a,i,n,o,s,r),_}function Sg(){for(var e,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];var o=i[0];return o<100&&o>=0?(i[0]+=400,e=new Date(Date.UTC.apply(Date,i)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(o)):e=new Date(Date.UTC.apply(Date,i)),e}function vg(e,a,i){var n=a.match(ug);if(!n)throw new Error;for(var o=n.length,s={},r=0;r<o;r+=1){var _=n[r],l=Pr[_];if(l){var g=typeof l[0]=="function"?l[0](i):l[0],d=l[1],f=(g.exec(e)||[])[0],h=d(f,i);s=dg({},s,{},h),e=e.replace(f,"")}else{var F=_.replace(/^\[|\]$/g,"");if(e.indexOf(F)===0)e=e.substr(F.length);else throw new Error("not match")}}return s}function Rg(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};try{var n=i.locale,o=n===void 0?Zr:n,s=i.backupDate,r=s===void 0?new Date:s,_=vg(e,a,o),l=_.year,g=_.month,d=_.day,f=_.hour,h=_.minute,F=_.second,m=_.millisecond,b=_.isPM,E=_.date,A=_.offset,w=_.weekday,R=_.week;if(E)return E;var Y=[l,g,d,f,h,F,m];if(Y[3]=kg(Y[3],b),R!==void 0&&g===void 0&&d===void 0){var Z=Lr(l===void 0?r:new Date(l,3),{firstDayOfWeek:o.firstDayOfWeek,firstWeekContainsDate:o.firstWeekContainsDate});return new Date(Z.getTime()+(R-1)*7*24*3600*1e3)}var N,I=Ag(Y,r);return A!==void 0?(I[6]+=A*60*1e3,N=Sg.apply(void 0,Qo(I))):N=wg.apply(void 0,Qo(I)),w!==void 0&&N.getDay()!==w?new Date(NaN):N}catch{return new Date(NaN)}}function wi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wi=function(a){return typeof a}:wi=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},wi(e)}function tt(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function Fn(){return Fn=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Fn.apply(this,arguments)}function ts(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function pe(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?ts(Object(i),!0).forEach(function(n){tt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ts(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Cg(e,a){if(e==null)return{};var i={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(i[o]=e[o]);return i}function Ng(e,a){if(e==null)return{};var i=Cg(e,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gt(e,a){return Og(e)||Bg(e,a)||xg(e,a)||Mg()}function Og(e){if(Array.isArray(e))return e}function Bg(e,a){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],n=!0,o=!1,s=void 0;try{for(var r=e[Symbol.iterator](),_;!(n=(_=r.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(l){o=!0,s=l}finally{try{!n&&r.return!=null&&r.return()}finally{if(o)throw s}}return i}}function xg(e,a){if(e){if(typeof e=="string")return is(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return is(e,a)}}function is(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,n=new Array(a);i<a;i++)n[i]=e[i];return n}function Mg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function un(){return un=Object.assign||function(e){for(var a,i=1;i<arguments.length;i++)for(var n in a=arguments[i],a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},un.apply(this,arguments)}var jg=["attrs","props","domProps"],Yg=["class","style","directives"],qg=["on","nativeOn"],Lg=function(e){return e.reduce(function(a,i){for(var n in i)if(!a[n])a[n]=i[n];else if(jg.indexOf(n)!==-1)a[n]=un({},a[n],i[n]);else if(Yg.indexOf(n)!==-1){var o=a[n]instanceof Array?a[n]:[a[n]],s=i[n]instanceof Array?i[n]:[i[n]];a[n]=o.concat(s)}else if(qg.indexOf(n)!==-1)for(var r in i[n])if(a[n][r]){var _=a[n][r]instanceof Array?a[n][r]:[a[n][r]],l=i[n][r]instanceof Array?i[n][r]:[i[n][r]];a[n][r]=_.concat(l)}else a[n][r]=i[n][r];else if(n=="hook")for(var g in i[n])a[n][g]=a[n][g]?Zg(a[n][g],i[n][g]):i[n][g];else a[n]=i[n];return a},{})},Zg=function(e,a){return function(){e&&e.apply(this,arguments),a&&a.apply(this,arguments)}},ai=Lg;function ka(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,_=new Date(e,a,i,n,o,s,r);return e<100&&e>=0&&_.setFullYear(e),_}function Sa(e){return e instanceof Date&&!isNaN(e)}function O0(e){return Array.isArray(e)&&e.length===2&&e.every(Sa)&&e[0]<=e[1]}function Ig(e){return Array.isArray(e)&&e.every(Sa)}function At(e){var a=new Date(e);if(Sa(a))return a;for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return n.length?At.apply(void 0,n):new Date}function Hg(e){var a=new Date(e);return a.setMonth(0,1),a.setHours(0,0,0,0),a}function cn(e){var a=new Date(e);return a.setDate(1),a.setHours(0,0,0,0),a}function Pg(e){var a=new Date(e);return a.setHours(0,0,0,0),a}function Gg(e){for(var a=e.firstDayOfWeek,i=e.year,n=e.month,o=[],s=ka(i,n,0),r=s.getDate(),_=r-(s.getDay()+7-a)%7,l=_;l<=r;l++)o.push(ka(i,n,l-r));s.setMonth(n+1,0);for(var g=s.getDate(),d=1;d<=g;d++)o.push(ka(i,n,d));for(var f=r-_+1,h=6*7-f-g,F=1;F<=h;F++)o.push(ka(i,n,g+F));return o}function mn(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getMonth()):Number(a),o=i.getFullYear(),s=ka(o,n+1,0).getDate(),r=i.getDate();return i.setMonth(n,Math.min(r,s)),i}function wt(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getFullYear()):a;return i.setFullYear(n),i}function u0(e,a){var i=new Date(e),n=new Date(a);return i.setHours(n.getHours(),n.getMinutes(),n.getSeconds()),i}function Kn(e,a){if(!Array.isArray(e))return[];var i=[],n=e.length,o=0;for(a=a||n;o<n;)i.push(e.slice(o,o+=a));return i}function Fa(e){return Object.prototype.toString.call(e)==="[object Object]"}function St(e,a){if(!Fa(e))return{};Array.isArray(a)||(a=[a]);var i={};return a.forEach(function(n){n in e&&(i[n]=e[n])}),i}function Gr(e,a){if(!Fa(e))return{};var i=e;return Fa(a)&&Object.keys(a).forEach(function(n){var o=a[n];Fa(o)&&Fa(e[n])&&(o=Gr(e[n],o)),i=pe({},i,tt({},n,o))}),i}function Ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zg(e,a){return a={exports:{}},e(a,a.exports),a.exports}var Wg=zg(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},n=i;a.default=n,e.exports=a.default}),$g=Ug(Wg),Vg={formatLocale:$g,yearFormat:"YYYY",monthFormat:"MMM",monthBeforeYear:!0},xt="en",pt={};pt[xt]=Vg;function Ur(e,a,i){if(typeof e!="string")return pt[xt];var n=xt;return pt[e]&&(n=e),a&&(pt[e]=a,n=e),i||(xt=n),pt[e]||pt[xt]}function vt(e){return Ur(e,null,!0)}function Qg(e){var a=!1;return function(){for(var i=this,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];a||(a=!0,requestAnimationFrame(function(){a=!1,e.apply(i,o)}))}}function Kg(e){var a=e.style.display,i=e.style.visibility;e.style.display="block",e.style.visibility="hidden";var n=window.getComputedStyle(e),o=e.offsetWidth+parseInt(n.marginLeft,10)+parseInt(n.marginRight,10),s=e.offsetHeight+parseInt(n.marginTop,10)+parseInt(n.marginBottom,10);return e.style.display=a,e.style.visibility=i,{width:o,height:s}}function Jg(e,a,i,n){var o=0,s=0,r=0,_=0,l=e.getBoundingClientRect(),g=document.documentElement.clientWidth,d=document.documentElement.clientHeight;return n&&(r=window.pageXOffset+l.left,_=window.pageYOffset+l.top),g-l.left<a&&l.right<a?o=r-l.left+1:l.left+l.width/2<=g/2?o=r:o=r+l.width-a,l.top<=i&&d-l.bottom<=i?s=_+d-l.top-i:l.top+l.height/2<=d/2?s=_+l.height:s=_-i,{left:"".concat(o,"px"),top:"".concat(s,"px")}}function B0(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;if(!e||e===a)return null;var i=function(s,r){return getComputedStyle(s,null).getPropertyValue(r)},n=/(auto|scroll)/,o=n.test(i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x"));return o?e:B0(e.parentNode,a)}var Xg={name:"Popup",inject:{prefixClass:{default:"mx"}},props:{visible:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!0}},data:function(){return{top:"",left:""}},watch:{visible:{immediate:!0,handler:function(e){var a=this;this.$nextTick(function(){e&&a.displayPopup()})}}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this._clickoutEvent="ontouchend"in document?"touchstart":"mousedown",document.addEventListener(this._clickoutEvent,this.handleClickOutside);var a=this.$parent.$el;this._displayPopup=Qg(function(){return e.displayPopup()}),this._scrollParent=B0(a)||window,this._scrollParent.addEventListener("scroll",this._displayPopup),window.addEventListener("resize",this._displayPopup)},beforeDestroy:function(){this.appendToBody&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),document.removeEventListener(this._clickoutEvent,this.handleClickOutside),this._scrollParent.removeEventListener("scroll",this._displayPopup),window.removeEventListener("resize",this._displayPopup)},methods:{handleClickOutside:function(e){if(this.visible){var a=e.target,i=this.$el;i&&!i.contains(a)&&this.$emit("clickoutside",e)}},displayPopup:function(){if(this.visible){var e=this.$el,a=this.$parent.$el,i=this.appendToBody;this._popupRect||(this._popupRect=Kg(e));var n=this._popupRect,o=n.width,s=n.height,r=Jg(a,o,s,i),_=r.left,l=r.top;this.left=_,this.top=l}}}};function na(e,a,i,n,o,s,r,_,l,g){var d=typeof i=="function"?i.options:i;return e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i}var eh=Xg,ah=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("transition",{attrs:{name:e.prefixClass+"-zoom-in-down"}},[e.visible?i("div",{class:e.prefixClass+"-datepicker-main "+e.prefixClass+"-datepicker-popup",style:{top:e.top,left:e.left,position:"absolute"}},[e._t("default")],2):e._e()])},th=[],ih=void 0,nh=na({render:ah,staticRenderFns:th},ih,eh),oh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"}})])},sh=[],rh=void 0,lh=na({render:oh,staticRenderFns:sh},rh,{}),_h=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e._v(" "),i("path",{attrs:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}),e._v(" "),i("path",{attrs:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"}})])},dh=[],fh=void 0,gh=na({render:_h,staticRenderFns:dh},fh,{}),hh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"}})])},Fh=[],uh=void 0,ch=na({render:hh,staticRenderFns:Fh},uh,{}),mh={props:{type:String,disabled:Boolean},inject:{prefixClass:{default:"mx"}}},ph=mh,bh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("button",e._g({class:[e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-icon-"+e.type,{disabled:e.disabled}],attrs:{type:"button",disabled:e.disabled}},e.$listeners),[i("i",{class:e.prefixClass+"-icon-"+e.type})])},Th=[],Dh=void 0,Jn=na({render:bh,staticRenderFns:Th},Dh,ph),yh={name:"TableDate",components:{IconButton:Jn},inject:{getLocale:{default:function(){return vt}},getWeek:{default:function(){return Qn}},prefixClass:{default:"mx"},onDateMouseEnter:{default:void 0},onDateMouseLeave:{default:void 0}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},showWeekNumber:{type:Boolean,default:!1},titleFormat:{type:String,default:"YYYY-MM-DD"},getRowClasses:{type:Function,default:function(){return[]}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{firstDayOfWeek:function(){return this.getLocale().formatLocale.firstDayOfWeek||0},yearMonth:function(){var e=this.getLocale(),a=e.yearFormat,i=e.monthBeforeYear,n=e.monthFormat,o=n===void 0?"MMM":n,s={panel:"year",label:this.formatDate(this.calendar,a)},r={panel:"month",label:this.formatDate(this.calendar,o)};return i?[r,s]:[s,r]},days:function(){var e=this.getLocale(),a=e.days||e.formatLocale.weekdaysMin;return a.concat(a).slice(this.firstDayOfWeek,this.firstDayOfWeek+7)},dates:function(){var e=this.calendar.getFullYear(),a=this.calendar.getMonth(),i=Gg({firstDayOfWeek:this.firstDayOfWeek,year:e,month:a});return Kn(i,7)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,a.getMonth()+1,0),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1);break;case"last-month":a.setMonth(a.getMonth(),0),a.setHours(23,59,59,999);break;case"next-month":a.setMonth(a.getMonth()+1);break}return this.disabledCalendarChanger(a,e)},handleIconLeftClick:function(){this.$emit("changecalendar",mn(this.calendar,function(e){return e-1}),"last-month")},handleIconRightClick:function(){this.$emit("changecalendar",mn(this.calendar,function(e){return e+1}),"next-month")},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(e){this.$emit("changepanel",e)},handleMouseEnter:function(e){typeof this.onDateMouseEnter=="function"&&this.onDateMouseEnter(e)},handleMouseLeave:function(e){typeof this.onDateMouseLeave=="function"&&this.onDateMouseLeave(e)},handleCellClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-row-col");if(i){var n=i.split(",").map(function(l){return parseInt(l,10)}),o=Gt(n,2),s=o[0],r=o[1],_=this.dates[s][r];this.$emit("select",new Date(_))}},formatDate:function(e,a){return N0(e,a,{locale:this.getLocale().formatLocale})},getCellTitle:function(e){var a=this.titleFormat;return this.formatDate(e,a)},getWeekNumber:function(e){return this.getWeek(e,this.getLocale().formatLocale)}}},Eh=yh,kh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-date"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"left",disabled:e.isDisabledArrows("last-month")},on:{click:e.handleIconLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("icon-button",{attrs:{type:"right",disabled:e.isDisabledArrows("next-month")},on:{click:e.handleIconRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},e._l(e.yearMonth,function(n){return i("button",{key:n.panel,class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-current-"+n.panel,attrs:{type:"button"},on:{click:function(o){return e.handlePanelChange(n.panel)}}},[e._v(`
        `+e._s(n.label)+`
      `)])}),0)],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-date"},[i("thead",[i("tr",[e.showWeekNumber?i("th",{class:e.prefixClass+"-week-number-header"}):e._e(),e._v(" "),e._l(e.days,function(n){return i("th",{key:n},[e._v(e._s(n))])})],2)]),e._v(" "),i("tbody",{on:{click:e.handleCellClick}},e._l(e.dates,function(n,o){return i("tr",{key:o,class:[e.prefixClass+"-date-row",e.getRowClasses(n)]},[e.showWeekNumber?i("td",{class:e.prefixClass+"-week-number",attrs:{"data-row-col":o+",0"}},[e._v(`
            `+e._s(e.getWeekNumber(n[0]))+`
          `)]):e._e(),e._v(" "),e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-row-col":o+","+r,title:e.getCellTitle(s)},on:{mouseenter:function(_){return e.handleMouseEnter(s)},mouseleave:function(_){return e.handleMouseLeave(s)}}},[i("div",[e._v(e._s(s.getDate()))])])})],2)}),0)])])])},Ah=[],wh=void 0,Sh=na({render:kh,staticRenderFns:Ah},wh,Eh),vh={name:"TableMonth",components:{IconButton:Jn},inject:{getLocale:{default:function(){return vt}},prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{calendarYear:function(){return this.calendar.getFullYear()},months:function(){var e=this.getLocale(),a=e.months||e.formatLocale.monthsShort,i=a.map(function(n,o){return{text:n,month:o}});return Kn(i,3)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,11,31),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1,0,1);break}return this.disabledCalendarChanger(a,e)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(){this.$emit("changepanel","year")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-month");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Rh=vh,Ch=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-month"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text",attrs:{type:"button"},on:{click:e.handlePanelChange}},[e._v(`
        `+e._s(e.calendarYear)+`
      `)])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-month",on:{click:e.handleClick}},e._l(e.months,function(n,o){return i("tr",{key:o},e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s.month),attrs:{"data-month":s.month}},[i("div",[e._v(e._s(s.text))])])}),0)}),0)])])},Nh=[],Oh=void 0,Bh=na({render:Ch,staticRenderFns:Nh},Oh,Rh),xh={name:"TableYear",components:{IconButton:Jn},inject:{prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}},getYearPanel:{type:Function}},computed:{years:function(){var e=new Date(this.calendar);return typeof this.getYearPanel=="function"?this.getYearPanel(e):this.getYears(e)},firstYear:function(){return this.years[0][0]},lastYear:function(){var e=function(a){return a[a.length-1]};return e(e(this.years))}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-decade":a.setFullYear(this.firstYear-1,11,31),a.setHours(23,59,59,999);break;case"next-decade":a.setFullYear(this.lastYear+1,0,1);break}return this.disabledCalendarChanger(a,e)},getYears:function(e){for(var a=Math.floor(e.getFullYear()/10)*10,i=[],n=0;n<10;n++)i.push(a+n);return Kn(i,2)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-10}),"last-decade")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+10}),"next-decade")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-year");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Mh=xh,jh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-year"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-decade")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-decade")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("span",[e._v(e._s(e.firstYear))]),e._v(" "),i("span",{class:e.prefixClass+"-calendar-decade-separator"}),e._v(" "),i("span",[e._v(e._s(e.lastYear))])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-year",on:{click:e.handleClick}},e._l(e.years,function(n,o){return i("tr",{key:o},e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-year":s}},[i("div",[e._v(e._s(s))])])}),0)}),0)])])},Yh=[],qh=void 0,Lh=na({render:jh,staticRenderFns:Yh},qh,Mh),st={name:"CalendarPanel",inject:{prefixClass:{default:"mx"},dispatchDatePicker:{default:function(){return function(){}}}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},defaultPanel:{type:String},disabledCalendarChanger:{type:Function,default:function(){return!1}},disabledDate:{type:Function,default:function(){return!1}},type:{type:String,default:"date"},getClasses:{type:Function,default:function(){return[]}},showWeekNumber:{type:Boolean,default:void 0},getYearPanel:{type:Function},titleFormat:{type:String,default:"YYYY-MM-DD"},calendar:Date,partialUpdate:{type:Boolean,default:!1}},data:function(){var e=["date","month","year"],a=Math.max(e.indexOf(this.type),e.indexOf(this.defaultPanel)),i=a!==-1?e[a]:"date";return{panel:i,innerCalendar:new Date}},computed:{innerValue:function(){var e=Array.isArray(this.value)?this.value:[this.value],a={year:Hg,month:cn,date:Pg},i=a[this.type]||a.date;return e.filter(Sa).map(function(n){return i(n)})},calendarYear:function(){return this.innerCalendar.getFullYear()},calendarMonth:function(){return this.innerCalendar.getMonth()}},watch:{value:{immediate:!0,handler:"initCalendar"},calendar:{handler:"initCalendar"},defaultValue:{handler:"initCalendar"}},methods:{initCalendar:function(){var e=this.calendar;if(!Sa(e)){var a=this.innerValue.length;e=At(a>0?this.innerValue[a-1]:this.defaultValue)}this.innerCalendar=cn(e)},isDisabled:function(e){return this.disabledDate(new Date(e),this.innerValue)},emitDate:function(e,a){this.isDisabled(e)||(this.$emit("select",e,a,this.innerValue),this.dispatchDatePicker("pick",e,a))},handleCalendarChange:function(e,a){var i=new Date(this.innerCalendar);this.innerCalendar=e,this.$emit("update:calendar",e),this.dispatchDatePicker("calendar-change",e,i,a)},handelPanelChange:function(e){var a=this.panel;this.panel=e,this.dispatchDatePicker("panel-change",e,a)},handleSelectYear:function(e){if(this.type==="year"){var a=this.getYearCellDate(e);this.emitDate(a,"year")}else if(this.handleCalendarChange(ka(e,this.calendarMonth),"year"),this.handelPanelChange("month"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(e),this.emitDate(i,"year")}},handleSelectMonth:function(e){if(this.type==="month"){var a=this.getMonthCellDate(e);this.emitDate(a,"month")}else if(this.handleCalendarChange(ka(this.calendarYear,e),"month"),this.handelPanelChange("date"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(this.calendarYear),this.emitDate(mn(i,e),"month")}},handleSelectDate:function(e){this.emitDate(e,this.type==="week"?"week":"date")},getMonthCellDate:function(e){return ka(this.calendarYear,e)},getYearCellDate:function(e){return ka(e,0)},getDateClasses:function(e){var a=e.getMonth()!==this.calendarMonth,i=[];e.getTime()===new Date().setHours(0,0,0,0)&&i.push("today"),a&&i.push("not-current-month");var n=this.getStateClass(e);return n==="active"&&a||i.push(n),i.concat(this.getClasses(e,this.innerValue,i.join(" ")))},getMonthClasses:function(e){var a=[];if(this.type!=="month"){this.calendarMonth===e&&a.push("active");var i=this.getMonthCellDate(e);return this.disabledCalendarChanger(i,"month")&&a.push("disabled"),a}var n=this.getMonthCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getYearClasses:function(e){var a=[];if(this.type!=="year"){this.calendarYear===e&&a.push("active");var i=this.getYearCellDate(e);return this.disabledCalendarChanger(i,"year")&&a.push("disabled"),a}var n=this.getYearCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getStateClass:function(e){return this.isDisabled(e)?"disabled":this.innerValue.some(function(a){return a.getTime()===e.getTime()})?"active":""},getWeekState:function(e){if(this.type!=="week")return"";var a=e[0].getTime(),i=e[6].getTime(),n=this.innerValue.some(function(o){var s=o.getTime();return s>=a&&s<=i});return n?"".concat(this.prefixClass,"-active-week"):""}},render:function(){var e=arguments[0],a=this.panel,i=this.innerCalendar;return a==="year"?e(Lh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getYearClasses,getYearPanel:this.getYearPanel},on:{select:this.handleSelectYear,changecalendar:this.handleCalendarChange}}):a==="month"?e(Bh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getMonthClasses},on:{select:this.handleSelectMonth,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}}):e(Sh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getDateClasses,getRowClasses:this.getWeekState,titleFormat:this.titleFormat,showWeekNumber:typeof this.showWeekNumber=="boolean"?this.showWeekNumber:this.type==="week"},class:tt({},"".concat(this.prefixClass,"-calendar-week-mode"),this.type==="week"),on:{select:this.handleSelectDate,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}})}},Ut={name:"CalendarRange",components:{CalendarPanel:st},provide:function(){return{onDateMouseEnter:this.onDateMouseEnter,onDateMouseLeave:this.onDateMouseLeave}},inject:{prefixClass:{default:"mx"}},props:pe({},st.props),data:function(){return{innerValue:[],calendars:[],hoveredValue:null}},computed:{calendarMinDiff:function(){var e={date:1,month:12,year:120};return e[this.type]||e.date},calendarMaxDiff:function(){return 1/0},defaultValues:function(){return Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue]}},watch:{value:{immediate:!0,handler:function(){var e=this;this.innerValue=O0(this.value)?this.value:[new Date(NaN),new Date(NaN)];var a=this.innerValue.map(function(i,n){return cn(At(i,e.defaultValues[n]))});this.updateCalendars(a)}}},methods:{handleSelect:function(e,a){var i=Gt(this.innerValue,2),n=i[0],o=i[1];Sa(n)&&!Sa(o)?(n.getTime()>e.getTime()?this.innerValue=[e,n]:this.innerValue=[n,e],this.emitDate(this.innerValue,a)):this.innerValue=[e,new Date(NaN)]},onDateMouseEnter:function(e){this.hoveredValue=e},onDateMouseLeave:function(){this.hoveredValue=null},emitDate:function(e,a){this.$emit("select",e,a)},updateStartCalendar:function(e){this.updateCalendars([e,this.calendars[1]],1)},updateEndCalendar:function(e){this.updateCalendars([this.calendars[0],e],0)},updateCalendars:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,i=this.getCalendarGap(e);if(i){var n=new Date(e[a]);n.setMonth(n.getMonth()+(a===0?-i:i)),e[a]=n}this.calendars=e},getCalendarGap:function(e){var a=Gt(e,2),i=a[0],n=a[1],o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth(),r=o*12+s,_=this.calendarMinDiff,l=this.calendarMaxDiff;return r<_?_-r:r>l?l-r:0},getRangeClasses:function(e,a,i){var n=[].concat(this.getClasses(e,a,i));if(/disabled|active/.test(i))return n;var o=function(s,r){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(m){return m.getTime()},l=_(s),g=r.map(_),d=Gt(g,2),f=d[0],h=d[1];if(f>h){var F=[h,f];f=F[0],h=F[1]}return l>f&&l<h};return a.length===2&&o(e,a)?n.concat("in-range"):a.length===1&&this.hoveredValue&&o(e,[a[0],this.hoveredValue])?n.concat("hover-in-range"):n}},render:function(){var e=this,a=arguments[0],i=this.calendars.map(function(o,s){var r=pe({},e.$props,{calendar:o,value:e.innerValue,defaultValue:e.defaultValues[s],getClasses:e.getRangeClasses,partialUpdate:!1}),_={select:e.handleSelect,"update:calendar":s===0?e.updateStartCalendar:e.updateEndCalendar};return a("calendar-panel",{props:pe({},r),on:pe({},_)})}),n=this.prefixClass;return a("div",{class:"".concat(n,"-range-wrapper")},[i])}},mi;function Zh(){if(typeof window>"u")return 0;if(mi!==void 0)return mi;var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var a=document.createElement("div");return a.style.width="100%",e.appendChild(a),mi=e.offsetWidth-a.offsetWidth,e.parentNode.removeChild(e),mi}var Ih={inject:{prefixClass:{default:"mx"}},data:function(){return{scrollbarWidth:0,thumbTop:"",thumbHeight:""}},created:function(){this.scrollbarWidth=Zh(),document.addEventListener("mouseup",this.handleDragend)},beforeDestroy:function(){document.addEventListener("mouseup",this.handleDragend)},mounted:function(){this.$nextTick(this.getThumbSize)},methods:{getThumbSize:function(){var e=this.$refs.wrap;if(e){var a=e.clientHeight*100/e.scrollHeight;this.thumbHeight=a<100?"".concat(a,"%"):""}},handleScroll:function(e){var a=e.currentTarget,i=a.scrollHeight,n=a.scrollTop;this.thumbTop="".concat(n*100/i,"%")},handleDragstart:function(e){e.stopImmediatePropagation(),this._draggable=!0;var a=this.$refs.thumb.offsetTop;this._prevY=e.clientY-a,document.addEventListener("mousemove",this.handleDraging)},handleDraging:function(e){if(this._draggable){var a=e.clientY,i=this.$refs.wrap,n=i.scrollHeight,o=i.clientHeight,s=a-this._prevY,r=s*n/o;i.scrollTop=r}},handleDragend:function(){this._draggable&&(this._draggable=!1,document.removeEventListener("mousemove",this.handleDraging))}}},Hh=Ih,Ph=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-scrollbar",style:{position:"relative",overflow:"hidden"}},[i("div",{ref:"wrap",class:e.prefixClass+"-scrollbar-wrap",style:{marginRight:"-"+e.scrollbarWidth+"px"},on:{scroll:e.handleScroll}},[e._t("default")],2),e._v(" "),i("div",{class:e.prefixClass+"-scrollbar-track"},[i("div",{ref:"thumb",class:e.prefixClass+"-scrollbar-thumb",style:{height:e.thumbHeight,top:e.thumbTop},on:{mousedown:e.handleDragstart}})])])},Gh=[],Uh=void 0,zr=na({render:Ph,staticRenderFns:Gh},Uh,Hh),Q0=function(e){return e=parseInt(e,10),e<10?"0".concat(e):"".concat(e)},K0=function(e,a,i){if(Array.isArray(i))return i.filter(function(s){return s>=0&&s<e});a<=0&&(a=1);for(var n=[],o=0;o<e;o+=a)n.push(o);return n},zh=function e(a,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n<=0){requestAnimationFrame(function(){a.scrollTop=i});return}var o=i-a.scrollTop,s=o/n*10;requestAnimationFrame(function(){var r=a.scrollTop+s;if(r>=i){a.scrollTop=i;return}a.scrollTop=r,e(a,i,n-10)})},Wh={name:"ListColumns",components:{ScrollbarVertical:zr},inject:{prefixClass:{default:"mx"}},props:{date:Date,scrollDuration:{type:Number,default:100},getClasses:{type:Function,default:function(){return[]}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,showHour:{type:Boolean,default:!0},showMinute:{type:Boolean,default:!0},showSecond:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},use12h:{type:Boolean,default:!1}},computed:{columns:function(){var e=[];return this.showHour&&e.push({type:"hour",list:this.getHoursList()}),this.showMinute&&e.push({type:"minute",list:this.getMinutesList()}),this.showSecond&&e.push({type:"second",list:this.getSecondsList()}),this.use12h&&e.push({type:"ampm",list:this.getAMPMList()}),e.filter(function(a){return a.list.length>0})}},watch:{date:{handler:function(){var e=this;this.$nextTick(function(){e.scrollToSelected(e.scrollDuration)})}}},mounted:function(){this.scrollToSelected(0)},methods:{getHoursList:function(){var e=this;return K0(this.use12h?12:24,this.hourStep,this.hourOptions).map(function(a){var i=new Date(e.date),n=Q0(a);e.use12h&&(a===0&&(n="12"),i.getHours()>=12&&(a+=12));var o=i.setHours(a);return{value:o,text:n}})},getMinutesList:function(){var e=this;return K0(60,this.minuteStep,this.minuteOptions).map(function(a){var i=new Date(e.date).setMinutes(a);return{value:i,text:Q0(a)}})},getSecondsList:function(){var e=this;return K0(60,this.secondStep,this.secondOptions).map(function(a){var i=new Date(e.date).setSeconds(a);return{value:i,text:Q0(a)}})},getAMPMList:function(){var e=this;return["AM","PM"].map(function(a,i){var n=new Date(e.date),o=n.setHours(n.getHours()%12+i*12);return{text:a,value:o}})},scrollToSelected:function(e){for(var a=this.$el.querySelectorAll(".active"),i=0;i<a.length;i++){var n=a[i],o=B0(n,this.$el);if(o){var s=n.offsetTop;zh(o,s,e)}}},handleSelect:function(e){var a=e.target,i=e.currentTarget;if(a.tagName.toUpperCase()==="LI"){var n=i.getAttribute("data-type"),o=parseInt(i.getAttribute("data-index"),10),s=parseInt(a.getAttribute("data-index"),10),r=this.columns[o].list[s].value;this.$emit("select",r,n)}}}},$h=Wh,Vh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time-columns"},e._l(e.columns,function(n,o){return i("scrollbar-vertical",{key:o,class:e.prefixClass+"-time-column"},[i("ul",{class:e.prefixClass+"-time-list",attrs:{"data-type":n.type,"data-index":o},on:{click:e.handleSelect}},e._l(n.list,function(s,r){return i("li",{key:s.value,class:[e.prefixClass+"-time-item",e.getClasses(s.value,n.type)],attrs:{"data-index":r}},[e._v(`
        `+e._s(s.text)+`
      `)])}),0)])}),1)},Qh=[],Kh=void 0,Jh=na({render:Vh,staticRenderFns:Qh},Kh,$h);function J0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=e.split(":");if(a.length>=2){var i=parseInt(a[0],10),n=parseInt(a[1],10);return{hours:i,minutes:n}}return null}var Xh=function(e,a){e&&(e.scrollTop=a)},eF={name:"ListOptions",components:{ScrollbarVertical:zr},inject:{getLocale:{default:function(){return vt}},prefixClass:{default:"mx"}},props:{date:Date,options:{type:[Object,Function],default:function(){return[]}},format:{type:String,default:"HH:mm:ss"},getClasses:{type:Function,default:function(){return[]}}},computed:{list:function(){var e=[],a=this.options;if(typeof a=="function")return a()||[];var i=J0(a.start),n=J0(a.end),o=J0(a.step),s=a.format||this.format;if(i&&n&&o)for(var r=i.minutes+i.hours*60,_=n.minutes+n.hours*60,l=o.minutes+o.hours*60,g=Math.floor((_-r)/l),d=0;d<=g;d++){var f=r+d*l,h=Math.floor(f/60),F=f%60,m=new Date(this.date).setHours(h,F,0);e.push({value:m,text:this.formatDate(m,s)})}return e}},mounted:function(){this.scrollToSelected()},methods:{formatDate:function(e,a){return N0(e,a,{locale:this.getLocale().formatLocale})},scrollToSelected:function(){var e=this.$el.querySelector(".active");if(e){var a=B0(e,this.$el);if(a){var i=e.offsetTop;Xh(a,i)}}},handleSelect:function(e){this.$emit("select",e,"time")}}},aF=eF,tF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("scrollbar-vertical",e._l(e.list,function(n){return i("div",{key:n.value,class:[e.prefixClass+"-time-option",e.getClasses(n.value)],on:{click:function(o){return e.handleSelect(n.value)}}},[e._v(`
    `+e._s(n.text)+`
  `)])}),0)},iF=[],nF=void 0,oF=na({render:tF,staticRenderFns:iF},nF,aF),sF={name:"TimePanel",components:{ListColumns:Jh,ListOptions:oF},inject:{getLocale:{default:function(){return vt}},prefixClass:{default:"mx"}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},format:{default:"HH:mm:ss"},timeTitleFormat:{type:String,default:"YYYY-MM-DD"},showTimeHeader:{type:Boolean,default:!1},disabledTime:{type:Function,default:function(){return!1}},timePickerOptions:{type:[Object,Function],default:function(){return null}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},showHour:{type:Boolean,default:void 0},showMinute:{type:Boolean,default:void 0},showSecond:{type:Boolean,default:void 0},use12h:{type:Boolean,default:void 0},scrollDuration:{type:Number,default:100}},data:function(){return{innerValue:At(this.value,this.defaultValue)}},computed:{title:function(){var e=this.timeTitleFormat,a=new Date(this.innerValue);return this.formatDate(a,e)},innerForamt:function(){return typeof this.format=="string"?this.format:"HH:mm:ss"},ShowHourMinuteSecondAMPM:function(){var e=this,a=this.innerForamt,i={showHour:/[HhKk]/.test(a),showMinute:/m/.test(a),showSecond:/s/.test(a),use12h:/a/i.test(a)},n={};return Object.keys(i).forEach(function(o){n[o]=typeof e[o]=="boolean"?e[o]:i[o]}),n}},watch:{value:{immediate:!0,handler:function(){this.innerValue=At(this.value,this.defaultValue)}}},methods:{formatDate:function(e,a){return N0(e,a,{locale:this.getLocale().formatLocale})},isDisabledTime:function(e){return this.disabledTime(new Date(e))},isDisabledHour:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setMinutes(0,0,0))&&this.isDisabledTime(a.setMinutes(59,59,999))},isDisabledMinute:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setSeconds(0,0))&&this.isDisabledTime(a.setSeconds(59,999))},isDisabledAMPM:function(e){var a=new Date(e),i=a.getHours()<12?0:12,n=i+11;return this.isDisabledTime(a)&&this.isDisabledTime(a.setHours(i,0,0,0))&&this.isDisabledTime(a.setHours(n,59,59,999))},isDisabled:function(e,a){return a==="hour"?this.isDisabledHour(e):a==="minute"?this.isDisabledMinute(e):a==="ampm"?this.isDisabledAMPM(e):this.isDisabledTime(e)},handleSelect:function(e,a){var i=new Date(e);this.isDisabled(e,a)||(this.innerValue=i,this.isDisabledTime(i)||this.$emit("select",i,a))},handleClickTitle:function(){this.$emit("clicktitle")},getClasses:function(e,a){var i=new Date(e);return this.isDisabled(e,a)?"disabled":i.getTime()===this.innerValue.getTime()?"active":""}}},rF=sF,lF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time"},[e.showTimeHeader?i("div",{class:e.prefixClass+"-time-header"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-time-header-title",attrs:{type:"button"},on:{click:e.handleClickTitle}},[e._v(`
      `+e._s(e.title)+`
    `)])]):e._e(),e._v(" "),i("div",{class:e.prefixClass+"-time-content"},[e.timePickerOptions?i("list-options",{attrs:{date:e.innerValue,"get-classes":e.getClasses,options:e.timePickerOptions,format:e.innerForamt},on:{select:e.handleSelect}}):i("list-columns",e._b({attrs:{date:e.innerValue,"get-classes":e.getClasses,"hour-options":e.hourOptions,"minute-options":e.minuteOptions,"second-options":e.secondOptions,"hour-step":e.hourStep,"minute-step":e.minuteStep,"second-step":e.secondStep,"scroll-duration":e.scrollDuration},on:{select:e.handleSelect}},"list-columns",e.ShowHourMinuteSecondAMPM,!1))],1)])},_F=[],dF=void 0,La=na({render:lF,staticRenderFns:_F},dF,rF),zt={name:"TimeRange",inject:{prefixClass:{default:"mx"}},props:pe({},La.props),data:function(){return{startValue:new Date(NaN),endValue:new Date(NaN)}},watch:{value:{immediate:!0,handler:function(){if(O0(this.value)){var e=Gt(this.value,2),a=e[0],i=e[1];this.startValue=a,this.endValue=i}else this.startValue=new Date(NaN),this.endValue=new Date(NaN)}}},methods:{emitChange:function(e,a){var i=[this.startValue,this.endValue];this.$emit("select",i,e==="time"?"time-range":e,a)},handleSelectStart:function(e,a){this.startValue=e,this.endValue.getTime()>=e.getTime()||(this.endValue=e),this.emitChange(a,0)},handleSelectEnd:function(e,a){this.endValue=e,this.startValue.getTime()<=e.getTime()||(this.startValue=e),this.emitChange(a,1)},disabledStartTime:function(e){return this.disabledTime(e,0)},disabledEndTime:function(e){return e.getTime()<this.startValue.getTime()||this.disabledTime(e,1)}},render:function(){var e=arguments[0],a=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],i=this.prefixClass;return e("div",{class:"".concat(i,"-range-wrapper")},[e(La,{props:pe({},pe({},this.$props,{value:this.startValue,defaultValue:a[0],disabledTime:this.disabledStartTime})),on:pe({},pe({},this.$listeners,{select:this.handleSelectStart}))}),e(La,{props:pe({},pe({},this.$props,{value:this.endValue,defaultValue:a[1],disabledTime:this.disabledEndTime})),on:pe({},pe({},this.$listeners,{select:this.handleSelectEnd}))})])}},Xn={name:"DatetimePanel",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:pe({},st.props,{},La.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){a==="date"&&this.openTimePanel();var i=u0(e,At(this.value,this.defaultValue));if(this.disabledTime(new Date(i))&&(i=u0(e,this.defaultValue),this.disabledTime(new Date(i)))){this.currentValue=i;return}this.emitDate(i,a)}},render:function(){var e=arguments[0],a={props:pe({},St(this.$props,Object.keys(st.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:pe({},St(this.$props,Object.keys(La.props)),{showTimeHeader:!0,value:this.currentValue}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(st,ai([{},a])),this.timeVisible&&e(La,ai([{class:"".concat(n,"-calendar-time")},i]))])}},Wr={name:"DatetimeRange",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:pe({},Ut.props,{},zt.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){var i=this;a==="date"&&this.openTimePanel();var n=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],o=e.map(function(s,r){var _=O0(i.value)?i.value[r]:n[r];return u0(s,_)});if(o[1].getTime()<o[0].getTime()&&(o=[o[0],o[0]]),o.some(this.disabledTime)&&(o=e.map(function(s,r){return u0(s,n[r])}),o.some(this.disabledTime))){this.currentValue=o;return}this.emitDate(o,a)}},render:function(){var e=arguments[0],a={props:pe({},St(this.$props,Object.keys(Ut.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:pe({},St(this.$props,Object.keys(zt.props)),{value:this.currentValue,showTimeHeader:!0}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(Ut,ai([{},a])),this.timeVisible&&e(zt,ai([{class:"".concat(n,"-calendar-time")},i]))])}},fF={default:st,time:La,datetime:Xn},gF={default:Ut,time:zt,datetime:Wr},et={name:"DatePicker",provide:function(){var e=this;return{getLocale:function(){return e.locale},getWeek:this.getWeek,prefixClass:this.prefixClass,dispatchDatePicker:this.$emit.bind(this)}},props:pe({},Xn.props,{value:{},valueType:{type:String,default:"date"},type:{type:String,default:"date"},format:{type:String},formatter:{type:Object},range:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},rangeSeparator:{type:String},lang:{type:[String,Object]},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},prefixClass:{type:String,default:"mx"},inputClass:{},inputAttr:{type:Object,default:function(){return{}}},appendToBody:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},popupClass:{},popupStyle:{type:Object,default:function(){return{}}},inline:{type:Boolean,default:!1},confirm:{type:Boolean,default:!1},confirmText:{type:String,default:"OK"},renderInputText:{type:Function},shortcuts:{type:Array,validator:function(e){return Array.isArray(e)&&e.every(function(a){return Fa(a)&&typeof a.text=="string"&&typeof a.onClick=="function"})},default:function(){return[]}}}),data:function(){return{currentValue:null,userInput:null,defaultOpen:!1,mouseInInput:!1}},computed:{popupVisible:function(){return!this.disabled&&(typeof this.open=="boolean"?this.open:this.defaultOpen)},innerRangeSeparator:function(){return this.rangeSeparator||(this.multiple?",":" ~ ")},innerFormat:function(){var e={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD HH:mm:ss",year:"YYYY",month:"YYYY-MM",time:"HH:mm:ss",week:"w"};return this.format||e[this.type]||e.date},innerValue:function(){var e=this.value;return this.validMultipleType?(e=Array.isArray(e)?e:[],e.map(this.value2date)):this.range?(e=Array.isArray(e)?e.slice(0,2):[null,null],e.map(this.value2date)):this.value2date(e)},text:function(){var e=this;return this.userInput!==null?this.userInput:typeof this.renderInputText=="function"?this.renderInputText(this.innerValue):this.isValidValue(this.innerValue)?Array.isArray(this.innerValue)?this.innerValue.map(function(a){return e.formatDate(a)}).join(this.innerRangeSeparator):this.formatDate(this.innerValue):""},showClearIcon:function(){return!this.disabled&&this.clearable&&this.text&&this.mouseInInput},locale:function(){return Fa(this.lang)?Gr(vt(),this.lang):vt(this.lang)},validMultipleType:function(){var e=["date","month","year"];return this.multiple&&!this.range&&e.indexOf(this.type)!==-1}},watch:{innerValue:{immediate:!0,handler:function(e){this.currentValue=e}},popupVisible:{handler:function(e){e&&(this.currentValue=this.innerValue)}}},created:function(){wi(this.format)==="object"&&console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it")},methods:{handleMouseEnter:function(){this.mouseInInput=!0},handleMouseLeave:function(){this.mouseInInput=!1},handleClickOutSide:function(e){var a=e.target;this.$el.contains(a)||this.closePopup()},getFormatter:function(e){return Fa(this.formatter)&&this.formatter[e]||Fa(this.format)&&this.format[e]},getWeek:function(e,a){return typeof this.getFormatter("getWeek")=="function"?this.getFormatter("getWeek")(e,a):Qn(e,a)},parseDate:function(e,a){if(a=a||this.innerFormat,typeof this.getFormatter("parse")=="function")return this.getFormatter("parse")(e,a);var i=new Date;return Rg(e,a,{locale:this.locale.formatLocale,backupDate:i})},formatDate:function(e,a){return a=a||this.innerFormat,typeof this.getFormatter("stringify")=="function"?this.getFormatter("stringify")(e,a):N0(e,a,{locale:this.locale.formatLocale})},value2date:function(e){switch(this.valueType){case"date":return e instanceof Date?new Date(e.getTime()):new Date(NaN);case"timestamp":return typeof e=="number"?new Date(e):new Date(NaN);case"format":return typeof e=="string"?this.parseDate(e):new Date(NaN);default:return typeof e=="string"?this.parseDate(e,this.valueType):new Date(NaN)}},date2value:function(e){if(!Sa(e))return null;switch(this.valueType){case"date":return e;case"timestamp":return e.getTime();case"format":return this.formatDate(e);default:return this.formatDate(e,this.valueType)}},emitValue:function(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;this.userInput=null;var n=Array.isArray(e)?e.map(this.date2value):this.date2value(e);return this.$emit("input",n),this.$emit("change",n,a),i&&this.closePopup(),n},isValidValue:function(e){return this.validMultipleType?Ig(e):this.range?O0(e):Sa(e)},isValidValueAndNotDisabled:function(e){if(!this.isValidValue(e))return!1;var a=typeof this.disabledDate=="function"?this.disabledDate:function(){return!1},i=typeof this.disabledTime=="function"?this.disabledTime:function(){return!1};return Array.isArray(e)||(e=[e]),e.every(function(n){return!a(n)&&!i(n)})},handleMultipleDates:function(e,a){if(this.validMultipleType&&a){var i=a.filter(function(n){return n.getTime()!==e.getTime()});return i.length===a.length&&i.push(e),i}return e},handleSelectDate:function(e,a,i){e=this.handleMultipleDates(e,i),this.confirm?this.currentValue=e:this.emitValue(e,a,!this.validMultipleType&&(a===this.type||a==="time"))},clear:function(){this.emitValue(this.range?[null,null]:null),this.$emit("clear")},handleClear:function(e){e.stopPropagation(),this.clear()},handleConfirmDate:function(){var e=this.emitValue(this.currentValue);this.$emit("confirm",e)},handleSelectShortcut:function(e){var a=e.currentTarget.getAttribute("data-index"),i=this.shortcuts[parseInt(a,10)];if(Fa(i)&&typeof i.onClick=="function"){var n=i.onClick(this);n&&this.emitValue(n)}},openPopup:function(e){this.popupVisible||this.disabled||(this.defaultOpen=!0,this.$emit("open",e),this.$emit("update:open",!0))},closePopup:function(){this.popupVisible&&(this.defaultOpen=!1,this.$emit("close"),this.$emit("update:open",!1))},blur:function(){this.$refs.input&&this.$refs.input.blur()},focus:function(){this.$refs.input&&this.$refs.input.focus()},handleInputChange:function(){var e=this;if(!(!this.editable||this.userInput===null)){var a=this.userInput.trim();if(this.userInput=null,a===""){this.clear();return}var i;if(this.validMultipleType)i=a.split(this.innerRangeSeparator).map(function(o){return e.parseDate(o.trim())});else if(this.range){var n=a.split(this.innerRangeSeparator);n.length!==2&&(n=a.split(this.innerRangeSeparator.trim())),i=n.map(function(o){return e.parseDate(o.trim())})}else i=this.parseDate(a);this.isValidValueAndNotDisabled(i)?(this.emitValue(i),this.blur()):this.$emit("input-error",a)}},handleInputInput:function(e){this.userInput=typeof e=="string"?e:e.target.value},handleInputKeydown:function(e){var a=e.keyCode;a===9?this.closePopup():a===13&&this.handleInputChange()},handleInputBlur:function(e){this.$emit("blur",e)},handleInputFocus:function(e){this.openPopup(e),this.$emit("focus",e)},hasSlot:function(e){return!!(this.$slots[e]||this.$scopedSlots[e])},renderSlot:function(e,a,i){var n=this.$scopedSlots[e];return n?n(i)||a:this.$slots[e]||a},renderInput:function(){var e=this.$createElement,a=this.prefixClass,i=pe({name:"date",type:"text",autocomplete:"off",value:this.text,class:this.inputClass||"".concat(this.prefixClass,"-input"),readonly:!this.editable,disabled:this.disabled,placeholder:this.placeholder},this.inputAttr),n=i.value,o=i.class,s=Ng(i,["value","class"]),r={keydown:this.handleInputKeydown,focus:this.handleInputFocus,blur:this.handleInputBlur,input:this.handleInputInput,change:this.handleInputChange},_=this.renderSlot("input",e("input",{domProps:{value:n},class:o,attrs:pe({},s),on:pe({},r),ref:"input"}),{props:i,events:r}),l=this.type==="time"?e(gh):e(lh);return e("div",{class:"".concat(a,"-input-wrapper"),on:{mouseenter:this.handleMouseEnter,mouseleave:this.handleMouseLeave,click:this.openPopup},ref:"inputWrapper"},[_,this.showClearIcon?e("i",{class:"".concat(a,"-icon-clear"),on:{click:this.handleClear}},[this.renderSlot("icon-clear",e(ch))]):e("i",{class:"".concat(a,"-icon-calendar")},[this.renderSlot("icon-calendar",l)])])},renderContent:function(){var e=this.$createElement,a=this.range?gF:fF,i=a[this.type]||a.default,n=pe({},St(this.$props,Object.keys(i.props)),{value:this.currentValue}),o=pe({},St(this.$listeners,i.emits||[]),{select:this.handleSelectDate}),s=e(i,ai([{},{props:n,on:o,ref:"picker"}]));return e("div",{class:"".concat(this.prefixClass,"-datepicker-body")},[this.renderSlot("content",s,{value:this.currentValue,emit:this.handleSelectDate})])},renderSidebar:function(){var e=this,a=this.$createElement,i=this.prefixClass;return a("div",{class:"".concat(i,"-datepicker-sidebar")},[this.renderSlot("sidebar",null,{value:this.currentValue,emit:this.handleSelectDate}),this.shortcuts.map(function(n,o){return a("button",{key:o,attrs:{"data-index":o,type:"button"},class:"".concat(i,"-btn ").concat(i,"-btn-text ").concat(i,"-btn-shortcut"),on:{click:e.handleSelectShortcut}},[n.text])})])},renderHeader:function(){var e=this.$createElement;return e("div",{class:"".concat(this.prefixClass,"-datepicker-header")},[this.renderSlot("header",null,{value:this.currentValue,emit:this.handleSelectDate})])},renderFooter:function(){var e=this.$createElement,a=this.prefixClass;return e("div",{class:"".concat(a,"-datepicker-footer")},[this.renderSlot("footer",null,{value:this.currentValue,emit:this.handleSelectDate}),this.confirm?e("button",{attrs:{type:"button"},class:"".concat(a,"-btn ").concat(a,"-datepicker-btn-confirm"),on:{click:this.handleConfirmDate}},[this.confirmText]):null])}},render:function(){var e,a=arguments[0],i=this.prefixClass,n=this.inline,o=this.disabled,s=this.hasSlot("sidebar")||this.shortcuts.length?this.renderSidebar():null,r=a("div",{class:"".concat(i,"-datepicker-content")},[this.hasSlot("header")?this.renderHeader():null,this.renderContent(),this.hasSlot("footer")||this.confirm?this.renderFooter():null]);return a("div",{class:(e={},tt(e,"".concat(i,"-datepicker"),!0),tt(e,"".concat(i,"-datepicker-range"),this.range),tt(e,"".concat(i,"-datepicker-inline"),n),tt(e,"disabled",o),e)},[n?null:this.renderInput(),n?a("div",{class:"".concat(i,"-datepicker-main")},[s,r]):a(nh,{ref:"popup",class:this.popupClass,style:this.popupStyle,attrs:{visible:this.popupVisible,appendToBody:this.appendToBody},on:{clickoutside:this.handleClickOutSide}},[s,r])])}};et.locale=Ur,et.install=function(e){e.component(et.name,et)},typeof window<"u"&&window.Vue&&et.install(window.Vue),Fn(et,{CalendarPanel:st,CalendarRange:Ut,TimePanel:La,TimeRange:zt,DatetimePanel:Xn,DatetimeRange:Wr}),ie($l);const hF={name:"CalendarBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var FF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon calendar-blank-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},uF=[],cF=ae(hF,FF,uF,!1,null,null);const mF=cF.exports,pF={name:"WebIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon web-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},TF=[],DF=ae(pF,bF,TF,!1,null,null);const yF=DF.exports,ns={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD H:mm:ss",year:"YYYY",month:"YYYY-MM",time:"H:mm:ss",week:"w"},EF={name:"NcDateTimePicker",components:{CalendarBlank:mF,DatePicker:et,NcPopover:Rn,NcTimezonePicker:Jf,Web:yF},inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{clearable:{type:Boolean,default:!1},minuteStep:{type:Number,default:10},type:{type:String,default:"date"},format:{type:String,default:null},formatter:{type:Object,default:null},lang:{type:Object,default:null},value:{default:void 0},modelValue:{default:()=>new Date},timezoneId:{type:String,default:"UTC"},showTimezoneSelect:{type:Boolean,default:!1},highlightTimezone:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},showWeekNumber:{type:Boolean,default:!1},placeholder:{type:String,default:null}},emits:["update:value","update:modelValue","update:model-value","update:timezone-id"],setup(){return{model:Va("value","update:value"),timezoneDialogHeaderId:`timezone-dialog-header-${rt()}`}},data(){return{showTimezonePopover:!1,tzVal:this.timezoneId}},computed:{defaultLang(){return{formatLocale:{months:ig(),monthsShort:ng(),weekdays:eg(),weekdaysShort:ag(),weekdaysMin:tg(),firstDayOfWeek:Xf()},monthFormat:"MMMM"}},defaultPlaceholder(){return this.type==="time"?j("Pick a time"):this.type==="month"?j("Pick a month"):this.type==="year"?j("Pick a year"):this.type==="week"?j("Pick a week"):this.type==="date"?j("Pick a date"):j("Pick a date and a time")},formatTypeMap(){return ns[this.type]??ns.date},internalFormatter(){return{getWeek:e=>{const a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));a.setUTCDate(a.getUTCDate()+4-(a.getUTCDay()||7));const i=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-i)/864e5+1)/7)},...this.formatter??{}}}},methods:{t:j,handleSelectYear(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setFullYear(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},handleSelectMonth(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setMonth(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},toggleTimezonePopover(){this.showTimezoneSelect&&(this.showTimezonePopover=!this.showTimezonePopover)}}};var kF=function(){var e=this,a=e._self._c;return a("DatePicker",e._g(e._b({ref:"datepicker",attrs:{"append-to-body":e.appendToBody,clearable:e.clearable,format:e.format?e.format:e.formatTypeMap,formatter:e.internalFormatter,lang:e.lang?e.lang:e.defaultLang,"minute-step":e.minuteStep,placeholder:e.placeholder?e.placeholder:e.defaultPlaceholder,"popup-class":{"show-week-number":e.showWeekNumber},"show-week-number":e.showWeekNumber,type:e.type,value:e.model},on:{"select-year":e.handleSelectYear,"select-month":e.handleSelectMonth,input:function(i){e.model=i}},scopedSlots:e._u([{key:"icon-calendar",fn:function(){return[e.showTimezoneSelect?a("NcPopover",{attrs:{"popup-role":"dialog",shown:e.showTimezonePopover,"popover-base-class":"timezone-select__popper"},on:{"update:shown":function(i){e.showTimezonePopover=i}},scopedSlots:e._u([{key:"trigger",fn:function({attrs:i}){return[a("button",e._b({staticClass:"datetime-picker-inline-icon",class:{"datetime-picker-inline-icon--highlighted":e.highlightTimezone},on:{mousedown:function(n){return n.stopPropagation(),n.preventDefault(),(()=>{}).apply(null,arguments)}}},"button",i,!1),[a("Web",{attrs:{size:20}})],1)]}}],null,!1,270852355)},[a("div",{attrs:{role:"dialog","aria-labelledby":e.timezoneDialogHeaderId}},[a("div",{staticClass:"timezone-popover-wrapper__label"},[a("strong",{attrs:{id:e.timezoneDialogHeaderId}},[e._v(" "+e._s(e.t("Please select a time zone:"))+" ")])]),a("NcTimezonePicker",{staticClass:"timezone-popover-wrapper__timezone-select",on:{input:function(i){return e.$emit("update:timezone-id",arguments[0])}},model:{value:e.tzVal,callback:function(i){e.tzVal=i},expression:"tzVal"}})],1)]):a("CalendarBlank",{attrs:{size:20}})]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"DatePicker",e.$attrs,!1),e.$listeners))},AF=[],wF=ae(EF,kF,AF,!1,null,"038f33af");const SF=wF.exports;qs(SF);const vF=["date","datetime-local","month","time","week"],RF={name:"NcDateTimePickerNative",inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{value:{type:Date,default:void 0},modelValue:{type:Date,default:null},id:{type:String,required:!0},type:{type:String,default:"date",validate:e=>vF.includes(e)},label:{type:String,default:"Please choose a date"},min:{type:[Date,Boolean],default:null},max:{type:[Date,Boolean],default:null},hideLabel:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["input","update:modelValue","update:model-value"],setup(){return{model:Va("value","input")}},computed:{formattedValue(){return this.formatValue(this.model)},formattedMin(){return this.min?this.formatValue(this.min):!1},formattedMax(){return this.max?this.formatValue(this.max):!1},listeners(){return{...this.$listeners,input:e=>{if(isNaN(e.target.valueAsNumber)&&(this.model=null),this.type==="time"){const n=e.target.value;if(this.model===""){const{yyyy:_,MM:l,dd:g}=this.getReadableDate(new Date);this.model=new Date(`${_}-${l}-${g}T${n}`)}const{yyyy:o,MM:s,dd:r}=this.getReadableDate(this.model);this.model=new Date(`${o}-${s}-${r}T${n}`)}else if(this.type==="month"){const n=(new Date(e.target.value).getMonth()+1).toString().padStart(2,"0");if(this.model===""){const{yyyy:l,dd:g,hh:d,mm:f}=this.getReadableDate(new Date);this.model=new Date(`${l}-${n}-${g}T${d}:${f}`)}const{yyyy:o,dd:s,hh:r,mm:_}=this.getReadableDate(this.model);this.model=new Date(`${o}-${n}-${s}T${r}:${_}`)}const a=new Date(e.target.valueAsNumber).getTimezoneOffset()*1e3*60,i=e.target.valueAsNumber+a;this.model=new Date(i)}}}},methods:{getReadableDate(e){if(e instanceof Date){const a=e.getFullYear().toString().padStart(4,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return{yyyy:a,MM:i,dd:n,hh:o,mm:s}}},formatValue(e){if(e instanceof Date){const{yyyy:a,MM:i,dd:n,hh:o,mm:s}=this.getReadableDate(e);if(this.type==="datetime-local")return`${a}-${i}-${n}T${o}:${s}`;if(this.type==="date")return`${a}-${i}-${n}`;if(this.type==="month")return`${a}-${i}`;if(this.type==="time")return`${o}:${s}`;if(this.type==="week"){const r=new Date(a,0,1),_=Math.floor((e-r)/(24*60*60*1e3)),l=Math.ceil(_/7);return`${a}-W${l}`}}else return""}}};var CF=function(){var e=this,a=e._self._c;return a("div",{staticClass:"native-datetime-picker"},[a("label",{class:{"hidden-visually":e.hideLabel},attrs:{for:e.id}},[e._v(e._s(e.label))]),a("input",e._g(e._b({staticClass:"native-datetime-picker--input",class:e.inputClass,attrs:{id:e.id,type:e.type,min:e.formattedMin,max:e.formattedMax},domProps:{value:e.formattedValue}},"input",e.$attrs,!1),e.listeners))])},NF=[],OF=ae(RF,CF,NF,!1,null,"ef10425f");const BF=OF.exports;qs(BF);const xF={name:"AlertCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var MF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon alert-circle-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},jF=[],YF=ae(xF,MF,jF,!1,null,null);const qF=YF.exports,LF={name:"NcInputField",components:{NcButton:$a,AlertCircle:qF,Check:On},inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{value:{type:[String,Number],default:void 0},modelValue:{type:[String,Number],default:void 0},type:{type:String,default:"text",validator:e=>["text","password","email","tel","url","search","number"].includes(e)},label:{type:String,default:void 0},labelOutside:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},showTrailingButton:{type:Boolean,default:!1},trailingButtonLabel:{type:String,default:""},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},helperText:{type:String,default:""},disabled:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["update:value","update:modelValue","update:model-value","trailing-button-click"],setup(){return{model:Va("value","update:value",!0)}},computed:{computedId(){return this.$attrs.id&&this.$attrs.id!==""?this.$attrs.id:this.inputName},inputName(){return"input"+rt()},hasLeadingIcon(){return this.$slots.default},hasTrailingIcon(){return this.success},hasPlaceholder(){return this.placeholder!==""&&this.placeholder!==void 0},computedPlaceholder(){return this.hasPlaceholder?this.placeholder:this.label},isValidLabel(){const e=this.label||this.labelOutside;return e||console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."),e},ariaDescribedby(){const e=[];return this.helperText.length>0&&e.push(`${this.inputName}-helper-text`),this.$attrs["aria-describedby"]&&e.push(this.$attrs["aria-describedby"]),e.join(" ")||null}},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},handleInput(e){const a=this.type==="number"&&typeof this.model=="number"?parseFloat(e.target.value,10):e.target.value;this.model=a},handleTrailingButtonClick(e){this.$emit("trailing-button-click",e)}}};var ZF=function(){var e=this,a=e._self._c;return a("div",{staticClass:"input-field",class:{"input-field--disabled":e.disabled,"input-field--label-outside":e.labelOutside||!e.isValidLabel,"input-field--leading-icon":e.hasLeadingIcon,"input-field--trailing-icon":e.showTrailingButton||e.hasTrailingIcon,"input-field--pill":e.pill}},[a("div",{staticClass:"input-field__main-wrapper"},[a("input",e._g(e._b({ref:"input",staticClass:"input-field__input",class:[e.inputClass,{"input-field__input--success":e.success,"input-field__input--error":e.error}],attrs:{id:e.computedId,type:e.type,disabled:e.disabled,placeholder:e.computedPlaceholder,"aria-describedby":e.ariaDescribedby,"aria-live":"polite"},domProps:{value:e.model?.toString()},on:{input:e.handleInput}},"input",e.$attrs,!1),e.$listeners)),!e.labelOutside&&e.isValidLabel?a("label",{staticClass:"input-field__label",attrs:{for:e.computedId}},[e._v(" "+e._s(e.label)+" ")]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLeadingIcon,expression:"hasLeadingIcon"}],staticClass:"input-field__icon input-field__icon--leading"},[e._t("default")],2),e.showTrailingButton?a("NcButton",{staticClass:"input-field__trailing-button",attrs:{type:"tertiary-no-background","aria-label":e.trailingButtonLabel,disabled:e.disabled},on:{click:e.handleTrailingButtonClick},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("trailing-button-icon")]},proxy:!0}],null,!0)}):e.success||e.error?a("div",{staticClass:"input-field__icon input-field__icon--trailing"},[e.success?a("Check",{staticStyle:{color:"var(--color-success-text)"},attrs:{size:20}}):e.error?a("AlertCircle",{staticStyle:{color:"var(--color-error-text)"},attrs:{size:20}}):e._e()],1):e._e()],1),e.helperText.length>0?a("p",{staticClass:"input-field__helper-text-message",class:{"input-field__helper-text-message--error":e.error,"input-field__helper-text-message--success":e.success},attrs:{id:`${e.inputName}-helper-text`}},[e.success?a("Check",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e.error?a("AlertCircle",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e._e(),e._v(" "+e._s(e.helperText)+" ")],1):e._e()])},IF=[],HF=ae(LF,ZF,IF,!1,null,"e4fac465");const Rt=HF.exports;var Se=(e=>(e[e.Debug=0]="Debug",e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error",e[e.Fatal=4]="Fatal",e))(Se||{}),PF=Object.defineProperty,GF=(e,a,i)=>a in e?PF(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,UF=(e,a,i)=>(GF(e,a+"",i),i);class zF{constructor(a){UF(this,"context"),this.context=a||{}}formatMessage(a,i,n){let o="["+Se[i].toUpperCase()+"] ";return n&&n.app&&(o+=n.app+": "),typeof a=="string"?o+a:(o+="Unexpected ".concat(a.name),a.message&&(o+=' "'.concat(a.message,'"')),i===Se.Debug&&a.stack&&(o+=`

Stack trace:
`.concat(a.stack)),o)}log(a,i,n){var o,s;if(!(typeof((o=this.context)==null?void 0:o.level)=="number"&&a<((s=this.context)==null?void 0:s.level)))switch(typeof i=="object"&&n?.error===void 0&&(n.error=i),a){case Se.Debug:console.debug(this.formatMessage(i,Se.Debug,n),n);break;case Se.Info:console.info(this.formatMessage(i,Se.Info,n),n);break;case Se.Warn:console.warn(this.formatMessage(i,Se.Warn,n),n);break;case Se.Error:console.error(this.formatMessage(i,Se.Error,n),n);break;case Se.Fatal:default:console.error(this.formatMessage(i,Se.Fatal,n),n);break}}debug(a,i){this.log(Se.Debug,a,Object.assign({},this.context,i))}info(a,i){this.log(Se.Info,a,Object.assign({},this.context,i))}warn(a,i){this.log(Se.Warn,a,Object.assign({},this.context,i))}error(a,i){this.log(Se.Error,a,Object.assign({},this.context,i))}fatal(a,i){this.log(Se.Fatal,a,Object.assign({},this.context,i))}}function WF(e){return new zF(e)}var $F=Object.defineProperty,VF=(e,a,i)=>a in e?$F(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,os=(e,a,i)=>(VF(e,typeof a!="symbol"?a+"":a,i),i);class QF{constructor(a){os(this,"context"),os(this,"factory"),this.context={},this.factory=a}setApp(a){return this.context.app=a,this}setLogLevel(a){return this.context.level=a,this}setUid(a){return this.context.uid=a,this}detectUser(){const a=Bi();return a!==null&&(this.context.uid=a.uid),this}detectLogLevel(){const a=this,i=()=>{var n,o;document.readyState==="complete"||document.readyState==="interactive"?(a.context.level=(o=(n=window._oc_config)==null?void 0:n.loglevel)!=null?o:Se.Warn,window._oc_debug&&(a.context.level=Se.Debug),document.removeEventListener("readystatechange",i)):document.addEventListener("readystatechange",i)};return i(),this}build(){return this.context.level===void 0&&this.detectLogLevel(),this.factory(this.context)}}function KF(){return new QF(WF)}const JF={name:"EyeIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var XF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},eu=[],au=ae(JF,XF,eu,!1,null,null);const tu=au.exports,iu={name:"EyeOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var nu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-off-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},ou=[],su=ae(iu,nu,ou,!1,null,null);const ru=su.exports;ie(Vl);const lu=KF().detectUser().setApp("@nextcloud/vue").build(),ss=Wt("core","capabilities",{}).password_policy||null,_u=new Set(Object.keys(Rt.props)),du={name:"NcPasswordField",components:{NcInputField:Rt,Eye:tu,EyeOff:ru},inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{" ":{},...Rt.props,showTrailingButton:{type:Boolean,default:!0},trailingButtonLabel:void 0,checkPasswordStrength:{type:Boolean,default:!1},minlength:{type:Number,default:0},maxlength:{type:Number,default:null},asText:{type:Boolean,default:!1}},emits:["valid","invalid","update:value","update:modelValue","update:model-value"],setup(){return{model:Va("value","update:value")}},data(){return{isPasswordHidden:!0,internalHelpMessage:"",isValid:null}},computed:{computedError(){return this.error||this.isValid===!1},computedSuccess(){return this.success||this.isValid===!0},computedHelperText(){return this.helperText.length>0?this.helperText:this.internalHelpMessage},rules(){const{minlength:e}=this;return{minlength:e??ss?.minLength}},trailingButtonLabelPassword(){return this.isPasswordHidden?j("Show password"):j("Hide password")},propsAndAttrsToForward(){return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([e])=>_u.has(e)))}}},watch:{model(e){if(this.checkPasswordStrength){if(ss===null)return;this.checkPassword(e)}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.model=e.target.value},togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden},checkPassword:Cn(async function(e){try{const{data:a}=await ma.post(Pa("apps/password_policy/api/v1/validate"),{password:e});if(this.isValid=a.ocs.data.passed,a.ocs.data.passed){this.internalHelpMessage=j("Password is secure"),this.$emit("valid");return}this.internalHelpMessage=a.ocs.data.reason,this.$emit("invalid")}catch(a){lu.error("Password policy returned an error",a)}},500)}};var fu=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",attrs:{type:e.isPasswordHidden&&!e.asText?"password":"text","trailing-button-label":e.trailingButtonLabelPassword,"helper-text":e.computedHelperText,error:e.computedError,success:e.computedSuccess,minlength:e.rules.minlength,"input-class":{"password-field__input--secure-text":e.isPasswordHidden&&e.asText}},on:{"trailing-button-click":e.togglePasswordVisibility,input:e.handleInput},scopedSlots:e._u([{key:"trailing-button-icon",fn:function(){return[e.isPasswordHidden?a("Eye",{attrs:{size:18}}):a("EyeOff",{attrs:{size:18}})]},proxy:!0}])},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},gu=[],hu=ae(du,fu,gu,!1,null,"ec73c332");const z2=hu.exports,Fu={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var uu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},cu=[],mu=ae(Fu,uu,cu,!1,null,null);const pu=mu.exports,bu={name:"UndoVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Tu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon undo-variant-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Du=[],yu=ae(bu,Tu,Du,!1,null,null);const Eu=yu.exports;ie(Ql,Ls);const ku=new Set(Object.keys(Rt.props)),Au={name:"NcTextField",components:{NcInputField:Rt,Close:vn,ArrowRight:pu,Undo:Eu},inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{" ":{},...Rt.props,trailingButtonLabel:{type:String,default:""},trailingButtonIcon:{type:String,default:"close",validator:e=>["close","arrowRight","undo"].includes(e)}},emits:["update:value","update:modelValue","update:model-value"],setup(){return{model:Va("value","update:value")}},computed:{propsAndAttrsToForward(){const e={undo:j("Undo changes"),close:j("Clear text"),arrowRight:j("Save changes")};return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([a])=>ku.has(a))),trailingButtonLabel:this.trailingButtonLabel||e[this.trailingButtonIcon]}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()}}};var wu=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",scopedSlots:e._u([e.type!=="search"?{key:"trailing-button-icon",fn:function(){return[e.trailingButtonIcon==="close"?a("Close",{attrs:{size:20}}):e.trailingButtonIcon==="arrowRight"?a("ArrowRight",{attrs:{size:20}}):e.trailingButtonIcon==="undo"?a("Undo",{attrs:{size:20}}):e._e()]},proxy:!0}:null],null,!0)},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},Su=[],vu=ae(Au,wu,Su,!1,null,null);const Ru=vu.exports;ie(Zs),I1,j("Submit");const Cu={name:"ArrowLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Nu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Ou=[],Bu=ae(Cu,Nu,Ou,!1,null,null);const $r=Bu.exports;ie(Kl),An("nextcloud").persist().build(),ie(Jl);const xu={name:"NcVNodes",props:{vnodes:{type:[Array,Object],default:null}},render(e){return this.vnodes||this.$slots?.default||this.$scopedSlots?.default?.()}},Mu=null,ju=null;var Yu=ae(xu,Mu,ju,!1,null,null);const W2=Yu.exports,qu={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Lu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-up-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Zu=[],Iu=ae(qu,Lu,Zu,!1,null,null);const Hu=Iu.exports;ie(Xl),ie(e1),ie(a1,Ls),ie(Is,t1);j("Search…");ie(n1);const Pu={name:"CogIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Gu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon cog-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Uu=[],zu=ae(Pu,Gu,Uu,!1,null,null);const $2=zu.exports;j("Settings"),ie(o1),Cn(function(){this.selectedSection="",document.activeElement.className.includes("navigation-list__link")&&document.activeElement.blur()},300);let Wu="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",$u=(e=21)=>{let a="",i=e;for(;i--;)a+=Wu[Math.random()*64|0];return a};function Si(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Si=function(a){return typeof a}:Si=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Si(e)}var Vr={selector:"vue-portal-target-".concat($u())},Vu=function(e){return Vr.selector=e},X0=typeof window<"u"&&(typeof document>"u"?"undefined":Si(document))!==void 0,Qu=ua.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var a=this.updatedNodes&&this.updatedNodes();return a?a.length===1&&!a[0].text?a:e(this.tag||"DIV",a):e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),Ku=ua.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(Vr.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var a=this.$scopedSlots&&this.$scopedSlots.default();return a?a.length<2&&!a[0].text?a:e(this.tag,a):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick(function(){!e.disabled&&e.slotFn!==e.$scopedSlots.default&&(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default})},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(X0)return document.querySelector(this.selector)},insertTargetEl:function(){if(X0){var e=document.querySelector("body"),a=document.createElement(this.tag);a.id=this.selector.substring(1),e.appendChild(a)}},mount:function(){if(X0){var e=this.getTargetEl(),a=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),this.container=new Qu({el:a,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function Ju(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.component(a.name||"portal",Ku),a.defaultSelector&&Vu(a.defaultSelector)}typeof window<"u"&&window.Vue&&window.Vue===ua&&ua.use(Ju),ie();const Xu={name:"NcEmptyContent",props:{name:{type:String,default:""},description:{type:String,default:""}},computed:{hasName(){return this.name!==""},hasDescription(){return this.description!==""||this.$slots.description?.[0]}}};var ec=function(){var e=this,a=e._self._c;return a("div",{staticClass:"empty-content",attrs:{role:"note"}},[e.$slots.icon?a("div",{staticClass:"empty-content__icon",attrs:{"aria-hidden":"true"}},[e._t("icon")],2):e._e(),e._t("name",function(){return[e.hasName?a("span",{staticClass:"empty-content__name"},[e._v(" "+e._s(e.name)+" ")]):e._e()]}),e.hasDescription?a("p",{staticClass:"empty-content__description"},[e._t("description",function(){return[e._v(" "+e._s(e.description)+" ")]})],2):e._e(),e.$slots.action?a("div",{staticClass:"empty-content__action"},[e._t("action")],2):e._e()],2)},ac=[],tc=ae(Xu,ec,ac,!1,null,"fede0c71");const eo=tc.exports;ie(s1),ie(r1),ie(l1);var Qr={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return function(i){function n(s){if(o[s])return o[s].exports;var r=o[s]={i:s,l:!1,exports:{}};return i[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=i,n.c=o,n.d=function(s,r,_){n.o(s,r)||Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:_})},n.n=function(s){var r=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(r,"a",r),r},n.o=function(s,r){return Object.prototype.hasOwnProperty.call(s,r)},n.p="",n(n.s=60)}([function(i,n){function o(r,_){var l=r[1]||"",g=r[3];if(!g)return l;if(_&&typeof btoa=="function"){var d=s(g);return[l].concat(g.sources.map(function(f){return"/*# sourceURL="+g.sourceRoot+f+" */"})).concat([d]).join(`
`)}return[l].join(`
`)}function s(r){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"}i.exports=function(r){var _=[];return _.toString=function(){return this.map(function(l){var g=o(l,r);return l[2]?"@media "+l[2]+"{"+g+"}":g}).join("")},_.i=function(l,g){typeof l=="string"&&(l=[[null,l,""]]);for(var d={},f=0;f<this.length;f++){var h=this[f][0];typeof h=="number"&&(d[h]=!0)}for(f=0;f<l.length;f++){var F=l[f];typeof F[0]=="number"&&d[F[0]]||(g&&!F[2]?F[2]=g:g&&(F[2]="("+F[2]+") and ("+g+")"),_.push(F))}},_}},function(i,n,o){function s(N){for(var I=0;I<N.length;I++){var U=N[I],G=h[U.id];if(G){G.refs++;for(var c=0;c<G.parts.length;c++)G.parts[c](U.parts[c]);for(;c<U.parts.length;c++)G.parts.push(_(U.parts[c]));G.parts.length>U.parts.length&&(G.parts.length=U.parts.length)}else{for(var v=[],c=0;c<U.parts.length;c++)v.push(_(U.parts[c]));h[U.id]={id:U.id,refs:1,parts:v}}}}function r(){var N=document.createElement("style");return N.type="text/css",F.appendChild(N),N}function _(N){var I,U,G=document.querySelector("style["+R+'~="'+N.id+'"]');if(G){if(E)return A;G.parentNode.removeChild(G)}if(Y){var c=b++;G=m||(m=r()),I=l.bind(null,G,c,!1),U=l.bind(null,G,c,!0)}else G=r(),I=g.bind(null,G),U=function(){G.parentNode.removeChild(G)};return I(N),function(v){if(v){if(v.css===N.css&&v.media===N.media&&v.sourceMap===N.sourceMap)return;I(N=v)}else U()}}function l(N,I,U,G){var c=U?"":G.css;if(N.styleSheet)N.styleSheet.cssText=Z(I,c);else{var v=document.createTextNode(c),C=N.childNodes;C[I]&&N.removeChild(C[I]),C.length?N.insertBefore(v,C[I]):N.appendChild(v)}}function g(N,I){var U=I.css,G=I.media,c=I.sourceMap;if(G&&N.setAttribute("media",G),w.ssrId&&N.setAttribute(R,I.id),c&&(U+=`
/*# sourceURL=`+c.sources[0]+" */",U+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),N.styleSheet)N.styleSheet.cssText=U;else{for(;N.firstChild;)N.removeChild(N.firstChild);N.appendChild(document.createTextNode(U))}}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=o(64),h={},F=d&&(document.head||document.getElementsByTagName("head")[0]),m=null,b=0,E=!1,A=function(){},w=null,R="data-vue-ssr-id",Y=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());i.exports=function(N,I,U,G){E=U,w=G||{};var c=f(N,I);return s(c),function(v){for(var C=[],O=0;O<c.length;O++){var W=c[O],q=h[W.id];q.refs--,C.push(q)}v?(c=f(N,v),s(c)):c=[];for(var O=0;O<C.length;O++){var q=C[O];if(q.refs===0){for(var te=0;te<q.parts.length;te++)q.parts[te]();delete h[q.id]}}}};var Z=function(){var N=[];return function(I,U){return N[I]=U,N.filter(Boolean).join(`
`)}}()},function(i,n){i.exports=function(o,s,r,_,l,g){var d,f=o=o||{},h=typeof o.default;h!=="object"&&h!=="function"||(d=o,f=o.default);var F=typeof f=="function"?f.options:f;s&&(F.render=s.render,F.staticRenderFns=s.staticRenderFns,F._compiled=!0),r&&(F.functional=!0),l&&(F._scopeId=l);var m;if(g?(m=function(A){A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,A||typeof __VUE_SSR_CONTEXT__>"u"||(A=__VUE_SSR_CONTEXT__),_&&_.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(g)},F._ssrRegister=m):_&&(m=_),m){var b=F.functional,E=b?F.render:F.beforeCreate;b?(F._injectStyles=m,F.render=function(A,w){return m.call(w),E(A,w)}):F.beforeCreate=E?[].concat(E,m):[m]}return{esModule:d,exports:f,options:F}}},function(i,n,o){function s(l,g){var d,f=l&&l.a;!(d=l&&l.hsl?(0,_.default)(l.hsl):l&&l.hex&&l.hex.length>0?(0,_.default)(l.hex):l&&l.hsv?(0,_.default)(l.hsv):l&&l.rgba?(0,_.default)(l.rgba):l&&l.rgb?(0,_.default)(l.rgb):(0,_.default)(l))||d._a!==void 0&&d._a!==null||d.setAlpha(f||1);var h=d.toHsl(),F=d.toHsv();return h.s===0&&(F.h=h.h=l.h||l.hsl&&l.hsl.h||g||0),{hsl:h,hex:d.toHexString().toUpperCase(),hex8:d.toHex8String().toUpperCase(),rgba:d.toRgb(),hsv:F,oldHue:l.h||g||h.h,source:l.source,a:l.a||d.getAlpha()}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(65),_=function(l){return l&&l.__esModule?l:{default:l}}(r);n.default={props:["value"],data:function(){return{val:s(this.value)}},computed:{colors:{get:function(){return this.val},set:function(l){this.val=l,this.$emit("input",l)}}},watch:{value:function(l){this.val=s(l)}},methods:{colorChange:function(l,g){this.oldHue=this.colors.hsl.h,this.colors=s(l,g||this.oldHue)},isValidHex:function(l){return(0,_.default)(l).isValid()},simpleCheckForValidColor:function(l){for(var g=["r","g","b","a","h","s","l","v"],d=0,f=0,h=0;h<g.length;h++){var F=g[h];l[F]&&(d++,isNaN(l[F])||f++)}if(d===f)return l},paletteUpperCase:function(l){return l.map(function(g){return g.toUpperCase()})},isTransparent:function(l){return(0,_.default)(l).getAlpha()===0}}}},function(i,n){var o=i.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},function(i,n,o){function s(F){o(66)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(36),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(68),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/EditableInput.vue",n.default=h.exports},function(i,n){var o={}.hasOwnProperty;i.exports=function(s,r){return o.call(s,r)}},function(i,n,o){var s=o(8),r=o(18);i.exports=o(9)?function(_,l,g){return s.f(_,l,r(1,g))}:function(_,l,g){return _[l]=g,_}},function(i,n,o){var s=o(16),r=o(42),_=o(25),l=Object.defineProperty;n.f=o(9)?Object.defineProperty:function(g,d,f){if(s(g),d=_(d,!0),s(f),r)try{return l(g,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported!");return"value"in f&&(g[d]=f.value),g}},function(i,n,o){i.exports=!o(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(90),r=o(24);i.exports=function(_){return s(r(_))}},function(i,n,o){var s=o(29)("wks"),r=o(19),_=o(4).Symbol,l=typeof _=="function";(i.exports=function(g){return s[g]||(s[g]=l&&_[g]||(l?_:r)("Symbol."+g))}).store=s},function(i,n){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},function(i,n,o){function s(F){o(111)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(51),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(113),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Hue.vue",n.default=h.exports},function(i,n){i.exports=!0},function(i,n){var o=i.exports={version:"2.6.11"};typeof __e=="number"&&(__e=o)},function(i,n,o){var s=o(12);i.exports=function(r){if(!s(r))throw TypeError(r+" is not an object!");return r}},function(i,n){i.exports=function(o){try{return!!o()}catch{return!0}}},function(i,n){i.exports=function(o,s){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:s}}},function(i,n){var o=0,s=Math.random();i.exports=function(r){return"Symbol(".concat(r===void 0?"":r,")_",(++o+s).toString(36))}},function(i,n,o){function s(F){o(123)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(54),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(127),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Saturation.vue",n.default=h.exports},function(i,n,o){function s(F){o(128)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(55),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(133),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Alpha.vue",n.default=h.exports},function(i,n,o){function s(F){o(130)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(56),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(132),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Checkboard.vue",n.default=h.exports},function(i,n){var o=Math.ceil,s=Math.floor;i.exports=function(r){return isNaN(r=+r)?0:(r>0?s:o)(r)}},function(i,n){i.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},function(i,n,o){var s=o(12);i.exports=function(r,_){if(!s(r))return r;var l,g;if(_&&typeof(l=r.toString)=="function"&&!s(g=l.call(r))||typeof(l=r.valueOf)=="function"&&!s(g=l.call(r))||!_&&typeof(l=r.toString)=="function"&&!s(g=l.call(r)))return g;throw TypeError("Can't convert object to primitive value")}},function(i,n){i.exports={}},function(i,n,o){var s=o(46),r=o(30);i.exports=Object.keys||function(_){return s(_,r)}},function(i,n,o){var s=o(29)("keys"),r=o(19);i.exports=function(_){return s[_]||(s[_]=r(_))}},function(i,n,o){var s=o(15),r=o(4),_=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(i.exports=function(l,g){return _[l]||(_[l]=g!==void 0?g:{})})("versions",[]).push({version:s.version,mode:o(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(i,n){i.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(i,n,o){var s=o(8).f,r=o(6),_=o(11)("toStringTag");i.exports=function(l,g,d){l&&!r(l=d?l:l.prototype,_)&&s(l,_,{configurable:!0,value:g})}},function(i,n,o){n.f=o(11)},function(i,n,o){var s=o(4),r=o(15),_=o(14),l=o(32),g=o(8).f;i.exports=function(d){var f=r.Symbol||(r.Symbol=_?{}:s.Symbol||{});d.charAt(0)=="_"||d in f||g(f,d,{value:l.f(d)})}},function(i,n){n.f={}.propertyIsEnumerable},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];n.default={name:"Compact",mixins:[_.default],props:{palette:{type:Array,default:function(){return d}}},components:{"ed-in":g.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(f){this.colorChange({hex:f,source:"hex"})}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(s){if(!(this.max!==void 0&&+s>this.max))return s;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(s){this.handleChange(s.target.value)},handleChange:function(s){var r={};r[this.label]=s,r.hex===void 0&&r["#"]===void 0?this.$emit("change",r):s.length>5&&this.$emit("change",r)},handleKeyDown:function(s){var r=this.val,_=Number(r);if(_){var l=this.arrowOffset||1;s.keyCode===38&&(r=_+l,this.handleChange(r),s.preventDefault()),s.keyCode===40&&(r=_-l,this.handleChange(r),s.preventDefault())}}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(3),r=function(l){return l&&l.__esModule?l:{default:l}}(s),_=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];n.default={name:"Grayscale",mixins:[r.default],props:{palette:{type:Array,default:function(){return _}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(l){this.colorChange({hex:l,source:"hex"})}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(5),_=s(r),l=o(3),g=s(l);n.default={name:"Material",mixins:[g.default],components:{"ed-in":_.default},methods:{onChange:function(d){d&&(d.hex?this.isValidHex(d.hex)&&this.colorChange({hex:d.hex,source:"hex"}):(d.r||d.g||d.b)&&this.colorChange({r:d.r||this.colors.rgba.r,g:d.g||this.colors.rgba.g,b:d.b||this.colors.rgba.b,a:d.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(81),_=s(r),l=o(3),g=s(l),d=o(13),f=s(d);n.default={name:"Slider",mixins:[g.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:f.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(h){return(h===void 0?"undefined":(0,_.default)(h))!=="object"?{s:.5,l:h}:h})}},methods:{isActive:function(h,F){var m=this.colors.hsl;return m.l===1&&h.l===1||m.l===0&&h.l===0||Math.abs(m.l-h.l)<.01&&Math.abs(m.s-h.s)<.01},hueChange:function(h){this.colorChange(h)},handleSwClick:function(h,F){this.colorChange({h:this.colors.hsl.h,s:F.s,l:F.l,source:"hsl"})}}}},function(i,n,o){var s=o(14),r=o(41),_=o(44),l=o(7),g=o(26),d=o(88),f=o(31),h=o(95),F=o(11)("iterator"),m=!([].keys&&"next"in[].keys()),b=function(){return this};i.exports=function(E,A,w,R,Y,Z,N){d(w,A,R);var I,U,G,c=function(_e){if(!m&&_e in W)return W[_e];switch(_e){case"keys":case"values":return function(){return new w(this,_e)}}return function(){return new w(this,_e)}},v=A+" Iterator",C=Y=="values",O=!1,W=E.prototype,q=W[F]||W["@@iterator"]||Y&&W[Y],te=q||c(Y),X=Y?C?c("entries"):te:void 0,ce=A=="Array"&&W.entries||q;if(ce&&(G=h(ce.call(new E)))!==Object.prototype&&G.next&&(f(G,v,!0),s||typeof G[F]=="function"||l(G,F,b)),C&&q&&q.name!=="values"&&(O=!0,te=function(){return q.call(this)}),s&&!N||!m&&!O&&W[F]||l(W,F,te),g[A]=te,g[v]=b,Y)if(I={values:C?te:c("values"),keys:Z?te:c("keys"),entries:X},N)for(U in I)U in W||_(W,U,I[U]);else r(r.P+r.F*(m||O),A,I);return I}},function(i,n,o){var s=o(4),r=o(15),_=o(86),l=o(7),g=o(6),d=function(f,h,F){var m,b,E,A=f&d.F,w=f&d.G,R=f&d.S,Y=f&d.P,Z=f&d.B,N=f&d.W,I=w?r:r[h]||(r[h]={}),U=I.prototype,G=w?s:R?s[h]:(s[h]||{}).prototype;w&&(F=h);for(m in F)(b=!A&&G&&G[m]!==void 0)&&g(I,m)||(E=b?G[m]:F[m],I[m]=w&&typeof G[m]!="function"?F[m]:Z&&b?_(E,s):N&&G[m]==E?function(c){var v=function(C,O,W){if(this instanceof c){switch(arguments.length){case 0:return new c;case 1:return new c(C);case 2:return new c(C,O)}return new c(C,O,W)}return c.apply(this,arguments)};return v.prototype=c.prototype,v}(E):Y&&typeof E=="function"?_(Function.call,E):E,Y&&((I.virtual||(I.virtual={}))[m]=E,f&d.R&&U&&!U[m]&&l(U,m,E)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,i.exports=d},function(i,n,o){i.exports=!o(9)&&!o(17)(function(){return Object.defineProperty(o(43)("div"),"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(12),r=o(4).document,_=s(r)&&s(r.createElement);i.exports=function(l){return _?r.createElement(l):{}}},function(i,n,o){i.exports=o(7)},function(i,n,o){var s=o(16),r=o(89),_=o(30),l=o(28)("IE_PROTO"),g=function(){},d=function(){var f,h=o(43)("iframe"),F=_.length;for(h.style.display="none",o(94).appendChild(h),h.src="javascript:",f=h.contentWindow.document,f.open(),f.write("<script>document.F=Object<\/script>"),f.close(),d=f.F;F--;)delete d.prototype[_[F]];return d()};i.exports=Object.create||function(f,h){var F;return f!==null?(g.prototype=s(f),F=new g,g.prototype=null,F[l]=f):F=d(),h===void 0?F:r(F,h)}},function(i,n,o){var s=o(6),r=o(10),_=o(91)(!1),l=o(28)("IE_PROTO");i.exports=function(g,d){var f,h=r(g),F=0,m=[];for(f in h)f!=l&&s(h,f)&&m.push(f);for(;d.length>F;)s(h,f=d[F++])&&(~_(m,f)||m.push(f));return m}},function(i,n){var o={}.toString;i.exports=function(s){return o.call(s).slice(8,-1)}},function(i,n,o){var s=o(24);i.exports=function(r){return Object(s(r))}},function(i,n){n.f=Object.getOwnPropertySymbols},function(i,n,o){var s=o(46),r=o(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(_){return s(_,r)}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var s=this.value.hsl.h;return s!==0&&s-this.oldHue>0&&(this.pullDirection="right"),s!==0&&s-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=s,this.value},directionClass:function(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop:function(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(s,r){!r&&s.preventDefault();var _=this.$refs.container;if(_){var l,g,d=_.clientWidth,f=_.clientHeight,h=_.getBoundingClientRect().left+window.pageXOffset,F=_.getBoundingClientRect().top+window.pageYOffset,m=s.pageX||(s.touches?s.touches[0].pageX:0),b=s.pageY||(s.touches?s.touches[0].pageY:0),E=m-h,A=b-F;this.direction==="vertical"?(A<0?l=360:A>f?l=0:(g=-100*A/f+100,l=360*g/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(E<0?l=0:E>d?l=360:(g=100*E/d,l=360*g/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(s){this.handleChange(s,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(s){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(F){return F&&F.__esModule?F:{default:F}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(118),_=s(r),l=o(3),g=s(l),d=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],f=["900","700","500","300","100"],h=function(){var F=[];return d.forEach(function(m){var b=[];m.toLowerCase()==="black"||m.toLowerCase()==="white"?b=b.concat(["#000000","#FFFFFF"]):f.forEach(function(E){var A=_.default[m][E];b.push(A.toUpperCase())}),F.push(b)}),F}();n.default={name:"Swatches",mixins:[g.default],props:{palette:{type:Array,default:function(){return h}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(F){return F.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(F){this.colorChange({hex:F,source:"hex"})}}}},function(i,n,o){function s(E){return E&&E.__esModule?E:{default:E}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),F=s(h),m=o(21),b=s(m);n.default={name:"Photoshop",mixins:[_.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:f.default,hue:F.default,alpha:b.default,"ed-in":g.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var E=this.colors.hsv;return{h:E.h.toFixed(),s:(100*E.s).toFixed(),v:(100*E.v).toFixed()}},hex:function(){var E=this.colors.hex;return E&&E.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(E){this.colorChange(E)},inputChange:function(E){E&&(E["#"]?this.isValidHex(E["#"])&&this.colorChange({hex:E["#"],source:"hex"}):E.r||E.g||E.b||E.a?this.colorChange({r:E.r||this.colors.rgba.r,g:E.g||this.colors.rgba.g,b:E.b||this.colors.rgba.b,a:E.a||this.colors.rgba.a,source:"rgba"}):(E.h||E.s||E.v)&&this.colorChange({h:E.h||this.colors.hsv.h,s:E.s/100||this.colors.hsv.s,v:E.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(125),_=s(r),l=o(126),g=s(l);n.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,g.default)(function(d,f){d(f)},20,{leading:!0,trailing:!1}),handleChange:function(d,f){!f&&d.preventDefault();var h=this.$refs.container;if(h){var F=h.clientWidth,m=h.clientHeight,b=h.getBoundingClientRect().left+window.pageXOffset,E=h.getBoundingClientRect().top+window.pageYOffset,A=d.pageX||(d.touches?d.touches[0].pageX:0),w=d.pageY||(d.touches?d.touches[0].pageY:0),R=(0,_.default)(A-b,0,F),Y=(0,_.default)(w-E,0,m),Z=R/F,N=(0,_.default)(-Y/m+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:Z,v:N,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(d){this.$emit("change",d)},handleMouseDown:function(d){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(d){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(22),r=function(_){return _&&_.__esModule?_:{default:_}}(s);n.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:r.default},computed:{colors:function(){return this.value},gradientColor:function(){var _=this.colors.rgba,l=[_.r,_.g,_.b].join(",");return"linear-gradient(to right, rgba("+l+", 0) 0%, rgba("+l+", 1) 100%)"}},methods:{handleChange:function(_,l){!l&&_.preventDefault();var g=this.$refs.container;if(g){var d,f=g.clientWidth,h=g.getBoundingClientRect().left+window.pageXOffset,F=_.pageX||(_.touches?_.touches[0].pageX:0),m=F-h;d=m<0?0:m>f?1:Math.round(100*m/f)/100,this.colors.a!==d&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:d,source:"rgba"})}},handleMouseDown:function(_){this.handleChange(_,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(l,g,d){if(typeof document>"u")return null;var f=document.createElement("canvas");f.width=f.height=2*d;var h=f.getContext("2d");return h?(h.fillStyle=l,h.fillRect(0,0,f.width,f.height),h.fillStyle=g,h.fillRect(0,0,d,d),h.translate(d,d),h.fillRect(0,0,d,d),f.toDataURL()):null}function r(l,g,d){var f=l+","+g+","+d;if(_[f])return _[f];var h=s(l,g,d);return _[f]=h,h}Object.defineProperty(n,"__esModule",{value:!0});var _={};n.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+r(this.white,this.grey,this.size)+")"}}}}},function(i,n,o){function s(R){return R&&R.__esModule?R:{default:R}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),F=s(h),m=o(21),b=s(m),E=o(22),A=s(E),w=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];n.default={name:"Sketch",mixins:[_.default],components:{saturation:f.default,hue:F.default,alpha:b.default,"ed-in":g.default,checkboard:A.default},props:{presetColors:{type:Array,default:function(){return w}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var R=void 0;return R=this.colors.a<1?this.colors.hex8:this.colors.hex,R.replace("#","")},activeColor:function(){var R=this.colors.rgba;return"rgba("+[R.r,R.g,R.b,R.a].join(",")+")"}},methods:{handlePreset:function(R){this.colorChange({hex:R,source:"hex"})},childChange:function(R){this.colorChange(R)},inputChange:function(R){R&&(R.hex?this.isValidHex(R.hex)&&this.colorChange({hex:R.hex,source:"hex"}):(R.r||R.g||R.b||R.a)&&this.colorChange({r:R.r||this.colors.rgba.r,g:R.g||this.colors.rgba.g,b:R.b||this.colors.rgba.b,a:R.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(w){return w&&w.__esModule?w:{default:w}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),F=s(h),m=o(21),b=s(m),E=o(22),A=s(E);n.default={name:"Chrome",mixins:[_.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:f.default,hue:F.default,alpha:b.default,"ed-in":g.default,checkboard:A.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var w=this.colors.hsl,R=w.h,Y=w.s,Z=w.l;return{h:R.toFixed(),s:(100*Y).toFixed()+"%",l:(100*Z).toFixed()+"%"}},activeColor:function(){var w=this.colors.rgba;return"rgba("+[w.r,w.g,w.b,w.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(w){this.colorChange(w)},inputChange:function(w){if(w){if(w.hex)this.isValidHex(w.hex)&&this.colorChange({hex:w.hex,source:"hex"});else if(w.r||w.g||w.b||w.a)this.colorChange({r:w.r||this.colors.rgba.r,g:w.g||this.colors.rgba.g,b:w.b||this.colors.rgba.b,a:w.a||this.colors.rgba.a,source:"rgba"});else if(w.h||w.s||w.l){var R=w.s?w.s.replace("%","")/100:this.colors.hsl.s,Y=w.l?w.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:w.h||this.colors.hsl.h,s:R,l:Y,source:"hsl"})}}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(5),_=s(r),l=o(3),g=s(l),d=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];n.default={name:"Twitter",mixins:[g.default],components:{editableInput:_.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return d}},triangle:{default:"top-left",validator:function(f){return["hide","top-left","top-right"].includes(f)}}},computed:{hsv:function(){var f=this.colors.hsv;return{h:f.h.toFixed(),s:(100*f.s).toFixed(),v:(100*f.v).toFixed()}},hex:function(){var f=this.colors.hex;return f&&f.replace("#","")}},methods:{equal:function(f){return f.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(f){this.colorChange({hex:f,source:"hex"})},inputChange:function(f){f&&(f["#"]?this.isValidHex(f["#"])&&this.colorChange({hex:f["#"],source:"hex"}):f.r||f.g||f.b||f.a?this.colorChange({r:f.r||this.colors.rgba.r,g:f.g||this.colors.rgba.g,b:f.b||this.colors.rgba.b,a:f.a||this.colors.rgba.a,source:"rgba"}):(f.h||f.s||f.v)&&this.colorChange({h:f.h||this.colors.hsv.h,s:f.s/100||this.colors.hsv.s,v:f.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(i,n,o){function s(Ee){return Ee&&Ee.__esModule?Ee:{default:Ee}}var r=o(61),_=s(r),l=o(70),g=s(l),d=o(74),f=s(d),h=o(78),F=s(h),m=o(115),b=s(m),E=o(120),A=s(E),w=o(135),R=s(w),Y=o(139),Z=s(Y),N=o(143),I=s(N),U=o(21),G=s(U),c=o(22),v=s(c),C=o(5),O=s(C),W=o(13),q=s(W),te=o(20),X=s(te),ce=o(3),_e=s(ce),be={version:"2.8.1",Compact:_.default,Grayscale:g.default,Twitter:I.default,Material:f.default,Slider:F.default,Swatches:b.default,Photoshop:A.default,Sketch:R.default,Chrome:Z.default,Alpha:G.default,Checkboard:v.default,EditableInput:O.default,Hue:q.default,Saturation:X.default,ColorMixin:_e.default};i.exports=be},function(i,n,o){function s(F){o(62)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(35),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(69),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Compact.vue",n.default=h.exports},function(i,n,o){var s=o(63);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("6ce8a5a8",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-compact {
  padding-top: 5px;
  padding-left: 5px;
  width: 245px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-compact-colors {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-compact-color-item {
  list-style: none;
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.vc-compact-color-item--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-compact-color-item--white .vc-compact-dot {
  background: #000;
}
.vc-compact-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`,""])},function(i,n){i.exports=function(o,s){for(var r=[],_={},l=0;l<s.length;l++){var g=s[l],d=g[0],f=g[1],h=g[2],F=g[3],m={id:o+":"+l,css:f,media:h,sourceMap:F};_[d]?_[d].parts.push(m):r.push(_[d]={id:d,parts:[m]})}return r}},function(i,n,o){var s;(function(r){function _(p,S){if(p=p||"",S=S||{},p instanceof _)return p;if(!(this instanceof _))return new _(p,S);var y=l(p);this._originalInput=p,this._r=y.r,this._g=y.g,this._b=y.b,this._a=y.a,this._roundA=J(100*this._a)/100,this._format=S.format||y.format,this._gradientType=S.gradientType,this._r<1&&(this._r=J(this._r)),this._g<1&&(this._g=J(this._g)),this._b<1&&(this._b=J(this._b)),this._ok=y.ok,this._tc_id=Pe++}function l(p){var S={r:0,g:0,b:0},y=1,L=null,Q=null,V=null,re=!1,ge=!1;return typeof p=="string"&&(p=Ie(p)),typeof p=="object"&&(ve(p.r)&&ve(p.g)&&ve(p.b)?(S=g(p.r,p.g,p.b),re=!0,ge=String(p.r).substr(-1)==="%"?"prgb":"rgb"):ve(p.h)&&ve(p.s)&&ve(p.v)?(L=Ee(p.s),Q=Ee(p.v),S=F(p.h,L,Q),re=!0,ge="hsv"):ve(p.h)&&ve(p.s)&&ve(p.l)&&(L=Ee(p.s),V=Ee(p.l),S=f(p.h,L,V),re=!0,ge="hsl"),p.hasOwnProperty("a")&&(y=p.a)),y=W(y),{ok:re,format:p.format||ge,r:Ae(255,le(S.r,0)),g:Ae(255,le(S.g,0)),b:Ae(255,le(S.b,0)),a:y}}function g(p,S,y){return{r:255*q(p,255),g:255*q(S,255),b:255*q(y,255)}}function d(p,S,y){p=q(p,255),S=q(S,255),y=q(y,255);var L,Q,V=le(p,S,y),re=Ae(p,S,y),ge=(V+re)/2;if(V==re)L=Q=0;else{var me=V-re;switch(Q=ge>.5?me/(2-V-re):me/(V+re),V){case p:L=(S-y)/me+(S<y?6:0);break;case S:L=(y-p)/me+2;break;case y:L=(p-S)/me+4}L/=6}return{h:L,s:Q,l:ge}}function f(p,S,y){function L(Ge,P,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?Ge+6*(P-Ge)*u:u<.5?P:u<2/3?Ge+(P-Ge)*(2/3-u)*6:Ge}var Q,V,re;if(p=q(p,360),S=q(S,100),y=q(y,100),S===0)Q=V=re=y;else{var ge=y<.5?y*(1+S):y+S-y*S,me=2*y-ge;Q=L(me,ge,p+1/3),V=L(me,ge,p),re=L(me,ge,p-1/3)}return{r:255*Q,g:255*V,b:255*re}}function h(p,S,y){p=q(p,255),S=q(S,255),y=q(y,255);var L,Q,V=le(p,S,y),re=Ae(p,S,y),ge=V,me=V-re;if(Q=V===0?0:me/V,V==re)L=0;else{switch(V){case p:L=(S-y)/me+(S<y?6:0);break;case S:L=(y-p)/me+2;break;case y:L=(p-S)/me+4}L/=6}return{h:L,s:Q,v:ge}}function F(p,S,y){p=6*q(p,360),S=q(S,100),y=q(y,100);var L=r.floor(p),Q=p-L,V=y*(1-S),re=y*(1-Q*S),ge=y*(1-(1-Q)*S),me=L%6;return{r:255*[y,re,V,V,ge,y][me],g:255*[ge,y,y,re,V,V][me],b:255*[V,V,ge,y,y,re][me]}}function m(p,S,y,L){var Q=[be(J(p).toString(16)),be(J(S).toString(16)),be(J(y).toString(16))];return L&&Q[0].charAt(0)==Q[0].charAt(1)&&Q[1].charAt(0)==Q[1].charAt(1)&&Q[2].charAt(0)==Q[2].charAt(1)?Q[0].charAt(0)+Q[1].charAt(0)+Q[2].charAt(0):Q.join("")}function b(p,S,y,L,Q){var V=[be(J(p).toString(16)),be(J(S).toString(16)),be(J(y).toString(16)),be(Fe(L))];return Q&&V[0].charAt(0)==V[0].charAt(1)&&V[1].charAt(0)==V[1].charAt(1)&&V[2].charAt(0)==V[2].charAt(1)&&V[3].charAt(0)==V[3].charAt(1)?V[0].charAt(0)+V[1].charAt(0)+V[2].charAt(0)+V[3].charAt(0):V.join("")}function E(p,S,y,L){return[be(Fe(L)),be(J(p).toString(16)),be(J(S).toString(16)),be(J(y).toString(16))].join("")}function A(p,S){S=S===0?0:S||10;var y=_(p).toHsl();return y.s-=S/100,y.s=te(y.s),_(y)}function w(p,S){S=S===0?0:S||10;var y=_(p).toHsl();return y.s+=S/100,y.s=te(y.s),_(y)}function R(p){return _(p).desaturate(100)}function Y(p,S){S=S===0?0:S||10;var y=_(p).toHsl();return y.l+=S/100,y.l=te(y.l),_(y)}function Z(p,S){S=S===0?0:S||10;var y=_(p).toRgb();return y.r=le(0,Ae(255,y.r-J(-S/100*255))),y.g=le(0,Ae(255,y.g-J(-S/100*255))),y.b=le(0,Ae(255,y.b-J(-S/100*255))),_(y)}function N(p,S){S=S===0?0:S||10;var y=_(p).toHsl();return y.l-=S/100,y.l=te(y.l),_(y)}function I(p,S){var y=_(p).toHsl(),L=(y.h+S)%360;return y.h=L<0?360+L:L,_(y)}function U(p){var S=_(p).toHsl();return S.h=(S.h+180)%360,_(S)}function G(p){var S=_(p).toHsl(),y=S.h;return[_(p),_({h:(y+120)%360,s:S.s,l:S.l}),_({h:(y+240)%360,s:S.s,l:S.l})]}function c(p){var S=_(p).toHsl(),y=S.h;return[_(p),_({h:(y+90)%360,s:S.s,l:S.l}),_({h:(y+180)%360,s:S.s,l:S.l}),_({h:(y+270)%360,s:S.s,l:S.l})]}function v(p){var S=_(p).toHsl(),y=S.h;return[_(p),_({h:(y+72)%360,s:S.s,l:S.l}),_({h:(y+216)%360,s:S.s,l:S.l})]}function C(p,S,y){S=S||6,y=y||30;var L=_(p).toHsl(),Q=360/y,V=[_(p)];for(L.h=(L.h-(Q*S>>1)+720)%360;--S;)L.h=(L.h+Q)%360,V.push(_(L));return V}function O(p,S){S=S||6;for(var y=_(p).toHsv(),L=y.h,Q=y.s,V=y.v,re=[],ge=1/S;S--;)re.push(_({h:L,s:Q,v:V})),V=(V+ge)%1;return re}function W(p){return p=parseFloat(p),(isNaN(p)||p<0||p>1)&&(p=1),p}function q(p,S){ce(p)&&(p="100%");var y=_e(p);return p=Ae(S,le(0,parseFloat(p))),y&&(p=parseInt(p*S,10)/100),r.abs(p-S)<1e-6?1:p%S/parseFloat(S)}function te(p){return Ae(1,le(0,p))}function X(p){return parseInt(p,16)}function ce(p){return typeof p=="string"&&p.indexOf(".")!=-1&&parseFloat(p)===1}function _e(p){return typeof p=="string"&&p.indexOf("%")!=-1}function be(p){return p.length==1?"0"+p:""+p}function Ee(p){return p<=1&&(p=100*p+"%"),p}function Fe(p){return r.round(255*parseFloat(p)).toString(16)}function Ve(p){return X(p)/255}function ve(p){return!!Ye.CSS_UNIT.exec(p)}function Ie(p){p=p.replace(Re,"").replace(De,"").toLowerCase();var S=!1;if(je[p])p=je[p],S=!0;else if(p=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var y;return(y=Ye.rgb.exec(p))?{r:y[1],g:y[2],b:y[3]}:(y=Ye.rgba.exec(p))?{r:y[1],g:y[2],b:y[3],a:y[4]}:(y=Ye.hsl.exec(p))?{h:y[1],s:y[2],l:y[3]}:(y=Ye.hsla.exec(p))?{h:y[1],s:y[2],l:y[3],a:y[4]}:(y=Ye.hsv.exec(p))?{h:y[1],s:y[2],v:y[3]}:(y=Ye.hsva.exec(p))?{h:y[1],s:y[2],v:y[3],a:y[4]}:(y=Ye.hex8.exec(p))?{r:X(y[1]),g:X(y[2]),b:X(y[3]),a:Ve(y[4]),format:S?"name":"hex8"}:(y=Ye.hex6.exec(p))?{r:X(y[1]),g:X(y[2]),b:X(y[3]),format:S?"name":"hex"}:(y=Ye.hex4.exec(p))?{r:X(y[1]+""+y[1]),g:X(y[2]+""+y[2]),b:X(y[3]+""+y[3]),a:Ve(y[4]+""+y[4]),format:S?"name":"hex8"}:!!(y=Ye.hex3.exec(p))&&{r:X(y[1]+""+y[1]),g:X(y[2]+""+y[2]),b:X(y[3]+""+y[3]),format:S?"name":"hex"}}function ue(p){var S,y;return p=p||{level:"AA",size:"small"},S=(p.level||"AA").toUpperCase(),y=(p.size||"small").toLowerCase(),S!=="AA"&&S!=="AAA"&&(S="AA"),y!=="small"&&y!=="large"&&(y="small"),{level:S,size:y}}var Re=/^\s+/,De=/\s+$/,Pe=0,J=r.round,Ae=r.min,le=r.max,Oe=r.random;_.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var p=this.toRgb();return(299*p.r+587*p.g+114*p.b)/1e3},getLuminance:function(){var p,S,y,L,Q,V,re=this.toRgb();return p=re.r/255,S=re.g/255,y=re.b/255,L=p<=.03928?p/12.92:r.pow((p+.055)/1.055,2.4),Q=S<=.03928?S/12.92:r.pow((S+.055)/1.055,2.4),V=y<=.03928?y/12.92:r.pow((y+.055)/1.055,2.4),.2126*L+.7152*Q+.0722*V},setAlpha:function(p){return this._a=W(p),this._roundA=J(100*this._a)/100,this},toHsv:function(){var p=h(this._r,this._g,this._b);return{h:360*p.h,s:p.s,v:p.v,a:this._a}},toHsvString:function(){var p=h(this._r,this._g,this._b),S=J(360*p.h),y=J(100*p.s),L=J(100*p.v);return this._a==1?"hsv("+S+", "+y+"%, "+L+"%)":"hsva("+S+", "+y+"%, "+L+"%, "+this._roundA+")"},toHsl:function(){var p=d(this._r,this._g,this._b);return{h:360*p.h,s:p.s,l:p.l,a:this._a}},toHslString:function(){var p=d(this._r,this._g,this._b),S=J(360*p.h),y=J(100*p.s),L=J(100*p.l);return this._a==1?"hsl("+S+", "+y+"%, "+L+"%)":"hsla("+S+", "+y+"%, "+L+"%, "+this._roundA+")"},toHex:function(p){return m(this._r,this._g,this._b,p)},toHexString:function(p){return"#"+this.toHex(p)},toHex8:function(p){return b(this._r,this._g,this._b,this._a,p)},toHex8String:function(p){return"#"+this.toHex8(p)},toRgb:function(){return{r:J(this._r),g:J(this._g),b:J(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+J(this._r)+", "+J(this._g)+", "+J(this._b)+")":"rgba("+J(this._r)+", "+J(this._g)+", "+J(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:J(100*q(this._r,255))+"%",g:J(100*q(this._g,255))+"%",b:J(100*q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+J(100*q(this._r,255))+"%, "+J(100*q(this._g,255))+"%, "+J(100*q(this._b,255))+"%)":"rgba("+J(100*q(this._r,255))+"%, "+J(100*q(this._g,255))+"%, "+J(100*q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Xe[m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(p){var S="#"+E(this._r,this._g,this._b,this._a),y=S,L=this._gradientType?"GradientType = 1, ":"";if(p){var Q=_(p);y="#"+E(Q._r,Q._g,Q._b,Q._a)}return"progid:DXImageTransform.Microsoft.gradient("+L+"startColorstr="+S+",endColorstr="+y+")"},toString:function(p){var S=!!p;p=p||this._format;var y=!1,L=this._a<1&&this._a>=0;return S||!L||p!=="hex"&&p!=="hex6"&&p!=="hex3"&&p!=="hex4"&&p!=="hex8"&&p!=="name"?(p==="rgb"&&(y=this.toRgbString()),p==="prgb"&&(y=this.toPercentageRgbString()),p!=="hex"&&p!=="hex6"||(y=this.toHexString()),p==="hex3"&&(y=this.toHexString(!0)),p==="hex4"&&(y=this.toHex8String(!0)),p==="hex8"&&(y=this.toHex8String()),p==="name"&&(y=this.toName()),p==="hsl"&&(y=this.toHslString()),p==="hsv"&&(y=this.toHsvString()),y||this.toHexString()):p==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return _(this.toString())},_applyModification:function(p,S){var y=p.apply(null,[this].concat([].slice.call(S)));return this._r=y._r,this._g=y._g,this._b=y._b,this.setAlpha(y._a),this},lighten:function(){return this._applyModification(Y,arguments)},brighten:function(){return this._applyModification(Z,arguments)},darken:function(){return this._applyModification(N,arguments)},desaturate:function(){return this._applyModification(A,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(R,arguments)},spin:function(){return this._applyModification(I,arguments)},_applyCombination:function(p,S){return p.apply(null,[this].concat([].slice.call(S)))},analogous:function(){return this._applyCombination(C,arguments)},complement:function(){return this._applyCombination(U,arguments)},monochromatic:function(){return this._applyCombination(O,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(G,arguments)},tetrad:function(){return this._applyCombination(c,arguments)}},_.fromRatio=function(p,S){if(typeof p=="object"){var y={};for(var L in p)p.hasOwnProperty(L)&&(y[L]=L==="a"?p[L]:Ee(p[L]));p=y}return _(p,S)},_.equals=function(p,S){return!(!p||!S)&&_(p).toRgbString()==_(S).toRgbString()},_.random=function(){return _.fromRatio({r:Oe(),g:Oe(),b:Oe()})},_.mix=function(p,S,y){y=y===0?0:y||50;var L=_(p).toRgb(),Q=_(S).toRgb(),V=y/100;return _({r:(Q.r-L.r)*V+L.r,g:(Q.g-L.g)*V+L.g,b:(Q.b-L.b)*V+L.b,a:(Q.a-L.a)*V+L.a})},_.readability=function(p,S){var y=_(p),L=_(S);return(r.max(y.getLuminance(),L.getLuminance())+.05)/(r.min(y.getLuminance(),L.getLuminance())+.05)},_.isReadable=function(p,S,y){var L,Q,V=_.readability(p,S);switch(Q=!1,L=ue(y),L.level+L.size){case"AAsmall":case"AAAlarge":Q=V>=4.5;break;case"AAlarge":Q=V>=3;break;case"AAAsmall":Q=V>=7}return Q},_.mostReadable=function(p,S,y){var L,Q,V,re,ge=null,me=0;y=y||{},Q=y.includeFallbackColors,V=y.level,re=y.size;for(var Ge=0;Ge<S.length;Ge++)(L=_.readability(p,S[Ge]))>me&&(me=L,ge=_(S[Ge]));return _.isReadable(p,ge,{level:V,size:re})||!Q?ge:(y.includeFallbackColors=!1,_.mostReadable(p,["#fff","#000"],y))};var je=_.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Xe=_.hexNames=function(p){var S={};for(var y in p)p.hasOwnProperty(y)&&(S[p[y]]=y);return S}(je),Ye=function(){var p="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",S="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?",y="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?";return{CSS_UNIT:new RegExp(p),rgb:new RegExp("rgb"+S),rgba:new RegExp("rgba"+y),hsl:new RegExp("hsl"+S),hsla:new RegExp("hsla"+y),hsv:new RegExp("hsv"+S),hsva:new RegExp("hsva"+y),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();i!==void 0&&i.exports?i.exports=_:(s=function(){return _}.call(n,o,n,i))!==void 0&&(i.exports=s)})(Math)},function(i,n,o){var s=o(67);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("0f73e73c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-editable-input {
  position: relative;
}
.vc-input__input {
  padding: 0;
  border: 0;
  outline: none;
}
.vc-input__label {
  text-transform: capitalize;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-editable-input"},[d("input",{directives:[{name:"model",rawName:"v-model",value:l.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":l.labelId},domProps:{value:l.val},on:{keydown:l.handleKeyDown,input:[function(f){f.target.composing||(l.val=f.target.value)},l.update]}}),l._v(" "),d("span",{staticClass:"vc-input__label",attrs:{for:l.label,id:l.labelId}},[l._v(l._s(l.labelSpanText))]),l._v(" "),d("span",{staticClass:"vc-input__desc"},[l._v(l._s(l.desc))])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[d("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},l._l(l.paletteUpperCase(l.palette),function(f){return d("li",{key:f,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":f==="#FFFFFF"},style:{background:f},attrs:{role:"option","aria-label":"color:"+f,"aria-selected":f===l.pick},on:{click:function(h){return l.handlerClick(f)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:f===l.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(71)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(37),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(73),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Grayscale.vue",n.default=h.exports},function(i,n,o){var s=o(72);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("21ddbb74",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-grayscale {
  width: 125px;
  border-radius: 2px;
  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-grayscale-colors {
  border-radius: 2px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-grayscale-color-item {
  list-style: none;
  width: 25px;
  height: 25px;
  float: left;
  position: relative;
  cursor: pointer;
}
.vc-grayscale-color-item--white .vc-grayscale-dot {
  background: #000;
}
.vc-grayscale-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -2px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[d("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},l._l(l.paletteUpperCase(l.palette),function(f){return d("li",{key:f,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":f=="#FFFFFF"},style:{background:f},attrs:{role:"option","aria-label":"Color:"+f,"aria-selected":f===l.pick},on:{click:function(h){return l.handlerClick(f)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:f===l.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(75)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(38),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(77),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Material.vue",n.default=h.exports},function(i,n,o){var s=o(76);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1ff3af73",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-material {
  width: 98px;
  height: 98px;
  padding: 16px;
  font-family: "Roboto";
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-material .vc-input__input {
  width: 100%;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
  height: 30px;
}
.vc-material .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 11px;
  color: #999;
  text-transform: capitalize;
}
.vc-material-hex {
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.vc-material-split {
  display: flex;
  margin-right: -10px;
  padding-top: 11px;
}
.vc-material-third {
  flex: 1;
  padding-right: 10px;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[d("ed-in",{staticClass:"vc-material-hex",style:{borderColor:l.colors.hex},attrs:{label:"hex"},on:{change:l.onChange},model:{value:l.colors.hex,callback:function(f){l.$set(l.colors,"hex",f)},expression:"colors.hex"}}),l._v(" "),d("div",{staticClass:"vc-material-split"},[d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"r"},on:{change:l.onChange},model:{value:l.colors.rgba.r,callback:function(f){l.$set(l.colors.rgba,"r",f)},expression:"colors.rgba.r"}})],1),l._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"g"},on:{change:l.onChange},model:{value:l.colors.rgba.g,callback:function(f){l.$set(l.colors.rgba,"g",f)},expression:"colors.rgba.g"}})],1),l._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"b"},on:{change:l.onChange},model:{value:l.colors.rgba.b,callback:function(f){l.$set(l.colors.rgba,"b",f)},expression:"colors.rgba.b"}})],1)])],1)},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(79)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(39),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(114),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Slider.vue",n.default=h.exports},function(i,n,o){var s=o(80);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7982aa43",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-slider {
  position: relative;
  width: 410px;
}
.vc-slider-hue-warp {
  height: 12px;
  position: relative;
}
.vc-slider-hue-warp .vc-hue-picker {
  width: 14px;
  height: 14px;
  border-radius: 6px;
  transform: translate(-7px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-slider-swatches {
  display: flex;
  margin-top: 20px;
}
.vc-slider-swatch {
  margin-right: 1px;
  flex: 1;
  width: 20%;
}
.vc-slider-swatch:first-child {
  margin-right: 1px;
}
.vc-slider-swatch:first-child .vc-slider-swatch-picker {
  border-radius: 2px 0px 0px 2px;
}
.vc-slider-swatch:last-child {
  margin-right: 0;
}
.vc-slider-swatch:last-child .vc-slider-swatch-picker {
  border-radius: 0px 2px 2px 0px;
}
.vc-slider-swatch-picker {
  cursor: pointer;
  height: 12px;
}
.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {
  transform: scaleY(1.8);
  border-radius: 3.6px/2px;
}
.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 0.6px #ddd;
}
`,""])},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}n.__esModule=!0;var r=o(82),_=s(r),l=o(100),g=s(l),d=typeof g.default=="function"&&typeof _.default=="symbol"?function(f){return typeof f}:function(f){return f&&typeof g.default=="function"&&f.constructor===g.default&&f!==g.default.prototype?"symbol":typeof f};n.default=typeof g.default=="function"&&d(_.default)==="symbol"?function(f){return f===void 0?"undefined":d(f)}:function(f){return f&&typeof g.default=="function"&&f.constructor===g.default&&f!==g.default.prototype?"symbol":f===void 0?"undefined":d(f)}},function(i,n,o){i.exports={default:o(83),__esModule:!0}},function(i,n,o){o(84),o(96),i.exports=o(32).f("iterator")},function(i,n,o){var s=o(85)(!0);o(40)(String,"String",function(r){this._t=String(r),this._i=0},function(){var r,_=this._t,l=this._i;return l>=_.length?{value:void 0,done:!0}:(r=s(_,l),this._i+=r.length,{value:r,done:!1})})},function(i,n,o){var s=o(23),r=o(24);i.exports=function(_){return function(l,g){var d,f,h=String(r(l)),F=s(g),m=h.length;return F<0||F>=m?_?"":void 0:(d=h.charCodeAt(F),d<55296||d>56319||F+1===m||(f=h.charCodeAt(F+1))<56320||f>57343?_?h.charAt(F):d:_?h.slice(F,F+2):f-56320+(d-55296<<10)+65536)}}},function(i,n,o){var s=o(87);i.exports=function(r,_,l){if(s(r),_===void 0)return r;switch(l){case 1:return function(g){return r.call(_,g)};case 2:return function(g,d){return r.call(_,g,d)};case 3:return function(g,d,f){return r.call(_,g,d,f)}}return function(){return r.apply(_,arguments)}}},function(i,n){i.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},function(i,n,o){var s=o(45),r=o(18),_=o(31),l={};o(7)(l,o(11)("iterator"),function(){return this}),i.exports=function(g,d,f){g.prototype=s(l,{next:r(1,f)}),_(g,d+" Iterator")}},function(i,n,o){var s=o(8),r=o(16),_=o(27);i.exports=o(9)?Object.defineProperties:function(l,g){r(l);for(var d,f=_(g),h=f.length,F=0;h>F;)s.f(l,d=f[F++],g[d]);return l}},function(i,n,o){var s=o(47);i.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return s(r)=="String"?r.split(""):Object(r)}},function(i,n,o){var s=o(10),r=o(92),_=o(93);i.exports=function(l){return function(g,d,f){var h,F=s(g),m=r(F.length),b=_(f,m);if(l&&d!=d){for(;m>b;)if((h=F[b++])!=h)return!0}else for(;m>b;b++)if((l||b in F)&&F[b]===d)return l||b||0;return!l&&-1}}},function(i,n,o){var s=o(23),r=Math.min;i.exports=function(_){return _>0?r(s(_),9007199254740991):0}},function(i,n,o){var s=o(23),r=Math.max,_=Math.min;i.exports=function(l,g){return l=s(l),l<0?r(l+g,0):_(l,g)}},function(i,n,o){var s=o(4).document;i.exports=s&&s.documentElement},function(i,n,o){var s=o(6),r=o(48),_=o(28)("IE_PROTO"),l=Object.prototype;i.exports=Object.getPrototypeOf||function(g){return g=r(g),s(g,_)?g[_]:typeof g.constructor=="function"&&g instanceof g.constructor?g.constructor.prototype:g instanceof Object?l:null}},function(i,n,o){o(97);for(var s=o(4),r=o(7),_=o(26),l=o(11)("toStringTag"),g="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),d=0;d<g.length;d++){var f=g[d],h=s[f],F=h&&h.prototype;F&&!F[l]&&r(F,l,f),_[f]=_.Array}},function(i,n,o){var s=o(98),r=o(99),_=o(26),l=o(10);i.exports=o(40)(Array,"Array",function(g,d){this._t=l(g),this._i=0,this._k=d},function(){var g=this._t,d=this._k,f=this._i++;return!g||f>=g.length?(this._t=void 0,r(1)):d=="keys"?r(0,f):d=="values"?r(0,g[f]):r(0,[f,g[f]])},"values"),_.Arguments=_.Array,s("keys"),s("values"),s("entries")},function(i,n){i.exports=function(){}},function(i,n){i.exports=function(o,s){return{value:s,done:!!o}}},function(i,n,o){i.exports={default:o(101),__esModule:!0}},function(i,n,o){o(102),o(108),o(109),o(110),i.exports=o(15).Symbol},function(i,n,o){var s=o(4),r=o(6),_=o(9),l=o(41),g=o(44),d=o(103).KEY,f=o(17),h=o(29),F=o(31),m=o(19),b=o(11),E=o(32),A=o(33),w=o(104),R=o(105),Y=o(16),Z=o(12),N=o(48),I=o(10),U=o(25),G=o(18),c=o(45),v=o(106),C=o(107),O=o(49),W=o(8),q=o(27),te=C.f,X=W.f,ce=v.f,_e=s.Symbol,be=s.JSON,Ee=be&&be.stringify,Fe=b("_hidden"),Ve=b("toPrimitive"),ve={}.propertyIsEnumerable,Ie=h("symbol-registry"),ue=h("symbols"),Re=h("op-symbols"),De=Object.prototype,Pe=typeof _e=="function"&&!!O.f,J=s.QObject,Ae=!J||!J.prototype||!J.prototype.findChild,le=_&&f(function(){return c(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a!=7})?function(P,u,T){var D=te(De,u);D&&delete De[u],X(P,u,T),D&&P!==De&&X(De,u,D)}:X,Oe=function(P){var u=ue[P]=c(_e.prototype);return u._k=P,u},je=Pe&&typeof _e.iterator=="symbol"?function(P){return typeof P=="symbol"}:function(P){return P instanceof _e},Xe=function(P,u,T){return P===De&&Xe(Re,u,T),Y(P),u=U(u,!0),Y(T),r(ue,u)?(T.enumerable?(r(P,Fe)&&P[Fe][u]&&(P[Fe][u]=!1),T=c(T,{enumerable:G(0,!1)})):(r(P,Fe)||X(P,Fe,G(1,{})),P[Fe][u]=!0),le(P,u,T)):X(P,u,T)},Ye=function(P,u){Y(P);for(var T,D=w(u=I(u)),k=0,M=D.length;M>k;)Xe(P,T=D[k++],u[T]);return P},p=function(P,u){return u===void 0?c(P):Ye(c(P),u)},S=function(P){var u=ve.call(this,P=U(P,!0));return!(this===De&&r(ue,P)&&!r(Re,P))&&(!(u||!r(this,P)||!r(ue,P)||r(this,Fe)&&this[Fe][P])||u)},y=function(P,u){if(P=I(P),u=U(u,!0),P!==De||!r(ue,u)||r(Re,u)){var T=te(P,u);return!T||!r(ue,u)||r(P,Fe)&&P[Fe][u]||(T.enumerable=!0),T}},L=function(P){for(var u,T=ce(I(P)),D=[],k=0;T.length>k;)r(ue,u=T[k++])||u==Fe||u==d||D.push(u);return D},Q=function(P){for(var u,T=P===De,D=ce(T?Re:I(P)),k=[],M=0;D.length>M;)!r(ue,u=D[M++])||T&&!r(De,u)||k.push(ue[u]);return k};Pe||(_e=function(){if(this instanceof _e)throw TypeError("Symbol is not a constructor!");var P=m(arguments.length>0?arguments[0]:void 0),u=function(T){this===De&&u.call(Re,T),r(this,Fe)&&r(this[Fe],P)&&(this[Fe][P]=!1),le(this,P,G(1,T))};return _&&Ae&&le(De,P,{configurable:!0,set:u}),Oe(P)},g(_e.prototype,"toString",function(){return this._k}),C.f=y,W.f=Xe,o(50).f=v.f=L,o(34).f=S,O.f=Q,_&&!o(14)&&g(De,"propertyIsEnumerable",S,!0),E.f=function(P){return Oe(b(P))}),l(l.G+l.W+l.F*!Pe,{Symbol:_e});for(var V="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;V.length>re;)b(V[re++]);for(var ge=q(b.store),me=0;ge.length>me;)A(ge[me++]);l(l.S+l.F*!Pe,"Symbol",{for:function(P){return r(Ie,P+="")?Ie[P]:Ie[P]=_e(P)},keyFor:function(P){if(!je(P))throw TypeError(P+" is not a symbol!");for(var u in Ie)if(Ie[u]===P)return u},useSetter:function(){Ae=!0},useSimple:function(){Ae=!1}}),l(l.S+l.F*!Pe,"Object",{create:p,defineProperty:Xe,defineProperties:Ye,getOwnPropertyDescriptor:y,getOwnPropertyNames:L,getOwnPropertySymbols:Q});var Ge=f(function(){O.f(1)});l(l.S+l.F*Ge,"Object",{getOwnPropertySymbols:function(P){return O.f(N(P))}}),be&&l(l.S+l.F*(!Pe||f(function(){var P=_e();return Ee([P])!="[null]"||Ee({a:P})!="{}"||Ee(Object(P))!="{}"})),"JSON",{stringify:function(P){for(var u,T,D=[P],k=1;arguments.length>k;)D.push(arguments[k++]);if(T=u=D[1],(Z(u)||P!==void 0)&&!je(P))return R(u)||(u=function(M,z){if(typeof T=="function"&&(z=T.call(this,M,z)),!je(z))return z}),D[1]=u,Ee.apply(be,D)}}),_e.prototype[Ve]||o(7)(_e.prototype,Ve,_e.prototype.valueOf),F(_e,"Symbol"),F(Math,"Math",!0),F(s.JSON,"JSON",!0)},function(i,n,o){var s=o(19)("meta"),r=o(12),_=o(6),l=o(8).f,g=0,d=Object.isExtensible||function(){return!0},f=!o(17)(function(){return d(Object.preventExtensions({}))}),h=function(A){l(A,s,{value:{i:"O"+ ++g,w:{}}})},F=function(A,w){if(!r(A))return typeof A=="symbol"?A:(typeof A=="string"?"S":"P")+A;if(!_(A,s)){if(!d(A))return"F";if(!w)return"E";h(A)}return A[s].i},m=function(A,w){if(!_(A,s)){if(!d(A))return!0;if(!w)return!1;h(A)}return A[s].w},b=function(A){return f&&E.NEED&&d(A)&&!_(A,s)&&h(A),A},E=i.exports={KEY:s,NEED:!1,fastKey:F,getWeak:m,onFreeze:b}},function(i,n,o){var s=o(27),r=o(49),_=o(34);i.exports=function(l){var g=s(l),d=r.f;if(d)for(var f,h=d(l),F=_.f,m=0;h.length>m;)F.call(l,f=h[m++])&&g.push(f);return g}},function(i,n,o){var s=o(47);i.exports=Array.isArray||function(r){return s(r)=="Array"}},function(i,n,o){var s=o(10),r=o(50).f,_={}.toString,l=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],g=function(d){try{return r(d)}catch{return l.slice()}};i.exports.f=function(d){return l&&_.call(d)=="[object Window]"?g(d):r(s(d))}},function(i,n,o){var s=o(34),r=o(18),_=o(10),l=o(25),g=o(6),d=o(42),f=Object.getOwnPropertyDescriptor;n.f=o(9)?f:function(h,F){if(h=_(h),F=l(F,!0),d)try{return f(h,F)}catch{}if(g(h,F))return r(!s.f.call(h,F),h[F])}},function(i,n){},function(i,n,o){o(33)("asyncIterator")},function(i,n,o){o(33)("observable")},function(i,n,o){var s=o(112);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7c5f1a1c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-hue {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 2px;
}
.vc-hue--horizontal {
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue--vertical {
  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue-container {
  cursor: pointer;
  margin: 0 2px;
  position: relative;
  height: 100%;
}
.vc-hue-pointer {
  z-index: 2;
  position: absolute;
}
.vc-hue-picker {
  cursor: pointer;
  margin-top: 1px;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  transform: translateX(-2px) ;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-hue",l.directionClass]},[d("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":l.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-hue-pointer",style:{top:l.pointerTop,left:l.pointerLeft},attrs:{role:"presentation"}},[d("div",{staticClass:"vc-hue-picker"})])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[d("div",{staticClass:"vc-slider-hue-warp"},[d("hue",{on:{change:l.hueChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},l._l(l.normalizedSwatches,function(f,h){return d("div",{key:h,staticClass:"vc-slider-swatch",attrs:{"data-index":h,"aria-label":"color:"+l.colors.hex,role:"button"},on:{click:function(F){return l.handleSwClick(h,f)}}},[d("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":l.isActive(f,h),"vc-slider-swatch-picker--white":f.l===1},style:{background:"hsl("+l.colors.hsl.h+", "+100*f.s+"%, "+100*f.l+"%)"}})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(116)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(52),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(119),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Swatches.vue",n.default=h.exports},function(i,n,o){var s=o(117);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("10f839a2",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-swatches {
  width: 320px;
  height: 240px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
}
.vc-swatches-box {
  padding: 16px 0 6px 16px;
  overflow: hidden;
}
.vc-swatches-color-group {
  padding-bottom: 10px;
  width: 40px;
  float: left;
  margin-right: 10px;
}
.vc-swatches-color-it {
  box-sizing: border-box;
  width: 40px;
  height: 24px;
  cursor: pointer;
  background: #880e4f;
  margin-bottom: 1px;
  overflow: hidden;
  -ms-border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -o-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  border-radius: 2px 2px 0 0;
}
.vc-swatches-color--white {
  border: 1px solid #DDD;
}
.vc-swatches-pick {
  fill: rgb(255, 255, 255);
  margin-left: 8px;
  display: block;
}
.vc-swatches-color--white .vc-swatches-pick {
  fill: rgb(51, 51, 51);
}
`,""])},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"red",function(){return s}),o.d(n,"pink",function(){return r}),o.d(n,"purple",function(){return _}),o.d(n,"deepPurple",function(){return l}),o.d(n,"indigo",function(){return g}),o.d(n,"blue",function(){return d}),o.d(n,"lightBlue",function(){return f}),o.d(n,"cyan",function(){return h}),o.d(n,"teal",function(){return F}),o.d(n,"green",function(){return m}),o.d(n,"lightGreen",function(){return b}),o.d(n,"lime",function(){return E}),o.d(n,"yellow",function(){return A}),o.d(n,"amber",function(){return w}),o.d(n,"orange",function(){return R}),o.d(n,"deepOrange",function(){return Y}),o.d(n,"brown",function(){return Z}),o.d(n,"grey",function(){return N}),o.d(n,"blueGrey",function(){return I}),o.d(n,"darkText",function(){return U}),o.d(n,"lightText",function(){return G}),o.d(n,"darkIcons",function(){return c}),o.d(n,"lightIcons",function(){return v}),o.d(n,"white",function(){return C}),o.d(n,"black",function(){return O});var s={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},r={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},_={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},l={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},g={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},d={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},f={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},h={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},F={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},m={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},b={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},E={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},A={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},w={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},R={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},Y={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},Z={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},N={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},I={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},U={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},G={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},c={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},v={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},C="#ffffff",O="#000000";n.default={red:s,pink:r,purple:_,deepPurple:l,indigo:g,blue:d,lightBlue:f,cyan:h,teal:F,green:m,lightGreen:b,lime:E,yellow:A,amber:w,orange:R,deepOrange:Y,brown:Z,grey:N,blueGrey:I,darkText:U,lightText:G,darkIcons:c,lightIcons:v,white:C,black:O}},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":l.pick}},[d("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},l._l(l.palette,function(f,h){return d("div",{key:h,staticClass:"vc-swatches-color-group"},l._l(f,function(F){return d("div",{key:F,class:["vc-swatches-color-it",{"vc-swatches-color--white":F==="#FFFFFF"}],style:{background:F},attrs:{role:"option","aria-label":"Color:"+F,"aria-selected":l.equal(F),"data-color":F},on:{click:function(m){return l.handlerClick(F)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:l.equal(F),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[d("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(121)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(53),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(134),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Photoshop.vue",n.default=h.exports},function(i,n,o){var s=o(122);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("080365d4",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-photoshop {
  background: #DCDCDC;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);
  box-sizing: initial;
  width: 513px;
  font-family: Roboto;
}
.vc-photoshop__disable-fields {
  width: 390px;
}
.vc-ps-head {
  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);
  border-bottom: 1px solid #B1B1B1;
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);
  height: 23px;
  line-height: 24px;
  border-radius: 4px 4px 0 0;
  font-size: 13px;
  color: #4D4D4D;
  text-align: center;
}
.vc-ps-body {
  padding: 15px;
  display: flex;
}
.vc-ps-saturation-wrap {
  width: 256px;
  height: 256px;
  position: relative;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
  overflow: hidden;
}
.vc-ps-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-ps-hue-wrap {
  position: relative;
  height: 256px;
  width: 19px;
  margin-left: 10px;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
}
.vc-ps-hue-pointer {
  position: relative;
}
.vc-ps-hue-pointer--left,
.vc-ps-hue-pointer--right {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 8px;
  border-color: transparent transparent transparent #555;
}
.vc-ps-hue-pointer--left:after,
.vc-ps-hue-pointer--right:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 1px;
  left: 1px;
  transform: translate(-8px, -5px);
}
.vc-ps-hue-pointer--left {
  transform: translate(-13px, -4px);
}
.vc-ps-hue-pointer--right {
  transform: translate(20px, -4px) rotate(180deg);
}
.vc-ps-controls {
  width: 180px;
  margin-left: 10px;
  display: flex;
}
.vc-ps-controls__disable-fields {
  width: auto;
}
.vc-ps-actions {
  margin-left: 20px;
  flex: 1;
}
.vc-ps-ac-btn {
  cursor: pointer;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);
  border: 1px solid #878787;
  border-radius: 2px;
  height: 20px;
  box-shadow: 0 1px 0 0 #EAEAEA;
  font-size: 14px;
  color: #000;
  line-height: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.vc-ps-previews {
  width: 60px;
}
.vc-ps-previews__swatches {
  border: 1px solid #B3B3B3;
  border-bottom: 1px solid #F0F0F0;
  margin-bottom: 2px;
  margin-top: 1px;
}
.vc-ps-previews__pr-color {
  height: 34px;
  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
}
.vc-ps-previews__label {
  font-size: 14px;
  color: #000;
  text-align: center;
}
.vc-ps-fields {
  padding-top: 5px;
  padding-bottom: 9px;
  width: 80px;
  position: relative;
}
.vc-ps-fields .vc-input__input {
  margin-left: 40%;
  width: 40%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 5px;
  font-size: 13px;
  padding-left: 3px;
  margin-right: 10px;
}
.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {
  top: 0;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
  position: absolute;
}
.vc-ps-fields .vc-input__label {
  left: 0;
  width: 34px;
}
.vc-ps-fields .vc-input__desc {
  right: 0;
  width: 0;
}
.vc-ps-fields__divider {
  height: 5px;
}
.vc-ps-fields__hex .vc-input__input {
  margin-left: 20%;
  width: 80%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 6px;
  font-size: 13px;
  padding-left: 3px;
}
.vc-ps-fields__hex .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
}
`,""])},function(i,n,o){var s=o(124);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("b5380e52",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-saturation,
.vc-saturation--white,
.vc-saturation--black {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vc-saturation--white {
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}
.vc-saturation--black {
  background: linear-gradient(to top, #000, rgba(0,0,0,0));
}
.vc-saturation-pointer {
  cursor: pointer;
  position: absolute;
}
.vc-saturation-circle {
  cursor: head;
  width: 4px;
  height: 4px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
  border-radius: 50%;
  transform: translate(-2px, -2px);
}
`,""])},function(i,n){function o(s,r,_){return r<_?s<r?r:s>_?_:s:s<_?_:s>r?r:s}i.exports=o},function(i,n){function o(c,v,C){function O(le){var Oe=Fe,je=Ve;return Fe=Ve=void 0,De=le,Ie=c.apply(je,Oe)}function W(le){return De=le,ue=setTimeout(X,v),Pe?O(le):Ie}function q(le){var Oe=le-Re,je=le-De,Xe=v-Oe;return J?U(Xe,ve-je):Xe}function te(le){var Oe=le-Re,je=le-De;return Re===void 0||Oe>=v||Oe<0||J&&je>=ve}function X(){var le=G();if(te(le))return ce(le);ue=setTimeout(X,q(le))}function ce(le){return ue=void 0,Ae&&Fe?O(le):(Fe=Ve=void 0,Ie)}function _e(){ue!==void 0&&clearTimeout(ue),De=0,Fe=Re=Ve=ue=void 0}function be(){return ue===void 0?Ie:ce(G())}function Ee(){var le=G(),Oe=te(le);if(Fe=arguments,Ve=this,Re=le,Oe){if(ue===void 0)return W(Re);if(J)return ue=setTimeout(X,v),O(Re)}return ue===void 0&&(ue=setTimeout(X,v)),Ie}var Fe,Ve,ve,Ie,ue,Re,De=0,Pe=!1,J=!1,Ae=!0;if(typeof c!="function")throw new TypeError(d);return v=g(v)||0,r(C)&&(Pe=!!C.leading,J="maxWait"in C,ve=J?I(g(C.maxWait)||0,v):ve,Ae="trailing"in C?!!C.trailing:Ae),Ee.cancel=_e,Ee.flush=be,Ee}function s(c,v,C){var O=!0,W=!0;if(typeof c!="function")throw new TypeError(d);return r(C)&&(O="leading"in C?!!C.leading:O,W="trailing"in C?!!C.trailing:W),o(c,v,{leading:O,maxWait:v,trailing:W})}function r(c){var v=typeof c;return!!c&&(v=="object"||v=="function")}function _(c){return!!c&&typeof c=="object"}function l(c){return typeof c=="symbol"||_(c)&&N.call(c)==h}function g(c){if(typeof c=="number")return c;if(l(c))return f;if(r(c)){var v=typeof c.valueOf=="function"?c.valueOf():c;c=r(v)?v+"":v}if(typeof c!="string")return c===0?c:+c;c=c.replace(F,"");var C=b.test(c);return C||E.test(c)?A(c.slice(2),C?2:8):m.test(c)?f:+c}var d="Expected a function",f=NaN,h="[object Symbol]",F=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,E=/^0o[0-7]+$/i,A=parseInt,w=typeof Ba=="object"&&Ba&&Ba.Object===Object&&Ba,R=typeof self=="object"&&self&&self.Object===Object&&self,Y=w||R||Function("return this")(),Z=Object.prototype,N=Z.toString,I=Math.max,U=Math.min,G=function(){return Y.Date.now()};i.exports=s},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{ref:"container",staticClass:"vc-saturation",style:{background:l.bgColor},on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-saturation--white"}),l._v(" "),d("div",{staticClass:"vc-saturation--black"}),l._v(" "),d("div",{staticClass:"vc-saturation-pointer",style:{top:l.pointerTop,left:l.pointerLeft}},[d("div",{staticClass:"vc-saturation-circle"})])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=o(129);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("4dc1b086",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-alpha {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-checkboard-wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}
.vc-alpha-gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-container {
  cursor: pointer;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 3px;
}
.vc-alpha-pointer {
  z-index: 2;
  position: absolute;
}
.vc-alpha-picker {
  cursor: pointer;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  margin-top: 1px;
  transform: translateX(-2px);
}
`,""])},function(i,n,o){var s=o(131);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7e15c05b",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-checkerboard {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: contain;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement;return(l._self._c||g)("div",{staticClass:"vc-checkerboard",style:l.bgStyle})},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-alpha"},[d("div",{staticClass:"vc-alpha-checkboard-wrap"},[d("checkboard")],1),l._v(" "),d("div",{staticClass:"vc-alpha-gradient",style:{background:l.gradientColor}}),l._v(" "),d("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-alpha-pointer",style:{left:100*l.colors.a+"%"}},[d("div",{staticClass:"vc-alpha-picker"})])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-photoshop",l.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[d("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[l._v(l._s(l.head))]),l._v(" "),d("div",{staticClass:"vc-ps-body"},[d("div",{staticClass:"vc-ps-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-ps-hue-wrap"},[d("hue",{attrs:{direction:"vertical"},on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}},[d("div",{staticClass:"vc-ps-hue-pointer"},[d("i",{staticClass:"vc-ps-hue-pointer--left"}),d("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),l._v(" "),d("div",{class:["vc-ps-controls",l.disableFields?"vc-ps-controls__disable-fields":""]},[d("div",{staticClass:"vc-ps-previews"},[d("div",{staticClass:"vc-ps-previews__label"},[l._v(l._s(l.newLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-previews__swatches"},[d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:l.colors.hex},attrs:{"aria-label":"New color is "+l.colors.hex}}),l._v(" "),d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:l.currentColor},attrs:{"aria-label":"Current color is "+l.currentColor},on:{click:l.clickCurrentColor}})]),l._v(" "),d("div",{staticClass:"vc-ps-previews__label"},[l._v(l._s(l.currentLabel))])]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-ps-actions"},[d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":l.acceptLabel},on:{click:l.handleAccept}},[l._v(l._s(l.acceptLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":l.cancelLabel},on:{click:l.handleCancel}},[l._v(l._s(l.cancelLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-fields"},[d("ed-in",{attrs:{label:"h",desc:"°",value:l.hsv.h},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"s",desc:"%",value:l.hsv.s,max:100},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"v",desc:"%",value:l.hsv.v,max:100},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),l._v(" "),d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),l._v(" "),d("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:l.hex},on:{change:l.inputChange}})],1),l._v(" "),l.hasResetButton?d("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:l.handleReset}},[l._v(l._s(l.resetLabel))]):l._e()])])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(136)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(57),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(138),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Sketch.vue",n.default=h.exports},function(i,n,o){var s=o(137);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("612c6604",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-sketch {
  position: relative;
  width: 200px;
  padding: 10px 10px 0;
  box-sizing: initial;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);
}
.vc-sketch-saturation-wrap {
  width: 100%;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
}
.vc-sketch-controls {
  display: flex;
}
.vc-sketch-sliders {
  padding: 4px 0;
  flex: 1;
}
.vc-sketch-sliders .vc-hue,
.vc-sketch-sliders .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-sketch-hue-wrap {
  position: relative;
  height: 10px;
}
.vc-sketch-alpha-wrap {
  position: relative;
  height: 10px;
  margin-top: 4px;
  overflow: hidden;
}
.vc-sketch-color-wrap {
  width: 24px;
  height: 24px;
  position: relative;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 3px;
}
.vc-sketch-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);
  z-index: 2;
}
.vc-sketch-color-wrap .vc-checkerboard {
  background-size: auto;
}
.vc-sketch-field {
  display: flex;
  padding-top: 4px;
}
.vc-sketch-field .vc-input__input {
  width: 90%;
  padding: 4px 0 3px 10%;
  border: none;
  box-shadow: inset 0 0 0 1px #ccc;
  font-size: 10px;
}
.vc-sketch-field .vc-input__label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #222;
  padding-top: 3px;
  padding-bottom: 4px;
  text-transform: capitalize;
}
.vc-sketch-field--single {
  flex: 1;
  padding-left: 6px;
}
.vc-sketch-field--double {
  flex: 2;
}
.vc-sketch-presets {
  margin-right: -10px;
  margin-left: -10px;
  padding-left: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
.vc-sketch-presets-color {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0 10px 10px 0;
  vertical-align: top;
  cursor: pointer;
  width: 16px;
  height: 16px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
}
.vc-sketch-presets-color .vc-checkerboard {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
  border-radius: 3px;
}
.vc-sketch__disable-alpha .vc-sketch-color-wrap {
  height: 10px;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-sketch",l.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[d("div",{staticClass:"vc-sketch-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-controls"},[d("div",{staticClass:"vc-sketch-sliders"},[d("div",{staticClass:"vc-sketch-hue-wrap"},[d("hue",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-sketch-alpha-wrap"},[d("alpha",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1)]),l._v(" "),d("div",{staticClass:"vc-sketch-color-wrap"},[d("div",{staticClass:"vc-sketch-active-color",style:{background:l.activeColor},attrs:{"aria-label":"Current color is "+l.activeColor}}),l._v(" "),d("checkboard")],1)]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-sketch-field"},[d("div",{staticClass:"vc-sketch-field--double"},[d("ed-in",{attrs:{label:"hex",value:l.hex},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[l._l(l.presetColors,function(f){return[l.isTransparent(f)?d("div",{key:f,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+f},on:{click:function(h){return l.handlePreset(f)}}},[d("checkboard")],1):d("div",{key:f,staticClass:"vc-sketch-presets-color",style:{background:f},attrs:{"aria-label":"Color:"+f},on:{click:function(h){return l.handlePreset(f)}}})]})],2)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(140)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(58),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(142),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Chrome.vue",n.default=h.exports},function(i,n,o){var s=o(141);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1cd16048",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-chrome {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);
  box-sizing: initial;
  width: 225px;
  font-family: Menlo;
  background-color: #fff;
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4px;
  margin-top: 12px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24px;
  height: 28px;
  background: #eee;
  border-radius: 4px;
  top: 10px;
  left: 12px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10px;
  margin-bottom: 8px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transform: translate(-6px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-chrome-body {
  padding: 16px 16px 12px;
  background-color: #fff;
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-chrome-fields .vc-input__input {
  font-size: 11px;
  color: #333;
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #dadada;
  height: 21px;
  text-align: center;
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  color: #969696;
  text-align: center;
  display: block;
  margin-top: 12px;
}
.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18px;
  height: 18px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4px;
  margin-bottom: 4px;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-chrome",l.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[d("div",{staticClass:"vc-chrome-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-body"},[d("div",{staticClass:"vc-chrome-controls"},[d("div",{staticClass:"vc-chrome-color-wrap"},[d("div",{staticClass:"vc-chrome-active-color",style:{background:l.activeColor},attrs:{"aria-label":"current color is "+l.colors.hex}}),l._v(" "),l.disableAlpha?l._e():d("checkboard")],1),l._v(" "),d("div",{staticClass:"vc-chrome-sliders"},[d("div",{staticClass:"vc-chrome-hue-wrap"},[d("hue",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-alpha-wrap"},[d("alpha",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1)])]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-chrome-fields-wrap"},[d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===0,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[l.hasAlpha?l._e():d("ed-in",{attrs:{label:"hex",value:l.colors.hex},on:{change:l.inputChange}}),l._v(" "),l.hasAlpha?d("ed-in",{attrs:{label:"hex",value:l.colors.hex8},on:{change:l.inputChange}}):l._e()],1)]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===1,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===2,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"h",value:l.hsl.h},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"s",value:l.hsl.s},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"l",value:l.hsl.l},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:l.toggleViews}},[d("div",{staticClass:"vc-chrome-toggle-icon"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:l.showHighlight,mouseenter:l.showHighlight,mouseout:l.hideHighlight}},[d("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(F){o(144)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(59),_=o.n(r);for(var l in r)l!=="default"&&function(F){o.d(n,F,function(){return r[F]})}(l);var g=o(146),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Twitter.vue",n.default=h.exports},function(i,n,o){var s=o(145);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("669a48a5",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
.vc-twitter {
  background: #fff;
  border: 0 solid rgba(0,0,0,0.25);
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  border-radius: 4px;
  position: relative;
}
.vc-twitter-triangle {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent #fff transparent;
  position: absolute;
}
.vc-twitter-triangle-shadow {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;
  position: absolute;
}
.vc-twitter-body {
  padding: 15px 9px 9px 15px;
}
.vc-twitter .vc-editable-input {
  position: relative;
}
.vc-twitter .vc-editable-input input {
  width: 100px;
  font-size: 14px;
  color: #666;
  border: 0px;
  outline: none;
  height: 28px;
  box-shadow: inset 0 0 0 1px #F0F0F0;
  box-sizing: content-box;
  border-radius: 0 4px 4px 0;
  float: left;
  padding: 1px;
  padding-left: 8px;
}
.vc-twitter .vc-editable-input span {
  display: none;
}
.vc-twitter-hash {
  background: #F0F0F0;
  height: 30px;
  width: 30px;
  border-radius: 4px 0 0 4px;
  float: left;
  color: #98A1A4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-twitter-swatch {
  width: 30px;
  height: 30px;
  float: left;
  border-radius: 4px;
  margin: 0 6px 6px 0;
  cursor: pointer;
  position: relative;
  outline: none;
}
.vc-twitter-clear {
  clear: both;
}
.vc-twitter-hide-triangle .vc-twitter-triangle {
  display: none;
}
.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {
  display: none;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle{
  top: -10px;
  left: 12px;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  left: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle{
  top: -10px;
  right: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  right: 12px;
}
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":l.triangle==="hide","vc-twitter-top-left-triangle ":l.triangle==="top-left","vc-twitter-top-right-triangle ":l.triangle==="top-right"},style:{width:typeof l.width=="number"?l.width+"px":l.width}},[d("div",{staticClass:"vc-twitter-triangle-shadow"}),l._v(" "),d("div",{staticClass:"vc-twitter-triangle"}),l._v(" "),d("div",{staticClass:"vc-twitter-body"},[l._l(l.defaultColors,function(f,h){return d("span",{key:h,staticClass:"vc-twitter-swatch",style:{background:f,boxShadow:"0 0 4px "+(l.equal(f)?f:"transparent")},on:{click:function(F){return l.handlerClick(f)}}})}),l._v(" "),d("div",{staticClass:"vc-twitter-hash"},[l._v("#")]),l._v(" "),d("editable-input",{attrs:{label:"#",value:l.hex},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-twitter-clear"})],2)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_}])})})(Qr);var ic=Qr.exports;ie(_1);const rs=/^#([a-f0-9]{3}|[a-f0-9]{6})$/i,nc={name:"NcColorPicker",components:{ArrowLeft:$r,Check:On,Chrome:ic.Chrome,DotsHorizontal:wn,NcButton:$a,NcPopover:Rn},model:{prop:"modelValue",event:"update:modelValue"},props:{value:{type:String,default:void 0},modelValue:{type:String,default:void 0},advancedFields:{type:Boolean,default:!1},paletteOnly:{type:Boolean,default:!1},palette:{type:Array,default:()=>[...$d],validator:e=>e.every(a=>typeof a=="string"&&rs.test(a)||typeof a=="object"&&a.color&&rs.test(a.color))},container:{type:[String,Object,Element,Boolean],default:"body"}},emits:["submit","close","update:open","update:value","update:modelValue","update:model-value","input"],setup(){return{model:Va("value","update:value",!0)}},data(){return{currentColor:this.model,advanced:!1,ariaBack:j("Back"),ariaMore:j("More options")}},computed:{normalizedPalette(){return this.palette.map(e=>({color:typeof e=="object"?e.color:e,name:typeof e=="object"&&e.name?e.name:j("A color with a HEX value {hex}",{hex:e.color})}))},uid(){return rt()},contrastColor(){return this.calculateLuma(this.currentColor)>.5?"#000000":"#FFFFFF"}},watch:{model(e){this.currentColor=e}},methods:{t:j,handleConfirm(){this.$emit("submit",this.currentColor),this.handleClose(),this.advanced=!1},handleClose(){this.$emit("close"),this.$emit("update:open",!1)},handleBack(){this.advanced=!1},handleMoreSettings(){this.advanced=!0},pickColor(e){typeof e!="string"&&(e=this.currentColor.hex),this.currentColor=e,this.model=e,this.$emit("input",e)},calculateLuma(e){const[a,i,n]=this.hexToRGB(e);return(.2126*a+.7152*i+.0722*n)/255},hexToRGB(e){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}}};var oc=function(){var e=this,a=e._self._c;return a("NcPopover",e._g(e._b({attrs:{"popup-role":"dialog",container:e.container},on:{"apply-hide":e.handleClose},scopedSlots:e._u([{key:"trigger",fn:function(i){return[e._t("default",null,null,i)]}}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[a("div",{staticClass:"color-picker",class:{"color-picker--advanced-fields":e.advanced&&e.advancedFields},attrs:{role:"dialog","aria-modal":"true","aria-label":e.t("Color picker")}},[a("Transition",{attrs:{name:"slide",mode:"out-in"}},[e.advanced?a("Chrome",{staticClass:"color-picker__advanced",attrs:{"disable-alpha":!0,"disable-fields":!e.advancedFields},on:{input:e.pickColor},model:{value:e.currentColor,callback:function(i){e.currentColor=i},expression:"currentColor"}}):a("div",{staticClass:"color-picker__simple"},e._l(e.normalizedPalette,function({color:i,name:n},o){return a("label",{key:o,staticClass:"color-picker__simple-color-circle",class:{"color-picker__simple-color-circle--active":i===e.currentColor},style:{backgroundColor:i}},[i===e.currentColor?a("Check",{attrs:{size:20,"fill-color":e.contrastColor}}):e._e(),a("input",{staticClass:"hidden-visually",attrs:{type:"radio","aria-label":n,name:`color-picker-${e.uid}`},domProps:{checked:i===e.currentColor},on:{click:function(s){return e.pickColor(i)}}})],1)}),0)],1),e.paletteOnly?e._e():a("div",{staticClass:"color-picker__navigation"},[e.advanced?a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaBack},on:{click:e.handleBack},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}):a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaMore},on:{click:e.handleMoreSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1056868794)}),a("NcButton",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v(" "+e._s(e.t("Choose"))+" ")])],1)],1)])},sc=[],rc=ae(nc,oc,sc,!1,null,"616dda05");const V2=rc.exports;ie(d1);const lc={name:"NcDashboardWidgetItem",components:{NcAvatar:Mr,NcActions:Ys,NcActionButton:L1},props:{id:{type:[String,Number],default:void 0},targetUrl:{type:String,default:void 0},avatarUrl:{type:String,default:void 0},avatarUsername:{type:String,default:void 0},avatarIsNoUser:{type:Boolean,default:!1},overlayIconUrl:{type:String,default:void 0},mainText:{type:String,required:!0},subText:{type:String,default:""},itemMenu:{type:Object,default:()=>({})},forceMenu:{type:Boolean,default:!0}},data(){return{hovered:!1}},computed:{item(){return{id:this.id,targetUrl:this.targetUrl,avatarUrl:this.avatarUrl,avatarUsername:this.avatarUsername,overlayIconUrl:this.overlayIconUrl,mainText:this.mainText,subText:this.subText}},gotMenu(){return Object.keys(this.itemMenu).length!==0||!!this.$slots.actions},gotOverlayIcon(){return this.overlayIconUrl&&this.overlayIconUrl!==""}},methods:{onLinkClick(e){e.target.closest(".action-item")&&e.preventDefault()}}};var _c=function(){var e=this,a=e._self._c;return a("div",{on:{mouseover:function(i){e.hovered=!0},mouseleave:function(i){e.hovered=!1}}},[a(e.targetUrl?"a":"div",{tag:"component",class:{"item-list__entry":!0,"item-list__entry--has-actions-menu":e.gotMenu},attrs:{href:e.targetUrl||void 0,target:e.targetUrl?"_blank":void 0},on:{click:e.onLinkClick}},[e._t("avatar",function(){return[a("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,url:e.avatarUrl,user:e.avatarUsername,"is-no-user":e.avatarIsNoUser,"show-user-status":!e.gotOverlayIcon}})]},{avatarUrl:e.avatarUrl,avatarUsername:e.avatarUsername}),e.overlayIconUrl?a("img",{staticClass:"item-icon",attrs:{alt:"",src:e.overlayIconUrl}}):e._e(),a("div",{staticClass:"item__details"},[a("h3",{attrs:{title:e.mainText}},[e._v(" "+e._s(e.mainText)+" ")]),e.subText!==""?a("span",{staticClass:"message",attrs:{title:e.subText}},[e._v(" "+e._s(e.subText)+" ")]):e._e()]),e.gotMenu?a("NcActions",{attrs:{"force-menu":e.forceMenu}},[e._t("actions",function(){return e._l(e.itemMenu,function(i,n){return a("NcActionButton",{key:n,attrs:{icon:i.icon,"close-after-click":!0},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.$emit(n,e.item)}}},[e._v(" "+e._s(i.text)+" ")])})})],2):e._e()],2)],1)},dc=[],fc=ae(lc,_c,dc,!1,null,"51bbc625");const Q2=fc.exports;ie(f1),On,j("More items …"),ie(g1),j("a few seconds ago"),j("seconds ago"),j("sec. ago");var Kr={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return function(){var i={661:function(){typeof window<"u"&&function(){for(var r=0,_=["ms","moz","webkit","o"],l=0;l<_.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[_[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[_[l]+"CancelAnimationFrame"]||window[_[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(g,d){var f=new Date().getTime(),h=Math.max(0,16-(f-r)),F=window.setTimeout(function(){g(f+h)},h);return r=f+h,F}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(g){clearTimeout(g)})}()}},n={};function o(r){var _=n[r];if(_!==void 0)return _.exports;var l=n[r]={exports:{}};return i[r](l,l.exports,o),l.exports}o.d=function(r,_){for(var l in _)o.o(_,l)&&!o.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:_[l]})},o.o=function(r,_){return Object.prototype.hasOwnProperty.call(r,_)},o.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var s={};return function(){o.r(s),o.d(s,{Anchors:function(){return C},Category:function(){return Xe},Emoji:function(){return je},EmojiData:function(){return ue},EmojiIndex:function(){return Ie},EmojiView:function(){return Re},Picker:function(){return P},Preview:function(){return p},Search:function(){return y},Skins:function(){return Ye},frequently:function(){return U},sanitize:function(){return De},store:function(){return h},uncompress:function(){return Y}});var r,_,l="emoji-mart",g=JSON,d=typeof window<"u"&&"localStorage"in window;function f(u,T){if(_)_(u,T);else{if(!d)return;try{window.localStorage["".concat(l,".").concat(u)]=g.stringify(T)}catch{}}}var h={update:function(u){for(var T in u)f(T,u[T])},set:f,get:function(u){if(r)return r(u);if(d){try{var T=window.localStorage["".concat(l,".").concat(u)]}catch{return}return T?JSON.parse(T):void 0}},setNamespace:function(u){l=u},setHandlers:function(u){u||(u={}),r=u.getter,_=u.setter}};function F(u){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},F(u)}function m(u,T){(T==null||T>u.length)&&(T=u.length);for(var D=0,k=new Array(T);D<T;D++)k[D]=u[D];return k}var b={name:"a",unified:"b",non_qualified:"c",has_img_apple:"d",has_img_google:"e",has_img_twitter:"f",has_img_facebook:"h",keywords:"j",sheet:"k",emoticons:"l",text:"m",short_names:"n",added_in:"o"},E=function(u){var T=[],D=function(k,M){k&&(Array.isArray(k)?k:[k]).forEach(function(z){(M?z.split(/[-|_|\s]+/):[z]).forEach(function($){$=$.toLowerCase(),T.indexOf($)==-1&&T.push($)})})};return D(u.short_names,!0),D(u.name,!0),D(u.keywords,!1),D(u.emoticons,!1),T.join(",")};function A(u){var T,D=function(z,$){var ee=typeof Symbol<"u"&&z[Symbol.iterator]||z["@@iterator"];if(!ee){if(Array.isArray(z)||(ee=function(Ce,Qa){if(Ce){if(typeof Ce=="string")return m(Ce,Qa);var _a=Object.prototype.toString.call(Ce).slice(8,-1);return _a==="Object"&&Ce.constructor&&(_a=Ce.constructor.name),_a==="Map"||_a==="Set"?Array.from(Ce):_a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_a)?m(Ce,Qa):void 0}}(z))||$){ee&&(z=ee);var ne=0,se=function(){};return{s:se,n:function(){return ne>=z.length?{done:!0}:{done:!1,value:z[ne++]}},e:function(Ce){throw Ce},f:se}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var we,gt=!0,ht=!1;return{s:function(){ee=ee.call(z)},n:function(){var Ce=ee.next();return gt=Ce.done,Ce},e:function(Ce){ht=!0,we=Ce},f:function(){try{gt||ee.return==null||ee.return()}finally{if(ht)throw we}}}}(Object.getOwnPropertyNames(u));try{for(D.s();!(T=D.n()).done;){var k=T.value,M=u[k];u[k]=M&&F(M)==="object"?A(M):M}}catch(z){D.e(z)}finally{D.f()}return Object.freeze(u)}var w,R,Y=function(u){if(!u.compressed)return u;for(var T in u.compressed=!1,u.emojis){var D=u.emojis[T];for(var k in b)D[k]=D[b[k]],delete D[b[k]];D.short_names||(D.short_names=[]),D.short_names.unshift(T),D.sheet_x=D.sheet[0],D.sheet_y=D.sheet[1],delete D.sheet,D.text||(D.text=""),D.added_in||(D.added_in=6),D.added_in=D.added_in.toFixed(1),D.search=E(D)}return A(u)},Z=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart","hankey"],N={};function I(){R=!0,w=h.get("frequently")}var U={add:function(u){R||I();var T=u.id;w||(w=N),w[T]||(w[T]=0),w[T]+=1,h.set("last",T),h.set("frequently",w)},get:function(u){if(R||I(),!w){N={};for(var T=[],D=Math.min(u,Z.length),k=0;k<D;k++)N[Z[k]]=parseInt((D-k)/4,10)+1,T.push(Z[k]);return T}var M=u,z=[];for(var $ in w)w.hasOwnProperty($)&&z.push($);var ee=z.sort(function(se,we){return w[se]-w[we]}).reverse().slice(0,M),ne=h.get("last");return ne&&ee.indexOf(ne)==-1&&(ee.pop(),ee.push(ne)),ee}},G={activity:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>',custom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2.000000, 1.000000)"><rect id="Rectangle" x="8" y="0" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect></g></svg>',flags:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>',foods:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>',nature:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>',objects:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>',smileys:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>',people:'<svg xmlns:svg="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"> <path id="path3814" d="m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z" /> <path id="path3816" d="M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z " /> </svg>',places:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>',recent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>',symbols:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'};function c(u,T,D,k,M,z,$,ee){var ne,se=typeof u=="function"?u.options:u;return T&&(se.render=T,se.staticRenderFns=D,se._compiled=!0),{exports:u,options:se}}var v=c({props:{i18n:{type:Object,required:!0},color:{type:String},categories:{type:Array,required:!0},activeCategory:{type:Object,default:function(){return{}}}},created:function(){this.svgs=G}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return D("div",{staticClass:"emoji-mart-anchors",attrs:{role:"tablist"}},u._l(u.categories,function(k){return D("button",{key:k.id,class:{"emoji-mart-anchor":!0,"emoji-mart-anchor-selected":k.id==u.activeCategory.id},style:{color:k.id==u.activeCategory.id?u.color:""},attrs:{role:"tab",type:"button","aria-label":k.name,"aria-selected":k.id==u.activeCategory.id,"data-title":u.i18n.categories[k.id]},on:{click:function(M){return u.$emit("click",k)}}},[D("div",{attrs:{"aria-hidden":"true"},domProps:{innerHTML:u._s(u.svgs[k.id])}}),u._v(" "),D("span",{staticClass:"emoji-mart-anchor-bar",style:{backgroundColor:u.color},attrs:{"aria-hidden":"true"}})])}),0)},[]),C=v.exports;function O(u,T){if(!(u instanceof T))throw new TypeError("Cannot call a class as a function")}function W(u,T){for(var D=0;D<T.length;D++){var k=T[D];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(u,k.key,k)}}function q(u,T,D){return T&&W(u.prototype,T),Object.defineProperty(u,"prototype",{writable:!1}),u}var te=String.fromCodePoint||function(){var u,T,D=[],k=-1,M=arguments.length;if(!M)return"";for(var z="";++k<M;){var $=Number(arguments[k]);if(!isFinite($)||$<0||$>1114111||Math.floor($)!=$)throw RangeError("Invalid code point: "+$);$<=65535?D.push($):(u=55296+(($-=65536)>>10),T=$%1024+56320,D.push(u,T)),(k+1===M||D.length>16384)&&(z+=String.fromCharCode.apply(null,D),D.length=0)}return z};function X(u){var T=u.split("-").map(function(D){return"0x".concat(D)});return te.apply(null,T)}function ce(u){return u.reduce(function(T,D){return T.indexOf(D)===-1&&T.push(D),T},[])}function _e(u,T){var D=ce(u),k=ce(T);return D.filter(function(M){return k.indexOf(M)>=0})}function be(u,T){var D={};for(var k in u){var M=u[k],z=M;T.hasOwnProperty(k)&&(z=T[k]),F(z)==="object"&&(z=be(M,z)),D[k]=z}return D}function Ee(u,T){var D=typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(!D){if(Array.isArray(u)||(D=function(ne,se){if(ne){if(typeof ne=="string")return Fe(ne,se);var we=Object.prototype.toString.call(ne).slice(8,-1);return we==="Object"&&ne.constructor&&(we=ne.constructor.name),we==="Map"||we==="Set"?Array.from(ne):we==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(we)?Fe(ne,se):void 0}}(u))||T){D&&(u=D);var k=0,M=function(){};return{s:M,n:function(){return k>=u.length?{done:!0}:{done:!1,value:u[k++]}},e:function(ne){throw ne},f:M}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z,$=!0,ee=!1;return{s:function(){D=D.call(u)},n:function(){var ne=D.next();return $=ne.done,ne},e:function(ne){ee=!0,z=ne},f:function(){try{$||D.return==null||D.return()}finally{if(ee)throw z}}}}function Fe(u,T){(T==null||T>u.length)&&(T=u.length);for(var D=0,k=new Array(T);D<T;D++)k[D]=u[D];return k}var Ve=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,ve=["1F3FA","1F3FB","1F3FC","1F3FD","1F3FE","1F3FF"],Ie=function(){function u(T){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=D.emojisToShowFilter,M=D.include,z=D.exclude,$=D.custom,ee=D.recent,ne=D.recentLength,se=ne===void 0?20:ne;O(this,u),this._data=Y(T),this._emojisFilter=k||null,this._include=M||null,this._exclude=z||null,this._custom=$||[],this._recent=ee||U.get(se),this._emojis={},this._nativeEmojis={},this._emoticons={},this._categories=[],this._recentCategory={id:"recent",name:"Recent",emojis:[]},this._customCategory={id:"custom",name:"Custom",emojis:[]},this._searchIndex={},this.buildIndex(),Object.freeze(this)}return q(u,[{key:"buildIndex",value:function(){var T=this,D=this._data.categories;if(this._include&&(D=(D=D.filter(function($){return T._include.includes($.id)})).sort(function($,ee){var ne=T._include.indexOf($.id),se=T._include.indexOf(ee.id);return ne<se?-1:ne>se?1:0})),D.forEach(function($){if(T.isCategoryNeeded($.id)){var ee={id:$.id,name:$.name,emojis:[]};$.emojis.forEach(function(ne){var se=T.addEmoji(ne);se&&ee.emojis.push(se)}),ee.emojis.length&&T._categories.push(ee)}}),this.isCategoryNeeded("custom")){if(this._custom.length>0){var k,M=Ee(this._custom);try{for(M.s();!(k=M.n()).done;){var z=k.value;this.addCustomEmoji(z)}}catch($){M.e($)}finally{M.f()}}this._customCategory.emojis.length&&this._categories.push(this._customCategory)}this.isCategoryNeeded("recent")&&(this._recent.length&&this._recent.map(function($){var ee,ne=Ee(T._customCategory.emojis);try{for(ne.s();!(ee=ne.n()).done;){var se=ee.value;if(se.id===$)return void T._recentCategory.emojis.push(se)}}catch(we){ne.e(we)}finally{ne.f()}T.hasEmoji($)&&T._recentCategory.emojis.push(T.emoji($))}),this._recentCategory.emojis.length&&this._categories.unshift(this._recentCategory))}},{key:"findEmoji",value:function(T,D){var k=T.match(Ve);if(k&&(T=k[1],k[2]&&(D=parseInt(k[2],10))),this._data.aliases.hasOwnProperty(T)&&(T=this._data.aliases[T]),this._emojis.hasOwnProperty(T)){var M=this._emojis[T];return D?M.getSkin(D):M}return this._nativeEmojis.hasOwnProperty(T)?this._nativeEmojis[T]:null}},{key:"categories",value:function(){return this._categories}},{key:"emoji",value:function(T){this._data.aliases.hasOwnProperty(T)&&(T=this._data.aliases[T]);var D=this._emojis[T];if(!D)throw new Error("Can not find emoji by id: "+T);return D}},{key:"firstEmoji",value:function(){var T=this._emojis[Object.keys(this._emojis)[0]];if(!T)throw new Error("Can not get first emoji");return T}},{key:"hasEmoji",value:function(T){return this._data.aliases.hasOwnProperty(T)&&(T=this._data.aliases[T]),!!this._emojis[T]}},{key:"nativeEmoji",value:function(T){return this._nativeEmojis.hasOwnProperty(T)?this._nativeEmojis[T]:null}},{key:"search",value:function(T,D){var k=this;if(D||(D=75),!T.length)return null;if(T=="-"||T=="-1")return[this.emoji("-1")];var M,z=T.toLowerCase().split(/[\s|,|\-|_]+/);z.length>2&&(z=[z[0],z[1]]),M=z.map(function(ee){for(var ne=k._emojis,se=k._searchIndex,we=0,gt=0;gt<ee.length;gt++){var ht=ee[gt];we++,se[ht]||(se[ht]={}),(se=se[ht]).results||function(){var Ce={};for(var Qa in se.results=[],se.emojis={},ne){var _a=ne[Qa],yl=_a._data.search,lo=ee.substr(0,we),_o=yl.indexOf(lo);if(_o!=-1){var fo=_o+1;lo==Qa&&(fo=0),se.results.push(_a),se.emojis[Qa]=_a,Ce[Qa]=fo}}se.results.sort(function(El,kl){return Ce[El.id]-Ce[kl.id]})}(),ne=se.emojis}return se.results}).filter(function(ee){return ee});var $=null;return($=M.length>1?_e.apply(null,M):M.length?M[0]:[])&&$.length>D&&($=$.slice(0,D)),$}},{key:"addCustomEmoji",value:function(T){var D=Object.assign({},T,{id:T.short_names[0],custom:!0});D.search||(D.search=E(D));var k=new ue(D);return this._emojis[k.id]=k,this._customCategory.emojis.push(k),k}},{key:"addEmoji",value:function(T){var D=this,k=this._data.emojis[T];if(!this.isEmojiNeeded(k))return!1;var M=new ue(k);if(this._emojis[T]=M,M.native&&(this._nativeEmojis[M.native]=M),M._skins)for(var z in M._skins){var $=M._skins[z];$.native&&(this._nativeEmojis[$.native]=$)}return M.emoticons&&M.emoticons.forEach(function(ee){D._emoticons[ee]||(D._emoticons[ee]=T)}),M}},{key:"isCategoryNeeded",value:function(T){var D=!this._include||!this._include.length||this._include.indexOf(T)>-1,k=!(!this._exclude||!this._exclude.length)&&this._exclude.indexOf(T)>-1;return!(!D||k)}},{key:"isEmojiNeeded",value:function(T){return!this._emojisFilter||this._emojisFilter(T)}}]),u}(),ue=function(){function u(T){if(O(this,u),this._data=Object.assign({},T),this._skins=null,this._data.skin_variations)for(var D in this._skins=[],ve){var k=ve[D],M=this._data.skin_variations[k],z=Object.assign({},T);for(var $ in M)z[$]=M[$];delete z.skin_variations,z.skin_tone=parseInt(D)+1,this._skins.push(new u(z))}for(var ee in this._sanitized=De(this._data),this._sanitized)this[ee]=this._sanitized[ee];this.short_names=this._data.short_names,this.short_name=this._data.short_names[0],Object.freeze(this)}return q(u,[{key:"getSkin",value:function(T){return T&&T!="native"&&this._skins?this._skins[T-1]:this}},{key:"getPosition",value:function(){var T=+(1.6666666666666667*this._data.sheet_x).toFixed(2),D=+(100/60*this._data.sheet_y).toFixed(2);return"".concat(T,"% ").concat(D,"%")}},{key:"ariaLabel",value:function(){return[this.native].concat(this.short_names).filter(Boolean).join(", ")}}]),u}(),Re=function(){function u(T,D,k,M,z,$,ee){O(this,u),this._emoji=T,this._native=M,this._skin=D,this._set=k,this._fallback=z,this.canRender=this._canRender(),this.cssClass=this._cssClass(),this.cssStyle=this._cssStyle(ee),this.content=this._content(),this.title=$===!0?T.short_name:null,this.ariaLabel=T.ariaLabel(),Object.freeze(this)}return q(u,[{key:"getEmoji",value:function(){return this._emoji.getSkin(this._skin)}},{key:"_canRender",value:function(){return this._isCustom()||this._isNative()||this._hasEmoji()||this._fallback}},{key:"_cssClass",value:function(){return["emoji-set-"+this._set,"emoji-type-"+this._emojiType()]}},{key:"_cssStyle",value:function(T){var D={};return this._isCustom()?D={backgroundImage:"url("+this.getEmoji()._data.imageUrl+")",backgroundSize:"100%",width:T+"px",height:T+"px"}:this._hasEmoji()&&!this._isNative()&&(D={backgroundPosition:this.getEmoji().getPosition()}),T&&(D=this._isNative()?Object.assign(D,{fontSize:Math.round(.95*T*10)/10+"px"}):Object.assign(D,{width:T+"px",height:T+"px"})),D}},{key:"_content",value:function(){return this._isCustom()?"":this._isNative()?this.getEmoji().native:this._hasEmoji()?"":this._fallback?this._fallback(this.getEmoji()):null}},{key:"_isNative",value:function(){return this._native}},{key:"_isCustom",value:function(){return this.getEmoji().custom}},{key:"_hasEmoji",value:function(){if(!this.getEmoji()._data)return!1;var T=this.getEmoji()._data["has_img_"+this._set];return T===void 0||T}},{key:"_emojiType",value:function(){return this._isCustom()?"custom":this._isNative()?"native":this._hasEmoji()?"image":"fallback"}}]),u}();function De(u){var T=u.name,D=u.short_names,k=u.skin_tone,M=u.skin_variations,z=u.emoticons,$=u.unified,ee=u.custom,ne=u.imageUrl,se=u.id||D[0],we=":".concat(se,":");return ee?{id:se,name:T,colons:we,emoticons:z,custom:ee,imageUrl:ne}:(k&&(we+=":skin-tone-".concat(k,":")),{id:se,name:T,colons:we,emoticons:z,unified:$.toLowerCase(),skin:k||(M?1:null),native:X($)})}function Pe(u,T,D){return T in u?Object.defineProperty(u,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):u[T]=D,u}var J={native:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},fallback:{type:Function},skin:{type:Number,default:1},set:{type:String,default:"apple"},emoji:{type:[String,Object],required:!0},size:{type:Number,default:null},tag:{type:String,default:"span"}},Ae={perLine:{type:Number,default:9},maxSearchResults:{type:Number,default:75},emojiSize:{type:Number,default:24},title:{type:String,default:"Emoji Mart™"},emoji:{type:String,default:"department_store"},color:{type:String,default:"#ae65c5"},set:{type:String,default:"apple"},skin:{type:Number,default:null},defaultSkin:{type:Number,default:1},native:{type:Boolean,default:!1},emojiTooltip:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},i18n:{type:Object,default:function(){return{}}},showPreview:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showCategories:{type:Boolean,default:!0},showSkinTones:{type:Boolean,default:!0},infiniteScroll:{type:Boolean,default:!0},pickerStyles:{type:Object,default:function(){return{}}}};function le(u,T){var D=Object.keys(u);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(u);T&&(k=k.filter(function(M){return Object.getOwnPropertyDescriptor(u,M).enumerable})),D.push.apply(D,k)}return D}function Oe(u){for(var T=1;T<arguments.length;T++){var D=arguments[T]!=null?arguments[T]:{};T%2?le(Object(D),!0).forEach(function(k){Pe(u,k,D[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(D)):le(Object(D)).forEach(function(k){Object.defineProperty(u,k,Object.getOwnPropertyDescriptor(D,k))})}return u}var je=c({props:Oe(Oe({},J),{},{data:{type:Object,required:!0}}),emits:["click","mouseenter","mouseleave"],computed:{view:function(){return new Re(this.emojiObject,this.skin,this.set,this.native,this.fallback,this.tooltip,this.size)},sanitizedData:function(){return this.emojiObject._sanitized},title:function(){return this.tooltip?this.emojiObject.short_name:null},emojiObject:function(){return typeof this.emoji=="string"?this.data.findEmoji(this.emoji):this.emoji}},created:function(){},methods:{onClick:function(){this.$emit("click",this.emojiObject)},onMouseEnter:function(){this.$emit("mouseenter",this.emojiObject)},onMouseLeave:function(){this.$emit("mouseleave",this.emojiObject)}}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return u.view.canRender?D(u.tag,{tag:"component",staticClass:"emoji-mart-emoji",attrs:{title:u.view.title,"aria-label":u.view.ariaLabel,"data-title":u.title},on:{mouseenter:u.onMouseEnter,mouseleave:u.onMouseLeave,click:u.onClick}},[D("span",{class:u.view.cssClass,style:u.view.cssStyle},[u._v(u._s(u.view.content))])]):u._e()},[]).exports,Xe=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},emojis:{type:Array},emojiProps:{type:Object,required:!0}},methods:{activeClass:function(u){return this.emojiProps.selectedEmoji&&this.emojiProps.selectedEmojiCategory&&this.emojiProps.selectedEmoji.id==u.id&&this.emojiProps.selectedEmojiCategory.id==this.id?"emoji-mart-emoji-selected":""}},computed:{isVisible:function(){return!!this.emojis},isSearch:function(){return this.name=="Search"},hasResults:function(){return this.emojis.length>0},emojiObjects:function(){var u=this;return this.emojis.map(function(T){return{emojiObject:T,emojiView:new Re(T,u.emojiProps.skin,u.emojiProps.set,u.emojiProps.native,u.emojiProps.fallback,u.emojiProps.emojiTooltip,u.emojiProps.emojiSize)}})}},components:{Emoji:je}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return u.isVisible&&(u.isSearch||u.hasResults)?D("section",{class:{"emoji-mart-category":!0,"emoji-mart-no-results":!u.hasResults},attrs:{"aria-label":u.i18n.categories[u.id]}},[D("div",{staticClass:"emoji-mart-category-label"},[D("h3",{staticClass:"emoji-mart-category-label"},[u._v(u._s(u.i18n.categories[u.id]))])]),u._v(" "),u._l(u.emojiObjects,function(k){var M=k.emojiObject,z=k.emojiView;return[z.canRender?D("button",{key:M.id,staticClass:"emoji-mart-emoji",class:u.activeClass(M),attrs:{"aria-label":z.ariaLabel,role:"option","aria-selected":"false","aria-posinset":"1","aria-setsize":"1812",type:"button","data-title":M.short_name,title:z.title},on:{mouseenter:function($){u.emojiProps.onEnter(z.getEmoji())},mouseleave:function($){u.emojiProps.onLeave(z.getEmoji())},click:function($){u.emojiProps.onClick(z.getEmoji())}}},[D("span",{class:z.cssClass,style:z.cssStyle},[u._v(u._s(z.content))])]):u._e()]}),u._v(" "),u.hasResults?u._e():D("div",[D("emoji",{attrs:{data:u.data,emoji:"sleuth_or_spy",native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}}),u._v(" "),D("div",{staticClass:"emoji-mart-no-results-label"},[u._v(u._s(u.i18n.notfound))])],1)],2):u._e()},[]).exports,Ye=c({props:{skin:{type:Number,required:!0}},data:function(){return{opened:!1}},methods:{onClick:function(u){this.opened&&u!=this.skin&&this.$emit("change",u),this.opened=!this.opened}}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return D("div",{class:{"emoji-mart-skin-swatches":!0,"emoji-mart-skin-swatches-opened":u.opened}},u._l(6,function(k){return D("span",{key:k,class:{"emoji-mart-skin-swatch":!0,"emoji-mart-skin-swatch-selected":u.skin==k}},[D("span",{class:"emoji-mart-skin emoji-mart-skin-tone-"+k,on:{click:function(M){return u.onClick(k)}}})])}),0)},[]).exports,p=c({props:{data:{type:Object,required:!0},title:{type:String,required:!0},emoji:{type:[String,Object]},idleEmoji:{type:[String,Object],required:!0},showSkinTones:{type:Boolean,default:!0},emojiProps:{type:Object,required:!0},skinProps:{type:Object,required:!0},onSkinChange:{type:Function,required:!0}},computed:{emojiData:function(){return this.emoji?this.emoji:{}},emojiShortNames:function(){return this.emojiData.short_names},emojiEmoticons:function(){return this.emojiData.emoticons}},components:{Emoji:je,Skins:Ye}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return D("div",{staticClass:"emoji-mart-preview"},[u.emoji?[D("div",{staticClass:"emoji-mart-preview-emoji"},[D("emoji",{attrs:{data:u.data,emoji:u.emoji,native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}})],1),u._v(" "),D("div",{staticClass:"emoji-mart-preview-data"},[D("div",{staticClass:"emoji-mart-preview-name"},[u._v(u._s(u.emoji.name))]),u._v(" "),D("div",{staticClass:"emoji-mart-preview-shortnames"},u._l(u.emojiShortNames,function(k){return D("span",{key:k,staticClass:"emoji-mart-preview-shortname"},[u._v(":"+u._s(k)+":")])}),0),u._v(" "),D("div",{staticClass:"emoji-mart-preview-emoticons"},u._l(u.emojiEmoticons,function(k){return D("span",{key:k,staticClass:"emoji-mart-preview-emoticon"},[u._v(u._s(k))])}),0)])]:[D("div",{staticClass:"emoji-mart-preview-emoji"},[D("emoji",{attrs:{data:u.data,emoji:u.idleEmoji,native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}})],1),u._v(" "),D("div",{staticClass:"emoji-mart-preview-data"},[D("span",{staticClass:"emoji-mart-title-label"},[u._v(u._s(u.title))])]),u._v(" "),u.showSkinTones?D("div",{staticClass:"emoji-mart-preview-skins"},[D("skins",{attrs:{skin:u.skinProps.skin},on:{change:function(k){return u.onSkinChange(k)}}})],1):u._e()]],2)},[]).exports,S=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},autoFocus:{type:Boolean,default:!1},onSearch:{type:Function,required:!0},onArrowLeft:{type:Function,required:!1},onArrowRight:{type:Function,required:!1},onArrowDown:{type:Function,required:!1},onArrowUp:{type:Function,required:!1},onEnter:{type:Function,required:!1}},data:function(){return{value:""}},computed:{emojiIndex:function(){return this.data}},watch:{value:function(){this.$emit("search",this.value)}},methods:{clear:function(){this.value=""}},mounted:function(){var u=this.$el.querySelector("input");this.autoFocus&&u.focus()}},function(){var u=this,T=u.$createElement,D=u._self._c||T;return D("div",{staticClass:"emoji-mart-search"},[D("input",{directives:[{name:"model",rawName:"v-model",value:u.value,expression:"value"}],attrs:{type:"text",placeholder:u.i18n.search,role:"textbox","aria-autocomplete":"list","aria-owns":"emoji-mart-list","aria-label":"Search for an emoji","aria-describedby":"emoji-mart-search-description"},domProps:{value:u.value},on:{keydown:[function(k){return!k.type.indexOf("key")&&u._k(k.keyCode,"left",37,k.key,["Left","ArrowLeft"])||"button"in k&&k.button!==0?null:function(M){return u.$emit("arrowLeft",M)}.apply(null,arguments)},function(k){return!k.type.indexOf("key")&&u._k(k.keyCode,"right",39,k.key,["Right","ArrowRight"])||"button"in k&&k.button!==2?null:function(){return u.$emit("arrowRight")}.apply(null,arguments)},function(k){return!k.type.indexOf("key")&&u._k(k.keyCode,"down",40,k.key,["Down","ArrowDown"])?null:function(){return u.$emit("arrowDown")}.apply(null,arguments)},function(k){return!k.type.indexOf("key")&&u._k(k.keyCode,"up",38,k.key,["Up","ArrowUp"])?null:function(M){return u.$emit("arrowUp",M)}.apply(null,arguments)},function(k){return!k.type.indexOf("key")&&u._k(k.keyCode,"enter",13,k.key,"Enter")?null:function(){return u.$emit("enter")}.apply(null,arguments)}],input:function(k){k.target.composing||(u.value=k.target.value)}}}),u._v(" "),D("span",{staticClass:"hidden",attrs:{id:"emoji-picker-search-description"}},[u._v(`Use the left, right, up and down arrow keys to navigate the emoji search
    results.`)])])},[]),y=S.exports;function L(u,T){(T==null||T>u.length)&&(T=u.length);for(var D=0,k=new Array(T);D<T;D++)k[D]=u[D];return k}o(661);var Q=function(){function u(T){var D,k;O(this,u),this._vm=T,this._data=T.data,this._perLine=T.perLine,this._categories=[],(D=this._categories).push.apply(D,function(M){if(Array.isArray(M))return L(M)}(k=this._data.categories())||function(M){if(typeof Symbol<"u"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}(k)||function(M,z){if(M){if(typeof M=="string")return L(M,z);var $=Object.prototype.toString.call(M).slice(8,-1);return $==="Object"&&M.constructor&&($=M.constructor.name),$==="Map"||$==="Set"?Array.from(M):$==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($)?L(M,z):void 0}}(k)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),this._categories=this._categories.filter(function(M){return M.emojis.length>0}),this._categories[0].first=!0,Object.freeze(this._categories),this.activeCategory=this._categories[0],this.searchEmojis=null,this.previewEmoji=null,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=-1}return q(u,[{key:"onScroll",value:function(){for(var T=this._vm.$refs.scroll.scrollTop,D=this.filteredCategories[0],k=0,M=this.filteredCategories.length;k<M;k++){var z=this.filteredCategories[k],$=this._vm.getCategoryComponent(k);if($&&$.$el.offsetTop-50>T)break;D=z}this.activeCategory=D}},{key:"allCategories",get:function(){return this._categories}},{key:"filteredCategories",get:function(){return this.searchEmojis?[{id:"search",name:"Search",emojis:this.searchEmojis}]:this._categories.filter(function(T){return T.emojis.length>0})}},{key:"previewEmojiCategory",get:function(){return this.previewEmojiCategoryIdx>=0?this.filteredCategories[this.previewEmojiCategoryIdx]:null}},{key:"onAnchorClick",value:function(T){var D=this;if(!this.searchEmojis){var k=this.filteredCategories.indexOf(T),M=this._vm.getCategoryComponent(k);this._vm.infiniteScroll?function(){if(M){var z=M.$el.offsetTop;T.first&&(z=0),D._vm.$refs.scroll.scrollTop=z}}():this.activeCategory=this.filteredCategories[k]}}},{key:"onSearch",value:function(T){var D=this._data.search(T,this.maxSearchResults);this.searchEmojis=D,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=0,this.updatePreviewEmoji()}},{key:"onEmojiEnter",value:function(T){this.previewEmoji=T,this.previewEmojiIdx=-1,this.previewEmojiCategoryIdx=-1}},{key:"onEmojiLeave",value:function(T){this.previewEmoji=null}},{key:"onArrowLeft",value:function(){this.previewEmojiIdx>0?this.previewEmojiIdx-=1:(this.previewEmojiCategoryIdx-=1,this.previewEmojiCategoryIdx<0?this.previewEmojiCategoryIdx=0:this.previewEmojiIdx=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length-1),this.updatePreviewEmoji()}},{key:"onArrowRight",value:function(){this.previewEmojiIdx<this.emojisLength(this.previewEmojiCategoryIdx)-1?this.previewEmojiIdx+=1:(this.previewEmojiCategoryIdx+=1,this.previewEmojiCategoryIdx>=this.filteredCategories.length?this.previewEmojiCategoryIdx=this.filteredCategories.length-1:this.previewEmojiIdx=0),this.updatePreviewEmoji()}},{key:"onArrowDown",value:function(){if(this.previewEmojiIdx==-1)return this.onArrowRight();var T=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length,D=this._perLine;this.previewEmojiIdx+D>T&&(D=T%this._perLine);for(var k=0;k<D;k++)this.onArrowRight();this.updatePreviewEmoji()}},{key:"onArrowUp",value:function(){var T=this._perLine;this.previewEmojiIdx-T<0&&(T=this.previewEmojiCategoryIdx>0?this.filteredCategories[this.previewEmojiCategoryIdx-1].emojis.length%this._perLine:0);for(var D=0;D<T;D++)this.onArrowLeft();this.updatePreviewEmoji()}},{key:"updatePreviewEmoji",value:function(){var T=this;this.previewEmoji=this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx],this._vm.$nextTick(function(){var D=T._vm.$refs.scroll,k=D.querySelector(".emoji-mart-emoji-selected"),M=D.offsetTop-D.offsetHeight;k&&k.offsetTop+k.offsetHeight>M+D.scrollTop&&(D.scrollTop+=k.offsetHeight),k&&k.offsetTop<D.scrollTop&&(D.scrollTop-=k.offsetHeight)})}},{key:"emojisLength",value:function(T){return T==-1?0:this.filteredCategories[T].emojis.length}}]),u}();function V(u,T){var D=Object.keys(u);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(u);T&&(k=k.filter(function(M){return Object.getOwnPropertyDescriptor(u,M).enumerable})),D.push.apply(D,k)}return D}function re(u){for(var T=1;T<arguments.length;T++){var D=arguments[T]!=null?arguments[T]:{};T%2?V(Object(D),!0).forEach(function(k){Pe(u,k,D[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(D)):V(Object(D)).forEach(function(k){Object.defineProperty(u,k,Object.getOwnPropertyDescriptor(D,k))})}return u}var ge={search:"Search",notfound:"No Emoji Found",categories:{search:"Search Results",recent:"Frequently Used",smileys:"Smileys & Emotion",people:"People & Body",nature:"Animals & Nature",foods:"Food & Drink",activity:"Activity",places:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"}},me={props:re(re({},Ae),{},{data:{type:Object,required:!0}}),data:function(){return{activeSkin:this.skin||h.get("skin")||this.defaultSkin,view:new Q(this)}},computed:{customStyles:function(){return re({width:this.calculateWidth+"px"},this.pickerStyles)},emojiProps:function(){return{native:this.native,skin:this.activeSkin,set:this.set,emojiTooltip:this.emojiTooltip,emojiSize:this.emojiSize,selectedEmoji:this.view.previewEmoji,selectedEmojiCategory:this.view.previewEmojiCategory,onEnter:this.onEmojiEnter.bind(this),onLeave:this.onEmojiLeave.bind(this),onClick:this.onEmojiClick.bind(this)}},skinProps:function(){return{skin:this.activeSkin}},calculateWidth:function(){return this.perLine*(this.emojiSize+12)+12+2+function(){if(typeof document>"u")return 0;var u=document.createElement("div");u.style.width="100px",u.style.height="100px",u.style.overflow="scroll",u.style.position="absolute",u.style.top="-9999px",document.body.appendChild(u);var T=u.offsetWidth-u.clientWidth;return document.body.removeChild(u),T}()},filteredCategories:function(){return this.view.filteredCategories},mergedI18n:function(){return Object.freeze(be(ge,this.i18n))},idleEmoji:function(){try{return this.data.emoji(this.emoji)}catch(u){return console.error("Default preview emoji `"+this.emoji+"` is not available, check the Picker `emoji` property"),console.error(u),this.data.firstEmoji()}}},watch:{skin:function(){this.onSkinChange(this.skin)}},methods:{onScroll:function(){this.infiniteScroll&&!this.waitingForPaint&&(this.waitingForPaint=!0,window.requestAnimationFrame(this.onScrollPaint.bind(this)))},onScrollPaint:function(){this.waitingForPaint=!1,this.view.onScroll()},onAnchorClick:function(u){this.view.onAnchorClick(u)},onSearch:function(u){this.view.onSearch(u)},onEmojiEnter:function(u){this.view.onEmojiEnter(u)},onEmojiLeave:function(u){this.view.onEmojiLeave(u)},onArrowLeft:function(u){var T=this.view.previewEmojiIdx;this.view.onArrowLeft(),u&&this.view.previewEmojiIdx!==T&&u.preventDefault()},onArrowRight:function(){this.view.onArrowRight()},onArrowDown:function(){this.view.onArrowDown()},onArrowUp:function(u){this.view.onArrowUp(),u.preventDefault()},onEnter:function(){this.view.previewEmoji&&(this.$emit("select",this.view.previewEmoji),U.add(this.view.previewEmoji))},onEmojiClick:function(u){this.$emit("select",u),U.add(u)},onTextSelect:function(u){u.stopPropagation()},onSkinChange:function(u){this.activeSkin=u,h.update({skin:u}),this.$emit("skin-change",u)},getCategoryComponent:function(u){var T=this.$refs["categories_"+u];return T&&"0"in T?T[0]:T}},components:{Anchors:C,Category:Xe,Preview:p,Search:y}},Ge=c(me,function(){var u=this,T=u.$createElement,D=u._self._c||T;return D("section",{staticClass:"emoji-mart emoji-mart-static",style:u.customStyles},[u.showCategories?D("div",{staticClass:"emoji-mart-bar emoji-mart-bar-anchors"},[D("anchors",{attrs:{data:u.data,i18n:u.mergedI18n,color:u.color,categories:u.view.allCategories,"active-category":u.view.activeCategory},on:{click:u.onAnchorClick}})],1):u._e(),u._v(" "),u._t("searchTemplate",function(){return[u.showSearch?D("search",{ref:"search",attrs:{data:u.data,i18n:u.mergedI18n,"auto-focus":u.autoFocus,"on-search":u.onSearch},on:{search:u.onSearch,arrowLeft:u.onArrowLeft,arrowRight:u.onArrowRight,arrowDown:u.onArrowDown,arrowUp:u.onArrowUp,enter:u.onEnter,select:u.onTextSelect}}):u._e()]},{data:u.data,i18n:u.i18n,autoFocus:u.autoFocus,onSearch:u.onSearch}),u._v(" "),D("div",{ref:"scroll",staticClass:"emoji-mart-scroll",attrs:{role:"tabpanel"},on:{scroll:u.onScroll}},[D("div",{ref:"scrollContent",attrs:{id:"emoji-mart-list",role:"listbox","aria-expanded":"true"}},[u._t("customCategory"),u._v(" "),u._l(u.view.filteredCategories,function(k,M){return D("category",{directives:[{name:"show",rawName:"v-show",value:u.infiniteScroll||k==u.view.activeCategory,expression:"infiniteScroll || category == view.activeCategory"}],key:k.id,ref:"categories_"+M,refInFor:!0,attrs:{data:u.data,i18n:u.mergedI18n,id:k.id,name:k.name,emojis:k.emojis,"emoji-props":u.emojiProps}})})],2)]),u._v(" "),u._t("previewTemplate",function(){return[u.showPreview?D("div",{staticClass:"emoji-mart-bar emoji-mart-bar-preview"},[D("preview",{attrs:{data:u.data,title:u.title,emoji:u.view.previewEmoji,"idle-emoji":u.idleEmoji,"show-skin-tones":u.showSkinTones,"emoji-props":u.emojiProps,"skin-props":u.skinProps,"on-skin-change":u.onSkinChange}})],1):u._e()]},{data:u.data,title:u.title,emoji:u.view.previewEmoji,idleEmoji:u.idleEmoji,showSkinTones:u.showSkinTones,emojiProps:u.emojiProps,skinProps:u.skinProps,onSkinChange:u.onSkinChange})],2)},[]),P=Ge.exports}(),s}()})})(Kr);var ls=Kr.exports;const K2=An("nextcloud-vue").persist(!0).build();ie(h1,Is,Ps,Hs);const gc={name:"CircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var hc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon circle-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Fc=[],uc=ae(gc,hc,Fc,!1,null,null);const J2=uc.exports;const X2={search:j("Search emoji"),notfound:j("No emoji found"),categories:{search:j("Search results"),recent:j("Frequently used"),smileys:j("Smileys & Emotion"),people:j("People & Body"),nature:j("Animals & Nature"),foods:j("Food & Drink"),activity:j("Activities"),places:j("Travel & Places"),objects:j("Objects"),symbols:j("Symbols"),flags:j("Flags"),custom:j("Custom")}},e3=[new ke(255,222,52,j("Neutral skin color")),new ke(228,205,166,j("Light skin tone")),new ke(250,221,192,j("Medium light skin tone")),new ke(174,129,87,j("Medium skin tone")),new ke(158,113,88,j("Medium dark skin tone")),new ke(96,79,69,j("Dark skin tone"))];ls.Emoji,$a,Rn,ls.Picker,j("Pick an emoji"),j,ie(F1);const Jr={name:"NcProgressBar",props:{value:{type:Number,default:0,validator(e){return e>=0&&e<=100}},size:{type:[String,Number],default:"small",validator(e){return["small","medium"].includes(e)||typeof e=="number"}},error:{type:Boolean,default:!1},type:{type:String,default:"linear",validator(e){return["linear","circular"].includes(e)}},color:{type:String,default:null}},data(){return{stroke:4}},computed:{height(){return this.type==="circular"?Number.isInteger(this.size)?this.size:44:this.size==="small"?4:this.size==="medium"?6:this.size},progress(){return this.value/100},radius(){return this.height/2},radiusNormalized(){return this.radius-3*this.stroke},circumference(){return this.radiusNormalized*2*Math.PI}}},_s=()=>{u1((e,a)=>({"497e8a2b":e.color}))},ds=Jr.setup;Jr.setup=ds?(e,a)=>(_s(),ds(e,a)):_s;const cc={name:"AccountGroupIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var mc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon account-group-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},pc=[],bc=ae(cc,mc,pc,!1,null,null);const Tc=bc.exports,Dc={name:"OpenInNewIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var yc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon open-in-new-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Ec=[],kc=ae(Dc,yc,Ec,!1,null,null);const Ac=kc.exports;ie(c1);const wc={name:"NcTeamResources",components:{AccountGroup:Tc,ChevronDown:ur,ChevronUp:Hu,OpenInNew:Ac,NcButton:$a,NcIconSvgWrapper:Sn},props:{providerId:{type:String,default:null},itemId:{type:[String,Number],default:null}},data(){return{appEnabled:OC?.appswebroots?.circles!==void 0&&(OC.config.version.split(".")[0]??0)>=29,loading:!1,teamResources:null,teamOpen:[]}},computed:{isVisible(){return!this.loading&&this.teamResources?.length>0},teamProviders(){return e=>this.teamResources.find(a=>a.teamId===e).resources?.reduce((a,i)=>(i.provider.id===this.providerId&&i.id===String(this.itemId)||(a[i.provider.id]||(a[i.provider.id]=i.provider,a[i.provider.id].resources=[]),i.provider.id===this.providerId&&i.id===String(this.itemId))||a[i.provider.id].resources.push(i),a),{})},open(){return e=>this.teamOpen.indexOf(e)!==-1}},watch:{providerId(){this.fetchTeamResources()},itemId(){this.fetchTeamResources()}},created(){this.fetchTeamResources()},methods:{t:j,async fetchTeamResources(){try{this.loading=!0;const e=await ma.get(Pa(`/teams/resources/${this.providerId}/${this.itemId}`));this.teamResources=e.data.ocs.data.teams,this.teamOpen=[this.teamResources[0]?.teamId]}catch(e){this.teamResources=null,console.error(e)}finally{this.loading=!1}},toggleOpen(e,a){a?this.teamOpen.push(e):this.teamOpen.splice(this.teamOpen.indexOf(e),1)}}};var Sc=function(){var e=this,a=e._self._c;return e.appEnabled&&e.isVisible?a("div",{staticClass:"team-resources"},[a("h5",{staticClass:"team-resources__header"},[e._v(" "+e._s(e.t("Related team resources"))+" ")]),e._l(e.teamResources,function(i){return a("details",{key:i.teamId,staticClass:"related-team",attrs:{name:"Team resources",open:e.open(i.teamId)},on:{toggle:n=>e.toggleOpen(i.teamId,n.target.open)}},[a("summary",{staticClass:"related-team__header"},[a("h5",{staticClass:"related-team__name"},[a("AccountGroup",{attrs:{size:20}}),e._v(" "+e._s(i.displayName)+" ")],1),a("NcButton",{attrs:{type:"tertiary",href:i.link,"aria-label":e.t("View team"),title:e.t("View team")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("OpenInNew",{attrs:{size:20}})]},proxy:!0}],null,!0)}),e.open(i.teamId)?a("ChevronUp",{attrs:{size:20}}):a("ChevronDown",{attrs:{size:20}})],1),a("div",e._l(e.teamProviders(i.teamId),function(n){return a("div",{key:n.id,staticClass:"related-team-provider"},[n.resources.length>0?a("h6",[e._v(" "+e._s(n.name)+" ")]):e._e(),a("ul",e._l(n.resources,function(o){return a("li",{key:o.url,staticClass:"related-team-resource"},[a("a",{staticClass:"related-team-resource__link",attrs:{href:o.url}},[o.iconEmoji?a("span",{staticClass:"resource__icon"},[e._v(" "+e._s(o.iconEmoji)+" ")]):o.iconSvg?a("NcIconSvgWrapper",{staticClass:"resource__icon",attrs:{svg:o.iconSvg,size:20}}):o.iconURL?a("span",{staticClass:"resource__icon"},[a("img",{attrs:{src:o.iconURL,alt:""}})]):e._e(),a("span",{staticClass:"resource__name"},[e._v(" "+e._s(o.label)+" ")])],1)])}),0)])}),0)])})],2):e._e()},vc=[],Rc=ae(wc,Sc,vc,!1,null,"de46bdbe");const a3=Rc.exports;ie(m1);const Cc={name:"NcResource",components:{NcButton:$a},props:{icon:{type:String,required:!0},name:{type:String,required:!0},url:{type:String,required:!0}},data(){return{labelTranslated:j('Open link to "{resourceName}"',{resourceName:this.name})}},computed:{route(){return Vn(this.$router,this.url)}},methods:{t:j}};var Nc=function(){var e=this,a=e._self._c;return a("li",{staticClass:"resource"},[a("NcButton",{staticClass:"resource__button",attrs:{"aria-label":e.labelTranslated,type:"tertiary",to:e.route,href:e.route?null:e.url},scopedSlots:e._u([{key:"icon",fn:function(){return[a("div",{staticClass:"resource__icon"},[a("img",{attrs:{src:e.icon}})])]},proxy:!0}])},[e._v(" "+e._s(e.name)+" ")])],1)},Oc=[],Bc=ae(Cc,Nc,Oc,!1,null,"ac1115a7");const t3=Bc.exports;ie(p1),j("Related resources"),j("Anything shared with the same group of people will show up here"),j;const xc={name:"NcMentionBubble",props:{id:{type:String,required:!0},title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},icon:{type:String,required:!0},iconUrl:{type:[String,null],default:null},source:{type:String,required:!0},primary:{type:Boolean,default:!1}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},mentionText(){return!this.id.includes(" ")&&!this.id.includes("/")?`@${this.id}`:`@"${this.id}"`},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:In}};var Mc=function(){var e=this,a=e._self._c;return a("span",{staticClass:"mention-bubble",class:{"mention-bubble--primary":e.primary},attrs:{contenteditable:"false"}},[a("span",{staticClass:"mention-bubble__wrapper"},[a("span",{staticClass:"mention-bubble__content"},[a("span",{staticClass:"mention-bubble__icon",class:[e.icon,`mention-bubble__icon--${e.avatarUrl?"with-avatar":""}`],style:e.avatarUrl?{backgroundImage:`url(${e.avatarUrl})`}:null}),a("span",{staticClass:"mention-bubble__title",attrs:{role:"heading",title:e.labelWithFallback}})]),a("span",{staticClass:"mention-bubble__select",attrs:{role:"none"}},[e._v(e._s(e.mentionText))])])])},jc=[],Yc=ae(xc,Mc,jc,!1,null,"a519576f");const i3=Yc.exports,Xr=/(?=[a-z0-9_\-@.'])\B/.source,qc=/(@[a-z0-9_\-@.']+)/.source,Lc=/@&quot;(?:guest|email){1}\/[a-f0-9]+&quot;/.source,Zc=/@&quot;(?:federated_)?(?:group|team|user){1}\/[a-z0-9_\-@.' /:]+&quot;/.source,Ic=/@&quot;[a-z0-9_\-@.' ]+&quot;/.source,Hc=`(${Lc}|${Zc}|${Ic})`,n3=new RegExp(`${Xr}${qc}`,"gi"),o3=new RegExp(`${Xr}${Hc}`,"gi");window._vue_richtext_widgets||(window._vue_richtext_widgets={});const fs=e=>!!window._vue_richtext_widgets[e],Pc=e=>!!window._vue_richtext_widgets[e]?.hasInteractiveView,Gc=e=>!!window._vue_richtext_widgets[e]?.fullWidth,Uc=(e,a,i=o=>{},n)=>{const o={hasInteractiveView:!0,fullWidth:!1,...n};if(window._vue_richtext_widgets[e]){console.error("Widget for id "+e+" already registered");return}window._vue_richtext_widgets[e]={id:e,callback:a,onDestroy:i,...o}},zc=(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})=>{if(a!=="open-graph"){if(!window._vue_richtext_widgets[a]){console.error("Widget for rich object type "+a+" not registered");return}window._vue_richtext_widgets[a].callback(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})}},Wc=(e,a)=>{e!=="open-graph"&&window._vue_richtext_widgets[e]&&window._vue_richtext_widgets[e].onDestroy(a)};window._registerWidget=(e,a,i,n)=>{Uc(e,a,i,n)},window._vue_richtext_custom_picker_elements||(window._vue_richtext_custom_picker_elements={});const ti=e=>!!window._vue_richtext_custom_picker_elements[e],$c=e=>{const a=window._vue_richtext_custom_picker_elements[e]?.size;return["small","normal","large","full"].includes(a)?a:null},Vc=(e,a,i=o=>{},n="large")=>{if(window._vue_richtext_custom_picker_elements[e]){console.error("Custom reference picker element for id "+e+" already registered");return}window._vue_richtext_custom_picker_elements[e]={id:e,callback:a,onDestroy:i,size:n}},Qc=(e,{providerId:a,accessible:i})=>{if(!window._vue_richtext_custom_picker_elements[a]){console.error("Custom reference picker element for reference provider ID "+a+" not registered");return}return window._vue_richtext_custom_picker_elements[a].callback(e,{providerId:a,accessible:i})},Kc=(e,a,i)=>{window._vue_richtext_custom_picker_elements[e]&&window._vue_richtext_custom_picker_elements[e].onDestroy(a,i)};window._registerCustomPickerElement=Vc;function ra(e,a){for(var i in a)e[i]=a[i];return e}var Jc=/[!'()*]/g,Xc=function(e){return"%"+e.charCodeAt(0).toString(16)},em=/%2C/g,ut=function(e){return encodeURIComponent(e).replace(Jc,Xc).replace(em,",")};function pn(e){try{return decodeURIComponent(e)}catch{}return e}function am(e,a,i){a===void 0&&(a={});var n=i||tm,o;try{o=n(e||"")}catch{o={}}for(var s in a){var r=a[s];o[s]=Array.isArray(r)?r.map(gs):gs(r)}return o}var gs=function(e){return e==null||typeof e=="object"?e:String(e)};function tm(e){var a={};return e=e.trim().replace(/^(\?|#|&)/,""),e&&e.split("&").forEach(function(i){var n=i.replace(/\+/g," ").split("="),o=pn(n.shift()),s=n.length>0?pn(n.join("=")):null;a[o]===void 0?a[o]=s:Array.isArray(a[o])?a[o].push(s):a[o]=[a[o],s]}),a}function im(e){var a=e?Object.keys(e).map(function(i){var n=e[i];if(n===void 0)return"";if(n===null)return ut(i);if(Array.isArray(n)){var o=[];return n.forEach(function(s){s!==void 0&&(s===null?o.push(ut(i)):o.push(ut(i)+"="+ut(s)))}),o.join("&")}return ut(i)+"="+ut(n)}).filter(function(i){return i.length>0}).join("&"):null;return a?"?"+a:""}var c0=/\/?$/;function m0(e,a,i,n){var o=n&&n.options.stringifyQuery,s=a.query||{};try{s=bn(s)}catch{}var r={name:a.name||e&&e.name,meta:e&&e.meta||{},path:a.path||"/",hash:a.hash||"",query:s,params:a.params||{},fullPath:hs(a,o),matched:e?nm(e):[]};return i&&(r.redirectedFrom=hs(i,o)),Object.freeze(r)}function bn(e){if(Array.isArray(e))return e.map(bn);if(e&&typeof e=="object"){var a={};for(var i in e)a[i]=bn(e[i]);return a}else return e}var Wa=m0(null,{path:"/"});function nm(e){for(var a=[];e;)a.unshift(e),e=e.parent;return a}function hs(e,a){var i=e.path,n=e.query;n===void 0&&(n={});var o=e.hash;o===void 0&&(o="");var s=a||im;return(i||"/")+s(n)+o}function el(e,a,i){return a===Wa?e===a:a?e.path&&a.path?e.path.replace(c0,"")===a.path.replace(c0,"")&&(i||e.hash===a.hash&&vi(e.query,a.query)):e.name&&a.name?e.name===a.name&&(i||e.hash===a.hash&&vi(e.query,a.query)&&vi(e.params,a.params)):!1:!1}function vi(e,a){if(e===void 0&&(e={}),a===void 0&&(a={}),!e||!a)return e===a;var i=Object.keys(e).sort(),n=Object.keys(a).sort();return i.length!==n.length?!1:i.every(function(o,s){var r=e[o],_=n[s];if(_!==o)return!1;var l=a[o];return r==null||l==null?r===l:typeof r=="object"&&typeof l=="object"?vi(r,l):String(r)===String(l)})}function om(e,a){return e.path.replace(c0,"/").indexOf(a.path.replace(c0,"/"))===0&&(!a.hash||e.hash===a.hash)&&sm(e.query,a.query)}function sm(e,a){for(var i in a)if(!(i in e))return!1;return!0}function al(e){for(var a=0;a<e.matched.length;a++){var i=e.matched[a];for(var n in i.instances){var o=i.instances[n],s=i.enteredCbs[n];if(!(!o||!s)){delete i.enteredCbs[n];for(var r=0;r<s.length;r++)o._isBeingDestroyed||s[r](o)}}}}var rm={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,a){var i=a.props,n=a.children,o=a.parent,s=a.data;s.routerView=!0;for(var r=o.$createElement,_=i.name,l=o.$route,g=o._routerViewCache||(o._routerViewCache={}),d=0,f=!1;o&&o._routerRoot!==o;){var h=o.$vnode?o.$vnode.data:{};h.routerView&&d++,h.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=d,f){var F=g[_],m=F&&F.component;return m?(F.configProps&&Fs(m,s,F.route,F.configProps),r(m,s,n)):r()}var b=l.matched[d],E=b&&b.components[_];if(!b||!E)return g[_]=null,r();g[_]={component:E},s.registerRouteInstance=function(w,R){var Y=b.instances[_];(R&&Y!==w||!R&&Y===w)&&(b.instances[_]=R)},(s.hook||(s.hook={})).prepatch=function(w,R){b.instances[_]=R.componentInstance},s.hook.init=function(w){w.data.keepAlive&&w.componentInstance&&w.componentInstance!==b.instances[_]&&(b.instances[_]=w.componentInstance),al(l)};var A=b.props&&b.props[_];return A&&(ra(g[_],{route:l,configProps:A}),Fs(E,s,l,A)),r(E,s,n)}};function Fs(e,a,i,n){var o=a.props=lm(i,n);if(o){o=a.props=ra({},o);var s=a.attrs=a.attrs||{};for(var r in o)(!e.props||!(r in e.props))&&(s[r]=o[r],delete o[r])}}function lm(e,a){switch(typeof a){case"undefined":return;case"object":return a;case"function":return a(e);case"boolean":return a?e.params:void 0}}function tl(e,a,i){var n=e.charAt(0);if(n==="/")return e;if(n==="?"||n==="#")return a+e;var o=a.split("/");(!i||!o[o.length-1])&&o.pop();for(var s=e.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var _=s[r];_===".."?o.pop():_!=="."&&o.push(_)}return o[0]!==""&&o.unshift(""),o.join("/")}function _m(e){var a="",i="",n=e.indexOf("#");n>=0&&(a=e.slice(n),e=e.slice(0,n));var o=e.indexOf("?");return o>=0&&(i=e.slice(o+1),e=e.slice(0,o)),{path:e,query:i,hash:a}}function Za(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var p0=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Tt=ol,dm=ao,fm=um,gm=il,hm=nl,Fm=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ao(e,a){for(var i=[],n=0,o=0,s="",r=a&&a.delimiter||"/",_;(_=Fm.exec(e))!=null;){var l=_[0],g=_[1],d=_.index;if(s+=e.slice(o,d),o=d+l.length,g){s+=g[1];continue}var f=e[o],h=_[2],F=_[3],m=_[4],b=_[5],E=_[6],A=_[7];s&&(i.push(s),s="");var w=h!=null&&f!=null&&f!==h,R=E==="+"||E==="*",Y=E==="?"||E==="*",Z=_[2]||r,N=m||b;i.push({name:F||n++,prefix:h||"",delimiter:Z,optional:Y,repeat:R,partial:w,asterisk:!!A,pattern:N?pm(N):A?".*":"[^"+Ri(Z)+"]+?"})}return o<e.length&&(s+=e.substr(o)),s&&i.push(s),i}function um(e,a){return il(ao(e,a),a)}function cm(e){return encodeURI(e).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function mm(e){return encodeURI(e).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function il(e,a){for(var i=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(i[n]=new RegExp("^(?:"+e[n].pattern+")$",io(a)));return function(o,s){for(var r="",_=o||{},l=s||{},g=l.pretty?cm:encodeURIComponent,d=0;d<e.length;d++){var f=e[d];if(typeof f=="string"){r+=f;continue}var h=_[f.name],F;if(h==null)if(f.optional){f.partial&&(r+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(p0(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(F=g(h[m]),!i[d].test(F))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(F)+"`");r+=(m===0?f.prefix:f.delimiter)+F}continue}if(F=f.asterisk?mm(h):g(h),!i[d].test(F))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+F+'"');r+=f.prefix+F}return r}}function Ri(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function pm(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function to(e,a){return e.keys=a,e}function io(e){return e&&e.sensitive?"":"i"}function bm(e,a){var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)a.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return to(e,a)}function Tm(e,a,i){for(var n=[],o=0;o<e.length;o++)n.push(ol(e[o],a,i).source);var s=new RegExp("(?:"+n.join("|")+")",io(i));return to(s,a)}function Dm(e,a,i){return nl(ao(e,i),a,i)}function nl(e,a,i){p0(a)||(i=a||i,a=[]),i=i||{};for(var n=i.strict,o=i.end!==!1,s="",r=0;r<e.length;r++){var _=e[r];if(typeof _=="string")s+=Ri(_);else{var l=Ri(_.prefix),g="(?:"+_.pattern+")";a.push(_),_.repeat&&(g+="(?:"+l+g+")*"),_.optional?_.partial?g=l+"("+g+")?":g="(?:"+l+"("+g+"))?":g=l+"("+g+")",s+=g}}var d=Ri(i.delimiter||"/"),f=s.slice(-d.length)===d;return n||(s=(f?s.slice(0,-d.length):s)+"(?:"+d+"(?=$))?"),o?s+="$":s+=n&&f?"":"(?="+d+"|$)",to(new RegExp("^"+s,io(i)),a)}function ol(e,a,i){return p0(a)||(i=a||i,a=[]),i=i||{},e instanceof RegExp?bm(e,a):p0(e)?Tm(e,a,i):Dm(e,a,i)}Tt.parse=dm,Tt.compile=fm,Tt.tokensToFunction=gm,Tt.tokensToRegExp=hm;var us=Object.create(null);function Ci(e,a,i){a=a||{};try{var n=us[e]||(us[e]=Tt.compile(e));return typeof a.pathMatch=="string"&&(a[0]=a.pathMatch),n(a,{pretty:!0})}catch{return""}finally{delete a[0]}}function no(e,a,i,n){var o=typeof e=="string"?{path:e}:e;if(o._normalized)return o;if(o.name){o=ra({},e);var s=o.params;return s&&typeof s=="object"&&(o.params=ra({},s)),o}if(!o.path&&o.params&&a){o=ra({},o),o._normalized=!0;var r=ra(ra({},a.params),o.params);if(a.name)o.name=a.name,o.params=r;else if(a.matched.length){var _=a.matched[a.matched.length-1].path;o.path=Ci(_,r,"path "+a.path)}return o}var l=_m(o.path||""),g=a&&a.path||"/",d=l.path?tl(l.path,g,i||o.append):g,f=am(l.query,o.query,n&&n.options.parseQuery),h=o.hash||l.hash;return h&&h.charAt(0)!=="#"&&(h="#"+h),{_normalized:!0,path:d,query:f,hash:h}}var ym=[String,Object],Em=[String,Array],cs=function(){},sl={name:"RouterLink",props:{to:{type:ym,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Em,default:"click"}},render:function(e){var a=this,i=this.$router,n=this.$route,o=i.resolve(this.to,n,this.append),s=o.location,r=o.route,_=o.href,l={},g=i.options.linkActiveClass,d=i.options.linkExactActiveClass,f=g??"router-link-active",h=d??"router-link-exact-active",F=this.activeClass==null?f:this.activeClass,m=this.exactActiveClass==null?h:this.exactActiveClass,b=r.redirectedFrom?m0(null,no(r.redirectedFrom),null,i):r;l[m]=el(n,b,this.exactPath),l[F]=this.exact||this.exactPath?l[m]:om(n,b);var E=l[m]?this.ariaCurrentValue:null,A=function(v){ms(v)&&(a.replace?i.replace(s,cs):i.push(s,cs))},w={click:ms};Array.isArray(this.event)?this.event.forEach(function(v){w[v]=A}):w[this.event]=A;var R={class:l},Y=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:_,route:r,navigate:A,isActive:l[F],isExactActive:l[m]});if(Y){if(Y.length===1)return Y[0];if(Y.length>1||!Y.length)return Y.length===0?e():e("span",{},Y)}if(this.tag==="a")R.on=w,R.attrs={href:_,"aria-current":E};else{var Z=rl(this.$slots.default);if(Z){Z.isStatic=!1;var N=Z.data=ra({},Z.data);N.on=N.on||{};for(var I in N.on){var U=N.on[I];I in w&&(N.on[I]=Array.isArray(U)?U:[U])}for(var G in w)G in N.on?N.on[G].push(w[G]):N.on[G]=A;var c=Z.data.attrs=ra({},Z.data.attrs);c.href=_,c["aria-current"]=E}else R.on=w}return e(this.tag,R,this.$slots.default)}};function ms(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function rl(e){if(e){for(var a,i=0;i<e.length;i++)if(a=e[i],a.tag==="a"||a.children&&(a=rl(a.children)))return a}}var b0;function Tn(e){if(!(Tn.installed&&b0===e)){Tn.installed=!0,b0=e;var a=function(o){return o!==void 0},i=function(o,s){var r=o.$options._parentVnode;a(r)&&a(r=r.data)&&a(r=r.registerRouteInstance)&&r(o,s)};e.mixin({beforeCreate:function(){a(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,i(this,this)},destroyed:function(){i(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",rm),e.component("RouterLink",sl);var n=e.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var si=typeof window<"u";function pi(e,a,i,n,o){var s=a||[],r=i||Object.create(null),_=n||Object.create(null);e.forEach(function(d){Dn(s,r,_,d,o)});for(var l=0,g=s.length;l<g;l++)s[l]==="*"&&(s.push(s.splice(l,1)[0]),g--,l--);return{pathList:s,pathMap:r,nameMap:_}}function Dn(e,a,i,n,o,s){var r=n.path,_=n.name,l=n.pathToRegexpOptions||{},g=Am(r,o,l.strict);typeof n.caseSensitive=="boolean"&&(l.sensitive=n.caseSensitive);var d={path:g,regex:km(g,l),components:n.components||{default:n.component},alias:n.alias?typeof n.alias=="string"?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:_,parent:o,matchAs:s,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:n.props==null?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(b){var E=s?Za(s+"/"+b.path):void 0;Dn(e,a,i,b,d,E)}),a[d.path]||(e.push(d.path),a[d.path]=d),n.alias!==void 0)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var F=f[h],m={path:F,children:n.children};Dn(e,a,i,m,o,d.path||"/")}_&&(i[_]||(i[_]=d))}function km(e,a){var i=Tt(e,[],a);return i}function Am(e,a,i){return i||(e=e.replace(/\/$/,"")),e[0]==="/"||a==null?e:Za(a.path+"/"+e)}function wm(e,a){var i=pi(e),n=i.pathList,o=i.pathMap,s=i.nameMap;function r(F){pi(F,n,o,s)}function _(F,m){var b=typeof F!="object"?s[F]:void 0;pi([m||F],n,o,s,b),b&&b.alias.length&&pi(b.alias.map(function(E){return{path:E,children:[m]}}),n,o,s,b)}function l(){return n.map(function(F){return o[F]})}function g(F,m,b){var E=no(F,m,!1,a),A=E.name;if(A){var w=s[A];if(!w)return h(null,E);var R=w.regex.keys.filter(function(U){return!U.optional}).map(function(U){return U.name});if(typeof E.params!="object"&&(E.params={}),m&&typeof m.params=="object")for(var Y in m.params)!(Y in E.params)&&R.indexOf(Y)>-1&&(E.params[Y]=m.params[Y]);return E.path=Ci(w.path,E.params),h(w,E,b)}else if(E.path){E.params={};for(var Z=0;Z<n.length;Z++){var N=n[Z],I=o[N];if(Sm(I.regex,E.path,E.params))return h(I,E,b)}}return h(null,E)}function d(F,m){var b=F.redirect,E=typeof b=="function"?b(m0(F,m,null,a)):b;if(typeof E=="string"&&(E={path:E}),!E||typeof E!="object")return h(null,m);var A=E,w=A.name,R=A.path,Y=m.query,Z=m.hash,N=m.params;if(Y=A.hasOwnProperty("query")?A.query:Y,Z=A.hasOwnProperty("hash")?A.hash:Z,N=A.hasOwnProperty("params")?A.params:N,w)return s[w],g({_normalized:!0,name:w,query:Y,hash:Z,params:N},void 0,m);if(R){var I=vm(R,F),U=Ci(I,N);return g({_normalized:!0,path:U,query:Y,hash:Z},void 0,m)}else return h(null,m)}function f(F,m,b){var E=Ci(b,m.params),A=g({_normalized:!0,path:E});if(A){var w=A.matched,R=w[w.length-1];return m.params=A.params,h(R,m)}return h(null,m)}function h(F,m,b){return F&&F.redirect?d(F,b||m):F&&F.matchAs?f(F,m,F.matchAs):m0(F,m,b,a)}return{match:g,addRoute:_,getRoutes:l,addRoutes:r}}function Sm(e,a,i){var n=a.match(e);if(n){if(!i)return!0}else return!1;for(var o=1,s=n.length;o<s;++o){var r=e.keys[o-1];r&&(i[r.name||"pathMatch"]=typeof n[o]=="string"?pn(n[o]):n[o])}return!0}function vm(e,a){return tl(e,a.parent?a.parent.path:"/",!0)}var Rm=si&&window.performance&&window.performance.now?window.performance:Date;function ll(){return Rm.now().toFixed(3)}var _l=ll();function x0(){return _l}function dl(e){return _l=e}var fl=Object.create(null);function gl(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,a=window.location.href.replace(e,""),i=ra({},window.history.state);return i.key=x0(),window.history.replaceState(i,"",a),window.addEventListener("popstate",ps),function(){window.removeEventListener("popstate",ps)}}function Ia(e,a,i,n){if(e.app){var o=e.options.scrollBehavior;o&&e.app.$nextTick(function(){var s=Cm(),r=o.call(e,a,i,n?s:null);r&&(typeof r.then=="function"?r.then(function(_){Ds(_,s)}).catch(function(_){}):Ds(r,s))})}}function hl(){var e=x0();e&&(fl[e]={x:window.pageXOffset,y:window.pageYOffset})}function ps(e){hl(),e.state&&e.state.key&&dl(e.state.key)}function Cm(){var e=x0();if(e)return fl[e]}function Nm(e,a){var i=document.documentElement,n=i.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:o.left-n.left-a.x,y:o.top-n.top-a.y}}function bs(e){return Ct(e.x)||Ct(e.y)}function Ts(e){return{x:Ct(e.x)?e.x:window.pageXOffset,y:Ct(e.y)?e.y:window.pageYOffset}}function Om(e){return{x:Ct(e.x)?e.x:0,y:Ct(e.y)?e.y:0}}function Ct(e){return typeof e=="number"}var Bm=/^#\d/;function Ds(e,a){var i=typeof e=="object";if(i&&typeof e.selector=="string"){var n=Bm.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(n){var o=e.offset&&typeof e.offset=="object"?e.offset:{};o=Om(o),a=Nm(n,o)}else bs(e)&&(a=Ts(e))}else i&&bs(e)&&(a=Ts(e));a&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:a.x,top:a.y,behavior:e.behavior}):window.scrollTo(a.x,a.y))}var Ha=si&&function(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function T0(e,a){hl();var i=window.history;try{if(a){var n=ra({},i.state);n.key=x0(),i.replaceState(n,"",e)}else i.pushState({key:dl(ll())},"",e)}catch{window.location[a?"replace":"assign"](e)}}function yn(e){T0(e,!0)}var ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function xm(e,a){return M0(e,a,ft.redirected,'Redirected when going from "'+e.fullPath+'" to "'+qm(a)+'" via a navigation guard.')}function Mm(e,a){var i=M0(e,a,ft.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return i.name="NavigationDuplicated",i}function ys(e,a){return M0(e,a,ft.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+a.fullPath+'" with a new navigation.')}function jm(e,a){return M0(e,a,ft.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+a.fullPath+'" via a navigation guard.')}function M0(e,a,i,n){var o=new Error(n);return o._isRouter=!0,o.from=e,o.to=a,o.type=i,o}var Ym=["params","query","hash"];function qm(e){if(typeof e=="string")return e;if("path"in e)return e.path;var a={};return Ym.forEach(function(i){i in e&&(a[i]=e[i])}),JSON.stringify(a,null,2)}function D0(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function y0(e,a){return D0(e)&&e._isRouter&&(a==null||e.type===a)}function Es(e,a,i){var n=function(o){o>=e.length?i():e[o]?a(e[o],function(){n(o+1)}):n(o+1)};n(0)}function Lm(e){return function(a,i,n){var o=!1,s=0,r=null;Fl(e,function(_,l,g,d){if(typeof _=="function"&&_.cid===void 0){o=!0,s++;var f=ks(function(b){Im(b)&&(b=b.default),_.resolved=typeof b=="function"?b:b0.extend(b),g.components[d]=b,s--,s<=0&&n()}),h=ks(function(b){var E="Failed to resolve async component "+d+": "+b;r||(r=D0(b)?b:new Error(E),n(r))}),F;try{F=_(f,h)}catch(b){h(b)}if(F)if(typeof F.then=="function")F.then(f,h);else{var m=F.component;m&&typeof m.then=="function"&&m.then(f,h)}}}),o||n()}}function Fl(e,a){return ul(e.map(function(i){return Object.keys(i.components).map(function(n){return a(i.components[n],i.instances[n],i,n)})}))}function ul(e){return Array.prototype.concat.apply([],e)}var Zm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Im(e){return e.__esModule||Zm&&e[Symbol.toStringTag]==="Module"}function ks(e){var a=!1;return function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];if(!a)return a=!0,e.apply(this,i)}}var oa=function(e,a){this.router=e,this.base=Hm(a),this.current=Wa,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};oa.prototype.listen=function(e){this.cb=e},oa.prototype.onReady=function(e,a){this.ready?e():(this.readyCbs.push(e),a&&this.readyErrorCbs.push(a))},oa.prototype.onError=function(e){this.errorCbs.push(e)},oa.prototype.transitionTo=function(e,a,i){var n=this,o;try{o=this.router.match(e,this.current)}catch(r){throw this.errorCbs.forEach(function(_){_(r)}),r}var s=this.current;this.confirmTransition(o,function(){n.updateRoute(o),a&&a(o),n.ensureURL(),n.router.afterHooks.forEach(function(r){r&&r(o,s)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(r){r(o)}))},function(r){i&&i(r),r&&!n.ready&&(!y0(r,ft.redirected)||s!==Wa)&&(n.ready=!0,n.readyErrorCbs.forEach(function(_){_(r)}))})},oa.prototype.confirmTransition=function(e,a,i){var n=this,o=this.current;this.pending=e;var s=function(m){!y0(m)&&D0(m)&&(n.errorCbs.length?n.errorCbs.forEach(function(b){b(m)}):console.error(m)),i&&i(m)},r=e.matched.length-1,_=o.matched.length-1;if(el(e,o)&&r===_&&e.matched[r]===o.matched[_])return this.ensureURL(),e.hash&&Ia(this.router,o,e,!1),s(Mm(o,e));var l=Pm(this.current.matched,e.matched),g=l.updated,d=l.deactivated,f=l.activated,h=[].concat(Um(d),this.router.beforeHooks,zm(g),f.map(function(m){return m.beforeEnter}),Lm(f)),F=function(m,b){if(n.pending!==e)return s(ys(o,e));try{m(e,o,function(E){E===!1?(n.ensureURL(!0),s(jm(o,e))):D0(E)?(n.ensureURL(!0),s(E)):typeof E=="string"||typeof E=="object"&&(typeof E.path=="string"||typeof E.name=="string")?(s(xm(o,e)),typeof E=="object"&&E.replace?n.replace(E):n.push(E)):b(E)})}catch(E){s(E)}};Es(h,F,function(){var m=Wm(f),b=m.concat(n.router.resolveHooks);Es(b,F,function(){if(n.pending!==e)return s(ys(o,e));n.pending=null,a(e),n.router.app&&n.router.app.$nextTick(function(){al(e)})})})},oa.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},oa.prototype.setupListeners=function(){},oa.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=Wa,this.pending=null};function Hm(e){if(!e)if(si){var a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return e.charAt(0)!=="/"&&(e="/"+e),e.replace(/\/$/,"")}function Pm(e,a){var i,n=Math.max(e.length,a.length);for(i=0;i<n&&e[i]===a[i];i++);return{updated:a.slice(0,i),activated:a.slice(i),deactivated:e.slice(i)}}function oo(e,a,i,n){var o=Fl(e,function(s,r,_,l){var g=Gm(s,a);if(g)return Array.isArray(g)?g.map(function(d){return i(d,r,_,l)}):i(g,r,_,l)});return ul(n?o.reverse():o)}function Gm(e,a){return typeof e!="function"&&(e=b0.extend(e)),e.options[a]}function Um(e){return oo(e,"beforeRouteLeave",cl,!0)}function zm(e){return oo(e,"beforeRouteUpdate",cl)}function cl(e,a){if(a)return function(){return e.apply(a,arguments)}}function Wm(e){return oo(e,"beforeRouteEnter",function(a,i,n,o){return $m(a,n,o)})}function $m(e,a,i){return function(n,o,s){return e(n,o,function(r){typeof r=="function"&&(a.enteredCbs[i]||(a.enteredCbs[i]=[]),a.enteredCbs[i].push(r)),s(r)})}}var ml=function(e){function a(i,n){e.call(this,i,n),this._startLocation=Mt(this.base)}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ha&&o;s&&this.listeners.push(gl());var r=function(){var _=i.current,l=Mt(i.base);i.current===Wa&&l===i._startLocation||i.transitionTo(l,function(g){s&&Ia(n,g,_,!0)})};window.addEventListener("popstate",r),this.listeners.push(function(){window.removeEventListener("popstate",r)})}},a.prototype.go=function(i){window.history.go(i)},a.prototype.push=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){T0(Za(s.base+l.fullPath)),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.replace=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){yn(Za(s.base+l.fullPath)),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.ensureURL=function(i){if(Mt(this.base)!==this.current.fullPath){var n=Za(this.base+this.current.fullPath);i?T0(n):yn(n)}},a.prototype.getCurrentLocation=function(){return Mt(this.base)},a}(oa);function Mt(e){var a=window.location.pathname,i=a.toLowerCase(),n=e.toLowerCase();return e&&(i===n||i.indexOf(Za(n+"/"))===0)&&(a=a.slice(e.length)),(a||"/")+window.location.search+window.location.hash}var pl=function(e){function a(i,n,o){e.call(this,i,n),!(o&&Vm(this.base))&&As()}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ha&&o;s&&this.listeners.push(gl());var r=function(){var l=i.current;As()&&i.transitionTo(Ni(),function(g){s&&Ia(i.router,g,l,!0),Ha||Oi(g.fullPath)})},_=Ha?"popstate":"hashchange";window.addEventListener(_,r),this.listeners.push(function(){window.removeEventListener(_,r)})}},a.prototype.push=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){ws(l.fullPath),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.replace=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){Oi(l.fullPath),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.go=function(i){window.history.go(i)},a.prototype.ensureURL=function(i){var n=this.current.fullPath;Ni()!==n&&(i?ws(n):Oi(n))},a.prototype.getCurrentLocation=function(){return Ni()},a}(oa);function Vm(e){var a=Mt(e);if(!/^\/#/.test(a))return window.location.replace(Za(e+"/#"+a)),!0}function As(){var e=Ni();return e.charAt(0)==="/"?!0:(Oi("/"+e),!1)}function Ni(){var e=window.location.href,a=e.indexOf("#");return a<0?"":(e=e.slice(a+1),e)}function En(e){var a=window.location.href,i=a.indexOf("#"),n=i>=0?a.slice(0,i):a;return n+"#"+e}function ws(e){Ha?T0(En(e)):window.location.hash=e}function Oi(e){Ha?yn(En(e)):window.location.replace(En(e))}var Qm=function(e){function a(i,n){e.call(this,i,n),this.stack=[],this.index=-1}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.push=function(i,n,o){var s=this;this.transitionTo(i,function(r){s.stack=s.stack.slice(0,s.index+1).concat(r),s.index++,n&&n(r)},o)},a.prototype.replace=function(i,n,o){var s=this;this.transitionTo(i,function(r){s.stack=s.stack.slice(0,s.index).concat(r),n&&n(r)},o)},a.prototype.go=function(i){var n=this,o=this.index+i;if(!(o<0||o>=this.stack.length)){var s=this.stack[o];this.confirmTransition(s,function(){var r=n.current;n.index=o,n.updateRoute(s),n.router.afterHooks.forEach(function(_){_&&_(s,r)})},function(r){y0(r,ft.duplicated)&&(n.index=o)})}},a.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},a.prototype.ensureURL=function(){},a}(oa),Te=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=wm(e.routes||[],this);var a=e.mode||"hash";switch(this.fallback=a==="history"&&!Ha&&e.fallback!==!1,this.fallback&&(a="hash"),si||(a="abstract"),this.mode=a,a){case"history":this.history=new ml(this,e.base);break;case"hash":this.history=new pl(this,e.base,this.fallback);break;case"abstract":this.history=new Qm(this,e.base);break}},Ss={currentRoute:{configurable:!0}};Te.prototype.match=function(e,a,i){return this.matcher.match(e,a,i)},Ss.currentRoute.get=function(){return this.history&&this.history.current},Te.prototype.init=function(e){var a=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var s=a.apps.indexOf(e);s>-1&&a.apps.splice(s,1),a.app===e&&(a.app=a.apps[0]||null),a.app||a.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof ml||i instanceof pl){var n=function(s){var r=i.current,_=a.options.scrollBehavior,l=Ha&&_;l&&"fullPath"in s&&Ia(a,s,r,!1)},o=function(s){i.setupListeners(),n(s)};i.transitionTo(i.getCurrentLocation(),o,o)}i.listen(function(s){a.apps.forEach(function(r){r._route=s})})}},Te.prototype.beforeEach=function(e){return en(this.beforeHooks,e)},Te.prototype.beforeResolve=function(e){return en(this.resolveHooks,e)},Te.prototype.afterEach=function(e){return en(this.afterHooks,e)},Te.prototype.onReady=function(e,a){this.history.onReady(e,a)},Te.prototype.onError=function(e){this.history.onError(e)},Te.prototype.push=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.push(e,o,s)});this.history.push(e,a,i)},Te.prototype.replace=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.replace(e,o,s)});this.history.replace(e,a,i)},Te.prototype.go=function(e){this.history.go(e)},Te.prototype.back=function(){this.go(-1)},Te.prototype.forward=function(){this.go(1)},Te.prototype.getMatchedComponents=function(e){var a=e?e.matched?e:this.resolve(e).route:this.currentRoute;return a?[].concat.apply([],a.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]},Te.prototype.resolve=function(e,a,i){a=a||this.history.current;var n=no(e,a,i,this),o=this.match(n,a),s=o.redirectedFrom||o.fullPath,r=this.history.base,_=Km(r,s,this.mode);return{location:n,route:o,href:_,normalizedTo:n,resolved:o}},Te.prototype.getRoutes=function(){return this.matcher.getRoutes()},Te.prototype.addRoute=function(e,a){this.matcher.addRoute(e,a),this.history.current!==Wa&&this.history.transitionTo(this.history.getCurrentLocation())},Te.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==Wa&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Te.prototype,Ss);function en(e,a){return e.push(a),function(){var i=e.indexOf(a);i>-1&&e.splice(i,1)}}function Km(e,a,i){var n=i==="hash"?"#"+a:a;return e?Za(e+"/"+n):n}Te.install=Tn,Te.version="3.6.5",Te.isNavigationFailure=y0,Te.NavigationFailureType=ft,Te.START_LOCATION=Wa,si&&window.Vue&&window.Vue.use(Te),ie(b1);const Jm=3*60*1e3,Xm={name:"NcReferenceWidget",components:{NcButton:$a},props:{reference:{type:Object,required:!0},interactive:{type:Boolean,default:!0},interactiveOptIn:{type:Boolean,default:!1}},setup(){const e=Aa(!1),a=Aa(),{width:i}=xs(a);return w1(a,([n])=>{i1(()=>{e.value=n.isIntersecting})}),{width:i,isVisible:e,widgetRoot:a}},data(){return{showInteractive:!1,rendered:!1,idleTimeout:null}},computed:{isInteractive(){return!this.interactiveOptIn&&this.interactive||this.showInteractive},hasFullWidth(){return Gc(this.reference.richObjectType)},hasCustomWidget(){return fs(this.reference.richObjectType)},hasInteractiveView(){return fs(this.reference.richObjectType)&&Pc(this.reference.richObjectType)},noAccess(){return this.reference&&!this.reference.accessible},descriptionStyle(){if(this.numberOfLines===0)return{display:"none"};const e=this.numberOfLines;return{lineClamp:e,webkitLineClamp:e}},numberOfLines(){return[450,550,650,1/0].findIndex(e=>this.width<e)},compactLink(){const e=this.reference.openGraphObject.link;return e?e.startsWith("https://")?e.substring(8):e.startsWith("http://")?e.substring(7):e:""},route(){return Vn(this.$router,this.reference.openGraphObject.link)},referenceWidgetLinkComponent(){return this.route?sl:"a"},referenceWidgetLinkProps(){return this.route?{to:this.route}:{href:this.reference.openGraphObject.link,target:"_blank"}}},watch:{isVisible:{handler(e){if(!e){this.idleTimeout=setTimeout(()=>{this.isVisible||this.destroyWidget()},Jm);return}this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),this.rendered||this.renderWidget()},immediate:!0}},beforeDestroy(){this.destroyWidget()},methods:{t:j,enableInteractive(){this.showInteractive=!0,this.renderWidget()},renderWidget(){if(!this.$refs.customWidget||this?.reference?.richObjectType==="open-graph")return;this.$refs.customWidget.innerHTML="";const e=document.createElement("div");e.style="width: 100%;",this.$refs.customWidget.appendChild(e),this.$nextTick(()=>{zc(e,{...this.reference,interactive:this.isInteractive}),this.rendered=!0})},destroyWidget(){this.rendered&&(Wc(this.reference.richObjectType,this.$el),this.rendered=!1)}}};var ep=function(){var e=this,a=e._self._c;return a("div",{ref:"widgetRoot",class:{"toggle-interactive":e.hasInteractiveView&&!e.isInteractive}},[e.reference&&e.hasCustomWidget?a("div",{ref:"customWidget",staticClass:"widget-custom",class:{"full-width":e.hasFullWidth}}):!e.noAccess&&e.reference&&e.reference.openGraphObject&&!e.hasCustomWidget?a(e.referenceWidgetLinkComponent,e._b({tag:"component",staticClass:"widget-default",attrs:{rel:"noopener noreferrer"}},"component",e.referenceWidgetLinkProps,!1),[e.reference.openGraphObject.thumb?a("img",{staticClass:"widget-default--image",attrs:{src:e.reference.openGraphObject.thumb}}):e._e(),a("div",{staticClass:"widget-default--details"},[a("p",{staticClass:"widget-default--name"},[e._v(" "+e._s(e.reference.openGraphObject.name)+" ")]),a("p",{staticClass:"widget-default--description",style:e.descriptionStyle},[e._v(" "+e._s(e.reference.openGraphObject.description)+" ")]),a("p",{staticClass:"widget-default--link"},[e._v(" "+e._s(e.compactLink)+" ")])])]):e._e(),e.interactiveOptIn&&e.hasInteractiveView&&!e.isInteractive?a("NcButton",{staticClass:"toggle-interactive--button",on:{click:e.enableInteractive}},[e._v(" "+e._s(e.t("Enable interactive view"))+" ")]):e._e()],1)},ap=[],tp=ae(Xm,ep,ap,!1,null,"ea9434d3");const ip=tp.exports,np={name:"NcCustomPickerElement",props:{provider:{type:Object,required:!0}},emits:["cancel","submit"],data(){return{isRegistered:ti(this.provider.id),renderResult:null}},mounted(){this.isRegistered&&this.renderElement()},beforeDestroy(){this.isRegistered&&Kc(this.provider.id,this.$el,this.renderResult)},methods:{renderElement(){this.$refs.domElement&&(this.$refs.domElement.innerHTML="");const e=Qc(this.$refs.domElement,{providerId:this.provider.id,accessible:!1});Promise.resolve(e).then(a=>{this.renderResult=a,this.renderResult.object?._isVue&&this.renderResult.object?.$on&&(this.renderResult.object.$on("submit",this.onSubmit),this.renderResult.object.$on("cancel",this.onCancel)),this.renderResult.element.addEventListener("submit",i=>{this.onSubmit(i.detail)}),this.renderResult.element.addEventListener("cancel",this.onCancel)})},onSubmit(e){this.$emit("submit",e)},onCancel(){this.$emit("cancel")}}};var op=function(){var e=this,a=e._self._c;return a("div",{ref:"domElement"})},sp=[],rp=ae(np,op,sp,!1,null,"de9850e4");const lp=rp.exports;ie(T1);const _p="any-link",dp={id:_p,title:j("Any link"),icon_url:Gs("core","filetypes/link.svg")};window._vue_richtext_reference_providers||(window._vue_richtext_reference_providers=Wt("core","reference-provider-list",[])),window._vue_richtext_reference_provider_timestamps||(window._vue_richtext_reference_provider_timestamps=Wt("core","reference-provider-timestamps",{}));function fp(){return window._vue_richtext_reference_providers.filter(e=>{const a=!!e.search_providers_ids&&e.search_providers_ids.length>0||ti(e.id);return a||console.debug("[smart picker]",e.id,"reference provider is discoverable but does not have any related search provider or custom picker component registered"),a})}function gp(e){const a=window._vue_richtext_reference_provider_timestamps;return e.sort((i,n)=>i.order===n.order?0:i.order>n.order?1:-1).sort((i,n)=>{const o=a[i.id],s=a[n.id];return o===s?0:s===void 0?-1:o===void 0?1:o>s?-1:1})}function hp(e,a=null){const i=fp(),n=e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),o=new RegExp(n,"i"),s=gp(i).filter(_=>_.title.match(o)),r=a?s.slice(0,a):s;return(e===""||r.length===0)&&r.push(dp),r}function Fp(e){const a=Math.floor(Date.now()/1e3),i={timestamp:a},n=Pa("references/provider/{providerId}",{providerId:e});ma.put(n,i).then(o=>{window._vue_richtext_reference_provider_timestamps[e]=a})}let vs=0;function bl(e,a){return function(){const i=this,n=arguments;clearTimeout(vs),vs=setTimeout(function(){e.apply(i,n)},a)}}function so(e){try{return!!new URL(e)}catch{return!1}}ie(Us,D1);const up={name:"LinkVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var cp=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon link-variant-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},mp=[],pp=ae(up,cp,mp,!1,null,null);const ro=pp.exports,bp={name:"NcProviderList",components:{NcSelect:R0,NcHighlight:S0,NcEmptyContent:eo,LinkVariantIcon:ro},emits:["select-provider","submit"],data(){return{selectedProvider:null,query:"",multiselectPlaceholder:j("Select provider"),providerIconAlt:j("Provider icon")}},computed:{options(){const e=[];return this.query!==""&&so(this.query)&&e.push({id:this.query,title:this.query,isLink:!0}),e.push(...hp(this.query)),e}},methods:{focus(){setTimeout(()=>{this.$refs["provider-select"]?.$el?.querySelector("#provider-select-input")?.focus()},300)},onProviderSelected(e){e!==null&&(e.isLink?this.$emit("submit",e.title):this.$emit("select-provider",e),this.selectedProvider=null)},onSearch(e,a){this.query=e}}};var Tp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"provider-list"},[a("NcSelect",{ref:"provider-select",staticClass:"provider-list--select",attrs:{"input-id":"provider-select-input",label:"title",placeholder:e.multiselectPlaceholder,options:e.options,"append-to-body":!1,"clear-search-on-select":!0,"clear-search-on-blur":()=>!1,filterable:!1},on:{search:e.onSearch,input:e.onProviderSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isLink?a("div",{staticClass:"provider"},[a("LinkVariantIcon",{staticClass:"link-icon",attrs:{size:20}}),a("span",[e._v(e._s(i.title))])],1):a("div",{staticClass:"provider"},[a("img",{staticClass:"provider-icon",attrs:{src:i.icon_url,alt:e.providerIconAlt}}),a("NcHighlight",{staticClass:"option-text",attrs:{search:e.query,text:i.title}})],1)]}}]),model:{value:e.selectedProvider,callback:function(i){e.selectedProvider=i},expression:"selectedProvider"}}),a("NcEmptyContent",{staticClass:"provider-list--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[a("LinkVariantIcon")]},proxy:!0}])})],1)},Dp=[],yp=ae(bp,Tp,Dp,!1,null,"e54e09d6");const Ep=yp.exports;ie(y1);const kp={name:"NcRawLinkInput",components:{LinkVariantIcon:ro,NcEmptyContent:eo,NcLoadingIcon:E0,NcReferenceWidget:ip,NcTextField:Ru},props:{provider:{type:Object,required:!0}},emits:["submit"],data(){return{inputValue:"",loading:!1,reference:null,abortController:null,inputPlaceholder:j("Enter link")}},computed:{isLinkValid(){return so(this.inputValue)}},methods:{focus(){this.$refs["url-input"].$el.getElementsByTagName("input")[0]?.focus()},onSubmit(e){const a=e.target.value;this.isLinkValid&&this.$emit("submit",a)},onClear(){this.inputValue="",this.reference=null},onInput(){this.reference=null,this.abortController&&this.abortController.abort(),this.isLinkValid&&bl(()=>{this.updateReference()},500)()},updateReference(){this.loading=!0,this.abortController=new AbortController,ma.get(Pa("references/resolve",2)+"?reference="+encodeURIComponent(this.inputValue),{signal:this.abortController.signal}).then(e=>{this.reference=e.data.ocs.data.references[this.inputValue]}).catch(e=>{console.error(e)}).then(()=>{this.loading=!1})}}};var Ap=function(){var e=this,a=e._self._c;return a("div",{staticClass:"raw-link"},[a("div",{staticClass:"input-wrapper"},[a("NcTextField",{ref:"url-input",attrs:{value:e.inputValue,"show-trailing-button":e.inputValue!=="",label:e.inputPlaceholder},on:{"update:value":[function(i){e.inputValue=i},e.onInput],"trailing-button-click":e.onClear},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.onSubmit.apply(null,arguments)}}},[e.loading?a("NcLoadingIcon",{attrs:{size:16}}):a("LinkVariantIcon",{attrs:{size:16}})],1)],1),e.reference!==null?a("NcReferenceWidget",{staticClass:"reference-widget",attrs:{reference:e.reference}}):a("NcEmptyContent",{staticClass:"raw-link--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}])})],1)},wp=[],Sp=ae(kp,Ap,wp,!1,null,"3c1803b5");const vp=Sp.exports,Rp={name:"NcSearchResult",components:{NcHighlight:S0},props:{entry:{type:Object,required:!0},query:{type:String,required:!0}}};var Cp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"result"},[e.entry.icon?a("div",{staticClass:"result--icon-class",class:{[e.entry.icon]:!0,rounded:e.entry.rounded}}):a("img",{staticClass:"result--image",class:{rounded:e.entry.rounded},attrs:{src:e.entry.thumbnailUrl}}),a("div",{staticClass:"result--content"},[a("span",{staticClass:"result--content--name"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.title}})],1),a("span",{staticClass:"result--content--subline"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.subline}})],1)])])},Np=[],Op=ae(Rp,Cp,Np,!1,null,"8571023b");const Bp=Op.exports;ie(E1,Us,Hs);const Rs=5,xp={name:"NcSearch",components:{LinkVariantIcon:ro,DotsHorizontalIcon:wn,NcEmptyContent:eo,NcSelect:R0,NcSearchResult:Bp},props:{provider:{type:Object,required:!0},showEmptyContent:{type:Boolean,default:!0},searchPlaceholder:{type:String,default:null}},emits:["submit"],data(){return{searchQuery:"",selectedResult:null,resultsBySearchProvider:{},searching:!1,searchingMoreOf:null,abortController:null,noOptionsText:j("Start typing to search"),providerIconAlt:j("Provider icon")}},computed:{mySearchPlaceholder(){return this.searchPlaceholder||j("Search")},searchProviderIds(){return this.provider.search_providers_ids},options(){if(this.searchQuery==="")return[];const e=[];return so(this.searchQuery)&&e.push(this.rawLinkEntry),e.push(...this.formattedSearchResults),e},rawLinkEntry(){return{id:"rawLinkEntry",resourceUrl:this.searchQuery,isRawLink:!0}},formattedSearchResults(){const e=[];return this.searchProviderIds.forEach(a=>{if(this.resultsBySearchProvider[a].entries.length>0){(this.searchProviderIds.length>1||this.resultsBySearchProvider[a].entries.length>1)&&e.push({id:"groupTitle-"+a,name:this.resultsBySearchProvider[a].name,isCustomGroupTitle:!0,providerId:a});const i=this.resultsBySearchProvider[a].entries.map((n,o)=>({id:"provider-"+a+"-entry-"+o,...n}));e.push(...i),this.resultsBySearchProvider[a].isPaginated&&e.push({id:"moreOf-"+a,name:this.resultsBySearchProvider[a].name,isMore:!0,providerId:a,isLoading:this.searchingMoreOf===a})}}),e}},mounted(){this.resetResults()},beforeDestroy(){this.cancelSearchRequests()},methods:{t:j,resetResults(){const e={};this.searchProviderIds.forEach(a=>{e[a]={entries:[]}}),this.resultsBySearchProvider=e},focus(){setTimeout(()=>{this.$refs["search-select"]?.$el?.querySelector("#search-select-input")?.focus()},300)},cancelSearchRequests(){this.abortController&&this.abortController.abort()},onSearchInput(e,a){this.searchQuery=e,bl(()=>{this.updateSearch()},500)()},onSelectResultSelected(e){e!==null&&(e.resourceUrl?(this.cancelSearchRequests(),this.$emit("submit",e.resourceUrl)):e.isMore&&this.searchMoreOf(e.providerId).then(()=>{this.selectedResult=null}))},searchMoreOf(e){return this.searchingMoreOf=e,this.cancelSearchRequests(),this.searchProviders(e)},updateSearch(){if(this.cancelSearchRequests(),this.resetResults(),this.searchQuery===""){this.searching=!1;return}return this.searchProviders()},searchProviders(e=null){this.abortController=new AbortController,this.searching=!0;const a=e===null?[...this.searchProviderIds].map(i=>this.searchOneProvider(i)):[this.searchOneProvider(e,this.resultsBySearchProvider[e]?.cursor??null)];return Promise.allSettled(a).then(i=>{i.find(n=>n.status==="rejected"&&(n.reason.name==="CanceledError"||n.reason.code==="ERR_CANCELED"))||(this.searching=!1,this.searchingMoreOf=null)})},searchOneProvider(e,a=null){const i=a===null?Pa("search/providers/{providerId}/search?term={term}&limit={limit}",{providerId:e,term:this.searchQuery,limit:Rs}):Pa("search/providers/{providerId}/search?term={term}&limit={limit}&cursor={cursor}",{providerId:e,term:this.searchQuery,limit:Rs,cursor:a});return ma.get(i,{signal:this.abortController.signal}).then(n=>{const o=n.data.ocs.data;this.resultsBySearchProvider[e].name=o.name,this.resultsBySearchProvider[e].cursor=o.cursor,this.resultsBySearchProvider[e].isPaginated=o.isPaginated,this.resultsBySearchProvider[e].entries.push(...o.entries)})}}};var Mp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"smart-picker-search",class:{"with-empty-content":e.showEmptyContent}},[a("NcSelect",{ref:"search-select",staticClass:"smart-picker-search--select",attrs:{"input-id":"search-select-input",label:"name",placeholder:e.mySearchPlaceholder,options:e.options,"append-to-body":!1,"close-on-select":!1,"clear-search-on-select":!1,"clear-search-on-blur":()=>!1,"reset-focus-on-options-change":!1,filterable:!1,autoscroll:!0,"reset-on-options-change":!1,loading:e.searching},on:{search:e.onSearchInput,input:e.onSelectResultSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isRawLink?a("div",{staticClass:"custom-option"},[a("LinkVariantIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t("Raw link {options}",{options:i.resourceUrl}))+" ")])],1):i.resourceUrl?a("NcSearchResult",{staticClass:"search-result",attrs:{entry:i,query:e.searchQuery}}):i.isCustomGroupTitle?a("span",{staticClass:"custom-option group-name"},[e.provider.icon_url?a("img",{staticClass:"provider-icon group-name-icon",attrs:{src:e.provider.icon_url}}):e._e(),a("span",{staticClass:"option-text"},[a("strong",[e._v(e._s(i.name))])])]):i.isMore?a("span",{class:{"custom-option":!0}},[i.isLoading?a("span",{staticClass:"option-simple-icon icon-loading-small"}):a("DotsHorizontalIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t('Load more "{options}"',{options:i.name}))+" ")])],1):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.noOptionsText)+" ")]},proxy:!0}]),model:{value:e.selectedResult,callback:function(i){e.selectedResult=i},expression:"selectedResult"}}),e.showEmptyContent?a("NcEmptyContent",{staticClass:"smart-picker-search--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{alt:e.providerIconAlt,src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}],null,!1,2922132592)}):e._e()],1)},jp=[],Yp=ae(xp,Mp,jp,!1,null,"05fef988");const qp=Yp.exports,Ot={providerList:1,standardLinkInput:2,searchInput:3,customElement:4},Lp={name:"NcReferencePicker",components:{NcCustomPickerElement:lp,NcProviderList:Ep,NcRawLinkInput:vp,NcSearch:qp},props:{initialProvider:{type:Object,default:()=>null},width:{type:Number,default:null},focusOnCreate:{type:Boolean,default:!0}},emits:["cancel","cancel-raw-link","cancel-search","provider-selected","submit"],data(){return{MODES:Ot,selectedProvider:this.initialProvider}},computed:{mode(){return this.selectedProvider===null?Ot.providerList:ti(this.selectedProvider.id)?Ot.customElement:this.selectedProvider.search_providers_ids?Ot.searchInput:Ot.standardLinkInput},pickerWrapperStyle(){return{width:this.width?this.width+"px":void 0}}},mounted(){this.focusOnCreate&&(this.initialProvider?setTimeout(()=>{this.$refs["url-input"]?.focus()},300):this.$nextTick(()=>{this.$refs["provider-list"]?.focus()}))},methods:{onEscapePressed(){this.selectedProvider!==null?this.deselectProvider():this.cancelProviderSelection()},onProviderSelected(e){this.selectedProvider=e,this.$emit("provider-selected",e),this.$nextTick(()=>{this.$refs["url-input"]?.focus()})},cancelCustomElement(){this.deselectProvider()},cancelSearch(){this.$emit("cancel-search",this.selectedProvider?.title),this.deselectProvider()},cancelRawLinkInput(){this.$emit("cancel-raw-link",this.selectedProvider?.title),this.deselectProvider()},cancelProviderSelection(){this.$emit("cancel")},submitLink(e){this.selectedProvider!==null&&Fp(this.selectedProvider.id),this.$emit("submit",e),this.deselectProvider()},deselectProvider(){this.selectedProvider=null,this.$emit("provider-selected",null),setTimeout(()=>{this.$refs["provider-list"]?.focus()},300)}}};var Zp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"reference-picker",style:e.pickerWrapperStyle,attrs:{tabindex:"-1"},on:{keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:(i.stopPropagation(),i.preventDefault(),e.onEscapePressed.apply(null,arguments))}}},[e.mode===e.MODES.providerList?a("NcProviderList",{ref:"provider-list",on:{"select-provider":e.onProviderSelected,submit:e.submitLink,cancel:e.cancelProviderSelection}}):e.mode===e.MODES.standardLinkInput?a("NcRawLinkInput",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelRawLinkInput}}):e.mode===e.MODES.searchInput?a("NcSearch",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{cancel:e.cancelSearch,submit:e.submitLink}}):e.mode===e.MODES.customElement?a("div",{staticClass:"custom-element-wrapper"},[a("NcCustomPickerElement",{staticClass:"custom-element",attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelCustomElement}})],1):e._e()],1)},Ip=[],Hp=ae(Lp,Zp,Ip,!1,null,"cd33df8e");const Pp=Hp.exports;ie(A1,k1);const Gp={name:"NcReferencePickerModal",components:{NcReferencePicker:Pp,NcModal:Bs,NcButton:$a,ArrowLeftIcon:$r,CloseIcon:vn},props:{initialProvider:{type:Object,default:()=>null},focusOnCreate:{type:Boolean,default:!0},isInsideViewer:{type:Boolean,default:!1}},emits:["cancel","submit"],data(){return{show:!0,selectedProvider:this.initialProvider,backButtonTitle:j("Back to provider selection"),closeButtonTitle:j("Close"),closeButtonLabel:j("Close Smart Picker")}},computed:{isProviderSelected(){return this.selectedProvider!==null},showBackButton(){return this.initialProvider===null&&this.isProviderSelected},modalSize(){return this.isProviderSelected&&ti(this.selectedProvider.id)?$c(this.selectedProvider.id)??"large":"normal"},showModalName(){return!this.isProviderSelected||!ti(this.selectedProvider.id)},modalName(){return this.isProviderSelected?this.selectedProvider.title:j("Smart Picker")}},mounted(){if(this.isInsideViewer){const e=this.$refs.modal_content;Di("viewer:trapElements:changed",e)}},methods:{onCancel(){this.show=!1,this.$emit("cancel")},onSubmit(e){this.show=!1,this.$emit("submit",e)},onProviderSelect(e){this.selectedProvider=e,e===null&&this.initialProvider!==null&&this.onCancel()},onBackClicked(){this.$refs.referencePicker.deselectProvider()}}};var Up=function(){var e=this,a=e._self._c;return e.show?a("NcModal",{staticClass:"reference-picker-modal",attrs:{size:e.modalSize,"can-close":!0},on:{close:e.onCancel}},[a("div",{ref:"modal_content",staticClass:"reference-picker-modal--content"},[e.showBackButton?a("NcButton",{staticClass:"back-button",attrs:{"aria-label":e.backButtonTitle,title:e.backButtonTitle},on:{click:e.onBackClicked},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeftIcon")]},proxy:!0}],null,!1,3001860362)}):e._e(),a("NcButton",{staticClass:"close-button",attrs:{"aria-label":e.closeButtonLabel,title:e.closeButtonTitle,type:"tertiary"},on:{click:e.onCancel},scopedSlots:e._u([{key:"icon",fn:function(){return[a("CloseIcon")]},proxy:!0}],null,!1,2491825086)}),e.showModalName?a("h2",[e._v(" "+e._s(e.modalName)+" ")]):e._e(),a("NcReferencePicker",{ref:"referencePicker",attrs:{"initial-provider":e.initialProvider,"focus-on-create":e.focusOnCreate},on:{"provider-selected":e.onProviderSelect,submit:e.onSubmit,cancel:e.onCancel}})],1)]):e._e()},zp=[],Wp=ae(Gp,Up,zp,!1,null,"a742c4c2");const s3=Wp.exports;if(Aa(!1),Array.prototype.find||(Array.prototype.find=function(e){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof e!="function")throw new TypeError("predicate must be a function");for(var a=Object(this),i=a.length>>>0,n=arguments[1],o,s=0;s<i;s++)if(o=a[s],e.call(n,o,s,a))return o}),window&&typeof window.CustomEvent!="function"){let e=function(a,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(a,i.bubbles,i.cancelable,i.detail),n};typeof window.Event<"u"&&(e.prototype=window.Event.prototype),window.CustomEvent=e}function $p({onlyFirst:e=!1}={}){const a=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(a,e?void 0:"g")}const r3=$p();const Vp={name:"NcAutoCompleteResult",components:{NcUserStatusIcon:pr},props:{title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},subline:{type:String,default:null},id:{type:String,default:null},icon:{type:String,required:!0},iconUrl:{type:String,default:null},source:{type:String,required:!0},status:{type:[Object,Array],default:()=>({})}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:In}};var Qp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"autocomplete-result"},[a("div",{staticClass:"autocomplete-result__icon",class:[e.icon,`autocomplete-result__icon--${e.avatarUrl?"with-avatar":""}`],style:e.avatarUrl?{backgroundImage:`url(${e.avatarUrl})`}:null},[e.status.icon?a("span",{staticClass:"autocomplete-result__status autocomplete-result__status--icon"},[e._v(" "+e._s(e.status&&e.status.icon||"")+" ")]):e.status.status&&e.status.status!=="offline"?a("NcUserStatusIcon",{staticClass:"autocomplete-result__status",attrs:{status:e.status.status}}):e._e()],1),a("span",{staticClass:"autocomplete-result__content"},[a("span",{staticClass:"autocomplete-result__title",attrs:{title:e.labelWithFallback}},[e._v(" "+e._s(e.labelWithFallback)+" ")]),e.subline?a("span",{staticClass:"autocomplete-result__subline"},[e._v(" "+e._s(e.subline)+" ")]):e._e()])])},Kp=[],Jp=ae(Vp,Qp,Kp,!1,null,"98c79945");const l3=Jp.exports;ie(v1,Ps);const Xp=["d","D","p","P","s","S","x","X",")","(","|","/"],Cs=[];Xp.forEach(e=>{Cs.push(":"+e),Cs.push(":-"+e)}),S1,j("Write a message …");ie(R1),{...R0.props,placeholder:j("Select a tag")},ie(Zs),ie(C1),ie(N1),j,Cn(function(e){this.loadGroup(e)},200),window.OCP?.Accessibility?.disableKeyboardShortcuts?.();function e2(e=document.body){const a=window.getComputedStyle(e).getPropertyValue("--background-invert-if-dark");return a!==void 0?a==="invert(100%)":!1}e2();const bi={name:B("viewer","Name"),save:B("viewer","Save"),saveAs:B("viewer","Save as"),back:B("viewer","Back"),loading:B("viewer","Loading …"),resetOperations:B("viewer","Reset"),changesLoseWarningHint:B("viewer","All changes will be lost."),discardChangesWarningHint:B("viewer","Are you sure you want to continue?"),cancel:B("viewer","Cancel"),apply:B("viewer","Apply"),warning:B("viewer","Warning"),confirm:B("viewer","Confirm"),discardChanges:B("viewer","Discard changes"),undoTitle:B("viewer","Undo"),redoTitle:B("viewer","Redo"),showImageTitle:B("viewer","Show original image"),zoomInTitle:B("viewer","Zoom in"),zoomOutTitle:B("viewer","Zoom out"),toggleZoomMenuTitle:B("viewer","Toggle zoom menu"),adjustTab:B("viewer","Adjust"),finetuneTab:B("viewer","Fine-tune"),filtersTab:B("viewer","Filters"),watermarkTab:B("viewer","Watermark"),annotateTabLabel:B("viewer","Draw"),resize:B("viewer","Resize"),resizeTab:B("viewer","Resize"),imageName:B("viewer","Image name"),invalidImageError:B("viewer","Invalid image."),uploadImageError:B("viewer","Error while uploading the image."),areNotImages:B("viewer","are not images"),isNotImage:B("viewer","is not an image"),toBeUploaded:B("viewer","to be uploaded"),cropTool:B("viewer","Crop"),original:B("viewer","Original"),custom:B("viewer","Custom"),square:B("viewer","Square"),landscape:B("viewer","Landscape"),portrait:B("viewer","Portrait"),ellipse:B("viewer","Ellipse"),classicTv:B("viewer","Classic TV"),cinemascope:B("viewer","CinemaScope"),arrowTool:B("viewer","Arrow"),blurTool:B("viewer","Blur"),brightnessTool:B("viewer","Brightness"),contrastTool:B("viewer","Contrast"),ellipseTool:B("viewer","Ellipse"),unFlipX:B("viewer","Un-flip X"),flipX:B("viewer","Flip X"),unFlipY:B("viewer","Un-flip Y"),flipY:B("viewer","Flip Y"),hsvTool:B("viewer","HSV"),hue:B("viewer","Hue"),brightness:B("viewer","Brightness"),saturation:B("viewer","Saturation"),value:B("viewer","Value"),imageTool:B("viewer","Image"),importing:B("viewer","Importing …"),addImage:B("viewer","+ Add image"),uploadImage:B("viewer","Upload image"),fromGallery:B("viewer","From gallery"),lineTool:B("viewer","Line"),penTool:B("viewer","Pen"),polygonTool:B("viewer","Polygon"),sides:B("viewer","Sides"),rectangleTool:B("viewer","Rectangle"),cornerRadius:B("viewer","Corner Radius"),resizeWidthTitle:B("viewer","Width in pixels"),resizeHeightTitle:B("viewer","Height in pixels"),toggleRatioLockTitle:B("viewer","Toggle ratio lock"),resetSize:B("viewer","Reset to original image size"),rotateTool:B("viewer","Rotate"),textTool:B("viewer","Text"),textSpacings:B("viewer","Text spacing"),textAlignment:B("viewer","Text alignment"),fontFamily:B("viewer","Font family"),size:B("viewer","Size"),letterSpacing:B("viewer","Letter spacing"),lineHeight:B("viewer","Line height"),warmthTool:B("viewer","Warmth"),addWatermark:B("viewer","+ Add watermark"),addTextWatermark:B("viewer","+ Add text watermark"),addWatermarkTitle:B("viewer","Choose watermark type"),uploadWatermark:B("viewer","Upload watermark"),addWatermarkAsText:B("viewer","Add as text"),padding:B("viewer","Padding"),paddings:B("viewer","Paddings"),shadow:B("viewer","Shadow"),horizontal:B("viewer","Horizontal"),vertical:B("viewer","Vertical"),blur:B("viewer","Blur"),opacity:B("viewer","Opacity"),transparency:B("viewer","Transparency"),position:B("viewer","Position"),stroke:B("viewer","Stroke"),saveAsModalTitle:B("viewer","Save image as"),extension:B("viewer","Extension"),format:B("viewer","Format"),nameIsRequired:B("viewer","Name is required."),quality:B("viewer","Quality"),imageDimensionsHoverTitle:B("viewer","Saved image size (width x height)"),cropSizeLowerThanResizedWarning:B("viewer","Note that the selected crop area is lower than the applied resize which might cause quality decrease"),actualSize:B("viewer","Actual size (100%)"),fitSize:B("viewer","Fit size"),addImageTitle:B("viewer","Select image to add …"),mutualizedFailedToLoadImg:B("viewer","Failed to load image."),tabsMenu:B("viewer","Menu"),download:B("viewer","Download"),width:B("viewer","Width"),height:B("viewer","Height"),plus:"+",cropItemNoEffect:B("viewer","No preview available for this crop item")};let Ti,Ns;const a2={name:"ImageEditor",props:{fileid:{type:[String,Number],required:!0},mime:{type:String,required:!0},src:{type:String,required:!0}},data(){return{imageEditor:null}},computed:{config(){return{source:this.src,defaultSavedImageName:this.defaultSavedImageName,defaultSavedImageType:this.defaultSavedImageType,useBackendTranslations:!1,observePluginContainerSize:!0,defaultTabId:Ti.ADJUST,defaultToolId:Ns.CROP,tabsIds:Object.values(Ti).filter(e=>e!==Ti.WATERMARK).sort((e,a)=>e.localeCompare(a)),onClose:this.onClose,onSave:this.onSave,translations:bi,theme:{palette:{"bg-secondary":"var(--color-main-background)","bg-primary":"var(--color-background-dark)","bg-hover":"var(--color-background-hover)","bg-stateless":"var(--color-background-dark)","accent-primary":"var(--color-primary-element)","accent-stateless":"var(--color-primary-element)","border-active-bottom":"var(--color-primary-element)","bg-primary-active":"var(--color-background-dark)","bg-primary-hover":"var(--color-background-hover)","accent-primary-active":"var(--color-main-text)","accent-primary-hover":"var(--color-primary-element)",warning:"var(--color-error)"},typography:{fontFamily:"var(--font-face)"}}}},defaultSavedImageName(){return Nt.basename(this.src,Nt.extname(this.src))},defaultSavedImageType(){return Nt.extname(this.src).slice(1)||"jpeg"},hasHighContrastEnabled(){return(OCA?.Theming?.enabledThemes||[]).find(e=>e.indexOf("highcontrast")!==-1)},themeDataAttr(){return this.hasHighContrastEnabled?{"data-theme-dark-highcontrast":!0}:{"data-theme-dark":!0}}},async mounted(){const e=(await Nn(async()=>{const{default:a}=await import("./index-C7x6bWsg.chunk.mjs");return{default:a}},__vite__mapDeps([0,1,2]),import.meta.url)).default;Ti=e.TABS,Ns=e.TOOLS,this.imageEditor=new e(this.$refs.editor,this.config),this.imageEditor.render(),window.addEventListener("keydown",this.handleKeydown,!0),window.addEventListener("DOMNodeInserted",this.handleSfxModal)},beforeDestroy(){this.imageEditor&&this.imageEditor.terminate(),window.removeEventListener("keydown",this.handleKeydown,!0)},methods:{onClose(e,a){if(a){this.onExitWithoutSaving();return}window.removeEventListener("keydown",this.handleKeydown,!0),this.$emit("close")},async onSave({fullName:e,imageCanvas:a,mimeType:i,quality:n}){const{origin:o,pathname:s}=new URL(this.src),r=o+Nt.join(Nt.dirname(s),e);qa.debug("Saving image...",{putUrl:r,src:this.src,fullName:e}),i=i.replace("jpg","jpeg"),n=Math.max(Math.min(n,1),0)||1;try{const _=await new Promise(g=>a.toBlob(g,i,n)),l=await ma.put(r,new File([_],e));if(qa.info("Edited image saved!",{response:l}),O1(t("viewer","Image saved")),r!==this.src)Di("files:node:created",{fileid:parseInt(l?.headers?.["oc-fileid"]?.split("oc")[0])||null});else{this.$emit("updated");const g=await B1(o,decodeURI(s)),d=new x1({id:Number.parseInt(this.fileid),source:this.src,mtime:new Date(g.lastmod),...g,attributes:{...g,...g.props}});Di("files:node:updated",d)}}catch(_){qa.error("Error saving image",{error:_}),M1(t("viewer","Error saving image"))}},onExitWithoutSaving(){OC.dialogs.confirmDestructive(bi.changesLoseConfirmation+`

`+bi.changesLoseConfirmationHint,t("viewer","Unsaved changes"),{type:OC.dialogs.YES_NO_BUTTONS,confirm:t("viewer","Drop changes"),confirmClasses:"error",cancel:bi.cancel},e=>{e&&this.onClose("warning-ignored",!1)})},handleKeydown(e){e.key!=="Enter"&&e.stopImmediatePropagation(),e.key==="Escape"&&(e.preventDefault(),document.querySelector(".FIE_topbar-close-button").click()),e.ctrlKey&&e.key==="s"&&(e.preventDefault(),document.querySelector(".FIE_topbar-save-button").click()),e.ctrlKey&&e.key==="z"&&(e.preventDefault(),document.querySelector(".FIE_topbar-undo-button").click())},handleSfxModal(e){e.target?.classList&&e.target.classList.contains("SfxModal-Wrapper")&&Di("viewer:trapElements:changed",e.target)}}};var t2=function(){var e=this,a=e._self._c;return a("div",e._b({ref:"editor",staticClass:"viewer__image-editor"},"div",e.themeDataAttr,!1))},i2=[],n2=ii(a2,t2,i2,!1,null,"a2c8f486");const o2=n2.exports,s2=["jpg","jpeg","png"],r2=new RegExp(`\\.(${s2.join("|")})$`,"i");function l2(e,a){return a.find(i=>i.fileid===e)}function _2(e,a){return a.find(i=>i.filename!==e.filename&&i.basename.startsWith(e.name)&&r2.test(i.basename))}ua.use(Qs);const d2={name:"Images",components:{ImageEditor:o2,PlayCircleOutline:h_,NcLoadingIcon:E0},props:{canZoom:{type:Boolean,default:!1},editing:{type:Boolean,default:!1}},data(){return{dragging:!1,shiftX:0,shiftY:0,zoomRatio:1,fallback:!1,livePhotoCanBePlayed:!1}},computed:{src(){return this.source??this.davPath},zoomHeight(){return Math.round(this.height*this.zoomRatio)},zoomWidth(){return Math.round(this.width*this.zoomRatio)},alt(){return this.basename},imgStyle(){return this.zoomRatio===1?{}:{marginTop:Math.round(this.shiftY*2)+"px",marginLeft:Math.round(this.shiftX*2)+"px",height:this.zoomHeight+"px",width:this.zoomWidth+"px"}},livePhoto(){if(this.metadataFilesLivePhoto!==void 0)return l2(this.metadataFilesLivePhoto,this.fileList)},livePhotoSrc(){return this.livePhoto?.source??this.livePhotoDavPath},livePhotoDavPath(){return this.livePhoto?j1({filename:this.livePhoto.filename,basename:this.livePhoto.basename}):null}},asyncComputed:{data(){return this.mime==="image/svg+xml"?this.getBase64FromImage():this.mime==="image/gif"?this.src:this.source&&!this.hasPreview&&!this.previewUrl?this.source:this.fallback?this.src:this.previewPath}},watch:{active(e,a){e===!0&&a===!1?(this.resetZoom(),window.addEventListener("mouseout",this.dragEnd)):e===!1&&window.removeEventListener("mouseout",this.dragEnd)}},methods:{updateImgSize(){this.$refs.image?(this.naturalHeight=this.$refs.image.naturalHeight,this.naturalWidth=this.$refs.image.naturalWidth):this.$refs.video&&(this.naturalHeight=this.$refs.video.videoHeight,this.naturalWidth=this.$refs.video.videoWidth),this.updateHeightWidth(),this.doneLoading()},async getBase64FromImage(){const e=await ma.get(this.src);return`data:${this.mime};base64,${btoa(e.data)}`},updateZoom(e){if(!this.canZoom)return;e.stopPropagation(),e.preventDefault();const a=this.$refs.image??this.$refs.video,i=e.clientX-a.x-this.width*this.zoomRatio/2,n=e.clientY-a.y-this.height*this.zoomRatio/2,o=i/(this.width*this.zoomRatio),s=n/(this.height*this.zoomRatio),r=e.deltaY<0?Math.min(this.zoomRatio*1.1,5):Math.max(this.zoomRatio/1.1,1);if(r===1)return this.resetZoom();const _=this.width*r-this.width*this.zoomRatio,l=this.height*r-this.height*this.zoomRatio;this.disableSwipe(),this.shiftX=this.shiftX-o*_,this.shiftY=this.shiftY-s*l,this.zoomRatio=r},resetZoom(){this.enableSwipe(),this.zoomRatio=1,this.shiftX=0,this.shiftY=0},dragStart(e){const{pageX:a,pageY:i}=e;this.dragX=a,this.dragY=i,this.dragging=!0;const n=this.$refs.image??this.$refs.video;n.onmouseup=this.dragEnd,n.onmousemove=this.dragHandler},dragEnd(e){e.preventDefault(),this.dragging=!1;const a=this.$refs.image??this.$refs.video;a&&(a.onmouseup=null,a.onmousemove=null)},dragHandler(e){e.preventDefault();const{pageX:a,pageY:i}=e;if(this.dragging&&this.zoomRatio>1&&a>0&&i>0){const n=this.shiftX+(a-this.dragX),o=this.shiftY+(i-this.dragY),s=this.zoomWidth-this.width,r=this.zoomHeight-this.height;this.shiftX=Math.min(Math.max(n,-s/2),s/2),this.shiftY=Math.min(Math.max(o,-r/2),r/2),this.dragX=a,this.dragY=i}},onDblclick(){this.canZoom&&(this.zoomRatio>1?this.resetZoom():this.zoomRatio=1.3)},onClose(){this.$emit("update:editing",!1)},onFail(){this.fallback||(console.error(`Loading of file preview ${Y1(this.src)} failed, falling back to original file`),this.fallback=!0)},doneLoadingLivePhoto(){this.livePhotoCanBePlayed=!0,this.doneLoading()},playLivePhoto(){this.livePhotoCanBePlayed&&this.$refs.video.play()},stopLivePhoto(){this.$refs.video.load()},t:B}};var f2=function(){var e=this,a=e._self._c;return a("div",{staticClass:"image_container"},[e.editing?a("ImageEditor",{attrs:{mime:e.mime,src:e.src,fileid:e.fileid},on:{close:e.onClose}}):e.data!==null?[e.livePhotoCanBePlayed?e._e():a("img",{ref:"image",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio!==1},style:e.imgStyle,attrs:{alt:e.alt,src:e.data},on:{"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},load:e.updateImgSize,wheel:e.updateZoom,dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},mousedown:function(i){return i.preventDefault(),e.dragStart.apply(null,arguments)}}}),e.livePhoto?[a("video",{directives:[{name:"show",rawName:"v-show",value:e.livePhotoCanBePlayed,expression:"livePhotoCanBePlayed"}],ref:"video",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio!==1},style:e.imgStyle,attrs:{playsinline:!0,poster:e.data,src:e.livePhotoSrc,preload:"metadata"},on:{canplaythrough:e.doneLoadingLivePhoto,loadedmetadata:e.updateImgSize,wheel:e.updateZoom,"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},mousedown:function(i){return i.preventDefault(),e.dragStart.apply(null,arguments)},ended:e.stopLivePhoto}}),e.width!==0?a("button",{staticClass:"live-photo_play_button",style:{left:`calc(50% - ${e.width/2}px)`},attrs:{disabled:!e.livePhotoCanBePlayed,"aria-description":e.t("viewer","Play the live photo")},on:{click:e.playLivePhoto,pointerenter:e.playLivePhoto,focus:e.playLivePhoto,pointerleave:e.stopLivePhoto,blur:e.stopLivePhoto}},[e.livePhotoCanBePlayed?a("PlayCircleOutline"):a("NcLoadingIcon"),e._v(" "+e._s(e.t("viewer","LIVE"))+" ")],1):e._e()]:e._e()]:e._e()],2)},g2=[],h2=ii(d2,f2,g2,!1,null,"8a36d79a");const F2=h2.exports,u2=Wt(Al,"enabled_preview_providers",[]),Tl=["image/heic","image/heif","image/tiff","image/x-xbitmap","image/emf"],c2=["image/apng","image/bmp","image/gif","image/jpeg","image/png","image/svg+xml","image/webp","image/x-icon"],m2=()=>Tl.filter(e=>u2.findIndex(a=>{const i=new RegExp(a.replace(/^\/|\/$/g,""),"i");return e.match(i)})>-1),Dl=m2(),Os=Tl.filter(e=>!Dl.includes(e));Os.length>0&&qa.warn("Some mimes were ignored because they are not enabled in the server previews config",{ignoredMimes:Os});const p2={id:"images",group:"media",mimes:[...c2,...Dl],component:F2},b2=()=>Nn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),T2=Gs("viewer","blank.mp4"),D2={name:"Videos",components:{VuePlyr:b2},data(){return{isFullscreenButtonVisible:!1}},computed:{livePhotoPath(){const e=_2(this,this.fileList);if(e!==void 0)return q1(e)},player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:T2,controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen"],loadSprite:!1,fullscreen:{iosNative:!0}}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},updated(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e.getAttribute("data-plyr")==="fullscreen"&&e.addEventListener("click",this.hideHeaderAndFooter),e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){qa.debug("Closing video stream",{filename:this.filename}),this.$refs.video?.pause?.(),this.player.stop(),this.player.destroy()},methods:{hideHeaderAndFooter(){this.isFullscreenButtonVisible=!this.isFullscreenButtonVisible,this.isFullscreenButtonVisible?(document.body.querySelector("main").classList.add("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.add("viewer__hidden-fullscreen")):(document.body.querySelector("main").classList.remove("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.remove("viewer__hidden-fullscreen"))},updateVideoSize(){this.naturalHeight=this.$refs.video?.videoHeight,this.naturalWidth=this.$refs.video?.videoWidth,this.updateHeightWidth()},donePlaying(){this.$refs.video.autoplay=!1,this.$refs.video.load()},onLoadedMetadata(){this.updateVideoSize(),this.active||this.player.stop()}}};var y2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",style:{height:e.height+"px",width:e.width+"px"},attrs:{options:e.options}},[a("video",{ref:"video",attrs:{autoplay:e.active?!0:null,playsinline:!0,poster:e.livePhotoPath,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading,loadedmetadata:e.onLoadedMetadata}},[e._v(" "+e._s(e.t("viewer","Your browser does not support videos."))+" ")])])],1):e._e()},E2=[],k2=ii(D2,y2,E2,!1,null,"572afae3");const A2=k2.exports,w2={id:"videos",group:"media",mimes:["video/mpeg","video/ogg","video/webm","video/mp4","video/x-m4v","video/x-flv","video/quicktime"],mimesAliases:{"video/x-matroska":"video/webm"},component:A2},S2=()=>Nn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),v2={name:"Audios",components:{VuePlyr:S2},computed:{player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:"/blank.aac",controls:["play-large","play","progress","current-time","mute","volume","settings"],loadSprite:!1}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},mounted(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){qa.debug("Closing audio stream",{filename:this.filename}),this.$refs.audio.pause(),this.player.stop(),this.player.destroy()},methods:{donePlaying(){this.$refs.audio.autoplay=!1,this.$refs.audio.load()}}};var R2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",attrs:{options:e.options}},[a("audio",{ref:"audio",attrs:{autoplay:e.active,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading}},[e._v(" "+e._s(e.t("viewer","Your browser does not support audio."))+" ")])])],1):e._e()},C2=[],N2=ii(v2,R2,C2,!1,null,"2be0d851");const O2=N2.exports,B2={id:"audios",group:"media",mimes:["audio/aac","audio/aacp","audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/vorbis","audio/wav","audio/webm"],component:O2};class x2{_state;_mimetypes;_mimetypesCompare;constructor(){this._mimetypes=[],this._mimetypesCompare=[],this._state={},this._state.file="",this._state.fileInfo=null,this._state.compareFileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.el=null,this._state.loadMore=()=>[],this._state.onPrev=()=>{},this._state.onNext=()=>{},this._state.onClose=()=>{},this._state.canLoop=!0,this._state.handlers=[],this._state.overrideHandlerId=null,this.registerHandler(p2),this.registerHandler(w2),this.registerHandler(B2),qa.debug("OCA.Viewer initialized")}get availableHandlers(){return this._state.handlers}registerHandler(a){const i=this.validateHandler(a);if(i){qa.error("Could not register handler",{error:i,handler:a});return}this._state.handlers.push(a);const n=[...a.mimes,...Object.keys(a.mimesAliases||{})];this._mimetypes.push.apply(this._mimetypes,n),a?.canCompare===!0&&this._mimetypesCompare.push.apply(this._mimetypesCompare,n)}validateHandler({id:a,mimes:i,mimesAliases:n,component:o}){if(!a||a.trim()===""||typeof a!="string")return"The handler doesn't have a valid id";if(this._state.handlers.find(s=>s.id===a))return"The handler is already registered";if(!(i&&Array.isArray(i))&&!n)return"Handler needs a valid mime array or mimesAliases";if(!o||typeof o!="object"&&typeof o!="function")return"The handler doesn't have a valid component"}get file(){return this._state.file}get fileInfo(){return this._state.fileInfo}get compareFileInfo(){return this._state.compareFileInfo}get files(){return this._state.files}get enableSidebar(){return this._state.enableSidebar}get el(){return this._state.el}get mimetypes(){return this._mimetypes}get mimetypesCompare(){return this._mimetypesCompare}get loadMore(){return this._state.loadMore}get onPrev(){return this._state.onPrev}get onNext(){return this._state.onNext}get onClose(){return this._state.onClose}get canLoop(){return this._state.canLoop}get overrideHandlerId(){return this._state.overrideHandlerId}setRootElement(a=null){if(this._state.file)throw new Error("Please set root element before calling Viewer.open().");this._state.el=a}open({path:a,fileInfo:i,list:n=[],enableSidebar:o=!0,loadMore:s=()=>[],canLoop:r=!0,onPrev:_=()=>{},onNext:l=()=>{},onClose:g=()=>{}}={}){if(typeof arguments[0]=="string")throw new Error("Opening the viewer with a single string parameter is deprecated. Please use a destructuring object instead",`OCA.Viewer.open({ path: '${a}' })`);if(!a&&!i)throw new Error("Viewer needs either an URL or path to open. None given");if(a&&!a.startsWith("/"))throw new Error("Please use an absolute path");if(!Array.isArray(n))throw new Error("The files list must be an array");if(typeof s!="function")throw new Error("The loadMore method must be a function");a?this._state.file=a:this._state.fileInfo=i,this._state.el||(this._state.files=n,this._state.enableSidebar=o,this._state.loadMore=s,this._state.onPrev=_,this._state.onNext=l,this._state.onClose=g,this._state.canLoop=r)}openWith(a,i={}){this._state.overrideHandlerId=a,this.open(i)}compare(a,i){this.open({fileInfo:a}),this._state.compareFileInfo=i}close(){this._state.file="",this._state.fileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.canLoop=!0,this._state.loadMore=()=>[],this._state.overrideHandlerId=null}}$1(),window.OCA=window.OCA??{},window.OCA.Viewer=new x2,window.OCA.Viewer.version=wl;
