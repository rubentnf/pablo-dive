function ei(t) {
	if (void 0 === t)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return t;
}
function qo(t, e) {
	(t.prototype = Object.create(e.prototype)),
		(t.prototype.constructor = t),
		(t.__proto__ = e);
}
var As,
	Nt,
	at,
	ft,
	He,
	fs,
	Fs,
	Jo,
	ea,
	ar,
	Jr,
	Te = {
		autoSleep: 120,
		force3D: "auto",
		nullTargetWarn: 1,
		units: { lineHeight: "" },
	},
	pr = { duration: 0.5, overwrite: !1, delay: 0 },
	Me = 1e8,
	it = 1 / Me,
	us = 2 * Math.PI,
	yl = us / 4,
	wl = 0,
	Go = Math.sqrt,
	xl = Math.cos,
	Sl = Math.sin,
	Rt = function (t) {
		return "string" == typeof t;
	},
	pt = function (t) {
		return "function" == typeof t;
	},
	oi = function (t) {
		return "number" == typeof t;
	},
	zs = function (t) {
		return typeof t > "u";
	},
	Ke = function (t) {
		return "object" == typeof t;
	},
	ae = function (t) {
		return !1 !== t;
	},
	Ls = function () {
		return typeof window < "u";
	},
	un = function (t) {
		return pt(t) || Rt(t);
	},
	Ko =
		("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
		function () {},
	qt = Array.isArray,
	Tl = /random\([^)]+\)/g,
	bl = /,\s*/g,
	ao = /(?:-?\.?\d|\.)+/gi,
	Qo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	or = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	qn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Zo = /[+-]=-?[.\d]+/,
	Cl = /[^,'"\[\]\s]+/gi,
	kl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	be = {},
	Dn = {},
	jo = function (t) {
		return (Dn = gr(t, be)) && he;
	},
	Ns = function (t, e) {
		return console.warn(
			"Invalid property",
			t,
			"set to",
			e,
			"Missing plugin? gsap.registerPlugin()",
		);
	},
	Kr = function (t, e) {
		return !e && console.warn(t);
	},
	ta = function (t, e) {
		return (t && (be[t] = e) && Dn && (Dn[t] = e)) || be;
	},
	Qr = function () {
		return 0;
	},
	Pl = { suppressEvents: !0, isStart: !0, kill: !1 },
	Sn = { suppressEvents: !0, kill: !1 },
	El = { suppressEvents: !0 },
	Is = {},
	xi = [],
	hs = {},
	me = {},
	Gn = {},
	lo = 30,
	Tn = [],
	Ys = "",
	Ws = function (t) {
		var e,
			r,
			i = t[0];
		if ((Ke(i) || pt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
			for (r = Tn.length; r-- && !Tn[r].targetTest(i); );
			e = Tn[r];
		}
		for (r = t.length; r--; )
			(t[r] && (t[r]._gsap || (t[r]._gsap = new Ca(t[r], e)))) ||
				t.splice(r, 1);
		return t;
	},
	Xi = function (t) {
		return t._gsap || Ws(De(t))[0]._gsap;
	},
	ia = function (t, e, r) {
		return (r = t[e]) && pt(r)
			? t[e]()
			: (zs(r) && t.getAttribute && t.getAttribute(e)) || r;
	},
	le = function (t, e) {
		return (t = t.split(",")).forEach(e) || t;
	},
	yt = function (t) {
		return Math.round(1e5 * t) / 1e5 || 0;
	},
	ut = function (t) {
		return Math.round(1e7 * t) / 1e7 || 0;
	},
	ur = function (t, e) {
		var r = e.charAt(0),
			i = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			"+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
		);
	},
	Ol = function (t, e) {
		for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
		return i < r;
	},
	Rn = function () {
		var t,
			e,
			r = xi.length,
			i = xi.slice(0);
		for (hs = {}, xi.length = 0, t = 0; t < r; t++)
			(e = i[t]) &&
				e._lazy &&
				(e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
	},
	Xs = function (t) {
		return !!(t._initted || t._startAt || t.add);
	},
	ra = function (t, e, r, i) {
		xi.length && !Nt && Rn(),
			t.render(e, r, !!(Nt && e < 0 && Xs(t))),
			xi.length && !Nt && Rn();
	},
	na = function (t) {
		var e = parseFloat(t);
		return (e || 0 === e) && (t + "").match(Cl).length < 2
			? e
			: Rt(t)
				? t.trim()
				: t;
	},
	sa = function (t) {
		return t;
	},
	Ce = function (t, e) {
		for (var r in e) r in t || (t[r] = e[r]);
		return t;
	},
	Ml = function (t) {
		return function (e, r) {
			for (var i in r)
				i in e ||
					("duration" === i && t) ||
					"ease" === i ||
					(e[i] = r[i]);
		};
	},
	gr = function (t, e) {
		for (var r in e) t[r] = e[r];
		return t;
	},
	uo = function t(e, r) {
		for (var i in r)
			"__proto__" !== i &&
				"constructor" !== i &&
				"prototype" !== i &&
				(e[i] = Ke(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
		return e;
	},
	An = function (t, e) {
		var r,
			i = {};
		for (r in t) r in e || (i[r] = t[r]);
		return i;
	},
	Fr = function (t) {
		var e = t.parent || ft,
			r = t.keyframes ? Ml(qt(t.keyframes)) : Ce;
		if (ae(t.inherit))
			for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Dl = function (t, e) {
		for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
		return r < 0;
	},
	oa = function (t, e, r, i, n) {
		var s,
			o = t[i];
		if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
		return (
			o
				? ((e._next = o._next), (o._next = e))
				: ((e._next = t[r]), (t[r] = e)),
			e._next ? (e._next._prev = e) : (t[i] = e),
			(e._prev = o),
			(e.parent = e._dp = t),
			e
		);
	},
	Bn = function (t, e, r, i) {
		void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
		var n = e._prev,
			s = e._next;
		n ? (n._next = s) : t[r] === e && (t[r] = s),
			s ? (s._prev = n) : t[i] === e && (t[i] = n),
			(e._next = e._prev = e.parent = null);
	},
	bi = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Bi = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
		return t;
	},
	Rl = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	cs = function (t, e, r, i) {
		return (
			t._startAt &&
			(Nt
				? t._startAt.revert(Sn)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
					t._startAt.render(e, !0, i))
		);
	},
	Al = function t(e) {
		return !e || (e._ts && t(e.parent));
	},
	fo = function (t) {
		return t._repeat ? mr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	mr = function (t, e) {
		var r = Math.floor((t = ut(t / e)));
		return t && r === t ? r - 1 : r;
	},
	zn = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	Hn = function (t) {
		return (t._end = ut(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || it) || 0),
		));
	},
	Vn = function (t, e) {
		var r = t._dp;
		return (
			r &&
				r.smoothChildTiming &&
				t._ts &&
				((t._start = ut(
					r._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) /
								-t._ts),
				)),
				Hn(t),
				r._dirty || Bi(r, t)),
			t
		);
	},
	aa = function (t, e) {
		var r;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((r = zn(t.rawTime(), e)),
				(!e._dur || sn(0, e.totalDuration(), r) - e._tTime > it) &&
					e.render(r, !0)),
			Bi(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (r = t; r._dp; )
					r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
			t._zTime = -it;
		}
	},
	Ue = function (t, e, r, i) {
		return (
			e.parent && bi(e),
			(e._start = ut(
				(oi(r) ? r : r || t !== ft ? Pe(t, r, e) : t._time) + e._delay,
			)),
			(e._end = ut(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
			)),
			oa(t, e, "_first", "_last", t._sort ? "_start" : 0),
			ds(e) || (t._recent = e),
			i || aa(t, e),
			t._ts < 0 && Vn(t, t._tTime),
			t
		);
	},
	la = function (t, e) {
		return (
			(be.ScrollTrigger || Ns("scrollTrigger", e)) &&
			be.ScrollTrigger.create(e, t)
		);
	},
	ua = function (t, e, r, i, n) {
		return (
			Hs(t, e, n),
			t._initted
				? !r &&
					t._pt &&
					!Nt &&
					((t._dur && !1 !== t.vars.lazy) ||
						(!t._dur && t.vars.lazy)) &&
					ea !== ye.frame
					? (xi.push(t), (t._lazy = [n, i]), 1)
					: void 0
				: 1
		);
	},
	zl = function t(e) {
		var r = e.parent;
		return (
			r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
		);
	},
	ds = function (t) {
		var e = t.data;
		return "isFromStart" === e || "isStart" === e;
	},
	Ll = function (t, e, r, i) {
		var n,
			s,
			o,
			a = t.ratio,
			l =
				e < 0 ||
				(!e &&
					((!t._start && zl(t) && (t._initted || !ds(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !ds(t))))
					? 0
					: 1,
			u = t._rDelay,
			h = 0;
		if (
			(u &&
				t._repeat &&
				((h = sn(0, t._tDur, e)),
				(s = mr(h, u)),
				t._yoyo && 1 & s && (l = 1 - l),
				s !== mr(t._tTime, u) &&
					((a = 1 - l),
					t.vars.repeatRefresh && t._initted && t.invalidate())),
			l !== a || Nt || i || t._zTime === it || (!e && t._zTime))
		) {
			if (!t._initted && ua(t, e, i, r, h)) return;
			for (
				o = t._zTime,
					t._zTime = e || (r ? it : 0),
					r || (r = e && !o),
					t.ratio = l,
					t._from && (l = 1 - l),
					t._time = 0,
					t._tTime = h,
					n = t._pt;
				n;
			)
				n.r(l, n.d), (n = n._next);
			e < 0 && cs(t, e, r, !0),
				t._onUpdate && !r && xe(t, "onUpdate"),
				h && t._repeat && !r && t.parent && xe(t, "onRepeat"),
				(e >= t._tDur || e < 0) &&
					t.ratio === l &&
					(l && bi(t, 1),
					!r &&
						!Nt &&
						(xe(t, l ? "onComplete" : "onReverseComplete", !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	Fl = function (t, e, r) {
		var i;
		if (r > e)
			for (i = t._first; i && i._start <= r; ) {
				if ("isPause" === i.data && i._start > e) return i;
				i = i._next;
			}
		else
			for (i = t._last; i && i._start >= r; ) {
				if ("isPause" === i.data && i._start < e) return i;
				i = i._prev;
			}
	},
	vr = function (t, e, r, i) {
		var n = t._repeat,
			s = ut(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !i && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = n
				? n < 0
					? 1e10
					: ut(s * (n + 1) + t._rDelay * n)
				: s),
			o > 0 && !i && Vn(t, (t._tTime = t._tDur * o)),
			t.parent && Hn(t),
			r || Bi(t.parent, t),
			t
		);
	},
	ho = function (t) {
		return t instanceof re ? Bi(t) : vr(t, t._dur);
	},
	Nl = { _start: 0, endTime: Qr, totalDuration: Qr },
	Pe = function t(e, r, i) {
		var n,
			s,
			o,
			a = e.labels,
			l = e._recent || Nl,
			u = e.duration() >= Me ? l.endTime(!1) : e._dur;
		return Rt(r) && (isNaN(r) || r in a)
			? ((s = r.charAt(0)),
				(o = "%" === r.substr(-1)),
				(n = r.indexOf("=")),
				"<" === s || ">" === s
					? (n >= 0 && (r = r.replace(/=/, "")),
						("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
							(parseFloat(r.substr(1)) || 0) *
								(o ? (n < 0 ? l : i).totalDuration() / 100 : 1))
					: n < 0
						? (r in a || (a[r] = u), a[r])
						: ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
							o &&
								i &&
								(s =
									(s / 100) *
									(qt(i) ? i[0] : i).totalDuration()),
							n > 1 ? t(e, r.substr(0, n - 1), i) + s : u + s))
			: null == r
				? u
				: +r;
	},
	Nr = function (t, e, r) {
		var i,
			n,
			s = oi(e[1]),
			o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
			a = e[o];
		if ((s && (a.duration = e[1]), (a.parent = r), t)) {
			for (i = a, n = r; n && !("immediateRender" in i); )
				(i = n.vars.defaults || {}),
					(n = ae(n.vars.inherit) && n.parent);
			(a.immediateRender = ae(i.immediateRender)),
				t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
		}
		return new bt(e[0], a, e[o + 1]);
	},
	Ei = function (t, e) {
		return t || 0 === t ? e(t) : e;
	},
	sn = function (t, e, r) {
		return r < t ? t : r > e ? e : r;
	},
	Ut = function (t, e) {
		return Rt(t) && (e = kl.exec(t)) ? e[1] : "";
	},
	Il = function (t, e, r) {
		return Ei(r, function (r) {
			return sn(t, e, r);
		});
	},
	_s = [].slice,
	fa = function (t, e) {
		return (
			t &&
			Ke(t) &&
			"length" in t &&
			((!e && !t.length) || (t.length - 1 in t && Ke(t[0]))) &&
			!t.nodeType &&
			t !== He
		);
	},
	Yl = function (t, e, r) {
		return (
			void 0 === r && (r = []),
			t.forEach(function (t) {
				var i;
				return (Rt(t) && !e) || fa(t, 1)
					? (i = r).push.apply(i, De(t))
					: r.push(t);
			}) || r
		);
	},
	De = function (t, e, r) {
		return at && !e && at.selector
			? at.selector(t)
			: !Rt(t) || r || (!fs && yr())
				? qt(t)
					? Yl(t, r)
					: fa(t)
						? _s.call(t, 0)
						: t
							? [t]
							: []
				: _s.call((e || Fs).querySelectorAll(t), 0);
	},
	ps = function (t) {
		return (
			(t = De(t)[0] || Kr("Invalid scope") || {}),
			function (e) {
				var r = t.current || t.nativeElement || t;
				return De(
					e,
					r.querySelectorAll
						? r
						: r === t
							? Kr("Invalid scope") || Fs.createElement("div")
							: t,
				);
			}
		);
	},
	ha = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	ca = function (t) {
		if (pt(t)) return t;
		var e = Ke(t) ? t : { each: t },
			r = Hi(e.ease),
			i = e.from || 0,
			n = parseFloat(e.base) || 0,
			s = {},
			o = i > 0 && i < 1,
			a = isNaN(i) || o,
			l = e.axis,
			u = i,
			h = i;
		return (
			Rt(i)
				? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !o && a && ((u = i[0]), (h = i[1])),
			function (t, o, c) {
				var f,
					p,
					d,
					m,
					g,
					v,
					_,
					y,
					w,
					b = (c || e).length,
					x = s[b];
				if (!x) {
					if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Me])[1])) {
						for (
							_ = -Me;
							_ < (_ = c[w++].getBoundingClientRect().left) &&
							w < b;
						);
						w < b && w--;
					}
					for (
						x = s[b] = [],
							f = a ? Math.min(w, b) * u - 0.5 : i % w,
							p =
								w === Me
									? 0
									: a
										? (b * h) / w - 0.5
										: (i / w) | 0,
							_ = 0,
							y = Me,
							v = 0;
						v < b;
						v++
					)
						(d = (v % w) - f),
							(m = p - ((v / w) | 0)),
							(x[v] = g =
								l
									? Math.abs("y" === l ? m : d)
									: Go(d * d + m * m)),
							g > _ && (_ = g),
							g < y && (y = g);
					"random" === i && ha(x),
						(x.max = _ - y),
						(x.min = y),
						(x.v = b =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(w > b
										? b - 1
										: l
											? "y" === l
												? b / w
												: w
											: Math.max(w, b / w)) ||
								0) * ("edges" === i ? -1 : 1)),
						(x.b = b < 0 ? n - b : n),
						(x.u = Ut(e.amount || e.each) || 0),
						(r = r && b < 0 ? Sa(r) : r);
				}
				return (
					(b = (x[t] - x.min) / x.max || 0),
					ut(x.b + (r ? r(b) : b) * x.v) + x.u
				);
			}
		);
	},
	gs = function (t) {
		var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
		return function (r) {
			var i = ut(Math.round(parseFloat(r) / t) * t * e);
			return (i - (i % 1)) / e + (oi(r) ? 0 : Ut(r));
		};
	},
	da = function (t, e) {
		var r,
			i,
			n = qt(t);
		return (
			!n &&
				Ke(t) &&
				((r = n = t.radius || Me),
				t.values
					? ((t = De(t.values)), (i = !oi(t[0])) && (r *= r))
					: (t = gs(t.increment))),
			Ei(
				e,
				n
					? pt(t)
						? function (e) {
								return (i = t(e)), Math.abs(i - e) <= r ? i : e;
							}
						: function (e) {
								for (
									var n,
										s,
										o = parseFloat(i ? e.x : e),
										a = parseFloat(i ? e.y : 0),
										l = Me,
										u = 0,
										h = t.length;
									h--;
								)
									i
										? (n =
												(n = t[h].x - o) * n +
												(s = t[h].y - a) * s)
										: (n = Math.abs(t[h] - o)),
										n < l && ((l = n), (u = h));
								return (
									(u = !r || l <= r ? t[u] : e),
									i || u === e || oi(e) ? u : u + Ut(e)
								);
							}
					: gs(t),
			)
		);
	},
	_a = function (t, e, r, i) {
		return Ei(qt(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
			return qt(t)
				? t[~~(Math.random() * t.length)]
				: (r = r || 1e-5) &&
						(i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
						Math.floor(
							Math.round(
								(t -
									r / 2 +
									Math.random() * (e - t + 0.99 * r)) /
									r,
							) *
								r *
								i,
						) / i;
		});
	},
	Wl = function () {
		for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
			e[r] = arguments[r];
		return function (t) {
			return e.reduce(function (t, e) {
				return e(t);
			}, t);
		};
	},
	Xl = function (t, e) {
		return function (r) {
			return t(parseFloat(r)) + (e || Ut(r));
		};
	},
	Bl = function (t, e, r) {
		return ga(t, e, 0, 1, r);
	},
	pa = function (t, e, r) {
		return Ei(r, function (r) {
			return t[~~e(r)];
		});
	},
	Hl = function t(e, r, i) {
		var n = r - e;
		return qt(e)
			? pa(e, t(0, e.length), r)
			: Ei(i, function (t) {
					return ((n + ((t - e) % n)) % n) + e;
				});
	},
	Vl = function t(e, r, i) {
		var n = r - e,
			s = 2 * n;
		return qt(e)
			? pa(e, t(0, e.length - 1), r)
			: Ei(i, function (t) {
					return (
						e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
					);
				});
	},
	Zr = function (t) {
		return t.replace(Tl, function (t) {
			var e = t.indexOf("[") + 1,
				r = t
					.substring(e || 7, e ? t.indexOf("]") : t.length - 1)
					.split(bl);
			return _a(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
		});
	},
	ga = function (t, e, r, i, n) {
		var s = e - t,
			o = i - r;
		return Ei(n, function (e) {
			return r + (((e - t) / s) * o || 0);
		});
	},
	Ul = function t(e, r, i, n) {
		var s = isNaN(e + r)
			? 0
			: function (t) {
					return (1 - t) * e + t * r;
				};
		if (!s) {
			var o,
				a,
				l,
				u,
				h,
				c = Rt(e),
				f = {};
			if ((!0 === i && (n = 1) && (i = null), c))
				(e = { p: e }), (r = { p: r });
			else if (qt(e) && !qt(r)) {
				for (l = [], u = e.length, h = u - 2, a = 1; a < u; a++)
					l.push(t(e[a - 1], e[a]));
				u--,
					(s = function (t) {
						t *= u;
						var e = Math.min(h, ~~t);
						return l[e](t - e);
					}),
					(i = r);
			} else n || (e = gr(qt(e) ? [] : {}, e));
			if (!l) {
				for (o in r) Bs.call(f, e, o, "get", r[o]);
				s = function (t) {
					return $s(t, f) || (c ? e.p : e);
				};
			}
		}
		return Ei(i, s);
	},
	co = function (t, e, r) {
		var i,
			n,
			s,
			o = t.labels,
			a = Me;
		for (i in o)
			(n = o[i] - e) < 0 == !!r &&
				n &&
				a > (n = Math.abs(n)) &&
				((s = i), (a = n));
		return s;
	},
	xe = function (t, e, r) {
		var i,
			n,
			s,
			o = t.vars,
			a = o[e],
			l = at,
			u = t._ctx;
		if (a)
			return (
				(i = o[e + "Params"]),
				(n = o.callbackScope || t),
				r && xi.length && Rn(),
				u && (at = u),
				(s = i ? a.apply(n, i) : a.call(n)),
				(at = l),
				s
			);
	},
	Or = function (t) {
		return (
			bi(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!Nt),
			t.progress() < 1 && xe(t, "onInterrupt"),
			t
		);
	},
	ma = [],
	va = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), Ls() || t.headless)) {
				var e = t.name,
					r = pt(t),
					i =
						e && !r && t.init
							? function () {
									this._props = [];
								}
							: t,
					n = {
						init: Qr,
						render: $s,
						add: Bs,
						kill: au,
						modifier: ou,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: Us,
						aliases: {},
						register: 0,
					};
				if ((yr(), t !== i)) {
					if (me[e]) return;
					Ce(i, Ce(An(t, n), s)),
						gr(i.prototype, gr(n, An(t, s))),
						(me[(i.prop = e)] = i),
						t.targetTest && (Tn.push(i), (Is[e] = 1)),
						(e =
							("css" === e
								? "CSS"
								: e.charAt(0).toUpperCase() + e.substr(1)) +
							"Plugin");
				}
				ta(e, i), t.register && t.register(he, i, ue);
			} else ma.push(t);
	},
	et = 255,
	Mr = {
		aqua: [0, et, et],
		lime: [0, et, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, et],
		navy: [0, 0, 128],
		white: [et, et, et],
		olive: [128, 128, 0],
		yellow: [et, et, 0],
		orange: [et, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [et, 0, 0],
		pink: [et, 192, 203],
		cyan: [0, et, et],
		transparent: [et, et, et, 0],
	},
	Kn = function (t, e, r) {
		return (
			((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
				? e + (r - e) * t * 6
				: t < 0.5
					? r
					: 3 * t < 2
						? e + (r - e) * (2 / 3 - t) * 6
						: e) *
				et +
				0.5) |
			0
		);
	},
	ya = function (t, e, r) {
		var i,
			n,
			s,
			o,
			a,
			l,
			u,
			h,
			c,
			f,
			p = t ? (oi(t) ? [t >> 16, (t >> 8) & et, t & et] : 0) : Mr.black;
		if (!p) {
			if (
				("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mr[t])
			)
				p = Mr[t];
			else if ("#" === t.charAt(0)) {
				if (
					(t.length < 6 &&
						((i = t.charAt(1)),
						(n = t.charAt(2)),
						(s = t.charAt(3)),
						(t =
							"#" +
							i +
							i +
							n +
							n +
							s +
							s +
							(5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
					9 === t.length)
				)
					return [
						(p = parseInt(t.substr(1, 6), 16)) >> 16,
						(p >> 8) & et,
						p & et,
						parseInt(t.substr(7), 16) / 255,
					];
				p = [
					(t = parseInt(t.substr(1), 16)) >> 16,
					(t >> 8) & et,
					t & et,
				];
			} else if ("hsl" === t.substr(0, 3))
				if (((p = f = t.match(ao)), e)) {
					if (~t.indexOf("="))
						return (
							(p = t.match(Qo)),
							r && p.length < 4 && (p[3] = 1),
							p
						);
				} else
					(o = (+p[0] % 360) / 360),
						(a = +p[1] / 100),
						(i =
							2 * (l = +p[2] / 100) -
							(n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
						p.length > 3 && (p[3] *= 1),
						(p[0] = Kn(o + 1 / 3, i, n)),
						(p[1] = Kn(o, i, n)),
						(p[2] = Kn(o - 1 / 3, i, n));
			else p = t.match(ao) || Mr.transparent;
			p = p.map(Number);
		}
		return (
			e &&
				!f &&
				((i = p[0] / et),
				(n = p[1] / et),
				(s = p[2] / et),
				(l = ((u = Math.max(i, n, s)) + (h = Math.min(i, n, s))) / 2),
				u === h
					? (o = a = 0)
					: ((c = u - h),
						(a = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
						(o =
							u === i
								? (n - s) / c + (n < s ? 6 : 0)
								: u === n
									? (s - i) / c + 2
									: (i - n) / c + 4),
						(o *= 60)),
				(p[0] = ~~(o + 0.5)),
				(p[1] = ~~(100 * a + 0.5)),
				(p[2] = ~~(100 * l + 0.5))),
			r && p.length < 4 && (p[3] = 1),
			p
		);
	},
	wa = function (t) {
		var e = [],
			r = [],
			i = -1;
		return (
			t.split(Si).forEach(function (t) {
				var n = t.match(or) || [];
				e.push.apply(e, n), r.push((i += n.length + 1));
			}),
			(e.c = r),
			e
		);
	},
	_o = function (t, e, r) {
		var i,
			n,
			s,
			o,
			a = "",
			l = (t + a).match(Si),
			u = e ? "hsla(" : "rgba(",
			h = 0;
		if (!l) return t;
		if (
			((l = l.map(function (t) {
				return (
					(t = ya(t, e, 1)) &&
					u +
						(e
							? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
							: t.join(",")) +
						")"
				);
			})),
			r && ((s = wa(t)), (i = r.c).join(a) !== s.c.join(a)))
		)
			for (o = (n = t.replace(Si, "1").split(or)).length - 1; h < o; h++)
				a +=
					n[h] +
					(~i.indexOf(h)
						? l.shift() || u + "0,0,0,0)"
						: (s.length ? s : l.length ? l : r).shift());
		if (!n)
			for (o = (n = t.split(Si)).length - 1; h < o; h++) a += n[h] + l[h];
		return a + n[o];
	},
	Si = (function () {
		var t,
			e =
				"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
		for (t in Mr) e += "|" + t + "\\b";
		return new RegExp(e + ")", "gi");
	})(),
	$l = /hsl[a]?\(/,
	xa = function (t) {
		var e,
			r = t.join(" ");
		if (((Si.lastIndex = 0), Si.test(r)))
			return (
				(e = $l.test(r)),
				(t[1] = _o(t[1], e)),
				(t[0] = _o(t[0], e, wa(t[1]))),
				!0
			);
	},
	ye = (function () {
		var t,
			e,
			r,
			i,
			n,
			s,
			o = Date.now,
			a = 500,
			l = 33,
			u = o(),
			h = u,
			c = 1e3 / 240,
			f = c,
			p = [],
			d = function r(d) {
				var m,
					g,
					v,
					_,
					y = o() - h,
					w = !0 === d;
				if (
					((y > a || y < 0) && (u += y - l),
					((m = (v = (h += y) - u) - f) > 0 || w) &&
						((_ = ++i.frame),
						(n = v - 1e3 * i.time),
						(i.time = v /= 1e3),
						(f += m + (m >= c ? 4 : c - m)),
						(g = 1)),
					w || (t = e(r)),
					g)
				)
					for (s = 0; s < p.length; s++) p[s](v, n, _, d);
			};
		return (i = {
			time: 0,
			frame: 0,
			tick: function () {
				d(!0);
			},
			deltaRatio: function (t) {
				return n / (1e3 / (t || 60));
			},
			wake: function () {
				Jo &&
					(!fs &&
						Ls() &&
						((He = fs = window),
						(Fs = He.document || {}),
						(be.gsap = he),
						(He.gsapVersions || (He.gsapVersions = [])).push(
							he.version,
						),
						jo(Dn || He.GreenSockGlobals || (!He.gsap && He) || {}),
						ma.forEach(va)),
					(r =
						typeof requestAnimationFrame < "u" &&
						requestAnimationFrame),
					t && i.sleep(),
					(e =
						r ||
						function (t) {
							return setTimeout(t, (f - 1e3 * i.time + 1) | 0);
						}),
					(Jr = 1),
					d(2));
			},
			sleep: function () {
				(r ? cancelAnimationFrame : clearTimeout)(t),
					(Jr = 0),
					(e = Qr);
			},
			lagSmoothing: function (t, e) {
				(a = t || 1 / 0), (l = Math.min(e || 33, a));
			},
			fps: function (t) {
				(c = 1e3 / (t || 240)), (f = 1e3 * i.time + c);
			},
			add: function (t, e, r) {
				var n = e
					? function (e, r, s, o) {
							t(e, r, s, o), i.remove(n);
						}
					: t;
				return i.remove(t), p[r ? "unshift" : "push"](n), yr(), n;
			},
			remove: function (t, e) {
				~(e = p.indexOf(t)) && p.splice(e, 1) && s >= e && s--;
			},
			_listeners: p,
		});
	})(),
	yr = function () {
		return !Jr && ye.wake();
	},
	G = {},
	ql = /^[\d.\-M][\d.\-,\s]/,
	Gl = /["']/g,
	Kl = function (t) {
		for (
			var e,
				r,
				i,
				n = {},
				s = t.substr(1, t.length - 3).split(":"),
				o = s[0],
				a = 1,
				l = s.length;
			a < l;
			a++
		)
			(r = s[a]),
				(e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
				(i = r.substr(0, e)),
				(n[o] = isNaN(i) ? i.replace(Gl, "").trim() : +i),
				(o = r.substr(e + 1).trim());
		return n;
	},
	Ql = function (t) {
		var e = t.indexOf("(") + 1,
			r = t.indexOf(")"),
			i = t.indexOf("(", e);
		return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
	},
	Zl = function (t) {
		var e = (t + "").split("("),
			r = G[e[0]];
		return r && e.length > 1 && r.config
			? r.config.apply(
					null,
					~t.indexOf("{") ? [Kl(e[1])] : Ql(t).split(",").map(na),
				)
			: G._CE && ql.test(t)
				? G._CE("", t)
				: r;
	},
	Sa = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	Ta = function t(e, r) {
		for (var i, n = e._first; n; )
			n instanceof re
				? t(n, r)
				: n.vars.yoyoEase &&
					(!n._yoyo || !n._repeat) &&
					n._yoyo !== r &&
					(n.timeline
						? t(n.timeline, r)
						: ((i = n._ease),
							(n._ease = n._yEase),
							(n._yEase = i),
							(n._yoyo = r))),
				(n = n._next);
	},
	Hi = function (t, e) {
		return (t && (pt(t) ? t : G[t] || Zl(t))) || e;
	},
	Zi = function (t, e, r, i) {
		void 0 === r &&
			(r = function (t) {
				return 1 - e(1 - t);
			}),
			void 0 === i &&
				(i = function (t) {
					return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
				});
		var n,
			s = { easeIn: e, easeOut: r, easeInOut: i };
		return (
			le(t, function (t) {
				for (var e in ((G[t] = be[t] = s),
				(G[(n = t.toLowerCase())] = r),
				s))
					G[
						n +
							("easeIn" === e
								? ".in"
								: "easeOut" === e
									? ".out"
									: ".inOut")
					] = G[t + "." + e] = s[e];
			}),
			s
		);
	},
	ba = function (t) {
		return function (e) {
			return e < 0.5
				? (1 - t(1 - 2 * e)) / 2
				: 0.5 + t(2 * (e - 0.5)) / 2;
		};
	},
	Qn = function t(e, r, i) {
		var n = r >= 1 ? r : 1,
			s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
			o = (s / us) * (Math.asin(1 / n) || 0),
			a = function (t) {
				return 1 === t
					? 1
					: n * Math.pow(2, -10 * t) * Sl((t - o) * s) + 1;
			},
			l =
				"out" === e
					? a
					: "in" === e
						? function (t) {
								return 1 - a(1 - t);
							}
						: ba(a);
		return (
			(s = us / s),
			(l.config = function (r, i) {
				return t(e, r, i);
			}),
			l
		);
	},
	Zn = function t(e, r) {
		void 0 === r && (r = 1.70158);
		var i = function (t) {
				return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
			},
			n =
				"out" === e
					? i
					: "in" === e
						? function (t) {
								return 1 - i(1 - t);
							}
						: ba(i);
		return (
			(n.config = function (r) {
				return t(e, r);
			}),
			n
		);
	};
le("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
	var r = e < 5 ? e + 1 : e;
	Zi(
		t + ",Power" + (r - 1),
		e
			? function (t) {
					return Math.pow(t, r);
				}
			: function (t) {
					return t;
				},
		function (t) {
			return 1 - Math.pow(1 - t, r);
		},
		function (t) {
			return t < 0.5
				? Math.pow(2 * t, r) / 2
				: 1 - Math.pow(2 * (1 - t), r) / 2;
		},
	);
}),
	(G.Linear.easeNone = G.none = G.Linear.easeIn),
	Zi("Elastic", Qn("in"), Qn("out"), Qn()),
	(function (t, e) {
		var r = 1 / e,
			i = 2 * r,
			n = 2.5 * r,
			s = function (s) {
				return s < r
					? t * s * s
					: s < i
						? t * Math.pow(s - 1.5 / e, 2) + 0.75
						: s < n
							? t * (s -= 2.25 / e) * s + 0.9375
							: t * Math.pow(s - 2.625 / e, 2) + 0.984375;
			};
		Zi(
			"Bounce",
			function (t) {
				return 1 - s(1 - t);
			},
			s,
		);
	})(7.5625, 2.75),
	Zi("Expo", function (t) {
		return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
	}),
	Zi("Circ", function (t) {
		return -(Go(1 - t * t) - 1);
	}),
	Zi("Sine", function (t) {
		return 1 === t ? 1 : 1 - xl(t * yl);
	}),
	Zi("Back", Zn("in"), Zn("out"), Zn()),
	(G.SteppedEase =
		G.steps =
		be.SteppedEase =
			{
				config: function (t, e) {
					void 0 === t && (t = 1);
					var r = 1 / t,
						i = t + (e ? 0 : 1),
						n = e ? 1 : 0,
						s = 1 - it;
					return function (t) {
						return (((i * sn(0, s, t)) | 0) + n) * r;
					};
				},
			}),
	(pr.ease = G["quad.out"]),
	le(
		"onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
		function (t) {
			return (Ys += t + "," + t + "Params,");
		},
	);
var Ca = function (t, e) {
		(this.id = wl++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : ia),
			(this.set = e ? e.getSetter : Us);
	},
	jr = (function () {
		function t(t) {
			(this.vars = t),
				(this._delay = +t.delay || 0),
				(this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
					((this._rDelay = t.repeatDelay || 0),
					(this._yoyo = !!t.yoyo || !!t.yoyoEase)),
				(this._ts = 1),
				vr(this, +t.duration, 1, 1),
				(this.data = t.data),
				at && ((this._ctx = at), at.data.push(this)),
				Jr || ye.wake();
		}
		var e = t.prototype;
		return (
			(e.delay = function (t) {
				return t || 0 === t
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + t - this._delay),
						(this._delay = t),
						this)
					: this._delay;
			}),
			(e.duration = function (t) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0
								? t + (t + this._rDelay) * this._repeat
								: t,
						)
					: this.totalDuration() && this._dur;
			}),
			(e.totalDuration = function (t) {
				return arguments.length
					? ((this._dirty = 0),
						vr(
							this,
							this._repeat < 0
								? t
								: (t - this._repeat * this._rDelay) /
										(this._repeat + 1),
						))
					: this._tDur;
			}),
			(e.totalTime = function (t, e) {
				if ((yr(), !arguments.length)) return this._tTime;
				var r = this._dp;
				if (r && r.smoothChildTiming && this._ts) {
					for (
						Vn(this, t), !r._dp || r.parent || aa(r, this);
						r && r.parent;
					)
						r.parent._time !==
							r._start +
								(r._ts >= 0
									? r._tTime / r._ts
									: (r.totalDuration() - r._tTime) /
										-r._ts) && r.totalTime(r._tTime, !0),
							(r = r.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && t < this._tDur) ||
							(this._ts < 0 && t > 0) ||
							(!this._tDur && !t)) &&
						Ue(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== t ||
						(!this._dur && !e) ||
						(this._initted && Math.abs(this._zTime) === it) ||
						(!this._initted && this._dur && t) ||
						(!t &&
							!this._initted &&
							(this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = t), ra(this, t, e)),
					this
				);
			}),
			(e.time = function (t, e) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), t + fo(this)) %
								(this._dur + this._rDelay) ||
								(t ? this._dur : 0),
							e,
						)
					: this._time;
			}),
			(e.totalProgress = function (t, e) {
				return arguments.length
					? this.totalTime(this.totalDuration() * t, e)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() >= 0 && this._initted
							? 1
							: 0;
			}),
			(e.progress = function (t, e) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(!this._yoyo || 1 & this.iteration()
									? t
									: 1 - t) +
								fo(this),
							e,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(e.iteration = function (t, e) {
				var r = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (t - 1) * r, e)
					: this._repeat
						? mr(this._tTime, r) + 1
						: 1;
			}),
			(e.timeScale = function (t, e) {
				if (!arguments.length) return this._rts === -it ? 0 : this._rts;
				if (this._rts === t) return this;
				var r =
					this.parent && this._ts
						? zn(this.parent._time, this)
						: this._tTime;
				return (
					(this._rts = +t || 0),
					(this._ts = this._ps || t === -it ? 0 : this._rts),
					this.totalTime(
						sn(-Math.abs(this._delay), this.totalDuration(), r),
						!1 !== e,
					),
					Hn(this),
					Rl(this)
				);
			}),
			(e.paused = function (t) {
				return arguments.length
					? (this._ps !== t &&
							((this._ps = t),
							t
								? ((this._pTime =
										this._tTime ||
										Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (yr(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent &&
											!this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										1 === this.progress() &&
											Math.abs(this._zTime) !== it &&
											(this._tTime -= it),
									))),
						this)
					: this._ps;
			}),
			(e.startTime = function (t) {
				if (arguments.length) {
					this._start = ut(t);
					var e = this.parent || this._dp;
					return (
						e &&
							(e._sort || !this.parent) &&
							Ue(e, this, this._start - this._delay),
						this
					);
				}
				return this._start;
			}),
			(e.endTime = function (t) {
				return (
					this._start +
					(ae(t) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(e.rawTime = function (t) {
				var e = this.parent || this._dp;
				return e
					? t &&
						(!this._ts ||
							(this._repeat &&
								this._time &&
								this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? zn(e.rawTime(t), this)
							: this._tTime
					: this._tTime;
			}),
			(e.revert = function (t) {
				void 0 === t && (t = El);
				var e = Nt;
				return (
					(Nt = t),
					Xs(this) &&
						(this.timeline && this.timeline.revert(t),
						this.totalTime(-0.01, t.suppressEvents)),
					"nested" !== this.data && !1 !== t.kill && this.kill(),
					(Nt = e),
					this
				);
			}),
			(e.globalTime = function (t) {
				for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
					(r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
				return !this.parent && this._sat ? this._sat.globalTime(t) : r;
			}),
			(e.repeat = function (t) {
				return arguments.length
					? ((this._repeat = t === 1 / 0 ? -2 : t), ho(this))
					: -2 === this._repeat
						? 1 / 0
						: this._repeat;
			}),
			(e.repeatDelay = function (t) {
				if (arguments.length) {
					var e = this._time;
					return (
						(this._rDelay = t), ho(this), e ? this.time(e) : this
					);
				}
				return this._rDelay;
			}),
			(e.yoyo = function (t) {
				return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
			}),
			(e.seek = function (t, e) {
				return this.totalTime(Pe(this, t), ae(e));
			}),
			(e.restart = function (t, e) {
				return (
					this.play().totalTime(t ? -this._delay : 0, ae(e)),
					this._dur || (this._zTime = -it),
					this
				);
			}),
			(e.play = function (t, e) {
				return (
					null != t && this.seek(t, e), this.reversed(!1).paused(!1)
				);
			}),
			(e.reverse = function (t, e) {
				return (
					null != t && this.seek(t || this.totalDuration(), e),
					this.reversed(!0).paused(!1)
				);
			}),
			(e.pause = function (t, e) {
				return null != t && this.seek(t, e), this.paused(!0);
			}),
			(e.resume = function () {
				return this.paused(!1);
			}),
			(e.reversed = function (t) {
				return arguments.length
					? (!!t !== this.reversed() &&
							this.timeScale(-this._rts || (t ? -it : 0)),
						this)
					: this._rts < 0;
			}),
			(e.invalidate = function () {
				return (
					(this._initted = this._act = 0), (this._zTime = -it), this
				);
			}),
			(e.isActive = function () {
				var t,
					e = this.parent || this._dp,
					r = this._start;
				return !(
					e &&
					!(
						this._ts &&
						this._initted &&
						e.isActive() &&
						(t = e.rawTime(!0)) >= r &&
						t < this.endTime(!0) - it
					)
				);
			}),
			(e.eventCallback = function (t, e, r) {
				var i = this.vars;
				return arguments.length > 1
					? (e
							? ((i[t] = e),
								r && (i[t + "Params"] = r),
								"onUpdate" === t && (this._onUpdate = e))
							: delete i[t],
						this)
					: i[t];
			}),
			(e.then = function (t) {
				var e = this,
					r = e._prom;
				return new Promise(function (i) {
					var n = pt(t) ? t : sa,
						s = function () {
							var t = e.then;
							(e.then = null),
								r && r(),
								pt(n) &&
									(n = n(e)) &&
									(n.then || n === e) &&
									(e.then = t),
								i(n),
								(e.then = t);
						};
					(e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
					(!e._tTime && e._ts < 0)
						? s()
						: (e._prom = s);
				});
			}),
			(e.kill = function () {
				Or(this);
			}),
			t
		);
	})();
Ce(jr.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -it,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var re = (function (t) {
	function e(e, r) {
		var i;
		return (
			void 0 === e && (e = {}),
			((i = t.call(this, e) || this).labels = {}),
			(i.smoothChildTiming = !!e.smoothChildTiming),
			(i.autoRemoveChildren = !!e.autoRemoveChildren),
			(i._sort = ae(e.sortChildren)),
			ft && Ue(e.parent || ft, ei(i), r),
			e.reversed && i.reverse(),
			e.paused && i.paused(!0),
			e.scrollTrigger && la(ei(i), e.scrollTrigger),
			i
		);
	}
	qo(e, t);
	var r = e.prototype;
	return (
		(r.to = function (t, e, r) {
			return Nr(0, arguments, this), this;
		}),
		(r.from = function (t, e, r) {
			return Nr(1, arguments, this), this;
		}),
		(r.fromTo = function (t, e, r, i) {
			return Nr(2, arguments, this), this;
		}),
		(r.set = function (t, e, r) {
			return (
				(e.duration = 0),
				(e.parent = this),
				Fr(e).repeatDelay || (e.repeat = 0),
				(e.immediateRender = !!e.immediateRender),
				new bt(t, e, Pe(this, r), 1),
				this
			);
		}),
		(r.call = function (t, e, r) {
			return Ue(this, bt.delayedCall(0, t, e), r);
		}),
		(r.staggerTo = function (t, e, r, i, n, s, o) {
			return (
				(r.duration = e),
				(r.stagger = r.stagger || i),
				(r.onComplete = s),
				(r.onCompleteParams = o),
				(r.parent = this),
				new bt(t, r, Pe(this, n)),
				this
			);
		}),
		(r.staggerFrom = function (t, e, r, i, n, s, o) {
			return (
				(r.runBackwards = 1),
				(Fr(r).immediateRender = ae(r.immediateRender)),
				this.staggerTo(t, e, r, i, n, s, o)
			);
		}),
		(r.staggerFromTo = function (t, e, r, i, n, s, o, a) {
			return (
				(i.startAt = r),
				(Fr(i).immediateRender = ae(i.immediateRender)),
				this.staggerTo(t, e, i, n, s, o, a)
			);
		}),
		(r.render = function (t, e, r) {
			var i,
				n,
				s,
				o,
				a,
				l,
				u,
				h,
				c,
				f,
				p,
				d,
				m = this._time,
				g = this._dirty ? this.totalDuration() : this._tDur,
				v = this._dur,
				_ = t <= 0 ? 0 : ut(t),
				y = this._zTime < 0 != t < 0 && (this._initted || !v);
			if (
				(this !== ft && _ > g && t >= 0 && (_ = g),
				_ !== this._tTime || r || y)
			) {
				if (
					(m !== this._time &&
						v &&
						((_ += this._time - m), (t += this._time - m)),
					(i = _),
					(c = this._start),
					(l = !(h = this._ts)),
					y &&
						(v || (m = this._zTime),
						(t || !e) && (this._zTime = t)),
					this._repeat)
				) {
					if (
						((p = this._yoyo),
						(a = v + this._rDelay),
						this._repeat < -1 && t < 0)
					)
						return this.totalTime(100 * a + t, e, r);
					if (
						((i = ut(_ % a)),
						_ === g
							? ((o = this._repeat), (i = v))
							: ((o = ~~(f = ut(_ / a))) &&
									o === f &&
									((i = v), o--),
								i > v && (i = v)),
						(f = mr(this._tTime, a)),
						!m &&
							this._tTime &&
							f !== o &&
							this._tTime - f * a - this._dur <= 0 &&
							(f = o),
						p && 1 & o && ((i = v - i), (d = 1)),
						o !== f && !this._lock)
					) {
						var w = p && 1 & f,
							b = w === (p && 1 & o);
						if (
							(o < f && (w = !w),
							(m = w ? 0 : _ % v ? v : _),
							(this._lock = 1),
							(this.render(
								m || (d ? 0 : ut(o * a)),
								e,
								!v,
							)._lock = 0),
							(this._tTime = _),
							!e && this.parent && xe(this, "onRepeat"),
							this.vars.repeatRefresh &&
								!d &&
								((this.invalidate()._lock = 1), (f = o)),
							(m && m !== this._time) ||
								l !== !this._ts ||
								(this.vars.onRepeat &&
									!this.parent &&
									!this._act))
						)
							return this;
						if (
							((v = this._dur),
							(g = this._tDur),
							b &&
								((this._lock = 2),
								(m = w ? v : -1e-4),
								this.render(m, !0),
								this.vars.repeatRefresh &&
									!d &&
									this.invalidate()),
							(this._lock = 0),
							!this._ts && !l)
						)
							return this;
						Ta(this, d);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						(u = Fl(this, ut(m), ut(i))) &&
						(_ -= i - (i = u._start)),
					(this._tTime = _),
					(this._time = i),
					(this._act = !h),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = t),
						(m = 0)),
					!m &&
						_ &&
						v &&
						!e &&
						!f &&
						(xe(this, "onStart"), this._tTime !== _))
				)
					return this;
				if (i >= m && t >= 0)
					for (n = this._first; n; ) {
						if (
							((s = n._next),
							(n._act || i >= n._start) && n._ts && u !== n)
						) {
							if (n.parent !== this) return this.render(t, e, r);
							if (
								(n.render(
									n._ts > 0
										? (i - n._start) * n._ts
										: (n._dirty
												? n.totalDuration()
												: n._tDur) +
												(i - n._start) * n._ts,
									e,
									r,
								),
								i !== this._time || (!this._ts && !l))
							) {
								(u = 0), s && (_ += this._zTime = -it);
								break;
							}
						}
						n = s;
					}
				else {
					n = this._last;
					for (var x = t < 0 ? t : i; n; ) {
						if (
							((s = n._prev),
							(n._act || x <= n._end) && n._ts && u !== n)
						) {
							if (n.parent !== this) return this.render(t, e, r);
							if (
								(n.render(
									n._ts > 0
										? (x - n._start) * n._ts
										: (n._dirty
												? n.totalDuration()
												: n._tDur) +
												(x - n._start) * n._ts,
									e,
									r || (Nt && Xs(n)),
								),
								i !== this._time || (!this._ts && !l))
							) {
								(u = 0), s && (_ += this._zTime = x ? -it : it);
								break;
							}
						}
						n = s;
					}
				}
				if (
					u &&
					!e &&
					(this.pause(),
					(u.render(i >= m ? 0 : -it)._zTime = i >= m ? 1 : -1),
					this._ts)
				)
					return (this._start = c), Hn(this), this.render(t, e, r);
				this._onUpdate && !e && xe(this, "onUpdate", !0),
					((_ === g && this._tTime >= this.totalDuration()) ||
						(!_ && m)) &&
						(c === this._start ||
							Math.abs(h) !== Math.abs(this._ts)) &&
						(this._lock ||
							((t || !v) &&
								((_ === g && this._ts > 0) ||
									(!_ && this._ts < 0)) &&
								bi(this, 1),
							!e &&
								(!(t < 0) || m) &&
								(_ || m || !g) &&
								(xe(
									this,
									_ === g && t >= 0
										? "onComplete"
										: "onReverseComplete",
									!0,
								),
								this._prom &&
									!(_ < g && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(r.add = function (t, e) {
			var r = this;
			if ((oi(e) || (e = Pe(this, e, t)), !(t instanceof jr))) {
				if (qt(t))
					return (
						t.forEach(function (t) {
							return r.add(t, e);
						}),
						this
					);
				if (Rt(t)) return this.addLabel(t, e);
				if (!pt(t)) return this;
				t = bt.delayedCall(0, t);
			}
			return this !== t ? Ue(this, t, e) : this;
		}),
		(r.getChildren = function (t, e, r, i) {
			void 0 === t && (t = !0),
				void 0 === e && (e = !0),
				void 0 === r && (r = !0),
				void 0 === i && (i = -Me);
			for (var n = [], s = this._first; s; )
				s._start >= i &&
					(s instanceof bt
						? e && n.push(s)
						: (r && n.push(s),
							t && n.push.apply(n, s.getChildren(!0, e, r)))),
					(s = s._next);
			return n;
		}),
		(r.getById = function (t) {
			for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
				if (e[r].vars.id === t) return e[r];
		}),
		(r.remove = function (t) {
			return Rt(t)
				? this.removeLabel(t)
				: pt(t)
					? this.killTweensOf(t)
					: (t.parent === this && Bn(this, t),
						t === this._recent && (this._recent = this._last),
						Bi(this));
		}),
		(r.totalTime = function (e, r) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = ut(
							ye.time -
								(this._ts > 0
									? e / this._ts
									: (this.totalDuration() - e) / -this._ts),
						)),
					t.prototype.totalTime.call(this, e, r),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(r.addLabel = function (t, e) {
			return (this.labels[t] = Pe(this, e)), this;
		}),
		(r.removeLabel = function (t) {
			return delete this.labels[t], this;
		}),
		(r.addPause = function (t, e, r) {
			var i = bt.delayedCall(0, e || Qr, r);
			return (
				(i.data = "isPause"),
				(this._hasPause = 1),
				Ue(this, i, Pe(this, t))
			);
		}),
		(r.removePause = function (t) {
			var e = this._first;
			for (t = Pe(this, t); e; )
				e._start === t && "isPause" === e.data && bi(e), (e = e._next);
		}),
		(r.killTweensOf = function (t, e, r) {
			for (var i = this.getTweensOf(t, r), n = i.length; n--; )
				gi !== i[n] && i[n].kill(t, e);
			return this;
		}),
		(r.getTweensOf = function (t, e) {
			for (var r, i = [], n = De(t), s = this._first, o = oi(e); s; )
				s instanceof bt
					? Ol(s._targets, n) &&
						(o
							? (!gi || (s._initted && s._ts)) &&
								s.globalTime(0) <= e &&
								s.globalTime(s.totalDuration()) > e
							: !e || s.isActive()) &&
						i.push(s)
					: (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
					(s = s._next);
			return i;
		}),
		(r.tweenTo = function (t, e) {
			e = e || {};
			var r,
				i = this,
				n = Pe(i, t),
				s = e,
				o = s.startAt,
				a = s.onStart,
				l = s.onStartParams,
				u = s.immediateRender,
				h = bt.to(
					i,
					Ce(
						{
							ease: e.ease || "none",
							lazy: !1,
							immediateRender: !1,
							time: n,
							overwrite: "auto",
							duration:
								e.duration ||
								Math.abs(
									(n -
										(o && "time" in o ? o.time : i._time)) /
										i.timeScale(),
								) ||
								it,
							onStart: function () {
								if ((i.pause(), !r)) {
									var t =
										e.duration ||
										Math.abs(
											(n -
												(o && "time" in o
													? o.time
													: i._time)) /
												i.timeScale(),
										);
									h._dur !== t &&
										vr(h, t, 0, 1).render(h._time, !0, !0),
										(r = 1);
								}
								a && a.apply(h, l || []);
							},
						},
						e,
					),
				);
			return u ? h.render(0) : h;
		}),
		(r.tweenFromTo = function (t, e, r) {
			return this.tweenTo(e, Ce({ startAt: { time: Pe(this, t) } }, r));
		}),
		(r.recent = function () {
			return this._recent;
		}),
		(r.nextLabel = function (t) {
			return void 0 === t && (t = this._time), co(this, Pe(this, t));
		}),
		(r.previousLabel = function (t) {
			return void 0 === t && (t = this._time), co(this, Pe(this, t), 1);
		}),
		(r.currentLabel = function (t) {
			return arguments.length
				? this.seek(t, !0)
				: this.previousLabel(this._time + it);
		}),
		(r.shiftChildren = function (t, e, r) {
			void 0 === r && (r = 0);
			var i,
				n = this._first,
				s = this.labels;
			for (t = ut(t); n; )
				n._start >= r && ((n._start += t), (n._end += t)),
					(n = n._next);
			if (e) for (i in s) s[i] >= r && (s[i] += t);
			return Bi(this);
		}),
		(r.invalidate = function (e) {
			var r = this._first;
			for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
			return t.prototype.invalidate.call(this, e);
		}),
		(r.clear = function (t) {
			void 0 === t && (t = !0);
			for (var e, r = this._first; r; )
				(e = r._next), this.remove(r), (r = e);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				t && (this.labels = {}),
				Bi(this)
			);
		}),
		(r.totalDuration = function (t) {
			var e,
				r,
				i,
				n = 0,
				s = this,
				o = s._last,
				a = Me;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -t : t),
				);
			if (s._dirty) {
				for (i = s.parent; o; )
					(e = o._prev),
						o._dirty && o.totalDuration(),
						(r = o._start) > a && s._sort && o._ts && !s._lock
							? ((s._lock = 1),
								(Ue(s, o, r - o._delay, 1)._lock = 0))
							: (a = r),
						r < 0 &&
							o._ts &&
							((n -= r),
							((!i && !s._dp) || (i && i.smoothChildTiming)) &&
								((s._start += ut(r / s._ts)),
								(s._time -= r),
								(s._tTime -= r)),
							s.shiftChildren(-r, !1, -1 / 0),
							(a = 0)),
						o._end > n && o._ts && (n = o._end),
						(o = e);
				vr(s, s === ft && s._time > n ? s._time : n, 1, 1),
					(s._dirty = 0);
			}
			return s._tDur;
		}),
		(e.updateRoot = function (t) {
			if (
				(ft._ts && (ra(ft, zn(t, ft)), (ea = ye.frame)), ye.frame >= lo)
			) {
				lo += Te.autoSleep || 120;
				var e = ft._first;
				if (
					(!e || !e._ts) &&
					Te.autoSleep &&
					ye._listeners.length < 2
				) {
					for (; e && !e._ts; ) e = e._next;
					e || ye.sleep();
				}
			}
		}),
		e
	);
})(jr);
Ce(re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var gi,
	ms,
	Jl = function (t, e, r, i, n, s, o) {
		var a,
			l,
			u,
			h,
			c,
			f,
			p,
			d,
			m = new ue(this._pt, t, e, 0, 1, Da, null, n),
			g = 0,
			v = 0;
		for (
			m.b = r,
				m.e = i,
				r += "",
				(p = ~(i += "").indexOf("random(")) && (i = Zr(i)),
				s && (s((d = [r, i]), t, e), (r = d[0]), (i = d[1])),
				l = r.match(qn) || [];
			(a = qn.exec(i));
		)
			(h = a[0]),
				(c = i.substring(g, a.index)),
				u ? (u = (u + 1) % 5) : "rgba(" === c.substr(-5) && (u = 1),
				h !== l[v++] &&
					((f = parseFloat(l[v - 1]) || 0),
					(m._pt = {
						_next: m._pt,
						p: c || 1 === v ? c : ",",
						s: f,
						c:
							"=" === h.charAt(1)
								? ur(f, h) - f
								: parseFloat(h) - f,
						m: u && u < 4 ? Math.round : 0,
					}),
					(g = qn.lastIndex));
		return (
			(m.c = g < i.length ? i.substring(g, i.length) : ""),
			(m.fp = o),
			(Zo.test(i) || p) && (m.e = 0),
			(this._pt = m),
			m
		);
	},
	Bs = function (t, e, r, i, n, s, o, a, l, u) {
		pt(i) && (i = i(n || 0, t, s));
		var h,
			c = t[e],
			f =
				"get" !== r
					? r
					: pt(c)
						? l
							? t[
									e.indexOf("set") ||
									!pt(t["get" + e.substr(3)])
										? e
										: "get" + e.substr(3)
								](l)
							: t[e]()
						: c,
			p = pt(c) ? (l ? ru : Oa) : Vs;
		if (
			(Rt(i) &&
				(~i.indexOf("random(") && (i = Zr(i)),
				"=" === i.charAt(1) &&
					((h = ur(f, i) + (Ut(f) || 0)) || 0 === h) &&
					(i = h)),
			!u || f !== i || ms)
		)
			return isNaN(f * i) || "" === i
				? (!c && !(e in t) && Ns(e, i),
					Jl.call(this, t, e, f, i, p, a || Te.stringFilter, l))
				: ((h = new ue(
						this._pt,
						t,
						e,
						+f || 0,
						i - (f || 0),
						"boolean" == typeof c ? su : Ma,
						0,
						p,
					)),
					l && (h.fp = l),
					o && h.modifier(o, this, t),
					(this._pt = h));
	},
	jl = function (t, e, r, i, n) {
		if (
			(pt(t) && (t = Ir(t, n, e, r, i)),
			!Ke(t) || (t.style && t.nodeType) || qt(t) || Ko(t))
		)
			return Rt(t) ? Ir(t, n, e, r, i) : t;
		var s,
			o = {};
		for (s in t) o[s] = Ir(t[s], n, e, r, i);
		return o;
	},
	ka = function (t, e, r, i, n, s) {
		var o, a, l, u;
		if (
			me[t] &&
			!1 !==
				(o = new me[t]()).init(
					n,
					o.rawVars ? e[t] : jl(e[t], i, n, s, r),
					r,
					i,
					s,
				) &&
			((r._pt = a =
				new ue(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
			r !== ar)
		)
			for (
				l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length;
				u--;
			)
				l[o._props[u]] = a;
		return o;
	},
	Hs = function t(e, r, i) {
		var n,
			s,
			o,
			a,
			l,
			u,
			h,
			c,
			f,
			p,
			d,
			m,
			g,
			v = e.vars,
			_ = v.ease,
			y = v.startAt,
			w = v.immediateRender,
			b = v.lazy,
			x = v.onUpdate,
			T = v.runBackwards,
			S = v.yoyoEase,
			M = v.keyframes,
			D = v.autoRevert,
			k = e._dur,
			E = e._startAt,
			O = e._targets,
			C = e.parent,
			P = C && "nested" === C.data ? C.vars.targets : O,
			R = "auto" === e._overwrite && !As,
			z = e.timeline;
		if (
			(z && (!M || !_) && (_ = "none"),
			(e._ease = Hi(_, pr.ease)),
			(e._yEase = S ? Sa(Hi(!0 === S ? _ : S, pr.ease)) : 0),
			S &&
				e._yoyo &&
				!e._repeat &&
				((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
			(e._from = !z && !!v.runBackwards),
			!z || (M && !v.stagger))
		) {
			if (
				((m = (c = O[0] ? Xi(O[0]).harness : 0) && v[c.prop]),
				(n = An(v, Is)),
				E &&
					(E._zTime < 0 && E.progress(1),
					r < 0 && T && w && !D
						? E.render(-1, !0)
						: E.revert(T && k ? Sn : Pl),
					(E._lazy = 0)),
				y)
			) {
				if (
					(bi(
						(e._startAt = bt.set(
							O,
							Ce(
								{
									data: "isStart",
									overwrite: !1,
									parent: C,
									immediateRender: !0,
									lazy: !E && ae(b),
									startAt: null,
									delay: 0,
									onUpdate:
										x &&
										function () {
											return xe(e, "onUpdate");
										},
									stagger: 0,
								},
								y,
							),
						)),
					),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					r < 0 && (Nt || (!w && !D)) && e._startAt.revert(Sn),
					w && k && r <= 0 && i <= 0)
				)
					return void (r && (e._zTime = r));
			} else if (T && k && !E)
				if (
					(r && (w = !1),
					(o = Ce(
						{
							overwrite: !1,
							data: "isFromStart",
							lazy: w && !E && ae(b),
							immediateRender: w,
							stagger: 0,
							parent: C,
						},
						n,
					)),
					m && (o[c.prop] = m),
					bi((e._startAt = bt.set(O, o))),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					r < 0 &&
						(Nt
							? e._startAt.revert(Sn)
							: e._startAt.render(-1, !0)),
					(e._zTime = r),
					w)
				) {
					if (!r) return;
				} else t(e._startAt, it, it);
			for (
				e._pt = e._ptCache = 0, b = (k && ae(b)) || (b && !k), s = 0;
				s < O.length;
				s++
			) {
				if (
					((h = (l = O[s])._gsap || Ws(O)[s]._gsap),
					(e._ptLookup[s] = p = {}),
					hs[h.id] && xi.length && Rn(),
					(d = P === O ? s : P.indexOf(l)),
					c &&
						!1 !== (f = new c()).init(l, m || n, e, d, P) &&
						((e._pt = a =
							new ue(
								e._pt,
								l,
								f.name,
								0,
								1,
								f.render,
								f,
								0,
								f.priority,
							)),
						f._props.forEach(function (t) {
							p[t] = a;
						}),
						f.priority && (u = 1)),
					!c || m)
				)
					for (o in n)
						me[o] && (f = ka(o, n, e, d, l, P))
							? f.priority && (u = 1)
							: (p[o] = a =
									Bs.call(
										e,
										l,
										o,
										"get",
										n[o],
										d,
										P,
										0,
										v.stringFilter,
									));
				e._op && e._op[s] && e.kill(l, e._op[s]),
					R &&
						e._pt &&
						((gi = e),
						ft.killTweensOf(l, p, e.globalTime(r)),
						(g = !e.parent),
						(gi = 0)),
					e._pt && b && (hs[h.id] = 1);
			}
			u && Ra(e), e._onInit && e._onInit(e);
		}
		(e._onUpdate = x),
			(e._initted = (!e._op || e._pt) && !g),
			M && r <= 0 && z.render(Me, !0, !0);
	},
	tu = function (t, e, r, i, n, s, o, a) {
		var l,
			u,
			h,
			c,
			f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
		if (!f)
			for (
				f = t._ptCache[e] = [], h = t._ptLookup, c = t._targets.length;
				c--;
			) {
				if ((l = h[c][e]) && l.d && l.d._pt)
					for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
						l = l._next;
				if (!l)
					return (
						(ms = 1),
						(t.vars[e] = "+=0"),
						Hs(t, o),
						(ms = 0),
						a ? Kr(e + " not eligible for reset") : 1
					);
				f.push(l);
			}
		for (c = f.length; c--; )
			((l = (u = f[c])._pt || u).s =
				(!i && 0 !== i) || n ? l.s + (i || 0) + s * l.c : i),
				(l.c = r - l.s),
				u.e && (u.e = yt(r) + Ut(u.e)),
				u.b && (u.b = l.s + Ut(u.b));
	},
	eu = function (t, e) {
		var r,
			i,
			n,
			s,
			o = t[0] ? Xi(t[0]).harness : 0,
			a = o && o.aliases;
		if (!a) return e;
		for (i in ((r = gr({}, e)), a))
			if (i in r)
				for (n = (s = a[i].split(",")).length; n--; ) r[s[n]] = r[i];
		return r;
	},
	iu = function (t, e, r, i) {
		var n,
			s,
			o = e.ease || i || "power1.inOut";
		if (qt(e))
			(s = r[t] || (r[t] = [])),
				e.forEach(function (t, r) {
					return s.push({
						t: (r / (e.length - 1)) * 100,
						v: t,
						e: o,
					});
				});
		else
			for (n in e)
				(s = r[n] || (r[n] = [])),
					"ease" === n || s.push({ t: parseFloat(t), v: e[n], e: o });
	},
	Ir = function (t, e, r, i, n) {
		return pt(t)
			? t.call(e, r, i, n)
			: Rt(t) && ~t.indexOf("random(")
				? Zr(t)
				: t;
	},
	Pa = Ys + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	Ea = {};
le(Pa + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
	return (Ea[t] = 1);
});
var bt = (function (t) {
	function e(e, r, i, n) {
		var s;
		"number" == typeof r && ((i.duration = r), (r = i), (i = null));
		var o,
			a,
			l,
			u,
			h,
			c,
			f,
			p,
			d = (s = t.call(this, n ? r : Fr(r)) || this).vars,
			m = d.duration,
			g = d.delay,
			v = d.immediateRender,
			_ = d.stagger,
			y = d.overwrite,
			w = d.keyframes,
			b = d.defaults,
			x = d.scrollTrigger,
			T = d.yoyoEase,
			S = r.parent || ft,
			M = (qt(e) || Ko(e) ? oi(e[0]) : "length" in r) ? [e] : De(e);
		if (
			((s._targets = M.length
				? Ws(M)
				: Kr(
						"GSAP target " + e + " not found. https://gsap.com",
						!Te.nullTargetWarn,
					) || []),
			(s._ptLookup = []),
			(s._overwrite = y),
			w || _ || un(m) || un(g))
		) {
			if (
				((r = s.vars),
				(o = s.timeline =
					new re({
						data: "nested",
						defaults: b || {},
						targets: S && "nested" === S.data ? S.vars.targets : M,
					})).kill(),
				(o.parent = o._dp = ei(s)),
				(o._start = 0),
				_ || un(m) || un(g))
			) {
				if (((u = M.length), (f = _ && ca(_)), Ke(_)))
					for (h in _)
						~Pa.indexOf(h) && (p || (p = {}), (p[h] = _[h]));
				for (a = 0; a < u; a++)
					((l = An(r, Ea)).stagger = 0),
						T && (l.yoyoEase = T),
						p && gr(l, p),
						(c = M[a]),
						(l.duration = +Ir(m, ei(s), a, c, M)),
						(l.delay = (+Ir(g, ei(s), a, c, M) || 0) - s._delay),
						!_ &&
							1 === u &&
							l.delay &&
							((s._delay = g = l.delay),
							(s._start += g),
							(l.delay = 0)),
						o.to(c, l, f ? f(a, c, M) : 0),
						(o._ease = G.none);
				o.duration() ? (m = g = 0) : (s.timeline = 0);
			} else if (w) {
				Fr(Ce(o.vars.defaults, { ease: "none" })),
					(o._ease = Hi(w.ease || r.ease || "none"));
				var D,
					k,
					E,
					O = 0;
				if (qt(w))
					w.forEach(function (t) {
						return o.to(M, t, ">");
					}),
						o.duration();
				else {
					for (h in ((l = {}), w))
						"ease" === h ||
							"easeEach" === h ||
							iu(h, w[h], l, w.easeEach);
					for (h in l)
						for (
							D = l[h].sort(function (t, e) {
								return t.t - e.t;
							}),
								O = 0,
								a = 0;
							a < D.length;
							a++
						)
							((E = {
								ease: (k = D[a]).e,
								duration:
									((k.t - (a ? D[a - 1].t : 0)) / 100) * m,
							})[h] = k.v),
								o.to(M, E, O),
								(O += E.duration);
					o.duration() < m &&
						o.to({}, { duration: m - o.duration() });
				}
			}
			m || s.duration((m = o.duration()));
		} else s.timeline = 0;
		return (
			!0 === y && !As && ((gi = ei(s)), ft.killTweensOf(M), (gi = 0)),
			Ue(S, ei(s), i),
			r.reversed && s.reverse(),
			r.paused && s.paused(!0),
			(v ||
				(!m &&
					!w &&
					s._start === ut(S._time) &&
					ae(v) &&
					Al(ei(s)) &&
					"nested" !== S.data)) &&
				((s._tTime = -it), s.render(Math.max(0, -g) || 0)),
			x && la(ei(s), x),
			s
		);
	}
	qo(e, t);
	var r = e.prototype;
	return (
		(r.render = function (t, e, r) {
			var i,
				n,
				s,
				o,
				a,
				l,
				u,
				h,
				c,
				f = this._time,
				p = this._tDur,
				d = this._dur,
				m = t < 0,
				g = t > p - it && !m ? p : t < it ? 0 : t;
			if (d) {
				if (
					g !== this._tTime ||
					!t ||
					r ||
					(!this._initted && this._tTime) ||
					(this._startAt && this._zTime < 0 !== m) ||
					this._lazy
				) {
					if (((i = g), (h = this.timeline), this._repeat)) {
						if (((o = d + this._rDelay), this._repeat < -1 && m))
							return this.totalTime(100 * o + t, e, r);
						if (
							((i = ut(g % o)),
							g === p
								? ((s = this._repeat), (i = d))
								: (s = ~~(a = ut(g / o))) && s === a
									? ((i = d), s--)
									: i > d && (i = d),
							(l = this._yoyo && 1 & s) &&
								((c = this._yEase), (i = d - i)),
							(a = mr(this._tTime, o)),
							i === f && !r && this._initted && s === a)
						)
							return (this._tTime = g), this;
						s !== a &&
							(h && this._yEase && Ta(h, l),
							this.vars.repeatRefresh &&
								!l &&
								!this._lock &&
								i !== o &&
								this._initted &&
								((this._lock = r = 1),
								(this.render(ut(o * s), !0).invalidate()._lock =
									0)));
					}
					if (!this._initted) {
						if (ua(this, m ? t : i, r, e, g))
							return (this._tTime = 0), this;
						if (
							!(
								f === this._time ||
								(r && this.vars.repeatRefresh && s !== a)
							)
						)
							return this;
						if (d !== this._dur) return this.render(t, e, r);
					}
					if (
						((this._tTime = g),
						(this._time = i),
						!this._act &&
							this._ts &&
							((this._act = 1), (this._lazy = 0)),
						(this.ratio = u = (c || this._ease)(i / d)),
						this._from && (this.ratio = u = 1 - u),
						!f &&
							g &&
							!e &&
							!a &&
							(xe(this, "onStart"), this._tTime !== g))
					)
						return this;
					for (n = this._pt; n; ) n.r(u, n.d), (n = n._next);
					(h &&
						h.render(
							t < 0 ? t : h._dur * h._ease(i / this._dur),
							e,
							r,
						)) ||
						(this._startAt && (this._zTime = t)),
						this._onUpdate &&
							!e &&
							(m && cs(this, t, e, r), xe(this, "onUpdate")),
						this._repeat &&
							s !== a &&
							this.vars.onRepeat &&
							!e &&
							this.parent &&
							xe(this, "onRepeat"),
						(g === this._tDur || !g) &&
							this._tTime === g &&
							(m && !this._onUpdate && cs(this, t, !0, !0),
							(t || !d) &&
								((g === this._tDur && this._ts > 0) ||
									(!g && this._ts < 0)) &&
								bi(this, 1),
							!e &&
								(!m || f) &&
								(g || f || l) &&
								(xe(
									this,
									g === p
										? "onComplete"
										: "onReverseComplete",
									!0,
								),
								this._prom &&
									!(g < p && this.timeScale() > 0) &&
									this._prom()));
				}
			} else Ll(this, t, e, r);
			return this;
		}),
		(r.targets = function () {
			return this._targets;
		}),
		(r.invalidate = function (e) {
			return (
				(!e || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt =
					this._op =
					this._onUpdate =
					this._lazy =
					this.ratio =
						0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(e),
				t.prototype.invalidate.call(this, e)
			);
		}),
		(r.resetTo = function (t, e, r, i, n) {
			Jr || ye.wake(), this._ts || this.play();
			var s,
				o = Math.min(
					this._dur,
					(this._dp._time - this._start) * this._ts,
				);
			return (
				this._initted || Hs(this, o),
				(s = this._ease(o / this._dur)),
				tu(this, t, e, r, i, s, o, n)
					? this.resetTo(t, e, r, i, 1)
					: (Vn(this, 0),
						this.parent ||
							oa(
								this._dp,
								this,
								"_first",
								"_last",
								this._dp._sort ? "_start" : 0,
							),
						this.render(0))
			);
		}),
		(r.kill = function (t, e) {
			if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
				return (
					(this._lazy = this._pt = 0),
					this.parent
						? Or(this)
						: this.scrollTrigger && this.scrollTrigger.kill(!!Nt),
					this
				);
			if (this.timeline) {
				var r = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(
						t,
						e,
						gi && !0 !== gi.vars.overwrite,
					)._first || Or(this),
					this.parent &&
						r !== this.timeline.totalDuration() &&
						vr(this, (this._dur * this.timeline._tDur) / r, 0, 1),
					this
				);
			}
			var i,
				n,
				s,
				o,
				a,
				l,
				u,
				h = this._targets,
				c = t ? De(t) : h,
				f = this._ptLookup,
				p = this._pt;
			if ((!e || "all" === e) && Dl(h, c))
				return "all" === e && (this._pt = 0), Or(this);
			for (
				i = this._op = this._op || [],
					"all" !== e &&
						(Rt(e) &&
							((a = {}),
							le(e, function (t) {
								return (a[t] = 1);
							}),
							(e = a)),
						(e = eu(h, e))),
					u = h.length;
				u--;
			)
				if (~c.indexOf(h[u]))
					for (a in ((n = f[u]),
					"all" === e
						? ((i[u] = e), (o = n), (s = {}))
						: ((s = i[u] = i[u] || {}), (o = e)),
					o))
						(l = n && n[a]) &&
							((!("kill" in l.d) || !0 === l.d.kill(a)) &&
								Bn(this, l, "_pt"),
							delete n[a]),
							"all" !== s && (s[a] = 1);
			return this._initted && !this._pt && p && Or(this), this;
		}),
		(e.to = function (t, r) {
			return new e(t, r, arguments[2]);
		}),
		(e.from = function (t, e) {
			return Nr(1, arguments);
		}),
		(e.delayedCall = function (t, r, i, n) {
			return new e(r, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: t,
				onComplete: r,
				onReverseComplete: r,
				onCompleteParams: i,
				onReverseCompleteParams: i,
				callbackScope: n,
			});
		}),
		(e.fromTo = function (t, e, r) {
			return Nr(2, arguments);
		}),
		(e.set = function (t, r) {
			return (
				(r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
			);
		}),
		(e.killTweensOf = function (t, e, r) {
			return ft.killTweensOf(t, e, r);
		}),
		e
	);
})(jr);
Ce(bt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
	le("staggerTo,staggerFrom,staggerFromTo", function (t) {
		bt[t] = function () {
			var e = new re(),
				r = _s.call(arguments, 0);
			return (
				r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
			);
		};
	});
var Vs = function (t, e, r) {
		return (t[e] = r);
	},
	Oa = function (t, e, r) {
		return t[e](r);
	},
	ru = function (t, e, r, i) {
		return t[e](i.fp, r);
	},
	nu = function (t, e, r) {
		return t.setAttribute(e, r);
	},
	Us = function (t, e) {
		return pt(t[e]) ? Oa : zs(t[e]) && t.setAttribute ? nu : Vs;
	},
	Ma = function (t, e) {
		return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
	},
	su = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	Da = function (t, e) {
		var r = e._pt,
			i = "";
		if (!t && e.b) i = e.b;
		else if (1 === t && e.e) i = e.e;
		else {
			for (; r; )
				(i =
					r.p +
					(r.m
						? r.m(r.s + r.c * t)
						: Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
					i),
					(r = r._next);
			i += e.c;
		}
		e.set(e.t, e.p, i, e);
	},
	$s = function (t, e) {
		for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
	},
	ou = function (t, e, r, i) {
		for (var n, s = this._pt; s; )
			(n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
	},
	au = function (t) {
		for (var e, r, i = this._pt; i; )
			(r = i._next),
				(i.p === t && !i.op) || i.op === t
					? Bn(this, i, "_pt")
					: i.dep || (e = 1),
				(i = r);
		return !e;
	},
	lu = function (t, e, r, i) {
		i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
	},
	Ra = function (t) {
		for (var e, r, i, n, s = t._pt; s; ) {
			for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
			(s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
				(s._next = r) ? (r._prev = s) : (n = s),
				(s = e);
		}
		t._pt = i;
	},
	ue = (function () {
		function t(t, e, r, i, n, s, o, a, l) {
			(this.t = e),
				(this.s = i),
				(this.c = n),
				(this.p = r),
				(this.r = s || Ma),
				(this.d = o || this),
				(this.set = a || Vs),
				(this.pr = l || 0),
				(this._next = t),
				t && (t._prev = this);
		}
		return (
			(t.prototype.modifier = function (t, e, r) {
				(this.mSet = this.mSet || this.set),
					(this.set = lu),
					(this.m = t),
					(this.mt = r),
					(this.tween = e);
			}),
			t
		);
	})();
le(
	Ys +
		"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
	function (t) {
		return (Is[t] = 1);
	},
),
	(be.TweenMax = be.TweenLite = bt),
	(be.TimelineLite = be.TimelineMax = re),
	(ft = new re({
		sortChildren: !1,
		defaults: pr,
		autoRemoveChildren: !0,
		id: "root",
		smoothChildTiming: !0,
	})),
	(Te.stringFilter = xa);
var Vi = [],
	bn = {},
	uu = [],
	po = 0,
	fu = 0,
	Jn = function (t) {
		return (bn[t] || uu).map(function (t) {
			return t();
		});
	},
	vs = function () {
		var t = Date.now(),
			e = [];
		t - po > 2 &&
			(Jn("matchMediaInit"),
			Vi.forEach(function (t) {
				var r,
					i,
					n,
					s,
					o = t.queries,
					a = t.conditions;
				for (i in o)
					(r = He.matchMedia(o[i]).matches) && (n = 1),
						r !== a[i] && ((a[i] = r), (s = 1));
				s && (t.revert(), n && e.push(t));
			}),
			Jn("matchMediaRevert"),
			e.forEach(function (t) {
				return t.onMatch(t, function (e) {
					return t.add(null, e);
				});
			}),
			(po = t),
			Jn("matchMedia"));
	},
	Aa = (function () {
		function t(t, e) {
			(this.selector = e && ps(e)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = fu++),
				t && this.add(t);
		}
		var e = t.prototype;
		return (
			(e.add = function (t, e, r) {
				pt(t) && ((r = e), (e = t), (t = pt));
				var i = this,
					n = function () {
						var t,
							n = at,
							s = i.selector;
						return (
							n && n !== i && n.data.push(i),
							r && (i.selector = ps(r)),
							(at = i),
							(t = e.apply(i, arguments)),
							pt(t) && i._r.push(t),
							(at = n),
							(i.selector = s),
							(i.isReverted = !1),
							t
						);
					};
				return (
					(i.last = n),
					t === pt
						? n(i, function (t) {
								return i.add(null, t);
							})
						: t
							? (i[t] = n)
							: n
				);
			}),
			(e.ignore = function (t) {
				var e = at;
				(at = null), t(this), (at = e);
			}),
			(e.getTweens = function () {
				var e = [];
				return (
					this.data.forEach(function (r) {
						return r instanceof t
							? e.push.apply(e, r.getTweens())
							: r instanceof bt &&
									!(r.parent && "nested" === r.parent.data) &&
									e.push(r);
					}),
					e
				);
			}),
			(e.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(e.kill = function (t, e) {
				var r = this;
				if (
					(t
						? (function () {
								for (
									var e, i = r.getTweens(), n = r.data.length;
									n--;
								)
									"isFlip" === (e = r.data[n]).data &&
										(e.revert(),
										e
											.getChildren(!0, !0, !1)
											.forEach(function (t) {
												return i.splice(
													i.indexOf(t),
													1,
												);
											}));
								for (
									i
										.map(function (t) {
											return {
												g:
													t._dur ||
													t._delay ||
													(t._sat &&
														!t._sat.vars
															.immediateRender)
														? t.globalTime(0)
														: -1 / 0,
												t: t,
											};
										})
										.sort(function (t, e) {
											return e.g - t.g || -1 / 0;
										})
										.forEach(function (e) {
											return e.t.revert(t);
										}),
										n = r.data.length;
									n--;
								)
									(e = r.data[n]) instanceof re
										? "nested" !== e.data &&
											(e.scrollTrigger &&
												e.scrollTrigger.revert(),
											e.kill())
										: !(e instanceof bt) &&
											e.revert &&
											e.revert(t);
								r._r.forEach(function (e) {
									return e(t, r);
								}),
									(r.isReverted = !0);
							})()
						: this.data.forEach(function (t) {
								return t.kill && t.kill();
							}),
					this.clear(),
					e)
				)
					for (var i = Vi.length; i--; )
						Vi[i].id === this.id && Vi.splice(i, 1);
			}),
			(e.revert = function (t) {
				this.kill(t || {});
			}),
			t
		);
	})(),
	hu = (function () {
		function t(t) {
			(this.contexts = []), (this.scope = t), at && at.data.push(this);
		}
		var e = t.prototype;
		return (
			(e.add = function (t, e, r) {
				Ke(t) || (t = { matches: t });
				var i,
					n,
					s,
					o = new Aa(0, r || this.scope),
					a = (o.conditions = {});
				for (n in (at && !o.selector && (o.selector = at.selector),
				this.contexts.push(o),
				(e = o.add("onMatch", e)),
				(o.queries = t),
				t))
					"all" === n
						? (s = 1)
						: (i = He.matchMedia(t[n])) &&
							(Vi.indexOf(o) < 0 && Vi.push(o),
							(a[n] = i.matches) && (s = 1),
							i.addListener
								? i.addListener(vs)
								: i.addEventListener("change", vs));
				return (
					s &&
						e(o, function (t) {
							return o.add(null, t);
						}),
					this
				);
			}),
			(e.revert = function (t) {
				this.kill(t || {});
			}),
			(e.kill = function (t) {
				this.contexts.forEach(function (e) {
					return e.kill(t, !0);
				});
			}),
			t
		);
	})(),
	Ln = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
				e[r] = arguments[r];
			e.forEach(function (t) {
				return va(t);
			});
		},
		timeline: function (t) {
			return new re(t);
		},
		getTweensOf: function (t, e) {
			return ft.getTweensOf(t, e);
		},
		getProperty: function (t, e, r, i) {
			Rt(t) && (t = De(t)[0]);
			var n = Xi(t || {}).get,
				s = r ? sa : na;
			return (
				"native" === r && (r = ""),
				t &&
					(e
						? s(((me[e] && me[e].get) || n)(t, e, r, i))
						: function (e, r, i) {
								return s(
									((me[e] && me[e].get) || n)(t, e, r, i),
								);
							})
			);
		},
		quickSetter: function (t, e, r) {
			if ((t = De(t)).length > 1) {
				var i = t.map(function (t) {
						return he.quickSetter(t, e, r);
					}),
					n = i.length;
				return function (t) {
					for (var e = n; e--; ) i[e](t);
				};
			}
			t = t[0] || {};
			var s = me[e],
				o = Xi(t),
				a = (o.harness && (o.harness.aliases || {})[e]) || e,
				l = s
					? function (e) {
							var i = new s();
							(ar._pt = 0),
								i.init(t, r ? e + r : e, ar, 0, [t]),
								i.render(1, i),
								ar._pt && $s(1, ar);
						}
					: o.set(t, a);
			return s
				? l
				: function (e) {
						return l(t, a, r ? e + r : e, o, 1);
					};
		},
		quickTo: function (t, e, r) {
			var i,
				n = he.to(
					t,
					Ce(
						(((i = {})[e] = "+=0.1"),
						(i.paused = !0),
						(i.stagger = 0),
						i),
						r || {},
					),
				),
				s = function (t, r, i) {
					return n.resetTo(e, t, r, i);
				};
			return (s.tween = n), s;
		},
		isTweening: function (t) {
			return ft.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return (
				t && t.ease && (t.ease = Hi(t.ease, pr.ease)), uo(pr, t || {})
			);
		},
		config: function (t) {
			return uo(Te, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				r = t.effect,
				i = t.plugins,
				n = t.defaults,
				s = t.extendTimeline;
			(i || "").split(",").forEach(function (t) {
				return (
					t &&
					!me[t] &&
					!be[t] &&
					Kr(e + " effect requires " + t + " plugin.")
				);
			}),
				(Gn[e] = function (t, e, i) {
					return r(De(t), Ce(e || {}, n), i);
				}),
				s &&
					(re.prototype[e] = function (t, r, i) {
						return this.add(
							Gn[e](t, Ke(r) ? r : (i = r) && {}, this),
							i,
						);
					});
		},
		registerEase: function (t, e) {
			G[t] = Hi(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Hi(t, e) : G;
		},
		getById: function (t) {
			return ft.getById(t);
		},
		exportRoot: function (t, e) {
			void 0 === t && (t = {});
			var r,
				i,
				n = new re(t);
			for (
				n.smoothChildTiming = ae(t.smoothChildTiming),
					ft.remove(n),
					n._dp = 0,
					n._time = n._tTime = ft._time,
					r = ft._first;
				r;
			)
				(i = r._next),
					(e ||
						!(
							!r._dur &&
							r instanceof bt &&
							r.vars.onComplete === r._targets[0]
						)) &&
						Ue(n, r, r._start - r._delay),
					(r = i);
			return Ue(ft, n, 0), n;
		},
		context: function (t, e) {
			return t ? new Aa(t, e) : at;
		},
		matchMedia: function (t) {
			return new hu(t);
		},
		matchMediaRefresh: function () {
			return (
				Vi.forEach(function (t) {
					var e,
						r,
						i = t.conditions;
					for (r in i) i[r] && ((i[r] = !1), (e = 1));
					e && t.revert();
				}) || vs()
			);
		},
		addEventListener: function (t, e) {
			var r = bn[t] || (bn[t] = []);
			~r.indexOf(e) || r.push(e);
		},
		removeEventListener: function (t, e) {
			var r = bn[t],
				i = r && r.indexOf(e);
			i >= 0 && r.splice(i, 1);
		},
		utils: {
			wrap: Hl,
			wrapYoyo: Vl,
			distribute: ca,
			random: _a,
			snap: da,
			normalize: Bl,
			getUnit: Ut,
			clamp: Il,
			splitColor: ya,
			toArray: De,
			selector: ps,
			mapRange: ga,
			pipe: Wl,
			unitize: Xl,
			interpolate: Ul,
			shuffle: ha,
		},
		install: jo,
		effects: Gn,
		ticker: ye,
		updateRoot: re.updateRoot,
		plugins: me,
		globalTimeline: ft,
		core: {
			PropTween: ue,
			globals: ta,
			Tween: bt,
			Timeline: re,
			Animation: jr,
			getCache: Xi,
			_removeLinkedListItem: Bn,
			reverting: function () {
				return Nt;
			},
			context: function (t) {
				return t && at && (at.data.push(t), (t._ctx = at)), at;
			},
			suppressOverwrites: function (t) {
				return (As = t);
			},
		},
	};
le("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
	return (Ln[t] = bt[t]);
}),
	ye.add(re.updateRoot),
	(ar = Ln.to({}, { duration: 0 }));
var cu = function (t, e) {
		for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
			r = r._next;
		return r;
	},
	du = function (t, e) {
		var r,
			i,
			n,
			s = t._targets;
		for (r in e)
			for (i = s.length; i--; )
				(n = t._ptLookup[i][r]) &&
					(n = n.d) &&
					(n._pt && (n = cu(n, r)),
					n && n.modifier && n.modifier(e[r], t, s[i], r));
	},
	jn = function (t, e) {
		return {
			name: t,
			headless: 1,
			rawVars: 1,
			init: function (t, r, i) {
				i._onInit = function (t) {
					var i, n;
					if (
						(Rt(r) &&
							((i = {}),
							le(r, function (t) {
								return (i[t] = 1);
							}),
							(r = i)),
						e)
					) {
						for (n in ((i = {}), r)) i[n] = e(r[n]);
						r = i;
					}
					du(t, r);
				};
			},
		};
	},
	he =
		Ln.registerPlugin(
			{
				name: "attr",
				init: function (t, e, r, i, n) {
					var s, o, a;
					for (s in ((this.tween = r), e))
						(a = t.getAttribute(s) || ""),
							((o = this.add(
								t,
								"setAttribute",
								(a || 0) + "",
								e[s],
								i,
								n,
								0,
								0,
								s,
							)).op = s),
							(o.b = a),
							this._props.push(s);
				},
				render: function (t, e) {
					for (var r = e._pt; r; )
						Nt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
							(r = r._next);
				},
			},
			{
				name: "endArray",
				headless: 1,
				init: function (t, e) {
					for (var r = e.length; r--; )
						this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
				},
			},
			jn("roundProps", gs),
			jn("modifiers"),
			jn("snap", da),
		) || Ln;
(bt.version = re.version = he.version = "3.14.1"),
	(Jo = 1),
	Ls() && yr(),
	G.Power0,
	G.Power1,
	G.Power2,
	G.Power3,
	G.Power4,
	G.Linear,
	G.Quad,
	G.Cubic,
	G.Quart,
	G.Quint,
	G.Strong,
	G.Elastic,
	G.Back,
	G.SteppedEase,
	G.Bounce,
	G.Sine,
	G.Expo,
	G.Circ;
var go,
	mi,
	fr,
	qs,
	Yi,
	mo,
	Gs,
	Ia,
	_u = function () {
		return typeof window < "u";
	},
	ai = {},
	Fi = 180 / Math.PI,
	hr = Math.PI / 180,
	er = Math.atan2,
	vo = 1e8,
	Ks = /([A-Z])/g,
	pu = /(left|right|width|margin|padding|x)/i,
	gu = /[\s,\(]\S/,
	$e = {
		autoAlpha: "opacity,visibility",
		scale: "scaleX,scaleY",
		alpha: "opacity",
	},
	ys = function (t, e) {
		return e.set(
			e.t,
			e.p,
			Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
			e,
		);
	},
	mu = function (t, e) {
		return e.set(
			e.t,
			e.p,
			1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
			e,
		);
	},
	vu = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
			e,
		);
	},
	yu = function (t, e) {
		return e.set(
			e.t,
			e.p,
			1 === t
				? e.e
				: t
					? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u
					: e.b,
			e,
		);
	},
	wu = function (t, e) {
		var r = e.s + e.c * t;
		e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	za = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	La = function (t, e) {
		return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
	},
	xu = function (t, e, r) {
		return (t.style[e] = r);
	},
	Su = function (t, e, r) {
		return t.style.setProperty(e, r);
	},
	Tu = function (t, e, r) {
		return (t._gsap[e] = r);
	},
	bu = function (t, e, r) {
		return (t._gsap.scaleX = t._gsap.scaleY = r);
	},
	Cu = function (t, e, r, i, n) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = r), s.renderTransform(n, s);
	},
	ku = function (t, e, r, i, n) {
		var s = t._gsap;
		(s[e] = r), s.renderTransform(n, s);
	},
	ht = "transform",
	fe = ht + "Origin",
	Pu = function t(e, r) {
		var i = this,
			n = this.target,
			s = n.style,
			o = n._gsap;
		if (e in ai && s) {
			if (((this.tfm = this.tfm || {}), "transform" === e))
				return $e.transform.split(",").forEach(function (e) {
					return t.call(i, e, r);
				});
			if (
				(~(e = $e[e] || e).indexOf(",")
					? e.split(",").forEach(function (t) {
							return (i.tfm[t] = ii(n, t));
						})
					: (this.tfm[e] = o.x ? o[e] : ii(n, e)),
				e === fe && (this.tfm.zOrigin = o.zOrigin),
				this.props.indexOf(ht) >= 0)
			)
				return;
			o.svg &&
				((this.svgo = n.getAttribute("data-svg-origin")),
				this.props.push(fe, r, "")),
				(e = ht);
		}
		(s || r) && this.props.push(e, r, s[e]);
	},
	Fa = function (t) {
		t.translate &&
			(t.removeProperty("translate"),
			t.removeProperty("scale"),
			t.removeProperty("rotate"));
	},
	Eu = function () {
		var t,
			e,
			r = this.props,
			i = this.target,
			n = i.style,
			s = i._gsap;
		for (t = 0; t < r.length; t += 3)
			r[t + 1]
				? 2 === r[t + 1]
					? i[r[t]](r[t + 2])
					: (i[r[t]] = r[t + 2])
				: r[t + 2]
					? (n[r[t]] = r[t + 2])
					: n.removeProperty(
							"--" === r[t].substr(0, 2)
								? r[t]
								: r[t].replace(Ks, "-$1").toLowerCase(),
						);
		if (this.tfm) {
			for (e in this.tfm) s[e] = this.tfm[e];
			s.svg &&
				(s.renderTransform(),
				i.setAttribute("data-svg-origin", this.svgo || "")),
				(!(t = Gs()) || !t.isStart) &&
					!n[ht] &&
					(Fa(n),
					s.zOrigin &&
						n[fe] &&
						((n[fe] += " " + s.zOrigin + "px"),
						(s.zOrigin = 0),
						s.renderTransform()),
					(s.uncache = 1));
		}
	},
	Na = function (t, e) {
		var r = { target: t, props: [], revert: Eu, save: Pu };
		return (
			t._gsap || he.core.getCache(t),
			e &&
				t.style &&
				t.nodeType &&
				e.split(",").forEach(function (t) {
					return r.save(t);
				}),
			r
		);
	},
	ws = function (t, e) {
		var r = mi.createElementNS
			? mi.createElementNS(
					(e || "http://www.w3.org/1999/xhtml").replace(
						/^https/,
						"http",
					),
					t,
				)
			: mi.createElement(t);
		return r && r.style ? r : mi.createElement(t);
	},
	Se = function t(e, r, i) {
		var n = getComputedStyle(e);
		return (
			n[r] ||
			n.getPropertyValue(r.replace(Ks, "-$1").toLowerCase()) ||
			n.getPropertyValue(r) ||
			(!i && t(e, wr(r) || r, 1)) ||
			""
		);
	},
	yo = "O,Moz,ms,Ms,Webkit".split(","),
	wr = function (t, e, r) {
		var i = (e || Yi).style,
			n = 5;
		if (t in i && !r) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			n-- && !(yo[n] + t in i);
		);
		return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? yo[n] : "") + t;
	},
	xs = function () {
		_u() &&
			window.document &&
			((go = window),
			(mi = go.document),
			(fr = mi.documentElement),
			(Yi = ws("div") || { style: {} }),
			ws("div"),
			(ht = wr(ht)),
			(fe = ht + "Origin"),
			(Yi.style.cssText =
				"border-width:0;line-height:0;position:absolute;padding:0"),
			(Ia = !!wr("perspective")),
			(Gs = he.core.reverting),
			(qs = 1));
	},
	wo = function (t) {
		var e,
			r = t.ownerSVGElement,
			i = ws(
				"svg",
				(r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
			),
			n = t.cloneNode(!0);
		(n.style.display = "block"), i.appendChild(n), fr.appendChild(i);
		try {
			e = n.getBBox();
		} catch {}
		return i.removeChild(n), fr.removeChild(i), e;
	},
	xo = function (t, e) {
		for (var r = e.length; r--; )
			if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
	},
	Ya = function (t) {
		var e, r;
		try {
			e = t.getBBox();
		} catch {
			(e = wo(t)), (r = 1);
		}
		return (
			(e && (e.width || e.height)) || r || (e = wo(t)),
			!e || e.width || e.x || e.y
				? e
				: {
						x: +xo(t, ["x", "cx", "x1"]) || 0,
						y: +xo(t, ["y", "cy", "y1"]) || 0,
						width: 0,
						height: 0,
					}
		);
	},
	Wa = function (t) {
		return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Ya(t));
	},
	Ci = function (t, e) {
		if (e) {
			var r,
				i = t.style;
			e in ai && e !== fe && (e = ht),
				i.removeProperty
					? (("ms" === (r = e.substr(0, 2)) ||
							"webkit" === e.substr(0, 6)) &&
							(e = "-" + e),
						i.removeProperty(
							"--" === r ? e : e.replace(Ks, "-$1").toLowerCase(),
						))
					: i.removeAttribute(e);
		}
	},
	vi = function (t, e, r, i, n, s) {
		var o = new ue(t._pt, e, r, 0, 1, s ? La : za);
		return (t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o;
	},
	So = { deg: 1, rad: 1, turn: 1 },
	Ou = { grid: 1, flex: 1 },
	ki = function t(e, r, i, n) {
		var s,
			o,
			a,
			l,
			u = parseFloat(i) || 0,
			h = (i + "").trim().substr((u + "").length) || "px",
			c = Yi.style,
			f = pu.test(r),
			p = "svg" === e.tagName.toLowerCase(),
			d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
			m = 100,
			g = "px" === n,
			v = "%" === n;
		if (n === h || !u || So[n] || So[h]) return u;
		if (
			("px" !== h && !g && (u = t(e, r, i, "px")),
			(l = e.getCTM && Wa(e)),
			(v || "%" === h) && (ai[r] || ~r.indexOf("adius")))
		)
			return (
				(s = l ? e.getBBox()[f ? "width" : "height"] : e[d]),
				yt(v ? (u / s) * m : (u / 100) * s)
			);
		if (
			((c[f ? "width" : "height"] = m + (g ? h : n)),
			(o =
				("rem" !== n && ~r.indexOf("adius")) ||
				("em" === n && e.appendChild && !p)
					? e
					: e.parentNode),
			l && (o = (e.ownerSVGElement || {}).parentNode),
			(!o || o === mi || !o.appendChild) && (o = mi.body),
			(a = o._gsap) &&
				v &&
				a.width &&
				f &&
				a.time === ye.time &&
				!a.uncache)
		)
			return yt((u / a.width) * m);
		if (!v || ("height" !== r && "width" !== r))
			(v || "%" === h) &&
				!Ou[Se(o, "display")] &&
				(c.position = Se(e, "position")),
				o === e && (c.position = "static"),
				o.appendChild(Yi),
				(s = Yi[d]),
				o.removeChild(Yi),
				(c.position = "absolute");
		else {
			var _ = e.style[r];
			(e.style[r] = m + n), (s = e[d]), _ ? (e.style[r] = _) : Ci(e, r);
		}
		return (
			f && v && (((a = Xi(o)).time = ye.time), (a.width = o[d])),
			yt(g ? (s * u) / m : s && u ? (m / s) * u : 0)
		);
	},
	ii = function (t, e, r, i) {
		var n;
		return (
			qs || xs(),
			e in $e &&
				"transform" !== e &&
				~(e = $e[e]).indexOf(",") &&
				(e = e.split(",")[0]),
			ai[e] && "transform" !== e
				? ((n = en(t, i)),
					(n =
						"transformOrigin" !== e
							? n[e]
							: n.svg
								? n.origin
								: Nn(Se(t, fe)) + " " + n.zOrigin + "px"))
				: (!(n = t.style[e]) ||
						"auto" === n ||
						i ||
						~(n + "").indexOf("calc(")) &&
					(n =
						(Fn[e] && Fn[e](t, e, r)) ||
						Se(t, e) ||
						ia(t, e) ||
						("opacity" === e ? 1 : 0)),
			r && !~(n + "").trim().indexOf(" ") ? ki(t, e, n, r) + r : n
		);
	},
	Mu = function (t, e, r, i) {
		if (!r || "none" === r) {
			var n = wr(e, t, 1),
				s = n && Se(t, n, 1);
			s && s !== r
				? ((e = n), (r = s))
				: "borderColor" === e && (r = Se(t, "borderTopColor"));
		}
		var o,
			a,
			l,
			u,
			h,
			c,
			f,
			p,
			d,
			m,
			g,
			v = new ue(this._pt, t.style, e, 0, 1, Da),
			_ = 0,
			y = 0;
		if (
			((v.b = r),
			(v.e = i),
			(r += ""),
			"var(--" === (i += "").substring(0, 6) &&
				(i = Se(t, i.substring(4, i.indexOf(")")))),
			"auto" === i &&
				((c = t.style[e]),
				(t.style[e] = i),
				(i = Se(t, e) || i),
				c ? (t.style[e] = c) : Ci(t, e)),
			xa((o = [r, i])),
			(i = o[1]),
			(l = (r = o[0]).match(or) || []),
			(i.match(or) || []).length)
		) {
			for (; (a = or.exec(i)); )
				(f = a[0]),
					(d = i.substring(_, a.index)),
					h
						? (h = (h + 1) % 5)
						: ("rgba(" === d.substr(-5) ||
								"hsla(" === d.substr(-5)) &&
							(h = 1),
					f !== (c = l[y++] || "") &&
						((u = parseFloat(c) || 0),
						(g = c.substr((u + "").length)),
						"=" === f.charAt(1) && (f = ur(u, f) + g),
						(p = parseFloat(f)),
						(m = f.substr((p + "").length)),
						(_ = or.lastIndex - m.length),
						m ||
							((m = m || Te.units[e] || g),
							_ === i.length && ((i += m), (v.e += m))),
						g !== m && (u = ki(t, e, c, m) || 0),
						(v._pt = {
							_next: v._pt,
							p: d || 1 === y ? d : ",",
							s: u,
							c: p - u,
							m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
						}));
			v.c = _ < i.length ? i.substring(_, i.length) : "";
		} else v.r = "display" === e && "none" === i ? La : za;
		return Zo.test(i) && (v.e = 0), (this._pt = v), v;
	},
	To = {
		top: "0%",
		bottom: "100%",
		left: "0%",
		right: "100%",
		center: "50%",
	},
	Du = function (t) {
		var e = t.split(" "),
			r = e[0],
			i = e[1] || "50%";
		return (
			("top" === r || "bottom" === r || "left" === i || "right" === i) &&
				((t = r), (r = i), (i = t)),
			(e[0] = To[r] || r),
			(e[1] = To[i] || i),
			e.join(" ")
		);
	},
	Ru = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var r,
				i,
				n,
				s = e.t,
				o = s.style,
				a = e.u,
				l = s._gsap;
			if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
			else
				for (n = (a = a.split(",")).length; --n > -1; )
					(r = a[n]),
						ai[r] &&
							((i = 1), (r = "transformOrigin" === r ? fe : ht)),
						Ci(s, r);
			i &&
				(Ci(s, ht),
				l &&
					(l.svg && s.removeAttribute("transform"),
					(o.scale = o.rotate = o.translate = "none"),
					en(s, 1),
					(l.uncache = 1),
					Fa(o)));
		}
	},
	Fn = {
		clearProps: function (t, e, r, i, n) {
			if ("isFromStart" !== n.data) {
				var s = (t._pt = new ue(t._pt, e, r, 0, 0, Ru));
				return (
					(s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
				);
			}
		},
	},
	tn = [1, 0, 0, 1, 0, 0],
	Xa = {},
	Ba = function (t) {
		return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
	},
	bo = function (t) {
		var e = Se(t, ht);
		return Ba(e) ? tn : e.substr(7).match(Qo).map(yt);
	},
	Qs = function (t, e) {
		var r,
			i,
			n,
			s,
			o = t._gsap || Xi(t),
			a = t.style,
			l = bo(t);
		return o.svg && t.getAttribute("transform")
			? "1,0,0,1,0,0" ===
				(l = [
					(n = t.transform.baseVal.consolidate().matrix).a,
					n.b,
					n.c,
					n.d,
					n.e,
					n.f,
				]).join(",")
				? tn
				: l
			: (l === tn &&
					!t.offsetParent &&
					t !== fr &&
					!o.svg &&
					((n = a.display),
					(a.display = "block"),
					(!(r = t.parentNode) ||
						(!t.offsetParent &&
							!t.getBoundingClientRect().width)) &&
						((s = 1),
						(i = t.nextElementSibling),
						fr.appendChild(t)),
					(l = bo(t)),
					n ? (a.display = n) : Ci(t, "display"),
					s &&
						(i
							? r.insertBefore(t, i)
							: r
								? r.appendChild(t)
								: fr.removeChild(t))),
				e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
	},
	Ss = function (t, e, r, i, n, s) {
		var o,
			a,
			l,
			u = t._gsap,
			h = n || Qs(t, !0),
			c = u.xOrigin || 0,
			f = u.yOrigin || 0,
			p = u.xOffset || 0,
			d = u.yOffset || 0,
			m = h[0],
			g = h[1],
			v = h[2],
			_ = h[3],
			y = h[4],
			w = h[5],
			b = e.split(" "),
			x = parseFloat(b[0]) || 0,
			T = parseFloat(b[1]) || 0;
		r
			? h !== tn &&
				(a = m * _ - g * v) &&
				((l = x * (-g / a) + T * (m / a) - (m * w - g * y) / a),
				(x = x * (_ / a) + T * (-v / a) + (v * w - _ * y) / a),
				(T = l))
			: ((x =
					(o = Ya(t)).x +
					(~b[0].indexOf("%") ? (x / 100) * o.width : x)),
				(T =
					o.y +
					(~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
			i || (!1 !== i && u.smooth)
				? ((y = x - c),
					(w = T - f),
					(u.xOffset = p + (y * m + w * v) - y),
					(u.yOffset = d + (y * g + w * _) - w))
				: (u.xOffset = u.yOffset = 0),
			(u.xOrigin = x),
			(u.yOrigin = T),
			(u.smooth = !!i),
			(u.origin = e),
			(u.originIsAbsolute = !!r),
			(t.style[fe] = "0px 0px"),
			s &&
				(vi(s, u, "xOrigin", c, x),
				vi(s, u, "yOrigin", f, T),
				vi(s, u, "xOffset", p, u.xOffset),
				vi(s, u, "yOffset", d, u.yOffset)),
			t.setAttribute("data-svg-origin", x + " " + T);
	},
	en = function (t, e) {
		var r = t._gsap || new Ca(t);
		if ("x" in r && !e && !r.uncache) return r;
		var i,
			n,
			s,
			o,
			a,
			l,
			u,
			h,
			c,
			f,
			p,
			d,
			m,
			g,
			v,
			_,
			y,
			w,
			b,
			x,
			T,
			S,
			M,
			D,
			k,
			E,
			O,
			C,
			P,
			R,
			z,
			A,
			Y = t.style,
			F = r.scaleX < 0,
			X = "px",
			N = "deg",
			V = getComputedStyle(t),
			W = Se(t, fe) || "0";
		return (
			(i = n = s = l = u = h = c = f = p = 0),
			(o = a = 1),
			(r.svg = !(!t.getCTM || !Wa(t))),
			V.translate &&
				(("none" !== V.translate ||
					"none" !== V.scale ||
					"none" !== V.rotate) &&
					(Y[ht] =
						("none" !== V.translate
							? "translate3d(" +
								(V.translate + " 0 0")
									.split(" ")
									.slice(0, 3)
									.join(", ") +
								") "
							: "") +
						("none" !== V.rotate
							? "rotate(" + V.rotate + ") "
							: "") +
						("none" !== V.scale
							? "scale(" + V.scale.split(" ").join(",") + ") "
							: "") +
						("none" !== V[ht] ? V[ht] : "")),
				(Y.scale = Y.rotate = Y.translate = "none")),
			(g = Qs(t, r.svg)),
			r.svg &&
				(r.uncache
					? ((k = t.getBBox()),
						(W =
							r.xOrigin - k.x + "px " + (r.yOrigin - k.y) + "px"),
						(D = ""))
					: (D = !e && t.getAttribute("data-svg-origin")),
				Ss(t, D || W, !!D || r.originIsAbsolute, !1 !== r.smooth, g)),
			(d = r.xOrigin || 0),
			(m = r.yOrigin || 0),
			g !== tn &&
				((w = g[0]),
				(b = g[1]),
				(x = g[2]),
				(T = g[3]),
				(i = S = g[4]),
				(n = M = g[5]),
				6 === g.length
					? ((o = Math.sqrt(w * w + b * b)),
						(a = Math.sqrt(T * T + x * x)),
						(l = w || b ? er(b, w) * Fi : 0),
						(c = x || T ? er(x, T) * Fi + l : 0) &&
							(a *= Math.abs(Math.cos(c * hr))),
						r.svg &&
							((i -= d - (d * w + m * x)),
							(n -= m - (d * b + m * T))))
					: ((A = g[6]),
						(R = g[7]),
						(O = g[8]),
						(C = g[9]),
						(P = g[10]),
						(z = g[11]),
						(i = g[12]),
						(n = g[13]),
						(s = g[14]),
						(u = (v = er(A, P)) * Fi),
						v &&
							((D =
								S * (_ = Math.cos(-v)) +
								O * (y = Math.sin(-v))),
							(k = M * _ + C * y),
							(E = A * _ + P * y),
							(O = S * -y + O * _),
							(C = M * -y + C * _),
							(P = A * -y + P * _),
							(z = R * -y + z * _),
							(S = D),
							(M = k),
							(A = E)),
						(h = (v = er(-x, P)) * Fi),
						v &&
							((_ = Math.cos(-v)),
							(z = T * (y = Math.sin(-v)) + z * _),
							(w = D = w * _ - O * y),
							(b = k = b * _ - C * y),
							(x = E = x * _ - P * y)),
						(l = (v = er(b, w)) * Fi),
						v &&
							((D =
								w * (_ = Math.cos(v)) + b * (y = Math.sin(v))),
							(k = S * _ + M * y),
							(b = b * _ - w * y),
							(M = M * _ - S * y),
							(w = D),
							(S = k)),
						u &&
							Math.abs(u) + Math.abs(l) > 359.9 &&
							((u = l = 0), (h = 180 - h)),
						(o = yt(Math.sqrt(w * w + b * b + x * x))),
						(a = yt(Math.sqrt(M * M + A * A))),
						(v = er(S, M)),
						(c = Math.abs(v) > 2e-4 ? v * Fi : 0),
						(p = z ? 1 / (z < 0 ? -z : z) : 0)),
				r.svg &&
					((D = t.getAttribute("transform")),
					(r.forceCSS =
						t.setAttribute("transform", "") || !Ba(Se(t, ht))),
					D && t.setAttribute("transform", D))),
			Math.abs(c) > 90 &&
				Math.abs(c) < 270 &&
				(F
					? ((o *= -1),
						(c += l <= 0 ? 180 : -180),
						(l += l <= 0 ? 180 : -180))
					: ((a *= -1), (c += c <= 0 ? 180 : -180))),
			(e = e || r.uncache),
			(r.x =
				i -
				((r.xPercent =
					i &&
					((!e && r.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-i)
							? -50
							: 0)))
					? (t.offsetWidth * r.xPercent) / 100
					: 0) +
				X),
			(r.y =
				n -
				((r.yPercent =
					n &&
					((!e && r.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-n)
							? -50
							: 0)))
					? (t.offsetHeight * r.yPercent) / 100
					: 0) +
				X),
			(r.z = s + X),
			(r.scaleX = yt(o)),
			(r.scaleY = yt(a)),
			(r.rotation = yt(l) + N),
			(r.rotationX = yt(u) + N),
			(r.rotationY = yt(h) + N),
			(r.skewX = c + N),
			(r.skewY = f + N),
			(r.transformPerspective = p + X),
			(r.zOrigin =
				parseFloat(W.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
				(Y[fe] = Nn(W)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = Te.force3D),
			(r.renderTransform = r.svg ? zu : Ia ? Ha : Au),
			(r.uncache = 0),
			r
		);
	},
	Nn = function (t) {
		return (t = t.split(" "))[0] + " " + t[1];
	},
	ts = function (t, e, r) {
		var i = Ut(e);
		return yt(parseFloat(e) + parseFloat(ki(t, "x", r + "px", i))) + i;
	},
	Au = function (t, e) {
		(e.z = "0px"),
			(e.rotationY = e.rotationX = "0deg"),
			(e.force3D = 0),
			Ha(t, e);
	},
	zi = "0deg",
	kr = "0px",
	Li = ") ",
	Ha = function (t, e) {
		var r = e || this,
			i = r.xPercent,
			n = r.yPercent,
			s = r.x,
			o = r.y,
			a = r.z,
			l = r.rotation,
			u = r.rotationY,
			h = r.rotationX,
			c = r.skewX,
			f = r.skewY,
			p = r.scaleX,
			d = r.scaleY,
			m = r.transformPerspective,
			g = r.force3D,
			v = r.target,
			_ = r.zOrigin,
			y = "",
			w = ("auto" === g && t && 1 !== t) || !0 === g;
		if (_ && (h !== zi || u !== zi)) {
			var b,
				x = parseFloat(u) * hr,
				T = Math.sin(x),
				S = Math.cos(x);
			(x = parseFloat(h) * hr),
				(b = Math.cos(x)),
				(s = ts(v, s, T * b * -_)),
				(o = ts(v, o, -Math.sin(x) * -_)),
				(a = ts(v, a, S * b * -_ + _));
		}
		m !== kr && (y += "perspective(" + m + Li),
			(i || n) && (y += "translate(" + i + "%, " + n + "%) "),
			(w || s !== kr || o !== kr || a !== kr) &&
				(y +=
					a !== kr || w
						? "translate3d(" + s + ", " + o + ", " + a + ") "
						: "translate(" + s + ", " + o + Li),
			l !== zi && (y += "rotate(" + l + Li),
			u !== zi && (y += "rotateY(" + u + Li),
			h !== zi && (y += "rotateX(" + h + Li),
			(c !== zi || f !== zi) && (y += "skew(" + c + ", " + f + Li),
			(1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + Li),
			(v.style[ht] = y || "translate(0, 0)");
	},
	zu = function (t, e) {
		var r,
			i,
			n,
			s,
			o,
			a = e || this,
			l = a.xPercent,
			u = a.yPercent,
			h = a.x,
			c = a.y,
			f = a.rotation,
			p = a.skewX,
			d = a.skewY,
			m = a.scaleX,
			g = a.scaleY,
			v = a.target,
			_ = a.xOrigin,
			y = a.yOrigin,
			w = a.xOffset,
			b = a.yOffset,
			x = a.forceCSS,
			T = parseFloat(h),
			S = parseFloat(c);
		(f = parseFloat(f)),
			(p = parseFloat(p)),
			(d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
			f || p
				? ((f *= hr),
					(p *= hr),
					(r = Math.cos(f) * m),
					(i = Math.sin(f) * m),
					(n = Math.sin(f - p) * -g),
					(s = Math.cos(f - p) * g),
					p &&
						((d *= hr),
						(o = Math.tan(p - d)),
						(n *= o = Math.sqrt(1 + o * o)),
						(s *= o),
						d &&
							((o = Math.tan(d)),
							(r *= o = Math.sqrt(1 + o * o)),
							(i *= o))),
					(r = yt(r)),
					(i = yt(i)),
					(n = yt(n)),
					(s = yt(s)))
				: ((r = m), (s = g), (i = n = 0)),
			((T && !~(h + "").indexOf("px")) ||
				(S && !~(c + "").indexOf("px"))) &&
				((T = ki(v, "x", h, "px")), (S = ki(v, "y", c, "px"))),
			(_ || y || w || b) &&
				((T = yt(T + _ - (_ * r + y * n) + w)),
				(S = yt(S + y - (_ * i + y * s) + b))),
			(l || u) &&
				((o = v.getBBox()),
				(T = yt(T + (l / 100) * o.width)),
				(S = yt(S + (u / 100) * o.height))),
			(o =
				"matrix(" +
				r +
				"," +
				i +
				"," +
				n +
				"," +
				s +
				"," +
				T +
				"," +
				S +
				")"),
			v.setAttribute("transform", o),
			x && (v.style[ht] = o);
	},
	Lu = function (t, e, r, i, n) {
		var s,
			o,
			a = 360,
			l = Rt(n),
			u = parseFloat(n) * (l && ~n.indexOf("rad") ? Fi : 1) - i,
			h = i + u + "deg";
		return (
			l &&
				("short" === (s = n.split("_")[1]) &&
					(u %= a) !== u % 180 &&
					(u += u < 0 ? a : -a),
				"cw" === s && u < 0
					? (u = ((u + a * vo) % a) - ~~(u / a) * a)
					: "ccw" === s &&
						u > 0 &&
						(u = ((u - a * vo) % a) - ~~(u / a) * a)),
			(t._pt = o = new ue(t._pt, e, r, i, u, mu)),
			(o.e = h),
			(o.u = "deg"),
			t._props.push(r),
			o
		);
	},
	Co = function (t, e) {
		for (var r in e) t[r] = e[r];
		return t;
	},
	Fu = function (t, e, r) {
		var i,
			n,
			s,
			o,
			a,
			l,
			u,
			h = Co({}, r._gsap),
			c = r.style;
		for (n in (h.svg
			? ((s = r.getAttribute("transform")),
				r.setAttribute("transform", ""),
				(c[ht] = e),
				(i = en(r, 1)),
				Ci(r, ht),
				r.setAttribute("transform", s))
			: ((s = getComputedStyle(r)[ht]),
				(c[ht] = e),
				(i = en(r, 1)),
				(c[ht] = s)),
		ai))
			(s = h[n]) !== (o = i[n]) &&
				"perspective,force3D,transformOrigin,svgOrigin".indexOf(n) <
					0 &&
				((a = Ut(s) !== (u = Ut(o)) ? ki(r, n, s, u) : parseFloat(s)),
				(l = parseFloat(o)),
				(t._pt = new ue(t._pt, i, n, a, l - a, ys)),
				(t._pt.u = u || 0),
				t._props.push(n));
		Co(i, h);
	};
le("padding,margin,Width,Radius", function (t, e) {
	var r = "Top",
		i = "Right",
		n = "Bottom",
		s = "Left",
		o = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
			function (r) {
				return e < 2 ? t + r : "border" + r + t;
			},
		);
	Fn[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
		var s, a;
		if (arguments.length < 4)
			return (
				(s = o.map(function (e) {
					return ii(t, e, r);
				})),
				5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
			);
		(s = (i + "").split(" ")),
			(a = {}),
			o.forEach(function (t, e) {
				return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
			}),
			t.init(e, a, n);
	};
});
var Va = {
	name: "css",
	register: xs,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, r, i, n) {
		var s,
			o,
			a,
			l,
			u,
			h,
			c,
			f,
			p,
			d,
			m,
			g,
			v,
			_,
			y,
			w,
			b,
			x = this._props,
			T = t.style,
			S = r.vars.startAt;
		for (c in (qs || xs(),
		(this.styles = this.styles || Na(t)),
		(w = this.styles.props),
		(this.tween = r),
		e))
			if (
				"autoRound" !== c &&
				((o = e[c]), !me[c] || !ka(c, e, r, i, t, n))
			)
				if (
					((u = typeof o),
					(h = Fn[c]),
					"function" === u && (u = typeof (o = o.call(r, i, t, n))),
					"string" === u && ~o.indexOf("random(") && (o = Zr(o)),
					h)
				)
					h(this, t, c, o, r) && (y = 1);
				else if ("--" === c.substr(0, 2))
					(s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
						(o += ""),
						(Si.lastIndex = 0),
						Si.test(s) ||
							((f = Ut(s)),
							(p = Ut(o))
								? f !== p && (s = ki(t, c, s, p) + p)
								: f && (o += f)),
						this.add(T, "setProperty", s, o, i, n, 0, 0, c),
						x.push(c),
						w.push(c, 0, T[c]);
				else if ("undefined" !== u) {
					if (
						(S && c in S
							? ((s =
									"function" == typeof S[c]
										? S[c].call(r, i, t, n)
										: S[c]),
								Rt(s) && ~s.indexOf("random(") && (s = Zr(s)),
								Ut(s + "") ||
									"auto" === s ||
									(s += Te.units[c] || Ut(ii(t, c)) || ""),
								"=" === (s + "").charAt(1) && (s = ii(t, c)))
							: (s = ii(t, c)),
						(l = parseFloat(s)),
						(d =
							"string" === u &&
							"=" === o.charAt(1) &&
							o.substr(0, 2)) && (o = o.substr(2)),
						(a = parseFloat(o)),
						c in $e &&
							("autoAlpha" === c &&
								(1 === l &&
									"hidden" === ii(t, "visibility") &&
									a &&
									(l = 0),
								w.push("visibility", 0, T.visibility),
								vi(
									this,
									T,
									"visibility",
									l ? "inherit" : "hidden",
									a ? "inherit" : "hidden",
									!a,
								)),
							"scale" !== c &&
								"transform" !== c &&
								~(c = $e[c]).indexOf(",") &&
								(c = c.split(",")[0])),
						(m = c in ai))
					) {
						if (
							(this.styles.save(c),
							(b = o),
							"string" === u && "var(--" === o.substring(0, 6))
						) {
							if (
								"calc(" ===
								(o = Se(
									t,
									o.substring(4, o.indexOf(")")),
								)).substring(0, 5)
							) {
								var M = t.style.perspective;
								(t.style.perspective = o),
									(o = Se(t, "perspective")),
									M
										? (t.style.perspective = M)
										: Ci(t, "perspective");
							}
							a = parseFloat(o);
						}
						if (
							(g ||
								(((v = t._gsap).renderTransform &&
									!e.parseTransform) ||
									en(t, e.parseTransform),
								(_ = !1 !== e.smoothOrigin && v.smooth),
								((g = this._pt =
									new ue(
										this._pt,
										T,
										ht,
										0,
										1,
										v.renderTransform,
										v,
										0,
										-1,
									)).dep = 1)),
							"scale" === c)
						)
							(this._pt = new ue(
								this._pt,
								v,
								"scaleY",
								v.scaleY,
								(d ? ur(v.scaleY, d + a) : a) - v.scaleY || 0,
								ys,
							)),
								(this._pt.u = 0),
								x.push("scaleY", c),
								(c += "X");
						else {
							if ("transformOrigin" === c) {
								w.push(fe, 0, T[fe]),
									(o = Du(o)),
									v.svg
										? Ss(t, o, 0, _, 0, this)
										: ((p =
												parseFloat(o.split(" ")[2]) ||
												0) !== v.zOrigin &&
												vi(
													this,
													v,
													"zOrigin",
													v.zOrigin,
													p,
												),
											vi(this, T, c, Nn(s), Nn(o)));
								continue;
							}
							if ("svgOrigin" === c) {
								Ss(t, o, 1, _, 0, this);
								continue;
							}
							if (c in Xa) {
								Lu(this, v, c, l, d ? ur(l, d + o) : o);
								continue;
							}
							if ("smoothOrigin" === c) {
								vi(this, v, "smooth", v.smooth, o);
								continue;
							}
							if ("force3D" === c) {
								v[c] = o;
								continue;
							}
							if ("transform" === c) {
								Fu(this, o, t);
								continue;
							}
						}
					} else c in T || (c = wr(c) || c);
					if (
						m ||
						((a || 0 === a) &&
							(l || 0 === l) &&
							!gu.test(o) &&
							c in T)
					)
						a || (a = 0),
							(f = (s + "").substr((l + "").length)) !==
								(p =
									Ut(o) ||
									(c in Te.units ? Te.units[c] : f)) &&
								(l = ki(t, c, s, p)),
							(this._pt = new ue(
								this._pt,
								m ? v : T,
								c,
								l,
								(d ? ur(l, d + a) : a) - l,
								m ||
									("px" !== p && "zIndex" !== c) ||
									!1 === e.autoRound
									? ys
									: wu,
							)),
							(this._pt.u = p || 0),
							m && b !== o
								? ((this._pt.b = s),
									(this._pt.e = b),
									(this._pt.r = yu))
								: f !== p &&
									"%" !== p &&
									((this._pt.b = s), (this._pt.r = vu));
					else if (c in T) Mu.call(this, t, c, s, d ? d + o : o);
					else if (c in t)
						this.add(t, c, s || t[c], d ? d + o : o, i, n);
					else if ("parseTransform" !== c) {
						Ns(c, o);
						continue;
					}
					m ||
						(c in T
							? w.push(c, 0, T[c])
							: "function" == typeof t[c]
								? w.push(c, 2, t[c]())
								: w.push(c, 1, s || t[c])),
						x.push(c);
				}
		y && Ra(this);
	},
	render: function (t, e) {
		if (e.tween._time || !Gs())
			for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
		else e.styles.revert();
	},
	get: ii,
	aliases: $e,
	getSetter: function (t, e, r) {
		var i = $e[e];
		return (
			i && i.indexOf(",") < 0 && (e = i),
			e in ai && e !== fe && (t._gsap.x || ii(t, "x"))
				? r && mo === r
					? "scale" === e
						? bu
						: Tu
					: (mo = r || {}) && ("scale" === e ? Cu : ku)
				: t.style && !zs(t.style[e])
					? xu
					: ~e.indexOf("-")
						? Su
						: Us(t, e)
		);
	},
	core: { _removeProperty: Ci, _getMatrix: Qs },
};
(he.utils.checkPrefix = wr),
	(he.core.getStyleSaver = Na),
	(function (t, e) {
		var r = le(
			t +
				"," +
				e +
				",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
			function (t) {
				ai[t] = 1;
			},
		);
		le(e, function (t) {
			(Te.units[t] = "deg"), (Xa[t] = 1);
		}),
			($e[r[13]] = t + "," + e),
			le(
				"0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
				function (t) {
					var e = t.split(":");
					$e[e[1]] = r[e[0]];
				},
			);
	})(
		"x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
		"rotation,rotationX,rotationY,skewX,skewY",
	),
	le(
		"x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
		function (t) {
			Te.units[t] = "px";
		},
	),
	he.registerPlugin(Va);
var Zs = he.registerPlugin(Va) || he;
function Nu(t, e) {
	for (var r = 0; r < e.length; r++) {
		var i = e[r];
		(i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			"value" in i && (i.writable = !0),
			Object.defineProperty(t, i.key, i);
	}
}
function Iu(t, e, r) {
	return e && Nu(t.prototype, e), t;
}
Zs.core.Tween;
var Ft,
	Cn,
	we,
	yi,
	wi,
	cr,
	Ua,
	Ni,
	Yr,
	$a,
	ni,
	Ye,
	qa,
	Ga = function () {
		return (
			Ft ||
			(typeof window < "u" &&
				(Ft = window.gsap) &&
				Ft.registerPlugin &&
				Ft)
		);
	},
	Ka = 1,
	lr = [],
	X = [],
	Ge = [],
	Wr = Date.now,
	Ts = function (t, e) {
		return e;
	},
	Yu = function () {
		var t = Yr.core,
			e = t.bridge || {},
			r = t._scrollers,
			i = t._proxies;
		r.push.apply(r, X),
			i.push.apply(i, Ge),
			(X = r),
			(Ge = i),
			(Ts = function (t, r) {
				return e[t](r);
			});
	},
	Ti = function (t, e) {
		return ~Ge.indexOf(t) && Ge[Ge.indexOf(t) + 1][e];
	},
	Xr = function (t) {
		return !!~$a.indexOf(t);
	},
	jt = function (t, e, r, i, n) {
		return t.addEventListener(e, r, { passive: !1 !== i, capture: !!n });
	},
	Jt = function (t, e, r, i) {
		return t.removeEventListener(e, r, !!i);
	},
	fn = "scrollLeft",
	hn = "scrollTop",
	bs = function () {
		return (ni && ni.isPressed) || X.cache++;
	},
	In = function (t, e) {
		var r = function r(i) {
			if (i || 0 === i) {
				Ka && (we.history.scrollRestoration = "manual");
				var n = ni && ni.isPressed;
				(i = r.v = Math.round(i) || (ni && ni.iOS ? 1 : 0)),
					t(i),
					(r.cacheID = X.cache),
					n && Ts("ss", i);
			} else
				(e || X.cache !== r.cacheID || Ts("ref")) &&
					((r.cacheID = X.cache), (r.v = t()));
			return r.v + r.offset;
		};
		return (r.offset = 0), t && r;
	},
	ne = {
		s: fn,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: In(function (t) {
			return arguments.length
				? we.scrollTo(t, Pt.sc())
				: we.pageXOffset || yi[fn] || wi[fn] || cr[fn] || 0;
		}),
	},
	Pt = {
		s: hn,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: ne,
		sc: In(function (t) {
			return arguments.length
				? we.scrollTo(ne.sc(), t)
				: we.pageYOffset || yi[hn] || wi[hn] || cr[hn] || 0;
		}),
	},
	oe = function (t, e) {
		return (
			((e && e._ctx && e._ctx.selector) || Ft.utils.toArray)(t)[0] ||
			("string" == typeof t && !1 !== Ft.config().nullTargetWarn
				? console.warn("Element not found:", t)
				: null)
		);
	},
	Wu = function (t, e) {
		for (var r = e.length; r--; )
			if (e[r] === t || e[r].contains(t)) return !0;
		return !1;
	},
	Pi = function (t, e) {
		var r = e.s,
			i = e.sc;
		Xr(t) && (t = yi.scrollingElement || wi);
		var n = X.indexOf(t),
			s = i === Pt.sc ? 1 : 2;
		!~n && (n = X.push(t) - 1), X[n + s] || jt(t, "scroll", bs);
		var o = X[n + s],
			a =
				o ||
				(X[n + s] =
					In(Ti(t, r), !0) ||
					(Xr(t)
						? i
						: In(function (e) {
								return arguments.length ? (t[r] = e) : t[r];
							})));
		return (
			(a.target = t),
			o || (a.smooth = "smooth" === Ft.getProperty(t, "scrollBehavior")),
			a
		);
	},
	Cs = function (t, e, r) {
		var i = t,
			n = t,
			s = Wr(),
			o = s,
			a = e || 50,
			l = Math.max(500, 3 * a),
			u = function (t, e) {
				var l = Wr();
				e || l - s > a
					? ((n = i), (i = t), (o = s), (s = l))
					: r
						? (i += t)
						: (i = n + ((t - n) / (l - o)) * (s - o));
			};
		return {
			update: u,
			reset: function () {
				(n = i = r ? 0 : i), (o = s = 0);
			},
			getVelocity: function (t) {
				var e = o,
					a = n,
					h = Wr();
				return (
					(t || 0 === t) && t !== i && u(t),
					s === o || h - o > l
						? 0
						: ((i + (r ? a : -a)) / ((r ? h : s) - e)) * 1e3
				);
			},
		};
	},
	Pr = function (t, e) {
		return (
			e && !t._gsapAllow && t.preventDefault(),
			t.changedTouches ? t.changedTouches[0] : t
		);
	},
	ko = function (t) {
		var e = Math.max.apply(Math, t),
			r = Math.min.apply(Math, t);
		return Math.abs(e) >= Math.abs(r) ? e : r;
	},
	Qa = function () {
		(Yr = Ft.core.globals().ScrollTrigger) && Yr.core && Yu();
	},
	Za = function (t) {
		return (
			(Ft = t || Ga()),
			!Cn &&
				Ft &&
				typeof document < "u" &&
				document.body &&
				((we = window),
				(yi = document),
				(wi = yi.documentElement),
				(cr = yi.body),
				($a = [we, yi, wi, cr]),
				Ft.utils.clamp,
				(qa = Ft.core.context || function () {}),
				(Ni = "onpointerenter" in cr ? "pointer" : "mouse"),
				(Ua = wt.isTouch =
					we.matchMedia &&
					we.matchMedia("(hover: none), (pointer: coarse)").matches
						? 1
						: "ontouchstart" in we ||
								navigator.maxTouchPoints > 0 ||
								navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(Ye = wt.eventTypes =
					(
						"ontouchstart" in wi
							? "touchstart,touchmove,touchcancel,touchend"
							: "onpointerdown" in wi
								? "pointerdown,pointermove,pointercancel,pointerup"
								: "mousedown,mousemove,mouseup,mouseup"
					).split(",")),
				setTimeout(function () {
					return (Ka = 0);
				}, 500),
				Qa(),
				(Cn = 1)),
			Cn
		);
	};
(ne.op = Pt), (X.cache = 0);
var wt = (function () {
	function t(t) {
		this.init(t);
	}
	return (
		(t.prototype.init = function (t) {
			Cn ||
				Za(Ft) ||
				console.warn("Please gsap.registerPlugin(Observer)"),
				Yr || Qa();
			var e = t.tolerance,
				r = t.dragMinimum,
				i = t.type,
				n = t.target,
				s = t.lineHeight,
				o = t.debounce,
				a = t.preventDefault,
				l = t.onStop,
				u = t.onStopDelay,
				h = t.ignore,
				c = t.wheelSpeed,
				f = t.event,
				p = t.onDragStart,
				d = t.onDragEnd,
				m = t.onDrag,
				g = t.onPress,
				v = t.onRelease,
				_ = t.onRight,
				y = t.onLeft,
				w = t.onUp,
				b = t.onDown,
				x = t.onChangeX,
				T = t.onChangeY,
				S = t.onChange,
				M = t.onToggleX,
				D = t.onToggleY,
				k = t.onHover,
				E = t.onHoverEnd,
				O = t.onMove,
				C = t.ignoreCheck,
				P = t.isNormalizer,
				R = t.onGestureStart,
				z = t.onGestureEnd,
				A = t.onWheel,
				Y = t.onEnable,
				F = t.onDisable,
				X = t.onClick,
				N = t.scrollSpeed,
				V = t.capture,
				W = t.allowClicks,
				L = t.lockAxis,
				H = t.onLockAxis;
			(this.target = n = oe(n) || wi),
				(this.vars = t),
				h && (h = Ft.utils.toArray(h)),
				(e = e || 1e-9),
				(r = r || 0),
				(c = c || 1),
				(N = N || 1),
				(i = i || "wheel,touch,pointer"),
				(o = !1 !== o),
				s || (s = parseFloat(we.getComputedStyle(cr).lineHeight) || 22);
			var I,
				q,
				U,
				B,
				G,
				j,
				$,
				K = this,
				J = 0,
				Q = 0,
				Z = t.passive || (!a && !1 !== t.passive),
				tt = Pi(n, ne),
				et = Pi(n, Pt),
				rt = tt(),
				it = et(),
				nt =
					~i.indexOf("touch") &&
					!~i.indexOf("pointer") &&
					"pointerdown" === Ye[0],
				st = Xr(n),
				ot = n.ownerDocument || yi,
				at = [0, 0, 0],
				lt = [0, 0, 0],
				ut = 0,
				ht = function () {
					return (ut = Wr());
				},
				ct = function (t, e) {
					return (
						((K.event = t) && h && Wu(t.target, h)) ||
						(e && nt && "touch" !== t.pointerType) ||
						(C && C(t, e))
					);
				},
				ft = function () {
					var t = (K.deltaX = ko(at)),
						r = (K.deltaY = ko(lt)),
						i = Math.abs(t) >= e,
						n = Math.abs(r) >= e;
					S && (i || n) && S(K, t, r, at, lt),
						i &&
							(_ && K.deltaX > 0 && _(K),
							y && K.deltaX < 0 && y(K),
							x && x(K),
							M && K.deltaX < 0 != J < 0 && M(K),
							(J = K.deltaX),
							(at[0] = at[1] = at[2] = 0)),
						n &&
							(b && K.deltaY > 0 && b(K),
							w && K.deltaY < 0 && w(K),
							T && T(K),
							D && K.deltaY < 0 != Q < 0 && D(K),
							(Q = K.deltaY),
							(lt[0] = lt[1] = lt[2] = 0)),
						(B || U) &&
							(O && O(K),
							U && (p && 1 === U && p(K), m && m(K), (U = 0)),
							(B = !1)),
						j && !(j = !1) && H && H(K),
						G && (A(K), (G = !1)),
						(I = 0);
				},
				pt = function (t, e, r) {
					(at[r] += t),
						(lt[r] += e),
						K._vx.update(t),
						K._vy.update(e),
						o ? I || (I = requestAnimationFrame(ft)) : ft();
				},
				dt = function (t, e) {
					L &&
						!$ &&
						((K.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y"),
						(j = !0)),
						"y" !== $ && ((at[2] += t), K._vx.update(t, !0)),
						"x" !== $ && ((lt[2] += e), K._vy.update(e, !0)),
						o ? I || (I = requestAnimationFrame(ft)) : ft();
				},
				mt = function (t) {
					if (!ct(t, 1)) {
						var e = (t = Pr(t, a)).clientX,
							i = t.clientY,
							n = e - K.x,
							s = i - K.y,
							o = K.isDragging;
						(K.x = e),
							(K.y = i),
							(o ||
								((n || s) &&
									(Math.abs(K.startX - e) >= r ||
										Math.abs(K.startY - i) >= r))) &&
								(U || (U = o ? 2 : 1),
								o || (K.isDragging = !0),
								dt(n, s));
					}
				},
				gt = (K.onPress = function (t) {
					ct(t, 1) ||
						(t && t.button) ||
						((K.axis = $ = null),
						q.pause(),
						(K.isPressed = !0),
						(t = Pr(t)),
						(J = Q = 0),
						(K.startX = K.x = t.clientX),
						(K.startY = K.y = t.clientY),
						K._vx.reset(),
						K._vy.reset(),
						jt(P ? n : ot, Ye[1], mt, Z, !0),
						(K.deltaX = K.deltaY = 0),
						g && g(K));
				}),
				vt = (K.onRelease = function (t) {
					if (!ct(t, 1)) {
						Jt(P ? n : ot, Ye[1], mt, !0);
						var e = !isNaN(K.y - K.startY),
							r = K.isDragging,
							i =
								r &&
								(Math.abs(K.x - K.startX) > 3 ||
									Math.abs(K.y - K.startY) > 3),
							s = Pr(t);
						!i &&
							e &&
							(K._vx.reset(),
							K._vy.reset(),
							a &&
								W &&
								Ft.delayedCall(0.08, function () {
									if (Wr() - ut > 300 && !t.defaultPrevented)
										if (t.target.click) t.target.click();
										else if (ot.createEvent) {
											var e =
												ot.createEvent("MouseEvents");
											e.initMouseEvent(
												"click",
												!0,
												!0,
												we,
												1,
												s.screenX,
												s.screenY,
												s.clientX,
												s.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												t.target.dispatchEvent(e);
										}
								})),
							(K.isDragging = K.isGesturing = K.isPressed = !1),
							l && r && !P && q.restart(!0),
							U && ft(),
							d && r && d(K),
							v && v(K, i);
					}
				}),
				_t = function (t) {
					return (
						t.touches &&
						t.touches.length > 1 &&
						(K.isGesturing = !0) &&
						R(t, K.isDragging)
					);
				},
				yt = function () {
					return (K.isGesturing = !1) || z(K);
				},
				wt = function (t) {
					if (!ct(t)) {
						var e = tt(),
							r = et();
						pt((e - rt) * N, (r - it) * N, 1),
							(rt = e),
							(it = r),
							l && q.restart(!0);
					}
				},
				bt = function (t) {
					if (!ct(t)) {
						(t = Pr(t, a)), A && (G = !0);
						var e =
							(1 === t.deltaMode
								? s
								: 2 === t.deltaMode
									? we.innerHeight
									: 1) * c;
						pt(t.deltaX * e, t.deltaY * e, 0),
							l && !P && q.restart(!0);
					}
				},
				xt = function (t) {
					if (!ct(t)) {
						var e = t.clientX,
							r = t.clientY,
							i = e - K.x,
							n = r - K.y;
						(K.x = e),
							(K.y = r),
							(B = !0),
							l && q.restart(!0),
							(i || n) && dt(i, n);
					}
				},
				Tt = function (t) {
					(K.event = t), k(K);
				},
				St = function (t) {
					(K.event = t), E(K);
				},
				Mt = function (t) {
					return ct(t) || (Pr(t, a) && X(K));
				};
			(q = K._dc =
				Ft.delayedCall(u || 0.25, function () {
					K._vx.reset(), K._vy.reset(), q.pause(), l && l(K);
				}).pause()),
				(K.deltaX = K.deltaY = 0),
				(K._vx = Cs(0, 50, !0)),
				(K._vy = Cs(0, 50, !0)),
				(K.scrollX = tt),
				(K.scrollY = et),
				(K.isDragging = K.isGesturing = K.isPressed = !1),
				qa(this),
				(K.enable = function (t) {
					return (
						K.isEnabled ||
							(jt(st ? ot : n, "scroll", bs),
							i.indexOf("scroll") >= 0 &&
								jt(st ? ot : n, "scroll", wt, Z, V),
							i.indexOf("wheel") >= 0 && jt(n, "wheel", bt, Z, V),
							((i.indexOf("touch") >= 0 && Ua) ||
								i.indexOf("pointer") >= 0) &&
								(jt(n, Ye[0], gt, Z, V),
								jt(ot, Ye[2], vt),
								jt(ot, Ye[3], vt),
								W && jt(n, "click", ht, !0, !0),
								X && jt(n, "click", Mt),
								R && jt(ot, "gesturestart", _t),
								z && jt(ot, "gestureend", yt),
								k && jt(n, Ni + "enter", Tt),
								E && jt(n, Ni + "leave", St),
								O && jt(n, Ni + "move", xt)),
							(K.isEnabled = !0),
							(K.isDragging =
								K.isGesturing =
								K.isPressed =
								B =
								U =
									!1),
							K._vx.reset(),
							K._vy.reset(),
							(rt = tt()),
							(it = et()),
							t && t.type && gt(t),
							Y && Y(K)),
						K
					);
				}),
				(K.disable = function () {
					K.isEnabled &&
						(lr.filter(function (t) {
							return t !== K && Xr(t.target);
						}).length || Jt(st ? ot : n, "scroll", bs),
						K.isPressed &&
							(K._vx.reset(),
							K._vy.reset(),
							Jt(P ? n : ot, Ye[1], mt, !0)),
						Jt(st ? ot : n, "scroll", wt, V),
						Jt(n, "wheel", bt, V),
						Jt(n, Ye[0], gt, V),
						Jt(ot, Ye[2], vt),
						Jt(ot, Ye[3], vt),
						Jt(n, "click", ht, !0),
						Jt(n, "click", Mt),
						Jt(ot, "gesturestart", _t),
						Jt(ot, "gestureend", yt),
						Jt(n, Ni + "enter", Tt),
						Jt(n, Ni + "leave", St),
						Jt(n, Ni + "move", xt),
						(K.isEnabled = K.isPressed = K.isDragging = !1),
						F && F(K));
				}),
				(K.kill = K.revert =
					function () {
						K.disable();
						var t = lr.indexOf(K);
						t >= 0 && lr.splice(t, 1), ni === K && (ni = 0);
					}),
				lr.push(K),
				P && Xr(n) && (ni = K),
				K.enable(f);
		}),
		Iu(t, [
			{
				key: "velocityX",
				get: function () {
					return this._vx.getVelocity();
				},
			},
			{
				key: "velocityY",
				get: function () {
					return this._vy.getVelocity();
				},
			},
		]),
		t
	);
})();
(wt.version = "3.14.1"),
	(wt.create = function (t) {
		return new wt(t);
	}),
	(wt.register = Za),
	(wt.getAll = function () {
		return lr.slice();
	}),
	(wt.getById = function (t) {
		return lr.filter(function (e) {
			return e.vars.id === t;
		})[0];
	}),
	Ga() && Ft.registerPlugin(wt);
var D,
	nr,
	W,
	rt,
	ve,
	j,
	Js,
	Yn,
	rn,
	Br,
	Dr,
	cn,
	Ht,
	Un,
	ks,
	ee,
	Po,
	Eo,
	sr,
	Ja,
	es,
	ja,
	te,
	Ps,
	tl,
	el,
	pi,
	Es,
	js,
	dr,
	to,
	Hr,
	Os,
	is,
	nn,
	ie,
	Fo,
	Gr,
	dn = 1,
	Vt = Date.now,
	rs = Vt(),
	Re = 0,
	Rr = 0,
	Oo = function (t, e, r) {
		var i = ge(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
		return (r["_" + e + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
	},
	Mo = function (t, e) {
		return !e || (ge(t) && "clamp(" === t.substr(0, 6))
			? t
			: "clamp(" + t + ")";
	},
	Xu = function t() {
		return Rr && requestAnimationFrame(t);
	},
	Do = function () {
		return (Un = 1);
	},
	Ro = function () {
		return (Un = 0);
	},
	Ve = function (t) {
		return t;
	},
	Ar = function (t) {
		return Math.round(1e5 * t) / 1e5 || 0;
	},
	il = function () {
		return typeof window < "u";
	},
	rl = function () {
		return D || (il() && (D = window.gsap) && D.registerPlugin && D);
	},
	Gi = function (t) {
		return !!~Js.indexOf(t);
	},
	nl = function (t) {
		return (
			("Height" === t ? to : W["inner" + t]) ||
			ve["client" + t] ||
			j["client" + t]
		);
	},
	sl = function (t) {
		return (
			Ti(t, "getBoundingClientRect") ||
			(Gi(t)
				? function () {
						return (Mn.width = W.innerWidth), (Mn.height = to), Mn;
					}
				: function () {
						return ri(t);
					})
		);
	},
	Bu = function (t, e, r) {
		var i = r.d,
			n = r.d2,
			s = r.a;
		return (s = Ti(t, "getBoundingClientRect"))
			? function () {
					return s()[i];
				}
			: function () {
					return (e ? nl(n) : t["client" + n]) || 0;
				};
	},
	Hu = function (t, e) {
		return !e || ~Ge.indexOf(t)
			? sl(t)
			: function () {
					return Mn;
				};
	},
	qe = function (t, e) {
		var r = e.s,
			i = e.d2,
			n = e.d,
			s = e.a;
		return Math.max(
			0,
			(r = "scroll" + i) && (s = Ti(t, r))
				? s() - sl(t)()[n]
				: Gi(t)
					? (ve[r] || j[r]) - nl(i)
					: t[r] - t["offset" + i],
		);
	},
	_n = function (t, e) {
		for (var r = 0; r < sr.length; r += 3)
			(!e || ~e.indexOf(sr[r + 1])) && t(sr[r], sr[r + 1], sr[r + 2]);
	},
	ge = function (t) {
		return "string" == typeof t;
	},
	$t = function (t) {
		return "function" == typeof t;
	},
	zr = function (t) {
		return "number" == typeof t;
	},
	Ii = function (t) {
		return "object" == typeof t;
	},
	Er = function (t, e, r) {
		return t && t.progress(e ? 0 : 1) && r && t.pause();
	},
	ns = function (t, e) {
		if (t.enabled) {
			var r = t._ctx
				? t._ctx.add(function () {
						return e(t);
					})
				: e(t);
			r && r.totalTime && (t.callbackAnimation = r);
		}
	},
	ir = Math.abs,
	ol = "left",
	al = "top",
	eo = "right",
	io = "bottom",
	Ui = "width",
	$i = "height",
	Vr = "Right",
	Ur = "Left",
	$r = "Top",
	qr = "Bottom",
	Tt = "padding",
	Ee = "margin",
	xr = "Width",
	ro = "Height",
	kt = "px",
	Oe = function (t) {
		return W.getComputedStyle(t);
	},
	Vu = function (t) {
		var e = Oe(t).position;
		t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
	},
	Ao = function (t, e) {
		for (var r in e) r in t || (t[r] = e[r]);
		return t;
	},
	ri = function (t, e) {
		var r =
				e &&
				"matrix(1, 0, 0, 1, 0, 0)" !== Oe(t)[ks] &&
				D.to(t, {
					x: 0,
					y: 0,
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					scale: 1,
					skewX: 0,
					skewY: 0,
				}).progress(1),
			i = t.getBoundingClientRect();
		return r && r.progress(0).kill(), i;
	},
	Wn = function (t, e) {
		var r = e.d2;
		return t["offset" + r] || t["client" + r] || 0;
	},
	ll = function (t) {
		var e,
			r = [],
			i = t.labels,
			n = t.duration();
		for (e in i) r.push(i[e] / n);
		return r;
	},
	Uu = function (t) {
		return function (e) {
			return D.utils.snap(ll(t), e);
		};
	},
	no = function (t) {
		var e = D.utils.snap(t),
			r =
				Array.isArray(t) &&
				t.slice(0).sort(function (t, e) {
					return t - e;
				});
		return r
			? function (t, i, n) {
					var s;
					if ((void 0 === n && (n = 0.001), !i)) return e(t);
					if (i > 0) {
						for (t -= n, s = 0; s < r.length; s++)
							if (r[s] >= t) return r[s];
						return r[s - 1];
					}
					for (s = r.length, t += n; s--; )
						if (r[s] <= t) return r[s];
					return r[0];
				}
			: function (r, i, n) {
					void 0 === n && (n = 0.001);
					var s = e(r);
					return !i || Math.abs(s - r) < n || s - r < 0 == i < 0
						? s
						: e(i < 0 ? r - t : r + t);
				};
	},
	$u = function (t) {
		return function (e, r) {
			return no(ll(t))(e, r.direction);
		};
	},
	pn = function (t, e, r, i) {
		return r.split(",").forEach(function (r) {
			return t(e, r, i);
		});
	},
	Dt = function (t, e, r, i, n) {
		return t.addEventListener(e, r, { passive: !i, capture: !!n });
	},
	Mt = function (t, e, r, i) {
		return t.removeEventListener(e, r, !!i);
	},
	gn = function (t, e, r) {
		(r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
	},
	zo = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal",
	},
	mn = { toggleActions: "play", anticipatePin: 0 },
	Xn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	kn = function (t, e) {
		if (ge(t)) {
			var r = t.indexOf("="),
				i = ~r
					? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
					: 0;
			~r &&
				(t.indexOf("%") > r && (i *= e / 100),
				(t = t.substr(0, r - 1))),
				(t =
					i +
					(t in Xn
						? Xn[t] * e
						: ~t.indexOf("%")
							? (parseFloat(t) * e) / 100
							: parseFloat(t) || 0));
		}
		return t;
	},
	vn = function (t, e, r, i, n, s, o, a) {
		var l = n.startColor,
			u = n.endColor,
			h = n.fontSize,
			c = n.indent,
			f = n.fontWeight,
			p = rt.createElement("div"),
			d = Gi(r) || "fixed" === Ti(r, "pinType"),
			m = -1 !== t.indexOf("scroller"),
			g = d ? j : r,
			v = -1 !== t.indexOf("start"),
			_ = v ? l : u,
			y =
				"border-color:" +
				_ +
				";font-size:" +
				h +
				";color:" +
				_ +
				";font-weight:" +
				f +
				";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return (
			(y += "position:" + ((m || a) && d ? "fixed;" : "absolute;")),
			(m || a || !d) &&
				(y += (i === Pt ? eo : io) + ":" + (s + parseFloat(c)) + "px;"),
			o &&
				(y +=
					"box-sizing:border-box;text-align:left;width:" +
					o.offsetWidth +
					"px;"),
			(p._isStart = v),
			p.setAttribute(
				"class",
				"gsap-marker-" + t + (e ? " marker-" + e : ""),
			),
			(p.style.cssText = y),
			(p.innerText = e || 0 === e ? t + "-" + e : t),
			g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
			(p._offset = p["offset" + i.op.d2]),
			Pn(p, 0, i, v),
			p
		);
	},
	Pn = function (t, e, r, i) {
		var n = { display: "block" },
			s = r[i ? "os2" : "p2"],
			o = r[i ? "p2" : "os2"];
		(t._isFlipped = i),
			(n[r.a + "Percent"] = i ? -100 : 0),
			(n[r.a] = i ? "1px" : 0),
			(n["border" + s + xr] = 1),
			(n["border" + o + xr] = 0),
			(n[r.p] = e + "px"),
			D.set(t, n);
	},
	Y = [],
	Ms = {},
	Lo = function () {
		return Vt() - Re > 34 && (nn || (nn = requestAnimationFrame(si)));
	},
	rr = function () {
		(!te || !te.isPressed || te.startX > j.clientWidth) &&
			(X.cache++,
			te ? nn || (nn = requestAnimationFrame(si)) : si(),
			Re || Qi("scrollStart"),
			(Re = Vt()));
	},
	ss = function () {
		(el = W.innerWidth), (tl = W.innerHeight);
	},
	Lr = function (t) {
		X.cache++,
			(!0 === t ||
				(!Ht &&
					!ja &&
					!rt.fullscreenElement &&
					!rt.webkitFullscreenElement &&
					(!Ps ||
						el !== W.innerWidth ||
						Math.abs(W.innerHeight - tl) >
							0.25 * W.innerHeight))) &&
				Yn.restart(!0);
	},
	Ki = {},
	qu = [],
	ul = function t() {
		return Mt(V, "scrollEnd", t) || Wi(!0);
	},
	Qi = function (t) {
		return (
			(Ki[t] &&
				Ki[t].map(function (t) {
					return t();
				})) ||
			qu
		);
	},
	pe = [],
	fl = function (t) {
		for (var e = 0; e < pe.length; e += 5)
			(!t || (pe[e + 4] && pe[e + 4].query === t)) &&
				((pe[e].style.cssText = pe[e + 1]),
				pe[e].getBBox &&
					pe[e].setAttribute("transform", pe[e + 2] || ""),
				(pe[e + 3].uncache = 1));
	},
	hl = function () {
		return X.forEach(function (t) {
			return $t(t) && ++t.cacheID && (t.rec = t());
		});
	},
	so = function (t, e) {
		var r;
		for (ee = 0; ee < Y.length; ee++)
			(r = Y[ee]) &&
				(!e || r._ctx === e) &&
				(t ? r.kill(1) : r.revert(!0, !0));
		(Hr = !0), e && fl(e), e || Qi("revert");
	},
	cl = function (t, e) {
		X.cache++,
			(e || !ie) &&
				X.forEach(function (t) {
					return $t(t) && t.cacheID++ && (t.rec = 0);
				}),
			ge(t) && (W.history.scrollRestoration = js = t);
	},
	qi = 0,
	Gu = function () {
		if (Fo !== qi) {
			var t = (Fo = qi);
			requestAnimationFrame(function () {
				return t === qi && Wi(!0);
			});
		}
	},
	dl = function () {
		j.appendChild(dr),
			(to = (!te && dr.offsetHeight) || W.innerHeight),
			j.removeChild(dr);
	},
	No = function (t) {
		return rn(
			".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
		).forEach(function (e) {
			return (e.style.display = t ? "none" : "block");
		});
	},
	Wi = function (t, e) {
		if (
			((ve = rt.documentElement),
			(j = rt.body),
			(Js = [W, rt, ve, j]),
			!Re || t || Hr)
		) {
			dl(), (ie = V.isRefreshing = !0), Hr || hl();
			var r = Qi("refreshInit");
			Ja && V.sort(),
				e || so(),
				X.forEach(function (t) {
					$t(t) &&
						(t.smooth && (t.target.style.scrollBehavior = "auto"),
						t(0));
				}),
				Y.slice(0).forEach(function (t) {
					return t.refresh();
				}),
				(Hr = !1),
				Y.forEach(function (t) {
					if (t._subPinOffset && t.pin) {
						var e = t.vars.horizontal
								? "offsetWidth"
								: "offsetHeight",
							r = t.pin[e];
						t.revert(!0, 1),
							t.adjustPinSpacing(t.pin[e] - r),
							t.refresh();
					}
				}),
				(Os = 1),
				No(!0),
				Y.forEach(function (t) {
					var e = qe(t.scroller, t._dir),
						r = "max" === t.vars.end || (t._endClamp && t.end > e),
						i = t._startClamp && t.start >= e;
					(r || i) &&
						t.setPositions(
							i ? e - 1 : t.start,
							r ? Math.max(i ? e : t.start + 1, e) : t.end,
							!0,
						);
				}),
				No(!1),
				(Os = 0),
				r.forEach(function (t) {
					return t && t.render && t.render(-1);
				}),
				X.forEach(function (t) {
					$t(t) &&
						(t.smooth &&
							requestAnimationFrame(function () {
								return (t.target.style.scrollBehavior =
									"smooth");
							}),
						t.rec && t(t.rec));
				}),
				cl(js, 1),
				Yn.pause(),
				qi++,
				(ie = 2),
				si(2),
				Y.forEach(function (t) {
					return $t(t.vars.onRefresh) && t.vars.onRefresh(t);
				}),
				(ie = V.isRefreshing = !1),
				Qi("refresh");
		} else Dt(V, "scrollEnd", ul);
	},
	Ds = 0,
	En = 1,
	si = function (t) {
		if (2 === t || (!ie && !Hr)) {
			(V.isUpdating = !0), Gr && Gr.update(0);
			var e = Y.length,
				r = Vt(),
				i = r - rs >= 50,
				n = e && Y[0].scroll();
			if (
				((En = Ds > n ? -1 : 1),
				ie || (Ds = n),
				i &&
					(Re && !Un && r - Re > 200 && ((Re = 0), Qi("scrollEnd")),
					(Dr = rs),
					(rs = r)),
				En < 0)
			) {
				for (ee = e; ee-- > 0; ) Y[ee] && Y[ee].update(0, i);
				En = 1;
			} else for (ee = 0; ee < e; ee++) Y[ee] && Y[ee].update(0, i);
			V.isUpdating = !1;
		}
		nn = 0;
	},
	Rs = [
		ol,
		al,
		io,
		eo,
		Ee + qr,
		Ee + Vr,
		Ee + $r,
		Ee + Ur,
		"display",
		"flexShrink",
		"float",
		"zIndex",
		"gridColumnStart",
		"gridColumnEnd",
		"gridRowStart",
		"gridRowEnd",
		"gridArea",
		"justifySelf",
		"alignSelf",
		"placeSelf",
		"order",
	],
	On = Rs.concat([
		Ui,
		$i,
		"boxSizing",
		"max" + xr,
		"max" + ro,
		"position",
		Ee,
		Tt,
		Tt + $r,
		Tt + Vr,
		Tt + qr,
		Tt + Ur,
	]),
	Ku = function (t, e, r) {
		_r(r);
		var i = t._gsap;
		if (i.spacerIsNative) _r(i.spacerState);
		else if (t._gsap.swappedIn) {
			var n = e.parentNode;
			n && (n.insertBefore(t, e), n.removeChild(e));
		}
		t._gsap.swappedIn = !1;
	},
	os = function (t, e, r, i) {
		if (!t._gsap.swappedIn) {
			for (var n, s = Rs.length, o = e.style, a = t.style; s--; )
				o[(n = Rs[s])] = r[n];
			(o.position = "absolute" === r.position ? "absolute" : "relative"),
				"inline" === r.display && (o.display = "inline-block"),
				(a[io] = a[eo] = "auto"),
				(o.flexBasis = r.flexBasis || "auto"),
				(o.overflow = "visible"),
				(o.boxSizing = "border-box"),
				(o[Ui] = Wn(t, ne) + kt),
				(o[$i] = Wn(t, Pt) + kt),
				(o[Tt] = a[Ee] = a[al] = a[ol] = "0"),
				_r(i),
				(a[Ui] = a["max" + xr] = r[Ui]),
				(a[$i] = a["max" + ro] = r[$i]),
				(a[Tt] = r[Tt]),
				t.parentNode !== e &&
					(t.parentNode.insertBefore(e, t), e.appendChild(t)),
				(t._gsap.swappedIn = !0);
		}
	},
	Qu = /([A-Z])/g,
	_r = function (t) {
		if (t) {
			var e,
				r,
				i = t.t.style,
				n = t.length,
				s = 0;
			for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; s < n; s += 2)
				(r = t[s + 1]),
					(e = t[s]),
					r
						? (i[e] = r)
						: i[e] &&
							i.removeProperty(
								e.replace(Qu, "-$1").toLowerCase(),
							);
		}
	},
	yn = function (t) {
		for (var e = On.length, r = t.style, i = [], n = 0; n < e; n++)
			i.push(On[n], r[On[n]]);
		return (i.t = t), i;
	},
	Zu = function (t, e, r) {
		for (var i, n = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
			(i = t[o]), n.push(i, i in e ? e[i] : t[o + 1]);
		return (n.t = t.t), n;
	},
	Mn = { left: 0, top: 0 },
	Io = function (t, e, r, i, n, s, o, a, l, u, h, c, f, p) {
		$t(t) && (t = t(a)),
			ge(t) &&
				"max" === t.substr(0, 3) &&
				(t = c + ("=" === t.charAt(4) ? kn("0" + t.substr(3), r) : 0));
		var d,
			m,
			g,
			v = f ? f.time() : 0;
		if ((f && f.seek(0), isNaN(t) || (t = +t), zr(t)))
			f &&
				(t = D.utils.mapRange(
					f.scrollTrigger.start,
					f.scrollTrigger.end,
					0,
					c,
					t,
				)),
				o && Pn(o, r, i, !0);
		else {
			$t(e) && (e = e(a));
			var _,
				y,
				w,
				b,
				x = (t || "0").split(" ");
			(g = oe(e, a) || j),
				(!(_ = ri(g) || {}) || (!_.left && !_.top)) &&
					"none" === Oe(g).display &&
					((b = g.style.display),
					(g.style.display = "block"),
					(_ = ri(g)),
					b
						? (g.style.display = b)
						: g.style.removeProperty("display")),
				(y = kn(x[0], _[i.d])),
				(w = kn(x[1] || "0", r)),
				(t = _[i.p] - l[i.p] - u + y + n - w),
				o && Pn(o, w, i, r - w < 20 || (o._isStart && w > 20)),
				(r -= r - w);
		}
		if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), s)) {
			var T = t + r,
				S = s._isStart;
			(d = "scroll" + i.d2),
				Pn(
					s,
					T,
					i,
					(S && T > 20) ||
						(!S &&
							(h ? Math.max(j[d], ve[d]) : s.parentNode[d]) <=
								T + 1),
				),
				h &&
					((l = ri(o)),
					h &&
						(s.style[i.op.p] =
							l[i.op.p] - i.op.m - s._offset + kt));
		}
		return (
			f &&
				g &&
				((d = ri(g)),
				f.seek(c),
				(m = ri(g)),
				(f._caScrollDist = d[i.p] - m[i.p]),
				(t = (t / f._caScrollDist) * c)),
			f && f.seek(v),
			f ? t : Math.round(t)
		);
	},
	Ju = /(webkit|moz|length|cssText|inset)/i,
	Yo = function (t, e, r, i) {
		if (t.parentNode !== e) {
			var n,
				s,
				o = t.style;
			if (e === j) {
				for (n in ((t._stOrig = o.cssText), (s = Oe(t))))
					!+n &&
						!Ju.test(n) &&
						s[n] &&
						"string" == typeof o[n] &&
						"0" !== n &&
						(o[n] = s[n]);
				(o.top = r), (o.left = i);
			} else o.cssText = t._stOrig;
			(D.core.getCache(t).uncache = 1), e.appendChild(t);
		}
	},
	_l = function (t, e, r) {
		var i = e,
			n = i;
		return function (e) {
			var s = Math.round(t());
			return (
				s !== i &&
					s !== n &&
					Math.abs(s - i) > 3 &&
					Math.abs(s - n) > 3 &&
					((e = s), r && r()),
				(n = i),
				(i = Math.round(e))
			);
		};
	},
	wn = function (t, e, r) {
		var i = {};
		(i[e.p] = "+=" + r), D.set(t, i);
	},
	Wo = function (t, e) {
		var r = Pi(t, e),
			i = "_scroll" + e.p2,
			n = function e(n, s, o, a, l) {
				var u = e.tween,
					h = s.onComplete,
					c = {};
				o = o || r();
				var f = _l(r, o, function () {
					u.kill(), (e.tween = 0);
				});
				return (
					(l = (a && l) || 0),
					(a = a || n - o),
					u && u.kill(),
					(s[i] = n),
					(s.inherit = !1),
					(s.modifiers = c),
					(c[i] = function () {
						return f(o + a * u.ratio + l * u.ratio * u.ratio);
					}),
					(s.onUpdate = function () {
						X.cache++, e.tween && si();
					}),
					(s.onComplete = function () {
						(e.tween = 0), h && h.call(u);
					}),
					(u = e.tween = D.to(t, s))
				);
			};
		return (
			(t[i] = r),
			(r.wheelHandler = function () {
				return n.tween && n.tween.kill() && (n.tween = 0);
			}),
			Dt(t, "wheel", r.wheelHandler),
			V.isTouch && Dt(t, "touchmove", r.wheelHandler),
			n
		);
	},
	V = (function () {
		function t(e, r) {
			nr ||
				t.register(D) ||
				console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
				Es(this),
				this.init(e, r);
		}
		return (
			(t.prototype.init = function (e, r) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					Rr)
				) {
					var i,
						n,
						s,
						o,
						a,
						l,
						u,
						h,
						c,
						f,
						p,
						d,
						m,
						g,
						v,
						_,
						y,
						w,
						b,
						x,
						T,
						S,
						M,
						k,
						E,
						O,
						C,
						P,
						R,
						z,
						A,
						F,
						N,
						V,
						L,
						H,
						I,
						q,
						U,
						B = (e = Ao(
							ge(e) || zr(e) || e.nodeType ? { trigger: e } : e,
							mn,
						)),
						G = B.onUpdate,
						$ = B.toggleClass,
						K = B.id,
						J = B.onToggle,
						Q = B.onRefresh,
						Z = B.scrub,
						tt = B.trigger,
						et = B.pin,
						it = B.pinSpacing,
						nt = B.invalidateOnRefresh,
						st = B.anticipatePin,
						ot = B.onScrubComplete,
						at = B.onSnapComplete,
						lt = B.once,
						ut = B.snap,
						ht = B.pinReparent,
						ct = B.pinSpacer,
						ft = B.containerAnimation,
						pt = B.fastScrollEnd,
						dt = B.preventOverlaps,
						mt =
							e.horizontal ||
							(e.containerAnimation && !1 !== e.horizontal)
								? ne
								: Pt,
						gt = !Z && 0 !== Z,
						vt = oe(e.scroller || W),
						_t = D.core.getCache(vt),
						yt = Gi(vt),
						wt =
							"fixed" ===
							("pinType" in e
								? e.pinType
								: Ti(vt, "pinType") || (yt && "fixed")),
						bt = [
							e.onEnter,
							e.onLeave,
							e.onEnterBack,
							e.onLeaveBack,
						],
						xt = gt && e.toggleActions.split(" "),
						St = "markers" in e ? e.markers : mn.markers,
						Et = yt
							? 0
							: parseFloat(Oe(vt)["border" + mt.p2 + xr]) || 0,
						Ot = this,
						Ct =
							e.onRefreshInit &&
							function () {
								return e.onRefreshInit(Ot);
							},
						Rt = Bu(vt, yt, mt),
						zt = Hu(vt, yt),
						At = 0,
						Yt = 0,
						Ft = 0,
						Xt = Pi(vt, mt);
					if (
						((Ot._startClamp = Ot._endClamp = !1),
						(Ot._dir = mt),
						(st *= 45),
						(Ot.scroller = vt),
						(Ot.scroll = ft ? ft.time.bind(ft) : Xt),
						(o = Xt()),
						(Ot.vars = e),
						(r = r || e.animation),
						"refreshPriority" in e &&
							((Ja = 1),
							-9999 === e.refreshPriority && (Gr = Ot)),
						(_t.tweenScroll = _t.tweenScroll || {
							top: Wo(vt, Pt),
							left: Wo(vt, ne),
						}),
						(Ot.tweenTo = i = _t.tweenScroll[mt.p]),
						(Ot.scrubDuration = function (t) {
							(N = zr(t) && t)
								? F
									? F.duration(t)
									: (F = D.to(r, {
											ease: "expo",
											totalProgress: "+=0",
											inherit: !1,
											duration: N,
											paused: !0,
											onComplete: function () {
												return ot && ot(Ot);
											},
										}))
								: (F && F.progress(1).kill(), (F = 0));
						}),
						r &&
							((r.vars.lazy = !1),
							(r._initted && !Ot.isReverted) ||
								(!1 !== r.vars.immediateRender &&
									!1 !== e.immediateRender &&
									r.duration() &&
									r.render(0, !0, !0)),
							(Ot.animation = r.pause()),
							(r.scrollTrigger = Ot),
							Ot.scrubDuration(Z),
							(z = 0),
							K || (K = r.vars.id)),
						ut &&
							((!Ii(ut) || ut.push) && (ut = { snapTo: ut }),
							"scrollBehavior" in j.style &&
								D.set(yt ? [j, ve] : vt, {
									scrollBehavior: "auto",
								}),
							X.forEach(function (t) {
								return (
									$t(t) &&
									t.target ===
										(yt ? rt.scrollingElement || ve : vt) &&
									(t.smooth = !1)
								);
							}),
							(s = $t(ut.snapTo)
								? ut.snapTo
								: "labels" === ut.snapTo
									? Uu(r)
									: "labelsDirectional" === ut.snapTo
										? $u(r)
										: !1 !== ut.directional
											? function (t, e) {
													return no(ut.snapTo)(
														t,
														Vt() - Yt < 500
															? 0
															: e.direction,
													);
												}
											: D.utils.snap(ut.snapTo)),
							(V = ut.duration || { min: 0.1, max: 2 }),
							(V = Ii(V) ? Br(V.min, V.max) : Br(V, V)),
							(L = D.delayedCall(
								ut.delay || N / 2 || 0.1,
								function () {
									var t = Xt(),
										e = Vt() - Yt < 500,
										n = i.tween;
									if (
										!(
											e || Math.abs(Ot.getVelocity()) < 10
										) ||
										n ||
										Un ||
										At === t
									)
										Ot.isActive &&
											At !== t &&
											L.restart(!0);
									else {
										var o,
											a,
											h = (t - l) / g,
											c =
												r && !gt
													? r.totalProgress()
													: h,
											f = e
												? 0
												: ((c - A) / (Vt() - Dr)) *
														1e3 || 0,
											p = D.utils.clamp(
												-h,
												1 - h,
												(ir(f / 2) * f) / 0.185,
											),
											d = h + (!1 === ut.inertia ? 0 : p),
											m = ut,
											v = m.onStart,
											_ = m.onInterrupt,
											y = m.onComplete;
										if (
											((o = s(d, Ot)),
											zr(o) || (o = d),
											(a = Math.max(
												0,
												Math.round(l + o * g),
											)),
											t <= u && t >= l && a !== t)
										) {
											if (
												n &&
												!n._initted &&
												n.data <= ir(a - t)
											)
												return;
											!1 === ut.inertia && (p = o - h),
												i(
													a,
													{
														duration: V(
															ir(
																(0.185 *
																	Math.max(
																		ir(
																			d -
																				c,
																		),
																		ir(
																			o -
																				c,
																		),
																	)) /
																	f /
																	0.05 || 0,
															),
														),
														ease:
															ut.ease || "power3",
														data: ir(a - t),
														onInterrupt:
															function () {
																return (
																	L.restart(
																		!0,
																	) &&
																	_ &&
																	_(Ot)
																);
															},
														onComplete:
															function () {
																Ot.update(),
																	(At = Xt()),
																	r &&
																		!gt &&
																		(F
																			? F.resetTo(
																					"totalProgress",
																					o,
																					r._tTime /
																						r._tDur,
																				)
																			: r.progress(
																					o,
																				)),
																	(z = A =
																		r && !gt
																			? r.totalProgress()
																			: Ot.progress),
																	at &&
																		at(Ot),
																	y && y(Ot);
															},
													},
													t,
													p * g,
													a - t - p * g,
												),
												v && v(Ot, i.tween);
										}
									}
								},
							).pause())),
						K && (Ms[K] = Ot),
						(U =
							(tt = Ot.trigger = oe(tt || (!0 !== et && et))) &&
							tt._gsap &&
							tt._gsap.stRevert) && (U = U(Ot)),
						(et = !0 === et ? tt : oe(et)),
						ge($) && ($ = { targets: tt, className: $ }),
						et &&
							(!1 === it ||
								it === Ee ||
								(it =
									!(
										!it &&
										et.parentNode &&
										et.parentNode.style &&
										"flex" === Oe(et.parentNode).display
									) && Tt),
							(Ot.pin = et),
							(n = D.core.getCache(et)).spacer
								? (v = n.pinState)
								: (ct &&
										((ct = oe(ct)) &&
											!ct.nodeType &&
											(ct =
												ct.current || ct.nativeElement),
										(n.spacerIsNative = !!ct),
										ct && (n.spacerState = yn(ct))),
									(n.spacer = w =
										ct || rt.createElement("div")),
									w.classList.add("pin-spacer"),
									K && w.classList.add("pin-spacer-" + K),
									(n.pinState = v = yn(et))),
							!1 !== e.force3D && D.set(et, { force3D: !0 }),
							(Ot.spacer = w = n.spacer),
							(R = Oe(et)),
							(k = R[it + mt.os2]),
							(x = D.getProperty(et)),
							(T = D.quickSetter(et, mt.a, kt)),
							os(et, w, R),
							(y = yn(et))),
						St)
					) {
						(d = Ii(St) ? Ao(St, zo) : zo),
							(f = vn("scroller-start", K, vt, mt, d, 0)),
							(p = vn("scroller-end", K, vt, mt, d, 0, f)),
							(b = f["offset" + mt.op.d2]);
						var Nt = oe(Ti(vt, "content") || vt);
						(h = this.markerStart =
							vn("start", K, Nt, mt, d, b, 0, ft)),
							(c = this.markerEnd =
								vn("end", K, Nt, mt, d, b, 0, ft)),
							ft && (q = D.quickSetter([h, c], mt.a, kt)),
							!wt &&
								(!Ge.length || !0 !== Ti(vt, "fixedMarkers")) &&
								(Vu(yt ? j : vt),
								D.set([f, p], { force3D: !0 }),
								(O = D.quickSetter(f, mt.a, kt)),
								(P = D.quickSetter(p, mt.a, kt)));
					}
					if (ft) {
						var Wt = ft.vars.onUpdate,
							Lt = ft.vars.onUpdateParams;
						ft.eventCallback("onUpdate", function () {
							Ot.update(0, 0, 1), Wt && Wt.apply(ft, Lt || []);
						});
					}
					if (
						((Ot.previous = function () {
							return Y[Y.indexOf(Ot) - 1];
						}),
						(Ot.next = function () {
							return Y[Y.indexOf(Ot) + 1];
						}),
						(Ot.revert = function (t, e) {
							if (!e) return Ot.kill(!0);
							var i = !1 !== t || !Ot.enabled,
								n = Ht;
							i !== Ot.isReverted &&
								(i &&
									((H = Math.max(Xt(), Ot.scroll.rec || 0)),
									(Ft = Ot.progress),
									(I = r && r.progress())),
								h &&
									[h, c, f, p].forEach(function (t) {
										return (t.style.display = i
											? "none"
											: "block");
									}),
								i && ((Ht = Ot), Ot.update(i)),
								et &&
									(!ht || !Ot.isActive) &&
									(i ? Ku(et, w, v) : os(et, w, Oe(et), E)),
								i || Ot.update(i),
								(Ht = n),
								(Ot.isReverted = i));
						}),
						(Ot.refresh = function (n, s, d, b) {
							if ((!Ht && Ot.enabled) || s) {
								if (et && n && Re)
									return void Dt(t, "scrollEnd", ul);
								!ie && Ct && Ct(Ot),
									(Ht = Ot),
									i.tween &&
										!d &&
										(i.tween.kill(), (i.tween = 0)),
									F && F.pause(),
									nt &&
										r &&
										(r.revert({ kill: !1 }).invalidate(),
										r.getChildren
											? r
													.getChildren(!0, !0, !1)
													.forEach(function (t) {
														return (
															t.vars
																.immediateRender &&
															t.render(0, !0, !0)
														);
													})
											: r.vars.immediateRender &&
												r.render(0, !0, !0)),
									Ot.isReverted || Ot.revert(!0, !0),
									(Ot._subPinOffset = !1);
								var T,
									k,
									O,
									P,
									R,
									z,
									A,
									X,
									N,
									V,
									W,
									q,
									U,
									B = Rt(),
									G = zt(),
									$ = ft ? ft.duration() : qe(vt, mt),
									K = g <= 0.01 || !g,
									J = 0,
									Z = b || 0,
									st = Ii(d) ? d.end : e.end,
									ot = e.endTrigger || tt,
									at = Ii(d)
										? d.start
										: e.start ||
											(0 !== e.start && tt
												? et
													? "0 0"
													: "0 100%"
												: 0),
									lt = (Ot.pinnedContainer =
										e.pinnedContainer &&
										oe(e.pinnedContainer, Ot)),
									ut =
										(tt && Math.max(0, Y.indexOf(Ot))) || 0,
									ct = ut;
								for (
									St &&
									Ii(d) &&
									((q = D.getProperty(f, mt.p)),
									(U = D.getProperty(p, mt.p)));
									ct-- > 0;
								)
									(z = Y[ct]).end ||
										z.refresh(0, 1) ||
										(Ht = Ot),
										(A = z.pin) &&
											(A === tt ||
												A === et ||
												A === lt) &&
											!z.isReverted &&
											(V || (V = []),
											V.unshift(z),
											z.revert(!0, !0)),
										z !== Y[ct] && (ut--, ct--);
								for (
									$t(at) && (at = at(Ot)),
										at = Oo(at, "start", Ot),
										l =
											Io(
												at,
												tt,
												B,
												mt,
												Xt(),
												h,
												f,
												Ot,
												G,
												Et,
												wt,
												$,
												ft,
												Ot._startClamp && "_startClamp",
											) || (et ? -0.001 : 0),
										$t(st) && (st = st(Ot)),
										ge(st) &&
											!st.indexOf("+=") &&
											(~st.indexOf(" ")
												? (st =
														(ge(at)
															? at.split(" ")[0]
															: "") + st)
												: ((J = kn(st.substr(2), B)),
													(st = ge(at)
														? at
														: (ft
																? D.utils.mapRange(
																		0,
																		ft.duration(),
																		ft
																			.scrollTrigger
																			.start,
																		ft
																			.scrollTrigger
																			.end,
																		l,
																	)
																: l) + J),
													(ot = tt))),
										st = Oo(st, "end", Ot),
										u =
											Math.max(
												l,
												Io(
													st || (ot ? "100% 0" : $),
													ot,
													B,
													mt,
													Xt() + J,
													c,
													p,
													Ot,
													G,
													Et,
													wt,
													$,
													ft,
													Ot._endClamp && "_endClamp",
												),
											) || -0.001,
										J = 0,
										ct = ut;
									ct--;
								)
									(A = (z = Y[ct] || {}).pin) &&
										z.start - z._pinPush <= l &&
										!ft &&
										z.end > 0 &&
										((T =
											z.end -
											(Ot._startClamp
												? Math.max(0, z.start)
												: z.start)),
										((A === tt &&
											z.start - z._pinPush < l) ||
											A === lt) &&
											isNaN(at) &&
											(J += T * (1 - z.progress)),
										A === et && (Z += T));
								if (
									((l += J),
									(u += J),
									Ot._startClamp && (Ot._startClamp += J),
									Ot._endClamp &&
										!ie &&
										((Ot._endClamp = u || -0.001),
										(u = Math.min(u, qe(vt, mt)))),
									(g = u - l || ((l -= 0.01) && 0.001)),
									K &&
										(Ft = D.utils.clamp(
											0,
											1,
											D.utils.normalize(l, u, H),
										)),
									(Ot._pinPush = Z),
									h &&
										J &&
										(((T = {})[mt.a] = "+=" + J),
										lt && (T[mt.p] = "-=" + Xt()),
										D.set([h, c], T)),
									!et || (Os && Ot.end >= qe(vt, mt)))
								) {
									if (tt && Xt() && !ft)
										for (k = tt.parentNode; k && k !== j; )
											k._pinOffset &&
												((l -= k._pinOffset),
												(u -= k._pinOffset)),
												(k = k.parentNode);
								} else
									(T = Oe(et)),
										(P = mt === Pt),
										(O = Xt()),
										(S = parseFloat(x(mt.a)) + Z),
										!$ &&
											u > 1 &&
											((W = {
												style: (W = (
													yt
														? rt.scrollingElement ||
															ve
														: vt
												).style),
												value: W[
													"overflow" +
														mt.a.toUpperCase()
												],
											}),
											yt &&
												"scroll" !==
													Oe(j)[
														"overflow" +
															mt.a.toUpperCase()
													] &&
												(W.style[
													"overflow" +
														mt.a.toUpperCase()
												] = "scroll")),
										os(et, w, T),
										(y = yn(et)),
										(k = ri(et, !0)),
										(X = wt && Pi(vt, P ? ne : Pt)()),
										it
											? (((E = [
													it + mt.os2,
													g + Z + kt,
												]).t = w),
												(ct =
													it === Tt
														? Wn(et, mt) + g + Z
														: 0) &&
													(E.push(mt.d, ct + kt),
													"auto" !==
														w.style.flexBasis &&
														(w.style.flexBasis =
															ct + kt)),
												_r(E),
												lt &&
													Y.forEach(function (t) {
														t.pin === lt &&
															!1 !==
																t.vars
																	.pinSpacing &&
															(t._subPinOffset =
																!0);
													}),
												wt && Xt(H))
											: (ct = Wn(et, mt)) &&
												"auto" !== w.style.flexBasis &&
												(w.style.flexBasis = ct + kt),
										wt &&
											(((R = {
												top:
													k.top +
													(P ? O - l : X) +
													kt,
												left:
													k.left +
													(P ? X : O - l) +
													kt,
												boxSizing: "border-box",
												position: "fixed",
											})[Ui] = R["max" + xr] =
												Math.ceil(k.width) + kt),
											(R[$i] = R["max" + ro] =
												Math.ceil(k.height) + kt),
											(R[Ee] =
												R[Ee + $r] =
												R[Ee + Vr] =
												R[Ee + qr] =
												R[Ee + Ur] =
													"0"),
											(R[Tt] = T[Tt]),
											(R[Tt + $r] = T[Tt + $r]),
											(R[Tt + Vr] = T[Tt + Vr]),
											(R[Tt + qr] = T[Tt + qr]),
											(R[Tt + Ur] = T[Tt + Ur]),
											(_ = Zu(v, R, ht)),
											ie && Xt(0)),
										r
											? ((N = r._initted),
												es(1),
												r.render(r.duration(), !0, !0),
												(M = x(mt.a) - S + g + Z),
												(C = Math.abs(g - M) > 1),
												wt &&
													C &&
													_.splice(_.length - 2, 2),
												r.render(0, !0, !0),
												N || r.invalidate(!0),
												r.parent ||
													r.totalTime(r.totalTime()),
												es(0))
											: (M = g),
										W &&
											(W.value
												? (W.style[
														"overflow" +
															mt.a.toUpperCase()
													] = W.value)
												: W.style.removeProperty(
														"overflow-" + mt.a,
													));
								V &&
									V.forEach(function (t) {
										return t.revert(!1, !0);
									}),
									(Ot.start = l),
									(Ot.end = u),
									(o = a = ie ? H : Xt()),
									!ft &&
										!ie &&
										(o < H && Xt(H), (Ot.scroll.rec = 0)),
									Ot.revert(!1, !0),
									(Yt = Vt()),
									L && ((At = -1), L.restart(!0)),
									(Ht = 0),
									r &&
										gt &&
										(r._initted || I) &&
										r.progress() !== I &&
										r
											.progress(I || 0, !0)
											.render(r.time(), !0, !0),
									(K ||
										Ft !== Ot.progress ||
										ft ||
										nt ||
										(r && !r._initted)) &&
										(r &&
											!gt &&
											(r._initted ||
												Ft ||
												!1 !==
													r.vars.immediateRender) &&
											r.totalProgress(
												ft && l < -0.001 && !Ft
													? D.utils.normalize(l, u, 0)
													: Ft,
												!0,
											),
										(Ot.progress =
											K || (o - l) / g === Ft ? 0 : Ft)),
									et &&
										it &&
										(w._pinOffset = Math.round(
											Ot.progress * M,
										)),
									F && F.invalidate(),
									isNaN(q) ||
										((q -= D.getProperty(f, mt.p)),
										(U -= D.getProperty(p, mt.p)),
										wn(f, mt, q),
										wn(h, mt, q - (b || 0)),
										wn(p, mt, U),
										wn(c, mt, U - (b || 0))),
									K && !ie && Ot.update(),
									Q &&
										!ie &&
										!m &&
										((m = !0), Q(Ot), (m = !1));
							}
						}),
						(Ot.getVelocity = function () {
							return ((Xt() - a) / (Vt() - Dr)) * 1e3 || 0;
						}),
						(Ot.endAnimation = function () {
							Er(Ot.callbackAnimation),
								r &&
									(F
										? F.progress(1)
										: r.paused()
											? gt || Er(r, Ot.direction < 0, 1)
											: Er(r, r.reversed()));
						}),
						(Ot.labelToScroll = function (t) {
							return (
								(r &&
									r.labels &&
									(l || Ot.refresh() || l) +
										(r.labels[t] / r.duration()) * g) ||
								0
							);
						}),
						(Ot.getTrailing = function (t) {
							var e = Y.indexOf(Ot),
								r =
									Ot.direction > 0
										? Y.slice(0, e).reverse()
										: Y.slice(e + 1);
							return (
								ge(t)
									? r.filter(function (e) {
											return e.vars.preventOverlaps === t;
										})
									: r
							).filter(function (t) {
								return Ot.direction > 0
									? t.end <= l
									: t.start >= u;
							});
						}),
						(Ot.update = function (t, e, n) {
							if (!ft || n || t) {
								var s,
									h,
									c,
									p,
									d,
									m,
									v,
									b = !0 === ie ? H : Ot.scroll(),
									x = t ? 0 : (b - l) / g,
									D = x < 0 ? 0 : x > 1 ? 1 : x || 0,
									E = Ot.progress;
								if (
									(e &&
										((a = o),
										(o = ft ? Xt() : b),
										ut &&
											((A = z),
											(z =
												r && !gt
													? r.totalProgress()
													: D))),
									st &&
										et &&
										!Ht &&
										!dn &&
										Re &&
										(!D &&
										l < b + ((b - a) / (Vt() - Dr)) * st
											? (D = 1e-4)
											: 1 === D &&
												u >
													b +
														((b - a) /
															(Vt() - Dr)) *
															st &&
												(D = 0.9999)),
									D !== E && Ot.enabled)
								) {
									if (
										((p =
											(d =
												(s = Ot.isActive =
													!!D && D < 1) !==
												(!!E && E < 1)) || !!D != !!E),
										(Ot.direction = D > E ? 1 : -1),
										(Ot.progress = D),
										p &&
											!Ht &&
											((h =
												D && !E
													? 0
													: 1 === D
														? 1
														: 1 === E
															? 2
															: 3),
											gt &&
												((c =
													(!d &&
														"none" !== xt[h + 1] &&
														xt[h + 1]) ||
													xt[h]),
												(v =
													r &&
													("complete" === c ||
														"reset" === c ||
														c in r)))),
										dt &&
											(d || v) &&
											(v || Z || !r) &&
											($t(dt)
												? dt(Ot)
												: Ot.getTrailing(dt).forEach(
														function (t) {
															return t.endAnimation();
														},
													)),
										gt ||
											(!F || Ht || dn
												? r &&
													r.totalProgress(
														D,
														!(!Ht || (!Yt && !t)),
													)
												: (F._dp._time - F._start !==
														F._time &&
														F.render(
															F._dp._time -
																F._start,
														),
													F.resetTo
														? F.resetTo(
																"totalProgress",
																D,
																r._tTime /
																	r._tDur,
															)
														: ((F.vars.totalProgress =
																D),
															F.invalidate().restart()))),
										et)
									)
										if (
											(t &&
												it &&
												(w.style[it + mt.os2] = k),
											wt)
										) {
											if (p) {
												if (
													((m =
														!t &&
														D > E &&
														u + 1 > b &&
														b + 1 >= qe(vt, mt)),
													ht)
												)
													if (t || (!s && !m))
														Yo(et, w);
													else {
														var R = ri(et, !0),
															Y = b - l;
														Yo(
															et,
															j,
															R.top +
																(mt === Pt
																	? Y
																	: 0) +
																kt,
															R.left +
																(mt === Pt
																	? 0
																	: Y) +
																kt,
														);
													}
												_r(s || m ? _ : y),
													(C && D < 1 && s) ||
														T(
															S +
																(1 !== D || m
																	? 0
																	: M),
														);
											}
										} else T(Ar(S + M * D));
									ut &&
										!i.tween &&
										!Ht &&
										!dn &&
										L.restart(!0),
										$ &&
											(d ||
												(lt && D && (D < 1 || !is))) &&
											rn($.targets).forEach(function (t) {
												return t.classList[
													s || lt ? "add" : "remove"
												]($.className);
											}),
										G && !gt && !t && G(Ot),
										p && !Ht
											? (gt &&
													(v &&
														("complete" === c
															? r
																	.pause()
																	.totalProgress(
																		1,
																	)
															: "reset" === c
																? r
																		.restart(
																			!0,
																		)
																		.pause()
																: "restart" ===
																		c
																	? r.restart(
																			!0,
																		)
																	: r[c]()),
													G && G(Ot)),
												(d || !is) &&
													(J && d && ns(Ot, J),
													bt[h] && ns(Ot, bt[h]),
													lt &&
														(1 === D
															? Ot.kill(!1, 1)
															: (bt[h] = 0)),
													d ||
														(bt[
															(h =
																1 === D ? 1 : 3)
														] &&
															ns(Ot, bt[h]))),
												pt &&
													!s &&
													Math.abs(Ot.getVelocity()) >
														(zr(pt) ? pt : 2500) &&
													(Er(Ot.callbackAnimation),
													F
														? F.progress(1)
														: Er(
																r,
																"reverse" === c
																	? 1
																	: !D,
																1,
															)))
											: gt && G && !Ht && G(Ot);
								}
								if (P) {
									var X = ft
										? (b / ft.duration()) *
											(ft._caScrollDist || 0)
										: b;
									O(X + (f._isFlipped ? 1 : 0)), P(X);
								}
								q &&
									q(
										(-b / ft.duration()) *
											(ft._caScrollDist || 0),
									);
							}
						}),
						(Ot.enable = function (e, r) {
							Ot.enabled ||
								((Ot.enabled = !0),
								Dt(vt, "resize", Lr),
								yt || Dt(vt, "scroll", rr),
								Ct && Dt(t, "refreshInit", Ct),
								!1 !== e &&
									((Ot.progress = Ft = 0),
									(o = a = At = Xt())),
								!1 !== r && Ot.refresh());
						}),
						(Ot.getTween = function (t) {
							return t && i ? i.tween : F;
						}),
						(Ot.setPositions = function (t, e, r, i) {
							if (ft) {
								var n = ft.scrollTrigger,
									s = ft.duration(),
									o = n.end - n.start;
								(t = n.start + (o * t) / s),
									(e = n.start + (o * e) / s);
							}
							Ot.refresh(
								!1,
								!1,
								{
									start: Mo(t, r && !!Ot._startClamp),
									end: Mo(e, r && !!Ot._endClamp),
								},
								i,
							),
								Ot.update();
						}),
						(Ot.adjustPinSpacing = function (t) {
							if (E && t) {
								var e = E.indexOf(mt.d) + 1;
								(E[e] = parseFloat(E[e]) + t + kt),
									(E[1] = parseFloat(E[1]) + t + kt),
									_r(E);
							}
						}),
						(Ot.disable = function (e, r) {
							if (
								(!1 !== e && Ot.revert(!0, !0),
								Ot.enabled &&
									((Ot.enabled = Ot.isActive = !1),
									r || (F && F.pause()),
									(H = 0),
									n && (n.uncache = 1),
									Ct && Mt(t, "refreshInit", Ct),
									L &&
										(L.pause(),
										i.tween &&
											i.tween.kill() &&
											(i.tween = 0)),
									!yt))
							) {
								for (var s = Y.length; s--; )
									if (Y[s].scroller === vt && Y[s] !== Ot)
										return;
								Mt(vt, "resize", Lr),
									yt || Mt(vt, "scroll", rr);
							}
						}),
						(Ot.kill = function (t, i) {
							Ot.disable(t, i),
								F && !i && F.kill(),
								K && delete Ms[K];
							var s = Y.indexOf(Ot);
							s >= 0 && Y.splice(s, 1),
								s === ee && En > 0 && ee--,
								(s = 0),
								Y.forEach(function (t) {
									return (
										t.scroller === Ot.scroller && (s = 1)
									);
								}),
								s || ie || (Ot.scroll.rec = 0),
								r &&
									((r.scrollTrigger = null),
									t && r.revert({ kill: !1 }),
									i || r.kill()),
								h &&
									[h, c, f, p].forEach(function (t) {
										return (
											t.parentNode &&
											t.parentNode.removeChild(t)
										);
									}),
								Gr === Ot && (Gr = 0),
								et &&
									(n && (n.uncache = 1),
									(s = 0),
									Y.forEach(function (t) {
										return t.pin === et && s++;
									}),
									s || (n.spacer = 0)),
								e.onKill && e.onKill(Ot);
						}),
						Y.push(Ot),
						Ot.enable(!1, !1),
						U && U(Ot),
						r && r.add && !g)
					) {
						var It = Ot.update;
						(Ot.update = function () {
							(Ot.update = It), X.cache++, l || u || Ot.refresh();
						}),
							D.delayedCall(0.01, Ot.update),
							(g = 0.01),
							(l = u = 0);
					} else Ot.refresh();
					et && Gu();
				} else this.update = this.refresh = this.kill = Ve;
			}),
			(t.register = function (e) {
				return (
					nr ||
						((D = e || rl()),
						il() && window.document && t.enable(),
						(nr = Rr)),
					nr
				);
			}),
			(t.defaults = function (t) {
				if (t) for (var e in t) mn[e] = t[e];
				return mn;
			}),
			(t.disable = function (t, e) {
				(Rr = 0),
					Y.forEach(function (r) {
						return r[e ? "kill" : "disable"](t);
					}),
					Mt(W, "wheel", rr),
					Mt(rt, "scroll", rr),
					clearInterval(cn),
					Mt(rt, "touchcancel", Ve),
					Mt(j, "touchstart", Ve),
					pn(Mt, rt, "pointerdown,touchstart,mousedown", Do),
					pn(Mt, rt, "pointerup,touchend,mouseup", Ro),
					Yn.kill(),
					_n(Mt);
				for (var r = 0; r < X.length; r += 3)
					gn(Mt, X[r], X[r + 1]), gn(Mt, X[r], X[r + 2]);
			}),
			(t.enable = function () {
				if (
					((W = window),
					(rt = document),
					(ve = rt.documentElement),
					(j = rt.body),
					D &&
						((rn = D.utils.toArray),
						(Br = D.utils.clamp),
						(Es = D.core.context || Ve),
						(es = D.core.suppressOverwrites || Ve),
						(js = W.history.scrollRestoration || "auto"),
						(Ds = W.pageYOffset || 0),
						D.core.globals("ScrollTrigger", t),
						j))
				) {
					(Rr = 1),
						((dr = document.createElement("div")).style.height =
							"100vh"),
						(dr.style.position = "absolute"),
						dl(),
						Xu(),
						wt.register(D),
						(t.isTouch = wt.isTouch),
						(pi =
							wt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(
								navigator.userAgent,
							)),
						(Ps = 1 === wt.isTouch),
						Dt(W, "wheel", rr),
						(Js = [W, rt, ve, j]),
						D.matchMedia
							? ((t.matchMedia = function (t) {
									var e,
										r = D.matchMedia();
									for (e in t) r.add(e, t[e]);
									return r;
								}),
								D.addEventListener(
									"matchMediaInit",
									function () {
										hl(), so();
									},
								),
								D.addEventListener(
									"matchMediaRevert",
									function () {
										return fl();
									},
								),
								D.addEventListener("matchMedia", function () {
									Wi(0, 1), Qi("matchMedia");
								}),
								D.matchMedia().add(
									"(orientation: portrait)",
									function () {
										return ss(), ss;
									},
								))
							: console.warn("Requires GSAP 3.11.0 or later"),
						ss(),
						Dt(rt, "scroll", rr);
					var e,
						r,
						i = j.hasAttribute("style"),
						n = j.style,
						s = n.borderTopStyle,
						o = D.core.Animation.prototype;
					for (
						o.revert ||
							Object.defineProperty(o, "revert", {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							n.borderTopStyle = "solid",
							e = ri(j),
							Pt.m = Math.round(e.top + Pt.sc()) || 0,
							ne.m = Math.round(e.left + ne.sc()) || 0,
							s
								? (n.borderTopStyle = s)
								: n.removeProperty("border-top-style"),
							i ||
								(j.setAttribute("style", ""),
								j.removeAttribute("style")),
							cn = setInterval(Lo, 250),
							D.delayedCall(0.5, function () {
								return (dn = 0);
							}),
							Dt(rt, "touchcancel", Ve),
							Dt(j, "touchstart", Ve),
							pn(Dt, rt, "pointerdown,touchstart,mousedown", Do),
							pn(Dt, rt, "pointerup,touchend,mouseup", Ro),
							ks = D.utils.checkPrefix("transform"),
							On.push(ks),
							nr = Vt(),
							Yn = D.delayedCall(0.2, Wi).pause(),
							sr = [
								rt,
								"visibilitychange",
								function () {
									var t = W.innerWidth,
										e = W.innerHeight;
									rt.hidden
										? ((Po = t), (Eo = e))
										: (Po !== t || Eo !== e) && Lr();
								},
								rt,
								"DOMContentLoaded",
								Wi,
								W,
								"load",
								Wi,
								W,
								"resize",
								Lr,
							],
							_n(Dt),
							Y.forEach(function (t) {
								return t.enable(0, 1);
							}),
							r = 0;
						r < X.length;
						r += 3
					)
						gn(Mt, X[r], X[r + 1]), gn(Mt, X[r], X[r + 2]);
				}
			}),
			(t.config = function (e) {
				"limitCallbacks" in e && (is = !!e.limitCallbacks);
				var r = e.syncInterval;
				(r && clearInterval(cn)) || ((cn = r) && setInterval(Lo, r)),
					"ignoreMobileResize" in e &&
						(Ps = 1 === t.isTouch && e.ignoreMobileResize),
					"autoRefreshEvents" in e &&
						(_n(Mt) || _n(Dt, e.autoRefreshEvents || "none"),
						(ja =
							-1 ===
							(e.autoRefreshEvents + "").indexOf("resize")));
			}),
			(t.scrollerProxy = function (t, e) {
				var r = oe(t),
					i = X.indexOf(r),
					n = Gi(r);
				~i && X.splice(i, n ? 6 : 2),
					e && (n ? Ge.unshift(W, e, j, e, ve, e) : Ge.unshift(r, e));
			}),
			(t.clearMatchMedia = function (t) {
				Y.forEach(function (e) {
					return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
				});
			}),
			(t.isInViewport = function (t, e, r) {
				var i = (ge(t) ? oe(t) : t).getBoundingClientRect(),
					n = i[r ? Ui : $i] * e || 0;
				return r
					? i.right - n > 0 && i.left + n < W.innerWidth
					: i.bottom - n > 0 && i.top + n < W.innerHeight;
			}),
			(t.positionInViewport = function (t, e, r) {
				ge(t) && (t = oe(t));
				var i = t.getBoundingClientRect(),
					n = i[r ? Ui : $i],
					s =
						null == e
							? n / 2
							: e in Xn
								? Xn[e] * n
								: ~e.indexOf("%")
									? (parseFloat(e) * n) / 100
									: parseFloat(e) || 0;
				return r
					? (i.left + s) / W.innerWidth
					: (i.top + s) / W.innerHeight;
			}),
			(t.killAll = function (t) {
				if (
					(Y.slice(0).forEach(function (t) {
						return "ScrollSmoother" !== t.vars.id && t.kill();
					}),
					!0 !== t)
				) {
					var e = Ki.killAll || [];
					(Ki = {}),
						e.forEach(function (t) {
							return t();
						});
				}
			}),
			t
		);
	})();
(V.version = "3.14.1"),
	(V.saveStyles = function (t) {
		return t
			? rn(t).forEach(function (t) {
					if (t && t.style) {
						var e = pe.indexOf(t);
						e >= 0 && pe.splice(e, 5),
							pe.push(
								t,
								t.style.cssText,
								t.getBBox && t.getAttribute("transform"),
								D.core.getCache(t),
								Es(),
							);
					}
				})
			: pe;
	}),
	(V.revert = function (t, e) {
		return so(!t, e);
	}),
	(V.create = function (t, e) {
		return new V(t, e);
	}),
	(V.refresh = function (t) {
		return t ? Lr(!0) : (nr || V.register()) && Wi(!0);
	}),
	(V.update = function (t) {
		return ++X.cache && si(!0 === t ? 2 : 0);
	}),
	(V.clearScrollMemory = cl),
	(V.maxScroll = function (t, e) {
		return qe(t, e ? ne : Pt);
	}),
	(V.getScrollFunc = function (t, e) {
		return Pi(oe(t), e ? ne : Pt);
	}),
	(V.getById = function (t) {
		return Ms[t];
	}),
	(V.getAll = function () {
		return Y.filter(function (t) {
			return "ScrollSmoother" !== t.vars.id;
		});
	}),
	(V.isScrolling = function () {
		return !!Re;
	}),
	(V.snapDirectional = no),
	(V.addEventListener = function (t, e) {
		var r = Ki[t] || (Ki[t] = []);
		~r.indexOf(e) || r.push(e);
	}),
	(V.removeEventListener = function (t, e) {
		var r = Ki[t],
			i = r && r.indexOf(e);
		i >= 0 && r.splice(i, 1);
	}),
	(V.batch = function (t, e) {
		var r,
			i = [],
			n = {},
			s = e.interval || 0.016,
			o = e.batchMax || 1e9,
			a = function (t, e) {
				var r = [],
					i = [],
					n = D.delayedCall(s, function () {
						e(r, i), (r = []), (i = []);
					}).pause();
				return function (t) {
					r.length || n.restart(!0),
						r.push(t.trigger),
						i.push(t),
						o <= r.length && n.progress(1);
				};
			};
		for (r in e)
			n[r] =
				"on" === r.substr(0, 2) && $t(e[r]) && "onRefreshInit" !== r
					? a(0, e[r])
					: e[r];
		return (
			$t(o) &&
				((o = o()),
				Dt(V, "refresh", function () {
					return (o = e.batchMax());
				})),
			rn(t).forEach(function (t) {
				var e = {};
				for (r in n) e[r] = n[r];
				(e.trigger = t), i.push(V.create(e));
			}),
			i
		);
	});
var Bo,
	Xo = function (t, e, r, i) {
		return (
			e > i ? t(i) : e < 0 && t(0),
			r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
		);
	},
	as = function t(e, r) {
		!0 === r
			? e.style.removeProperty("touch-action")
			: (e.style.touchAction =
					!0 === r
						? "auto"
						: r
							? "pan-" + r + (wt.isTouch ? " pinch-zoom" : "")
							: "none"),
			e === ve && t(j, r);
	},
	xn = { auto: 1, scroll: 1 },
	ju = function (t) {
		var e,
			r = t.event,
			i = t.target,
			n = t.axis,
			s = (r.changedTouches ? r.changedTouches[0] : r).target,
			o = s._gsap || D.core.getCache(s),
			a = Vt();
		if (!o._isScrollT || a - o._isScrollT > 2e3) {
			for (
				;
				s &&
				s !== j &&
				((s.scrollHeight <= s.clientHeight &&
					s.scrollWidth <= s.clientWidth) ||
					(!xn[(e = Oe(s)).overflowY] && !xn[e.overflowX]));
			)
				s = s.parentNode;
			(o._isScroll =
				s &&
				s !== i &&
				!Gi(s) &&
				(xn[(e = Oe(s)).overflowY] || xn[e.overflowX])),
				(o._isScrollT = a);
		}
		(o._isScroll || "x" === n) &&
			(r.stopPropagation(), (r._gsapAllow = !0));
	},
	pl = function (t, e, r, i) {
		return wt.create({
			target: t,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: e,
			onWheel: (i = i && ju),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && Dt(rt, wt.eventTypes[0], Ho, !1, !0);
			},
			onDisable: function () {
				return Mt(rt, wt.eventTypes[0], Ho, !0);
			},
		});
	},
	tf = /(input|label|select|textarea)/i,
	Ho = function (t) {
		var e = tf.test(t.target.tagName);
		(e || Bo) && ((t._gsapAllow = !0), (Bo = e));
	},
	ef = function (t) {
		Ii(t) || (t = {}),
			(t.preventDefault = t.isNormalizer = t.allowClicks = !0),
			t.type || (t.type = "wheel,touch"),
			(t.debounce = !!t.debounce),
			(t.id = t.id || "normalizer");
		var e,
			r,
			i,
			n,
			s,
			o,
			a,
			l,
			u = t,
			h = u.normalizeScrollX,
			c = u.momentum,
			f = u.allowNestedScroll,
			p = u.onRelease,
			d = oe(t.target) || ve,
			m = D.core.globals().ScrollSmoother,
			g = m && m.get(),
			v =
				pi &&
				((t.content && oe(t.content)) ||
					(g && !1 !== t.content && !g.smooth() && g.content())),
			_ = Pi(d, Pt),
			y = Pi(d, ne),
			w = 1,
			b =
				(wt.isTouch && W.visualViewport
					? W.visualViewport.scale * W.visualViewport.width
					: W.outerWidth) / W.innerWidth,
			x = 0,
			T = $t(c)
				? function () {
						return c(e);
					}
				: function () {
						return c || 2.8;
					},
			S = pl(d, t.type, !0, f),
			M = function () {
				return (n = !1);
			},
			k = Ve,
			E = Ve,
			O = function () {
				(r = qe(d, Pt)),
					(E = Br(pi ? 1 : 0, r)),
					h && (k = Br(0, qe(d, ne))),
					(i = qi);
			},
			C = function () {
				(v._gsap.y = Ar(parseFloat(v._gsap.y) + _.offset) + "px"),
					(v.style.transform =
						"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
						parseFloat(v._gsap.y) +
						", 0, 1)"),
					(_.offset = _.cacheID = 0);
			},
			P = function () {
				O(),
					s.isActive() &&
						s.vars.scrollY > r &&
						(_() > r
							? s.progress(1) && _(r)
							: s.resetTo("scrollY", r));
			};
		return (
			v && D.set(v, { y: "+=0" }),
			(t.ignoreCheck = function (t) {
				return (
					(pi &&
						"touchmove" === t.type &&
						(function () {
							if (n) {
								requestAnimationFrame(M);
								var t = Ar(e.deltaY / 2),
									r = E(_.v - t);
								if (v && r !== _.v + _.offset) {
									_.offset = r - _.v;
									var i = Ar(
										(parseFloat(v && v._gsap.y) || 0) -
											_.offset,
									);
									(v.style.transform =
										"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
										i +
										", 0, 1)"),
										(v._gsap.y = i + "px"),
										(_.cacheID = X.cache),
										si();
								}
								return !0;
							}
							_.offset && C(), (n = !0);
						})()) ||
					(w > 1.05 && "touchstart" !== t.type) ||
					e.isGesturing ||
					(t.touches && t.touches.length > 1)
				);
			}),
			(t.onPress = function () {
				n = !1;
				var t = w;
				(w = Ar(
					((W.visualViewport && W.visualViewport.scale) || 1) / b,
				)),
					s.pause(),
					t !== w && as(d, w > 1.01 || (!h && "x")),
					(o = y()),
					(a = _()),
					O(),
					(i = qi);
			}),
			(t.onRelease = t.onGestureStart =
				function (t, e) {
					if ((_.offset && C(), e)) {
						X.cache++;
						var i,
							n,
							o = T();
						h &&
							((n =
								(i = y()) + (0.05 * o * -t.velocityX) / 0.227),
							(o *= Xo(y, i, n, qe(d, ne))),
							(s.vars.scrollX = k(n))),
							(n = (i = _()) + (0.05 * o * -t.velocityY) / 0.227),
							(o *= Xo(_, i, n, qe(d, Pt))),
							(s.vars.scrollY = E(n)),
							s.invalidate().duration(o).play(0.01),
							((pi && s.vars.scrollY >= r) || i >= r - 1) &&
								D.to({}, { onUpdate: P, duration: o });
					} else l.restart(!0);
					p && p(t);
				}),
			(t.onWheel = function () {
				s._ts && s.pause(), Vt() - x > 1e3 && ((i = 0), (x = Vt()));
			}),
			(t.onChange = function (t, e, r, n, s) {
				if (
					(qi !== i && O(),
					e &&
						h &&
						y(
							k(
								n[2] === e
									? o + (t.startX - t.x)
									: y() + e - n[1],
							),
						),
					r)
				) {
					_.offset && C();
					var l = s[2] === r,
						u = l ? a + t.startY - t.y : _() + r - s[1],
						c = E(u);
					l && u !== c && (a += c - u), _(c);
				}
				(r || e) && si();
			}),
			(t.onEnable = function () {
				as(d, !h && "x"),
					V.addEventListener("refresh", P),
					Dt(W, "resize", P),
					_.smooth &&
						((_.target.style.scrollBehavior = "auto"),
						(_.smooth = y.smooth = !1)),
					S.enable();
			}),
			(t.onDisable = function () {
				as(d, !0),
					Mt(W, "resize", P),
					V.removeEventListener("refresh", P),
					S.kill();
			}),
			(t.lockAxis = !1 !== t.lockAxis),
			((e = new wt(t)).iOS = pi),
			pi && !_() && _(1),
			pi && D.ticker.add(Ve),
			(l = e._dc),
			(s = D.to(e, {
				ease: "power4",
				paused: !0,
				inherit: !1,
				scrollX: h ? "+=0.1" : "+=0",
				scrollY: "+=0.1",
				modifiers: {
					scrollY: _l(_, _(), function () {
						return s.pause();
					}),
				},
				onUpdate: si,
				onComplete: l.vars.onComplete,
			})),
			e
		);
	};
(V.sort = function (t) {
	if ($t(t)) return Y.sort(t);
	var e = W.pageYOffset || 0;
	return (
		V.getAll().forEach(function (t) {
			return (t._sortY = t.trigger
				? e + t.trigger.getBoundingClientRect().top
				: t.start + W.innerHeight);
		}),
		Y.sort(
			t ||
				function (t, e) {
					return (
						-1e6 * (t.vars.refreshPriority || 0) +
						(t.vars.containerAnimation ? 1e6 : t._sortY) -
						((e.vars.containerAnimation ? 1e6 : e._sortY) +
							-1e6 * (e.vars.refreshPriority || 0))
					);
				},
		)
	);
}),
	(V.observe = function (t) {
		return new wt(t);
	}),
	(V.normalizeScroll = function (t) {
		if (typeof t > "u") return te;
		if (!0 === t && te) return te.enable();
		if (!1 === t) return te && te.kill(), void (te = t);
		var e = t instanceof wt ? t : ef(t);
		return (
			te && te.target === e.target && te.kill(),
			Gi(e.target) && (te = e),
			e
		);
	}),
	(V.core = {
		_getVelocityProp: Cs,
		_inputObserver: pl,
		_scrollers: X,
		_proxies: Ge,
		bridge: {
			ss: function () {
				Re || Qi("scrollStart"), (Re = Vt());
			},
			ref: function () {
				return Ht;
			},
		},
	}),
	rl() && D.registerPlugin(V);
var rf = "1.3.16";
function gl(t, e, r) {
	return Math.max(t, Math.min(e, r));
}
function nf(t, e, r) {
	return (1 - r) * t + r * e;
}
function sf(t, e, r, i) {
	return nf(t, e, 1 - Math.exp(-r * i));
}
function of(t, e) {
	return ((t % e) + e) % e;
}
var af = class {
	isRunning = !1;
	value = 0;
	from = 0;
	to = 0;
	currentTime = 0;
	lerp;
	duration;
	easing;
	onUpdate;
	advance(t) {
		if (!this.isRunning) return;
		let e = !1;
		if (this.duration && this.easing) {
			this.currentTime += t;
			const r = gl(0, this.currentTime / this.duration, 1);
			e = r >= 1;
			const i = e ? 1 : this.easing(r);
			this.value = this.from + (this.to - this.from) * i;
		} else
			this.lerp
				? ((this.value = sf(this.value, this.to, 60 * this.lerp, t)),
					Math.round(this.value) === this.to &&
						((this.value = this.to), (e = !0)))
				: ((this.value = this.to), (e = !0));
		e && this.stop(), this.onUpdate?.(this.value, e);
	}
	stop() {
		this.isRunning = !1;
	}
	fromTo(t, e, { lerp: r, duration: i, easing: n, onStart: s, onUpdate: o }) {
		(this.from = this.value = t),
			(this.to = e),
			(this.lerp = r),
			(this.duration = i),
			(this.easing = n),
			(this.currentTime = 0),
			(this.isRunning = !0),
			s?.(),
			(this.onUpdate = o);
	}
};
function lf(t, e) {
	let r;
	return function (...i) {
		let n = this;
		clearTimeout(r),
			(r = setTimeout(() => {
				(r = void 0), t.apply(n, i);
			}, e));
	};
}
var uf = class {
		constructor(t, e, { autoResize: r = !0, debounce: i = 250 } = {}) {
			(this.wrapper = t),
				(this.content = e),
				r &&
					((this.debouncedResize = lf(this.resize, i)),
					this.wrapper instanceof Window
						? window.addEventListener(
								"resize",
								this.debouncedResize,
								!1,
							)
						: ((this.wrapperResizeObserver = new ResizeObserver(
								this.debouncedResize,
							)),
							this.wrapperResizeObserver.observe(this.wrapper)),
					(this.contentResizeObserver = new ResizeObserver(
						this.debouncedResize,
					)),
					this.contentResizeObserver.observe(this.content)),
				this.resize();
		}
		width = 0;
		height = 0;
		scrollHeight = 0;
		scrollWidth = 0;
		debouncedResize;
		wrapperResizeObserver;
		contentResizeObserver;
		destroy() {
			this.wrapperResizeObserver?.disconnect(),
				this.contentResizeObserver?.disconnect(),
				this.wrapper === window &&
					this.debouncedResize &&
					window.removeEventListener(
						"resize",
						this.debouncedResize,
						!1,
					);
		}
		resize = () => {
			this.onWrapperResize(), this.onContentResize();
		};
		onWrapperResize = () => {
			this.wrapper instanceof Window
				? ((this.width = window.innerWidth),
					(this.height = window.innerHeight))
				: ((this.width = this.wrapper.clientWidth),
					(this.height = this.wrapper.clientHeight));
		};
		onContentResize = () => {
			this.wrapper instanceof Window
				? ((this.scrollHeight = this.content.scrollHeight),
					(this.scrollWidth = this.content.scrollWidth))
				: ((this.scrollHeight = this.wrapper.scrollHeight),
					(this.scrollWidth = this.wrapper.scrollWidth));
		};
		get limit() {
			return {
				x: this.scrollWidth - this.width,
				y: this.scrollHeight - this.height,
			};
		}
	},
	ml = class {
		events = {};
		emit(t, ...e) {
			let r = this.events[t] || [];
			for (let t = 0, i = r.length; t < i; t++) r[t]?.(...e);
		}
		on(t, e) {
			return (
				this.events[t]?.push(e) || (this.events[t] = [e]),
				() => {
					this.events[t] = this.events[t]?.filter((t) => e !== t);
				}
			);
		}
		off(t, e) {
			this.events[t] = this.events[t]?.filter((t) => e !== t);
		}
		destroy() {
			this.events = {};
		}
	},
	Vo = 100 / 6,
	_i = { passive: !1 },
	ff = class {
		constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
			(this.element = t),
				(this.options = e),
				window.addEventListener("resize", this.onWindowResize, !1),
				this.onWindowResize(),
				this.element.addEventListener("wheel", this.onWheel, _i),
				this.element.addEventListener(
					"touchstart",
					this.onTouchStart,
					_i,
				),
				this.element.addEventListener(
					"touchmove",
					this.onTouchMove,
					_i,
				),
				this.element.addEventListener("touchend", this.onTouchEnd, _i);
		}
		touchStart = { x: 0, y: 0 };
		lastDelta = { x: 0, y: 0 };
		window = { width: 0, height: 0 };
		emitter = new ml();
		on(t, e) {
			return this.emitter.on(t, e);
		}
		destroy() {
			this.emitter.destroy(),
				window.removeEventListener("resize", this.onWindowResize, !1),
				this.element.removeEventListener("wheel", this.onWheel, _i),
				this.element.removeEventListener(
					"touchstart",
					this.onTouchStart,
					_i,
				),
				this.element.removeEventListener(
					"touchmove",
					this.onTouchMove,
					_i,
				),
				this.element.removeEventListener(
					"touchend",
					this.onTouchEnd,
					_i,
				);
		}
		onTouchStart = (t) => {
			const { clientX: e, clientY: r } = t.targetTouches
				? t.targetTouches[0]
				: t;
			(this.touchStart.x = e),
				(this.touchStart.y = r),
				(this.lastDelta = { x: 0, y: 0 }),
				this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
		};
		onTouchMove = (t) => {
			const { clientX: e, clientY: r } = t.targetTouches
					? t.targetTouches[0]
					: t,
				i = -(e - this.touchStart.x) * this.options.touchMultiplier,
				n = -(r - this.touchStart.y) * this.options.touchMultiplier;
			(this.touchStart.x = e),
				(this.touchStart.y = r),
				(this.lastDelta = { x: i, y: n }),
				this.emitter.emit("scroll", { deltaX: i, deltaY: n, event: t });
		};
		onTouchEnd = (t) => {
			this.emitter.emit("scroll", {
				deltaX: this.lastDelta.x,
				deltaY: this.lastDelta.y,
				event: t,
			});
		};
		onWheel = (t) => {
			let { deltaX: e, deltaY: r, deltaMode: i } = t;
			(e *= 1 === i ? Vo : 2 === i ? this.window.width : 1),
				(r *= 1 === i ? Vo : 2 === i ? this.window.height : 1),
				(e *= this.options.wheelMultiplier),
				(r *= this.options.wheelMultiplier),
				this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: t });
		};
		onWindowResize = () => {
			this.window = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
		};
	},
	Uo = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	hf = class {
		_isScrolling = !1;
		_isStopped = !1;
		_isLocked = !1;
		_preventNextNativeScrollEvent = !1;
		_resetVelocityTimeout = null;
		__rafID = null;
		isTouching;
		time = 0;
		userData = {};
		lastVelocity = 0;
		velocity = 0;
		direction = 0;
		options;
		targetScroll;
		animatedScroll;
		animate = new af();
		emitter = new ml();
		dimensions;
		virtualScroll;
		constructor({
			wrapper: t = window,
			content: e = document.documentElement,
			eventsTarget: r = t,
			smoothWheel: i = !0,
			syncTouch: n = !1,
			syncTouchLerp: s = 0.075,
			touchInertiaExponent: o = 1.7,
			duration: a,
			easing: l,
			lerp: u = 0.1,
			infinite: h = !1,
			orientation: c = "vertical",
			gestureOrientation: f = "horizontal" === c ? "both" : "vertical",
			touchMultiplier: p = 1,
			wheelMultiplier: d = 1,
			autoResize: m = !0,
			prevent: g,
			virtualScroll: v,
			overscroll: _ = !0,
			autoRaf: y = !1,
			anchors: w = !1,
			autoToggle: b = !1,
			allowNestedScroll: x = !1,
			__experimental__naiveDimensions: T = !1,
		} = {}) {
			(window.lenisVersion = rf),
				(!t || t === document.documentElement) && (t = window),
				"number" == typeof a && "function" != typeof l
					? (l = Uo)
					: "function" == typeof l && "number" != typeof a && (a = 1),
				(this.options = {
					wrapper: t,
					content: e,
					eventsTarget: r,
					smoothWheel: i,
					syncTouch: n,
					syncTouchLerp: s,
					touchInertiaExponent: o,
					duration: a,
					easing: l,
					lerp: u,
					infinite: h,
					gestureOrientation: f,
					orientation: c,
					touchMultiplier: p,
					wheelMultiplier: d,
					autoResize: m,
					prevent: g,
					virtualScroll: v,
					overscroll: _,
					autoRaf: y,
					anchors: w,
					autoToggle: b,
					allowNestedScroll: x,
					__experimental__naiveDimensions: T,
				}),
				(this.dimensions = new uf(t, e, { autoResize: m })),
				this.updateClassName(),
				(this.targetScroll = this.animatedScroll = this.actualScroll),
				this.options.wrapper.addEventListener(
					"scroll",
					this.onNativeScroll,
					!1,
				),
				this.options.wrapper.addEventListener(
					"scrollend",
					this.onScrollEnd,
					{ capture: !0 },
				),
				this.options.anchors &&
					this.options.wrapper === window &&
					this.options.wrapper.addEventListener(
						"click",
						this.onClick,
						!1,
					),
				this.options.wrapper.addEventListener(
					"pointerdown",
					this.onPointerDown,
					!1,
				),
				(this.virtualScroll = new ff(r, {
					touchMultiplier: p,
					wheelMultiplier: d,
				})),
				this.virtualScroll.on("scroll", this.onVirtualScroll),
				this.options.autoToggle &&
					(this.checkOverflow(),
					this.rootElement.addEventListener(
						"transitionend",
						this.onTransitionEnd,
						{ passive: !0 },
					)),
				this.options.autoRaf &&
					(this.__rafID = requestAnimationFrame(this.raf));
		}
		destroy() {
			this.emitter.destroy(),
				this.options.wrapper.removeEventListener(
					"scroll",
					this.onNativeScroll,
					!1,
				),
				this.options.wrapper.removeEventListener(
					"scrollend",
					this.onScrollEnd,
					{ capture: !0 },
				),
				this.options.wrapper.removeEventListener(
					"pointerdown",
					this.onPointerDown,
					!1,
				),
				this.options.anchors &&
					this.options.wrapper === window &&
					this.options.wrapper.removeEventListener(
						"click",
						this.onClick,
						!1,
					),
				this.virtualScroll.destroy(),
				this.dimensions.destroy(),
				this.cleanUpClassName(),
				this.__rafID && cancelAnimationFrame(this.__rafID);
		}
		on(t, e) {
			return this.emitter.on(t, e);
		}
		off(t, e) {
			return this.emitter.off(t, e);
		}
		onScrollEnd = (t) => {
			t instanceof CustomEvent ||
				(("smooth" === this.isScrolling || !1 === this.isScrolling) &&
					t.stopPropagation());
		};
		dispatchScrollendEvent = () => {
			this.options.wrapper.dispatchEvent(
				new CustomEvent("scrollend", {
					bubbles: this.options.wrapper === window,
					detail: { lenisScrollEnd: !0 },
				}),
			);
		};
		get overflow() {
			const t = this.isHorizontal ? "overflow-x" : "overflow-y";
			return getComputedStyle(this.rootElement)[t];
		}
		checkOverflow() {
			["hidden", "clip"].includes(this.overflow)
				? this.internalStop()
				: this.internalStart();
		}
		onTransitionEnd = (t) => {
			t.propertyName.includes("overflow") && this.checkOverflow();
		};
		setScroll(t) {
			this.isHorizontal
				? this.options.wrapper.scrollTo({
						left: t,
						behavior: "instant",
					})
				: this.options.wrapper.scrollTo({
						top: t,
						behavior: "instant",
					});
		}
		onClick = (t) => {
			const e = t
				.composedPath()
				.find(
					(t) =>
						t instanceof HTMLAnchorElement &&
						t.getAttribute("href")?.includes("#"),
				);
			if (e) {
				const t = e.getAttribute("href");
				if (t) {
					const e =
							"object" == typeof this.options.anchors &&
							this.options.anchors
								? this.options.anchors
								: void 0,
						r = `#${t.split("#")[1]}`;
					this.scrollTo(r, e);
				}
			}
		};
		onPointerDown = (t) => {
			1 === t.button && this.reset();
		};
		onVirtualScroll = (t) => {
			if (
				"function" == typeof this.options.virtualScroll &&
				!1 === this.options.virtualScroll(t)
			)
				return;
			const { deltaX: e, deltaY: r, event: i } = t;
			if (
				(this.emitter.emit("virtual-scroll", {
					deltaX: e,
					deltaY: r,
					event: i,
				}),
				i.ctrlKey || i.lenisStopPropagation)
			)
				return;
			const n = i.type.includes("touch"),
				s = i.type.includes("wheel");
			this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
			const o = 0 === e && 0 === r;
			if (
				this.options.syncTouch &&
				n &&
				"touchstart" === i.type &&
				o &&
				!this.isStopped &&
				!this.isLocked
			)
				return void this.reset();
			const a =
				("vertical" === this.options.gestureOrientation && 0 === r) ||
				("horizontal" === this.options.gestureOrientation && 0 === e);
			if (o || a) return;
			let l = i.composedPath();
			l = l.slice(0, l.indexOf(this.rootElement));
			const u = this.options.prevent;
			if (
				l.find(
					(t) =>
						t instanceof HTMLElement &&
						(("function" == typeof u && u?.(t)) ||
							t.hasAttribute?.("data-lenis-prevent") ||
							(n &&
								t.hasAttribute?.("data-lenis-prevent-touch")) ||
							(s &&
								t.hasAttribute?.("data-lenis-prevent-wheel")) ||
							(this.options.allowNestedScroll &&
								this.checkNestedScroll(t, {
									deltaX: e,
									deltaY: r,
								}))),
				)
			)
				return;
			if (this.isStopped || this.isLocked)
				return void (i.cancelable && i.preventDefault());
			if (
				!(
					(this.options.syncTouch && n) ||
					(this.options.smoothWheel && s)
				)
			)
				return (
					(this.isScrolling = "native"),
					this.animate.stop(),
					void (i.lenisStopPropagation = !0)
				);
			let h = r;
			"both" === this.options.gestureOrientation
				? (h = Math.abs(r) > Math.abs(e) ? r : e)
				: "horizontal" === this.options.gestureOrientation && (h = e),
				(!this.options.overscroll ||
					this.options.infinite ||
					(this.options.wrapper !== window &&
						this.limit > 0 &&
						((this.animatedScroll > 0 &&
							this.animatedScroll < this.limit) ||
							(0 === this.animatedScroll && r > 0) ||
							(this.animatedScroll === this.limit && r < 0)))) &&
					(i.lenisStopPropagation = !0),
				i.cancelable && i.preventDefault();
			const c = n && this.options.syncTouch,
				f = n && "touchend" === i.type;
			f &&
				(h =
					Math.sign(this.velocity) *
					Math.pow(
						Math.abs(this.velocity),
						this.options.touchInertiaExponent,
					)),
				this.scrollTo(this.targetScroll + h, {
					programmatic: !1,
					...(c
						? { lerp: f ? this.options.syncTouchLerp : 1 }
						: {
								lerp: this.options.lerp,
								duration: this.options.duration,
								easing: this.options.easing,
							}),
				});
		};
		resize() {
			this.dimensions.resize(),
				(this.animatedScroll = this.targetScroll = this.actualScroll),
				this.emit();
		}
		emit() {
			this.emitter.emit("scroll", this);
		}
		onNativeScroll = () => {
			if (
				(null !== this._resetVelocityTimeout &&
					(clearTimeout(this._resetVelocityTimeout),
					(this._resetVelocityTimeout = null)),
				this._preventNextNativeScrollEvent)
			)
				this._preventNextNativeScrollEvent = !1;
			else if (!1 === this.isScrolling || "native" === this.isScrolling) {
				const t = this.animatedScroll;
				(this.animatedScroll = this.targetScroll = this.actualScroll),
					(this.lastVelocity = this.velocity),
					(this.velocity = this.animatedScroll - t),
					(this.direction = Math.sign(this.animatedScroll - t)),
					this.isStopped || (this.isScrolling = "native"),
					this.emit(),
					0 !== this.velocity &&
						(this._resetVelocityTimeout = setTimeout(() => {
							(this.lastVelocity = this.velocity),
								(this.velocity = 0),
								(this.isScrolling = !1),
								this.emit();
						}, 400));
			}
		};
		reset() {
			(this.isLocked = !1),
				(this.isScrolling = !1),
				(this.animatedScroll = this.targetScroll = this.actualScroll),
				(this.lastVelocity = this.velocity = 0),
				this.animate.stop();
		}
		start() {
			if (this.isStopped) {
				if (this.options.autoToggle)
					return void this.rootElement.style.removeProperty(
						"overflow",
					);
				this.internalStart();
			}
		}
		internalStart() {
			this.isStopped &&
				(this.reset(), (this.isStopped = !1), this.emit());
		}
		stop() {
			if (!this.isStopped) {
				if (this.options.autoToggle)
					return void this.rootElement.style.setProperty(
						"overflow",
						"clip",
					);
				this.internalStop();
			}
		}
		internalStop() {
			this.isStopped ||
				(this.reset(), (this.isStopped = !0), this.emit());
		}
		raf = (t) => {
			const e = t - (this.time || t);
			(this.time = t),
				this.animate.advance(0.001 * e),
				this.options.autoRaf &&
					(this.__rafID = requestAnimationFrame(this.raf));
		};
		scrollTo(
			t,
			{
				offset: e = 0,
				immediate: r = !1,
				lock: i = !1,
				duration: n = this.options.duration,
				easing: s = this.options.easing,
				lerp: o = this.options.lerp,
				onStart: a,
				onComplete: l,
				force: u = !1,
				programmatic: h = !0,
				userData: c,
			} = {},
		) {
			if ((!this.isStopped && !this.isLocked) || u) {
				if (
					"string" == typeof t &&
					["top", "left", "start", "#"].includes(t)
				)
					t = 0;
				else if (
					"string" == typeof t &&
					["bottom", "right", "end"].includes(t)
				)
					t = this.limit;
				else {
					let r;
					if (
						("string" == typeof t
							? ((r = document.querySelector(t)),
								r ||
									("#top" === t
										? (t = 0)
										: console.warn(
												"Lenis: Target not found",
												t,
											)))
							: t instanceof HTMLElement &&
								t?.nodeType &&
								(r = t),
						r)
					) {
						if (this.options.wrapper !== window) {
							const t = this.rootElement.getBoundingClientRect();
							e -= this.isHorizontal ? t.left : t.top;
						}
						const i = r.getBoundingClientRect();
						t =
							(this.isHorizontal ? i.left : i.top) +
							this.animatedScroll;
					}
				}
				if ("number" == typeof t) {
					if (
						((t += e), (t = Math.round(t)), this.options.infinite)
					) {
						if (h) {
							this.targetScroll = this.animatedScroll =
								this.scroll;
							const e = t - this.animatedScroll;
							e > this.limit / 2
								? (t -= this.limit)
								: e < -this.limit / 2 && (t += this.limit);
						}
					} else t = gl(0, t, this.limit);
					if (t === this.targetScroll)
						return a?.(this), void l?.(this);
					if (((this.userData = c ?? {}), r))
						return (
							(this.animatedScroll = this.targetScroll = t),
							this.setScroll(this.scroll),
							this.reset(),
							this.preventNextNativeScrollEvent(),
							this.emit(),
							l?.(this),
							(this.userData = {}),
							void requestAnimationFrame(() => {
								this.dispatchScrollendEvent();
							})
						);
					h || (this.targetScroll = t),
						"number" == typeof n && "function" != typeof s
							? (s = Uo)
							: "function" == typeof s &&
								"number" != typeof n &&
								(n = 1),
						this.animate.fromTo(this.animatedScroll, t, {
							duration: n,
							easing: s,
							lerp: o,
							onStart: () => {
								i && (this.isLocked = !0),
									(this.isScrolling = "smooth"),
									a?.(this);
							},
							onUpdate: (t, e) => {
								(this.isScrolling = "smooth"),
									(this.lastVelocity = this.velocity),
									(this.velocity = t - this.animatedScroll),
									(this.direction = Math.sign(this.velocity)),
									(this.animatedScroll = t),
									this.setScroll(this.scroll),
									h && (this.targetScroll = t),
									e || this.emit(),
									e &&
										(this.reset(),
										this.emit(),
										l?.(this),
										(this.userData = {}),
										requestAnimationFrame(() => {
											this.dispatchScrollendEvent();
										}),
										this.preventNextNativeScrollEvent());
							},
						});
				}
			}
		}
		preventNextNativeScrollEvent() {
			(this._preventNextNativeScrollEvent = !0),
				requestAnimationFrame(() => {
					this._preventNextNativeScrollEvent = !1;
				});
		}
		checkNestedScroll(t, { deltaX: e, deltaY: r }) {
			const i = Date.now(),
				n = (t._lenis ??= {});
			let s, o, a, l, u, h, c, f;
			const p = this.options.gestureOrientation;
			if (i - (n.time ?? 0) > 2e3) {
				n.time = Date.now();
				const e = window.getComputedStyle(t);
				n.computedStyle = e;
				const r = e.overflowX,
					i = e.overflowY;
				if (
					((s = ["auto", "overlay", "scroll"].includes(r)),
					(o = ["auto", "overlay", "scroll"].includes(i)),
					(n.hasOverflowX = s),
					(n.hasOverflowY = o),
					(!s && !o) ||
						("vertical" === p && !o) ||
						("horizontal" === p && !s))
				)
					return !1;
				(u = t.scrollWidth),
					(h = t.scrollHeight),
					(c = t.clientWidth),
					(f = t.clientHeight),
					(a = u > c),
					(l = h > f),
					(n.isScrollableX = a),
					(n.isScrollableY = l),
					(n.scrollWidth = u),
					(n.scrollHeight = h),
					(n.clientWidth = c),
					(n.clientHeight = f);
			} else
				(a = n.isScrollableX),
					(l = n.isScrollableY),
					(s = n.hasOverflowX),
					(o = n.hasOverflowY),
					(u = n.scrollWidth),
					(h = n.scrollHeight),
					(c = n.clientWidth),
					(f = n.clientHeight);
			if (
				!(
					(s || o) &&
					(a || l) &&
					("vertical" !== p || (o && l)) &&
					("horizontal" !== p || (s && a))
				)
			)
				return !1;
			let d, m, g, v, _, y;
			if ("horizontal" === p) d = "x";
			else if ("vertical" === p) d = "y";
			else {
				0 !== e && s && a && (d = "x"), 0 !== r && o && l && (d = "y");
			}
			if (!d) return !1;
			if ("x" === d)
				(m = t.scrollLeft), (g = u - c), (v = e), (_ = s), (y = a);
			else {
				if ("y" !== d) return !1;
				(m = t.scrollTop), (g = h - f), (v = r), (_ = o), (y = l);
			}
			return (v > 0 ? m < g : m > 0) && _ && y;
		}
		get rootElement() {
			return this.options.wrapper === window
				? document.documentElement
				: this.options.wrapper;
		}
		get limit() {
			return this.options.__experimental__naiveDimensions
				? this.isHorizontal
					? this.rootElement.scrollWidth -
						this.rootElement.clientWidth
					: this.rootElement.scrollHeight -
						this.rootElement.clientHeight
				: this.dimensions.limit[this.isHorizontal ? "x" : "y"];
		}
		get isHorizontal() {
			return "horizontal" === this.options.orientation;
		}
		get actualScroll() {
			const t = this.options.wrapper;
			return this.isHorizontal
				? (t.scrollX ?? t.scrollLeft)
				: (t.scrollY ?? t.scrollTop);
		}
		get scroll() {
			return this.options.infinite
				? of(this.animatedScroll, this.limit)
				: this.animatedScroll;
		}
		get progress() {
			return 0 === this.limit ? 1 : this.scroll / this.limit;
		}
		get isScrolling() {
			return this._isScrolling;
		}
		set isScrolling(t) {
			this._isScrolling !== t &&
				((this._isScrolling = t), this.updateClassName());
		}
		get isStopped() {
			return this._isStopped;
		}
		set isStopped(t) {
			this._isStopped !== t &&
				((this._isStopped = t), this.updateClassName());
		}
		get isLocked() {
			return this._isLocked;
		}
		set isLocked(t) {
			this._isLocked !== t &&
				((this._isLocked = t), this.updateClassName());
		}
		get isSmooth() {
			return "smooth" === this.isScrolling;
		}
		get className() {
			let t = "lenis";
			return (
				this.options.autoToggle && (t += " lenis-autoToggle"),
				this.isStopped && (t += " lenis-stopped"),
				this.isLocked && (t += " lenis-locked"),
				this.isScrolling && (t += " lenis-scrolling"),
				"smooth" === this.isScrolling && (t += " lenis-smooth"),
				t
			);
		}
		updateClassName() {
			this.cleanUpClassName(),
				(this.rootElement.className =
					`${this.rootElement.className} ${this.className}`.trim());
		}
		cleanUpClassName() {
			this.rootElement.className = this.rootElement.className
				.replace(/lenis(-\w+)?/g, "")
				.trim();
		}
	};
Zs.registerPlugin(V);
const cf = new hf({
	duration: 1.5,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smoothWheel: !0,
});
function vl(t) {
	cf.raf(t), requestAnimationFrame(vl);
}
requestAnimationFrame(vl);
const df = document.querySelectorAll(".section-fade"),
	_f = new IntersectionObserver(
		(t) => {
			t.forEach((t) => {
				t.isIntersecting && t.target.classList.add("visible");
			});
		},
		{ threshold: 0.3 },
	);
df.forEach((t) => _f.observe(t));
const $o = document.querySelector(".horizontal-section"),
	ls = document.querySelector(".horizontal-content");
if ($o && ls) {
	const t = ls.scrollWidth;
	Zs.to(ls, {
		x: () => -(t - window.innerWidth),
		ease: "none",
		scrollTrigger: {
			trigger: $o,
			start: "top top",
			end: () => `+=${t}`,
			scrub: 1,
			pin: !0,
			anticipatePin: 1,
		},
	});
}
