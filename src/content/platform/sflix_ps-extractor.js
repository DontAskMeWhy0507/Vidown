// Module 335 - Savior Sflix_ps Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(0);
  function o(){
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,
  e,r="function"==typeof Symbol?Symbol:{
  }
  ,n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";
  function s(r,n,i,o){
  var s=n&&n.prototype instanceof c?n:c,l=Object.create(s.prototype);
  return a(l,"_invoke",function(r,n,i){
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
  var d=[][n]?e(e([][n]())):(a(e={
  }
  ,n,(function(){
  return this}
  )),e),h=f.prototype=c.prototype=Object.create(d);
  function p(t){
  return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a(t,i,"GeneratorFunction")),
  t.prototype=Object.create(h),t}
  return l.prototype=f,a(h,"constructor",f),a(f,"constructor",l),l.displayName="GeneratorFunction",a(f,
  i,"GeneratorFunction"),a(h),a(h,i,"Generator"),a(h,n,(function(){
  return this}
  )),a(h,"toString",(function(){
  return"[object Generator]"}
  )),(o=function(){
  return{
  w:s,m:p}
  }
  )()}
  function a(t,e,r,n){
  var i=Object.defineProperty;
  try{
  i({
  }
  ,"",{
  }
  )}
  catch(t){
  i=0}
  (a=function(t,e,r,n){
  function o(e,r){
  a(t,e,(function(t){
  return this._invoke(e,r,t)}
  ))}
  e?i?i(t,e,{
  value:r,enumerable:!n,configurable:!n,writable:!n}
  ):t[e]=r:(o("next",0),o("throw",1),o("return",2))}
  )(t,e,r,n)}
  var s=function(t,e,r,n){
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
  ,u="",c={
  getDomains:()=>["sflix."],parse:{
  sources:[{
  checkSource:()=>Boolean(u),parse:()=>s(void 0,void 0,void 0,o().m((function t(){
  var e,r,a,s;
  return o().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return r=document.title||(null===(e=document.querySelector("h1"))||void 0===e?void 0:e.innerText),
  t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:u}
  }
  );
  case 1:return a=t.v,(s=a.url).forEach(t=>{
  t.filename=r,t.title=r}
  ),t.a(2,s)}
  }
  ),t)}
  )))}
  ]}
  ,default:{
  getUrl:()=>{
  if(u)return u}
  }
  ,processRequestIds:t=>!(!t.url.includes("playlist.m3u8")||u===t.url)&&(u=t.url,!0)};
  e.default=c};
