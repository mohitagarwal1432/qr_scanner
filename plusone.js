var gapi = (window.gapi = window.gapi || {});
gapi._bs = new Date().getTime();
(function () {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var m = this || self,
        aa = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || ("number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))) return "array";
                    if ("[object Function]" == c || ("undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function";
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b;
        },
        ba = function (a, b, c) {
            return a.call.apply(a.bind, arguments);
        },
        ca = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e);
                };
            }
            return function () {
                return a.apply(b, arguments);
            };
        },
        da = function (a, b, c) {
            da = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
            return da.apply(null, arguments);
        },
        ha = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c();
            a.prototype.constructor = a;
            a.C = function (d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g);
            };
        };
    var q = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, q);
        else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    };
    ha(q, Error);
    q.prototype.name = "CustomError";
    var ia = function (a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        q.call(this, c + a[d]);
    };
    ha(ia, q);
    ia.prototype.name = "AssertionError";
    var ja = function (a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d;
            } else a && ((e += ": " + a), (f = b));
            throw new ia("" + e, f || []);
        },
        ka = function (a, b, c) {
            a || ja("", null, b, Array.prototype.slice.call(arguments, 2));
            return a;
        },
        la = function (a, b) {
            throw new ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        ma = function (a, b, c) {
            "string" !== typeof a && ja("Expected string but got %s: %s.", [aa(a), a], b, Array.prototype.slice.call(arguments, 2));
        };
    var na = function (a, b) {
        a: {
            try {
                var c = a && a.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || m;
                if (d.Element && d.Location) {
                    var e = d;
                    break a;
                }
            } catch (g) {}
            e = null;
        }
        if (e && "undefined" != typeof e[b] && (!a || (!(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element)))) {
            e = typeof a;
            if (("object" == e && null != a) || "function" == e)
                try {
                    var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
                } catch (g) {
                    f = "<object could not be stringified>";
                }
            else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            la("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
        }
        return a;
    };
    var t = function (a, b) {
        this.T = (a === oa && b) || "";
        this.ga = pa;
    };
    t.prototype.w = !0;
    t.prototype.v = function () {
        return this.T;
    };
    t.prototype.toString = function () {
        return "Const{" + this.T + "}";
    };
    var qa = function (a) {
            if (a instanceof t && a.constructor === t && a.ga === pa) return a.T;
            la("expected object of type Const, got '" + a + "'");
            return "type_error:Const";
        },
        pa = {},
        oa = {};
    var v = function () {
        this.N = "";
    };
    v.prototype.w = !0;
    v.prototype.v = function () {
        return this.N.toString();
    };
    v.prototype.toString = function () {
        return "SafeScript{" + this.N + "}";
    };
    v.prototype.i = function (a) {
        this.N = a;
        return this;
    };
    new v().i("");
    var w = function (a, b) {
        this.R = (a === ra && b) || "";
        this.fa = sa;
    };
    w.prototype.w = !0;
    w.prototype.v = function () {
        return this.R.toString();
    };
    w.prototype.toString = function () {
        return "SafeUrl{" + this.R + "}";
    };
    var ta = function (a) {
            if (a instanceof w && a.constructor === w && a.fa === sa) return a.R;
            la("expected object of type SafeUrl, got '" + a + "' of type " + aa(a));
            return "type_error:SafeUrl";
        },
        ua = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        va = function (a) {
            if (a instanceof w) return a;
            a = "object" == typeof a && a.w ? a.v() : String(a);
            ka(ua.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
            return new w(ra, a);
        },
        sa = {},
        ra = {};
    var x = function () {
        this.P = "";
    };
    x.prototype.w = !0;
    x.prototype.v = function () {
        return this.P;
    };
    x.prototype.toString = function () {
        return "SafeStyle{" + this.P + "}";
    };
    x.prototype.i = function (a) {
        this.P = a;
        return this;
    };
    new x().i("");
    var wa = function () {
        this.O = "";
    };
    wa.prototype.w = !0;
    wa.prototype.v = function () {
        return this.O;
    };
    wa.prototype.toString = function () {
        return "SafeStyleSheet{" + this.O + "}";
    };
    wa.prototype.i = function (a) {
        this.O = a;
        return this;
    };
    new wa().i("");
    var z = function () {
        this.G = "";
        this.ea = xa;
    };
    z.prototype.w = !0;
    z.prototype.v = function () {
        return this.G.toString();
    };
    z.prototype.toString = function () {
        return "SafeHtml{" + this.G + "}";
    };
    var za = function (a) {
            if (a instanceof z && a.constructor === z && a.ea === xa) return a.G;
            la("expected object of type SafeHtml, got '" + a + "' of type " + aa(a));
            return "type_error:SafeHtml";
        },
        xa = {};
    z.prototype.i = function (a) {
        this.G = a;
        return this;
    };
    new z().i("<!DOCTYPE html>");
    var Aa = new z().i("");
    new z().i("<br>");
    var Ba = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
        Ca = (function (a) {
            var b = !1,
                c;
            return function () {
                b || ((c = a()), (b = !0));
                return c;
            };
        })(function () {
            if ("undefined" === typeof document) return !1;
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild) return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = za(Aa);
            return !b.parentElement;
        }); /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var A = window,
        B = document,
        Da = A.location,
        Ea = function () {},
        Fa = /\[native code\]/,
        C = function (a, b, c) {
            return (a[b] = a[b] || c);
        },
        Ga = function (a) {
            for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
            return -1;
        },
        Ha = function (a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e;
            }
            return b;
        },
        Ia = /&/g,
        Ja = /</g,
        Ka = />/g,
        La = /"/g,
        Ma = /'/g,
        Na = function (a) {
            return String(a).replace(Ia, "&amp;").replace(Ja, "&lt;").replace(Ka, "&gt;").replace(La, "&quot;").replace(Ma, "&#39;");
        },
        D = function () {
            var a;
            if ((a = Object.create) && Fa.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0;
            }
            return a;
        },
        E = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        },
        Oa = function (a) {
            if (Fa.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) E(a, c) && b.push(c);
            return b;
        },
        F = function (a, b) {
            a = a || {};
            for (var c in a) E(a, c) && (b[c] = a[c]);
        },
        Pa = function (a) {
            return function () {
                A.setTimeout(a, 0);
            };
        },
        H = function (a, b) {
            if (!a) throw Error(b || "");
        },
        I = C(A, "gapi", {});
    var J = function (a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if ((a = a && (d.exec(a) || b.exec(a))))
                try {
                    c = decodeURIComponent(a[2]);
                } catch (e) {}
            return c;
        },
        Ra = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        Sa = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        Ta = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g"),
        Ua = /%([a-f]|[0-9a-fA-F][a-f])/g,
        Va = /^(https?|ftp|file|chrome-extension):$/i,
        Wa = function (a) {
            a = String(a);
            a = a
                .replace(Sa, function (e) {
                    try {
                        return encodeURIComponent(e);
                    } catch (f) {
                        return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"));
                    }
                })
                .replace(Ta, function (e) {
                    return e.replace(/%/g, "%25");
                })
                .replace(Ua, function (e) {
                    return e.toUpperCase();
                });
            a = a.match(Ra) || [];
            var b = D(),
                c = function (e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D");
                },
                d = !!(a[1] || "").match(Va);
            b.C = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function (e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"));
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.g = a[7] ? [d(a[7])] : [];
            return b;
        },
        Xa = function (a) {
            return a.C + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.g.length ? "#" + a.g.join("&") : "");
        },
        Ya = function (a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (E(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e));
                    }
            return c;
        },
        Za = function (a, b, c, d) {
            a = Wa(a);
            a.query.push.apply(a.query, Ya(b, d));
            a.g.push.apply(a.g, Ya(c, d));
            return Xa(a);
        },
        $a = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        ab = function (a, b) {
            var c = Wa(b);
            b = c.C;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            var d = "";
            2e3 < b.length && ((d = b), (b = b.substr(0, 2e3)), (b = b.replace($a, "")), (d = d.substr(b.length)));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = Wa(b);
            b = c.C;
            c.query.length && (b += "?" + c.query.join(""));
            c.g.length && (b += "#" + c.g.join(""));
            b = new w(ra, b);
            na(a, "HTMLAnchorElement");
            b = b instanceof w ? b : va(b);
            a.href = ta(b);
            e.appendChild(a);
            b = e.innerHTML;
            c = new t(oa, "Assignment to self.");
            ma(qa(c), "must provide justification");
            ka(!/^[\s\xa0]*$/.test(qa(c)), "must provide non-empty justification");
            b = new z().i(b);
            if (Ba[e.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".");
            if (Ca()) for (; e.lastChild; ) e.removeChild(e.lastChild);
            e.innerHTML = za(b);
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = Wa(b + d);
            d = c.C;
            c.query.length && (d += "?" + c.query.join(""));
            c.g.length && (d += "#" + c.g.join(""));
            return d;
        },
        bb = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var cb = function (a, b, c, d) {
            if (A[c + "EventListener"]) A[c + "EventListener"](a, b, !1);
            else if (A[d + "tachEvent"]) A[d + "tachEvent"]("on" + a, b);
        },
        db = function () {
            var a = B.readyState;
            return "complete" === a || ("interactive" === a && -1 == navigator.userAgent.indexOf("MSIE"));
        },
        gb = function (a) {
            var b = eb;
            if (!db())
                try {
                    b();
                } catch (c) {}
            fb(a);
        },
        fb = function (a) {
            if (db()) a();
            else {
                var b = !1,
                    c = function () {
                        if (!b) return (b = !0), a.apply(this, arguments);
                    };
                A.addEventListener
                    ? (A.addEventListener("load", c, !1), A.addEventListener("DOMContentLoaded", c, !1))
                    : A.attachEvent &&
                      (A.attachEvent("onreadystatechange", function () {
                          db() && c.apply(this, arguments);
                      }),
                      A.attachEvent("onload", c));
            }
        },
        hb = function (a) {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
        },
        ib = { button: !0, div: !0, span: !0 };
    var L;
    L = C(A, "___jsl", D());
    C(L, "I", 0);
    C(L, "hel", 10);
    var jb = function (a) {
            return L.dpo ? L.h : J(a, "jsh", L.h);
        },
        kb = function (a) {
            var b = C(L, "sws", []);
            b.push.apply(b, a);
        },
        lb = function (a) {
            return C(L, "watt", D())[a];
        },
        mb = function (a) {
            var b = C(L, "PQ", []);
            L.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (
                    var d = 0,
                        e = function () {
                            ++d === c && a();
                        },
                        f = 0;
                    f < c;
                    f++
                )
                    b[f](e);
        },
        nb = function (a) {
            return C(C(L, "H", D()), a, D());
        };
    var ob = C(L, "perf", D()),
        pb = C(ob, "g", D()),
        qb = C(ob, "i", D());
    C(ob, "r", []);
    D();
    D();
    var rb = function (a, b, c) {
            var d = ob.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
        },
        N = function (a, b, c) {
            pb[a] = (!b && pb[a]) || c || new Date().getTime();
            rb(a);
        },
        tb = function (a, b, c) {
            b && 0 < b.length && ((b = sb(b)), c && 0 < c.length && (b += "___" + sb(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), (c = b), (b = C(qb, "_p", D())), (C(b, c, D())[a] = new Date().getTime()), rb(a, "_p", c));
        },
        sb = function (a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_");
        };
    var ub = D(),
        vb = [],
        O = function (a) {
            throw Error("Bad hint" + (a ? ": " + a : ""));
        };
    vb.push([
        "jsl",
        function (a) {
            for (var b in a)
                if (E(a, b)) {
                    var c = a[b];
                    "object" == typeof c ? (L[b] = C(L, b, []).concat(c)) : C(L, b, c);
                }
            if ((b = a.u)) (a = C(L, "us", [])), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]);
        },
    ]);
    var wb = /^(\/[a-zA-Z0-9_\-]+)+$/,
        xb = [/\/amp\//, /\/amp$/, /^\/amp$/],
        yb = /^[a-zA-Z0-9\-_\.,!]+$/,
        zb = /^gapi\.loaded_[0-9]+$/,
        Ab = /^[a-zA-Z0-9,._-]+$/,
        Eb = function (a, b, c, d) {
            var e = a.split(";"),
                f = e.shift(),
                g = ub[f],
                h = null;
            g ? (h = g(e, b, c, d)) : O("no hint processor for: " + f);
            h || O("failed to generate load url");
            b = h;
            c = b.match(Bb);
            ((d = b.match(Cb)) && 1 === d.length && Db.test(b) && c && 1 === c.length) || O("failed sanity: " + a);
            return h;
        },
        Hb = function (a, b, c, d) {
            a = Fb(a);
            zb.test(c) || O("invalid_callback");
            b = Gb(b);
            d = d && d.length ? Gb(d) : null;
            var e = function (f) {
                return encodeURIComponent(f).replace(/%2C/g, ",");
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.V ? "/am=" + e(a.V) : "", a.ba ? "/rs=" + e(a.ba) : "", a.da ? "/t=" + e(a.da) : "", "/cb=", e(c)].join("");
        },
        Fb = function (a) {
            "/" !== a.charAt(0) && O("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length; ) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) O("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break;
                }
                c.push(a);
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    h = decodeURIComponent(f[1]);
                2 == f.length && g && h && (a[g] = a[g] || h);
            }
            b = "/" + c.join("/");
            wb.test(b) || O("invalid_prefix");
            c = 0;
            for (d = xb.length; c < d; ++c) xb[c].test(b) && O("invalid_prefix");
            c = Ib(a, "k", !0);
            d = Ib(a, "am");
            e = Ib(a, "rs");
            a = Ib(a, "t");
            return { pathPrefix: b, version: c, V: d, ba: e, da: a };
        },
        Gb = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                Ab.test(e) && b.push(e);
            }
            return b.join(",");
        },
        Ib = function (a, b, c) {
            a = a[b];
            !a && c && O("missing: " + b);
            if (a) {
                if (yb.test(a)) return a;
                O("invalid: " + b);
            }
            return null;
        },
        Db = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Cb = /\/cb=/g,
        Bb = /\/\//g,
        Jb = function () {
            var a = jb(Da.href);
            if (!a) throw Error("Bad hint");
            return a;
        };
    ub.m = function (a, b, c, d) {
        (a = a[0]) || O("missing_hint");
        return "https://apis.google.com" + Hb(a, b, c, d);
    };
    var Kb = decodeURI("%73cript"),
        Lb = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Mb = function (a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > Ga.call(b, e) && c.push(e);
            }
            return c;
        },
        Nb = function () {
            var a = L.nonce;
            return void 0 !== a ? (a && a === String(a) && a.match(Lb) ? a : (L.nonce = null)) : B.querySelector ? ((a = B.querySelector("script[nonce]")) ? ((a = a.nonce || a.getAttribute("nonce") || ""), a && a === String(a) && a.match(Lb) ? (L.nonce = a) : (L.nonce = null)) : null) : null;
        },
        Pb = function (a) {
            if ("loading" != B.readyState) Ob(a);
            else {
                var b = Nb(),
                    c = "";
                null !== b && (c = ' nonce="' + b + '"');
                a = "<" + Kb + ' src="' + encodeURI(a) + '"' + c + "></" + Kb + ">";
                B.write(a);
            }
        },
        Ob = function (a) {
            var b = B.createElement(Kb);
            b.setAttribute("src", a);
            a = Nb();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = B.getElementsByTagName(Kb)[0]) ? a.parentNode.insertBefore(b, a) : (B.head || B.body || B.documentElement).appendChild(b);
        },
        Qb = function (a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < vb.length; d++) {
                    var e = vb[d][0],
                        f = vb[d][1];
                    f && E(c, e) && f(c[e], a, b);
                }
        },
        Sb = function (a, b, c) {
            Rb(function () {
                var d = b === jb(Da.href) ? C(I, "_", D()) : D();
                d = C(nb(b), "_", d);
                a(d);
            }, c);
        },
        Ub = function (a, b) {
            var c = b || {};
            "function" == typeof b && ((c = {}), (c.callback = b));
            Qb(a, c);
            b = a ? a.split(":") : [];
            var d = c.h || Jb(),
                e = C(L, "ah", D());
            if (e["::"] && b.length) {
                a = [];
                for (var f = null; (f = b.shift()); ) {
                    var g = f.split(".");
                    g = e[f] || e[(g[1] && "ns:" + g[0]) || ""] || d;
                    var h = (a.length && a[a.length - 1]) || null,
                        k = h;
                    (h && h.hint == g) || ((k = { hint: g, Y: [] }), a.push(k));
                    k.Y.push(f);
                }
                var l = a.length;
                if (1 < l) {
                    var n = c.callback;
                    n &&
                        (c.callback = function () {
                            0 == --l && n();
                        });
                }
                for (; (b = a.shift()); ) Tb(b.Y, c, b.hint);
            } else Tb(b || [], c, d);
        },
        Tb = function (a, b, c) {
            a = Ha(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                h = b.onerror,
                k = void 0;
            "function" == typeof h && (k = h);
            var l = null,
                n = !1;
            if ((f && !g) || (!f && g)) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            h = C(nb(c), "r", []).sort();
            var p = C(nb(c), "L", []).sort(),
                r = [].concat(h),
                u = function (M, ea) {
                    if (n) return 0;
                    A.clearTimeout(l);
                    p.push.apply(p, y);
                    var fa = ((I || {}).config || {}).update;
                    fa ? fa(e) : e && C(L, "cu", []).push(e);
                    if (ea) {
                        tb("me0", M, r);
                        try {
                            Sb(ea, c, k);
                        } finally {
                            tb("me1", M, r);
                        }
                    }
                    return 1;
                };
            0 < f &&
                (l = A.setTimeout(function () {
                    n = !0;
                    g();
                }, f));
            var y = Mb(a, p);
            if (y.length) {
                y = Mb(a, h);
                var G = C(L, "CP", []),
                    K = G.length;
                G[K] = function (M) {
                    if (!M) return 0;
                    tb("ml1", y, r);
                    var ea = function (ya) {
                            G[K] = null;
                            u(y, M) &&
                                mb(function () {
                                    d && d();
                                    ya();
                                });
                        },
                        fa = function () {
                            var ya = G[K + 1];
                            ya && ya();
                        };
                    0 < K && G[K - 1]
                        ? (G[K] = function () {
                              ea(fa);
                          })
                        : ea(fa);
                };
                if (y.length) {
                    var Qa = "loaded_" + L.I++;
                    I[Qa] = function (M) {
                        G[K](M);
                        I[Qa] = null;
                    };
                    a = Eb(c, y, "gapi." + Qa, h);
                    h.push.apply(h, y);
                    tb("ml0", y, r);
                    b.sync || A.___gapisync ? Pb(a) : Ob(a);
                } else G[K](Ea);
            } else u(y) && d && d();
        };
    var Rb = function (a, b) {
        if (L.hee && 0 < L.hel)
            try {
                return a();
            } catch (c) {
                b && b(c),
                    L.hel--,
                    Ub("debug_error", function () {
                        try {
                            window.___jsl.hefn(c);
                        } catch (d) {
                            throw c;
                        }
                    });
            }
        else
            try {
                return a();
            } catch (c) {
                throw (b && b(c), c);
            }
    };
    I.load = function (a, b) {
        return Rb(function () {
            return Ub(a, b);
        });
    };
    var Vb = function (a) {
            var b = (window.___jsl = window.___jsl || {});
            b[a] = b[a] || [];
            return b[a];
        },
        Wb = function (a) {
            var b = (window.___jsl = window.___jsl || {});
            b.cfg = (!a && b.cfg) || {};
            return b.cfg;
        },
        Xb = function (a) {
            return "object" === typeof a && /\[native code\]/.test(a.push);
        },
        P = function (a, b, c) {
            if (b && "object" === typeof b) for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || (c && "___goc" === d && "undefined" === typeof b[d]) || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !Xb(a[d]) && !Xb(b[d]) ? P(a[d], b[d]) : b[d] && "object" === typeof b[d] ? ((a[d] = Xb(b[d]) ? [] : {}), P(a[d], b[d])) : (a[d] = b[d]));
        },
        Yb = function (a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1); ) a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a);
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = new Function("return (" + a + "\n)")();
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = new Function("return ({" + a + "\n})")();
                } catch (c) {}
                return "object" === typeof b ? b : {};
            }
        },
        Zb = function (a, b) {
            var c = { ___goc: void 0 };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            P(c, b);
            a.push(c);
        },
        $b = function (a) {
            Wb(!0);
            var b = window.___gcfg,
                c = Vb("cu"),
                d = window.___gu;
            b && b !== d && (Zb(c, b), (window.___gu = b));
            b = Vb("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, Vb("us"));
            for (var g = 0; g < e.length; ++g) for (var h = e[g], k = 0; k < f.length; ++k) h.src && 0 == h.src.indexOf(f[k]) && d.push(h);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? ((g = f.nodeType), (f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "")) : (f = void 0), (f = Yb(f)) && b.push(f));
            a && Zb(c, a);
            d = Vb("cd");
            a = 0;
            for (b = d.length; a < b; ++a) P(Wb(), d[a], !0);
            d = Vb("ci");
            a = 0;
            for (b = d.length; a < b; ++a) P(Wb(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) P(Wb(), c[a], !0);
        },
        Q = function (a) {
            var b = Wb();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0;
        },
        ac = function (a, b) {
            var c;
            if ("string" === typeof a) {
                var d = (c = {});
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g;
                }
                d[a[e]] = b;
            } else c = a;
            $b(c);
        };
    var bc = function () {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), C(L, "ci", []).push(a), (window.__GOOGLEAPIS = void 0));
    };
    var cc = { callback: 1, clientid: 1, cookiepolicy: 1, openidrealm: -1, includegrantedscopes: -1, requestvisibleactions: 1, scope: 1 },
        dc = !1,
        ec = D(),
        fc = function () {
            if (!dc) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        c = c.substring(14);
                        var d = a[b].content;
                        cc[c] && d && (ec[c] = d);
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in cc) 0 < cc[e] && (b = J(a, e, "")) && (ec[e] = b);
                }
                dc = !0;
            }
            e = D();
            F(ec, e);
            return e;
        },
        gc = function (a) {
            return !!(a.clientid && a.scope && a.callback);
        };
    var hc = window.console,
        ic = function (a) {
            hc && hc.log && hc.log(a);
        };
    var jc = function () {
            return !!L.oa;
        },
        kc = function () {};
    var R = C(L, "rw", D()),
        lc = function (a) {
            for (var b in R) a(R[b]);
        },
        mc = function (a, b) {
            (a = R[a]) && a.state < b && (a.state = b);
        };
    var nc;
    var oc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        pc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        qc = function (a) {
            var b = Q("googleapis.config/sessionIndex");
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && (b = window.__X_GOOG_AUTHUSER);
            "string" === typeof b && 254 < b.length && (b = null);
            if (null == b) {
                var c = window.google;
                c && (b = c.authuser);
            }
            "string" === typeof b && 254 < b.length && (b = null);
            null == b && ((a = a || window.location.href), (b = J(a, "authuser") || null), null == b && (b = (b = a.match(oc)) ? b[1] : null));
            if (null == b) return null;
            b = String(b);
            254 < b.length && (b = null);
            return b;
        },
        rc = function (a) {
            var b = Q("googleapis.config/sessionDelegate");
            "string" === typeof b && 21 < b.length && (b = null);
            null == b && (b = (a = (a || window.location.href).match(pc)) ? a[1] : null);
            if (null == b) return null;
            b = String(b);
            21 < b.length && (b = null);
            return b;
        };
    var sc,
        S,
        T = void 0,
        U = function (a) {
            try {
                return m.JSON.parse.call(m.JSON, a);
            } catch (b) {
                return !1;
            }
        },
        V = function (a) {
            return Object.prototype.toString.call(a);
        },
        tc = V(0),
        uc = V(new Date(0)),
        vc = V(!0),
        wc = V(""),
        xc = V({}),
        yc = V([]),
        W = function (a, b) {
            if (b) for (var c = 0, d = b.length; c < d; ++c) if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = V(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || ((e !== yc || (a.constructor !== Array && a.constructor !== Object)) && (e !== xc || (a.constructor !== Array && a.constructor !== Object)) && e !== wc && e !== tc && e !== vc && e !== uc))) return W(a.toJSON.call(a), c);
                if (null == a) b[b.length] = "null";
                else if (e === tc) (a = Number(a)), isNaN(a) || isNaN(a - a) ? (a = "null") : -0 === a && 0 > 1 / a && (a = "-0"), (b[b.length] = String(a));
                else if (e === vc) b[b.length] = String(!!Number(a));
                else {
                    if (e === uc) return W(a.toISOString.call(a), c);
                    if (e === yc && V(a.length) === tc) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f && (b[b.length] = ","), (b[b.length] = W(a[f], c) || "null");
                        b[b.length] = "]";
                    } else if (e == wc && V(a.length) === tc) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f)
                            (d = String.prototype.charAt.call(a, f)), (e = String.prototype.charCodeAt.call(a, f)), (b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd");
                        b[b.length] = '"';
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a, f) && ((e = W(a[f], c)), void 0 !== e && (d++ && (b[b.length] = ","), (b[b.length] = W(f)), (b[b.length] = ":"), (b[b.length] = e)));
                        b[b.length] = "}";
                    } else return;
                }
                return b.join("");
            }
        },
        zc = /[\0-\x07\x0b\x0e-\x1f]/,
        Ac = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        Bc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        Cc = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        Dc = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        Ec = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        Fc = /[ \t\n\r]+/g,
        Gc = /[^"]:/,
        Hc = /""/g,
        Ic = /true|false|null/g,
        Jc = /00/,
        Kc = /[\{]([^0\}]|0[^:])/,
        Lc = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        Mc = /[^\[,:][\[\{]/,
        Nc = /^(\{|\}|\[|\]|,|:|0)+/,
        Oc = /\u2028/g,
        Pc = /\u2029/g,
        Qc = function (a) {
            a = String(a);
            if (zc.test(a) || Ac.test(a) || Bc.test(a) || Cc.test(a)) return !1;
            var b = a.replace(Dc, '""');
            b = b.replace(Ec, "0");
            b = b.replace(Fc, "");
            if (Gc.test(b)) return !1;
            b = b.replace(Hc, "0");
            b = b.replace(Ic, "0");
            if (Jc.test(b) || Kc.test(b) || Lc.test(b) || Mc.test(b) || !b || (b = b.replace(Nc, ""))) return !1;
            a = a.replace(Oc, "\\u2028").replace(Pc, "\\u2029");
            b = void 0;
            try {
                b = T ? [U(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)");
            } catch (c) {
                return !1;
            }
            return b && 1 === b.length ? b[0] : !1;
        },
        Rc = function () {
            var a = ((m.document || {}).scripts || []).length;
            if ((void 0 === sc || void 0 === T || S !== a) && -1 !== S) {
                sc = T = !1;
                S = -1;
                try {
                    try {
                        T = !!m.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === m.JSON.stringify.call(m.JSON, { a: [3, !0, new Date(0)], c: function () {} }) && !0 === U("true") && 3 === U('[{"a":3}]')[0].a;
                    } catch (b) {}
                    sc = T && !U("[00]") && !U('"\u0007"') && !U('"\\0"') && !U('"\\v"');
                } finally {
                    S = a;
                }
            }
        },
        Sc = function (a) {
            if (-1 === S) return !1;
            Rc();
            return (sc ? U : Qc)(a);
        },
        Tc = function (a) {
            if (-1 !== S) return Rc(), T ? m.JSON.stringify.call(m.JSON, a) : W(a);
        },
        Uc = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== new Date(0).toISOString(),
        Vc = function () {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [
                0 > a ? "-" + String(1e6 - a).substr(1) : 9999 >= a ? String(1e4 + a).substr(1) : "+" + String(1e6 + a).substr(1),
                "-",
                String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
                "-",
                String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
                "T",
                String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
                ":",
                String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
                ":",
                String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
                ".",
                String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
                "Z",
            ].join("");
        };
    Date.prototype.toISOString = Uc ? Vc : Date.prototype.toISOString;
    var Wc = function () {
        this.l = -1;
    };
    var Xc = function () {
        this.l = 64;
        this.b = [];
        this.K = [];
        this.ha = [];
        this.F = [];
        this.F[0] = 128;
        for (var a = 1; a < this.l; ++a) this.F[a] = 0;
        this.H = this.A = 0;
        this.reset();
    };
    ha(Xc, Wc);
    Xc.prototype.reset = function () {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.H = this.A = 0;
    };
    var Yc = function (a, b, c) {
        c || (c = 0);
        var d = a.ha;
        if ("string" === typeof b) for (var e = 0; 16 > e; e++) (d[e] = (b.charCodeAt(c) << 24) | (b.charCodeAt(c + 1) << 16) | (b.charCodeAt(c + 2) << 8) | b.charCodeAt(c + 3)), (c += 4);
        else for (e = 0; 16 > e; e++) (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]), (c += 4);
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
        }
        b = a.b[0];
        c = a.b[1];
        var g = a.b[2],
            h = a.b[3],
            k = a.b[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ (c & (g ^ h));
                    var l = 1518500249;
                } else (f = c ^ g ^ h), (l = 1859775393);
            else 60 > e ? ((f = (c & g) | (h & (c | g))), (l = 2400959708)) : ((f = c ^ g ^ h), (l = 3395469782));
            f = (((b << 5) | (b >>> 27)) + f + k + l + d[e]) & 4294967295;
            k = h;
            h = g;
            g = ((c << 30) | (c >>> 2)) & 4294967295;
            c = b;
            b = f;
        }
        a.b[0] = (a.b[0] + b) & 4294967295;
        a.b[1] = (a.b[1] + c) & 4294967295;
        a.b[2] = (a.b[2] + g) & 4294967295;
        a.b[3] = (a.b[3] + h) & 4294967295;
        a.b[4] = (a.b[4] + k) & 4294967295;
    };
    Xc.prototype.update = function (a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.l, d = 0, e = this.K, f = this.A; d < b; ) {
                if (0 == f) for (; d <= c; ) Yc(this, a, d), (d += this.l);
                if ("string" === typeof a)
                    for (; d < b; ) {
                        if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.l)) {
                            Yc(this, e);
                            f = 0;
                            break;
                        }
                    }
                else
                    for (; d < b; )
                        if (((e[f] = a[d]), ++f, ++d, f == this.l)) {
                            Yc(this, e);
                            f = 0;
                            break;
                        }
            }
            this.A = f;
            this.H += b;
        }
    };
    Xc.prototype.digest = function () {
        var a = [],
            b = 8 * this.H;
        56 > this.A ? this.update(this.F, 56 - this.A) : this.update(this.F, this.l - (this.A - 56));
        for (var c = this.l - 1; 56 <= c; c--) (this.K[c] = b & 255), (b /= 256);
        Yc(this, this.K);
        for (c = b = 0; 5 > c; c++) for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.b[c] >> d) & 255), ++b;
        return a;
    };
    var Zc = function () {
        this.S = new Xc();
    };
    Zc.prototype.reset = function () {
        this.S.reset();
    };
    var $c = A.crypto,
        ad = !1,
        bd = 0,
        cd = 0,
        dd = 1,
        ed = 0,
        fd = "",
        gd = function (a) {
            a = a || A.event;
            var b = (a.screenX + a.clientX) << 16;
            b += a.screenY + a.clientY;
            b *= new Date().getTime() % 1e6;
            dd = (dd * b) % ed;
            0 < bd && ++cd == bd && cb("mousemove", gd, "remove", "de");
        },
        hd = function (a) {
            var b = new Zc();
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.S.update(c);
            b = b.S.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a;
        };
    ad = !!$c && "function" == typeof $c.getRandomValues;
    ad || ((ed = 1e6 * (screen.width * screen.width + screen.height)), (fd = hd(B.cookie + "|" + B.location + "|" + new Date().getTime() + "|" + Math.random())), (bd = Q("random/maxObserveMousemove") || 0), 0 != bd && cb("mousemove", gd, "add", "at"));
    var id = function () {
            var a = dd;
            a += parseInt(fd.substr(0, 20), 16);
            fd = hd(fd);
            return a / (ed + Math.pow(16, 20));
        },
        jd = function () {
            var a = new A.Uint32Array(1);
            $c.getRandomValues(a);
            return Number("0." + a[0]);
        };
    var kd = function () {
            var a = L.onl;
            if (!a) {
                a = D();
                L.onl = a;
                var b = D();
                a.e = function (c) {
                    var d = b[c];
                    d && (delete b[c], d());
                };
                a.a = function (c, d) {
                    b[c] = d;
                };
                a.r = function (c) {
                    delete b[c];
                };
            }
            return a;
        },
        ld = function (a, b) {
            b = b.onload;
            return "function" === typeof b ? (kd().a(a, b), b) : null;
        },
        md = function (a) {
            H(/^\w+$/.test(a), "Unsupported id - " + a);
            kd();
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"';
        },
        nd = function (a) {
            kd().r(a);
        };
    var od = { allowtransparency: "true", frameborder: "0", hspace: "0", marginheight: "0", marginwidth: "0", scrolling: "no", style: "", tabindex: "0", vspace: "0", width: "100%" },
        pd = { allowtransparency: !0, onload: !0 },
        qd = 0,
        rd = function (a) {
            H(!a || bb.test(a), "Illegal url for new iframe - " + a);
        },
        sd = function (a, b, c, d, e) {
            rd(c.src);
            var f,
                g = ld(d, c),
                h = g ? md(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + Na(String(c.frameborder)) + '" scrolling="' + Na(String(c.scrolling)) + '" ' + h + ' name="' + Na(String(c.name)) + '"/>'));
            } catch (l) {
            } finally {
                f ||
                    ((f = a.createElement("iframe")),
                    g &&
                        ((f.onload = function () {
                            f.onload = null;
                            g.call(this);
                        }),
                        nd(d)));
            }
            f.setAttribute("ng-non-bindable", "");
            for (var k in c) (a = c[k]), "style" === k && "object" === typeof a ? F(a, f.style) : pd[k] || f.setAttribute(k, String(a));
            (k = (e && e.beforeNode) || null) || (e && e.dontclear) || hb(b);
            b.insertBefore(f, k);
            f = k ? k.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f;
        };
    var td = /^:[\w]+$/,
        ud = /:([a-zA-Z_]+):/g,
        vd = function () {
            var a = qc() || "0",
                b = rc();
            var c = qc(void 0) || a;
            var d = rc(void 0),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = !1 === Q("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = Q("iframes/:socialhost:"),
                g = Q("iframes/:im_socialhost:");
            return (nc = { socialhost: f, ctx_socialhost: d ? g : f, session_index: a, session_delegate: b, session_prefix: c, im_prefix: e });
        },
        wd = function (a, b) {
            return vd()[b] || "";
        },
        xd = function (a) {
            return function (b, c) {
                return a ? vd()[c] || a[c] || "" : vd()[c] || "";
            };
        };
    var yd = function (a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            return ab(document, b ? b : a);
        },
        zd = function (a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = yd(e)) && null != e.match(/^https?:\/\/[\w\-_\.]+/i)) return e;
            }
            return window.location.href;
        };
    var Ad = { se: "0" },
        Bd = { post: !0 },
        Cd = { style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none" },
        Dd = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        Ed = C(L, "WI", D()),
        Fd = function (a, b, c) {
            var d;
            var e = {};
            var f = (d = a);
            "plus" == a && b.action && ((d = a + "_" + b.action), (f = a + "/" + b.action));
            (d = Q("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in Ad) e[g] = g + "/" + (b[g] || Ad[g]) + "/";
            e = ab(B, d.replace(ud, xd(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            F(b, f);
            (d = Q("lang") || Q("gwidget/lang")) && (f.hl = d);
            Bd[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = Q(g + "exp");
            if ((g = Q(g + "location")))
                for (d = 0; d < g.length; d++) {
                    var h = g[d];
                    f[h] = A.location[h];
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = "string" == typeof g ? g : void 0) ? yd(g) : zd(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? yd(g) : zd();
                    f.url = g;
                    g = b.db;
                    d = Q();
                    null == g && d && ((g = d.db), null == g && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = Q();
                    null == g && d && ((g = d.ecp), null == g && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = zd();
            }
            L.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var k in Ad) f[k] && delete f[k];
            f.gsrc = Q("iframes/:source:");
            k = Q("inline/css");
            "undefined" !== typeof k && 0 < c && k >= c && (f.ic = "1");
            k = /^#|^fr-/;
            c = {};
            for (var l in f) E(f, l) && k.test(l) && ((c[l.replace(k, "")] = f[l]), delete f[l]);
            l = "q" == Q("iframes/" + a + "/params/si") ? f : c;
            k = fc();
            for (var n in k) !E(k, n) || E(f, n) || E(c, n) || (l[n] = k[n]);
            n = [].concat(Dd);
            (l = Q("iframes/" + a + "/methods")) && "object" === typeof l && Fa.test(l.push) && (n = n.concat(l));
            for (var p in b) E(b, p) && /^on/.test(p) && ("plus" != a || "onconnect" != p) && (n.push(p), delete f[p]);
            delete f.callback;
            c._methods = n.join(",");
            return Za(e, f, c);
        },
        Gd = ["style", "data-gapiscan"],
        Id = function (a) {
            for (var b = D(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
                var f = a.attributes[d],
                    g = f.name,
                    h = f.value;
                0 <= Ga.call(Gd, g) || (c && 0 != g.indexOf("data-")) || "null" === h || ("specified" in f && !f.specified) || (c && (g = g.substr(5)), (b[g.toLowerCase()] = h));
            }
            a = a.style;
            (c = Hd(a && a.height)) && (b.height = String(c));
            (a = Hd(a && a.width)) && (b.width = String(a));
            return b;
        },
        Hd = function (a) {
            var b = void 0;
            "number" === typeof a ? (b = a) : "string" === typeof a && (b = parseInt(a, 10));
            return b;
        },
        Kd = function () {
            var a = L.drw;
            lc(function (b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = B.getElementById(c);
                    if (f) {
                        var g = Fd(d, b, 0);
                        g ? ((f = f.parentNode), e.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/#.*/, "").replace(/(\?|&)ic=1/, "") && ((b.dontclear = !0), (b.rd = !0), (b.ri = !0), (b.type = d), Jd(f, b), (d = R[f.lastChild.id]) && (d.oid = c), mc(c, 4))) : delete R[c];
                    } else delete R[c];
                }
            });
        };
    var Ld,
        Md,
        X,
        Nd,
        Od,
        Pd = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Qd = { plusone: !0, autocomplete: !0, profile: !0, signin: !0, signin2: !0 };
    Ld = C(L, "SW", D());
    Md = C(L, "SA", D());
    X = C(L, "SM", D());
    Nd = C(L, "FW", []);
    Od = null;
    var Sd = function (a, b) {
            Rd(void 0, !1, a, b);
        },
        Rd = function (a, b, c, d) {
            N("ps0", !0);
            c = ("string" === typeof c ? document.getElementById(c) : c) || B;
            var e = B.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : Oa(Ld).concat(Oa(Md)).concat(Oa(X));
                for (var f = [], g = 0; g < e.length; g++) {
                    var h = e[g];
                    f.push(".g-" + h, "g\\:" + h);
                }
                e = c.querySelectorAll(f.join(","));
            } else e = c.getElementsByTagName("*");
            c = D();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var k = g;
                h = d;
                var l = k.nodeName.toLowerCase(),
                    n = void 0;
                if (k.getAttribute("data-gapiscan")) h = null;
                else {
                    var p = l.indexOf("g:");
                    0 == p ? (n = l.substr(2)) : (p = (p = String(k.className || k.getAttribute("class"))) && Pd.exec(p)) && (n = p[1]);
                    h = !n || !(Ld[n] || Md[n] || X[n]) || (h && n !== h) ? null : n;
                }
                h && (Qd[h] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != Oa(Id(g)).length) && (g.setAttribute("data-gapiscan", !0), C(c, h, []).push(g));
            }
            if (b) for (var r in c) for (b = c[r], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var u in c) Nd.push(u);
            N("ps1", !0);
            if ((r = Nd.join(":")) || a)
                try {
                    I.load(r, a);
                } catch (G) {
                    ic(G);
                    return;
                }
            if (Td(Od || {}))
                for (var y in c) {
                    a = c[y];
                    u = 0;
                    for (b = a.length; u < b; u++) a[u].removeAttribute("data-gapiscan");
                    Ud(y);
                }
            else {
                d = [];
                for (y in c) for (a = c[y], u = 0, b = a.length; u < b; u++) (e = a[u]), Vd(y, e, Id(e), d, b);
                Wd(r, d);
            }
        },
        Xd = function (a) {
            var b = C(I, a, {});
            b.go ||
                ((b.go = function (c) {
                    return Sd(c, a);
                }),
                (b.render = function (c, d) {
                    d = d || {};
                    d.type = a;
                    return Jd(c, d);
                }));
        },
        Yd = function (a) {
            Ld[a] = !0;
        },
        Zd = function (a) {
            Md[a] = !0;
        },
        $d = function (a) {
            X[a] = !0;
        };
    var Ud = function (a, b) {
            var c = lb(a);
            b && c
                ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0))
                : I.load(a, function () {
                      var d = lb(a),
                          e = b && b.iframeNode,
                          f = b && b.userParams;
                      e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : ((d = I[a].go), "signin2" == a ? d(e, f) : d(e && e.parentNode, f));
                  });
        },
        Td = function () {
            return !1;
        },
        Wd = function () {},
        Vd = function (a, b, c, d, e, f, g) {
            switch (ae(b, a, f)) {
                case 0:
                    a = X[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Ud(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var h in c) {
                            if ((f = E(c, h))) (f = c[h]), (f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString));
                            if (f)
                                try {
                                    c[h] = Tc(c[h]);
                                } catch (y) {
                                    delete c[h];
                                }
                        }
                        f = !0;
                        c.dontclear && (f = !1);
                        delete c.dontclear;
                        kc();
                        h = Fd(a, c, e);
                        e = g || {};
                        e.allowPost = 1;
                        e.attributes = Cd;
                        e.dontclear = !f;
                        g = {};
                        g.userParams = c;
                        g.url = h;
                        g.type = a;
                        if (c.rd) var k = b;
                        else (k = document.createElement("div")), b.setAttribute("data-gapistub", !0), (k.style.cssText = "position:absolute;width:450px;left:-10000px;"), b.parentNode.insertBefore(k, b);
                        g.siteElement = k;
                        k.id || ((b = k), C(Ed, a, 0), (f = "___" + a + "_" + Ed[a]++), (b.id = f));
                        b = D();
                        b[">type"] = a;
                        F(c, b);
                        f = h;
                        c = k;
                        h = e || {};
                        b = h.attributes || {};
                        H(!(h.allowPost || h.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        e = b = f;
                        td.test(b) && ((e = Q("iframes/" + e.substring(1) + "/url")), H(!!e, "Unknown iframe url config for - " + b));
                        f = ab(B, e.replace(ud, wd));
                        b = c.ownerDocument || B;
                        k = 0;
                        do e = h.id || ["I", qd++, "_", new Date().getTime()].join("");
                        while (b.getElementById(e) && 5 > ++k);
                        H(5 > k, "Error creating iframe id");
                        k = {};
                        var l = {};
                        b.documentMode && 9 > b.documentMode && (k.hostiemode = b.documentMode);
                        F(h.queryParams || {}, k);
                        F(h.fragmentParams || {}, l);
                        var n = h.pfname;
                        var p = D();
                        Q("iframes/dropLegacyIdParam") || (p.id = e);
                        p._gfid = e;
                        p.parent = b.location.protocol + "//" + b.location.host;
                        var r = J(b.location.href, "parent");
                        n = n || "";
                        !n && r && ((r = J(b.location.href, "_gfid", "") || J(b.location.href, "id", "")), (n = J(b.location.href, "pfname", "")), (n = r ? n + "/" + r : ""));
                        n || ((r = Sc(J(b.location.href, "jcp", ""))) && "object" == typeof r && (n = (n = r.id) ? r.pfname + "/" + n : ""));
                        p.pfname = n;
                        h.connectWithJsonParam && ((r = {}), (r.jcp = Tc(p)), (p = r));
                        r = J(f, "rpctoken") || k.rpctoken || l.rpctoken;
                        r || ((r = h.rpctoken || String(Math.round(1e8 * (ad ? jd() : id())))), (p.rpctoken = r));
                        h.rpctoken = r;
                        F(p, h.connectWithQueryParams ? k : l);
                        r = b.location.href;
                        p = D();
                        (n = J(r, "_bsh", L.bsh)) && (p._bsh = n);
                        (r = jb(r)) && (p.jsh = r);
                        h.hintInFragment ? F(p, l) : F(p, k);
                        f = Za(f, k, l, h.paramsSerializer);
                        l = D();
                        F(od, l);
                        F(h.attributes, l);
                        l.name = l.id = e;
                        l.src = f;
                        h.eurl = f;
                        k = h || {};
                        p = !!k.allowPost;
                        if (k.forcePost || (p && 2e3 < f.length)) {
                            k = Wa(f);
                            l.src = "";
                            h.dropDataPostorigin || (l["data-postorigin"] = f);
                            f = sd(b, c, l, e);
                            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                                var u = f.contentWindow.document;
                                u.open();
                                l = u.createElement("div");
                                p = {};
                                r = e + "_inner";
                                p.name = r;
                                p.src = "";
                                p.style = "display:none";
                                sd(b, l, p, r, h);
                            }
                            l = (h = k.query[0]) ? h.split("&") : [];
                            h = [];
                            for (p = 0; p < l.length; p++) (r = l[p].split("=", 2)), h.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                            k.query = [];
                            l = Xa(k);
                            H(bb.test(l), "Invalid URL: " + l);
                            k = b.createElement("form");
                            k.method = "POST";
                            k.target = e;
                            k.style.display = "none";
                            e = l instanceof w ? l : va(l);
                            na(k, "HTMLFormElement").action = ta(e);
                            for (e = 0; e < h.length; e++) (l = b.createElement("input")), (l.type = "hidden"), (l.name = h[e][0]), (l.value = h[e][1]), k.appendChild(l);
                            c.appendChild(k);
                            k.submit();
                            k.parentNode.removeChild(k);
                            u && u.close();
                            u = f;
                        } else u = sd(b, c, l, e, h);
                        g.iframeNode = u;
                        g.id = u.getAttribute("id");
                        u = g.id;
                        c = D();
                        c.id = u;
                        c.userParams = g.userParams;
                        c.url = g.url;
                        c.type = g.type;
                        c.state = 1;
                        R[u] = c;
                        u = g;
                    } else u = null;
                    u && ((g = u.id) && d.push(g), Ud(a, u));
            }
        },
        ae = function (a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (X[b]) {
                    if (ib[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1;
                } else {
                    if (Md[b]) return 0;
                    if (Ld[b]) return 1;
                }
            }
            return null;
        },
        Jd = function (a, b) {
            var c = b.type;
            delete b.type;
            var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
            if (d) {
                a = {};
                for (var e in b) E(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                Vd(c, d, a, e, 0, b, void 0);
                Wd(c, e);
            } else ic("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "");
        };
    C(I, "platform", {}).go = Sd;
    Td = function (a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = jb(Da.href);
        return !a || (0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b);
    };
    Wd = function (a, b) {
        be(a, b);
    };
    var eb = function (a) {
            Rd(a, !0);
        },
        ce = function (a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) Xd(b[a]);
        };
    vb.push([
        "platform",
        function (a, b, c) {
            Od = c;
            b && Nd.push(b);
            ce(Yd, a);
            ce(Zd, c._c.annotation);
            ce($d, c._c.bimodal);
            bc();
            $b();
            if ("explicit" != Q("parsetags")) {
                kb(a);
                gc(fc()) && !Q("disableRealtimeCallback") && kc();
                if (c && (a = c.callback)) {
                    var d = Pa(a);
                    delete c.callback;
                }
                gb(function () {
                    eb(d);
                });
            }
        },
    ]);
    I._pl = !0;
    var de = function (a) {
        a = (a = R[a]) ? a.oid : void 0;
        if (a) {
            var b = B.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete R[a];
            de(a);
        }
    };
    var ee = /^\{h:'/,
        fe = /^!_/,
        ge = "",
        be = function (a, b) {
            function c() {
                cb("message", d, "remove", "de");
            }
            function d(f) {
                var g = f.data,
                    h = f.origin;
                if (he(g, b)) {
                    var k = e;
                    e = !1;
                    k && N("rqe");
                    ie(a, function () {
                        k && N("rqd");
                        c();
                        for (var l = C(L, "RPMQ", []), n = 0; n < l.length; n++) l[n]({ data: g, origin: h });
                    });
                }
            }
            if (0 !== b.length) {
                ge = J(Da.href, "pfname", "");
                var e = !0;
                cb("message", d, "add", "at");
                Ub(a, c);
            }
        },
        he = function (a, b) {
            a = String(a);
            if (ee.test(a)) return !0;
            var c = !1;
            fe.test(a) && ((c = !0), (a = a.substr(2)));
            if (!/^\{/.test(a)) return !1;
            var d = Sc(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != Ga.call(b, a)) {
                if ("_renderstart" === d.s || d.s === ge + "/" + a + "::_renderstart")
                    if (((d = d.a && d.a[c ? 0 : 1]), (b = B.getElementById(a)), mc(a, 2), d && b && d.width && d.height)) {
                        a: {
                            c = b.parentNode;
                            a = d || {};
                            if (jc()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = R[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a;
                                    de(e);
                                }
                            }
                            (d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), (c.style.cssText = ""));
                            d = a.width;
                            var f = a.height,
                                g = c.style;
                            g.textIndent = "0";
                            g.margin = "0";
                            g.padding = "0";
                            g.background = "transparent";
                            g.borderStyle = "none";
                            g.cssFloat = "none";
                            g.styleFloat = "none";
                            g.lineHeight = "normal";
                            g.fontSize = "1px";
                            g.verticalAlign = "baseline";
                            c = c.style;
                            c.display = "inline-block";
                            g = b.style;
                            g.position = "static";
                            g.left = "0";
                            g.top = "0";
                            g.visibility = "visible";
                            d && (c.width = g.width = d + "px");
                            f && (c.height = g.height = f + "px");
                            a.verticalAlign && (c.verticalAlign = a.verticalAlign);
                            e && mc(e, 3);
                        }
                        b["data-csi-wdt"] = new Date().getTime();
                    }
                return !0;
            }
            return !1;
        },
        ie = function (a, b) {
            Ub(a, b);
        };
    var je = function (a, b) {
            this.M = a;
            a = b || {};
            this.ja = Number(a.maxAge) || 0;
            this.X = a.domain;
            this.$ = a.path;
            this.ka = !!a.secure;
        },
        ke = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        le = /^[A-Z_][A-Z0-9_]{0,63}$/;
    je.prototype.read = function () {
        for (var a = this.M + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (0 == d.indexOf(a)) return d.substr(a.length);
        }
    };
    je.prototype.write = function (a, b) {
        if (!le.test(this.M)) throw "Invalid cookie name";
        if (!ke.test(a)) throw "Invalid cookie value";
        a = this.M + "=" + a;
        this.X && (a += ";domain=" + this.X);
        this.$ && (a += ";path=" + this.$);
        b = "number" === typeof b ? b : this.ja;
        if (0 <= b) {
            var c = new Date();
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString();
        }
        this.ka && (a += ";secure");
        document.cookie = a;
        return !0;
    };
    je.prototype.clear = function () {
        this.write("", 0);
    };
    je.iterate = function (a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="));
        }
    };
    var me = function (a) {
            this.D = a;
        },
        Y = {};
    me.prototype.read = function () {
        if (Y.hasOwnProperty(this.D)) return Y[this.D];
    };
    me.prototype.write = function (a) {
        Y[this.D] = a;
        return !0;
    };
    me.prototype.clear = function () {
        delete Y[this.D];
    };
    me.iterate = function (a) {
        for (var b in Y) Y.hasOwnProperty(b) && a(b, Y[b]);
    };
    var ne = "https:" === window.location.protocol,
        oe = ne || "http:" === window.location.protocol ? je : me,
        pe = function (a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d);
            } else d = "";
            return { j: "S" == a.charAt(0), domain: d, o: c };
        },
        qe = function () {
            var a,
                b = null;
            oe.iterate(function (c, d) {
                0 === c.indexOf("G_AUTHUSER_") && ((c = pe(c.substring(11))), !a || (c.j && !a.j) || (c.j == a.j && c.o > a.o)) && ((a = c), (b = d));
            });
            return { ia: a, J: b };
        };
    var re = function (a) {
            if (0 !== a.indexOf("GCSC")) return null;
            var b = { Z: !1 };
            a = a.substr(4);
            if (!a) return b;
            var c = a.charAt(0);
            a = a.substr(1);
            var d = a.lastIndexOf("_");
            if (-1 == d) return b;
            var e = pe(a.substr(d + 1));
            if (null == e) return b;
            a = a.substring(0, d);
            if ("_" !== a.charAt(0)) return b;
            d = "E" === c && e.j;
            return (!d && ("U" !== c || e.j)) || (d && !ne) ? b : { Z: !0, j: d, na: a.substr(1), domain: e.domain, o: e.o };
        },
        se = function (a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : [];
        },
        te = function (a) {
            a = a.split(":");
            return { clientId: a[0].split("=")[1], ma: se(a[1]), qa: se(a[2]), pa: se(a[3]) };
        },
        ue = function () {
            var a = qe(),
                b = a.ia;
            a = a.J;
            if (null !== a) {
                var c;
                oe.iterate(function (f, g) {
                    (f = re(f)) && f.Z && f.j == b.j && f.o == b.o && (c = g);
                });
                if (c) {
                    var d = te(c),
                        e = d && d.ma[Number(a)];
                    d = d && d.clientId;
                    if (e) return { J: a, la: e, clientId: d };
                }
            }
            return null;
        };
    var Z = function () {
        this.W = ve;
    };
    Z.prototype.B = 0;
    Z.prototype.U = 2;
    Z.prototype.W = null;
    Z.prototype.L = !1;
    Z.prototype.ca = function () {
        this.L || ((this.B = 0), (this.L = !0), this.aa());
    };
    Z.prototype.aa = function () {
        this.L && (this.W() ? (this.B = this.U) : (this.B = Math.min(2 * (this.B || this.U), 120)), window.setTimeout(da(this.aa, this), 1e3 * this.B));
    };
    for (var we = 0; 64 > we; ++we);
    var xe = null;
    jc = function () {
        return (L.oa = !0);
    };
    kc = function () {
        L.oa = !0;
        var a = ue();
        (a = a && a.J) && ac("googleapis.config/sessionIndex", a);
        xe || (xe = C(L, "ss", new Z()));
        a = xe;
        a.ca && a.ca();
    };
    var ve = function () {
        var a = ue(),
            b = (a && a.la) || null,
            c = a && a.clientId;
        Ub("auth", {
            callback: function () {
                var d = A.gapi.auth,
                    e = { client_id: c, session_state: b };
                d.checkSessionState(e, function (f) {
                    var g = e.session_state,
                        h = Q("isLoggedIn");
                    f = Q("debug/forceIm") ? !1 : (g && f) || (!g && !f);
                    if ((h = h != f)) ac("isLoggedIn", f), kc(), Kd(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = fc();
                    var k = Q("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    k = k != g && "undefined" != typeof k;
                    ac("savedUserState", g);
                    (h || k) && gc(f) && !Q("disableRealtimeCallback") && d._pimf(f, !0);
                });
            },
        });
        return !0;
    };
    N("bs0", !0, window.gapi._bs);
    N("bs1", !0);
    delete window.gapi._bs;
}.call(this));
gapi.load("plusone", {
    callback: window["gapi_onload"],
    _c: {
        jsl: {
            ci: {
                deviceType: "desktop",
                "oauth-flow": { authUrl: "https://accounts.google.com/o/oauth2/auth", proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay", disableOpt: true, idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe", usegapi: false },
                debug: { reportExceptionRate: 0.05, forceIm: false, rethrowException: false, host: "https://apis.google.com" },
                enableMultilogin: true,
                "googleapis.config": { auth: { useFirstPartyAuthV2: true } },
                isPlusUser: false,
                inline: { css: 1 },
                disableRealtimeCallback: false,
                drive_share: { skipInitCommand: true },
                csi: { rate: 0.01 },
                client: { cors: false },
                isLoggedIn: true,
                signInDeprecation: { rate: 0.0 },
                include_granted_scopes: true,
                llang: "en",
                iframes: {
                    youtube: { params: { location: ["search", "hash"] }, url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1", methods: ["scroll", "openwindow"] },
                    ytsubscribe: { url: "https://www.youtube.com/subscribe_embed?usegapi\u003d1" },
                    plus_circle: { params: { url: "" }, url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1" },
                    plus_share: { params: { url: "" }, url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1" },
                    rbr_s: { params: { url: "" }, url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller" },
                    ":source:": "3p",
                    playemm: { url: "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1" },
                    savetoandroidpay: { url: "https://pay.google.com/gp/v/widget/save" },
                    blogger: { params: { location: ["search", "hash"] }, url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1", methods: ["scroll", "openwindow"] },
                    evwidget: { params: { url: "" }, url: ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1" },
                    partnersbadge: { url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1" },
                    dataconnector: { url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1" },
                    surveyoptin: { url: "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1" },
                    ":socialhost:": "https://apis.google.com",
                    shortlists: { url: "" },
                    hangout: { url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget" },
                    plus_followers: { params: { url: "" }, url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1" },
                    post: { params: { url: "" }, url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1" },
                    ":gplus_url:": "https://plus.google.com",
                    signin: { params: { url: "" }, url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1", methods: ["onauth"] },
                    rbr_i: { params: { url: "" }, url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation" },
                    donation: { url: "https://onetoday.google.com/home/donationWidget?usegapi\u003d1" },
                    share: { url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1" },
                    plusone: { params: { count: "", size: "", url: "" }, url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1" },
                    comments: { params: { location: ["search", "hash"] }, url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1", methods: ["scroll", "openwindow"] },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    backdrop: { url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1" },
                    visibility: { params: { url: "" }, url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1" },
                    autocomplete: { params: { url: "" }, url: ":socialhost:/:session_prefix:_/widget/render/autocomplete" },
                    additnow: { url: "https://apis.google.com/marketplace/button?usegapi\u003d1", methods: ["launchurl"] },
                    ":signuphost:": "https://plus.google.com",
                    ratingbadge: { url: "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1" },
                    appcirclepicker: { url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker" },
                    follow: { url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1" },
                    community: { url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1" },
                    sharetoclassroom: { url: "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1" },
                    ytshare: { params: { url: "" }, url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1" },
                    plus: { url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1" },
                    family_creation: { params: { url: "" }, url: "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1" },
                    commentcount: { url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1" },
                    configurator: { url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1" },
                    zoomableimage: { url: "https://ssl.gstatic.com/microscope/embed/" },
                    appfinder: { url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1" },
                    savetowallet: { url: "https://pay.google.com/gp/v/widget/save" },
                    person: { url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1" },
                    savetodrive: { url: "https://drive.google.com/savetodrivebutton?usegapi\u003d1", methods: ["save"] },
                    page: { url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1" },
                    card: { url: ":socialhost:/:session_prefix:_/hovercard/card" },
                },
            },
            h: "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.jw7XZHvcak8.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA/m\u003d__features__",
            u: "https://apis.google.com/js/plusone.js",
            hee: true,
            fp: "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
            dpo: false,
        },
        platform: [
            "additnow",
            "backdrop",
            "blogger",
            "comments",
            "commentcount",
            "community",
            "donation",
            "family_creation",
            "follow",
            "hangout",
            "health",
            "page",
            "partnersbadge",
            "person",
            "playemm",
            "playreview",
            "plus",
            "plusone",
            "post",
            "ratingbadge",
            "savetoandroidpay",
            "savetodrive",
            "savetowallet",
            "sharetoclassroom",
            "shortlists",
            "signin2",
            "surveyoptin",
            "visibility",
            "youtube",
            "ytsubscribe",
            "zoomableimage",
        ],
        fp: "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
        annotation: ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
        bimodal: ["signin", "share"],
    },
});
