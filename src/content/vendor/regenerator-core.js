/**
 * src/content/vendor/regenerator-core.js
 * 
 * Shared Canonical Babel Regenerator Runtime Core
 * Deduplicated in Milestone 2 to eliminate 164 inlined duplicates (~317 KB raw savings).
 */

function f(t,e,r,n){var i=Object.defineProperty;try{i({},"",{})}catch(t){i=0}(f=function(t,e,r,n){function o(e,r){f(t,e,(function(t){return this._invoke(e,r,t)}))}e?i?i(t,e,{value:r,enumerable:!n,configurable:!n,writable:!n}):t[e]=r:(o("next",0),o("throw",1),o("return",2))})(t,e,r,n)}

var _coreInstance;
function _createRegen(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var t,e,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.toStringTag||"@@toStringTag";function o(r,n,i,o){var u=n&&n.prototype instanceof s?n:s,c=Object.create(u.prototype);return f(c,"_invoke",function(r,n,i){var o,s,u,c=0,l=i||[],f=!1,d={p:0,n:0,v:t,a:h,f:h.bind(t,4),d:function(e,r){return o=e,s=0,u=t,d.n=r,a}};function h(r,n){for(s=r,u=n,e=0;!f&&c&&!i&&e<l.length;e++){var i,o=l[e],h=d.p,p=o[2];r>3?(i=p===n)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=t):o[0]<=h&&((i=r<2&&h<o[1])?(s=0,d.v=n,d.n=o[1]):h<p&&(i=r<3||o[0]>n||n>p)&&(o[4]=r,o[5]=n,d.n=p,s=0))}if(i||r>1)return a;throw f=!0,n}return function(i,l,p){if(c>1)throw TypeError("Generator is already running");for(f&&1===l&&h(l,p),s=l,u=p;(e=s<2?t:u)||!f;){o||(s?s<3?(s>1&&(d.n=-1),h(s,u)):d.n=u:d.v=u);try{if(c=2,o){if(s||(i="next"),e=o[i]){if(!(e=e.call(o,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,s<2&&(s=0)}else 1===s&&(e=o.return)&&e.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+i+"' method"),s=1);o=t}else if((e=(f=d.n<0)?u:r.call(n,d))!==a)break}catch(e){o=t,s=1,u=e}finally{c=1}}return{value:e,done:f}}}(r,i,o),!0),c}var a={};function s(){}function u(){}function c(){}e=Object.getPrototypeOf;var d=[][n]?e(e([][n]())):(f(e={},n,(function(){return this})),e),h=c.prototype=s.prototype=Object.create(d);function p(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,f(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return u.prototype=c,f(h,"constructor",c),f(c,"constructor",u),u.displayName="GeneratorFunction",f(c,i,"GeneratorFunction"),f(h),f(h,i,"Generator"),f(h,n,(function(){return this})),f(h,"toString",(function(){return"[object Generator]"})),(_coreInstance={w:o,m:p})}

module.exports = function getSharedRegenerator() {
  if (_coreInstance) return _coreInstance;
  return _createRegen();
};
