/*! third party licenses: js/vendor.LICENSE.txt */
import{B as i,bh as a}from"./logger-DimaaeuD.chunk.mjs";import{A as n}from"./actionText-fFcUPi2g-1UIVDoW6.chunk.mjs";const o={name:"CheckIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var l=function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon check-icon",attrs:{"aria-hidden":t.title?null:!0,"aria-label":t.title,role:"img"},on:{click:function(s){return t.$emit("click",s)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])},c=[],u=i(o,l,c,!1,null,null);const r=u.exports,d={name:"NcActionButton",components:{CheckIcon:r,ChevronRightIcon:a},mixins:[n],inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}},props:{ariaHidden:{type:Boolean,default:null},disabled:{type:Boolean,default:!1},isMenu:{type:Boolean,default:!1},type:{type:String,default:"button",validator:t=>["button","checkbox","radio","reset","submit"].includes(t)},modelValue:{type:[Boolean,String],default:null},value:{type:String,default:null}},computed:{isFocusable(){return!this.disabled},isChecked(){return this.type==="radio"&&typeof this.modelValue!="boolean"?this.modelValue===this.value:this.modelValue},nativeType(){return this.type==="submit"||this.type==="reset"?this.type:"button"},buttonAttributes(){const t={};return this.isInSemanticMenu?(t.role="menuitem",this.type==="radio"?(t.role="menuitemradio",t["aria-checked"]=this.isChecked?"true":"false"):(this.type==="checkbox"||this.nativeType==="button"&&this.modelValue!==null)&&(t.role="menuitemcheckbox",t["aria-checked"]=this.modelValue===null?"mixed":this.modelValue?"true":"false")):this.modelValue!==null&&this.nativeType==="button"&&(t["aria-pressed"]=this.modelValue?"true":"false"),t}},methods:{handleClick(t){this.onClick(t),(this.modelValue!==null||this.type!=="button")&&(this.type==="radio"?typeof this.modelValue!="boolean"?this.isChecked||this.$emit("update:modelValue",this.value):this.$emit("update:modelValue",!this.isChecked):this.$emit("update:modelValue",!this.isChecked))}}};var h=function(){var t=this,e=t._self._c;return e("li",{staticClass:"action",class:{"action--disabled":t.disabled},attrs:{role:t.isInSemanticMenu&&"presentation"}},[e("button",t._b({class:["action-button button-vue",{"action-button--active":t.isChecked,focusable:t.isFocusable}],attrs:{"aria-label":t.ariaLabel,disabled:t.disabled,title:t.title,type:t.nativeType},on:{click:t.handleClick}},"button",t.buttonAttributes,!1),[t._t("icon",function(){return[e("span",{staticClass:"action-button__icon",class:[t.isIconUrl?"action-button__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url(".concat(t.icon,")"):null},attrs:{"aria-hidden":"true"}})]}),t.name?e("span",{staticClass:"action-button__longtext-wrapper"},[e("strong",{staticClass:"action-button__name"},[t._v(" "+t._s(t.name)+" ")]),e("br"),e("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?e("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}}):e("span",{staticClass:"action-button__text"},[t._v(t._s(t.text))]),t.isMenu?e("ChevronRightIcon",{staticClass:"action-button__menu-icon",attrs:{size:20}}):t.isChecked===!0?e("CheckIcon",{staticClass:"action-button__pressed-icon",attrs:{size:20}}):t.isChecked===!1?e("span",{staticClass:"action-button__pressed-icon material-design-icon"}):t._e(),t._e()],2)])},p=[],m=i(d,h,p,!1,null,"dba65098");const b=m.exports,f=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{r as C,b as N,f as a};