// Module 254 - Savior Instagram_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(14),i=r(1),o=r(0),a=r(3),s=r(12);
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
  var l=function(t,e,r,n){
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
  ,f=new Map,d={
  "x-asbd-id":198387,"x-csrftoken":"xvl5U8HSBDNKZnlUyZpYttlfwNqlgyLX","x-ig-app-id":936619743392459,
  "x-ig-www-claim":"hmac.AR3pCgbC5oTDxbVJznk08d3AjTjWdiH1XAOV0VUdxuR-q5tY"};
  function h(t){
  var e,r=t.closest("article");
  return null===(e=Object(o.queryAll)("a",r||document).filter(t=>t.href.includes("/p/")&&!t.href.includes("liked_by"))[0])||
  void 0===e?void 0:e.href}
  function p(t){
  var e,r,n,i,o,a,s,u,c,l,f,d,h,p,v,m,y,g,b,w,A,_,E,S=document.title,O=t.closest("article"),x=document.querySelector("h1");
  if(!O&&location.pathname.startsWith("/p/")&&(O=t.closest('[role="main"]'),!x)){
  var k=null==O?void 0:O.querySelector('hr+div .html-div [dir="auto"]');
  x=null===(e=null==k?void 0:k.firstElementChild)||void 0===e?void 0:e.lastElementChild}
  if(location.pathname.startsWith("/reels")){
  var M=null===(r=t.parentElement)||void 0===r?void 0:r.querySelector('[role="presentation"] div:not([class])[role="button"] [dir="auto"] span');
  if(M)return null===(n=M.innerText)||void 0===n?void 0:n.trim();
  if(M=null===(i=t.parentElement)||void 0===i?void 0:i.querySelector('[role="presentation"] [dir="auto"] span'))return null===(o=M.innerText)||
  void 0===o?void 0:o.trim();
  if(M=null===(s=null===(a=t.closest("div:has(img)"))||void 0===a?void 0:a.parentElement)||void 0===s?
  void 0:s.querySelector('[role="presentation"]'))return null===(u=M.innerText)||void 0===u?void 0:u.trim()}
  if(location.pathname.startsWith("/reel/")){
  var T=null==O?void 0:O.querySelector('[role="presentation"] h1');
  if(T)return null===(c=T.innerText)||void 0===c?void 0:c.trim();
  var I=null==O?void 0:O.querySelector('[role="presentation"] [dir="auto"] span');
  if(I)return`${null===(l=I.innerText)||void 0===l?void 0:l.trim()}
   - ${(null===(f=location.pathname.match(/reel\/([a-z0-9\-_]+)\/?/i))||void 0===f?void 0:f[1])||Date.now()}
  `}
  if(location.pathname.startsWith("/stories/")){
  var j=null===(d=t.closest("section"))||void 0===d?void 0:d.querySelectorAll("a");
  if(!j)return"";
  var C=Array.from(j).filter(t=>{
  var e;
  return!(null===(e=t.getAttribute("href"))||void 0===e?void 0:e.startsWith("/stories/"))}
  );
  return(null==C?void 0:C[1].innerText)?C[1].innerText:null==C?void 0:C[2].innerText}
  if(x)return null===(h=null==x?void 0:x.innerText)||void 0===h?void 0:h.trim().slice(0,40);
  if(!O)return S;
  var B=null===(v=null===(p=t.closest("article>div>div"))||void 0===p?void 0:p.nextElementSibling)||
  void 0===v?void 0:v.querySelector('section + div a:not([href$="comments/"]) span');
  if(B){
  var U=null===(m=B.innerText)||void 0===m?void 0:m.trim(),P=null===(w=null===(b=null===(g=null===(y=t.closest("article>div>div"))||
  void 0===y?void 0:y.nextElementSibling)||void 0===g?void 0:g.querySelector("section + div>div+span span"))||
  void 0===b?void 0:b.innerText)||void 0===w?void 0:w.trim();
  return P?`${U}
   - ${P}
  `:U}
  var N=null===(_=null===(A=O.querySelector('a[href] span[dir="auto"]'))||void 0===A?void 0:A.innerText)||
  void 0===_?void 0:_.trim();
  if(N)return N;
  var D=null===(E=O.querySelector("h1"))||void 0===E?void 0:E.textContent;
  return D||S}
  var v={
  getDomains:()=>["instagram.com"],getCustomParent:t=>{
  var e;
  return location.href.includes("/reels/")?Object(s.d)(t):"IMG"===t.tagName?t.closest("._aagu"):null!==(e=t.closest("li"))&&
  void 0!==e?e:t.closest("div:not([class])")}
  ,shouldWidgetAttachToParentNode:t=>"IMG"===t.tagName,getImageNode:t=>Object(s.l)(t)&&t.closest("._aagu")?
  t:null,shouldShowWidgetForImage:()=>!0,parse:{
  sources:[{
  checkSource:t=>"image"===t.type,parse:t=>{
  var e=t.media;
  return l(void 0,void 0,void 0,u().m((function t(){
  var r,n,i,a,s,c,l,d,h,p,v,m,y;
  return u().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(!(c=null===(r=e.query)||void 0===r?void 0:r.pk)){
  t.n=7;
  break}
  if(t.p=1,l=[],!(d=f.get(c))){
  t.n=2;
  break}
  l=d,t.n=5;
  break;
  case 2:return h=Object(o.getCookies)(document.cookie),p=null===(n=document.documentElement.innerHTML.match(/\"x-ig-app-id\":\s*\"(\w+)\"/i))||
  void 0===n?void 0:n[1],t.n=3,fetch(`https://www.instagram.com/api/v1/media/${c}
  /info/`,{
  headers:{
  "x-csrftoken":h.csrftoken,"x-ig-app-id":p||""}
  }
  );
  case 3:return v=t.v,t.n=4,v.json();
  case 4:m=t.v,l=(null===(s=null===(a=null===(i=null==m?void 0:m.items)||void 0===i?void 0:i[0])||void 0===a?
  void 0:a.carousel_media)||void 0===s?void 0:s.map(t=>{
  var e,r;
  return null===(r=null===(e=null==t?void 0:t.image_versions2)||void 0===e?void 0:e.candidates)||void 0===r?
  void 0:r[0].url}
  ))||[],f.set(c,l);
  case 5:l.length>=2&&(e.extraImages={
  urls:l,firstImage:l[0],secondImage:l[1],label:Object(o.i18n)("download_all_images",[String(l.length)]),
  numberOfImages:l.length}
  ),t.n=7;
  break;
  case 6:t.p=6,y=t.v,console.warn(y);
  case 7:return t.a(2,[e])}
  }
  ),t,null,[[1,6]])}
  )))}
  }
  ],default:t=>{
  var e,r=t.media,s=t.response;
  if("string"!=typeof r.url||!r.url.includes("&by")){
  var u=null===(e=/<title>\n*([\s\S]+?)\n*<\/title>/.exec(s))||void 0===e?void 0:e[1],c=/("|')video_dash_manifest("|'):\s*("|')(.+?)("|'),/.exec(s);
  if(!c){
  var l=/("|')media_id("|'):\s*("|')(.+?)("|'),/.exec(s);
  return l?fetch(`https://i.instagram.com/api/v1/media/${l[4]}
  /info/`,{
  headers:d,credentials:"include"}
  ).then(t=>t.json()).then(t=>{
  var e;
  return Object(n.d)(t.items[0].video_dash_manifest,(null===(e=t.items[0].caption)||void 0===e?void 0:
  e.text)||u).map(t=>(t.ext="mp4",t.exts=["mp4"],t))}
  ):[r]}
  var f=c[4];
  if(f)return Object(n.d)(f,u).map(t=>(t.ext="mp4",t.exts=["mp4"],t));
  var h=/("|')video_versions("|'):\s*(.+?\]),/.exec(s);
  return h?JSON.parse(h[3]).map(t=>{
  var e=Object(a.f)(t.url);
  return e.resolution=t.height+"p",e.quality=Object(o.i18n)(i.r[e.resolution].i18n_label),e.filename=u,
  e.ext="mp4",e.exts=["mp4"],e.type="video",[e]}
  ):void 0}
  }
  }
  ,imageUrls:[{
  checkUrl:t=>t.node.matches("[savior-scanned-img]"),getUrl:t=>{
  var e=t.node,r=t.url;
  return l(void 0,void 0,void 0,u().m((function t(){
  var n,s,c;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(a.g)({
  url:r,node:e}
  );
  case 1:if(s=t.v,!e.closest("ul")&&!(null===(n=e.closest('a[role="link"]'))||void 0===n?void 0:n.querySelector('.html-div svg[role="img"]'))){
  t.n=3;
  break}
  if(c=e.getAttribute("image-instagram-pk")){
  t.n=2;
  break}
  return t.n=2,new Promise(t=>{
  Object(o.sendMessage)({
  type:i.b.SCRIPTING.INJECT,file:"image-instagram"}
  ).then(t),setTimeout(()=>{
  t(!0)}
  ,1e3)}
  );
  case 2:(c=e.getAttribute("image-instagram-pk"))&&(s.query={
  pk:c}
  );
  case 3:return t.a(2,[s])}
  }
  ),t)}
  )))}
  }
  ],urls:[{
  checkUrl:()=>/.+\/reels\/audio\/.+/.test(location.href),getUrl:t=>t.url,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="mp3",e.exts=["mp3"],e.soundOnly=!0,e.filename=document.title,"audio"}
  }
  ,{
  checkUrl:t=>{
  var e=t.node;
  return location.href.includes("/explore/")&&e.src.includes(".mp4")}
  ,getUrl:t=>t.node.src}
  ],default:{
  getUrl:t=>{
  var e=t.node,r=t.url;
  return l(void 0,void 0,void 0,u().m((function t(){
  var s,c,l,f,d,v,m;
  return u().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:return t.n=1,new Promise(t=>{
  Object(o.sendMessage)({
  type:i.b.SCRIPTING.INJECT,file:"instagram",node:e}
  ).then(t),setTimeout(()=>{
  t(!0)}
  ,1e3)}
  );
  case 1:if(t.p=1,c=p(e),l=JSON.parse(e.getAttribute("savior-video-detail")||"{}")){
  t.n=2;
  break}
  throw new Error("No data");
  case 2:if(l.caption&&(c=l.caption),f=(null===(s=l.dashInfo)||void 0===s?void 0:s.video_dash_manifest)||
  l.video_dash_manifest||l.videoDashManifest||l.manifest,!l.videoResources){
  t.n=3;
  break}
  return t.a(2,l.videoResources.map(t=>{
  var e,r=Object(a.f)(t.src);
  r.type="video",r.filename=c,r.resolution=t.configHeight+"p";
  var n=Object(o.getBestFitResolution)(t.configHeight)||`${t.configWidth}
  x${t.configHeight}
  `||r.resolution;
  return r.quality=null===(e=i.r[n+"p"])||void 0===e?void 0:e.label,r}
  ));
  case 3:if(!f){
  t.n=4;
  break}
  return d=Object(n.d)(f,c),t.a(2,d);
  case 4:if(!l.sdSrc&&!l.hdSrc){
  t.n=5;
  break}
  return v=["sdSrc","hdSrc"],t.a(2,v.map(t=>{
  var e=l[t],r=Object(a.f)(e);
  r.filename=c,r.type="video";
  var n="hdSrc"==t?i.r["720p"]:i.r["480p"];
  return r.quality=n.label,r.i18n_quality=Object(o.i18n)(n.i18n_label),r.filename=l.videoFBID||document.title,
  r}
  ));
  case 5:if(!l.videoSrc&&!l.videoUrl){
  t.n=6;
  break}
  return t.a(2,l.videoSrc||l.videoUrl);
  case 6:t.n=8;
  break;
  case 7:t.p=7,m=t.v,console.warn(m);
  case 8:if(!r.includes(".mp4")){
  t.n=9;
  break}
  return t.a(2,r);
  case 9:return t.a(2,h(e))}
  }
  ),t,null,[[1,7]])}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.headers=d,e.includeCredentials=!0,"video"}
  }
  ,addNode:function(){
  return['video[src*="instagram"]']}
  ,toggleLight:{
  turnOff:{
  parentUpdate(t){
  var e,r=t.closest("[role=presentation]");
  r&&!r.classList.contains("--savior-overlay-z-index-top")&&r.classList.add("--savior-overlay-z-index-reset"),
  Array.from((null===(e=t.parentElement)||void 0===e?void 0:e.children)||[]).filter(e=>{
  var r,n;
  return e!=t||(null===(n=null===(r=e.style)||void 0===r?void 0:r.paddingBottom)||void 0===n?void 0:
  n.endsWith("%"))}
  ).forEach(t=>{
  t.classList.contains("--savior-overlay-z-index-top")||t.classList.add("--savior-overlay-z-index-reset")}
  ),location.pathname.startsWith("/reels")&&(t.style.overflow="hidden")}
  }
  ,turnOn:{
  parentUpdate(t){
  location.pathname.startsWith("/reels")&&(t.style.overflow="auto")}
  }
  }
  };
  e.default=v};
