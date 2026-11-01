// Module 504 - Savior Helper 504
export default function(t,e,r){
  var n=r(437),i=r(25).Buffer;
  t.exports=function(t,e){
  return i.from(t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed().toArray())}
  };
