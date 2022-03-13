"use strict";
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [9351], {
        31421: function(e, r, t) {
            t.d(r, {
                JO: function() {
                    return c
                },
                ZP: function() {
                    return m
                }
            });
            var a = t(45082),
                n = t(68316),
                i = t(67294);

            function o() {
                return o = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }, o.apply(this, arguments)
            }
            var s = ["as", "viewBox", "color", "focusable", "children", "className", "__css"],
                l = {
                    path: i.createElement("g", {
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, i.createElement("path", {
                        strokeLinecap: "round",
                        fill: "none",
                        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
                    }), i.createElement("path", {
                        fill: "currentColor",
                        strokeLinecap: "round",
                        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
                    }), i.createElement("circle", {
                        fill: "none",
                        strokeMiterlimit: "10",
                        cx: "12",
                        cy: "12",
                        r: "11.25"
                    })),
                    viewBox: "0 0 24 24"
                },
                c = (0, a.Gp)((function(e, r) {
                    var t = e.as,
                        c = e.viewBox,
                        m = e.color,
                        u = void 0 === m ? "currentColor" : m,
                        d = e.focusable,
                        p = void 0 !== d && d,
                        f = e.children,
                        v = e.className,
                        g = e.__css,
                        h = function(e, r) {
                            if (null == e) return {};
                            var t, a, n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) t = i[a], r.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n
                        }(e, s),
                        y = {
                            ref: r,
                            focusable: p,
                            className: (0, n.cx)("chakra-icon", v),
                            __css: o({
                                w: "1em",
                                h: "1em",
                                display: "inline-block",
                                lineHeight: "1em",
                                flexShrink: 0,
                                color: u
                            }, g)
                        },
                        x = null != c ? c : l.viewBox;
                    if (t && "string" != typeof t) return i.createElement(a.m$.svg, o({
                        as: t
                    }, y, h));
                    var N = null != f ? f : l.path;
                    return i.createElement(a.m$.svg, o({
                        verticalAlign: "middle",
                        viewBox: x
                    }, y, h), N)
                }));
            n.Ts && (c.displayName = "Icon");
            var m = c
        },
        3013: function(e, r, t) {
            t.d(r, {
                AB: function() {
                    return ve
                },
                Ct: function() {
                    return f
                },
                DE: function() {
                    return V
                },
                EK: function() {
                    return b
                },
                GS: function() {
                    return K
                },
                HC: function() {
                    return Y
                },
                Kq: function() {
                    return ne
                },
                MI: function() {
                    return Z
                },
                P4: function() {
                    return B
                },
                QI: function() {
                    return U
                },
                W2: function() {
                    return k
                },
                X6: function() {
                    return R
                },
                aV: function() {
                    return H
                },
                fG: function() {
                    return ge
                },
                gC: function() {
                    return oe
                },
                iz: function() {
                    return T
                },
                kC: function() {
                    return S
                },
                oM: function() {
                    return d
                },
                rU: function() {
                    return q
                },
                rj: function() {
                    return $
                },
                xu: function() {
                    return h
                },
                xv: function() {
                    return le
                }
            });
            var a = t(45082),
                n = t(43944),
                i = t(68316),
                o = t(67294),
                s = t(31421),
                l = t(67044);

            function c() {
                return c = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function m(e, r) {
                if (null == e) return {};
                var t, a, n = {},
                    i = Object.keys(e);
                for (a = 0; a < i.length; a++) t = i[a], r.indexOf(t) >= 0 || (n[t] = e[t]);
                return n
            }
            var u = ["ratio", "children", "className"],
                d = (0, a.Gp)((function(e, r) {
                    var t = e.ratio,
                        n = void 0 === t ? 4 / 3 : t,
                        s = e.children,
                        l = e.className,
                        d = m(e, u),
                        p = o.Children.only(s),
                        f = (0, i.cx)("chakra-aspect-ratio", l);
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        position: "relative",
                        className: f,
                        _before: {
                            height: 0,
                            content: '""',
                            display: "block",
                            paddingBottom: (0, i.XQ)(n, (function(e) {
                                return 1 / e * 100 + "%"
                            }))
                        },
                        __css: {
                            "& > *:not(style)": {
                                overflow: "hidden",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100%"
                            },
                            "& > img, & > video": {
                                objectFit: "cover"
                            }
                        }
                    }, d), p)
                }));
            i.Ts && (d.displayName = "AspectRatio");
            var p = ["className"],
                f = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Badge", e),
                        n = (0, a.Lr)(e);
                    n.className;
                    var s = m(n, p);
                    return o.createElement(a.m$.span, c({
                        ref: r,
                        className: (0, i.cx)("chakra-badge", e.className)
                    }, s, {
                        __css: c({
                            display: "inline-block",
                            whiteSpace: "nowrap",
                            verticalAlign: "middle"
                        }, t)
                    }))
                }));
            i.Ts && (f.displayName = "Badge");
            var v = ["size", "centerContent"],
                g = ["size"],
                h = (0, a.m$)("div");
            i.Ts && (h.displayName = "Box");
            var y = (0, a.Gp)((function(e, r) {
                var t = e.size,
                    a = e.centerContent,
                    n = void 0 === a || a,
                    i = m(e, v),
                    s = n ? {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    } : {};
                return o.createElement(h, c({
                    ref: r,
                    boxSize: t,
                    __css: c({}, s, {
                        flexShrink: 0,
                        flexGrow: 0
                    })
                }, i))
            }));
            i.Ts && (y.displayName = "Square");
            var x = (0, a.Gp)((function(e, r) {
                var t = e.size,
                    a = m(e, g);
                return o.createElement(y, c({
                    size: t,
                    ref: r,
                    borderRadius: "9999px"
                }, a))
            }));
            i.Ts && (x.displayName = "Circle");
            var N = (0, a.m$)("div", {
                baseStyle: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            });
            i.Ts && (N.displayName = "Center");
            var _ = ["className"],
                b = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Code", e),
                        n = (0, a.Lr)(e);
                    n.className;
                    var s = m(n, _);
                    return o.createElement(a.m$.code, c({
                        ref: r,
                        className: (0, i.cx)("chakra-code", e.className)
                    }, s, {
                        __css: c({
                            display: "inline-block"
                        }, t)
                    }))
                }));
            i.Ts && (b.displayName = "Code");
            var w = ["className", "centerContent"],
                k = (0, a.Gp)((function(e, r) {
                    var t = (0, a.Lr)(e),
                        n = t.className,
                        s = t.centerContent,
                        l = m(t, w),
                        u = (0, a.mq)("Container", e);
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        className: (0, i.cx)("chakra-container", n)
                    }, l, {
                        __css: c({}, u, s && {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        })
                    }))
                }));
            i.Ts && (k.displayName = "Container");
            var E = ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"],
                C = ["className", "orientation", "__css"],
                T = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Divider", e),
                        n = t.borderLeftWidth,
                        s = t.borderBottomWidth,
                        l = t.borderTopWidth,
                        u = t.borderRightWidth,
                        d = t.borderWidth,
                        p = t.borderStyle,
                        f = t.borderColor,
                        v = m(t, E),
                        g = (0, a.Lr)(e),
                        h = g.className,
                        y = g.orientation,
                        x = void 0 === y ? "horizontal" : y,
                        N = g.__css,
                        _ = m(g, C),
                        b = {
                            vertical: {
                                borderLeftWidth: n || u || d || "1px",
                                height: "100%"
                            },
                            horizontal: {
                                borderBottomWidth: s || l || d || "1px",
                                width: "100%"
                            }
                        };
                    return o.createElement(a.m$.hr, c({
                        ref: r,
                        "aria-orientation": x
                    }, _, {
                        __css: c({}, v, {
                            border: "0",
                            borderColor: f,
                            borderStyle: p
                        }, b[x], N),
                        className: (0, i.cx)("chakra-divider", h)
                    }))
                }));
            i.Ts && (T.displayName = "Divider");
            var G = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"],
                S = (0, a.Gp)((function(e, r) {
                    var t = e.direction,
                        n = e.align,
                        i = e.justify,
                        s = e.wrap,
                        l = e.basis,
                        u = e.grow,
                        d = e.shrink,
                        p = m(e, G),
                        f = {
                            display: "flex",
                            flexDirection: t,
                            alignItems: n,
                            justifyContent: i,
                            flexWrap: s,
                            flexBasis: l,
                            flexGrow: u,
                            flexShrink: d
                        };
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        __css: f
                    }, p))
                }));
            i.Ts && (S.displayName = "Flex");
            var W = ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"],
                L = ["area", "colSpan", "colStart", "colEnd", "rowEnd", "rowSpan", "rowStart"],
                $ = (0, a.Gp)((function(e, r) {
                    var t = e.area,
                        n = e.templateAreas,
                        i = e.gap,
                        s = e.rowGap,
                        l = e.columnGap,
                        u = e.column,
                        d = e.row,
                        p = e.autoFlow,
                        f = e.autoRows,
                        v = e.templateRows,
                        g = e.autoColumns,
                        h = e.templateColumns,
                        y = m(e, W),
                        x = {
                            display: "grid",
                            gridArea: t,
                            gridTemplateAreas: n,
                            gridGap: i,
                            gridRowGap: s,
                            gridColumnGap: l,
                            gridAutoColumns: g,
                            gridColumn: u,
                            gridRow: d,
                            gridAutoFlow: p,
                            gridAutoRows: f,
                            gridTemplateRows: v,
                            gridTemplateColumns: h
                        };
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        __css: x
                    }, y))
                }));

            function j(e) {
                return (0, i.XQ)(e, (function(e) {
                    return "auto" === e ? "auto" : "span " + e + "/span " + e
                }))
            }
            i.Ts && ($.displayName = "Grid");
            var B = (0, a.Gp)((function(e, r) {
                    var t = e.area,
                        n = e.colSpan,
                        s = e.colStart,
                        l = e.colEnd,
                        u = e.rowEnd,
                        d = e.rowSpan,
                        p = e.rowStart,
                        f = m(e, L),
                        v = (0, i.YU)({
                            gridArea: t,
                            gridColumn: j(n),
                            gridRow: j(d),
                            gridColumnStart: s,
                            gridColumnEnd: l,
                            gridRowStart: p,
                            gridRowEnd: u
                        });
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        __css: v
                    }, f))
                })),
                I = ["className"],
                R = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Heading", e),
                        n = (0, a.Lr)(e);
                    n.className;
                    var s = m(n, I);
                    return o.createElement(a.m$.h2, c({
                        ref: r,
                        className: (0, i.cx)("chakra-heading", e.className)
                    }, s, {
                        __css: t
                    }))
                }));
            i.Ts && (R.displayName = "Heading");
            var A = ["className"],
                O = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Kbd", e),
                        n = (0, a.Lr)(e),
                        s = n.className,
                        l = m(n, A);
                    return o.createElement(a.m$.kbd, c({
                        ref: r,
                        className: (0, i.cx)("chakra-kbd", s)
                    }, l, {
                        __css: c({
                            fontFamily: "mono"
                        }, t)
                    }))
                }));
            i.Ts && (O.displayName = "Kbd");
            var z = ["className", "isExternal"],
                q = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Link", e),
                        n = (0, a.Lr)(e),
                        s = n.className,
                        l = n.isExternal,
                        u = m(n, z);
                    return o.createElement(a.m$.a, c({
                        target: l ? "_blank" : void 0,
                        rel: l ? "noopener noreferrer" : void 0,
                        ref: r,
                        className: (0, i.cx)("chakra-link", s)
                    }, u, {
                        __css: t
                    }))
                }));
            i.Ts && (q.displayName = "Link");
            var D = ["children", "styleType", "stylePosition", "spacing"],
                X = ["as"],
                F = ["as"],
                M = (0, l.kr)({
                    name: "StylesContext",
                    errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "
                }),
                Q = M[0],
                P = M[1],
                H = (0, a.Gp)((function(e, r) {
                    var t, n = (0, a.jC)("List", e),
                        i = (0, a.Lr)(e),
                        s = i.children,
                        u = i.styleType,
                        d = void 0 === u ? "none" : u,
                        p = i.stylePosition,
                        f = i.spacing,
                        v = m(i, D),
                        g = (0, l.WR)(s),
                        h = f ? ((t = {})["& > *:not(style) ~ *:not(style)"] = {
                            mt: f
                        }, t) : {};
                    return o.createElement(Q, {
                        value: n
                    }, o.createElement(a.m$.ul, c({
                        ref: r,
                        listStyleType: d,
                        listStylePosition: p,
                        role: "list",
                        __css: c({}, n.container, h)
                    }, v), g))
                }));
            i.Ts && (H.displayName = "List");
            var K = (0, a.Gp)((function(e, r) {
                e.as;
                var t = m(e, X);
                return o.createElement(H, c({
                    ref: r,
                    as: "ol",
                    styleType: "decimal",
                    marginStart: "1em"
                }, t))
            }));
            i.Ts && (K.displayName = "OrderedList");
            var U = (0, a.Gp)((function(e, r) {
                e.as;
                var t = m(e, F);
                return o.createElement(H, c({
                    ref: r,
                    as: "ul",
                    styleType: "initial",
                    marginStart: "1em"
                }, t))
            }));
            i.Ts && (U.displayName = "UnorderedList");
            var Y = (0, a.Gp)((function(e, r) {
                var t = P();
                return o.createElement(a.m$.li, c({
                    ref: r
                }, e, {
                    __css: t.item
                }))
            }));
            i.Ts && (Y.displayName = "ListItem");
            var V = (0, a.Gp)((function(e, r) {
                var t = P();
                return o.createElement(s.JO, c({
                    ref: r,
                    role: "presentation"
                }, e, {
                    __css: t.icon
                }))
            }));
            i.Ts && (V.displayName = "ListIcon");
            var J = ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"],
                Z = (0, a.Gp)((function(e, r) {
                    var t, a, n = e.columns,
                        s = e.spacingX,
                        l = e.spacingY,
                        u = e.spacing,
                        d = e.minChildWidth,
                        p = m(e, J),
                        f = d ? (a = d, (0, i.XQ)(a, (function(e) {
                            return (0, i.Ft)(e) ? null : "repeat(auto-fit, minmax(" + (r = e, ((0, i.hj)(r) ? r + "px" : r) + ", 1fr))");
                            var r
                        }))) : (t = n, (0, i.XQ)(t, (function(e) {
                            return (0, i.Ft)(e) ? null : "repeat(" + e + ", minmax(0, 1fr))"
                        })));
                    return o.createElement($, c({
                        ref: r,
                        gap: u,
                        columnGap: s,
                        rowGap: l,
                        templateColumns: f
                    }, p))
                }));
            i.Ts && (Z.displayName = "SimpleGrid");
            var ee = (0, a.m$)("div", {
                baseStyle: {
                    flex: 1,
                    justifySelf: "stretch",
                    alignSelf: "stretch"
                }
            });
            i.Ts && (ee.displayName = "Spacer");
            var re = "& > *:not(style) ~ *:not(style)";
            var te = ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"],
                ae = function(e) {
                    return o.createElement(a.m$.div, c({
                        className: "chakra-stack__item"
                    }, e, {
                        __css: c({
                            display: "inline-block",
                            flex: "0 0 auto",
                            minWidth: 0
                        }, e.__css)
                    }))
                },
                ne = (0, a.Gp)((function(e, r) {
                    var t, n = e.isInline,
                        s = e.direction,
                        u = e.align,
                        d = e.justify,
                        p = e.spacing,
                        f = void 0 === p ? "0.5rem" : p,
                        v = e.wrap,
                        g = e.children,
                        h = e.divider,
                        y = e.className,
                        x = e.shouldWrapChildren,
                        N = m(e, te),
                        _ = n ? "row" : null != s ? s : "column",
                        b = o.useMemo((function() {
                            return function(e) {
                                var r, t = e.spacing,
                                    a = e.direction,
                                    n = {
                                        column: {
                                            marginTop: t,
                                            marginEnd: 0,
                                            marginBottom: 0,
                                            marginStart: 0
                                        },
                                        row: {
                                            marginTop: 0,
                                            marginEnd: 0,
                                            marginBottom: 0,
                                            marginStart: t
                                        },
                                        "column-reverse": {
                                            marginTop: 0,
                                            marginEnd: 0,
                                            marginBottom: t,
                                            marginStart: 0
                                        },
                                        "row-reverse": {
                                            marginTop: 0,
                                            marginEnd: t,
                                            marginBottom: 0,
                                            marginStart: 0
                                        }
                                    };
                                return (r = {
                                    flexDirection: a
                                })[re] = (0, i.XQ)(a, (function(e) {
                                    return n[e]
                                })), r
                            }({
                                direction: _,
                                spacing: f
                            })
                        }), [_, f]),
                        w = o.useMemo((function() {
                            return function(e) {
                                var r = e.spacing,
                                    t = e.direction,
                                    a = {
                                        column: {
                                            my: r,
                                            mx: 0,
                                            borderLeftWidth: 0,
                                            borderBottomWidth: "1px"
                                        },
                                        "column-reverse": {
                                            my: r,
                                            mx: 0,
                                            borderLeftWidth: 0,
                                            borderBottomWidth: "1px"
                                        },
                                        row: {
                                            mx: r,
                                            my: 0,
                                            borderLeftWidth: "1px",
                                            borderBottomWidth: 0
                                        },
                                        "row-reverse": {
                                            mx: r,
                                            my: 0,
                                            borderLeftWidth: "1px",
                                            borderBottomWidth: 0
                                        }
                                    };
                                return {
                                    "&": (0, i.XQ)(t, (function(e) {
                                        return a[e]
                                    }))
                                }
                            }({
                                spacing: f,
                                direction: _
                            })
                        }), [f, _]),
                        k = !!h,
                        E = !x && !k,
                        C = (0, l.WR)(g),
                        T = E ? C : C.map((function(e, r) {
                            var t = void 0 !== e.key ? e.key : r,
                                a = r + 1 === C.length,
                                n = x ? o.createElement(ae, {
                                    key: t
                                }, e) : e;
                            if (!k) return n;
                            var i = a ? null : o.cloneElement(h, {
                                __css: w
                            });
                            return o.createElement(o.Fragment, {
                                key: t
                            }, n, i)
                        })),
                        G = (0, i.cx)("chakra-stack", y);
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        display: "flex",
                        alignItems: u,
                        justifyContent: d,
                        flexDirection: b.flexDirection,
                        flexWrap: v,
                        className: G,
                        __css: k ? {} : (t = {}, t[re] = b[re], t)
                    }, N), T)
                }));
            i.Ts && (ne.displayName = "Stack");
            var ie = (0, a.Gp)((function(e, r) {
                return o.createElement(ne, c({
                    align: "center"
                }, e, {
                    direction: "row",
                    ref: r
                }))
            }));
            i.Ts && (ie.displayName = "HStack");
            var oe = (0, a.Gp)((function(e, r) {
                return o.createElement(ne, c({
                    align: "center"
                }, e, {
                    direction: "column",
                    ref: r
                }))
            }));
            i.Ts && (oe.displayName = "VStack");
            var se = ["className", "align", "decoration", "casing"],
                le = (0, a.Gp)((function(e, r) {
                    var t = (0, a.mq)("Text", e),
                        n = (0, a.Lr)(e);
                    n.className, n.align, n.decoration, n.casing;
                    var s = m(n, se),
                        l = (0, i.YU)({
                            textAlign: e.align,
                            textDecoration: e.decoration,
                            textTransform: e.casing
                        });
                    return o.createElement(a.m$.p, c({
                        ref: r,
                        className: (0, i.cx)("chakra-text", e.className)
                    }, l, s, {
                        __css: t
                    }))
                }));
            i.Ts && (le.displayName = "Text");
            var ce = ["spacing", "children", "justify", "direction", "align", "className", "shouldWrapChildren"],
                me = ["className"],
                ue = (0, a.Gp)((function(e, r) {
                    var t = e.spacing,
                        s = void 0 === t ? "0.5rem" : t,
                        l = e.children,
                        u = e.justify,
                        d = e.direction,
                        p = e.align,
                        f = e.className,
                        v = e.shouldWrapChildren,
                        g = m(e, ce),
                        h = o.useMemo((function() {
                            return {
                                "--chakra-wrap-spacing": function(e) {
                                    return (0, i.XQ)(s, (function(r) {
                                        return (0, n.fr)("space", r)(e)
                                    }))
                                },
                                "--wrap-spacing": "calc(var(--chakra-wrap-spacing) / 2)",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: u,
                                alignItems: p,
                                flexDirection: d,
                                listStyleType: "none",
                                padding: "0",
                                margin: "calc(var(--wrap-spacing) * -1)",
                                "& > *:not(style)": {
                                    margin: "var(--wrap-spacing)"
                                }
                            }
                        }), [s, u, p, d]),
                        y = v ? o.Children.map(l, (function(e, r) {
                            return o.createElement(de, {
                                key: r
                            }, e)
                        })) : l;
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        className: (0, i.cx)("chakra-wrap", f)
                    }, g), o.createElement(a.m$.ul, {
                        className: "chakra-wrap__list",
                        __css: h
                    }, y))
                }));
            i.Ts && (ue.displayName = "Wrap");
            var de = (0, a.Gp)((function(e, r) {
                var t = e.className,
                    n = m(e, me);
                return o.createElement(a.m$.li, c({
                    ref: r,
                    __css: {
                        display: "flex",
                        alignItems: "flex-start"
                    },
                    className: (0, i.cx)("chakra-wrap__listitem", t)
                }, n))
            }));
            i.Ts && (de.displayName = "WrapItem");
            var pe = ["isExternal", "target", "rel", "className"],
                fe = ["className"],
                ve = (0, a.Gp)((function(e, r) {
                    var t = e.isExternal,
                        n = e.target,
                        s = e.rel,
                        l = e.className,
                        u = m(e, pe);
                    return o.createElement(a.m$.a, c({}, u, {
                        ref: r,
                        className: (0, i.cx)("chakra-linkbox__overlay", l),
                        rel: t ? "noopener noreferrer" : s,
                        target: t ? "_blank" : n,
                        __css: {
                            position: "static",
                            "&::before": {
                                content: "''",
                                cursor: "inherit",
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                width: "100%",
                                height: "100%"
                            }
                        }
                    }))
                })),
                ge = (0, a.Gp)((function(e, r) {
                    var t = e.className,
                        n = m(e, fe);
                    return o.createElement(a.m$.div, c({
                        ref: r,
                        position: "relative"
                    }, n, {
                        className: (0, i.cx)("chakra-linkbox", t),
                        __css: {
                            "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
                                position: "relative",
                                zIndex: 1
                            }
                        }
                    }))
                }))
        }
    }
]);
//# sourceMappingURL=commons-cd0fba841dba151aa7d7.js.map