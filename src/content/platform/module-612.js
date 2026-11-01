// Module 612 [platform]
module.exports = function(t,e,r){(function(t){var n=r(155);function i(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}e.encrypt=function(e,r){for(;e._cache.length<r.length;)e._cache=t.concat([e._cache,i(e)]);var o=e._cache.slice(0,r.length);return e._cache=e._cache.slice(r.length),n(r,o)}}).call(this,r(27).Buffer)};
