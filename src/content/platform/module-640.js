// Module 640 [platform]
module.exports = function(t,e,r) {
  "use strict";
var n=r(122),i=r(496);function o(){if(!(this instanceof o))return new o;i.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}n.inherits(o,i),t.exports=o,o.blockSize=1024,o.outSize=384,o.hmacStrength=192,o.padLength=128,o.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h.slice(0,12),"big"):n.split32(this.h.slice(0,12),"big")}};
