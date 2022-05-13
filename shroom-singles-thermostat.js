/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,r,i){var n,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,r,a):n(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a}var e=window&&window.__assign||function(){return e=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},e.apply(this,arguments)};["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"].map((function(t){return t.replace(/^(.*?)-/,"")}));var r,i,n,o=window&&window.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},r(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=window&&window.__assign||function(){return a=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},a.apply(this,arguments)};function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function l(t){return t.substr(0,t.indexOf("."))}function c(t){var e,r=(null==t||null==(e=t.locale)?void 0:e.language)||"en";return t.translationMetadata.translations[r]&&t.translationMetadata.translations[r].isRTL||!1}!function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="MISSING_LOCALE_DATA",e}o(e,t)}(Error),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(i||(i={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(n||(n={}));var u=function(t,e,r){var n=e?function(t){switch(t.number_format){case i.comma_decimal:return["en-US","en"];case i.decimal_comma:return["de","es","it"];case i.space_comma:return["fr","sv","cs"];case i.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==i.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,h(t,r)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,h(t,r)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==r?void 0:r.maximumFractionDigits).toString()+("currency"===(null==r?void 0:r.style)?" "+r.currency:"")},h=function(t,e){var r=s({maximumFractionDigits:2},e);if("string"!=typeof t)return r;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=t.indexOf(".")>-1?t.split(".")[1].length:0;r.minimumFractionDigits=i,r.maximumFractionDigits=i}return r},d=["closed","locked","off"],m="°F",g=function(t,e,r,i){i=i||{},r=null==r?{}:r;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=r,t.dispatchEvent(n),n},p=function(t){g(window,"haptic",t)},v=function(t,e){return function(t,e,r){void 0===r&&(r=!0);var i,n=l(e),o="group"===n?"homeassistant":n;switch(n){case"lock":i=r?"unlock":"lock";break;case"cover":i=r?"open_cover":"close_cover";break;default:i=r?"turn_on":"turn_off"}return t.callService(o,i,{entity_id:e})}(t,e,d.includes(t.states[e].state))},b=function(t,e,r,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(p("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(r.entity||r.camera_image)&&g(t,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":i.navigation_path&&function(t,e,r){void 0===r&&(r=!1),r?history.replaceState(null,"",e):history.pushState(null,"",e),g(window,"location-changed",{replace:r})}(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":r.entity&&(v(e,r.entity),p("success"));break;case"call-service":if(!i.service)return void p("failure");var n=i.service.split(".",2);e.callService(n[0],n[1],i.service_data,i.target),p("success");break;case"fire-dom-event":g(t,"ll-custom",i)}};function f(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),w=new Map;class ${constructor(t,e){if(this._$cssResult$=!0,e!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=w.get(this.cssText);return y&&void 0===t&&(w.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const k=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new $(r,_)},x=y?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new $("string"==typeof t?t:t+"",_))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var A;const E=window.trustedTypes,C=E?E.emptyScript:"",S=window.reactiveElementPolyfillSupport,M={toAttribute(t,e){switch(e){case Boolean:t=t?C:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},O=(t,e)=>e!==t&&(e==e||t==t),T={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:O};class j extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this._$Eh(r,e);void 0!==i&&(this._$Eu.set(i,r),t.push(i))})),t}static createProperty(t,e=T){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||T}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(x(t))}else void 0!==t&&e.push(x(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{y?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=T){var i,n;const o=this.constructor._$Eh(t,r);if(void 0!==o&&!0===r.reflect){const a=(null!==(n=null===(i=r.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:M.toAttribute)(e,r.type);this._$Ei=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(t,e){var r,i,n;const o=this.constructor,a=o._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=o.getPropertyOptions(a),s=t.converter,l=null!==(n=null!==(i=null===(r=s)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof s?s:null)&&void 0!==n?n:M.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||O)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;j.finalized=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},null==S||S({ReactiveElement:j}),(null!==(A=globalThis.reactiveElementVersions)&&void 0!==A?A:globalThis.reactiveElementVersions=[]).push("1.3.0");const N=globalThis.trustedTypes,P=N?N.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,H="?"+U,I=`<${H}>`,R=document,L=(t="")=>R.createComment(t),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,V=/>/g,W=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,J=/'/g,K=/"/g,Z=/^(?:script|style|textarea|title)$/i,G=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Y=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),X=new WeakMap,tt=R.createTreeWalker(R,129,null,!1),et=(t,e)=>{const r=t.length-1,i=[];let n,o=2===e?"<svg>":"",a=B;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,l=a.exec(r),null!==l);)u=a.lastIndex,a===B?"!--"===l[1]?a=q:void 0!==l[1]?a=V:void 0!==l[2]?(Z.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=null!=n?n:B,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?W:'"'===l[3]?K:J):a===K||a===J?a=W:a===q||a===V?a=B:(a=W,n=void 0);const h=a===W&&t[e+1].startsWith("/>")?" ":"";o+=a===B?r+I:c>=0?(i.push(s),r.slice(0,c)+"$lit$"+r.slice(c)+U+h):r+U+(-2===c?(i.push(void 0),e):h)}const s=o+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==P?P.createHTML(s):s,i]};class rt{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,o=0;const a=t.length-1,s=this.parts,[l,c]=et(t,e);if(this.el=rt.createElement(l,r),tt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=tt.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(U)){const r=c[o++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split(U),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?st:"?"===e[1]?ct:"@"===e[1]?ut:at})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(Z.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=N?N.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],L()),tt.nextNode(),s.push({type:2,index:++n});i.append(t[e],L())}}}else if(8===i.nodeType)if(i.data===H)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)s.push({type:7,index:n}),t+=U.length-1}n++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function it(t,e,r=t,i){var n,o,a,s;if(e===Y)return e;let l=void 0!==i?null===(n=r._$Cl)||void 0===n?void 0:n[i]:r._$Cu;const c=F(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,i)),void 0!==i?(null!==(a=(s=r)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=l:r._$Cu=l),void 0!==l&&(e=it(t,l._$AS(t,e.values),l,i)),e}class nt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:R).importNode(r,!0);tt.currentNode=n;let o=tt.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new ot(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ht(o,this,t)),this.v.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(o=tt.nextNode(),a++)}return n}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class ot{constructor(t,e,r,i){var n;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),F(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Y&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return D(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Q&&F(this._$AH)?this._$AA.nextSibling.data=t:this.k(R.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=rt.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(r);else{const t=new nt(n,this),e=t.p(this.options);t.m(r),this.k(e),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new rt(t)),e}S(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new ot(this.A(L()),this.A(L()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class at{constructor(t,e,r,i,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const n=this.strings;let o=!1;if(void 0===n)t=it(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==Y,o&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=it(this,i[r+a],e,a),s===Y&&(s=this._$AH[a]),o||(o=!F(s)||s!==this._$AH[a]),s===Q?t=Q:t!==Q&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}o&&!i&&this.C(t)}C(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class st extends at{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===Q?void 0:t}}const lt=N?N.emptyScript:"";class ct extends at{constructor(){super(...arguments),this.type=4}C(t){t&&t!==Q?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class ut extends at{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=it(this,t,e,0))&&void 0!==r?r:Q)===Y)return;const i=this._$AH,n=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Q&&(i===Q||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const dt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var mt,gt;null==dt||dt(rt,ot),(null!==(z=globalThis.litHtmlVersions)&&void 0!==z?z:globalThis.litHtmlVersions=[]).push("2.2.0");class pt extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var i,n;const o=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new ot(e.insertBefore(L(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return Y}}pt.finalized=!0,pt._$litElement$=!0,null===(mt=globalThis.litElementHydrateSupport)||void 0===mt||mt.call(globalThis,{LitElement:pt});const vt=globalThis.litElementPolyfillSupport;null==vt||vt({LitElement:pt}),(null!==(gt=globalThis.litElementVersions)&&void 0!==gt?gt:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ft=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function yt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):ft(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function _t(t){return yt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var wt;null===(wt=window.HTMLSlotElement)||void 0===wt||wt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t=1,kt=t=>(...e)=>({_$litDirective$:t,values:e});class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=kt(class extends xt{constructor(t){var e;if(super(t),t.type!==$t||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const r=!!e[t];r===this.et.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(r?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return Y}}),Et=kt(class extends xt{constructor(t){var e;if(super(t),t.type!==$t||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const i=t[r];return null==i?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?r.removeProperty(t):r[t]="")}));for(const t in e){const i=e[t];null!=i&&(this.ct.add(t),t.includes("-")?r.setProperty(t,i):r[t]=i)}return Y}}),Ct=k`
    ha-card {
        box-sizing: border-box;
        padding: var(--spacing);
        display: flex;
        flex-direction: column;
        justify-content: var(--layout-align);
        height: auto;
    }
    ha-card.fill-container {
        height: 100%;
    }
    .actions {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
    }
    .actions::-webkit-scrollbar {
        background: transparent; /* Chrome/Safari/Webkit */
        height: 0px;
    }
    .actions *:not(:last-child) {
        margin-right: var(--spacing);
    }
    .actions[rtl] *:not(:last-child) {
        margin-right: initial;
        margin-left: var(--spacing);
    }
    .unavailable {
        --main-color: var(--warning-color);
    }
`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=(t,e)=>{const r=(()=>{const t=document.body;if(t.querySelector("action-handler"))return t.querySelector("action-handler");const e=document.createElement("action-handler");return t.appendChild(e),e})();r&&r.bind(t,e)},Mt=kt(class extends xt{update(t,[e]){return St(t.element,e),Y}render(t){}});function Ot(t){const e=t.entity_id.split(".")[0],r=t.state;if("unavailable"===r||"unknown"===r||"off"===r)return!1;switch(e){case"alarm_control_panel":return"disarmed"!==r;case"lock":return"unlocked"!==r;case"cover":return"open"===r||"opening"===r;case"device_tracker":case"person":return"home"===r;case"vacuum":return"cleaning"===r||"on"===r;case"plant":return"problem"===r;default:return!0}}const Tt=t=>{t||(t="unknown");const e={auto:"mdi:calendar-sync",heat_cool:"mdi:autorenew",heat:"mdi:fire",cool:"mdi:snowflake",off:"mdi:power",fan_only:"mdi:fan",dry:"mdi:water-percent"}[t];return e||"mdi:thermostat"},jt={apparent_power:"mdi:flash",aqi:"mdi:air-filter",carbon_dioxide:"mdi:molecule-co2",carbon_monoxide:"mdi:molecule-co",current:"mdi:current-ac",date:"mdi:calendar",energy:"mdi:lightning-bolt",frequency:"mdi:sine-wave",gas:"mdi:gas-cylinder",humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",monetary:"mdi:cash",nitrogen_dioxide:"mdi:molecule",nitrogen_monoxide:"mdi:molecule",nitrous_oxide:"mdi:molecule",ozone:"mdi:molecule",pm1:"mdi:molecule",pm10:"mdi:molecule",pm25:"mdi:molecule",power:"mdi:flash",power_factor:"mdi:angle-acute",pressure:"mdi:gauge",reactive_power:"mdi:flash",signal_strength:"mdi:wifi",sulphur_dioxide:"mdi:molecule",temperature:"mdi:thermometer",timestamp:"mdi:clock",volatile_organic_compounds:"mdi:molecule",voltage:"mdi:sine-wave"},zt={10:"mdi:battery-10",20:"mdi:battery-20",30:"mdi:battery-30",40:"mdi:battery-40",50:"mdi:battery-50",60:"mdi:battery-60",70:"mdi:battery-70",80:"mdi:battery-80",90:"mdi:battery-90",100:"mdi:battery"},Nt={10:"mdi:battery-charging-10",20:"mdi:battery-charging-20",30:"mdi:battery-charging-30",40:"mdi:battery-charging-40",50:"mdi:battery-charging-50",60:"mdi:battery-charging-60",70:"mdi:battery-charging-70",80:"mdi:battery-charging-80",90:"mdi:battery-charging-90",100:"mdi:battery-charging"},Pt=(t,e)=>{const r=Number(t);if(isNaN(r))return"off"===t?"mdi:battery":"on"===t?"mdi:battery-alert":"mdi:battery-unknown";const i=10*Math.round(r/10);return e&&r>=10?Nt[i]:e?"mdi:battery-charging-outline":r<=5?"mdi:battery-alert-variant-outline":zt[i]},Ut=t=>{const e=null==t?void 0:t.attributes.device_class;if(e&&e in jt)return jt[e];if("battery"===e)return t?((t,e)=>{const r=t.state,i="on"===(null==e?void 0:e.state);return Pt(r,i)})(t):"mdi:battery";const r=null==t?void 0:t.attributes.unit_of_measurement;return"°C"===r||r===m?"mdi:thermometer":void 0},Ht={alert:"mdi:alert",air_quality:"mdi:air-filter",automation:"mdi:robot",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:cog",conversation:"mdi:text-to-speech",counter:"mdi:counter",fan:"mdi:fan",google_assistant:"mdi:google-assistant",group:"mdi:google-circles-communities",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_button:"mdi:gesture-tap-button",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",number:"mdi:ray-vertex",persistent_notification:"mdi:bell",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",siren:"mdi:bullhorn",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",timer:"mdi:timer-outline",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:"mdi:weather-cloudy",zone:"mdi:map-marker-radius"};function It(t){if(t.attributes.icon)return t.attributes.icon;return function(t,e,r){switch(t){case"alarm_control_panel":return(t=>{switch(t){case"armed_away":return"mdi:shield-lock";case"armed_vacation":return"mdi:shield-airplane";case"armed_home":return"mdi:shield-home";case"armed_night":return"mdi:shield-moon";case"armed_custom_bypass":return"mdi:security";case"pending":case"arming":return"mdi:shield-sync";case"triggered":return"mdi:bell-ring";case"disarmed":return"mdi:shield-off";default:return"mdi:shield"}})(r);case"binary_sensor":return((t,e)=>{const r="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:close-network-outline":"mdi:check-network-outline";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:motion-sensor-off":"mdi:motion-sensor";case"occupancy":case"presence":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}})(r,e);case"button":switch(null==e?void 0:e.attributes.device_class){case"restart":return"mdi:restart";case"update":return"mdi:package-up";default:return"mdi:gesture-tap-button"}case"climate":return Tt(r);case"cover":return((t,e)=>{const r="closed"!==t;switch(null==e?void 0:e.attributes.device_class){case"garage":switch(t){case"opening":return"mdi:arrow-up-box";case"closing":return"mdi:arrow-down-box";case"closed":return"mdi:garage";default:return"mdi:garage-open"}case"gate":switch(t){case"opening":case"closing":return"mdi:gate-arrow-right";case"closed":return"mdi:gate";default:return"mdi:gate-open"}case"door":return r?"mdi:door-open":"mdi:door-closed";case"damper":return r?"md:circle":"mdi:circle-slice-8";case"shutter":switch(t){case"opening":return"mdi:arrow-up-box";case"closing":return"mdi:arrow-down-box";case"closed":return"mdi:window-shutter";default:return"mdi:window-shutter-open"}case"curtain":switch(t){case"opening":return"mdi:arrow-split-vertical";case"closing":return"mdi:arrow-collapse-horizontal";case"closed":return"mdi:curtains-closed";default:return"mdi:curtains"}case"blind":case"shade":switch(t){case"opening":return"mdi:arrow-up-box";case"closing":return"mdi:arrow-down-box";case"closed":return"mdi:blinds";default:return"mdi:blinds-open"}case"window":switch(t){case"opening":return"mdi:arrow-up-box";case"closing":return"mdi:arrow-down-box";case"closed":return"mdi:window-closed";default:return"mdi:window-open"}}switch(t){case"opening":return"mdi:arrow-up-box";case"closing":return"mdi:arrow-down-box";case"closed":return"mdi:window-closed";default:return"mdi:window-open"}})(r,e);case"device_tracker":return"router"===(null==e?void 0:e.attributes.source_type)?"home"===r?"mdi:lan-connect":"mdi:lan-disconnect":["bluetooth","bluetooth_le"].includes(null==e?void 0:e.attributes.source_type)?"home"===r?"mdi:bluetooth-connect":"mdi:bluetooth":"not_home"===r?"mdi:account-arrow-right":"mdi:account";case"humidifier":return r&&"off"===r?"mdi:air-humidifier-off":"mdi:air-humidifier";case"input_boolean":return"on"===r?"mdi:check-circle-outline":"mdi:close-circle-outline";case"lock":switch(r){case"unlocked":return"mdi:lock-open";case"jammed":return"mdi:lock-alert";case"locking":case"unlocking":return"mdi:lock-clock";default:return"mdi:lock"}case"media_player":return"playing"===r?"mdi:cast-connected":"mdi:cast";case"switch":switch(null==e?void 0:e.attributes.device_class){case"outlet":return"on"===r?"mdi:power-plug":"mdi:power-plug-off";case"switch":return"on"===r?"mdi:toggle-switch":"mdi:toggle-switch-off";default:return"mdi:flash"}case"zwave":switch(r){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}case"sensor":{const t=Ut(e);if(t)return t;break}case"input_datetime":if(!(null==e?void 0:e.attributes.has_date))return"mdi:clock";if(!e.attributes.has_time)return"mdi:calendar";break;case"sun":return"above_horizon"===(null==e?void 0:e.state)?Ht[t]:"mdi:weather-night";case"update":return"on"===(null==e?void 0:e.state)?(t=>(t=>{return e=4,0!=(t.attributes.supported_features&e)&&"number"==typeof t.attributes.in_progress;var e})(t)||!!t.attributes.in_progress)(e)?"mdi:package-down":"mdi:package-up":"mdi:package"}return t in Ht?Ht[t]:(console.warn(`Unable to find icon for domain ${t}`),"mdi:bookmark")}(l(t.entity_id),t,t.state)}class Rt extends TypeError{constructor(t,e){let r;const{message:i,...n}=t,{path:o}=t;super(0===o.length?i:"At path: "+o.join(".")+" -- "+i),this.value=void 0,this.key=void 0,this.type=void 0,this.refinement=void 0,this.path=void 0,this.branch=void 0,this.failures=void 0,Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var i;return null!=(i=r)?i:r=[t,...e()]}}}function Lt(t){return"object"==typeof t&&null!=t}function Ft(t){return"string"==typeof t?JSON.stringify(t):""+t}function Dt(t,e,r,i){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:o}=e,{type:a}=r,{refinement:s,message:l="Expected a value of type `"+a+"`"+(s?" with refinement `"+s+"`":"")+", but received: `"+Ft(i)+"`"}=t;return{value:i,type:a,refinement:s,key:n[n.length-1],path:n,branch:o,...t,message:l}}function*Bt(t,e,r,i){(function(t){return Lt(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=Dt(n,e,r,i);t&&(yield t)}}function*qt(t,e,r={}){const{path:i=[],branch:n=[t],coerce:o=!1,mask:a=!1}=r,s={path:i,branch:n};if(o&&(t=e.coercer(t,s),a&&"type"!==e.type&&Lt(e.schema)&&Lt(t)&&!Array.isArray(t)))for(const r in t)void 0===e.schema[r]&&delete t[r];let l=!0;for(const r of e.validator(t,s))l=!1,yield[r,void 0];for(let[r,c,u]of e.entries(t,s)){const e=qt(c,u,{path:void 0===r?i:[...i,r],branch:void 0===r?n:[...n,c],coerce:o,mask:a});for(const i of e)i[0]?(l=!1,yield[i[0],void 0]):o&&(c=i[1],void 0===r?t=c:t instanceof Map?t.set(r,c):t instanceof Set?t.add(c):Lt(t)&&(t[r]=c))}if(l)for(const r of e.refiner(t,s))l=!1,yield[r,void 0];l&&(yield[void 0,t])}class Vt{constructor(t){this.TYPE=void 0,this.type=void 0,this.schema=void 0,this.coercer=void 0,this.validator=void 0,this.refiner=void 0,this.entries=void 0;const{type:e,schema:r,validator:i,refiner:n,coercer:o=(t=>t),entries:a=function*(){}}=t;this.type=e,this.schema=r,this.entries=a,this.coercer=o,this.validator=i?(t,e)=>Bt(i(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>Bt(n(t,e),e,this,t):()=>[]}assert(t){return Wt(t,this)}create(t){return function(t,e){const r=Jt(t,e,{coerce:!0});if(r[0])throw r[0];return r[1]}(t,this)}is(t){return function(t,e){return!Jt(t,e)[0]}(t,this)}mask(t){return function(t,e){const r=Jt(t,e,{coerce:!0,mask:!0});if(r[0])throw r[0];return r[1]}(t,this)}validate(t,e={}){return Jt(t,this,e)}}function Wt(t,e){const r=Jt(t,e);if(r[0])throw r[0]}function Jt(t,e,r={}){const i=qt(t,e,r),n=function(t){const{done:e,value:r}=t.next();return e?void 0:r}(i);if(n[0]){const t=new Rt(n[0],(function*(){for(const t of i)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,n[1]]}function Kt(t,e){return new Vt({type:t,schema:null,validator:e})}function Zt(t){return new Vt({type:"array",schema:t,*entries(e){if(t&&Array.isArray(e))for(const[r,i]of e.entries())yield[r,i,t]},coercer:t=>Array.isArray(t)?t.slice():t,validator:t=>Array.isArray(t)||"Expected an array value, but received: "+Ft(t)})}function Gt(){return Kt("boolean",(t=>"boolean"==typeof t))}function Yt(t){const e=Ft(t),r=typeof t;return new Vt({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?t:null,validator:r=>r===t||"Expected the literal `"+e+"`, but received: "+Ft(r)})}function Qt(t){const e=t?Object.keys(t):[],r=Kt("never",(()=>!1));return new Vt({type:"object",schema:t||null,*entries(i){if(t&&Lt(i)){const n=new Set(Object.keys(i));for(const r of e)n.delete(r),yield[r,i[r],t[r]];for(const t of n)yield[t,i[t],r]}},validator:t=>Lt(t)||"Expected an object, but received: "+Ft(t),coercer:t=>Lt(t)?{...t}:t})}function Xt(t){return new Vt({...t,validator:(e,r)=>void 0===e||t.validator(e,r),refiner:(e,r)=>void 0===e||t.refiner(e,r)})}function te(){return Kt("string",(t=>"string"==typeof t||"Expected a string, but received: "+Ft(t)))}function ee(t){const e=Object.keys(t);return new Vt({type:"type",schema:t,*entries(r){if(Lt(r))for(const i of e)yield[i,r[i],t[i]]},validator:t=>Lt(t)||"Expected an object, but received: "+Ft(t)})}function re(t){const e=t.map((t=>t.type)).join(" | ");return new Vt({type:"union",schema:null,coercer(e,r){const i=t.find((t=>{const[r]=t.validate(e,{coerce:!0});return!r}))||Kt("unknown",(()=>!0));return i.coercer(e,r)},validator(r,i){const n=[];for(const e of t){const[...t]=qt(r,e,i),[o]=t;if(!o[0])return[];for(const[e]of t)e&&n.push(e)}return["Expected the value to satisfy a union of `"+e+"`, but received: "+Ft(r),...n]}})}const ie=re([Yt("horizontal"),Yt("vertical"),Yt("default")]);function ne(t){var e;return null!==(e=t.layout)&&void 0!==e?e:Boolean(t.vertical)?"vertical":"default"}const oe={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},ae=(t,e)=>oe[t]-oe[e];let se=class extends pt{constructor(){super(...arguments),this.fill=!1}onClick(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this.entity.entity_id,hvac_mode:t})}_renderModeIcon(t){const e=this.entity.state,r={};return t===e&&(r["--icon-color"]=`rgb(var(--rgb-state-climate-${t}))`,r["--bg-color"]=`rgba(var(--rgb-state-climate-${t}), 0.05)`),G`<mushroom-button
            style=${Et(r)}
            .icon=${Tt(t)}
            @click=${()=>this.onClick(t)}
        />`}render(){const{hvac_modes:t}=this.entity.attributes,e=c(this.hass);return G`<mushroom-button-group .fill=${this.fill} ?rtl=${e}>
            ${(t||[]).sort(ae).map((t=>this._renderModeIcon(t)))}
        </mushroom-button-group>`}static get styles(){return k`
            :host {
                display: flex;
                flex-direction: row;
                width: 100%;
            }
        `}};t([yt({attribute:!1})],se.prototype,"hass",void 0),t([yt({attribute:!1})],se.prototype,"entity",void 0),t([yt({type:Boolean})],se.prototype,"fill",void 0),se=t([bt("ss-thermostat-mode-control")],se);const le=t=>"number"==typeof t&&isFinite(t),ce=t=>{const e=t.center.x,r=t.target.getBoundingClientRect().left,i=t.target.clientWidth;return Math.max(Math.min(1,(e-r)/i),0)};let ue=class extends pt{constructor(){super(...arguments),this.disabled=!1,this.inactive=!1,this.min=0,this.max=100,this.step=1,this.gap=0}get _activeMinMax(){return{min:"secondary"===this._active&&le(this.value)?this.value+this.gap:this.min,max:"value"===this._active&&le(this.secondary)?this.secondary-this.gap:this.max}}eventToValue(t){const{min:e,max:r}=this._activeMinMax;return((t,e=0,r=1)=>Math.max(e,Math.min(t,r)))(this.percentageToValue(ce(t)),e,r)}valueToPercentage(t){return(t-this.min)/(this.max-this.min)}percentageToValue(t){return Math.round(((this.max-this.min)*t+this.min)/this.step)*this.step}setActive(t){void 0===this.secondary||this.value===this.secondary&&t<this.value||Math.abs(t-this.value)<Math.abs(t-this.secondary)?this._active="value":this._active="secondary"}firstUpdated(t){super.firstUpdated(t),this.setupListeners()}connectedCallback(){super.connectedCallback(),this.setupListeners()}disconnectedCallback(){super.disconnectedCallback(),this.destroyListeners()}setupListeners(){if(this.slider&&!this._mc){const t=(t=>{const e=window.getComputedStyle(t).getPropertyValue("--slider-threshold"),r=parseFloat(e);return isNaN(r)?10:r})(this.slider);let e;this._mc=new Hammer.Manager(this.slider,{touchAction:"pan-y"}),this._mc.add(new Hammer.Pan({threshold:t,direction:Hammer.DIRECTION_ALL,enable:!0})),this._mc.add(new Hammer.Tap({event:"singletap"})),this._mc.on("panstart",(t=>{if(this.disabled)return;const r=ce(t),i=this.percentageToValue(r);this.setActive(i),e=this[this._active]})),this._mc.on("pancancel",(()=>{this.disabled||(this[this._active]=e,this._active=void 0)})),this._mc.on("panmove",(t=>{this.disabled||void 0!==this._active&&(this[this._active]=this.eventToValue(t),this.dispatchEvent(new CustomEvent("current-change",{detail:{[this._active]:this[this._active]}})))})),this._mc.on("panend",(t=>{this.disabled||void 0===this._active||(this[this._active]=this.eventToValue(t),this.dispatchEvent(new CustomEvent("current-change",{detail:{[this._active]:void 0}})),this.dispatchEvent(new CustomEvent("change",{detail:{[this._active]:this[this._active]}})),this._active=void 0)})),this._mc.on("singletap",(t=>{if(this.disabled)return;const e=this.eventToValue(t);this.setActive(e),this[this._active]=e,this.dispatchEvent(new CustomEvent("change",{detail:{[this._active]:this[this._active]}})),this._active=void 0}))}}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}render(){var t,e;return G`
            <div class=${At({container:!0,inactive:this.inactive||this.disabled})}>
                <div
                    id="slider"
                    class="slider"
                    style=${Et({"--value":`${this.valueToPercentage(null!==(t=this.value)&&void 0!==t?t:0)}`,"--secondary":`${this.valueToPercentage(null!==(e=this.secondary)&&void 0!==e?e:0)}`})}
                >
                    <div class="slider-track-background"></div>
                    ${this.showActive&&le(this.value)?G`<div class="slider-track-active"></div>`:null}
                    ${this.showActive&&le(this.secondary)?G`<div class="slider-track-secondary"></div>`:null}
                    ${this.showIndicator?G`<div class="slider-track-indicator"></div>`:null}
                </div>
            </div>
        `}static get styles(){return k`
            :host {
                --main-color: rgba(var(--rgb-secondary-text-color), 1);
                --secondary-color: rgba(var(---rgb-secondary-text-color), 1);
                --bg-gradient: none;
                --bg-color: rgba(var(--rgb-secondary-text-color), 0.2);
                --main-color-inactive: rgb(var(--rgb-disabled));
                --bg-color-inactive: rgba(var(--rgb-disabled), 0.2);
            }
            .container {
                display: flex;
                flex-direction: row;
                height: var(--control-height);
            }
            .slider {
                position: relative;
                height: 100%;
                width: 100%;
                border-radius: var(--control-border-radius);
                transform: translateZ(0);
                overflow: hidden;
                cursor: pointer;
            }
            .slider * {
                pointer-events: none;
            }
            .slider .slider-track-background {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: var(--bg-color);
                background-image: var(--gradient);
            }
            .slider .slider-track-active,
            .slider .slider-track-secondary {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                transform: scale3d(var(--value, 0), 1, 1);
                transform-origin: left;
                background-color: var(--main-color);
            }
            .slider .slider-track-secondary {
                transform: scale3d(calc(1 - var(--secondary, 0)), 1, 1);
                transform-origin: right;
                background-color: var(--secondary-color);
            }
            .slider .slider-track-indicator {
                position: absolute;
                top: 0;
                bottom: 0;
                left: calc(var(--value, 0) * (100% - 10px));
                width: 10px;
                border-radius: 3px;
                background-color: white;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
            }
            .slider .slider-track-indicator:after {
                display: block;
                content: "";
                background-color: var(--main-color);
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                height: 20px;
                width: 2px;
                border-radius: 1px;
            }
            .inactive .slider .slider-track-background {
                background-color: var(--bg-color-inactive);
                background-image: none;
            }
            .inactive .slider .slider-track-indicator:after {
                background-color: var(--main-color-inactive);
            }
            .inactive .slider .slider-track-active,
            .inactive .slider .slider-track-secondary {
                background-color: var(--main-color-inactive);
            }
        `}};t([yt({type:Boolean})],ue.prototype,"disabled",void 0),t([yt({type:Boolean})],ue.prototype,"inactive",void 0),t([yt({type:Boolean,attribute:"show-active"})],ue.prototype,"showActive",void 0),t([yt({type:Boolean,attribute:"show-indicator"})],ue.prototype,"showIndicator",void 0),t([yt({attribute:!1,type:Number,reflect:!0})],ue.prototype,"value",void 0),t([yt({attribute:!1,type:Number,reflect:!0})],ue.prototype,"secondary",void 0),t([yt({type:Number})],ue.prototype,"min",void 0),t([yt({type:Number})],ue.prototype,"max",void 0),t([yt({type:Number})],ue.prototype,"step",void 0),t([yt({type:Number})],ue.prototype,"gap",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(r,i)=>{var n;if(void 0===i){const i=null!==(n=r.originalKey)&&void 0!==n?n:r.key,o=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(r.key)}:{...r,key:i};return null!=t&&(o.finisher=function(e){t(e,i)}),o}{const n=r.constructor;void 0!==e&&Object.defineProperty(r,i,e(i)),null==t||t(n,i)}})({descriptor:r=>{const i={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var r,i;return void 0===this[e]&&(this[e]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}("#slider")],ue.prototype,"slider",void 0),ue=t([bt("ss-dual-slider")],ue);let he=class extends pt{constructor(){super(...arguments),this.value=""}render(){return G`<div class="value">${this.value}</div>`}static get styles(){return k`
            :host {
                --text-color: var(--primary-text-color);
                --bg-color: rgba(var(--rgb-primary-text-color), 0.05);
                font-size: var(--control-height);
                height: var(--control-height);
                width: calc(var(--control-height) * var(--control-button-ratio));
                flex: none;
            }
            .value {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-color);
                font-size: 0.38em;
                font-weight: bold;
                height: 100%;
                width: 100%;
                border-radius: var(--control-border-radius);
                border: none;
                background-color: var(--bg-color);
                transition: background-color 280ms ease-in-out;
            }
        `}};t([yt()],he.prototype,"value",void 0),he=t([bt("mushroom-state-value")],he);const de=(t,e,r)=>{if(!le(e))return;const i=1===r?{maximumFractionDigits:0}:{maximumFractionDigits:1,minimumFractionDigits:1};return u(e,t.locale,i)},me=(t,e)=>{var r;const i=t.config.unit_system.temperature===m?1:.5;return null!==(r=e.attributes.target_temp_step)&&void 0!==r?r:i};let ge=class extends pt{constructor(){super(...arguments),this.showIndicators=!1,this.enableWhenOff=!1,this._indicatorTemps=[void 0,void 0],this.renderIndicator=(t,e,r)=>G`<mushroom-state-value
            .value=${de(this.hass,t,e)}
            style=${Et({"--text-color":`rgb(var(--rgb-action-climate-${r}))`,"--bg-color":`rgba(var(--rgb-action-climate-${r}), 0.05)`})}
        ></mushroom-state-value>`}onChange(t){var e;this.entity.attributes.temperature?this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,temperature:null!==(e=t.detail.value)&&void 0!==e?e:t.detail.secondary}):t.detail.value?this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,target_temp_low:t.detail.value,target_temp_high:this.entity.attributes.target_temp_high}):t.detail.secondary&&this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,target_temp_low:this.entity.attributes.target_temp_low,target_temp_high:t.detail.secondary})}onCurrentChange(t){t.detail.value?this._indicatorTemps=[t.detail.value,this._indicatorTemps[1]]:t.detail.secondary&&(this._indicatorTemps=[this._indicatorTemps[0],t.detail.secondary]),this.dispatchEvent(new CustomEvent("current-change",{detail:{high:t.detail.secondary,low:t.detail.value}}))}willUpdate(t){if(!this.hass||!this.entity||!t.has("hass"))return;const e=t.get("hass");e&&e.states[this.entity.entity_id]===this.entity||(this._indicatorTemps=(t=>{const{target_temp_high:e,target_temp_low:r,temperature:i}=t.attributes;return"heat"===t.state?[null!=r?r:i,void 0]:"cool"===t.state?[void 0,null!=e?e:i]:[r,e]})(this.entity))}render(){const{min_temp:t,max_temp:e}=this.entity.attributes,r=me(this.hass,this.entity),i=this._indicatorTemps[0],n=this._indicatorTemps[1];return G`<div class="container">
            ${this.showIndicators&&i?this.renderIndicator(i,r,"heating"):null}
            <ss-dual-slider
                styles="--bg-color: rgba(var(--rgb-primary-text-color), 0.05);"
                .showActive=${!0}
                .disabled=${!this.enableWhenOff&&!Ot(this.entity)}
                .value=${i}
                .secondary=${n}
                .min=${null!=t?t:45}
                .max=${null!=e?e:95}
                .step=${r}
                .gap=${this.gap}
                @change=${this.onChange}
                @current-change=${this.onCurrentChange}
            ></ss-dual-slider>
            ${this.showIndicators&&n?this.renderIndicator(n,r,"cooling"):null}
        </div>`}static get styles(){return k`
            :host {
                display: flex;
                flex-direction: row;
                width: 100%;
                --cooling-color: rgb(var(--rgb-action-climate-cooling));
                --heating-color: rgb(var(--rgb-action-climate-heating));
                --slider-outline-color: transparent;
                --slider-bg-color: rgba(var(--rgb-secondary-text-color), 0.05);
            }
            :host :not(:last-child) {
                margin-right: var(--spacing);
            }
            .container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }
            :host([rtl]) .container {
                flex-direction: row-reverse;
            }
            .container ss-dual-slider {
                flex: 1;
                --main-color: var(--heating-color);
                --secondary-color: var(--cooling-color);
                --bg-color: var(--slider-bg-color);
                --main-outline-color: var(--slider-outline-color);
            }
        `}};t([yt({attribute:!1})],ge.prototype,"hass",void 0),t([yt({attribute:!1})],ge.prototype,"entity",void 0),t([yt({type:Boolean})],ge.prototype,"showIndicators",void 0),t([yt({type:Number})],ge.prototype,"gap",void 0),t([yt({type:Boolean})],ge.prototype,"enableWhenOff",void 0),t([_t()],ge.prototype,"_indicatorTemps",void 0),ge=t([bt("ss-thermostat-temperature-control")],ge);const pe=["climate"];var ve={exports:{}},be={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},fe={exports:{}},ye=function(t){return!(!t||"string"==typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))},_e=Array.prototype.concat,we=Array.prototype.slice,$e=fe.exports=function(t){for(var e=[],r=0,i=t.length;r<i;r++){var n=t[r];ye(n)?e=_e.call(e,we.call(n)):e.push(n)}return e};$e.wrap=function(t){return function(){return t($e(arguments))}};var ke=be,xe=fe.exports,Ae=Object.hasOwnProperty,Ee={};for(var Ce in ke)Ae.call(ke,Ce)&&(Ee[ke[Ce]]=Ce);var Se=ve.exports={to:{},get:{}};function Me(t,e,r){return Math.min(Math.max(e,t),r)}function Oe(t){var e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}Se.get=function(t){var e,r;switch(t.substring(0,3).toLowerCase()){case"hsl":e=Se.get.hsl(t),r="hsl";break;case"hwb":e=Se.get.hwb(t),r="hwb";break;default:e=Se.get.rgb(t),r="rgb"}return e?{model:r,value:e}:null},Se.get.rgb=function(t){if(!t)return null;var e,r,i,n=[0,0,0,1];if(e=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(i=e[2],e=e[1],r=0;r<3;r++){var o=2*r;n[r]=parseInt(e.slice(o,o+2),16)}i&&(n[3]=parseInt(i,16)/255)}else if(e=t.match(/^#([a-f0-9]{3,4})$/i)){for(i=(e=e[1])[3],r=0;r<3;r++)n[r]=parseInt(e[r]+e[r],16);i&&(n[3]=parseInt(i+i,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)n[r]=parseInt(e[r+1],0);e[4]&&(e[5]?n[3]=.01*parseFloat(e[4]):n[3]=parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(e=t.match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:Ae.call(ke,e[1])?((n=ke[e[1]])[3]=1,n):null:null;for(r=0;r<3;r++)n[r]=Math.round(2.55*parseFloat(e[r+1]));e[4]&&(e[5]?n[3]=.01*parseFloat(e[4]):n[3]=parseFloat(e[4]))}for(r=0;r<3;r++)n[r]=Me(n[r],0,255);return n[3]=Me(n[3],0,1),n},Se.get.hsl=function(t){if(!t)return null;var e=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var r=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,Me(parseFloat(e[2]),0,100),Me(parseFloat(e[3]),0,100),Me(isNaN(r)?1:r,0,1)]}return null},Se.get.hwb=function(t){if(!t)return null;var e=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var r=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,Me(parseFloat(e[2]),0,100),Me(parseFloat(e[3]),0,100),Me(isNaN(r)?1:r,0,1)]}return null},Se.to.hex=function(){var t=xe(arguments);return"#"+Oe(t[0])+Oe(t[1])+Oe(t[2])+(t[3]<1?Oe(Math.round(255*t[3])):"")},Se.to.rgb=function(){var t=xe(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},Se.to.rgb.percent=function(){var t=xe(arguments),e=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),i=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+r+"%, "+i+"%)":"rgba("+e+"%, "+r+"%, "+i+"%, "+t[3]+")"},Se.to.hsl=function(){var t=xe(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},Se.to.hwb=function(){var t=xe(arguments),e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},Se.to.keyword=function(t){return Ee[t.slice(0,3)]};const Te=be,je={};for(const t of Object.keys(Te))je[Te[t]]=t;const ze={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Ne=ze;for(const t of Object.keys(ze)){if(!("channels"in ze[t]))throw new Error("missing channels property: "+t);if(!("labels"in ze[t]))throw new Error("missing channel labels property: "+t);if(ze[t].labels.length!==ze[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:r}=ze[t];delete ze[t].channels,delete ze[t].labels,Object.defineProperty(ze[t],"channels",{value:e}),Object.defineProperty(ze[t],"labels",{value:r})}function Pe(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}ze.rgb.hsl=function(t){const e=t[0]/255,r=t[1]/255,i=t[2]/255,n=Math.min(e,r,i),o=Math.max(e,r,i),a=o-n;let s,l;o===n?s=0:e===o?s=(r-i)/a:r===o?s=2+(i-e)/a:i===o&&(s=4+(e-r)/a),s=Math.min(60*s,360),s<0&&(s+=360);const c=(n+o)/2;return l=o===n?0:c<=.5?a/(o+n):a/(2-o-n),[s,100*l,100*c]},ze.rgb.hsv=function(t){let e,r,i,n,o;const a=t[0]/255,s=t[1]/255,l=t[2]/255,c=Math.max(a,s,l),u=c-Math.min(a,s,l),h=function(t){return(c-t)/6/u+.5};return 0===u?(n=0,o=0):(o=u/c,e=h(a),r=h(s),i=h(l),a===c?n=i-r:s===c?n=1/3+e-i:l===c&&(n=2/3+r-e),n<0?n+=1:n>1&&(n-=1)),[360*n,100*o,100*c]},ze.rgb.hwb=function(t){const e=t[0],r=t[1];let i=t[2];const n=ze.rgb.hsl(t)[0],o=1/255*Math.min(e,Math.min(r,i));return i=1-1/255*Math.max(e,Math.max(r,i)),[n,100*o,100*i]},ze.rgb.cmyk=function(t){const e=t[0]/255,r=t[1]/255,i=t[2]/255,n=Math.min(1-e,1-r,1-i);return[100*((1-e-n)/(1-n)||0),100*((1-r-n)/(1-n)||0),100*((1-i-n)/(1-n)||0),100*n]},ze.rgb.keyword=function(t){const e=je[t];if(e)return e;let r,i=1/0;for(const e of Object.keys(Te)){const n=Pe(t,Te[e]);n<i&&(i=n,r=e)}return r},ze.keyword.rgb=function(t){return Te[t]},ze.rgb.xyz=function(t){let e=t[0]/255,r=t[1]/255,i=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,i=i>.04045?((i+.055)/1.055)**2.4:i/12.92;return[100*(.4124*e+.3576*r+.1805*i),100*(.2126*e+.7152*r+.0722*i),100*(.0193*e+.1192*r+.9505*i)]},ze.rgb.lab=function(t){const e=ze.rgb.xyz(t);let r=e[0],i=e[1],n=e[2];r/=95.047,i/=100,n/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,i=i>.008856?i**(1/3):7.787*i+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*i-16,500*(r-i),200*(i-n)]},ze.hsl.rgb=function(t){const e=t[0]/360,r=t[1]/100,i=t[2]/100;let n,o,a;if(0===r)return a=255*i,[a,a,a];n=i<.5?i*(1+r):i+r-i*r;const s=2*i-n,l=[0,0,0];for(let t=0;t<3;t++)o=e+1/3*-(t-1),o<0&&o++,o>1&&o--,a=6*o<1?s+6*(n-s)*o:2*o<1?n:3*o<2?s+(n-s)*(2/3-o)*6:s,l[t]=255*a;return l},ze.hsl.hsv=function(t){const e=t[0];let r=t[1]/100,i=t[2]/100,n=r;const o=Math.max(i,.01);i*=2,r*=i<=1?i:2-i,n*=o<=1?o:2-o;return[e,100*(0===i?2*n/(o+n):2*r/(i+r)),100*((i+r)/2)]},ze.hsv.rgb=function(t){const e=t[0]/60,r=t[1]/100;let i=t[2]/100;const n=Math.floor(e)%6,o=e-Math.floor(e),a=255*i*(1-r),s=255*i*(1-r*o),l=255*i*(1-r*(1-o));switch(i*=255,n){case 0:return[i,l,a];case 1:return[s,i,a];case 2:return[a,i,l];case 3:return[a,s,i];case 4:return[l,a,i];case 5:return[i,a,s]}},ze.hsv.hsl=function(t){const e=t[0],r=t[1]/100,i=t[2]/100,n=Math.max(i,.01);let o,a;a=(2-r)*i;const s=(2-r)*n;return o=r*n,o/=s<=1?s:2-s,o=o||0,a/=2,[e,100*o,100*a]},ze.hwb.rgb=function(t){const e=t[0]/360;let r=t[1]/100,i=t[2]/100;const n=r+i;let o;n>1&&(r/=n,i/=n);const a=Math.floor(6*e),s=1-i;o=6*e-a,0!=(1&a)&&(o=1-o);const l=r+o*(s-r);let c,u,h;switch(a){default:case 6:case 0:c=s,u=l,h=r;break;case 1:c=l,u=s,h=r;break;case 2:c=r,u=s,h=l;break;case 3:c=r,u=l,h=s;break;case 4:c=l,u=r,h=s;break;case 5:c=s,u=r,h=l}return[255*c,255*u,255*h]},ze.cmyk.rgb=function(t){const e=t[0]/100,r=t[1]/100,i=t[2]/100,n=t[3]/100;return[255*(1-Math.min(1,e*(1-n)+n)),255*(1-Math.min(1,r*(1-n)+n)),255*(1-Math.min(1,i*(1-n)+n))]},ze.xyz.rgb=function(t){const e=t[0]/100,r=t[1]/100,i=t[2]/100;let n,o,a;return n=3.2406*e+-1.5372*r+-.4986*i,o=-.9689*e+1.8758*r+.0415*i,a=.0557*e+-.204*r+1.057*i,n=n>.0031308?1.055*n**(1/2.4)-.055:12.92*n,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[255*n,255*o,255*a]},ze.xyz.lab=function(t){let e=t[0],r=t[1],i=t[2];e/=95.047,r/=100,i/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;return[116*r-16,500*(e-r),200*(r-i)]},ze.lab.xyz=function(t){let e,r,i;r=(t[0]+16)/116,e=t[1]/500+r,i=r-t[2]/200;const n=r**3,o=e**3,a=i**3;return r=n>.008856?n:(r-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=a>.008856?a:(i-16/116)/7.787,e*=95.047,r*=100,i*=108.883,[e,r,i]},ze.lab.lch=function(t){const e=t[0],r=t[1],i=t[2];let n;n=360*Math.atan2(i,r)/2/Math.PI,n<0&&(n+=360);return[e,Math.sqrt(r*r+i*i),n]},ze.lch.lab=function(t){const e=t[0],r=t[1],i=t[2]/360*2*Math.PI;return[e,r*Math.cos(i),r*Math.sin(i)]},ze.rgb.ansi16=function(t,e=null){const[r,i,n]=t;let o=null===e?ze.rgb.hsv(t)[2]:e;if(o=Math.round(o/50),0===o)return 30;let a=30+(Math.round(n/255)<<2|Math.round(i/255)<<1|Math.round(r/255));return 2===o&&(a+=60),a},ze.hsv.ansi16=function(t){return ze.rgb.ansi16(ze.hsv.rgb(t),t[2])},ze.rgb.ansi256=function(t){const e=t[0],r=t[1],i=t[2];if(e===r&&r===i)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(r/255*5)+Math.round(i/255*5)},ze.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const r=.5*(1+~~(t>50));return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},ze.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},ze.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},ze.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let r=e[0];3===e[0].length&&(r=r.split("").map((t=>t+t)).join(""));const i=parseInt(r,16);return[i>>16&255,i>>8&255,255&i]},ze.rgb.hcg=function(t){const e=t[0]/255,r=t[1]/255,i=t[2]/255,n=Math.max(Math.max(e,r),i),o=Math.min(Math.min(e,r),i),a=n-o;let s,l;return s=a<1?o/(1-a):0,l=a<=0?0:n===e?(r-i)/a%6:n===r?2+(i-e)/a:4+(e-r)/a,l/=6,l%=1,[360*l,100*a,100*s]},ze.hsl.hcg=function(t){const e=t[1]/100,r=t[2]/100,i=r<.5?2*e*r:2*e*(1-r);let n=0;return i<1&&(n=(r-.5*i)/(1-i)),[t[0],100*i,100*n]},ze.hsv.hcg=function(t){const e=t[1]/100,r=t[2]/100,i=e*r;let n=0;return i<1&&(n=(r-i)/(1-i)),[t[0],100*i,100*n]},ze.hcg.rgb=function(t){const e=t[0]/360,r=t[1]/100,i=t[2]/100;if(0===r)return[255*i,255*i,255*i];const n=[0,0,0],o=e%1*6,a=o%1,s=1-a;let l=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=a,n[2]=0;break;case 1:n[0]=s,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=a;break;case 3:n[0]=0,n[1]=s,n[2]=1;break;case 4:n[0]=a,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=s}return l=(1-r)*i,[255*(r*n[0]+l),255*(r*n[1]+l),255*(r*n[2]+l)]},ze.hcg.hsv=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);let i=0;return r>0&&(i=e/r),[t[0],100*i,100*r]},ze.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let i=0;return r>0&&r<.5?i=e/(2*r):r>=.5&&r<1&&(i=e/(2*(1-r))),[t[0],100*i,100*r]},ze.hcg.hwb=function(t){const e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},ze.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,i=r-e;let n=0;return i<1&&(n=(r-i)/(1-i)),[t[0],100*i,100*n]},ze.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},ze.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},ze.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},ze.gray.hsl=function(t){return[0,0,t[0]]},ze.gray.hsv=ze.gray.hsl,ze.gray.hwb=function(t){return[0,100,t[0]]},ze.gray.cmyk=function(t){return[0,0,0,t[0]]},ze.gray.lab=function(t){return[t[0],0,0]},ze.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r},ze.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const Ue=Ne;function He(t){const e=function(){const t={},e=Object.keys(Ue);for(let r=e.length,i=0;i<r;i++)t[e[i]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length;){const t=r.pop(),i=Object.keys(Ue[t]);for(let n=i.length,o=0;o<n;o++){const n=i[o],a=e[n];-1===a.distance&&(a.distance=e[t].distance+1,a.parent=t,r.unshift(n))}}return e}function Ie(t,e){return function(r){return e(t(r))}}function Re(t,e){const r=[e[t].parent,t];let i=Ue[e[t].parent][t],n=e[t].parent;for(;e[n].parent;)r.unshift(e[n].parent),i=Ie(Ue[e[n].parent][n],i),n=e[n].parent;return i.conversion=r,i}const Le=Ne,Fe=function(t){const e=He(t),r={},i=Object.keys(e);for(let t=i.length,n=0;n<t;n++){const t=i[n];null!==e[t].parent&&(r[t]=Re(t,e))}return r},De={};Object.keys(Le).forEach((t=>{De[t]={},Object.defineProperty(De[t],"channels",{value:Le[t].channels}),Object.defineProperty(De[t],"labels",{value:Le[t].labels});const e=Fe(t);Object.keys(e).forEach((r=>{const i=e[r];De[t][r]=function(t){const e=function(...e){const r=e[0];if(null==r)return r;r.length>1&&(e=r);const i=t(e);if("object"==typeof i)for(let t=i.length,e=0;e<t;e++)i[e]=Math.round(i[e]);return i};return"conversion"in t&&(e.conversion=t.conversion),e}(i),De[t][r].raw=function(t){const e=function(...e){const r=e[0];return null==r?r:(r.length>1&&(e=r),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}));var Be=De;const qe=ve.exports,Ve=Be,We=["keyword","gray","hex"],Je={};for(const t of Object.keys(Ve))Je[[...Ve[t].labels].sort().join("")]=t;const Ke={};function Ze(t,e){if(!(this instanceof Ze))return new Ze(t,e);if(e&&e in We&&(e=null),e&&!(e in Ve))throw new Error("Unknown model: "+e);let r,i;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof Ze)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"==typeof t){const e=qe.get(t);if(null===e)throw new Error("Unable to parse color from string: "+t);this.model=e.model,i=Ve[this.model].channels,this.color=e.value.slice(0,i),this.valpha="number"==typeof e.value[i]?e.value[i]:1}else if(t.length>0){this.model=e||"rgb",i=Ve[this.model].channels;const r=Array.prototype.slice.call(t,0,i);this.color=Xe(r,i),this.valpha="number"==typeof t[i]?t[i]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const e=Object.keys(t);"alpha"in t&&(e.splice(e.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const i=e.sort().join("");if(!(i in Je))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=Je[i];const{labels:n}=Ve[this.model],o=[];for(r=0;r<n.length;r++)o.push(t[n[r]]);this.color=Xe(o)}if(Ke[this.model])for(i=Ve[this.model].channels,r=0;r<i;r++){const t=Ke[this.model][r];t&&(this.color[r]=t(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}Ze.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in qe.to?this:this.rgb();e=e.round("number"==typeof t?t:1);const r=1===e.valpha?e.color:[...e.color,this.valpha];return qe.to[e.model](r)},percentString(t){const e=this.rgb().round("number"==typeof t?t:1),r=1===e.valpha?e.color:[...e.color,this.valpha];return qe.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=Ve[this.model],{labels:r}=Ve[this.model];for(let i=0;i<e;i++)t[r[i]]=this.color[i];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new Ze([...this.color.map(Ge(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new Ze([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:Ye("rgb",0,Qe(255)),green:Ye("rgb",1,Qe(255)),blue:Ye("rgb",2,Qe(255)),hue:Ye(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:Ye("hsl",1,Qe(100)),lightness:Ye("hsl",2,Qe(100)),saturationv:Ye("hsv",1,Qe(100)),value:Ye("hsv",2,Qe(100)),chroma:Ye("hcg",1,Qe(100)),gray:Ye("hcg",2,Qe(100)),white:Ye("hwb",1,Qe(100)),wblack:Ye("hwb",2,Qe(100)),cyan:Ye("cmyk",0,Qe(100)),magenta:Ye("cmyk",1,Qe(100)),yellow:Ye("cmyk",2,Qe(100)),black:Ye("cmyk",3,Qe(100)),x:Ye("xyz",0,Qe(95.047)),y:Ye("xyz",1,Qe(100)),z:Ye("xyz",2,Qe(108.833)),l:Ye("lab",0,Qe(100)),a:Ye("lab",1),b:Ye("lab",2),keyword(t){return void 0!==t?new Ze(t):Ve[this.model].keyword(this.color)},hex(t){return void 0!==t?new Ze(t):qe.to.hex(this.rgb().round().color)},hexa(t){if(void 0!==t)return new Ze(t);const e=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),qe.to.hex(e)+r},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,e=[];for(const[r,i]of t.entries()){const t=i/255;e[r]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(2126*t[0]+7152*t[1]+722*t[2])/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=.3*t[0]+.59*t[1]+.11*t[2];return Ze.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let r=e.color[0];return r=(r+t)%360,r=r<0?360+r:r,e.color[0]=r,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const r=t.rgb(),i=this.rgb(),n=void 0===e?.5:e,o=2*n-1,a=r.alpha()-i.alpha(),s=((o*a==-1?o:(o+a)/(1+o*a))+1)/2,l=1-s;return Ze.rgb(s*r.red()+l*i.red(),s*r.green()+l*i.green(),s*r.blue()+l*i.blue(),r.alpha()*n+i.alpha()*(1-n))}};for(const t of Object.keys(Ve)){if(We.includes(t))continue;const{channels:e}=Ve[t];Ze.prototype[t]=function(...e){return this.model===t?new Ze(this):e.length>0?new Ze(e,t):new Ze([...(r=Ve[this.model][t].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],t);var r},Ze[t]=function(...r){let i=r[0];return"number"==typeof i&&(i=Xe(r,e)),new Ze(i,t)}}function Ge(t){return function(e){return function(t,e){return Number(t.toFixed(e))}(e,t)}}function Ye(t,e,r){t=Array.isArray(t)?t:[t];for(const i of t)(Ke[i]||(Ke[i]=[]))[e]=r;return t=t[0],function(i){let n;return void 0!==i?(r&&(i=r(i)),n=this[t](),n.color[e]=i,n):(n=this[t]().color[e],r&&(n=r(n)),n)}}function Qe(t){return function(e){return Math.max(0,Math.min(t,e))}}function Xe(t,e){for(let r=0;r<e;r++)"number"!=typeof t[r]&&(t[r]=0);return t}const tr=k`
    --default-red: 244, 67, 54;
    --default-pink: 233, 30, 99;
    --default-purple: 156, 39, 176;
    --default-deep-purple: 103, 58, 183;
    --default-indigo: 63, 81, 181;
    --default-blue: 33, 150, 243;
    --default-light-blue: 3, 169, 244;
    --default-cyan: 0, 188, 212;
    --default-teal: 0, 150, 136;
    --default-green: 76, 175, 80;
    --default-light-green: 139, 195, 74;
    --default-lime: 205, 220, 57;
    --default-yellow: 255, 235, 59;
    --default-amber: 255, 193, 7;
    --default-orange: 255, 152, 0;
    --default-deep-orange: 255, 87, 34;
    --default-brown: 121, 85, 72;
    --default-grey: 158, 158, 158;
    --default-blue-grey: 96, 125, 139;
    --default-black: 0, 0, 0;
    --default-white: 255, 255, 255;
    --default-disabled: 189, 189, 189;
`,er=k`
    --default-disabled: 111, 111, 111;
`,rr=k`
    --spacing: var(--mush-spacing, 12px);

    /* Title */
    --title-padding: var(--mush-title-padding, 24px 12px 16px);
    --title-spacing: var(--mush-title-spacing, 12px);
    --title-font-size: var(--mush-title-font-size, 24px);
    --title-font-weight: var(--mush-title-font-weight, normal);
    --title-line-height: var(--mush-title-line-height, 1.2);
    --subtitle-font-size: var(--mush-subtitle-font-size, 16px);
    --subtitle-font-weight: var(--mush-subtitle-font-weight, normal);
    --subtitle-line-height: var(--mush-subtitle-line-height, 1.2);

    /* Card */
    --card-primary-font-size: var(--mush-card-primary-font-size, 14px);
    --card-secondary-font-size: var(--mush-card-secondary-font-size, 12px);
    --card-primary-font-weight: var(--mush-card-primary-font-weight, bold);
    --card-secondary-font-weight: var(--mush-card-secondary-font-weight, bolder);

    /* Chips */
    --chip-spacing: var(--mush-chip-spacing, 8px);
    --chip-padding: var(--mush-chip-padding, 0 0.25em);
    --chip-height: var(--mush-chip-height, 36px);
    --chip-border-radius: var(--mush-chip-border-radius, 18px);
    --chip-font-size: var(--mush-chip-font-size, 0.3em);
    --chip-font-weight: var(--mush-chip-font-weight, bold);
    --chip-icon-size: var(--mush-chip-icon-size, 0.5em);
    --chip-avatar-padding: var(--mush-chip-avatar-padding, 0.1em);
    --chip-avatar-border-radius: var(--mush-chip-avatar-border-radius, 50%);

    /* Controls */
    --control-border-radius: var(--mush-control-border-radius, 12px);
    --control-height: var(--mush-control-height, 42px);
    --control-button-ratio: var(--mush-control-button-ratio, 1);
    --control-icon-size: var(--mush-control-icon-size, 0.5em);

    /* Slider */
    --slider-threshold: var(--mush-slider-threshold);

    /* Layout */
    --layout-align: var(--mush-layout-align, center);

    /* Badge */
    --badge-size: var(--mush-badge-size, 16px);
    --badge-icon-size: var(--mush-badge-icon-size, 0.75em);
    --badge-border-radius: var(--mush-badge-border-radius, 50%);

    /* Icon */
    --icon-border-radius: var(--mush-icon-border-radius, 50%);
    --icon-size: var(--mush-icon-size, 42px);
    --icon-symbol-size: var(--mush-icon-symbol-size, 0.5em);
`,ir=k`
    /* RGB */
    /* Standard colors */
    --rgb-red: var(--mush-rgb-red, var(--default-red));
    --rgb-pink: var(--mush-rgb-pink, var(--default-pink));
    --rgb-purple: var(--mush-rgb-purple, var(--default-purple));
    --rgb-deep-purple: var(--mush-rgb-deep-purple, var(--default-deep-purple));
    --rgb-indigo: var(--mush-rgb-indigo, var(--default-indigo));
    --rgb-blue: var(--mush-rgb-blue, var(--default-blue));
    --rgb-light-blue: var(--mush-rgb-light-blue, var(--default-light-blue));
    --rgb-cyan: var(--mush-rgb-cyan, var(--default-cyan));
    --rgb-teal: var(--mush-rgb-teal, var(--default-teal));
    --rgb-green: var(--mush-rgb-green, var(--default-green));
    --rgb-light-green: var(--mush-rgb-light-green, var(--default-light-green));
    --rgb-lime: var(--mush-rgb-lime, var(--default-lime));
    --rgb-yellow: var(--mush-rgb-yellow, var(--default-yellow));
    --rgb-amber: var(--mush-rgb-amber, var(--default-amber));
    --rgb-orange: var(--mush-rgb-orange, var(--default-orange));
    --rgb-deep-orange: var(--mush-rgb-deep-orange, var(--default-deep-orange));
    --rgb-brown: var(--mush-rgb-brown, var(--default-brown));
    --rgb-grey: var(--mush-rgb-grey, var(--default-grey));
    --rgb-blue-grey: var(--mush-rgb-blue-grey, var(--default-blue-grey));
    --rgb-black: var(--mush-rgb-black, var(--default-black));
    --rgb-white: var(--mush-rgb-white, var(--default-white));
    --rgb-disabled: var(--mush-rgb-disabled, var(--default-disabled));

    /* Action colors */
    --rgb-info: var(--mush-rgb-info, var(--rgb-blue));
    --rgb-success: var(--mush-rgb-success, var(--rgb-green));
    --rgb-warning: var(--mush-rgb-warning, var(--rgb-orange));
    --rgb-danger: var(--mush-rgb-danger, var(--rgb-red));

    /* State colors */
    --rgb-state-vacuum: var(--mush-rgb-state-vacuum, var(--rgb-teal));
    --rgb-state-fan: var(--mush-rgb-state-fan, var(--rgb-green));
    --rgb-state-light: var(--mush-rgb-state-light, var(--rgb-orange));
    --rgb-state-entity: var(--mush-rgb-state-entity, var(--rgb-blue));
    --rgb-state-media-player: var(--mush-rgb-state-media-player, var(--rgb-indigo));
    --rgb-state-lock: var(--mush-rgb-state-lock, var(--rgb-blue));
    --rgb-state-humidifier: var(--mush-rgb-state-humidifier, var(--rgb-purple));

    /* State alarm colors */
    --rgb-state-alarm-disarmed: var(--mush-rgb-state-alarm-disarmed, var(--rgb-info));
    --rgb-state-alarm-armed: var(--mush-rgb-state-alarm-armed, var(--rgb-success));
    --rgb-state-alarm-triggered: var(--mush-rgb-state-alarm-triggered, var(--rgb-danger));

    /* State person colors */
    --rgb-state-person-home: var(--mush-rgb-state-person-home, var(--rgb-success));
    --rgb-state-person-not-home: var(--mush-rgb-state-person-not-home, var(--rgb-danger));
    --rgb-state-person-zone: var(--mush-rgb-state-person-zone, var(--rgb-info));
    --rgb-state-person-unknown: var(--mush-rgb-state-person-unknown, var(--rgb-grey));

    /* State update colors */
    --rgb-state-update-on: var(--mush-rgb-state-update-on, var(--rgb-orange));
    --rgb-state-update-off: var(--mush-rgb-update-off, var(--rgb-green));
    --rgb-state-update-installing: var(--mush-rgb-update-installing, var(--rgb-blue));

    /* State lock colors */
    --rgb-state-lock-locked: var(--mush-rgb-state-lock-locked, var(--rgb-green));
    --rgb-state-lock-unlocked: var(--mush-rgb-state-lock-unlocked, var(--rgb-red));
    --rgb-state-lock-pending: var(--mush-rgb-state-lock-pending, var(--rgb-orange));

    /* State cover colors */
    --rgb-state-cover-open: var(--mush-rgb-state-cover-open, var(--rgb-blue));
    --rgb-state-cover-closed: var(--mush-rgb-state-cover-closed, var(--rgb-disabled));

    /* State climate colors */
    --rgb-state-climate-auto: var(--mush-rgb-state-climate-auto, var(--rgb-green));
    --rgb-state-climate-heat_cool: var(--mush-rgb-state-climate-heat_cool, var(--rgb-green));
    --rgb-state-climate-heat: var(--mush-rgb-state-climate-heat, var(--rgb-orange));
    --rgb-state-climate-cool: var(--mush-rgb-state-climate-cool, var(--rgb-blue));
    --rgb-state-climate-dry: var(--mush-rgb-state-climate-dry, var(--rgb-amber));
    --rgb-state-climate-fan_only: var(--mush-rgb-state-climate-fan_only, var(--rgb-grey));
    --rgb-state-climate-off: var(--mush-rgb-state-climate-off, var(--rgb-grey));

    /* Action climate colors */
    --rgb-action-climate-cooling: var(--mush-rgb-action-climate-cooling, var(--rgb-blue));
    --rgb-action-climate-heating: var(--mush-rgb-action-climate-heating, var(--rgb-orange));
    --rgb-action-climate-fan: var(--mush-rgb-action-climate-fan, var(--rgb-grey));
    --rgb-action-climate-drying: var(--mush-rgb-action-climate-drying, var(--rgb-amber));
`;function nr(t){return!!t&&t.themes.darkMode}class or extends pt{updated(t){if(super.updated(t),t.has("hass")&&this.hass){const e=nr(t.get("hass")),r=nr(this.hass);e!==r&&this.toggleAttribute("dark-mode",r)}}static get styles(){return k`
            :host {
                ${tr}
            }
            :host([dark-mode]) {
                ${er}
            }
            :host {
                ${ir}
                ${rr}
            }
        `}}t([yt({attribute:!1})],or.prototype,"hass",void 0);const ar={mode_control:"mdi:thermostat",temperature_control:"mdi:thermometer"};!function(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},t),{preview:!0}))}({type:"ss-thermostat-card",name:"Shroom Singles Thermostat Card",description:"Shroom Singles card for climate entities"});let sr=class extends or{constructor(){super(...arguments),this._controls=[]}static async getConfigElement(){return await Promise.resolve().then((function(){return Cr})),document.createElement("ss-thermostat-card-editor")}static async getStubConfig(t){const e=Object.keys(t.states).filter((t=>pe.includes(t.split(".")[0])));return{type:"custom:ss-thermostat-card",entity:e[0],temperature_gap:t.config.unit_system.temperature===m?2:1}}_onControlTap(t,e){e.stopPropagation(),this._activeControl=t}getCardSize(){return 1}setConfig(t){this._config=Object.assign({tap_action:{action:"more-info"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"}},t),this.updateControls()}updateControls(){if(!this._config||!this.hass||!this._config.entity)return;const t=this._config.entity;if(!this.hass.states[t])return;const e=[];this._config.show_temp_control&&e.push("temperature_control"),this._config.show_mode_control&&e.push("mode_control"),this._controls=e;const r=!!this._activeControl&&e.includes(this._activeControl);this._activeControl=r?this._activeControl:e[0]}_handleAction(t){!function(t,e,r,i){var n;"double_tap"===i&&r.double_tap_action?n=r.double_tap_action:"hold"===i&&r.hold_action?n=r.hold_action:"tap"===i&&r.tap_action&&(n=r.tap_action),b(t,e,r,n)}(this,this.hass,this._config,t.detail.action)}updated(t){super.updated(t),this.hass&&t.has("hass")&&this.updateControls()}render(){var t,e;if(!this._config||!this.hass||!this._config.entity)return G``;const r=this._config.entity,i=this.hass.states[r],{current_temperature:n,hvac_action:o,preset_mode:a}=i.attributes,s=this._config.name||i.attributes.friendly_name||"",l=ne(this._config),u=!!this._config.hide_state,h=(t=>{t||(t="unknown");return{off:"mdi:power",heating:"mdi:fire",cooling:"mdi:snowflake",drying:"mdi:water-percent",idle:"mdi:thermostat",fan:"mdi:fan"}[t]||"mdi:thermostat"})(o),d=this._config.icon||(this._config.use_action_icon?o?h:It(i):"mdi:thermostat"),m=me(this.hass,i),g=`${`${de(this.hass,n,m)} ${this.hass.config.unit_system.temperature}`} | ${o?this.hass.localize(`state_attributes.climate.hvac_action.${o}`):this.hass.localize(`component.climate.state._.${i.state}`)} ${a&&"none"!==a?`- ${this.hass.localize(`state_attributes.climate.preset_mode.${a}`)||a}`:""}`,p={};(null===(t=this._config)||void 0===t?void 0:t.use_action_color)&&(o&&!["idle","off"].includes(o)?(p["--icon-color"]=`rgb(var(--rgb-action-climate-${o}))`,p["--shape-color"]=`rgba(var(--rgb-action-climate-${o}), 0.25)`):o||"off"===i.state||(p["--icon-color"]=`rgb(var(--rgb-state-climate-${i.state}))`,p["--shape-color"]=`rgba(var(--rgb-state-climate-${i.state}), 0.25)`));const v=c(this.hass);return G`
            <ha-card class=${At({"fill-container":null!==(e=this._config.fill_container)&&void 0!==e&&e})}>
                <mushroom-card .layout=${l} ?rtl=${v}>
                    <mushroom-state-item
                        ?rtl=${v}
                        .layout=${l}
                        @action=${this._handleAction}
                        .actionHandler=${Mt({hasHold:f(this._config.hold_action),hasDoubleClick:f(this._config.double_tap_action)})}
                    >
                        <mushroom-shape-icon
                            slot="icon"
                            .disabled=${!Ot(i)}
                            .icon=${d}
                            style=${Et(p)}
                        ></mushroom-shape-icon>
                        ${"unavailable"===i.state?G`
                                  <mushroom-badge-icon
                                      class="unavailable"
                                      slot="badge"
                                      icon="mdi:help"
                                  ></mushroom-badge-icon>
                              `:null}
                        <mushroom-state-info
                            slot="info"
                            .primary=${s}
                            .secondary=${!u&&g}
                        ></mushroom-state-info>
                    </mushroom-state-item>
                    ${this._controls.length>0?G`
                              <div class="actions" ?rtl=${v}>
                                  ${this.renderActiveControl(i)} ${this.renderOtherControls()}
                              </div>
                          `:null}
                </mushroom-card>
            </ha-card>
        `}renderOtherControls(){const t=this._controls.filter((t=>t!=this._activeControl));return G`
            ${t.map((t=>G`
                    <mushroom-button
                        .icon=${ar[t]}
                        @click=${e=>this._onControlTap(t,e)}
                    ></mushroom-button>
                `))}
        `}renderActiveControl(t){var e,r,i;const n=ne(this._config),o=c(this.hass);switch(this._activeControl){case"mode_control":return G` <ss-thermostat-mode-control
                    .hass=${this.hass}
                    .entity=${t}
                    .fill=${"horizontal"!==n}
                ></ss-thermostat-mode-control>`;case"temperature_control":return G`<ss-thermostat-temperature-control
                    ?rtl=${o}
                    .hass=${this.hass}
                    .entity=${t}
                    .gap=${null!==(r=null===(e=this._config)||void 0===e?void 0:e.temperature_gap)&&void 0!==r?r:0}
                    .showIndicators=${!!this._config.show_temp_indicators}
                    .enableWhenOff=${null===(i=this._config)||void 0===i?void 0:i.enable_when_off}
                ></ss-thermostat-temperature-control>`;default:return null}}static get styles(){return[super.styles,Ct,k`
                mushroom-state-item {
                    cursor: pointer;
                }
                mushroom-shape-icon {
                    --icon-color: var(--icon-color-disabled);
                    --shape-color: var(--shape-color-disabled);
                }
            `]}};t([_t()],sr.prototype,"_config",void 0),t([_t()],sr.prototype,"_activeControl",void 0),t([_t()],sr.prototype,"_controls",void 0),sr=t([bt("ss-thermostat-card")],sr);var lr=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function cr(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(i=t[r],n=e[r],!(i===n||lr(i)&&lr(n)))return!1;var i,n;return!0}var ur={card:{generic:{hide_name:"Hide name?",hide_state:"Hide state?",hide_icon:"Hide icon?",icon_color:"Icon color",layout:"Layout",fill_container:"Fill container",primary_info:"Primary information",secondary_info:"Secondary information",content_info:"Content",use_entity_picture:"Use entity picture?"},thermostat:{enable_when_off:"Enable slider when off",use_action_color:"Icon action/state color?",use_action_icon:"Icon action/state?",show_mode_control:"Mode control?",show_temp_control:"Temperature control?",show_temp_indicators:"Temperature control indicators?",temperature_gap:"Energy Efficient Gap"}}},hr={editor:ur};const dr={en:Object.freeze({__proto__:null,editor:ur,default:hr})};function mr(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),dr[e])}catch(t){return}}const gr=["hide_name","hide_state","hide_icon","icon_color","layout","fill_container","primary_info","secondary_info","content_info","use_entity_picture","collapsible_controls"],pr=Qt({user:te()}),vr=re([Gt(),Qt({text:Xt(te()),excemptions:Xt(Zt(pr))})]),br=Qt({action:Yt("url"),url_path:te(),confirmation:Xt(vr)}),fr=Qt({action:Yt("call-service"),service:te(),service_data:Xt(Qt()),target:Xt(Qt({entity_id:Xt(re([te(),Zt(te())])),device_id:Xt(re([te(),Zt(te())])),area_id:Xt(re([te(),Zt(te())]))})),confirmation:Xt(vr)}),yr=Qt({action:Yt("navigate"),navigation_path:te(),confirmation:Xt(vr)}),_r=ee({action:Yt("fire-dom-event")}),wr=Qt({action:function(t){const e={},r=t.map((t=>Ft(t))).join();for(const r of t)e[r]=r;return new Vt({type:"enums",schema:e,validator:e=>t.includes(e)||"Expected one of `"+r+"`, but received: "+Ft(e)})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Xt(vr)}),$r=re([wr,br,yr,fr,_r]),kr=function(...t){const e="type"===t[0].type,r=t.map((t=>t.schema)),i=Object.assign({},...r);return e?ee(i):Qt(i)}(Qt({type:te(),view_layout:Kt("any",(()=>!0))}),Qt({entity:Xt(te()),icon:Xt(te()),name:Xt(te()),layout:Xt(ie),fill_container:Xt(Gt()),hide_state:Xt(Gt()),enable_when_off:Xt(Gt()),use_action_color:Xt(Gt()),use_action_icon:Xt(Gt()),show_mode_control:Xt(Gt()),show_temp_control:Xt(Gt()),show_temp_indicators:Xt(Gt()),temperature_gap:Xt(Kt("number",(t=>"number"==typeof t&&!isNaN(t)||"Expected a number, but received: "+Ft(t)))),tap_action:Xt($r),hold_action:Xt($r),double_tap_action:Xt($r)})),xr=["enable_when_off","use_action_icon","use_action_color","show_mode_control","show_temp_control","show_temp_indicators","temperature_gap"],Ar=function(t,e){void 0===e&&(e=cr);var r=null;function i(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];if(r&&r.lastThis===this&&e(i,r.lastArgs))return r.lastResult;var o=t.apply(this,i);return r={lastResult:o,lastArgs:i,lastThis:this},o}return i.clear=function(){r=null},i}(((t,e)=>[{name:"entity",selector:{entity:{domain:pe}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{placeholder:t}}}]},{type:"grid",name:"",schema:[{name:"layout",selector:{"mush-layout":{}}},{name:"fill_container",selector:{boolean:{}}},{name:"hide_state",selector:{boolean:{}}},{name:"enable_when_off",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"use_action_color",selector:{boolean:{}}},{name:"use_action_icon",selector:{boolean:{}}},{name:"show_temp_control",selector:{boolean:{}}},{name:"show_temp_indicators",selector:{boolean:{}}},{name:"show_mode_control",selector:{boolean:{}}}]},{name:"temperature_gap",selector:{number:{min:0,max:e===m?10:5,step:e===m?1:.5,mode:"slider",unit_of_measurement:e}}},{name:"tap_action",selector:{"mush-action":{}}},{name:"hold_action",selector:{"mush-action":{}}},{name:"double_tap_action",selector:{"mush-action":{}}}]));let Er=class extends or{constructor(){super(...arguments),this._computeLabelCallback=t=>{const e=(r=this.hass,function(t){var e;let i=mr(t,null!==(e=null==r?void 0:r.locale.language)&&void 0!==e?e:"en");return i||(i=mr(t,"en")),null!=i?i:t});var r;return gr.includes(t.name)?e(`editor.card.generic.${t.name}`):xr.includes(t.name)?e(`editor.card.thermostat.${t.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}connectedCallback(){var t,e;super.connectedCallback(),customElements.get("ha-form")&&customElements.get("hui-action-editor")||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(e=customElements.get("hui-conditional-card-editor"))||void 0===e||e.getConfigElement()}setConfig(t){Wt(t,kr),this._config=t}render(){if(!this.hass||!this._config)return G``;const t=this._config.entity?this.hass.states[this._config.entity]:void 0,e=t?It(t):void 0,r=this._config.icon||e,i=Ar(r,this.hass.config.unit_system.temperature);return G`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${i}
                .computeLabel=${this._computeLabelCallback}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(t){g(this,"config-changed",{config:t.detail.value})}};t([_t()],Er.prototype,"_config",void 0),Er=t([bt("ss-thermostat-card-editor")],Er);var Cr=Object.freeze({__proto__:null,THERMOSTAT_FIELDS:xr,get ThermostatCardEditor(){return Er}});export{sr as ThermostatCard};
