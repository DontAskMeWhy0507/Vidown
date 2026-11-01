// Module 139 [platform]
export default function(t,e,r) {
  "use strict";
(function(e,n){var i=r(25).Buffer,o=e.crypto||e.msCrypto;o&&o.getRandomValues?t.exports=function(t,e){if(t>4294967295)throw new RangeError("requested too many random bytes");var r=i.allocUnsafe(t);if(t>0)if(t>65536)for(var a=0;a<t;a+=65536)o.getRandomValues(r.slice(a,a+65536));else o.getRandomValues(r);if("function"==typeof e)return n.nextTick((function(){e(null,r)}));return r}:t.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}).call(this,r(13),r(32))};
