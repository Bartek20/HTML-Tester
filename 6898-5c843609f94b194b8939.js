"use strict";
(self.webpackChunkbitwarden_dotcom = self.webpackChunkbitwarden_dotcom || []).push([
    [6898], {
        86898: function(e, r, t) {
            t.r(r), t.d(r, {
                lazyHydrate: function() {
                    return c
                }
            });
            var o = t(70396),
                n = t(67294),
                a = t(73935),
                i = (t(51056), t(10186), ["image", "loading", "isLoading", "isLoaded", "toggleIsLoaded", "ref", "imgClassName", "imgStyle", "objectPosition", "backgroundColor", "objectFit"]);

            function c(e, r, t, c) {
                var d = e.image,
                    u = e.loading,
                    l = e.isLoading,
                    g = e.isLoaded,
                    s = e.toggleIsLoaded,
                    b = e.ref,
                    m = e.imgClassName,
                    h = e.imgStyle,
                    f = void 0 === h ? {} : h,
                    k = e.objectPosition,
                    y = e.backgroundColor,
                    C = e.objectFit,
                    w = void 0 === C ? "cover" : C,
                    L = (0, o._)(e, i),
                    j = d.width,
                    v = d.height,
                    p = d.layout,
                    N = d.images,
                    P = d.placeholder,
                    E = d.backgroundColor,
                    F = JSON.stringify(N);
                f = (0, o.a)({
                    objectFit: w,
                    objectPosition: k,
                    backgroundColor: y
                }, f);
                var R = n.createElement(o.L, {
                    layout: p,
                    width: j,
                    height: v
                }, n.createElement(o.P, (0, o.a)({}, (0, o.g)(P, g, p, j, v, E, w, k))), n.createElement(o.M, (0, o.a)({}, L, {
                    width: j,
                    height: v,
                    className: m
                }, (0, o.b)(l, g, N, u, s, F, b, f))));
                return r.current && (a.createRoot ? (t.current || (t.current = a.createRoot(r.current)), t.current.render(R)) : ((t.current || c.current ? a.render : a.hydrate)(R, r.current), t.current = !0)),
                    function() {
                        r.current && (a.createRoot ? t.current.render(null) : a.render(null, r.current))
                    }
            }
        }
    }
]);
//# sourceMappingURL=6898-5c843609f94b194b8939.js.map