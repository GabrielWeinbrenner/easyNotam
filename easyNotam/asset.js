if (!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
        throw new Error("jQuery requires a window with a document");
      return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length
      , n = re.type(e);
    return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }
  function i(e, t, n) {
    if (re.isFunction(t))
      return re.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n
      });
    if (t.nodeType)
      return re.grep(e, function(e) {
        return e === t !== n
      });
    if ("string" == typeof t) {
      if (he.test(t))
        return re.filter(t, e, n);
      t = re.filter(t, e)
    }
    return re.grep(e, function(e) {
      return re.inArray(e, t) >= 0 !== n
    })
  }
  function a(e, t) {
    do
      e = e[t];
    while (e && 1 !== e.nodeType);return e
  }
  function r(e) {
    var t = xe[e] = {};
    return re.each(e.match(be) || [], function(e, n) {
      t[n] = !0
    }),
      t
  }
  function s() {
    me.addEventListener ? (me.removeEventListener("DOMContentLoaded", o, !1),
      e.removeEventListener("load", o, !1)) : (me.detachEvent("onreadystatechange", o),
      e.detachEvent("onload", o))
  }
  function o() {
    (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (s(),
      re.ready())
  }
  function l(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(ke, "-$1").toLowerCase();
      if (n = e.getAttribute(i),
      "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n
        } catch (a) {}
        re.data(e, t, n)
      } else
        n = void 0
    }
    return n
  }
  function d(e) {
    var t;
    for (t in e)
      if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0
  }
  function p(e, t, n, i) {
    if (re.acceptData(e)) {
      var a, r, s = re.expando, o = e.nodeType, l = o ? re.cache : e, d = o ? e[s] : e[s] && s;
      if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t)
        return d || (d = o ? e[s] = V.pop() || re.guid++ : s),
        l[d] || (l[d] = o ? {} : {
          toJSON: re.noop
        }),
        ("object" == typeof t || "function" == typeof t) && (i ? l[d] = re.extend(l[d], t) : l[d].data = re.extend(l[d].data, t)),
          r = l[d],
        i || (r.data || (r.data = {}),
          r = r.data),
        void 0 !== n && (r[re.camelCase(t)] = n),
          "string" == typeof t ? (a = r[t],
          null == a && (a = r[re.camelCase(t)])) : a = r,
          a
    }
  }
  function u(e, t, n) {
    if (re.acceptData(e)) {
      var i, a, r = e.nodeType, s = r ? re.cache : e, o = r ? e[re.expando] : re.expando;
      if (s[o]) {
        if (t && (i = n ? s[o] : s[o].data)) {
          re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t),
            t = t in i ? [t] : t.split(" ")),
            a = t.length;
          for (; a--; )
            delete i[t[a]];
          if (n ? !d(i) : !re.isEmptyObject(i))
            return
        }
        (n || (delete s[o].data,
          d(s[o]))) && (r ? re.cleanData([e], !0) : ie.deleteExpando || s != s.window ? delete s[o] : s[o] = null)
      }
    }
  }
  function c() {
    return !0
  }
  function h() {
    return !1
  }
  function f() {
    try {
      return me.activeElement
    } catch (e) {}
  }
  function m(e) {
    var t = Oe.split("|")
      , n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length; )
        n.createElement(t.pop());
    return n
  }
  function g(e, t) {
    var n, i, a = 0, r = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
    if (!r)
      for (r = [],
             n = e.childNodes || e; null != (i = n[a]); a++)
        !t || re.nodeName(i, t) ? r.push(i) : re.merge(r, g(i, t));
    return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], r) : r
  }
  function v(e) {
    Le.test(e.type) && (e.defaultChecked = e.checked)
  }
  function y(e, t) {
    return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function w(e) {
    return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type,
      e
  }
  function b(e) {
    var t = Ve.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }
  function x(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++)
      re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
  }
  function T(e, t) {
    if (1 === t.nodeType && re.hasData(e)) {
      var n, i, a, r = re._data(e), s = re._data(t, r), o = r.events;
      if (o) {
        delete s.handle,
          s.events = {};
        for (n in o)
          for (i = 0,
                 a = o[n].length; a > i; i++)
            re.event.add(t, n, o[n][i])
      }
      s.data && (s.data = re.extend({}, s.data))
    }
  }
  function C(e, t) {
    var n, i, a;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(),
      !ie.noCloneEvent && t[re.expando]) {
        a = re._data(t);
        for (i in a.events)
          re.removeEvent(t, i, a.handle);
        t.removeAttribute(re.expando)
      }
      "script" === n && t.text !== e.text ? (w(t).text = e.text,
        b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
      ie.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
      t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }
  function S(t, n) {
    var i = re(n.createElement(t)).appendTo(n.body)
      , a = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
    return i.detach(),
      a
  }
  function E(e) {
    var t = me
      , n = et[e];
    return n || (n = S(e, t),
    "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
      t = (Ze[0].contentWindow || Ze[0].contentDocument).document,
      t.write(),
      t.close(),
      n = S(e, t),
      Ze.detach()),
      et[e] = n),
      n
  }
  function k(e, t) {
    return {
      get: function() {
        var n = e();
        return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
      }
    }
  }
  function M(e, t) {
    if (t in e)
      return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = ht.length; a--; )
      if (t = ht[a] + n,
      t in e)
        return t;
    return i
  }
  function z(e, t) {
    for (var n, i, a, r = [], s = 0, o = e.length; o > s; s++)
      i = e[s],
      i.style && (r[s] = re._data(i, "olddisplay"),
        n = i.style.display,
        t ? (r[s] || "none" !== n || (i.style.display = ""),
        "" === i.style.display && De(i) && (r[s] = re._data(i, "olddisplay", E(i.nodeName)))) : r[s] || (a = De(i),
        (n && "none" !== n || !a) && re._data(i, "olddisplay", a ? n : re.css(i, "display"))));
    for (s = 0; o > s; s++)
      i = e[s],
      i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
    return e
  }
  function D(e, t, n) {
    var i = dt.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }
  function N(e, t, n, i, a) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)
      "margin" === n && (s += re.css(e, n + ze[r], !0, a)),
        i ? ("content" === n && (s -= re.css(e, "padding" + ze[r], !0, a)),
        "margin" !== n && (s -= re.css(e, "border" + ze[r] + "Width", !0, a))) : (s += re.css(e, "padding" + ze[r], !0, a),
        "padding" !== n && (s += re.css(e, "border" + ze[r] + "Width", !0, a)));
    return s
  }
  function L(e, t, n) {
    var i = !0
      , a = "width" === t ? e.offsetWidth : e.offsetHeight
      , r = tt(e)
      , s = ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, r);
    if (0 >= a || null == a) {
      if (a = nt(e, t, r),
      (0 > a || null == a) && (a = e.style[t]),
        at.test(a))
        return a;
      i = s && (ie.boxSizingReliable() || a === e.style[t]),
        a = parseFloat(a) || 0
    }
    return a + N(e, t, n || (s ? "border" : "content"), i, r) + "px"
  }
  function P(e, t, n, i, a) {
    return new P.prototype.init(e,t,n,i,a)
  }
  function A() {
    return setTimeout(function() {
      ft = void 0
    }),
      ft = re.now()
  }
  function $(e, t) {
    var n, i = {
      height: e
    }, a = 0;
    for (t = t ? 1 : 0; 4 > a; a += 2 - t)
      n = ze[a],
        i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e),
      i
  }
  function I(e, t, n) {
    for (var i, a = (bt[t] || []).concat(bt["*"]), r = 0, s = a.length; s > r; r++)
      if (i = a[r].call(n, t, e))
        return i
  }
  function H(e, t, n) {
    var i, a, r, s, o, l, d, p, u = this, c = {}, h = e.style, f = e.nodeType && De(e), m = re._data(e, "fxshow");
    n.queue || (o = re._queueHooks(e, "fx"),
    null == o.unqueued && (o.unqueued = 0,
        l = o.empty.fire,
        o.empty.fire = function() {
          o.unqueued || l()
        }
    ),
      o.unqueued++,
      u.always(function() {
        u.always(function() {
          o.unqueued--,
          re.queue(e, "fx").length || o.empty.fire()
        })
      })),
    1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
      d = re.css(e, "display"),
      p = E(e.nodeName),
    "none" === d && (d = p),
    "inline" === d && "none" === re.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== p ? h.zoom = 1 : h.display = "inline-block")),
    n.overflow && (h.overflow = "hidden",
    ie.shrinkWrapBlocks() || u.always(function() {
      h.overflow = n.overflow[0],
        h.overflowX = n.overflow[1],
        h.overflowY = n.overflow[2]
    }));
    for (i in t)
      if (a = t[i],
        gt.exec(a)) {
        if (delete t[i],
          r = r || "toggle" === a,
        a === (f ? "hide" : "show")) {
          if ("show" !== a || !m || void 0 === m[i])
            continue;
          f = !0
        }
        c[i] = m && m[i] || re.style(e, i)
      }
    if (!re.isEmptyObject(c)) {
      m ? "hidden"in m && (f = m.hidden) : m = re._data(e, "fxshow", {}),
      r && (m.hidden = !f),
        f ? re(e).show() : u.done(function() {
          re(e).hide()
        }),
        u.done(function() {
          var t;
          re._removeData(e, "fxshow");
          for (t in c)
            re.style(e, t, c[t])
        });
      for (i in c)
        s = I(f ? m[i] : 0, i, u),
        i in m || (m[i] = s.start,
        f && (s.end = s.start,
          s.start = "width" === i || "height" === i ? 1 : 0))
    }
  }
  function O(e, t) {
    var n, i, a, r, s;
    for (n in e)
      if (i = re.camelCase(n),
        a = t[i],
        r = e[n],
      re.isArray(r) && (a = r[1],
        r = e[n] = r[0]),
      n !== i && (e[i] = r,
        delete e[n]),
        s = re.cssHooks[i],
      s && "expand"in s) {
        r = s.expand(r),
          delete e[i];
        for (n in r)
          n in e || (e[n] = r[n],
            t[n] = a)
      } else
        t[i] = a
  }
  function _(e, t, n) {
    var i, a, r = 0, s = wt.length, o = re.Deferred().always(function() {
      delete l.elem
    }), l = function() {
      if (a)
        return !1;
      for (var t = ft || A(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; l > s; s++)
        d.tweens[s].run(r);
      return o.notifyWith(e, [d, r, n]),
        1 > r && l ? n : (o.resolveWith(e, [d]),
          !1)
    }, d = o.promise({
      elem: e,
      props: re.extend({}, t),
      opts: re.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: ft || A(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var i = re.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
        return d.tweens.push(i),
          i
      },
      stop: function(t) {
        var n = 0
          , i = t ? d.tweens.length : 0;
        if (a)
          return this;
        for (a = !0; i > n; n++)
          d.tweens[n].run(1);
        return t ? o.resolveWith(e, [d, t]) : o.rejectWith(e, [d, t]),
          this
      }
    }), p = d.props;
    for (O(p, d.opts.specialEasing); s > r; r++)
      if (i = wt[r].call(d, e, p, d.opts))
        return i;
    return re.map(p, I, d),
    re.isFunction(d.opts.start) && d.opts.start.call(e, d),
      re.fx.timer(re.extend(l, {
        elem: e,
        anim: d,
        queue: d.opts.queue
      })),
      d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
  }
  function B(e) {
    return function(t, n) {
      "string" != typeof t && (n = t,
        t = "*");
      var i, a = 0, r = t.toLowerCase().match(be) || [];
      if (re.isFunction(n))
        for (; i = r[a++]; )
          "+" === i.charAt(0) ? (i = i.slice(1) || "*",
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }
  function j(e, t, n, i) {
    function a(o) {
      var l;
      return r[o] = !0,
        re.each(e[o] || [], function(e, o) {
          var d = o(t, n, i);
          return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d),
            a(d),
            !1)
        }),
        l
    }
    var r = {}
      , s = e === Rt;
    return a(t.dataTypes[0]) || !r["*"] && a("*")
  }
  function X(e, t) {
    var n, i, a = re.ajaxSettings.flatOptions || {};
    for (i in t)
      void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
    return n && re.extend(!0, e, n),
      e
  }
  function W(e, t, n) {
    for (var i, a, r, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
      void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
    if (a)
      for (s in o)
        if (o[s] && o[s].test(a)) {
          l.unshift(s);
          break
        }
    if (l[0]in n)
      r = l[0];
    else {
      for (s in n) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          r = s;
          break
        }
        i || (i = s)
      }
      r = r || i
    }
    return r ? (r !== l[0] && l.unshift(r),
      n[r]) : void 0
  }
  function F(e, t, n, i) {
    var a, r, s, o, l, d = {}, p = e.dataTypes.slice();
    if (p[1])
      for (s in e.converters)
        d[s.toLowerCase()] = e.converters[s];
    for (r = p.shift(); r; )
      if (e.responseFields[r] && (n[e.responseFields[r]] = t),
      !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        l = r,
        r = p.shift())
        if ("*" === r)
          r = l;
        else if ("*" !== l && l !== r) {
          if (s = d[l + " " + r] || d["* " + r],
            !s)
            for (a in d)
              if (o = a.split(" "),
              o[1] === r && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                s === !0 ? s = d[a] : d[a] !== !0 && (r = o[0],
                  p.unshift(o[1]));
                break
              }
          if (s !== !0)
            if (s && e["throws"])
              t = s(t);
            else
              try {
                t = s(t)
              } catch (u) {
                return {
                  state: "parsererror",
                  error: s ? u : "No conversion from " + l + " to " + r
                }
              }
        }
    return {
      state: "success",
      data: t
    }
  }
  function R(e, t, n, i) {
    var a;
    if (re.isArray(t))
      re.each(t, function(t, a) {
        n || Vt.test(e) ? i(e, a) : R(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
      });
    else if (n || "object" !== re.type(t))
      i(e, t);
    else
      for (a in t)
        R(e + "[" + a + "]", t[a], n, i)
  }
  function q() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }
  function Y() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }
  function G(e) {
    return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var V = []
    , U = V.slice
    , Q = V.concat
    , K = V.push
    , J = V.indexOf
    , Z = {}
    , ee = Z.toString
    , te = Z.hasOwnProperty
    , ne = "".trim
    , ie = {}
    , ae = "1.11.0"
    , re = function(e, t) {
    return new re.fn.init(e,t)
  }
    , se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , oe = /^-ms-/
    , le = /-([\da-z])/gi
    , de = function(e, t) {
    return t.toUpperCase()
  };
  re.fn = re.prototype = {
    jquery: ae,
    constructor: re,
    selector: "",
    length: 0,
    toArray: function() {
      return U.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
    },
    pushStack: function(e) {
      var t = re.merge(this.constructor(), e);
      return t.prevObject = this,
        t.context = this.context,
        t
    },
    each: function(e, t) {
      return re.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(re.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(U.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length
        , n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: K,
    sort: V.sort,
    splice: V.splice
  },
    re.extend = re.fn.extend = function() {
      var e, t, n, i, a, r, s = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
      for ("boolean" == typeof s && (d = s,
        s = arguments[o] || {},
        o++),
           "object" == typeof s || re.isFunction(s) || (s = {}),
           o === l && (s = this,
             o--); l > o; o++)
        if (null != (a = arguments[o]))
          for (i in a)
            e = s[i],
              n = a[i],
            s !== n && (d && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1,
              r = e && re.isArray(e) ? e : []) : r = e && re.isPlainObject(e) ? e : {},
              s[i] = re.extend(d, r, n)) : void 0 !== n && (s[i] = n));
      return s
    }
    ,
    re.extend({
      expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === re.type(e)
      },
      isArray: Array.isArray || function(e) {
        return "array" === re.type(e)
      }
      ,
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {
        return e - parseFloat(e) >= 0
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0
      },
      isPlainObject: function(e) {
        var t;
        if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e))
          return !1;
        try {
          if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
            return !1
        } catch (n) {
          return !1
        }
        if (ie.ownLast)
          for (t in e)
            return te.call(e, t);
        for (t in e)
          ;
        return void 0 === t || te.call(e, t)
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
      },
      globalEval: function(t) {
        t && re.trim(t) && (e.execScript || function(t) {
            e.eval.call(e, t)
          }
        )(t)
      },
      camelCase: function(e) {
        return e.replace(oe, "ms-").replace(le, de)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, i) {
        var a, r = 0, s = e.length, o = n(e);
        if (i) {
          if (o)
            for (; s > r && (a = t.apply(e[r], i),
            a !== !1); r++)
              ;
          else
            for (r in e)
              if (a = t.apply(e[r], i),
              a === !1)
                break
        } else if (o)
          for (; s > r && (a = t.call(e[r], r, e[r]),
          a !== !1); r++)
            ;
        else
          for (r in e)
            if (a = t.call(e[r], r, e[r]),
            a === !1)
              break;
        return e
      },
      trim: ne && !ne.call("\ufeff\xa0") ? function(e) {
          return null == e ? "" : ne.call(e)
        }
        : function(e) {
          return null == e ? "" : (e + "").replace(se, "")
        }
      ,
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)),
          i
      },
      inArray: function(e, t, n) {
        var i;
        if (t) {
          if (J)
            return J.call(t, e, n);
          for (i = t.length,
                 n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
            if (n in t && t[n] === e)
              return n
        }
        return -1
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, a = e.length; n > i; )
          e[a++] = t[i++];
        if (n !== n)
          for (; void 0 !== t[i]; )
            e[a++] = t[i++];
        return e.length = a,
          e
      },
      grep: function(e, t, n) {
        for (var i, a = [], r = 0, s = e.length, o = !n; s > r; r++)
          i = !t(e[r], r),
          i !== o && a.push(e[r]);
        return a
      },
      map: function(e, t, i) {
        var a, r = 0, s = e.length, o = n(e), l = [];
        if (o)
          for (; s > r; r++)
            a = t(e[r], r, i),
            null != a && l.push(a);
        else
          for (r in e)
            a = t(e[r], r, i),
            null != a && l.push(a);
        return Q.apply([], l)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, i, a;
        return "string" == typeof t && (a = e[t],
          t = e,
          e = a),
          re.isFunction(e) ? (n = U.call(arguments, 2),
            i = function() {
              return e.apply(t || this, n.concat(U.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || re.guid++,
            i) : void 0
      },
      now: function() {
        return +new Date
      },
      support: ie
    }),
    re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      Z["[object " + t + "]"] = t.toLowerCase()
    });
  var pe = function(e) {
    function t(e, t, n, i) {
      var a, r, s, o, l, d, u, f, m, g;
      if ((t ? t.ownerDocument || t : j) !== P && L(t),
        t = t || P,
        n = n || [],
      !e || "string" != typeof e)
        return n;
      if (1 !== (o = t.nodeType) && 9 !== o)
        return [];
      if ($ && !i) {
        if (a = ye.exec(e))
          if (s = a[1]) {
            if (9 === o) {
              if (r = t.getElementById(s),
              !r || !r.parentNode)
                return n;
              if (r.id === s)
                return n.push(r),
                  n
            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && _(t, r) && r.id === s)
              return n.push(r),
                n
          } else {
            if (a[2])
              return Z.apply(n, t.getElementsByTagName(e)),
                n;
            if ((s = a[3]) && C.getElementsByClassName && t.getElementsByClassName)
              return Z.apply(n, t.getElementsByClassName(s)),
                n
          }
        if (C.qsa && (!I || !I.test(e))) {
          if (f = u = B,
            m = t,
            g = 9 === o && e,
          1 === o && "object" !== t.nodeName.toLowerCase()) {
            for (d = c(e),
                   (u = t.getAttribute("id")) ? f = u.replace(be, "\\$&") : t.setAttribute("id", f),
                   f = "[id='" + f + "'] ",
                   l = d.length; l--; )
              d[l] = f + h(d[l]);
            m = we.test(e) && p(t.parentNode) || t,
              g = d.join(",")
          }
          if (g)
            try {
              return Z.apply(n, m.querySelectorAll(g)),
                n
            } catch (v) {} finally {
              u || t.removeAttribute("id")
            }
        }
      }
      return x(e.replace(le, "$1"), t, n, i)
    }
    function n() {
      function e(n, i) {
        return t.push(n + " ") > S.cacheLength && delete e[t.shift()],
          e[n + " "] = i
      }
      var t = [];
      return e
    }
    function i(e) {
      return e[B] = !0,
        e
    }
    function a(e) {
      var t = P.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
          t = null
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = e.length; i--; )
        S.attrHandle[n[i]] = t
    }
    function s(e, t) {
      var n = t && e
        , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (i)
        return i;
      if (n)
        for (; n = n.nextSibling; )
          if (n === t)
            return -1;
      return e ? 1 : -1
    }
    function o(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }
    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }
    function d(e) {
      return i(function(t) {
        return t = +t,
          i(function(n, i) {
            for (var a, r = e([], n.length, t), s = r.length; s--; )
              n[a = r[s]] && (n[a] = !(i[a] = n[a]))
          })
      })
    }
    function p(e) {
      return e && typeof e.getElementsByTagName !== G && e
    }
    function u() {}
    function c(e, n) {
      var i, a, r, s, o, l, d, p = R[e + " "];
      if (p)
        return n ? 0 : p.slice(0);
      for (o = e,
             l = [],
             d = S.preFilter; o; ) {
        (!i || (a = de.exec(o))) && (a && (o = o.slice(a[0].length) || o),
          l.push(r = [])),
          i = !1,
        (a = pe.exec(o)) && (i = a.shift(),
          r.push({
            value: i,
            type: a[0].replace(le, " ")
          }),
          o = o.slice(i.length));
        for (s in S.filter)
          !(a = fe[s].exec(o)) || d[s] && !(a = d[s](a)) || (i = a.shift(),
            r.push({
              value: i,
              type: s,
              matches: a
            }),
            o = o.slice(i.length));
        if (!i)
          break
      }
      return n ? o.length : o ? t.error(e) : R(e, l).slice(0)
    }
    function h(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++)
        i += e[t].value;
      return i
    }
    function f(e, t, n) {
      var i = t.dir
        , a = n && "parentNode" === i
        , r = W++;
      return t.first ? function(t, n, r) {
          for (; t = t[i]; )
            if (1 === t.nodeType || a)
              return e(t, n, r)
        }
        : function(t, n, s) {
          var o, l, d = [X, r];
          if (s) {
            for (; t = t[i]; )
              if ((1 === t.nodeType || a) && e(t, n, s))
                return !0
          } else
            for (; t = t[i]; )
              if (1 === t.nodeType || a) {
                if (l = t[B] || (t[B] = {}),
                (o = l[i]) && o[0] === X && o[1] === r)
                  return d[2] = o[2];
                if (l[i] = d,
                  d[2] = e(t, n, s))
                  return !0
              }
        }
    }
    function m(e) {
      return e.length > 1 ? function(t, n, i) {
          for (var a = e.length; a--; )
            if (!e[a](t, n, i))
              return !1;
          return !0
        }
        : e[0]
    }
    function g(e, t, n, i, a) {
      for (var r, s = [], o = 0, l = e.length, d = null != t; l > o; o++)
        (r = e[o]) && (!n || n(r, i, a)) && (s.push(r),
        d && t.push(o));
      return s
    }
    function v(e, t, n, a, r, s) {
      return a && !a[B] && (a = v(a)),
      r && !r[B] && (r = v(r, s)),
        i(function(i, s, o, l) {
          var d, p, u, c = [], h = [], f = s.length, m = i || b(t || "*", o.nodeType ? [o] : o, []), v = !e || !i && t ? m : g(m, c, e, o, l), y = n ? r || (i ? e : f || a) ? [] : s : v;
          if (n && n(v, y, o, l),
            a)
            for (d = g(y, h),
                   a(d, [], o, l),
                   p = d.length; p--; )
              (u = d[p]) && (y[h[p]] = !(v[h[p]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (d = [],
                       p = y.length; p--; )
                  (u = y[p]) && d.push(v[p] = u);
                r(null, y = [], d, l)
              }
              for (p = y.length; p--; )
                (u = y[p]) && (d = r ? te.call(i, u) : c[p]) > -1 && (i[d] = !(s[d] = u))
            }
          } else
            y = g(y === s ? y.splice(f, y.length) : y),
              r ? r(null, s, y, l) : Z.apply(s, y)
        })
    }
    function y(e) {
      for (var t, n, i, a = e.length, r = S.relative[e[0].type], s = r || S.relative[" "], o = r ? 1 : 0, l = f(function(e) {
        return e === t
      }, s, !0), d = f(function(e) {
        return te.call(t, e) > -1
      }, s, !0), p = [function(e, n, i) {
        return !r && (i || n !== z) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i))
      }
      ]; a > o; o++)
        if (n = S.relative[e[o].type])
          p = [f(m(p), n)];
        else {
          if (n = S.filter[e[o].type].apply(null, e[o].matches),
            n[B]) {
            for (i = ++o; a > i && !S.relative[e[i].type]; i++)
              ;
            return v(o > 1 && m(p), o > 1 && h(e.slice(0, o - 1).concat({
              value: " " === e[o - 2].type ? "*" : ""
            })).replace(le, "$1"), n, i > o && y(e.slice(o, i)), a > i && y(e = e.slice(i)), a > i && h(e))
          }
          p.push(n)
        }
      return m(p)
    }
    function w(e, n) {
      var a = n.length > 0
        , r = e.length > 0
        , s = function(i, s, o, l, d) {
        var p, u, c, h = 0, f = "0", m = i && [], v = [], y = z, w = i || r && S.find.TAG("*", d), b = X += null == y ? 1 : Math.random() || .1, x = w.length;
        for (d && (z = s !== P && s); f !== x && null != (p = w[f]); f++) {
          if (r && p) {
            for (u = 0; c = e[u++]; )
              if (c(p, s, o)) {
                l.push(p);
                break
              }
            d && (X = b)
          }
          a && ((p = !c && p) && h--,
          i && m.push(p))
        }
        if (h += f,
        a && f !== h) {
          for (u = 0; c = n[u++]; )
            c(m, v, s, o);
          if (i) {
            if (h > 0)
              for (; f--; )
                m[f] || v[f] || (v[f] = K.call(l));
            v = g(v)
          }
          Z.apply(l, v),
          d && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
        }
        return d && (X = b,
          z = y),
          m
      };
      return a ? i(s) : s
    }
    function b(e, n, i) {
      for (var a = 0, r = n.length; r > a; a++)
        t(e, n[a], i);
      return i
    }
    function x(e, t, n, i) {
      var a, r, s, o, l, d = c(e);
      if (!i && 1 === d.length) {
        if (r = d[0] = d[0].slice(0),
        r.length > 2 && "ID" === (s = r[0]).type && C.getById && 9 === t.nodeType && $ && S.relative[r[1].type]) {
          if (t = (S.find.ID(s.matches[0].replace(xe, Te), t) || [])[0],
            !t)
            return n;
          e = e.slice(r.shift().value.length)
        }
        for (a = fe.needsContext.test(e) ? 0 : r.length; a-- && (s = r[a],
          !S.relative[o = s.type]); )
          if ((l = S.find[o]) && (i = l(s.matches[0].replace(xe, Te), we.test(r[0].type) && p(t.parentNode) || t))) {
            if (r.splice(a, 1),
              e = i.length && h(r),
              !e)
              return Z.apply(n, i),
                n;
            break
          }
      }
      return M(e, d)(i, t, !$, n, we.test(e) && p(t.parentNode) || t),
        n
    }
    var T, C, S, E, k, M, z, D, N, L, P, A, $, I, H, O, _, B = "sizzle" + -new Date, j = e.document, X = 0, W = 0, F = n(), R = n(), q = n(), Y = function(e, t) {
      return e === t && (N = !0),
        0
    }, G = "undefined", V = 1 << 31, U = {}.hasOwnProperty, Q = [], K = Q.pop, J = Q.push, Z = Q.push, ee = Q.slice, te = Q.indexOf || function(e) {
      for (var t = 0, n = this.length; n > t; t++)
        if (this[t] === e)
          return t;
      return -1
    }
      , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ae.replace("w", "w#"), se = "\\[" + ie + "*(" + ae + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]", oe = ":(" + ae + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$","g"), de = new RegExp("^" + ie + "*," + ie + "*"), pe = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]","g"), ce = new RegExp(oe), he = new RegExp("^" + re + "$"), fe = {
      ID: new RegExp("^#(" + ae + ")"),
      CLASS: new RegExp("^\\.(" + ae + ")"),
      TAG: new RegExp("^(" + ae.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + se),
      PSEUDO: new RegExp("^" + oe),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)","i"),
      bool: new RegExp("^(?:" + ne + ")$","i"),
      needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)","i")
    }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)","ig"), Te = function(e, t, n) {
      var i = "0x" + t - 65536;
      return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    };
    try {
      Z.apply(Q = ee.call(j.childNodes), j.childNodes),
        Q[j.childNodes.length].nodeType
    } catch (Ce) {
      Z = {
        apply: Q.length ? function(e, t) {
            J.apply(e, ee.call(t))
          }
          : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++]; )
              ;
            e.length = n - 1
          }
      }
    }
    C = t.support = {},
      k = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }
      ,
      L = t.setDocument = function(e) {
        var t, n = e ? e.ownerDocument || e : j, i = n.defaultView;
        return n !== P && 9 === n.nodeType && n.documentElement ? (P = n,
          A = n.documentElement,
          $ = !k(n),
        i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
          L()
        }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
          L()
        })),
          C.attributes = a(function(e) {
            return e.className = "i",
              !e.getAttribute("className")
          }),
          C.getElementsByTagName = a(function(e) {
            return e.appendChild(n.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          C.getElementsByClassName = ve.test(n.getElementsByClassName) && a(function(e) {
            return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
              e.firstChild.className = "i",
            2 === e.getElementsByClassName("i").length
          }),
          C.getById = a(function(e) {
            return A.appendChild(e).id = B,
            !n.getElementsByName || !n.getElementsByName(B).length
          }),
          C.getById ? (S.find.ID = function(e, t) {
              if (typeof t.getElementById !== G && $) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
              }
            }
              ,
              S.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                  return e.getAttribute("id") === t
                }
              }
          ) : (delete S.find.ID,
              S.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                  var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                  return n && n.value === t
                }
              }
          ),
          S.find.TAG = C.getElementsByTagName ? function(e, t) {
              return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
              var n, i = [], a = 0, r = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; n = r[a++]; )
                  1 === n.nodeType && i.push(n);
                return i
              }
              return r
            }
          ,
          S.find.CLASS = C.getElementsByClassName && function(e, t) {
            return typeof t.getElementsByClassName !== G && $ ? t.getElementsByClassName(e) : void 0
          }
          ,
          H = [],
          I = [],
        (C.qsa = ve.test(n.querySelectorAll)) && (a(function(e) {
          e.innerHTML = "<select t=''><option selected=''></option></select>",
          e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"),
          e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ne + ")"),
          e.querySelectorAll(":checked").length || I.push(":checked")
        }),
          a(function(e) {
            var t = n.createElement("input");
            t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
            e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="),
            e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              I.push(",.*:")
          })),
        (C.matchesSelector = ve.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && a(function(e) {
          C.disconnectedMatch = O.call(e, "div"),
            O.call(e, "[s!='']:x"),
            H.push("!=", oe)
        }),
          I = I.length && new RegExp(I.join("|")),
          H = H.length && new RegExp(H.join("|")),
          t = ve.test(A.compareDocumentPosition),
          _ = t || ve.test(A.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , i = t && t.parentNode;
              return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
              if (t)
                for (; t = t.parentNode; )
                  if (t === e)
                    return !0;
              return !1
            }
          ,
          Y = t ? function(e, t) {
              if (e === t)
                return N = !0,
                  0;
              var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !C.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === j && _(j, e) ? -1 : t === n || t.ownerDocument === j && _(j, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
              if (e === t)
                return N = !0,
                  0;
              var i, a = 0, r = e.parentNode, o = t.parentNode, l = [e], d = [t];
              if (!r || !o)
                return e === n ? -1 : t === n ? 1 : r ? -1 : o ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
              if (r === o)
                return s(e, t);
              for (i = e; i = i.parentNode; )
                l.unshift(i);
              for (i = t; i = i.parentNode; )
                d.unshift(i);
              for (; l[a] === d[a]; )
                a++;
              return a ? s(l[a], d[a]) : l[a] === j ? -1 : d[a] === j ? 1 : 0
            }
          ,
          n) : P
      }
      ,
      t.matches = function(e, n) {
        return t(e, null, null, n)
      }
      ,
      t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== P && L(e),
          n = n.replace(ue, "='$1']"),
          !(!C.matchesSelector || !$ || H && H.test(n) || I && I.test(n)))
          try {
            var i = O.call(e, n);
            if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType)
              return i
          } catch (a) {}
        return t(n, P, null, [e]).length > 0
      }
      ,
      t.contains = function(e, t) {
        return (e.ownerDocument || e) !== P && L(e),
          _(e, t)
      }
      ,
      t.attr = function(e, t) {
        (e.ownerDocument || e) !== P && L(e);
        var n = S.attrHandle[t.toLowerCase()]
          , i = n && U.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
        return void 0 !== i ? i : C.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }
      ,
      t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      t.uniqueSort = function(e) {
        var t, n = [], i = 0, a = 0;
        if (N = !C.detectDuplicates,
          D = !C.sortStable && e.slice(0),
          e.sort(Y),
          N) {
          for (; t = e[a++]; )
            t === e[a] && (i = n.push(a));
          for (; i--; )
            e.splice(n[i], 1)
        }
        return D = null,
          e
      }
      ,
      E = t.getText = function(e) {
        var t, n = "", i = 0, a = e.nodeType;
        if (a) {
          if (1 === a || 9 === a || 11 === a) {
            if ("string" == typeof e.textContent)
              return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling)
              n += E(e)
          } else if (3 === a || 4 === a)
            return e.nodeValue
        } else
          for (; t = e[i++]; )
            n += E(t);
        return n
      }
      ,
      S = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(xe, Te),
              e[3] = (e[4] || e[5] || "").replace(xe, Te),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(),
              "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
              e
          },
          PSEUDO: function(e) {
            var t, n = !e[5] && e[2];
            return fe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ce.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
              e[2] = n.slice(0, t)),
              e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(xe, Te).toLowerCase();
            return "*" === e ? function() {
                return !0
              }
              : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
          },
          CLASS: function(e) {
            var t = F[e + " "];
            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && F(e, function(e) {
              return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, i) {
            return function(a) {
              var r = t.attr(a, e);
              return null == r ? "!=" === n : n ? (r += "",
                "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
          },
          CHILD: function(e, t, n, i, a) {
            var r = "nth" !== e.slice(0, 3)
              , s = "last" !== e.slice(-4)
              , o = "of-type" === t;
            return 1 === i && 0 === a ? function(e) {
                return !!e.parentNode
              }
              : function(t, n, l) {
                var d, p, u, c, h, f, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = o && t.nodeName.toLowerCase(), y = !l && !o;
                if (g) {
                  if (r) {
                    for (; m; ) {
                      for (u = t; u = u[m]; )
                        if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                          return !1;
                      f = m = "only" === e && !f && "nextSibling"
                    }
                    return !0
                  }
                  if (f = [s ? g.firstChild : g.lastChild],
                  s && y) {
                    for (p = g[B] || (g[B] = {}),
                           d = p[e] || [],
                           h = d[0] === X && d[1],
                           c = d[0] === X && d[2],
                           u = h && g.childNodes[h]; u = ++h && u && u[m] || (c = h = 0) || f.pop(); )
                      if (1 === u.nodeType && ++c && u === t) {
                        p[e] = [X, h, c];
                        break
                      }
                  } else if (y && (d = (t[B] || (t[B] = {}))[e]) && d[0] === X)
                    c = d[1];
                  else
                    for (; (u = ++h && u && u[m] || (c = h = 0) || f.pop()) && ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++c || (y && ((u[B] || (u[B] = {}))[e] = [X, c]),
                    u !== t)); )
                      ;
                  return c -= a,
                  c === i || c % i === 0 && c / i >= 0
                }
              }
          },
          PSEUDO: function(e, n) {
            var a, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return r[B] ? r(n) : r.length > 1 ? (a = [e, e, "", n],
                S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                  for (var i, a = r(e, n), s = a.length; s--; )
                    i = te.call(e, a[s]),
                      e[i] = !(t[i] = a[s])
                }) : function(e) {
                  return r(e, 0, a)
                }
            ) : r
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = []
              , n = []
              , a = M(e.replace(le, "$1"));
            return a[B] ? i(function(e, t, n, i) {
              for (var r, s = a(e, null, i, []), o = e.length; o--; )
                (r = s[o]) && (e[o] = !(t[o] = r))
            }) : function(e, i, r) {
              return t[0] = e,
                a(t, null, r, n),
                !n.pop()
            }
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: i(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
            }
          }),
          lang: i(function(e) {
            return he.test(e || "") || t.error("unsupported lang: " + e),
              e = e.replace(xe, Te).toLowerCase(),
              function(t) {
                var n;
                do
                  if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    return n = n.toLowerCase(),
                    n === e || 0 === n.indexOf(e + "-");
                while ((t = t.parentNode) && 1 === t.nodeType);return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === A
          },
          focus: function(e) {
            return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return e.disabled === !1
          },
          disabled: function(e) {
            return e.disabled === !0
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex,
            e.selected === !0
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6)
                return !1;
            return !0
          },
          parent: function(e) {
            return !S.pseudos.empty(e)
          },
          header: function(e) {
            return ge.test(e.nodeName)
          },
          input: function(e) {
            return me.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: d(function() {
            return [0]
          }),
          last: d(function(e, t) {
            return [t - 1]
          }),
          eq: d(function(e, t, n) {
            return [0 > n ? n + t : n]
          }),
          even: d(function(e, t) {
            for (var n = 0; t > n; n += 2)
              e.push(n);
            return e
          }),
          odd: d(function(e, t) {
            for (var n = 1; t > n; n += 2)
              e.push(n);
            return e
          }),
          lt: d(function(e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0; )
              e.push(i);
            return e
          }),
          gt: d(function(e, t, n) {
            for (var i = 0 > n ? n + t : n; ++i < t; )
              e.push(i);
            return e
          })
        }
      },
      S.pseudos.nth = S.pseudos.eq;
    for (T in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })
      S.pseudos[T] = o(T);
    for (T in {
      submit: !0,
      reset: !0
    })
      S.pseudos[T] = l(T);
    return u.prototype = S.filters = S.pseudos,
      S.setFilters = new u,
      M = t.compile = function(e, t) {
        var n, i = [], a = [], r = q[e + " "];
        if (!r) {
          for (t || (t = c(e)),
                 n = t.length; n--; )
            r = y(t[n]),
              r[B] ? i.push(r) : a.push(r);
          r = q(e, w(a, i))
        }
        return r
      }
      ,
      C.sortStable = B.split("").sort(Y).join("") === B,
      C.detectDuplicates = !!N,
      L(),
      C.sortDetached = a(function(e) {
        return 1 & e.compareDocumentPosition(P.createElement("div"))
      }),
    a(function(e) {
      return e.innerHTML = "<a href='#'></a>",
      "#" === e.firstChild.getAttribute("href")
    }) || r("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }),
    C.attributes && a(function(e) {
      return e.innerHTML = "<input/>",
        e.firstChild.setAttribute("value", ""),
      "" === e.firstChild.getAttribute("value")
    }) || r("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }),
    a(function(e) {
      return null == e.getAttribute("disabled")
    }) || r(ne, function(e, t, n) {
      var i;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }),
      t
  }(e);
  re.find = pe,
    re.expr = pe.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.unique = pe.uniqueSort,
    re.text = pe.getText,
    re.isXMLDoc = pe.isXML,
    re.contains = pe.contains;
  var ue = re.expr.match.needsContext
    , ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
    , he = /^.[^:#\[\.,]*$/;
  re.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
        return 1 === e.nodeType
      }))
  }
    ,
    re.fn.extend({
      find: function(e) {
        var t, n = [], i = this, a = i.length;
        if ("string" != typeof e)
          return this.pushStack(re(e).filter(function() {
            for (t = 0; a > t; t++)
              if (re.contains(i[t], this))
                return !0
          }));
        for (t = 0; a > t; t++)
          re.find(e, i[t], n);
        return n = this.pushStack(a > 1 ? re.unique(n) : n),
          n.selector = this.selector ? this.selector + " " + e : e,
          n
      },
      filter: function(e) {
        return this.pushStack(i(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(i(this, e || [], !0))
      },
      is: function(e) {
        return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
      }
    });
  var fe, me = e.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = re.fn.init = function(e, t) {
      var n, i;
      if (!e)
        return this;
      if ("string" == typeof e) {
        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e),
        !n || !n[1] && t)
          return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof re ? t[0] : t,
            re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : me, !0)),
          ce.test(n[1]) && re.isPlainObject(t))
            for (n in t)
              re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        if (i = me.getElementById(n[2]),
        i && i.parentNode) {
          if (i.id !== n[2])
            return fe.find(e);
          this.length = 1,
            this[0] = i
        }
        return this.context = me,
          this.selector = e,
          this
      }
      return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : re.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        re.makeArray(e, this))
    }
  ;
  ve.prototype = re.fn,
    fe = re(me);
  var ye = /^(?:parents|prev(?:Until|All))/
    , we = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  re.extend({
    dir: function(e, t, n) {
      for (var i = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !re(a).is(n)); )
        1 === a.nodeType && i.push(a),
          a = a[t];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }),
    re.fn.extend({
      has: function(e) {
        var t, n = re(e, this), i = n.length;
        return this.filter(function() {
          for (t = 0; i > t; t++)
            if (re.contains(this, n[t]))
              return !0
        })
      },
      closest: function(e, t) {
        for (var n, i = 0, a = this.length, r = [], s = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; a > i; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
              r.push(n);
              break
            }
        return this.pushStack(r.length > 1 ? re.unique(r) : r)
      },
      index: function(e) {
        return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }),
    re.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return re.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return re.dir(e, "parentNode", n)
      },
      next: function(e) {
        return a(e, "nextSibling")
      },
      prev: function(e) {
        return a(e, "previousSibling")
      },
      nextAll: function(e) {
        return re.dir(e, "nextSibling")
      },
      prevAll: function(e) {
        return re.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return re.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return re.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
        return re.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return re.sibling(e.firstChild)
      },
      contents: function(e) {
        return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
      }
    }, function(e, t) {
      re.fn[e] = function(n, i) {
        var a = re.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n),
        i && "string" == typeof i && (a = re.filter(i, a)),
        this.length > 1 && (we[e] || (a = re.unique(a)),
        ye.test(e) && (a = a.reverse())),
          this.pushStack(a)
      }
    });
  var be = /\S+/g
    , xe = {};
  re.Callbacks = function(e) {
    e = "string" == typeof e ? xe[e] || r(e) : re.extend({}, e);
    var t, n, i, a, s, o, l = [], d = !e.once && [], p = function(r) {
      for (n = e.memory && r,
             i = !0,
             s = o || 0,
             o = 0,
             a = l.length,
             t = !0; l && a > s; s++)
        if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
          n = !1;
          break
        }
      t = !1,
      l && (d ? d.length && p(d.shift()) : n ? l = [] : u.disable())
    }, u = {
      add: function() {
        if (l) {
          var i = l.length;
          !function r(t) {
            re.each(t, function(t, n) {
              var i = re.type(n);
              "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
            })
          }(arguments),
            t ? a = l.length : n && (o = i,
              p(n))
        }
        return this
      },
      remove: function() {
        return l && re.each(arguments, function(e, n) {
          for (var i; (i = re.inArray(n, l, i)) > -1; )
            l.splice(i, 1),
            t && (a >= i && a--,
            s >= i && s--)
        }),
          this
      },
      has: function(e) {
        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
      },
      empty: function() {
        return l = [],
          a = 0,
          this
      },
      disable: function() {
        return l = d = n = void 0,
          this
      },
      disabled: function() {
        return !l
      },
      lock: function() {
        return d = void 0,
        n || u.disable(),
          this
      },
      locked: function() {
        return !d
      },
      fireWith: function(e, n) {
        return !l || i && !d || (n = n || [],
          n = [e, n.slice ? n.slice() : n],
          t ? d.push(n) : p(n)),
          this
      },
      fire: function() {
        return u.fireWith(this, arguments),
          this
      },
      fired: function() {
        return !!i
      }
    };
    return u
  }
    ,
    re.extend({
      Deferred: function(e) {
        var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]]
          , n = "pending"
          , i = {
          state: function() {
            return n
          },
          always: function() {
            return a.done(arguments).fail(arguments),
              this
          },
          then: function() {
            var e = arguments;
            return re.Deferred(function(n) {
              re.each(t, function(t, r) {
                var s = re.isFunction(e[t]) && e[t];
                a[r[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                })
              }),
                e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? re.extend(e, i) : i
          }
        }
          , a = {};
        return i.pipe = i.then,
          re.each(t, function(e, r) {
            var s = r[2]
              , o = r[3];
            i[r[1]] = s.add,
            o && s.add(function() {
              n = o
            }, t[1 ^ e][2].disable, t[2][2].lock),
              a[r[0]] = function() {
                return a[r[0] + "With"](this === a ? i : this, arguments),
                  this
              }
              ,
              a[r[0] + "With"] = s.fireWith
          }),
          i.promise(a),
        e && e.call(a, a),
          a
      },
      when: function(e) {
        var t, n, i, a = 0, r = U.call(arguments), s = r.length, o = 1 !== s || e && re.isFunction(e.promise) ? s : 0, l = 1 === o ? e : re.Deferred(), d = function(e, n, i) {
          return function(a) {
            n[e] = this,
              i[e] = arguments.length > 1 ? U.call(arguments) : a,
              i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
          }
        };
        if (s > 1)
          for (t = new Array(s),
                 n = new Array(s),
                 i = new Array(s); s > a; a++)
            r[a] && re.isFunction(r[a].promise) ? r[a].promise().done(d(a, i, r)).fail(l.reject).progress(d(a, n, t)) : --o;
        return o || l.resolveWith(i, r),
          l.promise()
      }
    });
  var Te;
  re.fn.ready = function(e) {
    return re.ready.promise().done(e),
      this
  }
    ,
    re.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? re.readyWait++ : re.ready(!0)
      },
      ready: function(e) {
        if (e === !0 ? !--re.readyWait : !re.isReady) {
          if (!me.body)
            return setTimeout(re.ready);
          re.isReady = !0,
          e !== !0 && --re.readyWait > 0 || (Te.resolveWith(me, [re]),
          re.fn.trigger && re(me).trigger("ready").off("ready"))
        }
      }
    }),
    re.ready.promise = function(t) {
      if (!Te)
        if (Te = re.Deferred(),
        "complete" === me.readyState)
          setTimeout(re.ready);
        else if (me.addEventListener)
          me.addEventListener("DOMContentLoaded", o, !1),
            e.addEventListener("load", o, !1);
        else {
          me.attachEvent("onreadystatechange", o),
            e.attachEvent("onload", o);
          var n = !1;
          try {
            n = null == e.frameElement && me.documentElement
          } catch (i) {}
          n && n.doScroll && !function a() {
            if (!re.isReady) {
              try {
                n.doScroll("left")
              } catch (e) {
                return setTimeout(a, 50)
              }
              s(),
                re.ready()
            }
          }()
        }
      return Te.promise(t)
    }
  ;
  var Ce, Se = "undefined";
  for (Ce in re(ie))
    break;
  ie.ownLast = "0" !== Ce,
    ie.inlineBlockNeedsLayout = !1,
    re(function() {
      var e, t, n = me.getElementsByTagName("body")[0];
      n && (e = me.createElement("div"),
        e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        t = me.createElement("div"),
        n.appendChild(e).appendChild(t),
      typeof t.style.zoom !== Se && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
      (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)),
        n.removeChild(e),
        e = t = null)
    }),
    function() {
      var e = me.createElement("div");
      if (null == ie.deleteExpando) {
        ie.deleteExpando = !0;
        try {
          delete e.test
        } catch (t) {
          ie.deleteExpando = !1
        }
      }
      e = null
    }(),
    re.acceptData = function(e) {
      var t = re.noData[(e.nodeName + " ").toLowerCase()]
        , n = +e.nodeType || 1;
      return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
  ;
  var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , ke = /([A-Z])/g;
  re.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando],
      !!e && !d(e)
    },
    data: function(e, t, n) {
      return p(e, t, n)
    },
    removeData: function(e, t) {
      return u(e, t)
    },
    _data: function(e, t, n) {
      return p(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return u(e, t, !0)
    }
  }),
    re.fn.extend({
      data: function(e, t) {
        var n, i, a, r = this[0], s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (a = re.data(r),
          1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
            for (n = s.length; n--; )
              i = s[n].name,
              0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)),
                l(r, i, a[i]));
            re._data(r, "parsedAttrs", !0)
          }
          return a
        }
        return "object" == typeof e ? this.each(function() {
          re.data(this, e)
        }) : arguments.length > 1 ? this.each(function() {
          re.data(this, e, t)
        }) : r ? l(r, e, re.data(r, e)) : void 0
      },
      removeData: function(e) {
        return this.each(function() {
          re.removeData(this, e)
        })
      }
    }),
    re.extend({
      queue: function(e, t, n) {
        var i;
        return e ? (t = (t || "fx") + "queue",
          i = re._data(e, t),
        n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)),
        i || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = re.queue(e, t)
          , i = n.length
          , a = n.shift()
          , r = re._queueHooks(e, t)
          , s = function() {
          re.dequeue(e, t)
        };
        "inprogress" === a && (a = n.shift(),
          i--),
        a && ("fx" === t && n.unshift("inprogress"),
          delete r.stop,
          a.call(e, s, r)),
        !i && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return re._data(e, n) || re._data(e, n, {
          empty: re.Callbacks("once memory").add(function() {
            re._removeData(e, t + "queue"),
              re._removeData(e, n)
          })
        })
      }
    }),
    re.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e,
          e = "fx",
          n--),
          arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
            var n = re.queue(this, e, t);
            re._queueHooks(this, e),
            "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
          })
      },
      dequeue: function(e) {
        return this.each(function() {
          re.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, i = 1, a = re.Deferred(), r = this, s = this.length, o = function() {
          --i || a.resolveWith(r, [r])
        };
        for ("string" != typeof e && (t = e,
          e = void 0),
               e = e || "fx"; s--; )
          n = re._data(r[s], e + "queueHooks"),
          n && n.empty && (i++,
            n.empty.add(o));
        return o(),
          a.promise(t)
      }
    });
  var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , ze = ["Top", "Right", "Bottom", "Left"]
    , De = function(e, t) {
    return e = t || e,
    "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
  }
    , Ne = re.access = function(e, t, n, i, a, r, s) {
    var o = 0
      , l = e.length
      , d = null == n;
    if ("object" === re.type(n)) {
      a = !0;
      for (o in n)
        re.access(e, t, o, n[o], !0, r, s)
    } else if (void 0 !== i && (a = !0,
    re.isFunction(i) || (s = !0),
    d && (s ? (t.call(e, i),
      t = null) : (d = t,
        t = function(e, t, n) {
          return d.call(re(e), n)
        }
    )),
      t))
      for (; l > o; o++)
        t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
    return a ? e : d ? t.call(e) : l ? t(e[0], n) : r
  }
    , Le = /^(?:checkbox|radio)$/i;
  !function() {
    var e = me.createDocumentFragment()
      , t = me.createElement("div")
      , n = me.createElement("input");
    if (t.setAttribute("className", "t"),
      t.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
      ie.leadingWhitespace = 3 === t.firstChild.nodeType,
      ie.tbody = !t.getElementsByTagName("tbody").length,
      ie.htmlSerialize = !!t.getElementsByTagName("link").length,
      ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML,
      n.type = "checkbox",
      n.checked = !0,
      e.appendChild(n),
      ie.appendChecked = n.checked,
      t.innerHTML = "<textarea>x</textarea>",
      ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
      e.appendChild(t),
      t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
      ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
      ie.noCloneEvent = !0,
    t.attachEvent && (t.attachEvent("onclick", function() {
      ie.noCloneEvent = !1
    }),
      t.cloneNode(!0).click()),
    null == ie.deleteExpando) {
      ie.deleteExpando = !0;
      try {
        delete t.test
      } catch (i) {
        ie.deleteExpando = !1
      }
    }
    e = t = n = null
  }(),
    function() {
      var t, n, i = me.createElement("div");
      for (t in {
        submit: !0,
        change: !0,
        focusin: !0
      })
        n = "on" + t,
        (ie[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"),
          ie[t + "Bubbles"] = i.attributes[n].expando === !1);
      i = null
    }();
  var Pe = /^(?:input|select|textarea)$/i
    , Ae = /^key/
    , $e = /^(?:mouse|contextmenu)|click/
    , Ie = /^(?:focusinfocus|focusoutblur)$/
    , He = /^([^.]*)(?:\.(.+)|)$/;
  re.event = {
    global: {},
    add: function(e, t, n, i, a) {
      var r, s, o, l, d, p, u, c, h, f, m, g = re._data(e);
      if (g) {
        for (n.handler && (l = n,
          n = l.handler,
          a = l.selector),
             n.guid || (n.guid = re.guid++),
             (s = g.events) || (s = g.events = {}),
             (p = g.handle) || (p = g.handle = function(e) {
               return typeof re === Se || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(p.elem, arguments)
             }
               ,
               p.elem = e),
               t = (t || "").match(be) || [""],
               o = t.length; o--; )
          r = He.exec(t[o]) || [],
            h = m = r[1],
            f = (r[2] || "").split(".").sort(),
          h && (d = re.event.special[h] || {},
            h = (a ? d.delegateType : d.bindType) || h,
            d = re.event.special[h] || {},
            u = re.extend({
              type: h,
              origType: m,
              data: i,
              handler: n,
              guid: n.guid,
              selector: a,
              needsContext: a && re.expr.match.needsContext.test(a),
              namespace: f.join(".")
            }, l),
          (c = s[h]) || (c = s[h] = [],
            c.delegateCount = 0,
          d.setup && d.setup.call(e, i, f, p) !== !1 || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))),
          d.add && (d.add.call(e, u),
          u.handler.guid || (u.handler.guid = n.guid)),
            a ? c.splice(c.delegateCount++, 0, u) : c.push(u),
            re.event.global[h] = !0);
        e = null
      }
    },
    remove: function(e, t, n, i, a) {
      var r, s, o, l, d, p, u, c, h, f, m, g = re.hasData(e) && re._data(e);
      if (g && (p = g.events)) {
        for (t = (t || "").match(be) || [""],
               d = t.length; d--; )
          if (o = He.exec(t[d]) || [],
            h = m = o[1],
            f = (o[2] || "").split(".").sort(),
            h) {
            for (u = re.event.special[h] || {},
                   h = (i ? u.delegateType : u.bindType) || h,
                   c = p[h] || [],
                   o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                   l = r = c.length; r--; )
              s = c[r],
              !a && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (c.splice(r, 1),
              s.selector && c.delegateCount--,
              u.remove && u.remove.call(e, s));
            l && !c.length && (u.teardown && u.teardown.call(e, f, g.handle) !== !1 || re.removeEvent(e, h, g.handle),
              delete p[h])
          } else
            for (h in p)
              re.event.remove(e, h + t[d], n, i, !0);
        re.isEmptyObject(p) && (delete g.handle,
          re._removeData(e, "events"))
      }
    },
    trigger: function(t, n, i, a) {
      var r, s, o, l, d, p, u, c = [i || me], h = te.call(t, "type") ? t.type : t, f = te.call(t, "namespace") ? t.namespace.split(".") : [];
      if (o = p = i = i || me,
      3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."),
        h = f.shift(),
        f.sort()),
        s = h.indexOf(":") < 0 && "on" + h,
        t = t[re.expando] ? t : new re.Event(h,"object" == typeof t && t),
        t.isTrigger = a ? 2 : 3,
        t.namespace = f.join("."),
        t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
        t.result = void 0,
      t.target || (t.target = i),
        n = null == n ? [t] : re.makeArray(n, [t]),
        d = re.event.special[h] || {},
      a || !d.trigger || d.trigger.apply(i, n) !== !1)) {
        if (!a && !d.noBubble && !re.isWindow(i)) {
          for (l = d.delegateType || h,
               Ie.test(l + h) || (o = o.parentNode); o; o = o.parentNode)
            c.push(o),
              p = o;
          p === (i.ownerDocument || me) && c.push(p.defaultView || p.parentWindow || e)
        }
        for (u = 0; (o = c[u++]) && !t.isPropagationStopped(); )
          t.type = u > 1 ? l : d.bindType || h,
            r = (re._data(o, "events") || {})[t.type] && re._data(o, "handle"),
          r && r.apply(o, n),
            r = s && o[s],
          r && r.apply && re.acceptData(o) && (t.result = r.apply(o, n),
          t.result === !1 && t.preventDefault());
        if (t.type = h,
        !a && !t.isDefaultPrevented() && (!d._default || d._default.apply(c.pop(), n) === !1) && re.acceptData(i) && s && i[h] && !re.isWindow(i)) {
          p = i[s],
          p && (i[s] = null),
            re.event.triggered = h;
          try {
            i[h]()
          } catch (m) {}
          re.event.triggered = void 0,
          p && (i[s] = p)
        }
        return t.result
      }
    },
    dispatch: function(e) {
      e = re.event.fix(e);
      var t, n, i, a, r, s = [], o = U.call(arguments), l = (re._data(this, "events") || {})[e.type] || [], d = re.event.special[e.type] || {};
      if (o[0] = e,
        e.delegateTarget = this,
      !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
        for (s = re.event.handlers.call(this, e, l),
               t = 0; (a = s[t++]) && !e.isPropagationStopped(); )
          for (e.currentTarget = a.elem,
                 r = 0; (i = a.handlers[r++]) && !e.isImmediatePropagationStopped(); )
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
              e.data = i.data,
              n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o),
            void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
              e.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, e),
          e.result
      }
    },
    handlers: function(e, t) {
      var n, i, a, r, s = [], o = t.delegateCount, l = e.target;
      if (o && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
            for (a = [],
                   r = 0; o > r; r++)
              i = t[r],
                n = i.selector + " ",
              void 0 === a[n] && (a[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length),
              a[n] && a.push(i);
            a.length && s.push({
              elem: l,
              handlers: a
            })
          }
      return o < t.length && s.push({
        elem: this,
        handlers: t.slice(o)
      }),
        s
    },
    fix: function(e) {
      if (e[re.expando])
        return e;
      var t, n, i, a = e.type, r = e, s = this.fixHooks[a];
      for (s || (this.fixHooks[a] = s = $e.test(a) ? this.mouseHooks : Ae.test(a) ? this.keyHooks : {}),
             i = s.props ? this.props.concat(s.props) : this.props,
             e = new re.Event(r),
             t = i.length; t--; )
        n = i[t],
          e[n] = r[n];
      return e.target || (e.target = r.srcElement || me),
      3 === e.target.nodeType && (e.target = e.target.parentNode),
        e.metaKey = !!e.metaKey,
        s.filter ? s.filter(e, r) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, a, r = t.button, s = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || me,
          a = i.documentElement,
          n = i.body,
          e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0),
          e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)),
        !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
        e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== f() && this.focus)
            try {
              return this.focus(),
                !1
            } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === f() && this.blur ? (this.blur(),
            !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
            !1) : void 0
        },
        _default: function(e) {
          return re.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, i) {
      var a = re.extend(new re.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? re.event.trigger(a, null, t) : re.event.dispatch.call(t, a),
      a.isDefaultPrevented() && n.preventDefault()
    }
  },
    re.removeEvent = me.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
      }
      : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Se && (e[i] = null),
          e.detachEvent(i, n))
      }
    ,
    re.Event = function(e, t) {
      return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? c : h) : this.type = e,
      t && re.extend(this, t),
        this.timeStamp = e && e.timeStamp || re.now(),
        void (this[re.expando] = !0)) : new re.Event(e,t)
    }
    ,
    re.Event.prototype = {
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = c,
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = c,
        e && (e.stopPropagation && e.stopPropagation(),
          e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = c,
          this.stopPropagation()
      }
    },
    re.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(e, t) {
      re.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = this, a = e.relatedTarget, r = e.handleObj;
          return (!a || a !== i && !re.contains(i, a)) && (e.type = r.origType,
            n = r.handler.apply(this, arguments),
            e.type = t),
            n
        }
      }
    }),
  ie.submitBubbles || (re.event.special.submit = {
    setup: function() {
      return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target
          , n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
        n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
          e._submit_bubble = !0
        }),
          re._data(n, "submitBubbles", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble,
      this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
    }
  }),
  ie.changeBubbles || (re.event.special.change = {
    setup: function() {
      return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }),
        re.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1),
            re.event.simulate("change", this, e, !0)
        })),
        !1) : void re.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Pe.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
        }),
          re._data(t, "changeBubbles", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return re.event.remove(this, "._change"),
        !Pe.test(this.nodeName)
    }
  }),
  ie.focusinBubbles || re.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      re.event.simulate(t, e.target, re.event.fix(e), !0)
    };
    re.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this
          , a = re._data(i, t);
        a || i.addEventListener(e, n, !0),
          re._data(i, t, (a || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this
          , a = re._data(i, t) - 1;
        a ? re._data(i, t, a) : (i.removeEventListener(e, n, !0),
          re._removeData(i, t))
      }
    }
  }),
    re.fn.extend({
      on: function(e, t, n, i, a) {
        var r, s;
        if ("object" == typeof e) {
          "string" != typeof t && (n = n || t,
            t = void 0);
          for (r in e)
            this.on(r, t, n, e[r], a);
          return this
        }
        if (null == n && null == i ? (i = t,
          n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
          n = void 0) : (i = n,
          n = t,
          t = void 0)),
        i === !1)
          i = h;
        else if (!i)
          return this;
        return 1 === a && (s = i,
          i = function(e) {
            return re().off(e),
              s.apply(this, arguments)
          }
          ,
          i.guid = s.guid || (s.guid = re.guid++)),
          this.each(function() {
            re.event.add(this, e, i, n, t)
          })
      },
      one: function(e, t, n, i) {
        return this.on(e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, a;
        if (e && e.preventDefault && e.handleObj)
          return i = e.handleObj,
            re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
            this;
        if ("object" == typeof e) {
          for (a in e)
            this.off(a, t, e[a]);
          return this
        }
        return (t === !1 || "function" == typeof t) && (n = t,
          t = void 0),
        n === !1 && (n = h),
          this.each(function() {
            re.event.remove(this, e, n, t)
          })
      },
      trigger: function(e, t) {
        return this.each(function() {
          re.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        return n ? re.event.trigger(e, t, n, !0) : void 0
      }
    });
  var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
    , _e = / jQuery\d+="(?:null|\d+)"/g
    , Be = new RegExp("<(?:" + Oe + ")[\\s/>]","i")
    , je = /^\s+/
    , Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
    , We = /<([\w:]+)/
    , Fe = /<tbody/i
    , Re = /<|&#?\w+;/
    , qe = /<(?:script|style|link)/i
    , Ye = /checked\s*(?:[^=]|=\s*.checked.)/i
    , Ge = /^$|\/(?:java|ecma)script/i
    , Ve = /^true\/(.*)/
    , Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , Qe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  }
    , Ke = m(me)
    , Je = Ke.appendChild(me.createElement("div"));
  Qe.optgroup = Qe.option,
    Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead,
    Qe.th = Qe.td,
    re.extend({
      clone: function(e, t, n) {
        var i, a, r, s, o, l = re.contains(e.ownerDocument, e);
        if (ie.html5Clone || re.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML,
          Je.removeChild(r = Je.firstChild)),
          !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
          for (i = g(r),
                 o = g(e),
                 s = 0; null != (a = o[s]); ++s)
            i[s] && C(a, i[s]);
        if (t)
          if (n)
            for (o = o || g(e),
                   i = i || g(r),
                   s = 0; null != (a = o[s]); s++)
              T(a, i[s]);
          else
            T(e, r);
        return i = g(r, "script"),
        i.length > 0 && x(i, !l && g(e, "script")),
          i = o = a = null,
          r
      },
      buildFragment: function(e, t, n, i) {
        for (var a, r, s, o, l, d, p, u = e.length, c = m(t), h = [], f = 0; u > f; f++)
          if (r = e[f],
          r || 0 === r)
            if ("object" === re.type(r))
              re.merge(h, r.nodeType ? [r] : r);
            else if (Re.test(r)) {
              for (o = o || c.appendChild(t.createElement("div")),
                     l = (We.exec(r) || ["", ""])[1].toLowerCase(),
                     p = Qe[l] || Qe._default,
                     o.innerHTML = p[1] + r.replace(Xe, "<$1></$2>") + p[2],
                     a = p[0]; a--; )
                o = o.lastChild;
              if (!ie.leadingWhitespace && je.test(r) && h.push(t.createTextNode(je.exec(r)[0])),
                !ie.tbody)
                for (r = "table" !== l || Fe.test(r) ? "<table>" !== p[1] || Fe.test(r) ? 0 : o : o.firstChild,
                       a = r && r.childNodes.length; a--; )
                  re.nodeName(d = r.childNodes[a], "tbody") && !d.childNodes.length && r.removeChild(d);
              for (re.merge(h, o.childNodes),
                     o.textContent = ""; o.firstChild; )
                o.removeChild(o.firstChild);
              o = c.lastChild
            } else
              h.push(t.createTextNode(r));
        for (o && c.removeChild(o),
             ie.appendChecked || re.grep(g(h, "input"), v),
               f = 0; r = h[f++]; )
          if ((!i || -1 === re.inArray(r, i)) && (s = re.contains(r.ownerDocument, r),
            o = g(c.appendChild(r), "script"),
          s && x(o),
            n))
            for (a = 0; r = o[a++]; )
              Ge.test(r.type || "") && n.push(r);
        return o = null,
          c
      },
      cleanData: function(e, t) {
        for (var n, i, a, r, s = 0, o = re.expando, l = re.cache, d = ie.deleteExpando, p = re.event.special; null != (n = e[s]); s++)
          if ((t || re.acceptData(n)) && (a = n[o],
            r = a && l[a])) {
            if (r.events)
              for (i in r.events)
                p[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
            l[a] && (delete l[a],
              d ? delete n[o] : typeof n.removeAttribute !== Se ? n.removeAttribute(o) : n[o] = null,
              V.push(a))
          }
      }
    }),
    re.fn.extend({
      text: function(e) {
        return Ne(this, function(e) {
          return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
        }, null, e, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = y(this, e);
            t.appendChild(e)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = y(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      remove: function(e, t) {
        for (var n, i = e ? re.filter(e, this) : this, a = 0; null != (n = i[a]); a++)
          t || 1 !== n.nodeType || re.cleanData(g(n)),
          n.parentNode && (t && re.contains(n.ownerDocument, n) && x(g(n, "script")),
            n.parentNode.removeChild(n));
        return this
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && re.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      },
      clone: function(e, t) {
        return e = null == e ? !1 : e,
          t = null == t ? e : t,
          this.map(function() {
            return re.clone(this, e, t)
          })
      },
      html: function(e) {
        return Ne(this, function(e) {
          var t = this[0] || {}
            , n = 0
            , i = this.length;
          if (void 0 === e)
            return 1 === t.nodeType ? t.innerHTML.replace(_e, "") : void 0;
          if (!("string" != typeof e || qe.test(e) || !ie.htmlSerialize && Be.test(e) || !ie.leadingWhitespace && je.test(e) || Qe[(We.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(Xe, "<$1></$2>");
            try {
              for (; i > n; n++)
                t = this[n] || {},
                1 === t.nodeType && (re.cleanData(g(t, !1)),
                  t.innerHTML = e);
              t = 0
            } catch (a) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = arguments[0];
        return this.domManip(arguments, function(t) {
          e = this.parentNode,
            re.cleanData(g(this)),
          e && e.replaceChild(t, this)
        }),
          e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
        return this.remove(e, !0)
      },
      domManip: function(e, t) {
        e = Q.apply([], e);
        var n, i, a, r, s, o, l = 0, d = this.length, p = this, u = d - 1, c = e[0], h = re.isFunction(c);
        if (h || d > 1 && "string" == typeof c && !ie.checkClone && Ye.test(c))
          return this.each(function(n) {
            var i = p.eq(n);
            h && (e[0] = c.call(this, n, i.html())),
              i.domManip(e, t)
          });
        if (d && (o = re.buildFragment(e, this[0].ownerDocument, !1, this),
          n = o.firstChild,
        1 === o.childNodes.length && (o = n),
          n)) {
          for (r = re.map(g(o, "script"), w),
                 a = r.length; d > l; l++)
            i = o,
            l !== u && (i = re.clone(i, !0, !0),
            a && re.merge(r, g(i, "script"))),
              t.call(this[l], i, l);
          if (a)
            for (s = r[r.length - 1].ownerDocument,
                   re.map(r, b),
                   l = 0; a > l; l++)
              i = r[l],
              Ge.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ue, "")));
          o = n = null
        }
        return this
      }
    }),
    re.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      re.fn[e] = function(e) {
        for (var n, i = 0, a = [], r = re(e), s = r.length - 1; s >= i; i++)
          n = i === s ? this : this.clone(!0),
            re(r[i])[t](n),
            K.apply(a, n.get());
        return this.pushStack(a)
      }
    });
  var Ze, et = {};
  !function() {
    var e, t, n = me.createElement("div"), i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
      e = n.getElementsByTagName("a")[0],
      e.style.cssText = "float:left;opacity:.5",
      ie.opacity = /^0.5/.test(e.style.opacity),
      ie.cssFloat = !!e.style.cssFloat,
      n.style.backgroundClip = "content-box",
      n.cloneNode(!0).style.backgroundClip = "",
      ie.clearCloneStyle = "content-box" === n.style.backgroundClip,
      e = n = null,
      ie.shrinkWrapBlocks = function() {
        var e, n, a, r;
        if (null == t) {
          if (e = me.getElementsByTagName("body")[0],
            !e)
            return;
          r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            n = me.createElement("div"),
            a = me.createElement("div"),
            e.appendChild(n).appendChild(a),
            t = !1,
          typeof a.style.zoom !== Se && (a.style.cssText = i + ";width:1px;padding:1px;zoom:1",
            a.innerHTML = "<div></div>",
            a.firstChild.style.width = "5px",
            t = 3 !== a.offsetWidth),
            e.removeChild(n),
            e = n = a = null
        }
        return t
      }
  }();
  var tt, nt, it = /^margin/, at = new RegExp("^(" + Me + ")(?!px)[a-z%]+$","i"), rt = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (tt = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }
      ,
      nt = function(e, t, n) {
        var i, a, r, s, o = e.style;
        return n = n || tt(e),
          s = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)),
        at.test(s) && it.test(t) && (i = o.width,
          a = o.minWidth,
          r = o.maxWidth,
          o.minWidth = o.maxWidth = o.width = s,
          s = n.width,
          o.width = i,
          o.minWidth = a,
          o.maxWidth = r)),
          void 0 === s ? s : s + ""
      }
  ) : me.documentElement.currentStyle && (tt = function(e) {
      return e.currentStyle
    }
      ,
      nt = function(e, t, n) {
        var i, a, r, s, o = e.style;
        return n = n || tt(e),
          s = n ? n[t] : void 0,
        null == s && o && o[t] && (s = o[t]),
        at.test(s) && !rt.test(t) && (i = o.left,
          a = e.runtimeStyle,
          r = a && a.left,
        r && (a.left = e.currentStyle.left),
          o.left = "fontSize" === t ? "1em" : s,
          s = o.pixelLeft + "px",
          o.left = i,
        r && (a.left = r)),
          void 0 === s ? s : s + "" || "auto"
      }
  ),
    !function() {
      function t() {
        var t, n, i = me.getElementsByTagName("body")[0];
        i && (t = me.createElement("div"),
          n = me.createElement("div"),
          t.style.cssText = d,
          i.appendChild(t).appendChild(n),
          n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
          re.swap(i, null != i.style.zoom ? {
            zoom: 1
          } : {}, function() {
            a = 4 === n.offsetWidth
          }),
          r = !0,
          s = !1,
          o = !0,
        e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(n, null) || {}).top,
          r = "4px" === (e.getComputedStyle(n, null) || {
            width: "4px"
          }).width),
          i.removeChild(t),
          n = i = null)
      }
      var n, i, a, r, s, o, l = me.createElement("div"), d = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", p = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = l.getElementsByTagName("a")[0],
        n.style.cssText = "float:left;opacity:.5",
        ie.opacity = /^0.5/.test(n.style.opacity),
        ie.cssFloat = !!n.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === l.style.backgroundClip,
        n = l = null,
        re.extend(ie, {
          reliableHiddenOffsets: function() {
            if (null != i)
              return i;
            var e, t, n, a = me.createElement("div"), r = me.getElementsByTagName("body")[0];
            return r ? (a.setAttribute("className", "t"),
              a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
              e = me.createElement("div"),
              e.style.cssText = d,
              r.appendChild(e).appendChild(a),
              a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
              t = a.getElementsByTagName("td"),
              t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
              n = 0 === t[0].offsetHeight,
              t[0].style.display = "",
              t[1].style.display = "none",
              i = n && 0 === t[0].offsetHeight,
              r.removeChild(e),
              a = r = null,
              i) : void 0
          },
          boxSizing: function() {
            return null == a && t(),
              a
          },
          boxSizingReliable: function() {
            return null == r && t(),
              r
          },
          pixelPosition: function() {
            return null == s && t(),
              s
          },
          reliableMarginRight: function() {
            var t, n, i, a;
            if (null == o && e.getComputedStyle) {
              if (t = me.getElementsByTagName("body")[0],
                !t)
                return;
              n = me.createElement("div"),
                i = me.createElement("div"),
                n.style.cssText = d,
                t.appendChild(n).appendChild(i),
                a = i.appendChild(me.createElement("div")),
                a.style.cssText = i.style.cssText = p,
                a.style.marginRight = a.style.width = "0",
                i.style.width = "1px",
                o = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight),
                t.removeChild(n)
            }
            return o
          }
        })
    }(),
    re.swap = function(e, t, n, i) {
      var a, r, s = {};
      for (r in t)
        s[r] = e.style[r],
          e.style[r] = t[r];
      a = n.apply(e, i || []);
      for (r in t)
        e.style[r] = s[r];
      return a
    }
  ;
  var st = /alpha\([^)]*\)/i
    , ot = /opacity\s*=\s*([^)]*)/
    , lt = /^(none|table(?!-c[ea]).+)/
    , dt = new RegExp("^(" + Me + ")(.*)$","i")
    , pt = new RegExp("^([+-])=(" + Me + ")","i")
    , ut = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }
    , ct = {
    letterSpacing: 0,
    fontWeight: 400
  }
    , ht = ["Webkit", "O", "Moz", "ms"];
  re.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = nt(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": ie.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a, r, s, o = re.camelCase(t), l = e.style;
        if (t = re.cssProps[o] || (re.cssProps[o] = M(l, o)),
          s = re.cssHooks[t] || re.cssHooks[o],
        void 0 === n)
          return s && "get"in s && void 0 !== (a = s.get(e, !1, i)) ? a : l[t];
        if (r = typeof n,
        "string" === r && (a = pt.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(re.css(e, t)),
          r = "number"),
        null != n && n === n && ("number" !== r || re.cssNumber[o] || (n += "px"),
        ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
          !(s && "set"in s && void 0 === (n = s.set(e, n, i)))))
          try {
            l[t] = "",
              l[t] = n
          } catch (d) {}
      }
    },
    css: function(e, t, n, i) {
      var a, r, s, o = re.camelCase(t);
      return t = re.cssProps[o] || (re.cssProps[o] = M(e.style, o)),
        s = re.cssHooks[t] || re.cssHooks[o],
      s && "get"in s && (r = s.get(e, !0, n)),
      void 0 === r && (r = nt(e, t, i)),
      "normal" === r && t in ct && (r = ct[t]),
        "" === n || n ? (a = parseFloat(r),
          n === !0 || re.isNumeric(a) ? a || 0 : r) : r
    }
  }),
    re.each(["height", "width"], function(e, t) {
      re.cssHooks[t] = {
        get: function(e, n, i) {
          return n ? 0 === e.offsetWidth && lt.test(re.css(e, "display")) ? re.swap(e, ut, function() {
            return L(e, t, i)
          }) : L(e, t, i) : void 0
        },
        set: function(e, n, i) {
          var a = i && tt(e);
          return D(e, n, i ? N(e, t, i, ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, a), a) : 0)
        }
      }
    }),
  ie.opacity || (re.cssHooks.opacity = {
    get: function(e, t) {
      return ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style
        , i = e.currentStyle
        , a = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
        , r = i && i.filter || n.filter || "";
      n.zoom = 1,
      (t >= 1 || "" === t) && "" === re.trim(r.replace(st, "")) && n.removeAttribute && (n.removeAttribute("filter"),
      "" === t || i && !i.filter) || (n.filter = st.test(r) ? r.replace(st, a) : r + " " + a)
    }
  }),
    re.cssHooks.marginRight = k(ie.reliableMarginRight, function(e, t) {
      return t ? re.swap(e, {
        display: "inline-block"
      }, nt, [e, "marginRight"]) : void 0
    }),
    re.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      re.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
            a[e + ze[i] + t] = r[i] || r[i - 2] || r[0];
          return a
        }
      },
      it.test(e) || (re.cssHooks[e + t].set = D)
    }),
    re.fn.extend({
      css: function(e, t) {
        return Ne(this, function(e, t, n) {
          var i, a, r = {}, s = 0;
          if (re.isArray(t)) {
            for (i = tt(e),
                   a = t.length; a > s; s++)
              r[t[s]] = re.css(e, t[s], !1, i);
            return r
          }
          return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return z(this, !0)
      },
      hide: function() {
        return z(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          De(this) ? re(this).show() : re(this).hide()
        })
      }
    }),
    re.Tween = P,
    P.prototype = {
      constructor: P,
      init: function(e, t, n, i, a, r) {
        this.elem = e,
          this.prop = n,
          this.easing = a || "swing",
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = i,
          this.unit = r || (re.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = P.propHooks[this.prop];
        return e && e.get ? e.get(this) : P.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = P.propHooks[this.prop];
        return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
          this.now = (this.end - this.start) * t + this.start,
        this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : P.propHooks._default.set(this),
          this
      }
    },
    P.prototype.init.prototype = P.prototype,
    P.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""),
            t && "auto" !== t ? t : 0) : e.elem[e.prop]
        },
        set: function(e) {
          re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    },
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    },
    re.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    },
    re.fx = P.prototype.init,
    re.fx.step = {};
  var ft, mt, gt = /^(?:toggle|show|hide)$/, vt = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$","i"), yt = /queueHooks$/, wt = [H], bt = {
    "*": [function(e, t) {
      var n = this.createTween(e, t)
        , i = n.cur()
        , a = vt.exec(t)
        , r = a && a[3] || (re.cssNumber[e] ? "" : "px")
        , s = (re.cssNumber[e] || "px" !== r && +i) && vt.exec(re.css(n.elem, e))
        , o = 1
        , l = 20;
      if (s && s[3] !== r) {
        r = r || s[3],
          a = a || [],
          s = +i || 1;
        do
          o = o || ".5",
            s /= o,
            re.style(n.elem, e, s + r);
        while (o !== (o = n.cur() / i) && 1 !== o && --l)
      }
      return a && (s = n.start = +s || +i || 0,
        n.unit = r,
        n.end = a[1] ? s + (a[1] + 1) * a[2] : +a[2]),
        n
    }
    ]
  };
  re.Animation = re.extend(_, {
    tweener: function(e, t) {
      re.isFunction(e) ? (t = e,
        e = ["*"]) : e = e.split(" ");
      for (var n, i = 0, a = e.length; a > i; i++)
        n = e[i],
          bt[n] = bt[n] || [],
          bt[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? wt.unshift(e) : wt.push(e)
    }
  }),
    re.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? re.extend({}, e) : {
        complete: n || !n && t || re.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !re.isFunction(t) && t
      };
      return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default,
      (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
          re.isFunction(i.old) && i.old.call(this),
          i.queue && re.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    re.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(De).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function(e, t, n, i) {
        var a = re.isEmptyObject(e)
          , r = re.speed(t, n, i)
          , s = function() {
          var t = _(this, re.extend({}, e), r);
          (a || re._data(this, "finish")) && t.stop(!0)
        };
        return s.finish = s,
          a || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop,
            t(n)
        };
        return "string" != typeof e && (n = t,
          t = e,
          e = void 0),
        t && e !== !1 && this.queue(e || "fx", []),
          this.each(function() {
            var t = !0
              , a = null != e && e + "queueHooks"
              , r = re.timers
              , s = re._data(this);
            if (a)
              s[a] && s[a].stop && i(s[a]);
            else
              for (a in s)
                s[a] && s[a].stop && yt.test(a) && i(s[a]);
            for (a = r.length; a--; )
              r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n),
                t = !1,
                r.splice(a, 1));
            (t || !n) && re.dequeue(this, e)
          })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"),
          this.each(function() {
            var t, n = re._data(this), i = n[e + "queue"], a = n[e + "queueHooks"], r = re.timers, s = i ? i.length : 0;
            for (n.finish = !0,
                   re.queue(this, e, []),
                 a && a.stop && a.stop.call(this, !0),
                   t = r.length; t--; )
              r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                r.splice(t, 1));
            for (t = 0; s > t; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          })
      }
    }),
    re.each(["toggle", "show", "hide"], function(e, t) {
      var n = re.fn[t];
      re.fn[t] = function(e, i, a) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, a)
      }
    }),
    re.each({
      slideDown: $("show"),
      slideUp: $("hide"),
      slideToggle: $("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      re.fn[e] = function(e, n, i) {
        return this.animate(t, e, n, i)
      }
    }),
    re.timers = [],
    re.fx.tick = function() {
      var e, t = re.timers, n = 0;
      for (ft = re.now(); n < t.length; n++)
        e = t[n],
        e() || t[n] !== e || t.splice(n--, 1);
      t.length || re.fx.stop(),
        ft = void 0
    }
    ,
    re.fx.timer = function(e) {
      re.timers.push(e),
        e() ? re.fx.start() : re.timers.pop()
    }
    ,
    re.fx.interval = 13,
    re.fx.start = function() {
      mt || (mt = setInterval(re.fx.tick, re.fx.interval))
    }
    ,
    re.fx.stop = function() {
      clearInterval(mt),
        mt = null
    }
    ,
    re.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    },
    re.fn.delay = function(e, t) {
      return e = re.fx ? re.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
          var i = setTimeout(t, e);
          n.stop = function() {
            clearTimeout(i)
          }
        })
    }
    ,
    function() {
      var e, t, n, i, a = me.createElement("div");
      a.setAttribute("className", "t"),
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = a.getElementsByTagName("a")[0],
        n = me.createElement("select"),
        i = n.appendChild(me.createElement("option")),
        t = a.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px",
        ie.getSetAttribute = "t" !== a.className,
        ie.style = /top/.test(e.getAttribute("style")),
        ie.hrefNormalized = "/a" === e.getAttribute("href"),
        ie.checkOn = !!t.value,
        ie.optSelected = i.selected,
        ie.enctype = !!me.createElement("form").enctype,
        n.disabled = !0,
        ie.optDisabled = !i.disabled,
        t = me.createElement("input"),
        t.setAttribute("value", ""),
        ie.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        ie.radioValue = "t" === t.value,
        e = t = n = i = a = null
    }();
  var xt = /\r/g;
  re.fn.extend({
    val: function(e) {
      var t, n, i, a = this[0];
      return arguments.length ? (i = re.isFunction(e),
        this.each(function(n) {
          var a;
          1 === this.nodeType && (a = i ? e.call(this, n, re(this).val()) : e,
            null == a ? a = "" : "number" == typeof a ? a += "" : re.isArray(a) && (a = re.map(a, function(e) {
              return null == e ? "" : e + ""
            })),
            t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()],
          t && "set"in t && void 0 !== t.set(this, a, "value") || (this.value = a))
        })) : a ? (t = re.valHooks[a.type] || re.valHooks[a.nodeName.toLowerCase()],
        t && "get"in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value,
          "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
    }
  }),
    re.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = re.find.attr(e, "value");
            return null != t ? t : re.text(e)
          }
        },
        select: {
          get: function(e) {
            for (var t, n, i = e.options, a = e.selectedIndex, r = "select-one" === e.type || 0 > a, s = r ? null : [], o = r ? a + 1 : i.length, l = 0 > a ? o : r ? a : 0; o > l; l++)
              if (n = i[l],
                !(!n.selected && l !== a || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                if (t = re(n).val(),
                  r)
                  return t;
                s.push(t)
              }
            return s
          },
          set: function(e, t) {
            for (var n, i, a = e.options, r = re.makeArray(t), s = a.length; s--; )
              if (i = a[s],
              re.inArray(re.valHooks.option.get(i), r) >= 0)
                try {
                  i.selected = n = !0
                } catch (o) {
                  i.scrollHeight
                }
              else
                i.selected = !1;
            return n || (e.selectedIndex = -1),
              a
          }
        }
      }
    }),
    re.each(["radio", "checkbox"], function() {
      re.valHooks[this] = {
        set: function(e, t) {
          return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
        }
      },
      ie.checkOn || (re.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        }
      )
    });
  var Tt, Ct, St = re.expr.attrHandle, Et = /^(?:checked|selected)$/i, kt = ie.getSetAttribute, Mt = ie.input;
  re.fn.extend({
    attr: function(e, t) {
      return Ne(this, re.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        re.removeAttr(this, e)
      })
    }
  }),
    re.extend({
      attr: function(e, t, n) {
        var i, a, r = e.nodeType;
        return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Se ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(),
          i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Ct : Tt)),
          void 0 === n ? i && "get"in i && null !== (a = i.get(e, t)) ? a : (a = re.find.attr(e, t),
            null == a ? void 0 : a) : null !== n ? i && "set"in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""),
            n) : void re.removeAttr(e, t)) : void 0
      },
      removeAttr: function(e, t) {
        var n, i, a = 0, r = t && t.match(be);
        if (r && 1 === e.nodeType)
          for (; n = r[a++]; )
            i = re.propFix[n] || n,
              re.expr.match.bool.test(n) ? Mt && kt || !Et.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""),
              e.removeAttribute(kt ? n : i)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t),
              n && (e.value = n),
                t
            }
          }
        }
      }
    }),
    Ct = {
      set: function(e, t, n) {
        return t === !1 ? re.removeAttr(e, n) : Mt && kt || !Et.test(n) ? e.setAttribute(!kt && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0,
          n
      }
    },
    re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = St[t] || re.find.attr;
      St[t] = Mt && kt || !Et.test(t) ? function(e, t, i) {
          var a, r;
          return i || (r = St[t],
            St[t] = a,
            a = null != n(e, t, i) ? t.toLowerCase() : null,
            St[t] = r),
            a
        }
        : function(e, t, n) {
          return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
  Mt && kt || (re.attrHooks.value = {
    set: function(e, t, n) {
      return re.nodeName(e, "input") ? void (e.defaultValue = t) : Tt && Tt.set(e, t, n)
    }
  }),
  kt || (Tt = {
    set: function(e, t, n) {
      var i = e.getAttributeNode(n);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
        i.value = t += "",
        "value" === n || t === e.getAttribute(n) ? t : void 0
    }
  },
    St.id = St.name = St.coords = function(e, t, n) {
      var i;
      return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    re.valHooks.button = {
      get: function(e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified ? n.value : void 0
      },
      set: Tt.set
    },
    re.attrHooks.contenteditable = {
      set: function(e, t, n) {
        Tt.set(e, "" === t ? !1 : t, n)
      }
    },
    re.each(["width", "height"], function(e, t) {
      re.attrHooks[t] = {
        set: function(e, n) {
          return "" === n ? (e.setAttribute(t, "auto"),
            n) : void 0
        }
      }
    })),
  ie.style || (re.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  });
  var zt = /^(?:input|select|textarea|button|object)$/i
    , Dt = /^(?:a|area)$/i;
  re.fn.extend({
    prop: function(e, t) {
      return Ne(this, re.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = re.propFix[e] || e,
        this.each(function() {
          try {
            this[e] = void 0,
              delete this[e]
          } catch (t) {}
        })
    }
  }),
    re.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(e, t, n) {
        var i, a, r, s = e.nodeType;
        return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !re.isXMLDoc(e),
        r && (t = re.propFix[t] || t,
          a = re.propHooks[t]),
          void 0 !== n ? a && "set"in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get"in a && null !== (i = a.get(e, t)) ? i : e[t]) : void 0
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = re.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : zt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }
    }),
  ie.hrefNormalized || re.each(["href", "src"], function(e, t) {
    re.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }),
  ie.optSelected || (re.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex,
      t.parentNode && t.parentNode.selectedIndex),
        null
    }
  }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      re.propFix[this.toLowerCase()] = this
    }),
  ie.enctype || (re.propFix.enctype = "encoding");
  var Nt = /[\t\r\n\f]/g;
  re.fn.extend({
    addClass: function(e) {
      var t, n, i, a, r, s, o = 0, l = this.length, d = "string" == typeof e && e;
      if (re.isFunction(e))
        return this.each(function(t) {
          re(this).addClass(e.call(this, t, this.className))
        });
      if (d)
        for (t = (e || "").match(be) || []; l > o; o++)
          if (n = this[o],
            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : " ")) {
            for (r = 0; a = t[r++]; )
              i.indexOf(" " + a + " ") < 0 && (i += a + " ");
            s = re.trim(i),
            n.className !== s && (n.className = s)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, i, a, r, s, o = 0, l = this.length, d = 0 === arguments.length || "string" == typeof e && e;
      if (re.isFunction(e))
        return this.each(function(t) {
          re(this).removeClass(e.call(this, t, this.className))
        });
      if (d)
        for (t = (e || "").match(be) || []; l > o; o++)
          if (n = this[o],
            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : "")) {
            for (r = 0; a = t[r++]; )
              for (; i.indexOf(" " + a + " ") >= 0; )
                i = i.replace(" " + a + " ", " ");
            s = e ? re.trim(i) : "",
            n.className !== s && (n.className = s)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
          re(this).toggleClass(e.call(this, n, this.className, t), t)
        }
        : function() {
          if ("string" === n)
            for (var t, i = 0, a = re(this), r = e.match(be) || []; t = r[i++]; )
              a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
          else
            (n === Se || "boolean" === n) && (this.className && re._data(this, "__className__", this.className),
              this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
        }
      )
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nt, " ").indexOf(t) >= 0)
          return !0;
      return !1
    }
  }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      re.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }),
    re.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    });
  var Lt = re.now()
    , Pt = /\?/
    , At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  re.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse)
      return e.JSON.parse(t + "");
    var n, i = null, a = re.trim(t + "");
    return a && !re.trim(a.replace(At, function(e, t, a, r) {
      return n && t && (i = 0),
        0 === i ? e : (n = a || t,
          i += !r - !a,
          "")
    })) ? Function("return " + a)() : re.error("Invalid JSON: " + t)
  }
    ,
    re.parseXML = function(t) {
      var n, i;
      if (!t || "string" != typeof t)
        return null;
      try {
        e.DOMParser ? (i = new DOMParser,
          n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
          n.async = "false",
          n.loadXML(t))
      } catch (a) {
        n = void 0
      }
      return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t),
        n
    }
  ;
  var $t, It, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jt = /^(?:GET|HEAD)$/, Xt = /^\/\//, Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ft = {}, Rt = {}, qt = "*/".concat("*");
  try {
    It = location.href
  } catch (Yt) {
    It = me.createElement("a"),
      It.href = "",
      It = It.href
  }
  $t = Wt.exec(It.toLowerCase()) || [],
    re.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: It,
        type: "GET",
        isLocal: Bt.test($t[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": qt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": re.parseJSON,
          "text xml": re.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? X(X(e, re.ajaxSettings), t) : X(re.ajaxSettings, e)
      },
      ajaxPrefilter: B(Ft),
      ajaxTransport: B(Rt),
      ajax: function(e, t) {
        function n(e, t, n, i) {
          var a, p, v, y, b, T = t;
          2 !== w && (w = 2,
          o && clearTimeout(o),
            d = void 0,
            s = i || "",
            x.readyState = e > 0 ? 4 : 0,
            a = e >= 200 && 300 > e || 304 === e,
          n && (y = W(u, x, n)),
            y = F(u, y, x, a),
            a ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"),
            b && (re.lastModified[r] = b),
              b = x.getResponseHeader("etag"),
            b && (re.etag[r] = b)),
              204 === e || "HEAD" === u.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                p = y.data,
                v = y.error,
                a = !v)) : (v = T,
            (e || !T) && (T = "error",
            0 > e && (e = 0))),
            x.status = e,
            x.statusText = (t || T) + "",
            a ? f.resolveWith(c, [p, T, x]) : f.rejectWith(c, [x, T, v]),
            x.statusCode(g),
            g = void 0,
          l && h.trigger(a ? "ajaxSuccess" : "ajaxError", [x, u, a ? p : v]),
            m.fireWith(c, [x, T]),
          l && (h.trigger("ajaxComplete", [x, u]),
          --re.active || re.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e,
          e = void 0),
          t = t || {};
        var i, a, r, s, o, l, d, p, u = re.ajaxSetup({}, t), c = u.context || u, h = u.context && (c.nodeType || c.jquery) ? re(c) : re.event, f = re.Deferred(), m = re.Callbacks("once memory"), g = u.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", x = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === w) {
              if (!p)
                for (p = {}; t = _t.exec(s); )
                  p[t[1].toLowerCase()] = t[2];
              t = p[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === w ? s : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return w || (e = y[n] = y[n] || e,
              v[e] = t),
              this
          },
          overrideMimeType: function(e) {
            return w || (u.mimeType = e),
              this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > w)
                for (t in e)
                  g[t] = [g[t], e[t]];
              else
                x.always(e[x.status]);
            return this
          },
          abort: function(e) {
            var t = e || b;
            return d && d.abort(t),
              n(0, t),
              this
          }
        };
        if (f.promise(x).complete = m.add,
          x.success = x.done,
          x.error = x.fail,
          u.url = ((e || u.url || It) + "").replace(Ht, "").replace(Xt, $t[1] + "//"),
          u.type = t.method || t.type || u.method || u.type,
          u.dataTypes = re.trim(u.dataType || "*").toLowerCase().match(be) || [""],
        null == u.crossDomain && (i = Wt.exec(u.url.toLowerCase()),
          u.crossDomain = !(!i || i[1] === $t[1] && i[2] === $t[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === ($t[3] || ("http:" === $t[1] ? "80" : "443")))),
        u.data && u.processData && "string" != typeof u.data && (u.data = re.param(u.data, u.traditional)),
          j(Ft, u, t, x),
        2 === w)
          return x;
        l = u.global,
        l && 0 === re.active++ && re.event.trigger("ajaxStart"),
          u.type = u.type.toUpperCase(),
          u.hasContent = !jt.test(u.type),
          r = u.url,
        u.hasContent || (u.data && (r = u.url += (Pt.test(r) ? "&" : "?") + u.data,
          delete u.data),
        u.cache === !1 && (u.url = Ot.test(r) ? r.replace(Ot, "$1_=" + Lt++) : r + (Pt.test(r) ? "&" : "?") + "_=" + Lt++)),
        u.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]),
        re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])),
        (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType),
          x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : u.accepts["*"]);
        for (a in u.headers)
          x.setRequestHeader(a, u.headers[a]);
        if (u.beforeSend && (u.beforeSend.call(c, x, u) === !1 || 2 === w))
          return x.abort();
        b = "abort";
        for (a in {
          success: 1,
          error: 1,
          complete: 1
        })
          x[a](u[a]);
        if (d = j(Rt, u, t, x)) {
          x.readyState = 1,
          l && h.trigger("ajaxSend", [x, u]),
          u.async && u.timeout > 0 && (o = setTimeout(function() {
            x.abort("timeout")
          }, u.timeout));
          try {
            w = 1,
              d.send(v, n)
          } catch (T) {
            if (!(2 > w))
              throw T;
            n(-1, T)
          }
        } else
          n(-1, "No Transport");
        return x
      },
      getJSON: function(e, t, n) {
        return re.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return re.get(e, void 0, t, "script")
      }
    }),
    re.each(["get", "post"], function(e, t) {
      re[t] = function(e, n, i, a) {
        return re.isFunction(n) && (a = a || i,
          i = n,
          n = void 0),
          re.ajax({
            url: e,
            type: t,
            dataType: a,
            data: n,
            success: i
          })
      }
    }),
    re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      re.fn[t] = function(e) {
        return this.on(t, e)
      }
    }),
    re._evalUrl = function(e) {
      return re.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }
    ,
    re.fn.extend({
      wrapAll: function(e) {
        if (re.isFunction(e))
          return this.each(function(t) {
            re(this).wrapAll(e.call(this, t))
          });
        if (this[0]) {
          var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
              for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                e = e.firstChild;
              return e
            }).append(this)
        }
        return this
      },
      wrapInner: function(e) {
        return this.each(re.isFunction(e) ? function(t) {
            re(this).wrapInner(e.call(this, t))
          }
          : function() {
            var t = re(this)
              , n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          }
        )
      },
      wrap: function(e) {
        var t = re.isFunction(e);
        return this.each(function(n) {
          re(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
        }).end()
      }
    }),
    re.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }
    ,
    re.expr.filters.visible = function(e) {
      return !re.expr.filters.hidden(e)
    }
  ;
  var Gt = /%20/g
    , Vt = /\[\]$/
    , Ut = /\r?\n/g
    , Qt = /^(?:submit|button|image|reset|file)$/i
    , Kt = /^(?:input|select|textarea|keygen)/i;
  re.param = function(e, t) {
    var n, i = [], a = function(e, t) {
      t = re.isFunction(t) ? t() : null == t ? "" : t,
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
    re.isArray(e) || e.jquery && !re.isPlainObject(e))
      re.each(e, function() {
        a(this.name, this.value)
      });
    else
      for (n in e)
        R(n, e[n], t, a);
    return i.join("&").replace(Gt, "+")
  }
    ,
    re.fn.extend({
      serialize: function() {
        return re.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = re.prop(this, "elements");
          return e ? re.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !re(this).is(":disabled") && Kt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Le.test(e))
        }).map(function(e, t) {
          var n = re(this).val();
          return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Ut, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Ut, "\r\n")
          }
        }).get()
      }
    }),
    re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || Y()
      }
      : q;
  var Jt = 0
    , Zt = {}
    , en = re.ajaxSettings.xhr();
  e.ActiveXObject && re(e).on("unload", function() {
    for (var e in Zt)
      Zt[e](void 0, !0)
  }),
    ie.cors = !!en && "withCredentials"in en,
    en = ie.ajax = !!en,
  en && re.ajaxTransport(function(e) {
    if (!e.crossDomain || ie.cors) {
      var t;
      return {
        send: function(n, i) {
          var a, r = e.xhr(), s = ++Jt;
          if (r.open(e.type, e.url, e.async, e.username, e.password),
            e.xhrFields)
            for (a in e.xhrFields)
              r[a] = e.xhrFields[a];
          e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
          e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (a in n)
            void 0 !== n[a] && r.setRequestHeader(a, n[a] + "");
          r.send(e.hasContent && e.data || null),
            t = function(n, a) {
              var o, l, d;
              if (t && (a || 4 === r.readyState))
                if (delete Zt[s],
                  t = void 0,
                  r.onreadystatechange = re.noop,
                  a)
                  4 !== r.readyState && r.abort();
                else {
                  d = {},
                    o = r.status,
                  "string" == typeof r.responseText && (d.text = r.responseText);
                  try {
                    l = r.statusText
                  } catch (p) {
                    l = ""
                  }
                  o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                }
              d && i(o, l, d, r.getAllResponseHeaders())
            }
            ,
            e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zt[s] = t : t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }
  }),
    re.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(e) {
          return re.globalEval(e),
            e
        }
      }
    }),
    re.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    re.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n = me.head || re("head")[0] || me.documentElement;
        return {
          send: function(i, a) {
            t = me.createElement("script"),
              t.async = !0,
            e.scriptCharset && (t.charset = e.scriptCharset),
              t.src = e.url,
              t.onload = t.onreadystatechange = function(e, n) {
                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                t.parentNode && t.parentNode.removeChild(t),
                  t = null,
                n || a(200, "success"))
              }
              ,
              n.insertBefore(t, n.firstChild)
          },
          abort: function() {
            t && t.onload(void 0, !0)
          }
        }
      }
    });
  var tn = []
    , nn = /(=)\?(?=&|$)|\?\?/;
  re.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = tn.pop() || re.expando + "_" + Lt++;
      return this[e] = !0,
        e
    }
  }),
    re.ajaxPrefilter("json jsonp", function(t, n, i) {
      var a, r, s, o = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
      return o || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        o ? t[o] = t[o].replace(nn, "$1" + a) : t.jsonp !== !1 && (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
        t.converters["script json"] = function() {
          return s || re.error(a + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        r = e[a],
        e[a] = function() {
          s = arguments
        }
        ,
        i.always(function() {
          e[a] = r,
          t[a] && (t.jsonpCallback = n.jsonpCallback,
            tn.push(a)),
          s && re.isFunction(r) && r(s[0]),
            s = r = void 0
        }),
        "script") : void 0
    }),
    re.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e)
        return null;
      "boolean" == typeof t && (n = t,
        t = !1),
        t = t || me;
      var i = ce.exec(e)
        , a = !n && [];
      return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, a),
      a && a.length && re(a).remove(),
        re.merge([], i.childNodes))
    }
  ;
  var an = re.fn.load;
  re.fn.load = function(e, t, n) {
    if ("string" != typeof e && an)
      return an.apply(this, arguments);
    var i, a, r, s = this, o = e.indexOf(" ");
    return o >= 0 && (i = e.slice(o, e.length),
      e = e.slice(0, o)),
      re.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
    s.length > 0 && re.ajax({
      url: e,
      type: r,
      dataType: "html",
      data: t
    }).done(function(e) {
      a = arguments,
        s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
    }).complete(n && function(e, t) {
      s.each(n, a || [e.responseText, t, e])
    }
    ),
      this
  }
    ,
    re.expr.filters.animated = function(e) {
      return re.grep(re.timers, function(t) {
        return e === t.elem
      }).length
    }
  ;
  var rn = e.document.documentElement;
  re.offset = {
    setOffset: function(e, t, n) {
      var i, a, r, s, o, l, d, p = re.css(e, "position"), u = re(e), c = {};
      "static" === p && (e.style.position = "relative"),
        o = u.offset(),
        r = re.css(e, "top"),
        l = re.css(e, "left"),
        d = ("absolute" === p || "fixed" === p) && re.inArray("auto", [r, l]) > -1,
        d ? (i = u.position(),
          s = i.top,
          a = i.left) : (s = parseFloat(r) || 0,
          a = parseFloat(l) || 0),
      re.isFunction(t) && (t = t.call(e, n, o)),
      null != t.top && (c.top = t.top - o.top + s),
      null != t.left && (c.left = t.left - o.left + a),
        "using"in t ? t.using.call(e, c) : u.css(c)
    }
  },
    re.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e ? this : this.each(function(t) {
            re.offset.setOffset(this, e, t)
          });
        var t, n, i = {
          top: 0,
          left: 0
        }, a = this[0], r = a && a.ownerDocument;
        return r ? (t = r.documentElement,
          re.contains(t, a) ? (typeof a.getBoundingClientRect !== Se && (i = a.getBoundingClientRect()),
            n = G(r),
            {
              top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
              left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n = {
            top: 0,
            left: 0
          }, i = this[0];
          return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
            t = this.offset(),
          re.nodeName(e[0], "html") || (n = e.offset()),
            n.top += re.css(e[0], "borderTopWidth", !0),
            n.left += re.css(e[0], "borderLeftWidth", !0)),
            {
              top: t.top - n.top - re.css(i, "marginTop", !0),
              left: t.left - n.left - re.css(i, "marginLeft", !0)
            }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position"); )
            e = e.offsetParent;
          return e || rn
        })
      }
    }),
    re.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = /Y/.test(t);
      re.fn[e] = function(i) {
        return Ne(this, function(e, i, a) {
          var r = G(e);
          return void 0 === a ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void (r ? r.scrollTo(n ? re(r).scrollLeft() : a, n ? a : re(r).scrollTop()) : e[i] = a)
        }, e, i, arguments.length, null)
      }
    }),
    re.each(["top", "left"], function(e, t) {
      re.cssHooks[t] = k(ie.pixelPosition, function(e, n) {
        return n ? (n = nt(e, t),
          at.test(n) ? re(e).position()[t] + "px" : n) : void 0
      })
    }),
    re.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      re.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        re.fn[i] = function(i, a) {
          var r = arguments.length && (n || "boolean" != typeof i)
            , s = n || (i === !0 || a === !0 ? "margin" : "border");
          return Ne(this, function(t, n, i) {
            var a;
            return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
              Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
          }, t, r ? i : void 0, r, null)
        }
      })
    }),
    re.fn.size = function() {
      return this.length
    }
    ,
    re.fn.andSelf = re.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return re
  });
  var sn = e.jQuery
    , on = e.$;
  return re.noConflict = function(t) {
    return e.$ === re && (e.$ = on),
    t && e.jQuery === re && (e.jQuery = sn),
      re
  }
    ,
  typeof t === Se && (e.jQuery = e.$ = re),
    re
}),
  function(e, t) {
    "use strict";
    function n(e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (n)
          for (var i in n)
            n.hasOwnProperty(i) && ("object" == typeof n[i] ? deepExtend(e[i], n[i]) : e[i] = n[i])
      }
      return e
    }
    function i(i, s) {
      function o() {
        if (S) {
          v = t.createElement("canvas"),
            v.className = "pg-canvas",
            v.style.display = "block",
            i.insertBefore(v, i.firstChild),
            y = v.getContext("2d"),
            l();
          for (var n = Math.round(v.width * v.height / s.density), a = 0; n > a; a++) {
            var r = new h;
            r.setStackPos(a),
              E.push(r)
          }
          e.addEventListener("resize", function() {
            p()
          }, !1),
            t.addEventListener("mousemove", function(e) {
              k = e.pageX,
                M = e.pageY
            }, !1),
          D && !z && e.addEventListener("deviceorientation", function() {
            L = Math.min(Math.max(-event.beta, -30), 30),
              N = Math.min(Math.max(-event.gamma, -30), 30)
          }, !0),
            d(),
            g("onInit")
        }
      }
      function l() {
        v.width = i.offsetWidth,
          v.height = i.offsetHeight,
          y.fillStyle = s.dotColor,
          y.strokeStyle = s.lineColor,
          y.lineWidth = s.lineWidth
      }
      function d() {
        if (S) {
          b = e.innerWidth,
            x = e.innerHeight,
            y.clearRect(0, 0, v.width, v.height);
          for (var t = 0; t < E.length; t++)
            E[t].updatePosition();
          for (var t = 0; t < E.length; t++)
            E[t].draw();
          P || (w = requestAnimationFrame(d))
        }
      }
      function p() {
        l();
        for (var e = i.offsetWidth, t = i.offsetHeight, n = E.length - 1; n >= 0; n--)
          (E[n].position.x > e || E[n].position.y > t) && E.splice(n, 1);
        var a = Math.round(v.width * v.height / s.density);
        if (a > E.length)
          for (; a > E.length; ) {
            var r = new h;
            E.push(r)
          }
        else
          a < E.length && E.splice(a);
        for (n = E.length - 1; n >= 0; n--)
          E[n].setStackPos(n)
      }
      function u() {
        P = !0
      }
      function c() {
        P = !1,
          d()
      }
      function h() {
        switch (this.stackPos,
          this.active = !0,
          this.layer = Math.ceil(3 * Math.random()),
          this.parallaxOffsetX = 0,
          this.parallaxOffsetY = 0,
          this.position = {
            x: Math.ceil(Math.random() * v.width),
            y: Math.ceil(Math.random() * v.height)
          },
          this.speed = {},
          s.directionX) {
          case "left":
            this.speed.x = +(-s.maxSpeedX + Math.random() * s.maxSpeedX - s.minSpeedX).toFixed(2);
            break;
          case "right":
            this.speed.x = +(Math.random() * s.maxSpeedX + s.minSpeedX).toFixed(2);
            break;
          default:
            this.speed.x = +(-s.maxSpeedX / 2 + Math.random() * s.maxSpeedX).toFixed(2),
              this.speed.x += this.speed.x > 0 ? s.minSpeedX : -s.minSpeedX
        }
        switch (s.directionY) {
          case "up":
            this.speed.y = +(-s.maxSpeedY + Math.random() * s.maxSpeedY - s.minSpeedY).toFixed(2);
            break;
          case "down":
            this.speed.y = +(Math.random() * s.maxSpeedY + s.minSpeedY).toFixed(2);
            break;
          default:
            this.speed.y = +(-s.maxSpeedY / 2 + Math.random() * s.maxSpeedY).toFixed(2),
              this.speed.x += this.speed.y > 0 ? s.minSpeedY : -s.minSpeedY
        }
      }
      function f(e, t) {
        return t ? void (s[e] = t) : s[e]
      }
      function m() {
        console.log("destroy"),
          v.parentNode.removeChild(v),
          g("onDestroy"),
        r && r(i).removeData("plugin_" + a)
      }
      function g(e) {
        void 0 !== s[e] && s[e].call(i)
      }
      var v, y, w, b, x, T, C, S = !!t.createElement("canvas").getContext, E = [], k = 0, M = 0, z = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), D = !!e.DeviceOrientationEvent, N = 0, L = 0, P = !1;
      return s = n({}, e[a].defaults, s),
        h.prototype.draw = function() {
          y.beginPath(),
            y.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, s.particleRadius / 2, 0, 2 * Math.PI, !0),
            y.closePath(),
            y.fill(),
            y.beginPath();
          for (var e = E.length - 1; e > this.stackPos; e--) {
            var t = E[e]
              , n = this.position.x - t.position.x
              , i = this.position.y - t.position.y
              , a = Math.sqrt(n * n + i * i).toFixed(2);
            a < s.proximity && (y.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY),
              s.curvedLines ? y.quadraticCurveTo(Math.max(t.position.x, t.position.x), Math.min(t.position.y, t.position.y), t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY) : y.lineTo(t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY))
          }
          y.stroke(),
            y.closePath()
        }
        ,
        h.prototype.updatePosition = function() {
          if (s.parallax) {
            if (D && !z) {
              var e = (b - 0) / 60;
              T = (N - -30) * e + 0;
              var t = (x - 0) / 60;
              C = (L - -30) * t + 0
            } else
              T = k,
                C = M;
            this.parallaxTargX = (T - b / 2) / (s.parallaxMultiplier * this.layer),
              this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10,
              this.parallaxTargY = (C - x / 2) / (s.parallaxMultiplier * this.layer),
              this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
          }
          var n = i.offsetWidth
            , a = i.offsetHeight;
          switch (s.directionX) {
            case "left":
              this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = n - this.parallaxOffsetX);
              break;
            case "right":
              this.position.x + this.speed.x + this.parallaxOffsetX > n && (this.position.x = 0 - this.parallaxOffsetX);
              break;
            default:
              (this.position.x + this.speed.x + this.parallaxOffsetX > n || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
          }
          switch (s.directionY) {
            case "up":
              this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = a - this.parallaxOffsetY);
              break;
            case "down":
              this.position.y + this.speed.y + this.parallaxOffsetY > a && (this.position.y = 0 - this.parallaxOffsetY);
              break;
            default:
              (this.position.y + this.speed.y + this.parallaxOffsetY > a || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
          }
          this.position.x += this.speed.x,
            this.position.y += this.speed.y
        }
        ,
        h.prototype.setStackPos = function(e) {
          this.stackPos = e
        }
        ,
        o(),
        {
          option: f,
          destroy: m,
          start: c,
          pause: u
        }
    }
    var a = "particleground"
      , r = e.jQuery;
    e[a] = function(e, t) {
      return new i(e,t)
    }
      ,
      e[a].defaults = {
        minSpeedX: .1,
        maxSpeedX: .7,
        minSpeedY: .1,
        maxSpeedY: .7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function() {},
        onDestroy: function() {}
      },
    r && (r.fn[a] = function(e) {
        if ("string" == typeof arguments[0]) {
          var t, n = arguments[0], s = Array.prototype.slice.call(arguments, 1);
          return this.each(function() {
            r.data(this, "plugin_" + a) && "function" == typeof r.data(this, "plugin_" + a)[n] && (t = r.data(this, "plugin_" + a)[n].apply(this, s))
          }),
            void 0 !== t ? t : this
        }
        return "object" != typeof e && e ? void 0 : this.each(function() {
          r.data(this, "plugin_" + a) || r.data(this, "plugin_" + a, new i(this,e))
        })
      }
    )
  }(window, document),
  function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
      window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
        var i = (new Date).getTime()
          , a = Math.max(0, 16 - (i - e))
          , r = window.setTimeout(function() {
          t(i + a)
        }, a);
        return e = i + a,
          r
      }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
      }
    )
  }(),
"undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
  "use strict";
  function t() {
    var e = document.createElement("bootstrap")
      , t = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var n in t)
      if (void 0 !== e.style[n])
        return {
          end: t[n]
        };
    return !1
  }
  e.fn.emulateTransitionEnd = function(t) {
    var n = !1
      , i = this;
    e(this).one("bsTransitionEnd", function() {
      n = !0
    });
    var a = function() {
      n || e(i).trigger(e.support.transition.end)
    };
    return setTimeout(a, t),
      this
  }
    ,
    e(function() {
      e.support.transition = t(),
      e.support.transition && (e.event.special.bsTransitionEnd = {
        bindType: e.support.transition.end,
        delegateType: e.support.transition.end,
        handle: function(t) {
          return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
        }
      })
    })
}(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var n = e(this)
          , a = n.data("bs.alert");
        a || n.data("bs.alert", a = new i(this)),
        "string" == typeof t && a[t].call(n)
      })
    }
    var n = '[data-dismiss="alert"]'
      , i = function(t) {
      e(t).on("click", n, this.close)
    };
    i.VERSION = "3.2.0",
      i.prototype.close = function(t) {
        function n() {
          r.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this)
          , a = i.attr("data-target");
        a || (a = i.attr("href"),
          a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
        var r = e(a);
        t && t.preventDefault(),
        r.length || (r = i.hasClass("alert") ? i : i.parent()),
          r.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (r.removeClass("in"),
          e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
      }
    ;
    var a = e.fn.alert;
    e.fn.alert = t,
      e.fn.alert.Constructor = i,
      e.fn.alert.noConflict = function() {
        return e.fn.alert = a,
          this
      }
      ,
      e(document).on("click.bs.alert.data-api", n, i.prototype.close)
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.button")
          , r = "object" == typeof t && t;
        a || i.data("bs.button", a = new n(this,r)),
          "toggle" == t ? a.toggle() : t && a.setState(t)
      })
    }
    var n = function(t, i) {
      this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.2.0",
      n.DEFAULTS = {
        loadingText: "loading..."
      },
      n.prototype.setState = function(t) {
        var n = "disabled"
          , i = this.$element
          , a = i.is("input") ? "val" : "html"
          , r = i.data();
        t += "Text",
        null == r.resetText && i.data("resetText", i[a]()),
          i[a](null == r[t] ? this.options[t] : r[t]),
          setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0,
              i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
              i.removeClass(n).removeAttr(n))
          }, this), 0)
      }
      ,
      n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")),
          e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
      }
    ;
    var i = e.fn.button;
    e.fn.button = t,
      e.fn.button.Constructor = n,
      e.fn.button.noConflict = function() {
        return e.fn.button = i,
          this
      }
      ,
      e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")),
          t.call(i, "toggle"),
          n.preventDefault()
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.carousel")
          , r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t)
          , s = "string" == typeof t ? t : r.slide;
        a || i.data("bs.carousel", a = new n(this,r)),
          "number" == typeof t ? a.to(t) : s ? a[s]() : r.interval && a.pause().cycle()
      })
    }
    var n = function(t, n) {
      this.$element = e(t).on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
      "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0",
      n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
      },
      n.prototype.keydown = function(e) {
        switch (e.which) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          default:
            return
        }
        e.preventDefault()
      }
      ,
      n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
          this
      }
      ,
      n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
          this.$items.index(e || this.$active)
      }
      ,
      n.prototype.to = function(t) {
        var n = this
          , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
          n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
      }
      ,
      n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
          this.cycle(!0)),
          this.interval = clearInterval(this.interval),
          this
      }
      ,
      n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
      }
      ,
      n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
      }
      ,
      n.prototype.slide = function(t, n) {
        var i = this.$element.find(".item.active")
          , a = n || i[t]()
          , r = this.interval
          , s = "next" == t ? "left" : "right"
          , o = "next" == t ? "first" : "last"
          , l = this;
        if (!a.length) {
          if (!this.options.wrap)
            return;
          a = this.$element.find(".item")[o]()
        }
        if (a.hasClass("active"))
          return this.sliding = !1;
        var d = a[0]
          , p = e.Event("slide.bs.carousel", {
          relatedTarget: d,
          direction: s
        });
        if (this.$element.trigger(p),
          !p.isDefaultPrevented()) {
          if (this.sliding = !0,
          r && this.pause(),
            this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var u = e(this.$indicators.children()[this.getItemIndex(a)]);
            u && u.addClass("active")
          }
          var c = e.Event("slid.bs.carousel", {
            relatedTarget: d,
            direction: s
          });
          return e.support.transition && this.$element.hasClass("slide") ? (a.addClass(t),
            a[0].offsetWidth,
            i.addClass(s),
            a.addClass(s),
            i.one("bsTransitionEnd", function() {
              a.removeClass([t, s].join(" ")).addClass("active"),
                i.removeClass(["active", s].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                  l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"),
            a.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(c)),
          r && this.cycle(),
            this
        }
      }
    ;
    var i = e.fn.carousel;
    e.fn.carousel = t,
      e.fn.carousel.Constructor = n,
      e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i,
          this
      }
      ,
      e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, a = e(this), r = e(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
          var s = e.extend({}, r.data(), a.data())
            , o = a.attr("data-slide-to");
          o && (s.interval = !1),
            t.call(r, s),
          o && r.data("bs.carousel").to(o),
            n.preventDefault()
        }
      }),
      e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
          var n = e(this);
          t.call(n, n.data())
        })
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.collapse")
          , r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
        !a && r.toggle && "show" == t && (t = !t),
        a || i.data("bs.collapse", a = new n(this,r)),
        "string" == typeof t && a[t]()
      })
    }
    var n = function(t, i) {
      this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, i),
        this.transitioning = null,
      this.options.parent && (this.$parent = e(this.options.parent)),
      this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0",
      n.DEFAULTS = {
        toggle: !0
      },
      n.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
      }
      ,
      n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var n = e.Event("show.bs.collapse");
          if (this.$element.trigger(n),
            !n.isDefaultPrevented()) {
            var i = this.$parent && this.$parent.find("> .panel > .in");
            if (i && i.length) {
              var a = i.data("bs.collapse");
              if (a && a.transitioning)
                return;
              t.call(i, "hide"),
              a || i.data("bs.collapse", null)
            }
            var r = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[r](0),
              this.transitioning = 1;
            var s = function() {
              this.$element.removeClass("collapsing").addClass("collapse in")[r](""),
                this.transitioning = 0,
                this.$element.trigger("shown.bs.collapse")
            };
            if (!e.support.transition)
              return s.call(this);
            var o = e.camelCase(["scroll", r].join("-"));
            this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][o])
          }
        }
      }
      ,
      n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
              this.transitioning = 1;
            var i = function() {
              this.transitioning = 0,
                this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
            };
            return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
          }
        }
      }
      ,
      n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }
    ;
    var i = e.fn.collapse;
    e.fn.collapse = t,
      e.fn.collapse.Constructor = n,
      e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i,
          this
      }
      ,
      e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, a = e(this), r = a.attr("data-target") || n.preventDefault() || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), s = e(r), o = s.data("bs.collapse"), l = o ? "toggle" : a.data(), d = a.attr("data-parent"), p = d && e(d);
        o && o.transitioning || (p && p.find('[data-toggle="collapse"][data-parent="' + d + '"]').not(a).addClass("collapsed"),
          a[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
          t.call(s, l)
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      t && 3 === t.which || (e(a).remove(),
        e(r).each(function() {
          var i = n(e(this))
            , a = {
            relatedTarget: this
          };
          i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", a)),
          t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", a))
        }))
    }
    function n(t) {
      var n = t.attr("data-target");
      n || (n = t.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && e(n);
      return i && i.length ? i : t.parent()
    }
    function i(t) {
      return this.each(function() {
        var n = e(this)
          , i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new s(this)),
        "string" == typeof t && i[t].call(n)
      })
    }
    var a = ".dropdown-backdrop"
      , r = '[data-toggle="dropdown"]'
      , s = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.2.0",
      s.prototype.toggle = function(i) {
        var a = e(this);
        if (!a.is(".disabled, :disabled")) {
          var r = n(a)
            , s = r.hasClass("open");
          if (t(),
            !s) {
            "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
            var o = {
              relatedTarget: this
            };
            if (r.trigger(i = e.Event("show.bs.dropdown", o)),
              i.isDefaultPrevented())
              return;
            a.trigger("focus"),
              r.toggleClass("open").trigger("shown.bs.dropdown", o)
          }
          return !1
        }
      }
      ,
      s.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
          var i = e(this);
          if (t.preventDefault(),
            t.stopPropagation(),
            !i.is(".disabled, :disabled")) {
            var a = n(i)
              , s = a.hasClass("open");
            if (!s || s && 27 == t.keyCode)
              return 27 == t.which && a.find(r).trigger("focus"),
                i.trigger("click");
            var o = " li:not(.divider):visible a"
              , l = a.find('[role="menu"]' + o + ', [role="listbox"]' + o);
            if (l.length) {
              var d = l.index(l.filter(":focus"));
              38 == t.keyCode && d > 0 && d--,
              40 == t.keyCode && d < l.length - 1 && d++,
              ~d || (d = 0),
                l.eq(d).trigger("focus")
            }
          }
        }
      }
    ;
    var o = e.fn.dropdown;
    e.fn.dropdown = i,
      e.fn.dropdown.Constructor = s,
      e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = o,
          this
      }
      ,
      e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
      }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t, i) {
      return this.each(function() {
        var a = e(this)
          , r = a.data("bs.modal")
          , s = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t);
        r || a.data("bs.modal", r = new n(this,s)),
          "string" == typeof t ? r[t](i) : s.show && r.show(i)
      })
    }
    var n = function(t, n) {
      this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
      }, this))
    };
    n.VERSION = "3.2.0",
      n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
      },
      n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
      }
      ,
      n.prototype.show = function(t) {
        var n = this
          , i = e.Event("show.bs.modal", {
          relatedTarget: t
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
          this.checkScrollbar(),
          this.$body.addClass("modal-open"),
          this.setScrollbar(),
          this.escape(),
          this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
          this.backdrop(function() {
            var i = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body),
              n.$element.show().scrollTop(0),
            i && n.$element[0].offsetWidth,
              n.$element.addClass("in").attr("aria-hidden", !1),
              n.enforceFocus();
            var a = e.Event("shown.bs.modal", {
              relatedTarget: t
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
              n.$element.trigger("focus").trigger(a)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(a)
          }))
      }
      ,
      n.prototype.hide = function(t) {
        t && t.preventDefault(),
          t = e.Event("hide.bs.modal"),
          this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
          this.$body.removeClass("modal-open"),
          this.resetScrollbar(),
          this.escape(),
          e(document).off("focusin.bs.modal"),
          this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
          e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
      }
      ,
      n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
          this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
      }
      ,
      n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
          27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
      }
      ,
      n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
          this.backdrop(function() {
            e.$element.trigger("hidden.bs.modal")
          })
      }
      ,
      n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
          this.$backdrop = null
      }
      ,
      n.prototype.backdrop = function(t) {
        var n = this
          , i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var a = e.support.transition && i;
          if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
              e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
          a && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
            return;
          a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var r = function() {
            n.removeBackdrop(),
            t && t()
          };
          e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r()
        } else
          t && t()
      }
      ,
      n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
      }
      ,
      n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
      }
      ,
      n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
      }
      ,
      n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
          this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
          t
      }
    ;
    var i = e.fn.modal;
    e.fn.modal = t,
      e.fn.modal.Constructor = n,
      e.fn.modal.noConflict = function() {
        return e.fn.modal = i,
          this
      }
      ,
      e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this)
          , a = i.attr("href")
          , r = e(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, ""))
          , s = r.data("bs.modal") ? "toggle" : e.extend({
          remote: !/#/.test(a) && a
        }, r.data(), i.data());
        i.is("a") && n.preventDefault(),
          r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
              i.is(":visible") && i.trigger("focus")
            })
          }),
          t.call(r, s, this)
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.tooltip")
          , r = "object" == typeof t && t;
        (a || "destroy" != t) && (a || i.data("bs.tooltip", a = new n(this,r)),
        "string" == typeof t && a[t]())
      })
    }
    var n = function(e, t) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.2.0",
      n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
          selector: "body",
          padding: 0
        }
      },
      n.prototype.init = function(t, n, i) {
        this.enabled = !0,
          this.type = t,
          this.$element = e(n),
          this.options = this.getOptions(i),
          this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var a = this.options.trigger.split(" "), r = a.length; r--; ) {
          var s = a[r];
          if ("click" == s)
            this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
          else if ("manual" != s) {
            var o = "hover" == s ? "mouseenter" : "focusin"
              , l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
              this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
          }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }) : this.fixTitle()
      }
      ,
      n.prototype.getDefaults = function() {
        return n.DEFAULTS
      }
      ,
      n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }),
          t
      }
      ,
      n.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
          n[e] != i && (t[e] = i)
        }),
          t
      }
      ,
      n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
          e(t.currentTarget).data("bs." + this.type, n)),
          clearTimeout(n.timeout),
          n.hoverState = "in",
          n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
          }, n.options.delay.show)) : n.show()
      }
      ,
      n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
          e(t.currentTarget).data("bs." + this.type, n)),
          clearTimeout(n.timeout),
          n.hoverState = "out",
          n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
          }, n.options.delay.hide)) : n.hide()
      }
      ,
      n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var n = e.contains(document.documentElement, this.$element[0]);
          if (t.isDefaultPrevented() || !n)
            return;
          var i = this
            , a = this.tip()
            , r = this.getUID(this.type);
          this.setContent(),
            a.attr("id", r),
            this.$element.attr("aria-describedby", r),
          this.options.animation && a.addClass("fade");
          var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement
            , o = /\s?auto?\s?/i
            , l = o.test(s);
          l && (s = s.replace(o, "") || "top"),
            a.detach().css({
              top: 0,
              left: 0,
              display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
          var d = this.getPosition()
            , p = a[0].offsetWidth
            , u = a[0].offsetHeight;
          if (l) {
            var c = s
              , h = this.$element.parent()
              , f = this.getPosition(h);
            s = "bottom" == s && d.top + d.height + u - f.scroll > f.height ? "top" : "top" == s && d.top - f.scroll - u < 0 ? "bottom" : "right" == s && d.right + p > f.width ? "left" : "left" == s && d.left - p < f.left ? "right" : s,
              a.removeClass(c).addClass(s)
          }
          var m = this.getCalculatedOffset(s, d, p, u);
          this.applyPlacement(m, s);
          var g = function() {
            i.$element.trigger("shown.bs." + i.type),
              i.hoverState = null
          };
          e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
      }
      ,
      n.prototype.applyPlacement = function(t, n) {
        var i = this.tip()
          , a = i[0].offsetWidth
          , r = i[0].offsetHeight
          , s = parseInt(i.css("margin-top"), 10)
          , o = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(o) && (o = 0),
          t.top = t.top + s,
          t.left = t.left + o,
          e.offset.setOffset(i[0], e.extend({
            using: function(e) {
              i.css({
                top: Math.round(e.top),
                left: Math.round(e.left)
              })
            }
          }, t), 0),
          i.addClass("in");
        var l = i[0].offsetWidth
          , d = i[0].offsetHeight;
        "top" == n && d != r && (t.top = t.top + r - d);
        var p = this.getViewportAdjustedDelta(n, t, l, d);
        p.left ? t.left += p.left : t.top += p.top;
        var u = p.left ? 2 * p.left - a + l : 2 * p.top - r + d
          , c = p.left ? "left" : "top"
          , h = p.left ? "offsetWidth" : "offsetHeight";
        i.offset(t),
          this.replaceArrow(u, i[0][h], c)
      }
      ,
      n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
      }
      ,
      n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right")
      }
      ,
      n.prototype.hide = function() {
        function t() {
          "in" != n.hoverState && i.detach(),
            n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this
          , i = this.tip()
          , a = e.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"),
          this.$element.trigger(a),
          a.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
            e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(),
            this.hoverState = null,
            this)
      }
      ,
      n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
      }
      ,
      n.prototype.hasContent = function() {
        return this.getTitle()
      }
      ,
      n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0]
          , i = "BODY" == n.tagName;
        return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
          scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
          width: i ? e(window).width() : t.outerWidth(),
          height: i ? e(window).height() : t.outerHeight()
        }, i ? {
          top: 0,
          left: 0
        } : t.offset())
      }
      ,
      n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
          top: t.top + t.height,
          left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
          top: t.top - i,
          left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
          top: t.top + t.height / 2 - i / 2,
          left: t.left - n
        } : {
          top: t.top + t.height / 2 - i / 2,
          left: t.left + t.width
        }
      }
      ,
      n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var a = {
          top: 0,
          left: 0
        };
        if (!this.$viewport)
          return a;
        var r = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var o = t.top - r - s.scroll
            , l = t.top + r - s.scroll + i;
          o < s.top ? a.top = s.top - o : l > s.top + s.height && (a.top = s.top + s.height - l)
        } else {
          var d = t.left - r
            , p = t.left + r + n;
          d < s.left ? a.left = s.left - d : p > s.width && (a.left = s.left + s.width - p)
        }
        return a
      }
      ,
      n.prototype.getTitle = function() {
        var e, t = this.$element, n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
      }
      ,
      n.prototype.getUID = function(e) {
        do
          e += ~~(1e6 * Math.random());
        while (document.getElementById(e));return e
      }
      ,
      n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
      }
      ,
      n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      }
      ,
      n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(),
          this.$element = null,
          this.options = null)
      }
      ,
      n.prototype.enable = function() {
        this.enabled = !0
      }
      ,
      n.prototype.disable = function() {
        this.enabled = !1
      }
      ,
      n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
      }
      ,
      n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type),
        n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
          e(t.currentTarget).data("bs." + this.type, n))),
          n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
      }
      ,
      n.prototype.destroy = function() {
        clearTimeout(this.timeout),
          this.hide().$element.off("." + this.type).removeData("bs." + this.type)
      }
    ;
    var i = e.fn.tooltip;
    e.fn.tooltip = t,
      e.fn.tooltip.Constructor = n,
      e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i,
          this
      }
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.popover")
          , r = "object" == typeof t && t;
        (a || "destroy" != t) && (a || i.data("bs.popover", a = new n(this,r)),
        "string" == typeof t && a[t]())
      })
    }
    var n = function(e, t) {
      this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0",
      n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }),
      n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
      n.prototype.constructor = n,
      n.prototype.getDefaults = function() {
        return n.DEFAULTS
      }
      ,
      n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
          e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
      }
      ,
      n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
      }
      ,
      n.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
      }
      ,
      n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
      }
      ,
      n.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)),
          this.$tip
      }
    ;
    var i = e.fn.popover;
    e.fn.popover = t,
      e.fn.popover.Constructor = n,
      e.fn.popover.noConflict = function() {
        return e.fn.popover = i,
          this
      }
  }(jQuery),
  +function(e) {
    "use strict";
    function t(n, i) {
      var a = e.proxy(this.process, this);
      this.$body = e("body"),
        this.$scrollElement = e(e(n).is("body") ? window : n),
        this.options = e.extend({}, t.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a),
        this.refresh(),
        this.process()
    }
    function n(n) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.scrollspy")
          , r = "object" == typeof n && n;
        a || i.data("bs.scrollspy", a = new t(this,r)),
        "string" == typeof n && a[n]()
      })
    }
    t.VERSION = "3.2.0",
      t.DEFAULTS = {
        offset: 10
      },
      t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
      }
      ,
      t.prototype.refresh = function() {
        var t = "offset"
          , n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position",
          n = this.$scrollElement.scrollTop()),
          this.offsets = [],
          this.targets = [],
          this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
          var i = e(this)
            , a = i.data("target") || i.attr("href")
            , r = /^#./.test(a) && e(a);
          return r && r.length && r.is(":visible") && [[r[t]().top + n, a]] || null
        }).sort(function(e, t) {
          return e[0] - t[0]
        }).each(function() {
          i.offsets.push(this[0]),
            i.targets.push(this[1])
        })
      }
      ,
      t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), a = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= i)
          return s != (e = r[r.length - 1]) && this.activate(e);
        if (s && t <= a[0])
          return s != (e = r[0]) && this.activate(e);
        for (e = a.length; e--; )
          s != r[e] && t >= a[e] && (!a[e + 1] || t <= a[e + 1]) && this.activate(r[e])
      }
      ,
      t.prototype.activate = function(t) {
        this.activeTarget = t,
          e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy")
      }
    ;
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n,
      e.fn.scrollspy.Constructor = t,
      e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i,
          this
      }
      ,
      e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
          var t = e(this);
          n.call(t, t.data())
        })
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.tab");
        a || i.data("bs.tab", a = new n(this)),
        "string" == typeof t && a[t]()
      })
    }
    var n = function(t) {
      this.element = e(t)
    };
    n.VERSION = "3.2.0",
      n.prototype.show = function() {
        var t = this.element
          , n = t.closest("ul:not(.dropdown-menu)")
          , i = t.data("target");
        if (i || (i = t.attr("href"),
          i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active")) {
          var a = n.find(".active:last a")[0]
            , r = e.Event("show.bs.tab", {
            relatedTarget: a
          });
          if (t.trigger(r),
            !r.isDefaultPrevented()) {
            var s = e(i);
            this.activate(t.closest("li"), n),
              this.activate(s, s.parent(), function() {
                t.trigger({
                  type: "shown.bs.tab",
                  relatedTarget: a
                })
              })
          }
        }
      }
      ,
      n.prototype.activate = function(t, n, i) {
        function a() {
          r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            t.addClass("active"),
            s ? (t[0].offsetWidth,
              t.addClass("in")) : t.removeClass("fade"),
          t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"),
          i && i()
        }
        var r = n.find("> .active")
          , s = i && e.support.transition && r.hasClass("fade");
        s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a(),
          r.removeClass("in")
      }
    ;
    var i = e.fn.tab;
    e.fn.tab = t,
      e.fn.tab.Constructor = n,
      e.fn.tab.noConflict = function() {
        return e.fn.tab = i,
          this
      }
      ,
      e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(),
          t.call(e(this), "show")
      })
  }(jQuery),
  +function(e) {
    "use strict";
    function t(t) {
      return this.each(function() {
        var i = e(this)
          , a = i.data("bs.affix")
          , r = "object" == typeof t && t;
        a || i.data("bs.affix", a = new n(this,r)),
        "string" == typeof t && a[t]()
      })
    }
    var n = function(t, i) {
      this.options = e.extend({}, n.DEFAULTS, i),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.2.0",
      n.RESET = "affix affix-top affix-bottom",
      n.DEFAULTS = {
        offset: 0,
        target: window
      },
      n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
          return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
      }
      ,
      n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
      }
      ,
      n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var t = e(document).height()
            , i = this.$target.scrollTop()
            , a = this.$element.offset()
            , r = this.options.offset
            , s = r.top
            , o = r.bottom;
          "object" != typeof r && (o = s = r),
          "function" == typeof s && (s = r.top(this.$element)),
          "function" == typeof o && (o = r.bottom(this.$element));
          var l = null != this.unpin && i + this.unpin <= a.top ? !1 : null != o && a.top + this.$element.height() >= t - o ? "bottom" : null != s && s >= i ? "top" : !1;
          if (this.affixed !== l) {
            null != this.unpin && this.$element.css("top", "");
            var d = "affix" + (l ? "-" + l : "")
              , p = e.Event(d + ".bs.affix");
            this.$element.trigger(p),
            p.isDefaultPrevented() || (this.affixed = l,
              this.unpin = "bottom" == l ? this.getPinnedOffset() : null,
              this.$element.removeClass(n.RESET).addClass(d).trigger(e.Event(d.replace("affix", "affixed"))),
            "bottom" == l && this.$element.offset({
              top: t - this.$element.height() - o
            }))
          }
        }
      }
    ;
    var i = e.fn.affix;
    e.fn.affix = t,
      e.fn.affix.Constructor = n,
      e.fn.affix.noConflict = function() {
        return e.fn.affix = i,
          this
      }
      ,
      e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
          var n = e(this)
            , i = n.data();
          i.offset = i.offset || {},
          i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          i.offsetTop && (i.offset.top = i.offsetTop),
            t.call(n, i)
        })
      })
  }(jQuery),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(e) {
    "use strict";
    function t(t) {
      return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function n(t) {
      return e.isFunction(t) || e.isPlainObject(t) ? t : {
        top: t,
        left: t
      }
    }
    var i = e.scrollTo = function(t, n, i) {
        return e(window).scrollTo(t, n, i)
      }
    ;
    return i.defaults = {
      axis: "xy",
      duration: 0,
      limit: !0
    },
      e.fn.scrollTo = function(a, r, s) {
        "object" == typeof r && (s = r,
          r = 0),
        "function" == typeof s && (s = {
          onAfter: s
        }),
        "max" === a && (a = 9e9),
          s = e.extend({}, i.defaults, s),
          r = r || s.duration;
        var o = s.queue && s.axis.length > 1;
        return o && (r /= 2),
          s.offset = n(s.offset),
          s.over = n(s.over),
          this.each(function() {
            function l(t) {
              var n = e.extend({}, s, {
                queue: !0,
                duration: r,
                complete: t && function() {
                  t.call(u, h, s)
                }
              });
              c.animate(f, n)
            }
            if (null !== a) {
              var d, p = t(this), u = p ? this.contentWindow || window : this, c = e(u), h = a, f = {};
              switch (typeof h) {
                case "number":
                case "string":
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                    h = n(h);
                    break
                  }
                  h = p ? e(h) : e(h, u);
                case "object":
                  if (0 === h.length)
                    return;
                  (h.is || h.style) && (d = (h = e(h)).offset())
              }
              var m = e.isFunction(s.offset) && s.offset(u, h) || s.offset;
              e.each(s.axis.split(""), function(e, t) {
                var n = "x" === t ? "Left" : "Top"
                  , a = n.toLowerCase()
                  , r = "scroll" + n
                  , g = c[r]()
                  , v = i.max(u, t);
                if (d)
                  f[r] = d[a] + (p ? 0 : g - c.offset()[a]),
                  s.margin && (f[r] -= parseInt(h.css("margin" + n), 10) || 0,
                    f[r] -= parseInt(h.css("border" + n + "Width"), 10) || 0),
                    f[r] += m[a] || 0,
                  s.over[a] && (f[r] += h["x" === t ? "width" : "height"]() * s.over[a]);
                else {
                  var y = h[a];
                  f[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y
                }
                s.limit && /^\d+$/.test(f[r]) && (f[r] = f[r] <= 0 ? 0 : Math.min(f[r], v)),
                !e && s.axis.length > 1 && (g === f[r] ? f = {} : o && (l(s.onAfterFirst),
                  f = {}))
              }),
                l(s.onAfter)
            }
          })
      }
      ,
      i.max = function(n, i) {
        var a = "x" === i ? "Width" : "Height"
          , r = "scroll" + a;
        if (!t(n))
          return n[r] - e(n)[a.toLowerCase()]();
        var s = "client" + a
          , o = n.ownerDocument || n.document
          , l = o.documentElement
          , d = o.body;
        return Math.max(l[r], d[r]) - Math.min(l[s], d[s])
      }
      ,
      e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function(t) {
          return e(t.elem)[t.prop]()
        },
        set: function(t) {
          var n = this.get(t);
          if (t.options.interrupt && t._last && t._last !== n)
            return e(t.elem).stop();
          var i = Math.round(t.now);
          n !== i && (e(t.elem)[t.prop](i),
            t._last = this.get(t))
        }
      },
      i
  });
