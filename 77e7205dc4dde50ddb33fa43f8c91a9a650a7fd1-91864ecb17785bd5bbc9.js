(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [4292], {
        32809: function() {
            ! function() {
                "use strict";

                function e(e) {
                    var t = !0,
                        n = !1,
                        o = null,
                        r = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0
                        };

                    function i(e) {
                        return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
                    }

                    function a(e) {
                        var t = e.type,
                            n = e.tagName;
                        return !("INPUT" !== n || !r[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
                    }

                    function c(e) {
                        e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                    }

                    function s(e) {
                        e.hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added"))
                    }

                    function u(n) {
                        n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && c(e.activeElement), t = !0)
                    }

                    function d(e) {
                        t = !1
                    }

                    function l(e) {
                        i(e.target) && (t || a(e.target)) && c(e.target)
                    }

                    function m(e) {
                        i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout((function() {
                            n = !1
                        }), 100), s(e.target))
                    }

                    function v(e) {
                        "hidden" === document.visibilityState && (n && (t = !0), p())
                    }

                    function p() {
                        document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
                    }

                    function w() {
                        document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
                    }

                    function f(e) {
                        e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, w())
                    }
                    document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", v, !0), p(), e.addEventListener("focus", l, !0), e.addEventListener("blur", m, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                }
                if ("undefined" != typeof window && "undefined" != typeof document) {
                    var t;
                    window.applyFocusVisiblePolyfill = e;
                    try {
                        t = new CustomEvent("focus-visible-polyfill-ready")
                    } catch (n) {
                        (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                    }
                    window.dispatchEvent(t)
                }
                "undefined" != typeof document && e(document)
            }()
        },
        5009: function(e, t, n) {
            "use strict";
            var o = n(63366),
                r = n(1597),
                i = n(3013),
                a = n(88837),
                c = ["children", "to"];
            t.Z = function(e) {
                var t = e.children,
                    n = e.to,
                    s = (0, o.Z)(e, c);
                return null != n && n.startsWith("http") || "/" !== (null == n ? void 0 : n.slice(-1)) ? (0, a.tZ)(i.rU, Object.assign({
                    href: n
                }, s, {
                    _hover: {
                        textDecoration: "none"
                    },
                    children: t
                })) : (0, a.tZ)(r.Link, Object.assign({
                    to: n
                }, s, {
                    children: t
                }))
            }
        },
        29949: function(e, t, n) {
            "use strict";
            var o = n(3013),
                r = n(88837);
            t.Z = function(e) {
                var t = e.children;
                return (0, r.tZ)(o.W2, Object.assign({
                    as: "section",
                    maxW: {
                        base: "xl",
                        md: "7xl"
                    },
                    mx: "auto",
                    px: {
                        base: "6",
                        md: "8"
                    }
                }, e, {
                    children: t
                }))
            }
        },
        57744: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hn: function() {
                    return g
                },
                dk: function() {
                    return x
                },
                nc: function() {
                    return L
                }
            });
            var o = n(31421),
                r = n(62062),
                i = n.n(r),
                a = n(75329),
                c = n.n(a),
                s = n(92646),
                u = n.n(s),
                d = n(71870),
                l = n.n(d),
                m = n(78248),
                v = n.n(m),
                p = n(58858),
                w = n.n(p),
                f = n(40868),
                h = n.n(f),
                b = n(73223),
                E = n(88837),
                x = [{
                    sectionName: "Products",
                    links: [{
                        name: "How Bitwarden Works",
                        url: b.Z.products + "#how-bitwarden-works",
                        action: "Footer Products"
                    }, {
                        name: "Bitwarden Send",
                        url: "" + b.Z.send,
                        action: "Footer Products"
                    }, {
                        name: "Pricing for Business",
                        url: b.Z.pricing,
                        action: "Footer Pricing"
                    }, {
                        name: "Pricing for Individuals",
                        url: "/pricing/",
                        action: "Footer Pricing Personal"
                    }, {
                        name: "Download Options",
                        url: b.Z.download,
                        action: "Footer Download"
                    }, {
                        name: "Managed Service Providers",
                        url: "/msp/",
                        action: "Footer MSP"
                    }]
                }, {
                    sectionName: "Company",
                    links: [{
                        name: "About",
                        url: b.Z.about,
                        action: "Footer About"
                    }, {
                        name: "Open Source",
                        url: "/open-source/",
                        action: "Footer Products"
                    }, {
                        name: "Careers",
                        url: b.Z.careers,
                        action: "Footer Careers"
                    }, {
                        name: "Events",
                        url: b.Z.events,
                        action: "Footer Events"
                    }, {
                        name: "Media Spotlight",
                        url: b.Z.spotlight,
                        action: "Footer Media Spotlight"
                    }, {
                        name: "Blog",
                        url: b.Z.blog,
                        action: "Footer Blog"
                    }]
                }, {
                    sectionName: "Resources",
                    links: [{
                        name: "Resource Center",
                        url: b.Z.resources,
                        action: "Footer Resource Center"
                    }, {
                        name: "Community Forums",
                        url: b.Z.community,
                        action: "Footer Forums",
                        external: !0
                    }, {
                        name: "Security Compliance",
                        url: "/compliance/",
                        action: "Footer Security Compliance"
                    }, {
                        name: "Success Stories",
                        url: "/bitwarden-reviews/",
                        action: "Success Stories"
                    }, {
                        name: "User Reviews",
                        url: "/user-reviews/",
                        action: "Reviews"
                    }, {
                        name: "Newsfeed",
                        url: b.Z.newsfeed,
                        action: "Footer Newsfeed"
                    }, {
                        name: "Subscribe to Bitwarden Updates",
                        url: "/newsletter-subscribe/",
                        action: "Footer Newsletter Subscribe"
                    }]
                }, {
                    sectionName: "Tools & Help",
                    links: [{
                        name: "Password Generator",
                        url: "/password-generator/",
                        action: "Footer Password Generator"
                    }, {
                        name: "Password Strength Tester",
                        url: "/password-strength/",
                        action: "Footer Password Strength"
                    }, {
                        name: "Help Center",
                        url: b.Z.help,
                        action: "Footer Help",
                        external: !0
                    }, {
                        name: "Learning Center",
                        url: b.Z.learning,
                        action: "Footer Learning Center"
                    }, {
                        name: "Talk to Sales",
                        url: b.Z.contactSales,
                        action: "Footer Talk to Sales"
                    }, {
                        name: "Contact Support",
                        url: b.Z.contact,
                        action: "Footer Contact Support"
                    }]
                }],
                g = [{
                    name: "Terms",
                    url: "/terms/"
                }, {
                    name: "Privacy",
                    url: "/privacy/"
                }, {
                    name: "Cookie Settings",
                    url: "#"
                }, {
                    name: "Sitemap",
                    url: b.Z.sitemap
                }],
                L = ((0, E.tZ)(o.JO, {
                    as: w(),
                    w: "32px",
                    h: "32px"
                }), (0, E.tZ)(o.JO, {
                    as: v(),
                    w: "32px",
                    h: "32px"
                }), (0, E.tZ)(o.JO, {
                    as: l(),
                    w: "32px",
                    h: "32px"
                }), (0, E.tZ)(o.JO, {
                    as: u(),
                    w: "32px",
                    h: "32px"
                }), [{
                    name: "Twitter",
                    url: "https://twitter.com/bitwarden",
                    icon: (0, E.tZ)(o.JO, {
                        as: l(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow Twitter"
                }, {
                    name: "Reddit",
                    url: "https://reddit.com/r/bitwarden",
                    icon: (0, E.tZ)(o.JO, {
                        as: c(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow Reddit"
                }, {
                    name: "Community",
                    url: "https://community.bitwarden.com/",
                    icon: (0, E.tZ)(o.JO, {
                        as: h(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow Community"
                }, {
                    name: "Github",
                    url: "https://github.com/bitwarden",
                    icon: (0, E.tZ)(o.JO, {
                        as: w(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow GitHub"
                }, {
                    name: "Youtube",
                    url: "https://www.youtube.com/channel/UCId9a_jQqvJre0_dE2lE_Rw",
                    icon: (0, E.tZ)(o.JO, {
                        as: i(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow YouTube"
                }, {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/bitwarden1",
                    icon: (0, E.tZ)(o.JO, {
                        as: v(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow LinkedIn"
                }, {
                    name: "Facebook",
                    url: "https://www.facebook.com/bitwarden/",
                    icon: (0, E.tZ)(o.JO, {
                        as: u(),
                        w: "32px",
                        h: "32px"
                    }),
                    action: "Follow Facebook"
                }])
        },
        40868: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M16.136 0c-8.757 0-16.136 7.036-16.136 15.721 0 0.279 0.007 16.279 0.007 16.279l16.129-0.014c8.764 0 15.864-7.307 15.864-15.993s-7.1-15.993-15.864-15.993zM16 25.143c-1.386 0-2.707-0.307-3.886-0.864l-5.793 1.436 1.636-5.357c-0.7-1.293-1.1-2.779-1.1-4.357 0-5.050 4.093-9.143 9.143-9.143s9.143 4.093 9.143 9.143c0 5.050-4.093 9.143-9.143 9.143z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        92646: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M30.233 0h-28.467c-0.976 0-1.767 0.791-1.767 1.767v28.468c0 0.975 0.791 1.765 1.767 1.765h15.327v-12.392h-4.171v-4.829h4.171v-3.561c0-4.133 2.524-6.384 6.212-6.384 1.767 0 3.284 0.132 3.727 0.191v4.32l-2.557 0.001c-2.005 0-2.393 0.953-2.393 2.351v3.084h4.783l-0.623 4.829h-4.16v12.391h8.155c0.973 0 1.764-0.791 1.764-1.767v-28.467c0-0.976-0.791-1.767-1.767-1.767v0z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        58858: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M16 0c-8.835 0-16 7.164-16 16 0 7.069 4.584 13.067 10.943 15.183 0.799 0.148 1.057-0.348 1.057-0.769v-2.979c-4.451 0.968-5.377-1.888-5.377-1.888-0.728-1.849-1.777-2.341-1.777-2.341-1.452-0.993 0.111-0.972 0.111-0.972 1.607 0.112 2.452 1.649 2.452 1.649 1.427 2.445 3.743 1.739 4.656 1.329 0.143-1.033 0.557-1.74 1.016-2.139-3.553-0.407-7.289-1.779-7.289-7.908 0-1.748 0.625-3.175 1.648-4.295-0.165-0.404-0.713-2.032 0.156-4.235 0 0 1.344-0.429 4.401 1.64 1.276-0.355 2.644-0.532 4.004-0.539 1.36 0.007 2.729 0.184 4.008 0.539 3.055-2.069 4.396-1.64 4.396-1.64 0.871 2.204 0.323 3.832 0.157 4.235 1.027 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.499-7.305 7.895 0.573 0.496 1.097 1.469 1.097 2.963v4.391c0 0.425 0.256 0.925 1.068 0.768 6.353-2.119 10.932-8.115 10.932-15.181 0-8.836-7.164-16-16-16z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        78248: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M25.333 0h-18.667c-3.681 0-6.667 2.985-6.667 6.667v18.667c0 3.681 2.985 6.667 6.667 6.667h18.667c3.683 0 6.667-2.985 6.667-6.667v-18.667c0-3.681-2.984-6.667-6.667-6.667zM10.667 25.333h-4v-14.667h4v14.667zM8.667 8.976c-1.288 0-2.333-1.053-2.333-2.352s1.045-2.352 2.333-2.352c1.288 0 2.333 1.053 2.333 2.352s-1.044 2.352-2.333 2.352zM26.667 25.333h-4v-7.472c0-4.491-5.333-4.151-5.333 0v7.472h-4v-14.667h4v2.353c1.861-3.448 9.333-3.703 9.333 3.301v9.012z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        75329: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M18.984 20.464c0.113 0.112 0.113 0.295 0 0.408-0.62 0.616-1.592 0.916-2.975 0.916l-0.011-0.003-0.011 0.003c-1.381 0-2.355-0.3-2.975-0.917-0.113-0.112-0.113-0.295 0-0.407 0.112-0.112 0.296-0.112 0.409 0 0.505 0.503 1.344 0.748 2.565 0.748l0.011 0.003 0.011-0.003c1.22 0 2.059-0.245 2.565-0.748 0.113-0.112 0.297-0.112 0.409 0zM14.397 17.24c0-0.676-0.552-1.225-1.229-1.225-0.679 0-1.231 0.549-1.231 1.225 0 0.675 0.552 1.224 1.231 1.224 0.677 0.001 1.229-0.548 1.229-1.224zM32 16c0 8.836-7.164 16-16 16s-16-7.164-16-16c0-8.836 7.164-16 16-16s16 7.164 16 16zM25.333 15.828c0-1.135-0.927-2.057-2.067-2.057-0.556 0-1.060 0.223-1.432 0.58-1.408-0.927-3.313-1.516-5.421-1.592l1.153-3.632 3.124 0.732-0.004 0.045c0 0.928 0.759 1.683 1.691 1.683s1.689-0.755 1.689-1.683c0-0.928-0.757-1.683-1.689-1.683-0.716 0-1.325 0.447-1.572 1.072l-3.367-0.789c-0.147-0.036-0.297 0.049-0.343 0.193l-1.287 4.051c-2.208 0.027-4.207 0.621-5.677 1.575-0.369-0.34-0.859-0.553-1.4-0.553-1.139 0.001-2.065 0.924-2.065 2.059 0 0.755 0.415 1.408 1.024 1.767-0.040 0.219-0.067 0.441-0.067 0.667 0 3.041 3.74 5.516 8.337 5.516s8.337-2.475 8.337-5.516c0-0.213-0.023-0.423-0.059-0.629 0.648-0.348 1.093-1.021 1.093-1.804v0zM18.837 16.016c-0.679 0-1.229 0.549-1.229 1.225 0 0.675 0.552 1.224 1.229 1.224s1.229-0.549 1.229-1.224c0-0.676-0.551-1.225-1.229-1.225z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        71870: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M32 6.076c-1.177 0.523-2.443 0.875-3.771 1.033 1.356-0.812 2.397-2.099 2.887-3.632-1.268 0.752-2.673 1.299-4.169 1.593-1.196-1.276-2.904-2.073-4.792-2.073-4.239 0-7.353 3.955-6.396 8.060-5.455-0.273-10.292-2.887-13.531-6.859-1.72 2.951-0.892 6.811 2.031 8.765-1.075-0.035-2.088-0.329-2.972-0.821-0.072 3.041 2.108 5.887 5.265 6.52-0.924 0.251-1.936 0.309-2.965 0.112 0.835 2.608 3.259 4.505 6.133 4.559-2.76 2.164-6.237 3.131-9.72 2.72 2.905 1.863 6.357 2.949 10.064 2.949 12.189 0 19.076-10.295 18.66-19.528 1.283-0.927 2.396-2.083 3.276-3.399v0z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        62062: function(e, t, n) {
            var o = n(67294);

            function r(e) {
                return o.createElement("svg", e, o.createElement("path", {
                    d: "M26.153 4.245c-4.805-0.328-15.508-0.327-20.307 0-5.196 0.355-5.808 3.493-5.847 11.755 0.039 8.247 0.645 11.399 5.847 11.755 4.8 0.327 15.501 0.328 20.307 0 5.196-0.355 5.808-3.493 5.847-11.755-0.039-8.247-0.645-11.399-5.847-11.755v0zM12 21.333v-10.667l10.667 5.324-10.667 5.343z"
                }))
            }
            r.defaultProps = {
                version: "1.1",
                viewBox: "0 0 32 32"
            }, e.exports = r, r.default = r
        },
        63366: function(e, t, n) {
            "use strict";

            function o(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    i = Object.keys(e);
                for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);
//# sourceMappingURL=77e7205dc4dde50ddb33fa43f8c91a9a650a7fd1-91864ecb17785bd5bbc9.js.map