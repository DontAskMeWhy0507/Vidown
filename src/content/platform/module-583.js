// Module 583 [platform]
export default function(t,e,r) {
  "use strict";
var n=r(140),i=r(584),o=r(585)(),a=r(129),s=r(115),u=n("%Math.floor%");t.exports=function(t,e){if("function"!=typeof t)throw new s("`fn` is not a function");if("number"!=typeof e||e<0||e>4294967295||u(e)!==e)throw new s("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],n=!0,c=!0;if("length"in t&&a){var l=a(t,"length");l&&!l.configurable&&(n=!1),l&&!l.writable&&(c=!1)}return(n||c||!r)&&(o?i(t,"length",e,!0,!0):i(t,"length",e)),t}};
