"use strict"; function unicode_to_utf8(r) { for (var o = "", t = 0; t < r.length; t++) { var e = r.charCodeAt(t); e <= 127 ? o += String.fromCharCode(e) : e >= 128 && e <= 2047 ? (o += String.fromCharCode(e >> 6 | 192), o += String.fromCharCode(63 & e | 128)) : (o += String.fromCharCode(e >> 12 | 224), o += String.fromCharCode(e >> 6 & 63 | 128), o += String.fromCharCode(63 & e | 128)) } return o } function utf8_to_unicode(r) { for (var o, t, e, n = "", C = 0; C < r.length;)(o = r.charCodeAt(C)) < 128 ? (n += String.fromCharCode(o), C++) : o >= 192 && o < 224 ? (t = r.charCodeAt(C + 1), n += String.fromCharCode((31 & o) << 6 | 63 & t), C += 2) : (t = r.charCodeAt(C + 1), e = r.charCodeAt(C + 2), n += String.fromCharCode((15 & o) << 12 | (63 & t) << 6 | 63 & e), C += 3); return n } function encode_utf8(r) { var o, t = !1; for (o = 0; o < r.length; o++)if (157 == r.charCodeAt(o) || r.charCodeAt(o) > 255) { t = !0; break } return t ? String.fromCharCode(157) + unicode_to_utf8(r) : r } function decode_utf8(r) { return r.length > 0 && 157 == r.charCodeAt(0) ? utf8_to_unicode(r.substring(1)) : r }