! function(r) {
    function e(r, e, n, t, o, u) {
        r = String(r);
        for (var a = 0, c = 0, f = r.length, d = "", i = 0; f > c;) {
            var h = r.charCodeAt(c);
            for (h = 256 > h ? n[h] : -1, a = (a << o) + h, i += o; i >= u;) {
                i -= u;
                var C = a >> i;
                d += t.charAt(C), a ^= C << i
            }++c
        }
        return !e && i > 0 && (d += t.charAt(a << u - i)), d
    }
    for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = "", o = [256], u = [256], a = 0, c = { encode: function(r) { var e = r.replace(/[\u0080-\u07ff]/g, function(r) { var e = r.charCodeAt(0); return String.fromCharCode(192 | e >> 6, 128 | 63 & e) }).replace(/[\u0800-\uffff]/g, function(r) { var e = r.charCodeAt(0); return String.fromCharCode(224 | e >> 12, 128 | e >> 6 & 63, 128 | 63 & e) }); return e }, decode: function(r) { var e = r.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(r) { var e = (15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2); return String.fromCharCode(e) }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(r) { var e = (31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1); return String.fromCharCode(e) }); return e } }; 256 > a;) {
        var f = String.fromCharCode(a);
        t += f, u[a] = a, o[a] = n.indexOf(f), ++a
    }
    var d = r.base64 = function(r, e, n) { return e ? d[r](e, n) : r ? null : this };
    d.btoa = d.encode = function(r, t) { return r = d.raw === !1 || d.utf8encode || t ? c.encode(r) : r, r = e(r, !1, u, n, 8, 6), r + "====".slice(r.length % 4 || 4) }, d.atob = d.decode = function(r, n) {
        r = String(r).split("=");
        var u = r.length;
        do --u, r[u] = e(r[u], !0, o, t, 6, 8); while (u > 0);
        return r = r.join(""), d.raw === !1 || d.utf8decode || n ? c.decode(r) : r
    }
}(jQuery);





// kingdom module wrapper =======================
try {
    if (seajs) {
        define(function(require, exports, module) {
            module.exports = jQuery.base64;
        });
    }
} catch (_error) {}