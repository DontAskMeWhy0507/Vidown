// Module 150 - Savior Helper 150
export default function(t,e,r) {
  "use strict";
  var n=r(15),i=r(76),o=r(405),a=r(426),s=r(130);
  function u(t){
  s.call(this,"digest"),this._hash=t}
  n(u,s),u.prototype._update=function(t){
  this._hash.update(t)}
  ,u.prototype._final=function(){
  return this._hash.digest()}
  ,t.exports=function(t){
  return"md5"===(t=t.toLowerCase())?new i:"rmd160"===t||"ripemd160"===t?new o:new u(a(t))}
  };
