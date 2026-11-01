// Module 314 - Savior Phimsea_com Extractor
export default function(t,e,r) {
  "use strict";
  function n(t,e){
  return function(t){
  if(Array.isArray(t))return t}
  (t)||function(t,e){
  var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];
  if(null!=r){
  var n,i,o,a,s=[],u=!0,c=!1;
  try{
  if(o=(r=r.call(t)).next,0===e){
  if(Object(r)!==r)return;
  u=!1}
  else for(;
  !(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);
  u=!0);
  }
  catch(t){
  c=!0,i=t}
  finally{
  try{
  if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}
  finally{
  if(c)throw i}
  }
  return s}
  }
  (t,e)||function(t,e){
  if(t){
  if("string"==typeof t)return i(t,e);
  var r={
  }
  .toString.call(t).slice(8,-1);
  return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||
  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}
  }
  (t,e)||function(){
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
  ()}
  function i(t,e){
  (null==e||e>t.length)&&(e=t.length);
  for(var r=0,n=Array(e);
  r<e;
  r++)n[r]=t[r];
  return n}
  function o(t){
  var e,r,i=t.split("/").pop(),o=n((null==i?void 0:i.split("."))||[],2),a=o[0],s=o[1],u=(e=6,r=a.replace(/[a-zA-Z]/g,
  t=>{
  var r=t.charCodeAt(0)+e,n=t<="Z"?90:122;
  return String.fromCharCode(r<=n?r:r-26)}
  ),atob(r)),c=t.split("/");
  return c[c.length-1]=u+"."+s,c.join("/")}
  r.r(e);
  var a={
  getDomains:()=>["phimsea."],parse:{
  default:t=>{
  var e=t.media,r=t.response,n=null==r?void 0:r.split("\n").map(t=>t.startsWith("https")?o(t):t.startsWith("#EXT-X-KEY")?
  t.replace(/https:\/\/.*\.key/,t=>o(t)):t).join("\n");
  return[Object.assign(Object.assign({
  }
  ,e),{
  url:"https://google.com",play_list:n}
  )]}
  }
  };
  e.default=a};
