// Module 64 [platform]
export default function(t,e,r){var n;t.exports=(n=r(4),r(8),n.pad.AnsiX923={pad:function(t,e){var r=t.sigBytes,n=4*e,i=n-r%n,o=r+i-1;t.clamp(),t.words[o>>>2]|=i<<24-o%4*8,t.sigBytes+=i},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},n.pad.Ansix923)};
