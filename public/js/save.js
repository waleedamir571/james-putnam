!(function () {
  "use strict";
  function e(t, s, i, n) {
    const a = Object.keys(t.slides);
    let l = 0,
      r = !1;
    (n ??= !1),
      0 !== a.length
        ? a.forEach((o, d) => {
            setTimeout(() => {
              _tpt.ajax({
                action: "save_slide_v7",
                data: {
                  fromSR6: i,
                  id: t.id,
                  alias: t.settings.alias,
                  title: t.settings.title,
                  slides: JSON.stringify(t.slides[o]),
                },
                callBack: (d) => {
                  if ("string" == typeof d)
                    try {
                      d = JSON.parse(d);
                    } catch (a) {
                      console.error(`Failed to save slide ${o}.`),
                        r ||
                          n ||
                          (!d.toLowerCase().includes("database") &&
                            !d.toLowerCase().includes("mysql")) ||
                          (console.log("lets restart in 10 seconds!"),
                          (r = !0),
                          setTimeout(() => e(t, s, i, !0), 1e4));
                    }
                  d.success
                    ? (l++, l === a.length && s())
                    : console.error(`Failed to save slide ${o}.`, d);
                },
              });
            }, (n ? 3e3 : 0) * d);
          })
        : s();
  }
  (window.SR7 ??= {}),
    (window._tpt ??= {}),
    (SR7.F ??= {}),
    (SR7.D ??= {}),
    void 0 === SR7.F.saveAll &&
      ((SR7.F.saveAll = function (e) {
        var t = { settings: {}, slides: {} };
        let s = [];
        var i, n, a, l, r;
        for (r in ((SR7.M[e].migrate = !1),
        (t.settings = SR7.F.removeMatching(
          SR7.D.moduleObj(e),
          SR7.M[e].settings
        )),
        t.settings.addOns))
          _tpt.hop(t.settings.addOns, r) &&
            t.settings.addOns[r].u &&
            -1 == s.indexOf(r) &&
            s.push(r);
        for (a in SR7.M[e].slides)
          if (_tpt.hop(SR7.M[e].slides, a)) {
            for (r in ((l = SR7.M[e].slides[a]),
            (t.slides[a] = {
              slide: SR7.F.removeMatching(SR7.D.slideObj(e), l.slide),
              layers: {},
            }),
            l.slide.addOns))
              _tpt.hop(l.slide.addOns, r) &&
                l.slide.addOns[r].u &&
                -1 == s.indexOf(r) &&
                s.push(r);
            for (n in l.layers) {
              if (!_tpt.hop(l.layers, n)) continue;
              i = l.layers[n].type;
              let s = Object.keys(l.layers[n].addOns);
              t.slides[a].layers[n] = SR7.F.removeMatching(
                SR7.D.layerObject({
                  id: e,
                  obj: {},
                  layertype: i,
                  msource: SR7.M[e].settings.source,
                  ISEMPTY: !0,
                  useAddons: s,
                }),
                l.layers[n]
              );
              let r = SR7.D.hasActionLike(e, a, n, "link");
              if (r && "a" == r.ltype) {
                let e = t.slides[a].layers[n];
                (e.tag = "a"),
                  (e.target = Array.isArray(r.target)
                    ? r.target[0]
                    : r.target ?? "_blank"),
                  (e.href = r.link ?? ""),
                  "nofollow" == r.flw && (e.rel = "nofollow"),
                  "_blank" == r.target &&
                    (e.rel =
                      (e.rel ?? "") +
                      (void 0 !== e.rel && e.rel.length > 0 ? " " : "") +
                      "noopener");
              }
              t.slides[a].layers[n].type = i;
            }
            1 == l.slide.order &&
              ((t.settings.thumb =
                "" !== (l.slide.thumb?.admin ?? "")
                  ? l.slide.thumb.admin
                  : "" !== (l.slide.thumb?.src ?? "")
                  ? l.slide.thumb.src
                  : l.slide.thumb?.default?.image?.src ??
                    (l.slide.thumb?.default?.color
                      ? l.slide.thumb?.default
                      : void 0)),
              void 0 !== t.settings.thumb &&
                "#" == t.settings.thumb[t.settings.thumb.length - 1] &&
                delete t.settings.thumb),
              l.slide?.attr?.deepLink &&
                ((t.settings.deepLinks ??= {}),
                (t.settings.deepLinks[l.slide.attr.deepLink] = a));
          }
        return (t.settings.aU = s), delete t.settings.imgs, t;
      }),
      (SR7.F.removeMatching = function (e, t) {
        let s = {};
        for (let i in t)
          if (!_tpt.hop(e, i) || e[i] instanceof HTMLElement)
            _tpt.hop(e, i) || (s[i] = t[i]);
          else if (Array.isArray(t[i]) && Array.isArray(e[i])) {
            (t[i].length === e[i].length &&
              t[i].every((t, s) => t === e[i][s])) ||
              (s[i] = t[i]);
          } else if ("object" == typeof t[i] && "object" == typeof e[i]) {
            let n = SR7.F.removeMatching(e[i], t[i]);
            Object.keys(n).length > 0 && (s[i] = n);
          } else t[i] !== e[i] && (s[i] = t[i]);
        return s;
      }),
      (SR7.F.collectImageSources = function (e) {
        e.settings.imgs = [];
        const t = (t) => e.settings.imgs.findIndex((e) => e.src === t);
        return (
          e.settings.bg?.image?.src &&
            -1 === t(e.settings.bg.image.src) &&
            e.settings.imgs.push(e.settings.bg.image),
          Object.values(e.slides).forEach((s) => {
            Object.values(s.layers).forEach((s) => {
              ["bg", "content"].forEach((i) => {
                const n = s[i]?.image || s[i];
                n &&
                  n.src &&
                  ((s, i) => {
                    let n = { lib_id: s.lib_id, lib: s.lib, src: s.src };
                    i &&
                      ((n.a =
                        "fn" == i.aO ? "#fn" : ("c" == i.aO && i.a) || ""),
                      (n.t = "fn" == i.tO ? "#fn" : ("c" == i.tO && i.t) || ""),
                      "" === n.a && delete n.a,
                      "" === n.t && delete n.t);
                    const a = t(s.src);
                    -1 === a
                      ? e.settings.imgs.push(n)
                      : ("a" in n &&
                          !("a" in e.settings.imgs[a]) &&
                          (e.settings.imgs[a].a = n.a),
                        "t" in n &&
                          !("t" in e.settings.imgs[a]) &&
                          (e.settings.imgs[a].t = n.t));
                  })(n, s.attr),
                  (e.settings.hasYT =
                    e.settings.hasYT || "youtube" === s[i]?.video?.type);
              });
            });
          }),
          e
        );
      }),
      (SR7.F.saveSliderDatas = function (t, s, i) {
        (t = SR7.F.collectImageSources(t)),
          _tpt.ajax({
            action: "save_slider_v7",
            data: {
              fromSR6: i,
              id: t.id,
              alias: t.settings.alias,
              title: t.settings.title,
              settings: JSON.stringify(t.settings),
            },
            callBack: (n) => {
              (n = "string" == typeof n ? JSON.parse(n) : n).success
                ? e(t, s, i)
                : console.error("Failed to save settings.", n);
            },
          });
      }),
      (_tpt.R ??= {}),
      (_tpt.R.save = _tpt.extend
        ? _tpt.extend(_tpt.R.save, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" }));
})();
