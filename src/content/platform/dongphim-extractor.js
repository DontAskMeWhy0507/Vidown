// Module 228 - Savior Dongphim Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(1),i=r(0),o=r(14),a=r(6),s=r(23),u=r(31);
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
  ))}
  ,d={
  getDomains:()=>["dongphym.co","dongphim.info","dongchill.co","dongphim.co","hotphimvn."],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return/\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i.test(e)}
  ,parse:t=>{
  var e=t.media,r=t.response;
  return f(void 0,void 0,void 0,c().m((function t(){
  var o;
  return c().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.n=1,Object(a.e)(r,e);
  case 1:return o=t.v,t.n=2,Promise.allSettled(o.map(t=>f(void 0,void 0,void 0,c().m((function e(){
  var r;
  return c().w((function(e){
  for(;;
  )switch(e.p=e.n){
  case 0:return e.p=0,e.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:t.url}
  }
  );
  case 1:return r=e.v,t.play_list=r.url,e.a(2,t);
  case 2:return e.p=2,e.v,e.a(2,t)}
  }
  ),e,null,[[0,2]])}
  ))))).then(t=>t.map(t=>t.value));
  case 2:return t.a(2,t.v)}
  }
  ),t)}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:t=>t.url.includes("jimmiepradeep.xyz"),getUrl:t=>{
  var e=t.url,r=new URL(e).searchParams.get("id");
  return`${Object(o.c)(e)}
  /playlist/${r}
  /${(new Date).getTime()}
  .m3u8`}
  }
  ]};
  e.default=Object(s.a)(u.a,["parse","urls"])(d)};
