"use strict";
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [558], {
        75937: function(e, t, r) {
            r.d(t, {
                Ee: function() {
                    return h
                },
                Ei: function() {
                    return m
                },
                d9: function() {
                    return s
                }
            });
            var n = r(45082),
                i = r(68316),
                o = r(67294),
                a = r(65247);

            function c() {
                return c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }

            function s(e) {
                var t = e.loading,
                    r = e.src,
                    n = e.srcSet,
                    i = e.onLoad,
                    c = e.onError,
                    l = e.crossOrigin,
                    s = e.sizes,
                    d = e.ignoreFallback,
                    u = (0, o.useState)("pending"),
                    p = u[0],
                    h = u[1];
                (0, o.useEffect)((function() {
                    h(r ? "loading" : "pending")
                }), [r]);
                var m = (0, o.useRef)(),
                    f = (0, o.useCallback)((function() {
                        if (r) {
                            g();
                            var e = new Image;
                            e.src = r, l && (e.crossOrigin = l), n && (e.srcset = n), s && (e.sizes = s), t && (e.loading = t), e.onload = function(e) {
                                g(), h("loaded"), null == i || i(e)
                            }, e.onerror = function(e) {
                                g(), h("failed"), null == c || c(e)
                            }, m.current = e
                        }
                    }), [r, l, n, s, i, c, t]),
                    g = function() {
                        m.current && (m.current.onload = null, m.current.onerror = null, m.current = null)
                    };
                return (0, a.a)((function() {
                    if (!d) return "loading" === p && f(),
                        function() {
                            g()
                        }
                }), [p, f, d]), d ? "loaded" : p
            }
            var d = ["htmlWidth", "htmlHeight", "alt"],
                u = ["fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"],
                p = o.forwardRef((function(e, t) {
                    var r = e.htmlWidth,
                        n = e.htmlHeight,
                        i = e.alt,
                        a = l(e, d);
                    return o.createElement("img", c({
                        width: r,
                        height: n,
                        ref: t,
                        alt: i
                    }, a))
                })),
                h = (0, n.Gp)((function(e, t) {
                    var r = e.fallbackSrc,
                        a = e.fallback,
                        d = e.src,
                        h = e.srcSet,
                        m = e.align,
                        f = e.fit,
                        g = e.loading,
                        Z = e.ignoreFallback,
                        x = e.crossOrigin,
                        y = l(e, u),
                        v = null != g || Z || void 0 === r && void 0 === a,
                        w = s(c({}, e, {
                            ignoreFallback: v
                        })),
                        b = c({
                            ref: t,
                            objectFit: f,
                            objectPosition: m
                        }, v ? y : (0, i.CE)(y, ["onError", "onLoad"]));
                    return "loaded" !== w ? a || o.createElement(n.m$.img, c({
                        as: p,
                        className: "chakra-image__placeholder",
                        src: r
                    }, b)) : o.createElement(n.m$.img, c({
                        as: p,
                        src: d,
                        srcSet: h,
                        crossOrigin: x,
                        loading: g,
                        className: "chakra-image"
                    }, b))
                })),
                m = (0, n.Gp)((function(e, t) {
                    return o.createElement(n.m$.img, c({
                        ref: t,
                        as: p,
                        className: "chakra-image"
                    }, e))
                }));
            i.Ts && (h.displayName = "Image")
        },
        31945: function(e, t, r) {
            r.d(t, {
                $X: function() {
                    return x
                },
                AR: function() {
                    return s
                },
                Ak: function() {
                    return B
                },
                Dd: function() {
                    return g
                },
                Ek: function() {
                    return C
                },
                Ft: function() {
                    return f
                },
                Gw: function() {
                    return h
                },
                J_: function() {
                    return v
                },
                Lw: function() {
                    return J
                },
                Mp: function() {
                    return k
                },
                T2: function() {
                    return O
                },
                XH: function() {
                    return d
                },
                _r: function() {
                    return Z
                },
                bt: function() {
                    return I
                },
                ce: function() {
                    return S
                },
                k1: function() {
                    return w
                },
                kC: function() {
                    return D
                },
                pW: function() {
                    return m
                },
                pt: function() {
                    return y
                },
                zq: function() {
                    return b
                }
            });
            var n = r(3013),
                i = r(31421),
                o = r(1597),
                a = r(53720),
                c = r(73223),
                l = r(88837),
                s = [{
                    features: ["Open source", "Zero-knowledge encryption", "Unlimited devices + syncing", "Unlimited device types"]
                }, {
                    features: ["Browser, Mobile, Desktop apps", "Unlimited vault items", "Store notes, credit cards, identities", "Bitwarden Send"]
                }, {
                    features: ["Secure password generator", "Basic two-step login", "Free cloud hosting", "Encrypted export"]
                }];

            function d() {
                return (0, l.BX)(n.xv, {
                    lineHeight: "1.25",
                    p: "1.5rem",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    alignSelf: "center",
                    children: ["For organizations with hundreds to thousands of users, please contact", " ", (0, l.tZ)(o.Link, {
                        to: c.Z.contactSales,
                        children: (0, l.tZ)(n.xu, {
                            as: "span",
                            lineHeight: "1.25",
                            color: "primary",
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            _hover: {
                                color: "secondary"
                            },
                            children: "Sales"
                        })
                    }), "."]
                })
            }

            function u() {
                return (0, l.tZ)("span", {
                    children: (0, l.tZ)(a.Z, {
                        icon: "",
                        color: "#175ddc",
                        cursor: "pointer"
                    })
                })
            }
            var p = function(e, t) {
                    return (0, l.BX)(l.HY, {
                        children: [(0, l.tZ)(n.xv, {
                            children: e
                        }), (0, l.tZ)(o.Link, {
                            href: t,
                            color: "primary",
                            _hover: {
                                color: "secondary"
                            },
                            children: "Get Started"
                        })]
                    })
                },
                h = ["Features for Business", "Teams", "Enterprise"],
                m = ["Features for You", "Free", "Premium", "Free Org", "Families Org"],
                f = ["Pricing", p("$3/User/Month", c.Z.getStartedTeams), p("$5/User/Month", c.Z.getStartedEnterprise)],
                g = ["Pricing", p("$0", c.Z.getStarted), p("$10/Year", c.Z.getStartedPremiumPurchase), p("$0", c.Z.getStartedFreeOrg), p("$40/Year", c.Z.getStartedFamilies)],
                Z = [
                    ["Bitwarden Core Features", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb1"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb2")],
                    ["Premium Features for Users", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb3"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb4")],
                    ["Unlimited Users", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb5"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb6")],
                    ["Unlimited Sharing Through Collections", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb7"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb8")],
                    ["API Access", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb9"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb10")],
                    ["Directory Connector", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb11"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb12")],
                    ["Event and Audit Logs", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb13"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb14")],
                    ["User Groups", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb15"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb16")],
                    ["Custom Roles", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb18")],
                    ["Enterprise Policies", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb19")],
                    ["SSO Integration", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb20")],
                    ["Free Families Plan for Users", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb20")],
                    ["Admin Password Reset", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb21")],
                    ["Self-host Option", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb23")]
                ],
                x = [
                    ["Bitwarden Send for direct encrypted sharing", "Text and Files", "Text and Files"],
                    ["Enhanced Two-step Login", "YubiKey, FIDO2, Duo", "YubiKey, FIDO2, Duo"],
                    ["Encrypted File Attachments", "1GB personal and 1GB for Organizational items", "1GB personal and 1GB for Organizational items"],
                    ["Bitwarden Authenticator", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb7"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb8")],
                    ["Vault Health Reports", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb9"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb10")],
                    ["Personal Emergency Access", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb11"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb12")],
                    ["Priority Support", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb13"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcb14")]
                ],
                y = [
                    ["Bitwarden Core Features", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp1"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp2"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp3"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp4")],
                    ["Max Users", "1", "1", "2", "6"],
                    ["Sharing through collections", "-", "-", "Max 2 Collections", "Unlimited Collections"],
                    ["Bitwarden Send for direct encrypted sharing", "Text Only", "Text and Files", "Text Only", "Text and Files"],
                    ["Two-step Login", "Email, Authentication App", "YubiKey, FIDO2, Duo, Email, Authentication app", "Email, Authentication App", "YubiKey, FIDO2, Duo, Email, Authentication app"],
                    ["Encrypted File Attachments", "-", "1GB Personal", "-", "1GB Personal and 1GB for Organizational Items"],
                    ["Bitwarden Authenticator (TOTP)", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp10"), "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp11")],
                    ["Vault Health Reports", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp12"), "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp13")],
                    ["Emergency Access", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp14"), "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp15")],
                    ["Priority Support", "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp16"), "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp17")],
                    ["Self-host Options", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp18"), (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp19"), "-", (0, l.tZ)(i.JO, {
                        as: u
                    }, "ptcp20")]
                ],
                v = ["Task", "Reference Material"],
                w = ["Action Items", "Description"],
                b = [
                    ["Review/Attend a Bitwarden weekly demo", (0, l.tZ)(o.Link, {
                        to: c.Z.weekly,
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Weekly Demo Registration ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Review partner program overview", (0, l.tZ)(o.Link, {
                        to: c.Z.contact,
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Contact Sales for MSP Pricing ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Watch the Bitwarden for MSPs webcast", (0, l.tZ)(o.Link, {
                        href: "https://www.crowdcast.io/e/bitwardenformsps/register",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["MSP Webcast ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })]
                ],
                O = [
                    ["Sign up for a free trial", (0, l.tZ)(o.Link, {
                        to: c.Z.getStartedEnterprise,
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Start a free trial ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Review the features within your Personal Vault", (0, l.tZ)(o.Link, {
                        to: "/help/article/getting-started-webvault/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Get Started with the Web Vault ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Understand Organizations", (0, l.tZ)(o.Link, {
                        href: "/help/article/about-organizations/#what-are-organizations",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["What are Organizations ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Importing vault items", (0, l.tZ)(o.Link, {
                        href: "/help/article/import-data/",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Import Vault Items ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Installing Bitwarden across your devices", (0, l.tZ)(o.Link, {
                        href: c.Z.download,
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Download Bitwarden ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Review item types", (0, l.tZ)(o.Link, {
                        href: "/help/article/managing-items/#manage-vault-items",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Vault Types ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Item management", (0, l.tZ)(o.Link, {
                        href: "/help/article/managing-items/#manage-vault-items",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Manage Vault Items ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Using Bitwarden Send", (0, l.tZ)(o.Link, {
                        href: "/help/article/about-send/",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["About Bitwarden Send ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })]
                ],
                S = [
                    ["Understand user types and management", (0, l.tZ)(o.Link, {
                        to: "/help/article/managing-users/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["User Management ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Understand collections", (0, l.tZ)(o.Link, {
                        to: "/help/article/about-collections/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Collections ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Understand enterprise policies", (0, l.tZ)(o.Link, {
                        href: "/help/article/policies/",
                        color: "primary",
                        textDecoration: "underline",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Enterprise Policies ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })]
                ],
                B = [
                    ["Ensure the Provider Portal has been enabled", (0, l.tZ)(o.Link, {
                        to: "/help/article/providers/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Provider Portal Overview ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Review the Provider Portal user types and access control", (0, l.tZ)(o.Link, {
                        to: "/help/article/providers/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Provider User Type ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Provider Portal user management", (0, l.tZ)(o.Link, {
                        to: "/help/article/providers/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Manage Provider Portal Access ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Provider Portal client management", (0, l.tZ)(o.Link, {
                        to: "/help/article/manage-client-orgs/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Client Management ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })],
                    ["Create new client organizations", (0, l.tZ)(o.Link, {
                        to: "/help/article/client-org-setup/",
                        color: "primary",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Create a new client ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    })]
                ],
                k = [
                    ["Assign an executive sponsor", "Identify a client champion. This should be a C-level or VP-level client executive ready to drive Bitwarden adoption."],
                    ["Make Bitwarden mandatory", "Build Bitwarden into your services offering."],
                    ["Employ a training strategy", "Based on user needs, provide training and documentation for different skill levels."],
                    ["Integrate with your user directory", "By integrating with your existing directory, every employee can be automatically onboarded to Bitwarden when they join the company, as well as deprovisioned if they leave."]
                ],
                C = [
                    ["Schedule and record live training", "Where and when? Onsite or web-based lunch and learning? Record the live training to share later. Post recorded training where employees can find them, so they can review as needed."],
                    ["Leverage existing Bitwarden materials", (0, l.BX)(n.QI, {
                        children: [(0, l.tZ)(n.HC, {
                            children: "Tutorial videos"
                        }), (0, l.tZ)(n.HC, {
                            children: "FAQs"
                        }), (0, l.tZ)(n.HC, {
                            children: "Support resources"
                        }), (0, l.tZ)(n.HC, {
                            children: "Recorded trainings"
                        }), (0, l.tZ)(n.HC, {
                            children: "Handouts"
                        })]
                    })],
                    ["Incorporate materials in all email communications", "Remind employees where they can find handouts and support resources to help them get started with Bitwarden"]
                ],
                J = [
                    [(0, l.tZ)(o.Link, {
                        to: "https://vimeo.com/showcase/8692945/video/579562110",
                        color: "primary",
                        target: "_blank",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Bitwarden for All ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    }), "Bitwarden training for general end users."],
                    [(0, l.tZ)(o.Link, {
                        to: "https://vimeo.com/579562355",
                        color: "primary",
                        target: "_blank",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Bitwarden Power User Training ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    }), "Bitwarden training for more advanced users who want to take advantage of extra features."],
                    [(0, l.tZ)(o.Link, {
                        to: "https://vimeo.com/showcase/8692945/video/579562715",
                        color: "primary",
                        target: "_blank",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Bitwarden Training for Admins ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    }), "Bitwarden training for administrators."],
                    [(0, l.tZ)(o.Link, {
                        to: "https://www.crowdcast.io/e/employee-security-training/register",
                        color: "primary",
                        target: "_blank",
                        children: (0, l.tZ)(n.xu, {
                            color: "primary",
                            d: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            _hover: {
                                textDecoration: "none",
                                color: "#1252a3"
                            },
                            children: (0, l.BX)(n.xv, {
                                children: ["Security Training ", (0, l.tZ)(a.Z, {
                                    icon: "",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                })]
                            })
                        })
                    }), (0, l.BX)(n.xu, {
                        children: [(0, l.tZ)(n.xv, {
                            children: "Join the Bitwarden team for an introductory session on the basics of employee security training. Security Training This session covers:"
                        }), (0, l.BX)(n.QI, {
                            children: [(0, l.tZ)(n.HC, {
                                children: "Why it is important for organizations to clearly communicate security and compliance policies"
                            }), (0, l.tZ)(n.HC, {
                                children: "Social engineering and what to look out for"
                            }), (0, l.tZ)(n.HC, {
                                children: "Security across email, web, and mobile devices"
                            })]
                        })]
                    })]
                ],
                D = function(e) {
                    return e[0].toUpperCase() + e.slice(1)
                };

            function I(e, t, r) {
                return e.split(t, r).join(t).length
            }
        }
    }
]);
//# sourceMappingURL=93f4f48b4b1f009fed28a110065bef907441ec84-32e695cb16d01f1c6349.js.map