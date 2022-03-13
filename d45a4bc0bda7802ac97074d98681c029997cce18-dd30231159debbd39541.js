"use strict";
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [9548], {
        65186: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return he
                }
            });
            var r, o, i, a, c = n(45697),
                u = n.n(c),
                s = n(96124),
                l = n.n(s),
                f = n(10523),
                d = n.n(f),
                p = n(67294),
                m = n(24756),
                h = n.n(m),
                b = "bodyAttributes",
                y = "htmlAttributes",
                v = "titleAttributes",
                g = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                w = (Object.keys(g).map((function(e) {
                    return g[e]
                })), "charset"),
                T = "cssText",
                C = "href",
                S = "http-equiv",
                A = "innerHTML",
                x = "itemprop",
                O = "name",
                E = "property",
                k = "rel",
                j = "src",
                I = "target",
                Z = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                P = "defaultTitle",
                L = "defer",
                B = "encodeSpecialCharacters",
                N = "onChangeClientState",
                M = "titleTemplate",
                _ = Object.keys(Z).reduce((function(e, t) {
                    return e[Z[t]] = t, e
                }), {}),
                R = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
                D = "data-react-helmet",
                H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                F = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                q = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                U = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                },
                W = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                X = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                z = function(e) {
                    var t = V(e, g.TITLE),
                        n = V(e, M);
                    if (n && t) return n.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = V(e, P);
                    return t || r || void 0
                },
                K = function(e) {
                    return V(e, N) || function() {}
                },
                J = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return Y({}, e, t)
                    }), {})
                },
                $ = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[g.BASE]
                    })).map((function(e) {
                        return e[g.BASE]
                    })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                var i = r[o].toLowerCase();
                                if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
                            }
                        return t
                    }), [])
                },
                Q = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + H(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, n) {
                        var o = {};
                        n.filter((function(e) {
                            for (var n = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    u = c.toLowerCase(); - 1 === t.indexOf(u) || n === k && "canonical" === e[n].toLowerCase() || u === k && "stylesheet" === e[u].toLowerCase() || (n = u), -1 === t.indexOf(c) || c !== A && c !== T && c !== x || (n = c)
                            }
                            if (!n || !e[n]) return !1;
                            var s = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][s] && (o[n][s] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                            var c = i[a],
                                u = h()({}, r[c], o[c]);
                            r[c] = u
                        }
                        return e
                    }), []).reverse()
                },
                V = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                G = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
                        G(e)
                    }), 0)
                }),
                ee = function(e) {
                    return clearTimeout(e)
                },
                te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || G : n.g.requestAnimationFrame || G,
                ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : n.g.cancelAnimationFrame || ee,
                re = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                oe = null,
                ie = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.onChangeClientState,
                        s = e.scriptTags,
                        l = e.styleTags,
                        f = e.title,
                        d = e.titleAttributes;
                    ue(g.BODY, r), ue(g.HTML, o), ce(f, d);
                    var p = {
                            baseTag: se(g.BASE, n),
                            linkTags: se(g.LINK, i),
                            metaTags: se(g.META, a),
                            noscriptTags: se(g.NOSCRIPT, c),
                            scriptTags: se(g.SCRIPT, s),
                            styleTags: se(g.STYLE, l)
                        },
                        m = {},
                        h = {};
                    Object.keys(p).forEach((function(e) {
                        var t = p[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (m[e] = n), r.length && (h[e] = p[e].oldTags)
                    })), t && t(), u(e, m, h)
                },
                ae = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                ce = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = ae(e)), ue(g.TITLE, t)
                },
                ue = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(D), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), c = 0; c < a.length; c++) {
                            var u = a[c],
                                s = t[u] || "";
                            n.getAttribute(u) !== s && n.setAttribute(u, s), -1 === o.indexOf(u) && o.push(u);
                            var l = i.indexOf(u); - 1 !== l && i.splice(l, 1)
                        }
                        for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
                        o.length === i.length ? n.removeAttribute(D) : n.getAttribute(D) !== a.join(",") && n.setAttribute(D, a.join(","))
                    }
                },
                se = function(e, t) {
                    var n = document.head || document.querySelector(g.HEAD),
                        r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
                        o = Array.prototype.slice.call(r),
                        i = [],
                        a = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === A) n.innerHTML = t.innerHTML;
                                else if (r === T) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var c = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, c)
                        }
                        n.setAttribute(D, "true"), o.some((function(e, t) {
                            return a = t, n.isEqualNode(e)
                        })) ? o.splice(a, 1) : i.push(n)
                    })), o.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), i.forEach((function(e) {
                        return n.appendChild(e)
                    })), {
                        oldTags: o,
                        newTags: i
                    }
                },
                le = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                        return t ? t + " " + r : r
                    }), "")
                },
                fe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[Z[n] || n] = e[n], t
                    }), t)
                },
                de = function(e, t, n) {
                    switch (e) {
                        case g.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, n = t.titleAttributes, (r = {
                                        key: e
                                    })[D] = !0, o = fe(n, r), [p.createElement(g.TITLE, o, e)];
                                    var e, n, r, o
                                },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var o = le(n),
                                            i = ae(t);
                                        return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + X(i, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + X(i, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case b:
                        case y:
                            return {
                                toComponent: function() {
                                    return fe(t)
                                },
                                toString: function() {
                                    return le(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, o = ((r = {
                                                key: n
                                            })[D] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = Z[e] || e;
                                                if (n === A || n === T) {
                                                    var r = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else o[n] = t[e]
                                            })), p.createElement(e, o)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var o = Object.keys(r).filter((function(e) {
                                                    return !(e === A || e === T)
                                                })).reduce((function(e, t) {
                                                    var o = void 0 === r[t] ? t : t + '="' + X(r[t], n) + '"';
                                                    return e ? e + " " + o : o
                                                }), ""),
                                                i = r.innerHTML || r.cssText || "",
                                                a = -1 === R.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                pe = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.scriptTags,
                        s = e.styleTags,
                        l = e.title,
                        f = void 0 === l ? "" : l,
                        d = e.titleAttributes;
                    return {
                        base: de(g.BASE, t, r),
                        bodyAttributes: de(b, n, r),
                        htmlAttributes: de(y, o, r),
                        link: de(g.LINK, i, r),
                        meta: de(g.META, a, r),
                        noscript: de(g.NOSCRIPT, c, r),
                        script: de(g.SCRIPT, u, r),
                        style: de(g.STYLE, s, r),
                        title: de(g.TITLE, {
                            title: f,
                            titleAttributes: d
                        }, r)
                    }
                },
                me = l()((function(e) {
                    return {
                        baseTag: $([C, I], e),
                        bodyAttributes: J(b, e),
                        defer: V(e, L),
                        encode: V(e, B),
                        htmlAttributes: J(y, e),
                        linkTags: Q(g.LINK, [k, C], e),
                        metaTags: Q(g.META, [O, w, S, E, x], e),
                        noscriptTags: Q(g.NOSCRIPT, [A], e),
                        onChangeClientState: K(e),
                        scriptTags: Q(g.SCRIPT, [j, A], e),
                        styleTags: Q(g.STYLE, [T], e),
                        title: z(e),
                        titleAttributes: J(v, e)
                    }
                }), (function(e) {
                    oe && ne(oe), e.defer ? oe = te((function() {
                        ie(e, (function() {
                            oe = null
                        }))
                    })) : (ie(e), oe = null)
                }), pe)((function() {
                    return null
                })),
                he = (o = me, a = i = function(e) {
                    function t() {
                        return F(this, t), W(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !d()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case g.SCRIPT:
                            case g.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case g.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        return Y({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [Y({}, o, this.mapNestedChildrenToProps(n, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            o = e.newProps,
                            i = e.newChildProps,
                            a = e.nestedChildren;
                        switch (r.type) {
                            case g.TITLE:
                                return Y({}, o, ((t = {})[r.type] = a, t.titleAttributes = Y({}, i), t));
                            case g.BODY:
                                return Y({}, o, {
                                    bodyAttributes: Y({}, i)
                                });
                            case g.HTML:
                                return Y({}, o, {
                                    htmlAttributes: Y({}, i)
                                })
                        }
                        return Y({}, o, ((n = {})[r.type] = Y({}, i), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = Y({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = Y({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return p.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    i = o.children,
                                    a = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, n) {
                                            return t[_[n] || n] = e[n], t
                                        }), t)
                                    }(U(o, ["children"]));
                                switch (n.warnOnInvalidChildren(e, i), e.type) {
                                    case g.LINK:
                                    case g.META:
                                    case g.NOSCRIPT:
                                    case g.SCRIPT:
                                    case g.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: a,
                                            nestedChildren: i
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: a,
                                            nestedChildren: i
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = U(e, ["children"]),
                            r = Y({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), p.createElement(o, r)
                    }, q(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            o.canUseDOM = e
                        }
                    }]), t
                }(p.Component), i.propTypes = {
                    base: u().object,
                    bodyAttributes: u().object,
                    children: u().oneOfType([u().arrayOf(u().node), u().node]),
                    defaultTitle: u().string,
                    defer: u().bool,
                    encodeSpecialCharacters: u().bool,
                    htmlAttributes: u().object,
                    link: u().arrayOf(u().object),
                    meta: u().arrayOf(u().object),
                    noscript: u().arrayOf(u().object),
                    onChangeClientState: u().func,
                    script: u().arrayOf(u().object),
                    style: u().arrayOf(u().object),
                    title: u().string,
                    titleAttributes: u().object,
                    titleTemplate: u().string
                }, i.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, i.peek = o.peek, i.rewind = function() {
                    var e = o.rewind();
                    return e || (e = pe({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, a);
            he.renderStatic = he.rewind, t.Z = he
        },
        96124: function(e, t, n) {
            var r, o = n(67294),
                i = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var c = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var u, s = [];

                    function l() {
                        u = e(s.map((function(e) {
                            return e.props
                        }))), f.canUseDOM ? t(u) : n && (u = n(u))
                    }
                    var f = function(e) {
                        var t, n;

                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
                            return u
                        }, o.rewind = function() {
                            if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = u;
                            return u = void 0, s = [], e
                        };
                        var a = o.prototype;
                        return a.UNSAFE_componentWillMount = function() {
                            s.push(this), l()
                        }, a.componentDidUpdate = function() {
                            l()
                        }, a.componentWillUnmount = function() {
                            var e = s.indexOf(this);
                            s.splice(e, 1), l()
                        }, a.render = function() {
                            return i.createElement(r, this.props)
                        }, o
                    }(o.PureComponent);
                    return a(f, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), a(f, "canUseDOM", c), f
                }
            }
        },
        53720: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(63366),
                o = n(3013),
                i = n(88837),
                a = ["icon"];

            function c(e) {
                var t = e.icon,
                    n = (0, r.Z)(e, a);
                return (0, i.tZ)(o.xv, Object.assign({}, n, {
                    fontFamily: "bwi-font",
                    as: "span",
                    fontSize: "inherit",
                    children: t
                }))
            }
        },
        79573: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return C
                }
            });
            var r = n(3013),
                o = n(65186),
                i = n(59694),
                a = n(1597),
                c = n(88837);

            function u(e) {
                var t, n, r, u, s, l = e.title,
                    f = e.description,
                    d = e.keywords,
                    p = e.canonical,
                    m = e.noIndex,
                    h = e.noFollow,
                    b = e.imageSrc,
                    y = void 0 === b ? "/images/bitwarden-og.png" : b,
                    v = (0, i.useLocation)().pathname,
                    g = l,
                    w = "object" == typeof f ? null == f ? void 0 : f.description : f,
                    T = d,
                    C = p,
                    S = m,
                    A = h,
                    x = (0, a.useStaticQuery)("4260362252").allContentfulSeo.nodes,
                    O = v,
                    E = function(e) {
                        return e.path === O
                    };
                do {
                    var k, j, I, Z, P = x.find(E);
                    if (P)
                        if (g || (g = P.title), w || (w = null === (k = P.description) || void 0 === k ? void 0 : k.description), null !== (j = T) && void 0 !== j && j.length || (T = P.keywords), O === v) C || (C = P.canonical), S = null !== (I = S) && void 0 !== I ? I : P.noIndex, A = null !== (Z = A) && void 0 !== Z ? Z : P.noFollow;
                    O = O.substring(0, O.slice(0, -1).lastIndexOf("/") + 1)
                } while ((!g || !w) && O.length > 0);
                g += " | Bitwarden", v.includes("/blog/") && "/blog/" !== v ? g += " Blog" : v.includes("/careers/") && "/careers/" !== v ? g += " Careers" : v.includes("/help/") && "/help/" !== v ? g += " Help & Support" : v.includes("/resources/") && "/resources/" !== v && (g += " Resources");
                var L = null === (t = C) || void 0 === t ? void 0 : t.path;
                return null !== (n = L) && void 0 !== n && n.startsWith("/") ? L = "https://bitwarden.com" + L : null !== (r = C) && void 0 !== r && null !== (u = r.seo) && void 0 !== u && u.help_article && (L = "https://bitwarden.com/help/" + (null === (s = C.seo.help_article) || void 0 === s ? void 0 : s.slug) + "/"), (0, c.BX)(o.q, {
                    children: [(0, c.tZ)("html", {
                        lang: "en"
                    }), (0, c.tZ)("title", {
                        children: g
                    }), (0, c.tZ)("meta", {
                        name: "description",
                        content: w
                    }), (0, c.tZ)("meta", {
                        name: "keywords",
                        content: T ? T.join(", ") : ""
                    }), (0, c.tZ)("meta", {
                        name: "og:title",
                        content: g
                    }), (0, c.tZ)("meta", {
                        name: "og:description",
                        content: w
                    }), (0, c.tZ)("meta", {
                        name: "og:image",
                        content: y.startsWith("http") ? y : "https://bitwarden.com" + y
                    }), (0, c.tZ)("meta", {
                        name: "og:site_name",
                        content: "Bitwarden"
                    }), (0, c.tZ)("meta", {
                        name: "og:url",
                        content: "https://bitwarden.com" + v
                    }), (0, c.tZ)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, c.tZ)("meta", {
                        name: "twitter:site",
                        content: "@bitwarden"
                    }), L && (0, c.tZ)("link", {
                        rel: "canonical",
                        href: L
                    }), S && (0, c.tZ)("meta", {
                        name: "robots",
                        content: "noindex"
                    }), A && (0, c.tZ)("meta", {
                        name: "robots",
                        content: "nofollow"
                    })]
                })
            }
            var s = n(41680),
                l = n(45082),
                f = (n(68316), n(67044));
            n(67294), n(31421);
            var d = (0, f.kr)({
                    name: "AlertContext",
                    errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
                }),
                p = (d[0], d[1], n(16985)),
                m = n(8409);
            n(53720), n(5009), n(68031);

            function h(e) {
                e.noBanner, e.category, e.action;
                return null
            }
            var b = n(57744),
                y = n(29949),
                v = n(55714),
                g = n.n(v);

            function w(e) {
                var t = e.sectionName,
                    n = e.links;
                return (0, c.BX)(r.xu, {
                    children: [(0, c.tZ)(r.X6, {
                        as: "h3",
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        mb: "3",
                        children: t
                    }), (0, c.tZ)(r.aV, {
                        children: n.map((function(e) {
                            var t = e.name,
                                n = e.url;
                            return (0, c.tZ)(r.HC, {
                                mb: "10px",
                                children: (0, c.tZ)(r.xu, {
                                    as: e.external ? r.rU : a.Link,
                                    fontSize: "16px",
                                    to: n,
                                    href: n,
                                    onClick: function() {
                                        return e.action && (0, m.I)({
                                            category: "" + (e.category || "main"),
                                            action: "" + e.action
                                        })
                                    },
                                    children: t
                                })
                            }, "footer-section-" + t)
                        }))
                    })]
                })
            }
            var T = function() {
                return (0, c.BX)(r.xu, {
                    as: "footer",
                    role: "contentinfo",
                    py: {
                        base: "2rem",
                        md: "3rem"
                    },
                    bg: "#1a3b66",
                    color: "white",
                    children: [(0, c.tZ)(y.Z, {
                        borderBottom: "1px solid rgba(255,255,255,.1)",
                        px: "15px",
                        children: (0, c.tZ)(a.Link, {
                            to: "/",
                            children: (0, c.tZ)(r.xu, {
                                mb: {
                                    base: "1rem",
                                    md: "2rem"
                                },
                                _hover: {
                                    textDecoration: "none"
                                },
                                w: "180px",
                                children: (0, c.tZ)(g(), {})
                            })
                        })
                    }), (0, c.BX)(r.W2, {
                        maxW: {
                            base: "xl",
                            md: "7xl"
                        },
                        mx: "auto",
                        px: "15px",
                        py: "20px",
                        children: [(0, c.tZ)(r.MI, {
                            columns: {
                                base: 1,
                                sm: 2,
                                md: 4
                            },
                            spacing: "2",
                            mb: "10",
                            children: b.dk.map((function(e) {
                                var t = e.sectionName,
                                    n = e.links;
                                return (0, c.tZ)(w, {
                                    sectionName: t,
                                    links: n
                                }, t)
                            }))
                        }), (0, c.BX)(r.kC, {
                            flexWrap: "wrap",
                            alignItems: "center",
                            children: [(0, c.BX)(r.kC, {
                                flexWrap: "wrap",
                                justifyContent: {
                                    base: "center",
                                    md: "start"
                                },
                                alignItems: "center",
                                children: [(0, c.BX)(r.xv, {
                                    fontSize: {
                                        base: "13px",
                                        md: "14px"
                                    },
                                    children: ["©", (new Date).getFullYear(), " Bitwarden, Inc."]
                                }), b.Hn.map((function(e) {
                                    var t = e.name,
                                        n = e.url;
                                    return (0, c.BX)(l.m$.span, {
                                        fontSize: {
                                            base: "13px",
                                            md: "14px"
                                        },
                                        children: [(0, c.tZ)(l.m$.span, {
                                            px: "1",
                                            children: " "
                                        }), "Cookie Settings" === t ? (0, c.tZ)("button", {
                                            onClick: function() {
                                                return window.Osano.cm.showDrawer()
                                            },
                                            type: "button",
                                            children: t
                                        }) : (0, c.tZ)(r.rU, {
                                            as: a.Link,
                                            to: n,
                                            fontSize: {
                                                base: "13px",
                                                md: "14px"
                                            },
                                            _hover: {
                                                textDecor: "none"
                                            },
                                            children: t
                                        })]
                                    }, "copyright-" + t)
                                }))]
                            }), (0, c.tZ)(p.hE, {
                                w: {
                                    base: "100%",
                                    md: "auto"
                                },
                                marginStart: {
                                    base: "auto",
                                    md: "auto"
                                },
                                marginEnd: {
                                    base: "auto",
                                    md: "0"
                                },
                                mt: {
                                    base: "1rem",
                                    md: "0"
                                },
                                color: "gray.600",
                                variant: "ghost",
                                d: "flex",
                                flexDir: "row",
                                flexWrap: "wrap",
                                justifyContent: {
                                    base: "space-between",
                                    md: "end"
                                },
                                children: b.nc.map((function(e) {
                                    var t = e.name,
                                        n = e.url;
                                    return (0, c.tZ)(r.rU, {
                                        mx: "5px",
                                        as: "a",
                                        href: n,
                                        "aria-label": t,
                                        color: "#ffffff",
                                        fontSize: "30px",
                                        fontFamily: "FontAwesome",
                                        onClick: function() {
                                            return e.action && (0, m.I)({
                                                action: "" + e.action
                                            })
                                        },
                                        _hover: {
                                            textDecoration: "none"
                                        },
                                        children: e.icon
                                    }, "social-" + t)
                                }))
                            })]
                        })]
                    })]
                })
            };
            n(32809);

            function C(e) {
                var t = e.children,
                    n = e.seo,
                    o = e.headerBg,
                    i = void 0 === o ? "primary" : o,
                    a = e.bodyBg,
                    l = void 0 === a ? "transparent" : a,
                    f = e.noBanner,
                    d = void 0 !== f && f;
                return (0, c.BX)(c.HY, {
                    children: [(0, c.tZ)(u, Object.assign({}, n)), (0, c.tZ)(h, {
                        noBanner: d
                    }), (0, c.tZ)(s.Z, {
                        bg: i
                    }), (0, c.tZ)(r.xu, {
                        as: "main",
                        bg: l,
                        children: t
                    }), (0, c.tZ)(T, {})]
                })
            }
        },
        68031: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return o
                }
            });
            var r = n(67294),
                o = function(e, t) {
                    var n = (0, r.useState)((function() {
                            try {
                                var n = sessionStorage.getItem(e);
                                return n ? JSON.parse(n) : t
                            } catch (r) {
                                return t
                            }
                        })),
                        o = n[0],
                        i = n[1];
                    return (0, r.useEffect)((function() {
                        try {
                            sessionStorage.setItem(e, JSON.stringify(o))
                        } catch (t) {
                            console.log("sessionStorage not available")
                        }
                    }), [e, o]), [o, i]
                }
        }
    }
]);
//# sourceMappingURL=d45a4bc0bda7802ac97074d98681c029997cce18-dd30231159debbd39541.js.map