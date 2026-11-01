// Module 342 - Savior Soundcloud Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(3),i=r(9),o=r(0);
  function a(t,e){
  var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(!r){
  if(Array.isArray(t)||(r=function(t,e){
  if(t){
  if("string"==typeof t)return s(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}
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
  var o,a=!0,u=!1;
  return{
  s:function(){
  r=r.call(t)}
  ,n:function(){
  var t=r.next();
  return a=t.done,t}
  ,e:function(t){
  u=!0,o=t}
  ,f:function(){
  try{
  a||null==r.return||r.return()}
  finally{
  if(u)throw o}
  }
  }
  }
  function s(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  var u,c=/client_id=([^&]+)/,l=/soundcloud:tracks:([0-9]+)/,f="https://api-v2.soundcloud.com/tracks?ids={{track_id}}&client_id={{client_id}}&%5Bobject%20Object%5D=&app_version={{app_version}}&app_locale=en",
  d=[],h=location.href,p={
  getDomains:()=>["soundcloud.com"],forceUpdate:()=>{
  location.href!==h&&(EE.emit("widget.forceUpdate"),h=location.href)}
  ,parse:{
  sources:[],default:t=>{
  var e,r,o,a=t.media,s=t.response,d=[];
  try{
  o=JSON.parse(s)}
  catch(t){
  return[]}
  if(o.http_mp3_128_url){
  var h=Object(n.f)(o.http_mp3_128_url),p=a.url.match(/soundcloud\.com\/i1\/tracks\/(\d+)\//);
  if(!p||!p.length)return[];
  var v=p[1],m=((t,e)=>{
  e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");
  var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);
  return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}
  )("client_id",a.url)||"";
  return fetch(f.replace("{{track_id}}",v).replace("{{client_id}}",m)).then((function(t){
  return t.json()}
  )).then((function(t){
  if(!t.length)return[];
  var e=t[0];
  return h.title=e.title,h.quality=i.b.DEFAULT_QUALITY_TYPE,h.type="audio",d.push(h),d}
  )).catch((function(){
  return[]}
  ))}
  var y=(null===(e=c.exec(a.url))||void 0===e?void 0:e[1])||"client_id",g=(null===(r=l.exec(a.url))||
  void 0===r?void 0:r[1])||"track_id";
  if(o.url){
  var b=f.replace("{{track_id}}",g).replace("{{client_id}}",y).replace("{{app_version}}",u);
  return fetch(b).then(t=>t.json()).then(t=>{
  var e=Object(n.f)(o.url);
  return e.title=t[0].title,e.type="audio",fetch(e.url).then(t=>t.text()).then(t=>(e.play_list=t,d.push(e),
  d))}
  )}
  return[]}
  }
  ,beforeGetUrl:()=>{
  var t,e=a(Array.from(document.scripts).filter(t=>t.innerHTML));
  try{
  for(e.s();
  !(t=e.n()).done;
  ){
  var r=t.value.innerHTML;
  if(r.includes("__sc_version")){
  var n=/__sc_version\s*=\s*("|')(.+?)("|')/.exec(r);
  n&&(u=n[2])}
  }
  }
  catch(t){
  e.e(t)}
  finally{
  e.f()}
  }
  ,processRequestIds:t=>{
  if(t.url.match(/api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi)||t.url.includes(".m3u8"))return d.push(t),
  EE.emit("widget.forceUpdate"),!0}
  ,default:{
  getUrl:()=>{
  if(d.length>0)return d}
  }
  ,addNode:()=>[".playControls"],getCustomElement:()=>Object(o.queryAll)(".playControls")};
  e.default=p};
