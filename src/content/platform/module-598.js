// Module 598 [platform]
export default function(t,e,r) {
  "use strict";
var n=r(15),i=r(25).Buffer,o=r(130),a=i.alloc(128);function s(t,e){o.call(this,"digest"),"string"==typeof e&&(e=i.from(e)),this._alg=t,this._key=e,e.length>64?e=t(e):e.length<64&&(e=i.concat([e,a],64));for(var r=this._ipad=i.allocUnsafe(64),n=this._opad=i.allocUnsafe(64),s=0;s<64;s++)r[s]=54^e[s],n[s]=92^e[s];this._hash=[r]}n(s,o),s.prototype._update=function(t){this._hash.push(t)},s.prototype._final=function(){var t=this._alg(i.concat(this._hash));return this._alg(i.concat([this._opad,t]))},t.exports=s};
