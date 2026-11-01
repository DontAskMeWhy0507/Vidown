// Module 492 [platform]
export default function(t,e,r) {
  "use strict";
var n=e;function i(t){return 1===t.length?"0"+t:t}function o(t){for(var e="",r=0;r<t.length;r++)e+=i(t[r].toString(16));return e}n.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if("string"!=typeof t){for(var n=0;n<t.length;n++)r[n]=0|t[n];return r}if("hex"===e){(t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t);for(n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))}else for(n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i;o?r.push(o,a):r.push(a)}return r},n.zero2=i,n.toHex=o,n.encode=function(t,e){return"hex"===e?o(t):t}};
