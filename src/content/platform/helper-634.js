// Module 634 - Savior Helper 634
export default function(t,e,r) {
  "use strict";
  var n=r(117),i=r(126),o=r(15),a=r(172),s=n.assert;
  function u(t){
  a.call(this,"short",t),this.a=new i(t.a,16).toRed(this.red),this.b=new i(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),
  this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),
  this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}
  function c(t,e,r,n){
  a.BasePoint.call(this,t,"affine"),null===e&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new i(e,
  16),this.y=new i(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||
  (this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}
  function l(t,e,r,n){
  a.BasePoint.call(this,t,"jacobian"),null===e&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,
  this.z=new i(0)):(this.x=new i(e,16),this.y=new i(r,16),this.z=new i(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),
  this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),
  this.zOne=this.z===this.curve.one}
  o(u,a),t.exports=u,u.prototype._getEndomorphism=function(t){
  if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){
  var e,r;
  if(t.beta)e=new i(t.beta,16).toRed(this.red);
  else{
  var n=this._getEndoRoots(this.p);
  e=(e=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}
  if(t.lambda)r=new i(t.lambda,16);
  else{
  var o=this._getEndoRoots(this.n);
  0===this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))?r=o[0]:(r=o[1],s(0===this.g.mul(r).x.cmp(this.g.x.redMul(e))))}
  return{
  beta:e,lambda:r,basis:t.basis?t.basis.map((function(t){
  return{
  a:new i(t.a,16),b:new i(t.b,16)}
  }
  )):this._getEndoBasis(r)}
  }
  }
  ,u.prototype._getEndoRoots=function(t){
  var e=t===this.p?this.red:i.mont(t),r=new i(2).toRed(e).redInvm(),n=r.redNeg(),o=new i(3).toRed(e).redNeg().redSqrt().redMul(r);
  return[n.redAdd(o).fromRed(),n.redSub(o).fromRed()]}
  ,u.prototype._getEndoBasis=function(t){
  for(var e,r,n,o,a,s,u,c,l,f=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=t,h=this.n.clone(),p=new i(1),
  v=new i(0),m=new i(0),y=new i(1),g=0;
  0!==d.cmpn(0);
  ){
  var b=h.div(d);
  c=h.sub(b.mul(d)),l=m.sub(b.mul(p));
  var w=y.sub(b.mul(v));
  if(!n&&c.cmp(f)<0)e=u.neg(),r=p,n=c.neg(),o=l;
  else if(n&&2==++g)break;
  u=c,h=d,d=c,m=p,p=l,y=v,v=w}
  a=c.neg(),s=l;
  var A=n.sqr().add(o.sqr());
  return a.sqr().add(s.sqr()).cmp(A)>=0&&(a=e,s=r),n.negative&&(n=n.neg(),o=o.neg()),a.negative&&(a=a.neg(),
  s=s.neg()),[{
  a:n,b:o}
  ,{
  a:a,b:s}
  ]}
  ,u.prototype._endoSplit=function(t){
  var e=this.endo.basis,r=e[0],n=e[1],i=n.b.mul(t).divRound(this.n),o=r.b.neg().mul(t).divRound(this.n),
  a=i.mul(r.a),s=o.mul(n.a),u=i.mul(r.b),c=o.mul(n.b);
  return{
  k1:t.sub(a).sub(s),k2:u.add(c).neg()}
  }
  ,u.prototype.pointFromX=function(t,e){
  (t=new i(t,16)).red||(t=t.toRed(this.red));
  var r=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();
  if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");
  var o=n.fromRed().isOdd();
  return(e&&!o||!e&&o)&&(n=n.redNeg()),this.point(t,n)}
  ,u.prototype.validate=function(t){
  if(t.inf)return!0;
  var e=t.x,r=t.y,n=this.a.redMul(e),i=e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
  return 0===r.redSqr().redISub(i).cmpn(0)}
  ,u.prototype._endoWnafMulAdd=function(t,e,r){
  for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;
  o<t.length;
  o++){
  var a=this._endoSplit(e[o]),s=t[o],u=s._getBeta();
  a.k1.negative&&(a.k1.ineg(),s=s.neg(!0)),a.k2.negative&&(a.k2.ineg(),u=u.neg(!0)),n[2*o]=s,n[2*o+1]=u,
  i[2*o]=a.k1,i[2*o+1]=a.k2}
  for(var c=this._wnafMulAdd(1,n,i,2*o,r),l=0;
  l<2*o;
  l++)n[l]=null,i[l]=null;
  return c}
  ,o(c,a.BasePoint),u.prototype.point=function(t,e,r){
  return new c(this,t,e,r)}
  ,u.prototype.pointFromJSON=function(t,e){
  return c.fromJSON(this,t,e)}
  ,c.prototype._getBeta=function(){
  if(this.curve.endo){
  var t=this.precomputed;
  if(t&&t.beta)return t.beta;
  var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);
  if(t){
  var r=this.curve,n=function(t){
  return r.point(t.x.redMul(r.endo.beta),t.y)};
  t.beta=e,e.precomputed={
  beta:null,naf:t.naf&&{
  wnd:t.naf.wnd,points:t.naf.points.map(n)}
  ,doubles:t.doubles&&{
  step:t.doubles.step,points:t.doubles.points.map(n)}
  }
  }
  return e}
  }
  ,c.prototype.toJSON=function(){
  return this.precomputed?[this.x,this.y,this.precomputed&&{
  doubles:this.precomputed.doubles&&{
  step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)}
  ,naf:this.precomputed.naf&&{
  wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}
  }
  ]:[this.x,this.y]}
  ,c.fromJSON=function(t,e,r){
  "string"==typeof e&&(e=JSON.parse(e));
  var n=t.point(e[0],e[1],r);
  if(!e[2])return n;
  function i(e){
  return t.point(e[0],e[1],r)}
  var o=e[2];
  return n.precomputed={
  beta:null,doubles:o.doubles&&{
  step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))}
  ,naf:o.naf&&{
  wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}
  }
  ,n}
  ,c.prototype.inspect=function(){
  return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,
  2)+">"}
  ,c.prototype.isInfinity=function(){
  return this.inf}
  ,c.prototype.add=function(t){
  if(this.inf)return t;
  if(t.inf)return this;
  if(this.eq(t))return this.dbl();
  if(this.neg().eq(t))return this.curve.point(null,null);
  if(0===this.x.cmp(t.x))return this.curve.point(null,null);
  var e=this.y.redSub(t.y);
  0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()));
  var r=e.redSqr().redISub(this.x).redISub(t.x),n=e.redMul(this.x.redSub(r)).redISub(this.y);
  return this.curve.point(r,n)}
  ,c.prototype.dbl=function(){
  if(this.inf)return this;
  var t=this.y.redAdd(this.y);
  if(0===t.cmpn(0))return this.curve.point(null,null);
  var e=this.curve.a,r=this.x.redSqr(),n=t.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),
  a=i.redMul(this.x.redSub(o)).redISub(this.y);
  return this.curve.point(o,a)}
  ,c.prototype.getX=function(){
  return this.x.fromRed()}
  ,c.prototype.getY=function(){
  return this.y.fromRed()}
  ,c.prototype.mul=function(t){
  return t=new i(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?
  this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)}
  ,c.prototype.mulAdd=function(t,e,r){
  var n=[this,e],i=[t,r];
  return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)}
  ,c.prototype.jmulAdd=function(t,e,r){
  var n=[this,e],i=[t,r];
  return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)}
  ,c.prototype.eq=function(t){
  return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))}
  ,c.prototype.neg=function(t){
  if(this.inf)return this;
  var e=this.curve.point(this.x,this.y.redNeg());
  if(t&&this.precomputed){
  var r=this.precomputed,n=function(t){
  return t.neg()};
  e.precomputed={
  naf:r.naf&&{
  wnd:r.naf.wnd,points:r.naf.points.map(n)}
  ,doubles:r.doubles&&{
  step:r.doubles.step,points:r.doubles.points.map(n)}
  }
  }
  return e}
  ,c.prototype.toJ=function(){
  return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)}
  ,o(l,a.BasePoint),u.prototype.jpoint=function(t,e,r){
  return new l(this,t,e,r)}
  ,l.prototype.toP=function(){
  if(this.isInfinity())return this.curve.point(null,null);
  var t=this.z.redInvm(),e=t.redSqr(),r=this.x.redMul(e),n=this.y.redMul(e).redMul(t);
  return this.curve.point(r,n)}
  ,l.prototype.neg=function(){
  return this.curve.jpoint(this.x,this.y.redNeg(),this.z)}
  ,l.prototype.add=function(t){
  if(this.isInfinity())return t;
  if(t.isInfinity())return this;
  var e=t.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(e),i=t.x.redMul(r),o=this.y.redMul(e.redMul(t.z)),
  a=t.y.redMul(r.redMul(this.z)),s=n.redSub(i),u=o.redSub(a);
  if(0===s.cmpn(0))return 0!==u.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();
  var c=s.redSqr(),l=c.redMul(s),f=n.redMul(c),d=u.redSqr().redIAdd(l).redISub(f).redISub(f),h=u.redMul(f.redISub(d)).redISub(o.redMul(l)),
  p=this.z.redMul(t.z).redMul(s);
  return this.curve.jpoint(d,h,p)}
  ,l.prototype.mixedAdd=function(t){
  if(this.isInfinity())return t.toJ();
  if(t.isInfinity())return this;
  var e=this.z.redSqr(),r=this.x,n=t.x.redMul(e),i=this.y,o=t.y.redMul(e).redMul(this.z),a=r.redSub(n),
  s=i.redSub(o);
  if(0===a.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();
  var u=a.redSqr(),c=u.redMul(a),l=r.redMul(u),f=s.redSqr().redIAdd(c).redISub(l).redISub(l),d=s.redMul(l.redISub(f)).redISub(i.redMul(c)),
  h=this.z.redMul(a);
  return this.curve.jpoint(f,d,h)}
  ,l.prototype.dblp=function(t){
  if(0===t)return this;
  if(this.isInfinity())return this;
  if(!t)return this.dbl();
  var e;
  if(this.curve.zeroA||this.curve.threeA){
  var r=this;
  for(e=0;
  e<t;
  e++)r=r.dbl();
  return r}
  var n=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,s=this.z,u=s.redSqr().redSqr(),c=a.redAdd(a);
  for(e=0;
  e<t;
  e++){
  var l=o.redSqr(),f=c.redSqr(),d=f.redSqr(),h=l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u)),p=o.redMul(f),
  v=h.redSqr().redISub(p.redAdd(p)),m=p.redISub(v),y=h.redMul(m);
  y=y.redIAdd(y).redISub(d);
  var g=c.redMul(s);
  e+1<t&&(u=u.redMul(d)),o=v,s=g,c=y}
  return this.curve.jpoint(o,c.redMul(i),s)}
  ,l.prototype.dbl=function(){
  return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():
  this._dbl()}
  ,l.prototype._zeroDbl=function(){
  var t,e,r;
  if(this.zOne){
  var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);
  a=a.redIAdd(a);
  var s=n.redAdd(n).redIAdd(n),u=s.redSqr().redISub(a).redISub(a),c=o.redIAdd(o);
  c=(c=c.redIAdd(c)).redIAdd(c),t=u,e=s.redMul(a.redISub(u)).redISub(c),r=this.y.redAdd(this.y)}
  else{
  var l=this.x.redSqr(),f=this.y.redSqr(),d=f.redSqr(),h=this.x.redAdd(f).redSqr().redISub(l).redISub(d);
  h=h.redIAdd(h);
  var p=l.redAdd(l).redIAdd(l),v=p.redSqr(),m=d.redIAdd(d);
  m=(m=m.redIAdd(m)).redIAdd(m),t=v.redISub(h).redISub(h),e=p.redMul(h.redISub(t)).redISub(m),r=(r=this.y.redMul(this.z)).redIAdd(r)}
  return this.curve.jpoint(t,e,r)}
  ,l.prototype._threeDbl=function(){
  var t,e,r;
  if(this.zOne){
  var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o);
  a=a.redIAdd(a);
  var s=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),u=s.redSqr().redISub(a).redISub(a);
  t=u;
  var c=o.redIAdd(o);
  c=(c=c.redIAdd(c)).redIAdd(c),e=s.redMul(a.redISub(u)).redISub(c),r=this.y.redAdd(this.y)}
  else{
  var l=this.z.redSqr(),f=this.y.redSqr(),d=this.x.redMul(f),h=this.x.redSub(l).redMul(this.x.redAdd(l));
  h=h.redAdd(h).redIAdd(h);
  var p=d.redIAdd(d),v=(p=p.redIAdd(p)).redAdd(p);
  t=h.redSqr().redISub(v),r=this.y.redAdd(this.z).redSqr().redISub(f).redISub(l);
  var m=f.redSqr();
  m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),e=h.redMul(p.redISub(t)).redISub(m)}
  return this.curve.jpoint(t,e,r)}
  ,l.prototype._dbl=function(){
  var t=this.curve.a,e=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=e.redSqr(),a=r.redSqr(),s=o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
  u=e.redAdd(e),c=(u=u.redIAdd(u)).redMul(a),l=s.redSqr().redISub(c.redAdd(c)),f=c.redISub(l),d=a.redSqr();
  d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);
  var h=s.redMul(f).redISub(d),p=r.redAdd(r).redMul(n);
  return this.curve.jpoint(l,h,p)}
  ,l.prototype.trpl=function(){
  if(!this.curve.zeroA)return this.dbl().add(this);
  var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),n=e.redSqr(),i=t.redAdd(t).redIAdd(t),o=i.redSqr(),
  a=this.x.redAdd(e).redSqr().redISub(t).redISub(n),s=(a=(a=(a=a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
  u=n.redIAdd(n);
  u=(u=(u=u.redIAdd(u)).redIAdd(u)).redIAdd(u);
  var c=i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),l=e.redMul(c);
  l=(l=l.redIAdd(l)).redIAdd(l);
  var f=this.x.redMul(s).redISub(l);
  f=(f=f.redIAdd(f)).redIAdd(f);
  var d=this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)));
  d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);
  var h=this.z.redAdd(a).redSqr().redISub(r).redISub(s);
  return this.curve.jpoint(f,d,h)}
  ,l.prototype.mul=function(t,e){
  return t=new i(t,e),this.curve._wnafMul(this,t)}
  ,l.prototype.eq=function(t){
  if("affine"===t.type)return this.eq(t.toJ());
  if(this===t)return!0;
  var e=this.z.redSqr(),r=t.z.redSqr();
  if(0!==this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))return!1;
  var n=e.redMul(this.z),i=r.redMul(t.z);
  return 0===this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)}
  ,l.prototype.eqXToP=function(t){
  var e=this.z.redSqr(),r=t.toRed(this.curve.red).redMul(e);
  if(0===this.x.cmp(r))return!0;
  for(var n=t.clone(),i=this.curve.redN.redMul(e);;
  ){
  if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;
  if(r.redIAdd(i),0===this.x.cmp(r))return!0}
  }
  ,l.prototype.inspect=function(){
  return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,
  2)+" z: "+this.z.toString(16,2)+">"}
  ,l.prototype.isInfinity=function(){
  return 0===this.z.cmpn(0)}
  };
