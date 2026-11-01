// Module 217 - Savior Blvietsub_vip Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(44),i=r(1),o=r(0),a=r(6),s=r(20);
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
  var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(!r){
  if(Array.isArray(t)||(r=function(t,e){
  if(t){
  if("string"==typeof t)return f(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}
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
  function f(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  var d,h,p=function(t,e,r,n){
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
  ,v=new Map,m=/ssplay\.net/i,y=/abyssplayer\.com/i,g=/ssplay\.net\/[a-z0-9]{2,4}\//i,b="";
  function w(){
  var t,e,r,n=null===(t=document.querySelector("#pembed iframe, #embed_holder iframe"))||void 0===t?
  void 0:t.src;
  if(n)return n;
  var i=null===(e=document.querySelector(".DagPlayOpt.on"))||void 0===e?void 0:e.getAttribute("data-embed");
  if(i)return i;
  var o=null===(r=document.querySelector("#SS .DagPlayOpt"))||void 0===r?void 0:r.getAttribute("data-embed");
  return o||""}
  function A(){
  var t,e,r,n,i=w(),o="";
  if(i){
  var a,s=l(document.querySelectorAll(".DagPlayOpt"));
  try{
  for(s.s();
  !(a=s.n()).done;
  ){
  var u=a.value;
  if(u.getAttribute("data-embed")===i){
  o=(null===(e=null===(t=u.querySelector("span"))||void 0===t?void 0:t.textContent)||void 0===e?void 0:
  e.trim())||"";
  break}
  }
  }
  catch(t){
  s.e(t)}
  finally{
  s.f()}
  }
  var c=(null===(n=null===(r=document.querySelector("h1"))||void 0===r?void 0:r.textContent)||void 0===n?
  void 0:n.trim())||document.title;
  return o?`${c}
   - Tập ${o}
  `:c}
  var _={
  getDomains:()=>["blvietsub."],forceUpdate(){
  var t=w();
  t!==b&&(b=t,h=void 0)}
  ,processRequestIds(t){
  var e=t.url;
  return/ssplay\.net/i.test(e)&&function(t){
  return/\.m3u8/i.test(t)||g.test(t)||/\/tube\//i.test(t)}
  (e)?(t.filename=A(),t.referrer="https://ssplay.net/",t.type="video",h=t,v.set(location.href,t.url),
  !0):!(!/abyss-cdn\.ink/i.test(e)||!/\.m3u8/i.test(e))&&(t.filename=A(),t.type="video",h=t,v.set(location.href,
  t.url),!0)}
  ,parse:{
  sources:[...(null===(d=s.a.parse)||void 0===d?void 0:d.sources)||[],{
  checkSource:t=>t.url.includes("ssplay"),parse:t=>{
  var e=t.media,r=t.response;
  return p(void 0,void 0,void 0,u().m((function t(){
  var n,s;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(r){
  t.n=2;
  break}
  return t.n=1,Object(o.sendMessage)({
  type:i.b.GET_URL,params:{
  url:e.url}
  }
  );
  case 1:n=t.v,r=null==n?void 0:n.url;
  case 2:return t.n=3,Object(a.e)(r,e);
  case 3:return(s=t.v).forEach(t=>{
  t.referrer="https://ssplay.net/",t.filename=t.filename||A()}
  ),t.a(2,s)}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>{
  var e=t.url;
  return/^(?=.*(okcdn\.ru|vkuser\.net))(?!.*bytes=).*/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return p(void 0,void 0,void 0,u().m((function t(){
  var a,s,c,l,f,d,h,p,v,m,y,g,b;
  return u().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(t.p=0,r){
  t.n=2;
  break}
  return t.n=1,Object(o.sendMessage)({
  type:i.b.CORS_FETCH,data:{
  url:e.url,responseType:"text"}
  }
  );
  case 1:r=t.v.data;
  case 2:return v=Object(n.parse)(r,{
  attributeNamePrefix:"",attrNodeName:"@",textNodeName:"#text",ignoreAttributes:!1,cdataTagName:"__cdata"}
  ),m=(null===(l=null===(c=null===(s=null===(a=null==v?void 0:v.MPD)||void 0===a?void 0:a.Period)||void 0===s?
  void 0:s.AdaptationSet)||void 0===c?void 0:c[0])||void 0===l?void 0:l.Representation)||[],y=(null===(p=null===(h=null===(d=null===(f=null==v?
  void 0:v.MPD)||void 0===f?void 0:f.Period)||void 0===d?void 0:d.AdaptationSet)||void 0===h?void 0:
  h[1])||void 0===p?void 0:p.Representation)||[],g=m.map(t=>{
  var r,n,a,s,u,c,l=t["@"],f=l.height+"p",d=i.r[f].label;
  try{
  c=e.i18n_quality||Object(o.i18n)(null===(r=i.r[f])||void 0===r?void 0:r.i18n_label)||d}
  catch(t){
  c=d}
  var h=`${e.protocol}
  //${e.host}
  ${e.pathname}
  ${t.BaseURL.replaceAll("&amp;","&")}
  `,p=(()=>{
  var t,r,n=null===(t=h.match(/sig=(\w+)&/))||void 0===t?void 0:t[1],i=y.find(t=>{
  var e;
  return null===(e=null==t?void 0:t.BaseURL)||void 0===e?void 0:e.includes(n)}
  )||(null===(r=y.slice(-1))||void 0===r?void 0:r[0]);
  if(i)return`${e.protocol}
  //${e.host}
  ${e.pathname}
  ${i.BaseURL.replaceAll("&amp;","&")}
  `}
  )(),v=p?{
  videoUrl:h,audioUrl:p}
  :p;
  return{
  type:(null===(a=null===(n=null==l?void 0:l.mimeType)||void 0===n?void 0:n.split("/"))||void 0===a?
  void 0:a[0])||"video",ext:(null===(u=null===(s=null==l?void 0:l.mimeType)||void 0===s?void 0:s.split("/"))||
  void 0===u?void 0:u[1])||"mp4",filename:A(),title:A(),quality:d,i18n_quality:c,resolution:f,url:v}
  }
  ),t.a(2,g);
  case 3:return t.p=3,b=t.v,console.error(b),t.a(2,[])}
  }
  ),t,null,[[0,3]])}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return m.test(e)}
  ,getUrl(t){
  var e=t.url;
  return h?[h]:v.get(location.href)?v.get(location.href):e}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.filename=A(),e.ext="m3u8",e.exts=["m3u8"],e.referrer="https://ssplay.net/",e.cacheUrl=null==r?
  void 0:r.src,"video"}
  }
  ,{
  checkUrl:t=>{
  var e=t.url;
  return y.test(e)}
  ,getUrl(t){
  var e=t.url;
  return h?[h]:v.get(location.href)?v.get(location.href):e}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.filename=A(),e.ext="m3u8",e.exts=["m3u8"],e.cacheUrl=null==r?void 0:r.src,"video"}
  }
  ,...s.a.urls||[]],default:{
  getUrl:t=>{
  var e=t.url,r=t.ids;
  if(v.get(e))return v.get(e);
  if(h)return h.url;
  var n,i=l(r);
  try{
  var o,a=function(){
  var t=n.value;
  return Array.from(v.values()).some(e=>e===t.url)?0:/^(?=.*(okcdn\.ru|vkuser\.net))(?!.*bytes=).*/i.test(t.url)||
  t.ext.includes("m3u8")?(v.set(e,t.url),{
  v:t.url}
  ):void 0};
  for(i.s();
  !(n=i.n()).done;
  )if(0!==(o=a())&&o)return o.v}
  catch(t){
  i.e(t)}
  finally{
  i.f()}
  return e}
  }
  };
  e.default=_};
