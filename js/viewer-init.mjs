const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('viewer', '', 'js/index-b78vIMKb.chunk.mjs'),window.OC.filePath('viewer', '', 'js/logger-DimaaeuD.chunk.mjs'),window.OC.filePath('viewer', '', 'css/logger-BBud9Daj.chunk.css')])))=>i.map(i=>d[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{q as Jt,B as ie,C as Il,N as Hl,D as Ks,E as ot,F as Js,G as Oa,H as dt,I as Pl,J as Gl,A as x,K as Ul,P as zl,n as li,L as oe,M as Ma,O as Vl,Q as Wl,R as N,c as pa,S as Ua,T as $l,k as Xs,_ as er,U as vo,W as Ql,V as za,X as So,Y as Si,Z as Fn,$ as Ln,a0 as Kl,a1 as Ht,a2 as Jl,a3 as Xl,a4 as ar,a5 as Zn,a6 as e1,a7 as In,a8 as tr,a9 as Ka,aa as Hn,ab as C0,ac as un,s as U0,u as z0,ad as Pn,ae as a1,af as t1,ag as i1,ah as ir,ai as n1,aj as Gn,ak as o1,al as s1,am as r1,an as l1,ao as _1,ap as d1,aq as f1,l as Un,ar as g1,as as nr,at as h1,au as or,av as F1,aw as u1,ax as c1,ay as m1,az as p1,aC as b1,aD as sr,aE as D1,aF as T1,aH as y1,aI as E1,aJ as k1,aK as A1,aL as w1,aM as v1,aN as S1,aO as R1,aP as rr,aQ as lr,aR as C1,aS as B1,aT as O1,aU as N1,aV as x1,aW as M1,aX as V2,aY as _r,aZ as j1,a_ as Y1,a$ as q1,b0 as dr,b1 as L1,b2 as Z1,b3 as I1,b4 as H1,y as Ri,b5 as P1,b6 as G1,b7 as U1,b8 as W2,b9 as z1,ba as V1,bb as W1,bc as Yt,t as zn,r as Za,bd as $1,be as Q1,bf as K1,w as J1,g as X1,bg as e_,j as a_}from"./logger-DimaaeuD.chunk.mjs";import{C as Vn,N as t_}from"./NcActionButton-CDeNzrcN.chunk.mjs";import i_ from"./NcActionLink-DMGpuyIl.chunk.mjs";import{A as fr,a as n_}from"./actionText-fFcUPi2g-1UIVDoW6.chunk.mjs";const Ll="viewer",Zl="4.0.0";function gr(){try{return Jt("core","capabilities")}catch{return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"),"_oc_capabilities"in window?window._oc_capabilities:{}}}const o_=Il({name:"NcDialog",components:{NcDialogButton:Hl,NcModal:Ks},props:{name:{type:String,required:!0},message:{type:String,default:""},additionalTrapElements:{type:Array,validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="string"||a instanceof HTMLElement),default:()=>[]},container:{type:String,required:!1,default:"body"},open:{type:Boolean,default:!0},size:{type:String,required:!1,default:"small",validator:e=>typeof e=="string"&&["small","normal","large","full"].includes(e)},buttons:{type:Array,required:!1,default:()=>[],validator:e=>Array.isArray(e)&&e.every(a=>typeof a=="object")},canClose:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!1},isForm:{type:Boolean,default:!1},outTransition:{type:Boolean,default:!1},navigationClasses:{type:[String,Array,Object],required:!1,default:""},navigationAriaLabel:{type:String,required:!1,default:""},navigationAriaLabelledby:{type:String,required:!1,default:""},contentClasses:{type:[String,Array,Object],required:!1,default:""},dialogClasses:{type:[String,Array,Object],required:!1,default:""}},emits:["closing","update:open","submit"],setup(e,{emit:a,slots:i}){const n=ot(),{width:o}=Js(n,{width:900}),s=Oa(()=>o.value<876),l=Oa(()=>i?.navigation!==void 0),_=dt(),r=Oa(()=>e.navigationAriaLabel||void 0),f=Oa(()=>{if(!e.navigationAriaLabel)return e.navigationAriaLabelledby||_}),d=ot(),g=Oa(()=>e.isForm&&!l.value?"form":"div"),h=Oa(()=>g.value==="form"?{submit(w){w.preventDefault(),a("submit",w)}}:{}),F=ot(!0),m=(w,S)=>{g.value==="form"&&!d.value.reportValidity()||(p(S),window.setTimeout(()=>T(),300))},p=w=>{F.value=!1,a("closing",w)},T=()=>{F.value=!0,a("update:open",!1)},k=Oa(()=>({canClose:e.canClose,container:e.container===void 0?"body":e.container,labelId:_,size:e.size,show:e.open&&F.value,outTransition:e.outTransition,closeOnClickOutside:e.closeOnClickOutside,additionalTrapElements:e.additionalTrapElements}));return{dialogElement:d,dialogListeners:h,dialogTagName:g,handleButtonClose:m,handleClosing:p,handleClosed:T,hasNavigation:l,navigationId:_,navigationAriaLabelAttr:r,navigationAriaLabelledbyAttr:f,isNavigationCollapsed:s,modalProps:k,wrapper:n}}});var s_=function(){var e=this,a=e._self._c;return e._self._setupProxy,e.open?a("NcModal",e._b({staticClass:"dialog__modal",attrs:{"enable-slideshow":!1,"enable-swipe":!1},on:{close:e.handleClosed,"update:show":function(i){return e.handleClosing()}}},"NcModal",e.modalProps,!1),[a("h2",{staticClass:"dialog__name",attrs:{id:e.navigationId},domProps:{textContent:e._s(e.name)}}),a(e.dialogTagName,e._g({ref:"dialogElement",tag:"component",staticClass:"dialog",class:e.dialogClasses},e.dialogListeners),[a("div",{ref:"wrapper",class:["dialog__wrapper",{"dialog__wrapper--collapsed":e.isNavigationCollapsed}]},[e.hasNavigation?a("nav",{staticClass:"dialog__navigation",class:e.navigationClasses,attrs:{"aria-label":e.navigationAriaLabelAttr,"aria-labelledby":e.navigationAriaLabelledbyAttr}},[e._t("navigation",null,{isCollapsed:e.isNavigationCollapsed})],2):e._e(),a("div",{staticClass:"dialog__content",class:e.contentClasses},[e._t("default",function(){return[a("p",{staticClass:"dialog__text"},[e._v(" "+e._s(e.message)+" ")])]})],2)]),a("div",{staticClass:"dialog__actions"},[e._t("actions",function(){return e._l(e.buttons,function(i,n){return a("NcDialogButton",e._b({key:n,on:{click:e.handleButtonClose}},"NcDialogButton",i,!1))})})],2)])],1):e._e()},r_=[],l_=ie(o_,s_,r_,!1,null,"e79a4708");const J2=l_.exports,__='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-eye" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>';function V0(e,a,i){window.OCP.Files.Router.goToRoute(null,{view:a.id,fileid:String(e.fileid)},{dir:i,openfile:"true"},!0)}async function d_(e,a,i){const n=()=>{const o={...window.OCP.Files.Router.query};delete o.openfile,window.OCP.Files.Router.goToRoute(null,window.OCP.Files.Router.params,o)};return V0(e,a,i),window.OCA.Viewer.open({path:e.path,onPrev:V0,onNext:V0,onClose:n}),null}function f_(){Pl(new Gl({id:"view",displayName:()=>x("viewer","View"),iconSvgInline:()=>__,default:Ul.DEFAULT,enabled:e=>e.some(a=>!(a.isDavRessource&&a.root?.startsWith("/files")))?!1:e.every(a=>!!(a.permissions&zl.READ)&&window.OCA.Viewer.mimetypes.includes(a.mime)),exec:d_}))}function fi(e,a,i){e.$set(e.$data._asyncComputed[a],"state",i),e.$set(e.$data._asyncComputed[a],"updating",i==="updating"),e.$set(e.$data._asyncComputed[a],"error",i==="error"),e.$set(e.$data._asyncComputed[a],"success",i==="success")}function g_(e){return typeof e=="function"?e:e.get}function cn(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function Wn(e){return cn(e,"lazy")&&e.lazy}function h_(e,a){return e[$n+a]}var $n="async_computed$lazy_active$",Xt="async_computed$lazy_data$";function F_(e,a,i){e[$n+a]=!1,e[Xt+a]=i}function u_(e){return{get:function(){return this[$n+e]=!0,this[Xt+e]},set:function(a){this[Xt+e]=a}}}function c_(e,a,i){e[Xt+a]=i}function m_(e,a){return e[Xt+a]}var p_=function(e){return function(){var a=this;return e.watch.forEach(function(i){var n=i.split(".");if(n.length===1)a[i];else try{var o=a;n.forEach(function(s){o=o[s]})}catch(s){throw console.error("AsyncComputed: bad path: ",i),s}}),e.get.call(this)}},b_=function(e){return function(){return e.watch.call(this),e.get.call(this)}};function D_(e){if(typeof e.watch=="function")return b_(e);if(Array.isArray(e.watch))return e.watch.forEach(function(a){if(typeof a!="string")throw new Error("AsyncComputed: watch elemnts must be strings")}),p_(e);throw Error("AsyncComputed: watch should be function or an array")}var hr=typeof Symbol=="function"?Symbol("did-not-update"):{},T_=function(e,a){return function(){return e.shouldUpdate.call(this)?a.call(this):hr}},y_=function(e){return hr===e},Fr="_async_computed$",ur={install:function(e,a){a=a||{},e.config.optionMergeStrategies.asyncComputed=e.config.optionMergeStrategies.computed,e.mixin({data:function(){return{_asyncComputed:{}}},computed:{$asyncComputed:function(){return this.$data._asyncComputed}},beforeCreate:function(){var i=this.$options.asyncComputed||{};if(Object.keys(i).length){for(var n in i){var o=A_(n,i[n]);this.$options.computed[Fr+n]=o}this.$options.data=k_(this.$options,a)}},created:function(){for(var i in this.$options.asyncComputed||{}){var n=this.$options.asyncComputed[i],o=cr.call(this,n,a);Wn(n)?c_(this,i,o):this[i]=o}for(var s in this.$options.asyncComputed||{})E_(this,s,a,e)}})}};function E_(e,a,i,n){var o=0,s=function(l){var _=++o;y_(l)||((!l||!l.then)&&(l=Promise.resolve(l)),fi(e,a,"updating"),l.then(function(r){_===o&&(fi(e,a,"success"),e[a]=r)}).catch(function(r){if(_===o&&(fi(e,a,"error"),n.set(e.$data._asyncComputed[a],"exception",r),i.errorHandler!==!1)){var f=i.errorHandler===void 0?console.error.bind(console,"Error evaluating async computed property:"):i.errorHandler;i.useRawError?f(r,e,r.stack):f(r.stack)}}))};n.set(e.$data._asyncComputed,a,{exception:null,update:function(){e._isDestroyed||s(g_(e.$options.asyncComputed[a]).apply(e))}}),fi(e,a,"updating"),e.$watch(Fr+a,s,{immediate:!0})}function k_(e,a){var i=e.data,n=e.asyncComputed||{};return function(o){var s=(typeof i=="function"?i.call(this,o):i)||{};for(var l in n){var _=this.$options.asyncComputed[l],r=cr.call(this,_,a);Wn(_)?(F_(s,l,r),this.$options.computed[l]=u_(l)):s[l]=r}return s}}function A_(e,a){if(typeof a=="function")return a;var i=a.get;if(cn(a,"watch")&&(i=D_(a)),cn(a,"shouldUpdate")&&(i=T_(a,i)),Wn(a)){var n=i;i=function(){return h_(this,e)?n.call(this):m_(this,e)}}return i}function cr(e,a){var i=null;return"default"in e?i=e.default:"default"in a&&(i=a.default),typeof i=="function"?i.call(this):i}typeof window<"u"&&window.Vue&&window.Vue.use(ur);const w_={name:"PlayCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var v_=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon play-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},S_=[],R_=li(w_,v_,S_,!1,null,null);const C_=R_.exports;oe();class B0{static fromString(a){return new B0(a)}constructor(a){this.value=a}icaltype="binary";decodeValue(){return this._b64_decode(this.value)}setEncodedValue(a){this.value=this._b64_encode(a)}_b64_encode(a){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,o,s,l,_,r,f,d,g=0,h=0,F="",m=[];if(!a)return a;do n=a.charCodeAt(g++),o=a.charCodeAt(g++),s=a.charCodeAt(g++),d=n<<16|o<<8|s,l=d>>18&63,_=d>>12&63,r=d>>6&63,f=d&63,m[h++]=i.charAt(l)+i.charAt(_)+i.charAt(r)+i.charAt(f);while(g<a.length);F=m.join("");let p=a.length%3;return(p?F.slice(0,p-3):F)+"===".slice(p||3)}_b64_decode(a){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,o,s,l,_,r,f,d,g=0,h=0,F="",m=[];if(!a)return a;a+="";do l=i.indexOf(a.charAt(g++)),_=i.indexOf(a.charAt(g++)),r=i.indexOf(a.charAt(g++)),f=i.indexOf(a.charAt(g++)),d=l<<18|_<<12|r<<6|f,n=d>>16&255,o=d>>8&255,s=d&255,r==64?m[h++]=String.fromCharCode(n):f==64?m[h++]=String.fromCharCode(n,o):m[h++]=String.fromCharCode(n,o,s);while(g<a.length);return F=m.join(""),F}toString(){return this.value}}const B_=/([PDWHMTS]{1,1})/,O_=["weeks","days","hours","minutes","seconds","isNegative"];class Pe{static fromSeconds(a){return new Pe().fromSeconds(a)}static isValueString(a){return a[0]==="P"||a[1]==="P"}static fromString(a){let i=0,n=Object.create(null),o=0;for(;(i=a.search(B_))!==-1;){let s=a[i],l=a.slice(0,Math.max(0,i));a=a.slice(i+1),o+=N_(s,l,n)}if(o<2)throw new Error('invalid duration value: Not enough duration components in "'+a+'"');return new Pe(n)}static fromData(a){return new Pe(a)}constructor(a){this.wrappedJSObject=this,this.fromData(a)}weeks=0;days=0;hours=0;minutes=0;seconds=0;isNegative=!1;icalclass="icalduration";icaltype="duration";clone(){return Pe.fromData(this)}toSeconds(){let a=this.seconds+60*this.minutes+3600*this.hours+86400*this.days+604800*this.weeks;return this.isNegative?-a:a}fromSeconds(a){let i=Math.abs(a);return this.isNegative=a<0,this.days=xe(i/86400),this.days%7==0?(this.weeks=this.days/7,this.days=0):this.weeks=0,i-=(this.days+7*this.weeks)*86400,this.hours=xe(i/3600),i-=this.hours*3600,this.minutes=xe(i/60),i-=this.minutes*60,this.seconds=i,this}fromData(a){for(let i of O_)a&&i in a?this[i]=a[i]:this[i]=0}reset(){this.isNegative=!1,this.weeks=0,this.days=0,this.hours=0,this.minutes=0,this.seconds=0}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(i<n)}normalize(){this.fromSeconds(this.toSeconds())}toString(){if(this.toSeconds()==0)return"PT0S";{let a="";return this.isNegative&&(a+="-"),a+="P",this.weeks&&(a+=this.weeks+"W"),this.days&&(a+=this.days+"D"),(this.hours||this.minutes||this.seconds)&&(a+="T",this.hours&&(a+=this.hours+"H"),this.minutes&&(a+=this.minutes+"M"),this.seconds&&(a+=this.seconds+"S")),a}}toICALString(){return this.toString()}}function N_(e,a,i){let n;switch(e){case"P":a&&a==="-"?i.isNegative=!0:i.isNegative=!1;break;case"D":n="days";break;case"W":n="weeks";break;case"H":n="hours";break;case"M":n="minutes";break;case"S":n="seconds";break;default:return 0}if(n){if(!a&&a!==0)throw new Error('invalid duration value: Missing number before "'+e+'"');let o=parseInt(a,10);if(ei(o))throw new Error('invalid duration value: Invalid number "'+a+'" before "'+e+'"');i[n]=o}return 1}let K=class X{static _dowCache={};static _wnCache={};static daysInMonth(a,i){let n=[0,31,28,31,30,31,30,31,31,30,31,30,31],o=30;return a<1||a>12||(o=n[a],a==2&&(o+=X.isLeapYear(i))),o}static isLeapYear(a){return a<=1752?a%4==0:a%4==0&&a%100!=0||a%400==0}static fromDayOfYear(a,i){let n=i,o=a,s=new X;s.auto_normalize=!1;let l=X.isLeapYear(n)?1:0;if(o<1)return n--,l=X.isLeapYear(n)?1:0,o+=X.daysInYearPassedMonth[l][12],X.fromDayOfYear(o,n);if(o>X.daysInYearPassedMonth[l][12])return l=X.isLeapYear(n)?1:0,o-=X.daysInYearPassedMonth[l][12],n++,X.fromDayOfYear(o,n);s.year=n,s.isDate=!0;for(let _=11;_>=0;_--)if(o>X.daysInYearPassedMonth[l][_]){s.month=_+1,s.day=o-X.daysInYearPassedMonth[l][_];break}return s.auto_normalize=!0,s}static fromStringv2(a){return new X({year:parseInt(a.slice(0,4),10),month:parseInt(a.slice(5,7),10),day:parseInt(a.slice(8,10),10),isDate:!0})}static fromDateString(a){return new X({year:Ie(a.slice(0,4)),month:Ie(a.slice(5,7)),day:Ie(a.slice(8,10)),isDate:!0})}static fromDateTimeString(a,i){if(a.length<19)throw new Error('invalid date-time value: "'+a+'"');let n,o;a[19]&&a[19]==="Z"?n=ce.utcTimezone:i&&(o=i.getParameter("tzid"),i.parent&&(i.parent.name==="standard"||i.parent.name==="daylight"?n=ce.localTimezone:o&&(n=i.parent.getTimeZoneByID(o))));const s={year:Ie(a.slice(0,4)),month:Ie(a.slice(5,7)),day:Ie(a.slice(8,10)),hour:Ie(a.slice(11,13)),minute:Ie(a.slice(14,16)),second:Ie(a.slice(17,19))};return o&&!n&&(s.timezone=o),new X(s,n)}static fromString(a,i){return a.length>10?X.fromDateTimeString(a,i):X.fromDateString(a)}static fromJSDate(a,i){return new X().fromJSDate(a,i)}static fromData=function(a,i){return new X().fromData(a,i)};static now(){return X.fromJSDate(new Date,!1)}static weekOneStarts(a,i){let n=X.fromData({year:a,month:1,day:1,isDate:!0}),o=n.dayOfWeek(),s=i||X.DEFAULT_WEEK_START;return o>X.THURSDAY&&(n.day+=7),s>X.THURSDAY&&(n.day-=7),n.day-=o-s,n}static getDominicalLetter(a){let i="GFEDCBA",n=(a+(a/4|0)+(a/400|0)-(a/100|0)-1)%7;return X.isLeapYear(a)?i[(n+6)%7]+i[n]:i[n]}static#e=null;static get epochTime(){return this.#e||(this.#e=X.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0,isDate:!1,timezone:"Z"})),this.#e}static _cmp_attr(a,i,n){return a[n]>i[n]?1:a[n]<i[n]?-1:0}static daysInYearPassedMonth=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];static SUNDAY=1;static MONDAY=2;static TUESDAY=3;static WEDNESDAY=4;static THURSDAY=5;static FRIDAY=6;static SATURDAY=7;static DEFAULT_WEEK_START=2;constructor(a,i){this.wrappedJSObject=this;let n=this._time=Object.create(null);n.year=0,n.month=1,n.day=1,n.hour=0,n.minute=0,n.second=0,n.isDate=!1,this.fromData(a,i)}icalclass="icaltime";_cachedUnixTime=null;get icaltype(){return this.isDate?"date":"date-time"}zone=null;_pendingNormalization=!1;clone(){return new X(this._time,this.zone)}reset(){this.fromData(X.epochTime),this.zone=ce.utcTimezone}resetTo(a,i,n,o,s,l,_){this.fromData({year:a,month:i,day:n,hour:o,minute:s,second:l,zone:_})}fromJSDate(a,i){return a?i?(this.zone=ce.utcTimezone,this.year=a.getUTCFullYear(),this.month=a.getUTCMonth()+1,this.day=a.getUTCDate(),this.hour=a.getUTCHours(),this.minute=a.getUTCMinutes(),this.second=a.getUTCSeconds()):(this.zone=ce.localTimezone,this.year=a.getFullYear(),this.month=a.getMonth()+1,this.day=a.getDate(),this.hour=a.getHours(),this.minute=a.getMinutes(),this.second=a.getSeconds()):this.reset(),this._cachedUnixTime=null,this}fromData(a,i){if(a)for(let[n,o]of Object.entries(a))n!=="icaltype"&&(this[n]=o);if(i&&(this.zone=i),a&&!("isDate"in a)?this.isDate=!("hour"in a):a&&"isDate"in a&&(this.isDate=a.isDate),a&&"timezone"in a){let n=Ii.get(a.timezone);this.zone=n||ce.localTimezone}return a&&"zone"in a&&(this.zone=a.zone),this.zone||(this.zone=ce.localTimezone),this._cachedUnixTime=null,this}dayOfWeek(a){let i=a||X.SUNDAY,n=(this.year<<12)+(this.month<<8)+(this.day<<3)+i;if(n in X._dowCache)return X._dowCache[n];let o=this.day,s=this.month+(this.month<3?12:0),l=this.year-(this.month<3?1:0),_=o+l+xe((s+1)*26/10)+xe(l/4);return _+=xe(l/100)*6+xe(l/400),_=(_+7-i)%7+1,X._dowCache[n]=_,_}dayOfYear(){let a=X.isLeapYear(this.year)?1:0;return X.daysInYearPassedMonth[a][this.month-1]+this.day}startOfWeek(a){let i=a||X.SUNDAY,n=this.clone();return n.day-=(this.dayOfWeek()+7-i)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}endOfWeek(a){let i=a||X.SUNDAY,n=this.clone();return n.day+=(7-this.dayOfWeek()+i-X.SUNDAY)%7,n.isDate=!0,n.hour=0,n.minute=0,n.second=0,n}startOfMonth(){let a=this.clone();return a.day=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfMonth(){let a=this.clone();return a.day=X.daysInMonth(a.month,a.year),a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startOfYear(){let a=this.clone();return a.day=1,a.month=1,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}endOfYear(){let a=this.clone();return a.day=31,a.month=12,a.isDate=!0,a.hour=0,a.minute=0,a.second=0,a}startDoyWeek(a){let i=a||X.SUNDAY,n=this.dayOfWeek()-i;return n<0&&(n+=7),this.dayOfYear()-n}getDominicalLetter(){return X.getDominicalLetter(this.year)}nthWeekDay(a,i){let n=X.daysInMonth(this.month,this.year),o,s=i,l=0,_=this.clone();if(s>=0){_.day=1,s!=0&&s--,l=_.day;let r=_.dayOfWeek(),f=a-r;f<0&&(f+=7),l+=f,l-=a,o=a}else{_.day=n;let r=_.dayOfWeek();s++,o=r-a,o<0&&(o+=7),o=n-o}return o+=s*7,l+o}isNthWeekDay(a,i){let n=this.dayOfWeek();return i===0&&n===a||this.nthWeekDay(a,i)===this.day}weekNumber(a){let i=(this.year<<12)+(this.month<<8)+(this.day<<3)+a;if(i in X._wnCache)return X._wnCache[i];let n,o=this.clone();o.isDate=!0;let s=this.year;o.month==12&&o.day>25?(n=X.weekOneStarts(s+1,a),o.compare(n)<0?n=X.weekOneStarts(s,a):s++):(n=X.weekOneStarts(s,a),o.compare(n)<0&&(n=X.weekOneStarts(--s,a)));let l=o.subtractDate(n).toSeconds()/86400,_=xe(l/7)+1;return X._wnCache[i]=_,_}addDuration(a){let i=a.isNegative?-1:1,n=this.second,o=this.minute,s=this.hour,l=this.day;n+=i*a.seconds,o+=i*a.minutes,s+=i*a.hours,l+=i*a.days,l+=i*7*a.weeks,this.second=n,this.minute=o,this.hour=s,this.day=l,this._cachedUnixTime=null}subtractDate(a){let i=this.toUnixTime()+this.utcOffset(),n=a.toUnixTime()+a.utcOffset();return Pe.fromSeconds(i-n)}subtractDateTz(a){let i=this.toUnixTime(),n=a.toUnixTime();return Pe.fromSeconds(i-n)}compare(a){let i=this.toUnixTime(),n=a.toUnixTime();return i>n?1:n>i?-1:0}compareDateOnlyTz(a,i){let n=this.convertToZone(i),o=a.convertToZone(i),s=0;return(s=X._cmp_attr(n,o,"year"))!=0||(s=X._cmp_attr(n,o,"month"))!=0||(s=X._cmp_attr(n,o,"day"))!=0,s}convertToZone(a){let i=this.clone(),n=this.zone.tzid==a.tzid;return!this.isDate&&!n&&ce.convert_time(i,this.zone,a),i.zone=a,i}utcOffset(){return this.zone==ce.localTimezone||this.zone==ce.utcTimezone?0:this.zone.utcOffset(this)}toICALString(){let a=this.toString();return a.length>10?Me.icalendar.value["date-time"].toICAL(a):Me.icalendar.value.date.toICAL(a)}toString(){let a=this.year+"-"+Qe(this.month)+"-"+Qe(this.day);return this.isDate||(a+="T"+Qe(this.hour)+":"+Qe(this.minute)+":"+Qe(this.second),this.zone===ce.utcTimezone&&(a+="Z")),a}toJSDate(){return this.zone==ce.localTimezone?this.isDate?new Date(this.year,this.month-1,this.day):new Date(this.year,this.month-1,this.day,this.hour,this.minute,this.second,0):new Date(this.toUnixTime()*1e3)}_normalize(){return this._time.isDate&&(this._time.hour=0,this._time.minute=0,this._time.second=0),this.adjust(0,0,0,0),this}adjust(a,i,n,o,s){let l,_,r=0,f=0,d,g,h,F,m,p=s||this._time;if(p.isDate||(d=p.second+o,p.second=d%60,l=xe(d/60),p.second<0&&(p.second+=60,l--),g=p.minute+n+l,p.minute=g%60,_=xe(g/60),p.minute<0&&(p.minute+=60,_--),h=p.hour+i+_,p.hour=h%24,r=xe(h/24),p.hour<0&&(p.hour+=24,r--)),p.month>12?f=xe((p.month-1)/12):p.month<1&&(f=xe(p.month/12)-1),p.year+=f,p.month-=12*f,F=p.day+a+r,F>0)for(;m=X.daysInMonth(p.month,p.year),!(F<=m);)p.month++,p.month>12&&(p.year++,p.month=1),F-=m;else for(;F<=0;)p.month==1?(p.year--,p.month=12):p.month--,F+=X.daysInMonth(p.month,p.year);return p.day=F,this._cachedUnixTime=null,this}fromUnixTime(a){this.zone=ce.utcTimezone;let i=new Date(a*1e3);this.year=i.getUTCFullYear(),this.month=i.getUTCMonth()+1,this.day=i.getUTCDate(),this._time.isDate?(this.hour=0,this.minute=0,this.second=0):(this.hour=i.getUTCHours(),this.minute=i.getUTCMinutes(),this.second=i.getUTCSeconds()),this._cachedUnixTime=null}toUnixTime(){if(this._cachedUnixTime!==null)return this._cachedUnixTime;let a=this.utcOffset(),i=Date.UTC(this.year,this.month-1,this.day,this.hour,this.minute,this.second-a);return this._cachedUnixTime=i/1e3,this._cachedUnixTime}toJSON(){let a=["year","month","day","hour","minute","second","isDate"],i=Object.create(null),n=0,o=a.length,s;for(;n<o;n++)s=a[n],i[s]=this[s];return this.zone&&(i.timezone=this.zone.tzid),i}};(function(){function e(a){Object.defineProperty(K.prototype,a,{get:function(){return this._pendingNormalization&&(this._normalize(),this._pendingNormalization=!1),this._time[a]},set:function(i){a==="isDate"&&i&&!this._time.isDate&&this.adjust(0,0,0,0),this._cachedUnixTime=null,this._pendingNormalization=!0,this._time[a]=i}})}e("year"),e("month"),e("day"),e("hour"),e("minute"),e("second"),e("isDate")})();const x_=/[^ \t]/,gi=":",W0=";",M_="=",j_="unknown",Y_="text",q_={"^'":'"',"^n":`
`,"^^":"^"};function he(e){let a={},i=a.component=[];if(a.stack=[i],he._eachLine(e,function(n,o){he._handleContentLine(o,a)}),a.stack.length>1)throw new at("invalid ical body. component began but did not end");return a=null,i.length==1?i[0]:i}he.property=function(e,a){let i={component:[[],[]],designSet:a||Me.defaultSet};return he._handleContentLine(e,i),i.component[1][0]},he.component=function(e){return he(e)};class at extends Error{name=this.constructor.name}he.ParserError=at,he._handleContentLine=function(e,a){let i=e.indexOf(gi),n=e.indexOf(W0),o,s,l,_,r={};n!==-1&&i!==-1&&n>i&&(n=-1);let f;if(n!==-1){if(l=e.slice(0,Math.max(0,n)).toLowerCase(),f=he._parseParameters(e.slice(Math.max(0,n)),0,a.designSet),f[2]==-1)throw new at("Invalid parameters in '"+e+"'");if(r=f[0],o=f[1].length+f[2]+n,(s=e.slice(Math.max(0,o)).indexOf(gi))!==-1)_=e.slice(Math.max(0,o+s+1));else throw new at("Missing parameter value in '"+e+"'")}else if(i!==-1){if(l=e.slice(0,Math.max(0,i)).toLowerCase(),_=e.slice(Math.max(0,i+1)),l==="begin"){let k=[_.toLowerCase(),[],[]];a.stack.length===1?a.component.push(k):a.component[2].push(k),a.stack.push(a.component),a.component=k,a.designSet||(a.designSet=Me.getDesignSet(a.component[0]));return}else if(l==="end"){a.component=a.stack.pop();return}}else throw new at('invalid line (no token ";" or ":") "'+e+'"');let d,g=!1,h=!1,F,m,p;a.designSet.propertyGroups&&l.indexOf(".")!==-1?(m=l.split("."),r.group=m[0],p=m[1]):p=l,p in a.designSet.property&&(F=a.designSet.property[p],"multiValue"in F&&(g=F.multiValue),"structuredValue"in F&&(h=F.structuredValue),_&&"detectType"in F&&(d=F.detectType(_))),d||("value"in r?d=r.value.toLowerCase():F?d=F.defaultType:d=j_),delete r.value;let T;g&&h?(_=he._parseMultiValue(_,h,d,[],g,a.designSet,h),T=[p,r,d,_]):g?(T=[p,r,d],he._parseMultiValue(_,g,d,T,null,a.designSet,!1)):h?(_=he._parseMultiValue(_,h,d,[],null,a.designSet,h),T=[p,r,d,_]):(_=he._parseValue(_,d,a.designSet,!1),T=[p,r,d,_]),a.component[0]==="vcard"&&a.component[1].length===0&&!(l==="version"&&_==="4.0")&&(a.designSet=Me.getDesignSet("vcard3")),a.component[1].push(T)},he._parseValue=function(e,a,i,n){return a in i.value&&"fromICAL"in i.value[a]?i.value[a].fromICAL(e,n):e},he._parseParameters=function(e,a,i){let n=a,o=0,s=M_,l={},_,r,f,d=-1,g,h,F;for(;o!==!1&&(o=e.indexOf(s,o+1))!==-1;){if(_=e.slice(n+1,o),_.length==0)throw new at("Empty parameter name in '"+e+"'");if(r=_.toLowerCase(),F=!1,h=!1,r in i.param&&i.param[r].valueType?g=i.param[r].valueType:g=Y_,r in i.param&&(h=i.param[r].multiValue,i.param[r].multiValueSeparateDQuote&&(F=he._rfc6868Escape('"'+h+'"'))),e[o+1]==='"'){if(d=o+2,o=e.indexOf('"',d),h&&o!=-1){let T=!0;for(;T;)e[o+1]==h&&e[o+2]=='"'?o=e.indexOf('"',o+3):T=!1}if(o===-1)throw new at('invalid line (no matching double quote) "'+e+'"');f=e.slice(d,o),n=e.indexOf(W0,o);let p=e.indexOf(gi,o);(n===-1||p!==-1&&n>p)&&(o=!1)}else{d=o+1;let p=e.indexOf(W0,d),T=e.indexOf(gi,d);T!==-1&&p>T?(p=T,o=!1):p===-1?(T===-1?p=e.length:p=T,o=!1):(n=p,o=p),f=e.slice(d,p)}const m=f.length;if(f=he._rfc6868Escape(f),d+=m-f.length,h){let p=F||h;f=he._parseMultiValue(f,p,g,[],null,i)}else f=he._parseValue(f,g,i);h&&r in l?Array.isArray(l[r])?l[r].push(f):l[r]=[l[r],f]:l[r]=f}return[l,f,d]},he._rfc6868Escape=function(e){return e.replace(/\^['n^]/g,function(a){return q_[a]})},he._parseMultiValue=function(e,a,i,n,o,s,l){let _=0,r=0,f;if(a.length===0)return e;for(;(_=mr(e,a,r))!==-1;)f=e.slice(r,_),o?f=he._parseMultiValue(f,o,i,[],null,s,l):f=he._parseValue(f,i,s,l),n.push(f),r=_+a.length;return f=e.slice(r),o?f=he._parseMultiValue(f,o,i,[],null,s,l):f=he._parseValue(f,i,s,l),n.push(f),n.length==1?n[0]:n},he._eachLine=function(e,a){let i=e.length,n=e.search(x_),o=n,s,l,_;do o=e.indexOf(`
`,n)+1,o>1&&e[o-2]==="\r"?_=2:_=1,o===0&&(o=i,_=0),l=e[n],l===" "||l==="	"?s+=e.slice(n+1,o-_):(s&&a(null,s),s=e.slice(n,o-_)),n=o;while(o!==i);s=s.trim(),s.length&&a(null,s)};const L_=["tzid","location","tznames","latitude","longitude"];let ce=class Fe{static _compare_change_fn(a,i){return a.year<i.year?-1:a.year>i.year?1:a.month<i.month?-1:a.month>i.month?1:a.day<i.day?-1:a.day>i.day?1:a.hour<i.hour?-1:a.hour>i.hour?1:a.minute<i.minute?-1:a.minute>i.minute?1:a.second<i.second?-1:a.second>i.second?1:0}static convert_time(a,i,n){if(a.isDate||i.tzid==n.tzid||i==Fe.localTimezone||n==Fe.localTimezone)return a.zone=n,a;let o=i.utcOffset(a);return a.adjust(0,0,0,-o),o=n.utcOffset(a),a.adjust(0,0,0,o),null}static fromData(a){return new Fe().fromData(a)}static#e=null;static get utcTimezone(){return this.#e||(this.#e=Fe.fromData({tzid:"UTC"})),this.#e}static#a=null;static get localTimezone(){return this.#a||(this.#a=Fe.fromData({tzid:"floating"})),this.#a}static adjust_change(a,i,n,o,s){return K.prototype.adjust.call(a,i,n,o,s,a)}static _minimumExpansionYear=-1;static EXTRA_COVERAGE=5;constructor(a){this.wrappedJSObject=this,this.fromData(a)}tzid="";location="";tznames="";latitude=0;longitude=0;component=null;expandedUntilYear=0;icalclass="icaltimezone";fromData(a){if(this.expandedUntilYear=0,this.changes=[],a instanceof ea)this.component=a;else{if(a&&"component"in a)if(typeof a.component=="string"){let i=he(a.component);this.component=new ea(i)}else a.component instanceof ea?this.component=a.component:this.component=null;for(let i of L_)a&&i in a&&(this[i]=a[i])}return this.component instanceof ea&&!this.tzid&&(this.tzid=this.component.getFirstPropertyValue("tzid")),this}utcOffset(a){if(this==Fe.utcTimezone||this==Fe.localTimezone||(this._ensureCoverage(a.year),!this.changes.length))return 0;let i={year:a.year,month:a.month,day:a.day,hour:a.hour,minute:a.minute,second:a.second},n=this._findNearbyChange(i),o=-1,s=1;for(;;){let _=ft(this.changes[n],!0);if(_.utcOffset<_.prevUtcOffset?Fe.adjust_change(_,0,0,0,_.utcOffset):Fe.adjust_change(_,0,0,0,_.prevUtcOffset),Fe._compare_change_fn(i,_)>=0?o=n:s=-1,s==-1&&o!=-1)break;if(n+=s,n<0)return 0;if(n>=this.changes.length)break}let l=this.changes[o];if(l.utcOffset-l.prevUtcOffset<0&&o>0){let _=ft(l,!0);if(Fe.adjust_change(_,0,0,0,_.prevUtcOffset),Fe._compare_change_fn(i,_)<0){let r=this.changes[o-1],f=!1;l.is_daylight!=f&&r.is_daylight==f&&(l=r)}}return l.utcOffset}_findNearbyChange(a){let i=st(this.changes,a,Fe._compare_change_fn);return i>=this.changes.length?this.changes.length-1:i}_ensureCoverage(a){if(Fe._minimumExpansionYear==-1){let n=K.now();Fe._minimumExpansionYear=n.year}let i=a;if(i<Fe._minimumExpansionYear&&(i=Fe._minimumExpansionYear),i+=Fe.EXTRA_COVERAGE,!this.changes.length||this.expandedUntilYear<a){let n=this.component.getAllSubcomponents(),o=n.length,s=0;for(;s<o;s++)this._expandComponent(n[s],i,this.changes);this.changes.sort(Fe._compare_change_fn),this.expandedUntilYear=i}}_expandComponent(a,i,n){if(!a.hasProperty("dtstart")||!a.hasProperty("tzoffsetto")||!a.hasProperty("tzoffsetfrom"))return null;let o=a.getFirstProperty("dtstart").getFirstValue(),s;function l(r){return r.factor*(r.hours*3600+r.minutes*60)}function _(){let r={};return r.is_daylight=a.name=="daylight",r.utcOffset=l(a.getFirstProperty("tzoffsetto").getFirstValue()),r.prevUtcOffset=l(a.getFirstProperty("tzoffsetfrom").getFirstValue()),r}if(!a.hasProperty("rrule")&&!a.hasProperty("rdate"))s=_(),s.year=o.year,s.month=o.month,s.day=o.day,s.hour=o.hour,s.minute=o.minute,s.second=o.second,Fe.adjust_change(s,0,0,0,-s.prevUtcOffset),n.push(s);else{let r=a.getAllProperties("rdate");for(let d of r){let g=d.getFirstValue();s=_(),s.year=g.year,s.month=g.month,s.day=g.day,g.isDate?(s.hour=o.hour,s.minute=o.minute,s.second=o.second,o.zone!=Fe.utcTimezone&&Fe.adjust_change(s,0,0,0,-s.prevUtcOffset)):(s.hour=g.hour,s.minute=g.minute,s.second=g.second,g.zone!=Fe.utcTimezone&&Fe.adjust_change(s,0,0,0,-s.prevUtcOffset)),n.push(s)}let f=a.getFirstProperty("rrule");if(f){f=f.getFirstValue(),s=_(),f.until&&f.until.zone==Fe.utcTimezone&&(f.until.adjust(0,0,0,s.prevUtcOffset),f.until.zone=Fe.localTimezone);let d=f.iterator(o),g;for(;(g=d.next())&&(s=_(),!(g.year>i||!g));)s.year=g.year,s.month=g.month,s.day=g.day,s.hour=g.hour,s.minute=g.minute,s.second=g.second,s.isDate=g.isDate,Fe.adjust_change(s,0,0,0,-s.prevUtcOffset),n.push(s)}}return n}toString(){return this.tznames?this.tznames:this.tzid}},Ge=null;const Ii={get count(){return Ge===null?0:Object.keys(Ge).length},reset:function(){Ge=Object.create(null);let e=ce.utcTimezone;Ge.Z=e,Ge.UTC=e,Ge.GMT=e},_hard_reset:function(){Ge=null},has:function(e){return Ge===null?!1:!!Ge[e]},get:function(e){return Ge===null&&this.reset(),Ge[e]},register:function(e,a){if(Ge===null&&this.reset(),typeof e=="string"&&a instanceof ce&&([e,a]=[a,e]),a||(e instanceof ce?a=e.tzid:e.name==="vtimezone"&&(e=new ce(e),a=e.tzid)),!a)throw new TypeError("Neither a timezone nor a name was passed");if(e instanceof ce)Ge[a]=e;else throw new TypeError("timezone must be ICAL.Timezone or ICAL.Component")},remove:function(e){return Ge===null?null:delete Ge[e]}};function Z_(e){let a,i,n,o,s;if(!e||e.name!=="vcalendar")return e;for(a=e.getAllSubcomponents(),i=[],n={},s=0;s<a.length;s++)if(a[s].name==="vtimezone"){let l=a[s].getFirstProperty("tzid").getFirstValue();n[l]=a[s]}else i=i.concat(a[s].getAllProperties());for(o={},s=0;s<i.length;s++){let l=i[s].getParameter("tzid");l&&(o[l]=!0)}for(let[l,_]of Object.entries(n))o[l]||e.removeSubcomponent(_);for(let l of Object.keys(o))!n[l]&&Ii.has(l)&&e.addSubcomponent(Ii.get(l).component);return e}function ei(e){return typeof e=="number"&&isNaN(e)}function Ie(e){let a=parseInt(e,10);if(ei(a))throw new Error('Could not extract integer from "'+e+'"');return a}function Ea(e,a){if(!(typeof e>"u"))return e instanceof a?e:new a(e)}function mr(e,a,i){for(;(i=e.indexOf(a,i))!==-1;)if(i>0&&e[i-1]==="\\")i+=1;else return i;return-1}function st(e,a,i){if(!e.length)return 0;let n=0,o=e.length-1,s,l;for(;n<=o;)if(s=n+Math.floor((o-n)/2),l=i(a,e[s]),l<0)o=s-1;else if(l>0)n=s+1;else break;return l<0?s:l>0?s+1:s}function ft(e,a){if(!e||typeof e!="object")return e;if(e instanceof Date)return new Date(e.getTime());if("clone"in e)return e.clone();if(Array.isArray(e)){let i=[];for(let n=0;n<e.length;n++)i.push(a?ft(e[n],!0):e[n]);return i}else{let i={};for(let[n,o]of Object.entries(e))a?i[n]=ft(o,!0):i[n]=o;return i}}function pr(e){let a="",i=e||"",n=0,o=0;for(;i.length;){let s=i.codePointAt(n);s<128?++o:s<2048?o+=2:s<65536?o+=3:o+=4,o<Be.foldLength+1?n+=s>65535?2:1:(a+=Be.newLineChar+" "+i.slice(0,Math.max(0,n)),i=i.slice(Math.max(0,n)),n=o=0)}return a.slice(Be.newLineChar.length+1)}function Qe(e){switch(typeof e!="string"&&(typeof e=="number"&&(e=parseInt(e)),e=String(e)),e.length){case 0:return"00";case 1:return"0"+e;default:return e}}function xe(e){return e<0?Math.ceil(e):Math.floor(e)}function Ft(e,a){for(let i in e){let n=Object.getOwnPropertyDescriptor(e,i);n&&!Object.getOwnPropertyDescriptor(a,i)&&Object.defineProperty(a,i,n)}return a}var I_=Object.freeze({__proto__:null,updateTimezones:Z_,isStrictlyNaN:ei,strictParseInt:Ie,formatClassType:Ea,unescapedIndexOf:mr,binsearchInsert:st,clone:ft,foldline:pr,pad2:Qe,trunc:xe,extend:Ft});class la{static fromString(a){let i={};return i.factor=a[0]==="+"?1:-1,i.hours=Ie(a.slice(1,3)),i.minutes=Ie(a.slice(4,6)),new la(i)}static fromSeconds(a){let i=new la;return i.fromSeconds(a),i}constructor(a){this.fromData(a)}hours=0;minutes=0;factor=1;icaltype="utc-offset";clone(){return la.fromSeconds(this.toSeconds())}fromData(a){if(a)for(let[i,n]of Object.entries(a))this[i]=n;this._normalize()}fromSeconds(a){let i=Math.abs(a);return this.factor=a<0?-1:1,this.hours=xe(i/3600),i-=this.hours*3600,this.minutes=xe(i/60),this}toSeconds(){return this.factor*(60*this.minutes+3600*this.hours)}compare(a){let i=this.toSeconds(),n=a.toSeconds();return(i>n)-(n>i)}_normalize(){let a=this.toSeconds(),i=this.factor;for(;a<-43200;)a+=97200;for(;a>50400;)a-=97200;this.fromSeconds(a),a==0&&(this.factor=i)}toICALString(){return Me.icalendar.value["utc-offset"].toICAL(this.toString())}toString(){return(this.factor==1?"+":"-")+Qe(this.hours)+":"+Qe(this.minutes)}}class La extends K{static fromDateAndOrTimeString(a,i){function n(p,T,k){return p?Ie(p.slice(T,T+k)):null}let o=a.split("T"),s=o[0],l=o[1],_=l?Me.vcard.value.time._splitZone(l):[],r=_[0],f=_[1],d=s?s.length:0,g=f?f.length:0,h=s&&s[0]=="-"&&s[1]=="-",F=f&&f[0]=="-",m={year:h?null:n(s,0,4),month:h&&(d==4||d==7)?n(s,2,2):d==7||d==10?n(s,5,2):null,day:d==5?n(s,3,2):d==7&&h?n(s,5,2):d==10?n(s,8,2):null,hour:F?null:n(f,0,2),minute:F&&g==3?n(f,1,2):g>4?F?n(f,1,2):n(f,3,2):null,second:g==4?n(f,2,2):g==6?n(f,4,2):g==8?n(f,6,2):null};return r=="Z"?r=ce.utcTimezone:r&&r[3]==":"?r=la.fromString(r):r=null,new La(m,r,i)}constructor(a,i,n){super(a,i),this.icaltype=n||"date-and-or-time"}icalclass="vcardtime";icaltype="date-and-or-time";clone(){return new La(this._time,this.zone,this.icaltype)}_normalize(){return this}utcOffset(){return this.zone instanceof la?this.zone.toSeconds():K.prototype.utcOffset.apply(this,arguments)}toICALString(){return Me.vcard.value[this.icaltype].toICAL(this.toString())}toString(){let a=this.year,i=this.month,n=this.day,o=this.hour,s=this.minute,l=this.second,_=a!==null,r=i!==null,f=n!==null,d=o!==null,g=s!==null,h=l!==null,F=(_?Qe(a)+(r||f?"-":""):r||f?"--":"")+(r?Qe(i):"")+(f?"-"+Qe(n):""),m=(d?Qe(o):"-")+(d&&g?":":"")+(g?Qe(s):"")+(!d&&!g?"-":"")+(g&&h?":":"")+(h?Qe(l):""),p;switch(this.zone===ce.utcTimezone?p="Z":this.zone instanceof la?p=this.zone.toString():this.zone===ce.localTimezone?p="":this.zone instanceof ce?p=la.fromSeconds(this.zone.utcOffset(this)).toString():p="",this.icaltype){case"time":return m+p;case"date-and-or-time":case"date-time":return F+(m=="--"?"":"T"+m+p);case"date":return F}return null}}class ua{static _indexMap={BYSECOND:0,BYMINUTE:1,BYHOUR:2,BYDAY:3,BYMONTHDAY:4,BYYEARDAY:5,BYWEEKNO:6,BYMONTH:7,BYSETPOS:8};static _expandMap={SECONDLY:[1,1,1,1,1,1,1,1],MINUTELY:[2,1,1,1,1,1,1,1],HOURLY:[2,2,1,1,1,1,1,1],DAILY:[2,2,2,1,1,1,1,1],WEEKLY:[2,2,2,2,3,3,1,1],MONTHLY:[2,2,2,2,2,3,3,1],YEARLY:[2,2,2,2,2,2,2,2]};static UNKNOWN=0;static CONTRACT=1;static EXPAND=2;static ILLEGAL=3;constructor(a){this.fromData(a)}completed=!1;rule=null;dtstart=null;last=null;occurrence_number=0;by_indices=null;initialized=!1;by_data=null;days=null;days_index=0;fromData(a){if(this.rule=Ea(a.rule,He),!this.rule)throw new Error("iterator requires a (ICAL.Recur) rule");if(this.dtstart=Ea(a.dtstart,K),!this.dtstart)throw new Error("iterator requires a (ICAL.Time) dtstart");if(a.by_data?this.by_data=a.by_data:this.by_data=ft(this.rule.parts,!0),a.occurrence_number&&(this.occurrence_number=a.occurrence_number),this.days=a.days||[],a.last&&(this.last=Ea(a.last,K)),this.by_indices=a.by_indices,this.by_indices||(this.by_indices={BYSECOND:0,BYMINUTE:0,BYHOUR:0,BYDAY:0,BYMONTH:0,BYWEEKNO:0,BYMONTHDAY:0}),this.initialized=a.initialized||!1,!this.initialized)try{this.init()}catch(i){if(i instanceof Ro)this.completed=!0;else throw i}}init(){this.initialized=!0,this.last=this.dtstart.clone();let a=this.by_data;if("BYDAY"in a&&this.sort_byday_rules(a.BYDAY),"BYYEARDAY"in a&&("BYMONTH"in a||"BYWEEKNO"in a||"BYMONTHDAY"in a||"BYDAY"in a))throw new Error("Invalid BYYEARDAY rule");if("BYWEEKNO"in a&&"BYMONTHDAY"in a)throw new Error("BYWEEKNO does not fit to BYMONTHDAY");if(this.rule.freq=="MONTHLY"&&("BYYEARDAY"in a||"BYWEEKNO"in a))throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");if(this.rule.freq=="WEEKLY"&&("BYYEARDAY"in a||"BYMONTHDAY"in a))throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");if(this.rule.freq!="YEARLY"&&"BYYEARDAY"in a)throw new Error("BYYEARDAY may only appear in YEARLY rules");if(this.last.second=this.setup_defaults("BYSECOND","SECONDLY",this.dtstart.second),this.last.minute=this.setup_defaults("BYMINUTE","MINUTELY",this.dtstart.minute),this.last.hour=this.setup_defaults("BYHOUR","HOURLY",this.dtstart.hour),this.last.day=this.setup_defaults("BYMONTHDAY","DAILY",this.dtstart.day),this.last.month=this.setup_defaults("BYMONTH","MONTHLY",this.dtstart.month),this.rule.freq=="WEEKLY")if("BYDAY"in a){let[,i]=this.ruleDayOfWeek(a.BYDAY[0],this.rule.wkst),n=i-this.last.dayOfWeek(this.rule.wkst);(this.last.dayOfWeek(this.rule.wkst)<i&&n>=0||n<0)&&(this.last.day+=n)}else{let i=He.numericDayToIcalDay(this.dtstart.dayOfWeek());a.BYDAY=[i]}if(this.rule.freq=="YEARLY"){const i=this.rule.until?this.rule.until.year:2e4;for(;this.last.year<=i&&(this.expand_year_days(this.last.year),!(this.days.length>0));)this.increment_year(this.rule.interval);if(this.days.length==0)throw new Ro;this._nextByYearDay()}if(this.rule.freq=="MONTHLY"){if(this.has_by_data("BYDAY")){let i=null,n=this.last.clone(),o=K.daysInMonth(this.last.month,this.last.year);for(let s of this.by_data.BYDAY){this.last=n.clone();let[l,_]=this.ruleDayOfWeek(s),r=this.last.nthWeekDay(_,l);if(l>=6||l<=-6)throw new Error("Malformed values in BYDAY part");if(r>o||r<=0){if(i&&i.month==n.month)continue;for(;r>o||r<=0;)this.increment_month(),o=K.daysInMonth(this.last.month,this.last.year),r=this.last.nthWeekDay(_,l)}this.last.day=r,(!i||this.last.compare(i)<0)&&(i=this.last.clone())}if(this.last=i.clone(),this.has_by_data("BYMONTHDAY")&&this._byDayAndMonthDay(!0),this.last.day>o||this.last.day==0)throw new Error("Malformed values in BYDAY part")}else if(this.has_by_data("BYMONTHDAY")){this.last.day=1;let i=this.normalizeByMonthDayRules(this.last.year,this.last.month,this.rule.parts.BYMONTHDAY).filter(n=>n>=this.last.day);if(i.length)this.last.day=i[0],this.by_data.BYMONTHDAY=i;else if(!this.next_month()&&!this.next_month()&&!this.next_month())throw new Error("No possible occurrences")}}}next(a=!1){let i=this.last?this.last.clone():null;if((this.rule.count&&this.occurrence_number>=this.rule.count||this.rule.until&&this.last.compare(this.rule.until)>0)&&(this.completed=!0),this.completed)return null;if(this.occurrence_number==0&&this.last.compare(this.dtstart)>=0)return this.occurrence_number++,this.last;let n;do switch(n=1,this.rule.freq){case"SECONDLY":this.next_second();break;case"MINUTELY":this.next_minute();break;case"HOURLY":this.next_hour();break;case"DAILY":this.next_day();break;case"WEEKLY":this.next_week();break;case"MONTHLY":n=this.next_month();break;case"YEARLY":this.next_year();break;default:return null}while(!this.check_contracting_rules()||this.last.compare(this.dtstart)<0||!n);if(this.last.compare(i)==0){if(a)throw new Error("Same occurrence found twice, protecting you from death by recursion");this.next(!0)}return this.rule.until&&this.last.compare(this.rule.until)>0?(this.completed=!0,null):(this.occurrence_number++,this.last)}next_second(){return this.next_generic("BYSECOND","SECONDLY","second","minute")}increment_second(a){return this.increment_generic(a,"second",60,"minute")}next_minute(){return this.next_generic("BYMINUTE","MINUTELY","minute","hour","next_second")}increment_minute(a){return this.increment_generic(a,"minute",60,"hour")}next_hour(){return this.next_generic("BYHOUR","HOURLY","hour","monthday","next_minute")}increment_hour(a){this.increment_generic(a,"hour",24,"monthday")}next_day(){let a=this.rule.freq=="DAILY";return this.next_hour()==0||(a?this.increment_monthday(this.rule.interval):this.increment_monthday(1)),0}next_week(){let a=0;if(this.next_weekday_by_week()==0)return a;if(this.has_by_data("BYWEEKNO")){this.by_indices.BYWEEKNO++,this.by_indices.BYWEEKNO==this.by_data.BYWEEKNO.length&&(this.by_indices.BYWEEKNO=0,a=1),this.last.month=1,this.last.day=1;let i=this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];this.last.day+=7*i,a&&this.increment_year(1)}else this.increment_monthday(7*this.rule.interval);return a}normalizeByMonthDayRules(a,i,n){let o=K.daysInMonth(i,a),s=[],l=0,_=n.length,r;for(;l<_;l++){if(r=parseInt(n[l],10),isNaN(r))throw new Error("Invalid BYMONTHDAY value");if(!(Math.abs(r)>o)){if(r<0)r=o+(r+1);else if(r===0)continue;s.indexOf(r)===-1&&s.push(r)}}return s.sort(function(f,d){return f-d})}_byDayAndMonthDay(a){let i,n=this.by_data.BYDAY,o,s=0,l,_=n.length,r=0,f,d=this,g=this.last.day;function h(){for(f=K.daysInMonth(d.last.month,d.last.year),i=d.normalizeByMonthDayRules(d.last.year,d.last.month,d.by_data.BYMONTHDAY),l=i.length;i[s]<=g&&!(a&&i[s]==g)&&s<l-1;)s++}function F(){g=0,d.increment_month(),s=0,h()}h(),a&&(g-=1);let m=48;for(;!r&&m;){if(m--,o=g+1,o>f){F();continue}let p=i[s++];if(p>=o)g=p;else{F();continue}for(let T=0;T<_;T++){let k=this.ruleDayOfWeek(n[T]),w=k[0],S=k[1];if(this.last.day=g,this.last.isNthWeekDay(S,w)){r=1;break}}if(!r&&s===l){F();continue}}if(m<=0)throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");return r}next_month(){let a=1;if(this.next_hour()==0)return a;if(this.has_by_data("BYDAY")&&this.has_by_data("BYMONTHDAY"))a=this._byDayAndMonthDay();else if(this.has_by_data("BYDAY")){let i=K.daysInMonth(this.last.month,this.last.year),n=0,o=0;if(this.has_by_data("BYSETPOS")){let l=this.last.day;for(let _=1;_<=i;_++)this.last.day=_,this.is_day_in_byday(this.last)&&(o++,_<=l&&n++);this.last.day=l}a=0;let s;for(s=this.last.day+1;s<=i;s++)if(this.last.day=s,this.is_day_in_byday(this.last)&&(!this.has_by_data("BYSETPOS")||this.check_set_position(++n)||this.check_set_position(n-o-1))){a=1;break}s>i&&(this.last.day=1,this.increment_month(),this.is_day_in_byday(this.last)?(!this.has_by_data("BYSETPOS")||this.check_set_position(1))&&(a=1):a=0)}else if(this.has_by_data("BYMONTHDAY")){if(this.by_indices.BYMONTHDAY++,this.by_indices.BYMONTHDAY>=this.by_data.BYMONTHDAY.length&&(this.by_indices.BYMONTHDAY=0,this.increment_month(),this.by_indices.BYMONTHDAY>=this.by_data.BYMONTHDAY.length))return 0;let i=K.daysInMonth(this.last.month,this.last.year),n=this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];n<0&&(n=i+n+1),n>i?(this.last.day=1,a=this.is_day_in_byday(this.last)):this.last.day=n}else{this.increment_month();let i=K.daysInMonth(this.last.month,this.last.year);this.by_data.BYMONTHDAY[0]>i?a=0:this.last.day=this.by_data.BYMONTHDAY[0]}return a}next_weekday_by_week(){let a=0;if(this.next_hour()==0)return a;if(!this.has_by_data("BYDAY"))return 1;for(;;){let i=new K;this.by_indices.BYDAY++,this.by_indices.BYDAY==Object.keys(this.by_data.BYDAY).length&&(this.by_indices.BYDAY=0,a=1);let n=this.by_data.BYDAY[this.by_indices.BYDAY],o=this.ruleDayOfWeek(n)[1];o-=this.rule.wkst,o<0&&(o+=7),i.year=this.last.year,i.month=this.last.month,i.day=this.last.day;let s=i.startDoyWeek(this.rule.wkst);if(o+s<1&&!a)continue;let l=K.fromDayOfYear(s+o,this.last.year);return this.last.year=l.year,this.last.month=l.month,this.last.day=l.day,a}}next_year(){if(this.next_hour()==0)return 0;if(++this.days_index==this.days.length){this.days_index=0;do this.increment_year(this.rule.interval),this.has_by_data("BYMONTHDAY")&&(this.by_data.BYMONTHDAY=this.normalizeByMonthDayRules(this.last.year,this.last.month,this.rule.parts.BYMONTHDAY)),this.expand_year_days(this.last.year);while(this.days.length==0)}return this._nextByYearDay(),1}_nextByYearDay(){let a=this.days[this.days_index],i=this.last.year;a<1&&(a+=1,i+=1);let n=K.fromDayOfYear(a,i);this.last.day=n.day,this.last.month=n.month}ruleDayOfWeek(a,i){let n=a.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);if(n){let o=parseInt(n[1]||0,10);return a=He.icalDayToNumericDay(n[2],i),[o,a]}else return[0,0]}next_generic(a,i,n,o,s){let l=a in this.by_data,_=this.rule.freq==i,r=0;if(s&&this[s]()==0)return r;if(l){this.by_indices[a]++;let f=this.by_data[a];this.by_indices[a]==f.length&&(this.by_indices[a]=0,r=1),this.last[n]=f[this.by_indices[a]]}else _&&this["increment_"+n](this.rule.interval);return l&&r&&_&&this["increment_"+o](1),r}increment_monthday(a){for(let i=0;i<a;i++){let n=K.daysInMonth(this.last.month,this.last.year);this.last.day++,this.last.day>n&&(this.last.day-=n,this.increment_month())}}increment_month(){if(this.last.day=1,this.has_by_data("BYMONTH"))this.by_indices.BYMONTH++,this.by_indices.BYMONTH==this.by_data.BYMONTH.length&&(this.by_indices.BYMONTH=0,this.increment_year(1)),this.last.month=this.by_data.BYMONTH[this.by_indices.BYMONTH];else{this.rule.freq=="MONTHLY"?this.last.month+=this.rule.interval:this.last.month++,this.last.month--;let a=xe(this.last.month/12);this.last.month%=12,this.last.month++,a!=0&&this.increment_year(a)}this.has_by_data("BYMONTHDAY")&&(this.by_data.BYMONTHDAY=this.normalizeByMonthDayRules(this.last.year,this.last.month,this.rule.parts.BYMONTHDAY))}increment_year(a){this.last.day=1,this.last.year+=a}increment_generic(a,i,n,o){this.last[i]+=a;let s=xe(this.last[i]/n);this.last[i]%=n,s!=0&&this["increment_"+o](s)}has_by_data(a){return a in this.rule.parts}expand_year_days(a){let i=new K;this.days=[];let n={},o=["BYDAY","BYWEEKNO","BYMONTHDAY","BYMONTH","BYYEARDAY"];for(let _ of o)_ in this.rule.parts&&(n[_]=this.rule.parts[_]);if("BYMONTH"in n&&"BYWEEKNO"in n){let _=1,r={};i.year=a,i.isDate=!0;for(let f=0;f<this.by_data.BYMONTH.length;f++){let d=this.by_data.BYMONTH[f];i.month=d,i.day=1;let g=i.weekNumber(this.rule.wkst);i.day=K.daysInMonth(d,a);let h=i.weekNumber(this.rule.wkst);for(f=g;f<h;f++)r[f]=1}for(let f=0;f<this.by_data.BYWEEKNO.length&&_;f++)this.by_data.BYWEEKNO[f]<52?_&=r[f]:_=0;_?delete n.BYMONTH:delete n.BYWEEKNO}let s=Object.keys(n).length;if(s==0){let _=this.dtstart.clone();_.year=this.last.year,this.days.push(_.dayOfYear())}else if(s==1&&"BYMONTH"in n)for(let _ of this.by_data.BYMONTH){let r=this.dtstart.clone();r.year=a,r.month=_,r.isDate=!0,this.days.push(r.dayOfYear())}else if(s==1&&"BYMONTHDAY"in n)for(let _ of this.by_data.BYMONTHDAY){let r=this.dtstart.clone();if(_<0){let f=K.daysInMonth(r.month,a);_=_+f+1}r.day=_,r.year=a,r.isDate=!0,this.days.push(r.dayOfYear())}else if(s==2&&"BYMONTHDAY"in n&&"BYMONTH"in n)for(let _ of this.by_data.BYMONTH){let r=K.daysInMonth(_,a);for(let f of this.by_data.BYMONTHDAY)f<0&&(f=f+r+1),i.day=f,i.month=_,i.year=a,i.isDate=!0,this.days.push(i.dayOfYear())}else if(!(s==1&&"BYWEEKNO"in n)&&!(s==2&&"BYWEEKNO"in n&&"BYMONTHDAY"in n))if(s==1&&"BYDAY"in n)this.days=this.days.concat(this.expand_by_day(a));else if(s==2&&"BYDAY"in n&&"BYMONTH"in n){for(let _ of this.by_data.BYMONTH){let r=K.daysInMonth(_,a);i.year=a,i.month=_,i.day=1,i.isDate=!0;let f=i.dayOfWeek(),d=i.dayOfYear()-1;i.day=r;let g=i.dayOfWeek();if(this.has_by_data("BYSETPOS")){let h=[];for(let F=1;F<=r;F++)i.day=F,this.is_day_in_byday(i)&&h.push(F);for(let F=0;F<h.length;F++)(this.check_set_position(F+1)||this.check_set_position(F-h.length))&&this.days.push(d+h[F])}else for(let h of this.by_data.BYDAY){let F=this.ruleDayOfWeek(h),m=F[0],p=F[1],T,k=(p+7-f)%7+1,w=r-(g+7-p)%7;if(m==0)for(let S=k;S<=r;S+=7)this.days.push(d+S);else m>0?(T=k+(m-1)*7,T<=r&&this.days.push(d+T)):(T=w+(m+1)*7,T>0&&this.days.push(d+T))}}this.days.sort(function(_,r){return _-r})}else if(s==2&&"BYDAY"in n&&"BYMONTHDAY"in n){let _=this.expand_by_day(a);for(let r of _){let f=K.fromDayOfYear(r,a);this.by_data.BYMONTHDAY.indexOf(f.day)>=0&&this.days.push(r)}}else if(s==3&&"BYDAY"in n&&"BYMONTHDAY"in n&&"BYMONTH"in n){let _=this.expand_by_day(a);for(let r of _){let f=K.fromDayOfYear(r,a);this.by_data.BYMONTH.indexOf(f.month)>=0&&this.by_data.BYMONTHDAY.indexOf(f.day)>=0&&this.days.push(r)}}else if(s==2&&"BYDAY"in n&&"BYWEEKNO"in n){let _=this.expand_by_day(a);for(let r of _){let f=K.fromDayOfYear(r,a).weekNumber(this.rule.wkst);this.by_data.BYWEEKNO.indexOf(f)&&this.days.push(r)}}else s==3&&"BYDAY"in n&&"BYWEEKNO"in n&&"BYMONTHDAY"in n||(s==1&&"BYYEARDAY"in n?this.days=this.days.concat(this.by_data.BYYEARDAY):this.days=[]);let l=K.isLeapYear(a)?366:365;return this.days.sort((_,r)=>(_<0&&(_+=l+1),r<0&&(r+=l+1),_-r)),0}expand_by_day(a){let i=[],n=this.last.clone();n.year=a,n.month=1,n.day=1,n.isDate=!0;let o=n.dayOfWeek();n.month=12,n.day=31,n.isDate=!0;let s=n.dayOfWeek(),l=n.dayOfYear();for(let _ of this.by_data.BYDAY){let r=this.ruleDayOfWeek(_),f=r[0],d=r[1];if(f==0){let g=(d+7-o)%7+1;for(let h=g;h<=l;h+=7)i.push(h)}else if(f>0){let g;d>=o?g=d-o+1:g=d-o+8,i.push(g+(f-1)*7)}else{let g;f=-f,d<=s?g=l-s+d:g=l-s+d-7,i.push(g-(f-1)*7)}}return i}is_day_in_byday(a){if(this.by_data.BYDAY)for(let i of this.by_data.BYDAY){let n=this.ruleDayOfWeek(i),o=n[0],s=n[1],l=a.dayOfWeek();if(o==0&&s==l||a.nthWeekDay(s,o)==a.day)return 1}return 0}check_set_position(a){return this.has_by_data("BYSETPOS")?this.by_data.BYSETPOS.indexOf(a)!==-1:!1}sort_byday_rules(a){for(let i=0;i<a.length;i++)for(let n=0;n<i;n++){let o=this.ruleDayOfWeek(a[n],this.rule.wkst)[1],s=this.ruleDayOfWeek(a[i],this.rule.wkst)[1];if(o>s){let l=a[i];a[i]=a[n],a[n]=l}}}check_contract_restriction(a,i){let n=ua._indexMap[a],o=ua._expandMap[this.rule.freq][n],s=!1;if(a in this.by_data&&o==ua.CONTRACT){let l=this.by_data[a];for(let _ of l)if(_==i){s=!0;break}}else s=!0;return s}check_contracting_rules(){let a=this.last.dayOfWeek(),i=this.last.weekNumber(this.rule.wkst),n=this.last.dayOfYear();return this.check_contract_restriction("BYSECOND",this.last.second)&&this.check_contract_restriction("BYMINUTE",this.last.minute)&&this.check_contract_restriction("BYHOUR",this.last.hour)&&this.check_contract_restriction("BYDAY",He.numericDayToIcalDay(a))&&this.check_contract_restriction("BYWEEKNO",i)&&this.check_contract_restriction("BYMONTHDAY",this.last.day)&&this.check_contract_restriction("BYMONTH",this.last.month)&&this.check_contract_restriction("BYYEARDAY",n)}setup_defaults(a,i,n){let o=ua._indexMap[a];return ua._expandMap[this.rule.freq][o]!=ua.CONTRACT&&(a in this.by_data||(this.by_data[a]=[n]),this.rule.freq!=i)?this.by_data[a][0]:n}toJSON(){let a=Object.create(null);return a.initialized=this.initialized,a.rule=this.rule.toJSON(),a.dtstart=this.dtstart.toJSON(),a.by_data=this.by_data,a.days=this.days,a.last=this.last.toJSON(),a.by_indices=this.by_indices,a.occurrence_number=this.occurrence_number,a}}class Ro extends Error{constructor(){super("Recurrence rule has no valid occurrences")}}const H_=/^(SU|MO|TU|WE|TH|FR|SA)$/,P_=/^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/,br={SU:K.SUNDAY,MO:K.MONDAY,TU:K.TUESDAY,WE:K.WEDNESDAY,TH:K.THURSDAY,FR:K.FRIDAY,SA:K.SATURDAY},G_=Object.fromEntries(Object.entries(br).map(e=>e.reverse())),Co=["SECONDLY","MINUTELY","HOURLY","DAILY","WEEKLY","MONTHLY","YEARLY"];class He{static fromString(a){let i=this._stringToData(a,!1);return new He(i)}static fromData(a){return new He(a)}static _stringToData(a,i){let n=Object.create(null),o=a.split(";"),s=o.length;for(let l=0;l<s;l++){let _=o[l].split("="),r=_[0].toUpperCase(),f=_[0].toLowerCase(),d=i?f:r,g=_[1];if(r in Q0){let h=g.split(","),F=new Set;for(let m of h)F.add(Q0[r](m));h=[...F],n[d]=h.length==1?h[0]:h}else r in $0?$0[r](g,n,i):n[f]=g}return n}static icalDayToNumericDay(a,i){let n=i||K.SUNDAY;return(br[a]-n+7)%7+1}static numericDayToIcalDay(a,i){let n=i||K.SUNDAY,o=a+n-K.SUNDAY;return o>7&&(o-=7),G_[o]}constructor(a){this.wrappedJSObject=this,this.parts={},a&&typeof a=="object"&&this.fromData(a)}parts=null;interval=1;wkst=K.MONDAY;until=null;count=null;freq=null;icalclass="icalrecur";icaltype="recur";iterator(a){return new ua({rule:this,dtstart:a})}clone(){return new He(this.toJSON())}isFinite(){return!!(this.count||this.until)}isByCount(){return!!(this.count&&!this.until)}addComponent(a,i){let n=a.toUpperCase();n in this.parts?this.parts[n].push(i):this.parts[n]=[i]}setComponent(a,i){this.parts[a.toUpperCase()]=i.slice()}getComponent(a){let i=a.toUpperCase();return i in this.parts?this.parts[i].slice():[]}getNextOccurrence(a,i){let n=this.iterator(a),o;do o=n.next();while(o&&o.compare(i)<=0);return o&&i.zone&&(o.zone=i.zone),o}fromData(a){for(let i in a){let n=i.toUpperCase();n in Q0?Array.isArray(a[i])?this.parts[n]=a[i]:this.parts[n]=[a[i]]:this[i]=a[i]}this.interval&&typeof this.interval!="number"&&$0.INTERVAL(this.interval,this),this.wkst&&typeof this.wkst!="number"&&(this.wkst=He.icalDayToNumericDay(this.wkst)),this.until&&!(this.until instanceof K)&&(this.until=K.fromString(this.until))}toJSON(){let a=Object.create(null);a.freq=this.freq,this.count&&(a.count=this.count),this.interval>1&&(a.interval=this.interval);for(let[i,n]of Object.entries(this.parts))Array.isArray(n)&&n.length==1?a[i.toLowerCase()]=n[0]:a[i.toLowerCase()]=ft(n);return this.until&&(a.until=this.until.toString()),"wkst"in this&&this.wkst!==K.DEFAULT_WEEK_START&&(a.wkst=He.numericDayToIcalDay(this.wkst)),a}toString(){let a="FREQ="+this.freq;this.count&&(a+=";COUNT="+this.count),this.interval>1&&(a+=";INTERVAL="+this.interval);for(let[i,n]of Object.entries(this.parts))a+=";"+i+"="+n;return this.until&&(a+=";UNTIL="+this.until.toICALString()),"wkst"in this&&this.wkst!==K.DEFAULT_WEEK_START&&(a+=";WKST="+He.numericDayToIcalDay(this.wkst)),a}}function va(e,a,i,n){let o=n;if(n[0]==="+"&&(o=n.slice(1)),o=Ie(o),a!==void 0&&n<a)throw new Error(e+': invalid value "'+n+'" must be > '+a);if(i!==void 0&&n>i)throw new Error(e+': invalid value "'+n+'" must be < '+a);return o}const $0={FREQ:function(e,a,i){if(Co.indexOf(e)!==-1)a.freq=e;else throw new Error('invalid frequency "'+e+'" expected: "'+Co.join(", ")+'"')},COUNT:function(e,a,i){a.count=Ie(e)},INTERVAL:function(e,a,i){a.interval=Ie(e),a.interval<1&&(a.interval=1)},UNTIL:function(e,a,i){e.length>10?a.until=Me.icalendar.value["date-time"].fromICAL(e):a.until=Me.icalendar.value.date.fromICAL(e),i||(a.until=K.fromString(a.until))},WKST:function(e,a,i){if(H_.test(e))a.wkst=He.icalDayToNumericDay(e);else throw new Error('invalid WKST value "'+e+'"')}},Q0={BYSECOND:va.bind(void 0,"BYSECOND",0,60),BYMINUTE:va.bind(void 0,"BYMINUTE",0,59),BYHOUR:va.bind(void 0,"BYHOUR",0,23),BYDAY:function(e){if(P_.test(e))return e;throw new Error('invalid BYDAY value "'+e+'"')},BYMONTHDAY:va.bind(void 0,"BYMONTHDAY",-31,31),BYYEARDAY:va.bind(void 0,"BYYEARDAY",-366,366),BYWEEKNO:va.bind(void 0,"BYWEEKNO",-53,53),BYMONTH:va.bind(void 0,"BYMONTH",1,12),BYSETPOS:va.bind(void 0,"BYSETPOS",-366,366)};class ja{static fromString(a,i){let n=a.split("/");if(n.length!==2)throw new Error('Invalid string value: "'+a+'" must contain a "/" char.');let o={start:K.fromDateTimeString(n[0],i)},s=n[1];return Pe.isValueString(s)?o.duration=Pe.fromString(s):o.end=K.fromDateTimeString(s,i),new ja(o)}static fromData(a){return new ja(a)}static fromJSON(a,i,n){function o(s,l){return n?K.fromString(s,l):K.fromDateTimeString(s,l)}return Pe.isValueString(a[1])?ja.fromData({start:o(a[0],i),duration:Pe.fromString(a[1])}):ja.fromData({start:o(a[0],i),end:o(a[1],i)})}constructor(a){if(this.wrappedJSObject=this,a&&"start"in a){if(a.start&&!(a.start instanceof K))throw new TypeError(".start must be an instance of ICAL.Time");this.start=a.start}if(a&&a.end&&a.duration)throw new Error("cannot accept both end and duration");if(a&&"end"in a){if(a.end&&!(a.end instanceof K))throw new TypeError(".end must be an instance of ICAL.Time");this.end=a.end}if(a&&"duration"in a){if(a.duration&&!(a.duration instanceof Pe))throw new TypeError(".duration must be an instance of ICAL.Duration");this.duration=a.duration}}start=null;end=null;duration=null;icalclass="icalperiod";icaltype="period";clone(){return ja.fromData({start:this.start?this.start.clone():null,end:this.end?this.end.clone():null,duration:this.duration?this.duration.clone():null})}getDuration(){return this.duration?this.duration:this.end.subtractDate(this.start)}getEnd(){if(this.end)return this.end;{let a=this.start.clone();return a.addDuration(this.duration),a}}toString(){return this.start+"/"+(this.end||this.duration)}toJSON(){return[this.start.toString(),(this.end||this.duration).toString()]}toICALString(){return this.start.toICALString()+"/"+(this.end||this.duration).toICALString()}}const U_=/\\\\|\\;|\\,|\\[Nn]/g,z_=/\\|;|,|\n/g,Bo=/\\\\|\\,|\\[Nn]/g,Oo=/\\|,|\n/g;function mn(e,a){return{matches:/.*/,fromICAL:function(i,n){return W_(i,e,n)},toICAL:function(i,n){let o=a;return n&&(o=new RegExp(o.source+"|"+n,o.flags)),i.replace(o,function(s){switch(s){case"\\":return"\\\\";case";":return"\\;";case",":return"\\,";case`
`:return"\\n";default:return s}})}}}const de={defaultType:"text"},ai={defaultType:"text",multiValue:","},Hi={defaultType:"text",structuredValue:";"},hi={defaultType:"integer"},Fi={defaultType:"date-time",allowedTypes:["date-time","date"]},ui={defaultType:"date-time"},$e={defaultType:"uri"},No={defaultType:"utc-offset"},xo={defaultType:"recur"},Mo={defaultType:"date-and-or-time",allowedTypes:["date-time","date","text"]};function V_(e){switch(e){case"\\\\":return"\\";case"\\;":return";";case"\\,":return",";case"\\n":case"\\N":return`
`;default:return e}}function W_(e,a,i){return e.indexOf("\\")===-1?e:(i&&(a=new RegExp(a.source+"|\\\\"+i,a.flags)),e.replace(a,V_))}let Qn={categories:ai,url:$e,version:de,uid:de},Kn={boolean:{values:["TRUE","FALSE"],fromICAL:function(e){switch(e){case"TRUE":return!0;case"FALSE":return!1;default:return!1}},toICAL:function(e){return e?"TRUE":"FALSE"}},float:{matches:/^[+-]?\d+\.\d+$/,fromICAL:function(e){let a=parseFloat(e);return ei(a)?0:a},toICAL:function(e){return String(e)}},integer:{fromICAL:function(e){let a=parseInt(e);return ei(a)?0:a},toICAL:function(e){return String(e)}},"utc-offset":{toICAL:function(e){return e.length<7?e.slice(0,3)+e.slice(4,6):e.slice(0,3)+e.slice(4,6)+e.slice(7,9)},fromICAL:function(e){return e.length<6?e.slice(0,3)+":"+e.slice(3,5):e.slice(0,3)+":"+e.slice(3,5)+":"+e.slice(5,7)},decorate:function(e){return la.fromString(e)},undecorate:function(e){return e.toString()}}},$_={cutype:{values:["INDIVIDUAL","GROUP","RESOURCE","ROOM","UNKNOWN"],allowXName:!0,allowIanaToken:!0},"delegated-from":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},"delegated-to":{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},encoding:{values:["8BIT","BASE64"]},fbtype:{values:["FREE","BUSY","BUSY-UNAVAILABLE","BUSY-TENTATIVE"],allowXName:!0,allowIanaToken:!0},member:{valueType:"cal-address",multiValue:",",multiValueSeparateDQuote:!0},partstat:{values:["NEEDS-ACTION","ACCEPTED","DECLINED","TENTATIVE","DELEGATED","COMPLETED","IN-PROCESS"],allowXName:!0,allowIanaToken:!0},range:{values:["THISANDFUTURE"]},related:{values:["START","END"]},reltype:{values:["PARENT","CHILD","SIBLING"],allowXName:!0,allowIanaToken:!0},role:{values:["REQ-PARTICIPANT","CHAIR","OPT-PARTICIPANT","NON-PARTICIPANT"],allowXName:!0,allowIanaToken:!0},rsvp:{values:["TRUE","FALSE"]},"sent-by":{valueType:"cal-address"},tzid:{matches:/^\//},value:{values:["binary","boolean","cal-address","date","date-time","duration","float","integer","period","recur","text","time","uri","utc-offset"],allowXName:!0,allowIanaToken:!0}};const qe=Ft(Kn,{text:mn(U_,z_),uri:{},binary:{decorate:function(e){return B0.fromString(e)},undecorate:function(e){return e.toString()}},"cal-address":{},date:{decorate:function(e,a){return K.fromDateString(e,a)},undecorate:function(e){return e.toString()},fromICAL:function(e){return e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)},toICAL:function(e){let a=e.length;return a==10?e.slice(0,4)+e.slice(5,7)+e.slice(8,10):a>=19?qe["date-time"].toICAL(e):e}},"date-time":{fromICAL:function(e){{let a=e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6,8)+"T"+e.slice(9,11)+":"+e.slice(11,13)+":"+e.slice(13,15);return e[15]&&e[15]==="Z"&&(a+="Z"),a}},toICAL:function(e){let a=e.length;if(a==10&&!At.strict)return qe.date.toICAL(e);if(a>=19){let i=e.slice(0,4)+e.slice(5,7)+e.slice(8,13)+e.slice(14,16)+e.slice(17,19);return e[19]&&e[19]==="Z"&&(i+="Z"),i}else return e},decorate:function(e,a){return K.fromDateTimeString(e,a)},undecorate:function(e){return e.toString()}},duration:{decorate:function(e){return Pe.fromString(e)},undecorate:function(e){return e.toString()}},period:{fromICAL:function(e){let a=e.split("/");return a[0]=qe["date-time"].fromICAL(a[0]),Pe.isValueString(a[1])||(a[1]=qe["date-time"].fromICAL(a[1])),a},toICAL:function(e){return e=e.slice(),e[0]=qe["date-time"].toICAL(e[0]),Pe.isValueString(e[1])||(e[1]=qe["date-time"].toICAL(e[1])),e.join("/")},decorate:function(e,a){return ja.fromJSON(e,a,!At.strict)},undecorate:function(e){return e.toJSON()}},recur:{fromICAL:function(e){return He._stringToData(e,!0)},toICAL:function(e){let a="";for(let[i,n]of Object.entries(e))i=="until"?n.length>10?n=qe["date-time"].toICAL(n):n=qe.date.toICAL(n):i=="wkst"?typeof n=="number"&&(n=He.numericDayToIcalDay(n)):Array.isArray(n)&&(n=n.join(",")),a+=i.toUpperCase()+"="+n+";";return a.slice(0,Math.max(0,a.length-1))},decorate:function(e){return He.fromData(e)},undecorate:function(e){return e.toJSON()}},time:{fromICAL:function(e){if(e.length<6)return e;let a=e.slice(0,2)+":"+e.slice(2,4)+":"+e.slice(4,6);return e[6]==="Z"&&(a+="Z"),a},toICAL:function(e){if(e.length<8)return e;let a=e.slice(0,2)+e.slice(3,5)+e.slice(6,8);return e[8]==="Z"&&(a+="Z"),a}}});let Q_=Ft(Qn,{action:de,attach:{defaultType:"uri"},attendee:{defaultType:"cal-address"},calscale:de,class:de,comment:de,completed:ui,contact:de,created:ui,description:de,dtend:Fi,dtstamp:ui,dtstart:Fi,due:Fi,duration:{defaultType:"duration"},exdate:{defaultType:"date-time",allowedTypes:["date-time","date"],multiValue:","},exrule:xo,freebusy:{defaultType:"period",multiValue:","},geo:{defaultType:"float",structuredValue:";"},"last-modified":ui,location:de,method:de,organizer:{defaultType:"cal-address"},"percent-complete":hi,priority:hi,prodid:de,"related-to":de,repeat:hi,rdate:{defaultType:"date-time",allowedTypes:["date-time","date","period"],multiValue:",",detectType:function(e){return e.indexOf("/")!==-1?"period":e.indexOf("T")===-1?"date":"date-time"}},"recurrence-id":Fi,resources:ai,"request-status":Hi,rrule:xo,sequence:hi,status:de,summary:de,transp:de,trigger:{defaultType:"duration",allowedTypes:["duration","date-time"]},tzoffsetfrom:No,tzoffsetto:No,tzurl:$e,tzid:de,tzname:de});const na=Ft(Kn,{text:mn(Bo,Oo),uri:mn(Bo,Oo),date:{decorate:function(e){return La.fromDateAndOrTimeString(e,"date")},undecorate:function(e){return e.toString()},fromICAL:function(e){return e.length==8?qe.date.fromICAL(e):e[0]=="-"&&e.length==6?e.slice(0,4)+"-"+e.slice(4):e},toICAL:function(e){return e.length==10?qe.date.toICAL(e):e[0]=="-"&&e.length==7?e.slice(0,4)+e.slice(5):e}},time:{decorate:function(e){return La.fromDateAndOrTimeString("T"+e,"time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=na.time._splitZone(e,!0),i=a[0],n=a[1];return n.length==6?n=n.slice(0,2)+":"+n.slice(2,4)+":"+n.slice(4,6):n.length==4&&n[0]!="-"?n=n.slice(0,2)+":"+n.slice(2,4):n.length==5&&(n=n.slice(0,3)+":"+n.slice(3,5)),i.length==5&&(i[0]=="-"||i[0]=="+")&&(i=i.slice(0,3)+":"+i.slice(3)),n+i},toICAL:function(e){let a=na.time._splitZone(e),i=a[0],n=a[1];return n.length==8?n=n.slice(0,2)+n.slice(3,5)+n.slice(6,8):n.length==5&&n[0]!="-"?n=n.slice(0,2)+n.slice(3,5):n.length==6&&(n=n.slice(0,3)+n.slice(4,6)),i.length==6&&(i[0]=="-"||i[0]=="+")&&(i=i.slice(0,3)+i.slice(4)),n+i},_splitZone:function(e,a){let i=e.length-1,n=e.length-(a?5:6),o=e[n],s,l;return e[i]=="Z"?(s=e[i],l=e.slice(0,Math.max(0,i))):e.length>6&&(o=="-"||o=="+")?(s=e.slice(n),l=e.slice(0,Math.max(0,n))):(s="",l=e),[s,l]}},"date-time":{decorate:function(e){return La.fromDateAndOrTimeString(e,"date-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){return na["date-and-or-time"].fromICAL(e)},toICAL:function(e){return na["date-and-or-time"].toICAL(e)}},"date-and-or-time":{decorate:function(e){return La.fromDateAndOrTimeString(e,"date-and-or-time")},undecorate:function(e){return e.toString()},fromICAL:function(e){let a=e.split("T");return(a[0]?na.date.fromICAL(a[0]):"")+(a[1]?"T"+na.time.fromICAL(a[1]):"")},toICAL:function(e){let a=e.split("T");return na.date.toICAL(a[0])+(a[1]?"T"+na.time.toICAL(a[1]):"")}},timestamp:qe["date-time"],"language-tag":{matches:/^[a-zA-Z0-9-]+$/},"phone-number":{fromICAL:function(e){return Array.from(e).filter(function(a){return a==="\\"?void 0:a}).join("")},toICAL:function(e){return Array.from(e).map(function(a){return a===","||a===";"?"\\"+a:a}).join("")}}});let K_={type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","time","date-time","date-and-or-time","timestamp","boolean","integer","float","utc-offset","language-tag"],allowXName:!0,allowIanaToken:!0}},J_=Ft(Qn,{adr:{defaultType:"text",structuredValue:";",multiValue:","},anniversary:Mo,bday:Mo,caladruri:$e,caluri:$e,clientpidmap:Hi,email:de,fburl:$e,fn:de,gender:Hi,geo:$e,impp:$e,key:$e,kind:de,lang:{defaultType:"language-tag"},logo:$e,member:$e,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:ai,note:de,org:{defaultType:"text",structuredValue:";"},photo:$e,related:$e,rev:{defaultType:"timestamp"},role:de,sound:$e,source:$e,tel:{defaultType:"uri",allowedTypes:["uri","text"]},title:de,tz:{defaultType:"text",allowedTypes:["text","utc-offset","uri"]},xml:de}),X_=Ft(Kn,{binary:qe.binary,date:na.date,"date-time":na["date-time"],"phone-number":na["phone-number"],uri:qe.uri,text:qe.text,time:qe.time,vcard:qe.text,"utc-offset":{toICAL:function(e){return e.slice(0,7)},fromICAL:function(e){return e.slice(0,7)},decorate:function(e){return la.fromString(e)},undecorate:function(e){return e.toString()}}}),ed={type:{valueType:"text",multiValue:","},value:{values:["text","uri","date","date-time","phone-number","time","boolean","integer","float","utc-offset","vcard","binary"],allowXName:!0,allowIanaToken:!0}},ad=Ft(Qn,{fn:de,n:{defaultType:"text",structuredValue:";",multiValue:","},nickname:ai,photo:{defaultType:"binary",allowedTypes:["binary","uri"]},bday:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},adr:{defaultType:"text",structuredValue:";",multiValue:","},label:de,tel:{defaultType:"phone-number"},email:de,mailer:de,tz:{defaultType:"utc-offset",allowedTypes:["utc-offset","text"]},geo:{defaultType:"float",structuredValue:";"},title:de,role:de,logo:{defaultType:"binary",allowedTypes:["binary","uri"]},agent:{defaultType:"vcard",allowedTypes:["vcard","text","uri"]},org:Hi,note:ai,prodid:de,rev:{defaultType:"date-time",allowedTypes:["date-time","date"],detectType:function(e){return e.indexOf("T")===-1?"date":"date-time"}},"sort-string":de,sound:{defaultType:"binary",allowedTypes:["binary","uri"]},class:de,key:{defaultType:"binary",allowedTypes:["binary","text"]}}),Da={value:qe,param:$_,property:Q_,propertyGroups:!1},jo={value:na,param:K_,property:J_,propertyGroups:!0},Yo={value:X_,param:ed,property:ad,propertyGroups:!0};const At={strict:!0,defaultSet:Da,defaultType:"unknown",components:{vcard:jo,vcard3:Yo,vevent:Da,vtodo:Da,vjournal:Da,valarm:Da,vtimezone:Da,daylight:Da,standard:Da},icalendar:Da,vcard:jo,vcard3:Yo,getDesignSet:function(e){return e&&e in At.components?At.components[e]:At.defaultSet}};var Me=At;const Ci=`\r
`,qo="unknown",td={'"':"^'","\n":"^n","^":"^^"};function Ae(e){typeof e[0]=="string"&&(e=[e]);let a=0,i=e.length,n="";for(;a<i;a++)n+=Ae.component(e[a])+Ci;return n}Ae.component=function(e,a){let i=e[0].toUpperCase(),n="BEGIN:"+i+Ci,o=e[1],s=0,l=o.length,_=e[0];for(_==="vcard"&&e[1].length>0&&!(e[1][0][0]==="version"&&e[1][0][3]==="4.0")&&(_="vcard3"),a=a||Me.getDesignSet(_);s<l;s++)n+=Ae.property(o[s],a)+Ci;let r=e[2]||[],f=0,d=r.length;for(;f<d;f++)n+=Ae.component(r[f],a)+Ci;return n+="END:"+i,n},Ae.property=function(e,a,i){let n=e[0].toUpperCase(),o=e[0],s=e[1];a||(a=Me.defaultSet);let l=s.group,_;a.propertyGroups&&l?_=l.toUpperCase()+"."+n:_=n;for(let[F,m]of Object.entries(s)){if(a.propertyGroups&&F=="group")continue;let p=a.param[F],T=p&&p.multiValue;T&&Array.isArray(m)?(m=m.map(function(k){return k=Ae._rfc6868Unescape(k),k=Ae.paramPropertyValue(k,p.multiValueSeparateDQuote),k}),m=Ae.multiValue(m,T,"unknown",null,a)):(m=Ae._rfc6868Unescape(m),m=Ae.paramPropertyValue(m)),_+=";"+F.toUpperCase()+"="+m}if(e.length===3)return _+":";let r=e[2],f,d=!1,g=!1,h=!1;return o in a.property?(f=a.property[o],"multiValue"in f&&(d=f.multiValue),"structuredValue"in f&&Array.isArray(e[3])&&(g=f.structuredValue),"defaultType"in f?r===f.defaultType&&(h=!0):r===qo&&(h=!0)):r===qo&&(h=!0),h||(_+=";VALUE="+r.toUpperCase()),_+=":",d&&g?_+=Ae.multiValue(e[3],g,r,d,a,g):d?_+=Ae.multiValue(e.slice(3),d,r,null,a,!1):g?_+=Ae.multiValue(e[3],g,r,null,a,g):_+=Ae.value(e[3],r,a,!1),i?_:pr(_)},Ae.paramPropertyValue=function(e,a){return!a&&e.indexOf(",")===-1&&e.indexOf(":")===-1&&e.indexOf(";")===-1?e:'"'+e+'"'},Ae.multiValue=function(e,a,i,n,o,s){let l="",_=e.length,r=0;for(;r<_;r++)n&&Array.isArray(e[r])?l+=Ae.multiValue(e[r],n,i,null,o,s):l+=Ae.value(e[r],i,o,s),r!==_-1&&(l+=a);return l},Ae.value=function(e,a,i,n){return a in i.value&&"toICAL"in i.value[a]?i.value[a].toICAL(e,n):e},Ae._rfc6868Unescape=function(e){return e.replace(/[\n^"]/g,function(a){return td[a]})};const Lo=0,ci=1,mi=2,Sa=3;class rt{static fromString(a,i){return new rt(he.property(a,i))}constructor(a,i){this._parent=i||null,typeof a=="string"?(this.jCal=[a,{},Me.defaultType],this.jCal[mi]=this.getDefaultType()):this.jCal=a,this._updateType()}get type(){return this.jCal[mi]}get name(){return this.jCal[Lo]}get parent(){return this._parent}set parent(a){let i=!this._parent||a&&a._designSet!=this._parent._designSet;this._parent=a,this.type==Me.defaultType&&i&&(this.jCal[mi]=this.getDefaultType(),this._updateType())}get _designSet(){return this.parent?this.parent._designSet:Me.defaultSet}_updateType(){let a=this._designSet;this.type in a.value&&("decorate"in a.value[this.type]?this.isDecorated=!0:this.isDecorated=!1,this.name in a.property&&(this.isMultiValue="multiValue"in a.property[this.name],this.isStructuredValue="structuredValue"in a.property[this.name]))}_hydrateValue(a){return this._values&&this._values[a]?this._values[a]:this.jCal.length<=Sa+a?null:this.isDecorated?(this._values||(this._values=[]),this._values[a]=this._decorate(this.jCal[Sa+a])):this.jCal[Sa+a]}_decorate(a){return this._designSet.value[this.type].decorate(a,this)}_undecorate(a){return this._designSet.value[this.type].undecorate(a,this)}_setDecoratedValue(a,i){this._values||(this._values=[]),typeof a=="object"&&"icaltype"in a?(this.jCal[Sa+i]=this._undecorate(a),this._values[i]=a):(this.jCal[Sa+i]=a,this._values[i]=this._decorate(a))}getParameter(a){if(a in this.jCal[ci])return this.jCal[ci][a]}getFirstParameter(a){let i=this.getParameter(a);return Array.isArray(i)?i[0]:i}setParameter(a,i){let n=a.toLowerCase();typeof i=="string"&&n in this._designSet.param&&"multiValue"in this._designSet.param[n]&&(i=[i]),this.jCal[ci][a]=i}removeParameter(a){delete this.jCal[ci][a]}getDefaultType(){let a=this.jCal[Lo],i=this._designSet;if(a in i.property){let n=i.property[a];if("defaultType"in n)return n.defaultType}return Me.defaultType}resetType(a){this.removeAllValues(),this.jCal[mi]=a,this._updateType()}getFirstValue(){return this._hydrateValue(0)}getValues(){let a=this.jCal.length-Sa;if(a<1)return[];let i=0,n=[];for(;i<a;i++)n[i]=this._hydrateValue(i);return n}removeAllValues(){this._values&&(this._values.length=0),this.jCal.length=3}setValues(a){if(!this.isMultiValue)throw new Error(this.name+`: does not not support mulitValue.
override isMultiValue`);let i=a.length,n=0;if(this.removeAllValues(),i>0&&typeof a[0]=="object"&&"icaltype"in a[0]&&this.resetType(a[0].icaltype),this.isDecorated)for(;n<i;n++)this._setDecoratedValue(a[n],n);else for(;n<i;n++)this.jCal[Sa+n]=a[n]}setValue(a){this.removeAllValues(),typeof a=="object"&&"icaltype"in a&&this.resetType(a.icaltype),this.isDecorated?this._setDecoratedValue(a,0):this.jCal[Sa]=a}toJSON(){return this.jCal}toICALString(){return Ae.property(this.jCal,this._designSet,!0)}}const Ra=0,Ta=1,Ca=2;class ea{static fromString(a){return new ea(he.component(a))}constructor(a,i){typeof a=="string"&&(a=[a,[],[]]),this.jCal=a,this.parent=i||null,!this.parent&&this.name==="vcalendar"&&(this._timezoneCache=new Map)}_hydratedPropertyCount=0;_hydratedComponentCount=0;_timezoneCache=null;_components=null;_properties=null;get name(){return this.jCal[Ra]}get _designSet(){return this.parent&&this.parent._designSet||Me.getDesignSet(this.name)}_hydrateComponent(a){if(this._components||(this._components=[],this._hydratedComponentCount=0),this._components[a])return this._components[a];let i=new ea(this.jCal[Ca][a],this);return this._hydratedComponentCount++,this._components[a]=i}_hydrateProperty(a){if(this._properties||(this._properties=[],this._hydratedPropertyCount=0),this._properties[a])return this._properties[a];let i=new rt(this.jCal[Ta][a],this);return this._hydratedPropertyCount++,this._properties[a]=i}getFirstSubcomponent(a){if(a){let i=0,n=this.jCal[Ca],o=n.length;for(;i<o;i++)if(n[i][Ra]===a)return this._hydrateComponent(i)}else if(this.jCal[Ca].length)return this._hydrateComponent(0);return null}getAllSubcomponents(a){let i=this.jCal[Ca].length,n=0;if(a){let o=this.jCal[Ca],s=[];for(;n<i;n++)a===o[n][Ra]&&s.push(this._hydrateComponent(n));return s}else{if(!this._components||this._hydratedComponentCount!==i)for(;n<i;n++)this._hydrateComponent(n);return this._components||[]}}hasProperty(a){let i=this.jCal[Ta],n=i.length,o=0;for(;o<n;o++)if(i[o][Ra]===a)return!0;return!1}getFirstProperty(a){if(a){let i=0,n=this.jCal[Ta],o=n.length;for(;i<o;i++)if(n[i][Ra]===a)return this._hydrateProperty(i)}else if(this.jCal[Ta].length)return this._hydrateProperty(0);return null}getFirstPropertyValue(a){let i=this.getFirstProperty(a);return i?i.getFirstValue():null}getAllProperties(a){let i=this.jCal[Ta].length,n=0;if(a){let o=this.jCal[Ta],s=[];for(;n<i;n++)a===o[n][Ra]&&s.push(this._hydrateProperty(n));return s}else{if(!this._properties||this._hydratedPropertyCount!==i)for(;n<i;n++)this._hydrateProperty(n);return this._properties||[]}}_removeObjectByIndex(a,i,n){if(i=i||[],i[n]){let o=i[n];"parent"in o&&(o.parent=null)}i.splice(n,1),this.jCal[a].splice(n,1)}_removeObject(a,i,n){let o=0,s=this.jCal[a],l=s.length,_=this[i];if(typeof n=="string"){for(;o<l;o++)if(s[o][Ra]===n)return this._removeObjectByIndex(a,_,o),!0}else if(_){for(;o<l;o++)if(_[o]&&_[o]===n)return this._removeObjectByIndex(a,_,o),!0}return!1}_removeAllObjects(a,i,n){let o=this[i],s=this.jCal[a],l=s.length-1;for(;l>=0;l--)(!n||s[l][Ra]===n)&&this._removeObjectByIndex(a,o,l)}addSubcomponent(a){this._components||(this._components=[],this._hydratedComponentCount=0),a.parent&&a.parent.removeSubcomponent(a);let i=this.jCal[Ca].push(a.jCal);return this._components[i-1]=a,this._hydratedComponentCount++,a.parent=this,a}removeSubcomponent(a){let i=this._removeObject(Ca,"_components",a);return i&&this._hydratedComponentCount--,i}removeAllSubcomponents(a){let i=this._removeAllObjects(Ca,"_components",a);return this._hydratedComponentCount=0,i}addProperty(a){if(!(a instanceof rt))throw new TypeError("must be instance of ICAL.Property");this._properties||(this._properties=[],this._hydratedPropertyCount=0),a.parent&&a.parent.removeProperty(a);let i=this.jCal[Ta].push(a.jCal);return this._properties[i-1]=a,this._hydratedPropertyCount++,a.parent=this,a}addPropertyWithValue(a,i){let n=new rt(a);return n.setValue(i),this.addProperty(n),n}updatePropertyWithValue(a,i){let n=this.getFirstProperty(a);return n?n.setValue(i):n=this.addPropertyWithValue(a,i),n}removeProperty(a){let i=this._removeObject(Ta,"_properties",a);return i&&this._hydratedPropertyCount--,i}removeAllProperties(a){let i=this._removeAllObjects(Ta,"_properties",a);return this._hydratedPropertyCount=0,i}toJSON(){return this.jCal}toString(){return Ae.component(this.jCal,this._designSet)}getTimeZoneByID(a){if(this.parent)return this.parent.getTimeZoneByID(a);if(!this._timezoneCache)return null;if(this._timezoneCache.has(a))return this._timezoneCache.get(a);const i=this.getAllSubcomponents("vtimezone");for(const n of i)if(n.getFirstProperty("tzid").getFirstValue()===a){const o=new ce({component:n,tzid:a});return this._timezoneCache.set(a,o),o}return null}}class Dr{constructor(a){this.ruleDates=[],this.exDates=[],this.fromData(a)}complete=!1;ruleIterators=null;ruleDates=null;exDates=null;ruleDateInc=0;exDateInc=0;exDate=null;ruleDate=null;dtstart=null;last=null;fromData(a){let i=Ea(a.dtstart,K);if(i)this.dtstart=i;else throw new Error(".dtstart (ICAL.Time) must be given");if(a.component)this._init(a.component);else{if(this.last=Ea(a.last,K)||i.clone(),!a.ruleIterators)throw new Error(".ruleIterators or .component must be given");this.ruleIterators=a.ruleIterators.map(function(n){return Ea(n,ua)}),this.ruleDateInc=a.ruleDateInc,this.exDateInc=a.exDateInc,a.ruleDates&&(this.ruleDates=a.ruleDates.map(n=>Ea(n,K)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.exDates&&(this.exDates=a.exDates.map(n=>Ea(n,K)),this.exDate=this.exDates[this.exDateInc]),typeof a.complete<"u"&&(this.complete=a.complete)}}next(){let a,i,n,o=500,s=0;for(;;){if(s++>o)throw new Error("max tries have occurred, rule may be impossible to fulfill.");if(i=this.ruleDate,a=this._nextRecurrenceIter(this.last),!i&&!a){this.complete=!0;break}if((!i||a&&i.compare(a.last)>0)&&(i=a.last.clone(),a.next()),this.ruleDate===i&&this._nextRuleDay(),this.last=i,this.exDate&&(n=this.exDate.compare(this.last),n<0&&this._nextExDay(),n===0)){this._nextExDay();continue}return this.last}}toJSON(){function a(n){return n.toJSON()}let i=Object.create(null);return i.ruleIterators=this.ruleIterators.map(a),this.ruleDates&&(i.ruleDates=this.ruleDates.map(a)),this.exDates&&(i.exDates=this.exDates.map(a)),i.ruleDateInc=this.ruleDateInc,i.exDateInc=this.exDateInc,i.last=this.last.toJSON(),i.dtstart=this.dtstart.toJSON(),i.complete=this.complete,i}_extractDates(a,i){let n=[],o=a.getAllProperties(i);for(let s=0,l=o.length;s<l;s++)for(let _ of o[s].getValues()){let r=st(n,_,(f,d)=>f.compare(d));n.splice(r,0,_)}return n}_init(a){if(this.ruleIterators=[],this.last=this.dtstart.clone(),!a.hasProperty("rdate")&&!a.hasProperty("rrule")&&!a.hasProperty("recurrence-id")){this.ruleDate=this.last.clone(),this.complete=!0;return}if(a.hasProperty("rdate")&&(this.ruleDates=this._extractDates(a,"rdate"),this.ruleDates[0]&&this.ruleDates[0].compare(this.dtstart)<0?(this.ruleDateInc=0,this.last=this.ruleDates[0].clone()):this.ruleDateInc=st(this.ruleDates,this.last,(i,n)=>i.compare(n)),this.ruleDate=this.ruleDates[this.ruleDateInc]),a.hasProperty("rrule")){let i=a.getAllProperties("rrule"),n=0,o=i.length,s,l;for(;n<o;n++)s=i[n].getFirstValue(),l=s.iterator(this.dtstart),this.ruleIterators.push(l),l.next()}a.hasProperty("exdate")&&(this.exDates=this._extractDates(a,"exdate"),this.exDateInc=st(this.exDates,this.last,(i,n)=>i.compare(n)),this.exDate=this.exDates[this.exDateInc])}_nextExDay(){this.exDate=this.exDates[++this.exDateInc]}_nextRuleDay(){this.ruleDate=this.ruleDates[++this.ruleDateInc]}_nextRecurrenceIter(){let a=this.ruleIterators;if(a.length===0)return null;let i=a.length,n,o,s=0,l;for(;s<i;s++){if(n=a[s],o=n.last,n.completed){i--,s!==0&&s--,a.splice(s,1);continue}(!l||l.last.compare(o)>0)&&(l=n)}return l}}class ti{constructor(a,i){a instanceof ea||(i=a,a=null),a?this.component=a:this.component=new ea("vevent"),this._rangeExceptionCache=Object.create(null),this.exceptions=Object.create(null),this.rangeExceptions=[],i&&i.strictExceptions&&(this.strictExceptions=i.strictExceptions),i&&i.exceptions?i.exceptions.forEach(this.relateException,this):this.component.parent&&!this.isRecurrenceException()&&this.component.parent.getAllSubcomponents("vevent").forEach(function(n){n.hasProperty("recurrence-id")&&this.relateException(n)},this)}static THISANDFUTURE="THISANDFUTURE";exceptions=null;strictExceptions=!1;relateException(a){if(this.isRecurrenceException())throw new Error("cannot relate exception to exceptions");if(a instanceof ea&&(a=new ti(a)),this.strictExceptions&&a.uid!==this.uid)throw new Error("attempted to relate unrelated exception");let i=a.recurrenceId.toString();if(this.exceptions[i]=a,a.modifiesFuture()){let n=[a.recurrenceId.toUnixTime(),i],o=st(this.rangeExceptions,n,Zo);this.rangeExceptions.splice(o,0,n)}}modifiesFuture(){return this.component.hasProperty("recurrence-id")?this.component.getFirstProperty("recurrence-id").getParameter("range")===ti.THISANDFUTURE:!1}findRangeException(a){if(!this.rangeExceptions.length)return null;let i=a.toUnixTime(),n=st(this.rangeExceptions,[i],Zo);if(n-=1,n<0)return null;let o=this.rangeExceptions[n];return i<o[0]?null:o[1]}getOccurrenceDetails(a){let i=a.toString(),n=a.convertToZone(ce.utcTimezone).toString(),o,s={recurrenceId:a};if(i in this.exceptions)o=s.item=this.exceptions[i],s.startDate=o.startDate,s.endDate=o.endDate,s.item=o;else if(n in this.exceptions)o=this.exceptions[n],s.startDate=o.startDate,s.endDate=o.endDate,s.item=o;else{let l=this.findRangeException(a),_;if(l){let r=this.exceptions[l];s.item=r;let f=this._rangeExceptionCache[l];if(!f){let g=r.recurrenceId.clone(),h=r.startDate.clone();g.zone=h.zone,f=h.subtractDate(g),this._rangeExceptionCache[l]=f}let d=a.clone();d.zone=r.startDate.zone,d.addDuration(f),_=d.clone(),_.addDuration(r.duration),s.startDate=d,s.endDate=_}else _=a.clone(),_.addDuration(this.duration),s.endDate=_,s.startDate=a,s.item=this}return s}iterator(a){return new Dr({component:this.component,dtstart:a||this.startDate})}isRecurring(){let a=this.component;return a.hasProperty("rrule")||a.hasProperty("rdate")}isRecurrenceException(){return this.component.hasProperty("recurrence-id")}getRecurrenceTypes(){let a=this.component.getAllProperties("rrule"),i=0,n=a.length,o=Object.create(null);for(;i<n;i++){let s=a[i].getFirstValue();o[s.freq]=!0}return o}get uid(){return this._firstProp("uid")}set uid(a){this._setProp("uid",a)}get startDate(){return this._firstProp("dtstart")}set startDate(a){this._setTime("dtstart",a)}get endDate(){let a=this._firstProp("dtend");if(!a){let i=this._firstProp("duration");a=this.startDate.clone(),i?a.addDuration(i):a.isDate&&(a.day+=1)}return a}set endDate(a){this.component.hasProperty("duration")&&this.component.removeProperty("duration"),this._setTime("dtend",a)}get duration(){return this._firstProp("duration")||this.endDate.subtractDateTz(this.startDate)}set duration(a){this.component.hasProperty("dtend")&&this.component.removeProperty("dtend"),this._setProp("duration",a)}get location(){return this._firstProp("location")}set location(a){this._setProp("location",a)}get attendees(){return this.component.getAllProperties("attendee")}get summary(){return this._firstProp("summary")}set summary(a){this._setProp("summary",a)}get description(){return this._firstProp("description")}set description(a){this._setProp("description",a)}get color(){return this._firstProp("color")}set color(a){this._setProp("color",a)}get organizer(){return this._firstProp("organizer")}set organizer(a){this._setProp("organizer",a)}get sequence(){return this._firstProp("sequence")}set sequence(a){this._setProp("sequence",a)}get recurrenceId(){return this._firstProp("recurrence-id")}set recurrenceId(a){this._setTime("recurrence-id",a)}_setTime(a,i){let n=this.component.getFirstProperty(a);n||(n=new rt(a),this.component.addProperty(n)),i.zone===ce.localTimezone||i.zone===ce.utcTimezone?n.removeParameter("tzid"):n.setParameter("tzid",i.zone.tzid),n.setValue(i)}_setProp(a,i){this.component.updatePropertyWithValue(a,i)}_firstProp(a){return this.component.getFirstPropertyValue(a)}toString(){return this.component.toString()}}function Zo(e,a){return e[0]>a[0]?1:a[0]>e[0]?-1:0}class id{constructor(a){typeof a>"u"&&(a={});for(let[i,n]of Object.entries(a))this[i]=n}parseEvent=!0;parseTimezone=!0;oncomplete=function(){};onerror=function(a){};ontimezone=function(a){};onevent=function(a){};process(a){typeof a=="string"&&(a=he(a)),a instanceof ea||(a=new ea(a));let i=a.getAllSubcomponents(),n=0,o=i.length,s;for(;n<o;n++)switch(s=i[n],s.name){case"vtimezone":if(this.parseTimezone){let l=s.getFirstPropertyValue("tzid");l&&this.ontimezone(new ce({tzid:l,component:s}))}break;case"vevent":this.parseEvent&&this.onevent(new ti(s));break;default:continue}this.oncomplete()}}var Be={foldLength:75,debug:!1,newLineChar:`\r
`,Binary:B0,Component:ea,ComponentParser:id,Duration:Pe,Event:ti,Period:ja,Property:rt,Recur:He,RecurExpansion:Dr,RecurIterator:ua,Time:K,Timezone:ce,TimezoneService:Ii,UtcOffset:la,VCardTime:La,parse:he,stringify:Ae,design:Me,helpers:I_};class ka{constructor(a,i){this._timezoneId=null,this._ics=null,this._innerValue=null,this._initialized=!1,a instanceof Be.Timezone?(this._innerValue=a,this._initialized=!0):a instanceof Be.Component?(this._innerValue=new Be.Timezone(a),this._initialized=!0):(this._timezoneId=a,this._ics=i)}get timezoneId(){return this._initialized?this._innerValue.tzid:this._timezoneId}offsetForArray(a,i,n,o,s,l){this._initialize();const _=new Be.Time({year:a,month:i,day:n,hour:o,minute:s,second:l,isDate:!1});return this._innerValue.utcOffset(_)}timestampToArray(a){this._initialize();const i=Be.Time.fromData({year:1970,month:1,day:1,hour:0,minute:0,second:0});i.fromUnixTime(Math.floor(a/1e3));const n=i.convertToZone(this._innerValue);return[n.year,n.month,n.day,n.hour,n.minute,n.second]}toICALTimezone(){return this._initialize(),this._innerValue}toICALJs(){return this._initialize(),this._innerValue.component}_initialize(){if(!this._initialized){const a=Be.parse(this._ics),i=new Be.Component(a);this._innerValue=new Be.Timezone(i),this._initialized=!0}}}ka.utc=new ka(Be.Timezone.utcTimezone),ka.floating=new ka(Be.Timezone.localTimezone);const nd="2.2024a",od={"AUS Central Standard Time":{aliasTo:"Australia/Darwin"},"AUS Eastern Standard Time":{aliasTo:"Australia/Sydney"},"Afghanistan Standard Time":{aliasTo:"Asia/Kabul"},"Africa/Asmera":{aliasTo:"Africa/Asmara"},"Africa/Timbuktu":{aliasTo:"Africa/Bamako"},"Alaskan Standard Time":{aliasTo:"America/Anchorage"},"America/Argentina/ComodRivadavia":{aliasTo:"America/Argentina/Catamarca"},"America/Buenos_Aires":{aliasTo:"America/Argentina/Buenos_Aires"},"America/Louisville":{aliasTo:"America/Kentucky/Louisville"},"America/Montreal":{aliasTo:"America/Toronto"},"America/Santa_Isabel":{aliasTo:"America/Tijuana"},"Arab Standard Time":{aliasTo:"Asia/Riyadh"},"Arabian Standard Time":{aliasTo:"Asia/Dubai"},"Arabic Standard Time":{aliasTo:"Asia/Baghdad"},"Argentina Standard Time":{aliasTo:"America/Argentina/Buenos_Aires"},"Asia/Calcutta":{aliasTo:"Asia/Kolkata"},"Asia/Katmandu":{aliasTo:"Asia/Kathmandu"},"Asia/Rangoon":{aliasTo:"Asia/Yangon"},"Asia/Saigon":{aliasTo:"Asia/Ho_Chi_Minh"},"Atlantic Standard Time":{aliasTo:"America/Halifax"},"Atlantic/Faeroe":{aliasTo:"Atlantic/Faroe"},"Atlantic/Jan_Mayen":{aliasTo:"Europe/Oslo"},"Azerbaijan Standard Time":{aliasTo:"Asia/Baku"},"Azores Standard Time":{aliasTo:"Atlantic/Azores"},"Bahia Standard Time":{aliasTo:"America/Bahia"},"Bangladesh Standard Time":{aliasTo:"Asia/Dhaka"},"Belarus Standard Time":{aliasTo:"Europe/Minsk"},"Canada Central Standard Time":{aliasTo:"America/Regina"},"Cape Verde Standard Time":{aliasTo:"Atlantic/Cape_Verde"},"Caucasus Standard Time":{aliasTo:"Asia/Yerevan"},"Cen. Australia Standard Time":{aliasTo:"Australia/Adelaide"},"Central America Standard Time":{aliasTo:"America/Guatemala"},"Central Asia Standard Time":{aliasTo:"Asia/Almaty"},"Central Brazilian Standard Time":{aliasTo:"America/Cuiaba"},"Central Europe Standard Time":{aliasTo:"Europe/Budapest"},"Central European Standard Time":{aliasTo:"Europe/Warsaw"},"Central Pacific Standard Time":{aliasTo:"Pacific/Guadalcanal"},"Central Standard Time":{aliasTo:"America/Chicago"},"Central Standard Time (Mexico)":{aliasTo:"America/Mexico_City"},"China Standard Time":{aliasTo:"Asia/Shanghai"},"E. Africa Standard Time":{aliasTo:"Africa/Nairobi"},"E. Australia Standard Time":{aliasTo:"Australia/Brisbane"},"E. South America Standard Time":{aliasTo:"America/Sao_Paulo"},"Eastern Standard Time":{aliasTo:"America/New_York"},"Egypt Standard Time":{aliasTo:"Africa/Cairo"},"Ekaterinburg Standard Time":{aliasTo:"Asia/Yekaterinburg"},"Etc/GMT":{aliasTo:"UTC"},"Etc/GMT+0":{aliasTo:"UTC"},"Etc/UCT":{aliasTo:"UTC"},"Etc/UTC":{aliasTo:"UTC"},"Etc/Unversal":{aliasTo:"UTC"},"Etc/Zulu":{aliasTo:"UTC"},"Europe/Belfast":{aliasTo:"Europe/London"},"FLE Standard Time":{aliasTo:"Europe/Kiev"},"Fiji Standard Time":{aliasTo:"Pacific/Fiji"},GMT:{aliasTo:"UTC"},"GMT Standard Time":{aliasTo:"Europe/London"},"GMT+0":{aliasTo:"UTC"},GMT0:{aliasTo:"UTC"},"GTB Standard Time":{aliasTo:"Europe/Bucharest"},"Georgian Standard Time":{aliasTo:"Asia/Tbilisi"},"Greenland Standard Time":{aliasTo:"America/Godthab"},Greenwich:{aliasTo:"UTC"},"Greenwich Standard Time":{aliasTo:"Atlantic/Reykjavik"},"Hawaiian Standard Time":{aliasTo:"Pacific/Honolulu"},"India Standard Time":{aliasTo:"Asia/Calcutta"},"Iran Standard Time":{aliasTo:"Asia/Tehran"},"Israel Standard Time":{aliasTo:"Asia/Jerusalem"},"Jordan Standard Time":{aliasTo:"Asia/Amman"},"Kaliningrad Standard Time":{aliasTo:"Europe/Kaliningrad"},"Korea Standard Time":{aliasTo:"Asia/Seoul"},"Libya Standard Time":{aliasTo:"Africa/Tripoli"},"Line Islands Standard Time":{aliasTo:"Pacific/Kiritimati"},"Magadan Standard Time":{aliasTo:"Asia/Magadan"},"Mauritius Standard Time":{aliasTo:"Indian/Mauritius"},"Middle East Standard Time":{aliasTo:"Asia/Beirut"},"Montevideo Standard Time":{aliasTo:"America/Montevideo"},"Morocco Standard Time":{aliasTo:"Africa/Casablanca"},"Mountain Standard Time":{aliasTo:"America/Denver"},"Mountain Standard Time (Mexico)":{aliasTo:"America/Chihuahua"},"Myanmar Standard Time":{aliasTo:"Asia/Rangoon"},"N. Central Asia Standard Time":{aliasTo:"Asia/Novosibirsk"},"Namibia Standard Time":{aliasTo:"Africa/Windhoek"},"Nepal Standard Time":{aliasTo:"Asia/Katmandu"},"New Zealand Standard Time":{aliasTo:"Pacific/Auckland"},"Newfoundland Standard Time":{aliasTo:"America/St_Johns"},"North Asia East Standard Time":{aliasTo:"Asia/Irkutsk"},"North Asia Standard Time":{aliasTo:"Asia/Krasnoyarsk"},"Pacific SA Standard Time":{aliasTo:"America/Santiago"},"Pacific Standard Time":{aliasTo:"America/Los_Angeles"},"Pacific Standard Time (Mexico)":{aliasTo:"America/Santa_Isabel"},"Pacific/Johnston":{aliasTo:"Pacific/Honolulu"},"Pakistan Standard Time":{aliasTo:"Asia/Karachi"},"Paraguay Standard Time":{aliasTo:"America/Asuncion"},"Romance Standard Time":{aliasTo:"Europe/Paris"},"Russia Time Zone 10":{aliasTo:"Asia/Srednekolymsk"},"Russia Time Zone 11":{aliasTo:"Asia/Kamchatka"},"Russia Time Zone 3":{aliasTo:"Europe/Samara"},"Russian Standard Time":{aliasTo:"Europe/Moscow"},"SA Eastern Standard Time":{aliasTo:"America/Cayenne"},"SA Pacific Standard Time":{aliasTo:"America/Bogota"},"SA Western Standard Time":{aliasTo:"America/La_Paz"},"SE Asia Standard Time":{aliasTo:"Asia/Bangkok"},"Samoa Standard Time":{aliasTo:"Pacific/Apia"},"Singapore Standard Time":{aliasTo:"Asia/Singapore"},"South Africa Standard Time":{aliasTo:"Africa/Johannesburg"},"Sri Lanka Standard Time":{aliasTo:"Asia/Colombo"},"Syria Standard Time":{aliasTo:"Asia/Damascus"},"Taipei Standard Time":{aliasTo:"Asia/Taipei"},"Tasmania Standard Time":{aliasTo:"Australia/Hobart"},"Tokyo Standard Time":{aliasTo:"Asia/Tokyo"},"Tonga Standard Time":{aliasTo:"Pacific/Tongatapu"},"Turkey Standard Time":{aliasTo:"Europe/Istanbul"},UCT:{aliasTo:"UTC"},"US Eastern Standard Time":{aliasTo:"America/Indiana/Indianapolis"},"US Mountain Standard Time":{aliasTo:"America/Phoenix"},"US/Central":{aliasTo:"America/Chicago"},"US/Eastern":{aliasTo:"America/New_York"},"US/Mountain":{aliasTo:"America/Denver"},"US/Pacific":{aliasTo:"America/Los_Angeles"},"US/Pacific-New":{aliasTo:"America/Los_Angeles"},"Ulaanbaatar Standard Time":{aliasTo:"Asia/Ulaanbaatar"},Universal:{aliasTo:"UTC"},"Venezuela Standard Time":{aliasTo:"America/Caracas"},"Vladivostok Standard Time":{aliasTo:"Asia/Vladivostok"},"W. Australia Standard Time":{aliasTo:"Australia/Perth"},"W. Central Africa Standard Time":{aliasTo:"Africa/Lagos"},"W. Europe Standard Time":{aliasTo:"Europe/Berlin"},"West Asia Standard Time":{aliasTo:"Asia/Tashkent"},"West Pacific Standard Time":{aliasTo:"Pacific/Port_Moresby"},"Yakutsk Standard Time":{aliasTo:"Asia/Yakutsk"},Z:{aliasTo:"UTC"},Zulu:{aliasTo:"UTC"},utc:{aliasTo:"UTC"}},sd={"Africa/Abidjan":{ics:[`BEGIN:STANDARD\r
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
END:STANDARD`]}},Xa={version:nd,aliases:od,zones:sd};class rd{constructor(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map}getTimezoneForId(a){return this._getTimezoneForIdRec(a,0)}_getTimezoneForIdRec(a,i){if(this._timezones.has(a))return this._timezones.get(a);if(i>=20)return console.error("TimezoneManager.getTimezoneForIdRec() exceeds recursion limits"),null;if(this._aliases.has(a)){const n=this._aliases.get(a);return this._getTimezoneForIdRec(n,i+1)}return null}hasTimezoneForId(a){return this._timezones.has(a)||this._aliases.has(a)}isAlias(a){return!this._timezones.has(a)&&this._aliases.has(a)}listAllTimezones(a=!1){const i=Array.from(this._timezones.keys());return a?i.concat(Array.from(this._aliases.keys())):i}registerTimezone(a){this._timezones.set(a.timezoneId,a),Be.TimezoneService.register(a.timezoneId,a.toICALTimezone()),this._pendingAliases=this._pendingAliases.filter(([i,n])=>n!==a.timezoneId?!0:(Be.TimezoneService.register(i,a.toICALTimezone()),!1))}registerDefaultTimezones(){console.debug(`@nextcloud/calendar-js app is using version ${Xa.version} of the timezone database`);for(const a in Xa.zones)if(Object.prototype.hasOwnProperty.call(Xa.zones,[a])){const i=["BEGIN:VTIMEZONE","TZID:"+a,...Xa.zones[a].ics,"END:VTIMEZONE"].join(`\r
`);this.registerTimezoneFromICS(a,i)}for(const a in Xa.aliases)Object.prototype.hasOwnProperty.call(Xa.aliases,[a])&&this.registerAlias(a,Xa.aliases[a].aliasTo)}registerTimezoneFromICS(a,i){const n=new ka(a,i);this.registerTimezone(n)}registerAlias(a,i){this._aliases.set(a,i);const n=this.getTimezoneForId(i);if(!n){this._pendingAliases.push([a,i]);return}Be.TimezoneService.register(a,n.toICALTimezone())}unregisterTimezones(a){this._timezones.delete(a),Be.TimezoneService.remove(a)}unregisterAlias(a){this._aliases.delete(a),this._pendingAliases=this._pendingAliases.filter(([i])=>i!==a),Be.TimezoneService.remove(a)}clearAllTimezones(){this._aliases=new Map,this._pendingAliases=[],this._timezones=new Map,Be.TimezoneService.reset(),Et.registerTimezone(ka.utc),Et.registerTimezone(ka.floating),Et.registerAlias("GMT",ka.utc.timezoneId),Et.registerAlias("Z",ka.utc.timezoneId)}}const Et=new rd;Et.clearAllTimezones();function ld(){return Et}var Tr={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ma,function(){return(()=>{var i={646:l=>{l.exports=function(_){if(Array.isArray(_)){for(var r=0,f=new Array(_.length);r<_.length;r++)f[r]=_[r];return f}}},713:l=>{l.exports=function(_,r,f){return r in _?Object.defineProperty(_,r,{value:f,enumerable:!0,configurable:!0,writable:!0}):_[r]=f,_}},860:l=>{l.exports=function(_){if(Symbol.iterator in Object(_)||Object.prototype.toString.call(_)==="[object Arguments]")return Array.from(_)}},206:l=>{l.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},319:(l,_,r)=>{var f=r(646),d=r(860),g=r(206);l.exports=function(h){return f(h)||d(h)||g()}},8:l=>{function _(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l.exports=_=function(f){return typeof f}:l.exports=_=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},_(r)}l.exports=_}},n={};function o(l){var _=n[l];if(_!==void 0)return _.exports;var r=n[l]={exports:{}};return i[l](r,r.exports,o),r.exports}o.n=l=>{var _=l&&l.__esModule?()=>l.default:()=>l;return o.d(_,{a:_}),_},o.d=(l,_)=>{for(var r in _)o.o(_,r)&&!o.o(l,r)&&Object.defineProperty(l,r,{enumerable:!0,get:_[r]})},o.o=(l,_)=>Object.prototype.hasOwnProperty.call(l,_),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s={};return(()=>{o.r(s),o.d(s,{VueSelect:()=>P,default:()=>Z,mixins:()=>z});var l=o(319),_=o.n(l),r=o(8),f=o.n(r),d=o(713),g=o.n(d);const h={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(c){var v=this;this.autoscroll&&c&&this.$nextTick(function(){return v.maybeAdjustScroll()})}},methods:{maybeAdjustScroll:function(){var c,v=((c=this.$refs.dropdownMenu)===null||c===void 0?void 0:c.children[this.typeAheadPointer])||!1;if(v){var R=this.getDropdownViewport(),O=v.getBoundingClientRect(),U=O.top,Y=O.bottom,te=O.height;if(U<R.top)return this.$refs.dropdownMenu.scrollTop=v.offsetTop;if(Y>R.bottom)return this.$refs.dropdownMenu.scrollTop=v.offsetTop-(R.height-te)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},F={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){if(this.resetFocusOnOptionsChange){for(var c=0;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}}},open:function(c){c&&this.typeAheadToLastSelected()},selectedValue:function(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp:function(){for(var c=this.typeAheadPointer-1;c>=0;c--)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadDown:function(){for(var c=this.typeAheadPointer+1;c<this.filteredOptions.length;c++)if(this.selectable(this.filteredOptions[c])){this.typeAheadPointer=c;break}},typeAheadSelect:function(){var c=this.filteredOptions[this.typeAheadPointer];c&&this.selectable(c)&&this.select(c)},typeAheadToLastSelected:function(){var c=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1;c!==-1&&(this.typeAheadPointer=c)}}},m={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(c){this.mutableLoading=c}},methods:{toggleLoading:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.mutableLoading=c??!this.mutableLoading}}};function p(c,v,R,O,U,Y,te,ee){var fe,ne=typeof c=="function"?c.options:c;return v&&(ne.render=v,ne.staticRenderFns=R,ne._compiled=!0),{exports:c,options:ne}}const T={Deselect:p({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[v("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])},[]).exports,OpenIndicator:p({},function(){var c=this.$createElement,v=this._self._c||c;return v("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[v("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])},[]).exports},k={inserted:function(c,v,R){var O=R.context;if(O.appendToBody){document.body.appendChild(c);var U=O.$refs.toggle.getBoundingClientRect(),Y=U.height,te=U.top,ee=U.left,fe=U.width,ne=window.scrollX||window.pageXOffset,pe=window.scrollY||window.pageYOffset;c.unbindPosition=O.calculatePosition(c,O,{width:fe+"px",left:ne+ee+"px",top:pe+te+Y+"px"})}},unbind:function(c,v,R){R.context.appendToBody&&(c.unbindPosition&&typeof c.unbindPosition=="function"&&c.unbindPosition(),c.parentNode&&c.parentNode.removeChild(c))}},w=function(c){var v={};return Object.keys(c).sort().forEach(function(R){v[R]=c[R]}),JSON.stringify(v)};var S=0;const M=function(){return++S};function L(c,v){var R=Object.keys(c);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(c);v&&(O=O.filter(function(U){return Object.getOwnPropertyDescriptor(c,U).enumerable})),R.push.apply(R,O)}return R}function B(c){for(var v=1;v<arguments.length;v++){var R=arguments[v]!=null?arguments[v]:{};v%2?L(Object(R),!0).forEach(function(O){g()(c,O,R[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(R)):L(Object(R)).forEach(function(O){Object.defineProperty(c,O,Object.getOwnPropertyDescriptor(R,O))})}return c}const P=p({components:B({},T),directives:{appendToBody:k},mixins:[h,F,m],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},ariaLabelCombobox:{type:String,default:"Search for options"},ariaLabelListbox:{type:String,default:"Options"},ariaLabelClearSelected:{type:String,default:"Clear selected"},ariaLabelDeselectOption:{type:Function,default:function(c){return"Deselect ".concat(c)}},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(c){return c}},selectable:{type:Function,default:function(c){return!0}},getOptionLabel:{type:Function,default:function(c){return f()(c)==="object"?c.hasOwnProperty(this.label)?c[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(c),`.
`)+"https://vue-select.org/api/props.html#getoptionlabel"):c}},getOptionKey:{type:Function,default:function(c){if(f()(c)!=="object")return c;try{return c.hasOwnProperty("id")?c.id:w(c)}catch(v){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,c,v)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(c,v,R){return(v||"").toLocaleLowerCase().indexOf(R.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(c,v){var R=this;return c.filter(function(O){var U=R.getOptionLabel(O);return typeof U=="number"&&(U=U.toString()),R.filterBy(O,U,v)})}},createOption:{type:Function,default:function(c){return f()(this.optionList[0])==="object"?g()({},this.label,c):c}},resetFocusOnOptionsChange:{type:Boolean,default:!0},resetOnOptionsChange:{default:!1,validator:function(c){return["function","boolean"].includes(f()(c))}},clearSearchOnBlur:{type:Function,default:function(c){var v=c.clearSearchOnSelect,R=c.multiple;return v&&!R}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(c,v){return c}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(c,v,R){var O=R.width,U=R.top,Y=R.left;c.style.top=U,c.style.left=Y,c.style.width=O}},dropdownShouldOpen:{type:Function,default:function(c){var v=c.noDrop,R=c.open,O=c.mutableLoading;return!v&&R&&!O}},keyboardFocusBorder:{type:Boolean,default:!1},uid:{type:[String,Number],default:function(){return M()}}},data:function(){return{search:"",open:!1,isComposing:!1,isKeyboardNavigation:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return this.value===void 0||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var c=this.value;return this.isTrackingValues&&(c=this.$data._value),c!=null&&c!==""?[].concat(c):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var c=this,v={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:B({id:this.inputId,disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,role:"combobox","aria-autocomplete":"list","aria-label":this.ariaLabelCombobox,"aria-controls":"vs-".concat(this.uid,"__listbox"),"aria-owns":"vs-".concat(this.uid,"__listbox"),"aria-expanded":this.dropdownOpen.toString(),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs-".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return c.isComposing=!0},compositionend:function(){return c.isComposing=!1},keydown:this.onSearchKeyDown,keypress:this.onSearchKeyPress,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(R){return c.search=R.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:v,listFooter:v,header:B({},v,{deselect:this.deselect}),footer:B({},v,{deselect:this.deselect})}},childComponents:function(){return B({},T,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var c=this,v=function(Y){return c.limit!==null?Y.slice(0,c.limit):Y},R=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return v(R);var O=this.search.length?this.filter(R,this.search,this):R;if(this.taggable&&this.search.length){var U=this.createOption(this.search);this.optionExists(U)||O.unshift(U)}return v(O)},isValueEmpty:function(){return this.selectedValue.length===0},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(c,v){var R=this;!this.taggable&&(typeof R.resetOnOptionsChange=="function"?R.resetOnOptionsChange(c,v,R.selectedValue):R.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:{immediate:!0,handler:function(c){this.isTrackingValues&&this.setInternalValueFromOptions(c)}},multiple:function(){this.clearSelection()},open:function(c){this.$emit(c?"open":"close")},search:function(c){c.length&&(this.open=!0)}},created:function(){this.mutableLoading=this.loading,this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(c){var v=this;Array.isArray(c)?this.$data._value=c.map(function(R){return v.findOptionFromReducedValue(R)}):this.$data._value=this.findOptionFromReducedValue(c)},select:function(c){this.$emit("option:selecting",c),this.isOptionSelected(c)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(c):(this.taggable&&!this.optionExists(c)&&this.$emit("option:created",c),this.multiple&&(c=this.selectedValue.concat(c)),this.updateValue(c),this.$emit("option:selected",c)),this.onAfterSelect(c)},deselect:function(c){var v=this;this.$emit("option:deselecting",c),this.updateValue(this.selectedValue.filter(function(R){return!v.optionComparator(R,c)})),this.$emit("option:deselected",c)},keyboardDeselect:function(c,v){var R,O;this.deselect(c);var U=(R=this.$refs.deselectButtons)===null||R===void 0?void 0:R[v+1],Y=(O=this.$refs.deselectButtons)===null||O===void 0?void 0:O[v-1],te=U??Y;te?te.focus():this.searchEl.focus()},clearSelection:function(){this.updateValue(this.multiple?[]:null),this.searchEl.focus()},onAfterSelect:function(c){var v=this;this.closeOnSelect&&(this.open=!this.open),this.clearSearchOnSelect&&(this.search=""),this.noDrop&&this.multiple&&this.$nextTick(function(){return v.$refs.search.focus()})},updateValue:function(c){var v=this;this.value===void 0&&(this.$data._value=c),c!==null&&(c=Array.isArray(c)?c.map(function(R){return v.reduce(R)}):this.reduce(c)),this.$emit("input",c)},toggleDropdown:function(c){var v=c.target!==this.searchEl;v&&c.preventDefault();var R=[].concat(_()(this.$refs.deselectButtons||[]),_()([this.$refs.clearButton]));this.searchEl===void 0||R.filter(Boolean).some(function(O){return O.contains(c.target)||O===c.target})?c.preventDefault():this.open&&v?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(c){var v=this;return this.selectedValue.some(function(R){return v.optionComparator(R,c)})},isOptionDeselectable:function(c){return this.isOptionSelected(c)&&this.deselectFromDropdown},hasKeyboardFocusBorder:function(c){return!(!this.keyboardFocusBorder||!this.isKeyboardNavigation)&&c===this.typeAheadPointer},optionComparator:function(c,v){return this.getOptionKey(c)===this.getOptionKey(v)},findOptionFromReducedValue:function(c){var v=this,R=[].concat(_()(this.options),_()(this.pushedTags)).filter(function(O){return JSON.stringify(v.reduce(O))===JSON.stringify(c)});return R.length===1?R[0]:R.find(function(O){return v.optionComparator(O,v.$data._value)})||c},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var c=null;this.multiple&&(c=_()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(c)}},optionExists:function(c){var v=this;return this.optionList.some(function(R){return v.optionComparator(R,c)})},optionAriaSelected:function(c){return this.selectable(c)?String(this.isOptionSelected(c)):null},normalizeOptionForSlot:function(c){return f()(c)==="object"?c:g()({},this.label,c)},pushTag:function(c){this.pushedTags.push(c)},onEscape:function(){this.search.length?this.search="":this.open=!1},onSearchBlur:function(){if(!this.mousedown||this.searching){var c=this.clearSearchOnSelect,v=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:c,multiple:v})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,this.search.length!==0||this.options.length!==0||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onMouseMove:function(c,v){this.isKeyboardNavigation=!1,this.selectable(c)&&(this.typeAheadPointer=v)},onSearchKeyDown:function(c){var v=this,R=function(Y){if(Y.preventDefault(),v.open)return!v.isComposing&&v.typeAheadSelect();v.open=!0},O={8:function(Y){return v.maybeDeleteValue()},9:function(Y){return v.onTab()},27:function(Y){return v.onEscape()},38:function(Y){if(Y.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadUp();v.open=!0},40:function(Y){if(Y.preventDefault(),v.isKeyboardNavigation=!0,v.open)return v.typeAheadDown();v.open=!0}};this.selectOnKeyCodes.forEach(function(Y){return O[Y]=R});var U=this.mapKeydown(O,this);if(typeof U[c.keyCode]=="function")return U[c.keyCode](c)},onSearchKeyPress:function(c){this.open||c.keyCode!==32||(c.preventDefault(),this.open=!0)}}},function(){var c=this,v=c.$createElement,R=c._self._c||v;return R("div",{staticClass:"v-select",class:c.stateClasses,attrs:{id:"v-select-"+c.uid,dir:c.dir}},[c._t("header",null,null,c.scope.header),c._v(" "),R("div",{ref:"toggle",staticClass:"vs__dropdown-toggle"},[R("div",{ref:"selectedOptions",staticClass:"vs__selected-options",on:{mousedown:c.toggleDropdown}},[c._l(c.selectedValue,function(O,U){return c._t("selected-option-container",[R("span",{key:c.getOptionKey(O),staticClass:"vs__selected"},[c._t("selected-option",[c._v(`
            `+c._s(c.getOptionLabel(O))+`
          `)],null,c.normalizeOptionForSlot(O)),c._v(" "),c.multiple?R("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelDeselectOption(c.getOptionLabel(O)),"aria-label":c.ariaLabelDeselectOption(c.getOptionLabel(O))},on:{mousedown:function(Y){return Y.stopPropagation(),c.deselect(O)},keydown:function(Y){return!Y.type.indexOf("key")&&c._k(Y.keyCode,"enter",13,Y.key,"Enter")?null:c.keyboardDeselect(O,U)}}},[R(c.childComponents.Deselect,{tag:"component"})],1):c._e()],2)],{option:c.normalizeOptionForSlot(O),deselect:c.deselect,multiple:c.multiple,disabled:c.disabled})}),c._v(" "),c._t("search",[R("input",c._g(c._b({staticClass:"vs__search"},"input",c.scope.search.attributes,!1),c.scope.search.events))],null,c.scope.search)],2),c._v(" "),R("div",{ref:"actions",staticClass:"vs__actions"},[R("button",{directives:[{name:"show",rawName:"v-show",value:c.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:c.disabled,type:"button",title:c.ariaLabelClearSelected,"aria-label":c.ariaLabelClearSelected},on:{click:c.clearSelection}},[R(c.childComponents.Deselect,{tag:"component"})],1),c._v(" "),c.noDrop?c._e():R("button",{ref:"openIndicatorButton",staticClass:"vs__open-indicator-button",attrs:{type:"button",tabindex:"-1","aria-labelledby":"vs-"+c.uid+"__listbox","aria-controls":"vs-"+c.uid+"__listbox","aria-expanded":c.dropdownOpen.toString()},on:{mousedown:c.toggleDropdown}},[c._t("open-indicator",[R(c.childComponents.OpenIndicator,c._b({tag:"component"},"component",c.scope.openIndicator.attributes,!1))],null,c.scope.openIndicator)],2),c._v(" "),c._t("spinner",[R("div",{directives:[{name:"show",rawName:"v-show",value:c.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[c._v("Loading...")])],null,c.scope.spinner)],2)]),c._v(" "),R("transition",{attrs:{name:c.transition}},[c.dropdownOpen?R("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs-"+c.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox,"aria-multiselectable":c.multiple,tabindex:"-1"},on:{mousedown:function(O){return O.preventDefault(),c.onMousedown(O)},mouseup:c.onMouseUp}},[c._t("list-header",null,null,c.scope.listHeader),c._v(" "),c._l(c.filteredOptions,function(O,U){return R("li",{key:c.getOptionKey(O),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--deselect":c.isOptionDeselectable(O)&&U===c.typeAheadPointer,"vs__dropdown-option--selected":c.isOptionSelected(O),"vs__dropdown-option--highlight":U===c.typeAheadPointer,"vs__dropdown-option--kb-focus":c.hasKeyboardFocusBorder(U),"vs__dropdown-option--disabled":!c.selectable(O)},attrs:{id:"vs-"+c.uid+"__option-"+U,role:"option","aria-selected":c.optionAriaSelected(O)},on:{mousemove:function(Y){return c.onMouseMove(O,U)},click:function(Y){Y.preventDefault(),Y.stopPropagation(),c.selectable(O)&&c.select(O)}}},[c._t("option",[c._v(`
          `+c._s(c.getOptionLabel(O))+`
        `)],null,c.normalizeOptionForSlot(O))],2)}),c._v(" "),c.filteredOptions.length===0?R("li",{staticClass:"vs__no-options"},[c._t("no-options",[c._v(`
          Sorry, no matching options.
        `)],null,c.scope.noOptions)],2):c._e(),c._v(" "),c._t("list-footer",null,null,c.scope.listFooter)],2):R("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs-"+c.uid+"__listbox",role:"listbox","aria-label":c.ariaLabelListbox}})]),c._v(" "),c._t("footer",null,null,c.scope.footer)],2)},[]).exports,z={ajax:m,pointer:F,pointerScroll:h},Z=P})(),s})()})})(Tr);var et=Tr.exports;const Pi=Math.min,lt=Math.max,Gi=Math.round,pi=Math.floor,Va=e=>({x:e,y:e}),_d={left:"right",right:"left",bottom:"top",top:"bottom"},dd={start:"end",end:"start"};function Io(e,a,i){return lt(e,Pi(a,i))}function vt(e,a){return typeof e=="function"?e(a):e}function Wa(e){return e.split("-")[0]}function O0(e){return e.split("-")[1]}function Jn(e){return e==="x"?"y":"x"}function yr(e){return e==="y"?"height":"width"}function gt(e){return["top","bottom"].includes(Wa(e))?"y":"x"}function Er(e){return Jn(gt(e))}function fd(e,a,i){i===void 0&&(i=!1);const n=O0(e),o=Er(e),s=yr(o);let l=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return a.reference[s]>a.floating[s]&&(l=Ui(l)),[l,Ui(l)]}function gd(e){const a=Ui(e);return[pn(e),a,pn(a)]}function pn(e){return e.replace(/start|end/g,a=>dd[a])}function hd(e,a,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return i?a?o:n:a?n:o;case"left":case"right":return a?s:l;default:return[]}}function Fd(e,a,i,n){const o=O0(e);let s=hd(Wa(e),i==="start",n);return o&&(s=s.map(l=>l+"-"+o),a&&(s=s.concat(s.map(pn)))),s}function Ui(e){return e.replace(/left|right|bottom|top/g,a=>_d[a])}function ud(e){return{top:0,right:0,bottom:0,left:0,...e}}function cd(e){return typeof e!="number"?ud(e):{top:e,right:e,bottom:e,left:e}}function zi(e){const{x:a,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:a,right:a+n,bottom:i+o,x:a,y:i}}function Ho(e,a,i){let{reference:n,floating:o}=e;const s=gt(a),l=Er(a),_=yr(l),r=Wa(a),f=s==="y",d=n.x+n.width/2-o.width/2,g=n.y+n.height/2-o.height/2,h=n[_]/2-o[_]/2;let F;switch(r){case"top":F={x:d,y:n.y-o.height};break;case"bottom":F={x:d,y:n.y+n.height};break;case"right":F={x:n.x+n.width,y:g};break;case"left":F={x:n.x-o.width,y:g};break;default:F={x:n.x,y:n.y}}switch(O0(a)){case"start":F[l]-=h*(i&&f?-1:1);break;case"end":F[l]+=h*(i&&f?-1:1);break}return F}const md=async(e,a,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:l}=i,_=s.filter(Boolean),r=await(l.isRTL==null?void 0:l.isRTL(a));let f=await l.getElementRects({reference:e,floating:a,strategy:o}),{x:d,y:g}=Ho(f,n,r),h=n,F={},m=0;for(let p=0;p<_.length;p++){const{name:T,fn:k}=_[p],{x:w,y:S,data:M,reset:L}=await k({x:d,y:g,initialPlacement:n,placement:h,strategy:o,middlewareData:F,rects:f,platform:l,elements:{reference:e,floating:a}});d=w??d,g=S??g,F={...F,[T]:{...F[T],...M}},L&&m<=50&&(m++,typeof L=="object"&&(L.placement&&(h=L.placement),L.rects&&(f=L.rects===!0?await l.getElementRects({reference:e,floating:a,strategy:o}):L.rects),{x:d,y:g}=Ho(f,h,r)),p=-1)}return{x:d,y:g,placement:h,strategy:o,middlewareData:F}};async function kr(e,a){var i;a===void 0&&(a={});const{x:n,y:o,platform:s,rects:l,elements:_,strategy:r}=e,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:h=!1,padding:F=0}=vt(a,e),m=cd(F),p=_[h?g==="floating"?"reference":"floating":g],T=zi(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(p)))==null||i?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(_.floating)),boundary:f,rootBoundary:d,strategy:r})),k=g==="floating"?{x:n,y:o,width:l.floating.width,height:l.floating.height}:l.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(_.floating)),S=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},M=zi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:_,rect:k,offsetParent:w,strategy:r}):k);return{top:(T.top-M.top+m.top)/S.y,bottom:(M.bottom-T.bottom+m.bottom)/S.y,left:(T.left-M.left+m.left)/S.x,right:(M.right-T.right+m.right)/S.x}}const pd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(a){var i,n;const{placement:o,middlewareData:s,rects:l,initialPlacement:_,platform:r,elements:f}=a,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:h,fallbackStrategy:F="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...T}=vt(e,a);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const k=Wa(o),w=gt(_),S=Wa(_)===_,M=await(r.isRTL==null?void 0:r.isRTL(f.floating)),L=h||(S||!p?[Ui(_)]:gd(_)),B=m!=="none";!h&&B&&L.push(...Fd(_,p,m,M));const P=[_,...L],z=await kr(a,T),Z=[];let c=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&Z.push(z[k]),g){const U=fd(o,l,M);Z.push(z[U[0]],z[U[1]])}if(c=[...c,{placement:o,overflows:Z}],!Z.every(U=>U<=0)){var v,R;const U=(((v=s.flip)==null?void 0:v.index)||0)+1,Y=P[U];if(Y)return{data:{index:U,overflows:c},reset:{placement:Y}};let te=(R=c.filter(ee=>ee.overflows[0]<=0).sort((ee,fe)=>ee.overflows[1]-fe.overflows[1])[0])==null?void 0:R.placement;if(!te)switch(F){case"bestFit":{var O;const ee=(O=c.filter(fe=>{if(B){const ne=gt(fe.placement);return ne===w||ne==="y"}return!0}).map(fe=>[fe.placement,fe.overflows.filter(ne=>ne>0).reduce((ne,pe)=>ne+pe,0)]).sort((fe,ne)=>fe[1]-ne[1])[0])==null?void 0:O[0];ee&&(te=ee);break}case"initialPlacement":te=_;break}if(o!==te)return{reset:{placement:te}}}return{}}}};async function bd(e,a){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),l=Wa(i),_=O0(i),r=gt(i)==="y",f=["left","top"].includes(l)?-1:1,d=s&&r?-1:1,g=vt(a,e);let{mainAxis:h,crossAxis:F,alignmentAxis:m}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return _&&typeof m=="number"&&(F=_==="end"?m*-1:m),r?{x:F*d,y:h*f}:{x:h*f,y:F*d}}const Dd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(a){var i,n;const{x:o,y:s,placement:l,middlewareData:_}=a,r=await bd(a,e);return l===((i=_.offset)==null?void 0:i.placement)&&(n=_.arrow)!=null&&n.alignmentOffset?{}:{x:o+r.x,y:s+r.y,data:{...r,placement:l}}}}},Td=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(a){const{x:i,y:n,placement:o}=a,{mainAxis:s=!0,crossAxis:l=!1,limiter:_={fn:T=>{let{x:k,y:w}=T;return{x:k,y:w}}},...r}=vt(e,a),f={x:i,y:n},d=await kr(a,r),g=gt(Wa(o)),h=Jn(g);let F=f[h],m=f[g];if(s){const T=h==="y"?"top":"left",k=h==="y"?"bottom":"right",w=F+d[T],S=F-d[k];F=Io(w,F,S)}if(l){const T=g==="y"?"top":"left",k=g==="y"?"bottom":"right",w=m+d[T],S=m-d[k];m=Io(w,m,S)}const p=_.fn({...a,[h]:F,[g]:m});return{...p,data:{x:p.x-i,y:p.y-n,enabled:{[h]:s,[g]:l}}}}}},yd=function(e){return e===void 0&&(e={}),{options:e,fn(a){const{x:i,y:n,placement:o,rects:s,middlewareData:l}=a,{offset:_=0,mainAxis:r=!0,crossAxis:f=!0}=vt(e,a),d={x:i,y:n},g=gt(o),h=Jn(g);let F=d[h],m=d[g];const p=vt(_,a),T=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(r){const S=h==="y"?"height":"width",M=s.reference[h]-s.floating[S]+T.mainAxis,L=s.reference[h]+s.reference[S]-T.mainAxis;F<M?F=M:F>L&&(F=L)}if(f){var k,w;const S=h==="y"?"width":"height",M=["top","left"].includes(Wa(o)),L=s.reference[g]-s.floating[S]+(M&&((k=l.offset)==null?void 0:k[g])||0)+(M?0:T.crossAxis),B=s.reference[g]+s.reference[S]+(M?0:((w=l.offset)==null?void 0:w[g])||0)-(M?T.crossAxis:0);m<L?m=L:m>B&&(m=B)}return{[h]:F,[g]:m}}}};function N0(){return typeof window<"u"}function jt(e){return Ar(e)?(e.nodeName||"").toLowerCase():"#document"}function aa(e){var a;return(e==null||(a=e.ownerDocument)==null?void 0:a.defaultView)||window}function ba(e){var a;return(a=(Ar(e)?e.ownerDocument:e.document)||window.document)==null?void 0:a.documentElement}function Ar(e){return N0()?e instanceof Node||e instanceof aa(e).Node:!1}function _a(e){return N0()?e instanceof Element||e instanceof aa(e).Element:!1}function ma(e){return N0()?e instanceof HTMLElement||e instanceof aa(e).HTMLElement:!1}function Po(e){return!N0()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof aa(e).ShadowRoot}function _i(e){const{overflow:a,overflowX:i,overflowY:n,display:o}=da(e);return/auto|scroll|overlay|hidden|clip/.test(a+n+i)&&!["inline","contents"].includes(o)}function Ed(e){return["table","td","th"].includes(jt(e))}function x0(e){return[":popover-open",":modal"].some(a=>{try{return e.matches(a)}catch{return!1}})}function Xn(e){const a=eo(),i=_a(e)?da(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!a&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!a&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function kd(e){let a=$a(e);for(;ma(a)&&!St(a);){if(Xn(a))return a;if(x0(a))return null;a=$a(a)}return null}function eo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function St(e){return["html","body","#document"].includes(jt(e))}function da(e){return aa(e).getComputedStyle(e)}function M0(e){return _a(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $a(e){if(jt(e)==="html")return e;const a=e.assignedSlot||e.parentNode||Po(e)&&e.host||ba(e);return Po(a)?a.host:a}function wr(e){const a=$a(e);return St(a)?e.ownerDocument?e.ownerDocument.body:e.body:ma(a)&&_i(a)?a:wr(a)}function ii(e,a,i){var n;a===void 0&&(a=[]),i===void 0&&(i=!0);const o=wr(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),l=aa(o);if(s){const _=bn(l);return a.concat(l,l.visualViewport||[],_i(o)?o:[],_&&i?ii(_):[])}return a.concat(o,ii(o,[],i))}function bn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function vr(e){const a=da(e);let i=parseFloat(a.width)||0,n=parseFloat(a.height)||0;const o=ma(e),s=o?e.offsetWidth:i,l=o?e.offsetHeight:n,_=Gi(i)!==s||Gi(n)!==l;return _&&(i=s,n=l),{width:i,height:n,$:_}}function ao(e){return _a(e)?e:e.contextElement}function wt(e){const a=ao(e);if(!ma(a))return Va(1);const i=a.getBoundingClientRect(),{width:n,height:o,$:s}=vr(a);let l=(s?Gi(i.width):i.width)/n,_=(s?Gi(i.height):i.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!_||!Number.isFinite(_))&&(_=1),{x:l,y:_}}const Ad=Va(0);function Sr(e){const a=aa(e);return!eo()||!a.visualViewport?Ad:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function wd(e,a,i){return a===void 0&&(a=!1),!i||a&&i!==aa(e)?!1:a}function ht(e,a,i,n){a===void 0&&(a=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=ao(e);let l=Va(1);a&&(n?_a(n)&&(l=wt(n)):l=wt(e));const _=wd(s,i,n)?Sr(s):Va(0);let r=(o.left+_.x)/l.x,f=(o.top+_.y)/l.y,d=o.width/l.x,g=o.height/l.y;if(s){const h=aa(s),F=n&&_a(n)?aa(n):n;let m=h,p=bn(m);for(;p&&n&&F!==m;){const T=wt(p),k=p.getBoundingClientRect(),w=da(p),S=k.left+(p.clientLeft+parseFloat(w.paddingLeft))*T.x,M=k.top+(p.clientTop+parseFloat(w.paddingTop))*T.y;r*=T.x,f*=T.y,d*=T.x,g*=T.y,r+=S,f+=M,m=aa(p),p=bn(m)}}return zi({width:d,height:g,x:r,y:f})}function vd(e){let{elements:a,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",l=ba(n),_=a?x0(a.floating):!1;if(n===l||_&&s)return i;let r={scrollLeft:0,scrollTop:0},f=Va(1);const d=Va(0),g=ma(n);if((g||!g&&!s)&&((jt(n)!=="body"||_i(l))&&(r=M0(n)),ma(n))){const h=ht(n);f=wt(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:i.width*f.x,height:i.height*f.y,x:i.x*f.x-r.scrollLeft*f.x+d.x,y:i.y*f.y-r.scrollTop*f.y+d.y}}function Sd(e){return Array.from(e.getClientRects())}function Dn(e,a){const i=M0(e).scrollLeft;return a?a.left+i:ht(ba(e)).left+i}function Rd(e){const a=ba(e),i=M0(e),n=e.ownerDocument.body,o=lt(a.scrollWidth,a.clientWidth,n.scrollWidth,n.clientWidth),s=lt(a.scrollHeight,a.clientHeight,n.scrollHeight,n.clientHeight);let l=-i.scrollLeft+Dn(e);const _=-i.scrollTop;return da(n).direction==="rtl"&&(l+=lt(a.clientWidth,n.clientWidth)-o),{width:o,height:s,x:l,y:_}}function Cd(e,a){const i=aa(e),n=ba(e),o=i.visualViewport;let s=n.clientWidth,l=n.clientHeight,_=0,r=0;if(o){s=o.width,l=o.height;const f=eo();(!f||f&&a==="fixed")&&(_=o.offsetLeft,r=o.offsetTop)}return{width:s,height:l,x:_,y:r}}function Bd(e,a){const i=ht(e,!0,a==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=ma(e)?wt(e):Va(1),l=e.clientWidth*s.x,_=e.clientHeight*s.y,r=o*s.x,f=n*s.y;return{width:l,height:_,x:r,y:f}}function Go(e,a,i){let n;if(a==="viewport")n=Cd(e,i);else if(a==="document")n=Rd(ba(e));else if(_a(a))n=Bd(a,i);else{const o=Sr(e);n={...a,x:a.x-o.x,y:a.y-o.y}}return zi(n)}function Rr(e,a){const i=$a(e);return i===a||!_a(i)||St(i)?!1:da(i).position==="fixed"||Rr(i,a)}function Od(e,a){const i=a.get(e);if(i)return i;let n=ii(e,[],!1).filter(_=>_a(_)&&jt(_)!=="body"),o=null;const s=da(e).position==="fixed";let l=s?$a(e):e;for(;_a(l)&&!St(l);){const _=da(l),r=Xn(l);!r&&_.position==="fixed"&&(o=null),(s?!r&&!o:!r&&_.position==="static"&&o&&["absolute","fixed"].includes(o.position)||_i(l)&&!r&&Rr(e,l))?n=n.filter(f=>f!==l):o=_,l=$a(l)}return a.set(e,n),n}function Nd(e){let{element:a,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?x0(a)?[]:Od(a,this._c):[].concat(i),n],l=s[0],_=s.reduce((r,f)=>{const d=Go(a,f,o);return r.top=lt(d.top,r.top),r.right=Pi(d.right,r.right),r.bottom=Pi(d.bottom,r.bottom),r.left=lt(d.left,r.left),r},Go(a,l,o));return{width:_.right-_.left,height:_.bottom-_.top,x:_.left,y:_.top}}function xd(e){const{width:a,height:i}=vr(e);return{width:a,height:i}}function Md(e,a,i){const n=ma(a),o=ba(a),s=i==="fixed",l=ht(e,!0,s,a);let _={scrollLeft:0,scrollTop:0};const r=Va(0);if(n||!n&&!s)if((jt(a)!=="body"||_i(o))&&(_=M0(a)),n){const F=ht(a,!0,s,a);r.x=F.x+a.clientLeft,r.y=F.y+a.clientTop}else o&&(r.x=Dn(o));let f=0,d=0;if(o&&!n&&!s){const F=o.getBoundingClientRect();d=F.top+_.scrollTop,f=F.left+_.scrollLeft-Dn(o,F)}const g=l.left+_.scrollLeft-r.x-f,h=l.top+_.scrollTop-r.y-d;return{x:g,y:h,width:l.width,height:l.height}}function K0(e){return da(e).position==="static"}function Uo(e,a){if(!ma(e)||da(e).position==="fixed")return null;if(a)return a(e);let i=e.offsetParent;return ba(e)===i&&(i=i.ownerDocument.body),i}function Cr(e,a){const i=aa(e);if(x0(e))return i;if(!ma(e)){let o=$a(e);for(;o&&!St(o);){if(_a(o)&&!K0(o))return o;o=$a(o)}return i}let n=Uo(e,a);for(;n&&Ed(n)&&K0(n);)n=Uo(n,a);return n&&St(n)&&K0(n)&&!Xn(n)?i:n||kd(e)||i}const jd=async function(e){const a=this.getOffsetParent||Cr,i=this.getDimensions,n=await i(e.floating);return{reference:Md(e.reference,await a(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Yd(e){return da(e).direction==="rtl"}const qd={convertOffsetParentRelativeRectToViewportRelativeRect:vd,getDocumentElement:ba,getClippingRect:Nd,getOffsetParent:Cr,getElementRects:jd,getClientRects:Sd,getDimensions:xd,getScale:wt,isElement:_a,isRTL:Yd};function Ld(e,a){let i=null,n;const o=ba(e);function s(){var _;clearTimeout(n),(_=i)==null||_.disconnect(),i=null}function l(_,r){_===void 0&&(_=!1),r===void 0&&(r=1),s();const{left:f,top:d,width:g,height:h}=e.getBoundingClientRect();if(_||a(),!g||!h)return;const F=pi(d),m=pi(o.clientWidth-(f+g)),p=pi(o.clientHeight-(d+h)),T=pi(f),k={rootMargin:-F+"px "+-m+"px "+-p+"px "+-T+"px",threshold:lt(0,Pi(1,r))||1};let w=!0;function S(M){const L=M[0].intersectionRatio;if(L!==r){if(!w)return l();L?l(!1,L):n=setTimeout(()=>{l(!1,1e-7)},1e3)}w=!1}try{i=new IntersectionObserver(S,{...k,root:o.ownerDocument})}catch{i=new IntersectionObserver(S,k)}i.observe(e)}return l(!0),s}function Zd(e,a,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:_=typeof IntersectionObserver=="function",animationFrame:r=!1}=n,f=ao(e),d=o||s?[...f?ii(f):[],...ii(a)]:[];d.forEach(k=>{o&&k.addEventListener("scroll",i,{passive:!0}),s&&k.addEventListener("resize",i)});const g=f&&_?Ld(f,i):null;let h=-1,F=null;l&&(F=new ResizeObserver(k=>{let[w]=k;w&&w.target===f&&F&&(F.unobserve(a),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var S;(S=F)==null||S.observe(a)})),i()}),f&&!r&&F.observe(f),F.observe(a));let m,p=r?ht(e):null;r&&T();function T(){const k=ht(e);p&&(k.x!==p.x||k.y!==p.y||k.width!==p.width||k.height!==p.height)&&i(),p=k,m=requestAnimationFrame(T)}return i(),()=>{var k;d.forEach(w=>{o&&w.removeEventListener("scroll",i),s&&w.removeEventListener("resize",i)}),g?.(),(k=F)==null||k.disconnect(),F=null,r&&cancelAnimationFrame(m)}}const Id=Dd,Hd=Td,Pd=pd,Gd=yd,Ud=(e,a,i)=>{const n=new Map,o={platform:qd,...i},s={...o.platform,_c:n};return md(e,a,{...o,platform:s})},zd={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Vd=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Wd=[],$d=ie(zd,Vd,Wd,!1,null,null);const Br=$d.exports,Or=(e,a)=>{const i=[];let n=0,o=e.toLowerCase().indexOf(a.toLowerCase(),n),s=0;for(;o>-1&&s<e.length;)n=o+a.length,i.push({start:o,end:n}),o=e.toLowerCase().indexOf(a.toLowerCase(),n),s++;return i},Qd={name:"NcHighlight",props:{text:{type:String,default:""},search:{type:String,default:""},highlight:{type:Array,default:()=>[]}},computed:{ranges(){let e=[];return!this.search&&this.highlight.length===0||(this.highlight.length>0?e=this.highlight:e=Or(this.text,this.search),e.forEach((a,i)=>{a.end<a.start&&(e[i]={start:a.end,end:a.start})}),e=e.reduce((a,i)=>(i.start<this.text.length&&i.end>0&&a.push({start:i.start<0?0:i.start,end:i.end>this.text.length?this.text.length:i.end}),a),[]),e.sort((a,i)=>a.start-i.start),e=e.reduce((a,i)=>{if(!a.length)a.push(i);else{const n=a.length-1;a[n].end>=i.start?a[n]={start:a[n].start,end:Math.max(a[n].end,i.end)}:a.push(i)}return a},[])),e},chunks(){if(this.ranges.length===0)return[{start:0,end:this.text.length,highlight:!1,text:this.text}];const e=[];let a=0,i=0;for(;a<this.text.length;){const n=this.ranges[i];if(n.start===a){e.push({...n,highlight:!0,text:this.text.slice(n.start,n.end)}),i++,a=n.end,i>=this.ranges.length&&a<this.text.length&&(e.push({start:a,end:this.text.length,highlight:!1,text:this.text.slice(a)}),a=this.text.length);continue}e.push({start:a,end:n.start,highlight:!1,text:this.text.slice(a,n.start)}),a=n.start}return e}},render(e){return this.ranges.length?e("span",{},this.chunks.map(a=>a.highlight?e("strong",{},a.text):a.text)):e("span",{},this.text)}},Kd=null,Jd=null;var Xd=ie(Qd,Kd,Jd,!1,null,null);const j0=Xd.exports,ef={name:"NcEllipsisedOption",components:{NcHighlight:j0},props:{name:{type:String,default:""},search:{type:String,default:""}},computed:{needsTruncate(){return this.name&&this.name.length>=10},split(){return this.name.length-Math.min(Math.floor(this.name.length/2),10)},part1(){return this.needsTruncate?this.name.slice(0,this.split):this.name},part2(){return this.needsTruncate?this.name.slice(this.split):""},highlight1(){return this.search?Or(this.name,this.search):[]},highlight2(){return this.highlight1.map(e=>({start:e.start-this.split,end:e.end-this.split}))}}};var af=function(){var e=this,a=e._self._c;return a("span",{staticClass:"name-parts",attrs:{title:e.name}},[a("NcHighlight",{staticClass:"name-parts__first",attrs:{text:e.part1,search:e.search,highlight:e.highlight1}}),e.part2?a("NcHighlight",{staticClass:"name-parts__last",attrs:{text:e.part2,search:e.search,highlight:e.highlight2}}):e._e()],1)},tf=[],nf=ie(ef,af,tf,!1,null,"0c4478a6");const of=nf.exports,sf={name:"NcActionRouter",mixins:[fr],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}},props:{to:{type:[String,Object],default:"",required:!0},exact:{type:Boolean,default:!1}}};var rf=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("RouterLink",{staticClass:"action-router focusable",attrs:{to:e.to,"aria-label":e.ariaLabel,exact:e.exact,title:e.title,rel:"nofollow noreferrer noopener",role:e.isInSemanticMenu&&"menuitem"},nativeOn:{click:function(i){return e.onClick.apply(null,arguments)}}},[e._t("icon",function(){return[a("span",{staticClass:"action-router__icon",class:[e.isIconUrl?"action-router__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?"url(".concat(e.icon,")"):null},attrs:{"aria-hidden":"true"}})]}),e.name?a("span",{staticClass:"action-router__longtext-wrapper"},[a("strong",{staticClass:"action-router__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-router__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-router__text"},[e._v(e._s(e.text))]),e._e()],2)],1)},lf=[],_f=ie(sf,rf,lf,!1,null,"579c6b4d");const df=_f.exports,ff={name:"NcActionText",mixins:[fr],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}}};var gf=function(){var e=this,a=e._self._c;return a("li",{staticClass:"action",attrs:{role:e.isInSemanticMenu&&"presentation"}},[a("span",{staticClass:"action-text",on:{click:e.onClick}},[e._t("icon",function(){return[e.icon!==""?a("span",{staticClass:"action-text__icon",class:[e.isIconUrl?"action-text__icon--url":e.icon],style:{backgroundImage:e.isIconUrl?"url(".concat(e.icon,")"):null},attrs:{"aria-hidden":"true"}}):e._e()]}),e.name?a("span",{staticClass:"action-text__longtext-wrapper"},[a("strong",{staticClass:"action-text__name"},[e._v(" "+e._s(e.name)+" ")]),a("br"),a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}})]):e.isLongText?a("span",{staticClass:"action-text__longtext",domProps:{textContent:e._s(e.text)}}):a("span",{staticClass:"action-text__text"},[e._v(e._s(e.text))]),e._e()],2)])},hf=[],Ff=ie(ff,gf,hf,!1,null,"824615f4");const uf=Ff.exports,cf=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="var(--color-success)" d="M4.8 11.2h6.4V4.8H4.8v6.4zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
</svg>
`,zo=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4z" />
	<path fill="var(--color-warning)" d="M6.9.1C3 .6-.1 4-.1 8c0 4.4 3.6 8 8 8 4 0 7.4-3 8-6.9-1.2 1.3-2.9 2.1-4.7 2.1-3.5 0-6.4-2.9-6.4-6.4 0-1.9.8-3.6 2.1-4.7z" />
</svg>
`,mf=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path fill="var(--color-error)" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
	<path fill="#fdffff" d="M5 6.5h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5S4.2 6.5 5 6.5z" />
</svg>
`,Vo=`<!--
  - SPDX-FileCopyrightText: 2020 Google Inc.
  - SPDX-License-Identifier: Apache-2.0
-->
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
	<path fill="none" d="M-4-4h24v24H-4V-4z" />
	<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3.2c2.7 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8S3.2 10.7 3.2 8 5.3 3.2 8 3.2z" />
</svg>
`;oe(Vl);const Nr=e=>{switch(e){case"away":return N("away");case"busy":return N("busy");case"dnd":return N("do not disturb");case"online":return N("online");case"invisible":return N("invisible");case"offline":return N("offline");default:return e}};oe(Wl);const pf={name:"NcUserStatusIcon",props:{user:{type:String,default:null},status:{type:String,default:null,validator:e=>["online","away","busy","dnd","invisible","offline"].includes(e)},ariaHidden:{type:String,default:null,validator:e=>["true","false"].includes(e)}},data(){return{fetchedUserStatus:null}},computed:{activeStatus(){var e;return(e=this.status)!=null?e:this.fetchedUserStatus},activeSvg(){var e;return(e={online:cf,away:zo,busy:zo,dnd:mf,invisible:Vo,offline:Vo}[this.activeStatus])!=null?e:null},ariaLabel(){return this.ariaHidden==="true"?null:N("User status: {status}",{status:Nr(this.activeStatus)})}},watch:{user:{immediate:!0,async handler(e,a){var i,n,o,s;if(!e||!((n=(i=gr())==null?void 0:i.user_status)!=null&&n.enabled)){this.fetchedUserStatus=null;return}try{const{data:l}=await pa.get(Ua("/apps/user_status/api/v1/statuses/{user}",{user:e}));this.fetchedUserStatus=(s=(o=l.ocs)==null?void 0:o.data)==null?void 0:s.status}catch{this.fetchedUserStatus=null}}}}};var bf=function(){var e=this,a=e._self._c;return e.activeStatus?a("span",{staticClass:"user-status-icon",class:{"user-status-icon--invisible":["invisible","offline"].includes(e.status)},attrs:{role:"img","aria-hidden":e.ariaHidden,"aria-label":e.ariaLabel},domProps:{innerHTML:e._s(e.activeSvg)}}):e._e()},Df=[],Tf=ie(pf,bf,Df,!1,null,"0555d8d0");const xr=Tf.exports;oe($l);class ve{constructor(a,i,n,o){this.r=a,this.g=i,this.b=n,o&&(this.name=o)}get color(){const a=i=>"00".concat(i.toString(16)).slice(-2);return"#".concat(a(this.r)).concat(a(this.g)).concat(a(this.b))}}function yf(e,a){const i=new Array(3);return i[0]=(a[1].r-a[0].r)/e,i[1]=(a[1].g-a[0].g)/e,i[2]=(a[1].b-a[0].b)/e,i}function J0(e,a,i){const n=[];n.push(a);const o=yf(e,[a,i]);for(let s=1;s<e;s++){const l=Math.floor(a.r+o[0]*s),_=Math.floor(a.g+o[1]*s),r=Math.floor(a.b+o[2]*s);n.push(new ve(l,_,r))}return n}const Ef=[new ve(182,70,157,N("Purple")),new ve(191,103,139,N("Rosy brown")),new ve(201,136,121,N("Feldspar")),new ve(211,169,103,N("Whiskey")),new ve(221,203,85,N("Gold")),new ve(165,184,114,N("Olivine")),new ve(110,166,143,N("Acapulco")),new ve(55,148,172,N("Boston Blue")),new ve(0,130,201,N("Nextcloud blue")),new ve(45,115,190,N("Mariner")),new ve(91,100,179,N("Blue Violet")),new ve(136,85,168,N("Deluge"))];function kf(e){const a=new ve(182,70,157,N("Purple")),i=new ve(221,203,85,N("Gold")),n=new ve(0,130,201,N("Nextcloud blue")),o=J0(e,a,i),s=J0(e,i,n),l=J0(e,n,a);return o.concat(s).concat(l)}var Mr={exports:{}},jr={exports:{}};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(i,n){return i<<n|i>>>32-n},rotr:function(i,n){return i<<32-n|i>>>n},endian:function(i){if(i.constructor==Number)return a.rotl(i,8)&16711935|a.rotl(i,24)&4278255360;for(var n=0;n<i.length;n++)i[n]=a.endian(i[n]);return i},randomBytes:function(i){for(var n=[];i>0;i--)n.push(Math.floor(Math.random()*256));return n},bytesToWords:function(i){for(var n=[],o=0,s=0;o<i.length;o++,s+=8)n[s>>>5]|=i[o]<<24-s%32;return n},wordsToBytes:function(i){for(var n=[],o=0;o<i.length*32;o+=8)n.push(i[o>>>5]>>>24-o%32&255);return n},bytesToHex:function(i){for(var n=[],o=0;o<i.length;o++)n.push((i[o]>>>4).toString(16)),n.push((i[o]&15).toString(16));return n.join("")},hexToBytes:function(i){for(var n=[],o=0;o<i.length;o+=2)n.push(parseInt(i.substr(o,2),16));return n},bytesToBase64:function(i){for(var n=[],o=0;o<i.length;o+=3)for(var s=i[o]<<16|i[o+1]<<8|i[o+2],l=0;l<4;l++)o*8+l*6<=i.length*8?n.push(e.charAt(s>>>6*(3-l)&63)):n.push("=");return n.join("")},base64ToBytes:function(i){i=i.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],o=0,s=0;o<i.length;s=++o%4)s!=0&&n.push((e.indexOf(i.charAt(o-1))&Math.pow(2,-2*s+8)-1)<<s*2|e.indexOf(i.charAt(o))>>>6-s*2);return n}};jr.exports=a})();var Af=jr.exports,Tn={utf8:{stringToBytes:function(e){return Tn.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(Tn.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var a=[],i=0;i<e.length;i++)a.push(e.charCodeAt(i)&255);return a},bytesToString:function(e){for(var a=[],i=0;i<e.length;i++)a.push(String.fromCharCode(e[i]));return a.join("")}}},Wo=Tn,wf=function(e){return e!=null&&(Yr(e)||vf(e)||!!e._isBuffer)};function Yr(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function vf(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Yr(e.slice(0,0))}(function(){var e=Af,a=Wo.utf8,i=wf,n=Wo.bin,o=function(s,l){s.constructor==String?l&&l.encoding==="binary"?s=n.stringToBytes(s):s=a.stringToBytes(s):i(s)?s=Array.prototype.slice.call(s,0):!Array.isArray(s)&&s.constructor!==Uint8Array&&(s=s.toString());for(var _=e.bytesToWords(s),r=s.length*8,f=1732584193,d=-271733879,g=-1732584194,h=271733878,F=0;F<_.length;F++)_[F]=(_[F]<<8|_[F]>>>24)&16711935|(_[F]<<24|_[F]>>>8)&4278255360;_[r>>>5]|=128<<r%32,_[(r+64>>>9<<4)+14]=r;for(var m=o._ff,p=o._gg,T=o._hh,k=o._ii,F=0;F<_.length;F+=16){var w=f,S=d,M=g,L=h;f=m(f,d,g,h,_[F+0],7,-680876936),h=m(h,f,d,g,_[F+1],12,-389564586),g=m(g,h,f,d,_[F+2],17,606105819),d=m(d,g,h,f,_[F+3],22,-1044525330),f=m(f,d,g,h,_[F+4],7,-176418897),h=m(h,f,d,g,_[F+5],12,1200080426),g=m(g,h,f,d,_[F+6],17,-1473231341),d=m(d,g,h,f,_[F+7],22,-45705983),f=m(f,d,g,h,_[F+8],7,1770035416),h=m(h,f,d,g,_[F+9],12,-1958414417),g=m(g,h,f,d,_[F+10],17,-42063),d=m(d,g,h,f,_[F+11],22,-1990404162),f=m(f,d,g,h,_[F+12],7,1804603682),h=m(h,f,d,g,_[F+13],12,-40341101),g=m(g,h,f,d,_[F+14],17,-1502002290),d=m(d,g,h,f,_[F+15],22,1236535329),f=p(f,d,g,h,_[F+1],5,-165796510),h=p(h,f,d,g,_[F+6],9,-1069501632),g=p(g,h,f,d,_[F+11],14,643717713),d=p(d,g,h,f,_[F+0],20,-373897302),f=p(f,d,g,h,_[F+5],5,-701558691),h=p(h,f,d,g,_[F+10],9,38016083),g=p(g,h,f,d,_[F+15],14,-660478335),d=p(d,g,h,f,_[F+4],20,-405537848),f=p(f,d,g,h,_[F+9],5,568446438),h=p(h,f,d,g,_[F+14],9,-1019803690),g=p(g,h,f,d,_[F+3],14,-187363961),d=p(d,g,h,f,_[F+8],20,1163531501),f=p(f,d,g,h,_[F+13],5,-1444681467),h=p(h,f,d,g,_[F+2],9,-51403784),g=p(g,h,f,d,_[F+7],14,1735328473),d=p(d,g,h,f,_[F+12],20,-1926607734),f=T(f,d,g,h,_[F+5],4,-378558),h=T(h,f,d,g,_[F+8],11,-2022574463),g=T(g,h,f,d,_[F+11],16,1839030562),d=T(d,g,h,f,_[F+14],23,-35309556),f=T(f,d,g,h,_[F+1],4,-1530992060),h=T(h,f,d,g,_[F+4],11,1272893353),g=T(g,h,f,d,_[F+7],16,-155497632),d=T(d,g,h,f,_[F+10],23,-1094730640),f=T(f,d,g,h,_[F+13],4,681279174),h=T(h,f,d,g,_[F+0],11,-358537222),g=T(g,h,f,d,_[F+3],16,-722521979),d=T(d,g,h,f,_[F+6],23,76029189),f=T(f,d,g,h,_[F+9],4,-640364487),h=T(h,f,d,g,_[F+12],11,-421815835),g=T(g,h,f,d,_[F+15],16,530742520),d=T(d,g,h,f,_[F+2],23,-995338651),f=k(f,d,g,h,_[F+0],6,-198630844),h=k(h,f,d,g,_[F+7],10,1126891415),g=k(g,h,f,d,_[F+14],15,-1416354905),d=k(d,g,h,f,_[F+5],21,-57434055),f=k(f,d,g,h,_[F+12],6,1700485571),h=k(h,f,d,g,_[F+3],10,-1894986606),g=k(g,h,f,d,_[F+10],15,-1051523),d=k(d,g,h,f,_[F+1],21,-2054922799),f=k(f,d,g,h,_[F+8],6,1873313359),h=k(h,f,d,g,_[F+15],10,-30611744),g=k(g,h,f,d,_[F+6],15,-1560198380),d=k(d,g,h,f,_[F+13],21,1309151649),f=k(f,d,g,h,_[F+4],6,-145523070),h=k(h,f,d,g,_[F+11],10,-1120210379),g=k(g,h,f,d,_[F+2],15,718787259),d=k(d,g,h,f,_[F+9],21,-343485551),f=f+w>>>0,d=d+S>>>0,g=g+M>>>0,h=h+L>>>0}return e.endian([f,d,g,h])};o._ff=function(s,l,_,r,f,d,g){var h=s+(l&_|~l&r)+(f>>>0)+g;return(h<<d|h>>>32-d)+l},o._gg=function(s,l,_,r,f,d,g){var h=s+(l&r|_&~r)+(f>>>0)+g;return(h<<d|h>>>32-d)+l},o._hh=function(s,l,_,r,f,d,g){var h=s+(l^_^r)+(f>>>0)+g;return(h<<d|h>>>32-d)+l},o._ii=function(s,l,_,r,f,d,g){var h=s+(_^(l|~r))+(f>>>0)+g;return(h<<d|h>>>32-d)+l},o._blocksize=16,o._digestsize=16,Mr.exports=function(s,l){if(s==null)throw new Error("Illegal argument "+s);var _=e.wordsToBytes(o(s,l));return l&&l.asBytes?_:l&&l.asString?n.bytesToString(_):e.bytesToHex(_)}})();var Sf=Mr.exports;const Rf=Xs(Sf),$o=function(e){let a=e.toLowerCase();a.match(/^([0-9a-f]{4}-?){8}$/)===null&&(a=Rf(a)),a=a.replace(/[^0-9a-f]/g,"");const i=6,n=kf(i);function o(s,l){let _=0;const r=[];for(let f=0;f<s.length;f++)r.push(parseInt(s.charAt(f),16)%16);for(const f in r)_+=r[f];return parseInt(parseInt(_,10)%l,10)}return n[o(a,i*3)]},to=(e,a,i)=>{const n=window.getComputedStyle(document.body).getPropertyValue("--background-invert-if-dark")==="invert(100%)";return er("/avatar"+(i?"/guest":"")+"/{user}/{size}"+(n?"/dark":""),{user:e,size:a})},Cf="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",Bf="ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",Rt=(e,a)=>{for(const i in a)e[i]=a[i];return e},yn="numeric",En="ascii",kn="alpha",Bi="asciinumeric",bi="alphanumeric",An="domain",qr="emoji",Of="scheme",Nf="slashscheme",Qo="whitespace";function xf(e,a){return e in a||(a[e]=[]),a[e]}function it(e,a,i){a[yn]&&(a[Bi]=!0,a[bi]=!0),a[En]&&(a[Bi]=!0,a[kn]=!0),a[Bi]&&(a[bi]=!0),a[kn]&&(a[bi]=!0),a[bi]&&(a[An]=!0),a[qr]&&(a[An]=!0);for(const n in a){const o=xf(n,i);o.indexOf(e)<0&&o.push(e)}}function Mf(e,a){const i={};for(const n in a)a[n].indexOf(e)>=0&&(i[n]=!0);return i}function Xe(e){e===void 0&&(e=null),this.j={},this.jr=[],this.jd=null,this.t=e}Xe.groups={},Xe.prototype={accepts(){return!!this.t},go(e){const a=this,i=a.j[e];if(i)return i;for(let n=0;n<a.jr.length;n++){const o=a.jr[n][0],s=a.jr[n][1];if(s&&o.test(e))return s}return a.jd},has(e,a){return a===void 0&&(a=!1),a?e in this.j:!!this.go(e)},ta(e,a,i,n){for(let o=0;o<e.length;o++)this.tt(e[o],a,i,n)},tr(e,a,i,n){n=n||Xe.groups;let o;return a&&a.j?o=a:(o=new Xe(a),i&&n&&it(a,i,n)),this.jr.push([e,o]),o},ts(e,a,i,n){let o=this;const s=e.length;if(!s)return o;for(let l=0;l<s-1;l++)o=o.tt(e[l]);return o.tt(e[s-1],a,i,n)},tt(e,a,i,n){n=n||Xe.groups;const o=this;if(a&&a.j)return o.j[e]=a,a;const s=a;let l,_=o.go(e);if(_?(l=new Xe,Rt(l.j,_.j),l.jr.push.apply(l.jr,_.jr),l.jd=_.jd,l.t=_.t):l=new Xe,s){if(n)if(l.t&&typeof l.t=="string"){const r=Rt(Mf(l.t,n),i);it(s,r,n)}else i&&it(s,i,n);l.t=s}return o.j[e]=l,l}};const re=(e,a,i,n,o)=>e.ta(a,i,n,o),ta=(e,a,i,n,o)=>e.tr(a,i,n,o),Ko=(e,a,i,n,o)=>e.ts(a,i,n,o),I=(e,a,i,n,o)=>e.tt(a,i,n,o),ya="WORD",wn="UWORD",ni="LOCALHOST",vn="TLD",Sn="UTLD",Oi="SCHEME",Dt="SLASH_SCHEME",io="NUM",Lr="WS",no="NL",Pt="OPENBRACE",Gt="CLOSEBRACE",Vi="OPENBRACKET",Wi="CLOSEBRACKET",$i="OPENPAREN",Qi="CLOSEPAREN",Ki="OPENANGLEBRACKET",Ji="CLOSEANGLEBRACKET",Xi="FULLWIDTHLEFTPAREN",e0="FULLWIDTHRIGHTPAREN",a0="LEFTCORNERBRACKET",t0="RIGHTCORNERBRACKET",i0="LEFTWHITECORNERBRACKET",n0="RIGHTWHITECORNERBRACKET",o0="FULLWIDTHLESSTHAN",s0="FULLWIDTHGREATERTHAN",r0="AMPERSAND",l0="APOSTROPHE",_0="ASTERISK",xa="AT",d0="BACKSLASH",f0="BACKTICK",g0="CARET",Ya="COLON",oo="COMMA",h0="DOLLAR",ga="DOT",F0="EQUALS",so="EXCLAMATION",ha="HYPHEN",u0="PERCENT",c0="PIPE",m0="PLUS",p0="POUND",b0="QUERY",ro="QUOTE",lo="SEMI",Fa="SLASH",Ut="TILDE",D0="UNDERSCORE",Zr="EMOJI",T0="SYM";var Ir=Object.freeze({__proto__:null,WORD:ya,UWORD:wn,LOCALHOST:ni,TLD:vn,UTLD:Sn,SCHEME:Oi,SLASH_SCHEME:Dt,NUM:io,WS:Lr,NL:no,OPENBRACE:Pt,CLOSEBRACE:Gt,OPENBRACKET:Vi,CLOSEBRACKET:Wi,OPENPAREN:$i,CLOSEPAREN:Qi,OPENANGLEBRACKET:Ki,CLOSEANGLEBRACKET:Ji,FULLWIDTHLEFTPAREN:Xi,FULLWIDTHRIGHTPAREN:e0,LEFTCORNERBRACKET:a0,RIGHTCORNERBRACKET:t0,LEFTWHITECORNERBRACKET:i0,RIGHTWHITECORNERBRACKET:n0,FULLWIDTHLESSTHAN:o0,FULLWIDTHGREATERTHAN:s0,AMPERSAND:r0,APOSTROPHE:l0,ASTERISK:_0,AT:xa,BACKSLASH:d0,BACKTICK:f0,CARET:g0,COLON:Ya,COMMA:oo,DOLLAR:h0,DOT:ga,EQUALS:F0,EXCLAMATION:so,HYPHEN:ha,PERCENT:u0,PIPE:c0,PLUS:m0,POUND:p0,QUERY:b0,QUOTE:ro,SEMI:lo,SLASH:Fa,TILDE:Ut,UNDERSCORE:D0,EMOJI:Zr,SYM:T0});const pt=/[a-z]/,X0=new RegExp("\\p{L}","u"),en=new RegExp("\\p{Emoji}","u"),an=/\d/,Jo=/\s/,Xo=`
`,jf="️",Yf="‍";let Di=null,Ti=null;function qf(e){e===void 0&&(e=[]);const a={};Xe.groups=a;const i=new Xe;Di==null&&(Di=es(Cf)),Ti==null&&(Ti=es(Bf)),I(i,"'",l0),I(i,"{",Pt),I(i,"}",Gt),I(i,"[",Vi),I(i,"]",Wi),I(i,"(",$i),I(i,")",Qi),I(i,"<",Ki),I(i,">",Ji),I(i,"（",Xi),I(i,"）",e0),I(i,"「",a0),I(i,"」",t0),I(i,"『",i0),I(i,"』",n0),I(i,"＜",o0),I(i,"＞",s0),I(i,"&",r0),I(i,"*",_0),I(i,"@",xa),I(i,"`",f0),I(i,"^",g0),I(i,":",Ya),I(i,",",oo),I(i,"$",h0),I(i,".",ga),I(i,"=",F0),I(i,"!",so),I(i,"-",ha),I(i,"%",u0),I(i,"|",c0),I(i,"+",m0),I(i,"#",p0),I(i,"?",b0),I(i,'"',ro),I(i,"/",Fa),I(i,";",lo),I(i,"~",Ut),I(i,"_",D0),I(i,"\\",d0);const n=ta(i,an,io,{[yn]:!0});ta(n,an,n);const o=ta(i,pt,ya,{[En]:!0});ta(o,pt,o);const s=ta(i,X0,wn,{[kn]:!0});ta(s,pt),ta(s,X0,s);const l=ta(i,Jo,Lr,{[Qo]:!0});I(i,Xo,no,{[Qo]:!0}),I(l,Xo),ta(l,Jo,l);const _=ta(i,en,Zr,{[qr]:!0});ta(_,en,_),I(_,jf,_);const r=I(_,Yf);ta(r,en,_);const f=[[pt,o]],d=[[pt,null],[X0,s]];for(let g=0;g<Di.length;g++)Ba(i,Di[g],vn,ya,f);for(let g=0;g<Ti.length;g++)Ba(i,Ti[g],Sn,wn,d);it(vn,{tld:!0,ascii:!0},a),it(Sn,{utld:!0,alpha:!0},a),Ba(i,"file",Oi,ya,f),Ba(i,"mailto",Oi,ya,f),Ba(i,"http",Dt,ya,f),Ba(i,"https",Dt,ya,f),Ba(i,"ftp",Dt,ya,f),Ba(i,"ftps",Dt,ya,f),it(Oi,{scheme:!0,ascii:!0},a),it(Dt,{slashscheme:!0,ascii:!0},a),e=e.sort((g,h)=>g[0]>h[0]?1:-1);for(let g=0;g<e.length;g++){const h=e[g][0],F=e[g][1]?{[Of]:!0}:{[Nf]:!0};h.indexOf("-")>=0?F[An]=!0:pt.test(h)?an.test(h)?F[Bi]=!0:F[En]=!0:F[yn]=!0,Ko(i,h,h,F)}return Ko(i,"localhost",ni,{ascii:!0}),i.jd=new Xe(T0),{start:i,tokens:Rt({groups:a},Ir)}}function Lf(e,a){const i=Zf(a.replace(/[A-Z]/g,_=>_.toLowerCase())),n=i.length,o=[];let s=0,l=0;for(;l<n;){let _=e,r=null,f=0,d=null,g=-1,h=-1;for(;l<n&&(r=_.go(i[l]));)_=r,_.accepts()?(g=0,h=0,d=_):g>=0&&(g+=i[l].length,h++),f+=i[l].length,s+=i[l].length,l++;s-=g,l-=h,f-=g,o.push({t:d.t,v:a.slice(s-f,s),s:s-f,e:s})}return o}function Zf(e){const a=[],i=e.length;let n=0;for(;n<i;){let o=e.charCodeAt(n),s,l=o<55296||o>56319||n+1===i||(s=e.charCodeAt(n+1))<56320||s>57343?e[n]:e.slice(n,n+2);a.push(l),n+=l.length}return a}function Ba(e,a,i,n,o){let s;const l=a.length;for(let _=0;_<l-1;_++){const r=a[_];e.j[r]?s=e.j[r]:(s=new Xe(n),s.jr=o.slice(),e.j[r]=s),e=s}return s=new Xe(i),s.jr=o.slice(),e.j[a[l-1]]=s,s}function es(e){const a=[],i=[];let n=0,o="0123456789";for(;n<e.length;){let s=0;for(;o.indexOf(e[n+s])>=0;)s++;if(s>0){a.push(i.join(""));for(let l=parseInt(e.substring(n,n+s),10);l>0;l--)i.pop();n+=s}else i.push(e[n]),n++}return a}const oi={defaultProtocol:"http",events:null,format:as,formatHref:as,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:1/0,className:null,attributes:null,ignoreTags:[],render:null};function _o(e,a){a===void 0&&(a=null);let i=Rt({},oi);e&&(i=Rt(i,e instanceof _o?e.o:e));const n=i.ignoreTags,o=[];for(let s=0;s<n.length;s++)o.push(n[s].toUpperCase());this.o=i,a&&(this.defaultRender=a),this.ignoreTags=o}_o.prototype={o:oi,ignoreTags:[],defaultRender(e){return e},check(e){return this.get("validate",e.toString(),e)},get(e,a,i){const n=a!=null;let o=this.o[e];return o&&(typeof o=="object"?(o=i.t in o?o[i.t]:oi[e],typeof o=="function"&&n&&(o=o(a,i))):typeof o=="function"&&n&&(o=o(a,i.t,i)),o)},getObj(e,a,i){let n=this.o[e];return typeof n=="function"&&a!=null&&(n=n(a,i.t,i)),n},render(e){const a=e.render(this);return(this.get("render",null,e)||this.defaultRender)(a,e.t,e)}};function as(e){return e}function Hr(e,a){this.t="token",this.v=e,this.tk=a}Hr.prototype={isLink:!1,toString(){return this.v},toHref(e){return this.toString()},toFormattedString(e){const a=this.toString(),i=e.get("truncate",a,this),n=e.get("format",a,this);return i&&n.length>i?n.substring(0,i)+"…":n},toFormattedHref(e){return e.get("formatHref",this.toHref(e.get("defaultProtocol")),this)},startIndex(){return this.tk[0].s},endIndex(){return this.tk[this.tk.length-1].e},toObject(e){return e===void 0&&(e=oi.defaultProtocol),{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}},toFormattedObject(e){return{type:this.t,value:this.toFormattedString(e),isLink:this.isLink,href:this.toFormattedHref(e),start:this.startIndex(),end:this.endIndex()}},validate(e){return e.get("validate",this.toString(),this)},render(e){const a=this,i=this.toHref(e.get("defaultProtocol")),n=e.get("formatHref",i,this),o=e.get("tagName",i,a),s=this.toFormattedString(e),l={},_=e.get("className",i,a),r=e.get("target",i,a),f=e.get("rel",i,a),d=e.getObj("attributes",i,a),g=e.getObj("events",i,a);return l.href=n,_&&(l.class=_),r&&(l.target=r),f&&(l.rel=f),d&&Rt(l,d),{tagName:o,attributes:l,content:s,eventListeners:g}}};function Y0(e,a){class i extends Hr{constructor(o,s){super(o,s),this.t=e}}for(const n in a)i.prototype[n]=a[n];return i.t=e,i}const ts=Y0("email",{isLink:!0,toHref(){return"mailto:"+this.toString()}}),is=Y0("text"),If=Y0("nl"),yi=Y0("url",{isLink:!0,toHref(e){return e===void 0&&(e=oi.defaultProtocol),this.hasProtocol()?this.v:`${e}://${this.v}`},hasProtocol(){const e=this.tk;return e.length>=2&&e[0].t!==ni&&e[1].t===Ya}}),ia=e=>new Xe(e);function Hf(e){let{groups:a}=e;const i=a.domain.concat([r0,_0,xa,d0,f0,g0,h0,F0,ha,io,u0,c0,m0,p0,Fa,T0,Ut,D0]),n=[l0,Ya,oo,ga,so,b0,ro,lo,Ki,Ji,Pt,Gt,Wi,Vi,$i,Qi,Xi,e0,a0,t0,i0,n0,o0,s0],o=[r0,l0,_0,d0,f0,g0,h0,F0,ha,Pt,Gt,u0,c0,m0,p0,b0,Fa,T0,Ut,D0],s=ia(),l=I(s,Ut);re(l,o,l),re(l,a.domain,l);const _=ia(),r=ia(),f=ia();re(s,a.domain,_),re(s,a.scheme,r),re(s,a.slashscheme,f),re(_,o,l),re(_,a.domain,_);const d=I(_,xa);I(l,xa,d),I(r,xa,d),I(f,xa,d);const g=I(l,ga);re(g,o,l),re(g,a.domain,l);const h=ia();re(d,a.domain,h),re(h,a.domain,h);const F=I(h,ga);re(F,a.domain,h);const m=ia(ts);re(F,a.tld,m),re(F,a.utld,m),I(d,ni,m);const p=I(h,ha);re(p,a.domain,h),re(m,a.domain,h),I(m,ga,F),I(m,ha,p);const T=I(m,Ya);re(T,a.numeric,ts);const k=I(_,ha),w=I(_,ga);re(k,a.domain,_),re(w,o,l),re(w,a.domain,_);const S=ia(yi);re(w,a.tld,S),re(w,a.utld,S),re(S,a.domain,_),re(S,o,l),I(S,ga,w),I(S,ha,k),I(S,xa,d);const M=I(S,Ya),L=ia(yi);re(M,a.numeric,L);const B=ia(yi),P=ia();re(B,i,B),re(B,n,P),re(P,i,B),re(P,n,P),I(S,Fa,B),I(L,Fa,B);const z=I(r,Ya),Z=I(f,Ya),c=I(Z,Fa),v=I(c,Fa);re(r,a.domain,_),I(r,ga,w),I(r,ha,k),re(f,a.domain,_),I(f,ga,w),I(f,ha,k),re(z,a.domain,B),I(z,Fa,B),re(v,a.domain,B),re(v,i,B),I(v,Fa,B);const R=[[Pt,Gt],[Vi,Wi],[$i,Qi],[Ki,Ji],[Xi,e0],[a0,t0],[i0,n0],[o0,s0]];for(let O=0;O<R.length;O++){const[U,Y]=R[O],te=I(B,U);I(P,U,te),I(te,Y,B);const ee=ia(yi);re(te,i,ee);const fe=ia();re(te,n),re(ee,i,ee),re(ee,n,fe),re(fe,i,ee),re(fe,n,fe),I(ee,Y,B),I(fe,Y,B)}return I(s,ni,S),I(s,no,If),{start:s,tokens:Ir}}function Pf(e,a,i){let n=i.length,o=0,s=[],l=[];for(;o<n;){let _=e,r=null,f=null,d=0,g=null,h=-1;for(;o<n&&!(r=_.go(i[o].t));)l.push(i[o++]);for(;o<n&&(f=r||_.go(i[o].t));)r=null,_=f,_.accepts()?(h=0,g=_):h>=0&&h++,o++,d++;if(h<0)o-=d,o<n&&(l.push(i[o]),o++);else{l.length>0&&(s.push(tn(is,a,l)),l=[]),o-=h,d-=h;const F=g.t,m=i.slice(o-d,o);s.push(tn(F,a,m))}}return l.length>0&&s.push(tn(is,a,l)),s}function tn(e,a,i){const n=i[0].s,o=i[i.length-1].e,s=a.slice(n,o);return new e(s,i)}const Ue={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:!1};function Gf(){Ue.scanner=qf(Ue.customSchemes);for(let e=0;e<Ue.tokenQueue.length;e++)Ue.tokenQueue[e][1]({scanner:Ue.scanner});Ue.parser=Hf(Ue.scanner.tokens);for(let e=0;e<Ue.pluginQueue.length;e++)Ue.pluginQueue[e][1]({scanner:Ue.scanner,parser:Ue.parser});Ue.initialized=!0}function Uf(e){return Ue.initialized||Gf(),Pf(Ue.parser.start,e,Lf(Ue.scanner.start,e))}function Pr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zf(e){return e.replace(/"/g,"&quot;")}function Vf(e){const a=[];for(const i in e){let n=e[i]+"";a.push(`${i}="${zf(n)}"`)}return a.join(" ")}function Wf(e){let{tagName:a,attributes:i,content:n}=e;return`<${a} ${Vf(i)}>${Pr(n)}</${a}>`}function $f(e,a){a===void 0&&(a={}),a=new _o(a,Wf);const i=Uf(e),n=[];for(let o=0;o<i.length;o++){const s=i[o];s.t==="nl"&&a.get("nl2br")?n.push(`<br>
`):!s.isLink||!a.check(s)?n.push(Pr(s.toString())):n.push(a.render(s))}return n.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(e){return $f(this,e)}});var Gr={exports:{}};(function(e){(function(a){if(typeof i!="function"){var i=function(m){return m};i.nonNative=!0}const n=i("plaintext"),o=i("html"),s=i("comment"),l=/<(\w*)>/g,_=/<\/?([^\s\/>]+)/;function r(m,p,T){m=m||"",p=p||[],T=T||"";let k=d(p,T);return g(m,k)}function f(m,p){m=m||[],p=p||"";let T=d(m,p);return function(k){return g(k||"",T)}}r.init_streaming_mode=f;function d(m,p){return m=h(m),{allowable_tags:m,tag_replacement:p,state:n,tag_buffer:"",depth:0,in_quote_char:""}}function g(m,p){if(typeof m!="string")throw new TypeError("'html' parameter must be a string");let T=p.allowable_tags,k=p.tag_replacement,w=p.state,S=p.tag_buffer,M=p.depth,L=p.in_quote_char,B="";for(let P=0,z=m.length;P<z;P++){let Z=m[P];if(w===n)switch(Z){case"<":w=o,S+=Z;break;default:B+=Z;break}else if(w===o)switch(Z){case"<":if(L)break;M++;break;case">":if(L)break;if(M){M--;break}L="",w=n,S+=">",T.has(F(S))?B+=S:B+=k,S="";break;case'"':case"'":Z===L?L="":L=L||Z,S+=Z;break;case"-":S==="<!-"&&(w=s),S+=Z;break;case" ":case`
`:if(S==="<"){w=n,B+="< ",S="";break}S+=Z;break;default:S+=Z;break}else if(w===s)switch(Z){case">":S.slice(-2)=="--"&&(w=n),S="";break;default:S+=Z;break}}return p.state=w,p.tag_buffer=S,p.depth=M,p.in_quote_char=L,B}function h(m){let p=new Set;if(typeof m=="string"){let T;for(;T=l.exec(m);)p.add(T[1])}else!i.nonNative&&typeof m[i.iterator]=="function"?p=new Set(m):typeof m.forEach=="function"&&m.forEach(p.add,p);return p}function F(m){let p=_.exec(m);return p?p[1].toLowerCase():null}e.exports?e.exports=r:a.striptags=r})(Ma)})(Gr);var Qf=Gr.exports;const X2=Xs(Qf),fo=(e,a)=>{const i=(d,g)=>d.startsWith(g)?d.slice(g.length):d,n=(d,...g)=>g.reduce((h,F)=>i(h,F),d);if(!e)return null;const o=/^https?:\/\//.test(a),s=/^[a-z][a-z0-9+.-]*:.+/.test(a);if(!o&&s||o&&!a.startsWith(vo())||!o&&!a.startsWith("/"))return null;const l=o?n(a,vo(),"/index.php"):a,_=n(e.history.base,Ql(),"/index.php"),r=n(l,_)||"/",f=e.resolve(r).route;return f.matched.length?f.fullPath:null};za.util.warn;function Lt(e){var a;const i=Ht(e);return(a=i?.$el)!=null?a:i}const Ur=Xl?window:void 0;function Ni(...e){let a,i,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,n,o]=e,a=Ur):[a,i,n,o]=e,!a)return Si;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const s=[],l=()=>{s.forEach(d=>d()),s.length=0},_=(d,g,h,F)=>(d.addEventListener(g,h,F),()=>d.removeEventListener(g,h,F)),r=Ln(()=>[Lt(a),Ht(o)],([d,g])=>{if(l(),!d)return;const h=Kl(g)?{...g}:g;s.push(...i.flatMap(F=>n.map(m=>_(d,F,m,h))))},{immediate:!0,flush:"post"}),f=()=>{r(),l()};return ar(f),f}let ns=!1;function os(e,a,i={}){const{window:n=Ur,ignore:o=[],capture:s=!0,detectIframe:l=!1}=i;if(!n)return Si;Fn&&!ns&&(ns=!0,Array.from(n.document.body.children).forEach(d=>d.addEventListener("click",Si)),n.document.documentElement.addEventListener("click",Si));let _=!0;const r=d=>o.some(g=>{if(typeof g=="string")return Array.from(n.document.querySelectorAll(g)).some(h=>h===d.target||d.composedPath().includes(h));{const h=Lt(g);return h&&(d.target===h||d.composedPath().includes(h))}}),f=[Ni(n,"click",d=>{const g=Lt(e);if(!(!g||g===d.target||d.composedPath().includes(g))){if(d.detail===0&&(_=!r(d)),!_){_=!0;return}a(d)}},{passive:!0,capture:s}),Ni(n,"pointerdown",d=>{const g=Lt(e);_=!r(d)&&!!(g&&!d.composedPath().includes(g))},{passive:!0}),l&&Ni(n,"blur",d=>{setTimeout(()=>{var g;const h=Lt(e);((g=n.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!h?.contains(n.document.activeElement)&&a(d)},0)})].filter(Boolean);return()=>f.forEach(d=>d())}const Kf={[So.mounted](e,a){const i=!a.modifiers.bubble;if(typeof a.value=="function")e.__onClickOutside_stop=os(e,a.value,{capture:i});else{const[n,o]=a.value;e.__onClickOutside_stop=os(e,n,Object.assign({capture:i},o))}},[So.unmounted](e){e.__onClickOutside_stop()}};function nn(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function zr(e){const a=window.getComputedStyle(e);if(a.overflowX==="scroll"||a.overflowY==="scroll"||a.overflowX==="auto"&&e.clientWidth<e.scrollWidth||a.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const i=e.parentNode;return!i||i.tagName==="BODY"?!1:zr(i)}}function Jf(e){const a=e||window.event,i=a.target;return zr(i)?!1:a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)}const on=new WeakMap;function Xf(e,a=!1){const i=ot(a);let n=null,o="";Ln(Jl(e),_=>{const r=nn(Ht(_));if(r){const f=r;if(on.get(f)||on.set(f,f.style.overflow),f.style.overflow!=="hidden"&&(o=f.style.overflow),f.style.overflow==="hidden")return i.value=!0;if(i.value)return f.style.overflow="hidden"}},{immediate:!0});const s=()=>{const _=nn(Ht(e));!_||i.value||(Fn&&(n=Ni(_,"touchmove",r=>{Jf(r)},{passive:!1})),_.style.overflow="hidden",i.value=!0)},l=()=>{const _=nn(Ht(e));!_||!i.value||(Fn&&n?.(),_.style.overflow=o,on.delete(_),i.value=!1)};return ar(l),Oa({get(){return i.value},set(_){_?s():l()}})}function eg(){let e=!1;const a=ot(!1);return(i,n)=>{if(a.value=n.value,e)return;e=!0;const o=Xf(i,n.value);Ln(a,s=>o.value=s)}}eg();const Vr={data(){return{hasStatus:!1,userStatus:{status:null,message:null,icon:null}}},methods:{async fetchUserStatus(e){var a,i;if(!e)return;const n=gr();if(!(!Object.prototype.hasOwnProperty.call(n,"user_status")||!n.user_status.enabled)&&un())try{const{data:o}=await pa.get(Ua("apps/user_status/api/v1/statuses/{userId}",{userId:e})),{status:s,message:l,icon:_}=o.ocs.data;this.userStatus.status=s,this.userStatus.message=l||"",this.userStatus.icon=_||"",this.hasStatus=!0}catch(o){if(o.response.status===404&&((i=(a=o.response.data.ocs)==null?void 0:a.data)==null?void 0:i.length)===0)return;console.error(o)}}}};oe(e1);const Wr=Zn("nextcloud").persist().build();function ag(e){const a=Wr.getItem("user-has-avatar."+e);return typeof a=="string"?!!a:null}function ss(e,a){e&&Wr.setItem("user-has-avatar."+e,a)}const tg={name:"NcAvatar",directives:{ClickOutside:Kf},components:{DotsHorizontal:In,NcActions:tr,NcButton:Ka,NcIconSvgWrapper:Hn,NcLoadingIcon:C0,NcUserStatusIcon:xr},mixins:[Vr],props:{url:{type:String,default:void 0},iconClass:{type:String,default:void 0},user:{type:String,default:void 0},showUserStatus:{type:Boolean,default:!0},showUserStatusCompact:{type:Boolean,default:!0},preloadedUserStatus:{type:Object,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},menuContainer:{type:[String,Object,Element,Boolean],default:"body"}},data(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuLoading:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{avatarAriaLabel(){var e,a;if(this.hasMenu)return this.canDisplayUserStatus||this.showUserStatusIconOnAvatar?N("Avatar of {displayName}, {status}",{displayName:(e=this.displayName)!=null?e:this.user,status:Nr(this.userStatus.status)}):N("Avatar of {displayName}",{displayName:(a=this.displayName)!=null?a:this.user})},canDisplayUserStatus(){return this.showUserStatus&&this.hasStatus&&["online","away","busy","dnd"].includes(this.userStatus.status)},showUserStatusIconOnAvatar(){return this.showUserStatus&&this.showUserStatusCompact&&this.hasStatus&&this.userStatus.status!=="dnd"&&this.userStatus.icon},userIdentifier(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined(){return typeof this.user<"u"},isDisplayNameDefined(){return typeof this.displayName<"u"},isUrlDefined(){return typeof this.url<"u"},hasMenu(){var e;return this.disableMenu?!1:this.isMenuLoaded?this.menu.length>0:!(this.user===((e=un())==null?void 0:e.uid)||this.userDoesNotExist||this.url)},showInitials(){return this.allowPlaceholder&&this.userDoesNotExist&&!(this.iconClass||this.$slots.icon)},avatarStyle(){return{"--size":this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(this.size*.45)+"px"}},initialsWrapperStyle(){const{r:e,g:a,b:i}=$o(this.userIdentifier);return{backgroundColor:"rgba(".concat(e,", ").concat(a,", ").concat(i,", 0.1)")}},initialsStyle(){const{r:e,g:a,b:i}=$o(this.userIdentifier);return{color:"rgb(".concat(e,", ").concat(a,", ").concat(i,")")}},tooltip(){return this.disableTooltip?!1:this.tooltipMessage?this.tooltipMessage:this.displayName},initials(){let e="?";if(this.showInitials){const a=this.userIdentifier.trim();if(a==="")return e;const i=a.match(/[\p{L}\p{N}\s]/gu);if(i==null)return e;const n=i.join(""),o=n.lastIndexOf(" ");e=String.fromCodePoint(n.codePointAt(0)),o!==-1&&(e=e.concat(String.fromCodePoint(n.codePointAt(o+1))))}return e.toLocaleUpperCase()},menu(){const e=this.contactsMenuActions.map(i=>{const n=fo(this.$router,i.hyperlink);return{ncActionComponent:n?df:i_,ncActionComponentProps:n?{to:n,icon:i.icon}:{href:i.hyperlink,icon:i.icon},text:i.title}});function a(i){const n=document.createTextNode(i),o=document.createElement("p");return o.appendChild(n),o.innerHTML}if(this.showUserStatus&&(this.userStatus.icon||this.userStatus.message)){const i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<text x="50%" y="50%" text-anchor="middle" style="dominant-baseline: central; font-size: 85%">`.concat(a(this.userStatus.icon),`</text>
				</svg>`);return[{ncActionComponent:uf,ncActionComponentProps:{},iconSvg:this.userStatus.icon?i:void 0,text:"".concat(this.userStatus.message)}].concat(e)}return e}},watch:{url(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted(){this.loadAvatarUrl(),U0("settings:avatar:updated",this.loadAvatarUrl),U0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&(this.preloadedUserStatus?(this.userStatus.status=this.preloadedUserStatus.status||"",this.userStatus.message=this.preloadedUserStatus.message||"",this.userStatus.icon=this.preloadedUserStatus.icon||"",this.hasStatus=this.preloadedUserStatus.status!==null):this.fetchUserStatus(this.user),U0("user_status:status.updated",this.handleUserStatusUpdated))},beforeDestroy(){z0("settings:avatar:updated",this.loadAvatarUrl),z0("settings:display-name:updated",this.loadAvatarUrl),this.showUserStatus&&this.user&&!this.isNoUser&&z0("user_status:status.updated",this.handleUserStatusUpdated)},methods:{t:N,handleUserStatusUpdated(e){this.user===e.userId&&(this.userStatus={status:e.status,icon:e.icon,message:e.message})},async toggleMenu(e){e.type==="keydown"&&e.key!=="Enter"||(this.contactsMenuOpenState||await this.fetchContactsMenu(),this.contactsMenuOpenState=!this.contactsMenuOpenState)},closeMenu(){this.contactsMenuOpenState=!1},async fetchContactsMenu(){this.contactsMenuLoading=!0;try{const e=encodeURIComponent(this.user),{data:a}=await pa.post(er("contactsmenu/findOne"),"shareType=0&shareWith=".concat(e));this.contactsMenuActions=a.topAction?[a.topAction].concat(a.actions):a.actions}catch{this.contactsMenuOpenState=!1}this.contactsMenuLoading=!1,this.isMenuLoaded=!0},loadAvatarUrl(){if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser)){this.isAvatarLoaded=!0,this.userDoesNotExist=!0;return}if(this.isUrlDefined){this.updateImageIfValid(this.url);return}if(this.size<=64){const e=this.avatarUrlGenerator(this.user,64),a=[e+" 1x",this.avatarUrlGenerator(this.user,512)+" 8x"].join(", ");this.updateImageIfValid(e,a)}else{const e=this.avatarUrlGenerator(this.user,512);this.updateImageIfValid(e)}},avatarUrlGenerator(e,a){var i;let n=to(e,a,this.isGuest);return e===((i=un())==null?void 0:i.uid)&&typeof oc_userconfig<"u"&&(n+="?v="+oc_userconfig.avatar.version),n},updateImageIfValid(e,a=null){const i=ag(this.user);if(this.isUserDefined&&typeof i=="boolean"){this.isAvatarLoaded=!0,this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),i===!1&&(this.userDoesNotExist=!0);return}const n=new Image;n.onload=()=>{this.avatarUrlLoaded=e,a&&(this.avatarSrcSetLoaded=a),this.isAvatarLoaded=!0,ss(this.user,!0)},n.onerror=()=>{console.debug("Invalid avatar url",e),this.avatarUrlLoaded=null,this.avatarSrcSetLoaded=null,this.userDoesNotExist=!0,this.isAvatarLoaded=!1,ss(this.user,!1)},a&&(n.srcset=a),n.src=e}}};var ig=function(){var e=this,a=e._self._c;return a("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeMenu,expression:"closeMenu"}],ref:"main",staticClass:"avatardiv popovermenu-wrapper",class:{"avatardiv--unknown":e.userDoesNotExist,"avatardiv--with-menu":e.hasMenu,"avatardiv--with-menu-loading":e.contactsMenuLoading},style:e.avatarStyle},[e._t("icon",function(){return[e.iconClass?a("span",{staticClass:"avatar-class-icon",class:e.iconClass}):e.isAvatarLoaded&&!e.userDoesNotExist?a("img",{attrs:{src:e.avatarUrlLoaded,srcset:e.avatarSrcSetLoaded,alt:""}}):e._e()]}),e.hasMenu&&e.menu.length===0?a("NcButton",{staticClass:"action-item action-item__menutoggle",attrs:{type:"tertiary-no-background","aria-label":e.avatarAriaLabel,title:e.tooltip},on:{click:e.toggleMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[e.contactsMenuLoading?a("NcLoadingIcon"):a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,2617833509)}):e.hasMenu?a("NcActions",{attrs:{"force-menu":"","manual-open":"",type:"tertiary-no-background",container:e.menuContainer,open:e.contactsMenuOpenState,"aria-label":e.avatarAriaLabel,title:e.tooltip},on:{"update:open":function(i){e.contactsMenuOpenState=i},click:e.toggleMenu},scopedSlots:e._u([e.contactsMenuLoading?{key:"icon",fn:function(){return[a("NcLoadingIcon")]},proxy:!0}:null],null,!0)},e._l(e.menu,function(i,n){return a(i.ncActionComponent,e._b({key:n,tag:"component",scopedSlots:e._u([i.iconSvg?{key:"icon",fn:function(){return[a("NcIconSvgWrapper",{attrs:{svg:i.iconSvg}})]},proxy:!0}:null],null,!0)},"component",i.ncActionComponentProps,!1),[e._v(" "+e._s(i.text)+" ")])}),1):e._e(),e.showUserStatusIconOnAvatar?a("span",{staticClass:"avatardiv__user-status avatardiv__user-status--icon"},[e._v(" "+e._s(e.userStatus.icon)+" ")]):e.canDisplayUserStatus?a("NcUserStatusIcon",{staticClass:"avatardiv__user-status",attrs:{status:e.userStatus.status,"aria-hidden":String(e.hasMenu)}}):e._e(),e.showInitials?a("span",{staticClass:"avatardiv__initials-wrapper",style:e.initialsWrapperStyle},[a("span",{staticClass:"avatardiv__initials",style:e.initialsStyle},[e._v(" "+e._s(e.initials)+" ")])]):e._e()],2)},ng=[],og=ie(tg,ig,ng,!1,null,"9ce7ef1d");const $r=og.exports,sg=8,rs=32,rg={name:"NcListItemIcon",components:{NcAvatar:$r,NcHighlight:j0,NcIconSvgWrapper:Hn},mixins:[Vr],props:{name:{type:String,required:!0},subname:{type:String,default:""},icon:{type:String,default:""},iconSvg:{type:String,default:""},iconName:{type:String,default:""},search:{type:String,default:""},avatarSize:{type:Number,default:rs},noMargin:{type:Boolean,default:!1},displayName:{type:String,default:null},isNoUser:{type:Boolean,default:!1},id:{type:String,default:null}},setup(){return{margin:sg,defaultSize:rs}},computed:{hasIcon(){return this.icon!==""},hasIconSvg(){return this.iconSvg!==""},isValidSubname(){var e,a;return((a=(e=this.subname)==null?void 0:e.trim)==null?void 0:a.call(e))!==""},isSizeBigEnough(){return this.avatarSize>=26},cssVars(){const e=this.noMargin?0:this.margin;return{"--height":this.avatarSize+2*e+"px","--margin":this.margin+"px"}},searchParts(){const e=/^([^<]*)<([^>]+)>?$/,a=this.search.match(e);return this.isNoUser||!a?[this.search,this.search]:[a[1].trim(),a[2]]}},beforeMount(){!this.isNoUser&&!this.subname&&this.fetchUserStatus(this.user)}};var lg=function(){var e=this,a=e._self._c;return a("span",e._g({staticClass:"option",class:{"option--compact":e.avatarSize<e.defaultSize},style:e.cssVars,attrs:{id:e.id}},e.$listeners),[a("NcAvatar",e._b({staticClass:"option__avatar",attrs:{"disable-menu":!0,"disable-tooltip":!0,"display-name":e.displayName||e.name,"is-no-user":e.isNoUser,size:e.avatarSize}},"NcAvatar",e.$attrs,!1)),a("div",{staticClass:"option__details"},[a("NcHighlight",{staticClass:"option__lineone",attrs:{text:e.name,search:e.searchParts[0]}}),e.isValidSubname&&e.isSizeBigEnough?a("NcHighlight",{staticClass:"option__linetwo",attrs:{text:e.subname,search:e.searchParts[1]}}):e.hasStatus?a("span",[a("span",[e._v(e._s(e.userStatus.icon))]),a("span",[e._v(e._s(e.userStatus.message))])]):e._e()],1),e._t("default",function(){return[e.hasIconSvg?a("NcIconSvgWrapper",{staticClass:"option__icon",attrs:{svg:e.iconSvg,name:e.iconName}}):e.hasIcon?a("span",{staticClass:"icon option__icon",class:e.icon,attrs:{"aria-label":e.iconName}}):e._e()]})],2)},_g=[],dg=ie(rg,lg,_g,!1,null,"a0f4d73a");const fg=dg.exports;oe(a1);const gg={name:"NcSelect",components:{ChevronDown:Br,NcEllipsisedOption:of,NcListItemIcon:fg,NcLoadingIcon:C0,VueSelect:et.VueSelect},props:{...et.VueSelect.props,...et.VueSelect.mixins.reduce((e,a)=>({...e,...a.props}),{}),ariaLabelClearSelected:{type:String,default:N("Clear selected")},ariaLabelCombobox:{type:String,default:null},ariaLabelListbox:{type:String,default:N("Options")},ariaLabelDeselectOption:{type:Function,default:e=>N("Deselect {option}",{option:e})},appendToBody:{type:Boolean,default:!0},calculatePosition:{type:Function,default:null},closeOnSelect:{type:Boolean,default:!0},components:{type:Object,default:()=>({Deselect:{render:e=>e(Pn,{props:{size:20,fillColor:"var(--vs-controls-color)"},style:{cursor:"pointer"}})}})},limit:{type:Number,default:null},disabled:{type:Boolean,default:!1},dropdownShouldOpen:{type:Function,default:({noDrop:e,open:a})=>e?!1:a},filterBy:{type:Function,default:null},inputClass:{type:[String,Object],default:null},inputId:{type:String,default:()=>"select-input-".concat(dt())},inputLabel:{type:String,default:null},labelOutside:{type:Boolean,default:!1},keyboardFocusBorder:{type:Boolean,default:!0},label:{type:String,default:null},loading:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},mapKeydown:{type:Function,default(e,a){return{...e,27:i=>{a.open&&i.stopPropagation(),e[27](i)}}}},uid:{type:String,default:()=>dt()},placement:{type:String,default:"bottom"},resetFocusOnOptionsChange:{type:Boolean,default:!0},userSelect:{type:Boolean,default:!1},value:{type:[String,Number,Object,Array],default:null},required:{type:Boolean,default:!1}," ":{}},emits:[" "],setup(){const e=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-clickable-area")),a=Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--default-grid-baseline"));return{avatarSize:e-2*a}},data(){return{search:""}},computed:{inputRequired(){return this.required?this.value===null||Array.isArray(this.value)&&this.value.length===0:null},localCalculatePosition(){return this.calculatePosition!==null?this.calculatePosition:(e,a,{width:i})=>{e.style.width=i;const n={name:"addClass",fn(l){return e.classList.add("vs__dropdown-menu--floating"),{}}},o={name:"togglePlacementClass",fn({placement:l}){return a.$el.classList.toggle("select--drop-up",l==="top"),e.classList.toggle("vs__dropdown-menu--floating-placement-top",l==="top"),{}}},s=()=>{Ud(a.$refs.toggle,e,{placement:this.placement,middleware:[Id(-1),n,o,Pd(),Hd({limiter:Gd()})]}).then(({x:l,y:_})=>{Object.assign(e.style,{left:"".concat(l,"px"),top:"".concat(_,"px"),width:"".concat(a.$refs.toggle.getBoundingClientRect().width,"px")})})};return Zd(a.$refs.toggle,e,s)}},localFilterBy(){const e=/[^<]*<([^>]+)/;return this.filterBy!==null?this.filterBy:this.userSelect?(a,i,n)=>{var o,s,l;const _=n.match(e);return _&&((l=(s=(o=a.subname)==null?void 0:o.toLocaleLowerCase)==null?void 0:s.call(o))==null?void 0:l.indexOf(_[1].toLocaleLowerCase()))>-1||"".concat(i," ").concat(a.subname).toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}:et.VueSelect.props.filterBy.default},localLabel(){return this.label!==null?this.label:this.userSelect?"displayName":et.VueSelect.props.label.default},propsToForward(){const e=[...Object.keys(et.VueSelect.props),...et.VueSelect.mixins.flatMap(a=>{var i;return Object.keys((i=a.props)!=null?i:{})})];return{...Object.fromEntries(Object.entries(this.$props).filter(([a,i])=>e.includes(a))),calculatePosition:this.localCalculatePosition,filterBy:this.localFilterBy,label:this.localLabel}}},mounted(){!this.labelOutside&&!this.inputLabel&&!this.ariaLabelCombobox&&za.util.warn("[NcSelect] An `inputLabel` or `ariaLabelCombobox` should be set. If an external label is used, `labelOutside` should be set to `true`."),this.inputLabel&&this.ariaLabelCombobox&&za.util.warn("[NcSelect] Only one of `inputLabel` or `ariaLabelCombobox` should to be set.")},methods:{t:N}};var hg=function(){var e=this,a=e._self._c;return a("VueSelect",e._g(e._b({staticClass:"select",class:{"select--no-wrap":e.noWrap,"user-select":e.userSelect},on:{search:i=>e.search=i},scopedSlots:e._u([!e.labelOutside&&e.inputLabel?{key:"header",fn:function(){return[a("label",{staticClass:"select__label",attrs:{for:e.inputId}},[e._v(" "+e._s(e.inputLabel)+" ")])]},proxy:!0}:null,{key:"search",fn:function({attributes:i,events:n}){return[a("input",e._g(e._b({class:["vs__search",e.inputClass],attrs:{required:e.inputRequired}},"input",i,!1),n))]}},{key:"open-indicator",fn:function({attributes:i}){return[a("ChevronDown",e._b({style:{cursor:e.disabled?null:"pointer"},attrs:{"fill-color":"var(--vs-controls-color)",size:26}},"ChevronDown",i,!1))]}},{key:"option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":32,name:i[e.localLabel],search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"selected-option",fn:function(i){return[e.userSelect?a("NcListItemIcon",e._b({attrs:{"avatar-size":e.avatarSize,name:i[e.localLabel],"no-margin":"",search:e.search}},"NcListItemIcon",i,!1)):a("NcEllipsisedOption",{attrs:{name:String(i[e.localLabel]),search:e.search}})]}},{key:"spinner",fn:function(i){return[i.loading?a("NcLoadingIcon"):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.t("No results"))+" ")]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"VueSelect",e.propsToForward,!1),e.$listeners))},Fg=[],ug=ie(gg,hg,Fg,!1,null,null);const q0=ug.exports;oe(t1);function cg(e=[],a=[]){const i={},n=[];for(const o of e){const s=o.split("/");let[l,_]=[s.shift(),s.join("/")];_||(_=l,l=N("Global")),i[l]=i[l]||{continent:l,regions:[]},i[l].regions.push({label:Qr(_),cities:[],timezoneId:o})}for(const o of a){const{continent:s,label:l,timezoneId:_}=o;i[s]=i[s]||{continent:s,regions:[]},i[s].regions.push({label:l,cities:[],timezoneId:_})}for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&(i[o].regions.sort((s,l)=>s.label<l.label?-1:1),n.push(i[o]));return n.sort((o,s)=>o.continent<s.continent?-1:1),n}function Qr(e){return e.split("_").join(" ").replace("St ","St. ").split("/").join(" - ")}const ls=ld();let _s=!1;function mg(){return _s||(ls.registerDefaultTimezones(),_s=!0),ls}oe(i1);const pg={name:"NcTimezonePicker",components:{NcSelect:q0},props:{additionalTimezones:{type:Array,default:()=>[]},value:{type:String,default:"floating"},uid:{type:[String,Number],default:()=>"tz-".concat(dt(5))}},emits:["input"],computed:{placeholder(){return N("Type to search time zone")},selectedTimezone(){for(const e of this.additionalTimezones)if(e.timezoneId===this.value)return e;return{label:Qr(this.value),timezoneId:this.value}},options(){const e=mg(),a=cg(e.listAllTimezones(),this.additionalTimezones);let i=[];return Object.values(a).forEach(n=>{i=i.concat(n.regions)}),i}},methods:{t:N,change(e){e&&this.$emit("input",e.timezoneId)},isSelectable(e){return!e.timezoneId.startsWith("tz-group__")},filterBy(e,a,i){const n=i.trim().split(" ");return e.timezoneId.startsWith("tz-group__")?e.regions.some(o=>this.matchTimezoneId(o.timezoneId,n)):this.matchTimezoneId(e.timezoneId,n)},matchTimezoneId(e,a){return a.every(i=>e.toLowerCase().includes(i.toLowerCase()))}}};var bg=function(){var e=this,a=e._self._c;return a("NcSelect",{attrs:{"aria-label-combobox":e.t("Search for time zone"),clearable:!1,"filter-by":e.filterBy,multiple:!1,options:e.options,placeholder:e.placeholder,selectable:e.isSelectable,uid:e.uid,value:e.selectedTimezone,label:"label"},on:{"option:selected":e.change}})},Dg=[],Tg=ie(pg,bg,Dg,!1,null,null);const yg=Tg.exports;function Kr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function L0(e){return Kr(e)?new Date(e.getTime()):e==null?new Date(NaN):new Date(e)}function Eg(e){return Kr(e)&&!isNaN(e.getTime())}function Jr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var i=L0(e),n=i.getDay(),o=(n+7-a)%7;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Xr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o;if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7");for(var l=L0(e),_=l.getFullYear(),r=new Date(0),f=_+1;f>=_-1&&(r.setFullYear(f,0,s),r.setHours(0,0,0,0),r=Jr(r,n),!(l.getTime()>=r.getTime()));f--);return r}function go(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.firstDayOfWeek,n=i===void 0?0:i,o=a.firstWeekContainsDate,s=o===void 0?1:o,l=L0(e),_=Jr(l,n),r=Xr(l,{firstDayOfWeek:n,firstWeekContainsDate:s}),f=_.getTime()-r.getTime();return Math.round(f/(7*24*3600*1e3))+1}var el={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},kg=/\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;function Je(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i="".concat(Math.abs(e)),n=e<0?"-":"";i.length<a;)i="0".concat(i);return n+i}function ds(e){return Math.round(e.getTimezoneOffset()/15)*15}function fs(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=e>0?"-":"+",n=Math.abs(e),o=Math.floor(n/60),s=n%60;return i+Je(o,2)+a+Je(s,2)}var gs=function(e,a,i){var n=e<12?"AM":"PM";return i?n.toLocaleLowerCase():n},zt={Y:function(e){var a=e.getFullYear();return a<=9999?"".concat(a):"+".concat(a)},YY:function(e){return Je(e.getFullYear(),4).substr(2)},YYYY:function(e){return Je(e.getFullYear(),4)},M:function(e){return e.getMonth()+1},MM:function(e){return Je(e.getMonth()+1,2)},MMM:function(e,a){return a.monthsShort[e.getMonth()]},MMMM:function(e,a){return a.months[e.getMonth()]},D:function(e){return e.getDate()},DD:function(e){return Je(e.getDate(),2)},H:function(e){return e.getHours()},HH:function(e){return Je(e.getHours(),2)},h:function(e){var a=e.getHours();return a===0?12:a>12?a%12:a},hh:function(){var e=zt.h.apply(zt,arguments);return Je(e,2)},m:function(e){return e.getMinutes()},mm:function(e){return Je(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return Je(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return Je(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return Je(e.getMilliseconds(),3)},d:function(e){return e.getDay()},dd:function(e,a){return a.weekdaysMin[e.getDay()]},ddd:function(e,a){return a.weekdaysShort[e.getDay()]},dddd:function(e,a){return a.weekdays[e.getDay()]},A:function(e,a){var i=a.meridiem||gs;return i(e.getHours(),e.getMinutes(),!1)},a:function(e,a){var i=a.meridiem||gs;return i(e.getHours(),e.getMinutes(),!0)},Z:function(e){return fs(ds(e),":")},ZZ:function(e){return fs(ds(e))},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()},w:function(e,a){return go(e,{firstDayOfWeek:a.firstDayOfWeek,firstWeekContainsDate:a.firstWeekContainsDate})},ww:function(e,a){return Je(zt.w(e,a),2)}};function Z0(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a?String(a):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=L0(e);if(!Eg(o))return"Invalid Date";var s=i.locale||el;return n.replace(kg,function(l,_){return _||(typeof zt[l]=="function"?"".concat(zt[l](o,s)):l)})}function hs(e){return vg(e)||wg(e)||Ag()}function Ag(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function wg(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function vg(e){if(Array.isArray(e)){for(var a=0,i=new Array(e.length);a<e.length;a++)i[a]=e[a];return i}}function Fs(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function Sg(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Fs(i,!0).forEach(function(n){qa(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Fs(i).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Rg(e,a){return Og(e)||Bg(e,a)||Cg()}function Cg(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Bg(e,a){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]"){var i=[],n=!0,o=!1,s=void 0;try{for(var l=e[Symbol.iterator](),_;!(n=(_=l.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(r){o=!0,s=r}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw s}}return i}}function Og(e){if(Array.isArray(e))return e}function qa(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}var Ng=/(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g,al=/\d/,Na=/\d\d/,xg=/\d{3}/,Mg=/\d{4}/,Tt=/\d\d?/,jg=/[+-]\d\d:?\d\d/,tl=/[+-]?\d+/,Yg=/[+-]?\d+(\.\d{1,3})?/,sn="year",Ei="month",us="day",cs="hour",ms="minute",ps="second",rn="millisecond",il={},ue=function(e,a,i){var n=Array.isArray(e)?e:[e],o;typeof i=="string"?o=function(s){var l=parseInt(s,10);return qa({},i,l)}:o=i,n.forEach(function(s){il[s]=[a,o]})},qg=function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},Vt=function(e){return function(a){var i=a[e];if(!Array.isArray(i))throw new Error("Locale[".concat(e,"] need an array"));return new RegExp(i.map(qg).join("|"))}},Wt=function(e,a){return function(i,n){var o=n[e];if(!Array.isArray(o))throw new Error("Locale[".concat(e,"] need an array"));var s=o.indexOf(i);if(s<0)throw new Error("Invalid Word");return qa({},a,s)}};ue("Y",tl,sn),ue("YY",Na,function(e){var a=new Date().getFullYear(),i=Math.floor(a/100),n=parseInt(e,10);return n=(n>68?i-1:i)*100+n,qa({},sn,n)}),ue("YYYY",Mg,sn),ue("M",Tt,function(e){return qa({},Ei,parseInt(e,10)-1)}),ue("MM",Na,function(e){return qa({},Ei,parseInt(e,10)-1)}),ue("MMM",Vt("monthsShort"),Wt("monthsShort",Ei)),ue("MMMM",Vt("months"),Wt("months",Ei)),ue("D",Tt,us),ue("DD",Na,us),ue(["H","h"],Tt,cs),ue(["HH","hh"],Na,cs),ue("m",Tt,ms),ue("mm",Na,ms),ue("s",Tt,ps),ue("ss",Na,ps),ue("S",al,function(e){return qa({},rn,parseInt(e,10)*100)}),ue("SS",Na,function(e){return qa({},rn,parseInt(e,10)*10)}),ue("SSS",xg,rn);function Lg(e){return e.meridiemParse||/[ap]\.?m?\.?/i}function Zg(e){return"".concat(e).toLowerCase().charAt(0)==="p"}ue(["A","a"],Lg,function(e,a){var i=typeof a.isPM=="function"?a.isPM(e):Zg(e);return{isPM:i}});function Ig(e){var a=e.match(/([+-]|\d\d)/g)||["-","0","0"],i=Rg(a,3),n=i[0],o=i[1],s=i[2],l=parseInt(o,10)*60+parseInt(s,10);return l===0?0:n==="+"?-l:+l}ue(["Z","ZZ"],jg,function(e){return{offset:Ig(e)}}),ue("x",tl,function(e){return{date:new Date(parseInt(e,10))}}),ue("X",Yg,function(e){return{date:new Date(parseFloat(e)*1e3)}}),ue("d",al,"weekday"),ue("dd",Vt("weekdaysMin"),Wt("weekdaysMin","weekday")),ue("ddd",Vt("weekdaysShort"),Wt("weekdaysShort","weekday")),ue("dddd",Vt("weekdays"),Wt("weekdays","weekday")),ue("w",Tt,"week"),ue("ww",Na,"week");function Hg(e,a){if(e!==void 0&&a!==void 0){if(a){if(e<12)return e+12}else if(e===12)return 0}return e}function Pg(e){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Date,i=[0,0,1,0,0,0,0],n=[a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()],o=!0,s=0;s<7;s++)e[s]===void 0?i[s]=o?n[s]:i[s]:(i[s]=e[s],o=!1);return i}function Gg(e,a,i,n,o,s,l){var _;return e<100&&e>=0?(_=new Date(e+400,a,i,n,o,s,l),isFinite(_.getFullYear())&&_.setFullYear(e)):_=new Date(e,a,i,n,o,s,l),_}function Ug(){for(var e,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];var o=i[0];return o<100&&o>=0?(i[0]+=400,e=new Date(Date.UTC.apply(Date,i)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(o)):e=new Date(Date.UTC.apply(Date,i)),e}function zg(e,a,i){var n=a.match(Ng);if(!n)throw new Error;for(var o=n.length,s={},l=0;l<o;l+=1){var _=n[l],r=il[_];if(r){var f=typeof r[0]=="function"?r[0](i):r[0],d=r[1],g=(f.exec(e)||[])[0],h=d(g,i);s=Sg({},s,{},h),e=e.replace(g,"")}else{var F=_.replace(/^\[|\]$/g,"");if(e.indexOf(F)===0)e=e.substr(F.length);else throw new Error("not match")}}return s}function Vg(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};try{var n=i.locale,o=n===void 0?el:n,s=i.backupDate,l=s===void 0?new Date:s,_=zg(e,a,o),r=_.year,f=_.month,d=_.day,g=_.hour,h=_.minute,F=_.second,m=_.millisecond,p=_.isPM,T=_.date,k=_.offset,w=_.weekday,S=_.week;if(T)return T;var M=[r,f,d,g,h,F,m];if(M[3]=Hg(M[3],p),S!==void 0&&f===void 0&&d===void 0){var L=Xr(r===void 0?l:new Date(r,3),{firstDayOfWeek:o.firstDayOfWeek,firstWeekContainsDate:o.firstWeekContainsDate});return new Date(L.getTime()+(S-1)*7*24*3600*1e3)}var B,P=Pg(M,l);return k!==void 0?(P[6]+=k*60*1e3,B=Ug.apply(void 0,hs(P))):B=Gg.apply(void 0,hs(P)),w!==void 0&&B.getDay()!==w?new Date(NaN):B}catch{return new Date(NaN)}}function xi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xi=function(a){return typeof a}:xi=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xi(e)}function nt(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function Rn(){return Rn=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Rn.apply(this,arguments)}function bs(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function De(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?bs(Object(i),!0).forEach(function(n){nt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):bs(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Wg(e,a){if(e==null)return{};var i={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(i[o]=e[o]);return i}function $g(e,a){if(e==null)return{};var i=Wg(e,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function $t(e,a){return Qg(e)||Kg(e,a)||Jg(e,a)||Xg()}function Qg(e){if(Array.isArray(e))return e}function Kg(e,a){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],n=!0,o=!1,s=void 0;try{for(var l=e[Symbol.iterator](),_;!(n=(_=l.next()).done)&&(i.push(_.value),!(a&&i.length===a));n=!0);}catch(r){o=!0,s=r}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw s}}return i}}function Jg(e,a){if(e){if(typeof e=="string")return Ds(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ds(e,a)}}function Ds(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,n=new Array(a);i<a;i++)n[i]=e[i];return n}function Xg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(){return Cn=Object.assign||function(e){for(var a,i=1;i<arguments.length;i++)for(var n in a=arguments[i],a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},Cn.apply(this,arguments)}var eh=["attrs","props","domProps"],ah=["class","style","directives"],th=["on","nativeOn"],ih=function(e){return e.reduce(function(a,i){for(var n in i)if(!a[n])a[n]=i[n];else if(eh.indexOf(n)!==-1)a[n]=Cn({},a[n],i[n]);else if(ah.indexOf(n)!==-1){var o=a[n]instanceof Array?a[n]:[a[n]],s=i[n]instanceof Array?i[n]:[i[n]];a[n]=o.concat(s)}else if(th.indexOf(n)!==-1)for(var l in i[n])if(a[n][l]){var _=a[n][l]instanceof Array?a[n][l]:[a[n][l]],r=i[n][l]instanceof Array?i[n][l]:[i[n][l]];a[n][l]=_.concat(r)}else a[n][l]=i[n][l];else if(n=="hook")for(var f in i[n])a[n][f]=a[n][f]?nh(a[n][f],i[n][f]):i[n][f];else a[n]=i[n];return a},{})},nh=function(e,a){return function(){e&&e.apply(this,arguments),a&&a.apply(this,arguments)}},si=ih;function Aa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,_=new Date(e,a,i,n,o,s,l);return e<100&&e>=0&&_.setFullYear(e),_}function wa(e){return e instanceof Date&&!isNaN(e)}function I0(e){return Array.isArray(e)&&e.length===2&&e.every(wa)&&e[0]<=e[1]}function oh(e){return Array.isArray(e)&&e.every(wa)}function Ct(e){var a=new Date(e);if(wa(a))return a;for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return n.length?Ct.apply(void 0,n):new Date}function sh(e){var a=new Date(e);return a.setMonth(0,1),a.setHours(0,0,0,0),a}function Bn(e){var a=new Date(e);return a.setDate(1),a.setHours(0,0,0,0),a}function rh(e){var a=new Date(e);return a.setHours(0,0,0,0),a}function lh(e){for(var a=e.firstDayOfWeek,i=e.year,n=e.month,o=[],s=Aa(i,n,0),l=s.getDate(),_=l-(s.getDay()+7-a)%7,r=_;r<=l;r++)o.push(Aa(i,n,r-l));s.setMonth(n+1,0);for(var f=s.getDate(),d=1;d<=f;d++)o.push(Aa(i,n,d));for(var g=l-_+1,h=6*7-g-f,F=1;F<=h;F++)o.push(Aa(i,n,f+F));return o}function On(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getMonth()):Number(a),o=i.getFullYear(),s=Aa(o,n+1,0).getDate(),l=i.getDate();return i.setMonth(n,Math.min(l,s)),i}function Bt(e,a){var i=new Date(e),n=typeof a=="function"?a(i.getFullYear()):a;return i.setFullYear(n),i}function y0(e,a){var i=new Date(e),n=new Date(a);return i.setHours(n.getHours(),n.getMinutes(),n.getSeconds()),i}function ho(e,a){if(!Array.isArray(e))return[];var i=[],n=e.length,o=0;for(a=a||n;o<n;)i.push(e.slice(o,o+=a));return i}function ca(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ot(e,a){if(!ca(e))return{};Array.isArray(a)||(a=[a]);var i={};return a.forEach(function(n){n in e&&(i[n]=e[n])}),i}function nl(e,a){if(!ca(e))return{};var i=e;return ca(a)&&Object.keys(a).forEach(function(n){var o=a[n];ca(o)&&ca(e[n])&&(o=nl(e[n],o)),i=De({},i,nt({},n,o))}),i}function _h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dh(e,a){return a={exports:{}},e(a,a.exports),a.exports}var fh=dh(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},n=i;a.default=n,e.exports=a.default}),gh=_h(fh),hh={formatLocale:gh,yearFormat:"YYYY",monthFormat:"MMM",monthBeforeYear:!0},Zt="en",yt={};yt[Zt]=hh;function ol(e,a,i){if(typeof e!="string")return yt[Zt];var n=Zt;return yt[e]&&(n=e),a&&(yt[e]=a,n=e),i||(Zt=n),yt[e]||yt[Zt]}function Nt(e){return ol(e,null,!0)}function Fh(e){var a=!1;return function(){for(var i=this,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];a||(a=!0,requestAnimationFrame(function(){a=!1,e.apply(i,o)}))}}function uh(e){var a=e.style.display,i=e.style.visibility;e.style.display="block",e.style.visibility="hidden";var n=window.getComputedStyle(e),o=e.offsetWidth+parseInt(n.marginLeft,10)+parseInt(n.marginRight,10),s=e.offsetHeight+parseInt(n.marginTop,10)+parseInt(n.marginBottom,10);return e.style.display=a,e.style.visibility=i,{width:o,height:s}}function ch(e,a,i,n){var o=0,s=0,l=0,_=0,r=e.getBoundingClientRect(),f=document.documentElement.clientWidth,d=document.documentElement.clientHeight;return n&&(l=window.pageXOffset+r.left,_=window.pageYOffset+r.top),f-r.left<a&&r.right<a?o=l-r.left+1:r.left+r.width/2<=f/2?o=l:o=l+r.width-a,r.top<=i&&d-r.bottom<=i?s=_+d-r.top-i:r.top+r.height/2<=d/2?s=_+r.height:s=_-i,{left:"".concat(o,"px"),top:"".concat(s,"px")}}function H0(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;if(!e||e===a)return null;var i=function(s,l){return getComputedStyle(s,null).getPropertyValue(l)},n=/(auto|scroll)/,o=n.test(i(e,"overflow")+i(e,"overflow-y")+i(e,"overflow-x"));return o?e:H0(e.parentNode,a)}var mh={name:"Popup",inject:{prefixClass:{default:"mx"}},props:{visible:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!0}},data:function(){return{top:"",left:""}},watch:{visible:{immediate:!0,handler:function(e){var a=this;this.$nextTick(function(){e&&a.displayPopup()})}}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this._clickoutEvent="ontouchend"in document?"touchstart":"mousedown",document.addEventListener(this._clickoutEvent,this.handleClickOutside);var a=this.$parent.$el;this._displayPopup=Fh(function(){return e.displayPopup()}),this._scrollParent=H0(a)||window,this._scrollParent.addEventListener("scroll",this._displayPopup),window.addEventListener("resize",this._displayPopup)},beforeDestroy:function(){this.appendToBody&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),document.removeEventListener(this._clickoutEvent,this.handleClickOutside),this._scrollParent.removeEventListener("scroll",this._displayPopup),window.removeEventListener("resize",this._displayPopup)},methods:{handleClickOutside:function(e){if(this.visible){var a=e.target,i=this.$el;i&&!i.contains(a)&&this.$emit("clickoutside",e)}},displayPopup:function(){if(this.visible){var e=this.$el,a=this.$parent.$el,i=this.appendToBody;this._popupRect||(this._popupRect=uh(e));var n=this._popupRect,o=n.width,s=n.height,l=ch(a,o,s,i),_=l.left,r=l.top;this.left=_,this.top=r}}}};function oa(e,a,i,n,o,s,l,_,r,f){var d=typeof i=="function"?i.options:i;return e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i}var ph=mh,bh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("transition",{attrs:{name:e.prefixClass+"-zoom-in-down"}},[e.visible?i("div",{class:e.prefixClass+"-datepicker-main "+e.prefixClass+"-datepicker-popup",style:{top:e.top,left:e.left,position:"absolute"}},[e._t("default")],2):e._e()])},Dh=[],Th=void 0,yh=oa({render:bh,staticRenderFns:Dh},Th,ph),Eh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"}})])},kh=[],Ah=void 0,wh=oa({render:Eh,staticRenderFns:kh},Ah,{}),vh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e._v(" "),i("path",{attrs:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}),e._v(" "),i("path",{attrs:{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"}})])},Sh=[],Rh=void 0,Ch=oa({render:vh,staticRenderFns:Sh},Rh,{}),Bh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"}},[i("path",{attrs:{d:"M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"}})])},Oh=[],Nh=void 0,xh=oa({render:Bh,staticRenderFns:Oh},Nh,{}),Mh={props:{type:String,disabled:Boolean},inject:{prefixClass:{default:"mx"}}},jh=Mh,Yh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("button",e._g({class:[e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-icon-"+e.type,{disabled:e.disabled}],attrs:{type:"button",disabled:e.disabled}},e.$listeners),[i("i",{class:e.prefixClass+"-icon-"+e.type})])},qh=[],Lh=void 0,Fo=oa({render:Yh,staticRenderFns:qh},Lh,jh),Zh={name:"TableDate",components:{IconButton:Fo},inject:{getLocale:{default:function(){return Nt}},getWeek:{default:function(){return go}},prefixClass:{default:"mx"},onDateMouseEnter:{default:void 0},onDateMouseLeave:{default:void 0}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},showWeekNumber:{type:Boolean,default:!1},titleFormat:{type:String,default:"YYYY-MM-DD"},getRowClasses:{type:Function,default:function(){return[]}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{firstDayOfWeek:function(){return this.getLocale().formatLocale.firstDayOfWeek||0},yearMonth:function(){var e=this.getLocale(),a=e.yearFormat,i=e.monthBeforeYear,n=e.monthFormat,o=n===void 0?"MMM":n,s={panel:"year",label:this.formatDate(this.calendar,a)},l={panel:"month",label:this.formatDate(this.calendar,o)};return i?[l,s]:[s,l]},days:function(){var e=this.getLocale(),a=e.days||e.formatLocale.weekdaysMin;return a.concat(a).slice(this.firstDayOfWeek,this.firstDayOfWeek+7)},dates:function(){var e=this.calendar.getFullYear(),a=this.calendar.getMonth(),i=lh({firstDayOfWeek:this.firstDayOfWeek,year:e,month:a});return ho(i,7)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,a.getMonth()+1,0),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1);break;case"last-month":a.setMonth(a.getMonth(),0),a.setHours(23,59,59,999);break;case"next-month":a.setMonth(a.getMonth()+1);break}return this.disabledCalendarChanger(a,e)},handleIconLeftClick:function(){this.$emit("changecalendar",On(this.calendar,function(e){return e-1}),"last-month")},handleIconRightClick:function(){this.$emit("changecalendar",On(this.calendar,function(e){return e+1}),"next-month")},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(e){this.$emit("changepanel",e)},handleMouseEnter:function(e){typeof this.onDateMouseEnter=="function"&&this.onDateMouseEnter(e)},handleMouseLeave:function(e){typeof this.onDateMouseLeave=="function"&&this.onDateMouseLeave(e)},handleCellClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-row-col");if(i){var n=i.split(",").map(function(r){return parseInt(r,10)}),o=$t(n,2),s=o[0],l=o[1],_=this.dates[s][l];this.$emit("select",new Date(_))}},formatDate:function(e,a){return Z0(e,a,{locale:this.getLocale().formatLocale})},getCellTitle:function(e){var a=this.titleFormat;return this.formatDate(e,a)},getWeekNumber:function(e){return this.getWeek(e,this.getLocale().formatLocale)}}},Ih=Zh,Hh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-date"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"left",disabled:e.isDisabledArrows("last-month")},on:{click:e.handleIconLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("icon-button",{attrs:{type:"right",disabled:e.isDisabledArrows("next-month")},on:{click:e.handleIconRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},e._l(e.yearMonth,function(n){return i("button",{key:n.panel,class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-btn-current-"+n.panel,attrs:{type:"button"},on:{click:function(o){return e.handlePanelChange(n.panel)}}},[e._v(`
        `+e._s(n.label)+`
      `)])}),0)],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-date"},[i("thead",[i("tr",[e.showWeekNumber?i("th",{class:e.prefixClass+"-week-number-header"}):e._e(),e._v(" "),e._l(e.days,function(n){return i("th",{key:n},[e._v(e._s(n))])})],2)]),e._v(" "),i("tbody",{on:{click:e.handleCellClick}},e._l(e.dates,function(n,o){return i("tr",{key:o,class:[e.prefixClass+"-date-row",e.getRowClasses(n)]},[e.showWeekNumber?i("td",{class:e.prefixClass+"-week-number",attrs:{"data-row-col":o+",0"}},[e._v(`
            `+e._s(e.getWeekNumber(n[0]))+`
          `)]):e._e(),e._v(" "),e._l(n,function(s,l){return i("td",{key:l,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-row-col":o+","+l,title:e.getCellTitle(s)},on:{mouseenter:function(_){return e.handleMouseEnter(s)},mouseleave:function(_){return e.handleMouseLeave(s)}}},[i("div",[e._v(e._s(s.getDate()))])])})],2)}),0)])])])},Ph=[],Gh=void 0,Uh=oa({render:Hh,staticRenderFns:Ph},Gh,Ih),zh={name:"TableMonth",components:{IconButton:Fo},inject:{getLocale:{default:function(){return Nt}},prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}}},computed:{calendarYear:function(){return this.calendar.getFullYear()},months:function(){var e=this.getLocale(),a=e.months||e.formatLocale.monthsShort,i=a.map(function(n,o){return{text:n,month:o}});return ho(i,3)}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-year":a.setFullYear(a.getFullYear()-1,11,31),a.setHours(23,59,59,999);break;case"next-year":a.setFullYear(a.getFullYear()+1,0,1);break}return this.disabledCalendarChanger(a,e)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e-1}),"last-year")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e+1}),"next-year")},handlePanelChange:function(){this.$emit("changepanel","year")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-month");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Vh=zh,Wh=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-month"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-year")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-year")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text",attrs:{type:"button"},on:{click:e.handlePanelChange}},[e._v(`
        `+e._s(e.calendarYear)+`
      `)])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-month",on:{click:e.handleClick}},e._l(e.months,function(n,o){return i("tr",{key:o},e._l(n,function(s,l){return i("td",{key:l,staticClass:"cell",class:e.getCellClasses(s.month),attrs:{"data-month":s.month}},[i("div",[e._v(e._s(s.text))])])}),0)}),0)])])},$h=[],Qh=void 0,Kh=oa({render:Wh,staticRenderFns:$h},Qh,Vh),Jh={name:"TableYear",components:{IconButton:Fo},inject:{prefixClass:{default:"mx"}},props:{disabledCalendarChanger:{type:Function,default:function(){return!1}},calendar:{type:Date,default:function(){return new Date}},getCellClasses:{type:Function,default:function(){return[]}},getYearPanel:{type:Function}},computed:{years:function(){var e=new Date(this.calendar);return typeof this.getYearPanel=="function"?this.getYearPanel(e):this.getYears(e)},firstYear:function(){return this.years[0][0]},lastYear:function(){var e=function(a){return a[a.length-1]};return e(e(this.years))}},methods:{isDisabledArrows:function(e){var a=new Date(this.calendar);switch(e){case"last-decade":a.setFullYear(this.firstYear-1,11,31),a.setHours(23,59,59,999);break;case"next-decade":a.setFullYear(this.lastYear+1,0,1);break}return this.disabledCalendarChanger(a,e)},getYears:function(e){for(var a=Math.floor(e.getFullYear()/10)*10,i=[],n=0;n<10;n++)i.push(a+n);return ho(i,2)},handleIconDoubleLeftClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e-10}),"last-decade")},handleIconDoubleRightClick:function(){this.$emit("changecalendar",Bt(this.calendar,function(e){return e+10}),"next-decade")},handleClick:function(e){var a=e.target;a.tagName.toUpperCase()==="DIV"&&(a=a.parentNode);var i=a.getAttribute("data-year");i&&!a.classList.contains("disabled")&&this.$emit("select",parseInt(i,10))}}},Xh=Jh,eF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-calendar "+e.prefixClass+"-calendar-panel-year"},[i("div",{class:e.prefixClass+"-calendar-header"},[i("icon-button",{attrs:{type:"double-left",disabled:e.isDisabledArrows("last-decade")},on:{click:e.handleIconDoubleLeftClick}}),e._v(" "),i("icon-button",{attrs:{type:"double-right",disabled:e.isDisabledArrows("next-decade")},on:{click:e.handleIconDoubleRightClick}}),e._v(" "),i("span",{class:e.prefixClass+"-calendar-header-label"},[i("span",[e._v(e._s(e.firstYear))]),e._v(" "),i("span",{class:e.prefixClass+"-calendar-decade-separator"}),e._v(" "),i("span",[e._v(e._s(e.lastYear))])])],1),e._v(" "),i("div",{class:e.prefixClass+"-calendar-content"},[i("table",{class:e.prefixClass+"-table "+e.prefixClass+"-table-year",on:{click:e.handleClick}},e._l(e.years,function(n,o){return i("tr",{key:o},e._l(n,function(s,l){return i("td",{key:l,staticClass:"cell",class:e.getCellClasses(s),attrs:{"data-year":s}},[i("div",[e._v(e._s(s))])])}),0)}),0)])])},aF=[],tF=void 0,iF=oa({render:eF,staticRenderFns:aF},tF,Xh),_t={name:"CalendarPanel",inject:{prefixClass:{default:"mx"},dispatchDatePicker:{default:function(){return function(){}}}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},defaultPanel:{type:String},disabledCalendarChanger:{type:Function,default:function(){return!1}},disabledDate:{type:Function,default:function(){return!1}},type:{type:String,default:"date"},getClasses:{type:Function,default:function(){return[]}},showWeekNumber:{type:Boolean,default:void 0},getYearPanel:{type:Function},titleFormat:{type:String,default:"YYYY-MM-DD"},calendar:Date,partialUpdate:{type:Boolean,default:!1}},data:function(){var e=["date","month","year"],a=Math.max(e.indexOf(this.type),e.indexOf(this.defaultPanel)),i=a!==-1?e[a]:"date";return{panel:i,innerCalendar:new Date}},computed:{innerValue:function(){var e=Array.isArray(this.value)?this.value:[this.value],a={year:sh,month:Bn,date:rh},i=a[this.type]||a.date;return e.filter(wa).map(function(n){return i(n)})},calendarYear:function(){return this.innerCalendar.getFullYear()},calendarMonth:function(){return this.innerCalendar.getMonth()}},watch:{value:{immediate:!0,handler:"initCalendar"},calendar:{handler:"initCalendar"},defaultValue:{handler:"initCalendar"}},methods:{initCalendar:function(){var e=this.calendar;if(!wa(e)){var a=this.innerValue.length;e=Ct(a>0?this.innerValue[a-1]:this.defaultValue)}this.innerCalendar=Bn(e)},isDisabled:function(e){return this.disabledDate(new Date(e),this.innerValue)},emitDate:function(e,a){this.isDisabled(e)||(this.$emit("select",e,a,this.innerValue),this.dispatchDatePicker("pick",e,a))},handleCalendarChange:function(e,a){var i=new Date(this.innerCalendar);this.innerCalendar=e,this.$emit("update:calendar",e),this.dispatchDatePicker("calendar-change",e,i,a)},handelPanelChange:function(e){var a=this.panel;this.panel=e,this.dispatchDatePicker("panel-change",e,a)},handleSelectYear:function(e){if(this.type==="year"){var a=this.getYearCellDate(e);this.emitDate(a,"year")}else if(this.handleCalendarChange(Aa(e,this.calendarMonth),"year"),this.handelPanelChange("month"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(e),this.emitDate(i,"year")}},handleSelectMonth:function(e){if(this.type==="month"){var a=this.getMonthCellDate(e);this.emitDate(a,"month")}else if(this.handleCalendarChange(Aa(this.calendarYear,e),"month"),this.handelPanelChange("date"),this.partialUpdate&&this.innerValue.length===1){var i=new Date(this.innerValue[0]);i.setFullYear(this.calendarYear),this.emitDate(On(i,e),"month")}},handleSelectDate:function(e){this.emitDate(e,this.type==="week"?"week":"date")},getMonthCellDate:function(e){return Aa(this.calendarYear,e)},getYearCellDate:function(e){return Aa(e,0)},getDateClasses:function(e){var a=e.getMonth()!==this.calendarMonth,i=[];e.getTime()===new Date().setHours(0,0,0,0)&&i.push("today"),a&&i.push("not-current-month");var n=this.getStateClass(e);return n==="active"&&a||i.push(n),i.concat(this.getClasses(e,this.innerValue,i.join(" ")))},getMonthClasses:function(e){var a=[];if(this.type!=="month"){this.calendarMonth===e&&a.push("active");var i=this.getMonthCellDate(e);return this.disabledCalendarChanger(i,"month")&&a.push("disabled"),a}var n=this.getMonthCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getYearClasses:function(e){var a=[];if(this.type!=="year"){this.calendarYear===e&&a.push("active");var i=this.getYearCellDate(e);return this.disabledCalendarChanger(i,"year")&&a.push("disabled"),a}var n=this.getYearCellDate(e);return a.push(this.getStateClass(n)),a.concat(this.getClasses(n,this.innerValue,a.join(" ")))},getStateClass:function(e){return this.isDisabled(e)?"disabled":this.innerValue.some(function(a){return a.getTime()===e.getTime()})?"active":""},getWeekState:function(e){if(this.type!=="week")return"";var a=e[0].getTime(),i=e[6].getTime(),n=this.innerValue.some(function(o){var s=o.getTime();return s>=a&&s<=i});return n?"".concat(this.prefixClass,"-active-week"):""}},render:function(){var e=arguments[0],a=this.panel,i=this.innerCalendar;return a==="year"?e(iF,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getYearClasses,getYearPanel:this.getYearPanel},on:{select:this.handleSelectYear,changecalendar:this.handleCalendarChange}}):a==="month"?e(Kh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getMonthClasses},on:{select:this.handleSelectMonth,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}}):e(Uh,{attrs:{disabledCalendarChanger:this.disabledCalendarChanger,calendar:i,getCellClasses:this.getDateClasses,getRowClasses:this.getWeekState,titleFormat:this.titleFormat,showWeekNumber:typeof this.showWeekNumber=="boolean"?this.showWeekNumber:this.type==="week"},class:nt({},"".concat(this.prefixClass,"-calendar-week-mode"),this.type==="week"),on:{select:this.handleSelectDate,changepanel:this.handelPanelChange,changecalendar:this.handleCalendarChange}})}},Qt={name:"CalendarRange",components:{CalendarPanel:_t},provide:function(){return{onDateMouseEnter:this.onDateMouseEnter,onDateMouseLeave:this.onDateMouseLeave}},inject:{prefixClass:{default:"mx"}},props:De({},_t.props),data:function(){return{innerValue:[],calendars:[],hoveredValue:null}},computed:{calendarMinDiff:function(){var e={date:1,month:12,year:120};return e[this.type]||e.date},calendarMaxDiff:function(){return 1/0},defaultValues:function(){return Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue]}},watch:{value:{immediate:!0,handler:function(){var e=this;this.innerValue=I0(this.value)?this.value:[new Date(NaN),new Date(NaN)];var a=this.innerValue.map(function(i,n){return Bn(Ct(i,e.defaultValues[n]))});this.updateCalendars(a)}}},methods:{handleSelect:function(e,a){var i=$t(this.innerValue,2),n=i[0],o=i[1];wa(n)&&!wa(o)?(n.getTime()>e.getTime()?this.innerValue=[e,n]:this.innerValue=[n,e],this.emitDate(this.innerValue,a)):this.innerValue=[e,new Date(NaN)]},onDateMouseEnter:function(e){this.hoveredValue=e},onDateMouseLeave:function(){this.hoveredValue=null},emitDate:function(e,a){this.$emit("select",e,a)},updateStartCalendar:function(e){this.updateCalendars([e,this.calendars[1]],1)},updateEndCalendar:function(e){this.updateCalendars([this.calendars[0],e],0)},updateCalendars:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,i=this.getCalendarGap(e);if(i){var n=new Date(e[a]);n.setMonth(n.getMonth()+(a===0?-i:i)),e[a]=n}this.calendars=e},getCalendarGap:function(e){var a=$t(e,2),i=a[0],n=a[1],o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth(),l=o*12+s,_=this.calendarMinDiff,r=this.calendarMaxDiff;return l<_?_-l:l>r?r-l:0},getRangeClasses:function(e,a,i){var n=[].concat(this.getClasses(e,a,i));if(/disabled|active/.test(i))return n;var o=function(s,l){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(m){return m.getTime()},r=_(s),f=l.map(_),d=$t(f,2),g=d[0],h=d[1];if(g>h){var F=[h,g];g=F[0],h=F[1]}return r>g&&r<h};return a.length===2&&o(e,a)?n.concat("in-range"):a.length===1&&this.hoveredValue&&o(e,[a[0],this.hoveredValue])?n.concat("hover-in-range"):n}},render:function(){var e=this,a=arguments[0],i=this.calendars.map(function(o,s){var l=De({},e.$props,{calendar:o,value:e.innerValue,defaultValue:e.defaultValues[s],getClasses:e.getRangeClasses,partialUpdate:!1}),_={select:e.handleSelect,"update:calendar":s===0?e.updateStartCalendar:e.updateEndCalendar};return a("calendar-panel",{props:De({},l),on:De({},_)})}),n=this.prefixClass;return a("div",{class:"".concat(n,"-range-wrapper")},[i])}},ki;function nF(){if(typeof window>"u")return 0;if(ki!==void 0)return ki;var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var a=document.createElement("div");return a.style.width="100%",e.appendChild(a),ki=e.offsetWidth-a.offsetWidth,e.parentNode.removeChild(e),ki}var oF={inject:{prefixClass:{default:"mx"}},data:function(){return{scrollbarWidth:0,thumbTop:"",thumbHeight:""}},created:function(){this.scrollbarWidth=nF(),document.addEventListener("mouseup",this.handleDragend)},beforeDestroy:function(){document.addEventListener("mouseup",this.handleDragend)},mounted:function(){this.$nextTick(this.getThumbSize)},methods:{getThumbSize:function(){var e=this.$refs.wrap;if(e){var a=e.clientHeight*100/e.scrollHeight;this.thumbHeight=a<100?"".concat(a,"%"):""}},handleScroll:function(e){var a=e.currentTarget,i=a.scrollHeight,n=a.scrollTop;this.thumbTop="".concat(n*100/i,"%")},handleDragstart:function(e){e.stopImmediatePropagation(),this._draggable=!0;var a=this.$refs.thumb.offsetTop;this._prevY=e.clientY-a,document.addEventListener("mousemove",this.handleDraging)},handleDraging:function(e){if(this._draggable){var a=e.clientY,i=this.$refs.wrap,n=i.scrollHeight,o=i.clientHeight,s=a-this._prevY,l=s*n/o;i.scrollTop=l}},handleDragend:function(){this._draggable&&(this._draggable=!1,document.removeEventListener("mousemove",this.handleDraging))}}},sF=oF,rF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-scrollbar",style:{position:"relative",overflow:"hidden"}},[i("div",{ref:"wrap",class:e.prefixClass+"-scrollbar-wrap",style:{marginRight:"-"+e.scrollbarWidth+"px"},on:{scroll:e.handleScroll}},[e._t("default")],2),e._v(" "),i("div",{class:e.prefixClass+"-scrollbar-track"},[i("div",{ref:"thumb",class:e.prefixClass+"-scrollbar-thumb",style:{height:e.thumbHeight,top:e.thumbTop},on:{mousedown:e.handleDragstart}})])])},lF=[],_F=void 0,sl=oa({render:rF,staticRenderFns:lF},_F,sF),ln=function(e){return e=parseInt(e,10),e<10?"0".concat(e):"".concat(e)},_n=function(e,a,i){if(Array.isArray(i))return i.filter(function(s){return s>=0&&s<e});a<=0&&(a=1);for(var n=[],o=0;o<e;o+=a)n.push(o);return n},dF=function e(a,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n<=0){requestAnimationFrame(function(){a.scrollTop=i});return}var o=i-a.scrollTop,s=o/n*10;requestAnimationFrame(function(){var l=a.scrollTop+s;if(l>=i){a.scrollTop=i;return}a.scrollTop=l,e(a,i,n-10)})},fF={name:"ListColumns",components:{ScrollbarVertical:sl},inject:{prefixClass:{default:"mx"}},props:{date:Date,scrollDuration:{type:Number,default:100},getClasses:{type:Function,default:function(){return[]}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,showHour:{type:Boolean,default:!0},showMinute:{type:Boolean,default:!0},showSecond:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},use12h:{type:Boolean,default:!1}},computed:{columns:function(){var e=[];return this.showHour&&e.push({type:"hour",list:this.getHoursList()}),this.showMinute&&e.push({type:"minute",list:this.getMinutesList()}),this.showSecond&&e.push({type:"second",list:this.getSecondsList()}),this.use12h&&e.push({type:"ampm",list:this.getAMPMList()}),e.filter(function(a){return a.list.length>0})}},watch:{date:{handler:function(){var e=this;this.$nextTick(function(){e.scrollToSelected(e.scrollDuration)})}}},mounted:function(){this.scrollToSelected(0)},methods:{getHoursList:function(){var e=this;return _n(this.use12h?12:24,this.hourStep,this.hourOptions).map(function(a){var i=new Date(e.date),n=ln(a);e.use12h&&(a===0&&(n="12"),i.getHours()>=12&&(a+=12));var o=i.setHours(a);return{value:o,text:n}})},getMinutesList:function(){var e=this;return _n(60,this.minuteStep,this.minuteOptions).map(function(a){var i=new Date(e.date).setMinutes(a);return{value:i,text:ln(a)}})},getSecondsList:function(){var e=this;return _n(60,this.secondStep,this.secondOptions).map(function(a){var i=new Date(e.date).setSeconds(a);return{value:i,text:ln(a)}})},getAMPMList:function(){var e=this;return["AM","PM"].map(function(a,i){var n=new Date(e.date),o=n.setHours(n.getHours()%12+i*12);return{text:a,value:o}})},scrollToSelected:function(e){for(var a=this.$el.querySelectorAll(".active"),i=0;i<a.length;i++){var n=a[i],o=H0(n,this.$el);if(o){var s=n.offsetTop;dF(o,s,e)}}},handleSelect:function(e){var a=e.target,i=e.currentTarget;if(a.tagName.toUpperCase()==="LI"){var n=i.getAttribute("data-type"),o=parseInt(i.getAttribute("data-index"),10),s=parseInt(a.getAttribute("data-index"),10),l=this.columns[o].list[s].value;this.$emit("select",l,n)}}}},gF=fF,hF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time-columns"},e._l(e.columns,function(n,o){return i("scrollbar-vertical",{key:o,class:e.prefixClass+"-time-column"},[i("ul",{class:e.prefixClass+"-time-list",attrs:{"data-type":n.type,"data-index":o},on:{click:e.handleSelect}},e._l(n.list,function(s,l){return i("li",{key:s.value,class:[e.prefixClass+"-time-item",e.getClasses(s.value,n.type)],attrs:{"data-index":l}},[e._v(`
        `+e._s(s.text)+`
      `)])}),0)])}),1)},FF=[],uF=void 0,cF=oa({render:hF,staticRenderFns:FF},uF,gF);function dn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=e.split(":");if(a.length>=2){var i=parseInt(a[0],10),n=parseInt(a[1],10);return{hours:i,minutes:n}}return null}var mF=function(e,a){e&&(e.scrollTop=a)},pF={name:"ListOptions",components:{ScrollbarVertical:sl},inject:{getLocale:{default:function(){return Nt}},prefixClass:{default:"mx"}},props:{date:Date,options:{type:[Object,Function],default:function(){return[]}},format:{type:String,default:"HH:mm:ss"},getClasses:{type:Function,default:function(){return[]}}},computed:{list:function(){var e=[],a=this.options;if(typeof a=="function")return a()||[];var i=dn(a.start),n=dn(a.end),o=dn(a.step),s=a.format||this.format;if(i&&n&&o)for(var l=i.minutes+i.hours*60,_=n.minutes+n.hours*60,r=o.minutes+o.hours*60,f=Math.floor((_-l)/r),d=0;d<=f;d++){var g=l+d*r,h=Math.floor(g/60),F=g%60,m=new Date(this.date).setHours(h,F,0);e.push({value:m,text:this.formatDate(m,s)})}return e}},mounted:function(){this.scrollToSelected()},methods:{formatDate:function(e,a){return Z0(e,a,{locale:this.getLocale().formatLocale})},scrollToSelected:function(){var e=this.$el.querySelector(".active");if(e){var a=H0(e,this.$el);if(a){var i=e.offsetTop;mF(a,i)}}},handleSelect:function(e){this.$emit("select",e,"time")}}},bF=pF,DF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("scrollbar-vertical",e._l(e.list,function(n){return i("div",{key:n.value,class:[e.prefixClass+"-time-option",e.getClasses(n.value)],on:{click:function(o){return e.handleSelect(n.value)}}},[e._v(`
    `+e._s(n.text)+`
  `)])}),0)},TF=[],yF=void 0,EF=oa({render:DF,staticRenderFns:TF},yF,bF),kF={name:"TimePanel",components:{ListColumns:cF,ListOptions:EF},inject:{getLocale:{default:function(){return Nt}},prefixClass:{default:"mx"}},props:{value:{},defaultValue:{default:function(){var e=new Date;return e.setHours(0,0,0,0),e}},format:{default:"HH:mm:ss"},timeTitleFormat:{type:String,default:"YYYY-MM-DD"},showTimeHeader:{type:Boolean,default:!1},disabledTime:{type:Function,default:function(){return!1}},timePickerOptions:{type:[Object,Function],default:function(){return null}},hourOptions:Array,minuteOptions:Array,secondOptions:Array,hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},showHour:{type:Boolean,default:void 0},showMinute:{type:Boolean,default:void 0},showSecond:{type:Boolean,default:void 0},use12h:{type:Boolean,default:void 0},scrollDuration:{type:Number,default:100}},data:function(){return{innerValue:Ct(this.value,this.defaultValue)}},computed:{title:function(){var e=this.timeTitleFormat,a=new Date(this.innerValue);return this.formatDate(a,e)},innerForamt:function(){return typeof this.format=="string"?this.format:"HH:mm:ss"},ShowHourMinuteSecondAMPM:function(){var e=this,a=this.innerForamt,i={showHour:/[HhKk]/.test(a),showMinute:/m/.test(a),showSecond:/s/.test(a),use12h:/a/i.test(a)},n={};return Object.keys(i).forEach(function(o){n[o]=typeof e[o]=="boolean"?e[o]:i[o]}),n}},watch:{value:{immediate:!0,handler:function(){this.innerValue=Ct(this.value,this.defaultValue)}}},methods:{formatDate:function(e,a){return Z0(e,a,{locale:this.getLocale().formatLocale})},isDisabledTime:function(e){return this.disabledTime(new Date(e))},isDisabledHour:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setMinutes(0,0,0))&&this.isDisabledTime(a.setMinutes(59,59,999))},isDisabledMinute:function(e){var a=new Date(e);return this.isDisabledTime(a)&&this.isDisabledTime(a.setSeconds(0,0))&&this.isDisabledTime(a.setSeconds(59,999))},isDisabledAMPM:function(e){var a=new Date(e),i=a.getHours()<12?0:12,n=i+11;return this.isDisabledTime(a)&&this.isDisabledTime(a.setHours(i,0,0,0))&&this.isDisabledTime(a.setHours(n,59,59,999))},isDisabled:function(e,a){return a==="hour"?this.isDisabledHour(e):a==="minute"?this.isDisabledMinute(e):a==="ampm"?this.isDisabledAMPM(e):this.isDisabledTime(e)},handleSelect:function(e,a){var i=new Date(e);this.isDisabled(e,a)||(this.innerValue=i,this.isDisabledTime(i)||this.$emit("select",i,a))},handleClickTitle:function(){this.$emit("clicktitle")},getClasses:function(e,a){var i=new Date(e);return this.isDisabled(e,a)?"disabled":i.getTime()===this.innerValue.getTime()?"active":""}}},AF=kF,wF=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:e.prefixClass+"-time"},[e.showTimeHeader?i("div",{class:e.prefixClass+"-time-header"},[i("button",{class:e.prefixClass+"-btn "+e.prefixClass+"-btn-text "+e.prefixClass+"-time-header-title",attrs:{type:"button"},on:{click:e.handleClickTitle}},[e._v(`
      `+e._s(e.title)+`
    `)])]):e._e(),e._v(" "),i("div",{class:e.prefixClass+"-time-content"},[e.timePickerOptions?i("list-options",{attrs:{date:e.innerValue,"get-classes":e.getClasses,options:e.timePickerOptions,format:e.innerForamt},on:{select:e.handleSelect}}):i("list-columns",e._b({attrs:{date:e.innerValue,"get-classes":e.getClasses,"hour-options":e.hourOptions,"minute-options":e.minuteOptions,"second-options":e.secondOptions,"hour-step":e.hourStep,"minute-step":e.minuteStep,"second-step":e.secondStep,"scroll-duration":e.scrollDuration},on:{select:e.handleSelect}},"list-columns",e.ShowHourMinuteSecondAMPM,!1))],1)])},vF=[],SF=void 0,Ia=oa({render:wF,staticRenderFns:vF},SF,AF),Kt={name:"TimeRange",inject:{prefixClass:{default:"mx"}},props:De({},Ia.props),data:function(){return{startValue:new Date(NaN),endValue:new Date(NaN)}},watch:{value:{immediate:!0,handler:function(){if(I0(this.value)){var e=$t(this.value,2),a=e[0],i=e[1];this.startValue=a,this.endValue=i}else this.startValue=new Date(NaN),this.endValue=new Date(NaN)}}},methods:{emitChange:function(e,a){var i=[this.startValue,this.endValue];this.$emit("select",i,e==="time"?"time-range":e,a)},handleSelectStart:function(e,a){this.startValue=e,this.endValue.getTime()>=e.getTime()||(this.endValue=e),this.emitChange(a,0)},handleSelectEnd:function(e,a){this.endValue=e,this.startValue.getTime()<=e.getTime()||(this.startValue=e),this.emitChange(a,1)},disabledStartTime:function(e){return this.disabledTime(e,0)},disabledEndTime:function(e){return e.getTime()<this.startValue.getTime()||this.disabledTime(e,1)}},render:function(){var e=arguments[0],a=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],i=this.prefixClass;return e("div",{class:"".concat(i,"-range-wrapper")},[e(Ia,{props:De({},De({},this.$props,{value:this.startValue,defaultValue:a[0],disabledTime:this.disabledStartTime})),on:De({},De({},this.$listeners,{select:this.handleSelectStart}))}),e(Ia,{props:De({},De({},this.$props,{value:this.endValue,defaultValue:a[1],disabledTime:this.disabledEndTime})),on:De({},De({},this.$listeners,{select:this.handleSelectEnd}))})])}},uo={name:"DatetimePanel",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:De({},_t.props,{},Ia.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){a==="date"&&this.openTimePanel();var i=y0(e,Ct(this.value,this.defaultValue));if(this.disabledTime(new Date(i))&&(i=y0(e,this.defaultValue),this.disabledTime(new Date(i)))){this.currentValue=i;return}this.emitDate(i,a)}},render:function(){var e=arguments[0],a={props:De({},Ot(this.$props,Object.keys(_t.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:De({},Ot(this.$props,Object.keys(Ia.props)),{showTimeHeader:!0,value:this.currentValue}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(_t,si([{},a])),this.timeVisible&&e(Ia,si([{class:"".concat(n,"-calendar-time")},i]))])}},rl={name:"DatetimeRange",inject:{prefixClass:{default:"mx"}},emits:["select","update:show-time-panel"],props:De({},Qt.props,{},Kt.props,{showTimePanel:{type:Boolean,default:void 0}}),data:function(){return{defaultTimeVisible:!1,currentValue:this.value}},computed:{timeVisible:function(){return typeof this.showTimePanel=="boolean"?this.showTimePanel:this.defaultTimeVisible}},watch:{value:function(e){this.currentValue=e}},methods:{closeTimePanel:function(){this.defaultTimeVisible=!1,this.$emit("update:show-time-panel",!1)},openTimePanel:function(){this.defaultTimeVisible=!0,this.$emit("update:show-time-panel",!0)},emitDate:function(e,a){this.$emit("select",e,a)},handleSelect:function(e,a){var i=this;a==="date"&&this.openTimePanel();var n=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue,this.defaultValue],o=e.map(function(s,l){var _=I0(i.value)?i.value[l]:n[l];return y0(s,_)});if(o[1].getTime()<o[0].getTime()&&(o=[o[0],o[0]]),o.some(this.disabledTime)&&(o=e.map(function(s,l){return y0(s,n[l])}),o.some(this.disabledTime))){this.currentValue=o;return}this.emitDate(o,a)}},render:function(){var e=arguments[0],a={props:De({},Ot(this.$props,Object.keys(Qt.props)),{type:"date",value:this.currentValue}),on:{select:this.handleSelect}},i={props:De({},Ot(this.$props,Object.keys(Kt.props)),{value:this.currentValue,showTimeHeader:!0}),on:{select:this.emitDate,clicktitle:this.closeTimePanel}},n=this.prefixClass;return e("div",[e(Qt,si([{},a])),this.timeVisible&&e(Kt,si([{class:"".concat(n,"-calendar-time")},i]))])}},RF={default:_t,time:Ia,datetime:uo},CF={default:Qt,time:Kt,datetime:rl},tt={name:"DatePicker",provide:function(){var e=this;return{getLocale:function(){return e.locale},getWeek:this.getWeek,prefixClass:this.prefixClass,dispatchDatePicker:this.$emit.bind(this)}},props:De({},uo.props,{value:{},valueType:{type:String,default:"date"},type:{type:String,default:"date"},format:{type:String},formatter:{type:Object},range:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},rangeSeparator:{type:String},lang:{type:[String,Object]},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},prefixClass:{type:String,default:"mx"},inputClass:{},inputAttr:{type:Object,default:function(){return{}}},appendToBody:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},popupClass:{},popupStyle:{type:Object,default:function(){return{}}},inline:{type:Boolean,default:!1},confirm:{type:Boolean,default:!1},confirmText:{type:String,default:"OK"},renderInputText:{type:Function},shortcuts:{type:Array,validator:function(e){return Array.isArray(e)&&e.every(function(a){return ca(a)&&typeof a.text=="string"&&typeof a.onClick=="function"})},default:function(){return[]}}}),data:function(){return{currentValue:null,userInput:null,defaultOpen:!1,mouseInInput:!1}},computed:{popupVisible:function(){return!this.disabled&&(typeof this.open=="boolean"?this.open:this.defaultOpen)},innerRangeSeparator:function(){return this.rangeSeparator||(this.multiple?",":" ~ ")},innerFormat:function(){var e={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD HH:mm:ss",year:"YYYY",month:"YYYY-MM",time:"HH:mm:ss",week:"w"};return this.format||e[this.type]||e.date},innerValue:function(){var e=this.value;return this.validMultipleType?(e=Array.isArray(e)?e:[],e.map(this.value2date)):this.range?(e=Array.isArray(e)?e.slice(0,2):[null,null],e.map(this.value2date)):this.value2date(e)},text:function(){var e=this;return this.userInput!==null?this.userInput:typeof this.renderInputText=="function"?this.renderInputText(this.innerValue):this.isValidValue(this.innerValue)?Array.isArray(this.innerValue)?this.innerValue.map(function(a){return e.formatDate(a)}).join(this.innerRangeSeparator):this.formatDate(this.innerValue):""},showClearIcon:function(){return!this.disabled&&this.clearable&&this.text&&this.mouseInInput},locale:function(){return ca(this.lang)?nl(Nt(),this.lang):Nt(this.lang)},validMultipleType:function(){var e=["date","month","year"];return this.multiple&&!this.range&&e.indexOf(this.type)!==-1}},watch:{innerValue:{immediate:!0,handler:function(e){this.currentValue=e}},popupVisible:{handler:function(e){e&&(this.currentValue=this.innerValue)}}},created:function(){xi(this.format)==="object"&&console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it")},methods:{handleMouseEnter:function(){this.mouseInInput=!0},handleMouseLeave:function(){this.mouseInInput=!1},handleClickOutSide:function(e){var a=e.target;this.$el.contains(a)||this.closePopup()},getFormatter:function(e){return ca(this.formatter)&&this.formatter[e]||ca(this.format)&&this.format[e]},getWeek:function(e,a){return typeof this.getFormatter("getWeek")=="function"?this.getFormatter("getWeek")(e,a):go(e,a)},parseDate:function(e,a){if(a=a||this.innerFormat,typeof this.getFormatter("parse")=="function")return this.getFormatter("parse")(e,a);var i=new Date;return Vg(e,a,{locale:this.locale.formatLocale,backupDate:i})},formatDate:function(e,a){return a=a||this.innerFormat,typeof this.getFormatter("stringify")=="function"?this.getFormatter("stringify")(e,a):Z0(e,a,{locale:this.locale.formatLocale})},value2date:function(e){switch(this.valueType){case"date":return e instanceof Date?new Date(e.getTime()):new Date(NaN);case"timestamp":return typeof e=="number"?new Date(e):new Date(NaN);case"format":return typeof e=="string"?this.parseDate(e):new Date(NaN);default:return typeof e=="string"?this.parseDate(e,this.valueType):new Date(NaN)}},date2value:function(e){if(!wa(e))return null;switch(this.valueType){case"date":return e;case"timestamp":return e.getTime();case"format":return this.formatDate(e);default:return this.formatDate(e,this.valueType)}},emitValue:function(e,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;this.userInput=null;var n=Array.isArray(e)?e.map(this.date2value):this.date2value(e);return this.$emit("input",n),this.$emit("change",n,a),i&&this.closePopup(),n},isValidValue:function(e){return this.validMultipleType?oh(e):this.range?I0(e):wa(e)},isValidValueAndNotDisabled:function(e){if(!this.isValidValue(e))return!1;var a=typeof this.disabledDate=="function"?this.disabledDate:function(){return!1},i=typeof this.disabledTime=="function"?this.disabledTime:function(){return!1};return Array.isArray(e)||(e=[e]),e.every(function(n){return!a(n)&&!i(n)})},handleMultipleDates:function(e,a){if(this.validMultipleType&&a){var i=a.filter(function(n){return n.getTime()!==e.getTime()});return i.length===a.length&&i.push(e),i}return e},handleSelectDate:function(e,a,i){e=this.handleMultipleDates(e,i),this.confirm?this.currentValue=e:this.emitValue(e,a,!this.validMultipleType&&(a===this.type||a==="time"))},clear:function(){this.emitValue(this.range?[null,null]:null),this.$emit("clear")},handleClear:function(e){e.stopPropagation(),this.clear()},handleConfirmDate:function(){var e=this.emitValue(this.currentValue);this.$emit("confirm",e)},handleSelectShortcut:function(e){var a=e.currentTarget.getAttribute("data-index"),i=this.shortcuts[parseInt(a,10)];if(ca(i)&&typeof i.onClick=="function"){var n=i.onClick(this);n&&this.emitValue(n)}},openPopup:function(e){this.popupVisible||this.disabled||(this.defaultOpen=!0,this.$emit("open",e),this.$emit("update:open",!0))},closePopup:function(){this.popupVisible&&(this.defaultOpen=!1,this.$emit("close"),this.$emit("update:open",!1))},blur:function(){this.$refs.input&&this.$refs.input.blur()},focus:function(){this.$refs.input&&this.$refs.input.focus()},handleInputChange:function(){var e=this;if(!(!this.editable||this.userInput===null)){var a=this.userInput.trim();if(this.userInput=null,a===""){this.clear();return}var i;if(this.validMultipleType)i=a.split(this.innerRangeSeparator).map(function(o){return e.parseDate(o.trim())});else if(this.range){var n=a.split(this.innerRangeSeparator);n.length!==2&&(n=a.split(this.innerRangeSeparator.trim())),i=n.map(function(o){return e.parseDate(o.trim())})}else i=this.parseDate(a);this.isValidValueAndNotDisabled(i)?(this.emitValue(i),this.blur()):this.$emit("input-error",a)}},handleInputInput:function(e){this.userInput=typeof e=="string"?e:e.target.value},handleInputKeydown:function(e){var a=e.keyCode;a===9?this.closePopup():a===13&&this.handleInputChange()},handleInputBlur:function(e){this.$emit("blur",e)},handleInputFocus:function(e){this.openPopup(e),this.$emit("focus",e)},hasSlot:function(e){return!!(this.$slots[e]||this.$scopedSlots[e])},renderSlot:function(e,a,i){var n=this.$scopedSlots[e];return n?n(i)||a:this.$slots[e]||a},renderInput:function(){var e=this.$createElement,a=this.prefixClass,i=De({name:"date",type:"text",autocomplete:"off",value:this.text,class:this.inputClass||"".concat(this.prefixClass,"-input"),readonly:!this.editable,disabled:this.disabled,placeholder:this.placeholder},this.inputAttr),n=i.value,o=i.class,s=$g(i,["value","class"]),l={keydown:this.handleInputKeydown,focus:this.handleInputFocus,blur:this.handleInputBlur,input:this.handleInputInput,change:this.handleInputChange},_=this.renderSlot("input",e("input",{domProps:{value:n},class:o,attrs:De({},s),on:De({},l),ref:"input"}),{props:i,events:l}),r=this.type==="time"?e(Ch):e(wh);return e("div",{class:"".concat(a,"-input-wrapper"),on:{mouseenter:this.handleMouseEnter,mouseleave:this.handleMouseLeave,click:this.openPopup},ref:"inputWrapper"},[_,this.showClearIcon?e("i",{class:"".concat(a,"-icon-clear"),on:{click:this.handleClear}},[this.renderSlot("icon-clear",e(xh))]):e("i",{class:"".concat(a,"-icon-calendar")},[this.renderSlot("icon-calendar",r)])])},renderContent:function(){var e=this.$createElement,a=this.range?CF:RF,i=a[this.type]||a.default,n=De({},Ot(this.$props,Object.keys(i.props)),{value:this.currentValue}),o=De({},Ot(this.$listeners,i.emits||[]),{select:this.handleSelectDate}),s=e(i,si([{},{props:n,on:o,ref:"picker"}]));return e("div",{class:"".concat(this.prefixClass,"-datepicker-body")},[this.renderSlot("content",s,{value:this.currentValue,emit:this.handleSelectDate})])},renderSidebar:function(){var e=this,a=this.$createElement,i=this.prefixClass;return a("div",{class:"".concat(i,"-datepicker-sidebar")},[this.renderSlot("sidebar",null,{value:this.currentValue,emit:this.handleSelectDate}),this.shortcuts.map(function(n,o){return a("button",{key:o,attrs:{"data-index":o,type:"button"},class:"".concat(i,"-btn ").concat(i,"-btn-text ").concat(i,"-btn-shortcut"),on:{click:e.handleSelectShortcut}},[n.text])})])},renderHeader:function(){var e=this.$createElement;return e("div",{class:"".concat(this.prefixClass,"-datepicker-header")},[this.renderSlot("header",null,{value:this.currentValue,emit:this.handleSelectDate})])},renderFooter:function(){var e=this.$createElement,a=this.prefixClass;return e("div",{class:"".concat(a,"-datepicker-footer")},[this.renderSlot("footer",null,{value:this.currentValue,emit:this.handleSelectDate}),this.confirm?e("button",{attrs:{type:"button"},class:"".concat(a,"-btn ").concat(a,"-datepicker-btn-confirm"),on:{click:this.handleConfirmDate}},[this.confirmText]):null])}},render:function(){var e,a=arguments[0],i=this.prefixClass,n=this.inline,o=this.disabled,s=this.hasSlot("sidebar")||this.shortcuts.length?this.renderSidebar():null,l=a("div",{class:"".concat(i,"-datepicker-content")},[this.hasSlot("header")?this.renderHeader():null,this.renderContent(),this.hasSlot("footer")||this.confirm?this.renderFooter():null]);return a("div",{class:(e={},nt(e,"".concat(i,"-datepicker"),!0),nt(e,"".concat(i,"-datepicker-range"),this.range),nt(e,"".concat(i,"-datepicker-inline"),n),nt(e,"disabled",o),e)},[n?null:this.renderInput(),n?a("div",{class:"".concat(i,"-datepicker-main")},[s,l]):a(yh,{ref:"popup",class:this.popupClass,style:this.popupStyle,attrs:{visible:this.popupVisible,appendToBody:this.appendToBody},on:{clickoutside:this.handleClickOutSide}},[s,l])])}};tt.locale=ol,tt.install=function(e){e.component(tt.name,tt)},typeof window<"u"&&window.Vue&&tt.install(window.Vue),Rn(tt,{CalendarPanel:_t,CalendarRange:Qt,TimePanel:Ia,TimeRange:Kt,DatetimePanel:uo,DatetimeRange:rl}),oe(n1);const BF={name:"CalendarBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var OF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon calendar-blank-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},NF=[],xF=ie(BF,OF,NF,!1,null,null);const MF=xF.exports,jF={name:"WebIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var YF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon web-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},qF=[],LF=ie(jF,YF,qF,!1,null,null);const ZF=LF.exports,Ts={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD H:mm:ss",year:"YYYY",month:"YYYY-MM",time:"H:mm:ss",week:"w"},IF={name:"NcDateTimePicker",components:{CalendarBlank:MF,DatePicker:tt,NcPopover:Gn,NcTimezonePicker:yg,Web:ZF},inheritAttrs:!1,props:{clearable:{type:Boolean,default:!1},minuteStep:{type:Number,default:10},type:{type:String,default:"date"},format:{type:String,default:null},formatter:{type:Object,default:null},lang:{type:Object,default:null},value:{default:()=>new Date},timezoneId:{type:String,default:"UTC"},showTimezoneSelect:{type:Boolean,default:!1},highlightTimezone:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},showWeekNumber:{type:Boolean,default:!1},placeholder:{type:String,default:null}},emits:["update:value","update:timezone-id"],setup(){return{timezoneDialogHeaderId:"timezone-dialog-header-".concat(dt())}},data(){return{showTimezonePopover:!1,tzVal:this.timezoneId}},computed:{defaultLang(){return{formatLocale:{months:o1(),monthsShort:s1(),weekdays:r1(),weekdaysShort:l1(),weekdaysMin:_1(),firstDayOfWeek:d1()},monthFormat:"MMM"}},defaultPlaceholder(){return this.type==="time"?N("Pick a time"):this.type==="month"?N("Pick a month"):this.type==="year"?N("Pick a year"):this.type==="week"?N("Pick a week"):this.type==="date"?N("Pick a date"):N("Pick a date and a time")},formatTypeMap(){var e;return(e=Ts[this.type])!=null?e:Ts.date},internalFormatter(){var e;return{getWeek:a=>{const i=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()));i.setUTCDate(i.getUTCDate()+4-(i.getUTCDay()||7));const n=new Date(Date.UTC(i.getUTCFullYear(),0,1));return Math.ceil(((i-n)/864e5+1)/7)},...(e=this.formatter)!=null?e:{}}}},methods:{t:N,handleSelectYear(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setFullYear(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},handleSelectMonth(e){const a=this.$refs.datepicker.currentValue;if(a)try{const i=new Date(new Date(a).setMonth(e));this.$refs.datepicker.selectDate(i)}catch{console.error("Invalid value",a,e)}},toggleTimezonePopover(){this.showTimezoneSelect&&(this.showTimezonePopover=!this.showTimezonePopover)}}};var HF=function(){var e=this,a=e._self._c;return a("DatePicker",e._g(e._b({ref:"datepicker",attrs:{"append-to-body":e.appendToBody,clearable:e.clearable,format:e.format?e.format:e.formatTypeMap,formatter:e.internalFormatter,lang:e.lang?e.lang:e.defaultLang,"minute-step":e.minuteStep,placeholder:e.placeholder?e.placeholder:e.defaultPlaceholder,"popup-class":{"show-week-number":e.showWeekNumber},"show-week-number":e.showWeekNumber,type:e.type,value:e.value},on:{"select-year":e.handleSelectYear,"select-month":e.handleSelectMonth,"update:value":function(i){return e.$emit("update:value",e.value)}},scopedSlots:e._u([{key:"icon-calendar",fn:function(){return[e.showTimezoneSelect?a("NcPopover",{attrs:{"popup-role":"dialog",shown:e.showTimezonePopover,"popover-base-class":"timezone-select__popper"},on:{"update:shown":function(i){e.showTimezonePopover=i}},scopedSlots:e._u([{key:"trigger",fn:function({attrs:i}){return[a("button",e._b({staticClass:"datetime-picker-inline-icon",class:{"datetime-picker-inline-icon--highlighted":e.highlightTimezone},on:{mousedown:function(n){return n.stopPropagation(),n.preventDefault(),(()=>{}).apply(null,arguments)}}},"button",i,!1),[a("Web",{attrs:{size:20}})],1)]}}],null,!1,270852355)},[a("div",{attrs:{role:"dialog","aria-labelledby":e.timezoneDialogHeaderId}},[a("div",{staticClass:"timezone-popover-wrapper__label"},[a("strong",{attrs:{id:e.timezoneDialogHeaderId}},[e._v(" "+e._s(e.t("Please select a time zone:"))+" ")])]),a("NcTimezonePicker",{staticClass:"timezone-popover-wrapper__timezone-select",on:{input:function(i){return e.$emit("update:timezone-id",arguments[0])}},model:{value:e.tzVal,callback:function(i){e.tzVal=i},expression:"tzVal"}})],1)]):a("CalendarBlank",{attrs:{size:20}})]},proxy:!0},e._l(e.$scopedSlots,function(i,n){return{key:n,fn:function(o){return[e._t(n,null,null,o)]}}})],null,!0)},"DatePicker",e.$attrs,!1),e.$listeners))},PF=[],GF=ie(IF,HF,PF,!1,null,"4727c294");const UF=GF.exports;ir(UF);const zF=["date","datetime-local","month","time","week"],VF={name:"NcDateTimePickerNative",inheritAttrs:!1,props:{value:{type:Date,default:null},id:{type:String,required:!0},type:{type:String,default:"date",validate:e=>zF.includes(e)},label:{type:String,default:"Please choose a date"},min:{type:[Date,Boolean],default:null},max:{type:[Date,Boolean],default:null},hideLabel:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["input"],computed:{formattedValue(){return this.formatValue(this.value)},formattedMin(){return this.min?this.formatValue(this.min):!1},formattedMax(){return this.max?this.formatValue(this.max):!1},listeners(){return{...this.$listeners,input:e=>{if(isNaN(e.target.valueAsNumber))return this.$emit("input",null);if(this.type==="time"){const n=e.target.value;if(this.value===""){const{yyyy:_,MM:r,dd:f}=this.getReadableDate(new Date);return this.$emit("input",new Date("".concat(_,"-").concat(r,"-").concat(f,"T").concat(n)))}const{yyyy:o,MM:s,dd:l}=this.getReadableDate(this.value);return this.$emit("input",new Date("".concat(o,"-").concat(s,"-").concat(l,"T").concat(n)))}else if(this.type==="month"){const n=(new Date(e.target.value).getMonth()+1).toString().padStart(2,"0");if(this.value===""){const{yyyy:r,dd:f,hh:d,mm:g}=this.getReadableDate(new Date);return this.$emit("input",new Date("".concat(r,"-").concat(n,"-").concat(f,"T").concat(d,":").concat(g)))}const{yyyy:o,dd:s,hh:l,mm:_}=this.getReadableDate(this.value);return this.$emit("input",new Date("".concat(o,"-").concat(n,"-").concat(s,"T").concat(l,":").concat(_)))}const a=new Date(e.target.valueAsNumber).getTimezoneOffset()*1e3*60,i=e.target.valueAsNumber+a;return this.$emit("input",new Date(i))}}}},methods:{getReadableDate(e){if(e instanceof Date){const a=e.getFullYear().toString().padStart(4,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return{yyyy:a,MM:i,dd:n,hh:o,mm:s}}},formatValue(e){if(e instanceof Date){const{yyyy:a,MM:i,dd:n,hh:o,mm:s}=this.getReadableDate(e);if(this.type==="datetime-local")return"".concat(a,"-").concat(i,"-").concat(n,"T").concat(o,":").concat(s);if(this.type==="date")return"".concat(a,"-").concat(i,"-").concat(n);if(this.type==="month")return"".concat(a,"-").concat(i);if(this.type==="time")return"".concat(o,":").concat(s);if(this.type==="week"){const l=new Date(a,0,1),_=Math.floor((e-l)/(24*60*60*1e3)),r=Math.ceil(_/7);return"".concat(a,"-W").concat(r)}}else return""}}};var WF=function(){var e=this,a=e._self._c;return a("div",{staticClass:"native-datetime-picker"},[a("label",{class:{"hidden-visually":e.hideLabel},attrs:{for:e.id}},[e._v(e._s(e.label))]),a("input",e._g(e._b({staticClass:"native-datetime-picker--input",class:e.inputClass,attrs:{id:e.id,type:e.type,min:e.formattedMin,max:e.formattedMax},domProps:{value:e.formattedValue}},"input",e.$attrs,!1),e.listeners))])},$F=[],QF=ie(VF,WF,$F,!1,null,"fbe2ff4a");const KF=QF.exports;ir(KF);const JF={name:"AlertCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var XF=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon alert-circle-outline-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},eu=[],au=ie(JF,XF,eu,!1,null,null);const tu=au.exports,iu={name:"NcInputField",components:{NcButton:Ka,AlertCircle:tu,Check:Vn},inheritAttrs:!1,props:{value:{type:[String,Number],required:!0},type:{type:String,default:"text",validator:e=>["text","password","email","tel","url","search","number"].includes(e)},label:{type:String,default:void 0},labelOutside:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},showTrailingButton:{type:Boolean,default:!1},trailingButtonLabel:{type:String,default:""},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},helperText:{type:String,default:""},disabled:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},inputClass:{type:[Object,String],default:""}},emits:["update:value","trailing-button-click"],computed:{computedId(){return this.$attrs.id&&this.$attrs.id!==""?this.$attrs.id:this.inputName},inputName(){return"input"+dt()},hasLeadingIcon(){return this.$slots.default},hasTrailingIcon(){return this.success},hasPlaceholder(){return this.placeholder!==""&&this.placeholder!==void 0},computedPlaceholder(){return this.hasPlaceholder?this.placeholder:this.label},isValidLabel(){const e=this.label||this.labelOutside;return e||console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation."),e},ariaDescribedby(){const e=[];return this.helperText.length>0&&e.push("".concat(this.inputName,"-helper-text")),this.$attrs["aria-describedby"]&&e.push(this.$attrs["aria-describedby"]),e.join(" ")||null}},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},handleInput(e){this.$emit("update:value",this.type==="number"&&typeof this.value=="number"?parseFloat(e.target.value,10):e.target.value)},handleTrailingButtonClick(e){this.$emit("trailing-button-click",e)}}};var nu=function(){var e=this,a=e._self._c;return a("div",{staticClass:"input-field",class:{"input-field--disabled":e.disabled,"input-field--label-outside":e.labelOutside||!e.isValidLabel,"input-field--leading-icon":e.hasLeadingIcon,"input-field--trailing-icon":e.showTrailingButton||e.hasTrailingIcon,"input-field--pill":e.pill}},[a("div",{staticClass:"input-field__main-wrapper"},[a("input",e._g(e._b({ref:"input",staticClass:"input-field__input",class:[e.inputClass,{"input-field__input--success":e.success,"input-field__input--error":e.error}],attrs:{id:e.computedId,type:e.type,disabled:e.disabled,placeholder:e.computedPlaceholder,"aria-describedby":e.ariaDescribedby,"aria-live":"polite"},domProps:{value:e.value.toString()},on:{input:e.handleInput}},"input",e.$attrs,!1),e.$listeners)),!e.labelOutside&&e.isValidLabel?a("label",{staticClass:"input-field__label",attrs:{for:e.computedId}},[e._v(" "+e._s(e.label)+" ")]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLeadingIcon,expression:"hasLeadingIcon"}],staticClass:"input-field__icon input-field__icon--leading"},[e._t("default")],2),e.showTrailingButton?a("NcButton",{staticClass:"input-field__trailing-button",attrs:{type:"tertiary-no-background","aria-label":e.trailingButtonLabel,disabled:e.disabled},on:{click:e.handleTrailingButtonClick},scopedSlots:e._u([{key:"icon",fn:function(){return[e._t("trailing-button-icon")]},proxy:!0}],null,!0)}):e.success||e.error?a("div",{staticClass:"input-field__icon input-field__icon--trailing"},[e.success?a("Check",{staticStyle:{color:"var(--color-success-text)"},attrs:{size:20}}):e.error?a("AlertCircle",{staticStyle:{color:"var(--color-error-text)"},attrs:{size:20}}):e._e()],1):e._e()],1),e.helperText.length>0?a("p",{staticClass:"input-field__helper-text-message",class:{"input-field__helper-text-message--error":e.error,"input-field__helper-text-message--success":e.success},attrs:{id:"".concat(e.inputName,"-helper-text")}},[e.success?a("Check",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e.error?a("AlertCircle",{staticClass:"input-field__helper-text-message__icon",attrs:{size:18}}):e._e(),e._v(" "+e._s(e.helperText)+" ")],1):e._e()])},ou=[],su=ie(iu,nu,ou,!1,null,"374fffac");const xt=su.exports,ru={name:"EyeIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var lu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},_u=[],du=ie(ru,lu,_u,!1,null,null);const fu=du.exports,gu={name:"EyeOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var hu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon eye-off-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Fu=[],uu=ie(gu,hu,Fu,!1,null,null);const cu=uu.exports;oe(g1);const mu=f1().detectUser().setApp("@nextcloud/vue").build(),ys=Jt("core","capabilities",{}).password_policy||null,pu=new Set(Object.keys(xt.props)),bu={name:"NcPasswordField",components:{NcInputField:xt,Eye:fu,EyeOff:cu},inheritAttrs:!1,props:{" ":{},...xt.props,showTrailingButton:{type:Boolean,default:!0},trailingButtonLabel:void 0,checkPasswordStrength:{type:Boolean,default:!1},minlength:{type:Number,default:0},maxlength:{type:Number,default:null},asText:{type:Boolean,default:!1}},emits:["valid","invalid","update:value"],data(){return{isPasswordHidden:!0,internalHelpMessage:"",isValid:null}},computed:{computedError(){return this.error||this.isValid===!1},computedSuccess(){return this.success||this.isValid===!0},computedHelperText(){return this.helperText.length>0?this.helperText:this.internalHelpMessage},rules(){const{minlength:e}=this;return{minlength:e??ys?.minLength}},trailingButtonLabelPassword(){return this.isPasswordHidden?N("Show password"):N("Hide password")},propsAndAttrsToForward(){return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([e])=>pu.has(e)))}}},watch:{value(e){if(this.checkPasswordStrength){if(ys===null)return;this.checkPassword(e)}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.$emit("update:value",e.target.value)},togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden},checkPassword:Un(async function(e){try{const{data:a}=await pa.post(Ua("apps/password_policy/api/v1/validate"),{password:e});if(this.isValid=a.ocs.data.passed,a.ocs.data.passed){this.internalHelpMessage=N("Password is secure"),this.$emit("valid");return}this.internalHelpMessage=a.ocs.data.reason,this.$emit("invalid")}catch(a){mu.error("Password policy returned an error",a)}},500)}};var Du=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",attrs:{type:e.isPasswordHidden&&!e.asText?"password":"text","trailing-button-label":e.trailingButtonLabelPassword,"helper-text":e.computedHelperText,error:e.computedError,success:e.computedSuccess,minlength:e.rules.minlength,"input-class":{"password-field__input--secure-text":e.isPasswordHidden&&e.asText}},on:{"trailing-button-click":e.togglePasswordVisibility,input:e.handleInput},scopedSlots:e._u([{key:"trailing-button-icon",fn:function(){return[e.isPasswordHidden?a("Eye",{attrs:{size:18}}):a("EyeOff",{attrs:{size:18}})]},proxy:!0}])},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},Tu=[],yu=ie(bu,Du,Tu,!1,null,"d984b8e5");const e3=yu.exports,Eu={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ku=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Au=[],wu=ie(Eu,ku,Au,!1,null,null);const vu=wu.exports,Su={name:"UndoVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ru=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon undo-variant-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Cu=[],Bu=ie(Su,Ru,Cu,!1,null,null);const Ou=Bu.exports;oe(h1,nr);const Nu=new Set(Object.keys(xt.props)),xu={name:"NcTextField",components:{NcInputField:xt,Close:Pn,ArrowRight:vu,Undo:Ou},inheritAttrs:!1,props:{" ":{},...xt.props,trailingButtonLabel:{type:String,default:""},trailingButtonIcon:{type:String,default:"close",validator:e=>["close","arrowRight","undo"].includes(e)}},emits:["update:value"],computed:{propsAndAttrsToForward(){const e={undo:N("Undo changes"),close:N("Clear text"),arrowRight:N("Save changes")};return{...this.$attrs,...Object.fromEntries(Object.entries(this.$props).filter(([a])=>Nu.has(a))),trailingButtonLabel:this.trailingButtonLabel||e[this.trailingButtonIcon]}}},methods:{focus(){this.$refs.inputField.focus()},select(){this.$refs.inputField.select()},handleInput(e){this.$emit("update:value",e.target.value)}}};var Mu=function(){var e=this,a=e._self._c;return a("NcInputField",e._g(e._b({ref:"inputField",on:{input:e.handleInput},scopedSlots:e._u([e.type!=="search"?{key:"trailing-button-icon",fn:function(){return[e.trailingButtonIcon==="close"?a("Close",{attrs:{size:20}}):e.trailingButtonIcon==="arrowRight"?a("ArrowRight",{attrs:{size:20}}):e.trailingButtonIcon==="undo"?a("Undo",{attrs:{size:20}}):e._e()]},proxy:!0}:null],null,!0)},"NcInputField",e.propsAndAttrsToForward,!1),e.$listeners),[e._t("default")],2)},ju=[],Yu=ie(xu,Mu,ju,!1,null,null);const qu=Yu.exports;oe(or),n_,N("Submit"),oe(F1),Zn("nextcloud").persist().build(),oe(u1);const Lu={name:"NcVNodes",props:{vnodes:{type:[Array,Object],default:null}},render(e){var a,i,n;return this.vnodes||((a=this.$slots)==null?void 0:a.default)||((n=(i=this.$scopedSlots)==null?void 0:i.default)==null?void 0:n.call(i))}},Zu=null,Iu=null;var Hu=ie(Lu,Zu,Iu,!1,null,null);const a3=Hu.exports,Pu={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Gu=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon chevron-up-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Uu=[],zu=ie(Pu,Gu,Uu,!1,null,null);const Vu=zu.exports;oe(c1),oe(m1),oe(p1,nr),oe(sr,b1);N("Search…");oe(T1);const Wu={name:"CogIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var $u=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon cog-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Qu=[],Ku=ie(Wu,$u,Qu,!1,null,null);const t3=Ku.exports;N("Settings"),oe(y1),Un(function(){this.selectedSection="",document.activeElement.className.includes("navigation-list__link")&&document.activeElement.blur()},300);let Ju="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Xu=(e=21)=>{let a="",i=e;for(;i--;)a+=Ju[Math.random()*64|0];return a};function Mi(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mi=function(a){return typeof a}:Mi=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Mi(e)}var ll={selector:"vue-portal-target-".concat(Xu())},ec=function(e){return ll.selector=e},fn=typeof window<"u"&&(typeof document>"u"?"undefined":Mi(document))!==void 0,ac=za.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var a=this.updatedNodes&&this.updatedNodes();return a?a.length===1&&!a[0].text?a:e(this.tag||"DIV",a):e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),tc=za.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(ll.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var a=this.$scopedSlots&&this.$scopedSlots.default();return a?a.length<2&&!a[0].text?a:e(this.tag,a):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick(function(){!e.disabled&&e.slotFn!==e.$scopedSlots.default&&(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default})},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(fn)return document.querySelector(this.selector)},insertTargetEl:function(){if(fn){var e=document.querySelector("body"),a=document.createElement(this.tag);a.id=this.selector.substring(1),e.appendChild(a)}},mount:function(){if(fn){var e=this.getTargetEl(),a=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),this.container=new ac({el:a,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function ic(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.component(a.name||"portal",tc),a.defaultSelector&&ec(a.defaultSelector)}typeof window<"u"&&window.Vue&&window.Vue===za&&za.use(ic),oe();const nc={name:"NcEmptyContent",props:{name:{type:String,default:""},description:{type:String,default:""}},computed:{hasName(){return this.name!==""},hasDescription(){var e;return this.description!==""||((e=this.$slots.description)==null?void 0:e[0])}}};var oc=function(){var e=this,a=e._self._c;return a("div",{staticClass:"empty-content",attrs:{role:"note"}},[e.$slots.icon?a("div",{staticClass:"empty-content__icon",attrs:{"aria-hidden":"true"}},[e._t("icon")],2):e._e(),e._t("name",function(){return[e.hasName?a("span",{staticClass:"empty-content__name"},[e._v(" "+e._s(e.name)+" ")]):e._e()]}),e.hasDescription?a("p",{staticClass:"empty-content__description"},[e._t("description",function(){return[e._v(" "+e._s(e.description)+" ")]})],2):e._e(),e.$slots.action?a("div",{staticClass:"empty-content__action"},[e._t("action")],2):e._e()],2)},sc=[],rc=ie(nc,oc,sc,!1,null,"fede0c71");const co=rc.exports;oe(E1),oe(k1),oe(A1);const lc={name:"ArrowLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var _c=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},dc=[],fc=ie(lc,_c,dc,!1,null,null);const _l=fc.exports;var dl={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ma,function(){return function(i){function n(s){if(o[s])return o[s].exports;var l=o[s]={i:s,l:!1,exports:{}};return i[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var o={};return n.m=i,n.c=o,n.d=function(s,l,_){n.o(s,l)||Object.defineProperty(s,l,{configurable:!1,enumerable:!0,get:_})},n.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(l,"a",l),l},n.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},n.p="",n(n.s=60)}([function(i,n){function o(l,_){var r=l[1]||"",f=l[3];if(!f)return r;if(_&&typeof btoa=="function"){var d=s(f);return[r].concat(f.sources.map(function(g){return"/*# sourceURL="+f.sourceRoot+g+" */"})).concat([d]).join(`
`)}return[r].join(`
`)}function s(l){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"}i.exports=function(l){var _=[];return _.toString=function(){return this.map(function(r){var f=o(r,l);return r[2]?"@media "+r[2]+"{"+f+"}":f}).join("")},_.i=function(r,f){typeof r=="string"&&(r=[[null,r,""]]);for(var d={},g=0;g<this.length;g++){var h=this[g][0];typeof h=="number"&&(d[h]=!0)}for(g=0;g<r.length;g++){var F=r[g];typeof F[0]=="number"&&d[F[0]]||(f&&!F[2]?F[2]=f:f&&(F[2]="("+F[2]+") and ("+f+")"),_.push(F))}},_}},function(i,n,o){function s(B){for(var P=0;P<B.length;P++){var z=B[P],Z=h[z.id];if(Z){Z.refs++;for(var c=0;c<Z.parts.length;c++)Z.parts[c](z.parts[c]);for(;c<z.parts.length;c++)Z.parts.push(_(z.parts[c]));Z.parts.length>z.parts.length&&(Z.parts.length=z.parts.length)}else{for(var v=[],c=0;c<z.parts.length;c++)v.push(_(z.parts[c]));h[z.id]={id:z.id,refs:1,parts:v}}}}function l(){var B=document.createElement("style");return B.type="text/css",F.appendChild(B),B}function _(B){var P,z,Z=document.querySelector("style["+S+'~="'+B.id+'"]');if(Z){if(T)return k;Z.parentNode.removeChild(Z)}if(M){var c=p++;Z=m||(m=l()),P=r.bind(null,Z,c,!1),z=r.bind(null,Z,c,!0)}else Z=l(),P=f.bind(null,Z),z=function(){Z.parentNode.removeChild(Z)};return P(B),function(v){if(v){if(v.css===B.css&&v.media===B.media&&v.sourceMap===B.sourceMap)return;P(B=v)}else z()}}function r(B,P,z,Z){var c=z?"":Z.css;if(B.styleSheet)B.styleSheet.cssText=L(P,c);else{var v=document.createTextNode(c),R=B.childNodes;R[P]&&B.removeChild(R[P]),R.length?B.insertBefore(v,R[P]):B.appendChild(v)}}function f(B,P){var z=P.css,Z=P.media,c=P.sourceMap;if(Z&&B.setAttribute("media",Z),w.ssrId&&B.setAttribute(S,P.id),c&&(z+=`
/*# sourceURL=`+c.sources[0]+" */",z+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),B.styleSheet)B.styleSheet.cssText=z;else{for(;B.firstChild;)B.removeChild(B.firstChild);B.appendChild(document.createTextNode(z))}}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var g=o(64),h={},F=d&&(document.head||document.getElementsByTagName("head")[0]),m=null,p=0,T=!1,k=function(){},w=null,S="data-vue-ssr-id",M=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());i.exports=function(B,P,z,Z){T=z,w=Z||{};var c=g(B,P);return s(c),function(v){for(var R=[],O=0;O<c.length;O++){var U=c[O],Y=h[U.id];Y.refs--,R.push(Y)}v?(c=g(B,v),s(c)):c=[];for(var O=0;O<R.length;O++){var Y=R[O];if(Y.refs===0){for(var te=0;te<Y.parts.length;te++)Y.parts[te]();delete h[Y.id]}}}};var L=function(){var B=[];return function(P,z){return B[P]=z,B.filter(Boolean).join(`
`)}}()},function(i,n){i.exports=function(o,s,l,_,r,f){var d,g=o=o||{},h=typeof o.default;h!=="object"&&h!=="function"||(d=o,g=o.default);var F=typeof g=="function"?g.options:g;s&&(F.render=s.render,F.staticRenderFns=s.staticRenderFns,F._compiled=!0),l&&(F.functional=!0),r&&(F._scopeId=r);var m;if(f?(m=function(k){k=k||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,k||typeof __VUE_SSR_CONTEXT__>"u"||(k=__VUE_SSR_CONTEXT__),_&&_.call(this,k),k&&k._registeredComponents&&k._registeredComponents.add(f)},F._ssrRegister=m):_&&(m=_),m){var p=F.functional,T=p?F.render:F.beforeCreate;p?(F._injectStyles=m,F.render=function(k,w){return m.call(w),T(k,w)}):F.beforeCreate=T?[].concat(T,m):[m]}return{esModule:d,exports:g,options:F}}},function(i,n,o){function s(r,f){var d,g=r&&r.a;!(d=r&&r.hsl?(0,_.default)(r.hsl):r&&r.hex&&r.hex.length>0?(0,_.default)(r.hex):r&&r.hsv?(0,_.default)(r.hsv):r&&r.rgba?(0,_.default)(r.rgba):r&&r.rgb?(0,_.default)(r.rgb):(0,_.default)(r))||d._a!==void 0&&d._a!==null||d.setAlpha(g||1);var h=d.toHsl(),F=d.toHsv();return h.s===0&&(F.h=h.h=r.h||r.hsl&&r.hsl.h||f||0),{hsl:h,hex:d.toHexString().toUpperCase(),hex8:d.toHex8String().toUpperCase(),rgba:d.toRgb(),hsv:F,oldHue:r.h||f||h.h,source:r.source,a:r.a||d.getAlpha()}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(65),_=function(r){return r&&r.__esModule?r:{default:r}}(l);n.default={props:["value"],data:function(){return{val:s(this.value)}},computed:{colors:{get:function(){return this.val},set:function(r){this.val=r,this.$emit("input",r)}}},watch:{value:function(r){this.val=s(r)}},methods:{colorChange:function(r,f){this.oldHue=this.colors.hsl.h,this.colors=s(r,f||this.oldHue)},isValidHex:function(r){return(0,_.default)(r).isValid()},simpleCheckForValidColor:function(r){for(var f=["r","g","b","a","h","s","l","v"],d=0,g=0,h=0;h<f.length;h++){var F=f[h];r[F]&&(d++,isNaN(r[F])||g++)}if(d===g)return r},paletteUpperCase:function(r){return r.map(function(f){return f.toUpperCase()})},isTransparent:function(r){return(0,_.default)(r).getAlpha()===0}}}},function(i,n){var o=i.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},function(i,n,o){function s(F){o(66)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(36),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(68),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/common/EditableInput.vue",n.default=h.exports},function(i,n){var o={}.hasOwnProperty;i.exports=function(s,l){return o.call(s,l)}},function(i,n,o){var s=o(8),l=o(18);i.exports=o(9)?function(_,r,f){return s.f(_,r,l(1,f))}:function(_,r,f){return _[r]=f,_}},function(i,n,o){var s=o(16),l=o(42),_=o(25),r=Object.defineProperty;n.f=o(9)?Object.defineProperty:function(f,d,g){if(s(f),d=_(d,!0),s(g),l)try{return r(f,d,g)}catch{}if("get"in g||"set"in g)throw TypeError("Accessors not supported!");return"value"in g&&(f[d]=g.value),f}},function(i,n,o){i.exports=!o(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(90),l=o(24);i.exports=function(_){return s(l(_))}},function(i,n,o){var s=o(29)("wks"),l=o(19),_=o(4).Symbol,r=typeof _=="function";(i.exports=function(f){return s[f]||(s[f]=r&&_[f]||(r?_:l)("Symbol."+f))}).store=s},function(i,n){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},function(i,n,o){function s(F){o(111)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(51),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(113),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/common/Hue.vue",n.default=h.exports},function(i,n){i.exports=!0},function(i,n){var o=i.exports={version:"2.6.11"};typeof __e=="number"&&(__e=o)},function(i,n,o){var s=o(12);i.exports=function(l){if(!s(l))throw TypeError(l+" is not an object!");return l}},function(i,n){i.exports=function(o){try{return!!o()}catch{return!0}}},function(i,n){i.exports=function(o,s){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:s}}},function(i,n){var o=0,s=Math.random();i.exports=function(l){return"Symbol(".concat(l===void 0?"":l,")_",(++o+s).toString(36))}},function(i,n,o){function s(F){o(123)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(54),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(127),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/common/Saturation.vue",n.default=h.exports},function(i,n,o){function s(F){o(128)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(55),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(133),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/common/Alpha.vue",n.default=h.exports},function(i,n,o){function s(F){o(130)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(56),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(132),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/common/Checkboard.vue",n.default=h.exports},function(i,n){var o=Math.ceil,s=Math.floor;i.exports=function(l){return isNaN(l=+l)?0:(l>0?s:o)(l)}},function(i,n){i.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},function(i,n,o){var s=o(12);i.exports=function(l,_){if(!s(l))return l;var r,f;if(_&&typeof(r=l.toString)=="function"&&!s(f=r.call(l))||typeof(r=l.valueOf)=="function"&&!s(f=r.call(l))||!_&&typeof(r=l.toString)=="function"&&!s(f=r.call(l)))return f;throw TypeError("Can't convert object to primitive value")}},function(i,n){i.exports={}},function(i,n,o){var s=o(46),l=o(30);i.exports=Object.keys||function(_){return s(_,l)}},function(i,n,o){var s=o(29)("keys"),l=o(19);i.exports=function(_){return s[_]||(s[_]=l(_))}},function(i,n,o){var s=o(15),l=o(4),_=l["__core-js_shared__"]||(l["__core-js_shared__"]={});(i.exports=function(r,f){return _[r]||(_[r]=f!==void 0?f:{})})("versions",[]).push({version:s.version,mode:o(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(i,n){i.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(i,n,o){var s=o(8).f,l=o(6),_=o(11)("toStringTag");i.exports=function(r,f,d){r&&!l(r=d?r:r.prototype,_)&&s(r,_,{configurable:!0,value:f})}},function(i,n,o){n.f=o(11)},function(i,n,o){var s=o(4),l=o(15),_=o(14),r=o(32),f=o(8).f;i.exports=function(d){var g=l.Symbol||(l.Symbol=_?{}:s.Symbol||{});d.charAt(0)=="_"||d in g||f(g,d,{value:r.f(d)})}},function(i,n){n.f={}.propertyIsEnumerable},function(i,n,o){function s(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(3),_=s(l),r=o(5),f=s(r),d=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];n.default={name:"Compact",mixins:[_.default],props:{palette:{type:Array,default:function(){return d}}},components:{"ed-in":f.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(g){this.colorChange({hex:g,source:"hex"})}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(s){if(!(this.max!==void 0&&+s>this.max))return s;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(s){this.handleChange(s.target.value)},handleChange:function(s){var l={};l[this.label]=s,l.hex===void 0&&l["#"]===void 0?this.$emit("change",l):s.length>5&&this.$emit("change",l)},handleKeyDown:function(s){var l=this.val,_=Number(l);if(_){var r=this.arrowOffset||1;s.keyCode===38&&(l=_+r,this.handleChange(l),s.preventDefault()),s.keyCode===40&&(l=_-r,this.handleChange(l),s.preventDefault())}}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(3),l=function(r){return r&&r.__esModule?r:{default:r}}(s),_=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];n.default={name:"Grayscale",mixins:[l.default],props:{palette:{type:Array,default:function(){return _}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(r){this.colorChange({hex:r,source:"hex"})}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(5),_=s(l),r=o(3),f=s(r);n.default={name:"Material",mixins:[f.default],components:{"ed-in":_.default},methods:{onChange:function(d){d&&(d.hex?this.isValidHex(d.hex)&&this.colorChange({hex:d.hex,source:"hex"}):(d.r||d.g||d.b)&&this.colorChange({r:d.r||this.colors.rgba.r,g:d.g||this.colors.rgba.g,b:d.b||this.colors.rgba.b,a:d.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(81),_=s(l),r=o(3),f=s(r),d=o(13),g=s(d);n.default={name:"Slider",mixins:[f.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:g.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(h){return(h===void 0?"undefined":(0,_.default)(h))!=="object"?{s:.5,l:h}:h})}},methods:{isActive:function(h,F){var m=this.colors.hsl;return m.l===1&&h.l===1||m.l===0&&h.l===0||Math.abs(m.l-h.l)<.01&&Math.abs(m.s-h.s)<.01},hueChange:function(h){this.colorChange(h)},handleSwClick:function(h,F){this.colorChange({h:this.colors.hsl.h,s:F.s,l:F.l,source:"hsl"})}}}},function(i,n,o){var s=o(14),l=o(41),_=o(44),r=o(7),f=o(26),d=o(88),g=o(31),h=o(95),F=o(11)("iterator"),m=!([].keys&&"next"in[].keys()),p=function(){return this};i.exports=function(T,k,w,S,M,L,B){d(w,k,S);var P,z,Z,c=function(ne){if(!m&&ne in U)return U[ne];switch(ne){case"keys":case"values":return function(){return new w(this,ne)}}return function(){return new w(this,ne)}},v=k+" Iterator",R=M=="values",O=!1,U=T.prototype,Y=U[F]||U["@@iterator"]||M&&U[M],te=Y||c(M),ee=M?R?c("entries"):te:void 0,fe=k=="Array"&&U.entries||Y;if(fe&&(Z=h(fe.call(new T)))!==Object.prototype&&Z.next&&(g(Z,v,!0),s||typeof Z[F]=="function"||r(Z,F,p)),R&&Y&&Y.name!=="values"&&(O=!0,te=function(){return Y.call(this)}),s&&!B||!m&&!O&&U[F]||r(U,F,te),f[k]=te,f[v]=p,M)if(P={values:R?te:c("values"),keys:L?te:c("keys"),entries:ee},B)for(z in P)z in U||_(U,z,P[z]);else l(l.P+l.F*(m||O),k,P);return P}},function(i,n,o){var s=o(4),l=o(15),_=o(86),r=o(7),f=o(6),d=function(g,h,F){var m,p,T,k=g&d.F,w=g&d.G,S=g&d.S,M=g&d.P,L=g&d.B,B=g&d.W,P=w?l:l[h]||(l[h]={}),z=P.prototype,Z=w?s:S?s[h]:(s[h]||{}).prototype;w&&(F=h);for(m in F)(p=!k&&Z&&Z[m]!==void 0)&&f(P,m)||(T=p?Z[m]:F[m],P[m]=w&&typeof Z[m]!="function"?F[m]:L&&p?_(T,s):B&&Z[m]==T?function(c){var v=function(R,O,U){if(this instanceof c){switch(arguments.length){case 0:return new c;case 1:return new c(R);case 2:return new c(R,O)}return new c(R,O,U)}return c.apply(this,arguments)};return v.prototype=c.prototype,v}(T):M&&typeof T=="function"?_(Function.call,T):T,M&&((P.virtual||(P.virtual={}))[m]=T,g&d.R&&z&&!z[m]&&r(z,m,T)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,i.exports=d},function(i,n,o){i.exports=!o(9)&&!o(17)(function(){return Object.defineProperty(o(43)("div"),"a",{get:function(){return 7}}).a!=7})},function(i,n,o){var s=o(12),l=o(4).document,_=s(l)&&s(l.createElement);i.exports=function(r){return _?l.createElement(r):{}}},function(i,n,o){i.exports=o(7)},function(i,n,o){var s=o(16),l=o(89),_=o(30),r=o(28)("IE_PROTO"),f=function(){},d=function(){var g,h=o(43)("iframe"),F=_.length;for(h.style.display="none",o(94).appendChild(h),h.src="javascript:",g=h.contentWindow.document,g.open(),g.write("<script>document.F=Object<\/script>"),g.close(),d=g.F;F--;)delete d.prototype[_[F]];return d()};i.exports=Object.create||function(g,h){var F;return g!==null?(f.prototype=s(g),F=new f,f.prototype=null,F[r]=g):F=d(),h===void 0?F:l(F,h)}},function(i,n,o){var s=o(6),l=o(10),_=o(91)(!1),r=o(28)("IE_PROTO");i.exports=function(f,d){var g,h=l(f),F=0,m=[];for(g in h)g!=r&&s(h,g)&&m.push(g);for(;d.length>F;)s(h,g=d[F++])&&(~_(m,g)||m.push(g));return m}},function(i,n){var o={}.toString;i.exports=function(s){return o.call(s).slice(8,-1)}},function(i,n,o){var s=o(24);i.exports=function(l){return Object(s(l))}},function(i,n){n.f=Object.getOwnPropertySymbols},function(i,n,o){var s=o(46),l=o(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(_){return s(_,l)}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var s=this.value.hsl.h;return s!==0&&s-this.oldHue>0&&(this.pullDirection="right"),s!==0&&s-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=s,this.value},directionClass:function(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop:function(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(s,l){!l&&s.preventDefault();var _=this.$refs.container;if(_){var r,f,d=_.clientWidth,g=_.clientHeight,h=_.getBoundingClientRect().left+window.pageXOffset,F=_.getBoundingClientRect().top+window.pageYOffset,m=s.pageX||(s.touches?s.touches[0].pageX:0),p=s.pageY||(s.touches?s.touches[0].pageY:0),T=m-h,k=p-F;this.direction==="vertical"?(k<0?r=360:k>g?r=0:(f=-100*k/g+100,r=360*f/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(T<0?r=0:T>d?r=360:(f=100*T/d,r=360*f/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(s){this.handleChange(s,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(s){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(F){return F&&F.__esModule?F:{default:F}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(118),_=s(l),r=o(3),f=s(r),d=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],g=["900","700","500","300","100"],h=function(){var F=[];return d.forEach(function(m){var p=[];m.toLowerCase()==="black"||m.toLowerCase()==="white"?p=p.concat(["#000000","#FFFFFF"]):g.forEach(function(T){var k=_.default[m][T];p.push(k.toUpperCase())}),F.push(p)}),F}();n.default={name:"Swatches",mixins:[f.default],props:{palette:{type:Array,default:function(){return h}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(F){return F.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(F){this.colorChange({hex:F,source:"hex"})}}}},function(i,n,o){function s(T){return T&&T.__esModule?T:{default:T}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(3),_=s(l),r=o(5),f=s(r),d=o(20),g=s(d),h=o(13),F=s(h),m=o(21),p=s(m);n.default={name:"Photoshop",mixins:[_.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:g.default,hue:F.default,alpha:p.default,"ed-in":f.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var T=this.colors.hsv;return{h:T.h.toFixed(),s:(100*T.s).toFixed(),v:(100*T.v).toFixed()}},hex:function(){var T=this.colors.hex;return T&&T.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(T){this.colorChange(T)},inputChange:function(T){T&&(T["#"]?this.isValidHex(T["#"])&&this.colorChange({hex:T["#"],source:"hex"}):T.r||T.g||T.b||T.a?this.colorChange({r:T.r||this.colors.rgba.r,g:T.g||this.colors.rgba.g,b:T.b||this.colors.rgba.b,a:T.a||this.colors.rgba.a,source:"rgba"}):(T.h||T.s||T.v)&&this.colorChange({h:T.h||this.colors.hsv.h,s:T.s/100||this.colors.hsv.s,v:T.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(i,n,o){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(125),_=s(l),r=o(126),f=s(r);n.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,f.default)(function(d,g){d(g)},20,{leading:!0,trailing:!1}),handleChange:function(d,g){!g&&d.preventDefault();var h=this.$refs.container;if(h){var F=h.clientWidth,m=h.clientHeight,p=h.getBoundingClientRect().left+window.pageXOffset,T=h.getBoundingClientRect().top+window.pageYOffset,k=d.pageX||(d.touches?d.touches[0].pageX:0),w=d.pageY||(d.touches?d.touches[0].pageY:0),S=(0,_.default)(k-p,0,F),M=(0,_.default)(w-T,0,m),L=S/F,B=(0,_.default)(-M/m+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:L,v:B,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(d){this.$emit("change",d)},handleMouseDown:function(d){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(d){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0});var s=o(22),l=function(_){return _&&_.__esModule?_:{default:_}}(s);n.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:l.default},computed:{colors:function(){return this.value},gradientColor:function(){var _=this.colors.rgba,r=[_.r,_.g,_.b].join(",");return"linear-gradient(to right, rgba("+r+", 0) 0%, rgba("+r+", 1) 100%)"}},methods:{handleChange:function(_,r){!r&&_.preventDefault();var f=this.$refs.container;if(f){var d,g=f.clientWidth,h=f.getBoundingClientRect().left+window.pageXOffset,F=_.pageX||(_.touches?_.touches[0].pageX:0),m=F-h;d=m<0?0:m>g?1:Math.round(100*m/g)/100,this.colors.a!==d&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:d,source:"rgba"})}},handleMouseDown:function(_){this.handleChange(_,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(i,n,o){function s(r,f,d){if(typeof document>"u")return null;var g=document.createElement("canvas");g.width=g.height=2*d;var h=g.getContext("2d");return h?(h.fillStyle=r,h.fillRect(0,0,g.width,g.height),h.fillStyle=f,h.fillRect(0,0,d,d),h.translate(d,d),h.fillRect(0,0,d,d),g.toDataURL()):null}function l(r,f,d){var g=r+","+f+","+d;if(_[g])return _[g];var h=s(r,f,d);return _[g]=h,h}Object.defineProperty(n,"__esModule",{value:!0});var _={};n.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+l(this.white,this.grey,this.size)+")"}}}}},function(i,n,o){function s(S){return S&&S.__esModule?S:{default:S}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(3),_=s(l),r=o(5),f=s(r),d=o(20),g=s(d),h=o(13),F=s(h),m=o(21),p=s(m),T=o(22),k=s(T),w=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];n.default={name:"Sketch",mixins:[_.default],components:{saturation:g.default,hue:F.default,alpha:p.default,"ed-in":f.default,checkboard:k.default},props:{presetColors:{type:Array,default:function(){return w}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var S=void 0;return S=this.colors.a<1?this.colors.hex8:this.colors.hex,S.replace("#","")},activeColor:function(){var S=this.colors.rgba;return"rgba("+[S.r,S.g,S.b,S.a].join(",")+")"}},methods:{handlePreset:function(S){this.colorChange({hex:S,source:"hex"})},childChange:function(S){this.colorChange(S)},inputChange:function(S){S&&(S.hex?this.isValidHex(S.hex)&&this.colorChange({hex:S.hex,source:"hex"}):(S.r||S.g||S.b||S.a)&&this.colorChange({r:S.r||this.colors.rgba.r,g:S.g||this.colors.rgba.g,b:S.b||this.colors.rgba.b,a:S.a||this.colors.rgba.a,source:"rgba"}))}}}},function(i,n,o){function s(w){return w&&w.__esModule?w:{default:w}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(3),_=s(l),r=o(5),f=s(r),d=o(20),g=s(d),h=o(13),F=s(h),m=o(21),p=s(m),T=o(22),k=s(T);n.default={name:"Chrome",mixins:[_.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:g.default,hue:F.default,alpha:p.default,"ed-in":f.default,checkboard:k.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var w=this.colors.hsl,S=w.h,M=w.s,L=w.l;return{h:S.toFixed(),s:(100*M).toFixed()+"%",l:(100*L).toFixed()+"%"}},activeColor:function(){var w=this.colors.rgba;return"rgba("+[w.r,w.g,w.b,w.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(w){this.colorChange(w)},inputChange:function(w){if(w){if(w.hex)this.isValidHex(w.hex)&&this.colorChange({hex:w.hex,source:"hex"});else if(w.r||w.g||w.b||w.a)this.colorChange({r:w.r||this.colors.rgba.r,g:w.g||this.colors.rgba.g,b:w.b||this.colors.rgba.b,a:w.a||this.colors.rgba.a,source:"rgba"});else if(w.h||w.s||w.l){var S=w.s?w.s.replace("%","")/100:this.colors.hsl.s,M=w.l?w.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:w.h||this.colors.hsl.h,s:S,l:M,source:"hsl"})}}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(i,n,o){function s(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(n,"__esModule",{value:!0});var l=o(5),_=s(l),r=o(3),f=s(r),d=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];n.default={name:"Twitter",mixins:[f.default],components:{editableInput:_.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return d}},triangle:{default:"top-left",validator:function(g){return["hide","top-left","top-right"].includes(g)}}},computed:{hsv:function(){var g=this.colors.hsv;return{h:g.h.toFixed(),s:(100*g.s).toFixed(),v:(100*g.v).toFixed()}},hex:function(){var g=this.colors.hex;return g&&g.replace("#","")}},methods:{equal:function(g){return g.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(g){this.colorChange({hex:g,source:"hex"})},inputChange:function(g){g&&(g["#"]?this.isValidHex(g["#"])&&this.colorChange({hex:g["#"],source:"hex"}):g.r||g.g||g.b||g.a?this.colorChange({r:g.r||this.colors.rgba.r,g:g.g||this.colors.rgba.g,b:g.b||this.colors.rgba.b,a:g.a||this.colors.rgba.a,source:"rgba"}):(g.h||g.s||g.v)&&this.colorChange({h:g.h||this.colors.hsv.h,s:g.s/100||this.colors.hsv.s,v:g.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(i,n,o){function s(we){return we&&we.__esModule?we:{default:we}}var l=o(61),_=s(l),r=o(70),f=s(r),d=o(74),g=s(d),h=o(78),F=s(h),m=o(115),p=s(m),T=o(120),k=s(T),w=o(135),S=s(w),M=o(139),L=s(M),B=o(143),P=s(B),z=o(21),Z=s(z),c=o(22),v=s(c),R=o(5),O=s(R),U=o(13),Y=s(U),te=o(20),ee=s(te),fe=o(3),ne=s(fe),pe={version:"2.8.1",Compact:_.default,Grayscale:f.default,Twitter:P.default,Material:g.default,Slider:F.default,Swatches:p.default,Photoshop:k.default,Sketch:S.default,Chrome:L.default,Alpha:Z.default,Checkboard:v.default,EditableInput:O.default,Hue:Y.default,Saturation:ee.default,ColorMixin:ne.default};i.exports=pe},function(i,n,o){function s(F){o(62)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(35),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(69),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Compact.vue",n.default=h.exports},function(i,n,o){var s=o(63);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("6ce8a5a8",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n){i.exports=function(o,s){for(var l=[],_={},r=0;r<s.length;r++){var f=s[r],d=f[0],g=f[1],h=f[2],F=f[3],m={id:o+":"+r,css:g,media:h,sourceMap:F};_[d]?_[d].parts.push(m):l.push(_[d]={id:d,parts:[m]})}return l}},function(i,n,o){var s;(function(l){function _(b,A){if(b=b||"",A=A||{},b instanceof _)return b;if(!(this instanceof _))return new _(b,A);var E=r(b);this._originalInput=b,this._r=E.r,this._g=E.g,this._b=E.b,this._a=E.a,this._roundA=J(100*this._a)/100,this._format=A.format||E.format,this._gradientType=A.gradientType,this._r<1&&(this._r=J(this._r)),this._g<1&&(this._g=J(this._g)),this._b<1&&(this._b=J(this._b)),this._ok=E.ok,this._tc_id=Ve++}function r(b){var A={r:0,g:0,b:0},E=1,j=null,$=null,V=null,le=!1,ge=!1;return typeof b=="string"&&(b=Le(b)),typeof b=="object"&&(Oe(b.r)&&Oe(b.g)&&Oe(b.b)?(A=f(b.r,b.g,b.b),le=!0,ge=String(b.r).substr(-1)==="%"?"prgb":"rgb"):Oe(b.h)&&Oe(b.s)&&Oe(b.v)?(j=we(b.s),$=we(b.v),A=F(b.h,j,$),le=!0,ge="hsv"):Oe(b.h)&&Oe(b.s)&&Oe(b.l)&&(j=we(b.s),V=we(b.l),A=g(b.h,j,V),le=!0,ge="hsl"),b.hasOwnProperty("a")&&(E=b.a)),E=U(E),{ok:le,format:b.format||ge,r:Se(255,_e(A.r,0)),g:Se(255,_e(A.g,0)),b:Se(255,_e(A.b,0)),a:E}}function f(b,A,E){return{r:255*Y(b,255),g:255*Y(A,255),b:255*Y(E,255)}}function d(b,A,E){b=Y(b,255),A=Y(A,255),E=Y(E,255);var j,$,V=_e(b,A,E),le=Se(b,A,E),ge=(V+le)/2;if(V==le)j=$=0;else{var be=V-le;switch($=ge>.5?be/(2-V-le):be/(V+le),V){case b:j=(A-E)/be+(A<E?6:0);break;case A:j=(E-b)/be+2;break;case E:j=(b-A)/be+4}j/=6}return{h:j,s:$,l:ge}}function g(b,A,E){function j(We,H,W){return W<0&&(W+=1),W>1&&(W-=1),W<1/6?We+6*(H-We)*W:W<.5?H:W<2/3?We+(H-We)*(2/3-W)*6:We}var $,V,le;if(b=Y(b,360),A=Y(A,100),E=Y(E,100),A===0)$=V=le=E;else{var ge=E<.5?E*(1+A):E+A-E*A,be=2*E-ge;$=j(be,ge,b+1/3),V=j(be,ge,b),le=j(be,ge,b-1/3)}return{r:255*$,g:255*V,b:255*le}}function h(b,A,E){b=Y(b,255),A=Y(A,255),E=Y(E,255);var j,$,V=_e(b,A,E),le=Se(b,A,E),ge=V,be=V-le;if($=V===0?0:be/V,V==le)j=0;else{switch(V){case b:j=(A-E)/be+(A<E?6:0);break;case A:j=(E-b)/be+2;break;case E:j=(b-A)/be+4}j/=6}return{h:j,s:$,v:ge}}function F(b,A,E){b=6*Y(b,360),A=Y(A,100),E=Y(E,100);var j=l.floor(b),$=b-j,V=E*(1-A),le=E*(1-$*A),ge=E*(1-(1-$)*A),be=j%6;return{r:255*[E,le,V,V,ge,E][be],g:255*[ge,E,E,le,V,V][be],b:255*[V,V,ge,E,E,le][be]}}function m(b,A,E,j){var $=[pe(J(b).toString(16)),pe(J(A).toString(16)),pe(J(E).toString(16))];return j&&$[0].charAt(0)==$[0].charAt(1)&&$[1].charAt(0)==$[1].charAt(1)&&$[2].charAt(0)==$[2].charAt(1)?$[0].charAt(0)+$[1].charAt(0)+$[2].charAt(0):$.join("")}function p(b,A,E,j,$){var V=[pe(J(b).toString(16)),pe(J(A).toString(16)),pe(J(E).toString(16)),pe(me(j))];return $&&V[0].charAt(0)==V[0].charAt(1)&&V[1].charAt(0)==V[1].charAt(1)&&V[2].charAt(0)==V[2].charAt(1)&&V[3].charAt(0)==V[3].charAt(1)?V[0].charAt(0)+V[1].charAt(0)+V[2].charAt(0)+V[3].charAt(0):V.join("")}function T(b,A,E,j){return[pe(me(j)),pe(J(b).toString(16)),pe(J(A).toString(16)),pe(J(E).toString(16))].join("")}function k(b,A){A=A===0?0:A||10;var E=_(b).toHsl();return E.s-=A/100,E.s=te(E.s),_(E)}function w(b,A){A=A===0?0:A||10;var E=_(b).toHsl();return E.s+=A/100,E.s=te(E.s),_(E)}function S(b){return _(b).desaturate(100)}function M(b,A){A=A===0?0:A||10;var E=_(b).toHsl();return E.l+=A/100,E.l=te(E.l),_(E)}function L(b,A){A=A===0?0:A||10;var E=_(b).toRgb();return E.r=_e(0,Se(255,E.r-J(-A/100*255))),E.g=_e(0,Se(255,E.g-J(-A/100*255))),E.b=_e(0,Se(255,E.b-J(-A/100*255))),_(E)}function B(b,A){A=A===0?0:A||10;var E=_(b).toHsl();return E.l-=A/100,E.l=te(E.l),_(E)}function P(b,A){var E=_(b).toHsl(),j=(E.h+A)%360;return E.h=j<0?360+j:j,_(E)}function z(b){var A=_(b).toHsl();return A.h=(A.h+180)%360,_(A)}function Z(b){var A=_(b).toHsl(),E=A.h;return[_(b),_({h:(E+120)%360,s:A.s,l:A.l}),_({h:(E+240)%360,s:A.s,l:A.l})]}function c(b){var A=_(b).toHsl(),E=A.h;return[_(b),_({h:(E+90)%360,s:A.s,l:A.l}),_({h:(E+180)%360,s:A.s,l:A.l}),_({h:(E+270)%360,s:A.s,l:A.l})]}function v(b){var A=_(b).toHsl(),E=A.h;return[_(b),_({h:(E+72)%360,s:A.s,l:A.l}),_({h:(E+216)%360,s:A.s,l:A.l})]}function R(b,A,E){A=A||6,E=E||30;var j=_(b).toHsl(),$=360/E,V=[_(b)];for(j.h=(j.h-($*A>>1)+720)%360;--A;)j.h=(j.h+$)%360,V.push(_(j));return V}function O(b,A){A=A||6;for(var E=_(b).toHsv(),j=E.h,$=E.s,V=E.v,le=[],ge=1/A;A--;)le.push(_({h:j,s:$,v:V})),V=(V+ge)%1;return le}function U(b){return b=parseFloat(b),(isNaN(b)||b<0||b>1)&&(b=1),b}function Y(b,A){fe(b)&&(b="100%");var E=ne(b);return b=Se(A,_e(0,parseFloat(b))),E&&(b=parseInt(b*A,10)/100),l.abs(b-A)<1e-6?1:b%A/parseFloat(A)}function te(b){return Se(1,_e(0,b))}function ee(b){return parseInt(b,16)}function fe(b){return typeof b=="string"&&b.indexOf(".")!=-1&&parseFloat(b)===1}function ne(b){return typeof b=="string"&&b.indexOf("%")!=-1}function pe(b){return b.length==1?"0"+b:""+b}function we(b){return b<=1&&(b=100*b+"%"),b}function me(b){return l.round(255*parseFloat(b)).toString(16)}function ze(b){return ee(b)/255}function Oe(b){return!!je.CSS_UNIT.exec(b)}function Le(b){b=b.replace(Re,"").replace(ye,"").toLowerCase();var A=!1;if(Ze[b])b=Ze[b],A=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var E;return(E=je.rgb.exec(b))?{r:E[1],g:E[2],b:E[3]}:(E=je.rgba.exec(b))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=je.hsl.exec(b))?{h:E[1],s:E[2],l:E[3]}:(E=je.hsla.exec(b))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=je.hsv.exec(b))?{h:E[1],s:E[2],v:E[3]}:(E=je.hsva.exec(b))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=je.hex8.exec(b))?{r:ee(E[1]),g:ee(E[2]),b:ee(E[3]),a:ze(E[4]),format:A?"name":"hex8"}:(E=je.hex6.exec(b))?{r:ee(E[1]),g:ee(E[2]),b:ee(E[3]),format:A?"name":"hex"}:(E=je.hex4.exec(b))?{r:ee(E[1]+""+E[1]),g:ee(E[2]+""+E[2]),b:ee(E[3]+""+E[3]),a:ze(E[4]+""+E[4]),format:A?"name":"hex8"}:!!(E=je.hex3.exec(b))&&{r:ee(E[1]+""+E[1]),g:ee(E[2]+""+E[2]),b:ee(E[3]+""+E[3]),format:A?"name":"hex"}}function Te(b){var A,E;return b=b||{level:"AA",size:"small"},A=(b.level||"AA").toUpperCase(),E=(b.size||"small").toLowerCase(),A!=="AA"&&A!=="AAA"&&(A="AA"),E!=="small"&&E!=="large"&&(E="small"),{level:A,size:E}}var Re=/^\s+/,ye=/\s+$/,Ve=0,J=l.round,Se=l.min,_e=l.max,Ne=l.random;_.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var b=this.toRgb();return(299*b.r+587*b.g+114*b.b)/1e3},getLuminance:function(){var b,A,E,j,$,V,le=this.toRgb();return b=le.r/255,A=le.g/255,E=le.b/255,j=b<=.03928?b/12.92:l.pow((b+.055)/1.055,2.4),$=A<=.03928?A/12.92:l.pow((A+.055)/1.055,2.4),V=E<=.03928?E/12.92:l.pow((E+.055)/1.055,2.4),.2126*j+.7152*$+.0722*V},setAlpha:function(b){return this._a=U(b),this._roundA=J(100*this._a)/100,this},toHsv:function(){var b=h(this._r,this._g,this._b);return{h:360*b.h,s:b.s,v:b.v,a:this._a}},toHsvString:function(){var b=h(this._r,this._g,this._b),A=J(360*b.h),E=J(100*b.s),j=J(100*b.v);return this._a==1?"hsv("+A+", "+E+"%, "+j+"%)":"hsva("+A+", "+E+"%, "+j+"%, "+this._roundA+")"},toHsl:function(){var b=d(this._r,this._g,this._b);return{h:360*b.h,s:b.s,l:b.l,a:this._a}},toHslString:function(){var b=d(this._r,this._g,this._b),A=J(360*b.h),E=J(100*b.s),j=J(100*b.l);return this._a==1?"hsl("+A+", "+E+"%, "+j+"%)":"hsla("+A+", "+E+"%, "+j+"%, "+this._roundA+")"},toHex:function(b){return m(this._r,this._g,this._b,b)},toHexString:function(b){return"#"+this.toHex(b)},toHex8:function(b){return p(this._r,this._g,this._b,this._a,b)},toHex8String:function(b){return"#"+this.toHex8(b)},toRgb:function(){return{r:J(this._r),g:J(this._g),b:J(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+J(this._r)+", "+J(this._g)+", "+J(this._b)+")":"rgba("+J(this._r)+", "+J(this._g)+", "+J(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:J(100*Y(this._r,255))+"%",g:J(100*Y(this._g,255))+"%",b:J(100*Y(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+J(100*Y(this._r,255))+"%, "+J(100*Y(this._g,255))+"%, "+J(100*Y(this._b,255))+"%)":"rgba("+J(100*Y(this._r,255))+"%, "+J(100*Y(this._g,255))+"%, "+J(100*Y(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ke[m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(b){var A="#"+T(this._r,this._g,this._b,this._a),E=A,j=this._gradientType?"GradientType = 1, ":"";if(b){var $=_(b);E="#"+T($._r,$._g,$._b,$._a)}return"progid:DXImageTransform.Microsoft.gradient("+j+"startColorstr="+A+",endColorstr="+E+")"},toString:function(b){var A=!!b;b=b||this._format;var E=!1,j=this._a<1&&this._a>=0;return A||!j||b!=="hex"&&b!=="hex6"&&b!=="hex3"&&b!=="hex4"&&b!=="hex8"&&b!=="name"?(b==="rgb"&&(E=this.toRgbString()),b==="prgb"&&(E=this.toPercentageRgbString()),b!=="hex"&&b!=="hex6"||(E=this.toHexString()),b==="hex3"&&(E=this.toHexString(!0)),b==="hex4"&&(E=this.toHex8String(!0)),b==="hex8"&&(E=this.toHex8String()),b==="name"&&(E=this.toName()),b==="hsl"&&(E=this.toHslString()),b==="hsv"&&(E=this.toHsvString()),E||this.toHexString()):b==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return _(this.toString())},_applyModification:function(b,A){var E=b.apply(null,[this].concat([].slice.call(A)));return this._r=E._r,this._g=E._g,this._b=E._b,this.setAlpha(E._a),this},lighten:function(){return this._applyModification(M,arguments)},brighten:function(){return this._applyModification(L,arguments)},darken:function(){return this._applyModification(B,arguments)},desaturate:function(){return this._applyModification(k,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(S,arguments)},spin:function(){return this._applyModification(P,arguments)},_applyCombination:function(b,A){return b.apply(null,[this].concat([].slice.call(A)))},analogous:function(){return this._applyCombination(R,arguments)},complement:function(){return this._applyCombination(z,arguments)},monochromatic:function(){return this._applyCombination(O,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(Z,arguments)},tetrad:function(){return this._applyCombination(c,arguments)}},_.fromRatio=function(b,A){if(typeof b=="object"){var E={};for(var j in b)b.hasOwnProperty(j)&&(E[j]=j==="a"?b[j]:we(b[j]));b=E}return _(b,A)},_.equals=function(b,A){return!(!b||!A)&&_(b).toRgbString()==_(A).toRgbString()},_.random=function(){return _.fromRatio({r:Ne(),g:Ne(),b:Ne()})},_.mix=function(b,A,E){E=E===0?0:E||50;var j=_(b).toRgb(),$=_(A).toRgb(),V=E/100;return _({r:($.r-j.r)*V+j.r,g:($.g-j.g)*V+j.g,b:($.b-j.b)*V+j.b,a:($.a-j.a)*V+j.a})},_.readability=function(b,A){var E=_(b),j=_(A);return(l.max(E.getLuminance(),j.getLuminance())+.05)/(l.min(E.getLuminance(),j.getLuminance())+.05)},_.isReadable=function(b,A,E){var j,$,V=_.readability(b,A);switch($=!1,j=Te(E),j.level+j.size){case"AAsmall":case"AAAlarge":$=V>=4.5;break;case"AAlarge":$=V>=3;break;case"AAAsmall":$=V>=7}return $},_.mostReadable=function(b,A,E){var j,$,V,le,ge=null,be=0;E=E||{},$=E.includeFallbackColors,V=E.level,le=E.size;for(var We=0;We<A.length;We++)(j=_.readability(b,A[We]))>be&&(be=j,ge=_(A[We]));return _.isReadable(b,ge,{level:V,size:le})||!$?ge:(E.includeFallbackColors=!1,_.mostReadable(b,["#fff","#000"],E))};var Ze=_.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ke=_.hexNames=function(b){var A={};for(var E in b)b.hasOwnProperty(E)&&(A[b[E]]=E);return A}(Ze),je=function(){var b="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",A="[\\s|\\(]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?",E="[\\s|\\(]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")[,|\\s]+("+b+")\\s*\\)?";return{CSS_UNIT:new RegExp(b),rgb:new RegExp("rgb"+A),rgba:new RegExp("rgba"+E),hsl:new RegExp("hsl"+A),hsla:new RegExp("hsla"+E),hsv:new RegExp("hsv"+A),hsva:new RegExp("hsva"+E),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();i!==void 0&&i.exports?i.exports=_:(s=function(){return _}.call(n,o,n,i))!==void 0&&(i.exports=s)})(Math)},function(i,n,o){var s=o(67);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("0f73e73c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-editable-input"},[d("input",{directives:[{name:"model",rawName:"v-model",value:r.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":r.labelId},domProps:{value:r.val},on:{keydown:r.handleKeyDown,input:[function(g){g.target.composing||(r.val=g.target.value)},r.update]}}),r._v(" "),d("span",{staticClass:"vc-input__label",attrs:{for:r.label,id:r.labelId}},[r._v(r._s(r.labelSpanText))]),r._v(" "),d("span",{staticClass:"vc-input__desc"},[r._v(r._s(r.desc))])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[d("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},r._l(r.paletteUpperCase(r.palette),function(g){return d("li",{key:g,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":g==="#FFFFFF"},style:{background:g},attrs:{role:"option","aria-label":"color:"+g,"aria-selected":g===r.pick},on:{click:function(h){return r.handlerClick(g)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:g===r.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(71)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(37),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(73),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Grayscale.vue",n.default=h.exports},function(i,n,o){var s=o(72);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("21ddbb74",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[d("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},r._l(r.paletteUpperCase(r.palette),function(g){return d("li",{key:g,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":g=="#FFFFFF"},style:{background:g},attrs:{role:"option","aria-label":"Color:"+g,"aria-selected":g===r.pick},on:{click:function(h){return r.handlerClick(g)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:g===r.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(75)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(38),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(77),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Material.vue",n.default=h.exports},function(i,n,o){var s=o(76);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1ff3af73",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[d("ed-in",{staticClass:"vc-material-hex",style:{borderColor:r.colors.hex},attrs:{label:"hex"},on:{change:r.onChange},model:{value:r.colors.hex,callback:function(g){r.$set(r.colors,"hex",g)},expression:"colors.hex"}}),r._v(" "),d("div",{staticClass:"vc-material-split"},[d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"r"},on:{change:r.onChange},model:{value:r.colors.rgba.r,callback:function(g){r.$set(r.colors.rgba,"r",g)},expression:"colors.rgba.r"}})],1),r._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"g"},on:{change:r.onChange},model:{value:r.colors.rgba.g,callback:function(g){r.$set(r.colors.rgba,"g",g)},expression:"colors.rgba.g"}})],1),r._v(" "),d("div",{staticClass:"vc-material-third"},[d("ed-in",{attrs:{label:"b"},on:{change:r.onChange},model:{value:r.colors.rgba.b,callback:function(g){r.$set(r.colors.rgba,"b",g)},expression:"colors.rgba.b"}})],1)])],1)},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(79)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(39),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(114),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Slider.vue",n.default=h.exports},function(i,n,o){var s=o(80);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7982aa43",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){function s(g){return g&&g.__esModule?g:{default:g}}n.__esModule=!0;var l=o(82),_=s(l),r=o(100),f=s(r),d=typeof f.default=="function"&&typeof _.default=="symbol"?function(g){return typeof g}:function(g){return g&&typeof f.default=="function"&&g.constructor===f.default&&g!==f.default.prototype?"symbol":typeof g};n.default=typeof f.default=="function"&&d(_.default)==="symbol"?function(g){return g===void 0?"undefined":d(g)}:function(g){return g&&typeof f.default=="function"&&g.constructor===f.default&&g!==f.default.prototype?"symbol":g===void 0?"undefined":d(g)}},function(i,n,o){i.exports={default:o(83),__esModule:!0}},function(i,n,o){o(84),o(96),i.exports=o(32).f("iterator")},function(i,n,o){var s=o(85)(!0);o(40)(String,"String",function(l){this._t=String(l),this._i=0},function(){var l,_=this._t,r=this._i;return r>=_.length?{value:void 0,done:!0}:(l=s(_,r),this._i+=l.length,{value:l,done:!1})})},function(i,n,o){var s=o(23),l=o(24);i.exports=function(_){return function(r,f){var d,g,h=String(l(r)),F=s(f),m=h.length;return F<0||F>=m?_?"":void 0:(d=h.charCodeAt(F),d<55296||d>56319||F+1===m||(g=h.charCodeAt(F+1))<56320||g>57343?_?h.charAt(F):d:_?h.slice(F,F+2):g-56320+(d-55296<<10)+65536)}}},function(i,n,o){var s=o(87);i.exports=function(l,_,r){if(s(l),_===void 0)return l;switch(r){case 1:return function(f){return l.call(_,f)};case 2:return function(f,d){return l.call(_,f,d)};case 3:return function(f,d,g){return l.call(_,f,d,g)}}return function(){return l.apply(_,arguments)}}},function(i,n){i.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},function(i,n,o){var s=o(45),l=o(18),_=o(31),r={};o(7)(r,o(11)("iterator"),function(){return this}),i.exports=function(f,d,g){f.prototype=s(r,{next:l(1,g)}),_(f,d+" Iterator")}},function(i,n,o){var s=o(8),l=o(16),_=o(27);i.exports=o(9)?Object.defineProperties:function(r,f){l(r);for(var d,g=_(f),h=g.length,F=0;h>F;)s.f(r,d=g[F++],f[d]);return r}},function(i,n,o){var s=o(47);i.exports=Object("z").propertyIsEnumerable(0)?Object:function(l){return s(l)=="String"?l.split(""):Object(l)}},function(i,n,o){var s=o(10),l=o(92),_=o(93);i.exports=function(r){return function(f,d,g){var h,F=s(f),m=l(F.length),p=_(g,m);if(r&&d!=d){for(;m>p;)if((h=F[p++])!=h)return!0}else for(;m>p;p++)if((r||p in F)&&F[p]===d)return r||p||0;return!r&&-1}}},function(i,n,o){var s=o(23),l=Math.min;i.exports=function(_){return _>0?l(s(_),9007199254740991):0}},function(i,n,o){var s=o(23),l=Math.max,_=Math.min;i.exports=function(r,f){return r=s(r),r<0?l(r+f,0):_(r,f)}},function(i,n,o){var s=o(4).document;i.exports=s&&s.documentElement},function(i,n,o){var s=o(6),l=o(48),_=o(28)("IE_PROTO"),r=Object.prototype;i.exports=Object.getPrototypeOf||function(f){return f=l(f),s(f,_)?f[_]:typeof f.constructor=="function"&&f instanceof f.constructor?f.constructor.prototype:f instanceof Object?r:null}},function(i,n,o){o(97);for(var s=o(4),l=o(7),_=o(26),r=o(11)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),d=0;d<f.length;d++){var g=f[d],h=s[g],F=h&&h.prototype;F&&!F[r]&&l(F,r,g),_[g]=_.Array}},function(i,n,o){var s=o(98),l=o(99),_=o(26),r=o(10);i.exports=o(40)(Array,"Array",function(f,d){this._t=r(f),this._i=0,this._k=d},function(){var f=this._t,d=this._k,g=this._i++;return!f||g>=f.length?(this._t=void 0,l(1)):d=="keys"?l(0,g):d=="values"?l(0,f[g]):l(0,[g,f[g]])},"values"),_.Arguments=_.Array,s("keys"),s("values"),s("entries")},function(i,n){i.exports=function(){}},function(i,n){i.exports=function(o,s){return{value:s,done:!!o}}},function(i,n,o){i.exports={default:o(101),__esModule:!0}},function(i,n,o){o(102),o(108),o(109),o(110),i.exports=o(15).Symbol},function(i,n,o){var s=o(4),l=o(6),_=o(9),r=o(41),f=o(44),d=o(103).KEY,g=o(17),h=o(29),F=o(31),m=o(19),p=o(11),T=o(32),k=o(33),w=o(104),S=o(105),M=o(16),L=o(12),B=o(48),P=o(10),z=o(25),Z=o(18),c=o(45),v=o(106),R=o(107),O=o(49),U=o(8),Y=o(27),te=R.f,ee=U.f,fe=v.f,ne=s.Symbol,pe=s.JSON,we=pe&&pe.stringify,me=p("_hidden"),ze=p("toPrimitive"),Oe={}.propertyIsEnumerable,Le=h("symbol-registry"),Te=h("symbols"),Re=h("op-symbols"),ye=Object.prototype,Ve=typeof ne=="function"&&!!O.f,J=s.QObject,Se=!J||!J.prototype||!J.prototype.findChild,_e=_&&g(function(){return c(ee({},"a",{get:function(){return ee(this,"a",{value:7}).a}})).a!=7})?function(H,W,u){var D=te(ye,W);D&&delete ye[W],ee(H,W,u),D&&H!==ye&&ee(ye,W,D)}:ee,Ne=function(H){var W=Te[H]=c(ne.prototype);return W._k=H,W},Ze=Ve&&typeof ne.iterator=="symbol"?function(H){return typeof H=="symbol"}:function(H){return H instanceof ne},Ke=function(H,W,u){return H===ye&&Ke(Re,W,u),M(H),W=z(W,!0),M(u),l(Te,W)?(u.enumerable?(l(H,me)&&H[me][W]&&(H[me][W]=!1),u=c(u,{enumerable:Z(0,!1)})):(l(H,me)||ee(H,me,Z(1,{})),H[me][W]=!0),_e(H,W,u)):ee(H,W,u)},je=function(H,W){M(H);for(var u,D=w(W=P(W)),y=0,C=D.length;C>y;)Ke(H,u=D[y++],W[u]);return H},b=function(H,W){return W===void 0?c(H):je(c(H),W)},A=function(H){var W=Oe.call(this,H=z(H,!0));return!(this===ye&&l(Te,H)&&!l(Re,H))&&(!(W||!l(this,H)||!l(Te,H)||l(this,me)&&this[me][H])||W)},E=function(H,W){if(H=P(H),W=z(W,!0),H!==ye||!l(Te,W)||l(Re,W)){var u=te(H,W);return!u||!l(Te,W)||l(H,me)&&H[me][W]||(u.enumerable=!0),u}},j=function(H){for(var W,u=fe(P(H)),D=[],y=0;u.length>y;)l(Te,W=u[y++])||W==me||W==d||D.push(W);return D},$=function(H){for(var W,u=H===ye,D=fe(u?Re:P(H)),y=[],C=0;D.length>C;)!l(Te,W=D[C++])||u&&!l(ye,W)||y.push(Te[W]);return y};Ve||(ne=function(){if(this instanceof ne)throw TypeError("Symbol is not a constructor!");var H=m(arguments.length>0?arguments[0]:void 0),W=function(u){this===ye&&W.call(Re,u),l(this,me)&&l(this[me],H)&&(this[me][H]=!1),_e(this,H,Z(1,u))};return _&&Se&&_e(ye,H,{configurable:!0,set:W}),Ne(H)},f(ne.prototype,"toString",function(){return this._k}),R.f=E,U.f=Ke,o(50).f=v.f=j,o(34).f=A,O.f=$,_&&!o(14)&&f(ye,"propertyIsEnumerable",A,!0),T.f=function(H){return Ne(p(H))}),r(r.G+r.W+r.F*!Ve,{Symbol:ne});for(var V="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),le=0;V.length>le;)p(V[le++]);for(var ge=Y(p.store),be=0;ge.length>be;)k(ge[be++]);r(r.S+r.F*!Ve,"Symbol",{for:function(H){return l(Le,H+="")?Le[H]:Le[H]=ne(H)},keyFor:function(H){if(!Ze(H))throw TypeError(H+" is not a symbol!");for(var W in Le)if(Le[W]===H)return W},useSetter:function(){Se=!0},useSimple:function(){Se=!1}}),r(r.S+r.F*!Ve,"Object",{create:b,defineProperty:Ke,defineProperties:je,getOwnPropertyDescriptor:E,getOwnPropertyNames:j,getOwnPropertySymbols:$});var We=g(function(){O.f(1)});r(r.S+r.F*We,"Object",{getOwnPropertySymbols:function(H){return O.f(B(H))}}),pe&&r(r.S+r.F*(!Ve||g(function(){var H=ne();return we([H])!="[null]"||we({a:H})!="{}"||we(Object(H))!="{}"})),"JSON",{stringify:function(H){for(var W,u,D=[H],y=1;arguments.length>y;)D.push(arguments[y++]);if(u=W=D[1],(L(W)||H!==void 0)&&!Ze(H))return S(W)||(W=function(C,q){if(typeof u=="function"&&(q=u.call(this,C,q)),!Ze(q))return q}),D[1]=W,we.apply(pe,D)}}),ne.prototype[ze]||o(7)(ne.prototype,ze,ne.prototype.valueOf),F(ne,"Symbol"),F(Math,"Math",!0),F(s.JSON,"JSON",!0)},function(i,n,o){var s=o(19)("meta"),l=o(12),_=o(6),r=o(8).f,f=0,d=Object.isExtensible||function(){return!0},g=!o(17)(function(){return d(Object.preventExtensions({}))}),h=function(k){r(k,s,{value:{i:"O"+ ++f,w:{}}})},F=function(k,w){if(!l(k))return typeof k=="symbol"?k:(typeof k=="string"?"S":"P")+k;if(!_(k,s)){if(!d(k))return"F";if(!w)return"E";h(k)}return k[s].i},m=function(k,w){if(!_(k,s)){if(!d(k))return!0;if(!w)return!1;h(k)}return k[s].w},p=function(k){return g&&T.NEED&&d(k)&&!_(k,s)&&h(k),k},T=i.exports={KEY:s,NEED:!1,fastKey:F,getWeak:m,onFreeze:p}},function(i,n,o){var s=o(27),l=o(49),_=o(34);i.exports=function(r){var f=s(r),d=l.f;if(d)for(var g,h=d(r),F=_.f,m=0;h.length>m;)F.call(r,g=h[m++])&&f.push(g);return f}},function(i,n,o){var s=o(47);i.exports=Array.isArray||function(l){return s(l)=="Array"}},function(i,n,o){var s=o(10),l=o(50).f,_={}.toString,r=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(d){try{return l(d)}catch{return r.slice()}};i.exports.f=function(d){return r&&_.call(d)=="[object Window]"?f(d):l(s(d))}},function(i,n,o){var s=o(34),l=o(18),_=o(10),r=o(25),f=o(6),d=o(42),g=Object.getOwnPropertyDescriptor;n.f=o(9)?g:function(h,F){if(h=_(h),F=r(F,!0),d)try{return g(h,F)}catch{}if(f(h,F))return l(!s.f.call(h,F),h[F])}},function(i,n){},function(i,n,o){o(33)("asyncIterator")},function(i,n,o){o(33)("observable")},function(i,n,o){var s=o(112);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("7c5f1a1c",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{class:["vc-hue",r.directionClass]},[d("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":r.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:r.handleMouseDown,touchmove:r.handleChange,touchstart:r.handleChange}},[d("div",{staticClass:"vc-hue-pointer",style:{top:r.pointerTop,left:r.pointerLeft},attrs:{role:"presentation"}},[d("div",{staticClass:"vc-hue-picker"})])])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[d("div",{staticClass:"vc-slider-hue-warp"},[d("hue",{on:{change:r.hueChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),d("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},r._l(r.normalizedSwatches,function(g,h){return d("div",{key:h,staticClass:"vc-slider-swatch",attrs:{"data-index":h,"aria-label":"color:"+r.colors.hex,role:"button"},on:{click:function(F){return r.handleSwClick(h,g)}}},[d("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":r.isActive(g,h),"vc-slider-swatch-picker--white":g.l===1},style:{background:"hsl("+r.colors.hsl.h+", "+100*g.s+"%, "+100*g.l+"%)"}})])}),0)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(116)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(52),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(119),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Swatches.vue",n.default=h.exports},function(i,n,o){var s=o(117);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("10f839a2",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"red",function(){return s}),o.d(n,"pink",function(){return l}),o.d(n,"purple",function(){return _}),o.d(n,"deepPurple",function(){return r}),o.d(n,"indigo",function(){return f}),o.d(n,"blue",function(){return d}),o.d(n,"lightBlue",function(){return g}),o.d(n,"cyan",function(){return h}),o.d(n,"teal",function(){return F}),o.d(n,"green",function(){return m}),o.d(n,"lightGreen",function(){return p}),o.d(n,"lime",function(){return T}),o.d(n,"yellow",function(){return k}),o.d(n,"amber",function(){return w}),o.d(n,"orange",function(){return S}),o.d(n,"deepOrange",function(){return M}),o.d(n,"brown",function(){return L}),o.d(n,"grey",function(){return B}),o.d(n,"blueGrey",function(){return P}),o.d(n,"darkText",function(){return z}),o.d(n,"lightText",function(){return Z}),o.d(n,"darkIcons",function(){return c}),o.d(n,"lightIcons",function(){return v}),o.d(n,"white",function(){return R}),o.d(n,"black",function(){return O});var s={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},l={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},_={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},r={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},f={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},d={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},g={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},h={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},F={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},m={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},p={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},T={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},k={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},w={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},S={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},M={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},L={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},B={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},P={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},z={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},Z={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},c={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},v={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},R="#ffffff",O="#000000";n.default={red:s,pink:l,purple:_,deepPurple:r,indigo:f,blue:d,lightBlue:g,cyan:h,teal:F,green:m,lightGreen:p,lime:T,yellow:k,amber:w,orange:S,deepOrange:M,brown:L,grey:B,blueGrey:P,darkText:z,lightText:Z,darkIcons:c,lightIcons:v,white:R,black:O}},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":r.pick}},[d("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},r._l(r.palette,function(g,h){return d("div",{key:h,staticClass:"vc-swatches-color-group"},r._l(g,function(F){return d("div",{key:F,class:["vc-swatches-color-it",{"vc-swatches-color--white":F==="#FFFFFF"}],style:{background:F},attrs:{role:"option","aria-label":"Color:"+F,"aria-selected":r.equal(F),"data-color":F},on:{click:function(m){return r.handlerClick(F)}}},[d("div",{directives:[{name:"show",rawName:"v-show",value:r.equal(F),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[d("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(121)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(53),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(134),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Photoshop.vue",n.default=h.exports},function(i,n,o){var s=o(122);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("080365d4",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n){function o(s,l,_){return l<_?s<l?l:s>_?_:s:s<_?_:s>l?l:s}i.exports=o},function(i,n){function o(c,v,R){function O(_e){var Ne=me,Ze=ze;return me=ze=void 0,ye=_e,Le=c.apply(Ze,Ne)}function U(_e){return ye=_e,Te=setTimeout(ee,v),Ve?O(_e):Le}function Y(_e){var Ne=_e-Re,Ze=_e-ye,Ke=v-Ne;return J?z(Ke,Oe-Ze):Ke}function te(_e){var Ne=_e-Re,Ze=_e-ye;return Re===void 0||Ne>=v||Ne<0||J&&Ze>=Oe}function ee(){var _e=Z();if(te(_e))return fe(_e);Te=setTimeout(ee,Y(_e))}function fe(_e){return Te=void 0,Se&&me?O(_e):(me=ze=void 0,Le)}function ne(){Te!==void 0&&clearTimeout(Te),ye=0,me=Re=ze=Te=void 0}function pe(){return Te===void 0?Le:fe(Z())}function we(){var _e=Z(),Ne=te(_e);if(me=arguments,ze=this,Re=_e,Ne){if(Te===void 0)return U(Re);if(J)return Te=setTimeout(ee,v),O(Re)}return Te===void 0&&(Te=setTimeout(ee,v)),Le}var me,ze,Oe,Le,Te,Re,ye=0,Ve=!1,J=!1,Se=!0;if(typeof c!="function")throw new TypeError(d);return v=f(v)||0,l(R)&&(Ve=!!R.leading,J="maxWait"in R,Oe=J?P(f(R.maxWait)||0,v):Oe,Se="trailing"in R?!!R.trailing:Se),we.cancel=ne,we.flush=pe,we}function s(c,v,R){var O=!0,U=!0;if(typeof c!="function")throw new TypeError(d);return l(R)&&(O="leading"in R?!!R.leading:O,U="trailing"in R?!!R.trailing:U),o(c,v,{leading:O,maxWait:v,trailing:U})}function l(c){var v=typeof c;return!!c&&(v=="object"||v=="function")}function _(c){return!!c&&typeof c=="object"}function r(c){return typeof c=="symbol"||_(c)&&B.call(c)==h}function f(c){if(typeof c=="number")return c;if(r(c))return g;if(l(c)){var v=typeof c.valueOf=="function"?c.valueOf():c;c=l(v)?v+"":v}if(typeof c!="string")return c===0?c:+c;c=c.replace(F,"");var R=p.test(c);return R||T.test(c)?k(c.slice(2),R?2:8):m.test(c)?g:+c}var d="Expected a function",g=NaN,h="[object Symbol]",F=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,T=/^0o[0-7]+$/i,k=parseInt,w=typeof Ma=="object"&&Ma&&Ma.Object===Object&&Ma,S=typeof self=="object"&&self&&self.Object===Object&&self,M=w||S||Function("return this")(),L=Object.prototype,B=L.toString,P=Math.max,z=Math.min,Z=function(){return M.Date.now()};i.exports=s},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{ref:"container",staticClass:"vc-saturation",style:{background:r.bgColor},on:{mousedown:r.handleMouseDown,touchmove:r.handleChange,touchstart:r.handleChange}},[d("div",{staticClass:"vc-saturation--white"}),r._v(" "),d("div",{staticClass:"vc-saturation--black"}),r._v(" "),d("div",{staticClass:"vc-saturation-pointer",style:{top:r.pointerTop,left:r.pointerLeft}},[d("div",{staticClass:"vc-saturation-circle"})])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){var s=o(129);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("4dc1b086",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement;return(r._self._c||f)("div",{staticClass:"vc-checkerboard",style:r.bgStyle})},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-alpha"},[d("div",{staticClass:"vc-alpha-checkboard-wrap"},[d("checkboard")],1),r._v(" "),d("div",{staticClass:"vc-alpha-gradient",style:{background:r.gradientColor}}),r._v(" "),d("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:r.handleMouseDown,touchmove:r.handleChange,touchstart:r.handleChange}},[d("div",{staticClass:"vc-alpha-pointer",style:{left:100*r.colors.a+"%"}},[d("div",{staticClass:"vc-alpha-picker"})])])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{class:["vc-photoshop",r.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[d("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[r._v(r._s(r.head))]),r._v(" "),d("div",{staticClass:"vc-ps-body"},[d("div",{staticClass:"vc-ps-saturation-wrap"},[d("saturation",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),d("div",{staticClass:"vc-ps-hue-wrap"},[d("hue",{attrs:{direction:"vertical"},on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}},[d("div",{staticClass:"vc-ps-hue-pointer"},[d("i",{staticClass:"vc-ps-hue-pointer--left"}),d("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),r._v(" "),d("div",{class:["vc-ps-controls",r.disableFields?"vc-ps-controls__disable-fields":""]},[d("div",{staticClass:"vc-ps-previews"},[d("div",{staticClass:"vc-ps-previews__label"},[r._v(r._s(r.newLabel))]),r._v(" "),d("div",{staticClass:"vc-ps-previews__swatches"},[d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:r.colors.hex},attrs:{"aria-label":"New color is "+r.colors.hex}}),r._v(" "),d("div",{staticClass:"vc-ps-previews__pr-color",style:{background:r.currentColor},attrs:{"aria-label":"Current color is "+r.currentColor},on:{click:r.clickCurrentColor}})]),r._v(" "),d("div",{staticClass:"vc-ps-previews__label"},[r._v(r._s(r.currentLabel))])]),r._v(" "),r.disableFields?r._e():d("div",{staticClass:"vc-ps-actions"},[d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":r.acceptLabel},on:{click:r.handleAccept}},[r._v(r._s(r.acceptLabel))]),r._v(" "),d("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":r.cancelLabel},on:{click:r.handleCancel}},[r._v(r._s(r.cancelLabel))]),r._v(" "),d("div",{staticClass:"vc-ps-fields"},[d("ed-in",{attrs:{label:"h",desc:"°",value:r.hsv.h},on:{change:r.inputChange}}),r._v(" "),d("ed-in",{attrs:{label:"s",desc:"%",value:r.hsv.s,max:100},on:{change:r.inputChange}}),r._v(" "),d("ed-in",{attrs:{label:"v",desc:"%",value:r.hsv.v,max:100},on:{change:r.inputChange}}),r._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),r._v(" "),d("ed-in",{attrs:{label:"r",value:r.colors.rgba.r},on:{change:r.inputChange}}),r._v(" "),d("ed-in",{attrs:{label:"g",value:r.colors.rgba.g},on:{change:r.inputChange}}),r._v(" "),d("ed-in",{attrs:{label:"b",value:r.colors.rgba.b},on:{change:r.inputChange}}),r._v(" "),d("div",{staticClass:"vc-ps-fields__divider"}),r._v(" "),d("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:r.hex},on:{change:r.inputChange}})],1),r._v(" "),r.hasResetButton?d("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:r.handleReset}},[r._v(r._s(r.resetLabel))]):r._e()])])])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(136)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(57),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(138),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Sketch.vue",n.default=h.exports},function(i,n,o){var s=o(137);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("612c6604",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{class:["vc-sketch",r.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[d("div",{staticClass:"vc-sketch-saturation-wrap"},[d("saturation",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),d("div",{staticClass:"vc-sketch-controls"},[d("div",{staticClass:"vc-sketch-sliders"},[d("div",{staticClass:"vc-sketch-hue-wrap"},[d("hue",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),r.disableAlpha?r._e():d("div",{staticClass:"vc-sketch-alpha-wrap"},[d("alpha",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1)]),r._v(" "),d("div",{staticClass:"vc-sketch-color-wrap"},[d("div",{staticClass:"vc-sketch-active-color",style:{background:r.activeColor},attrs:{"aria-label":"Current color is "+r.activeColor}}),r._v(" "),d("checkboard")],1)]),r._v(" "),r.disableFields?r._e():d("div",{staticClass:"vc-sketch-field"},[d("div",{staticClass:"vc-sketch-field--double"},[d("ed-in",{attrs:{label:"hex",value:r.hex},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"r",value:r.colors.rgba.r},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"g",value:r.colors.rgba.g},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"b",value:r.colors.rgba.b},on:{change:r.inputChange}})],1),r._v(" "),r.disableAlpha?r._e():d("div",{staticClass:"vc-sketch-field--single"},[d("ed-in",{attrs:{label:"a",value:r.colors.a,"arrow-offset":.01,max:1},on:{change:r.inputChange}})],1)]),r._v(" "),d("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[r._l(r.presetColors,function(g){return[r.isTransparent(g)?d("div",{key:g,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+g},on:{click:function(h){return r.handlePreset(g)}}},[d("checkboard")],1):d("div",{key:g,staticClass:"vc-sketch-presets-color",style:{background:g},attrs:{"aria-label":"Color:"+g},on:{click:function(h){return r.handlePreset(g)}}})]})],2)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(140)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(58),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(142),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Chrome.vue",n.default=h.exports},function(i,n,o){var s=o(141);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("1cd16048",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{class:["vc-chrome",r.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[d("div",{staticClass:"vc-chrome-saturation-wrap"},[d("saturation",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),d("div",{staticClass:"vc-chrome-body"},[d("div",{staticClass:"vc-chrome-controls"},[d("div",{staticClass:"vc-chrome-color-wrap"},[d("div",{staticClass:"vc-chrome-active-color",style:{background:r.activeColor},attrs:{"aria-label":"current color is "+r.colors.hex}}),r._v(" "),r.disableAlpha?r._e():d("checkboard")],1),r._v(" "),d("div",{staticClass:"vc-chrome-sliders"},[d("div",{staticClass:"vc-chrome-hue-wrap"},[d("hue",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1),r._v(" "),r.disableAlpha?r._e():d("div",{staticClass:"vc-chrome-alpha-wrap"},[d("alpha",{on:{change:r.childChange},model:{value:r.colors,callback:function(g){r.colors=g},expression:"colors"}})],1)])]),r._v(" "),r.disableFields?r._e():d("div",{staticClass:"vc-chrome-fields-wrap"},[d("div",{directives:[{name:"show",rawName:"v-show",value:r.fieldsIndex===0,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[r.hasAlpha?r._e():d("ed-in",{attrs:{label:"hex",value:r.colors.hex},on:{change:r.inputChange}}),r._v(" "),r.hasAlpha?d("ed-in",{attrs:{label:"hex",value:r.colors.hex8},on:{change:r.inputChange}}):r._e()],1)]),r._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:r.fieldsIndex===1,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"r",value:r.colors.rgba.r},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"g",value:r.colors.rgba.g},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"b",value:r.colors.rgba.b},on:{change:r.inputChange}})],1),r._v(" "),r.disableAlpha?r._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:r.colors.a,"arrow-offset":.01,max:1},on:{change:r.inputChange}})],1)]),r._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:r.fieldsIndex===2,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"h",value:r.hsl.h},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"s",value:r.hsl.s},on:{change:r.inputChange}})],1),r._v(" "),d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"l",value:r.hsl.l},on:{change:r.inputChange}})],1),r._v(" "),r.disableAlpha?r._e():d("div",{staticClass:"vc-chrome-field"},[d("ed-in",{attrs:{label:"a",value:r.colors.a,"arrow-offset":.01,max:1},on:{change:r.inputChange}})],1)]),r._v(" "),d("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:r.toggleViews}},[d("div",{staticClass:"vc-chrome-toggle-icon"},[d("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:r.showHighlight,mouseenter:r.showHighlight,mouseout:r.hideHighlight}},[d("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),r._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:r.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_},function(i,n,o){function s(F){o(144)}Object.defineProperty(n,"__esModule",{value:!0});var l=o(59),_=o.n(l);for(var r in l)r!=="default"&&function(F){o.d(n,F,function(){return l[F]})}(r);var f=o(146),d=o(2),g=s,h=d(_.a,f.a,!1,g,null,null);h.options.__file="src/components/Twitter.vue",n.default=h.exports},function(i,n,o){var s=o(145);typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals),o(1)("669a48a5",s,!1,{})},function(i,n,o){n=i.exports=o(0)(!1),n.push([i.i,`
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
`,""])},function(i,n,o){var s=function(){var r=this,f=r.$createElement,d=r._self._c||f;return d("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":r.triangle==="hide","vc-twitter-top-left-triangle ":r.triangle==="top-left","vc-twitter-top-right-triangle ":r.triangle==="top-right"},style:{width:typeof r.width=="number"?r.width+"px":r.width}},[d("div",{staticClass:"vc-twitter-triangle-shadow"}),r._v(" "),d("div",{staticClass:"vc-twitter-triangle"}),r._v(" "),d("div",{staticClass:"vc-twitter-body"},[r._l(r.defaultColors,function(g,h){return d("span",{key:h,staticClass:"vc-twitter-swatch",style:{background:g,boxShadow:"0 0 4px "+(r.equal(g)?g:"transparent")},on:{click:function(F){return r.handlerClick(g)}}})}),r._v(" "),d("div",{staticClass:"vc-twitter-hash"},[r._v("#")]),r._v(" "),d("editable-input",{attrs:{label:"#",value:r.hex},on:{change:r.inputChange}}),r._v(" "),d("div",{staticClass:"vc-twitter-clear"})],2)])},l=[];s._withStripped=!0;var _={render:s,staticRenderFns:l};n.a=_}])})})(dl);var gc=dl.exports;oe(w1);const Es=/^#([a-f0-9]{3}|[a-f0-9]{6})$/i,hc={name:"NcColorPicker",components:{ArrowLeft:_l,Check:Vn,Chrome:gc.Chrome,DotsHorizontal:In,NcButton:Ka,NcPopover:Gn},props:{value:{type:String,required:!0},advancedFields:{type:Boolean,default:!1},paletteOnly:{type:Boolean,default:!1},palette:{type:Array,default:()=>[...Ef],validator:e=>e.every(a=>typeof a=="string"&&Es.test(a)||typeof a=="object"&&a.color&&Es.test(a.color))},container:{type:[String,Object,Element,Boolean],default:"body"}},emits:["submit","close","update:open","update:value","input"],data(){return{currentColor:this.value,advanced:!1,ariaBack:N("Back"),ariaMore:N("More options")}},computed:{normalizedPalette(){return this.palette.map(e=>({color:typeof e=="object"?e.color:e,name:typeof e=="object"&&e.name?e.name:N("A color with a HEX value {hex}",{hex:e.color})}))},uid(){return dt()},contrastColor(){return this.calculateLuma(this.currentColor)>.5?"#000000":"#FFFFFF"}},watch:{value(e){this.currentColor=e}},methods:{t:N,handleConfirm(){this.$emit("submit",this.currentColor),this.handleClose(),this.advanced=!1},handleClose(){this.$emit("close"),this.$emit("update:open",!1)},handleBack(){this.advanced=!1},handleMoreSettings(){this.advanced=!0},pickColor(e){typeof e!="string"&&(e=this.currentColor.hex),this.currentColor=e,this.$emit("update:value",e),this.$emit("input",e)},calculateLuma(e){const[a,i,n]=this.hexToRGB(e);return(.2126*a+.7152*i+.0722*n)/255},hexToRGB(e){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}}};var Fc=function(){var e=this,a=e._self._c;return a("NcPopover",e._g(e._b({attrs:{"popup-role":"dialog",container:e.container},on:{"apply-hide":e.handleClose},scopedSlots:e._u([{key:"trigger",fn:function(i){return[e._t("default",null,null,i)]}}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[a("div",{staticClass:"color-picker",class:{"color-picker--advanced-fields":e.advanced&&e.advancedFields},attrs:{role:"dialog","aria-modal":"true","aria-label":e.t("Color picker")}},[a("Transition",{attrs:{name:"slide",mode:"out-in"}},[e.advanced?a("Chrome",{staticClass:"color-picker__advanced",attrs:{"disable-alpha":!0,"disable-fields":!e.advancedFields},on:{input:e.pickColor},model:{value:e.currentColor,callback:function(i){e.currentColor=i},expression:"currentColor"}}):a("div",{staticClass:"color-picker__simple"},e._l(e.normalizedPalette,function({color:i,name:n},o){return a("label",{key:o,staticClass:"color-picker__simple-color-circle",class:{"color-picker__simple-color-circle--active":i===e.currentColor},style:{backgroundColor:i}},[i===e.currentColor?a("Check",{attrs:{size:20,"fill-color":e.contrastColor}}):e._e(),a("input",{staticClass:"hidden-visually",attrs:{type:"radio","aria-label":n,name:"color-picker-".concat(e.uid)},domProps:{checked:i===e.currentColor},on:{click:function(s){return e.pickColor(i)}}})],1)}),0)],1),e.paletteOnly?e._e():a("div",{staticClass:"color-picker__navigation"},[e.advanced?a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaBack},on:{click:e.handleBack},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}):a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaMore},on:{click:e.handleMoreSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1056868794)}),a("NcButton",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v(" "+e._s(e.t("Choose"))+" ")])],1)],1)])},uc=[],cc=ie(hc,Fc,uc,!1,null,"cc496c1d");const i3=cc.exports;oe(v1);const mc={name:"NcDashboardWidgetItem",components:{NcAvatar:$r,NcActions:tr,NcActionButton:t_},props:{id:{type:[String,Number],default:void 0},targetUrl:{type:String,default:void 0},avatarUrl:{type:String,default:void 0},avatarUsername:{type:String,default:void 0},avatarIsNoUser:{type:Boolean,default:!1},overlayIconUrl:{type:String,default:void 0},mainText:{type:String,required:!0},subText:{type:String,default:""},itemMenu:{type:Object,default:()=>({})},forceMenu:{type:Boolean,default:!0}},data(){return{hovered:!1}},computed:{item(){return{id:this.id,targetUrl:this.targetUrl,avatarUrl:this.avatarUrl,avatarUsername:this.avatarUsername,overlayIconUrl:this.overlayIconUrl,mainText:this.mainText,subText:this.subText}},gotMenu(){return Object.keys(this.itemMenu).length!==0||!!this.$slots.actions},gotOverlayIcon(){return this.overlayIconUrl&&this.overlayIconUrl!==""}},methods:{onLinkClick(e){e.target.closest(".action-item")&&e.preventDefault()}}};var pc=function(){var e=this,a=e._self._c;return a("div",{on:{mouseover:function(i){e.hovered=!0},mouseleave:function(i){e.hovered=!1}}},[a(e.targetUrl?"a":"div",{tag:"component",class:{"item-list__entry":!0,"item-list__entry--has-actions-menu":e.gotMenu},attrs:{href:e.targetUrl||void 0,target:e.targetUrl?"_blank":void 0},on:{click:e.onLinkClick}},[e._t("avatar",function(){return[a("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,url:e.avatarUrl,user:e.avatarUsername,"is-no-user":e.avatarIsNoUser,"show-user-status":!e.gotOverlayIcon}})]},{avatarUrl:e.avatarUrl,avatarUsername:e.avatarUsername}),e.overlayIconUrl?a("img",{staticClass:"item-icon",attrs:{alt:"",src:e.overlayIconUrl}}):e._e(),a("div",{staticClass:"item__details"},[a("h3",{attrs:{title:e.mainText}},[e._v(" "+e._s(e.mainText)+" ")]),e.subText!==""?a("span",{staticClass:"message",attrs:{title:e.subText}},[e._v(" "+e._s(e.subText)+" ")]):e._e()]),e.gotMenu?a("NcActions",{attrs:{"force-menu":e.forceMenu}},[e._t("actions",function(){return e._l(e.itemMenu,function(i,n){return a("NcActionButton",{key:n,attrs:{icon:i.icon,"close-after-click":!0},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),e.$emit(n,e.item)}}},[e._v(" "+e._s(i.text)+" ")])})})],2):e._e()],2)],1)},bc=[],Dc=ie(mc,pc,bc,!1,null,"51bbc625");const n3=Dc.exports;oe(S1),Vn,N("More items …"),oe(R1),N("a few seconds ago"),N("seconds ago"),N("sec. ago");var fl={exports:{}};(function(e,a){(function(i,n){e.exports=n()})(typeof self<"u"?self:Ma,function(){return function(){var i={537:function(){typeof window<"u"&&function(){for(var l=0,_=["ms","moz","webkit","o"],r=0;r<_.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[_[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[_[r]+"CancelAnimationFrame"]||window[_[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(f,d){var g=new Date().getTime(),h=Math.max(0,16-(g-l)),F=window.setTimeout(function(){f(g+h)},h);return l=g+h,F}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(f){clearTimeout(f)})}()}},n={};function o(l){var _=n[l];if(_!==void 0)return _.exports;var r=n[l]={exports:{}};return i[l](r,r.exports,o),r.exports}o.d=function(l,_){for(var r in _)o.o(_,r)&&!o.o(l,r)&&Object.defineProperty(l,r,{enumerable:!0,get:_[r]})},o.o=function(l,_){return Object.prototype.hasOwnProperty.call(l,_)},o.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s={};return function(){o.r(s),o.d(s,{Anchors:function(){return R},Category:function(){return je},Emoji:function(){return Ke},EmojiData:function(){return Re},EmojiIndex:function(){return Te},EmojiView:function(){return ye},Picker:function(){return W},Preview:function(){return A},Search:function(){return j},Skins:function(){return b},frequently:function(){return z},sanitize:function(){return Ve},store:function(){return h},uncompress:function(){return M}});var l,_,r="emoji-mart",f=JSON,d=typeof window<"u"&&"localStorage"in window;function g(u,D){if(_)_(u,D);else{if(!d)return;try{window.localStorage["".concat(r,".").concat(u)]=f.stringify(D)}catch{}}}var h={update:function(u){for(var D in u)g(D,u[D])},set:g,get:function(u){if(l)return l(u);if(d){try{var D=window.localStorage["".concat(r,".").concat(u)]}catch{return}return D?JSON.parse(D):void 0}},setNamespace:function(u){r=u},setHandlers:function(u){u||(u={}),l=u.getter,_=u.setter}};function F(u){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},F(u)}function m(u,D){(D==null||D>u.length)&&(D=u.length);for(var y=0,C=new Array(D);y<D;y++)C[y]=u[y];return C}var p={name:"a",unified:"b",non_qualified:"c",has_img_apple:"d",has_img_google:"e",has_img_twitter:"f",has_img_facebook:"h",keywords:"j",sheet:"k",emoticons:"l",text:"m",short_names:"n",added_in:"o"},T=function(u){var D=[],y=function(C,q){C&&(Array.isArray(C)?C:[C]).forEach(function(G){(q?G.split(/[-|_|\s]+/):[G]).forEach(function(Q){Q=Q.toLowerCase(),D.indexOf(Q)==-1&&D.push(Q)})})};return y(u.short_names,!0),y(u.name,!0),y(u.keywords,!1),y(u.emoticons,!1),D.join(",")};function k(u){var D,y=function(G,Q){var se=typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(!se){if(Array.isArray(G)||(se=function(Ce,Ja){if(Ce){if(typeof Ce=="string")return m(Ce,Ja);var fa=Object.prototype.toString.call(Ce).slice(8,-1);return fa==="Object"&&Ce.constructor&&(fa=Ce.constructor.name),fa==="Map"||fa==="Set"?Array.from(Ce):fa==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fa)?m(Ce,Ja):void 0}}(G))||Q){se&&(G=se);var ae=0,ke=function(){};return{s:ke,n:function(){return ae>=G.length?{done:!0}:{done:!1,value:G[ae++]}},e:function(Ce){throw Ce},f:ke}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye,ct=!0,mt=!1;return{s:function(){se=se.call(G)},n:function(){var Ce=se.next();return ct=Ce.done,Ce},e:function(Ce){mt=!0,Ye=Ce},f:function(){try{ct||se.return==null||se.return()}finally{if(mt)throw Ye}}}}(Object.getOwnPropertyNames(u));try{for(y.s();!(D=y.n()).done;){var C=D.value,q=u[C];u[C]=q&&F(q)==="object"?k(q):q}}catch(G){y.e(G)}finally{y.f()}return Object.freeze(u)}var w,S,M=function(u){if(!u.compressed)return u;for(var D in u.compressed=!1,u.emojis){var y=u.emojis[D];for(var C in p)y[C]=y[p[C]],delete y[p[C]];y.short_names||(y.short_names=[]),y.short_names.unshift(D),y.sheet_x=y.sheet[0],y.sheet_y=y.sheet[1],delete y.sheet,y.text||(y.text=""),y.added_in||(y.added_in=6),y.added_in=y.added_in.toFixed(1),y.search=T(y)}return k(u)},L=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart","hankey"],B={};function P(){S=!0,w=h.get("frequently")}var z={add:function(u){S||P();var D=u.id;w||(w=B),w[D]||(w[D]=0),w[D]+=1,h.set("last",D),h.set("frequently",w)},get:function(u){if(S||P(),!w){B={};for(var D=[],y=Math.min(u,L.length),C=0;C<y;C++)B[L[C]]=parseInt((y-C)/4,10)+1,D.push(L[C]);return D}var q=u,G=[];for(var Q in w)w.hasOwnProperty(Q)&&G.push(Q);var se=G.sort(function(ke,Ye){return w[ke]-w[Ye]}).reverse().slice(0,q),ae=h.get("last");return ae&&se.indexOf(ae)==-1&&(se.pop(),se.push(ae)),se}},Z={activity:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>',custom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2.000000, 1.000000)"><rect id="Rectangle" x="8" y="0" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect><rect id="Rectangle" transform="translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) " x="8.343" y="0.049" width="3" height="21" rx="1.5"></rect></g></svg>',flags:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>',foods:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>',nature:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>',objects:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>',smileys:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>',people:'<svg xmlns:svg="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"> <path id="path3814" d="m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z" /> <path id="path3816" d="M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z " /> </svg>',places:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>',recent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>',symbols:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'};function c(u,D,y,C,q,G,Q,se){var ae,ke=typeof u=="function"?u.options:u;return D&&(ke.render=D,ke.staticRenderFns=y,ke._compiled=!0),{exports:u,options:ke}}var v=c({props:{i18n:{type:Object,required:!0},color:{type:String},categories:{type:Array,required:!0},activeCategory:{type:Object,default:function(){return{}}}},emits:["click"],created:function(){this.svgs=Z}},function(){var u=this,D=u._self._c;return D("div",{staticClass:"emoji-mart-anchors",attrs:{role:"tablist"}},u._l(u.categories,function(y){return D("button",{key:y.id,class:{"emoji-mart-anchor":!0,"emoji-mart-anchor-selected":y.id==u.activeCategory.id},style:{color:y.id==u.activeCategory.id?u.color:""},attrs:{role:"tab",type:"button","aria-label":y.name,"aria-selected":y.id==u.activeCategory.id,"data-title":u.i18n.categories[y.id]},on:{click:function(C){return u.$emit("click",y)}}},[D("div",{attrs:{"aria-hidden":"true"},domProps:{innerHTML:u._s(u.svgs[y.id])}}),u._v(" "),D("span",{staticClass:"emoji-mart-anchor-bar",style:{backgroundColor:u.color},attrs:{"aria-hidden":"true"}})])}),0)},[]),R=v.exports;function O(u,D){if(!(u instanceof D))throw new TypeError("Cannot call a class as a function")}function U(u){var D=function(y,C){if(F(y)!="object"||!y)return y;var q=y[Symbol.toPrimitive];if(q!==void 0){var G=q.call(y,"string");if(F(G)!="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(u);return F(D)=="symbol"?D:D+""}function Y(u,D){for(var y=0;y<D.length;y++){var C=D[y];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(u,U(C.key),C)}}function te(u,D,y){return D&&Y(u.prototype,D),Object.defineProperty(u,"prototype",{writable:!1}),u}var ee=String.fromCodePoint||function(){var u,D,y=[],C=-1,q=arguments.length;if(!q)return"";for(var G="";++C<q;){var Q=Number(arguments[C]);if(!isFinite(Q)||Q<0||Q>1114111||Math.floor(Q)!=Q)throw RangeError("Invalid code point: "+Q);Q<=65535?y.push(Q):(u=55296+((Q-=65536)>>10),D=Q%1024+56320,y.push(u,D)),(C+1===q||y.length>16384)&&(G+=String.fromCharCode.apply(null,y),y.length=0)}return G};function fe(u){var D=u.split("-").map(function(y){return"0x".concat(y)});return ee.apply(null,D)}function ne(u){return u.reduce(function(D,y){return D.indexOf(y)===-1&&D.push(y),D},[])}function pe(u,D){var y=ne(u),C=ne(D);return y.filter(function(q){return C.indexOf(q)>=0})}function we(u,D){var y={};for(var C in u){var q=u[C],G=q;D.hasOwnProperty(C)&&(G=D[C]),F(G)==="object"&&(G=we(q,G)),y[C]=G}return y}function me(u,D){var y=typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(!y){if(Array.isArray(u)||(y=function(ae,ke){if(ae){if(typeof ae=="string")return ze(ae,ke);var Ye=Object.prototype.toString.call(ae).slice(8,-1);return Ye==="Object"&&ae.constructor&&(Ye=ae.constructor.name),Ye==="Map"||Ye==="Set"?Array.from(ae):Ye==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ye)?ze(ae,ke):void 0}}(u))||D){y&&(u=y);var C=0,q=function(){};return{s:q,n:function(){return C>=u.length?{done:!0}:{done:!1,value:u[C++]}},e:function(ae){throw ae},f:q}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G,Q=!0,se=!1;return{s:function(){y=y.call(u)},n:function(){var ae=y.next();return Q=ae.done,ae},e:function(ae){se=!0,G=ae},f:function(){try{Q||y.return==null||y.return()}finally{if(se)throw G}}}}function ze(u,D){(D==null||D>u.length)&&(D=u.length);for(var y=0,C=new Array(D);y<D;y++)C[y]=u[y];return C}var Oe=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,Le=["1F3FA","1F3FB","1F3FC","1F3FD","1F3FE","1F3FF"],Te=function(){return te(function u(D){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=y.emojisToShowFilter,q=y.include,G=y.exclude,Q=y.custom,se=y.recent,ae=y.recentLength,ke=ae===void 0?20:ae;O(this,u),this._data=M(D),this._emojisFilter=C||null,this._include=q||null,this._exclude=G||null,this._custom=Q||[],this._recent=se||z.get(ke),this._emojis={},this._nativeEmojis={},this._emoticons={},this._categories=[],this._recentCategory={id:"recent",name:"Recent",emojis:[]},this._customCategory={id:"custom",name:"Custom",emojis:[]},this._searchIndex={},this.buildIndex(),Object.freeze(this)},[{key:"buildIndex",value:function(){var u=this,D=this._data.categories;if(this._include&&(D=(D=D.filter(function(G){return u._include.includes(G.id)})).sort(function(G,Q){var se=u._include.indexOf(G.id),ae=u._include.indexOf(Q.id);return se<ae?-1:se>ae?1:0})),D.forEach(function(G){if(u.isCategoryNeeded(G.id)){var Q={id:G.id,name:G.name,emojis:[]};G.emojis.forEach(function(se){var ae=u.addEmoji(se);ae&&Q.emojis.push(ae)}),Q.emojis.length&&u._categories.push(Q)}}),this.isCategoryNeeded("custom")){if(this._custom.length>0){var y,C=me(this._custom);try{for(C.s();!(y=C.n()).done;){var q=y.value;this.addCustomEmoji(q)}}catch(G){C.e(G)}finally{C.f()}}this._customCategory.emojis.length&&this._categories.push(this._customCategory)}this.isCategoryNeeded("recent")&&(this._recent.length&&this._recent.map(function(G){var Q,se=me(u._customCategory.emojis);try{for(se.s();!(Q=se.n()).done;){var ae=Q.value;if(ae.id===G)return void u._recentCategory.emojis.push(ae)}}catch(ke){se.e(ke)}finally{se.f()}u.hasEmoji(G)&&u._recentCategory.emojis.push(u.emoji(G))}),this._recentCategory.emojis.length&&this._categories.unshift(this._recentCategory))}},{key:"findEmoji",value:function(u,D){var y=u.match(Oe);if(y&&(u=y[1],y[2]&&(D=parseInt(y[2],10))),this._data.aliases.hasOwnProperty(u)&&(u=this._data.aliases[u]),this._emojis.hasOwnProperty(u)){var C=this._emojis[u];return D?C.getSkin(D):C}return this._nativeEmojis.hasOwnProperty(u)?this._nativeEmojis[u]:null}},{key:"categories",value:function(){return this._categories}},{key:"emoji",value:function(u){this._data.aliases.hasOwnProperty(u)&&(u=this._data.aliases[u]);var D=this._emojis[u];if(!D)throw new Error("Can not find emoji by id: "+u);return D}},{key:"firstEmoji",value:function(){var u=this._emojis[Object.keys(this._emojis)[0]];if(!u)throw new Error("Can not get first emoji");return u}},{key:"hasEmoji",value:function(u){return this._data.aliases.hasOwnProperty(u)&&(u=this._data.aliases[u]),!!this._emojis[u]}},{key:"nativeEmoji",value:function(u){return this._nativeEmojis.hasOwnProperty(u)?this._nativeEmojis[u]:null}},{key:"search",value:function(u,D){var y=this;if(D||(D=75),!u.length)return null;if(u=="-"||u=="-1")return[this.emoji("-1")];var C,q=u.toLowerCase().split(/[\s|,|\-|_]+/);q.length>2&&(q=[q[0],q[1]]),C=q.map(function(Q){for(var se=y._emojis,ae=y._searchIndex,ke=0,Ye=function(){var mt=Q[ct];if(ke++,ae[mt]||(ae[mt]={}),!(ae=ae[mt]).results){var Ce={};for(var Ja in ae.results=[],ae.emojis={},se){var fa=se[Ja],jl=fa._data.search,ko=Q.substr(0,ke),Ao=jl.indexOf(ko);if(Ao!=-1){var wo=Ao+1;ko==Ja&&(wo=0),ae.results.push(fa),ae.emojis[Ja]=fa,Ce[Ja]=wo}}ae.results.sort(function(Yl,ql){return Ce[Yl.id]-Ce[ql.id]})}se=ae.emojis},ct=0;ct<Q.length;ct++)Ye();return ae.results}).filter(function(Q){return Q});var G=null;return(G=C.length>1?pe.apply(null,C):C.length?C[0]:[])&&G.length>D&&(G=G.slice(0,D)),G}},{key:"addCustomEmoji",value:function(u){var D=Object.assign({},u,{id:u.short_names[0],custom:!0});D.search||(D.search=T(D));var y=new Re(D);return this._emojis[y.id]=y,this._customCategory.emojis.push(y),y}},{key:"addEmoji",value:function(u){var D=this,y=this._data.emojis[u];if(!this.isEmojiNeeded(y))return!1;var C=new Re(y);if(this._emojis[u]=C,C.native&&(this._nativeEmojis[C.native]=C),C._skins)for(var q in C._skins){var G=C._skins[q];G.native&&(this._nativeEmojis[G.native]=G)}return C.emoticons&&C.emoticons.forEach(function(Q){D._emoticons[Q]||(D._emoticons[Q]=u)}),C}},{key:"isCategoryNeeded",value:function(u){var D=!this._include||!this._include.length||this._include.indexOf(u)>-1,y=!(!this._exclude||!this._exclude.length)&&this._exclude.indexOf(u)>-1;return!(!D||y)}},{key:"isEmojiNeeded",value:function(u){return!this._emojisFilter||this._emojisFilter(u)}}])}(),Re=function(){return te(function u(D){if(O(this,u),this._data=Object.assign({},D),this._skins=null,this._data.skin_variations)for(var y in this._skins=[],Le){var C=Le[y],q=this._data.skin_variations[C],G=Object.assign({},D);for(var Q in q)G[Q]=q[Q];delete G.skin_variations,G.skin_tone=parseInt(y)+1,this._skins.push(new u(G))}for(var se in this._sanitized=Ve(this._data),this._sanitized)this[se]=this._sanitized[se];this.short_names=this._data.short_names,this.short_name=this._data.short_names[0],Object.freeze(this)},[{key:"getSkin",value:function(u){return u&&u!="native"&&this._skins?this._skins[u-1]:this}},{key:"getPosition",value:function(){var u=+(1.6666666666666667*this._data.sheet_x).toFixed(2),D=+(100/60*this._data.sheet_y).toFixed(2);return"".concat(u,"% ").concat(D,"%")}},{key:"ariaLabel",value:function(){return[this.native].concat(this.short_names).filter(Boolean).join(", ")}}])}(),ye=function(){return te(function u(D,y,C,q,G,Q,se){O(this,u),this._emoji=D,this._native=q,this._skin=y,this._set=C,this._fallback=G,this.canRender=this._canRender(),this.cssClass=this._cssClass(),this.cssStyle=this._cssStyle(se),this.content=this._content(),this.title=Q===!0?D.short_name:null,this.ariaLabel=D.ariaLabel(),Object.freeze(this)},[{key:"getEmoji",value:function(){return this._emoji.getSkin(this._skin)}},{key:"_canRender",value:function(){return this._isCustom()||this._isNative()||this._hasEmoji()||this._fallback}},{key:"_cssClass",value:function(){return["emoji-set-"+this._set,"emoji-type-"+this._emojiType()]}},{key:"_cssStyle",value:function(u){var D={};return this._isCustom()?D={backgroundImage:"url("+this.getEmoji()._data.imageUrl+")",backgroundSize:"100%",width:u+"px",height:u+"px"}:this._hasEmoji()&&!this._isNative()&&(D={backgroundPosition:this.getEmoji().getPosition()}),u&&(D=this._isNative()?Object.assign(D,{fontSize:Math.round(.95*u*10)/10+"px"}):Object.assign(D,{width:u+"px",height:u+"px"})),D}},{key:"_content",value:function(){return this._isCustom()?"":this._isNative()?this.getEmoji().native:this._hasEmoji()?"":this._fallback?this._fallback(this.getEmoji()):null}},{key:"_isNative",value:function(){return this._native}},{key:"_isCustom",value:function(){return this.getEmoji().custom}},{key:"_hasEmoji",value:function(){if(!this.getEmoji()._data)return!1;var u=this.getEmoji()._data["has_img_"+this._set];return u===void 0||u}},{key:"_emojiType",value:function(){return this._isCustom()?"custom":this._isNative()?"native":this._hasEmoji()?"image":"fallback"}}])}();function Ve(u){var D=u.name,y=u.short_names,C=u.skin_tone,q=u.skin_variations,G=u.emoticons,Q=u.unified,se=u.custom,ae=u.imageUrl,ke=u.id||y[0],Ye=":".concat(ke,":");return se?{id:ke,name:D,colons:Ye,emoticons:G,custom:se,imageUrl:ae}:(C&&(Ye+=":skin-tone-".concat(C,":")),{id:ke,name:D,colons:Ye,emoticons:G,unified:Q.toLowerCase(),skin:C||(q?1:null),native:fe(Q)})}function J(u,D,y){return(D=U(D))in u?Object.defineProperty(u,D,{value:y,enumerable:!0,configurable:!0,writable:!0}):u[D]=y,u}var Se={native:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},fallback:{type:Function},skin:{type:Number,default:1},set:{type:String,default:"apple"},emoji:{type:[String,Object],required:!0},size:{type:Number,default:null},tag:{type:String,default:"span"}},_e={perLine:{type:Number,default:9},maxSearchResults:{type:Number,default:75},emojiSize:{type:Number,default:24},title:{type:String,default:"Emoji Mart™"},emoji:{type:String,default:"department_store"},color:{type:String,default:"#ae65c5"},set:{type:String,default:"apple"},skin:{type:Number,default:null},defaultSkin:{type:Number,default:1},native:{type:Boolean,default:!1},emojiTooltip:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},i18n:{type:Object,default:function(){return{}}},showPreview:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showCategories:{type:Boolean,default:!0},showSkinTones:{type:Boolean,default:!0},infiniteScroll:{type:Boolean,default:!0},pickerStyles:{type:Object,default:function(){return{}}}};function Ne(u,D){var y=Object.keys(u);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(u);D&&(C=C.filter(function(q){return Object.getOwnPropertyDescriptor(u,q).enumerable})),y.push.apply(y,C)}return y}function Ze(u){for(var D=1;D<arguments.length;D++){var y=arguments[D]!=null?arguments[D]:{};D%2?Ne(Object(y),!0).forEach(function(C){J(u,C,y[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(y)):Ne(Object(y)).forEach(function(C){Object.defineProperty(u,C,Object.getOwnPropertyDescriptor(y,C))})}return u}var Ke=c({props:Ze(Ze({},Se),{},{data:{type:Object,required:!0}}),emits:["click","mouseenter","mouseleave"],computed:{view:function(){return new ye(this.emojiObject,this.skin,this.set,this.native,this.fallback,this.tooltip,this.size)},sanitizedData:function(){return this.emojiObject._sanitized},title:function(){return this.tooltip?this.emojiObject.short_name:null},emojiObject:function(){return typeof this.emoji=="string"?this.data.findEmoji(this.emoji):this.emoji}},created:function(){},methods:{onClick:function(){this.$emit("click",this.emojiObject)},onMouseEnter:function(){this.$emit("mouseenter",this.emojiObject)},onMouseLeave:function(){this.$emit("mouseleave",this.emojiObject)}}},function(){var u=this,D=u._self._c;return u.view.canRender?D(u.tag,{tag:"component",staticClass:"emoji-mart-emoji",attrs:{title:u.view.title,"aria-label":u.view.ariaLabel,"data-title":u.title},on:{mouseenter:u.onMouseEnter,mouseleave:u.onMouseLeave,click:u.onClick}},[D("span",{class:u.view.cssClass,style:u.view.cssStyle},[u._v(u._s(u.view.content))])]):u._e()},[]).exports,je=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},emojis:{type:Array},emojiProps:{type:Object,required:!0}},methods:{activeClass:function(u){return this.emojiProps.selectedEmoji&&this.emojiProps.selectedEmojiCategory&&this.emojiProps.selectedEmoji.id==u.id&&this.emojiProps.selectedEmojiCategory.id==this.id?"emoji-mart-emoji-selected":""}},computed:{isVisible:function(){return!!this.emojis},isSearch:function(){return this.name=="Search"},hasResults:function(){return this.emojis.length>0},emojiObjects:function(){var u=this;return this.emojis.map(function(D){return{emojiObject:D,emojiView:new ye(D,u.emojiProps.skin,u.emojiProps.set,u.emojiProps.native,u.emojiProps.fallback,u.emojiProps.emojiTooltip,u.emojiProps.emojiSize)}})}},components:{Emoji:Ke}},function(){var u=this,D=u._self._c;return u.isVisible&&(u.isSearch||u.hasResults)?D("section",{class:{"emoji-mart-category":!0,"emoji-mart-no-results":!u.hasResults},attrs:{"aria-label":u.i18n.categories[u.id]}},[D("div",{staticClass:"emoji-mart-category-label"},[D("h3",{staticClass:"emoji-mart-category-label"},[u._v(u._s(u.i18n.categories[u.id]))])]),u._v(" "),u._l(u.emojiObjects,function(y){var C=y.emojiObject,q=y.emojiView;return[q.canRender?D("button",{key:C.id,staticClass:"emoji-mart-emoji",class:u.activeClass(C),attrs:{"aria-label":q.ariaLabel,role:"option","aria-selected":"false","aria-posinset":"1","aria-setsize":"1812",type:"button","data-title":C.short_name,title:q.title},on:{mouseenter:function(G){u.emojiProps.onEnter(q.getEmoji())},mouseleave:function(G){u.emojiProps.onLeave(q.getEmoji())},click:function(G){u.emojiProps.onClick(q.getEmoji())}}},[D("span",{class:q.cssClass,style:q.cssStyle},[u._v(u._s(q.content))])]):u._e()]}),u._v(" "),u.hasResults?u._e():D("div",[D("emoji",{attrs:{data:u.data,emoji:"sleuth_or_spy",native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}}),u._v(" "),D("div",{staticClass:"emoji-mart-no-results-label"},[u._v(u._s(u.i18n.notfound))])],1)],2):u._e()},[]).exports,b=c({props:{skin:{type:Number,required:!0}},emits:["change"],data:function(){return{opened:!1}},methods:{onClick:function(u){this.opened&&u!=this.skin&&this.$emit("change",u),this.opened=!this.opened}}},function(){var u=this,D=u._self._c;return D("div",{class:{"emoji-mart-skin-swatches":!0,"emoji-mart-skin-swatches-opened":u.opened}},u._l(6,function(y){return D("span",{key:y,class:{"emoji-mart-skin-swatch":!0,"emoji-mart-skin-swatch-selected":u.skin==y}},[D("span",{class:"emoji-mart-skin emoji-mart-skin-tone-"+y,on:{click:function(C){return u.onClick(y)}}})])}),0)},[]).exports,A=c({props:{data:{type:Object,required:!0},title:{type:String,required:!0},emoji:{type:[String,Object]},idleEmoji:{type:[String,Object],required:!0},showSkinTones:{type:Boolean,default:!0},emojiProps:{type:Object,required:!0},skinProps:{type:Object,required:!0},onSkinChange:{type:Function,required:!0}},computed:{emojiData:function(){return this.emoji?this.emoji:{}},emojiShortNames:function(){return this.emojiData.short_names},emojiEmoticons:function(){return this.emojiData.emoticons}},components:{Emoji:Ke,Skins:b}},function(){var u=this,D=u._self._c;return D("div",{staticClass:"emoji-mart-preview"},[u.emoji?[D("div",{staticClass:"emoji-mart-preview-emoji"},[D("emoji",{attrs:{data:u.data,emoji:u.emoji,native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}})],1),u._v(" "),D("div",{staticClass:"emoji-mart-preview-data"},[D("div",{staticClass:"emoji-mart-preview-name"},[u._v(u._s(u.emoji.name))]),u._v(" "),D("div",{staticClass:"emoji-mart-preview-shortnames"},u._l(u.emojiShortNames,function(y){return D("span",{key:y,staticClass:"emoji-mart-preview-shortname"},[u._v(":"+u._s(y)+":")])}),0),u._v(" "),D("div",{staticClass:"emoji-mart-preview-emoticons"},u._l(u.emojiEmoticons,function(y){return D("span",{key:y,staticClass:"emoji-mart-preview-emoticon"},[u._v(u._s(y))])}),0)])]:[D("div",{staticClass:"emoji-mart-preview-emoji"},[D("emoji",{attrs:{data:u.data,emoji:u.idleEmoji,native:u.emojiProps.native,skin:u.emojiProps.skin,set:u.emojiProps.set}})],1),u._v(" "),D("div",{staticClass:"emoji-mart-preview-data"},[D("span",{staticClass:"emoji-mart-title-label"},[u._v(u._s(u.title))])]),u._v(" "),u.showSkinTones?D("div",{staticClass:"emoji-mart-preview-skins"},[D("skins",{attrs:{skin:u.skinProps.skin},on:{change:function(y){return u.onSkinChange(y)}}})],1):u._e()]],2)},[]).exports,E=c({props:{data:{type:Object,required:!0},i18n:{type:Object,required:!0},autoFocus:{type:Boolean,default:!1},onSearch:{type:Function,required:!0},onArrowLeft:{type:Function,required:!1},onArrowRight:{type:Function,required:!1},onArrowDown:{type:Function,required:!1},onArrowUp:{type:Function,required:!1},onEnter:{type:Function,required:!1}},emits:["search","enter","arrowUp","arrowDown","arrowRight","arrowLeft"],data:function(){return{value:""}},computed:{emojiIndex:function(){return this.data}},watch:{value:function(){this.$emit("search",this.value)}},methods:{clear:function(){this.value=""}},mounted:function(){var u=this.$el.querySelector("input");this.autoFocus&&u.focus()}},function(){var u=this,D=u._self._c;return D("div",{staticClass:"emoji-mart-search"},[D("input",{directives:[{name:"model",rawName:"v-model",value:u.value,expression:"value"}],attrs:{type:"text",placeholder:u.i18n.search,role:"textbox","aria-autocomplete":"list","aria-owns":"emoji-mart-list","aria-label":"Search for an emoji","aria-describedby":"emoji-mart-search-description"},domProps:{value:u.value},on:{keydown:[function(y){return!y.type.indexOf("key")&&u._k(y.keyCode,"left",37,y.key,["Left","ArrowLeft"])||"button"in y&&y.button!==0?null:function(C){return u.$emit("arrowLeft",C)}.apply(null,arguments)},function(y){return!y.type.indexOf("key")&&u._k(y.keyCode,"right",39,y.key,["Right","ArrowRight"])||"button"in y&&y.button!==2?null:function(){return u.$emit("arrowRight")}.apply(null,arguments)},function(y){return!y.type.indexOf("key")&&u._k(y.keyCode,"down",40,y.key,["Down","ArrowDown"])?null:function(){return u.$emit("arrowDown")}.apply(null,arguments)},function(y){return!y.type.indexOf("key")&&u._k(y.keyCode,"up",38,y.key,["Up","ArrowUp"])?null:function(C){return u.$emit("arrowUp",C)}.apply(null,arguments)},function(y){return!y.type.indexOf("key")&&u._k(y.keyCode,"enter",13,y.key,"Enter")?null:function(){return u.$emit("enter")}.apply(null,arguments)}],input:function(y){y.target.composing||(u.value=y.target.value)}}}),u._v(" "),D("span",{staticClass:"hidden",attrs:{id:"emoji-picker-search-description"}},[u._v(`Use the left, right, up and down arrow keys to navigate the emoji search
    results.`)])])},[]),j=E.exports;function $(u,D){(D==null||D>u.length)&&(D=u.length);for(var y=0,C=new Array(D);y<D;y++)C[y]=u[y];return C}o(537);var V=function(){return te(function u(D){var y,C;O(this,u),this._vm=D,this._data=D.data,this._perLine=D.perLine,this._categories=[],(y=this._categories).push.apply(y,function(q){if(Array.isArray(q))return $(q)}(C=this._data.categories())||function(q){if(typeof Symbol<"u"&&q[Symbol.iterator]!=null||q["@@iterator"]!=null)return Array.from(q)}(C)||function(q,G){if(q){if(typeof q=="string")return $(q,G);var Q=Object.prototype.toString.call(q).slice(8,-1);return Q==="Object"&&q.constructor&&(Q=q.constructor.name),Q==="Map"||Q==="Set"?Array.from(q):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?$(q,G):void 0}}(C)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),this._categories=this._categories.filter(function(q){return q.emojis.length>0}),this._categories[0].first=!0,Object.freeze(this._categories),this.activeCategory=this._categories[0],this.searchEmojis=null,this.previewEmoji=null,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=-1},[{key:"onScroll",value:function(){for(var u=this._vm.$refs.scroll.scrollTop,D=this.filteredCategories[0],y=0,C=this.filteredCategories.length;y<C;y++){var q=this.filteredCategories[y],G=this._vm.getCategoryComponent(y);if(G&&G.$el.offsetTop-50>u)break;D=q}this.activeCategory=D}},{key:"allCategories",get:function(){return this._categories}},{key:"filteredCategories",get:function(){return this.searchEmojis?[{id:"search",name:"Search",emojis:this.searchEmojis}]:this._categories.filter(function(u){return u.emojis.length>0})}},{key:"previewEmojiCategory",get:function(){return this.previewEmojiCategoryIdx>=0?this.filteredCategories[this.previewEmojiCategoryIdx]:null}},{key:"onAnchorClick",value:function(u){var D=this;if(!this.searchEmojis){var y=this.filteredCategories.indexOf(u),C=this._vm.getCategoryComponent(y);this._vm.infiniteScroll?function(){if(C){var q=C.$el.offsetTop;u.first&&(q=0),D._vm.$refs.scroll.scrollTop=q}}():this.activeCategory=this.filteredCategories[y]}}},{key:"onSearch",value:function(u){var D=this._data.search(u,this.maxSearchResults);this.searchEmojis=D,this.previewEmojiCategoryIdx=0,this.previewEmojiIdx=0,this.updatePreviewEmoji()}},{key:"onEmojiEnter",value:function(u){this.previewEmoji=u,this.previewEmojiIdx=-1,this.previewEmojiCategoryIdx=-1}},{key:"onEmojiLeave",value:function(u){this.previewEmoji=null}},{key:"onArrowLeft",value:function(){this.previewEmojiIdx>0?this.previewEmojiIdx-=1:(this.previewEmojiCategoryIdx-=1,this.previewEmojiCategoryIdx<0?this.previewEmojiCategoryIdx=0:this.previewEmojiIdx=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length-1),this.updatePreviewEmoji()}},{key:"onArrowRight",value:function(){this.previewEmojiIdx<this.emojisLength(this.previewEmojiCategoryIdx)-1?this.previewEmojiIdx+=1:(this.previewEmojiCategoryIdx+=1,this.previewEmojiCategoryIdx>=this.filteredCategories.length?this.previewEmojiCategoryIdx=this.filteredCategories.length-1:this.previewEmojiIdx=0),this.updatePreviewEmoji()}},{key:"onArrowDown",value:function(){if(this.previewEmojiIdx==-1)return this.onArrowRight();var u=this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length,D=this._perLine;this.previewEmojiIdx+D>u&&(D=u%this._perLine);for(var y=0;y<D;y++)this.onArrowRight();this.updatePreviewEmoji()}},{key:"onArrowUp",value:function(){var u=this._perLine;this.previewEmojiIdx-u<0&&(u=this.previewEmojiCategoryIdx>0?this.filteredCategories[this.previewEmojiCategoryIdx-1].emojis.length%this._perLine:0);for(var D=0;D<u;D++)this.onArrowLeft();this.updatePreviewEmoji()}},{key:"updatePreviewEmoji",value:function(){var u=this;this.previewEmoji=this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx],this._vm.$nextTick(function(){var D=u._vm.$refs.scroll,y=D.querySelector(".emoji-mart-emoji-selected"),C=D.offsetTop-D.offsetHeight;y&&y.offsetTop+y.offsetHeight>C+D.scrollTop&&(D.scrollTop+=y.offsetHeight),y&&y.offsetTop<D.scrollTop&&(D.scrollTop-=y.offsetHeight)})}},{key:"emojisLength",value:function(u){return u==-1?0:this.filteredCategories[u].emojis.length}}])}();function le(u,D){var y=Object.keys(u);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(u);D&&(C=C.filter(function(q){return Object.getOwnPropertyDescriptor(u,q).enumerable})),y.push.apply(y,C)}return y}function ge(u){for(var D=1;D<arguments.length;D++){var y=arguments[D]!=null?arguments[D]:{};D%2?le(Object(y),!0).forEach(function(C){J(u,C,y[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(y)):le(Object(y)).forEach(function(C){Object.defineProperty(u,C,Object.getOwnPropertyDescriptor(y,C))})}return u}var be={search:"Search",notfound:"No Emoji Found",categories:{search:"Search Results",recent:"Frequently Used",smileys:"Smileys & Emotion",people:"People & Body",nature:"Animals & Nature",foods:"Food & Drink",activity:"Activity",places:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"}},We={props:ge(ge({},_e),{},{data:{type:Object,required:!0}}),emits:["select","skin-change"],data:function(){return{activeSkin:this.skin||h.get("skin")||this.defaultSkin,view:new V(this)}},computed:{customStyles:function(){return ge({width:this.calculateWidth+"px"},this.pickerStyles)},emojiProps:function(){return{native:this.native,skin:this.activeSkin,set:this.set,emojiTooltip:this.emojiTooltip,emojiSize:this.emojiSize,selectedEmoji:this.view.previewEmoji,selectedEmojiCategory:this.view.previewEmojiCategory,onEnter:this.onEmojiEnter.bind(this),onLeave:this.onEmojiLeave.bind(this),onClick:this.onEmojiClick.bind(this)}},skinProps:function(){return{skin:this.activeSkin}},calculateWidth:function(){return this.perLine*(this.emojiSize+12)+12+2+function(){if(typeof document>"u")return 0;var u=document.createElement("div");u.style.width="100px",u.style.height="100px",u.style.overflow="scroll",u.style.position="absolute",u.style.top="-9999px",document.body.appendChild(u);var D=u.offsetWidth-u.clientWidth;return document.body.removeChild(u),D}()},filteredCategories:function(){return this.view.filteredCategories},mergedI18n:function(){return Object.freeze(we(be,this.i18n))},idleEmoji:function(){try{return this.data.emoji(this.emoji)}catch(u){return console.error("Default preview emoji `"+this.emoji+"` is not available, check the Picker `emoji` property"),console.error(u),this.data.firstEmoji()}}},watch:{skin:function(){this.onSkinChange(this.skin)}},methods:{onScroll:function(){this.infiniteScroll&&!this.waitingForPaint&&(this.waitingForPaint=!0,window.requestAnimationFrame(this.onScrollPaint.bind(this)))},onScrollPaint:function(){this.waitingForPaint=!1,this.view.onScroll()},onAnchorClick:function(u){this.view.onAnchorClick(u)},onSearch:function(u){this.view.onSearch(u)},onEmojiEnter:function(u){this.view.onEmojiEnter(u)},onEmojiLeave:function(u){this.view.onEmojiLeave(u)},onArrowLeft:function(u){var D=this.view.previewEmojiIdx;this.view.onArrowLeft(),u&&this.view.previewEmojiIdx!==D&&u.preventDefault()},onArrowRight:function(){this.view.onArrowRight()},onArrowDown:function(){this.view.onArrowDown()},onArrowUp:function(u){this.view.onArrowUp(),u.preventDefault()},onEnter:function(){this.view.previewEmoji&&(this.$emit("select",this.view.previewEmoji),z.add(this.view.previewEmoji))},onEmojiClick:function(u){this.$emit("select",u),z.add(u)},onTextSelect:function(u){u.stopPropagation()},onSkinChange:function(u){this.activeSkin=u,h.update({skin:u}),this.$emit("skin-change",u)},getCategoryComponent:function(u){var D=this.$refs["categories_"+u];return D&&"0"in D?D[0]:D}},components:{Anchors:R,Category:je,Preview:A,Search:j}},H=c(We,function(){var u=this,D=u._self._c;return D("section",{staticClass:"emoji-mart emoji-mart-static",style:u.customStyles},[u.showCategories?D("div",{staticClass:"emoji-mart-bar emoji-mart-bar-anchors"},[D("anchors",{attrs:{data:u.data,i18n:u.mergedI18n,color:u.color,categories:u.view.allCategories,"active-category":u.view.activeCategory},on:{click:u.onAnchorClick}})],1):u._e(),u._v(" "),u._t("searchTemplate",function(){return[u.showSearch?D("search",{ref:"search",attrs:{data:u.data,i18n:u.mergedI18n,"auto-focus":u.autoFocus,"on-search":u.onSearch},on:{search:u.onSearch,arrowLeft:u.onArrowLeft,arrowRight:u.onArrowRight,arrowDown:u.onArrowDown,arrowUp:u.onArrowUp,enter:u.onEnter,select:u.onTextSelect}}):u._e()]},{data:u.data,i18n:u.i18n,autoFocus:u.autoFocus,onSearch:u.onSearch}),u._v(" "),D("div",{ref:"scroll",staticClass:"emoji-mart-scroll",attrs:{role:"tabpanel"},on:{scroll:u.onScroll}},[D("div",{ref:"scrollContent",attrs:{id:"emoji-mart-list",role:"listbox","aria-expanded":"true"}},[u._t("customCategory"),u._v(" "),u._l(u.view.filteredCategories,function(y,C){return D("category",{directives:[{name:"show",rawName:"v-show",value:u.infiniteScroll||y==u.view.activeCategory,expression:"infiniteScroll || category == view.activeCategory"}],key:y.id,ref:"categories_"+C,refInFor:!0,attrs:{data:u.data,i18n:u.mergedI18n,id:y.id,name:y.name,emojis:y.emojis,"emoji-props":u.emojiProps}})})],2)]),u._v(" "),u._t("previewTemplate",function(){return[u.showPreview?D("div",{staticClass:"emoji-mart-bar emoji-mart-bar-preview"},[D("preview",{attrs:{data:u.data,title:u.title,emoji:u.view.previewEmoji,"idle-emoji":u.idleEmoji,"show-skin-tones":u.showSkinTones,"emoji-props":u.emojiProps,"skin-props":u.skinProps,"on-skin-change":u.onSkinChange}})],1):u._e()]},{data:u.data,title:u.title,emoji:u.view.previewEmoji,idleEmoji:u.idleEmoji,showSkinTones:u.showSkinTones,emojiProps:u.emojiProps,skinProps:u.skinProps,onSkinChange:u.onSkinChange})],2)},[]),W=H.exports}(),s}()})})(fl);var ks=fl.exports;const o3=Zn("nextcloud-vue").persist(!0).build();oe(C1,sr,lr,rr);const Tc={name:"CircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var yc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon circle-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Ec=[],kc=ie(Tc,yc,Ec,!1,null,null);const s3=kc.exports;const r3={search:N("Search emoji"),notfound:N("No emoji found"),categories:{search:N("Search results"),recent:N("Frequently used"),smileys:N("Smileys & Emotion"),people:N("People & Body"),nature:N("Animals & Nature"),foods:N("Food & Drink"),activity:N("Activities"),places:N("Travel & Places"),objects:N("Objects"),symbols:N("Symbols"),flags:N("Flags"),custom:N("Custom")}},l3=[new ve(255,222,52,N("Neutral skin color")),new ve(228,205,166,N("Light skin tone")),new ve(250,221,192,N("Medium light skin tone")),new ve(174,129,87,N("Medium skin tone")),new ve(158,113,88,N("Medium dark skin tone")),new ve(96,79,69,N("Dark skin tone"))];ks.Emoji,Ka,Gn,ks.Picker,N("Pick an emoji"),N,oe(B1);const gl={name:"NcProgressBar",props:{value:{type:Number,default:0,validator(e){return e>=0&&e<=100}},size:{type:[String,Number],default:"small",validator(e){return["small","medium"].includes(e)||typeof e=="number"}},error:{type:Boolean,default:!1},type:{type:String,default:"linear",validator(e){return["linear","circular"].includes(e)}},color:{type:String,default:null}},data(){return{stroke:4}},computed:{height(){return this.type==="circular"?Number.isInteger(this.size)?this.size:44:this.size==="small"?4:this.size==="medium"?6:this.size},progress(){return this.value/100},radius(){return this.height/2},radiusNormalized(){return this.radius-3*this.stroke},circumference(){return this.radiusNormalized*2*Math.PI}}},As=()=>{O1((e,a)=>({"497e8a2b":e.color}))},ws=gl.setup;gl.setup=ws?(e,a)=>(As(),ws(e,a)):As;const Ac={name:"AccountGroupIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var wc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon account-group-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},vc=[],Sc=ie(Ac,wc,vc,!1,null,null);const Rc=Sc.exports,Cc={name:"OpenInNewIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Bc=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon open-in-new-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},Oc=[],Nc=ie(Cc,Bc,Oc,!1,null,null);const xc=Nc.exports;oe(N1);const Mc={name:"NcTeamResources",components:{AccountGroup:Rc,ChevronDown:Br,ChevronUp:Vu,OpenInNew:xc,NcButton:Ka,NcIconSvgWrapper:Hn},props:{providerId:{type:String,default:null},itemId:{type:[String,Number],default:null}},data(){var e,a;return{appEnabled:((e=OC==null?void 0:OC.appswebroots)==null?void 0:e.circles)!==void 0&&((a=OC.config.version.split(".")[0])!=null?a:0)>=29,loading:!1,teamResources:null,teamOpen:[]}},computed:{isVisible(){var e;return!this.loading&&((e=this.teamResources)==null?void 0:e.length)>0},teamProviders(){return e=>{var a;return(a=this.teamResources.find(i=>i.teamId===e).resources)==null?void 0:a.reduce((i,n)=>(n.provider.id===this.providerId&&n.id===String(this.itemId)||(i[n.provider.id]||(i[n.provider.id]=n.provider,i[n.provider.id].resources=[]),n.provider.id===this.providerId&&n.id===String(this.itemId))||i[n.provider.id].resources.push(n),i),{})}},open(){return e=>this.teamOpen.indexOf(e)!==-1}},watch:{providerId(){this.fetchTeamResources()},itemId(){this.fetchTeamResources()}},created(){this.fetchTeamResources()},methods:{t:N,async fetchTeamResources(){var e;try{this.loading=!0;const a=await pa.get(Ua("/teams/resources/".concat(this.providerId,"/").concat(this.itemId)));this.teamResources=a.data.ocs.data.teams,this.teamOpen=[(e=this.teamResources[0])==null?void 0:e.teamId]}catch(a){this.teamResources=null,console.error(a)}finally{this.loading=!1}},toggleOpen(e,a){a?this.teamOpen.push(e):this.teamOpen.splice(this.teamOpen.indexOf(e),1)}}};var jc=function(){var e=this,a=e._self._c;return e.appEnabled&&e.isVisible?a("div",{staticClass:"team-resources"},[a("h5",{staticClass:"team-resources__header"},[e._v(" "+e._s(e.t("Related team resources"))+" ")]),e._l(e.teamResources,function(i){return a("details",{key:i.teamId,staticClass:"related-team",attrs:{name:"Team resources",open:e.open(i.teamId)},on:{toggle:n=>e.toggleOpen(i.teamId,n.target.open)}},[a("summary",{staticClass:"related-team__header"},[a("h5",{staticClass:"related-team__name"},[a("AccountGroup",{attrs:{size:20}}),e._v(" "+e._s(i.displayName)+" ")],1),a("NcButton",{attrs:{type:"tertiary",href:i.link,"aria-label":e.t("View team"),title:e.t("View team")},scopedSlots:e._u([{key:"icon",fn:function(){return[a("OpenInNew",{attrs:{size:20}})]},proxy:!0}],null,!0)}),e.open(i.teamId)?a("ChevronUp",{attrs:{size:20}}):a("ChevronDown",{attrs:{size:20}})],1),a("div",e._l(e.teamProviders(i.teamId),function(n){return a("div",{key:n.id,staticClass:"related-team-provider"},[n.resources.length>0?a("h6",[e._v(" "+e._s(n.name)+" ")]):e._e(),a("ul",e._l(n.resources,function(o){return a("li",{key:o.url,staticClass:"related-team-resource"},[a("a",{staticClass:"related-team-resource__link",attrs:{href:o.url}},[o.iconEmoji?a("span",{staticClass:"resource__icon"},[e._v(" "+e._s(o.iconEmoji)+" ")]):o.iconSvg?a("NcIconSvgWrapper",{staticClass:"resource__icon",attrs:{svg:o.iconSvg,size:20}}):o.iconURL?a("span",{staticClass:"resource__icon"},[a("img",{attrs:{src:o.iconURL,alt:""}})]):e._e(),a("span",{staticClass:"resource__name"},[e._v(" "+e._s(o.label)+" ")])],1)])}),0)])}),0)])})],2):e._e()},Yc=[],qc=ie(Mc,jc,Yc,!1,null,"de46bdbe");const _3=qc.exports;oe(x1);const Lc={name:"NcResource",components:{NcButton:Ka},props:{icon:{type:String,required:!0},name:{type:String,required:!0},url:{type:String,required:!0}},data(){return{labelTranslated:N('Open link to "{resourceName}"',{resourceName:this.name})}},computed:{route(){return fo(this.$router,this.url)}},methods:{t:N}};var Zc=function(){var e=this,a=e._self._c;return a("li",{staticClass:"resource"},[a("NcButton",{staticClass:"resource__button",attrs:{"aria-label":e.labelTranslated,type:"tertiary",to:e.route,href:e.route?null:e.url},scopedSlots:e._u([{key:"icon",fn:function(){return[a("div",{staticClass:"resource__icon"},[a("img",{attrs:{src:e.icon}})])]},proxy:!0}])},[e._v(" "+e._s(e.name)+" ")])],1)},Ic=[],Hc=ie(Lc,Zc,Ic,!1,null,"ac1115a7");const d3=Hc.exports;oe(M1),N("Related resources"),N("Anything shared with the same group of people will show up here"),N;const Pc={name:"NcMentionBubble",props:{id:{type:String,required:!0},title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},icon:{type:String,required:!0},iconUrl:{type:[String,null],default:null},source:{type:String,required:!0},primary:{type:Boolean,default:!1}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},mentionText(){return!this.id.includes(" ")&&!this.id.includes("/")?"@".concat(this.id):'@"'.concat(this.id,'"')},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:to}};var Gc=function(){var e=this,a=e._self._c;return a("span",{staticClass:"mention-bubble",class:{"mention-bubble--primary":e.primary},attrs:{contenteditable:"false"}},[a("span",{staticClass:"mention-bubble__wrapper"},[a("span",{staticClass:"mention-bubble__content"},[a("span",{staticClass:"mention-bubble__icon",class:[e.icon,"mention-bubble__icon--".concat(e.avatarUrl?"with-avatar":"")],style:e.avatarUrl?{backgroundImage:"url(".concat(e.avatarUrl,")")}:null}),a("span",{staticClass:"mention-bubble__title",attrs:{role:"heading",title:e.labelWithFallback}})]),a("span",{staticClass:"mention-bubble__select",attrs:{role:"none"}},[e._v(e._s(e.mentionText))])])])},Uc=[],zc=ie(Pc,Gc,Uc,!1,null,"a519576f");const f3=zc.exports,hl=/(?=[a-z0-9_\-@.'])\B/.source,Vc=/(@[a-z0-9_\-@.']+)/.source,Wc=/@&quot;guest\/[a-f0-9]+&quot;/.source,$c=/@&quot;(?:federated_)?(?:group|team|user){1}\/[a-z0-9_\-@.' /:]+&quot;/.source,Qc=/@&quot;[a-z0-9_\-@.' ]+&quot;/.source,Kc="(".concat(Wc,"|").concat($c,"|").concat(Qc,")"),g3=new RegExp("".concat(hl).concat(Vc),"gi"),h3=new RegExp("".concat(hl).concat(Kc),"gi");function ra(e,a){for(var i in a)e[i]=a[i];return e}var Jc=/[!'()*]/g,Xc=function(e){return"%"+e.charCodeAt(0).toString(16)},em=/%2C/g,bt=function(e){return encodeURIComponent(e).replace(Jc,Xc).replace(em,",")};function Nn(e){try{return decodeURIComponent(e)}catch{}return e}function am(e,a,i){a===void 0&&(a={});var n=i||tm,o;try{o=n(e||"")}catch{o={}}for(var s in a){var l=a[s];o[s]=Array.isArray(l)?l.map(vs):vs(l)}return o}var vs=function(e){return e==null||typeof e=="object"?e:String(e)};function tm(e){var a={};return e=e.trim().replace(/^(\?|#|&)/,""),e&&e.split("&").forEach(function(i){var n=i.replace(/\+/g," ").split("="),o=Nn(n.shift()),s=n.length>0?Nn(n.join("=")):null;a[o]===void 0?a[o]=s:Array.isArray(a[o])?a[o].push(s):a[o]=[a[o],s]}),a}function im(e){var a=e?Object.keys(e).map(function(i){var n=e[i];if(n===void 0)return"";if(n===null)return bt(i);if(Array.isArray(n)){var o=[];return n.forEach(function(s){s!==void 0&&(s===null?o.push(bt(i)):o.push(bt(i)+"="+bt(s)))}),o.join("&")}return bt(i)+"="+bt(n)}).filter(function(i){return i.length>0}).join("&"):null;return a?"?"+a:""}var E0=/\/?$/;function k0(e,a,i,n){var o=n&&n.options.stringifyQuery,s=a.query||{};try{s=xn(s)}catch{}var l={name:a.name||e&&e.name,meta:e&&e.meta||{},path:a.path||"/",hash:a.hash||"",query:s,params:a.params||{},fullPath:Ss(a,o),matched:e?nm(e):[]};return i&&(l.redirectedFrom=Ss(i,o)),Object.freeze(l)}function xn(e){if(Array.isArray(e))return e.map(xn);if(e&&typeof e=="object"){var a={};for(var i in e)a[i]=xn(e[i]);return a}else return e}var Qa=k0(null,{path:"/"});function nm(e){for(var a=[];e;)a.unshift(e),e=e.parent;return a}function Ss(e,a){var i=e.path,n=e.query;n===void 0&&(n={});var o=e.hash;o===void 0&&(o="");var s=a||im;return(i||"/")+s(n)+o}function Fl(e,a,i){return a===Qa?e===a:a?e.path&&a.path?e.path.replace(E0,"")===a.path.replace(E0,"")&&(i||e.hash===a.hash&&ji(e.query,a.query)):e.name&&a.name?e.name===a.name&&(i||e.hash===a.hash&&ji(e.query,a.query)&&ji(e.params,a.params)):!1:!1}function ji(e,a){if(e===void 0&&(e={}),a===void 0&&(a={}),!e||!a)return e===a;var i=Object.keys(e).sort(),n=Object.keys(a).sort();return i.length!==n.length?!1:i.every(function(o,s){var l=e[o],_=n[s];if(_!==o)return!1;var r=a[o];return l==null||r==null?l===r:typeof l=="object"&&typeof r=="object"?ji(l,r):String(l)===String(r)})}function om(e,a){return e.path.replace(E0,"/").indexOf(a.path.replace(E0,"/"))===0&&(!a.hash||e.hash===a.hash)&&sm(e.query,a.query)}function sm(e,a){for(var i in a)if(!(i in e))return!1;return!0}function ul(e){for(var a=0;a<e.matched.length;a++){var i=e.matched[a];for(var n in i.instances){var o=i.instances[n],s=i.enteredCbs[n];if(!(!o||!s)){delete i.enteredCbs[n];for(var l=0;l<s.length;l++)o._isBeingDestroyed||s[l](o)}}}}var rm={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,a){var i=a.props,n=a.children,o=a.parent,s=a.data;s.routerView=!0;for(var l=o.$createElement,_=i.name,r=o.$route,f=o._routerViewCache||(o._routerViewCache={}),d=0,g=!1;o&&o._routerRoot!==o;){var h=o.$vnode?o.$vnode.data:{};h.routerView&&d++,h.keepAlive&&o._directInactive&&o._inactive&&(g=!0),o=o.$parent}if(s.routerViewDepth=d,g){var F=f[_],m=F&&F.component;return m?(F.configProps&&Rs(m,s,F.route,F.configProps),l(m,s,n)):l()}var p=r.matched[d],T=p&&p.components[_];if(!p||!T)return f[_]=null,l();f[_]={component:T},s.registerRouteInstance=function(w,S){var M=p.instances[_];(S&&M!==w||!S&&M===w)&&(p.instances[_]=S)},(s.hook||(s.hook={})).prepatch=function(w,S){p.instances[_]=S.componentInstance},s.hook.init=function(w){w.data.keepAlive&&w.componentInstance&&w.componentInstance!==p.instances[_]&&(p.instances[_]=w.componentInstance),ul(r)};var k=p.props&&p.props[_];return k&&(ra(f[_],{route:r,configProps:k}),Rs(T,s,r,k)),l(T,s,n)}};function Rs(e,a,i,n){var o=a.props=lm(i,n);if(o){o=a.props=ra({},o);var s=a.attrs=a.attrs||{};for(var l in o)(!e.props||!(l in e.props))&&(s[l]=o[l],delete o[l])}}function lm(e,a){switch(typeof a){case"undefined":return;case"object":return a;case"function":return a(e);case"boolean":return a?e.params:void 0}}function cl(e,a,i){var n=e.charAt(0);if(n==="/")return e;if(n==="?"||n==="#")return a+e;var o=a.split("/");(!i||!o[o.length-1])&&o.pop();for(var s=e.replace(/^\//,"").split("/"),l=0;l<s.length;l++){var _=s[l];_===".."?o.pop():_!=="."&&o.push(_)}return o[0]!==""&&o.unshift(""),o.join("/")}function _m(e){var a="",i="",n=e.indexOf("#");n>=0&&(a=e.slice(n),e=e.slice(0,n));var o=e.indexOf("?");return o>=0&&(i=e.slice(o+1),e=e.slice(0,o)),{path:e,query:i,hash:a}}function Ha(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var A0=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},kt=bl,dm=mo,fm=um,gm=ml,hm=pl,Fm=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function mo(e,a){for(var i=[],n=0,o=0,s="",l=a&&a.delimiter||"/",_;(_=Fm.exec(e))!=null;){var r=_[0],f=_[1],d=_.index;if(s+=e.slice(o,d),o=d+r.length,f){s+=f[1];continue}var g=e[o],h=_[2],F=_[3],m=_[4],p=_[5],T=_[6],k=_[7];s&&(i.push(s),s="");var w=h!=null&&g!=null&&g!==h,S=T==="+"||T==="*",M=T==="?"||T==="*",L=_[2]||l,B=m||p;i.push({name:F||n++,prefix:h||"",delimiter:L,optional:M,repeat:S,partial:w,asterisk:!!k,pattern:B?pm(B):k?".*":"[^"+Yi(L)+"]+?"})}return o<e.length&&(s+=e.substr(o)),s&&i.push(s),i}function um(e,a){return ml(mo(e,a),a)}function cm(e){return encodeURI(e).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function mm(e){return encodeURI(e).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function ml(e,a){for(var i=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(i[n]=new RegExp("^(?:"+e[n].pattern+")$",bo(a)));return function(o,s){for(var l="",_=o||{},r=s||{},f=r.pretty?cm:encodeURIComponent,d=0;d<e.length;d++){var g=e[d];if(typeof g=="string"){l+=g;continue}var h=_[g.name],F;if(h==null)if(g.optional){g.partial&&(l+=g.prefix);continue}else throw new TypeError('Expected "'+g.name+'" to be defined');if(A0(h)){if(!g.repeat)throw new TypeError('Expected "'+g.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(g.optional)continue;throw new TypeError('Expected "'+g.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(F=f(h[m]),!i[d].test(F))throw new TypeError('Expected all "'+g.name+'" to match "'+g.pattern+'", but received `'+JSON.stringify(F)+"`");l+=(m===0?g.prefix:g.delimiter)+F}continue}if(F=g.asterisk?mm(h):f(h),!i[d].test(F))throw new TypeError('Expected "'+g.name+'" to match "'+g.pattern+'", but received "'+F+'"');l+=g.prefix+F}return l}}function Yi(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function pm(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function po(e,a){return e.keys=a,e}function bo(e){return e&&e.sensitive?"":"i"}function bm(e,a){var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)a.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return po(e,a)}function Dm(e,a,i){for(var n=[],o=0;o<e.length;o++)n.push(bl(e[o],a,i).source);var s=new RegExp("(?:"+n.join("|")+")",bo(i));return po(s,a)}function Tm(e,a,i){return pl(mo(e,i),a,i)}function pl(e,a,i){A0(a)||(i=a||i,a=[]),i=i||{};for(var n=i.strict,o=i.end!==!1,s="",l=0;l<e.length;l++){var _=e[l];if(typeof _=="string")s+=Yi(_);else{var r=Yi(_.prefix),f="(?:"+_.pattern+")";a.push(_),_.repeat&&(f+="(?:"+r+f+")*"),_.optional?_.partial?f=r+"("+f+")?":f="(?:"+r+"("+f+"))?":f=r+"("+f+")",s+=f}}var d=Yi(i.delimiter||"/"),g=s.slice(-d.length)===d;return n||(s=(g?s.slice(0,-d.length):s)+"(?:"+d+"(?=$))?"),o?s+="$":s+=n&&g?"":"(?="+d+"|$)",po(new RegExp("^"+s,bo(i)),a)}function bl(e,a,i){return A0(a)||(i=a||i,a=[]),i=i||{},e instanceof RegExp?bm(e,a):A0(e)?Dm(e,a,i):Tm(e,a,i)}kt.parse=dm,kt.compile=fm,kt.tokensToFunction=gm,kt.tokensToRegExp=hm;var Cs=Object.create(null);function qi(e,a,i){a=a||{};try{var n=Cs[e]||(Cs[e]=kt.compile(e));return typeof a.pathMatch=="string"&&(a[0]=a.pathMatch),n(a,{pretty:!0})}catch{return""}finally{delete a[0]}}function Do(e,a,i,n){var o=typeof e=="string"?{path:e}:e;if(o._normalized)return o;if(o.name){o=ra({},e);var s=o.params;return s&&typeof s=="object"&&(o.params=ra({},s)),o}if(!o.path&&o.params&&a){o=ra({},o),o._normalized=!0;var l=ra(ra({},a.params),o.params);if(a.name)o.name=a.name,o.params=l;else if(a.matched.length){var _=a.matched[a.matched.length-1].path;o.path=qi(_,l,"path "+a.path)}return o}var r=_m(o.path||""),f=a&&a.path||"/",d=r.path?cl(r.path,f,i||o.append):f,g=am(r.query,o.query,n&&n.options.parseQuery),h=o.hash||r.hash;return h&&h.charAt(0)!=="#"&&(h="#"+h),{_normalized:!0,path:d,query:g,hash:h}}var ym=[String,Object],Em=[String,Array],Bs=function(){},Dl={name:"RouterLink",props:{to:{type:ym,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Em,default:"click"}},render:function(e){var a=this,i=this.$router,n=this.$route,o=i.resolve(this.to,n,this.append),s=o.location,l=o.route,_=o.href,r={},f=i.options.linkActiveClass,d=i.options.linkExactActiveClass,g=f??"router-link-active",h=d??"router-link-exact-active",F=this.activeClass==null?g:this.activeClass,m=this.exactActiveClass==null?h:this.exactActiveClass,p=l.redirectedFrom?k0(null,Do(l.redirectedFrom),null,i):l;r[m]=Fl(n,p,this.exactPath),r[F]=this.exact||this.exactPath?r[m]:om(n,p);var T=r[m]?this.ariaCurrentValue:null,k=function(v){Os(v)&&(a.replace?i.replace(s,Bs):i.push(s,Bs))},w={click:Os};Array.isArray(this.event)?this.event.forEach(function(v){w[v]=k}):w[this.event]=k;var S={class:r},M=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:_,route:l,navigate:k,isActive:r[F],isExactActive:r[m]});if(M){if(M.length===1)return M[0];if(M.length>1||!M.length)return M.length===0?e():e("span",{},M)}if(this.tag==="a")S.on=w,S.attrs={href:_,"aria-current":T};else{var L=Tl(this.$slots.default);if(L){L.isStatic=!1;var B=L.data=ra({},L.data);B.on=B.on||{};for(var P in B.on){var z=B.on[P];P in w&&(B.on[P]=Array.isArray(z)?z:[z])}for(var Z in w)Z in B.on?B.on[Z].push(w[Z]):B.on[Z]=k;var c=L.data.attrs=ra({},L.data.attrs);c.href=_,c["aria-current"]=T}else S.on=w}return e(this.tag,S,this.$slots.default)}};function Os(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){var a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function Tl(e){if(e){for(var a,i=0;i<e.length;i++)if(a=e[i],a.tag==="a"||a.children&&(a=Tl(a.children)))return a}}var w0;function Mn(e){if(!(Mn.installed&&w0===e)){Mn.installed=!0,w0=e;var a=function(o){return o!==void 0},i=function(o,s){var l=o.$options._parentVnode;a(l)&&a(l=l.data)&&a(l=l.registerRouteInstance)&&l(o,s)};e.mixin({beforeCreate:function(){a(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,i(this,this)},destroyed:function(){i(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",rm),e.component("RouterLink",Dl);var n=e.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var di=typeof window<"u";function Ai(e,a,i,n,o){var s=a||[],l=i||Object.create(null),_=n||Object.create(null);e.forEach(function(d){jn(s,l,_,d,o)});for(var r=0,f=s.length;r<f;r++)s[r]==="*"&&(s.push(s.splice(r,1)[0]),f--,r--);return{pathList:s,pathMap:l,nameMap:_}}function jn(e,a,i,n,o,s){var l=n.path,_=n.name,r=n.pathToRegexpOptions||{},f=Am(l,o,r.strict);typeof n.caseSensitive=="boolean"&&(r.sensitive=n.caseSensitive);var d={path:f,regex:km(f,r),components:n.components||{default:n.component},alias:n.alias?typeof n.alias=="string"?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:_,parent:o,matchAs:s,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:n.props==null?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(p){var T=s?Ha(s+"/"+p.path):void 0;jn(e,a,i,p,d,T)}),a[d.path]||(e.push(d.path),a[d.path]=d),n.alias!==void 0)for(var g=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<g.length;++h){var F=g[h],m={path:F,children:n.children};jn(e,a,i,m,o,d.path||"/")}_&&(i[_]||(i[_]=d))}function km(e,a){var i=kt(e,[],a);return i}function Am(e,a,i){return i||(e=e.replace(/\/$/,"")),e[0]==="/"||a==null?e:Ha(a.path+"/"+e)}function wm(e,a){var i=Ai(e),n=i.pathList,o=i.pathMap,s=i.nameMap;function l(F){Ai(F,n,o,s)}function _(F,m){var p=typeof F!="object"?s[F]:void 0;Ai([m||F],n,o,s,p),p&&p.alias.length&&Ai(p.alias.map(function(T){return{path:T,children:[m]}}),n,o,s,p)}function r(){return n.map(function(F){return o[F]})}function f(F,m,p){var T=Do(F,m,!1,a),k=T.name;if(k){var w=s[k];if(!w)return h(null,T);var S=w.regex.keys.filter(function(z){return!z.optional}).map(function(z){return z.name});if(typeof T.params!="object"&&(T.params={}),m&&typeof m.params=="object")for(var M in m.params)!(M in T.params)&&S.indexOf(M)>-1&&(T.params[M]=m.params[M]);return T.path=qi(w.path,T.params),h(w,T,p)}else if(T.path){T.params={};for(var L=0;L<n.length;L++){var B=n[L],P=o[B];if(vm(P.regex,T.path,T.params))return h(P,T,p)}}return h(null,T)}function d(F,m){var p=F.redirect,T=typeof p=="function"?p(k0(F,m,null,a)):p;if(typeof T=="string"&&(T={path:T}),!T||typeof T!="object")return h(null,m);var k=T,w=k.name,S=k.path,M=m.query,L=m.hash,B=m.params;if(M=k.hasOwnProperty("query")?k.query:M,L=k.hasOwnProperty("hash")?k.hash:L,B=k.hasOwnProperty("params")?k.params:B,w)return s[w],f({_normalized:!0,name:w,query:M,hash:L,params:B},void 0,m);if(S){var P=Sm(S,F),z=qi(P,B);return f({_normalized:!0,path:z,query:M,hash:L},void 0,m)}else return h(null,m)}function g(F,m,p){var T=qi(p,m.params),k=f({_normalized:!0,path:T});if(k){var w=k.matched,S=w[w.length-1];return m.params=k.params,h(S,m)}return h(null,m)}function h(F,m,p){return F&&F.redirect?d(F,p||m):F&&F.matchAs?g(F,m,F.matchAs):k0(F,m,p,a)}return{match:f,addRoute:_,getRoutes:r,addRoutes:l}}function vm(e,a,i){var n=a.match(e);if(n){if(!i)return!0}else return!1;for(var o=1,s=n.length;o<s;++o){var l=e.keys[o-1];l&&(i[l.name||"pathMatch"]=typeof n[o]=="string"?Nn(n[o]):n[o])}return!0}function Sm(e,a){return cl(e,a.parent?a.parent.path:"/",!0)}var Rm=di&&window.performance&&window.performance.now?window.performance:Date;function yl(){return Rm.now().toFixed(3)}var El=yl();function P0(){return El}function kl(e){return El=e}var Al=Object.create(null);function wl(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,a=window.location.href.replace(e,""),i=ra({},window.history.state);return i.key=P0(),window.history.replaceState(i,"",a),window.addEventListener("popstate",Ns),function(){window.removeEventListener("popstate",Ns)}}function Pa(e,a,i,n){if(e.app){var o=e.options.scrollBehavior;o&&e.app.$nextTick(function(){var s=Cm(),l=o.call(e,a,i,n?s:null);l&&(typeof l.then=="function"?l.then(function(_){js(_,s)}).catch(function(_){}):js(l,s))})}}function vl(){var e=P0();e&&(Al[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ns(e){vl(),e.state&&e.state.key&&kl(e.state.key)}function Cm(){var e=P0();if(e)return Al[e]}function Bm(e,a){var i=document.documentElement,n=i.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:o.left-n.left-a.x,y:o.top-n.top-a.y}}function xs(e){return Mt(e.x)||Mt(e.y)}function Ms(e){return{x:Mt(e.x)?e.x:window.pageXOffset,y:Mt(e.y)?e.y:window.pageYOffset}}function Om(e){return{x:Mt(e.x)?e.x:0,y:Mt(e.y)?e.y:0}}function Mt(e){return typeof e=="number"}var Nm=/^#\d/;function js(e,a){var i=typeof e=="object";if(i&&typeof e.selector=="string"){var n=Nm.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(n){var o=e.offset&&typeof e.offset=="object"?e.offset:{};o=Om(o),a=Bm(n,o)}else xs(e)&&(a=Ms(e))}else i&&xs(e)&&(a=Ms(e));a&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:a.x,top:a.y,behavior:e.behavior}):window.scrollTo(a.x,a.y))}var Ga=di&&function(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function v0(e,a){vl();var i=window.history;try{if(a){var n=ra({},i.state);n.key=P0(),i.replaceState(n,"",e)}else i.pushState({key:kl(yl())},"",e)}catch{window.location[a?"replace":"assign"](e)}}function Yn(e){v0(e,!0)}var ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function xm(e,a){return G0(e,a,ut.redirected,'Redirected when going from "'+e.fullPath+'" to "'+qm(a)+'" via a navigation guard.')}function Mm(e,a){var i=G0(e,a,ut.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return i.name="NavigationDuplicated",i}function Ys(e,a){return G0(e,a,ut.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+a.fullPath+'" with a new navigation.')}function jm(e,a){return G0(e,a,ut.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+a.fullPath+'" via a navigation guard.')}function G0(e,a,i,n){var o=new Error(n);return o._isRouter=!0,o.from=e,o.to=a,o.type=i,o}var Ym=["params","query","hash"];function qm(e){if(typeof e=="string")return e;if("path"in e)return e.path;var a={};return Ym.forEach(function(i){i in e&&(a[i]=e[i])}),JSON.stringify(a,null,2)}function S0(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function R0(e,a){return S0(e)&&e._isRouter&&(a==null||e.type===a)}function qs(e,a,i){var n=function(o){o>=e.length?i():e[o]?a(e[o],function(){n(o+1)}):n(o+1)};n(0)}function Lm(e){return function(a,i,n){var o=!1,s=0,l=null;Sl(e,function(_,r,f,d){if(typeof _=="function"&&_.cid===void 0){o=!0,s++;var g=Ls(function(p){Im(p)&&(p=p.default),_.resolved=typeof p=="function"?p:w0.extend(p),f.components[d]=p,s--,s<=0&&n()}),h=Ls(function(p){var T="Failed to resolve async component "+d+": "+p;l||(l=S0(p)?p:new Error(T),n(l))}),F;try{F=_(g,h)}catch(p){h(p)}if(F)if(typeof F.then=="function")F.then(g,h);else{var m=F.component;m&&typeof m.then=="function"&&m.then(g,h)}}}),o||n()}}function Sl(e,a){return Rl(e.map(function(i){return Object.keys(i.components).map(function(n){return a(i.components[n],i.instances[n],i,n)})}))}function Rl(e){return Array.prototype.concat.apply([],e)}var Zm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Im(e){return e.__esModule||Zm&&e[Symbol.toStringTag]==="Module"}function Ls(e){var a=!1;return function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];if(!a)return a=!0,e.apply(this,i)}}var sa=function(e,a){this.router=e,this.base=Hm(a),this.current=Qa,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};sa.prototype.listen=function(e){this.cb=e},sa.prototype.onReady=function(e,a){this.ready?e():(this.readyCbs.push(e),a&&this.readyErrorCbs.push(a))},sa.prototype.onError=function(e){this.errorCbs.push(e)},sa.prototype.transitionTo=function(e,a,i){var n=this,o;try{o=this.router.match(e,this.current)}catch(l){throw this.errorCbs.forEach(function(_){_(l)}),l}var s=this.current;this.confirmTransition(o,function(){n.updateRoute(o),a&&a(o),n.ensureURL(),n.router.afterHooks.forEach(function(l){l&&l(o,s)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(l){l(o)}))},function(l){i&&i(l),l&&!n.ready&&(!R0(l,ut.redirected)||s!==Qa)&&(n.ready=!0,n.readyErrorCbs.forEach(function(_){_(l)}))})},sa.prototype.confirmTransition=function(e,a,i){var n=this,o=this.current;this.pending=e;var s=function(m){!R0(m)&&S0(m)&&(n.errorCbs.length?n.errorCbs.forEach(function(p){p(m)}):console.error(m)),i&&i(m)},l=e.matched.length-1,_=o.matched.length-1;if(Fl(e,o)&&l===_&&e.matched[l]===o.matched[_])return this.ensureURL(),e.hash&&Pa(this.router,o,e,!1),s(Mm(o,e));var r=Pm(this.current.matched,e.matched),f=r.updated,d=r.deactivated,g=r.activated,h=[].concat(Um(d),this.router.beforeHooks,zm(f),g.map(function(m){return m.beforeEnter}),Lm(g)),F=function(m,p){if(n.pending!==e)return s(Ys(o,e));try{m(e,o,function(T){T===!1?(n.ensureURL(!0),s(jm(o,e))):S0(T)?(n.ensureURL(!0),s(T)):typeof T=="string"||typeof T=="object"&&(typeof T.path=="string"||typeof T.name=="string")?(s(xm(o,e)),typeof T=="object"&&T.replace?n.replace(T):n.push(T)):p(T)})}catch(T){s(T)}};qs(h,F,function(){var m=Vm(g),p=m.concat(n.router.resolveHooks);qs(p,F,function(){if(n.pending!==e)return s(Ys(o,e));n.pending=null,a(e),n.router.app&&n.router.app.$nextTick(function(){ul(e)})})})},sa.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},sa.prototype.setupListeners=function(){},sa.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=Qa,this.pending=null};function Hm(e){if(!e)if(di){var a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return e.charAt(0)!=="/"&&(e="/"+e),e.replace(/\/$/,"")}function Pm(e,a){var i,n=Math.max(e.length,a.length);for(i=0;i<n&&e[i]===a[i];i++);return{updated:a.slice(0,i),activated:a.slice(i),deactivated:e.slice(i)}}function To(e,a,i,n){var o=Sl(e,function(s,l,_,r){var f=Gm(s,a);if(f)return Array.isArray(f)?f.map(function(d){return i(d,l,_,r)}):i(f,l,_,r)});return Rl(n?o.reverse():o)}function Gm(e,a){return typeof e!="function"&&(e=w0.extend(e)),e.options[a]}function Um(e){return To(e,"beforeRouteLeave",Cl,!0)}function zm(e){return To(e,"beforeRouteUpdate",Cl)}function Cl(e,a){if(a)return function(){return e.apply(a,arguments)}}function Vm(e){return To(e,"beforeRouteEnter",function(a,i,n,o){return Wm(a,n,o)})}function Wm(e,a,i){return function(n,o,s){return e(n,o,function(l){typeof l=="function"&&(a.enteredCbs[i]||(a.enteredCbs[i]=[]),a.enteredCbs[i].push(l)),s(l)})}}var Bl=function(e){function a(i,n){e.call(this,i,n),this._startLocation=It(this.base)}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ga&&o;s&&this.listeners.push(wl());var l=function(){var _=i.current,r=It(i.base);i.current===Qa&&r===i._startLocation||i.transitionTo(r,function(f){s&&Pa(n,f,_,!0)})};window.addEventListener("popstate",l),this.listeners.push(function(){window.removeEventListener("popstate",l)})}},a.prototype.go=function(i){window.history.go(i)},a.prototype.push=function(i,n,o){var s=this,l=this,_=l.current;this.transitionTo(i,function(r){v0(Ha(s.base+r.fullPath)),Pa(s.router,r,_,!1),n&&n(r)},o)},a.prototype.replace=function(i,n,o){var s=this,l=this,_=l.current;this.transitionTo(i,function(r){Yn(Ha(s.base+r.fullPath)),Pa(s.router,r,_,!1),n&&n(r)},o)},a.prototype.ensureURL=function(i){if(It(this.base)!==this.current.fullPath){var n=Ha(this.base+this.current.fullPath);i?v0(n):Yn(n)}},a.prototype.getCurrentLocation=function(){return It(this.base)},a}(sa);function It(e){var a=window.location.pathname,i=a.toLowerCase(),n=e.toLowerCase();return e&&(i===n||i.indexOf(Ha(n+"/"))===0)&&(a=a.slice(e.length)),(a||"/")+window.location.search+window.location.hash}var Ol=function(e){function a(i,n,o){e.call(this,i,n),!(o&&$m(this.base))&&Zs()}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,o=n.options.scrollBehavior,s=Ga&&o;s&&this.listeners.push(wl());var l=function(){var r=i.current;Zs()&&i.transitionTo(Li(),function(f){s&&Pa(i.router,f,r,!0),Ga||Zi(f.fullPath)})},_=Ga?"popstate":"hashchange";window.addEventListener(_,l),this.listeners.push(function(){window.removeEventListener(_,l)})}},a.prototype.push=function(i,n,o){var s=this,l=this,_=l.current;this.transitionTo(i,function(r){Is(r.fullPath),Pa(s.router,r,_,!1),n&&n(r)},o)},a.prototype.replace=function(i,n,o){var s=this,l=this,_=l.current;this.transitionTo(i,function(r){Zi(r.fullPath),Pa(s.router,r,_,!1),n&&n(r)},o)},a.prototype.go=function(i){window.history.go(i)},a.prototype.ensureURL=function(i){var n=this.current.fullPath;Li()!==n&&(i?Is(n):Zi(n))},a.prototype.getCurrentLocation=function(){return Li()},a}(sa);function $m(e){var a=It(e);if(!/^\/#/.test(a))return window.location.replace(Ha(e+"/#"+a)),!0}function Zs(){var e=Li();return e.charAt(0)==="/"?!0:(Zi("/"+e),!1)}function Li(){var e=window.location.href,a=e.indexOf("#");return a<0?"":(e=e.slice(a+1),e)}function qn(e){var a=window.location.href,i=a.indexOf("#"),n=i>=0?a.slice(0,i):a;return n+"#"+e}function Is(e){Ga?v0(qn(e)):window.location.hash=e}function Zi(e){Ga?Yn(qn(e)):window.location.replace(qn(e))}var Qm=function(e){function a(i,n){e.call(this,i,n),this.stack=[],this.index=-1}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.push=function(i,n,o){var s=this;this.transitionTo(i,function(l){s.stack=s.stack.slice(0,s.index+1).concat(l),s.index++,n&&n(l)},o)},a.prototype.replace=function(i,n,o){var s=this;this.transitionTo(i,function(l){s.stack=s.stack.slice(0,s.index).concat(l),n&&n(l)},o)},a.prototype.go=function(i){var n=this,o=this.index+i;if(!(o<0||o>=this.stack.length)){var s=this.stack[o];this.confirmTransition(s,function(){var l=n.current;n.index=o,n.updateRoute(s),n.router.afterHooks.forEach(function(_){_&&_(s,l)})},function(l){R0(l,ut.duplicated)&&(n.index=o)})}},a.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},a.prototype.ensureURL=function(){},a}(sa),Ee=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=wm(e.routes||[],this);var a=e.mode||"hash";switch(this.fallback=a==="history"&&!Ga&&e.fallback!==!1,this.fallback&&(a="hash"),di||(a="abstract"),this.mode=a,a){case"history":this.history=new Bl(this,e.base);break;case"hash":this.history=new Ol(this,e.base,this.fallback);break;case"abstract":this.history=new Qm(this,e.base);break}},Hs={currentRoute:{configurable:!0}};Ee.prototype.match=function(e,a,i){return this.matcher.match(e,a,i)},Hs.currentRoute.get=function(){return this.history&&this.history.current},Ee.prototype.init=function(e){var a=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var s=a.apps.indexOf(e);s>-1&&a.apps.splice(s,1),a.app===e&&(a.app=a.apps[0]||null),a.app||a.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof Bl||i instanceof Ol){var n=function(s){var l=i.current,_=a.options.scrollBehavior,r=Ga&&_;r&&"fullPath"in s&&Pa(a,s,l,!1)},o=function(s){i.setupListeners(),n(s)};i.transitionTo(i.getCurrentLocation(),o,o)}i.listen(function(s){a.apps.forEach(function(l){l._route=s})})}},Ee.prototype.beforeEach=function(e){return gn(this.beforeHooks,e)},Ee.prototype.beforeResolve=function(e){return gn(this.resolveHooks,e)},Ee.prototype.afterEach=function(e){return gn(this.afterHooks,e)},Ee.prototype.onReady=function(e,a){this.history.onReady(e,a)},Ee.prototype.onError=function(e){this.history.onError(e)},Ee.prototype.push=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.push(e,o,s)});this.history.push(e,a,i)},Ee.prototype.replace=function(e,a,i){var n=this;if(!a&&!i&&typeof Promise<"u")return new Promise(function(o,s){n.history.replace(e,o,s)});this.history.replace(e,a,i)},Ee.prototype.go=function(e){this.history.go(e)},Ee.prototype.back=function(){this.go(-1)},Ee.prototype.forward=function(){this.go(1)},Ee.prototype.getMatchedComponents=function(e){var a=e?e.matched?e:this.resolve(e).route:this.currentRoute;return a?[].concat.apply([],a.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]},Ee.prototype.resolve=function(e,a,i){a=a||this.history.current;var n=Do(e,a,i,this),o=this.match(n,a),s=o.redirectedFrom||o.fullPath,l=this.history.base,_=Km(l,s,this.mode);return{location:n,route:o,href:_,normalizedTo:n,resolved:o}},Ee.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ee.prototype.addRoute=function(e,a){this.matcher.addRoute(e,a),this.history.current!==Qa&&this.history.transitionTo(this.history.getCurrentLocation())},Ee.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==Qa&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ee.prototype,Hs);function gn(e,a){return e.push(a),function(){var i=e.indexOf(a);i>-1&&e.splice(i,1)}}function Km(e,a,i){var n=i==="hash"?"#"+a:a;return e?Ha(e+"/"+n):n}Ee.install=Mn,Ee.version="3.6.5",Ee.isNavigationFailure=R0,Ee.NavigationFailureType=ut,Ee.START_LOCATION=Qa,di&&window.Vue&&window.Vue.use(Ee),window._vue_richtext_widgets||(window._vue_richtext_widgets={});const Ps=e=>!!window._vue_richtext_widgets[e],Jm=e=>{var a;return!!((a=window._vue_richtext_widgets[e])!=null&&a.hasInteractiveView)},Xm=e=>{var a;return!!((a=window._vue_richtext_widgets[e])!=null&&a.fullWidth)},ep=(e,a,i=o=>{},n)=>{const o={hasInteractiveView:!0,fullWidth:!1,...n};if(window._vue_richtext_widgets[e]){console.error("Widget for id "+e+" already registered");return}window._vue_richtext_widgets[e]={id:e,callback:a,onDestroy:i,...o}},ap=(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})=>{if(a!=="open-graph"){if(!window._vue_richtext_widgets[a]){console.error("Widget for rich object type "+a+" not registered");return}window._vue_richtext_widgets[a].callback(e,{richObjectType:a,richObject:i,accessible:n,interactive:o})}},tp=(e,a)=>{e!=="open-graph"&&window._vue_richtext_widgets[e]&&window._vue_richtext_widgets[e].onDestroy(a)};window._registerWidget=(e,a,i,n)=>{ep(e,a,i,n)},window._vue_richtext_custom_picker_elements||(window._vue_richtext_custom_picker_elements={});const ri=e=>!!window._vue_richtext_custom_picker_elements[e],ip=e=>{var a;const i=(a=window._vue_richtext_custom_picker_elements[e])==null?void 0:a.size;return["small","normal","large","full"].includes(i)?i:null},np=(e,a,i=o=>{},n="large")=>{if(window._vue_richtext_custom_picker_elements[e]){console.error("Custom reference picker element for id "+e+" already registered");return}window._vue_richtext_custom_picker_elements[e]={id:e,callback:a,onDestroy:i,size:n}},op=(e,{providerId:a,accessible:i})=>{if(!window._vue_richtext_custom_picker_elements[a]){console.error("Custom reference picker element for reference provider ID "+a+" not registered");return}return window._vue_richtext_custom_picker_elements[a].callback(e,{providerId:a,accessible:i})},sp=(e,a,i)=>{window._vue_richtext_custom_picker_elements[e]&&window._vue_richtext_custom_picker_elements[e].onDestroy(a,i)};window._registerCustomPickerElement=np,oe(j1);const rp=3*60*1e3,lp={name:"NcReferenceWidget",components:{NcButton:Ka},props:{reference:{type:Object,required:!0},interactive:{type:Boolean,default:!0},interactiveOptIn:{type:Boolean,default:!1}},setup(){const e=ot(!1),a=ot(),{width:i}=Js(a);return P1(a,([n])=>{D1(()=>{e.value=n.isIntersecting})}),{width:i,isVisible:e,widgetRoot:a}},data(){return{showInteractive:!1,rendered:!1,idleTimeout:null}},computed:{isInteractive(){return!this.interactiveOptIn&&this.interactive||this.showInteractive},hasFullWidth(){return Xm(this.reference.richObjectType)},hasCustomWidget(){return Ps(this.reference.richObjectType)},hasInteractiveView(){return Ps(this.reference.richObjectType)&&Jm(this.reference.richObjectType)},noAccess(){return this.reference&&!this.reference.accessible},descriptionStyle(){if(this.numberOfLines===0)return{display:"none"};const e=this.numberOfLines;return{lineClamp:e,webkitLineClamp:e}},numberOfLines(){return[450,550,650,1/0].findIndex(e=>this.width<e)},compactLink(){const e=this.reference.openGraphObject.link;return e?e.startsWith("https://")?e.substring(8):e.startsWith("http://")?e.substring(7):e:""},route(){return fo(this.$router,this.reference.openGraphObject.link)},referenceWidgetLinkComponent(){return this.route?Dl:"a"},referenceWidgetLinkProps(){return this.route?{to:this.route}:{href:this.reference.openGraphObject.link,target:"_blank"}}},watch:{isVisible:{handler(e){if(!e){this.idleTimeout=setTimeout(()=>{this.isVisible||this.destroyWidget()},rp);return}this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),this.rendered||this.renderWidget()},immediate:!0}},beforeDestroy(){this.destroyWidget()},methods:{t:N,enableInteractive(){this.showInteractive=!0,this.renderWidget()},renderWidget(){var e;if(!this.$refs.customWidget||((e=this==null?void 0:this.reference)==null?void 0:e.richObjectType)==="open-graph")return;this.$refs.customWidget.innerHTML="";const a=document.createElement("div");this.$refs.customWidget.appendChild(a),this.$nextTick(()=>{ap(a,{...this.reference,interactive:this.isInteractive}),this.rendered=!0})},destroyWidget(){this.rendered&&(tp(this.reference.richObjectType,this.$el),this.rendered=!1)}}};var _p=function(){var e=this,a=e._self._c;return a("div",{ref:"widgetRoot",class:{"toggle-interactive":e.hasInteractiveView&&!e.isInteractive}},[e.reference&&e.hasCustomWidget?a("div",{ref:"customWidget",staticClass:"widget-custom",class:{"full-width":e.hasFullWidth}}):!e.noAccess&&e.reference&&e.reference.openGraphObject&&!e.hasCustomWidget?a(e.referenceWidgetLinkComponent,e._b({tag:"component",staticClass:"widget-default",attrs:{rel:"noopener noreferrer"}},"component",e.referenceWidgetLinkProps,!1),[e.reference.openGraphObject.thumb?a("img",{staticClass:"widget-default--image",attrs:{src:e.reference.openGraphObject.thumb}}):e._e(),a("div",{staticClass:"widget-default--details"},[a("p",{staticClass:"widget-default--name"},[e._v(" "+e._s(e.reference.openGraphObject.name)+" ")]),a("p",{staticClass:"widget-default--description",style:e.descriptionStyle},[e._v(" "+e._s(e.reference.openGraphObject.description)+" ")]),a("p",{staticClass:"widget-default--link"},[e._v(" "+e._s(e.compactLink)+" ")])])]):e._e(),e.interactiveOptIn&&e.hasInteractiveView&&!e.isInteractive?a("NcButton",{staticClass:"toggle-interactive--button",on:{click:e.enableInteractive}},[e._v(" "+e._s(e.t("Enable interactive view"))+" ")]):e._e()],1)},dp=[],fp=ie(lp,_p,dp,!1,null,"b293f5d9");const gp=fp.exports,hp={name:"NcCustomPickerElement",props:{provider:{type:Object,required:!0}},emits:["cancel","submit"],data(){return{isRegistered:ri(this.provider.id),renderResult:null}},mounted(){this.isRegistered&&this.renderElement()},beforeDestroy(){this.isRegistered&&sp(this.provider.id,this.$el,this.renderResult)},methods:{renderElement(){this.$refs.domElement&&(this.$refs.domElement.innerHTML="");const e=op(this.$refs.domElement,{providerId:this.provider.id,accessible:!1});Promise.resolve(e).then(a=>{var i,n;this.renderResult=a,(i=this.renderResult.object)!=null&&i._isVue&&(n=this.renderResult.object)!=null&&n.$on&&(this.renderResult.object.$on("submit",this.onSubmit),this.renderResult.object.$on("cancel",this.onCancel)),this.renderResult.element.addEventListener("submit",o=>{this.onSubmit(o.detail)}),this.renderResult.element.addEventListener("cancel",this.onCancel)})},onSubmit(e){this.$emit("submit",e)},onCancel(){this.$emit("cancel")}}};var Fp=function(){var e=this,a=e._self._c;return a("div",{ref:"domElement"})},up=[],cp=ie(hp,Fp,up,!1,null,"de9850e4");const mp=cp.exports;oe(Y1);const pp="any-link",bp={id:pp,title:N("Any link"),icon_url:_r("core","filetypes/link.svg")};window._vue_richtext_reference_providers||(window._vue_richtext_reference_providers=Jt("core","reference-provider-list",[])),window._vue_richtext_reference_provider_timestamps||(window._vue_richtext_reference_provider_timestamps=Jt("core","reference-provider-timestamps",{}));function Dp(){return window._vue_richtext_reference_providers.filter(e=>{const a=!!e.search_providers_ids&&e.search_providers_ids.length>0||ri(e.id);return a||console.debug("[smart picker]",e.id,"reference provider is discoverable but does not have any related search provider or custom picker component registered"),a})}function Tp(e){const a=window._vue_richtext_reference_provider_timestamps;return e.sort((i,n)=>i.order===n.order?0:i.order>n.order?1:-1).sort((i,n)=>{const o=a[i.id],s=a[n.id];return o===s?0:s===void 0?-1:o===void 0?1:o>s?-1:1})}function yp(e,a=null){const i=Dp(),n=e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),o=new RegExp(n,"i"),s=Tp(i).filter(_=>_.title.match(o)),l=a?s.slice(0,a):s;return(e===""||l.length===0)&&l.push(bp),l}function Ep(e){const a=Math.floor(Date.now()/1e3),i={timestamp:a},n=Ua("references/provider/{providerId}",{providerId:e});pa.put(n,i).then(o=>{window._vue_richtext_reference_provider_timestamps[e]=a})}let Gs=0;function Nl(e,a){return function(){const i=this,n=arguments;clearTimeout(Gs),Gs=setTimeout(function(){e.apply(i,n)},a)}}function yo(e){try{return!!new URL(e)}catch{return!1}}oe(dr,q1);const kp={name:"LinkVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ap=function(){var e=this,a=e._self._c;return a("span",e._b({staticClass:"material-design-icon link-variant-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(i){return e.$emit("click",i)}}},"span",e.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"}},[e.title?a("title",[e._v(e._s(e.title))]):e._e()])])])},wp=[],vp=ie(kp,Ap,wp,!1,null,null);const Eo=vp.exports,Sp={name:"NcProviderList",components:{NcSelect:q0,NcHighlight:j0,NcEmptyContent:co,LinkVariantIcon:Eo},emits:["select-provider","submit"],data(){return{selectedProvider:null,query:"",multiselectPlaceholder:N("Select provider"),providerIconAlt:N("Provider icon")}},computed:{options(){const e=[];return this.query!==""&&yo(this.query)&&e.push({id:this.query,title:this.query,isLink:!0}),e.push(...yp(this.query)),e}},methods:{focus(){setTimeout(()=>{var e,a,i;(i=(a=(e=this.$refs["provider-select"])==null?void 0:e.$el)==null?void 0:a.querySelector("#provider-select-input"))==null||i.focus()},300)},onProviderSelected(e){e!==null&&(e.isLink?this.$emit("submit",e.title):this.$emit("select-provider",e),this.selectedProvider=null)},onSearch(e,a){this.query=e}}};var Rp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"provider-list"},[a("NcSelect",{ref:"provider-select",staticClass:"provider-list--select",attrs:{"input-id":"provider-select-input",label:"title",placeholder:e.multiselectPlaceholder,options:e.options,"append-to-body":!1,"clear-search-on-select":!0,"clear-search-on-blur":()=>!1,filterable:!1},on:{search:e.onSearch,input:e.onProviderSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isLink?a("div",{staticClass:"provider"},[a("LinkVariantIcon",{staticClass:"link-icon",attrs:{size:20}}),a("span",[e._v(e._s(i.title))])],1):a("div",{staticClass:"provider"},[a("img",{staticClass:"provider-icon",attrs:{src:i.icon_url,alt:e.providerIconAlt}}),a("NcHighlight",{staticClass:"option-text",attrs:{search:e.query,text:i.title}})],1)]}}]),model:{value:e.selectedProvider,callback:function(i){e.selectedProvider=i},expression:"selectedProvider"}}),a("NcEmptyContent",{staticClass:"provider-list--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[a("LinkVariantIcon")]},proxy:!0}])})],1)},Cp=[],Bp=ie(Sp,Rp,Cp,!1,null,"e54e09d6");const Op=Bp.exports;oe(L1);const Np={name:"NcRawLinkInput",components:{LinkVariantIcon:Eo,NcEmptyContent:co,NcLoadingIcon:C0,NcReferenceWidget:gp,NcTextField:qu},props:{provider:{type:Object,required:!0}},emits:["submit"],data(){return{inputValue:"",loading:!1,reference:null,abortController:null,inputPlaceholder:N("Enter link")}},computed:{isLinkValid(){return yo(this.inputValue)}},methods:{focus(){var e;(e=this.$refs["url-input"].$el.getElementsByTagName("input")[0])==null||e.focus()},onSubmit(e){const a=e.target.value;this.isLinkValid&&this.$emit("submit",a)},onClear(){this.inputValue="",this.reference=null},onInput(){this.reference=null,this.abortController&&this.abortController.abort(),this.isLinkValid&&Nl(()=>{this.updateReference()},500)()},updateReference(){this.loading=!0,this.abortController=new AbortController,pa.get(Ua("references/resolve",2)+"?reference="+encodeURIComponent(this.inputValue),{signal:this.abortController.signal}).then(e=>{this.reference=e.data.ocs.data.references[this.inputValue]}).catch(e=>{console.error(e)}).then(()=>{this.loading=!1})}}};var xp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"raw-link"},[a("div",{staticClass:"input-wrapper"},[a("NcTextField",{ref:"url-input",attrs:{value:e.inputValue,"show-trailing-button":e.inputValue!=="",label:e.inputPlaceholder},on:{"update:value":[function(i){e.inputValue=i},e.onInput],"trailing-button-click":e.onClear},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.onSubmit.apply(null,arguments)}}},[e.loading?a("NcLoadingIcon",{attrs:{size:16}}):a("LinkVariantIcon",{attrs:{size:16}})],1)],1),e.reference!==null?a("NcReferenceWidget",{staticClass:"reference-widget",attrs:{reference:e.reference}}):a("NcEmptyContent",{staticClass:"raw-link--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}])})],1)},Mp=[],jp=ie(Np,xp,Mp,!1,null,"3c1803b5");const Yp=jp.exports,qp={name:"NcSearchResult",components:{NcHighlight:j0},props:{entry:{type:Object,required:!0},query:{type:String,required:!0}}};var Lp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"result"},[e.entry.icon?a("div",{staticClass:"result--icon-class",class:{[e.entry.icon]:!0,rounded:e.entry.rounded}}):a("img",{staticClass:"result--image",class:{rounded:e.entry.rounded},attrs:{src:e.entry.thumbnailUrl}}),a("div",{staticClass:"result--content"},[a("span",{staticClass:"result--content--name"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.title}})],1),a("span",{staticClass:"result--content--subline"},[a("NcHighlight",{attrs:{search:e.query,text:e.entry.subline}})],1)])])},Zp=[],Ip=ie(qp,Lp,Zp,!1,null,"8571023b");const Hp=Ip.exports;oe(Z1,dr,rr);const Us=5,Pp={name:"NcSearch",components:{LinkVariantIcon:Eo,DotsHorizontalIcon:In,NcEmptyContent:co,NcSelect:q0,NcSearchResult:Hp},props:{provider:{type:Object,required:!0},showEmptyContent:{type:Boolean,default:!0},searchPlaceholder:{type:String,default:null}},emits:["submit"],data(){return{searchQuery:"",selectedResult:null,resultsBySearchProvider:{},searching:!1,searchingMoreOf:null,abortController:null,noOptionsText:N("Start typing to search"),providerIconAlt:N("Provider icon")}},computed:{mySearchPlaceholder(){return this.searchPlaceholder||N("Search")},searchProviderIds(){return this.provider.search_providers_ids},options(){if(this.searchQuery==="")return[];const e=[];return yo(this.searchQuery)&&e.push(this.rawLinkEntry),e.push(...this.formattedSearchResults),e},rawLinkEntry(){return{id:"rawLinkEntry",resourceUrl:this.searchQuery,isRawLink:!0}},formattedSearchResults(){const e=[];return this.searchProviderIds.forEach(a=>{if(this.resultsBySearchProvider[a].entries.length>0){(this.searchProviderIds.length>1||this.resultsBySearchProvider[a].entries.length>1)&&e.push({id:"groupTitle-"+a,name:this.resultsBySearchProvider[a].name,isCustomGroupTitle:!0,providerId:a});const i=this.resultsBySearchProvider[a].entries.map((n,o)=>({id:"provider-"+a+"-entry-"+o,...n}));e.push(...i),this.resultsBySearchProvider[a].isPaginated&&e.push({id:"moreOf-"+a,name:this.resultsBySearchProvider[a].name,isMore:!0,providerId:a,isLoading:this.searchingMoreOf===a})}}),e}},mounted(){this.resetResults()},beforeDestroy(){this.cancelSearchRequests()},methods:{t:N,resetResults(){const e={};this.searchProviderIds.forEach(a=>{e[a]={entries:[]}}),this.resultsBySearchProvider=e},focus(){setTimeout(()=>{var e,a,i;(i=(a=(e=this.$refs["search-select"])==null?void 0:e.$el)==null?void 0:a.querySelector("#search-select-input"))==null||i.focus()},300)},cancelSearchRequests(){this.abortController&&this.abortController.abort()},onSearchInput(e,a){this.searchQuery=e,Nl(()=>{this.updateSearch()},500)()},onSelectResultSelected(e){e!==null&&(e.resourceUrl?(this.cancelSearchRequests(),this.$emit("submit",e.resourceUrl)):e.isMore&&this.searchMoreOf(e.providerId).then(()=>{this.selectedResult=null}))},searchMoreOf(e){return this.searchingMoreOf=e,this.cancelSearchRequests(),this.searchProviders(e)},updateSearch(){if(this.cancelSearchRequests(),this.resetResults(),this.searchQuery===""){this.searching=!1;return}return this.searchProviders()},searchProviders(e=null){var a,i;this.abortController=new AbortController,this.searching=!0;const n=e===null?[...this.searchProviderIds].map(o=>this.searchOneProvider(o)):[this.searchOneProvider(e,(i=(a=this.resultsBySearchProvider[e])==null?void 0:a.cursor)!=null?i:null)];return Promise.allSettled(n).then(o=>{o.find(s=>s.status==="rejected"&&(s.reason.name==="CanceledError"||s.reason.code==="ERR_CANCELED"))||(this.searching=!1,this.searchingMoreOf=null)})},searchOneProvider(e,a=null){const i=a===null?Ua("search/providers/{providerId}/search?term={term}&limit={limit}",{providerId:e,term:this.searchQuery,limit:Us}):Ua("search/providers/{providerId}/search?term={term}&limit={limit}&cursor={cursor}",{providerId:e,term:this.searchQuery,limit:Us,cursor:a});return pa.get(i,{signal:this.abortController.signal}).then(n=>{const o=n.data.ocs.data;this.resultsBySearchProvider[e].name=o.name,this.resultsBySearchProvider[e].cursor=o.cursor,this.resultsBySearchProvider[e].isPaginated=o.isPaginated,this.resultsBySearchProvider[e].entries.push(...o.entries)})}}};var Gp=function(){var e=this,a=e._self._c;return a("div",{staticClass:"smart-picker-search",class:{"with-empty-content":e.showEmptyContent}},[a("NcSelect",{ref:"search-select",staticClass:"smart-picker-search--select",attrs:{"input-id":"search-select-input",label:"name",placeholder:e.mySearchPlaceholder,options:e.options,"append-to-body":!1,"close-on-select":!1,"clear-search-on-select":!1,"clear-search-on-blur":()=>!1,"reset-focus-on-options-change":!1,filterable:!1,autoscroll:!0,"reset-on-options-change":!1,loading:e.searching},on:{search:e.onSearchInput,input:e.onSelectResultSelected},scopedSlots:e._u([{key:"option",fn:function(i){return[i.isRawLink?a("div",{staticClass:"custom-option"},[a("LinkVariantIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t("Raw link {options}",{options:i.resourceUrl}))+" ")])],1):i.resourceUrl?a("NcSearchResult",{staticClass:"search-result",attrs:{entry:i,query:e.searchQuery}}):i.isCustomGroupTitle?a("span",{staticClass:"custom-option group-name"},[e.provider.icon_url?a("img",{staticClass:"provider-icon group-name-icon",attrs:{src:e.provider.icon_url}}):e._e(),a("span",{staticClass:"option-text"},[a("strong",[e._v(e._s(i.name))])])]):i.isMore?a("span",{class:{"custom-option":!0}},[i.isLoading?a("span",{staticClass:"option-simple-icon icon-loading-small"}):a("DotsHorizontalIcon",{staticClass:"option-simple-icon",attrs:{size:20}}),a("span",{staticClass:"option-text"},[e._v(" "+e._s(e.t('Load more "{options}"',{options:i.name}))+" ")])],1):e._e()]}},{key:"no-options",fn:function(){return[e._v(" "+e._s(e.noOptionsText)+" ")]},proxy:!0}]),model:{value:e.selectedResult,callback:function(i){e.selectedResult=i},expression:"selectedResult"}}),e.showEmptyContent?a("NcEmptyContent",{staticClass:"smart-picker-search--empty-content",scopedSlots:e._u([{key:"icon",fn:function(){return[e.provider.icon_url?a("img",{staticClass:"provider-icon",attrs:{alt:e.providerIconAlt,src:e.provider.icon_url}}):a("LinkVariantIcon")]},proxy:!0}],null,!1,2922132592)}):e._e()],1)},Up=[],zp=ie(Pp,Gp,Up,!1,null,"05fef988");const Vp=zp.exports,qt={providerList:1,standardLinkInput:2,searchInput:3,customElement:4},Wp={name:"NcReferencePicker",components:{NcCustomPickerElement:mp,NcProviderList:Op,NcRawLinkInput:Yp,NcSearch:Vp},props:{initialProvider:{type:Object,default:()=>null},width:{type:Number,default:null},focusOnCreate:{type:Boolean,default:!0}},emits:["cancel","cancel-raw-link","cancel-search","provider-selected","submit"],data(){return{MODES:qt,selectedProvider:this.initialProvider}},computed:{mode(){return this.selectedProvider===null?qt.providerList:ri(this.selectedProvider.id)?qt.customElement:this.selectedProvider.search_providers_ids?qt.searchInput:qt.standardLinkInput},pickerWrapperStyle(){return{width:this.width?this.width+"px":void 0}}},mounted(){this.focusOnCreate&&(this.initialProvider?setTimeout(()=>{var e;(e=this.$refs["url-input"])==null||e.focus()},300):this.$nextTick(()=>{var e;(e=this.$refs["provider-list"])==null||e.focus()}))},methods:{onEscapePressed(){this.selectedProvider!==null?this.deselectProvider():this.cancelProviderSelection()},onProviderSelected(e){this.selectedProvider=e,this.$emit("provider-selected",e),this.$nextTick(()=>{var a;(a=this.$refs["url-input"])==null||a.focus()})},cancelCustomElement(){this.deselectProvider()},cancelSearch(){var e;this.$emit("cancel-search",(e=this.selectedProvider)==null?void 0:e.title),this.deselectProvider()},cancelRawLinkInput(){var e;this.$emit("cancel-raw-link",(e=this.selectedProvider)==null?void 0:e.title),this.deselectProvider()},cancelProviderSelection(){this.$emit("cancel")},submitLink(e){this.selectedProvider!==null&&Ep(this.selectedProvider.id),this.$emit("submit",e),this.deselectProvider()},deselectProvider(){this.selectedProvider=null,this.$emit("provider-selected",null),setTimeout(()=>{var e;(e=this.$refs["provider-list"])==null||e.focus()},300)}}};var $p=function(){var e=this,a=e._self._c;return a("div",{staticClass:"reference-picker",style:e.pickerWrapperStyle,attrs:{tabindex:"-1"},on:{keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:(i.stopPropagation(),i.preventDefault(),e.onEscapePressed.apply(null,arguments))}}},[e.mode===e.MODES.providerList?a("NcProviderList",{ref:"provider-list",on:{"select-provider":e.onProviderSelected,submit:e.submitLink,cancel:e.cancelProviderSelection}}):e.mode===e.MODES.standardLinkInput?a("NcRawLinkInput",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelRawLinkInput}}):e.mode===e.MODES.searchInput?a("NcSearch",{ref:"url-input",attrs:{provider:e.selectedProvider},on:{cancel:e.cancelSearch,submit:e.submitLink}}):e.mode===e.MODES.customElement?a("div",{staticClass:"custom-element-wrapper"},[a("NcCustomPickerElement",{attrs:{provider:e.selectedProvider},on:{submit:e.submitLink,cancel:e.cancelCustomElement}})],1):e._e()],1)},Qp=[],Kp=ie(Wp,$p,Qp,!1,null,"f3f0de17");const Jp=Kp.exports;oe(H1,I1);const Xp={name:"NcReferencePickerModal",components:{NcReferencePicker:Jp,NcModal:Ks,NcButton:Ka,ArrowLeftIcon:_l,CloseIcon:Pn},props:{initialProvider:{type:Object,default:()=>null},focusOnCreate:{type:Boolean,default:!0},isInsideViewer:{type:Boolean,default:!1}},emits:["cancel","submit"],data(){return{show:!0,selectedProvider:this.initialProvider,backButtonTitle:N("Back to provider selection"),closeButtonTitle:N("Close"),closeButtonLabel:N("Close Smart Picker")}},computed:{isProviderSelected(){return this.selectedProvider!==null},showBackButton(){return this.initialProvider===null&&this.isProviderSelected},modalSize(){var e;return this.isProviderSelected&&ri(this.selectedProvider.id)?(e=ip(this.selectedProvider.id))!=null?e:"large":"normal"},showModalName(){return!this.isProviderSelected||!ri(this.selectedProvider.id)},modalName(){return this.isProviderSelected?this.selectedProvider.title:N("Smart Picker")}},mounted(){if(this.isInsideViewer){const e=this.$refs.modal_content;Ri("viewer:trapElements:changed",e)}},methods:{onCancel(){this.show=!1,this.$emit("cancel")},onSubmit(e){this.show=!1,this.$emit("submit",e)},onProviderSelect(e){this.selectedProvider=e,e===null&&this.initialProvider!==null&&this.onCancel()},onBackClicked(){this.$refs.referencePicker.deselectProvider()}}};var e2=function(){var e=this,a=e._self._c;return e.show?a("NcModal",{staticClass:"reference-picker-modal",attrs:{size:e.modalSize,"can-close":!1},on:{close:e.onCancel}},[a("div",{ref:"modal_content",staticClass:"reference-picker-modal--content"},[e.showBackButton?a("NcButton",{staticClass:"back-button",attrs:{"aria-label":e.backButtonTitle,title:e.backButtonTitle},on:{click:e.onBackClicked},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeftIcon")]},proxy:!0}],null,!1,3001860362)}):e._e(),a("NcButton",{staticClass:"close-button",attrs:{"aria-label":e.closeButtonLabel,title:e.closeButtonTitle,type:"tertiary"},on:{click:e.onCancel},scopedSlots:e._u([{key:"icon",fn:function(){return[a("CloseIcon")]},proxy:!0}],null,!1,2491825086)}),e.showModalName?a("h2",[e._v(" "+e._s(e.modalName)+" ")]):e._e(),a("NcReferencePicker",{ref:"referencePicker",attrs:{"initial-provider":e.initialProvider,"focus-on-create":e.focusOnCreate},on:{"provider-selected":e.onProviderSelect,submit:e.onSubmit,cancel:e.onCancel}})],1)]):e._e()},a2=[],t2=ie(Xp,e2,a2,!1,null,"19d3f57d");const F3=t2.exports;if(Array.prototype.find||(Array.prototype.find=function(e){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof e!="function")throw new TypeError("predicate must be a function");for(var a=Object(this),i=a.length>>>0,n=arguments[1],o,s=0;s<i;s++)if(o=a[s],e.call(n,o,s,a))return o}),window&&typeof window.CustomEvent!="function"){let e=function(a,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(a,i.bubbles,i.cancelable,i.detail),n};typeof window.Event<"u"&&(e.prototype=window.Event.prototype),window.CustomEvent=e}function i2({onlyFirst:e=!1}={}){const a=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");return new RegExp(a,e?void 0:"g")}const u3=i2();const n2={name:"NcAutoCompleteResult",components:{NcUserStatusIcon:xr},props:{title:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},subline:{type:String,default:null},id:{type:String,default:null},icon:{type:String,required:!0},iconUrl:{type:String,default:null},source:{type:String,required:!0},status:{type:[Object,Array],default:()=>({})}},computed:{avatarUrl(){return this.iconUrl?this.iconUrl:this.id&&this.source==="users"?this.getAvatarUrl(this.id,44):null},labelWithFallback(){return this.label||this.title}},methods:{getAvatarUrl:to}};var o2=function(){var e=this,a=e._self._c;return a("div",{staticClass:"autocomplete-result"},[a("div",{staticClass:"autocomplete-result__icon",class:[e.icon,"autocomplete-result__icon--".concat(e.avatarUrl?"with-avatar":"")],style:e.avatarUrl?{backgroundImage:"url(".concat(e.avatarUrl,")")}:null},[e.status.icon?a("span",{staticClass:"autocomplete-result__status autocomplete-result__status--icon"},[e._v(" "+e._s(e.status&&e.status.icon||"")+" ")]):e.status.status&&e.status.status!=="offline"?a("NcUserStatusIcon",{staticClass:"autocomplete-result__status",attrs:{status:e.status.status}}):e._e()],1),a("span",{staticClass:"autocomplete-result__content"},[a("span",{staticClass:"autocomplete-result__title",attrs:{title:e.labelWithFallback}},[e._v(" "+e._s(e.labelWithFallback)+" ")]),e.subline?a("span",{staticClass:"autocomplete-result__subline"},[e._v(" "+e._s(e.subline)+" ")]):e._e()])])},s2=[],r2=ie(n2,o2,s2,!1,null,"98c79945");const c3=r2.exports;oe(U1,lr);const l2=["d","D","p","P","s","S","x","X",")","(","|","/"],zs=[];l2.forEach(e=>{zs.push(":"+e),zs.push(":-"+e)}),G1,N("Write a message …");oe(z1),{...q0.props,placeholder:N("Select a tag")},oe(or),oe(V1),oe(W1),N,Un(function(e){this.loadGroup(e)},200);var Vs,hn,Ws;(Ws=(hn=(Vs=window.OCP)==null?void 0:Vs.Accessibility)==null?void 0:hn.disableKeyboardShortcuts)==null||Ws.call(hn);const wi={name:x("viewer","Name"),save:x("viewer","Save"),saveAs:x("viewer","Save as"),back:x("viewer","Back"),loading:x("viewer","Loading …"),resetOperations:x("viewer","Reset"),changesLoseConfirmation:x("viewer","All changes will be lost."),changesLoseConfirmationHint:x("viewer","Are you sure you want to continue?"),cancel:x("viewer","Cancel"),continue:x("viewer","Continue"),undoTitle:x("viewer","Undo"),redoTitle:x("viewer","Redo"),showImageTitle:x("viewer","Show original image"),zoomInTitle:x("viewer","Zoom in"),zoomOutTitle:x("viewer","Zoom out"),toggleZoomMenuTitle:x("viewer","Toggle zoom menu"),adjustTab:x("viewer","Adjust"),finetuneTab:x("viewer","Fine-tune"),filtersTab:x("viewer","Filters"),watermarkTab:x("viewer","Watermark"),annotateTab:x("viewer","Draw"),resize:x("viewer","Resize"),resizeTab:x("viewer","Resize"),invalidImageError:x("viewer","Invalid image."),uploadImageError:x("viewer","Error while uploading the image."),areNotImages:x("viewer","are not images"),isNotImage:x("viewer","is not an image"),toBeUploaded:x("viewer","to be uploaded"),cropTool:x("viewer","Crop"),original:x("viewer","Original"),custom:x("viewer","Custom"),square:x("viewer","Square"),landscape:x("viewer","Landscape"),portrait:x("viewer","Portrait"),ellipse:x("viewer","Ellipse"),classicTv:x("viewer","Classic TV"),cinemascope:x("viewer","CinemaScope"),arrowTool:x("viewer","Arrow"),blurTool:x("viewer","Blur"),brightnessTool:x("viewer","Brightness"),contrastTool:x("viewer","Contrast"),ellipseTool:x("viewer","Ellipse"),unFlipX:x("viewer","Un-flip X"),flipX:x("viewer","Flip X"),unFlipY:x("viewer","Un-flip Y"),flipY:x("viewer","Flip Y"),hsvTool:x("viewer","HSV"),hue:x("viewer","Hue"),saturation:x("viewer","Saturation"),value:x("viewer","Value"),imageTool:x("viewer","Image"),importing:x("viewer","Importing …"),addImage:x("viewer","+ Add image"),lineTool:x("viewer","Line"),penTool:x("viewer","Pen"),polygonTool:x("viewer","Polygon"),sides:x("viewer","Sides"),rectangleTool:x("viewer","Rectangle"),cornerRadius:x("viewer","Corner Radius"),resizeWidthTitle:x("viewer","Width in pixels"),resizeHeightTitle:x("viewer","Height in pixels"),toggleRatioLockTitle:x("viewer","Toggle ratio lock"),reset:x("viewer","Reset"),resetSize:x("viewer","Reset to original image size"),rotateTool:x("viewer","Rotate"),textTool:x("viewer","Text"),textSpacings:x("viewer","Text spacing"),textAlignment:x("viewer","Text alignment"),fontFamily:x("viewer","Font family"),size:x("viewer","Size"),letterSpacing:x("viewer","Letter spacing"),lineHeight:x("viewer","Line height"),warmthTool:x("viewer","Warmth"),addWatermark:x("viewer","+ Add watermark"),addWatermarkTitle:x("viewer","Choose watermark type"),uploadWatermark:x("viewer","Upload watermark"),addWatermarkAsText:x("viewer","Add as text"),padding:x("viewer","Padding"),shadow:x("viewer","Shadow"),horizontal:x("viewer","Horizontal"),vertical:x("viewer","Vertical"),blur:x("viewer","Blur"),opacity:x("viewer","Opacity"),position:x("viewer","Position"),stroke:x("viewer","Stroke"),saveAsModalLabel:x("viewer","Save image as"),extension:x("viewer","Extension"),nameIsRequired:x("viewer","Name is required."),quality:x("viewer","Quality"),imageDimensionsHoverTitle:x("viewer","Saved image size (width x height)"),cropSizeLowerThanResizedWarning:x("viewer","Note that the selected crop area is lower than the applied resize which might cause quality decrease"),actualSize:x("viewer","Actual size (100%)"),fitSize:x("viewer","Fit size")};let vi,$s;const _2={name:"ImageEditor",props:{fileid:{type:[String,Number],required:!0},mime:{type:String,required:!0},src:{type:String,required:!0}},data(){return{imageEditor:null}},computed:{config(){return{source:this.src,defaultSavedImageName:this.defaultSavedImageName,defaultSavedImageType:this.defaultSavedImageType,useBackendTranslations:!1,observePluginContainerSize:!0,defaultTabId:vi.ADJUST,defaultToolId:$s.CROP,tabsIds:Object.values(vi).filter(e=>e!==vi.WATERMARK).sort((e,a)=>e.localeCompare(a)),onClose:this.onClose,onSave:this.onSave,translations:wi,theme:{palette:{"bg-secondary":"var(--color-main-background)","bg-primary":"var(--color-background-dark)","bg-hover":"var(--color-background-hover)","bg-stateless":"var(--color-background-dark)","accent-primary":"var(--color-primary-element)","accent-stateless":"var(--color-primary-element)","border-active-bottom":"var(--color-primary-element)","bg-primary-active":"var(--color-background-dark)","bg-primary-hover":"var(--color-background-hover)","accent-primary-active":"var(--color-main-text)","accent-primary-hover":"var(--color-primary-element)",warning:"var(--color-error)"},typography:{fontFamily:"var(--font-face)"}}}},defaultSavedImageName(){return Yt.basename(this.src,Yt.extname(this.src))},defaultSavedImageType(){return Yt.extname(this.src).slice(1)||"jpeg"},hasHighContrastEnabled(){return(OCA?.Theming?.enabledThemes||[]).find(e=>e.indexOf("highcontrast")!==-1)},themeDataAttr(){return this.hasHighContrastEnabled?{"data-theme-dark-highcontrast":!0}:{"data-theme-dark":!0}}},async mounted(){const e=(await zn(async()=>{const{default:a}=await import("./index-b78vIMKb.chunk.mjs");return{default:a}},__vite__mapDeps([0,1,2]),import.meta.url)).default;vi=e.TABS,$s=e.TOOLS,this.imageEditor=new e(this.$refs.editor,this.config),this.imageEditor.render(),window.addEventListener("keydown",this.handleKeydown,!0),window.addEventListener("DOMNodeInserted",this.handleSfxModal)},beforeDestroy(){this.imageEditor&&this.imageEditor.terminate(),window.removeEventListener("keydown",this.handleKeydown,!0)},methods:{onClose(e,a){if(a){this.onExitWithoutSaving();return}window.removeEventListener("keydown",this.handleKeydown,!0),this.$emit("close")},async onSave({fullName:e,imageCanvas:a,mimeType:i,quality:n}){const{origin:o,pathname:s}=new URL(this.src),l=o+Yt.join(Yt.dirname(s),e);Za.debug("Saving image...",{putUrl:l,src:this.src,fullName:e}),i=i.replace("jpg","jpeg"),n=Math.max(Math.min(n,1),0)||1;try{const _=await new Promise(f=>a.toBlob(f,i,n)),r=await pa.put(l,new File([_],e));if(Za.info("Edited image saved!",{response:r}),$1(t("viewer","Image saved")),l!==this.src)Ri("files:node:created",{fileid:parseInt(r?.headers?.["oc-fileid"]?.split("oc")[0])||null});else{this.$emit("updated");const f=await Q1(o,decodeURI(s)),d=new K1({id:Number.parseInt(this.fileid),source:this.src,mtime:new Date(f.lastmod),...f,attributes:{...f,...f.props}});Ri("files:node:updated",d)}}catch(_){Za.error("Error saving image",{error:_}),J1(t("viewer","Error saving image"))}},onExitWithoutSaving(){OC.dialogs.confirmDestructive(wi.changesLoseConfirmation+`

`+wi.changesLoseConfirmationHint,t("viewer","Unsaved changes"),{type:OC.dialogs.YES_NO_BUTTONS,confirm:t("viewer","Drop changes"),confirmClasses:"error",cancel:wi.cancel},e=>{e&&this.onClose("warning-ignored",!1)})},handleKeydown(e){e.key!=="Enter"&&e.stopImmediatePropagation(),e.key==="Escape"&&(e.preventDefault(),document.querySelector(".FIE_topbar-close-button").click()),e.ctrlKey&&e.key==="s"&&(e.preventDefault(),document.querySelector(".FIE_topbar-save-button").click()),e.ctrlKey&&e.key==="z"&&(e.preventDefault(),document.querySelector(".FIE_topbar-undo-button").click())},handleSfxModal(e){e.target?.classList&&e.target.classList.contains("SfxModal-Wrapper")&&Ri("viewer:trapElements:changed",e.target)}}};var d2=function(){var e=this,a=e._self._c;return a("div",e._b({ref:"editor",staticClass:"viewer__image-editor"},"div",e.themeDataAttr,!1))},f2=[],g2=li(_2,d2,f2,!1,null,"a2c8f486");const h2=g2.exports,F2=["jpg","jpeg","png"],u2=new RegExp(`\\.(${F2.join("|")})$`,"i");function c2(e,a){return a.find(i=>i.fileid===e)}function m2(e,a){return a.find(i=>i.filename!==e.filename&&i.basename.startsWith(e.name)&&u2.test(i.basename))}za.use(ur);const p2={name:"Images",components:{ImageEditor:h2,PlayCircleOutline:C_,NcLoadingIcon:C0},props:{editing:{type:Boolean,default:!1}},data(){return{dragging:!1,shiftX:0,shiftY:0,zoomRatio:1,fallback:!1,livePhotoCanBePlayed:!1,zooming:!1,pinchDistance:0,pinchStartZoomRatio:1,pointerCache:[]}},computed:{src(){return this.source??this.davPath},zoomHeight(){return Math.round(this.height*this.zoomRatio)},zoomWidth(){return Math.round(this.width*this.zoomRatio)},alt(){return this.basename},imgStyle(){return this.zoomRatio===1?{height:this.zoomHeight+"px",width:this.zoomWidth+"px"}:{marginTop:Math.round(this.shiftY*2)+"px",marginLeft:Math.round(this.shiftX*2)+"px",height:this.zoomHeight+"px",width:this.zoomWidth+"px"}},livePhoto(){if(this.metadataFilesLivePhoto!==void 0)return c2(this.metadataFilesLivePhoto,this.fileList)},livePhotoSrc(){return this.livePhoto?.source??this.livePhotoDavPath},livePhotoDavPath(){return this.livePhoto?X1({filename:this.livePhoto.filename,basename:this.livePhoto.basename}):null}},asyncComputed:{data(){return this.mime==="image/svg+xml"?this.getBase64FromImage():this.mime==="image/gif"?this.src:this.source&&!this.hasPreview&&!this.previewUrl?this.source:this.fallback?this.src:this.previewPath}},watch:{active(e,a){e===!0&&a===!1?(this.resetZoom(),window.addEventListener("pointerout",this.pointerUp)):e===!1&&window.removeEventListener("pointerout",this.pointerUp)}},methods:{updateImgSize(){this.$refs.image?(this.naturalHeight=this.$refs.image.naturalHeight,this.naturalWidth=this.$refs.image.naturalWidth):this.$refs.video&&(this.naturalHeight=this.$refs.video.videoHeight,this.naturalWidth=this.$refs.video.videoWidth),this.updateHeightWidth(),this.doneLoading()},async getBase64FromImage(){const e=await pa.get(this.src);return`data:${this.mime};base64,${btoa(unescape(encodeURIComponent(e.data)))}`},updateShift(e,a,i){const n=this.width*i-this.width,o=this.height*i-this.height;this.shiftX=Math.min(Math.max(e,-n/2),n/2),this.shiftY=Math.min(Math.max(a,-o/2),o/2)},updateZoomAndShift(e,a,i){if(!this.canZoom)return;const n=this.$refs.image??this.$refs.video,o=e-n.getBoundingClientRect().x-this.width*this.zoomRatio/2,s=a-n.getBoundingClientRect().y-this.height*this.zoomRatio/2,l=o/(this.width*this.zoomRatio),_=s/(this.height*this.zoomRatio),r=this.width*i-this.width*this.zoomRatio,f=this.height*i-this.height*this.zoomRatio,d=this.shiftX-l*r,g=this.shiftY-_*f;this.updateShift(d,g,i),this.zoomRatio=i},distanceBetweenTouches(){const e=this.pointerCache[0],a=this.pointerCache[1],i=a.x-e.x,n=a.y-e.y;return Math.sqrt(i*i+n*n)},updateZoom(e){if(!this.canZoom)return;const a=e.deltaY<0?Math.min(this.zoomRatio*1.1,5):Math.max(this.zoomRatio/1.1,1);if(a===1)return this.resetZoom();this.disableSwipe(),this.updateZoomAndShift(e.clientX,e.clientY,a)},resetZoom(){this.enableSwipe(),this.zoomRatio=1,this.shiftX=0,this.shiftY=0},pointerDown(e){this.pointerCache.push({pointerId:e.pointerId,x:e.clientX,y:e.clientY}),this.pointerCache.length===1&&(this.dragX=e.clientX,this.dragY=e.clientY,this.dragging=!0),this.pointerCache.length===2&&(this.pinchDistance=this.distanceBetweenTouches(),this.pinchStartZoomRatio=this.zoomRatio,this.zooming=!0,this.disableSwipe())},pointerUp(e){const a=this.pointerCache.findIndex(i=>i.pointerId===e.pointerId);this.pointerCache.splice(a,1),this.dragging=!1,this.zooming=!1},pointerMove(e){if(this.canZoom){if(this.pointerCache.length>0){const a=this.pointerCache.findIndex(i=>i.pointerId===e.pointerId);a>=0&&(this.pointerCache[a].x=e.clientX,this.pointerCache[a].y=e.clientY)}if(this.pointerCache.length===1&&this.dragging&&!this.zooming&&this.zoomRatio>1){const{clientX:a,clientY:i}=e,n=this.shiftX+(a-this.dragX),o=this.shiftY+(i-this.dragY);this.updateShift(n,o,this.zoomRatio),this.dragX=a,this.dragY=i}if(this.pointerCache.length===2&&this.zooming){const a=this.distanceBetweenTouches(),i=Math.min(Math.max(this.pinchStartZoomRatio*(a/this.pinchDistance),1),5),n=this.pointerCache[0],o=this.pointerCache[1],s=(n.x+o.x)/2,l=(n.y+o.y)/2;this.updateZoomAndShift(s,l,i)}}},onDblclick(){this.canZoom&&(this.zoomRatio>1?this.resetZoom():this.zoomRatio=1.3)},onClose(){this.$emit("update:editing",!1)},onFail(){this.fallback||(console.error(`Loading of file preview ${e_(this.src)} failed, falling back to original file`),this.fallback=!0)},doneLoadingLivePhoto(){this.livePhotoCanBePlayed=!0,this.doneLoading()},playLivePhoto(){this.livePhotoCanBePlayed&&this.$refs.video.play()},stopLivePhoto(){this.$refs.video.load()},t:x}};var b2=function(){var e=this,a=e._self._c;return a("div",{staticClass:"image_container"},[e.editing?a("ImageEditor",{attrs:{mime:e.mime,src:e.src,fileid:e.fileid},on:{close:e.onClose}}):e.data!==null?[e.livePhotoCanBePlayed?e._e():a("img",{ref:"image",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio>1},style:e.imgStyle,attrs:{alt:e.alt,src:e.data},on:{"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},load:e.updateImgSize,wheel:function(i){return i.stopPropagation(),i.preventDefault(),e.updateZoom.apply(null,arguments)},dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},pointerdown:function(i){return i.preventDefault(),e.pointerDown.apply(null,arguments)},pointerup:function(i){return i.preventDefault(),e.pointerUp.apply(null,arguments)},pointermove:function(i){return i.preventDefault(),e.pointerMove.apply(null,arguments)}}}),e.livePhoto?[a("video",{directives:[{name:"show",rawName:"v-show",value:e.livePhotoCanBePlayed,expression:"livePhotoCanBePlayed"}],ref:"video",class:{dragging:e.dragging,loaded:e.loaded,zoomed:e.zoomRatio>1},style:e.imgStyle,attrs:{playsinline:!0,poster:e.data,src:e.livePhotoSrc,preload:"metadata"},on:{canplaythrough:e.doneLoadingLivePhoto,loadedmetadata:e.updateImgSize,wheel:function(i){return i.stopPropagation(),i.preventDefault(),e.updateZoom.apply(null,arguments)},"~!error":function(i){return i.preventDefault(),i.stopPropagation(),e.onFail.apply(null,arguments)},dblclick:function(i){return i.preventDefault(),e.onDblclick.apply(null,arguments)},pointerdown:function(i){return i.preventDefault(),e.pointerDown.apply(null,arguments)},pointerup:function(i){return i.preventDefault(),e.pointerUp.apply(null,arguments)},pointermove:function(i){return i.preventDefault(),e.pointerMove.apply(null,arguments)},ended:e.stopLivePhoto}}),e.width!==0?a("button",{staticClass:"live-photo_play_button",style:{left:`calc(50% - ${e.width/2}px)`},attrs:{disabled:!e.livePhotoCanBePlayed,"aria-description":e.t("viewer","Play the live photo")},on:{click:e.playLivePhoto,pointerenter:e.playLivePhoto,focus:e.playLivePhoto,pointerleave:e.stopLivePhoto,blur:e.stopLivePhoto}},[e.livePhotoCanBePlayed?a("PlayCircleOutline"):a("NcLoadingIcon"),e._v(" "+e._s(e.t("viewer","LIVE"))+" ")],1):e._e()]:e._e()]:e._e()],2)},D2=[],T2=li(p2,b2,D2,!1,null,"d649c2f5");const y2=T2.exports,E2=Jt(Ll,"enabled_preview_providers",[]),xl=["image/heic","image/heif","image/tiff","image/x-xbitmap","image/emf"],k2=["image/apng","image/bmp","image/gif","image/jpeg","image/png","image/svg+xml","image/webp","image/x-icon"],A2=()=>xl.filter(e=>E2.findIndex(a=>{const i=new RegExp(a.replace(/^\/|\/$/g,""),"i");return e.match(i)})>-1),Ml=A2(),Qs=xl.filter(e=>!Ml.includes(e));Qs.length>0&&Za.warn("Some mimes were ignored because they are not enabled in the server previews config",{ignoredMimes:Qs});const w2={id:"images",group:"media",mimes:[...k2,...Ml],component:y2},v2=()=>zn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),S2=_r("viewer","blank.mp4"),R2={name:"Videos",components:{VuePlyr:v2},data(){return{isFullscreenButtonVisible:!1}},computed:{livePhotoPath(){const e=m2(this,this.fileList);if(e!==void 0)return a_(e)},player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:S2,controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen"],loadSprite:!1,fullscreen:{iosNative:!0}}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},updated(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e.getAttribute("data-plyr")==="fullscreen"&&e.addEventListener("click",this.hideHeaderAndFooter),e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){Za.debug("Closing video stream",{filename:this.filename}),this.$refs.video?.pause?.(),this.player.stop(),this.player.destroy()},methods:{hideHeaderAndFooter(){this.isFullscreenButtonVisible=!this.isFullscreenButtonVisible,this.isFullscreenButtonVisible?(document.body.querySelector("main").classList.add("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.add("viewer__hidden-fullscreen")):(document.body.querySelector("main").classList.remove("viewer__hidden-fullscreen"),document.body.querySelector("footer").classList.remove("viewer__hidden-fullscreen"))},updateVideoSize(){this.naturalHeight=this.$refs.video?.videoHeight,this.naturalWidth=this.$refs.video?.videoWidth,this.updateHeightWidth()},donePlaying(){this.$refs.video.autoplay=!1,this.$refs.video.load()},onLoadedMetadata(){this.updateVideoSize(),this.active||this.player.stop()}}};var C2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",style:{height:e.height+"px",width:e.width+"px"},attrs:{options:e.options}},[a("video",{ref:"video",attrs:{autoplay:e.active?!0:null,playsinline:!0,poster:e.livePhotoPath,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading,loadedmetadata:e.onLoadedMetadata}},[e._v(" "+e._s(e.t("viewer","Your browser does not support videos."))+" ")])])],1):e._e()},B2=[],O2=li(R2,C2,B2,!1,null,"572afae3");const N2=O2.exports,x2={id:"videos",group:"media",mimes:["video/mpeg","video/ogg","video/webm","video/mp4","video/x-m4v","video/x-flv","video/quicktime"],mimesAliases:{"video/x-matroska":"video/webm"},component:N2},M2=()=>zn(()=>import("./index.esm-qAm1tkFs.chunk.mjs"),[],import.meta.url),j2={name:"Audios",components:{VuePlyr:M2},computed:{player(){return this.$refs.plyr.player},options(){return{autoplay:this.active===!0,blankVideo:"/blank.aac",controls:["play-large","play","progress","current-time","mute","volume","settings"],loadSprite:!1}}},watch:{active(e,a){e===!0&&a===!1?this.player.play():e===!1&&a===!0&&this.player.pause()}},mounted(){[...this.$el.querySelectorAll(".plyr__controls__item")].forEach(e=>{e?.addEventListener&&(e.addEventListener("mouseenter",this.disableSwipe),e.addEventListener("mouseleave",this.enableSwipe))})},beforeDestroy(){Za.debug("Closing audio stream",{filename:this.filename}),this.$refs.audio.pause(),this.player.stop(),this.player.destroy()},methods:{donePlaying(){this.$refs.audio.autoplay=!1,this.$refs.audio.load()}}};var Y2=function(){var e=this,a=e._self._c;return e.src?a("div",[a("VuePlyr",{ref:"plyr",attrs:{options:e.options}},[a("audio",{ref:"audio",attrs:{autoplay:e.active,src:e.src,preload:"metadata"},on:{ended:e.donePlaying,canplay:e.doneLoading}},[e._v(" "+e._s(e.t("viewer","Your browser does not support audio."))+" ")])])],1):e._e()},q2=[],L2=li(j2,Y2,q2,!1,null,"2be0d851");const Z2=L2.exports,I2={id:"audios",group:"media",mimes:["audio/aac","audio/aacp","audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/vorbis","audio/wav","audio/webm"],component:Z2};class H2{_state;_mimetypes;_mimetypesCompare;constructor(){this._mimetypes=[],this._mimetypesCompare=[],this._state={},this._state.file="",this._state.fileInfo=null,this._state.compareFileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.el=null,this._state.loadMore=()=>[],this._state.onPrev=()=>{},this._state.onNext=()=>{},this._state.onClose=()=>{},this._state.canLoop=!0,this._state.handlers=[],this._state.overrideHandlerId=null,this.registerHandler(w2),this.registerHandler(x2),this.registerHandler(I2),Za.debug("OCA.Viewer initialized")}get availableHandlers(){return this._state.handlers}registerHandler(a){const i=this.validateHandler(a);if(i){Za.error("Could not register handler",{error:i,handler:a});return}this._state.handlers.push(a);const n=[...a.mimes,...Object.keys(a.mimesAliases||{})];this._mimetypes.push.apply(this._mimetypes,n),a?.canCompare===!0&&this._mimetypesCompare.push.apply(this._mimetypesCompare,n)}validateHandler({id:a,mimes:i,mimesAliases:n,component:o}){if(!a||a.trim()===""||typeof a!="string")return"The handler doesn't have a valid id";if(this._state.handlers.find(s=>s.id===a))return"The handler is already registered";if(!(i&&Array.isArray(i))&&!n)return"Handler needs a valid mime array or mimesAliases";if(!o||typeof o!="object"&&typeof o!="function")return"The handler doesn't have a valid component"}get file(){return this._state.file}get fileInfo(){return this._state.fileInfo}get compareFileInfo(){return this._state.compareFileInfo}get files(){return this._state.files}get enableSidebar(){return this._state.enableSidebar}get el(){return this._state.el}get mimetypes(){return this._mimetypes}get mimetypesCompare(){return this._mimetypesCompare}get loadMore(){return this._state.loadMore}get onPrev(){return this._state.onPrev}get onNext(){return this._state.onNext}get onClose(){return this._state.onClose}get canLoop(){return this._state.canLoop}get overrideHandlerId(){return this._state.overrideHandlerId}setRootElement(a=null){if(this._state.file)throw new Error("Please set root element before calling Viewer.open().");this._state.el=a}open({path:a,fileInfo:i,list:n=[],enableSidebar:o=!0,loadMore:s=()=>[],canLoop:l=!0,onPrev:_=()=>{},onNext:r=()=>{},onClose:f=()=>{}}={}){if(typeof arguments[0]=="string")throw new Error("Opening the viewer with a single string parameter is deprecated. Please use a destructuring object instead",`OCA.Viewer.open({ path: '${a}' })`);if(!a&&!i)throw new Error("Viewer needs either an URL or path to open. None given");if(a&&!a.startsWith("/"))throw new Error("Please use an absolute path");if(!Array.isArray(n))throw new Error("The files list must be an array");if(typeof s!="function")throw new Error("The loadMore method must be a function");a?this._state.file=a:this._state.fileInfo=i,this._state.el||(this._state.files=n,this._state.enableSidebar=o,this._state.loadMore=s,this._state.onPrev=_,this._state.onNext=r,this._state.onClose=f,this._state.canLoop=l)}openWith(a,i={}){this._state.overrideHandlerId=a,this.open(i)}compare(a,i){this.open({fileInfo:a}),this._state.compareFileInfo=i}close(){this._state.file="",this._state.fileInfo=null,this._state.files=[],this._state.enableSidebar=!0,this._state.canLoop=!0,this._state.loadMore=()=>[],this._state.overrideHandlerId=null}}f_(),window.OCA=window.OCA??{},window.OCA.Viewer=new H2,window.OCA.Viewer.version=Zl;