var scrollme = function(e) {
  var t = {}
    , n = e(document)
    , i = e(window);
  return t.body_height = 0,
    t.viewport_height = 0,
    t.viewport_top = 0,
    t.viewport_bottom = 0,
    t.viewport_top_previous = -1,
    t.elements = [],
    t.elements_in_view = [],
    t.property_defaults = {
      opacity: 1,
      translatex: 0,
      translatey: 0,
      translatez: 0,
      rotatex: 0,
      rotatey: 0,
      rotatez: 0,
      scale: 1,
      scalex: 1,
      scaley: 1,
      scalez: 1
    },
    t.scrollme_selector = ".scrollme",
    t.animateme_selector = ".animateme",
    t.update_interval = 10,
    t.easing_functions = {
      linear: function(e) {
        return e
      },
      easeout: function(e) {
        return e * e * e
      },
      easein: function(e) {
        return e = 1 - e,
        1 - e * e * e
      },
      easeinout: function(e) {
        return .5 > e ? 4 * e * e * e : (e = 1 - e,
        1 - 4 * e * e * e)
      }
    },
    t.init_events = ["ready", "page:load", "page:change"],
    t.init_if = function() {
      return !0
    }
    ,
    t.init = function() {
      return t.init_if() ? (t.init_elements(),
        t.on_resize(),
        i.on("resize orientationchange", function() {
          t.on_resize()
        }),
        i.load(function() {
          setTimeout(function() {
            t.on_resize()
          }, 100)
        }),
        setInterval(t.update, t.update_interval),
        !0) : !1
    }
    ,
    t.init_elements = function() {
      e(t.scrollme_selector).each(function() {
        var n = {};
        n.element = e(this);
        var i = [];
        e(this).find(t.animateme_selector).addBack(t.animateme_selector).each(function() {
          var n = {};
          n.element = e(this),
            n.when = n.element.data("when"),
            n.from = n.element.data("from"),
            n.to = n.element.data("to"),
            n.element.is("[data-crop]") ? n.crop = n.element.data("crop") : n.crop = !0,
            n.element.is("[data-easing]") ? n.easing = t.easing_functions[n.element.data("easing")] : n.easing = t.easing_functions.easeout;
          var a = {};
          n.element.is("[data-opacity]") && (a.opacity = n.element.data("opacity")),
          n.element.is("[data-translatex]") && (a.translatex = n.element.data("translatex")),
          n.element.is("[data-translatey]") && (a.translatey = n.element.data("translatey")),
          n.element.is("[data-translatez]") && (a.translatez = n.element.data("translatez")),
          n.element.is("[data-rotatex]") && (a.rotatex = n.element.data("rotatex")),
          n.element.is("[data-rotatey]") && (a.rotatey = n.element.data("rotatey")),
          n.element.is("[data-rotatez]") && (a.rotatez = n.element.data("rotatez")),
          n.element.is("[data-scale]") && (a.scale = n.element.data("scale")),
          n.element.is("[data-scalex]") && (a.scalex = n.element.data("scalex")),
          n.element.is("[data-scaley]") && (a.scaley = n.element.data("scaley")),
          n.element.is("[data-scalez]") && (a.scalez = n.element.data("scalez")),
            n.properties = a,
            i.push(n)
        }),
          n.effects = i,
          t.elements.push(n)
      })
    }
    ,
    t.update = function() {
      window.requestAnimationFrame(function() {
        t.update_viewport_position(),
        t.viewport_top_previous != t.viewport_top && (t.update_elements_in_view(),
          t.animate()),
          t.viewport_top_previous = t.viewport_top
      })
    }
    ,
    t.animate = function() {
      for (var e = t.elements_in_view.length, n = 0; e > n; n++)
        for (var i = t.elements_in_view[n], a = i.effects.length, r = 0; a > r; r++) {
          var s = i.effects[r];
          switch (s.when) {
            case "view":
            case "span":
              var o = i.top - t.viewport_height
                , l = i.bottom;
              break;
            case "exit":
              var o = i.bottom - t.viewport_height
                , l = i.bottom;
              break;
            default:
              var o = i.top - t.viewport_height
                , l = i.top
          }
          s.crop && (0 > o && (o = 0),
          l > t.body_height - t.viewport_height && (l = t.body_height - t.viewport_height));
          var d = (t.viewport_top - o) / (l - o)
            , p = s.from
            , u = s.to
            , c = u - p
            , h = (d - p) / c
            , f = s.easing(h)
            , m = t.animate_value(d, f, p, u, s, "opacity")
            , g = t.animate_value(d, f, p, u, s, "translatey")
            , v = t.animate_value(d, f, p, u, s, "translatex")
            , y = t.animate_value(d, f, p, u, s, "translatez")
            , w = t.animate_value(d, f, p, u, s, "rotatex")
            , b = t.animate_value(d, f, p, u, s, "rotatey")
            , x = t.animate_value(d, f, p, u, s, "rotatez")
            , T = t.animate_value(d, f, p, u, s, "scale")
            , C = t.animate_value(d, f, p, u, s, "scalex")
            , S = t.animate_value(d, f, p, u, s, "scaley")
            , E = t.animate_value(d, f, p, u, s, "scalez");
          "scale"in s.properties && (C = T,
            S = T,
            E = T),
            s.element.css({
              opacity: m,
              transform: "translate3d( " + v + "px , " + g + "px , " + y + "px ) rotateX( " + w + "deg ) rotateY( " + b + "deg ) rotateZ( " + x + "deg ) scale3d( " + C + " , " + S + " , " + E + " )"
            })
        }
    }
    ,
    t.animate_value = function(e, n, i, a, r, s) {
      var o = t.property_defaults[s];
      if (!(s in r.properties))
        return o;
      var l = r.properties[s]
        , d = a > i ? !0 : !1;
      if (i > e && d)
        return o;
      if (e > a && d)
        return l;
      if (e > i && !d)
        return o;
      if (a > e && !d)
        return l;
      var p = o + n * (l - o);
      switch (s) {
        case "opacity":
          p = p.toFixed(2);
          break;
        case "translatex":
          p = p.toFixed(0);
          break;
        case "translatey":
          p = p.toFixed(0);
          break;
        case "translatez":
          p = p.toFixed(0);
          break;
        case "rotatex":
          p = p.toFixed(1);
          break;
        case "rotatey":
          p = p.toFixed(1);
          break;
        case "rotatez":
          p = p.toFixed(1);
          break;
        case "scale":
          p = p.toFixed(3)
      }
      return p
    }
    ,
    t.update_viewport_position = function() {
      t.viewport_top = i.scrollTop(),
        t.viewport_bottom = t.viewport_top + t.viewport_height
    }
    ,
    t.update_elements_in_view = function() {
      t.elements_in_view = [];
      for (var e = t.elements.length, n = 0; e > n; n++)
        t.elements[n].top < t.viewport_bottom && t.elements[n].bottom > t.viewport_top && t.elements_in_view.push(t.elements[n])
    }
    ,
    t.on_resize = function() {
      t.update_viewport(),
        t.update_element_heights(),
        t.update_viewport_position(),
        t.update_elements_in_view(),
        t.animate()
    }
    ,
    t.update_viewport = function() {
      t.body_height = n.height(),
        t.viewport_height = i.height()
    }
    ,
    t.update_element_heights = function() {
      for (var e = t.elements.length, n = 0; e > n; n++) {
        var i = t.elements[n].element.outerHeight()
          , a = t.elements[n].element.offset();
        t.elements[n].height = i,
          t.elements[n].top = a.top,
          t.elements[n].bottom = a.top + i
      }
    }
    ,
    n.on(t.init_events.join(" "), function() {
      t.init()
    }),
    t
}(jQuery);
document.addEventListener("DOMContentLoaded", function() {
  particleground(document.getElementById("particle"), {
    dotColor: "rgba(255,255,255,0.35)",
    lineColor: "rgba(255,255,255,0.35)"
  });
  document.getElementById("intro")
}, !1),
  $(function() {
    var e = $(window).width()
      , t = $(window).height();
    $(".b-top-block").width(e),
      $(".b-top-block").height(t),
      $("canvas").width(e),
      $("canvas").height(t),
      $(window).resize(function() {
        var e = $(window).width()
          , t = $(window).height();
        $(".b-top-block").width(e),
          $(".b-top-block").height(t),
          $("canvas").width(e),
          $("canvas").height(t)
      })
  }),
  !function() {
    "use strict";
    var e, t = function(i, a) {
      function r(e) {
        return Math.floor(e)
      }
      function s() {
        var e = x.params.autoplay
          , t = x.slides.eq(x.activeIndex);
        t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
          x.autoplayTimeoutId = setTimeout(function() {
            x.params.loop ? (x.fixLoop(),
              x._slideNext(),
              x.emit("onAutoplay", x)) : x.isEnd ? a.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0),
              x.emit("onAutoplay", x)) : (x._slideNext(),
              x.emit("onAutoplay", x))
          }, e)
      }
      function o(t, n) {
        var i = e(t.target);
        if (!i.is(n))
          if ("string" == typeof n)
            i = i.parents(n);
          else if (n.nodeType) {
            var a;
            return i.parents().each(function(e, t) {
              t === n && (a = n)
            }),
              a ? n : void 0
          }
        return 0 !== i.length ? i[0] : void 0
      }
      function l(e, t) {
        t = t || {};
        var n = window.MutationObserver || window.WebkitMutationObserver
          , i = new n(function(e) {
            e.forEach(function(e) {
              x.onResize(!0),
                x.emit("onObserverUpdate", x, e)
            })
          }
        );
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }),
          x.observers.push(i)
      }
      function d(e) {
        e.originalEvent && (e = e.originalEvent);
        var t = e.keyCode || e.charCode;
        if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t))
          return !1;
        if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t))
          return !1;
        if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
          if (37 === t || 39 === t || 38 === t || 40 === t) {
            var n = !1;
            if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length)
              return;
            var i = {
              left: window.pageXOffset,
              top: window.pageYOffset
            }
              , a = window.innerWidth
              , r = window.innerHeight
              , s = x.container.offset();
            x.rtl && (s.left = s.left - x.container[0].scrollLeft);
            for (var o = [[s.left, s.top], [s.left + x.width, s.top], [s.left, s.top + x.height], [s.left + x.width, s.top + x.height]], l = 0; l < o.length; l++) {
              var d = o[l];
              d[0] >= i.left && d[0] <= i.left + a && d[1] >= i.top && d[1] <= i.top + r && (n = !0)
            }
            if (!n)
              return
          }
          x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
          (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(),
          (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
          40 === t && x.slideNext(),
          38 === t && x.slidePrev()),
            x.emit("onKeyPress", x, t)
        }
      }
      function p(e) {
        var t = 0
          , n = 0
          , i = 0
          , a = 0;
        return "detail"in e && (n = e.detail),
        "wheelDelta"in e && (n = -e.wheelDelta / 120),
        "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
        "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
        "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
          n = 0),
          i = 10 * t,
          a = 10 * n,
        "deltaY"in e && (a = e.deltaY),
        "deltaX"in e && (i = e.deltaX),
        (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
          a *= 40) : (i *= 800,
          a *= 800)),
        i && !t && (t = 1 > i ? -1 : 1),
        a && !n && (n = 1 > a ? -1 : 1),
          {
            spinX: t,
            spinY: n,
            pixelX: i,
            pixelY: a
          }
      }
      function u(e) {
        e.originalEvent && (e = e.originalEvent);
        var t = 0
          , n = x.rtl ? -1 : 1
          , i = p(e);
        if (x.params.mousewheelForceToAxis)
          if (x.isHorizontal()) {
            if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY)))
              return;
            t = i.pixelX * n
          } else {
            if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX)))
              return;
            t = i.pixelY
          }
        else
          t = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * n : -i.pixelY;
        if (0 !== t) {
          if (x.params.mousewheelInvert && (t = -t),
            x.params.freeMode) {
            var a = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity
              , r = x.isBeginning
              , s = x.isEnd;
            if (a >= x.minTranslate() && (a = x.minTranslate()),
            a <= x.maxTranslate() && (a = x.maxTranslate()),
              x.setWrapperTransition(0),
              x.setWrapperTranslate(a),
              x.updateProgress(),
              x.updateActiveIndex(),
            (!r && x.isBeginning || !s && x.isEnd) && x.updateClasses(),
              x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout),
                x.mousewheel.timeout = setTimeout(function() {
                  x.slideReset()
                }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(),
              x.emit("onScroll", x, e),
            x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(),
            0 === a || a === x.maxTranslate())
              return
          } else {
            if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
              if (0 > t)
                if (x.isEnd && !x.params.loop || x.animating) {
                  if (x.params.mousewheelReleaseOnEdges)
                    return !0
                } else
                  x.slideNext(),
                    x.emit("onScroll", x, e);
              else if (x.isBeginning && !x.params.loop || x.animating) {
                if (x.params.mousewheelReleaseOnEdges)
                  return !0
              } else
                x.slidePrev(),
                  x.emit("onScroll", x, e);
            x.mousewheel.lastScrollTime = (new window.Date).getTime()
          }
          return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            !1
        }
      }
      function c(t, n) {
        t = e(t);
        var i, a, r, s = x.rtl ? -1 : 1;
        i = t.attr("data-swiper-parallax") || "0",
          a = t.attr("data-swiper-parallax-x"),
          r = t.attr("data-swiper-parallax-y"),
          a || r ? (a = a || "0",
            r = r || "0") : x.isHorizontal() ? (a = i,
            r = "0") : (r = i,
            a = "0"),
          a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n * s + "%" : a * n * s + "px",
          r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n + "%" : r * n + "px",
          t.transform("translate3d(" + a + ", " + r + ",0px)")
      }
      function h(e) {
        return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
          e
      }
      if (!(this instanceof t))
        return new t(i,a);
      var f = {
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        autoplay: !1,
        autoplayDisableOnInteraction: !0,
        autoplayStopOnLast: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        },
        flip: {
          slideShadows: !0,
          limitRotation: !0
        },
        cube: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        },
        fade: {
          crossFade: !1
        },
        parallax: !1,
        zoom: !1,
        zoomMax: 3,
        zoomMin: 1,
        zoomToggle: !0,
        scrollbar: null,
        scrollbarHide: !0,
        scrollbarDraggable: !1,
        scrollbarSnapOnRelease: !1,
        keyboardControl: !1,
        mousewheelControl: !1,
        mousewheelReleaseOnEdges: !1,
        mousewheelInvert: !1,
        mousewheelForceToAxis: !1,
        mousewheelSensitivity: 1,
        mousewheelEventsTarged: "container",
        hashnav: !1,
        hashnavWatchState: !1,
        history: !1,
        replaceState: !1,
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        onlyExternal: !1,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        pagination: null,
        paginationElement: "span",
        paginationClickable: !1,
        paginationHide: !1,
        paginationBulletRender: null,
        paginationProgressRender: null,
        paginationFractionRender: null,
        paginationCustomRender: null,
        paginationType: "bullets",
        resistance: !0,
        resistanceRatio: .85,
        nextButton: null,
        prevButton: null,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        lazyLoading: !1,
        lazyLoadingInPrevNext: !1,
        lazyLoadingInPrevNextAmount: 1,
        lazyLoadingOnTransitionStart: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        control: void 0,
        controlInverse: !1,
        controlBy: "slide",
        normalizeSlideIndex: !0,
        allowSwipeToPrev: !0,
        allowSwipeToNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        buttonDisabledClass: "swiper-button-disabled",
        paginationCurrentClass: "swiper-pagination-current",
        paginationTotalClass: "swiper-pagination-total",
        paginationHiddenClass: "swiper-pagination-hidden",
        paginationProgressbarClass: "swiper-pagination-progressbar",
        paginationClickableClass: "swiper-pagination-clickable",
        paginationModifierClass: "swiper-pagination-",
        lazyLoadingClass: "swiper-lazy",
        lazyStatusLoadingClass: "swiper-lazy-loading",
        lazyStatusLoadedClass: "swiper-lazy-loaded",
        lazyPreloaderClass: "swiper-lazy-preloader",
        notificationClass: "swiper-notification",
        preloaderClass: "preloader",
        zoomContainerClass: "swiper-zoom-container",
        observer: !1,
        observeParents: !1,
        a11y: !1,
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        runCallbacksOnInit: !0
      }
        , m = a && a.virtualTranslate;
      a = a || {};
      var g = {};
      for (var v in a)
        if ("object" != typeof a[v] || null === a[v] || a[v].nodeType || a[v] === window || a[v] === document || void 0 !== n && a[v]instanceof n || "undefined" != typeof jQuery && a[v]instanceof jQuery)
          g[v] = a[v];
        else {
          g[v] = {};
          for (var y in a[v])
            g[v][y] = a[v][y]
        }
      for (var w in f)
        if (void 0 === a[w])
          a[w] = f[w];
        else if ("object" == typeof a[w])
          for (var b in f[w])
            void 0 === a[w][b] && (a[w][b] = f[w][b]);
      var x = this;
      if (x.params = a,
        x.originalParams = g,
        x.classNames = [],
      void 0 !== e && void 0 !== n && (e = n),
      (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (x.$ = e,
        x.currentBreakpoint = void 0,
        x.getActiveBreakpoint = function() {
          if (!x.params.breakpoints)
            return !1;
          var e, t = !1, n = [];
          for (e in x.params.breakpoints)
            x.params.breakpoints.hasOwnProperty(e) && n.push(e);
          n.sort(function(e, t) {
            return parseInt(e, 10) > parseInt(t, 10)
          });
          for (var i = 0; i < n.length; i++)
            (e = n[i]) >= window.innerWidth && !t && (t = e);
          return t || "max"
        }
        ,
        x.setBreakpoint = function() {
          var e = x.getActiveBreakpoint();
          if (e && x.currentBreakpoint !== e) {
            var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams
              , n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
            for (var i in t)
              x.params[i] = t[i];
            x.currentBreakpoint = e,
            n && x.destroyLoop && x.reLoop(!0)
          }
        }
        ,
      x.params.breakpoints && x.setBreakpoint(),
        x.container = e(i),
      0 !== x.container.length)) {
        if (x.container.length > 1) {
          var T = [];
          return x.container.each(function() {
            T.push(new t(this,a))
          }),
            T
        }
        x.container[0].swiper = x,
          x.container.data("swiper", x),
          x.classNames.push(x.params.containerModifierClass + x.params.direction),
        x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
        x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"),
          x.params.slidesPerColumn = 1),
        x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
        (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
        x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
        ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0,
          x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
        "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
        "cube" === x.params.effect && (x.params.resistanceRatio = 0,
          x.params.slidesPerView = 1,
          x.params.slidesPerColumn = 1,
          x.params.slidesPerGroup = 1,
          x.params.centeredSlides = !1,
          x.params.spaceBetween = 0,
          x.params.virtualTranslate = !0),
        "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1,
          x.params.slidesPerColumn = 1,
          x.params.slidesPerGroup = 1,
          x.params.watchSlidesProgress = !0,
          x.params.spaceBetween = 0,
        void 0 === m && (x.params.virtualTranslate = !0)),
        x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
          x.wrapper = x.container.children("." + x.params.wrapperClass),
        x.params.pagination && (x.paginationContainer = e(x.params.pagination),
        x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)),
          "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1,
          x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
        (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton),
        x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))),
        x.params.prevButton && (x.prevButton = e(x.params.prevButton),
        x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
          x.isHorizontal = function() {
            return "horizontal" === x.params.direction
          }
          ,
          x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
        x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
        x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
        x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"),
        x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
          x.container.addClass(x.classNames.join(" ")),
          x.translate = 0,
          x.progress = 0,
          x.velocity = 0,
          x.lockSwipeToNext = function() {
            x.params.allowSwipeToNext = !1,
            x.params.allowSwipeToPrev === !1 && x.params.grabCursor && x.unsetGrabCursor()
          }
          ,
          x.lockSwipeToPrev = function() {
            x.params.allowSwipeToPrev = !1,
            x.params.allowSwipeToNext === !1 && x.params.grabCursor && x.unsetGrabCursor()
          }
          ,
          x.lockSwipes = function() {
            x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
            x.params.grabCursor && x.unsetGrabCursor()
          }
          ,
          x.unlockSwipeToNext = function() {
            x.params.allowSwipeToNext = !0,
            x.params.allowSwipeToPrev === !0 && x.params.grabCursor && x.setGrabCursor()
          }
          ,
          x.unlockSwipeToPrev = function() {
            x.params.allowSwipeToPrev = !0,
            x.params.allowSwipeToNext === !0 && x.params.grabCursor && x.setGrabCursor()
          }
          ,
          x.unlockSwipes = function() {
            x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
            x.params.grabCursor && x.setGrabCursor()
          }
          ,
          x.setGrabCursor = function(e) {
            x.container[0].style.cursor = "move",
              x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
              x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
              x.container[0].style.cursor = e ? "grabbing" : "grab"
          }
          ,
          x.unsetGrabCursor = function() {
            x.container[0].style.cursor = ""
          }
          ,
        x.params.grabCursor && x.setGrabCursor(),
          x.imagesToLoad = [],
          x.imagesLoaded = 0,
          x.loadImage = function(e, t, n, i, a, r) {
            function s() {
              r && r()
            }
            var o;
            e.complete && a ? s() : t ? (o = new window.Image,
              o.onload = s,
              o.onerror = s,
            i && (o.sizes = i),
            n && (o.srcset = n),
            t && (o.src = t)) : s()
          }
          ,
          x.preloadImages = function() {
            function e() {
              void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++,
              x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(),
                x.emit("onImagesReady", x)))
            }
            x.imagesToLoad = x.container.find("img");
            for (var t = 0; t < x.imagesToLoad.length; t++)
              x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
          }
          ,
          x.autoplayTimeoutId = void 0,
          x.autoplaying = !1,
          x.autoplayPaused = !1,
          x.startAutoplay = function() {
            return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0,
              x.emit("onAutoplayStart", x),
              void s())
          }
          ,
          x.stopAutoplay = function(e) {
            x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
              x.autoplaying = !1,
              x.autoplayTimeoutId = void 0,
              x.emit("onAutoplayStop", x))
          }
          ,
          x.pauseAutoplay = function(e) {
            x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
              x.autoplayPaused = !0,
              0 === e ? (x.autoplayPaused = !1,
                s()) : x.wrapper.transitionEnd(function() {
                x && (x.autoplayPaused = !1,
                  x.autoplaying ? s() : x.stopAutoplay())
              }))
          }
          ,
          x.minTranslate = function() {
            return -x.snapGrid[0]
          }
          ,
          x.maxTranslate = function() {
            return -x.snapGrid[x.snapGrid.length - 1]
          }
          ,
          x.updateAutoHeight = function() {
            var e, t = [], n = 0;
            if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
              for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                var i = x.activeIndex + e;
                if (i > x.slides.length)
                  break;
                t.push(x.slides.eq(i)[0])
              }
            else
              t.push(x.slides.eq(x.activeIndex)[0]);
            for (e = 0; e < t.length; e++)
              if (void 0 !== t[e]) {
                var a = t[e].offsetHeight;
                n = a > n ? a : n
              }
            n && x.wrapper.css("height", n + "px")
          }
          ,
          x.updateContainerSize = function() {
            var e, t;
            e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth,
              t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight,
            0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10),
              t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10),
              x.width = e,
              x.height = t,
              x.size = x.isHorizontal() ? x.width : x.height)
          }
          ,
          x.updateSlidesSize = function() {
            x.slides = x.wrapper.children("." + x.params.slideClass),
              x.snapGrid = [],
              x.slidesGrid = [],
              x.slidesSizesGrid = [];
            var e, t = x.params.spaceBetween, n = -x.params.slidesOffsetBefore, i = 0, a = 0;
            if (void 0 !== x.size) {
              "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                x.virtualSize = -t,
                x.rtl ? x.slides.css({
                  marginLeft: "",
                  marginTop: ""
                }) : x.slides.css({
                  marginRight: "",
                  marginBottom: ""
                });
              var s;
              x.params.slidesPerColumn > 1 && (s = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn,
              "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (s = Math.max(s, x.params.slidesPerView * x.params.slidesPerColumn)));
              var o, l = x.params.slidesPerColumn, d = s / l, p = d - (x.params.slidesPerColumn * d - x.slides.length);
              for (e = 0; e < x.slides.length; e++) {
                o = 0;
                var u = x.slides.eq(e);
                if (x.params.slidesPerColumn > 1) {
                  var c, h, f;
                  "column" === x.params.slidesPerColumnFill ? (h = Math.floor(e / l),
                    f = e - h * l,
                  (h > p || h === p && f === l - 1) && ++f >= l && (f = 0,
                    h++),
                    c = h + f * s / l,
                    u.css({
                      "-webkit-box-ordinal-group": c,
                      "-moz-box-ordinal-group": c,
                      "-ms-flex-order": c,
                      "-webkit-order": c,
                      order: c
                    })) : (f = Math.floor(e / d),
                    h = e - f * d),
                    u.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== f && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", f)
                }
                "none" !== u.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                x.params.roundLengths && (o = r(o))) : (o = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView,
                x.params.roundLengths && (o = r(o)),
                  x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"),
                  x.slides[e].swiperSlideSize = o,
                  x.slidesSizesGrid.push(o),
                  x.params.centeredSlides ? (n = n + o / 2 + i / 2 + t,
                  0 === i && 0 !== e && (n = n - x.size / 2 - t),
                  0 === e && (n = n - x.size / 2 - t),
                  Math.abs(n) < .001 && (n = 0),
                  a % x.params.slidesPerGroup == 0 && x.snapGrid.push(n),
                    x.slidesGrid.push(n)) : (a % x.params.slidesPerGroup == 0 && x.snapGrid.push(n),
                    x.slidesGrid.push(n),
                    n = n + o + t),
                  x.virtualSize += o + t,
                  i = o,
                  a++)
              }
              x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
              var m;
              if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                width: x.virtualSize + x.params.spaceBetween + "px"
              }),
              x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                width: x.virtualSize + x.params.spaceBetween + "px"
              }) : x.wrapper.css({
                height: x.virtualSize + x.params.spaceBetween + "px"
              })),
              x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * s,
                x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween,
                x.isHorizontal() ? x.wrapper.css({
                  width: x.virtualSize + x.params.spaceBetween + "px"
                }) : x.wrapper.css({
                  height: x.virtualSize + x.params.spaceBetween + "px"
                }),
                x.params.centeredSlides)) {
                for (m = [],
                       e = 0; e < x.snapGrid.length; e++)
                  x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                x.snapGrid = m
              }
              if (!x.params.centeredSlides) {
                for (m = [],
                       e = 0; e < x.snapGrid.length; e++)
                  x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                x.snapGrid = m,
                Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
              }
              0 === x.snapGrid.length && (x.snapGrid = [0]),
              0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                marginLeft: t + "px"
              }) : x.slides.css({
                marginRight: t + "px"
              }) : x.slides.css({
                marginBottom: t + "px"
              })),
              x.params.watchSlidesProgress && x.updateSlidesOffset()
            }
          }
          ,
          x.updateSlidesOffset = function() {
            for (var e = 0; e < x.slides.length; e++)
              x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
          }
          ,
          x.currentSlidesPerView = function() {
            var e, t, n = 1;
            if (x.params.centeredSlides) {
              var i, a = x.slides[x.activeIndex].swiperSlideSize;
              for (e = x.activeIndex + 1; e < x.slides.length; e++)
                x.slides[e] && !i && (a += x.slides[e].swiperSlideSize,
                  n++,
                a > x.size && (i = !0));
              for (t = x.activeIndex - 1; t >= 0; t--)
                x.slides[t] && !i && (a += x.slides[t].swiperSlideSize,
                  n++,
                a > x.size && (i = !0))
            } else
              for (e = x.activeIndex + 1; e < x.slides.length; e++)
                x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && n++;
            return n
          }
          ,
          x.updateSlidesProgress = function(e) {
            if (void 0 === e && (e = x.translate || 0),
            0 !== x.slides.length) {
              void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
              var t = -e;
              x.rtl && (t = e),
                x.slides.removeClass(x.params.slideVisibleClass);
              for (var n = 0; n < x.slides.length; n++) {
                var i = x.slides[n]
                  , a = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + x.params.spaceBetween);
                if (x.params.watchSlidesVisibility) {
                  var r = -(t - i.swiperSlideOffset)
                    , s = r + x.slidesSizesGrid[n];
                  (r >= 0 && r < x.size || s > 0 && s <= x.size || 0 >= r && s >= x.size) && x.slides.eq(n).addClass(x.params.slideVisibleClass)
                }
                i.progress = x.rtl ? -a : a
              }
            }
          }
          ,
          x.updateProgress = function(e) {
            void 0 === e && (e = x.translate || 0);
            var t = x.maxTranslate() - x.minTranslate()
              , n = x.isBeginning
              , i = x.isEnd;
            0 === t ? (x.progress = 0,
              x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t,
              x.isBeginning = x.progress <= 0,
              x.isEnd = x.progress >= 1),
            x.isBeginning && !n && x.emit("onReachBeginning", x),
            x.isEnd && !i && x.emit("onReachEnd", x),
            x.params.watchSlidesProgress && x.updateSlidesProgress(e),
              x.emit("onProgress", x, x.progress)
          }
          ,
          x.updateActiveIndex = function() {
            var e, t, n, i = x.rtl ? x.translate : -x.translate;
            for (t = 0; t < x.slidesGrid.length; t++)
              void 0 !== x.slidesGrid[t + 1] ? i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] && (e = t + 1) : i >= x.slidesGrid[t] && (e = t);
            x.params.normalizeSlideIndex && (0 > e || void 0 === e) && (e = 0),
              n = Math.floor(e / x.params.slidesPerGroup),
            n >= x.snapGrid.length && (n = x.snapGrid.length - 1),
            e !== x.activeIndex && (x.snapIndex = n,
              x.previousIndex = x.activeIndex,
              x.activeIndex = e,
              x.updateClasses(),
              x.updateRealIndex())
          }
          ,
          x.updateRealIndex = function() {
            x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
          }
          ,
          x.updateClasses = function() {
            x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
            var t = x.slides.eq(x.activeIndex);
            t.addClass(x.params.slideActiveClass),
            a.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
            var n = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
            x.params.loop && 0 === n.length && (n = x.slides.eq(0),
              n.addClass(x.params.slideNextClass));
            var i = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
            if (x.params.loop && 0 === i.length && (i = x.slides.eq(-1),
              i.addClass(x.params.slidePrevClass)),
            a.loop && (n.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass),
              i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)),
            x.paginationContainer && x.paginationContainer.length > 0) {
              var r, s = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
              if (x.params.loop ? (r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup),
              r > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides),
              r > s - 1 && (r -= s),
              0 > r && "bullets" !== x.params.paginationType && (r = s + r)) : r = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0,
              "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass),
                x.paginationContainer.length > 1 ? x.bullets.each(function() {
                  e(this).index() === r && e(this).addClass(x.params.bulletActiveClass)
                }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)),
              "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1),
                x.paginationContainer.find("." + x.params.paginationTotalClass).text(s)),
              "progress" === x.params.paginationType) {
                var o = (r + 1) / s
                  , l = o
                  , d = 1;
                x.isHorizontal() || (d = o,
                  l = 1),
                  x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + d + ")").transition(x.params.speed)
              }
              "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, s)),
                x.emit("onPaginationRendered", x, x.paginationContainer[0]))
            }
            x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass),
            x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass),
            x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))),
            x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass),
            x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass),
            x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
          }
          ,
          x.updatePagination = function() {
            if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
              var e = "";
              if ("bullets" === x.params.paginationType) {
                for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; t > n; n++)
                  e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, n, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                x.paginationContainer.html(e),
                  x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
              }
              "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>',
                x.paginationContainer.html(e)),
              "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>',
                x.paginationContainer.html(e)),
              "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
            }
          }
          ,
          x.update = function(e) {
            function t() {
              x.rtl,
                x.translate,
                n = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                x.setWrapperTranslate(n),
                x.updateActiveIndex(),
                x.updateClasses()
            }
            if (x) {
              x.updateContainerSize(),
                x.updateSlidesSize(),
                x.updateProgress(),
                x.updatePagination(),
                x.updateClasses(),
              x.params.scrollbar && x.scrollbar && x.scrollbar.set();
              var n;
              e ? (x.controller && x.controller.spline && (x.controller.spline = void 0),
                x.params.freeMode ? (t(),
                x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()) : x.params.autoHeight && x.updateAutoHeight()
            }
          }
          ,
          x.onResize = function(e) {
            x.params.onBeforeResize && x.params.onBeforeResize(x),
            x.params.breakpoints && x.setBreakpoint();
            var t = x.params.allowSwipeToPrev
              , n = x.params.allowSwipeToNext;
            x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
              x.updateContainerSize(),
              x.updateSlidesSize(),
            ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
            x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
            x.controller && x.controller.spline && (x.controller.spline = void 0);
            var i = !1;
            if (x.params.freeMode) {
              var a = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
              x.setWrapperTranslate(a),
                x.updateActiveIndex(),
                x.updateClasses(),
              x.params.autoHeight && x.updateAutoHeight()
            } else
              x.updateClasses(),
                i = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
            x.params.lazyLoading && !i && x.lazy && x.lazy.load(),
              x.params.allowSwipeToPrev = t,
              x.params.allowSwipeToNext = n,
            x.params.onAfterResize && x.params.onAfterResize(x)
          }
          ,
          x.touchEventsDesktop = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          },
          window.navigator.pointerEnabled ? x.touchEventsDesktop = {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
          } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
          }),
          x.touchEvents = {
            start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
            move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
            end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
          },
        (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction),
          x.initEvents = function(e) {
            var t = e ? "off" : "on"
              , n = e ? "removeEventListener" : "addEventListener"
              , i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0]
              , r = x.support.touch ? i : document
              , s = !!x.params.nested;
            if (x.browser.ie)
              i[n](x.touchEvents.start, x.onTouchStart, !1),
                r[n](x.touchEvents.move, x.onTouchMove, s),
                r[n](x.touchEvents.end, x.onTouchEnd, !1);
            else {
              if (x.support.touch) {
                var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                i[n](x.touchEvents.start, x.onTouchStart, o),
                  i[n](x.touchEvents.move, x.onTouchMove, s),
                  i[n](x.touchEvents.end, x.onTouchEnd, o)
              }
              (a.simulateTouch && !x.device.ios && !x.device.android || a.simulateTouch && !x.support.touch && x.device.ios) && (i[n]("mousedown", x.onTouchStart, !1),
                document[n]("mousemove", x.onTouchMove, s),
                document[n]("mouseup", x.onTouchEnd, !1))
            }
            window[n]("resize", x.onResize),
            x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext),
            x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
            x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev),
            x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
            x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex),
            x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
            (x.params.preventClicks || x.params.preventClicksPropagation) && i[n]("click", x.preventClicks, !0)
          }
          ,
          x.attachEvents = function() {
            x.initEvents()
          }
          ,
          x.detachEvents = function() {
            x.initEvents(!0)
          }
          ,
          x.allowClick = !0,
          x.preventClicks = function(e) {
            x.allowClick || (x.params.preventClicks && e.preventDefault(),
            x.params.preventClicksPropagation && x.animating && (e.stopPropagation(),
              e.stopImmediatePropagation()))
          }
          ,
          x.onClickNext = function(e) {
            e.preventDefault(),
            x.isEnd && !x.params.loop || x.slideNext()
          }
          ,
          x.onClickPrev = function(e) {
            e.preventDefault(),
            x.isBeginning && !x.params.loop || x.slidePrev()
          }
          ,
          x.onClickIndex = function(t) {
            t.preventDefault();
            var n = e(this).index() * x.params.slidesPerGroup;
            x.params.loop && (n += x.loopedSlides),
              x.slideTo(n)
          }
          ,
          x.updateClickedSlide = function(t) {
            var n = o(t, "." + x.params.slideClass)
              , i = !1;
            if (n)
              for (var a = 0; a < x.slides.length; a++)
                x.slides[a] === n && (i = !0);
            if (!n || !i)
              return x.clickedSlide = void 0,
                void (x.clickedIndex = void 0);
            if (x.clickedSlide = n,
              x.clickedIndex = e(n).index(),
            x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
              var r, s = x.clickedIndex, l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
              if (x.params.loop) {
                if (x.animating)
                  return;
                r = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                  x.params.centeredSlides ? s < x.loopedSlides - l / 2 || s > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(),
                    s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                    setTimeout(function() {
                      x.slideTo(s)
                    }, 0)) : x.slideTo(s) : s > x.slides.length - l ? (x.fixLoop(),
                    s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                    setTimeout(function() {
                      x.slideTo(s)
                    }, 0)) : x.slideTo(s)
              } else
                x.slideTo(s)
            }
          }
        ;
        var C, S, E, k, M, z, D, N, L, P, A = "input, select, textarea, button, video", $ = Date.now(), I = [];
        x.animating = !1,
          x.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          };
        var H, O;
        x.onTouchStart = function(t) {
          if (t.originalEvent && (t = t.originalEvent),
          (H = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
            if (x.params.noSwiping && o(t, "." + x.params.noSwipingClass))
              return void (x.allowClick = !0);
            if (!x.params.swipeHandler || o(t, x.params.swipeHandler)) {
              var n = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX
                , i = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
              if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                if (C = !0,
                  S = !1,
                  E = !0,
                  M = void 0,
                  O = void 0,
                  x.touches.startX = n,
                  x.touches.startY = i,
                  k = Date.now(),
                  x.allowClick = !0,
                  x.updateContainerSize(),
                  x.swipeDirection = void 0,
                x.params.threshold > 0 && (N = !1),
                "touchstart" !== t.type) {
                  var a = !0;
                  e(t.target).is(A) && (a = !1),
                  document.activeElement && e(document.activeElement).is(A) && document.activeElement.blur(),
                  a && t.preventDefault()
                }
                x.emit("onTouchStart", x, t)
              }
            }
          }
        }
          ,
          x.onTouchMove = function(t) {
            if (t.originalEvent && (t = t.originalEvent),
            !H || "mousemove" !== t.type) {
              if (t.preventedByNestedSwiper)
                return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                  void (x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
              if (x.params.onlyExternal)
                return x.allowClick = !1,
                  void (C && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    k = Date.now()));
              if (H && x.params.touchReleaseOnEdges && !x.params.loop)
                if (x.isHorizontal()) {
                  if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate())
                    return
                } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate())
                  return;
              if (H && document.activeElement && t.target === document.activeElement && e(t.target).is(A))
                return S = !0,
                  void (x.allowClick = !1);
              if (E && x.emit("onTouchMove", x, t),
                !(t.targetTouches && t.targetTouches.length > 1)) {
                if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                  x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                void 0 === M) {
                  var n;
                  x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? M = !1 : (n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI,
                    M = x.isHorizontal() ? n > x.params.touchAngle : 90 - n > x.params.touchAngle)
                }
                if (M && x.emit("onTouchMoveOpposite", x, t),
                void 0 === O && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (O = !0)),
                  C) {
                  if (M)
                    return void (C = !1);
                  if (O) {
                    x.allowClick = !1,
                      x.emit("onSliderMove", x, t),
                      t.preventDefault(),
                    x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(),
                    S || (a.loop && x.fixLoop(),
                      D = x.getWrapperTranslate(),
                      x.setWrapperTransition(0),
                    x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                    x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()),
                      P = !1,
                    !x.params.grabCursor || x.params.allowSwipeToNext !== !0 && x.params.allowSwipeToPrev !== !0 || x.setGrabCursor(!0)),
                      S = !0;
                    var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                    i *= x.params.touchRatio,
                    x.rtl && (i = -i),
                      x.swipeDirection = i > 0 ? "prev" : "next",
                      z = i + D;
                    var r = !0;
                    if (i > 0 && z > x.minTranslate() ? (r = !1,
                    x.params.resistance && (z = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + D + i, x.params.resistanceRatio))) : 0 > i && z < x.maxTranslate() && (r = !1,
                    x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - D - i, x.params.resistanceRatio))),
                    r && (t.preventedByNestedSwiper = !0),
                    !x.params.allowSwipeToNext && "next" === x.swipeDirection && D > z && (z = D),
                    !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && z > D && (z = D),
                    x.params.threshold > 0) {
                      if (!(Math.abs(i) > x.params.threshold || N))
                        return void (z = D);
                      if (!N)
                        return N = !0,
                          x.touches.startX = x.touches.currentX,
                          x.touches.startY = x.touches.currentY,
                          z = D,
                          void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                    }
                    x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(),
                    x.params.freeMode && (0 === I.length && I.push({
                      position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                      time: k
                    }),
                      I.push({
                        position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                        time: (new window.Date).getTime()
                      })),
                      x.updateProgress(z),
                      x.setWrapperTranslate(z))
                  }
                }
              }
            }
          }
          ,
          x.onTouchEnd = function(t) {
            if (t.originalEvent && (t = t.originalEvent),
            E && x.emit("onTouchEnd", x, t),
              E = !1,
              C) {
              x.params.grabCursor && S && C && (x.params.allowSwipeToNext === !0 || x.params.allowSwipeToPrev === !0) && x.setGrabCursor(!1);
              var n = Date.now()
                , i = n - k;
              if (x.allowClick && (x.updateClickedSlide(t),
                x.emit("onTap", x, t),
              300 > i && n - $ > 300 && (L && clearTimeout(L),
                L = setTimeout(function() {
                  x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass),
                    x.emit("onClick", x, t))
                }, 300)),
              300 > i && 300 > n - $ && (L && clearTimeout(L),
                x.emit("onDoubleTap", x, t))),
                $ = Date.now(),
                setTimeout(function() {
                  x && (x.allowClick = !0)
                }, 0),
              !C || !S || !x.swipeDirection || 0 === x.touches.diff || z === D)
                return void (C = S = !1);
              C = S = !1;
              var a;
              if (a = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -z,
                x.params.freeMode) {
                if (a < -x.minTranslate())
                  return void x.slideTo(x.activeIndex);
                if (a > -x.maxTranslate())
                  return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                if (x.params.freeModeMomentum) {
                  if (I.length > 1) {
                    var r = I.pop()
                      , s = I.pop()
                      , o = r.position - s.position
                      , l = r.time - s.time;
                    x.velocity = o / l,
                      x.velocity = x.velocity / 2,
                    Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                    (l > 150 || (new window.Date).getTime() - r.time > 300) && (x.velocity = 0)
                  } else
                    x.velocity = 0;
                  x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                    I.length = 0;
                  var d = 1e3 * x.params.freeModeMomentumRatio
                    , p = x.velocity * d
                    , u = x.translate + p;
                  x.rtl && (u = -u);
                  var c, h = !1, f = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                  if (u < x.maxTranslate())
                    x.params.freeModeMomentumBounce ? (u + x.maxTranslate() < -f && (u = x.maxTranslate() - f),
                      c = x.maxTranslate(),
                      h = !0,
                      P = !0) : u = x.maxTranslate();
                  else if (u > x.minTranslate())
                    x.params.freeModeMomentumBounce ? (u - x.minTranslate() > f && (u = x.minTranslate() + f),
                      c = x.minTranslate(),
                      h = !0,
                      P = !0) : u = x.minTranslate();
                  else if (x.params.freeModeSticky) {
                    var m, g = 0;
                    for (g = 0; g < x.snapGrid.length; g += 1)
                      if (x.snapGrid[g] > -u) {
                        m = g;
                        break
                      }
                    u = Math.abs(x.snapGrid[m] - u) < Math.abs(x.snapGrid[m - 1] - u) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                    x.rtl || (u = -u)
                  }
                  if (0 !== x.velocity)
                    d = x.rtl ? Math.abs((-u - x.translate) / x.velocity) : Math.abs((u - x.translate) / x.velocity);
                  else if (x.params.freeModeSticky)
                    return void x.slideReset();
                  x.params.freeModeMomentumBounce && h ? (x.updateProgress(c),
                    x.setWrapperTransition(d),
                    x.setWrapperTranslate(u),
                    x.onTransitionStart(),
                    x.animating = !0,
                    x.wrapper.transitionEnd(function() {
                      x && P && (x.emit("onMomentumBounce", x),
                        x.setWrapperTransition(x.params.speed),
                        x.setWrapperTranslate(c),
                        x.wrapper.transitionEnd(function() {
                          x && x.onTransitionEnd()
                        }))
                    })) : x.velocity ? (x.updateProgress(u),
                    x.setWrapperTransition(d),
                    x.setWrapperTranslate(u),
                    x.onTransitionStart(),
                  x.animating || (x.animating = !0,
                    x.wrapper.transitionEnd(function() {
                      x && x.onTransitionEnd()
                    }))) : x.updateProgress(u),
                    x.updateActiveIndex()
                }
                return void ((!x.params.freeModeMomentum || i >= x.params.longSwipesMs) && (x.updateProgress(),
                  x.updateActiveIndex()))
              }
              var v, y = 0, w = x.slidesSizesGrid[0];
              for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup)
                void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? a >= x.slidesGrid[v] && a < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v,
                  w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : a >= x.slidesGrid[v] && (y = v,
                  w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
              var b = (a - x.slidesGrid[y]) / w;
              if (i > x.params.longSwipesMs) {
                if (!x.params.longSwipes)
                  return void x.slideTo(x.activeIndex);
                "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)),
                "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
              } else {
                if (!x.params.shortSwipes)
                  return void x.slideTo(x.activeIndex);
                "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup),
                "prev" === x.swipeDirection && x.slideTo(y)
              }
            }
          }
          ,
          x._slideTo = function(e, t) {
            return x.slideTo(e, t, !0, !0)
          }
          ,
          x.slideTo = function(e, t, n, i) {
            void 0 === n && (n = !0),
            void 0 === e && (e = 0),
            0 > e && (e = 0),
              x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
            x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
            var a = -x.snapGrid[x.snapIndex];
            if (x.params.autoplay && x.autoplaying && (i || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()),
              x.updateProgress(a),
              x.params.normalizeSlideIndex)
              for (var r = 0; r < x.slidesGrid.length; r++)
                -Math.floor(100 * a) >= Math.floor(100 * x.slidesGrid[r]) && (e = r);
            return !(!x.params.allowSwipeToNext && a < x.translate && a < x.minTranslate() || !x.params.allowSwipeToPrev && a > x.translate && a > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === t && (t = x.params.speed),
              x.previousIndex = x.activeIndex || 0,
              x.activeIndex = e,
              x.updateRealIndex(),
              x.rtl && -a === x.translate || !x.rtl && a === x.translate ? (x.params.autoHeight && x.updateAutoHeight(),
                x.updateClasses(),
              "slide" !== x.params.effect && x.setWrapperTranslate(a),
                1) : (x.updateClasses(),
                x.onTransitionStart(n),
                0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(a),
                  x.setWrapperTransition(0),
                  x.onTransitionEnd(n)) : (x.setWrapperTranslate(a),
                  x.setWrapperTransition(t),
                x.animating || (x.animating = !0,
                  x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(n)
                  }))),
                0)))
          }
          ,
          x.onTransitionStart = function(e) {
            void 0 === e && (e = !0),
            x.params.autoHeight && x.updateAutoHeight(),
            x.lazy && x.lazy.onTransitionStart(),
            e && (x.emit("onTransitionStart", x),
            x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x),
              x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
          }
          ,
          x.onTransitionEnd = function(e) {
            x.animating = !1,
              x.setWrapperTransition(0),
            void 0 === e && (e = !0),
            x.lazy && x.lazy.onTransitionEnd(),
            e && (x.emit("onTransitionEnd", x),
            x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x),
              x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
            x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
            x.params.hashnav && x.hashnav && x.hashnav.setHash()
          }
          ,
          x.slideNext = function(e, t, n) {
            return x.params.loop ? x.animating ? !1 : (x.fixLoop(),
              x.container[0].clientLeft,
              x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
          }
          ,
          x._slideNext = function(e) {
            return x.slideNext(!0, e, !0)
          }
          ,
          x.slidePrev = function(e, t, n) {
            return x.params.loop ? x.animating ? !1 : (x.fixLoop(),
              x.container[0].clientLeft,
              x.slideTo(x.activeIndex - 1, t, e, n)) : x.slideTo(x.activeIndex - 1, t, e, n)
          }
          ,
          x._slidePrev = function(e) {
            return x.slidePrev(!0, e, !0)
          }
          ,
          x.slideReset = function(e, t, n) {
            return x.slideTo(x.activeIndex, t, e)
          }
          ,
          x.disableTouchControl = function() {
            return x.params.onlyExternal = !0,
              !0
          }
          ,
          x.enableTouchControl = function() {
            return x.params.onlyExternal = !1,
              !0
          }
          ,
          x.setWrapperTransition = function(e, t) {
            x.wrapper.transition(e),
            "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
            x.params.parallax && x.parallax && x.parallax.setTransition(e),
            x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
            x.params.control && x.controller && x.controller.setTransition(e, t),
              x.emit("onSetTransition", x, e)
          }
          ,
          x.setWrapperTranslate = function(e, t, n) {
            var i = 0
              , a = 0;
            x.isHorizontal() ? i = x.rtl ? -e : e : a = e,
            x.params.roundLengths && (i = r(i),
              a = r(a)),
            x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + i + "px, " + a + "px, 0px)") : x.wrapper.transform("translate(" + i + "px, " + a + "px)")),
              x.translate = x.isHorizontal() ? i : a;
            var s, o = x.maxTranslate() - x.minTranslate();
            s = 0 === o ? 0 : (e - x.minTranslate()) / o,
            s !== x.progress && x.updateProgress(e),
            t && x.updateActiveIndex(),
            "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
            x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
            x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
            x.params.control && x.controller && x.controller.setTranslate(x.translate, n),
              x.emit("onSetTranslate", x, x.translate)
          }
          ,
          x.getTranslate = function(e, t) {
            var n, i, a, r;
            return void 0 === t && (t = "x"),
              x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (a = window.getComputedStyle(e, null),
                window.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                  return e.replace(",", ".")
                }).join(", ")),
                  r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                  n = r.toString().split(",")),
              "x" === t && (i = window.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
              "y" === t && (i = window.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
              x.rtl && i && (i = -i),
              i || 0)
          }
          ,
          x.getWrapperTranslate = function(e) {
            return void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
              x.getTranslate(x.wrapper[0], e)
          }
          ,
          x.observers = [],
          x.initObservers = function() {
            if (x.params.observeParents)
              for (var e = x.container.parents(), t = 0; t < e.length; t++)
                l(e[t]);
            l(x.container[0], {
              childList: !1
            }),
              l(x.wrapper[0], {
                attributes: !1
              })
          }
          ,
          x.disconnectObservers = function() {
            for (var e = 0; e < x.observers.length; e++)
              x.observers[e].disconnect();
            x.observers = []
          }
          ,
          x.createLoop = function() {
            x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
            var t = x.wrapper.children("." + x.params.slideClass);
            "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length),
              x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
              x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
            x.loopedSlides > t.length && (x.loopedSlides = t.length);
            var n, i = [], a = [];
            for (t.each(function(n, r) {
              var s = e(this);
              n < x.loopedSlides && a.push(r),
              n < t.length && n >= t.length - x.loopedSlides && i.push(r),
                s.attr("data-swiper-slide-index", n)
            }),
                   n = 0; n < a.length; n++)
              x.wrapper.append(e(a[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
            for (n = i.length - 1; n >= 0; n--)
              x.wrapper.prepend(e(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
          }
          ,
          x.destroyLoop = function() {
            x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
              x.slides.removeAttr("data-swiper-slide-index")
          }
          ,
          x.reLoop = function(e) {
            var t = x.activeIndex - x.loopedSlides;
            x.destroyLoop(),
              x.createLoop(),
              x.updateSlidesSize(),
            e && x.slideTo(t + x.loopedSlides, 0, !1)
          }
          ,
          x.fixLoop = function() {
            var e;
            x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex,
              e += x.loopedSlides,
              x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides,
              e += x.loopedSlides,
              x.slideTo(e, 0, !1, !0))
          }
          ,
          x.appendSlide = function(e) {
            if (x.params.loop && x.destroyLoop(),
            "object" == typeof e && e.length)
              for (var t = 0; t < e.length; t++)
                e[t] && x.wrapper.append(e[t]);
            else
              x.wrapper.append(e);
            x.params.loop && x.createLoop(),
            x.params.observer && x.support.observer || x.update(!0)
          }
          ,
          x.prependSlide = function(e) {
            x.params.loop && x.destroyLoop();
            var t = x.activeIndex + 1;
            if ("object" == typeof e && e.length) {
              for (var n = 0; n < e.length; n++)
                e[n] && x.wrapper.prepend(e[n]);
              t = x.activeIndex + e.length
            } else
              x.wrapper.prepend(e);
            x.params.loop && x.createLoop(),
            x.params.observer && x.support.observer || x.update(!0),
              x.slideTo(t, 0, !1)
          }
          ,
          x.removeSlide = function(e) {
            x.params.loop && (x.destroyLoop(),
              x.slides = x.wrapper.children("." + x.params.slideClass));
            var t, n = x.activeIndex;
            if ("object" == typeof e && e.length) {
              for (var i = 0; i < e.length; i++)
                t = e[i],
                x.slides[t] && x.slides.eq(t).remove(),
                n > t && n--;
              n = Math.max(n, 0)
            } else
              t = e,
              x.slides[t] && x.slides.eq(t).remove(),
              n > t && n--,
                n = Math.max(n, 0);
            x.params.loop && x.createLoop(),
            x.params.observer && x.support.observer || x.update(!0),
              x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1)
          }
          ,
          x.removeAllSlides = function() {
            for (var e = [], t = 0; t < x.slides.length; t++)
              e.push(t);
            x.removeSlide(e)
          }
          ,
          x.effects = {
            fade: {
              setTranslate: function() {
                for (var e = 0; e < x.slides.length; e++) {
                  var t = x.slides.eq(e)
                    , n = t[0].swiperSlideOffset
                    , i = -n;
                  x.params.virtualTranslate || (i -= x.translate);
                  var a = 0;
                  x.isHorizontal() || (a = i,
                    i = 0);
                  var r = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                  t.css({
                    opacity: r
                  }).transform("translate3d(" + i + "px, " + a + "px, 0px)")
                }
              },
              setTransition: function(e) {
                if (x.slides.transition(e),
                x.params.virtualTranslate && 0 !== e) {
                  var t = !1;
                  x.slides.transitionEnd(function() {
                    if (!t && x) {
                      t = !0,
                        x.animating = !1;
                      for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++)
                        x.wrapper.trigger(e[n])
                    }
                  })
                }
              }
            },
            flip: {
              setTranslate: function() {
                for (var t = 0; t < x.slides.length; t++) {
                  var n = x.slides.eq(t)
                    , i = n[0].progress;
                  x.params.flip.limitRotation && (i = Math.max(Math.min(n[0].progress, 1), -1));
                  var a = n[0].swiperSlideOffset
                    , r = -180 * i
                    , s = r
                    , o = 0
                    , l = -a
                    , d = 0;
                  if (x.isHorizontal() ? x.rtl && (s = -s) : (d = l,
                    l = 0,
                    o = -s,
                    s = 0),
                    n[0].style.zIndex = -Math.abs(Math.round(i)) + x.slides.length,
                    x.params.flip.slideShadows) {
                    var p = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                      , u = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                      n.append(p)),
                    0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                      n.append(u)),
                    p.length && (p[0].style.opacity = Math.max(-i, 0)),
                    u.length && (u[0].style.opacity = Math.max(i, 0))
                  }
                  n.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                }
              },
              setTransition: function(t) {
                if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                x.params.virtualTranslate && 0 !== t) {
                  var n = !1;
                  x.slides.eq(x.activeIndex).transitionEnd(function() {
                    if (!n && x && e(this).hasClass(x.params.slideActiveClass)) {
                      n = !0,
                        x.animating = !1;
                      for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                        x.wrapper.trigger(t[i])
                    }
                  })
                }
              }
            },
            cube: {
              setTranslate: function() {
                var t, n = 0;
                x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"),
                0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                  x.wrapper.append(t)),
                  t.css({
                    height: x.width + "px"
                  })) : (t = x.container.find(".swiper-cube-shadow"),
                0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                  x.container.append(t))));
                for (var i = 0; i < x.slides.length; i++) {
                  var a = x.slides.eq(i)
                    , r = 90 * i
                    , s = Math.floor(r / 360);
                  x.rtl && (r = -r,
                    s = Math.floor(-r / 360));
                  var o = Math.max(Math.min(a[0].progress, 1), -1)
                    , l = 0
                    , d = 0
                    , p = 0;
                  i % 4 == 0 ? (l = 4 * -s * x.size,
                    p = 0) : (i - 1) % 4 == 0 ? (l = 0,
                    p = 4 * -s * x.size) : (i - 2) % 4 == 0 ? (l = x.size + 4 * s * x.size,
                    p = x.size) : (i - 3) % 4 == 0 && (l = -x.size,
                    p = 3 * x.size + 4 * x.size * s),
                  x.rtl && (l = -l),
                  x.isHorizontal() || (d = l,
                    l = 0);
                  var u = "rotateX(" + (x.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (x.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + d + "px, " + p + "px)";
                  if (1 >= o && o > -1 && (n = 90 * i + 90 * o,
                  x.rtl && (n = 90 * -i - 90 * o)),
                    a.transform(u),
                    x.params.cube.slideShadows) {
                    var c = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                      , h = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                      a.append(c)),
                    0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                      a.append(h)),
                    c.length && (c[0].style.opacity = Math.max(-o, 0)),
                    h.length && (h[0].style.opacity = Math.max(o, 0))
                  }
                }
                if (x.wrapper.css({
                  "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                  "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                  "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                  "transform-origin": "50% 50% -" + x.size / 2 + "px"
                }),
                  x.params.cube.shadow)
                  if (x.isHorizontal())
                    t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                  else {
                    var f = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90)
                      , m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2)
                      , g = x.params.cube.shadowScale
                      , v = x.params.cube.shadowScale / m
                      , y = x.params.cube.shadowOffset;
                    t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                  }
                var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n : 0) + "deg)")
              },
              setTransition: function(e) {
                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e);
              }
            },
            coverflow: {
              setTranslate: function() {
                for (var t = x.translate, n = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, i = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, a = x.params.coverflow.depth, r = 0, s = x.slides.length; s > r; r++) {
                  var o = x.slides.eq(r)
                    , l = x.slidesSizesGrid[r]
                    , d = o[0].swiperSlideOffset
                    , p = (n - d - l / 2) / l * x.params.coverflow.modifier
                    , u = x.isHorizontal() ? i * p : 0
                    , c = x.isHorizontal() ? 0 : i * p
                    , h = -a * Math.abs(p)
                    , f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * p
                    , m = x.isHorizontal() ? x.params.coverflow.stretch * p : 0;
                  Math.abs(m) < .001 && (m = 0),
                  Math.abs(f) < .001 && (f = 0),
                  Math.abs(h) < .001 && (h = 0),
                  Math.abs(u) < .001 && (u = 0),
                  Math.abs(c) < .001 && (c = 0);
                  var g = "translate3d(" + m + "px," + f + "px," + h + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                  if (o.transform(g),
                    o[0].style.zIndex = 1 - Math.abs(Math.round(p)),
                    x.params.coverflow.slideShadows) {
                    var v = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                      , y = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                      o.append(v)),
                    0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                      o.append(y)),
                    v.length && (v[0].style.opacity = p > 0 ? p : 0),
                    y.length && (y[0].style.opacity = -p > 0 ? -p : 0)
                  }
                }
                x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = n + "px 50%")
              },
              setTransition: function(e) {
                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
              }
            }
          },
          x.lazy = {
            initialImageLoaded: !1,
            loadImageInSlide: function(t, n) {
              if (void 0 !== t && (void 0 === n && (n = !0),
              0 !== x.slides.length)) {
                var i = x.slides.eq(t)
                  , a = i.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                !i.hasClass(x.params.lazyLoadingClass) || i.hasClass(x.params.lazyStatusLoadedClass) || i.hasClass(x.params.lazyStatusLoadingClass) || (a = a.add(i[0])),
                0 !== a.length && a.each(function() {
                  var t = e(this);
                  t.addClass(x.params.lazyStatusLoadingClass);
                  var a = t.attr("data-background")
                    , r = t.attr("data-src")
                    , s = t.attr("data-srcset")
                    , o = t.attr("data-sizes");
                  x.loadImage(t[0], r || a, s, o, !1, function() {
                    if (void 0 !== x && null !== x && x) {
                      if (a ? (t.css("background-image", 'url("' + a + '")'),
                        t.removeAttr("data-background")) : (s && (t.attr("srcset", s),
                        t.removeAttr("data-srcset")),
                      o && (t.attr("sizes", o),
                        t.removeAttr("data-sizes")),
                      r && (t.attr("src", r),
                        t.removeAttr("data-src"))),
                        t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),
                        i.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(),
                      x.params.loop && n) {
                        var e = i.attr("data-swiper-slide-index");
                        if (i.hasClass(x.params.slideDuplicateClass)) {
                          var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                          x.lazy.loadImageInSlide(l.index(), !1)
                        } else {
                          var d = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                          x.lazy.loadImageInSlide(d.index(), !1)
                        }
                      }
                      x.emit("onLazyImageReady", x, i[0], t[0])
                    }
                  }),
                    x.emit("onLazyImageLoad", x, i[0], t[0])
                })
              }
            },
            load: function() {
              var t, n = x.params.slidesPerView;
              if ("auto" === n && (n = 0),
              x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                x.params.watchSlidesVisibility)
                x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                  x.lazy.loadImageInSlide(e(this).index())
                });
              else if (n > 1)
                for (t = x.activeIndex; t < x.activeIndex + n; t++)
                  x.slides[t] && x.lazy.loadImageInSlide(t);
              else
                x.lazy.loadImageInSlide(x.activeIndex);
              if (x.params.lazyLoadingInPrevNext)
                if (n > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                  var i = x.params.lazyLoadingInPrevNextAmount
                    , a = n
                    , r = Math.min(x.activeIndex + a + Math.max(i, a), x.slides.length)
                    , s = Math.max(x.activeIndex - Math.max(a, i), 0);
                  for (t = x.activeIndex + n; r > t; t++)
                    x.slides[t] && x.lazy.loadImageInSlide(t);
                  for (t = s; t < x.activeIndex; t++)
                    x.slides[t] && x.lazy.loadImageInSlide(t)
                } else {
                  var o = x.wrapper.children("." + x.params.slideNextClass);
                  o.length > 0 && x.lazy.loadImageInSlide(o.index());
                  var l = x.wrapper.children("." + x.params.slidePrevClass);
                  l.length > 0 && x.lazy.loadImageInSlide(l.index())
                }
            },
            onTransitionStart: function() {
              x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
            },
            onTransitionEnd: function() {
              x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
            }
          },
          x.scrollbar = {
            isTouched: !1,
            setDragPosition: function(e) {
              var t = x.scrollbar
                , n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                , i = n - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                , a = -x.minTranslate() * t.moveDivider
                , r = -x.maxTranslate() * t.moveDivider;
              a > i ? i = a : i > r && (i = r),
                i = -i / t.moveDivider,
                x.updateProgress(i),
                x.setWrapperTranslate(i, !0)
            },
            dragStart: function(e) {
              var t = x.scrollbar;
              t.isTouched = !0,
                e.preventDefault(),
                e.stopPropagation(),
                t.setDragPosition(e),
                clearTimeout(t.dragTimeout),
                t.track.transition(0),
              x.params.scrollbarHide && t.track.css("opacity", 1),
                x.wrapper.transition(100),
                t.drag.transition(100),
                x.emit("onScrollbarDragStart", x)
            },
            dragMove: function(e) {
              var t = x.scrollbar;
              t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                t.setDragPosition(e),
                x.wrapper.transition(0),
                t.track.transition(0),
                t.drag.transition(0),
                x.emit("onScrollbarDragMove", x))
            },
            dragEnd: function(e) {
              var t = x.scrollbar;
              t.isTouched && (t.isTouched = !1,
              x.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                t.dragTimeout = setTimeout(function() {
                  t.track.css("opacity", 0),
                    t.track.transition(400)
                }, 1e3)),
                x.emit("onScrollbarDragEnd", x),
              x.params.scrollbarSnapOnRelease && x.slideReset())
            },
            draggableEvents: function() {
              return x.params.simulateTouch !== !1 || x.support.touch ? x.touchEvents : x.touchEventsDesktop
            }(),
            enableDraggable: function() {
              var t = x.scrollbar
                , n = x.support.touch ? t.track : document;
              e(t.track).on(t.draggableEvents.start, t.dragStart),
                e(n).on(t.draggableEvents.move, t.dragMove),
                e(n).on(t.draggableEvents.end, t.dragEnd)
            },
            disableDraggable: function() {
              var t = x.scrollbar
                , n = x.support.touch ? t.track : document;
              e(t.track).off(t.draggableEvents.start, t.dragStart),
                e(n).off(t.draggableEvents.move, t.dragMove),
                e(n).off(t.draggableEvents.end, t.dragEnd)
            },
            set: function() {
              if (x.params.scrollbar) {
                var t = x.scrollbar;
                t.track = e(x.params.scrollbar),
                x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)),
                  t.drag = t.track.find(".swiper-scrollbar-drag"),
                0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                  t.track.append(t.drag)),
                  t.drag[0].style.width = "",
                  t.drag[0].style.height = "",
                  t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
                  t.divider = x.size / x.virtualSize,
                  t.moveDivider = t.divider * (t.trackSize / x.size),
                  t.dragSize = t.trackSize * t.divider,
                  x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px",
                  t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "",
                x.params.scrollbarHide && (t.track[0].style.opacity = 0)
              }
            },
            setTranslate: function() {
              if (x.params.scrollbar) {
                var e, t = x.scrollbar, n = (x.translate,
                  t.dragSize);
                e = (t.trackSize - t.dragSize) * x.progress,
                  x.rtl && x.isHorizontal() ? (e = -e,
                    e > 0 ? (n = t.dragSize - e,
                      e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e,
                    e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                  x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                    t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                    t.drag[0].style.height = n + "px"),
                x.params.scrollbarHide && (clearTimeout(t.timeout),
                  t.track[0].style.opacity = 1,
                  t.timeout = setTimeout(function() {
                    t.track[0].style.opacity = 0,
                      t.track.transition(400)
                  }, 1e3))
              }
            },
            setTransition: function(e) {
              x.params.scrollbar && x.scrollbar.drag.transition(e)
            }
          },
          x.controller = {
            LinearSpline: function(e, t) {
              var n = function() {
                var e, t, n;
                return function(i, a) {
                  for (t = -1,
                         e = i.length; e - t > 1; )
                    i[n = e + t >> 1] <= a ? t = n : e = n;
                  return e
                }
              }();
              this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1;
              var i, a;
              this.x.length,
                this.interpolate = function(e) {
                  return e ? (a = n(this.x, e),
                    i = a - 1,
                  (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
                }
            },
            getInterpolateFunction: function(e) {
              x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid,e.snapGrid))
            },
            setTranslate: function(e, n) {
              function i(t) {
                e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate,
                "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t),
                  r = -x.controller.spline.interpolate(-e)),
                r && "container" !== x.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()),
                  r = (e - x.minTranslate()) * a + t.minTranslate()),
                x.params.controlInverse && (r = t.maxTranslate() - r),
                  t.updateProgress(r),
                  t.setWrapperTranslate(r, !1, x),
                  t.updateActiveIndex()
              }
              var a, r, s = x.params.control;
              if (Array.isArray(s))
                for (var o = 0; o < s.length; o++)
                  s[o] !== n && s[o]instanceof t && i(s[o]);
              else
                s instanceof t && n !== s && i(s)
            },
            setTransition: function(e, n) {
              function i(t) {
                t.setWrapperTransition(e, x),
                0 !== e && (t.onTransitionStart(),
                  t.wrapper.transitionEnd(function() {
                    r && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(),
                      t.onTransitionEnd())
                  }))
              }
              var a, r = x.params.control;
              if (Array.isArray(r))
                for (a = 0; a < r.length; a++)
                  r[a] !== n && r[a]instanceof t && i(r[a]);
              else
                r instanceof t && n !== r && i(r)
            }
          },
          x.hashnav = {
            onHashCange: function(e, t) {
              var n = document.location.hash.replace("#", "");
              n !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + n + '"]').index())
            },
            attachEvents: function(t) {
              var n = t ? "off" : "on";
              e(window)[n]("hashchange", x.hashnav.onHashCange)
            },
            setHash: function() {
              if (x.hashnav.initialized && x.params.hashnav)
                if (x.params.replaceState && window.history && window.history.replaceState)
                  window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                else {
                  var e = x.slides.eq(x.activeIndex)
                    , t = e.attr("data-hash") || e.attr("data-history");
                  document.location.hash = t || ""
                }
            },
            init: function() {
              if (x.params.hashnav && !x.params.history) {
                x.hashnav.initialized = !0;
                var e = document.location.hash.replace("#", "");
                if (e)
                  for (var t = 0, n = x.slides.length; n > t; t++) {
                    var i = x.slides.eq(t)
                      , a = i.attr("data-hash") || i.attr("data-history");
                    if (a === e && !i.hasClass(x.params.slideDuplicateClass)) {
                      var r = i.index();
                      x.slideTo(r, 0, x.params.runCallbacksOnInit, !0)
                    }
                  }
                x.params.hashnavWatchState && x.hashnav.attachEvents()
              }
            },
            destroy: function() {
              x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
            }
          },
          x.history = {
            init: function() {
              if (x.params.history) {
                if (!window.history || !window.history.pushState)
                  return x.params.history = !1,
                    void (x.params.hashnav = !0);
                x.history.initialized = !0,
                  this.paths = this.getPathValues(),
                (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit),
                x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
              }
            },
            setHistoryPopState: function() {
              x.history.paths = x.history.getPathValues(),
                x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
            },
            getPathValues: function() {
              var e = window.location.pathname.slice(1).split("/")
                , t = e.length;
              return {
                key: e[t - 2],
                value: e[t - 1]
              }
            },
            setHistory: function(e, t) {
              if (x.history.initialized && x.params.history) {
                var n = x.slides.eq(t)
                  , i = this.slugify(n.attr("data-history"));
                window.location.pathname.includes(e) || (i = e + "/" + i),
                  x.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
              }
            },
            slugify: function(e) {
              return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
              if (t)
                for (var i = 0, a = x.slides.length; a > i; i++) {
                  var r = x.slides.eq(i)
                    , s = this.slugify(r.attr("data-history"));
                  if (s === t && !r.hasClass(x.params.slideDuplicateClass)) {
                    var o = r.index();
                    x.slideTo(o, e, n)
                  }
                }
              else
                x.slideTo(0, e, n)
            }
          },
          x.disableKeyboardControl = function() {
            x.params.keyboardControl = !1,
              e(document).off("keydown", d)
          }
          ,
          x.enableKeyboardControl = function() {
            x.params.keyboardControl = !0,
              e(document).on("keydown", d)
          }
          ,
          x.mousewheel = {
            event: !1,
            lastScrollTime: (new window.Date).getTime()
          },
        x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
          var e = "onwheel"in document;
          if (!e) {
            var t = document.createElement("div");
            t.setAttribute("onwheel", "return;"),
              e = "function" == typeof t.onwheel
          }
          return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
            e
        }() ? "wheel" : "mousewheel"),
          x.disableMousewheelControl = function() {
            if (!x.mousewheel.event)
              return !1;
            var t = x.container;
            return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
              t.off(x.mousewheel.event, u),
              x.params.mousewheelControl = !1,
              !0
          }
          ,
          x.enableMousewheelControl = function() {
            if (!x.mousewheel.event)
              return !1;
            var t = x.container;
            return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
              t.on(x.mousewheel.event, u),
              x.params.mousewheelControl = !0,
              !0
          }
          ,
          x.parallax = {
            setTranslate: function() {
              x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                c(this, x.progress)
              }),
                x.slides.each(function() {
                  var t = e(this);
                  t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                    c(this, Math.min(Math.max(t[0].progress, -1), 1))
                  })
                })
            },
            setTransition: function(t) {
              void 0 === t && (t = x.params.speed),
                x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                  var n = e(this)
                    , i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                  0 === t && (i = 0),
                    n.transition(i)
                })
            }
          },
          x.zoom = {
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              slide: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              image: void 0,
              imageWrap: void 0,
              zoomMax: x.params.zoomMax
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            },
            getDistanceBetweenTouches: function(e) {
              if (e.targetTouches.length < 2)
                return 1;
              var t = e.targetTouches[0].pageX
                , n = e.targetTouches[0].pageY
                , i = e.targetTouches[1].pageX
                , a = e.targetTouches[1].pageY;
              return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2))
            },
            onGestureStart: function(t) {
              var n = x.zoom;
              if (!x.support.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                  return;
                n.gesture.scaleStart = n.getDistanceBetweenTouches(t)
              }
              return n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = e(this),
              0 === n.gesture.slide.length && (n.gesture.slide = x.slides.eq(x.activeIndex)),
                n.gesture.image = n.gesture.slide.find("img, svg, canvas"),
                n.gesture.imageWrap = n.gesture.image.parent("." + x.params.zoomContainerClass),
                n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax,
              0 !== n.gesture.imageWrap.length) ? (n.gesture.image.transition(0),
                void (n.isScaling = !0)) : void (n.gesture.image = void 0)
            },
            onGestureChange: function(e) {
              var t = x.zoom;
              if (!x.support.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                  return;
                t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
              }
              t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
              t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
              t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)),
                t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
            },
            onGestureEnd: function(e) {
              var t = x.zoom;
              !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin),
                t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                t.currentScale = t.scale,
                t.isScaling = !1,
              1 === t.scale && (t.gesture.slide = void 0))
            },
            onTouchStart: function(e, t) {
              var n = e.zoom;
              n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                n.image.isTouched = !0,
                n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            },
            onTouchMove: function(e) {
              var t = x.zoom;
              if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1,
              t.image.isTouched && t.gesture.slide)) {
                t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                  t.image.height = t.gesture.image[0].offsetHeight,
                  t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                  t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                  t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                  t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                  t.gesture.imageWrap.transition(0),
                x.rtl && (t.image.startX = -t.image.startX),
                x.rtl && (t.image.startY = -t.image.startY));
                var n = t.image.width * t.scale
                  , i = t.image.height * t.scale;
                if (!(n < t.gesture.slideWidth && i < t.gesture.slideHeight)) {
                  if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0),
                    t.image.maxX = -t.image.minX,
                    t.image.minY = Math.min(t.gesture.slideHeight / 2 - i / 2, 0),
                    t.image.maxY = -t.image.minY,
                    t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                  !t.image.isMoved && !t.isScaling) {
                    if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                      return void (t.image.isTouched = !1);
                    if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                      return void (t.image.isTouched = !1)
                  }
                  e.preventDefault(),
                    e.stopPropagation(),
                    t.image.isMoved = !0,
                    t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                    t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                  t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                  t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                  t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                  t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                  t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                  t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                  t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                    t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                    t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                  Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                  Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                    t.velocity.prevPositionX = t.image.touchesCurrent.x,
                    t.velocity.prevPositionY = t.image.touchesCurrent.y,
                    t.velocity.prevTime = Date.now(),
                    t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                }
              }
            },
            onTouchEnd: function(e, t) {
              var n = e.zoom;
              if (n.gesture.image && 0 !== n.gesture.image.length) {
                if (!n.image.isTouched || !n.image.isMoved)
                  return n.image.isTouched = !1,
                    void (n.image.isMoved = !1);
                n.image.isTouched = !1,
                  n.image.isMoved = !1;
                var i = 300
                  , a = 300
                  , r = n.velocity.x * i
                  , s = n.image.currentX + r
                  , o = n.velocity.y * a
                  , l = n.image.currentY + o;
                0 !== n.velocity.x && (i = Math.abs((s - n.image.currentX) / n.velocity.x)),
                0 !== n.velocity.y && (a = Math.abs((l - n.image.currentY) / n.velocity.y));
                var d = Math.max(i, a);
                n.image.currentX = s,
                  n.image.currentY = l;
                var p = n.image.width * n.scale
                  , u = n.image.height * n.scale;
                n.image.minX = Math.min(n.gesture.slideWidth / 2 - p / 2, 0),
                  n.image.maxX = -n.image.minX,
                  n.image.minY = Math.min(n.gesture.slideHeight / 2 - u / 2, 0),
                  n.image.maxY = -n.image.minY,
                  n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX),
                  n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY),
                  n.gesture.imageWrap.transition(d).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)")
              }
            },
            onTransitionEnd: function(e) {
              var t = e.zoom;
              t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                t.scale = t.currentScale = 1)
            },
            toggleZoom: function(t, n) {
              var i = t.zoom;
              if (i.gesture.slide || (i.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                i.gesture.imageWrap = i.gesture.image.parent("." + t.params.zoomContainerClass)),
              i.gesture.image && 0 !== i.gesture.image.length) {
                var a, r, s, o, l, d, p, u, c, h, f, m, g, v, y, w, b, x;
                void 0 === i.image.touchesStart.x && n ? (a = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX,
                  r = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (a = i.image.touchesStart.x,
                  r = i.image.touchesStart.y),
                  i.scale && 1 !== i.scale ? (i.scale = i.currentScale = 1,
                    i.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    i.gesture.slide = void 0) : (i.scale = i.currentScale = i.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                    n ? (b = i.gesture.slide[0].offsetWidth,
                      x = i.gesture.slide[0].offsetHeight,
                      s = i.gesture.slide.offset().left,
                      o = i.gesture.slide.offset().top,
                      l = s + b / 2 - a,
                      d = o + x / 2 - r,
                      c = i.gesture.image[0].offsetWidth,
                      h = i.gesture.image[0].offsetHeight,
                      f = c * i.scale,
                      m = h * i.scale,
                      g = Math.min(b / 2 - f / 2, 0),
                      v = Math.min(x / 2 - m / 2, 0),
                      y = -g,
                      w = -v,
                      p = l * i.scale,
                      u = d * i.scale,
                    g > p && (p = g),
                    p > y && (p = y),
                    v > u && (u = v),
                    u > w && (u = w)) : (p = 0,
                      u = 0),
                    i.gesture.imageWrap.transition(300).transform("translate3d(" + p + "px, " + u + "px,0)"),
                    i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")"))
              }
            },
            attachEvents: function(t) {
              var n = t ? "off" : "on";
              if (x.params.zoom) {
                var i = (x.slides,
                !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                  passive: !0,
                  capture: !1
                });
                x.support.gestures ? (x.slides[n]("gesturestart", x.zoom.onGestureStart, i),
                  x.slides[n]("gesturechange", x.zoom.onGestureChange, i),
                  x.slides[n]("gestureend", x.zoom.onGestureEnd, i)) : "touchstart" === x.touchEvents.start && (x.slides[n](x.touchEvents.start, x.zoom.onGestureStart, i),
                  x.slides[n](x.touchEvents.move, x.zoom.onGestureChange, i),
                  x.slides[n](x.touchEvents.end, x.zoom.onGestureEnd, i)),
                  x[n]("touchStart", x.zoom.onTouchStart),
                  x.slides.each(function(t, i) {
                    e(i).find("." + x.params.zoomContainerClass).length > 0 && e(i)[n](x.touchEvents.move, x.zoom.onTouchMove)
                  }),
                  x[n]("touchEnd", x.zoom.onTouchEnd),
                  x[n]("transitionEnd", x.zoom.onTransitionEnd),
                x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
              }
            },
            init: function() {
              x.zoom.attachEvents()
            },
            destroy: function() {
              x.zoom.attachEvents(!0)
            }
          },
          x._plugins = [];
        for (var _ in x.plugins) {
          var B = x.plugins[_](x, x.params[_]);
          B && x._plugins.push(B)
        }
        return x.callPlugins = function(e) {
          for (var t = 0; t < x._plugins.length; t++)
            e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }
          ,
          x.emitterEventListeners = {},
          x.emit = function(e) {
            x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            var t;
            if (x.emitterEventListeners[e])
              for (t = 0; t < x.emitterEventListeners[e].length; t++)
                x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
          }
          ,
          x.on = function(e, t) {
            return e = h(e),
            x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
              x.emitterEventListeners[e].push(t),
              x
          }
          ,
          x.off = function(e, t) {
            var n;
            if (e = h(e),
            void 0 === t)
              return x.emitterEventListeners[e] = [],
                x;
            if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
              for (n = 0; n < x.emitterEventListeners[e].length; n++)
                x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
              return x
            }
          }
          ,
          x.once = function(e, t) {
            e = h(e);
            var n = function() {
              t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                x.off(e, n)
            };
            return x.on(e, n),
              x
          }
          ,
          x.a11y = {
            makeFocusable: function(e) {
              return e.attr("tabIndex", "0"),
                e
            },
            addRole: function(e, t) {
              return e.attr("role", t),
                e
            },
            addLabel: function(e, t) {
              return e.attr("aria-label", t),
                e
            },
            disable: function(e) {
              return e.attr("aria-disabled", !0),
                e
            },
            enable: function(e) {
              return e.attr("aria-disabled", !1),
                e
            },
            onEnterKey: function(t) {
              13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t),
                x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t),
                x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)),
              e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
            },
            liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
            notify: function(e) {
              var t = x.a11y.liveRegion;
              0 !== t.length && (t.html(""),
                t.html(e))
            },
            init: function() {
              x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton),
                x.a11y.addRole(x.nextButton, "button"),
                x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
              x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton),
                x.a11y.addRole(x.prevButton, "button"),
                x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                e(x.container).append(x.a11y.liveRegion)
            },
            initPagination: function() {
              x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                var t = e(this);
                x.a11y.makeFocusable(t),
                  x.a11y.addRole(t, "button"),
                  x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
              })
            },
            destroy: function() {
              x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
            }
          },
          x.init = function() {
            x.params.loop && x.createLoop(),
              x.updateContainerSize(),
              x.updateSlidesSize(),
              x.updatePagination(),
            x.params.scrollbar && x.scrollbar && (x.scrollbar.set(),
            x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
            "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(),
              x.effects[x.params.effect].setTranslate()),
              x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit),
              0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(),
              x.lazy && x.params.lazyLoading && (x.lazy.load(),
                x.lazy.initialImageLoaded = !0))),
              x.attachEvents(),
            x.params.observer && x.support.observer && x.initObservers(),
            x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
            x.params.zoom && x.zoom && x.zoom.init(),
            x.params.autoplay && x.startAutoplay(),
            x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
            x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
            x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
            x.params.history && x.history && x.history.init(),
            x.params.hashnav && x.hashnav && x.hashnav.init(),
            x.params.a11y && x.a11y && x.a11y.init(),
              x.emit("onInit", x)
          }
          ,
          x.cleanupStyles = function() {
            x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
              x.wrapper.removeAttr("style"),
            x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
            x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
            x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
            x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
            x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
            x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"),
            x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
          }
          ,
          x.destroy = function(e, t) {
            x.detachEvents(),
              x.stopAutoplay(),
            x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
            x.params.loop && x.destroyLoop(),
            t && x.cleanupStyles(),
              x.disconnectObservers(),
            x.params.zoom && x.zoom && x.zoom.destroy(),
            x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
            x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
            x.params.a11y && x.a11y && x.a11y.destroy(),
            x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
            x.params.hashnav && x.hashnav && x.hashnav.destroy(),
              x.emit("onDestroy"),
            e !== !1 && (x = null)
          }
          ,
          x.init(),
          x
      }
    };
    t.prototype = {
      isSafari: function() {
        var e = window.navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
      }(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
      isArray: function(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
      },
      browser: {
        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
        lteIE9: function() {
          var e = document.createElement("div");
          return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
          1 === e.getElementsByTagName("i").length
        }()
      },
      device: function() {
        var e = window.navigator.userAgent
          , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , n = e.match(/(iPad).*OS\s([\d_]+)/)
          , i = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , a = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        return {
          ios: n || a || i,
          android: t
        }
      }(),
      support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function() {
          return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
          var e = document.createElement("div").style;
          return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
        }(),
        flexbox: function() {
          for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
            if (t[n]in e)
              return !0
        }(),
        observer: function() {
          return "MutationObserver"in window || "WebkitMutationObserver"in window
        }(),
        passiveListener: function() {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function() {
                e = !0
              }
            });
            window.addEventListener("testPassiveListener", null, t)
          } catch (e) {}
          return e
        }(),
        gestures: function() {
          return "ongesturestart"in window
        }()
      },
      plugins: {}
    };
    for (var n = (function() {
      var e = function(e) {
        var t = this
          , n = 0;
        for (n = 0; n < e.length; n++)
          t[n] = e[n];
        return t.length = e.length,
          this
      }
        , t = function(t, n) {
        var i = []
          , a = 0;
        if (t && !n && t instanceof e)
          return t;
        if (t)
          if ("string" == typeof t) {
            var r, s, o = t.trim();
            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
              var l = "div";
              for (0 === o.indexOf("<li") && (l = "ul"),
                   0 === o.indexOf("<tr") && (l = "tbody"),
                   0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                   0 === o.indexOf("<tbody") && (l = "table"),
                   0 === o.indexOf("<option") && (l = "select"),
                     s = document.createElement(l),
                     s.innerHTML = t,
                     a = 0; a < s.childNodes.length; a++)
                i.push(s.childNodes[a])
            } else
              for (r = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])],
                     a = 0; a < r.length; a++)
                r[a] && i.push(r[a])
          } else if (t.nodeType || t === window || t === document)
            i.push(t);
          else if (t.length > 0 && t[0].nodeType)
            for (a = 0; a < t.length; a++)
              i.push(t[a]);
        return new e(i)
      };
      return e.prototype = {
        addClass: function(e) {
          if (void 0 === e)
            return this;
          for (var t = e.split(" "), n = 0; n < t.length; n++)
            for (var i = 0; i < this.length; i++)
              this[i].classList.add(t[n]);
          return this
        },
        removeClass: function(e) {
          for (var t = e.split(" "), n = 0; n < t.length; n++)
            for (var i = 0; i < this.length; i++)
              this[i].classList.remove(t[n]);
          return this
        },
        hasClass: function(e) {
          return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
          for (var t = e.split(" "), n = 0; n < t.length; n++)
            for (var i = 0; i < this.length; i++)
              this[i].classList.toggle(t[n]);
          return this
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n++)
            if (2 === arguments.length)
              this[n].setAttribute(e, t);
            else
              for (var i in e)
                this[n][i] = e[i],
                  this[n].setAttribute(i, e[i]);
          return this
        },
        removeAttr: function(e) {
          for (var t = 0; t < this.length; t++)
            this[t].removeAttribute(e);
          return this
        },
        data: function(e, t) {
          if (void 0 !== t) {
            for (var n = 0; n < this.length; n++) {
              var i = this[n];
              i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                i.dom7ElementDataStorage[e] = t
            }
            return this
          }
          if (this[0]) {
            var a = this[0].getAttribute("data-" + e);
            return a ? a : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
          }
        },
        transform: function(e) {
          for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
          }
          return this
        },
        transition: function(e) {
          "string" != typeof e && (e += "ms");
          for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
          }
          return this
        },
        on: function(e, n, i, a) {
          function r(e) {
            var a = e.target;
            if (t(a).is(n))
              i.call(a, e);
            else
              for (var r = t(a).parents(), s = 0; s < r.length; s++)
                t(r[s]).is(n) && i.call(r[s], e)
          }
          var s, o, l = e.split(" ");
          for (s = 0; s < this.length; s++)
            if ("function" == typeof n || n === !1)
              for ("function" == typeof n && (i = arguments[1],
                a = arguments[2] || !1),
                     o = 0; o < l.length; o++)
                this[s].addEventListener(l[o], i, a);
            else
              for (o = 0; o < l.length; o++)
                this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []),
                  this[s].dom7LiveListeners.push({
                    listener: i,
                    liveListener: r
                  }),
                  this[s].addEventListener(l[o], r, a);
          return this
        },
        off: function(e, t, n, i) {
          for (var a = e.split(" "), r = 0; r < a.length; r++)
            for (var s = 0; s < this.length; s++)
              if ("function" == typeof t || t === !1)
                "function" == typeof t && (n = arguments[1],
                  i = arguments[2] || !1),
                  this[s].removeEventListener(a[r], n, i);
              else if (this[s].dom7LiveListeners)
                for (var o = 0; o < this[s].dom7LiveListeners.length; o++)
                  this[s].dom7LiveListeners[o].listener === n && this[s].removeEventListener(a[r], this[s].dom7LiveListeners[o].liveListener, i);
          return this
        },
        once: function(e, t, n, i) {
          function a(s) {
            n(s),
              r.off(e, t, a, i)
          }
          var r = this;
          "function" == typeof t && (t = !1,
            n = arguments[1],
            i = arguments[2]),
            r.on(e, t, a, i)
        },
        trigger: function(e, t) {
          for (var n = 0; n < this.length; n++) {
            var i;
            try {
              i = new window.CustomEvent(e,{
                detail: t,
                bubbles: !0,
                cancelable: !0
              })
            } catch (n) {
              i = document.createEvent("Event"),
                i.initEvent(e, !0, !0),
                i.detail = t
            }
            this[n].dispatchEvent(i)
          }
          return this
        },
        transitionEnd: function(e) {
          function t(r) {
            if (r.target === this)
              for (e.call(this, r),
                     n = 0; n < i.length; n++)
                a.off(i[n], t)
          }
          var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = this;
          if (e)
            for (n = 0; n < i.length; n++)
              a.on(i[n], t);
          return this
        },
        width: function() {
          return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
        },
        outerWidth: function(e) {
          return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        },
        height: function() {
          return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
        },
        outerHeight: function(e) {
          return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
        },
        offset: function() {
          if (this.length > 0) {
            var e = this[0]
              , t = e.getBoundingClientRect()
              , n = document.body
              , i = e.clientTop || n.clientTop || 0
              , a = e.clientLeft || n.clientLeft || 0
              , r = window.pageYOffset || e.scrollTop
              , s = window.pageXOffset || e.scrollLeft;
            return {
              top: t.top + r - i,
              left: t.left + s - a
            }
          }
          return null
        },
        css: function(e, t) {
          var n;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (n = 0; n < this.length; n++)
                for (var i in e)
                  this[n].style[i] = e[i];
              return this
            }
            if (this[0])
              return window.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (n = 0; n < this.length; n++)
              this[n].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          for (var t = 0; t < this.length; t++)
            e.call(this[t], t, this[t]);
          return this
        },
        html: function(e) {
          if (void 0 === e)
            return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t++)
            this[t].innerHTML = e;
          return this
        },
        text: function(e) {
          if (void 0 === e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t++)
            this[t].textContent = e;
          return this
        },
        is: function(n) {
          if (!this[0])
            return !1;
          var i, a;
          if ("string" == typeof n) {
            var r = this[0];
            if (r === document)
              return n === document;
            if (r === window)
              return n === window;
            if (r.matches)
              return r.matches(n);
            if (r.webkitMatchesSelector)
              return r.webkitMatchesSelector(n);
            if (r.mozMatchesSelector)
              return r.mozMatchesSelector(n);
            if (r.msMatchesSelector)
              return r.msMatchesSelector(n);
            for (i = t(n),
                   a = 0; a < i.length; a++)
              if (i[a] === this[0])
                return !0;
            return !1
          }
          if (n === document)
            return this[0] === document;
          if (n === window)
            return this[0] === window;
          if (n.nodeType || n instanceof e) {
            for (i = n.nodeType ? [n] : n,
                   a = 0; a < i.length; a++)
              if (i[a] === this[0])
                return !0;
            return !1
          }
          return !1
        },
        index: function() {
          if (this[0]) {
            for (var e = this[0], t = 0; null !== (e = e.previousSibling); )
              1 === e.nodeType && t++;
            return t
          }
        },
        eq: function(t) {
          if (void 0 === t)
            return this;
          var n, i = this.length;
          return t > i - 1 ? new e([]) : 0 > t ? (n = i + t,
            new e(0 > n ? [] : [this[n]])) : new e([this[t]])
        },
        append: function(t) {
          var n, i;
          for (n = 0; n < this.length; n++)
            if ("string" == typeof t) {
              var a = document.createElement("div");
              for (a.innerHTML = t; a.firstChild; )
                this[n].appendChild(a.firstChild)
            } else if (t instanceof e)
              for (i = 0; i < t.length; i++)
                this[n].appendChild(t[i]);
            else
              this[n].appendChild(t);
          return this
        },
        prepend: function(t) {
          var n, i;
          for (n = 0; n < this.length; n++)
            if ("string" == typeof t) {
              var a = document.createElement("div");
              for (a.innerHTML = t,
                     i = a.childNodes.length - 1; i >= 0; i--)
                this[n].insertBefore(a.childNodes[i], this[n].childNodes[0])
            } else if (t instanceof e)
              for (i = 0; i < t.length; i++)
                this[n].insertBefore(t[i], this[n].childNodes[0]);
            else
              this[n].insertBefore(t, this[n].childNodes[0]);
          return this
        },
        insertBefore: function(e) {
          for (var n = t(e), i = 0; i < this.length; i++)
            if (1 === n.length)
              n[0].parentNode.insertBefore(this[i], n[0]);
            else if (n.length > 1)
              for (var a = 0; a < n.length; a++)
                n[a].parentNode.insertBefore(this[i].cloneNode(!0), n[a])
        },
        insertAfter: function(e) {
          for (var n = t(e), i = 0; i < this.length; i++)
            if (1 === n.length)
              n[0].parentNode.insertBefore(this[i], n[0].nextSibling);
            else if (n.length > 1)
              for (var a = 0; a < n.length; a++)
                n[a].parentNode.insertBefore(this[i].cloneNode(!0), n[a].nextSibling)
        },
        next: function(n) {
          return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function(n) {
          var i = []
            , a = this[0];
          if (!a)
            return new e([]);
          for (; a.nextElementSibling; ) {
            var r = a.nextElementSibling;
            n ? t(r).is(n) && i.push(r) : i.push(r),
              a = r
          }
          return new e(i)
        },
        prev: function(n) {
          return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
        },
        prevAll: function(n) {
          var i = []
            , a = this[0];
          if (!a)
            return new e([]);
          for (; a.previousElementSibling; ) {
            var r = a.previousElementSibling;
            n ? t(r).is(n) && i.push(r) : i.push(r),
              a = r
          }
          return new e(i)
        },
        parent: function(e) {
          for (var n = [], i = 0; i < this.length; i++)
            e ? t(this[i].parentNode).is(e) && n.push(this[i].parentNode) : n.push(this[i].parentNode);
          return t(t.unique(n))
        },
        parents: function(e) {
          for (var n = [], i = 0; i < this.length; i++)
            for (var a = this[i].parentNode; a; )
              e ? t(a).is(e) && n.push(a) : n.push(a),
                a = a.parentNode;
          return t(t.unique(n))
        },
        find: function(t) {
          for (var n = [], i = 0; i < this.length; i++)
            for (var a = this[i].querySelectorAll(t), r = 0; r < a.length; r++)
              n.push(a[r]);
          return new e(n)
        },
        children: function(n) {
          for (var i = [], a = 0; a < this.length; a++)
            for (var r = this[a].childNodes, s = 0; s < r.length; s++)
              n ? 1 === r[s].nodeType && t(r[s]).is(n) && i.push(r[s]) : 1 === r[s].nodeType && i.push(r[s]);
          return new e(t.unique(i))
        },
        remove: function() {
          for (var e = 0; e < this.length; e++)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        },
        add: function() {
          var e, n, i = this;
          for (e = 0; e < arguments.length; e++) {
            var a = t(arguments[e]);
            for (n = 0; n < a.length; n++)
              i[i.length] = a[n],
                i.length++
          }
          return i
        }
      },
        t.fn = e.prototype,
        t.unique = function(e) {
          for (var t = [], n = 0; n < e.length; n++)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }
        ,
        t
    }()), i = ["jQuery", "Zepto", "Dom7"], a = 0; a < i.length; a++)
      window[i[a]] && function(e) {
        e.fn.swiper = function(n) {
          var i;
          return e(this).each(function() {
            var e = new t(this,n);
            i || (i = e)
          }),
            i
        }
      }(window[i[a]]);
    var r;
    r = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n,
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(e) {
        function t(r) {
          if (r.target === this)
            for (e.call(this, r),
                   n = 0; n < i.length; n++)
              a.off(i[n], t)
        }
        var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = this;
        if (e)
          for (n = 0; n < i.length; n++)
            a.on(i[n], t);
        return this
      }
    ),
    "transform"in r.fn || (r.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
          var n = this[t].style;
          n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
        }
        return this
      }
    ),
    "transition"in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
          var n = this[t].style;
          n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
        }
        return this
      }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
      }
    )),
      window.Swiper = t
  }(),
  "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
  }),
  function() {
    $(function() {
      var e, t, n, i, a, r;
      return e = $(".js-header-menu"),
        a = 0,
        i = function() {
          var e;
          return e = 0,
            $(window).scroll(function() {
              var t;
              return t = $(this).scrollTop(),
                t > e ? $(".img_menu").css("opacity", "0") : $(".img_menu").css("opacity", "1"),
                e = t
            })
        }
        ,
        r = function(e) {
          return $(".js-header-menu-button").css({
            "pointer-events": "none"
          }),
            a = $(window).scrollTop(),
            $(".l-header__logo.l-header__logo__image").css("opacity", "0"),
            $(".l-header__menu").addClass("mobile-popup"),
            $(".img_menu").css("opacity", "1"),
            $(e.currentTarget).removeClass("close").addClass("open"),
            setTimeout(function() {
              return $("body").css({
                overflow: "hidden",
                position: "fixed",
                top: -a
              })
            }, 700),
            setTimeout(function() {
              return $(".js-header-menu-button").css({
                "pointer-events": "auto"
              })
            }, 1600)
        }
        ,
        t = function(t) {
          return $(".js-header-menu-button").css({
            "pointer-events": "none"
          }),
            $(".l-header__logo.l-header__logo__image").css("opacity", "1"),
            e.find(".js-header-menu-button").removeClass("open").addClass("close"),
            $("body").css({
              overflow: "",
              position: "",
              top: ""
            }),
            $(window).scrollTop(a),
            setTimeout(function() {
              return $(".l-header__menu").removeClass("mobile-popup")
            }, 700),
            setTimeout(function() {
              return $(".js-header-menu-button").css({
                "pointer-events": "auto"
              })
            }, 1600)
        }
        ,
        n = function(e) {
          return $(".current").removeClass("current"),
            $(e.currentTarget).addClass("current")
        }
        ,
        e.on("click", ".js-header-menu-button.close", r),
        e.on("click", ".js-header-menu-button.open", t),
        e.on("click", ".js-scroll-to", t),
        e.on("click", ".js-landing-link", n),
        i()
    })
  }
    .call(this),
  function() {
    $(function() {
      var e;
      return $(".b-welcome__next").click(function() {
        $("body").scrollTo("#blockchain_description", 1e3)
      }),
        $(".js-scroll-to.contacts").click(function() {
          $("body").scrollTo(".footer_contects", 1500)
        }),
        e = new Swiper(".swiper-container",{
          pagination: ".swiper-pagination",
          autoplay: 5e3,
          speed: 500,
          simulateTouch: !0,
          slideToClickedSlide: !0,
          paginationClickable: !0
        })
    })
  }
    .call(this);
