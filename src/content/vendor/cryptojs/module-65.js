// Module 65 [platform]
export default function(t,e,r){var n;t.exports=(n=r(4),r(8),n.pad.Iso10126={pad:function(t,e){var r=4*e,i=r-t.sigBytes%r;t.concat(n.lib.WordArray.random(i-1)).concat(n.lib.WordArray.create([i<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},n.pad.Iso10126)};
