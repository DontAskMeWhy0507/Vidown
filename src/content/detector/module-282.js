// Module 282 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={getDomains:()=>["mrgay."],default:{getUrl:t=>{var e=t.url;return/mrgay\..*\/get_file/.test(e)?e:[]},mediaObjectChange:t=>{var e=t.mediaObject;return e.filename=document.title,e.ext="mp4",e.exts=["mp4"],"video"}}};e.default=n};
