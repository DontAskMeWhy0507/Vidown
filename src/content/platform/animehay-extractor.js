// Module 198 - Savior Animehay Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(6),i=r(0),o=r(1);
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
  var u,c,l,f=function(t,e,r,n){
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
  ,d=null===(u=document.querySelector("#list_sv .bg-green, #list_sv .active"))||void 0===u?void 0:u.getAttribute("name"),
  h=0,p={
  };
  function v(t){
  var e;
  return f(this,void 0,void 0,a().m((function r(){
  var n,s,u,c;
  return a().w((function(r){
  for(;;
  )switch(r.p=r.n){
  case 0:if(!p[t]){
  r.n=1;
  break}
  return r.a(2,p[t]);
  case 1:return r.p=1,r.n=2,Object(i.sendMessage)({
  type:o.b.GET_URL,params:{
  url:t}
  }
  );
  case 2:if(u=e=r.v,s=null===u){
  r.n=3;
  break}
  s=void 0===e;
  case 3:if(!s){
  r.n=4;
  break}
  c=void 0,r.n=5;
  break;
  case 4:c=e.url;
  case 5:return n=c,p[t]=n,r.a(2,n);
  case 6:return r.p=6,r.v,r.a(2,null)}
  }
  ),r,null,[[1,6]])}
  )))}
  var m={
  getDomains:()=>["animehay."],forceUpdate(){
  var t,e=null===(t=document.querySelector("#list_sv .bg-green, #list_sv .active"))||void 0===t?void 0:
  t.getAttribute("name");
  e!=d&&(d=e,EE.emit("widget.forceUpdate"),h++)}
  ,parse:{
  sources:[{
  checkSource:t=>t.url.includes("ssplay."),parse:t=>{
  var e=t.media,r=t.response;
  return f(void 0,void 0,void 0,a().m((function t(){
  return a().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return e.url=c.url,t.a(2,Object(n.e)(r,e))}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/(playlist|master)\.(m3u8|txt)/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return f(void 0,void 0,void 0,a().m((function t(){
  var i,s;
  return a().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(n.e)(r,e);
  case 1:return i=t.v,t.n=2,Promise.all(i.map(t=>new Promise(n=>"object"==typeof t.url?n(Promise.all([v(t.url.videoUrl),
  v(t.url.audioUrl)]).then(t=>({
  videoUrl:t[0],audioUrl:t[1]}
  ))):[e.url,"https://google.com"].includes(t.url)?n(r):n(v(t.url)))));
  case 2:return s=t.v,t.a(2,i.map((t,e)=>("string"==typeof t.url&&(t.ext="m3u8",t.play_list=s[e]||p[t.url]||
  t.play_list),"audio"==t.type&&(t.ext="mp3",t.exts=["m3u8"],t.soundOnly=!0,t.resolution="128kbps",t.quality=o.r["480p"].label,
  t._hls=!0),t)))}
  }
  ),t)}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:t=>t.url.includes("ssplay."),getUrl:t=>{
  var e=t.url;
  return c?e:[]}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.ext="m3u8",e.exts=["m3u8"],e.cacheUrl=r.src,"video"}
  }
  ],default:{
  getUrl:t=>{
  var e=t.ids,r=t.url;
  if(l)return l.url;
  if(h>-1)try{
  return e[h].url}
  catch(t){
  return[]}
  return e.length?e[e.length-1].url:r}
  ,mediaObjectChange(t){
  var e,r=t.mediaObject;
  return(null===(e=r.filename)||void 0===e?void 0:e.match(/(playlist|master)\.(txt|m3u8)/))||r.url.match(/(playlist|master)\.(txt|m3u8)/)?
  (r.ext="m3u8",r.exts=["m3u8"],"video"):r.type}
  }
  ,processRequestIds:t=>"TOK"==d&&t.url.includes(".m3u8")?(l=t,!0):t.url.includes("ssplay.")?(c=t,!0):
  void 0};
  e.default=m};
