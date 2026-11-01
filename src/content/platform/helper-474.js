// Module 474 - Savior Helper 474
export default function(t,e,r) {
  "use strict";
  (function(e,r){
  var n;
  if(e.process&&e.process.browser)n="utf-8";
  else if(e.process&&e.process.version){
  n=parseInt(r.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary"}
  else n="utf-8";
  t.exports=n}
  ).call(this,r(13),r(32))};
