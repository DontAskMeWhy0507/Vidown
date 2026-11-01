// Module 578 [platform]
module.exports = function(t,e,r) {
  "use strict";
var n=r(579),i=Object.prototype.toString,o=Object.prototype.hasOwnProperty,a=function(t,e,r){for(var n=0,i=t.length;n<i;n++)o.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))},s=function(t,e,r){for(var n=0,i=t.length;n<i;n++)null==r?e(t.charAt(n),n,t):e.call(r,t.charAt(n),n,t)},u=function(t,e,r){for(var n in t)o.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))};function c(t){return"[object Array]"===i.call(t)}t.exports=function(t,e,r){if(!n(e))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=r),c(t)?a(t,e,i):"string"==typeof t?s(t,e,i):u(t,e,i)}};
