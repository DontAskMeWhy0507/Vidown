// Module 281 - Savior Motphimtv_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(0),i=r(14),o=r(20),a=r(1),s=r(6),u=r(31),c=r(23);
  function l(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);
  return f(c,"_invoke",function(r,n,i){
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
  var d=[][n]?e(e([][n]())):(f(e={
  }
  ,n,(function(){
  return this}
  )),e),h=c.prototype=s.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,f(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return u.prototype=c,f(h,"constructor",c),f(c,"constructor",u),u.displayName="GeneratorFunction",f(c,
  i,"GeneratorFunction"),f(h),f(h,i,"Generator"),f(h,n,(function(){
  return this}
  )),f(h,"toString",(function(){
  return"[object Generator]"}
  )),(l=function(){
  return{
  w:o,m:p}
  }
  )()}
  function f(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (f=function(t,e,r,n){
  function o(e,r){
  f(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  var d,h=function(t,e,r,n){
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
  ,p={
  }
  ,v=(t,e)=>h(void 0,void 0,void 0,l().m((function r(){
  var i,o;
  return l().w((function(r){
  for(;;
  )switch(r.n){
  case 0:if(e[t]){
  r.n=3;
  break}
  return r.n=1,Object(n.sendMessage)({
  type:a.b.GET_URL}
  );
  case 1:if(!(i=r.v)||!i.url){
  r.n=2;
  break}
  return o=i.url.find(t=>t.url.includes(".m3u8")).url,e[t]=o,r.a(2,o);
  case 2:r.n=4;
  break;
  case 3:return r.a(2,e[t]);
  case 4:return r.a(2)}
  }
  ),r)}
  ))),m={
  getDomains:()=>["motphimtv","motphimm.com","cphimmoi.com","vuviphim.co","motphimtw.com","subnhanhs.com",
  "subnhanhss.net","motchill.","motphim.","motphimtvv.","motchjll.","motphims1","phimthuyetminh.top",
  "cobephim","phim.nguonc.","tramphim."],siteMatcher:(t,e)=>/motchill[a-z0-9]*|gogophim[a-z0-9]*./i.test(t),
  parse:{
  sources:[...(null===(d=o.a.parse)||void 0===d?void 0:d.sources)||[],{
  checkSource:t=>t.url.includes("s6.kkphimplayer6.com"),parse:t=>{
  var e=t.media,r=t.response;
  return h(void 0,void 0,void 0,l().m((function t(){
  var n,i;
  return l().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(s.e)(r,e);
  case 1:return(i=t.v)[0].play_list=null===(n=i[0].play_list)||void 0===n?void 0:n.split("#EXT-X-DISCONTINUITY").filter(t=>!(t.match(/^\s*#ext-x-key:method=none/i)||
  t.length<100)).join("\n"),t.a(2,i)}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return e.includes("https://hls.streamvda.top")||/\/\/embed\d*\.streamc\.xyz/i.test(e)}
  ,parse:t=>{
  var e=t.media;
  return h(void 0,void 0,void 0,l().m((function t(){
  var r,i;
  return l().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(n.sendMessage)({
  type:a.b.GET_URL,params:{
  url:e.url}
  }
  );
  case 1:return r=t.v,(i=Object.assign({
  }
  ,e)).play_list=r.url,i.ext="m3u8",i.exts=["m3u8"],i.fixName&&(i.filename=i.fixName),i.filename&&i.filename.length<10&&
  (i.filename=document.title),t.a(2,[i])}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  try{
  if("m3u8"==e.ext){
  if(r.match(/<\?xml/i)){
  var n=new URL(e.url);
  return Object(i.b)(r,e.filename,n.origin)}
  if(r.match(/#extm3u/i))return Object(s.e)(r,e)}
  return[e]}
  catch(t){
  return console.warn(t),[e]}
  }
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/vidsugar\.com\/.+api\.json/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  try{
  var n=JSON.parse(r);
  n.proxy=atob(n.proxy),n.cdn=atob(n.cdn);
  var i=["#EXTM3U","#EXT-X-VERSION:"+n.version,"#EXT-X-TARGETDURATION:"+n.targetDuration,"#EXT-X-MEDIA-SEQUENCE:0"];
  n.chunks.forEach((t,e)=>{
  i.push(`#EXTINF:${t}
  ,`),i.push(n.proxy+encodeURIComponent(`${n.cdn}
  /${e}
  .html`))}
  ),i.push("#EXT-X-ENDLIST");
  var o=e;
  return o.play_list=i.join("\n"),o.url=o.url.replace("api.json","chunklist.m3u8"),o.filename=document.title,
  [o]}
  catch(t){
  return[]}
  }
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/vidsugar\.com\/.+chunklist\.m3u8/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  try{
  var n=r,i=[];
  (n=n.split("\n").map(t=>t.includes("url=")?t=(t=(t=t.split("url=")[1]).replaceAll("%2F","/")).replaceAll("%3A",
  ":"):t)).forEach(t=>{
  i.push(t)}
  );
  var o=e;
  return o.play_list=i.join("\n"),o.filename=document.title,[o]}
  catch(t){
  return[]}
  }
  }
  ]}
  ,urls:[...o.a.urls||[],{
  checkUrl:t=>t.url.includes("ads-vast"),getUrl:()=>[]}
  ,{
  checkUrl:t=>t.url.includes("stream.hlstream"),getUrl:t=>t.url+"/master.html?cdn=false",mediaObjectChange:
  t=>{
  var e=t.mediaObject;
  e.ext="m3u8",e.exts=["m3u8"]}
  }
  ,{
  checkUrl:t=>!!t.url.match(/haivan\.[a-zA-Z]+\/player/),getUrl:t=>{
  var e=t.url,r=t.node;
  return h(void 0,void 0,void 0,l().m((function t(){
  var i,o;
  return l().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:return o=r,t.n=1,Object(n.sleep)(1e3);
  case 1:if(t.p=1,null===(i=o.contentDocument)||void 0===i?void 0:i.querySelectorAll(".list-server li").length){
  t.n=2;
  break}
  return o.contentWindow?o.contentWindow.onload=()=>{
  setTimeout(()=>{
  EE.emit("widget.updateMedia")}
  ,1e3)}
  :setTimeout(()=>{
  EE.emit("widget.updateMedia")}
  ,1e3),t.a(2);
  case 2:return t.n=3,v(e,p);
  case 3:return t.a(2,t.v);
  case 4:return t.p=4,t.v,t.n=5,v(e,p);
  case 5:return t.a(2,t.v)}
  }
  ),t,null,[[1,4]])}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  e.referrer=r.src}
  }
  ,{
  checkUrl:t=>t.url.includes("vuviphims.net"),getUrl:t=>{
  var e=t.url;
  return h(void 0,void 0,void 0,l().m((function t(){
  var r;
  return l().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(p[e]){
  t.n=3;
  break}
  return t.n=1,Object(n.sendMessage)({
  type:a.b.GET_URL}
  );
  case 1:if(!(r=t.v)||!r.url){
  t.n=2;
  break}
  return p[e]=r.url,t.a(2,r.url);
  case 2:t.n=4;
  break;
  case 3:return t.a(2,p[e]);
  case 4:return t.a(2)}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>((t=>{
  delete t.referrer,t.skipReferrer=!0}
  )(t.mediaObject),"video")}
  ,{
  checkUrl:t=>t.url.includes("t4vstream.xyz/"),getUrl:t=>t.url,mediaObjectChange:t=>{
  var e=t.mediaObject;
  return e.ext="mp4",e.exts=["mp4"],e.referrer=location.href,"video"}
  }
  ],idsProcess(t){
  var e,r=t.defaultIds,n=t.id,i=t.index;
  if(/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)/i.test(n.url)){
  6!=Number((null===(e=n.url.match(/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i))||
  void 0===e?void 0:e[2])||"0")&&r.splice(i,1)}
  "m3u8"==n.ext&&(n.skipUrlToCombineHls=!0)}
  };
  e.default=Object(c.a)(u.a,["parse","urls"])(m)};
