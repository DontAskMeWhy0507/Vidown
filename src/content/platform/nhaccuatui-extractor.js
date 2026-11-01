// Module 294 - Savior Nhaccuatui Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e),r.d(e,"API_RX",(function(){
  return h}
  ));
  var n=r(1),i=r(0),o=r(3);
  function a(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var a=n&&n.prototype instanceof c?n:c,l=Object.create(a.prototype);
  return s(l,"_invoke",function(r,n,i){
  var o,a,s,c=0,l=i||[],f=!1,d={
  p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){
  return o=e,a=0,s=t,d.n=r,u}
  };
  function h(r,n){
  for(a=r,s=n,e=0;
  !f&&c&&!i&&e<l.length;
  e++){
  var i,o=l[e],h=d.p,p=o[2];
  r>3?(i=p===n)&&(s=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(a=0,d.v=n,d.n=o[1]):
  h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,a=0))}
  if(i||r>1)return u;
  throw f=!0,n}
  return function(i,l,p){
  if(c>1)throw TypeError("Generator is already running");
  for(f&&1===l&&h(l,p),a=l,s=p;
  (e=a<2?t:s)||!f;
  ){
  o||(a?a<3?(a>1&&(d.n=-1),h(a,s)):d.n=s:d.v=s);
  try{
  if(c=2,o){
  if(a||(i="next"),e=o[i]){
  if(!(e=e.call(o,s)))throw TypeError("iterator result is not an object");
  if(!e.done)return e;
  s=e.value,a<2&&(a=0)}
  else 1===a&&(e=o.return)&&e.call(o),a<2&&(s=TypeError("The iterator does not provide a '"+i+"' method"),
  a=1);
  o=t}
  else if((e=(f=d.n<0)?s:r.call(n,d))!==u)break}
  catch(e){
  o=t,a=1,s=e}
  finally{
  c=1}
  }
  return{
  value:e,done:f}
  }
  }
  (r,i,o),!0),l}
  var u={
  };
  function c(){
  }
  function l(){
  }
  function f(){
  }
  e=Object.getPrototypeOf;
  var d=[][n]?e(e([][n]())):(s(e={
  }
  ,n,(function(){
  return this}
  )),e),h=f.prototype=c.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return l.prototype=f,s(h,"constructor",f),s(f,"constructor",l),l.displayName="GeneratorFunction",s(f,
  i,"GeneratorFunction"),s(h),s(h,i,"Generator"),s(h,n,(function(){
  return this}
  )),s(h,"toString",(function(){
  return"[object Generator]"}
  )),(a=function(){
  return{
  w:o,m:p}
  }
  )()}
  function s(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (s=function(t,e,r,n){
  function o(e,r){
  s(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  function u(t,e){
  return function(t){
  if(Array.isArray(t))return t}
  (t)||function(t,e){
  var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(null!=r){
  var n,i,o,a,s=[],u=!0,c=!1;
  try{
  if(o=(r=r.call(t)).next,0===e){
  if(Object(r)!==r)return;
  u=!1}
  else for(;
  !(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);
  u=!0);
  }
  catch(t){
  c=!0,i=t}
  finally{
  try{
  if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}
  finally{
  if(c)throw i}
  }
  return s}
  }
  (t,e)||function(t,e){
  if(t){
  if("string"==typeof t)return c(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}
  }
  (t,e)||function(){
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
  ()}
  function c(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  var l,f=function(t,e,r,n){
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
  ))}
  ,d=location.href,h=/nhaccuatui\.com\/api(\/v\d+)?(\/media\/info|\/playing\/playlist|\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i,
  p=t=>{
  var e;
  return null===(e=t.streamURL)||void 0===e?void 0:e.map(e=>{
  var r,a,s,u,c,l=(null===(r=n.r[e.typeUI])||void 0===r?void 0:r.label)||e.typeUI;
  try{
  c=Object(i.i18n)(null===(a=n.r[e.typeUI])||void 0===a?void 0:a.i18n_label)||l}
  catch(t){
  c=l}
  return{
  type:Object(o.e)(e.stream)||"audio",ext:(null===(u=null===(s=e.stream)||void 0===s?void 0:s.match(/\.(\w+)\?/))||
  void 0===u?void 0:u[1])||"mp3",filename:`${t.name}
  ${t.artistName?" - "+t.artistName:""}
  `||document.title,title:`${t.name}
  ${t.artistName?" - "+t.artistName:""}
  `||document.title,quality:l,i18n_quality:c,resolution:e.typeUI,url:e.stream}
  }
  )}
  ,v=()=>{
  var t,e,r,n=document.querySelector('script[type="application/json"]#__NUXT_DATA__');
  if(!n)return[];
  try{
  var i=JSON.parse(n.innerText);
  return(t=i,e=i.map(t=>{
  if("string"==typeof t&&t.includes('"streamURL"'))try{
  return JSON.parse(t)}
  catch(e){
  return console.error(e),t}
  return t}
  ).filter(t=>t&&"object"==typeof t&&Object.keys(t).length>0&&Object.keys(t).includes("streamURL")).map(t=>Object.fromEntries(Object.entries(t).filter(t=>{
  var e=u(t,1)[0];
  return["key","artistName","name","qualityDownload","streamURL"].includes(e)}
  ))),r=e=>Array.isArray(e)?e.map(e=>"number"!=typeof e?e:t[e]&&"object"==typeof t[e]?r(t[e]):t[e]):
  Object.fromEntries(Object.entries(e).map(e=>{
  var n=u(e,2),i=n[0],o=n[1];
  return"number"!=typeof o?[i,o]:t[o]&&"object"==typeof t[o]?[i,r(t[o])]:[i,t[o]]}
  )),e.map(t=>r(t))).flatMap(t=>p(t))}
  catch(t){
  return console.error(t),[]}
  }
  ,m=t=>{
  var e=[],r=t=>Array.isArray(t)?t:t?[t]:[],n=t=>{
  var r=null!=t?t:[];
  if(Array.isArray(r))for(var n=0;
  n<r.length;
  n++){
  var i=r[n];
  i&&e.push(i)}
  };
  if(Array.isArray(t))for(var i=0;
  i<t.length;
  i++)n(p(t[i]));
  (null==t?void 0:t.streamURL)&&n(p(t));
  var o=r(null==t?void 0:t.items);
  if(o.length)for(var a=0;
  a<o.length;
  a++)n(p(o[a]));
  var s=r(null==t?void 0:t.listSong);
  if(s.length)for(var u=0;
  u<s.length;
  u++)n(p(s[u]));
  var c=r(null==t?void 0:t.list);
  if(c.length)for(var l=0;
  l<c.length;
  l++){
  var f=c[l];
  if(f)if(f.streamURL)n(p(f));
  else{
  var d=r(f.child);
  if(d.length)for(var h=0;
  h<d.length;
  h++){
  var m=d[h];
  if(m)if(m.detail)try{
  var y=JSON.parse(m.detail);
  n(p(y))}
  catch(t){
  console.error(t)}
  else for(var g=[...r(m.items),...r(m.listSong)],b=0;
  b<g.length;
  b++)n(p(g[b]))}
  }
  }
  return n(v()),e}
  ,y={
  getDomains:()=>["nhaccuatui.com"],addNode:()=>['audio[preload="auto"]',".sc-chKoCp"],isMiniPlayerNode:
  t=>!!t.matches(".sc-chKoCp"),forceUpdate(){
  location.href!==d&&(EE.emit("widget.forceUpdate"),d=location.href,l=void 0)}
  ,parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return h.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return f(void 0,void 0,void 0,a().m((function t(){
  var n,i,s;
  return a().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(t.p=0,(n=JSON.parse(r))&&(n.song||n.video||n.playlist||n.data)){
  t.n=1;
  break}
  throw new Error;
  case 1:return i=[],n.data&&i.push(...m(n.data)),t.a(2,i);
  case 2:if(t.p=2,t.v,!e.cacheUrl){
  t.n=3;
  break}
  return(s=Object(o.f)(e.cacheUrl)).type=Object(o.e)(s.url),t.a(2,[s]);
  case 3:return t.a(2,[])}
  }
  ),t,null,[[0,2]])}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:()=>"beta.nhaccuatui.com"==location.hostname,getUrl:t=>{
  var e=t.url;
  if(l)return[Object.assign(Object.assign({
  }
  ,l),{
  cacheUrl:e}
  )]}
  }
  ],default:{
  getUrl:t=>{
  var e=t.node;
  return!l||(null==l?void 0:l.url).includes("/video/")&&"AUDIO"==e.nodeName?v():[l]}
  }
  ,processRequestIds:t=>{
  if(t.url.match(h))return l=t,EE.emit("widget.forceUpdate"),!0}
  };
  e.default=y};
