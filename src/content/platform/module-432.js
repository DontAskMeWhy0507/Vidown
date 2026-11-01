// Module 432 [platform]
export default function(t,e,r) {
  "use strict";
var n=r(433),i=r(139),o=r(25).Buffer;function a(t){var e,r=t.modulus.byteLength();do{e=new n(i(r))}while(e.cmp(t.modulus)>=0||!e.umod(t.prime1)||!e.umod(t.prime2));return e}function s(t,e){var r=function(t){var e=a(t);return{blinder:e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed(),unblinder:e.invm(t.modulus)}}(e),i=e.modulus.byteLength(),s=new n(t).mul(r.blinder).umod(e.modulus),u=s.toRed(n.mont(e.prime1)),c=s.toRed(n.mont(e.prime2)),l=e.coefficient,f=e.prime1,d=e.prime2,h=u.redPow(e.exponent1).fromRed(),p=c.redPow(e.exponent2).fromRed(),v=h.isub(p).imul(l).umod(f).imul(d);return p.iadd(v).imul(r.unblinder).umod(e.modulus).toArrayLike(o,"be",i)}s.getr=a,t.exports=s};
