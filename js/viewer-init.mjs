const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('viewer', '', 'js/index-DGe5iX7C.chunk.mjs'),window.OC.filePath('viewer', '', 'js/logger-Dn3WCux-.chunk.mjs'),window.OC.filePath('viewer', '', 'css/logger-B0wUvUiR.chunk.css')])))=>i.map(i=>d[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{C as te,D as Cl,V as ka,E as Ys,N as wa,F as qs,G as at,H as Ls,I as Ca,J as st,r as Wt,K as Ol,L as Nl,B as M,M as Bl,P as xl,n as ii,O as oe,Q as Ba,R as Ml,S as jl,T as x,c as ma,U as Pa,W as Yl,l as Zs,_ as Is,X as uo,Y as ql,Z as co,$ as Ti,a0 as nn,a1 as Sn,a2 as Ll,a3 as Yt,a4 as Zl,a5 as Il,a6 as Hs,a7 as Rn,a8 as Hl,a9 as Cn,aa as Ps,ab as on,t as j0,u as Y0,ac as On,ad as Pl,ae as Gl,af as Ul,ag as Gs,ah as zl,ai as Nn,aj as Wl,ak as Vl,al as $l,am as Ql,an as Kl,ao as Jl,ap as Xl,m as Bn,aq as e1,ar as Us,as as a1,at as zs,au as t1,av as i1,aw as n1,ax as o1,ay as s1,aB as r1,aC as Ws,aD as l1,aE as _1,aG as d1,aH as f1,aI as g1,aJ as h1,aK as F1,aL as u1,aM as c1,aN as m1,aO as Vs,aP as $s,aQ as p1,aR as b1,aS as T1,aT as D1,aU as y1,aV as E1,aW as Y2,aX as Qs,aY as k1,aZ as A1,a_ as w1,a$ as Ks,b0 as v1,b1 as S1,b2 as R1,b3 as C1,z as Di,b4 as O1,b5 as N1,b6 as B1,b7 as q2,b8 as x1,b9 as M1,ba as j1,bb as Nt,v as xn,s as qa,bc as Y1,bd as q1,be as L1,x as Z1,g as I1,bf as H1,k as P1}from"./logger-Dn3WCux-.chunk.mjs";import{C as Mn,N as G1}from"./NcActionButton-DgewDal6.chunk.mjs";import U1 from"./NcActionLink-vpbN97Uq.chunk.mjs";import{A as Js,a as z1}from"./actionText-fFcUPi2g-1UIVDoW6.chunk.mjs";const Sl="viewer",Rl="3.0.0",W1={name:"NcIconSvgWrapper",props:{inline:{type:Boolean,default:!1},svg:{type:String,default:""},name:{type:String,default:""},path:{type:String,default:""},size:{type:[Number,String],default:20,validator:e=>typeof e=="number"||e==="auto"}},computed:{iconSize(){return typeof this.size=="number"?"".concat(this.size,"px"):this.size},cleanSvg(){if(!this.svg||this.path)return;const e=Cl.sanitize(this.svg),a=new DOMParser().parseFromString(e,"image/svg+xml");return a.querySelector("parsererror")?(ka.util.warn("SVG is not valid"),""):(a.documentElement.id&&a.documentElement.removeAttribute("id"),a.documentElement.outerHTML)},attributes(){return{class:["icon-vue",{"icon-vue--inline":this.inline}],style:{"--icon-size":this.iconSize},role:"img","aria-hidden":this.name?void 0:!0,"aria-label":this.name||void 0}}}};var V1=function(){var e=this,a=e._self._c;return e.cleanSvg?a("span",e._b({domProps:{innerHTML:e._s(e.cleanSvg)}},"span",e.attributes,!1)):a("span",e._b({},"span",e.attributes,!1),[a("svg",{attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:e.path}})])])},$1=[],Q1=te(W1,V1,$1,!1,null,"2d0a4d76");const y0=Q1.exports,K1=Ys({name:"NcDialogButton",components:{NcButton:wa,NcIconSvgWrapper:y0},props:{callback:{type:Function,required:!1,default:()=>{}},label:{type:String,required:!0},icon:{type:String,required:!1,default:void 0},type:{type:String,required:!1,default:"secondary",validator:e=>typeof e=="string"&&["primary","secondary","tertiary","error","warning","success"].includes(e)},nativeType:{type:String,required:!1,default:"button",validator(e){return["submit","reset","button"].includes(e)}},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:a}){return{handleClick:i=>{var n;(n=e.callback)==null||n.call(e),a("click",i)}}}});var J1=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("NcButton",{attrs:{"aria-label":e.label,disabled:e.disabled,"native-type":e.nativeType,type:e.type},on:{click:e.handleClick},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("icon",function(){return[e.icon!==void 0?a("NcIconSvgWrapper",{attrs:{svg:e.icon}}):e._e()]})]},proxy:!0}],null,!0)},[e._v(" "+e._s(e.label)+" ")])},X1=[],e_=te(K1,J1,X1,!1,null,null);const a_=e_.exports,t_=Ys({name:"NcDialog",components:{NcDialogButton:a_,NcModal:qs},props:{name:{type:String,required:!0},message:{type:String,default:""},additionalTrapElements:{type:Array,validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="string"||a instanceof HTMLElement),default:()=>[]},container:{type:String,required:!1,default:"body"},open:{type:Boolean,default:!0},size:{type:String,required:!1,default:"small",validator:e=>typeof e=="string"&&["small","normal","large","full"].includes(e)},buttons:{type:Array,required:!1,default:()=>[],validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="object")},canClose:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!1},isForm:{type:Boolean,default:!1},outTransition:{type:Boolean,default:!1},navigationClasses:{type:[String,Array,Object],required:!1,default:""},navigationAriaLabel:{type:String,required:!1,default:""},navigationAriaLabelledby:{type:String,required:!1,default:""},contentClasses:{type:[String,Array,Object],required:!1,default:""},dialogClasses:{type:[String,Array,Object],required:!1,default:""}},emits:["closing","update:open","submit"],setup(e,{emit:a,slots:i}){const n=at(),{width:o}=Ls(n,{width:900}),s=Ca(()=>o.value<876),r=Ca(()=>i?.navigation!==void 0),_=st(),l=Ca(()=>e.navigationAriaLabel||void 0),g=Ca(()=>{if(!e.navigationAriaLabel)return e.navigationAriaLabelledby||_}),d=at(),f=Ca(()=>e.isForm&&!r.value?"form":"div"),h=Ca(()=>f.value==="form"?{submit(w){w.preventDefault(),a("submit",w)}}:{}),u=at(!0),m=()=>{f.value==="form"&&!d.value.reportValidity()||(b(),window.setTimeout(()=>y(),300))},b=()=>{u.value=!1,a("closing")},y=()=>{u.value=!0,a("update:open",!1)},k=Ca(()=>({canClose:e.canClose,container:e.container===void 0?"body":e.container,labelId:_,size:e.size,show:e.open&&u.value,outTransition:e.outTransition,closeOnClickOutside:e.closeOnClickOutside,additionalTrapElements:e.additionalTrapElements}));return{dialogElement:d,dialogListeners:h,dialogTagName:f,handleButtonClose:m,handleClosing:b,handleClosed:y,hasNavigation:r,navigationId:_,navigationAriaLabelAttr:l,navigationAriaLabelledbyAttr:g,isNavigationCollapsed:s,modalProps:k,wrapper:n}}});var i_=function(){var e=this,a=e._self._c;return e._self._setupProxy,e.open?a("NcModal",e._b({staticClass:"dialog__modal",attrs:{"enable-slideshow":!1,"enable-swipe":!1},on:{close:e.handleClosed,"update:show":e.handleClosing}},"NcModal",e.modalProps,!1),[a("h2",{staticClass:"dialog__name",attrs:{id:e.navigationId},domProps:{textContent:e._s(e.name)}}),a(e.dialogTagName,e._g({ref:"dialogElement",tag:"component",staticClass:"dialog",class:e.dialogClasses},e.dialogListeners),[a("div",{ref:"wrapper",class:["dialog__wrapper",{"dialog__wrapper--collapsed":e.isNavigationCollapsed}]},[e.hasNavigation?a("nav",{staticClass:"dialog__navigation",class:e.navigationClasses,attrs:{"aria-label":e.navigationAriaLabelAttr,"aria-labelledby":e.navigationAriaLabelledbyAttr}},[e._t("navigation",null,{isCollapsed:e.isNavigationCollapsed})],2):e._e(),a("div",{staticClass:"dialog__content",class:e.contentClasses},[e._t("default",function(){return[a("p",{staticClass:"dialog__text"},[e._v(" "+e._s(e.message)+" ")])]})],2)]),a("div",{staticClass:"dialog__actions"},[e._t("actions",function(){return e._l(e.buttons,function(i,n){return a("NcDialogButton",e._b({key:n,on:{click:e.handleButtonClose}},"NcDialogButton",i,!1))})})],2)])],1):e._e()},n_=[],o_=te(t_,i_,n_,!1,null,"de9f48dc");const H2=o_.exports;function Xs(){try{return Wt("core","capabilities")}catch{return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"),"_oc_capabilities"in window?window._oc_capabilities:{}}}const s_='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-eye" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>';function q0(e,a,i){window.OCP.Files.Router.goToRoute(null,{view:a.id,fileid:String(e.fileid)},{dir:i,openfile:"true"},!0)}async function r_(e,a,i){const n=[window.OCP.Files.Router.name,{...window.OCP.Files.Router.params},{...window.OCP.Files.Router.query},!0],o=()=>{delete n[2].openfile,window.OCP.Files.Router.goToRoute(...n)};return q0(e,a,i),window.OCA.Viewer.open({path:e.path,onPrev:q0,onNext:q0,onClose:o}),null}function l_(){Ol(new Nl({id:"view",displayName:()=>M("viewer","View"),iconSvgInline:()=>s_,default:Bl.DEFAULT,enabled:e=>e.some(a=>!(a.isDavRessource&&a.root?.startsWith("/files")))?!1:e.every(a=>!!(a.permissions&xl.READ)&&window.OCA.Viewer.mimetypes.includes(a.mime)),exec:r_}))}function si(e,a,i){e.$set(e.$data._asyncComputed[a],"state",i),e.$set(e.$data._asyncComputed[a],"updating",i==="updating"),e.$set(e.$data._asyncComputed[a],"error",i==="error"),e.$set(e.$data._asyncComputed[a],"success",i==="success")}function __(e){return typeof e=="function"?e:e.get}function sn(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function jn(e){return sn(e,"lazy")&&e.lazy}function d_(e,a){return e[Yn+a]}var Yn="async_computed$lazy_active$",Vt="async_computed$lazy_data$";function f_(e,a,i){e[Yn+a]=!1,e[Vt+a]=i}function g_(e){return{get:function(){return this[Yn+e]=!0,this[Vt+e]},set:function(a){this[Vt+e]=a}}}function h_(e,a,i){e[Vt+a]=i}function F_(e,a){return e[Vt+a]}var u_=function(e){return function(){var a=this;return e.watch.forEach(function(i){var n=i.split(".");if(n.length===1)a[i];else try{var o=a;n.forEach(function(s){o=o[s]})}catch(s){throw console.error("AsyncComputed: bad path: ",i),s}}),e.get.call(this)}},c_=function(e){return function(){return e.watch.call(this),e.get.call(this)}};function m_(e){if(typeof e.watch=="function")return c_(e);if(Array.isArray(e.watch))return e.watch.forEach(function(a){if(typeof a!="string")throw new Error("AsyncComputed: watch elemnts must be strings")}),u_(e);throw Error("AsyncComputed: watch should be function or an array")}var er=typeof Symbol=="function"?Symbol("did-not-update"):{},p_=function(e,a){return function(){return e.shouldUpdate.call(this)?a.call(this):er}},b_=function(e){return er===e},ar="_async_computed$",tr={install:function(e,a){a=a||{},e.config.optionMergeStrategies.asyncComputed=e.config.optionMergeStrategies.computed,e.mixin({data:function(){return{_asyncComputed:{}}},computed:{$asyncComputed:function(){return this.$data._asyncComputed}},beforeCreate:function(){var i=this.$options.asyncComputed||{};if(Object.keys(i).length){for(var n in i){var o=y_(n,i[n]);this.$options.computed[ar+n]=o}this.$options.data=D_(this.$options,a)}},created:function(){for(var i in this.$options.asyncComputed||{}){var n=this.$options.asyncComputed[i],o=ir.call(this,n,a);jn(n)?h_(this,i,o):this[i]=o}for(var s in this.$options.asyncComputed||{})T_(this,s,a,e)}})}};function T_(e,a,i,n){var o=0,s=function(r){var _=++o;b_(r)||((!r||!r.then)&&(r=Promise.resolve(r)),si(e,a,"updating"),r.then(function(l){_===o&&(si(e,a,"success"),e[a]=l)}).catch(function(l){if(_===o&&(si(e,a,"error"),n.set(e.$data._asyncComputed[a],"exception",l),i.errorHandler!==!1)){var g=i.errorHandler===void 0?console.error.bind(console,"Error evaluating async computed property:"):i.errorHandler;i.useRawError?g(l,e,l.stack):g(l.stack)}}))};n.set(e.$data._asyncComputed,a,{exception:null,update:function(){e._isDestroyed||s(__(e.$options.asyncComputed[a]).apply(e))}}),si(e,a,"updating"),e.$watch(ar+a,s,{immediate:!0})}function D_(e,a){var i=e.data,n=e.asyncComputed||{};return function(o){var s=(typeof i=="function"?i.call(this,o):i)||{};for(var r in n){var _=this.$options.asyncComputed[r],l=ir.call(this,_,a);jn(_)?(f_(s,r,l),this.$options.computed[r]=g_(r)):s[r]=l}return s}}function y_(e,a){if(typeof a=="function")return a;var i=a.get;if(sn(a,"watch")&&(i=m_(a)),sn(a,"shouldUpdate")&&(i=p_(a,i)),jn(a)){var n=i;i=function(){return d_(this,e)?n.call(this):F_(this,e)}}return i}function ir(e,a){var i=null;return"default"in e?i=e.default:"default"in a&&(i=a.default),typeof i=="function"?i.call(this):i}typeof window<"u"&&window.Vue&&window.Vue.use(tr);const E_={name:"PlayCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var k_=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon play-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},A_=[],w_=ii(E_,k_,A_,!1,null,null);const v_=w_.exports;oe();let nr=class or{static fromString(a){return new or(a)}constructor(a){this.value=a}icaltype="binary";decodeValue(){return this._b64_decode(this.value)}setEncodedValue(a){this.value=this._b64_encode(a)}_b64_encode(a){let i,n,o,s,r,_,l,g,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=0,h=0,u="",m=[];if(!a)return a;do i=a.charCodeAt(f++),n=a.charCodeAt(f++),o=a.charCodeAt(f++),g=i<<16|n<<8|o,s=g>>18&63,r=g>>12&63,_=g>>6&63,l=63&g,m[h++]=d.charAt(s)+d.charAt(r)+d.charAt(_)+d.charAt(l);while(f<a.length);u=m.join("");let b=a.length%3;return(b?u.slice(0,b-3):u)+"===".slice(b||3)}_b64_decode(a){let i,n,o,s,r,_,l,g,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=0,h=0,u="",m=[];if(!a)return a;a+="";do s=d.indexOf(a.charAt(f++)),r=d.indexOf(a.charAt(f++)),_=d.indexOf(a.charAt(f++)),l=d.indexOf(a.charAt(f++)),g=s<<18|r<<12|_<<6|l,i=g>>16&255,n=g>>8&255,o=255&g,m[h++]=_==64?String.fromCharCode(i):l==64?String.fromCharCode(i,n):String.fromCharCode(i,n,o);while(f<a.length);return u=m.join(""),u}toString(){return this.value}};const S_=/([PDWHMTS]{1,1})/,R_=["weeks","days","hours","minutes","seconds","isNegative"];class Ie{static fromSeconds(a){return new Ie().fromSeconds(a)}static isValueString(a){return a[0]==="P"||a[1]==="P"}static fromString(a){let i=0,n=Object.create(null),o=0;for(;(i=a.search(S_))!==-1;){let s=a[i],r=a.slice(0,Math.max(0,i));a=a.slice(i+1),o+=C_(s,r,n)}if(o<2)throw new Error('invalid duration value: Not enough duration components in "'+a+'"');return new Ie(n)}static fromData(a){return new Ie(a)}constructor(a){this.wrappedJSObject=this,this.fromData(a)}weeks=0;days=0;hours=0;minutes=0;seconds=0;isNegative=!1;icalclass="icalduration";icaltype="duration";clone(){return Ie.fromData(this)}toSeconds(){let a=this.seconds+60*this.minutes+3600*this.hours+86400*this.days+604800*this.weeks;return this.isNegative?-a:a}fromSeconds(a){let i=Math.abs(a);return this.isNegative=a<0,this.days=Ne(i/86400),this.days%7==0?(this.weeks=this.days/7,this.days=0):this.weeks=0,i-=86400*(this.days+7*this.weeks),this.hours=Ne(i/3600),i-=3600*this.hours,this.minutes=Ne(i/60),i-=60*this.minutes,this.seconds=i,this}fromData(a){for(let i of R_)this[i]=a&&i in a?a[i]:0}reset(){this.isNegative=!1,this.weeks=0,this.days=0,this.hours=0,this.minutes=0,this.seconds=0}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(i<n)}normalize(){this.fromSeconds(this.toSeconds())}toString(){if(this.toSeconds()==0)return"PT0S";{let a="";return this.isNegative&&(a+="-"),a+="P",this.weeks&&(a+=this.weeks+"W"),this.days&&(a+=this.days+"D"),(this.hours||this.minutes||this.seconds)&&(a+="T",this.hours&&(a+=this.hours+"H"),this.minutes&&(a+=this.minutes+"M"),this.seconds&&(a+=this.seconds+"S")),a}}toICALString(){return this.toString()}}function C_(e,a,i){let n;switch(e){case"P":i.isNegative=!(!a||a!=="-");break;case"D":n="days";break;case"W":n="weeks";break;case"H":n="hours";break;case"M":n="minutes";break;case"S":n="seconds";break;default:return 0}if(n){if(!a&&a!==0)throw new Error('invalid duration value: Missing number before "'+e+'"');let o=parseInt(a,10);if($t(o))throw new Error('invalid duration value: Invalid number "'+a+'" before "'+e+'"');i[n]=o}return 1}class B{static _dowCache={};static _wnCache={};static daysInMonth(a,i){let n=30;return a<1||a>12||(n=[0,31,28,31,30,31,30,31,31,30,31,30,31][a],a==2&&(n+=B.isLeapYear(i))),n}static isLeapYear(a){return a<=1752?a%4==0:a%4==0&&a%100!=0||a%400==0}static fromDayOfYear(a,i){let n=i,o=a,s=new B;s.auto_normalize=!1;let r=B.isLeapYear(n)?1:0;if(o<1)return n--,r=B.isLeapYear(n)?1:0,o+=B.daysInYearPassedMonth[r][12],B.fromDayOfYear(o,n);if(o>B.daysInYearPassedMonth[r][12])return r=B.isLeapYear(n)?1:0,o-=B.daysInYearPassedMonth[r][12],n++,B.fromDayOfYear(o,n);s.year=n,s.isDate=!0;for(let _=11;_>=0;_--)if(o>B.daysInYearPassedMonth[r][_]){s.month=_+1,s.day=o-B.daysInYearPassedMonth[r][_];break}return s.auto_normalize=!0,s}static fromStringv2(a){return new B({year:parseInt(a.slice(0,4),10),month:parseInt(a.slice(5,7),10),day:parseInt(a.slice(8,10),10),isDate:!0})}static fromDateString(a){return new B({year:Le(a.slice(0,4)),month:Le(a.slice(5,7)),day:Le(a.slice(8,10)),isDate:!0})}static fromDateTimeString(a,i){if(a.length<19)throw new Error('invalid date-time value: "'+a+'"');let n,o;a[19]&&a[19]==="Z"?n=X.utcTimezone:i&&(o=i.getParameter("tzid"),i.parent&&(i.parent.name==="standard"||i.parent.name==="daylight"?n=X.localTimezone:o&&(n=i.parent.getTimeZoneByID(o))));const s={year:Le(a.slice(0,4)),month:Le(a.slice(5,7)),day:Le(a.slice(8,10)),hour:Le(a.slice(11,13)),minute:Le(a.slice(14,16)),second:Le(a.slice(17,19))};return o&&!n&&(s.timezone=o),new B(s,n)}static fromString(a,i){return a.length>10?B.fromDateTimeString(a,i):B.fromDateString(a)}static fromJSDate(a,i){return new B().fromJSDate(a,i)}static fromData=function(a,i){return new B().fromData(a,i)};static now(){return B.fromJSDate(new Date,!1)}static weekOneStarts(a,i){let n=B.fromData({year:a,month:1,day:1,isDate:!0}),o=n.dayOfWeek(),s=i||B.DEFAULT_WEEK_START;return o>B.THURSDAY&&(n.day+=7),s>B.THURSDAY&&(n.day-=7),n.day-=o-s,n}static getDominicalLetter(a){let i="GFEDCBA",n=(a+(a/4|0)+(a/400|0)-(a/100|0)-1)%7;return B.isLeapYear(a)?i[(n+6)%7]+i[n]:i[n]}static#e=null;static get epochTime(){return this.#e||(this.#e=B.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0,isDate:!1,timezone:"Z"})),this.#e}static _cmp_attr(a,i,n){return a[n]>i[n]?1:a[n]<i[n]?-1:0}static daysInYearPassedMonth=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];static SUNDAY=1;static MONDAY=2;static TUESDAY=3;static WEDNESDAY=4;static THURSDAY=5;static FRIDAY=6;static SATURDAY=7;static DEFAULT_WEEK_START=2;constructor(a,i){this.wrappedJSObject=this;let n=this._time=Object.create(null);n.year=0,n.month=1,n.day=1,n.hour=0,n.minute=0,n.second=0,n.isDate=!1,this.fromData(a,i)}icalclass="icaltime";_cachedUnixTime=null;get icaltype(){return this.isDate?"date":"date-time"}zone=null;_pendingNormalization=!1;clone(){return new B(this._time,this.zone)}reset(){this.fromData(B.epochTime),this.zone=X.utcTimezone}resetTo(a,i,n,o,s,r,_){this.fromData({year:a,month:i,day:n,hour:o,minute:s,second:r,zone:_})}fromJSDate(a,i){return a?i?(this.zone=X.utcTimezone,this.year=a.getUTCFullYear(),this.month=a.getUTCMonth()+1,this.day=a.getUTCDate(),this.hour=a.getUTCHours(),this.minute=a.getUTCMinutes(),this.second=a.getUTCSeconds()):(this.zone=X.localTimezone,this.year=a.getFullYear(),this.month=a.getMonth()+1,this.day=a.getDate(),this.hour=a.getHours(),this.minute=a.getMinutes(),this.second=a.getSeconds()):this.reset(),this._cachedUnixTime=null,this}fromData(a,i){if(a)for(let[n,o]of Object.entries(a))n!=="icaltype"&&(this[n]=o);if(i&&(this.zone=i),a&&!("isDate"in a)?this.isDate=!("hour"in a):a&&"isDate"in a&&(this.isDate=a.isDate),a&&"timezone"in a){let n=Bi.get(a.timezone);this.zone=n||X.localTimezone}return a&&"zone"in a&&(this.zone=a.zone),this.zone||(this.zone=X.localTimezone),this._cachedUnixTime=null,this}dayOfWeek(a){let i=a||B.SUNDAY,n=(this.year<<12)+(this.month<<8)+(this.day<<3)+i;if(n in B._dowCache)return B._dowCache[n];let o=this.day,s=this.month+(this.month<3?12:0),r=this.year-(this.month<3?1:0),_=o+r+Ne(26*(s+1)/10)+Ne(r/4);return _+=6*Ne(r/100)+Ne(r/400),_=(_+7-i)%7+1,B._dowCache[n]=_,_}dayOfYear(){let a=B.isLeapYear(this.year)?1:0;return B.daysInYearPassedMonth[a][this.month-1]+this.day}startOfWeek(a){let i=a||B.SUNDAY,n=this.clone();return n.day-=(this.dayOfWeek()+7-i)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}endOfWeek(a){let i=a||B.SUNDAY,n=this.clone();return n.day+=(7-this.dayOfWeek()+i-B.SUNDAY)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}startOfMonth(){let a=this.clone();return a.day=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfMonth(){let a=this.clone();return a.day=B.daysInMonth(a.month,a.year),a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startOfYear(){let a=this.clone();return a.day=1,a.month=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfYear(){let a=this.clone();return a.day=31,a.month=12,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startDoyWeek(a){let i=a||B.SUNDAY,n=this.dayOfWeek()-i;return n<0&&(n+=7),this.dayOfYear()-n}getDominicalLetter(){return B.getDominicalLetter(this.year)}nthWeekDay(a,i){let n,o=B.daysInMonth(this.month,this.year),s=i,r=0,_=this.clone();if(s>=0){_.day=1,s!=0&&s--,r=_.day;let l=a-_.dayOfWeek();l<0&&(l+=7),r+=l,r-=a,n=a}else _.day=o,s++,n=_.dayOfWeek()-a,n<0&&(n+=7),n=o-n;return n+=7*s,r+n}isNthWeekDay(a,i){let n=this.dayOfWeek();return i===0&&n===a||this.nthWeekDay(a,i)===this.day}weekNumber(a){let i,n=(this.year<<12)+(this.month<<8)+(this.day<<3)+a;if(n in B._wnCache)return B._wnCache[n];let o=this.clone();o.isDate=!0;let s=this.year;o.month==12&&o.day>25?(i=B.weekOneStarts(s+1,a),o.compare(i)<0?i=B.weekOneStarts(s,a):s++):(i=B.weekOneStarts(s,a),o.compare(i)<0&&(i=B.weekOneStarts(--s,a)));let r=Ne(o.subtractDate(i).toSeconds()/86400/7)+1;return B._wnCache[n]=r,r}addDuration(a){let i=a.isNegative?-1:1,n=this.second,o=this.minute,s=this.hour,r=this.day;n+=i*a.seconds,o+=i*a.minutes,s+=i*a.hours,r+=i*a.days,r+=7*i*a.weeks,this.second=n,this.minute=o,this.hour=s,this.day=r,this._cachedUnixTime=null}subtractDate(a){let i=this.toUnixTime()+this.utcOffset(),n=a.toUnixTime()+a.utcOffset();return Ie.fromSeconds(i-n)}subtractDateTz(a){let i=this.toUnixTime(),n=a.toUnixTime();return Ie.fromSeconds(i-n)}compare(a){let i=this.toUnixTime(),n=a.toUnixTime();return i>n?1:n>i?-1:0}compareDateOnlyTz(a,i){let n=this.convertToZone(i),o=a.convertToZone(i),s=0;return(s=B._cmp_attr(n,o,"year"))!=0||(s=B._cmp_attr(n,o,"month"))!=0||(s=B._cmp_attr(n,o,"day")),s}convertToZone(a){let i=this.clone(),n=this.zone.tzid==a.tzid;return this.isDate||n||X.convert_time(i,this.zone,a),i.zone=a,i}utcOffset(){return this.zone==X.localTimezone||this.zone==X.utcTimezone?0:this.zone.utcOffset(this)}toICALString(){let a=this.toString();return a.length>10?xe.icalendar.value["date-time"].toICAL(a):xe.icalendar.value.date.toICAL(a)}toString(){let a=this.year+"-"+Ve(this.month)+"-"+Ve(this.day);return this.isDate||(a+="T"+Ve(this.hour)+":"+Ve(this.minute)+":"+Ve(this.second),this.zone===X.utcTimezone&&(a+="Z")),a}toJSDate(){return this.zone==X.localTimezone?this.isDate?new Date(this.year,this.month-1,this.day):new Date(this.year,this.month-1,this.day,this.hour,this.minute,this.second,0):new Date(1e3*this.toUnixTime())}_normalize(){return this._time.isDate&&(this._time.hour=0,this._time.minute=0,this._time.second=0),this.adjust(0,0,0,0),this}adjust(a,i,n,o,s){let r,_,l,g,d,f,h,u=0,m=0,b=s||this._time;if(b.isDate||(l=b.second+o,b.second=l%60,r=Ne(l/60),b.second<0&&(b.second+=60,r--),g=b.minute+n+r,b.minute=g%60,_=Ne(g/60),b.minute<0&&(b.minute+=60,_--),d=b.hour+i+_,b.hour=d%24,u=Ne(d/24),b.hour<0&&(b.hour+=24,u--)),b.month>12?m=Ne((b.month-1)/12):b.month<1&&(m=Ne(b.month/12)-1),b.year+=m,b.month-=12*m,f=b.day+a+u,f>0)for(;h=B.daysInMonth(b.month,b.year),!(f<=h);)b.month++,b.month>12&&(b.year++,b.month=1),f-=h;else for(;f<=0;)b.month==1?(b.year--,b.month=12):b.month--,f+=B.daysInMonth(b.month,b.year);return b.day=f,this._cachedUnixTime=null,this}fromUnixTime(a){this.zone=X.utcTimezone;let i=new Date(1e3*a);this.year=i.getUTCFullYear(),this.month=i.getUTCMonth()+1,this.day=i.getUTCDate(),this._time.isDate?(this.hour=0,this.minute=0,this.second=0):(this.hour=i.getUTCHours(),this.minute=i.getUTCMinutes(),this.second=i.getUTCSeconds()),this._cachedUnixTime=null}toUnixTime(){if(this._cachedUnixTime!==null)return this._cachedUnixTime;let a=this.utcOffset(),i=Date.UTC(this.year,this.month-1,this.day,this.hour,this.minute,this.second-a);return this._cachedUnixTime=i/1e3,this._cachedUnixTime}toJSON(){let a,i=["year","month","day","hour","minute","second","isDate"],n=Object.create(null),o=0,s=i.length;for(;o<s;o++)a=i[o],n[a]=this[a];return this.zone&&(n.timezone=this.zone.tzid),n}}(function(){function e(a){Object.defineProperty(B.prototype,a,{get:function(){return this._pendingNormalization&&(this._normalize(),this._pendingNormalization=!1),this._time[a]},set:function(i){a==="isDate"&&i&&!this._time.isDate&&this.adjust(0,0,0,0),this._cachedUnixTime=null,this._pendingNormalization=!0,this._time[a]=i}})}e("year"),e("month"),e("day"),e("hour"),e("minute"),e("second"),e("isDate")})();const O_=/[^ \t]/,N_={"^'":'"',"^n":`
`,"^^":"^"};function he(e){let a={},i=a.component=[];if(a.stack=[i],he._eachLine(e,function(n,o){he._handleContentLine(o,a)}),a.stack.length>1)throw new Ka("invalid ical body. component began but did not end");return a=null,i.length==1?i[0]:i}he.property=function(e,a){let i={component:[[],[]],designSet:a||xe.defaultSet};return he._handleContentLine(e,i),i.component[1][0]},he.component=function(e){return he(e)};class Ka extends Error{constructor(a){super(a),this.name=this.constructor.name;try{throw new Error}catch(i){if(i.stack){let n=i.stack.split(`
`);n.shift(),this.stack=n.join(`
`)}}}}he.ParserError=Ka,he._handleContentLine=function(e,a){let i,n,o,s,r,_,l=e.indexOf(":"),g=e.indexOf(";"),d={};if(g!==-1&&l!==-1&&g>l&&(g=-1),g!==-1){if(o=e.slice(0,Math.max(0,g)).toLowerCase(),r=he._parseParameters(e.slice(Math.max(0,g)),0,a.designSet),r[2]==-1)throw new Ka("Invalid parameters in '"+e+"'");if(d=r[0],i=r[1].length+r[2]+g,(n=e.slice(Math.max(0,i)).indexOf(":"))===-1)throw new Ka("Missing parameter value in '"+e+"'");s=e.slice(Math.max(0,i+n+1))}else{if(l===-1)throw new Ka('invalid line (no token ";" or ":") "'+e+'"');if(o=e.slice(0,Math.max(0,l)).toLowerCase(),s=e.slice(Math.max(0,l+1)),o==="begin"){let k=[s.toLowerCase(),[],[]];return a.stack.length===1?a.component.push(k):a.component[2].push(k),a.stack.push(a.component),a.component=k,void(a.designSet||(a.designSet=xe.getDesignSet(a.component[0])))}if(o==="end")return void(a.component=a.stack.pop())}let f,h,u,m,b=!1,y=!1;a.designSet.propertyGroups&&o.indexOf(".")!==-1?(h=o.split("."),d.group=h[0],u=h[1]):u=o,u in a.designSet.property&&(f=a.designSet.property[u],"multiValue"in f&&(b=f.multiValue),"structuredValue"in f&&(y=f.structuredValue),s&&"detectType"in f&&(_=f.detectType(s))),_||(_="value"in d?d.value.toLowerCase():f?f.defaultType:"unknown"),delete d.value,b&&y?(s=he._parseMultiValue(s,y,_,[],b,a.designSet,y),m=[u,d,_,s]):b?(m=[u,d,_],he._parseMultiValue(s,b,_,m,null,a.designSet,!1)):y?(s=he._parseMultiValue(s,y,_,[],null,a.designSet,y),m=[u,d,_,s]):(s=he._parseValue(s,_,a.designSet,!1),m=[u,d,_,s]),a.component[0]!=="vcard"||a.component[1].length!==0||o==="version"&&s==="4.0"||(a.designSet=xe.getDesignSet("vcard3")),a.component[1].push(m)},he._parseValue=function(e,a,i,n){return a in i.value&&"fromICAL"in i.value[a]?i.value[a].fromICAL(e,n):e},he._parseParameters=function(e,a,i){let n,o,s,r,_,l,g=a,d=0,f={},h=-1;for(;d!==!1&&(d=oa(e,"=",d+1))!==-1;){if(n=e.slice(g+1,d),n.length==0)throw new Ka("Empty parameter name in '"+e+"'");if(o=n.toLowerCase(),l=!1,_=!1,r=o in i.param&&i.param[o].valueType?i.param[o].valueType:"text",o in i.param&&(_=i.param[o].multiValue,i.param[o].multiValueSeparateDQuote&&(l=he._rfc6868Escape('"'+_+'"'))),e[d+1]==='"'){if(h=d+2,d=oa(e,'"',h),_&&d!=-1){let u=!0;for(;u;)e[d+1]==_&&e[d+2]=='"'?d=oa(e,'"',d+3):u=!1}if(d===-1)throw new Ka('invalid line (no matching double quote) "'+e+'"');s=e.slice(h,d),g=oa(e,";",d),g===-1&&(d=!1)}else{h=d+1;let u=oa(e,";",h),m=oa(e,":",h);m!==-1&&u>m?(u=m,d=!1):u===-1?(u=m===-1?e.length:m,d=!1):(g=u,d=u),s=e.slice(h,u)}if(s=he._rfc6868Escape(s),_){let u=l||_;s=he._parseMultiValue(s,u,r,[],null,i)}else s=he._parseValue(s,r,i);_&&o in f?Array.isArray(f[o])?f[o].push(s):f[o]=[f[o],s]:f[o]=s}return[f,s,h]},he._rfc6868Escape=function(e){return e.replace(/\^['n^]/g,function(a){return N_[a]})},he._parseMultiValue=function(e,a,i,n,o,s,r){let _,l=0,g=0;if(a.length===0)return e;for(;(l=oa(e,a,g))!==-1;)_=e.slice(g,l),_=o?he._parseMultiValue(_,o,i,[],null,s,r):he._parseValue(_,i,s,r),n.push(_),g=l+a.length;return _=e.slice(g),_=o?he._parseMultiValue(_,o,i,[],null,s,r):he._parseValue(_,i,s,r),n.push(_),n.length==1?n[0]:n},he._eachLine=function(e,a){let i,n,o,s=e.length,r=e.search(O_),_=r;do _=e.indexOf(`
`,r)+1,o=_>1&&e[_-2]==="\r"?2:1,_===0&&(_=s,o=0),n=e[r],n===" "||n==="	"?i+=e.slice(r+1,_-o):(i&&a(null,i),i=e.slice(r,_-o)),r=_;while(_!==s);i=i.trim(),i.length&&a(null,i)};const B_=["tzid","location","tznames","latitude","longitude"];class X{static _compare_change_fn(a,i){return a.year<i.year?-1:a.year>i.year?1:a.month<i.month?-1:a.month>i.month?1:a.day<i.day?-1:a.day>i.day?1:a.hour<i.hour?-1:a.hour>i.hour?1:a.minute<i.minute?-1:a.minute>i.minute?1:a.second<i.second?-1:a.second>i.second?1:0}static convert_time(a,i,n){if(a.isDate||i.tzid==n.tzid||i==X.localTimezone||n==X.localTimezone)return a.zone=n,a;let o=i.utcOffset(a);return a.adjust(0,0,0,-o),o=n.utcOffset(a),a.adjust(0,0,0,o),null}static fromData(a){return new X().fromData(a)}static#e=null;static get utcTimezone(){return this.#e||(this.#e=X.fromData({tzid:"UTC"})),this.#e}static#a=null;static get localTimezone(){return this.#a||(this.#a=X.fromData({tzid:"floating"})),this.#a}static adjust_change(a,i,n,o,s){return B.prototype.adjust.call(a,i,n,o,s,a)}static _minimumExpansionYear=-1;static EXTRA_COVERAGE=5;constructor(a){this.wrappedJSObject=this,this.fromData(a)}tzid="";location="";tznames="";latitude=0;longitude=0;component=null;expandedUntilYear=0;icalclass="icaltimezone";fromData(a){if(this.expandedUntilYear=0,this.changes=[],a instanceof $e)this.component=a;else{if(a&&"component"in a)if(typeof a.component=="string"){let i=he(a.component);this.component=new $e(i)}else a.component instanceof $e?this.component=a.component:this.component=null;for(let i of B_)a&&i in a&&(this[i]=a[i])}return this.component instanceof $e&&!this.tzid&&(this.tzid=this.component.getFirstPropertyValue("tzid")),this}utcOffset(a){if(this==X.utcTimezone||this==X.localTimezone||(this._ensureCoverage(a.year),!this.changes.length))return 0;let i={year:a.year,month:a.month,day:a.day,hour:a.hour,minute:a.minute,second:a.second},n=this._findNearbyChange(i),o=-1,s=1;for(;;){let _=rt(this.changes[n],!0);if(_.utcOffset<_.prevUtcOffset?X.adjust_change(_,0,0,0,_.utcOffset):X.adjust_change(_,0,0,0,_.prevUtcOffset),X._compare_change_fn(i,_)>=0?o=n:s=-1,s==-1&&o!=-1)break;if(n+=s,n<0)return 0;if(n>=this.changes.length)break}let r=this.changes[o];if(r.utcOffset-r.prevUtcOffset<0&&o>0){let _=rt(r,!0);if(X.adjust_change(_,0,0,0,_.prevUtcOffset),X._compare_change_fn(i,_)<0){let l=this.changes[o-1],g=!1;r.is_daylight!=g&&l.is_daylight==g&&(r=l)}}return r.utcOffset}_findNearbyChange(a){let i=tt(this.changes,a,X._compare_change_fn);return i>=this.changes.length?this.changes.length-1:i}_ensureCoverage(a){if(X._minimumExpansionYear==-1){let n=B.now();X._minimumExpansionYear=n.year}let i=a;if(i<X._minimumExpansionYear&&(i=X._minimumExpansionYear),i+=X.EXTRA_COVERAGE,!this.changes.length||this.expandedUntilYear<a){let n=this.component.getAllSubcomponents(),o=n.length,s=0;for(;s<o;s++)this._expandComponent(n[s],i,this.changes);this.changes.sort(X._compare_change_fn),this.expandedUntilYear=i}}_expandComponent(a,i,n){if(!a.hasProperty("dtstart")||!a.hasProperty("tzoffsetto")||!a.hasProperty("tzoffsetfrom"))return null;let o,s=a.getFirstProperty("dtstart").getFirstValue();function r(l){return l.factor*(3600*l.hours+60*l.minutes)}function _(){let l={};return l.is_daylight=a.name=="daylight",l.utcOffset=r(a.getFirstProperty("tzoffsetto").getFirstValue()),l.prevUtcOffset=r(a.getFirstProperty("tzoffsetfrom").getFirstValue()),l}if(a.hasProperty("rrule")||a.hasProperty("rdate")){let l=a.getAllProperties("rdate");for(let d of l){let f=d.getFirstValue();o=_(),o.year=f.year,o.month=f.month,o.day=f.day,f.isDate?(o.hour=s.hour,o.minute=s.minute,o.second=s.second,s.zone!=X.utcTimezone&&X.adjust_change(o,0,0,0,-o.prevUtcOffset)):(o.hour=f.hour,o.minute=f.minute,o.second=f.second,f.zone!=X.utcTimezone&&X.adjust_change(o,0,0,0,-o.prevUtcOffset)),n.push(o)}let g=a.getFirstProperty("rrule");if(g){g=g.getFirstValue(),o=_(),g.until&&g.until.zone==X.utcTimezone&&(g.until.adjust(0,0,0,o.prevUtcOffset),g.until.zone=X.localTimezone);let d,f=g.iterator(s);for(;(d=f.next())&&(o=_(),!(d.year>i)&&d);)o.year=d.year,o.month=d.month,o.day=d.day,o.hour=d.hour,o.minute=d.minute,o.second=d.second,o.isDate=d.isDate,X.adjust_change(o,0,0,0,-o.prevUtcOffset),n.push(o)}}else o=_(),o.year=s.year,o.month=s.month,o.day=s.day,o.hour=s.hour,o.minute=s.minute,o.second=s.second,X.adjust_change(o,0,0,0,-o.prevUtcOffset),n.push(o);return n}toString(){return this.tznames?this.tznames:this.tzid}}let ze=null;const Bi={get count(){return ze===null?0:Object.keys(ze).length},reset:function(){ze=Object.create(null);let e=X.utcTimezone;ze.Z=e,ze.UTC=e,ze.GMT=e},has:function(e){return ze!==null&&!!ze[e]},get:function(e){return ze===null&&this.reset(),ze[e]},register:function(e,a){if(ze===null&&this.reset(),e instanceof $e&&e.name==="vtimezone"&&(e=(a=new X(e)).tzid),!(a instanceof X))throw new TypeError("timezone must be ICAL.Timezone or ICAL.Component");ze[e]=a},remove:function(e){return ze===null?null:delete ze[e]}};function $t(e){return typeof e=="number"&&isNaN(e)}function Le(e){let a=parseInt(e,10);if($t(a))throw new Error('Could not extract integer from "'+e+'"');return a}function Ta(e,a){if(e!==void 0)return e instanceof a?e:new a(e)}function oa(e,a,i){for(;(i=e.indexOf(a,i))!==-1;){if(!(i>0&&e[i-1]==="\\"))return i;i+=1}return-1}function tt(e,a,i){if(!e.length)return 0;let n,o,s=0,r=e.length-1;for(;s<=r;)if(n=s+Math.floor((r-s)/2),o=i(a,e[n]),o<0)r=n-1;else{if(!(o>0))break;s=n+1}return o<0?n:o>0?n+1:n}function rt(e,a){if(e&&typeof e=="object"){if(e instanceof Date)return new Date(e.getTime());if("clone"in e)return e.clone();if(Array.isArray(e)){let i=[];for(let n=0;n<e.length;n++)i.push(a?rt(e[n],!0):e[n]);return i}{let i={};for(let[n,o]of Object.entries(e))i[n]=a?rt(o,!0):o;return i}}return e}function sr(e){let a="",i=e||"",n=0,o=0;for(;i.length;){let s=i.codePointAt(n);s<128?++o:o+=s<2048?2:s<65536?3:4,o<Re.foldLength+1?n+=s>65535?2:1:(a+=Re.newLineChar+" "+i.slice(0,Math.max(0,n)),i=i.slice(Math.max(0,n)),n=o=0)}return a.slice(Re.newLineChar.length+1)}function Ve(e){switch(typeof e!="string"&&(typeof e=="number"&&(e=parseInt(e)),e=String(e)),e.length){case 0:return"00";case 1:return"0"+e;default:return e}}function Ne(e){return e<0?Math.ceil(e):Math.floor(e)}function dt(e,a){for(let i in e){let n=Object.getOwnPropertyDescriptor(e,i);n&&!Object.getOwnPropertyDescriptor(a,i)&&Object.defineProperty(a,i,n)}return a}var x_=Object.freeze({__proto__:null,updateTimezones:function(e){let a,i,n,o,s;if(!e||e.name!=="vcalendar")return e;for(a=e.getAllSubcomponents(),i=[],n={},s=0;s<a.length;s++)a[s].name==="vtimezone"?n[a[s].getFirstProperty("tzid").getFirstValue()]=a[s]:i=i.concat(a[s].getAllProperties());for(o={},s=0;s<i.length;s++){let r=i[s].getParameter("tzid");r&&(o[r]=!0)}for(let[r,_]of Object.entries(n))o[r]||e.removeSubcomponent(_);for(let r of Object.keys(o))!n[r]&&Bi.has(r)&&e.addSubcomponent(Bi.get(r).component);return e},isStrictlyNaN:$t,strictParseInt:Le,formatClassType:Ta,unescapedIndexOf:oa,binsearchInsert:tt,clone:rt,foldline:sr,pad2:Ve,trunc:Ne,extend:dt});class ra{static fromString(a){let i={};return i.factor=a[0]==="+"?1:-1,i.hours=Le(a.slice(1,3)),i.minutes=Le(a.slice(4,6)),new ra(i)}static fromSeconds(a){let i=new ra;return i.fromSeconds(a),i}constructor(a){this.fromData(a)}hours=0;minutes=0;factor=1;icaltype="utc-offset";clone(){return ra.fromSeconds(this.toSeconds())}fromData(a){if(a)for(let[i,n]of Object.entries(a))this[i]=n;this._normalize()}fromSeconds(a){let i=Math.abs(a);return this.factor=a<0?-1:1,this.hours=Ne(i/3600),i-=3600*this.hours,this.minutes=Ne(i/60),this}toSeconds(){return this.factor*(60*this.minutes+3600*this.hours)}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(n>i)}_normalize(){let a=this.toSeconds(),i=this.factor;for(;a<-43200;)a+=97200;for(;a>50400;)a-=97200;this.fromSeconds(a),a==0&&(this.factor=i)}toICALString(){return xe.icalendar.value["utc-offset"].toICAL(this.toString())}toString(){return(this.factor==1?"+":"-")+Ve(this.hours)+":"+Ve(this.minutes)}}class Ya extends B{static fromDateAndOrTimeString(a,i){function n(b,y,k){return b?Le(b.slice(y,y+k)):null}let o=a.split("T"),s=o[0],r=o[1],_=r?xe.vcard.value.time._splitZone(r):[],l=_[0],g=_[1],d=s?s.length:0,f=g?g.length:0,h=s&&s[0]=="-"&&s[1]=="-",u=g&&g[0]=="-",m={year:h?null:n(s,0,4),month:!h||d!=4&&d!=7?d==7||d==10?n(s,5,2):null:n(s,2,2),day:d==5?n(s,3,2):d==7&&h?n(s,5,2):d==10?n(s,8,2):null,hour:u?null:n(g,0,2),minute:u&&f==3?n(g,1,2):f>4?n(g,u?1:3,2):null,second:f==4?n(g,2,2):f==6?n(g,4,2):f==8?n(g,6,2):null};return l=l=="Z"?X.utcTimezone:l&&l[3]==":"?ra.fromString(l):null,new Ya(m,l,i)}constructor(a,i,n){super(a,i),this.icaltype=n||"date-and-or-time"}icalclass="vcardtime";icaltype="date-and-or-time";clone(){return new Ya(this._time,this.zone,this.icaltype)}_normalize(){return this}utcOffset(){return this.zone instanceof ra?this.zone.toSeconds():B.prototype.utcOffset.apply(this,arguments)}toICALString(){return xe.vcard.value[this.icaltype].toICAL(this.toString())}toString(){let a,i=this.year,n=this.month,o=this.day,s=this.hour,r=this.minute,_=this.second,l=n!==null,g=o!==null,d=s!==null,f=r!==null,h=_!==null,u=(i!==null?Ve(i)+(l||g?"-":""):l||g?"--":"")+(l?Ve(n):"")+(g?"-"+Ve(o):""),m=(d?Ve(s):"-")+(d&&f?":":"")+(f?Ve(r):"")+(d||f?"":"-")+(f&&h?":":"")+(h?Ve(_):"");switch(this.zone===X.utcTimezone?a="Z":this.zone instanceof ra?a=this.zone.toString():this.zone===X.localTimezone?a="":this.zone instanceof X?a=ra.fromSeconds(this.zone.utcOffset(this)).toString():a="",this.icaltype){case"time":return m+a;case"date-and-or-time":case"date-time":return u+(m=="--"?"":"T"+m+a);case"date":return u}return null}}class Fa{static _indexMap={BYSECOND:0,BYMINUTE:1,BYHOUR:2,BYDAY:3,BYMONTHDAY:4,BYYEARDAY:5,BYWEEKNO:6,BYMONTH:7,BYSETPOS:8};static _expandMap={SECONDLY:[1,1,1,1,1,1,1,1],MINUTELY:[2,1,1,1,1,1,1,1],HOURLY:[2,2,1,1,1,1,1,1],DAILY:[2,2,2,1,1,1,1,1],WEEKLY:[2,2,2,2,3,3,1,1],MONTHLY:[2,2,2,2,2,3,3,1],YEARLY:[2,2,2,2,2,2,2,2]};static UNKNOWN=0;static CONTRACT=1;static EXPAND=2;static ILLEGAL=3;constructor(a){this.fromData(a)}completed=!1;rule=null;dtstart=null;last=null;occurrence_number=0;by_indices=null;initialized=!1;by_data=null;days=null;days_index=0;fromData(a){if(this.rule=Ta(a.rule,Ze),!this.rule)throw new Error("iterator requires a (ICAL.Recur) rule");if(this.dtstart=Ta(a.dtstart,B),!this.dtstart)throw new Error("iterator requires a (ICAL.Time) dtstart");a.by_data?this.by_data=a.by_data:this.by_data=rt(this.rule.parts,!0),a.occurrence_number&&(this.occurrence_number=a.occurrence_number),this.days=a.days||[],a.last&&(this.last=Ta(a.last,B)),this.by_indices=a.by_indices,this.by_indices||(this.by_indices={BYSECOND:0,BYMINUTE:0,BYHOUR:0,BYDAY:0,BYMONTH:0,BYWEEKNO:0,BYMONTHDAY:0}),this.initialized=a.initialized||!1,this.initialized||this.init()}init(){this.initialized=!0,this.last=this.dtstart.clone();let a=this.by_data;if("BYDAY"in a&&this.sort_byday_rules(a.BYDAY),"BYYEARDAY"in a&&("BYMONTH"in a||"BYWEEKNO"in a||"BYMONTHDAY"in a||"BYDAY"in a))throw new Error("Invalid BYYEARDAY rule");if("BYWEEKNO"in a&&"BYMONTHDAY"in a)throw new Error("BYWEEKNO does not fit to BYMONTHDAY");if(this.rule.freq=="MONTHLY"&&("BYYEARDAY"in a||"BYWEEKNO"in a))throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");if(this.rule.freq=="WEEKLY"&&("BYYEARDAY"in a||"BYMONTHDAY"in a))throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");if(this.rule.freq!="YEARLY"&&"BYYEARDAY"in a)throw new Error("BYYEARDAY may only appear in YEARLY rules");this.last.second=this.setup_defaults("BYSECOND","SECONDLY",this.dtstart.second),this.last.minute=this.setup_defaults("BYMINUTE","MINUTELY",this.dtstart.minute),this.last.hour=this.setup_defaults("BYHOUR","HOURLY",this.dtstart.hour);let i=this.last.day=this.setup_defaults("BYMONTHDAY","DAILY",this.dtstart.day);if(this.last.month=this.setup_defaults("BYMONTH","MONTHLY",this.dtstart.month),this.rule.freq=="WEEKLY")if("BYDAY"in a){let[,n]=this.ruleDayOfWeek(a.BYDAY[0],this.rule.wkst),o=n-this.last.dayOfWeek(this.rule.wkst);(this.last.dayOfWeek(this.rule.wkst)<n&&o>=0||o<0)&&(this.last.day+=o)}else{let n=Ze.numericDayToIcalDay(this.dtstart.dayOfWeek());a.BYDAY=[n]}if(this.rule.freq=="YEARLY"){for(;this.expand_year_days(this.last.year),!(this.days.length>0);)this.increment_year(this.rule.interval);this._nextByYearDay()}if(this.rule.freq=="MONTHLY"&&this.has_by_data("BYDAY")){let n=null,o=this.last.clone(),s=B.daysInMonth(this.last.month,this.last.year);for(let r of this.by_data.BYDAY){this.last=o.clone();let[_,l]=this.ruleDayOfWeek(r),g=this.last.nthWeekDay(l,_);if(_>=6||_<=-6)throw new Error("Malformed values in BYDAY part");if(g>s||g<=0){if(n&&n.month==o.month)continue;for(;g>s||g<=0;)this.increment_month(),s=B.daysInMonth(this.last.month,this.last.year),g=this.last.nthWeekDay(l,_)}this.last.day=g,(!n||this.last.compare(n)<0)&&(n=this.last.clone())}if(this.last=n.clone(),this.has_by_data("BYMONTHDAY")&&this._byDayAndMonthDay(!0),this.last.day>s||this.last.day==0)throw new Error("Malformed values in BYDAY part")}else if(this.has_by_data("BYMONTHDAY")){this.last.day=1;let n=B.daysInMonth(this.last.month,this.last.year);if(i<0)this.last.day=n+i+1;else if(this.by_data.BYMONTHDAY[0]>n){if(!this.next_month()&&!this.next_month()&&!this.next_month())throw new Error("No possible occurrences")}else this.last.day=i}}next(){let a,i=this.last?this.last.clone():null;if(this.rule.count&&this.occurrence_number>=this.rule.count||this.rule.until&&this.last.compare(this.rule.until)>0)return this.completed=!0,null;if(this.occurrence_number==0&&this.last.compare(this.dtstart)>=0)return this.occurrence_number++,this.last;do switch(a=1,this.rule.freq){case"SECONDLY":this.next_second();break;case"MINUTELY":this.next_minute();break;case"HOURLY":this.next_hour();break;case"DAILY":this.next_day();break;case"WEEKLY":this.next_week();break;case"MONTHLY":a=this.next_month();break;case"YEARLY":this.next_year();break;default:return null}while(!this.check_contracting_rules()||this.last.compare(this.dtstart)<0||!a);if(this.last.compare(i)==0)throw new Error("Same occurrence found twice, protecting you from death by recursion");return this.rule.until&&this.last.compare(this.rule.until)>0?(this.completed=!0,null):(this.occurrence_number++,this.last)}next_second(){return this.next_generic("BYSECOND","SECONDLY","second","minute")}increment_second(a){return this.increment_generic(a,"second",60,"minute")}next_minute(){return this.next_generic("BYMINUTE","MINUTELY","minute","hour","next_second")}increment_minute(a){return this.increment_generic(a,"minute",60,"hour")}next_hour(){return this.next_generic("BYHOUR","HOURLY","hour","monthday","next_minute")}increment_hour(a){this.increment_generic(a,"hour",24,"monthday")}next_day(){let a=this.rule.freq=="DAILY";return this.next_hour()==0||(a?this.increment_monthday(this.rule.interval):this.increment_monthday(1)),0}next_week(){let a=0;if(this.next_weekday_by_week()==0)return a;if(this.has_by_data("BYWEEKNO")){this.by_indices.BYWEEKNO++,this.by_indices.BYWEEKNO==this.by_data.BYWEEKNO.length&&(this.by_indices.BYWEEKNO=0,a=1),this.last.month=1,this.last.day=1;let i=this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];this.last.day+=7*i,a&&this.increment_year(1)}else this.increment_monthday(7*this.rule.interval);return a}normalizeByMonthDayRules(a,i,n){let o,s=B.daysInMonth(i,a),r=[],_=0,l=n.length;for(;_<l;_++)if(o=n[_],!(Math.abs(o)>s)){if(o<0)o=s+(o+1);else if(o===0)continue;r.indexOf(o)===-1&&r.push(o)}return r.sort(function(g,d){return g-d})}_byDayAndMonthDay(a){let i,n,o,s,r=this.by_data.BYDAY,_=0,l=r.length,g=0,d=this,f=this.last.day;function h(){for(s=B.daysInMonth(d.last.month,d.last.year),i=d.normalizeByMonthDayRules(d.last.year,d.last.month,d.by_data.BYMONTHDAY),o=i.length;i[_]<=f&&(!a||i[_]!=f)&&_<o-1;)_++}function u(){f=0,d.increment_month(),_=0,h()}h(),a&&(f-=1);let m=48;for(;!g&&m;){if(m--,n=f+1,n>s){u();continue}let b=i[_++];if(b>=n){f=b;for(let y=0;y<l;y++){let k=this.ruleDayOfWeek(r[y]),w=k[0],S=k[1];if(this.last.day=f,this.last.isNthWeekDay(S,w)){g=1;break}}g||_!==o||u()}else u()}if(m<=0)throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");return g}next_month(){let a=1;if(this.next_hour()==0)return a;if(this.has_by_data("BYDAY")&&this.has_by_data("BYMONTHDAY"))a=this._byDayAndMonthDay();else if(this.has_by_data("BYDAY")){let i,n=B.daysInMonth(this.last.month,this.last.year),o=0,s=0;if(this.has_by_data("BYSETPOS")){let r=this.last.day;for(let _=1;_<=n;_++)this.last.day=_,this.is_day_in_byday(this.last)&&(s++,_<=r&&o++);this.last.day=r}for(a=0,i=this.last.day+1;i<=n;i++)if(this.last.day=i,this.is_day_in_byday(this.last)&&(!this.has_by_data("BYSETPOS")||this.check_set_position(++o)||this.check_set_position(o-s-1))){a=1;break}i>n&&(this.last.day=1,this.increment_month(),this.is_day_in_byday(this.last)?this.has_by_data("BYSETPOS")&&!this.check_set_position(1)||(a=1):a=0)}else if(this.has_by_data("BYMONTHDAY")){this.by_indices.BYMONTHDAY++,this.by_indices.BYMONTHDAY>=this.by_data.BYMONTHDAY.length&&(this.by_indices.BYMONTHDAY=0,this.increment_month());let i=B.daysInMonth(this.last.month,this.last.year),n=this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];n<0&&(n=i+n+1),n>i?(this.last.day=1,a=this.is_day_in_byday(this.last)):this.last.day=n}else{this.increment_month();let i=B.daysInMonth(this.last.month,this.last.year);this.by_data.BYMONTHDAY[0]>i?a=0:this.last.day=this.by_data.BYMONTHDAY[0]}return a}next_weekday_by_week(){let a=0;if(this.next_hour()==0)return a;if(!this.has_by_data("BYDAY"))return 1;for(;;){let i=new B;this.by_indices.BYDAY++,this.by_indices.BYDAY==Object.keys(this.by_data.BYDAY).length&&(this.by_indices.BYDAY=0,a=1);let n=this.by_data.BYDAY[this.by_indices.BYDAY],o=this.ruleDayOfWeek(n)[1];o-=this.rule.wkst,o<0&&(o+=7),i.year=this.last.year,i.month=this.last.month,i.day=this.last.day;let s=i.startDoyWeek(this.rule.wkst);if(o+s<1&&!a)continue;let r=B.fromDayOfYear(s+o,this.last.year);return this.last.year=r.year,this.last.month=r.month,this.last.day=r.day,a}}next_year(){if(this.next_hour()==0)return 0;if(++this.days_index==this.days.length){this.days_index=0;do this.increment_year(this.rule.interval),this.expand_year_days(this.last.year);while(this.days.length==0)}return this._nextByYearDay(),1}_nextByYearDay(){let a=this.days[this.days_index],i=this.last.year;a<1&&(a+=1,i+=1);let n=B.fromDayOfYear(a,i);this.last.day=n.day,this.last.month=n.month}ruleDayOfWeek(a,i){let n=a.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);return n?[parseInt(n[1]||0,10),a=Ze.icalDayToNumericDay(n[2],i)]:[0,0]}next_generic(a,i,n,o,s){let r=a in this.by_data,_=this.rule.freq==i,l=0;if(s&&this[s]()==0)return l;if(r){this.by_indices[a]++;let g=this.by_data[a];this.by_indices[a]==g.length&&(this.by_indices[a]=0,l=1),this.last[n]=g[this.by_indices[a]]}else _&&this["increment_"+n](this.rule.interval);return r&&l&&_&&this["increment_"+o](1),l}increment_monthday(a){for(let i=0;i<a;i++){let n=B.daysInMonth(this.last.month,this.last.year);this.last.day++,this.last.day>n&&(this.last.day-=n,this.increment_month())}}increment_month(){if(this.last.day=1,this.has_by_data("BYMONTH"))this.by_indices.BYMONTH++,this.by_indices.BYMONTH==this.by_data.BYMONTH.length&&(this.by_indices.BYMONTH=0,this.increment_year(1)),this.last.month=this.by_data.BYMONTH[this.by_indices.BYMONTH];else{this.rule.freq=="MONTHLY"?this.last.month+=this.rule.interval:this.last.month++,this.last.month--;let a=Ne(this.last.month/12);this.last.month%=12,this.last.month++,a!=0&&this.increment_year(a)}}increment_year(a){this.last.year+=a}increment_generic(a,i,n,o){this.last[i]+=a;let s=Ne(this.last[i]/n);this.last[i]%=n,s!=0&&this["increment_"+o](s)}has_by_data(a){return a in this.rule.parts}expand_year_days(a){let i=new B;this.days=[];let n={},o=["BYDAY","BYWEEKNO","BYMONTHDAY","BYMONTH","BYYEARDAY"];for(let r of o)r in this.rule.parts&&(n[r]=this.rule.parts[r]);if("BYMONTH"in n&&"BYWEEKNO"in n){let r=1,_={};i.year=a,i.isDate=!0;for(let l=0;l<this.by_data.BYMONTH.length;l++){let g=this.by_data.BYMONTH[l];i.month=g,i.day=1;let d=i.weekNumber(this.rule.wkst);i.day=B.daysInMonth(g,a);let f=i.weekNumber(this.rule.wkst);for(l=d;l<f;l++)_[l]=1}for(let l=0;l<this.by_data.BYWEEKNO.length&&r;l++)this.by_data.BYWEEKNO[l]<52?r&=_[l]:r=0;r?delete n.BYMONTH:delete n.BYWEEKNO}let s=Object.keys(n).length;if(s==0){let r=this.dtstart.clone();r.year=this.last.year,this.days.push(r.dayOfYear())}else if(s==1&&"BYMONTH"in n)for(let r of this.by_data.BYMONTH){let _=this.dtstart.clone();_.year=a,_.month=r,_.isDate=!0,this.days.push(_.dayOfYear())}else if(s==1&&"BYMONTHDAY"in n)for(let r of this.by_data.BYMONTHDAY){let _=this.dtstart.clone();r<0&&(r=r+B.daysInMonth(_.month,a)+1),_.day=r,_.year=a,_.isDate=!0,this.days.push(_.dayOfYear())}else if(s==2&&"BYMONTHDAY"in n&&"BYMONTH"in n)for(let r of this.by_data.BYMONTH){let _=B.daysInMonth(r,a);for(let l of this.by_data.BYMONTHDAY)l<0&&(l=l+_+1),i.day=l,i.month=r,i.year=a,i.isDate=!0,this.days.push(i.dayOfYear())}else if(!(s==1&&"BYWEEKNO"in n)&&!(s==2&&"BYWEEKNO"in n&&"BYMONTHDAY"in n))if(s==1&&"BYDAY"in n)this.days=this.days.concat(this.expand_by_day(a));else if(s==2&&"BYDAY"in n&&"BYMONTH"in n){for(let r of this.by_data.BYMONTH){let _=B.daysInMonth(r,a);i.year=a,i.month=r,i.day=1,i.isDate=!0;let l=i.dayOfWeek(),g=i.dayOfYear()-1;i.day=_;let d=i.dayOfWeek();if(this.has_by_data("BYSETPOS")){let f=[];for(let h=1;h<=_;h++)i.day=h,this.is_day_in_byday(i)&&f.push(h);for(let h=0;h<f.length;h++)(this.check_set_position(h+1)||this.check_set_position(h-f.length))&&this.days.push(g+f[h])}else for(let f of this.by_data.BYDAY){let h,u=this.ruleDayOfWeek(f),m=u[0],b=u[1],y=(b+7-l)%7+1,k=_-(d+7-b)%7;if(m==0)for(let w=y;w<=_;w+=7)this.days.push(g+w);else m>0?(h=y+7*(m-1),h<=_&&this.days.push(g+h)):(h=k+7*(m+1),h>0&&this.days.push(g+h))}}this.days.sort(function(r,_){return r-_})}else if(s==2&&"BYDAY"in n&&"BYMONTHDAY"in n){let r=this.expand_by_day(a);for(let _ of r){let l=B.fromDayOfYear(_,a);this.by_data.BYMONTHDAY.indexOf(l.day)>=0&&this.days.push(_)}}else if(s==3&&"BYDAY"in n&&"BYMONTHDAY"in n&&"BYMONTH"in n){let r=this.expand_by_day(a);for(let _ of r){let l=B.fromDayOfYear(_,a);this.by_data.BYMONTH.indexOf(l.month)>=0&&this.by_data.BYMONTHDAY.indexOf(l.day)>=0&&this.days.push(_)}}else if(s==2&&"BYDAY"in n&&"BYWEEKNO"in n){let r=this.expand_by_day(a);for(let _ of r){let l=B.fromDayOfYear(_,a).weekNumber(this.rule.wkst);this.by_data.BYWEEKNO.indexOf(l)&&this.days.push(_)}}else s==3&&"BYDAY"in n&&"BYWEEKNO"in n&&"BYMONTHDAY"in n||(this.days=s==1&&"BYYEARDAY"in n?this.days.concat(this.by_data.BYYEARDAY):[]);return 0}expand_by_day(a){let i=[],n=this.last.clone();n.year=a,n.month=1,n.day=1,n.isDate=!0;let o=n.dayOfWeek();n.month=12,n.day=31,n.isDate=!0;let s=n.dayOfWeek(),r=n.dayOfYear();for(let _ of this.by_data.BYDAY){let l=this.ruleDayOfWeek(_),g=l[0],d=l[1];if(g==0)for(let f=(d+7-o)%7+1;f<=r;f+=7)i.push(f);else if(g>0){let f;f=d>=o?d-o+1:d-o+8,i.push(f+7*(g-1))}else{let f;g=-g,f=d<=s?r-s+d:r-s+d-7,i.push(f-7*(g-1))}}return i}is_day_in_byday(a){if(this.by_data.BYDAY)for(let i of this.by_data.BYDAY){let n=this.ruleDayOfWeek(i),o=n[0],s=n[1],r=a.dayOfWeek();if(o==0&&s==r||a.nthWeekDay(s,o)==a.day)return 1}return 0}check_set_position(a){return this.has_by_data("BYSETPOS")?this.by_data.BYSETPOS.indexOf(a)!==-1:!1}sort_byday_rules(a){for(let i=0;i<a.length;i++)for(let n=0;n<i;n++)if(this.ruleDayOfWeek(a[n],this.rule.wkst)[1]>this.ruleDayOfWeek(a[i],this.rule.wkst)[1]){let o=a[i];a[i]=a[n],a[n]=o}}check_contract_restriction(a,i){let n=Fa._indexMap[a],o=Fa._expandMap[this.rule.freq][n],s=!1;if(a in this.by_data&&o==Fa.CONTRACT){let r=this.by_data[a];for(let _ of r)if(_==i){s=!0;break}}else s=!0;return s}check_contracting_rules(){let a=this.last.dayOfWeek(),i=this.last.weekNumber(this.rule.wkst),n=this.last.dayOfYear();return this.check_contract_restriction("BYSECOND",this.last.second)&&this.check_contract_restriction("BYMINUTE",this.last.minute)&&this.check_contract_restriction("BYHOUR",this.last.hour)&&this.check_contract_restriction("BYDAY",Ze.numericDayToIcalDay(a))&&this.check_contract_restriction("BYWEEKNO",i)&&this.check_contract_restriction("BYMONTHDAY",this.last.day)&&this.check_contract_restriction("BYMONTH",this.last.month)&&this.check_contract_restriction("BYYEARDAY",n)}setup_defaults(a,i,n){let o=Fa._indexMap[a];return Fa._expandMap[this.rule.freq][o]!=Fa.CONTRACT&&(a in this.by_data||(this.by_data[a]=[n]),this.rule.freq!=i)?this.by_data[a][0]:n}toJSON(){let a=Object.create(null);return a.initialized=this.initialized,a.rule=this.rule.toJSON(),a.dtstart=this.dtstart.toJSON(),a.by_data=this.by_data,a.days=this.days,a.last=this.last.toJSON(),a.by_indices=this.by_indices,a.occurrence_number=this.occurrence_number,a}}const M_=/^(SU|MO|TU|WE|TH|FR|SA)$/,j_=/^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/,rr={SU:B.SUNDAY,MO:B.MONDAY,TU:B.TUESDAY,WE:B.WEDNESDAY,TH:B.THURSDAY,FR:B.FRIDAY,SA:B.SATURDAY},Y_=Object.fromEntries(Object.entries(rr).map(e=>e.reverse())),mo=["SECONDLY","MINUTELY","HOURLY","DAILY","WEEKLY","MONTHLY","YEARLY"];class Ze{static fromString(a){let i=this._stringToData(a,!1);return new Ze(i)}static fromData(a){return new Ze(a)}static _stringToData(a,i){let n=Object.create(null),o=a.split(";"),s=o.length;for(let r=0;r<s;r++){let _=o[r].split("="),l=_[0].toUpperCase(),g=_[0].toLowerCase(),d=i?g:l,f=_[1];if(l in Z0){let h=f.split(","),u=0,m=h.length;for(;u<m;u++)h[u]=Z0[l](h[u]);n[d]=h.length==1?h[0]:h}else l in L0?L0[l](f,n,i):n[g]=f}return n}static icalDayToNumericDay(a,i){let n=i||B.SUNDAY;return(rr[a]-n+7)%7+1}static numericDayToIcalDay(a,i){let n=a+(i||B.SUNDAY)-B.SUNDAY;return n>7&&(n-=7),Y_[n]}constructor(a){this.wrappedJSObject=this,this.parts={},a&&typeof a=="object"&&this.fromData(a)}parts=null;interval=1;wkst=B.MONDAY;until=null;count=null;freq=null;icalclass="icalrecur";icaltype="recur";iterator(a){return new Fa({rule:this,dtstart:a})}clone(){return new Ze(this.toJSON())}isFinite(){return!(!this.count&&!this.until)}isByCount(){return!(!this.count||this.until)}addComponent(a,i){let n=a.toUpperCase();n in this.parts?this.parts[n].push(i):this.parts[n]=[i]}setComponent(a,i){this.parts[a.toUpperCase()]=i.slice()}getComponent(a){let i=a.toUpperCase();return i in this.parts?this.parts[i].slice():[]}getNextOccurrence(a,i){let n,o=this.iterator(a);do n=o.next();while(n&&n.compare(i)<=0);return n&&i.zone&&(n.zone=i.zone),n}fromData(a){for(let i in a){let n=i.toUpperCase();n in Z0?Array.isArray(a[i])?this.parts[n]=a[i]:this.parts[n]=[a[i]]:this[i]=a[i]}this.interval&&typeof this.interval!="number"&&L0.INTERVAL(this.interval,this),this.wkst&&typeof this.wkst!="number"&&(this.wkst=Ze.icalDayToNumericDay(this.wkst)),!this.until||this.until instanceof B||(this.until=B.fromString(this.until))}toJSON(){let a=Object.create(null);a.freq=this.freq,this.count&&(a.count=this.count),this.interval>1&&(a.interval=this.interval);for(let[i,n]of Object.entries(this.parts))Array.isArray(n)&&n.length==1?a[i.toLowerCase()]=n[0]:a[i.toLowerCase()]=rt(n);return this.until&&(a.until=this.until.toString()),"wkst"in this&&this.wkst!==B.DEFAULT_WEEK_START&&(a.wkst=Ze.numericDayToIcalDay(this.wkst)),a}toString(){let a="FREQ="+this.freq;this.count&&(a+=";COUNT="+this.count),this.interval>1&&(a+=";INTERVAL="+this.interval);for(let[i,n]of Object.entries(this.parts))a+=";"+i+"="+n;return this.until&&(a+=";UNTIL="+this.until.toICALString()),"wkst"in this&&this.wkst!==B.DEFAULT_WEEK_START&&(a+=";WKST="+Ze.numericDayToIcalDay(this.wkst)),a}}function Sa(e,a,i,n){let o=n;if(n[0]==="+"&&(o=n.slice(1)),o=Le(o),a!==void 0&&n<a)throw new Error(e+': invalid value "'+n+'" must be > '+a);if(i!==void 0&&n>i)throw new Error(e+': invalid value "'+n+'" must be < '+a);return o}const L0={FREQ:function(e,a,i){if(mo.indexOf(e)===-1)throw new Error('invalid frequency "'+e+'" expected: "'+mo.join(", ")+'"');a.freq=e},COUNT:function(e,a,i){a.count=Le(e)},INTERVAL:function(e,a,i){a.interval=Le(e),a.interval<1&&(a.interval=1)},UNTIL:function(e,a,i){e.length>10?a.until=xe.icalendar.value["date-time"].fromICAL(e):a.until=xe.icalendar.value.date.fromICAL(e),i||(a.until=B.fromString(a.until))},WKST:function(e,a,i){if(!M_.test(e))throw new Error('invalid WKST value "'+e+'"');a.wkst=Ze.icalDayToNumericDay(e)}},Z0={BYSECOND:Sa.bind(void 0,"BYSECOND",0,60),BYMINUTE:Sa.bind(void 0,"BYMINUTE",0,59),BYHOUR:Sa.bind(void 0,"BYHOUR",0,23),BYDAY:function(e){if(j_.test(e))return e;throw new Error('invalid BYDAY value "'+e+'"')},BYMONTHDAY:Sa.bind(void 0,"BYMONTHDAY",-31,31),BYYEARDAY:Sa.bind(void 0,"BYYEARDAY",-366,366),BYWEEKNO:Sa.bind(void 0,"BYWEEKNO",-53,53),BYMONTH:Sa.bind(void 0,"BYMONTH",1,12),BYSETPOS:Sa.bind(void 0,"BYSETPOS",-366,366)};class xa{static fromString(a,i){let n=a.split("/");if(n.length!==2)throw new Error('Invalid string value: "'+a+'" must contain a "/" char.');let o={start:B.fromDateTimeString(n[0],i)},s=n[1];return Ie.isValueString(s)?o.duration=Ie.fromString(s):o.end=B.fromDateTimeString(s,i),new xa(o)}static fromData(a){return new xa(a)}static fromJSON(a,i,n){function o(s,r){return n?B.fromString(s,r):B.fromDateTimeString(s,r)}return Ie.isValueString(a[1])?xa.fromData({start:o(a[0],i),duration:Ie.fromString(a[1])}):xa.fromData({start:o(a[0],i),end:o(a[1],i)})}constructor(a){if(this.wrappedJSObject=this,a&&"start"in a){if(a.start&&!(a.start instanceof B))throw new TypeError(".start must be an instance of ICAL.Time");this.start=a.start}if(a&&a.end&&a.duration)throw new Error("cannot accept both end and duration");if(a&&"end"in a){if(a.end&&!(a.end instanceof B))throw new TypeError(".end must be an instance of ICAL.Time");this.end=a.end}if(a&&"duration"in a){if(a.duration&&!(a.duration instanceof Ie))throw new TypeError(".duration must be an instance of ICAL.Duration");this.duration=a.duration}}start=null;end=null;duration=null;icalclass="icalperiod";icaltype="period";clone(){return xa.fromData({start:this.start?this.start.clone():null,end:this.end?this.end.clone():null,duration:this.duration?this.duration.clone():null})}getDuration(){return this.duration?this.duration:this.end.subtractDate(this.start)}getEnd(){if(this.end)return this.end;{let a=this.start.clone();return a.addDuration(this.duration),a}}toString(){return this.start+"/"+(this.end||this.duration)}toJSON(){return[this.start.toString(),(this.end||this.duration).toString()]}toICALString(){return this.start.toICALString()+"/"+(this.end||this.duration).toICALString()}}const po=/\\\\|\\,|\\[Nn]/g,bo=/\\|,|\n/g;function rn(e,a){return{matches:/.*/,fromICAL:function(i,n){return function(o,s,r){return o.indexOf("\\")===-1?o:(r&&(s=new RegExp(s.source+"|\\\\"+r,s.flags)),o.replace(s,q_))}(i,e,n)},toICAL:function(i,n){let o=a;return n&&(o=new RegExp(o.source+"|"+n,o.flags)),i.replace(o,function(s){switch(s){case"\\":return"\\\\";case";":return"\\;";case",":return"\\,";case`
`:return"\\n";default:return s}})}}}const de={defaultType:"text"},Qt={defaultType:"text",multiValue:","},xi={defaultType:"text",structuredValue:";"},ri={defaultType:"integer"},li={defaultType:"date-time",allowedTypes:["date-time","date"]},_i={defaultType:"date-time"},We={defaultType:"uri"},To={defaultType:"utc-offset"},Do={defaultType:"recur"},yo={defaultType:"date-and-or-time",allowedTypes:["date-time","date","text"]};function q_(e){switch(e){case"\\\\":return"\\";case"\\;":return";";case"\\,":return",";case"\\n":case"\\N":return`
`;default:return e}}let qn={categories:Qt,url:We,version:de,uid:de},Ln={boolean:{values:["TRUE","FALSE"],fromICAL:function(e){return e==="TRUE"},toICAL:function(e){return e?"TRUE":"FALSE"}},float:{matches:/^[+-]?\d+\.\d+$/,fromICAL:function(e){let a=parseFloat(e);return $t(a)?0:a},toICAL:function(e){return String(e)}},integer:{fromICAL:function(e){let a=parseInt(e);return $t(a)?0:a},toICAL:function(e){return String(e)}},"utc-offset":{toICAL:function(e){return e.length<7?e.slice(0,3)+e.slice(4,6):e.slice(0,3)+e.slice(4,6)+e.slice(7,9)},fromICAL:function(e){return e.length<6?e.slice(0,3)+":"+e.slice(3,5):e.slice(0,3)+":"+e.slice(3,5)+":"+e.slice(5,7)},decorate:function(e){return ra.fromString(e)},undecorate:function(e){return e.toString()}}};const Be=dt(Ln,{text:rn(/\\\\|\\;|\\,|\\[Nn]/g,/\\|;|,|\n/g),uri:{},binary:{decorate:function(e){return nr.fromString(e)},undecorate:function(e){return e.toString()}},"cal-address":{},date:{decorate:function(e,a){return Da.strict?B.fromDateString(e,a):B.fromString(e,a)},undecorate:function(e){return e.toString()},fromICAL:function(e){return!Da.strict&&e.length>=15?Be["date-time"].fromICAL(e):e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)},toICAL:function(e){let a=e.length;return a==10?e.slice(0,4)+e.slice(5,7)+e.slice(8,10):a>=19?Be["date-time"].toICAL(e):e}},"date-time":{fromICAL:function(e){{let a=e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)+"T"+e.slice(9,11)+":"+e.slice(11,13)+":"+e.slice(13,15);return e[15]&&e[15]==="Z"&&(a+="Z"),a}},toICAL:function(e){let a=e.length;if(a!=10||Da.strict){if(a>=19){let i=e.slice(0,4)+e.slice(5,7)+e.slice(8,13)+e.slice(14,16)+e.slice(17,19);return e[19]&&e[19]==="Z"&&(i+="Z"),i}return e}return Be.date.toICAL(e)},decorate:function(e,a){return Da.strict?B.fromDateTimeString(e,a):B.fromString(e,a)},undecorate:function(e){return e.toString()}},duration:{decorate:function(e){return Ie.fromString(e)},undecorate:function(e){return e.toString()}},period:{fromICAL:function(e){let a=e.split("/");return a[0]=Be["date-time"].fromICAL(a[0]),Ie.isValueString(a[1])||(a[1]=Be["date-time"].fromICAL(a[1])),a},toICAL:function(e){return e=e.slice(),e[0]=Be["date-time"].toICAL(e[0]),Ie.isValueString(e[1])||(e[1]=Be["date-time"].toICAL(e[1])),e.join("/")},decorate:function(e,a){return xa.fromJSON(e,a,!Da.strict)},undecorate:function(e){return e.toJSON()}},recur:{fromICAL:function(e){return Ze._stringToData(e,!0)},toICAL:function(e){let a="";for(let[i,n]of Object.entries(e))i=="until"?n=n.length>10?Be["date-time"].toICAL(n):Be.date.toICAL(n):i=="wkst"?typeof n=="number"&&(n=Ze.numericDayToIcalDay(n)):Array.isArray(n)&&(n=n.join(",")),a+=i.toUpperCase()+"="+n+";";return a.slice(0,Math.max(0,a.length-1))},decorate:function(e){return Ze.fromData(e)},undecorate:function(e){return e.toJSON()}},time:{fromICAL:function(e){if(e.length<6)return e;let a=e.slice(0,2)+":"+e.slice(2,4)+":"+e.slice(4,6);return e[6]==="Z"&&(a+="Z"),a},toICAL:function(e){if(e.length<8)return e;let a=e.slice(0,2)+e.slice(3,5)+e.slice(6,8);return e[8]==="Z"&&(a+="Z"),a}}});let L_=dt(qn,{action:de,attach:{defaultType:"uri"},attendee:{defaultType:"cal-address"},calscale:de,class:de,comment:de,completed:_i,contact:de,created:_i,description:de,dtend:li,dtstamp:_i,dtstart:li,due:li,duration:{defaultType:"duration"},exdate:{defaultType:"date-time",allowedTypes:["date-time","date"],multiValue:","},exrule:Do,freebusy:{defaultType:"period",multiValue:","},geo:{defaultType:"float",structuredValue:";"},"last-modified":_i,location:de,method:de,organizer:{defaultType:"cal-address"},"percent-complete":ri,priority:ri,prodid:de,"related-to":de,repeat:ri,rdate:{defaultType:"date-time",allowedTypes:["date-time","date","period"],multiValue:",",detectType:function(e){return e.indexOf("/")!==-1?"period":e.indexOf("T")===-1?"date":"date-time"}},"recurrence-id":li,resources:Qt,"request-status":xi,rrule:Do,sequence:ri,status:de,summary:de,transp:de,trigger:{defaultType:"duration",allowedTypes:["duration","date-time"]},tzoffsetfrom:To,tzoffsetto:To,tzurl:We,tzid:de,tzname:de});const ta=dt(Ln,{text:rn(po,bo),uri:rn(po,bo),date:{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date")},undecorate:function(e){return e.toString()},fromICAL:function(e){return e.length==8?Be.date.fromICAL(e):e[0]=="-"&&e.length==6?e.slice(0,4)+"-"+e.slice(4):e},toICAL:function(e){return e.length==10?Be.date.toICAL(e):e[0]=="-"&&e.length==7?e.slice(0,4)+e.slice(5):e}},time:{decorate:function(e){return Ya.fromDateAndOrTimeString("T"+e,"time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=ta.time._splitZone(e,!0),i=a[0],n=a[1];return n.length==6?n=n.slice(0,2)+":"+n.slice(2,4)+":"+n.slice(4,6):n.length==4&&n[0]!="-"?n=n.slice(0,2)+":"+n.slice(2,4):n.length==5&&(n=n.slice(0,3)+":"+n.slice(3,5)),i.length!=5||i[0]!="-"&&i[0]!="+"||(i=i.slice(0,3)+":"+i.slice(3)),n+i},toICAL:function(e){let a=ta.time._splitZone(e),i=a[0],n=a[1];return n.length==8?n=n.slice(0,2)+n.slice(3,5)+n.slice(6,8):n.length==5&&n[0]!="-"?n=n.slice(0,2)+n.slice(3,5):n.length==6&&(n=n.slice(0,3)+n.slice(4,6)),i.length!=6||i[0]!="-"&&i[0]!="+"||(i=i.slice(0,3)+i.slice(4)),n+i},_splitZone:function(e,a){let i,n,o=e.length-1,s=e.length-(a?5:6),r=e[s];return e[o]=="Z"?(i=e[o],n=e.slice(0,Math.max(0,o))):e.length>6&&(r=="-"||r=="+")?(i=e.slice(s),n=e.slice(0,Math.max(0,s))):(i="",n=e),[i,n]}},"date-time":{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){return ta["date-and-or-time"].fromICAL(e)},toICAL:function(e){return ta["date-and-or-time"].toICAL(e)}},"date-and-or-time":{decorate:function(e){return Ya.fromDateAndOrTimeString(e,"date-and-or-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=e.split("T");return(a[0]?ta.date.fromICAL(a[0]):"")+(a[1]?"T"+ta.time.fromICAL(a[1]):"")},toICAL:function(e){let a=e.split("T");return ta.date.toICAL(a[0])+(a[1]?"T"+ta.time.toICAL(a[1]):"")}},timestamp:Be["date-time"],"language-tag":{matches:/^[a-zA-Z0-9-]+$/},"phone-number":{fromICAL:function(e){return Array.from(e).filter(function(a){return a==="\\"?void 0:a}).join("")},toICAL:function(e){return Array.from(e).map(function(a){return a===","||a===";"?"\\"+a:a}).join("")}}});let Z_=dt(qn,{adr:{defaultType:"text",structuredValue:";",multiValue:","},anniversary:yo,bday:yo,caladruri:We,caluri:We,clientpidmap:xi,email:de,fburl:We,fn:de,gender:xi,geo:We,impp:We,key:We,kind:de,lang:{defaultType:"language-tag"},logo:We,member:We,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:Qt,note:de,org:{defaultType:"text",structuredValue:";"},photo:We,related:We,rev:{defaultType:"timestamp"},role:de,sound:We,source:We,tel:{defaultType:"uri",allowedTypes:["uri","text"]},title:de,tz:{defaultType:"text",allowedTypes:["text","utc-offset","uri"]},xml:de}),I_=dt(Ln,{binary:Be.binary,date:ta.date,"date-time":ta["date-time"],"phone-number":ta["phone-number"],uri:Be.uri,text:Be.text,time:Be.time,vcard:Be.text,"utc-offset":{toICAL:function(e){return e.slice(0,7)},fromICAL:function(e){return e.slice(0,7)},decorate:function(e){return ra.fromString(e)},undecorate:function(e){return e.toString()}}}),H_=dt(qn,{fn:de,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:Qt,photo:{defaultType:"binary",allowedTypes:["binary","uri"]},bday:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},adr:{defaultType:"text",structuredValue:";",multiValue:","},label:de,tel:{defaultType:"phone-number"},email:de,mailer:de,tz:{defaultType:"utc-offset",allowedTypes:["utc-offset","text"]},geo:{defaultType:"float",structuredValue:";"},title:de,role:de,logo:{defaultType:"binary",allowedTypes:["binary","uri"]},agent:{defaultType:"vcard",allowedTypes:["vcard","text","uri"]},org:xi,note:Qt,prodid:de,rev:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},"sort-string":de,sound:{defaultType:"binary",allowedTypes:["binary","uri"]},class:de,key:{defaultType:"binary",allowedTypes:["binary","text"]}}),pa={value:Be,param:{cutype:{values:["INDIVIDUAL","GROUP","RESOURCE","ROOM","UNKNOWN"],allowXName:!0,allowIanaToken:!0},"delegated-from":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},"delegated-to":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},encoding:{values:["8BIT","BASE64"]},fbtype:{values:["FREE","BUSY","BUSY-UNAVAILABLE","BUSY-TENTATIVE"],allowXName:!0,allowIanaToken:!0},member:{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},partstat:{values:["NEEDS-ACTION","ACCEPTED","DECLINED","TENTATIVE","DELEGATED","COMPLETED","IN-PROCESS"],allowXName:!0,allowIanaToken:!0},range:{values:["THISANDFUTURE"]},related:{values:["START","END"]},reltype:{values:["PARENT","CHILD","SIBLING"],allowXName:!0,allowIanaToken:!0},role:{values:["REQ-PARTICIPANT","CHAIR","OPT-PARTICIPANT","NON-PARTICIPANT"],allowXName:!0,allowIanaToken:!0},rsvp:{values:["TRUE","FALSE"]},"sent-by":{valueType:"cal-address"},tzid:{matches:/^\//},value:{values:["binary","boolean","cal-address","date","date-time","duration","float","integer","period","recur","text","time","uri","utc-offset"],allowXName:!0,allowIanaToken:!0}},property:L_,propertyGroups:!1},Eo={value:ta,param:{type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","time","date-time","date-and-or-time","timestamp","boolean","integer","float","utc-offset","language-tag"],allowXName:!0,allowIanaToken:!0}},property:Z_,propertyGroups:!0},ko={value:I_,param:{type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","date-time","phone-number","time","boolean","integer","float","utc-offset","vcard","binary"],allowXName:!0,allowIanaToken:!0}},property:H_,propertyGroups:!0};const Da={strict:!0,defaultSet:pa,defaultType:"unknown",components:{vcard:Eo,vcard3:ko,vevent:pa,vtodo:pa,vjournal:pa,valarm:pa,vtimezone:pa,daylight:pa,standard:pa},icalendar:pa,vcard:Eo,vcard3:ko,getDesignSet:function(e){return e&&e in Da.components?Da.components[e]:Da.defaultSet}};var xe=Da;const yi=`\r
`,Ao="unknown",P_={'"':"^'","\n":"^n","^":"^^"};function Ee(e){typeof e[0]=="string"&&(e=[e]);let a=0,i=e.length,n="";for(;a<i;a++)n+=Ee.component(e[a])+yi;return n}Ee.component=function(e,a){let i=e[0].toUpperCase(),n="BEGIN:"+i+yi,o=e[1],s=0,r=o.length,_=e[0];for(_==="vcard"&&e[1].length>0&&(e[1][0][0]!=="version"||e[1][0][3]!=="4.0")&&(_="vcard3"),a=a||xe.getDesignSet(_);s<r;s++)n+=Ee.property(o[s],a)+yi;let l=e[2]||[],g=0,d=l.length;for(;g<d;g++)n+=Ee.component(l[g],a)+yi;return n+="END:"+i,n},Ee.property=function(e,a,i){let n=e[0].toUpperCase(),o=e[0],s=e[1];a||(a=xe.defaultSet);let r,_=s.group;r=a.propertyGroups&&_?_.toUpperCase()+"."+n:n;for(let[u,m]of Object.entries(s)){if(a.propertyGroups&&u=="group")continue;let b=a.param[u],y=b&&b.multiValue;y&&Array.isArray(m)?(m=m.map(function(k){return k=Ee._rfc6868Unescape(k),k=Ee.paramPropertyValue(k,b.multiValueSeparateDQuote)}),m=Ee.multiValue(m,y,"unknown",null,a)):(m=Ee._rfc6868Unescape(m),m=Ee.paramPropertyValue(m)),r+=";"+u.toUpperCase()+"="+m}if(e.length===3)return r+":";let l,g=e[2],d=!1,f=!1,h=!1;return o in a.property?(l=a.property[o],"multiValue"in l&&(d=l.multiValue),"structuredValue"in l&&Array.isArray(e[3])&&(f=l.structuredValue),"defaultType"in l?g===l.defaultType&&(h=!0):g===Ao&&(h=!0)):g===Ao&&(h=!0),h||(r+=";VALUE="+g.toUpperCase()),r+=":",r+=d&&f?Ee.multiValue(e[3],f,g,d,a,f):d?Ee.multiValue(e.slice(3),d,g,null,a,!1):f?Ee.multiValue(e[3],f,g,null,a,f):Ee.value(e[3],g,a,!1),i?r:sr(r)},Ee.paramPropertyValue=function(e,a){return a||oa(e,",")!==-1||oa(e,":")!==-1||oa(e,";")!==-1?'"'+e+'"':e},Ee.multiValue=function(e,a,i,n,o,s){let r="",_=e.length,l=0;for(;l<_;l++)n&&Array.isArray(e[l])?r+=Ee.multiValue(e[l],n,i,null,o,s):r+=Ee.value(e[l],i,o,s),l!==_-1&&(r+=a);return r},Ee.value=function(e,a,i,n){return a in i.value&&"toICAL"in i.value[a]?i.value[a].toICAL(e,n):e},Ee._rfc6868Unescape=function(e){return e.replace(/[\n^"]/g,function(a){return P_[a]})};class it{static fromString(a,i){return new it(he.property(a,i))}constructor(a,i){this._parent=i||null,typeof a=="string"?(this.jCal=[a,{},xe.defaultType],this.jCal[2]=this.getDefaultType()):this.jCal=a,this._updateType()}get type(){return this.jCal[2]}get name(){return this.jCal[0]}get parent(){return this._parent}set parent(a){let i=!this._parent||a&&a._designSet!=this._parent._designSet;this._parent=a,this.type==xe.defaultType&&i&&(this.jCal[2]=this.getDefaultType(),this._updateType())}get _designSet(){return this.parent?this.parent._designSet:xe.defaultSet}_updateType(){let a=this._designSet;this.type in a.value&&("decorate"in a.value[this.type]?this.isDecorated=!0:this.isDecorated=!1,this.name in a.property&&(this.isMultiValue="multiValue"in a.property[this.name],this.isStructuredValue="structuredValue"in a.property[this.name]))}_hydrateValue(a){return this._values&&this._values[a]?this._values[a]:this.jCal.length<=3+a?null:this.isDecorated?(this._values||(this._values=[]),this._values[a]=this._decorate(this.jCal[3+a])):this.jCal[3+a]}_decorate(a){return this._designSet.value[this.type].decorate(a,this)}_undecorate(a){return this._designSet.value[this.type].undecorate(a,this)}_setDecoratedValue(a,i){this._values||(this._values=[]),typeof a=="object"&&"icaltype"in a?(this.jCal[3+i]=this._undecorate(a),this._values[i]=a):(this.jCal[3+i]=a,this._values[i]=this._decorate(a))}getParameter(a){return a in this.jCal[1]?this.jCal[1][a]:void 0}getFirstParameter(a){let i=this.getParameter(a);return Array.isArray(i)?i[0]:i}setParameter(a,i){let n=a.toLowerCase();typeof i=="string"&&n in this._designSet.param&&"multiValue"in this._designSet.param[n]&&(i=[i]),this.jCal[1][a]=i}removeParameter(a){delete this.jCal[1][a]}getDefaultType(){let a=this.jCal[0],i=this._designSet;if(a in i.property){let n=i.property[a];if("defaultType"in n)return n.defaultType}return xe.defaultType}resetType(a){this.removeAllValues(),this.jCal[2]=a,this._updateType()}getFirstValue(){return this._hydrateValue(0)}getValues(){let a=this.jCal.length-3;if(a<1)return[];let i=0,n=[];for(;i<a;i++)n[i]=this._hydrateValue(i);return n}removeAllValues(){this._values&&(this._values.length=0),this.jCal.length=3}setValues(a){if(!this.isMultiValue)throw new Error(this.name+`: does not not support mulitValue.
override isMultiValue`);let i=a.length,n=0;if(this.removeAllValues(),i>0&&typeof a[0]=="object"&&"icaltype"in a[0]&&this.resetType(a[0].icaltype),this.isDecorated)for(;n<i;n++)this._setDecoratedValue(a[n],n);else for(;n<i;n++)this.jCal[3+n]=a[n]}setValue(a){this.removeAllValues(),typeof a=="object"&&"icaltype"in a&&this.resetType(a.icaltype),this.isDecorated?this._setDecoratedValue(a,0):this.jCal[3]=a}toJSON(){return this.jCal}toICALString(){return Ee.property(this.jCal,this._designSet,!0)}}class $e{static fromString(a){return new $e(he.component(a))}constructor(a,i){typeof a=="string"&&(a=[a,[],[]]),this.jCal=a,this.parent=i||null,this.parent||this.name!=="vcalendar"||(this._timezoneCache=new Map)}_hydratedPropertyCount=0;_hydratedComponentCount=0;_timezoneCache=null;get name(){return this.jCal[0]}get _designSet(){return this.parent&&this.parent._designSet||xe.getDesignSet(this.name)}_hydrateComponent(a){if(this._components||(this._components=[],this._hydratedComponentCount=0),this._components[a])return this._components[a];let i=new $e(this.jCal[2][a],this);return this._hydratedComponentCount++,this._components[a]=i}_hydrateProperty(a){if(this._properties||(this._properties=[],this._hydratedPropertyCount=0),this._properties[a])return this._properties[a];let i=new it(this.jCal[1][a],this);return this._hydratedPropertyCount++,this._properties[a]=i}getFirstSubcomponent(a){if(a){let i=0,n=this.jCal[2],o=n.length;for(;i<o;i++)if(n[i][0]===a)return this._hydrateComponent(i)}else if(this.jCal[2].length)return this._hydrateComponent(0);return null}getAllSubcomponents(a){let i=this.jCal[2].length,n=0;if(a){let o=this.jCal[2],s=[];for(;n<i;n++)a===o[n][0]&&s.push(this._hydrateComponent(n));return s}if(!this._components||this._hydratedComponentCount!==i)for(;n<i;n++)this._hydrateComponent(n);return this._components||[]}hasProperty(a){let i=this.jCal[1],n=i.length,o=0;for(;o<n;o++)if(i[o][0]===a)return!0;return!1}getFirstProperty(a){if(a){let i=0,n=this.jCal[1],o=n.length;for(;i<o;i++)if(n[i][0]===a)return this._hydrateProperty(i)}else if(this.jCal[1].length)return this._hydrateProperty(0);return null}getFirstPropertyValue(a){let i=this.getFirstProperty(a);return i?i.getFirstValue():null}getAllProperties(a){let i=this.jCal[1].length,n=0;if(a){let o=this.jCal[1],s=[];for(;n<i;n++)a===o[n][0]&&s.push(this._hydrateProperty(n));return s}if(!this._properties||this._hydratedPropertyCount!==i)for(;n<i;n++)this._hydrateProperty(n);return this._properties||[]}_removeObjectByIndex(a,i,n){if((i=i||[])[n]){let o=i[n];"parent"in o&&(o.parent=null)}i.splice(n,1),this.jCal[a].splice(n,1)}_removeObject(a,i,n){let o=0,s=this.jCal[a],r=s.length,_=this[i];if(typeof n=="string"){for(;o<r;o++)if(s[o][0]===n)return this._removeObjectByIndex(a,_,o),!0}else if(_){for(;o<r;o++)if(_[o]&&_[o]===n)return this._removeObjectByIndex(a,_,o),!0}return!1}_removeAllObjects(a,i,n){let o=this[i],s=this.jCal[a],r=s.length-1;for(;r>=0;r--)n&&s[r][0]!==n||this._removeObjectByIndex(a,o,r)}addSubcomponent(a){this._components||(this._components=[],this._hydratedComponentCount=0),a.parent&&a.parent.removeSubcomponent(a);let i=this.jCal[2].push(a.jCal);return this._components[i-1]=a,this._hydratedComponentCount++,a.parent=this,a}removeSubcomponent(a){let i=this._removeObject(2,"_components",a);return i&&this._hydratedComponentCount--,i}removeAllSubcomponents(a){let i=this._removeAllObjects(2,"_components",a);return this._hydratedComponentCount=0,i}addProperty(a){if(!(a instanceof it))throw new TypeError("must be instance of ICAL.Property");this._properties||(this._properties=[],this._hydratedPropertyCount=0),a.parent&&a.parent.removeProperty(a);let i=this.jCal[1].push(a.jCal);return this._properties[i-1]=a,this._hydratedPropertyCount++,a.parent=this,a}addPropertyWithValue(a,i){let n=new it(a);return n.setValue(i),this.addProperty(n),n}updatePropertyWithValue(a,i){let n=this.getFirstProperty(a);return n?n.setValue(i):n=this.addPropertyWithValue(a,i),n}removeProperty(a){let i=this._removeObject(1,"_properties",a);return i&&this._hydratedPropertyCount--,i}removeAllProperties(a){let i=this._removeAllObjects(1,"_properties",a);return this._hydratedPropertyCount=0,i}toJSON(){return this.jCal}toString(){return Ee.component(this.jCal,this._designSet)}getTimeZoneByID(a){if(this.parent)return this.parent.getTimeZoneByID(a);if(!this._timezoneCache)return null;if(this._timezoneCache.has(a))return this._timezoneCache.get(a);const i=this.getAllSubcomponents("vtimezone");for(const n of i)if(n.getFirstProperty("tzid").getFirstValue()===a){const o=new X({component:n,tzid:a});return this._timezoneCache.set(a,o),o}return null}}class lr{constructor(a){this.ruleDates=[],this.exDates=[],this.fromData(a)}complete=!1;ruleIterators=null;ruleDates=null;exDates=null;ruleDateInc=0;exDateInc=0;exDate=null;ruleDate=null;dtstart=null;last=null;fromData(a){let i=Ta(a.dtstart,B);if(!i)throw new Error(".dtstart (ICAL.Time) must be given");if(this.dtstart=i,a.component)this._init(a.component);else{if(this.last=Ta(a.last,B)||i.clone(),!a.ruleIterators)throw new Error(".ruleIterators or .component must be given");this.ruleIterators=a.ruleIterators.map(function(n){return Ta(n,Fa)}),this.ruleDateInc=a.ruleDateInc,this.exDateInc=a.exDateInc,a.ruleDates&&(this.ruleDates=a.ruleDates.map(n=>Ta(n,B)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.exDates&&(this.exDates=a.exDates.map(n=>Ta(n,B)),this.exDate=this.exDates[this.exDateInc]),a.complete!==void 0&&(this.complete=a.complete)}}next(){let a,i,n,o=0;for(;;){if(o++>500)throw new Error("max tries have occurred, rule may be impossible to fulfill.");if(i=this.ruleDate,a=this._nextRecurrenceIter(this.last),!i&&!a){this.complete=!0;break}if((!i||a&&i.compare(a.last)>0)&&(i=a.last.clone(),a.next()),this.ruleDate===i&&this._nextRuleDay(),this.last=i,!this.exDate||(n=this.exDate.compare(this.last),n<0&&this._nextExDay(),n!==0))return this.last;this._nextExDay()}}toJSON(){function a(n){return n.toJSON()}let i=Object.create(null);return i.ruleIterators=this.ruleIterators.map(a),this.ruleDates&&(i.ruleDates=this.ruleDates.map(a)),this.exDates&&(i.exDates=this.exDates.map(a)),i.ruleDateInc=this.ruleDateInc,i.exDateInc=this.exDateInc,i.last=this.last.toJSON(),i.dtstart=this.dtstart.toJSON(),i.complete=this.complete,i}_extractDates(a,i){let n=[],o=a.getAllProperties(i);for(let s=0,r=o.length;s<r;s++)for(let _ of o[s].getValues()){let l=tt(n,_,(g,d)=>g.compare(d));n.splice(l,0,_)}return n}_init(a){if(this.ruleIterators=[],this.last=this.dtstart.clone(),!a.hasProperty("rdate")&&!a.hasProperty("rrule")&&!a.hasProperty("recurrence-id"))return this.ruleDate=this.last.clone(),void(this.complete=!0);if(a.hasProperty("rdate")&&(this.ruleDates=this._extractDates(a,"rdate"),this.ruleDates[0]&&this.ruleDates[0].compare(this.dtstart)<0?(this.ruleDateInc=0,this.last=this.ruleDates[0].clone()):this.ruleDateInc=tt(this.ruleDates,this.last,(i,n)=>i.compare(n)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.hasProperty("rrule")){let i,n,o=a.getAllProperties("rrule"),s=0,r=o.length;for(;s<r;s++)i=o[s].getFirstValue(),n=i.iterator(this.dtstart),this.ruleIterators.push(n),n.next()}a.hasProperty("exdate")&&(this.exDates=this._extractDates(a,"exdate"),this.exDateInc=tt(this.exDates,this.last,(i,n)=>i.compare(n)),this.exDate=this.exDates[this.exDateInc])}_nextExDay(){this.exDate=this.exDates[++this.exDateInc]}_nextRuleDay(){this.ruleDate=this.ruleDates[++this.ruleDateInc]}_nextRecurrenceIter(){let a=this.ruleIterators;if(a.length===0)return null;let i,n,o,s=a.length,r=0;for(;r<s;r++)i=a[r],n=i.last,i.completed?(s--,r!==0&&r--,a.splice(r,1)):(!o||o.last.compare(n)>0)&&(o=i);return o}}class Kt{constructor(a,i){a instanceof $e||(i=a,a=null),this.component=a||new $e("vevent"),this._rangeExceptionCache=Object.create(null),this.exceptions=Object.create(null),this.rangeExceptions=[],i&&i.strictExceptions&&(this.strictExceptions=i.strictExceptions),i&&i.exceptions?i.exceptions.forEach(this.relateException,this):this.component.parent&&!this.isRecurrenceException()&&this.component.parent.getAllSubcomponents("vevent").forEach(function(n){n.hasProperty("recurrence-id")&&this.relateException(n)},this)}static THISANDFUTURE="THISANDFUTURE";exceptions=null;strictExceptions=!1;relateException(a){if(this.isRecurrenceException())throw new Error("cannot relate exception to exceptions");if(a instanceof $e&&(a=new Kt(a)),this.strictExceptions&&a.uid!==this.uid)throw new Error("attempted to relate unrelated exception");let i=a.recurrenceId.toString();if(this.exceptions[i]=a,a.modifiesFuture()){let n=[a.recurrenceId.toUnixTime(),i],o=tt(this.rangeExceptions,n,wo);this.rangeExceptions.splice(o,0,n)}}modifiesFuture(){return this.component.hasProperty("recurrence-id")?this.component.getFirstProperty("recurrence-id").getParameter("range")===Kt.THISANDFUTURE:!1}findRangeException(a){if(!this.rangeExceptions.length)return null;let i=a.toUnixTime(),n=tt(this.rangeExceptions,[i],wo);if(n-=1,n<0)return null;let o=this.rangeExceptions[n];return i<o[0]?null:o[1]}getOccurrenceDetails(a){let i,n=a.toString(),o=a.convertToZone(X.utcTimezone).toString(),s={recurrenceId:a};if(n in this.exceptions)i=s.item=this.exceptions[n],s.startDate=i.startDate,s.endDate=i.endDate,s.item=i;else if(o in this.exceptions)i=this.exceptions[o],s.startDate=i.startDate,s.endDate=i.endDate,s.item=i;else{let r,_=this.findRangeException(a);if(_){let l=this.exceptions[_];s.item=l;let g=this._rangeExceptionCache[_];if(!g){let f=l.recurrenceId.clone(),h=l.startDate.clone();f.zone=h.zone,g=h.subtractDate(f),this._rangeExceptionCache[_]=g}let d=a.clone();d.zone=l.startDate.zone,d.addDuration(g),r=d.clone(),r.addDuration(l.duration),s.startDate=d,s.endDate=r}else r=a.clone(),r.addDuration(this.duration),s.endDate=r,s.startDate=a,s.item=this}return s}iterator(a){return new lr({component:this.component,dtstart:a||this.startDate})}isRecurring(){let a=this.component;return a.hasProperty("rrule")||a.hasProperty("rdate")}isRecurrenceException(){return this.component.hasProperty("recurrence-id")}getRecurrenceTypes(){let a=this.component.getAllProperties("rrule"),i=0,n=a.length,o=Object.create(null);for(;i<n;i++)o[a[i].getFirstValue().freq]=!0;return o}get uid(){return this._firstProp("uid")}set uid(a){this._setProp("uid",a)}get startDate(){return this._firstProp("dtstart")}set startDate(a){this._setTime("dtstart",a)}get endDate(){let a=this._firstProp("dtend");if(!a){let i=this._firstProp("duration");a=this.startDate.clone(),i?a.addDuration(i):a.isDate&&(a.day+=1)}return a}set endDate(a){this.component.hasProperty("duration")&&this.component.removeProperty("duration"),this._setTime("dtend",a)}get duration(){return this._firstProp("duration")||this.endDate.subtractDateTz(this.startDate)}set duration(a){this.component.hasProperty("dtend")&&this.component.removeProperty("dtend"),this._setProp("duration",a)}get location(){return this._firstProp("location")}set location(a){this._setProp("location",a)}get attendees(){return this.component.getAllProperties("attendee")}get summary(){return this._firstProp("summary")}set summary(a){this._setProp("summary",a)}get description(){return this._firstProp("description")}set description(a){this._setProp("description",a)}get color(){return this._firstProp("color")}set color(a){this._setProp("color",a)}get organizer(){return this._firstProp("organizer")}set organizer(a){this._setProp("organizer",a)}get sequence(){return this._firstProp("sequence")}set sequence(a){this._setProp("sequence",a)}get recurrenceId(){return this._firstProp("recurrence-id")}set recurrenceId(a){this._setTime("recurrence-id",a)}_setTime(a,i){let n=this.component.getFirstProperty(a);n||(n=new it(a),this.component.addProperty(n)),i.zone===X.localTimezone||i.zone===X.utcTimezone?n.removeParameter("tzid"):n.setParameter("tzid",i.zone.tzid),n.setValue(i)}_setProp(a,i){this.component.updatePropertyWithValue(a,i)}_firstProp(a){return this.component.getFirstPropertyValue(a)}toString(){return this.component.toString()}}function wo(e,a){return e[0]>a[0]?1:a[0]>e[0]?-1:0}var Re={foldLength:75,debug:!1,newLineChar:`\r
`,Binary:nr,Component:$e,ComponentParser:class{constructor(e){e===void 0&&(e={});for(let[a,i]of Object.entries(e))this[a]=i}parseEvent=!0;parseTimezone=!0;oncomplete=function(){};onerror=function(e){};ontimezone=function(e){};onevent=function(e){};process(e){typeof e=="string"&&(e=he(e)),e instanceof $e||(e=new $e(e));let a,i=e.getAllSubcomponents(),n=0,o=i.length;for(;n<o;n++)switch(a=i[n],a.name){case"vtimezone":if(this.parseTimezone){let s=a.getFirstPropertyValue("tzid");s&&this.ontimezone(new X({tzid:s,component:a}))}break;case"vevent":this.parseEvent&&this.onevent(new Kt(a));break;default:continue}this.oncomplete()}},Duration:Ie,Event:Kt,Period:xa,Property:it,Recur:Ze,RecurExpansion:lr,RecurIterator:Fa,Time:B,Timezone:X,TimezoneService:Bi,UtcOffset:ra,VCardTime:Ya,parse:he,stringify:Ee,design:xe,helpers:x_};class ya{constructor(a,i){this._timezoneId=null,this._ics=null,this._innerValue=null,this._initialized=!1,a instanceof Re.Timezone?(this._innerValue=a,this._initialized=!0):a instanceof Re.Component?(this._innerValue=new Re.Timezone(a),this._initialized=!0):(this._timezoneId=a,this._ics=i)}get timezoneId(){return this._initialized?this._innerValue.tzid:this._timezoneId}offsetForArray(a,i,n,o,s,r){this._initialize();const _=new Re.Time({year:a,month:i,day:n,hour:o,minute:s,second:r,isDate:!1});return this._innerValue.utcOffset(_)}timestampToArray(a){this._initialize();const i=Re.Time.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0});i.fromUnixTime(Math.floor(a/1e3));const n=i.convertToZone(this._innerValue);return[n.year,n.month,n.day,n.hour,n.minute,n.second]}toICALTimezone(){return this._initialize(),this._innerValue}toICALJs(){return this._initialize(),this._innerValue.component}_initialize(){if(!this._initialized){const a=Re.parse(this._ics),i=new Re.Component(a);this._innerValue=new Re.Timezone(i),this._initialized=!0}}}ya.utc=new ya(Re.Timezone.utcTimezone),ya.floating=new ya(Re.Timezone.localTimezone);const G_="2.2024a",U_={"AUS Central Standard Time":{aliasTo:"Australia/Darwin"},"AUS Eastern Standard Time":{aliasTo:"Australia/Sydney"},"Afghanistan Standard Time":{aliasTo:"Asia/Kabul"},"Africa/Asmera":{aliasTo:"Africa/Asmara"},"Africa/Timbuktu":{aliasTo:"Africa/Bamako"},"Alaskan Standard Time":{aliasTo:"America/Anchorage"},"America/Argentina/ComodRivadavia":{aliasTo:"America/Argentina/Catamarca"},"America/Buenos_Aires":{aliasTo:"America/Argentina/Buenos_Aires"},"America/Louisville":{aliasTo:"America/Kentucky/Louisville"},"America/Montreal":{aliasTo:"America/Toronto"},"America/Santa_Isabel":{aliasTo:"America/Tijuana"},"Arab Standard Time":{aliasTo:"Asia/Riyadh"},"Arabian Standard Time":{aliasTo:"Asia/Dubai"},"Arabic Standard Time":{aliasTo:"Asia/Baghdad"},"Argentina Standard Time":{aliasTo:"America/Argentina/Buenos_Aires"},"Asia/Calcutta":{aliasTo:"Asia/Kolkata"},"Asia/Katmandu":{aliasTo:"Asia/Kathmandu"},"Asia/Rangoon":{aliasTo:"Asia/Yangon"},"Asia/Saigon":{aliasTo:"Asia/Ho_Chi_Minh"},"Atlantic Standard Time":{aliasTo:"America/Halifax"},"Atlantic/Faeroe":{aliasTo:"Atlantic/Faroe"},"Atlantic/Jan_Mayen":{aliasTo:"Europe/Oslo"},"Azerbaijan Standard Time":{aliasTo:"Asia/Baku"},"Azores Standard Time":{aliasTo:"Atlantic/Azores"},"Bahia Standard Time":{aliasTo:"America/Bahia"},"Bangladesh Standard Time":{aliasTo:"Asia/Dhaka"},"Belarus Standard Time":{aliasTo:"Europe/Minsk"},"Canada Central Standard Time":{aliasTo:"America/Regina"},"Cape Verde Standard Time":{aliasTo:"Atlantic/Cape_Verde"},"Caucasus Standard Time":{aliasTo:"Asia/Yerevan"},"Cen. Australia Standard Time":{aliasTo:"Australia/Adelaide"},"Central America Standard Time":{aliasTo:"America/Guatemala"},"Central Asia Standard Time":{aliasTo:"Asia/Almaty"},"Central Brazilian Standard Time":{aliasTo:"America/Cuiaba"},"Central Europe Standard Time":{aliasTo:"Europe/Budapest"},"Central European Standard Time":{aliasTo:"Europe/Warsaw"},"Central Pacific Standard Time":{aliasTo:"Pacific/Guadalcanal"},"Central Standard Time":{aliasTo:"America/Chicago"},"Central Standard Time (Mexico)":{aliasTo:"America/Mexico_City"},"China Standard Time":{aliasTo:"Asia/Shanghai"},"E. Africa Standard Time":{aliasTo:"Africa/Nairobi"},"E. Australia Standard Time":{aliasTo:"Australia/Brisbane"},"E. South America Standard Time":{aliasTo:"America/Sao_Paulo"},"Eastern Standard Time":{aliasTo:"America/New_York"},"Egypt Standard Time":{aliasTo:"Africa/Cairo"},"Ekaterinburg Standard Time":{aliasTo:"Asia/Yekaterinburg"},"Etc/GMT":{aliasTo:"UTC"},"Etc/GMT+0":{aliasTo:"UTC"},"Etc/UCT":{aliasTo:"UTC"},"Etc/UTC":{aliasTo:"UTC"},"Etc/Unversal":{aliasTo:"UTC"},"Etc/Zulu":{aliasTo:"UTC"},"Europe/Belfast":{aliasTo:"Europe/London"},"FLE Standard Time":{aliasTo:"Europe/Kiev"},"Fiji Standard Time":{aliasTo:"Pacific/Fiji"},GMT:{aliasTo:"UTC"},"GMT Standard Time":{aliasTo:"Europe/London"},"GMT+0":{aliasTo:"UTC"},GMT0:{aliasTo:"UTC"},"GTB Standard Time":{aliasTo:"Europe/Bucharest"},"Georgian Standard Time":{aliasTo:"Asia/Tbilisi"},"Greenland Standard Time":{aliasTo:"America/Godthab"},Greenwich:{aliasTo:"UTC"},"Greenwich Standard Time":{aliasTo:"Atlantic/Reykjavik"},"Hawaiian Standard Time":{aliasTo:"Pacific/Honolulu"},"India Standard Time":{aliasTo:"Asia/Calcutta"},"Iran Standard Time":{aliasTo:"Asia/Tehran"},"Israel Standard Time":{aliasTo:"Asia/Jerusalem"},"Jordan Standard Time":{aliasTo:"Asia/Amman"},"Kaliningrad Standard Time":{aliasTo:"Europe/Kaliningrad"},"Korea Standard Time":{aliasTo:"Asia/Seoul"},"Libya Standard Time":{aliasTo:"Africa/Tripoli"},"Line Islands Standard Time":{aliasTo:"Pacific/Kiritimati"},"Magadan Standard Time":{aliasTo:"Asia/Magadan"},"Mauritius Standard Time":{aliasTo:"Indian/Mauritius"},"Middle East Standard Time":{aliasTo:"Asia/Beirut"},"Montevideo Standard Time":{aliasTo:"America/Montevideo"},"Morocco Standard Time":{aliasTo:"Africa/Casablanca"},"Mountain Standard Time":{aliasTo:"America/Denver"},"Mountain Standard Time (Mexico)":{aliasTo:"America/Chihuahua"},"Myanmar Standard Time":{aliasTo:"Asia/Rangoon"},"N. Central Asia Standard Time":{aliasTo:"Asia/Novosibirsk"},"Namibia Standard Time":{aliasTo:"Africa/Windhoek"},"Nepal Standard Time":{aliasTo:"Asia/Katmandu"},"New Zealand Standard Time":{aliasTo:"Pacific/Auckland"},"Newfoundland Standard Time":{aliasTo:"America/St_Johns"},"North Asia East Standard Time":{aliasTo:"Asia/Irkutsk"},"North Asia Standard Time":{aliasTo:"Asia/Krasnoyarsk"},"Pacific SA Standard Time":{aliasTo:"America/Santiago"},"Pacific Standard Time":{aliasTo:"America/Los_Angeles"},"Pacific Standard Time (Mexico)":{aliasTo:"America/Santa_Isabel"},"Pacific/Johnston":{aliasTo:"Pacific/Honolulu"},"Pakistan Standard Time":{aliasTo:"Asia/Karachi"},"Paraguay Standard Time":{aliasTo:"America/Asuncion"},"Romance Standard Time":{aliasTo:"Europe/Paris"},"Russia Time Zone 10":{aliasTo:"Asia/Srednekolymsk"},"Russia Time Zone 11":{aliasTo:"Asia/Kamchatka"},"Russia Time Zone 3":{aliasTo:"Europe/Samara"},"Russian Standard Time":{aliasTo:"Europe/Moscow"},"SA Eastern Standard Time":{aliasTo:"America/Cayenne"},"SA Pacific Standard Time":{aliasTo:"America/Bogota"},"SA Western Standard Time":{aliasTo:"America/La_Paz"},"SE Asia Standard Time":{aliasTo:"Asia/Bangkok"},"Samoa Standard Time":{aliasTo:"Pacific/Apia"},"Singapore Standard Time":{aliasTo:"Asia/Singapore"},"South Africa Standard Time":{aliasTo:"Africa/Johannesburg"},"Sri Lanka Standard Time":{aliasTo:"Asia/Colombo"},"Syria Standard Time":{aliasTo:"Asia/Damascus"},"Taipei Standard Time":{aliasTo:"Asia/Taipei"},"Tasmania Standard Time":{aliasTo:"Australia/Hobart"},"Tokyo Standard Time":{aliasTo:"Asia/Tokyo"},"Tonga Standard Time":{aliasTo:"Pacific/Tongatapu"},"Turkey Standard Time":{aliasTo:"Europe/Istanbul"},UCT:{aliasTo:"UTC"},"US Eastern Standard Time":{aliasTo:"America/Indiana/Indianapolis"},"US Mountain Standard Time":{aliasTo:"America/Phoenix"},"US/Central":{aliasTo:"America/Chicago"},"US/Eastern":{aliasTo:"America/New_York"},"US/Mountain":{aliasTo:"America/Denver"},"US/Pacific":{aliasTo:"America/Los_Angeles"},"US/Pacific-New":{aliasTo:"America/Los_Angeles"},"Ulaanbaatar Standard Time":{aliasTo:"Asia/Ulaanbaatar"},Universal:{aliasTo:"UTC"},"Venezuela Standard Time":{aliasTo:"America/Caracas"},"Vladivostok Standard Time":{aliasTo:"Asia/Vladivostok"},"W. Australia Standard Time":{aliasTo:"Australia/Perth"},"W. Central Africa Standard Time":{aliasTo:"Africa/Lagos"},"W. Europe Standard Time":{aliasTo:"Europe/Berlin"},"West Asia Standard Time":{aliasTo:"Asia/Tashkent"},"West Pacific Standard Time":{aliasTo:"Pacific/Port_Moresby"},"Yakutsk Standard Time":{aliasTo:"Asia/Yakutsk"},Z:{aliasTo:"UTC"},Zulu:{aliasTo:"UTC"},utc:{aliasTo:"UTC"}},z_={"Africa/Abidjan":{ics:[`BEGIN:STANDARD\r
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
END:STANDARD`]}},$a={version:G_,aliases:U_,zones:z_};class W_{constructor(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map}getTimezoneForId(a){return this._getTimezoneForIdRec(a,0)}_getTimezoneForIdRec(a,i){if(this._timezones.has(a))return this._timezones.get(a);if(i>=20)return console.error("TimezoneManager.getTimezoneForIdRec() exceeds recursion limits"),null;if(this._aliases.has(a)){const n=this._aliases.get(a);return this._getTimezoneForIdRec(n,i+1)}return null}hasTimezoneForId(a){return this._timezones.has(a)||this._aliases.has(a)}isAlias(a){return!this._timezones.has(a)&&this._aliases.has(a)}listAllTimezones(a=!1){const i=Array.from(this._timezones.keys());return a?i.concat(Array.from(this._aliases.keys())):i}registerTimezone(a){this._timezones.set(a.timezoneId,a),Re.TimezoneService.register(a.timezoneId,a.toICALTimezone()),this._pendingAliases=this._pendingAliases.filter(([i,n])=>n!==a.timezoneId?!0:(Re.TimezoneService.register(i,a.toICALTimezone()),!1))}registerDefaultTimezones(){console.debug(`@nextcloud/calendar-js app is using version ${$a.version} of the timezone database`);for(const a in $a.zones)if(Object.prototype.hasOwnProperty.call($a.zones,[a])){const i=["BEGIN:VTIMEZONE","TZID:"+a,...$a.zones[a].ics,"END:VTIMEZONE"].join(`\r
`);this.registerTimezoneFromICS(a,i)}for(const a in $a.aliases)Object.prototype.hasOwnProperty.call($a.aliases,[a])&&this.registerAlias(a,$a.aliases[a].aliasTo)}registerTimezoneFromICS(a,i){const n=new ya(a,i);this.registerTimezone(n)}registerAlias(a,i){this._aliases.set(a,i);const n=this.getTimezoneForId(i);if(!n){this._pendingAliases.push([a,i]);return}Re.TimezoneService.register(a,n.toICALTimezone())}unregisterTimezones(a){this._timezones.delete(a),Re.TimezoneService.remove(a)}unregisterAlias(a){this._aliases.delete(a),this._pendingAliases=this._pendingAliases.filter(([i])=>i!==a),Re.TimezoneService.remove(a)}clearAllTimezones(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map,Re.TimezoneService.reset(),bt.registerTimezone(ya.utc),bt.registerTimezone(ya.floating),bt.registerAlias("GMT",ya.utc.timezoneId),bt.registerAlias("Z",ya.utc.timezoneId)}}const bt=new W_;bt.clearAllTimezones();function V_(){return bt}var _r={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return(()=>{var i={646:r=>{r.exports=function(_){if(Array.isArray(_)){for(var l=0,g=new Array(_.length);l<_.length;l++)g[l]=_[l];return g}}},713:r=>{r.exports=function(_,l,g){return l in _?Object.defineProperty(_,l,{value:g,enumerable:!0,configurable:!0,writable:!0}):_[l]=g,_}},860:r=>{r.exports=function(_){if(Symbol.iterator in Object(_)||Object.prototype.toString.call(_)==="[object Arguments]")return Array.from(_)}},206:r=>{r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(r,_,l)=>{var g=l(646),d=l(860),f=l(206);r.exports=function(h){return g(h)||d(h)||f()}},8:r=>{function _(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r.exports=_=function(g){return typeof g}:r.exports=_=function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},_(l)}r.exports=_}},n={};function o(r){var _=n[r];if(_!==void 0)return _.exports;var l=n[r]={exports:{}};return i[r](l,l.exports,o),l.exports}o.n=r=>{var _=r&&r.__esModule?()=>r.default:()=>r;return o.d(_,{a:_}),_},o.d=(r,_)=>{for(var l in _)o.o(_,l)&&!o.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:_[l]})},o.o=(r,_)=>Object.prototype.hasOwnProperty.call(r,_),o.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var s={};return(()=>{o.r(s),o.d(s,{VueSelect:()=>G,default:()=>I,mixins:()=>W});var r=o(319),_=o.n(r),l=o(8),g=o.n(l),d=o(713),f=o.n(d);const h={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(c){var v=this;this.autoscroll&&c&&this.$nextTick(function(){return v.maybeAdjustScroll()})}},methods:{maybeAdjustScroll:function(){var c,v=((c=this.$refs.dropdownMenu)===null||c===void 0?void 0:c.children[this.typeAheadPointer])||!1;if(v){var R=this.getDropdownViewport(),N=v.getBoundingClientRect(),z=N.top,q=N.bottom,ie=N.height;if(z<R.top)return this.$refs.dropdownMenu.scrollTop=v.offsetTop;if(q>R.bottom)return this.$refs.dropdownMenu.scrollTop=v.offsetTop-(R.height-ie)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){if(this.resetFocusOnOptionsChange){for(var c=0;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}}},open:function(c){c&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var c=this.typeAheadPointer-1;c>=0;c--)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadDown:function(){for(var c=this.typeAheadPointer+1;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadSelect:function(){var c=this.filteredOptions[this.typeAheadPointer];c&&this.selectable(c)&&this.select(c)},typeAheadToLastSelected:function(){var c=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1;c!==-1&&(this.typeAheadPointer=c)}}},m={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(c){this.mutableLoading=c}},methods:{toggleLoading:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.mutableLoading=c??!this.mutableLoading}}};function b(c,v,R,N,z,q,ie,ee){var fe,ne=typeof c=="function"?c.options:c;return v&&(ne.render=v,ne.staticRenderFns=R,ne._compiled=!0),{exports:c,options:ne}}const y={Deselect:b({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[v("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])},[]).exports,OpenIndicator:b({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[v("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])},[]).exports},k={inserted:function(c,v,R){var N=R.context;if(N.appendToBody){document.body.appendChild(c);var z=N.$refs.toggle.getBoundingClientRect(),q=z.height,ie=z.top,ee=z.left,fe=z.width,ne=window.scrollX||window.pageXOffset,ce=window.scrollY||window.pageYOffset;c.unbindPosition=N.calculatePosition(c,N,{width:fe+"px",left:ne+ee+"px",top:ce+ie+q+"px"})}},unbind:function(c,v,R){R.context.appendToBody&&(c.unbindPosition&&typeof c.unbindPosition=="function"&&c.unbindPosition(),c.parentNode&&c.parentNode.removeChild(c))}},w=function(c){var v={};return Object.keys(c).sort().forEach(function(R){v[R]=c[R]}),JSON.stringify(v)};var S=0;const j=function(){return++S};function Z(c,v){var R=Object.keys(c);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(c);v&&(N=N.filter(function(z){return Object.getOwnPropertyDescriptor(c,z).enumerable})),R.push.apply(R,N)}return R}function O(c){for(var v=1;v<arguments.length;v++){var R=arguments[v]!=null?arguments[v]:{};v%2?Z(Object(R),!0).forEach(function(N){f()(c,N,R[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(R)):Z(Object(R)).forEach(function(N){Object.defineProperty(c,N,Object.getOwnPropertyDescriptor(R,N))})}return c}const G=b({components:O({},y),directives:{appendToBody:k},mixins:[h,u,m],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},ariaLabelCombobox:{type:String,default:"Search for options"},ariaLabelListbox:{type:String,default:"Options"},ariaLabelClearSelected:{type:String,default:"Clear selected"},ariaLabelDeselectOption:{type:Function,default:function(c){return"Deselect ".concat(c)}},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(c){return c}},selectable:{type:Function,default:function(c){return!0}},getOptionLabel:{type:Function,default:function(c){return g()(c)==="object"?c.hasOwnProperty(this.label)?c[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(c),`.
`)+"https://vue-select.org/api/props.html#getoptionlabel"):c}},getOptionKey:{type:Function,default:function(c){if(g()(c)!=="object")return c;try{return c.hasOwnProperty("id")?c.id:w(c)}catch(v){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,c,v)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(c,v,R){return(v||"").toLocaleLowerCase().indexOf(R.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(c,v){var R=this;return c.filter(function(N){var z=R.getOptionLabel(N);return typeof z=="number"&&(z=z.toString()),R.filterBy(N,z,v)})}},createOption:{type:Function,default:function(c){return g()(this.optionList[0])==="object"?f()({},this.label,c):c}},resetFocusOnOptionsChange:{type:Boolean,default:!0},resetOnOptionsChange:{default:!1,validator:function(c){return["function","boolean"].includes(g()(c))}},clearSearchOnBlur:{type:Function,default:function(c){var v=c.clearSearchOnSelect,R=c.multiple;return v&&!R}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(c,v){return c}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(c,v,R){var N=R.width,z=R.top,q=R.left;c.style.top=z,c.style.left=q,c.style.width=N}},dropdownShouldOpen:{type:Function,default:function(c){var v=c.noDrop,R=c.open,N=c.mutableLoading;return!v&&R&&!N}},keyboardFocusBorder:{type:Boolean,default:!1},uid:{type:[String,Number],default:function(){return j()}}},data:function(){return{search:"",open:!1,isComposing:!1,isKeyboardNavigation:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return this.value===void 0||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var c=this.value;return this.isTrackingValues&&(c=this.$data._value),c!=null&&c!==""?[].concat(c):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var c=this,v={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:O({id:this.inputId,disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,role:"combobox","aria-autocomplete":"list","aria-label":this.ariaLabelCombobox,"aria-controls":"vs-".concat(this.uid,"__listbox"),"aria-owns":"vs-".concat(this.uid,"__listbox"),"aria-expanded":this.dropdownOpen.toString(),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs-".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return c.isComposing=!0},compositionend:function(){return c.isComposing=!1},keydown:this.onSearchKeyDown,keypress:this.onSearchKeyPress,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(R){return c.search=R.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:v,listFooter:v,header:O({},v,{deselect:this.deselect}),footer:O({},v,{deselect:this.deselect})}},childComponents:function(){return O({},y,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var c=this,v=function(q){return c.limit!==null?q.slice(0,c.limit):q},R=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return v(R);var N=this.search.length?this.filter(R,this.search,this):R;if(this.taggable&&this.search.length){var z=this.createOption(this.search);this.optionExists(z)||N.unshift(z)}return v(N)},isValueEmpty:function(){return this.selectedValue.length===0},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(c,v){var R=this;!this.taggable&&(typeof R.resetOnOptionsChange=="function"?R.resetOnOptionsChange(c,v,R.selectedValue):R.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(c){this.isTrackingValues&&this.setInternalValueFromOptions(c)}},multiple:function(){this.clearSelection()},open:function(c){this.$emit(c?"open":"close")},search:function(c){c.length&&(this.open=!0)}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(c){var v=this;Array.isArray(c)?this.$data._value=c.map(function(R){return v.findOptionFromReducedValue(R)}):this.$data._value=this.findOptionFromReducedValue(c)},select:function(c){this.$emit("option:selecting",c),this.isOptionSelected(c)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(c):(this.taggable&&!this.optionExists(c)&&this.$emit("option:created",c),this.multiple&&(c=this.selectedValue.concat(c)),this.updateValue(c),this.$emit("option:selected",c)),this.onAfterSelect(c)},deselect:function(c){var v=this;this.$emit("option:deselecting",c),this.updateValue(this.selectedValue.filter(function(R){return!v.optionComparator(R,c)})),this.$emit("option:deselected",c)},keyboardDeselect:function(c,v){var R,N;this.deselect(c);var z=(R=this.$refs.deselectButtons)===null||R===void 0?void 0:R[v+1],q=(N=this.$refs.deselectButtons)===null||N===void 0?void 0:N[v-1],ie=z??q;ie?ie.focus():this.searchEl.focus()},clearSelection:function(){this.updateValue(this.multiple?[]:null),this.searchEl.focus()},onAfterSelect:function(c){var v=this;this.closeOnSelect&&(this.open=!this.open),this.clearSearchOnSelect&&(this.search=""),this.noDrop&&this.multiple&&this.$nextTick(function(){return v.$refs.search.focus()})},updateValue:function(c){var v=this;this.value===void 0&&(this.$data._value=c),c!==null&&(c=Array.isArray(c)?c.map(function(R){return v.reduce(R)}):this.reduce(c)),this.$emit("input",c)},toggleDropdown:function(c){var v=c.target!==this.searchEl;v&&c.preventDefault();var R=[].concat(_()(this.$refs.deselectButtons||[]),_()([this.$refs.clearButton]));this.searchEl===void 0||R.filter(Boolean).some(function(N){return N.contains(c.target)||N===c.target})?c.preventDefault():this.open&&v?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(c){var v=this;return this.selectedValue.some(function(R){return v.optionComparator(R,c)})},isOptionDeselectable:function(c){return this.isOptionSelected(c)&&this.deselectFromDropdown},hasKeyboardFocusBorder:function(c){return!(!this.keyboardFocusBorder||!this.isKeyboardNavigation)&&c===this.typeAheadPointer},optionComparator:function(c,v){return this.getOptionKey(c)===this.getOptionKey(v)},findOptionFromReducedValue:function(c){var v=this,R=[].concat(_()(this.options),_()(this.pushedTags)).filter(function(N){return JSON.stringify(v.reduce(N))===JSON.stringify(c)});return R.length===1?R[0]:R.find(function(N){return v.optionComparator(N,v.$data._value)})||c},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var c=null;this.multiple&&(c=_()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(c)}},optionExists:function(c){var v=this;return this.optionList.some(function(R){return v.optionComparator(R,c)})},optionAriaSelected:function(c){return this.selectable(c)?String(this.isOptionSelected(c)):null},normalizeOptionForSlot:function(c){return g()(c)==="object"?c:f()({},this.label,c)},pushTag:function(c){this.pushedTags.push(c)},onEscape:function(){this.search.length?this.search="":this.open=!1},onSearchBlur:function(){if(!this.mousedown||this.searching){var c=this.clearSearchOnSelect,v=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:c,multiple:v})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,this.search.length!==0||this.options.length!==0||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onMouseMove:function(c,v){this.isKeyboardNavigation=!1,this.selectable(c)&&(this.typeAheadPointer=v)},onSearchKeyDown:function(c){var v=this,R=function(q){if(q.preventDefault(),v.open)return!v.isComposing&&v.typeAheadSelect();v.open=!0},N={8:function(q){return v.maybeDeleteValue()},9:function(q){return v.onTab()},27:function(q){return v.onEscape()},38:function(q){if(q.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadUp();v.open=!0},40:function(q){if(q.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadDown();v.open=!0}};this.selectOnKeyCodes.forEach(function(q){return N[q]=R});var z=this.mapKeydown(N,this);if(typeof z[c.keyCode]=="function")return z[c.keyCode](c)},onSearchKeyPress:function(c){this.open||c.keyCode!==32||(c.preventDefault(),this.open=!0)}}},function(){var c=this,v=c.$createElement,R=c._self._c||v;return R("div",{staticClass:"v-select",class:c.stateClasses,attrs:{id:"v-select-"+c.uid,dir:c.dir}},[c._t("header",null,null,c.scope.header),c._v(" "),R("div",{ref:"toggle",staticClass:"vs__dropdown-toggle"},[R("div",{ref:"selectedOptions",staticClass:"vs__selected-options",on:{mousedown:c.toggleDropdown}},[c._l(c.selectedValue,function(N,z){return c._t("selected-option-container",[R("span",{key:c.getOptionKey(N),staticClass:"vs__selected"},[c._t("selected-option",[c._v(`
            `+c._s(c.getOptionLabel(N))+`
          `)],null,c.normalizeOptionForSlot(N)),c._v(" "),c.multiple?R("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelDeselectOption(c.getOptionLabel(N)),"aria-label":c.ariaLabelDeselectOption(c.getOptionLabel(N))},on:{mousedown:function(q){return q.stopPropagation(),c.deselect(N)},keydown:function(q){return!q.type.indexOf("key")&&c._k(q.keyCode,"enter",13,q.key,"Enter")?null:c.keyboardDeselect(N,z)}}},[R(c.childComponents.Deselect,{tag:"component"})],1):c._e()],2)],{option:c.normalizeOptionForSlot(N),deselect:c.deselect,multiple:c.multiple,disabled:c.disabled})}),c._v(" "),c._t("search",[R("input",c._g(c._b({staticClass:"vs__search"},"input",c.scope.search.attributes,!1),c.scope.search.events))],null,c.scope.search)],2),c._v(" "),R("div",{ref:"actions",staticClass:"vs__actions"},[R("button",{directives:[{name:"show",rawName:"v-show",value:c.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelClearSelected,"aria-label":c.ariaLabelClearSelected},on:{click:c.clearSelection}},[R(c.childComponents.Deselect,{tag:"component"})],1),c._v(" "),c.noDrop?c._e():R("button",{ref:"openIndicatorButton",staticClass:"vs__open-indicator-button",attrs:{type:"button",tabindex:"-1","aria-labelledby":"vs-"+c.uid+"__listbox","aria-controls":"vs-"+c.uid+"__listbox","aria-expanded":c.dropdownOpen.toString()},on:{mousedown:c.toggleDropdown}},[c._t("open-indicator",[R(c.childComponents.OpenIndicator,c._b({tag:"component"},"component",c.scope.openIndicator.attributes,!1))],null,c.scope.openIndicator)],2),c._v(" "),c._t("spinner",[R("div",{directives:[{name:"show",rawName:"v-show",value:c.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[c._v("Loading...")])],null,c.scope.spinner)],2)]),c._v(" "),R("transition",{attrs:{name:c.transition}},[c.dropdownOpen?R("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs-"+c.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox,"aria-multiselectable":c.multiple,tabindex:"-1"},on:{mousedown:function(N){return N.preventDefault(),c.onMousedown(N)},mouseup:c.onMouseUp}},[c._t("list-header",null,null,c.scope.listHeader),c._v(" "),c._l(c.filteredOptions,function(N,z){return R("li",{key:c.getOptionKey(N),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":c.isOptionDeselectable(N)&&z===c.typeAheadPointer,"vs__dropdown-option--selected":c.isOptionSelected(N),"vs__dropdown-option--highlight":z===c.typeAheadPointer,"vs__dropdown-option--kb-focus":c.hasKeyboardFocusBorder(z),"vs__dropdown-option--disabled":!c.selectable(N)},attrs:{id:"vs-"+c.uid+"__option-"+z,role:"option","aria-selected":c.optionAriaSelected(N)},on:{mousemove:function(q){return c.onMouseMove(N,z)},click:function(q){q.preventDefault(),q.stopPropagation(),c.selectable(N)&&c.select(N)}}},[c._t("option",[c._v(`
          `+c._s(c.getOptionLabel(N))+`
        `)],null,c.normalizeOptionForSlot(N))],2)}),c._v(" "),c.filteredOptions.length===0?R("li",{staticClass:"vs__no-options"},[c._t("no-options",[c._v(`
          Sorry, no matching options.
        `)],null,c.scope.noOptions)],2):c._e(),c._v(" "),c._t("list-footer",null,null,c.scope.listFooter)],2):R("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox}})]),c._v(" "),c._t("footer",null,null,c.scope.footer)],2)},[]).exports,W={ajax:m,pointer:u,pointerScroll:h},I=G})(),s})()})})(_r);var Qa=_r.exports;const Mi=Math.min,nt=Math.max,ji=Math.round,di=Math.floor,Ga=e=>({x:e,y:e}),$_={left:"right",right:"left",bottom:"top",top:"bottom"},Q_={start:"end",end:"start"};function vo(e,a,i){return nt(e,Mi(a,i))}function yt(e,a){return typeof e=="function"?e(a):e}function Ua(e){return e.split("-")[0]}function E0(e){return e.split("-")[1]}function Zn(e){return e==="x"?"y":"x"}function dr(e){return e==="y"?"height":"width"}function lt(e){return["top","bottom"].includes(Ua(e))?"y":"x"}function fr(e){return Zn(lt(e))}function K_(e,a,i){i===void 0&&(i=!1);const n=E0(e),o=fr(e),s=dr(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return a.reference[s]>a.floating[s]&&(r=Yi(r)),[r,Yi(r)]}function J_(e){const a=Yi(e);return[ln(e),a,ln(a)]}function ln(e){return e.replace(/start|end/g,a=>Q_[a])}function X_(e,a,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?a?o:n:a?n:o;case"left":case"right":return a?s:r;default:return[]}}function ed(e,a,i,n){const o=E0(e);let s=X_(Ua(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),a&&(s=s.concat(s.map(ln)))),s}function Yi(e){return e.replace(/left|right|bottom|top/g,a=>$_[a])}function ad(e){return{top:0,right:0,bottom:0,left:0,...e}}function td(e){return typeof e!="number"?ad(e):{top:e,right:e,bottom:e,left:e}}function qi(e){const{x:a,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:a,right:a+n,bottom:i+o,x:a,y:i}}function So(e,a,i){let{reference:n,floating:o}=e;const s=lt(a),r=fr(a),_=dr(r),l=Ua(a),g=s==="y",d=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2,h=n[_]/2-o[_]/2;let u;switch(l){case"top":u={x:d,y:n.y-o.height};break;case"bottom":u={x:d,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:f};break;case"left":u={x:n.x-o.width,y:f};break;default:u={x:n.x,y:n.y}}switch(E0(a)){case"start":u[r]-=h*(i&&g?-1:1);break;case"end":u[r]+=h*(i&&g?-1:1);break}return u}const id=async(e,a,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,_=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(a));let g=await r.getElementRects({reference:e,floating:a,strategy:o}),{x:d,y:f}=So(g,n,l),h=n,u={},m=0;for(let b=0;b<_.length;b++){const{name:y,fn:k}=_[b],{x:w,y:S,data:j,reset:Z}=await k({x:d,y:f,initialPlacement:n,placement:h,strategy:o,middlewareData:u,rects:g,platform:r,elements:{reference:e,floating:a}});d=w??d,f=S??f,u={...u,[y]:{...u[y],...j}},Z&&m<=50&&(m++,typeof Z=="object"&&(Z.placement&&(h=Z.placement),Z.rects&&(g=Z.rects===!0?await r.getElementRects({reference:e,floating:a,strategy:o}):Z.rects),{x:d,y:f}=So(g,h,l)),b=-1)}return{x:d,y:f,placement:h,strategy:o,middlewareData:u}};async function gr(e,a){var i;a===void 0&&(a={});const{x:n,y:o,platform:s,rects:r,elements:_,strategy:l}=e,{boundary:g="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:u=0}=yt(a,e),m=td(u),b=_[h?f==="floating"?"reference":"floating":f],y=qi(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(b)))==null||i?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(_.floating)),boundary:g,rootBoundary:d,strategy:l})),k=f==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(_.floating)),S=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},j=qi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:_,rect:k,offsetParent:w,strategy:l}):k);return{top:(y.top-j.top+m.top)/S.y,bottom:(j.bottom-y.bottom+m.bottom)/S.y,left:(y.left-j.left+m.left)/S.x,right:(j.right-y.right+m.right)/S.x}}const nd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(a){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:_,platform:l,elements:g}=a,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...y}=yt(e,a);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const k=Ua(o),w=lt(_),S=Ua(_)===_,j=await(l.isRTL==null?void 0:l.isRTL(g.floating)),Z=h||(S||!b?[Yi(_)]:J_(_)),O=m!=="none";!h&&O&&Z.push(...ed(_,b,m,j));const G=[_,...Z],W=await gr(a,y),I=[];let c=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&I.push(W[k]),f){const z=K_(o,r,j);I.push(W[z[0]],W[z[1]])}if(c=[...c,{placement:o,overflows:I}],!I.every(z=>z<=0)){var v,R;const z=(((v=s.flip)==null?void 0:v.index)||0)+1,q=G[z];if(q)return{data:{index:z,overflows:c},reset:{placement:q}};let ie=(R=c.filter(ee=>ee.overflows[0]<=0).sort((ee,fe)=>ee.overflows[1]-fe.overflows[1])[0])==null?void 0:R.placement;if(!ie)switch(u){case"bestFit":{var N;const ee=(N=c.filter(fe=>{if(O){const ne=lt(fe.placement);return ne===w||ne==="y"}return!0}).map(fe=>[fe.placement,fe.overflows.filter(ne=>ne>0).reduce((ne,ce)=>ne+ce,0)]).sort((fe,ne)=>fe[1]-ne[1])[0])==null?void 0:N[0];ee&&(ie=ee);break}case"initialPlacement":ie=_;break}if(o!==ie)return{reset:{placement:ie}}}return{}}}};async function od(e,a){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=Ua(i),_=E0(i),l=lt(i)==="y",g=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,f=yt(a,e);let{mainAxis:h,crossAxis:u,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return _&&typeof m=="number"&&(u=_==="end"?m*-1:m),l?{x:u*d,y:h*g}:{x:h*g,y:u*d}}const sd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(a){var i,n;const{x:o,y:s,placement:r,middlewareData:_}=a,l=await od(a,e);return r===((i=_.offset)==null?void 0:i.placement)&&(n=_.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:r}}}}},rd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(a){const{x:i,y:n,placement:o}=a,{mainAxis:s=!0,crossAxis:r=!1,limiter:_={fn:y=>{let{x:k,y:w}=y;return{x:k,y:w}}},...l}=yt(e,a),g={x:i,y:n},d=await gr(a,l),f=lt(Ua(o)),h=Zn(f);let u=g[h],m=g[f];if(s){const y=h==="y"?"top":"left",k=h==="y"?"bottom":"right",w=u+d[y],S=u-d[k];u=vo(w,u,S)}if(r){const y=f==="y"?"top":"left",k=f==="y"?"bottom":"right",w=m+d[y],S=m-d[k];m=vo(w,m,S)}const b=_.fn({...a,[h]:u,[f]:m});return{...b,data:{x:b.x-i,y:b.y-n}}}}},ld=function(e){return e===void 0&&(e={}),{options:e,fn(a){const{x:i,y:n,placement:o,rects:s,middlewareData:r}=a,{offset:_=0,mainAxis:l=!0,crossAxis:g=!0}=yt(e,a),d={x:i,y:n},f=lt(o),h=Zn(f);let u=d[h],m=d[f];const b=yt(_,a),y=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const S=h==="y"?"height":"width",j=s.reference[h]-s.floating[S]+y.mainAxis,Z=s.reference[h]+s.reference[S]-y.mainAxis;u<j?u=j:u>Z&&(u=Z)}if(g){var k,w;const S=h==="y"?"width":"height",j=["top","left"].includes(Ua(o)),Z=s.reference[f]-s.floating[S]+(j&&((k=r.offset)==null?void 0:k[f])||0)+(j?0:y.crossAxis),O=s.reference[f]+s.reference[S]+(j?0:((w=r.offset)==null?void 0:w[f])||0)-(j?y.crossAxis:0);m<Z?m=Z:m>O&&(m=O)}return{[h]:u,[f]:m}}}};function Ot(e){return hr(e)?(e.nodeName||"").toLowerCase():"#document"}function Xe(e){var a;return(e==null||(a=e.ownerDocument)==null?void 0:a.defaultView)||window}function va(e){var a;return(a=(hr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:a.documentElement}function hr(e){return e instanceof Node||e instanceof Xe(e).Node}function la(e){return e instanceof Element||e instanceof Xe(e).Element}function ca(e){return e instanceof HTMLElement||e instanceof Xe(e).HTMLElement}function Ro(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xe(e).ShadowRoot}function ni(e){const{overflow:a,overflowX:i,overflowY:n,display:o}=_a(e);return/auto|scroll|overlay|hidden|clip/.test(a+n+i)&&!["inline","contents"].includes(o)}function _d(e){return["table","td","th"].includes(Ot(e))}function k0(e){return[":popover-open",":modal"].some(a=>{try{return e.matches(a)}catch{return!1}})}function In(e){const a=Hn(),i=la(e)?_a(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!a&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!a&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function dd(e){let a=za(e);for(;ca(a)&&!Et(a);){if(In(a))return a;if(k0(a))return null;a=za(a)}return null}function Hn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Et(e){return["html","body","#document"].includes(Ot(e))}function _a(e){return Xe(e).getComputedStyle(e)}function A0(e){return la(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function za(e){if(Ot(e)==="html")return e;const a=e.assignedSlot||e.parentNode||Ro(e)&&e.host||va(e);return Ro(a)?a.host:a}function Fr(e){const a=za(e);return Et(a)?e.ownerDocument?e.ownerDocument.body:e.body:ca(a)&&ni(a)?a:Fr(a)}function Jt(e,a,i){var n;a===void 0&&(a=[]),i===void 0&&(i=!0);const o=Fr(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Xe(o);if(s){const _=_n(r);return a.concat(r,r.visualViewport||[],ni(o)?o:[],_&&i?Jt(_):[])}return a.concat(o,Jt(o,[],i))}function _n(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ur(e){const a=_a(e);let i=parseFloat(a.width)||0,n=parseFloat(a.height)||0;const o=ca(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,_=ji(i)!==s||ji(n)!==r;return _&&(i=s,n=r),{width:i,height:n,$:_}}function Pn(e){return la(e)?e:e.contextElement}function Dt(e){const a=Pn(e);if(!ca(a))return Ga(1);const i=a.getBoundingClientRect(),{width:n,height:o,$:s}=ur(a);let r=(s?ji(i.width):i.width)/n,_=(s?ji(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!_||!Number.isFinite(_))&&(_=1),{x:r,y:_}}const fd=Ga(0);function cr(e){const a=Xe(e);return!Hn()||!a.visualViewport?fd:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function gd(e,a,i){return a===void 0&&(a=!1),!i||a&&i!==Xe(e)?!1:a}function _t(e,a,i,n){a===void 0&&(a=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=Pn(e);let r=Ga(1);a&&(n?la(n)&&(r=Dt(n)):r=Dt(e));const _=gd(s,i,n)?cr(s):Ga(0);let l=(o.left+_.x)/r.x,g=(o.top+_.y)/r.y,d=o.width/r.x,f=o.height/r.y;if(s){const h=Xe(s),u=n&&la(n)?Xe(n):n;let m=h,b=_n(m);for(;b&&n&&u!==m;){const y=Dt(b),k=b.getBoundingClientRect(),w=_a(b),S=k.left+(b.clientLeft+parseFloat(w.paddingLeft))*y.x,j=k.top+(b.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,g*=y.y,d*=y.x,f*=y.y,l+=S,g+=j,m=Xe(b),b=_n(m)}}return qi({width:d,height:f,x:l,y:g})}function hd(e){let{elements:a,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=va(n),_=a?k0(a.floating):!1;if(n===r||_&&s)return i;let l={scrollLeft:0,scrollTop:0},g=Ga(1);const d=Ga(0),f=ca(n);if((f||!f&&!s)&&((Ot(n)!=="body"||ni(r))&&(l=A0(n)),ca(n))){const h=_t(n);g=Dt(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:i.width*g.x,height:i.height*g.y,x:i.x*g.x-l.scrollLeft*g.x+d.x,y:i.y*g.y-l.scrollTop*g.y+d.y}}function Fd(e){return Array.from(e.getClientRects())}function mr(e){return _t(va(e)).left+A0(e).scrollLeft}function ud(e){const a=va(e),i=A0(e),n=e.ownerDocument.body,o=nt(a.scrollWidth,a.clientWidth,n.scrollWidth,n.clientWidth),s=nt(a.scrollHeight,a.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+mr(e);const _=-i.scrollTop;return _a(n).direction==="rtl"&&(r+=nt(a.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:_}}function cd(e,a){const i=Xe(e),n=va(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,_=0,l=0;if(o){s=o.width,r=o.height;const g=Hn();(!g||g&&a==="fixed")&&(_=o.offsetLeft,l=o.offsetTop)}return{width:s,height:r,x:_,y:l}}function md(e,a){const i=_t(e,!0,a==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=ca(e)?Dt(e):Ga(1),r=e.clientWidth*s.x,_=e.clientHeight*s.y,l=o*s.x,g=n*s.y;return{width:r,height:_,x:l,y:g}}function Co(e,a,i){let n;if(a==="viewport")n=cd(e,i);else if(a==="document")n=ud(va(e));else if(la(a))n=md(a,i);else{const o=cr(e);n={...a,x:a.x-o.x,y:a.y-o.y}}return qi(n)}function pr(e,a){const i=za(e);return i===a||!la(i)||Et(i)?!1:_a(i).position==="fixed"||pr(i,a)}function pd(e,a){const i=a.get(e);if(i)return i;let n=Jt(e,[],!1).filter(_=>la(_)&&Ot(_)!=="body"),o=null;const s=_a(e).position==="fixed";let r=s?za(e):e;for(;la(r)&&!Et(r);){const _=_a(r),l=In(r);!l&&_.position==="fixed"&&(o=null),(s?!l&&!o:!l&&_.position==="static"&&o&&["absolute","fixed"].includes(o.position)||ni(r)&&!l&&pr(e,r))?n=n.filter(g=>g!==r):o=_,r=za(r)}return a.set(e,n),n}function bd(e){let{element:a,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?k0(a)?[]:pd(a,this._c):[].concat(i),n],r=s[0],_=s.reduce((l,g)=>{const d=Co(a,g,o);return l.top=nt(d.top,l.top),l.right=Mi(d.right,l.right),l.bottom=Mi(d.bottom,l.bottom),l.left=nt(d.left,l.left),l},Co(a,r,o));return{width:_.right-_.left,height:_.bottom-_.top,x:_.left,y:_.top}}function Td(e){const{width:a,height:i}=ur(e);return{width:a,height:i}}function Dd(e,a,i){const n=ca(a),o=va(a),s=i==="fixed",r=_t(e,!0,s,a);let _={scrollLeft:0,scrollTop:0};const l=Ga(0);if(n||!n&&!s)if((Ot(a)!=="body"||ni(o))&&(_=A0(a)),n){const f=_t(a,!0,s,a);l.x=f.x+a.clientLeft,l.y=f.y+a.clientTop}else o&&(l.x=mr(o));const g=r.left+_.scrollLeft-l.x,d=r.top+_.scrollTop-l.y;return{x:g,y:d,width:r.width,height:r.height}}function I0(e){return _a(e).position==="static"}function Oo(e,a){return!ca(e)||_a(e).position==="fixed"?null:a?a(e):e.offsetParent}function br(e,a){const i=Xe(e);if(k0(e))return i;if(!ca(e)){let o=za(e);for(;o&&!Et(o);){if(la(o)&&!I0(o))return o;o=za(o)}return i}let n=Oo(e,a);for(;n&&_d(n)&&I0(n);)n=Oo(n,a);return n&&Et(n)&&I0(n)&&!In(n)?i:n||dd(e)||i}const yd=async function(e){const a=this.getOffsetParent||br,i=this.getDimensions,n=await i(e.floating);return{reference:Dd(e.reference,await a(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ed(e){return _a(e).direction==="rtl"}const kd={convertOffsetParentRelativeRectToViewportRelativeRect:hd,getDocumentElement:va,getClippingRect:bd,getOffsetParent:br,getElementRects:yd,getClientRects:Fd,getDimensions:Td,getScale:Dt,isElement:la,isRTL:Ed};function Ad(e,a){let i=null,n;const o=va(e);function s(){var _;clearTimeout(n),(_=i)==null||_.disconnect(),i=null}function r(_,l){_===void 0&&(_=!1),l===void 0&&(l=1),s();const{left:g,top:d,width:f,height:h}=e.getBoundingClientRect();if(_||a(),!f||!h)return;const u=di(d),m=di(o.clientWidth-(g+f)),b=di(o.clientHeight-(d+h)),y=di(g),k={rootMargin:-u+"px "+-m+"px "+-b+"px "+-y+"px",threshold:nt(0,Mi(1,l))||1};let w=!0;function S(j){const Z=j[0].intersectionRatio;if(Z!==l){if(!w)return r();Z?r(!1,Z):n=setTimeout(()=>{r(!1,1e-7)},1e3)}w=!1}try{i=new IntersectionObserver(S,{...k,root:o.ownerDocument})}catch{i=new IntersectionObserver(S,k)}i.observe(e)}return r(!0),s}function wd(e,a,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:_=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,g=Pn(e),d=o||s?[...g?Jt(g):[],...Jt(a)]:[];d.forEach(k=>{o&&k.addEventListener("scroll",i,{passive:!0}),s&&k.addEventListener("resize",i)});const f=g&&_?Ad(g,i):null;let h=-1,u=null;r&&(u=new ResizeObserver(k=>{let[w]=k;w&&w.target===g&&u&&(u.unobserve(a),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var S;(S=u)==null||S.observe(a)})),i()}),g&&!l&&u.observe(g),u.observe(a));let m,b=l?_t(e):null;l&&y();function y(){const k=_t(e);b&&(k.x!==b.x||k.y!==b.y||k.width!==b.width||k.height!==b.height)&&i(),b=k,m=requestAnimationFrame(y)}return i(),()=>{var k;d.forEach(w=>{o&&w.removeEventListener("scroll",i),s&&w.removeEventListener("resize",i)}),f?.(),(k=u)==null||k.disconnect(),u=null,l&&cancelAnimationFrame(m)}}const vd=sd,Sd=rd,Rd=nd,Cd=ld,Od=(e,a,i)=>{const n=new Map,o={platform:kd,...i},s={...o.platform,_c:n};return id(e,a,{...o,platform:s})},Nd={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Bd=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},xd=[],Md=te(Nd,Bd,xd,!1,null,null);const Tr=Md.exports,Dr=(e,a)=>{const i=[];let n=0,o=e.toLowerCase().indexOf(a.toLowerCase(),n),s=0;for(;o>-1&&s<e.length;)n=o+a.length,i.push({start:o,end:n}),o=e.toLowerCase().indexOf(a.toLowerCase(),n),s++;return i},jd={name:"NcHighlight",props:{text:{type:String,default:""},search:{type:String,default:""},highlight:{type:Array,default:()=>[]}},computed:{ranges(){let e=[];return!this.search&&this.highlight.length===0||(this.highlight.length>0?e=this.highlight:e=Dr(this.text,this.search),e.forEach((a,i)=>{a.end<a.start&&(e[i]={start:a.end,end:a.start})}),e=e.reduce((a,i)=>(i.start<this.text.length&&i.end>0&&a.push({start:i.start<0?0:i.start,end:i.end>this.text.length?this.text.length:i.end}),a),[]),e.sort((a,i)=>a.start-i.start),e=e.reduce((a,i)=>{if(!a.length)a.push(i);else{const n=a.length-1;a[n].end>=i.start?a[n]={start:a[n].start,end:Math.max(a[n].end,i.end)}:a.push(i)}return a},[])),e},chunks(){if(this.ranges.length===0)return[{start:0,end:this.text.length,highlight:!1,text:this.text}];const e=[];let a=0,i=0;for(;a<this.text.length;){const n=this.ranges[i];if(n.start===a){e.push({...n,highlight:!0,text:this.text.slice(n.start,n.end)}),i++,a=n.end,i>=this.ranges.length&&a<this.text.length&&(e.push({start:a,end:this.text.length,highlight:!1,text:this.text.slice(a)}),a=this.text.length);continue}e.push({start:a,end:n.start,highlight:!1,text:this.text.slice(a,n.start)}),a=n.start}return e}},render(e){return this.ranges.length?e("span",{},this.chunks.map(a=>a.highlight?e("strong",{},a.text):a.text)):e("span",{},this.text)}},Yd=null,qd=null;var Ld=te(jd,Yd,qd,!1,null,null);const w0=Ld.exports,Zd={name:"NcEllipsisedOption",components:{NcHighlight:w0},props:{name:{type:String,default:""},search:{type:String,default:""}},computed:{needsTruncate(){return this.name&&this.name.length>=10},split(){return this.name.length-Math.min(Math.floor(this.name.length/2),10)},part1(){return this.needsTruncate?this.name.slice(0,this.split):this.name},part2(){return this.needsTruncate?this.name.slice(this.split):""},highlight1(){return this.search?Dr(this.name,this.search):[]},highlight2(){return this.highlight1.map(e=>({start:e.start-this.split,end:e.end-this.split}))}}};var Id=function(){var e=this,a=e._self._c;return a("span",{staticClass:"name-parts",attrs:{title:e.name}},[a("NcHighlight",{staticClass:"name-parts__first",attrs:{text:e.part1,search:e.search,highlight:e.highlight1}}),e.part2?a("NcHighlight",{staticClass:"name-parts__last",attrs:{text:e.part2,search:e.search,highlight:e.highlight2}}):e._e()],1)},Hd=[],Pd=te(Zd,Id,Hd,!1,null,"0c4478a6");const Gd=Pd.exports,Ud={name:"NcActionRouter",mixins:[Js],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}},props:{to:{type:[String,Object],default:"",required:!0},exact:{type:Boolean,default:!1}}};var zd=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("RouterLink",{staticClass:"action-router focusable",attrs:{to:e.to,"aria-label":e.ariaLabel,exact:e.exact,title:e.title,rel:"nofollow noreferrer noopener",role:e.isInSemanticMenu&&"menuitem"},nativeOn:{click:function(i){return e.onClick.apply(null,arguments)}}},[e._t("icon",function(){return[a("span",{staticClass:"action-router__icon",class:[e.isIconUrl?"action-router__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?"url(".concat(e.icon,")"):null},attrs:{"aria-hidden":"true"}})]}),e.name?a("span",{staticClass:"action-router__longtext-wrapper"},[a("strong",{staticClass:"action-router__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-router__text"},[e._v(e._s(e.text))]),e._e()],2)],1)},Wd=[],Vd=te(Ud,zd,Wd,!1,null,"579c6b4d");const $d=Vd.exports,Qd={name:"NcActionText",mixins:[Js],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}}};var Kd=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("span",{staticClass:"action-text",on:{click:e.onClick}},[e._t("icon",function(){return[e.icon!==""?a("span",{staticClass:"action-text__icon",class:[e.isIconUrl?"action-text__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?"url(".concat(e.icon,")"):null},attrs:{"aria-hidden":"true"}}):e._e()]}),e.name?a("span",{staticClass:"action-text__longtext-wrapper"},[a("strong",{staticClass:"action-text__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-text__text"},[e._v(e._s(e.text))]),e._e()],2)])},Jd=[],Xd=te(Qd,Kd,Jd,!1,null,"824615f4");const ef=Xd.exports,af={name:"NcLoadingIcon",props:{size:{type:Number,default:20},appearance:{type:String,validator(e){return["auto","light","dark"].includes(e)},default:"auto"},name:{type:String,default:""}},computed:{colors(){const e=["#777","#CCC"];return this.appearance==="light"?e:this.appearance==="dark"?e.reverse():["var(--color-loading-light)","var(--color-loading-dark)"]}}};var tf=function(){var e=this,a=e._self._c;return a("span",{staticClass:"material-design-icon loading-icon",attrs:{"aria-label":e.name,role:"img"}},[a("svg",{attrs:{width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:e.colors[0],d:"M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"}}),a("path",{attrs:{fill:e.colors[1],d:"M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"}},[e.name?a("title",[e._v(e._s(e.name))]):e._e()])])])},nf=[],of=te(af,tf,nf,!1,null,"551209a3");const v0=of.exports,sf=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="var(--color-success)" d="M4.8 11.2h6.4V4.8H4.8v6.4zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
</svg>
`,No=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4z" />
	<path fill="var(--color-warning)" d="M6.9.1C3 .6-.1 4-.1 8c0 4.4 3.6 8 8 8 4 0 7.4-3 8-6.9-1.2 1.3-2.9 2.1-4.7 2.1-3.5 0-6.4-2.9-6.4-6.4 0-1.9.8-3.6 2.1-4.7z" />
</svg>
`,rf=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path fill="var(--color-error)" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
	<path fill="#fdffff" d="M5 6.5h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5S4.2 6.5 5 6.5z" />
</svg>
`,Bo=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3.2c2.7 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8S3.2 10.7 3.2 8 5.3 3.2 8 3.2z" />
</svg>
`;oe(Ml);const yr=e=>{switch(e){case"away":return x("away");case"busy":return x("busy");case"dnd":return x("do not disturb");case"online":return x("online");case"invisible":return x("invisible");case"offline":return x("offline");default:return e}};oe(jl);const lf={name:"NcUserStatusIcon",props:{user:{type:String,default:null},status:{type:String,default:null,validator:e=>["online","away","busy","dnd","invisible","offline"].includes(e)},ariaHidden:{type:String,default:null,validator:e=>["true","false"].includes(e)}},data(){return{fetchedUserStatus:null}},computed:{activeStatus(){var e;return(e=this.status)!=null?e:this.fetchedUserStatus},activeSvg(){var e;return(e={online:sf,away:No,busy:No,dnd:rf,invisible:Bo,offline:Bo}[this.activeStatus])!=null?e:null},ariaLabel(){return this.ariaHidden==="true"?null:x("User status: {status}",{status:yr(this.activeStatus)})}},watch:{user:{immediate:!0,async handler(e,a){var i,n,o,s;if(!e||!((n=(i=Xs())==null?void 0:i.user_status)!=null&&n.enabled)){this.fetchedUserStatus=null;return}try{const{data:r}=await ma.get(Pa("/apps/user_status/api/v1/statuses/{user}",{user:e}));this.fetchedUserStatus=(s=(o=r.ocs)==null?void 0:o.data)==null?void 0:s.status}catch{this.fetchedUserStatus=null}}}}};var _f=function(){var e=this,a=e._self._c;return e.activeStatus?a("span",{staticClass:"user-status-icon",class:{"user-status-icon--invisible":["invisible","offline"].includes(e.status)},attrs:{role:"img","aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},domProps:{innerHTML:e._s(e.activeSvg)}}):e._e()},df=[],ff=te(lf,_f,df,!1,null,"0555d8d0");const Er=ff.exports;oe(Yl);class Ae{constructor(a,i,n,o){this.r=a,this.g=i,this.b=n,o&&(this.name=o)}get color(){const a=i=>"00".concat(i.toString(16)).slice(-2);return"#".concat(a(this.r)).concat(a(this.g)).concat(a(this.b))}}function gf(e,a){const i=new Array(3);return i[0]=(a[1].r-a[0].r)/e,i[1]=(a[1].g-a[0].g)/e,i[2]=(a[1].b-a[0].b)/e,i}function H0(e,a,i){const n=[];n.push(a);const o=gf(e,[a,i]);for(let s=1;s<e;s++){const r=Math.floor(a.r+o[0]*s),_=Math.floor(a.g+o[1]*s),l=Math.floor(a.b+o[2]*s);n.push(new Ae(r,_,l))}return n}const hf=[new Ae(182,70,157,x("Purple")),new Ae(191,103,139,x("Rosy brown")),new Ae(201,136,121,x("Feldspar")),new Ae(211,169,103,x("Whiskey")),new Ae(221,203,85,x("Gold")),new Ae(165,184,114,x("Olivine")),new Ae(110,166,143,x("Acapulco")),new Ae(55,148,172,x("Boston Blue")),new Ae(0,130,201,x("Nextcloud blue")),new Ae(45,115,190,x("Mariner")),new Ae(91,100,179,x("Blue Violet")),new Ae(136,85,168,x("Deluge"))];function Ff(e){const a=new Ae(182,70,157,x("Purple")),i=new Ae(221,203,85,x("Gold")),n=new Ae(0,130,201,x("Nextcloud blue")),o=H0(e,a,i),s=H0(e,i,n),r=H0(e,n,a);return o.concat(s).concat(r)}var kr={exports:{}},Ar={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(i,n){return i<<n|i>>>32-n},rotr:function(i,n){return i<<32-n|i>>>n},endian:function(i){if(i.constructor==Number)return a.rotl(i,8)&16711935|a.rotl(i,24)&4278255360;for(var n=0;n<i.length;n++)i[n]=a.endian(i[n]);return i},randomBytes:function(i){for(var n=[];i>0;i--)n.push(Math.floor(Math.random()*256));return n},bytesToWords:function(i){for(var n=[],o=0,s=0;o<i.length;o++,s+=8)n[s>>>5]|=i[o]<<24-s%32;return n},wordsToBytes:function(i){for(var n=[],o=0;o<i.length*32;o+=8)n.push(i[o>>>5]>>>24-o%32&255);return n},bytesToHex:function(i){for(var n=[],o=0;o<i.length;o++)n.push((i[o]>>>4).toString(16)),n.push((i[o]&15).toString(16));return n.join("")},hexToBytes:function(i){for(var n=[],o=0;o<i.length;o+=2)n.push(parseInt(i.substr(o,2),16));return n},bytesToBase64:function(i){for(var n=[],o=0;o<i.length;o+=3)for(var s=i[o]<<16|i[o+1]<<8|i[o+2],r=0;r<4;r++)o*8+r*6<=i.length*8?n.push(e.charAt(s>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(i){i=i.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],o=0,s=0;o<i.length;s=++o%4)s!=0&&n.push((e.indexOf(i.charAt(o-1))&Math.pow(2,-2*s+8)-1)<<s*2|e.indexOf(i.charAt(o))>>>6-s*2);return n}};Ar.exports=a})();var uf=Ar.exports,dn={utf8:{stringToBytes:function(e){return dn.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(dn.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var a=[],i=0;i<e.length;i++)a.push(e.charCodeAt(i)&255);return a},bytesToString:function(e){for(var a=[],i=0;i<e.length;i++)a.push(String.fromCharCode(e[i]));return a.join("")}}},xo=dn,cf=function(e){return e!=null&&(wr(e)||mf(e)||!!e._isBuffer)};function wr(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function mf(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&wr(e.slice(0,0))}(function(){var e=uf,a=xo.utf8,i=cf,n=xo.bin,o=function(s,r){s.constructor==String?r&&r.encoding==="binary"?s=n.stringToBytes(s):s=a.stringToBytes(s):i(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var _=e.bytesToWords(s),l=s.length*8,g=1732584193,d=-271733879,f=-1732584194,h=271733878,u=0;u<_.length;u++)_[u]=(_[u]<<8|_[u]>>>24)&16711935|(_[u]<<24|_[u]>>>8)&4278255360;_[l>>>5]|=128<<l%32,_[(l+64>>>9<<4)+14]=l;for(var m=o._ff,b=o._gg,y=o._hh,k=o._ii,u=0;u<_.length;u+=16){var w=g,S=d,j=f,Z=h;g=m(g,d,f,h,_[u+0],7,-680876936),h=m(h,g,d,f,_[u+1],12,-389564586),f=m(f,h,g,d,_[u+2],17,606105819),d=m(d,f,h,g,_[u+3],22,-1044525330),g=m(g,d,f,h,_[u+4],7,-176418897),h=m(h,g,d,f,_[u+5],12,1200080426),f=m(f,h,g,d,_[u+6],17,-1473231341),d=m(d,f,h,g,_[u+7],22,-45705983),g=m(g,d,f,h,_[u+8],7,1770035416),h=m(h,g,d,f,_[u+9],12,-1958414417),f=m(f,h,g,d,_[u+10],17,-42063),d=m(d,f,h,g,_[u+11],22,-1990404162),g=m(g,d,f,h,_[u+12],7,1804603682),h=m(h,g,d,f,_[u+13],12,-40341101),f=m(f,h,g,d,_[u+14],17,-1502002290),d=m(d,f,h,g,_[u+15],22,1236535329),g=b(g,d,f,h,_[u+1],5,-165796510),h=b(h,g,d,f,_[u+6],9,-1069501632),f=b(f,h,g,d,_[u+11],14,643717713),d=b(d,f,h,g,_[u+0],20,-373897302),g=b(g,d,f,h,_[u+5],5,-701558691),h=b(h,g,d,f,_[u+10],9,38016083),f=b(f,h,g,d,_[u+15],14,-660478335),d=b(d,f,h,g,_[u+4],20,-405537848),g=b(g,d,f,h,_[u+9],5,568446438),h=b(h,g,d,f,_[u+14],9,-1019803690),f=b(f,h,g,d,_[u+3],14,-187363961),d=b(d,f,h,g,_[u+8],20,1163531501),g=b(g,d,f,h,_[u+13],5,-1444681467),h=b(h,g,d,f,_[u+2],9,-51403784),f=b(f,h,g,d,_[u+7],14,1735328473),d=b(d,f,h,g,_[u+12],20,-1926607734),g=y(g,d,f,h,_[u+5],4,-378558),h=y(h,g,d,f,_[u+8],11,-2022574463),f=y(f,h,g,d,_[u+11],16,1839030562),d=y(d,f,h,g,_[u+14],23,-35309556),g=y(g,d,f,h,_[u+1],4,-1530992060),h=y(h,g,d,f,_[u+4],11,1272893353),f=y(f,h,g,d,_[u+7],16,-155497632),d=y(d,f,h,g,_[u+10],23,-1094730640),g=y(g,d,f,h,_[u+13],4,681279174),h=y(h,g,d,f,_[u+0],11,-358537222),f=y(f,h,g,d,_[u+3],16,-722521979),d=y(d,f,h,g,_[u+6],23,76029189),g=y(g,d,f,h,_[u+9],4,-640364487),h=y(h,g,d,f,_[u+12],11,-421815835),f=y(f,h,g,d,_[u+15],16,530742520),d=y(d,f,h,g,_[u+2],23,-995338651),g=k(g,d,f,h,_[u+0],6,-198630844),h=k(h,g,d,f,_[u+7],10,1126891415),f=k(f,h,g,d,_[u+14],15,-1416354905),d=k(d,f,h,g,_[u+5],21,-57434055),g=k(g,d,f,h,_[u+12],6,1700485571),h=k(h,g,d,f,_[u+3],10,-1894986606),f=k(f,h,g,d,_[u+10],15,-1051523),d=k(d,f,h,g,_[u+1],21,-2054922799),g=k(g,d,f,h,_[u+8],6,1873313359),h=k(h,g,d,f,_[u+15],10,-30611744),f=k(f,h,g,d,_[u+6],15,-1560198380),d=k(d,f,h,g,_[u+13],21,1309151649),g=k(g,d,f,h,_[u+4],6,-145523070),h=k(h,g,d,f,_[u+11],10,-1120210379),f=k(f,h,g,d,_[u+2],15,718787259),d=k(d,f,h,g,_[u+9],21,-343485551),g=g+w>>>0,d=d+S>>>0,f=f+j>>>0,h=h+Z>>>0}return e.endian([g,d,f,h])};o._ff=function(s,r,_,l,g,d,f){var h=s+(r&_|~r&l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._gg=function(s,r,_,l,g,d,f){var h=s+(r&l|_&~l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._hh=function(s,r,_,l,g,d,f){var h=s+(r^_^l)+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._ii=function(s,r,_,l,g,d,f){var h=s+(_^(r|~l))+(g>>>0)+f;return(h<<d|h>>>32-d)+r},o._blocksize=16,o._digestsize=16,kr.exports=function(s,r){if(s==null)throw new Error("Illegal argument "+s);var _=e.wordsToBytes(o(s,r));return r&&r.asBytes?_:r&&r.asString?n.bytesToString(_):e.bytesToHex(_)}})();var pf=kr.exports;const bf=Zs(pf),Mo=function(e){let a=e.toLowerCase();a.match(/^([0-9a-f]{4}-?){8}$/)===null&&(a=bf(a)),a=a.replace(/[^0-9a-f]/g,"");const i=6,n=Ff(i);function o(s,r){let _=0;const l=[];for(let g=0;g<s.length;g++)l.push(parseInt(s.charAt(g),16)%16);for(const g in l)_+=l[g];return parseInt(parseInt(_,10)%r,10)}return n[o(a,i*3)]},Gn=(e,a,i)=>{const n=window.getComputedStyle(document.body).getPropertyValue("--background-invert-if-dark")==="invert(100%)";return Is("/avatar"+(i?"/guest":"")+"/{user}/{size}"+(n?"/dark":""),{user:e,size:a})},Tf="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",Df="ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",kt=(e,a)=>{for(const i in a)e[i]=a[i];return e},fn="numeric",gn="ascii",hn="alpha",Ei="asciinumeric",fi="alphanumeric",Fn="domain",vr="emoji",yf="scheme",Ef="slashscheme",jo="whitespace";function kf(e,a){return e in a||(a[e]=[]),a[e]}function Xa(e,a,i){a[fn]&&(a[Ei]=!0,a[fi]=!0),a[gn]&&(a[Ei]=!0,a[hn]=!0),a[Ei]&&(a[fi]=!0),a[hn]&&(a[fi]=!0),a[fi]&&(a[Fn]=!0),a[vr]&&(a[Fn]=!0);for(const n in a){const o=kf(n,i);o.indexOf(e)<0&&o.push(e)}}function Af(e,a){const i={};for(const n in a)a[n].indexOf(e)>=0&&(i[n]=!0);return i}function Je(e){e===void 0&&(e=null),this.j={},this.jr=[],this.jd=null,this.t=e}Je.groups={},Je.prototype={accepts(){return!!this.t},go(e){const a=this,i=a.j[e];if(i)return i;for(let n=0;n<a.jr.length;n++){const o=a.jr[n][0],s=a.jr[n][1];if(s&&o.test(e))return s}return a.jd},has(e,a){return a===void 0&&(a=!1),a?e in this.j:!!this.go(e)},ta(e,a,i,n){for(let o=0;o<e.length;o++)this.tt(e[o],a,i,n)},tr(e,a,i,n){n=n||Je.groups;let o;return a&&a.j?o=a:(o=new Je(a),i&&n&&Xa(a,i,n)),this.jr.push([e,o]),o},ts(e,a,i,n){let o=this;const s=e.length;if(!s)return o;for(let r=0;r<s-1;r++)o=o.tt(e[r]);return o.tt(e[s-1],a,i,n)},tt(e,a,i,n){n=n||Je.groups;const o=this;if(a&&a.j)return o.j[e]=a,a;const s=a;let r,_=o.go(e);if(_?(r=new Je,kt(r.j,_.j),r.jr.push.apply(r.jr,_.jr),r.jd=_.jd,r.t=_.t):r=new Je,s){if(n)if(r.t&&typeof r.t=="string"){const l=kt(Af(r.t,n),i);Xa(s,l,n)}else i&&Xa(s,i,n);r.t=s}return o.j[e]=r,r}};const re=(e,a,i,n,o)=>e.ta(a,i,n,o),ea=(e,a,i,n,o)=>e.tr(a,i,n,o),Yo=(e,a,i,n,o)=>e.ts(a,i,n,o),H=(e,a,i,n,o)=>e.tt(a,i,n,o),ba="WORD",un="UWORD",Xt="LOCALHOST",cn="TLD",mn="UTLD",ki="SCHEME",ct="SLASH_SCHEME",Un="NUM",Sr="WS",zn="NL",qt="OPENBRACE",Lt="CLOSEBRACE",Li="OPENBRACKET",Zi="CLOSEBRACKET",Ii="OPENPAREN",Hi="CLOSEPAREN",Pi="OPENANGLEBRACKET",Gi="CLOSEANGLEBRACKET",Ui="FULLWIDTHLEFTPAREN",zi="FULLWIDTHRIGHTPAREN",Wi="LEFTCORNERBRACKET",Vi="RIGHTCORNERBRACKET",$i="LEFTWHITECORNERBRACKET",Qi="RIGHTWHITECORNERBRACKET",Ki="FULLWIDTHLESSTHAN",Ji="FULLWIDTHGREATERTHAN",Xi="AMPERSAND",e0="APOSTROPHE",a0="ASTERISK",Na="AT",t0="BACKSLASH",i0="BACKTICK",n0="CARET",Ma="COLON",Wn="COMMA",o0="DOLLAR",fa="DOT",s0="EQUALS",Vn="EXCLAMATION",ga="HYPHEN",r0="PERCENT",l0="PIPE",_0="PLUS",d0="POUND",f0="QUERY",$n="QUOTE",Qn="SEMI",ha="SLASH",Zt="TILDE",g0="UNDERSCORE",Rr="EMOJI",h0="SYM";var Cr=Object.freeze({__proto__:null,WORD:ba,UWORD:un,LOCALHOST:Xt,TLD:cn,UTLD:mn,SCHEME:ki,SLASH_SCHEME:ct,NUM:Un,WS:Sr,NL:zn,OPENBRACE:qt,CLOSEBRACE:Lt,OPENBRACKET:Li,CLOSEBRACKET:Zi,OPENPAREN:Ii,CLOSEPAREN:Hi,OPENANGLEBRACKET:Pi,CLOSEANGLEBRACKET:Gi,FULLWIDTHLEFTPAREN:Ui,FULLWIDTHRIGHTPAREN:zi,LEFTCORNERBRACKET:Wi,RIGHTCORNERBRACKET:Vi,LEFTWHITECORNERBRACKET:$i,RIGHTWHITECORNERBRACKET:Qi,FULLWIDTHLESSTHAN:Ki,FULLWIDTHGREATERTHAN:Ji,AMPERSAND:Xi,APOSTROPHE:e0,ASTERISK:a0,AT:Na,BACKSLASH:t0,BACKTICK:i0,CARET:n0,COLON:Ma,COMMA:Wn,DOLLAR:o0,DOT:fa,EQUALS:s0,EXCLAMATION:Vn,HYPHEN:ga,PERCENT:r0,PIPE:l0,PLUS:_0,POUND:d0,QUERY:f0,QUOTE:$n,SEMI:Qn,SLASH:ha,TILDE:Zt,UNDERSCORE:g0,EMOJI:Rr,SYM:h0});const Ft=/[a-z]/,P0=new RegExp("\\p{L}","u"),G0=new RegExp("\\p{Emoji}","u"),U0=/\d/,qo=/\s/,Lo=`
`,wf="️",vf="‍";let gi=null,hi=null;function Sf(e){e===void 0&&(e=[]);const a={};Je.groups=a;const i=new Je;gi==null&&(gi=Zo(Tf)),hi==null&&(hi=Zo(Df)),H(i,"'",e0),H(i,"{",qt),H(i,"}",Lt),H(i,"[",Li),H(i,"]",Zi),H(i,"(",Ii),H(i,")",Hi),H(i,"<",Pi),H(i,">",Gi),H(i,"（",Ui),H(i,"）",zi),H(i,"「",Wi),H(i,"」",Vi),H(i,"『",$i),H(i,"』",Qi),H(i,"＜",Ki),H(i,"＞",Ji),H(i,"&",Xi),H(i,"*",a0),H(i,"@",Na),H(i,"`",i0),H(i,"^",n0),H(i,":",Ma),H(i,",",Wn),H(i,"$",o0),H(i,".",fa),H(i,"=",s0),H(i,"!",Vn),H(i,"-",ga),H(i,"%",r0),H(i,"|",l0),H(i,"+",_0),H(i,"#",d0),H(i,"?",f0),H(i,'"',$n),H(i,"/",ha),H(i,";",Qn),H(i,"~",Zt),H(i,"_",g0),H(i,"\\",t0);const n=ea(i,U0,Un,{[fn]:!0});ea(n,U0,n);const o=ea(i,Ft,ba,{[gn]:!0});ea(o,Ft,o);const s=ea(i,P0,un,{[hn]:!0});ea(s,Ft),ea(s,P0,s);const r=ea(i,qo,Sr,{[jo]:!0});H(i,Lo,zn,{[jo]:!0}),H(r,Lo),ea(r,qo,r);const _=ea(i,G0,Rr,{[vr]:!0});ea(_,G0,_),H(_,wf,_);const l=H(_,vf);ea(l,G0,_);const g=[[Ft,o]],d=[[Ft,null],[P0,s]];for(let f=0;f<gi.length;f++)Ra(i,gi[f],cn,ba,g);for(let f=0;f<hi.length;f++)Ra(i,hi[f],mn,un,d);Xa(cn,{tld:!0,ascii:!0},a),Xa(mn,{utld:!0,alpha:!0},a),Ra(i,"file",ki,ba,g),Ra(i,"mailto",ki,ba,g),Ra(i,"http",ct,ba,g),Ra(i,"https",ct,ba,g),Ra(i,"ftp",ct,ba,g),Ra(i,"ftps",ct,ba,g),Xa(ki,{scheme:!0,ascii:!0},a),Xa(ct,{slashscheme:!0,ascii:!0},a),e=e.sort((f,h)=>f[0]>h[0]?1:-1);for(let f=0;f<e.length;f++){const h=e[f][0],u=e[f][1]?{[yf]:!0}:{[Ef]:!0};h.indexOf("-")>=0?u[Fn]=!0:Ft.test(h)?U0.test(h)?u[Ei]=!0:u[gn]=!0:u[fn]=!0,Yo(i,h,h,u)}return Yo(i,"localhost",Xt,{ascii:!0}),i.jd=new Je(h0),{start:i,tokens:kt({groups:a},Cr)}}function Rf(e,a){const i=Cf(a.replace(/[A-Z]/g,_=>_.toLowerCase())),n=i.length,o=[];let s=0,r=0;for(;r<n;){let _=e,l=null,g=0,d=null,f=-1,h=-1;for(;r<n&&(l=_.go(i[r]));)_=l,_.accepts()?(f=0,h=0,d=_):f>=0&&(f+=i[r].length,h++),g+=i[r].length,s+=i[r].length,r++;s-=f,r-=h,g-=f,o.push({t:d.t,v:a.slice(s-g,s),s:s-g,e:s})}return o}function Cf(e){const a=[],i=e.length;let n=0;for(;n<i;){let o=e.charCodeAt(n),s,r=o<55296||o>56319||n+1===i||(s=e.charCodeAt(n+1))<56320||s>57343?e[n]:e.slice(n,n+2);a.push(r),n+=r.length}return a}function Ra(e,a,i,n,o){let s;const r=a.length;for(let _=0;_<r-1;_++){const l=a[_];e.j[l]?s=e.j[l]:(s=new Je(n),s.jr=o.slice(),e.j[l]=s),e=s}return s=new Je(i),s.jr=o.slice(),e.j[a[r-1]]=s,s}function Zo(e){const a=[],i=[];let n=0,o="0123456789";for(;n<e.length;){let s=0;for(;o.indexOf(e[n+s])>=0;)s++;if(s>0){a.push(i.join(""));for(let r=parseInt(e.substring(n,n+s),10);r>0;r--)i.pop();n+=s}else i.push(e[n]),n++}return a}const ei={defaultProtocol:"http",events:null,format:Io,formatHref:Io,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function Kn(e,a){a===void 0&&(a=null);let i=kt({},ei);e&&(i=kt(i,e instanceof Kn?e.o:e));const n=i.ignoreTags,o=[];for(let s=0;s<n.length;s++)o.push(n[s].toUpperCase());this.o=i,a&&(this.defaultRender=a),this.ignoreTags=o}Kn.prototype={o:ei,ignoreTags:[],defaultRender(e){return e},check(e){return this.get("validate",e.toString(),e)},get(e,a,i){const n=a!=null;let o=this.o[e];return o&&(typeof o=="object"?(o=i.t in o?o[i.t]:ei[e],typeof o=="function"&&n&&(o=o(a,i))):typeof o=="function"&&n&&(o=o(a,i.t,i)),o)},getObj(e,a,i){let n=this.o[e];return typeof n=="function"&&a!=null&&(n=n(a,i.t,i)),n},render(e){const a=e.render(this);return(this.get("render",null,e)||this.defaultRender)(a,e.t,e)}};function Io(e){return e}function Or(e,a){this.t="token",this.v=e,this.tk=a}Or.prototype={isLink:!1,toString(){return this.v},toHref(e){return this.toString()},toFormattedString(e){const a=this.toString(),i=e.get("truncate",a,this),n=e.get("format",a,this);return i&&n.length>i?n.substring(0,i)+"…":n},toFormattedHref(e){return e.get("formatHref",this.toHref(e.get("defaultProtocol")),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(e){return e===void 0&&(e=ei.defaultProtocol),{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(e){return{type:this.t,value:this.toFormattedString(e),isLink:this.isLink,href:this.toFormattedHref(e),start:this.startIndex(),end:this.endIndex()}},validate(e){return e.get("validate",this.toString(),this)},render(e){const a=this,i=this.toHref(e.get("defaultProtocol")),n=e.get("formatHref",i,this),o=e.get("tagName",i,a),s=this.toFormattedString(e),r={},_=e.get("className",i,a),l=e.get("target",i,a),g=e.get("rel",i,a),d=e.getObj("attributes",i,a),f=e.getObj("events",i,a);return r.href=n,_&&(r.class=_),l&&(r.target=l),g&&(r.rel=g),d&&kt(r,d),{tagName:o,attributes:r,content:s,eventListeners:f}}};function S0(e,a){class i extends Or{constructor(o,s){super(o,s),this.t=e}}for(const n in a)i.prototype[n]=a[n];return i.t=e,i}const Ho=S0("email",{isLink:!0,toHref(){return"mailto:"+this.toString()}}),Po=S0("text"),Of=S0("nl"),Fi=S0("url",{isLink:!0,toHref(e){return e===void 0&&(e=ei.defaultProtocol),this.hasProtocol()?this.v:`${e}://${this.v}`},hasProtocol(){const e=this.tk;return e.length>=2&&e[0].t!==Xt&&e[1].t===Ma}}),aa=e=>new Je(e);function Nf(e){let{groups:a}=e;const i=a.domain.concat([Xi,a0,Na,t0,i0,n0,o0,s0,ga,Un,r0,l0,_0,d0,ha,h0,Zt,g0]),n=[e0,Ma,Wn,fa,Vn,f0,$n,Qn,Pi,Gi,qt,Lt,Zi,Li,Ii,Hi,Ui,zi,Wi,Vi,$i,Qi,Ki,Ji],o=[Xi,e0,a0,t0,i0,n0,o0,s0,ga,qt,Lt,r0,l0,_0,d0,f0,ha,h0,Zt,g0],s=aa(),r=H(s,Zt);re(r,o,r),re(r,a.domain,r);const _=aa(),l=aa(),g=aa();re(s,a.domain,_),re(s,a.scheme,l),re(s,a.slashscheme,g),re(_,o,r),re(_,a.domain,_);const d=H(_,Na);H(r,Na,d),H(l,Na,d),H(g,Na,d);const f=H(r,fa);re(f,o,r),re(f,a.domain,r);const h=aa();re(d,a.domain,h),re(h,a.domain,h);const u=H(h,fa);re(u,a.domain,h);const m=aa(Ho);re(u,a.tld,m),re(u,a.utld,m),H(d,Xt,m);const b=H(h,ga);re(b,a.domain,h),re(m,a.domain,h),H(m,fa,u),H(m,ga,b);const y=H(m,Ma);re(y,a.numeric,Ho);const k=H(_,ga),w=H(_,fa);re(k,a.domain,_),re(w,o,r),re(w,a.domain,_);const S=aa(Fi);re(w,a.tld,S),re(w,a.utld,S),re(S,a.domain,_),re(S,o,r),H(S,fa,w),H(S,ga,k),H(S,Na,d);const j=H(S,Ma),Z=aa(Fi);re(j,a.numeric,Z);const O=aa(Fi),G=aa();re(O,i,O),re(O,n,G),re(G,i,O),re(G,n,G),H(S,ha,O),H(Z,ha,O);const W=H(l,Ma),I=H(g,Ma),c=H(I,ha),v=H(c,ha);re(l,a.domain,_),H(l,fa,w),H(l,ga,k),re(g,a.domain,_),H(g,fa,w),H(g,ga,k),re(W,a.domain,O),H(W,ha,O),re(v,a.domain,O),re(v,i,O),H(v,ha,O);const R=[[qt,Lt],[Li,Zi],[Ii,Hi],[Pi,Gi],[Ui,zi],[Wi,Vi],[$i,Qi],[Ki,Ji]];for(let N=0;N<R.length;N++){const[z,q]=R[N],ie=H(O,z);H(G,z,ie),H(ie,q,O);const ee=aa(Fi);re(ie,i,ee);const fe=aa();re(ie,n),re(ee,i,ee),re(ee,n,fe),re(fe,i,ee),re(fe,n,fe),H(ee,q,O),H(fe,q,O)}return H(s,Xt,S),H(s,zn,Of),{start:s,tokens:Cr}}function Bf(e,a,i){let n=i.length,o=0,s=[],r=[];for(;o<n;){let _=e,l=null,g=null,d=0,f=null,h=-1;for(;o<n&&!(l=_.go(i[o].t));)r.push(i[o++]);for(;o<n&&(g=l||_.go(i[o].t));)l=null,_=g,_.accepts()?(h=0,f=_):h>=0&&h++,o++,d++;if(h<0)o-=d,o<n&&(r.push(i[o]),o++);else{r.length>0&&(s.push(z0(Po,a,r)),r=[]),o-=h,d-=h;const u=f.t,m=i.slice(o-d,o);s.push(z0(u,a,m))}}return r.length>0&&s.push(z0(Po,a,r)),s}function z0(e,a,i){const n=i[0].s,o=i[i.length-1].e,s=a.slice(n,o);return new e(s,i)}const He={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function xf(){He.scanner=Sf(He.customSchemes);for(let e=0;e<He.tokenQueue.length;e++)He.tokenQueue[e][1]({scanner:He.scanner});He.parser=Nf(He.scanner.tokens);for(let e=0;e<He.pluginQueue.length;e++)He.pluginQueue[e][1]({scanner:He.scanner,parser:He.parser});He.initialized=!0}function Mf(e){return He.initialized||xf(),Bf(He.parser.start,e,Rf(He.scanner.start,e))}function Nr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jf(e){return e.replace(/"/g,"&quot;")}function Yf(e){const a=[];for(const i in e){let n=e[i]+"";a.push(`${i}="${jf(n)}"`)}return a.join(" ")}function qf(e){let{tagName:a,attributes:i,content:n}=e;return`<${a} ${Yf(i)}>${Nr(n)}</${a}>`}function Lf(e,a){a===void 0&&(a={}),a=new Kn(a,qf);const i=Mf(e),n=[];for(let o=0;o<i.length;o++){const s=i[o];s.t==="nl"&&a.get("nl2br")?n.push(`<br>
`):!s.isLink||!a.check(s)?n.push(Nr(s.toString())):n.push(a.render(s))}return n.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(e){return Lf(this,e)}});var Br={exports:{}};(function(e){(function(a){if(typeof i!="function"){var i=function(m){return m};i.nonNative=!0}const n=i("plaintext"),o=i("html"),s=i("comment"),r=/<(\w*)>/g,_=/<\/?([^\s\/>]+)/;function l(m,b,y){m=m||"",b=b||[],y=y||"";let k=d(b,y);return f(m,k)}function g(m,b){m=m||[],b=b||"";let y=d(m,b);return function(k){return f(k||"",y)}}l.init_streaming_mode=g;function d(m,b){return m=h(m),{allowable_tags:m,tag_replacement:b,state:n,tag_buffer:"",depth:0,in_quote_char:""}}function f(m,b){if(typeof m!="string")throw new TypeError("'html' parameter must be a string");let y=b.allowable_tags,k=b.tag_replacement,w=b.state,S=b.tag_buffer,j=b.depth,Z=b.in_quote_char,O="";for(let G=0,W=m.length;G<W;G++){let I=m[G];if(w===n)switch(I){case"<":w=o,S+=I;break;default:O+=I;break}else if(w===o)switch(I){case"<":if(Z)break;j++;break;case">":if(Z)break;if(j){j--;break}Z="",w=n,S+=">",y.has(u(S))?O+=S:O+=k,S="";break;case'"':case"'":I===Z?Z="":Z=Z||I,S+=I;break;case"-":S==="<!-"&&(w=s),S+=I;break;case" ":case`
`:if(S==="<"){w=n,O+="< ",S="";break}S+=I;break;default:S+=I;break}else if(w===s)switch(I){case">":S.slice(-2)=="--"&&(w=n),S="";break;default:S+=I;break}}return b.state=w,b.tag_buffer=S,b.depth=j,b.in_quote_char=Z,O}function h(m){let b=new Set;if(typeof m=="string"){let y;for(;y=r.exec(m);)b.add(y[1])}else!i.nonNative&&typeof m[i.iterator]=="function"?b=new Set(m):typeof m.forEach=="function"&&m.forEach(b.add,b);return b}function u(m){let b=_.exec(m);return b?b[1].toLowerCase():null}e.exports?e.exports=l:a.striptags=l})(Ba)})(Br);var Zf=Br.exports;const P2=Zs(Zf),Jn=(e,a)=>{const i=(d,f)=>d.startsWith(f)?d.slice(f.length):d,n=(d,...f)=>f.reduce((h,u)=>i(h,u),d);if(!e)return null;const o=/^https?:\/\//.test(a),s=/^[a-z][a-z0-9+.-]*:.+/.test(a);if(!o&&s||o&&!a.startsWith(uo())||!o&&!a.startsWith("/"))return null;const r=o?n(a,uo(),"/index.php"):a,_=n(e.history.base,ql(),"/index.php"),l=n(r,_)||"/",g=e.resolve(l).route;return g.matched.length?g.fullPath:null};ka.util.warn;function xt(e){var a;const i=Yt(e);return(a=i?.$el)!=null?a:i}const xr=Il?window:void 0;function Ai(...e){let a,i,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,n,o]=e,a=xr):[a,i,n,o]=e,!a)return Ti;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const s=[],r=()=>{s.forEach(d=>d()),s.length=0},_=(d,f,h,u)=>(d.addEventListener(f,h,u),()=>d.removeEventListener(f,h,u)),l=Sn(()=>[xt(a),Yt(o)],([d,f])=>{if(r(),!d)return;const h=Ll(f)?{...f}:f;s.push(...i.flatMap(u=>n.map(m=>_(d,u,m,h))))},{immediate:!0,flush:"post"}),g=()=>{l(),r()};return Hs(g),g}let Go=!1;function Uo(e,a,i={}){const{window:n=xr,ignore:o=[],capture:s=!0,detectIframe:r=!1}=i;if(!n)return Ti;nn&&!Go&&(Go=!0,Array.from(n.document.body.children).forEach(d=>d.addEventListener("click",Ti)),n.document.documentElement.addEventListener("click",Ti));let _=!0;const l=d=>o.some(f=>{if(typeof f=="string")return Array.from(n.document.querySelectorAll(f)).some(h=>h===d.target||d.composedPath().includes(h));{const h=xt(f);return h&&(d.target===h||d.composedPath().includes(h))}}),g=[Ai(n,"click",d=>{const f=xt(e);if(!(!f||f===d.target||d.composedPath().includes(f))){if(d.detail===0&&(_=!l(d)),!_){_=!0;return}a(d)}},{passive:!0,capture:s}),Ai(n,"pointerdown",d=>{const f=xt(e);_=!l(d)&&!!(f&&!d.composedPath().includes(f))},{passive:!0}),r&&Ai(n,"blur",d=>{setTimeout(()=>{var f;const h=xt(e);((f=n.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!h?.contains(n.document.activeElement)&&a(d)},0)})].filter(Boolean);return()=>g.forEach(d=>d())}const If={[co.mounted](e,a){const i=!a.modifiers.bubble;if(typeof a.value=="function")e.__onClickOutside_stop=Uo(e,a.value,{capture:i});else{const[n,o]=a.value;e.__onClickOutside_stop=Uo(e,n,Object.assign({capture:i},o))}},[co.unmounted](e){e.__onClickOutside_stop()}};function W0(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function Mr(e){const a=window.getComputedStyle(e);if(a.overflowX==="scroll"||a.overflowY==="scroll"||a.overflowX==="auto"&&e.clientWidth<e.scrollWidth||a.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const i=e.parentNode;return!i||i.tagName==="BODY"?!1:Mr(i)}}function Hf(e){const a=e||window.event,i=a.target;return Mr(i)?!1:a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)}const V0=new WeakMap;function Pf(e,a=!1){const i=at(a);let n=null,o="";Sn(Zl(e),_=>{const l=W0(Yt(_));if(l){const g=l;if(V0.get(g)||V0.set(g,g.style.overflow),g.style.overflow!=="hidden"&&(o=g.style.overflow),g.style.overflow==="hidden")return i.value=!0;if(i.value)return g.style.overflow="hidden"}},{immediate:!0});const s=()=>{const _=W0(Yt(e));!_||i.value||(nn&&(n=Ai(_,"touchmove",l=>{Hf(l)},{passive:!1})),_.style.overflow="hidden",i.value=!0)},r=()=>{const _=W0(Yt(e));!_||!i.value||(nn&&n?.(),_.style.overflow=o,V0.delete(_),i.value=!1)};return Hs(r),Ca({get(){return i.value},set(_){_?s():r()}})}function Gf(){let e=!1;const a=at(!1);return(i,n)=>{if(a.value=n.value,e)return;e=!0;const o=Pf(i,n.value);Sn(a,s=>o.value=s)}}Gf();const jr={data(){return{hasStatus:!1,userStatus:{status:null,message:null,icon:null}}},methods:{async fetchUserStatus(e){var a,i;if(!e)return;const n=Xs();if(!(!Object.prototype.hasOwnProperty.call(n,"user_status")||!n.user_status.enabled)&&on())try{const{data:o}=await ma.get(Pa("apps/user_status/api/v1/statuses/{userId}",{userId:e})),{status:s,message:r,icon:_}=o.ocs.data;this.userStatus.status=s,this.userStatus.message=r||"",this.userStatus.icon=_||"",this.hasStatus=!0}catch(o){if(o.response.status===404&&((i=(a=o.response.data.ocs)==null?void 0:a.data)==null?void 0:i.length)===0)return;console.error(o)}}}};oe(Hl);const Yr=Rn("nextcloud").persist().build();function Uf(e){const a=Yr.getItem("user-has-avatar."+e);return typeof a=="string"?!!a:null}function zo(e,a){e&&Yr.setItem("user-has-avatar."+e,a)}const zf={name:"NcAvatar",directives:{ClickOutside:If},components:{DotsHorizontal:Cn,NcActions:Ps,NcButton:wa,NcIconSvgWrapper:y0,NcLoadingIcon:v0,NcUserStatusIcon:Er},mixins:[jr],props:{url:{type:String,default:void 0},iconClass:{type:String,default:void 0},user:{type:String,default:void 0},showUserStatus:{type:Boolean,default:!0},showUserStatusCompact:{type:Boolean,default:!0},preloadedUserStatus:{type:Object,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},menuContainer:{type:[String,Object,Element,Boolean],default:"body"}},data(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuLoading:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{avatarAriaLabel(){var e,a;if(this.hasMenu)return this.canDisplayUserStatus||this.showUserStatusIconOnAvatar?x("Avatar of {displayName}, {status}",{displayName:(e=this.displayName)!=null?e:this.user,status:yr(this.userStatus.status)}):x("Avatar of {displayName}",{displayName:(a=this.displayName)!=null?a:this.user})},canDisplayUserStatus(){return this.showUserStatus&&this.hasStatus&&["online","away","busy","dnd"].includes(this.userStatus.status)},showUserStatusIconOnAvatar(){return this.showUserStatus&&this.showUserStatusCompact&&this.hasStatus&&this.userStatus.status!=="dnd"&&this.userStatus.icon},userIdentifier(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined(){return typeof this.user<"u"},isDisplayNameDefined(){return typeof this.displayName<"u"},isUrlDefined(){return typeof this.url<"u"},hasMenu(){var e;return this.disableMenu?!1:this.isMenuLoaded?this.menu.length>0:!(this.user===((e=on())==null?void 0:e.uid)||this.userDoesNotExist||this.url)},showInitials(){return this.allowPlaceholder&&this.userDoesNotExist&&!(this.iconClass||this.$slots.icon)},avatarStyle(){return{"--size":this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(this.size*.45)+"px"}},initialsWrapperStyle(){const{r:e,g:a,b:i}=Mo(this.userIdentifier);return{backgroundColor:"rgba(".concat(e,", ").concat(a,", ").concat(i,", 0.1)")}},initialsStyle(){const{r:e,g:a,b:i}=Mo(this.userIdentifier);return{color:"rgb(".concat(e,", ").concat(a,", ").concat(i,")")}},tooltip(){return this.disableTooltip?!1:this.tooltipMessage?this.tooltipMessage:this.displayName},initials(){let e="?";if(this.showInitials){const a=this.userIdentifier.trim();if(a==="")return e;const i=a.match(/[\p{L}\p{N}\s]/gu);if(i==null)return e;const n=i.join(""),o=n.lastIndexOf(" ");e=String.fromCodePoint(n.codePointAt(0)),o!==-1&&(e=e.concat(String.fromCodePoint(n.codePointAt(o+1))))}return e.toLocaleUpperCase()},menu(){const e=this.contactsMenuActions.map(i=>{const n=Jn(this.$router,i.hyperlink);return{ncActionComponent:n?$d:U1,ncActionComponentProps:n?{to:n,icon:i.icon}:{href:i.hyperlink,icon:i.icon},text:i.title}});function a(i){const n=document.createTextNode(i),o=document.createElement("p");return o.appendChild(n),o.innerHTML}if(this.showUserStatus&&(this.userStatus.icon||this.userStatus.message)){const i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<text x="50%" y="50%" text-anchor="middle" style="dominant-baseline: central; font-size: 85%">`.concat(a(this.userStatus.icon),`</text>
				</svg>`);return[{ncActionComponent:ef,ncActionComponentProps:{},iconSvg:this.userStatus.icon?i:void 0,text:"".concat(this.userStatus.message)}].concat(e)}return e}},watch:{url(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted(){this.loadAvatarUrl(),j0("settings:avatar:updated",this.loadAvatarUrl),j0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&(this.preloadedUserStatus?(this.userStatus.status=this.preloadedUserStatus.status||"",this.userStatus.message=this.preloadedUserStatus.message||"",this.userStatus.icon=this.preloadedUserStatus.icon||"",this.hasStatus=this.preloadedUserStatus.status!==null):this.fetchUserStatus(this.user),j0("user_status:status.updated",this.handleUserStatusUpdated))},beforeDestroy(){Y0("settings:avatar:updated",this.loadAvatarUrl),Y0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&Y0("user_status:status.updated",this.handleUserStatusUpdated)},methods:{t:x,handleUserStatusUpdated(e){this.user===e.userId&&(this.userStatus={status:e.status,icon:e.icon,message:e.message})},async toggleMenu(e){e.type==="keydown"&&e.key!=="Enter"||(this.contactsMenuOpenState||await this.fetchContactsMenu(),this.contactsMenuOpenState=!this.contactsMenuOpenState)},closeMenu(){this.contactsMenuOpenState=!1},async fetchContactsMenu(){this.contactsMenuLoading=!0;try{const e=encodeURIComponent(this.user),{data:a}=await ma.post(Is("contactsmenu/findOne"),"shareType=0&shareWith=".concat(e));this.contactsMenuActions=a.topAction?[a.topAction].concat(a.actions):a.actions}catch{this.contactsMenuOpenState=!1}this.contactsMenuLoading=!1,this.isMenuLoaded=!0},loadAvatarUrl(){if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser)){this.isAvatarLoaded=!0,this.userDoesNotExist=!0;return}if(this.isUrlDefined){this.updateImageIfValid(this.url);return}if(this.size<=64){const e=this.avatarUrlGenerator(this.user,64),a=[e+" 1x",this.avatarUrlGenerator(this.user,512)+" 8x"].join(", ");this.updateImageIfValid(e,a)}else{const e=this.avatarUrlGenerator(this.user,512);this.updateImageIfValid(e)}},avatarUrlGenerator(e,a){var i;let n=Gn(e,a,this.isGuest);return e===((i=on())==null?void 0:i.uid)&&typeof oc_userconfig<"u"&&(n+="?v="+oc_userconfig.avatar.version),n},updateImageIfValid(e,a=null){const i=Uf(this.user);if(this.isUserDefined&&typeof i=="boolean"){this.isAvatarLoaded=!0,this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),i===!1&&(this.userDoesNotExist=!0);return}const n=new Image;n.onload=()=>{this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),this.isAvatarLoaded=!0,zo(this.user,!0)},n.onerror=()=>{console.debug("Invalid avatar url",e),this.avatarUrlLoaded=null,this.avatarSrcSetLoaded=null,this.userDoesNotExist=!0,this.isAvatarLoaded=!1,zo(this.user,!1)},a&&(n.srcset=a),n.src=e}}};var Wf=function(){var e=this,a=e._self._c;return a("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeMenu,expression:"closeMenu"}],ref:"main",staticClass:"avatardiv popovermenu-wrapper",class:{"avatardiv--unknown":e.userDoesNotExist,"avatardiv--with-menu":e.hasMenu,"avatardiv--with-menu-loading":e.contactsMenuLoading},style:e.avatarStyle},[e._t("icon",function(){return[e.iconClass?a("span",{staticClass:"avatar-class-icon",class:e.iconClass}):e.isAvatarLoaded&&!e.userDoesNotExist?a("img",{attrs:{src:e.avatarUrlLoaded,srcset:e.avatarSrcSetLoaded,alt:""}}):e._e()]}),e.hasMenu&&e.menu.length===0?a("NcButton",{staticClass:"action-item action-item__menutoggle",attrs:{type:"tertiary-no-background","aria-label":e.avatarAriaLabel,title:e.tooltip},on:{click:e.toggleMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[e.contactsMenuLoading?a("NcLoadingIcon"):a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,2617833509)}):e.hasMenu?a("NcActions",{attrs:{"force-menu":"","manual-open":"",type:"tertiary-no-background",container:e.menuContainer,open:e.contactsMenuOpenState,"aria-label":e.avatarAriaLabel,title:e.tooltip},on:{"update:open":function(i){e.contactsMenuOpenState=i},click:e.toggleMenu},scopedSlots:e._u([e.contactsMenuLoading?{key:"icon",fn:function(){return[a("NcLoadingIcon")]},proxy:!0}:null],null,!0)},e._l(e.menu,function(i,n){return a(i.ncActionComponent,e._b({key:n,tag:"component",scopedSlots:e._u([i.iconSvg?{key:"icon",fn:function(){return[a("NcIconSvgWrapper",{attrs:{svg:i.iconSvg}})]},proxy:!0}:null],null,!0)},"component",i.ncActionComponentProps,!1),[e._v(" "+e._s(i.text)+" ")])}),1):e._e(),e.showUserStatusIconOnAvatar?a("span",{staticClass:"avatardiv__user-status avatardiv__user-status--icon"},[e._v(" "+e._s(e.userStatus.icon)+" ")]):e.canDisplayUserStatus?a("NcUserStatusIcon",{staticClass:"avatardiv__user-status",attrs:{status:e.userStatus.status,"aria-hidden":String(e.hasMenu)}}):e._e(),e.showInitials?a("span",{staticClass:"avatardiv__initials-wrapper",style:e.initialsWrapperStyle},[a("span",{staticClass:"avatardiv__initials",style:e.initialsStyle},[e._v(" "+e._s(e.initials)+" ")])]):e._e()],2)},Vf=[],$f=te(zf,Wf,Vf,!1,null,"9ce7ef1d");const qr=$f.exports,Qf=8,Wo=32,Kf={name:"NcListItemIcon",components:{NcAvatar:qr,NcHighlight:w0,NcIconSvgWrapper:y0},mixins:[jr],props:{name:{type:String,required:!0},subname:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:String,default:""},iconName:{type:String,default:""},search:{type:String,default:""},avatarSize:{type:Number,default:Wo},noMargin:{type:Boolean,default:!1},displayName:{type:String,default:null},isNoUser:{type:Boolean,default:!1},id:{type:String,default:null}},setup(){return{margin:Qf,defaultSize:Wo}},computed:{hasIcon(){return this.icon!==""},hasIconSvg(){return this.iconSvg!==""},isValidSubname(){var e,a;return((a=(e=this.subname)==null?void 0:e.trim)==null?void 0:a.call(e))!==""},isSizeBigEnough(){return this.avatarSize>=26},cssVars(){const e=this.noMargin?0:this.margin;return{"--height":this.avatarSize+2*e+"px","--margin":this.margin+"px"}},searchParts(){const e=/^([^<]*)<([^>]+)>?$/,a=this.search.match(e);return this.isNoUser||!a?[this.search,this.search]:[a[1].trim(),a[2]]}},beforeMount(){!this.isNoUser&&!this.subname&&this.fetchUserStatus(this.user)}};var Jf=function(){var e=this,a=e._self._c;return a("span",e._g({staticClass:"option",class:{"option--compact":e.avatarSize<e.defaultSize},style:e.cssVars,attrs:{id:e.id}},e.$listeners),[a("NcAvatar",e._b({staticClass:"option__avatar",attrs:{"disable-menu":!0,"disable-tooltip":!0,"display-name":e.displayName||e.name,"is-no-user":e.isNoUser,size:e.avatarSize}},"NcAvatar",e.$attrs,!1)),a("div",{staticClass:"option__details"},[a("NcHighlight",{staticClass:"option__lineone",attrs:{text:e.name,search:e.searchParts[0]}}),e.isValidSubname&&e.isSizeBigEnough?a("NcHighlight",{staticClass:"option__linetwo",attrs:{text:e.subname,search:e.searchParts[1]}}):e.hasStatus?a("span",[a("span",[e._v(e._s(e.userStatus.icon))]),a("span",[e._v(e._s(e.userStatus.message))])]):e._e()],1),e._t("default",function(){return[e.hasIconSvg?a("NcIconSvgWrapper",{staticClass:"option__icon",attrs:{svg:e.iconSvg,name:e.iconName}}):e.hasIcon?a("span",{staticClass:"icon option__icon",class:e.icon,attrs:{"aria-label":e.iconName}}):e._e()]})],2)},Xf=[],eg=te(Kf,Jf,Xf,!1,null,"a0f4d73a");const ag=eg.exports;oe(Pl);const tg={name:"NcSelect",components:{ChevronDown:Tr,NcEllipsisedOption:Gd,NcListItemIcon:ag,NcLoadingIcon:v0,VueSelect:Qa.VueSelect},props:{...Qa.VueSelect.props,...Qa.VueSelect.mixins.reduce((e,a)=>({...e,...a.props}),{}),ariaLabelClearSelected:{type:String,default:x("Clear selected")},ariaLabelCombobox:{type:String,default:null},ariaLabelListbox:{type:String,default:x("Options")},ariaLabelDeselectOption:{type:Function,default:e=>x("Deselect {option}",{option:e})},appendToBody:{type:Boolean,default:!0},calculatePosition:{type:Function,default:null},closeOnSelect:{type:Boolean,default:!0},components:{type:Object,default:()=>({Deselect:{render:e=>e(On,{props:{size:20,fillColor:"var(--vs-controls-color)"},style:{cursor:"pointer"}})}})},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},dropdownShouldOpen:{type:Function,default:({noDrop:e,open:a})=>e?!1:a},filterBy:{type:Function,default:null},inputClass:{type:[String,Object],default:null},inputId:{type:String,default:()=>"select-input-".concat(st())},inputLabel:{type:String,default:null},labelOutside:{type:Boolean,default:!1},keyboardFocusBorder:{type:Boolean,default:!0},label:{type:String,default:null},loading:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},mapKeydown:{type:Function,default(e,a){return{...e,27:i=>{a.open&&i.stopPropagation(),e[27](i)}}}},uid:{type:String,default:()=>st()},placement:{type:String,default:"bottom"},resetFocusOnOptionsChange:{type:Boolean,default:!0},userSelect:{type:Boolean,default:!1},value:{type:[String,Number,Object,Array],default:null},required:{type:Boolean,default:!1}," ":{}},emits:[" "],setup(){const e=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-clickable-area")),a=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-grid-baseline"));return{avatarSize:e-2*a}},data(){return{search:""}},computed:{inputRequired(){return this.required?this.value===null||Array.isArray(this.value)&&this.value.length===0:null},localCalculatePosition(){return this.calculatePosition!==null?this.calculatePosition:(e,a,{width:i})=>{e.style.width=i;const n={name:"addClass",fn(r){return e.classList.add("vs__dropdown-menu--floating"),{}}},o={name:"togglePlacementClass",fn({placement:r}){return a.$el.classList.toggle("select--drop-up",r==="top"),e.classList.toggle("vs__dropdown-menu--floating-placement-top",r==="top"),{}}},s=()=>{Od(a.$refs.toggle,e,{placement:this.placement,middleware:[vd(-1),n,o,Rd(),Sd({limiter:Cd()})]}).then(({x:r,y:_})=>{Object.assign(e.style,{left:"".concat(r,"px"),top:"".concat(_,"px"),width:"".concat(a.$refs.toggle.getBoundingClientRect().width,"px")})})};return wd(a.$refs.toggle,e,s)}},localFilterBy(){const e=/[^<]*<([^>]+)/;return this.filterBy!==null?this.filterBy:this.userSelect?(a,i,n)=>{var o,s,r;const _=n.match(e);return _&&((r=(s=(o=a.subname)==null?void 0:o.toLocaleLowerCase)==null?void 0:s.call(o))==null?void 0:r.indexOf(_[1].toLocaleLowerCase()))>-1||"".concat(i," ").concat(a.subname).toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}:Qa.VueSelect.props.filterBy.default},localLabel(){return this.label!==null?this.label:this.userSelect?"displayName":Qa.VueSelect.props.label.default},propsToForward(){const e=[...Object.keys(Qa.VueSelect.props),...Qa.VueSelect.mixins.flatMap(a=>{var i;return Object.keys((i=a.props)!=null?i:{})})];return{...Object.fromEntries(Object.entries(this.$props).filter(([a,i])=>e.includes(a))),calculatePosition:this.localCalculatePosition,filterBy:this.localFilterBy,label:this.localLabel}}},mounted(){!this.labelOutside&&!this.inputLabel&&!this.ariaLabelCombobox&&ka.util.warn("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`."),this.inputLabel&&this.ariaLabelCombobox&&ka.util.warn("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.")},methods:{t:x}};var ig=function(){var e=this,a=e._self._c;return a("VueSelect",e._g(e._b({staticClass:"select",class:{"select--no-wrap":e.noWrap,"user-select":e.userSelect},on:{search:i=>e.search=i},scopedSlots:e._u([!e.labelOutside&&e.inputLabel?{key:"header",fn:function(){return[a("label",{staticClass:"select__label",attrs:{for:e.inputId}},[e._v(" "+e._s(e.inputLabel)+" ")])]},proxy:!0}:null,{key:"search",fn:function({attributes:i,events:n}){return[a("input",e._g(e._b({class:["vs__search",e.inputClass],attrs:{required:e.inputRequired}},"input",i,!1),n))]}},{key:"open-indicator",fn:function({attributes:i}){return[a("ChevronDown",e._b({style:{cursor:e.disabled?null:"pointer"},attrs:{"fill-color":"var(--vs-controls-color)",size:26}},"ChevronDown",i,!1))]}},{key:"option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":32,name:i[e.localLabel],search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"selected-option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":e.avatarSize,name:i[e.localLabel],"no-margin":"",search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"spinner",fn:function(i){return[i.loading?a("NcLoadingIcon"):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.t("No results"))+" ")]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"VueSelect",e.propsToForward,!1),e.$listeners))},ng=[],og=te(tg,ig,ng,!1,null,null);const R0=og.exports;oe(Gl);function sg(e=[],a=[]){const i={},n=[];for(const o of e){const s=o.split("/");let[r,_]=[s.shift(),s.join("/")];_||(_=r,r=x("Global")),i[r]=i[r]||{continent:r,regions:[]},i[r].regions.push({label:Lr(_),cities:[],timezoneId:o})}for(const o of a){const{continent:s,label:r,timezoneId:_}=o;i[s]=i[s]||{continent:s,regions:[]},i[s].regions.push({label:r,cities:[],timezoneId:_})}for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&(i[o].regions.sort((s,r)=>s.label<r.label?-1:1),n.push(i[o]));return n.sort((o,s)=>o.continent<s.continent?-1:1),n}function Lr(e){return e.split("_").join(" ").replace("St ","St. ").split("/").join(" - ")}const Vo=V_();let $o=!1;function rg(){return $o||(Vo.registerDefaultTimezones(),$o=!0),Vo}oe(Ul);const lg={name:"NcTimezonePicker",components:{NcSelect:R0},props:{additionalTimezones:{type:Array,default:()=>[]},value:{type:String,default:"floating"},uid:{type:[String,Number],default:()=>"tz-".concat(st(5))}},emits:["input"],computed:{placeholder(){return x("Type to search time zone")},selectedTimezone(){for(const e of this.additionalTimezones)if(e.timezoneId===this.value)return e;return{label:Lr(this.value),timezoneId:this.value}},options(){const e=rg(),a=sg(e.listAllTimezones(),this.additionalTimezones);let i=[];return Object.values(a).forEach(n=>{i=i.concat(n.regions)}),i}},methods:{t:x,change(e){e&&this.$emit("input",e.timezoneId)},isSelectable(e){return!e.timezoneId.startsWith("tz-group__")},filterBy(e,a,i){const n=i.trim().split(" ");return e.timezoneId.startsWith("tz-group__")?e.regions.some(o=>this.matchTimezoneId(o.timezoneId,n)):this.matchTimezoneId(e.timezoneId,n)},matchTimezoneId(e,a){return a.every(i=>e.toLowerCase().includes(i.toLowerCase()))}}};var _g=function(){var e=this,a=e._self._c;return a("NcSelect",{attrs:{"aria-label-combobox":e.t("Search for time zone"),clearable:!1,"filter-by":e.filterBy,multiple:!1,options:e.options,placeholder:e.placeholder,selectable:e.isSelectable,uid:e.uid,value:e.selectedTimezone,label:"label"},on:{"option:selected":e.change}})},dg=[],fg=te(lg,_g,dg,!1,null,null);const gg=fg.exports;function Zr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function C0(e){return Zr(e)?new Date(e.getTime()):e==null?new Date(NaN):new Date(e)}function hg(e){return Zr(e)&&!isNaN(e.getTime())}function Ir(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var i=C0(e),n=i.getDay(),o=(n+7-a)%7;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Hr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o;if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7");for(var r=C0(e),_=r.getFullYear(),l=new Date(0),g=_+1;g>=_-1&&(l.setFullYear(g,0,s),l.setHours(0,0,0,0),l=Ir(l,n),!(r.getTime()>=l.getTime()));g--);return l}function Xn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o,r=C0(e),_=Ir(r,n),l=Hr(r,{firstDayOfWeek:n,firstWeekContainsDate:s}),g=_.getTime()-l.getTime();return Math.round(g/(7*24*3600*1e3))+1}var Pr={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},Fg=/\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;function Ke(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i="".concat(Math.abs(e)),n=e<0?"-":"";i.length<a;)i="0".concat(i);return n+i}function Qo(e){return Math.round(e.getTimezoneOffset()/15)*15}function Ko(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=e>0?"-":"+",n=Math.abs(e),o=Math.floor(n/60),s=n%60;return i+Ke(o,2)+a+Ke(s,2)}var Jo=function(e,a,i){var n=e<12?"AM":"PM";return i?n.toLocaleLowerCase():n},It={Y:function(e){var a=e.getFullYear();return a<=9999?"".concat(a):"+".concat(a)},YY:function(e){return Ke(e.getFullYear(),4).substr(2)},YYYY:function(e){return Ke(e.getFullYear(),4)},M:function(e){return e.getMonth()+1},MM:function(e){return Ke(e.getMonth()+1,2)},MMM:function(e,a){return a.monthsShort[e.getMonth()]},MMMM:function(e,a){return a.months[e.getMonth()]},D:function(e){return e.getDate()},DD:function(e){return Ke(e.getDate(),2)},H:function(e){return e.getHours()},HH:function(e){return Ke(e.getHours(),2)},h:function(e){var a=e.getHours();return a===0?12:a>12?a%12:a},hh:function(){var e=It.h.apply(It,arguments);return Ke(e,2)},m:function(e){return e.getMinutes()},mm:function(e){return Ke(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return Ke(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return Ke(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return Ke(e.getMilliseconds(),3)},d:function(e){return e.getDay()},dd:function(e,a){return a.weekdaysMin[e.getDay()]},ddd:function(e,a){return a.weekdaysShort[e.getDay()]},dddd:function(e,a){return a.weekdays[e.getDay()]},A:function(e,a){var i=a.meridiem||Jo;return i(e.getHours(),e.getMinutes(),!1)},a:function(e,a){var i=a.meridiem||Jo;return i(e.getHours(),e.getMinutes(),!0)},Z:function(e){return Ko(Qo(e),":")},ZZ:function(e){return Ko(Qo(e))},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()},w:function(e,a){return Xn(e,{firstDayOfWeek:a.firstDayOfWeek,firstWeekContainsDate:a.firstWeekContainsDate})},ww:function(e,a){return Ke(It.w(e,a),2)}};function O0(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a?String(a):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=C0(e);if(!hg(o))return"Invalid Date";var s=i.locale||Pr;return n.replace(Fg,function(r,_){return _||(typeof It[r]=="function"?"".concat(It[r](o,s)):r)})}function Xo(e){return mg(e)||cg(e)||ug()}function ug(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function cg(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function mg(e){if(Array.isArray(e)){for(var a=0,i=new Array(e.length);a<e.length;a++)i[a]=e[a];return i}}function es(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function pg(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?es(i,!0).forEach(function(n){ja(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):es(i).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function bg(e,a){return yg(e)||Dg(e,a)||Tg()}function Tg(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Dg(e,a){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]"){var i=[],n=!0,o=!1,s=void 0;try{for(var r=e[Symbol.iterator](),_;!(n=(_=r.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(l){o=!0,s=l}finally{try{!n&&r.return!=null&&r.return()}finally{if(o)throw s}}return i}}function yg(e){if(Array.isArray(e))return e}function ja(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}var Eg=/(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g,Gr=/\d/,Oa=/\d\d/,kg=/\d{3}/,Ag=/\d{4}/,mt=/\d\d?/,wg=/[+-]\d\d:?\d\d/,Ur=/[+-]?\d+/,vg=/[+-]?\d+(\.\d{1,3})?/,$0="year",ui="month",as="day",ts="hour",is="minute",ns="second",Q0="millisecond",zr={},Fe=function(e,a,i){var n=Array.isArray(e)?e:[e],o;typeof i=="string"?o=function(s){var r=parseInt(s,10);return ja({},i,r)}:o=i,n.forEach(function(s){zr[s]=[a,o]})},Sg=function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},Ht=function(e){return function(a){var i=a[e];if(!Array.isArray(i))throw new Error("Locale[".concat(e,"] need an array"));return new RegExp(i.map(Sg).join("|"))}},Pt=function(e,a){return function(i,n){var o=n[e];if(!Array.isArray(o))throw new Error("Locale[".concat(e,"] need an array"));var s=o.indexOf(i);if(s<0)throw new Error("Invalid Word");return ja({},a,s)}};Fe("Y",Ur,$0),Fe("YY",Oa,function(e){var a=new Date().getFullYear(),i=Math.floor(a/100),n=parseInt(e,10);return n=(n>68?i-1:i)*100+n,ja({},$0,n)}),Fe("YYYY",Ag,$0),Fe("M",mt,function(e){return ja({},ui,parseInt(e,10)-1)}),Fe("MM",Oa,function(e){return ja({},ui,parseInt(e,10)-1)}),Fe("MMM",Ht("monthsShort"),Pt("monthsShort",ui)),Fe("MMMM",Ht("months"),Pt("months",ui)),Fe("D",mt,as),Fe("DD",Oa,as),Fe(["H","h"],mt,ts),Fe(["HH","hh"],Oa,ts),Fe("m",mt,is),Fe("mm",Oa,is),Fe("s",mt,ns),Fe("ss",Oa,ns),Fe("S",Gr,function(e){return ja({},Q0,parseInt(e,10)*100)}),Fe("SS",Oa,function(e){return ja({},Q0,parseInt(e,10)*10)}),Fe("SSS",kg,Q0);function Rg(e){return e.meridiemParse||/[ap]\.?m?\.?/i}function Cg(e){return"".concat(e).toLowerCase().charAt(0)==="p"}Fe(["A","a"],Rg,function(e,a){var i=typeof a.isPM=="function"?a.isPM(e):Cg(e);return{isPM:i}});function Og(e){var a=e.match(/([+-]|\d\d)/g)||["-","0","0"],i=bg(a,3),n=i[0],o=i[1],s=i[2],r=parseInt(o,10)*60+parseInt(s,10);return r===0?0:n==="+"?-r:+r}Fe(["Z","ZZ"],wg,function(e){return{offset:Og(e)}}),Fe("x",Ur,function(e){return{date:new Date(parseInt(e,10))}}),Fe("X",vg,function(e){return{date:new Date(parseFloat(e)*1e3)}}),Fe("d",Gr,"weekday"),Fe("dd",Ht("weekdaysMin"),Pt("weekdaysMin","weekday")),Fe("ddd",Ht("weekdaysShort"),Pt("weekdaysShort","weekday")),Fe("dddd",Ht("weekdays"),Pt("weekdays","weekday")),Fe("w",mt,"week"),Fe("ww",Oa,"week");function Ng(e,a){if(e!==void 0&&a!==void 0){if(a){if(e<12)return e+12}else if(e===12)return 0}return e}function Bg(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Date,i=[0,0,1,0,0,0,0],n=[a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()],o=!0,s=0;s<7;s++)e[s]===void 0?i[s]=o?n[s]:i[s]:(i[s]=e[s],o=!1);return i}function xg(e,a,i,n,o,s,r){var _;return e<100&&e>=0?(_=new Date(e+400,a,i,n,o,s,r),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,a,i,n,o,s,r),_}function Mg(){for(var e,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];var o=i[0];return o<100&&o>=0?(i[0]+=400,e=new Date(Date.UTC.apply(Date,i)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(o)):e=new Date(Date.UTC.apply(Date,i)),e}function jg(e,a,i){var n=a.match(Eg);if(!n)throw new Error;for(var o=n.length,s={},r=0;r<o;r+=1){var _=n[r],l=zr[_];if(l){var g=typeof l[0]=="function"?l[0](i):l[0],d=l[1],f=(g.exec(e)||[])[0],h=d(f,i);s=pg({},s,{},h),e=e.replace(f,"")}else{var u=_.replace(/^\[|\]$/g,"");if(e.indexOf(u)===0)e=e.substr(u.length);else throw new Error("not match")}}return s}function Yg(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};try{var n=i.locale,o=n===void 0?Pr:n,s=i.backupDate,r=s===void 0?new Date:s,_=jg(e,a,o),l=_.year,g=_.month,d=_.day,f=_.hour,h=_.minute,u=_.second,m=_.millisecond,b=_.isPM,y=_.date,k=_.offset,w=_.weekday,S=_.week;if(y)return y;var j=[l,g,d,f,h,u,m];if(j[3]=Ng(j[3],b),S!==void 0&&g===void 0&&d===void 0){var Z=Hr(l===void 0?r:new Date(l,3),{firstDayOfWeek:o.firstDayOfWeek,firstWeekContainsDate:o.firstWeekContainsDate});return new Date(Z.getTime()+(S-1)*7*24*3600*1e3)}var O,G=Bg(j,r);return k!==void 0?(G[6]+=k*60*1e3,O=Mg.apply(void 0,Xo(G))):O=xg.apply(void 0,Xo(G)),w!==void 0&&O.getDay()!==w?new Date(NaN):O}catch{return new Date(NaN)}}function wi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wi=function(a){return typeof a}:wi=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},wi(e)}function et(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function pn(){return pn=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},pn.apply(this,arguments)}function os(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function pe(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?os(Object(i),!0).forEach(function(n){et(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):os(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function qg(e,a){if(e==null)return{};var i={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(i[o]=e[o]);return i}function Lg(e,a){if(e==null)return{};var i=qg(e,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gt(e,a){return Zg(e)||Ig(e,a)||Hg(e,a)||Pg()}function Zg(e){if(Array.isArray(e))return e}function Ig(e,a){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],n=!0,o=!1,s=void 0;try{for(var r=e[Symbol.iterator](),_;!(n=(_=r.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(l){o=!0,s=l}finally{try{!n&&r.return!=null&&r.return()}finally{if(o)throw s}}return i}}function Hg(e,a){if(e){if(typeof e=="string")return ss(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ss(e,a)}}function ss(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,n=new Array(a);i<a;i++)n[i]=e[i];return n}function Pg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(){return bn=Object.assign||function(e){for(var a,i=1;i<arguments.length;i++)for(var n in a=arguments[i],a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},bn.apply(this,arguments)}var Gg=["attrs","props","domProps"],Ug=["class","style","directives"],zg=["on","nativeOn"],Wg=function(e){return e.reduce(function(a,i){for(var n in i)if(!a[n])a[n]=i[n];else if(Gg.indexOf(n)!==-1)a[n]=bn({},a[n],i[n]);else if(Ug.indexOf(n)!==-1){var o=a[n]instanceof Array?a[n]:[a[n]],s=i[n]instanceof Array?i[n]:[i[n]];a[n]=o.concat(s)}else if(zg.indexOf(n)!==-1)for(var r in i[n])if(a[n][r]){var _=a[n][r]instanceof Array?a[n][r]:[a[n][r]],l=i[n][r]instanceof Array?i[n][r]:[i[n][r]];a[n][r]=_.concat(l)}else a[n][r]=i[n][r];else if(n=="hook")for(var g in i[n])a[n][g]=a[n][g]?Vg(a[n][g],i[n][g]):i[n][g];else a[n]=i[n];return a},{})},Vg=function(e,a){return function(){e&&e.apply(this,arguments),a&&a.apply(this,arguments)}},ai=Wg;function Ea(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,_=new Date(e,a,i,n,o,s,r);return e<100&&e>=0&&_.setFullYear(e),_}function Aa(e){return e instanceof Date&&!isNaN(e)}function N0(e){return Array.isArray(e)&&e.length===2&&e.every(Aa)&&e[0]<=e[1]}function $g(e){return Array.isArray(e)&&e.every(Aa)}function At(e){var a=new Date(e);if(Aa(a))return a;for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return n.length?At.apply(void 0,n):new Date}function Qg(e){var a=new Date(e);return a.setMonth(0,1),a.setHours(0,0,0,0),a}function Tn(e){var a=new Date(e);return a.setDate(1),a.setHours(0,0,0,0),a}function Kg(e){var a=new Date(e);return a.setHours(0,0,0,0),a}function Jg(e){for(var a=e.firstDayOfWeek,i=e.year,n=e.month,o=[],s=Ea(i,n,0),r=s.getDate(),_=r-(s.getDay()+7-a)%7,l=_;l<=r;l++)o.push(Ea(i,n,l-r));s.setMonth(n+1,0);for(var g=s.getDate(),d=1;d<=g;d++)o.push(Ea(i,n,d));for(var f=r-_+1,h=6*7-f-g,u=1;u<=h;u++)o.push(Ea(i,n,g+u));return o}function Dn(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getMonth()):Number(a),o=i.getFullYear(),s=Ea(o,n+1,0).getDate(),r=i.getDate();return i.setMonth(n,Math.min(r,s)),i}function wt(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getFullYear()):a;return i.setFullYear(n),i}function F0(e,a){var i=new Date(e),n=new Date(a);return i.setHours(n.getHours(),n.getMinutes(),n.getSeconds()),i}function eo(e,a){if(!Array.isArray(e))return[];var i=[],n=e.length,o=0;for(a=a||n;o<n;)i.push(e.slice(o,o+=a));return i}function ua(e){return Object.prototype.toString.call(e)==="[object Object]"}function vt(e,a){if(!ua(e))return{};Array.isArray(a)||(a=[a]);var i={};return a.forEach(function(n){n in e&&(i[n]=e[n])}),i}function Wr(e,a){if(!ua(e))return{};var i=e;return ua(a)&&Object.keys(a).forEach(function(n){var o=a[n];ua(o)&&ua(e[n])&&(o=Wr(e[n],o)),i=pe({},i,et({},n,o))}),i}function Xg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function eh(e,a){return a={exports:{}},e(a,a.exports),a.exports}var ah=eh(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},n=i;a.default=n,e.exports=a.default}),th=Xg(ah),ih={formatLocale:th,yearFormat:"YYYY",monthFormat:"MMM",monthBeforeYear:!0},Mt="en",pt={};pt[Mt]=ih;function Vr(e,a,i){if(typeof e!="string")return pt[Mt];var n=Mt;return pt[e]&&(n=e),a&&(pt[e]=a,n=e),i||(Mt=n),pt[e]||pt[Mt]}function St(e){return Vr(e,null,!0)}function nh(e){var a=!1;return function(){for(var i=this,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];a||(a=!0,requestAnimationFrame(function(){a=!1,e.apply(i,o)}))}}function oh(e){var a=e.style.display,i=e.style.visibility;e.style.display="block",e.style.visibility="hidden";var n=window.getComputedStyle(e),o=e.offsetWidth+parseInt(n.marginLeft,10)+parseInt(n.marginRight,10),s=e.offsetHeight+parseInt(n.marginTop,10)+parseInt(n.marginBottom,10);return e.style.display=a,e.style.visibility=i,{width:o,height:s}}function sh(e,a,i,n){var o=0,s=0,r=0,_=0,l=e.getBoundingClientRect(),g=document.documentElement.clientWidth,d=document.documentElement.clientHeight;return n&&(r=window.pageXOffset+l.left,_=window.pageYOffset+l.top),g-l.left<a&&l.right<a?o=r-l.left+1:l.left+l.width/2<=g/2?o=r:o=r+l.width-a,l.top<=i&&d-l.bottom<=i?s=_+d-l.top-i:l.top+l.height/2<=d/2?s=_+l.height:s=_-i,{left:"".concat(o,"px"),top:"".concat(s,"px")}}function B0(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;if(!e||e===a)return null;var i=function(s,r){return getComputedStyle(s,null).getPropertyValue(r)},n=/(auto|scroll)/,o=n.test(i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x"));return o?e:B0(e.parentNode,a)}var rh={name:"Popup",inject:{prefixClass:{default:"mx"}},props:{visible:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!0}},data:function(){return{top:"",left:""}},watch:{visible:{immediate:!0,handler:function(e){var a=this;this.$nextTick(function(){e&&a.displayPopup()})}}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this._clickoutEvent="ontouchend"in document?"touchstart":"mousedown",document.addEventListener(this._clickoutEvent,this.handleClickOutside);var a=this.$parent.$el;this._displayPopup=nh(function(){return e.displayPopup()}),this._scrollParent=B0(a)||window,this._scrollParent.addEventListener("scroll",this._displayPopup),window.addEventListener("resize",this._displayPopup)},beforeDestroy:function(){this.appendToBody&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),document.removeEventListener(this._clickoutEvent,this.handleClickOutside),this._scrollParent.removeEventListener("scroll",this._displayPopup),window.removeEventListener("resize",this._displayPopup)},methods:{handleClickOutside:function(e){if(this.visible){var a=e.target,i=this.$el;i&&!i.contains(a)&&this.$emit("clickoutside",e)}},displayPopup:function(){if(this.visible){var e=this.$el,a=this.$parent.$el,i=this.appendToBody;this._popupRect||(this._popupRect=oh(e));var n=this._popupRect,o=n.width,s=n.height,r=sh(a,o,s,i),_=r.left,l=r.top;this.left=_,this.top=l}}}};function ia(e,a,i,n,o,s,r,_,l,g){var d=typeof i=="function"?i.options:i;return e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i}var lh=rh,_h=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("transition",{attrs:{name:e.prefixClass+"-zoom-in-down"}},[e.visible?i("div",{class:e.prefixClass+"-datepicker-main "+e.prefixClass+"-datepicker-popup",style:{top:e.top,left:e.left,position:"absolute"}},[e._t("default")],2):e._e()])},dh=[],fh=void 0,gh=ia({render:_h,staticRenderFns:dh},fh,lh),hh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"}})])},Fh=[],uh=void 0,ch=ia({render:hh,staticRenderFns:Fh},uh,{}),mh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e._v(" "),i("path",{attrs:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}),e._v(" "),i("path",{attrs:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"}})])},ph=[],bh=void 0,Th=ia({render:mh,staticRenderFns:ph},bh,{}),Dh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"}})])},yh=[],Eh=void 0,kh=ia({render:Dh,staticRenderFns:yh},Eh,{}),Ah={props:{type:String,disabled:Boolean},inject:{prefixClass:{default:"mx"}}},wh=Ah,vh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("button",e._g({class:[e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-icon-"+e.type,{disabled:e.disabled}],attrs:{type:"button",disabled:e.disabled}},e.$listeners),[i("i",{class:e.prefixClass+"-icon-"+e.type})])},Sh=[],Rh=void 0,ao=ia({render:vh,staticRenderFns:Sh},Rh,wh),Ch={name:"TableDate",components:{IconButton:ao},inject:{getLocale:{default:function(){return St}},getWeek:{default:function(){return Xn}},prefixClass:{default:"mx"},onDateMouseEnter:{default:void 0},onDateMouseLeave:{default:void 0}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},showWeekNumber:{type:Boolean,default:!1},titleFormat:{type:String,default:"YYYY-MM-DD"},getRowClasses:{type:Function,default:function(){return[]}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{firstDayOfWeek:function(){return this.getLocale().formatLocale.firstDayOfWeek||0},yearMonth:function(){var e=this.getLocale(),a=e.yearFormat,i=e.monthBeforeYear,n=e.monthFormat,o=n===void 0?"MMM":n,s={panel:"year",label:this.formatDate(this.calendar,a)},r={panel:"month",label:this.formatDate(this.calendar,o)};return i?[r,s]:[s,r]},days:function(){var e=this.getLocale(),a=e.days||e.formatLocale.weekdaysMin;return a.concat(a).slice(this.firstDayOfWeek,this.firstDayOfWeek+7)},dates:function(){var e=this.calendar.getFullYear(),a=this.calendar.getMonth(),i=Jg({firstDayOfWeek:this.firstDayOfWeek,year:e,month:a});return eo(i,7)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,a.getMonth()+1,0),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1);break;case"last-month":a.setMonth(a.getMonth(),0),a.setHours(23,59,59,999);break;case"next-month":a.setMonth(a.getMonth()+1);break}return this.disabledCalendarChanger(a,e)},handleIconLeftClick:function(){this.$emit("changecalendar",Dn(this.calendar,function(e){return e-1}),"last-month")},handleIconRightClick:function(){this.$emit("changecalendar",Dn(this.calendar,function(e){return e+1}),"next-month")},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(e){this.$emit("changepanel",e)},handleMouseEnter:function(e){typeof this.onDateMouseEnter=="function"&&this.onDateMouseEnter(e)},handleMouseLeave:function(e){typeof this.onDateMouseLeave=="function"&&this.onDateMouseLeave(e)},handleCellClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-row-col");if(i){var n=i.split(",").map(function(l){return parseInt(l,10)}),o=Gt(n,2),s=o[0],r=o[1],_=this.dates[s][r];this.$emit("select",new Date(_))}},formatDate:function(e,a){return O0(e,a,{locale:this.getLocale().formatLocale})},getCellTitle:function(e){var a=this.titleFormat;return this.formatDate(e,a)},getWeekNumber:function(e){return this.getWeek(e,this.getLocale().formatLocale)}}},Oh=Ch,Nh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-date"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"left",disabled:e.isDisabledArrows("last-month")},on:{click:e.handleIconLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("icon-button",{attrs:{type:"right",disabled:e.isDisabledArrows("next-month")},on:{click:e.handleIconRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},e._l(e.yearMonth,function(n){return i("button",{key:n.panel,class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-current-"+n.panel,attrs:{type:"button"},on:{click:function(o){return e.handlePanelChange(n.panel)}}},[e._v(`
        `+e._s(n.label)+`
      `)])}),0)],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-date"},[i("thead",[i("tr",[e.showWeekNumber?i("th",{class:e.prefixClass+"-week-number-header"}):e._e(),e._v(" "),e._l(e.days,function(n){return i("th",{key:n},[e._v(e._s(n))])})],2)]),e._v(" "),i("tbody",{on:{click:e.handleCellClick}},e._l(e.dates,function(n,o){return i("tr",{key:o,class:[e.prefixClass+"-date-row",e.getRowClasses(n)]},[e.showWeekNumber?i("td",{class:e.prefixClass+"-week-number",attrs:{"data-row-col":o+",0"}},[e._v(`
            `+e._s(e.getWeekNumber(n[0]))+`
          `)]):e._e(),e._v(" "),e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-row-col":o+","+r,title:e.getCellTitle(s)},on:{mouseenter:function(_){return e.handleMouseEnter(s)},mouseleave:function(_){return e.handleMouseLeave(s)}}},[i("div",[e._v(e._s(s.getDate()))])])})],2)}),0)])])])},Bh=[],xh=void 0,Mh=ia({render:Nh,staticRenderFns:Bh},xh,Oh),jh={name:"TableMonth",components:{IconButton:ao},inject:{getLocale:{default:function(){return St}},prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{calendarYear:function(){return this.calendar.getFullYear()},months:function(){var e=this.getLocale(),a=e.months||e.formatLocale.monthsShort,i=a.map(function(n,o){return{text:n,month:o}});return eo(i,3)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,11,31),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1,0,1);break}return this.disabledCalendarChanger(a,e)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(){this.$emit("changepanel","year")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-month");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Yh=jh,qh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-month"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text",attrs:{type:"button"},on:{click:e.handlePanelChange}},[e._v(`
        `+e._s(e.calendarYear)+`
      `)])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-month",on:{click:e.handleClick}},e._l(e.months,function(n,o){return i("tr",{key:o},e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s.month),attrs:{"data-month":s.month}},[i("div",[e._v(e._s(s.text))])])}),0)}),0)])])},Lh=[],Zh=void 0,Ih=ia({render:qh,staticRenderFns:Lh},Zh,Yh),Hh={name:"TableYear",components:{IconButton:ao},inject:{prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}},getYearPanel:{type:Function}},computed:{years:function(){var e=new Date(this.calendar);return typeof this.getYearPanel=="function"?this.getYearPanel(e):this.getYears(e)},firstYear:function(){return this.years[0][0]},lastYear:function(){var e=function(a){return a[a.length-1]};return e(e(this.years))}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-decade":a.setFullYear(this.firstYear-1,11,31),a.setHours(23,59,59,999);break;case"next-decade":a.setFullYear(this.lastYear+1,0,1);break}return this.disabledCalendarChanger(a,e)},getYears:function(e){for(var a=Math.floor(e.getFullYear()/10)*10,i=[],n=0;n<10;n++)i.push(a+n);return eo(i,2)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e-10}),"last-decade")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",wt(this.calendar,function(e){return e+10}),"next-decade")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-year");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Ph=Hh,Gh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-year"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-decade")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-decade")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("span",[e._v(e._s(e.firstYear))]),e._v(" "),i("span",{class:e.prefixClass+"-calendar-decade-separator"}),e._v(" "),i("span",[e._v(e._s(e.lastYear))])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-year",on:{click:e.handleClick}},e._l(e.years,function(n,o){return i("tr",{key:o},e._l(n,function(s,r){return i("td",{key:r,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-year":s}},[i("div",[e._v(e._s(s))])])}),0)}),0)])])},Uh=[],zh=void 0,Wh=ia({render:Gh,staticRenderFns:Uh},zh,Ph),ot={name:"CalendarPanel",inject:{prefixClass:{default:"mx"},dispatchDatePicker:{default:function(){return function(){}}}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},defaultPanel:{type:String},disabledCalendarChanger:{type:Function,default:function(){return!1}},disabledDate:{type:Function,default:function(){return!1}},type:{type:String,default:"date"},getClasses:{type:Function,default:function(){return[]}},showWeekNumber:{type:Boolean,default:void 0},getYearPanel:{type:Function},titleFormat:{type:String,default:"YYYY-MM-DD"},calendar:Date,partialUpdate:{type:Boolean,default:!1}},data:function(){var e=["date","month","year"],a=Math.max(e.indexOf(this.type),e.indexOf(this.defaultPanel)),i=a!==-1?e[a]:"date";return{panel:i,innerCalendar:new Date}},computed:{innerValue:function(){var e=Array.isArray(this.value)?this.value:[this.value],a={year:Qg,month:Tn,date:Kg},i=a[this.type]||a.date;return e.filter(Aa).map(function(n){return i(n)})},calendarYear:function(){return this.innerCalendar.getFullYear()},calendarMonth:function(){return this.innerCalendar.getMonth()}},watch:{value:{immediate:!0,handler:"initCalendar"},calendar:{handler:"initCalendar"},defaultValue:{handler:"initCalendar"}},methods:{initCalendar:function(){var e=this.calendar;if(!Aa(e)){var a=this.innerValue.length;e=At(a>0?this.innerValue[a-1]:this.defaultValue)}this.innerCalendar=Tn(e)},isDisabled:function(e){return this.disabledDate(new Date(e),this.innerValue)},emitDate:function(e,a){this.isDisabled(e)||(this.$emit("select",e,a,this.innerValue),this.dispatchDatePicker("pick",e,a))},handleCalendarChange:function(e,a){var i=new Date(this.innerCalendar);this.innerCalendar=e,this.$emit("update:calendar",e),this.dispatchDatePicker("calendar-change",e,i,a)},handelPanelChange:function(e){var a=this.panel;this.panel=e,this.dispatchDatePicker("panel-change",e,a)},handleSelectYear:function(e){if(this.type==="year"){var a=this.getYearCellDate(e);this.emitDate(a,"year")}else if(this.handleCalendarChange(Ea(e,this.calendarMonth),"year"),this.handelPanelChange("month"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(e),this.emitDate(i,"year")}},handleSelectMonth:function(e){if(this.type==="month"){var a=this.getMonthCellDate(e);this.emitDate(a,"month")}else if(this.handleCalendarChange(Ea(this.calendarYear,e),"month"),this.handelPanelChange("date"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(this.calendarYear),this.emitDate(Dn(i,e),"month")}},handleSelectDate:function(e){this.emitDate(e,this.type==="week"?"week":"date")},getMonthCellDate:function(e){return Ea(this.calendarYear,e)},getYearCellDate:function(e){return Ea(e,0)},getDateClasses:function(e){var a=e.getMonth()!==this.calendarMonth,i=[];e.getTime()===new Date().setHours(0,0,0,0)&&i.push("today"),a&&i.push("not-current-month");var n=this.getStateClass(e);return n==="active"&&a||i.push(n),i.concat(this.getClasses(e,this.innerValue,i.join(" ")))},getMonthClasses:function(e){var a=[];if(this.type!=="month"){this.calendarMonth===e&&a.push("active");var i=this.getMonthCellDate(e);return this.disabledCalendarChanger(i,"month")&&a.push("disabled"),a}var n=this.getMonthCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getYearClasses:function(e){var a=[];if(this.type!=="year"){this.calendarYear===e&&a.push("active");var i=this.getYearCellDate(e);return this.disabledCalendarChanger(i,"year")&&a.push("disabled"),a}var n=this.getYearCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getStateClass:function(e){return this.isDisabled(e)?"disabled":this.innerValue.some(function(a){return a.getTime()===e.getTime()})?"active":""},getWeekState:function(e){if(this.type!=="week")return"";var a=e[0].getTime(),i=e[6].getTime(),n=this.innerValue.some(function(o){var s=o.getTime();return s>=a&&s<=i});return n?"".concat(this.prefixClass,"-active-week"):""}},render:function(){var e=arguments[0],a=this.panel,i=this.innerCalendar;return a==="year"?e(Wh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getYearClasses,getYearPanel:this.getYearPanel},on:{select:this.handleSelectYear,changecalendar:this.handleCalendarChange}}):a==="month"?e(Ih,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getMonthClasses},on:{select:this.handleSelectMonth,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}}):e(Mh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getDateClasses,getRowClasses:this.getWeekState,titleFormat:this.titleFormat,showWeekNumber:typeof this.showWeekNumber=="boolean"?this.showWeekNumber:this.type==="week"},class:et({},"".concat(this.prefixClass,"-calendar-week-mode"),this.type==="week"),on:{select:this.handleSelectDate,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}})}},Ut={name:"CalendarRange",components:{CalendarPanel:ot},provide:function(){return{onDateMouseEnter:this.onDateMouseEnter,onDateMouseLeave:this.onDateMouseLeave}},inject:{prefixClass:{default:"mx"}},props:pe({},ot.props),data:function(){return{innerValue:[],calendars:[],hoveredValue:null}},computed:{calendarMinDiff:function(){var e={date:1,month:12,year:120};return e[this.type]||e.date},calendarMaxDiff:function(){return 1/0},defaultValues:function(){return Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue]}},watch:{value:{immediate:!0,handler:function(){var e=this;this.innerValue=N0(this.value)?this.value:[new Date(NaN),new Date(NaN)];var a=this.innerValue.map(function(i,n){return Tn(At(i,e.defaultValues[n]))});this.updateCalendars(a)}}},methods:{handleSelect:function(e,a){var i=Gt(this.innerValue,2),n=i[0],o=i[1];Aa(n)&&!Aa(o)?(n.getTime()>e.getTime()?this.innerValue=[e,n]:this.innerValue=[n,e],this.emitDate(this.innerValue,a)):this.innerValue=[e,new Date(NaN)]},onDateMouseEnter:function(e){this.hoveredValue=e},onDateMouseLeave:function(){this.hoveredValue=null},emitDate:function(e,a){this.$emit("select",e,a)},updateStartCalendar:function(e){this.updateCalendars([e,this.calendars[1]],1)},updateEndCalendar:function(e){this.updateCalendars([this.calendars[0],e],0)},updateCalendars:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,i=this.getCalendarGap(e);if(i){var n=new Date(e[a]);n.setMonth(n.getMonth()+(a===0?-i:i)),e[a]=n}this.calendars=e},getCalendarGap:function(e){var a=Gt(e,2),i=a[0],n=a[1],o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth(),r=o*12+s,_=this.calendarMinDiff,l=this.calendarMaxDiff;return r<_?_-r:r>l?l-r:0},getRangeClasses:function(e,a,i){var n=[].concat(this.getClasses(e,a,i));if(/disabled|active/.test(i))return n;var o=function(s,r){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(m){return m.getTime()},l=_(s),g=r.map(_),d=Gt(g,2),f=d[0],h=d[1];if(f>h){var u=[h,f];f=u[0],h=u[1]}return l>f&&l<h};return a.length===2&&o(e,a)?n.concat("in-range"):a.length===1&&this.hoveredValue&&o(e,[a[0],this.hoveredValue])?n.concat("hover-in-range"):n}},render:function(){var e=this,a=arguments[0],i=this.calendars.map(function(o,s){var r=pe({},e.$props,{calendar:o,value:e.innerValue,defaultValue:e.defaultValues[s],getClasses:e.getRangeClasses,partialUpdate:!1}),_={select:e.handleSelect,"update:calendar":s===0?e.updateStartCalendar:e.updateEndCalendar};return a("calendar-panel",{props:pe({},r),on:pe({},_)})}),n=this.prefixClass;return a("div",{class:"".concat(n,"-range-wrapper")},[i])}},ci;function Vh(){if(typeof window>"u")return 0;if(ci!==void 0)return ci;var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var a=document.createElement("div");return a.style.width="100%",e.appendChild(a),ci=e.offsetWidth-a.offsetWidth,e.parentNode.removeChild(e),ci}var $h={inject:{prefixClass:{default:"mx"}},data:function(){return{scrollbarWidth:0,thumbTop:"",thumbHeight:""}},created:function(){this.scrollbarWidth=Vh(),document.addEventListener("mouseup",this.handleDragend)},beforeDestroy:function(){document.addEventListener("mouseup",this.handleDragend)},mounted:function(){this.$nextTick(this.getThumbSize)},methods:{getThumbSize:function(){var e=this.$refs.wrap;if(e){var a=e.clientHeight*100/e.scrollHeight;this.thumbHeight=a<100?"".concat(a,"%"):""}},handleScroll:function(e){var a=e.currentTarget,i=a.scrollHeight,n=a.scrollTop;this.thumbTop="".concat(n*100/i,"%")},handleDragstart:function(e){e.stopImmediatePropagation(),this._draggable=!0;var a=this.$refs.thumb.offsetTop;this._prevY=e.clientY-a,document.addEventListener("mousemove",this.handleDraging)},handleDraging:function(e){if(this._draggable){var a=e.clientY,i=this.$refs.wrap,n=i.scrollHeight,o=i.clientHeight,s=a-this._prevY,r=s*n/o;i.scrollTop=r}},handleDragend:function(){this._draggable&&(this._draggable=!1,document.removeEventListener("mousemove",this.handleDraging))}}},Qh=$h,Kh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-scrollbar",style:{position:"relative",overflow:"hidden"}},[i("div",{ref:"wrap",class:e.prefixClass+"-scrollbar-wrap",style:{marginRight:"-"+e.scrollbarWidth+"px"},on:{scroll:e.handleScroll}},[e._t("default")],2),e._v(" "),i("div",{class:e.prefixClass+"-scrollbar-track"},[i("div",{ref:"thumb",class:e.prefixClass+"-scrollbar-thumb",style:{height:e.thumbHeight,top:e.thumbTop},on:{mousedown:e.handleDragstart}})])])},Jh=[],Xh=void 0,$r=ia({render:Kh,staticRenderFns:Jh},Xh,Qh),K0=function(e){return e=parseInt(e,10),e<10?"0".concat(e):"".concat(e)},J0=function(e,a,i){if(Array.isArray(i))return i.filter(function(s){return s>=0&&s<e});a<=0&&(a=1);for(var n=[],o=0;o<e;o+=a)n.push(o);return n},eF=function e(a,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n<=0){requestAnimationFrame(function(){a.scrollTop=i});return}var o=i-a.scrollTop,s=o/n*10;requestAnimationFrame(function(){var r=a.scrollTop+s;if(r>=i){a.scrollTop=i;return}a.scrollTop=r,e(a,i,n-10)})},aF={name:"ListColumns",components:{ScrollbarVertical:$r},inject:{prefixClass:{default:"mx"}},props:{date:Date,scrollDuration:{type:Number,default:100},getClasses:{type:Function,default:function(){return[]}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,showHour:{type:Boolean,default:!0},showMinute:{type:Boolean,default:!0},showSecond:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},use12h:{type:Boolean,default:!1}},computed:{columns:function(){var e=[];return this.showHour&&e.push({type:"hour",list:this.getHoursList()}),this.showMinute&&e.push({type:"minute",list:this.getMinutesList()}),this.showSecond&&e.push({type:"second",list:this.getSecondsList()}),this.use12h&&e.push({type:"ampm",list:this.getAMPMList()}),e.filter(function(a){return a.list.length>0})}},watch:{date:{handler:function(){var e=this;this.$nextTick(function(){e.scrollToSelected(e.scrollDuration)})}}},mounted:function(){this.scrollToSelected(0)},methods:{getHoursList:function(){var e=this;return J0(this.use12h?12:24,this.hourStep,this.hourOptions).map(function(a){var i=new Date(e.date),n=K0(a);e.use12h&&(a===0&&(n="12"),i.getHours()>=12&&(a+=12));var o=i.setHours(a);return{value:o,text:n}})},getMinutesList:function(){var e=this;return J0(60,this.minuteStep,this.minuteOptions).map(function(a){var i=new Date(e.date).setMinutes(a);return{value:i,text:K0(a)}})},getSecondsList:function(){var e=this;return J0(60,this.secondStep,this.secondOptions).map(function(a){var i=new Date(e.date).setSeconds(a);return{value:i,text:K0(a)}})},getAMPMList:function(){var e=this;return["AM","PM"].map(function(a,i){var n=new Date(e.date),o=n.setHours(n.getHours()%12+i*12);return{text:a,value:o}})},scrollToSelected:function(e){for(var a=this.$el.querySelectorAll(".active"),i=0;i<a.length;i++){var n=a[i],o=B0(n,this.$el);if(o){var s=n.offsetTop;eF(o,s,e)}}},handleSelect:function(e){var a=e.target,i=e.currentTarget;if(a.tagName.toUpperCase()==="LI"){var n=i.getAttribute("data-type"),o=parseInt(i.getAttribute("data-index"),10),s=parseInt(a.getAttribute("data-index"),10),r=this.columns[o].list[s].value;this.$emit("select",r,n)}}}},tF=aF,iF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time-columns"},e._l(e.columns,function(n,o){return i("scrollbar-vertical",{key:o,class:e.prefixClass+"-time-column"},[i("ul",{class:e.prefixClass+"-time-list",attrs:{"data-type":n.type,"data-index":o},on:{click:e.handleSelect}},e._l(n.list,function(s,r){return i("li",{key:s.value,class:[e.prefixClass+"-time-item",e.getClasses(s.value,n.type)],attrs:{"data-index":r}},[e._v(`
        `+e._s(s.text)+`
      `)])}),0)])}),1)},nF=[],oF=void 0,sF=ia({render:iF,staticRenderFns:nF},oF,tF);function X0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=e.split(":");if(a.length>=2){var i=parseInt(a[0],10),n=parseInt(a[1],10);return{hours:i,minutes:n}}return null}var rF=function(e,a){e&&(e.scrollTop=a)},lF={name:"ListOptions",components:{ScrollbarVertical:$r},inject:{getLocale:{default:function(){return St}},prefixClass:{default:"mx"}},props:{date:Date,options:{type:[Object,Function],default:function(){return[]}},format:{type:String,default:"HH:mm:ss"},getClasses:{type:Function,default:function(){return[]}}},computed:{list:function(){var e=[],a=this.options;if(typeof a=="function")return a()||[];var i=X0(a.start),n=X0(a.end),o=X0(a.step),s=a.format||this.format;if(i&&n&&o)for(var r=i.minutes+i.hours*60,_=n.minutes+n.hours*60,l=o.minutes+o.hours*60,g=Math.floor((_-r)/l),d=0;d<=g;d++){var f=r+d*l,h=Math.floor(f/60),u=f%60,m=new Date(this.date).setHours(h,u,0);e.push({value:m,text:this.formatDate(m,s)})}return e}},mounted:function(){this.scrollToSelected()},methods:{formatDate:function(e,a){return O0(e,a,{locale:this.getLocale().formatLocale})},scrollToSelected:function(){var e=this.$el.querySelector(".active");if(e){var a=B0(e,this.$el);if(a){var i=e.offsetTop;rF(a,i)}}},handleSelect:function(e){this.$emit("select",e,"time")}}},_F=lF,dF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("scrollbar-vertical",e._l(e.list,function(n){return i("div",{key:n.value,class:[e.prefixClass+"-time-option",e.getClasses(n.value)],on:{click:function(o){return e.handleSelect(n.value)}}},[e._v(`
    `+e._s(n.text)+`
  `)])}),0)},fF=[],gF=void 0,hF=ia({render:dF,staticRenderFns:fF},gF,_F),FF={name:"TimePanel",components:{ListColumns:sF,ListOptions:hF},inject:{getLocale:{default:function(){return St}},prefixClass:{default:"mx"}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},format:{default:"HH:mm:ss"},timeTitleFormat:{type:String,default:"YYYY-MM-DD"},showTimeHeader:{type:Boolean,default:!1},disabledTime:{type:Function,default:function(){return!1}},timePickerOptions:{type:[Object,Function],default:function(){return null}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},showHour:{type:Boolean,default:void 0},showMinute:{type:Boolean,default:void 0},showSecond:{type:Boolean,default:void 0},use12h:{type:Boolean,default:void 0},scrollDuration:{type:Number,default:100}},data:function(){return{innerValue:At(this.value,this.defaultValue)}},computed:{title:function(){var e=this.timeTitleFormat,a=new Date(this.innerValue);return this.formatDate(a,e)},innerForamt:function(){return typeof this.format=="string"?this.format:"HH:mm:ss"},ShowHourMinuteSecondAMPM:function(){var e=this,a=this.innerForamt,i={showHour:/[HhKk]/.test(a),showMinute:/m/.test(a),showSecond:/s/.test(a),use12h:/a/i.test(a)},n={};return Object.keys(i).forEach(function(o){n[o]=typeof e[o]=="boolean"?e[o]:i[o]}),n}},watch:{value:{immediate:!0,handler:function(){this.innerValue=At(this.value,this.defaultValue)}}},methods:{formatDate:function(e,a){return O0(e,a,{locale:this.getLocale().formatLocale})},isDisabledTime:function(e){return this.disabledTime(new Date(e))},isDisabledHour:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setMinutes(0,0,0))&&this.isDisabledTime(a.setMinutes(59,59,999))},isDisabledMinute:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setSeconds(0,0))&&this.isDisabledTime(a.setSeconds(59,999))},isDisabledAMPM:function(e){var a=new Date(e),i=a.getHours()<12?0:12,n=i+11;return this.isDisabledTime(a)&&this.isDisabledTime(a.setHours(i,0,0,0))&&this.isDisabledTime(a.setHours(n,59,59,999))},isDisabled:function(e,a){return a==="hour"?this.isDisabledHour(e):a==="minute"?this.isDisabledMinute(e):a==="ampm"?this.isDisabledAMPM(e):this.isDisabledTime(e)},handleSelect:function(e,a){var i=new Date(e);this.isDisabled(e,a)||(this.innerValue=i,this.isDisabledTime(i)||this.$emit("select",i,a))},handleClickTitle:function(){this.$emit("clicktitle")},getClasses:function(e,a){var i=new Date(e);return this.isDisabled(e,a)?"disabled":i.getTime()===this.innerValue.getTime()?"active":""}}},uF=FF,cF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time"},[e.showTimeHeader?i("div",{class:e.prefixClass+"-time-header"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-time-header-title",attrs:{type:"button"},on:{click:e.handleClickTitle}},[e._v(`
      `+e._s(e.title)+`
    `)])]):e._e(),e._v(" "),i("div",{class:e.prefixClass+"-time-content"},[e.timePickerOptions?i("list-options",{attrs:{date:e.innerValue,"get-classes":e.getClasses,options:e.timePickerOptions,format:e.innerForamt},on:{select:e.handleSelect}}):i("list-columns",e._b({attrs:{date:e.innerValue,"get-classes":e.getClasses,"hour-options":e.hourOptions,"minute-options":e.minuteOptions,"second-options":e.secondOptions,"hour-step":e.hourStep,"minute-step":e.minuteStep,"second-step":e.secondStep,"scroll-duration":e.scrollDuration},on:{select:e.handleSelect}},"list-columns",e.ShowHourMinuteSecondAMPM,!1))],1)])},mF=[],pF=void 0,La=ia({render:cF,staticRenderFns:mF},pF,uF),zt={name:"TimeRange",inject:{prefixClass:{default:"mx"}},props:pe({},La.props),data:function(){return{startValue:new Date(NaN),endValue:new Date(NaN)}},watch:{value:{immediate:!0,handler:function(){if(N0(this.value)){var e=Gt(this.value,2),a=e[0],i=e[1];this.startValue=a,this.endValue=i}else this.startValue=new Date(NaN),this.endValue=new Date(NaN)}}},methods:{emitChange:function(e,a){var i=[this.startValue,this.endValue];this.$emit("select",i,e==="time"?"time-range":e,a)},handleSelectStart:function(e,a){this.startValue=e,this.endValue.getTime()>=e.getTime()||(this.endValue=e),this.emitChange(a,0)},handleSelectEnd:function(e,a){this.endValue=e,this.startValue.getTime()<=e.getTime()||(this.startValue=e),this.emitChange(a,1)},disabledStartTime:function(e){return this.disabledTime(e,0)},disabledEndTime:function(e){return e.getTime()<this.startValue.getTime()||this.disabledTime(e,1)}},render:function(){var e=arguments[0],a=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],i=this.prefixClass;return e("div",{class:"".concat(i,"-range-wrapper")},[e(La,{props:pe({},pe({},this.$props,{value:this.startValue,defaultValue:a[0],disabledTime:this.disabledStartTime})),on:pe({},pe({},this.$listeners,{select:this.handleSelectStart}))}),e(La,{props:pe({},pe({},this.$props,{value:this.endValue,defaultValue:a[1],disabledTime:this.disabledEndTime})),on:pe({},pe({},this.$listeners,{select:this.handleSelectEnd}))})])}},to={name:"DatetimePanel",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:pe({},ot.props,{},La.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){a==="date"&&this.openTimePanel();var i=F0(e,At(this.value,this.defaultValue));if(this.disabledTime(new Date(i))&&(i=F0(e,this.defaultValue),this.disabledTime(new Date(i)))){this.currentValue=i;return}this.emitDate(i,a)}},render:function(){var e=arguments[0],a={props:pe({},vt(this.$props,Object.keys(ot.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:pe({},vt(this.$props,Object.keys(La.props)),{showTimeHeader:!0,value:this.currentValue}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(ot,ai([{},a])),this.timeVisible&&e(La,ai([{class:"".concat(n,"-calendar-time")},i]))])}},Qr={name:"DatetimeRange",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:pe({},Ut.props,{},zt.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){var i=this;a==="date"&&this.openTimePanel();var n=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],o=e.map(function(s,r){var _=N0(i.value)?i.value[r]:n[r];return F0(s,_)});if(o[1].getTime()<o[0].getTime()&&(o=[o[0],o[0]]),o.some(this.disabledTime)&&(o=e.map(function(s,r){return F0(s,n[r])}),o.some(this.disabledTime))){this.currentValue=o;return}this.emitDate(o,a)}},render:function(){var e=arguments[0],a={props:pe({},vt(this.$props,Object.keys(Ut.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:pe({},vt(this.$props,Object.keys(zt.props)),{value:this.currentValue,showTimeHeader:!0}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(Ut,ai([{},a])),this.timeVisible&&e(zt,ai([{class:"".concat(n,"-calendar-time")},i]))])}},bF={default:ot,time:La,datetime:to},TF={default:Ut,time:zt,datetime:Qr},Ja={name:"DatePicker",provide:function(){var e=this;return{getLocale:function(){return e.locale},getWeek:this.getWeek,prefixClass:this.prefixClass,dispatchDatePicker:this.$emit.bind(this)}},props:pe({},to.props,{value:{},valueType:{type:String,default:"date"},type:{type:String,default:"date"},format:{type:String},formatter:{type:Object},range:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},rangeSeparator:{type:String},lang:{type:[String,Object]},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},prefixClass:{type:String,default:"mx"},inputClass:{},inputAttr:{type:Object,default:function(){return{}}},appendToBody:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},popupClass:{},popupStyle:{type:Object,default:function(){return{}}},inline:{type:Boolean,default:!1},confirm:{type:Boolean,default:!1},confirmText:{type:String,default:"OK"},renderInputText:{type:Function},shortcuts:{type:Array,validator:function(e){return Array.isArray(e)&&e.every(function(a){return ua(a)&&typeof a.text=="string"&&typeof a.onClick=="function"})},default:function(){return[]}}}),data:function(){return{currentValue:null,userInput:null,defaultOpen:!1,mouseInInput:!1}},computed:{popupVisible:function(){return!this.disabled&&(typeof this.open=="boolean"?this.open:this.defaultOpen)},innerRangeSeparator:function(){return this.rangeSeparator||(this.multiple?",":" ~ ")},innerFormat:function(){var e={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD HH:mm:ss",year:"YYYY",month:"YYYY-MM",time:"HH:mm:ss",week:"w"};return this.format||e[this.type]||e.date},innerValue:function(){var e=this.value;return this.validMultipleType?(e=Array.isArray(e)?e:[],e.map(this.value2date)):this.range?(e=Array.isArray(e)?e.slice(0,2):[null,null],e.map(this.value2date)):this.value2date(e)},text:function(){var e=this;return this.userInput!==null?this.userInput:typeof this.renderInputText=="function"?this.renderInputText(this.innerValue):this.isValidValue(this.innerValue)?Array.isArray(this.innerValue)?this.innerValue.map(function(a){return e.formatDate(a)}).join(this.innerRangeSeparator):this.formatDate(this.innerValue):""},showClearIcon:function(){return!this.disabled&&this.clearable&&this.text&&this.mouseInInput},locale:function(){return ua(this.lang)?Wr(St(),this.lang):St(this.lang)},validMultipleType:function(){var e=["date","month","year"];return this.multiple&&!this.range&&e.indexOf(this.type)!==-1}},watch:{innerValue:{immediate:!0,handler:function(e){this.currentValue=e}},popupVisible:{handler:function(e){e&&(this.currentValue=this.innerValue)}}},created:function(){wi(this.format)==="object"&&console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it")},methods:{handleMouseEnter:function(){this.mouseInInput=!0},handleMouseLeave:function(){this.mouseInInput=!1},handleClickOutSide:function(e){var a=e.target;this.$el.contains(a)||this.closePopup()},getFormatter:function(e){return ua(this.formatter)&&this.formatter[e]||ua(this.format)&&this.format[e]},getWeek:function(e,a){return typeof this.getFormatter("getWeek")=="function"?this.getFormatter("getWeek")(e,a):Xn(e,a)},parseDate:function(e,a){if(a=a||this.innerFormat,typeof this.getFormatter("parse")=="function")return this.getFormatter("parse")(e,a);var i=new Date;return Yg(e,a,{locale:this.locale.formatLocale,backupDate:i})},formatDate:function(e,a){return a=a||this.innerFormat,typeof this.getFormatter("stringify")=="function"?this.getFormatter("stringify")(e,a):O0(e,a,{locale:this.locale.formatLocale})},value2date:function(e){switch(this.valueType){case"date":return e instanceof Date?new Date(e.getTime()):new Date(NaN);case"timestamp":return typeof e=="number"?new Date(e):new Date(NaN);case"format":return typeof e=="string"?this.parseDate(e):new Date(NaN);default:return typeof e=="string"?this.parseDate(e,this.valueType):new Date(NaN)}},date2value:function(e){if(!Aa(e))return null;switch(this.valueType){case"date":return e;case"timestamp":return e.getTime();case"format":return this.formatDate(e);default:return this.formatDate(e,this.valueType)}},emitValue:function(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;this.userInput=null;var n=Array.isArray(e)?e.map(this.date2value):this.date2value(e);return this.$emit("input",n),this.$emit("change",n,a),i&&this.closePopup(),n},isValidValue:function(e){return this.validMultipleType?$g(e):this.range?N0(e):Aa(e)},isValidValueAndNotDisabled:function(e){if(!this.isValidValue(e))return!1;var a=typeof this.disabledDate=="function"?this.disabledDate:function(){return!1},i=typeof this.disabledTime=="function"?this.disabledTime:function(){return!1};return Array.isArray(e)||(e=[e]),e.every(function(n){return!a(n)&&!i(n)})},handleMultipleDates:function(e,a){if(this.validMultipleType&&a){var i=a.filter(function(n){return n.getTime()!==e.getTime()});return i.length===a.length&&i.push(e),i}return e},handleSelectDate:function(e,a,i){e=this.handleMultipleDates(e,i),this.confirm?this.currentValue=e:this.emitValue(e,a,!this.validMultipleType&&(a===this.type||a==="time"))},clear:function(){this.emitValue(this.range?[null,null]:null),this.$emit("clear")},handleClear:function(e){e.stopPropagation(),this.clear()},handleConfirmDate:function(){var e=this.emitValue(this.currentValue);this.$emit("confirm",e)},handleSelectShortcut:function(e){var a=e.currentTarget.getAttribute("data-index"),i=this.shortcuts[parseInt(a,10)];if(ua(i)&&typeof i.onClick=="function"){var n=i.onClick(this);n&&this.emitValue(n)}},openPopup:function(e){this.popupVisible||this.disabled||(this.defaultOpen=!0,this.$emit("open",e),this.$emit("update:open",!0))},closePopup:function(){this.popupVisible&&(this.defaultOpen=!1,this.$emit("close"),this.$emit("update:open",!1))},blur:function(){this.$refs.input&&this.$refs.input.blur()},focus:function(){this.$refs.input&&this.$refs.input.focus()},handleInputChange:function(){var e=this;if(!(!this.editable||this.userInput===null)){var a=this.userInput.trim();if(this.userInput=null,a===""){this.clear();return}var i;if(this.validMultipleType)i=a.split(this.innerRangeSeparator).map(function(o){return e.parseDate(o.trim())});else if(this.range){var n=a.split(this.innerRangeSeparator);n.length!==2&&(n=a.split(this.innerRangeSeparator.trim())),i=n.map(function(o){return e.parseDate(o.trim())})}else i=this.parseDate(a);this.isValidValueAndNotDisabled(i)?(this.emitValue(i),this.blur()):this.$emit("input-error",a)}},handleInputInput:function(e){this.userInput=typeof e=="string"?e:e.target.value},handleInputKeydown:function(e){var a=e.keyCode;a===9?this.closePopup():a===13&&this.handleInputChange()},handleInputBlur:function(e){this.$emit("blur",e)},handleInputFocus:function(e){this.openPopup(e),this.$emit("focus",e)},hasSlot:function(e){return!!(this.$slots[e]||this.$scopedSlots[e])},renderSlot:function(e,a,i){var n=this.$scopedSlots[e];return n?n(i)||a:this.$slots[e]||a},renderInput:function(){var e=this.$createElement,a=this.prefixClass,i=pe({name:"date",type:"text",autocomplete:"off",value:this.text,class:this.inputClass||"".concat(this.prefixClass,"-input"),readonly:!this.editable,disabled:this.disabled,placeholder:this.placeholder},this.inputAttr),n=i.value,o=i.class,s=Lg(i,["value","class"]),r={keydown:this.handleInputKeydown,focus:this.handleInputFocus,blur:this.handleInputBlur,input:this.handleInputInput,change:this.handleInputChange},_=this.renderSlot("input",e("input",{domProps:{value:n},class:o,attrs:pe({},s),on:pe({},r),ref:"input"}),{props:i,events:r}),l=this.type==="time"?e(Th):e(ch);return e("div",{class:"".concat(a,"-input-wrapper"),on:{mouseenter:this.handleMouseEnter,mouseleave:this.handleMouseLeave,click:this.openPopup},ref:"inputWrapper"},[_,this.showClearIcon?e("i",{class:"".concat(a,"-icon-clear"),on:{click:this.handleClear}},[this.renderSlot("icon-clear",e(kh))]):e("i",{class:"".concat(a,"-icon-calendar")},[this.renderSlot("icon-calendar",l)])])},renderContent:function(){var e=this.$createElement,a=this.range?TF:bF,i=a[this.type]||a.default,n=pe({},vt(this.$props,Object.keys(i.props)),{value:this.currentValue}),o=pe({},vt(this.$listeners,i.emits||[]),{select:this.handleSelectDate}),s=e(i,ai([{},{props:n,on:o,ref:"picker"}]));return e("div",{class:"".concat(this.prefixClass,"-datepicker-body")},[this.renderSlot("content",s,{value:this.currentValue,emit:this.handleSelectDate})])},renderSidebar:function(){var e=this,a=this.$createElement,i=this.prefixClass;return a("div",{class:"".concat(i,"-datepicker-sidebar")},[this.renderSlot("sidebar",null,{value:this.currentValue,emit:this.handleSelectDate}),this.shortcuts.map(function(n,o){return a("button",{key:o,attrs:{"data-index":o,type:"button"},class:"".concat(i,"-btn ").concat(i,"-btn-text ").concat(i,"-btn-shortcut"),on:{click:e.handleSelectShortcut}},[n.text])})])},renderHeader:function(){var e=this.$createElement;return e("div",{class:"".concat(this.prefixClass,"-datepicker-header")},[this.renderSlot("header",null,{value:this.currentValue,emit:this.handleSelectDate})])},renderFooter:function(){var e=this.$createElement,a=this.prefixClass;return e("div",{class:"".concat(a,"-datepicker-footer")},[this.renderSlot("footer",null,{value:this.currentValue,emit:this.handleSelectDate}),this.confirm?e("button",{attrs:{type:"button"},class:"".concat(a,"-btn ").concat(a,"-datepicker-btn-confirm"),on:{click:this.handleConfirmDate}},[this.confirmText]):null])}},render:function(){var e,a=arguments[0],i=this.prefixClass,n=this.inline,o=this.disabled,s=this.hasSlot("sidebar")||this.shortcuts.length?this.renderSidebar():null,r=a("div",{class:"".concat(i,"-datepicker-content")},[this.hasSlot("header")?this.renderHeader():null,this.renderContent(),this.hasSlot("footer")||this.confirm?this.renderFooter():null]);return a("div",{class:(e={},et(e,"".concat(i,"-datepicker"),!0),et(e,"".concat(i,"-datepicker-range"),this.range),et(e,"".concat(i,"-datepicker-inline"),n),et(e,"disabled",o),e)},[n?null:this.renderInput(),n?a("div",{class:"".concat(i,"-datepicker-main")},[s,r]):a(gh,{ref:"popup",class:this.popupClass,style:this.popupStyle,attrs:{visible:this.popupVisible,appendToBody:this.appendToBody},on:{clickoutside:this.handleClickOutSide}},[s,r])])}};Ja.locale=Vr,Ja.install=function(e){e.component(Ja.name,Ja)},typeof window<"u"&&window.Vue&&Ja.install(window.Vue),pn(Ja,{CalendarPanel:ot,CalendarRange:Ut,TimePanel:La,TimeRange:zt,DatetimePanel:to,DatetimeRange:Qr}),oe(zl);const DF={name:"CalendarBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var yF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon calendar-blank-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},EF=[],kF=te(DF,yF,EF,!1,null,null);const AF=kF.exports,wF={name:"WebIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var vF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon web-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},SF=[],RF=te(wF,vF,SF,!1,null,null);const CF=RF.exports,rs={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD H:mm:ss",year:"YYYY",month:"YYYY-MM",time:"H:mm:ss",week:"w"},OF={name:"NcDateTimePicker",components:{CalendarBlank:AF,DatePicker:Ja,NcPopover:Nn,NcTimezonePicker:gg,Web:CF},inheritAttrs:!1,props:{clearable:{type:Boolean,default:!1},minuteStep:{type:Number,default:10},type:{type:String,default:"date"},format:{type:String,default:null},formatter:{type:Object,default:null},lang:{type:Object,default:null},value:{default:()=>new Date},timezoneId:{type:String,default:"UTC"},showTimezoneSelect:{type:Boolean,default:!1},highlightTimezone:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},showWeekNumber:{type:Boolean,default:!1},placeholder:{type:String,default:null}},emits:["update:value","update:timezone-id"],setup(){return{timezoneDialogHeaderId:"timezone-dialog-header-".concat(st())}},data(){return{showTimezonePopover:!1,tzVal:this.timezoneId}},computed:{defaultLang(){return{formatLocale:{months:Wl(),monthsShort:Vl(),weekdays:$l(),weekdaysShort:Ql(),weekdaysMin:Kl(),firstDayOfWeek:Jl()},monthFormat:"MMM"}},defaultPlaceholder(){return this.type==="time"?x("Pick a time"):this.type==="month"?x("Pick a month"):this.type==="year"?x("Pick a year"):this.type==="week"?x("Pick a week"):this.type==="date"?x("Pick a date"):x("Pick a date and a time")},formatTypeMap(){var e;return(e=rs[this.type])!=null?e:rs.date},internalFormatter(){var e;return{getWeek:a=>{const i=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));i.setUTCDate(i.getUTCDate()+4-(i.getUTCDay()||7));const n=new Date(Date.UTC(i.getUTCFullYear(),0,1));return Math.ceil(((i-n)/864e5+1)/7)},...(e=this.formatter)!=null?e:{}}}},methods:{t:x,handleSelectYear(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setFullYear(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},handleSelectMonth(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setMonth(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},toggleTimezonePopover(){this.showTimezoneSelect&&(this.showTimezonePopover=!this.showTimezonePopover)}}};var NF=function(){var e=this,a=e._self._c;return a("DatePicker",e._g(e._b({ref:"datepicker",attrs:{"append-to-body":e.appendToBody,clearable:e.clearable,format:e.format?e.format:e.formatTypeMap,formatter:e.internalFormatter,lang:e.lang?e.lang:e.defaultLang,"minute-step":e.minuteStep,placeholder:e.placeholder?e.placeholder:e.defaultPlaceholder,"popup-class":{"show-week-number":e.showWeekNumber},"show-week-number":e.showWeekNumber,type:e.type,value:e.value},on:{"select-year":e.handleSelectYear,"select-month":e.handleSelectMonth,"update:value":function(i){return e.$emit("update:value",e.value)}},scopedSlots:e._u([{key:"icon-calendar",fn:function(){return[e.showTimezoneSelect?a("NcPopover",{attrs:{"popup-role":"dialog",shown:e.showTimezonePopover,"popover-base-class":"timezone-select__popper"},on:{"update:shown":function(i){e.showTimezonePopover=i}},scopedSlots:e._u([{key:"trigger",fn:function({attrs:i}){return[a("button",e._b({staticClass:"datetime-picker-inline-icon",class:{"datetime-picker-inline-icon--highlighted":e.highlightTimezone},on:{mousedown:function(n){return n.stopPropagation(),n.preventDefault(),(()=>{}).apply(null,arguments)}}},"button",i,!1),[a("Web",{attrs:{size:20}})],1)]}}],null,!1,270852355)},[a("div",{attrs:{role:"dialog","aria-labelledby":e.timezoneDialogHeaderId}},[a("div",{staticClass:"timezone-popover-wrapper__label"},[a("strong",{attrs:{id:e.timezoneDialogHeaderId}},[e._v(" "+e._s(e.t("Please select a time zone:"))+" ")])]),a("NcTimezonePicker",{staticClass:"timezone-popover-wrapper__timezone-select",on:{input:function(i){return e.$emit("update:timezone-id",arguments[0])}},model:{value:e.tzVal,callback:function(i){e.tzVal=i},expression:"tzVal"}})],1)]):a("CalendarBlank",{attrs:{size:20}})]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"DatePicker",e.$attrs,!1),e.$listeners))},BF=[],xF=te(OF,NF,BF,!1,null,"4727c294");const MF=xF.exports;Gs(MF);const jF=["date","datetime-local","month","time","week"],YF={name:"NcDateTimePickerNative",inheritAttrs:!1,props:{value:{type:Date,default:null},id:{type:String,required:!0},type:{type:String,default:"date",validate:e=>jF.includes(e)},label:{type:String,default:"Please choose a date"},min:{type:[Date,Boolean],default:null},max:{type:[Date,Boolean],default:null},hideLabel:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["input"],computed:{formattedValue(){return this.formatValue(this.value)},formattedMin(){return this.min?this.formatValue(this.min):!1},formattedMax(){return this.max?this.formatValue(this.max):!1},listeners(){return{...this.$listeners,input:e=>{if(isNaN(e.target.valueAsNumber))return this.$emit("input",null);if(this.type==="time"){const n=e.target.value;if(this.value===""){const{yyyy:_,MM:l,dd:g}=this.getReadableDate(new Date);return this.$emit("input",new Date("".concat(_,"-").concat(l,"-").concat(g,"T").concat(n)))}const{yyyy:o,MM:s,dd:r}=this.getReadableDate(this.value);return this.$emit("input",new Date("".concat(o,"-").concat(s,"-").concat(r,"T").concat(n)))}else if(this.type==="month"){const n=(new Date(e.target.value).getMonth()+1).toString().padStart(2,"0");if(this.value===""){const{yyyy:l,dd:g,hh:d,mm:f}=this.getReadableDate(new Date);return this.$emit("input",new Date("".concat(l,"-").concat(n,"-").concat(g,"T").concat(d,":").concat(f)))}const{yyyy:o,dd:s,hh:r,mm:_}=this.getReadableDate(this.value);return this.$emit("input",new Date("".concat(o,"-").concat(n,"-").concat(s,"T").concat(r,":").concat(_)))}const a=new Date(e.target.valueAsNumber).getTimezoneOffset()*1e3*60,i=e.target.valueAsNumber+a;return this.$emit("input",new Date(i))}}}},methods:{getReadableDate(e){if(e instanceof Date){const a=e.getFullYear().toString().padStart(4,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return{yyyy:a,MM:i,dd:n,hh:o,mm:s}}},formatValue(e){if(e instanceof Date){const{yyyy:a,MM:i,dd:n,hh:o,mm:s}=this.getReadableDate(e);if(this.type==="datetime-local")return"".concat(a,"-").concat(i,"-").concat(n,"T").concat(o,":").concat(s);if(this.type==="date")return"".concat(a,"-").concat(i,"-").concat(n);if(this.type==="month")return"".concat(a,"-").concat(i);if(this.type==="time")return"".concat(o,":").concat(s);if(this.type==="week"){const r=new Date(a,0,1),_=Math.floor((e-r)/(24*60*60*1e3)),l=Math.ceil(_/7);return"".concat(a,"-W").concat(l)}}else return""}}};var qF=function(){var e=this,a=e._self._c;return a("div",{staticClass:"native-datetime-picker"},[a("label",{class:{"hidden-visually":e.hideLabel},attrs:{for:e.id}},[e._v(e._s(e.label))]),a("input",e._g(e._b({staticClass:"native-datetime-picker--input",class:e.inputClass,attrs:{id:e.id,type:e.type,min:e.formattedMin,max:e.formattedMax},domProps:{value:e.formattedValue}},"input",e.$attrs,!1),e.listeners))])},LF=[],ZF=te(YF,qF,LF,!1,null,"fbe2ff4a");const IF=ZF.exports;Gs(IF);const HF={name:"AlertCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var PF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon alert-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},GF=[],UF=te(HF,PF,GF,!1,null,null);const zF=UF.exports,WF={name:"NcInputField",components:{NcButton:wa,AlertCircle:zF,Check:Mn},inheritAttrs:!1,props:{value:{type:[String,Number],required:!0},type:{type:String,default:"text",validator:e=>["text","password","email","tel","url","search","number"].includes(e)},label:{type:String,default:void 0},labelOutside:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},showTrailingButton:{type:Boolean,default:!1},trailingButtonLabel:{type:String,default:""},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},helperText:{type:String,default:""},disabled:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["update:value","trailing-button-click"],computed:{computedId(){return this.$attrs.id&&this.$attrs.id!==""?this.$attrs.id:this.inputName},inputName(){return"input"+st()},hasLeadingIcon(){return this.$slots.default},hasTrailingIcon(){return this.success},hasPlaceholder(){return this.placeholder!==""&&this.placeholder!==void 0},computedPlaceholder(){return this.hasPlaceholder?this.placeholder:this.label},isValidLabel(){const e=this.label||this.labelOutside;return e||console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."),e},ariaDescribedby(){const e=[];return this.helperText.length>0&&e.push("".concat(this.inputName,"-helper-text")),this.$attrs["aria-describedby"]&&e.push(this.$attrs["aria-describedby"]),e.join(" ")||null}},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},handleInput(e){this.$emit("update:value",this.type==="number"&&typeof this.value=="number"?parseFloat(e.target.value,10):e.target.value)},handleTrailingButtonClick(e){this.$emit("trailing-button-click",e)}}};var VF=function(){var e=this,a=e._self._c;return a("div",{staticClass:"input-field",class:{"input-field--disabled":e.disabled,"input-field--label-outside":e.labelOutside||!e.isValidLabel,"input-field--leading-icon":e.hasLeadingIcon,"input-field--trailing-icon":e.showTrailingButton||e.hasTrailingIcon,"input-field--pill":e.pill}},[a("div",{staticClass:"input-field__main-wrapper"},[a("input",e._g(e._b({ref:"input",staticClass:"input-field__input",class:[e.inputClass,{"input-field__input--success":e.success,"input-field__input--error":e.error}],attrs:{id:e.computedId,type:e.type,disabled:e.disabled,placeholder:e.computedPlaceholder,"aria-describedby":e.ariaDescribedby,"aria-live":"polite"},domProps:{value:e.value.toString()},on:{input:e.handleInput}},"input",e.$attrs,!1),e.$listeners)),!e.labelOutside&&e.isValidLabel?a("label",{staticClass:"input-field__label",attrs:{for:e.computedId}},[e._v(" "+e._s(e.label)+" ")]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLeadingIcon,expression:"hasLeadingIcon"}],staticClass:"input-field__icon input-field__icon--leading"},[e._t("default")],2),e.showTrailingButton?a("NcButton",{staticClass:"input-field__trailing-button",attrs:{type:"tertiary-no-background","aria-label":e.trailingButtonLabel,disabled:e.disabled},on:{click:e.handleTrailingButtonClick},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("trailing-button-icon")]},proxy:!0}],null,!0)}):e.success||e.error?a("div",{staticClass:"input-field__icon input-field__icon--trailing"},[e.success?a("Check",{staticStyle:{color:"var(--color-success-text)"},attrs:{size:20}}):e.error?a("AlertCircle",{staticStyle:{color:"var(--color-error-text)"},attrs:{size:20}}):e._e()],1):e._e()],1),e.helperText.length>0?a("p",{staticClass:"input-field__helper-text-message",class:{"input-field__helper-text-message--error":e.error,"input-field__helper-text-message--success":e.success},attrs:{id:"".concat(e.inputName,"-helper-text")}},[e.success?a("Check",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e.error?a("AlertCircle",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e._e(),e._v(" "+e._s(e.helperText)+" ")],1):e._e()])},$F=[],QF=te(WF,VF,$F,!1,null,"374fffac");const Rt=QF.exports,KF={name:"EyeIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var JF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},XF=[],eu=te(KF,JF,XF,!1,null,null);const au=eu.exports,tu={name:"EyeOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var iu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},nu=[],ou=te(tu,iu,nu,!1,null,null);const su=ou.exports;oe(e1);const ru=Xl().detectUser().setApp("@nextcloud/vue").build(),ls=Wt("core","capabilities",{}).password_policy||null,lu=new Set(Object.keys(Rt.props)),_u={name:"NcPasswordField",components:{NcInputField:Rt,Eye:au,EyeOff:su},inheritAttrs:!1,props:{" ":{},...Rt.props,showTrailingButton:{type:Boolean,default:!0},trailingButtonLabel:void 0,checkPasswordStrength:{type:Boolean,default:!1},minlength:{type:Number,default:0},maxlength:{type:Number,default:null},asText:{type:Boolean,default:!1}},emits:["valid","invalid","update:value"],data(){return{isPasswordHidden:!0,internalHelpMessage:"",isValid:null}},computed:{computedError(){return this.error||this.isValid===!1},computedSuccess(){return this.success||this.isValid===!0},computedHelperText(){return this.helperText.length>0?this.helperText:this.internalHelpMessage},rules(){const{minlength:e}=this;return{minlength:e??ls?.minLength}},trailingButtonLabelPassword(){return this.isPasswordHidden?x("Show password"):x("Hide password")},propsAndAttrsToForward(){return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([e])=>lu.has(e)))}}},watch:{value(e){if(this.checkPasswordStrength){if(ls===null)return;this.checkPassword(e)}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.$emit("update:value",e.target.value)},togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden},checkPassword:Bn(async function(e){try{const{data:a}=await ma.post(Pa("apps/password_policy/api/v1/validate"),{password:e});if(this.isValid=a.ocs.data.passed,a.ocs.data.passed){this.internalHelpMessage=x("Password is secure"),this.$emit("valid");return}this.internalHelpMessage=a.ocs.data.reason,this.$emit("invalid")}catch(a){ru.error("Password policy returned an error",a)}},500)}};var du=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",attrs:{type:e.isPasswordHidden&&!e.asText?"password":"text","trailing-button-label":e.trailingButtonLabelPassword,"helper-text":e.computedHelperText,error:e.computedError,success:e.computedSuccess,minlength:e.rules.minlength,"input-class":{"password-field__input--secure-text":e.isPasswordHidden&&e.asText}},on:{"trailing-button-click":e.togglePasswordVisibility,input:e.handleInput},scopedSlots:e._u([{key:"trailing-button-icon",fn:function(){return[e.isPasswordHidden?a("Eye",{attrs:{size:18}}):a("EyeOff",{attrs:{size:18}})]},proxy:!0}])},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},fu=[],gu=te(_u,du,fu,!1,null,"d984b8e5");const G2=gu.exports,hu={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Fu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},uu=[],cu=te(hu,Fu,uu,!1,null,null);const mu=cu.exports,pu={name:"UndoVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon undo-variant-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Tu=[],Du=te(pu,bu,Tu,!1,null,null);const yu=Du.exports;oe(a1,Us);const Eu=new Set(Object.keys(Rt.props)),ku={name:"NcTextField",components:{NcInputField:Rt,Close:On,ArrowRight:mu,Undo:yu},inheritAttrs:!1,props:{" ":{},...Rt.props,trailingButtonLabel:{type:String,default:""},trailingButtonIcon:{type:String,default:"close",validator:e=>["close","arrowRight","undo"].includes(e)}},emits:["update:value"],computed:{propsAndAttrsToForward(){const e={undo:x("Undo changes"),close:x("Clear text"),arrowRight:x("Save changes")};return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([a])=>Eu.has(a))),trailingButtonLabel:this.trailingButtonLabel||e[this.trailingButtonIcon]}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.$emit("update:value",e.target.value)}}};var Au=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",on:{input:e.handleInput},scopedSlots:e._u([e.type!=="search"?{key:"trailing-button-icon",fn:function(){return[e.trailingButtonIcon==="close"?a("Close",{attrs:{size:20}}):e.trailingButtonIcon==="arrowRight"?a("ArrowRight",{attrs:{size:20}}):e.trailingButtonIcon==="undo"?a("Undo",{attrs:{size:20}}):e._e()]},proxy:!0}:null],null,!0)},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},wu=[],vu=te(ku,Au,wu,!1,null,null);const Su=vu.exports;oe(zs),z1,x("Submit"),oe(t1),Rn("nextcloud").persist().build(),oe(i1);const Ru={name:"NcVNodes",props:{vnodes:{type:[Array,Object],default:null}},render(e){var a,i,n;return this.vnodes||((a=this.$slots)==null?void 0:a.default)||((n=(i=this.$scopedSlots)==null?void 0:i.default)==null?void 0:n.call(i))}},Cu=null,Ou=null;var Nu=te(Ru,Cu,Ou,!1,null,null);const U2=Nu.exports,Bu={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var xu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-up-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Mu=[],ju=te(Bu,xu,Mu,!1,null,null);const Yu=ju.exports;oe(n1),oe(o1),oe(s1,Us),oe(Ws,r1);x("Search…");oe(_1);const qu={name:"CogIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Lu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon cog-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Zu=[],Iu=te(qu,Lu,Zu,!1,null,null);const z2=Iu.exports;x("Settings"),oe(d1),Bn(function(){this.selectedSection="",document.activeElement.className.includes("navigation-list__link")&&document.activeElement.blur()},300);let Hu="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Pu=(e=21)=>{let a="",i=e;for(;i--;)a+=Hu[Math.random()*64|0];return a};function vi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vi=function(a){return typeof a}:vi=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},vi(e)}var Kr={selector:"vue-portal-target-".concat(Pu())},Gu=function(e){return Kr.selector=e},en=typeof window<"u"&&(typeof document>"u"?"undefined":vi(document))!==void 0,Uu=ka.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var a=this.updatedNodes&&this.updatedNodes();return a?a.length===1&&!a[0].text?a:e(this.tag||"DIV",a):e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),zu=ka.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(Kr.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var a=this.$scopedSlots&&this.$scopedSlots.default();return a?a.length<2&&!a[0].text?a:e(this.tag,a):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick(function(){!e.disabled&&e.slotFn!==e.$scopedSlots.default&&(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default})},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(en)return document.querySelector(this.selector)},insertTargetEl:function(){if(en){var e=document.querySelector("body"),a=document.createElement(this.tag);a.id=this.selector.substring(1),e.appendChild(a)}},mount:function(){if(en){var e=this.getTargetEl(),a=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),this.container=new Uu({el:a,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function Wu(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.component(a.name||"portal",zu),a.defaultSelector&&Gu(a.defaultSelector)}typeof window<"u"&&window.Vue&&window.Vue===ka&&ka.use(Wu),oe();const Vu={name:"NcEmptyContent",props:{name:{type:String,default:""},description:{type:String,default:""}},computed:{hasName(){return this.name!==""},hasDescription(){var e;return this.description!==""||((e=this.$slots.description)==null?void 0:e[0])}}};var $u=function(){var e=this,a=e._self._c;return a("div",{staticClass:"empty-content",attrs:{role:"note"}},[e.$slots.icon?a("div",{staticClass:"empty-content__icon",attrs:{"aria-hidden":"true"}},[e._t("icon")],2):e._e(),e._t("name",function(){return[e.hasName?a("span",{staticClass:"empty-content__name"},[e._v(" "+e._s(e.name)+" ")]):e._e()]}),e.hasDescription?a("p",{staticClass:"empty-content__description"},[e._t("description",function(){return[e._v(" "+e._s(e.description)+" ")]})],2):e._e(),e.$slots.action?a("div",{staticClass:"empty-content__action"},[e._t("action")],2):e._e()],2)},Qu=[],Ku=te(Vu,$u,Qu,!1,null,"fede0c71");const io=Ku.exports;oe(f1),oe(g1),oe(h1);const Ju={name:"ArrowLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Xu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},ec=[],ac=te(Ju,Xu,ec,!1,null,null);const Jr=ac.exports;var Xr={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return function(i){function n(s){if(o[s])return o[s].exports;var r=o[s]={i:s,l:!1,exports:{}};return i[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=i,n.c=o,n.d=function(s,r,_){n.o(s,r)||Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:_})},n.n=function(s){var r=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(r,"a",r),r},n.o=function(s,r){return Object.prototype.hasOwnProperty.call(s,r)},n.p="",n(n.s=60)}([function(i,n){function o(r,_){var l=r[1]||"",g=r[3];if(!g)return l;if(_&&typeof btoa=="function"){var d=s(g);return[l].concat(g.sources.map(function(f){return"/*# sourceURL="+g.sourceRoot+f+" */"})).concat([d]).join(`
`)}return[l].join(`
`)}function s(r){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"}i.exports=function(r){var _=[];return _.toString=function(){return this.map(function(l){var g=o(l,r);return l[2]?"@media "+l[2]+"{"+g+"}":g}).join("")},_.i=function(l,g){typeof l=="string"&&(l=[[null,l,""]]);for(var d={},f=0;f<this.length;f++){var h=this[f][0];typeof h=="number"&&(d[h]=!0)}for(f=0;f<l.length;f++){var u=l[f];typeof u[0]=="number"&&d[u[0]]||(g&&!u[2]?u[2]=g:g&&(u[2]="("+u[2]+") and ("+g+")"),_.push(u))}},_}},function(i,n,o){function s(O){for(var G=0;G<O.length;G++){var W=O[G],I=h[W.id];if(I){I.refs++;for(var c=0;c<I.parts.length;c++)I.parts[c](W.parts[c]);for(;c<W.parts.length;c++)I.parts.push(_(W.parts[c]));I.parts.length>W.parts.length&&(I.parts.length=W.parts.length)}else{for(var v=[],c=0;c<W.parts.length;c++)v.push(_(W.parts[c]));h[W.id]={id:W.id,refs:1,parts:v}}}}function r(){var O=document.createElement("style");return O.type="text/css",u.appendChild(O),O}function _(O){var G,W,I=document.querySelector("style["+S+'~="'+O.id+'"]');if(I){if(y)return k;I.parentNode.removeChild(I)}if(j){var c=b++;I=m||(m=r()),G=l.bind(null,I,c,!1),W=l.bind(null,I,c,!0)}else I=r(),G=g.bind(null,I),W=function(){I.parentNode.removeChild(I)};return G(O),function(v){if(v){if(v.css===O.css&&v.media===O.media&&v.sourceMap===O.sourceMap)return;G(O=v)}else W()}}function l(O,G,W,I){var c=W?"":I.css;if(O.styleSheet)O.styleSheet.cssText=Z(G,c);else{var v=document.createTextNode(c),R=O.childNodes;R[G]&&O.removeChild(R[G]),R.length?O.insertBefore(v,R[G]):O.appendChild(v)}}function g(O,G){var W=G.css,I=G.media,c=G.sourceMap;if(I&&O.setAttribute("media",I),w.ssrId&&O.setAttribute(S,G.id),c&&(W+=`
/*# sourceURL=`+c.sources[0]+" */",W+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),O.styleSheet)O.styleSheet.cssText=W;else{for(;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(document.createTextNode(W))}}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=o(64),h={},u=d&&(document.head||document.getElementsByTagName("head")[0]),m=null,b=0,y=!1,k=function(){},w=null,S="data-vue-ssr-id",j=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());i.exports=function(O,G,W,I){y=W,w=I||{};var c=f(O,G);return s(c),function(v){for(var R=[],N=0;N<c.length;N++){var z=c[N],q=h[z.id];q.refs--,R.push(q)}v?(c=f(O,v),s(c)):c=[];for(var N=0;N<R.length;N++){var q=R[N];if(q.refs===0){for(var ie=0;ie<q.parts.length;ie++)q.parts[ie]();delete h[q.id]}}}};var Z=function(){var O=[];return function(G,W){return O[G]=W,O.filter(Boolean).join(`
`)}}()},function(i,n){i.exports=function(o,s,r,_,l,g){var d,f=o=o||{},h=typeof o.default;h!=="object"&&h!=="function"||(d=o,f=o.default);var u=typeof f=="function"?f.options:f;s&&(u.render=s.render,u.staticRenderFns=s.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),l&&(u._scopeId=l);var m;if(g?(m=function(k){k=k||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,k||typeof __VUE_SSR_CONTEXT__>"u"||(k=__VUE_SSR_CONTEXT__),_&&_.call(this,k),k&&k._registeredComponents&&k._registeredComponents.add(g)},u._ssrRegister=m):_&&(m=_),m){var b=u.functional,y=b?u.render:u.beforeCreate;b?(u._injectStyles=m,u.render=function(k,w){return m.call(w),y(k,w)}):u.beforeCreate=y?[].concat(y,m):[m]}return{esModule:d,exports:f,options:u}}},function(i,n,o){function s(l,g){var d,f=l&&l.a;!(d=l&&l.hsl?(0,_.default)(l.hsl):l&&l.hex&&l.hex.length>0?(0,_.default)(l.hex):l&&l.hsv?(0,_.default)(l.hsv):l&&l.rgba?(0,_.default)(l.rgba):l&&l.rgb?(0,_.default)(l.rgb):(0,_.default)(l))||d._a!==void 0&&d._a!==null||d.setAlpha(f||1);var h=d.toHsl(),u=d.toHsv();return h.s===0&&(u.h=h.h=l.h||l.hsl&&l.hsl.h||g||0),{hsl:h,hex:d.toHexString().toUpperCase(),hex8:d.toHex8String().toUpperCase(),rgba:d.toRgb(),hsv:u,oldHue:l.h||g||h.h,source:l.source,a:l.a||d.getAlpha()}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(65),_=function(l){return l&&l.__esModule?l:{default:l}}(r);n.default={props:["value"],data:function(){return{val:s(this.value)}},computed:{colors:{get:function(){return this.val},set:function(l){this.val=l,this.$emit("input",l)}}},watch:{value:function(l){this.val=s(l)}},methods:{colorChange:function(l,g){this.oldHue=this.colors.hsl.h,this.colors=s(l,g||this.oldHue)},isValidHex:function(l){return(0,_.default)(l).isValid()},simpleCheckForValidColor:function(l){for(var g=["r","g","b","a","h","s","l","v"],d=0,f=0,h=0;h<g.length;h++){var u=g[h];l[u]&&(d++,isNaN(l[u])||f++)}if(d===f)return l},paletteUpperCase:function(l){return l.map(function(g){return g.toUpperCase()})},isTransparent:function(l){return(0,_.default)(l).getAlpha()===0}}}},function(i,n){var o=i.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},function(i,n,o){function s(u){o(66)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(36),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(68),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/EditableInput.vue",n.default=h.exports},function(i,n){var o={}.hasOwnProperty;i.exports=function(s,r){return o.call(s,r)}},function(i,n,o){var s=o(8),r=o(18);i.exports=o(9)?function(_,l,g){return s.f(_,l,r(1,g))}:function(_,l,g){return _[l]=g,_}},function(i,n,o){var s=o(16),r=o(42),_=o(25),l=Object.defineProperty;n.f=o(9)?Object.defineProperty:function(g,d,f){if(s(g),d=_(d,!0),s(f),r)try{return l(g,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported!");return"value"in f&&(g[d]=f.value),g}},function(i,n,o){i.exports=!o(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(90),r=o(24);i.exports=function(_){return s(r(_))}},function(i,n,o){var s=o(29)("wks"),r=o(19),_=o(4).Symbol,l=typeof _=="function";(i.exports=function(g){return s[g]||(s[g]=l&&_[g]||(l?_:r)("Symbol."+g))}).store=s},function(i,n){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},function(i,n,o){function s(u){o(111)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(51),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(113),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Hue.vue",n.default=h.exports},function(i,n){i.exports=!0},function(i,n){var o=i.exports={version:"2.6.11"};typeof __e=="number"&&(__e=o)},function(i,n,o){var s=o(12);i.exports=function(r){if(!s(r))throw TypeError(r+" is not an object!");return r}},function(i,n){i.exports=function(o){try{return!!o()}catch{return!0}}},function(i,n){i.exports=function(o,s){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:s}}},function(i,n){var o=0,s=Math.random();i.exports=function(r){return"Symbol(".concat(r===void 0?"":r,")_",(++o+s).toString(36))}},function(i,n,o){function s(u){o(123)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(54),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(127),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Saturation.vue",n.default=h.exports},function(i,n,o){function s(u){o(128)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(55),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(133),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Alpha.vue",n.default=h.exports},function(i,n,o){function s(u){o(130)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(56),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(132),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/common/Checkboard.vue",n.default=h.exports},function(i,n){var o=Math.ceil,s=Math.floor;i.exports=function(r){return isNaN(r=+r)?0:(r>0?s:o)(r)}},function(i,n){i.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},function(i,n,o){var s=o(12);i.exports=function(r,_){if(!s(r))return r;var l,g;if(_&&typeof(l=r.toString)=="function"&&!s(g=l.call(r))||typeof(l=r.valueOf)=="function"&&!s(g=l.call(r))||!_&&typeof(l=r.toString)=="function"&&!s(g=l.call(r)))return g;throw TypeError("Can't convert object to primitive value")}},function(i,n){i.exports={}},function(i,n,o){var s=o(46),r=o(30);i.exports=Object.keys||function(_){return s(_,r)}},function(i,n,o){var s=o(29)("keys"),r=o(19);i.exports=function(_){return s[_]||(s[_]=r(_))}},function(i,n,o){var s=o(15),r=o(4),_=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(i.exports=function(l,g){return _[l]||(_[l]=g!==void 0?g:{})})("versions",[]).push({version:s.version,mode:o(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(i,n){i.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(i,n,o){var s=o(8).f,r=o(6),_=o(11)("toStringTag");i.exports=function(l,g,d){l&&!r(l=d?l:l.prototype,_)&&s(l,_,{configurable:!0,value:g})}},function(i,n,o){n.f=o(11)},function(i,n,o){var s=o(4),r=o(15),_=o(14),l=o(32),g=o(8).f;i.exports=function(d){var f=r.Symbol||(r.Symbol=_?{}:s.Symbol||{});d.charAt(0)=="_"||d in f||g(f,d,{value:l.f(d)})}},function(i,n){n.f={}.propertyIsEnumerable},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];n.default={name:"Compact",mixins:[_.default],props:{palette:{type:Array,default:function(){return d}}},components:{"ed-in":g.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(f){this.colorChange({hex:f,source:"hex"})}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(s){if(!(this.max!==void 0&&+s>this.max))return s;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(s){this.handleChange(s.target.value)},handleChange:function(s){var r={};r[this.label]=s,r.hex===void 0&&r["#"]===void 0?this.$emit("change",r):s.length>5&&this.$emit("change",r)},handleKeyDown:function(s){var r=this.val,_=Number(r);if(_){var l=this.arrowOffset||1;s.keyCode===38&&(r=_+l,this.handleChange(r),s.preventDefault()),s.keyCode===40&&(r=_-l,this.handleChange(r),s.preventDefault())}}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(3),r=function(l){return l&&l.__esModule?l:{default:l}}(s),_=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];n.default={name:"Grayscale",mixins:[r.default],props:{palette:{type:Array,default:function(){return _}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(l){this.colorChange({hex:l,source:"hex"})}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(5),_=s(r),l=o(3),g=s(l);n.default={name:"Material",mixins:[g.default],components:{"ed-in":_.default},methods:{onChange:function(d){d&&(d.hex?this.isValidHex(d.hex)&&this.colorChange({hex:d.hex,source:"hex"}):(d.r||d.g||d.b)&&this.colorChange({r:d.r||this.colors.rgba.r,g:d.g||this.colors.rgba.g,b:d.b||this.colors.rgba.b,a:d.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(81),_=s(r),l=o(3),g=s(l),d=o(13),f=s(d);n.default={name:"Slider",mixins:[g.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:f.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(h){return(h===void 0?"undefined":(0,_.default)(h))!=="object"?{s:.5,l:h}:h})}},methods:{isActive:function(h,u){var m=this.colors.hsl;return m.l===1&&h.l===1||m.l===0&&h.l===0||Math.abs(m.l-h.l)<.01&&Math.abs(m.s-h.s)<.01},hueChange:function(h){this.colorChange(h)},handleSwClick:function(h,u){this.colorChange({h:this.colors.hsl.h,s:u.s,l:u.l,source:"hsl"})}}}},function(i,n,o){var s=o(14),r=o(41),_=o(44),l=o(7),g=o(26),d=o(88),f=o(31),h=o(95),u=o(11)("iterator"),m=!([].keys&&"next"in[].keys()),b=function(){return this};i.exports=function(y,k,w,S,j,Z,O){d(w,k,S);var G,W,I,c=function(ne){if(!m&&ne in z)return z[ne];switch(ne){case"keys":case"values":return function(){return new w(this,ne)}}return function(){return new w(this,ne)}},v=k+" Iterator",R=j=="values",N=!1,z=y.prototype,q=z[u]||z["@@iterator"]||j&&z[j],ie=q||c(j),ee=j?R?c("entries"):ie:void 0,fe=k=="Array"&&z.entries||q;if(fe&&(I=h(fe.call(new y)))!==Object.prototype&&I.next&&(f(I,v,!0),s||typeof I[u]=="function"||l(I,u,b)),R&&q&&q.name!=="values"&&(N=!0,ie=function(){return q.call(this)}),s&&!O||!m&&!N&&z[u]||l(z,u,ie),g[k]=ie,g[v]=b,j)if(G={values:R?ie:c("values"),keys:Z?ie:c("keys"),entries:ee},O)for(W in G)W in z||_(z,W,G[W]);else r(r.P+r.F*(m||N),k,G);return G}},function(i,n,o){var s=o(4),r=o(15),_=o(86),l=o(7),g=o(6),d=function(f,h,u){var m,b,y,k=f&d.F,w=f&d.G,S=f&d.S,j=f&d.P,Z=f&d.B,O=f&d.W,G=w?r:r[h]||(r[h]={}),W=G.prototype,I=w?s:S?s[h]:(s[h]||{}).prototype;w&&(u=h);for(m in u)(b=!k&&I&&I[m]!==void 0)&&g(G,m)||(y=b?I[m]:u[m],G[m]=w&&typeof I[m]!="function"?u[m]:Z&&b?_(y,s):O&&I[m]==y?function(c){var v=function(R,N,z){if(this instanceof c){switch(arguments.length){case 0:return new c;case 1:return new c(R);case 2:return new c(R,N)}return new c(R,N,z)}return c.apply(this,arguments)};return v.prototype=c.prototype,v}(y):j&&typeof y=="function"?_(Function.call,y):y,j&&((G.virtual||(G.virtual={}))[m]=y,f&d.R&&W&&!W[m]&&l(W,m,y)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,i.exports=d},function(i,n,o){i.exports=!o(9)&&!o(17)(function(){return Object.defineProperty(o(43)("div"),"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(12),r=o(4).document,_=s(r)&&s(r.createElement);i.exports=function(l){return _?r.createElement(l):{}}},function(i,n,o){i.exports=o(7)},function(i,n,o){var s=o(16),r=o(89),_=o(30),l=o(28)("IE_PROTO"),g=function(){},d=function(){var f,h=o(43)("iframe"),u=_.length;for(h.style.display="none",o(94).appendChild(h),h.src="javascript:",f=h.contentWindow.document,f.open(),f.write("<script>document.F=Object<\/script>"),f.close(),d=f.F;u--;)delete d.prototype[_[u]];return d()};i.exports=Object.create||function(f,h){var u;return f!==null?(g.prototype=s(f),u=new g,g.prototype=null,u[l]=f):u=d(),h===void 0?u:r(u,h)}},function(i,n,o){var s=o(6),r=o(10),_=o(91)(!1),l=o(28)("IE_PROTO");i.exports=function(g,d){var f,h=r(g),u=0,m=[];for(f in h)f!=l&&s(h,f)&&m.push(f);for(;d.length>u;)s(h,f=d[u++])&&(~_(m,f)||m.push(f));return m}},function(i,n){var o={}.toString;i.exports=function(s){return o.call(s).slice(8,-1)}},function(i,n,o){var s=o(24);i.exports=function(r){return Object(s(r))}},function(i,n){n.f=Object.getOwnPropertySymbols},function(i,n,o){var s=o(46),r=o(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(_){return s(_,r)}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var s=this.value.hsl.h;return s!==0&&s-this.oldHue>0&&(this.pullDirection="right"),s!==0&&s-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=s,this.value},directionClass:function(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop:function(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(s,r){!r&&s.preventDefault();var _=this.$refs.container;if(_){var l,g,d=_.clientWidth,f=_.clientHeight,h=_.getBoundingClientRect().left+window.pageXOffset,u=_.getBoundingClientRect().top+window.pageYOffset,m=s.pageX||(s.touches?s.touches[0].pageX:0),b=s.pageY||(s.touches?s.touches[0].pageY:0),y=m-h,k=b-u;this.direction==="vertical"?(k<0?l=360:k>f?l=0:(g=-100*k/f+100,l=360*g/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(y<0?l=0:y>d?l=360:(g=100*y/d,l=360*g/100),this.colors.hsl.h!==l&&this.$emit("change",{h:l,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(s){this.handleChange(s,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(s){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(118),_=s(r),l=o(3),g=s(l),d=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],f=["900","700","500","300","100"],h=function(){var u=[];return d.forEach(function(m){var b=[];m.toLowerCase()==="black"||m.toLowerCase()==="white"?b=b.concat(["#000000","#FFFFFF"]):f.forEach(function(y){var k=_.default[m][y];b.push(k.toUpperCase())}),u.push(b)}),u}();n.default={name:"Swatches",mixins:[g.default],props:{palette:{type:Array,default:function(){return h}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(u){return u.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(u){this.colorChange({hex:u,source:"hex"})}}}},function(i,n,o){function s(y){return y&&y.__esModule?y:{default:y}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),u=s(h),m=o(21),b=s(m);n.default={name:"Photoshop",mixins:[_.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:f.default,hue:u.default,alpha:b.default,"ed-in":g.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var y=this.colors.hsv;return{h:y.h.toFixed(),s:(100*y.s).toFixed(),v:(100*y.v).toFixed()}},hex:function(){var y=this.colors.hex;return y&&y.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(y){this.colorChange(y)},inputChange:function(y){y&&(y["#"]?this.isValidHex(y["#"])&&this.colorChange({hex:y["#"],source:"hex"}):y.r||y.g||y.b||y.a?this.colorChange({r:y.r||this.colors.rgba.r,g:y.g||this.colors.rgba.g,b:y.b||this.colors.rgba.b,a:y.a||this.colors.rgba.a,source:"rgba"}):(y.h||y.s||y.v)&&this.colorChange({h:y.h||this.colors.hsv.h,s:y.s/100||this.colors.hsv.s,v:y.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(125),_=s(r),l=o(126),g=s(l);n.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,g.default)(function(d,f){d(f)},20,{leading:!0,trailing:!1}),handleChange:function(d,f){!f&&d.preventDefault();var h=this.$refs.container;if(h){var u=h.clientWidth,m=h.clientHeight,b=h.getBoundingClientRect().left+window.pageXOffset,y=h.getBoundingClientRect().top+window.pageYOffset,k=d.pageX||(d.touches?d.touches[0].pageX:0),w=d.pageY||(d.touches?d.touches[0].pageY:0),S=(0,_.default)(k-b,0,u),j=(0,_.default)(w-y,0,m),Z=S/u,O=(0,_.default)(-j/m+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:Z,v:O,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(d){this.$emit("change",d)},handleMouseDown:function(d){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(d){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(22),r=function(_){return _&&_.__esModule?_:{default:_}}(s);n.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:r.default},computed:{colors:function(){return this.value},gradientColor:function(){var _=this.colors.rgba,l=[_.r,_.g,_.b].join(",");return"linear-gradient(to right, rgba("+l+", 0) 0%, rgba("+l+", 1) 100%)"}},methods:{handleChange:function(_,l){!l&&_.preventDefault();var g=this.$refs.container;if(g){var d,f=g.clientWidth,h=g.getBoundingClientRect().left+window.pageXOffset,u=_.pageX||(_.touches?_.touches[0].pageX:0),m=u-h;d=m<0?0:m>f?1:Math.round(100*m/f)/100,this.colors.a!==d&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:d,source:"rgba"})}},handleMouseDown:function(_){this.handleChange(_,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(l,g,d){if(typeof document>"u")return null;var f=document.createElement("canvas");f.width=f.height=2*d;var h=f.getContext("2d");return h?(h.fillStyle=l,h.fillRect(0,0,f.width,f.height),h.fillStyle=g,h.fillRect(0,0,d,d),h.translate(d,d),h.fillRect(0,0,d,d),f.toDataURL()):null}function r(l,g,d){var f=l+","+g+","+d;if(_[f])return _[f];var h=s(l,g,d);return _[f]=h,h}Object.defineProperty(n,"__esModule",{value:!0});var _={};n.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+r(this.white,this.grey,this.size)+")"}}}}},function(i,n,o){function s(S){return S&&S.__esModule?S:{default:S}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),u=s(h),m=o(21),b=s(m),y=o(22),k=s(y),w=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];n.default={name:"Sketch",mixins:[_.default],components:{saturation:f.default,hue:u.default,alpha:b.default,"ed-in":g.default,checkboard:k.default},props:{presetColors:{type:Array,default:function(){return w}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var S=void 0;return S=this.colors.a<1?this.colors.hex8:this.colors.hex,S.replace("#","")},activeColor:function(){var S=this.colors.rgba;return"rgba("+[S.r,S.g,S.b,S.a].join(",")+")"}},methods:{handlePreset:function(S){this.colorChange({hex:S,source:"hex"})},childChange:function(S){this.colorChange(S)},inputChange:function(S){S&&(S.hex?this.isValidHex(S.hex)&&this.colorChange({hex:S.hex,source:"hex"}):(S.r||S.g||S.b||S.a)&&this.colorChange({r:S.r||this.colors.rgba.r,g:S.g||this.colors.rgba.g,b:S.b||this.colors.rgba.b,a:S.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(w){return w&&w.__esModule?w:{default:w}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(3),_=s(r),l=o(5),g=s(l),d=o(20),f=s(d),h=o(13),u=s(h),m=o(21),b=s(m),y=o(22),k=s(y);n.default={name:"Chrome",mixins:[_.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:f.default,hue:u.default,alpha:b.default,"ed-in":g.default,checkboard:k.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var w=this.colors.hsl,S=w.h,j=w.s,Z=w.l;return{h:S.toFixed(),s:(100*j).toFixed()+"%",l:(100*Z).toFixed()+"%"}},activeColor:function(){var w=this.colors.rgba;return"rgba("+[w.r,w.g,w.b,w.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(w){this.colorChange(w)},inputChange:function(w){if(w){if(w.hex)this.isValidHex(w.hex)&&this.colorChange({hex:w.hex,source:"hex"});else if(w.r||w.g||w.b||w.a)this.colorChange({r:w.r||this.colors.rgba.r,g:w.g||this.colors.rgba.g,b:w.b||this.colors.rgba.b,a:w.a||this.colors.rgba.a,source:"rgba"});else if(w.h||w.s||w.l){var S=w.s?w.s.replace("%","")/100:this.colors.hsl.s,j=w.l?w.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:w.h||this.colors.hsl.h,s:S,l:j,source:"hsl"})}}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(n,"__esModule",{value:!0});var r=o(5),_=s(r),l=o(3),g=s(l),d=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];n.default={name:"Twitter",mixins:[g.default],components:{editableInput:_.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return d}},triangle:{default:"top-left",validator:function(f){return["hide","top-left","top-right"].includes(f)}}},computed:{hsv:function(){var f=this.colors.hsv;return{h:f.h.toFixed(),s:(100*f.s).toFixed(),v:(100*f.v).toFixed()}},hex:function(){var f=this.colors.hex;return f&&f.replace("#","")}},methods:{equal:function(f){return f.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(f){this.colorChange({hex:f,source:"hex"})},inputChange:function(f){f&&(f["#"]?this.isValidHex(f["#"])&&this.colorChange({hex:f["#"],source:"hex"}):f.r||f.g||f.b||f.a?this.colorChange({r:f.r||this.colors.rgba.r,g:f.g||this.colors.rgba.g,b:f.b||this.colors.rgba.b,a:f.a||this.colors.rgba.a,source:"rgba"}):(f.h||f.s||f.v)&&this.colorChange({h:f.h||this.colors.hsv.h,s:f.s/100||this.colors.hsv.s,v:f.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(i,n,o){function s(ke){return ke&&ke.__esModule?ke:{default:ke}}var r=o(61),_=s(r),l=o(70),g=s(l),d=o(74),f=s(d),h=o(78),u=s(h),m=o(115),b=s(m),y=o(120),k=s(y),w=o(135),S=s(w),j=o(139),Z=s(j),O=o(143),G=s(O),W=o(21),I=s(W),c=o(22),v=s(c),R=o(5),N=s(R),z=o(13),q=s(z),ie=o(20),ee=s(ie),fe=o(3),ne=s(fe),ce={version:"2.8.1",Compact:_.default,Grayscale:g.default,Twitter:G.default,Material:f.default,Slider:u.default,Swatches:b.default,Photoshop:k.default,Sketch:S.default,Chrome:Z.default,Alpha:I.default,Checkboard:v.default,EditableInput:N.default,Hue:q.default,Saturation:ee.default,ColorMixin:ne.default};i.exports=ce},function(i,n,o){function s(u){o(62)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(35),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(69),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Compact.vue",n.default=h.exports},function(i,n,o){var s=o(63);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("6ce8a5a8",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n){i.exports=function(o,s){for(var r=[],_={},l=0;l<s.length;l++){var g=s[l],d=g[0],f=g[1],h=g[2],u=g[3],m={id:o+":"+l,css:f,media:h,sourceMap:u};_[d]?_[d].parts.push(m):r.push(_[d]={id:d,parts:[m]})}return r}},function(i,n,o){var s;(function(r){function _(p,A){if(p=p||"",A=A||{},p instanceof _)return p;if(!(this instanceof _))return new _(p,A);var E=l(p);this._originalInput=p,this._r=E.r,this._g=E.g,this._b=E.b,this._a=E.a,this._roundA=J(100*this._a)/100,this._format=A.format||E.format,this._gradientType=A.gradientType,this._r<1&&(this._r=J(this._r)),this._g<1&&(this._g=J(this._g)),this._b<1&&(this._b=J(this._b)),this._ok=E.ok,this._tc_id=Ge++}function l(p){var A={r:0,g:0,b:0},E=1,Y=null,Q=null,V=null,le=!1,ge=!1;return typeof p=="string"&&(p=Ye(p)),typeof p=="object"&&(Ce(p.r)&&Ce(p.g)&&Ce(p.b)?(A=g(p.r,p.g,p.b),le=!0,ge=String(p.r).substr(-1)==="%"?"prgb":"rgb"):Ce(p.h)&&Ce(p.s)&&Ce(p.v)?(Y=ke(p.s),Q=ke(p.v),A=u(p.h,Y,Q),le=!0,ge="hsv"):Ce(p.h)&&Ce(p.s)&&Ce(p.l)&&(Y=ke(p.s),V=ke(p.l),A=f(p.h,Y,V),le=!0,ge="hsl"),p.hasOwnProperty("a")&&(E=p.a)),E=z(E),{ok:le,format:p.format||ge,r:we(255,_e(A.r,0)),g:we(255,_e(A.g,0)),b:we(255,_e(A.b,0)),a:E}}function g(p,A,E){return{r:255*q(p,255),g:255*q(A,255),b:255*q(E,255)}}function d(p,A,E){p=q(p,255),A=q(A,255),E=q(E,255);var Y,Q,V=_e(p,A,E),le=we(p,A,E),ge=(V+le)/2;if(V==le)Y=Q=0;else{var me=V-le;switch(Q=ge>.5?me/(2-V-le):me/(V+le),V){case p:Y=(A-E)/me+(A<E?6:0);break;case A:Y=(E-p)/me+2;break;case E:Y=(p-A)/me+4}Y/=6}return{h:Y,s:Q,l:ge}}function f(p,A,E){function Y(Ue,P,$){return $<0&&($+=1),$>1&&($-=1),$<1/6?Ue+6*(P-Ue)*$:$<.5?P:$<2/3?Ue+(P-Ue)*(2/3-$)*6:Ue}var Q,V,le;if(p=q(p,360),A=q(A,100),E=q(E,100),A===0)Q=V=le=E;else{var ge=E<.5?E*(1+A):E+A-E*A,me=2*E-ge;Q=Y(me,ge,p+1/3),V=Y(me,ge,p),le=Y(me,ge,p-1/3)}return{r:255*Q,g:255*V,b:255*le}}function h(p,A,E){p=q(p,255),A=q(A,255),E=q(E,255);var Y,Q,V=_e(p,A,E),le=we(p,A,E),ge=V,me=V-le;if(Q=V===0?0:me/V,V==le)Y=0;else{switch(V){case p:Y=(A-E)/me+(A<E?6:0);break;case A:Y=(E-p)/me+2;break;case E:Y=(p-A)/me+4}Y/=6}return{h:Y,s:Q,v:ge}}function u(p,A,E){p=6*q(p,360),A=q(A,100),E=q(E,100);var Y=r.floor(p),Q=p-Y,V=E*(1-A),le=E*(1-Q*A),ge=E*(1-(1-Q)*A),me=Y%6;return{r:255*[E,le,V,V,ge,E][me],g:255*[ge,E,E,le,V,V][me],b:255*[V,V,ge,E,E,le][me]}}function m(p,A,E,Y){var Q=[ce(J(p).toString(16)),ce(J(A).toString(16)),ce(J(E).toString(16))];return Y&&Q[0].charAt(0)==Q[0].charAt(1)&&Q[1].charAt(0)==Q[1].charAt(1)&&Q[2].charAt(0)==Q[2].charAt(1)?Q[0].charAt(0)+Q[1].charAt(0)+Q[2].charAt(0):Q.join("")}function b(p,A,E,Y,Q){var V=[ce(J(p).toString(16)),ce(J(A).toString(16)),ce(J(E).toString(16)),ce(ue(Y))];return Q&&V[0].charAt(0)==V[0].charAt(1)&&V[1].charAt(0)==V[1].charAt(1)&&V[2].charAt(0)==V[2].charAt(1)&&V[3].charAt(0)==V[3].charAt(1)?V[0].charAt(0)+V[1].charAt(0)+V[2].charAt(0)+V[3].charAt(0):V.join("")}function y(p,A,E,Y){return[ce(ue(Y)),ce(J(p).toString(16)),ce(J(A).toString(16)),ce(J(E).toString(16))].join("")}function k(p,A){A=A===0?0:A||10;var E=_(p).toHsl();return E.s-=A/100,E.s=ie(E.s),_(E)}function w(p,A){A=A===0?0:A||10;var E=_(p).toHsl();return E.s+=A/100,E.s=ie(E.s),_(E)}function S(p){return _(p).desaturate(100)}function j(p,A){A=A===0?0:A||10;var E=_(p).toHsl();return E.l+=A/100,E.l=ie(E.l),_(E)}function Z(p,A){A=A===0?0:A||10;var E=_(p).toRgb();return E.r=_e(0,we(255,E.r-J(-A/100*255))),E.g=_e(0,we(255,E.g-J(-A/100*255))),E.b=_e(0,we(255,E.b-J(-A/100*255))),_(E)}function O(p,A){A=A===0?0:A||10;var E=_(p).toHsl();return E.l-=A/100,E.l=ie(E.l),_(E)}function G(p,A){var E=_(p).toHsl(),Y=(E.h+A)%360;return E.h=Y<0?360+Y:Y,_(E)}function W(p){var A=_(p).toHsl();return A.h=(A.h+180)%360,_(A)}function I(p){var A=_(p).toHsl(),E=A.h;return[_(p),_({h:(E+120)%360,s:A.s,l:A.l}),_({h:(E+240)%360,s:A.s,l:A.l})]}function c(p){var A=_(p).toHsl(),E=A.h;return[_(p),_({h:(E+90)%360,s:A.s,l:A.l}),_({h:(E+180)%360,s:A.s,l:A.l}),_({h:(E+270)%360,s:A.s,l:A.l})]}function v(p){var A=_(p).toHsl(),E=A.h;return[_(p),_({h:(E+72)%360,s:A.s,l:A.l}),_({h:(E+216)%360,s:A.s,l:A.l})]}function R(p,A,E){A=A||6,E=E||30;var Y=_(p).toHsl(),Q=360/E,V=[_(p)];for(Y.h=(Y.h-(Q*A>>1)+720)%360;--A;)Y.h=(Y.h+Q)%360,V.push(_(Y));return V}function N(p,A){A=A||6;for(var E=_(p).toHsv(),Y=E.h,Q=E.s,V=E.v,le=[],ge=1/A;A--;)le.push(_({h:Y,s:Q,v:V})),V=(V+ge)%1;return le}function z(p){return p=parseFloat(p),(isNaN(p)||p<0||p>1)&&(p=1),p}function q(p,A){fe(p)&&(p="100%");var E=ne(p);return p=we(A,_e(0,parseFloat(p))),E&&(p=parseInt(p*A,10)/100),r.abs(p-A)<1e-6?1:p%A/parseFloat(A)}function ie(p){return we(1,_e(0,p))}function ee(p){return parseInt(p,16)}function fe(p){return typeof p=="string"&&p.indexOf(".")!=-1&&parseFloat(p)===1}function ne(p){return typeof p=="string"&&p.indexOf("%")!=-1}function ce(p){return p.length==1?"0"+p:""+p}function ke(p){return p<=1&&(p=100*p+"%"),p}function ue(p){return r.round(255*parseFloat(p)).toString(16)}function Pe(p){return ee(p)/255}function Ce(p){return!!Me.CSS_UNIT.exec(p)}function Ye(p){p=p.replace(ve,"").replace(Te,"").toLowerCase();var A=!1;if(qe[p])p=qe[p],A=!0;else if(p=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var E;return(E=Me.rgb.exec(p))?{r:E[1],g:E[2],b:E[3]}:(E=Me.rgba.exec(p))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=Me.hsl.exec(p))?{h:E[1],s:E[2],l:E[3]}:(E=Me.hsla.exec(p))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=Me.hsv.exec(p))?{h:E[1],s:E[2],v:E[3]}:(E=Me.hsva.exec(p))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=Me.hex8.exec(p))?{r:ee(E[1]),g:ee(E[2]),b:ee(E[3]),a:Pe(E[4]),format:A?"name":"hex8"}:(E=Me.hex6.exec(p))?{r:ee(E[1]),g:ee(E[2]),b:ee(E[3]),format:A?"name":"hex"}:(E=Me.hex4.exec(p))?{r:ee(E[1]+""+E[1]),g:ee(E[2]+""+E[2]),b:ee(E[3]+""+E[3]),a:Pe(E[4]+""+E[4]),format:A?"name":"hex8"}:!!(E=Me.hex3.exec(p))&&{r:ee(E[1]+""+E[1]),g:ee(E[2]+""+E[2]),b:ee(E[3]+""+E[3]),format:A?"name":"hex"}}function be(p){var A,E;return p=p||{level:"AA",size:"small"},A=(p.level||"AA").toUpperCase(),E=(p.size||"small").toLowerCase(),A!=="AA"&&A!=="AAA"&&(A="AA"),E!=="small"&&E!=="large"&&(E="small"),{level:A,size:E}}var ve=/^\s+/,Te=/\s+$/,Ge=0,J=r.round,we=r.min,_e=r.max,Oe=r.random;_.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var p=this.toRgb();return(299*p.r+587*p.g+114*p.b)/1e3},getLuminance:function(){var p,A,E,Y,Q,V,le=this.toRgb();return p=le.r/255,A=le.g/255,E=le.b/255,Y=p<=.03928?p/12.92:r.pow((p+.055)/1.055,2.4),Q=A<=.03928?A/12.92:r.pow((A+.055)/1.055,2.4),V=E<=.03928?E/12.92:r.pow((E+.055)/1.055,2.4),.2126*Y+.7152*Q+.0722*V},setAlpha:function(p){return this._a=z(p),this._roundA=J(100*this._a)/100,this},toHsv:function(){var p=h(this._r,this._g,this._b);return{h:360*p.h,s:p.s,v:p.v,a:this._a}},toHsvString:function(){var p=h(this._r,this._g,this._b),A=J(360*p.h),E=J(100*p.s),Y=J(100*p.v);return this._a==1?"hsv("+A+", "+E+"%, "+Y+"%)":"hsva("+A+", "+E+"%, "+Y+"%, "+this._roundA+")"},toHsl:function(){var p=d(this._r,this._g,this._b);return{h:360*p.h,s:p.s,l:p.l,a:this._a}},toHslString:function(){var p=d(this._r,this._g,this._b),A=J(360*p.h),E=J(100*p.s),Y=J(100*p.l);return this._a==1?"hsl("+A+", "+E+"%, "+Y+"%)":"hsla("+A+", "+E+"%, "+Y+"%, "+this._roundA+")"},toHex:function(p){return m(this._r,this._g,this._b,p)},toHexString:function(p){return"#"+this.toHex(p)},toHex8:function(p){return b(this._r,this._g,this._b,this._a,p)},toHex8String:function(p){return"#"+this.toHex8(p)},toRgb:function(){return{r:J(this._r),g:J(this._g),b:J(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+J(this._r)+", "+J(this._g)+", "+J(this._b)+")":"rgba("+J(this._r)+", "+J(this._g)+", "+J(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:J(100*q(this._r,255))+"%",g:J(100*q(this._g,255))+"%",b:J(100*q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+J(100*q(this._r,255))+"%, "+J(100*q(this._g,255))+"%, "+J(100*q(this._b,255))+"%)":"rgba("+J(100*q(this._r,255))+"%, "+J(100*q(this._g,255))+"%, "+J(100*q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Qe[m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(p){var A="#"+y(this._r,this._g,this._b,this._a),E=A,Y=this._gradientType?"GradientType = 1, ":"";if(p){var Q=_(p);E="#"+y(Q._r,Q._g,Q._b,Q._a)}return"progid:DXImageTransform.Microsoft.gradient("+Y+"startColorstr="+A+",endColorstr="+E+")"},toString:function(p){var A=!!p;p=p||this._format;var E=!1,Y=this._a<1&&this._a>=0;return A||!Y||p!=="hex"&&p!=="hex6"&&p!=="hex3"&&p!=="hex4"&&p!=="hex8"&&p!=="name"?(p==="rgb"&&(E=this.toRgbString()),p==="prgb"&&(E=this.toPercentageRgbString()),p!=="hex"&&p!=="hex6"||(E=this.toHexString()),p==="hex3"&&(E=this.toHexString(!0)),p==="hex4"&&(E=this.toHex8String(!0)),p==="hex8"&&(E=this.toHex8String()),p==="name"&&(E=this.toName()),p==="hsl"&&(E=this.toHslString()),p==="hsv"&&(E=this.toHsvString()),E||this.toHexString()):p==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return _(this.toString())},_applyModification:function(p,A){var E=p.apply(null,[this].concat([].slice.call(A)));return this._r=E._r,this._g=E._g,this._b=E._b,this.setAlpha(E._a),this},lighten:function(){return this._applyModification(j,arguments)},brighten:function(){return this._applyModification(Z,arguments)},darken:function(){return this._applyModification(O,arguments)},desaturate:function(){return this._applyModification(k,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(S,arguments)},spin:function(){return this._applyModification(G,arguments)},_applyCombination:function(p,A){return p.apply(null,[this].concat([].slice.call(A)))},analogous:function(){return this._applyCombination(R,arguments)},complement:function(){return this._applyCombination(W,arguments)},monochromatic:function(){return this._applyCombination(N,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(I,arguments)},tetrad:function(){return this._applyCombination(c,arguments)}},_.fromRatio=function(p,A){if(typeof p=="object"){var E={};for(var Y in p)p.hasOwnProperty(Y)&&(E[Y]=Y==="a"?p[Y]:ke(p[Y]));p=E}return _(p,A)},_.equals=function(p,A){return!(!p||!A)&&_(p).toRgbString()==_(A).toRgbString()},_.random=function(){return _.fromRatio({r:Oe(),g:Oe(),b:Oe()})},_.mix=function(p,A,E){E=E===0?0:E||50;var Y=_(p).toRgb(),Q=_(A).toRgb(),V=E/100;return _({r:(Q.r-Y.r)*V+Y.r,g:(Q.g-Y.g)*V+Y.g,b:(Q.b-Y.b)*V+Y.b,a:(Q.a-Y.a)*V+Y.a})},_.readability=function(p,A){var E=_(p),Y=_(A);return(r.max(E.getLuminance(),Y.getLuminance())+.05)/(r.min(E.getLuminance(),Y.getLuminance())+.05)},_.isReadable=function(p,A,E){var Y,Q,V=_.readability(p,A);switch(Q=!1,Y=be(E),Y.level+Y.size){case"AAsmall":case"AAAlarge":Q=V>=4.5;break;case"AAlarge":Q=V>=3;break;case"AAAsmall":Q=V>=7}return Q},_.mostReadable=function(p,A,E){var Y,Q,V,le,ge=null,me=0;E=E||{},Q=E.includeFallbackColors,V=E.level,le=E.size;for(var Ue=0;Ue<A.length;Ue++)(Y=_.readability(p,A[Ue]))>me&&(me=Y,ge=_(A[Ue]));return _.isReadable(p,ge,{level:V,size:le})||!Q?ge:(E.includeFallbackColors=!1,_.mostReadable(p,["#fff","#000"],E))};var qe=_.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Qe=_.hexNames=function(p){var A={};for(var E in p)p.hasOwnProperty(E)&&(A[p[E]]=E);return A}(qe),Me=function(){var p="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",A="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?",E="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?";return{CSS_UNIT:new RegExp(p),rgb:new RegExp("rgb"+A),rgba:new RegExp("rgba"+E),hsl:new RegExp("hsl"+A),hsla:new RegExp("hsla"+E),hsv:new RegExp("hsv"+A),hsva:new RegExp("hsva"+E),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();i!==void 0&&i.exports?i.exports=_:(s=function(){return _}.call(n,o,n,i))!==void 0&&(i.exports=s)})(Math)},function(i,n,o){var s=o(67);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("0f73e73c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-editable-input"},[d("input",{directives:[{name:"model",rawName:"v-model",value:l.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":l.labelId},domProps:{value:l.val},on:{keydown:l.handleKeyDown,input:[function(f){f.target.composing||(l.val=f.target.value)},l.update]}}),l._v(" "),d("span",{staticClass:"vc-input__label",attrs:{for:l.label,id:l.labelId}},[l._v(l._s(l.labelSpanText))]),l._v(" "),d("span",{staticClass:"vc-input__desc"},[l._v(l._s(l.desc))])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[d("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},l._l(l.paletteUpperCase(l.palette),function(f){return d("li",{key:f,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":f==="#FFFFFF"},style:{background:f},attrs:{role:"option","aria-label":"color:"+f,"aria-selected":f===l.pick},on:{click:function(h){return l.handlerClick(f)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:f===l.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(71)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(37),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(73),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Grayscale.vue",n.default=h.exports},function(i,n,o){var s=o(72);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("21ddbb74",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[d("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},l._l(l.paletteUpperCase(l.palette),function(f){return d("li",{key:f,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":f=="#FFFFFF"},style:{background:f},attrs:{role:"option","aria-label":"Color:"+f,"aria-selected":f===l.pick},on:{click:function(h){return l.handlerClick(f)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:f===l.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(75)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(38),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(77),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Material.vue",n.default=h.exports},function(i,n,o){var s=o(76);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1ff3af73",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[d("ed-in",{staticClass:"vc-material-hex",style:{borderColor:l.colors.hex},attrs:{label:"hex"},on:{change:l.onChange},model:{value:l.colors.hex,callback:function(f){l.$set(l.colors,"hex",f)},expression:"colors.hex"}}),l._v(" "),d("div",{staticClass:"vc-material-split"},[d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"r"},on:{change:l.onChange},model:{value:l.colors.rgba.r,callback:function(f){l.$set(l.colors.rgba,"r",f)},expression:"colors.rgba.r"}})],1),l._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"g"},on:{change:l.onChange},model:{value:l.colors.rgba.g,callback:function(f){l.$set(l.colors.rgba,"g",f)},expression:"colors.rgba.g"}})],1),l._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"b"},on:{change:l.onChange},model:{value:l.colors.rgba.b,callback:function(f){l.$set(l.colors.rgba,"b",f)},expression:"colors.rgba.b"}})],1)])],1)},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(79)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(39),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(114),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Slider.vue",n.default=h.exports},function(i,n,o){var s=o(80);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7982aa43",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){function s(f){return f&&f.__esModule?f:{default:f}}n.__esModule=!0;var r=o(82),_=s(r),l=o(100),g=s(l),d=typeof g.default=="function"&&typeof _.default=="symbol"?function(f){return typeof f}:function(f){return f&&typeof g.default=="function"&&f.constructor===g.default&&f!==g.default.prototype?"symbol":typeof f};n.default=typeof g.default=="function"&&d(_.default)==="symbol"?function(f){return f===void 0?"undefined":d(f)}:function(f){return f&&typeof g.default=="function"&&f.constructor===g.default&&f!==g.default.prototype?"symbol":f===void 0?"undefined":d(f)}},function(i,n,o){i.exports={default:o(83),__esModule:!0}},function(i,n,o){o(84),o(96),i.exports=o(32).f("iterator")},function(i,n,o){var s=o(85)(!0);o(40)(String,"String",function(r){this._t=String(r),this._i=0},function(){var r,_=this._t,l=this._i;return l>=_.length?{value:void 0,done:!0}:(r=s(_,l),this._i+=r.length,{value:r,done:!1})})},function(i,n,o){var s=o(23),r=o(24);i.exports=function(_){return function(l,g){var d,f,h=String(r(l)),u=s(g),m=h.length;return u<0||u>=m?_?"":void 0:(d=h.charCodeAt(u),d<55296||d>56319||u+1===m||(f=h.charCodeAt(u+1))<56320||f>57343?_?h.charAt(u):d:_?h.slice(u,u+2):f-56320+(d-55296<<10)+65536)}}},function(i,n,o){var s=o(87);i.exports=function(r,_,l){if(s(r),_===void 0)return r;switch(l){case 1:return function(g){return r.call(_,g)};case 2:return function(g,d){return r.call(_,g,d)};case 3:return function(g,d,f){return r.call(_,g,d,f)}}return function(){return r.apply(_,arguments)}}},function(i,n){i.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},function(i,n,o){var s=o(45),r=o(18),_=o(31),l={};o(7)(l,o(11)("iterator"),function(){return this}),i.exports=function(g,d,f){g.prototype=s(l,{next:r(1,f)}),_(g,d+" Iterator")}},function(i,n,o){var s=o(8),r=o(16),_=o(27);i.exports=o(9)?Object.defineProperties:function(l,g){r(l);for(var d,f=_(g),h=f.length,u=0;h>u;)s.f(l,d=f[u++],g[d]);return l}},function(i,n,o){var s=o(47);i.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return s(r)=="String"?r.split(""):Object(r)}},function(i,n,o){var s=o(10),r=o(92),_=o(93);i.exports=function(l){return function(g,d,f){var h,u=s(g),m=r(u.length),b=_(f,m);if(l&&d!=d){for(;m>b;)if((h=u[b++])!=h)return!0}else for(;m>b;b++)if((l||b in u)&&u[b]===d)return l||b||0;return!l&&-1}}},function(i,n,o){var s=o(23),r=Math.min;i.exports=function(_){return _>0?r(s(_),9007199254740991):0}},function(i,n,o){var s=o(23),r=Math.max,_=Math.min;i.exports=function(l,g){return l=s(l),l<0?r(l+g,0):_(l,g)}},function(i,n,o){var s=o(4).document;i.exports=s&&s.documentElement},function(i,n,o){var s=o(6),r=o(48),_=o(28)("IE_PROTO"),l=Object.prototype;i.exports=Object.getPrototypeOf||function(g){return g=r(g),s(g,_)?g[_]:typeof g.constructor=="function"&&g instanceof g.constructor?g.constructor.prototype:g instanceof Object?l:null}},function(i,n,o){o(97);for(var s=o(4),r=o(7),_=o(26),l=o(11)("toStringTag"),g="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),d=0;d<g.length;d++){var f=g[d],h=s[f],u=h&&h.prototype;u&&!u[l]&&r(u,l,f),_[f]=_.Array}},function(i,n,o){var s=o(98),r=o(99),_=o(26),l=o(10);i.exports=o(40)(Array,"Array",function(g,d){this._t=l(g),this._i=0,this._k=d},function(){var g=this._t,d=this._k,f=this._i++;return!g||f>=g.length?(this._t=void 0,r(1)):d=="keys"?r(0,f):d=="values"?r(0,g[f]):r(0,[f,g[f]])},"values"),_.Arguments=_.Array,s("keys"),s("values"),s("entries")},function(i,n){i.exports=function(){}},function(i,n){i.exports=function(o,s){return{value:s,done:!!o}}},function(i,n,o){i.exports={default:o(101),__esModule:!0}},function(i,n,o){o(102),o(108),o(109),o(110),i.exports=o(15).Symbol},function(i,n,o){var s=o(4),r=o(6),_=o(9),l=o(41),g=o(44),d=o(103).KEY,f=o(17),h=o(29),u=o(31),m=o(19),b=o(11),y=o(32),k=o(33),w=o(104),S=o(105),j=o(16),Z=o(12),O=o(48),G=o(10),W=o(25),I=o(18),c=o(45),v=o(106),R=o(107),N=o(49),z=o(8),q=o(27),ie=R.f,ee=z.f,fe=v.f,ne=s.Symbol,ce=s.JSON,ke=ce&&ce.stringify,ue=b("_hidden"),Pe=b("toPrimitive"),Ce={}.propertyIsEnumerable,Ye=h("symbol-registry"),be=h("symbols"),ve=h("op-symbols"),Te=Object.prototype,Ge=typeof ne=="function"&&!!N.f,J=s.QObject,we=!J||!J.prototype||!J.prototype.findChild,_e=_&&f(function(){return c(ee({},"a",{get:function(){return ee(this,"a",{value:7}).a}})).a!=7})?function(P,$,F){var T=ie(Te,$);T&&delete Te[$],ee(P,$,F),T&&P!==Te&&ee(Te,$,T)}:ee,Oe=function(P){var $=be[P]=c(ne.prototype);return $._k=P,$},qe=Ge&&typeof ne.iterator=="symbol"?function(P){return typeof P=="symbol"}:function(P){return P instanceof ne},Qe=function(P,$,F){return P===Te&&Qe(ve,$,F),j(P),$=W($,!0),j(F),r(be,$)?(F.enumerable?(r(P,ue)&&P[ue][$]&&(P[ue][$]=!1),F=c(F,{enumerable:I(0,!1)})):(r(P,ue)||ee(P,ue,I(1,{})),P[ue][$]=!0),_e(P,$,F)):ee(P,$,F)},Me=function(P,$){j(P);for(var F,T=w($=G($)),D=0,C=T.length;C>D;)Qe(P,F=T[D++],$[F]);return P},p=function(P,$){return $===void 0?c(P):Me(c(P),$)},A=function(P){var $=Ce.call(this,P=W(P,!0));return!(this===Te&&r(be,P)&&!r(ve,P))&&(!($||!r(this,P)||!r(be,P)||r(this,ue)&&this[ue][P])||$)},E=function(P,$){if(P=G(P),$=W($,!0),P!==Te||!r(be,$)||r(ve,$)){var F=ie(P,$);return!F||!r(be,$)||r(P,ue)&&P[ue][$]||(F.enumerable=!0),F}},Y=function(P){for(var $,F=fe(G(P)),T=[],D=0;F.length>D;)r(be,$=F[D++])||$==ue||$==d||T.push($);return T},Q=function(P){for(var $,F=P===Te,T=fe(F?ve:G(P)),D=[],C=0;T.length>C;)!r(be,$=T[C++])||F&&!r(Te,$)||D.push(be[$]);return D};Ge||(ne=function(){if(this instanceof ne)throw TypeError("Symbol is not a constructor!");var P=m(arguments.length>0?arguments[0]:void 0),$=function(F){this===Te&&$.call(ve,F),r(this,ue)&&r(this[ue],P)&&(this[ue][P]=!1),_e(this,P,I(1,F))};return _&&we&&_e(Te,P,{configurable:!0,set:$}),Oe(P)},g(ne.prototype,"toString",function(){return this._k}),R.f=E,z.f=Qe,o(50).f=v.f=Y,o(34).f=A,N.f=Q,_&&!o(14)&&g(Te,"propertyIsEnumerable",A,!0),y.f=function(P){return Oe(b(P))}),l(l.G+l.W+l.F*!Ge,{Symbol:ne});for(var V="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),le=0;V.length>le;)b(V[le++]);for(var ge=q(b.store),me=0;ge.length>me;)k(ge[me++]);l(l.S+l.F*!Ge,"Symbol",{for:function(P){return r(Ye,P+="")?Ye[P]:Ye[P]=ne(P)},keyFor:function(P){if(!qe(P))throw TypeError(P+" is not a symbol!");for(var $ in Ye)if(Ye[$]===P)return $},useSetter:function(){we=!0},useSimple:function(){we=!1}}),l(l.S+l.F*!Ge,"Object",{create:p,defineProperty:Qe,defineProperties:Me,getOwnPropertyDescriptor:E,getOwnPropertyNames:Y,getOwnPropertySymbols:Q});var Ue=f(function(){N.f(1)});l(l.S+l.F*Ue,"Object",{getOwnPropertySymbols:function(P){return N.f(O(P))}}),ce&&l(l.S+l.F*(!Ge||f(function(){var P=ne();return ke([P])!="[null]"||ke({a:P})!="{}"||ke(Object(P))!="{}"})),"JSON",{stringify:function(P){for(var $,F,T=[P],D=1;arguments.length>D;)T.push(arguments[D++]);if(F=$=T[1],(Z($)||P!==void 0)&&!qe(P))return S($)||($=function(C,L){if(typeof F=="function"&&(L=F.call(this,C,L)),!qe(L))return L}),T[1]=$,ke.apply(ce,T)}}),ne.prototype[Pe]||o(7)(ne.prototype,Pe,ne.prototype.valueOf),u(ne,"Symbol"),u(Math,"Math",!0),u(s.JSON,"JSON",!0)},function(i,n,o){var s=o(19)("meta"),r=o(12),_=o(6),l=o(8).f,g=0,d=Object.isExtensible||function(){return!0},f=!o(17)(function(){return d(Object.preventExtensions({}))}),h=function(k){l(k,s,{value:{i:"O"+ ++g,w:{}}})},u=function(k,w){if(!r(k))return typeof k=="symbol"?k:(typeof k=="string"?"S":"P")+k;if(!_(k,s)){if(!d(k))return"F";if(!w)return"E";h(k)}return k[s].i},m=function(k,w){if(!_(k,s)){if(!d(k))return!0;if(!w)return!1;h(k)}return k[s].w},b=function(k){return f&&y.NEED&&d(k)&&!_(k,s)&&h(k),k},y=i.exports={KEY:s,NEED:!1,fastKey:u,getWeak:m,onFreeze:b}},function(i,n,o){var s=o(27),r=o(49),_=o(34);i.exports=function(l){var g=s(l),d=r.f;if(d)for(var f,h=d(l),u=_.f,m=0;h.length>m;)u.call(l,f=h[m++])&&g.push(f);return g}},function(i,n,o){var s=o(47);i.exports=Array.isArray||function(r){return s(r)=="Array"}},function(i,n,o){var s=o(10),r=o(50).f,_={}.toString,l=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],g=function(d){try{return r(d)}catch{return l.slice()}};i.exports.f=function(d){return l&&_.call(d)=="[object Window]"?g(d):r(s(d))}},function(i,n,o){var s=o(34),r=o(18),_=o(10),l=o(25),g=o(6),d=o(42),f=Object.getOwnPropertyDescriptor;n.f=o(9)?f:function(h,u){if(h=_(h),u=l(u,!0),d)try{return f(h,u)}catch{}if(g(h,u))return r(!s.f.call(h,u),h[u])}},function(i,n){},function(i,n,o){o(33)("asyncIterator")},function(i,n,o){o(33)("observable")},function(i,n,o){var s=o(112);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7c5f1a1c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-hue",l.directionClass]},[d("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":l.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-hue-pointer",style:{top:l.pointerTop,left:l.pointerLeft},attrs:{role:"presentation"}},[d("div",{staticClass:"vc-hue-picker"})])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[d("div",{staticClass:"vc-slider-hue-warp"},[d("hue",{on:{change:l.hueChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},l._l(l.normalizedSwatches,function(f,h){return d("div",{key:h,staticClass:"vc-slider-swatch",attrs:{"data-index":h,"aria-label":"color:"+l.colors.hex,role:"button"},on:{click:function(u){return l.handleSwClick(h,f)}}},[d("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":l.isActive(f,h),"vc-slider-swatch-picker--white":f.l===1},style:{background:"hsl("+l.colors.hsl.h+", "+100*f.s+"%, "+100*f.l+"%)"}})])}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(116)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(52),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(119),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Swatches.vue",n.default=h.exports},function(i,n,o){var s=o(117);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("10f839a2",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"red",function(){return s}),o.d(n,"pink",function(){return r}),o.d(n,"purple",function(){return _}),o.d(n,"deepPurple",function(){return l}),o.d(n,"indigo",function(){return g}),o.d(n,"blue",function(){return d}),o.d(n,"lightBlue",function(){return f}),o.d(n,"cyan",function(){return h}),o.d(n,"teal",function(){return u}),o.d(n,"green",function(){return m}),o.d(n,"lightGreen",function(){return b}),o.d(n,"lime",function(){return y}),o.d(n,"yellow",function(){return k}),o.d(n,"amber",function(){return w}),o.d(n,"orange",function(){return S}),o.d(n,"deepOrange",function(){return j}),o.d(n,"brown",function(){return Z}),o.d(n,"grey",function(){return O}),o.d(n,"blueGrey",function(){return G}),o.d(n,"darkText",function(){return W}),o.d(n,"lightText",function(){return I}),o.d(n,"darkIcons",function(){return c}),o.d(n,"lightIcons",function(){return v}),o.d(n,"white",function(){return R}),o.d(n,"black",function(){return N});var s={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},r={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},_={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},l={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},g={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},d={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},f={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},h={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},u={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},m={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},b={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},y={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},k={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},w={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},S={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},j={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},Z={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},O={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},G={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},W={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},I={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},c={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},v={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},R="#ffffff",N="#000000";n.default={red:s,pink:r,purple:_,deepPurple:l,indigo:g,blue:d,lightBlue:f,cyan:h,teal:u,green:m,lightGreen:b,lime:y,yellow:k,amber:w,orange:S,deepOrange:j,brown:Z,grey:O,blueGrey:G,darkText:W,lightText:I,darkIcons:c,lightIcons:v,white:R,black:N}},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":l.pick}},[d("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},l._l(l.palette,function(f,h){return d("div",{key:h,staticClass:"vc-swatches-color-group"},l._l(f,function(u){return d("div",{key:u,class:["vc-swatches-color-it",{"vc-swatches-color--white":u==="#FFFFFF"}],style:{background:u},attrs:{role:"option","aria-label":"Color:"+u,"aria-selected":l.equal(u),"data-color":u},on:{click:function(m){return l.handlerClick(u)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:l.equal(u),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[d("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(121)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(53),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(134),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Photoshop.vue",n.default=h.exports},function(i,n,o){var s=o(122);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("080365d4",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n){function o(s,r,_){return r<_?s<r?r:s>_?_:s:s<_?_:s>r?r:s}i.exports=o},function(i,n){function o(c,v,R){function N(_e){var Oe=ue,qe=Pe;return ue=Pe=void 0,Te=_e,Ye=c.apply(qe,Oe)}function z(_e){return Te=_e,be=setTimeout(ee,v),Ge?N(_e):Ye}function q(_e){var Oe=_e-ve,qe=_e-Te,Qe=v-Oe;return J?W(Qe,Ce-qe):Qe}function ie(_e){var Oe=_e-ve,qe=_e-Te;return ve===void 0||Oe>=v||Oe<0||J&&qe>=Ce}function ee(){var _e=I();if(ie(_e))return fe(_e);be=setTimeout(ee,q(_e))}function fe(_e){return be=void 0,we&&ue?N(_e):(ue=Pe=void 0,Ye)}function ne(){be!==void 0&&clearTimeout(be),Te=0,ue=ve=Pe=be=void 0}function ce(){return be===void 0?Ye:fe(I())}function ke(){var _e=I(),Oe=ie(_e);if(ue=arguments,Pe=this,ve=_e,Oe){if(be===void 0)return z(ve);if(J)return be=setTimeout(ee,v),N(ve)}return be===void 0&&(be=setTimeout(ee,v)),Ye}var ue,Pe,Ce,Ye,be,ve,Te=0,Ge=!1,J=!1,we=!0;if(typeof c!="function")throw new TypeError(d);return v=g(v)||0,r(R)&&(Ge=!!R.leading,J="maxWait"in R,Ce=J?G(g(R.maxWait)||0,v):Ce,we="trailing"in R?!!R.trailing:we),ke.cancel=ne,ke.flush=ce,ke}function s(c,v,R){var N=!0,z=!0;if(typeof c!="function")throw new TypeError(d);return r(R)&&(N="leading"in R?!!R.leading:N,z="trailing"in R?!!R.trailing:z),o(c,v,{leading:N,maxWait:v,trailing:z})}function r(c){var v=typeof c;return!!c&&(v=="object"||v=="function")}function _(c){return!!c&&typeof c=="object"}function l(c){return typeof c=="symbol"||_(c)&&O.call(c)==h}function g(c){if(typeof c=="number")return c;if(l(c))return f;if(r(c)){var v=typeof c.valueOf=="function"?c.valueOf():c;c=r(v)?v+"":v}if(typeof c!="string")return c===0?c:+c;c=c.replace(u,"");var R=b.test(c);return R||y.test(c)?k(c.slice(2),R?2:8):m.test(c)?f:+c}var d="Expected a function",f=NaN,h="[object Symbol]",u=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,k=parseInt,w=typeof Ba=="object"&&Ba&&Ba.Object===Object&&Ba,S=typeof self=="object"&&self&&self.Object===Object&&self,j=w||S||Function("return this")(),Z=Object.prototype,O=Z.toString,G=Math.max,W=Math.min,I=function(){return j.Date.now()};i.exports=s},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{ref:"container",staticClass:"vc-saturation",style:{background:l.bgColor},on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-saturation--white"}),l._v(" "),d("div",{staticClass:"vc-saturation--black"}),l._v(" "),d("div",{staticClass:"vc-saturation-pointer",style:{top:l.pointerTop,left:l.pointerLeft}},[d("div",{staticClass:"vc-saturation-circle"})])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=o(129);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("4dc1b086",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement;return(l._self._c||g)("div",{staticClass:"vc-checkerboard",style:l.bgStyle})},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-alpha"},[d("div",{staticClass:"vc-alpha-checkboard-wrap"},[d("checkboard")],1),l._v(" "),d("div",{staticClass:"vc-alpha-gradient",style:{background:l.gradientColor}}),l._v(" "),d("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:l.handleMouseDown,touchmove:l.handleChange,touchstart:l.handleChange}},[d("div",{staticClass:"vc-alpha-pointer",style:{left:100*l.colors.a+"%"}},[d("div",{staticClass:"vc-alpha-picker"})])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-photoshop",l.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[d("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[l._v(l._s(l.head))]),l._v(" "),d("div",{staticClass:"vc-ps-body"},[d("div",{staticClass:"vc-ps-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-ps-hue-wrap"},[d("hue",{attrs:{direction:"vertical"},on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}},[d("div",{staticClass:"vc-ps-hue-pointer"},[d("i",{staticClass:"vc-ps-hue-pointer--left"}),d("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),l._v(" "),d("div",{class:["vc-ps-controls",l.disableFields?"vc-ps-controls__disable-fields":""]},[d("div",{staticClass:"vc-ps-previews"},[d("div",{staticClass:"vc-ps-previews__label"},[l._v(l._s(l.newLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-previews__swatches"},[d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:l.colors.hex},attrs:{"aria-label":"New color is "+l.colors.hex}}),l._v(" "),d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:l.currentColor},attrs:{"aria-label":"Current color is "+l.currentColor},on:{click:l.clickCurrentColor}})]),l._v(" "),d("div",{staticClass:"vc-ps-previews__label"},[l._v(l._s(l.currentLabel))])]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-ps-actions"},[d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":l.acceptLabel},on:{click:l.handleAccept}},[l._v(l._s(l.acceptLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":l.cancelLabel},on:{click:l.handleCancel}},[l._v(l._s(l.cancelLabel))]),l._v(" "),d("div",{staticClass:"vc-ps-fields"},[d("ed-in",{attrs:{label:"h",desc:"°",value:l.hsv.h},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"s",desc:"%",value:l.hsv.s,max:100},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"v",desc:"%",value:l.hsv.v,max:100},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),l._v(" "),d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}}),l._v(" "),d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),l._v(" "),d("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:l.hex},on:{change:l.inputChange}})],1),l._v(" "),l.hasResetButton?d("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:l.handleReset}},[l._v(l._s(l.resetLabel))]):l._e()])])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(136)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(57),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(138),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Sketch.vue",n.default=h.exports},function(i,n,o){var s=o(137);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("612c6604",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-sketch",l.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[d("div",{staticClass:"vc-sketch-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-controls"},[d("div",{staticClass:"vc-sketch-sliders"},[d("div",{staticClass:"vc-sketch-hue-wrap"},[d("hue",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-sketch-alpha-wrap"},[d("alpha",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1)]),l._v(" "),d("div",{staticClass:"vc-sketch-color-wrap"},[d("div",{staticClass:"vc-sketch-active-color",style:{background:l.activeColor},attrs:{"aria-label":"Current color is "+l.activeColor}}),l._v(" "),d("checkboard")],1)]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-sketch-field"},[d("div",{staticClass:"vc-sketch-field--double"},[d("ed-in",{attrs:{label:"hex",value:l.hex},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[l._l(l.presetColors,function(f){return[l.isTransparent(f)?d("div",{key:f,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+f},on:{click:function(h){return l.handlePreset(f)}}},[d("checkboard")],1):d("div",{key:f,staticClass:"vc-sketch-presets-color",style:{background:f},attrs:{"aria-label":"Color:"+f},on:{click:function(h){return l.handlePreset(f)}}})]})],2)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(140)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(58),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(142),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Chrome.vue",n.default=h.exports},function(i,n,o){var s=o(141);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1cd16048",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{class:["vc-chrome",l.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[d("div",{staticClass:"vc-chrome-saturation-wrap"},[d("saturation",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-body"},[d("div",{staticClass:"vc-chrome-controls"},[d("div",{staticClass:"vc-chrome-color-wrap"},[d("div",{staticClass:"vc-chrome-active-color",style:{background:l.activeColor},attrs:{"aria-label":"current color is "+l.colors.hex}}),l._v(" "),l.disableAlpha?l._e():d("checkboard")],1),l._v(" "),d("div",{staticClass:"vc-chrome-sliders"},[d("div",{staticClass:"vc-chrome-hue-wrap"},[d("hue",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-alpha-wrap"},[d("alpha",{on:{change:l.childChange},model:{value:l.colors,callback:function(f){l.colors=f},expression:"colors"}})],1)])]),l._v(" "),l.disableFields?l._e():d("div",{staticClass:"vc-chrome-fields-wrap"},[d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===0,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[l.hasAlpha?l._e():d("ed-in",{attrs:{label:"hex",value:l.colors.hex},on:{change:l.inputChange}}),l._v(" "),l.hasAlpha?d("ed-in",{attrs:{label:"hex",value:l.colors.hex8},on:{change:l.inputChange}}):l._e()],1)]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===1,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"r",value:l.colors.rgba.r},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"g",value:l.colors.rgba.g},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"b",value:l.colors.rgba.b},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.fieldsIndex===2,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"h",value:l.hsl.h},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"s",value:l.hsl.s},on:{change:l.inputChange}})],1),l._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"l",value:l.hsl.l},on:{change:l.inputChange}})],1),l._v(" "),l.disableAlpha?l._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:l.colors.a,"arrow-offset":.01,max:1},on:{change:l.inputChange}})],1)]),l._v(" "),d("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:l.toggleViews}},[d("div",{staticClass:"vc-chrome-toggle-icon"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:l.showHighlight,mouseenter:l.showHighlight,mouseout:l.hideHighlight}},[d("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),l._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:l.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_},function(i,n,o){function s(u){o(144)}Object.defineProperty(n,"__esModule",{value:!0});var r=o(59),_=o.n(r);for(var l in r)l!=="default"&&function(u){o.d(n,u,function(){return r[u]})}(l);var g=o(146),d=o(2),f=s,h=d(_.a,g.a,!1,f,null,null);h.options.__file="src/components/Twitter.vue",n.default=h.exports},function(i,n,o){var s=o(145);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("669a48a5",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var l=this,g=l.$createElement,d=l._self._c||g;return d("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":l.triangle==="hide","vc-twitter-top-left-triangle ":l.triangle==="top-left","vc-twitter-top-right-triangle ":l.triangle==="top-right"},style:{width:typeof l.width=="number"?l.width+"px":l.width}},[d("div",{staticClass:"vc-twitter-triangle-shadow"}),l._v(" "),d("div",{staticClass:"vc-twitter-triangle"}),l._v(" "),d("div",{staticClass:"vc-twitter-body"},[l._l(l.defaultColors,function(f,h){return d("span",{key:h,staticClass:"vc-twitter-swatch",style:{background:f,boxShadow:"0 0 4px "+(l.equal(f)?f:"transparent")},on:{click:function(u){return l.handlerClick(f)}}})}),l._v(" "),d("div",{staticClass:"vc-twitter-hash"},[l._v("#")]),l._v(" "),d("editable-input",{attrs:{label:"#",value:l.hex},on:{change:l.inputChange}}),l._v(" "),d("div",{staticClass:"vc-twitter-clear"})],2)])},r=[];s._withStripped=!0;var _={render:s,staticRenderFns:r};n.a=_}])})})(Xr);var tc=Xr.exports;oe(F1);const _s=/^#([a-f0-9]{3}|[a-f0-9]{6})$/i,ic={name:"NcColorPicker",components:{ArrowLeft:Jr,Check:Mn,Chrome:tc.Chrome,DotsHorizontal:Cn,NcButton:wa,NcPopover:Nn},props:{value:{type:String,required:!0},advancedFields:{type:Boolean,default:!1},paletteOnly:{type:Boolean,default:!1},palette:{type:Array,default:()=>[...hf],validator:e=>e.every(a=>typeof a=="string"&&_s.test(a)||typeof a=="object"&&a.color&&_s.test(a.color))},container:{type:[String,Object,Element,Boolean],default:"body"}},emits:["submit","close","update:open","update:value","input"],data(){return{currentColor:this.value,advanced:!1,ariaBack:x("Back"),ariaMore:x("More options")}},computed:{normalizedPalette(){return this.palette.map(e=>({color:typeof e=="object"?e.color:e,name:typeof e=="object"&&e.name?e.name:x("A color with a HEX value {hex}",{hex:e.color})}))},uid(){return st()},contrastColor(){return this.calculateLuma(this.currentColor)>.5?"#000000":"#FFFFFF"}},watch:{value(e){this.currentColor=e}},methods:{t:x,handleConfirm(){this.$emit("submit",this.currentColor),this.handleClose(),this.advanced=!1},handleClose(){this.$emit("close"),this.$emit("update:open",!1)},handleBack(){this.advanced=!1},handleMoreSettings(){this.advanced=!0},pickColor(e){typeof e!="string"&&(e=this.currentColor.hex),this.currentColor=e,this.$emit("update:value",e),this.$emit("input",e)},calculateLuma(e){const[a,i,n]=this.hexToRGB(e);return(.2126*a+.7152*i+.0722*n)/255},hexToRGB(e){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}}};var nc=function(){var e=this,a=e._self._c;return a("NcPopover",e._g(e._b({attrs:{"popup-role":"dialog",container:e.container},on:{"apply-hide":e.handleClose},scopedSlots:e._u([{key:"trigger",fn:function(i){return[e._t("default",null,null,i)]}}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[a("div",{staticClass:"color-picker",class:{"color-picker--advanced-fields":e.advanced&&e.advancedFields},attrs:{role:"dialog","aria-modal":"true","aria-label":e.t("Color picker")}},[a("Transition",{attrs:{name:"slide",mode:"out-in"}},[e.advanced?a("Chrome",{staticClass:"color-picker__advanced",attrs:{"disable-alpha":!0,"disable-fields":!e.advancedFields},on:{input:e.pickColor},model:{value:e.currentColor,callback:function(i){e.currentColor=i},expression:"currentColor"}}):a("div",{staticClass:"color-picker__simple"},e._l(e.normalizedPalette,function({color:i,name:n},o){return a("label",{key:o,staticClass:"color-picker__simple-color-circle",class:{"color-picker__simple-color-circle--active":i===e.currentColor},style:{backgroundColor:i}},[i===e.currentColor?a("Check",{attrs:{size:20,"fill-color":e.contrastColor}}):e._e(),a("input",{staticClass:"hidden-visually",attrs:{type:"radio","aria-label":n,name:"color-picker-".concat(e.uid)},domProps:{checked:i===e.currentColor},on:{click:function(s){return e.pickColor(i)}}})],1)}),0)],1),e.paletteOnly?e._e():a("div",{staticClass:"color-picker__navigation"},[e.advanced?a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaBack},on:{click:e.handleBack},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}):a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaMore},on:{click:e.handleMoreSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1056868794)}),a("NcButton",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v(" "+e._s(e.t("Choose"))+" ")])],1)],1)])},oc=[],sc=te(ic,nc,oc,!1,null,"cc496c1d");const W2=sc.exports;oe(u1);const rc={name:"NcDashboardWidgetItem",components:{NcAvatar:qr,NcActions:Ps,NcActionButton:G1},props:{id:{type:[String,Number],default:void 0},targetUrl:{type:String,default:void 0},avatarUrl:{type:String,default:void 0},avatarUsername:{type:String,default:void 0},avatarIsNoUser:{type:Boolean,default:!1},overlayIconUrl:{type:String,default:void 0},mainText:{type:String,required:!0},subText:{type:String,default:""},itemMenu:{type:Object,default:()=>({})},forceMenu:{type:Boolean,default:!0}},data(){return{hovered:!1}},computed:{item(){return{id:this.id,targetUrl:this.targetUrl,avatarUrl:this.avatarUrl,avatarUsername:this.avatarUsername,overlayIconUrl:this.overlayIconUrl,mainText:this.mainText,subText:this.subText}},gotMenu(){return Object.keys(this.itemMenu).length!==0||!!this.$slots.actions},gotOverlayIcon(){return this.overlayIconUrl&&this.overlayIconUrl!==""}},methods:{onLinkClick(e){e.target.closest(".action-item")&&e.preventDefault()}}};var lc=function(){var e=this,a=e._self._c;return a("div",{on:{mouseover:function(i){e.hovered=!0},mouseleave:function(i){e.hovered=!1}}},[a(e.targetUrl?"a":"div",{tag:"component",class:{"item-list__entry":!0,"item-list__entry--has-actions-menu":e.gotMenu},attrs:{href:e.targetUrl||void 0,target:e.targetUrl?"_blank":void 0},on:{click:e.onLinkClick}},[e._t("avatar",function(){return[a("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,url:e.avatarUrl,user:e.avatarUsername,"is-no-user":e.avatarIsNoUser,"show-user-status":!e.gotOverlayIcon}})]},{avatarUrl:e.avatarUrl,avatarUsername:e.avatarUsername}),e.overlayIconUrl?a("img",{staticClass:"item-icon",attrs:{alt:"",src:e.overlayIconUrl}}):e._e(),a("div",{staticClass:"item__details"},[a("h3",{attrs:{title:e.mainText}},[e._v(" "+e._s(e.mainText)+" ")]),e.subText!==""?a("span",{staticClass:"message",attrs:{title:e.subText}},[e._v(" "+e._s(e.subText)+" ")]):e._e()]),e.gotMenu?a("NcActions",{attrs:{"force-menu":e.forceMenu}},[e._t("actions",function(){return e._l(e.itemMenu,function(i,n){return a("NcActionButton",{key:n,attrs:{icon:i.icon,"close-after-click":!0},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.$emit(n,e.item)}}},[e._v(" "+e._s(i.text)+" ")])})})],2):e._e()],2)],1)},_c=[],dc=te(rc,lc,_c,!1,null,"51bbc625");const V2=dc.exports;oe(c1),Mn,x("More items …"),oe(m1),x("a few seconds ago"),x("seconds ago"),x("sec. ago");var el={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ba,function(){return function(){var i={537:function(){typeof window<"u"&&function(){for(var r=0,_=["ms","moz","webkit","o"],l=0;l<_.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[_[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[_[l]+"CancelAnimationFrame"]||window[_[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(g,d){var f=new Date().getTime(),h=Math.max(0,16-(f-r)),u=window.setTimeout(function(){g(f+h)},h);return r=f+h,u}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(g){clearTimeout(g)})}()}},n={};function o(r){var _=n[r];if(_!==void 0)return _.exports;var l=n[r]={exports:{}};return i[r](l,l.exports,o),l.exports}o.d=function(r,_){for(var l in _)o.o(_,l)&&!o.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:_[l]})},o.o=function(r,_){return Object.prototype.hasOwnProperty.call(r,_)},o.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var s={};return function(){o.r(s),o.d(s,{Anchors:function(){return R},Category:function(){return Me},Emoji:function(){return Qe},EmojiData:function(){return ve},EmojiIndex:function(){return be},EmojiView:function(){return Te},Picker:function(){return $},Preview:function(){return A},Search:function(){return Y},Skins:function(){return p},frequently:function(){return W},sanitize:function(){return Ge},store:function(){return h},uncompress:function(){return j}});var r,_,l="emoji-mart",g=JSON,d=typeof window<"u"&&"localStorage"in window;function f(F,T){if(_)_(F,T);else{if(!d)return;try{window.localStorage["".concat(l,".").concat(F)]=g.stringify(T)}catch{}}}var h={update:function(F){for(var T in F)f(T,F[T])},set:f,get:function(F){if(r)return r(F);if(d){try{var T=window.localStorage["".concat(l,".").concat(F)]}catch{return}return T?JSON.parse(T):void 0}},setNamespace:function(F){l=F},setHandlers:function(F){F||(F={}),r=F.getter,_=F.setter}};function u(F){return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},u(F)}function m(F,T){(T==null||T>F.length)&&(T=F.length);for(var D=0,C=new Array(T);D<T;D++)C[D]=F[D];return C}var b={name:"a",unified:"b",non_qualified:"c",has_img_apple:"d",has_img_google:"e",has_img_twitter:"f",has_img_facebook:"h",keywords:"j",sheet:"k",emoticons:"l",text:"m",short_names:"n",added_in:"o"},y=function(F){var T=[],D=function(C,L){C&&(Array.isArray(C)?C:[C]).forEach(function(U){(L?U.split(/[-|_|\s]+/):[U]).forEach(function(K){K=K.toLowerCase(),T.indexOf(K)==-1&&T.push(K)})})};return D(F.short_names,!0),D(F.name,!0),D(F.keywords,!1),D(F.emoticons,!1),T.join(",")};function k(F){var T,D=function(U,K){var se=typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"];if(!se){if(Array.isArray(U)||(se=function(Se,Va){if(Se){if(typeof Se=="string")return m(Se,Va);var da=Object.prototype.toString.call(Se).slice(8,-1);return da==="Object"&&Se.constructor&&(da=Se.constructor.name),da==="Map"||da==="Set"?Array.from(Se):da==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(da)?m(Se,Va):void 0}}(U))||K){se&&(U=se);var ae=0,ye=function(){};return{s:ye,n:function(){return ae>=U.length?{done:!0}:{done:!1,value:U[ae++]}},e:function(Se){throw Se},f:ye}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var je,gt=!0,ht=!1;return{s:function(){se=se.call(U)},n:function(){var Se=se.next();return gt=Se.done,Se},e:function(Se){ht=!0,je=Se},f:function(){try{gt||se.return==null||se.return()}finally{if(ht)throw je}}}}(Object.getOwnPropertyNames(F));try{for(D.s();!(T=D.n()).done;){var C=T.value,L=F[C];F[C]=L&&u(L)==="object"?k(L):L}}catch(U){D.e(U)}finally{D.f()}return Object.freeze(F)}var w,S,j=function(F){if(!F.compressed)return F;for(var T in F.compressed=!1,F.emojis){var D=F.emojis[T];for(var C in b)D[C]=D[b[C]],delete D[b[C]];D.short_names||(D.short_names=[]),D.short_names.unshift(T),D.sheet_x=D.sheet[0],D.sheet_y=D.sheet[1],delete D.sheet,D.text||(D.text=""),D.added_in||(D.added_in=6),D.added_in=D.added_in.toFixed(1),D.search=y(D)}return k(F)},Z=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart","hankey"],O={};function G(){S=!0,w=h.get("frequently")}var W={add:function(F){S||G();var T=F.id;w||(w=O),w[T]||(w[T]=0),w[T]+=1,h.set("last",T),h.set("frequently",w)},get:function(F){if(S||G(),!w){O={};for(var T=[],D=Math.min(F,Z.length),C=0;C<D;C++)O[Z[C]]=parseInt((D-C)/4,10)+1,T.push(Z[C]);return T}var L=F,U=[];for(var K in w)w.hasOwnProperty(K)&&U.push(K);var se=U.sort(function(ye,je){return w[ye]-w[je]}).reverse().slice(0,L),ae=h.get("last");return ae&&se.indexOf(ae)==-1&&(se.pop(),se.push(ae)),se}},I={activity:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>',custom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2.000000, 1.000000)"><rect id="Rectangle" x="8" y="0" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect></g></svg>',flags:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>',foods:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>',nature:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>',objects:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>',smileys:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>',people:'<svg xmlns:svg="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"> <path id="path3814" d="m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z" /> <path id="path3816" d="M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z " /> </svg>',places:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>',recent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>',symbols:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'};function c(F,T,D,C,L,U,K,se){var ae,ye=typeof F=="function"?F.options:F;return T&&(ye.render=T,ye.staticRenderFns=D,ye._compiled=!0),{exports:F,options:ye}}var v=c({props:{i18n:{type:Object,required:!0},color:{type:String},categories:{type:Array,required:!0},activeCategory:{type:Object,default:function(){return{}}}},emits:["click"],created:function(){this.svgs=I}},function(){var F=this,T=F._self._c;return T("div",{staticClass:"emoji-mart-anchors",attrs:{role:"tablist"}},F._l(F.categories,function(D){return T("button",{key:D.id,class:{"emoji-mart-anchor":!0,"emoji-mart-anchor-selected":D.id==F.activeCategory.id},style:{color:D.id==F.activeCategory.id?F.color:""},attrs:{role:"tab",type:"button","aria-label":D.name,"aria-selected":D.id==F.activeCategory.id,"data-title":F.i18n.categories[D.id]},on:{click:function(C){return F.$emit("click",D)}}},[T("div",{attrs:{"aria-hidden":"true"},domProps:{innerHTML:F._s(F.svgs[D.id])}}),F._v(" "),T("span",{staticClass:"emoji-mart-anchor-bar",style:{backgroundColor:F.color},attrs:{"aria-hidden":"true"}})])}),0)},[]),R=v.exports;function N(F,T){if(!(F instanceof T))throw new TypeError("Cannot call a class as a function")}function z(F){var T=function(D,C){if(u(D)!="object"||!D)return D;var L=D[Symbol.toPrimitive];if(L!==void 0){var U=L.call(D,"string");if(u(U)!="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(D)}(F);return u(T)=="symbol"?T:T+""}function q(F,T){for(var D=0;D<T.length;D++){var C=T[D];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(F,z(C.key),C)}}function ie(F,T,D){return T&&q(F.prototype,T),Object.defineProperty(F,"prototype",{writable:!1}),F}var ee=String.fromCodePoint||function(){var F,T,D=[],C=-1,L=arguments.length;if(!L)return"";for(var U="";++C<L;){var K=Number(arguments[C]);if(!isFinite(K)||K<0||K>1114111||Math.floor(K)!=K)throw RangeError("Invalid code point: "+K);K<=65535?D.push(K):(F=55296+((K-=65536)>>10),T=K%1024+56320,D.push(F,T)),(C+1===L||D.length>16384)&&(U+=String.fromCharCode.apply(null,D),D.length=0)}return U};function fe(F){var T=F.split("-").map(function(D){return"0x".concat(D)});return ee.apply(null,T)}function ne(F){return F.reduce(function(T,D){return T.indexOf(D)===-1&&T.push(D),T},[])}function ce(F,T){var D=ne(F),C=ne(T);return D.filter(function(L){return C.indexOf(L)>=0})}function ke(F,T){var D={};for(var C in F){var L=F[C],U=L;T.hasOwnProperty(C)&&(U=T[C]),u(U)==="object"&&(U=ke(L,U)),D[C]=U}return D}function ue(F,T){var D=typeof Symbol<"u"&&F[Symbol.iterator]||F["@@iterator"];if(!D){if(Array.isArray(F)||(D=function(ae,ye){if(ae){if(typeof ae=="string")return Pe(ae,ye);var je=Object.prototype.toString.call(ae).slice(8,-1);return je==="Object"&&ae.constructor&&(je=ae.constructor.name),je==="Map"||je==="Set"?Array.from(ae):je==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(je)?Pe(ae,ye):void 0}}(F))||T){D&&(F=D);var C=0,L=function(){};return{s:L,n:function(){return C>=F.length?{done:!0}:{done:!1,value:F[C++]}},e:function(ae){throw ae},f:L}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U,K=!0,se=!1;return{s:function(){D=D.call(F)},n:function(){var ae=D.next();return K=ae.done,ae},e:function(ae){se=!0,U=ae},f:function(){try{K||D.return==null||D.return()}finally{if(se)throw U}}}}function Pe(F,T){(T==null||T>F.length)&&(T=F.length);for(var D=0,C=new Array(T);D<T;D++)C[D]=F[D];return C}var Ce=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,Ye=["1F3FA","1F3FB","1F3FC","1F3FD","1F3FE","1F3FF"],be=function(){return ie(function F(T){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=D.emojisToShowFilter,L=D.include,U=D.exclude,K=D.custom,se=D.recent,ae=D.recentLength,ye=ae===void 0?20:ae;N(this,F),this._data=j(T),this._emojisFilter=C||null,this._include=L||null,this._exclude=U||null,this._custom=K||[],this._recent=se||W.get(ye),this._emojis={},this._nativeEmojis={},this._emoticons={},this._categories=[],this._recentCategory={id:"recent",name:"Recent",emojis:[]},this._customCategory={id:"custom",name:"Custom",emojis:[]},this._searchIndex={},this.buildIndex(),Object.freeze(this)},[{key:"buildIndex",value:function(){var F=this,T=this._data.categories;if(this._include&&(T=(T=T.filter(function(U){return F._include.includes(U.id)})).sort(function(U,K){var se=F._include.indexOf(U.id),ae=F._include.indexOf(K.id);return se<ae?-1:se>ae?1:0})),T.forEach(function(U){if(F.isCategoryNeeded(U.id)){var K={id:U.id,name:U.name,emojis:[]};U.emojis.forEach(function(se){var ae=F.addEmoji(se);ae&&K.emojis.push(ae)}),K.emojis.length&&F._categories.push(K)}}),this.isCategoryNeeded("custom")){if(this._custom.length>0){var D,C=ue(this._custom);try{for(C.s();!(D=C.n()).done;){var L=D.value;this.addCustomEmoji(L)}}catch(U){C.e(U)}finally{C.f()}}this._customCategory.emojis.length&&this._categories.push(this._customCategory)}this.isCategoryNeeded("recent")&&(this._recent.length&&this._recent.map(function(U){var K,se=ue(F._customCategory.emojis);try{for(se.s();!(K=se.n()).done;){var ae=K.value;if(ae.id===U)return void F._recentCategory.emojis.push(ae)}}catch(ye){se.e(ye)}finally{se.f()}F.hasEmoji(U)&&F._recentCategory.emojis.push(F.emoji(U))}),this._recentCategory.emojis.length&&this._categories.unshift(this._recentCategory))}},{key:"findEmoji",value:function(F,T){var D=F.match(Ce);if(D&&(F=D[1],D[2]&&(T=parseInt(D[2],10))),this._data.aliases.hasOwnProperty(F)&&(F=this._data.aliases[F]),this._emojis.hasOwnProperty(F)){var C=this._emojis[F];return T?C.getSkin(T):C}return this._nativeEmojis.hasOwnProperty(F)?this._nativeEmojis[F]:null}},{key:"categories",value:function(){return this._categories}},{key:"emoji",value:function(F){this._data.aliases.hasOwnProperty(F)&&(F=this._data.aliases[F]);var T=this._emojis[F];if(!T)throw new Error("Can not find emoji by id: "+F);return T}},{key:"firstEmoji",value:function(){var F=this._emojis[Object.keys(this._emojis)[0]];if(!F)throw new Error("Can not get first emoji");return F}},{key:"hasEmoji",value:function(F){return this._data.aliases.hasOwnProperty(F)&&(F=this._data.aliases[F]),!!this._emojis[F]}},{key:"nativeEmoji",value:function(F){return this._nativeEmojis.hasOwnProperty(F)?this._nativeEmojis[F]:null}},{key:"search",value:function(F,T){var D=this;if(T||(T=75),!F.length)return null;if(F=="-"||F=="-1")return[this.emoji("-1")];var C,L=F.toLowerCase().split(/[\s|,|\-|_]+/);L.length>2&&(L=[L[0],L[1]]),C=L.map(function(K){for(var se=D._emojis,ae=D._searchIndex,ye=0,je=function(){var ht=K[gt];if(ye++,ae[ht]||(ae[ht]={}),!(ae=ae[ht]).results){var Se={};for(var Va in ae.results=[],ae.emojis={},se){var da=se[Va],Al=da._data.search,go=K.substr(0,ye),ho=Al.indexOf(go);if(ho!=-1){var Fo=ho+1;go==Va&&(Fo=0),ae.results.push(da),ae.emojis[Va]=da,Se[Va]=Fo}}ae.results.sort(function(wl,vl){return Se[wl.id]-Se[vl.id]})}se=ae.emojis},gt=0;gt<K.length;gt++)je();return ae.results}).filter(function(K){return K});var U=null;return(U=C.length>1?ce.apply(null,C):C.length?C[0]:[])&&U.length>T&&(U=U.slice(0,T)),U}},{key:"addCustomEmoji",value:function(F){var T=Object.assign({},F,{id:F.short_names[0],custom:!0});T.search||(T.search=y(T));var D=new ve(T);return this._emojis[D.id]=D,this._customCategory.emojis.push(D),D}},{key:"addEmoji",value:function(F){var T=this,D=this._data.emojis[F];if(!this.isEmojiNeeded(D))return!1;var C=new ve(D);if(this._emojis[F]=C,C.native&&(this._nativeEmojis[C.native]=C),C._skins)for(var L in C._skins){var U=C._skins[L];U.native&&(this._nativeEmojis[U.native]=U)}return C.emoticons&&C.emoticons.forEach(function(K){T._emoticons[K]||(T._emoticons[K]=F)}),C}},{key:"isCategoryNeeded",value:function(F){var T=!this._include||!this._include.length||this._include.indexOf(F)>-1,D=!(!this._exclude||!this._exclude.length)&&this._exclude.indexOf(F)>-1;return!(!T||D)}},{key:"isEmojiNeeded",value:function(F){return!this._emojisFilter||this._emojisFilter(F)}}])}(),ve=function(){return ie(function F(T){if(N(this,F),this._data=Object.assign({},T),this._skins=null,this._data.skin_variations)for(var D in this._skins=[],Ye){var C=Ye[D],L=this._data.skin_variations[C],U=Object.assign({},T);for(var K in L)U[K]=L[K];delete U.skin_variations,U.skin_tone=parseInt(D)+1,this._skins.push(new F(U))}for(var se in this._sanitized=Ge(this._data),this._sanitized)this[se]=this._sanitized[se];this.short_names=this._data.short_names,this.short_name=this._data.short_names[0],Object.freeze(this)},[{key:"getSkin",value:function(F){return F&&F!="native"&&this._skins?this._skins[F-1]:this}},{key:"getPosition",value:function(){var F=+(1.6666666666666667*this._data.sheet_x).toFixed(2),T=+(100/60*this._data.sheet_y).toFixed(2);return"".concat(F,"% ").concat(T,"%")}},{key:"ariaLabel",value:function(){return[this.native].concat(this.short_names).filter(Boolean).join(", ")}}])}(),Te=function(){return ie(function F(T,D,C,L,U,K,se){N(this,F),this._emoji=T,this._native=L,this._skin=D,this._set=C,this._fallback=U,this.canRender=this._canRender(),this.cssClass=this._cssClass(),this.cssStyle=this._cssStyle(se),this.content=this._content(),this.title=K===!0?T.short_name:null,this.ariaLabel=T.ariaLabel(),Object.freeze(this)},[{key:"getEmoji",value:function(){return this._emoji.getSkin(this._skin)}},{key:"_canRender",value:function(){return this._isCustom()||this._isNative()||this._hasEmoji()||this._fallback}},{key:"_cssClass",value:function(){return["emoji-set-"+this._set,"emoji-type-"+this._emojiType()]}},{key:"_cssStyle",value:function(F){var T={};return this._isCustom()?T={backgroundImage:"url("+this.getEmoji()._data.imageUrl+")",backgroundSize:"100%",width:F+"px",height:F+"px"}:this._hasEmoji()&&!this._isNative()&&(T={backgroundPosition:this.getEmoji().getPosition()}),F&&(T=this._isNative()?Object.assign(T,{fontSize:Math.round(.95*F*10)/10+"px"}):Object.assign(T,{width:F+"px",height:F+"px"})),T}},{key:"_content",value:function(){return this._isCustom()?"":this._isNative()?this.getEmoji().native:this._hasEmoji()?"":this._fallback?this._fallback(this.getEmoji()):null}},{key:"_isNative",value:function(){return this._native}},{key:"_isCustom",value:function(){return this.getEmoji().custom}},{key:"_hasEmoji",value:function(){if(!this.getEmoji()._data)return!1;var F=this.getEmoji()._data["has_img_"+this._set];return F===void 0||F}},{key:"_emojiType",value:function(){return this._isCustom()?"custom":this._isNative()?"native":this._hasEmoji()?"image":"fallback"}}])}();function Ge(F){var T=F.name,D=F.short_names,C=F.skin_tone,L=F.skin_variations,U=F.emoticons,K=F.unified,se=F.custom,ae=F.imageUrl,ye=F.id||D[0],je=":".concat(ye,":");return se?{id:ye,name:T,colons:je,emoticons:U,custom:se,imageUrl:ae}:(C&&(je+=":skin-tone-".concat(C,":")),{id:ye,name:T,colons:je,emoticons:U,unified:K.toLowerCase(),skin:C||(L?1:null),native:fe(K)})}function J(F,T,D){return(T=z(T))in F?Object.defineProperty(F,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):F[T]=D,F}var we={native:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},fallback:{type:Function},skin:{type:Number,default:1},set:{type:String,default:"apple"},emoji:{type:[String,Object],required:!0},size:{type:Number,default:null},tag:{type:String,default:"span"}},_e={perLine:{type:Number,default:9},maxSearchResults:{type:Number,default:75},emojiSize:{type:Number,default:24},title:{type:String,default:"Emoji Mart™"},emoji:{type:String,default:"department_store"},color:{type:String,default:"#ae65c5"},set:{type:String,default:"apple"},skin:{type:Number,default:null},defaultSkin:{type:Number,default:1},native:{type:Boolean,default:!1},emojiTooltip:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},i18n:{type:Object,default:function(){return{}}},showPreview:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showCategories:{type:Boolean,default:!0},showSkinTones:{type:Boolean,default:!0},infiniteScroll:{type:Boolean,default:!0},pickerStyles:{type:Object,default:function(){return{}}}};function Oe(F,T){var D=Object.keys(F);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(F);T&&(C=C.filter(function(L){return Object.getOwnPropertyDescriptor(F,L).enumerable})),D.push.apply(D,C)}return D}function qe(F){for(var T=1;T<arguments.length;T++){var D=arguments[T]!=null?arguments[T]:{};T%2?Oe(Object(D),!0).forEach(function(C){J(F,C,D[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(D)):Oe(Object(D)).forEach(function(C){Object.defineProperty(F,C,Object.getOwnPropertyDescriptor(D,C))})}return F}var Qe=c({props:qe(qe({},we),{},{data:{type:Object,required:!0}}),emits:["click","mouseenter","mouseleave"],computed:{view:function(){return new Te(this.emojiObject,this.skin,this.set,this.native,this.fallback,this.tooltip,this.size)},sanitizedData:function(){return this.emojiObject._sanitized},title:function(){return this.tooltip?this.emojiObject.short_name:null},emojiObject:function(){return typeof this.emoji=="string"?this.data.findEmoji(this.emoji):this.emoji}},created:function(){},methods:{onClick:function(){this.$emit("click",this.emojiObject)},onMouseEnter:function(){this.$emit("mouseenter",this.emojiObject)},onMouseLeave:function(){this.$emit("mouseleave",this.emojiObject)}}},function(){var F=this,T=F._self._c;return F.view.canRender?T(F.tag,{tag:"component",staticClass:"emoji-mart-emoji",attrs:{title:F.view.title,"aria-label":F.view.ariaLabel,"data-title":F.title},on:{mouseenter:F.onMouseEnter,mouseleave:F.onMouseLeave,click:F.onClick}},[T("span",{class:F.view.cssClass,style:F.view.cssStyle},[F._v(F._s(F.view.content))])]):F._e()},[]).exports,Me=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},emojis:{type:Array},emojiProps:{type:Object,required:!0}},methods:{activeClass:function(F){return this.emojiProps.selectedEmoji&&this.emojiProps.selectedEmojiCategory&&this.emojiProps.selectedEmoji.id==F.id&&this.emojiProps.selectedEmojiCategory.id==this.id?"emoji-mart-emoji-selected":""}},computed:{isVisible:function(){return!!this.emojis},isSearch:function(){return this.name=="Search"},hasResults:function(){return this.emojis.length>0},emojiObjects:function(){var F=this;return this.emojis.map(function(T){return{emojiObject:T,emojiView:new Te(T,F.emojiProps.skin,F.emojiProps.set,F.emojiProps.native,F.emojiProps.fallback,F.emojiProps.emojiTooltip,F.emojiProps.emojiSize)}})}},components:{Emoji:Qe}},function(){var F=this,T=F._self._c;return F.isVisible&&(F.isSearch||F.hasResults)?T("section",{class:{"emoji-mart-category":!0,"emoji-mart-no-results":!F.hasResults},attrs:{"aria-label":F.i18n.categories[F.id]}},[T("div",{staticClass:"emoji-mart-category-label"},[T("h3",{staticClass:"emoji-mart-category-label"},[F._v(F._s(F.i18n.categories[F.id]))])]),F._v(" "),F._l(F.emojiObjects,function(D){var C=D.emojiObject,L=D.emojiView;return[L.canRender?T("button",{key:C.id,staticClass:"emoji-mart-emoji",class:F.activeClass(C),attrs:{"aria-label":L.ariaLabel,role:"option","aria-selected":"false","aria-posinset":"1","aria-setsize":"1812",type:"button","data-title":C.short_name,title:L.title},on:{mouseenter:function(U){F.emojiProps.onEnter(L.getEmoji())},mouseleave:function(U){F.emojiProps.onLeave(L.getEmoji())},click:function(U){F.emojiProps.onClick(L.getEmoji())}}},[T("span",{class:L.cssClass,style:L.cssStyle},[F._v(F._s(L.content))])]):F._e()]}),F._v(" "),F.hasResults?F._e():T("div",[T("emoji",{attrs:{data:F.data,emoji:"sleuth_or_spy",native:F.emojiProps.native,skin:F.emojiProps.skin,set:F.emojiProps.set}}),F._v(" "),T("div",{staticClass:"emoji-mart-no-results-label"},[F._v(F._s(F.i18n.notfound))])],1)],2):F._e()},[]).exports,p=c({props:{skin:{type:Number,required:!0}},emits:["change"],data:function(){return{opened:!1}},methods:{onClick:function(F){this.opened&&F!=this.skin&&this.$emit("change",F),this.opened=!this.opened}}},function(){var F=this,T=F._self._c;return T("div",{class:{"emoji-mart-skin-swatches":!0,"emoji-mart-skin-swatches-opened":F.opened}},F._l(6,function(D){return T("span",{key:D,class:{"emoji-mart-skin-swatch":!0,"emoji-mart-skin-swatch-selected":F.skin==D}},[T("span",{class:"emoji-mart-skin emoji-mart-skin-tone-"+D,on:{click:function(C){return F.onClick(D)}}})])}),0)},[]).exports,A=c({props:{data:{type:Object,required:!0},title:{type:String,required:!0},emoji:{type:[String,Object]},idleEmoji:{type:[String,Object],required:!0},showSkinTones:{type:Boolean,default:!0},emojiProps:{type:Object,required:!0},skinProps:{type:Object,required:!0},onSkinChange:{type:Function,required:!0}},computed:{emojiData:function(){return this.emoji?this.emoji:{}},emojiShortNames:function(){return this.emojiData.short_names},emojiEmoticons:function(){return this.emojiData.emoticons}},components:{Emoji:Qe,Skins:p}},function(){var F=this,T=F._self._c;return T("div",{staticClass:"emoji-mart-preview"},[F.emoji?[T("div",{staticClass:"emoji-mart-preview-emoji"},[T("emoji",{attrs:{data:F.data,emoji:F.emoji,native:F.emojiProps.native,skin:F.emojiProps.skin,set:F.emojiProps.set}})],1),F._v(" "),T("div",{staticClass:"emoji-mart-preview-data"},[T("div",{staticClass:"emoji-mart-preview-name"},[F._v(F._s(F.emoji.name))]),F._v(" "),T("div",{staticClass:"emoji-mart-preview-shortnames"},F._l(F.emojiShortNames,function(D){return T("span",{key:D,staticClass:"emoji-mart-preview-shortname"},[F._v(":"+F._s(D)+":")])}),0),F._v(" "),T("div",{staticClass:"emoji-mart-preview-emoticons"},F._l(F.emojiEmoticons,function(D){return T("span",{key:D,staticClass:"emoji-mart-preview-emoticon"},[F._v(F._s(D))])}),0)])]:[T("div",{staticClass:"emoji-mart-preview-emoji"},[T("emoji",{attrs:{data:F.data,emoji:F.idleEmoji,native:F.emojiProps.native,skin:F.emojiProps.skin,set:F.emojiProps.set}})],1),F._v(" "),T("div",{staticClass:"emoji-mart-preview-data"},[T("span",{staticClass:"emoji-mart-title-label"},[F._v(F._s(F.title))])]),F._v(" "),F.showSkinTones?T("div",{staticClass:"emoji-mart-preview-skins"},[T("skins",{attrs:{skin:F.skinProps.skin},on:{change:function(D){return F.onSkinChange(D)}}})],1):F._e()]],2)},[]).exports,E=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},autoFocus:{type:Boolean,default:!1},onSearch:{type:Function,required:!0},onArrowLeft:{type:Function,required:!1},onArrowRight:{type:Function,required:!1},onArrowDown:{type:Function,required:!1},onArrowUp:{type:Function,required:!1},onEnter:{type:Function,required:!1}},emits:["search","enter","arrowUp","arrowDown","arrowRight","arrowLeft"],data:function(){return{value:""}},computed:{emojiIndex:function(){return this.data}},watch:{value:function(){this.$emit("search",this.value)}},methods:{clear:function(){this.value=""}},mounted:function(){var F=this.$el.querySelector("input");this.autoFocus&&F.focus()}},function(){var F=this,T=F._self._c;return T("div",{staticClass:"emoji-mart-search"},[T("input",{directives:[{name:"model",rawName:"v-model",value:F.value,expression:"value"}],attrs:{type:"text",placeholder:F.i18n.search,role:"textbox","aria-autocomplete":"list","aria-owns":"emoji-mart-list","aria-label":"Search for an emoji","aria-describedby":"emoji-mart-search-description"},domProps:{value:F.value},on:{keydown:[function(D){return!D.type.indexOf("key")&&F._k(D.keyCode,"left",37,D.key,["Left","ArrowLeft"])||"button"in D&&D.button!==0?null:function(C){return F.$emit("arrowLeft",C)}.apply(null,arguments)},function(D){return!D.type.indexOf("key")&&F._k(D.keyCode,"right",39,D.key,["Right","ArrowRight"])||"button"in D&&D.button!==2?null:function(){return F.$emit("arrowRight")}.apply(null,arguments)},function(D){return!D.type.indexOf("key")&&F._k(D.keyCode,"down",40,D.key,["Down","ArrowDown"])?null:function(){return F.$emit("arrowDown")}.apply(null,arguments)},function(D){return!D.type.indexOf("key")&&F._k(D.keyCode,"up",38,D.key,["Up","ArrowUp"])?null:function(C){return F.$emit("arrowUp",C)}.apply(null,arguments)},function(D){return!D.type.indexOf("key")&&F._k(D.keyCode,"enter",13,D.key,"Enter")?null:function(){return F.$emit("enter")}.apply(null,arguments)}],input:function(D){D.target.composing||(F.value=D.target.value)}}}),F._v(" "),T("span",{staticClass:"hidden",attrs:{id:"emoji-picker-search-description"}},[F._v(`Use the left, right, up and down arrow keys to navigate the emoji search
    results.`)])])},[]),Y=E.exports;function Q(F,T){(T==null||T>F.length)&&(T=F.length);for(var D=0,C=new Array(T);D<T;D++)C[D]=F[D];return C}o(537);var V=function(){return ie(function F(T){var D,C;N(this,F),this._vm=T,this._data=T.data,this._perLine=T.perLine,this._categories=[],(D=this._categories).push.apply(D,function(L){if(Array.isArray(L))return Q(L)}(C=this._data.categories())||function(L){if(typeof Symbol<"u"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}(C)||function(L,U){if(L){if(typeof L=="string")return Q(L,U);var K=Object.prototype.toString.call(L).slice(8,-1);return K==="Object"&&L.constructor&&(K=L.constructor.name),K==="Map"||K==="Set"?Array.from(L):K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K)?Q(L,U):void 0}}(C)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),this._categories=this._categories.filter(function(L){return L.emojis.length>0}),this._categories[0].first=!0,Object.freeze(this._categories),this.activeCategory=this._categories[0],this.searchEmojis=null,this.previewEmoji=null,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=-1},[{key:"onScroll",value:function(){for(var F=this._vm.$refs.scroll.scrollTop,T=this.filteredCategories[0],D=0,C=this.filteredCategories.length;D<C;D++){var L=this.filteredCategories[D],U=this._vm.getCategoryComponent(D);if(U&&U.$el.offsetTop-50>F)break;T=L}this.activeCategory=T}},{key:"allCategories",get:function(){return this._categories}},{key:"filteredCategories",get:function(){return this.searchEmojis?[{id:"search",name:"Search",emojis:this.searchEmojis}]:this._categories.filter(function(F){return F.emojis.length>0})}},{key:"previewEmojiCategory",get:function(){return this.previewEmojiCategoryIdx>=0?this.filteredCategories[this.previewEmojiCategoryIdx]:null}},{key:"onAnchorClick",value:function(F){var T=this;if(!this.searchEmojis){var D=this.filteredCategories.indexOf(F),C=this._vm.getCategoryComponent(D);this._vm.infiniteScroll?function(){if(C){var L=C.$el.offsetTop;F.first&&(L=0),T._vm.$refs.scroll.scrollTop=L}}():this.activeCategory=this.filteredCategories[D]}}},{key:"onSearch",value:function(F){var T=this._data.search(F,this.maxSearchResults);this.searchEmojis=T,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=0,this.updatePreviewEmoji()}},{key:"onEmojiEnter",value:function(F){this.previewEmoji=F,this.previewEmojiIdx=-1,this.previewEmojiCategoryIdx=-1}},{key:"onEmojiLeave",value:function(F){this.previewEmoji=null}},{key:"onArrowLeft",value:function(){this.previewEmojiIdx>0?this.previewEmojiIdx-=1:(this.previewEmojiCategoryIdx-=1,this.previewEmojiCategoryIdx<0?this.previewEmojiCategoryIdx=0:this.previewEmojiIdx=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length-1),this.updatePreviewEmoji()}},{key:"onArrowRight",value:function(){this.previewEmojiIdx<this.emojisLength(this.previewEmojiCategoryIdx)-1?this.previewEmojiIdx+=1:(this.previewEmojiCategoryIdx+=1,this.previewEmojiCategoryIdx>=this.filteredCategories.length?this.previewEmojiCategoryIdx=this.filteredCategories.length-1:this.previewEmojiIdx=0),this.updatePreviewEmoji()}},{key:"onArrowDown",value:function(){if(this.previewEmojiIdx==-1)return this.onArrowRight();var F=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length,T=this._perLine;this.previewEmojiIdx+T>F&&(T=F%this._perLine);for(var D=0;D<T;D++)this.onArrowRight();this.updatePreviewEmoji()}},{key:"onArrowUp",value:function(){var F=this._perLine;this.previewEmojiIdx-F<0&&(F=this.previewEmojiCategoryIdx>0?this.filteredCategories[this.previewEmojiCategoryIdx-1].emojis.length%this._perLine:0);for(var T=0;T<F;T++)this.onArrowLeft();this.updatePreviewEmoji()}},{key:"updatePreviewEmoji",value:function(){var F=this;this.previewEmoji=this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx],this._vm.$nextTick(function(){var T=F._vm.$refs.scroll,D=T.querySelector(".emoji-mart-emoji-selected"),C=T.offsetTop-T.offsetHeight;D&&D.offsetTop+D.offsetHeight>C+T.scrollTop&&(T.scrollTop+=D.offsetHeight),D&&D.offsetTop<T.scrollTop&&(T.scrollTop-=D.offsetHeight)})}},{key:"emojisLength",value:function(F){return F==-1?0:this.filteredCategories[F].emojis.length}}])}();function le(F,T){var D=Object.keys(F);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(F);T&&(C=C.filter(function(L){return Object.getOwnPropertyDescriptor(F,L).enumerable})),D.push.apply(D,C)}return D}function ge(F){for(var T=1;T<arguments.length;T++){var D=arguments[T]!=null?arguments[T]:{};T%2?le(Object(D),!0).forEach(function(C){J(F,C,D[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(D)):le(Object(D)).forEach(function(C){Object.defineProperty(F,C,Object.getOwnPropertyDescriptor(D,C))})}return F}var me={search:"Search",notfound:"No Emoji Found",categories:{search:"Search Results",recent:"Frequently Used",smileys:"Smileys & Emotion",people:"People & Body",nature:"Animals & Nature",foods:"Food & Drink",activity:"Activity",places:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"}},Ue={props:ge(ge({},_e),{},{data:{type:Object,required:!0}}),emits:["select","skin-change"],data:function(){return{activeSkin:this.skin||h.get("skin")||this.defaultSkin,view:new V(this)}},computed:{customStyles:function(){return ge({width:this.calculateWidth+"px"},this.pickerStyles)},emojiProps:function(){return{native:this.native,skin:this.activeSkin,set:this.set,emojiTooltip:this.emojiTooltip,emojiSize:this.emojiSize,selectedEmoji:this.view.previewEmoji,selectedEmojiCategory:this.view.previewEmojiCategory,onEnter:this.onEmojiEnter.bind(this),onLeave:this.onEmojiLeave.bind(this),onClick:this.onEmojiClick.bind(this)}},skinProps:function(){return{skin:this.activeSkin}},calculateWidth:function(){return this.perLine*(this.emojiSize+12)+12+2+function(){if(typeof document>"u")return 0;var F=document.createElement("div");F.style.width="100px",F.style.height="100px",F.style.overflow="scroll",F.style.position="absolute",F.style.top="-9999px",document.body.appendChild(F);var T=F.offsetWidth-F.clientWidth;return document.body.removeChild(F),T}()},filteredCategories:function(){return this.view.filteredCategories},mergedI18n:function(){return Object.freeze(ke(me,this.i18n))},idleEmoji:function(){try{return this.data.emoji(this.emoji)}catch(F){return console.error("Default preview emoji `"+this.emoji+"` is not available, check the Picker `emoji` property"),console.error(F),this.data.firstEmoji()}}},watch:{skin:function(){this.onSkinChange(this.skin)}},methods:{onScroll:function(){this.infiniteScroll&&!this.waitingForPaint&&(this.waitingForPaint=!0,window.requestAnimationFrame(this.onScrollPaint.bind(this)))},onScrollPaint:function(){this.waitingForPaint=!1,this.view.onScroll()},onAnchorClick:function(F){this.view.onAnchorClick(F)},onSearch:function(F){this.view.onSearch(F)},onEmojiEnter:function(F){this.view.onEmojiEnter(F)},onEmojiLeave:function(F){this.view.onEmojiLeave(F)},onArrowLeft:function(F){var T=this.view.previewEmojiIdx;this.view.onArrowLeft(),F&&this.view.previewEmojiIdx!==T&&F.preventDefault()},onArrowRight:function(){this.view.onArrowRight()},onArrowDown:function(){this.view.onArrowDown()},onArrowUp:function(F){this.view.onArrowUp(),F.preventDefault()},onEnter:function(){this.view.previewEmoji&&(this.$emit("select",this.view.previewEmoji),W.add(this.view.previewEmoji))},onEmojiClick:function(F){this.$emit("select",F),W.add(F)},onTextSelect:function(F){F.stopPropagation()},onSkinChange:function(F){this.activeSkin=F,h.update({skin:F}),this.$emit("skin-change",F)},getCategoryComponent:function(F){var T=this.$refs["categories_"+F];return T&&"0"in T?T[0]:T}},components:{Anchors:R,Category:Me,Preview:A,Search:Y}},P=c(Ue,function(){var F=this,T=F._self._c;return T("section",{staticClass:"emoji-mart emoji-mart-static",style:F.customStyles},[F.showCategories?T("div",{staticClass:"emoji-mart-bar emoji-mart-bar-anchors"},[T("anchors",{attrs:{data:F.data,i18n:F.mergedI18n,color:F.color,categories:F.view.allCategories,"active-category":F.view.activeCategory},on:{click:F.onAnchorClick}})],1):F._e(),F._v(" "),F._t("searchTemplate",function(){return[F.showSearch?T("search",{ref:"search",attrs:{data:F.data,i18n:F.mergedI18n,"auto-focus":F.autoFocus,"on-search":F.onSearch},on:{search:F.onSearch,arrowLeft:F.onArrowLeft,arrowRight:F.onArrowRight,arrowDown:F.onArrowDown,arrowUp:F.onArrowUp,enter:F.onEnter,select:F.onTextSelect}}):F._e()]},{data:F.data,i18n:F.i18n,autoFocus:F.autoFocus,onSearch:F.onSearch}),F._v(" "),T("div",{ref:"scroll",staticClass:"emoji-mart-scroll",attrs:{role:"tabpanel"},on:{scroll:F.onScroll}},[T("div",{ref:"scrollContent",attrs:{id:"emoji-mart-list",role:"listbox","aria-expanded":"true"}},[F._t("customCategory"),F._v(" "),F._l(F.view.filteredCategories,function(D,C){return T("category",{directives:[{name:"show",rawName:"v-show",value:F.infiniteScroll||D==F.view.activeCategory,expression:"infiniteScroll || category == view.activeCategory"}],key:D.id,ref:"categories_"+C,refInFor:!0,attrs:{data:F.data,i18n:F.mergedI18n,id:D.id,name:D.name,emojis:D.emojis,"emoji-props":F.emojiProps}})})],2)]),F._v(" "),F._t("previewTemplate",function(){return[F.showPreview?T("div",{staticClass:"emoji-mart-bar emoji-mart-bar-preview"},[T("preview",{attrs:{data:F.data,title:F.title,emoji:F.view.previewEmoji,"idle-emoji":F.idleEmoji,"show-skin-tones":F.showSkinTones,"emoji-props":F.emojiProps,"skin-props":F.skinProps,"on-skin-change":F.onSkinChange}})],1):F._e()]},{data:F.data,title:F.title,emoji:F.view.previewEmoji,idleEmoji:F.idleEmoji,showSkinTones:F.showSkinTones,emojiProps:F.emojiProps,skinProps:F.skinProps,onSkinChange:F.onSkinChange})],2)},[]),$=P.exports}(),s}()})})(el);var ds=el.exports;const $2=Rn("nextcloud-vue").persist(!0).build();oe(p1,Ws,$s,Vs);const fc={name:"CircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var gc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},hc=[],Fc=te(fc,gc,hc,!1,null,null);const Q2=Fc.exports;const K2={search:x("Search emoji"),notfound:x("No emoji found"),categories:{search:x("Search results"),recent:x("Frequently used"),smileys:x("Smileys & Emotion"),people:x("People & Body"),nature:x("Animals & Nature"),foods:x("Food & Drink"),activity:x("Activities"),places:x("Travel & Places"),objects:x("Objects"),symbols:x("Symbols"),flags:x("Flags"),custom:x("Custom")}},J2=[new Ae(255,222,52,x("Neutral skin color")),new Ae(228,205,166,x("Light skin tone")),new Ae(250,221,192,x("Medium light skin tone")),new Ae(174,129,87,x("Medium skin tone")),new Ae(158,113,88,x("Medium dark skin tone")),new Ae(96,79,69,x("Dark skin tone"))];ds.Emoji,wa,Nn,ds.Picker,x("Pick an emoji"),x,oe(b1);const al={name:"NcProgressBar",props:{value:{type:Number,default:0,validator(e){return e>=0&&e<=100}},size:{type:[String,Number],default:"small",validator(e){return["small","medium"].includes(e)||typeof e=="number"}},error:{type:Boolean,default:!1},type:{type:String,default:"linear",validator(e){return["linear","circular"].includes(e)}},color:{type:String,default:null}},data(){return{stroke:4}},computed:{height(){return this.type==="circular"?Number.isInteger(this.size)?this.size:44:this.size==="small"?4:this.size==="medium"?6:this.size},progress(){return this.value/100},radius(){return this.height/2},radiusNormalized(){return this.radius-3*this.stroke},circumference(){return this.radiusNormalized*2*Math.PI}}},fs=()=>{T1((e,a)=>({"497e8a2b":e.color}))},gs=al.setup;al.setup=gs?(e,a)=>(fs(),gs(e,a)):fs;const uc={name:"AccountGroupIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var cc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon account-group-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},mc=[],pc=te(uc,cc,mc,!1,null,null);const bc=pc.exports,Tc={name:"OpenInNewIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Dc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon open-in-new-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},yc=[],Ec=te(Tc,Dc,yc,!1,null,null);const kc=Ec.exports;oe(D1);const Ac={name:"NcTeamResources",components:{AccountGroup:bc,ChevronDown:Tr,ChevronUp:Yu,OpenInNew:kc,NcButton:wa,NcIconSvgWrapper:y0},props:{providerId:{type:String,default:null},itemId:{type:[String,Number],default:null}},data(){var e,a;return{appEnabled:((e=OC==null?void 0:OC.appswebroots)==null?void 0:e.circles)!==void 0&&((a=OC.config.version.split(".")[0])!=null?a:0)>=29,loading:!1,teamResources:null,teamOpen:[]}},computed:{isVisible(){var e;return!this.loading&&((e=this.teamResources)==null?void 0:e.length)>0},teamProviders(){return e=>{var a;return(a=this.teamResources.find(i=>i.teamId===e).resources)==null?void 0:a.reduce((i,n)=>(n.provider.id===this.providerId&&n.id===String(this.itemId)||(i[n.provider.id]||(i[n.provider.id]=n.provider,i[n.provider.id].resources=[]),n.provider.id===this.providerId&&n.id===String(this.itemId))||i[n.provider.id].resources.push(n),i),{})}},open(){return e=>this.teamOpen.indexOf(e)!==-1}},watch:{providerId(){this.fetchTeamResources()},itemId(){this.fetchTeamResources()}},created(){this.fetchTeamResources()},methods:{t:x,async fetchTeamResources(){var e;try{this.loading=!0;const a=await ma.get(Pa("/teams/resources/".concat(this.providerId,"/").concat(this.itemId)));this.teamResources=a.data.ocs.data.teams,this.teamOpen=[(e=this.teamResources[0])==null?void 0:e.teamId]}catch(a){this.teamResources=null,console.error(a)}finally{this.loading=!1}},toggleOpen(e,a){a?this.teamOpen.push(e):this.teamOpen.splice(this.teamOpen.indexOf(e),1)}}};var wc=function(){var e=this,a=e._self._c;return e.appEnabled&&e.isVisible?a("div",{staticClass:"team-resources"},[a("h5",{staticClass:"team-resources__header"},[e._v(" "+e._s(e.t("Related team resources"))+" ")]),e._l(e.teamResources,function(i){return a("details",{key:i.teamId,staticClass:"related-team",attrs:{name:"Team resources",open:e.open(i.teamId)},on:{toggle:n=>e.toggleOpen(i.teamId,n.target.open)}},[a("summary",{staticClass:"related-team__header"},[a("h5",{staticClass:"related-team__name"},[a("AccountGroup",{attrs:{size:20}}),e._v(" "+e._s(i.displayName)+" ")],1),a("NcButton",{attrs:{type:"tertiary",href:i.link,"aria-label":e.t("View team"),title:e.t("View team")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("OpenInNew",{attrs:{size:20}})]},proxy:!0}],null,!0)}),e.open(i.teamId)?a("ChevronUp",{attrs:{size:20}}):a("ChevronDown",{attrs:{size:20}})],1),a("div",e._l(e.teamProviders(i.teamId),function(n){return a("div",{key:n.id,staticClass:"related-team-provider"},[n.resources.length>0?a("h6",[e._v(" "+e._s(n.name)+" ")]):e._e(),a("ul",e._l(n.resources,function(o){return a("li",{key:o.url,staticClass:"related-team-resource"},[a("a",{staticClass:"related-team-resource__link",attrs:{href:o.url}},[o.iconEmoji?a("span",{staticClass:"resource__icon"},[e._v(" "+e._s(o.iconEmoji)+" ")]):o.iconSvg?a("NcIconSvgWrapper",{staticClass:"resource__icon",attrs:{svg:o.iconSvg,size:20}}):o.iconURL?a("span",{staticClass:"resource__icon"},[a("img",{attrs:{src:o.iconURL,alt:""}})]):e._e(),a("span",{staticClass:"resource__name"},[e._v(" "+e._s(o.label)+" ")])],1)])}),0)])}),0)])})],2):e._e()},vc=[],Sc=te(Ac,wc,vc,!1,null,"de46bdbe");const X2=Sc.exports;oe(y1);const Rc={name:"NcResource",components:{NcButton:wa},props:{icon:{type:String,required:!0},name:{type:String,required:!0},url:{type:String,required:!0}},data(){return{labelTranslated:x('Open link to "{resourceName}"',{resourceName:this.name})}},computed:{route(){return Jn(this.$router,this.url)}},methods:{t:x}};var Cc=function(){var e=this,a=e._self._c;return a("li",{staticClass:"resource"},[a("NcButton",{staticClass:"resource__button",attrs:{"aria-label":e.labelTranslated,type:"tertiary",to:e.route,href:e.route?null:e.url},scopedSlots:e._u([{key:"icon",fn:function(){return[a("div",{staticClass:"resource__icon"},[a("img",{attrs:{src:e.icon}})])]},proxy:!0}])},[e._v(" "+e._s(e.name)+" ")])],1)},Oc=[],Nc=te(Rc,Cc,Oc,!1,null,"ac1115a7");const e3=Nc.exports;oe(E1),x("Related resources"),x("Anything shared with the same group of people will show up here"),x;const Bc={name:"NcMentionBubble",props:{id:{type:String,required:!0},title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},icon:{type:String,required:!0},iconUrl:{type:[String,null],default:null},source:{type:String,required:!0},primary:{type:Boolean,default:!1}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},mentionText(){return!this.id.includes(" ")&&!this.id.includes("/")?"@".concat(this.id):'@"'.concat(this.id,'"')},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:Gn}};var xc=function(){var e=this,a=e._self._c;return a("span",{staticClass:"mention-bubble",class:{"mention-bubble--primary":e.primary},attrs:{contenteditable:"false"}},[a("span",{staticClass:"mention-bubble__wrapper"},[a("span",{staticClass:"mention-bubble__content"},[a("span",{staticClass:"mention-bubble__icon",class:[e.icon,"mention-bubble__icon--".concat(e.avatarUrl?"with-avatar":"")],style:e.avatarUrl?{backgroundImage:"url(".concat(e.avatarUrl,")")}:null}),a("span",{staticClass:"mention-bubble__title",attrs:{role:"heading",title:e.labelWithFallback}})]),a("span",{staticClass:"mention-bubble__select",attrs:{role:"none"}},[e._v(e._s(e.mentionText))])])])},Mc=[],jc=te(Bc,xc,Mc,!1,null,"a519576f");const a3=jc.exports,tl=/(?=[a-z0-9_\-@.'])\B/.source,Yc=/(@[a-z0-9_\-@.']+)/.source,qc=/@&quot;guest\/[a-f0-9]+&quot;/.source,Lc=/@&quot;(?:federated_)?(?:group|team|user){1}\/[a-z0-9_\-@.' /:]+&quot;/.source,Zc=/@&quot;[a-z0-9_\-@.' ]+&quot;/.source,Ic="(".concat(qc,"|").concat(Lc,"|").concat(Zc,")"),t3=new RegExp("".concat(tl).concat(Yc),"gi"),i3=new RegExp("".concat(tl).concat(Ic),"gi");function sa(e,a){for(var i in a)e[i]=a[i];return e}var Hc=/[!'()*]/g,Pc=function(e){return"%"+e.charCodeAt(0).toString(16)},Gc=/%2C/g,ut=function(e){return encodeURIComponent(e).replace(Hc,Pc).replace(Gc,",")};function yn(e){try{return decodeURIComponent(e)}catch{}return e}function Uc(e,a,i){a===void 0&&(a={});var n=i||zc,o;try{o=n(e||"")}catch{o={}}for(var s in a){var r=a[s];o[s]=Array.isArray(r)?r.map(hs):hs(r)}return o}var hs=function(e){return e==null||typeof e=="object"?e:String(e)};function zc(e){var a={};return e=e.trim().replace(/^(\?|#|&)/,""),e&&e.split("&").forEach(function(i){var n=i.replace(/\+/g," ").split("="),o=yn(n.shift()),s=n.length>0?yn(n.join("=")):null;a[o]===void 0?a[o]=s:Array.isArray(a[o])?a[o].push(s):a[o]=[a[o],s]}),a}function Wc(e){var a=e?Object.keys(e).map(function(i){var n=e[i];if(n===void 0)return"";if(n===null)return ut(i);if(Array.isArray(n)){var o=[];return n.forEach(function(s){s!==void 0&&(s===null?o.push(ut(i)):o.push(ut(i)+"="+ut(s)))}),o.join("&")}return ut(i)+"="+ut(n)}).filter(function(i){return i.length>0}).join("&"):null;return a?"?"+a:""}var u0=/\/?$/;function c0(e,a,i,n){var o=n&&n.options.stringifyQuery,s=a.query||{};try{s=En(s)}catch{}var r={name:a.name||e&&e.name,meta:e&&e.meta||{},path:a.path||"/",hash:a.hash||"",query:s,params:a.params||{},fullPath:Fs(a,o),matched:e?Vc(e):[]};return i&&(r.redirectedFrom=Fs(i,o)),Object.freeze(r)}function En(e){if(Array.isArray(e))return e.map(En);if(e&&typeof e=="object"){var a={};for(var i in e)a[i]=En(e[i]);return a}else return e}var Wa=c0(null,{path:"/"});function Vc(e){for(var a=[];e;)a.unshift(e),e=e.parent;return a}function Fs(e,a){var i=e.path,n=e.query;n===void 0&&(n={});var o=e.hash;o===void 0&&(o="");var s=a||Wc;return(i||"/")+s(n)+o}function il(e,a,i){return a===Wa?e===a:a?e.path&&a.path?e.path.replace(u0,"")===a.path.replace(u0,"")&&(i||e.hash===a.hash&&Si(e.query,a.query)):e.name&&a.name?e.name===a.name&&(i||e.hash===a.hash&&Si(e.query,a.query)&&Si(e.params,a.params)):!1:!1}function Si(e,a){if(e===void 0&&(e={}),a===void 0&&(a={}),!e||!a)return e===a;var i=Object.keys(e).sort(),n=Object.keys(a).sort();return i.length!==n.length?!1:i.every(function(o,s){var r=e[o],_=n[s];if(_!==o)return!1;var l=a[o];return r==null||l==null?r===l:typeof r=="object"&&typeof l=="object"?Si(r,l):String(r)===String(l)})}function $c(e,a){return e.path.replace(u0,"/").indexOf(a.path.replace(u0,"/"))===0&&(!a.hash||e.hash===a.hash)&&Qc(e.query,a.query)}function Qc(e,a){for(var i in a)if(!(i in e))return!1;return!0}function nl(e){for(var a=0;a<e.matched.length;a++){var i=e.matched[a];for(var n in i.instances){var o=i.instances[n],s=i.enteredCbs[n];if(!(!o||!s)){delete i.enteredCbs[n];for(var r=0;r<s.length;r++)o._isBeingDestroyed||s[r](o)}}}}var Kc={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,a){var i=a.props,n=a.children,o=a.parent,s=a.data;s.routerView=!0;for(var r=o.$createElement,_=i.name,l=o.$route,g=o._routerViewCache||(o._routerViewCache={}),d=0,f=!1;o&&o._routerRoot!==o;){var h=o.$vnode?o.$vnode.data:{};h.routerView&&d++,h.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=d,f){var u=g[_],m=u&&u.component;return m?(u.configProps&&us(m,s,u.route,u.configProps),r(m,s,n)):r()}var b=l.matched[d],y=b&&b.components[_];if(!b||!y)return g[_]=null,r();g[_]={component:y},s.registerRouteInstance=function(w,S){var j=b.instances[_];(S&&j!==w||!S&&j===w)&&(b.instances[_]=S)},(s.hook||(s.hook={})).prepatch=function(w,S){b.instances[_]=S.componentInstance},s.hook.init=function(w){w.data.keepAlive&&w.componentInstance&&w.componentInstance!==b.instances[_]&&(b.instances[_]=w.componentInstance),nl(l)};var k=b.props&&b.props[_];return k&&(sa(g[_],{route:l,configProps:k}),us(y,s,l,k)),r(y,s,n)}};function us(e,a,i,n){var o=a.props=Jc(i,n);if(o){o=a.props=sa({},o);var s=a.attrs=a.attrs||{};for(var r in o)(!e.props||!(r in e.props))&&(s[r]=o[r],delete o[r])}}function Jc(e,a){switch(typeof a){case"undefined":return;case"object":return a;case"function":return a(e);case"boolean":return a?e.params:void 0}}function ol(e,a,i){var n=e.charAt(0);if(n==="/")return e;if(n==="?"||n==="#")return a+e;var o=a.split("/");(!i||!o[o.length-1])&&o.pop();for(var s=e.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var _=s[r];_===".."?o.pop():_!=="."&&o.push(_)}return o[0]!==""&&o.unshift(""),o.join("/")}function Xc(e){var a="",i="",n=e.indexOf("#");n>=0&&(a=e.slice(n),e=e.slice(0,n));var o=e.indexOf("?");return o>=0&&(i=e.slice(o+1),e=e.slice(0,o)),{path:e,query:i,hash:a}}function Za(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var m0=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Tt=ll,em=no,am=om,tm=sl,im=rl,nm=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function no(e,a){for(var i=[],n=0,o=0,s="",r=a&&a.delimiter||"/",_;(_=nm.exec(e))!=null;){var l=_[0],g=_[1],d=_.index;if(s+=e.slice(o,d),o=d+l.length,g){s+=g[1];continue}var f=e[o],h=_[2],u=_[3],m=_[4],b=_[5],y=_[6],k=_[7];s&&(i.push(s),s="");var w=h!=null&&f!=null&&f!==h,S=y==="+"||y==="*",j=y==="?"||y==="*",Z=_[2]||r,O=m||b;i.push({name:u||n++,prefix:h||"",delimiter:Z,optional:j,repeat:S,partial:w,asterisk:!!k,pattern:O?lm(O):k?".*":"[^"+Ri(Z)+"]+?"})}return o<e.length&&(s+=e.substr(o)),s&&i.push(s),i}function om(e,a){return sl(no(e,a),a)}function sm(e){return encodeURI(e).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function rm(e){return encodeURI(e).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function sl(e,a){for(var i=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(i[n]=new RegExp("^(?:"+e[n].pattern+")$",so(a)));return function(o,s){for(var r="",_=o||{},l=s||{},g=l.pretty?sm:encodeURIComponent,d=0;d<e.length;d++){var f=e[d];if(typeof f=="string"){r+=f;continue}var h=_[f.name],u;if(h==null)if(f.optional){f.partial&&(r+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(m0(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(u=g(h[m]),!i[d].test(u))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(m===0?f.prefix:f.delimiter)+u}continue}if(u=f.asterisk?rm(h):g(h),!i[d].test(u))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+u+'"');r+=f.prefix+u}return r}}function Ri(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function lm(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function oo(e,a){return e.keys=a,e}function so(e){return e&&e.sensitive?"":"i"}function _m(e,a){var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)a.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return oo(e,a)}function dm(e,a,i){for(var n=[],o=0;o<e.length;o++)n.push(ll(e[o],a,i).source);var s=new RegExp("(?:"+n.join("|")+")",so(i));return oo(s,a)}function fm(e,a,i){return rl(no(e,i),a,i)}function rl(e,a,i){m0(a)||(i=a||i,a=[]),i=i||{};for(var n=i.strict,o=i.end!==!1,s="",r=0;r<e.length;r++){var _=e[r];if(typeof _=="string")s+=Ri(_);else{var l=Ri(_.prefix),g="(?:"+_.pattern+")";a.push(_),_.repeat&&(g+="(?:"+l+g+")*"),_.optional?_.partial?g=l+"("+g+")?":g="(?:"+l+"("+g+"))?":g=l+"("+g+")",s+=g}}var d=Ri(i.delimiter||"/"),f=s.slice(-d.length)===d;return n||(s=(f?s.slice(0,-d.length):s)+"(?:"+d+"(?=$))?"),o?s+="$":s+=n&&f?"":"(?="+d+"|$)",oo(new RegExp("^"+s,so(i)),a)}function ll(e,a,i){return m0(a)||(i=a||i,a=[]),i=i||{},e instanceof RegExp?_m(e,a):m0(e)?dm(e,a,i):fm(e,a,i)}Tt.parse=em,Tt.compile=am,Tt.tokensToFunction=tm,Tt.tokensToRegExp=im;var cs=Object.create(null);function Ci(e,a,i){a=a||{};try{var n=cs[e]||(cs[e]=Tt.compile(e));return typeof a.pathMatch=="string"&&(a[0]=a.pathMatch),n(a,{pretty:!0})}catch{return""}finally{delete a[0]}}function ro(e,a,i,n){var o=typeof e=="string"?{path:e}:e;if(o._normalized)return o;if(o.name){o=sa({},e);var s=o.params;return s&&typeof s=="object"&&(o.params=sa({},s)),o}if(!o.path&&o.params&&a){o=sa({},o),o._normalized=!0;var r=sa(sa({},a.params),o.params);if(a.name)o.name=a.name,o.params=r;else if(a.matched.length){var _=a.matched[a.matched.length-1].path;o.path=Ci(_,r,"path "+a.path)}return o}var l=Xc(o.path||""),g=a&&a.path||"/",d=l.path?ol(l.path,g,i||o.append):g,f=Uc(l.query,o.query,n&&n.options.parseQuery),h=o.hash||l.hash;return h&&h.charAt(0)!=="#"&&(h="#"+h),{_normalized:!0,path:d,query:f,hash:h}}var gm=[String,Object],hm=[String,Array],ms=function(){},_l={name:"RouterLink",props:{to:{type:gm,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:hm,default:"click"}},render:function(e){var a=this,i=this.$router,n=this.$route,o=i.resolve(this.to,n,this.append),s=o.location,r=o.route,_=o.href,l={},g=i.options.linkActiveClass,d=i.options.linkExactActiveClass,f=g??"router-link-active",h=d??"router-link-exact-active",u=this.activeClass==null?f:this.activeClass,m=this.exactActiveClass==null?h:this.exactActiveClass,b=r.redirectedFrom?c0(null,ro(r.redirectedFrom),null,i):r;l[m]=il(n,b,this.exactPath),l[u]=this.exact||this.exactPath?l[m]:$c(n,b);var y=l[m]?this.ariaCurrentValue:null,k=function(v){ps(v)&&(a.replace?i.replace(s,ms):i.push(s,ms))},w={click:ps};Array.isArray(this.event)?this.event.forEach(function(v){w[v]=k}):w[this.event]=k;var S={class:l},j=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:_,route:r,navigate:k,isActive:l[u],isExactActive:l[m]});if(j){if(j.length===1)return j[0];if(j.length>1||!j.length)return j.length===0?e():e("span",{},j)}if(this.tag==="a")S.on=w,S.attrs={href:_,"aria-current":y};else{var Z=dl(this.$slots.default);if(Z){Z.isStatic=!1;var O=Z.data=sa({},Z.data);O.on=O.on||{};for(var G in O.on){var W=O.on[G];G in w&&(O.on[G]=Array.isArray(W)?W:[W])}for(var I in w)I in O.on?O.on[I].push(w[I]):O.on[I]=k;var c=Z.data.attrs=sa({},Z.data.attrs);c.href=_,c["aria-current"]=y}else S.on=w}return e(this.tag,S,this.$slots.default)}};function ps(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function dl(e){if(e){for(var a,i=0;i<e.length;i++)if(a=e[i],a.tag==="a"||a.children&&(a=dl(a.children)))return a}}var p0;function kn(e){if(!(kn.installed&&p0===e)){kn.installed=!0,p0=e;var a=function(o){return o!==void 0},i=function(o,s){var r=o.$options._parentVnode;a(r)&&a(r=r.data)&&a(r=r.registerRouteInstance)&&r(o,s)};e.mixin({beforeCreate:function(){a(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,i(this,this)},destroyed:function(){i(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",Kc),e.component("RouterLink",_l);var n=e.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var oi=typeof window<"u";function mi(e,a,i,n,o){var s=a||[],r=i||Object.create(null),_=n||Object.create(null);e.forEach(function(d){An(s,r,_,d,o)});for(var l=0,g=s.length;l<g;l++)s[l]==="*"&&(s.push(s.splice(l,1)[0]),g--,l--);return{pathList:s,pathMap:r,nameMap:_}}function An(e,a,i,n,o,s){var r=n.path,_=n.name,l=n.pathToRegexpOptions||{},g=um(r,o,l.strict);typeof n.caseSensitive=="boolean"&&(l.sensitive=n.caseSensitive);var d={path:g,regex:Fm(g,l),components:n.components||{default:n.component},alias:n.alias?typeof n.alias=="string"?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:_,parent:o,matchAs:s,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:n.props==null?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(b){var y=s?Za(s+"/"+b.path):void 0;An(e,a,i,b,d,y)}),a[d.path]||(e.push(d.path),a[d.path]=d),n.alias!==void 0)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var u=f[h],m={path:u,children:n.children};An(e,a,i,m,o,d.path||"/")}_&&(i[_]||(i[_]=d))}function Fm(e,a){var i=Tt(e,[],a);return i}function um(e,a,i){return i||(e=e.replace(/\/$/,"")),e[0]==="/"||a==null?e:Za(a.path+"/"+e)}function cm(e,a){var i=mi(e),n=i.pathList,o=i.pathMap,s=i.nameMap;function r(u){mi(u,n,o,s)}function _(u,m){var b=typeof u!="object"?s[u]:void 0;mi([m||u],n,o,s,b),b&&b.alias.length&&mi(b.alias.map(function(y){return{path:y,children:[m]}}),n,o,s,b)}function l(){return n.map(function(u){return o[u]})}function g(u,m,b){var y=ro(u,m,!1,a),k=y.name;if(k){var w=s[k];if(!w)return h(null,y);var S=w.regex.keys.filter(function(W){return!W.optional}).map(function(W){return W.name});if(typeof y.params!="object"&&(y.params={}),m&&typeof m.params=="object")for(var j in m.params)!(j in y.params)&&S.indexOf(j)>-1&&(y.params[j]=m.params[j]);return y.path=Ci(w.path,y.params),h(w,y,b)}else if(y.path){y.params={};for(var Z=0;Z<n.length;Z++){var O=n[Z],G=o[O];if(mm(G.regex,y.path,y.params))return h(G,y,b)}}return h(null,y)}function d(u,m){var b=u.redirect,y=typeof b=="function"?b(c0(u,m,null,a)):b;if(typeof y=="string"&&(y={path:y}),!y||typeof y!="object")return h(null,m);var k=y,w=k.name,S=k.path,j=m.query,Z=m.hash,O=m.params;if(j=k.hasOwnProperty("query")?k.query:j,Z=k.hasOwnProperty("hash")?k.hash:Z,O=k.hasOwnProperty("params")?k.params:O,w)return s[w],g({_normalized:!0,name:w,query:j,hash:Z,params:O},void 0,m);if(S){var G=pm(S,u),W=Ci(G,O);return g({_normalized:!0,path:W,query:j,hash:Z},void 0,m)}else return h(null,m)}function f(u,m,b){var y=Ci(b,m.params),k=g({_normalized:!0,path:y});if(k){var w=k.matched,S=w[w.length-1];return m.params=k.params,h(S,m)}return h(null,m)}function h(u,m,b){return u&&u.redirect?d(u,b||m):u&&u.matchAs?f(u,m,u.matchAs):c0(u,m,b,a)}return{match:g,addRoute:_,getRoutes:l,addRoutes:r}}function mm(e,a,i){var n=a.match(e);if(n){if(!i)return!0}else return!1;for(var o=1,s=n.length;o<s;++o){var r=e.keys[o-1];r&&(i[r.name||"pathMatch"]=typeof n[o]=="string"?yn(n[o]):n[o])}return!0}function pm(e,a){return ol(e,a.parent?a.parent.path:"/",!0)}var bm=oi&&window.performance&&window.performance.now?window.performance:Date;function fl(){return bm.now().toFixed(3)}var gl=fl();function x0(){return gl}function hl(e){return gl=e}var Fl=Object.create(null);function ul(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,a=window.location.href.replace(e,""),i=sa({},window.history.state);return i.key=x0(),window.history.replaceState(i,"",a),window.addEventListener("popstate",bs),function(){window.removeEventListener("popstate",bs)}}function Ia(e,a,i,n){if(e.app){var o=e.options.scrollBehavior;o&&e.app.$nextTick(function(){var s=Tm(),r=o.call(e,a,i,n?s:null);r&&(typeof r.then=="function"?r.then(function(_){ys(_,s)}).catch(function(_){}):ys(r,s))})}}function cl(){var e=x0();e&&(Fl[e]={x:window.pageXOffset,y:window.pageYOffset})}function bs(e){cl(),e.state&&e.state.key&&hl(e.state.key)}function Tm(){var e=x0();if(e)return Fl[e]}function Dm(e,a){var i=document.documentElement,n=i.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:o.left-n.left-a.x,y:o.top-n.top-a.y}}function Ts(e){return Ct(e.x)||Ct(e.y)}function Ds(e){return{x:Ct(e.x)?e.x:window.pageXOffset,y:Ct(e.y)?e.y:window.pageYOffset}}function ym(e){return{x:Ct(e.x)?e.x:0,y:Ct(e.y)?e.y:0}}function Ct(e){return typeof e=="number"}var Em=/^#\d/;function ys(e,a){var i=typeof e=="object";if(i&&typeof e.selector=="string"){var n=Em.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(n){var o=e.offset&&typeof e.offset=="object"?e.offset:{};o=ym(o),a=Dm(n,o)}else Ts(e)&&(a=Ds(e))}else i&&Ts(e)&&(a=Ds(e));a&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:a.x,top:a.y,behavior:e.behavior}):window.scrollTo(a.x,a.y))}var Ha=oi&&function(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function b0(e,a){cl();var i=window.history;try{if(a){var n=sa({},i.state);n.key=x0(),i.replaceState(n,"",e)}else i.pushState({key:hl(fl())},"",e)}catch{window.location[a?"replace":"assign"](e)}}function wn(e){b0(e,!0)}var ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function km(e,a){return M0(e,a,ft.redirected,'Redirected when going from "'+e.fullPath+'" to "'+Sm(a)+'" via a navigation guard.')}function Am(e,a){var i=M0(e,a,ft.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return i.name="NavigationDuplicated",i}function Es(e,a){return M0(e,a,ft.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+a.fullPath+'" with a new navigation.')}function wm(e,a){return M0(e,a,ft.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+a.fullPath+'" via a navigation guard.')}function M0(e,a,i,n){var o=new Error(n);return o._isRouter=!0,o.from=e,o.to=a,o.type=i,o}var vm=["params","query","hash"];function Sm(e){if(typeof e=="string")return e;if("path"in e)return e.path;var a={};return vm.forEach(function(i){i in e&&(a[i]=e[i])}),JSON.stringify(a,null,2)}function T0(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function D0(e,a){return T0(e)&&e._isRouter&&(a==null||e.type===a)}function ks(e,a,i){var n=function(o){o>=e.length?i():e[o]?a(e[o],function(){n(o+1)}):n(o+1)};n(0)}function Rm(e){return function(a,i,n){var o=!1,s=0,r=null;ml(e,function(_,l,g,d){if(typeof _=="function"&&_.cid===void 0){o=!0,s++;var f=As(function(b){Om(b)&&(b=b.default),_.resolved=typeof b=="function"?b:p0.extend(b),g.components[d]=b,s--,s<=0&&n()}),h=As(function(b){var y="Failed to resolve async component "+d+": "+b;r||(r=T0(b)?b:new Error(y),n(r))}),u;try{u=_(f,h)}catch(b){h(b)}if(u)if(typeof u.then=="function")u.then(f,h);else{var m=u.component;m&&typeof m.then=="function"&&m.then(f,h)}}}),o||n()}}function ml(e,a){return pl(e.map(function(i){return Object.keys(i.components).map(function(n){return a(i.components[n],i.instances[n],i,n)})}))}function pl(e){return Array.prototype.concat.apply([],e)}var Cm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Om(e){return e.__esModule||Cm&&e[Symbol.toStringTag]==="Module"}function As(e){var a=!1;return function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];if(!a)return a=!0,e.apply(this,i)}}var na=function(e,a){this.router=e,this.base=Nm(a),this.current=Wa,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};na.prototype.listen=function(e){this.cb=e},na.prototype.onReady=function(e,a){this.ready?e():(this.readyCbs.push(e),a&&this.readyErrorCbs.push(a))},na.prototype.onError=function(e){this.errorCbs.push(e)},na.prototype.transitionTo=function(e,a,i){var n=this,o;try{o=this.router.match(e,this.current)}catch(r){throw this.errorCbs.forEach(function(_){_(r)}),r}var s=this.current;this.confirmTransition(o,function(){n.updateRoute(o),a&&a(o),n.ensureURL(),n.router.afterHooks.forEach(function(r){r&&r(o,s)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(r){r(o)}))},function(r){i&&i(r),r&&!n.ready&&(!D0(r,ft.redirected)||s!==Wa)&&(n.ready=!0,n.readyErrorCbs.forEach(function(_){_(r)}))})},na.prototype.confirmTransition=function(e,a,i){var n=this,o=this.current;this.pending=e;var s=function(m){!D0(m)&&T0(m)&&(n.errorCbs.length?n.errorCbs.forEach(function(b){b(m)}):console.error(m)),i&&i(m)},r=e.matched.length-1,_=o.matched.length-1;if(il(e,o)&&r===_&&e.matched[r]===o.matched[_])return this.ensureURL(),e.hash&&Ia(this.router,o,e,!1),s(Am(o,e));var l=Bm(this.current.matched,e.matched),g=l.updated,d=l.deactivated,f=l.activated,h=[].concat(Mm(d),this.router.beforeHooks,jm(g),f.map(function(m){return m.beforeEnter}),Rm(f)),u=function(m,b){if(n.pending!==e)return s(Es(o,e));try{m(e,o,function(y){y===!1?(n.ensureURL(!0),s(wm(o,e))):T0(y)?(n.ensureURL(!0),s(y)):typeof y=="string"||typeof y=="object"&&(typeof y.path=="string"||typeof y.name=="string")?(s(km(o,e)),typeof y=="object"&&y.replace?n.replace(y):n.push(y)):b(y)})}catch(y){s(y)}};ks(h,u,function(){var m=Ym(f),b=m.concat(n.router.resolveHooks);ks(b,u,function(){if(n.pending!==e)return s(Es(o,e));n.pending=null,a(e),n.router.app&&n.router.app.$nextTick(function(){nl(e)})})})},na.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},na.prototype.setupListeners=function(){},na.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=Wa,this.pending=null};function Nm(e){if(!e)if(oi){var a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return e.charAt(0)!=="/"&&(e="/"+e),e.replace(/\/$/,"")}function Bm(e,a){var i,n=Math.max(e.length,a.length);for(i=0;i<n&&e[i]===a[i];i++);return{updated:a.slice(0,i),activated:a.slice(i),deactivated:e.slice(i)}}function lo(e,a,i,n){var o=ml(e,function(s,r,_,l){var g=xm(s,a);if(g)return Array.isArray(g)?g.map(function(d){return i(d,r,_,l)}):i(g,r,_,l)});return pl(n?o.reverse():o)}function xm(e,a){return typeof e!="function"&&(e=p0.extend(e)),e.options[a]}function Mm(e){return lo(e,"beforeRouteLeave",bl,!0)}function jm(e){return lo(e,"beforeRouteUpdate",bl)}function bl(e,a){if(a)return function(){return e.apply(a,arguments)}}function Ym(e){return lo(e,"beforeRouteEnter",function(a,i,n,o){return qm(a,n,o)})}function qm(e,a,i){return function(n,o,s){return e(n,o,function(r){typeof r=="function"&&(a.enteredCbs[i]||(a.enteredCbs[i]=[]),a.enteredCbs[i].push(r)),s(r)})}}var Tl=function(e){function a(i,n){e.call(this,i,n),this._startLocation=jt(this.base)}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ha&&o;s&&this.listeners.push(ul());var r=function(){var _=i.current,l=jt(i.base);i.current===Wa&&l===i._startLocation||i.transitionTo(l,function(g){s&&Ia(n,g,_,!0)})};window.addEventListener("popstate",r),this.listeners.push(function(){window.removeEventListener("popstate",r)})}},a.prototype.go=function(i){window.history.go(i)},a.prototype.push=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){b0(Za(s.base+l.fullPath)),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.replace=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){wn(Za(s.base+l.fullPath)),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.ensureURL=function(i){if(jt(this.base)!==this.current.fullPath){var n=Za(this.base+this.current.fullPath);i?b0(n):wn(n)}},a.prototype.getCurrentLocation=function(){return jt(this.base)},a}(na);function jt(e){var a=window.location.pathname,i=a.toLowerCase(),n=e.toLowerCase();return e&&(i===n||i.indexOf(Za(n+"/"))===0)&&(a=a.slice(e.length)),(a||"/")+window.location.search+window.location.hash}var Dl=function(e){function a(i,n,o){e.call(this,i,n),!(o&&Lm(this.base))&&ws()}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ha&&o;s&&this.listeners.push(ul());var r=function(){var l=i.current;ws()&&i.transitionTo(Oi(),function(g){s&&Ia(i.router,g,l,!0),Ha||Ni(g.fullPath)})},_=Ha?"popstate":"hashchange";window.addEventListener(_,r),this.listeners.push(function(){window.removeEventListener(_,r)})}},a.prototype.push=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){vs(l.fullPath),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.replace=function(i,n,o){var s=this,r=this,_=r.current;this.transitionTo(i,function(l){Ni(l.fullPath),Ia(s.router,l,_,!1),n&&n(l)},o)},a.prototype.go=function(i){window.history.go(i)},a.prototype.ensureURL=function(i){var n=this.current.fullPath;Oi()!==n&&(i?vs(n):Ni(n))},a.prototype.getCurrentLocation=function(){return Oi()},a}(na);function Lm(e){var a=jt(e);if(!/^\/#/.test(a))return window.location.replace(Za(e+"/#"+a)),!0}function ws(){var e=Oi();return e.charAt(0)==="/"?!0:(Ni("/"+e),!1)}function Oi(){var e=window.location.href,a=e.indexOf("#");return a<0?"":(e=e.slice(a+1),e)}function vn(e){var a=window.location.href,i=a.indexOf("#"),n=i>=0?a.slice(0,i):a;return n+"#"+e}function vs(e){Ha?b0(vn(e)):window.location.hash=e}function Ni(e){Ha?wn(vn(e)):window.location.replace(vn(e))}var Zm=function(e){function a(i,n){e.call(this,i,n),this.stack=[],this.index=-1}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.push=function(i,n,o){var s=this;this.transitionTo(i,function(r){s.stack=s.stack.slice(0,s.index+1).concat(r),s.index++,n&&n(r)},o)},a.prototype.replace=function(i,n,o){var s=this;this.transitionTo(i,function(r){s.stack=s.stack.slice(0,s.index).concat(r),n&&n(r)},o)},a.prototype.go=function(i){var n=this,o=this.index+i;if(!(o<0||o>=this.stack.length)){var s=this.stack[o];this.confirmTransition(s,function(){var r=n.current;n.index=o,n.updateRoute(s),n.router.afterHooks.forEach(function(_){_&&_(s,r)})},function(r){D0(r,ft.duplicated)&&(n.index=o)})}},a.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},a.prototype.ensureURL=function(){},a}(na),De=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=cm(e.routes||[],this);var a=e.mode||"hash";switch(this.fallback=a==="history"&&!Ha&&e.fallback!==!1,this.fallback&&(a="hash"),oi||(a="abstract"),this.mode=a,a){case"history":this.history=new Tl(this,e.base);break;case"hash":this.history=new Dl(this,e.base,this.fallback);break;case"abstract":this.history=new Zm(this,e.base);break}},Ss={currentRoute:{configurable:!0}};De.prototype.match=function(e,a,i){return this.matcher.match(e,a,i)},Ss.currentRoute.get=function(){return this.history&&this.history.current},De.prototype.init=function(e){var a=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var s=a.apps.indexOf(e);s>-1&&a.apps.splice(s,1),a.app===e&&(a.app=a.apps[0]||null),a.app||a.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof Tl||i instanceof Dl){var n=function(s){var r=i.current,_=a.options.scrollBehavior,l=Ha&&_;l&&"fullPath"in s&&Ia(a,s,r,!1)},o=function(s){i.setupListeners(),n(s)};i.transitionTo(i.getCurrentLocation(),o,o)}i.listen(function(s){a.apps.forEach(function(r){r._route=s})})}},De.prototype.beforeEach=function(e){return an(this.beforeHooks,e)},De.prototype.beforeResolve=function(e){return an(this.resolveHooks,e)},De.prototype.afterEach=function(e){return an(this.afterHooks,e)},De.prototype.onReady=function(e,a){this.history.onReady(e,a)},De.prototype.onError=function(e){this.history.onError(e)},De.prototype.push=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.push(e,o,s)});this.history.push(e,a,i)},De.prototype.replace=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.replace(e,o,s)});this.history.replace(e,a,i)},De.prototype.go=function(e){this.history.go(e)},De.prototype.back=function(){this.go(-1)},De.prototype.forward=function(){this.go(1)},De.prototype.getMatchedComponents=function(e){var a=e?e.matched?e:this.resolve(e).route:this.currentRoute;return a?[].concat.apply([],a.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]},De.prototype.resolve=function(e,a,i){a=a||this.history.current;var n=ro(e,a,i,this),o=this.match(n,a),s=o.redirectedFrom||o.fullPath,r=this.history.base,_=Im(r,s,this.mode);return{location:n,route:o,href:_,normalizedTo:n,resolved:o}},De.prototype.getRoutes=function(){return this.matcher.getRoutes()},De.prototype.addRoute=function(e,a){this.matcher.addRoute(e,a),this.history.current!==Wa&&this.history.transitionTo(this.history.getCurrentLocation())},De.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==Wa&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(De.prototype,Ss);function an(e,a){return e.push(a),function(){var i=e.indexOf(a);i>-1&&e.splice(i,1)}}function Im(e,a,i){var n=i==="hash"?"#"+a:a;return e?Za(e+"/"+n):n}De.install=kn,De.version="3.6.5",De.isNavigationFailure=D0,De.NavigationFailureType=ft,De.START_LOCATION=Wa,oi&&window.Vue&&window.Vue.use(De),window._vue_richtext_widgets||(window._vue_richtext_widgets={});const Rs=e=>!!window._vue_richtext_widgets[e],Hm=e=>{var a;return!!((a=window._vue_richtext_widgets[e])!=null&&a.hasInteractiveView)},Pm=e=>{var a;return!!((a=window._vue_richtext_widgets[e])!=null&&a.fullWidth)},Gm=(e,a,i=o=>{},n)=>{const o={hasInteractiveView:!0,fullWidth:!1,...n};if(window._vue_richtext_widgets[e]){console.error("Widget for id "+e+" already registered");return}window._vue_richtext_widgets[e]={id:e,callback:a,onDestroy:i,...o}},Um=(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})=>{if(a!=="open-graph"){if(!window._vue_richtext_widgets[a]){console.error("Widget for rich object type "+a+" not registered");return}window._vue_richtext_widgets[a].callback(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})}},zm=(e,a)=>{e!=="open-graph"&&window._vue_richtext_widgets[e]&&window._vue_richtext_widgets[e].onDestroy(a)};window._registerWidget=(e,a,i,n)=>{Gm(e,a,i,n)},window._vue_richtext_custom_picker_elements||(window._vue_richtext_custom_picker_elements={});const ti=e=>!!window._vue_richtext_custom_picker_elements[e],Wm=e=>{var a;const i=(a=window._vue_richtext_custom_picker_elements[e])==null?void 0:a.size;return["small","normal","large","full"].includes(i)?i:null},Vm=(e,a,i=o=>{},n="large")=>{if(window._vue_richtext_custom_picker_elements[e]){console.error("Custom reference picker element for id "+e+" already registered");return}window._vue_richtext_custom_picker_elements[e]={id:e,callback:a,onDestroy:i,size:n}},$m=(e,{providerId:a,accessible:i})=>{if(!window._vue_richtext_custom_picker_elements[a]){console.error("Custom reference picker element for reference provider ID "+a+" not registered");return}return window._vue_richtext_custom_picker_elements[a].callback(e,{providerId:a,accessible:i})},Qm=(e,a,i)=>{window._vue_richtext_custom_picker_elements[e]&&window._vue_richtext_custom_picker_elements[e].onDestroy(a,i)};window._registerCustomPickerElement=Vm,oe(k1);const Km=3*60*1e3,Jm={name:"NcReferenceWidget",components:{NcButton:wa},props:{reference:{type:Object,required:!0},interactive:{type:Boolean,default:!0},interactiveOptIn:{type:Boolean,default:!1}},setup(){const e=at(!1),a=at(),{width:i}=Ls(a);return O1(a,([n])=>{l1(()=>{e.value=n.isIntersecting})}),{width:i,isVisible:e,widgetRoot:a}},data(){return{showInteractive:!1,rendered:!1,idleTimeout:null}},computed:{isInteractive(){return!this.interactiveOptIn&&this.interactive||this.showInteractive},hasFullWidth(){return Pm(this.reference.richObjectType)},hasCustomWidget(){return Rs(this.reference.richObjectType)},hasInteractiveView(){return Rs(this.reference.richObjectType)&&Hm(this.reference.richObjectType)},noAccess(){return this.reference&&!this.reference.accessible},descriptionStyle(){if(this.numberOfLines===0)return{display:"none"};const e=this.numberOfLines;return{lineClamp:e,webkitLineClamp:e}},numberOfLines(){return[450,550,650,1/0].findIndex(e=>this.width<e)},compactLink(){const e=this.reference.openGraphObject.link;return e?e.startsWith("https://")?e.substring(8):e.startsWith("http://")?e.substring(7):e:""},route(){return Jn(this.$router,this.reference.openGraphObject.link)},referenceWidgetLinkComponent(){return this.route?_l:"a"},referenceWidgetLinkProps(){return this.route?{to:this.route}:{href:this.reference.openGraphObject.link,target:"_blank"}}},watch:{isVisible:{handler(e){if(!e){this.idleTimeout=setTimeout(()=>{this.isVisible||this.destroyWidget()},Km);return}this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),this.rendered||this.renderWidget()},immediate:!0}},beforeDestroy(){this.destroyWidget()},methods:{t:x,enableInteractive(){this.showInteractive=!0,this.renderWidget()},renderWidget(){var e;if(!this.$refs.customWidget||((e=this==null?void 0:this.reference)==null?void 0:e.richObjectType)==="open-graph")return;this.$refs.customWidget.innerHTML="";const a=document.createElement("div");this.$refs.customWidget.appendChild(a),this.$nextTick(()=>{Um(a,{...this.reference,interactive:this.isInteractive}),this.rendered=!0})},destroyWidget(){this.rendered&&(zm(this.reference.richObjectType,this.$el),this.rendered=!1)}}};var Xm=function(){var e=this,a=e._self._c;return a("div",{ref:"widgetRoot",class:{"toggle-interactive":e.hasInteractiveView&&!e.isInteractive}},[e.reference&&e.hasCustomWidget?a("div",{ref:"customWidget",staticClass:"widget-custom",class:{"full-width":e.hasFullWidth}}):!e.noAccess&&e.reference&&e.reference.openGraphObject&&!e.hasCustomWidget?a(e.referenceWidgetLinkComponent,e._b({tag:"component",staticClass:"widget-default",attrs:{rel:"noopener noreferrer"}},"component",e.referenceWidgetLinkProps,!1),[e.reference.openGraphObject.thumb?a("img",{staticClass:"widget-default--image",attrs:{src:e.reference.openGraphObject.thumb}}):e._e(),a("div",{staticClass:"widget-default--details"},[a("p",{staticClass:"widget-default--name"},[e._v(" "+e._s(e.reference.openGraphObject.name)+" ")]),a("p",{staticClass:"widget-default--description",style:e.descriptionStyle},[e._v(" "+e._s(e.reference.openGraphObject.description)+" ")]),a("p",{staticClass:"widget-default--link"},[e._v(" "+e._s(e.compactLink)+" ")])])]):e._e(),e.interactiveOptIn&&e.hasInteractiveView&&!e.isInteractive?a("NcButton",{staticClass:"toggle-interactive--button",on:{click:e.enableInteractive}},[e._v(" "+e._s(e.t("Enable interactive view"))+" ")]):e._e()],1)},ep=[],ap=te(Jm,Xm,ep,!1,null,"b293f5d9");const tp=ap.exports,ip={name:"NcCustomPickerElement",props:{provider:{type:Object,required:!0}},emits:["cancel","submit"],data(){return{isRegistered:ti(this.provider.id),renderResult:null}},mounted(){this.isRegistered&&this.renderElement()},beforeDestroy(){this.isRegistered&&Qm(this.provider.id,this.$el,this.renderResult)},methods:{renderElement(){this.$refs.domElement&&(this.$refs.domElement.innerHTML="");const e=$m(this.$refs.domElement,{providerId:this.provider.id,accessible:!1});Promise.resolve(e).then(a=>{var i,n;this.renderResult=a,(i=this.renderResult.object)!=null&&i._isVue&&(n=this.renderResult.object)!=null&&n.$on&&(this.renderResult.object.$on("submit",this.onSubmit),this.renderResult.object.$on("cancel",this.onCancel)),this.renderResult.element.addEventListener("submit",o=>{this.onSubmit(o.detail)}),this.renderResult.element.addEventListener("cancel",this.onCancel)})},onSubmit(e){this.$emit("submit",e)},onCancel(){this.$emit("cancel")}}};var np=function(){var e=this,a=e._self._c;return a("div",{ref:"domElement"})},op=[],sp=te(ip,np,op,!1,null,"de9850e4");const rp=sp.exports;oe(A1);const lp="any-link",_p={id:lp,title:x("Any link"),icon_url:Qs("core","filetypes/link.svg")};window._vue_richtext_reference_providers||(window._vue_richtext_reference_providers=Wt("core","reference-provider-list",[])),window._vue_richtext_reference_provider_timestamps||(window._vue_richtext_reference_provider_timestamps=Wt("core","reference-provider-timestamps",{}));function dp(){return window._vue_richtext_reference_providers.filter(e=>{const a=!!e.search_providers_ids&&e.search_providers_ids.length>0||ti(e.id);return a||console.debug("[smart picker]",e.id,"reference provider is discoverable but does not have any related search provider or custom picker component registered"),a})}function fp(e){const a=window._vue_richtext_reference_provider_timestamps;return e.sort((i,n)=>i.order===n.order?0:i.order>n.order?1:-1).sort((i,n)=>{const o=a[i.id],s=a[n.id];return o===s?0:s===void 0?-1:o===void 0?1:o>s?-1:1})}function gp(e,a=null){const i=dp(),n=e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),o=new RegExp(n,"i"),s=fp(i).filter(_=>_.title.match(o)),r=a?s.slice(0,a):s;return(e===""||r.length===0)&&r.push(_p),r}function hp(e){const a=Math.floor(Date.now()/1e3),i={timestamp:a},n=Pa("references/provider/{providerId}",{providerId:e});ma.put(n,i).then(o=>{window._vue_richtext_reference_provider_timestamps[e]=a})}let Cs=0;function yl(e,a){return function(){const i=this,n=arguments;clearTimeout(Cs),Cs=setTimeout(function(){e.apply(i,n)},a)}}function _o(e){try{return!!new URL(e)}catch{return!1}}oe(Ks,w1);const Fp={name:"LinkVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var up=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon link-variant-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},cp=[],mp=te(Fp,up,cp,!1,null,null);const fo=mp.exports,pp={name:"NcProviderList",components:{NcSelect:R0,NcHighlight:w0,NcEmptyContent:io,LinkVariantIcon:fo},emits:["select-provider","submit"],data(){return{selectedProvider:null,query:"",multiselectPlaceholder:x("Select provider"),providerIconAlt:x("Provider icon")}},computed:{options(){const e=[];return this.query!==""&&_o(this.query)&&e.push({id:this.query,title:this.query,isLink:!0}),e.push(...gp(this.query)),e}},methods:{focus(){setTimeout(()=>{var e,a,i;(i=(a=(e=this.$refs["provider-select"])==null?void 0:e.$el)==null?void 0:a.querySelector("#provider-select-input"))==null||i.focus()},300)},onProviderSelected(e){e!==null&&(e.isLink?this.$emit("submit",e.title):this.$emit("select-provider",e),this.selectedProvider=null)},onSearch(e,a){this.query=e}}};var bp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"provider-list"},[a("NcSelect",{ref:"provider-select",staticClass:"provider-list--select",attrs:{"input-id":"provider-select-input",label:"title",placeholder:e.multiselectPlaceholder,options:e.options,"append-to-body":!1,"clear-search-on-select":!0,"clear-search-on-blur":()=>!1,filterable:!1},on:{search:e.onSearch,input:e.onProviderSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isLink?a("div",{staticClass:"provider"},[a("LinkVariantIcon",{staticClass:"link-icon",attrs:{size:20}}),a("span",[e._v(e._s(i.title))])],1):a("div",{staticClass:"provider"},[a("img",{staticClass:"provider-icon",attrs:{src:i.icon_url,alt:e.providerIconAlt}}),a("NcHighlight",{staticClass:"option-text",attrs:{search:e.query,text:i.title}})],1)]}}]),model:{value:e.selectedProvider,callback:function(i){e.selectedProvider=i},expression:"selectedProvider"}}),a("NcEmptyContent",{staticClass:"provider-list--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[a("LinkVariantIcon")]},proxy:!0}])})],1)},Tp=[],Dp=te(pp,bp,Tp,!1,null,"e54e09d6");const yp=Dp.exports;oe(v1);const Ep={name:"NcRawLinkInput",components:{LinkVariantIcon:fo,NcEmptyContent:io,NcLoadingIcon:v0,NcReferenceWidget:tp,NcTextField:Su},props:{provider:{type:Object,required:!0}},emits:["submit"],data(){return{inputValue:"",loading:!1,reference:null,abortController:null,inputPlaceholder:x("Enter link")}},computed:{isLinkValid(){return _o(this.inputValue)}},methods:{focus(){var e;(e=this.$refs["url-input"].$el.getElementsByTagName("input")[0])==null||e.focus()},onSubmit(e){const a=e.target.value;this.isLinkValid&&this.$emit("submit",a)},onClear(){this.inputValue="",this.reference=null},onInput(){this.reference=null,this.abortController&&this.abortController.abort(),this.isLinkValid&&yl(()=>{this.updateReference()},500)()},updateReference(){this.loading=!0,this.abortController=new AbortController,ma.get(Pa("references/resolve",2)+"?reference="+encodeURIComponent(this.inputValue),{signal:this.abortController.signal}).then(e=>{this.reference=e.data.ocs.data.references[this.inputValue]}).catch(e=>{console.error(e)}).then(()=>{this.loading=!1})}}};var kp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"raw-link"},[a("div",{staticClass:"input-wrapper"},[a("NcTextField",{ref:"url-input",attrs:{value:e.inputValue,"show-trailing-button":e.inputValue!=="",label:e.inputPlaceholder},on:{"update:value":[function(i){e.inputValue=i},e.onInput],"trailing-button-click":e.onClear},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.onSubmit.apply(null,arguments)}}},[e.loading?a("NcLoadingIcon",{attrs:{size:16}}):a("LinkVariantIcon",{attrs:{size:16}})],1)],1),e.reference!==null?a("NcReferenceWidget",{staticClass:"reference-widget",attrs:{reference:e.reference}}):a("NcEmptyContent",{staticClass:"raw-link--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}])})],1)},Ap=[],wp=te(Ep,kp,Ap,!1,null,"3c1803b5");const vp=wp.exports,Sp={name:"NcSearchResult",components:{NcHighlight:w0},props:{entry:{type:Object,required:!0},query:{type:String,required:!0}}};var Rp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"result"},[e.entry.icon?a("div",{staticClass:"result--icon-class",class:{[e.entry.icon]:!0,rounded:e.entry.rounded}}):a("img",{staticClass:"result--image",class:{rounded:e.entry.rounded},attrs:{src:e.entry.thumbnailUrl}}),a("div",{staticClass:"result--content"},[a("span",{staticClass:"result--content--name"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.title}})],1),a("span",{staticClass:"result--content--subline"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.subline}})],1)])])},Cp=[],Op=te(Sp,Rp,Cp,!1,null,"8571023b");const Np=Op.exports;oe(S1,Ks,Vs);const Os=5,Bp={name:"NcSearch",components:{LinkVariantIcon:fo,DotsHorizontalIcon:Cn,NcEmptyContent:io,NcSelect:R0,NcSearchResult:Np},props:{provider:{type:Object,required:!0},showEmptyContent:{type:Boolean,default:!0},searchPlaceholder:{type:String,default:null}},emits:["submit"],data(){return{searchQuery:"",selectedResult:null,resultsBySearchProvider:{},searching:!1,searchingMoreOf:null,abortController:null,noOptionsText:x("Start typing to search"),providerIconAlt:x("Provider icon")}},computed:{mySearchPlaceholder(){return this.searchPlaceholder||x("Search")},searchProviderIds(){return this.provider.search_providers_ids},options(){if(this.searchQuery==="")return[];const e=[];return _o(this.searchQuery)&&e.push(this.rawLinkEntry),e.push(...this.formattedSearchResults),e},rawLinkEntry(){return{id:"rawLinkEntry",resourceUrl:this.searchQuery,isRawLink:!0}},formattedSearchResults(){const e=[];return this.searchProviderIds.forEach(a=>{if(this.resultsBySearchProvider[a].entries.length>0){(this.searchProviderIds.length>1||this.resultsBySearchProvider[a].entries.length>1)&&e.push({id:"groupTitle-"+a,name:this.resultsBySearchProvider[a].name,isCustomGroupTitle:!0,providerId:a});const i=this.resultsBySearchProvider[a].entries.map((n,o)=>({id:"provider-"+a+"-entry-"+o,...n}));e.push(...i),this.resultsBySearchProvider[a].isPaginated&&e.push({id:"moreOf-"+a,name:this.resultsBySearchProvider[a].name,isMore:!0,providerId:a,isLoading:this.searchingMoreOf===a})}}),e}},mounted(){this.resetResults()},beforeDestroy(){this.cancelSearchRequests()},methods:{t:x,resetResults(){const e={};this.searchProviderIds.forEach(a=>{e[a]={entries:[]}}),this.resultsBySearchProvider=e},focus(){setTimeout(()=>{var e,a,i;(i=(a=(e=this.$refs["search-select"])==null?void 0:e.$el)==null?void 0:a.querySelector("#search-select-input"))==null||i.focus()},300)},cancelSearchRequests(){this.abortController&&this.abortController.abort()},onSearchInput(e,a){this.searchQuery=e,yl(()=>{this.updateSearch()},500)()},onSelectResultSelected(e){e!==null&&(e.resourceUrl?(this.cancelSearchRequests(),this.$emit("submit",e.resourceUrl)):e.isMore&&this.searchMoreOf(e.providerId).then(()=>{this.selectedResult=null}))},searchMoreOf(e){return this.searchingMoreOf=e,this.cancelSearchRequests(),this.searchProviders(e)},updateSearch(){if(this.cancelSearchRequests(),this.resetResults(),this.searchQuery===""){this.searching=!1;return}return this.searchProviders()},searchProviders(e=null){var a,i;this.abortController=new AbortController,this.searching=!0;const n=e===null?[...this.searchProviderIds].map(o=>this.searchOneProvider(o)):[this.searchOneProvider(e,(i=(a=this.resultsBySearchProvider[e])==null?void 0:a.cursor)!=null?i:null)];return Promise.allSettled(n).then(o=>{o.find(s=>s.status==="rejected"&&(s.reason.name==="CanceledError"||s.reason.code==="ERR_CANCELED"))||(this.searching=!1,this.searchingMoreOf=null)})},searchOneProvider(e,a=null){const i=a===null?Pa("search/providers/{providerId}/search?term={term}&limit={limit}",{providerId:e,term:this.searchQuery,limit:Os}):Pa("search/providers/{providerId}/search?term={term}&limit={limit}&cursor={cursor}",{providerId:e,term:this.searchQuery,limit:Os,cursor:a});return ma.get(i,{signal:this.abortController.signal}).then(n=>{const o=n.data.ocs.data;this.resultsBySearchProvider[e].name=o.name,this.resultsBySearchProvider[e].cursor=o.cursor,this.resultsBySearchProvider[e].isPaginated=o.isPaginated,this.resultsBySearchProvider[e].entries.push(...o.entries)})}}};var xp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"smart-picker-search",class:{"with-empty-content":e.showEmptyContent}},[a("NcSelect",{ref:"search-select",staticClass:"smart-picker-search--select",attrs:{"input-id":"search-select-input",label:"name",placeholder:e.mySearchPlaceholder,options:e.options,"append-to-body":!1,"close-on-select":!1,"clear-search-on-select":!1,"clear-search-on-blur":()=>!1,"reset-focus-on-options-change":!1,filterable:!1,autoscroll:!0,"reset-on-options-change":!1,loading:e.searching},on:{search:e.onSearchInput,input:e.onSelectResultSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isRawLink?a("div",{staticClass:"custom-option"},[a("LinkVariantIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t("Raw link {options}",{options:i.resourceUrl}))+" ")])],1):i.resourceUrl?a("NcSearchResult",{staticClass:"search-result",attrs:{entry:i,query:e.searchQuery}}):i.isCustomGroupTitle?a("span",{staticClass:"custom-option group-name"},[e.provider.icon_url?a("img",{staticClass:"provider-icon group-name-icon",attrs:{src:e.provider.icon_url}}):e._e(),a("span",{staticClass:"option-text"},[a("strong",[e._v(e._s(i.name))])])]):i.isMore?a("span",{class:{"custom-option":!0}},[i.isLoading?a("span",{staticClass:"option-simple-icon icon-loading-small"}):a("DotsHorizontalIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t('Load more "{options}"',{options:i.name}))+" ")])],1):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.noOptionsText)+" ")]},proxy:!0}]),model:{value:e.selectedResult,callback:function(i){e.selectedResult=i},expression:"selectedResult"}}),e.showEmptyContent?a("NcEmptyContent",{staticClass:"smart-picker-search--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{alt:e.providerIconAlt,src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}],null,!1,2922132592)}):e._e()],1)},Mp=[],jp=te(Bp,xp,Mp,!1,null,"05fef988");const Yp=jp.exports,Bt={providerList:1,standardLinkInput:2,searchInput:3,customElement:4},qp={name:"NcReferencePicker",components:{NcCustomPickerElement:rp,NcProviderList:yp,NcRawLinkInput:vp,NcSearch:Yp},props:{initialProvider:{type:Object,default:()=>null},width:{type:Number,default:null},focusOnCreate:{type:Boolean,default:!0}},emits:["cancel","cancel-raw-link","cancel-search","provider-selected","submit"],data(){return{MODES:Bt,selectedProvider:this.initialProvider}},computed:{mode(){return this.selectedProvider===null?Bt.providerList:ti(this.selectedProvider.id)?Bt.customElement:this.selectedProvider.search_providers_ids?Bt.searchInput:Bt.standardLinkInput},pickerWrapperStyle(){return{width:this.width?this.width+"px":void 0}}},mounted(){this.focusOnCreate&&(this.initialProvider?setTimeout(()=>{var e;(e=this.$refs["url-input"])==null||e.focus()},300):this.$nextTick(()=>{var e;(e=this.$refs["provider-list"])==null||e.focus()}))},methods:{onEscapePressed(){this.selectedProvider!==null?this.deselectProvider():this.cancelProviderSelection()},onProviderSelected(e){this.selectedProvider=e,this.$emit("provider-selected",e),this.$nextTick(()=>{var a;(a=this.$refs["url-input"])==null||a.focus()})},cancelCustomElement(){this.deselectProvider()},cancelSearch(){var e;this.$emit("cancel-search",(e=this.selectedProvider)==null?void 0:e.title),this.deselectProvider()},cancelRawLinkInput(){var e;this.$emit("cancel-raw-link",(e=this.selectedProvider)==null?void 0:e.title),this.deselectProvider()},cancelProviderSelection(){this.$emit("cancel")},submitLink(e){this.selectedProvider!==null&&hp(this.selectedProvider.id),this.$emit("submit",e),this.deselectProvider()},deselectProvider(){this.selectedProvider=null,this.$emit("provider-selected",null),setTimeout(()=>{var e;(e=this.$refs["provider-list"])==null||e.focus()},300)}}};var Lp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"reference-picker",style:e.pickerWrapperStyle,attrs:{tabindex:"-1"},on:{keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:(i.stopPropagation(),i.preventDefault(),e.onEscapePressed.apply(null,arguments))}}},[e.mode===e.MODES.providerList?a("NcProviderList",{ref:"provider-list",on:{"select-provider":e.onProviderSelected,submit:e.submitLink,cancel:e.cancelProviderSelection}}):e.mode===e.MODES.standardLinkInput?a("NcRawLinkInput",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelRawLinkInput}}):e.mode===e.MODES.searchInput?a("NcSearch",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{cancel:e.cancelSearch,submit:e.submitLink}}):e.mode===e.MODES.customElement?a("div",{staticClass:"custom-element-wrapper"},[a("NcCustomPickerElement",{attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelCustomElement}})],1):e._e()],1)},Zp=[],Ip=te(qp,Lp,Zp,!1,null,"f3f0de17");const Hp=Ip.exports;oe(C1,R1);const Pp={name:"NcReferencePickerModal",components:{NcReferencePicker:Hp,NcModal:qs,NcButton:wa,ArrowLeftIcon:Jr,CloseIcon:On},props:{initialProvider:{type:Object,default:()=>null},focusOnCreate:{type:Boolean,default:!0},isInsideViewer:{type:Boolean,default:!1}},emits:["cancel","submit"],data(){return{show:!0,selectedProvider:this.initialProvider,backButtonTitle:x("Back to provider selection"),closeButtonTitle:x("Close"),closeButtonLabel:x("Close Smart Picker")}},computed:{isProviderSelected(){return this.selectedProvider!==null},showBackButton(){return this.initialProvider===null&&this.isProviderSelected},modalSize(){var e;return this.isProviderSelected&&ti(this.selectedProvider.id)?(e=Wm(this.selectedProvider.id))!=null?e:"large":"normal"},showModalName(){return!this.isProviderSelected||!ti(this.selectedProvider.id)},modalName(){return this.isProviderSelected?this.selectedProvider.title:x("Smart Picker")}},mounted(){if(this.isInsideViewer){const e=this.$refs.modal_content;Di("viewer:trapElements:changed",e)}},methods:{onCancel(){this.show=!1,this.$emit("cancel")},onSubmit(e){this.show=!1,this.$emit("submit",e)},onProviderSelect(e){this.selectedProvider=e,e===null&&this.initialProvider!==null&&this.onCancel()},onBackClicked(){this.$refs.referencePicker.deselectProvider()}}};var Gp=function(){var e=this,a=e._self._c;return e.show?a("NcModal",{staticClass:"reference-picker-modal",attrs:{size:e.modalSize,"can-close":!1},on:{close:e.onCancel}},[a("div",{ref:"modal_content",staticClass:"reference-picker-modal--content"},[e.showBackButton?a("NcButton",{staticClass:"back-button",attrs:{"aria-label":e.backButtonTitle,title:e.backButtonTitle},on:{click:e.onBackClicked},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeftIcon")]},proxy:!0}],null,!1,3001860362)}):e._e(),a("NcButton",{staticClass:"close-button",attrs:{"aria-label":e.closeButtonLabel,title:e.closeButtonTitle,type:"tertiary"},on:{click:e.onCancel},scopedSlots:e._u([{key:"icon",fn:function(){return[a("CloseIcon")]},proxy:!0}],null,!1,2491825086)}),e.showModalName?a("h2",[e._v(" "+e._s(e.modalName)+" ")]):e._e(),a("NcReferencePicker",{ref:"referencePicker",attrs:{"initial-provider":e.initialProvider,"focus-on-create":e.focusOnCreate},on:{"provider-selected":e.onProviderSelect,submit:e.onSubmit,cancel:e.onCancel}})],1)]):e._e()},Up=[],zp=te(Pp,Gp,Up,!1,null,"19d3f57d");const n3=zp.exports;if(Array.prototype.find||(Array.prototype.find=function(e){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof e!="function")throw new TypeError("predicate must be a function");for(var a=Object(this),i=a.length>>>0,n=arguments[1],o,s=0;s<i;s++)if(o=a[s],e.call(n,o,s,a))return o}),window&&typeof window.CustomEvent!="function"){let e=function(a,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(a,i.bubbles,i.cancelable,i.detail),n};typeof window.Event<"u"&&(e.prototype=window.Event.prototype),window.CustomEvent=e}function Wp({onlyFirst:e=!1}={}){const a=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(a,e?void 0:"g")}const o3=Wp();const Vp={name:"NcAutoCompleteResult",components:{NcUserStatusIcon:Er},props:{title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},subline:{type:String,default:null},id:{type:String,default:null},icon:{type:String,required:!0},iconUrl:{type:String,default:null},source:{type:String,required:!0},status:{type:[Object,Array],default:()=>({})}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:Gn}};var $p=function(){var e=this,a=e._self._c;return a("div",{staticClass:"autocomplete-result"},[a("div",{staticClass:"autocomplete-result__icon",class:[e.icon,"autocomplete-result__icon--".concat(e.avatarUrl?"with-avatar":"")],style:e.avatarUrl?{backgroundImage:"url(".concat(e.avatarUrl,")")}:null},[e.status.icon?a("span",{staticClass:"autocomplete-result__status autocomplete-result__status--icon"},[e._v(" "+e._s(e.status&&e.status.icon||"")+" ")]):e.status.status&&e.status.status!=="offline"?a("NcUserStatusIcon",{staticClass:"autocomplete-result__status",attrs:{status:e.status.status}}):e._e()],1),a("span",{staticClass:"autocomplete-result__content"},[a("span",{staticClass:"autocomplete-result__title",attrs:{title:e.labelWithFallback}},[e._v(" "+e._s(e.labelWithFallback)+" ")]),e.subline?a("span",{staticClass:"autocomplete-result__subline"},[e._v(" "+e._s(e.subline)+" ")]):e._e()])])},Qp=[],Kp=te(Vp,$p,Qp,!1,null,"98c79945");const s3=Kp.exports;oe(B1,$s);const Jp=["d","D","p","P","s","S","x","X",")","(","|","/"],Ns=[];Jp.forEach(e=>{Ns.push(":"+e),Ns.push(":-"+e)}),N1,x("Write a message …");oe(x1),{...R0.props,placeholder:x("Select a tag")},oe(zs),oe(M1),oe(j1),x,Bn(function(e){this.loadGroup(e)},200);var Bs,tn,xs;(xs=(tn=(Bs=window.OCP)==null?void 0:Bs.Accessibility)==null?void 0:tn.disableKeyboardShortcuts)==null||xs.call(tn);const pi={name:M("viewer","Name"),save:M("viewer","Save"),saveAs:M("viewer","Save as"),back:M("viewer","Back"),loading:M("viewer","Loading …"),resetOperations:M("viewer","Reset"),changesLoseConfirmation:M("viewer","All changes will be lost."),changesLoseConfirmationHint:M("viewer","Are you sure you want to continue?"),cancel:M("viewer","Cancel"),continue:M("viewer","Continue"),undoTitle:M("viewer","Undo"),redoTitle:M("viewer","Redo"),showImageTitle:M("viewer","Show original image"),zoomInTitle:M("viewer","Zoom in"),zoomOutTitle:M("viewer","Zoom out"),toggleZoomMenuTitle:M("viewer","Toggle zoom menu"),adjustTab:M("viewer","Adjust"),finetuneTab:M("viewer","Fine-tune"),filtersTab:M("viewer","Filters"),watermarkTab:M("viewer","Watermark"),annotateTab:M("viewer","Draw"),resize:M("viewer","Resize"),resizeTab:M("viewer","Resize"),invalidImageError:M("viewer","Invalid image."),uploadImageError:M("viewer","Error while uploading the image."),areNotImages:M("viewer","are not images"),isNotImage:M("viewer","is not an image"),toBeUploaded:M("viewer","to be uploaded"),cropTool:M("viewer","Crop"),original:M("viewer","Original"),custom:M("viewer","Custom"),square:M("viewer","Square"),landscape:M("viewer","Landscape"),portrait:M("viewer","Portrait"),ellipse:M("viewer","Ellipse"),classicTv:M("viewer","Classic TV"),cinemascope:M("viewer","CinemaScope"),arrowTool:M("viewer","Arrow"),blurTool:M("viewer","Blur"),brightnessTool:M("viewer","Brightness"),contrastTool:M("viewer","Contrast"),ellipseTool:M("viewer","Ellipse"),unFlipX:M("viewer","Un-flip X"),flipX:M("viewer","Flip X"),unFlipY:M("viewer","Un-flip Y"),flipY:M("viewer","Flip Y"),hsvTool:M("viewer","HSV"),hue:M("viewer","Hue"),saturation:M("viewer","Saturation"),value:M("viewer","Value"),imageTool:M("viewer","Image"),importing:M("viewer","Importing …"),addImage:M("viewer","+ Add image"),lineTool:M("viewer","Line"),penTool:M("viewer","Pen"),polygonTool:M("viewer","Polygon"),sides:M("viewer","Sides"),rectangleTool:M("viewer","Rectangle"),cornerRadius:M("viewer","Corner Radius"),resizeWidthTitle:M("viewer","Width in pixels"),resizeHeightTitle:M("viewer","Height in pixels"),toggleRatioLockTitle:M("viewer","Toggle ratio lock"),reset:M("viewer","Reset"),resetSize:M("viewer","Reset to original image size"),rotateTool:M("viewer","Rotate"),textTool:M("viewer","Text"),textSpacings:M("viewer","Text spacing"),textAlignment:M("viewer","Text alignment"),fontFamily:M("viewer","Font family"),size:M("viewer","Size"),letterSpacing:M("viewer","Letter spacing"),lineHeight:M("viewer","Line height"),warmthTool:M("viewer","Warmth"),addWatermark:M("viewer","+ Add watermark"),addWatermarkTitle:M("viewer","Choose watermark type"),uploadWatermark:M("viewer","Upload watermark"),addWatermarkAsText:M("viewer","Add as text"),padding:M("viewer","Padding"),shadow:M("viewer","Shadow"),horizontal:M("viewer","Horizontal"),vertical:M("viewer","Vertical"),blur:M("viewer","Blur"),opacity:M("viewer","Opacity"),position:M("viewer","Position"),stroke:M("viewer","Stroke"),saveAsModalLabel:M("viewer","Save image as"),extension:M("viewer","Extension"),nameIsRequired:M("viewer","Name is required."),quality:M("viewer","Quality"),imageDimensionsHoverTitle:M("viewer","Saved image size (width x height)"),cropSizeLowerThanResizedWarning:M("viewer","Note that the selected crop area is lower than the applied resize which might cause quality decrease"),actualSize:M("viewer","Actual size (100%)"),fitSize:M("viewer","Fit size")};let bi,Ms;const Xp={name:"ImageEditor",props:{fileid:{type:[String,Number],required:!0},mime:{type:String,required:!0},src:{type:String,required:!0}},data(){return{imageEditor:null}},computed:{config(){return{source:this.src,defaultSavedImageName:this.defaultSavedImageName,defaultSavedImageType:this.defaultSavedImageType,useBackendTranslations:!1,observePluginContainerSize:!0,defaultTabId:bi.ADJUST,defaultToolId:Ms.CROP,tabsIds:Object.values(bi).filter(e=>e!==bi.WATERMARK).sort((e,a)=>e.localeCompare(a)),onClose:this.onClose,onSave:this.onSave,translations:pi,theme:{palette:{"bg-secondary":"var(--color-main-background)","bg-primary":"var(--color-background-dark)","bg-hover":"var(--color-background-hover)","bg-stateless":"var(--color-background-dark)","accent-primary":"var(--color-primary-element)","accent-stateless":"var(--color-primary-element)","border-active-bottom":"var(--color-primary-element)","bg-primary-active":"var(--color-background-dark)","bg-primary-hover":"var(--color-background-hover)","accent-primary-active":"var(--color-main-text)","accent-primary-hover":"var(--color-primary-element)",warning:"var(--color-error)"},typography:{fontFamily:"var(--font-face)"}}}},defaultSavedImageName(){return Nt.basename(this.src,Nt.extname(this.src))},defaultSavedImageType(){return Nt.extname(this.src).slice(1)||"jpeg"},hasHighContrastEnabled(){return(OCA?.Theming?.enabledThemes||[]).find(e=>e.indexOf("highcontrast")!==-1)},themeDataAttr(){return this.hasHighContrastEnabled?{"data-theme-dark-highcontrast":!0}:{"data-theme-dark":!0}}},async mounted(){const e=(await xn(async()=>{const{default:a}=await import("./index-DGe5iX7C.chunk.mjs");return{default:a}},__vite__mapDeps([0,1,2]),import.meta.url)).default;bi=e.TABS,Ms=e.TOOLS,this.imageEditor=new e(this.$refs.editor,this.config),this.imageEditor.render(),window.addEventListener("keydown",this.handleKeydown,!0),window.addEventListener("DOMNodeInserted",this.handleSfxModal)},beforeDestroy(){this.imageEditor&&this.imageEditor.terminate(),window.removeEventListener("keydown",this.handleKeydown,!0)},methods:{onClose(e,a){if(a){this.onExitWithoutSaving();return}window.removeEventListener("keydown",this.handleKeydown,!0),this.$emit("close")},async onSave({fullName:e,imageCanvas:a,mimeType:i,quality:n}){const{origin:o,pathname:s}=new URL(this.src),r=o+Nt.join(Nt.dirname(s),e);qa.debug("Saving image...",{putUrl:r,src:this.src,fullName:e}),i=i.replace("jpg","jpeg"),n=Math.max(Math.min(n,1),0)||1;try{const _=await new Promise(g=>a.toBlob(g,i,n)),l=await ma.put(r,new File([_],e));if(qa.info("Edited image saved!",{response:l}),Y1(t("viewer","Image saved")),r!==this.src)Di("files:node:created",{fileid:parseInt(l?.headers?.["oc-fileid"]?.split("oc")[0])||null});else{this.$emit("updated");const g=await q1(o,decodeURI(s)),d=new L1({id:Number.parseInt(this.fileid),source:this.src,mtime:new Date(g.lastmod),...g,attributes:{...g,...g.props}});Di("files:node:updated",d)}}catch(_){qa.error("Error saving image",{error:_}),Z1(t("viewer","Error saving image"))}},onExitWithoutSaving(){OC.dialogs.confirmDestructive(pi.changesLoseConfirmation+`

`+pi.changesLoseConfirmationHint,t("viewer","Unsaved changes"),{type:OC.dialogs.YES_NO_BUTTONS,confirm:t("viewer","Drop changes"),confirmClasses:"error",cancel:pi.cancel},e=>{e&&this.onClose("warning-ignored",!1)})},handleKeydown(e){e.key!=="Enter"&&e.stopImmediatePropagation(),e.key==="Escape"&&(e.preventDefault(),document.querySelector(".FIE_topbar-close-button").click()),e.ctrlKey&&e.key==="s"&&(e.preventDefault(),document.querySelector(".FIE_topbar-save-button").click()),e.ctrlKey&&e.key==="z"&&(e.preventDefault(),document.querySelector(".FIE_topbar-undo-button").click())},handleSfxModal(e){e.target?.classList&&e.target.classList.contains("SfxModal-Wrapper")&&Di("viewer:trapElements:changed",e.target)}}};var e2=function(){var e=this,a=e._self._c;return a("div",e._b({ref:"editor",staticClass:"viewer__image-editor"},"div",e.themeDataAttr,!1))},a2=[],t2=ii(Xp,e2,a2,!1,null,"a2c8f486");const i2=t2.exports,n2=["jpg","jpeg","png"],o2=new RegExp(`\\.(${n2.join("|")})$`,"i");function s2(e,a){return a.find(i=>i.fileid===e)}function r2(e,a){return a.find(i=>i.filename!==e.filename&&i.basename.startsWith(e.name)&&o2.test(i.basename))}ka.use(tr);const l2={name:"Images",components:{ImageEditor:i2,PlayCircleOutline:v_,NcLoadingIcon:v0},props:{canZoom:{type:Boolean,default:!1},editing:{type:Boolean,default:!1}},data(){return{dragging:!1,shiftX:0,shiftY:0,zoomRatio:1,fallback:!1,livePhotoCanBePlayed:!1}},computed:{src(){return this.source??this.davPath},zoomHeight(){return Math.round(this.height*this.zoomRatio)},zoomWidth(){return Math.round(this.width*this.zoomRatio)},alt(){return this.basename},imgStyle(){return this.zoomRatio===1?{}:{marginTop:Math.round(this.shiftY*2)+"px",marginLeft:Math.round(this.shiftX*2)+"px",height:this.zoomHeight+"px",width:this.zoomWidth+"px"}},livePhoto(){if(this.metadataFilesLivePhoto!==void 0)return s2(this.metadataFilesLivePhoto,this.fileList)},livePhotoSrc(){return this.livePhoto?.source??this.livePhotoDavPath},livePhotoDavPath(){return this.livePhoto?I1({filename:this.livePhoto.filename,basename:this.livePhoto.basename}):null}},asyncComputed:{data(){return this.mime==="image/svg+xml"?this.getBase64FromImage():this.mime==="image/gif"?this.src:this.source&&!this.hasPreview&&!this.previewUrl?this.source:this.fallback?this.src:this.previewPath}},watch:{active(e,a){e===!0&&a===!1?(this.resetZoom(),window.addEventListener("mouseout",this.dragEnd)):e===!1&&window.removeEventListener("mouseout",this.dragEnd)}},methods:{updateImgSize(){this.$refs.image?(this.naturalHeight=this.$refs.image.naturalHeight,this.naturalWidth=this.$refs.image.naturalWidth):this.$refs.video&&(this.naturalHeight=this.$refs.video.videoHeight,this.naturalWidth=this.$refs.video.videoWidth),this.updateHeightWidth(),this.doneLoading()},async getBase64FromImage(){const e=await ma.get(this.src);return`data:${this.mime};base64,${btoa(unescape(encodeURIComponent(e.data)))}`},updateZoom(e){if(!this.canZoom)return;e.stopPropagation(),e.preventDefault();const a=this.$refs.image??this.$refs.video,i=e.clientX-a.x-this.width*this.zoomRatio/2,n=e.clientY-a.y-this.height*this.zoomRatio/2,o=i/(this.width*this.zoomRatio),s=n/(this.height*this.zoomRatio),r=e.deltaY<0?Math.min(this.zoomRatio*1.1,5):Math.max(this.zoomRatio/1.1,1);if(r===1)return this.resetZoom();const _=this.width*r-this.width*this.zoomRatio,l=this.height*r-this.height*this.zoomRatio;this.disableSwipe(),this.shiftX=this.shiftX-o*_,this.shiftY=this.shiftY-s*l,this.zoomRatio=r},resetZoom(){this.enableSwipe(),this.zoomRatio=1,this.shiftX=0,this.shiftY=0},dragStart(e){const{pageX:a,pageY:i}=e;this.dragX=a,this.dragY=i,this.dragging=!0;const n=this.$refs.image??this.$refs.video;n.onmouseup=this.dragEnd,n.onmousemove=this.dragHandler},dragEnd(e){e.preventDefault(),this.dragging=!1;const a=this.$refs.image??this.$refs.video;a&&(a.onmouseup=null,a.onmousemove=null)},dragHandler(e){e.preventDefault();const{pageX:a,pageY:i}=e;if(this.dragging&&this.zoomRatio>1&&a>0&&i>0){const n=this.shiftX+(a-this.dragX),o=this.shiftY+(i-this.dragY),s=this.zoomWidth-this.width,r=this.zoomHeight-this.height;this.shiftX=Math.min(Math.max(n,-s/2),s/2),this.shiftY=Math.min(Math.max(o,-r/2),r/2),this.dragX=a,this.dragY=i}},onDblclick(){this.canZoom&&(this.zoomRatio>1?this.resetZoom():this.zoomRatio=1.3)},onClose(){this.$emit("update:editing",!1)},onFail(){this.fallback||(console.error(`Loading of file preview ${H1(this.src)} failed, falling back to original file`),this.fallback=!0)},doneLoadingLivePhoto(){this.livePhotoCanBePlayed=!0,this.doneLoading()},playLivePhoto(){this.livePhotoCanBePlayed&&this.$refs.video.play()},stopLivePhoto(){this.$refs.video.load()},t:M}};var _2=function(){var e=this,a=e._self._c;return a("div",{staticClass:"image_container"},[e.editing?a("ImageEditor",{attrs:{mime:e.mime,src:e.src,fileid:e.fileid},on:{close:e.onClose}}):e.data!==null?[e.livePhotoCanBePlayed?e._e():a("img",{ref:"image",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio!==1},style:e.imgStyle,attrs:{alt:e.alt,src:e.data},on:{"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},load:e.updateImgSize,wheel:e.updateZoom,dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},mousedown:function(i){return i.preventDefault(),e.dragStart.apply(null,arguments)}}}),e.livePhoto?[a("video",{directives:[{name:"show",rawName:"v-show",value:e.livePhotoCanBePlayed,expression:"livePhotoCanBePlayed"}],ref:"video",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio!==1},style:e.imgStyle,attrs:{playsinline:!0,poster:e.data,src:e.livePhotoSrc,preload:"metadata"},on:{canplaythrough:e.doneLoadingLivePhoto,loadedmetadata:e.updateImgSize,wheel:e.updateZoom,"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},mousedown:function(i){return i.preventDefault(),e.dragStart.apply(null,arguments)},ended:e.stopLivePhoto}}),e.width!==0?a("button",{staticClass:"live-photo_play_button",style:{left:`calc(50% - ${e.width/2}px)`},attrs:{disabled:!e.livePhotoCanBePlayed,"aria-description":e.t("viewer","Play the live photo")},on:{click:e.playLivePhoto,pointerenter:e.playLivePhoto,focus:e.playLivePhoto,pointerleave:e.stopLivePhoto,blur:e.stopLivePhoto}},[e.livePhotoCanBePlayed?a("PlayCircleOutline"):a("NcLoadingIcon"),e._v(" "+e._s(e.t("viewer","LIVE"))+" ")],1):e._e()]:e._e()]:e._e()],2)},d2=[],f2=ii(l2,_2,d2,!1,null,"34ef602b");const g2=f2.exports,h2=Wt(Sl,"enabled_preview_providers",[]),El=["image/heic","image/heif","image/tiff","image/x-xbitmap","image/emf"],F2=["image/apng","image/bmp","image/gif","image/jpeg","image/png","image/svg+xml","image/webp","image/x-icon"],u2=()=>El.filter(e=>h2.findIndex(a=>{const i=new RegExp(a.replace(/^\/|\/$/g,""),"i");return e.match(i)})>-1),kl=u2(),js=El.filter(e=>!kl.includes(e));js.length>0&&qa.warn("Some mimes were ignored because they are not enabled in the server previews config",{ignoredMimes:js});const c2={id:"images",group:"media",mimes:[...F2,...kl],component:g2},m2=()=>xn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),p2=Qs("viewer","blank.mp4"),b2={name:"Videos",components:{VuePlyr:m2},data(){return{isFullscreenButtonVisible:!1}},computed:{livePhotoPath(){const e=r2(this,this.fileList);if(e!==void 0)return P1(e)},player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:p2,controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen"],loadSprite:!1,fullscreen:{iosNative:!0}}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},updated(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e.getAttribute("data-plyr")==="fullscreen"&&e.addEventListener("click",this.hideHeaderAndFooter),e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){qa.debug("Closing video stream",{filename:this.filename}),this.$refs.video?.pause?.(),this.player.stop(),this.player.destroy()},methods:{hideHeaderAndFooter(){this.isFullscreenButtonVisible=!this.isFullscreenButtonVisible,this.isFullscreenButtonVisible?(document.body.querySelector("main").classList.add("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.add("viewer__hidden-fullscreen")):(document.body.querySelector("main").classList.remove("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.remove("viewer__hidden-fullscreen"))},updateVideoSize(){this.naturalHeight=this.$refs.video?.videoHeight,this.naturalWidth=this.$refs.video?.videoWidth,this.updateHeightWidth()},donePlaying(){this.$refs.video.autoplay=!1,this.$refs.video.load()},onLoadedMetadata(){this.updateVideoSize(),this.active||this.player.stop()}}};var T2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",style:{height:e.height+"px",width:e.width+"px"},attrs:{options:e.options}},[a("video",{ref:"video",attrs:{autoplay:e.active?!0:null,playsinline:!0,poster:e.livePhotoPath,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading,loadedmetadata:e.onLoadedMetadata}},[e._v(" "+e._s(e.t("viewer","Your browser does not support videos."))+" ")])])],1):e._e()},D2=[],y2=ii(b2,T2,D2,!1,null,"572afae3");const E2=y2.exports,k2={id:"videos",group:"media",mimes:["video/mpeg","video/ogg","video/webm","video/mp4","video/x-m4v","video/x-flv","video/quicktime"],mimesAliases:{"video/x-matroska":"video/webm"},component:E2},A2=()=>xn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),w2={name:"Audios",components:{VuePlyr:A2},computed:{player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:"/blank.aac",controls:["play-large","play","progress","current-time","mute","volume","settings"],loadSprite:!1}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},mounted(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){qa.debug("Closing audio stream",{filename:this.filename}),this.$refs.audio.pause(),this.player.stop(),this.player.destroy()},methods:{donePlaying(){this.$refs.audio.autoplay=!1,this.$refs.audio.load()}}};var v2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",attrs:{options:e.options}},[a("audio",{ref:"audio",attrs:{autoplay:e.active,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading}},[e._v(" "+e._s(e.t("viewer","Your browser does not support audio."))+" ")])])],1):e._e()},S2=[],R2=ii(w2,v2,S2,!1,null,"2be0d851");const C2=R2.exports,O2={id:"audios",group:"media",mimes:["audio/aac","audio/aacp","audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/vorbis","audio/wav","audio/webm"],component:C2};class N2{_state;_mimetypes;_mimetypesCompare;constructor(){this._mimetypes=[],this._mimetypesCompare=[],this._state={},this._state.file="",this._state.fileInfo=null,this._state.compareFileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.el=null,this._state.loadMore=()=>[],this._state.onPrev=()=>{},this._state.onNext=()=>{},this._state.onClose=()=>{},this._state.canLoop=!0,this._state.handlers=[],this._state.overrideHandlerId=null,this.registerHandler(c2),this.registerHandler(k2),this.registerHandler(O2),qa.debug("OCA.Viewer initialized")}get availableHandlers(){return this._state.handlers}registerHandler(a){const i=this.validateHandler(a);if(i){qa.error("Could not register handler",{error:i,handler:a});return}this._state.handlers.push(a);const n=[...a.mimes,...Object.keys(a.mimesAliases||{})];this._mimetypes.push.apply(this._mimetypes,n),a?.canCompare===!0&&this._mimetypesCompare.push.apply(this._mimetypesCompare,n)}validateHandler({id:a,mimes:i,mimesAliases:n,component:o}){if(!a||a.trim()===""||typeof a!="string")return"The handler doesn't have a valid id";if(this._state.handlers.find(s=>s.id===a))return"The handler is already registered";if(!(i&&Array.isArray(i))&&!n)return"Handler needs a valid mime array or mimesAliases";if(!o||typeof o!="object"&&typeof o!="function")return"The handler doesn't have a valid component"}get file(){return this._state.file}get fileInfo(){return this._state.fileInfo}get compareFileInfo(){return this._state.compareFileInfo}get files(){return this._state.files}get enableSidebar(){return this._state.enableSidebar}get el(){return this._state.el}get mimetypes(){return this._mimetypes}get mimetypesCompare(){return this._mimetypesCompare}get loadMore(){return this._state.loadMore}get onPrev(){return this._state.onPrev}get onNext(){return this._state.onNext}get onClose(){return this._state.onClose}get canLoop(){return this._state.canLoop}get overrideHandlerId(){return this._state.overrideHandlerId}setRootElement(a=null){if(this._state.file)throw new Error("Please set root element before calling Viewer.open().");this._state.el=a}open({path:a,fileInfo:i,list:n=[],enableSidebar:o=!0,loadMore:s=()=>[],canLoop:r=!0,onPrev:_=()=>{},onNext:l=()=>{},onClose:g=()=>{}}={}){if(typeof arguments[0]=="string")throw new Error("Opening the viewer with a single string parameter is deprecated. Please use a destructuring object instead",`OCA.Viewer.open({ path: '${a}' })`);if(!a&&!i)throw new Error("Viewer needs either an URL or path to open. None given");if(a&&!a.startsWith("/"))throw new Error("Please use an absolute path");if(!Array.isArray(n))throw new Error("The files list must be an array");if(typeof s!="function")throw new Error("The loadMore method must be a function");a?this._state.file=a:this._state.fileInfo=i,this._state.el||(this._state.files=n,this._state.enableSidebar=o,this._state.loadMore=s,this._state.onPrev=_,this._state.onNext=l,this._state.onClose=g,this._state.canLoop=r)}openWith(a,i={}){this._state.overrideHandlerId=a,this.open(i)}compare(a,i){this.open({fileInfo:a}),this._state.compareFileInfo=i}close(){this._state.file="",this._state.fileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.canLoop=!0,this._state.loadMore=()=>[],this._state.overrideHandlerId=null}}l_(),window.OCA=window.OCA??{},window.OCA.Viewer=new N2,window.OCA.Viewer.version=Rl;
