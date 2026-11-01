// Module 293 - Savior Nhac_vn Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(9),i=r(3),o=r(28);
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
  var u,c=function(t,e,r,n){
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
  ,l=location.href,f={
  siteMatcher:(t,e)=>t.includes("nhac.vn")&&/youtube.com\/embed\/([a-z0-9\-_]+)/i.test(e||""),forceUpdate(){
  location.href!==l&&(EE.emit("widget.forceUpdate"),l=location.href)}
  ,getDomains:()=>["nhac.vn"],parse:{
  sources:[{
  checkSource:t=>{
  var e;
  return Boolean(null===(e=t.cacheUrl)||void 0===e?void 0:e.match(/youtube.com\/embed\/([a-z0-9\-_]+)/i))||
  /youtube\.com/i.test(t.url)}
  ,parse:t=>{
  var e=t.media;
  return o.a.parse(e.url)}
  }
  ]}
  ,isMiniPlayerNode:t=>"VIDEO"==t.nodeName&&Boolean(t.closest("#myalbum-player")),urls:[{
  checkUrl:t=>{
  var e,r,n=t.node;
  return Boolean(null===(r=null===(e=n.closest("#myalbum-player, .youtube-player"))||void 0===e?void 0:
  e.parentElement)||void 0===r?void 0:r.querySelector('.youtube-player:not([style*="display: none"]'))}
  ,getUrl(){
  var t,e,r=document.querySelector("#list-songs-of-the-album li.items.onpause, #list-songs-of-the-album li.items.playing"),
  n=null===(e=null===(t=null==r?void 0:r.getAttribute("onclick"))||void 0===t?void 0:t.match(/reloadYtb\(\d+, *[`'"]([^`'"]+)[`'"]/i))||
  void 0===e?void 0:e[1];
  if(n){
  var i="https://www.youtube.com/watch?v="+n;
  return u!=i&&(u=i,EE.emit("widget.forceUpdate")),i}
  }
  ,mediaObjectChange(t){
  var e,r,n,i,o=t.mediaObject,a=t.node;
  if(o.url.includes("youtube.com")){
  o.cacheUrl=a.getAttribute("src")||"";
  var s=document.querySelector("#list-songs-of-the-album li.items.onpause, #list-songs-of-the-album li.items.playing");
  if(s){
  var u=null===(r=null===(e=s.querySelector(".name"))||void 0===e?void 0:e.innerText)||void 0===r?void 0:
  r.trim(),c=null===(i=null===(n=s.querySelector(".artist"))||void 0===n?void 0:n.innerText)||void 0===i?
  void 0:i.trim(),l=`${u}
  ${c?" - "+c:""}
  `;
  o.filename=l}
  return o.ext="mp4",o.exts=["mp4"],"video"}
  }
  }
  ,{
  checkUrl:t=>{
  var e=t.node;
  return Boolean(e.closest("#song-list-player, .song-list-player, #myalbum-player, .album-player"))}
  ,getUrl(){
  var t;
  try{
  var e=Array.from(document.getElementsByTagName("script")).filter(t=>t.innerText.includes("sources")).map(t=>t.innerText)[0],
  r=(null===(t=e.match(/playlist: (\[.+\]),/i))||void 0===t?void 0:t[1])||"";
  return JSON.parse(r).map(t=>{
  var e,r=t.description||t.media_desc,o=`${t.title||t.media_title}
  ${r?" - "+r:""}
  `;
  return t.sources.map(t=>{
  var e=Object(i.f)(t.file);
  e.filename=o;
  var r=Number(t.label.replace(/k(bps)?/i,""));
  e.resolution=r+"p";
  var a=r<300?n.b.QUALITY_TYPES[n.a.QL_VIDEO_SMALL]:n.b.QUALITY_TYPES[n.a.QL_VIDEO_MEDIUM];
  return e.quality=a.quality,e.i18n_quality=a.i18n_quality,e.type=Object(i.e)(t.file),e}
  ).concat((null===(e=t.tracks)||void 0===e?void 0:e.map(t=>{
  var e=Object(i.f)(t.file);
  return e.filename=o,e.quality=t.label,e.i18n_ext=e.ext,e.type="subtitles",e.isSubtitles=!0,e}
  ))||[])}
  ).flat()}
  catch(t){
  return}
  }
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(null==e?void 0:e.match(/youtube.com\/embed\/([a-z0-9\-_]+)/i))}
  ,getUrl:()=>c(void 0,void 0,void 0,a().m((function t(){
  var e,r,n,i,o,s,u;
  return a().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(r=new URL(location.href).searchParams.get("st")){
  t.n=1;
  break}
  return t.a(2,"");
  case 1:if(n=null===(e=[...document.querySelectorAll("a.name")].find(t=>t.href.includes(r)))||void 0===e?
  void 0:e.closest("li")){
  t.n=2;
  break}
  return t.a(2,"");
  case 2:if(i=/reloadYtb\(.*?\`(.*?)\`.+?\)/,o=n.outerHTML,s=i.exec(o||"")){
  t.n=3;
  break}
  return t.a(2,"");
  case 3:return u=s[1],t.a(2,("https:"===location.protocol.toLowerCase()?"https:":"http:")+"//www.youtube.com/watch?v="+u)}
  }
  ),t)}
  ))),mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.ext="mp4",e.exts=["mp4"],e.cacheUrl=r.src,"video"}
  }
  ],default:{
  mediaObjectChange(t){
  var e,r,n=t.mediaObject,i=null===(e=t.node.closest(".jwplayer"))||void 0===e?void 0:e.querySelector(".jw-title");
  if(i){
  var o=null===(r=i.innerText)||void 0===r?void 0:r.trim().replace(/\n/i,"-");
  o&&(n.filename=o)}
  return n.type}
  }
  };
  e.default=f};
