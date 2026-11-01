// Module 388 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["vtv16.info"],urls:[{checkUrl:t=>{var e=t.url;return Boolean(e.match(/public\/dist\/index\.html\?id=\w{32}/g))},getUrl:t=>{var e=t.url,r=new URL(e),n=r.searchParams.get("id");return`${r.protocol}//${r.host}/playlist/${n}/${Date.now()}.m3u8`}}]};e.default=n};
