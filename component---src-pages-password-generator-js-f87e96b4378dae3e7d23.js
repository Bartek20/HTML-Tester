/*! For license information please see component---src-pages-password-generator-js-f87e96b4378dae3e7d23.js.LICENSE.txt */
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [6575], {
        83616: function(e, r) {
            "use strict";
            r.byteLength = function(e) {
                var r = l(e),
                    a = r[0],
                    t = r[1];
                return 3 * (a + t) / 4 - t
            }, r.toByteArray = function(e) {
                var r, a, i = l(e),
                    o = i[0],
                    s = i[1],
                    u = new n(function(e, r, a) {
                        return 3 * (r + a) / 4 - a
                    }(0, o, s)),
                    c = 0,
                    d = s > 0 ? o - 4 : o;
                for (a = 0; a < d; a += 4) r = t[e.charCodeAt(a)] << 18 | t[e.charCodeAt(a + 1)] << 12 | t[e.charCodeAt(a + 2)] << 6 | t[e.charCodeAt(a + 3)], u[c++] = r >> 16 & 255, u[c++] = r >> 8 & 255, u[c++] = 255 & r;
                2 === s && (r = t[e.charCodeAt(a)] << 2 | t[e.charCodeAt(a + 1)] >> 4, u[c++] = 255 & r);
                1 === s && (r = t[e.charCodeAt(a)] << 10 | t[e.charCodeAt(a + 1)] << 4 | t[e.charCodeAt(a + 2)] >> 2, u[c++] = r >> 8 & 255, u[c++] = 255 & r);
                return u
            }, r.fromByteArray = function(e) {
                for (var r, t = e.length, n = t % 3, i = [], o = 16383, s = 0, l = t - n; s < l; s += o) i.push(u(e, s, s + o > l ? l : s + o));
                1 === n ? (r = e[t - 1], i.push(a[r >> 2] + a[r << 4 & 63] + "==")) : 2 === n && (r = (e[t - 2] << 8) + e[t - 1], i.push(a[r >> 10] + a[r >> 4 & 63] + a[r << 2 & 63] + "="));
                return i.join("")
            };
            for (var a = [], t = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = i.length; o < s; ++o) a[o] = i[o], t[i.charCodeAt(o)] = o;

            function l(e) {
                var r = e.length;
                if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var a = e.indexOf("=");
                return -1 === a && (a = r), [a, a === r ? 0 : 4 - a % 4]
            }

            function u(e, r, t) {
                for (var n, i, o = [], s = r; s < t; s += 3) n = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(a[(i = n) >> 18 & 63] + a[i >> 12 & 63] + a[i >> 6 & 63] + a[63 & i]);
                return o.join("")
            }
            t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63
        },
        41422: function(e, r, a) {
            "use strict";
            var t = a(83616),
                n = a(78259),
                i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = l, r.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return l.alloc(+e)
            }, r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;

            function s(e) {
                if (e > o) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var r = new Uint8Array(e);
                return Object.setPrototypeOf(r, l.prototype), r
            }

            function l(e, r, a) {
                if ("number" == typeof e) {
                    if ("string" == typeof r) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return d(e)
                }
                return u(e, r, a)
            }

            function u(e, r, a) {
                if ("string" == typeof e) return function(e, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    var a = 0 | m(e, r),
                        t = s(a),
                        n = t.write(e, r);
                    n !== a && (t = t.slice(0, n));
                    return t
                }(e, r);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (D(e, Uint8Array)) {
                        var r = new Uint8Array(e);
                        return g(r.buffer, r.byteOffset, r.byteLength)
                    }
                    return p(e)
                }(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (D(e, ArrayBuffer) || e && D(e.buffer, ArrayBuffer)) return g(e, r, a);
                if ("undefined" != typeof SharedArrayBuffer && (D(e, SharedArrayBuffer) || e && D(e.buffer, SharedArrayBuffer))) return g(e, r, a);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var t = e.valueOf && e.valueOf();
                if (null != t && t !== e) return l.from(t, r, a);
                var n = function(e) {
                    if (l.isBuffer(e)) {
                        var r = 0 | h(e.length),
                            a = s(r);
                        return 0 === a.length || e.copy(a, 0, 0, r), a
                    }
                    if (void 0 !== e.length) return "number" != typeof e.length || L(e.length) ? s(0) : p(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return p(e.data)
                }(e);
                if (n) return n;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), r, a);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function c(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function d(e) {
                return c(e), s(e < 0 ? 0 : 0 | h(e))
            }

            function p(e) {
                for (var r = e.length < 0 ? 0 : 0 | h(e.length), a = s(r), t = 0; t < r; t += 1) a[t] = 255 & e[t];
                return a
            }

            function g(e, r, a) {
                if (r < 0 || e.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < r + (a || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var t;
                return t = void 0 === r && void 0 === a ? new Uint8Array(e) : void 0 === a ? new Uint8Array(e, r) : new Uint8Array(e, r, a), Object.setPrototypeOf(t, l.prototype), t
            }

            function h(e) {
                if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                return 0 | e
            }

            function m(e, r) {
                if (l.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || D(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var a = e.length,
                    t = arguments.length > 2 && !0 === arguments[2];
                if (!t && 0 === a) return 0;
                for (var n = !1;;) switch (r) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return a;
                    case "utf8":
                    case "utf-8":
                        return M(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * a;
                    case "hex":
                        return a >>> 1;
                    case "base64":
                        return Z(e).length;
                    default:
                        if (n) return t ? -1 : M(e).length;
                        r = ("" + r).toLowerCase(), n = !0
                }
            }

            function f(e, r, a) {
                var t = !1;
                if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
                if ((a >>>= 0) <= (r >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return T(this, r, a);
                    case "utf8":
                    case "utf-8":
                        return B(this, r, a);
                    case "ascii":
                        return S(this, r, a);
                    case "latin1":
                    case "binary":
                        return P(this, r, a);
                    case "base64":
                        return j(this, r, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, r, a);
                    default:
                        if (t) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), t = !0
                }
            }

            function y(e, r, a) {
                var t = e[r];
                e[r] = e[a], e[a] = t
            }

            function b(e, r, a, t, n) {
                if (0 === e.length) return -1;
                if ("string" == typeof a ? (t = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), L(a = +a) && (a = n ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
                    if (n) return -1;
                    a = e.length - 1
                } else if (a < 0) {
                    if (!n) return -1;
                    a = 0
                }
                if ("string" == typeof r && (r = l.from(r, t)), l.isBuffer(r)) return 0 === r.length ? -1 : v(e, r, a, t, n);
                if ("number" == typeof r) return r &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, r, a) : Uint8Array.prototype.lastIndexOf.call(e, r, a) : v(e, [r], a, t, n);
                throw new TypeError("val must be string, number or Buffer")
            }

            function v(e, r, a, t, n) {
                var i, o = 1,
                    s = e.length,
                    l = r.length;
                if (void 0 !== t && ("ucs2" === (t = String(t).toLowerCase()) || "ucs-2" === t || "utf16le" === t || "utf-16le" === t)) {
                    if (e.length < 2 || r.length < 2) return -1;
                    o = 2, s /= 2, l /= 2, a /= 2
                }

                function u(e, r) {
                    return 1 === o ? e[r] : e.readUInt16BE(r * o)
                }
                if (n) {
                    var c = -1;
                    for (i = a; i < s; i++)
                        if (u(e, i) === u(r, -1 === c ? 0 : i - c)) {
                            if (-1 === c && (c = i), i - c + 1 === l) return c * o
                        } else -1 !== c && (i -= i - c), c = -1
                } else
                    for (a + l > s && (a = s - l), i = a; i >= 0; i--) {
                        for (var d = !0, p = 0; p < l; p++)
                            if (u(e, i + p) !== u(r, p)) {
                                d = !1;
                                break
                            }
                        if (d) return i
                    }
                return -1
            }

            function w(e, r, a, t) {
                a = Number(a) || 0;
                var n = e.length - a;
                t ? (t = Number(t)) > n && (t = n) : t = n;
                var i = r.length;
                t > i / 2 && (t = i / 2);
                for (var o = 0; o < t; ++o) {
                    var s = parseInt(r.substr(2 * o, 2), 16);
                    if (L(s)) return o;
                    e[a + o] = s
                }
                return o
            }

            function k(e, r, a, t) {
                return N(M(r, e.length - a), e, a, t)
            }

            function x(e, r, a, t) {
                return N(function(e) {
                    for (var r = [], a = 0; a < e.length; ++a) r.push(255 & e.charCodeAt(a));
                    return r
                }(r), e, a, t)
            }

            function z(e, r, a, t) {
                return N(Z(r), e, a, t)
            }

            function C(e, r, a, t) {
                return N(function(e, r) {
                    for (var a, t, n, i = [], o = 0; o < e.length && !((r -= 2) < 0); ++o) t = (a = e.charCodeAt(o)) >> 8, n = a % 256, i.push(n), i.push(t);
                    return i
                }(r, e.length - a), e, a, t)
            }

            function j(e, r, a) {
                return 0 === r && a === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(r, a))
            }

            function B(e, r, a) {
                a = Math.min(e.length, a);
                for (var t = [], n = r; n < a;) {
                    var i, o, s, l, u = e[n],
                        c = null,
                        d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (n + d <= a) switch (d) {
                        case 1:
                            u < 128 && (c = u);
                            break;
                        case 2:
                            128 == (192 & (i = e[n + 1])) && (l = (31 & u) << 6 | 63 & i) > 127 && (c = l);
                            break;
                        case 3:
                            i = e[n + 1], o = e[n + 2], 128 == (192 & i) && 128 == (192 & o) && (l = (15 & u) << 12 | (63 & i) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (c = l);
                            break;
                        case 4:
                            i = e[n + 1], o = e[n + 2], s = e[n + 3], 128 == (192 & i) && 128 == (192 & o) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l)
                    }
                    null === c ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, t.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), t.push(c), n += d
                }
                return function(e) {
                    var r = e.length;
                    if (r <= E) return String.fromCharCode.apply(String, e);
                    var a = "",
                        t = 0;
                    for (; t < r;) a += String.fromCharCode.apply(String, e.slice(t, t += E));
                    return a
                }(t)
            }
            r.kMaxLength = o, l.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var e = new Uint8Array(1),
                        r = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), 42 === e.foo()
                } catch (a) {
                    return !1
                }
            }(), l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(l.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (l.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(l.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (l.isBuffer(this)) return this.byteOffset
                }
            }), l.poolSize = 8192, l.from = function(e, r, a) {
                return u(e, r, a)
            }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(e, r, a) {
                return function(e, r, a) {
                    return c(e), e <= 0 ? s(e) : void 0 !== r ? "string" == typeof a ? s(e).fill(r, a) : s(e).fill(r) : s(e)
                }(e, r, a)
            }, l.allocUnsafe = function(e) {
                return d(e)
            }, l.allocUnsafeSlow = function(e) {
                return d(e)
            }, l.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== l.prototype
            }, l.compare = function(e, r) {
                if (D(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), D(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), !l.isBuffer(e) || !l.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === r) return 0;
                for (var a = e.length, t = r.length, n = 0, i = Math.min(a, t); n < i; ++n)
                    if (e[n] !== r[n]) {
                        a = e[n], t = r[n];
                        break
                    }
                return a < t ? -1 : t < a ? 1 : 0
            }, l.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function(e, r) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return l.alloc(0);
                var a;
                if (void 0 === r)
                    for (r = 0, a = 0; a < e.length; ++a) r += e[a].length;
                var t = l.allocUnsafe(r),
                    n = 0;
                for (a = 0; a < e.length; ++a) {
                    var i = e[a];
                    if (D(i, Uint8Array)) n + i.length > t.length ? l.from(i).copy(t, n) : Uint8Array.prototype.set.call(t, i, n);
                    else {
                        if (!l.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(t, n)
                    }
                    n += i.length
                }
                return t
            }, l.byteLength = m, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var r = 0; r < e; r += 2) y(this, r, r + 1);
                return this
            }, l.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var r = 0; r < e; r += 4) y(this, r, r + 3), y(this, r + 1, r + 2);
                return this
            }, l.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var r = 0; r < e; r += 8) y(this, r, r + 7), y(this, r + 1, r + 6), y(this, r + 2, r + 5), y(this, r + 3, r + 4);
                return this
            }, l.prototype.toString = function() {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? B(this, 0, e) : f.apply(this, arguments)
            }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === l.compare(this, e)
            }, l.prototype.inspect = function() {
                var e = "",
                    a = r.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (e += " ... "), "<Buffer " + e + ">"
            }, i && (l.prototype[i] = l.prototype.inspect), l.prototype.compare = function(e, r, a, t, n) {
                if (D(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === r && (r = 0), void 0 === a && (a = e ? e.length : 0), void 0 === t && (t = 0), void 0 === n && (n = this.length), r < 0 || a > e.length || t < 0 || n > this.length) throw new RangeError("out of range index");
                if (t >= n && r >= a) return 0;
                if (t >= n) return -1;
                if (r >= a) return 1;
                if (this === e) return 0;
                for (var i = (n >>>= 0) - (t >>>= 0), o = (a >>>= 0) - (r >>>= 0), s = Math.min(i, o), u = this.slice(t, n), c = e.slice(r, a), d = 0; d < s; ++d)
                    if (u[d] !== c[d]) {
                        i = u[d], o = c[d];
                        break
                    }
                return i < o ? -1 : o < i ? 1 : 0
            }, l.prototype.includes = function(e, r, a) {
                return -1 !== this.indexOf(e, r, a)
            }, l.prototype.indexOf = function(e, r, a) {
                return b(this, e, r, a, !0)
            }, l.prototype.lastIndexOf = function(e, r, a) {
                return b(this, e, r, a, !1)
            }, l.prototype.write = function(e, r, a, t) {
                if (void 0 === r) t = "utf8", a = this.length, r = 0;
                else if (void 0 === a && "string" == typeof r) t = r, a = this.length, r = 0;
                else {
                    if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    r >>>= 0, isFinite(a) ? (a >>>= 0, void 0 === t && (t = "utf8")) : (t = a, a = void 0)
                }
                var n = this.length - r;
                if ((void 0 === a || a > n) && (a = n), e.length > 0 && (a < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                t || (t = "utf8");
                for (var i = !1;;) switch (t) {
                    case "hex":
                        return w(this, e, r, a);
                    case "utf8":
                    case "utf-8":
                        return k(this, e, r, a);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return x(this, e, r, a);
                    case "base64":
                        return z(this, e, r, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, e, r, a);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + t);
                        t = ("" + t).toLowerCase(), i = !0
                }
            }, l.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var E = 4096;

            function S(e, r, a) {
                var t = "";
                a = Math.min(e.length, a);
                for (var n = r; n < a; ++n) t += String.fromCharCode(127 & e[n]);
                return t
            }

            function P(e, r, a) {
                var t = "";
                a = Math.min(e.length, a);
                for (var n = r; n < a; ++n) t += String.fromCharCode(e[n]);
                return t
            }

            function T(e, r, a) {
                var t = e.length;
                (!r || r < 0) && (r = 0), (!a || a < 0 || a > t) && (a = t);
                for (var n = "", i = r; i < a; ++i) n += X[e[i]];
                return n
            }

            function A(e, r, a) {
                for (var t = e.slice(r, a), n = "", i = 0; i < t.length - 1; i += 2) n += String.fromCharCode(t[i] + 256 * t[i + 1]);
                return n
            }

            function q(e, r, a) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > a) throw new RangeError("Trying to access beyond buffer length")
            }

            function R(e, r, a, t, n, i) {
                if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (a + t > e.length) throw new RangeError("Index out of range")
            }

            function U(e, r, a, t, n, i) {
                if (a + t > e.length) throw new RangeError("Index out of range");
                if (a < 0) throw new RangeError("Index out of range")
            }

            function O(e, r, a, t, i) {
                return r = +r, a >>>= 0, i || U(e, 0, a, 4), n.write(e, r, a, t, 23, 4), a + 4
            }

            function I(e, r, a, t, i) {
                return r = +r, a >>>= 0, i || U(e, 0, a, 8), n.write(e, r, a, t, 52, 8), a + 8
            }
            l.prototype.slice = function(e, r) {
                var a = this.length;
                (e = ~~e) < 0 ? (e += a) < 0 && (e = 0) : e > a && (e = a), (r = void 0 === r ? a : ~~r) < 0 ? (r += a) < 0 && (r = 0) : r > a && (r = a), r < e && (r = e);
                var t = this.subarray(e, r);
                return Object.setPrototypeOf(t, l.prototype), t
            }, l.prototype.readUintLE = l.prototype.readUIntLE = function(e, r, a) {
                e >>>= 0, r >>>= 0, a || q(e, r, this.length);
                for (var t = this[e], n = 1, i = 0; ++i < r && (n *= 256);) t += this[e + i] * n;
                return t
            }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, r, a) {
                e >>>= 0, r >>>= 0, a || q(e, r, this.length);
                for (var t = this[e + --r], n = 1; r > 0 && (n *= 256);) t += this[e + --r] * n;
                return t
            }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, r) {
                return e >>>= 0, r || q(e, 1, this.length), this[e]
            }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, r) {
                return e >>>= 0, r || q(e, 2, this.length), this[e] | this[e + 1] << 8
            }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, r) {
                return e >>>= 0, r || q(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, l.prototype.readIntLE = function(e, r, a) {
                e >>>= 0, r >>>= 0, a || q(e, r, this.length);
                for (var t = this[e], n = 1, i = 0; ++i < r && (n *= 256);) t += this[e + i] * n;
                return t >= (n *= 128) && (t -= Math.pow(2, 8 * r)), t
            }, l.prototype.readIntBE = function(e, r, a) {
                e >>>= 0, r >>>= 0, a || q(e, r, this.length);
                for (var t = r, n = 1, i = this[e + --t]; t > 0 && (n *= 256);) i += this[e + --t] * n;
                return i >= (n *= 128) && (i -= Math.pow(2, 8 * r)), i
            }, l.prototype.readInt8 = function(e, r) {
                return e >>>= 0, r || q(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, l.prototype.readInt16LE = function(e, r) {
                e >>>= 0, r || q(e, 2, this.length);
                var a = this[e] | this[e + 1] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, l.prototype.readInt16BE = function(e, r) {
                e >>>= 0, r || q(e, 2, this.length);
                var a = this[e + 1] | this[e] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, l.prototype.readInt32LE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, l.prototype.readInt32BE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, l.prototype.readFloatLE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), n.read(this, e, !0, 23, 4)
            }, l.prototype.readFloatBE = function(e, r) {
                return e >>>= 0, r || q(e, 4, this.length), n.read(this, e, !1, 23, 4)
            }, l.prototype.readDoubleLE = function(e, r) {
                return e >>>= 0, r || q(e, 8, this.length), n.read(this, e, !0, 52, 8)
            }, l.prototype.readDoubleBE = function(e, r) {
                return e >>>= 0, r || q(e, 8, this.length), n.read(this, e, !1, 52, 8)
            }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, r, a, t) {
                (e = +e, r >>>= 0, a >>>= 0, t) || R(this, e, r, a, Math.pow(2, 8 * a) - 1, 0);
                var n = 1,
                    i = 0;
                for (this[r] = 255 & e; ++i < a && (n *= 256);) this[r + i] = e / n & 255;
                return r + a
            }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, r, a, t) {
                (e = +e, r >>>= 0, a >>>= 0, t) || R(this, e, r, a, Math.pow(2, 8 * a) - 1, 0);
                var n = a - 1,
                    i = 1;
                for (this[r + n] = 255 & e; --n >= 0 && (i *= 256);) this[r + n] = e / i & 255;
                return r + a
            }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 1, 255, 0), this[r] = 255 & e, r + 1
            }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 2, 65535, 0), this[r] = 255 & e, this[r + 1] = e >>> 8, r + 2
            }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 2, 65535, 0), this[r] = e >>> 8, this[r + 1] = 255 & e, r + 2
            }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 4, 4294967295, 0), this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = 255 & e, r + 4
            }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 4, 4294967295, 0), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e, r + 4
            }, l.prototype.writeIntLE = function(e, r, a, t) {
                if (e = +e, r >>>= 0, !t) {
                    var n = Math.pow(2, 8 * a - 1);
                    R(this, e, r, a, n - 1, -n)
                }
                var i = 0,
                    o = 1,
                    s = 0;
                for (this[r] = 255 & e; ++i < a && (o *= 256);) e < 0 && 0 === s && 0 !== this[r + i - 1] && (s = 1), this[r + i] = (e / o >> 0) - s & 255;
                return r + a
            }, l.prototype.writeIntBE = function(e, r, a, t) {
                if (e = +e, r >>>= 0, !t) {
                    var n = Math.pow(2, 8 * a - 1);
                    R(this, e, r, a, n - 1, -n)
                }
                var i = a - 1,
                    o = 1,
                    s = 0;
                for (this[r + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[r + i + 1] && (s = 1), this[r + i] = (e / o >> 0) - s & 255;
                return r + a
            }, l.prototype.writeInt8 = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[r] = 255 & e, r + 1
            }, l.prototype.writeInt16LE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 2, 32767, -32768), this[r] = 255 & e, this[r + 1] = e >>> 8, r + 2
            }, l.prototype.writeInt16BE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 2, 32767, -32768), this[r] = e >>> 8, this[r + 1] = 255 & e, r + 2
            }, l.prototype.writeInt32LE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 4, 2147483647, -2147483648), this[r] = 255 & e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24, r + 4
            }, l.prototype.writeInt32BE = function(e, r, a) {
                return e = +e, r >>>= 0, a || R(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e, r + 4
            }, l.prototype.writeFloatLE = function(e, r, a) {
                return O(this, e, r, !0, a)
            }, l.prototype.writeFloatBE = function(e, r, a) {
                return O(this, e, r, !1, a)
            }, l.prototype.writeDoubleLE = function(e, r, a) {
                return I(this, e, r, !0, a)
            }, l.prototype.writeDoubleBE = function(e, r, a) {
                return I(this, e, r, !1, a)
            }, l.prototype.copy = function(e, r, a, t) {
                if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (a || (a = 0), t || 0 === t || (t = this.length), r >= e.length && (r = e.length), r || (r = 0), t > 0 && t < a && (t = a), t === a) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError("targetStart out of bounds");
                if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("sourceEnd out of bounds");
                t > this.length && (t = this.length), e.length - r < t - a && (t = e.length - r + a);
                var n = t - a;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(r, a, t) : Uint8Array.prototype.set.call(e, this.subarray(a, t), r), n
            }, l.prototype.fill = function(e, r, a, t) {
                if ("string" == typeof e) {
                    if ("string" == typeof r ? (t = r, r = 0, a = this.length) : "string" == typeof a && (t = a, a = this.length), void 0 !== t && "string" != typeof t) throw new TypeError("encoding must be a string");
                    if ("string" == typeof t && !l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    if (1 === e.length) {
                        var n = e.charCodeAt(0);
                        ("utf8" === t && n < 128 || "latin1" === t) && (e = n)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (r < 0 || this.length < r || this.length < a) throw new RangeError("Out of range index");
                if (a <= r) return this;
                var i;
                if (r >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e)
                    for (i = r; i < a; ++i) this[i] = e;
                else {
                    var o = l.isBuffer(e) ? e : l.from(e, t),
                        s = o.length;
                    if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < a - r; ++i) this[i + r] = o[i % s]
                }
                return this
            };
            var _ = /[^+/0-9A-Za-z-_]/g;

            function M(e, r) {
                var a;
                r = r || 1 / 0;
                for (var t = e.length, n = null, i = [], o = 0; o < t; ++o) {
                    if ((a = e.charCodeAt(o)) > 55295 && a < 57344) {
                        if (!n) {
                            if (a > 56319) {
                                (r -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === t) {
                                (r -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            n = a;
                            continue
                        }
                        if (a < 56320) {
                            (r -= 3) > -1 && i.push(239, 191, 189), n = a;
                            continue
                        }
                        a = 65536 + (n - 55296 << 10 | a - 56320)
                    } else n && (r -= 3) > -1 && i.push(239, 191, 189);
                    if (n = null, a < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(a)
                    } else if (a < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(a >> 6 | 192, 63 & a | 128)
                    } else if (a < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128)
                    } else {
                        if (!(a < 1114112)) throw new Error("Invalid code point");
                        if ((r -= 4) < 0) break;
                        i.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
                    }
                }
                return i
            }

            function Z(e) {
                return t.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(_, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function N(e, r, a, t) {
                for (var n = 0; n < t && !(n + a >= r.length || n >= e.length); ++n) r[n + a] = e[n];
                return n
            }

            function D(e, r) {
                return e instanceof r || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === r.name
            }

            function L(e) {
                return e != e
            }
            var X = function() {
                for (var e = "0123456789abcdef", r = new Array(256), a = 0; a < 16; ++a)
                    for (var t = 16 * a, n = 0; n < 16; ++n) r[t + n] = e[a] + e[n];
                return r
            }()
        },
        18775: function(e, r, a) {
            e.exports = a(54805)
        },
        54805: function(e, r, a) {
            "undefined" != typeof window && (window.global = window.global || window);
            var t, n, i = {
                    randomBytes: a(27741)
                },
                o = e.exports,
                s = function() {
                    (void 0 === t || t >= n.length) && (t = 0, n = i.randomBytes(256));
                    var e = n[t];
                    return t += 1, e
                },
                l = function(e) {
                    for (var r = s(); r >= 256 - 256 % e;) r = s();
                    return r % e
                },
                u = /[ilLI|`oO0]/g,
                c = [{
                    name: "lowercase",
                    rule: /[a-z]/
                }, {
                    name: "uppercase",
                    rule: /[A-Z]/
                }, {
                    name: "numbers",
                    rule: /[0-9]/
                }, {
                    name: "symbols",
                    rule: /[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/
                }],
                d = function e(r, a) {
                    for (var t = "", n = r.length, i = a.length, o = 0; o < n; o++) t += a[l(i)];
                    if (r.strict && !c.every((function(e) {
                            return 0 == r[e.name] || ("symbols" === e.name && "string" == typeof r[e.name] ? new RegExp("[" + r[e.name] + "]").test(t) : e.rule.test(t))
                        }))) return e(r, a);
                    return t
                };
            o.generate = function(e) {
                if ((e = e || {}, Object.prototype.hasOwnProperty.call(e, "length") || (e.length = 10), Object.prototype.hasOwnProperty.call(e, "numbers") || (e.numbers = !1), Object.prototype.hasOwnProperty.call(e, "symbols") || (e.symbols = !1), Object.prototype.hasOwnProperty.call(e, "exclude") || (e.exclude = ""), Object.prototype.hasOwnProperty.call(e, "uppercase") || (e.uppercase = !0), Object.prototype.hasOwnProperty.call(e, "lowercase") || (e.lowercase = !0), Object.prototype.hasOwnProperty.call(e, "excludeSimilarCharacters") || (e.excludeSimilarCharacters = !1), Object.prototype.hasOwnProperty.call(e, "strict") || (e.strict = !1), e.strict) && 1 + (e.numbers ? 1 : 0) + (e.symbols ? 1 : 0) + (e.uppercase ? 1 : 0) > e.length) throw new TypeError("Length must correlate with strict guidelines");
                var r = "";
                if (e.lowercase && (r += "abcdefghijklmnopqrstuvwxyz"), e.uppercase && (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), e.numbers && (r += "0123456789"), e.symbols && ("string" == typeof e.symbols ? r += e.symbols : r += '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'), !r) throw new TypeError("At least one rule for pools must be true");
                e.excludeSimilarCharacters && (r = r.replace(u, ""));
                for (var a = e.exclude.length; a--;) r = r.replace(e.exclude[a], "");
                return d(e, r)
            }, o.generateMultiple = function(e, r) {
                for (var a = [], t = 0; t < e; t++) a[t] = o.generate(r);
                return a
            }
        },
        78259: function(e, r) {
            r.read = function(e, r, a, t, n) {
                var i, o, s = 8 * n - t - 1,
                    l = (1 << s) - 1,
                    u = l >> 1,
                    c = -7,
                    d = a ? n - 1 : 0,
                    p = a ? -1 : 1,
                    g = e[r + d];
                for (d += p, i = g & (1 << -c) - 1, g >>= -c, c += s; c > 0; i = 256 * i + e[r + d], d += p, c -= 8);
                for (o = i & (1 << -c) - 1, i >>= -c, c += t; c > 0; o = 256 * o + e[r + d], d += p, c -= 8);
                if (0 === i) i = 1 - u;
                else {
                    if (i === l) return o ? NaN : 1 / 0 * (g ? -1 : 1);
                    o += Math.pow(2, t), i -= u
                }
                return (g ? -1 : 1) * o * Math.pow(2, i - t)
            }, r.write = function(e, r, a, t, n, i) {
                var o, s, l, u = 8 * i - n - 1,
                    c = (1 << u) - 1,
                    d = c >> 1,
                    p = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    g = t ? 0 : i - 1,
                    h = t ? 1 : -1,
                    m = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (s = isNaN(r) ? 1 : 0, o = c) : (o = Math.floor(Math.log(r) / Math.LN2), r * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), (r += o + d >= 1 ? p / l : p * Math.pow(2, 1 - d)) * l >= 2 && (o++, l /= 2), o + d >= c ? (s = 0, o = c) : o + d >= 1 ? (s = (r * l - 1) * Math.pow(2, n), o += d) : (s = r * Math.pow(2, d - 1) * Math.pow(2, n), o = 0)); n >= 8; e[a + g] = 255 & s, g += h, s /= 256, n -= 8);
                for (o = o << n | s, u += n; u > 0; e[a + g] = 255 & o, g += h, o /= 256, u -= 8);
                e[a + g - h] |= 128 * m
            }
        },
        27741: function(e, r, a) {
            "use strict";
            var t = 65536,
                n = 4294967295;
            var i = a(42025).Buffer,
                o = a.g.crypto || a.g.msCrypto;
            o && o.getRandomValues ? e.exports = function(e, r) {
                if (e > n) throw new RangeError("requested too many random bytes");
                var a = i.allocUnsafe(e);
                if (e > 0)
                    if (e > t)
                        for (var s = 0; s < e; s += t) o.getRandomValues(a.slice(s, s + t));
                    else o.getRandomValues(a);
                if ("function" == typeof r) return process.nextTick((function() {
                    r(null, a)
                }));
                return a
            } : e.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        },
        42025: function(e, r, a) {
            var t = a(41422),
                n = t.Buffer;

            function i(e, r) {
                for (var a in e) r[a] = e[a]
            }

            function o(e, r, a) {
                return n(e, r, a)
            }
            n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = t : (i(t, r), r.Buffer = o), o.prototype = Object.create(n.prototype), i(n, o), o.from = function(e, r, a) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return n(e, r, a)
            }, o.alloc = function(e, r, a) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var t = n(e);
                return void 0 !== r ? "string" == typeof a ? t.fill(r, a) : t.fill(r) : t.fill(0), t
            }, o.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return n(e)
            }, o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return t.SlowBuffer(e)
            }
        },
        85598: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                default: function() {
                    return ke
                }
            });
            var t = a(79573),
                n = a(29949),
                i = a(67294),
                o = a(3013),
                s = a(16985),
                l = a(45082),
                u = a(43944),
                c = a(68316),
                d = a(67044),
                p = a(95422),
                g = a(29802),
                h = a(32662);

            function m(e, r) {
                if (null == e) return {};
                var a, t, n = {},
                    i = Object.keys(e);
                for (t = 0; t < i.length; t++) a = i[t], r.indexOf(a) >= 0 || (n[a] = e[a]);
                return n
            }

            function f() {
                return f = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = arguments[r];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, f.apply(this, arguments)
            }
            var y = ["onChange", "value", "defaultValue", "name", "isDisabled", "isFocusable", "isNative"];
            var b = ["colorScheme", "size", "variant", "children", "className", "isDisabled", "isFocusable"],
                v = (0, d.kr)({
                    name: "RadioGroupContext",
                    strict: !1
                }),
                w = v[0],
                k = v[1],
                x = (0, l.Gp)((function(e, r) {
                    var a = e.colorScheme,
                        t = e.size,
                        n = e.variant,
                        o = e.children,
                        s = e.className,
                        u = e.isDisabled,
                        g = e.isFocusable,
                        h = function(e) {
                            void 0 === e && (e = {});
                            var r = e,
                                a = r.onChange,
                                t = r.value,
                                n = r.defaultValue,
                                o = r.name,
                                s = r.isDisabled,
                                l = r.isFocusable,
                                u = r.isNative,
                                g = m(r, y),
                                h = i.useState(n || ""),
                                b = h[0],
                                v = h[1],
                                w = (0, p.pY)(t, b),
                                k = w[0],
                                x = w[1],
                                z = i.useRef(null),
                                C = i.useCallback((function() {
                                    var e = z.current;
                                    if (e) {
                                        var r = "input:not(:disabled):checked",
                                            a = e.querySelector(r);
                                        if (a) a.focus();
                                        else {
                                            r = "input:not(:disabled)";
                                            var t = e.querySelector(r);
                                            null == t || t.focus()
                                        }
                                    }
                                }), []),
                                j = (0, p.Me)(void 0, "radio"),
                                B = o || j,
                                E = i.useCallback((function(e) {
                                    var r = (0, c.kA)(e) ? e.target.value : e;
                                    k || v(r), null == a || a(String(r))
                                }), [a, k]),
                                S = i.useCallback((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), f({}, e, {
                                        ref: (0, d.lq)(r, z),
                                        role: "radiogroup"
                                    })
                                }), []),
                                P = i.useCallback((function(e, r) {
                                    var a;
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), f({}, e, ((a = {
                                        ref: r,
                                        name: B
                                    })[u ? "checked" : "isChecked"] = null != x ? e.value === x : void 0, a.onChange = E, a["data-radiogroup"] = !0, a))
                                }), [u, B, E, x]);
                            return {
                                getRootProps: S,
                                getRadioProps: P,
                                name: B,
                                ref: z,
                                focus: C,
                                setValue: v,
                                value: x,
                                onChange: E,
                                isDisabled: s,
                                isFocusable: l,
                                htmlProps: g
                            }
                        }(m(e, b)),
                        v = h.value,
                        k = h.onChange,
                        x = h.getRootProps,
                        z = h.name,
                        C = h.htmlProps,
                        j = i.useMemo((function() {
                            return {
                                name: z,
                                size: t,
                                onChange: k,
                                colorScheme: a,
                                value: v,
                                variant: n,
                                isDisabled: u,
                                isFocusable: g
                            }
                        }), [z, t, k, a, v, n, u, g]),
                        B = x(C, r),
                        E = (0, c.cx)("chakra-radio-group", s);
                    return i.createElement(w, {
                        value: j
                    }, i.createElement(l.m$.div, f({}, B, {
                        className: E
                    }), o))
                }));
            c.Ts && (x.displayName = "RadioGroup");
            var z = ["defaultIsChecked", "defaultChecked", "isChecked", "isFocusable", "isDisabled", "isReadOnly", "isRequired", "onChange", "isInvalid", "name", "value", "id", "data-radiogroup", "aria-describedby"];

            function C(e) {
                e.preventDefault(), e.stopPropagation()
            }
            var j = ["spacing", "children", "isFullWidth", "isDisabled", "isFocusable"],
                B = (0, l.Gp)((function(e, r) {
                    var a, t = k(),
                        n = e.onChange,
                        o = e.value,
                        s = (0, l.jC)("Radio", f({}, t, e)),
                        d = (0, l.Lr)(e),
                        y = d.spacing,
                        b = void 0 === y ? "0.5rem" : y,
                        v = d.children,
                        w = d.isFullWidth,
                        x = d.isDisabled,
                        B = void 0 === x ? null == t ? void 0 : t.isDisabled : x,
                        E = d.isFocusable,
                        S = void 0 === E ? null == t ? void 0 : t.isFocusable : E,
                        P = m(d, j),
                        T = e.isChecked;
                    null != (null == t ? void 0 : t.value) && null != o && (T = t.value === o);
                    var A = n;
                    null != t && t.onChange && null != o && (A = (0, c.PP)(t.onChange, n));
                    var q = function(e) {
                            void 0 === e && (e = {});
                            var r = e,
                                a = r.defaultIsChecked,
                                t = r.defaultChecked,
                                n = void 0 === t ? a : t,
                                o = r.isChecked,
                                s = r.isFocusable,
                                l = r.isDisabled,
                                u = r.isReadOnly,
                                d = r.isRequired,
                                y = r.onChange,
                                b = r.isInvalid,
                                v = r.name,
                                w = r.value,
                                x = r.id,
                                j = r["data-radiogroup"],
                                B = r["aria-describedby"],
                                E = m(r, z),
                                S = (0, p.Me)(void 0, "radio"),
                                P = (0, g.NJ)(),
                                T = k(),
                                A = !P || T || j ? S : P.id;
                            A = null != x ? x : A;
                            var q = null != l ? l : null == P ? void 0 : P.isDisabled,
                                R = null != u ? u : null == P ? void 0 : P.isReadOnly,
                                U = null != d ? d : null == P ? void 0 : P.isRequired,
                                O = null != b ? b : null == P ? void 0 : P.isInvalid,
                                I = (0, p.kt)(),
                                _ = I[0],
                                M = I[1],
                                Z = (0, p.kt)(),
                                N = Z[0],
                                D = Z[1],
                                L = (0, p.kt)(),
                                X = L[0],
                                F = L[1],
                                V = (0, i.useState)(Boolean(n)),
                                W = V[0],
                                G = V[1],
                                $ = (0, p.pY)(o, W),
                                K = $[0],
                                Y = $[1];
                            (0, c.ZK)({
                                condition: !!a,
                                message: 'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'
                            });
                            var H = (0, i.useCallback)((function(e) {
                                    R || q ? e.preventDefault() : (K || G(e.target.checked), null == y || y(e))
                                }), [K, q, R, y]),
                                Q = (0, i.useCallback)((function(e) {
                                    " " === e.key && F.on()
                                }), [F]),
                                J = (0, i.useCallback)((function(e) {
                                    " " === e.key && F.off()
                                }), [F]),
                                ee = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), f({}, e, {
                                        ref: r,
                                        "data-active": (0, c.PB)(X),
                                        "data-hover": (0, c.PB)(N),
                                        "data-disabled": (0, c.PB)(q),
                                        "data-invalid": (0, c.PB)(O),
                                        "data-checked": (0, c.PB)(Y),
                                        "data-focus": (0, c.PB)(_),
                                        "data-readonly": (0, c.PB)(R),
                                        "aria-hidden": !0,
                                        onMouseDown: (0, c.v0)(e.onMouseDown, F.on),
                                        onMouseUp: (0, c.v0)(e.onMouseUp, F.off),
                                        onMouseEnter: (0, c.v0)(e.onMouseEnter, D.on),
                                        onMouseLeave: (0, c.v0)(e.onMouseLeave, D.off)
                                    })
                                }), [X, N, q, O, Y, _, R, F.on, F.off, D.on, D.off]),
                                re = null != P ? P : {},
                                ae = re.onFocus,
                                te = re.onBlur,
                                ne = (0, i.useCallback)((function(e, r) {
                                    void 0 === e && (e = {}), void 0 === r && (r = null);
                                    var a = q && !s;
                                    return f({}, e, {
                                        id: A,
                                        ref: r,
                                        type: "radio",
                                        name: v,
                                        value: w,
                                        onChange: (0, c.v0)(e.onChange, H),
                                        onBlur: (0, c.v0)(te, e.onBlur, M.off),
                                        onFocus: (0, c.v0)(ae, e.onFocus, M.on),
                                        onKeyDown: (0, c.v0)(e.onKeyDown, Q),
                                        onKeyUp: (0, c.v0)(e.onKeyUp, J),
                                        checked: Y,
                                        disabled: a,
                                        readOnly: R,
                                        required: U,
                                        "aria-invalid": (0, c.Qm)(O),
                                        "aria-disabled": (0, c.Qm)(a),
                                        "aria-required": (0, c.Qm)(U),
                                        "data-readonly": (0, c.PB)(R),
                                        "aria-describedby": B,
                                        style: h.NL
                                    })
                                }), [q, s, A, v, w, H, te, M, ae, Q, J, Y, R, U, O, B]);
                            return {
                                state: {
                                    isInvalid: O,
                                    isFocused: _,
                                    isChecked: Y,
                                    isActive: X,
                                    isHovered: N,
                                    isDisabled: q,
                                    isReadOnly: R,
                                    isRequired: U
                                },
                                getCheckboxProps: ee,
                                getInputProps: ne,
                                getLabelProps: function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), f({}, e, {
                                        ref: r,
                                        onMouseDown: (0, c.v0)(e.onMouseDown, C),
                                        onTouchStart: (0, c.v0)(e.onTouchStart, C),
                                        "data-disabled": (0, c.PB)(q),
                                        "data-checked": (0, c.PB)(Y),
                                        "data-invalid": (0, c.PB)(O)
                                    })
                                },
                                getRootProps: function(e, r) {
                                    return void 0 === r && (r = null), f({}, e, {
                                        ref: r,
                                        "data-disabled": (0, c.PB)(q),
                                        "data-checked": (0, c.PB)(Y),
                                        "data-invalid": (0, c.PB)(O)
                                    })
                                },
                                htmlProps: E
                            }
                        }(f({}, P, {
                            isChecked: T,
                            isFocusable: S,
                            isDisabled: B,
                            onChange: A,
                            name: null != (a = null == e ? void 0 : e.name) ? a : null == t ? void 0 : t.name
                        })),
                        R = q.getInputProps,
                        U = q.getCheckboxProps,
                        O = q.getLabelProps,
                        I = q.getRootProps,
                        _ = q.htmlProps,
                        M = (0, c.Vl)(_, u.oE),
                        Z = M[0],
                        N = U(M[1]),
                        D = R({}, r),
                        L = O(),
                        X = Object.assign({}, Z, I()),
                        F = f({
                            width: w ? "full" : void 0,
                            display: "inline-flex",
                            alignItems: "center",
                            verticalAlign: "top",
                            cursor: "pointer"
                        }, s.container),
                        V = f({
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }, s.control),
                        W = f({
                            userSelect: "none",
                            marginStart: b
                        }, s.label);
                    return i.createElement(l.m$.label, f({
                        className: "chakra-radio"
                    }, X, {
                        __css: F
                    }), i.createElement("input", f({
                        className: "chakra-radio__input"
                    }, D)), i.createElement(l.m$.span, f({
                        className: "chakra-radio__control"
                    }, N, {
                        __css: V
                    })), v && i.createElement(l.m$.span, f({
                        className: "chakra-radio__label"
                    }, L, {
                        __css: W
                    }), v))
                }));
            c.Ts && (B.displayName = "Radio");
            var E = a(95600),
                S = a(65247);

            function P() {
                return P = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = arguments[r];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, P.apply(this, arguments)
            }

            function T(e, r) {
                if (null == e) return {};
                var a, t, n = {},
                    i = Object.keys(e);
                for (t = 0; t < i.length; t++) a = i[t], r.indexOf(a) >= 0 || (n[a] = e[a]);
                return n
            }

            function A(e) {
                var r = e.orientation,
                    a = e.vertical,
                    t = e.horizontal;
                return "vertical" === r ? a : t
            }
            var q = {
                width: 0,
                height: 0
            };

            function R(e) {
                var r = e.orientation,
                    a = e.thumbPercents,
                    t = e.thumbRects,
                    n = e.isReversed,
                    i = "vertical" === r ? t.reduce((function(e, r) {
                        return e.height > r.height ? e : r
                    }), q) : t.reduce((function(e, r) {
                        return e.width > r.width ? e : r
                    }), q),
                    o = P({
                        position: "relative",
                        touchAction: "none",
                        WebkitTapHighlightColor: "rgba(0,0,0,0)",
                        userSelect: "none",
                        outline: 0
                    }, A({
                        orientation: r,
                        vertical: {
                            paddingLeft: i.width / 2,
                            paddingRight: i.width / 2
                        },
                        horizontal: {
                            paddingTop: i.height / 2,
                            paddingBottom: i.height / 2
                        }
                    })),
                    s = P({
                        position: "absolute"
                    }, A({
                        orientation: r,
                        vertical: {
                            left: "50%",
                            transform: "translateX(-50%)",
                            height: "100%"
                        },
                        horizontal: {
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "100%"
                        }
                    })),
                    l = 1 === a.length,
                    u = [0, n ? 100 - a[0] : a[0]],
                    c = l ? u : a,
                    d = c[0];
                !l && n && (d = 100 - d);
                var p = Math.abs(c[c.length - 1] - c[0]);
                return {
                    trackStyle: s,
                    innerTrackStyle: P({}, s, A({
                        orientation: r,
                        vertical: n ? {
                            height: p + "%",
                            top: d + "%"
                        } : {
                            height: p + "%",
                            bottom: d + "%"
                        },
                        horizontal: n ? {
                            width: p + "%",
                            right: d + "%"
                        } : {
                            width: p + "%",
                            left: d + "%"
                        }
                    })),
                    rootStyle: o,
                    getThumbStyle: function(e) {
                        return P({
                            position: "absolute",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            MozUserSelect: "none",
                            msUserSelect: "none",
                            touchAction: "none"
                        }, A({
                            orientation: r,
                            vertical: {
                                bottom: "calc(" + a[e] + "% - " + t[e].height / 2 + "px)"
                            },
                            horizontal: {
                                left: "calc(" + a[e] + "% - " + t[e].width / 2 + "px)"
                            }
                        }))
                    }
                }
            }

            function U(e) {
                var r = e.isReversed,
                    a = e.direction,
                    t = e.orientation;
                return "ltr" === a || "vertical" === t ? r : !r
            }
            var O = ["min", "max", "onChange", "value", "defaultValue", "isReversed", "direction", "orientation", "id", "isDisabled", "isReadOnly", "onChangeStart", "onChangeEnd", "step", "getAriaValueText", "aria-valuetext", "aria-label", "aria-labelledby", "name", "focusThumbOnChange", "minStepsBetweenThumbs"],
                I = ["index"],
                _ = ["value"],
                M = ["index"];

            function Z(e) {
                var r = e.min,
                    a = void 0 === r ? 0 : r,
                    t = e.max,
                    n = void 0 === t ? 100 : t,
                    o = e.onChange,
                    s = e.value,
                    l = e.defaultValue,
                    u = e.isReversed,
                    g = e.direction,
                    h = void 0 === g ? "ltr" : g,
                    m = e.orientation,
                    f = void 0 === m ? "horizontal" : m,
                    y = e.id,
                    b = e.isDisabled,
                    v = e.isReadOnly,
                    w = e.onChangeStart,
                    k = e.onChangeEnd,
                    x = e.step,
                    z = void 0 === x ? 1 : x,
                    C = e.getAriaValueText,
                    j = e["aria-valuetext"],
                    B = e["aria-label"],
                    E = e["aria-labelledby"],
                    q = e.name,
                    Z = e.focusThumbOnChange,
                    D = void 0 === Z || Z,
                    L = e.minStepsBetweenThumbs,
                    X = void 0 === L ? 0 : L,
                    F = T(e, O),
                    V = (0, S.u)(w),
                    W = (0, S.u)(k),
                    G = (0, S.u)(C),
                    $ = U({
                        isReversed: u,
                        direction: h,
                        orientation: f
                    }),
                    K = (0, p.Tx)({
                        value: s,
                        defaultValue: null != l ? l : [25, 75],
                        onChange: o
                    }),
                    Y = K[0],
                    H = K[1];
                if (!Array.isArray(Y)) throw new TypeError("[range-slider] You passed an invalid value for `value` or `defaultValue`, expected `Array` but got `" + typeof Y + "`");
                var Q = (0, p.kt)(),
                    J = Q[0],
                    ee = Q[1],
                    re = (0, p.kt)(),
                    ae = re[0],
                    te = re[1],
                    ne = (0, i.useState)(-1),
                    ie = ne[0],
                    oe = ne[1],
                    se = (0, i.useRef)(null),
                    le = !(b || v),
                    ue = (0, i.useRef)(Y),
                    ce = Y.map((function(e) {
                        return (0, c.HU)(e, a, n)
                    })),
                    de = (0, p.II)(ce),
                    pe = N(ce, a, n, X * z),
                    ge = ce.map((function(e) {
                        return n - e + a
                    })),
                    he = ($ ? ge : ce).map((function(e) {
                        return (0, c.Rg)(e, a, n)
                    })),
                    me = "vertical" === f,
                    fe = (0, i.useState)(Array.from({
                        length: ce.length
                    }).map((function() {
                        return {
                            width: 0,
                            height: 0
                        }
                    }))),
                    ye = fe[0],
                    be = fe[1];
                (0, i.useEffect)((function() {
                    var e;
                    if (ke.current) {
                        var r = Array.from(null == (e = ke.current) ? void 0 : e.querySelectorAll("[role=slider]")).map((function(e) {
                            return {
                                width: e.offsetWidth,
                                height: e.offsetHeight
                            }
                        }));
                        r.length && be(r)
                    }
                }), []);
                var ve, we = (0, i.useRef)(null),
                    ke = (0, i.useRef)(null),
                    xe = (0, p.Me)(y),
                    ze = {
                        root: "slider-root-" + (ve = xe),
                        getThumb: function(e) {
                            return "slider-thumb-" + ve + "-" + e
                        },
                        getInput: function(e) {
                            return "slider-input-" + ve + "-" + e
                        },
                        track: "slider-track-" + ve,
                        innerTrack: "slider-filled-track-" + ve,
                        getMarker: function(e) {
                            return "slider-marker-" + ve + "-" + e
                        },
                        output: "slider-output-" + ve
                    },
                    Ce = (0, i.useCallback)((function(e) {
                        var r, t;
                        if (we.current) {
                            se.current = "pointer";
                            var i = we.current.getBoundingClientRect(),
                                o = null != (r = null == (t = e.touches) ? void 0 : t[0]) ? r : e,
                                s = o.clientX,
                                l = o.clientY,
                                u = (me ? i.bottom - l : s - i.left) / (me ? i.height : i.width);
                            return $ && (u = 1 - u), (0, c.WS)(u, a, n)
                        }
                    }), [me, $, n, a]),
                    je = (n - a) / 10,
                    Be = z || (n - a) / 100,
                    Ee = (0, i.useMemo)((function() {
                        return {
                            setValueAtIndex: function(e, r) {
                                if (le) {
                                    var a = pe[e];
                                    r = parseFloat((0, c.WP)(r, a.min, Be)), r = (0, c.HU)(r, a.min, a.max);
                                    var t = [].concat(ce);
                                    t[e] = r, H(t)
                                }
                            },
                            setActiveIndex: oe,
                            stepUp: function(e, r) {
                                void 0 === r && (r = Be);
                                var a = ce[e],
                                    t = $ ? a - r : a + r;
                                Ee.setValueAtIndex(e, t)
                            },
                            stepDown: function(e, r) {
                                void 0 === r && (r = Be);
                                var a = ce[e],
                                    t = $ ? a + r : a - r;
                                Ee.setValueAtIndex(e, t)
                            },
                            reset: function() {
                                return H(ue.current)
                            }
                        }
                    }), [Be, ce, $, H, le, pe]),
                    Se = (0, i.useCallback)((function(e) {
                        var r = {
                                ArrowRight: function() {
                                    return Ee.stepUp(ie)
                                },
                                ArrowUp: function() {
                                    return Ee.stepUp(ie)
                                },
                                ArrowLeft: function() {
                                    return Ee.stepDown(ie)
                                },
                                ArrowDown: function() {
                                    return Ee.stepDown(ie)
                                },
                                PageUp: function() {
                                    return Ee.stepUp(ie, je)
                                },
                                PageDown: function() {
                                    return Ee.stepDown(ie, je)
                                },
                                Home: function() {
                                    var e = pe[ie].min;
                                    Ee.setValueAtIndex(ie, e)
                                },
                                End: function() {
                                    var e = pe[ie].max;
                                    Ee.setValueAtIndex(ie, e)
                                }
                            },
                            a = r[(0, c.uh)(e)];
                        a && (e.preventDefault(), e.stopPropagation(), a(e), se.current = "keyboard")
                    }), [Ee, ie, je, pe]),
                    Pe = (0, i.useMemo)((function() {
                        return R({
                            isReversed: $,
                            orientation: f,
                            thumbRects: ye,
                            thumbPercents: he
                        })
                    }), [$, f, he, ye]),
                    Te = Pe.getThumbStyle,
                    Ae = Pe.rootStyle,
                    qe = Pe.trackStyle,
                    Re = Pe.innerTrackStyle,
                    Ue = (0, i.useCallback)((function(e) {
                        var r = null != e ? e : ie;
                        if (-1 !== r && D) {
                            var a, t = ze.getThumb(r),
                                n = null == (a = ke.current) ? void 0 : a.ownerDocument.getElementById(t);
                            n && setTimeout((function() {
                                return (0, c.T_)(n)
                            }))
                        }
                    }), [D, ie, ze]);
                (0, p.rf)((function() {
                    "keyboard" === se.current && (null == W || W(de.current))
                }), [ce, W]);
                (0, p.PO)(ke, {
                    onPanSessionStart: function(e) {
                        le && (ee.on(), function(e) {
                            var r = Ce(e) || 0,
                                a = ce.map((function(e) {
                                    return Math.abs(e - r)
                                })),
                                t = Math.min.apply(Math, a),
                                n = a.indexOf(t),
                                i = a.filter((function(e) {
                                    return e === t
                                }));
                            i.length > 1 && r > ce[n] && (n = n + i.length - 1), oe(n), Ee.setValueAtIndex(n, r), Ue(n)
                        }(e), null == V || V(de.current))
                    },
                    onPanSessionEnd: function() {
                        le && (ee.off(), null == W || W(de.current))
                    },
                    onPan: function(e) {
                        le && function(e) {
                            if (-1 != ie) {
                                var r = Ce(e) || 0;
                                oe(ie), Ee.setValueAtIndex(ie, r), Ue(ie)
                            }
                        }(e)
                    }
                });
                var Oe = (0, i.useCallback)((function(e, r) {
                        return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, F, {
                            id: ze.root,
                            ref: (0, d.lq)(r, ke),
                            tabIndex: -1,
                            "aria-disabled": (0, c.Qm)(b),
                            "data-focused": (0, c.PB)(ae),
                            style: P({}, e.style, Ae)
                        })
                    }), [F, b, ae, Ae, ze]),
                    Ie = (0, i.useCallback)((function(e, r) {
                        return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                            ref: (0, d.lq)(r, we),
                            id: ze.track,
                            "data-disabled": (0, c.PB)(b),
                            style: P({}, e.style, qe)
                        })
                    }), [b, qe, ze]),
                    _e = (0, i.useCallback)((function(e, r) {
                        return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                            ref: r,
                            id: ze.innerTrack,
                            style: P({}, e.style, Re)
                        })
                    }), [Re, ze]),
                    Me = (0, i.useCallback)((function(e, r) {
                        var a;
                        void 0 === r && (r = null);
                        var t = e.index,
                            n = T(e, I),
                            i = ce[t];
                        if (null == i) throw new TypeError("[range-slider > thumb] Cannot find value at index `" + t + "`. The `value` or `defaultValue` length is : " + ce.length);
                        var o = pe[t];
                        return P({}, n, {
                            ref: r,
                            role: "slider",
                            tabIndex: le ? 0 : void 0,
                            id: ze.getThumb(t),
                            "data-active": (0, c.PB)(J && ie === t),
                            "aria-valuetext": null != (a = null == G ? void 0 : G(i)) ? a : null == j ? void 0 : j[t],
                            "aria-valuemin": o.min,
                            "aria-valuemax": o.max,
                            "aria-valuenow": i,
                            "aria-orientation": f,
                            "aria-disabled": (0, c.Qm)(b),
                            "aria-readonly": (0, c.Qm)(v),
                            "aria-label": null == B ? void 0 : B[t],
                            "aria-labelledby": null != B && B[t] || null == E ? void 0 : E[t],
                            style: P({}, e.style, Te(t)),
                            onKeyDown: (0, c.v0)(e.onKeyDown, Se),
                            onFocus: (0, c.v0)(e.onFocus, (function() {
                                te.on(), oe(t)
                            })),
                            onBlur: (0, c.v0)(e.onBlur, (function() {
                                te.off(), oe(-1)
                            }))
                        })
                    }), [ze, ce, pe, le, J, ie, G, j, f, b, v, B, E, Te, Se, te]),
                    Ze = (0, i.useCallback)((function(e, r) {
                        return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                            ref: r,
                            id: ze.output,
                            htmlFor: ce.map((function(e, r) {
                                return ze.getThumb(r)
                            })).join(" "),
                            "aria-live": "off"
                        })
                    }), [ze, ce]),
                    Ne = (0, i.useCallback)((function(e, r) {
                        void 0 === e && (e = {}), void 0 === r && (r = null);
                        var t = e,
                            i = t.value,
                            o = T(t, _),
                            s = !(i < a || i > n),
                            l = i >= ce[0] && i <= ce[ce.length - 1],
                            u = (0, c.Rg)(i, a, n),
                            d = P({
                                position: "absolute",
                                pointerEvents: "none"
                            }, A({
                                orientation: f,
                                vertical: {
                                    bottom: (u = $ ? 100 - u : u) + "%"
                                },
                                horizontal: {
                                    left: u + "%"
                                }
                            }));
                        return P({}, o, {
                            ref: r,
                            id: ze.getMarker(e.value),
                            role: "presentation",
                            "aria-hidden": !0,
                            "data-disabled": (0, c.PB)(b),
                            "data-invalid": (0, c.PB)(!s),
                            "data-highlighted": (0, c.PB)(l),
                            style: P({}, e.style, d)
                        })
                    }), [b, $, n, a, f, ce, ze]),
                    De = (0, i.useCallback)((function(e, r) {
                        void 0 === r && (r = null);
                        var a = e.index;
                        return P({}, T(e, M), {
                            ref: r,
                            id: ze.getInput(a),
                            type: "hidden",
                            value: ce[a],
                            name: Array.isArray(q) ? q[a] : q + "-" + a
                        })
                    }), [q, ce, ze]);
                return {
                    state: {
                        value: ce,
                        isFocused: ae,
                        isDragging: J,
                        getThumbPercent: function(e) {
                            return he[e]
                        },
                        getThumbMinValue: function(e) {
                            return pe[e].min
                        },
                        getThumbMaxValue: function(e) {
                            return pe[e].max
                        }
                    },
                    actions: Ee,
                    getRootProps: Oe,
                    getTrackProps: Ie,
                    getInnerTrackProps: _e,
                    getThumbProps: Me,
                    getMarkerProps: Ne,
                    getInputProps: De,
                    getOutputProps: Ze
                }
            }
            var N = function(e, r, a, t) {
                    return e.map((function(n, i) {
                        return {
                            min: 0 === i ? r : e[i - 1] + t,
                            max: i === e.length - 1 ? a : e[i + 1] - t
                        }
                    }))
                },
                D = ["getRootProps"],
                L = (0, d.kr)({
                    name: "SliderContext",
                    errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
                }),
                X = L[0],
                F = L[1],
                V = (0, l.Gp)((function(e, r) {
                    var a = (0, l.jC)("Slider", e),
                        t = (0, l.Lr)(e),
                        n = (0, l.Fg)().direction;
                    t.direction = n;
                    var o = Z(t),
                        s = o.getRootProps,
                        u = T(o, D),
                        c = i.useMemo((function() {
                            return P({}, u, {
                                name: e.name
                            })
                        }), [u, e.name]);
                    return i.createElement(X, {
                        value: c
                    }, i.createElement(l.Fo, {
                        value: a
                    }, i.createElement(l.m$.div, P({}, s({}, r), {
                        className: "chakra-slider",
                        __css: a.container
                    }), e.children)))
                }));
            V.defaultProps = {
                orientation: "horizontal"
            }, c.Ts && (V.displayName = "RangeSlider");
            var W = (0, l.Gp)((function(e, r) {
                var a = F(),
                    t = a.getThumbProps,
                    n = a.getInputProps,
                    o = a.name,
                    s = (0, l.yK)(),
                    u = t(e, r);
                return i.createElement(l.m$.div, P({}, u, {
                    className: (0, c.cx)("chakra-slider__thumb", e.className),
                    __css: s.thumb
                }), u.children, o && i.createElement("input", n({
                    index: e.index
                })))
            }));
            c.Ts && (W.displayName = "RangeSliderThumb");
            var G = (0, l.Gp)((function(e, r) {
                var a = F().getTrackProps,
                    t = (0, l.yK)(),
                    n = a(e, r);
                return i.createElement(l.m$.div, P({}, n, {
                    className: (0, c.cx)("chakra-slider__track", e.className),
                    __css: t.track,
                    "data-testid": "chakra-range-slider-track"
                }))
            }));
            c.Ts && (G.displayName = "RangeSliderTrack");
            var $ = (0, l.Gp)((function(e, r) {
                var a = F().getInnerTrackProps,
                    t = (0, l.yK)(),
                    n = a(e, r);
                return i.createElement(l.m$.div, P({}, n, {
                    className: "chakra-slider__filled-track",
                    __css: t.filledTrack
                }))
            }));
            c.Ts && ($.displayName = "RangeSliderFilledTrack");
            var K = (0, l.Gp)((function(e, r) {
                var a = (0, F().getMarkerProps)(e, r);
                return i.createElement(l.m$.div, P({}, a, {
                    className: (0, c.cx)("chakra-slider__marker", e.className)
                }))
            }));
            c.Ts && (K.displayName = "RangeSliderMark");
            var Y = ["min", "max", "onChange", "value", "defaultValue", "isReversed", "direction", "orientation", "id", "isDisabled", "isReadOnly", "onChangeStart", "onChangeEnd", "step", "getAriaValueText", "aria-valuetext", "aria-label", "aria-labelledby", "name", "focusThumbOnChange"];

            function H(e, r) {
                return r < e ? e : e + (r - e) / 2
            }
            var Q = ["getInputProps", "getRootProps"],
                J = (0, d.kr)({
                    name: "SliderContext",
                    errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <Slider />"
                }),
                ee = J[0],
                re = J[1],
                ae = (0, l.Gp)((function(e, r) {
                    var a = (0, l.jC)("Slider", e),
                        t = (0, l.Lr)(e),
                        n = (0, l.Fg)().direction;
                    t.direction = n;
                    var o = function(e) {
                            var r, a = e.min,
                                t = void 0 === a ? 0 : a,
                                n = e.max,
                                o = void 0 === n ? 100 : n,
                                s = e.onChange,
                                l = e.value,
                                u = e.defaultValue,
                                g = e.isReversed,
                                h = e.direction,
                                m = void 0 === h ? "ltr" : h,
                                f = e.orientation,
                                y = void 0 === f ? "horizontal" : f,
                                b = e.id,
                                v = e.isDisabled,
                                w = e.isReadOnly,
                                k = e.onChangeStart,
                                x = e.onChangeEnd,
                                z = e.step,
                                C = void 0 === z ? 1 : z,
                                j = e.getAriaValueText,
                                B = e["aria-valuetext"],
                                A = e["aria-label"],
                                q = e["aria-labelledby"],
                                O = e.name,
                                I = e.focusThumbOnChange,
                                _ = void 0 === I || I,
                                M = T(e, Y),
                                Z = (0, S.u)(k),
                                N = (0, S.u)(x),
                                D = (0, S.u)(j),
                                L = U({
                                    isReversed: g,
                                    direction: m,
                                    orientation: y
                                }),
                                X = (0, p.Tx)({
                                    value: l,
                                    defaultValue: null != u ? u : H(t, o),
                                    onChange: s
                                }),
                                F = X[0],
                                V = X[1],
                                W = (0, p.kt)(),
                                G = W[0],
                                $ = W[1],
                                K = (0, p.kt)(),
                                Q = K[0],
                                J = K[1],
                                ee = (0, i.useRef)(null),
                                re = !(v || w),
                                ae = (0, c.HU)(F, t, o),
                                te = (0, p.II)(ae),
                                ne = (0, i.useRef)(te.current),
                                ie = L ? o - ae + t : ae,
                                oe = (0, c.Rg)(ie, t, o),
                                se = "vertical" === y,
                                le = (0, i.useRef)(null),
                                ue = (0, i.useRef)(null),
                                ce = (0, i.useRef)(null),
                                de = (0, p.ZS)(b, "slider-thumb", "slider-track"),
                                pe = de[0],
                                ge = de[1],
                                he = (0, i.useCallback)((function(e) {
                                    var r, a;
                                    if (le.current) {
                                        ee.current = "pointer";
                                        var n = (0, E.iz)(le.current).borderBox,
                                            i = null != (r = null == (a = e.touches) ? void 0 : a[0]) ? r : e,
                                            s = i.clientX,
                                            l = i.clientY,
                                            u = (se ? n.bottom - l : s - n.left) / (se ? n.height : n.width);
                                        L && (u = 1 - u);
                                        var d = (0, c.WS)(u, t, o);
                                        return C && (d = parseFloat((0, c.WP)(d, t, C))), (0, c.HU)(d, t, o)
                                    }
                                }), [se, L, o, t, C]),
                                me = (o - t) / 10,
                                fe = C || (o - t) / 100,
                                ye = (0, i.useCallback)((function(e) {
                                    re && (e = parseFloat((0, c.WP)(e, t, fe)), e = (0, c.HU)(e, t, o), V(e))
                                }), [fe, o, t, V, re]),
                                be = (0, i.useMemo)((function() {
                                    return {
                                        stepUp: function(e) {
                                            void 0 === e && (e = fe), ye(L ? ae - e : ae + e)
                                        },
                                        stepDown: function(e) {
                                            void 0 === e && (e = fe), ye(L ? ae + e : ae - e)
                                        },
                                        reset: function() {
                                            return ye(u || 0)
                                        },
                                        stepTo: function(e) {
                                            return ye(e)
                                        }
                                    }
                                }), [ye, L, ae, fe, u]),
                                ve = (0, i.useCallback)((function(e) {
                                    var r = {
                                        ArrowRight: function() {
                                            return be.stepUp()
                                        },
                                        ArrowUp: function() {
                                            return be.stepUp()
                                        },
                                        ArrowLeft: function() {
                                            return be.stepDown()
                                        },
                                        ArrowDown: function() {
                                            return be.stepDown()
                                        },
                                        PageUp: function() {
                                            return be.stepUp(me)
                                        },
                                        PageDown: function() {
                                            return be.stepDown(me)
                                        },
                                        Home: function() {
                                            return ye(t)
                                        },
                                        End: function() {
                                            return ye(o)
                                        }
                                    }[(0, c.uh)(e)];
                                    r && (e.preventDefault(), e.stopPropagation(), r(e), ee.current = "keyboard")
                                }), [be, ye, o, t, me]),
                                we = null != (r = null == D ? void 0 : D(ae)) ? r : B,
                                ke = (0, p.Di)(ue),
                                xe = (0, i.useMemo)((function() {
                                    var e, r = null != (e = null == ke ? void 0 : ke.borderBox) ? e : {
                                        width: 0,
                                        height: 0
                                    };
                                    return R({
                                        isReversed: L,
                                        orientation: y,
                                        thumbRects: [r],
                                        thumbPercents: [oe]
                                    })
                                }), [L, y, null == ke ? void 0 : ke.borderBox, oe]),
                                ze = xe.getThumbStyle,
                                Ce = xe.rootStyle,
                                je = xe.trackStyle,
                                Be = xe.innerTrackStyle,
                                Ee = (0, i.useCallback)((function() {
                                    ue.current && _ && setTimeout((function() {
                                        return (0, c.T_)(ue.current)
                                    }))
                                }), [_]);
                            (0, p.rf)((function() {
                                Ee(), "keyboard" === ee.current && (null == N || N(te.current))
                            }), [ae, N]);
                            var Se = function(e) {
                                var r = he(e);
                                null != r && r !== te.current && V(r)
                            };
                            (0, p.PO)(ce, {
                                onPanSessionStart: function(e) {
                                    re && ($.on(), Ee(), Se(e), null == Z || Z(te.current))
                                },
                                onPanSessionEnd: function() {
                                    re && ($.off(), null == N || N(te.current), ne.current = te.current)
                                },
                                onPan: function(e) {
                                    re && Se(e)
                                }
                            });
                            var Pe = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, M, {
                                        ref: (0, d.lq)(r, ce),
                                        tabIndex: -1,
                                        "aria-disabled": (0, c.Qm)(v),
                                        "data-focused": (0, c.PB)(Q),
                                        style: P({}, e.style, Ce)
                                    })
                                }), [M, v, Q, Ce]),
                                Te = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                                        ref: (0, d.lq)(r, le),
                                        id: ge,
                                        "data-disabled": (0, c.PB)(v),
                                        style: P({}, e.style, je)
                                    })
                                }), [v, ge, je]),
                                Ae = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                                        ref: r,
                                        style: P({}, e.style, Be)
                                    })
                                }), [Be]),
                                qe = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                                        ref: (0, d.lq)(r, ue),
                                        role: "slider",
                                        tabIndex: re ? 0 : void 0,
                                        id: pe,
                                        "data-active": (0, c.PB)(G),
                                        "aria-valuetext": we,
                                        "aria-valuemin": t,
                                        "aria-valuemax": o,
                                        "aria-valuenow": ae,
                                        "aria-orientation": y,
                                        "aria-disabled": (0, c.Qm)(v),
                                        "aria-readonly": (0, c.Qm)(w),
                                        "aria-label": A,
                                        "aria-labelledby": A ? void 0 : q,
                                        style: P({}, e.style, ze(0)),
                                        onKeyDown: (0, c.v0)(e.onKeyDown, ve),
                                        onFocus: (0, c.v0)(e.onFocus, J.on),
                                        onBlur: (0, c.v0)(e.onBlur, J.off)
                                    })
                                }), [re, pe, G, we, t, o, ae, y, v, w, A, q, ze, ve, J.on, J.off]),
                                Re = (0, i.useCallback)((function(e, r) {
                                    void 0 === e && (e = {}), void 0 === r && (r = null);
                                    var a = !(e.value < t || e.value > o),
                                        n = ae >= e.value,
                                        i = (0, c.Rg)(e.value, t, o),
                                        s = P({
                                            position: "absolute",
                                            pointerEvents: "none"
                                        }, function(e) {
                                            var r = e.orientation,
                                                a = e.vertical,
                                                t = e.horizontal;
                                            return "vertical" === r ? a : t
                                        }({
                                            orientation: y,
                                            vertical: {
                                                bottom: L ? 100 - i + "%" : i + "%"
                                            },
                                            horizontal: {
                                                left: L ? 100 - i + "%" : i + "%"
                                            }
                                        }));
                                    return P({}, e, {
                                        ref: r,
                                        role: "presentation",
                                        "aria-hidden": !0,
                                        "data-disabled": (0, c.PB)(v),
                                        "data-invalid": (0, c.PB)(!a),
                                        "data-highlighted": (0, c.PB)(n),
                                        style: P({}, e.style, s)
                                    })
                                }), [v, L, o, t, y, ae]),
                                Ue = (0, i.useCallback)((function(e, r) {
                                    return void 0 === e && (e = {}), void 0 === r && (r = null), P({}, e, {
                                        ref: r,
                                        type: "hidden",
                                        value: ae,
                                        name: O
                                    })
                                }), [O, ae]);
                            return {
                                state: {
                                    value: ae,
                                    isFocused: Q,
                                    isDragging: G
                                },
                                actions: be,
                                getRootProps: Pe,
                                getTrackProps: Te,
                                getInnerTrackProps: Ae,
                                getThumbProps: qe,
                                getMarkerProps: Re,
                                getInputProps: Ue
                            }
                        }(t),
                        s = o.getInputProps,
                        u = o.getRootProps,
                        g = T(o, Q),
                        h = u(),
                        m = s({}, r);
                    return i.createElement(ee, {
                        value: g
                    }, i.createElement(l.Fo, {
                        value: a
                    }, i.createElement(l.m$.div, P({}, h, {
                        className: (0, c.cx)("chakra-slider", e.className),
                        __css: a.container
                    }), e.children, i.createElement("input", m))))
                }));
            ae.defaultProps = {
                orientation: "horizontal"
            }, c.Ts && (ae.displayName = "Slider");
            var te = (0, l.Gp)((function(e, r) {
                var a = re().getThumbProps,
                    t = (0, l.yK)(),
                    n = a(e, r);
                return i.createElement(l.m$.div, P({}, n, {
                    className: (0, c.cx)("chakra-slider__thumb", e.className),
                    __css: t.thumb
                }))
            }));
            c.Ts && (te.displayName = "SliderThumb");
            var ne = (0, l.Gp)((function(e, r) {
                var a = re().getTrackProps,
                    t = (0, l.yK)(),
                    n = a(e, r);
                return i.createElement(l.m$.div, P({}, n, {
                    className: (0, c.cx)("chakra-slider__track", e.className),
                    __css: t.track
                }))
            }));
            c.Ts && (ne.displayName = "SliderTrack");
            var ie = (0, l.Gp)((function(e, r) {
                var a = re().getInnerTrackProps,
                    t = (0, l.yK)(),
                    n = a(e, r);
                return i.createElement(l.m$.div, P({}, n, {
                    className: (0, c.cx)("chakra-slider__filled-track", e.className),
                    __css: t.filledTrack
                }))
            }));
            c.Ts && (ie.displayName = "SliderFilledTrack");
            var oe = (0, l.Gp)((function(e, r) {
                var a = (0, re().getMarkerProps)(e, r);
                return i.createElement(l.m$.div, P({}, a, {
                    className: (0, c.cx)("chakra-slider__marker", e.className)
                }))
            }));
            c.Ts && (oe.displayName = "SliderMark");
            var se = a(56839),
                le = a(18775),
                ue = a.n(le),
                ce = a(59598),
                de = a.n(ce),
                pe = a(53720),
                ge = ["abacus", "abdomen", "abdominal", "abide", "abiding", "ability", "ablaze", "able", "abnormal", "abrasion", "abrasive", "abreast", "abridge", "abroad", "abruptly", "absence", "absentee", "absently", "absinthe", "absolute", "absolve", "abstain", "abstract", "absurd", "accent", "acclaim", "acclimate", "accompany", "account", "accuracy", "accurate", "accustom", "acetone", "achiness", "aching", "acid", "acorn", "acquaint", "acquire", "acre", "acrobat", "acronym", "acting", "action", "activate", "activator", "active", "activism", "activist", "activity", "actress", "acts", "acutely", "acuteness", "aeration", "aerobics", "aerosol", "aerospace", "afar", "affair", "affected", "affecting", "affection", "affidavit", "affiliate", "affirm", "affix", "afflicted", "affluent", "afford", "affront", "aflame", "afloat", "aflutter", "afoot", "afraid", "afterglow", "afterlife", "aftermath", "aftermost", "afternoon", "aged", "ageless", "agency", "agenda", "agent", "aggregate", "aghast", "agile", "agility", "aging", "agnostic", "agonize", "agonizing", "agony", "agreeable", "agreeably", "agreed", "agreeing", "agreement", "aground", "ahead", "ahoy", "aide", "aids", "aim", "ajar", "alabaster", "alarm", "albatross", "album", "alfalfa", "algebra", "algorithm", "alias", "alibi", "alienable", "alienate", "aliens", "alike", "alive", "alkaline", "alkalize", "almanac", "almighty", "almost", "aloe", "aloft", "aloha", "alone", "alongside", "aloof", "alphabet", "alright", "although", "altitude", "alto", "aluminum", "alumni", "always", "amaretto", "amaze", "amazingly", "amber", "ambiance", "ambiguity", "ambiguous", "ambition", "ambitious", "ambulance", "ambush", "amendable", "amendment", "amends", "amenity", "amiable", "amicably", "amid", "amigo", "amino", "amiss", "ammonia", "ammonium", "amnesty", "amniotic", "among", "amount", "amperage", "ample", "amplifier", "amplify", "amply", "amuck", "amulet", "amusable", "amused", "amusement", "amuser", "amusing", "anaconda", "anaerobic", "anagram", "anatomist", "anatomy", "anchor", "anchovy", "ancient", "android", "anemia", "anemic", "aneurism", "anew", "angelfish", "angelic", "anger", "angled", "angler", "angles", "angling", "angrily", "angriness", "anguished", "angular", "animal", "animate", "animating", "animation", "animator", "anime", "animosity", "ankle", "annex", "annotate", "announcer", "annoying", "annually", "annuity", "anointer", "another", "answering", "antacid", "antarctic", "anteater", "antelope", "antennae", "anthem", "anthill", "anthology", "antibody", "antics", "antidote", "antihero", "antiquely", "antiques", "antiquity", "antirust", "antitoxic", "antitrust", "antiviral", "antivirus", "antler", "antonym", "antsy", "anvil", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere", "aorta", "apache", "apostle", "appealing", "appear", "appease", "appeasing", "appendage", "appendix", "appetite", "appetizer", "applaud", "applause", "apple", "appliance", "applicant", "applied", "apply", "appointee", "appraisal", "appraiser", "apprehend", "approach", "approval", "approve", "apricot", "april", "apron", "aptitude", "aptly", "aqua", "aqueduct", "arbitrary", "arbitrate", "ardently", "area", "arena", "arguable", "arguably", "argue", "arise", "armadillo", "armband", "armchair", "armed", "armful", "armhole", "arming", "armless", "armoire", "armored", "armory", "armrest", "army", "aroma", "arose", "around", "arousal", "arrange", "array", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arson", "art", "ascend", "ascension", "ascent", "ascertain", "ashamed", "ashen", "ashes", "ashy", "aside", "askew", "asleep", "asparagus", "aspect", "aspirate", "aspire", "aspirin", "astonish", "astound", "astride", "astrology", "astronaut", "astronomy", "astute", "atlantic", "atlas", "atom", "atonable", "atop", "atrium", "atrocious", "atrophy", "attach", "attain", "attempt", "attendant", "attendee", "attention", "attentive", "attest", "attic", "attire", "attitude", "attractor", "attribute", "atypical", "auction", "audacious", "audacity", "audible", "audibly", "audience", "audio", "audition", "augmented", "august", "authentic", "author", "autism", "autistic", "autograph", "automaker", "automated", "automatic", "autopilot", "available", "avalanche", "avatar", "avenge", "avenging", "avenue", "average", "aversion", "avert", "aviation", "aviator", "avid", "avoid", "await", "awaken", "award", "aware", "awhile", "awkward", "awning", "awoke", "awry", "axis", "babble", "babbling", "babied", "baboon", "backache", "backboard", "backboned", "backdrop", "backed", "backer", "backfield", "backfire", "backhand", "backing", "backlands", "backlash", "backless", "backlight", "backlit", "backlog", "backpack", "backpedal", "backrest", "backroom", "backshift", "backside", "backslid", "backspace", "backspin", "backstab", "backstage", "backtalk", "backtrack", "backup", "backward", "backwash", "backwater", "backyard", "bacon", "bacteria", "bacterium", "badass", "badge", "badland", "badly", "badness", "baffle", "baffling", "bagel", "bagful", "baggage", "bagged", "baggie", "bagginess", "bagging", "baggy", "bagpipe", "baguette", "baked", "bakery", "bakeshop", "baking", "balance", "balancing", "balcony", "balmy", "balsamic", "bamboo", "banana", "banish", "banister", "banjo", "bankable", "bankbook", "banked", "banker", "banking", "banknote", "bankroll", "banner", "bannister", "banshee", "banter", "barbecue", "barbed", "barbell", "barber", "barcode", "barge", "bargraph", "barista", "baritone", "barley", "barmaid", "barman", "barn", "barometer", "barrack", "barracuda", "barrel", "barrette", "barricade", "barrier", "barstool", "bartender", "barterer", "bash", "basically", "basics", "basil", "basin", "basis", "basket", "batboy", "batch", "bath", "baton", "bats", "battalion", "battered", "battering", "battery", "batting", "battle", "bauble", "bazooka", "blabber", "bladder", "blade", "blah", "blame", "blaming", "blanching", "blandness", "blank", "blaspheme", "blasphemy", "blast", "blatancy", "blatantly", "blazer", "blazing", "bleach", "bleak", "bleep", "blemish", "blend", "bless", "blighted", "blimp", "bling", "blinked", "blinker", "blinking", "blinks", "blip", "blissful", "blitz", "blizzard", "bloated", "bloating", "blob", "blog", "bloomers", "blooming", "blooper", "blot", "blouse", "blubber", "bluff", "bluish", "blunderer", "blunt", "blurb", "blurred", "blurry", "blurt", "blush", "blustery", "boaster", "boastful", "boasting", "boat", "bobbed", "bobbing", "bobble", "bobcat", "bobsled", "bobtail", "bodacious", "body", "bogged", "boggle", "bogus", "boil", "bok", "bolster", "bolt", "bonanza", "bonded", "bonding", "bondless", "boned", "bonehead", "boneless", "bonelike", "boney", "bonfire", "bonnet", "bonsai", "bonus", "bony", "boogeyman", "boogieman", "book", "boondocks", "booted", "booth", "bootie", "booting", "bootlace", "bootleg", "boots", "boozy", "borax", "boring", "borough", "borrower", "borrowing", "boss", "botanical", "botanist", "botany", "botch", "both", "bottle", "bottling", "bottom", "bounce", "bouncing", "bouncy", "bounding", "boundless", "bountiful", "bovine", "boxcar", "boxer", "boxing", "boxlike", "boxy", "breach", "breath", "breeches", "breeching", "breeder", "breeding", "breeze", "breezy", "brethren", "brewery", "brewing", "briar", "bribe", "brick", "bride", "bridged", "brigade", "bright", "brilliant", "brim", "bring", "brink", "brisket", "briskly", "briskness", "bristle", "brittle", "broadband", "broadcast", "broaden", "broadly", "broadness", "broadside", "broadways", "broiler", "broiling", "broken", "broker", "bronchial", "bronco", "bronze", "bronzing", "brook", "broom", "brought", "browbeat", "brownnose", "browse", "browsing", "bruising", "brunch", "brunette", "brunt", "brush", "brussels", "brute", "brutishly", "bubble", "bubbling", "bubbly", "buccaneer", "bucked", "bucket", "buckle", "buckshot", "buckskin", "bucktooth", "buckwheat", "buddhism", "buddhist", "budding", "buddy", "budget", "buffalo", "buffed", "buffer", "buffing", "buffoon", "buggy", "bulb", "bulge", "bulginess", "bulgur", "bulk", "bulldog", "bulldozer", "bullfight", "bullfrog", "bullhorn", "bullion", "bullish", "bullpen", "bullring", "bullseye", "bullwhip", "bully", "bunch", "bundle", "bungee", "bunion", "bunkbed", "bunkhouse", "bunkmate", "bunny", "bunt", "busboy", "bush", "busily", "busload", "bust", "busybody", "buzz", "cabana", "cabbage", "cabbie", "cabdriver", "cable", "caboose", "cache", "cackle", "cacti", "cactus", "caddie", "caddy", "cadet", "cadillac", "cadmium", "cage", "cahoots", "cake", "calamari", "calamity", "calcium", "calculate", "calculus", "caliber", "calibrate", "calm", "caloric", "calorie", "calzone", "camcorder", "cameo", "camera", "camisole", "camper", "campfire", "camping", "campsite", "campus", "canal", "canary", "cancel", "candied", "candle", "candy", "cane", "canine", "canister", "cannabis", "canned", "canning", "cannon", "cannot", "canola", "canon", "canopener", "canopy", "canteen", "canyon", "capable", "capably", "capacity", "cape", "capillary", "capital", "capitol", "capped", "capricorn", "capsize", "capsule", "caption", "captivate", "captive", "captivity", "capture", "caramel", "carat", "caravan", "carbon", "cardboard", "carded", "cardiac", "cardigan", "cardinal", "cardstock", "carefully", "caregiver", "careless", "caress", "caretaker", "cargo", "caring", "carless", "carload", "carmaker", "carnage", "carnation", "carnival", "carnivore", "carol", "carpenter", "carpentry", "carpool", "carport", "carried", "carrot", "carrousel", "carry", "cartel", "cartload", "carton", "cartoon", "cartridge", "cartwheel", "carve", "carving", "carwash", "cascade", "case", "cash", "casing", "casino", "casket", "cassette", "casually", "casualty", "catacomb", "catalog", "catalyst", "catalyze", "catapult", "cataract", "catatonic", "catcall", "catchable", "catcher", "catching", "catchy", "caterer", "catering", "catfight", "catfish", "cathedral", "cathouse", "catlike", "catnap", "catnip", "catsup", "cattail", "cattishly", "cattle", "catty", "catwalk", "caucasian", "caucus", "causal", "causation", "cause", "causing", "cauterize", "caution", "cautious", "cavalier", "cavalry", "caviar", "cavity", "cedar", "celery", "celestial", "celibacy", "celibate", "celtic", "cement", "census", "ceramics", "ceremony", "certainly", "certainty", "certified", "certify", "cesarean", "cesspool", "chafe", "chaffing", "chain", "chair", "chalice", "challenge", "chamber", "chamomile", "champion", "chance", "change", "channel", "chant", "chaos", "chaperone", "chaplain", "chapped", "chaps", "chapter", "character", "charbroil", "charcoal", "charger", "charging", "chariot", "charity", "charm", "charred", "charter", "charting", "chase", "chasing", "chaste", "chastise", "chastity", "chatroom", "chatter", "chatting", "chatty", "cheating", "cheddar", "cheek", "cheer", "cheese", "cheesy", "chef", "chemicals", "chemist", "chemo", "cherisher", "cherub", "chess", "chest", "chevron", "chevy", "chewable", "chewer", "chewing", "chewy", "chief", "chihuahua", "childcare", "childhood", "childish", "childless", "childlike", "chili", "chill", "chimp", "chip", "chirping", "chirpy", "chitchat", "chivalry", "chive", "chloride", "chlorine", "choice", "chokehold", "choking", "chomp", "chooser", "choosing", "choosy", "chop", "chosen", "chowder", "chowtime", "chrome", "chubby", "chuck", "chug", "chummy", "chump", "chunk", "churn", "chute", "cider", "cilantro", "cinch", "cinema", "cinnamon", "circle", "circling", "circular", "circulate", "circus", "citable", "citadel", "citation", "citizen", "citric", "citrus", "city", "civic", "civil", "clad", "claim", "clambake", "clammy", "clamor", "clamp", "clamshell", "clang", "clanking", "clapped", "clapper", "clapping", "clarify", "clarinet", "clarity", "clash", "clasp", "class", "clatter", "clause", "clavicle", "claw", "clay", "clean", "clear", "cleat", "cleaver", "cleft", "clench", "clergyman", "clerical", "clerk", "clever", "clicker", "client", "climate", "climatic", "cling", "clinic", "clinking", "clip", "clique", "cloak", "clobber", "clock", "clone", "cloning", "closable", "closure", "clothes", "clothing", "cloud", "clover", "clubbed", "clubbing", "clubhouse", "clump", "clumsily", "clumsy", "clunky", "clustered", "clutch", "clutter", "coach", "coagulant", "coastal", "coaster", "coasting", "coastland", "coastline", "coat", "coauthor", "cobalt", "cobbler", "cobweb", "cocoa", "coconut", "cod", "coeditor", "coerce", "coexist", "coffee", "cofounder", "cognition", "cognitive", "cogwheel", "coherence", "coherent", "cohesive", "coil", "coke", "cola", "cold", "coleslaw", "coliseum", "collage", "collapse", "collar", "collected", "collector", "collide", "collie", "collision", "colonial", "colonist", "colonize", "colony", "colossal", "colt", "coma", "come", "comfort", "comfy", "comic", "coming", "comma", "commence", "commend", "comment", "commerce", "commode", "commodity", "commodore", "common", "commotion", "commute", "commuting", "compacted", "compacter", "compactly", "compactor", "companion", "company", "compare", "compel", "compile", "comply", "component", "composed", "composer", "composite", "compost", "composure", "compound", "compress", "comprised", "computer", "computing", "comrade", "concave", "conceal", "conceded", "concept", "concerned", "concert", "conch", "concierge", "concise", "conclude", "concrete", "concur", "condense", "condiment", "condition", "condone", "conducive", "conductor", "conduit", "cone", "confess", "confetti", "confidant", "confident", "confider", "confiding", "configure", "confined", "confining", "confirm", "conflict", "conform", "confound", "confront", "confused", "confusing", "confusion", "congenial", "congested", "congrats", "congress", "conical", "conjoined", "conjure", "conjuror", "connected", "connector", "consensus", "consent", "console", "consoling", "consonant", "constable", "constant", "constrain", "constrict", "construct", "consult", "consumer", "consuming", "contact", "container", "contempt", "contend", "contented", "contently", "contents", "contest", "context", "contort", "contour", "contrite", "control", "contusion", "convene", "convent", "copartner", "cope", "copied", "copier", "copilot", "coping", "copious", "copper", "copy", "coral", "cork", "cornball", "cornbread", "corncob", "cornea", "corned", "corner", "cornfield", "cornflake", "cornhusk", "cornmeal", "cornstalk", "corny", "coronary", "coroner", "corporal", "corporate", "corral", "correct", "corridor", "corrode", "corroding", "corrosive", "corsage", "corset", "cortex", "cosigner", "cosmetics", "cosmic", "cosmos", "cosponsor", "cost", "cottage", "cotton", "couch", "cough", "could", "countable", "countdown", "counting", "countless", "country", "county", "courier", "covenant", "cover", "coveted", "coveting", "coyness", "cozily", "coziness", "cozy", "crabbing", "crabgrass", "crablike", "crabmeat", "cradle", "cradling", "crafter", "craftily", "craftsman", "craftwork", "crafty", "cramp", "cranberry", "crane", "cranial", "cranium", "crank", "crate", "crave", "craving", "crawfish", "crawlers", "crawling", "crayfish", "crayon", "crazed", "crazily", "craziness", "crazy", "creamed", "creamer", "creamlike", "crease", "creasing", "creatable", "create", "creation", "creative", "creature", "credible", "credibly", "credit", "creed", "creme", "creole", "crepe", "crept", "crescent", "crested", "cresting", "crestless", "crevice", "crewless", "crewman", "crewmate", "crib", "cricket", "cried", "crier", "crimp", "crimson", "cringe", "cringing", "crinkle", "crinkly", "crisped", "crisping", "crisply", "crispness", "crispy", "criteria", "critter", "croak", "crock", "crook", "croon", "crop", "cross", "crouch", "crouton", "crowbar", "crowd", "crown", "crucial", "crudely", "crudeness", "cruelly", "cruelness", "cruelty", "crumb", "crummiest", "crummy", "crumpet", "crumpled", "cruncher", "crunching", "crunchy", "crusader", "crushable", "crushed", "crusher", "crushing", "crust", "crux", "crying", "cryptic", "crystal", "cubbyhole", "cube", "cubical", "cubicle", "cucumber", "cuddle", "cuddly", "cufflink", "culinary", "culminate", "culpable", "culprit", "cultivate", "cultural", "culture", "cupbearer", "cupcake", "cupid", "cupped", "cupping", "curable", "curator", "curdle", "cure", "curfew", "curing", "curled", "curler", "curliness", "curling", "curly", "curry", "curse", "cursive", "cursor", "curtain", "curtly", "curtsy", "curvature", "curve", "curvy", "cushy", "cusp", "cussed", "custard", "custodian", "custody", "customary", "customer", "customize", "customs", "cut", "cycle", "cyclic", "cycling", "cyclist", "cylinder", "cymbal", "cytoplasm", "cytoplast", "dab", "dad", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dallying", "dance", "dancing", "dandelion", "dander", "dandruff", "dandy", "danger", "dangle", "dangling", "daredevil", "dares", "daringly", "darkened", "darkening", "darkish", "darkness", "darkroom", "darling", "darn", "dart", "darwinism", "dash", "dastardly", "data", "datebook", "dating", "daughter", "daunting", "dawdler", "dawn", "daybed", "daybreak", "daycare", "daydream", "daylight", "daylong", "dayroom", "daytime", "dazzler", "dazzling", "deacon", "deafening", "deafness", "dealer", "dealing", "dealmaker", "dealt", "dean", "debatable", "debate", "debating", "debit", "debrief", "debtless", "debtor", "debug", "debunk", "decade", "decaf", "decal", "decathlon", "decay", "deceased", "deceit", "deceiver", "deceiving", "december", "decency", "decent", "deception", "deceptive", "decibel", "decidable", "decimal", "decimeter", "decipher", "deck", "declared", "decline", "decode", "decompose", "decorated", "decorator", "decoy", "decrease", "decree", "dedicate", "dedicator", "deduce", "deduct", "deed", "deem", "deepen", "deeply", "deepness", "deface", "defacing", "defame", "default", "defeat", "defection", "defective", "defendant", "defender", "defense", "defensive", "deferral", "deferred", "defiance", "defiant", "defile", "defiling", "define", "definite", "deflate", "deflation", "deflator", "deflected", "deflector", "defog", "deforest", "defraud", "defrost", "deftly", "defuse", "defy", "degraded", "degrading", "degrease", "degree", "dehydrate", "deity", "dejected", "delay", "delegate", "delegator", "delete", "deletion", "delicacy", "delicate", "delicious", "delighted", "delirious", "delirium", "deliverer", "delivery", "delouse", "delta", "deluge", "delusion", "deluxe", "demanding", "demeaning", "demeanor", "demise", "democracy", "democrat", "demote", "demotion", "demystify", "denatured", "deniable", "denial", "denim", "denote", "dense", "density", "dental", "dentist", "denture", "deny", "deodorant", "deodorize", "departed", "departure", "depict", "deplete", "depletion", "deplored", "deploy", "deport", "depose", "depraved", "depravity", "deprecate", "depress", "deprive", "depth", "deputize", "deputy", "derail", "deranged", "derby", "derived", "desecrate", "deserve", "deserving", "designate", "designed", "designer", "designing", "deskbound", "desktop", "deskwork", "desolate", "despair", "despise", "despite", "destiny", "destitute", "destruct", "detached", "detail", "detection", "detective", "detector", "detention", "detergent", "detest", "detonate", "detonator", "detoxify", "detract", "deuce", "devalue", "deviancy", "deviant", "deviate", "deviation", "deviator", "device", "devious", "devotedly", "devotee", "devotion", "devourer", "devouring", "devoutly", "dexterity", "dexterous", "diabetes", "diabetic", "diabolic", "diagnoses", "diagnosis", "diagram", "dial", "diameter", "diaper", "diaphragm", "diary", "dice", "dicing", "dictate", "dictation", "dictator", "difficult", "diffused", "diffuser", "diffusion", "diffusive", "dig", "dilation", "diligence", "diligent", "dill", "dilute", "dime", "diminish", "dimly", "dimmed", "dimmer", "dimness", "dimple", "diner", "dingbat", "dinghy", "dinginess", "dingo", "dingy", "dining", "dinner", "diocese", "dioxide", "diploma", "dipped", "dipper", "dipping", "directed", "direction", "directive", "directly", "directory", "direness", "dirtiness", "disabled", "disagree", "disallow", "disarm", "disarray", "disaster", "disband", "disbelief", "disburse", "discard", "discern", "discharge", "disclose", "discolor", "discount", "discourse", "discover", "discuss", "disdain", "disengage", "disfigure", "disgrace", "dish", "disinfect", "disjoin", "disk", "dislike", "disliking", "dislocate", "dislodge", "disloyal", "dismantle", "dismay", "dismiss", "dismount", "disobey", "disorder", "disown", "disparate", "disparity", "dispatch", "dispense", "dispersal", "dispersed", "disperser", "displace", "display", "displease", "disposal", "dispose", "disprove", "dispute", "disregard", "disrupt", "dissuade", "distance", "distant", "distaste", "distill", "distinct", "distort", "distract", "distress", "district", "distrust", "ditch", "ditto", "ditzy", "dividable", "divided", "dividend", "dividers", "dividing", "divinely", "diving", "divinity", "divisible", "divisibly", "division", "divisive", "divorcee", "dizziness", "dizzy", "doable", "docile", "dock", "doctrine", "document", "dodge", "dodgy", "doily", "doing", "dole", "dollar", "dollhouse", "dollop", "dolly", "dolphin", "domain", "domelike", "domestic", "dominion", "dominoes", "donated", "donation", "donator", "donor", "donut", "doodle", "doorbell", "doorframe", "doorknob", "doorman", "doormat", "doornail", "doorpost", "doorstep", "doorstop", "doorway", "doozy", "dork", "dormitory", "dorsal", "dosage", "dose", "dotted", "doubling", "douche", "dove", "down", "dowry", "doze", "drab", "dragging", "dragonfly", "dragonish", "dragster", "drainable", "drainage", "drained", "drainer", "drainpipe", "dramatic", "dramatize", "drank", "drapery", "drastic", "draw", "dreaded", "dreadful", "dreadlock", "dreamboat", "dreamily", "dreamland", "dreamless", "dreamlike", "dreamt", "dreamy", "drearily", "dreary", "drench", "dress", "drew", "dribble", "dried", "drier", "drift", "driller", "drilling", "drinkable", "drinking", "dripping", "drippy", "drivable", "driven", "driver", "driveway", "driving", "drizzle", "drizzly", "drone", "drool", "droop", "drop-down", "dropbox", "dropkick", "droplet", "dropout", "dropper", "drove", "drown", "drowsily", "drudge", "drum", "dry", "dubbed", "dubiously", "duchess", "duckbill", "ducking", "duckling", "ducktail", "ducky", "duct", "dude", "duffel", "dugout", "duh", "duke", "duller", "dullness", "duly", "dumping", "dumpling", "dumpster", "duo", "dupe", "duplex", "duplicate", "duplicity", "durable", "durably", "duration", "duress", "during", "dusk", "dust", "dutiful", "duty", "duvet", "dwarf", "dweeb", "dwelled", "dweller", "dwelling", "dwindle", "dwindling", "dynamic", "dynamite", "dynasty", "dyslexia", "dyslexic", "each", "eagle", "earache", "eardrum", "earflap", "earful", "earlobe", "early", "earmark", "earmuff", "earphone", "earpiece", "earplugs", "earring", "earshot", "earthen", "earthlike", "earthling", "earthly", "earthworm", "earthy", "earwig", "easeful", "easel", "easiest", "easily", "easiness", "easing", "eastbound", "eastcoast", "easter", "eastward", "eatable", "eaten", "eatery", "eating", "eats", "ebay", "ebony", "ebook", "ecard", "eccentric", "echo", "eclair", "eclipse", "ecologist", "ecology", "economic", "economist", "economy", "ecosphere", "ecosystem", "edge", "edginess", "edging", "edgy", "edition", "editor", "educated", "education", "educator", "eel", "effective", "effects", "efficient", "effort", "eggbeater", "egging", "eggnog", "eggplant", "eggshell", "egomaniac", "egotism", "egotistic", "either", "eject", "elaborate", "elastic", "elated", "elbow", "eldercare", "elderly", "eldest", "electable", "election", "elective", "elephant", "elevate", "elevating", "elevation", "elevator", "eleven", "elf", "eligible", "eligibly", "eliminate", "elite", "elitism", "elixir", "elk", "ellipse", "elliptic", "elm", "elongated", "elope", "eloquence", "eloquent", "elsewhere", "elude", "elusive", "elves", "email", "embargo", "embark", "embassy", "embattled", "embellish", "ember", "embezzle", "emblaze", "emblem", "embody", "embolism", "emboss", "embroider", "emcee", "emerald", "emergency", "emission", "emit", "emote", "emoticon", "emotion", "empathic", "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "empirical", "employed", "employee", "employer", "emporium", "empower", "emptier", "emptiness", "empty", "emu", "enable", "enactment", "enamel", "enchanted", "enchilada", "encircle", "enclose", "enclosure", "encode", "encore", "encounter", "encourage", "encroach", "encrust", "encrypt", "endanger", "endeared", "endearing", "ended", "ending", "endless", "endnote", "endocrine", "endorphin", "endorse", "endowment", "endpoint", "endurable", "endurance", "enduring", "energetic", "energize", "energy", "enforced", "enforcer", "engaged", "engaging", "engine", "engorge", "engraved", "engraver", "engraving", "engross", "engulf", "enhance", "enigmatic", "enjoyable", "enjoyably", "enjoyer", "enjoying", "enjoyment", "enlarged", "enlarging", "enlighten", "enlisted", "enquirer", "enrage", "enrich", "enroll", "enslave", "ensnare", "ensure", "entail", "entangled", "entering", "entertain", "enticing", "entire", "entitle", "entity", "entomb", "entourage", "entrap", "entree", "entrench", "entrust", "entryway", "entwine", "enunciate", "envelope", "enviable", "enviably", "envious", "envision", "envoy", "envy", "enzyme", "epic", "epidemic", "epidermal", "epidermis", "epidural", "epilepsy", "epileptic", "epilogue", "epiphany", "episode", "equal", "equate", "equation", "equator", "equinox", "equipment", "equity", "equivocal", "eradicate", "erasable", "erased", "eraser", "erasure", "ergonomic", "errand", "errant", "erratic", "error", "erupt", "escalate", "escalator", "escapable", "escapade", "escapist", "escargot", "eskimo", "esophagus", "espionage", "espresso", "esquire", "essay", "essence", "essential", "establish", "estate", "esteemed", "estimate", "estimator", "estranged", "estrogen", "etching", "eternal", "eternity", "ethanol", "ether", "ethically", "ethics", "euphemism", "evacuate", "evacuee", "evade", "evaluate", "evaluator", "evaporate", "evasion", "evasive", "even", "everglade", "evergreen", "everybody", "everyday", "everyone", "evict", "evidence", "evident", "evil", "evoke", "evolution", "evolve", "exact", "exalted", "example", "excavate", "excavator", "exceeding", "exception", "excess", "exchange", "excitable", "exciting", "exclaim", "exclude", "excluding", "exclusion", "exclusive", "excretion", "excretory", "excursion", "excusable", "excusably", "excuse", "exemplary", "exemplify", "exemption", "exerciser", "exert", "exes", "exfoliate", "exhale", "exhaust", "exhume", "exile", "existing", "exit", "exodus", "exonerate", "exorcism", "exorcist", "expand", "expanse", "expansion", "expansive", "expectant", "expedited", "expediter", "expel", "expend", "expenses", "expensive", "expert", "expire", "expiring", "explain", "expletive", "explicit", "explode", "exploit", "explore", "exploring", "exponent", "exporter", "exposable", "expose", "exposure", "express", "expulsion", "exquisite", "extended", "extending", "extent", "extenuate", "exterior", "external", "extinct", "extortion", "extradite", "extras", "extrovert", "extrude", "extruding", "exuberant", "fable", "fabric", "fabulous", "facebook", "facecloth", "facedown", "faceless", "facelift", "faceplate", "faceted", "facial", "facility", "facing", "facsimile", "faction", "factoid", "factor", "factsheet", "factual", "faculty", "fade", "fading", "failing", "falcon", "fall", "false", "falsify", "fame", "familiar", "family", "famine", "famished", "fanatic", "fancied", "fanciness", "fancy", "fanfare", "fang", "fanning", "fantasize", "fantastic", "fantasy", "fascism", "fastball", "faster", "fasting", "fastness", "faucet", "favorable", "favorably", "favored", "favoring", "favorite", "fax", "feast", "federal", "fedora", "feeble", "feed", "feel", "feisty", "feline", "felt-tip", "feminine", "feminism", "feminist", "feminize", "femur", "fence", "fencing", "fender", "ferment", "fernlike", "ferocious", "ferocity", "ferret", "ferris", "ferry", "fervor", "fester", "festival", "festive", "festivity", "fetal", "fetch", "fever", "fiber", "fiction", "fiddle", "fiddling", "fidelity", "fidgeting", "fidgety", "fifteen", "fifth", "fiftieth", "fifty", "figment", "figure", "figurine", "filing", "filled", "filler", "filling", "film", "filter", "filth", "filtrate", "finale", "finalist", "finalize", "finally", "finance", "financial", "finch", "fineness", "finer", "finicky", "finished", "finisher", "finishing", "finite", "finless", "finlike", "fiscally", "fit", "five", "flaccid", "flagman", "flagpole", "flagship", "flagstick", "flagstone", "flail", "flakily", "flaky", "flame", "flammable", "flanked", "flanking", "flannels", "flap", "flaring", "flashback", "flashbulb", "flashcard", "flashily", "flashing", "flashy", "flask", "flatbed", "flatfoot", "flatly", "flatness", "flatten", "flattered", "flatterer", "flattery", "flattop", "flatware", "flatworm", "flavored", "flavorful", "flavoring", "flaxseed", "fled", "fleshed", "fleshy", "flick", "flier", "flight", "flinch", "fling", "flint", "flip", "flirt", "float", "flock", "flogging", "flop", "floral", "florist", "floss", "flounder", "flyable", "flyaway", "flyer", "flying", "flyover", "flypaper", "foam", "foe", "fog", "foil", "folic", "folk", "follicle", "follow", "fondling", "fondly", "fondness", "fondue", "font", "food", "fool", "footage", "football", "footbath", "footboard", "footer", "footgear", "foothill", "foothold", "footing", "footless", "footman", "footnote", "footpad", "footpath", "footprint", "footrest", "footsie", "footsore", "footwear", "footwork", "fossil", "foster", "founder", "founding", "fountain", "fox", "foyer", "fraction", "fracture", "fragile", "fragility", "fragment", "fragrance", "fragrant", "frail", "frame", "framing", "frantic", "fraternal", "frayed", "fraying", "frays", "freckled", "freckles", "freebase", "freebee", "freebie", "freedom", "freefall", "freehand", "freeing", "freeload", "freely", "freemason", "freeness", "freestyle", "freeware", "freeway", "freewill", "freezable", "freezing", "freight", "french", "frenzied", "frenzy", "frequency", "frequent", "fresh", "fretful", "fretted", "friction", "friday", "fridge", "fried", "friend", "frighten", "frightful", "frigidity", "frigidly", "frill", "fringe", "frisbee", "frisk", "fritter", "frivolous", "frolic", "from", "front", "frostbite", "frosted", "frostily", "frosting", "frostlike", "frosty", "froth", "frown", "frozen", "fructose", "frugality", "frugally", "fruit", "frustrate", "frying", "gab", "gaffe", "gag", "gainfully", "gaining", "gains", "gala", "gallantly", "galleria", "gallery", "galley", "gallon", "gallows", "gallstone", "galore", "galvanize", "gambling", "game", "gaming", "gamma", "gander", "gangly", "gangrene", "gangway", "gap", "garage", "garbage", "garden", "gargle", "garland", "garlic", "garment", "garnet", "garnish", "garter", "gas", "gatherer", "gathering", "gating", "gauging", "gauntlet", "gauze", "gave", "gawk", "gazing", "gear", "gecko", "geek", "geiger", "gem", "gender", "generic", "generous", "genetics", "genre", "gentile", "gentleman", "gently", "gents", "geography", "geologic", "geologist", "geology", "geometric", "geometry", "geranium", "gerbil", "geriatric", "germicide", "germinate", "germless", "germproof", "gestate", "gestation", "gesture", "getaway", "getting", "getup", "giant", "gibberish", "giblet", "giddily", "giddiness", "giddy", "gift", "gigabyte", "gigahertz", "gigantic", "giggle", "giggling", "giggly", "gigolo", "gilled", "gills", "gimmick", "girdle", "giveaway", "given", "giver", "giving", "gizmo", "gizzard", "glacial", "glacier", "glade", "gladiator", "gladly", "glamorous", "glamour", "glance", "glancing", "glandular", "glare", "glaring", "glass", "glaucoma", "glazing", "gleaming", "gleeful", "glider", "gliding", "glimmer", "glimpse", "glisten", "glitch", "glitter", "glitzy", "gloater", "gloating", "gloomily", "gloomy", "glorified", "glorifier", "glorify", "glorious", "glory", "gloss", "glove", "glowing", "glowworm", "glucose", "glue", "gluten", "glutinous", "glutton", "gnarly", "gnat", "goal", "goatskin", "goes", "goggles", "going", "goldfish", "goldmine", "goldsmith", "golf", "goliath", "gonad", "gondola", "gone", "gong", "good", "gooey", "goofball", "goofiness", "goofy", "google", "goon", "gopher", "gore", "gorged", "gorgeous", "gory", "gosling", "gossip", "gothic", "gotten", "gout", "gown", "grab", "graceful", "graceless", "gracious", "gradation", "graded", "grader", "gradient", "grading", "gradually", "graduate", "graffiti", "grafted", "grafting", "grain", "granddad", "grandkid", "grandly", "grandma", "grandpa", "grandson", "granite", "granny", "granola", "grant", "granular", "grape", "graph", "grapple", "grappling", "grasp", "grass", "gratified", "gratify", "grating", "gratitude", "gratuity", "gravel", "graveness", "graves", "graveyard", "gravitate", "gravity", "gravy", "gray", "grazing", "greasily", "greedily", "greedless", "greedy", "green", "greeter", "greeting", "grew", "greyhound", "grid", "grief", "grievance", "grieving", "grievous", "grill", "grimace", "grimacing", "grime", "griminess", "grimy", "grinch", "grinning", "grip", "gristle", "grit", "groggily", "groggy", "groin", "groom", "groove", "grooving", "groovy", "grope", "ground", "grouped", "grout", "grove", "grower", "growing", "growl", "grub", "grudge", "grudging", "grueling", "gruffly", "grumble", "grumbling", "grumbly", "grumpily", "grunge", "grunt", "guacamole", "guidable", "guidance", "guide", "guiding", "guileless", "guise", "gulf", "gullible", "gully", "gulp", "gumball", "gumdrop", "gumminess", "gumming", "gummy", "gurgle", "gurgling", "guru", "gush", "gusto", "gusty", "gutless", "guts", "gutter", "guy", "guzzler", "gyration", "habitable", "habitant", "habitat", "habitual", "hacked", "hacker", "hacking", "hacksaw", "had", "haggler", "haiku", "half", "halogen", "halt", "halved", "halves", "hamburger", "hamlet", "hammock", "hamper", "hamster", "hamstring", "handbag", "handball", "handbook", "handbrake", "handcart", "handclap", "handclasp", "handcraft", "handcuff", "handed", "handful", "handgrip", "handgun", "handheld", "handiness", "handiwork", "handlebar", "handled", "handler", "handling", "handmade", "handoff", "handpick", "handprint", "handrail", "handsaw", "handset", "handsfree", "handshake", "handstand", "handwash", "handwork", "handwoven", "handwrite", "handyman", "hangnail", "hangout", "hangover", "hangup", "hankering", "hankie", "hanky", "haphazard", "happening", "happier", "happiest", "happily", "happiness", "happy", "harbor", "hardcopy", "hardcore", "hardcover", "harddisk", "hardened", "hardener", "hardening", "hardhat", "hardhead", "hardiness", "hardly", "hardness", "hardship", "hardware", "hardwired", "hardwood", "hardy", "harmful", "harmless", "harmonica", "harmonics", "harmonize", "harmony", "harness", "harpist", "harsh", "harvest", "hash", "hassle", "haste", "hastily", "hastiness", "hasty", "hatbox", "hatchback", "hatchery", "hatchet", "hatching", "hatchling", "hate", "hatless", "hatred", "haunt", "haven", "hazard", "hazelnut", "hazily", "haziness", "hazing", "hazy", "headache", "headband", "headboard", "headcount", "headdress", "headed", "header", "headfirst", "headgear", "heading", "headlamp", "headless", "headlock", "headphone", "headpiece", "headrest", "headroom", "headscarf", "headset", "headsman", "headstand", "headstone", "headway", "headwear", "heap", "heat", "heave", "heavily", "heaviness", "heaving", "hedge", "hedging", "heftiness", "hefty", "helium", "helmet", "helper", "helpful", "helping", "helpless", "helpline", "hemlock", "hemstitch", "hence", "henchman", "henna", "herald", "herbal", "herbicide", "herbs", "heritage", "hermit", "heroics", "heroism", "herring", "herself", "hertz", "hesitancy", "hesitant", "hesitate", "hexagon", "hexagram", "hubcap", "huddle", "huddling", "huff", "hug", "hula", "hulk", "hull", "human", "humble", "humbling", "humbly", "humid", "humiliate", "humility", "humming", "hummus", "humongous", "humorist", "humorless", "humorous", "humpback", "humped", "humvee", "hunchback", "hundredth", "hunger", "hungrily", "hungry", "hunk", "hunter", "hunting", "huntress", "huntsman", "hurdle", "hurled", "hurler", "hurling", "hurray", "hurricane", "hurried", "hurry", "hurt", "husband", "hush", "husked", "huskiness", "hut", "hybrid", "hydrant", "hydrated", "hydration", "hydrogen", "hydroxide", "hyperlink", "hypertext", "hyphen", "hypnoses", "hypnosis", "hypnotic", "hypnotism", "hypnotist", "hypnotize", "hypocrisy", "hypocrite", "ibuprofen", "ice", "iciness", "icing", "icky", "icon", "icy", "idealism", "idealist", "idealize", "ideally", "idealness", "identical", "identify", "identity", "ideology", "idiocy", "idiom", "idly", "igloo", "ignition", "ignore", "iguana", "illicitly", "illusion", "illusive", "image", "imaginary", "imagines", "imaging", "imbecile", "imitate", "imitation", "immature", "immerse", "immersion", "imminent", "immobile", "immodest", "immorally", "immortal", "immovable", "immovably", "immunity", "immunize", "impaired", "impale", "impart", "impatient", "impeach", "impeding", "impending", "imperfect", "imperial", "impish", "implant", "implement", "implicate", "implicit", "implode", "implosion", "implosive", "imply", "impolite", "important", "importer", "impose", "imposing", "impotence", "impotency", "impotent", "impound", "imprecise", "imprint", "imprison", "impromptu", "improper", "improve", "improving", "improvise", "imprudent", "impulse", "impulsive", "impure", "impurity", "iodine", "iodize", "ion", "ipad", "iphone", "ipod", "irate", "irk", "iron", "irregular", "irrigate", "irritable", "irritably", "irritant", "irritate", "islamic", "islamist", "isolated", "isolating", "isolation", "isotope", "issue", "issuing", "italicize", "italics", "item", "itinerary", "itunes", "ivory", "ivy", "jab", "jackal", "jacket", "jackknife", "jackpot", "jailbird", "jailbreak", "jailer", "jailhouse", "jalapeno", "jam", "janitor", "january", "jargon", "jarring", "jasmine", "jaundice", "jaunt", "java", "jawed", "jawless", "jawline", "jaws", "jaybird", "jaywalker", "jazz", "jeep", "jeeringly", "jellied", "jelly", "jersey", "jester", "jet", "jiffy", "jigsaw", "jimmy", "jingle", "jingling", "jinx", "jitters", "jittery", "job", "jockey", "jockstrap", "jogger", "jogging", "john", "joining", "jokester", "jokingly", "jolliness", "jolly", "jolt", "jot", "jovial", "joyfully", "joylessly", "joyous", "joyride", "joystick", "jubilance", "jubilant", "judge", "judgingly", "judicial", "judiciary", "judo", "juggle", "juggling", "jugular", "juice", "juiciness", "juicy", "jujitsu", "jukebox", "july", "jumble", "jumbo", "jump", "junction", "juncture", "june", "junior", "juniper", "junkie", "junkman", "junkyard", "jurist", "juror", "jury", "justice", "justifier", "justify", "justly", "justness", "juvenile", "kabob", "kangaroo", "karaoke", "karate", "karma", "kebab", "keenly", "keenness", "keep", "keg", "kelp", "kennel", "kept", "kerchief", "kerosene", "kettle", "kick", "kiln", "kilobyte", "kilogram", "kilometer", "kilowatt", "kilt", "kimono", "kindle", "kindling", "kindly", "kindness", "kindred", "kinetic", "kinfolk", "king", "kinship", "kinsman", "kinswoman", "kissable", "kisser", "kissing", "kitchen", "kite", "kitten", "kitty", "kiwi", "kleenex", "knapsack", "knee", "knelt", "knickers", "knoll", "koala", "kooky", "kosher", "krypton", "kudos", "kung", "labored", "laborer", "laboring", "laborious", "labrador", "ladder", "ladies", "ladle", "ladybug", "ladylike", "lagged", "lagging", "lagoon", "lair", "lake", "lance", "landed", "landfall", "landfill", "landing", "landlady", "landless", "landline", "landlord", "landmark", "landmass", "landmine", "landowner", "landscape", "landside", "landslide", "language", "lankiness", "lanky", "lantern", "lapdog", "lapel", "lapped", "lapping", "laptop", "lard", "large", "lark", "lash", "lasso", "last", "latch", "late", "lather", "latitude", "latrine", "latter", "latticed", "launch", "launder", "laundry", "laurel", "lavender", "lavish", "laxative", "lazily", "laziness", "lazy", "lecturer", "left", "legacy", "legal", "legend", "legged", "leggings", "legible", "legibly", "legislate", "lego", "legroom", "legume", "legwarmer", "legwork", "lemon", "lend", "length", "lens", "lent", "leotard", "lesser", "letdown", "lethargic", "lethargy", "letter", "lettuce", "level", "leverage", "levers", "levitate", "levitator", "liability", "liable", "liberty", "librarian", "library", "licking", "licorice", "lid", "life", "lifter", "lifting", "liftoff", "ligament", "likely", "likeness", "likewise", "liking", "lilac", "lilly", "lily", "limb", "limeade", "limelight", "limes", "limit", "limping", "limpness", "line", "lingo", "linguini", "linguist", "lining", "linked", "linoleum", "linseed", "lint", "lion", "lip", "liquefy", "liqueur", "liquid", "lisp", "list", "litigate", "litigator", "litmus", "litter", "little", "livable", "lived", "lively", "liver", "livestock", "lividly", "living", "lizard", "lubricant", "lubricate", "lucid", "luckily", "luckiness", "luckless", "lucrative", "ludicrous", "lugged", "lukewarm", "lullaby", "lumber", "luminance", "luminous", "lumpiness", "lumping", "lumpish", "lunacy", "lunar", "lunchbox", "luncheon", "lunchroom", "lunchtime", "lung", "lurch", "lure", "luridness", "lurk", "lushly", "lushness", "luster", "lustfully", "lustily", "lustiness", "lustrous", "lusty", "luxurious", "luxury", "lying", "lyrically", "lyricism", "lyricist", "lyrics", "macarena", "macaroni", "macaw", "mace", "machine", "machinist", "magazine", "magenta", "maggot", "magical", "magician", "magma", "magnesium", "magnetic", "magnetism", "magnetize", "magnifier", "magnify", "magnitude", "magnolia", "mahogany", "maimed", "majestic", "majesty", "majorette", "majority", "makeover", "maker", "makeshift", "making", "malformed", "malt", "mama", "mammal", "mammary", "mammogram", "manager", "managing", "manatee", "mandarin", "mandate", "mandatory", "mandolin", "manger", "mangle", "mango", "mangy", "manhandle", "manhole", "manhood", "manhunt", "manicotti", "manicure", "manifesto", "manila", "mankind", "manlike", "manliness", "manly", "manmade", "manned", "mannish", "manor", "manpower", "mantis", "mantra", "manual", "many", "map", "marathon", "marauding", "marbled", "marbles", "marbling", "march", "mardi", "margarine", "margarita", "margin", "marigold", "marina", "marine", "marital", "maritime", "marlin", "marmalade", "maroon", "married", "marrow", "marry", "marshland", "marshy", "marsupial", "marvelous", "marxism", "mascot", "masculine", "mashed", "mashing", "massager", "masses", "massive", "mastiff", "matador", "matchbook", "matchbox", "matcher", "matching", "matchless", "material", "maternal", "maternity", "math", "mating", "matriarch", "matrimony", "matrix", "matron", "matted", "matter", "maturely", "maturing", "maturity", "mauve", "maverick", "maximize", "maximum", "maybe", "mayday", "mayflower", "moaner", "moaning", "mobile", "mobility", "mobilize", "mobster", "mocha", "mocker", "mockup", "modified", "modify", "modular", "modulator", "module", "moisten", "moistness", "moisture", "molar", "molasses", "mold", "molecular", "molecule", "molehill", "mollusk", "mom", "monastery", "monday", "monetary", "monetize", "moneybags", "moneyless", "moneywise", "mongoose", "mongrel", "monitor", "monkhood", "monogamy", "monogram", "monologue", "monopoly", "monorail", "monotone", "monotype", "monoxide", "monsieur", "monsoon", "monstrous", "monthly", "monument", "moocher", "moodiness", "moody", "mooing", "moonbeam", "mooned", "moonlight", "moonlike", "moonlit", "moonrise", "moonscape", "moonshine", "moonstone", "moonwalk", "mop", "morale", "morality", "morally", "morbidity", "morbidly", "morphine", "morphing", "morse", "mortality", "mortally", "mortician", "mortified", "mortify", "mortuary", "mosaic", "mossy", "most", "mothball", "mothproof", "motion", "motivate", "motivator", "motive", "motocross", "motor", "motto", "mountable", "mountain", "mounted", "mounting", "mourner", "mournful", "mouse", "mousiness", "moustache", "mousy", "mouth", "movable", "move", "movie", "moving", "mower", "mowing", "much", "muck", "mud", "mug", "mulberry", "mulch", "mule", "mulled", "mullets", "multiple", "multiply", "multitask", "multitude", "mumble", "mumbling", "mumbo", "mummified", "mummify", "mummy", "mumps", "munchkin", "mundane", "municipal", "muppet", "mural", "murkiness", "murky", "murmuring", "muscular", "museum", "mushily", "mushiness", "mushroom", "mushy", "music", "musket", "muskiness", "musky", "mustang", "mustard", "muster", "mustiness", "musty", "mutable", "mutate", "mutation", "mute", "mutilated", "mutilator", "mutiny", "mutt", "mutual", "muzzle", "myself", "myspace", "mystified", "mystify", "myth", "nacho", "nag", "nail", "name", "naming", "nanny", "nanometer", "nape", "napkin", "napped", "napping", "nappy", "narrow", "nastily", "nastiness", "national", "native", "nativity", "natural", "nature", "naturist", "nautical", "navigate", "navigator", "navy", "nearby", "nearest", "nearly", "nearness", "neatly", "neatness", "nebula", "nebulizer", "nectar", "negate", "negation", "negative", "neglector", "negligee", "negligent", "negotiate", "nemeses", "nemesis", "neon", "nephew", "nerd", "nervous", "nervy", "nest", "net", "neurology", "neuron", "neurosis", "neurotic", "neuter", "neutron", "never", "next", "nibble", "nickname", "nicotine", "niece", "nifty", "nimble", "nimbly", "nineteen", "ninetieth", "ninja", "nintendo", "ninth", "nuclear", "nuclei", "nucleus", "nugget", "nullify", "number", "numbing", "numbly", "numbness", "numeral", "numerate", "numerator", "numeric", "numerous", "nuptials", "nursery", "nursing", "nurture", "nutcase", "nutlike", "nutmeg", "nutrient", "nutshell", "nuttiness", "nutty", "nuzzle", "nylon", "oaf", "oak", "oasis", "oat", "obedience", "obedient", "obituary", "object", "obligate", "obliged", "oblivion", "oblivious", "oblong", "obnoxious", "oboe", "obscure", "obscurity", "observant", "observer", "observing", "obsessed", "obsession", "obsessive", "obsolete", "obstacle", "obstinate", "obstruct", "obtain", "obtrusive", "obtuse", "obvious", "occultist", "occupancy", "occupant", "occupier", "occupy", "ocean", "ocelot", "octagon", "octane", "october", "octopus", "ogle", "oil", "oink", "ointment", "okay", "old", "olive", "olympics", "omega", "omen", "ominous", "omission", "omit", "omnivore", "onboard", "oncoming", "ongoing", "onion", "online", "onlooker", "only", "onscreen", "onset", "onshore", "onslaught", "onstage", "onto", "onward", "onyx", "oops", "ooze", "oozy", "opacity", "opal", "open", "operable", "operate", "operating", "operation", "operative", "operator", "opium", "opossum", "opponent", "oppose", "opposing", "opposite", "oppressed", "oppressor", "opt", "opulently", "osmosis", "other", "otter", "ouch", "ought", "ounce", "outage", "outback", "outbid", "outboard", "outbound", "outbreak", "outburst", "outcast", "outclass", "outcome", "outdated", "outdoors", "outer", "outfield", "outfit", "outflank", "outgoing", "outgrow", "outhouse", "outing", "outlast", "outlet", "outline", "outlook", "outlying", "outmatch", "outmost", "outnumber", "outplayed", "outpost", "outpour", "output", "outrage", "outrank", "outreach", "outright", "outscore", "outsell", "outshine", "outshoot", "outsider", "outskirts", "outsmart", "outsource", "outspoken", "outtakes", "outthink", "outward", "outweigh", "outwit", "oval", "ovary", "oven", "overact", "overall", "overarch", "overbid", "overbill", "overbite", "overblown", "overboard", "overbook", "overbuilt", "overcast", "overcoat", "overcome", "overcook", "overcrowd", "overdraft", "overdrawn", "overdress", "overdrive", "overdue", "overeager", "overeater", "overexert", "overfed", "overfeed", "overfill", "overflow", "overfull", "overgrown", "overhand", "overhang", "overhaul", "overhead", "overhear", "overheat", "overhung", "overjoyed", "overkill", "overlabor", "overlaid", "overlap", "overlay", "overload", "overlook", "overlord", "overlying", "overnight", "overpass", "overpay", "overplant", "overplay", "overpower", "overprice", "overrate", "overreach", "overreact", "override", "overripe", "overrule", "overrun", "overshoot", "overshot", "oversight", "oversized", "oversleep", "oversold", "overspend", "overstate", "overstay", "overstep", "overstock", "overstuff", "oversweet", "overtake", "overthrow", "overtime", "overtly", "overtone", "overture", "overturn", "overuse", "overvalue", "overview", "overwrite", "owl", "oxford", "oxidant", "oxidation", "oxidize", "oxidizing", "oxygen", "oxymoron", "oyster", "ozone", "paced", "pacemaker", "pacific", "pacifier", "pacifism", "pacifist", "pacify", "padded", "padding", "paddle", "paddling", "padlock", "pagan", "pager", "paging", "pajamas", "palace", "palatable", "palm", "palpable", "palpitate", "paltry", "pampered", "pamperer", "pampers", "pamphlet", "panama", "pancake", "pancreas", "panda", "pandemic", "pang", "panhandle", "panic", "panning", "panorama", "panoramic", "panther", "pantomime", "pantry", "pants", "pantyhose", "paparazzi", "papaya", "paper", "paprika", "papyrus", "parabola", "parachute", "parade", "paradox", "paragraph", "parakeet", "paralegal", "paralyses", "paralysis", "paralyze", "paramedic", "parameter", "paramount", "parasail", "parasite", "parasitic", "parcel", "parched", "parchment", "pardon", "parish", "parka", "parking", "parkway", "parlor", "parmesan", "parole", "parrot", "parsley", "parsnip", "partake", "parted", "parting", "partition", "partly", "partner", "partridge", "party", "passable", "passably", "passage", "passcode", "passenger", "passerby", "passing", "passion", "passive", "passivism", "passover", "passport", "password", "pasta", "pasted", "pastel", "pastime", "pastor", "pastrami", "pasture", "pasty", "patchwork", "patchy", "paternal", "paternity", "path", "patience", "patient", "patio", "patriarch", "patriot", "patrol", "patronage", "patronize", "pauper", "pavement", "paver", "pavestone", "pavilion", "paving", "pawing", "payable", "payback", "paycheck", "payday", "payee", "payer", "paying", "payment", "payphone", "payroll", "pebble", "pebbly", "pecan", "pectin", "peculiar", "peddling", "pediatric", "pedicure", "pedigree", "pedometer", "pegboard", "pelican", "pellet", "pelt", "pelvis", "penalize", "penalty", "pencil", "pendant", "pending", "penholder", "penknife", "pennant", "penniless", "penny", "penpal", "pension", "pentagon", "pentagram", "pep", "perceive", "percent", "perch", "percolate", "perennial", "perfected", "perfectly", "perfume", "periscope", "perish", "perjurer", "perjury", "perkiness", "perky", "perm", "peroxide", "perpetual", "perplexed", "persecute", "persevere", "persuaded", "persuader", "pesky", "peso", "pessimism", "pessimist", "pester", "pesticide", "petal", "petite", "petition", "petri", "petroleum", "petted", "petticoat", "pettiness", "petty", "petunia", "phantom", "phobia", "phoenix", "phonebook", "phoney", "phonics", "phoniness", "phony", "phosphate", "photo", "phrase", "phrasing", "placard", "placate", "placidly", "plank", "planner", "plant", "plasma", "plaster", "plastic", "plated", "platform", "plating", "platinum", "platonic", "platter", "platypus", "plausible", "plausibly", "playable", "playback", "player", "playful", "playgroup", "playhouse", "playing", "playlist", "playmaker", "playmate", "playoff", "playpen", "playroom", "playset", "plaything", "playtime", "plaza", "pleading", "pleat", "pledge", "plentiful", "plenty", "plethora", "plexiglas", "pliable", "plod", "plop", "plot", "plow", "ploy", "pluck", "plug", "plunder", "plunging", "plural", "plus", "plutonium", "plywood", "poach", "pod", "poem", "poet", "pogo", "pointed", "pointer", "pointing", "pointless", "pointy", "poise", "poison", "poker", "poking", "polar", "police", "policy", "polio", "polish", "politely", "polka", "polo", "polyester", "polygon", "polygraph", "polymer", "poncho", "pond", "pony", "popcorn", "pope", "poplar", "popper", "poppy", "popsicle", "populace", "popular", "populate", "porcupine", "pork", "porous", "porridge", "portable", "portal", "portfolio", "porthole", "portion", "portly", "portside", "poser", "posh", "posing", "possible", "possibly", "possum", "postage", "postal", "postbox", "postcard", "posted", "poster", "posting", "postnasal", "posture", "postwar", "pouch", "pounce", "pouncing", "pound", "pouring", "pout", "powdered", "powdering", "powdery", "power", "powwow", "pox", "praising", "prance", "prancing", "pranker", "prankish", "prankster", "prayer", "praying", "preacher", "preaching", "preachy", "preamble", "precinct", "precise", "precision", "precook", "precut", "predator", "predefine", "predict", "preface", "prefix", "preflight", "preformed", "pregame", "pregnancy", "pregnant", "preheated", "prelaunch", "prelaw", "prelude", "premiere", "premises", "premium", "prenatal", "preoccupy", "preorder", "prepaid", "prepay", "preplan", "preppy", "preschool", "prescribe", "preseason", "preset", "preshow", "president", "presoak", "press", "presume", "presuming", "preteen", "pretended", "pretender", "pretense", "pretext", "pretty", "pretzel", "prevail", "prevalent", "prevent", "preview", "previous", "prewar", "prewashed", "prideful", "pried", "primal", "primarily", "primary", "primate", "primer", "primp", "princess", "print", "prior", "prism", "prison", "prissy", "pristine", "privacy", "private", "privatize", "prize", "proactive", "probable", "probably", "probation", "probe", "probing", "probiotic", "problem", "procedure", "process", "proclaim", "procreate", "procurer", "prodigal", "prodigy", "produce", "product", "profane", "profanity", "professed", "professor", "profile", "profound", "profusely", "progeny", "prognosis", "program", "progress", "projector", "prologue", "prolonged", "promenade", "prominent", "promoter", "promotion", "prompter", "promptly", "prone", "prong", "pronounce", "pronto", "proofing", "proofread", "proofs", "propeller", "properly", "property", "proponent", "proposal", "propose", "props", "prorate", "protector", "protegee", "proton", "prototype", "protozoan", "protract", "protrude", "proud", "provable", "proved", "proven", "provided", "provider", "providing", "province", "proving", "provoke", "provoking", "provolone", "prowess", "prowler", "prowling", "proximity", "proxy", "prozac", "prude", "prudishly", "prune", "pruning", "pry", "psychic", "public", "publisher", "pucker", "pueblo", "pug", "pull", "pulmonary", "pulp", "pulsate", "pulse", "pulverize", "puma", "pumice", "pummel", "punch", "punctual", "punctuate", "punctured", "pungent", "punisher", "punk", "pupil", "puppet", "puppy", "purchase", "pureblood", "purebred", "purely", "pureness", "purgatory", "purge", "purging", "purifier", "purify", "purist", "puritan", "purity", "purple", "purplish", "purposely", "purr", "purse", "pursuable", "pursuant", "pursuit", "purveyor", "pushcart", "pushchair", "pusher", "pushiness", "pushing", "pushover", "pushpin", "pushup", "pushy", "putdown", "putt", "puzzle", "puzzling", "pyramid", "pyromania", "python", "quack", "quadrant", "quail", "quaintly", "quake", "quaking", "qualified", "qualifier", "qualify", "quality", "qualm", "quantum", "quarrel", "quarry", "quartered", "quarterly", "quarters", "quartet", "quench", "query", "quicken", "quickly", "quickness", "quicksand", "quickstep", "quiet", "quill", "quilt", "quintet", "quintuple", "quirk", "quit", "quiver", "quizzical", "quotable", "quotation", "quote", "rabid", "race", "racing", "racism", "rack", "racoon", "radar", "radial", "radiance", "radiantly", "radiated", "radiation", "radiator", "radio", "radish", "raffle", "raft", "rage", "ragged", "raging", "ragweed", "raider", "railcar", "railing", "railroad", "railway", "raisin", "rake", "raking", "rally", "ramble", "rambling", "ramp", "ramrod", "ranch", "rancidity", "random", "ranged", "ranger", "ranging", "ranked", "ranking", "ransack", "ranting", "rants", "rare", "rarity", "rascal", "rash", "rasping", "ravage", "raven", "ravine", "raving", "ravioli", "ravishing", "reabsorb", "reach", "reacquire", "reaction", "reactive", "reactor", "reaffirm", "ream", "reanalyze", "reappear", "reapply", "reappoint", "reapprove", "rearrange", "rearview", "reason", "reassign", "reassure", "reattach", "reawake", "rebalance", "rebate", "rebel", "rebirth", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuilt", "reburial", "rebuttal", "recall", "recant", "recapture", "recast", "recede", "recent", "recess", "recharger", "recipient", "recital", "recite", "reckless", "reclaim", "recliner", "reclining", "recluse", "reclusive", "recognize", "recoil", "recollect", "recolor", "reconcile", "reconfirm", "reconvene", "recopy", "record", "recount", "recoup", "recovery", "recreate", "rectal", "rectangle", "rectified", "rectify", "recycled", "recycler", "recycling", "reemerge", "reenact", "reenter", "reentry", "reexamine", "referable", "referee", "reference", "refill", "refinance", "refined", "refinery", "refining", "refinish", "reflected", "reflector", "reflex", "reflux", "refocus", "refold", "reforest", "reformat", "reformed", "reformer", "reformist", "refract", "refrain", "refreeze", "refresh", "refried", "refueling", "refund", "refurbish", "refurnish", "refusal", "refuse", "refusing", "refutable", "refute", "regain", "regalia", "regally", "reggae", "regime", "region", "register", "registrar", "registry", "regress", "regretful", "regroup", "regular", "regulate", "regulator", "rehab", "reheat", "rehire", "rehydrate", "reimburse", "reissue", "reiterate", "rejoice", "rejoicing", "rejoin", "rekindle", "relapse", "relapsing", "relatable", "related", "relation", "relative", "relax", "relay", "relearn", "release", "relenting", "reliable", "reliably", "reliance", "reliant", "relic", "relieve", "relieving", "relight", "relish", "relive", "reload", "relocate", "relock", "reluctant", "rely", "remake", "remark", "remarry", "rematch", "remedial", "remedy", "remember", "reminder", "remindful", "remission", "remix", "remnant", "remodeler", "remold", "remorse", "remote", "removable", "removal", "removed", "remover", "removing", "rename", "renderer", "rendering", "rendition", "renegade", "renewable", "renewably", "renewal", "renewed", "renounce", "renovate", "renovator", "rentable", "rental", "rented", "renter", "reoccupy", "reoccur", "reopen", "reorder", "repackage", "repacking", "repaint", "repair", "repave", "repaying", "repayment", "repeal", "repeated", "repeater", "repent", "rephrase", "replace", "replay", "replica", "reply", "reporter", "repose", "repossess", "repost", "repressed", "reprimand", "reprint", "reprise", "reproach", "reprocess", "reproduce", "reprogram", "reps", "reptile", "reptilian", "repugnant", "repulsion", "repulsive", "repurpose", "reputable", "reputably", "request", "require", "requisite", "reroute", "rerun", "resale", "resample", "rescuer", "reseal", "research", "reselect", "reseller", "resemble", "resend", "resent", "reset", "reshape", "reshoot", "reshuffle", "residence", "residency", "resident", "residual", "residue", "resigned", "resilient", "resistant", "resisting", "resize", "resolute", "resolved", "resonant", "resonate", "resort", "resource", "respect", "resubmit", "result", "resume", "resupply", "resurface", "resurrect", "retail", "retainer", "retaining", "retake", "retaliate", "retention", "rethink", "retinal", "retired", "retiree", "retiring", "retold", "retool", "retorted", "retouch", "retrace", "retract", "retrain", "retread", "retreat", "retrial", "retrieval", "retriever", "retry", "return", "retying", "retype", "reunion", "reunite", "reusable", "reuse", "reveal", "reveler", "revenge", "revenue", "reverb", "revered", "reverence", "reverend", "reversal", "reverse", "reversing", "reversion", "revert", "revisable", "revise", "revision", "revisit", "revivable", "revival", "reviver", "reviving", "revocable", "revoke", "revolt", "revolver", "revolving", "reward", "rewash", "rewind", "rewire", "reword", "rework", "rewrap", "rewrite", "rhyme", "ribbon", "ribcage", "rice", "riches", "richly", "richness", "rickety", "ricotta", "riddance", "ridden", "ride", "riding", "rifling", "rift", "rigging", "rigid", "rigor", "rimless", "rimmed", "rind", "rink", "rinse", "rinsing", "riot", "ripcord", "ripeness", "ripening", "ripping", "ripple", "rippling", "riptide", "rise", "rising", "risk", "risotto", "ritalin", "ritzy", "rival", "riverbank", "riverbed", "riverboat", "riverside", "riveter", "riveting", "roamer", "roaming", "roast", "robbing", "robe", "robin", "robotics", "robust", "rockband", "rocker", "rocket", "rockfish", "rockiness", "rocking", "rocklike", "rockslide", "rockstar", "rocky", "rogue", "roman", "romp", "rope", "roping", "roster", "rosy", "rotten", "rotting", "rotunda", "roulette", "rounding", "roundish", "roundness", "roundup", "roundworm", "routine", "routing", "rover", "roving", "royal", "rubbed", "rubber", "rubbing", "rubble", "rubdown", "ruby", "ruckus", "rudder", "rug", "ruined", "rule", "rumble", "rumbling", "rummage", "rumor", "runaround", "rundown", "runner", "running", "runny", "runt", "runway", "rupture", "rural", "ruse", "rush", "rust", "rut", "sabbath", "sabotage", "sacrament", "sacred", "sacrifice", "sadden", "saddlebag", "saddled", "saddling", "sadly", "sadness", "safari", "safeguard", "safehouse", "safely", "safeness", "saffron", "saga", "sage", "sagging", "saggy", "said", "saint", "sake", "salad", "salami", "salaried", "salary", "saline", "salon", "saloon", "salsa", "salt", "salutary", "salute", "salvage", "salvaging", "salvation", "same", "sample", "sampling", "sanction", "sanctity", "sanctuary", "sandal", "sandbag", "sandbank", "sandbar", "sandblast", "sandbox", "sanded", "sandfish", "sanding", "sandlot", "sandpaper", "sandpit", "sandstone", "sandstorm", "sandworm", "sandy", "sanitary", "sanitizer", "sank", "santa", "sapling", "sappiness", "sappy", "sarcasm", "sarcastic", "sardine", "sash", "sasquatch", "sassy", "satchel", "satiable", "satin", "satirical", "satisfied", "satisfy", "saturate", "saturday", "sauciness", "saucy", "sauna", "savage", "savanna", "saved", "savings", "savior", "savor", "saxophone", "say", "scabbed", "scabby", "scalded", "scalding", "scale", "scaling", "scallion", "scallop", "scalping", "scam", "scandal", "scanner", "scanning", "scant", "scapegoat", "scarce", "scarcity", "scarecrow", "scared", "scarf", "scarily", "scariness", "scarring", "scary", "scavenger", "scenic", "schedule", "schematic", "scheme", "scheming", "schilling", "schnapps", "scholar", "science", "scientist", "scion", "scoff", "scolding", "scone", "scoop", "scooter", "scope", "scorch", "scorebook", "scorecard", "scored", "scoreless", "scorer", "scoring", "scorn", "scorpion", "scotch", "scoundrel", "scoured", "scouring", "scouting", "scouts", "scowling", "scrabble", "scraggly", "scrambled", "scrambler", "scrap", "scratch", "scrawny", "screen", "scribble", "scribe", "scribing", "scrimmage", "script", "scroll", "scrooge", "scrounger", "scrubbed", "scrubber", "scruffy", "scrunch", "scrutiny", "scuba", "scuff", "sculptor", "sculpture", "scurvy", "scuttle", "secluded", "secluding", "seclusion", "second", "secrecy", "secret", "sectional", "sector", "secular", "securely", "security", "sedan", "sedate", "sedation", "sedative", "sediment", "seduce", "seducing", "segment", "seismic", "seizing", "seldom", "selected", "selection", "selective", "selector", "self", "seltzer", "semantic", "semester", "semicolon", "semifinal", "seminar", "semisoft", "semisweet", "senate", "senator", "send", "senior", "senorita", "sensation", "sensitive", "sensitize", "sensually", "sensuous", "sepia", "september", "septic", "septum", "sequel", "sequence", "sequester", "series", "sermon", "serotonin", "serpent", "serrated", "serve", "service", "serving", "sesame", "sessions", "setback", "setting", "settle", "settling", "setup", "sevenfold", "seventeen", "seventh", "seventy", "severity", "shabby", "shack", "shaded", "shadily", "shadiness", "shading", "shadow", "shady", "shaft", "shakable", "shakily", "shakiness", "shaking", "shaky", "shale", "shallot", "shallow", "shame", "shampoo", "shamrock", "shank", "shanty", "shape", "shaping", "share", "sharpener", "sharper", "sharpie", "sharply", "sharpness", "shawl", "sheath", "shed", "sheep", "sheet", "shelf", "shell", "shelter", "shelve", "shelving", "sherry", "shield", "shifter", "shifting", "shiftless", "shifty", "shimmer", "shimmy", "shindig", "shine", "shingle", "shininess", "shining", "shiny", "ship", "shirt", "shivering", "shock", "shone", "shoplift", "shopper", "shopping", "shoptalk", "shore", "shortage", "shortcake", "shortcut", "shorten", "shorter", "shorthand", "shortlist", "shortly", "shortness", "shorts", "shortwave", "shorty", "shout", "shove", "showbiz", "showcase", "showdown", "shower", "showgirl", "showing", "showman", "shown", "showoff", "showpiece", "showplace", "showroom", "showy", "shrank", "shrapnel", "shredder", "shredding", "shrewdly", "shriek", "shrill", "shrimp", "shrine", "shrink", "shrivel", "shrouded", "shrubbery", "shrubs", "shrug", "shrunk", "shucking", "shudder", "shuffle", "shuffling", "shun", "shush", "shut", "shy", "siamese", "siberian", "sibling", "siding", "sierra", "siesta", "sift", "sighing", "silenced", "silencer", "silent", "silica", "silicon", "silk", "silliness", "silly", "silo", "silt", "silver", "similarly", "simile", "simmering", "simple", "simplify", "simply", "sincere", "sincerity", "singer", "singing", "single", "singular", "sinister", "sinless", "sinner", "sinuous", "sip", "siren", "sister", "sitcom", "sitter", "sitting", "situated", "situation", "sixfold", "sixteen", "sixth", "sixties", "sixtieth", "sixtyfold", "sizable", "sizably", "size", "sizing", "sizzle", "sizzling", "skater", "skating", "skedaddle", "skeletal", "skeleton", "skeptic", "sketch", "skewed", "skewer", "skid", "skied", "skier", "skies", "skiing", "skilled", "skillet", "skillful", "skimmed", "skimmer", "skimming", "skimpily", "skincare", "skinhead", "skinless", "skinning", "skinny", "skintight", "skipper", "skipping", "skirmish", "skirt", "skittle", "skydiver", "skylight", "skyline", "skype", "skyrocket", "skyward", "slab", "slacked", "slacker", "slacking", "slackness", "slacks", "slain", "slam", "slander", "slang", "slapping", "slapstick", "slashed", "slashing", "slate", "slather", "slaw", "sled", "sleek", "sleep", "sleet", "sleeve", "slept", "sliceable", "sliced", "slicer", "slicing", "slick", "slider", "slideshow", "sliding", "slighted", "slighting", "slightly", "slimness", "slimy", "slinging", "slingshot", "slinky", "slip", "slit", "sliver", "slobbery", "slogan", "sloped", "sloping", "sloppily", "sloppy", "slot", "slouching", "slouchy", "sludge", "slug", "slum", "slurp", "slush", "sly", "small", "smartly", "smartness", "smasher", "smashing", "smashup", "smell", "smelting", "smile", "smilingly", "smirk", "smite", "smith", "smitten", "smock", "smog", "smoked", "smokeless", "smokiness", "smoking", "smoky", "smolder", "smooth", "smother", "smudge", "smudgy", "smuggler", "smuggling", "smugly", "smugness", "snack", "snagged", "snaking", "snap", "snare", "snarl", "snazzy", "sneak", "sneer", "sneeze", "sneezing", "snide", "sniff", "snippet", "snipping", "snitch", "snooper", "snooze", "snore", "snoring", "snorkel", "snort", "snout", "snowbird", "snowboard", "snowbound", "snowcap", "snowdrift", "snowdrop", "snowfall", "snowfield", "snowflake", "snowiness", "snowless", "snowman", "snowplow", "snowshoe", "snowstorm", "snowsuit", "snowy", "snub", "snuff", "snuggle", "snugly", "snugness", "speak", "spearfish", "spearhead", "spearman", "spearmint", "species", "specimen", "specked", "speckled", "specks", "spectacle", "spectator", "spectrum", "speculate", "speech", "speed", "spellbind", "speller", "spelling", "spendable", "spender", "spending", "spent", "spew", "sphere", "spherical", "sphinx", "spider", "spied", "spiffy", "spill", "spilt", "spinach", "spinal", "spindle", "spinner", "spinning", "spinout", "spinster", "spiny", "spiral", "spirited", "spiritism", "spirits", "spiritual", "splashed", "splashing", "splashy", "splatter", "spleen", "splendid", "splendor", "splice", "splicing", "splinter", "splotchy", "splurge", "spoilage", "spoiled", "spoiler", "spoiling", "spoils", "spoken", "spokesman", "sponge", "spongy", "sponsor", "spoof", "spookily", "spooky", "spool", "spoon", "spore", "sporting", "sports", "sporty", "spotless", "spotlight", "spotted", "spotter", "spotting", "spotty", "spousal", "spouse", "spout", "sprain", "sprang", "sprawl", "spray", "spree", "sprig", "spring", "sprinkled", "sprinkler", "sprint", "sprite", "sprout", "spruce", "sprung", "spry", "spud", "spur", "sputter", "spyglass", "squabble", "squad", "squall", "squander", "squash", "squatted", "squatter", "squatting", "squeak", "squealer", "squealing", "squeamish", "squeegee", "squeeze", "squeezing", "squid", "squiggle", "squiggly", "squint", "squire", "squirt", "squishier", "squishy", "stability", "stabilize", "stable", "stack", "stadium", "staff", "stage", "staging", "stagnant", "stagnate", "stainable", "stained", "staining", "stainless", "stalemate", "staleness", "stalling", "stallion", "stamina", "stammer", "stamp", "stand", "stank", "staple", "stapling", "starboard", "starch", "stardom", "stardust", "starfish", "stargazer", "staring", "stark", "starless", "starlet", "starlight", "starlit", "starring", "starry", "starship", "starter", "starting", "startle", "startling", "startup", "starved", "starving", "stash", "state", "static", "statistic", "statue", "stature", "status", "statute", "statutory", "staunch", "stays", "steadfast", "steadier", "steadily", "steadying", "steam", "steed", "steep", "steerable", "steering", "steersman", "stegosaur", "stellar", "stem", "stench", "stencil", "step", "stereo", "sterile", "sterility", "sterilize", "sterling", "sternness", "sternum", "stew", "stick", "stiffen", "stiffly", "stiffness", "stifle", "stifling", "stillness", "stilt", "stimulant", "stimulate", "stimuli", "stimulus", "stinger", "stingily", "stinging", "stingray", "stingy", "stinking", "stinky", "stipend", "stipulate", "stir", "stitch", "stock", "stoic", "stoke", "stole", "stomp", "stonewall", "stoneware", "stonework", "stoning", "stony", "stood", "stooge", "stool", "stoop", "stoplight", "stoppable", "stoppage", "stopped", "stopper", "stopping", "stopwatch", "storable", "storage", "storeroom", "storewide", "storm", "stout", "stove", "stowaway", "stowing", "straddle", "straggler", "strained", "strainer", "straining", "strangely", "stranger", "strangle", "strategic", "strategy", "stratus", "straw", "stray", "streak", "stream", "street", "strength", "strenuous", "strep", "stress", "stretch", "strewn", "stricken", "strict", "stride", "strife", "strike", "striking", "strive", "striving", "strobe", "strode", "stroller", "strongbox", "strongly", "strongman", "struck", "structure", "strudel", "struggle", "strum", "strung", "strut", "stubbed", "stubble", "stubbly", "stubborn", "stucco", "stuck", "student", "studied", "studio", "study", "stuffed", "stuffing", "stuffy", "stumble", "stumbling", "stump", "stung", "stunned", "stunner", "stunning", "stunt", "stupor", "sturdily", "sturdy", "styling", "stylishly", "stylist", "stylized", "stylus", "suave", "subarctic", "subatomic", "subdivide", "subdued", "subduing", "subfloor", "subgroup", "subheader", "subject", "sublease", "sublet", "sublevel", "sublime", "submarine", "submerge", "submersed", "submitter", "subpanel", "subpar", "subplot", "subprime", "subscribe", "subscript", "subsector", "subside", "subsiding", "subsidize", "subsidy", "subsoil", "subsonic", "substance", "subsystem", "subtext", "subtitle", "subtly", "subtotal", "subtract", "subtype", "suburb", "subway", "subwoofer", "subzero", "succulent", "such", "suction", "sudden", "sudoku", "suds", "sufferer", "suffering", "suffice", "suffix", "suffocate", "suffrage", "sugar", "suggest", "suing", "suitable", "suitably", "suitcase", "suitor", "sulfate", "sulfide", "sulfite", "sulfur", "sulk", "sullen", "sulphate", "sulphuric", "sultry", "superbowl", "superglue", "superhero", "superior", "superjet", "superman", "supermom", "supernova", "supervise", "supper", "supplier", "supply", "support", "supremacy", "supreme", "surcharge", "surely", "sureness", "surface", "surfacing", "surfboard", "surfer", "surgery", "surgical", "surging", "surname", "surpass", "surplus", "surprise", "surreal", "surrender", "surrogate", "surround", "survey", "survival", "survive", "surviving", "survivor", "sushi", "suspect", "suspend", "suspense", "sustained", "sustainer", "swab", "swaddling", "swagger", "swampland", "swan", "swapping", "swarm", "sway", "swear", "sweat", "sweep", "swell", "swept", "swerve", "swifter", "swiftly", "swiftness", "swimmable", "swimmer", "swimming", "swimsuit", "swimwear", "swinger", "swinging", "swipe", "swirl", "switch", "swivel", "swizzle", "swooned", "swoop", "swoosh", "swore", "sworn", "swung", "sycamore", "sympathy", "symphonic", "symphony", "symptom", "synapse", "syndrome", "synergy", "synopses", "synopsis", "synthesis", "synthetic", "syrup", "system", "t-shirt", "tabasco", "tabby", "tableful", "tables", "tablet", "tableware", "tabloid", "tackiness", "tacking", "tackle", "tackling", "tacky", "taco", "tactful", "tactical", "tactics", "tactile", "tactless", "tadpole", "taekwondo", "tag", "tainted", "take", "taking", "talcum", "talisman", "tall", "talon", "tamale", "tameness", "tamer", "tamper", "tank", "tanned", "tannery", "tanning", "tantrum", "tapeless", "tapered", "tapering", "tapestry", "tapioca", "tapping", "taps", "tarantula", "target", "tarmac", "tarnish", "tarot", "tartar", "tartly", "tartness", "task", "tassel", "taste", "tastiness", "tasting", "tasty", "tattered", "tattle", "tattling", "tattoo", "taunt", "tavern", "thank", "that", "thaw", "theater", "theatrics", "thee", "theft", "theme", "theology", "theorize", "thermal", "thermos", "thesaurus", "these", "thesis", "thespian", "thicken", "thicket", "thickness", "thieving", "thievish", "thigh", "thimble", "thing", "think", "thinly", "thinner", "thinness", "thinning", "thirstily", "thirsting", "thirsty", "thirteen", "thirty", "thong", "thorn", "those", "thousand", "thrash", "thread", "threaten", "threefold", "thrift", "thrill", "thrive", "thriving", "throat", "throbbing", "throng", "throttle", "throwaway", "throwback", "thrower", "throwing", "thud", "thumb", "thumping", "thursday", "thus", "thwarting", "thyself", "tiara", "tibia", "tidal", "tidbit", "tidiness", "tidings", "tidy", "tiger", "tighten", "tightly", "tightness", "tightrope", "tightwad", "tigress", "tile", "tiling", "till", "tilt", "timid", "timing", "timothy", "tinderbox", "tinfoil", "tingle", "tingling", "tingly", "tinker", "tinkling", "tinsel", "tinsmith", "tint", "tinwork", "tiny", "tipoff", "tipped", "tipper", "tipping", "tiptoeing", "tiptop", "tiring", "tissue", "trace", "tracing", "track", "traction", "tractor", "trade", "trading", "tradition", "traffic", "tragedy", "trailing", "trailside", "train", "traitor", "trance", "tranquil", "transfer", "transform", "translate", "transpire", "transport", "transpose", "trapdoor", "trapeze", "trapezoid", "trapped", "trapper", "trapping", "traps", "trash", "travel", "traverse", "travesty", "tray", "treachery", "treading", "treadmill", "treason", "treat", "treble", "tree", "trekker", "tremble", "trembling", "tremor", "trench", "trend", "trespass", "triage", "trial", "triangle", "tribesman", "tribunal", "tribune", "tributary", "tribute", "triceps", "trickery", "trickily", "tricking", "trickle", "trickster", "tricky", "tricolor", "tricycle", "trident", "tried", "trifle", "trifocals", "trillion", "trilogy", "trimester", "trimmer", "trimming", "trimness", "trinity", "trio", "tripod", "tripping", "triumph", "trivial", "trodden", "trolling", "trombone", "trophy", "tropical", "tropics", "trouble", "troubling", "trough", "trousers", "trout", "trowel", "truce", "truck", "truffle", "trump", "trunks", "trustable", "trustee", "trustful", "trusting", "trustless", "truth", "try", "tubby", "tubeless", "tubular", "tucking", "tuesday", "tug", "tuition", "tulip", "tumble", "tumbling", "tummy", "turban", "turbine", "turbofan", "turbojet", "turbulent", "turf", "turkey", "turmoil", "turret", "turtle", "tusk", "tutor", "tutu", "tux", "tweak", "tweed", "tweet", "tweezers", "twelve", "twentieth", "twenty", "twerp", "twice", "twiddle", "twiddling", "twig", "twilight", "twine", "twins", "twirl", "twistable", "twisted", "twister", "twisting", "twisty", "twitch", "twitter", "tycoon", "tying", "tyke", "udder", "ultimate", "ultimatum", "ultra", "umbilical", "umbrella", "umpire", "unabashed", "unable", "unadorned", "unadvised", "unafraid", "unaired", "unaligned", "unaltered", "unarmored", "unashamed", "unaudited", "unawake", "unaware", "unbaked", "unbalance", "unbeaten", "unbend", "unbent", "unbiased", "unbitten", "unblended", "unblessed", "unblock", "unbolted", "unbounded", "unboxed", "unbraided", "unbridle", "unbroken", "unbuckled", "unbundle", "unburned", "unbutton", "uncanny", "uncapped", "uncaring", "uncertain", "unchain", "unchanged", "uncharted", "uncheck", "uncivil", "unclad", "unclaimed", "unclamped", "unclasp", "uncle", "unclip", "uncloak", "unclog", "unclothed", "uncoated", "uncoiled", "uncolored", "uncombed", "uncommon", "uncooked", "uncork", "uncorrupt", "uncounted", "uncouple", "uncouth", "uncover", "uncross", "uncrown", "uncrushed", "uncured", "uncurious", "uncurled", "uncut", "undamaged", "undated", "undaunted", "undead", "undecided", "undefined", "underage", "underarm", "undercoat", "undercook", "undercut", "underdog", "underdone", "underfed", "underfeed", "underfoot", "undergo", "undergrad", "underhand", "underline", "underling", "undermine", "undermost", "underpaid", "underpass", "underpay", "underrate", "undertake", "undertone", "undertook", "undertow", "underuse", "underwear", "underwent", "underwire", "undesired", "undiluted", "undivided", "undocked", "undoing", "undone", "undrafted", "undress", "undrilled", "undusted", "undying", "unearned", "unearth", "unease", "uneasily", "uneasy", "uneatable", "uneaten", "unedited", "unelected", "unending", "unengaged", "unenvied", "unequal", "unethical", "uneven", "unexpired", "unexposed", "unfailing", "unfair", "unfasten", "unfazed", "unfeeling", "unfiled", "unfilled", "unfitted", "unfitting", "unfixable", "unfixed", "unflawed", "unfocused", "unfold", "unfounded", "unframed", "unfreeze", "unfrosted", "unfrozen", "unfunded", "unglazed", "ungloved", "unglue", "ungodly", "ungraded", "ungreased", "unguarded", "unguided", "unhappily", "unhappy", "unharmed", "unhealthy", "unheard", "unhearing", "unheated", "unhelpful", "unhidden", "unhinge", "unhitched", "unholy", "unhook", "unicorn", "unicycle", "unified", "unifier", "uniformed", "uniformly", "unify", "unimpeded", "uninjured", "uninstall", "uninsured", "uninvited", "union", "uniquely", "unisexual", "unison", "unissued", "unit", "universal", "universe", "unjustly", "unkempt", "unkind", "unknotted", "unknowing", "unknown", "unlaced", "unlatch", "unlawful", "unleaded", "unlearned", "unleash", "unless", "unleveled", "unlighted", "unlikable", "unlimited", "unlined", "unlinked", "unlisted", "unlit", "unlivable", "unloaded", "unloader", "unlocked", "unlocking", "unlovable", "unloved", "unlovely", "unloving", "unluckily", "unlucky", "unmade", "unmanaged", "unmanned", "unmapped", "unmarked", "unmasked", "unmasking", "unmatched", "unmindful", "unmixable", "unmixed", "unmolded", "unmoral", "unmovable", "unmoved", "unmoving", "unnamable", "unnamed", "unnatural", "unneeded", "unnerve", "unnerving", "unnoticed", "unopened", "unopposed", "unpack", "unpadded", "unpaid", "unpainted", "unpaired", "unpaved", "unpeeled", "unpicked", "unpiloted", "unpinned", "unplanned", "unplanted", "unpleased", "unpledged", "unplowed", "unplug", "unpopular", "unproven", "unquote", "unranked", "unrated", "unraveled", "unreached", "unread", "unreal", "unreeling", "unrefined", "unrelated", "unrented", "unrest", "unretired", "unrevised", "unrigged", "unripe", "unrivaled", "unroasted", "unrobed", "unroll", "unruffled", "unruly", "unrushed", "unsaddle", "unsafe", "unsaid", "unsalted", "unsaved", "unsavory", "unscathed", "unscented", "unscrew", "unsealed", "unseated", "unsecured", "unseeing", "unseemly", "unseen", "unselect", "unselfish", "unsent", "unsettled", "unshackle", "unshaken", "unshaved", "unshaven", "unsheathe", "unshipped", "unsightly", "unsigned", "unskilled", "unsliced", "unsmooth", "unsnap", "unsocial", "unsoiled", "unsold", "unsolved", "unsorted", "unspoiled", "unspoken", "unstable", "unstaffed", "unstamped", "unsteady", "unsterile", "unstirred", "unstitch", "unstopped", "unstuck", "unstuffed", "unstylish", "unsubtle", "unsubtly", "unsuited", "unsure", "unsworn", "untagged", "untainted", "untaken", "untamed", "untangled", "untapped", "untaxed", "unthawed", "unthread", "untidy", "untie", "until", "untimed", "untimely", "untitled", "untoasted", "untold", "untouched", "untracked", "untrained", "untreated", "untried", "untrimmed", "untrue", "untruth", "unturned", "untwist", "untying", "unusable", "unused", "unusual", "unvalued", "unvaried", "unvarying", "unveiled", "unveiling", "unvented", "unviable", "unvisited", "unvocal", "unwanted", "unwarlike", "unwary", "unwashed", "unwatched", "unweave", "unwed", "unwelcome", "unwell", "unwieldy", "unwilling", "unwind", "unwired", "unwitting", "unwomanly", "unworldly", "unworn", "unworried", "unworthy", "unwound", "unwoven", "unwrapped", "unwritten", "unzip", "upbeat", "upchuck", "upcoming", "upcountry", "update", "upfront", "upgrade", "upheaval", "upheld", "uphill", "uphold", "uplifted", "uplifting", "upload", "upon", "upper", "upright", "uprising", "upriver", "uproar", "uproot", "upscale", "upside", "upstage", "upstairs", "upstart", "upstate", "upstream", "upstroke", "upswing", "uptake", "uptight", "uptown", "upturned", "upward", "upwind", "uranium", "urban", "urchin", "urethane", "urgency", "urgent", "urging", "urologist", "urology", "usable", "usage", "useable", "used", "uselessly", "user", "usher", "usual", "utensil", "utility", "utilize", "utmost", "utopia", "utter", "vacancy", "vacant", "vacate", "vacation", "vagabond", "vagrancy", "vagrantly", "vaguely", "vagueness", "valiant", "valid", "valium", "valley", "valuables", "value", "vanilla", "vanish", "vanity", "vanquish", "vantage", "vaporizer", "variable", "variably", "varied", "variety", "various", "varmint", "varnish", "varsity", "varying", "vascular", "vaseline", "vastly", "vastness", "veal", "vegan", "veggie", "vehicular", "velcro", "velocity", "velvet", "vendetta", "vending", "vendor", "veneering", "vengeful", "venomous", "ventricle", "venture", "venue", "venus", "verbalize", "verbally", "verbose", "verdict", "verify", "verse", "version", "versus", "vertebrae", "vertical", "vertigo", "very", "vessel", "vest", "veteran", "veto", "vexingly", "viability", "viable", "vibes", "vice", "vicinity", "victory", "video", "viewable", "viewer", "viewing", "viewless", "viewpoint", "vigorous", "village", "villain", "vindicate", "vineyard", "vintage", "violate", "violation", "violator", "violet", "violin", "viper", "viral", "virtual", "virtuous", "virus", "visa", "viscosity", "viscous", "viselike", "visible", "visibly", "vision", "visiting", "visitor", "visor", "vista", "vitality", "vitalize", "vitally", "vitamins", "vivacious", "vividly", "vividness", "vixen", "vocalist", "vocalize", "vocally", "vocation", "voice", "voicing", "void", "volatile", "volley", "voltage", "volumes", "voter", "voting", "voucher", "vowed", "vowel", "voyage", "wackiness", "wad", "wafer", "waffle", "waged", "wager", "wages", "waggle", "wagon", "wake", "waking", "walk", "walmart", "walnut", "walrus", "waltz", "wand", "wannabe", "wanted", "wanting", "wasabi", "washable", "washbasin", "washboard", "washbowl", "washcloth", "washday", "washed", "washer", "washhouse", "washing", "washout", "washroom", "washstand", "washtub", "wasp", "wasting", "watch", "water", "waviness", "waving", "wavy", "whacking", "whacky", "wham", "wharf", "wheat", "whenever", "whiff", "whimsical", "whinny", "whiny", "whisking", "whoever", "whole", "whomever", "whoopee", "whooping", "whoops", "why", "wick", "widely", "widen", "widget", "widow", "width", "wieldable", "wielder", "wife", "wifi", "wikipedia", "wildcard", "wildcat", "wilder", "wildfire", "wildfowl", "wildland", "wildlife", "wildly", "wildness", "willed", "willfully", "willing", "willow", "willpower", "wilt", "wimp", "wince", "wincing", "wind", "wing", "winking", "winner", "winnings", "winter", "wipe", "wired", "wireless", "wiring", "wiry", "wisdom", "wise", "wish", "wisplike", "wispy", "wistful", "wizard", "wobble", "wobbling", "wobbly", "wok", "wolf", "wolverine", "womanhood", "womankind", "womanless", "womanlike", "womanly", "womb", "woof", "wooing", "wool", "woozy", "word", "work", "worried", "worrier", "worrisome", "worry", "worsening", "worshiper", "worst", "wound", "woven", "wow", "wrangle", "wrath", "wreath", "wreckage", "wrecker", "wrecking", "wrench", "wriggle", "wriggly", "wrinkle", "wrinkly", "wrist", "writing", "written", "wrongdoer", "wronged", "wrongful", "wrongly", "wrongness", "wrought", "xbox", "xerox", "yahoo", "yam", "yanking", "yapping", "yard", "yarn", "yeah", "yearbook", "yearling", "yearly", "yearning", "yeast", "yelling", "yelp", "yen", "yesterday", "yiddish", "yield", "yin", "yippee", "yo-yo", "yodel", "yoga", "yogurt", "yonder", "yoyo", "yummy", "zap", "zealous", "zebra", "zen", "zeppelin", "zero", "zestfully", "zesty", "zigzagged", "zipfile", "zipping", "zippy", "zips", "zit", "zodiac", "zombie", "zone", "zoning", "zookeeper", "zoologist", "zoology", "zoom"],
                he = a(31945),
                me = a(88837);
            var fe = function() {
                    var e = (0, i.useState)([]),
                        r = e[0],
                        a = e[1],
                        t = (0, i.useState)("password"),
                        l = t[0],
                        u = t[1],
                        c = (0, i.useState)(14),
                        d = c[0],
                        p = c[1],
                        g = (0, i.useState)(!0),
                        h = g[0],
                        m = g[1],
                        f = (0, i.useState)(!0),
                        y = f[0],
                        b = f[1],
                        v = (0, i.useState)(!0),
                        w = v[0],
                        k = v[1],
                        z = (0, i.useState)(!1),
                        C = z[0],
                        j = z[1],
                        E = (0, i.useState)(!1),
                        S = E[0],
                        P = E[1],
                        T = (0, i.useState)(!1),
                        A = T[0],
                        q = T[1],
                        R = (0, i.useState)(!1),
                        U = R[0],
                        O = R[1],
                        I = (0, i.useState)(!1),
                        _ = I[0],
                        M = I[1],
                        Z = (0, i.useRef)(0);
                    Z.current += 1, (0, i.useEffect)((function() {
                        "password" === l && p(14), "passphrase" === l && p(4)
                    }), [l]), (0, i.useEffect)((function() {
                        if ("password" === l) {
                            var e = ue().generate({
                                length: d,
                                numbers: w,
                                lowercase: y,
                                uppercase: h,
                                symbols: C
                            });
                            a(e.split(""))
                        }
                        if ("passphrase" === l) {
                            for (var r = "", t = []; t.length < d;) {
                                var n = Math.floor(7775 * Math.random()) + 1; - 1 === t.indexOf(n) && t.push(n)
                            }
                            if (t.map((function(e) {
                                    return r += (S ? (0, he.kC)(ge[e]) : ge[e]) + "-"
                                })), A) {
                                var i = Math.floor(10 * Math.random()),
                                    o = Math.ceil(Math.random() * d),
                                    s = (0, he.bt)(r, "-", o);
                                r = r.slice(0, s) + i + r.slice(s)
                            }
                            a(r.slice(0, -1).split(""))
                        }
                    }), [d, h, y, w, C, S, A, U, l]);
                    var N = r.join(""),
                        D = de()(N),
                        L = (D.score, D.score < 2 ? {
                            score: "very weak",
                            scoreColor: "#dc3545"
                        } : D.score < 3 ? {
                            score: "weak",
                            scoreColor: "#ffc107"
                        } : D.score < 4 ? {
                            score: "good",
                            scoreColor: "#17a2b8"
                        } : {
                            score: "strong",
                            scoreColor: "#175ddc"
                        }),
                        X = L.score,
                        F = L.scoreColor,
                        V = D.crack_times_display.offline_slow_hashing_1e4_per_second;
                    return (0, me.tZ)(n.Z, {
                        px: {
                            base: "0",
                            sm: "1",
                            md: "8"
                        },
                        w: {
                            base: "100%",
                            sm: "95%",
                            md: "85%"
                        },
                        children: (0, me.BX)(o.xu, {
                            p: {
                                base: "6",
                                md: "12"
                            },
                            bg: "white",
                            borderRadius: "md",
                            children: [(0, me.tZ)(o.X6, {
                                as: "h1",
                                fontSize: {
                                    base: "1.5rem",
                                    md: "2.25rem"
                                },
                                mb: "2",
                                children: "Password Generator"
                            }), (0, me.tZ)(o.xv, {
                                mb: "1rem",
                                fontSize: {
                                    base: "16px",
                                    md: "18px"
                                },
                                children: "Need a password? Try the Bitwarden Strong Password Generator. Generate secure, random passwords to stay safe online."
                            }), (0, me.BX)(o.kC, {
                                flexWrap: "wrap",
                                children: [(0, me.BX)(o.xu, {
                                    mb: "4",
                                    w: {
                                        base: "100%",
                                        md: "49%"
                                    },
                                    children: [(0, me.BX)(o.X6, {
                                        as: "h5",
                                        fontSize: "1.25rem",
                                        children: ["Your password‘s score:", " "]
                                    }), (0, me.tZ)(o.xv, {
                                        as: "div",
                                        fontSize: "2xl",
                                        fontWeight: "600",
                                        color: F,
                                        children: Z.current && X
                                    })]
                                }), (0, me.BX)(o.xv, {
                                    mb: "4",
                                    w: {
                                        base: "100%",
                                        md: "49%"
                                    },
                                    children: [(0, me.BX)(o.X6, {
                                        as: "h5",
                                        fontSize: "1.25rem",
                                        children: ["Estimated time to crack:", " "]
                                    }), (0, me.tZ)(o.xv, {
                                        as: "div",
                                        fontSize: "2xl",
                                        fontWeight: "600",
                                        textColor: "#175ddc",
                                        children: Z.current && V
                                    })]
                                })]
                            }), (0, me.tZ)(o.xu, {
                                textAlign: "center",
                                minH: "48px",
                                fontFamily: "monospace",
                                py: "3",
                                background: "#ecf0f5",
                                border: "1px",
                                borderColor: "#dee2e6",
                                borderRadius: "md",
                                my: "3",
                                children: r.map((function(e, r) {
                                    return (0, me.tZ)(o.xv, {
                                        fontSize: {
                                            base: "1.125rem",
                                            md: "1.65rem"
                                        },
                                        as: "span",
                                        color: (a = e, Number.isNaN(1 * a) ? a.match(/[a-z]/i) ? "#212529" : "#c40800" : "#007fde"),
                                        children: e
                                    }, r);
                                    var a
                                }))
                            }), (0, me.BX)(o.kC, {
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                children: [(0, me.BX)(s.zx, {
                                    onClick: function() {
                                        return O(!U)
                                    },
                                    my: "2",
                                    bgColor: "primary",
                                    color: "#ffffff",
                                    w: {
                                        base: "100%",
                                        md: "49%"
                                    },
                                    _hover: {
                                        bgColor: "secondary"
                                    },
                                    children: [(0, me.tZ)(pe.Z, {
                                        fontWeight: "400",
                                        icon: "",
                                        mr: "1"
                                    }), "Regenerate"]
                                }), (0, me.BX)(s.zx, {
                                    onClick: function() {
                                        return e = N, navigator.clipboard.writeText(e), M(!0), void setTimeout((function() {
                                            M(!1)
                                        }), 1e3);
                                        var e
                                    },
                                    my: "2",
                                    bgColor: "#1a3b66",
                                    color: "#ffffff",
                                    w: {
                                        base: "100%",
                                        md: "49%"
                                    },
                                    _hover: {
                                        bgColor: "#122948"
                                    },
                                    children: [(0, me.tZ)(pe.Z, {
                                        fontWeight: "400",
                                        icon: "",
                                        mr: "1"
                                    }), _ ? "Copied!" : "Copy to Clipboard"]
                                })]
                            }), (0, me.tZ)(o.xu, {
                                p: "2rem",
                                background: "#ecf0f5",
                                borderRadius: "md",
                                mt: "1rem",
                                children: (0, me.BX)(o.kC, {
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    children: [(0, me.BX)(o.xu, {
                                        w: {
                                            base: "100%",
                                            md: "50%"
                                        },
                                        children: [(0, me.tZ)(o.X6, {
                                            mb: "2",
                                            as: "h5",
                                            fontSize: "1.25rem",
                                            children: "Type"
                                        }), (0, me.tZ)(x, {
                                            onChange: u,
                                            value: l,
                                            children: (0, me.BX)(o.Kq, {
                                                direction: "column",
                                                children: [(0, me.tZ)(B, {
                                                    variant: "altblue",
                                                    value: "password",
                                                    children: "Password"
                                                }), (0, me.tZ)(B, {
                                                    value: "passphrase",
                                                    children: "Passphrase"
                                                })]
                                            })
                                        })]
                                    }), (0, me.BX)(o.xu, {
                                        w: {
                                            base: "100%",
                                            md: "50%"
                                        },
                                        mt: {
                                            base: "3",
                                            md: "0"
                                        },
                                        children: [(0, me.tZ)(o.X6, {
                                            mb: "2",
                                            as: "h5",
                                            fontSize: "1.25rem",
                                            children: "Length"
                                        }), (0, me.BX)(o.kC, {
                                            w: "auto",
                                            maxW: "260px",
                                            alignItems: "baseline",
                                            flexWrap: "wrap",
                                            children: [(0, me.BX)(o.xv, {
                                                flex: "1",
                                                flexWrap: "nowrap",
                                                children: ["password" === l ? "Characters:" : "Words:", " ", d]
                                            }), (0, me.tZ)(o.xu, {
                                                w: "auto",
                                                minW: "100px",
                                                maxW: "330px",
                                                children: (0, me.BX)(ae, {
                                                    defaultValue: 14,
                                                    min: "password" === l ? 5 : 3,
                                                    max: "password" === l ? 128 : 20,
                                                    step: 1,
                                                    ml: "2",
                                                    mr: "auto",
                                                    focusThumbOnChange: !1,
                                                    value: d,
                                                    onChange: p,
                                                    children: [(0, me.tZ)(ne, {
                                                        bgColor: "primary",
                                                        children: (0, me.tZ)(ie, {
                                                            bgColor: "primary"
                                                        })
                                                    }), (0, me.tZ)(te, {
                                                        fontSize: "sm",
                                                        boxSize: "16px",
                                                        bgColor: "primary"
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0, me.BX)(o.xu, {
                                        w: "100%",
                                        mt: "3rem",
                                        children: [(0, me.tZ)(o.X6, {
                                            mb: "2",
                                            as: "h5",
                                            fontSize: "1.25rem",
                                            children: "Additional Options"
                                        }), "password" === l ? (0, me.BX)(o.kC, {
                                            flexWrap: "wrap",
                                            children: [!1 === w && !1 === y && !1 === C ? (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isReadOnly: !0,
                                                isChecked: h,
                                                onChange: function() {
                                                    return m(!h)
                                                },
                                                children: "A-Z"
                                            }) : (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isChecked: h,
                                                onChange: function() {
                                                    return m(!h)
                                                },
                                                children: "A-Z"
                                            }), !1 === h && !1 === y && !1 === C ? (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isReadOnly: !0,
                                                isChecked: w,
                                                onChange: function() {
                                                    return k(!w)
                                                },
                                                children: "0-9"
                                            }) : (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isChecked: w,
                                                onChange: function() {
                                                    return k(!w)
                                                },
                                                children: "0-9"
                                            }), !1 === h && !1 === w && !1 === C ? (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isReadOnly: !0,
                                                isChecked: y,
                                                onChange: function() {
                                                    return b(!y)
                                                },
                                                children: "a-z"
                                            }) : (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isChecked: y,
                                                onChange: function() {
                                                    return b(!y)
                                                },
                                                children: "a-z"
                                            }), !1 === w && !1 === y && !1 === h ? (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isReadOnly: !0,
                                                isChecked: C,
                                                onChange: function() {
                                                    return j(!C)
                                                },
                                                children: "!@#$%^&*"
                                            }) : (0, me.tZ)(se.XZ, {
                                                w: "50%",
                                                isChecked: C,
                                                onChange: function() {
                                                    return j(!C)
                                                },
                                                children: "!@#$%^&*"
                                            })]
                                        }) : (0, me.BX)(o.kC, {
                                            children: [(0, me.tZ)(se.XZ, {
                                                w: "100%",
                                                isChecked: S,
                                                onChange: function() {
                                                    return P(!S)
                                                },
                                                children: "Capitalize"
                                            }), (0, me.tZ)(se.XZ, {
                                                w: "100%",
                                                isChecked: A,
                                                onChange: function() {
                                                    return q(!A)
                                                },
                                                children: "Include Number"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                ye = a(51167),
                be = a(8409);
            var ve = function(e) {
                    var r = e.header,
                        a = e.cta;
                    return (0, me.tZ)(n.Z, {
                        mt: "2.5rem",
                        px: {
                            base: "0",
                            sm: "1",
                            md: "8"
                        },
                        w: {
                            base: "100%",
                            sm: "95%",
                            md: "85%"
                        },
                        children: (0, me.BX)(o.xu, {
                            rounded: "lg",
                            bg: "white",
                            p: "4",
                            textAlign: "center",
                            opacity: "1",
                            children: [(0, me.tZ)(o.X6, {
                                as: "h3",
                                variant: "h3",
                                fontWeight: "normal",
                                mb: "5",
                                children: r
                            }), (0, me.tZ)(s.zx, {
                                as: o.rU,
                                href: a.href,
                                onClick: function() {
                                    return a.action && (0, be.I)({
                                        category: "" + (a.category || "main"),
                                        action: "" + a.action
                                    })
                                },
                                bg: "primary",
                                color: "white",
                                fontWeight: "500",
                                size: "lg",
                                _hover: {
                                    textDecor: "none",
                                    bg: "secondary"
                                },
                                p: "12px 24px",
                                children: a.label
                            })]
                        })
                    })
                },
                we = a(73223);

            function ke() {
                return (0, me.BX)(t.Z, {
                    children: [(0, me.BX)(n.Z, {
                        maxW: "100%",
                        background: "#175ddc",
                        py: {
                            base: "2rem",
                            sm: "3.5rem",
                            md: "5rem"
                        },
                        children: [(0, me.tZ)(fe, {}), (0, me.tZ)(ve, {
                            header: "Start saving secure passwords in your free Bitwarden account today!",
                            cta: {
                                label: "Register a Free Account",
                                href: we.Z.getStarted,
                                category: "Password Generator Page",
                                action: "Create Free Account"
                            }
                        })]
                    }), (0, me.tZ)(ye.Z, {})]
                })
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-password-generator-js-f87e96b4378dae3e7d23.js.map