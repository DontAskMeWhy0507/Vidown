// Module 662 [platform]
module.exports = function(t,e,r){var n=r(15),i=r(500);function o(t){i.call(this,t),this.enc="pem"}n(o,i),t.exports=o,o.prototype.encode=function(t,e){for(var r=i.prototype.encode.call(this,t).toString("base64"),n=["-----BEGIN "+e.label+"-----"],o=0;o<r.length;o+=64)n.push(r.slice(o,o+64));return n.push("-----END "+e.label+"-----"),n.join("\n")}};
