! function(r) {
    var n = function(r, n) { return r << n | r >>> 32 - n },
        t = function(r, n) { var t, o, e, u, f; return e = 2147483648 & r, u = 2147483648 & n, t = 1073741824 & r, o = 1073741824 & n, f = (1073741823 & r) + (1073741823 & n), t & o ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u },
        o = function(r, n, t) { return r & n | ~r & t },
        e = function(r, n, t) { return r & t | n & ~t },
        u = function(r, n, t) { return r ^ n ^ t },
        f = function(r, n, t) { return n ^ (r | ~t) },
        i = function(r, e, u, f, i, a, c) { return r = t(r, t(t(o(e, u, f), i), c)), t(n(r, a), e) },
        a = function(r, o, u, f, i, a, c) { return r = t(r, t(t(e(o, u, f), i), c)), t(n(r, a), o) },
        c = function(r, o, e, f, i, a, c) { return r = t(r, t(t(u(o, e, f), i), c)), t(n(r, a), o) },
        C = function(r, o, e, u, i, a, c) { return r = t(r, t(t(f(o, e, u), i), c)), t(n(r, a), o) },
        g = function(r) { for (var n, t = r.length, o = t + 8, e = (o - o % 64) / 64, u = 16 * (e + 1), f = Array(u - 1), i = 0, a = 0; t > a;) n = (a - a % 4) / 4, i = a % 4 * 8, f[n] = f[n] | r.charCodeAt(a) << i, a++; return n = (a - a % 4) / 4, i = a % 4 * 8, f[n] = f[n] | 128 << i, f[u - 2] = t << 3, f[u - 1] = t >>> 29, f },
        h = function(r) {
            var n, t, o = "",
                e = "";
            for (t = 0; 3 >= t; t++) n = r >>> 8 * t & 255, e = "0" + n.toString(16), o += e.substr(e.length - 2, 2);
            return o
        },
        d = function(r) {
            r = r.replace(/\x0d\x0a/g, "\n");
            for (var n = "", t = 0; t < r.length; t++) {
                var o = r.charCodeAt(t);
                128 > o ? n += String.fromCharCode(o) : o > 127 && 2048 > o ? (n += String.fromCharCode(o >> 6 | 192), n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128))
            }
            return n
        };
    r.extend({
        md5: function(r) {
            var n, o, e, u, f, v, m, S, l, A = Array(),
                s = 7,
                x = 12,
                y = 17,
                b = 22,
                j = 5,
                p = 9,
                w = 14,
                L = 20,
                Q = 4,
                k = 11,
                q = 16,
                z = 23,
                B = 6,
                D = 10,
                E = 15,
                F = 21;
            for (r = d(r), A = g(r), v = 1732584193, m = 4023233417, S = 2562383102, l = 271733878, n = 0; n < A.length; n += 16) o = v, e = m, u = S, f = l, v = i(v, m, S, l, A[n + 0], s, 3614090360), l = i(l, v, m, S, A[n + 1], x, 3905402710), S = i(S, l, v, m, A[n + 2], y, 606105819), m = i(m, S, l, v, A[n + 3], b, 3250441966), v = i(v, m, S, l, A[n + 4], s, 4118548399), l = i(l, v, m, S, A[n + 5], x, 1200080426), S = i(S, l, v, m, A[n + 6], y, 2821735955), m = i(m, S, l, v, A[n + 7], b, 4249261313), v = i(v, m, S, l, A[n + 8], s, 1770035416), l = i(l, v, m, S, A[n + 9], x, 2336552879), S = i(S, l, v, m, A[n + 10], y, 4294925233), m = i(m, S, l, v, A[n + 11], b, 2304563134), v = i(v, m, S, l, A[n + 12], s, 1804603682), l = i(l, v, m, S, A[n + 13], x, 4254626195), S = i(S, l, v, m, A[n + 14], y, 2792965006), m = i(m, S, l, v, A[n + 15], b, 1236535329), v = a(v, m, S, l, A[n + 1], j, 4129170786), l = a(l, v, m, S, A[n + 6], p, 3225465664), S = a(S, l, v, m, A[n + 11], w, 643717713), m = a(m, S, l, v, A[n + 0], L, 3921069994), v = a(v, m, S, l, A[n + 5], j, 3593408605), l = a(l, v, m, S, A[n + 10], p, 38016083), S = a(S, l, v, m, A[n + 15], w, 3634488961), m = a(m, S, l, v, A[n + 4], L, 3889429448), v = a(v, m, S, l, A[n + 9], j, 568446438), l = a(l, v, m, S, A[n + 14], p, 3275163606), S = a(S, l, v, m, A[n + 3], w, 4107603335), m = a(m, S, l, v, A[n + 8], L, 1163531501), v = a(v, m, S, l, A[n + 13], j, 2850285829), l = a(l, v, m, S, A[n + 2], p, 4243563512), S = a(S, l, v, m, A[n + 7], w, 1735328473), m = a(m, S, l, v, A[n + 12], L, 2368359562), v = c(v, m, S, l, A[n + 5], Q, 4294588738), l = c(l, v, m, S, A[n + 8], k, 2272392833), S = c(S, l, v, m, A[n + 11], q, 1839030562), m = c(m, S, l, v, A[n + 14], z, 4259657740), v = c(v, m, S, l, A[n + 1], Q, 2763975236), l = c(l, v, m, S, A[n + 4], k, 1272893353), S = c(S, l, v, m, A[n + 7], q, 4139469664), m = c(m, S, l, v, A[n + 10], z, 3200236656), v = c(v, m, S, l, A[n + 13], Q, 681279174), l = c(l, v, m, S, A[n + 0], k, 3936430074), S = c(S, l, v, m, A[n + 3], q, 3572445317), m = c(m, S, l, v, A[n + 6], z, 76029189), v = c(v, m, S, l, A[n + 9], Q, 3654602809), l = c(l, v, m, S, A[n + 12], k, 3873151461), S = c(S, l, v, m, A[n + 15], q, 530742520), m = c(m, S, l, v, A[n + 2], z, 3299628645), v = C(v, m, S, l, A[n + 0], B, 4096336452), l = C(l, v, m, S, A[n + 7], D, 1126891415), S = C(S, l, v, m, A[n + 14], E, 2878612391), m = C(m, S, l, v, A[n + 5], F, 4237533241), v = C(v, m, S, l, A[n + 12], B, 1700485571), l = C(l, v, m, S, A[n + 3], D, 2399980690), S = C(S, l, v, m, A[n + 10], E, 4293915773), m = C(m, S, l, v, A[n + 1], F, 2240044497), v = C(v, m, S, l, A[n + 8], B, 1873313359), l = C(l, v, m, S, A[n + 15], D, 4264355552), S = C(S, l, v, m, A[n + 6], E, 2734768916), m = C(m, S, l, v, A[n + 13], F, 1309151649), v = C(v, m, S, l, A[n + 4], B, 4149444226), l = C(l, v, m, S, A[n + 11], D, 3174756917), S = C(S, l, v, m, A[n + 2], E, 718787259), m = C(m, S, l, v, A[n + 9], F, 3951481745), v = t(v, o), m = t(m, e), S = t(S, u), l = t(l, f);
            var G = h(v) + h(m) + h(S) + h(l);
            return G.toLowerCase()
        }
    })
}(jQuery);





// kingdom module wrapper =======================
try {
    if (seajs) {
        define(function(require, exports, module) {
            module.exports = jQuery.md5;
        });
    }
} catch (_error) {}