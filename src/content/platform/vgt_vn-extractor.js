// Module 369 - Savior Vgt_vn Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(28),i=r(1),o=r(0);
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
  var u,c=function(t,e,r,n){
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
  ,l=1;
  function f(t){
  return c(this,void 0,void 0,a().m((function e(){
  return a().w((function(e){
  for(;;
  )switch(e.n){
  case 0:return e.n=1,Object(o.sendMessage)({
  type:i.b.GET_URL}
  );
  case 1:if(e.v){
  e.n=4;
  break}
  if(5===l){
  e.n=2;
  break}
  return u=setTimeout(()=>{
  l++,EE.emit("widget.updateMedia")}
  ,1e3),e.a(2,[]);
  case 2:return clearTimeout(u),e.a(2,[]);
  case 3:e.n=5;
  break;
  case 4:return clearTimeout(u),e.a(2,t);
  case 5:return e.a(2)}
  }
  ),e)}
  )))}
  var d={
  getDomains:()=>["vgt.vn"],parse:{
  sources:[{
  checkSource:t=>t.url.includes("vgt.vn"),parse:t=>{
  var e="https://www.youtube.com/watch?v="+t.media.url.split("#")[1];
  return n.a.parse(e)}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return"IFRAME"===t.node.tagName&&e.includes("vgt.vn")}
  ,getUrl:t=>{
  var e=t.url;
  return c(void 0,void 0,void 0,a().m((function t(){
  return a().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.a(2,f(e))}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>{
  var e=t.mediaObject,r=t.node;
  return e.ext="mp4",e.exts=["mp4"],e.cacheUrl=r.src,"video"}
  }
  ]};
  e.default=d};
