(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [6589], {
        16985: function(e, t, n) {
            "use strict";
            n.d(t, {
                hE: function() {
                    return v
                },
                hU: function() {
                    return x
                },
                zx: function() {
                    return S
                }
            });
            var r = n(95422),
                a = n(45082),
                i = n(68316),
                o = n(19189),
                s = n.n(o),
                l = n(67294),
                c = n(67044),
                u = n(98745);

            function d(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function C() {
                return C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, C.apply(this, arguments)
            }
            var p = ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"],
                m = (0, c.kr)({
                    strict: !1,
                    name: "ButtonGroupContext"
                }),
                f = m[0],
                g = m[1],
                v = (0, a.Gp)((function(e, t) {
                    var n = e.size,
                        r = e.colorScheme,
                        o = e.variant,
                        s = e.className,
                        c = e.spacing,
                        u = void 0 === c ? "0.5rem" : c,
                        m = e.isAttached,
                        g = e.isDisabled,
                        v = d(e, p),
                        b = (0, i.cx)("chakra-button__group", s),
                        h = l.useMemo((function() {
                            return {
                                size: n,
                                colorScheme: r,
                                variant: o,
                                isDisabled: g
                            }
                        }), [n, r, o, g]),
                        y = {
                            display: "inline-flex"
                        };
                    return y = C({}, y, m ? {
                        "> *:first-of-type:not(:last-of-type)": {
                            borderEndRadius: 0
                        },
                        "> *:not(:first-of-type):not(:last-of-type)": {
                            borderRadius: 0
                        },
                        "> *:not(:first-of-type):last-of-type": {
                            borderStartRadius: 0
                        }
                    } : {
                        "& > *:not(style) ~ *:not(style)": {
                            marginStart: u
                        }
                    }), l.createElement(f, {
                        value: h
                    }, l.createElement(a.m$.div, C({
                        ref: t,
                        role: "group",
                        __css: y,
                        className: b
                    }, v)))
                }));
            i.Ts && (v.displayName = "ButtonGroup");
            var b = ["label", "placement", "spacing", "children", "className", "__css"],
                h = function(e) {
                    var t = e.label,
                        n = e.placement,
                        r = e.spacing,
                        o = void 0 === r ? "0.5rem" : r,
                        s = e.children,
                        c = void 0 === s ? l.createElement(u.$, {
                            color: "currentColor",
                            width: "1em",
                            height: "1em"
                        }) : s,
                        p = e.className,
                        m = e.__css,
                        f = d(e, b),
                        g = (0, i.cx)("chakra-button__spinner", p),
                        v = "start" === n ? "marginEnd" : "marginStart",
                        h = l.useMemo((function() {
                            var e;
                            return C(((e = {
                                display: "flex",
                                alignItems: "center",
                                position: t ? "relative" : "absolute"
                            })[v] = t ? o : 0, e.fontSize = "1em", e.lineHeight = "normal", e), m)
                        }), [m, t, v, o]);
                    return l.createElement(a.m$.div, C({
                        className: g
                    }, f, {
                        __css: h
                    }), c)
                };
            i.Ts && (h.displayName = "ButtonSpinner");
            var y = ["children", "className"],
                w = function(e) {
                    var t = e.children,
                        n = e.className,
                        r = d(e, y),
                        o = l.isValidElement(t) ? l.cloneElement(t, {
                            "aria-hidden": !0,
                            focusable: !1
                        }) : t,
                        s = (0, i.cx)("chakra-button__icon", n);
                    return l.createElement(a.m$.span, C({
                        display: "inline-flex",
                        alignSelf: "center",
                        flexShrink: 0
                    }, r, {
                        className: s
                    }), o)
                };
            i.Ts && (w.displayName = "ButtonIcon");
            var V = ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"],
                S = (0, a.Gp)((function(e, t) {
                    var n, o, c, u, p = g(),
                        m = (0, a.mq)("Button", C({}, p, e)),
                        f = (0, a.Lr)(e),
                        v = f.isDisabled,
                        b = void 0 === v ? null == p ? void 0 : p.isDisabled : v,
                        y = f.isLoading,
                        w = f.isActive,
                        S = f.isFullWidth,
                        L = f.children,
                        x = f.leftIcon,
                        E = f.rightIcon,
                        N = f.loadingText,
                        H = f.iconSpacing,
                        _ = void 0 === H ? "0.5rem" : H,
                        T = f.type,
                        M = f.spinner,
                        I = f.spinnerPlacement,
                        Z = void 0 === I ? "start" : I,
                        O = f.className,
                        B = f.as,
                        P = d(f, V),
                        A = l.useMemo((function() {
                            var e, t = s()({}, null != (e = null == m ? void 0 : m._focus) ? e : {}, {
                                zIndex: 1
                            });
                            return C({
                                display: "inline-flex",
                                appearance: "none",
                                alignItems: "center",
                                justifyContent: "center",
                                userSelect: "none",
                                position: "relative",
                                whiteSpace: "nowrap",
                                verticalAlign: "middle",
                                outline: "none",
                                width: S ? "100%" : "auto"
                            }, m, !!p && {
                                _focus: t
                            })
                        }), [m, p, S]),
                        $ = (n = B, o = l.useState(!n), c = o[0], u = o[1], {
                            ref: l.useCallback((function(e) {
                                e && u("BUTTON" === e.tagName)
                            }), []),
                            type: c ? "button" : void 0
                        }),
                        R = $.ref,
                        j = $.type,
                        D = {
                            rightIcon: E,
                            leftIcon: x,
                            iconSpacing: _,
                            children: L
                        };
                    return l.createElement(a.m$.button, C({
                        disabled: b || y,
                        ref: (0, r.qq)(t, R),
                        as: B,
                        type: null != T ? T : j,
                        "data-active": (0, i.PB)(w),
                        "data-loading": (0, i.PB)(y),
                        __css: A,
                        className: (0, i.cx)("chakra-button", O)
                    }, P), y && "start" === Z && l.createElement(h, {
                        className: "chakra-button__spinner--start",
                        label: N,
                        placement: "start",
                        spacing: _
                    }, M), y ? N || l.createElement(a.m$.span, {
                        opacity: 0
                    }, l.createElement(k, D)) : l.createElement(k, D), y && "end" === Z && l.createElement(h, {
                        className: "chakra-button__spinner--end",
                        label: N,
                        placement: "end",
                        spacing: _
                    }, M))
                }));

            function k(e) {
                var t = e.leftIcon,
                    n = e.rightIcon,
                    r = e.children,
                    a = e.iconSpacing;
                return l.createElement(l.Fragment, null, t && l.createElement(w, {
                    marginEnd: a
                }, t), r, n && l.createElement(w, {
                    marginStart: a
                }, n))
            }
            i.Ts && (S.displayName = "Button");
            var L = ["icon", "children", "isRound", "aria-label"],
                x = (0, a.Gp)((function(e, t) {
                    var n = e.icon,
                        r = e.children,
                        a = e.isRound,
                        i = e["aria-label"],
                        o = d(e, L),
                        s = n || r,
                        c = l.isValidElement(s) ? l.cloneElement(s, {
                            "aria-hidden": !0,
                            focusable: !1
                        }) : null;
                    return l.createElement(S, C({
                        padding: "0",
                        borderRadius: a ? "full" : void 0,
                        ref: t,
                        "aria-label": i
                    }, o), c)
                }));
            i.Ts && (x.displayName = "IconButton")
        },
        98745: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return d
                }
            });
            var r = n(4382),
                a = n(45082),
                i = n(68316),
                o = n(32662),
                s = n(67294);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var c = ["label", "thickness", "speed", "emptyColor", "className"],
                u = (0, r.F4)({
                    "0%": {
                        transform: "rotate(0deg)"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                }),
                d = (0, a.Gp)((function(e, t) {
                    var n = (0, a.mq)("Spinner", e),
                        r = (0, a.Lr)(e),
                        d = r.label,
                        C = void 0 === d ? "Loading..." : d,
                        p = r.thickness,
                        m = void 0 === p ? "2px" : p,
                        f = r.speed,
                        g = void 0 === f ? "0.45s" : f,
                        v = r.emptyColor,
                        b = void 0 === v ? "transparent" : v,
                        h = r.className,
                        y = function(e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(r, c),
                        w = (0, i.cx)("chakra-spinner", h),
                        V = l({
                            display: "inline-block",
                            borderColor: "currentColor",
                            borderStyle: "solid",
                            borderRadius: "99999px",
                            borderWidth: m,
                            borderBottomColor: b,
                            borderLeftColor: b,
                            animation: u + " " + g + " linear infinite"
                        }, n);
                    return s.createElement(a.m$.div, l({
                        ref: t,
                        __css: V,
                        className: w
                    }, y), C && s.createElement(o.TX, null, C))
                }));
            i.Ts && (d.displayName = "Spinner")
        },
        32662: function(e, t, n) {
            "use strict";
            n.d(t, {
                NL: function() {
                    return i
                },
                TX: function() {
                    return o
                }
            });
            var r = n(45082),
                a = n(68316),
                i = {
                    border: "0px",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    position: "absolute"
                },
                o = (0, r.m$)("span", {
                    baseStyle: i
                });
            a.Ts && (o.displayName = "VisuallyHidden");
            var s = (0, r.m$)("input", {
                baseStyle: i
            });
            a.Ts && (s.displayName = "VisuallyHiddenInput")
        },
        8409: function(e, t, n) {
            "use strict";
            var r = n(37316),
                a = ["eventCategory", "eventAction", "eventLabel", "eventValue"],
                i = n(95318);
            t.I = function(e) {
                var t = e.category,
                    n = e.action,
                    r = e.label,
                    a = e.value,
                    i = e.nonInteraction,
                    o = void 0 !== i && i,
                    s = e.transport,
                    l = e.hitCallback,
                    c = e.callbackTimeout,
                    u = void 0 === c ? 1e3 : c;
                if ("undefined" != typeof window && window.ga) {
                    var d = {
                        eventCategory: t,
                        eventAction: n,
                        eventLabel: r,
                        eventValue: a,
                        nonInteraction: o,
                        transport: s
                    };
                    l && "function" == typeof l && (d.hitCallback = function(e, t) {
                        void 0 === t && (t = 1e3);
                        var n = !1,
                            r = function() {
                                n || (n = !0, e())
                            };
                        return setTimeout(r, t), r
                    }(l, u)), window.ga("send", "event", d)
                }
            };
            var o = i(n(67154)),
                s = i(n(67294)),
                l = i(n(45697));

            function c(e) {
                var t = e.eventCategory,
                    n = e.eventAction,
                    i = e.eventLabel,
                    l = e.eventValue,
                    c = r(e, a);
                return s.default.createElement("a", (0, o.default)({}, c, {
                    onClick: function(r) {
                        "function" == typeof e.onClick && e.onClick(r);
                        var a = !0;
                        return (0 !== r.button || r.altKey || r.ctrlKey || r.metaKey || r.shiftKey || r.defaultPrevented) && (a = !1), e.target && "_self" !== e.target.toLowerCase() && (a = !1), window.ga ? window.ga("send", "event", {
                            eventCategory: t || "Outbound Link",
                            eventAction: n || "click",
                            eventLabel: i || e.href,
                            eventValue: l,
                            transport: a ? "beacon" : "",
                            hitCallback: function() {
                                a && (document.location = e.href)
                            }
                        }) : a && (document.location = e.href), !1
                    }
                }))
            }
            c.propTypes = {
                href: l.default.string,
                target: l.default.string,
                eventCategory: l.default.string,
                eventAction: l.default.string,
                eventLabel: l.default.string,
                eventValue: l.default.number,
                onClick: l.default.func
            }
        },
        73223: function(e, t) {
            "use strict";
            t.Z = {
                about: "/about/",
                blog: "/blog/",
                businessSupport: "/products/business-support/",
                careers: "/careers/",
                community: "https://community.bitwarden.com/",
                compliance: "/compliance/",
                contact: "/contact/",
                contactSales: "/contact-sales/",
                cookies: "/privacy/cookies/",
                discovery: "/discovery/",
                download: "/download/",
                events: "/events/",
                feed: "/blog/feed.xml",
                getStarted: "https://vault.bitwarden.com/#/register?layout=default",
                getStartedEnterprise: "https://vault.bitwarden.com/#/register?org=enterprise&layout=enterprise2",
                getStartedEnterpriseCnet: "https://vault.bitwarden.com/#/register?org=enterprise&layout=cnetcmpgnent",
                getStartedFreeOrg: "https://vault.bitwarden.com/#/register?org=free&layout=default",
                getStartedFamilies: "https://vault.bitwarden.com/#/register?org=families&layout=default",
                getStartedTeams: "https://vault.bitwarden.com/#/register?org=teams&layout=teams1",
                getStartedTeamsCnet: "https://vault.bitwarden.com/#/register?org=teams&layout=cnetcmpgnteams",
                getStartedPremium: "https://vault.bitwarden.com/#/register?org=premium&layout=default",
                getStartedPremiumPurchase: "https://vault.bitwarden.com/#/register?premium=purchase&layout=default",
                getStartedPremiumCnet: "https://vault.bitwarden.com/#/register?org=individual&layout=cnetcmpgnind",
                help: "/help/",
                index: "/",
                learning: "/learning/",
                login: "https://vault.bitwarden.com/#/",
                msp: "/msp/",
                newsfeed: "/newsfeed/",
                opensource: "/open-source/",
                passwordGenerator: "/password-generator/",
                passwordTester: "/password-strength/",
                pricing: "/pricing/business/",
                products: "/products/",
                register: "/#/register/",
                resources: "/resources/",
                terms: "/terms/",
                sitemap: "/sitemap/",
                spotlight: "/media-spotlight/",
                send: "/products/send/",
                weekly: "/weekly/",
                enterpriseDemo: "/enterprise-demo/"
            }
        },
        55714: function(e, t, n) {
            var r = n(67294);

            function a(e) {
                return r.createElement("svg", e, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M129 20.6C135.3 20.6 140.2 23 143.8 28C147.4 32.9 149.2 39.6 149.2 48.1C149.2 56.9 147.4 63.7 143.7 68.5C140 73.4 135 75.7 128.7 75.7C122.4 75.7 117.6 73.5 114 68.9H113L111.1 73.6C110.8 74.3 110.1 74.7 109.4 74.7H101.4C100.4 74.7 99.6 73.9 99.6 72.9V2.6C99.6 1.6 100.4 0.8 101.4 0.8H112.2C113.2 0.8 114 1.6 114 2.6V18C114 20.2 113.8 23.7 113.4 28.5H114C117.3 23.3 122.4 20.6 129 20.6ZM124.4 32.3C120.9 32.3 118.2 33.4 116.5 35.6C114.9 37.8 114 41.5 114 46.5V48.1C114 53.8 114.8 57.9 116.5 60.3C118.2 62.7 120.9 64 124.6 64C127.5 64 130 62.6 131.7 59.8C133.4 57.1 134.3 53 134.3 47.9C134.3 42.7 133.4 38.8 131.7 36.2C129.9 33.6 127.4 32.3 124.4 32.3ZM173 74.8H162.2C161.2 74.8 160.4 74 160.4 73V23.5C160.4 22.5 161.2 21.7 162.2 21.7H173C174 21.7 174.8 22.5 174.8 23.5V72.9C174.9 73.8 174 74.8 173 74.8ZM212.5 64.1C214.6 64.1 217.1 63.7 220.1 62.9C220.9 62.7 221.6 63.3 221.6 64.1V72.4C221.6 72.9 221.3 73.3 220.9 73.5C217.5 74.9 213.2 75.6 208.4 75.6C202.6 75.6 198.4 74.2 195.8 71.2C193.2 68.3 191.8 63.9 191.8 58.1V32.6H186.1C185.4 32.6 184.9 32.1 184.9 31.4V26.7C184.9 26.6 185 26.5 185 26.4L192.9 21.7L196.8 11.3C197 10.8 197.4 10.5 197.9 10.5H205.1C205.8 10.5 206.3 11 206.3 11.7V21.8H220.6C220.9 21.8 221.2 22.1 221.2 22.4V31.4C221.2 32.1 220.7 32.6 220 32.6H206.4V58C206.4 60 207 61.6 208.1 62.5C209.1 63.6 210.7 64.1 212.5 64.1ZM279.8 74.8C278.4 74.8 277.3 73.9 276.7 72.6L266.1 40.3C265.4 38 264.5 34.5 263.3 30H263L262 33.6L259.9 40.4L249 72.7C248.6 74 247.4 74.8 246 74.8C244.6 74.8 243.4 73.9 243 72.5L229.7 26C229.3 24.6 230.4 23.1 232 23.1H232.3C233.3 23.1 234.2 23.8 234.5 24.8L242.3 53.1C244.2 60.5 245.5 65.9 246.1 69.5H246.4C248.2 62.1 249.6 57.2 250.5 54.7L260.6 25.1C261 23.9 262.1 23.1 263.5 23.1C264.8 23.1 265.9 23.9 266.3 25.1L275.7 54.5C278 62 279.4 66.8 279.9 69.3H280.2C280.5 67.3 281.7 61.7 284 52.7L291.5 24.8C291.8 23.8 292.7 23.1 293.7 23.1C295.2 23.1 296.3 24.5 295.9 26L283.3 72.5C282.9 73.9 281.7 74.8 280.2 74.8H279.8ZM339.2 74.8C338.3 74.8 337.5 74.1 337.4 73.2L336.5 66.6H336C333.4 69.9 330.8 72.3 328 73.7C325.3 75.1 322 75.7 318.3 75.7C313.2 75.7 309.3 74.4 306.5 71.8C304 69.5 302.6 66.4 302.4 62.5C302 57.3 304.2 52.3 308.4 49.4C312.7 46.6 318.7 44.9 326.8 44.9L336.6 44.6V41.2C336.6 36.2 335.6 32.6 333.5 30.1C331.4 27.6 328.3 26.4 323.9 26.4C319.7 26.4 315.5 27.4 311.1 29.5C310 30 308.7 29.5 308.2 28.4C307.7 27.3 308.2 26 309.3 25.6C314.3 23.6 319.2 22.5 324.2 22.5C329.9 22.5 334.1 24 337 27C339.8 29.9 341.2 34.6 341.2 40.7V73.2C341.1 73.8 340.2 74.8 339.2 74.8ZM318.5 71.4C324.1 71.4 328.4 69.8 331.5 66.7C334.7 63.6 336.3 59.1 336.3 53.6V48.6L327.3 49C320 49.3 314.9 50.5 311.7 52.4C308.6 54.3 307 57.4 307 61.4C307 64.6 308 67.2 309.9 69C312.1 70.5 314.9 71.4 318.5 71.4ZM377.7 22.1C379.2 22.1 380.7 22.2 382.4 22.4C383.7 22.6 384.5 23.8 384.3 25C384.1 26.2 382.9 26.9 381.7 26.7C380.2 26.5 378.7 26.3 377.2 26.3C372.8 26.3 369.2 28.2 366.4 31.9C363.6 35.6 362.2 40.4 362.2 46V72.2C362.2 73.5 361.2 74.5 359.9 74.5C358.6 74.5 357.6 73.5 357.6 72.2V25.2C357.6 24.1 358.5 23.2 359.6 23.2C360.7 23.2 361.6 24 361.6 25.1L362 32.5H362.3C364.4 28.7 366.7 26 369.1 24.5C371.4 22.9 374.3 22.1 377.7 22.1ZM412.9 22.1C416.6 22.1 419.9 22.8 422.6 24.1C425.4 25.4 427.8 27.8 429.9 31.1H430.2C430 27 429.9 23.2 429.9 19.4V3.1C429.9 1.8 430.9 0.8 432.2 0.8C433.5 0.8 434.5 1.8 434.5 3.1V73C434.5 73.9 433.8 74.6 432.9 74.6C432.1 74.6 431.4 74 431.3 73.1L430.3 66.6H429.9C426 72.5 420.3 75.4 413 75.4C405.8 75.4 400.5 73.2 396.6 68.7C392.9 64.2 390.9 57.8 390.9 49.3C390.9 40.4 392.7 33.6 396.5 28.8C400.3 24.5 405.7 22.1 412.9 22.1ZM412.9 26.4C407.2 26.4 403 28.4 400.1 32.4C397.3 36.3 395.9 42 395.9 49.6C395.9 64.2 401.6 71.5 413 71.5C418.9 71.5 423.1 69.8 425.8 66.4C428.6 63 429.9 57.4 429.9 49.6V48.8C429.9 40.8 428.6 35.1 425.8 31.7C423.2 28.1 418.9 26.4 412.9 26.4ZM472.8 75.7C465.3 75.7 459.5 73.4 455.2 68.7C451 64.1 448.9 57.6 448.9 49.3C448.9 41 450.9 34.4 455 29.5C459.1 24.5 464.5 22 471.4 22C477.4 22 482.3 24.1 485.7 28.3C489.3 32.5 491 38.3 491 45.6V49.4H453.8C453.9 56.5 455.5 61.9 458.8 65.7C462.1 69.5 466.7 71.2 472.8 71.2C475.7 71.2 478.4 71 480.6 70.6C482.2 70.3 484.1 69.8 486.4 69C487.7 68.5 489.1 69.5 489.1 70.9C489.1 71.7 488.6 72.5 487.8 72.8C485.4 73.8 483.1 74.4 481 74.8C478.5 75.5 475.8 75.7 472.8 75.7ZM471.4 26.3C466.4 26.3 462.4 27.9 459.4 31.2C456.4 34.4 454.7 39.2 454.1 45.3H486.1C486.1 39.4 484.8 34.6 482.2 31.3C479.6 28 476 26.3 471.4 26.3ZM543.8 74.8C542.5 74.8 541.5 73.8 541.5 72.5V41.2C541.5 36 540.4 32.2 538.3 29.9C536 27.6 532.7 26.3 528.1 26.3C521.9 26.3 517.4 27.8 514.6 31C511.8 34.1 510.2 39.2 510.2 46.1V72.3C510.2 73.6 509.2 74.6 507.9 74.6C506.6 74.6 505.6 73.6 505.6 72.3V25.2C505.6 24 506.5 23.1 507.7 23.1C508.8 23.1 509.6 23.9 509.8 24.9L510.4 30.1H510.7C514.1 24.7 520 22 528.6 22C540.3 22 546.2 28.3 546.2 40.9V72.3C546.1 73.7 545 74.8 543.8 74.8ZM167.7 0C163 0 159.2 3.6 159.2 8.1V8.9C159.2 13.3 163.1 17 167.7 17C172.3 17 176.2 13.3 176.2 8.9V8.2C176.2 3.6 172.3 0 167.7 0ZM67.4 1.8C66.7 1.1 65.9 0.8 65 0.8H3.4C2.4 0.8 1.7 1.1 1 1.8C0.3 2.5 0 3.4 0 4.2V45.2C0 48.2 0.6 51.3 1.8 54.3C3 57.3 4.4 60 6.2 62.3C7.9 64.6 10.1 67 12.5 69.1C14.9 71.3 17.2 73.2 19.3 74.6C21.3 76 23.6 77.4 25.8 78.7C28 80 29.6 80.9 30.5 81.3C31.4 81.8 32.2 82.1 32.7 82.4C33.1 82.6 33.6 82.7 34.1 82.7C34.6 82.7 35.1 82.6 35.5 82.4C36.1 82.2 36.8 81.8 37.8 81.3C38.7 80.8 40.3 80 42.5 78.7C44.7 77.4 46.9 76 49 74.6C51 73.2 53.4 71.3 55.8 69.1C58.2 66.9 60.3 64.7 62.1 62.3C63.8 60 65.3 57.3 66.5 54.3C67.7 51.3 68.3 48.2 68.3 45.2V4.2C68.4 3.4 68.1 2.5 67.4 1.8ZM59.5 45.6C59.5 60.5 34.2 73.3 34.2 73.3V9.6H59.5C59.5 9.6 59.5 30.8 59.5 45.6Z"
                }))
            }
            a.defaultProps = {
                viewBox: "0 0 547 83",
                stroke: "currentColor"
            }, e.exports = a, a.default = a
        }
    }
]);
//# sourceMappingURL=94362d5ced6b2252fa30ee25c1292eb755551485-cbf3415d8938b60401a2.js.map