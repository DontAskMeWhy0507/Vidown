// Module 741 - Savior Hydrax Host
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(0);
  function o(t,e){
  var r=Object.keys(t);
  if(Object.getOwnPropertySymbols){
  var n=Object.getOwnPropertySymbols(t);
  e&&(n=n.filter((function(e){
  return Object.getOwnPropertyDescriptor(t,e).enumerable}
  ))),r.push.apply(r,n)}
  return r}
  function a(t){
  for(var e=1;
  e<arguments.length;
  e++){
  var r=null!=arguments[e]?arguments[e]:{
  };
  e%2?o(Object(r),!0).forEach((function(e){
  s(t,e,r[e])}
  )):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):
  o(Object(r)).forEach((function(e){
  Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}
  ))}
  return t}
  function s(t,e,r){
  return(e=function(t){
  var e=function(t,e){
  if("object"!=typeof t||!t)return t;
  var r=t[Symbol.toPrimitive];
  if(void 0!==r){
  var n=r.call(t,e||"default");
  if("object"!=typeof n)return n;
  throw new TypeError("@@toPrimitive must return a primitive value.")}
  return("string"===e?String:Number)(t)}
  (t,"string");
  return"symbol"==typeof e?e:e+""}
  (e))in t?Object.defineProperty(t,e,{
  value:r,enumerable:!0,configurable:!0,writable:!0}
  ):t[e]=r,t}
  function u(t){
  return new f(t,0)}
  function c(t){
  return function(){
  return new l(t.apply(this,arguments))}
  }
  function l(t){
  var e,r;
  function n(e,r){
  try{
  var o=t[e](r),a=o.value,s=a instanceof f;
  Promise.resolve(s?a.v:a).then((function(r){
  if(s){
  var u="return"===e&&a.k?e:"next";
  if(!a.k||r.done)return n(u,r);
  r=t[u](r).value}
  i(!!o.done,r)}
  ),(function(t){
  n("throw",t)}
  ))}
  catch(t){
  i(2,t)}
  }
  function i(t,i){
  2===t?e.reject(i):e.resolve({
  value:i,done:t}
  ),(e=e.next)?n(e.key,e.arg):r=null}
  this._invoke=function(t,i){
  return new Promise((function(o,a){
  var s={
  key:t,arg:i,resolve:o,reject:a,next:null};
  r?r=r.next=s:(e=r=s,n(t,i))}
  ))}
  ,"function"!=typeof t.return&&(this.return=void 0)}
  function f(t,e){
  this.v=t,this.k=e}
  function d(){
  const t={
  151:(t,e,r)=>{
  var n={
  utf8:{
  stringToBytes:function(t){
  return n.bin.stringToBytes(unescape(encodeURIComponent(t)))}
  ,bytesToString:function(t){
  return decodeURIComponent(escape(n.bin.bytesToString(t)))}
  }
  ,bin:{
  stringToBytes:function(t){
  for(var e=[],r=0;
  r<t.length;
  r++)e.push(255&t.charCodeAt(r));
  return e}
  ,bytesToString:function(t){
  for(var e=[],r=0;
  r<t.length;
  r++)e.push(String.fromCharCode(t[r]));
  return e.join("")}
  }
  };
  t.exports=n}
  ,206:(t,e,r)=>{
  function n(t){
  return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
  t.exports=function(t){
  return null!=t&&(n(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,
  0))||!!t._isBuffer);
  var e}
  }
  ,939:(t,e,r)=>{
  var n,i;
  n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={
  rotl:function(t,e){
  return t<<e|t>>>32-e}
  ,rotr:function(t,e){
  return t<<32-e|t>>>e}
  ,endian:function(t){
  if(t.constructor==Number)return 16711935&i.rotl(t,8)|-16711936&i.rotl(t,24);
  for(var e=0;
  e<t.length;
  e++)t[e]=i.endian(t[e]);
  return t}
  ,randomBytes:function(t){
  for(var e=[];
  t>0;
  t--)e.push(Math.floor(256*Math.random()));
  return e}
  ,bytesToWords:function(t){
  for(var e=[],r=0,n=0;
  r<t.length;
  r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;
  return e}
  ,wordsToBytes:function(t){
  for(var e=[],r=0;
  r<32*t.length;
  r+=8)e.push(t[r>>>5]>>>24-r%32&255);
  return e}
  ,bytesToHex:function(t){
  for(var e=[],r=0;
  r<t.length;
  r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));
  return e.join("")}
  ,hexToBytes:function(t){
  for(var e=[],r=0;
  r<t.length;
  r+=2)e.push(parseInt(t.substr(r,2),16));
  return e}
  ,bytesToBase64:function(t){
  for(var e=[],r=0;
  r<t.length;
  r+=3)for(var i=t[r]<<16|t[r+1]<<8|t[r+2],o=0;
  o<4;
  o++)8*r+6*o<=8*t.length?e.push(n.charAt(i>>>6*(3-o)&63)):e.push("=");
  return e.join("")}
  ,base64ToBytes:function(t){
  t=t.replace(/[^A-Z0-9+\/]/gi,"");
  for(var e=[],r=0,i=0;
  r<t.length;
  i=++r%4)0!=i&&e.push((n.indexOf(t.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|n.indexOf(t.charAt(r))>>>6-2*i);
  return e}
  }
  ,t.exports=i}
  ,503:(t,e,r)=>{
  var n,i,o,a,s;
  n=r(939),i=r(151).utf8,o=r(206),a=r(151).bin,(s=function(t,e){
  t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):i.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,
  0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());
  for(var r=n.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,f=-1732584194,d=271733878,h=0;
  h<r.length;
  h++)r[h]=16711935&(r[h]<<8|r[h]>>>24)|-16711936&(r[h]<<24|r[h]>>>8);
  r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;
  var p=s._ff,v=s._gg,m=s._hh,y=s._ii;
  for(h=0;
  h<r.length;
  h+=16){
  var g=c,b=l,w=f,A=d;
  c=p(c,l,f,d,r[h+0],7,-680876936),d=p(d,c,l,f,r[h+1],12,-389564586),f=p(f,d,c,l,r[h+2],17,606105819),
  l=p(l,f,d,c,r[h+3],22,-1044525330),c=p(c,l,f,d,r[h+4],7,-176418897),d=p(d,c,l,f,r[h+5],12,1200080426),
  f=p(f,d,c,l,r[h+6],17,-1473231341),l=p(l,f,d,c,r[h+7],22,-45705983),c=p(c,l,f,d,r[h+8],7,1770035416),
  d=p(d,c,l,f,r[h+9],12,-1958414417),f=p(f,d,c,l,r[h+10],17,-42063),l=p(l,f,d,c,r[h+11],22,-1990404162),
  c=p(c,l,f,d,r[h+12],7,1804603682),d=p(d,c,l,f,r[h+13],12,-40341101),f=p(f,d,c,l,r[h+14],17,-1502002290),
  c=v(c,l=p(l,f,d,c,r[h+15],22,1236535329),f,d,r[h+1],5,-165796510),d=v(d,c,l,f,r[h+6],9,-1069501632),
  f=v(f,d,c,l,r[h+11],14,643717713),l=v(l,f,d,c,r[h+0],20,-373897302),c=v(c,l,f,d,r[h+5],5,-701558691),
  d=v(d,c,l,f,r[h+10],9,38016083),f=v(f,d,c,l,r[h+15],14,-660478335),l=v(l,f,d,c,r[h+4],20,-405537848),
  c=v(c,l,f,d,r[h+9],5,568446438),d=v(d,c,l,f,r[h+14],9,-1019803690),f=v(f,d,c,l,r[h+3],14,-187363961),
  l=v(l,f,d,c,r[h+8],20,1163531501),c=v(c,l,f,d,r[h+13],5,-1444681467),d=v(d,c,l,f,r[h+2],9,-51403784),
  f=v(f,d,c,l,r[h+7],14,1735328473),c=m(c,l=v(l,f,d,c,r[h+12],20,-1926607734),f,d,r[h+5],4,-378558),
  d=m(d,c,l,f,r[h+8],11,-2022574463),f=m(f,d,c,l,r[h+11],16,1839030562),l=m(l,f,d,c,r[h+14],23,-35309556),
  c=m(c,l,f,d,r[h+1],4,-1530992060),d=m(d,c,l,f,r[h+4],11,1272893353),f=m(f,d,c,l,r[h+7],16,-155497632),
  l=m(l,f,d,c,r[h+10],23,-1094730640),c=m(c,l,f,d,r[h+13],4,681279174),d=m(d,c,l,f,r[h+0],11,-358537222),
  f=m(f,d,c,l,r[h+3],16,-722521979),l=m(l,f,d,c,r[h+6],23,76029189),c=m(c,l,f,d,r[h+9],4,-640364487),
  d=m(d,c,l,f,r[h+12],11,-421815835),f=m(f,d,c,l,r[h+15],16,530742520),c=y(c,l=m(l,f,d,c,r[h+2],23,-995338651),
  f,d,r[h+0],6,-198630844),d=y(d,c,l,f,r[h+7],10,1126891415),f=y(f,d,c,l,r[h+14],15,-1416354905),l=y(l,
  f,d,c,r[h+5],21,-57434055),c=y(c,l,f,d,r[h+12],6,1700485571),d=y(d,c,l,f,r[h+3],10,-1894986606),f=y(f,
  d,c,l,r[h+10],15,-1051523),l=y(l,f,d,c,r[h+1],21,-2054922799),c=y(c,l,f,d,r[h+8],6,1873313359),d=y(d,
  c,l,f,r[h+15],10,-30611744),f=y(f,d,c,l,r[h+6],15,-1560198380),l=y(l,f,d,c,r[h+13],21,1309151649),
  c=y(c,l,f,d,r[h+4],6,-145523070),d=y(d,c,l,f,r[h+11],10,-1120210379),f=y(f,d,c,l,r[h+2],15,718787259),
  l=y(l,f,d,c,r[h+9],21,-343485551),c=c+g>>>0,l=l+b>>>0,f=f+w>>>0,d=d+A>>>0}
  return n.endian([c,l,f,d])}
  )._ff=function(t,e,r,n,i,o,a){
  var s=t+(e&r|~e&n)+(i>>>0)+a;
  return(s<<o|s>>>32-o)+e}
  ,s._gg=function(t,e,r,n,i,o,a){
  var s=t+(e&n|r&~n)+(i>>>0)+a;
  return(s<<o|s>>>32-o)+e}
  ,s._hh=function(t,e,r,n,i,o,a){
  var s=t+(e^r^n)+(i>>>0)+a;
  return(s<<o|s>>>32-o)+e}
  ,s._ii=function(t,e,r,n,i,o,a){
  var s=t+(r^(e|~n))+(i>>>0)+a;
  return(s<<o|s>>>32-o)+e}
  ,s._blocksize=16,s._digestsize=16,t.exports=function(t,e){
  if(null==t)throw new Error("Illegal argument "+t);
  var r=n.wordsToBytes(s(t,e));
  return e&&e.asBytes?r:e&&e.asString?a.bytesToString(r):n.bytesToHex(r)}
  }
  }
  ,e={
  };
  function r(n){
  if(e[n])return e[n].exports;
  const i={
  exports:{
  }
  };
  return e[n]=i,t[n](i,i.exports,r),i.exports}
  const n=()=>r(503),i=(t,e)=>e.some(t=>t instanceof t);
  let o,s;
  const l=new WeakMap,f=new WeakMap,d=new WeakMap;
  let h={
  get(t,e,r){
  if(t instanceof IDBTransaction){
  if("done"===e)return l.get(t);
  if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}
  return v(t[e])}
  ,set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};
  function p(t){
  h=t(h)}
  function v(t){
  if(t instanceof IDBRequest)return function(t){
  const e=new Promise((e,r)=>{
  const n=()=>{
  t.removeEventListener("success",i),t.removeEventListener("error",o)}
  ,i=()=>{
  e(v(t.result)),n()}
  ,o=()=>{
  r(t.error),n()};
  t.addEventListener("success",i),t.addEventListener("error",o)}
  );
  return d.set(e,t),e}
  (t);
  if(f.has(t))return f.get(t);
  const e=function(t){
  return"function"==typeof t?(e=t,(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?
  function(...t){
  return t.apply(m(this),t),v(this.request)}
  :function(...t){
  return v(t.apply(m(this),t))}
  ):(t instanceof IDBTransaction&&function(t){
  if(l.has(t))return;
  const e=new Promise((e,r)=>{
  const n=()=>{
  t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",
  o)}
  ,i=()=>{
  e(),n()}
  ,o=()=>{
  r(t.error||new DOMException("AbortError","AbortError")),n()};
  t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}
  );
  l.set(t,e)}
  (t),i(0,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,h):t);
  var e}
  (t);
  return e!==t&&(f.set(t,e),d.set(e,t)),e}
  const m=t=>d.get(t),y=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],
  b=new Map;
  function w(t,e){
  if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;
  if(b.get(e))return b.get(e);
  const r=e.replace(/FromIndex$/,""),n=e!==r,i=g.includes(r);
  if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(r))return;
  const o=async function(t,...e){
  const r=this.transaction(t,n?"readwrite":"readonly");
  let n=r.store;
  return r&&(n=n.index(e.shift())),(await Promise.all([n[e](...e),n&&r.done]))[0]};
  return b.set(e,o),o}
  p(t=>a(a({
  }
  ,t),{
  }
  ,{
  get:(t,e,r)=>w(t,e)||t.get(t,e,r),has:(t,e)=>!!w(t,e)||t.has(t,e)}
  ));
  const A=["continue","continuePrimaryKey","advance"],_={
  }
  ,E=new WeakMap,S=new WeakMap,O={
  get(t,e){
  if(!A.includes(e))return t[e];
  let r=_[e];
  return r||(r=_[e]=function(...t){
  E.set(this,S.get(this)[e](...t))}
  ),r}
  };
  function x(){
  return k.apply(this,arguments)}
  function k(){
  return(k=c((function*(...t){
  let e=this;
  if(e instanceof IDBCursor||(e=yield u(e.openCursor(...t))),!e)return;
  const r=new Proxy(e,O);
  for(S.set(r,e),d.set(r,m(e));
  e;
  )yield r,e=yield u(E.get(r)||e.continue()),E.delete(r)}
  ))).apply(this,arguments)}
  function M(t,e){
  return e===Symbol.asyncIterator&&i(0,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===e&&i(0,[IDBIndex,
  IDBObjectStore])}
  p(t=>a(a({
  }
  ,t),{
  }
  ,{
  get:(t,e,r)=>M(0,e)?x:t.get(t,e,r),has:(t,e)=>M(0,e)||t.has(t,e)}
  ));
  let T=null;
  const I={
  files:["md5_id","slug"],caches:["mediaId"],errors:["url","createdAt"]};
  class j{
  constructor(){
  this.key=null,this.algorithm={
  name:"AES-CTR",length:128}
  ,this.keyUsages=["encrypt","decrypt"],this.encoder=new TextEncoder}
  async expandKey(t){
  if(!t)return!1;
  var e=this.encoder.encode(n()(t));
  this.algorithm.counter=new Uint8Array(e.slice(0,16));
  try{
  return this.key=await crypto.subtle.importKey("raw",e,this.algorithm,!1,this.keyUsages),!0}
  catch(t){
  return!1}
  }
  async encrypt(t){
  if(!t||!this.key)return t;
  "string"==typeof t&&(t=this.encoder.encode(t));
  var e=await crypto.subtle.encrypt(this.algorithm,this.key,t);
  return Array.from(new Uint8Array(e)).map(t=>String.fromCharCode(t)).join("")}
  async decrypt(t){
  if(!t||!this.key)return t;
  if("string"==typeof t)return this.decryptString(t);
  var e=await crypto.subtle.decrypt(this.algorithm,this.key,t);
  return new Uint8Array(e)}
  async decryptString(t){
  var e=new Uint8Array((t.match(/[\s\S]/g)||[]).map(t=>t.charCodeAt(0))),r=await crypto.subtle.decrypt(this.algorithm,
  this.key,e);
  return(new TextDecoder).decode(r)}
  }
  class C{
  constructor(t=null,e=[]){
  this.db=null,this.tableName=t,this.indexs=e}
  async connect(){
  if(!this.tableName)throw new Error("Table Name not found");
  if(this.db)return this.db;
  const t=await(async()=>{
  if(T)return T;
  const t=await function(t,e,{
  blocked:r,upgrade:n,blocking:i,terminated:o}
  ={
  }
  ){
  const a=null==e?indexedDB.open(t):indexedDB.open(t,e),s=v(a);
  return n&&a.addEventListener("upgradeneeded",t=>{
  n(v(a.result),t.oldVersion,t.newVersion,v(a.transaction),t)}
  ),r&&a.addEventListener("blocked",t=>r(t.oldVersion,t.newVersion,t)),s.then(t=>{
  o&&t.addEventListener("close",()=>o()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,
  t))}
  ).catch(()=>{
  }
  ),s}
  ("Abyss",void 0,{
  upgrade(t){
  Object.entries(I).forEach(([e,r])=>{
  if(t.objectStoreNames.contains(e))return;
  const n=t.createObjectStore(e,{
  keyPath:"id",autoIncrement:!0}
  );
  r.forEach(t=>n.createIndex(t,t))}
  )}
  }
  );
  return T=t,t}
  )();
  return this.db=t,t}
  async create(t){
  if(!this.db)return!1;
  try{
  return await this.db.add(this.tableName,t)}
  catch(t){
  return!1}
  }
  async findById(t){
  if(!t||!this.db)return!1;
  try{
  return await new Promise((e,r)=>{
  const n=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).get(t);
  n.onsuccess=()=>{
  e(n.result)}
  ,n.onerror=()=>{
  r(n.error)}
  }
  )}
  catch(t){
  return!1}
  }
  async findOneBy(t,e){
  if(!t||!e||!this.db)return!1;
  try{
  return await new Promise((r,n)=>{
  const i=this.db.transaction(this.tableName,"readonly").objectStore(this.tableName).getFromIndex(t,
  e);
  i.onsuccess=()=>{
  r(i.result)}
  ,i.onerror=()=>{
  n(i.error)}
  }
  )}
  catch(t){
  return!1}
  }
  async findByDecrypt(t,e){
  var r;
  if(!(r=t&&e?await this.findOneBy(t,e):await this.findById(t)))return!1;
  if("object"!=typeof r.media){
  const t=new j;
  await t.expandKey(r.user_id+":"+r.slug+":"+r.md5_id);
  const e=await t.decrypt(r.media);
  r.media=JSON.parse(e)}
  return r}
  async update(t,e={
  }
  ){
  if(!t||!this.db)return!1;
  try{
  const e=this.db.transaction(this.tableName,"readwrite"),r=e.objectStore(this.tableName),n=await r.get(t);
  if(!n)return!1;
  const i=a(a({
  }
  ,n),e);
  return await r.put(i),await e.done,i}
  catch(e){
  return!1}
  }
  async delete(t){
  if(!t||!this.db)return!1;
  try{
  const e=this.db.transaction(this.tableName,"readwrite"),r=e.objectStore(this.tableName);
  return await r.delete(t),await e.done,!0}
  catch(t){
  return console.error(t),!1}
  }
  }
  let B=null;
  const U=async(t,e)=>{
  if(!t||!e)return!1;
  try{
  const r=new j;
  await r.expandKey(e);
  let n=await r.encrypt(t);
  return n=btoa(btoa(n).replace(/=/g,"")).replace(/=/g,""),n}
  catch(t){
  return!1}
  }
  ,P=/^mp4\/chunk\/(\d+)\/(\d+)\/(\d+)\/([^/]+)\/([^/?]+)/;
  function N(t){
  const e=new URL(t);
  let r,n="";
  if(e.hash){
  const t=e.hash.replace(/^#/,""),i=t.indexOf("?");
  r=i>=0?t.slice(0,i):t,n=i>=0?t.slice(i+1):""}
  else r=e.pathname.replace(/^\//,""),n=e.search.replace(/^\?/,"");
  const i=r.match(P);
  if(!i)return null;
  const o=new URLSearchParams(n),a=parseInt(i[3],10);
  return{
  id:parseInt(i[1],10),size:parseInt(i[2],10),chunkSize:a,label:i[4],codec:i[5],maxChunkSize:parseInt(o.get("maxChunkSize")||
  String(a),10),isUseFristData:"0"!==o.get("isUseFristData"),origin:e.origin,rawUrl:t,routerUrl:e.origin+"/"+r+(n?
  "?"+n:"")}
  }
  const D={
  "360p":"640x360","480p":"854x480","720p":"1280x720","1080p":"1920x1080","1440p":"2560x1440","2160p":
  "3840x2160"};
  function R(t,e,r,n={
  }
  ){
  var i,o;
  const a=new URL(t),s=null!==(i=e.mediaId)&&void 0!==i?i:null===(o=a.hash.match(/mp4\/chunk\/(\d+)\//))||
  void 0===o?void 0:o[1];
  if(!s)throw new Error("Cannot infer media id for chunk URL");
  const u=new URLSearchParams(n);
  !u.has("maxChunkSize")&&r&&u.set("maxChunkSize",String(r));
  const c=u.toString(),l="mp4/chunk/"+s+"/"+e.size+"/"+r+"/"+e.label+"/"+e.codec+(c?"?"+c:"");
  return a.origin+(a.pathname||"")+"#"+l}
  async function L(t,e,r={
  }
  ){
  var n,i,o,a,s;
  const u=e.size,c=e.label,l=e.codec,f=null!==(n=null!==(i=null!==(o=r.chunkSize)&&void 0!==o?o:r.maxChunkSize)&&
  void 0!==i?i:e.chunkSize)&&void 0!==n?n:2097152,d=!1===r.isUseFristData,h=r.range||null;
  if(u<=0||f>u||f>104857600)throw new Error("Invalid size or chunkSize");
  const{
  sources:p=[],domains:v=[],fristDatas:m=[]}
  =(null==t||null===(a=t.media)||void 0===a?void 0:a.mp4)||{
  };
  if(!p.length||!v.length)throw new Error("No playable sources found");
  const y=p.find(t=>t.label==c&&t.codec==l&&t.size==u&&(!e.sub||t.sub==e.sub))||p.find(t=>t.label==c&&
  t.codec==l&&t.size==u)||e,g=d?void 0:m.find(t=>t.size==u&&t.res_id==y.res_id&&t.codec==l);
  let b=v.find(t=>t.includes(y.sub));
  b||(b=v[u%v.length]);
  const w="https://"+b+"/mp4/"+t.md5_id+"/"+y.res_id+"/"+u+"/"+f,A={
  start:0,end:u-1}
  ,_=h&&/^bytes=(\d+)-(\d+)?/.exec(h);
  _&&(A.start=Number(_[1]),_[2]&&(A.end=Number(_[2])));
  const E={
  start:Math.floor(A.start/f)*f,end:A.end}
  ,S=(A.start,{
  url:w,size:u,chunkSize:f,chunkSizeBuffer:16384,start:E.start,end:E.end,preBufferSize:10485760,maxPartCache:
  t.hasTouch?10:60}
  );
  g&&!d&&(S.fristData=g);
  return{
  params:{
  id:t.id,size:u,chunkSize:f,label:c,codec:l,maxChunkSize:f,isUseFristData:!d,origin:r.origin||null,
  rawUrl:r.rawUrl||null,routerUrl:null}
  ,mediaRecord:t,media:t.media,mp4:null===(s=t.media)||void 0===s?void 0:s.mp4,source:y,fristData:g,
  domain:b,downloadUrl:w,range:A,streamOptions:S}
  }
  async function q(t,e={
  }
  ){
  var r,i;
  const o=null==t?void 0:t.streamOptions;
  if(null==o||!o.url)throw new Error("Invalid chunk info: missing streamOptions.url");
  const a=o.size,s=o.chunkSize,u=o.fristData,{
  origin:c,pathname:l,search:f}
  =new URL(o.url),d=Math.ceil(a/s),h=null!==(r=e.startPart)&&void 0!==r?r:Math.floor((o.start||0)/s),
  p=null!==(i=e.endPart)&&void 0!==i?i:null!=o.end&&o.end>=0?Math.min(Math.floor(o.end/s),d-1):d-1;
  let v=0;
  u&&u.partSize%s==0&&(v=Math.ceil(u.partSize/s));
  const m=[];
  for(let t=h;
  t<=p&&t<d;
  t++){
  let e=s;
  t+1===d&&(e=a%s,e||(e=a));
  const r={
  key:n()(l)+"/"+t,size:e,url:c+"/sora/"+a+"/"+await U(l+"/"+t+f,a),partNumber:t};
  if(t<v){
  let e=t*s,n=e+s-1;
  n>u.partSize&&(n=u.partSize-1),r.size=n-e+1,r.key+=".fd",r.range="bytes="+e+"-"+n,r.urlFristData=u.url}
  m.push(r)}
  return m}
  function F(t,e={
  }
  ){
  var r;
  if("function"==typeof e.segmentDuration)return e.segmentDuration(t);
  if(e.bytesPerSecond>0)return t.size/e.bytesPerSecond;
  const n=e.totalSize||0,i=e.durationSeconds||0;
  return n>0&&i>0?t.size/n*i:null!==(r=e.defaultSegmentDuration)&&void 0!==r?r:10}
  function G(t,e={
  }
  ){
  var r,n;
  if(null==t||!t.length)throw new Error("No segments to build playlist");
  const i=null!==(r=e.defaultSegmentDuration)&&void 0!==r?r:10,o=["#EXTM3U","#EXT-X-VERSION:3","#EXT-X-MEDIA-SEQUENCE:0"];
  "EVENT"!==e.playlistType&&o.push("#EXT-X-PLAYLIST-TYPE:VOD");
  let s=i;
  const u=a(a({
  }
  ,e),{
  }
  ,{
  defaultSegmentDuration:i}
  );
  for(const e of t){
  const t=F(e,u);
  s=Math.max(s,t);
  const r=e.urlFristData||e.url;
  if(o.push("#EXTINF:"+t.toFixed(3)+","),e.range&&e.urlFristData){
  const t=/^bytes=(\d+)-(\d+)/.exec(e.range);
  if(t){
  const e=parseInt(t[1],10),r=parseInt(t[2],10)-e+1;
  o.push("#EXT-X-BYTERANGE:"+r+"@"+e)}
  }
  o.push(r)}
  const c=Math.max(1,Math.ceil(null!==(n=e.targetDuration)&&void 0!==n?n:s));
  o.splice(2,0,"#EXT-X-TARGETDURATION:"+c),!1!==e.includeEndList&&o.push("#EXT-X-ENDLIST");
  return{
  playlist:o.join("\n"),mimeType:"application/vnd.apple.mpegurl",segmentCount:t.length,targetDuration:
  c}
  }
  return{
  createAllQualityChunkPlaylists:async function(t,e={
  }
  ){
  var r,n;
  const i=!0===e.includeMaster;
  let o=null!==(r=e.chunkSize)&&void 0!==r?r:2097152;
  if("string"!=typeof t)return null;
  const s=t,u=N(t);
  if(!u)return null;
  o=null!==(n=u.chunkSize)&&void 0!==n?n:o;
  const c=await(async()=>{
  try{
  if(B=null,"undefined"==typeof indexedDB)throw new Error("indexedDB is not available in this context");
  const t=new C("files",["md5_id","slug"]);
  return await t.connect(),t}
  catch(t){
  return B=t,console.error("[ExtractedSw] getMediaDatabase failed:",t),!1}
  }
  )();
  if(!c)return null;
  const l=await c.findByDecrypt(u.id);
  if(!l)return null;
  const f=function(t,e={
  }
  ){
  var r;
  const n=(null==t||null===(r=t.media)||void 0===r||null===(r=r.mp4)||void 0===r?void 0:r.sources)||
  [],i=new Map;
  for(const t of n){
  if(!0!==e.includeInactive&&!1===t.status)continue;
  const r=t.label;
  if(!r)continue;
  const n=i.get(r);
  (!n||t.size>n.size)&&i.set(r,a({
  }
  ,t))}
  return Array.from(i.values()).sort((t,e)=>t.size-e.size)}
  (l,e),d=[];
  for(const t of f){
  const r=s?R(s,a(a({
  }
  ,t),{
  }
  ,{
  mediaId:l.id}
  ),o,a({
  maxChunkSize:o}
  ,!1===(null==u?void 0:u.isUseFristData)?{
  isUseFristData:"0"}
  :{
  }
  )):null,n=await L(l,t,a(a({
  }
  ,e),{
  }
  ,{
  chunkSize:o,rawUrl:r||e.rawUrl,origin:null==u?void 0:u.origin}
  ));
  r&&(n.params=a(a({
  }
  ,N(r)),{
  }
  ,{
  rawUrl:r}
  ));
  const i=await q(n,e),c=G(i,{
  totalSize:t.size,durationSeconds:e.durationSeconds,bytesPerSecond:e.bytesPerSecond,defaultSegmentDuration:
  e.defaultSegmentDuration}
  );
  let f=null;
  !1!==e.createPlaylistBlobUrl&&"undefined"!=typeof Blob&&(f=URL.createObjectURL(new Blob([c.playlist],
  {
  type:c.mimeType}
  ))),d.push({
  label:t.label,codec:t.codec,size:t.size,res_id:t.res_id,sub:t.sub,chunkUrl:r,info:n,segments:i,playlist:
  c.playlist,playlistMeta:c,playlistUri:f}
  )}
  const h={
  id:l.id,chunkSize:o,mediaRecord:l,qualities:d,master:null};
  return i&&(h.master=function(t,e={
  }
  ){
  if(null==t||!t.length)throw new Error("No qualities for master playlist");
  const r=["#EXTM3U","#EXT-X-VERSION:4","#EXT-X-INDEPENDENT-SEGMENTS",""];
  for(const d of t){
  var n,i,o,a,s,u,c,l,f;
  const t=null!==(n=null===(i=e.bandwidth)||void 0===i?void 0:i.call(e,d))&&void 0!==n?n:Math.max(1,
  Math.floor(8*d.size)),h=null!==(o=null!==(a=null===(s=e.resolution)||void 0===s?void 0:s.call(e,d))&&
  void 0!==a?a:D[d.label])&&void 0!==o?o:void 0,p=["BANDWIDTH="+t,h?"RESOLUTION="+h:null,"h264"===d.codec?
  'CODECS="avc1.4d401f,mp4a.40.2"':'CODECS="'+d.codec+'"','NAME="'+d.label+'"'].filter(Boolean).join(","),
  v=null!==(u=null!==(c=null!==(l=null===(f=e.playlistUri)||void 0===f?void 0:f.call(e,d))&&void 0!==l?
  l:d.playlistUri)&&void 0!==c?c:d.chunkUrl)&&void 0!==u?u:"";
  r.push("#EXT-X-STREAM-INF:"+p),r.push(v)}
  return r.push(""),{
  playlist:r.join("\n"),mimeType:"application/vnd.apple.mpegurl",variantCount:t.length}
  }
  (d,a(a({
  }
  ,e),{
  }
  ,{
  playlistUri:e.playlistUri||(t=>t.playlistUri||t.chunkUrl||"")}
  ))),h}
  }
  }
  function h(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);
  return p(c,"_invoke",function(r,n,i){
  var o,s,u,c=0,l=i||[],f=!1,d={
  p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){
  return o=e,s=0,u=t,d.n=r,a}
  };
  function h(r,n){
  for(s=r,u=n,e=0;
  !f&&c&&!i&&e<l.length;
  e++){
  var i,o=l[e],h=d.p,p=o[2];
  r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):
  h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}
  if(i||r>1)return a;
  throw f=!0,n}
  return function(i,l,p){
  if(c>1)throw TypeError("Generator is already running");
  for(f&&1===l&&h(l,p),s=l,u=p;
  (e=s<2?t:u)||!f;
  ){
  o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);
  try{
  if(c=2,o){
  if(s||(i="next"),e=o[i]){
  if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");
  if(!e.done)return e;
  u=e.value,s<2&&(s=0)}
  else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),
  s=1);
  o=t}
  else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}
  catch(e){
  o=t,s=1,u=e}
  finally{
  c=1}
  }
  return{
  value:e,done:f}
  }
  }
  (r,i,o),!0),c}
  var a={
  };
  function s(){
  }
  function u(){
  }
  function c(){
  }
  e=Object.getPrototypeOf;
  var l=[][n]?e(e([][n]())):(p(e={
  }
  ,n,(function(){
  return this}
  )),e),f=c.prototype=s.prototype=Object.create(l);
  function d(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,p(t,i,"GeneratorFunction")),
  t.prototype=Object.create(f),t}
  return u.prototype=c,p(f,"constructor",c),p(c,"constructor",u),u.displayName="GeneratorFunction",p(c,
  i,"GeneratorFunction"),p(f),p(f,i,"Generator"),p(f,n,(function(){
  return this}
  )),p(f,"toString",(function(){
  return"[object Generator]"}
  )),(h=function(){
  return{
  w:o,m:d}
  }
  )()}
  function p(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (p=function(t,e,r,n){
  function o(e,r){
  p(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  function v(t,e){
  var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(!r){
  if(Array.isArray(t)||(r=function(t,e){
  if(t){
  if("string"==typeof t)return m(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}
  }
  (t))||e&&t&&"number"==typeof t.length){
  r&&(t=r);
  var n=0,i=function(){
  };
  return{
  s:i,n:function(){
  return n>=t.length?{
  done:!0}
  :{
  done:!1,value:t[n++]}
  }
  ,e:function(t){
  throw t}
  ,f:i}
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
  var o,a=!0,s=!1;
  return{
  s:function(){
  r=r.call(t)}
  ,n:function(){
  var t=r.next();
  return a=t.done,t}
  ,e:function(t){
  s=!0,o=t}
  ,f:function(){
  try{
  a||null==r.return||r.return()}
  finally{
  if(s)throw o}
  }
  }
  }
  function m(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  l.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){
  return this}
  ,l.prototype.next=function(t){
  return this._invoke("next",t)}
  ,l.prototype.throw=function(t){
  return this._invoke("throw",t)}
  ,l.prototype.return=function(t){
  return this._invoke("return",t)};
  var y=function(t,e,r,n){
  return new(r||(r=Promise))((function(i,o){
  function a(t){
  try{
  u(n.next(t))}
  catch(t){
  o(t)}
  }
  function s(t){
  try{
  u(n.throw(t))}
  catch(t){
  o(t)}
  }
  function u(t){
  var e;
  t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){
  t(e)}
  ))).then(a,s)}
  u((n=n.apply(t,e||[])).next())}
  ))};
  e.default={
  index:20,getUrl(t,e,r,o){
  var a,s,u;
  return y(this,void 0,void 0,h().m((function e(){
  var o,c,l,f,p,m,y,g,b,w,A,_,E,S,O,x,k,M;
  return h().w((function(e){
  for(;;
  )switch(e.p=e.n){
  case 0:if(e.p=0,!(o=null===(a=document.body.querySelector("video"))||void 0===a?void 0:a.src)){
  e.n=2;
  break}
  return c=d(),e.n=1,c.createAllQualityChunkPlaylists(o);
  case 1:if(l=e.v,!(null===(s=null==l?void 0:l.qualities)||void 0===s?void 0:s.length)){
  e.n=2;
  break}
  return e.a(2,{
  return:!0,data:{
  qualities:l.qualities}
  }
  );
  case 2:e.n=4;
  break;
  case 3:e.p=3,k=e.v,console.error(k);
  case 4:if(!t.match(/(nazarickol\.com)|(playhydrax\.com)|(geoip\.redirect-ads\.com)/i)){
  e.n=14;
  break}
  if(e.p=5,f=document.querySelector("#player video"),p=(null==f?void 0:f.src)||"",m=location.href,y={
  method:"get",headers:{
  "X-Requested-With":"XMLHttpRequest",Origin:m,Referer:m}
  }
  ,!p.includes("blob:")||!p.includes("playhydrax.com")&&!p.includes("geoip.redirect-ads.com")){
  e.n=11;
  break}
  if(p=(p=p.slice(5)).replace("://geoip-redirect-ads.com","://playhydrax.com"),m=m.replace("://geoip-redirect-ads.com",
  "://playhydrax.com"),e.p=6,g=p,-1!==r.requestedUrls.indexOf(g)){
  e.n=8;
  break}
  return e.n=7,fetch(g,y).then(t=>t.text());
  case 7:return b=e.v,r.requestedUrls.push(g),e.a(2,{
  return:!0,data:{
  url:p,response:b}
  }
  );
  case 8:e.n=10;
  break;
  case 9:e.p=9,e.v,r.requestedUrls.push(p);
  case 10:e.n=12;
  break;
  case 11:if(!p.includes("storage.googleapis.com")||!p.includes("/mediastorage")){
  e.n=12;
  break}
  return e.a(2,{
  return:!0,data:{
  url:p}
  }
  );
  case 12:e.n=14;
  break;
  case 13:e.p=13,M=e.v,Object(i.sendMessage)({
  type:n.b.CONSOLE_LOG,params:{
  url:{
  error:M}
  }
  }
  );
  case 14:if(location.href.includes("/hydra/?slug")){
  w=/HYDRA_SOURCES\s*=\s*('|")*(\[.*?\])('\n|"\n|,|;)*/,A=[...document.querySelectorAll("script")].filter(t=>t.innerText),
  _=v(A);
  try{
  for(_.s();
  !(E=_.n()).done;
  )S=E.value,O=S.innerText,w.test(O)&&(x=(null===(u=w.exec(O))||void 0===u?void 0:u[2])||"null",Object(i.sendMessage)({
  requestType:"save_url",params:{
  url:JSON.parse(x)}
  }
  ))}
  catch(t){
  _.e(t)}
  finally{
  _.f()}
  }
  return e.a(2,{
  return:!1,data:null}
  )}
  }
  ),e,null,[[6,9],[5,13],[0,3]])}
  )))}
  }
  };
