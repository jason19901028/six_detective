!(function(t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function(t, e) {
    var r = {};
    function n(t, e) {
      var r;
      return (
        t.some(function(t) {
          var n = t.finalFirstRows,
            o = t.finalLastRows;
          return (n <= e || o >= e) && ((r = t), !0);
        }),
        r
      );
    }
    (r.copeYValue = function(t) {
      for (
        var e,
          r = t.row,
          o = t.rowLength,
          i = t.fri,
          a = t.defaultRowHeight,
          u = t.cols,
          l = t.streamCharts,
          f = u.width,
          s = u._,
          c = u.len,
          d = [],
          v = { rowIndex: 0 },
          h = 0,
          p = 0,
          g = 0;
        g < o;
        g++
      )
        if (
          (g > 0 &&
            g % 1e5 == 0 &&
            ((v.val = h), (v.friValue = h - p), (v.rowIndex = g), d.push(v), (v = { rowIndex: 0 })),
          i === g && (p = h),
          r[g] && r[g].height)
        )
          h += r[g].height;
        else {
          var w = !1;
          if (!e) {
            if (!(e = n(l, g))) {
              h += a;
              continue;
            }
            w = !0;
          }
          var b = e,
            y = b.finalFirstRows,
            m = b.finalLastRows;
          !w && (g < y || g > m) && (e = n(l, g));
          var x = e;
          (y = x.finalFirstRows),
            (m = x.finalLastRows),
            r[y] && r[y].height ? (h += r[y].height) : (h += a);
        }
      for (var j = 0, O = c - 1; O >= 0; O--) {
        var R = s[O],
          _ = f;
        R && void 0 !== R.width && (_ = R.width), (j += _);
      }
      return { result: d, totalHeight: h, totalWidth: j };
    }),
      addEventListener(
        'message',
        function(t) {
          var e = t.data;
          if ('calcYValue' === e.actionApi) {
            var n = r.copeYValue(e),
              o = n.result,
              i = void 0 === o ? [] : o,
              a = n.totalHeight,
              u = n.totalWidth;
            postMessage({ result: i, totalHeight: a, totalWidth: u });
          }
        },
        !1,
      ),
      (t.exports = r);
  },
]);
//# sourceMappingURL=workerCalc.js.map
