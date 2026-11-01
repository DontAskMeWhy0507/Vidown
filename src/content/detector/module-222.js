// Module 222 [detector]
export default function(t,e,r) {
  "use strict";
var n;r.r(e);var i=location.href,o={getDomains:()=>["edition.cnn.com"],forceUpdate(){location.href!==i&&(EE.emit("widget.forceUpdate"),i=location.href,n=void 0)},default:{getUrl:()=>null==n?void 0:n.url},processRequestIds(t){if(t.url.match(/\/proxy(\.\d+)?\.m3u8/i))return n=t,!0}};e.default=o};
