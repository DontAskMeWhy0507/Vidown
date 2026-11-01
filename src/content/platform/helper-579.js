// Module 579 - Savior Helper 579
export default function(t,e,r) {
  "use strict";
  var n,i,o=Function.prototype.toString,a="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;
  if("function"==typeof a&&"function"==typeof Object.defineProperty)try{
  n=Object.defineProperty({
  }
  ,"length",{
  get:function(){
  throw i}
  }
  ),i={
  }
  ,a((function(){
  throw 42}
  ),null,n)}
  catch(t){
  t!==i&&(a=null)}
  else a=null;
  var s=/^\s*class\b/,u=function(t){
  try{
  var e=o.call(t);
  return s.test(e)}
  catch(t){
  return!1}
  }
  ,c=function(t){
  try{
  return!u(t)&&(o.call(t),!0)}
  catch(t){
  return!1}
  }
  ,l=Object.prototype.toString,f="function"==typeof Symbol&&!!Symbol.toStringTag,d=!(0 in[,]),h=function(){
  return!1};
  if("object"==typeof document){
  var p=document.all;
  l.call(p)===l.call(document.all)&&(h=function(t){
  if((d||!t)&&(void 0===t||"object"==typeof t))try{
  var e=l.call(t);
  return("[object HTMLAllCollection]"===e||"[object HTML document.all class]"===e||"[object HTMLCollection]"===e||
  "[object Object]"===e)&&null==t("")}
  catch(t){
  }
  return!1}
  )}
  t.exports=a?function(t){
  if(h(t))return!0;
  if(!t)return!1;
  if("function"!=typeof t&&"object"!=typeof t)return!1;
  try{
  a(t,null,n)}
  catch(t){
  if(t!==i)return!1}
  return!u(t)&&c(t)}
  :function(t){
  if(h(t))return!0;
  if(!t)return!1;
  if("function"!=typeof t&&"object"!=typeof t)return!1;
  if(f)return c(t);
  if(u(t))return!1;
  var e=l.call(t);
  return!("[object Function]"!==e&&"[object GeneratorFunction]"!==e&&!/^\[object HTML/.test(e))&&c(t)}
  };
