// Module 358 - Savior Tv_naver_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(3),i=r(1),o=r(80),a=r(0),s=r(6);
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
  ,f=[],d={
  }
  ,h="",p={
  getDomains:()=>["tv.naver.com","m.naver.com","brand.naver."],parse:{
  sources:[{
  checkSource:()=>location.host.includes("tv.naver")||location.host.includes("m.naver"),parse:t=>{
  var e=t.response;
  if(e&&!e.includes("#EXTM3U"))return JSON.parse(e).videos.list.map(t=>{
  var e=Object(n.f)(t.source);
  e.filename=Object(o.a)(e.filename,document.title),e.resolution=t.encodingOption.name.toLowerCase(),
  e.quality=i.r[e.resolution].label;
  try{
  e.i18n_quality=Object(a.i18n)(i.r[e.resolution].i18n_label)||e.quality}
  catch(t){
  e.i18n_quality=e.quality}
  return e.type="video",e}
  )}
  }
  ,{
  checkSource:()=>!(!location.host.includes("brand.naver")||!h),parse:t=>{
  var e=t.response;
  return l(void 0,void 0,void 0,u().m((function t(){
  var r,i,o,a,c,l,f,d,h,p,v,m,y;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!e||"string"!=typeof e){
  t.n=3;
  break}
  if(l=JSON.parse(e),f=null===(i=null===(r=null==l?void 0:l.streams)||void 0===r?void 0:r[0])||void 0===i?
  void 0:i.source,d=null===(c=null===(a=null===(o=null==l?void 0:l.streams)||void 0===o?void 0:o[0])||
  void 0===a?void 0:a.keys)||void 0===c?void 0:c[0].value,!f||!d){
  t.n=3;
  break}
  return h=`${f}
  ?__gda__=${d}
  `,p=Object(n.f)(h),t.n=1,fetch(h).then(t=>t.text());
  case 1:return v=t.v,m=v.replace(/\.m3u8/g,".m3u8?__gda__="+d),t.n=2,Object(s.e)(m,p);
  case 2:return(y=t.v).forEach(t=>{
  if(t.play_list){
  var e=t.play_list.replace(/\.ts/g,".ts?__gda__="+d);
  t.play_list=e}
  }
  ),t.a(2,y);
  case 3:return t.a(2)}
  }
  ),t)}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:()=>!(!location.host.includes("brand.naver")||!h),getUrl:()=>h}
  ,{
  checkUrl:()=>location.pathname.startsWith("/l/"),getUrl:()=>[]}
  ,{
  checkUrl:t=>"VIDEO"===t.node.tagName&&"tv.naver.com"===location.host,getUrl:()=>l(void 0,void 0,void 0,
  u().m((function t(){
  var e,r,n,i,o,a,s;
  return u().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(-1!==f.indexOf(location.href)){
  t.n=2;
  break}
  return t.n=1,fetch(location.href).then(t=>t.text()).catch(()=>(f.push(location.href),""));
  case 1:return n=t.v,i=/\"videoId\"\s*:\s*\"([^"]*)\"/,o=null===(e=/\"inKey\"\s*:\s*\"([^"]*)\"/.exec(n))||
  void 0===e?void 0:e[1],a=null===(r=i.exec(n))||void 0===r?void 0:r[1],s=`https://apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${a}
  ?key=${o}
  `,f.push(location.href),d[location.href]=s,t.a(2,s);
  case 2:return t.a(2,d[location.href]);
  case 3:return t.a(2)}
  }
  ),t)}
  ))),mediaObjectChange:t=>{
  var e=t.mediaObject;
  if(d[location.href])return e.ext="m3u8",e.exts=["m3u8"],"video"}
  }
  ,{
  checkUrl:t=>"VIDEO"===t.node.tagName&&"m.naver.com"==location.host,mediaObjectChange:t=>{
  var e,r,n,i,o=t.node,a=t.mediaObject,s=null===(r=null===(e=o.closest(".section_player"))||void 0===e?
  void 0:e.parentElement)||void 0===r?void 0:r.querySelector(".section_info"),u=null===(i=null===(n=null==s?
  void 0:s.querySelector(".si_text_area .si_desc"))||void 0===n?void 0:n.innerText)||void 0===i?void 0:
  i.trim();
  return u&&(a.filename=u,a.fixName=u),"video"}
  }
  ],shouldWidgetAttachToParentNode:t=>"m.naver.com"==location.host&&null!=t.closest(".section_player"),
  getCustomParent:t=>"m.naver.com"==location.host?t.closest(".section_player"):null,processRequestIds:
  t=>{
  var e=t.url;
  return!!/apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/.test(e)&&(h=e,!0)}
  };
  e.default=p};
