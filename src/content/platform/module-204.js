// Module 204 [platform]
export default function(t,e,r) {
  "use strict";
var n;r.r(e);var i=location.href,o={getDomains:()=>["archive.org"],getCustomElement:()=>[...document.querySelectorAll("play-av")],isValidVideoNode:t=>"play-av"===t.tagName.toLowerCase(),forceUpdate:()=>{i!==location.href&&(i=location.href,n=null,EE.emit("widget.forceUpdate"))},default:{getUrl:()=>n?[n]:[]},processRequestIds:t=>(n=t,!0)};e.default=o};
