// Module 187 - Savior Ani24vn_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(0),o=r(6),a=r(14);
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
  var c,l,f=function(t,e,r,n){
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
  ,d="",h={
  getDomains:()=>["ani24vn.com","anime1s","holitv.org"],forceUpdate(){
  var t,e,r,n=document.querySelector(".stream iframe"),i=(null===(r=null===(e=null===(t=null==n?void 0:
  n.closest(".stream"))||void 0===t?void 0:t.querySelector(`.server_option [data-embed="${n.src}
  "]`))||void 0===e?void 0:e.innerText)||void 0===r?void 0:r.trim())||"_",o=`${document.title}
   ${i}
  `;
  d!=o&&(d=o,c=void 0)}
  ,parse:{
  sources:[{
  checkSource:t=>"mpd"==t.ext,parse:t=>{
  var e=t.response,r=t.media;
  return f(void 0,void 0,void 0,s().m((function t(){
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:null==r?void 0:r.url}
  }
  );
  case 1:return e=t.v,t.a(2,Object(a.b)(e,document.title,r.host,r.url))}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>t.url.includes("holi.starzd"),parse:t=>{
  var e=t.response,r=t.media;
  return f(void 0,void 0,void 0,s().m((function t(){
  var a,u,c,l;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(e&&e.includes("M3U8")){
  t.n=5;
  break}
  return t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:r.url}
  }
  );
  case 1:if(c=a=t.v,u=null===c){
  t.n=2;
  break}
  u=void 0===a;
  case 2:if(!u){
  t.n=3;
  break}
  l=void 0,t.n=4;
  break;
  case 3:l=a.url;
  case 4:e=l;
  case 5:return t.a(2,Object(o.e)(e,r))}
  }
  ),t)}
  )))}
  }
  ,{
  checkSource:t=>t.url.includes("anime1s.tool2x.cc/videos/")||t.url.includes("hakpor.tool2x.cc/videos/"),
  parse:t=>{
  var e=t.media;
  return f(void 0,void 0,void 0,s().m((function t(){
  var r,o;
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:e.url}
  }
  );
  case 1:if(r=t.v){
  t.n=2;
  break}
  return t.a(2,[]);
  case 2:return(o=Object.assign({
  }
  ,e)).play_list=r.playlist,t.a(2,[o])}
  }
  ),t)}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:()=>!!l,getUrl(t){
  t.url,t.ids;
  return null==l?void 0:l.url}
  }
  ,{
  checkUrl:t=>{
  var e=t.node;
  return/ani24vn\.com/i.test(location.href)&&!e.closest(".stream")}
  ,getUrl:()=>[]}
  ,{
  checkUrl:t=>{
  var e=t.url;
  return/ecostream\.me/i.test(e)}
  ,getUrl(){
  return f(this,void 0,void 0,s().m((function t(){
  return s().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(c){
  t.n=1;
  break}
  return t.a(2,[]);
  case 1:return c.filename=document.title,t.a(2,[c])}
  }
  ),t)}
  )))}
  }
  ,{
  checkUrl:t=>t.url.includes("holitv.org"),getUrl:()=>c?(c.filename=document.title,[c]):[],mediaObjectChange:
  t=>{
  var e=t.mediaObject;
  e.ext="m3u8",e.exts=["m3u8"]}
  }
  ],default:{
  getUrl:()=>null==c?void 0:c.url,mediaObjectChange(t){
  var e=t.mediaObject;
  return e.filename=d,e.fixName=e.filename,/(m3u8|mp4)/i.test(e.ext)&&(e.type="video"),e.type}
  }
  ,processRequestIds:t=>(c=t,"mpd"==t.ext&&(l=t),!0)};
  e.default=h};
