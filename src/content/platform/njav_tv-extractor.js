// Module 296 - Savior Njav_tv Extractor
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
  ,u=[],c={
  }
  ,l={
  }
  ,f={
  }
  ,d={
  }
  ,h=void 0,p={
  }
  ,v={
  getDomains:()=>["njav.tv","javmost.com"],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return Boolean(e.match(/v\.m3u8d/i))}
  ,parse:t=>{
  var e=t.media;
  return[Object.assign(Object.assign({
  }
  ,e),{
  play_list:e.realRes,ext:"m3u8",exts:["m3u8"]}
  )]}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/:\/\/javplayer\./i))}
  ,getUrl:()=>s(void 0,void 0,void 0,o().m((function t(){
  var e,r,a,s,u,f,d;
  return o().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!(r=c[location.href])){
  t.n=2;
  break}
  return a=r.url,t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:a}
  }
  );
  case 1:return s=t.v,l[a]=s.url,u=a.match(/\/(\d+)\/v\.m3u8/i),f=null==u?void 0:u[1],d=f?f+"p":r.resolution,
  t.a(2,[Object.assign(Object.assign({
  }
  ,r),{
  filename:document.title,realRes:s.url,referrer:s.referrer,resolution:d,quality:(null===(e=n.r[d])||
  void 0===e?void 0:e.label)||r.quality,extraData:[{
  name:"tab_url",value:location.href}
  ]}
  )]);
  case 2:return t.a(2)}
  }
  ),t)}
  )))}
  ,{
  checkUrl:t=>{
  var e=t.url;
  return Boolean(e.match(/(.+\.supremejav\.com)|(emturbovid\.com)|(findjav\.com)/))}
  ,getUrl:t=>{
  var e=t.url;
  return s(void 0,void 0,void 0,o().m((function t(){
  var r;
  return o().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!d[e]){
  t.n=1;
  break}
  return t.a(2,d[e]);
  case 1:return t.n=2,Object(i.sendMessage)({
  type:n.b.GET_URL}
  );
  case 2:if(!(r=t.v)||!r.url){
  t.n=3;
  break}
  return d[e]=r.url,f[r.url]=r,t.a(2,r.url);
  case 3:return t.a(2)}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>{
  t.node;
  var e=t.mediaObject;
  if(f[e.url]){
  var r=f[e.url];
  return e.referrer=r.referrer,e.realRes=r.realRes,void(e.fixName=r.title)}
  }
  }
  ],default:{
  getUrl:()=>s(void 0,void 0,void 0,o().m((function t(){
  var e,r;
  return o().w((function(t){
  for(;;
  )switch(t.n){
  case 0:if(!h||!h.url.includes(".m3u8")){
  t.n=2;
  break}
  return e=h.url,t.n=1,Object(i.sendMessage)({
  type:n.b.GET_URL,params:{
  url:e}
  }
  );
  case 1:return r=t.v,p[e]=r,l[e]=r.realRes,t.a(2,e);
  case 2:return t.a(2)}
  }
  ),t)}
  ))),mediaObjectChange:t=>{
  var e=t.mediaObject,r=e.url;
  return p[r]&&(e.realRes=l[r],e.referrer=p[r].referrer,e.fixName=p[r].title),e.type}
  }
  ,processRequestIds:t=>{
  var e;
  return"v"==t.filename&&(c[location.href]=t),(null===(e=t.filename)||void 0===e?void 0:e.includes("master"))&&
  "m3u8"===t.ext?(u.push(t),h=t,!0):(u.some(e=>t.url==e.url)||u.push(t),!0)}
  };
  e.default=v};
