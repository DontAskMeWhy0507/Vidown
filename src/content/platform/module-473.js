// Module 473 [platform]
export default function(t,e,r) {
  "use strict";
var n=isFinite,i=Math.pow(2,30)-1;t.exports=function(t,e){if("number"!=typeof t)throw new TypeError("Iterations not a number");if(t<0||!n(t))throw new TypeError("Bad iterations");if("number"!=typeof e)throw new TypeError("Key length not a number");if(e<0||e>i||e!=e)throw new TypeError("Bad key length");return e+0}};
