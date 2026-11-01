// Module 446 - Savior Phimdinhcao_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(6),i=r(0),o=r(1),a=r(20),s=r(23),u=r(3);
  function c(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function o(r,n,i,o){
  var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);
  return l(c,"_invoke",function(r,n,i){
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
  function f(){
  }
  e=Object.getPrototypeOf;
  var d=[][n]?e(e([][n]())):(l(e={
  }
  ,n,(function(){
  return this}
  )),e),h=f.prototype=s.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return u.prototype=f,l(h,"constructor",f),l(f,"constructor",u),u.displayName="GeneratorFunction",l(f,
  i,"GeneratorFunction"),l(h),l(h,i,"Generator"),l(h,n,(function(){
  return this}
  )),l(h,"toString",(function(){
  return"[object Generator]"}
  )),(c=function(){
  return{
  w:o,m:p}
  }
  )()}
  function l(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (l=function(t,e,r,n){
  function o(e,r){
  l(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
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
  ))};
  var d={
  parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return/:\/\/vk\.com\/video_ext\.php/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return f(void 0,void 0,void 0,c().m((function t(){
  var a,s,l,f,d,h,p;
  return c().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(t.p=0,l=null===(a=/playerParams\s=\s({.+});/i.exec(r))||void 0===a?void 0:a[1],f=null===(s=JSON.parse(l).params)||
  void 0===s?void 0:s[0]){
  t.n=1;
  break}
  throw new Error("Cannot parse player params");
  case 1:if(e.fixName=f.md_title.replace(/&#(\d+);/g,(t,e)=>String.fromCharCode(e))||e.filename,t.p=2,
  !f.hls){
  t.n=5;
  break}
  return t.n=3,fetch(f.hls).then(t=>t.text());
  case 3:return d=t.v,t.n=4,Object(n.e)(d,e);
  case 4:return h=t.v,t.a(2,h);
  case 5:t.n=7;
  break;
  case 6:t.p=6,t.v;
  case 7:return p=["url144","url240","url360","url480","url720"].map(t=>{
  var r=f[t],n=t.replace("url","")+"p",a=Object(u.f)(r);
  return a.type="video",a.filename=e.fixName,a.resolution=n,a.i18n_quality=Object(i.i18n)(o.r[n].i18n_label),
  a.quality=o.r[n].label,a.ext="mp4",a._hls=!1,a.hls=!1,a}
  ).filter(t=>t),t.a(2,p);
  case 8:return t.p=8,t.v,t.a(2,[])}
  }
  ),t,null,[[2,6],[0,8]])}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/:\/\/vk\.com\/video_ext\.php/i))}
  ,getUrl:t=>t.url,mediaObjectChange(t){
  var e=t.mediaObject;
  t.node;
  return e.ext="m3u8",e.exts=["m3u8"],"video"}
  }
  ]};
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
  var v,m=function(t,e,r,n){
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
  ,y=[];
  e.default=Object(s.a)(d,["parse","urls"])({
  getDomains:()=>["phimlongtieng.net","phimtuoitho.","helvid.net","phimthuyetminh.fun","phimdinhcao"],
  parse:{
  sources:[...(null===(v=a.a.parse)||void 0===v?void 0:v.sources)||[],{
  checkSource:t=>{
  var e=t.url;
  return/helvid\.([a-z0-9]+)\/hash.php\?.+/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return m(void 0,void 0,void 0,h().m((function t(){
  var a,s;
  return h().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(n.e)(r,e);
  case 1:return a=t.v,s=a.map(t=>m(void 0,void 0,void 0,h().m((function e(){
  var r,n;
  return h().w((function(e){
  for(;;
  )switch(e.p=e.n){
  case 0:if(e.p=0,!location.host.match(/helvid\.([a-z0-9]+)/)){
  e.n=2;
  break}
  return e.n=1,fetch(t.url).then(t=>t.text());
  case 1:n=e.v,r={
  url:n}
  ,e.n=4;
  break;
  case 2:return e.n=3,Object(i.sendMessage)({
  type:o.b.GET_URL,params:{
  url:t.url}
  }
  );
  case 3:r=e.v;
  case 4:return t.play_list=r.url,t.originalUrl=t.url,t.url="https://google.com",t.ext="m3u8",t.exts=["m3u8"],
  e.a(2,t);
  case 5:return e.p=5,e.v,e.a(2,t)}
  }
  ),e,null,[[0,5]])}
  )))),t.n=2,Promise.allSettled(s).then(t=>t.map(t=>t.value));
  case 2:return t.a(2,t.v)}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/phimlongtieng\.net\/pmm\/[a-z0-9]+\.html|motchill\d+\.com\/pmm[a-z0-9]+\/[a-z0-9]+\.m3u8/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return m(void 0,void 0,void 0,h().m((function t(){
  var i;
  return h().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(n.e)(r,e);
  case 1:return(i=t.v).forEach(t=>{
  "html"==t.ext&&(t.ext="m3u8",t.exts=["m3u8"])}
  ),t.a(2,i)}
  }
  ),t)}
  )))}
  }
  ]}
  ,default:{
  getUrl:()=>{
  var t;
  return null===(t=y[y.length-1])||void 0===t?void 0:t.url}
  ,mediaObjectChange:t=>{
  var e,r,n=t.mediaObject,o=t.node,a=n.url;
  if(a.match(/phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i))return n.ext="m3u8",n.exts=["m3u8"],n.filename=document.title,
  "video";
  if(a.match(/^(https?:\/\/(www.)?phimlongtieng)|(blob:)/i))return n.ext="",n.exts=[],"null";
  if(a.includes(".m3u8")){
  try{
  var s=null===(e=o.contentDocument)||void 0===e?void 0:e.querySelector("iframe");
  if(null==s?void 0:s.src){
  var u=new URL(null==s?void 0:s.src);
  n.referrer=u.origin||"https://www.phimtq.com"}
  else location.host.includes("phimtuoitho")&&(n.referrer=y[y.length-1].referrer);
  n.ext="m3u8",n.exts=["m3u8"]}
  catch(t){
  Object(i.devLog)(t)}
  return"video"}
  return a.match(/helvid\.[a-z0-9]+\/hash.php\?.+/i)?(n.ext="m3u8",n.exts=["m3u8"],n.referrer=n.url,
  n.filename=(null===(r=document.querySelector(`a[href="${location.href}
  "]`))||void 0===r?void 0:r.title)||document.title,"video"):a.match(/helvid\.[a-z0-9]+\/play\/token_hash\?.+/i)?
  (n.ext="m3u8",n.exts=["m3u8"],n.referrer=n.url,"video"):(n.ext="mp4",n.exts=["mp4"],n.type)}
  }
  ,urls:[...a.a.urls||[]],processRequestIds(t){
  var e=t.url;
  return e.match(/phimlongtieng\.net\/pmm\/[a-z0-9]+\.html|motchill\d+\.com\/pmm[a-z0-9]+\/[a-z0-9]+\.m3u8/i)?
  (y.push(t),!0):(e.match(/^https?:\/\/(www.)?phimlongtieng/i)||y.push(t),!0)}
  }
  )};
