/*! For license information please see 342e1947d2f4b0a8f3aa3bf8857dff70e5e98989-3a023307e5dd4a0f5888.js.LICENSE.txt */
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [2750], {
        29802: function(t, e, n) {
            "use strict";
            n.d(e, {
                Kn: function() {
                    return w
                },
                NI: function() {
                    return h
                },
                NJ: function() {
                    return m
                },
                Yp: function() {
                    return x
                }
            });
            var r = n(95422),
                o = n(45082),
                i = n(68316),
                a = n(67044),
                s = n(67294),
                u = n(31421);

            function c() {
                return c = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, c.apply(this, arguments)
            }

            function l(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            var f = ["id", "isRequired", "isInvalid", "isDisabled", "isReadOnly"],
                d = ["getRootProps", "htmlProps"],
                p = (0, a.kr)({
                    strict: !1,
                    name: "FormControlContext"
                }),
                v = p[0],
                m = p[1];
            var h = (0, o.Gp)((function(t, e) {
                var n = (0, o.jC)("Form", t),
                    u = function(t) {
                        var e = t.id,
                            n = t.isRequired,
                            o = t.isInvalid,
                            u = t.isDisabled,
                            d = t.isReadOnly,
                            p = l(t, f),
                            v = (0, r.Me)(),
                            m = e || "field-" + v,
                            h = m + "-label",
                            g = m + "-feedback",
                            y = m + "-helptext",
                            b = s.useState(!1),
                            x = b[0],
                            w = b[1],
                            O = s.useState(!1),
                            E = O[0],
                            P = O[1],
                            S = (0, r.kt)(),
                            C = S[0],
                            k = S[1],
                            j = s.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), c({
                                    id: y
                                }, t, {
                                    ref: (0, a.lq)(e, (function(t) {
                                        t && P(!0)
                                    }))
                                })
                            }), [y]),
                            A = s.useCallback((function(t, e) {
                                var n, r;
                                return void 0 === t && (t = {}), void 0 === e && (e = null), c({}, t, {
                                    ref: e,
                                    "data-focus": (0, i.PB)(C),
                                    "data-disabled": (0, i.PB)(u),
                                    "data-invalid": (0, i.PB)(o),
                                    "data-readonly": (0, i.PB)(d),
                                    id: null != (n = t.id) ? n : h,
                                    htmlFor: null != (r = t.htmlFor) ? r : m
                                })
                            }), [m, u, C, o, d, h]),
                            T = s.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), c({
                                    id: g
                                }, t, {
                                    ref: (0, a.lq)(e, (function(t) {
                                        t && w(!0)
                                    })),
                                    "aria-live": "polite"
                                })
                            }), [g]),
                            I = s.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), c({}, t, p, {
                                    ref: e,
                                    role: "group"
                                })
                            }), [p]),
                            R = s.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), c({}, t, {
                                    ref: e,
                                    role: "presentation",
                                    "aria-hidden": !0,
                                    children: t.children || "*"
                                })
                            }), []);
                        return {
                            isRequired: !!n,
                            isInvalid: !!o,
                            isReadOnly: !!d,
                            isDisabled: !!u,
                            isFocused: !!C,
                            onFocus: k.on,
                            onBlur: k.off,
                            hasFeedbackText: x,
                            setHasFeedbackText: w,
                            hasHelpText: E,
                            setHasHelpText: P,
                            id: m,
                            labelId: h,
                            feedbackId: g,
                            helpTextId: y,
                            htmlProps: p,
                            getHelpTextProps: j,
                            getErrorMessageProps: T,
                            getRootProps: I,
                            getLabelProps: A,
                            getRequiredIndicatorProps: R
                        }
                    }((0, o.Lr)(t)),
                    p = u.getRootProps;
                u.htmlProps;
                var m = l(u, d),
                    h = (0, i.cx)("chakra-form-control", t.className);
                return s.createElement(v, {
                    value: m
                }, s.createElement(o.Fo, {
                    value: n
                }, s.createElement(o.m$.div, c({}, p({}, e), {
                    className: h,
                    __css: n.container
                }))))
            }));
            i.Ts && (h.displayName = "FormControl");
            var g = (0, o.Gp)((function(t, e) {
                var n = m(),
                    r = (0, o.yK)(),
                    a = (0, i.cx)("chakra-form__helper-text", t.className);
                return s.createElement(o.m$.div, c({}, null == n ? void 0 : n.getHelpTextProps(t, e), {
                    __css: r.helperText,
                    className: a
                }))
            }));
            i.Ts && (g.displayName = "FormHelperText");
            var y = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"],
                b = ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"];

            function x(t) {
                var e = w(t),
                    n = e.isDisabled,
                    r = e.isInvalid,
                    o = e.isReadOnly,
                    a = e.isRequired;
                return c({}, l(e, y), {
                    disabled: n,
                    readOnly: o,
                    required: a,
                    "aria-invalid": (0, i.Qm)(r),
                    "aria-required": (0, i.Qm)(a),
                    "aria-readonly": (0, i.Qm)(o)
                })
            }

            function w(t) {
                var e, n, r, o = m(),
                    a = t.id,
                    s = t.disabled,
                    u = t.readOnly,
                    f = t.required,
                    d = t.isRequired,
                    p = t.isInvalid,
                    v = t.isReadOnly,
                    h = t.isDisabled,
                    g = t.onFocus,
                    y = t.onBlur,
                    x = l(t, b),
                    w = t["aria-describedby"] ? [t["aria-describedby"]] : [];
                return null != o && o.hasFeedbackText && null != o && o.isInvalid && w.push(o.feedbackId), null != o && o.hasHelpText && w.push(o.helpTextId), c({}, x, {
                    "aria-describedby": w.join(" ") || void 0,
                    id: null != a ? a : null == o ? void 0 : o.id,
                    isDisabled: null != (e = null != s ? s : h) ? e : null == o ? void 0 : o.isDisabled,
                    isReadOnly: null != (n = null != u ? u : v) ? n : null == o ? void 0 : o.isReadOnly,
                    isRequired: null != (r = null != f ? f : d) ? r : null == o ? void 0 : o.isRequired,
                    isInvalid: null != p ? p : null == o ? void 0 : o.isInvalid,
                    onFocus: (0, i.v0)(null == o ? void 0 : o.onFocus, g),
                    onBlur: (0, i.v0)(null == o ? void 0 : o.onBlur, y)
                })
            }
            var O = (0, o.Gp)((function(t, e) {
                var n = (0, o.jC)("FormError", t),
                    r = (0, o.Lr)(t),
                    a = m();
                return null != a && a.isInvalid ? s.createElement(o.Fo, {
                    value: n
                }, s.createElement(o.m$.div, c({}, null == a ? void 0 : a.getErrorMessageProps(r, e), {
                    className: (0, i.cx)("chakra-form__error-message", t.className),
                    __css: c({
                        display: "flex",
                        alignItems: "center"
                    }, n.text)
                }))) : null
            }));
            i.Ts && (O.displayName = "FormErrorMessage");
            var E = (0, o.Gp)((function(t, e) {
                var n = (0, o.yK)(),
                    r = m();
                if (null == r || !r.isInvalid) return null;
                var a = (0, i.cx)("chakra-form__error-icon", t.className);
                return s.createElement(u.ZP, c({
                    ref: e,
                    "aria-hidden": !0
                }, t, {
                    __css: n.icon,
                    className: a
                }), s.createElement("path", {
                    fill: "currentColor",
                    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                }))
            }));
            i.Ts && (E.displayName = "FormErrorIcon");
            var P = ["className", "children", "requiredIndicator"],
                S = (0, o.Gp)((function(t, e) {
                    var n, r = (0, o.mq)("FormLabel", t),
                        a = (0, o.Lr)(t);
                    a.className;
                    var u = a.children,
                        f = a.requiredIndicator,
                        d = void 0 === f ? s.createElement(C, null) : f,
                        p = l(a, P),
                        v = m(),
                        h = null != (n = null == v ? void 0 : v.getLabelProps(p, e)) ? n : c({
                            ref: e
                        }, p);
                    return s.createElement(o.m$.label, c({}, h, {
                        className: (0, i.cx)("chakra-form__label", a.className),
                        __css: c({
                            display: "block",
                            textAlign: "start"
                        }, r)
                    }), u, null != v && v.isRequired ? d : null)
                }));
            i.Ts && (S.displayName = "FormLabel");
            var C = (0, o.Gp)((function(t, e) {
                var n = m(),
                    r = (0, o.yK)();
                if (null == n || !n.isRequired) return null;
                var a = (0, i.cx)("chakra-form__required-indicator", t.className);
                return s.createElement(o.m$.span, c({}, null == n ? void 0 : n.getRequiredIndicatorProps(t, e), {
                    __css: r.requiredIndicator,
                    className: a
                }))
            }));
            i.Ts && (C.displayName = "RequiredIndicator")
        },
        28569: function(t, e, n) {
            "use strict";
            n.d(e, {
                BZ: function() {
                    return b
                },
                II: function() {
                    return f
                },
                Z8: function() {
                    return S
                },
                xH: function() {
                    return C
                }
            });
            var r = n(29802),
                o = n(45082),
                i = n(68316),
                a = n(67294),
                s = n(67044);

            function u() {
                return u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(this, arguments)
            }

            function c(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            var l = ["htmlSize"],
                f = (0, o.Gp)((function(t, e) {
                    var n = t.htmlSize,
                        s = c(t, l),
                        f = (0, o.jC)("Input", s),
                        d = (0, o.Lr)(s),
                        p = (0, r.Yp)(d),
                        v = (0, i.cx)("chakra-input", t.className);
                    return a.createElement(o.m$.input, u({
                        size: n
                    }, p, {
                        __css: f.field,
                        ref: e,
                        className: v
                    }))
                }));
            i.Ts && (f.displayName = "Input"), f.id = "Input";
            var d = ["placement"],
                p = {
                    left: {
                        marginEnd: "-1px",
                        borderEndRadius: 0,
                        borderEndColor: "transparent"
                    },
                    right: {
                        marginStart: "-1px",
                        borderStartRadius: 0,
                        borderStartColor: "transparent"
                    }
                },
                v = (0, o.m$)("div", {
                    baseStyle: {
                        flex: "0 0 auto",
                        width: "auto",
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap"
                    }
                }),
                m = (0, o.Gp)((function(t, e) {
                    var n, r = t.placement,
                        i = void 0 === r ? "left" : r,
                        s = c(t, d),
                        l = null != (n = p[i]) ? n : {},
                        f = (0, o.yK)();
                    return a.createElement(v, u({
                        ref: e
                    }, s, {
                        __css: u({}, f.addon, l)
                    }))
                }));
            i.Ts && (m.displayName = "InputAddon");
            var h = (0, o.Gp)((function(t, e) {
                return a.createElement(m, u({
                    ref: e,
                    placement: "left"
                }, t, {
                    className: (0, i.cx)("chakra-input__left-addon", t.className)
                }))
            }));
            i.Ts && (h.displayName = "InputLeftAddon"), h.id = "InputLeftAddon";
            var g = (0, o.Gp)((function(t, e) {
                return a.createElement(m, u({
                    ref: e,
                    placement: "right"
                }, t, {
                    className: (0, i.cx)("chakra-input__right-addon", t.className)
                }))
            }));
            i.Ts && (g.displayName = "InputRightAddon"), g.id = "InputRightAddon";
            var y = ["children", "className"],
                b = (0, o.Gp)((function(t, e) {
                    var n = (0, o.jC)("Input", t),
                        r = (0, o.Lr)(t),
                        l = r.children,
                        f = r.className,
                        d = c(r, y),
                        p = (0, i.cx)("chakra-input__group", f),
                        v = {},
                        m = (0, s.WR)(l),
                        h = n.field;
                    m.forEach((function(t) {
                        if (n) {
                            var e, r;
                            if (h && "InputLeftElement" === t.type.id) v.paddingStart = null != (e = h.height) ? e : h.h;
                            if (h && "InputRightElement" === t.type.id) v.paddingEnd = null != (r = h.height) ? r : h.h;
                            "InputRightAddon" === t.type.id && (v.borderEndRadius = 0), "InputLeftAddon" === t.type.id && (v.borderStartRadius = 0)
                        }
                    }));
                    var g = m.map((function(e) {
                        var n, r, o = (0, i.YU)({
                            size: (null == (n = e.props) ? void 0 : n.size) || t.size,
                            variant: (null == (r = e.props) ? void 0 : r.variant) || t.variant
                        });
                        return "Input" !== e.type.id ? a.cloneElement(e, o) : a.cloneElement(e, Object.assign(o, v, e.props))
                    }));
                    return a.createElement(o.m$.div, u({
                        className: p,
                        ref: e,
                        __css: {
                            width: "100%",
                            display: "flex",
                            position: "relative"
                        }
                    }, d), a.createElement(o.Fo, {
                        value: n
                    }, g))
                }));
            i.Ts && (b.displayName = "InputGroup");
            var x = ["placement"],
                w = ["className"],
                O = ["className"],
                E = (0, o.m$)("div", {
                    baseStyle: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "0",
                        zIndex: 2
                    }
                }),
                P = (0, o.Gp)((function(t, e) {
                    var n, r, i, s = t.placement,
                        l = void 0 === s ? "left" : s,
                        f = c(t, x),
                        d = (0, o.yK)(),
                        p = d.field,
                        v = u(((i = {})["left" === l ? "insetStart" : "insetEnd"] = "0", i.width = null != (n = null == p ? void 0 : p.height) ? n : null == p ? void 0 : p.h, i.height = null != (r = null == p ? void 0 : p.height) ? r : null == p ? void 0 : p.h, i.fontSize = null == p ? void 0 : p.fontSize, i), d.element);
                    return a.createElement(E, u({
                        ref: e,
                        __css: v
                    }, f))
                }));
            P.id = "InputElement", i.Ts && (P.displayName = "InputElement");
            var S = (0, o.Gp)((function(t, e) {
                var n = t.className,
                    r = c(t, w),
                    o = (0, i.cx)("chakra-input__left-element", n);
                return a.createElement(P, u({
                    ref: e,
                    placement: "left",
                    className: o
                }, r))
            }));
            S.id = "InputLeftElement", i.Ts && (S.displayName = "InputLeftElement");
            var C = (0, o.Gp)((function(t, e) {
                var n = t.className,
                    r = c(t, O),
                    o = (0, i.cx)("chakra-input__right-element", n);
                return a.createElement(P, u({
                    ref: e,
                    placement: "right",
                    className: o
                }, r))
            }));
            C.id = "InputRightElement", i.Ts && (C.displayName = "InputRightElement")
        },
        65214: function(t, e, n) {
            "use strict";
            n.d(e, {
                ac: function() {
                    return s
                }
            });
            n(45082);
            var r = n(68316),
                o = n(67294),
                i = n(85820),
                a = r.jU ? o.useLayoutEffect : o.useEffect;

            function s(t) {
                var e = (0, i.O)(),
                    n = Array.isArray(t) ? t : [t],
                    s = r.jU && "matchMedia" in e.window,
                    u = o.useState(n.map((function(t) {
                        return !!s && !!e.window.matchMedia(t).matches
                    }))),
                    c = u[0],
                    l = u[1];
                return a((function() {
                    if (s) {
                        var t = n.map((function(t) {
                                return e.window.matchMedia(t)
                            })),
                            r = t.map((function(e, n) {
                                var r = function(e) {
                                    var n = t.findIndex((function(t) {
                                        return t.media === e.media
                                    }));
                                    l((function(t) {
                                        var r = t.map((function(t) {
                                            return t
                                        }));
                                        return r[n] = e.matches, r
                                    }))
                                };
                                return "function" == typeof t[n].addEventListener ? t[n].addEventListener("change", r) : t[n].addListener(r), r
                            }));
                        return function() {
                            t.forEach((function(e, n) {
                                "function" == typeof t[n].removeEventListener ? t[n].removeEventListener("change", r[n]) : t[n].removeListener(r[n])
                            }))
                        }
                    }
                }), []), c
            }
            r.Ts;
            r.Ts
        },
        36096: function(t, e, n) {
            "use strict";
            n.d(e, {
                u_: function() {
                    return _e
                },
                fe: function() {
                    return ze
                },
                hz: function() {
                    return Ve
                },
                mz: function() {
                    return Ze
                },
                xB: function() {
                    return Ue
                },
                ZA: function() {
                    return qe
                }
            });
            var r = n(31421),
                o = n(45082),
                i = n(68316),
                a = n(67294);

            function s() {
                return s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, s.apply(this, arguments)
            }
            var u = ["children", "isDisabled", "__css"],
                c = function(t) {
                    return a.createElement(r.JO, s({
                        focusable: "false",
                        "aria-hidden": !0
                    }, t), a.createElement("path", {
                        fill: "currentColor",
                        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                    }))
                },
                l = (0, o.Gp)((function(t, e) {
                    var n = (0, o.mq)("CloseButton", t),
                        r = (0, o.Lr)(t),
                        i = r.children,
                        l = r.isDisabled,
                        f = r.__css,
                        d = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(r, u);
                    return a.createElement(o.m$.button, s({
                        type: "button",
                        "aria-label": "Close",
                        ref: e,
                        disabled: l,
                        __css: s({}, {
                            outline: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }, n, f)
                    }, d), i || a.createElement(c, {
                        width: "1em",
                        height: "1em"
                    }))
                }));
            i.Ts && (l.displayName = "CloseButton");
            var f = n(87462),
                d = "data-focus-lock",
                p = "data-focus-lock-disabled";

            function v(t, e) {
                return n = e, r = function(e) {
                    return t.forEach((function(t) {
                        return function(t, e) {
                            return "function" == typeof t ? t(e) : t && (t.current = e), t
                        }(t, e)
                    }))
                }, (o = (0, a.useState)((function() {
                    return {
                        value: n,
                        callback: r,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(t) {
                                var e = o.value;
                                e !== t && (o.value = t, o.callback(t, e))
                            }
                        }
                    }
                }))[0]).callback = r, o.facade;
                var n, r, o
            }
            var m = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                h = function(t) {
                    var e = t.children;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: m
                    }), e, e && a.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: m
                    }))
                };
            h.defaultProps = {
                children: null
            };
            var g = function() {
                return g = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, g.apply(this, arguments)
            };

            function y(t) {
                return t
            }

            function b(t, e) {
                void 0 === e && (e = y);
                var n = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : t
                    },
                    useMedium: function(t) {
                        var o = e(t, r);
                        return n.push(o),
                            function() {
                                n = n.filter((function(t) {
                                    return t !== o
                                }))
                            }
                    },
                    assignSyncMedium: function(t) {
                        for (r = !0; n.length;) {
                            var e = n;
                            n = [], e.forEach(t)
                        }
                        n = {
                            push: function(e) {
                                return t(e)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(t) {
                        r = !0;
                        var e = [];
                        if (n.length) {
                            var o = n;
                            n = [], o.forEach(t), e = n
                        }
                        var i = function() {
                                var n = e;
                                e = [], n.forEach(t)
                            },
                            a = function() {
                                return Promise.resolve().then(i)
                            };
                        a(), n = {
                            push: function(t) {
                                e.push(t), a()
                            },
                            filter: function(t) {
                                return e = e.filter(t), n
                            }
                        }
                    }
                }
            }

            function x(t, e) {
                return void 0 === e && (e = y), b(t, e)
            }

            function w(t) {
                void 0 === t && (t = {});
                var e = b(null);
                return e.options = g({
                    async: !0,
                    ssr: !1
                }, t), e
            }
            var O = x({}, (function(t) {
                    return {
                        target: t.target,
                        currentTarget: t.currentTarget
                    }
                })),
                E = x(),
                P = x(),
                S = w({
                    async: !0
                }),
                C = [],
                k = a.forwardRef((function(t, e) {
                    var n, r = a.useState(),
                        o = r[0],
                        i = r[1],
                        s = a.useRef(),
                        u = a.useRef(!1),
                        c = a.useRef(null),
                        l = t.children,
                        h = t.disabled,
                        g = t.noFocusGuards,
                        y = t.persistentFocus,
                        b = t.crossFrame,
                        x = t.autoFocus,
                        w = (t.allowTextSelection, t.group),
                        P = t.className,
                        k = t.whiteList,
                        j = t.shards,
                        A = void 0 === j ? C : j,
                        T = t.as,
                        I = void 0 === T ? "div" : T,
                        R = t.lockProps,
                        D = void 0 === R ? {} : R,
                        M = t.sideCar,
                        L = t.returnFocus,
                        N = t.onActivation,
                        _ = t.onDeactivation,
                        F = a.useState({})[0],
                        V = a.useCallback((function() {
                            c.current = c.current || document && document.activeElement, s.current && N && N(s.current), u.current = !0
                        }), [N]),
                        B = a.useCallback((function() {
                            u.current = !1, _ && _(s.current)
                        }), [_]),
                        q = a.useCallback((function(t) {
                            var e = c.current;
                            if (Boolean(L) && e && e.focus) {
                                var n = "object" == typeof L ? L : void 0;
                                c.current = null, t ? Promise.resolve().then((function() {
                                    return e.focus(n)
                                })) : e.focus(n)
                            }
                        }), [L]),
                        U = a.useCallback((function(t) {
                            u.current && O.useMedium(t)
                        }), []),
                        z = E.useMedium,
                        Z = a.useCallback((function(t) {
                            s.current !== t && (s.current = t, i(t))
                        }), []);
                    var H = (0, f.Z)(((n = {})[p] = h && "disabled", n[d] = w, n), D),
                        W = !0 !== g,
                        Y = W && "tail" !== g,
                        X = v([e, Z]);
                    return a.createElement(a.Fragment, null, W && [a.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: m
                    }), a.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 1,
                        style: m
                    })], !h && a.createElement(M, {
                        id: F,
                        sideCar: S,
                        observed: o,
                        disabled: h,
                        persistentFocus: y,
                        crossFrame: b,
                        autoFocus: x,
                        whiteList: k,
                        shards: A,
                        onActivation: V,
                        onDeactivation: B,
                        returnFocus: q
                    }), a.createElement(I, (0, f.Z)({
                        ref: X
                    }, H, {
                        className: P,
                        onBlur: z,
                        onFocus: U
                    }), l), Y && a.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: m
                    }))
                }));
            k.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                crossFrame: !0,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var j = k,
                A = n(94578),
                T = n(4942);
            var I = function(t, e) {
                    return function(n) {
                        var r, o = [];

                        function i() {
                            r = t(o.map((function(t) {
                                return t.props
                            }))), e(r)
                        }
                        var s = function(t) {
                            function e() {
                                return t.apply(this, arguments) || this
                            }(0, A.Z)(e, t), e.peek = function() {
                                return r
                            };
                            var s = e.prototype;
                            return s.componentDidMount = function() {
                                o.push(this), i()
                            }, s.componentDidUpdate = function() {
                                i()
                            }, s.componentWillUnmount = function() {
                                var t = o.indexOf(this);
                                o.splice(t, 1), i()
                            }, s.render = function() {
                                return a.createElement(n, this.props)
                            }, e
                        }(a.PureComponent);
                        return (0, T.Z)(s, "displayName", "SideEffect(" + function(t) {
                            return t.displayName || t.name || "Component"
                        }(n) + ")"), s
                    }
                },
                R = function(t) {
                    return "INPUT" === t.tagName && "radio" === t.type
                },
                D = function(t, e) {
                    return R(t) && t.name ? function(t, e) {
                        return e.filter(R).filter((function(e) {
                            return e.name === t.name
                        })).filter((function(t) {
                            return t.checked
                        }))[0] || t
                    }(t, e) : t
                },
                M = function(t) {
                    return t[0] && t.length > 1 ? D(t[0], t) : t[0]
                },
                L = function(t, e) {
                    return t.length > 1 ? t.indexOf(D(t[e], t)) : e
                },
                N = function(t, e) {
                    return !t || t === document || t && t.nodeType === Node.DOCUMENT_NODE || ! function(t) {
                        if (t.nodeType !== Node.ELEMENT_NODE) return !1;
                        var e = window.getComputedStyle(t, null);
                        return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
                    }(t) && e(t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? t.parentNode.host : t.parentNode)
                },
                _ = function t(e, n) {
                    var r = e.get(n);
                    if (void 0 !== r) return r;
                    var o = N(n, t.bind(void 0, e));
                    return e.set(n, o), o
                },
                F = function(t) {
                    return Boolean(t && t.dataset && t.dataset.focusGuard)
                },
                V = function(t) {
                    return !F(t)
                },
                B = function(t) {
                    return Boolean(t)
                },
                q = "NEW_FOCUS",
                U = function(t, e, n, r) {
                    var o = t.length,
                        i = t[0],
                        a = t[o - 1],
                        s = F(n);
                    if (!(t.indexOf(n) >= 0)) {
                        var u, c, l = e.indexOf(n),
                            f = r ? e.indexOf(r) : l,
                            d = r ? t.indexOf(r) : -1,
                            p = l - f,
                            v = e.indexOf(i),
                            m = e.indexOf(a),
                            h = (u = e, c = new Set, u.forEach((function(t) {
                                return c.add(D(t, u))
                            })), u.filter((function(t) {
                                return c.has(t)
                            }))),
                            g = h.indexOf(n) - (r ? h.indexOf(r) : l),
                            y = L(t, 0),
                            b = L(t, o - 1);
                        return -1 === l || -1 === d ? q : !p && d >= 0 ? d : l <= v && s && Math.abs(p) > 1 ? b : l >= m && s && Math.abs(p) > 1 ? y : p && Math.abs(g) > 1 ? d : l <= v ? b : l > m ? y : p ? Math.abs(p) > 1 ? d : (o + d + p) % o : void 0
                    }
                },
                z = function(t) {
                    for (var e = Array(t.length), n = 0; n < t.length; ++n) e[n] = t[n];
                    return e
                },
                Z = function(t) {
                    return Array.isArray(t) ? t : [t]
                },
                H = function t(e) {
                    return e.parentNode ? t(e.parentNode) : e
                },
                W = function(t) {
                    return Z(t).filter(Boolean).reduce((function(t, e) {
                        var n = e.getAttribute(d);
                        return t.push.apply(t, n ? function(t) {
                            for (var e = new Set, n = t.length, r = 0; r < n; r += 1)
                                for (var o = r + 1; o < n; o += 1) {
                                    var i = t[r].compareDocumentPosition(t[o]);
                                    (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                                }
                            return t.filter((function(t, n) {
                                return !e.has(n)
                            }))
                        }(z(H(e).querySelectorAll('[data-focus-lock="' + n + '"]:not([' + p + '="disabled"])'))) : [e]), t
                    }), [])
                },
                Y = function(t, e) {
                    var n = t.tabIndex - e.tabIndex,
                        r = t.index - e.index;
                    if (n) {
                        if (!t.tabIndex) return 1;
                        if (!e.tabIndex) return -1
                    }
                    return n || r
                },
                X = function(t, e, n) {
                    return z(t).map((function(t, e) {
                        return {
                            node: t,
                            index: e,
                            tabIndex: n && -1 === t.tabIndex ? (t.dataset || {}).focusGuard ? 0 : -1 : t.tabIndex
                        }
                    })).filter((function(t) {
                        return !e || t.tabIndex >= 0
                    })).sort(Y)
                },
                G = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
                K = G + ", [data-focus-guard]",
                $ = function(t, e) {
                    return t.reduce((function(t, n) {
                        return t.concat(z(n.querySelectorAll(e ? K : G)), n.parentNode ? z(n.parentNode.querySelectorAll(G)).filter((function(t) {
                            return t === n
                        })) : [])
                    }), [])
                },
                J = function(t, e) {
                    return z(t).filter((function(t) {
                        return _(e, t)
                    })).filter((function(t) {
                        return function(t) {
                            return !(("INPUT" === t.tagName || "BUTTON" === t.tagName) && ("hidden" === t.type || t.disabled))
                        }(t)
                    }))
                },
                Q = function(t, e, n) {
                    return X(J($(t, n), e), !0, n)
                },
                tt = function(t, e) {
                    return X(J($(t), e), !1)
                },
                et = function(t, e) {
                    return J((n = t.querySelectorAll("[data-autofocus-inside]"), z(n).map((function(t) {
                        return $([t])
                    })).reduce((function(t, e) {
                        return t.concat(e)
                    }), [])), e);
                    var n
                },
                nt = function t(e, n) {
                    return void 0 === n && (n = []), n.push(e), e.parentNode && t(e.parentNode, n), n
                },
                rt = function(t, e) {
                    for (var n = nt(t), r = nt(e), o = 0; o < n.length; o += 1) {
                        var i = n[o];
                        if (r.indexOf(i) >= 0) return i
                    }
                    return !1
                },
                ot = function(t, e, n) {
                    var r = Z(t),
                        o = Z(e),
                        i = r[0],
                        a = !1;
                    return o.filter(Boolean).forEach((function(t) {
                        a = rt(a || t, t) || a, n.filter(Boolean).forEach((function(t) {
                            var e = rt(i, t);
                            e && (a = !a || e.contains(a) ? e : rt(e, a))
                        }))
                    })), a
                },
                it = function(t, e) {
                    var n = document && document.activeElement,
                        r = W(t).filter(V),
                        o = ot(n || t, t, r),
                        i = new Map,
                        a = tt(r, i),
                        s = Q(r, i).filter((function(t) {
                            var e = t.node;
                            return V(e)
                        }));
                    if (s[0] || (s = a)[0]) {
                        var u, c, l, f, d = tt([o], i).map((function(t) {
                                return t.node
                            })),
                            p = (u = d, c = s, l = new Map, c.forEach((function(t) {
                                return l.set(t.node, t)
                            })), u.map((function(t) {
                                return l.get(t)
                            })).filter(B)),
                            v = p.map((function(t) {
                                return t.node
                            })),
                            m = U(v, d, n, e);
                        if (m === q) {
                            var h = a.map((function(t) {
                                return t.node
                            })).filter((f = function(t, e) {
                                return t.reduce((function(t, n) {
                                    return t.concat(et(n, e))
                                }), [])
                            }(r, i), function(t) {
                                return t.autofocus || t.dataset && !!t.dataset.autofocus || f.indexOf(t) >= 0
                            }));
                            return {
                                node: h && h.length ? M(h) : M(v)
                            }
                        }
                        return void 0 === m ? m : p[m]
                    }
                },
                at = 0,
                st = !1,
                ut = function(t, e) {
                    var n, r = it(t, e);
                    if (!st && r) {
                        if (at > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), st = !0, void setTimeout((function() {
                            st = !1
                        }), 1);
                        at++, (n = r.node).focus(), "contentWindow" in n && n.contentWindow && n.contentWindow.focus(), at--
                    }
                },
                ct = function(t) {
                    return Boolean(z(t.querySelectorAll("iframe")).some((function(t) {
                        return t === document.activeElement
                    })))
                },
                lt = function(t) {
                    var e = document && document.activeElement;
                    return !(!e || e.dataset && e.dataset.focusGuard) && W(t).reduce((function(t, n) {
                        return t || n.contains(e) || ct(n)
                    }), !1)
                };

            function ft(t) {
                var e = window.setImmediate;
                void 0 !== e ? e(t) : setTimeout(t, 1)
            }
            var dt = function() {
                    return document && document.activeElement === document.body || document && z(document.querySelectorAll("[data-no-focus-lock]")).some((function(t) {
                        return t.contains(document.activeElement)
                    }))
                },
                pt = null,
                vt = null,
                mt = null,
                ht = !1,
                gt = function() {
                    return !0
                };

            function yt(t, e, n, r) {
                var o = null,
                    i = t;
                do {
                    var a = r[i];
                    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
                    else {
                        if (!a.lockItem) break;
                        if (i !== t) return;
                        o = null
                    }
                } while ((i += n) !== e);
                o && (o.node.tabIndex = 0)
            }
            var bt = function(t) {
                    return t && "current" in t ? t.current : t
                },
                xt = function() {
                    var t, e, n, r, o, i, a, s = !1;
                    if (pt) {
                        var u = pt,
                            c = u.observed,
                            l = u.persistentFocus,
                            f = u.autoFocus,
                            d = u.shards,
                            p = u.crossFrame,
                            v = c || mt && mt.portaledElement,
                            m = document && document.activeElement;
                        if (v) {
                            var h = [v].concat(d.map(bt).filter(Boolean));
                            if (m && ! function(t) {
                                    return (pt.whiteList || gt)(t)
                                }(m) || (l || (p ? Boolean(ht) : "meanwhile" === ht) || !dt() || !vt && f) && (!v || lt(h) || (a = m, mt && mt.portaledElement === a) || (document && !vt && m && !f ? (m.blur && m.blur(), document.body.focus()) : (s = ut(h, vt), mt = {})), ht = !1, vt = document && document.activeElement), document) {
                                var g = document && document.activeElement,
                                    y = (e = W(t = h).filter(V), n = ot(t, t, e), r = new Map, o = Q([n], r, !0), i = Q(e, r).filter((function(t) {
                                        var e = t.node;
                                        return V(e)
                                    })).map((function(t) {
                                        return t.node
                                    })), o.map((function(t) {
                                        var e = t.node;
                                        return {
                                            node: e,
                                            index: t.index,
                                            lockItem: i.indexOf(e) >= 0,
                                            guard: F(e)
                                        }
                                    }))),
                                    b = y.map((function(t) {
                                        return t.node
                                    })).indexOf(g);
                                b > -1 && (y.filter((function(t) {
                                    var e = t.guard,
                                        n = t.node;
                                    return e && n.dataset.focusAutoGuard
                                })).forEach((function(t) {
                                    return t.node.removeAttribute("tabIndex")
                                })), yt(b, y.length, 1, y), yt(b, -1, -1, y))
                            }
                        }
                    }
                    return s
                },
                wt = function(t) {
                    xt() && t && (t.stopPropagation(), t.preventDefault())
                },
                Ot = function() {
                    return ft(xt)
                },
                Et = function(t) {
                    var e = t.target,
                        n = t.currentTarget;
                    n.contains(e) || (mt = {
                        observerNode: n,
                        portaledElement: e
                    })
                },
                Pt = function() {
                    ht = "just", setTimeout((function() {
                        ht = "meanwhile"
                    }), 0)
                };
            O.assignSyncMedium(Et), E.assignMedium(Ot), P.assignMedium((function(t) {
                return t({
                    moveFocusInside: ut,
                    focusInside: lt
                })
            }));
            var St = I((function(t) {
                    return t.filter((function(t) {
                        return !t.disabled
                    }))
                }), (function(t) {
                    var e = t.slice(-1)[0];
                    e && !pt && (document.addEventListener("focusin", wt, !0), document.addEventListener("focusout", Ot), window.addEventListener("blur", Pt));
                    var n = pt,
                        r = n && e && e.id === n.id;
                    pt = e, n && !r && (n.onDeactivation(), t.filter((function(t) {
                        return t.id === n.id
                    })).length || n.returnFocus(!e)), e ? (vt = null, r && n.observed === e.observed || e.onActivation(), xt(), ft(xt)) : (document.removeEventListener("focusin", wt, !0), document.removeEventListener("focusout", Ot), window.removeEventListener("blur", Pt), vt = null)
                }))((function() {
                    return null
                })),
                Ct = a.forwardRef((function(t, e) {
                    return a.createElement(j, (0, f.Z)({
                        sideCar: St,
                        ref: e
                    }, t))
                })),
                kt = ((j.propTypes || {}).sideCar, Ct),
                jt = function(t) {
                    var e = t.initialFocusRef,
                        n = t.finalFocusRef,
                        r = t.contentRef,
                        o = t.restoreFocus,
                        s = t.children,
                        u = t.isDisabled,
                        c = t.autoFocus,
                        l = t.persistentFocus,
                        f = t.lockFocusAcrossFrames,
                        d = a.useCallback((function() {
                            if (null != e && e.current) e.current.focus();
                            else if (null != r && r.current) {
                                0 === (0, i.t5)(r.current).length && (0, i.T_)(r.current, {
                                    nextTick: !0
                                })
                            }
                        }), [e, r]),
                        p = a.useCallback((function() {
                            var t;
                            null == n || null == (t = n.current) || t.focus()
                        }), [n]),
                        v = o && !n;
                    return a.createElement(kt, {
                        crossFrame: f,
                        persistentFocus: l,
                        autoFocus: c,
                        disabled: u,
                        onActivation: d,
                        onDeactivation: p,
                        returnFocus: v
                    }, s)
                };
            i.Ts && (jt.displayName = "FocusLock");
            var At = n(41888),
                Tt = n(42944),
                It = n(67044),
                Rt = n(77649),
                Dt = n(71571),
                Mt = n(70500);
            var Lt = function() {
                return Lt = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, Lt.apply(this, arguments)
            };
            var Nt = "right-scroll-bar-position",
                _t = "width-before-scroll-bar",
                Ft = w(),
                Vt = function() {},
                Bt = a.forwardRef((function(t, e) {
                    var n = a.useRef(null),
                        r = a.useState({
                            onScrollCapture: Vt,
                            onWheelCapture: Vt,
                            onTouchMoveCapture: Vt
                        }),
                        o = r[0],
                        i = r[1],
                        s = t.forwardProps,
                        u = t.children,
                        c = t.className,
                        l = t.removeScrollBar,
                        f = t.enabled,
                        d = t.shards,
                        p = t.sideCar,
                        m = t.noIsolation,
                        h = t.inert,
                        g = t.allowPinchZoom,
                        y = t.as,
                        b = void 0 === y ? "div" : y,
                        x = function(t, e) {
                            var n = {};
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                            }
                            return n
                        }(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        w = p,
                        O = v([n, e]),
                        E = Lt({}, x, o);
                    return a.createElement(a.Fragment, null, f && a.createElement(w, {
                        sideCar: Ft,
                        removeScrollBar: l,
                        shards: d,
                        noIsolation: m,
                        inert: h,
                        setCallbacks: i,
                        allowPinchZoom: !!g,
                        lockRef: n
                    }), s ? a.cloneElement(a.Children.only(u), Lt({}, E, {
                        ref: O
                    })) : a.createElement(b, Lt({}, E, {
                        className: c,
                        ref: O
                    }), u))
                }));
            Bt.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, Bt.classNames = {
                fullWidth: _t,
                zeroRight: Nt
            };
            var qt, Ut = function(t) {
                var e = t.sideCar,
                    n = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                        }
                        return n
                    }(t, ["sideCar"]);
                if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = e.read();
                if (!r) throw new Error("Sidecar medium not found");
                return a.createElement(r, g({}, n))
            };
            Ut.isSideCarExport = !0;

            function zt() {
                if (!document) return null;
                var t = document.createElement("style");
                t.type = "text/css";
                var e = qt || n.nc;
                return e && t.setAttribute("nonce", e), t
            }
            var Zt = function() {
                    var t = 0,
                        e = null;
                    return {
                        add: function(n) {
                            var r, o;
                            0 == t && (e = zt()) && (o = n, (r = e).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(t) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
                            }(e)), t++
                        },
                        remove: function() {
                            !--t && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
                        }
                    }
                },
                Ht = function() {
                    var t, e = (t = Zt(), function(e) {
                        a.useEffect((function() {
                            return t.add(e),
                                function() {
                                    t.remove()
                                }
                        }), [])
                    });
                    return function(t) {
                        var n = t.styles;
                        return e(n), null
                    }
                },
                Wt = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                Yt = function(t) {
                    return parseInt(t || "", 10) || 0
                },
                Xt = function(t) {
                    if (void 0 === t && (t = "margin"), "undefined" == typeof window) return Wt;
                    var e = function(t) {
                            var e = window.getComputedStyle(document.body),
                                n = e["padding" === t ? "paddingLeft" : "marginLeft"],
                                r = e["padding" === t ? "paddingTop" : "marginTop"],
                                o = e["padding" === t ? "paddingRight" : "marginRight"];
                            return [Yt(n), Yt(r), Yt(o)]
                        }(t),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: e[0],
                        top: e[1],
                        right: e[2],
                        gap: Math.max(0, r - n + e[2] - e[0])
                    }
                },
                Gt = Ht(),
                Kt = function(t, e, n, r) {
                    var o = t.left,
                        i = t.top,
                        a = t.right,
                        s = t.gap;
                    return void 0 === n && (n = "margin"), "\n  .with-scroll-bars-hidden {\n   overflow: hidden " + r + ";\n   padding-right: " + s + "px " + r + ";\n  }\n  body {\n    overflow: hidden " + r + ";\n    " + [e && "position: relative " + r + ";", "margin" === n && "\n    padding-left: " + o + "px;\n    padding-top: " + i + "px;\n    padding-right: " + a + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + s + "px " + r + ";\n    ", "padding" === n && "padding-right: " + s + "px " + r + ";"].filter(Boolean).join("") + "\n  }\n  \n  ." + Nt + " {\n    right: " + s + "px " + r + ";\n  }\n  \n  ." + _t + " {\n    margin-right: " + s + "px " + r + ";\n  }\n  \n  ." + Nt + " ." + Nt + " {\n    right: 0 " + r + ";\n  }\n  \n  ." + _t + " ." + _t + " {\n    margin-right: 0 " + r + ";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: " + s + "px;\n  }\n"
                },
                $t = function(t) {
                    var e = a.useState(Xt(t.gapMode)),
                        n = e[0],
                        r = e[1];
                    a.useEffect((function() {
                        r(Xt(t.gapMode))
                    }), [t.gapMode]);
                    var o = t.noRelative,
                        i = t.noImportant,
                        s = t.gapMode,
                        u = void 0 === s ? "margin" : s;
                    return a.createElement(Gt, {
                        styles: Kt(n, !o, u, i ? "" : "!important")
                    })
                },
                Jt = function(t, e) {
                    var n = e;
                    do {
                        if (Qt(t, n)) {
                            var r = te(t, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                Qt = function(t, e) {
                    return "v" === t ? function(t) {
                        var e = window.getComputedStyle(t);
                        return "hidden" !== e.overflowY && !(e.overflowY === e.overflowX && "visible" === e.overflowY)
                    }(e) : function(t) {
                        var e = window.getComputedStyle(t);
                        return "hidden" !== e.overflowX && !(e.overflowY === e.overflowX && "visible" === e.overflowX)
                    }(e)
                },
                te = function(t, e) {
                    return "v" === t ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight] : function(t) {
                        return [t.scrollLeft, t.scrollWidth, t.clientWidth]
                    }(e);
                    var n
                },
                ee = !1;
            if ("undefined" != typeof window) try {
                var ne = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ee = !0, !0
                    }
                });
                window.addEventListener("test", ne, ne), window.removeEventListener("test", ne, ne)
            } catch ($e) {
                ee = !1
            }
            var re = !!ee && {
                    passive: !1
                },
                oe = function(t) {
                    return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
                },
                ie = function(t) {
                    return [t.deltaX, t.deltaY]
                },
                ae = function(t) {
                    return t && "current" in t ? t.current : t
                },
                se = function(t) {
                    return "\n  .block-interactivity-" + t + " {pointer-events: none;}\n  .allow-interactivity-" + t + " {pointer-events: all;}\n"
                },
                ue = 0,
                ce = [];
            var le, fe = (le = function(t) {
                    var e = a.useRef([]),
                        n = a.useRef([0, 0]),
                        r = a.useRef(),
                        o = a.useState(ue++)[0],
                        i = a.useState((function() {
                            return Ht()
                        }))[0],
                        s = a.useRef(t);
                    a.useEffect((function() {
                        s.current = t
                    }), [t]), a.useEffect((function() {
                        if (t.inert) {
                            document.body.classList.add("block-interactivity-" + o);
                            var e = [t.lockRef.current].concat((t.shards || []).map(ae)).filter(Boolean);
                            return e.forEach((function(t) {
                                    return t.classList.add("allow-interactivity-" + o)
                                })),
                                function() {
                                    document.body.classList.remove("block-interactivity-" + o), e.forEach((function(t) {
                                        return t.classList.remove("allow-interactivity-" + o)
                                    }))
                                }
                        }
                    }), [t.inert, t.lockRef.current, t.shards]);
                    var u = a.useCallback((function(t, e) {
                            if ("touches" in t && 2 === t.touches.length) return !s.current.allowPinchZoom;
                            var o, i = oe(t),
                                a = n.current,
                                u = "deltaX" in t ? t.deltaX : a[0] - i[0],
                                c = "deltaY" in t ? t.deltaY : a[1] - i[1],
                                l = t.target,
                                f = Math.abs(u) > Math.abs(c) ? "h" : "v",
                                d = Jt(f, l);
                            if (!d) return !0;
                            if (d ? o = f : (o = "v" === f ? "h" : "v", d = Jt(f, l)), !d) return !1;
                            if (!r.current && "changedTouches" in t && (u || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return function(t, e, n, r, o) {
                                var i = r,
                                    a = n.target,
                                    s = e.contains(a),
                                    u = !1,
                                    c = i > 0,
                                    l = 0,
                                    f = 0;
                                do {
                                    var d = te(t, a),
                                        p = d[0],
                                        v = d[1] - d[2] - p;
                                    (p || v) && Qt(t, a) && (l += v, f += p), a = a.parentNode
                                } while (!s && a !== document.body || s && (e.contains(a) || e === a));
                                return (c && (o && 0 === l || !o && i > l) || !c && (o && 0 === f || !o && -i > f)) && (u = !0), u
                            }(p, e, t, "h" === p ? u : c, !0)
                        }), []),
                        c = a.useCallback((function(t) {
                            var n = t;
                            if (ce.length && ce[ce.length - 1] === i) {
                                var r = "deltaY" in n ? ie(n) : oe(n),
                                    o = e.current.filter((function(t) {
                                        return t.name === n.type && t.target === n.target && (e = t.delta, o = r, e[0] === o[0] && e[1] === o[1]);
                                        var e, o
                                    }))[0];
                                if (o && o.should) n.preventDefault();
                                else if (!o) {
                                    var a = (s.current.shards || []).map(ae).filter(Boolean).filter((function(t) {
                                        return t.contains(n.target)
                                    }));
                                    (a.length > 0 ? u(n, a[0]) : !s.current.noIsolation) && n.preventDefault()
                                }
                            }
                        }), []),
                        l = a.useCallback((function(t, n, r, o) {
                            var i = {
                                name: t,
                                delta: n,
                                target: r,
                                should: o
                            };
                            e.current.push(i), setTimeout((function() {
                                e.current = e.current.filter((function(t) {
                                    return t !== i
                                }))
                            }), 1)
                        }), []),
                        f = a.useCallback((function(t) {
                            n.current = oe(t), r.current = void 0
                        }), []),
                        d = a.useCallback((function(e) {
                            l(e.type, ie(e), e.target, u(e, t.lockRef.current))
                        }), []),
                        p = a.useCallback((function(e) {
                            l(e.type, oe(e), e.target, u(e, t.lockRef.current))
                        }), []);
                    a.useEffect((function() {
                        return ce.push(i), t.setCallbacks({
                                onScrollCapture: d,
                                onWheelCapture: d,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", c, re), document.addEventListener("touchmove", c, re), document.addEventListener("touchstart", f, re),
                            function() {
                                ce = ce.filter((function(t) {
                                    return t !== i
                                })), document.removeEventListener("wheel", c, re), document.removeEventListener("touchmove", c, re), document.removeEventListener("touchstart", f, re)
                            }
                    }), []);
                    var v = t.removeScrollBar,
                        m = t.inert;
                    return a.createElement(a.Fragment, null, m ? a.createElement(i, {
                        styles: se(o)
                    }) : null, v ? a.createElement($t, {
                        gapMode: "margin"
                    }) : null)
                }, Ft.useMedium(le), Ut),
                de = a.forwardRef((function(t, e) {
                    return a.createElement(Bt, Lt({}, t, {
                        ref: e,
                        sideCar: fe
                    }))
                }));
            de.classNames = Bt.classNames;
            var pe = de,
                ve = n(95422),
                me = new WeakMap,
                he = new WeakMap,
                ge = {},
                ye = 0,
                be = function(t, e, n) {
                    void 0 === e && (e = function(t) {
                        return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body
                    }(t)), void 0 === n && (n = "data-aria-hidden");
                    var r = Array.isArray(t) ? t : [t];
                    ge[n] || (ge[n] = new WeakMap);
                    var o = ge[n],
                        i = [],
                        a = new Set;
                    r.forEach((function t(e) {
                        e && !a.has(e) && (a.add(e), t(e.parentNode))
                    }));
                    return function t(e) {
                            !e || r.indexOf(e) >= 0 || Array.prototype.forEach.call(e.children, (function(e) {
                                if (a.has(e)) t(e);
                                else {
                                    var r = e.getAttribute("aria-hidden"),
                                        s = null !== r && "false" !== r,
                                        u = (me.get(e) || 0) + 1,
                                        c = (o.get(e) || 0) + 1;
                                    me.set(e, u), o.set(e, c), i.push(e), 1 === u && s && he.set(e, !0), 1 === c && e.setAttribute(n, "true"), s || e.setAttribute("aria-hidden", "true")
                                }
                            }))
                        }(e), a.clear(), ye++,
                        function() {
                            i.forEach((function(t) {
                                var e = me.get(t) - 1,
                                    r = o.get(t) - 1;
                                me.set(t, e), o.set(t, r), e || (he.has(t) || t.removeAttribute("aria-hidden"), he.delete(t)), r || t.removeAttribute(n)
                            })), --ye || (me = new WeakMap, me = new WeakMap, he = new WeakMap, ge = {})
                        }
                };

            function xe(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }

            function we() {
                return we = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, we.apply(this, arguments)
            }
            var Oe = ["preset"],
                Ee = {
                    slideInBottom: we({}, Tt.Xc, {
                        custom: {
                            offsetY: 16,
                            reverse: !0
                        }
                    }),
                    slideInRight: we({}, Tt.Xc, {
                        custom: {
                            offsetX: 16,
                            reverse: !0
                        }
                    }),
                    scale: we({}, Tt.Qh, {
                        custom: {
                            initialScale: .95,
                            reverse: !0
                        }
                    }),
                    none: {}
                },
                Pe = (0, o.m$)(Rt.E.section),
                Se = a.forwardRef((function(t, e) {
                    var n = t.preset,
                        r = xe(t, Oe),
                        o = Ee[n];
                    return a.createElement(Pe, we({
                        ref: e
                    }, o, r))
                })),
                Ce = new(function() {
                    function t() {
                        this.modals = void 0, this.modals = []
                    }
                    var e = t.prototype;
                    return e.add = function(t) {
                        this.modals.push(t)
                    }, e.remove = function(t) {
                        this.modals = this.modals.filter((function(e) {
                            return e !== t
                        }))
                    }, e.isTopModal = function(t) {
                        return this.modals[this.modals.length - 1] === t
                    }, t
                }());

            function ke(t) {
                var e, n, r, o = t.isOpen,
                    s = t.onClose,
                    u = t.id,
                    c = t.closeOnOverlayClick,
                    l = void 0 === c || c,
                    f = t.closeOnEsc,
                    d = void 0 === f || f,
                    p = t.useInert,
                    v = void 0 === p || p,
                    m = t.onOverlayClick,
                    h = t.onEsc,
                    g = (0, a.useRef)(null),
                    y = (0, a.useRef)(null),
                    b = (0, ve.ZS)(u, "chakra-modal", "chakra-modal--header", "chakra-modal--body"),
                    x = b[0],
                    w = b[1],
                    O = b[2];
                n = o && v, r = (e = g).current, (0, a.useEffect)((function() {
                        if (e.current && n) return be(e.current)
                    }), [n, e, r]),
                    function(t, e) {
                        (0, a.useEffect)((function() {
                            return e && Ce.add(t),
                                function() {
                                    Ce.remove(t)
                                }
                        }), [e, t])
                    }(g, o);
                var E = (0, a.useRef)(null),
                    P = (0, a.useCallback)((function(t) {
                        E.current = t.target
                    }), []),
                    S = (0, a.useCallback)((function(t) {
                        "Escape" === t.key && (t.stopPropagation(), d && (null == s || s()), null == h || h())
                    }), [d, s, h]),
                    C = (0, a.useState)(!1),
                    k = C[0],
                    j = C[1],
                    A = (0, a.useState)(!1),
                    T = A[0],
                    I = A[1],
                    R = (0, a.useCallback)((function(t, e) {
                        return void 0 === t && (t = {}), void 0 === e && (e = null), we({
                            role: "dialog"
                        }, t, {
                            ref: (0, It.lq)(e, g),
                            id: x,
                            tabIndex: -1,
                            "aria-modal": !0,
                            "aria-labelledby": k ? w : void 0,
                            "aria-describedby": T ? O : void 0,
                            onClick: (0, i.v0)(t.onClick, (function(t) {
                                return t.stopPropagation()
                            }))
                        })
                    }), [O, T, x, w, k]),
                    D = (0, a.useCallback)((function(t) {
                        t.stopPropagation(), E.current === t.target && Ce.isTopModal(g) && (l && (null == s || s()), null == m || m())
                    }), [s, l, m]),
                    M = (0, a.useCallback)((function(t, e) {
                        return void 0 === t && (t = {}), void 0 === e && (e = null), we({}, t, {
                            ref: (0, It.lq)(e, y),
                            onClick: (0, i.v0)(t.onClick, D),
                            onKeyDown: (0, i.v0)(t.onKeyDown, S),
                            onMouseDown: (0, i.v0)(t.onMouseDown, P)
                        })
                    }), [S, P, D]);
                return {
                    isOpen: o,
                    onClose: s,
                    headerId: w,
                    bodyId: O,
                    setBodyMounted: I,
                    setHeaderMounted: j,
                    dialogRef: g,
                    overlayRef: y,
                    getDialogProps: R,
                    getDialogContainerProps: M
                }
            }
            var je = ["className", "children", "containerProps"],
                Ae = ["className", "transition"],
                Te = ["className"],
                Ie = ["className"],
                Re = ["className"],
                De = ["onClick", "className"],
                Me = (0, It.kr)({
                    strict: !0,
                    name: "ModalContext",
                    errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
                }),
                Le = Me[0],
                Ne = Me[1],
                _e = function(t) {
                    var e = t.portalProps,
                        n = t.children,
                        r = t.autoFocus,
                        i = t.trapFocus,
                        s = t.initialFocusRef,
                        u = t.finalFocusRef,
                        c = t.returnFocusOnClose,
                        l = t.blockScrollOnMount,
                        f = t.allowPinchZoom,
                        d = t.preserveScrollBarGap,
                        p = t.motionPreset,
                        v = t.lockFocusAcrossFrames,
                        m = (0, o.jC)("Modal", t),
                        h = we({}, ke(t), {
                            autoFocus: r,
                            trapFocus: i,
                            initialFocusRef: s,
                            finalFocusRef: u,
                            returnFocusOnClose: c,
                            blockScrollOnMount: l,
                            allowPinchZoom: f,
                            preserveScrollBarGap: d,
                            motionPreset: p,
                            lockFocusAcrossFrames: v
                        });
                    return a.createElement(Le, {
                        value: h
                    }, a.createElement(o.Fo, {
                        value: m
                    }, a.createElement(Dt.M, null, h.isOpen && a.createElement(At.h_, e, n))))
                };
            _e.defaultProps = {
                lockFocusAcrossFrames: !0,
                returnFocusOnClose: !0,
                scrollBehavior: "outside",
                trapFocus: !0,
                autoFocus: !0,
                blockScrollOnMount: !0,
                allowPinchZoom: !1,
                motionPreset: "scale"
            }, i.Ts && (_e.displayName = "Modal");
            var Fe = (0, o.m$)(Rt.E.div),
                Ve = (0, o.Gp)((function(t, e) {
                    var n = t.className,
                        r = t.children,
                        s = t.containerProps,
                        u = xe(t, je),
                        c = Ne(),
                        l = c.getDialogProps,
                        f = c.getDialogContainerProps,
                        d = l(u, e),
                        p = f(s),
                        v = (0, i.cx)("chakra-modal__content", n),
                        m = (0, o.yK)(),
                        h = we({
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            width: "100%",
                            outline: 0
                        }, m.dialog),
                        g = we({
                            display: "flex",
                            width: "100vw",
                            height: "100vh",
                            "@supports(height: -webkit-fill-available)": {
                                height: "-webkit-fill-available"
                            },
                            position: "fixed",
                            left: 0,
                            top: 0
                        }, m.dialogContainer),
                        y = Ne().motionPreset;
                    return a.createElement(Be, null, a.createElement(o.m$.div, we({}, p, {
                        className: "chakra-modal__content-container",
                        tabIndex: -1,
                        __css: g
                    }), a.createElement(Se, we({
                        preset: y,
                        className: v
                    }, d, {
                        __css: h
                    }), r)))
                }));

            function Be(t) {
                var e = Ne(),
                    n = e.autoFocus,
                    r = e.trapFocus,
                    o = e.dialogRef,
                    i = e.initialFocusRef,
                    s = e.blockScrollOnMount,
                    u = e.allowPinchZoom,
                    c = e.finalFocusRef,
                    l = e.returnFocusOnClose,
                    f = e.preserveScrollBarGap,
                    d = e.lockFocusAcrossFrames,
                    p = (0, Mt.oO)(),
                    v = p[0],
                    m = p[1];
                return a.useEffect((function() {
                    !v && m && setTimeout(m)
                }), [v, m]), a.createElement(jt, {
                    autoFocus: n,
                    isDisabled: !r,
                    initialFocusRef: i,
                    finalFocusRef: c,
                    restoreFocus: l,
                    contentRef: o,
                    lockFocusAcrossFrames: d
                }, a.createElement(pe, {
                    removeScrollBar: !f,
                    allowPinchZoom: u,
                    enabled: s,
                    forwardProps: !0
                }, t.children))
            }
            i.Ts && (Ve.displayName = "ModalContent");
            var qe = (0, o.Gp)((function(t, e) {
                var n = t.className;
                t.transition;
                var r = xe(t, Ae),
                    s = (0, i.cx)("chakra-modal__overlay", n),
                    u = we({
                        pos: "fixed",
                        left: "0",
                        top: "0",
                        w: "100vw",
                        h: "100vh"
                    }, (0, o.yK)().overlay),
                    c = "none" === Ne().motionPreset ? {} : Tt.uf;
                return a.createElement(Fe, we({}, c, {
                    __css: u,
                    ref: e,
                    className: s
                }, r))
            }));
            i.Ts && (qe.displayName = "ModalOverlay");
            var Ue = (0, o.Gp)((function(t, e) {
                var n = t.className,
                    r = xe(t, Te),
                    s = Ne(),
                    u = s.headerId,
                    c = s.setHeaderMounted;
                a.useEffect((function() {
                    return c(!0),
                        function() {
                            return c(!1)
                        }
                }), [c]);
                var l = (0, i.cx)("chakra-modal__header", n),
                    f = we({
                        flex: 0
                    }, (0, o.yK)().header);
                return a.createElement(o.m$.header, we({
                    ref: e,
                    className: l,
                    id: u
                }, r, {
                    __css: f
                }))
            }));
            i.Ts && (Ue.displayName = "ModalHeader");
            var ze = (0, o.Gp)((function(t, e) {
                var n = t.className,
                    r = xe(t, Ie),
                    s = Ne(),
                    u = s.bodyId,
                    c = s.setBodyMounted;
                a.useEffect((function() {
                    return c(!0),
                        function() {
                            return c(!1)
                        }
                }), [c]);
                var l = (0, i.cx)("chakra-modal__body", n),
                    f = (0, o.yK)();
                return a.createElement(o.m$.div, we({
                    ref: e,
                    className: l,
                    id: u
                }, r, {
                    __css: f.body
                }))
            }));
            i.Ts && (ze.displayName = "ModalBody");
            var Ze = (0, o.Gp)((function(t, e) {
                var n = t.className,
                    r = xe(t, Re),
                    s = (0, i.cx)("chakra-modal__footer", n),
                    u = we({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }, (0, o.yK)().footer);
                return a.createElement(o.m$.footer, we({
                    ref: e
                }, r, {
                    __css: u,
                    className: s
                }))
            }));
            i.Ts && (Ze.displayName = "ModalFooter");
            var He = (0, o.Gp)((function(t, e) {
                var n = t.onClick,
                    r = t.className,
                    s = xe(t, De),
                    u = Ne().onClose,
                    c = (0, i.cx)("chakra-modal__close-btn", r),
                    f = (0, o.yK)();
                return a.createElement(l, we({
                    ref: e,
                    __css: f.closeButton,
                    className: c,
                    onClick: (0, i.v0)(n, (function(t) {
                        t.stopPropagation(), u()
                    }))
                }, s))
            }));
            i.Ts && (He.displayName = "ModalCloseButton");
            var We = ["className", "children"],
                Ye = (0, It.kr)(),
                Xe = (Ye[0], Ye[1]);
            var Ge = (0, o.m$)(Tt.Mi),
                Ke = (0, o.Gp)((function(t, e) {
                    var n = t.className,
                        r = t.children,
                        s = xe(t, We),
                        u = Ne(),
                        c = u.getDialogProps,
                        l = u.getDialogContainerProps,
                        f = u.isOpen,
                        d = c(s, e),
                        p = l(),
                        v = (0, i.cx)("chakra-modal__content", n),
                        m = (0, o.yK)(),
                        h = we({
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            width: "100%",
                            outline: 0
                        }, m.dialog),
                        g = we({
                            display: "flex",
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            left: 0,
                            top: 0
                        }, m.dialogContainer),
                        y = Xe().placement;
                    return a.createElement(o.m$.div, we({}, p, {
                        className: "chakra-modal__content-container",
                        __css: g
                    }), a.createElement(Be, null, a.createElement(Ge, we({
                        direction: y,
                        in: f,
                        className: v
                    }, d, {
                        __css: h
                    }), r)))
                }));
            i.Ts && (Ke.displayName = "DrawerContent")
        },
        95216: function(t, e, n) {
            "use strict";
            n.d(e, {
                u: function() {
                    return Yt
                }
            });
            var r = n(67044);

            function o(t) {
                if (null == t) return window;
                if ("[object Window]" !== t.toString()) {
                    var e = t.ownerDocument;
                    return e && e.defaultView || window
                }
                return t
            }

            function i(t) {
                return t instanceof o(t).Element || t instanceof Element
            }

            function a(t) {
                return t instanceof o(t).HTMLElement || t instanceof HTMLElement
            }

            function s(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof o(t).ShadowRoot || t instanceof ShadowRoot)
            }
            var u = Math.max,
                c = Math.min,
                l = Math.round;

            function f(t, e) {
                void 0 === e && (e = !1);
                var n = t.getBoundingClientRect(),
                    r = 1,
                    o = 1;
                if (a(t) && e) {
                    var i = t.offsetHeight,
                        s = t.offsetWidth;
                    s > 0 && (r = l(n.width) / s || 1), i > 0 && (o = l(n.height) / i || 1)
                }
                return {
                    width: n.width / r,
                    height: n.height / o,
                    top: n.top / o,
                    right: n.right / r,
                    bottom: n.bottom / o,
                    left: n.left / r,
                    x: n.left / r,
                    y: n.top / o
                }
            }

            function d(t) {
                var e = o(t);
                return {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function p(t) {
                return t ? (t.nodeName || "").toLowerCase() : null
            }

            function v(t) {
                return ((i(t) ? t.ownerDocument : t.document) || window.document).documentElement
            }

            function m(t) {
                return f(v(t)).left + d(t).scrollLeft
            }

            function h(t) {
                return o(t).getComputedStyle(t)
            }

            function g(t) {
                var e = h(t),
                    n = e.overflow,
                    r = e.overflowX,
                    o = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function y(t, e, n) {
                void 0 === n && (n = !1);
                var r, i, s = a(e),
                    u = a(e) && function(t) {
                        var e = t.getBoundingClientRect(),
                            n = l(e.width) / t.offsetWidth || 1,
                            r = l(e.height) / t.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(e),
                    c = v(e),
                    h = f(t, u),
                    y = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    b = {
                        x: 0,
                        y: 0
                    };
                return (s || !s && !n) && (("body" !== p(e) || g(c)) && (y = (r = e) !== o(r) && a(r) ? {
                    scrollLeft: (i = r).scrollLeft,
                    scrollTop: i.scrollTop
                } : d(r)), a(e) ? ((b = f(e, !0)).x += e.clientLeft, b.y += e.clientTop) : c && (b.x = m(c))), {
                    x: h.left + y.scrollLeft - b.x,
                    y: h.top + y.scrollTop - b.y,
                    width: h.width,
                    height: h.height
                }
            }

            function b(t) {
                var e = f(t),
                    n = t.offsetWidth,
                    r = t.offsetHeight;
                return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: n,
                    height: r
                }
            }

            function x(t) {
                return "html" === p(t) ? t : t.assignedSlot || t.parentNode || (s(t) ? t.host : null) || v(t)
            }

            function w(t) {
                return ["html", "body", "#document"].indexOf(p(t)) >= 0 ? t.ownerDocument.body : a(t) && g(t) ? t : w(x(t))
            }

            function O(t, e) {
                var n;
                void 0 === e && (e = []);
                var r = w(t),
                    i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    a = o(r),
                    s = i ? [a].concat(a.visualViewport || [], g(r) ? r : []) : r,
                    u = e.concat(s);
                return i ? u : u.concat(O(x(s)))
            }

            function E(t) {
                return ["table", "td", "th"].indexOf(p(t)) >= 0
            }

            function P(t) {
                return a(t) && "fixed" !== h(t).position ? t.offsetParent : null
            }

            function S(t) {
                for (var e = o(t), n = P(t); n && E(n) && "static" === h(n).position;) n = P(n);
                return n && ("html" === p(n) || "body" === p(n) && "static" === h(n).position) ? e : n || function(t) {
                    var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && a(t) && "fixed" === h(t).position) return null;
                    for (var n = x(t); a(n) && ["html", "body"].indexOf(p(n)) < 0;) {
                        var r = h(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || e && "filter" === r.willChange || e && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(t) || e
            }
            var C = "top",
                k = "bottom",
                j = "right",
                A = "left",
                T = "auto",
                I = [C, k, j, A],
                R = "start",
                D = "end",
                M = "viewport",
                L = "popper",
                N = I.reduce((function(t, e) {
                    return t.concat([e + "-" + R, e + "-" + D])
                }), []),
                _ = [].concat(I, [T]).reduce((function(t, e) {
                    return t.concat([e, e + "-" + R, e + "-" + D])
                }), []),
                F = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function V(t) {
                var e = new Map,
                    n = new Set,
                    r = [];

                function o(t) {
                    n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                        if (!n.has(t)) {
                            var r = e.get(t);
                            r && o(r)
                        }
                    })), r.push(t)
                }
                return t.forEach((function(t) {
                    e.set(t.name, t)
                })), t.forEach((function(t) {
                    n.has(t.name) || o(t)
                })), r
            }
            var B = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function q() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return !e.some((function(t) {
                    return !(t && "function" == typeof t.getBoundingClientRect)
                }))
            }

            function U(t) {
                void 0 === t && (t = {});
                var e = t,
                    n = e.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = e.defaultOptions,
                    a = void 0 === o ? B : o;
                return function(t, e, n) {
                    void 0 === n && (n = a);
                    var o, s, u = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, B, a),
                            modifiersData: {},
                            elements: {
                                reference: t,
                                popper: e
                            },
                            attributes: {},
                            styles: {}
                        },
                        c = [],
                        l = !1,
                        f = {
                            state: u,
                            setOptions: function(n) {
                                var o = "function" == typeof n ? n(u.options) : n;
                                d(), u.options = Object.assign({}, a, u.options, o), u.scrollParents = {
                                    reference: i(t) ? O(t) : t.contextElement ? O(t.contextElement) : [],
                                    popper: O(e)
                                };
                                var s = function(t) {
                                    var e = V(t);
                                    return F.reduce((function(t, n) {
                                        return t.concat(e.filter((function(t) {
                                            return t.phase === n
                                        })))
                                    }), [])
                                }(function(t) {
                                    var e = t.reduce((function(t, e) {
                                        var n = t[e.name];
                                        return t[e.name] = n ? Object.assign({}, n, e, {
                                            options: Object.assign({}, n.options, e.options),
                                            data: Object.assign({}, n.data, e.data)
                                        }) : e, t
                                    }), {});
                                    return Object.keys(e).map((function(t) {
                                        return e[t]
                                    }))
                                }([].concat(r, u.options.modifiers)));
                                return u.orderedModifiers = s.filter((function(t) {
                                    return t.enabled
                                })), u.orderedModifiers.forEach((function(t) {
                                    var e = t.name,
                                        n = t.options,
                                        r = void 0 === n ? {} : n,
                                        o = t.effect;
                                    if ("function" == typeof o) {
                                        var i = o({
                                                state: u,
                                                name: e,
                                                instance: f,
                                                options: r
                                            }),
                                            a = function() {};
                                        c.push(i || a)
                                    }
                                })), f.update()
                            },
                            forceUpdate: function() {
                                if (!l) {
                                    var t = u.elements,
                                        e = t.reference,
                                        n = t.popper;
                                    if (q(e, n)) {
                                        u.rects = {
                                            reference: y(e, S(n), "fixed" === u.options.strategy),
                                            popper: b(n)
                                        }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach((function(t) {
                                            return u.modifiersData[t.name] = Object.assign({}, t.data)
                                        }));
                                        for (var r = 0; r < u.orderedModifiers.length; r++)
                                            if (!0 !== u.reset) {
                                                var o = u.orderedModifiers[r],
                                                    i = o.fn,
                                                    a = o.options,
                                                    s = void 0 === a ? {} : a,
                                                    c = o.name;
                                                "function" == typeof i && (u = i({
                                                    state: u,
                                                    options: s,
                                                    name: c,
                                                    instance: f
                                                }) || u)
                                            } else u.reset = !1, r = -1
                                    }
                                }
                            },
                            update: (o = function() {
                                return new Promise((function(t) {
                                    f.forceUpdate(), t(u)
                                }))
                            }, function() {
                                return s || (s = new Promise((function(t) {
                                    Promise.resolve().then((function() {
                                        s = void 0, t(o())
                                    }))
                                }))), s
                            }),
                            destroy: function() {
                                d(), l = !0
                            }
                        };
                    if (!q(t, e)) return f;

                    function d() {
                        c.forEach((function(t) {
                            return t()
                        })), c = []
                    }
                    return f.setOptions(n).then((function(t) {
                        !l && n.onFirstUpdate && n.onFirstUpdate(t)
                    })), f
                }
            }
            var z = {
                passive: !0
            };

            function Z(t) {
                return t.split("-")[0]
            }

            function H(t) {
                return t.split("-")[1]
            }

            function W(t) {
                return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
            }

            function Y(t) {
                var e, n = t.reference,
                    r = t.element,
                    o = t.placement,
                    i = o ? Z(o) : null,
                    a = o ? H(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case C:
                        e = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case k:
                        e = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case j:
                        e = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case A:
                        e = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        e = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? W(i) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                        case R:
                            e[c] = e[c] - (n[l] / 2 - r[l] / 2);
                            break;
                        case D:
                            e[c] = e[c] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return e
            }
            var X = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function G(t) {
                var e, n = t.popper,
                    r = t.popperRect,
                    i = t.placement,
                    a = t.variation,
                    s = t.offsets,
                    u = t.position,
                    c = t.gpuAcceleration,
                    f = t.adaptive,
                    d = t.roundOffsets,
                    p = t.isFixed,
                    m = s.x,
                    g = void 0 === m ? 0 : m,
                    y = s.y,
                    b = void 0 === y ? 0 : y,
                    x = "function" == typeof d ? d({
                        x: g,
                        y: b
                    }) : {
                        x: g,
                        y: b
                    };
                g = x.x, b = x.y;
                var w = s.hasOwnProperty("x"),
                    O = s.hasOwnProperty("y"),
                    E = A,
                    P = C,
                    T = window;
                if (f) {
                    var I = S(n),
                        R = "clientHeight",
                        M = "clientWidth";
                    if (I === o(n) && "static" !== h(I = v(n)).position && "absolute" === u && (R = "scrollHeight", M = "scrollWidth"), I = I, i === C || (i === A || i === j) && a === D) P = k, b -= (p && T.visualViewport ? T.visualViewport.height : I[R]) - r.height, b *= c ? 1 : -1;
                    if (i === A || (i === C || i === k) && a === D) E = j, g -= (p && T.visualViewport ? T.visualViewport.width : I[M]) - r.width, g *= c ? 1 : -1
                }
                var L, N = Object.assign({
                        position: u
                    }, f && X),
                    _ = !0 === d ? function(t) {
                        var e = t.x,
                            n = t.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: l(e * r) / r || 0,
                            y: l(n * r) / r || 0
                        }
                    }({
                        x: g,
                        y: b
                    }) : {
                        x: g,
                        y: b
                    };
                return g = _.x, b = _.y, c ? Object.assign({}, N, ((L = {})[P] = O ? "0" : "", L[E] = w ? "0" : "", L.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", L)) : Object.assign({}, N, ((e = {})[P] = O ? b + "px" : "", e[E] = w ? g + "px" : "", e.transform = "", e))
            }
            var K = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = t.name,
                            o = n.offset,
                            i = void 0 === o ? [0, 0] : o,
                            a = _.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var r = Z(t),
                                        o = [A, C].indexOf(r) >= 0 ? -1 : 1,
                                        i = "function" == typeof n ? n(Object.assign({}, e, {
                                            placement: t
                                        })) : n,
                                        a = i[0],
                                        s = i[1];
                                    return a = a || 0, s = (s || 0) * o, [A, j].indexOf(r) >= 0 ? {
                                        x: s,
                                        y: a
                                    } : {
                                        x: a,
                                        y: s
                                    }
                                }(n, e.rects, i), t
                            }), {}),
                            s = a[e.placement],
                            u = s.x,
                            c = s.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = a
                    }
                },
                $ = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function J(t) {
                return t.replace(/left|right|bottom|top/g, (function(t) {
                    return $[t]
                }))
            }
            var Q = {
                start: "end",
                end: "start"
            };

            function tt(t) {
                return t.replace(/start|end/g, (function(t) {
                    return Q[t]
                }))
            }

            function et(t, e) {
                var n = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (n && s(n)) {
                    var r = e;
                    do {
                        if (r && t.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function nt(t) {
                return Object.assign({}, t, {
                    left: t.x,
                    top: t.y,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                })
            }

            function rt(t, e) {
                return e === M ? nt(function(t) {
                    var e = o(t),
                        n = v(t),
                        r = e.visualViewport,
                        i = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        u = 0;
                    return r && (i = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, u = r.offsetTop)), {
                        width: i,
                        height: a,
                        x: s + m(t),
                        y: u
                    }
                }(t)) : i(e) ? function(t) {
                    var e = f(t);
                    return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
                }(e) : nt(function(t) {
                    var e, n = v(t),
                        r = d(t),
                        o = null == (e = t.ownerDocument) ? void 0 : e.body,
                        i = u(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = u(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        s = -r.scrollLeft + m(t),
                        c = -r.scrollTop;
                    return "rtl" === h(o || n).direction && (s += u(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: s,
                        y: c
                    }
                }(v(t)))
            }

            function ot(t, e, n) {
                var r = "clippingParents" === e ? function(t) {
                        var e = O(x(t)),
                            n = ["absolute", "fixed"].indexOf(h(t).position) >= 0 && a(t) ? S(t) : t;
                        return i(n) ? e.filter((function(t) {
                            return i(t) && et(t, n) && "body" !== p(t)
                        })) : []
                    }(t) : [].concat(e),
                    o = [].concat(r, [n]),
                    s = o[0],
                    l = o.reduce((function(e, n) {
                        var r = rt(t, n);
                        return e.top = u(r.top, e.top), e.right = c(r.right, e.right), e.bottom = c(r.bottom, e.bottom), e.left = u(r.left, e.left), e
                    }), rt(t, s));
                return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
            }

            function it(t) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, t)
            }

            function at(t, e) {
                return e.reduce((function(e, n) {
                    return e[n] = t, e
                }), {})
            }

            function st(t, e) {
                void 0 === e && (e = {});
                var n = e,
                    r = n.placement,
                    o = void 0 === r ? t.placement : r,
                    a = n.boundary,
                    s = void 0 === a ? "clippingParents" : a,
                    u = n.rootBoundary,
                    c = void 0 === u ? M : u,
                    l = n.elementContext,
                    d = void 0 === l ? L : l,
                    p = n.altBoundary,
                    m = void 0 !== p && p,
                    h = n.padding,
                    g = void 0 === h ? 0 : h,
                    y = it("number" != typeof g ? g : at(g, I)),
                    b = d === L ? "reference" : L,
                    x = t.rects.popper,
                    w = t.elements[m ? b : d],
                    O = ot(i(w) ? w : w.contextElement || v(t.elements.popper), s, c),
                    E = f(t.elements.reference),
                    P = Y({
                        reference: E,
                        element: x,
                        strategy: "absolute",
                        placement: o
                    }),
                    S = nt(Object.assign({}, x, P)),
                    A = d === L ? S : E,
                    T = {
                        top: O.top - A.top + y.top,
                        bottom: A.bottom - O.bottom + y.bottom,
                        left: O.left - A.left + y.left,
                        right: A.right - O.right + y.right
                    },
                    R = t.modifiersData.offset;
                if (d === L && R) {
                    var D = R[o];
                    Object.keys(T).forEach((function(t) {
                        var e = [j, k].indexOf(t) >= 0 ? 1 : -1,
                            n = [C, k].indexOf(t) >= 0 ? "y" : "x";
                        T[t] += D[n] * e
                    }))
                }
                return T
            }

            function ut(t, e, n) {
                return u(t, c(e, n))
            }
            var ct = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        r = t.name,
                        o = n.mainAxis,
                        i = void 0 === o || o,
                        a = n.altAxis,
                        s = void 0 !== a && a,
                        l = n.boundary,
                        f = n.rootBoundary,
                        d = n.altBoundary,
                        p = n.padding,
                        v = n.tether,
                        m = void 0 === v || v,
                        h = n.tetherOffset,
                        g = void 0 === h ? 0 : h,
                        y = st(e, {
                            boundary: l,
                            rootBoundary: f,
                            padding: p,
                            altBoundary: d
                        }),
                        x = Z(e.placement),
                        w = H(e.placement),
                        O = !w,
                        E = W(x),
                        P = "x" === E ? "y" : "x",
                        T = e.modifiersData.popperOffsets,
                        I = e.rects.reference,
                        D = e.rects.popper,
                        M = "function" == typeof g ? g(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : g,
                        L = "number" == typeof M ? {
                            mainAxis: M,
                            altAxis: M
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, M),
                        N = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                        _ = {
                            x: 0,
                            y: 0
                        };
                    if (T) {
                        if (i) {
                            var F, V = "y" === E ? C : A,
                                B = "y" === E ? k : j,
                                q = "y" === E ? "height" : "width",
                                U = T[E],
                                z = U + y[V],
                                Y = U - y[B],
                                X = m ? -D[q] / 2 : 0,
                                G = w === R ? I[q] : D[q],
                                K = w === R ? -D[q] : -I[q],
                                $ = e.elements.arrow,
                                J = m && $ ? b($) : {
                                    width: 0,
                                    height: 0
                                },
                                Q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                tt = Q[V],
                                et = Q[B],
                                nt = ut(0, I[q], J[q]),
                                rt = O ? I[q] / 2 - X - nt - tt - L.mainAxis : G - nt - tt - L.mainAxis,
                                ot = O ? -I[q] / 2 + X + nt + et + L.mainAxis : K + nt + et + L.mainAxis,
                                it = e.elements.arrow && S(e.elements.arrow),
                                at = it ? "y" === E ? it.clientTop || 0 : it.clientLeft || 0 : 0,
                                ct = null != (F = null == N ? void 0 : N[E]) ? F : 0,
                                lt = U + ot - ct,
                                ft = ut(m ? c(z, U + rt - ct - at) : z, U, m ? u(Y, lt) : Y);
                            T[E] = ft, _[E] = ft - U
                        }
                        if (s) {
                            var dt, pt = "x" === E ? C : A,
                                vt = "x" === E ? k : j,
                                mt = T[P],
                                ht = "y" === P ? "height" : "width",
                                gt = mt + y[pt],
                                yt = mt - y[vt],
                                bt = -1 !== [C, A].indexOf(x),
                                xt = null != (dt = null == N ? void 0 : N[P]) ? dt : 0,
                                wt = bt ? gt : mt - I[ht] - D[ht] - xt + L.altAxis,
                                Ot = bt ? mt + I[ht] + D[ht] - xt - L.altAxis : yt,
                                Et = m && bt ? function(t, e, n) {
                                    var r = ut(t, e, n);
                                    return r > n ? n : r
                                }(wt, mt, Ot) : ut(m ? wt : gt, mt, m ? Ot : yt);
                            T[P] = Et, _[P] = Et - mt
                        }
                        e.modifiersData[r] = _
                    }
                },
                requiresIfExists: ["offset"]
            };
            var lt = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e, n = t.state,
                        r = t.name,
                        o = t.options,
                        i = n.elements.arrow,
                        a = n.modifiersData.popperOffsets,
                        s = Z(n.placement),
                        u = W(s),
                        c = [A, j].indexOf(s) >= 0 ? "height" : "width";
                    if (i && a) {
                        var l = function(t, e) {
                                return it("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                    placement: e.placement
                                })) : t) ? t : at(t, I))
                            }(o.padding, n),
                            f = b(i),
                            d = "y" === u ? C : A,
                            p = "y" === u ? k : j,
                            v = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
                            m = a[u] - n.rects.reference[u],
                            h = S(i),
                            g = h ? "y" === u ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                            y = v / 2 - m / 2,
                            x = l[d],
                            w = g - f[c] - l[p],
                            O = g / 2 - f[c] / 2 + y,
                            E = ut(x, O, w),
                            P = u;
                        n.modifiersData[r] = ((e = {})[P] = E, e.centerOffset = E - O, e)
                    }
                },
                effect: function(t) {
                    var e = t.state,
                        n = t.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && et(e.elements.popper, r) && (e.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function ft(t, e, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: t.top - e.height - n.y,
                    right: t.right - e.width + n.x,
                    bottom: t.bottom - e.height + n.y,
                    left: t.left - e.width - n.x
                }
            }

            function dt(t) {
                return [C, j, k, A].some((function(e) {
                    return t[e] >= 0
                }))
            }
            var pt = U({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(t) {
                            var e = t.state,
                                n = t.instance,
                                r = t.options,
                                i = r.scroll,
                                a = void 0 === i || i,
                                s = r.resize,
                                u = void 0 === s || s,
                                c = o(e.elements.popper),
                                l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                            return a && l.forEach((function(t) {
                                    t.addEventListener("scroll", n.update, z)
                                })), u && c.addEventListener("resize", n.update, z),
                                function() {
                                    a && l.forEach((function(t) {
                                        t.removeEventListener("scroll", n.update, z)
                                    })), u && c.removeEventListener("resize", n.update, z)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(t) {
                            var e = t.state,
                                n = t.name;
                            e.modifiersData[n] = Y({
                                reference: e.rects.reference,
                                element: e.rects.popper,
                                strategy: "absolute",
                                placement: e.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(t) {
                            var e = t.state,
                                n = t.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                s = n.roundOffsets,
                                u = void 0 === s || s,
                                c = {
                                    placement: Z(e.placement),
                                    variation: H(e.placement),
                                    popper: e.elements.popper,
                                    popperRect: e.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === e.options.strategy
                                };
                            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, G(Object.assign({}, c, {
                                offsets: e.modifiersData.popperOffsets,
                                position: e.options.strategy,
                                adaptive: a,
                                roundOffsets: u
                            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, G(Object.assign({}, c, {
                                offsets: e.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: u
                            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                                "data-popper-placement": e.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(t) {
                            var e = t.state;
                            Object.keys(e.elements).forEach((function(t) {
                                var n = e.styles[t] || {},
                                    r = e.attributes[t] || {},
                                    o = e.elements[t];
                                a(o) && p(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(t) {
                                    var e = r[t];
                                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                                })))
                            }))
                        },
                        effect: function(t) {
                            var e = t.state,
                                n = {
                                    popper: {
                                        position: e.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(e.elements).forEach((function(t) {
                                        var r = e.elements[t],
                                            o = e.attributes[t] || {},
                                            i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                                return t[e] = "", t
                                            }), {});
                                        a(r) && p(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(t) {
                                            r.removeAttribute(t)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, K, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(t) {
                            var e = t.state,
                                n = t.options,
                                r = t.name;
                            if (!e.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, v = void 0 === p || p, m = n.allowedAutoPlacements, h = e.options.placement, g = Z(h), y = u || (g === h || !v ? [J(h)] : function(t) {
                                        if (Z(t) === T) return [];
                                        var e = J(t);
                                        return [tt(t), e, tt(e)]
                                    }(h)), b = [h].concat(y).reduce((function(t, n) {
                                        return t.concat(Z(n) === T ? function(t, e) {
                                            void 0 === e && (e = {});
                                            var n = e,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                u = n.allowedAutoPlacements,
                                                c = void 0 === u ? _ : u,
                                                l = H(r),
                                                f = l ? s ? N : N.filter((function(t) {
                                                    return H(t) === l
                                                })) : I,
                                                d = f.filter((function(t) {
                                                    return c.indexOf(t) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var p = d.reduce((function(e, n) {
                                                return e[n] = st(t, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[Z(n)], e
                                            }), {});
                                            return Object.keys(p).sort((function(t, e) {
                                                return p[t] - p[e]
                                            }))
                                        }(e, {
                                            placement: n,
                                            boundary: l,
                                            rootBoundary: f,
                                            padding: c,
                                            flipVariations: v,
                                            allowedAutoPlacements: m
                                        }) : n)
                                    }), []), x = e.rects.reference, w = e.rects.popper, O = new Map, E = !0, P = b[0], S = 0; S < b.length; S++) {
                                    var D = b[S],
                                        M = Z(D),
                                        L = H(D) === R,
                                        F = [C, k].indexOf(M) >= 0,
                                        V = F ? "width" : "height",
                                        B = st(e, {
                                            placement: D,
                                            boundary: l,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: c
                                        }),
                                        q = F ? L ? j : A : L ? k : C;
                                    x[V] > w[V] && (q = J(q));
                                    var U = J(q),
                                        z = [];
                                    if (i && z.push(B[M] <= 0), s && z.push(B[q] <= 0, B[U] <= 0), z.every((function(t) {
                                            return t
                                        }))) {
                                        P = D, E = !1;
                                        break
                                    }
                                    O.set(D, z)
                                }
                                if (E)
                                    for (var W = function(t) {
                                            var e = b.find((function(e) {
                                                var n = O.get(e);
                                                if (n) return n.slice(0, t).every((function(t) {
                                                    return t
                                                }))
                                            }));
                                            if (e) return P = e, "break"
                                        }, Y = v ? 3 : 1; Y > 0; Y--) {
                                        if ("break" === W(Y)) break
                                    }
                                e.placement !== P && (e.modifiersData[r]._skip = !0, e.placement = P, e.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, ct, lt, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(t) {
                            var e = t.state,
                                n = t.name,
                                r = e.rects.reference,
                                o = e.rects.popper,
                                i = e.modifiersData.preventOverflow,
                                a = st(e, {
                                    elementContext: "reference"
                                }),
                                s = st(e, {
                                    altBoundary: !0
                                }),
                                u = ft(a, r),
                                c = ft(s, o, i),
                                l = dt(u),
                                f = dt(c);
                            e.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: c,
                                isReferenceHidden: l,
                                hasPopperEscaped: f
                            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                                "data-popper-reference-hidden": l,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                vt = n(67294);

            function mt() {
                return mt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, mt.apply(this, arguments)
            }
            var ht = function(t, e) {
                    return {
                        var: t,
                        varRef: e ? "var(" + t + ", " + e + ")" : "var(" + t + ")"
                    }
                },
                gt = {
                    arrowShadowColor: ht("--popper-arrow-shadow-color"),
                    arrowSize: ht("--popper-arrow-size", "8px"),
                    arrowSizeHalf: ht("--popper-arrow-size-half"),
                    arrowBg: ht("--popper-arrow-bg"),
                    transformOrigin: ht("--popper-transform-origin"),
                    arrowOffset: ht("--popper-arrow-offset")
                };
            var yt = {
                    top: "bottom center",
                    "top-start": "bottom left",
                    "top-end": "bottom right",
                    bottom: "top center",
                    "bottom-start": "top left",
                    "bottom-end": "top right",
                    left: "right center",
                    "left-start": "right top",
                    "left-end": "right bottom",
                    right: "left center",
                    "right-start": "left top",
                    "right-end": "left bottom"
                },
                bt = {
                    scroll: !0,
                    resize: !0
                };
            var xt = {
                    name: "matchWidth",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    fn: function(t) {
                        var e = t.state;
                        e.styles.popper.width = e.rects.reference.width + "px"
                    },
                    effect: function(t) {
                        var e = t.state;
                        return function() {
                            var t = e.elements.reference;
                            e.elements.popper.style.width = t.offsetWidth + "px"
                        }
                    }
                },
                wt = {
                    name: "transformOrigin",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Ot(e)
                    },
                    effect: function(t) {
                        var e = t.state;
                        return function() {
                            Ot(e)
                        }
                    }
                },
                Ot = function(t) {
                    var e;
                    t.elements.popper.style.setProperty(gt.transformOrigin.var, (e = t.placement, yt[e]))
                },
                Et = {
                    name: "positionArrow",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function(t) {
                        var e = t.state;
                        Pt(e)
                    }
                },
                Pt = function(t) {
                    var e;
                    if (t.placement) {
                        var n = St(t.placement);
                        if (null != (e = t.elements) && e.arrow && n) {
                            var r, o;
                            Object.assign(t.elements.arrow.style, ((r = {})[n.property] = n.value, r.width = gt.arrowSize.varRef, r.height = gt.arrowSize.varRef, r.zIndex = -1, r));
                            var i = ((o = {})[gt.arrowSizeHalf.var] = "calc(" + gt.arrowSize.varRef + " / 2)", o[gt.arrowOffset.var] = "calc(" + gt.arrowSizeHalf.varRef + " * -1)", o);
                            for (var a in i) t.elements.arrow.style.setProperty(a, i[a])
                        }
                    }
                },
                St = function(t) {
                    return t.startsWith("top") ? {
                        property: "bottom",
                        value: gt.arrowOffset.varRef
                    } : t.startsWith("bottom") ? {
                        property: "top",
                        value: gt.arrowOffset.varRef
                    } : t.startsWith("left") ? {
                        property: "right",
                        value: gt.arrowOffset.varRef
                    } : t.startsWith("right") ? {
                        property: "left",
                        value: gt.arrowOffset.varRef
                    } : void 0
                },
                Ct = {
                    name: "innerArrow",
                    enabled: !0,
                    phase: "main",
                    requires: ["arrow"],
                    fn: function(t) {
                        var e = t.state;
                        kt(e)
                    },
                    effect: function(t) {
                        var e = t.state;
                        return function() {
                            kt(e)
                        }
                    }
                },
                kt = function(t) {
                    if (t.elements.arrow) {
                        var e, n = t.elements.arrow.querySelector("[data-popper-arrow-inner]");
                        if (n) Object.assign(n.style, {
                            transform: "rotate(45deg)",
                            background: gt.arrowBg.varRef,
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "inherit",
                            boxShadow: (e = t.placement, e.includes("top") ? "1px 1px 1px 0 var(--popper-arrow-shadow-color)" : e.includes("bottom") ? "-1px -1px 1px 0 var(--popper-arrow-shadow-color)" : e.includes("right") ? "-1px 1px 1px 0 var(--popper-arrow-shadow-color)" : e.includes("left") ? "1px -1px 1px 0 var(--popper-arrow-shadow-color)" : void 0)
                        })
                    }
                },
                jt = {
                    "start-start": {
                        ltr: "left-start",
                        rtl: "right-start"
                    },
                    "start-end": {
                        ltr: "left-end",
                        rtl: "right-end"
                    },
                    "end-start": {
                        ltr: "right-start",
                        rtl: "left-start"
                    },
                    "end-end": {
                        ltr: "right-end",
                        rtl: "left-end"
                    },
                    start: {
                        ltr: "left",
                        rtl: "right"
                    },
                    end: {
                        ltr: "right",
                        rtl: "left"
                    }
                },
                At = {
                    "auto-start": "auto-end",
                    "auto-end": "auto-start",
                    "top-start": "top-end",
                    "top-end": "top-start",
                    "bottom-start": "bottom-end",
                    "bottom-end": "bottom-start"
                };
            var Tt = ["size", "shadowColor", "bg", "style"];

            function It(t) {
                void 0 === t && (t = {});
                var e = t,
                    n = e.enabled,
                    o = void 0 === n || n,
                    i = e.modifiers,
                    a = e.placement,
                    s = void 0 === a ? "bottom" : a,
                    u = e.strategy,
                    c = void 0 === u ? "absolute" : u,
                    l = e.arrowPadding,
                    f = void 0 === l ? 8 : l,
                    d = e.eventListeners,
                    p = void 0 === d || d,
                    v = e.offset,
                    m = e.gutter,
                    h = void 0 === m ? 8 : m,
                    g = e.flip,
                    y = void 0 === g || g,
                    b = e.boundary,
                    x = void 0 === b ? "clippingParents" : b,
                    w = e.preventOverflow,
                    O = void 0 === w || w,
                    E = e.matchWidth,
                    P = e.direction,
                    S = void 0 === P ? "ltr" : P,
                    C = (0, vt.useRef)(null),
                    k = (0, vt.useRef)(null),
                    j = (0, vt.useRef)(null),
                    A = function(t, e) {
                        var n, r;
                        void 0 === e && (e = "ltr");
                        var o = (null == (n = jt[t]) ? void 0 : n[e]) || t;
                        return "ltr" === e ? o : null != (r = At[t]) ? r : o
                    }(s, S),
                    T = (0, vt.useRef)((function() {})),
                    I = (0, vt.useCallback)((function() {
                        var t;
                        o && C.current && k.current && (null == T.current || T.current(), j.current = pt(C.current, k.current, {
                            placement: A,
                            modifiers: [Ct, Et, wt, mt({}, xt, {
                                enabled: !!E
                            }), mt({
                                name: "eventListeners"
                            }, (t = p, "object" == typeof t ? {
                                enabled: !0,
                                options: mt({}, bt, t)
                            } : {
                                enabled: t,
                                options: bt
                            })), {
                                name: "arrow",
                                options: {
                                    padding: f
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: null != v ? v : [0, h]
                                }
                            }, {
                                name: "flip",
                                enabled: !!y,
                                options: {
                                    padding: 8
                                }
                            }, {
                                name: "preventOverflow",
                                enabled: !!O,
                                options: {
                                    boundary: x
                                }
                            }].concat(null != i ? i : []),
                            strategy: c
                        }), j.current.forceUpdate(), T.current = j.current.destroy)
                    }), [A, o, i, E, p, f, v, h, y, O, x, c]);
                (0, vt.useEffect)((function() {
                    return function() {
                        var t;
                        C.current || k.current || (null == (t = j.current) || t.destroy(), j.current = null)
                    }
                }), []);
                var R = (0, vt.useCallback)((function(t) {
                        C.current = t, I()
                    }), [I]),
                    D = (0, vt.useCallback)((function(t, e) {
                        return void 0 === t && (t = {}), void 0 === e && (e = null), mt({}, t, {
                            ref: (0, r.lq)(R, e)
                        })
                    }), [R]),
                    M = (0, vt.useCallback)((function(t) {
                        k.current = t, I()
                    }), [I]),
                    L = (0, vt.useCallback)((function(t, e) {
                        return void 0 === t && (t = {}), void 0 === e && (e = null), mt({}, t, {
                            ref: (0, r.lq)(M, e),
                            style: mt({}, t.style, {
                                position: c,
                                minWidth: "max-content",
                                inset: "0 auto auto 0"
                            })
                        })
                    }), [c, M]),
                    N = (0, vt.useCallback)((function(t, e) {
                        void 0 === t && (t = {}), void 0 === e && (e = null);
                        var n = t;
                        return n.size, n.shadowColor, n.bg, n.style, mt({}, function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(n, Tt), {
                            ref: e,
                            "data-popper-arrow": "",
                            style: Rt(t)
                        })
                    }), []),
                    _ = (0, vt.useCallback)((function(t, e) {
                        return void 0 === t && (t = {}), void 0 === e && (e = null), mt({}, t, {
                            ref: e,
                            "data-popper-arrow-inner": ""
                        })
                    }), []);
                return {
                    update: function() {
                        var t;
                        null == (t = j.current) || t.update()
                    },
                    forceUpdate: function() {
                        var t;
                        null == (t = j.current) || t.forceUpdate()
                    },
                    transformOrigin: gt.transformOrigin.varRef,
                    referenceRef: R,
                    popperRef: M,
                    getPopperProps: L,
                    getArrowProps: N,
                    getArrowInnerProps: _,
                    getReferenceProps: D
                }
            }

            function Rt(t) {
                var e = t.size,
                    n = t.shadowColor,
                    r = t.bg,
                    o = mt({}, t.style, {
                        position: "absolute"
                    });
                return e && (o["--popper-arrow-size"] = e), n && (o["--popper-arrow-shadow-color"] = n), r && (o["--popper-arrow-bg"] = r), o
            }
            var Dt = n(41888),
                Mt = n(45082),
                Lt = n(68316),
                Nt = n(32662),
                _t = n(77649),
                Ft = n(71571),
                Vt = n(95422),
                Bt = n(65247);

            function qt() {
                return qt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, qt.apply(this, arguments)
            }

            function Ut(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            var zt = {
                    exit: {
                        scale: .85,
                        opacity: 0,
                        transition: {
                            opacity: {
                                duration: .15,
                                easings: "easeInOut"
                            },
                            scale: {
                                duration: .2,
                                easings: "easeInOut"
                            }
                        }
                    },
                    enter: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            opacity: {
                                easings: "easeOut",
                                duration: .2
                            },
                            scale: {
                                duration: .2,
                                ease: [.175, .885, .4, 1.1]
                            }
                        }
                    }
                },
                Zt = ["openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "onOpen", "onClose", "placement", "id", "isOpen", "defaultIsOpen", "arrowSize", "arrowShadowColor", "arrowPadding", "modifiers", "isDisabled", "gutter", "offset", "direction"];
            var Ht = ["children", "label", "shouldWrapChildren", "aria-label", "hasArrow", "bg", "portalProps", "background", "backgroundColor", "bgColor"],
                Wt = (0, Mt.m$)(_t.E.div),
                Yt = (0, Mt.Gp)((function(t, e) {
                    var n, o, i = (0, Mt.mq)("Tooltip", t),
                        a = (0, Mt.Lr)(t),
                        s = (0, Mt.Fg)(),
                        u = a.children,
                        c = a.label,
                        l = a.shouldWrapChildren,
                        f = a["aria-label"],
                        d = a.hasArrow,
                        p = a.bg,
                        v = a.portalProps,
                        m = a.background,
                        h = a.backgroundColor,
                        g = a.bgColor,
                        y = Ut(a, Ht),
                        b = null != (n = null != (o = null != m ? m : h) ? o : p) ? n : g;
                    b && (i.bg = b, i[gt.arrowBg.var] = (0, Lt.K1)(s, "colors", b));
                    var x, w = function(t) {
                        void 0 === t && (t = {});
                        var e = t,
                            n = e.openDelay,
                            o = void 0 === n ? 0 : n,
                            i = e.closeDelay,
                            a = void 0 === i ? 0 : i,
                            s = e.closeOnClick,
                            u = void 0 === s || s,
                            c = e.closeOnMouseDown,
                            l = e.onOpen,
                            f = e.onClose,
                            d = e.placement,
                            p = e.id,
                            v = e.isOpen,
                            m = e.defaultIsOpen,
                            h = e.arrowSize,
                            g = void 0 === h ? 10 : h,
                            y = e.arrowShadowColor,
                            b = e.arrowPadding,
                            x = e.modifiers,
                            w = e.isDisabled,
                            O = e.gutter,
                            E = e.offset,
                            P = e.direction,
                            S = Ut(e, Zt),
                            C = (0, Vt.qY)({
                                isOpen: v,
                                defaultIsOpen: m,
                                onOpen: l,
                                onClose: f
                            }),
                            k = C.isOpen,
                            j = C.onOpen,
                            A = C.onClose,
                            T = It({
                                enabled: k,
                                placement: d,
                                arrowPadding: b,
                                modifiers: x,
                                gutter: O,
                                offset: E,
                                direction: P
                            }),
                            I = T.referenceRef,
                            R = T.getPopperProps,
                            D = T.getArrowInnerProps,
                            M = T.getArrowProps,
                            L = (0, Vt.Me)(p, "tooltip"),
                            N = vt.useRef(null),
                            _ = vt.useRef(),
                            F = vt.useRef(),
                            V = vt.useCallback((function() {
                                w || (_.current = window.setTimeout(j, o))
                            }), [w, j, o]),
                            B = vt.useCallback((function() {
                                _.current && clearTimeout(_.current), F.current = window.setTimeout(A, a)
                            }), [a, A]),
                            q = vt.useCallback((function() {
                                u && B()
                            }), [u, B]),
                            U = vt.useCallback((function() {
                                c && B()
                            }), [c, B]),
                            z = vt.useCallback((function(t) {
                                k && "Escape" === t.key && B()
                            }), [k, B]);
                        (0, Bt.b)("keydown", z), vt.useEffect((function() {
                            return function() {
                                clearTimeout(_.current), clearTimeout(F.current)
                            }
                        }), []), (0, Bt.b)("mouseleave", B, (function() {
                            return N.current
                        }));
                        var Z = vt.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), qt({}, t, {
                                    ref: (0, r.lq)(N, e, I),
                                    onMouseEnter: (0, Lt.v0)(t.onMouseEnter, V),
                                    onClick: (0, Lt.v0)(t.onClick, q),
                                    onMouseDown: (0, Lt.v0)(t.onMouseDown, U),
                                    onFocus: (0, Lt.v0)(t.onFocus, V),
                                    onBlur: (0, Lt.v0)(t.onBlur, B),
                                    "aria-describedby": k ? L : void 0
                                })
                            }), [V, B, U, k, L, q, I]),
                            H = vt.useCallback((function(t, e) {
                                var n;
                                return void 0 === t && (t = {}), void 0 === e && (e = null), R(qt({}, t, {
                                    style: qt({}, t.style, (n = {}, n[gt.arrowSize.var] = g ? (0, Lt.px)(g) : void 0, n[gt.arrowShadowColor.var] = y, n))
                                }), e)
                            }), [R, g, y]),
                            W = vt.useCallback((function(t, e) {
                                return void 0 === t && (t = {}), void 0 === e && (e = null), qt({
                                    ref: e
                                }, S, t, {
                                    id: L,
                                    role: "tooltip",
                                    style: qt({}, t.style, {
                                        position: "relative",
                                        transformOrigin: gt.transformOrigin.varRef
                                    })
                                })
                            }), [S, L]);
                        return {
                            isOpen: k,
                            show: V,
                            hide: B,
                            getTriggerProps: Z,
                            getTooltipProps: W,
                            getTooltipPositionerProps: H,
                            getArrowProps: M,
                            getArrowInnerProps: D
                        }
                    }(qt({}, y, {
                        direction: s.direction
                    }));
                    if ((0, Lt.HD)(u) || l) x = vt.createElement(Mt.m$.span, qt({
                        tabIndex: 0
                    }, w.getTriggerProps()), u);
                    else {
                        var O = vt.Children.only(u);
                        x = vt.cloneElement(O, w.getTriggerProps(O.props, O.ref))
                    }
                    var E = !!f,
                        P = w.getTooltipProps({}, e),
                        S = E ? (0, Lt.CE)(P, ["role", "id"]) : P,
                        C = (0, Lt.ei)(P, ["role", "id"]);
                    return c ? vt.createElement(vt.Fragment, null, x, vt.createElement(Ft.M, null, w.isOpen && vt.createElement(Dt.h_, v, vt.createElement(Mt.m$.div, qt({}, w.getTooltipPositionerProps(), {
                        __css: {
                            zIndex: i.zIndex,
                            pointerEvents: "none"
                        }
                    }), vt.createElement(Wt, qt({
                        variants: zt
                    }, S, {
                        initial: "exit",
                        animate: "enter",
                        exit: "exit",
                        __css: i
                    }), c, E && vt.createElement(Nt.TX, C, f), d && vt.createElement(Mt.m$.div, {
                        "data-popper-arrow": !0,
                        className: "chakra-tooltip__arrow-wrapper"
                    }, vt.createElement(Mt.m$.div, {
                        "data-popper-arrow-inner": !0,
                        className: "chakra-tooltip__arrow",
                        __css: {
                            bg: i.bg
                        }
                    }))))))) : vt.createElement(vt.Fragment, null, u)
                }));
            Lt.Ts && (Yt.displayName = "Tooltip")
        },
        42944: function(t, e, n) {
            "use strict";
            n.d(e, {
                Mi: function() {
                    return D
                },
                Qh: function() {
                    return j
                },
                UO: function() {
                    return E
                },
                Xc: function() {
                    return L
                },
                uf: function() {
                    return S
                }
            });
            var r = n(68316),
                o = n(19189),
                i = n.n(o),
                a = n(71571),
                s = n(77649),
                u = n(67294);

            function c(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }

            function l() {
                return l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, l.apply(this, arguments)
            }
            var f = {
                    ease: [.25, .1, .25, 1],
                    easeIn: [.4, 0, 1, 1],
                    easeOut: [0, 0, .2, 1],
                    easeInOut: [.4, 0, .2, 1]
                },
                d = {
                    position: {
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%"
                    },
                    enter: {
                        x: 0,
                        y: 0
                    },
                    exit: {
                        x: "-100%",
                        y: 0
                    }
                },
                p = {
                    position: {
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%"
                    },
                    enter: {
                        x: 0,
                        y: 0
                    },
                    exit: {
                        x: "100%",
                        y: 0
                    }
                },
                v = {
                    position: {
                        top: 0,
                        left: 0,
                        right: 0,
                        maxWidth: "100vw"
                    },
                    enter: {
                        x: 0,
                        y: 0
                    },
                    exit: {
                        x: 0,
                        y: "-100%"
                    }
                },
                m = {
                    position: {
                        bottom: 0,
                        left: 0,
                        right: 0,
                        maxWidth: "100vw"
                    },
                    enter: {
                        x: 0,
                        y: 0
                    },
                    exit: {
                        x: 0,
                        y: "100%"
                    }
                };

            function h(t) {
                var e;
                switch (null != (e = null == t ? void 0 : t.direction) ? e : "right") {
                    case "right":
                    default:
                        return p;
                    case "left":
                        return d;
                    case "bottom":
                        return m;
                    case "top":
                        return v
                }
            }
            var g = {
                    enter: {
                        duration: .2,
                        ease: f.easeOut
                    },
                    exit: {
                        duration: .1,
                        ease: f.easeIn
                    }
                },
                y = function(t, e) {
                    return l({}, t, {
                        delay: (0, r.hj)(e) ? e : null == e ? void 0 : e.enter
                    })
                },
                b = function(t, e) {
                    return l({}, t, {
                        delay: (0, r.hj)(e) ? e : null == e ? void 0 : e.exit
                    })
                },
                x = ["in", "unmountOnExit", "animateOpacity", "startingHeight", "endingHeight", "style", "className", "transition", "transitionEnd"],
                w = {
                    exit: {
                        height: {
                            duration: .2,
                            ease: f.ease
                        },
                        opacity: {
                            duration: .3,
                            ease: f.ease
                        }
                    },
                    enter: {
                        height: {
                            duration: .3,
                            ease: f.ease
                        },
                        opacity: {
                            duration: .4,
                            ease: f.ease
                        }
                    }
                },
                O = {
                    exit: function(t) {
                        var e, n, r = t.animateOpacity,
                            o = t.startingHeight,
                            i = t.transition,
                            a = t.transitionEnd,
                            s = t.delay;
                        return l({}, r && {
                            opacity: (n = o, null != n && parseInt(n.toString(), 10) > 0 ? 1 : 0)
                        }, {
                            overflow: "hidden",
                            height: o,
                            transitionEnd: null == a ? void 0 : a.exit,
                            transition: null != (e = null == i ? void 0 : i.exit) ? e : b(w.exit, s)
                        })
                    },
                    enter: function(t) {
                        var e, n = t.animateOpacity,
                            r = t.endingHeight,
                            o = t.transition,
                            i = t.transitionEnd,
                            a = t.delay;
                        return l({}, n && {
                            opacity: 1
                        }, {
                            height: r,
                            transitionEnd: null == i ? void 0 : i.enter,
                            transition: null != (e = null == o ? void 0 : o.enter) ? e : y(w.enter, a)
                        })
                    }
                },
                E = u.forwardRef((function(t, e) {
                    var n = t.in,
                        o = t.unmountOnExit,
                        f = t.animateOpacity,
                        d = void 0 === f || f,
                        p = t.startingHeight,
                        v = void 0 === p ? 0 : p,
                        m = t.endingHeight,
                        h = void 0 === m ? "auto" : m,
                        g = t.style,
                        y = t.className,
                        b = t.transition,
                        w = t.transitionEnd,
                        E = c(t, x),
                        P = u.useState(!1),
                        S = P[0],
                        C = P[1];
                    u.useEffect((function() {
                        var t = setTimeout((function() {
                            C(!0)
                        }));
                        return function() {
                            return clearTimeout(t)
                        }
                    }), []), (0, r.ZK)({
                        condition: Boolean(v > 0 && o),
                        message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
                    });
                    var k = parseFloat(v.toString()) > 0,
                        j = {
                            startingHeight: v,
                            endingHeight: h,
                            animateOpacity: d,
                            transition: S ? b : {
                                enter: {
                                    duration: 0
                                }
                            },
                            transitionEnd: i()(w, {
                                enter: {
                                    overflow: "initial"
                                },
                                exit: o ? void 0 : {
                                    display: k ? "block" : "none"
                                }
                            })
                        },
                        A = !o || n,
                        T = n || o ? "enter" : "exit";
                    return u.createElement(a.M, {
                        initial: !1,
                        custom: j
                    }, A && u.createElement(s.E.div, l({
                        ref: e
                    }, E, {
                        className: (0, r.cx)("chakra-collapse", y),
                        style: l({
                            overflow: "hidden",
                            display: "block"
                        }, g),
                        custom: j,
                        variants: O,
                        initial: !!o && "exit",
                        animate: T,
                        exit: "exit"
                    })))
                }));
            r.Ts && (E.displayName = "Collapse");
            var P = ["unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"],
                S = {
                    initial: "exit",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        enter: function(t) {
                            var e, n = void 0 === t ? {} : t,
                                r = n.transition,
                                o = n.transitionEnd,
                                i = n.delay;
                            return {
                                opacity: 1,
                                transition: null != (e = null == r ? void 0 : r.enter) ? e : y(g.enter, i),
                                transitionEnd: null == o ? void 0 : o.enter
                            }
                        },
                        exit: function(t) {
                            var e, n = void 0 === t ? {} : t,
                                r = n.transition,
                                o = n.transitionEnd,
                                i = n.delay;
                            return {
                                opacity: 0,
                                transition: null != (e = null == r ? void 0 : r.exit) ? e : b(g.exit, i),
                                transitionEnd: null == o ? void 0 : o.exit
                            }
                        }
                    }
                },
                C = u.forwardRef((function(t, e) {
                    var n = t.unmountOnExit,
                        o = t.in,
                        i = t.className,
                        f = t.transition,
                        d = t.transitionEnd,
                        p = t.delay,
                        v = c(t, P),
                        m = o || n ? "enter" : "exit",
                        h = !n || o && n,
                        g = {
                            transition: f,
                            transitionEnd: d,
                            delay: p
                        };
                    return u.createElement(a.M, {
                        custom: g
                    }, h && u.createElement(s.E.div, l({
                        ref: e,
                        className: (0, r.cx)("chakra-fade", i),
                        custom: g
                    }, S, {
                        animate: m
                    }, v)))
                }));
            r.Ts && (C.displayName = "Fade");
            var k = ["unmountOnExit", "in", "reverse", "initialScale", "className", "transition", "transitionEnd", "delay"],
                j = {
                    initial: "exit",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        exit: function(t) {
                            var e, n = t.reverse,
                                r = t.initialScale,
                                o = t.transition,
                                i = t.transitionEnd,
                                a = t.delay;
                            return l({
                                opacity: 0
                            }, n ? {
                                scale: r,
                                transitionEnd: null == i ? void 0 : i.exit
                            } : {
                                transitionEnd: l({
                                    scale: r
                                }, null == i ? void 0 : i.exit)
                            }, {
                                transition: null != (e = null == o ? void 0 : o.exit) ? e : b(g.exit, a)
                            })
                        },
                        enter: function(t) {
                            var e, n = t.transitionEnd,
                                r = t.transition,
                                o = t.delay;
                            return {
                                opacity: 1,
                                scale: 1,
                                transition: null != (e = null == r ? void 0 : r.enter) ? e : y(g.enter, o),
                                transitionEnd: null == n ? void 0 : n.enter
                            }
                        }
                    }
                },
                A = u.forwardRef((function(t, e) {
                    var n = t.unmountOnExit,
                        o = t.in,
                        i = t.reverse,
                        f = void 0 === i || i,
                        d = t.initialScale,
                        p = void 0 === d ? .95 : d,
                        v = t.className,
                        m = t.transition,
                        h = t.transitionEnd,
                        g = t.delay,
                        y = c(t, k),
                        b = !n || o && n,
                        x = o || n ? "enter" : "exit",
                        w = {
                            initialScale: p,
                            reverse: f,
                            transition: m,
                            transitionEnd: h,
                            delay: g
                        };
                    return u.createElement(a.M, {
                        custom: w
                    }, b && u.createElement(s.E.div, l({
                        ref: e,
                        className: (0, r.cx)("chakra-offset-slide", v)
                    }, j, {
                        animate: x,
                        custom: w
                    }, y)))
                }));
            r.Ts && (A.displayName = "ScaleFade");
            var T = ["direction", "style", "unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"],
                I = {
                    exit: {
                        duration: .15,
                        ease: f.easeInOut
                    },
                    enter: {
                        type: "spring",
                        damping: 25,
                        stiffness: 180
                    }
                },
                R = {
                    exit: function(t) {
                        var e, n = t.direction,
                            r = t.transition,
                            o = t.transitionEnd,
                            i = t.delay;
                        return l({}, h({
                            direction: n
                        }).exit, {
                            transition: null != (e = null == r ? void 0 : r.exit) ? e : b(I.exit, i),
                            transitionEnd: null == o ? void 0 : o.exit
                        })
                    },
                    enter: function(t) {
                        var e, n = t.direction,
                            r = t.transitionEnd,
                            o = t.transition,
                            i = t.delay;
                        return l({}, h({
                            direction: n
                        }).enter, {
                            transition: null != (e = null == o ? void 0 : o.enter) ? e : y(I.enter, i),
                            transitionEnd: null == r ? void 0 : r.enter
                        })
                    }
                },
                D = u.forwardRef((function(t, e) {
                    var n = t.direction,
                        o = void 0 === n ? "right" : n,
                        i = t.style,
                        f = t.unmountOnExit,
                        d = t.in,
                        p = t.className,
                        v = t.transition,
                        m = t.transitionEnd,
                        g = t.delay,
                        y = c(t, T),
                        b = h({
                            direction: o
                        }),
                        x = Object.assign({
                            position: "fixed"
                        }, b.position, i),
                        w = !f || d && f,
                        O = d || f ? "enter" : "exit",
                        E = {
                            transitionEnd: m,
                            transition: v,
                            direction: o,
                            delay: g
                        };
                    return u.createElement(a.M, {
                        custom: E
                    }, w && u.createElement(s.E.div, l({}, y, {
                        ref: e,
                        initial: "exit",
                        className: (0, r.cx)("chakra-slide", p),
                        animate: O,
                        exit: "exit",
                        custom: E,
                        variants: R,
                        style: x
                    })))
                }));
            r.Ts && (D.displayName = "Slide");
            var M = ["unmountOnExit", "in", "reverse", "className", "offsetX", "offsetY", "transition", "transitionEnd", "delay"],
                L = {
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        initial: function(t) {
                            var e, n = t.offsetX,
                                r = t.offsetY,
                                o = t.transition,
                                i = t.transitionEnd,
                                a = t.delay;
                            return {
                                opacity: 0,
                                x: n,
                                y: r,
                                transition: null != (e = null == o ? void 0 : o.exit) ? e : b(g.exit, a),
                                transitionEnd: null == i ? void 0 : i.exit
                            }
                        },
                        enter: function(t) {
                            var e, n = t.transition,
                                r = t.transitionEnd,
                                o = t.delay;
                            return {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: null != (e = null == n ? void 0 : n.enter) ? e : y(g.enter, o),
                                transitionEnd: null == r ? void 0 : r.enter
                            }
                        },
                        exit: function(t) {
                            var e, n = t.offsetY,
                                r = t.offsetX,
                                o = t.transition,
                                i = t.transitionEnd,
                                a = t.reverse,
                                s = t.delay,
                                u = {
                                    x: r,
                                    y: n
                                };
                            return l({
                                opacity: 0,
                                transition: null != (e = null == o ? void 0 : o.exit) ? e : b(g.exit, s)
                            }, a ? l({}, u, {
                                transitionEnd: null == i ? void 0 : i.exit
                            }) : {
                                transitionEnd: l({}, u, null == i ? void 0 : i.exit)
                            })
                        }
                    }
                },
                N = u.forwardRef((function(t, e) {
                    var n = t.unmountOnExit,
                        o = t.in,
                        i = t.reverse,
                        f = void 0 === i || i,
                        d = t.className,
                        p = t.offsetX,
                        v = void 0 === p ? 0 : p,
                        m = t.offsetY,
                        h = void 0 === m ? 8 : m,
                        g = t.transition,
                        y = t.transitionEnd,
                        b = t.delay,
                        x = c(t, M),
                        w = !n || o && n,
                        O = o || n ? "enter" : "exit",
                        E = {
                            offsetX: v,
                            offsetY: h,
                            reverse: f,
                            transition: g,
                            transitionEnd: y,
                            delay: b
                        };
                    return u.createElement(a.M, {
                        custom: E
                    }, w && u.createElement(s.E.div, l({
                        ref: e,
                        className: (0, r.cx)("chakra-offset-slide", d),
                        custom: E
                    }, L, {
                        animate: O
                    }, x)))
                }));
            r.Ts && (N.displayName = "SlideFade")
        },
        20125: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                o = function(t) {
                    var e = {};
                    return function(n) {
                        return void 0 === e[n] && (e[n] = t(n)), e[n]
                    }
                }((function(t) {
                    return r.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
                }))
        },
        52290: function(t) {
            t.exports = function() {
                "use strict";

                function t(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function e(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function n(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var o = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? e(Object(o), !0).forEach((function(e) {
                            t(n, e, o[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(t) {
                            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t))
                        }))
                    }
                    return n
                }

                function r(t, e) {
                    if (null == t) return {};
                    var n, r, o = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = {},
                            i = Object.keys(t);
                        for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                        return o
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                    return o
                }

                function o(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i(t) {
                    return function(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                            return n
                        }
                    }(t) || function(t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function a(t) {
                    var e, n = "algoliasearch-client-js-".concat(t.key),
                        r = function() {
                            return void 0 === e && (e = t.localStorage || window.localStorage), e
                        },
                        i = function() {
                            return JSON.parse(r().getItem(n) || "{}")
                        };
                    return {
                        get: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return Promise.resolve().then((function() {
                                var n = JSON.stringify(t),
                                    r = i()[n];
                                return Promise.all([r || e(), void 0 !== r])
                            })).then((function(t) {
                                var e = o(t, 2),
                                    r = e[0],
                                    i = e[1];
                                return Promise.all([r, i || n.miss(r)])
                            })).then((function(t) {
                                return o(t, 1)[0]
                            }))
                        },
                        set: function(t, e) {
                            return Promise.resolve().then((function() {
                                var o = i();
                                return o[JSON.stringify(t)] = e, r().setItem(n, JSON.stringify(o)), e
                            }))
                        },
                        delete: function(t) {
                            return Promise.resolve().then((function() {
                                var e = i();
                                delete e[JSON.stringify(t)], r().setItem(n, JSON.stringify(e))
                            }))
                        },
                        clear: function() {
                            return Promise.resolve().then((function() {
                                r().removeItem(n)
                            }))
                        }
                    }
                }

                function s(t) {
                    var e = i(t.caches),
                        n = e.shift();
                    return void 0 === n ? {
                        get: function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return e().then((function(t) {
                                return Promise.all([t, n.miss(t)])
                            })).then((function(t) {
                                return o(t, 1)[0]
                            }))
                        },
                        set: function(t, e) {
                            return Promise.resolve(e)
                        },
                        delete: function(t) {
                            return Promise.resolve()
                        },
                        clear: function() {
                            return Promise.resolve()
                        }
                    } : {
                        get: function(t, r) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return n.get(t, r, o).catch((function() {
                                return s({
                                    caches: e
                                }).get(t, r, o)
                            }))
                        },
                        set: function(t, r) {
                            return n.set(t, r).catch((function() {
                                return s({
                                    caches: e
                                }).set(t, r)
                            }))
                        },
                        delete: function(t) {
                            return n.delete(t).catch((function() {
                                return s({
                                    caches: e
                                }).delete(t)
                            }))
                        },
                        clear: function() {
                            return n.clear().catch((function() {
                                return s({
                                    caches: e
                                }).clear()
                            }))
                        }
                    }
                }

                function u() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        e = {};
                    return {
                        get: function(n, r) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                },
                                i = JSON.stringify(n);
                            if (i in e) return Promise.resolve(t.serializable ? JSON.parse(e[i]) : e[i]);
                            var a = r(),
                                s = o && o.miss || function() {
                                    return Promise.resolve()
                                };
                            return a.then((function(t) {
                                return s(t)
                            })).then((function() {
                                return a
                            }))
                        },
                        set: function(n, r) {
                            return e[JSON.stringify(n)] = t.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
                        },
                        delete: function(t) {
                            return delete e[JSON.stringify(t)], Promise.resolve()
                        },
                        clear: function() {
                            return e = {}, Promise.resolve()
                        }
                    }
                }

                function c(t) {
                    for (var e = t.length - 1; e > 0; e--) {
                        var n = Math.floor(Math.random() * (e + 1)),
                            r = t[e];
                        t[e] = t[n], t[n] = r
                    }
                    return t
                }

                function l(t, e) {
                    return e ? (Object.keys(e).forEach((function(n) {
                        t[n] = e[n](t)
                    })), t) : t
                }

                function f(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    var o = 0;
                    return t.replace(/%s/g, (function() {
                        return encodeURIComponent(n[o++])
                    }))
                }
                var d = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function p(t, e) {
                    var n = t || {},
                        r = n.data || {};
                    return Object.keys(n).forEach((function(t) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(t) && (r[t] = n[t])
                    })), {
                        data: Object.entries(r).length > 0 ? r : void 0,
                        timeout: n.timeout || e,
                        headers: n.headers || {},
                        queryParameters: n.queryParameters || {},
                        cacheable: n.cacheable
                    }
                }
                var v = {
                        Read: 1,
                        Write: 2,
                        Any: 3
                    },
                    m = 1,
                    h = 2,
                    g = 3;

                function y(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                    return n(n({}, t), {}, {
                        status: e,
                        lastUpdate: Date.now()
                    })
                }

                function b(t) {
                    return "string" == typeof t ? {
                        protocol: "https",
                        url: t,
                        accept: v.Any
                    } : {
                        protocol: t.protocol || "https",
                        url: t.url,
                        accept: t.accept || v.Any
                    }
                }
                var x = "GET",
                    w = "POST";

                function O(t, e) {
                    return Promise.all(e.map((function(e) {
                        return t.get(e, (function() {
                            return Promise.resolve(y(e))
                        }))
                    }))).then((function(t) {
                        var n = t.filter((function(t) {
                                return function(t) {
                                    return t.status === m || Date.now() - t.lastUpdate > 12e4
                                }(t)
                            })),
                            r = t.filter((function(t) {
                                return function(t) {
                                    return t.status === g && Date.now() - t.lastUpdate <= 12e4
                                }(t)
                            })),
                            o = [].concat(i(n), i(r));
                        return {
                            getTimeout: function(t, e) {
                                return (0 === r.length && 0 === t ? 1 : r.length + 3 + t) * e
                            },
                            statelessHosts: o.length > 0 ? o.map((function(t) {
                                return b(t)
                            })) : e
                        }
                    }))
                }

                function E(t, e, r, o) {
                    var a = [],
                        s = function(t, e) {
                            if (t.method !== x && (void 0 !== t.data || void 0 !== e.data)) {
                                var r = Array.isArray(t.data) ? t.data : n(n({}, t.data), e.data);
                                return JSON.stringify(r)
                            }
                        }(r, o),
                        u = function(t, e) {
                            var r = n(n({}, t.headers), e.headers),
                                o = {};
                            return Object.keys(r).forEach((function(t) {
                                var e = r[t];
                                o[t.toLowerCase()] = e
                            })), o
                        }(t, o),
                        c = r.method,
                        l = r.method !== x ? {} : n(n({}, r.data), o.data),
                        f = n(n(n({
                            "x-algolia-agent": t.userAgent.value
                        }, t.queryParameters), l), o.queryParameters),
                        d = 0,
                        p = function e(n, i) {
                            var l = n.pop();
                            if (void 0 === l) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: k(a)
                            };
                            var p = {
                                    data: s,
                                    headers: u,
                                    method: c,
                                    url: S(l, r.path, f),
                                    connectTimeout: i(d, t.timeouts.connect),
                                    responseTimeout: i(d, o.timeout)
                                },
                                v = function(t) {
                                    var e = {
                                        request: p,
                                        response: t,
                                        host: l,
                                        triesLeft: n.length
                                    };
                                    return a.push(e), e
                                },
                                m = {
                                    onSuccess: function(t) {
                                        return function(t) {
                                            try {
                                                return JSON.parse(t.content)
                                            } catch (e) {
                                                throw function(t, e) {
                                                    return {
                                                        name: "DeserializationError",
                                                        message: t,
                                                        response: e
                                                    }
                                                }(e.message, t)
                                            }
                                        }(t)
                                    },
                                    onRetry: function(r) {
                                        var o = v(r);
                                        return r.isTimedOut && d++, Promise.all([t.logger.info("Retryable failure", j(o)), t.hostsCache.set(l, y(l, r.isTimedOut ? g : h))]).then((function() {
                                            return e(n, i)
                                        }))
                                    },
                                    onFail: function(t) {
                                        throw v(t),
                                            function(t, e) {
                                                var n = t.content,
                                                    r = t.status,
                                                    o = n;
                                                try {
                                                    o = JSON.parse(n).message
                                                } catch (t) {}
                                                return function(t, e, n) {
                                                    return {
                                                        name: "ApiError",
                                                        message: t,
                                                        status: e,
                                                        transporterStackTrace: n
                                                    }
                                                }(o, r, e)
                                            }(t, k(a))
                                    }
                                };
                            return t.requester.send(p).then((function(t) {
                                return function(t, e) {
                                    return function(t) {
                                        var e = t.status;
                                        return t.isTimedOut || function(t) {
                                            var e = t.isTimedOut,
                                                n = t.status;
                                            return !e && 0 == ~~n
                                        }(t) || 2 != ~~(e / 100) && 4 != ~~(e / 100)
                                    }(t) ? e.onRetry(t) : 2 == ~~(t.status / 100) ? e.onSuccess(t) : e.onFail(t)
                                }(t, m)
                            }))
                        };
                    return O(t.hostsCache, e).then((function(t) {
                        return p(i(t.statelessHosts).reverse(), t.getTimeout)
                    }))
                }

                function P(t) {
                    var e = {
                        value: "Algolia for JavaScript (".concat(t, ")"),
                        add: function(t) {
                            var n = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                            return -1 === e.value.indexOf(n) && (e.value = "".concat(e.value).concat(n)), e
                        }
                    };
                    return e
                }

                function S(t, e, n) {
                    var r = C(n),
                        o = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
                    return r.length && (o += "?".concat(r)), o
                }

                function C(t) {
                    return Object.keys(t).map((function(e) {
                        return f("%s=%s", e, (n = t[e], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(t[e]) : t[e]));
                        var n
                    })).join("&")
                }

                function k(t) {
                    return t.map((function(t) {
                        return j(t)
                    }))
                }

                function j(t) {
                    var e = t.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return n(n({}, t), {}, {
                        request: n(n({}, t.request), {}, {
                            headers: n(n({}, t.request.headers), e)
                        })
                    })
                }
                var A = function(t) {
                        var e = t.appId,
                            r = function(t, e, n) {
                                var r = {
                                    "x-algolia-api-key": n,
                                    "x-algolia-application-id": e
                                };
                                return {
                                    headers: function() {
                                        return t === d.WithinHeaders ? r : {}
                                    },
                                    queryParameters: function() {
                                        return t === d.WithinQueryParameters ? r : {}
                                    }
                                }
                            }(void 0 !== t.authMode ? t.authMode : d.WithinHeaders, e, t.apiKey),
                            i = function(t) {
                                var e = t.hostsCache,
                                    n = t.logger,
                                    r = t.requester,
                                    i = t.requestsCache,
                                    a = t.responsesCache,
                                    s = t.timeouts,
                                    u = t.userAgent,
                                    c = t.hosts,
                                    l = t.queryParameters,
                                    f = {
                                        hostsCache: e,
                                        logger: n,
                                        requester: r,
                                        requestsCache: i,
                                        responsesCache: a,
                                        timeouts: s,
                                        userAgent: u,
                                        headers: t.headers,
                                        queryParameters: l,
                                        hosts: c.map((function(t) {
                                            return b(t)
                                        })),
                                        read: function(t, e) {
                                            var n = p(e, f.timeouts.read),
                                                r = function() {
                                                    return E(f, f.hosts.filter((function(t) {
                                                        return 0 != (t.accept & v.Read)
                                                    })), t, n)
                                                };
                                            if (!0 !== (void 0 !== n.cacheable ? n.cacheable : t.cacheable)) return r();
                                            var i = {
                                                request: t,
                                                mappedRequestOptions: n,
                                                transporter: {
                                                    queryParameters: f.queryParameters,
                                                    headers: f.headers
                                                }
                                            };
                                            return f.responsesCache.get(i, (function() {
                                                return f.requestsCache.get(i, (function() {
                                                    return f.requestsCache.set(i, r()).then((function(t) {
                                                        return Promise.all([f.requestsCache.delete(i), t])
                                                    }), (function(t) {
                                                        return Promise.all([f.requestsCache.delete(i), Promise.reject(t)])
                                                    })).then((function(t) {
                                                        var e = o(t, 2);
                                                        return e[0], e[1]
                                                    }))
                                                }))
                                            }), {
                                                miss: function(t) {
                                                    return f.responsesCache.set(i, t)
                                                }
                                            })
                                        },
                                        write: function(t, e) {
                                            return E(f, f.hosts.filter((function(t) {
                                                return 0 != (t.accept & v.Write)
                                            })), t, p(e, f.timeouts.write))
                                        }
                                    };
                                return f
                            }(n(n({
                                hosts: [{
                                    url: "".concat(e, "-dsn.algolia.net"),
                                    accept: v.Read
                                }, {
                                    url: "".concat(e, ".algolia.net"),
                                    accept: v.Write
                                }].concat(c([{
                                    url: "".concat(e, "-1.algolianet.com")
                                }, {
                                    url: "".concat(e, "-2.algolianet.com")
                                }, {
                                    url: "".concat(e, "-3.algolianet.com")
                                }]))
                            }, t), {}, {
                                headers: n(n(n({}, r.headers()), {
                                    "content-type": "application/x-www-form-urlencoded"
                                }), t.headers),
                                queryParameters: n(n({}, r.queryParameters()), t.queryParameters)
                            }));
                        return l({
                            transporter: i,
                            appId: e,
                            addAlgoliaAgent: function(t, e) {
                                i.userAgent.add({
                                    segment: t,
                                    version: e
                                })
                            },
                            clearCache: function() {
                                return Promise.all([i.requestsCache.clear(), i.responsesCache.clear()]).then((function() {}))
                            }
                        }, t.methods)
                    },
                    T = function(t) {
                        return function(e, n) {
                            return e.method === x ? t.transporter.read(e, n) : t.transporter.write(e, n)
                        }
                    },
                    I = function(t) {
                        return function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l({
                                transporter: t.transporter,
                                appId: t.appId,
                                indexName: e
                            }, n.methods)
                        }
                    },
                    R = function(t) {
                        return function(e, r) {
                            var o = e.map((function(t) {
                                return n(n({}, t), {}, {
                                    params: C(t.params || {})
                                })
                            }));
                            return t.transporter.read({
                                method: w,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: o
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    D = function(t) {
                        return function(e, o) {
                            return Promise.all(e.map((function(e) {
                                var i = e.params,
                                    a = i.facetName,
                                    s = i.facetQuery,
                                    u = r(i, ["facetName", "facetQuery"]);
                                return I(t)(e.indexName, {
                                    methods: {
                                        searchForFacetValues: N
                                    }
                                }).searchForFacetValues(a, s, n(n({}, o), u))
                            })))
                        }
                    },
                    M = function(t) {
                        return function(e, n, r) {
                            return t.transporter.read({
                                method: w,
                                path: f("1/answers/%s/prediction", t.indexName),
                                data: {
                                    query: e,
                                    queryLanguages: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    L = function(t) {
                        return function(e, n) {
                            return t.transporter.read({
                                method: w,
                                path: f("1/indexes/%s/query", t.indexName),
                                data: {
                                    query: e
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    N = function(t) {
                        return function(e, n, r) {
                            return t.transporter.read({
                                method: w,
                                path: f("1/indexes/%s/facets/%s/query", t.indexName, e),
                                data: {
                                    facetQuery: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    _ = 1,
                    F = 2,
                    V = 3;

                function B(t, e, r) {
                    var o, i = {
                        appId: t,
                        apiKey: e,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function(t) {
                                return new Promise((function(e) {
                                    var n = new XMLHttpRequest;
                                    n.open(t.method, t.url, !0), Object.keys(t.headers).forEach((function(e) {
                                        return n.setRequestHeader(e, t.headers[e])
                                    }));
                                    var r, o = function(t, r) {
                                            return setTimeout((function() {
                                                n.abort(), e({
                                                    status: 0,
                                                    content: r,
                                                    isTimedOut: !0
                                                })
                                            }), 1e3 * t)
                                        },
                                        i = o(t.connectTimeout, "Connection timeout");
                                    n.onreadystatechange = function() {
                                        n.readyState > n.OPENED && void 0 === r && (clearTimeout(i), r = o(t.responseTimeout, "Socket timeout"))
                                    }, n.onerror = function() {
                                        0 === n.status && (clearTimeout(i), clearTimeout(r), e({
                                            content: n.responseText || "Network request failed",
                                            status: n.status,
                                            isTimedOut: !1
                                        }))
                                    }, n.onload = function() {
                                        clearTimeout(i), clearTimeout(r), e({
                                            content: n.responseText,
                                            status: n.status,
                                            isTimedOut: !1
                                        })
                                    }, n.send(t.data)
                                }))
                            }
                        },
                        logger: (o = V, {
                            debug: function(t, e) {
                                return _ >= o && console.debug(t, e), Promise.resolve()
                            },
                            info: function(t, e) {
                                return F >= o && console.info(t, e), Promise.resolve()
                            },
                            error: function(t, e) {
                                return console.error(t, e), Promise.resolve()
                            }
                        }),
                        responsesCache: u(),
                        requestsCache: u({
                            serializable: !1
                        }),
                        hostsCache: s({
                            caches: [a({
                                key: "".concat("4.12.2", "-").concat(t)
                            }), u()]
                        }),
                        userAgent: P("4.12.2").add({
                            segment: "Browser",
                            version: "lite"
                        }),
                        authMode: d.WithinQueryParameters
                    };
                    return A(n(n(n({}, i), r), {}, {
                        methods: {
                            search: R,
                            searchForFacetValues: D,
                            multipleQueries: R,
                            multipleSearchForFacetValues: D,
                            customRequest: T,
                            initIndex: function(t) {
                                return function(e) {
                                    return I(t)(e, {
                                        methods: {
                                            search: L,
                                            searchForFacetValues: N,
                                            findAnswers: M
                                        }
                                    })
                                }
                            }
                        }
                    }))
                }
                return B.version = "4.12.2", B
            }()
        },
        71571: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return m
                }
            });
            var r = n(38499),
                o = n(67294),
                i = n(95590),
                a = n(98272);
            var s = n(8944),
                u = n(7374),
                c = 0;

            function l() {
                var t = c;
                return c++, t
            }
            var f = function(t) {
                var e = t.children,
                    n = t.initial,
                    i = t.isPresent,
                    a = t.onExitComplete,
                    c = t.custom,
                    f = t.presenceAffectsLayout,
                    p = (0, u.h)(d),
                    v = (0, u.h)(l),
                    m = (0, o.useMemo)((function() {
                        return {
                            id: v,
                            initial: n,
                            isPresent: i,
                            custom: c,
                            onExitComplete: function(t) {
                                var e, n;
                                p.set(t, !0);
                                try {
                                    for (var o = (0, r.XA)(p.values()), i = o.next(); !i.done; i = o.next()) {
                                        if (!i.value) return
                                    }
                                } catch (s) {
                                    e = {
                                        error: s
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (n = o.return) && n.call(o)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                null == a || a()
                            },
                            register: function(t) {
                                return p.set(t, !1),
                                    function() {
                                        return p.delete(t)
                                    }
                            }
                        }
                    }), f ? void 0 : [i]);
                return (0, o.useMemo)((function() {
                    p.forEach((function(t, e) {
                        return p.set(e, !1)
                    }))
                }), [i]), o.useEffect((function() {
                    !i && !p.size && (null == a || a())
                }), [i]), o.createElement(s.O.Provider, {
                    value: m
                }, e)
            };

            function d() {
                return new Map
            }
            var p = n(3906);

            function v(t) {
                return t.key || ""
            }
            var m = function(t) {
                var e = t.children,
                    n = t.custom,
                    s = t.initial,
                    u = void 0 === s || s,
                    c = t.onExitComplete,
                    l = t.exitBeforeEnter,
                    d = t.presenceAffectsLayout,
                    m = void 0 === d || d,
                    h = (0, r.CR)(function() {
                        var t = (0, o.useRef)(!1),
                            e = (0, r.CR)((0, o.useState)(0), 2),
                            n = e[0],
                            s = e[1];
                        (0, a.z)((function() {
                            return t.current = !0
                        }));
                        var u = (0, o.useCallback)((function() {
                            !t.current && s(n + 1)
                        }), [n]);
                        return [(0, o.useCallback)((function() {
                            return i.ZP.postRender(u)
                        }), [u]), n]
                    }(), 1),
                    g = h[0],
                    y = (0, o.useContext)(p.p).forceRender;
                y && (g = y);
                var b = (0, o.useRef)(!0),
                    x = (0, o.useRef)(!0);
                (0, o.useEffect)((function() {
                    return function() {
                        x.current = !1
                    }
                }), []);
                var w = function(t) {
                        var e = [];
                        return o.Children.forEach(t, (function(t) {
                            (0, o.isValidElement)(t) && e.push(t)
                        })), e
                    }(e),
                    O = (0, o.useRef)(w),
                    E = (0, o.useRef)(new Map).current,
                    P = (0, o.useRef)(new Set).current;
                if (function(t, e) {
                        t.forEach((function(t) {
                            var n = v(t);
                            e.set(n, t)
                        }))
                    }(w, E), b.current) return b.current = !1, o.createElement(o.Fragment, null, w.map((function(t) {
                    return o.createElement(f, {
                        key: v(t),
                        isPresent: !0,
                        initial: !!u && void 0,
                        presenceAffectsLayout: m
                    }, t)
                })));
                for (var S = (0, r.ev)([], (0, r.CR)(w), !1), C = O.current.map(v), k = w.map(v), j = C.length, A = 0; A < j; A++) {
                    var T = C[A]; - 1 === k.indexOf(T) ? P.add(T) : P.delete(T)
                }
                return l && P.size && (S = []), P.forEach((function(t) {
                    if (-1 === k.indexOf(t)) {
                        var e = E.get(t);
                        if (e) {
                            var r = C.indexOf(t);
                            S.splice(r, 0, o.createElement(f, {
                                key: v(e),
                                isPresent: !1,
                                onExitComplete: function() {
                                    E.delete(t), P.delete(t);
                                    var e = O.current.findIndex((function(e) {
                                        return e.key === t
                                    }));
                                    if (O.current.splice(e, 1), !P.size) {
                                        if (O.current = w, !1 === x.current) return;
                                        g(), c && c()
                                    }
                                },
                                custom: n,
                                presenceAffectsLayout: m
                            }, e))
                        }
                    }
                })), S = S.map((function(t) {
                    var e = t.key;
                    return P.has(e) ? t : o.createElement(f, {
                        key: v(t),
                        isPresent: !0,
                        presenceAffectsLayout: m
                    }, t)
                })), O.current = S, o.createElement(o.Fragment, null, P.size ? S : S.map((function(t) {
                    return (0, o.cloneElement)(t)
                })))
            }
        },
        70500: function(t, e, n) {
            "use strict";
            n.d(e, {
                oO: function() {
                    return a
                }
            });
            var r = n(67294),
                o = n(8944),
                i = n(7374);

            function a() {
                var t = (0, r.useContext)(o.O);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    i = t.register,
                    a = c();
                (0, r.useEffect)((function() {
                    return i(a)
                }), []);
                return !e && n ? [!1, function() {
                    return null == n ? void 0 : n(a)
                }] : [!0]
            }
            var s = 0,
                u = function() {
                    return s++
                },
                c = function() {
                    return (0, i.h)(u)
                }
        },
        3906: function(t, e, n) {
            "use strict";
            n.d(e, {
                p: function() {
                    return r
                }
            });
            var r = (0, n(67294).createContext)({})
        },
        8944: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return r
                }
            });
            var r = (0, n(67294).createContext)(null)
        },
        21890: function(t, e, n) {
            "use strict";
            n.d(e, {
                E: function() {
                    return o
                },
                p: function() {
                    return i
                }
            });
            var r = n(67294);

            function o(t, e, n, r) {
                return t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n, r)
                    }
            }

            function i(t, e, n, i) {
                (0, r.useEffect)((function() {
                    var r = t.current;
                    if (n && r) return o(r, e, n, i)
                }), [t, e, n, i])
            }
        },
        77649: function(t, e, n) {
            "use strict";
            n.d(e, {
                E: function() {
                    return na
                }
            });
            var r = n(38499),
                o = n(67294),
                i = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some((function(t) {
                                return !!e[t]
                            }))
                        }
                    }
                },
                a = {
                    measureLayout: i(["layout", "layoutId", "drag"]),
                    animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: i(["exit"]),
                    drag: i(["drag", "dragControls"]),
                    focus: i(["whileFocus"]),
                    hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: i(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var s = (0, o.createContext)({
                    strict: !1
                }),
                u = Object.keys(a),
                c = u.length;
            var l = (0, o.createContext)({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1
                }),
                f = (0, o.createContext)({});
            var d = n(8944),
                p = n(26162);

            function v(t, e, n, r) {
                var i = (0, o.useContext)(s),
                    a = (0, o.useContext)(f).visualElement,
                    u = (0, o.useContext)(d.O),
                    c = (0, o.useRef)(void 0);
                r || (r = i.renderer), !c.current && r && (c.current = r(t, {
                    visualState: e,
                    parent: a,
                    props: n,
                    presenceId: null == u ? void 0 : u.id,
                    blockInitialAnimation: !1 === (null == u ? void 0 : u.initial)
                }));
                var l = c.current;
                return (0, p.L)((function() {
                    null == l || l.syncRender()
                })), (0, o.useEffect)((function() {
                    var t;
                    null === (t = null == l ? void 0 : l.animationState) || void 0 === t || t.animateChanges()
                })), (0, p.L)((function() {
                    return function() {
                        return null == l ? void 0 : l.notifyUnmount()
                    }
                }), []), l
            }

            function m(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function h(t) {
                return Array.isArray(t)
            }

            function g(t) {
                return "string" == typeof t || h(t)
            }

            function y(t, e, n, r, o) {
                var i;
                return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e && (e = e(null != n ? n : t.custom, r, o)), e
            }

            function b(t, e, n) {
                var r = t.getProps();
                return y(r, e, null != n ? n : r.custom, function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.get()
                    })), e
                }(t), function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.getVelocity()
                    })), e
                }(t))
            }

            function x(t) {
                var e;
                return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || g(t.initial) || g(t.animate) || g(t.whileHover) || g(t.whileDrag) || g(t.whileTap) || g(t.whileFocus) || g(t.exit)
            }

            function w(t) {
                return Boolean(x(t) || t.variants)
            }

            function O(t) {
                var e = function(t, e) {
                        if (x(t)) {
                            var n = t.initial,
                                r = t.animate;
                            return {
                                initial: !1 === n || g(n) ? n : void 0,
                                animate: g(r) ? r : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0, o.useContext)(f)),
                    n = e.initial,
                    r = e.animate;
                return (0, o.useMemo)((function() {
                    return {
                        initial: n,
                        animate: r
                    }
                }), [E(n), E(r)])
            }

            function E(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var P = n(73439),
                S = n(7374),
                C = n(95590),
                k = function(t, e, n) {
                    return -n * t + n * e + t
                },
                j = n(64001),
                A = function(t) {
                    return Boolean(null !== t && "object" == typeof t && t.getVelocity)
                };
            var T = function(t, e, n) {
                    return Math.min(Math.max(n, t), e)
                },
                I = .001;

            function R(t) {
                var e, n, r = t.duration,
                    o = void 0 === r ? 800 : r,
                    i = t.bounce,
                    a = void 0 === i ? .25 : i,
                    s = t.velocity,
                    u = void 0 === s ? 0 : s,
                    c = t.mass,
                    l = void 0 === c ? 1 : c,
                    f = 1 - a;
                f = T(.05, 1, f), o = T(.01, 10, o / 1e3), f < 1 ? (e = function(t) {
                    var e = t * f,
                        n = e * o,
                        r = e - u,
                        i = D(t, f),
                        a = Math.exp(-n);
                    return I - r / i * a
                }, n = function(t) {
                    var n = t * f * o,
                        r = n * u + u,
                        i = Math.pow(f, 2) * Math.pow(t, 2) * o,
                        a = Math.exp(-n),
                        s = D(Math.pow(t, 2), f);
                    return (-e(t) + I > 0 ? -1 : 1) * ((r - i) * a) / s
                }) : (e = function(t) {
                    return Math.exp(-t * o) * ((t - u) * o + 1) - .001
                }, n = function(t) {
                    return Math.exp(-t * o) * (o * o * (u - t))
                });
                var d = function(t, e, n) {
                    for (var r = n, o = 1; o < 12; o++) r -= t(r) / e(r);
                    return r
                }(e, n, 5 / o);
                if (o *= 1e3, isNaN(d)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: o
                };
                var p = Math.pow(d, 2) * l;
                return {
                    stiffness: p,
                    damping: 2 * f * Math.sqrt(l * p),
                    duration: o
                }
            }

            function D(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            var M = ["duration", "bounce"],
                L = ["stiffness", "damping", "mass"];

            function N(t, e) {
                return e.some((function(e) {
                    return void 0 !== t[e]
                }))
            }

            function _(t) {
                var e = t.from,
                    n = void 0 === e ? 0 : e,
                    o = t.to,
                    i = void 0 === o ? 1 : o,
                    a = t.restSpeed,
                    s = void 0 === a ? 2 : a,
                    u = t.restDelta,
                    c = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]),
                    l = {
                        done: !1,
                        value: n
                    },
                    f = function(t) {
                        var e = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, t);
                        if (!N(t, L) && N(t, M)) {
                            var n = R(t);
                            (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return e
                    }(c),
                    d = f.stiffness,
                    p = f.damping,
                    v = f.mass,
                    m = f.velocity,
                    h = f.duration,
                    g = f.isResolvedFromDuration,
                    y = F,
                    b = F;

                function x() {
                    var t = m ? -m / 1e3 : 0,
                        e = i - n,
                        r = p / (2 * Math.sqrt(d * v)),
                        o = Math.sqrt(d / v) / 1e3;
                    if (void 0 === u && (u = Math.min(Math.abs(i - n) / 100, .4)), r < 1) {
                        var a = D(o, r);
                        y = function(n) {
                            var s = Math.exp(-r * o * n);
                            return i - s * ((t + r * o * e) / a * Math.sin(a * n) + e * Math.cos(a * n))
                        }, b = function(n) {
                            var i = Math.exp(-r * o * n);
                            return r * o * i * (Math.sin(a * n) * (t + r * o * e) / a + e * Math.cos(a * n)) - i * (Math.cos(a * n) * (t + r * o * e) - a * e * Math.sin(a * n))
                        }
                    } else if (1 === r) y = function(n) {
                        return i - Math.exp(-o * n) * (e + (t + o * e) * n)
                    };
                    else {
                        var s = o * Math.sqrt(r * r - 1);
                        y = function(n) {
                            var a = Math.exp(-r * o * n),
                                u = Math.min(s * n, 300);
                            return i - a * ((t + r * o * e) * Math.sinh(u) + s * e * Math.cosh(u)) / s
                        }
                    }
                }
                return x(), {
                    next: function(t) {
                        var e = y(t);
                        if (g) l.done = t >= h;
                        else {
                            var n = 1e3 * b(t),
                                r = Math.abs(n) <= s,
                                o = Math.abs(i - e) <= u;
                            l.done = r && o
                        }
                        return l.value = l.done ? i : e, l
                    },
                    flipTarget: function() {
                        m = -m;
                        var t = [i, n];
                        n = t[0], i = t[1], x()
                    }
                }
            }
            _.needsInterpolation = function(t, e) {
                return "string" == typeof t || "string" == typeof e
            };
            var F = function(t) {
                    return 0
                },
                V = n(70885),
                B = function(t, e, n) {
                    var r = e - t;
                    return 0 === r ? 1 : (n - t) / r
                },
                q = function(t, e) {
                    return function(n) {
                        return Math.max(Math.min(n, e), t)
                    }
                },
                U = function(t) {
                    return t % 1 ? Number(t.toFixed(5)) : t
                },
                z = /(-)?([\d]*\.?[\d])+/g,
                Z = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                H = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function W(t) {
                return "string" == typeof t
            }
            var Y = {
                    test: function(t) {
                        return "number" == typeof t
                    },
                    parse: parseFloat,
                    transform: function(t) {
                        return t
                    }
                },
                X = Object.assign(Object.assign({}, Y), {
                    transform: q(0, 1)
                }),
                G = Object.assign(Object.assign({}, Y), {
                    default: 1
                }),
                K = n(4942),
                $ = function(t, e) {
                    return function(n) {
                        return Boolean(W(n) && H.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
                    }
                },
                J = function(t, e, n) {
                    return function(r) {
                        var o;
                        if (!W(r)) return r;
                        var i = r.match(z),
                            a = (0, V.Z)(i, 4),
                            s = a[0],
                            u = a[1],
                            c = a[2],
                            l = a[3];
                        return o = {}, (0, K.Z)(o, t, parseFloat(s)), (0, K.Z)(o, e, parseFloat(u)), (0, K.Z)(o, n, parseFloat(c)), (0, K.Z)(o, "alpha", void 0 !== l ? parseFloat(l) : 1), o
                    }
                },
                Q = q(0, 255),
                tt = Object.assign(Object.assign({}, Y), {
                    transform: function(t) {
                        return Math.round(Q(t))
                    }
                }),
                et = {
                    test: $("rgb", "red"),
                    parse: J("red", "green", "blue"),
                    transform: function(t) {
                        var e = t.red,
                            n = t.green,
                            r = t.blue,
                            o = t.alpha,
                            i = void 0 === o ? 1 : o;
                        return "rgba(" + tt.transform(e) + ", " + tt.transform(n) + ", " + tt.transform(r) + ", " + U(X.transform(i)) + ")"
                    }
                };
            var nt = {
                    test: $("#"),
                    parse: function(t) {
                        var e = "",
                            n = "",
                            r = "",
                            o = "";
                        return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), o = t.substr(4, 1), e += e, n += n, r += r, o += o), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: et.transform
                },
                rt = function(t) {
                    return {
                        test: function(e) {
                            return W(e) && e.endsWith(t) && 1 === e.split(" ").length
                        },
                        parse: parseFloat,
                        transform: function(e) {
                            return "".concat(e).concat(t)
                        }
                    }
                },
                ot = rt("deg"),
                it = rt("%"),
                at = rt("px"),
                st = rt("vh"),
                ut = rt("vw"),
                ct = Object.assign(Object.assign({}, it), {
                    parse: function(t) {
                        return it.parse(t) / 100
                    },
                    transform: function(t) {
                        return it.transform(100 * t)
                    }
                }),
                lt = {
                    test: $("hsl", "hue"),
                    parse: J("hue", "saturation", "lightness"),
                    transform: function(t) {
                        var e = t.hue,
                            n = t.saturation,
                            r = t.lightness,
                            o = t.alpha,
                            i = void 0 === o ? 1 : o;
                        return "hsla(" + Math.round(e) + ", " + it.transform(U(n)) + ", " + it.transform(U(r)) + ", " + U(X.transform(i)) + ")"
                    }
                };

            function ft(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function dt(t) {
                var e = t.hue,
                    n = t.saturation,
                    r = t.lightness,
                    o = t.alpha;
                e /= 360, r /= 100;
                var i = 0,
                    a = 0,
                    s = 0;
                if (n /= 100) {
                    var u = r < .5 ? r * (1 + n) : r + n - r * n,
                        c = 2 * r - u;
                    i = ft(c, u, e + 1 / 3), a = ft(c, u, e), s = ft(c, u, e - 1 / 3)
                } else i = a = s = r;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * a),
                    blue: Math.round(255 * s),
                    alpha: o
                }
            }
            var pt = function(t, e, n) {
                    var r = t * t,
                        o = e * e;
                    return Math.sqrt(Math.max(0, n * (o - r) + r))
                },
                vt = [nt, et, lt],
                mt = function(t) {
                    return vt.find((function(e) {
                        return e.test(t)
                    }))
                },
                ht = function(t) {
                    return "'".concat(t, "' is not an animatable color. Use the equivalent color code instead.")
                },
                gt = function(t, e) {
                    var n = mt(t),
                        r = mt(e);
                    ht(t), ht(e);
                    var o = n.parse(t),
                        i = r.parse(e);
                    n === lt && (o = dt(o), n = et), r === lt && (i = dt(i), r = et);
                    var a = Object.assign({}, o);
                    return function(t) {
                        for (var e in a) "alpha" !== e && (a[e] = pt(o[e], i[e], t));
                        return a.alpha = k(o.alpha, i.alpha, t), n.transform(a)
                    }
                },
                yt = n(42982),
                bt = {
                    test: function(t) {
                        return et.test(t) || nt.test(t) || lt.test(t)
                    },
                    parse: function(t) {
                        return et.test(t) ? et.parse(t) : lt.test(t) ? lt.parse(t) : nt.parse(t)
                    },
                    transform: function(t) {
                        return W(t) ? t : t.hasOwnProperty("red") ? et.transform(t) : lt.transform(t)
                    }
                },
                xt = "${c}",
                wt = "${n}";

            function Ot(t) {
                "number" == typeof t && (t = "".concat(t));
                var e = [],
                    n = 0,
                    r = t.match(Z);
                r && (n = r.length, t = t.replace(Z, xt), e.push.apply(e, (0, yt.Z)(r.map(bt.parse))));
                var o = t.match(z);
                return o && (t = t.replace(z, wt), e.push.apply(e, (0, yt.Z)(o.map(Y.parse)))), {
                    values: e,
                    numColors: n,
                    tokenised: t
                }
            }

            function Et(t) {
                return Ot(t).values
            }

            function Pt(t) {
                var e = Ot(t),
                    n = e.values,
                    r = e.numColors,
                    o = e.tokenised,
                    i = n.length;
                return function(t) {
                    for (var e = o, n = 0; n < i; n++) e = e.replace(n < r ? xt : wt, n < r ? bt.transform(t[n]) : U(t[n]));
                    return e
                }
            }
            var St = function(t) {
                return "number" == typeof t ? 0 : t
            };
            var Ct = {
                    test: function(t) {
                        var e, n, r, o;
                        return isNaN(t) && W(t) && (null !== (n = null === (e = t.match(z)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(Z)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
                    },
                    parse: Et,
                    createTransformer: Pt,
                    getAnimatableNone: function(t) {
                        var e = Et(t);
                        return Pt(t)(e.map(St))
                    }
                },
                kt = function(t) {
                    return "number" == typeof t
                },
                jt = function(t, e) {
                    return function(n) {
                        return e(t(n))
                    }
                },
                At = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return e.reduce(jt)
                };

            function Tt(t, e) {
                return kt(t) ? function(n) {
                    return k(t, e, n)
                } : bt.test(t) ? gt(t, e) : Mt(t, e)
            }
            var It = function(t, e) {
                    var n = (0, yt.Z)(t),
                        r = n.length,
                        o = t.map((function(t, n) {
                            return Tt(t, e[n])
                        }));
                    return function(t) {
                        for (var e = 0; e < r; e++) n[e] = o[e](t);
                        return n
                    }
                },
                Rt = function(t, e) {
                    var n = Object.assign(Object.assign({}, t), e),
                        r = {};
                    for (var o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = Tt(t[o], e[o]));
                    return function(t) {
                        for (var e in r) n[e] = r[e](t);
                        return n
                    }
                };

            function Dt(t) {
                for (var e = Ct.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0; a < n; a++) r || "number" == typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
                return {
                    parsed: e,
                    numNumbers: r,
                    numRGB: o,
                    numHSL: i
                }
            }
            var Mt = function(t, e) {
                    var n = Ct.createTransformer(e),
                        r = Dt(t),
                        o = Dt(e);
                    return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? At(It(r.parsed, o.parsed), n) : ("Complex values '".concat(t, "' and '").concat(e, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."), function(n) {
                        return "".concat(n > 0 ? e : t)
                    })
                },
                Lt = function(t, e) {
                    return function(n) {
                        return k(t, e, n)
                    }
                };

            function Nt(t, e, n) {
                for (var r, o = [], i = n || ("number" == typeof(r = t[0]) ? Lt : "string" == typeof r ? bt.test(r) ? gt : Mt : Array.isArray(r) ? It : "object" == typeof r ? Rt : void 0), a = t.length - 1, s = 0; s < a; s++) {
                    var u = i(t[s], t[s + 1]);
                    if (e) {
                        var c = Array.isArray(e) ? e[s] : e;
                        u = At(c, u)
                    }
                    o.push(u)
                }
                return o
            }

            function _t(t, e) {
                var n = (0, V.Z)(t, 2),
                    r = n[0],
                    o = n[1],
                    i = (0, V.Z)(e, 1)[0];
                return function(t) {
                    return i(B(r, o, t))
                }
            }

            function Ft(t, e) {
                var n = t.length,
                    r = n - 1;
                return function(o) {
                    var i = 0,
                        a = !1;
                    if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
                        for (var s = 1; s < n && !(t[s] > o || s === r); s++);
                        i = s - 1
                    }
                    var u = B(t[i], t[i + 1], o);
                    return e[i](u)
                }
            }

            function Vt(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.clamp,
                    o = void 0 === r || r,
                    i = n.ease,
                    a = n.mixer,
                    s = t.length;
                e.length, !i || !Array.isArray(i) || i.length, t[0] > t[s - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                var u = Nt(e, i, a),
                    c = 2 === s ? _t(t, u) : Ft(t, u);
                return o ? function(e) {
                    return c(T(t[0], t[s - 1], e))
                } : c
            }
            var Bt, qt = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                Ut = function(t) {
                    return function(e) {
                        return e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
                    }
                },
                zt = function(t) {
                    return function(e) {
                        return e * e * ((t + 1) * e - t)
                    }
                },
                Zt = function(t) {
                    return t
                },
                Ht = (Bt = 2, function(t) {
                    return Math.pow(t, Bt)
                }),
                Wt = qt(Ht),
                Yt = Ut(Ht),
                Xt = function(t) {
                    return 1 - Math.sin(Math.acos(t))
                },
                Gt = qt(Xt),
                Kt = Ut(Gt),
                $t = zt(1.525),
                Jt = qt($t),
                Qt = Ut($t),
                te = function(t) {
                    var e = zt(t);
                    return function(t) {
                        return (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    }
                }(1.525),
                ee = function(t) {
                    if (1 === t || 0 === t) return t;
                    var e = t * t;
                    return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
                },
                ne = qt(ee);

            function re(t, e) {
                return t.map((function() {
                    return e || Yt
                })).splice(0, t.length - 1)
            }

            function oe(t) {
                var e = t.from,
                    n = void 0 === e ? 0 : e,
                    r = t.to,
                    o = void 0 === r ? 1 : r,
                    i = t.ease,
                    a = t.offset,
                    s = t.duration,
                    u = void 0 === s ? 300 : s,
                    c = {
                        done: !1,
                        value: n
                    },
                    l = Array.isArray(o) ? o : [n, o],
                    f = function(t, e) {
                        return t.map((function(t) {
                            return t * e
                        }))
                    }(a && a.length === l.length ? a : function(t) {
                        var e = t.length;
                        return t.map((function(t, n) {
                            return 0 !== n ? n / (e - 1) : 0
                        }))
                    }(l), u);

                function d() {
                    return Vt(f, l, {
                        ease: Array.isArray(i) ? i : re(l, i)
                    })
                }
                var p = d();
                return {
                    next: function(t) {
                        return c.value = p(t), c.done = t >= u, c
                    },
                    flipTarget: function() {
                        l.reverse(), p = d()
                    }
                }
            }
            var ie = {
                keyframes: oe,
                spring: _,
                decay: function(t) {
                    var e = t.velocity,
                        n = void 0 === e ? 0 : e,
                        r = t.from,
                        o = void 0 === r ? 0 : r,
                        i = t.power,
                        a = void 0 === i ? .8 : i,
                        s = t.timeConstant,
                        u = void 0 === s ? 350 : s,
                        c = t.restDelta,
                        l = void 0 === c ? .5 : c,
                        f = t.modifyTarget,
                        d = {
                            done: !1,
                            value: o
                        },
                        p = a * n,
                        v = o + p,
                        m = void 0 === f ? v : f(v);
                    return m !== v && (p = m - o), {
                        next: function(t) {
                            var e = -p * Math.exp(-t / u);
                            return d.done = !(e > l || e < -l), d.value = d.done ? m : m + e, d
                        },
                        flipTarget: function() {}
                    }
                }
            };

            function ae(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return t - e - n
            }
            var se = function(t) {
                var e = function(e) {
                    var n = e.delta;
                    return t(n)
                };
                return {
                    start: function() {
                        return C.ZP.update(e, !0)
                    },
                    stop: function() {
                        return C.qY.update(e)
                    }
                }
            };

            function ue(t) {
                var e, n, o, i, a, s = t.from,
                    u = t.autoplay,
                    c = void 0 === u || u,
                    l = t.driver,
                    f = void 0 === l ? se : l,
                    d = t.elapsed,
                    p = void 0 === d ? 0 : d,
                    v = t.repeat,
                    m = void 0 === v ? 0 : v,
                    h = t.repeatType,
                    g = void 0 === h ? "loop" : h,
                    y = t.repeatDelay,
                    b = void 0 === y ? 0 : y,
                    x = t.onPlay,
                    w = t.onStop,
                    O = t.onComplete,
                    E = t.onRepeat,
                    P = t.onUpdate,
                    S = (0, r._T)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
                    C = S.to,
                    k = 0,
                    j = S.duration,
                    A = !1,
                    T = !0,
                    I = function(t) {
                        if (Array.isArray(t.to)) return oe;
                        if (ie[t.type]) return ie[t.type];
                        var e = new Set(Object.keys(t));
                        return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? oe : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? _ : oe
                    }(S);
                (null === (n = (e = I).needsInterpolation) || void 0 === n ? void 0 : n.call(e, s, C)) && (a = Vt([0, 100], [s, C], {
                    clamp: !1
                }), s = 0, C = 100);
                var R = I(Object.assign(Object.assign({}, S), {
                    from: s,
                    to: C
                }));

                function D() {
                    k++, "reverse" === g ? p = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? e - (t - e) + n : ae(e + -t, e, n)
                    }(p, j, b, T = k % 2 == 0) : (p = ae(p, j, b), "mirror" === g && R.flipTarget()), A = !1, E && E()
                }

                function M(t) {
                    if (T || (t = -t), p += t, !A) {
                        var e = R.next(Math.max(0, p));
                        i = e.value, a && (i = a(i)), A = T ? e.done : p <= 0
                    }
                    null == P || P(i), A && (0 === k && (null != j || (j = p)), k < m ? function(t, e, n, r) {
                        return r ? t >= e + n : t <= -n
                    }(p, j, b, T) && D() : (o.stop(), O && O()))
                }
                return c && (null == x || x(), (o = f(M)).start()), {
                    stop: function() {
                        null == w || w(), o.stop()
                    }
                }
            }
            var ce = n(1427);
            var le = function(t) {
                    return 1e3 * t
                },
                fe = function(t, e) {
                    return 1 - 3 * e + 3 * t
                },
                de = function(t, e) {
                    return 3 * e - 6 * t
                },
                pe = function(t) {
                    return 3 * t
                },
                ve = function(t, e, n) {
                    return ((fe(e, n) * t + de(e, n)) * t + pe(e)) * t
                },
                me = function(t, e, n) {
                    return 3 * fe(e, n) * t * t + 2 * de(e, n) * t + pe(e)
                };
            var he = .1;

            function ge(t, e, n, r) {
                if (t === e && n === r) return Zt;
                for (var o = new Float32Array(11), i = 0; i < 11; ++i) o[i] = ve(i * he, t, n);

                function a(e) {
                    for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += he;
                    --i;
                    var a = r + (e - o[i]) / (o[i + 1] - o[i]) * he,
                        s = me(a, t, n);
                    return s >= .001 ? function(t, e, n, r) {
                        for (var o = 0; o < 8; ++o) {
                            var i = me(e, n, r);
                            if (0 === i) return e;
                            e -= (ve(e, n, r) - t) / i
                        }
                        return e
                    }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
                        var i, a, s = 0;
                        do {
                            (i = ve(a = e + (n - e) / 2, r, o) - t) > 0 ? n = a : e = a
                        } while (Math.abs(i) > 1e-7 && ++s < 10);
                        return a
                    }(e, r, r + he, t, n)
                }
                return function(t) {
                    return 0 === t || 1 === t ? t : ve(a(t), e, r)
                }
            }
            var ye = {
                    linear: Zt,
                    easeIn: Ht,
                    easeInOut: Yt,
                    easeOut: Wt,
                    circIn: Xt,
                    circInOut: Kt,
                    circOut: Gt,
                    backIn: $t,
                    backInOut: Qt,
                    backOut: Jt,
                    anticipate: te,
                    bounceIn: ne,
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * (1 - ee(1 - 2 * t)) : .5 * ee(2 * t - 1) + .5
                    },
                    bounceOut: ee
                },
                be = function(t) {
                    if (Array.isArray(t)) {
                        t.length;
                        var e = (0, r.CR)(t, 4);
                        return ge(e[0], e[1], e[2], e[3])
                    }
                    return "string" == typeof t ? ("Invalid easing type '".concat(t, "'"), ye[t]) : t
                },
                xe = function(t, e) {
                    return "zIndex" !== t && (!("number" != typeof e && !Array.isArray(e)) || !("string" != typeof e || !Ct.test(e) || e.startsWith("url(")))
                },
                we = function(t) {
                    return Array.isArray(t)
                },
                Oe = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                Ee = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                Pe = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                Se = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                Ce = {
                    x: Oe,
                    y: Oe,
                    z: Oe,
                    rotate: Oe,
                    rotateX: Oe,
                    rotateY: Oe,
                    rotateZ: Oe,
                    scaleX: Ee,
                    scaleY: Ee,
                    scale: Ee,
                    opacity: Pe,
                    backgroundColor: Pe,
                    color: Pe,
                    default: Ee
                },
                ke = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function je(t) {
                var e = t.slice(0, -1).split("("),
                    n = (0, V.Z)(e, 2),
                    r = n[0],
                    o = n[1];
                if ("drop-shadow" === r) return t;
                var i = o.match(z) || [],
                    a = (0, V.Z)(i, 1)[0];
                if (!a) return t;
                var s = o.replace(a, ""),
                    u = ke.has(r) ? 1 : 0;
                return a !== o && (u *= 100), r + "(" + u + s + ")"
            }
            var Ae = /([a-z-]*)\(.*?\)/g,
                Te = Object.assign(Object.assign({}, Ct), {
                    getAnimatableNone: function(t) {
                        var e = t.match(Ae);
                        return e ? e.map(je).join(" ") : t
                    }
                }),
                Ie = (0, r.pi)((0, r.pi)({}, Y), {
                    transform: Math.round
                }),
                Re = {
                    borderWidth: at,
                    borderTopWidth: at,
                    borderRightWidth: at,
                    borderBottomWidth: at,
                    borderLeftWidth: at,
                    borderRadius: at,
                    radius: at,
                    borderTopLeftRadius: at,
                    borderTopRightRadius: at,
                    borderBottomRightRadius: at,
                    borderBottomLeftRadius: at,
                    width: at,
                    maxWidth: at,
                    height: at,
                    maxHeight: at,
                    size: at,
                    top: at,
                    right: at,
                    bottom: at,
                    left: at,
                    padding: at,
                    paddingTop: at,
                    paddingRight: at,
                    paddingBottom: at,
                    paddingLeft: at,
                    margin: at,
                    marginTop: at,
                    marginRight: at,
                    marginBottom: at,
                    marginLeft: at,
                    rotate: ot,
                    rotateX: ot,
                    rotateY: ot,
                    rotateZ: ot,
                    scale: G,
                    scaleX: G,
                    scaleY: G,
                    scaleZ: G,
                    skew: ot,
                    skewX: ot,
                    skewY: ot,
                    distance: at,
                    translateX: at,
                    translateY: at,
                    translateZ: at,
                    x: at,
                    y: at,
                    z: at,
                    perspective: at,
                    transformPerspective: at,
                    opacity: X,
                    originX: ct,
                    originY: ct,
                    originZ: at,
                    zIndex: Ie,
                    fillOpacity: X,
                    strokeOpacity: X,
                    numOctaves: Ie
                },
                De = (0, r.pi)((0, r.pi)({}, Re), {
                    color: bt,
                    backgroundColor: bt,
                    outlineColor: bt,
                    fill: bt,
                    stroke: bt,
                    borderColor: bt,
                    borderTopColor: bt,
                    borderRightColor: bt,
                    borderBottomColor: bt,
                    borderLeftColor: bt,
                    filter: Te,
                    WebkitFilter: Te
                }),
                Me = function(t) {
                    return De[t]
                };

            function Le(t, e) {
                var n, r = Me(t);
                return r !== Te && (r = Ct), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            var Ne = !1,
                _e = function(t) {
                    return we(t) ? t[t.length - 1] || 0 : t
                };

            function Fe(t) {
                var e = t.ease,
                    n = t.times,
                    o = t.yoyo,
                    i = t.flip,
                    a = t.loop,
                    s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
                    u = (0, r.pi)({}, s);
                return n && (u.offset = n), s.duration && (u.duration = le(s.duration)), s.repeatDelay && (u.repeatDelay = le(s.repeatDelay)), e && (u.ease = function(t) {
                    return Array.isArray(t) && "number" != typeof t[0]
                }(e) ? e.map(be) : be(e)), "tween" === s.type && (u.type = "keyframes"), (o || a || i) && (!0, o ? u.repeatType = "reverse" : a ? u.repeatType = "loop" : i && (u.repeatType = "mirror"), u.repeat = a || o || i || s.repeat), "spring" !== s.type && (u.type = "keyframes"), u
            }

            function Ve(t, e, n) {
                var o, i, a, s;
                return Array.isArray(e.to) && (null !== (o = t.duration) && void 0 !== o || (t.duration = .8)),
                    function(t) {
                        Array.isArray(t.to) && null === t.to[0] && (t.to = (0, r.ev)([], (0, r.CR)(t.to), !1), t.to[0] = t.from)
                    }(e),
                    function(t) {
                        t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                        var e = (0, r._T)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                        return !!Object.keys(e).length
                    }(t) || (t = (0, r.pi)((0, r.pi)({}, t), (i = n, a = e.to, s = we(a) ? Se : Ce[i] || Ce.default, (0, r.pi)({
                        to: a
                    }, s(a))))), (0, r.pi)((0, r.pi)({}, e), Fe(t))
            }

            function Be(t, e, n, o, i) {
                var a, s = ze(o, t),
                    u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
                    c = xe(t, n);
                "none" === u && c && "string" == typeof n ? u = Le(t, n) : qe(u) && "string" == typeof n ? u = Ue(n) : !Array.isArray(n) && qe(n) && "string" == typeof u && (n = Ue(u));
                var l = xe(t, u);
                return "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property."), l && c && !1 !== s.type ? function() {
                    var o = {
                        from: u,
                        to: n,
                        velocity: e.getVelocity(),
                        onComplete: i,
                        onUpdate: function(t) {
                            return e.set(t)
                        }
                    };
                    return "inertia" === s.type || "decay" === s.type ? function(t) {
                        var e, n = t.from,
                            r = void 0 === n ? 0 : n,
                            o = t.velocity,
                            i = void 0 === o ? 0 : o,
                            a = t.min,
                            s = t.max,
                            u = t.power,
                            c = void 0 === u ? .8 : u,
                            l = t.timeConstant,
                            f = void 0 === l ? 750 : l,
                            d = t.bounceStiffness,
                            p = void 0 === d ? 500 : d,
                            v = t.bounceDamping,
                            m = void 0 === v ? 10 : v,
                            h = t.restDelta,
                            g = void 0 === h ? 1 : h,
                            y = t.modifyTarget,
                            b = t.driver,
                            x = t.onUpdate,
                            w = t.onComplete,
                            O = t.onStop;

                        function E(t) {
                            return void 0 !== a && t < a || void 0 !== s && t > s
                        }

                        function P(t) {
                            return void 0 === a ? s : void 0 === s || Math.abs(a - t) < Math.abs(s - t) ? a : s
                        }

                        function S(t) {
                            null == e || e.stop(), e = ue(Object.assign(Object.assign({}, t), {
                                driver: b,
                                onUpdate: function(e) {
                                    var n;
                                    null == x || x(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: w,
                                onStop: O
                            }))
                        }

                        function k(t) {
                            S(Object.assign({
                                type: "spring",
                                stiffness: p,
                                damping: m,
                                restDelta: g
                            }, t))
                        }
                        if (E(r)) k({
                            from: r,
                            velocity: i,
                            to: P(r)
                        });
                        else {
                            var j = c * i + r;
                            void 0 !== y && (j = y(j));
                            var A, T, I = P(j),
                                R = I === a ? -1 : 1;
                            S({
                                type: "decay",
                                from: r,
                                velocity: i,
                                timeConstant: f,
                                power: c,
                                restDelta: g,
                                modifyTarget: y,
                                onUpdate: E(j) ? function(t) {
                                    A = T, T = t, i = (0, ce.R)(t - A, (0, C.$B)().delta), (1 === R && t > I || -1 === R && t < I) && k({
                                        from: t,
                                        to: I,
                                        velocity: i
                                    })
                                } : void 0
                            })
                        }
                        return {
                            stop: function() {
                                return null == e ? void 0 : e.stop()
                            }
                        }
                    }((0, r.pi)((0, r.pi)({}, o), s)) : ue((0, r.pi)((0, r.pi)({}, Ve(s, o, t)), {
                        onUpdate: function(t) {
                            var e;
                            o.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
                        },
                        onComplete: function() {
                            var t;
                            o.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
                        }
                    }))
                } : function() {
                    var t, r, o = _e(n);
                    return e.set(o), i(), null === (t = null == s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, o), null === (r = null == s ? void 0 : s.onComplete) || void 0 === r || r.call(s), {
                        stop: function() {}
                    }
                }
            }

            function qe(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function Ue(t) {
                return "number" == typeof t ? 0 : Le("", t)
            }

            function ze(t, e) {
                return t[e] || t.default || t
            }

            function Ze(t, e, n, r) {
                return void 0 === r && (r = {}), Ne && (r = {
                    type: !1
                }), e.start((function(o) {
                    var i, a, s = Be(t, e, n, r, o),
                        u = function(t, e) {
                            var n, r;
                            return null !== (r = null !== (n = (ze(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
                        }(r, t),
                        c = function() {
                            return a = s()
                        };
                    return u ? i = setTimeout(c, le(u)) : c(),
                        function() {
                            clearTimeout(i), null == a || a.stop()
                        }
                }))
            }
            var He = n(32821),
                We = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                Ye = We.length,
                Xe = function(t) {
                    return "string" == typeof t ? parseFloat(t) : t
                },
                Ge = function(t) {
                    return "number" == typeof t || at.test(t)
                };

            function Ke(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            var $e = Qe(0, .5, Gt),
                Je = Qe(.5, .95, Zt);

            function Qe(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n(B(t, e, r))
                }
            }

            function tn(t, e) {
                t.min = e.min, t.max = e.max
            }

            function en(t, e) {
                tn(t.x, e.x), tn(t.y, e.y)
            }

            function nn(t) {
                return void 0 === t || 1 === t
            }

            function rn(t) {
                var e = t.scale,
                    n = t.scaleX,
                    r = t.scaleY;
                return !nn(e) || !nn(n) || !nn(r)
            }

            function on(t) {
                return rn(t) || an(t.x) || an(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function an(t) {
                return t && "0%" !== t
            }

            function sn(t, e, n) {
                return n + e * (t - n)
            }

            function un(t, e, n, r, o) {
                return void 0 !== o && (t = sn(t, o, r)), sn(t, n, r) + e
            }

            function cn(t, e, n, r, o) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = un(t.min, e, n, r, o), t.max = un(t.max, e, n, r, o)
            }

            function ln(t, e) {
                var n = e.x,
                    r = e.y;
                cn(t.x, n.translate, n.scale, n.originPoint), cn(t.y, r.translate, r.scale, r.originPoint)
            }

            function fn(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function dn(t, e, n) {
                var o = (0, r.CR)(n, 3),
                    i = o[0],
                    a = o[1],
                    s = o[2],
                    u = void 0 !== e[s] ? e[s] : .5,
                    c = k(t.min, t.max, u);
                cn(t, e[i], e[a], c, e.scale)
            }
            var pn = ["x", "scaleX", "originX"],
                vn = ["y", "scaleY", "originY"];

            function mn(t, e) {
                dn(t.x, e, pn), dn(t.y, e, vn)
            }
            var hn = function(t) {
                    return t.hasOwnProperty("x") && t.hasOwnProperty("y")
                },
                gn = function(t) {
                    return hn(t) && t.hasOwnProperty("z")
                },
                yn = function(t, e) {
                    return Math.abs(t - e)
                };

            function bn(t, e) {
                if (kt(t) && kt(e)) return yn(t, e);
                if (hn(t) && hn(e)) {
                    var n = yn(t.x, e.x),
                        r = yn(t.y, e.y),
                        o = gn(t) && gn(e) ? yn(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
                }
            }

            function xn(t) {
                return t.max - t.min
            }

            function wn(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), bn(t, e) < n
            }

            function On(t, e, n, r) {
                void 0 === r && (r = .5), t.origin = r, t.originPoint = k(e.min, e.max, t.origin), t.scale = xn(n) / xn(e), (wn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = k(n.min, n.max, t.origin) - t.originPoint, (wn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function En(t, e, n, r) {
                On(t.x, e.x, n.x, null == r ? void 0 : r.originX), On(t.y, e.y, n.y, null == r ? void 0 : r.originY)
            }

            function Pn(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + xn(e)
            }

            function Sn(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + xn(e)
            }

            function Cn(t, e, n) {
                Sn(t.x, e.x, n.x), Sn(t.y, e.y, n.y)
            }

            function kn(t, e, n, r, o) {
                return t = sn(t -= e, 1 / n, r), void 0 !== o && (t = sn(t, 1 / o, r)), t
            }

            function jn(t, e, n, o, i) {
                var a = (0, r.CR)(n, 3),
                    s = a[0],
                    u = a[1],
                    c = a[2];
                ! function(t, e, n, r, o, i, a) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), it.test(e) && (e = parseFloat(e), e = k(a.min, a.max, e / 100) - a.min), "number" == typeof e) {
                        var s = k(i.min, i.max, r);
                        t === i && (s -= e), t.min = kn(t.min, e, n, s, o), t.max = kn(t.max, e, n, s, o)
                    }
                }(t, e[s], e[u], e[c], e.scale, o, i)
            }
            var An = ["x", "scaleX", "originX"],
                Tn = ["y", "scaleY", "originY"];

            function In(t, e, n, r) {
                jn(t.x, e, An, null == n ? void 0 : n.x, null == r ? void 0 : r.x), jn(t.y, e, Tn, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function Rn(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function Dn(t) {
                return Rn(t.x) && Rn(t.y)
            }

            function Mn(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var Ln = n(52877),
                Nn = function() {
                    function t() {
                        this.members = []
                    }
                    return t.prototype.add = function(t) {
                        (0, Ln.y4)(this.members, t), t.scheduleRender()
                    }, t.prototype.remove = function(t) {
                        if ((0, Ln.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                            var e = this.members[this.members.length - 1];
                            e && this.promote(e)
                        }
                    }, t.prototype.relegate = function(t) {
                        var e, n = this.members.findIndex((function(e) {
                            return t === e
                        }));
                        if (0 === n) return !1;
                        for (var r = n; r >= 0; r--) {
                            var o = this.members[r];
                            if (!1 !== o.isPresent) {
                                e = o;
                                break
                            }
                        }
                        return !!e && (this.promote(e), !0)
                    }, t.prototype.promote = function(t, e) {
                        var n, r = this.lead;
                        t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
                    }, t.prototype.exitAnimationComplete = function() {
                        this.members.forEach((function(t) {
                            var e, n, r, o, i;
                            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                        }))
                    }, t.prototype.scheduleRender = function() {
                        this.members.forEach((function(t) {
                            t.instance && t.scheduleRender(!1)
                        }))
                    }, t.prototype.removeLeadSnapshot = function() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }, t
                }(),
                _n = {};

            function Fn(t, e, n) {
                var r = t.x.translate / e.x,
                    o = t.y.translate / e.y,
                    i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
                if (n) {
                    var a = n.rotate,
                        s = n.rotateX,
                        u = n.rotateY;
                    a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "))
                }
                return "translate3d(0px, 0px, 0) scale(1, 1)" === (i += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")")) ? "none" : i
            }

            function Vn(t) {
                return [t("x"), t("y")]
            }
            var Bn = ["", "X", "Y", "Z"],
                qn = ["transformPerspective", "x", "y", "z"];

            function Un(t, e) {
                return qn.indexOf(t) - qn.indexOf(e)
            }["translate", "scale", "rotate", "skew"].forEach((function(t) {
                return Bn.forEach((function(e) {
                    return qn.push(t + e)
                }))
            }));
            var zn = new Set(qn);

            function Zn(t) {
                return zn.has(t)
            }
            var Hn = new Set(["originX", "originY", "originZ"]);

            function Wn(t) {
                return Hn.has(t)
            }
            var Yn = function(t, e) {
                    return t.depth - e.depth
                },
                Xn = function() {
                    function t() {
                        this.children = [], this.isDirty = !1
                    }
                    return t.prototype.add = function(t) {
                        (0, Ln.y4)(this.children, t), this.isDirty = !0
                    }, t.prototype.remove = function(t) {
                        (0, Ln.cl)(this.children, t), this.isDirty = !0
                    }, t.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort(Yn), this.isDirty = !1, this.children.forEach(t)
                    }, t
                }();

            function Gn(t) {
                var e, n = A(t) ? t.get() : t;
                return e = n, Boolean(e && "object" == typeof e && e.mix && e.toValue) ? n.toValue() : n
            }
            var Kn = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function $n(t) {
                var e = t.attachResizeListener,
                    n = t.defaultParent,
                    o = t.measureScroll,
                    i = t.resetTransform;
                return function() {
                    function t(t, e, o) {
                        var i = this;
                        void 0 === e && (e = {}), void 0 === o && (o = null == n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            i.isUpdating && (i.isUpdating = !1, i.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            i.nodes.forEach(or), i.nodes.forEach(ir)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = o ? o.root || o : this, this.path = o ? (0, r.ev)((0, r.ev)([], (0, r.CR)(o.path), !1), [o], !1) : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new Xn)
                    }
                    return t.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new He.L), this.eventHandlers.get(t).add(e)
                    }, t.prototype.notifyListeners = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var o = this.eventHandlers.get(t);
                        null == o || o.notify.apply(o, (0, r.ev)([], (0, r.CR)(e), !1))
                    }, t.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, t.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, t.prototype.mount = function(t, n) {
                        var o, i = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout,
                                c = a.visualElement;
                            if (c && !c.getInstance() && c.mount(t), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                                var l, f = function() {
                                    return i.root.updateBlockedByResize = !1
                                };
                                e(t, (function() {
                                    i.root.updateBlockedByResize = !0, clearTimeout(l), l = setTimeout(f, 250), Kn.hasAnimatedSinceResize && (Kn.hasAnimatedSinceResize = !1, i.nodes.forEach(rr))
                                }))
                            }
                            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && c && (s || u) && this.addEventListener("didUpdate", (function(t) {
                                var e, n, o, a, s, u = t.delta,
                                    l = t.hasLayoutChanged,
                                    f = t.hasRelativeTargetChanged,
                                    d = t.layout;
                                if (i.isTreeAnimationBlocked()) return i.target = void 0, void(i.relativeTarget = void 0);
                                var p = null !== (n = null !== (e = i.options.transition) && void 0 !== e ? e : c.getDefaultTransition()) && void 0 !== n ? n : fr,
                                    v = c.getProps().onLayoutAnimationComplete,
                                    m = !i.targetLayout || !Mn(i.targetLayout, d) || f,
                                    h = !l && f;
                                (null === (o = i.resumeFrom) || void 0 === o ? void 0 : o.instance) || h || l && (m || !i.currentAnimation) ? (i.resumeFrom && (i.resumingFrom = i.resumeFrom, i.resumingFrom.resumingFrom = void 0), i.setAnimationOrigin(u, h), i.startAnimation((0, r.pi)((0, r.pi)({}, ze(p, "layout")), {
                                    onComplete: v
                                }))) : i.isLead() && (null === (s = (a = i.options).onExitComplete) || void 0 === s || s.call(a)), i.targetLayout = d
                            }))
                        }
                    }, t.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, C.qY.preRender(this.updateProjection)
                    }, t.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, t.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, t.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, t.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, t.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ar))
                    }, t.prototype.willUpdate = function(t) {
                        var e, n, r;
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var o = 0; o < this.path.length; o++) {
                                var i = this.path[o];
                                i.shouldResetTransform = !0, i.updateScroll()
                            }
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout;
                            if (void 0 !== s || u) {
                                var c = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null == c ? void 0 : c(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, t.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(er);
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(dr), this.potentialNodes.clear()), this.nodes.forEach(nr), this.nodes.forEach(Jn), this.nodes.forEach(Qn), this.clearAllSnapshots(), C.iW.update(), C.iW.preRender(), C.iW.render())
                    }, t.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(tr), this.sharedNodes.forEach(sr)
                    }, t.prototype.scheduleUpdateProjection = function() {
                        C.ZP.preRender(this.updateProjection, !1, !0)
                    }, t.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        C.ZP.postRender((function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        }))
                    }, t.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            vr(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, t.prototype.updateLayout = function() {
                        var t;
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var e = 0; e < this.path.length; e++) {
                                    this.path[e].updateScroll()
                                }
                            var n = this.measure();
                            vr(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
                        }
                    }, t.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.scroll = o(this.instance))
                    }, t.prototype.resetTransform = function() {
                        var t;
                        if (i) {
                            var e = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !Dn(this.projectionDelta),
                                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                o = null == r ? void 0 : r(this.latestValues, ""),
                                a = o !== this.prevTransformTemplateValue;
                            e && (n || on(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, t.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        var e = t.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (fn(e.x, n.x), fn(e.y, n.y)), e
                    }, t.prototype.removeElementScroll = function(t) {
                        var e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        en(e, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                o = r.scroll,
                                i = r.options;
                            r !== this.root && o && i.layoutScroll && (fn(e.x, o.x), fn(e.y, o.y))
                        }
                        return e
                    }, t.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        en(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            !e && o.options.layoutScroll && o.scroll && o !== o.root && mn(n, {
                                x: -o.scroll.x,
                                y: -o.scroll.y
                            }), on(o.latestValues) && mn(n, o.latestValues)
                        }
                        return on(this.latestValues) && mn(n, this.latestValues), n
                    }, t.prototype.removeTransform = function(t) {
                        var e, n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        en(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            if (o.instance && on(o.latestValues)) {
                                rn(o.latestValues) && o.updateSnapshot();
                                var i = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                en(i, o.measure()), In(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
                            }
                        }
                        return on(this.latestValues) && In(n, this.latestValues), n
                    }, t.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, t.prototype.setOptions = function(t) {
                        var e;
                        this.options = (0, r.pi)((0, r.pi)((0, r.pi)({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, t.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, t.prototype.resolveTargetDelta = function() {
                        var t, e, n, r, o = this.options,
                            i = o.layout,
                            a = o.layoutId;
                        this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Cn(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), en(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.targetWithTransforms = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Pn(e.x, n.x, r.x), Pn(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : en(this.target, this.layout.actual), ln(this.target, this.targetDelta)) : en(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Cn(this.relativeTargetOrigin, this.target, this.relativeParent.target), en(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, t.prototype.getClosestProjectingParent = function() {
                        if (this.parent && !on(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, t.prototype.calcProjection = function() {
                        var t, e = this.options,
                            n = e.layout,
                            r = e.layoutId;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var o = this.getLead();
                            en(this.layoutCorrected, this.layout.actual),
                                function(t, e, n, r) {
                                    var o, i;
                                    void 0 === r && (r = !1);
                                    var a = n.length;
                                    if (a) {
                                        var s, u;
                                        e.x = e.y = 1;
                                        for (var c = 0; c < a; c++) u = (s = n[c]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && mn(t, {
                                            x: -s.scroll.x,
                                            y: -s.scroll.y
                                        }), u && (e.x *= u.x.scale, e.y *= u.y.scale, ln(t, u)), r && on(s.latestValues) && mn(t, s.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                            var i = o.target;
                            if (i) {
                                this.projectionDelta || (this.projectionDelta = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                }, this.projectionDeltaWithTransform = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                });
                                var a = this.treeScale.x,
                                    s = this.treeScale.y,
                                    u = this.projectionTransform;
                                En(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = Fn(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                            }
                        }
                    }, t.prototype.hide = function() {
                        this.isVisible = !1
                    }, t.prototype.show = function() {
                        this.isVisible = !0
                    }, t.prototype.scheduleRender = function(t) {
                        var e, n, r;
                        void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, t.prototype.setAnimationOrigin = function(t, e) {
                        var n, o = this;
                        void 0 === e && (e = !1);
                        var i = this.snapshot,
                            a = (null == i ? void 0 : i.latestValues) || {},
                            s = (0, r.pi)({}, this.latestValues),
                            u = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            };
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var c = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            l = null == i ? void 0 : i.isShared,
                            f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                            d = Boolean(l && !f && !0 === this.options.crossfade && !this.path.some(lr));
                        this.mixTargetDelta = function(e) {
                            var n, r, i, p, v, m = e / 1e3;
                            ur(u.x, t.x, m), ur(u.y, t.y, m), o.setTargetDelta(u), o.relativeTarget && o.relativeTargetOrigin && o.layout && (null === (n = o.relativeParent) || void 0 === n ? void 0 : n.layout) && (Cn(c, o.layout.actual, o.relativeParent.layout.actual), r = o.relativeTarget, i = o.relativeTargetOrigin, p = c, v = m, cr(r.x, i.x, p.x, v), cr(r.y, i.y, p.y, v)), l && (o.animationValues = s, function(t, e, n, r, o, i) {
                                var a, s, u, c;
                                o ? (t.opacity = k(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, $e(r)), t.opacityExit = k(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, Je(r))) : i && (t.opacity = k(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (c = n.opacity) && void 0 !== c ? c : 1, r));
                                for (var l = 0; l < Ye; l++) {
                                    var f = "border".concat(We[l], "Radius"),
                                        d = Ke(e, f),
                                        p = Ke(n, f);
                                    void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || Ge(d) === Ge(p) ? (t[f] = Math.max(k(Xe(d), Xe(p), r), 0), (it.test(p) || it.test(d)) && (t[f] += "%")) : t[f] = p)
                                }(e.rotate || n.rotate) && (t.rotate = k(e.rotate || 0, n.rotate || 0, r))
                            }(s, a, o.latestValues, m, d, f)), o.root.scheduleUpdateProjection(), o.scheduleRender()
                        }, this.mixTargetDelta(0)
                    }, t.prototype.startAnimation = function(t) {
                        var e, n, o = this;
                        null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (C.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = C.ZP.update((function() {
                            Kn.hasAnimatedSinceResize = !0, o.currentAnimation = function(t, e, n) {
                                void 0 === n && (n = {});
                                var r = A(t) ? t : (0, j.B)(t);
                                return Ze("", r, e, n), {
                                    stop: function() {
                                        return r.stop()
                                    },
                                    isAnimating: function() {
                                        return r.isAnimating()
                                    }
                                }
                            }(0, 1e3, (0, r.pi)((0, r.pi)({}, t), {
                                onUpdate: function(e) {
                                    var n;
                                    o.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), o.completeAnimation()
                                }
                            })), o.resumingFrom && (o.resumingFrom.currentAnimation = o.currentAnimation), o.pendingAnimation = void 0
                        }))
                    }, t.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, t.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, t.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            n = t.target,
                            r = t.layout,
                            o = t.latestValues;
                        e && n && r && (en(e, n), mn(e, o), En(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                    }, t.prototype.registerSharedNode = function(t, e) {
                        var n, r, o;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new Nn), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                        })
                    }, t.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, t.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, t.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, t.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, t.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            n = e.needsReset,
                            r = e.transition,
                            o = e.preserveFollowOpacity,
                            i = this.getStack();
                        i && i.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, t.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, t.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, n = {}, r = 0; r < Bn.length; r++) {
                                var o = "rotate" + Bn[r];
                                t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                            }
                            if (e) {
                                for (var o in null == t || t.syncRender(), n) t.setStaticValue(o, n[o]);
                                t.scheduleRender()
                            }
                        }
                    }, t.prototype.getProjectionStyles = function(t) {
                        var e, n, r, o, i, a;
                        void 0 === t && (t = {});
                        var s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Gn(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
                        var c = this.getLead();
                        if (!this.projectionDelta || !this.layout || !c.target) {
                            var l = {};
                            return this.options.layoutId && (l.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, l.pointerEvents = Gn(t.pointerEvents) || ""), this.hasProjected && !on(this.latestValues) && (l.transform = u ? u({}, "") : "none", this.hasProjected = !1), l
                        }
                        var f = c.animationValues || c.latestValues;
                        this.applyTransformsToTarget(), s.transform = Fn(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
                        var d = this.projectionDelta,
                            p = d.x,
                            v = d.y;
                        for (var m in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), c.animationValues ? s.opacity = c === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = c === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, _n)
                            if (void 0 !== f[m]) {
                                var h = _n[m],
                                    g = h.correct,
                                    y = h.applyTo,
                                    b = g(f[m], c);
                                if (y)
                                    for (var x = y.length, w = 0; w < x; w++) s[y[w]] = b;
                                else s[m] = b
                            }
                        return this.options.layoutId && (s.pointerEvents = c === this ? Gn(t.pointerEvents) || "" : "none"), s
                    }, t.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, t.prototype.resetTree = function() {
                        this.root.nodes.forEach((function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        })), this.root.nodes.forEach(er), this.root.sharedNodes.clear()
                    }, t
                }()
            }

            function Jn(t) {
                t.updateLayout()
            }

            function Qn(t) {
                var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    var a = t.layout,
                        s = a.actual,
                        u = a.measured;
                    "size" === t.options.animationType ? Vn((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = xn(e);
                        e.min = s[t].min, e.max = e.min + n
                    })) : "position" === t.options.animationType && Vn((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = xn(s[t]);
                        e.max = e.min + n
                    }));
                    var c = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    En(c, s, i.layout);
                    var l = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    i.isShared ? En(l, t.applyTransform(u, !0), i.measured) : En(l, s, i.layout);
                    var f = !Dn(c),
                        d = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var p = t.relativeParent,
                            v = p.snapshot,
                            m = p.layout;
                        if (v && m) {
                            var h = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Cn(h, i.layout, v.layout);
                            var g = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Cn(g, s, m.actual), Mn(h, g) || (d = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: s,
                        snapshot: i,
                        delta: l,
                        layoutDelta: c,
                        hasLayoutChanged: f,
                        hasRelativeTargetChanged: d
                    })
                } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
                t.options.transition = void 0
            }

            function tr(t) {
                t.clearSnapshot()
            }

            function er(t) {
                t.clearMeasurements()
            }

            function nr(t) {
                t.resetTransform()
            }

            function rr(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function or(t) {
                t.resolveTargetDelta()
            }

            function ir(t) {
                t.calcProjection()
            }

            function ar(t) {
                t.resetRotation()
            }

            function sr(t) {
                t.removeLeadSnapshot()
            }

            function ur(t, e, n) {
                t.translate = k(e.translate, 0, n), t.scale = k(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function cr(t, e, n, r) {
                t.min = k(e.min, n.min, r), t.max = k(e.max, n.max, r)
            }

            function lr(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var fr = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function dr(t, e) {
                for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                    if (Boolean(t.path[r].instance)) {
                        n = t.path[r];
                        break
                    }
                var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                o && t.mount(o, !0)
            }

            function pr(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function vr(t) {
                pr(t.x), pr(t.y)
            }
            var mr = 1;
            var hr = n(3906),
                gr = (0, o.createContext)({});
            var yr = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, r.ZT)(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
                    return this.updateProps(), null
                }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
                    var t = this.props,
                        e = t.visualElement,
                        n = t.props;
                    e && e.setProps(n)
                }, e.prototype.render = function() {
                    return this.props.children
                }, e
            }(o.Component);

            function br(t) {
                var e = t.preloadedFeatures,
                    n = t.createVisualElement,
                    i = t.projectionNodeConstructor,
                    d = t.useRender,
                    p = t.useVisualState,
                    h = t.Component;
                return e && function(t) {
                    for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? a.projectionNodeConstructor = t[e] : a[e].Component = t[e])
                }(e), (0, o.forwardRef)((function(t, e) {
                    var g = function(t) {
                        var e, n = t.layoutId,
                            r = null === (e = (0, o.useContext)(hr.p)) || void 0 === e ? void 0 : e.id;
                        return r && void 0 !== n ? r + "-" + n : n
                    }(t);
                    t = (0, r.pi)((0, r.pi)({}, t), {
                        layoutId: g
                    });
                    var y = (0, o.useContext)(l),
                        b = null,
                        x = O(t),
                        w = y.isStatic ? void 0 : (0, S.h)((function() {
                            if (Kn.hasEverUpdated) return mr++
                        })),
                        E = p(t, y.isStatic);
                    return !y.isStatic && P.j && (x.visualElement = v(h, E, (0, r.pi)((0, r.pi)({}, y), t), n), function(t, e, n, r) {
                        var i, a = e.layoutId,
                            s = e.layout,
                            u = e.drag,
                            c = e.dragConstraints,
                            l = e.layoutScroll,
                            f = (0, o.useContext)(gr);
                        r && n && !(null == n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (i = n.parent) || void 0 === i ? void 0 : i.projection), n.projection.setOptions({
                            layoutId: a,
                            layout: s,
                            alwaysMeasureLayout: Boolean(u) || c && m(c),
                            visualElement: n,
                            scheduleRender: function() {
                                return n.scheduleRender()
                            },
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: f,
                            layoutScroll: l
                        }))
                    }(w, t, x.visualElement, i || a.projectionNodeConstructor), b = function(t, e, n) {
                        var i = [];
                        if ((0, o.useContext)(s), !e) return null;
                        for (var l = 0; l < c; l++) {
                            var f = u[l],
                                d = a[f],
                                p = d.isEnabled,
                                v = d.Component;
                            p(t) && v && i.push(o.createElement(v, (0, r.pi)({
                                key: f
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return i
                    }(t, x.visualElement)), o.createElement(yr, {
                        visualElement: x.visualElement,
                        props: (0, r.pi)((0, r.pi)({}, y), t)
                    }, b, o.createElement(f.Provider, {
                        value: x
                    }, d(h, t, w, function(t, e, n) {
                        return (0, o.useCallback)((function(r) {
                            var o;
                            r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : m(n) && (n.current = r))
                        }), [e])
                    }(E, x.visualElement, e), E, y.isStatic, x.visualElement)))
                }))
            }

            function xr(t) {
                function e(e, n) {
                    return void 0 === n && (n = {}), br(t(e, n))
                }
                if ("undefined" == typeof Proxy) return e;
                var n = new Map;
                return new Proxy(e, {
                    get: function(t, r) {
                        return n.has(r) || n.set(r, e(r)), n.get(r)
                    }
                })
            }
            var wr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function Or(t) {
                return "string" == typeof t && !t.includes("-") && !!(wr.indexOf(t) > -1 || /[A-Z]/.test(t))
            }

            function Er(t, e) {
                var n = e.layout,
                    r = e.layoutId;
                return Zn(t) || Wn(t) || (n || void 0 !== r) && (!!_n[t] || "opacity" === t)
            }
            var Pr = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
            };

            function Sr(t) {
                return t.startsWith("--")
            }
            var Cr = function(t, e) {
                return e && "number" == typeof t ? e.transform(t) : t
            };

            function kr(t, e, n, r) {
                var o, i = t.style,
                    a = t.vars,
                    s = t.transform,
                    u = t.transformKeys,
                    c = t.transformOrigin;
                u.length = 0;
                var l = !1,
                    f = !1,
                    d = !0;
                for (var p in e) {
                    var v = e[p];
                    if (Sr(p)) a[p] = v;
                    else {
                        var m = Re[p],
                            h = Cr(v, m);
                        if (Zn(p)) {
                            if (l = !0, s[p] = h, u.push(p), !d) continue;
                            v !== (null !== (o = m.default) && void 0 !== o ? o : 0) && (d = !1)
                        } else Wn(p) ? (c[p] = h, f = !0) : i[p] = h
                    }
                }
                l ? i.transform = function(t, e, n, r) {
                    var o = t.transform,
                        i = t.transformKeys,
                        a = e.enableHardwareAcceleration,
                        s = void 0 === a || a,
                        u = e.allowTransformNone,
                        c = void 0 === u || u,
                        l = "";
                    i.sort(Un);
                    for (var f = !1, d = i.length, p = 0; p < d; p++) {
                        var v = i[p];
                        l += "".concat(Pr[v] || v, "(").concat(o[v], ") "), "z" === v && (f = !0)
                    }
                    return !f && s ? l += "translateZ(0)" : l = l.trim(), r ? l = r(o, n ? "" : l) : c && n && (l = "none"), l
                }(t, n, d, r) : r ? i.transform = r({}, "") : !e.transform && i.transform && (i.transform = "none"), f && (i.transformOrigin = function(t) {
                    var e = t.originX,
                        n = void 0 === e ? "50%" : e,
                        r = t.originY,
                        o = void 0 === r ? "50%" : r,
                        i = t.originZ,
                        a = void 0 === i ? 0 : i;
                    return "".concat(n, " ").concat(o, " ").concat(a)
                }(c))
            }
            var jr = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function Ar(t, e, n) {
                for (var r in e) A(e[r]) || Er(r, n) || (t[r] = e[r])
            }

            function Tr(t, e, n) {
                var i = {};
                return Ar(i, t.style || {}, t), Object.assign(i, function(t, e, n) {
                    var i = t.transformTemplate;
                    return (0, o.useMemo)((function() {
                        var t = {
                            style: {},
                            transform: {},
                            transformKeys: [],
                            transformOrigin: {},
                            vars: {}
                        };
                        kr(t, e, {
                            enableHardwareAcceleration: !n
                        }, i);
                        var o = t.vars,
                            a = t.style;
                        return (0, r.pi)((0, r.pi)({}, o), a)
                    }), [e])
                }(t, e, n)), t.transformValues && (i = t.transformValues(i)), i
            }

            function Ir(t, e, n) {
                var r = {},
                    o = Tr(t, e, n);
                return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), r.style = o, r
            }
            var Rr = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function Dr(t) {
                return Rr.has(t)
            }
            var Mr, Lr = function(t) {
                return !Dr(t)
            };
            try {
                (Mr = n(20125).Z) && (Lr = function(t) {
                    return t.startsWith("on") ? !Dr(t) : Mr(t)
                })
            } catch (ra) {}

            function Nr(t, e, n) {
                return "string" == typeof t ? t : at.transform(e + n * t)
            }
            var _r = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                Fr = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function Vr(t, e, n, o) {
                var i = e.attrX,
                    a = e.attrY,
                    s = e.originX,
                    u = e.originY,
                    c = e.pathLength,
                    l = e.pathSpacing,
                    f = void 0 === l ? 1 : l,
                    d = e.pathOffset,
                    p = void 0 === d ? 0 : d;
                kr(t, (0, r._T)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, o), t.attrs = t.style, t.style = {};
                var v = t.attrs,
                    m = t.style,
                    h = t.dimensions;
                v.transform && (h && (m.transform = v.transform), delete v.transform), h && (void 0 !== s || void 0 !== u || m.transform) && (m.transformOrigin = function(t, e, n) {
                    var r = Nr(e, t.x, t.width),
                        o = Nr(n, t.y, t.height);
                    return "".concat(r, " ").concat(o)
                }(h, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== i && (v.x = i), void 0 !== a && (v.y = a), void 0 !== c && function(t, e, n, r, o) {
                    void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
                    var i = o ? _r : Fr;
                    t[i.offset] = at.transform(-r);
                    var a = at.transform(e),
                        s = at.transform(n);
                    t[i.array] = "".concat(a, " ").concat(s)
                }(v, c, f, p, !1)
            }
            var Br = function() {
                return (0, r.pi)((0, r.pi)({}, {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }), {
                    attrs: {}
                })
            };

            function qr(t, e) {
                var n = (0, o.useMemo)((function() {
                    var n = Br();
                    return Vr(n, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), (0, r.pi)((0, r.pi)({}, n.attrs), {
                        style: (0, r.pi)({}, n.style)
                    })
                }), [e]);
                if (t.style) {
                    var i = {};
                    Ar(i, t.style, t), n.style = (0, r.pi)((0, r.pi)({}, i), n.style)
                }
                return n
            }

            function Ur(t) {
                void 0 === t && (t = !1);
                return function(e, n, i, a, s, u) {
                    var c = s.latestValues,
                        l = (Or(e) ? qr : Ir)(n, c, u),
                        f = function(t, e, n) {
                            var r = {};
                            for (var o in t)(Lr(o) || !0 === n && Dr(o) || !e && !Dr(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
                            return r
                        }(n, "string" == typeof e, t),
                        d = (0, r.pi)((0, r.pi)((0, r.pi)({}, f), l), {
                            ref: a
                        });
                    return i && (d["data-projection-id"] = i), (0, o.createElement)(e, d)
                }
            }
            var zr = /([a-z])([A-Z])/g,
                Zr = function(t) {
                    return t.replace(zr, "$1-$2").toLowerCase()
                };

            function Hr(t, e, n, r) {
                var o = e.style,
                    i = e.vars;
                for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
            }
            var Wr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function Yr(t, e) {
                for (var n in Hr(t, e), e.attrs) t.setAttribute(Wr.has(n) ? n : Zr(n), e.attrs[n])
            }

            function Xr(t) {
                var e = t.style,
                    n = {};
                for (var r in e)(A(e[r]) || Er(r, t)) && (n[r] = e[r]);
                return n
            }

            function Gr(t) {
                var e = Xr(t);
                for (var n in t) {
                    if (A(t[n])) e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
                }
                return e
            }

            function Kr(t) {
                return "object" == typeof t && "function" == typeof t.start
            }

            function $r(t, e, n, r) {
                var o = t.scrapeMotionValuesFromProps,
                    i = t.createRenderState,
                    a = t.onMount,
                    s = {
                        latestValues: Qr(e, n, r, o),
                        renderState: i()
                    };
                return a && (s.mount = function(t) {
                    return a(e, t, s)
                }), s
            }
            var Jr = function(t) {
                return function(e, n) {
                    var r = (0, o.useContext)(f),
                        i = (0, o.useContext)(d.O);
                    return n ? $r(t, e, r, i) : (0, S.h)((function() {
                        return $r(t, e, r, i)
                    }))
                }
            };

            function Qr(t, e, n, o) {
                var i = {},
                    a = !1 === (null == n ? void 0 : n.initial),
                    s = o(t);
                for (var u in s) i[u] = Gn(s[u]);
                var c = t.initial,
                    l = t.animate,
                    f = x(t),
                    d = w(t);
                e && d && !f && !1 !== t.inherit && (null != c || (c = e.initial), null != l || (l = e.animate));
                var p = a || !1 === c,
                    v = p ? l : c;
                v && "boolean" != typeof v && !Kr(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
                    var n = y(t, e);
                    if (n) {
                        var o = n.transitionEnd;
                        n.transition;
                        var a = (0, r._T)(n, ["transitionEnd", "transition"]);
                        for (var s in a) {
                            var u = a[s];
                            if (Array.isArray(u)) u = u[p ? u.length - 1 : 0];
                            null !== u && (i[s] = u)
                        }
                        for (var s in o) i[s] = o[s]
                    }
                }));
                return i
            }
            var to, eo = {
                    useVisualState: Jr({
                        scrapeMotionValuesFromProps: Gr,
                        createRenderState: Br,
                        onMount: function(t, e, n) {
                            var r = n.renderState,
                                o = n.latestValues;
                            try {
                                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (i) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            Vr(r, o, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), Yr(e, r)
                        }
                    })
                },
                no = {
                    useVisualState: Jr({
                        scrapeMotionValuesFromProps: Xr,
                        createRenderState: jr
                    })
                };
            ! function(t) {
                t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
            }(to || (to = {}));
            var ro = n(21890);

            function oo(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function io(t) {
                return !!t.touches
            }
            var ao = {
                pageX: 0,
                pageY: 0
            };

            function so(t, e) {
                void 0 === e && (e = "page");
                var n = t.touches[0] || t.changedTouches[0] || ao;
                return {
                    x: n[e + "X"],
                    y: n[e + "Y"]
                }
            }

            function uo(t, e) {
                return void 0 === e && (e = "page"), {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }

            function co(t, e) {
                return void 0 === e && (e = "page"), {
                    point: io(t) ? so(t, e) : uo(t, e)
                }
            }
            var lo = function(t, e) {
                    void 0 === e && (e = !1);
                    var n, r = function(e) {
                        return t(e, co(e))
                    };
                    return e ? (n = r, function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && n(t)
                    }) : r
                },
                fo = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                po = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function vo(t) {
                return P.j && null === window.onpointerdown ? t : P.j && null === window.ontouchstart ? po[t] : P.j && null === window.onmousedown ? fo[t] : t
            }

            function mo(t, e, n, r) {
                return (0, ro.E)(t, vo(e), lo(n, "pointerdown" === e), r)
            }

            function ho(t, e, n, r) {
                return (0, ro.p)(t, vo(e), n && lo(n, "pointerdown" === e), r)
            }

            function go(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var yo = go("dragHorizontal"),
                bo = go("dragVertical");

            function xo(t) {
                var e = !1;
                if ("y" === t) e = bo();
                else if ("x" === t) e = yo();
                else {
                    var n = yo(),
                        r = bo();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function wo() {
                var t = xo(!0);
                return !t || (t(), !1)
            }

            function Oo(t, e, n) {
                return function(r, o) {
                    var i;
                    oo(r) && !wo() && (null === (i = t.animationState) || void 0 === i || i.setActive(to.Hover, e), null == n || n(r, o))
                }
            }
            var Eo = function t(e, n) {
                    return !!n && (e === n || t(e, n.parentElement))
                },
                Po = n(98272);
            var So = new WeakMap,
                Co = new WeakMap,
                ko = function(t) {
                    var e;
                    null === (e = So.get(t.target)) || void 0 === e || e(t)
                },
                jo = function(t) {
                    t.forEach(ko)
                };

            function Ao(t, e, n) {
                var o = function(t) {
                    var e = t.root,
                        n = (0, r._T)(t, ["root"]),
                        o = e || document;
                    Co.has(o) || Co.set(o, {});
                    var i = Co.get(o),
                        a = JSON.stringify(n);
                    return i[a] || (i[a] = new IntersectionObserver(jo, (0, r.pi)({
                        root: e
                    }, n))), i[a]
                }(e);
                return So.set(t, n), o.observe(t),
                    function() {
                        So.delete(t), o.unobserve(t)
                    }
            }
            var To = {
                some: 0,
                all: 1
            };

            function Io(t, e, n, r) {
                var i = r.root,
                    a = r.margin,
                    s = r.amount,
                    u = void 0 === s ? "some" : s,
                    c = r.once;
                (0, o.useEffect)((function() {
                    if (t) {
                        var r = {
                            root: null == i ? void 0 : i.current,
                            rootMargin: a,
                            threshold: "number" == typeof u ? u : To[u]
                        };
                        return Ao(n.getInstance(), r, (function(t) {
                            var r, o = t.isIntersecting;
                            if (e.isInView !== o && (e.isInView = o, !c || o || !e.hasEnteredView)) {
                                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(to.InView, o);
                                var i = n.getProps(),
                                    a = o ? i.onViewportEnter : i.onViewportLeave;
                                null == a || a(t)
                            }
                        }))
                    }
                }), [t, i, a, u])
            }

            function Ro(t, e, n) {
                (0, o.useEffect)((function() {
                    t && requestAnimationFrame((function() {
                        var t;
                        e.hasEnteredView = !0;
                        var r = n.getProps().onViewportEnter;
                        null == r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(to.InView, !0)
                    }))
                }), [t])
            }
            var Do = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                Mo = {
                    inView: Do((function(t) {
                        var e = t.visualElement,
                            n = t.whileInView,
                            r = t.onViewportEnter,
                            i = t.onViewportLeave,
                            a = t.viewport,
                            s = void 0 === a ? {} : a,
                            u = (0, o.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            c = Boolean(n || r || i);
                        s.once && u.current.hasEnteredView && (c = !1), ("undefined" == typeof IntersectionObserver ? Ro : Io)(c, u.current, e, s)
                    })),
                    tap: Do((function(t) {
                        var e = t.onTap,
                            n = t.onTapStart,
                            r = t.onTapCancel,
                            i = t.whileTap,
                            a = t.visualElement,
                            s = e || n || r || i,
                            u = (0, o.useRef)(!1),
                            c = (0, o.useRef)(null);

                        function l() {
                            var t;
                            null === (t = c.current) || void 0 === t || t.call(c), c.current = null
                        }

                        function f() {
                            var t;
                            return l(), u.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(to.Tap, !1), !wo()
                        }

                        function d(t, n) {
                            f() && (Eo(a.getInstance(), t.target) ? null == e || e(t, n) : null == r || r(t, n))
                        }

                        function p(t, e) {
                            f() && (null == r || r(t, e))
                        }
                        ho(a, "pointerdown", s ? function(t, e) {
                            var r;
                            l(), u.current || (u.current = !0, c.current = At(mo(window, "pointerup", d), mo(window, "pointercancel", p)), null === (r = a.animationState) || void 0 === r || r.setActive(to.Tap, !0), null == n || n(t, e))
                        } : void 0), (0, Po.z)(l)
                    })),
                    focus: Do((function(t) {
                        var e = t.whileFocus,
                            n = t.visualElement;
                        (0, ro.p)(n, "focus", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(to.Focus, !0)
                        } : void 0), (0, ro.p)(n, "blur", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(to.Focus, !1)
                        } : void 0)
                    })),
                    hover: Do((function(t) {
                        var e = t.onHoverStart,
                            n = t.onHoverEnd,
                            r = t.whileHover,
                            o = t.visualElement;
                        ho(o, "pointerenter", e || r ? Oo(o, !0, e) : void 0), ho(o, "pointerleave", n || r ? Oo(o, !1, n) : void 0)
                    }))
                },
                Lo = n(70500);

            function No(t, e) {
                if (!Array.isArray(e)) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var _o = function(t) {
                    return /^0[^.\s]+$/.test(t)
                },
                Fo = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                Vo = [Y, at, it, ot, ut, st, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                Bo = function(t) {
                    return Vo.find(Fo(t))
                },
                qo = (0, r.ev)((0, r.ev)([], (0, r.CR)(Vo), !1), [bt, Ct], !1),
                Uo = function(t) {
                    return qo.find(Fo(t))
                };

            function zo(t, e, n) {
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, j.B)(n))
            }

            function Zo(t, e) {
                var n = b(t, e),
                    o = n ? t.makeTargetAnimatable(n, !1) : {},
                    i = o.transitionEnd,
                    a = void 0 === i ? {} : i;
                o.transition;
                var s = (0, r._T)(o, ["transitionEnd", "transition"]);
                for (var u in s = (0, r.pi)((0, r.pi)({}, s), a)) {
                    zo(t, u, _e(s[u]))
                }
            }

            function Ho(t, e) {
                if (e) return (e[t] || e.default || e).from
            }

            function Wo(t, e, n) {
                var o;
                void 0 === n && (n = {});
                var i = b(t, e, n.custom),
                    a = (i || {}).transition,
                    s = void 0 === a ? t.getDefaultTransition() || {} : a;
                n.transitionOverride && (s = n.transitionOverride);
                var u = i ? function() {
                        return Yo(t, i, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    c = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
                        void 0 === o && (o = 0);
                        var i = s.delayChildren,
                            a = void 0 === i ? 0 : i,
                            u = s.staggerChildren,
                            c = s.staggerDirection;
                        return function(t, e, n, o, i, a) {
                            void 0 === n && (n = 0);
                            void 0 === o && (o = 0);
                            void 0 === i && (i = 1);
                            var s = [],
                                u = (t.variantChildren.size - 1) * o,
                                c = 1 === i ? function(t) {
                                    return void 0 === t && (t = 0), t * o
                                } : function(t) {
                                    return void 0 === t && (t = 0), u - t * o
                                };
                            return Array.from(t.variantChildren).sort(Xo).forEach((function(t, o) {
                                s.push(Wo(t, e, (0, r.pi)((0, r.pi)({}, a), {
                                    delay: n + c(o)
                                })).then((function() {
                                    return t.notifyAnimationComplete(e)
                                })))
                            })), Promise.all(s)
                        }(t, e, a + o, u, c, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    l = s.when;
                if (l) {
                    var f = (0, r.CR)("beforeChildren" === l ? [u, c] : [c, u], 2),
                        d = f[0],
                        p = f[1];
                    return d().then(p)
                }
                return Promise.all([u(), c(n.delay)])
            }

            function Yo(t, e, n) {
                var o, i = void 0 === n ? {} : n,
                    a = i.delay,
                    s = void 0 === a ? 0 : a,
                    u = i.transitionOverride,
                    c = i.type,
                    l = t.makeTargetAnimatable(e),
                    f = l.transition,
                    d = void 0 === f ? t.getDefaultTransition() : f,
                    p = l.transitionEnd,
                    v = (0, r._T)(l, ["transition", "transitionEnd"]);
                u && (d = u);
                var m = [],
                    h = c && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[c]);
                for (var g in v) {
                    var y = t.getValue(g),
                        b = v[g];
                    if (!(!y || void 0 === b || h && Go(h, g))) {
                        var x = Ze(g, y, b, (0, r.pi)({
                            delay: s
                        }, d));
                        m.push(x)
                    }
                }
                return Promise.all(m).then((function() {
                    p && Zo(t, p)
                }))
            }

            function Xo(t, e) {
                return t.sortNodePosition(e)
            }

            function Go(t, e) {
                var n = t.protectedKeys,
                    r = t.needsAnimating,
                    o = n.hasOwnProperty(e) && !0 !== r[e];
                return r[e] = !1, o
            }
            var Ko = [to.Animate, to.InView, to.Focus, to.Hover, to.Tap, to.Drag, to.Exit],
                $o = (0, r.ev)([], (0, r.CR)(Ko), !1).reverse(),
                Jo = Ko.length;

            function Qo(t) {
                return function(e) {
                    return Promise.all(e.map((function(e) {
                        var n = e.animation,
                            r = e.options;
                        return function(t, e, n) {
                            var r;
                            if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                                var o = e.map((function(e) {
                                    return Wo(t, e, n)
                                }));
                                r = Promise.all(o)
                            } else if ("string" == typeof e) r = Wo(t, e, n);
                            else {
                                var i = "function" == typeof e ? b(t, e, n.custom) : e;
                                r = Yo(t, i, n)
                            }
                            return r.then((function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }(t, n, r)
                    })))
                }
            }

            function ti(t) {
                var e, n = Qo(t),
                    o = ((e = {})[to.Animate] = ei(!0), e[to.InView] = ei(), e[to.Hover] = ei(), e[to.Tap] = ei(), e[to.Drag] = ei(), e[to.Focus] = ei(), e[to.Exit] = ei(), e),
                    i = {},
                    a = !0,
                    s = function(e, n) {
                        var o = b(t, n);
                        if (o) {
                            o.transition;
                            var i = o.transitionEnd,
                                a = (0, r._T)(o, ["transition", "transitionEnd"]);
                            e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), i)
                        }
                        return e
                    };

                function u(e, u) {
                    for (var c, l = t.getProps(), f = t.getVariantContext(!0) || {}, d = [], p = new Set, v = {}, m = 1 / 0, y = function(n) {
                            var i = $o[n],
                                y = o[i],
                                b = null !== (c = l[i]) && void 0 !== c ? c : f[i],
                                x = g(b),
                                w = i === u ? y.isActive : null;
                            !1 === w && (m = n);
                            var O = b === f[i] && b !== l[i] && x;
                            if (O && a && t.manuallyAnimateOnMount && (O = !1), y.protectedKeys = (0, r.pi)({}, v), !y.isActive && null === w || !b && !y.prevProp || Kr(b) || "boolean" == typeof b) return "continue";
                            var E = function(t, e) {
                                    if ("string" == typeof e) return e !== t;
                                    if (h(e)) return !No(e, t);
                                    return !1
                                }(y.prevProp, b),
                                P = E || i === u && y.isActive && !O && x || n > m && x,
                                S = Array.isArray(b) ? b : [b],
                                C = S.reduce(s, {});
                            !1 === w && (C = {});
                            var k = y.prevResolvedValues,
                                j = void 0 === k ? {} : k,
                                A = (0, r.pi)((0, r.pi)({}, j), C),
                                T = function(t) {
                                    P = !0, p.delete(t), y.needsAnimating[t] = !0
                                };
                            for (var I in A) {
                                var R = C[I],
                                    D = j[I];
                                v.hasOwnProperty(I) || (R !== D ? we(R) && we(D) ? !No(R, D) || E ? T(I) : y.protectedKeys[I] = !0 : void 0 !== R ? T(I) : p.add(I) : void 0 !== R && p.has(I) ? T(I) : y.protectedKeys[I] = !0)
                            }
                            y.prevProp = b, y.prevResolvedValues = C, y.isActive && (v = (0, r.pi)((0, r.pi)({}, v), C)), a && t.blockInitialAnimation && (P = !1), P && !O && d.push.apply(d, (0, r.ev)([], (0, r.CR)(S.map((function(t) {
                                return {
                                    animation: t,
                                    options: (0, r.pi)({
                                        type: i
                                    }, e)
                                }
                            }))), !1))
                        }, b = 0; b < Jo; b++) y(b);
                    if (i = (0, r.pi)({}, v), p.size) {
                        var x = {};
                        p.forEach((function(e) {
                            var n = t.getBaseTarget(e);
                            void 0 !== n && (x[e] = n)
                        })), d.push({
                            animation: x
                        })
                    }
                    var w = Boolean(d.length);
                    return a && !1 === l.initial && !t.manuallyAnimateOnMount && (w = !1), a = !1, w ? n(d) : Promise.resolve()
                }
                return {
                    isAnimated: function(t) {
                        return void 0 !== i[t]
                    },
                    animateChanges: u,
                    setActive: function(e, n, r) {
                        var i;
                        return o[e].isActive === n ? Promise.resolve() : (null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                            var r;
                            return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                        })), o[e].isActive = n, u(r, e))
                    },
                    setAnimateFunction: function(e) {
                        n = e(t)
                    },
                    getState: function() {
                        return o
                    }
                }
            }

            function ei(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var ni = {
                    animation: Do((function(t) {
                        var e = t.visualElement,
                            n = t.animate;
                        e.animationState || (e.animationState = ti(e)), Kr(n) && (0, o.useEffect)((function() {
                            return n.subscribe(e)
                        }), [n])
                    })),
                    exit: Do((function(t) {
                        var e = t.custom,
                            n = t.visualElement,
                            i = (0, r.CR)((0, Lo.oO)(), 2),
                            a = i[0],
                            s = i[1],
                            u = (0, o.useContext)(d.O);
                        (0, o.useEffect)((function() {
                            var t, r;
                            n.isPresent = a;
                            var o = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(to.Exit, !a, {
                                custom: null !== (r = null == u ? void 0 : u.custom) && void 0 !== r ? r : e
                            });
                            !a && (null == o || o.then(s))
                        }), [a])
                    }))
                },
                ri = function() {
                    function t(t, e, n) {
                        var o = this,
                            i = (void 0 === n ? {} : n).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (o.lastMoveEvent && o.lastMoveEventInfo) {
                                    var t = ai(o.lastMoveEventInfo, o.history),
                                        e = null !== o.startEvent,
                                        n = bn(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (e || n) {
                                        var i = t.point,
                                            a = (0, C.$B)().timestamp;
                                        o.history.push((0, r.pi)((0, r.pi)({}, i), {
                                            timestamp: a
                                        }));
                                        var s = o.handlers,
                                            u = s.onStart,
                                            c = s.onMove;
                                        e || (u && u(o.lastMoveEvent, t), o.startEvent = o.lastMoveEvent), c && c(o.lastMoveEvent, t)
                                    }
                                }
                            }, this.handlePointerMove = function(t, e) {
                                o.lastMoveEvent = t, o.lastMoveEventInfo = oi(e, o.transformPagePoint), oo(t) && 0 === t.buttons ? o.handlePointerUp(t, e) : C.ZP.update(o.updatePoint, !0)
                            }, this.handlePointerUp = function(t, e) {
                                o.end();
                                var n = o.handlers,
                                    r = n.onEnd,
                                    i = n.onSessionEnd,
                                    a = ai(oi(e, o.transformPagePoint), o.history);
                                o.startEvent && r && r(t, a), i && i(t, a)
                            }, !(io(t) && t.touches.length > 1)) {
                            this.handlers = e, this.transformPagePoint = i;
                            var a = oi(co(t), this.transformPagePoint),
                                s = a.point,
                                u = (0, C.$B)().timestamp;
                            this.history = [(0, r.pi)((0, r.pi)({}, s), {
                                timestamp: u
                            })];
                            var c = e.onSessionStart;
                            c && c(t, ai(a, this.history)), this.removeListeners = At(mo(window, "pointermove", this.handlePointerMove), mo(window, "pointerup", this.handlePointerUp), mo(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return t.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, t.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), C.qY.update(this.updatePoint)
                    }, t
                }();

            function oi(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function ii(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function ai(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: ii(n, ui(e)),
                    offset: ii(n, si(e)),
                    velocity: ci(e, .1)
                }
            }

            function si(t) {
                return t[0]
            }

            function ui(t) {
                return t[t.length - 1]
            }

            function ci(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var n = t.length - 1, r = null, o = ui(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > le(e)));) n--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var i = (o.timestamp - r.timestamp) / 1e3;
                if (0 === i) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (o.x - r.x) / i,
                    y: (o.y - r.y) / i
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }

            function li(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function fi(t, e) {
                var n, o = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && (o = (n = (0, r.CR)([i, o], 2))[0], i = n[1]), {
                    min: o,
                    max: i
                }
            }
            var di = .35;

            function pi(t, e, n) {
                return {
                    min: vi(t, e),
                    max: vi(t, n)
                }
            }

            function vi(t, e) {
                var n;
                return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }

            function mi(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function hi(t, e) {
                return mi(function(t, e) {
                    if (!e) return t;
                    var n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var gi = new WeakMap,
                yi = function() {
                    function t(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.visualElement = t
                    }
                    return t.prototype.start = function(t, e) {
                        var n = this,
                            r = (void 0 === e ? {} : e).snapToCursor,
                            o = void 0 !== r && r;
                        if (!1 !== this.visualElement.isPresent) {
                            this.panSession = new ri(t, {
                                onSessionStart: function(t) {
                                    n.stopAnimation(), o && n.snapToCursor(co(t, "page").point)
                                },
                                onStart: function(t, e) {
                                    var r, o = n.getProps(),
                                        i = o.drag,
                                        a = o.dragPropagation,
                                        s = o.onDragStart;
                                    (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = xo(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), Vn((function(t) {
                                        var e, r, o = n.getAxisMotionValue(t).get() || 0;
                                        if (it.test(o)) {
                                            var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                            if (i) o = xn(i) * (parseFloat(o) / 100)
                                        }
                                        n.originPoint[t] = o
                                    })), null == s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(to.Drag, !0))
                                },
                                onMove: function(t, e) {
                                    var r = n.getProps(),
                                        o = r.dragPropagation,
                                        i = r.dragDirectionLock,
                                        a = r.onDirectionLock,
                                        s = r.onDrag;
                                    if (o || n.openGlobalLock) {
                                        var u = e.offset;
                                        if (i && null === n.currentDirection) return n.currentDirection = function(t, e) {
                                            void 0 === e && (e = 10);
                                            var n = null;
                                            Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                            return n
                                        }(u), void(null !== n.currentDirection && (null == a || a(n.currentDirection)));
                                        n.updateAxis("x", e.point, u), n.updateAxis("y", e.point, u), n.visualElement.syncRender(), null == s || s(t, e)
                                    }
                                },
                                onSessionEnd: function(t, e) {
                                    return n.stop(t, e)
                                }
                            }, {
                                transformPagePoint: this.visualElement.getTransformPagePoint()
                            })
                        }
                    }, t.prototype.stop = function(t, e) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = e.velocity;
                            this.startAnimation(r);
                            var o = this.getProps().onDragEnd;
                            null == o || o(t, e)
                        }
                    }, t.prototype.cancel = function() {
                        var t, e;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(to.Drag, !1)
                    }, t.prototype.updateAxis = function(t, e, n) {
                        var r = this.getProps().drag;
                        if (n && bi(t, r, this.currentDirection)) {
                            var o, i, a, s, u, c = this.getAxisMotionValue(t),
                                l = this.originPoint[t] + n[t];
                            this.constraints && this.constraints[t] && (o = l, i = this.constraints[t], a = this.elastic[t], s = i.min, u = i.max, void 0 !== s && o < s ? o = a ? k(s, o, a.min) : Math.max(o, s) : void 0 !== u && o > u && (o = a ? k(u, o, a.max) : Math.min(o, u)), l = o), c.set(l)
                        }
                    }, t.prototype.resolveConstraints = function() {
                        var t = this,
                            e = this.getProps(),
                            n = e.dragConstraints,
                            r = e.dragElastic,
                            o = (this.visualElement.projection || {}).layout,
                            i = this.constraints;
                        n && m(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
                            var n = e.top,
                                r = e.left,
                                o = e.bottom,
                                i = e.right;
                            return {
                                x: li(t.x, r, i),
                                y: li(t.y, n, o)
                            }
                        }(o.actual, n), this.elastic = function(t) {
                            return void 0 === t && (t = di), !1 === t ? t = 0 : !0 === t && (t = di), {
                                x: pi(t, "left", "right"),
                                y: pi(t, "top", "bottom")
                            }
                        }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Vn((function(e) {
                            t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                                var n = {};
                                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                            }(o.actual[e], t.constraints[e]))
                        }))
                    }, t.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            n = t.onMeasureDragConstraints;
                        if (!e || !m(e)) return !1;
                        var r = e.current,
                            o = this.visualElement.projection;
                        if (!o || !o.layout) return !1;
                        var i = function(t, e, n) {
                                var r = hi(t, n),
                                    o = e.scroll;
                                return o && (fn(r.x, o.x), fn(r.y, o.y)), r
                            }(r, o.root, this.visualElement.getTransformPagePoint()),
                            a = function(t, e) {
                                return {
                                    x: fi(t.x, e.x),
                                    y: fi(t.y, e.y)
                                }
                            }(o.layout.actual, i);
                        if (n) {
                            var s = n(function(t) {
                                var e = t.x,
                                    n = t.y;
                                return {
                                    top: n.min,
                                    right: e.max,
                                    bottom: n.max,
                                    left: e.min
                                }
                            }(a));
                            this.hasMutatedConstraints = !!s, s && (a = mi(s))
                        }
                        return a
                    }, t.prototype.startAnimation = function(t) {
                        var e = this,
                            n = this.getProps(),
                            o = n.drag,
                            i = n.dragMomentum,
                            a = n.dragElastic,
                            s = n.dragTransition,
                            u = n.dragSnapToOrigin,
                            c = n.onDragTransitionEnd,
                            l = this.constraints || {},
                            f = Vn((function(n) {
                                var c;
                                if (bi(n, o, e.currentDirection)) {
                                    var f = null !== (c = null == l ? void 0 : l[n]) && void 0 !== c ? c : {};
                                    u && (f = {
                                        min: 0,
                                        max: 0
                                    });
                                    var d = a ? 200 : 1e6,
                                        p = a ? 40 : 1e7,
                                        v = (0, r.pi)((0, r.pi)({
                                            type: "inertia",
                                            velocity: i ? t[n] : 0,
                                            bounceStiffness: d,
                                            bounceDamping: p,
                                            timeConstant: 750,
                                            restDelta: 1,
                                            restSpeed: 10
                                        }, s), f);
                                    return e.startAxisValueAnimation(n, v)
                                }
                            }));
                        return Promise.all(f).then(c)
                    }, t.prototype.startAxisValueAnimation = function(t, e) {
                        return Ze(t, this.getAxisMotionValue(t), 0, e)
                    }, t.prototype.stopAnimation = function() {
                        var t = this;
                        Vn((function(e) {
                            return t.getAxisMotionValue(e).stop()
                        }))
                    }, t.prototype.getAxisMotionValue = function(t) {
                        var e, n, r = "_drag" + t.toUpperCase(),
                            o = this.visualElement.getProps()[r];
                        return o || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                    }, t.prototype.snapToCursor = function(t) {
                        var e = this;
                        Vn((function(n) {
                            if (bi(n, e.getProps().drag, e.currentDirection)) {
                                var r = e.visualElement.projection,
                                    o = e.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var i = r.layout.actual[n],
                                        a = i.min,
                                        s = i.max;
                                    o.set(t[n] - k(a, s, .5))
                                }
                            }
                        }))
                    }, t.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragConstraints,
                            i = this.visualElement.projection;
                        if (m(o) && i && this.constraints) {
                            this.stopAnimation();
                            var a = {
                                x: 0,
                                y: 0
                            };
                            Vn((function(t) {
                                var n, r, o, i, s, u = e.getAxisMotionValue(t);
                                if (u) {
                                    var c = u.get();
                                    a[t] = (n = {
                                        min: c,
                                        max: c
                                    }, r = e.constraints[t], o = .5, i = xn(n), (s = xn(r)) > i ? o = B(r.min, r.max - i, n.min) : i > s && (o = B(n.min, n.max - s, r.min)), T(0, 1, o))
                                }
                            }));
                            var s = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), Vn((function(t) {
                                if (bi(t, r, null)) {
                                    var n = e.getAxisMotionValue(t),
                                        o = e.constraints[t],
                                        i = o.min,
                                        s = o.max;
                                    n.set(k(i, s, a[t]))
                                }
                            }))
                        }
                    }, t.prototype.addListeners = function() {
                        var t, e = this;
                        gi.set(this.visualElement, this);
                        var n = mo(this.visualElement.getInstance(), "pointerdown", (function(t) {
                                var n = e.getProps(),
                                    r = n.drag,
                                    o = n.dragListener;
                                r && (void 0 === o || o) && e.start(t)
                            })),
                            r = function() {
                                m(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            o = this.visualElement.projection,
                            i = o.addEventListener("measure", r);
                        o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
                        var a = (0, ro.E)(window, "resize", (function() {
                            e.scalePositionWithinConstraints()
                        }));
                        return o.addEventListener("didUpdate", (function(t) {
                                var n = t.delta,
                                    r = t.hasLayoutChanged;
                                e.isDragging && r && (Vn((function(t) {
                                    var r = e.getAxisMotionValue(t);
                                    r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                                })), e.visualElement.syncRender())
                            })),
                            function() {
                                a(), n(), i()
                            }
                    }, t.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            n = void 0 !== e && e,
                            o = t.dragDirectionLock,
                            i = void 0 !== o && o,
                            a = t.dragPropagation,
                            s = void 0 !== a && a,
                            u = t.dragConstraints,
                            c = void 0 !== u && u,
                            l = t.dragElastic,
                            f = void 0 === l ? di : l,
                            d = t.dragMomentum,
                            p = void 0 === d || d;
                        return (0, r.pi)((0, r.pi)({}, t), {
                            drag: n,
                            dragDirectionLock: i,
                            dragPropagation: s,
                            dragConstraints: c,
                            dragElastic: f,
                            dragMomentum: p
                        })
                    }, t
                }();

            function bi(t, e, n) {
                return !(!0 !== e && e !== t || null !== n && n !== t)
            }
            var xi = {
                    pan: Do((function(t) {
                        var e = t.onPan,
                            n = t.onPanStart,
                            r = t.onPanEnd,
                            i = t.onPanSessionStart,
                            a = t.visualElement,
                            s = e || n || r || i,
                            u = (0, o.useRef)(null),
                            c = (0, o.useContext)(l).transformPagePoint,
                            f = {
                                onSessionStart: i,
                                onStart: n,
                                onMove: e,
                                onEnd: function(t, e) {
                                    u.current = null, r && r(t, e)
                                }
                            };
                        (0, o.useEffect)((function() {
                            null !== u.current && u.current.updateHandlers(f)
                        })), ho(a, "pointerdown", s && function(t) {
                            u.current = new ri(t, f, {
                                transformPagePoint: c
                            })
                        }), (0, Po.z)((function() {
                            return u.current && u.current.end()
                        }))
                    })),
                    drag: Do((function(t) {
                        var e = t.dragControls,
                            n = t.visualElement,
                            r = (0, S.h)((function() {
                                return new yi(n)
                            }));
                        (0, o.useEffect)((function() {
                            return e && e.subscribe(r)
                        }), [r, e]), (0, o.useEffect)((function() {
                            return r.addListeners()
                        }), [r])
                    }))
                },
                wi = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
            var Oi = function(t) {
                    var e = t.treeType,
                        n = void 0 === e ? "" : e,
                        o = t.build,
                        i = t.getBaseTarget,
                        a = t.makeTargetAnimatable,
                        s = t.measureViewportBox,
                        u = t.render,
                        c = t.readValueFromInstance,
                        l = t.removeValueFromRenderState,
                        f = t.sortNodePosition,
                        d = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var p = t.parent,
                            v = t.props,
                            m = t.presenceId,
                            h = t.blockInitialAnimation,
                            y = t.visualState;
                        void 0 === e && (e = {});
                        var b, O, E = !1,
                            P = y.latestValues,
                            S = y.renderState,
                            k = function() {
                                var t = wi.map((function() {
                                        return new He.L
                                    })),
                                    e = {},
                                    n = {
                                        clearAllListeners: function() {
                                            return t.forEach((function(t) {
                                                return t.clear()
                                            }))
                                        },
                                        updatePropListeners: function(t) {
                                            wi.forEach((function(r) {
                                                var o, i = "on" + r,
                                                    a = t[i];
                                                null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a))
                                            }))
                                        }
                                    };
                                return t.forEach((function(t, e) {
                                    n["on" + wi[e]] = function(e) {
                                        return t.add(e)
                                    }, n["notify" + wi[e]] = function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        t.notify.apply(t, (0, r.ev)([], (0, r.CR)(e), !1))
                                    }
                                })), n
                            }(),
                            T = new Map,
                            I = new Map,
                            R = {},
                            D = (0, r.pi)({}, P);

                        function M() {
                            b && E && (L(), u(b, S, v.style, U.projection))
                        }

                        function L() {
                            o(U, S, P, e, v)
                        }

                        function N() {
                            k.notifyUpdate(P)
                        }
                        var _ = d(v);
                        for (var F in _) {
                            var V = _[F];
                            void 0 !== P[F] && A(V) && V.set(P[F], !1)
                        }
                        var B = x(v),
                            q = w(v),
                            U = (0, r.pi)((0, r.pi)({
                                treeType: n,
                                current: null,
                                depth: p ? p.depth + 1 : 0,
                                parent: p,
                                children: new Set,
                                presenceId: m,
                                variantChildren: q ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(null == p ? void 0 : p.isMounted()),
                                blockInitialAnimation: h,
                                isMounted: function() {
                                    return Boolean(b)
                                },
                                mount: function(t) {
                                    E = !0, b = U.current = t, U.projection && U.projection.mount(t), q && p && !B && (O = null == p ? void 0 : p.addVariantChild(U)), null == p || p.children.add(U), U.setProps(v)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = U.projection) || void 0 === t || t.unmount(), C.qY.update(N), C.qY.render(M), I.forEach((function(t) {
                                        return t()
                                    })), null == O || O(), null == p || p.children.delete(U), k.clearAllListeners(), b = void 0, E = !1
                                },
                                addVariantChild: function(t) {
                                    var e, n = U.getClosestVariantNode();
                                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return n.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return f && n === t.treeType ? f(U.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return q ? U : null == p ? void 0 : p.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return v.layoutId
                                },
                                getInstance: function() {
                                    return b
                                },
                                getStaticValue: function(t) {
                                    return P[t]
                                },
                                setStaticValue: function(t, e) {
                                    return P[t] = e
                                },
                                getLatestValues: function() {
                                    return P
                                },
                                setVisibility: function(t) {
                                    U.isVisible !== t && (U.isVisible = t, U.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), a(U, t, v, e)
                                },
                                measureViewportBox: function() {
                                    return s(b, v)
                                },
                                addValue: function(t, e) {
                                    U.hasValue(t) && U.removeValue(t), T.set(t, e), P[t] = e.get(),
                                        function(t, e) {
                                            var n = e.onChange((function(e) {
                                                    P[t] = e, v.onUpdate && C.ZP.update(N, !1, !0)
                                                })),
                                                r = e.onRenderRequest(U.scheduleRender);
                                            I.set(t, (function() {
                                                n(), r()
                                            }))
                                        }(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    T.delete(t), null === (e = I.get(t)) || void 0 === e || e(), I.delete(t), delete P[t], l(t, S)
                                },
                                hasValue: function(t) {
                                    return T.has(t)
                                },
                                getValue: function(t, e) {
                                    var n = T.get(t);
                                    return void 0 === n && void 0 !== e && (n = (0, j.B)(e), U.addValue(t, n)), n
                                },
                                forEachValue: function(t) {
                                    return T.forEach(t)
                                },
                                readValue: function(t) {
                                    var n;
                                    return null !== (n = P[t]) && void 0 !== n ? n : c(b, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    D[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (i) {
                                        var e = i(v, t);
                                        if (void 0 !== e && !A(e)) return e
                                    }
                                    return D[t]
                                }
                            }, k), {
                                build: function() {
                                    return L(), S
                                },
                                scheduleRender: function() {
                                    C.ZP.render(M, !1, !0)
                                },
                                syncRender: M,
                                setProps: function(t) {
                                    (t.transformTemplate || v.transformTemplate) && U.scheduleRender(), v = t, k.updatePropListeners(t), R = function(t, e, n) {
                                        var r;
                                        for (var o in e) {
                                            var i = e[o],
                                                a = n[o];
                                            if (A(i)) t.addValue(o, i);
                                            else if (A(a)) t.addValue(o, (0, j.B)(i));
                                            else if (a !== i)
                                                if (t.hasValue(o)) {
                                                    var s = t.getValue(o);
                                                    !s.hasAnimated && s.set(i)
                                                } else t.addValue(o, (0, j.B)(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                                        }
                                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                                        return e
                                    }(U, d(v), R)
                                },
                                getProps: function() {
                                    return v
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return v.transition
                                },
                                getTransformPagePoint: function() {
                                    return v.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null == p ? void 0 : p.getVariantContext();
                                    if (!B) {
                                        var e = (null == p ? void 0 : p.getVariantContext()) || {};
                                        return void 0 !== v.initial && (e.initial = v.initial), e
                                    }
                                    for (var n = {}, r = 0; r < Pi; r++) {
                                        var o = Ei[r],
                                            i = v[o];
                                        (g(i) || !1 === i) && (n[o] = i)
                                    }
                                    return n
                                }
                            });
                        return U
                    }
                },
                Ei = (0, r.ev)(["initial"], (0, r.CR)(Ko), !1),
                Pi = Ei.length;

            function Si(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            var Ci = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function ki(t, e, n) {
                void 0 === n && (n = 1), 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.');
                var o = (0, r.CR)(function(t) {
                        var e = Ci.exec(t);
                        if (!e) return [, ];
                        var n = (0, r.CR)(e, 3);
                        return [n[1], n[2]]
                    }(t), 2),
                    i = o[0],
                    a = o[1];
                if (i) {
                    var s = window.getComputedStyle(e).getPropertyValue(i);
                    return s ? s.trim() : Si(a) ? ki(a, e, n + 1) : a
                }
            }
            var ji, Ai = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                Ti = function(t) {
                    return Ai.has(t)
                },
                Ii = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                Ri = function(t) {
                    return t === Y || t === at
                };
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(ji || (ji = {}));
            var Di = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                Mi = function(t, e) {
                    return function(n, r) {
                        var o = r.transform;
                        if ("none" === o || !o) return 0;
                        var i = o.match(/^matrix3d\((.+)\)$/);
                        if (i) return Di(i[1], e);
                        var a = o.match(/^matrix\((.+)\)$/);
                        return a ? Di(a[1], t) : 0
                    }
                },
                Li = new Set(["x", "y", "z"]),
                Ni = qn.filter((function(t) {
                    return !Li.has(t)
                }));
            var _i = {
                    width: function(t, e) {
                        var n = t.x,
                            r = e.paddingLeft,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingRight,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    height: function(t, e) {
                        var n = t.y,
                            r = e.paddingTop,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingBottom,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    top: function(t, e) {
                        var n = e.top;
                        return parseFloat(n)
                    },
                    left: function(t, e) {
                        var n = e.left;
                        return parseFloat(n)
                    },
                    bottom: function(t, e) {
                        var n = t.y,
                            r = e.top;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x,
                            r = e.left;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: Mi(4, 13),
                    y: Mi(5, 14)
                },
                Fi = function(t, e, n, o) {
                    void 0 === n && (n = {}), void 0 === o && (o = {}), e = (0, r.pi)({}, e), o = (0, r.pi)({}, o);
                    var i = Object.keys(e).filter(Ti),
                        a = [],
                        s = !1,
                        u = [];
                    if (i.forEach((function(r) {
                            var i = t.getValue(r);
                            if (t.hasValue(r)) {
                                var c, l = n[r],
                                    f = Bo(l),
                                    d = e[r];
                                if (we(d)) {
                                    var p = d.length,
                                        v = null === d[0] ? 1 : 0;
                                    l = d[v], f = Bo(l);
                                    for (var m = v; m < p; m++) c ? Bo(d[m]) : (c = Bo(d[m])) === f || Ri(f) && Ri(c)
                                } else c = Bo(d);
                                if (f !== c)
                                    if (Ri(f) && Ri(c)) {
                                        var h = i.get();
                                        "string" == typeof h && i.set(parseFloat(h)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && c === at && (e[r] = d.map(parseFloat))
                                    } else(null == f ? void 0 : f.transform) && (null == c ? void 0 : c.transform) && (0 === l || 0 === d) ? 0 === l ? i.set(c.transform(l)) : e[r] = f.transform(d) : (s || (a = function(t) {
                                        var e = [];
                                        return Ni.forEach((function(n) {
                                            var r = t.getValue(n);
                                            void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                        })), e.length && t.syncRender(), e
                                    }(t), s = !0), u.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], Ii(i, d))
                            }
                        })), u.length) {
                        var c = function(t, e, n) {
                            var r = e.measureViewportBox(),
                                o = e.getInstance(),
                                i = getComputedStyle(o),
                                a = i.display,
                                s = {};
                            "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                                s[t] = _i[t](r, i)
                            })), e.syncRender();
                            var u = e.measureViewportBox();
                            return n.forEach((function(n) {
                                var r = e.getValue(n);
                                Ii(r, s[n]), t[n] = _i[n](u, i)
                            })), t
                        }(e, t, u);
                        return a.length && a.forEach((function(e) {
                            var n = (0, r.CR)(e, 2),
                                o = n[0],
                                i = n[1];
                            t.getValue(o).set(i)
                        })), t.syncRender(), {
                            target: c,
                            transitionEnd: o
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: o
                    }
                };

            function Vi(t, e, n, r) {
                return function(t) {
                    return Object.keys(t).some(Ti)
                }(e) ? Fi(t, e, n, r) : {
                    target: e,
                    transitionEnd: r
                }
            }
            var Bi = function(t, e, n, o) {
                var i = function(t, e, n) {
                    var o, i = (0, r._T)(e, []),
                        a = t.getInstance();
                    if (!(a instanceof Element)) return {
                        target: i,
                        transitionEnd: n
                    };
                    for (var s in n && (n = (0, r.pi)({}, n)), t.forEachValue((function(t) {
                            var e = t.get();
                            if (Si(e)) {
                                var n = ki(e, a);
                                n && t.set(n)
                            }
                        })), i) {
                        var u = i[s];
                        if (Si(u)) {
                            var c = ki(u, a);
                            c && (i[s] = c, n && (null !== (o = n[s]) && void 0 !== o || (n[s] = u)))
                        }
                    }
                    return {
                        target: i,
                        transitionEnd: n
                    }
                }(t, e, o);
                return Vi(t, e = i.target, n, o = i.transitionEnd)
            };
            var qi = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if (Zn(e)) {
                            var n = Me(e);
                            return n && n.default || 0
                        }
                        var r, o = (r = t, window.getComputedStyle(r));
                        return (Sr(e) ? o.getPropertyValue(e) : o[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: function(t, e) {
                        return hi(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, n) {
                        var r = n.transformTemplate;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var n = e.vars,
                            r = e.style;
                        delete n[t], delete r[t]
                    },
                    makeTargetAnimatable: function(t, e, n, o) {
                        var i = n.transformValues;
                        void 0 === o && (o = !0);
                        var a = e.transition,
                            s = e.transitionEnd,
                            u = (0, r._T)(e, ["transition", "transitionEnd"]),
                            c = function(t, e, n) {
                                var r, o, i = {};
                                for (var a in t) i[a] = null !== (r = Ho(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                                return i
                            }(u, a || {}, t);
                        if (i && (s && (s = i(s)), u && (u = i(u)), c && (c = i(c))), o) {
                            ! function(t, e, n) {
                                var r, o, i, a, s = Object.keys(e).filter((function(e) {
                                        return !t.hasValue(e)
                                    })),
                                    u = s.length;
                                if (u)
                                    for (var c = 0; c < u; c++) {
                                        var l = s[c],
                                            f = e[l],
                                            d = null;
                                        Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[l]) && void 0 !== r ? r : t.readValue(l)) && void 0 !== o ? o : e[l]), null != d && ("string" == typeof d && (/^\-?\d*\.?\d+$/.test(d) || _o(d)) ? d = parseFloat(d) : !Uo(d) && Ct.test(f) && (d = Le(l, f)), t.addValue(l, (0, j.B)(d)), null !== (i = (a = n)[l]) && void 0 !== i || (a[l] = d), t.setBaseTarget(l, d))
                                    }
                            }(t, u, c);
                            var l = Bi(t, u, c, s);
                            s = l.transitionEnd, u = l.target
                        }
                        return (0, r.pi)({
                            transition: a,
                            transitionEnd: s
                        }, u)
                    },
                    scrapeMotionValuesFromProps: Xr,
                    build: function(t, e, n, r, o) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), kr(e, n, r, o.transformTemplate)
                    },
                    render: Hr
                },
                Ui = Oi(qi),
                zi = Oi((0, r.pi)((0, r.pi)({}, qi), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var n;
                        return Zn(e) ? (null === (n = Me(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Wr.has(e) ? e : Zr(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: Gr,
                    build: function(t, e, n, r, o) {
                        Vr(e, n, r, o.transformTemplate)
                    },
                    render: Yr
                })),
                Zi = function(t, e) {
                    return Or(t) ? zi(e, {
                        enableHardwareAcceleration: !1
                    }) : Ui(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function Hi(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var Wi = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!at.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var n = Hi(t, e.target.x),
                            r = Hi(t, e.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                Yi = "_$css",
                Xi = {
                    correct: function(t, e) {
                        var n = e.treeScale,
                            r = e.projectionDelta,
                            o = t,
                            i = t.includes("var("),
                            a = [];
                        i && (t = t.replace(Ci, (function(t) {
                            return a.push(t), Yi
                        })));
                        var s = Ct.parse(t);
                        if (s.length > 5) return o;
                        var u = Ct.createTransformer(t),
                            c = "number" != typeof s[0] ? 1 : 0,
                            l = r.x.scale * n.x,
                            f = r.y.scale * n.y;
                        s[0 + c] /= l, s[1 + c] /= f;
                        var d = k(l, f, .5);
                        "number" == typeof s[2 + c] && (s[2 + c] /= d), "number" == typeof s[3 + c] && (s[3 + c] /= d);
                        var p = u(s);
                        if (i) {
                            var v = 0;
                            p = p.replace(Yi, (function() {
                                var t = a[v];
                                return v++, t
                            }))
                        }
                        return p
                    }
                },
                Gi = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return (0, r.ZT)(e, t), e.prototype.componentDidMount = function() {
                        var t, e = this,
                            n = this.props,
                            o = n.visualElement,
                            i = n.layoutGroup,
                            a = n.switchLayoutGroup,
                            s = n.layoutId,
                            u = o.projection;
                        t = Ki, Object.assign(_n, t), u && ((null == i ? void 0 : i.group) && i.group.add(u), (null == a ? void 0 : a.register) && s && a.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", (function() {
                            e.safeToRemove()
                        })), u.setOptions((0, r.pi)((0, r.pi)({}, u.options), {
                            onExitComplete: function() {
                                return e.safeToRemove()
                            }
                        }))), Kn.hasEverUpdated = !0
                    }, e.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            n = this.props,
                            r = n.layoutDependency,
                            o = n.visualElement,
                            i = n.drag,
                            a = n.isPresent,
                            s = o.projection;
                        return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || C.ZP.postRender((function() {
                            var t;
                            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null) : null
                    }, e.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, e.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.layoutGroup,
                            r = t.switchLayoutGroup,
                            o = e.projection;
                        o && (o.scheduleCheckAfterUnmount(), (null == n ? void 0 : n.group) && n.group.remove(o), (null == r ? void 0 : r.deregister) && r.deregister(o))
                    }, e.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null == t || t()
                    }, e.prototype.render = function() {
                        return null
                    }, e
                }(o.Component);
            var Ki = {
                    borderRadius: (0, r.pi)((0, r.pi)({}, Wi), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: Wi,
                    borderTopRightRadius: Wi,
                    borderBottomLeftRadius: Wi,
                    borderBottomRightRadius: Wi,
                    boxShadow: Xi
                },
                $i = {
                    measureLayout: function(t) {
                        var e = (0, r.CR)((0, Lo.oO)(), 2),
                            n = e[0],
                            i = e[1],
                            a = (0, o.useContext)(hr.p);
                        return o.createElement(Gi, (0, r.pi)({}, t, {
                            layoutGroup: a,
                            switchLayoutGroup: (0, o.useContext)(gr),
                            isPresent: n,
                            safeToRemove: i
                        }))
                    }
                },
                Ji = $n({
                    attachResizeListener: function(t, e) {
                        return t.addEventListener("resize", e, {
                                passive: !0
                            }),
                            function() {
                                return t.removeEventListener("resize", e)
                            }
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    }
                }),
                Qi = {
                    current: void 0
                },
                ta = $n({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!Qi.current) {
                            var t = new Ji(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), Qi.current = t
                        }
                        return Qi.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null != e ? e : "none"
                    }
                }),
                ea = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, ni), Mo), xi), $i),
                na = xr((function(t, e) {
                    return function(t, e, n, o, i) {
                        var a = e.forwardMotionProps,
                            s = void 0 !== a && a,
                            u = Or(t) ? eo : no;
                        return (0, r.pi)((0, r.pi)({}, u), {
                            preloadedFeatures: n,
                            useRender: Ur(s),
                            createVisualElement: o,
                            projectionNodeConstructor: i,
                            Component: t
                        })
                    }(t, e, ea, Zi, ta)
                }))
        },
        52877: function(t, e, n) {
            "use strict";

            function r(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function o(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            n.d(e, {
                cl: function() {
                    return o
                },
                y4: function() {
                    return r
                }
            })
        },
        73439: function(t, e, n) {
            "use strict";
            n.d(e, {
                j: function() {
                    return r
                }
            });
            var r = "undefined" != typeof window
        },
        32821: function(t, e, n) {
            "use strict";
            n.d(e, {
                L: function() {
                    return o
                }
            });
            var r = n(52877),
                o = function() {
                    function t() {
                        this.subscriptions = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this;
                        return (0, r.y4)(this.subscriptions, t),
                            function() {
                                return (0, r.cl)(e.subscriptions, t)
                            }
                    }, t.prototype.notify = function(t, e, n) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](t, e, n);
                            else
                                for (var o = 0; o < r; o++) {
                                    var i = this.subscriptions[o];
                                    i && i(t, e, n)
                                }
                    }, t.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, t.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, t
                }()
        },
        7374: function(t, e, n) {
            "use strict";
            n.d(e, {
                h: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(t) {
                var e = (0, r.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        26162: function(t, e, n) {
            "use strict";
            n.d(e, {
                L: function() {
                    return o
                }
            });
            var r = n(67294),
                o = n(73439).j ? r.useLayoutEffect : r.useEffect
        },
        98272: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(t) {
                return (0, r.useEffect)((function() {
                    return function() {
                        return t()
                    }
                }), [])
            }
        },
        64001: function(t, e, n) {
            "use strict";
            n.d(e, {
                B: function() {
                    return s
                }
            });
            var r = n(95590),
                o = n(1427),
                i = n(32821),
                a = function() {
                    function t(t) {
                        var e, n = this;
                        this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new i.L, this.velocityUpdateSubscribers = new i.L, this.renderSubscribers = new i.L, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
                            void 0 === e && (e = !0), n.prev = n.current, n.current = t;
                            var o = (0, r.$B)(),
                                i = o.delta,
                                a = o.timestamp;
                            n.lastUpdated !== a && (n.timeDelta = i, n.lastUpdated = a, r.ZP.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
                        }, this.scheduleVelocityCheck = function() {
                            return r.ZP.postRender(n.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                    }
                    return t.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, t.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? (0, o.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise((function(n) {
                            e.hasAnimated = !0, e.stopAnimation = t(n)
                        })).then((function() {
                            return e.clearAnimation()
                        }))
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function s(t) {
                return new a(t)
            }
        },
        95590: function(t, e, n) {
            "use strict";
            n.d(e, {
                qY: function() {
                    return p
                },
                ZP: function() {
                    return b
                },
                iW: function() {
                    return v
                },
                $B: function() {
                    return y
                }
            });
            var r = 1 / 60 * 1e3,
                o = "undefined" != typeof performance ? function() {
                    return performance.now()
                } : function() {
                    return Date.now()
                },
                i = "undefined" != typeof window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return setTimeout((function() {
                        return t(o())
                    }), r)
                };
            var a = !0,
                s = !1,
                u = !1,
                c = {
                    delta: 0,
                    timestamp: 0
                },
                l = ["read", "update", "preRender", "render", "postRender"],
                f = l.reduce((function(t, e) {
                    return t[e] = function(t) {
                        var e = [],
                            n = [],
                            r = 0,
                            o = !1,
                            i = !1,
                            a = new WeakSet,
                            s = {
                                schedule: function(t) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o,
                                        s = i ? e : n;
                                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && a.add(t), -1 === s.indexOf(t) && (s.push(t), i && o && (r = e.length)), t
                                },
                                cancel: function(t) {
                                    var e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                                },
                                process: function(u) {
                                    if (o) i = !0;
                                    else {
                                        o = !0;
                                        var c = [n, e];
                                        if (e = c[0], (n = c[1]).length = 0, r = e.length)
                                            for (var l = 0; l < r; l++) {
                                                var f = e[l];
                                                f(u), a.has(f) && (s.schedule(f), t())
                                            }
                                        o = !1, i && (i = !1, s.process(u))
                                    }
                                }
                            };
                        return s
                    }((function() {
                        return s = !0
                    })), t
                }), {}),
                d = l.reduce((function(t, e) {
                    var n = f[e];
                    return t[e] = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return s || g(), n.schedule(t, e, r)
                    }, t
                }), {}),
                p = l.reduce((function(t, e) {
                    return t[e] = f[e].cancel, t
                }), {}),
                v = l.reduce((function(t, e) {
                    return t[e] = function() {
                        return f[e].process(c)
                    }, t
                }), {}),
                m = function(t) {
                    return f[t].process(c)
                },
                h = function t(e) {
                    s = !1, c.delta = a ? r : Math.max(Math.min(e - c.timestamp, 40), 1), c.timestamp = e, u = !0, l.forEach(m), u = !1, s && (a = !1, i(t))
                },
                g = function() {
                    s = !0, a = !0, u || i(h)
                },
                y = function() {
                    return c
                },
                b = d
        },
        1427: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return e ? t * (1e3 / e) : 0
            }
            n.d(e, {
                R: function() {
                    return r
                }
            })
        },
        66590: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t) {
                    return void 0 === t
                },
                r = function(t) {
                    return "string" == typeof t
                },
                o = function(t) {
                    return "function" == typeof t
                };

            function i(t) {
                return function(e) {
                    var r = this;
                    if (!this._userHasOptedOut) {
                        if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");
                        var o = e.map((function(t) {
                            var e, o, i = t.filters,
                                a = function(t, e) {
                                    var n = {};
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                        var o = 0;
                                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                                    }
                                    return n
                                }(t, ["filters"]),
                                s = Object.assign(Object.assign({}, a), {
                                    userToken: (o = null === (e = t) || void 0 === e ? void 0 : e.userToken, null != o ? o : r._userToken)
                                });
                            return n(i) || (s.filters = i.map(encodeURIComponent)), s
                        }));
                        return function(t, e, n, r, o, i) {
                            return t(o + "/1/events?X-Algolia-Application-Id=" + e + "&X-Algolia-API-Key=" + n + "&X-Algolia-Agent=" + encodeURIComponent(r.join("; ")), {
                                events: i
                            })
                        }(t, this._appId, this._apiKey, this._ua, this._endpointOrigin, o)
                    }
                }
            }
            var a = "2.2.1",
                s = ["insights-js (2.2.1)", "insights-js-browser-cjs (2.2.1)"];

            function u(t) {
                -1 === this._ua.indexOf(t) && this._ua.push(t)
            }
            var c = ["de", "us"];

            function l(t) {
                var e;
                if (!t) throw new Error("Init function should be called with an object argument containing your apiKey and appId");
                if (n(t.apiKey) || !r(t.apiKey)) throw new Error("apiKey is missing, please provide it so we can authenticate the application");
                if (n(t.appId) || !r(t.appId)) throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");
                if (!n(t.region) && -1 === c.indexOf(t.region)) throw new Error("optional region is incorrect, please provide either one of: " + c.join(", ") + ".");
                if (!(n(t.cookieDuration) || function(t) {
                        return "number" == typeof t
                    }(t.cookieDuration) && isFinite(t.cookieDuration) && Math.floor(t.cookieDuration) === t.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
                this._apiKey = t.apiKey, this._appId = t.appId, this._userHasOptedOut = !!t.userHasOptedOut, this._region = t.region, this._endpointOrigin = t.region ? "https://insights." + t.region + ".algolia.io" : "https://insights.algolia.io", this._useCookie = null !== (e = t.useCookie) && void 0 !== e && e, this._cookieDuration = t.cookieDuration ? t.cookieDuration : 15552e6, this._hasCredentials = !0, this._ua = [].concat(s), t.userToken ? this.setUserToken(t.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie || this.setAnonymousUserToken()
            }

            function f(t) {
                o(t) && t(this.version)
            }

            function d(t, e) {
                return e.map((function(e) {
                    return Object.assign({
                        eventType: t
                    }, e)
                }))
            }

            function p() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("click", t))
            }

            function v() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("click", t))
            }

            function m() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("click", t))
            }

            function h() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("conversion", t))
            }

            function g() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("conversion", t))
            }

            function y() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("conversion", t))
            }

            function b() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("view", t))
            }

            function x() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return this.sendEvents(d("view", t))
            }
            var w, O, E, P, S = "_ALGOLIA";

            function C() {
                if (function() {
                        try {
                            return Boolean(navigator.cookieEnabled)
                        } catch (t) {
                            return !1
                        }
                    }()) {
                    var t = function(t) {
                        for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                            for (var o = n[r];
                                " " === o.charAt(0);) o = o.substring(1);
                            if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                        }
                        return ""
                    }(S);
                    t && "" !== t && 0 === t.indexOf("anonymous-") ? this.setUserToken(t) : (this.setUserToken("anonymous-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }))), function(t, e, n) {
                        var r = new Date;
                        r.setTime(r.getTime() + n);
                        var o = "expires=" + r.toUTCString();
                        document.cookie = t + "=" + e + ";" + o + ";path=/"
                    }(S, this._userToken, this._cookieDuration))
                }
            }

            function k(t) {
                this._userToken = t, o(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken)
            }

            function j(t, e) {
                return o(e) && e(null, this._userToken), this._userToken
            }

            function A(t, e) {
                this._onUserTokenChangeCallback = t, e && e.immediate && o(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken)
            }
            Object.keys || (Object.keys = (w = Object.prototype.hasOwnProperty, O = !{
                toString: null
            }.propertyIsEnumerable("toString"), P = (E = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t) {
                if ("function" != typeof t && ("object" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
                var e, n, r = [];
                for (e in t) w.call(t, e) && r.push(e);
                if (O)
                    for (n = 0; n < P; n++) w.call(t, E[n]) && r.push(E[n]);
                return r
            })), "function" != typeof Object.assign && (Object.assign = function(t, e) {
                var n = arguments;
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var r = Object(t), o = 1; o < arguments.length; o++) {
                    var i = n[o];
                    if (null != i)
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
                }
                return r
            });
            var T = function(t) {
                var e = t.requestFn;
                this._ua = [], this.version = a, this._hasCredentials = !1, this.sendEvents = i(e).bind(this), this.init = l.bind(this), this.addAlgoliaAgent = u.bind(this), this.setUserToken = k.bind(this), this.setAnonymousUserToken = C.bind(this), this.getUserToken = j.bind(this), this.onUserTokenChange = A.bind(this), this.clickedObjectIDsAfterSearch = p.bind(this), this.clickedObjectIDs = v.bind(this), this.clickedFilters = m.bind(this), this.convertedObjectIDsAfterSearch = h.bind(this), this.convertedObjectIDs = g.bind(this), this.convertedFilters = y.bind(this), this.viewedObjectIDs = b.bind(this), this.viewedFilters = x.bind(this), this.getVersion = f.bind(this)
            };

            function I(t) {
                return function(e) {
                    for (var n = [], r = arguments.length - 1; r-- > 0;) n[r] = arguments[r + 1];
                    e && o(t[e]) ? t[e].apply(t, n) : console.warn("The method `" + e + "` doesn't exist.")
                }
            }
            var R = function(t, e) {
                    var n = JSON.stringify(e);
                    if (!navigator.sendBeacon(t, n)) return D(t, e)
                },
                D = function(t, e) {
                    var n = JSON.stringify(e),
                        r = new XMLHttpRequest;
                    r.open("POST", t), r.send(n)
                };

            function M() {
                if (function() {
                        try {
                            return Boolean(navigator.sendBeacon)
                        } catch (w) {
                            return !1
                        }
                    }()) return R;
                if (function() {
                        try {
                            return Boolean(XMLHttpRequest)
                        } catch (w) {
                            return !1
                        }
                    }()) return D;
                throw new Error("Could not find a supported HTTP request client in this environment.")
            }
            var L = function(t) {
                return I(new T({
                    requestFn: t
                }))
            }(M());
            e.AlgoliaAnalytics = T, e.default = L, e.getFunctionalInterface = I, e.getRequesterForBrowser = M, e.processQueue = function(t) {
                var e = t.AlgoliaAnalyticsObject;
                if (e) {
                    var n = I(this),
                        r = t[e];
                    r.queue = r.queue || [];
                    var o = r.queue;
                    o.forEach((function(t) {
                        var e = [].slice.call(t),
                            r = e[0],
                            o = e.slice(1);
                        n.apply(void 0, [r].concat(o))
                    })), o.push = function(t) {
                        var e = [].slice.call(t),
                            r = e[0],
                            o = e.slice(1);
                        n.apply(void 0, [r].concat(o))
                    }
                }
            }
        },
        20906: function(t, e, n) {
            var r = n(66590);
            t.exports = r.default, Object.keys(r).forEach((function(e) {
                "default" !== e && (t.exports[e] = r[e])
            }))
        },
        68253: function(t) {
            var e;
            e = function() {
                var t = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),
                    e = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');

                function n(n, r) {
                    if ("string" != typeof n) throw new Error("slugify: string argument expected");
                    var o = e[(r = "string" == typeof r ? {
                            replacement: r
                        } : r || {}).locale] || {},
                        i = void 0 === r.replacement ? "-" : r.replacement,
                        a = void 0 === r.trim || r.trim,
                        s = n.normalize().split("").reduce((function(e, n) {
                            var a = o[n] || t[n] || n;
                            return a === i && (a = " "), e + a.replace(r.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
                        }), "");
                    return r.strict && (s = s.replace(/[^A-Za-z0-9\s]/g, "")), a && (s = s.trim()), s = s.replace(/\s+/g, i), r.lower && (s = s.toLowerCase()), s
                }
                return n.extend = function(e) {
                    Object.assign(t, e)
                }, n
            }, t.exports = e(), t.exports.default = e()
        },
        38499: function(t, e, n) {
            "use strict";
            n.d(e, {
                CR: function() {
                    return u
                },
                XA: function() {
                    return s
                },
                ZT: function() {
                    return o
                },
                _T: function() {
                    return a
                },
                ev: function() {
                    return c
                },
                pi: function() {
                    return i
                }
            });
            var r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, r(t, e)
            };

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function a(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }
            Object.create;

            function s(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function u(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function c(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            Object.create
        },
        39483: function(t, e, n) {
            var r = n(17854),
                o = n(4411),
                i = n(66330),
                a = r.TypeError;
            t.exports = function(t) {
                if (o(t)) return t;
                throw a(i(t) + " is not a constructor")
            }
        },
        70648: function(t, e, n) {
            var r = n(17854),
                o = n(51694),
                i = n(60614),
                a = n(84326),
                s = n(5112)("toStringTag"),
                u = r.Object,
                c = "Arguments" == a(function() {
                    return arguments
                }());
            t.exports = o ? a : function(t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                    try {
                        return t[e]
                    } catch (n) {}
                }(e = u(t), s)) ? n : c ? a(e) : "Object" == (r = a(e)) && i(e.callee) ? "Arguments" : r
            }
        },
        86135: function(t, e, n) {
            "use strict";
            var r = n(34948),
                o = n(3070),
                i = n(79114);
            t.exports = function(t, e, n) {
                var a = r(e);
                a in t ? o.f(t, a, i(0, n)) : t[a] = n
            }
        },
        49974: function(t, e, n) {
            var r = n(1702),
                o = n(19662),
                i = n(34374),
                a = r(r.bind);
            t.exports = function(t, e) {
                return o(t), void 0 === e ? t : i ? a(t, e) : function() {
                    return t.apply(e, arguments)
                }
            }
        },
        71246: function(t, e, n) {
            var r = n(70648),
                o = n(58173),
                i = n(97497),
                a = n(5112)("iterator");
            t.exports = function(t) {
                if (null != t) return o(t, a) || o(t, "@@iterator") || i[r(t)]
            }
        },
        18554: function(t, e, n) {
            var r = n(17854),
                o = n(46916),
                i = n(19662),
                a = n(19670),
                s = n(66330),
                u = n(71246),
                c = r.TypeError;
            t.exports = function(t, e) {
                var n = arguments.length < 2 ? u(t) : e;
                if (i(n)) return a(o(n, t));
                throw c(s(t) + " is not iterable")
            }
        },
        97659: function(t, e, n) {
            var r = n(5112),
                o = n(97497),
                i = r("iterator"),
                a = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (o.Array === t || a[i] === t)
            }
        },
        4411: function(t, e, n) {
            var r = n(1702),
                o = n(47293),
                i = n(60614),
                a = n(70648),
                s = n(35005),
                u = n(42788),
                c = function() {},
                l = [],
                f = s("Reflect", "construct"),
                d = /^\s*(?:class|function)\b/,
                p = r(d.exec),
                v = !d.exec(c),
                m = function(t) {
                    if (!i(t)) return !1;
                    try {
                        return f(c, l, t), !0
                    } catch (e) {
                        return !1
                    }
                },
                h = function(t) {
                    if (!i(t)) return !1;
                    switch (a(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return v || !!p(d, u(t))
                    } catch (e) {
                        return !0
                    }
                };
            h.sham = !0, t.exports = !f || o((function() {
                var t;
                return m(m.call) || !m(Object) || !m((function() {
                    t = !0
                })) || t
            })) ? h : m
        },
        20408: function(t, e, n) {
            var r = n(17854),
                o = n(49974),
                i = n(46916),
                a = n(19670),
                s = n(66330),
                u = n(97659),
                c = n(26244),
                l = n(47976),
                f = n(18554),
                d = n(71246),
                p = n(99212),
                v = r.TypeError,
                m = function(t, e) {
                    this.stopped = t, this.result = e
                },
                h = m.prototype;
            t.exports = function(t, e, n) {
                var r, g, y, b, x, w, O, E = n && n.that,
                    P = !(!n || !n.AS_ENTRIES),
                    S = !(!n || !n.IS_ITERATOR),
                    C = !(!n || !n.INTERRUPTED),
                    k = o(e, E),
                    j = function(t) {
                        return r && p(r, "normal", t), new m(!0, t)
                    },
                    A = function(t) {
                        return P ? (a(t), C ? k(t[0], t[1], j) : k(t[0], t[1])) : C ? k(t, j) : k(t)
                    };
                if (S) r = t;
                else {
                    if (!(g = d(t))) throw v(s(t) + " is not iterable");
                    if (u(g)) {
                        for (y = 0, b = c(t); b > y; y++)
                            if ((x = A(t[y])) && l(h, x)) return x;
                        return new m(!1)
                    }
                    r = f(t, g)
                }
                for (w = r.next; !(O = i(w, r)).done;) {
                    try {
                        x = A(O.value)
                    } catch (T) {
                        p(r, "throw", T)
                    }
                    if ("object" == typeof x && x && l(h, x)) return x
                }
                return new m(!1)
            }
        },
        99212: function(t, e, n) {
            var r = n(46916),
                o = n(19670),
                i = n(58173);
            t.exports = function(t, e, n) {
                var a, s;
                o(t);
                try {
                    if (!(a = i(t, "return"))) {
                        if ("throw" === e) throw n;
                        return n
                    }
                    a = r(a, t)
                } catch (u) {
                    s = !0, a = u
                }
                if ("throw" === e) throw n;
                if (s) throw a;
                return o(a), n
            }
        },
        97497: function(t) {
            t.exports = {}
        },
        13366: function(t, e, n) {
            var r = n(17854);
            t.exports = r.Promise
        },
        78523: function(t, e, n) {
            "use strict";
            var r = n(19662),
                o = function(t) {
                    var e, n;
                    this.promise = new t((function(t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    })), this.resolve = r(e), this.reject = r(n)
                };
            t.exports.f = function(t) {
                return new o(t)
            }
        },
        69478: function(t, e, n) {
            var r = n(19670),
                o = n(70111),
                i = n(78523);
            t.exports = function(t, e) {
                if (r(t), o(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise
            }
        },
        36707: function(t, e, n) {
            var r = n(19670),
                o = n(39483),
                i = n(5112)("species");
            t.exports = function(t, e) {
                var n, a = r(t).constructor;
                return void 0 === a || null == (n = r(a)[i]) ? e : o(n)
            }
        },
        51694: function(t, e, n) {
            var r = {};
            r[n(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
        },
        38559: function(t, e, n) {
            var r = n(82109),
                o = n(20408),
                i = n(86135);
            r({
                target: "Object",
                stat: !0
            }, {
                fromEntries: function(t) {
                    var e = {};
                    return o(t, (function(t, n) {
                        i(e, t, n)
                    }), {
                        AS_ENTRIES: !0
                    }), e
                }
            })
        },
        17727: function(t, e, n) {
            "use strict";
            var r = n(82109),
                o = n(31913),
                i = n(13366),
                a = n(47293),
                s = n(35005),
                u = n(60614),
                c = n(36707),
                l = n(69478),
                f = n(31320);
            if (r({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!i && a((function() {
                        i.prototype.finally.call({
                            then: function() {}
                        }, (function() {}))
                    }))
                }, {
                    finally: function(t) {
                        var e = c(this, s("Promise")),
                            n = u(t);
                        return this.then(n ? function(n) {
                            return l(e, t()).then((function() {
                                return n
                            }))
                        } : t, n ? function(n) {
                            return l(e, t()).then((function() {
                                throw n
                            }))
                        } : t)
                    }
                }), !o && u(i)) {
                var d = s("Promise").prototype.finally;
                i.prototype.finally !== d && f(i.prototype, "finally", d, {
                    unsafe: !0
                })
            }
        },
        41680: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return Ie
                }
            });
            var r = n(67294),
                o = n(59694),
                i = n(45082),
                a = n(3013),
                s = n(16985),
                u = n(31421),
                c = n(1597),
                l = n(8409),
                f = n(64001);

            function d(t, e, n) {
                n.set(t && e ? t / e : 0)
            }
            var p, v = n(21890),
                m = n(26162);

            function h() {
                return {
                    xOffset: window.pageXOffset,
                    yOffset: window.pageYOffset,
                    xMaxOffset: document.body.clientWidth - window.innerWidth,
                    yMaxOffset: document.body.clientHeight - window.innerHeight
                }
            }
            var g = !1;

            function y() {
                if (g = !0, "undefined" != typeof window) {
                    var t, e, n, r = (t = p, e = h, (n = function() {
                        var n = e(),
                            r = n.xOffset,
                            o = n.yOffset,
                            i = n.xMaxOffset,
                            a = n.yMaxOffset;
                        t.scrollX.set(r), t.scrollY.set(o), d(r, i, t.scrollXProgress), d(o, a, t.scrollYProgress)
                    })(), n);
                    (0, v.E)(window, "scroll", r, {
                        passive: !0
                    }), (0, v.E)(window, "resize", r)
                }
            }

            function b() {
                return p || (p = {
                    scrollX: (0, f.B)(0),
                    scrollY: (0, f.B)(0),
                    scrollXProgress: (0, f.B)(0),
                    scrollYProgress: (0, f.B)(0)
                }), (0, m.L)((function() {
                    !g && y()
                }), []), p
            }
            var x = n(55714),
                w = n.n(x),
                O = n(90808),
                E = n.n(O),
                P = n(57229),
                S = n.n(P),
                C = n(20961),
                k = n.n(C),
                j = n(9842),
                A = n.n(j),
                T = n(73223),
                I = [{
                    name: "Products",
                    url: T.Z.products
                }, {
                    name: "Download",
                    url: T.Z.download
                }, {
                    name: "Pricing",
                    url: T.Z.pricing
                }, {
                    name: "Help",
                    url: T.Z.help
                }, {
                    name: "Blog",
                    url: T.Z.blog
                }, {
                    name: "Contact",
                    url: T.Z.contact
                }];
            n(17727);

            function R(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function M(t, e, n) {
                var r, o = e.initialState;
                return {
                    getState: function() {
                        return o
                    },
                    dispatch: function(r, i) {
                        var a = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? R(Object(n), !0).forEach((function(e) {
                                    D(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({}, o);
                        o = t(o, {
                            type: r,
                            props: e,
                            payload: i
                        }), n({
                            state: o,
                            prevState: a
                        })
                    },
                    pendingRequests: (r = [], {
                        add: function(t) {
                            return r.push(t), t.finally((function() {
                                r = r.filter((function(e) {
                                    return e !== t
                                }))
                            }))
                        },
                        cancelAll: function() {
                            r.forEach((function(t) {
                                return t.cancel()
                            }))
                        },
                        isEmpty: function() {
                            return 0 === r.length
                        }
                    })
                }
            }

            function L(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e)
                }), [])
            }

            function N(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(n), !0).forEach((function(e) {
                        F(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function F(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function V(t) {
                return 0 === t.collections.length ? 0 : t.collections.reduce((function(t, e) {
                    return t + e.items.length
                }), 0)
            }
            var B = 0;
            n(38559);
            var q = function() {};

            function U(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function z(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Z(t, e) {
                var n = [];
                return Promise.resolve(t(e)).then((function(t) {
                    return Array.isArray(t), Promise.all(t.filter((function(t) {
                        return Boolean(t)
                    })).map((function(t) {
                        if (t.sourceId, n.includes(t.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(t.sourceId), " is not unique."));
                        n.push(t.sourceId);
                        var e = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? U(Object(n), !0).forEach((function(e) {
                                    z(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            getItemInputValue: function(t) {
                                return t.state.query
                            },
                            getItemUrl: function() {},
                            onSelect: function(t) {
                                (0, t.setIsOpen)(!1)
                            },
                            onActive: q
                        }, t);
                        return Promise.resolve(e)
                    })))
                }))
            }

            function H(t) {
                return function(t) {
                    if (Array.isArray(t)) return W(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return W(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function X(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(n), !0).forEach((function(e) {
                        G(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function G(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function K(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function $(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? K(Object(n), !0).forEach((function(e) {
                        J(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function J(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function tt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Q(Object(n), !0).forEach((function(e) {
                        et(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function et(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function nt(t) {
                return function(t) {
                    if (Array.isArray(t)) return rt(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return rt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rt(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ot(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function it(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ot(Object(n), !0).forEach((function(e) {
                        at(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function at(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function st(t) {
                return Boolean(t.execute)
            }

            function ut(t, e) {
                return n = t, Boolean(null == n ? void 0 : n.execute) ? it(it({}, t), {}, {
                    requests: t.queries.map((function(n) {
                        return {
                            query: n,
                            sourceId: e,
                            transformResponse: t.transformResponse
                        }
                    }))
                }) : {
                    items: t,
                    sourceId: e
                };
                var n
            }

            function ct(t) {
                var e = t.reduce((function(t, e) {
                    if (!st(e)) return t.push(e), t;
                    var n = e.searchClient,
                        r = e.execute,
                        o = e.requesterId,
                        i = e.requests,
                        a = t.find((function(t) {
                            return st(e) && st(t) && t.searchClient === n && Boolean(o) && t.requesterId === o
                        }));
                    if (a) {
                        var s;
                        (s = a.items).push.apply(s, nt(i))
                    } else {
                        var u = {
                            execute: r,
                            requesterId: o,
                            items: i,
                            searchClient: n
                        };
                        t.push(u)
                    }
                    return t
                }), []).map((function(t) {
                    if (!st(t)) return Promise.resolve(t);
                    var e = t,
                        n = e.execute,
                        r = e.items;
                    return n({
                        searchClient: e.searchClient,
                        requests: r
                    })
                }));
                return Promise.all(e).then((function(t) {
                    return L(t)
                }))
            }

            function lt(t, e) {
                return e.map((function(e) {
                    var n = t.filter((function(t) {
                            return t.sourceId === e.sourceId
                        })),
                        r = n.map((function(t) {
                            return t.items
                        })),
                        o = n[0].transformResponse,
                        i = o ? o(function(t) {
                            var e = t.map((function(t) {
                                var e;
                                return tt(tt({}, t), {}, {
                                    hits: null === (e = t.hits) || void 0 === e ? void 0 : e.map((function(e) {
                                        return tt(tt({}, e), {}, {
                                            __autocomplete_indexName: t.index,
                                            __autocomplete_queryID: t.queryID
                                        })
                                    }))
                                })
                            }));
                            return {
                                results: e,
                                hits: e.map((function(t) {
                                    return t.hits
                                })).filter(Boolean),
                                facetHits: e.map((function(t) {
                                    var e;
                                    return null === (e = t.facetHits) || void 0 === e ? void 0 : e.map((function(t) {
                                        return {
                                            label: t.value,
                                            count: t.count,
                                            _highlightResult: {
                                                label: {
                                                    value: t.highlighted
                                                }
                                            }
                                        }
                                    }))
                                })).filter(Boolean)
                            }
                        }(r)) : r;
                    return Array.isArray(i), i.every(Boolean), 'The `getItems` function from source "'.concat(e.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
                        source: e,
                        items: i
                    }
                }))
            }

            function ft(t, e) {
                var n = e;
                return {
                    then: function(e, r) {
                        return ft(t.then(vt(e, n, t), vt(r, n, t)), n)
                    },
                    catch: function(e) {
                        return ft(t.catch(vt(e, n, t)), n)
                    },
                    finally: function(e) {
                        return e && n.onCancelList.push(e), ft(t.finally(vt(e && function() {
                            return n.onCancelList = [], e()
                        }, n, t)), n)
                    },
                    cancel: function() {
                        n.isCanceled = !0;
                        var t = n.onCancelList;
                        n.onCancelList = [], t.forEach((function(t) {
                            t()
                        }))
                    },
                    isCanceled: function() {
                        return !0 === n.isCanceled
                    }
                }
            }

            function dt(t) {
                return ft(new Promise((function(e, n) {
                    return t(e, n)
                })), {
                    isCanceled: !1,
                    onCancelList: []
                })
            }

            function pt(t) {
                return ft(t, {
                    isCanceled: !1,
                    onCancelList: []
                })
            }

            function vt(t, e, n) {
                return t ? function(n) {
                    return e.isCanceled ? n : t(n)
                } : n
            }

            function mt(t) {
                var e = function(t) {
                    var e = t.collections.map((function(t) {
                        return t.items.length
                    })).reduce((function(t, e, n) {
                        var r = (t[n - 1] || 0) + e;
                        return t.push(r), t
                    }), []).reduce((function(e, n) {
                        return n <= t.activeItemId ? e + 1 : e
                    }), 0);
                    return t.collections[e]
                }(t);
                if (!e) return null;
                var n = e.items[function(t) {
                        for (var e = t.state, n = t.collection, r = !1, o = 0, i = 0; !1 === r;) {
                            var a = e.collections[o];
                            if (a === n) {
                                r = !0;
                                break
                            }
                            i += a.items.length, o++
                        }
                        return e.activeItemId - i
                    }({
                        state: t,
                        collection: e
                    })],
                    r = e.source;
                return {
                    item: n,
                    itemInputValue: r.getItemInputValue({
                        item: n,
                        state: t
                    }),
                    itemUrl: r.getItemUrl({
                        item: n,
                        state: t
                    }),
                    source: r
                }
            }
            dt.resolve = function(t) {
                return pt(Promise.resolve(t))
            }, dt.reject = function(t) {
                return pt(Promise.reject(t))
            };
            var ht = ["event", "nextState", "props", "query", "refresh", "store"];

            function gt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? gt(Object(n), !0).forEach((function(e) {
                        bt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function bt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function xt(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }
            var wt, Ot, Et, Pt = null,
                St = (wt = -1, Ot = -1, Et = void 0, function(t) {
                    var e = ++wt;
                    return Promise.resolve(t).then((function(t) {
                        return Et && e < Ot ? Et : (Ot = e, Et = t, t)
                    }))
                });

            function Ct(t) {
                var e = t.event,
                    n = t.nextState,
                    r = void 0 === n ? {} : n,
                    o = t.props,
                    i = t.query,
                    a = t.refresh,
                    s = t.store,
                    u = xt(t, ht);
                Pt && o.environment.clearTimeout(Pt);
                var c = u.setCollections,
                    l = u.setIsOpen,
                    f = u.setQuery,
                    d = u.setActiveItemId,
                    p = u.setStatus;
                if (f(i), d(o.defaultActiveItemId), !i && !1 === o.openOnFocus) {
                    var v, m = s.getState().collections.map((function(t) {
                        return yt(yt({}, t), {}, {
                            items: []
                        })
                    }));
                    p("idle"), c(m), l(null !== (v = r.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({
                        state: s.getState()
                    }));
                    var h = pt(St(m).then((function() {
                        return Promise.resolve()
                    })));
                    return s.pendingRequests.add(h)
                }
                p("loading"), Pt = o.environment.setTimeout((function() {
                    p("stalled")
                }), o.stallThreshold);
                var g = pt(St(o.getSources(yt({
                    query: i,
                    refresh: a,
                    state: s.getState()
                }, u)).then((function(t) {
                    return Promise.all(t.map((function(t) {
                        return Promise.resolve(t.getItems(yt({
                            query: i,
                            refresh: a,
                            state: s.getState()
                        }, u))).then((function(e) {
                            return ut(e, t.sourceId)
                        }))
                    }))).then(ct).then((function(e) {
                        return lt(e, t)
                    })).then((function(t) {
                        return function(t) {
                            var e = t.collections,
                                n = t.props,
                                r = t.state,
                                o = e.reduce((function(t, e) {
                                    return $($({}, t), {}, J({}, e.source.sourceId, $($({}, e.source), {}, {
                                        getItems: function() {
                                            return L(e.items)
                                        }
                                    })))
                                }), {});
                            return L(n.reshape({
                                sources: Object.values(o),
                                sourcesBySourceId: o,
                                state: r
                            })).filter(Boolean).map((function(t) {
                                return {
                                    source: t,
                                    items: t.getItems()
                                }
                            }))
                        }({
                            collections: t,
                            props: o,
                            state: s.getState()
                        })
                    }))
                })))).then((function(t) {
                    var n;
                    p("idle"), c(t);
                    var f = o.shouldPanelOpen({
                        state: s.getState()
                    });
                    l(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && f || f);
                    var d = mt(s.getState());
                    if (null !== s.getState().activeItemId && d) {
                        var v = d.item,
                            m = d.itemInputValue,
                            h = d.itemUrl,
                            g = d.source;
                        g.onActive(yt({
                            event: e,
                            item: v,
                            itemInputValue: m,
                            itemUrl: h,
                            refresh: a,
                            source: g,
                            state: s.getState()
                        }, u))
                    }
                })).finally((function() {
                    p("idle"), Pt && o.environment.clearTimeout(Pt)
                }));
                return s.pendingRequests.add(g)
            }
            var kt = ["event", "props", "refresh", "store"];

            function jt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function At(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? jt(Object(n), !0).forEach((function(e) {
                        Tt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Tt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function It(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }
            var Rt = ["props", "refresh", "store"],
                Dt = ["inputElement", "formElement", "panelElement"],
                Mt = ["inputElement"],
                Lt = ["inputElement", "maxLength"],
                Nt = ["item", "source"];

            function _t(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ft(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _t(Object(n), !0).forEach((function(e) {
                        Vt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Vt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Bt(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function qt(t) {
                var e = t.props,
                    n = t.refresh,
                    r = t.store,
                    o = Bt(t, Rt);
                return {
                    getEnvironmentProps: function(t) {
                        var n = t.inputElement,
                            o = t.formElement,
                            i = t.panelElement;
                        return Ft({
                            onTouchStart: function(t) {
                                !r.getState().isOpen && r.pendingRequests.isEmpty() || t.target === n || !1 === [o, i].some((function(e) {
                                    return n = e, r = t.target, n === r || n.contains(r);
                                    var n, r
                                })) && (r.dispatch("blur", null), e.debug || r.pendingRequests.cancelAll())
                            },
                            onTouchMove: function(t) {
                                !1 !== r.getState().isOpen && n === e.environment.document.activeElement && t.target !== n && n.blur()
                            }
                        }, Bt(t, Dt))
                    },
                    getRootProps: function(t) {
                        return Ft({
                            role: "combobox",
                            "aria-expanded": r.getState().isOpen,
                            "aria-haspopup": "listbox",
                            "aria-owns": r.getState().isOpen ? "".concat(e.id, "-list") : void 0,
                            "aria-labelledby": "".concat(e.id, "-label")
                        }, t)
                    },
                    getFormProps: function(t) {
                        t.inputElement;
                        return Ft({
                            action: "",
                            noValidate: !0,
                            role: "search",
                            onSubmit: function(i) {
                                var a;
                                i.preventDefault(), e.onSubmit(Ft({
                                    event: i,
                                    refresh: n,
                                    state: r.getState()
                                }, o)), r.dispatch("submit", null), null === (a = t.inputElement) || void 0 === a || a.blur()
                            },
                            onReset: function(i) {
                                var a;
                                i.preventDefault(), e.onReset(Ft({
                                    event: i,
                                    refresh: n,
                                    state: r.getState()
                                }, o)), r.dispatch("reset", null), null === (a = t.inputElement) || void 0 === a || a.focus()
                            }
                        }, Bt(t, Mt))
                    },
                    getLabelProps: function(t) {
                        return Ft({
                            htmlFor: "".concat(e.id, "-input"),
                            id: "".concat(e.id, "-label")
                        }, t)
                    },
                    getInputProps: function(t) {
                        function i(t) {
                            (e.openOnFocus || Boolean(r.getState().query)) && Ct(Ft({
                                event: t,
                                props: e,
                                query: r.getState().completion || r.getState().query,
                                refresh: n,
                                store: r
                            }, o)), r.dispatch("focus", null)
                        }
                        var a = "ontouchstart" in e.environment,
                            s = t || {},
                            u = (s.inputElement, s.maxLength),
                            c = void 0 === u ? 512 : u,
                            l = Bt(s, Lt),
                            f = mt(r.getState());
                        return Ft({
                            "aria-autocomplete": "both",
                            "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? "".concat(e.id, "-item-").concat(r.getState().activeItemId) : void 0,
                            "aria-controls": r.getState().isOpen ? "".concat(e.id, "-list") : void 0,
                            "aria-labelledby": "".concat(e.id, "-label"),
                            value: r.getState().completion || r.getState().query,
                            id: "".concat(e.id, "-input"),
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            enterKeyHint: null != f && f.itemUrl ? "go" : "search",
                            spellCheck: "false",
                            autoFocus: e.autoFocus,
                            placeholder: e.placeholder,
                            maxLength: c,
                            type: "search",
                            onChange: function(t) {
                                Ct(Ft({
                                    event: t,
                                    props: e,
                                    query: t.currentTarget.value.slice(0, c),
                                    refresh: n,
                                    store: r
                                }, o))
                            },
                            onKeyDown: function(t) {
                                ! function(t) {
                                    var e = t.event,
                                        n = t.props,
                                        r = t.refresh,
                                        o = t.store,
                                        i = It(t, kt);
                                    if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                                        var a = function() {
                                                var t = n.environment.document.getElementById("".concat(n.id, "-item-").concat(o.getState().activeItemId));
                                                t && (t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded(!1) : t.scrollIntoView(!1))
                                            },
                                            s = function() {
                                                var t = mt(o.getState());
                                                if (null !== o.getState().activeItemId && t) {
                                                    var n = t.item,
                                                        a = t.itemInputValue,
                                                        s = t.itemUrl,
                                                        u = t.source;
                                                    u.onActive(At({
                                                        event: e,
                                                        item: n,
                                                        itemInputValue: a,
                                                        itemUrl: s,
                                                        refresh: r,
                                                        source: u,
                                                        state: o.getState()
                                                    }, i))
                                                }
                                            };
                                        e.preventDefault(), !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? Ct(At({
                                            event: e,
                                            props: n,
                                            query: o.getState().query,
                                            refresh: r,
                                            store: o
                                        }, i)).then((function() {
                                            o.dispatch(e.key, {
                                                nextActiveItemId: n.defaultActiveItemId
                                            }), s(), setTimeout(a, 0)
                                        })) : (o.dispatch(e.key, {}), s(), a())
                                    } else if ("Escape" === e.key) e.preventDefault(), o.dispatch(e.key, null), o.pendingRequests.cancelAll();
                                    else if ("Enter" === e.key) {
                                        if (null === o.getState().activeItemId || o.getState().collections.every((function(t) {
                                                return 0 === t.items.length
                                            }))) return;
                                        e.preventDefault();
                                        var u = mt(o.getState()),
                                            c = u.item,
                                            l = u.itemInputValue,
                                            f = u.itemUrl,
                                            d = u.source;
                                        if (e.metaKey || e.ctrlKey) void 0 !== f && (d.onSelect(At({
                                            event: e,
                                            item: c,
                                            itemInputValue: l,
                                            itemUrl: f,
                                            refresh: r,
                                            source: d,
                                            state: o.getState()
                                        }, i)), n.navigator.navigateNewTab({
                                            itemUrl: f,
                                            item: c,
                                            state: o.getState()
                                        }));
                                        else if (e.shiftKey) void 0 !== f && (d.onSelect(At({
                                            event: e,
                                            item: c,
                                            itemInputValue: l,
                                            itemUrl: f,
                                            refresh: r,
                                            source: d,
                                            state: o.getState()
                                        }, i)), n.navigator.navigateNewWindow({
                                            itemUrl: f,
                                            item: c,
                                            state: o.getState()
                                        }));
                                        else if (e.altKey);
                                        else {
                                            if (void 0 !== f) return d.onSelect(At({
                                                event: e,
                                                item: c,
                                                itemInputValue: l,
                                                itemUrl: f,
                                                refresh: r,
                                                source: d,
                                                state: o.getState()
                                            }, i)), void n.navigator.navigate({
                                                itemUrl: f,
                                                item: c,
                                                state: o.getState()
                                            });
                                            Ct(At({
                                                event: e,
                                                nextState: {
                                                    isOpen: !1
                                                },
                                                props: n,
                                                query: l,
                                                refresh: r,
                                                store: o
                                            }, i)).then((function() {
                                                d.onSelect(At({
                                                    event: e,
                                                    item: c,
                                                    itemInputValue: l,
                                                    itemUrl: f,
                                                    refresh: r,
                                                    source: d,
                                                    state: o.getState()
                                                }, i))
                                            }))
                                        }
                                    }
                                }(Ft({
                                    event: t,
                                    props: e,
                                    refresh: n,
                                    store: r
                                }, o))
                            },
                            onFocus: i,
                            onBlur: function() {
                                a || (r.dispatch("blur", null), e.debug || r.pendingRequests.cancelAll())
                            },
                            onClick: function(n) {
                                t.inputElement !== e.environment.document.activeElement || r.getState().isOpen || i(n)
                            }
                        }, l)
                    },
                    getPanelProps: function(t) {
                        return Ft({
                            onMouseDown: function(t) {
                                t.preventDefault()
                            },
                            onMouseLeave: function() {
                                r.dispatch("mouseleave", null)
                            }
                        }, t)
                    },
                    getListProps: function(t) {
                        return Ft({
                            role: "listbox",
                            "aria-labelledby": "".concat(e.id, "-label"),
                            id: "".concat(e.id, "-list")
                        }, t)
                    },
                    getItemProps: function(t) {
                        var i = t.item,
                            a = t.source,
                            s = Bt(t, Nt);
                        return Ft({
                            id: "".concat(e.id, "-item-").concat(i.__autocomplete_id),
                            role: "option",
                            "aria-selected": r.getState().activeItemId === i.__autocomplete_id,
                            onMouseMove: function(t) {
                                if (i.__autocomplete_id !== r.getState().activeItemId) {
                                    r.dispatch("mousemove", i.__autocomplete_id);
                                    var e = mt(r.getState());
                                    if (null !== r.getState().activeItemId && e) {
                                        var a = e.item,
                                            s = e.itemInputValue,
                                            u = e.itemUrl,
                                            c = e.source;
                                        c.onActive(Ft({
                                            event: t,
                                            item: a,
                                            itemInputValue: s,
                                            itemUrl: u,
                                            refresh: n,
                                            source: c,
                                            state: r.getState()
                                        }, o))
                                    }
                                }
                            },
                            onMouseDown: function(t) {
                                t.preventDefault()
                            },
                            onClick: function(t) {
                                var s = a.getItemInputValue({
                                        item: i,
                                        state: r.getState()
                                    }),
                                    u = a.getItemUrl({
                                        item: i,
                                        state: r.getState()
                                    });
                                (u ? Promise.resolve() : Ct(Ft({
                                    event: t,
                                    nextState: {
                                        isOpen: !1
                                    },
                                    props: e,
                                    query: s,
                                    refresh: n,
                                    store: r
                                }, o))).then((function() {
                                    a.onSelect(Ft({
                                        event: t,
                                        item: i,
                                        itemInputValue: s,
                                        itemUrl: u,
                                        refresh: n,
                                        source: a,
                                        state: r.getState()
                                    }, o))
                                }))
                            }
                        }, s)
                    }
                }
            }
            var Ut = [{
                segment: "autocomplete-core",
                version: "1.5.3"
            }];

            function zt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Zt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? zt(Object(n), !0).forEach((function(e) {
                        Ht(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ht(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Wt(t) {
                var e, n, r, o, i = t.plugins,
                    a = t.options,
                    s = null === (e = ((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === e ? void 0 : e.segment,
                    u = s ? Ht({}, s, Object.keys((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
                return {
                    plugins: i.map((function(t) {
                        return {
                            name: t.name,
                            options: Object.keys(t.__autocomplete_pluginOptions || [])
                        }
                    })),
                    options: Zt({
                        "autocomplete-core": Object.keys(a)
                    }, u),
                    ua: Ut.concat((null === (o = a.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
                }
            }

            function Yt(t) {
                var e, n = t.state;
                return !1 === n.isOpen || null === n.activeItemId ? null : (null === (e = mt(n)) || void 0 === e ? void 0 : e.itemInputValue) || null
            }

            function Xt(t, e, n, r) {
                if (!n) return null;
                if (t < 0 && (null === e || null !== r && 0 === e)) return n + t;
                var o = (null === e ? -1 : e) + t;
                return o <= -1 || o >= n ? null === r ? null : 0 : o
            }

            function Gt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Kt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Gt(Object(n), !0).forEach((function(e) {
                        $t(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function $t(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Jt = function(t, e) {
                switch (e.type) {
                    case "setActiveItemId":
                    case "mousemove":
                        return Kt(Kt({}, t), {}, {
                            activeItemId: e.payload
                        });
                    case "setQuery":
                        return Kt(Kt({}, t), {}, {
                            query: e.payload,
                            completion: null
                        });
                    case "setCollections":
                        return Kt(Kt({}, t), {}, {
                            collections: e.payload
                        });
                    case "setIsOpen":
                        return Kt(Kt({}, t), {}, {
                            isOpen: e.payload
                        });
                    case "setStatus":
                        return Kt(Kt({}, t), {}, {
                            status: e.payload
                        });
                    case "setContext":
                        return Kt(Kt({}, t), {}, {
                            context: Kt(Kt({}, t.context), e.payload)
                        });
                    case "ArrowDown":
                        var n = Kt(Kt({}, t), {}, {
                            activeItemId: e.payload.hasOwnProperty("nextActiveItemId") ? e.payload.nextActiveItemId : Xt(1, t.activeItemId, V(t), e.props.defaultActiveItemId)
                        });
                        return Kt(Kt({}, n), {}, {
                            completion: Yt({
                                state: n
                            })
                        });
                    case "ArrowUp":
                        var r = Kt(Kt({}, t), {}, {
                            activeItemId: Xt(-1, t.activeItemId, V(t), e.props.defaultActiveItemId)
                        });
                        return Kt(Kt({}, r), {}, {
                            completion: Yt({
                                state: r
                            })
                        });
                    case "Escape":
                        return t.isOpen ? Kt(Kt({}, t), {}, {
                            activeItemId: null,
                            isOpen: !1,
                            completion: null
                        }) : Kt(Kt({}, t), {}, {
                            activeItemId: null,
                            query: "",
                            status: "idle",
                            collections: []
                        });
                    case "submit":
                        return Kt(Kt({}, t), {}, {
                            activeItemId: null,
                            isOpen: !1,
                            status: "idle"
                        });
                    case "reset":
                        return Kt(Kt({}, t), {}, {
                            activeItemId: !0 === e.props.openOnFocus ? e.props.defaultActiveItemId : null,
                            status: "idle",
                            query: ""
                        });
                    case "focus":
                        return Kt(Kt({}, t), {}, {
                            activeItemId: e.props.defaultActiveItemId,
                            isOpen: (e.props.openOnFocus || Boolean(t.query)) && e.props.shouldPanelOpen({
                                state: t
                            })
                        });
                    case "blur":
                        return e.props.debug ? t : Kt(Kt({}, t), {}, {
                            isOpen: !1,
                            activeItemId: null
                        });
                    case "mouseleave":
                        return Kt(Kt({}, t), {}, {
                            activeItemId: e.props.defaultActiveItemId
                        });
                    default:
                        return "The reducer action ".concat(JSON.stringify(e.type), " is not supported."), t
                }
            };

            function Qt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function te(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Qt(Object(n), !0).forEach((function(e) {
                        ee(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ee(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function ne(t) {
                var e = [],
                    n = function(t, e) {
                        var n, r = "undefined" != typeof window ? window : {},
                            o = t.plugins || [];
                        return X(X({
                            debug: !1,
                            openOnFocus: !1,
                            placeholder: "",
                            autoFocus: !1,
                            defaultActiveItemId: null,
                            stallThreshold: 300,
                            environment: r,
                            shouldPanelOpen: function(t) {
                                return V(t.state) > 0
                            },
                            reshape: function(t) {
                                return t.sources
                            }
                        }, t), {}, {
                            id: null !== (n = t.id) && void 0 !== n ? n : "autocomplete-".concat(B++),
                            plugins: o,
                            initialState: X({
                                activeItemId: null,
                                query: "",
                                completion: null,
                                collections: [],
                                isOpen: !1,
                                status: "idle",
                                context: {}
                            }, t.initialState),
                            onStateChange: function(e) {
                                var n;
                                null === (n = t.onStateChange) || void 0 === n || n.call(t, e), o.forEach((function(t) {
                                    var n;
                                    return null === (n = t.onStateChange) || void 0 === n ? void 0 : n.call(t, e)
                                }))
                            },
                            onSubmit: function(e) {
                                var n;
                                null === (n = t.onSubmit) || void 0 === n || n.call(t, e), o.forEach((function(t) {
                                    var n;
                                    return null === (n = t.onSubmit) || void 0 === n ? void 0 : n.call(t, e)
                                }))
                            },
                            onReset: function(e) {
                                var n;
                                null === (n = t.onReset) || void 0 === n || n.call(t, e), o.forEach((function(t) {
                                    var n;
                                    return null === (n = t.onReset) || void 0 === n ? void 0 : n.call(t, e)
                                }))
                            },
                            getSources: function(n) {
                                return Promise.all([].concat(H(o.map((function(t) {
                                    return t.getSources
                                }))), [t.getSources]).filter(Boolean).map((function(t) {
                                    return Z(t, n)
                                }))).then((function(t) {
                                    return L(t)
                                })).then((function(t) {
                                    return t.map((function(t) {
                                        return X(X({}, t), {}, {
                                            onSelect: function(n) {
                                                t.onSelect(n), e.forEach((function(t) {
                                                    var e;
                                                    return null === (e = t.onSelect) || void 0 === e ? void 0 : e.call(t, n)
                                                }))
                                            },
                                            onActive: function(n) {
                                                t.onActive(n), e.forEach((function(t) {
                                                    var e;
                                                    return null === (e = t.onActive) || void 0 === e ? void 0 : e.call(t, n)
                                                }))
                                            }
                                        })
                                    }))
                                }))
                            },
                            navigator: X({
                                navigate: function(t) {
                                    var e = t.itemUrl;
                                    r.location.assign(e)
                                },
                                navigateNewTab: function(t) {
                                    var e = t.itemUrl,
                                        n = r.open(e, "_blank", "noopener");
                                    null == n || n.focus()
                                },
                                navigateNewWindow: function(t) {
                                    var e = t.itemUrl;
                                    r.open(e, "_blank", "noopener")
                                }
                            }, t.navigator)
                        })
                    }(t, e),
                    r = M(Jt, n, (function(t) {
                        var e = t.prevState,
                            r = t.state;
                        n.onStateChange(te({
                            prevState: e,
                            state: r,
                            refresh: a
                        }, o))
                    })),
                    o = function(t) {
                        var e = t.store;
                        return {
                            setActiveItemId: function(t) {
                                e.dispatch("setActiveItemId", t)
                            },
                            setQuery: function(t) {
                                e.dispatch("setQuery", t)
                            },
                            setCollections: function(t) {
                                var n = 0,
                                    r = t.map((function(t) {
                                        return _(_({}, t), {}, {
                                            items: L(t.items).map((function(t) {
                                                return _(_({}, t), {}, {
                                                    __autocomplete_id: n++
                                                })
                                            }))
                                        })
                                    }));
                                e.dispatch("setCollections", r)
                            },
                            setIsOpen: function(t) {
                                e.dispatch("setIsOpen", t)
                            },
                            setStatus: function(t) {
                                e.dispatch("setStatus", t)
                            },
                            setContext: function(t) {
                                e.dispatch("setContext", t)
                            }
                        }
                    }({
                        store: r
                    }),
                    i = qt(te({
                        props: n,
                        refresh: a,
                        store: r
                    }, o));

                function a() {
                    return Ct(te({
                        event: new Event("input"),
                        nextState: {
                            isOpen: r.getState().isOpen
                        },
                        props: n,
                        query: r.getState().query,
                        refresh: a,
                        store: r
                    }, o))
                }
                return n.plugins.forEach((function(t) {
                        var n;
                        return null === (n = t.subscribe) || void 0 === n ? void 0 : n.call(t, te(te({}, o), {}, {
                            refresh: a,
                            onSelect: function(t) {
                                e.push({
                                    onSelect: t
                                })
                            },
                            onActive: function(t) {
                                e.push({
                                    onActive: t
                                })
                            }
                        }))
                    })),
                    function(t) {
                        var e, n = t.metadata,
                            r = t.environment;
                        if (null === (e = r.navigator) || void 0 === e ? void 0 : e.userAgent.includes("Algolia Crawler")) {
                            var o = r.document.createElement("meta"),
                                i = r.document.querySelector("head");
                            o.name = "algolia:metadata", setTimeout((function() {
                                o.content = JSON.stringify(n), i.appendChild(o)
                            }), 0)
                        }
                    }({
                        metadata: Wt({
                            plugins: n.plugins,
                            options: t
                        }),
                        environment: n.environment
                    }), te(te({
                        refresh: a
                    }, i), o)
            }
            var re = ["params"];

            function oe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ie(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? oe(Object(n), !0).forEach((function(e) {
                        ae(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ae(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function se(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function ue(t) {
                return function(t) {
                    if (Array.isArray(t)) return ce(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return ce(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function le(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? le(Object(n), !0).forEach((function(e) {
                        de(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function de(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var pe = function(t, e) {
                    function n(e) {
                        return t({
                            searchClient: e.searchClient,
                            queries: e.requests.map((function(t) {
                                return t.query
                            }))
                        }).then((function(t) {
                            return t.map((function(t, n) {
                                var r = e.requests[n];
                                return {
                                    items: t,
                                    sourceId: r.sourceId,
                                    transformResponse: r.transformResponse
                                }
                            }))
                        }))
                    }
                    return function(t) {
                        return function(r) {
                            return fe(fe({
                                requesterId: e,
                                execute: n
                            }, t), r)
                        }
                    }
                }((function(t) {
                    var e = t.searchClient,
                        n = t.queries,
                        r = t.userAgents,
                        o = void 0 === r ? [] : r;
                    return "function" == typeof e.addAlgoliaAgent && [].concat(ue(Ut), ue(o)).forEach((function(t) {
                        var n = t.segment,
                            r = t.version;
                        e.addAlgoliaAgent(n, r)
                    })), e.search(n.map((function(t) {
                        var e = t.params;
                        return ie(ie({}, se(t, re)), {}, {
                            params: ie({
                                hitsPerPage: 5,
                                highlightPreTag: "__aa-highlight__",
                                highlightPostTag: "__/aa-highlight__"
                            }, e)
                        })
                    }))).then((function(t) {
                        return t.results
                    }))
                }), "algolia"),
                ve = pe({
                    transformResponse: function(t) {
                        return t.hits
                    }
                }),
                me = n(52290),
                he = n.n(me),
                ge = n(20906),
                ye = n.n(ge),
                be = n(11970),
                xe = n(65214),
                we = n(95422),
                Oe = n(95216),
                Ee = n(36096),
                Pe = n(28569),
                Se = n(98745),
                Ce = n(78858),
                ke = n.n(Ce),
                je = n(75868),
                Ae = n(88837);

            function Te() {
                var t = "prod_bitwarden",
                    e = (0, o.useLocation)().pathname,
                    n = "undefined" != typeof navigator && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl",
                    l = ["pages", "help", "blog"],
                    f = "pages";
                e.startsWith("/help") && (f = "help"), e.startsWith("/blog") && (f = "blog"), l.sort((function(t, e) {
                    return t === f ? -1 : e === f ? 1 : 0
                })), (0, r.useEffect)((function() {
                    var t = function(t) {
                        var e;
                        "k" === (null == t || null === (e = t.key) || void 0 === e ? void 0 : e.toLowerCase()) && (t.ctrlKey || t.metaKey) && (t.preventDefault(), y(), x())
                    };
                    return window.addEventListener("keydown", t),
                        function() {
                            window.removeEventListener("keydown", t)
                        }
                }), []);
                var d = (0, xe.ac)("(max-width: 48em)")[0],
                    p = (0, r.useState)(""),
                    v = p[0],
                    m = p[1],
                    h = (0, we.qY)(),
                    g = h.isOpen,
                    y = h.onOpen,
                    b = h.onClose,
                    x = (0, r.useCallback)((function() {
                        v || (ye()("init", {
                            appId: "QVJ2G4VJRY",
                            apiKey: "113285a3c693f61013a07da90b523843",
                            useCookie: !0
                        }), ye()("getUserToken", null, (function(t, e) {
                            m(e)
                        })), ye()("onUserTokenChange", (function(t) {
                            m(t), "dataLayer" in window && window.dataLayer.push({
                                algoliaUserToken: t
                            })
                        }), {
                            immediate: !0
                        }))
                    }), []),
                    O = (0, r.useCallback)((function(e, n, r) {
                        ye()("clickedObjectIDsAfterSearch", {
                            userToken: v,
                            eventName: "Result Clicked",
                            index: t,
                            queryID: e,
                            objectIDs: [n],
                            positions: [r]
                        })
                    }), [v]),
                    E = (0, r.useState)({
                        collections: [],
                        completion: null,
                        context: {},
                        isOpen: !1,
                        query: "",
                        activeItemId: null,
                        status: "idle"
                    }),
                    P = E[0],
                    S = E[1],
                    C = (0, r.useMemo)((function() {
                        return ne({
                            onStateChange: function(t) {
                                var e = t.state;
                                S(e)
                            },
                            getSources: function(e) {
                                var n = e.query;
                                return [{
                                    sourceId: "results",
                                    getItems: function() {
                                        return (0, je.YD)(ve({
                                            searchClient: he()("QVJ2G4VJRY", "113285a3c693f61013a07da90b523843"),
                                            queries: l.map((function(e, r) {
                                                return {
                                                    indexName: t,
                                                    query: n,
                                                    params: {
                                                        filters: "type:" + e,
                                                        hitsPerPage: "help" === e && 0 === r ? 10 : 5,
                                                        highlightPreTag: "<mark>",
                                                        highlightPostTag: "</mark>",
                                                        clickAnalytics: !0,
                                                        userToken: v
                                                    }
                                                }
                                            })),
                                            transformResponse: function(t) {
                                                var e = t.hits;
                                                return e.forEach((function(t) {
                                                    return t.forEach((function(t, e) {
                                                        t.__position = e + 1
                                                    }))
                                                })), e
                                            }
                                        }))
                                    },
                                    getItemUrl: function(t) {
                                        return t.item.url
                                    }
                                }]
                            },
                            navigator: {
                                navigate: function(t) {
                                    b(), O(t.item.__autocomplete_queryID, t.item.objectID, t.item.__position), (0, c.navigate)(t.itemUrl)
                                }
                            },
                            defaultActiveItemId: 0
                        })
                    }), [v]);
                (0, r.useEffect)((function() {
                    "dataLayer" in window && P.query.length > 0 && "idle" === P.status && window.dataLayer.push({
                        event: "Hits Viewed"
                    })
                }), [P.status]);
                var k = (0, r.useRef)(null),
                    j = (0, r.useRef)(null),
                    T = (0, r.useRef)(null),
                    I = C.getEnvironmentProps;
                return (0, r.useEffect)((function() {
                    if (j.current && T.current && k.current) {
                        var t = I({
                                formElement: j.current,
                                inputElement: k.current,
                                panelElement: T.current
                            }),
                            e = t.onTouchStart,
                            n = t.onTouchMove;
                        return window.addEventListener("touchstart", e), window.addEventListener("touchmove", n),
                            function() {
                                window.removeEventListener("touchstart", e), window.removeEventListener("touchmove", n)
                            }
                    }
                }), [I, j, k, T]), (0, Ae.BX)(Ae.HY, {
                    children: [(0, Ae.tZ)(Oe.u, {
                        isDisabled: d,
                        label: "Search (" + n + "+K)",
                        hasArrow: !0,
                        children: (0, Ae.tZ)(s.zx, {
                            variant: "ghost",
                            _hover: {
                                opacity: .75
                            },
                            onClick: function() {
                                y(), x()
                            },
                            children: (0, Ae.tZ)(u.JO, {
                                as: ke(),
                                fontSize: "1.5rem",
                                cursor: "pointer"
                            })
                        })
                    }), (0, Ae.tZ)(be.xjn, {
                        portalZIndex: 20,
                        children: (0, Ae.BX)(Ee.u_, {
                            isOpen: g,
                            onClose: b,
                            size: d ? "full" : "md",
                            scrollBehavior: "inside",
                            children: [(0, Ae.tZ)(Ee.ZA, {}), (0, Ae.BX)(Ee.hz, Object.assign({}, C.getRootProps({}), {
                                "data-insights-index": t,
                                pos: "fixed",
                                top: "0",
                                left: "0",
                                right: "0",
                                bottom: "",
                                mx: "auto",
                                my: {
                                    base: 0,
                                    md: "5%"
                                },
                                bgColor: "white",
                                maxW: "70rem",
                                borderRadius: {
                                    base: 0,
                                    md: "10px"
                                },
                                boxShadow: "dark-lg",
                                border: "0",
                                padding: "0",
                                children: [(0, Ae.tZ)(Ee.xB, {
                                    px: {
                                        base: "2",
                                        md: "1rem"
                                    },
                                    children: (0, Ae.tZ)("form", Object.assign({
                                        ref: j
                                    }, C.getFormProps({
                                        inputElement: k.current
                                    }), {
                                        style: {
                                            border: "0",
                                            display: "flex"
                                        },
                                        children: (0, Ae.BX)(Pe.BZ, {
                                            onKeyDown: function(t) {
                                                "Escape" === t.key && b()
                                            },
                                            children: [(0, Ae.tZ)(Pe.Z8, {
                                                color: "gray.200",
                                                h: "full",
                                                children: (0, Ae.tZ)(ke(), {
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        margin: "auto"
                                                    }
                                                })
                                            }), (0, Ae.tZ)(Pe.II, Object.assign({
                                                height: {
                                                    base: "3rem",
                                                    md: "5rem"
                                                },
                                                fontSize: "1.5rem",
                                                border: "0",
                                                _focus: {
                                                    outline: "none"
                                                },
                                                ref: k
                                            }, C.getInputProps({
                                                inputElement: k.current
                                            }), {
                                                placeholder: "Search Site"
                                            })), (0, Ae.BX)(Pe.xH, {
                                                w: "28",
                                                h: "full",
                                                my: "auto",
                                                pos: "relative",
                                                children: ["idle" !== P.status && (0, Ae.tZ)(Se.$, {
                                                    color: "gray.300",
                                                    pos: "absolute",
                                                    left: "-2rem"
                                                }), P.query.length > 0 && (0, Ae.tZ)(i.m$.button, {
                                                    "aria-label": "Clear",
                                                    type: "reset",
                                                    h: "4",
                                                    w: "4",
                                                    mr: "3",
                                                    color: "gray.200",
                                                    _hover: {
                                                        color: "gray.600"
                                                    },
                                                    children: (0, Ae.tZ)(A(), {})
                                                }), (0, Ae.tZ)(s.zx, {
                                                    color: "gray.500",
                                                    borderWidth: "1px",
                                                    borderColor: "gray.400",
                                                    px: {
                                                        base: ".25rem",
                                                        md: "1rem"
                                                    },
                                                    onClick: b,
                                                    children: d ? "Cancel" : "esc"
                                                })]
                                            })]
                                        })
                                    }))
                                }), (0, Ae.tZ)(Ee.fe, {
                                    p: "0",
                                    children: P.query.length > 0 && (0, Ae.tZ)("div", Object.assign({
                                        ref: T
                                    }, C.getPanelProps({}), {
                                        children: P.collections.map((function(t) {
                                            var e = t.source,
                                                n = t.items;
                                            return (0, Ae.tZ)("section", {
                                                children: 0 === n.length && P.query.length > 0 && "idle" === P.status ? (0, Ae.BX)(a.xv, {
                                                    p: "4",
                                                    color: "gray.500",
                                                    textAlign: "center",
                                                    children: ["No results for ", (0, Ae.BX)("strong", {
                                                        children: ["“", P.query, "“."]
                                                    })]
                                                }) : (0, Ae.tZ)("ul", Object.assign({}, C.getListProps(), {
                                                    style: {
                                                        listStyleType: "none"
                                                    },
                                                    children: n.map((function(t) {
                                                        var n, r, o = C.getItemProps({
                                                            item: t,
                                                            source: e
                                                        });
                                                        return (0, Ae.BX)("div", {
                                                            children: [1 === t.__position && (0, Ae.tZ)("div", {
                                                                style: {
                                                                    backgroundColor: "#edf1f7",
                                                                    color: "#1252a3",
                                                                    padding: ".5rem 1.5rem",
                                                                    fontWeight: 500,
                                                                    fontSize: "1.125rem"
                                                                },
                                                                children: t.type
                                                            }), (0, Ae.BX)(i.m$.li, Object.assign({
                                                                borderTopColor: "gray.100",
                                                                bgColor: o["aria-selected"] ? "#175ddc" : "",
                                                                py: {
                                                                    base: "0",
                                                                    md: ".75rem"
                                                                },
                                                                px: {
                                                                    base: ".75rem",
                                                                    md: "1.5rem"
                                                                },
                                                                pos: "relative",
                                                                "data-insights-query-id": t.__autocomplete_queryID,
                                                                "data-insights-object-id": t.objectID,
                                                                "data-insights-position": t.__position
                                                            }, o, {
                                                                children: [(0, Ae.BX)(c.Link, {
                                                                    to: t.url,
                                                                    onClick: function() {
                                                                        b(), O(t.__autocomplete_queryID, t.objectID, t.__position)
                                                                    },
                                                                    style: {
                                                                        padding: ".875rem",
                                                                        borderRadius: "5px",
                                                                        display: "block"
                                                                    },
                                                                    children: [(0, Ae.tZ)(i.m$.h4, {
                                                                        fontSize: "1rem",
                                                                        fontWeight: "bold",
                                                                        color: o["aria-selected"] ? "white" : "#175ddc",
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: t._highlightResult.title.value
                                                                        }
                                                                    }), (0, Ae.tZ)(i.m$.div, {
                                                                        fontSize: ".875rem",
                                                                        color: o["aria-selected"] ? "#EBEBF0" : "#555770",
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: null === (n = t._snippetResult) || void 0 === n || null === (r = n.body) || void 0 === r ? void 0 : r.value
                                                                        }
                                                                    })]
                                                                }), o["aria-selected"] && (0, Ae.tZ)(i.m$.div, {
                                                                    pos: "absolute",
                                                                    right: "1rem",
                                                                    top: "2.5rem",
                                                                    color: "white",
                                                                    d: {
                                                                        base: "none",
                                                                        md: "block"
                                                                    },
                                                                    children: "⮐"
                                                                })]
                                                            }), t.objectID)]
                                                        }, t.objectID)
                                                    }))
                                                }))
                                            }, "source-" + t.source.sourceId)
                                        }))
                                    }))
                                }), (0, Ae.tZ)(Ee.mz, {
                                    d: {
                                        base: "flex",
                                        md: "none"
                                    },
                                    p: "2",
                                    borderTopWidth: "thin",
                                    borderStyle: "solid",
                                    borderColor: "gray.200",
                                    children: (0, Ae.tZ)(i.m$.div, {
                                        color: "#175ddc",
                                        w: "36",
                                        children: (0, Ae.tZ)(w(), {})
                                    })
                                })]
                            }))]
                        })
                    })]
                })
            }
            var Ie = function(t) {
                var e = t.bg,
                    n = void 0 === e ? "primary" : e,
                    f = (0, o.useLocation)().pathname,
                    d = (0, r.useState)(0),
                    p = d[0],
                    v = d[1],
                    m = b().scrollY,
                    h = (0, r.useState)(!1),
                    g = h[0],
                    y = h[1];
                return (0, r.useEffect)((function() {
                    return m.onChange((function() {
                        return v(m.get())
                    }))
                }), [m]), (0, Ae.BX)(i.m$.header, {
                    shadow: p > "20" ? "md" : void 0,
                    transition: "box-shadow 0.2s",
                    zIndex: "10",
                    w: "100%",
                    bg: n,
                    color: "white",
                    pos: "sticky",
                    top: "0",
                    h: "4rem",
                    children: [(0, Ae.BX)(a.xu, {
                        display: "flex",
                        maxW: {
                            base: "xl",
                            md: "7xl"
                        },
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: "15px",
                        mx: "auto",
                        h: "full",
                        children: [(0, Ae.BX)(a.kC, {
                            flexGrow: 1,
                            flexBasis: 0,
                            justify: "flex-start",
                            alignSelf: "stretch",
                            alignItems: "center",
                            children: [(0, Ae.tZ)(c.Link, {
                                to: "/",
                                style: {
                                    marginRight: "auto"
                                },
                                children: (0, Ae.BX)(a.xu, {
                                    display: "flex",
                                    alignItems: "center",
                                    mr: "16px",
                                    _hover: {
                                        textDecor: "none"
                                    },
                                    children: [(0, Ae.tZ)(a.xu, {
                                        w: "165px",
                                        display: {
                                            base: "block",
                                            lg: "none",
                                            xl: "block"
                                        },
                                        children: (0, Ae.tZ)(w(), {})
                                    }), (0, Ae.tZ)(a.xu, {
                                        w: "36px",
                                        display: {
                                            base: "none",
                                            lg: "block",
                                            xl: "none"
                                        },
                                        children: (0, Ae.tZ)(E(), {})
                                    })]
                                })
                            }), (0, Ae.tZ)(a.xu, {
                                display: {
                                    base: "none",
                                    lg: "flex"
                                },
                                alignItems: "center",
                                children: I.map((function(t) {
                                    var e = t.name,
                                        n = t.url;
                                    return (0, Ae.tZ)(a.rU, {
                                        as: c.Link,
                                        to: n,
                                        activeClassName: "active",
                                        partiallyActive: !0,
                                        className: f.includes("pricing") && n.includes("pricing") ? "active" : "",
                                        fontWeight: "400",
                                        fontSize: "lg",
                                        mx: "12.5px",
                                        height: "100%",
                                        py: "4",
                                        d: "flex",
                                        whiteSpace: "nowrap",
                                        alignItems: "center",
                                        _hover: {
                                            textDecor: "none",
                                            opacity: .75
                                        },
                                        sx: {
                                            "&.active": {
                                                fontWeight: "700",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "white"
                                            }
                                        },
                                        onClick: function() {
                                            return I.action && (0, l.I)({
                                                category: "" + (I.category || "main"),
                                                action: "" + I.action
                                            })
                                        },
                                        children: e
                                    }, e)
                                }))
                            }), (0, Ae.tZ)(Te, {})]
                        }), (0, Ae.BX)(a.kC, {
                            flexGrow: 1,
                            flexBasis: 0,
                            justify: "flex-end",
                            display: {
                                base: "none",
                                lg: "flex"
                            },
                            alignItems: "center",
                            children: [(0, Ae.tZ)(a.rU, {}), (0, Ae.tZ)(a.rU, {}), (0, Ae.BX)(a.rU, {})]
                        }), (0, Ae.tZ)(u.JO, {})]
                    }), (0, Ae.tZ)(a.xu, {
                        transition: "height 0.5s ",
                        style: {
                            height: g ? "520px" : "0"
                        },
                        bg: "#1252a3",
                        boxShadow: "inset 0 10px 10px -10px rgb(0 0 0 / 35%), inset 0 -10px 10px -10px rgb(0 0 0 / 35%)",
                        children: (0, Ae.BX)(a.kC, {
                            flexGrow: 1,
                            transition: "height 0.5s",
                            style: {
                                height: g ? "520px" : 0
                            },
                            flexBasis: 0,
                            direction: "column",
                            overflow: "hidden",
                            justify: "flex-start",
                            children: [(0, Ae.tZ)(a.rU, {
                                as: c.Link,
                                to: "/",
                                onClick: function() {
                                    return (0, l.I)({
                                        action: "Nav Home"
                                    })
                                },
                                fontWeight: "400",
                                fontSize: "lg",
                                mx: "16.5px",
                                my: "10px",
                                d: "flex",
                                color: "white",
                                alignItems: "center",
                                _hover: {
                                    textDecor: "none",
                                    opacity: .75
                                },
                                sx: {
                                    "&.active": {
                                        fontWeight: "700",
                                        borderBottom: "2px solid",
                                        borderBottomColor: "white",
                                        paddingBottom: 2,
                                        width: "20%"
                                    }
                                },
                                children: "Home"
                            }, "home"), I.map((function(t) {
                                var e = t.name,
                                    n = t.url;
                                return (0, Ae.tZ)(a.rU, {
                                    as: c.Link,
                                    to: n,
                                    color: "white",
                                    activeClassName: "active",
                                    partiallyActive: !0,
                                    className: f.includes("pricing") && n.includes("pricing") ? "active" : "",
                                    fontWeight: "400",
                                    fontSize: "lg",
                                    mx: "16.5px",
                                    my: "10px",
                                    d: "flex",
                                    alignItems: "center",
                                    _hover: {
                                        textDecor: "none",
                                        opacity: .75
                                    },
                                    sx: {
                                        "&.active": {
                                            fontWeight: "700",
                                            borderBottom: "2px solid",
                                            borderBottomColor: "white",
                                            paddingBottom: 2,
                                            width: "20%"
                                        }
                                    },
                                    onClick: function() {
                                        return (0, l.I)({
                                            action: "Nav " + e
                                        })
                                    },
                                    children: e
                                }, e)
                            })), (0, Ae.tZ)(a.rU, {
                                as: c.Link,
                                to: T.Z.contactSales,
                                onClick: function() {
                                    return (0, l.I)({
                                        category: "Global Nav",
                                        action: "Nav Contact Sales"
                                    })
                                },
                                size: "md",
                                fontSize: "lg",
                                colorScheme: "blue",
                                mx: "16.5px",
                                my: "10px",
                                lineHeight: "shorter",
                                whiteSpace: "nowrap",
                                activeClassName: "active",
                                sx: {
                                    "&.active": {
                                        fontWeight: "700",
                                        borderBottom: "2px solid",
                                        borderBottomColor: "white",
                                        paddingBottom: 2,
                                        width: "20%"
                                    }
                                },
                                children: "Talk to Sales"
                            }), (0, Ae.tZ)(a.rU, {
                                color: "white",
                                href: T.Z.getStarted,
                                size: "md",
                                fontSize: "lg",
                                colorScheme: "blue",
                                mx: "16.5px",
                                my: "10px",
                                _hover: {
                                    textDecor: "none",
                                    opacity: .75
                                },
                                children: "Get Started"
                            }), (0, Ae.tZ)(a.rU, {
                                color: "white",
                                mx: "16.5px",
                                my: "10px",
                                href: T.Z.login,
                                size: "md",
                                fontSize: "lg",
                                variant: "ghost",
                                _hover: {
                                    textDecor: "none",
                                    opacity: .75
                                },
                                children: "Log In"
                            })]
                        })
                    })]
                })
            }
        },
        75868: function(t, e, n) {
            "use strict";
            n.d(e, {
                AK: function() {
                    return v
                },
                L: function() {
                    return d
                },
                YD: function() {
                    return l
                },
                ee: function() {
                    return p
                },
                lV: function() {
                    return i
                },
                m4: function() {
                    return f
                }
            });
            var r = n(68253),
                o = n.n(r);

            function i(t) {
                return "string" != typeof t ? "undef" : o()(t, {
                    lower: !0,
                    strict: !0
                })
            }
            var a, s, u, c, l = (a = function(t) {
                return Promise.resolve(t)
            }, s = 200, u = null, c = [], function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return clearTimeout(u), u = setTimeout((function() {
                    c.forEach((function(t) {
                        return t(a.apply(void 0, e))
                    })), c = []
                }), s), new Promise((function(t) {
                    c.push(t)
                }))
            });
            var f = function(t) {
                    if ("undefined" != typeof window) return "https://www.facebook.com/sharer/sharer.php?u=https://bitwarden.com" + t
                },
                d = function(t) {
                    if ("undefined" != typeof window) return "https://twitter.com/share?url=https://bitwarden.com" + t
                },
                p = function(t) {
                    if ("undefined" != typeof window) return "https://www.linkedin.com/sharing/share-offsite/?url=https://bitwarden.com" + t
                },
                v = function(t, e) {
                    if ("undefined" != typeof window) return "mailto:?subject=" + e + "&body=https://bitwarden.com" + t
                }
        },
        9842: function(t, e, n) {
            var r = n(67294);

            function o(t) {
                return r.createElement("svg", t, r.createElement("path", {
                    d: "M35.842 30.292l-13.642-13.658c-0.187-0.188-0.293-0.442-0.293-0.707s0.105-0.519 0.293-0.707l13.474-13.498c0.182-0.189 0.283-0.441 0.281-0.703s-0.108-0.513-0.293-0.698-0.436-0.291-0.698-0.293c-0.262-0.002-0.515 0.099-0.703 0.281l-13.476 13.492c-0.187 0.187-0.442 0.293-0.707 0.293s-0.519-0.105-0.707-0.293l-13.518-13.506c-0.092-0.096-0.203-0.172-0.325-0.224s-0.253-0.080-0.386-0.081c-0.133-0.001-0.264 0.024-0.387 0.074s-0.235 0.125-0.328 0.218c-0.094 0.094-0.168 0.206-0.218 0.328s-0.076 0.255-0.074 0.387c0.001 0.133 0.029 0.264 0.081 0.386s0.129 0.232 0.224 0.325l13.518 13.512c0.187 0.188 0.293 0.442 0.293 0.707s-0.105 0.519-0.293 0.707l-13.664 13.658c-0.093 0.093-0.166 0.203-0.217 0.325s-0.076 0.252-0.076 0.383c0 0.265 0.106 0.52 0.294 0.707s0.442 0.293 0.708 0.293c0.265-0 0.52-0.106 0.707-0.294l13.662-13.658c0.188-0.187 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l13.644 13.658c0.092 0.096 0.203 0.172 0.325 0.224s0.253 0.080 0.386 0.081 0.265-0.024 0.387-0.074c0.123-0.050 0.235-0.125 0.328-0.218s0.168-0.206 0.218-0.328c0.050-0.123 0.076-0.255 0.075-0.387s-0.029-0.264-0.081-0.386-0.129-0.232-0.224-0.325v0z"
                }))
            }
            o.defaultProps = {
                version: "1.1",
                viewBox: "0 0 40 32"
            }, t.exports = o, o.default = o
        },
        20961: function(t, e, n) {
            var r = n(67294);

            function o(t) {
                return r.createElement("svg", t, r.createElement("path", {
                    d: "M3.792 10.206c7.821 0 16.072 0 24.211 0 0.076 0.004 0.153-0.007 0.224-0.034s0.137-0.068 0.192-0.121c0.055-0.053 0.1-0.117 0.13-0.188s0.046-0.147 0.046-0.224-0.016-0.154-0.046-0.224c-0.030-0.071-0.074-0.134-0.13-0.188s-0.121-0.094-0.192-0.121c-0.071-0.026-0.148-0.038-0.224-0.034-8.398 0-16.677 0-24.211 0-0.076-0.004-0.153 0.007-0.224 0.034s-0.137 0.068-0.192 0.121c-0.055 0.053-0.1 0.117-0.13 0.188s-0.046 0.147-0.046 0.224 0.016 0.154 0.046 0.224c0.030 0.070 0.074 0.134 0.13 0.188s0.121 0.094 0.192 0.121c0.071 0.026 0.148 0.038 0.224 0.034zM28.005 15.436c-7.994 0-15.879 0-24.213 0-0.076-0.004-0.153 0.007-0.224 0.034s-0.137 0.068-0.192 0.121c-0.055 0.053-0.1 0.117-0.13 0.188s-0.046 0.147-0.046 0.224 0.016 0.154 0.046 0.224c0.030 0.070 0.074 0.134 0.13 0.188s0.121 0.094 0.192 0.121c0.071 0.026 0.148 0.038 0.224 0.034 8.353 0 16.318 0 24.213 0 0.076 0.004 0.153-0.007 0.224-0.034s0.137-0.068 0.192-0.121c0.055-0.053 0.1-0.117 0.13-0.188s0.046-0.147 0.046-0.224-0.016-0.154-0.046-0.224c-0.030-0.071-0.074-0.134-0.13-0.188s-0.121-0.094-0.192-0.121c-0.071-0.026-0.148-0.038-0.224-0.034zM28.010 21.889c-8.748-0.057-15.799-0.105-24.215-0.16-0.149 0-0.292 0.060-0.398 0.166s-0.165 0.251-0.165 0.402 0.059 0.295 0.165 0.402c0.105 0.106 0.249 0.166 0.398 0.166 8.563 0.056 15.49 0.102 24.215 0.16 0.149 0 0.292-0.060 0.398-0.166s0.165-0.251 0.165-0.402c0-0.15-0.059-0.295-0.165-0.402s-0.249-0.166-0.398-0.166z"
                }))
            }
            o.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, t.exports = o, o.default = o
        },
        78858: function(t, e, n) {
            var r = n(67294);

            function o(t) {
                return r.createElement("svg", t, r.createElement("path", {
                    d: "M35.032 25.036l-5.644-5.66c-0.282-0.273-0.481-0.621-0.573-1.002s-0.076-0.782 0.049-1.154c0.847-2.408 0.954-5.013 0.309-7.483s-2.014-4.689-3.93-6.375-4.293-2.76-6.824-3.085c-2.531-0.325-5.102 0.114-7.382 1.261s-4.165 2.949-5.413 5.175c-1.248 2.226-1.802 4.775-1.591 7.318s1.178 4.966 2.775 6.956c1.598 1.99 3.754 3.457 6.192 4.212 2.682 0.836 5.565 0.762 8.2-0.212 0.373-0.129 0.776-0.149 1.16-0.056s0.734 0.292 1.008 0.576l5.6 5.622c0.307 0.307 0.671 0.55 1.071 0.716s0.83 0.252 1.264 0.252c0.434 0 0.863-0.085 1.264-0.252s0.765-0.41 1.071-0.716l1.4-1.4c0.62-0.621 0.968-1.463 0.968-2.341s-0.348-1.72-0.968-2.341l-0.006-0.012zM6.52 15.834c-0.511-1.829-0.528-3.761-0.047-5.599s1.441-3.514 2.782-4.859c1.341-1.345 3.016-2.309 4.852-2.794s3.769-0.474 5.599 0.033c1.769 0.484 3.381 1.421 4.677 2.719s2.23 2.911 2.711 4.681c0.511 1.829 0.528 3.761 0.047 5.599s-1.441 3.514-2.782 4.859c-1.341 1.345-3.016 2.309-4.852 2.794s-3.769 0.474-5.599-0.033c-1.769-0.484-3.381-1.421-4.677-2.719s-2.23-2.911-2.711-4.681zM33.52 28.204l-1.4 1.4c-0.108 0.109-0.236 0.195-0.378 0.254s-0.294 0.089-0.447 0.089c-0.153 0-0.305-0.030-0.447-0.089s-0.27-0.145-0.378-0.254l-5.548-5.562c-0.084-0.086-0.15-0.189-0.192-0.302s-0.060-0.233-0.052-0.354c0.007-0.12 0.040-0.238 0.096-0.345s0.134-0.201 0.228-0.276c0.613-0.514 1.177-1.084 1.684-1.702 0.074-0.095 0.168-0.174 0.275-0.231s0.224-0.090 0.345-0.098c0.121-0.008 0.242 0.009 0.355 0.051s0.217 0.107 0.303 0.192l5.556 5.568c0.218 0.221 0.34 0.518 0.34 0.828s-0.122 0.608-0.34 0.828v0.002z"
                }))
            }
            o.defaultProps = {
                version: "1.1",
                viewBox: "0 0 40 32"
            }, t.exports = o, o.default = o
        },
        57229: function(t, e, n) {
            var r = n(67294);

            function o(t) {
                return r.createElement("svg", t, r.createElement("path", {
                    d: "M26.55 14.932l-3.746-4c-0.189-0.183-0.442-0.287-0.705-0.289s-0.518 0.096-0.711 0.276c-0.193 0.18-0.309 0.427-0.325 0.69s0.069 0.522 0.239 0.724l2.098 2.238c0 0 0.27 0.3-0.068 0.41l-15.302-0.056c-0.265 0.012-0.515 0.125-0.699 0.317s-0.286 0.447-0.286 0.712c0 0.265 0.102 0.52 0.286 0.712s0.434 0.305 0.699 0.317l15.416 0.050c0.031 0.005 0.059 0.017 0.084 0.036s0.044 0.043 0.057 0.072c0.013 0.028 0.018 0.059 0.016 0.090s-0.012 0.061-0.029 0.087v0l-2.464 2.306c-0.183 0.189-0.287 0.442-0.289 0.705s0.096 0.518 0.276 0.711c0.18 0.193 0.427 0.309 0.69 0.325s0.522-0.070 0.724-0.239l3.954-3.7c0.341-0.32 0.541-0.761 0.557-1.228s-0.153-0.921-0.471-1.264v0zM30.814 32h-15.242c-0.265 0-0.52-0.105-0.707-0.293s-0.293-0.442-0.293-0.707 0.105-0.52 0.293-0.707c0.188-0.187 0.442-0.293 0.707-0.293h15.242c0.093-0.327 0.152-0.662 0.178-1v-26c0.030-0.372-0.079-0.742-0.306-1.038l-15.202 0.038c-0.265 0-0.52-0.105-0.707-0.293s-0.293-0.442-0.293-0.707c0-0.265 0.105-0.52 0.293-0.707s0.442-0.293 0.707-0.293h15.33c1.246 0 2.186 1.292 2.186 3v26c0 1.708-0.94 3-2.186 3z"
                }))
            }
            o.defaultProps = {
                version: "1.1",
                viewBox: "0 0 40 32"
            }, t.exports = o, o.default = o
        },
        90808: function(t, e, n) {
            var r = n(67294);

            function o(t) {
                return r.createElement("svg", t, r.createElement("path", {
                    d: "M179.304 2.68965C177.498 0.887307 175.358 0 172.913 0H9.08608C6.61311 0 4.50136 0.887307 2.69526 2.68965C0.889156 4.49199 0 6.62707 0 9.06716V118.067C0 126.192 1.58381 134.261 4.75144 142.274C7.91906 150.26 11.8647 157.358 16.5606 163.569C21.2564 169.753 26.8414 175.798 33.3434 181.676C39.8454 187.554 45.8472 192.407 51.3211 196.289C56.8227 200.171 62.5467 203.831 68.5207 207.297C74.4947 210.763 78.746 213.092 81.2467 214.312C83.7475 215.532 85.7759 216.503 87.2763 217.14C88.4156 217.695 89.6382 218 90.9719 218C92.3056 218 93.5282 217.723 94.6675 217.14C96.1957 216.475 98.1963 215.532 100.725 214.312C103.226 213.092 107.477 210.735 113.451 207.297C119.425 203.831 125.149 200.171 130.651 196.289C136.152 192.407 142.154 187.527 148.656 181.676C155.158 175.798 160.743 169.78 165.439 163.569C170.135 157.358 174.053 150.287 177.248 142.274C180.416 134.288 181.999 126.219 181.999 118.067V9.09489C182.027 6.62707 181.11 4.49199 179.304 2.68965ZM158.187 119.093C158.187 158.551 90.9997 192.545 90.9997 192.545V23.3472H158.187C158.187 23.3472 158.187 79.6357 158.187 119.093Z"
                }))
            }
            o.defaultProps = {
                viewBox: "0 0 182 218",
                stroke: "currentColor"
            }, t.exports = o, o.default = o
        },
        4942: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        70885: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(40181);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (u) {
                            s = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || (0, r.Z)(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);
//# sourceMappingURL=342e1947d2f4b0a8f3aa3bf8857dff70e5e98989-3a023307e5dd4a0f5888.js.map