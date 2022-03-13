"use strict";
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [766], {
        56839: function(e, n, a) {
            a.d(n, {
                XZ: function() {
                    return w
                }
            });
            var t = a(68316),
                i = a(67044),
                o = a(67294),
                r = a(65247),
                c = a(95422),
                l = a(45082),
                s = a(77649),
                d = a(71571),
                u = a(29802),
                h = a(32662);

            function v() {
                return v = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var a = arguments[n];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, v.apply(this, arguments)
            }
            var k = (0, i.kr)({
                    name: "CheckboxGroupContext",
                    strict: !1
                }),
                f = (k[0], k[1]);

            function b(e, n) {
                if (null == e) return {};
                var a, t, i = {},
                    o = Object.keys(e);
                for (t = 0; t < o.length; t++) a = o[t], n.indexOf(a) >= 0 || (i[a] = e[a]);
                return i
            }
            t.Ts;
            var m = ["isIndeterminate", "isChecked"],
                p = "custom" in s.E ? s.E.custom(l.m$.svg) : (0, s.E)(l.m$.svg),
                C = function(e) {
                    return o.createElement(p, v({
                        width: "1.2em",
                        viewBox: "0 0 12 10",
                        variants: {
                            unchecked: {
                                opacity: 0,
                                strokeDashoffset: 16
                            },
                            checked: {
                                opacity: 1,
                                strokeDashoffset: 0,
                                transition: {
                                    duration: .2
                                }
                            }
                        },
                        style: {
                            fill: "none",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            strokeDasharray: 16
                        }
                    }, e), o.createElement("polyline", {
                        points: "1.5 6 4.5 9 10.5 1"
                    }))
                },
                y = function(e) {
                    return o.createElement(p, v({
                        width: "1.2em",
                        viewBox: "0 0 24 24",
                        variants: {
                            unchecked: {
                                scaleX: .65,
                                opacity: 0
                            },
                            checked: {
                                scaleX: 1,
                                opacity: 1,
                                transition: {
                                    scaleX: {
                                        duration: 0
                                    },
                                    opacity: {
                                        duration: .02
                                    }
                                }
                            }
                        },
                        style: {
                            stroke: "currentColor",
                            strokeWidth: 4
                        }
                    }, e), o.createElement("line", {
                        x1: "21",
                        x2: "3",
                        y1: "12",
                        y2: "12"
                    }))
                },
                g = function(e) {
                    var n = e.open,
                        a = e.children;
                    return o.createElement(d.M, {
                        initial: !1
                    }, n && o.createElement(s.E.div, {
                        variants: {
                            unchecked: {
                                scale: .5
                            },
                            checked: {
                                scale: 1
                            }
                        },
                        initial: "unchecked",
                        animate: "checked",
                        exit: "unchecked",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%"
                        }
                    }, a))
                },
                P = function(e) {
                    var n = e.isIndeterminate,
                        a = e.isChecked,
                        t = b(e, m),
                        i = n ? y : C;
                    return o.createElement(g, {
                        open: a || n
                    }, o.createElement(i, t))
                },
                x = ["defaultIsChecked", "defaultChecked", "isChecked", "isFocusable", "onChange", "isIndeterminate", "name", "value", "tabIndex", "aria-label", "aria-labelledby", "aria-invalid"];

            function I(e) {
                e.preventDefault(), e.stopPropagation()
            }
            var B = ["spacing", "className", "children", "iconColor", "iconSize", "icon", "isChecked", "isDisabled", "onChange"],
                E = (0, l.m$)("span", {
                    baseStyle: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        verticalAlign: "top",
                        userSelect: "none",
                        flexShrink: 0
                    }
                }),
                D = (0, l.m$)("label", {
                    baseStyle: {
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        verticalAlign: "top",
                        position: "relative",
                        _disabled: {
                            cursor: "not-allowed"
                        }
                    }
                }),
                w = (0, l.Gp)((function(e, n) {
                    var a = f(),
                        s = v({}, a, e),
                        d = (0, l.jC)("Checkbox", s),
                        k = (0, l.Lr)(e),
                        m = k.spacing,
                        p = void 0 === m ? "0.5rem" : m,
                        C = k.className,
                        y = k.children,
                        g = k.iconColor,
                        w = k.iconSize,
                        _ = k.icon,
                        M = void 0 === _ ? o.createElement(P, null) : _,
                        S = k.isChecked,
                        R = k.isDisabled,
                        N = void 0 === R ? null == a ? void 0 : a.isDisabled : R,
                        O = k.onChange,
                        L = b(k, B),
                        F = S;
                    null != a && a.value && k.value && (F = a.value.includes(k.value));
                    var T = O;
                    null != a && a.onChange && k.value && (T = (0, t.PP)(a.onChange, O));
                    var j = function(e) {
                            void 0 === e && (e = {});
                            var n = (0, u.Kn)(e),
                                a = n.isDisabled,
                                l = n.isReadOnly,
                                s = n.isRequired,
                                d = n.isInvalid,
                                k = n.id,
                                f = n.onBlur,
                                m = n.onFocus,
                                p = n["aria-describedby"],
                                C = e,
                                y = C.defaultIsChecked,
                                g = C.defaultChecked,
                                P = void 0 === g ? y : g,
                                B = C.isChecked,
                                E = C.isFocusable,
                                D = C.onChange,
                                w = C.isIndeterminate,
                                _ = C.name,
                                M = C.value,
                                S = C.tabIndex,
                                R = void 0 === S ? void 0 : S,
                                N = C["aria-label"],
                                O = C["aria-labelledby"],
                                L = C["aria-invalid"],
                                F = b(C, x),
                                T = (0, t.CE)(F, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
                                j = (0, r.u)(D),
                                q = (0, r.u)(f),
                                K = (0, r.u)(m),
                                $ = (0, c.kt)(),
                                A = $[0],
                                U = $[1],
                                X = (0, c.kt)(),
                                z = X[0],
                                G = X[1],
                                W = (0, c.kt)(),
                                Z = W[0],
                                H = W[1],
                                Y = (0, o.useRef)(null),
                                J = (0, o.useState)(!0),
                                Q = J[0],
                                V = J[1],
                                ee = (0, o.useState)(!!P),
                                ne = ee[0],
                                ae = ee[1],
                                te = (0, c.pY)(B, ne),
                                ie = te[0],
                                oe = te[1];
                            (0, t.ZK)({
                                condition: !!y,
                                message: 'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'
                            });
                            var re = (0, o.useCallback)((function(e) {
                                l || a ? e.preventDefault() : (ie || ae(oe ? e.target.checked : !!w || e.target.checked), null == j || j(e))
                            }), [l, a, oe, ie, w, j]);
                            (0, r.a)((function() {
                                Y.current && (Y.current.indeterminate = Boolean(w))
                            }), [w]), (0, c.rf)((function() {
                                a && U.off()
                            }), [a, U]);
                            var ce = a && !E,
                                le = (0, o.useCallback)((function(e) {
                                    " " === e.key && H.on()
                                }), [H]),
                                se = (0, o.useCallback)((function(e) {
                                    " " === e.key && H.off()
                                }), [H]);
                            (0, r.a)((function() {
                                Y.current && Y.current.checked !== oe && ae(Y.current.checked)
                            }), [Y.current]);
                            var de = (0, o.useCallback)((function(e, n) {
                                    return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, e, {
                                        ref: n,
                                        "data-active": (0, t.PB)(Z),
                                        "data-hover": (0, t.PB)(z),
                                        "data-checked": (0, t.PB)(oe),
                                        "data-focus": (0, t.PB)(A),
                                        "data-indeterminate": (0, t.PB)(w),
                                        "data-disabled": (0, t.PB)(a),
                                        "data-invalid": (0, t.PB)(d),
                                        "data-readonly": (0, t.PB)(l),
                                        "aria-hidden": !0,
                                        onMouseDown: (0, t.v0)(e.onMouseDown, (function(e) {
                                            e.preventDefault(), H.on()
                                        })),
                                        onMouseUp: (0, t.v0)(e.onMouseUp, H.off),
                                        onMouseEnter: (0, t.v0)(e.onMouseEnter, G.on),
                                        onMouseLeave: (0, t.v0)(e.onMouseLeave, G.off)
                                    })
                                }), [Z, oe, a, A, z, w, d, l, H, G.off, G.on]),
                                ue = (0, o.useCallback)((function(e, n) {
                                    return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, T, e, {
                                        ref: (0, i.lq)(n, (function(e) {
                                            e && V("LABEL" === e.tagName)
                                        })),
                                        onClick: (0, t.v0)(e.onClick, (function() {
                                            var e;
                                            Q || (null == (e = Y.current) || e.click(), (0, t.T_)(Y.current, {
                                                nextTick: !0
                                            }))
                                        })),
                                        "data-disabled": (0, t.PB)(a),
                                        "data-checked": (0, t.PB)(oe),
                                        "data-invalid": (0, t.PB)(d)
                                    })
                                }), [T, a, oe, d, Q]),
                                he = (0, o.useCallback)((function(e, n) {
                                    return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, e, {
                                        ref: (0, i.lq)(Y, n),
                                        type: "checkbox",
                                        name: _,
                                        value: M,
                                        id: k,
                                        tabIndex: R,
                                        onChange: (0, t.v0)(e.onChange, re),
                                        onBlur: (0, t.v0)(e.onBlur, q, U.off),
                                        onFocus: (0, t.v0)(e.onFocus, K, U.on),
                                        onKeyDown: (0, t.v0)(e.onKeyDown, le),
                                        onKeyUp: (0, t.v0)(e.onKeyUp, se),
                                        required: s,
                                        checked: oe,
                                        disabled: ce,
                                        readOnly: l,
                                        "aria-label": N,
                                        "aria-labelledby": O,
                                        "aria-invalid": L ? Boolean(L) : d,
                                        "aria-describedby": p,
                                        "aria-disabled": a,
                                        style: h.NL
                                    })
                                }), [_, M, k, re, U.off, U.on, q, K, le, se, s, oe, ce, l, N, O, L, d, p, a, R]),
                                ve = (0, o.useCallback)((function(e, n) {
                                    return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, e, {
                                        ref: n,
                                        onMouseDown: (0, t.v0)(e.onMouseDown, I),
                                        onTouchStart: (0, t.v0)(e.onTouchStart, I),
                                        "data-disabled": (0, t.PB)(a),
                                        "data-checked": (0, t.PB)(oe),
                                        "data-invalid": (0, t.PB)(d)
                                    })
                                }), [oe, a, d]);
                            return {
                                state: {
                                    isInvalid: d,
                                    isFocused: A,
                                    isChecked: oe,
                                    isActive: Z,
                                    isHovered: z,
                                    isIndeterminate: w,
                                    isDisabled: a,
                                    isReadOnly: l,
                                    isRequired: s
                                },
                                getRootProps: ue,
                                getCheckboxProps: de,
                                getInputProps: he,
                                getLabelProps: ve,
                                htmlProps: T
                            }
                        }(v({}, L, {
                            isDisabled: N,
                            isChecked: F,
                            onChange: T
                        })),
                        q = j.state,
                        K = j.getInputProps,
                        $ = j.getCheckboxProps,
                        A = j.getLabelProps,
                        U = j.getRootProps,
                        X = o.useMemo((function() {
                            return v({
                                opacity: q.isChecked || q.isIndeterminate ? 1 : 0,
                                transform: q.isChecked || q.isIndeterminate ? "scale(1)" : "scale(0.95)",
                                fontSize: w,
                                color: g
                            }, d.icon)
                        }), [g, w, q.isChecked, q.isIndeterminate, d.icon]),
                        z = o.cloneElement(M, {
                            __css: X,
                            isIndeterminate: q.isIndeterminate,
                            isChecked: q.isChecked
                        });
                    return o.createElement(D, v({
                        __css: d.container,
                        className: (0, t.cx)("chakra-checkbox", C)
                    }, U()), o.createElement("input", v({
                        className: "chakra-checkbox__input"
                    }, K({}, n))), o.createElement(E, v({
                        __css: d.control,
                        className: "chakra-checkbox__control"
                    }, $()), z), y && o.createElement(l.m$.span, v({
                        className: "chakra-checkbox__label"
                    }, A(), {
                        __css: v({
                            marginStart: p
                        }, d.label)
                    }), y))
                }));
            t.Ts && (w.displayName = "Checkbox")
        }
    }
]);
//# sourceMappingURL=82e15519ace757d1e30204d3bb270f8127a77253-b8d9b16de482313ce0fc.js.map