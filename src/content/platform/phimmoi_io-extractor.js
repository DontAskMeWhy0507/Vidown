// Module 311 - Savior Phimmoi_io Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(0),i=r(3),o=r(1),a=r(6),s=r(31);
  function u(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var u=n&&n.prototype instanceof s?n:s,l=Object.create(u.prototype);
  return c(l,"_invoke",function(r,n,i){
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
  (r,i,o),!0),l}
  var a={
  };
  function s(){
  }
  function l(){
  }
  function f(){
  }
  e=Object.getPrototypeOf;
  var d=[][n]?e(e([][n]())):(c(e={
  }
  ,n,(function(){
  return this}
  )),e),h=f.prototype=s.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return l.prototype=f,c(h,"constructor",f),c(f,"constructor",l),l.displayName="GeneratorFunction",c(f,
  i,"GeneratorFunction"),c(h),c(h,i,"Generator"),c(h,n,(function(){
  return this}
  )),c(h,"toString",(function(){
  return"[object Generator]"}
  )),(u=function(){
  return{
  w:o,m:p}
  }
  )()}
  function c(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (c=function(t,e,r,n){
  function o(e,r){
  c(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  function l(t,e){
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
  (t,e)||d(t,e)||function(){
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
  ()}
  function f(t,e){
  var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(!r){
  if(Array.isArray(t)||(r=d(t))||e&&t&&"number"==typeof t.length){
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
  function d(t,e){
  if(t){
  if("string"==typeof t)return h(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}
  }
  function h(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  var p=function(t,e,r,n){
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
  ,v={
  }
  ,m=[],y={
  siteMatcher:t=>/^(www\.)?phimmoi\./.test(t),urls:[...s.a.urls,{
  checkUrl:t=>t.url.includes("drive.google.com"),getUrl:t=>{
  var e=t.url;
  return p(void 0,void 0,void 0,u().m((function t(){
  var r,a,s,c,d,h,p,v;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(r=e.split("/"),a=(r.pop()||r.pop())&&r.pop(),s=`${r[0]}
  //${r[2]}
  /u/0/get_video_info?docid=${a}
  `,m.includes(s)){
  t.n=2;
  break}
  return t.n=1,Object(n.send)("GET",s);
  case 1:c=t.v.responseText,m.push(s),c=c.split("&"),d=[],h=f(c);
  try{
  for(h.s();
  !(p=h.n()).done;
  )(v=p.value).match(/^fmt_stream_map/)&&(d=decodeURIComponent(v.split("=")[1]).split(","))}
  catch(t){
  h.e(t)}
  finally{
  h.f()}
  return t.a(2,d.map(t=>{
  var e=l(t.split("|"),2),r=e[0],a=e[1],s=Object(i.f)(a),u=parseInt(r);
  return 18===u&&(s.resolution="360p"),22===u&&(s.resolution="720p"),s.quality=Object(n.i18n)(o.r[s.resolution].i18n_label),
  s.ext="mp4",s.type="video",s}
  ));
  case 2:return t.a(2)}
  }
  ),t)}
  )))}
  }
  ,{
  checkUrl:t=>{
  var e=t.url,r=t.node;
  return"VIDEO"==r.nodeName&&e.startsWith("blob:")&&Boolean(r.closest("#media-player-box, #watch-block, #block-player"))}
  ,getUrl:t=>{
  var e,r,n=t.node,i=t.url,o=null===(e=n.closest("#media-player-box, #watch-block, #block-player"))||
  void 0===e?void 0:e.parentElement,a=null===(r=null==o?void 0:o.querySelector("a.active"))||void 0===r?
  void 0:r.getAttribute("data-link");
  return a?(a.startsWith("http")||(a=location.origin+a),a):i}
  ,mediaObjectChange(t){
  var e=t.mediaObject;
  if(!e.url.startsWith("blob"))return e.ext="m3u8",e.exts=["m3u8"],"video"}
  }
  ],default:{
  getUrl:t=>{
  var e=t.url;
  return p(void 0,void 0,void 0,u().m((function t(){
  var r;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!v[e]){
  t.n=1;
  break}
  return t.a(2,v[e]);
  case 1:return t.n=2,Object(n.sendMessage)({
  type:o.b.GET_URL}
  );
  case 2:if(!(r=t.v)||!r.url){
  t.n=3;
  break}
  return r.url=r.url.map(t=>(t.filename=document.title,t)),v[e]=r.url,t.a(2,r.url);
  case 3:return t.a(2)}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  if(v[r.src])return e.ext="mp4",e.exts=["mp4"],"video"}
  }
  ,parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return/\.(m3u8|pdf)/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return p(void 0,void 0,void 0,u().m((function t(){
  var i,o,s,c,l,d;
  return u().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(t.p=0,r.match(/#extm3u/)){
  t.n=2;
  break}
  return t.n=1,fetch(e.url).then(t=>t.text());
  case 1:r=t.v;
  case 2:t.n=4;
  break;
  case 3:t.p=3,t.v;
  case 4:return t.n=5,Object(a.e)(r,e);
  case 5:i=t.v,o=f(i),t.p=6,o.s();
  case 7:if((s=o.n()).done){
  t.n=14;
  break}
  if(c=s.value,t.p=8,c.url!=e.url){
  t.n=9;
  break}
  return c.play_list=r,t.a(3,13);
  case 9:return t.n=10,Object(n.send)("GET",c.url);
  case 10:if((l=t.v.responseText).match(/#extm3u/)){
  t.n=11;
  break}
  throw new Error;
  case 11:c.play_list=l,c.url=location.href,t.n=13;
  break;
  case 12:t.p=12,t.v;
  case 13:t.n=7;
  break;
  case 14:t.n=16;
  break;
  case 15:t.p=15,d=t.v,o.e(d);
  case 16:return t.p=16,o.f(),t.f(16);
  case 17:return i.forEach(t=>{
  t.ext="m3u8",t.exts=["m3u8"]}
  ),t.a(2,i)}
  }
  ),t,null,[[8,12],[6,15,16,17],[0,3]])}
  )))}
  }
  ,...s.a.parse.sources]}
  };
  e.default=y};
