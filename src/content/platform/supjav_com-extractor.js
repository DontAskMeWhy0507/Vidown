// Module 347 - Savior Supjav_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(9),o=r(0),a=r(6);
  function s(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var s=n&&n.prototype instanceof c?n:c,l=Object.create(s.prototype);
  return u(l,"_invoke",function(r,n,i){
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
  function c(){
  }
  function l(){
  }
  function f(){
  }
  e=Object.getPrototypeOf;
  var d=[][n]?e(e([][n]())):(u(e={
  }
  ,n,(function(){
  return this}
  )),e),h=f.prototype=c.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,u(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return l.prototype=f,u(h,"constructor",f),u(f,"constructor",l),l.displayName="GeneratorFunction",u(f,
  i,"GeneratorFunction"),u(h),u(h,i,"Generator"),u(h,n,(function(){
  return this}
  )),u(h,"toString",(function(){
  return"[object Generator]"}
  )),(s=function(){
  return{
  w:o,m:p}
  }
  )()}
  function u(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (u=function(t,e,r,n){
  function o(e,r){
  u(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  function c(t,e){
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
  if("string"==typeof t)return l(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}
  }
  (t,e)||function(){
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
  ()}
  function l(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  var f=function(t,e,r,n){
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
  ,d={
  }
  ,h={
  }
  ,p=[],v=/(sextb|javct|supjav)\./,m=/(cloudflarestorage|\.ws\.cdn\.cloudflare|d-s\.io|\/d\/[^/?#]+\.mp4)/i,
  y=/streamtape\..+\/get_video|tapecontent\..+\.mp4/i,g=/(dsvplay|ds2play|d0000?d|doodstream|doodwatch|ryderjet|earnvids|luluvdo|lulustream|streamtape)\./i,
  b={
  getDomains:()=>["supjav.com","javct.net","sextb."],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/streamtape\..+\/get_video/i))}
  ,parse:t=>{
  var e=t.media;
  return e.filename=document.title.split("-")[0].trim(),e.altUrl&&(e.type=""),[e]}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/streamtape\..+\/.+\.mp4/i))}
  ,parse:t=>{
  var e=t.media;
  return e.filename=document.title.split("-")[0].trim(),e.type="",[e]}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/tapecontent\..+\/.+\.mp4/i))}
  ,parse:t=>{
  var e=t.media;
  return e.filename=document.title.split("-")[0].trim(),e.quality||(e.quality=i.b.DEFAULT_QUALITY_TYPE),
  "number"==typeof e.size&&(e.size=Object(o.beautifyFileSize)(e.size)),[e]}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/\.litvp\.com\/stream\/.*\/master\.m3u8/))}
  ,parse:t=>{
  var e,r=t.media,i=t.response;
  if(r.type="video",r.filename=document.title.split("-")[0].trim(),!i.includes("#EXT")){
  if(!d[r.url])return[r];
  var a=d[r.url];
  i=a.realRes,r.referrer=a.referrer||r.referrer}
  for(var s=[],u=r.url.replace(/master\.m3u8$/,""),l=i.split("#"),f=1;
  f<l.length;
  f++){
  var h=l[f];
  if(h.match(/^EXT-X-STREAM-INF/)){
  var p=JSON.parse(JSON.stringify(r)),v=c(h.split("\n"),2),m=v[0],y=v[1],g=parseInt(m.match(/RESOLUTION=\d+x(\d+)/)[1]);
  p.url=u+y,p.resolution=Object(o.getBestFitResolution)(g)+"p",p.quality=(null===(e=n.r[p.resolution])||
  void 0===e?void 0:e.label)||n.r["480p"].label,s.push(p)}
  }
  return s}
  }
  ,{
  checkSource:()=>"supjav.com"==location.host,parse:t=>{
  var e=t.response,r=t.media;
  return f(void 0,void 0,void 0,s().m((function t(){
  var n;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(a.e)(e,r);
  case 1:return(n=t.v).map(t=>(t.removeOrigin=!0,t)),t.a(2,n)}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/\.mp4(\?|$)/i))&&m.test(e)&&v.test(location.href)}
  ,parse:t=>{
  var e=t.media;
  return e.type="video",e.filename=document.title.split("-")[0].trim(),e.quality||(e.quality=i.b.DEFAULT_QUALITY_TYPE),
  [e]}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/(ryderjet|earnvids|luluvdo|lulustream)\..+\.m3u8/i))&&v.test(location.href)}
  ,parse:t=>{
  var e=t.response,r=t.media;
  return f(void 0,void 0,void 0,s().m((function t(){
  var i,u,l,f,d,h,p,v,m,y,g,b,w,A;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(r.type="video",r.filename=document.title.split("-")[0].trim(),!e.includes("#EXT-X-STREAM-INF")){
  t.n=1;
  break}
  for(l=[],f=r.url.replace(/[^/]+\.m3u8$/,""),d=e.split("#"),h=1;
  h<d.length;
  h++)(p=d[h]).match(/^EXT-X-STREAM-INF/)&&(v=JSON.parse(JSON.stringify(r)),m=p.split("\n"),y=c(m,2),
  g=y[0],b=y[1],w=parseInt((null===(i=g.match(/RESOLUTION=\d+x(\d+)/))||void 0===i?void 0:i[1])||"0"),
  v.url=f+b.trim(),w&&(v.resolution=Object(o.getBestFitResolution)(w)+"p",v.quality=(null===(u=n.r[v.resolution])||
  void 0===u?void 0:u.label)||n.r["480p"].label),l.push(v));
  if(!l.length){
  t.n=1;
  break}
  return t.a(2,l);
  case 1:return t.n=2,Object(a.e)(e,r);
  case 2:return A=t.v,t.a(2,A.length?A:[r])}
  }
  ),t)}
  )))}
  }
  ]}
  ,processRequestIds:t=>{
  var e,r=t.url;
  if((null===(e=t.filename)||void 0===e?void 0:e.includes("master"))&&"m3u8"===t.ext)return p.push(t),
  !0;
  if("mp4"===t.ext&&m.test(r)&&v.test(location.href))return p.push(t),!0;
  if(y.test(r)&&v.test(location.href))return p.push(t),!0;
  if("m3u8"===t.ext&&/(ryderjet|earnvids|luluvdo|lulustream)\./i.test(r)&&v.test(location.href))return p.push(t),
  !0;
  if(/cdn[a-z0-9]*\.turboviplay\.com\//i.test(r)&&"m3u8"==t.ext){
  var n=r.match(/(cdn|cdn[0-9])\.turboviplay\.com\/.+\/([a-z0-9\-_]+)\/([a-z0-9\-_]+)\.m3u8/i);
  if((null==n?void 0:n.length)&&v.test(location.href)&&p.push(t),n&&n.length>2){
  var i=c(n,3);
  i[1]==i[2]&&p.push(t)}
  return!0}
  return"m3u8"===t.ext}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return/(stbturbo|turboplayers)\.xyz|turboplays\.|hglink\.to/.test(e)}
  ,getUrl:()=>p.length?p:[]}
  ,{
  checkUrl:t=>{
  var e=t.url;
  return g.test(e)}
  ,getUrl:t=>{
  var e=t.url;
  return f(void 0,void 0,void 0,s().m((function t(){
  var r;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!p.length){
  t.n=1;
  break}
  return t.a(2,p);
  case 1:if(!h[e]){
  t.n=2;
  break}
  return t.a(2,h[e]);
  case 2:return t.n=3,Object(o.sendMessage)({
  type:n.b.GET_URL}
  );
  case 3:if(!(null==(r=t.v)?void 0:r.url)){
  t.n=4;
  break}
  return h[e]=r.url,d[r.url]=r,t.a(2,r.url);
  case 4:return t.a(2,[])}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  if(d[e.url]){
  var r=d[e.url];
  e.realRes=r.realRes,e.fixName=r.title,e.referrer=r.referrer}
  }
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/(.+\.supremejav\.com)|(emturbovid\.com)/))}
  ,getUrl:t=>{
  var e=t.url;
  return f(void 0,void 0,void 0,s().m((function t(){
  var r;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!location.href.includes("supjav.")||!p.length){
  t.n=1;
  break}
  return t.a(2,p);
  case 1:if(!h[e]){
  t.n=2;
  break}
  return t.a(2,h[e]);
  case 2:return t.n=3,Object(o.sendMessage)({
  type:n.b.GET_URL}
  );
  case 3:if(!(r=t.v)||!r.url){
  t.n=4;
  break}
  return h[e]=r.url,d[r.url]=r,t.a(2,r.url);
  case 4:return t.a(2,p)}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  if(d[e.url]){
  var r=d[e.url];
  return e.realRes=r.realRes,e.fixName=r.title,void(e.referrer=r.referrer)}
  }
  }
  ],default:{
  mediaObjectChange:t=>{
  var e=t.mediaObject,r=e.url;
  return e.filename=document.title.split("-")[0].trim(),r.match(/streamtape\..+\/get_video/i)?"video":
  r.match(/streamtape\..+\/.+\.mp4/i)?void 0:r.match(/tapecontent\..+\.mp4/i)||r.match(/videovard\..+\/.m3u8/i)||
  r.match(/\.mp4(\?|$)/i)&&m.test(r)||r.match(/(ryderjet|earnvids|luluvdo|lulustream)\..+\.m3u8/i)?"video":
  void 0}
  }
  };
  e.default=b};
