import{A as Kt,B as Xt,C as he,D as Jt,s as ie,f as y,g as E,h as S,d as m,j as _,i as D,y as A,E as Ie,l as Be,m as xe,x as w,F as M,n as wt,G as Yt,a as P,H as De,I as L,c as B,J as Ae,K as de,L as Te,e as nt,M as Zt,N as me}from"../chunks/scheduler.76d66364.js";import{g as vt,t as V,c as It,a as H,S as ae,i as ce,b as _e,d as ge,m as be,e as ye}from"../chunks/index.0a9baea6.js";function Qt(t,e){const n=e.token={};function r(s,o,i,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=a);const u=s&&(e.current=s)(c);let l=!1;e.block&&(e.blocks?e.blocks.forEach((d,h)=>{h!==o&&d&&(vt(),V(d,1,1,()=>{e.blocks[h]===d&&(e.blocks[h]=null)}),It())}):e.block.d(1),u.c(),H(u,1),u.m(e.mount(),e.anchor),l=!0),e.block=u,e.blocks&&(e.blocks[o]=u),l&&Jt()}if(Kt(t)){const s=Xt();if(t.then(o=>{he(s),r(e.then,1,e.value,o),he(null)},o=>{if(he(s),r(e.catch,2,e.error,o),he(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function en(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function rt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;c||(f=64,i||(h=64)),r.push(n[l],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||u==null||d==null)throw new nn;const h=o<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rn=function(t){const e=Tt(t);return Rt.encodeByteArray(e,!0)},Ee=function(t){return rn(t).replace(/\./g,"")},sn=function(t){try{return Rt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=()=>on().__FIREBASE_DEFAULTS__,cn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ln=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sn(t[1]);return e&&JSON.parse(e)},ze=()=>{try{return an()||cn()||ln()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},un=t=>{var e,n;return(n=(e=ze())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hn=t=>{const e=un(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dt=()=>{var t;return(t=ze())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ee(JSON.stringify(n)),Ee(JSON.stringify(i)),a].join(".")}function pn(){var t;const e=(t=ze())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mn(){try{return typeof indexedDB=="object"}catch{return!1}}function _n(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirebaseError";class ee extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gn,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,At.prototype.create)}}class At{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?bn(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new ee(s,a,r)}}function bn(t,e){return t.replace(yn,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yn=/\{\$([^}]+)}/g;function Ue(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(st(o)&&st(i)){if(!Ue(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function st(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return t&&t._delegate?t._delegate:t}class se{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vn(e))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wn(t){return t===W?void 0:t}function vn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new En(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const Tn={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},Rn=v.INFO,Dn={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},An=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cn{constructor(e){this.name=e,this._logLevel=Rn,this._logHandler=An,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const Sn=(t,e)=>e.some(n=>t instanceof n);let ot,it;function kn(){return ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function On(){return it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ct=new WeakMap,Me=new WeakMap,St=new WeakMap,Ce=new WeakMap,qe=new WeakMap;function Nn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(z(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Ct.set(n,t)}).catch(()=>{}),qe.set(e,t),e}function Pn(t){if(Me.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Me.set(t,e)}let Le={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Me.get(t);if(e==="objectStoreNames")return t.objectStoreNames||St.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bn(t){Le=t(Le)}function xn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Se(this),e,...n);return St.set(r,e.sort?e.sort():[e]),z(r)}:On().includes(t)?function(...e){return t.apply(Se(this),e),z(Ct.get(this))}:function(...e){return z(t.apply(Se(this),e))}}function Un(t){return typeof t=="function"?xn(t):(t instanceof IDBTransaction&&Pn(t),Sn(t,kn())?new Proxy(t,Le):t)}function z(t){if(t instanceof IDBRequest)return Nn(t);if(Ce.has(t))return Ce.get(t);const e=Un(t);return e!==t&&(Ce.set(t,e),qe.set(e,t)),e}const Se=t=>qe.get(t);function Mn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=z(i);return r&&i.addEventListener("upgradeneeded",c=>{r(z(i.result),c.oldVersion,c.newVersion,z(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ln=["get","getKey","getAll","getAllKeys","count"],$n=["put","add","delete","clear"],ke=new Map;function at(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ke.get(e))return ke.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$n.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ln.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ke.set(e,o),o}Bn(t=>({...t,get:(e,n,r)=>at(e,n)||t.get(e,n,r),has:(e,n)=>!!at(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $e="@firebase/app",ct="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new Cn("@firebase/app"),jn="@firebase/app-compat",Vn="@firebase/analytics-compat",zn="@firebase/analytics",qn="@firebase/app-check-compat",Wn="@firebase/app-check",Gn="@firebase/auth",Kn="@firebase/auth-compat",Xn="@firebase/database",Jn="@firebase/database-compat",Yn="@firebase/functions",Zn="@firebase/functions-compat",Qn="@firebase/installations",er="@firebase/installations-compat",tr="@firebase/messaging",nr="@firebase/messaging-compat",rr="@firebase/performance",sr="@firebase/performance-compat",or="@firebase/remote-config",ir="@firebase/remote-config-compat",ar="@firebase/storage",cr="@firebase/storage-compat",lr="@firebase/firestore",ur="@firebase/firestore-compat",hr="firebase",dr="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="[DEFAULT]",fr={[$e]:"fire-core",[jn]:"fire-core-compat",[zn]:"fire-analytics",[Vn]:"fire-analytics-compat",[Wn]:"fire-app-check",[qn]:"fire-app-check-compat",[Gn]:"fire-auth",[Kn]:"fire-auth-compat",[Xn]:"fire-rtdb",[Jn]:"fire-rtdb-compat",[Yn]:"fire-fn",[Zn]:"fire-fn-compat",[Qn]:"fire-iid",[er]:"fire-iid-compat",[tr]:"fire-fcm",[nr]:"fire-fcm-compat",[rr]:"fire-perf",[sr]:"fire-perf-compat",[or]:"fire-rc",[ir]:"fire-rc-compat",[ar]:"fire-gcs",[cr]:"fire-gcs-compat",[lr]:"fire-fst",[ur]:"fire-fst-compat","fire-js":"fire-js",[hr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Map,Fe=new Map;function pr(t,e){try{t.container.addComponent(e)}catch(n){K.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ve(t){const e=t.name;if(Fe.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;Fe.set(e,t);for(const n of we.values())pr(n,t);return!0}function mr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},q=new At("app","Firebase",_r);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=dr;function kt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:He,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw q.create("bad-app-name",{appName:String(s)});if(n||(n=Dt()),!n)throw q.create("no-options");const o=we.get(s);if(o){if(Ue(n,o.options)&&Ue(r,o.config))return o;throw q.create("duplicate-app",{appName:s})}const i=new In(s);for(const c of Fe.values())i.addComponent(c);const a=new gr(n,r,i);return we.set(s,a),a}function yr(t=He){const e=we.get(t);if(!e&&t===He&&Dt())return kt();if(!e)throw q.create("no-app",{appName:t});return e}function Q(t,e,n){var r;let s=(r=fr[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),K.warn(a.join(" "));return}ve(new se(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="firebase-heartbeat-database",wr=1,oe="firebase-heartbeat-store";let Oe=null;function Ot(){return Oe||(Oe=Mn(Er,wr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oe)}}}).catch(t=>{throw q.create("idb-open",{originalErrorMessage:t.message})})),Oe}async function vr(t){try{return await(await Ot()).transaction(oe).objectStore(oe).get(Nt(t))}catch(e){if(e instanceof ee)K.warn(e.message);else{const n=q.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});K.warn(n.message)}}}async function lt(t,e){try{const r=(await Ot()).transaction(oe,"readwrite");await r.objectStore(oe).put(e,Nt(t)),await r.done}catch(n){if(n instanceof ee)K.warn(n.message);else{const r=q.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});K.warn(r.message)}}}function Nt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=1024,Tr=30*24*60*60*1e3;class Rr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ar(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ut();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Tr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ut(),{heartbeatsToSend:n,unsentEntries:r}=Dr(this._heartbeatsCache.heartbeats),s=Ee(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ut(){return new Date().toISOString().substring(0,10)}function Dr(t,e=Ir){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),ht(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ar{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mn()?_n().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ht(t){return Ee(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){ve(new se("platform-logger",e=>new Hn(e),"PRIVATE")),ve(new se("heartbeat",e=>new Rr(e),"PRIVATE")),Q($e,ct,t),Q($e,ct,"esm2017"),Q("fire-js","")}Cr("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="firebasestorage.googleapis.com",Bt="storageBucket",Sr=2*60*1e3,kr=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R extends ee{constructor(e,n,r=0){super(Ne(e),`Firebase Storage: ${n} (${Ne(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,R.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ne(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function Ne(t){return"storage/"+t}function We(){const t="An unknown error occurred, please check the error payload for server response.";return new R(T.UNKNOWN,t)}function Or(t){return new R(T.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Nr(t){return new R(T.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new R(T.UNAUTHENTICATED,t)}function Br(){return new R(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xr(t){return new R(T.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ur(){return new R(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mr(){return new R(T.CANCELED,"User canceled the upload/download.")}function Lr(t){return new R(T.INVALID_URL,"Invalid URL '"+t+"'.")}function $r(t){return new R(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hr(){return new R(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Bt+"' property when initializing the app?")}function Fr(){return new R(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jr(){return new R(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Vr(t){return new R(T.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function je(t){return new R(T.INVALID_ARGUMENT,t)}function xt(){return new R(T.APP_DELETED,"The Firebase app was deleted.")}function zr(t){return new R(T.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function re(t,e){return new R(T.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ne(t){throw new R(T.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(r.path==="")return r;throw $r(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),c={bucket:1,path:3};function u(I){I.path_=decodeURIComponent(I.path)}const l="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${l}/b/${s}/o${h}`,"i"),g={bucket:1,path:3},p=n===Pt?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",x=new RegExp(`^https?://${p}/${s}/${b}`,"i"),N=[{regex:a,indices:c,postModify:o},{regex:f,indices:g,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let I=0;I<N.length;I++){const O=N[I],Y=O.regex.exec(e);if(Y){const F=Y[O.indices.bucket];let Z=Y[O.indices.path];Z||(Z=""),r=new k(F,Z),O.postModify(r);break}}if(r==null)throw Lr(e);return r}}class qr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return a===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function d(b){s=setTimeout(()=>{s=null,t(f,c())},b)}function h(){o&&clearTimeout(o)}function f(b,...x){if(u){h();return}if(b){h(),l.call(null,b,...x);return}if(c()||i){h(),l.call(null,b,...x);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,d(N)}let g=!1;function p(b){g||(g=!0,h(),!u&&(s!==null?(b||(a=2),clearTimeout(s),d(0)):b||(a=1)))}return d(0),o=setTimeout(()=>{i=!0,p(!0)},n),p}function Gr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){return t!==void 0}function Xr(t){return typeof t=="object"&&!Array.isArray(t)}function Ge(t){return typeof t=="string"||t instanceof String}function dt(t){return Ke()&&t instanceof Blob}function Ke(){return typeof Blob<"u"&&!pn()}function Ve(t,e,n,r){if(r<e)throw je(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw je(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ut(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(G||(G={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,s,o,i,a,c,u,l,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fe(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===G.NO_ERROR,c=o.getStatus();if(!a||Jr(c,this.additionalRetryCodes_)&&this.retry){const l=o.getErrorCode()===G.ABORT;r(!1,new fe(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new fe(u,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Kr(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=We();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(s.canceled){const c=this.appDelete_?xt():Mr();i(c)}else{const c=Ur();i(c)}};this.canceled_?n(!1,new fe(!1,null,!0)):this.backoffId_=Wr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fe{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Zr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Qr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function es(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ts(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ns(t,e,n,r,s,o,i=!0){const a=Ut(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return es(u,e),Zr(u,n),Qr(u,o),ts(u,r),new Yr(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ss(...t){const e=rs();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ke())return new Blob(t);throw new R(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function os(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){if(typeof atob>"u")throw Vr("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pe{constructor(e,n){this.data=e,this.contentType=n||null}}function as(t,e){switch(t){case $.RAW:return new Pe(Mt(e));case $.BASE64:case $.BASE64URL:return new Pe(Lt(t,e));case $.DATA_URL:return new Pe(ls(e),us(e))}throw We()}function Mt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cs(t){let e;try{e=decodeURIComponent(t)}catch{throw re($.DATA_URL,"Malformed data URL.")}return Mt(e)}function Lt(t,e){switch(t){case $.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw re(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw re(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=is(e)}catch(s){throw s.message.includes("polyfill")?s:re(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $t{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw re($.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hs(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ls(t){const e=new $t(t);return e.base64?Lt($.BASE64,e.rest):cs(e.rest)}function us(t){return new $t(t).contentType}function hs(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){let r=0,s="";dt(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dt(this.data_)){const r=this.data_,s=os(r,e,n);return s===null?null:new j(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new j(r,!0)}}static getBlob(...e){if(Ke()){const n=e.map(r=>r instanceof j?r.data_:r);return new j(ss.apply(null,n))}else{const n=e.map(i=>Ge(i)?as($.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new j(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){let e;try{e=JSON.parse(t)}catch{return null}return Xr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fs(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ht(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t,e){return e}class C{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ps}}let pe=null;function ms(t){return!Ge(t)||t.length<2?t:Ht(t)}function Re(){if(pe)return pe;const t=[];t.push(new C("bucket")),t.push(new C("generation")),t.push(new C("metageneration")),t.push(new C("name","fullPath",!0));function e(o,i){return ms(i)}const n=new C("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new C("size");return s.xform=r,t.push(s),t.push(new C("timeCreated")),t.push(new C("updated")),t.push(new C("md5Hash",null,!0)),t.push(new C("cacheControl",null,!0)),t.push(new C("contentDisposition",null,!0)),t.push(new C("contentEncoding",null,!0)),t.push(new C("contentLanguage",null,!0)),t.push(new C("contentType",null,!0)),t.push(new C("metadata","customMetadata",!0)),pe=t,pe}function _s(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new k(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function gs(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return _s(r,t),r}function Ft(t,e,n){const r=Xe(e);return r===null?null:gs(t,r,n)}function bs(t,e,n,r){const s=Xe(e);if(s===null||!Ge(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const l=t.bucket,d=t.fullPath,h="/b/"+i(l)+"/o/"+i(d),f=te(h,n,r),g=Ut({alt:"media",token:u});return f+g})[0]}function jt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="prefixes",pt="items";function ys(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ft])for(const s of n[ft]){const o=s.replace(/\/$/,""),i=t._makeStorageReference(new k(e,o));r.prefixes.push(i)}if(n[pt])for(const s of n[pt]){const o=t._makeStorageReference(new k(e,s.name));r.items.push(o)}return r}function Es(t,e,n){const r=Xe(n);return r===null?null:ys(t,e,r)}class le{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){if(!t)throw We()}function Ye(t,e){function n(r,s){const o=Ft(t,s,e);return Je(o!==null),o}return n}function ws(t,e){function n(r,s){const o=Es(t,e,s);return Je(o!==null),o}return n}function vs(t,e){function n(r,s){const o=Ft(t,s,e);return Je(o!==null),bs(o,s,t.host,t._protocol)}return n}function Ze(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Br():s=Pr():n.getStatus()===402?s=Nr(t.bucket):n.getStatus()===403?s=xr(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Qe(t){const e=Ze(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Or(t.path)),o.serverResponse=s.serverResponse,o}return n}function Is(t,e,n){const r=e.fullServerUrl(),s=te(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new le(s,o,Ye(t,n),i);return a.errorHandler=Qe(e),a}function Ts(t,e,n,r,s){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),s&&(o.maxResults=s);const i=e.bucketOnlyServerUrl(),a=te(i,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new le(a,c,ws(t,e.bucket),u);return l.urlParams=o,l.errorHandler=Ze(e),l}function Rs(t,e,n){const r=e.fullServerUrl(),s=te(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new le(s,o,vs(t,n),i);return a.errorHandler=Qe(e),a}function Ds(t,e,n,r){const s=e.fullServerUrl(),o=te(s,t.host,t._protocol),i="PATCH",a=jt(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new le(o,i,Ye(t,r),u);return l.headers=c,l.body=a,l.errorHandler=Qe(e),l}function As(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Cs(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=As(null,e)),r}function Ss(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let I=0;I<2;I++)N=N+Math.random().toString().slice(2);return N}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=Cs(e,r,s),l=jt(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+c+"--",f=j.getBlob(d,r,h);if(f===null)throw Fr();const g={name:u.fullPath},p=te(o,t.host,t._protocol),b="POST",x=t.maxUploadRetryTime,U=new le(p,b,Ye(t,n),x);return U.urlParams=g,U.headers=i,U.body=f.uploadData(),U.errorHandler=Ze(e),U}class ks{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=G.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=G.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=G.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ne("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ne("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ne("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ne("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ne("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Os extends ks{initXhr(){this.xhr_.responseType="text"}}function ue(){return new Os}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new X(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ht(this._location.path)}get storage(){return this._service}get parent(){const e=ds(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new X(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zr(e)}}function Ns(t,e,n){t._throwIfRoot("uploadBytes");const r=Ss(t.storage,t._location,Re(),new j(e,!0),n);return t.storage.makeRequestWithTokens(r,ue).then(s=>({metadata:s,ref:t}))}function Ps(t){const e={prefixes:[],items:[]};return Vt(t,e).then(()=>e)}async function Vt(t,e,n){const s=await Bs(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Vt(t,e,s.nextPageToken)}function Bs(t,e){e!=null&&typeof e.maxResults=="number"&&Ve("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Ts(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ue)}function xs(t){t._throwIfRoot("getMetadata");const e=Is(t.storage,t._location,Re());return t.storage.makeRequestWithTokens(e,ue)}function Us(t,e){t._throwIfRoot("updateMetadata");const n=Ds(t.storage,t._location,e,Re());return t.storage.makeRequestWithTokens(n,ue)}function Ms(t){t._throwIfRoot("getDownloadURL");const e=Rs(t.storage,t._location,Re());return t.storage.makeRequestWithTokens(e,ue).then(n=>{if(n===null)throw jr();return n})}function Ls(t,e){const n=fs(t._location.path,e),r=new k(t._location.bucket,n);return new X(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return/^[A-Za-z]+:\/\//.test(t)}function Hs(t,e){return new X(t,e)}function zt(t,e){if(t instanceof et){const n=t;if(n._bucket==null)throw Hr();const r=new X(n,n._bucket);return e!=null?zt(r,e):r}else return e!==void 0?Ls(t,e):t}function Fs(t,e){if(e&&$s(e)){if(t instanceof et)return Hs(t,e);throw je("To use ref(service, url), the first argument must be a Storage instance.")}else return zt(t,e)}function mt(t,e){const n=e==null?void 0:e[Bt];return n==null?null:k.makeFromBucketSpec(n,t)}function js(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:fn(s,t.app.options.projectId))}class et{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Pt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sr,this._maxUploadRetryTime=kr,this._requests=new Set,s!=null?this._bucket=k.makeFromBucketSpec(s,this._host):this._bucket=mt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=mt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ve("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new X(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new qr(xt());{const i=ns(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _t="@firebase/storage",gt="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="storage";function Vs(t,e,n){return t=J(t),Ns(t,e,n)}function zs(t){return t=J(t),xs(t)}function qs(t,e){return t=J(t),Us(t,e)}function Ws(t){return t=J(t),Ps(t)}function Gs(t){return t=J(t),Ms(t)}function Wt(t,e){return t=J(t),Fs(t,e)}function Ks(t=yr(),e){t=J(t);const r=mr(t,qt).getImmediate({identifier:e}),s=hn("storage");return s&&Xs(r,...s),r}function Xs(t,e,n,r={}){js(t,e,n,r)}function Js(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new et(n,r,s,e,br)}function Ys(){ve(new se(qt,Js,"PUBLIC").setMultipleInstances(!0)),Q(_t,gt,""),Q(_t,gt,"esm2017")}Ys();function Zs(t){let e,n,r,s,o;return{c(){e=y("button"),n=y("p"),r=Be(t[0]),this.h()},l(i){e=E(i,"BUTTON",{class:!0});var a=S(e);n=E(a,"P",{class:!0});var c=S(n);r=xe(c,t[0]),c.forEach(m),a.forEach(m),this.h()},h(){_(n,"class","svelte-vvbrg7"),_(e,"class","item svelte-vvbrg7")},m(i,a){D(i,e,a),w(e,n),w(n,r),s||(o=M(e,"click",t[5]),s=!0)},p(i,a){a&1&&wt(r,i[0])},d(i){i&&m(e),s=!1,o()}}}function Qs(t){let e,n,r,s,o,i;return{c(){e=y("button"),n=y("p"),r=Be("Edit: "),s=Be(t[0]),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var c=S(e);n=E(c,"P",{class:!0});var u=S(n);r=xe(u,"Edit: "),s=xe(u,t[0]),u.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","svelte-vvbrg7"),_(e,"class","item svelte-vvbrg7")},m(a,c){D(a,e,c),w(e,n),w(n,r),w(n,s),o||(i=M(e,"click",t[4]),o=!0)},p(a,c){c&1&&wt(s,a[0])},d(a){a&&m(e),o=!1,i()}}}function eo(t){let e;function n(o,i){return o[1]=="edit"?Qs:Zs}let r=n(t),s=r(t);return{c(){e=y("div"),s.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var i=S(e);s.l(i),i.forEach(m),this.h()},h(){_(e,"class","item-wrapper svelte-vvbrg7")},m(o,i){D(o,e,i),s.m(e,null)},p(o,[i]){r===(r=n(o))&&s?s.p(o,i):(s.d(1),s=r(o),s&&(s.c(),s.m(e,null)))},i:A,o:A,d(o){o&&m(e),s.d()}}}function to(t){let e=new Audio(t);e.volume=.1,e.play()}function no(t,e,n){const r=Ie();let{sound:s}=e,{popupState:o}=e,i;Gs(s).then(l=>{n(2,i=l)});function a(){r("editPopup",{mode:"edit",audioReference:s})}const c=()=>{a()},u=()=>{to(i)};return t.$$set=l=>{"sound"in l&&n(0,s=l.sound),"popupState"in l&&n(1,o=l.popupState)},[s,o,i,a,c,u]}class ro extends ae{constructor(e){super(),ce(this,e,no,eo,ie,{sound:0,popupState:1})}}function bt(t,e,n){const r=t.slice();return r[5]=e[n],r}function yt(t){let e,n;return e=new ro({props:{popupState:t[0],sound:t[5]}}),e.$on("editPopup",t[2]),{c(){_e(e.$$.fragment)},l(r){ge(e.$$.fragment,r)},m(r,s){be(e,r,s),n=!0},p(r,s){const o={};s&1&&(o.popupState=r[0]),e.$set(o)},i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){ye(e,r)}}}function so(t){let e,n,r=rt(t[1]),s=[];for(let i=0;i<r.length;i+=1)s[i]=yt(bt(t,r,i));const o=i=>V(s[i],1,1,()=>{s[i]=null});return{c(){e=y("section");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=E(i,"SECTION",{class:!0});var a=S(e);for(let c=0;c<s.length;c+=1)s[c].l(a);a.forEach(m),this.h()},h(){_(e,"class","grid svelte-87ggig")},m(i,a){D(i,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(i,[a]){if(a&7){r=rt(i[1]);let c;for(c=0;c<r.length;c+=1){const u=bt(i,r,c);s[c]?(s[c].p(u,a),H(s[c],1)):(s[c]=yt(u),s[c].c(),H(s[c],1),s[c].m(e,null))}for(vt(),c=r.length;c<s.length;c+=1)o(c);It()}},i(i){if(!n){for(let a=0;a<r.length;a+=1)H(s[a]);n=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)V(s[a]);n=!1},d(i){i&&m(e),Yt(s,i)}}}function oo(t,e,n){const r=Ie();let{sounds:s}=e,{popupState:o}=e,i=s.items;function a(c){r("itemData",c)}return t.$$set=c=>{"sounds"in c&&n(3,s=c.sounds),"popupState"in c&&n(0,o=c.popupState)},[o,i,a,s]}class io extends ae{constructor(e){super(),ce(this,e,oo,so,ie,{sounds:3,popupState:0})}}function ao(t){let e,n,r,s,o='<img src="/Menu.svg" alt="menu icon"/>',i,a,c='<img src="/Edit.svg" alt="menu icon"/>',u,l,d='<img src="/Upload.svg" alt="menu icon"/>',h,f,g,p,b,x,U,N;return{c(){e=y("div"),n=y("div"),r=y("div"),s=y("div"),s.innerHTML=o,i=P(),a=y("div"),a.innerHTML=c,u=P(),l=y("div"),l.innerHTML=d,g=P(),p=De("svg"),b=De("clipPath"),x=De("path"),this.h()},l(I){e=E(I,"DIV",{class:!0});var O=S(e);n=E(O,"DIV",{class:!0});var Y=S(n);r=E(Y,"DIV",{class:!0});var F=S(r);s=E(F,"DIV",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-19qiwo"&&(s.innerHTML=o),i=B(F),a=E(F,"DIV",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-1w09fe5"&&(a.innerHTML=c),u=B(F),l=E(F,"DIV",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-2a0mun"&&(l.innerHTML=d),F.forEach(m),Y.forEach(m),g=B(O),p=Ae(O,"svg",{class:!0});var Z=S(p);b=Ae(Z,"clipPath",{id:!0,clipPathUnits:!0});var tt=S(b);x=Ae(tt,"path",{d:!0}),S(x).forEach(m),tt.forEach(m),Z.forEach(m),O.forEach(m),this.h()},h(){_(s,"class","menu-item svelte-1ajyqyc"),_(a,"class","menu-item svelte-1ajyqyc"),_(l,"class","menu-item svelte-1ajyqyc"),_(r,"class",h=de(t[0]?"wrapper open":"wrapper ")+" svelte-1ajyqyc"),_(n,"class",f=de(t[0]?"clipped wrapperOpen":"clipped")+" svelte-1ajyqyc"),_(x,"d","M0,0 H1 V0.87 C1,0.942,0.776,1,0.5,1 V1 C0.224,1,0,0.942,0,0.87 V0"),_(b,"id","my-clip-path"),_(b,"clipPathUnits","objectBoundingBox"),_(p,"class","svg svelte-1ajyqyc"),_(e,"class","menu svelte-1ajyqyc")},m(I,O){D(I,e,O),w(e,n),w(n,r),w(r,s),w(r,i),w(r,a),w(r,u),w(r,l),w(e,g),w(e,p),w(p,b),w(b,x),U||(N=[M(s,"click",t[2]),M(a,"click",t[3]),M(l,"click",t[4])],U=!0)},p(I,[O]){O&1&&h!==(h=de(I[0]?"wrapper open":"wrapper ")+" svelte-1ajyqyc")&&_(r,"class",h),O&1&&f!==(f=de(I[0]?"clipped wrapperOpen":"clipped")+" svelte-1ajyqyc")&&_(n,"class",f)},i:A,o:A,d(I){I&&m(e),U=!1,Te(N)}}}function co(t,e,n){const r=Ie();let s=!1;function o(u){r("openPopup",{mode:u})}return[s,o,u=>{n(0,s=!s)},()=>{o("edit")},()=>{o("upload")}]}class lo extends ae{constructor(e){super(),ce(this,e,co,ao,ie,{})}}var uo="firebase",ho="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Q(uo,ho,"app");const fo={apiKey:"AIzaSyC3EeNRxUqvpczReAvowoJBQTdba3a7nPM",authDomain:"soundboard-4bc77.firebaseapp.com",projectId:"soundboard-4bc77",storageBucket:"soundboard-4bc77.appspot.com",messagingSenderId:"982447558045",appId:"1:982447558045:web:67c826208ea3676cc23374"},po=kt(fo),mo=Ks(po),Gt=Wt(mo,"sounds/");function Et(t){let e,n,r,s="X",o,i,a;function c(d,h){if(d[1]=="edit"&&d[0]!==null)return go;if(d[1]=="upload")return _o}let u=c(t),l=u&&u(t);return{c(){e=y("section"),n=y("div"),r=y("button"),r.textContent=s,o=P(),l&&l.c(),this.h()},l(d){e=E(d,"SECTION",{class:!0});var h=S(e);n=E(h,"DIV",{class:!0});var f=S(n);r=E(f,"BUTTON",{"data-svelte-h":!0}),L(r)!=="svelte-10vgtxi"&&(r.textContent=s),o=B(f),l&&l.l(f),f.forEach(m),h.forEach(m),this.h()},h(){_(n,"class","popup svelte-1qe4z4r"),_(e,"class","popup-overlay svelte-1qe4z4r")},m(d,h){D(d,e,h),w(e,n),w(n,r),w(n,o),l&&l.m(n,null),i||(a=[M(r,"click",t[3]),M(e,"click",Zt(t[3]))],i=!0)},p(d,h){u===(u=c(d))&&l?l.p(d,h):(l&&l.d(1),l=u&&u(d),l&&(l.c(),l.m(n,null)))},d(d){d&&m(e),l&&l.d(),i=!1,Te(a)}}}function _o(t){let e,n="Upload new sound",r,s,o,i,a,c,u="Upload",l,d;return{c(){e=y("h1"),e.textContent=n,r=P(),s=y("input"),o=P(),i=y("input"),a=P(),c=y("button"),c.textContent=u,this.h()},l(h){e=E(h,"H1",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1wq4sho"&&(e.textContent=n),r=B(h),s=E(h,"INPUT",{id:!0,type:!0,placeholder:!0}),o=B(h),i=E(h,"INPUT",{type:!0,id:!0}),a=B(h),c=E(h,"BUTTON",{"data-svelte-h":!0}),L(c)!=="svelte-1b8b0cy"&&(c.textContent=u),this.h()},h(){_(e,"class","svelte-1qe4z4r"),_(s,"id","audioTitle"),_(s,"type","text"),_(s,"placeholder","Sound name"),_(i,"type","file"),_(i,"id","audioInput")},m(h,f){D(h,e,f),D(h,r,f),D(h,s,f),me(s,t[2]),D(h,o,f),D(h,i,f),D(h,a,f),D(h,c,f),l||(d=[M(s,"input",t[7]),M(c,"click",t[4])],l=!0)},p(h,f){f&4&&s.value!==h[2]&&me(s,h[2])},d(h){h&&(m(e),m(r),m(s),m(o),m(i),m(a),m(c)),l=!1,Te(d)}}}function go(t){let e,n="Editing sound",r,s,o,i,a="Edit",c,u;return{c(){e=y("h1"),e.textContent=n,r=P(),s=y("input"),o=P(),i=y("button"),i.textContent=a,this.h()},l(l){e=E(l,"H1",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-j6pxjf"&&(e.textContent=n),r=B(l),s=E(l,"INPUT",{id:!0,type:!0,placeholder:!0}),o=B(l),i=E(l,"BUTTON",{"data-svelte-h":!0}),L(i)!=="svelte-uv8svk"&&(i.textContent=a),this.h()},h(){_(e,"class","svelte-1qe4z4r"),_(s,"id","audioTitle"),_(s,"type","text"),_(s,"placeholder","Sound name")},m(l,d){D(l,e,d),D(l,r,d),D(l,s,d),me(s,t[2]),D(l,o,d),D(l,i,d),c||(u=[M(s,"input",t[6]),M(i,"click",t[5])],c=!0)},p(l,d){d&4&&s.value!==l[2]&&me(s,l[2])},d(l){l&&(m(e),m(r),m(s),m(o),m(i)),c=!1,Te(u)}}}function bo(t){let e,n=(t[1]=="upload"||t[0]!==null)&&Et(t);return{c(){n&&n.c(),e=nt()},l(r){n&&n.l(r),e=nt()},m(r,s){n&&n.m(r,s),D(r,e,s)},p(r,[s]){r[1]=="upload"||r[0]!==null?n?n.p(r,s):(n=Et(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:A,o:A,d(r){r&&m(e),n&&n.d(r)}}}function yo(t,e,n){const r=Ie();let{popupState:s}=e,{audioRef:o=null}=e,i="";function a(){n(0,o=null),n(2,i=""),r("closePopup",{mode:"close"})}function c(){const f=document.getElementById("audioInput").files[0],g=Wt(Gt,f.name);Vs(g,f,{customMetadata:{title:i}}).then(function(p){console.log("Uploaded a file:",p),alert("Audio file uploaded successfully!")}).catch(function(p){console.error("Error uploading file:",p),alert("Error uploading audio file. Please try again.")})}function u(){o&&qs(o,{customMetadata:{title:i}}).then(()=>{console.log("Metadata updated successfully."),alert("Audio metadata updated successfully!")}).catch(f=>{console.error("Error updating metadata:",f),alert("Error updating audio metadata. Please try again.")})}function l(){i=this.value,n(2,i),n(0,o)}function d(){i=this.value,n(2,i),n(0,o)}return t.$$set=h=>{"popupState"in h&&n(1,s=h.popupState),"audioRef"in h&&n(0,o=h.audioRef)},t.$$.update=()=>{t.$$.dirty&5&&o&&i==""&&zs(o).then(h=>{var f;n(2,i=((f=h==null?void 0:h.customMetadata)==null?void 0:f.title)||"")}).catch(h=>{console.error("Error fetching metadata:",h)})},[o,s,i,a,c,u,l,d]}class Eo extends ae{constructor(e){super(),ce(this,e,yo,bo,ie,{popupState:1,audioRef:0})}}function wo(t){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function vo(t){let e,n;return e=new io({props:{popupState:t[0],sounds:t[4]}}),e.$on("itemData",t[3]),{c(){_e(e.$$.fragment)},l(r){ge(e.$$.fragment,r)},m(r,s){be(e,r,s),n=!0},p(r,s){const o={};s&1&&(o.popupState=r[0]),e.$set(o)},i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){ye(e,r)}}}function Io(t){let e,n="Loading";return{c(){e=y("p"),e.textContent=n},l(r){e=E(r,"P",{"data-svelte-h":!0}),L(e)!=="svelte-1ed5rpo"&&(e.textContent=n)},m(r,s){D(r,e,s)},p:A,i:A,o:A,d(r){r&&m(e)}}}function To(t){let e,n,r,s,o="Future Ready Design",i,a,c="Soundboard",u,l,d,h;n=new lo({}),n.$on("openPopup",t[2]);let f={ctx:t,current:null,token:null,hasCatch:!1,pending:Io,then:vo,catch:wo,value:4,blocks:[,,,]};return Qt(t[4],f),d=new Eo({props:{audioRef:t[1],popupState:t[0]}}),d.$on("closePopup",t[2]),{c(){e=y("main"),_e(n.$$.fragment),r=P(),s=y("h1"),s.textContent=o,i=P(),a=y("h2"),a.textContent=c,u=P(),f.block.c(),l=P(),_e(d.$$.fragment),this.h()},l(g){e=E(g,"MAIN",{class:!0});var p=S(e);ge(n.$$.fragment,p),r=B(p),s=E(p,"H1",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-14v7psc"&&(s.textContent=o),i=B(p),a=E(p,"H2",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-2zuxhz"&&(a.textContent=c),u=B(p),f.block.l(p),l=B(p),ge(d.$$.fragment,p),p.forEach(m),this.h()},h(){_(s,"class","svelte-qlagel"),_(a,"class","svelte-qlagel"),_(e,"class","svelte-qlagel")},m(g,p){D(g,e,p),be(n,e,null),w(e,r),w(e,s),w(e,i),w(e,a),w(e,u),f.block.m(e,f.anchor=null),f.mount=()=>e,f.anchor=l,w(e,l),be(d,e,null),h=!0},p(g,[p]){t=g,en(f,t,p);const b={};p&2&&(b.audioRef=t[1]),p&1&&(b.popupState=t[0]),d.$set(b)},i(g){h||(H(n.$$.fragment,g),H(f.block),H(d.$$.fragment,g),h=!0)},o(g){V(n.$$.fragment,g);for(let p=0;p<3;p+=1){const b=f.blocks[p];V(b)}V(d.$$.fragment,g),h=!1},d(g){g&&m(e),ye(n),f.block.d(),f.token=null,f=null,ye(d)}}}function Ro(t,e,n){let r=Ws(Gt),s="closed",o;function i(c){switch(c.detail.mode){case"edit":n(0,s="edit");break;case"upload":n(0,s="upload");break;case"close":n(0,s="closed");break;default:n(0,s="closed");break}}function a(c){i(c.detail),n(1,o=c.detail.detail.audioReference)}return[s,o,i,a,r]}class Co extends ae{constructor(e){super(),ce(this,e,Ro,To,ie,{})}}export{Co as component};
