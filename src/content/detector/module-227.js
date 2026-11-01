// Module 227 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=new RegExp(/url=+[\s\S]+(video.docbao.vn)+[\s\S]+(.mp4)/g),i={urls:[{checkUrl:t=>{var e=t.url;return Boolean(e.match(n))},getUrl:t=>t.url.split("url=")[1]}]};e.default=i};
