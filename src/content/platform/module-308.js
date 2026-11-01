// Module 308 [platform]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["phimdacap."],default:{getUrl:t=>{var e=t.node,r=t.ids,n=e.closest("#watch-stream")||e.closest("[data-url]");if(n&&n.getAttribute("data-url")){var i=new URL(n.getAttribute("data-url")).searchParams.get("url");if(i)return i}return Array.isArray(r)&&r.slice(r.length-1)||void 0}},idsProcess(t){var e=t.defaultIds,r=t.id,n=t.index;r.size&&Number(r.size)<10240&&e.splice(n,1)}};e.default=n};
