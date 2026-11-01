// Module 494 - Savior Helper 494
export default function(t,e,r) {
  "use strict";
  var n=r(122).rotr32;
  function i(t,e,r){
  return t&e^~t&r}
  function o(t,e,r){
  return t&e^t&r^e&r}
  function a(t,e,r){
  return t^e^r}
  e.ft_1=function(t,e,r,n){
  return 0===t?i(e,r,n):1===t||3===t?a(e,r,n):2===t?o(e,r,n):void 0}
  ,e.ch32=i,e.maj32=o,e.p32=a,e.s0_256=function(t){
  return n(t,2)^n(t,13)^n(t,22)}
  ,e.s1_256=function(t){
  return n(t,6)^n(t,11)^n(t,25)}
  ,e.g0_256=function(t){
  return n(t,7)^n(t,18)^t>>>3}
  ,e.g1_256=function(t){
  return n(t,17)^n(t,19)^t>>>10}
  };
