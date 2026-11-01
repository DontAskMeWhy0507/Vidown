// Module 224 - Savior D Id_com Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(81),i=r(0),o=r(1),a=r(3),s=r(14),u=r(6),c=r(9);
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
  var d=function(t,e,r,n){
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
  ,h=[],p={
  };
  function v(t){
  return d(this,void 0,void 0,l().m((function e(){
  var r,f,d,h,p,v;
  return l().w((function(e){
  for(;;
  )switch(e.p=e.n){
  case 0:if(r=Object(n.a)(t)){
  e.n=1;
  break}
  return e.a(2,[]);
  case 1:if(!Array.isArray(r)){
  e.n=2;
  break}
  return e.a(2,r.map(e=>(e.filename=t.config.video.title||e.filename,e)));
  case 2:return e.n=3,fetch(r).then(t=>t.text());
  case 3:if(f=e.v,(d=Object(a.f)(r)).filename=t.config.video.title||d.filename,d.fixName=d.filename,
  (h=d.url)&&h.includes("videoplayback")&&h.includes("mp4")&&(d.ext="mp4",d.skipReferrer=!0),"mpd"!=d.ext){
  e.n=7;
  break}
  if(p=d.fixName||d.filename||document.title,e.p=4,!f){
  e.n=5;
  break}
  return e.a(2,Object(s.b)(f,p,d.host,h));
  case 5:e.n=7;
  break;
  case 6:e.p=6,v=e.v,Object(i.devLog)(v);
  case 7:if(!Object(o.B)(d.ext)&&!Object(i.isSpecialUrls)(d.url)){
  e.n=8;
  break}
  if(!f){
  e.n=8;
  break}
  return e.a(2,Object(u.e)(f,d));
  case 8:return d.quality||(d.quality=c.b.DEFAULT_QUALITY_TYPE),e.a(2,[d])}
  }
  ),e,null,[[4,6]])}
  )))}
  var m={
  getDomains:()=>["d-id.com"],parse:{
  sources:[{
  checkSource:t=>{
  var e=t.url;
  return/player\.vimeo\.com/i.test(e)}
  ,parse:t=>{
  var e=t.media;
  return d(void 0,void 0,void 0,l().m((function t(){
  var r,n,a;
  return l().w((function(t){
  for(;;
  )switch(t.p=t.n){
  case 0:if(t.p=0,r=e.url,!h.includes(r)||!p[r]){
  t.n=1;
  break}
  return t.a(2,v(p[r]));
  case 1:return t.n=2,Object(i.sendMessage)({
  type:o.b.GET_URL,params:{
  frameUrl:r}
  }
  );
  case 2:if((n=t.v)&&n.config){
  t.n=3;
  break}
  return t.a(2,[]);
  case 3:return h.push(r),p[r]=n,t.a(2,v(n));
  case 4:return t.p=4,a=t.v,console.error(a),t.a(2,[])}
  }
  ),t,null,[[0,4]])}
  )))}
  }
  ]}
  ,urls:[{
  checkUrl:t=>{
  var e=t.url,r=t.node;
  return e.includes("vimeo.com")&&"IFRAME"===r.tagName}
  ,getUrl:t=>{
  var e=t.url;
  return d(void 0,void 0,void 0,l().m((function t(){
  return l().w((function(t){
  for(;;
  )switch(t.n){
  case 0:return t.a(2,e)}
  }
  ),t)}
  )))}
  ,mediaObjectChange:t=>(t.mediaObject.ext="m3u8","video")}
  ]};
  e.default=m};
