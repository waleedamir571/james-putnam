/*!
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  PLUGIN:      SLIDER REVOLUTION 7.0                                          ║
║  MODULE:      MAIN PAGE MODULE											                         ║
║  VERSION:     1.0.0                                                          ║
║  DATE:        2023-01-03                                                     ║
║  AUTHOR:      Krisztian H. & Sahil P.                                        ║
║  COMPANY:     ThemePunch OHG.                                                ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  UPDATES & DOCS:  https://www.themepunch.com/support-center                  ║
║  GET LICENSE:    https://www.themepunch.com/links/slider_revolution_wordpre  ║
║                               ss_regular_license                             ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  LICENSE:                                                                    ║
║  Copyright (c) 2023, ThemePunch. All rights reserved.                        ║
║  This work is subject to the terms at:                                       ║
║  https://www.themepunch.com/links/slider_revolution_wordpress_regular_licen  ║
║                               se (Regular / Extended)                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/
!(function () {
  "use strict";
  (window.SR7 ??= {}),
    (window._tpt ??= {}),
    (SR7.F ??= {}),
    (SR7.G ??= {}),
    (SR7.G.breakPoints ??= [1600, 1240, 1024, 778, 480]),
    (SR7.version = "Slider Revolution 7.0.0"),
    (SR7.F.init = function () {
      if (void 0 === _tpt.removeEmptyTags) return setTimeout(SR7.F.init, 49);
      if (SR7.initialised)
        return (
          SR7.E.elementorBackend &&
            _tpt
              .checkResources([
                "DOM",
                "sr7min",
                "module",
                "tpgsap",
                "canvas",
                "draw",
                "save",
                "csssr7",
              ])
              .then(() => {
                SR7.F.module.collect();
              }),
          void (
            window.vc_js &&
            _tpt
              .checkResources([
                "DOM",
                "sr7min",
                "module",
                "tpgsap",
                "canvas",
                "draw",
                "save",
                "csssr7",
              ])
              .then(() => {
                let e = 333;
                const t = setInterval(() => {
                  (document.querySelector(".vc_rev_slider") || e-- < 0) &&
                    (SR7.F.module.collect(), clearInterval(t));
                }, 100);
              })
          )
        );
      const e = document.getElementsByClassName("rs-p-wp-fix");
      Array.from(e).forEach((e) => {
        null !== e.parentNode &&
          void 0 !== e.parentNode &&
          (_tpt.removeEmptyTags(e.querySelectorAll("span")),
          _tpt.removeEmptyTags(
            e.parentNode.querySelectorAll('p:not([role="status"])')
          ));
      });
      let t = !0;
      for (let e in SR7.PMH) {
        if (!_tpt.hop(SR7.PMH, e)) continue;
        (t = !0 === SR7.PMH[e].state), SR7.PMH[e].cn > 99 && SR7.PMH[e].fn();
      }
      if (t && (SR7.devMode || 2 === _tpt.R?.module?.status)) {
        (SR7.initialised = !0), _tpt.regResource({ id: "DOM" });
        for (let e of SR7.E.modules)
          SR7.E.resources[e] ??= SR7.E.plugin_url + "public/js/" + e + ".js";
        for (let e of SR7.E.libs)
          SR7.E.resources[e] ??=
            SR7.E.plugin_url + "public/js/libs/" + e.toLowerCase() + ".js";
        for (let e of SR7.E.css)
          SR7.E.resources[e] ??=
            SR7.E.plugin_url +
            "public/css/" +
            e.replace("css", "sr7.") +
            ".css";
        SR7.E.resources.csssr7 = SR7.E.plugin_url + "public/css/sr7.css";
        for (let e in SR7.E.resources)
          _tpt.hop(SR7.E.resources, e) &&
            ("css" == SR7.E.resources[e].slice(-3)
              ? _tpt.regResource({ id: e, css: SR7.E.resources[e] })
              : _tpt.regResource({ id: e, url: SR7.E.resources[e] }));
        2 !== _tpt.R?.csssr7?.status &&
          "1" ===
            getComputedStyle(document.body).getPropertyValue(
              "--sr-7-css-loaded"
            ) &&
          (_tpt.R.csssr7 = { status: 2 }),
          _tpt
            .checkResources([
              "DOM",
              "sr7min",
              "module",
              "tpgsap",
              "canvas",
              "draw",
              "save",
              "csssr7",
            ])
            .then(() => {
              SR7.F.module.collect();
            });
      } else setTimeout(SR7.F.init, 19);
    }),
    (SR7.F.regAddonResources = (e) => {
      for (let t in e)
        if (_tpt.hop(e, t)) {
          let s = t.replace("revslider-", "").replace("-addon", "");
          (SR7.E.resources[s] = e[t]),
            "css" == SR7.E.resources[s].slice(-3)
              ? _tpt.regResource({ id: s, css: SR7.E.resources[t] })
              : _tpt.regResource({ id: s, url: SR7.E.resources[t] });
        }
    }),
    (SR7.F.modal = {
      register: (e) => {
        let { alias: t, id: s, speed: i, bg: a, pS: r, h: o, v: l } = e;
        if (
          ((s ??= SR7.F.module.getIdByAlias(t)),
          void 0 !== s &&
            void 0 !== SR7.M[s] &&
            SR7.M?.[s]?.c?.module?.dataset?.modal)
        ) {
          let e = _tpt.strSetToObj(SR7.M?.[s]?.c?.module?.dataset?.modal ?? "");
          void 0 !== e.bg && (a = e.bg),
            void 0 !== e.sp && (i = parseInt(e.sp) / 1e3),
            e.pS,
            e.h,
            e.v;
        }
        (SR7.F.modal.modals ??= {}),
          (SR7.F.modal.modals[t] = {
            id: s,
            alias: t,
            speed: i,
            bg: a,
            pS: r,
            h: o,
            v: l,
          }),
          SR7.M[s] && (SR7.M[s].modalRegistered = !0);
      },
      build: () => {
        document.querySelector("sr7-modals") ||
          ((SR7.F.modal.wrap = document.createElement("sr7-modals")),
          (SR7.F.modal.wrap.innerHTML =
            "<sr7-modal-underlay></sr7-modal-underlay>"),
          (SR7.F.modal.cover =
            SR7.F.modal.wrap.getElementsByTagName("sr7-modal-underlay")[0]),
          (SR7.F.modal.cover.style.opacity = 0),
          (SR7.F.modal.cover.style.zIndex = 0),
          document.body.appendChild(SR7.F.modal.wrap),
          SR7.F.modal.wrap.addEventListener("click", (e) => {
            ("SR7-MODAL-UNDERLAY" != e.target.tagName &&
              "SR7-MODALS" != e.target.tagName) ||
              SR7.F.modal.close();
          }));
      },
      updatePos: () => {
        let e = SR7.F.module.getIdByAlias(SR7.F.modal.requested),
          t = SR7.M?.[e] ?? void 0,
          s = SR7.F.modal.modals[SR7.F.modal.requested],
          i = t?.c?.module?.style ?? void 0;
        if (null == i) return;
        (i.display = "block"), (i.opacity = 1), (i.position = "absolute");
        let a =
          SR7.gV?.({ v: t.settings.size.width, id: e, u: 0 }) ??
          t.settings.size.width[0] ??
          "100%";
        (i.width =
          "center" !== s.h
            ? "auto"
            : t.settings.size.fullWidth
            ? "100%"
            : a + "px"),
          (i.left =
            "center" != s.h || t.settings.size.fullWidth
              ? "right" !== s.h
                ? "0px"
                : "auto"
              : "50%"),
          (i.right = "right" == s.h ? "0px" : "auto");
        let r = "center" != s.h || t.settings.size.fullWidth ? "0px" : "-50%";
        if (t.dims.module.h < _tpt.winH)
          return (
            (i.transform =
              "middle" == s.v
                ? "translate(" + r + ", -50%)"
                : "translate(" + r + ", 0px)"),
            void ("center" != s.h || t.settings.size.fullWidth
              ? (i.inset =
                  "middle" == s.v
                    ? "50% 0px auto"
                    : "top" == s.v
                    ? "0px 0px auto 0px"
                    : "auto 0px 0px 0px")
              : (i.inset =
                  "middle" == s.v
                    ? "50% 50% auto 50%"
                    : "top" == s.v
                    ? "0px 50% auto 50%"
                    : "auto 50% 0px 50%"))
          );
        (i.top = "0px"), (i.transform = "translate(" + r + ", 0px)");
      },
      underlay: (e) => {
        let t =
            SR7.M?.[SR7.F.module.getIdByAlias(SR7.F.modal.requested)] ?? void 0,
          s = SR7.F.modal?.modals?.[SR7.F.modal.requested],
          i = t?.c?.module ?? void 0,
          a = SR7.F.modal.wrap.style,
          r = document.body.style;
        if ("show" == e) {
          SR7.F.modal.wrap.style;
          return (
            (SR7.F.modal.cover.style.backgroundColor = s.bg),
            (SR7.F.modal.cover.style.pointerEvents =
              "transparent" == s.bg ? "none" : "auto"),
            SR7.F.modal.fadeOutAnimation &&
              SR7.F.modal.fadeOutAnimation.isActive() &&
              SR7.F.modal.fadeOutAnimation.kill(),
            (a.pointerEvents = "transparent" == s.bg ? "none" : "auto"),
            (a.display = "block"),
            (a.position = SR7.F.modal?.sbt ? "absolute" : "fixed"),
            (a.top = 0),
            (a.left = 0),
            (a.width = "100%"),
            (a.height = SR7.F.modal?.sbt
              ? t.dims.moduleRect.height + "px"
              : "100%"),
            (a.zIndex = 999999),
            (SR7.F.modal.lastDocStyle = {
              width: document.body.style.width,
              height: document.body.style.height,
              overflow: document.body.style.overflow,
            }),
            (r.width = "100%"),
            (r.height = "100%"),
            s.pS ||
              (r.overflow = SR7.F.modal?.sbt ? "hidden scroll" : "hidden"),
            SR7.F.modal.updatePos(),
            void _tpt.gsap.to(SR7.F.modal.cover, s.speed, {
              opacity: 1,
              ease: "power3.out",
            })
          );
        }
        SR7.F.modal.fadeOutAnimation = _tpt.gsap.to(
          i ? [i, SR7.F.modal.cover] : SR7.F.modal.cover,
          s.speed,
          {
            opacity: 0,
            ease: "power3.out",
            onComplete: function () {
              (SR7.F.modal.sbt = !1),
                (a.display = "none"),
                (i.style.display = "none"),
                (r.height = SR7.F.modal.lastDocStyle.height),
                (r.overflow = SR7.F.modal.lastDocStyle.overflow),
                (r.width = SR7.F.modal.lastDocStyle.width);
            },
          }
        );
      },
      create: (e, t, s) => {
        null == t &&
          ((t = document.createElement("sr7-module")).innerHTML =
            "<sr7-adjuster></sr7-adjuster><sr7-content></sr7-content>"),
          (t.id = s),
          (t.dataset.alias ??= e.alias ?? e.settings?.alias ?? ""),
          (t.dataset.id = e.id),
          (SR7.M ??= {}),
          (SR7.M[s] ??= {});
        let i = SR7.M[s];
        return (
          (i.settings ??= { size: {} }),
          (i.c ??= {}),
          (i.c.module ??= t),
          (i.c.content ??= t.getElementsByTagName("sr7-content")[0]),
          (i.c.adjuster ??= t.getElementsByTagName("sr7-adjuster")[0]),
          (i.dims ??= {}),
          (i.dims.content ??= {}),
          (i.dims.CFC ??= {}),
          (i.dims.module ??= {}),
          (i.states ??= { inViewPort: !0 }),
          (i.useAsModal = !0),
          SR7.F.modal.wrap.appendChild(t),
          (SR7.JSON ??= {}),
          (SR7.JSON[t.id] = e),
          SR7.F.module.register(t, t.id, !1),
          t
        );
      },
      updateContainers: (e, t) => {
        let s = SR7.M[e];
        (s.c ??= {}),
          (s.c.module ??= t),
          (s.c.content ??= t.getElementsByTagName("sr7-content")[0]),
          (s.c.adjuster ??= t.getElementsByTagName("sr7-adjuster")[0]);
      },
      loaded: (e, t, s, i) => {
        SR7.F.modal.updateContainers(e, SR7.M[e].c.module),
          (SR7.M[e].useAsModal = !0),
          (SR7.M[e].modalRegistered = !1),
          (SR7.M[e].states ??= {}),
          (SR7.M[e].states.inViewPort = !0);
        const a = function (t) {
          t.id == e &&
            SR7.M[t.id]?.settings?.sbt?.use &&
            (window.dispatchEvent(new Event("resize")),
            document.removeEventListener("sr.slide.changeRequest", a));
        };
        document.addEventListener("sr.slide.changeRequest", a),
          _tpt.event.trigger("dom", "sr.module.loaded", {
            result: i,
            id: e,
            slide: String(t).replace("#", ""),
          }),
          _tpt.event.trigger("dom", "sr.modal.loaded", { id: e, alias: s }),
          _tpt.event.trigger("dom", "sr.modal.open", {
            id: e,
            alias: s,
            slide: t,
          });
      },
      load: (e, t) => {
        let s = SR7.F.module?.getIdByAlias(e),
          i = e;
        void 0 === SR7?.JSON?.[s] && void 0 === SR7.JSON?.[e]
          ? _tpt.restAPI({
              action: "get_full_slider_object",
              version: 7,
              id: s,
              alias: e,
              forcealias: null == s,
              callBack: (e) => {
                if ("object" != typeof e)
                  try {
                    e = JSON.parse(e);
                  } catch (t) {
                    e = _tpt.fixResponse(e);
                  }
                const { success: a, alias: r } = e;
                if (a) {
                  SR7.F.regAddonResources(e.addOns ?? {});
                  let a =
                    SR7.M?.[s] ??
                    SR7.F?.module?.get(SR7.F.module.getIdByAlias(r ?? i));
                  (s ??=
                    a?.id ??
                    "SR7_" + e.id + "_" + SR7.F?.module?.getNextSuffx(e.id) ??
                    1),
                    (a = SR7.F.modal.create(e, a?.c?.module, s)),
                    (SR7.F.modal.requested =
                      r ?? e.settings?.alias ?? SR7.F.modal.requested),
                    requestAnimationFrame(function () {
                      SR7.F.modal.loaded(s, t, i, e);
                    });
                } else console.log(r + " Could not be Loaded from DB");
              },
            })
          : (SR7.F.modal.wrap.appendChild(SR7.M[s].c.module),
            SR7.F.modal.loaded(s, t, e, SR7.JSON[s]));
      },
      open: (e, t = 0) => {
        null != e &&
          _tpt
            .checkResources([
              "DOM",
              "sr7min",
              "module",
              "tpgsap",
              "canvas",
              "draw",
            ])
            .then(() => {
              let s = SR7.F?.module?.getIdByAlias(e);
              if (
                !SR7?.M?.[s]?.c?.module ||
                SR7.M?.[s]?.useAsModal ||
                SR7.M?.[s].c.module?.dataset?.modal
              ) {
                if (
                  (SR7.F.modal.build(),
                  (SR7.F.modal.requested = e),
                  (SR7.F.modal.visible = !0),
                  !(
                    SR7.M?.[s] &&
                    SR7.M[s].slides &&
                    SR7.F.modal.modals?.[e] &&
                    SR7.M[s]?.settings
                  ))
                )
                  return SR7.F.modal.load(e, t);
                SR7.F.modal.wrap.contains(SR7.M[s].c.module) ||
                  SR7.F.modal.wrap.appendChild(SR7.M[s].c.module),
                  (SR7.M[s].useAsModal = !0),
                  SR7.F.modal.underlay("show"),
                  _tpt.gsap.set(SR7.F.modal.wrap, { scrollTop: 0 }),
                  _tpt.event.trigger("dom", "sr.modal.open", {
                    id: s,
                    alias: e,
                    slide: t,
                  }),
                  (SR7.M[s].states ??= {}),
                  (SR7.M[s].states.inViewPort = !0),
                  SR7.F.resetGlobalLayers(s),
                  SR7.F.requestSlide({ id: s, slide: t }),
                  SR7.M?.[s]?.settings?.sbt?.use &&
                    window.dispatchEvent(new Event("resize"));
              } else
                console.warn(
                  "Attempt to open a Slider Module (" +
                    e +
                    ") as a Modal detected.\n\nPlease note:\n- You cannot use a Slider Module as a Modal on the same page where the Module is already added as a non-Modal element.\n- To use the Slider Module as a Modal:\n  A) Ensure it is not already present on the page as a non-Modal element allowing the Slider Module to be loaded on demand as a Modal.\n  B) (OR) Modify the Page Module Settings to set 'Pop Up' to true."
                );
            });
      },
      close: () => {
        (SR7.F.modal.visible = !1),
          void 0 !== SR7.F.modal.requested &&
            ("carousel" !==
              SR7.M[SR7.F.module.getIdByAlias(SR7.F.modal.requested)].settings
                .type &&
              SR7.F.closeSlide(
                SR7.F.module.getIdByAlias(SR7.F.modal.requested)
              ),
            SR7.F.modal.underlay("hide"),
            _tpt.event.trigger("dom", "sr.modal.close", {
              id: SR7.F.module.getIdByAlias(SR7.F.modal.requested),
              alias: SR7.F.modal.requested,
            }));
      },
      trigger: (e, t, s) => {
        if (null == s) return !1;
        let i = _tpt.strSetToObj(s);
        if (null == i) return !1;
        void 0 !== i.sp && (i.sp = parseInt(i.sp) / 1e3);
        let a = !0;
        return (
          void 0 !== i.co
            ? (a =
                "" + _tpt.cookie.get(t.dataset.alias + "_modal_one_time") !=
                "true")
            : "true" == _tpt.cookie.get(t.dataset.alias + "_modal_one_time") &&
              _tpt.cookie.set(t.dataset.alias + "_modal_one_time", !1, 10),
          a &&
            ((SR7.F.modal.modals ??= {}),
            (SR7.F.modal.modals[e] = {
              alias: e,
              speed: i.sp,
              bg: i.bg,
              pS: i.pS,
              v: i.v,
              h: i.h,
            }),
            void 0 !== i.t &&
              (void 0 !== i.co &&
                _tpt.cookie.set(t.dataset.alias + "_modal_one_time", !0, i.co),
              setTimeout(function () {
                SR7.F.modal.open(e);
              }, parseInt(i.t))),
            (void 0 === i.so && void 0 === i.s) ||
              (_tpt.scrollObserver.observe(window),
              (window.observSR7Globals ??= {}),
              (i.so = void 0 !== i.s ? i.s : i.so),
              (window.observSR7Globals[e] = {
                params: {
                  alias: e,
                  element: i.so.includes("#")
                    ? document.querySelector(i.so) ?? void 0
                    : void 0,
                  co: i.co,
                  offset: parseInt(i.so ?? 0),
                },
                callback: (e) => {
                  let { alias: s, element: i, offset: a, co: r } = e;
                  null != window.observSR7Globals[s] &&
                    (void 0 !== i
                      ? i.getBoundingClientRect().top <= _tpt.winH / 2
                      : a <= _tpt.scrollObserver.y) &&
                    (void 0 !== r &&
                      _tpt.cookie.set(
                        t.dataset.alias + "_modal_one_time",
                        !0,
                        r
                      ),
                    SR7.F.modal.open(s),
                    delete window.observSR7Globals[s]);
                },
              }),
              _tpt.scrollObserver.run(window))),
          void 0 !== i.e &&
            document.addEventListener(i.e, function (t) {
              SR7.F.modal.open(e, parseInt(t?.detail?.slide || 1) - 1);
            }),
          "t" == i.ha &&
            void 0 !== t &&
            (window.location.hash == "#" + t.dataset.alias &&
              setTimeout(function () {
                SR7.F.modal.open(e);
              }, 500),
            window.addEventListener("hashchange", function () {
              window.location.hash == i.ha && SR7.F.modal.open(e);
            })),
          !0
        );
      },
    });
  class e {
    constructor(e) {
      return (this.element = document.getElementById(e)), this;
    }
    bind(e, t) {
      return this.element.addEventListener(e, t), this;
    }
    unbind(e, t) {
      return this.element.removeEventListener(e, t), this;
    }
    on(e, t) {
      return this.element.addEventListener(e, t), this;
    }
    off(e, t) {
      return this.element.removeEventListener(e, t), this;
    }
    one(e, t) {
      const s = (i) => {
        t(i), this.element.removeEventListener(e, s);
      };
      return this.element.addEventListener(e, s), this;
    }
    find(e) {
      return Array.from(this.element.querySelectorAll(e));
    }
    wrap() {
      console.log("jQuery is not supported");
    }
    revgetparallaxproc() {
      return SR7.M[this.element.id].scrollProc;
    }
    revaddcallback(e) {
      (SR7.M[this.element.id].c.callBacks ??= []),
        SR7.M[this.element.id].c.callBacks.push(e);
    }
    getRSVersion() {
      return SR7.version;
    }
    scroll(e, t = 800, s = "power3.out") {
      SR7.F.scrollToId({
        id: this.element.id,
        offset: e,
        action: "scrollunder",
        anchor: this.element.id,
        speed: t,
        ease: s,
      });
    }
    redraw() {
      SR7.F.updateModuleDims(this.element.id, !0, !0);
    }
    removeSlide(e) {
      let t = SR7.M[this.element.id].slideOrder.indexOf(e),
        s = this.element.id;
      SR7.M[s].slideOrder.splice(t, 1),
        SR7.M[s].slides[e]?.slide?.slideshow?.hfn || SR7.M[s].navLen--,
        SR7.M[s].len--,
        SR7.M[s].current.id == e && SR7.F.requestSlide({ id: s, slide: "+1" }),
        SR7.M[s].c.slides[e].remove(),
        delete SR7.M[s].slides[e],
        delete SR7.M[s].c.slides[e];
      for (let t of ["bullets", "thumbs", "tabs"])
        if (SR7.M[s].c.nav?.[t]?.elements) {
          let i = 0;
          for (let a of SR7.M[s].c.nav[t].elements) {
            if (a.dataset.key == e) {
              a.remove();
              break;
            }
            i++;
          }
          SR7.M[s].c.nav[t].elements.splice(i, 1);
        }
      SR7.F.navigation.update(s);
    }
    modal() {}
    start() {
      SR7.F.runModule(this.element.id);
    }
    playScene(e, t) {
      let { skey: s, id: i, lkey: a } = SR7.F.getLayer(e),
        r = SR7.M?.[i]?.slides?.[s]?.layers?.[a].tl?.[t];
      return (
        !!r &&
        (SR7.F.animateLayers({
          id: i,
          skey: s,
          layers: [a],
          scene: t,
          caller: "action",
        }),
        { id: i, skey: s, layers: [a], scene: t, caller: "action" })
      );
    }
    goToFrame(e) {
      if (null != e && null != e.layerid && null != e.frame)
        return this.playScene(e.layerid, e.frame);
    }
    pause() {
      SR7.slideShow.pause(this.element.id);
    }
    forcedPause() {
      SR7.slideShow.pause(this.element.id, !0);
    }
    resume() {
      SR7.slideShow.resume(this.element.id);
    }
    nextSlide() {
      SR7.F.requestSlide({ id: this.element.id, slide: "+1" });
    }
    prevSlide() {
      SR7.F.requestSlide({ id: this.element.id, slide: "-1" });
    }
    currentSlide() {
      let e = SR7.M[this.element.id];
      return {
        index: e.slideOrder.indexOf(e.current.id),
        key: e.current.id,
        order: e.slideOrder.indexOf(e.current.id) + 1,
      };
    }
    maxSlide() {
      return SR7.M[this.element.id].len;
    }
    lastSlide() {
      return SR7.M[this.element.id].navLen;
    }
    showSlide(e) {
      let t = SR7.M[this.element.id];
      SR7.F.requestSlide({
        id: this.element.id,
        slide:
          "first" == e
            ? "#" + t.slideOrder[0]
            : "last" == e
            ? "#" + t.slideOrder[t.len - 1]
            : "random" == e
            ? Math.round(Math.random() * t.len + 1)
            : "#" + (Array.isArray(e) ? e[0] : e),
      });
    }
    kill() {
      SR7.slideShow.pause(this.element.id),
        _tpt.event.rmAll(this.element),
        SR7.M[this.element.id].c.module.remove();
    }
  }
  (SR7.revapi = e),
    (e.init = function (t) {
      let s =
        (SR7.M[t].c.module.dataset.id ?? SR7.M[t].settings.dbid) ||
        (t.includes("SR7_") ? t.split("_")[1] : t);
      return (
        (window["revapi" + s] = new e(t)),
        (window["revapi" + s].id = t),
        window["revapi" + s]
      );
    }),
    SR7.shouldBeInited && SR7.F.init();
})(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      void 0 !== SR7.F.animateLayers)
    )
      return;
    (SR7.F.animateLayers = async function (e) {
      let {
        id: t,
        skey: s,
        layers: i,
        scene: a,
        caller: r,
        update: l,
        subcaller: n,
        timeto: d,
        reset: c,
        ffw: p,
      } = e;
      const h = SR7.M[t],
        u = h.slides?.[s]?.slide?.global;
      if (
        ((a ??= "in"),
        (i ??= h.c.PO[s]),
        (h.c.tl = h.c.tl ?? {}),
        (h.c.tl[s] ??= {}),
        "update" !== r && (h.c.tl[s][a] = { TL: _tpt.gsap.timeline() }),
        "action" !== r &&
          "update" !== r &&
          !u &&
          "action" !== n &&
          ("carousel" !== h.settings.type ||
            "all" !== h.settings.carousel.showAllLayers))
      )
        for (let e in h.c.tl[s])
          _tpt.hop(h.c.tl[s], e) &&
            e != a &&
            (h.c.tl[s][e]?.TL?.pause(),
            h.c.tl[s][e].loops && h.c.tl[s][e]?.loops?.pause());
      for (let e of i) {
        let { layer: i, c: o } = SR7.F.getLayer({ id: t, skey: s, lkey: e });
        if (
          null != o &&
          ("carousel" != h.settings.type ||
            "update" != r ||
            ("all" != h.settings.carousel.showAllLayers && !i.viOC))
        ) {
          if (u) {
            if ("out" == a && !o.animState?.scene) continue;
            if (o.animState?.scene == a) continue;
            if (
              ((o.gpos = _tpt.inRange(
                Math.max(0, SR7.M[t].current.index) + 1,
                i.sStart,
                i.sEnd
              )),
              "in" == a && "out" == o.gpos)
            )
              continue;
            if (
              "action" !== r &&
              "parent" !== r &&
              "out" == a &&
              "in" == o.gpos
            )
              continue;
            if (
              "action" !== r &&
              "parent" !== r &&
              "in" == o.gpos &&
              "in" == a &&
              ("in" == (o.animState?.scene ?? "") ||
                "default" !== (o?.animState?.caller ?? "default"))
            )
              continue;
          }
          if (
            ("action" == r &&
              o?.animState?.scene &&
              o?.tl?.[o?.animState?.scene] &&
              o.tl[o.animState.scene].TL &&
              o.tl[o.animState.scene].TL.pause(),
            c && "parent" == r && "action" == n && "in" == a)
          ) {
            for (let e in o.tl)
              if (_tpt.hop(o.tl, e) && e != a)
                for (let t in o.tl[e])
                  _tpt.hop(o.tl[e], t) && o.tl[e][t]?.pause(0);
            o.fxc &&
              (o.fxitl && (o.fxitl.pause(0), o.fxotl.pause(1)),
              o.el.classList.remove("sr7-fx-hidden"));
          }
          if (
            "action" === r ||
            "parent" === r ||
            "in" != a ||
            !SR7.F.inActionEnv(t, s, e)
          ) {
            if ("action" == r && "container" == i.type) {
              let i = SR7.F.triggeredChildren(t, s, e);
              ("in" != a && "out" != a) ||
                (await SR7.F.animateLayers({
                  id: t,
                  skey: s,
                  reset: c,
                  layers: i,
                  scene: a,
                  caller: "parent",
                  subcaller: r,
                }));
            }
            if (i?.tl?.[a] || ("out" == a && "slidebg" == i.subtype)) {
              let n =
                void 0 !== l && o.tl?.[a]?.[l]?.progress
                  ? o.tl[a][l].progress()
                  : 0;
              o.sbt =
                (h.settings?.sbt?.use ?? !1) &&
                "in" == a &&
                ((h.settings?.sbt?.layers ?? !1) || (i.mod?.s?.ut ?? !1));
              let { tl: u, loops: m } = await SR7.F.processFrame({
                sbt: o.sbt,
                id: t,
                c: o,
                layer: i,
                reset: c,
                timeline: i.tl,
                scene: a,
                skey: s,
                lkey: e,
                caller: r,
                update: l,
              });
              if (p && void 0 !== d) return u.time(d);
              void 0 !== l && 0 !== n && u.progress(n),
                o.sbt && u.pause(),
                h.c.tl[s][a].TL.add(u, 0),
                "update" !== r &&
                  void 0 !== m &&
                  ((h.c.tl[s][a].loops ??= _tpt.gsap.timeline()),
                  h.c.tl[s][a].loops.add(m, 0)),
                o.sbt &&
                  ((h.sbt ??= {}),
                  (h.sbt[s] ??= {}),
                  (h.sbt[s][e] = { tl: u, so: i.mod?.s?.so ?? 0 }),
                  _tpt.gsap.to(u, {
                    duration: 0.01,
                    time: _tpt.gsap.utils.clamp(0, u.duration(), h.sbt.__time),
                  }),
                  m &&
                    ((h.sbt[s][e + "_loop"] ??= {}),
                    (h.sbt[s][e + "_loop"] = { tl: m })));
            }
          }
        }
      }
      "update" != r &&
        (u ||
          h.c.tl[s][a].TL.eventCallback("onComplete", o.sceneCompleted, [
            { id: t, scene: a, caller: r, skey: s },
          ]),
        u ||
          h.c.tl[s][a].TL.eventCallback("onStart", o.sceneStarted, [
            { id: t, scene: a, caller: r, skey: s },
          ]),
        !u &&
          h.slides[s]?.slide?.loop?.u &&
          h.c.tl[s][a].TL.eventCallback("onUpdate", o.sceneUpdated, [
            { id: t, scene: a, caller: r, skey: s },
          ]));
    }),
      (SR7.F.processFrame = async function (r) {
        const {
            timeline: l,
            scene: n,
            id: d,
            layer: c,
            c: p,
            caller: h,
            update: u,
            skey: m,
            reset: g,
            sbt: f,
          } = r,
          v = l[n],
          y = _tpt.gsap.timeline();
        let S;
        p.tl[n] ??= {};
        let b = !1;
        void 0 !== p.mod &&
          (p.mod.animElem = p.mod.mask
            ? p.el
            : p.parallax
            ? p.parallax
            : p.loop
            ? p.loop
            : p.mask
            ? p.mask
            : "column" == p.subtype
            ? p.con
            : p.el);
        let R = p.loop ? "target" : p.mask ? "mask" : "content";
        if (void 0 !== v)
          for (let r of SR7.D.TLTargetsProcess) {
            if (null == v[r]) continue;
            if (void 0 !== u && r !== u) continue;
            if ("parent" == h && "loop" == r) continue;
            (p.cache.tl ??= {}),
              (p.cache.tl[r] ??= "filter" == r ? {} : SR7.F.getEmptyAnimObj(1));
            const l = _tpt.gsap.timeline(),
              g =
                void 0 !== p.mod &&
                (!p.parallax || p.mod.mask) &&
                ((p.mod.animElem !== p.el && "mask" == r) ||
                  (p.mod.animElem == p.el && "content" == r));
            for (let u in v[r]) {
              if (!_tpt.hop(v[r], u)) continue;
              if ("pers" == u || "orig" == u || "type" == u) continue;
              let y =
                  "filter" == r
                    ? ["filter"]
                    : "all" == u
                    ? SR7.D.animAttr.filter(function (e) {
                        return (
                          !v[r].hasOwnProperty(e) &&
                          !v[r].hasOwnProperty(SR7.D.animAttrTrans[e])
                        );
                      })
                    : "scale" == u
                    ? ["scaleX", "scaleY", "skewX", "skewY"]
                    : "motionpath" == u
                    ? ["x", "y", "z"]
                    : u,
                S = SR7.F.usePerspective(
                  v[r][u],
                  SR7.M[d].settings.general,
                  v?.content?.pers ?? "600px"
                );
              (v.pan || v.filter || v.loop) &&
                r == R &&
                (S ??= v?.content?.pers ?? "600px");
              for (let R in v[r][u]) {
                if ("out" == n && !p.animState?.scene) continue;
                if (
                  "in" == n &&
                  ("action" == h || "parent" == h) &&
                  p.animState?.scene &&
                  "out" != p.animState.scene &&
                  0 == R
                )
                  continue;
                if ("in" == n && "action" != h && "w" == ("" + v[r][u][0].t)[0])
                  continue;
                "in" == n &&
                  0 == R &&
                  SR7.F.modify.process(d, "scroll", p.lkey);
                const w = v[r][u][R],
                  x = SR7.D.splits.indexOf(r) >= 0;
                0 == R &&
                  "in" == n &&
                  v[r][u][1]?.t &&
                  parseInt(w?.t) > parseInt(v[r][u][1].t) &&
                  (w.t = v[r][u][1].t),
                  (p.splitText ??= SR7.F.splitText(c, p));
                let F = {
                  ease: w.e,
                  duration: w.d / 1e3,
                  id: p.el.id + "_" + n + "_" + r + "_" + R,
                  immediateRender: "in" === n && 0 == R,
                };
                "" + R != "0" &&
                  x &&
                  (F.stagger =
                    "center" === w.dir || "edges" === w.dir
                      ? SR7.F.offsetStagger({
                          each: (w.delay ?? 5) / 100,
                          offset: (w.delay ?? 5) / 200,
                          from: w.dir,
                        })
                      : SR7.F.offsetStagger({
                          each: (w.delay ?? 5) / 100,
                          from:
                            ("start" != w.dir && "end" != w.dir) ||
                            -1 !=
                              SR7.dirVal(
                                d,
                                SR7.gV({
                                  v: 1 == R ? v[r].all[0].x : w.x,
                                  id: d,
                                  s: "scale",
                                })
                              ).d
                              ? w.dir ?? "start"
                              : "start" == w.dir
                              ? "end"
                              : "end" == w.dir
                              ? "start"
                              : w.dir ?? "start",
                        }));
                let _ =
                    "words" == r || "lines" == r || "chars" == r
                      ? p.splitText[r]
                      : "loop" == r
                      ? p.loop
                      : "mask" == r
                      ? "column" == p.subtype
                        ? [p.mask, p.colbgMask]
                        : p.mask
                      : "row" == p.subtype &&
                        (p.mask || p.loop || ("clip" == r && p.con))
                      ? p.con
                      : "column" == p.subtype && (p.mask || p.loop)
                      ? [p.con, p.colbg]
                      : p.el,
                  M = parseInt(("" + w.t).replace("w", "")) / 1e3 || 0;
                if (("loop" == r && "filter" == u) || "filter" == r || x) {
                  if (
                    ((p.filters ??= {}),
                    (w.fu || void 0 !== (p.filters?.simple?.used ?? void 0)) &&
                      ("filter" == r &&
                        p.mod?.scroll?.uf &&
                        (p.filters.simple = SR7.F.getFilterStyle(
                          p.mod.scroll,
                          "",
                          p.filters?.simple?.used ?? void 0
                        )),
                      (p.filters.simple = SR7.F.getFilterStyle(
                        w.fu ? w : { b: 0, r: 100, g: 0 },
                        "",
                        p.filters?.simple?.used ?? void 0
                      )),
                      (F.filter = p.filters.simple.filter)),
                    ((!x && w.bu) ||
                      void 0 !== (p.filters?.backdrop?.used ?? void 0)) &&
                      ((p.filters.backdrop = SR7.F.getFilterStyle(
                        w.bu ? w : { b: 0, r: 100, g: 0, s: 0, i: 0 },
                        "b",
                        p.filters?.backdrop?.used ?? void 0
                      )),
                      _tpt.isSafari11 || _tpt.isIOS
                        ? (F["-webkit-backdrop-filter"] =
                            p.filters.backdrop.filter)
                        : (F.backdropFilter = p.filters.backdrop.filter),
                      (S = F.transformPerspective ??=
                        v?.content?.pers ?? "600px")),
                    !x &&
                      null == F.filter &&
                      null == F.backdropFilter &&
                      null == F["-webkit-backdrop-filter"])
                  ) {
                    l.add(_tpt.gsap.to(_, {}), "out" === n ? 0 : M);
                    continue;
                  }
                  "filter" == r &&
                    p.mod?.scroll?.uf &&
                    ((_ = p.mask ? p.mask : p.el),
                    (F = SR7.F.modify.get(d, _, F, p, n, R, r, "filter")));
                }
                if ("clip" == r) {
                  if ("inherit" == w.c) continue;
                  (F["clip-path"] = F["-webkit-clip-path"] =
                    SR7.F.clipEffect(v[r].orig, v[r].type, w.c, w.cb)),
                    (p.clipPath = !0);
                } else if ("pan" == r && void 0 !== c.bg.image) {
                  const e = SR7.F.pan.getStep({
                    canvas: p.canvas,
                    x: parseInt(v.pan.all[R].x ?? 0),
                    y: parseInt(v.pan.all[R].y),
                    scale: parseInt(v.pan.all[R].sX) / 100,
                    rotate: parseInt(v.pan.all[R].rZ),
                    pos: c.bg.image.pos,
                  });
                  void 0 !== e &&
                    ((F.x = e.x),
                    (F.y = e.y),
                    (F.scale = e.scale),
                    (F.rZ = e.rZ),
                    0 == R &&
                      (p.canvas.pan = {
                        x: F.x,
                        y: F.y,
                        rZ: F.rZ,
                        scale: F.scale,
                      }),
                    (_ = p.canvas.pan),
                    (SR7.M[d].c.pans ??= {}),
                    (SR7.M[d].c.pans[p.skey] ??= []),
                    SR7.M[d].c.pans[p.skey].includes(p.lkey) ||
                      SR7.M[d].c.pans[p.skey].push(p.lkey));
                } else if ("filter" !== r) {
                  if (
                    ("motionpath" !== u || null == w.anchors
                      ? (y.includes("x") &&
                          void 0 !== w.x &&
                          (F.x = e(d, w, x, p, n, r, "x")),
                        y.includes("y") &&
                          void 0 !== w.y &&
                          (F.y = e(d, w, x, p, n, r, "y")))
                      : (F.motionPath = {
                          type: "thru",
                          curviness: w.curv,
                          path: w.anchors,
                          fromCurrent: !1,
                          autoRotate: !1,
                          alignOrigin: [0.5, 0.5],
                        }),
                    g &&
                      ((F.tx = F.x?.() ?? 0),
                      (F.ty = F.y?.() ?? 0),
                      y.push("tx"),
                      y.push("ty"),
                      (F = SR7.F.modify.get(d, _, F, p, n, R, r, "xy"))),
                    y.includes("z") && void 0 !== w.z
                      ? (F.z = w.z)
                      : delete F.z,
                    "mask" == r
                      ? ((F.overflow =
                          w.oflow ??
                          ((0 == R && null == v[r][u][1]?.oflow) ||
                            (1 == R && null == v[r][u][0]?.oflow
                              ? "visible"
                              : "hidden"))),
                        void 0 !== c.tr &&
                          ((F.rotationX = () => c.tr?.rX ?? 0),
                          (F.rotationY = () => c.tr?.rY ?? 0),
                          (F.rotationZ = () => c.tr?.rZ ?? 0)),
                        p.mod?.scroll?.ut &&
                          (F = SR7.F.modify.get(
                            d,
                            _,
                            F,
                            p,
                            n,
                            R,
                            r,
                            "transform"
                          )))
                      : (y.includes("rotationX") &&
                          (void 0 !== w.rX || ("in" == n && 0 == R)) &&
                          (F.rotationX = t(
                            d,
                            SR7.F.getSpecialValue(
                              w.rX ?? 0,
                              0,
                              SR7.M[d].lastChangeDir
                            ),
                            x
                          )),
                        y.includes("rotationY") &&
                          (void 0 !== w.rY || ("in" == n && 0 == R)) &&
                          (F.rotationY = t(
                            d,
                            SR7.F.getSpecialValue(
                              w.rY ?? 0,
                              0,
                              SR7.M[d].lastChangeDir
                            ),
                            x
                          )),
                        y.includes("rotationZ") &&
                          (void 0 !== w.rZ || ("in" == n && 0 == R)) &&
                          (F.rotationZ = t(
                            d,
                            SR7.F.getSpecialValue(
                              w.rZ ?? 0,
                              0,
                              SR7.M[d].lastChangeDir
                            ),
                            x
                          ))),
                    _tpt.isSafari11 ||
                      _tpt.isIOS ||
                      void 0 === p.ptype ||
                      (void 0 === p.borderW && void 0 === p.borderH) ||
                      (F.force3D = !0),
                    (void 0 !== S ||
                      ("mask" == r &&
                        (p.mod?.scroll?.ut || p.mod?.mouse?.d3))) &&
                      (F.transformPerspective = S ?? 600),
                    (y.includes("scaleX") ||
                      y.includes("scaleY") ||
                      y.includes("skewX") ||
                      y.includes("skewY")) &&
                      (x
                        ? ((F.scaleX = a(
                            d,
                            s(w.sX || w.scaleX),
                            "scale",
                            s(w.skY || w.skewY)
                          )),
                          (F.scaleY = a(
                            d,
                            s(w.sY || w.scaleY),
                            "scale",
                            s(w.skY || w.skewY)
                          )),
                          (F.skewX = a(d, s(w.skX || w.skewX), "skew")),
                          (F.skewY = a(d, s(w.skY || w.skewY), "skew")))
                        : (F = i(F, {
                            sX: w.sX ?? p.cache.tl[r].scaleX,
                            sY: w.sY ?? p.cache.tl[r].scaleY,
                            skX: w.skX ?? p.cache.tl[r].skewX,
                            skY: w.skY ?? p.cache.tl[r].skewY,
                          }))),
                    y.includes("opacity"))
                  ) {
                    let e =
                      "content" == r &&
                      (p.mod?.scroll?.uf ?? !1) &&
                      (p.mod?.scroll?.f ?? 0) > 0;
                    (F[e ? "tf" : "opacity"] =
                      "mask" == r && c.tr
                        ? c.tr.o
                        : x && "in" == n && 0 == R && "inherit" == w.o
                        ? v?.content?.all?.[0]?.o ?? 1
                        : w.o),
                      e &&
                        (F = SR7.F.modify.get(d, _, F, p, n, R, r, "opacity"));
                  }
                  if ("content" == r || x) {
                    if (!x && void 0 !== w.bgcol) {
                      const { gradient: e, bg: t } =
                        0 == R && "in" == n
                          ? SR7.F.getBGAnimColor(p.cache?.color?.bg, w.bgcol)
                          : SR7.F.getBGAnimColor(w.bgcol, p.cache.color.bg);
                      e ? (F.background = t.to) : (F.backgroundColor = t.to),
                        (p.cache ??= {}),
                        (p.cache.color ??= {}),
                        (p.cache.color.bg = t.to),
                        (p.cache.color.bgfrom = n + "_" + r + "_" + R);
                    }
                    if (void 0 !== w.col)
                      (F.color = w.col),
                        x ||
                          ((p.cache.color.c = w.col),
                          (p.cache.color.from = n + "_" + r + "_" + R));
                    else if (
                      ("action" != h && 1 != R) ||
                      "in" != n ||
                      (!x && "idle" === (p?.cache?.color?.from ?? "idle"))
                    ) {
                      if (
                        !x &&
                        "action" == h &&
                        "in" == n &&
                        "idle" !== (p?.cache?.color?.bgfrom ?? "idle")
                      ) {
                        const { gradient: e, bg: t } = SR7.F.getBGAnimColor(
                          c.bg.color,
                          p.cache.color.bg
                        );
                        e
                          ? (p.cache.color.bg = F.background = t.to)
                          : (F.backgroundColor = t.to),
                          (p.cache.color.bg = t.to),
                          (p.cache.color.bgfrom = "idle");
                      }
                    } else
                      (F.color = () => SR7.gV({ v: c.color, id: d })),
                        x ||
                          ((p.cache.color.c = F.color),
                          (p.cache.color.from = "idle"));
                  }
                  if ("loop" !== r) {
                    (F.display =
                      "row" == c.subtype && p.con && p.mask
                        ? p.conDisplay
                        : "chars" == r || "words" == r
                        ? "inline-block"
                        : "column" == c.subtype &&
                          (p.mask || p.loop) &&
                          "table-cell" == p.display
                        ? "block"
                        : p.display),
                      p.mask &&
                        "column" == p.subtype &&
                        _ == p.mask &&
                        "table-cell" == F.display &&
                        (F.display = "block"),
                      (F.visibility =
                        x && "in" == n
                          ? "inherit"
                          : "in" == n && 0 == R
                          ? f || "container" == c.type
                            ? "visible"
                            : "hidden"
                          : "in" == n &&
                            1 == R &&
                            SR7.M[d].sbt &&
                            SR7.M[d].settings.migrated &&
                            "hidden" ==
                              (p.par?.el?.style?.visibility ?? "visible") &&
                            "inherit" == p.visibility
                          ? "visible"
                          : () => p.visibility),
                      0 == R &&
                        "in" == n &&
                        "action" !== h &&
                        "parent" !== h &&
                        ((F.x =
                          "inherit" == F.x ||
                          ("function" == typeof F.x && "inherit" == F.x())
                            ? 0
                            : F.x),
                        (F.y =
                          "inherit" == F.y ||
                          ("function" == typeof F.y && "inherit" == F.y())
                            ? 0
                            : F.y)),
                      "mask" == r && (p.cache.tl[r].overflow = F.overflow);
                    for (let e of y)
                      "function" != typeof F[e] ||
                      ("inherit" != F[e]() && null != F[e]()) ||
                      void 0 === p.cache.tl?.[r]?.[e]
                        ? "inherit" == F[e] || null == F[e]
                          ? void 0 !== p.cache.tl[r][e] &&
                            (F[e] = p.cache.tl[r][e])
                          : "scaleX" == e && F.skewX
                          ? (p.cache.tl[r][e] = w.sX ?? p.cache.tl[r].scaleX)
                          : "scaleY" == e && F.skewY
                          ? (p.cache.tl[r][e] = w.sY ?? p.cache.tl[r].scaleY)
                          : (p.cache.tl[r][e] = F[e])
                        : (F[e] = p.cache.tl[r][e]),
                        "inherit" == F[e] && "visibility" !== e && delete F[e];
                  }
                }
                "in" == n && 1 == R && (p.tl.inFrameShift = M),
                  "action" == h &&
                    "in" == n &&
                    R > 0 &&
                    (M -= p.tl.inFrameShift),
                  void 0 !== p.fxc &&
                    "content" == r &&
                    "c" == (w.fx ?? "")[0] &&
                    (l.add(
                      SR7.F.getFXCoverAnim(p, w, n, R),
                      "out" === n ? 0 : M
                    ),
                    "out" !== n && p.el.classList.add("sr7-fx-hidden")),
                  !p.backFace &&
                    ("clip" == r ||
                      ("function" == typeof F.rotationX &&
                        Math.abs(F.rotationX?.()) > 90) ||
                      Math.abs(F.rotationX) > 90 ||
                      ("function" == typeof F.rotationY &&
                        Math.abs(F.rotationY?.()) > 90) ||
                      Math.abs(F.rotationY) > 90 ||
                      (p.filters?.backdrop?.used && _tpt.is_mozilla)) &&
                    ((p.backFace = !0),
                    (p.el.style.backfaceVisibility = "visible"),
                    "clip" == r && p.el.classList.add("sr7-withclip")),
                  (b = !0);
                let k = "d" == w.pE || null == w.pE ? c.pE || "d" : w.pE;
                if (
                  void 0 !== w.rep ||
                  1 == (p.repeat?.[p.repeat.cur]?.state ?? 0)
                )
                  void 0 !== w.rep &&
                    (("s" != w.rep.s && "se" != w.rep.s) ||
                      ((p.repeat ??= {}),
                      p.repeat[r + "_" + R + "_" + u]?.tl?.kill(),
                      (p.repeat[(p.repeat.cur = r + "_" + R + "_" + u)] = {
                        state: 1,
                        at: M,
                        tl: _tpt.gsap.timeline(),
                      }),
                      p.repeat[p.repeat.cur].tl.eventCallback(
                        "onStart",
                        o.frameRepeatStart,
                        [
                          {
                            id: d,
                            skey: m,
                            c: p,
                            scene: n,
                            layer: c,
                            target: r,
                            caller: h,
                            frame: R,
                            sbt: f,
                            pE: k,
                          },
                        ]
                      ),
                      l.add(p.repeat[p.repeat.cur].tl, M)),
                    ("e" != w.rep.s && "se" != w.rep.s) ||
                      ((p.repeat[p.repeat.cur].state = 2),
                      (p.repeat[p.repeat.cur].c = w.rep.c),
                      p.repeat[p.repeat.cur].tl.repeat(w.rep.r ?? -1),
                      (p.repeat[p.repeat.cur].tl.vars.repeatRefresh =
                        w.rep.sh ?? !0),
                      p.repeat[p.repeat.cur].tl.yoyo(w.rep.y ?? !1))),
                    void 0 !== p.repeat &&
                      (p.repeat[p.repeat.cur].tl.to(
                        _,
                        F,
                        M - p.repeat[p.repeat.cur].at
                      ),
                      p.repeat[p.repeat.cur].c &&
                        p.repeat[p.repeat.cur].tl.eventCallback(
                          "onRepeat",
                          o.frameRepeat,
                          [
                            {
                              id: d,
                              skey: m,
                              c: p,
                              scene: n,
                              layer: c,
                              target: r,
                              caller: h,
                              frame: R,
                              sbt: f,
                              pE: k,
                            },
                          ]
                        ));
                else {
                  if (0 == R && "in" === n)
                    void 0 !== F.opacity && (F.opacity = parseFloat(F.opacity)),
                      l.set(_, F, M),
                      (p.animState.frame = 0);
                  else {
                    void 0 !== F.opacity && (F.opacity = parseFloat(F.opacity)),
                      1 == R &&
                        "in" == n &&
                        0 == p.animState.frame &&
                        0 == F.duration &&
                        (F.duration = 0.0075);
                    let e = _tpt.gsap.to(_, F);
                    e.eventCallback("onStart", o.frameStarted, [
                      {
                        id: d,
                        c: p,
                        scene: n,
                        layer: c,
                        target: r,
                        caller: h,
                        frame: R,
                        sbt: f,
                        pE: k,
                      },
                    ]),
                      f &&
                        e.eventCallback("onUpdate", o.frameUpdated, [
                          {
                            id: d,
                            c: p,
                            scene: n,
                            layer: c,
                            target: r,
                            caller: h,
                            frame: R,
                            sbt: f,
                            pE: k,
                          },
                        ]),
                      e.eventCallback("onComplete", o.framesCompleted, [
                        {
                          id: d,
                          c: p,
                          scene: n,
                          layer: c,
                          target: r,
                          caller: h,
                          frame: R,
                          sbt: f,
                          pE: k,
                        },
                      ]),
                      l.add(e, "out" === n ? 0 : M);
                  }
                  "pan" != r ||
                    p.tl.in.pan ||
                    "carousel" != SR7.M[d].settings.type ||
                    (l.progress(0),
                    l.paused(!0),
                    requestAnimationFrame(() => {
                      l.render(0, !1, !0);
                    }));
                }
                void 0 !== F.modifiers &&
                  ((p.mod.coreTween ??= {}),
                  void 0 !== F.modifiers.filter &&
                    ((p.mod.coreTween.filter ??= {}),
                    (p.mod.coreTween.filter[n] = r)),
                  void 0 !== F.modifiers.x &&
                    ((p.mod.coreTween.xy ??= {}), (p.mod.coreTween.xy[n] = r)),
                  void 0 !== F.modifiers.opacity &&
                    ((p.mod.coreTween.opacity ??= {}),
                    (p.mod.coreTween.opacity[n] = r)));
              }
              l.eventCallback("onStart", o.layerStarted, [
                {
                  id: d,
                  c: p,
                  scene: n,
                  layer: c,
                  target: r,
                  caller: h,
                  sbt: f,
                  tl: l,
                },
              ]),
                l.eventCallback("onUpdate", o.layerUpdated, [
                  {
                    id: d,
                    c: p,
                    scene: n,
                    layer: c,
                    target: r,
                    caller: h,
                    sbt: f,
                    tl: l,
                  },
                ]),
                l.eventCallback("onComplete", o.layerCompleted, [
                  {
                    id: d,
                    c: p,
                    scene: n,
                    layer: c,
                    target: r,
                    caller: h,
                    sbt: f,
                    tl: l,
                  },
                ]);
            }
            "loop" == r
              ? ((S ??= _tpt.gsap.timeline()), S.add(l, 0))
              : "pan" === r || ("pan" == r && "update" == h) || y.add(l, 0),
              (p.tl[n][r] = l),
              (p.tl[n].TL = y);
          }
        if (null == u || "bg" == u)
          if ("out" == n && "slidebg" == c.subtype) SR7.M[d].c.leavingBG = p;
          else if (v.bg)
            if (
              ((p.el.style.display = p.display),
              (p.el.style.visibility = p.visibility),
              (b = !0),
              "slidebg" == c.subtype)
            ) {
              if ("in" !== n) return;
              if (
                (void 0 !== p.mod &&
                  ((p.mod.animElemXY ??= p.mask ? p.mask : p.el),
                  _tpt.scrollObserver.run(SR7.M[d].c.module, !0),
                  SR7.F.modify.process(d, "scroll")),
                void 0 !== SR7.M[d].c.leavingBG)
              ) {
                let e = SR7.M[d].c.leavingBG;
                e.tl[n] &&
                  (e.tl[n].bg && e.tl[n].bg.kill(),
                  SR7.M[d].c.tl[e.skey].out.TL.add(
                    (e.tl[n].bg = SR7.F.animateBG({
                      timeline: l,
                      c: e,
                      id: d,
                      scene: "out",
                    })),
                    0
                  ));
              }
              p.tl.in.bg && p.tl.in.bg.kill(),
                y.add((p.tl.in.bg = SR7.F.animateBG(r)), 0),
                void 0 !== SR7.M[d].c.leavingBG &&
                  SR7.M[d].c.leavingBG.temp.TL.totalDuration() <
                    p.temp.TL.totalDuration() &&
                  SR7.M[d].c.leavingBG.temp.TL.duration(
                    p.temp.TL.totalDuration()
                  );
            } else
              ("in" != n && "out" != n) ||
                (p.tl[n].bg && p.tl[n].bg.kill(),
                y.add((p.tl[n].bg = SR7.F.animateBG(r)), 0));
        return (
          b && ((p.animState.scene = n), (p.animState.caller = h || "default")),
          { tl: y, loops: S }
        );
      }),
      (SR7.F.processHover = (e, t) => {
        let { c: s, layer: a, id: r } = e;
        if (
          void 0 !== (s?.cache?.hover ?? void 0) &&
          (s.cache?.hover?.requested ?? "none") == t
        )
          return;
        if (
          !s.animState.entered ||
          (s.animState?.runningFrames?.length ?? 0) > 0
        )
          return;
        let o = parseInt(a.hov.frame.d) / 1e3 ?? 300;
        if (
          ((o = 0 == o ? 0.001 : o),
          s.tl_hover && s.tl_hover.progress && s.tl_hover.progress() > 0)
        ) {
          if ("idle" == t)
            return (
              !0 !== s.tl_hover.reversed() && s.tl_hover.reverse(),
              void (s.cache.hover.requested = t)
            );
          if ("hover" == t)
            return (
              1 == s.tl_hover.reversed() && s.tl_hover.play(),
              void (s.cache.hover.requested = t)
            );
        }
        (s.cache.hover ??= {}),
          (s.cache.hover.requested = t),
          (s.tl_hover = _tpt.gsap.timeline({
            data: { id: s.el.id + "_hover" },
          }));
        const l = a.hov.frame,
          n = a.hov.radius,
          d = "hover" == t ? a.hov.zIndex : a.zIndex,
          c = "hover" == t ? a.hov.deco : a?.content?.deco,
          p =
            "column" == a.subtype && s.colbg
              ? "colbg"
              : "row" == a.subtype && s.con
              ? "con"
              : "el";
        let h = { ease: a.hov.frame.e, duration: o };
        void 0 !== l.x && (h.x = l.x),
          void 0 !== l.y && (h.y = l.y),
          void 0 !== l.z && (h.z = l.z),
          (void 0 !== l.rX || void 0 !== l.rotationX) &&
            (h.rotationX = l.rX ?? l.rotationX ?? 0),
          (void 0 !== l.rY || void 0 !== l.rotationY) &&
            (h.rotationY = l.rY ?? l.rotationY ?? 0),
          (void 0 !== l.rZ || void 0 !== l.rotationZ) &&
            (h.rotationZ = l.rZ ?? l.rotationZ ?? 0),
          void 0 !== d && "auto" !== d && (h.zIndex = d),
          "text" == a.type && void 0 !== c && (h.textDecoration = c);
        let u,
          m = (s.perspective = SR7.F.usePerspective(
            l,
            SR7.M[r].settings.general,
            600,
            !0
          ));
        if (
          (void 0 !== m &&
            s.tl_hover.set(s.el, { transformPerspective: m ?? 600 }),
          (h = i(h, l)),
          s.svg &&
            !a.content?.oC &&
            void 0 !== a.hov.svg &&
            (void 0 !== a.hov.svg.c &&
              s.tl_hover.to(
                s.svgPaths.length > 0 ? s.svgPaths : s.el,
                { ease: h.ease, duration: h.duration, fill: a.hov.svg.c },
                0
              ),
            void 0 !== a.hov?.svg?.stroke?.c &&
              "transparent" !== a.hov?.svg?.stroke?.c &&
              s.tl_hover.to(
                s.svg,
                {
                  ease: h.ease,
                  duration: h.duration,
                  stroke: a.hov?.svg?.stroke.c,
                  strokeWidth: parseInt(a.hov?.svg?.stroke.w) + "px",
                  strokeDashoffset: a.hov?.svg?.stroke.o,
                  strokeDasharray: a.hov?.svg?.stroke.d,
                },
                0
              )),
          (h.opacity = l.o || l.opacity),
          a.hov.color?.bg)
        )
          if (a.bg.image)
            h.backgroundColor =
              "string" == typeof a.hov.color.bg
                ? a.hov.color.bg
                : a.hov.color.bg.string;
          else {
            let { gradient: e, bg: t } = SR7.F.getBGAnimColor(
              a.hov.color.bg,
              s.cache?.color?.bg,
              a.hov.color.gAnim
            );
            void 0 !== s.colbg
              ? (e && s.tl_hover.set(s.colbg, { background: t.from }),
                s.tl_hover.to(
                  s.colbg,
                  {
                    ease: h.ease,
                    duration: h.duration,
                    ["background" + (e ? "" : "Color")]: t.to,
                  },
                  0
                ))
              : (t?.from &&
                  -1 !== t.from.indexOf("180deg") &&
                  -1 !== t.to.indexOf("180deg") &&
                  2 === t.from.split("deg").length &&
                  2 === t.to.split("deg").length &&
                  ((t.from = t.from.replace("180deg,", "")),
                  (t.to = t.to.replace("180deg,", ""))),
                t?.from &&
                  (e && s.tl_hover.set(s.el, { background: t.from }),
                  !e &&
                    "transparent" == t.from &&
                    s.tl_hover.set(s.el, {
                      background: _tpt.gradient.transToColor(t.to),
                    })),
                t?.to && (h["background" + (e ? "" : "Color")] = t.to));
          }
        if (
          (a.hov.color.c !== (s.cache?.color?.c ?? void 0) &&
            (h.color = a.hov.color.c),
          JSON.stringify(a.hov.border) !== JSON.stringify(a.border ?? {}))
        ) {
          const e = a.hov.border;
          u = {
            duration: h.duration,
            ease: h.ease,
            borderColor: e.c ?? "transparent",
            borderStyle:
              null == e.s
                ? "none"
                : "string" == typeof e.s
                ? e.s
                : SR7.gV({ v: e.s ?? "none", id: r }),
          };
          for (let t = 0; t < 4; t++)
            u[SR7.D.BWID[t]] = _tpt.unitize(
              SR7.gV({
                v: e?.w?.[SR7.D.DS[t]] ?? 0 ?? "0px",
                id: r,
                f: a.fluid?.tr,
                m: "round",
              })
            );
        }
        if (JSON.stringify(a.hov.radius) !== JSON.stringify(a.radius ?? {})) {
          u ??= { duration: h.duration, ease: h.ease };
          for (let e = 0; e < 4; e++)
            u[SR7.D.BRAD[e]] = _tpt.unitize(n?.[SR7.D.DS[e]] ?? "0px");
        }
        void 0 !== u && s.tl_hover.to(s[p], u, 0);
        let g = "column" == s.subtype && s.mask ? [s.colbg, s.con] : s.el,
          f = s.mask
            ? "column" == s.subtype
              ? [s.mask, s.colbgMask]
              : s.mask
            : void 0;
        if (SR7.F.useFilter(a.hov.filter) || s.filters?.simple?.filter) {
          let e = SR7.F.getFilterStyle(
              a.hov.filter,
              "",
              s.filters?.simple?.used ?? void 0
            ),
            i = SR7.F.getFilterStyle(
              s.filters?.simple?.filter ?? "",
              "",
              e.used
            );
          (h.filter = e.filter),
            "hover" == t &&
              "" !== h.filter &&
              _tpt.gsap.set(g, { filter: i.filter });
        }
        if ("hover" == t)
          for (let e of SR7.D.animAttr)
            ("inherit" != h[e] &&
              null != h[e] &&
              h[e] != s.cache.tl.content[e]) ||
              delete h[e];
        s.tl_hover.to(g, h, 0),
          f &&
            s.tl_hover.eventCallback(
              "hover" == t ? "onStart" : "onComplete",
              (e) => {
                _tpt.gsap.set(e.mask, { overflow: e.oflow });
              },
              [
                {
                  mask: f,
                  oflow:
                    "hover" == t
                      ? a.hov?.m
                        ? "hidden"
                        : "visible"
                      : s.cache?.tl?.mask?.overflow,
                },
              ]
            ),
          s.tl_hover.eventCallback(
            "onReverseComplete",
            (e) => {
              (e.cache = void 0),
                (e.tl = void 0),
                e.mask && _tpt.gsap.set(e.mask, { overflow: e.oflow });
            },
            [
              {
                cache: s.cache.hover,
                tl: s.tl_hover,
                mask: f,
                oflow: s.cache?.tl?.mask?.overflow,
              },
            ]
          );
      });
    const e = (e, t, s, i, a, r, o) =>
        s
          ? (s) =>
              SR7.cVal(
                SR7.gV({ v: t[o], id: e, s: "scale" }),
                e,
                i,
                SR7.gV({ v: t[o + "Re"], id: e, s: "scale" }),
                t.off,
                o,
                i.splitText[r][s],
                a,
                s
              )
          : () =>
              SR7.cVal(
                SR7.gV({ v: t[o], id: e, s: "scale" }),
                e,
                i,
                SR7.gV({ v: t[o + "Re"], id: e, s: "scale" }),
                t.off,
                o,
                !1,
                a
              ),
      t = (e, t, s) =>
        s
          ? (s) => SR7.F.getOffset(t, void 0, SR7.M[e].lastChangeDir, s)
          : () => SR7.F.getOffset(t, void 0, void 0, 0),
      s = (e) => ("inherit" == e ? void 0 : e),
      i = (e, t) => {
        let i = s(t.sX ?? t.scaleX),
          a = s(t.sY ?? t.scaleY),
          r = s(t.skX ?? t.skewX),
          o = s(t.skY ?? t.skewY);
        return (
          (void 0 === r && void 0 === o) ||
            (void 0 !== r &&
              (a =
                parseFloat(a ?? 1) *
                Math.cos((r = parseFloat(r)) * _tpt.DEG2RAD)),
            void 0 !== o &&
              (i =
                parseFloat(i ?? 1) *
                Math.cos((o = parseFloat(o)) * _tpt.DEG2RAD))),
          (void 0 === r && void 0 === o) ||
            ((e.skewX = _tpt.unitize(r ?? 0, "deg")),
            (e.skewY = _tpt.unitize(o ?? 0, "deg"))),
          (void 0 === i && void 0 === a) ||
            ((e.scaleX = i ?? 1), (e.scaleY = a ?? 1)),
          e
        );
      },
      a = (e, t, s, i) => (a) => {
        let r = SR7.F.getOffset(t, void 0, SR7.M[e].lastChangeDir, a);
        if ("skew" == s) return _tpt.unitize(r ?? 0, "deg");
        let o = SR7.F.getOffset(i, void 0, SR7.M[e].lastChangeDir, a);
        return null == o
          ? r
          : parseFloat(r || 1) * Math.cos(parseFloat(o) * _tpt.DEG2RAD);
      },
      r = (e, t, s, i) => {
        let a =
          (i || e.e / 1e3 <= t.time()) && e.e / 1e3 > t.time()
            ? 1e3 * (e.e / 1e3 - t.time())
            : 0;
        (i || e.e / 1e3 <= t.time()) &&
          (-1 == e.r || s < e.r) &&
          setTimeout(() => {
            t.time(e.s / 1e3);
          }, a);
      };
    SR7.F.updateVisibility = (e) => {
      "column" == e.subtype &&
        e.target.style.visibilty !== e.el.style.visibility &&
        (e.target.style.visibility = e.visibility),
        e.parallax &&
          e.parallax.style.visibility !== e.el.style.visibilty &&
          (e.parallax.style.visibility = e.visibility),
        e.mask &&
          e.mask.style.visibility !== e.el.style.visibilty &&
          (e.mask.style.visibility = e.visibility),
        e.loop &&
          e.loop.style.visibility !== e.el.style.visibilty &&
          (e.loop.style.visibility = e.visibility),
        e.addonWrap &&
          e.addonWrap.style.visibility !== e.el.style.visibilty &&
          (e.addonWrap.style.visibility = e.visibility);
    };
    const o = {
      sceneStarted: (e) => {
        let { id: t, skey: s, scene: i } = e;
        "in" == i && (SR7.M[t].states.sceneInProgress = !0),
          SR7.M[t].slides[s].slide?.loop?.u && (SR7.M[t].c.tl[s].loop = 0);
      },
      sceneUpdated: (e) => {
        let { id: t, skey: s, scene: i } = e;
        "in" == i &&
          void 0 !== SR7.M[t].c.tl[s].loop &&
          r(
            SR7.M[t].slides[s].slide?.loop,
            SR7.M[t].c.tl[s][i].TL,
            SR7.M[t].c.tl[s].loop++
          );
      },
      sceneCompleted: function (e) {
        let { id: t, skey: s, scene: i, caller: a } = e;
        "in" == i && SR7.F.slideDelayFinished(t),
          "in" == i && void 0 !== SR7.M[t].c.tl[s].loop
            ? r(
                SR7.M[t].slides[s].slide?.loop,
                SR7.M[t].c.tl[s][i].TL,
                SR7.M[t].c.tl[s].loop++,
                !0
              )
            : "out" == i &&
              "action" !== a &&
              "parent" !== a &&
              !0 !== SR7.M[t].zOrder.managed &&
              SR7.F.hideLeavingSlide(t, s);
      },
      layerStarted: function (e) {
        let { scene: t, c: s, sbt: i, id: a, frame: r } = e;
        "out" !== t && (s.state = "animated"),
          "in" == t && s.repeat && SR7.F.updateVisibility(s),
          i && !SR7.M[a].sbt.__time && SR7.F.sbt.process(a);
      },
      layerUpdated: async function (e) {
        let { id: t, scene: s, c: i, target: a, sbt: r } = e;
        r &&
          !SR7.M[t].sbt.done &&
          SR7.M[t].sbt?.[SR7.M[t].current.id]?.[i.lkey] &&
          !SR7.M[t].sbt[SR7.M[t].current.id][i.lkey].tl.paused() &&
          SR7.M[t].sbt[SR7.M[t].current.id][i.lkey].tl.time() >=
            SR7.M[t].sbt.__time &&
          SR7.M[t].sbt[SR7.M[t].current.id][i.lkey].tl.pause(),
          (i.animState?.flagged &&
            0 == i.animState?.frame &&
            "default" == i.animState?.caller &&
            "in" == i.animState?.scene) ||
            ((i.animState.flagged = !0),
            "in" == s && "pan" == a && i.canvas.drawImg(),
            i.announce?.update && (await SR7.F.triggerLayerEvent(e, "update")));
      },
      layerCompleted: function (e) {
        let { scene: t, layer: s, c: i, target: a, caller: r } = e;
        if (
          ("out" == t &&
            "content" == a &&
            (SR7.F.manageLayerListeners(i, s, !1),
            (i.state = "removed"),
            void 0 !== (i.cache?.hover?.requested ?? void 0) &&
              (i.cache.hover.requested = "idle")),
          "out" == t)
        )
          for (let e in i.repeat)
            _tpt.hop(i.repeat, e) && "cur" !== e && i.repeat[e].tl.kill();
        "out" == t &&
          ((i.el.style.pointerEvents = "none"),
          i[i.LME]?.style && (i[i.LME].style.pointerEvents = "none"),
          (i[i.LME].style.visibility = "hidden"),
          (i.el.style.visibility = "hidden")),
          (i.animState.runningFrames = []),
          delete i.animState.flagged;
      },
      frameRepeatStart: async function (e) {
        (e.caller = "repeat"),
          (e.animState = { scene: e.scene, frame: 1 }),
          await SR7.F.triggerLayerEvent(e, "framestarted");
      },
      frameRepeat: async function (e) {
        let { id: t, c: s, scene: i, skey: a } = e,
          r = SR7.F.triggeredChildren(t, a, s.lkey);
        (e.c.animState.frame = e.frame),
          "in" == i &&
            r &&
            r.length > 0 &&
            (await SR7.F.animateLayers({
              id: t,
              skey: a,
              layers: r,
              scene: i,
              caller: "parent",
              ffw: !0,
              timeto: s.repeat[s.repeat.cur].at,
            })),
          (e.caller = "repeat"),
          (e.animState = { scene: e.scene, frame: 1 }),
          await SR7.F.triggerLayerEvent(e, "framerepeated");
      },
      frameStarted: async function (e) {
        let {
          id: t,
          c: s,
          scene: i,
          layer: a,
          target: r,
          frame: o,
          caller: n,
          pE: d,
          sbt: c,
        } = e;
        (o = parseInt(o)),
          "hover" == s.cache?.hover?.requested &&
            s.tl_hover &&
            (s.tl_hover.kill(!0),
            (s.cache.hover.requested = "idle"),
            delete s.tl_hover),
          (s.animState.frame = o),
          (s.animState.scene = i),
          (s.animState.entered = "in" === i && s.animState.entered);
        let p = i + "_" + r + "_" + o;
        -1 == s.animState.runningFrames.indexOf(p) &&
          s.animState.runningFrames.push(p),
          "in" == i &&
            "content" == r &&
            1 == o &&
            "update" !== n &&
            SR7.F.manageLayerListeners(s, a, !0),
          (s.el.style.pointerEvents =
            "out" == i || ("in" == i && (0 == o || 1 == o))
              ? "none"
              : s.listeners.hasAny
              ? "auto"
              : "n" == d
              ? "none"
              : "i" == d
              ? "inherit"
              : s.pE),
          s[s.LME]?.style?.pointerEvents &&
            (s[s.LME].style.pointerEvents = s.el.style.pointerEvents),
          SR7.F.updateVisibility(s),
          await l(s, t, o, i, n);
        let h =
          "in" == i &&
          "update" !== n &&
          "enterstage" !== s.lastEventCalled &&
          ((c && !s.animState.stageState) || 1 == o)
            ? "enterstage"
            : "out" == i && "update" !== n
            ? "leavestage"
            : "framestarted";
        (s.animState.stageState = !0),
          this._dur && (e.duration = this._dur),
          this._start && (e.start = this._start),
          this.vars?.ease && (e.ease = this.vars.ease),
          await SR7.F.triggerLayerEvent(e, h);
      },
      frameUpdated: async function (e) {
        let { scene: t, frame: s, pE: i, c: a, interrupt: r } = e;
        r ||
          "in" != t ||
          1 != s ||
          ((a.el.style.pointerEvents =
            "n" == i ? "none" : a.listeners.hasAny ? "auto" : a.pE),
          a[a.LME]?.style?.pointerEvents &&
            (a[a.LME].style.pointerEvents = a.el.style.pointerEvents));
      },
      framesCompleted: async function (e) {
        let {
          id: t,
          scene: s,
          frame: i,
          pE: a,
          c: r,
          caller: o,
          target: l,
          layer: n,
          interrupt: d,
        } = e;
        d ||
          "in" != s ||
          1 != i ||
          ((r.el.style.pointerEvents =
            "n" == a ? "none" : r.listeners.hasAny ? "auto" : r.pE),
          r[r.LME]?.style?.pointerEvents &&
            (r[r.LME].style.pointerEvents = r.el.style.pointerEvents));
        const c = s + "_" + l + "_" + i;
        let p;
        if (
          ((r.animState.runningFrames = r.animState.runningFrames.filter(
            (e) => e !== c
          )),
          d || "in" != s || "animateBG" != o || "slidebg" != r.subtype
            ? "out" == s && "animateBG" == o && "slidebg" == r.subtype
              ? (p = "leftstage")
              : ((p =
                  1 == r.animState.frame &&
                  "update" !== o &&
                  "in" == s &&
                  0 == r.animState.runningFrames.length
                    ? "enteredstage"
                    : "out" == s && "update" !== o
                    ? "leftstage"
                    : "frameended"),
                "enteredstage" == p && (r.animState.entered = !0))
            : (SR7.F.triggerSlideEvent(t, "afterChange", [
                "onafterswap",
                "onchange",
              ]),
              (p = "enteredstage")),
          p &&
            ((r.animState.stageState = "leftstage" != p),
            await SR7.F.triggerLayerEvent(e, p)),
          !d &&
            "in" == s &&
            "animateBG" == o &&
            r.media &&
            "slidebg" === r.subtype &&
            "html5" !== r.media.player.options.type)
        )
          r.media.play(), SR7.M[t].globalMuted && r.media.mute();
        else if ("out" == s && 0 == i && r.media) {
          let e = r.media.player.options;
          "1sttime" == e.autoPlay && (e.autoPlay = !1),
            "no1sttime" == e.autoPlay && (e.autoPlay = !0),
            r.media.pause(),
            e.rewind && r.media.rewind();
        }
        "out" == s && r?.tl?.in?.pan && r.tl.in.pan.pause();
      },
    };
    let l = async function (e, t, s, i, a) {
      if (
        e.media &&
        ((1 === s && "in" === i) || "animateBG" === a) &&
        ("slidebg" !== e.subtype || "carousel" !== SR7.M[t].settings.type)
      ) {
        let s = e.media.player.options;
        e.media.player.frameStart = new Date().getTime();
        let r = SR7.M[t];
        (e.skey == SR7.M[t].current.id || (e.global && "in" === e.gpos)) &&
        "false" !== s.autoPlay &&
        !1 !== s.autoPlay &&
        "no1sttime" !== s.autoPlay
          ? (("slidebg" === e.subtype &&
              "html5" !== e.media.player.options.type) ||
              (e.media.play(), SR7.M[t].globalMuted && e.media.mute()),
            s.pauseTimer && SR7.slideShow.pause(t))
          : "carousel" == r.settings.type &&
            "in" === i &&
            ("all" === r.settings.carousel.showAllLayers ||
              ("individual" === r.settings.carousel.showAllLayers &&
                r.slides[e.skey].layers[e.lkey].viOC)) &&
            (e.media.player.options.cOC &&
            "false" !== String(s.autoPlay) &&
            "no1sttime" !== s.autoPlay
              ? ((r.videoDontInterrupt ??= {}),
                (r.videoDontInterrupt[e.media.player.containerId] = !0),
                e.media.play())
              : ((r.videoPlayInFocus ??= {}),
                (r.videoPlayInFocus[e.media.player.containerId] =
                  e.media.player))),
          "out" === i && "animateBG" === a && e.media.pause(),
          s.nextSlide &&
            !e.media.hasEvent("finished") &&
            e.media.addEvent(
              "finished",
              (e, t) => {
                SR7.F.requestSlide({ id: t.id, slide: "+1" });
              },
              { id: t, c: e }
            ),
          (!s.stopAllMedia && !s.pauseTimer) ||
            e.media.hasEvent("playing") ||
            e.media.addEvent(
              "playing",
              (t, i) => {
                s.stopAllMedia &&
                  !e.media.player.pauseRequested &&
                  e.media.stopPlayingMedias(!1),
                  s.pauseTimer && SR7.slideShow.pause(i.id);
              },
              { id: t, c: e, o: s }
            ),
          s.pauseTimer &&
            !e.media.hasEvent("paused") &&
            e.media.addEvent(
              "paused",
              (e, t) => {
                t.o.pauseTimer && SR7.slideShow.resume(t.id);
              },
              { id: t, c: e, o: s }
            );
      }
    };
    (SR7.F.hideLeavingSlide = (e, t) => {
      if (null == e || null == t || -1 == t) return;
      const s = SR7.M[e];
      "carousel" != s.settings.type &&
        ((s.c.slides[t].style.display = "none"),
        (s.c.slides[t].style.visibilty = "hidden"),
        (s.c.slides[t].style.pointerEvents = "none"),
        (s.zOrder = {}),
        SR7.F.slideDelayFinished(e));
    }),
      (SR7.F.slideDelayFinished = (e) => {
        clearTimeout(SR7.M[e].states.waitingForNextCallTimer),
          delete SR7.M[e].states.waitingForNextCallTimer,
          SR7.M[e].states.sceneInProgress &&
            ((SR7.M[e].states.sceneInProgress = !1),
            SR7.M[e].states.waitingForNextCall &&
              SR7.F.requestSlide(SR7.M[e].states.waitingForNextCall));
      }),
      (SR7.F.getRandomSlidetransition = (e, t = 0) => {
        if (t > 10) return null;
        const s = Object.keys(e).filter(
          (e) => "in" !== e && "out" !== e && "icon" !== e
        );
        if (0 === s.length) return null;
        const i = e[s[Math.floor(Math.random() * s.length)]];
        return i.title
          ? i
          : i.title || "object" != typeof i
          ? SR7.F.getRandomSlidetransition(e, t + 1)
          : SR7.F.getRandomSlidetransition(i, t + 1);
      }),
      (SR7.F.animateBG = function (e) {
        const { timeline: t, scene: s, id: i, c: a, layer: r } = e;
        "in" == s && (a.canvas.canvas.style.visibility = "hidden"),
          (a.canvas.canvas.style.background = "transparent"),
          a.media &&
            "html5" == a.media.player.options.type &&
            a.media.startCanvas(a.canvas);
        const o = SR7.M[i];
        let l =
          -1 == o.prev.index && o.settings.fs?.as
            ? _tpt.extend({}, o.settings.fs.a)
            : _tpt.extend({}, t.in.bg);
        if ("in" == s && l.rnd && void 0 !== SR7.E.transtable) {
          const e = SR7.F.getRandomSlidetransition(SR7.E.transtable);
          e && (l = SR7.D.getBGAnim(e));
        }
        Array.isArray(l.addOns) && 0 === l.addOns.length && (l.addOns = {}),
          SR7.D.transitions?.[l.e]?.getBasic &&
            (l = _tpt.extend(SR7.D.transitions[l.e].getBasic(s), l));
        const n = (l[s] ??= {}),
          d = (a.temp = {});
        return (
          (a.aCanvas ??= new SR7.F.canvas({
            wrap: a.el,
            ctx: "2d",
            create: !0,
          })),
          a.aCanvas.canvas.classList.add("sr7-a-canvas"),
          (a.aCanvas.canvas.style.background = "transparent"),
          (d.id = i),
          (d.scene = s),
          (d.sdir = o.lastChangeDir),
          (d.sec = n.s ?? 1e3),
          (d.ms =
            "default" == l.ms || "d" == l.ms
              ? 1e3
              : "random" == l.ms
              ? Math.round(1e3 * Math.random() + 300)
              : _tpt.defNum(l.ms, 1e3)),
          (d.stasec = _tpt.defNum(
            n.stasec,
            null == l.d ? 1500 : 100 * parseFloat(l.d)
          )),
          SR7.D.transitions.setDimensions(d, a, n),
          (d.delay = 0),
          (d.amnt = d.col * d.row),
          (d.boxes = Array(d.amnt)),
          -1 !== o.prev.index &&
            "in" == s &&
            void 0 !== l.p &&
            "none" !== l.p &&
            ((d.bg =
              "dark" === l.p ? "#000" : "light" === l.p ? "#fff" : void 0),
            (d.delay = d.ms / 1e3)),
          (d.notFirstIn = -1 != o.prev.index),
          "out" == s
            ? (o.zOrder = {
                cache: {
                  skey: a.skey,
                  ms: d.ms,
                  animated:
                    1 !== (n.o ?? 1) || 0 !== (n.x ?? 0) || 0 !== (n.y ?? 0),
                },
              })
            : -1 === o.prev.id ||
              (null != o.zOrder.cache &&
                ("forceinout" === l.o ||
                  ("outin" != l.o && !o.zOrder.cache.animated))) ||
              ((o.zOrder.managed =
                "0" == l?.out?.o ||
                "outin" == l.o ||
                0 !== d.delay ||
                (1 === (n.o ?? 1) && 0 === (n.x ?? 0) && 0 === (n.y ?? 0))),
              (o.zOrder.use =
                0 !== d.delay
                  ? "out"
                  : (o.zOrder?.cache?.ms ?? 1e3) < (d.ms ?? 1e3)
                  ? "in"
                  : "out")),
          SR7.D.transitions?.[l.e]?.updateAnim &&
            (l = SR7.D.transitions[l.e].updateAnim(l, d)),
          (d.TL = _tpt.gsap.timeline()),
          (n.f ??= l.f),
          (d.fdf = d.col * d.row < 2 || null == l.f ? "start" : l.f),
          (n.e ??= l.e ?? "power2.inOut"),
          void 0 !== l.d3 &&
            ((l.d3.dur = d.ms / d.sec),
            (l.d3.fd = 0.7 * l.d3.dur),
            (l.d3.md = 0.15 * l.d3.dur),
            (l.d3.sdir = d.sdir),
            (l.d3.t = void 0 !== l.d3.t && 0 !== l.d3.t && l.d3.t),
            (l.d3.su = "true" == l.d3.su || 1 == l.d3.su),
            l.d3.su &&
              ((l.d3.smi = parseFloat(l.d3?.smi ?? 0)),
              (l.d3.sl = parseFloat(l.d3?.sl ?? 1)),
              (l.d3.sma = parseFloat(l.d3?.sma ?? 0.5)),
              (l.d3.sc = _tpt.gsap.utils
                .splitColor(l.d3?.sc ?? "0,0,0")
                .join(",")))),
          (n.mo = SR7.D.transitions.motionFilter.init(a.aCanvas, n.mo)),
          SR7.D.transitions.buildTimeline(i, a, d, n, l, r),
          d.TL
        );
      }),
      (SR7.D.transitions = {
        ...SR7.D.transitions,
        buildTimeline: (e, t, s, i, a, r) => {
          if (null != a.e && SR7.D.transitions[a.e]?.buildTimeline)
            (s.TL = SR7.D.transitions[a.e].buildTimeline(e, t, s, i, a, r)),
              SR7.D.transitions?.[a.e]?.extendTimeLine &&
                s.TL.add(SR7.D.transitions[a.e].extendTimeLine(s, a, t), 0);
          else {
            if ("in" === s.scene) {
              for (let e = 0; e < s.amnt; e++)
                s.boxes[e] = {
                  x: SR7.F.getOffset(
                    i.x || 0,
                    i.m ? s.slot.ow : t.canvas.width,
                    s.sdir,
                    e
                  ),
                  y: SR7.F.getOffset(
                    i.y || 0,
                    i.m ? s.slot.oh : t.canvas.height,
                    s.sdir,
                    e
                  ),
                  o: SR7.F.getSpecialValue(i.o || 0, e, s.sdir),
                  sx: SR7.F.getSpecialValue(
                    0 == i.sx ? 0 : i.sx || 1,
                    e,
                    s.sdir
                  ),
                  sy: SR7.F.getSpecialValue(
                    0 == i.sy ? 0 : i.sy || 1,
                    e,
                    s.sdir
                  ),
                  r: 0 !== i.r ? SR7.F.getSpecialValue(i.r || 0, e, s.sdir) : 0,
                };
              s.TL.to(s.boxes, s.ms / 1e3, {
                delay: s.delay,
                o: 1,
                sx: 1,
                sy: 1,
                r: 0,
                x: 0,
                y: 0,
                ease: i.e || "power2.inOut",
                stagger: {
                  amount: "nodelay" == s.fdf ? 0 : s.ms / s.stasec,
                  grid: [s.col, s.row],
                  from: "nodelay" === s.fdf ? "start" : s.fdf,
                },
              }),
                void 0 !== a.d3 &&
                  s.TL.add(
                    SR7.D.transitions.d3.cubeTL(
                      a.d3,
                      t,
                      s,
                      "in",
                      SR7.M[e].dims
                    ),
                    0
                  ),
                a.filter?.u &&
                  s.TL.add(SR7.D.transitions.filter.extendTimeLine(s, a, t), 0);
            } else {
              for (let e = 0; e < s.amnt; e++)
                s.boxes[e] = { x: 0, y: 0, o: 1, sx: 1, sy: 1, r: 0 };
              s.TL.to(
                s.boxes,
                s.ms / 1e3,
                {
                  o: function (e) {
                    return SR7.F.getSpecialValue(
                      0 == i.o ? 0 : i.o || 1,
                      e,
                      s.sdir
                    );
                  },
                  sx: function (e) {
                    return SR7.F.getSpecialValue(
                      0 == i.sx ? 0 : i.sx || 1,
                      e,
                      s.sdir
                    );
                  },
                  sy: function (e) {
                    return SR7.F.getSpecialValue(
                      0 == i.sy ? 0 : i.sy || 1,
                      e,
                      s.sdir
                    );
                  },
                  r:
                    0 !== i.r && void 0 !== i.r
                      ? function (e) {
                          return SR7.F.getSpecialValue(i.r || 0, e, s.sdir);
                        }
                      : 0,
                  x: function (e) {
                    return (
                      SR7.F.getOffset(
                        i.x || 0,
                        i.m ? s.slot.ow : t.aCanvas.width,
                        s.sdir,
                        e
                      ) * (i.reversed ? -1 : 1)
                    );
                  },
                  y: function (e) {
                    return (
                      SR7.F.getOffset(
                        i.y || 0,
                        i.m ? s.slot.oh : t.aCanvas.height,
                        s.sdir,
                        e
                      ) * (i.reversed ? -1 : 1)
                    );
                  },
                  ease: i.e,
                  stagger: {
                    amount: "nodelay" === i.f ? 0 : s.ms / s.stasec,
                    grid: [s.col, s.row],
                    from: "nodelay" === i.f ? "start" : i.f,
                  },
                },
                void 0 !== i.outdelay ? i.outdelay : 0
              ),
                void 0 !== a.d3 &&
                  s.TL.add(
                    SR7.D.transitions.d3.cubeTL(
                      a.d3,
                      t,
                      s,
                      "out",
                      SR7.M[e].dims
                    ),
                    0
                  );
            }
            SR7.D.transitions?.[a.e]?.extendTimeLine &&
              s.TL.add(SR7.D.transitions[a.e].extendTimeLine(s, a, t), 0),
              s.TL.eventCallback(
                "onUpdate",
                SR7.D.transitions.default.updateAnim,
                [e, t, s, i, a, r]
              );
          }
          s.TL.eventCallback(
            "onStart",
            async function (e) {
              (e.c.TSS = Date.now()),
                "in" == e.scene
                  ? await SR7.F.triggerLayerEvent(e, "enterstage")
                  : "out" == e.scene &&
                    (await SR7.F.triggerLayerEvent(e, "leavestage")),
                o.frameStarted(e),
                SR7.D.transitions.default.start(e.c, e.id, e.scene);
            },
            [
              {
                c: t,
                caller: "animateBG",
                frame: 0,
                pE: i.pE,
                scene: s.scene,
                layer: r,
                id: s.id,
              },
            ]
          ),
            s.TL.eventCallback(
              "onComplete",
              (e) => SR7.D.transitions.handleCallback(e, s),
              [
                {
                  c: t,
                  caller: "animateBG",
                  frame: 0,
                  scene: s.scene,
                  layer: r,
                  id: s.id,
                },
              ]
            ),
            s.TL.eventCallback(
              "onInterrupt",
              (e) => SR7.D.transitions.handleCallback(e, s, "onInterrupt", !0),
              [
                {
                  c: t,
                  caller: "animateBG",
                  frame: 0,
                  scene: s.scene,
                  layer: r,
                  id: s.id,
                },
              ]
            );
        },
        handleCallback: async (e, t, s = "onComplete", i = !1) => {
          let a = Date.now(),
            r = a - (e.c?.TSS ?? a - 50) < 20 ? 5 : 0;
          r || SR7.D.transitions.default.complete(e.c, e.id, e.scene, i),
            setTimeout(() => {
              "html5" === e.c.media?.player.options.type &&
                e.c.media.stopCanvas(),
                (e.interrupt = i),
                SR7.F.slideDelayFinished(e.id),
                o.framesCompleted(e),
                r && SR7.D.transitions.default.complete(e.c, e.id, e.scene, i),
                t[`${s}Callback`] && t[`${s}Callback`](t, e.c, e.id);
            }, r);
        },
        setDimensions: (e, t, s) => {
          (e.col =
            "random" == s.col
              ? Math.round(10 * Math.random() + 3)
              : Math.max(1, Math.min(s.col ?? 1, t.aCanvas.width - 10))),
            (e.row =
              "random" == s.row
                ? Math.round(10 * Math.random() + 3)
                : Math.max(1, Math.min(s.row ?? 1, t.aCanvas.height - 10))),
            (e.slot = {
              s: {},
              c: {},
              ow: Math.ceil(t.aCanvas.width / e.col),
              oh: Math.ceil(t.aCanvas.height / e.row),
            }),
            (e.slot.dx = 0 - e.slot.ow / 2),
            (e.slot.dy = 0 - e.slot.oh / 2),
            (e.row = Math.ceil(t.aCanvas.height / e.slot.oh) || 1),
            (e.width = t.canvas.width),
            (e.height = t.canvas.height);
        },
        default: {
          updateAnim: (e, t, s, i, a, r) => {
            if (
              t.aCanvas &&
              (s.height !== t.canvas.height || s.width !== t.canvas.width)
            ) {
              t.aCanvas.updateDim();
              let o = s.TL.progress();
              s.TL.clear(),
                SR7.D.transitions.setDimensions(s, t, i),
                SR7.D.transitions.buildTimeline(e, t, s, i, a, r),
                s.TL.progress(o);
            }
            let o = 0;
            const l = {};
            if (null != t.aCanvas) {
              if (
                ((i.mo ?? 0) > 0
                  ? SR7.D.transitions.motionFilter.render(t.aCanvas, i.moo)
                  : t.aCanvas.ctx.clearRect(
                      0,
                      0,
                      t.aCanvas.width,
                      t.aCanvas.height
                    ),
                s.bg &&
                  ((t.aCanvas.ctx.fillStyle = s.bg),
                  t.aCanvas.ctx.fillRect(
                    0,
                    0,
                    t.aCanvas.width,
                    t.aCanvas.height
                  )),
                a.filter?.u &&
                  SR7.D.transitions.filter.update(
                    a,
                    t.aCanvas.ctx,
                    t.aCanvas.canvasFilter
                  ),
                t.canvas.canvas.width > 0 && t.canvas.canvas.height > 0)
              )
                for (let e = 0; e < s.col; e++) {
                  (s.slot.sx = s.slot.ow * e),
                    (s.slot.tw = s.slot.ow * (e + 0.5)),
                    (s.slot.c.wd = Math.min(
                      0,
                      t.aCanvas.width - (s.slot.tw + s.slot.dx + s.slot.ow)
                    )),
                    (s.slot.dw = s.slot.sw = s.slot.ow + s.slot.c.wd);
                  for (let r = 0; r < s.row; r++)
                    t.aCanvas.ctx.save(),
                      (l.r = (-Math.PI / 180) * s.boxes[o].r),
                      (l.csx =
                        0 !== i.r
                          ? Math.cos(l.r) * s.boxes[o].sx
                          : s.boxes[o].sx),
                      (l.csy =
                        0 !== i.r
                          ? Math.cos(l.r) * s.boxes[o].sy
                          : s.boxes[o].sy),
                      (l.ssx = 0 !== i.r ? Math.sin(l.r) * s.boxes[o].sx : 0),
                      (l.ssy = 0 !== i.r ? Math.sin(l.r) * -s.boxes[o].sy : 0),
                      (s.slot.sy = s.slot.oh * r),
                      (s.slot.th = s.slot.oh * (r + 0.5)),
                      SR7.D.transitions?.[a.e]?.beforeDraw &&
                        SR7.D.transitions[a.e].beforeDraw(t.aCanvas.ctx, s, o),
                      i.m &&
                        (t.aCanvas.ctx.beginPath(),
                        t.aCanvas.ctx.rect(
                          s.slot.ow * e,
                          s.slot.oh * r,
                          s.slot.ow,
                          s.slot.oh
                        ),
                        t.aCanvas.ctx.clip()),
                      t.aCanvas.ctx.transform(
                        l.csx,
                        l.ssx,
                        l.ssy,
                        l.csy,
                        s.slot.tw + s.boxes[o].x,
                        s.slot.th + s.boxes[o].y
                      ),
                      (t.aCanvas.ctx.globalAlpha = Math.max(0, s.boxes[o].o)),
                      (s.slot.c.hd =
                        t.aCanvas.height - (s.slot.th + s.slot.dy + s.slot.oh)),
                      (s.slot.c.hd = s.slot.c.hd < 0 ? s.slot.c.hd : 0),
                      (s.slot.dh = s.slot.sh = s.slot.oh + s.slot.c.hd),
                      s.slot.sw > 1 &&
                        s.slot.sh > 1 &&
                        t.aCanvas.ctx.drawImage(
                          t.canvas.canvas,
                          s.slot.sx,
                          s.slot.sy,
                          s.slot.sw,
                          s.slot.sh,
                          s.slot.dx,
                          s.slot.dy,
                          s.slot.dw,
                          s.slot.dh
                        ),
                      t.aCanvas.ctx.restore(),
                      SR7.D.transitions?.[a.e]?.afterDraw &&
                        SR7.D.transitions[a.e].afterDraw(
                          t.canvas.canvas,
                          t.aCanvas.ctx,
                          s,
                          o,
                          l
                        ),
                      o++;
                }
              void 0 !== a.d3 &&
                a.d3.su &&
                SR7.D.transitions.d3.ticker(a.d3, s, t);
            }
          },
          start: (e, t, s) => {
            const i = SR7.M[t];
            (i.c.slideBGStates[e.skey] = "animating"),
              null == e.mod && (e.el.style.opacity = 1),
              (e.canvas.canvas.style.visibility = "hidden"),
              (e.canvas.canvas.style.opacity = 0),
              (e.el.style.visibility = "visible"),
              "out" == s &&
                "out" == i.zOrder.use &&
                i.zOrder.managed &&
                SR7.F.swapSlidezIndex(t, e.skey),
              SR7.F.manageLayerListeners(
                e,
                i.slides[e.skey].layers[e.lkey],
                "in" == s
              );
          },
          complete: (e, t, s, i) => {
            const a = SR7.M[t];
            null == e.mod && (e.el.style.opacity = 1),
              SR7.D.transitions.motionFilter.complete(e, e.aCanvas),
              (e.canvas.canvas.style.visibility = "visible"),
              (e.canvas.canvas.style.opacity = 1),
              void 0 !== e.aCanvas && e.aCanvas.canvas.remove(),
              (e.aCanvas = void 0),
              (a.c.slideBGStates[e.skey] = s),
              i ||
                (a.zOrder.managed &&
                  a.zOrder.use == s &&
                  SR7.F.swapSlidezIndex(t),
                "out" == s && SR7.F.hideLeavingSlide(t, e.skey));
          },
        },
        motionFilter: {
          init: function (e, t) {
            return (
              void 0 !== t &&
                parseFloat(t) > 0 &&
                ((t = parseFloat(t)),
                (e.fmShadow =
                  void 0 === e.fmShadow
                    ? document.createElement("canvas")
                    : e.fmShadow),
                (e.fmCtx = e.fmShadow.getContext("2d")),
                (e.fmShadow.width = e.ctx.canvas.width),
                (e.fmShadow.height = e.ctx.canvas.height),
                (e.fmCtx.globalAlpha =
                  tpGS.gsap.utils.mapRange(100, 0, 40, 0, t) / 100),
                e.fmCtx.clearRect(
                  0,
                  0,
                  e.ctx.canvas.width,
                  e.ctx.canvas.height
                )),
              t
            );
          },
          render: function (e, t) {
            "partial" === t &&
              (e.fmCtx.globalCompositeOperation = "source-over"),
              e.fmCtx.drawImage(
                e.canvas,
                0,
                0,
                e.canvas.width,
                e.canvas.height
              ),
              e.ctx.drawImage(
                e.fmCtx.canvas,
                0,
                0,
                e.canvas.width,
                e.canvas.height
              ),
              "partial" === t &&
                (e.fmCtx.globalCompositeOperation = "source-atop"),
              ("partial" !== t && "full" !== t) ||
                ((e.fmCtx.fillStyle = "rgba(255, 255, 255, 0.1)"),
                e.fmCtx.fillRect(0, 0, e.canvas.width, e.canvas.height));
          },
          complete: function (e) {
            e.fmShadow && e.fmShadow.remove();
          },
        },
        filter: {
          update: function (e, t, s) {
            if (null == e.filter.tl) return;
            let i = e.filter;
            var a =
              void 0 !== s || void 0 !== i.tl.blur
                ? " blur(" +
                  (void 0 !== s
                    ? s
                    : 0 + i.tl.blur !== void 0
                    ? i.tl.blur
                    : 0) +
                  "px)"
                : "";
            t.canvas.style.filter =
              void 0 === i.tl.filter ? "" + a : i.tl.filter + a;
          },
          extendTimeLine: function (e, t, s) {
            let i = t.filter;
            if (null != i) {
              var a =
                void 0 !== i.g && "0%" !== i.g && 0 !== i.g
                  ? ("" === a ? "" : " ") + "grayscale(_g_%)"
                  : "";
              return (
                (a +=
                  void 0 !== i.h && "100%" !== i.h && 100 !== i.h
                    ? ("" === a ? "" : " ") + "brightness(_h_%)"
                    : ""),
                (a +=
                  void 0 !== i.s && "0px" !== i.s && 0 !== i.s
                    ? ("" === a ? "" : " ") + "sepia(_s_%)"
                    : ""),
                (a +=
                  void 0 !== i.c && 100 !== i.c
                    ? ("" === a ? "" : " ") + "contrast(_c_%)"
                    : ""),
                "" !==
                  (a +=
                    void 0 !== i.i && 0 !== i.i
                      ? ("" === a ? "" : " ") + "invert(_i_%)"
                      : "") &&
                  (i.tl = {
                    filter: a
                      .replace("_g_", parseFloat(i.g))
                      .replace("_h_", parseFloat(i.h))
                      .replace("_s_", parseFloat(i.s))
                      .replace("_c_", parseFloat(i.c))
                      .replace("_i_", parseFloat(i.i)),
                  }),
                void 0 !== i.b &&
                  "0px" !== i.b &&
                  0 !== i.b &&
                  (void 0 === i.tl
                    ? (i.tl = { blur: parseFloat(i.b) })
                    : (i.tl.blur = parseFloat(i.b))),
                void 0 !== i.tl
                  ? ((s.canvasFilter = !0),
                    tpGS.gsap.to(
                      i.tl,
                      e.ms / e.sec,
                      void 0 === i.tl.filter
                        ? { blur: 0 }
                        : void 0 === i.tl.blur
                        ? {
                            filter: a
                              .replace("_g_", "0")
                              .replace("_h_", "100")
                              .replace("_s_", "0")
                              .replace("_c_", 100)
                              .replace("_i_", 0),
                            ease: i.e,
                          }
                        : {
                            blur: 0,
                            filter: a
                              .replace("_g_", "0")
                              .replace("_h_", "100")
                              .replace("_s_", "0")
                              .replace("_c_", 100)
                              .replace("_i_", 0),
                            ease: i.e,
                          }
                    ))
                  : void 0
              );
            }
          },
        },
        slidingoverlay: {
          getBasic: function (e) {
            return {
              attr: ["x", "y"],
              [e]:
                "in" == e
                  ? {
                      m: !0,
                      o: -1,
                      _xy: 20,
                      _gxys: 10,
                      _gxye: -10,
                      zIndex: 20,
                      e: "power1.inOut",
                    }
                  : {
                      m: !0,
                      reversed: !1,
                      _xy: -100,
                      o: 0,
                      zIndex: 10,
                      e: "power1.inOut",
                    },
            };
          },
          updateAnim: function (e, t) {
            var s =
              void 0 !== e.in.x && 0 !== e.in.x && "0%" !== e.in.x ? "x" : "y";
            (e.in["g" + s + "s"] =
              SR7.F.getOffset(e.in[s], e.in._gxys, t.sdir, 1) + "%"),
              (e.in["g" + s + "e"] =
                SR7.F.getOffset(e.in[s], e.in._gxye, t.sdir, 1) + "%"),
              "out" == t.scene
                ? (e.out[s] =
                    SR7.F.getOffset(e.in[s], e.out._xy, t.sdir, 1) + "%")
                : (e.in[s] =
                    SR7.F.getOffset(e.in[s], e.in._xy, t.sdir, 1) + "%");
            var i = parseInt(e.in[s]) >= 0;
            return (
              (e.in.d = "x" === s ? (i ? "left" : "right") : i ? "up" : "down"),
              e
            );
          },
          beforeDraw: function (e, t, s) {
            void 0 !== t.boxes[s].d &&
              ((t.boxes[s]._dxs =
                "right" === t.boxes[s].d
                  ? 0 + t.boxes[s].mw
                  : "left" === t.boxes[s].d
                  ? 0 - t.boxes[s].mw
                  : 0),
              (t.boxes[s]._dys =
                "down" === t.boxes[s].d
                  ? 0 + t.boxes[s].mh
                  : "up" === t.boxes[s].d
                  ? 0 - t.boxes[s].mh
                  : 0),
              (t.boxes[s]._xs =
                "left" === t.boxes[s].d ? 0 - t.boxes[s].mw : 0),
              (t.boxes[s]._ys = "up" === t.boxes[s].d ? 0 - t.boxes[s].mh : 0),
              (t.boxes[s]._xe =
                "right" === t.boxes[s].d
                  ? t.slot.ow + t.boxes[s].mw
                  : "left" === t.boxes[s].d
                  ? t.slot.ow - t.boxes[s].mw
                  : t.slot.ow),
              (t.boxes[s]._ye =
                "down" === t.boxes[s].d
                  ? t.slot.oh + t.boxes[s].mh
                  : "up" === t.boxes[s].d
                  ? t.slot.oh - t.boxes[s].mh
                  : t.slot.oh),
              e.beginPath(),
              e.rect(
                "left" === t.boxes[s].d
                  ? Math.max(0, t.boxes[s]._xs)
                  : "right" === t.boxes[s].d
                  ? Math.min(0, t.boxes[s]._xs)
                  : 0,
                "up" === t.boxes[s].d
                  ? Math.max(0, t.boxes[s]._ys)
                  : "down" === t.boxes[s].d
                  ? Math.min(0, t.boxes[s]._ys)
                  : 0,
                "left" === t.boxes[s].d
                  ? Math.max(t.slot.ow, t.boxes[s]._xe)
                  : "right" === t.boxes[s].d
                  ? Math.min(t.slot.ow, t.boxes[s]._xe)
                  : t.boxes[s]._xe,
                "up" === t.boxes[s].d
                  ? Math.max(t.slot.oh, t.boxes[s]._ye)
                  : "down" === t.boxes[s].d
                  ? Math.min(t.slot.oh, t.boxes[s]._ye)
                  : t.boxes[s]._ye
              ),
              e.clip());
          },
          afterDraw: function (e, t, s, i, a) {
            void 0 !== s.boxes[i].d &&
              (t.save(),
              t.beginPath(),
              t.rect(
                Math.max(0, s.boxes[i]._dxs),
                Math.max(0, s.boxes[i]._dys),
                s.boxes[i]._xe,
                s.boxes[i]._ye
              ),
              t.clip(),
              t.save(),
              t.transform(
                a.csx,
                a.ssx,
                a.ssy,
                a.csy,
                0.5 * s.slot.ow + s.boxes[i].x + s.boxes[i].sgx,
                0.5 * s.slot.oh + s.boxes[i].y + s.boxes[i].sgy
              ),
              t.drawImage(
                e,
                0,
                0,
                s.slot.ow,
                s.slot.oh,
                s.boxes[i].sgx - s.slot.ow / 2,
                s.boxes[i].sgy - s.slot.oh / 2,
                s.slot.ow,
                s.slot.oh
              ),
              t.restore(),
              (t.fillStyle = "rgba(0,0,0,0.6)"),
              t.fillRect(s.boxes[i].gx, s.boxes[i].gy, s.slot.ow, s.slot.oh),
              t.restore());
          },
          extendTimeLine: function (e, t) {
            if ("in" !== e.scene) return;
            const s = t[e.scene];
            return void 0 !== s.gxe || void 0 !== s.gye
              ? (_tpt.extend(e.boxes[0], {
                  d: s.d,
                  gx:
                    void 0 === s.gxs
                      ? 0
                      : 2 * SR7.F.getOffset(s.gxs, e.width, e.sdir, 0),
                  gy:
                    void 0 === s.gys
                      ? 0
                      : 2 * SR7.F.getOffset(s.gys, e.height, e.sdir, 0),
                  sgx:
                    void 0 === s.gxs
                      ? 0
                      : SR7.F.getOffset(s.gxs, e.width, e.sdir, 0),
                  sgy:
                    void 0 === s.gys
                      ? 0
                      : SR7.F.getOffset(s.gys, e.height, e.sdir, 0),
                  mw: 0 - e.width,
                  mh: 0 - e.height,
                }),
                _tpt.gsap.to(e.boxes, e.ms / e.sec, {
                  gx:
                    void 0 === s.gxe
                      ? 0
                      : 2 * SR7.F.getOffset(s.gxe, e.width, e.sdir, 0),
                  gy:
                    void 0 === s.gye
                      ? 0
                      : 2 * SR7.F.getOffset(s.gye, e.height, e.sdir, 0),
                  sgx:
                    void 0 === s.gxe
                      ? 0
                      : 2 * SR7.F.getOffset(s.gxe, e.width, e.sdir, 0),
                  sgy:
                    void 0 === s.gye
                      ? 0
                      : 2 * SR7.F.getOffset(s.gye, e.height, e.sdir, 0),
                  mw: e.width,
                  mh: e.height,
                  ease: s.e,
                }))
              : void 0;
          },
        },
        d3: {
          ticker: function (e, t, s) {
            if (void 0 !== e.helper) {
              var i = e.smi * ("in" === t.scene ? e.helper.oo : e.helper.o),
                a = e.sma * ("in" === t.scene ? e.helper.oo : e.helper.o);
              if (
                ((e.gradient =
                  "vertical" === e.d
                    ? "in" === t.scene
                      ? s.aCanvas.ctx.createLinearGradient(
                          0,
                          0,
                          0,
                          s.aCanvas.height
                        )
                      : s.aCanvas.ctx.createLinearGradient(
                          0,
                          s.aCanvas.height,
                          0,
                          0
                        )
                    : "in" === t.scene
                    ? s.aCanvas.ctx.createLinearGradient(
                        0,
                        0,
                        s.aCanvas.width,
                        0
                      )
                    : s.aCanvas.ctx.createLinearGradient(
                        s.aCanvas.width,
                        0,
                        0,
                        0
                      )),
                e.gradient.addColorStop(0, "rgba(" + e.sc + "," + i + ")"),
                e.gradient.addColorStop(e.sl, "rgba(" + e.sc + "," + a + ")"),
                (s.aCanvas.ctx.fillStyle = e.gradient),
                s.aCanvas.ctx.fillRect(0, 0, s.aCanvas.width, s.aCanvas.height),
                void 0 !== s.cube && s.cube.ctx)
              ) {
                var r =
                  void 0 !== e.roomhelper &&
                  !1 !== e.roomhelper &&
                  (90 - e.roomhelper.r) / 90;
                (i = !1 !== r ? r : e.smi * e.helper.o),
                  (a = !1 !== r ? r : e.sma * e.helper.o),
                  s.cube.ctx.clearRect(
                    0,
                    0,
                    s.cube.ctx.canvas.width,
                    s.cube.ctx.canvas.height
                  ),
                  (e.gradientW =
                    !1 !== r
                      ? "vertical" === e.d
                        ? (e.t < 0 && 1 === e.sdir) ||
                          (e.t > 0 && -1 === e.sdir)
                          ? s.aCanvas.ctx.createRadialGradient(
                              0,
                              s.cube.ctx.canvas.width / 2,
                              0,
                              0,
                              0,
                              2 * s.cube.ctx.canvas.width
                            )
                          : s.aCanvas.ctx.createRadialGradient(
                              s.cube.ctx.canvas.width,
                              0,
                              0,
                              0,
                              0,
                              2 * s.cube.ctx.canvas.width
                            )
                        : (e.t > 0 && 1 === e.sdir) ||
                          (e.t < 0 && -1 === e.sdir)
                        ? s.aCanvas.ctx.createRadialGradient(
                            s.cube.ctx.canvas.width / 2,
                            s.cube.ctx.canvas.height,
                            0,
                            s.cube.ctx.canvas.width / 2,
                            s.cube.ctx.canvas.height,
                            s.cube.ctx.canvas.width
                          )
                        : s.aCanvas.ctx.createRadialGradient(
                            s.cube.ctx.canvas.width / 2,
                            0.2 * s.cube.ctx.canvas.height,
                            0,
                            s.cube.ctx.canvas.width / 2,
                            0.2 * s.cube.ctx.canvas.height,
                            s.cube.ctx.canvas.width
                          )
                      : "vertical" === e.d
                      ? s.aCanvas.ctx.createLinearGradient(
                          0,
                          0,
                          0,
                          s.cube.ctx.canvas.height
                        )
                      : s.aCanvas.ctx.createLinearGradient(
                          0,
                          0,
                          s.cube.ctx.canvas.width,
                          0
                        )),
                  e.gradientW.addColorStop(
                    0,
                    "rgba(" +
                      e.sc +
                      "," +
                      (!1 !== r
                        ? "a" === e.DIR
                          ? a
                          : 0
                        : "a" === e.DIR
                        ? 0
                        : a) +
                      ")"
                  ),
                  e.gradientW.addColorStop(
                    1,
                    "rgba(" +
                      e.sc +
                      "," +
                      (!1 !== r
                        ? "a" === e.DIR
                          ? 0
                          : a
                        : "a" === e.DIR
                        ? a
                        : 0) +
                      ")"
                  ),
                  (s.cube.ctx.fillStyle = e.gradientW),
                  s.cube.ctx.fillRect(
                    0,
                    0,
                    s.cube.ctx.canvas.width,
                    s.cube.ctx.canvas.height
                  );
              }
            }
          },
          setWall: function (e, t, s, i, a, r) {
            return (
              (e.TL = _tpt.gsap.timeline()),
              e.TL.add(_tpt.gsap.to(e.c, 0.2, { display: "block" }), 0),
              "rotationX" === s
                ? ((e.ctx.canvas.width = i.w),
                  (e.ctx.canvas.height = i.w),
                  e.TL.add(
                    _tpt.gsap.set(e.w, {
                      backgroundColor: a,
                      width: i.w,
                      height: i.w,
                      transformOrigin: "50% 50% -" + i.w / 2 + "px",
                      x: 0,
                      y: t > 0 ? -(i.w - i.h) : 0,
                      rotationX: t > 0 ? -90 : 90,
                      rotationY: 0,
                    }),
                    0
                  ))
                : ((e.ctx.canvas.width = r ? i.w : i.h),
                  (e.ctx.canvas.height = i.h),
                  e.TL.add(
                    _tpt.gsap.set(e.w, {
                      backgroundColor: a,
                      width: r ? i.w : i.h,
                      height: i.h,
                      transformOrigin: "50% 50% -" + (r ? i.w : i.h) / 2 + "px",
                      x: t < 0 ? i.w - i.h : 0,
                      y: 0,
                      rotationX: 0,
                      rotationY: t > 0 ? -90 : 90,
                    }),
                    0
                  )),
              e.TL
            );
          },
          buildCube: function (e, t, s) {
            (e.cube = {
              c: document.createElement("div"),
              w: document.createElement("canvas"),
            }),
              (e.cube.ctx = e.cube.w.getContext("2d"));
            for (let t of ["c", "w"])
              (e.cube[t].style.position = "absolute"),
                (e.cube[t].style.webkitBackfaceVisibility = "hidden"),
                (e.cube[t].style.backfaceVisibility = "hidden"),
                (e.cube[t].style.left = "0px"),
                (e.cube[t].style.top = "0px"),
                (e.cube[t].style.zIndex = 0);
            (e.cube.c.style.transformStyle = "preserve-3d"),
              _tpt.gsap.set(e.cube.c, {
                width: s.module.w,
                height: s.module.h,
              }),
              _tpt.gsap.set(e.cube.w, {
                width: s.module.w,
                height: s.module.h,
                backgroundColor: "#ccc",
              }),
              e.cube.c.appendChild(e.cube.w),
              e.el.appendChild(e.cube.c);
          },
          cubeTL: function (e, t, s, i, a) {
            if ("none" != (e?.f ?? "none")) {
              (t.el.style.transformStyle = "preserve-3d"),
                (t.el.style.overflow = "visible");
              var r = _tpt.gsap.timeline(),
                o = "incube" === e.f ? 1 : -1,
                l = "incube" === e.f || "cube" === e.f,
                n = "fly" === e.f ? -30 : 90,
                d = "turn" !== e.f && !1 !== e.t && s.notFirstIn,
                c = -1 * e.z,
                p = {},
                h = { z: d ? 0 : c, ease: "power1.inOut" },
                u = { ease: e.e },
                m = [t.aCanvas.canvas],
                g = l ? "50% 50% " : "20% 20% ",
                f = "rotationX",
                v = "rotationY",
                y = "y",
                S = "height",
                b = e.fd;
              if (
                ("vertical" !== e.d
                  ? ((f = "rotationY"),
                    (v = "rotationX"),
                    (y = "x"),
                    (S = "width"),
                    (e.DIR = 1 === e.sdir ? "b" : "a"))
                  : (e.DIR = 1 === e.sdir ? "a" : "b"),
                (t.aCanvas.canvas.style.backfaceVisibility = "hidden"),
                (t.aCanvas.canvas.style.webkitBackfaceVisibility = "hidden"),
                "turn" === e.f
                  ? ((n = "vertical" === e.d ? -120 : 120),
                    (g =
                      "vertical" === e.d
                        ? 1 === e.sdir
                          ? "in" === i
                            ? "0% 0% 0%"
                            : "0% 100% 0%"
                          : "in" === i
                          ? "0% 100% 0%"
                          : "0% 0% 0%"
                        : 1 === e.sdir
                        ? "in" === i
                          ? "0% 0% 0%"
                          : "100% 0% 0%"
                        : "in" === i
                        ? "100% 0% 0%"
                        : "0% 0% 0%"),
                    (h.z = 0),
                    (u.ease = "out" === i ? "power3.out" : u.ease),
                    (b = "out" === i ? b / 2 : b))
                  : (g += (o * a.module[S[0]]) / 2 + "px"),
                (u[f] = 0),
                (u[y] = 0),
                "in" === i ? (p[f] = n * e.sdir) : (u[f] = -n * e.sdir),
                "fly" === e.f)
              ) {
                var R =
                  void 0 === e.fz ? 20 * Math.random() - 10 : parseInt(e.fz);
                "in" === i
                  ? ((p[y] =
                      (t.aCanvas[S] / 1.6) *
                      (void 0 === e.fdi ? 1.5 : parseFloat(e.fdi)) *
                      e.sdir),
                    (p.rotateZ = e.sdir * R * -0.5),
                    (u.rotateZ = 0))
                  : ((u[y] =
                      (t.aCanvas[S] / 1.6) *
                      (void 0 === e.fdo ? 2 : parseFloat(e.fdo)) *
                      e.sdir *
                      -1),
                    (u.rotateZ = e.sdir * R));
              }
              if (((t.el.style.perspective = d ? "2500px" : "1500px"), d)) {
                var w = {
                    z: c * ("fly" === e.f ? 1.5 : 3),
                    ease: "power1.inOut",
                  },
                  x = { z: 0, ease: "power1.inOut" };
                (w[v] = -1 * e.t),
                  (x[v] = 0),
                  (e.roomhelper = { r: 0 }),
                  r.add(
                    tpGS.gsap.set(t.mask, {
                      perspective: 1200,
                      transformStyle: "preserve-3d",
                      transformOrigin: g,
                    }),
                    0
                  ),
                  r.add(_tpt.gsap.to(t.el, 3 * e.md, w), 0),
                  r.add(_tpt.gsap.to(t.el, 3 * e.md, x), b - e.md),
                  r.add(
                    _tpt.gsap.to(e.roomhelper, 3 * e.md, { r: Math.abs(e.t) }),
                    0
                  ),
                  r.add(
                    _tpt.gsap.to(e.roomhelper, 3 * e.md, { r: 0 }),
                    b - e.md
                  ),
                  "in" === i &&
                    1 !== o &&
                    l &&
                    (void 0 === t.cube &&
                      SR7.D.transitions.d3.buildCube(t, s, a),
                    r.add(
                      SR7.D.transitions.d3.setWall(
                        t.cube,
                        w[v],
                        v,
                        a.module,
                        e.c
                      ),
                      0
                    ),
                    m.push(t.cube.c));
              } else
                (e.roomhelper = !1),
                  r.add(
                    tpGS.gsap.set(t.mask, {
                      perspective: "none",
                      transformStyle: "none",
                      transformOrigin: "50% 50%",
                    }),
                    0
                  ),
                  l &&
                    !0 !== s.notFirstIn &&
                    (void 0 === t.cube &&
                      SR7.D.transitions.d3.buildCube(t, s, a),
                    r.add(
                      SR7.D.transitions.d3.setWall(
                        t.cube,
                        p[f],
                        f,
                        a.module,
                        e.c,
                        !0
                      ),
                      0
                    ),
                    r.add(
                      _tpt.gsap.fromTo(
                        t.cube.w,
                        4 * e.md,
                        { opacity: 0 },
                        { opacity: 1 }
                      ),
                      0
                    ),
                    m.push(t.cube.c));
              return (
                (e.helper = { o: 0, oo: 1 }),
                r.add(
                  _tpt.gsap.to(e.helper, b, { o: 1, oo: 0, ease: e.e }),
                  e.md
                ),
                r.add(
                  _tpt.gsap.set(
                    m,
                    _tpt.extend(_tpt.extend({}, p), {
                      force3D: !0,
                      transformOrigin: g,
                    })
                  ),
                  0
                ),
                "turn" !== e.f && r.add(_tpt.gsap.to(m, 3 * e.md, h), 0),
                r.add(_tpt.gsap.to(m, b, u), e.md),
                "turn" !== e.f &&
                  r.add(
                    _tpt.gsap.to(m, 3 * e.md, { z: 0, ease: "power1.inOut" }),
                    b - e.md
                  ),
                "out" === i &&
                  1 !== o &&
                  r.add(
                    _tpt.gsap.to(m, 2 * e.md, { opacity: 0 }),
                    e.dur - 2 * e.md
                  ),
                r
              );
            }
          },
        },
      }),
      (_tpt.R ??= {}),
      (_tpt.R.animate = _tpt.extend
        ? _tpt.extend(_tpt.R.animate, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F = SR7.F || {}),
      void 0 !== SR7.F.dist)
    )
      return;
    (SR7.F.dist = function (e, t, s, i) {
      return Math.sqrt(Math.pow(e - s, 2) + Math.pow(t - i, 2));
    }),
      (SR7.F.cSort = function (e, t) {
        return e - t;
      }),
      (SR7.F.canvas = function (e) {
        e.wrap &&
          ((e.width =
            null == e.width || 0 == e.width ? e.wrap.clientWidth : e.width),
          (e.height =
            null == e.height || 0 == e.height
              ? e.wrap.clientHeight
              : e.height));
        var t = e.canvas ?? document.createElement("canvas");
        (this.ctx = t.getContext(e.ctx || "2d")),
          (this.wrap = e.wrap),
          "100%" == e.width
            ? ((t.width = this.width = 1e3), (t.style.width = "100%"))
            : ((t.width = this.width = e.width * _tpt.dpr),
              (t.style.width = e.width + "px")),
          "100%" == e.height
            ? ((t.height = this.height = 1e3), (t.style.height = "100%"))
            : ((t.height = this.height = e.height * _tpt.dpr),
              (t.style.height = e.height + "px")),
          void 0 !== e.overlay &&
            ((this.overlay = SR7.F.addOverlay(
              e.overlay.type,
              e.overlay.size,
              e.overlay.cA,
              e.overlay.cB
            )),
            e.wrap.appendChild(this.overlay)),
          void 0 !== e.wrap && e.wrap.appendChild(t),
          e.position && (t.style.position = e.position),
          "absolute" === e.position && ((t.style.top = 0), (t.style.left = 0)),
          (this.color = e?.color ?? void 0),
          void 0 !== e.size && (this.size = e.size),
          void 0 !== e.pos && (this.pos = e.pos),
          void 0 !== e.repeat && (this.repeat = e.repeat),
          void 0 !== e.sizeVal && (this.sizeVal = e.sizeVal),
          e.create &&
            void 0 !== e.wrap &&
            ((t.style.zIndex = 1),
            (t.style.position = "absolute"),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (this.wrap = e.wrap),
            e.wrap.children[0]
              ? e.wrap.insertBefore(t, e.wrap.children[0])
              : e.wrap.appendChild(t)),
          (this.canvas = t);
      }),
      (SR7.F.canvas.prototype.updateDim = function () {
        this.wrap &&
          ((this.canvas.width = this.width = this.wrap.clientWidth * _tpt.dpr),
          (this.canvas.height = this.height =
            this.wrap.clientHeight * _tpt.dpr),
          (this.canvas.style.width = this.wrap.clientWidth + "px"),
          (this.canvas.style.height = this.wrap.clientHeight + "px"));
      }),
      (SR7.F.canvas.prototype.checkPreDraw = function () {
        let e = { pre: !0, core: !0, post: !0 };
        if (void 0 !== this.preDraw)
          for (let t of this.preDraw) e.pre && (e = t(this, e));
        return e;
      }),
      (SR7.F.canvas.prototype.checkPostDraw = function () {
        if (void 0 !== this.afterDraw)
          for (let e of this.afterDraw) r.pre && (r = e(this, r));
      }),
      (SR7.F.canvas.prototype.drawImg = function (e, t = _tpt.dpr, s) {
        if (!this.image && null == e) return;
        this.cacheAltSrc = e;
        let i =
            "high" == this.stretch && this?.image?.naturalWidth
              ? this?.image?.naturalWidth ?? 0
              : this.wrap?.clientWidth ||
                this.requestedWidth ||
                this.image?.naturalWidth ||
                0,
          a =
            "high" == this.stretch && this?.image?.naturalWidth
              ? this?.image?.naturalHeight ?? 0
              : this.wrap?.clientHeight ||
                this.requestedHeight ||
                this.image?.naturalHeight ||
                0;
        var r, o, l, n;
        "high" == this.stretch &&
          1 !== t &&
          ((i =
            (this.wrap?.clientWidth ||
              this.requestedWidth ||
              this.image?.naturalWidth ||
              0) * t),
          (a =
            (this.wrap?.clientHeight ||
              this.requestedHeight ||
              this.image?.naturalHeight ||
              0) * t)),
          (s || this.cacheW !== i || this.cacheH !== a) &&
            ((this.cacheW = i),
            (this.cacheH = a),
            (this.width = this.canvas.width = i * t),
            (this.height = this.canvas.height = a * t),
            (this.canvas.style.width = i + "px"),
            (this.canvas.style.height = a + "px"),
            this.ctx.scale(t, t));
        var d = (l = e?.videoWidth ?? this.image?.naturalWidth ?? this.width),
          c = (n = e?.videoHeight ?? this.image?.naturalHeight ?? this.height),
          p = (r = i),
          h = (o = a),
          u = 0,
          m = 0,
          g = 0,
          f = 0,
          v = this.width / this.height,
          y = d / c;
        if (void 0 !== this.pan)
          return (
            this.ctx.clearRect(g, f, p, h),
            this.ctx.save(),
            this.ctx.transform(
              Math.cos(this.pan.rZ) * this.pan.scale,
              Math.sin(this.pan.rZ) * this.pan.scale,
              Math.sin(this.pan.rZ) * -this.pan.scale,
              Math.cos(this.pan.rZ) * this.pan.scale,
              this.pan.x,
              this.pan.y
            ),
            v < y
              ? (p = this.image.width * (h / this.image.height))
              : (h = this.image.height * (p / this.image.width)),
            this.ctx.drawImage(this.image, 0, 0, p, h),
            void this.ctx.restore()
          );
        let S = this.checkPreDraw();
        var b, R, w;
        S.core &&
          (this.repeat &&
            "no-repeat" !== this.repeat &&
            "cover" !== this.size &&
            ((R = (b = this.pattern()).pox), (w = b.poy)),
          "cover" === this.size
            ? (v > y ? (c = d / v) : (d = c * v),
              (u = ((l - d) * parseFloat(this.pos.x)) / 100),
              (m = ((n - c) * parseFloat(this.pos.y)) / 100))
            : "auto" === this.size
            ? ((h = c),
              (g = ((r - (p = d)) * parseFloat(this.pos.x)) / 100),
              (f = ((o - h) * parseFloat(this.pos.y)) / 100))
            : "percentage" === this.size
            ? ((h = ((p = (i * parseFloat(this.sizeVal)) / 100) / d) * c),
              (g = ((r - p) * parseFloat(this.pos.x)) / 100),
              (f = ((o - h) * parseFloat(this.pos.y)) / 100))
            : (y > v ? (h = p / y) : (p = h * y),
              (g = ((r - p) * parseFloat(this.pos.x)) / 100),
              (f = ((o - h) * parseFloat(this.pos.y)) / 100)),
          this.repeat && "no-repeat" !== this.repeat && "cover" !== this.size
            ? ((this.ctx.fillStyle = b.pattern),
              this.ctx.fillRect(0, 0, r + R, o + w))
            : (this.ctx.clearRect(g, f, p, h),
              this.stretch
                ? this.ctx.drawImage(
                    e ?? this.image,
                    0,
                    0,
                    this.image.width,
                    this.image.height,
                    g,
                    f,
                    p,
                    h
                  )
                : this.ctx.drawImage(e ?? this.image, u, m, d, c, g, f, p, h)));
        S.post && this.checkPostDraw();
      }),
      (SR7.F.canvas.prototype.pattern = function () {
        var e,
          t,
          s = this.image.naturalWidth,
          i = this.image.naturalHeight,
          a = this.wrap.clientWidth,
          r = this.wrap.clientHeight,
          o = (this.width, this.height, s / i),
          l = s,
          n = i;
        (s > a || i > r) && "auto" !== this.size && "percentage" !== this.size
          ? s >= i
            ? ((l = a), (n = a / o))
            : ((n = r), (l = r * o))
          : "percentage" === this.size &&
            ((l = (l * parseFloat(this.sizeVal)) / 100),
            (n = (n * parseFloat(this.sizeVal)) / 100)),
          ((t = this.pc = this.pc ?? document.createElement("canvas")).width =
            l),
          (t.height = n),
          t.getContext("2d").drawImage(this.image, 0, 0, l, n);
        var d =
            ((2 * (Math.floor(Math.abs(a / t.width) / 2) + 1.5) * t.width - a) *
              parseFloat(this.pos.x)) /
            100,
          c =
            ((2 * (Math.floor(Math.abs(r / t.height) / 2) + 1.5) * t.height -
              r) *
              parseFloat(this.pos.y)) /
            100;
        return (
          "repeat-x" === this.repeat
            ? (c = ((t.height - r) * parseFloat(this.pos.y)) / 100)
            : "repeat-y" === this.repeat &&
              (d = ((t.width - a) * parseFloat(this.pos.x)) / 100),
          this.ctx.translate(-d, -c),
          (e = this.ctx.createPattern(this.pc, this.repeat)),
          this.ctx.translate(0, 0),
          { pattern: e, pc: t, pox: d, poy: c }
        );
      }),
      (SR7.F.canvas.prototype.drawColored = function (e, t) {
        let s = this.checkPreDraw();
        if (s.core) {
          if (
            ((this.width = this.canvas.width =
              e || this.wrap.clientWidth * _tpt.dpr),
            (this.height = this.canvas.height =
              t || this.wrap.clientHeight * _tpt.dpr),
            0 == this.width || 0 == this.height)
          )
            return;
          (this.canvas.style.width = this.wrap.clientWidth + "px"),
            (this.canvas.style.height = this.wrap.clientHeight + "px"),
            this.fill();
        }
        s.post && this.checkPostDraw();
      }),
      (SR7.F.canvas.prototype.fill = function () {
        (this.ctx.fillStyle = this.fillColor()),
          this.ctx.fillRect(0, 0, this.width, this.height);
      }),
      (SR7.F.canvas.prototype.fillColor = function () {
        if (
          (this.color.colors ||
            (this.color = _tpt.gradient.process(this.color)),
          "solid" !== this.color.type)
        ) {
          let t =
            "radial" === this.color.type
              ? this.getRadialGrad()
              : this.getLinearGrad();
          for (var e in this.color.colors)
            t.addColorStop(
              this.color.colors[e].p / 100,
              this.color.colors[e].rgba
            );
          return t;
        }
        return this.color.string;
      }),
      (SR7.F.canvas.prototype.getLinearGrad = function () {
        return _tpt.gradient.getLinear(
          this.ctx,
          this.width,
          this.height,
          this.color.angle ?? 180
        );
      }),
      (SR7.F.canvas.prototype.getRadialGrad = function () {
        return this.ctx.createRadialGradient(
          this.width / 2,
          this.height / 2,
          0,
          this.width / 2,
          this.height / 2,
          Math.max(this.width, this.height) / 2
        );
      }),
      (SR7.F.addOverlay = (t, s, i, a) => {
        let r = document.createElement("sr7-overlay");
        return (r.style.backgroundImage = e(t, s, i, a)), r;
      });
    const e = (e = 1, t = 1, s = "rgba(0,0,0,0)", i = "rgba(0,0,0,1)") => {
      if ("none" === e) return;
      let a = { 0: s, 1: i },
        r = {
          none: [[0]],
          1: [
            [1, 0],
            [0, 0],
          ],
          2: [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          3: [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
          4: [[1], [0]],
          5: [[1], [0], [0]],
          6: [[1], [0], [0], [0]],
          7: [[1, 0]],
          8: [[1, 0, 0]],
          9: [[1, 0, 0, 0]],
          10: [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 1],
          ],
          11: [
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
          ],
          12: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          13: [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
          ],
          14: [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0],
          ],
          15: [
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0],
          ],
          16: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
          ],
        },
        o = void 0 === r[e] ? r[2] : r[e],
        l = document.createElement("canvas"),
        n = l.getContext("2d");
      (l.width = o[0].length * t), (l.height = o.length * t);
      for (var d = 0; d < o.length; d++)
        for (var c = 0; c < o[d].length; c++)
          "transparent" != a[o[d][c]] &&
            ((n.fillStyle = a[o[d][c]]), n.fillRect(c * t, d * t, t, t));
      return "url(" + l.toDataURL() + ")";
    };
    (_tpt.R = _tpt.R || {}),
      (_tpt.R.canvas = _tpt.extend
        ? _tpt.extend(_tpt.R.canvas, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      void 0 !== SR7.gVal)
    )
      return;
    function e(t, s, i, a) {
      if (0 === s.length) for (let e = 0; e < i.length; e++) t[i[e]] = a[e];
      else {
        const r = s.shift();
        t.hasOwnProperty(r) || (t[r] = {}), e(t[r], s, i, a);
      }
    }
    function t(e, t) {
      void 0 !== t.hash && history.pushState(null, null, t.hash),
        _tpt.isSafari11 ||
          (tpGS.gsap.set("html", { scrollBehavior: t.sbHtml }),
          tpGS.gsap.set("body", { scrollBehavior: t.sbBody })),
        (SR7.M[e].c.scrollToObj = null);
    }
    (SR7.gVal = (e, t, s = 1, i = !1, a, r, o, l, n) =>
      SR7.gV({ v: e, id: t, u: s, f: i, m: a, a: r, debug: o, c: l, s: n })),
      (SR7.gV = function (e) {
        if (null == e?.v) return;
        let t,
          s,
          i = SR7.M[e.id],
          {
            v: a,
            u: r = 1,
            f: o = !1,
            m: l,
            a: n,
            debug: d,
            c: c = i.LEV,
            s: p,
          } = e,
          h = 6,
          u = 1;
        if (Array.isArray(a)) {
          h = 0;
          let e = c;
          for (; !i.settings.uSize[e] && e > 0; ) e--;
          let s = a[e];
          if (
            "#a" == s ||
            null == s ||
            (!0 !== i.settings.uSize[e] && !0 !== n)
          ) {
            let s, r;
            for (r = e; r >= h; r--)
              if (
                i.settings.uSize[r] &&
                "#a" != a[r] &&
                void 0 !== a[r] &&
                "" !== a[r] &&
                null !== a[r]
              ) {
                s = r;
                break;
              }
            if (null == s)
              for (r = e; r <= 5; r++)
                if (
                  i.settings.uSize[r] &&
                  "#a" != a[r] &&
                  void 0 !== a[r] &&
                  "" !== a[r] &&
                  null !== a[r]
                ) {
                  s = r;
                  break;
                }
            if (void 0 !== s) {
              if (
                (0 == h &&
                  0 == e &&
                  (u =
                    parseFloat(i.settings.size.width[0]) /
                    parseFloat(i.settings.size.width[s])),
                "scale" == p)
              )
                if (i.slideRatios) {
                  let e =
                      parseInt(i.settings.size.height[c], 0) *
                      i.slideRatios[i.current.id],
                    t =
                      parseInt(i.settings.size.height[s], 0) *
                      i.slideRatios[i.current.id];
                  (u = e / t), d && console.log(u, e, t);
                } else
                  u =
                    parseFloat(i.settings.size.width[c]) /
                    parseFloat(i.settings.size.width[s]);
              t = a[s];
            }
          }
          t ??= s;
        } else t = a;
        let m = _tpt.gsap.utils.getUnit(t);
        if ((s = Number.isFinite(parseFloat(t))) && "%" !== m)
          if ((1 !== u && (t = parseFloat(t) * u), 1 == o)) {
            (t =
              parseFloat(t) *
              (h > c && (0 != c || (i.settings.size.fullWidth && !i.useHMP))
                ? 1
                : i.MP ?? 1)),
              "round" == l || "ceil" == l
                ? (t = Math[l](t))
                : "floor" == l && (t = t > 0 ? Math.floor(t) : Math.ceil(t));
          } else "forceround" == l && (t = Math.round(parseFloat(t)));
        return s
          ? 0 == r || null == r
            ? parseFloat(t)
            : parseFloat(t) + (1 == r ? m : r)
          : t;
      }),
      (SR7.dirVal = function (e, t) {
        let s = 1;
        return (
          ("" + t).includes("(") &&
            ((t = t.slice(1).slice(0, -1)), (s = SR7.M[e].lastChangeDir)),
          { v: t, d: s }
        );
      }),
      (SR7.F.getParOffsets = (e, t = {}) => (
        (t.width ??= parseInt(e.cw)),
        (t.height ??= parseInt(e.ch)),
        (t.left = (t.left ?? 0) + parseInt(e?.left ?? 0)),
        (t.top = (t.top ?? 0) + parseInt(e?.top ?? 0)),
        void 0 !== e.par && (t = SR7.F.getParOffsets(e.par, t)),
        t
      )),
      (SR7.F.getParRowMP = (e) => {
        let t = { x: 0, y: 0 };
        for (; e && "SR7-SLIDE" !== e.tagName; )
          "SR7-ROW" === e.tagName &&
            ((t.x += parseFloat(e.style.paddingLeft || 0)),
            (t.y += parseFloat(e.style.paddingTop || 0)),
            (t.x += parseFloat(e.style.marginLeft || 0)),
            (t.y += parseFloat(e.style.marginTop || 0))),
            (e = e.parentElement);
        return t;
      }),
      (SR7.F.getOffsetTop = (e) => {
        let t = e.offsetTop,
          s = e.offsetParent;
        for (; null !== s; ) (t += s.offsetTop), (s = s.offsetParent);
        return t;
      }),
      (SR7.cVal = function (e, t, s, i, a, r, o = !1, l, n) {
        let d = ("" + e).includes("%"),
          { v: c, d: p } =
            !1 !== o
              ? {
                  v: SR7.F.getOffset(e, void 0, SR7.M[t].lastChangeDir, n),
                  d: 1,
                }
              : SR7.dirVal(
                  t,
                  ("" + e).includes("{") || ("" + e).includes("[")
                    ? SR7.F.getOffset(e, void 0, void 0, 0)
                    : e
                );
        p = "in" !== l && "out" !== l ? 1 : p;
        let h = c;
        if (SR7.D.DA.indexOf(c) >= 0) {
          (i ??= null == s.ptype ? 1 : "zone" == s.ptype ? 2 : 0),
            (i =
              4 ==
                (i = !(
                  ("zone" != s.ptype && null != s.ptype) ||
                  (null != i && 1 != i)
                )
                  ? 2
                  : i) && "column" == s.ptype
                ? "100%" === s.par.w
                  ? 2
                  : 1
                : i);
          let e =
              "center" !== c && "middle" !== c && 0 == i
                ? {
                    left: 0,
                    top: 0,
                    width: "zone" == s.ptype ? s.ciw : s.cw,
                    height: s.ch,
                  }
                : SR7.F.getParOffsets(s),
            o =
              1 == i || (("center" == c || "middle" == c) && 0 == i)
                ? s.par.el
                  ? SR7.F.getParOffsets(s.par)
                  : {
                      width: s.par.cw,
                      height: s.par.ch,
                      left: s.par?.left ?? s.par?.x,
                      top: s.par?.top ?? s.par?.y,
                    }
                : {
                    width: SR7.M[t].dims.content.w,
                    height: SR7.M[t].dims.content.h,
                    left: SR7.M[t].dims.content.x,
                    top: SR7.M[t].dims.content.y,
                  },
            l =
              "center" === c || "middle" === c || (null != a && 0 != a)
                ? { left: s.target.offsetLeft, top: s.target.offsetTop }
                : { left: 0, top: 0 };
          if (
            ((e.width += s.borderH ?? 0),
            (e.height += s.borderV ?? 0),
            "zone" == s.ptype &&
              ((e.height += s.rpt ?? 0 + s.rpb ?? 0),
              (e.width += s.rptl ?? 0 + s.rptr ?? 0)),
            !s.par.el &&
              SR7.M[t]?.c?.autoParents?.[s.skey]?.includes(s.lkey) &&
              SR7.M[t]?.firstRendering &&
              s.el.classList[
                1 == SR7.M[t].firstRendering[s.skey] ? "add" : "remove"
              ]("sr7-hiddenAutoContainer"),
            "center" == c || "middle" == c)
          )
            h =
              "y" == r
                ? i < 2
                  ? 0 - e.height / 2 + o.height / 2 - l.top
                  : 0 - e.top - e.height / 2 + o.height / 2
                : i < 2
                ? 0 - e.width / 2 + o.width / 2 - l.left + o.left
                : 0 - e.left - e.width / 2 + o.width / 2;
          else {
            let a =
              "left" == c || "right" == c
                ? Math.abs(
                    Math.round(
                      parseFloat(
                        s?.mod?.animElemXY?._gsap?.x ??
                          s?.mod?.animElem?._gsap?.x ??
                          0
                      )
                    )
                  )
                : "bottom" == c || "top" == c
                ? Math.abs(
                    Math.round(
                      parseFloat(
                        s?.mod?.animElemXY?._gsap?.y ??
                          s?.mod?.animElem?._gsap?.y ??
                          0
                      )
                    )
                  )
                : 0;
            (a += 0 == a ? 0 : 10),
              ((1 == p && "bottom" == c) || (-1 == p && "top" == c)) &&
                (h =
                  0 == i
                    ? e.height
                    : 1 == i
                    ? o.height - (e.top - o.top)
                    : SR7.M[t].dims.content.h - e.top),
              ((1 == p && "top" == c) || (-1 == p && "bottom" == c)) &&
                (h =
                  0 == i
                    ? 0 - e.height
                    : 1 == i
                    ? 0 - (e.top - o.top + e.height)
                    : 0 - (e.top + e.height)),
              ((1 == p && "right" == c) || (-1 == p && "left" == c)) &&
                (h =
                  0 == i
                    ? e.width
                    : 1 == i
                    ? (o.left ?? 0) - e.left + o.width
                    : "column" == s.par?.subtype
                    ? o.width - e.left
                    : o.width - e.left + l.left - (o?.left ?? 0)),
              ((1 == p && "left" == c) || (-1 == p && "right" == c)) &&
                (h =
                  0 == i
                    ? 0 - e.width
                    : 1 == i
                    ? 0 -
                      (e.left -
                        (o.left ?? 0) +
                        ("row" == s.subtype
                          ? SR7.M[t].dims.content.w
                          : e.width))
                    : 0 -
                      (e.left +
                        ("row" == s.subtype
                          ? SR7.M[t].dims.content.w
                          : e.width))),
              (h = h > 0 ? h + a : h - a);
          }
          return h;
        }
        return d
          ? ((i ??=
              null == s.ptype || "" + s.ptype == "-1" || "zone" == s.ptype
                ? 0
                : 1),
            null == i || 0 == i
              ? (h =
                  ((p * parseInt(c)) / 100) *
                  ("x" === r
                    ? "zone" == s.ptype
                      ? s.ciw
                      : o
                      ? o.offsetWidth
                      : 0 == s.cw
                      ? s.el?.offsetWidth ?? s.cw
                      : s.cw
                    : o
                    ? o.offsetHeight
                    : 0 == s.ch
                    ? s.el?.offsetHeight ?? s.ch
                    : s.ch))
              : 1 == i
              ? (h =
                  ((p * parseInt(c)) / 100) *
                  ("x" === r ? (o ? s.cw : s.par.cw) : o ? s.ch : s.par.ch))
              : 2 == i &&
                (h =
                  ((p * parseInt(c)) / 100) *
                  ("x" === r
                    ? SR7.M[t].dims.content.cw
                    : SR7.M[t].dims.content.ch)),
            h)
          : c;
      }),
      (SR7.F.getEmptyAnimObj = (e) =>
        1 == e
          ? {
              x: 0,
              y: 0,
              z: 0,
              scaleX: 1,
              scaleY: 1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              skewX: 0,
              skewY: 0,
              opacity: 1,
            }
          : {
              x: 0,
              y: 0,
              z: 0,
              scaleX: 1,
              scaleY: 1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              skewX: 0,
              skewY: 0,
              opacity: 1,
              blur: 0,
              graysacle: 0,
              brightness: 100,
            }),
      (SR7.F.checkWrap = (e, t) => {
        if (null == e) return !1;
        let s = !1;
        for (let i in e) (s && _tpt.hop(e, i)) || (s = void 0 !== e[i][t]);
        return s;
      }),
      (SR7.F.checkMargin = (e) => {
        let t,
          s,
          i = !1;
        if (e)
          for (t of SR7.D.DS)
            if (!i)
              for (s = 0; s < 5; s++)
                i = i || (0 !== e[t][s] && void 0 !== e[t][s]);
        return i;
      }),
      (SR7.F.splitText = (e, t) => {
        let s;
        for (let t in e.tl)
          for (let i of ["words", "lines", "chars"])
            !_tpt.hop(e.tl, t) ||
              (null != s && s[i + "Class"]) ||
              void 0 === (e.tl[t]?.[i] ?? void 0) ||
              ((s ??= {}), (s[i + "Class"] = "sr7_splitted_" + i));
        return (
          void 0 !== s &&
            ((s.wordsClass ??= "sr7_splitted_words_noanim"),
            (s.type = Object.keys(s).join(",").replaceAll("Class", ""))),
          null != s && new _tpt.SplitText(t.el, s)
        );
      }),
      (_tpt.inRange = (e, t, s) =>
        e >= (t < s ? t : s) && e <= (t > s ? t : s) ? "in" : "out"),
      (SR7.F.startOnAction = (e, t, s) =>
        "zone" !== SR7.M[e].slides[t].layers[s].type &&
        ((void 0 !== SR7.M[e].slides[t].layers[s].tl.in &&
          "w" ==
            ("" +
              (SR7.M[e].slides[t].layers[s].tl.in?.content?.all?.[0]?.t ??
                ""))[0]) ||
          0 == SR7.M[e].slides[t].layers[s].tl.in?.content?.all?.length)),
      (SR7.F.triggeredChildren = (e, t, s, i = []) => {
        let a = SR7.M[e].slides[t].layers;
        if ("container" == a[s].type)
          for (let r in a) {
            if (r == s || i.indexOf(r) >= 0 || !_tpt.hop(a, r)) continue;
            let o = a[r];
            o.pid == s &&
              (i.push(r),
              "container" == o.type &&
                !0 !== SR7.F.startOnAction(e, t, r) &&
                (i = SR7.F.triggeredChildren(e, t, r, i)));
          }
        return i;
      }),
      (SR7.F.inActionEnv = (e, t, s, i = !1) => (
        null == e ||
          null == s ||
          null == t ||
          (i = i || SR7.F.startOnAction(e, t, s)) ||
          -1 === SR7.M[e].slides[t].layers[s].pid ||
          (i = SR7.F.inActionEnv(e, t, SR7.M[e].slides[t].layers[s].pid, i)),
        i
      )),
      (SR7.F.getOffset = (e, t, s, i) => {
        let a = e;
        if ("left" == e || "right" == e || "top" == e || "bottom" == e)
          return a;
        if (null == a) return;
        const r = ("" + a).includes("%");
        return (
          (a = SR7.F.getSpecialValue(a, i, s)),
          0 == a || void 0 === a
            ? 0
            : r
            ? null == t
              ? a
              : t * (parseFloat(a) / 100)
            : parseFloat(a)
        );
      }),
      (SR7.F.getSpecialValue = (e, t, s, i) => {
        let a = e;
        if (null != a)
          return parseFloat(a) == a
            ? parseFloat(a, 0)
            : ("" + a).includes("{")
            ? ((a = a.slice(1, -1).split(",")),
              _tpt.gsap.utils.random(
                parseFloat(a[0]),
                parseFloat(a.length > 1 ? a[1] : 0 - a[0])
              ))
            : ("" + a).includes("[")
            ? ((a = _tpt.gsap.utils.wrap(a.slice(1, -1).split(","), t)),
              ("" + a).includes("(")
                ? parseFloat(a.slice(1, -1)) * s + (i ? "%" : "")
                : a)
            : (("" + a).includes("(")
                ? parseFloat(a.slice(1, -1)) * s
                : parseFloat(a)) + (i ? "%" : "");
      }),
      (SR7.F.getSpikePath = (e = { l: "none", lw: 10, r: "none", rw: 10 }) =>
        "polygon(" +
        SR7.F.getClipPaths(e.l, 0, parseFloat(e.lw)) +
        "," +
        SR7.F.getClipPaths(e.r, 100, 100 - parseFloat(e.rw), !0) +
        ")"),
      (SR7.F.usePerspective = function (e, t, s = 600, i) {
        let a;
        if (i)
          ((_tpt.isSet(e.z) && "0deg" !== e.z) ||
            (_tpt.isSet(e.rX) && "0deg" !== e.rX) ||
            (_tpt.isSet(e.rY) && "0deg" !== e.rY)) &&
            (a =
              "global" == t.perspectiveType
                ? t.perspective ?? 600
                : "isometric" == t.perspectiveType
                ? "none"
                : s);
        else
          for (let i in e)
            void 0 === a &&
              _tpt.hop(e, i) &&
              ((_tpt.isSet(e[i].z) && "0deg" !== e[i].z) ||
                (_tpt.isSet(e[i].rX) && "0deg" !== e[i].rX) ||
                (_tpt.isSet(e[i].rY) && "0deg" !== e[i].rY)) &&
              (a =
                "global" == t.perspectiveType
                  ? t.perspective ?? 600
                  : "isometric" == t.perspectiveType
                  ? "none"
                  : s);
        return "none" == a ? void 0 : a;
      }),
      (SR7.F.getClipPaths = (e, t, s, i) => {
        var a;
        switch (e) {
          case "none":
            a = t + "% 100%," + t + "% 0%";
            break;
          case "top":
            a = s + "% 100%," + t + "% 0%";
            break;
          case "middle":
            a = s + "% 100%," + t + "% 50%," + s + "% 0%";
            break;
          case "bottom":
            a = t + "% 100%," + s + "% 0%";
            break;
          case "two":
            a =
              s +
              "% 100%," +
              t +
              "% 75%," +
              s +
              "% 50%," +
              t +
              "% 25%," +
              s +
              "% 0%";
            break;
          case "three":
            a =
              t +
              "% 100%," +
              s +
              "% 75%," +
              t +
              "% 50%," +
              s +
              "% 25%," +
              t +
              "% 0%";
            break;
          case "four":
            a =
              t +
              "% 100%," +
              s +
              "% 87.5%," +
              t +
              "% 75%," +
              s +
              "% 62.5%," +
              t +
              "% 50%," +
              s +
              "% 37.5%," +
              t +
              "% 25%," +
              s +
              "% 12.5%," +
              t +
              "% 0%";
            break;
          case "five":
            a =
              t +
              "% 100%," +
              s +
              "% 90%," +
              t +
              "% 80%," +
              s +
              "% 70%," +
              t +
              "% 60%," +
              s +
              "% 50%," +
              t +
              "% 40%," +
              s +
              "% 30%," +
              t +
              "% 20%," +
              s +
              "% 10%," +
              t +
              "% 0%";
        }
        if (i) {
          var r = a.split(",");
          for (s in ((a = ""), r))
            _tpt.hop(r, s) &&
              (a += r[r.length - 1 - s] + (s < r.length - 1 ? "," : ""));
        }
        return a;
      }),
      (SR7.F.clipEffect = (e, t, s, i = 100) => {
        (t = "r" == t || null == t),
          (s = parseInt(s, 0)),
          (i = 100 - parseInt(i, 0));
        const a = Math.round(s / 2);
        switch (e) {
          case "invh":
            return (
              "polygon(0% 0%, 0% 100%, " +
              s +
              "% 100%, " +
              s +
              "% 0%, 100% 0%, 100% 100%, " +
              i +
              "% 100%, " +
              i +
              "% 0%, 0% 0%)"
            );
          case "invv":
            return (
              "polygon(100% 0%, 0% 0%, 0% " +
              s +
              "%, 100% " +
              s +
              "%, 100% 100%, 0% 100%, 0% " +
              i +
              "%, 100% " +
              i +
              "%, 100% 0%)"
            );
          case "cv":
            return t
              ? "polygon(" +
                  (50 - a) +
                  "% 0%, " +
                  (50 + a) +
                  "% 0%, " +
                  (50 + a) +
                  "% 100%, " +
                  (50 - a) +
                  "% 100%)"
              : "circle(" + s + "% at 50% 50%)";
          case "ch":
          case "cliph":
            return t
              ? "polygon(0% " +
                  (50 - a) +
                  "%, 0% " +
                  (50 + a) +
                  "%, 100% " +
                  (50 + a) +
                  "%, 100% " +
                  (50 - a) +
                  "%)"
              : "circle(" + s + "% at 50% 50%)";
          case "l":
            return t
              ? "polygon(0% 0%, " + s + "% 0%, " + s + "% 100%, 0% 100%)"
              : "circle(" + s + "% at 0% 50%)";
          case "r":
            return t
              ? "polygon(" +
                  (100 - s) +
                  "% 0%, 100% 0%, 100% 100%, " +
                  (100 - s) +
                  "% 100%)"
              : "circle(" + s + "% at 100% 50%)";
          case "t":
            return t
              ? "polygon(0% 0%, 100% 0%, 100% " + s + "%, 0% " + s + "%)"
              : "circle(" + s + "% at 50% 0%)";
          case "b":
            return t
              ? "polygon(0% 100%, 100% 100%, 100% " +
                  (100 - s) +
                  "%, 0% " +
                  (100 - s) +
                  "%)"
              : "circle(" + s + "% at 50% 100%)";
          case "lt":
            return t
              ? "polygon(0% 0%," + 2 * s + "% 0%, 0% " + 2 * s + "%)"
              : "circle(" + s + "% at 0% 0%)";
          case "lb":
            return t
              ? "polygon(0% " +
                  (100 - 2 * s) +
                  "%, 0% 100%," +
                  2 * s +
                  "% 100%)"
              : "circle(" + s + "% at 0% 100%)";
          case "rt":
            return t
              ? "polygon(" +
                  (100 - 2 * s) +
                  "% 0%, 100% 0%, 100% " +
                  2 * s +
                  "%)"
              : "circle(" + s + "% at 100% 0%)";
          case "rb":
            return t
              ? "polygon(" +
                  (100 - 2 * s) +
                  "% 100%, 100% 100%, 100% " +
                  (100 - 2 * s) +
                  "%)"
              : "circle(" + s + "% at 100% 100%)";
          case "clr":
            return t
              ? "polygon(0% 0%, 0% " +
                  s +
                  "%, " +
                  (100 - s) +
                  "% 100%, 100% 100%, 100% " +
                  (100 - s) +
                  "%, " +
                  s +
                  "% 0%)"
              : "circle(" + s + "% at 50% 50%)";
          case "crl":
            return t
              ? "polygon(0% " +
                  (100 - s) +
                  "%, 0% 100%, " +
                  s +
                  "% 100%, 100% " +
                  s +
                  "%, 100% 0%, " +
                  (100 - s) +
                  "% 0%)"
              : "circle(" + s + "% at 50% 50%)";
        }
        return "";
      }),
      (SR7.F.getCSSTransform = (e = {}) => {
        var t = [];
        let s = !1;
        const i = (e) => ("inherit" == e ? void 0 : e);
        let a, r;
        void 0 !== (a = i(e.z)) && 0 !== a
          ? ((s = !0),
            t.push(
              "translate3d(" +
                _tpt.unitize(i(e.x) ?? 0) +
                "," +
                _tpt.unitize(i(e.y) ?? 0) +
                "," +
                _tpt.unitize(i(e.z) ?? 0) +
                ")"
            ))
          : void 0 !== (a = i(e.x)) &&
            void 0 !== (r = i(e.y)) &&
            t.push(
              "translate(" + _tpt.unitize(a) + "," + _tpt.unitize(r) + ")"
            ),
          void 0 !== (a = i(e.rotate)) || void 0 !== (a = i(e.rotationZ))
            ? t.push("rotate(" + _tpt.unitize(a, "deg") + ")")
            : void 0 !== (a = i(e.rotationY)) &&
              ((s = !0), t.push("rotateY(" + _tpt.unitize(a, "deg") + ")")),
          void 0 !== (a = i(e.rotationX)) &&
            ((s = !0), t.push("rotateX(" + _tpt.unitize(a, "deg") + ")")),
          (a = i(e.scaleX)),
          (r = i(e.scaleY));
        let o = i(e.skewX),
          l = i(e.skewY);
        return (
          (void 0 === o && void 0 === l) ||
            (void 0 !== o &&
              (r =
                parseFloat(r ?? 1) *
                Math.cos((o = parseFloat(o)) * _tpt.DEG2RAD)),
            void 0 !== l &&
              (a =
                parseFloat(a ?? 1) *
                Math.cos((l = parseFloat(l)) * _tpt.DEG2RAD))),
          (void 0 === o && void 0 === l) ||
            t.push(
              "skew(" +
                _tpt.unitize(o ?? 0, "deg") +
                "," +
                _tpt.unitize(l ?? 0, "deg") +
                ")"
            ),
          (void 0 === a && void 0 === r) ||
            t.push("scale(" + (a ?? 1) + "," + (r ?? 1) + ")"),
          s &&
            t.unshift(
              "perspective(" + _tpt.unitize(i(e.perspective) ?? 600) + ")"
            ),
          t.join(" ")
        );
      }),
      (SR7.F.offsetStagger = function (e) {
        var t = _tpt.gsap.utils.distribute(e);
        return function (s, i, a) {
          return t(s, i, a) + (s <= a.length / 2 ? 0 : e.offset || 0);
        };
      }),
      (SR7.F.useFilter = (e) =>
        void 0 !== e &&
        ((void 0 !== e.r && 100 !== parseInt(e.r)) ||
          (void 0 !== e.g && 0 !== parseInt(e.g)) ||
          (void 0 !== e.b && 0 !== parseInt(e.b)))),
      (SR7.F.getFilterStyle = (e, t, s = {}) => {
        const i = Object.keys(SR7.D.dFV),
          a = { ...s },
          r = i.filter((i) =>
            s[i] ||
            ("string" == typeof e &&
              e.includes(i) &&
              e.split(i + "(")[1].split(")")[0] !== parseInt(SR7.D.dFV[i])) ||
            (void 0 !== e[t + SR7.D.dFVC[i]] &&
              parseInt(e[t + SR7.D.dFVC[i]]) !== parseInt(SR7.D.dFV[i]))
              ? ((a[i] = !0), !0)
              : ((a[i] = !1), !1)
          );
        if (0 === r.length) return { filter: "none", changedFilters: a };
        let o = r
          .map(
            (s) =>
              `${s}(${
                "string" == typeof e && e.includes(s)
                  ? parseInt(e.split(s + "(")[1].split(")")[0]) ||
                    parseInt(SR7.D.dFV[s])
                  : parseInt(e[t + SR7.D.dFVC[s]] || SR7.D.dFV[s])
              }${"blur" === s ? "px" : "%"})`
          )
          .join(" ");
        const l = {};
        return (
          r.map((s) => {
            if (!a[s]) return;
            const i =
              "string" == typeof e && e.includes(s)
                ? parseInt(e.split(s + "(")[1].split(")")[0]) ||
                  parseInt(SR7.D.dFV[s])
                : parseInt(e[t + SR7.D.dFVC[s]] || SR7.D.dFV[s]);
            l[s] = i;
          }),
          { filter: o, filters: l, used: a }
        );
      }),
      (SR7.F.getBGAnimColor = (
        e = { type: "solid", orig: "transparent", string: "transparent" },
        t,
        s
      ) => {
        if (null == e || null == t) return {};
        let i = "object" == typeof t ? t.string : t,
          a = "object" == typeof e ? e.string : e,
          r = i.includes("gradient");
        return a.includes("gradient") || r
          ? {
              gradient: !0,
              bg: _tpt.gradient.getSSGColors(i, a, s || "fading"),
            }
          : { gradient: !1, bg: { to: a, from: i } };
      }),
      (SR7.F.cache = (t, s, i, a) => {
        e(t, s.split("."), i, a);
      }),
      (SR7.F.getAccelerationPermission = () => {
        DeviceMotionEvent.requestPermission().then(function (e) {
          if ("granted" == e)
            for (var t in SR7.M)
              _tpt.hop(SR7.M, t) &&
                ((SR7.M[t].c.modulesNeedOrientationListener = !1),
                SR7.F.removeIOSPermissionWait(),
                SR7.F.addDeviceOrientationListener(t));
        });
      }),
      (SR7.F.addDeviceOrientationListener = (e) => {
        const t = SR7.M[e],
          s = t.c.mod;
        window.addEventListener("deviceorientation", function (e) {
          t.c.modulesNeedOrientationListener &&
            ((t.c.modulesNeedOrientationListener = !1),
            SR7.F.removeIOSPermissionWait()),
            (s.eventData = e);
        });
      }),
      (SR7.F.removeIOSPermissionWait = () => {
        document.querySelectorAll(".iospermaccwait").forEach(function (e) {
          e.classList.add("permanenthidden");
        });
      }),
      (SR7.F.calculateVisiblePercentage = (e) => {
        const t = window.pageYOffset || document.documentElement.scrollTop,
          s = Math.max(e.top + t, t),
          i = Math.min(e.bottom + t, t + _tpt.winH);
        if (i <= s) return 0;
        return (i - s) / e.height;
      }),
      (SR7.F.scrollTo = (e, t, s = 1, i = "power2.out", a) => {
        if (!SR7.M[e].useAsModal) {
          let e = {
            _y:
              window.pageYOffset !== document.documentElement.scrollTop
                ? 0 !== window.pageYOffset
                  ? window.pageYOffset
                  : document.documentElement.scrollTop
                : window.pageYOffset,
          };
          return tpGS.gsap.fromTo(
            e,
            s,
            {
              _y: Math.max(
                document.body.scrollTop,
                document.documentElement.scrollTop
              ),
              ease: i,
            },
            {
              _y: t,
              onUpdate: function () {
                (document.documentElement.scrollTop = e._y),
                  (document.body.scrollTop = e._y);
              },
              onComplete: a,
            }
          );
        }
      }),
      (SR7.F.scrollToId = (e) => {
        (SR7.M[e.id].c.scrollToObj = e),
          _tpt.isSafari11 ||
            ((SR7.M[e.id].c.scrollToObj.sbHtml = _tpt.gsap.getProperty(
              "html",
              "scrollBehavior"
            )),
            (SR7.M[e.id].c.scrollToObj.sbBody = _tpt.gsap.getProperty(
              "body",
              "scrollBehavior"
            )),
            _tpt.gsap.set("html,body", { scrollBehavior: "auto" })),
          SR7.F.calcScrollToId(e.id);
      }),
      (SR7.F.getContsHeights = (e = "", t = _tpt.winH) => {
        if ("" == e) return 0;
        const s = e.split(",");
        let i = 0;
        return (
          s.forEach((e) => {
            let s = _tpt.posToNum(e, t);
            if (
              s == e &&
              (function (e) {
                try {
                  document.querySelector(e);
                } catch (e) {
                  return !1;
                }
                return !0;
              })(e)
            ) {
              document.querySelectorAll(e.trim()).forEach((e) => {
                i += e.offsetHeight;
              });
            } else i += s;
          }),
          i
        );
      }),
      (SR7.F.calcScrollToId = (e) => {
        const s = SR7.M[e],
          i = s.c.scrollToObj;
        var a = i.tween && i.tween.progress ? i.tween.progress() : 0;
        i.tween && i.tween.kill && i.tween.kill(),
          (void 0 !== i.startScrollPos && null !== i.startScrollPos) ||
            (i.startScrollPos = s.useAsModal
              ? SR7.F.modal.wrap.scrollTop
              : Math.max(
                  document.body.scrollTop,
                  document.documentElement.scrollTop
                ));
        const r =
            void 0 === i.anchor
              ? s.dims.reduceHeight - (parseInt(i.offset, 0) || 0) || 0
              : 0 - (parseInt(i.offset, 0) || 0),
          o =
            null == i.anchor
              ? s.c.module
              : document.getElementById(
                  "#" == i.anchor[0] ? i.anchor : i.anchor.replace("#", "")
                ) ||
                document.getElementById(
                  "#" == i.anchor[0]
                    ? i.anchor
                    : i.anchor.replace("#", "").toUpperCase()
                ),
          l = {
            _y: s.useAsModal
              ? SR7.F.modal.wrap.scrollTop
              : window.pageYOffset !== document.documentElement.scrollTop
              ? 0 !== window.pageYOffset
                ? window.pageYOffset
                : document.documentElement.scrollTop
              : window.pageYOffset,
          },
          n =
            (null != o ? SR7.F.getOffsetTop(o) : 0) +
            (null == i.anchor
              ? s.settings.tlScroll?.fixed
                ? s.dims.module.h + s.fullScreenOffsetResult
                : void 0 !== s.dims.sbt
                ? s.dims.sbt
                : s.dims.content.h
              : 0),
          d = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          ),
          c =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
        let p = Math.min(n - r, d - c - 1);
        if (p < 0) return t(e, i);
        (i.tween = tpGS.gsap.fromTo(
          l,
          parseInt(i.speed) / 1e3,
          { _y: i.startScrollPos },
          {
            _y: p,
            ease: i.ease,
            onUpdate: function () {
              s.useAsModal
                ? (SR7.F.modal.wrap.scrollTop = l._y)
                : ((document.documentElement.scrollTop = l._y),
                  (document.body.scrollTop = l._y));
            },
            onComplete: function () {
              t(e, i);
            },
          }
        )),
          i.tween.progress(a);
      }),
      (SR7.F.getFeed = (e, t, i = "src", a, r, o) => {
        let l = e.settings.source.type,
          n = e.stream[t - 1];
        if (null == n) return;
        0 == i.indexOf("event_") &&
          "event_id" !== i &&
          (i = (i = i.replace("event_location_", "")).replace("event_", ""));
        let d =
          "featured_image_url_" == i.slice(0, 19)
            ? _tpt.urlProtocol(
                n.img_urls[i.replace("featured_image_url_", "")]?.url ??
                  n.img_urls?.full?.url,
                !1
              ) ?? ""
            : (("thumb" == i || "image" == i) && "instagram" == l) ||
              ("thumb" == i && "facebook" == l)
            ? _tpt.urlProtocol(n.thumb ?? "", "flickr" == l || "youtube" == l)
            : "media" == i ||
              (("instagram" == l || "facebook" == l) &&
                ("thumb" == i || "image" == i || "thumbnail" == i)) ||
              ("image" == i &&
                "html5" !== l &&
                "youtube" !== l &&
                "vimeo" !== l)
            ? _tpt.urlProtocol(n.media ?? "", "flickr" == l || "youtube" == l)
            : "image" == i || "thumbnail" == i || "thumb" == i
            ? _tpt.urlProtocol(n.thumb ?? "", "flickr" == l || "youtube" == l)
            : "meta" == i
            ? s(n.meta, a) ?? ""
            : "title" == i || ("instagram" == l && "content" == i)
            ? s(n.title, "title", a, r) ?? ""
            : "content" == i ||
              ("youtube" == l && "excerpt" == i) ||
              ("woo" == l && "excerpt" == i && "" == (n.excerpt ?? ""))
            ? s(n.content, "content", a, r) ?? ""
            : "excerpt" != i || ("youtube" === l && void 0 === n.excerpt)
            ? "description" == i
              ? s(n.description, "description", a, r)
              : "wc_star_rating" == i
              ? (n.wc_star_rating ?? "").replaceAll(
                  "rs-starring",
                  "sr-starring"
                )
              : "catlistr" == i || "catlist_raw" == i || "catlistraw" == i
              ? n.catlistraw ?? n.catlist_raw ?? n.catlistr ?? ""
              : void 0 !== n["event_location_" + i]
              ? n["event_location_" + i]
              : void 0 !== n["event_" + i]
              ? n["event_" + i]
              : void 0 !== n[i]
              ? n[i]
              : "postid" == i || "event_id" == i
              ? n.id ?? ""
              : "link" == i
              ? n.link ?? ""
              : "author_name" == i
              ? n.author ?? n.author_name ?? ""
              : "author_avatar" == i
              ? n.avatar ?? n.author_avatar ?? ""
              : "author_website" == i
              ? n.website ?? n.author_website ?? ""
              : "author_postpage" == i
              ? n.postpage ?? n.author_postpage ?? ""
              : "date" == i || "date_published" == i
              ? n.publish ?? ""
              : "date_modified" == i
              ? n.modified ?? ""
              : "wc_categories" == i
              ? n.catlist ?? ""
              : "wc_tags" == i
              ? n.taglist ?? ""
              : "retweet_count" == i
              ? n.retweet ?? ""
              : "favorite_count" == i
              ? n.favorite ?? ""
              : "ncomments" == i || "num_comments" == i || "numcomments" == i
              ? n.num_comments ?? n.numcomments ?? n.ncomments ?? ""
              : void 0
            : s(n.excerpt, "excerpt", a, r) ?? "";
        return d || "" == d ? d : o;
      });
    let s = (e, t, s, i) =>
      null == s || null == i ? e?.[t] ?? e : e?.[s]?.[i] ?? e?.[t] ?? e;
    (SR7.F.updateDynamicMetas = (e, t, s) =>
      s.replace(/\{\{([^}]+)\}\}/g, function (s, i) {
        let [a, r, o] = i.split(":"),
          l = SR7.F.getFeed(SR7.M[e], t, a, r, o);
        if (l && r)
          switch (r) {
            case "words":
              l = l.split(" ").slice(0, o).join(" ");
              break;
            case "chars":
              l = l.slice(0, o);
          }
        return null == l ? s : l;
      })),
      (SR7.F.getCurSlideIndDigit = (e, t) => {
        var s =
          (void 0 !== t && SR7.M[e].slideOrder.indexOf(t) + 1) ||
          SR7.M[e].current.index + 1;
        return (s < 10 && SR7.M[e].len > 9 ? "0" : "") + s;
      }),
      (SR7.F.updateBasicMetas = (e, t, s) => {
        if (null != t)
          return (
            -1 !== t.el.innerHTML.indexOf("{{total_slide_count}}") &&
              (t.el.innerHTML = t.el.innerHTML.replace(
                "{{total_slide_count}}",
                SR7.M[e].len
              )),
            t.el.innerHTML.indexOf("{{current_slide_index}}") >= 0 &&
              (SR7.M[e].slides[s].slide.global
                ? ((SR7.M[e].metas ??= {}),
                  (SR7.M[e].metas.csi ??= []),
                  (t.el.innerHTML = t.el.innerHTML.replace(
                    "{{current_slide_index}}",
                    "<cusli>" + SR7.F.getCurSlideIndDigit(e) + "</cusli>"
                  )),
                  SR7.M[e].metas.csi.push(
                    t.el.getElementsByTagName("CUSLI")[0]
                  ))
                : (t.el.innerHTML = t.el.innerHTML.replace(
                    "{{current_slide_index}}",
                    SR7.F.getCurSlideIndDigit(e, s)
                  ))),
            !0
          );
        if (void 0 !== SR7.M[e].metas && void 0 !== SR7.M[e].metas.csi)
          for (let t in SR7.M[e].metas.csi)
            SR7.M[e].metas.csi[t].innerHTML = SR7.F.getCurSlideIndDigit(e);
      }),
      (_tpt.R ??= {}),
      (_tpt.R.srtools = _tpt.extend
        ? _tpt.extend(_tpt.R.srtools, { status: 2, version: "6.7.16" })
        : { status: 2, version: "6.7.16" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      void 0 !== SR7.D.contentOBJ)
    )
      return;
    (SR7.D.streamTypes ??= [
      "flickr",
      "facebook",
      "instagram",
      "twitter",
      "vimeo",
      "youtube",
      "woo",
      "post",
    ]),
      (SR7.D.bgTypes ??= ["transparent", "color", "image", "video"]),
      (SR7.D.BRAD = [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomRightRadius",
        "borderBottomLeftRadius",
      ]),
      (SR7.D.BWID = [
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
      ]),
      (SR7.D.DL = ["Top", "Right", "Bottom", "Left"]),
      (SR7.D.DLs = ["top", "right", "bottom", "left"]),
      (SR7.D.DS = ["t", "r", "b", "l"]),
      (SR7.D.DA = ["bottom", "top", "left", "right", "center", "middle"]),
      (SR7.D.spacings = ["margin", "padding"]),
      (SR7.D.olevels = {
        largedesktop: 0,
        desktop: 1,
        notebook: 2,
        tablet: 3,
        mobile: 4,
        nobreak: 5,
      }),
      (SR7.D.tagLib = {
        text: "SR7-TXT",
        button: "SR7-BTN",
        row: "SR7-ROW",
        column: "SR7-COL",
        group: "SR7-GRP",
        shape: "SR7-SHP",
        image: "SR7-IMG",
        svg: "SR7-SVG",
        zone: "SR7-ZONE",
        linebreak: "SR7-LINEBRK",
      }),
      (SR7.D.dFV = {
        blur: "0px",
        brightness: "100%",
        grayscale: "0%",
        sepia: "0%",
        invert: "0%",
      }),
      (SR7.D.dFVC = {
        blur: "b",
        brightness: "r",
        grayscale: "g",
        sepia: "s",
        invert: "i",
      }),
      (SR7.D.splits = ["words", "chars", "lines"]),
      (SR7.D.TLTargets = [
        "words",
        "lines",
        "chars",
        "content",
        "mask",
        "filter",
        "clip",
        "loop",
        "pan",
      ]),
      (SR7.D.TLTargetsProcess = [
        "clip",
        "mask",
        "words",
        "lines",
        "chars",
        "content",
        "filter",
        "loop",
        "pan",
      ]),
      (SR7.D.animAttr = [
        "x",
        "y",
        "z",
        "opacity",
        "scaleX",
        "scaleY",
        "skewX",
        "skewY",
        "rotate",
        "rotationX",
        "rotationY",
        "rotationZ",
      ]),
      (SR7.D.animAttrTrans = {
        x: "x",
        y: "y",
        z: "z",
        opacity: "o",
        scaleX: "sX",
        scaleY: "sY",
        skewX: "skX",
        skewY: "skY",
        rotate: "rZ",
        rotationZ: "rZ",
        rotationX: "rX",
        rotationY: "rY",
      }),
      (SR7.D.subsets = {
        "cyrillic-ext": { start: 1120, end: 1327 },
        cyrillic: { start: 1024, end: 1279 },
        "greek-ext": { start: 7936, end: 8191 },
        greek: { start: 880, end: 1023 },
        vietnamese: { start: 258, end: 423 },
        "latin-ext": { start: 256, end: 591 },
        latin: { start: 0, end: 255 },
      }),
      (SR7.D.modulStreamOBJ = {
        post: {
          excerptLimit: 55,
          maxPosts: 30,
          fetchType: "cat_tag",
          category: "",
          sortBy: "ID",
          types: "post",
          list: "",
          sortDirection: "DESC",
          subType: "post",
        },
        woo: {
          excerptLimit: 55,
          maxProducts: 30,
          featuredOnly: !1,
          inStockOnly: !1,
          category: "",
          sortBy: "ID",
          types: "product",
          sortDirection: "DESC",
          regPriceFrom: "",
          regPriceTo: "",
          salePriceFrom: "",
          salePriceTo: "",
        },
        instagram: {
          count: 8,
          hashTag: "",
          transient: 1200,
          type: "user",
          userId: "",
          token_source: "account",
          connect_with: "",
        },
        facebook: {
          album: "",
          appId: "",
          appSecret: "",
          count: 8,
          transient: 1200,
          typeSource: "timeline",
          token_source: "account",
          connect_with: "",
          page_id: "",
        },
        flickr: {
          apiKey: "",
          count: 8,
          galleryURL: "",
          groupURL: "",
          photoSet: "",
          transient: 1200,
          type: "publicphotos",
          userURL: "",
        },
        twitter: {
          accessSecret: "",
          accessToken: "",
          consumerKey: "",
          consumerSecret: "",
          count: 8,
          excludeReplies: !1,
          imageOnly: !1,
          includeRetweets: !1,
          transient: 1200,
          userId: "",
        },
        vimeo: {
          albumId: "",
          channelName: "",
          count: 8,
          transient: 1200,
          groupName: "",
          typeSource: "user",
          userName: "",
        },
        youtube: {
          api: "",
          channelId: "",
          count: 8,
          playList: "",
          transient: 1200,
          typeSource: "channel",
        },
      }),
      (SR7.D.fixSR6IDs = (e, t) => {
        if (!SR7.E.v6v7ids) return e;
        return t
          ? SR7.E.v6v7ids?.s?.[parseInt(e) || 9999999] ?? e
          : SR7.E.v6v7ids?.n?.[parseInt(e) || 9999999] ?? e;
      }),
      (SR7.D.contentOBJ = function (e, t) {
        t = null == t ? ("color" == e ? "#ffffff" : {}) : t;
        var s =
          "image" == e
            ? {
                ratio: t.ratio ?? 1,
                src: t.src ?? "",
                lib: t.lib ?? "",
                lib_id: t.lib_id ?? "",
                lib_size: t.lib_size ?? "full",
                fromStream: t.fromStream ?? !1,
                streamType: t.streamType ?? "gallery",
                pos: { x: t.pos?.x ?? "50%", y: t.pos?.y ?? "50%" },
                repeat: t.repeat ?? "no-repeat",
                size: t.size ?? "cover",
                sizeVal: t.sizeVal ?? "100%",
                seo: t.seo ?? !1,
              }
            : "color" == e
            ? t
            : "text" == e
            ? {
                text: t.text ?? "",
                ph: t.ph ?? "",
                deco: t.deco ?? "none",
                trans: t.trans ?? "none",
              }
            : "svg" == e
            ? {
                oC: t.oC ?? !1,
                color: t.color ?? ["#fff", "#fff", "#fff", "#fff", "#fff"],
                all: t.all ?? !1,
                stroke: {
                  c: t.stroke?.c ?? "transparent",
                  d: t.stroke?.d ?? 0,
                  o: t.stroke?.o ?? 0,
                  w: t.stroke?.w ?? 0,
                },
                src: t.src ?? "",
              }
            : "video" == e || "audio" == e
            ? {
                src: t.src ?? "",
                crossOrigin: t.crossOrigin ?? !1,
                afterTransition: t.afterTransition ?? !1,
                controls: t.controls ?? "xl",
                autoPlay: t.autoPlay ?? !0,
                pauseTimer: t.pauseTimer ?? !0,
                start: t.start ?? "00:00",
                end: t.end ?? "00:00",
                nextSlide: t.nextSlide ?? !0,
                stopAllMedia: t.stopAllMedia ?? !0,
                loop: t.loop ?? !0,
                preload: t.preload ?? "auto",
                preloadWait: t.preloadWait ?? "0",
                rewind: t.rewind ?? !0,
                volume: t.volume ?? "100",
              }
            : {};
        return (
          "video" == e &&
            (s = _tpt.extend(s, {
              poster: {
                src: t.poster?.src ?? "",
                lib: t.poster?.lib ?? "",
                lib_id: t.poster?.lib_id ?? "",
                lib_size: t.poster?.lib_size ?? "",
                size: t.poster?.size ?? "cover",
                fromStream: t.poster?.fromStream ?? !1,
                showOnPause: t.poster?.showOnPause ?? !1,
                insteadVideo: t.poster?.insteadVideo ?? !1,
                noOnMobile: t.poster?.noOnMobile ?? !1,
              },
              fromStream: t.fromStream ?? !1,
              streamType: t.streamType ?? "gallery",
              type: t.type ?? "html5",
              cover: t.cover ?? !0,
              noInteract: t.noInteract ?? !1,
              aFullScreen: t.aFullScreen ?? !0,
              args: t.args ?? "",
              fullWidth: t.fullWidth ?? !1,
              mute: t.mute ?? !0,
              ratio: t.ratio ?? "16:9",
              inline: t.inline ?? !0,
              speed: t.speed ?? 1,
              pauseOnSwap: t.pauseOnSwap ?? !1,
              cOC: t.cOC ?? !1,
            })),
          s
        );
      }),
      (SR7.D.convertBGPosObj = function (e, t = "50%", s = "50%") {
        var i = { x: "50%", y: "50%" };
        if (null == e) return i;
        if ("percentage" == e)
          return { x: parseInt(t) + "%", y: parseInt(s) + "%" };
        var a = ("" + e).split(" ");
        return (
          ("center" == a[0] && "center" == a[1]) ||
            ("left" == a[0] && (i.x = "0%"),
            "right" == a[0] && (i.x = "100%"),
            "top" == a[1] && (i.y = "0%"),
            "bottom" == a[1] && (i.y = "100%")),
          i
        );
      }),
      (SR7.D.carouselSettings = (e, t) => {
        if (void 0 === e) return {};
        let s = e?.showAllLayers ?? "false";
        return (
          (s = "true" == String(s) ? "all" : s),
          {
            type: e.type ?? e.orientation ?? "h",
            align:
              e.align ??
              ("h" === (e.orientation ?? "h")
                ? e.horizontal ?? "center"
                : e.vertical ?? "center"),
            maxV: Math.max("3d" == e.spin ? 3 : 1, e.maxV ?? e.maxItems ?? 3),
            justify: e.justify ?? !1,
            scale: e.scale ?? !1,
            minS: e.minS ?? e.scaleDown ?? 50,
            vScale: e.vScale ?? e.varyScale ?? !1,
            oScale: e.oScale ?? e.offsetScale ?? !1,
            space: e.space ?? 0,
            rotation: e.rotation ?? !1,
            maxR: e.maxR ?? e.maxRotation ?? 0,
            varR: e.varR ?? e.varyRotate ?? !1,
            opacity: e.opacity ?? e.fadeOut ?? !0,
            maxO: e.maxO ?? e.maxOpacity ?? 100,
            varO: e.varO ?? e.varyFade ?? !1,
            spin: e.spin ?? "off",
            spinA: parseInt(e.spinA ?? e.spinAngle ?? 0),
            snap: e.snap ?? !0,
            infinity: e.infinity ?? !1,
            skewX: e.skewX ?? 0,
            skewY: e.skewY ?? 0,
            ease: e.ease ?? "power3.inOut",
            dur: e.dur ?? e.speed ?? 800,
            overshoot: e.overshoot ?? !1,
            stretch: e?.stretch ?? !1,
            showAllLayers: s,
            jMWidth: e.jMWidth || (e?.justifyMaxWidth ?? !1),
            bR: e.bR ?? e?.borderRadius ?? 0,
            pNV: e.pNV ?? e?.prevNextVis ?? "50px",
            pT: e.pT ?? e?.paddingTop ?? 0,
            pB: e.pB ?? e?.paddingBottom ?? 0,
          }
        );
      }),
      (SR7.D.moduleObj = function (e, t = {}) {
        var s = SR7.M[e].migrate ? SR7.migrate.moduleObj(t) : t,
          i = {
            id: s.id ?? "",
            migrated: s.migrated ?? !1,
            addOns: s.addOns ?? {},
            uSize: s.uSize ?? [!1, !0, !1, !1, !1],
            level: s.level ?? 4,
            title: s.title ?? "",
            alias: s.alias ?? "",
            dbid: s.dbid ?? "",
            deepLinks: s.deepLinks,
            type: s.type ?? "slider",
            fonts: s.fonts ?? {},
            prem: s.prem ?? !1,
            class: s.class ?? "",
            wClass: s.wClass ?? "",
            fixed: s.fixed ?? !1,
            mobileURLJumpFix: s.mobileURLJumpFix ?? !0,
            wpml: s.wpml ?? !1,
            lazyLoad: s.lazyLoad ?? "none",
            uS: s.uS ?? !1,
            vPort: s.vPort ?? "-100px",
            fs: { as: s.fs?.as ?? !1, a: s.fs?.a ?? void 0 },
            source: { type: s.source?.type ?? "gallery" },
            imgs: s.imgs ?? [],
            hasYT: s.hasYT ?? !1,
            size: {
              fullWidth: s.size?.fullWidth ?? !0,
              fullHeight: s.size?.fullHeight ?? !1,
              fullHeightOffset:
                "," == (s.size?.fullHeightOffset ?? "")
                  ? ""
                  : s.size?.fullHeightOffset ?? "",
              contentFH: s.size?.contentFH ?? !1,
              width: s.size?.width ?? [1600, 1240, 1024, 778, 480],
              height: s.size?.height ?? ["#a", "auto", "#a", "#a", "#a"],
              cachedHeight: s.size?.cachedHeight ?? [
                "#a",
                "auto",
                "#a",
                "#a",
                "#a",
              ],
              minHeight: s.size?.minHeight ?? [0, 0, 0, 0, 0],
              maxHeight: s.size?.maxHeight ?? [0, 0, 0, 0, 0],
              upscaling: s.size?.upscaling ?? !1,
              respectRatio: s.size?.respectRatio ?? !1,
              keepBPHeight: s.size?.keepBPHeight ?? !1,
              maxWidth: s.size?.maxWidth ?? !1,
              overflow: s.size?.overflow ?? "false",
            },
            snap: {
              adjust: s.snap?.adjust ?? "none",
              snap: s.snap?.snap ?? !1,
              helpLines: s.snap?.helpLines ?? !1,
              gap: s.snap?.gap ?? 20,
            },
            default: {
              fluid: {
                tx: s.default?.fluid?.tx ?? !0,
                tr: s.default?.fluid?.tr ?? !0,
                sp: s.default?.fluid?.sp ?? !0,
                alien: s.default?.fluid?.alien ?? !0,
              },
              len: s.default?.len ?? 9e3,
            },
            codes: { css: s.codes?.css ?? "", js: s.codes?.js ?? "" },
            carousel: SR7.D.carouselSettings(s.carousel),
            pLoader: {
              color: s.pLoader?.color ?? "#ffffff",
              type: s.pLoader?.type ?? "off",
            },
            slideshow: {
              auto: s.slideshow?.auto ?? !0,
              sOH: s.slideshow?.sOH ?? !1,
              loop: s.slideshow?.loop ?? -1,
              stopAt: s.slideshow?.stopAt ?? -1,
              shuffle: s.slideshow?.shuffle ?? !1,
              initDelay: s.slideshow?.initDelay ?? 0,
              waitApi: s.slideshow?.waitApi ?? !1,
              firstSlide: s.slideshow?.firstSlide ?? "auto",
            },
            general: {
              icache: s.general?.icache ?? "default",
              dpr: s.general?.dpr ?? "dpr",
              observeWrap: s.general?.observeWrap ?? !1,
              disableOnMobile: s.general?.disableOnMobile ?? !1,
              autoPlayVideoMobile: s.general?.autoPlayVideoMobile ?? !0,
              disablePanMobile: s.general?.disablePanMobile ?? !1,
              perspective: s.general?.perspective ?? 600,
              perspectiveType: s.general?.perspectiveType ?? "global",
              outputFilter: s.general?.outputFilter ?? "none",
              fallbackURL: s.general?.fallbackURL ?? "",
            },
            browser: {
              nextOnFocus: s.browser?.nextOnFocus ?? !1,
              noFocusListener: s.browser?.noFocusListener ?? !1,
              freezeOnBlur: s.browser?.freezeOnBlur ?? !1,
              mISB: s.browser?.mISB ?? !1,
              useURLDeeplink: s.browser?.useURLDeeplink ?? !1,
            },
            modal: {
              bC: s.modal?.bC ?? "",
              h: s.modal?.h ?? "center",
              v: s.modal?.v ?? "middle",
              cover: s.modal?.cover ?? !0,
              pS: s.modal?.pS ?? !1,
              bg: s.modal?.bg ?? "rgba(0,0,0,0.5)",
              sp: s.modal?.sp ?? 1e3,
            },
            shdw: s.shdw ?? !1,
            bg: {
              color: s.bg?.color ?? "transparent",
              image: SR7.D.contentOBJ("image", s.bg?.image ?? {}),
            },
            mod: {
              use: s.mod?.use ?? !1,
              dOM: s.mod?.dOM ?? !1,
              d3: s.mod?.d3 ?? !1,
              d3z: s.mod?.d3z ?? 65,
              d3d: s.mod?.d3d ?? 15,
              d3s: s.mod?.d3s ?? 3,
              d3e: s.mod?.d3e ?? "power3.out",
              t: s.mod?.t ?? "scroll",
              om: s.mod?.om ?? 1,
              sm: s.mod?.sm ?? 1,
              dir: s.mod?.dir ?? "same",
            },
            rOFV: s.mod?.rOFV ?? !0,
            nav: {
              nd: s.nav?.nd ?? 1e3,
              m: {
                use: s.nav?.m?.use ?? "off",
                r: s.nav?.m?.r ?? "default",
                t: s.nav?.m?.t ?? "html",
                st: s.nav?.m?.st ?? 50,
                v: s.nav?.m?.v ?? 50,
                cd: s.nav?.m?.cd ?? 1500,
              },
              s: {
                use: s.nav?.s?.use ?? !1,
                desk: s.nav?.s?.desk ?? !1,
                mobC: s.nav?.s?.mobC ?? !0,
                deskC: s.nav?.s?.deskC ?? !0,
                bV: s.nav?.s?.bV ?? !1,
                d: s.nav?.s?.d ?? "horizontal",
                t: s.nav?.s?.t ?? 1,
              },
              k: { use: s.nav?.k?.use ?? "off" },
              p: { w: s.nav?.p?.w ?? 300, h: s.nav?.p?.h ?? 200 },
            },
          };
        if (void 0 !== SR7.M[e] && void 0 !== SR7.M[e].imgList)
          for (let t in SR7.M[e].imgList)
            _tpt.hop(SR7.M[e].imgList, t) &&
              _tpt.compareURL(SR7.M[e].imgList[t].old, i?.bg?.image?.src) &&
              (i.bg.image.src = SR7.M[e].imgList[t].new);
        (SR7.M[e].settings ??= {}),
          (SR7.M[e].settings.fonts ??= {}),
          (SR7.E.backend || s.nav?.arrows?.set) &&
            ((i.nav ??= {}),
            (i.nav.arrows ??= {
              set: s.nav?.arrows?.set ?? !1,
              def: s.nav?.arrows?.def ?? void 0,
              cst: s.nav?.arrows?.cst ?? void 0,
              key: s.nav?.arrows?.key ?? "",
              t: s.nav?.arrows?.t ?? 1e3,
              m: s.nav?.arrows?.m ?? "hslide",
              css: s.nav?.arrows?.css ?? "",
              html: s.nav?.arrows?.html ?? "",
              ps: s.nav?.arrows?.ps ?? "default",
              on: s.nav?.arrows?.on ?? !0,
              s: parseInt(s.nav?.arrows?.s ?? 1e3),
              dIn: s.nav?.arrows?.dIn ?? ["#a", 1e3, "#a", "#a", "#a"],
              dOut: s.nav?.arrows?.dOut ?? ["#a", 1200, "#a", "#a", "#a"],
              show: s.nav?.arrows?.show ?? [!0, !0, !0, !0, !0],
              l: {
                a: s.nav?.arrows?.l?.a ?? "slider",
                anim: s.nav?.arrows?.l?.anim ?? "fade",
                x: s.nav?.arrows?.l?.x ?? ["#a", 0, "#a", "#a", "#a"],
                y: s.nav?.arrows?.l?.y ?? ["#a", 0, "#a", "#a", "#a"],
                v: s.nav?.arrows?.l?.v ?? ["#a", "center", "#a", "#a", "#a"],
                h: s.nav?.arrows?.l?.h ?? ["#a", "left", "#a", "#a", "#a"],
              },
              r: {
                a: s.nav?.arrows?.r?.a ?? "slider",
                anim: s.nav?.arrows?.r?.anim ?? "fade",
                x: s.nav?.arrows?.r?.x ?? ["#a", 0, "#a", "#a", "#a"],
                y: s.nav?.arrows?.r?.y ?? ["#a", 0, "#a", "#a", "#a"],
                v: s.nav?.arrows?.r?.v ?? ["#a", "center", "#a", "#a", "#a"],
                h: s.nav?.arrows?.r?.h ?? ["#a", "right", "#a", "#a", "#a"],
              },
            }),
            (SR7.M[e].settings.fonts.RevIcon = !0),
            (SR7.R ??= {}),
            (SR7.R.nav = !0)),
          (SR7.E.backend || s.nav?.bullets?.set) &&
            ((i.nav ??= {}),
            (i.nav.bullets = {
              set: s.nav?.bullets?.set ?? !1,
              def: s.nav?.bullets?.def ?? void 0,
              cst: s.nav?.bullets?.cst ?? void 0,
              key: s.nav?.bullets?.key ?? "",
              t: s.nav?.bullets?.t ?? 3e3,
              css: s.nav?.bullets?.css ?? "",
              html: s.nav?.bullets?.html ?? "",
              on: s.nav?.bullets?.on ?? !0,
              d: s.nav?.bullets?.d ?? "horizontal",
              ps: s.nav?.arrows?.ps ?? "default",
              s: parseInt(s.nav?.bullets?.s ?? 1e3),
              dIn: s.nav?.bullets?.dIn ?? ["#a", 1e3, "#a", "#a", "#a"],
              dOut: s.nav?.bullets?.dOut ?? ["#a", 1200, "#a", "#a", "#a"],
              show: s.nav?.bullets?.show ?? [!0, !0, !0, !0, !0],
              g: s.nav?.bullets?.g ?? 5,
              a: s.nav?.bullets?.a ?? "slider",
              anim: s.nav?.bullets?.anim ?? "fade",
              x: s.nav?.bullets?.x ?? ["#a", 0, "#a", "#a", "#a"],
              y: s.nav?.bullets?.y ?? ["#a", 0, "#a", "#a", "#a"],
              v: s.nav?.bullets?.v ?? ["#a", "bottom", "#a", "#a", "#a"],
              h: s.nav?.bullets?.h ?? ["#a", "center", "#a", "#a", "#a"],
            }),
            (SR7.M[e].settings.fonts.RevIcon = !0),
            (SR7.R ??= {}),
            (SR7.R.nav = !0)),
          (SR7.E.backend || s.nav?.scrubber?.set) &&
            ((i.nav ??= {}),
            (i.nav.scrubber = {
              set: s.nav?.scrubber?.set ?? !1,
              def: s.nav?.scrubber?.def ?? void 0,
              cst: s.nav?.scrubber?.cst ?? void 0,
              key: s.nav?.scrubber?.key ?? "",
              t: s.nav?.scrubber?.t ?? 5e3,
              css: s.nav?.scrubber?.css ?? "",
              html: s.nav?.scrubber?.html ?? "",
              on: s.nav?.scrubber?.on ?? !0,
              d: s.nav?.scrubber?.d ?? "horizontal",
              ps: s.nav?.arrows?.ps ?? "default",
              s: parseInt(s.nav?.scrubber?.s ?? 1e3),
              dIn: s.nav?.scrubber?.dIn ?? ["#a", 1e3, "#a", "#a", "#a"],
              dOut: s.nav?.scrubber?.dOut ?? ["#a", 1200, "#a", "#a", "#a"],
              show: s.nav?.scrubber?.show ?? [!0, !0, !0, !0, !0],
              g: s.nav?.scrubber?.g ?? 5,
              a: s.nav?.scrubber?.a ?? "slider",
              anim: s.nav?.scrubber?.anim ?? "fade",
              x: s.nav?.scrubber?.x ?? ["#a", 0, "#a", "#a", "#a"],
              y: s.nav?.scrubber?.y ?? ["#a", 0, "#a", "#a", "#a"],
              v: s.nav?.scrubber?.v ?? ["#a", "bottom", "#a", "#a", "#a"],
              h: s.nav?.scrubber?.h ?? ["#a", "center", "#a", "#a", "#a"],
              io: s.nav?.scrubber?.io ?? "inner",
              size: {
                w: s.nav?.scrubber?.size?.w ?? ["#a", 100, "#a", "#a", "#a"],
                h: s.nav?.scrubber?.size?.h ?? ["#a", 50, "#a", "#a", "#a"],
              },
              wr: {
                c: s.nav?.scrubber?.wr?.c ?? "transparent",
                p: s.nav?.scrubber?.wr?.p ?? ["#a", 5, "#a", "#a", "#a"],
                s: s.nav?.scrubber?.wr?.s ?? !1,
                mx: s.nav?.scrubber?.wr?.mx ?? ["#a", 0, "#a", "#a", "#a"],
                my: s.nav?.scrubber?.wr?.my ?? ["#a", 0, "#a", "#a", "#a"],
              },
              ts: parseFloat(s.nav?.scrubber?.ts ?? 100),
              hs: parseFloat(s.nav?.scrubber?.hs ?? 100),
              ho: s.nav?.scrubber?.ho ?? !1,
              tn: s.nav?.scrubber?.tn ?? !1,
              hp: s.nav?.scrubber?.hp ?? !1,
              pa: s.nav?.scrubber?.pa ?? "left",
              sc: parseFloat(s.nav?.scrubber?.sc ?? 100),
              f: s.nav?.scrubber?.f ?? !0,
              asc: s.nav?.scrubber?.asc ?? !1,
              tr: parseInt(s.nav?.scrubber?.tr ?? 0),
              sp: s.nav?.scrubber?.sp ?? !1,
              ha: s.nav?.scrubber?.ha ?? !0,
              tp: s.nav?.scrubber?.tp ?? "dots",
              ms: parseFloat(s.nav?.scrubber?.ms ?? 60),
              to: parseFloat(s.nav?.scrubber?.to ?? 0),
              sk: parseFloat(s.nav?.scrubber?.sk ?? 0),
              cor: s.nav?.scrubber?.cor ?? !1,
            }),
            (SR7.M[e].settings.fonts.RevIcon = !0),
            (SR7.R ??= {}),
            (SR7.R.nav = !0));
        for (let t of ["thumbs", "tabs"])
          (SR7.E.backend || s.nav?.[t]?.set) &&
            ((i.nav ??= {}),
            (i.nav[t] = {
              set: s.nav?.[t]?.set ?? !1,
              def: s.nav?.[t]?.def ?? void 0,
              cst: s.nav?.[t]?.cst ?? void 0,
              key: s.nav?.[t]?.key ?? "",
              t: s.nav?.[t]?.t ?? ("tabs" == t ? 4e3 : 2e3),
              css: s.nav?.[t]?.css ?? "",
              html: s.nav?.[t]?.html ?? "",
              on: s.nav?.[t]?.on ?? !0,
              d: s.nav?.[t]?.d ?? "horizontal",
              ps: s.nav?.arrows?.ps ?? "default",
              s: parseInt(s.nav?.[t]?.s ?? 1e3),
              dIn: s.nav?.[t]?.dIn ?? ["#a", 1e3, "#a", "#a", "#a"],
              dOut: s.nav?.[t]?.dOut ?? ["#a", 1200, "#a", "#a", "#a"],
              ddim: s.nav?.[t]?.ddim ?? { w: 100, h: 50 },
              io: s.nav?.[t]?.io ?? "inner",
              show: s.nav?.[t]?.show ?? [!0, !0, !0, !0, !0],
              g: s.nav?.[t]?.g ?? 5,
              a: s.nav?.[t]?.a ?? "slider",
              anim: s.nav?.[t]?.anim ?? "fade",
              x: s.nav?.[t]?.x ?? ["#a", 0, "#a", "#a", "#a"],
              y: s.nav?.[t]?.y ?? ["#a", 0, "#a", "#a", "#a"],
              v: s.nav?.[t]?.v ?? ["#a", "bottom", "#a", "#a", "#a"],
              h: s.nav?.[t]?.h ?? ["#a", "center", "#a", "#a", "#a"],
              m: s.nav?.[t]?.m ?? ["#a", 5, "#a", "#a", "#a"],
              size: {
                w: s.nav?.[t]?.size?.w ?? ["#a", 100, "#a", "#a", "#a"],
                h: s.nav?.[t]?.size?.h ?? ["#a", 50, "#a", "#a", "#a"],
                nw: s.nav?.[t]?.size?.nw ?? 100,
                nh: s.nav?.[t]?.size?.nh ?? 50,
                mw: s.nav?.[t]?.size?.mw ?? 50,
                t: 0,
              },
              wr: {
                c: s.nav?.[t]?.wr?.c ?? "transparent",
                p: s.nav?.[t]?.wr?.p ?? ["#a", 5, "#a", "#a", "#a"],
                s: s.nav?.[t]?.wr?.s ?? !1,
                mx: s.nav?.[t]?.wr?.mx ?? ["#a", 0, "#a", "#a", "#a"],
                my: s.nav?.[t]?.wr?.my ?? ["#a", 0, "#a", "#a", "#a"],
              },
            }),
            (SR7.M[e].settings.fonts.RevIcon = !0),
            (SR7.R ??= {}),
            (SR7.R.nav = !0));
        (SR7.E.backend || s.sbt?.use) &&
          (i.sbt = {
            use: s.sbt?.use ?? !1,
            a: s.sbt?.a ?? "travel",
            f: s.sbt?.f ?? !1,
            fStart: parseInt(s.sbt?.fStart ?? 2e3),
            fEnd: parseInt(s.sbt?.fEnd ?? 4e3),
            layers: s.sbt?.layers ?? !1,
            e: s.sbt?.e ?? "none",
            s: s.sbt?.s ?? 500,
            pull: s.sbt?.pull ?? !1,
            nL: s.sbt?.nL ?? !1,
          }),
          (SR7.E.backend || s.pbar?.set) &&
            (i.pbar = {
              set: !0,
              a: s.pbar?.a ?? "slider",
              t: s.pbar?.t ?? "horizontal",
              s: s.pbar?.s ?? "5px",
              r: s.pbar?.r ?? 10,
              v: s.pbar?.v ?? "bottom",
              h: s.pbar?.h ?? "left",
              x: s.pbar?.x ?? 0,
              y: s.pbar?.y ?? 0,
              c: s.pbar?.c ?? "rgba(255,255,255,0.5)",
              bg: s.pbar?.bg ?? "transparent",
              base: s.pbar?.base ?? "slide",
              g: s.pbar?.g ?? !1,
              gs: s.pbar?.gs ?? 0,
              gc: s.pbar?.gc ?? "rgba(255,255,255,0.5)",
              rev: s.pbar?.rev ?? "reset",
              vis: s.pbar?.vis ?? [!0, !0, !0, !0, !0],
            }),
          (SR7.E.backend || "none" !== (s.bg?.overlay?.type ?? "none")) &&
            (i.bg.overlay = {
              type: s.bg?.overlay?.type ?? "none",
              size: s.bg?.overlay?.size ?? 1,
              cA: s.bg?.overlay?.cA ?? "transparent",
              cB: s.bg?.overlay?.cB ?? "#000000",
            });
        for (var a = 0; a < 5; a++)
          for (var r of ["t", "b", "l", "r"])
            for (var o of ["p", "m"])
              (SR7.E.backend || s.size?.[o]?.[r]?.[a]) &&
                (i.size[o] ??= {}) &&
                (i.size[o][r] ??= Array(5)) &&
                (i.size[o][r][a] ??= parseInt(s.size?.[o]?.[r]?.[a] ?? 0)),
                !SR7.E.backend &&
                  s.size?.[o]?.[r]?.[a] &&
                  (i.size[o] ??= {}) &&
                  (i.size[o][r] ??= Array(5)) &&
                  (i.size[o][r][a] = parseInt(s?.size?.[o]?.[r]?.[a] ?? 0));
        for (var l in ((s.source ??= {}), SR7.D.streamTypes))
          (void 0 === s.source[SR7.D.streamTypes[l]] &&
            i.source.type != SR7.D.streamTypes[l]) ||
            (i.source[SR7.D.streamTypes[l]] = _tpt.extend(
              SR7.D.modulStreamOBJ[SR7.D.streamTypes[l]],
              s.source[SR7.D.streamTypes[l]]
            ));
        return i;
      }),
      (SR7.D.hasActionLike = (e, t, s, i, a = "a") => {
        if (!SR7.M[e].slides[t].slide?.actions) return !1;
        const r = String(s),
          o = SR7.M[e].slides[t].slide?.actions.filter(
            (e) => e.src.some((e) => String(e) === r) && e[a] == i
          );
        return o.length > 0 && o[0];
      }),
      (SR7.D.slideObj = function (e, t, s) {
        var i = SR7.M[e].migrate ? SR7.migrate.slideObj(t) : t ?? {},
          a = i.global
            ? {
                addOns: i.addOns ?? {},
                id: i.id,
                version: i.version ?? "7.0.0",
                title: i.title ?? "",
                parentId: i.parentId ?? null,
                language: i.language ?? "default",
                oflow: i.oflow ?? !1,
                global: !0,
                respVP: i.respVP ?? !0,
                pos: i.pos ?? "front",
                actions: i.actions ?? [],
                fullHeight: i.fullHeight ?? !1,
              }
            : {
                addOns: i.addOns ?? {},
                id: i.id,
                version: i.version ?? "7.0.0",
                actions: i.actions ?? [],
                title: i.title ?? "",
                parentId: i.parentId ?? null,
                language: i.language ?? "default",
                order: i.order ?? s,
                thumb: {
                  src: i.thumb?.src ?? "",
                  srcId: i.thumb?.srcId ?? "",
                  admin: i.thumb?.admin ?? "",
                  adminId: i.thumb?.adminId ?? "",
                  dimension: i.thumb?.dimension ?? "orig",
                  default: i.thumb?.default ?? void 0,
                },
                description: i.description ?? "",
                attr: {
                  class: i.attr?.class ?? "",
                  data: i.attr?.data ?? "",
                  id: i.attr?.id ?? "",
                  a: i.attr?.a ?? "",
                  aO: i.attr?.aO ?? "",
                  t: i.attr?.t ?? "",
                  tO: i.attr?.tO ?? "",
                  deepLink: i.attr?.deepLink ?? "",
                  attr: i.attr?.attr ?? "",
                },
                publish: {
                  from: i.publish?.from ?? "",
                  to: i.publish?.to ?? "",
                  state:
                    "" == (i.publish?.state ?? "")
                      ? "published"
                      : i.publish?.state,
                  sch: i.publish?.sch ?? !0,
                },
                slideshow: {
                  stop: i.slideshow?.stop ?? !1,
                  len: i.slideshow?.len ?? "default",
                  hal: i.slideshow?.hal ?? 0,
                  hom: i.slideshow?.hom ?? !1,
                  hfn: i.slideshow?.hfn ?? !1,
                },
                loop: {
                  u: i.loop?.u ?? !1,
                  r: i.loop?.r ?? -1,
                  s: i.loop?.s ?? 0,
                  e: i.loop?.e ?? 99999,
                },
              };
        if (i.nav) {
          a.nav ??= {};
          for (let e of ["tabs", "thumbs", "arrows", "bullets"])
            (i.nav?.[e] || i.nav?.[e]) && (a.nav[e] = i.nav?.[e]);
        }
        let r = SR7.E.backend;
        if (r || void 0 !== i.params)
          for (var o in i.params) r = r || "" !== i.params[o].v;
        return r && (a.params = SR7.D.slideInfoParams(i.params)), { slide: a };
      }),
      (SR7.D.slideInfoParams = function (e) {
        for (var t = {}, s = 0; s < 10; s++)
          "" !== (e?.[s]?.v ?? "") &&
            (t[s] =
              void 0 !== e && void 0 !== e[s]
                ? { v: e[s].v ?? "", l: e[s].l ?? 10 }
                : { v: "", l: 10 });
        return t;
      }),
      (SR7.D.slideTimelineObject = function (e) {
        return {
          name: e?.name ?? "",
          repeat: e?.repeat ?? 0,
          length: e?.length ?? 0,
          triggeredBy: e?.triggeredBy ?? "",
          triggeredParam: e?.triggeredParam ?? "",
        };
      });
    (SR7.D.layerObjects = function (e) {
      let t,
        { dLEN: s, id: i, slide: a, sid: r, msource: o, snow: l } = e,
        n = { m: 0, top: -1, middle: -1, bottom: -1 },
        d = 0,
        c = SR7.M[i].migrate
          ? SR7.migrate.layerListUpdate({
              layers: a.layers,
              isStatic: a.global,
              snow: l,
              params: a.params,
              newIDs: n,
              msource: o,
              sid: r,
            })
          : {},
        p = { top: !1, middle: !1, bottom: !1 };
      for (t in a.layers)
        if (_tpt.hop(a.layers, t)) {
          if (
            ((c[n[t] || t] = SR7.D.layerObject({
              dLEN: s,
              id: i,
              obj: a.layers[t],
              layertype: null,
              newIDs: n,
              sid: r,
              msource: o,
              global: a.global,
            })),
            !SR7.E.backend)
          )
            continue;
          if (
            ((d = Math.max(d, c[n[t] || t].id)),
            !a.global && "zone" == c[t].subtype)
          ) {
            let e = c[t].pos.v[0];
            (e = "mid" == e ? "middle" : e),
              (c[t].alias = e.toUpperCase() + " ROWS"),
              (p[e] = !0);
          }
        }
      if (SR7.E.backend && !a.global)
        for (let e in p)
          _tpt.hop(p, e) &&
            !p[e] &&
            (c[++d] = SR7.D.layerObject({
              dLEN: s,
              id: i,
              obj: {
                alias: e.toUpperCase() + " ROWS",
                type: "container",
                subtype: "zone",
                rTo: "slide",
                vA: e,
                id: d,
                zIndex: "top" == e ? 40 : "middle" == e ? 4 : 3,
              },
              layertype: null,
              newIDs: n,
              sid: r,
              msource: o,
              global: a.global,
            }));
      return SR7.M[i].migrate && (c = SR7.migrate.fixPos(c)), c;
    }),
      (SR7.D.layerObject = function (e) {
        let {
          dLEN: t,
          id: s,
          obj: i,
          layertype: a = "",
          newIDs: r,
          sid: o,
          msource: l,
          global: n,
          ISEMPTY: d,
          usedAddons: c,
        } = e;
        const p = d && c;
        var h =
          s && SR7.M[s].migrate
            ? SR7.migrate.LayerObj({
                dLEN: t,
                o: i,
                newIDs: r,
                sid: o,
                msource: l,
                global: n,
              })
            : i ?? {};
        let u;
        a = h.type ?? a;
        let m = h.subtype ?? "";
        "image" == a &&
          "100% 100%" == h.content?.size &&
          (h.content.size = "cover");
        var g = {
          addOns: h.addOns ?? {},
          rTo: h.rTo ?? "",
          listen: h.listen,
          fluid: {
            tx: h.fluid?.tx ?? !1,
            tr: h.fluid?.tr ?? !1,
            sp: h.fluid?.sp ?? !1,
          },
          id: h.id ?? "",
          alias: h.alias ?? "",
          type: "image" == a || "video" == a ? "shape" : a,
          subtype:
            "image" == a
              ? "image"
              : "video" == a || "video" == m
              ? "video"
              : h.subtype ?? "",
          content: "image" == a ? {} : SR7.D.contentOBJ(a, h.content),
          mF: h.mF ?? "none",
          blend: h.blend ?? "normal",
          tag: h.tag ?? "sr7-layer",
          href: "a" == h.tag ? h.href ?? void 0 : void 0,
          target:
            "a" == h.tag
              ? Array.isArray(h.target)
                ? h.target[0]
                : h.target ?? void 0
              : void 0,
          rel: "a" == h.tag ? h.rel ?? void 0 : void 0,
          libSrc: h.libSrc ?? "",
          runtime: h.runtime ?? {},
          size: {
            w: h.size?.w ?? ["#a", "auto", "#a", "#a", "#a"],
            h: h.size?.h ?? ["#a", "auto", "#a", "#a", "#a"],
            maxW: h.size?.maxW ?? ["none", "none", "none", "none", "none"],
            maxH: h.size?.maxH ?? ["none", "none", "none", "none", "none"],
            minW: h.size?.minW ?? ["#a", "auto", "#a", "#a", "#a"],
            minH: h.size?.minH ?? ["#a", "auto", "#a", "#a", "#a"],
            cMode: h.size?.cMode ?? "custom",
            sProp: h.size?.sProp ?? !1,
          },
          pos: {
            x: h.pos?.x ?? ["#a", 0, "#a", "#a", "#a"],
            y: h.pos?.y ?? ["#a", 0, "#a", "#a", "#a"],
            h: h.pos?.h ?? ["left", "left", "left", "left", "left"],
            v: h.pos?.v ?? ["top", "top", "top", "top", "top"],
            pos:
              "row" == h.subtype || "column" == h.subtype
                ? "relative"
                : h.pos?.pos ?? void 0,
            float: h.pos?.float ?? "none",
            clear: h.pos?.clear ?? "none",
          },
          pid: Number(h.pid ?? -1),
          pE: h.pE ?? "auto",
          uS: h.uS ?? "default",
          zIndex: Number(h.zIndex ?? 5),
          order: h.order ?? 5,
          style: h.style ?? "",
          display: h.display ?? ["#a", "block", "#a", "#a", "#a"],
          vA: h.vA ?? ["top", "top", "top", "top", "top"],
          oflow: h.oflow ?? "visible",
          cursor: h.cursor ?? "cursor",
          bg: {
            color: h.bg?.color ?? "transparent",
            bClip: h.bg?.bClip ?? "none",
            tFCol: h.bg?.tFCol ?? "none",
            image:
              "" !== (h.bg?.image?.src ?? "") || h.bg?.image?.fromStream
                ? SR7.D.contentOBJ("image", h.bg?.image ?? {})
                : "image" == a
                ? SR7.D.contentOBJ("image", h.content)
                : void 0,
            video:
              "" !== (h.bg?.video?.src ?? "") || h.bg?.video?.fromStream
                ? SR7.D.contentOBJ("video", h.bg?.video ?? {})
                : "video" == a
                ? SR7.D.contentOBJ("video", h.content)
                : void 0,
          },
          attr: {},
          tl: {},
        };
        if (
          ("slidebg" !== g.subtype &&
            "shape" == g.type &&
            ("" == (g.bg?.video?.src ?? "") &&
            "" !== (g.bg?.image?.src ?? "") &&
            (!g.subtype ||
              "image" == g.subtype ||
              "video" == g.subtype ||
              g.subtype?.length < 6)
              ? (g.subtype = "image")
              : "shape" == g.type &&
                "" !== (g.bg?.video?.src ?? "") &&
                (!g.subtype ||
                  "image" == g.subtype ||
                  "video" == g.subtype ||
                  g.subtype?.length < 6) &&
                (g.subtype = "video"),
            ("cover" != g.size.cMode && "cover-proportional" != g.size.cMode) ||
              ((g.size.cMode = "custom"),
              (g.size.w = ["#a", "100%", "#a", "#a", "#a"]),
              (g.size.h = ["#a", "100%", "#a", "#a", "#a"]))),
          "column" == g.subtype && (g.size.col = h.size.col ?? "1/3"),
          SR7.E.backend &&
            (g.rTo =
              "slidebg" == h.subtype
                ? "slide"
                : "" == g.rTo
                ? "row" == h.subtype
                  ? "slide"
                  : "cfc"
                : g.rTo),
          (SR7.E.backend || void 0 !== h.vis) && (g.vis = h.vis),
          (SR7.E.backend || void 0 !== h.viSH) && (g.viSH = h.viSH),
          (SR7.E.backend || void 0 !== h.viOC) && (g.viOC = h.viOC),
          SR7.E.backend && "fullinset" !== g.size.cMode)
        ) {
          let e;
          for (e in g.pos.x) g.pos.x[e] = "auto" == g.pos.x[e] ? 0 : g.pos.x[e];
          for (e in g.pos.y) g.pos.y[e] = "auto" == g.pos.y[e] ? 0 : g.pos.y[e];
        }
        for (var f of (void 0 !== h.break && (g.break = h.break),
        void 0 !== h.sStart && (g.sStart = h.sStart),
        void 0 !== h.sEnd && (g.sEnd = h.sEnd),
        void 0 !== h.sZ && (g.sZ = h.sZ),
        ["p", "m"]))
          for (u of ["t", "b", "l", "r"]) {
            let e = !1;
            for (var v = 0; v < 5; v++)
              (SR7.E.backend || h[f]?.[u]) &&
                (g[f] ??= {}) &&
                (g[f][u] ??= Array(5)) &&
                (g[f][u][v] = 0 == h[f]?.[u]?.[v] ? 0 : h[f]?.[u]?.[v] || "#a"),
                "#a" !== g?.[f]?.[u]?.[v] && (e = !0);
            e ||
              (!SR7.E.backend && !h[f]?.[u]) ||
              (g[f][u][1] =
                "#a" == g[f][u][1]
                  ? 0
                  : void 0 !== g[f][u][1]
                  ? g[f][u][1]
                  : 0);
          }
        h.tr?.rX && (g.tr = g.tr || {}) && (g.tr.rX = h.tr?.rX || 0),
          h.tr?.rY && (g.tr = g.tr || {}) && (g.tr.rY = h.tr?.rY || 0),
          h.tr?.rZ && (g.tr = g.tr || {}) && (g.tr.rZ = h.tr?.rZ || 0),
          h.tr?.o && (g.tr = g.tr || {}) && (g.tr.o = h.tr?.o || 0),
          g.tr && (g.tr.fix = h.tr?.fix || "d"),
          (SR7.E.backend || h.mod?.s?.u || h.mod?.s?.ut || h.mod?.s?.uf) &&
            ((g.mod ??= { mask: h.mod?.mask ?? !1 }),
            (g.mod.s = {
              u: h.mod?.s?.u ?? !1,
              x: h.mod?.s?.x ?? 0,
              y: h.mod?.s?.y ?? 20,
              s: h.mod?.s?.s ?? 0,
              e: h.mod?.s?.e ?? "power3.out",
              ut: h.mod?.s?.ut ?? !1,
              so: h.mod?.s?.so ?? 0,
              rX: h.mod?.s?.rX ?? 0,
              rY: h.mod?.s?.rY ?? 0,
              rZ: h.mod?.s?.rZ ?? 0,
              sc: h.mod?.s?.sc ?? 1,
              uf: h.mod?.s?.uf ?? !1,
              b: h.mod?.s?.b ?? 0,
              g: h.mod?.s?.g ?? 1,
              f: h.mod?.s?.f ?? 1,
              d: h.mod?.s?.d ?? "b",
              t: h.mod?.s?.t ?? 0,
            })),
          (SR7.E.backend || h.mod?.m?.u || h.mod?.m?.aBG) &&
            ((g.mod ??= { mask: h.mod?.mask ?? !1 }),
            (g.mod.m = {
              u: h.mod?.m?.u ?? !1,
              aBG: h.mod?.m?.aBG ?? !1,
              x: h.mod?.m?.x ?? 20,
              y: h.mod?.m?.y ?? 20,
              s: h.mod?.m?.s ?? 0,
              e: h.mod?.m?.e ?? "power3.out",
              o: h.mod?.m?.o ?? "c",
            })),
          void 0 !== h.px && (g.px = { ...h.px }),
          (SR7.E.backend || "none" !== (h.overlay?.type ?? "none")) &&
            (g.overlay = {
              type: h.overlay?.type ?? "none",
              size: h.overlay?.size ?? 1,
              cA: h.overlay?.cA ?? "transparent",
              cB: h.overlay?.cB ?? "#000000",
            }),
          SR7.E.backend && (g.size.oW = h.size?.oW || 0),
          SR7.E.backend && (g.size.oH = h.size?.oH || 0),
          SR7.E.backend &&
            (g.size.aRatio = h.size?.aRatio || [
              "#a",
              "auto",
              "#a",
              "#a",
              "#a",
            ]),
          (h.attr ??= {}),
          (SR7.E.backend || "" !== (h.attr?.a || "")) &&
            (g.attr.a = h.attr?.a || ""),
          (SR7.E.backend || "" !== (h.attr?.aO || "")) &&
            (g.attr.aO = h.attr?.aO || "ml"),
          (SR7.E.backend || "" !== (h.attr?.id || "")) &&
            (g.attr.id = h.attr?.id || ""),
          (SR7.E.backend || "" !== (h.attr?.class || "")) &&
            (g.attr.class = h.attr?.class || ""),
          (SR7.E.backend || "" !== (h.attr?.rel || "")) &&
            (g.attr.rel = h.attr?.rel || ""),
          (SR7.E.backend || "" !== (h.attr?.tabIndex || "")) &&
            (g.attr.tabIndex = h.attr?.tabIndex || 0),
          (SR7.E.backend || "" !== (h.attr?.t || "")) &&
            (g.attr.t = h.attr?.t || ""),
          (SR7.E.backend || "" !== (h.attr?.tO || "")) &&
            (g.attr.tO = h.attr?.tO || "ml"),
          (SR7.E.backend || "" !== (h.attr?.wrapClass || "")) &&
            (g.attr.wrapClass = h.attr?.wrapClass || ""),
          (SR7.E.backend || "" !== (h.attr?.wrapId || "")) &&
            (g.attr.wrapId = h.attr?.wrapId || ""),
          (SR7.E.backend || "" !== (h.attr?.iClass || "")) &&
            (g.attr.iClass = h.attr?.iClass || "");
        let y = (h.hov ??= {});
        if (
          (!1 !== (h.hov.u ?? !1) &&
            (g.hov = {
              u: y.u,
              m: y.m ?? !1,
              deco: y.deco ?? "none",
              zIndex: y.zIndex ?? "auto",
              color: {
                c: y.color.c ?? "#ffffff",
                bg: y.color.bg ?? "transparent",
                gAnim: y.color.gAnim ?? "fading",
              },
              border: {
                c: y.border.c ?? "transparent",
                s: y.border.s ?? "none",
                w: {
                  t: y.border.w?.t ?? 0,
                  r: y.border.w?.r ?? 0,
                  b: y.border.w?.b ?? 0,
                  l: y.border.w?.l ?? 0,
                },
              },
              radius: {
                t: y.radius?.t ?? 0,
                r: y.radius?.r ?? 0,
                b: y.radius?.b ?? 0,
                l: y.radius?.l ?? 0,
              },
              frame: {
                o: y.frame.o ?? 1,
                oX: y.frame.oX ?? "50%",
                oY: y.frame.oY ?? "50%",
                oZ: y.frame.oZ ?? "50%",
                x: y.frame.x ?? 0,
                y: y.frame.y ?? 0,
                z: y.frame.z ?? 0,
                rZ: y.frame.rZ ?? 0,
                rX: y.frame.rX ?? 0,
                rY: y.frame.rY ?? 0,
                sX: y.frame.sX ?? 1,
                sY: y.frame.sY ?? 1,
                skX: y.frame.skX ?? 1,
                skY: y.frame.skY ?? 1,
                d: y.frame.d ?? 300,
                e: y.frame.e ?? "power3.inOut",
              },
              filter: {
                g: y.filter?.g ?? 0,
                r: y.filter?.r ?? 100,
                b: y.filter?.b ?? 0,
              },
              svg: {
                c: y.svg.c ?? "#ffffff",
                stroke: {
                  c: y.svg.stroke.c ?? "transparent",
                  d: y.svg.stroke.d ?? 0,
                  o: y.svg.stroke.o ?? 0,
                  w: y.svg.stroke.w ?? 0,
                },
              },
            }),
          ("text" != a && "container" != a) ||
            (g.tA = h.tA ?? ["left", "left", "left", "left", "left"]),
          ("text" != a && "row" != g.subType && "column" != g.subType) ||
            (g.ws =
              h.ws ??
              ("container" == g.type
                ? ["normal", "normal", "normal", "normal", "normal"]
                : ["full", "full", "full", "full", "full"])),
          ("" === (h.codes?.css ?? "") && "" === (h.codes?.hovercss ?? "")) ||
            (g.codes = {
              css: h.codes?.css ?? "",
              hovercss: h.codes?.hovercss ?? "",
            }),
          (SR7.E.backend || h.bShdw?.use) &&
            (g.bShdw = {
              use: h.bShdw?.use ?? !1,
              on: "content",
              h: h.bShdw?.h ?? [0, 0, 0, 0, 0],
              v: h.bShdw?.v ?? [0, 0, 0, 0, 0],
              blur: h.bShdw?.blur ?? [0, 0, 0, 0, 0],
              spread: h.bShdw?.spread ?? [0, 0, 0, 0, 0],
              color: h.bShdw?.color ?? "rgba(0,0,0,0.25)",
            }),
          SR7.E.backend || (void 0 !== h.border && void 0 !== h.border.s))
        ) {
          var S = SR7.E.backend;
          if (
            ((h.border ??= {}),
            (h.border.s ??= ["none", "none", "none", "none", "none"]),
            !S)
          )
            for (var b = 0; b < 5; b++) S = S || "none" !== h.border.s[b];
          for (u of ((g.border = {
            s: h.border.s,
            c: h.border?.c ?? "transparent",
          }),
          SR7.D.DS))
            (SR7.E.backend || h.border?.w?.[u]) &&
              (g.border.w = g.border.w || {}) &&
              (g.border.w[u] = h.border?.w?.[u] || 0);
        }
        if (SR7.E.backend || void 0 !== h.radius)
          for (u of SR7.D.DS)
            (SR7.E.backend || h.radius?.[u]) &&
              (g.radius ??= {}) &&
              (g.radius[u] = h.radius?.[u] || 0);
        for (var R in ("text" == a &&
          ((SR7.E.backend || h.tShdw?.use) &&
            (g.tShdw = {
              use: h.tShdw?.use ?? !1,
              h: h.tShdw?.h ?? [0, 0, 0, 0, 0],
              v: h.tShdw?.v ?? [0, 0, 0, 0, 0],
              blur: h.tShdw?.blur ?? [0, 0, 0, 0, 0],
              color: h.tShdw?.color ?? "rgba(0,0,0,0.25)",
            }),
          (SR7.E.backend || h.tStroke?.use) &&
            (g.tStroke = {
              use: h.tStroke?.use ?? !1,
              w: h.tStroke?.w ?? [1, 1, 1, 1, 1],
              c: h.tStroke?.c ?? "rgba(0,0,0,0.25)",
            }),
          (g.color = h.color ?? ["#a", "#ffffff", "#a", "#a", "#a"]),
          (g.font = {
            family: h.font?.family ?? "Roboto",
            style: h.font?.style ?? !1,
            size: h.font?.size ?? ["#a", "20", "#a", "#a", "#a"],
            weight: h.font?.weight ?? ["#a", "400", "#a", "#a", "#a"],
            ls: h.font?.ls ?? ["#a", "0", "#a", "#a", "#a"],
          }),
          (g.font?.family ?? "").includes(" ") &&
            (g.font.family = "'" + g.font.family + "'"),
          (SR7.E.backend || 1 == (h.tog?.u ?? !1)) &&
            (g.tog = {
              t: h?.tog?.t ?? "",
              u: h?.tog?.u ?? !1,
              h: h?.tog?.h ?? !1,
              i: h?.tog?.i ?? !1,
            }),
          SR7.M[s].migrate &&
            SR7.D.collectModulFont(g.font, s, g.content.text)),
        ("text" != a && "container" != a) ||
          (g.lh = h.lh ?? ["#a", "25", "#a", "#a", "#a"]),
        (SR7.E.backend || h.spike?.use) &&
          (g.spike = {
            use: h.spike?.use ?? !1,
            l: h.spike?.l ?? "none",
            r: h.spike?.r ?? "none",
            lw: h.spike?.lw ?? 10,
            rw: h.spike?.rw ?? 10,
          }),
        h.tl))
          if (_tpt.hop(h.tl, R))
            for (var w in ((g.tl[R] ??= {}), h.tl[R]))
              _tpt.hop(h.tl[R], w) &&
                ((g.tl[R] ??= {}),
                (g.tl[R][w] =
                  "bg" == w && "in" == R
                    ? SR7.D.getBGAnim(h.tl[R][w])
                    : SR7.D.layerTLObject(h.tl[R][w], w)));
        if (
          ("text" == g.type &&
            ((SR7.M[s].icons ??= {}),
            (SR7.M[s].settings?.fonts?.FontAwesome ||
              (g.content.text.includes("<i") &&
                (g.content.text.includes('class="fa-') ||
                  g.content.text.includes("class='fa-")))) &&
              (SR7.M[s].settings.fonts.FontAwesome = !0),
            (SR7.M[s].settings?.fonts?.PeIcon ||
              (g.content.text.includes("<i") &&
                (g.content.text.includes('class="pe-7') ||
                  g.content.text.includes("class='pe-7")))) &&
              (SR7.M[s].settings.fonts.PeIcon = !0),
            (SR7.M[s].settings?.fonts?.Materialicons ||
              g.content.text.includes("material-icons")) &&
              (SR7.M[s].settings.fonts.Materialicons = !0)),
          void 0 !== SR7.M[s] && void 0 !== SR7.M[s].imgList)
        )
          for (let e in SR7.M[s].imgList)
            _tpt.hop(SR7.M[s].imgList, e) &&
              (_tpt.compareURL(SR7.M[s].imgList[e].old, g.content?.src) &&
                (g.content.src = SR7.M[s].imgList[e].new),
              _tpt.compareURL(
                SR7.M[s].imgList[e].old,
                g?.content?.image?.src
              ) && (g.content.image.src = SR7.M[s].imgList[e].new),
              _tpt.compareURL(SR7.M[s].imgList[e].old, g.bg?.src) &&
                (g.bg.src = SR7.M[s].imgList[e].new),
              _tpt.compareURL(SR7.M[s].imgList[e].old, g.bg?.image?.src) &&
                (g.bg.image.src = SR7.M[s].imgList[e].new));
        if (
          (("video" == g.subtype || g.bg.video || "audio" == g.type) &&
            ((SR7.R ??= {}), (SR7.R.media = !0)),
          ("text" != g.type && "button" != g.type) ||
            (((g.attr?.iClass ?? "").includes("sr7-btn") ||
              (g.attr?.iClass ?? "").includes("sr7-scroll-btn") ||
              (g.attr?.iClass ?? "").includes("sr7-brg") ||
              (g.text?.content ?? "").includes("sr7-btn") ||
              (g.text?.content ?? "").includes("sr7-scroll-btn") ||
              (g.text?.content ?? "").includes("sr7-brg")) &&
              ((SR7.R ??= {}), (SR7.R.cssbtns = !0))),
          p)
        )
          for (let e in SR7.A)
            _tpt.hop(SR7.A, e) &&
              SR7.A[e]?.getLayerBasics &&
              c.includes(e) &&
              ((g.addOns ??= {}),
              (g.addOns[e] = SR7.A[e].getLayerBasics({}, "compare")));
        return g;
      }),
      (SR7.D.registerModuleFonts = function (e) {
        for (var t in SR7.M[e].settings.fonts)
          if (_tpt.hop(SR7.M[e].settings.fonts, t)) {
            var s = SR7.M[e].settings.fonts[t];
            if (_tpt.R.fonts?.customs?.[t])
              _tpt.registerFont({
                family:
                  _tpt.R.fonts.customs[t].family ??
                  s.name ??
                  _tpt.fontFamily(t, !0),
                url: _tpt.R.fonts.customs[t],
              });
            else if ("FontAwesome" == t)
              _tpt.registerFont({
                family: "FontAwesome",
                url:
                  SR7.E.plugin_url +
                  "public/css/fonts/font-awesome/css/font-awesome.css",
              });
            else if ("Materialicons" == t)
              _tpt.registerFont({
                family: "Materialicons",
                url:
                  SR7.E.plugin_url +
                  "public/css/fonts/material/material-icons.css",
              });
            else if ("PeIcon" == t)
              _tpt.registerFont({
                family: "Pe-icon-7-stroke",
                url:
                  SR7.E.plugin_url +
                  "public/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css",
              });
            else if ("RevIcon" == t)
              _tpt.registerFont({
                family: "revicons",
                url:
                  SR7.E.plugin_url +
                  "public/css/fonts/revicons/css/revicons.css",
              });
            else
              for (var i of ["italic", "normal"])
                if (null != s[i])
                  for (var a in s[i])
                    _tpt.hop(s[i], a) &&
                      _tpt.registerFont({
                        family: s.name ?? _tpt.fontFamily(t, !0),
                        url: s.url,
                        italic: "italic" == i,
                        weight: a,
                      });
          }
      }),
      (SR7.D.checkSubsets = function (e = "") {
        const t = {};
        for (let s = 0; s < e.length; s++) {
          const i = e.charCodeAt(s);
          for (const e in SR7.D.subsets)
            i >= SR7.D.subsets[e].start &&
              i <= SR7.D.subsets[e].end &&
              (t[e] = !0);
        }
        return t;
      }),
      (SR7.D.collectModulFont = function (e, t, s) {
        let i =
          "undefined" != typeof RVS &&
          (((e, t) => {
            if (window.RVS?.LIB?.FONTS)
              for (var s in RVS.LIB.FONTS)
                if (
                  RVS.LIB.FONTS[s].label == e &&
                  (t || "googlefont" == RVS.LIB.FONTS[s].type)
                )
                  return RVS.LIB.FONTS[s];
          })(e.family, !0) ??
            void 0);
        if (
          window?.RVS?.LIB?.FONTS &&
          void 0 === _tpt?.R?.fonts?.customs &&
          _tpt.fontFamily &&
          ((_tpt.R ??= {}),
          (_tpt.R.fonts ??= {}),
          (_tpt.R.fonts.customs = RVS.LIB.FONTS.filter(
            (e) => "custom" === e.type
          )),
          _tpt.R.fonts.customs.length > 0)
        )
          for (let e in _tpt.R.fonts.customs)
            _tpt.R.fonts.customs[e].family = _tpt
              .fontFamily(_tpt.R.fonts.customs[e].label)
              .replaceAll("'", "");
        if (null == SR7.M[t]) return;
        SR7.M[t].settings.fonts ??= {};
        let a = _tpt.fontFamily(e.family);
        (a = a.replace("''", "'")),
          (SR7.M[t].settings.fonts[a] ??= { name: e.family }),
          i?.url && (SR7.M[t].settings.fonts[a].url = i?.url),
          (SR7.M[t].settings.fonts[a][e.style ? "italic" : "normal"] ??= {}),
          (SR7.M[t].settings.fonts[a].subset = SR7.D.checkSubsets(s));
        let r = a.replaceAll("'", "");
        (_tpt.R.fonts?.customs?.length ?? 0) > 0 &&
          _tpt.R.fonts.customs.filter((e) => e.family === r).length > 0 &&
          (SR7.M[t].settings.fonts[a].custom = !0);
        for (var o = 0; o < 5; o++)
          "auto" !== e.weight[o] &&
            (SR7.M[t].settings.fonts[a][e.style ? "italic" : "normal"][
              e.weight[o]
            ] = !0);
      }),
      (SR7.D.collectModulFonts = function (e) {
        for (var t in ((SR7.M[e].settings.fonts = {}), SR7.M[e].slides))
          if (_tpt.hop(SR7.M[e].slides, t))
            for (var s in SR7.M[e].slides[t].layers)
              _tpt.hop(SR7.M[e].slides[t].layers, s) &&
                "text" === SR7.M[e].slides[t].layers[s].type &&
                SR7.D.collectModulFont(
                  SR7.M[e].slides[t].layers[s].font,
                  e,
                  SR7.M[e].slides[t].layers[s].content.text
                );
      }),
      (SR7.D.layerTLObject = function (e = {}, t) {
        var s =
          "filter" == t || "mask" == t
            ? {}
            : "clip" == t
            ? { orig: e?.orig ?? "l", type: e?.type ?? "r" }
            : {
                pers: e.pers ?? 600,
                orig: {
                  x: e?.orig?.x ?? "50%",
                  y: e?.orig?.y ?? "50%",
                  z: e?.orig?.z ?? "0",
                },
              };
        for (var i in e)
          if (_tpt.hop(e, i) && "orig" != i && "type" != i && "pers" != i) {
            s[i] = SR7.backend ? Array(e[i].length) : [];
            for (var a = 0; a < e[i].length; a++)
              s[i].push(SR7.D.getKeyFrame(e[i][a], t, i));
          }
        return s;
      }),
      (SR7.D.getKeyFrame = function (e = {}, t = "content", s = "all") {
        var i = {
          t: e?.t ?? 300,
          d: e?.d ?? 300,
          f: e?.f ?? 300,
          e: e?.e ?? "power3.inOut",
        };
        if (("content" == t && (i.pE = e.pE ?? "d"), void 0 !== e.addOns))
          for (var a in ((i.addOns = {}), e.addOns))
            _tpt.hop(e.addOns, a) && (i.addOns[a] = e.addOns[a]);
        return (
          null != e.x && (i.x = e.x ?? 0),
          null != e.y && (i.y = e.y ?? 0),
          void 0 !== e.anchors && (i.anchors = e.anchors),
          void 0 !== e.curv && (i.curv = e.curv),
          null != e[s] && (i[s] = e[s]),
          void 0 !== e.rep &&
            (i.rep = {
              s: e.rep.s,
              r: e.rep.r ?? -1,
              sh: e.rep.sh ?? !1,
              y: e.rep.y ?? !1,
              c: e.rep.c ?? !1,
            }),
          "mask" !== t &&
            "filter" !== t &&
            "clip" !== t &&
            (null != e.z && (i.z = e.z),
            null != e.sX && (i.sX = e.sX),
            null != e.sY && (i.sY = e.sY),
            null != e.skX && (i.skX = e.skX),
            null != e.skY && (i.skY = e.skY),
            null != e.o && (i.o = e.o),
            null != e.rX && (i.rX = e.rX ?? 0),
            null != e.rY && (i.rY = e.rY),
            null != e.rZ && (i.rZ = e.rZ),
            null != e.fb && (i.fb = e.fb),
            null != e.fgs && (i.fgs = e.fgs),
            null != e.fbr && (i.fbr = e.fbr),
            void 0 !== e.bgcol && (i.bgcol = e.bgcol),
            void 0 !== e.col && (i.col = e.col)),
          "content" == t &&
            void 0 !== e.fx &&
            ((i.fx = e.fx),
            (i.fxc = e.fxc ?? "#ffffff"),
            (i.fxe = e.fxe ?? i.e),
            (i.fxs = e.fxs ?? i.t)),
          "mask" == t && void 0 !== e.oflow && (i.oflow = e.oflow),
          ("filter" == t || ("loop" == t && "filter" == s)) &&
            (null != e.fu && (i.fu = e.fu),
            i.fu &&
              (null != e.b && (i.b = e.b),
              null != e.g && (i.g = e.g),
              null != e.r && (i.r = e.r)),
            null != e.bu && (i.bu = e.bu),
            void 0 !== i.bu &&
              (null != e.bb && (i.bb = e.bb),
              null != e.bg && (i.bg = e.bg),
              null != e.br && (i.br = e.br),
              null != e.bs && (i.bs = e.bs),
              null != e.bi && (i.bi = e.bi)),
            void 0 !== e.repeat && (i.repeat = e.repeat)),
          SR7.D.splits.indexOf(t) >= 0 &&
            (void 0 !== e.fu && (i.fu = e.fu),
            e.fu &&
              (null != e.b && (i.b = e.b),
              null != e.g && (i.g = e.g),
              null != e.r && (i.r = e.r)),
            (i.dir = e.dir ?? "start"),
            (i.delay = e.delay ?? 5)),
          "clip" == t &&
            (void 0 !== e.c && (i.c = e.c), void 0 !== e.cb && (i.cb = e.cb)),
          "filter" !== t &&
            "clip" !== t &&
            "loop" !== t &&
            (void 0 !== e.xRe && (i.xRe = parseInt(e.xRe)),
            void 0 !== e.yRe && (i.yRe = parseInt(e.yRe)),
            (i.off = e.off ?? 0)),
          i
        );
      }),
      (SR7.D.getBGAnim = function (e = {}) {
        null == e && (e = {});
        var t = {};
        if (
          ((t.ms = e?.ms ?? e?.speed ?? 1e3),
          (t.rnd =
            e.preset || e.main
              ? (e.preset ?? "").toLowerCase().startsWith("rnd") ||
                (e.main ?? "").toLowerCase().includes("random")
              : "true" == String(e.random) || "true" == String(e.rnd)),
          t.rnd || "true" == t.rnd)
        )
          return (t.rnd = !0), (t.rndmain = e.rndmain ?? e.rndmain ?? ""), t;
        (t.temp = {
          t: e?.temp?.t ?? e.title ?? "",
          p: e?.temp?.p ?? e.preset ?? "",
          m: e?.temp?.m ?? e.main ?? "",
          g: e?.temp?.g ?? e.group ?? "",
        }),
          (t.addOns = e?.addOns ?? e.addOns ?? {}),
          (SR7.E.backend || void 0 !== e.o) && (t.o = e.o ?? "inout"),
          (SR7.E.backend || void 0 !== e.e) && (t.e = e.e ?? "basic"),
          (SR7.E.backend || void 0 !== e.f) && (t.f = e.f ?? "start"),
          (SR7.E.backend || void 0 !== e.s) && (t.s = e.s ?? 1e3),
          (SR7.E.backend || void 0 !== e.p) && (t.p = e.p ?? "none"),
          (SR7.E.backend || void 0 !== e.d) && (t.d = e.d ?? 15),
          (SR7.E.backend || void 0 !== e.eng) &&
            (t.eng = e.eng ?? "animateCore"),
          (SR7.E.backend || void 0 !== e.adpr) && (t.adpr = e.adpr ?? !0),
          (SR7.E.backend || void 0 !== e.d3) &&
            ((e.d3 ??= {}),
            (t.d3 ??= {}),
            (SR7.E.backend || void 0 !== e.d3.f) && (t.d3.f = e.d3.f ?? "none"),
            (SR7.E.backend || void 0 !== e.d3.d) &&
              (t.d3.d = e.d3.d ?? "horizontal"),
            (SR7.E.backend || void 0 !== e.d3.z) && (t.d3.z = e.d3.z ?? 300),
            (SR7.E.backend || void 0 !== e.d3.t) && (t.d3.t = e.d3.t ?? 0),
            (SR7.E.backend || void 0 !== e.d3.c) && (t.d3.c = e.d3.c ?? "#ccc"),
            (SR7.E.backend || void 0 !== e.d3.e) &&
              (t.d3.e = e.d3.e ?? "power2.inOut"),
            (SR7.E.backend || void 0 !== e.d3.fdi) &&
              (t.d3.fdi = e.d3.fdi ?? 1.5),
            (SR7.E.backend || void 0 !== e.d3.fdo) &&
              (t.d3.fdo = e.d3.fdo ?? 2),
            (SR7.E.backend || void 0 !== e.d3.fz) && (t.d3.fz = e.d3.fz ?? 0),
            (SR7.E.backend || void 0 !== e.d3.su) && (t.d3.su = e.d3.su ?? !1),
            (SR7.E.backend || void 0 !== e.d3.smi) &&
              (t.d3.smi = e.d3.smi ?? 0),
            (SR7.E.backend || void 0 !== e.d3.sma) &&
              (t.d3.sma = e.d3.sma ?? 0.5),
            (SR7.E.backend || void 0 !== e.d3.sc) &&
              (t.d3.sc = e.d3.sc ?? "#000"),
            (SR7.E.backend || void 0 !== e.d3.sl) && (t.d3.sl = e.d3.sl ?? 1)),
          (SR7.E.backend || void 0 !== e.filter) &&
            ((e.filter ??= {}),
            (t.filter ??= {}),
            (SR7.E.backend || void 0 !== e.filter.u) &&
              (t.filter.u = e.filter.u ?? !1),
            (SR7.E.backend || void 0 !== e.filter.e) &&
              (t.filter.e = e.filter.e ?? "default"),
            (SR7.E.backend || void 0 !== e.filter.b) &&
              (t.filter.b = e.filter.b ?? 0),
            (SR7.E.backend || void 0 !== e.filter.g) &&
              (t.filter.g = e.filter.g ?? 0),
            (SR7.E.backend || void 0 !== e.filter.h) &&
              (t.filter.h = e.filter.h ?? 100),
            (SR7.E.backend || void 0 !== e.filter.s) &&
              (t.filter.s = e.filter.s ?? 0),
            (SR7.E.backend || void 0 !== e.filter.c) &&
              (t.filter.c = e.filter.c ?? 100),
            (SR7.E.backend || void 0 !== e.filter.i) &&
              (t.filter.i = e.filter.i ?? 0));
        for (let s of ["in", "out"])
          (e[s] ??= {}),
            ("in" != s && "out" != s) ||
              (!SR7.E.backend && void 0 === e[s]) ||
              ((t[s] ??= {}),
              (SR7.E.backend || void 0 !== e[s].o) && (t[s].o = e[s].o ?? 1),
              (SR7.E.backend || void 0 !== e[s].x) && (t[s].x = e[s].x ?? 0),
              (SR7.E.backend || void 0 !== e[s].y) && (t[s].y = e[s].y ?? 0),
              (SR7.E.backend || void 0 !== e[s].r) && (t[s].r = e[s].r ?? 0),
              (SR7.E.backend || void 0 !== e[s].sx) && (t[s].sx = e[s].sx ?? 1),
              (SR7.E.backend || void 0 !== e[s].sy) && (t[s].sy = e[s].sy ?? 1),
              (SR7.E.backend || void 0 !== e[s].m) && (t[s].m = e[s].m ?? !1),
              (SR7.E.backend || void 0 !== e[s].e) &&
                (t[s].e = e[s].e ?? "power2.inOut"),
              (SR7.E.backend || void 0 !== e[s].row) &&
                (t[s].row = e[s].row ?? 1),
              (SR7.E.backend || void 0 !== e[s].col) &&
                (t[s].col = e[s].col ?? 1),
              "in" == s
                ? ((SR7.E.backend || void 0 !== e[s].mo) &&
                    (t[s].mo = e[s].mo ?? 80),
                  (SR7.E.backend || void 0 !== e[s].mou) &&
                    (t[s].mou = e[s].mou ?? !1),
                  (SR7.E.backend || void 0 !== e[s].moo) &&
                    (t[s].moo = e[s].moo ?? !1))
                : (SR7.E.backend || void 0 !== e.out.a) &&
                  (t[s].a = e[s].a ?? "true"));
        return (
          (SR7.E.backend || void 0 !== e.addOns) &&
            (t.addOns = e.addOns ?? SR7.D.getBGAnim_Addons()),
          t
        );
      }),
      (SR7.D.getBGAnim_Addons = function () {
        return {};
      }),
      (_tpt.R ??= {}),
      (_tpt.R.defaults = _tpt.extend
        ? _tpt.extend(_tpt.R.defaults, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F = SR7.F || {}),
      void 0 !== SR7.F.drawBG)
    )
      return;
    (SR7.F.drawBG = function (e, t, s, i = "canvas", a) {
      if (null == e || null == e) return {};
      let { c: r, skey: o } = SR7.F.getLayer
          ? SR7.F.getLayer(e.id)
          : { c: void 0, skey: void 0 },
        l = null == t.image;
      var n;
      if (
        (s &&
          ((e.style.background = ""),
          (e.style.backgroundImage = ""),
          (e.style.backgroundColor = "")),
        (l || "" == (t.image.src ?? "")) && ((t.color ??= "#000000"), (l = !0)),
        t.color &&
          ("canvas" === i && l
            ? "canvas" == i &&
              ((null != r && null != r.canvas) ||
                ((r ??= {}),
                (r.canvas = new SR7.F.canvas({
                  wrap: e,
                  color: t.color,
                  ctx: "2d",
                  overlay: t.overlay,
                }))),
              r.canvas.drawColored())
            : ("object" == typeof t.color &&
                (t.color = _tpt.gradient.process(t.color, !0)),
              s &&
                !r?.bgByCSS &&
                (e.style.background =
                  ("object" == typeof t.color ? t.color.string : t.color) +
                  ("none" !== (t.bClip ?? "none") ? " " + t.bClip : "")))),
        !l)
      )
        if ("bg" === i)
          (e.style.backgroundImage =
            "url('" +
            _tpt.urlProtocol(t.image.src.replaceAll(" ", "%e2%80%af")) +
            "')" +
            (e.style.backgroundImage.indexOf("gradient") >= 0
              ? "," + e.style.backgroundImage
              : "")),
            _tpt.gsap.set(e, {
              backgroundPosition:
                (t.image?.pos?.x ?? 0) + " " + (t.image?.pos?.y ?? 0),
              backgroundSize:
                "percentage" == t.image.size
                  ? parseInt(t.image.sizeVal ?? 100) + "%"
                  : "pixel" == t.image.size
                  ? parseInt(t.image.sizeVal ?? 100) + "px"
                  : t.image.size,
              backgroundRepeat: t.image.repeat,
            });
        else if ("element" === i) {
          var d = document.createElement("sr-container");
          e.insertBefore(d, e.children[0]),
            (d.style.backgroundImage =
              "url('" +
              _tpt.urlProtocol(t.image.src.replaceAll(" ", "%e2%80%af")) +
              "')" +
              +(d.style.backgroundImage.indexOf("gradient") >= 0
                ? "," + d.style.backgroundImage
                : "")),
            _tpt.gsap.set(d, {
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundPosition: t.image.pos.x + " " + t.image.pos.y,
              backgroundSize:
                "percentage" == t.image.size
                  ? parseInt(t.image.sizeVal ?? 100) + "%"
                  : "pixel" == t.image.size
                  ? parseInt(t.image.sizeVal ?? 100) + "px"
                  : t.image.size,
              backgroundRepeat: t.image.repeat,
            });
        } else
          "canvas" === i &&
            "" !== t.image.src &&
            ((e.style.overflow = "hidden"),
            null == r || null == r.canvas || null == r.canvas.image
              ? ((r ??= {}),
                (r.canvas ??= new SR7.F.canvas({
                  wrap: e,
                  ctx: "2d",
                  create: !0,
                  overlay: t.overlay,
                  size: t.image.size,
                  pos: t.image.pos,
                  repeat: t.image.repeat,
                  sizeVal: t.image.sizeVal,
                })),
                (n = new Promise((s) => {
                  _tpt.registerImage(
                    t.image.src,
                    1,
                    function (e) {
                      requestAnimationFrame(function () {
                        try {
                          (r.canvas.image = e.image), r.canvas.drawImg();
                        } catch (e) {
                          console.log(e);
                        }
                        s();
                      });
                    },
                    e.id + "_" + Math.round(1e5 * Math.random()),
                    void 0,
                    t.image.crossOrigin
                  );
                })))
              : r.canvas.drawImg());
      return { canvas: r?.canvas?.canvas ?? void 0, promise: n, c: r };
    }),
      (SR7.F.attrId = (e) => ("" == e || null == e ? void 0 : e)),
      (SR7.F.drawRawLayers = function (e, t, s) {
        if (null == t || -1 == t) return;
        let i = SR7.M[e],
          a = i.slides[t].layers,
          r = i.c?.PO?.[t];
        if (null != r && null != i.zones[t]) {
          i.zones[t].cache = i.zones[t].all;
          for (let i in r)
            _tpt.hop(r, i) &&
              void 0 !== a[r[i]] &&
              SR7.F.drawRawLayer(
                SR7.F.attrId(a[r[i]].attr?.id) ??
                  e + "-" + t + "-" + a[r[i]].id,
                s,
                t
              );
          requestAnimationFrame(function () {
            SR7.F.getZoneHeights(e, t) !== i.zones[t].cache &&
              SR7.F.updateModuleDims(e, !0);
          });
        }
      });
    const e = (e, t, s) => {
        const i = parseFloat(e),
          a = "none" !== s ? parseFloat(s) : NaN,
          r = "none" !== t ? parseFloat(t) : NaN;
        return isNaN(i)
          ? e
          : !isNaN(a) && i < a
          ? s
          : !isNaN(r) && i > r
          ? t
          : e;
      },
      t = (e, t, s, i, a, r) =>
        t !==
        (s = _tpt.divSize(
          SR7.gV({ v: s, id: i, f: a, m: "round", s: "scale" })
        ))
          ? ((r.style[e] = s && "none" !== s ? s : ""), s)
          : t,
      s = (t, s, i, a, r, o) =>
        String(t).includes("%")
          ? ((e(parseFloat(o), a, r) * parseFloat(t)) / 100 / s) * i
          : isNaN(parseFloat(t))
          ? "auto"
          : (e(parseFloat(t), a, r) / s) * i;
    SR7.F.drawRawLayer = function (r, o, l, n) {
      var {
        layer: d,
        el: c,
        c: p,
        id: h,
        skey: u,
        lkey: m,
      } = SR7.F.getLayer(r);
      if ("hover" == p.cache?.hover?.requested) return;
      var g = SR7.M[h],
        f = [];
      let v, y;
      (p.LME = p.addonWrap
        ? "addonWrap"
        : p.parallax
        ? "parallax"
        : p.loop
        ? "loop"
        : p.mask
        ? "mask"
        : "el"),
        (p.target ??= "column" !== d.subtype ? p[p.LME] : c),
        SR7.E.backend &&
          (p.editVals ??= { con: {}, el: {}, row: {}, column: {} }),
        (p.useAsImage =
          "image" == d.subtype ||
          ("text" !== d.type &&
            "column" !== d.subtype &&
            "row" !== d.subtype &&
            "video" !== d.subtype &&
            "slidebg" !== d.subtype &&
            "" !== d?.bg?.image?.src &&
            d?.bg?.image?.src?.length > 3)),
        (p.minMaxCon ??=
          ("row" != d.subtype && "column" != d.subtype) || !p.con
            ? p.target
            : p.con);
      const S = _tpt.tf(d.fluid?.tr ?? void 0);
      let b = _tpt.divSize(
          SR7.gV({ v: d.size.w, id: h, f: S, m: "round", s: "scale" })
        ),
        R = _tpt.divSize(SR7.gV({ v: d.size.h, id: h, f: S, s: "scale" }));
      if ("auto" == b && "auto" == R && p.image)
        if (p.imgHeight && p.imgWidth) {
          (R = p.imgHeight * g.MP), (b = p.imgWidth * g.MP);
          let e =
              (p.par?.cw ?? 0) - ((p.par?._pLeft ?? 0) + (p.par?._pRight ?? 0)),
            t =
              (p.par?.ch ?? 0) - ((p.par?._pTop ?? 0) + (p.par?._pBottom ?? 0));
          b > e && e > 0
            ? ((b = e), (R = (p.imgHeight / p.imgWidth) * b))
            : R > t && t > 0 && ((R = t), (b = (p.imgWidth / p.imgHeight) * R));
        } else
          p.aspectRatio < 1
            ? ((b = "auto"), (R = "100%"))
            : ((b = "100%"), (R = "auto"));
      p.display = SR7.gV({ v: d.display, id: h });
      let w = !(
          ("prepare" != o &&
            "animated" === p.state &&
            "idle" != (p.cache?.color?.from ?? "idle")) ||
          (p.global &&
            "in" == p.gpos &&
            "idle" !== (p.cache?.color?.from ?? "idle") &&
            void 0 !== (p.cache?.color?.c ?? void 0))
        ),
        x = !(
          ("prepare" != o && "animated" === p.state) ||
          (p.global &&
            "in" == p.gpos &&
            "idle" !== (p.cache?.color?.bgfrom ?? "idle") &&
            void 0 !== (p.cache?.color?.bg ?? void 0))
        );
      if (
        ("text" == d.type &&
          ((c.style.fontFamily = d.font.family.replaceAll("'", "")),
          (("default" == d.uS && g.settings.uS) || "true" == String(d.uS)) &&
            (c.style.userSelect = "text"),
          "" == c.style.fontFamily &&
            (c.style.fontFamily =
              "'" + d.font.family.replaceAll("'", "") + "'"),
          "none" !== (d.bg.tFCol ?? "none") &&
            (c.style.webkitTextFillColor = d.bg.tFCol),
          (c.style.fontSize = SR7.gV({
            v: d.font.size,
            id: h,
            u: "px",
            f: d.fluid.tx,
            m: "round",
            s: "scale",
            a: !0,
          })),
          (c.style.fontWeight = SR7.gV({ v: d.font.weight, id: h, u: 0 })),
          w &&
            ((c.style.color = SR7.gV({ v: d.color, id: h })),
            SR7.F.cache(
              p.cache,
              "color",
              ["c", "from"],
              [c.style.color, "idle"]
            )),
          (c.style.textTransform = d.content.trans),
          (c.style.textDecoration = d.content.deco),
          (c.style.letterSpacing = SR7.gV({
            v: d.font.ls,
            id: h,
            u: "px",
            f: d.fluid.tx,
            s: "scale",
          })),
          void 0 !== d.tShdw &&
            d.tShdw.use &&
            (c.style.textShadow =
              SR7.gV({ v: d.tShdw.h, id: h, u: "px", f: d.fluid.tx }) +
              " " +
              SR7.gV({ v: d.tShdw.v, id: h, u: "px", f: d.fluid.tx }) +
              " " +
              SR7.gV({ v: d.tShdw.blur, id: h, u: "px", f: d.fluid.tx }) +
              " " +
              d.tShdw.color),
          void 0 !== d.tStroke &&
            d.tStroke.use &&
            (c.style.webkitTextStroke =
              SR7.gV({ v: d.tStroke.w, id: h, u: "px", f: d.fluid.tx }) +
              " " +
              d.tStroke.c),
          (p.metas ??= SR7.F.updateBasicMetas(h, p, u)),
          d.font.style && (c.style.fontStyle = "italic"),
          (p.fontStr = `${c.style.fontStyle} ${c.style.fontWeight} ${c.style.fontSize} '${c.style.fontFamily}'`),
          !0 !== p.waitOnFont &&
            ((p.waitOnFont = !0),
            f.push(
              _tpt.checkFontLoaded(
                c.style.fontFamily,
                c.style.fontWeight,
                c.style.fontStyle,
                175
              )
            ),
            c.innerHTML.includes('class="material-icons') &&
              f.push(
                _tpt.checkFontLoaded(
                  "Material Icons",
                  c.style.fontWeight,
                  c.style.fontStyle,
                  375
                )
              ),
            c.innerHTML.includes('<i class="fa-') &&
              f.push(
                _tpt.checkFontLoaded(
                  "FontAwesome",
                  c.style.fontWeight,
                  c.style.fontStyle,
                  175
                )
              ),
            c.innerHTML.includes('<i class="pe-7s-') &&
              f.push(
                _tpt.checkFontLoaded(
                  "Pe-icon-7-stroke",
                  c.style.fontWeight,
                  c.style.fontStyle,
                  175
                )
              ))),
        "container" == d.type || "text" == d.type)
      ) {
        (c.style.lineHeight = SR7.gV({
          v: d.lh,
          id: h,
          u: "px",
          f: d.fluid.tx,
          m: "round",
          s: "scale",
        })),
          (c.style.textAlign = SR7.gV({ v: d.tA, id: h, u: 0 }));
        let e = SR7.gV({ v: d.ws, id: h });
        (e = "full" === e ? "normal" : e),
          (p.maw = t("maxWidth", p.maw, d.size.maxW, h, S, p.minMaxCon)),
          (e =
            "normal" == e && p.maw && "none" !== p.maw
              ? "normal"
              : ("normal" === e &&
                  "auto" === b &&
                  (("column" !== p.ptype && "group" !== p.ptype) ||
                    "relative" !== d.pos.pos)) ||
                "content" == e
              ? "nowrap"
              : e),
          void 0 !== e && (c.style.whiteSpace = e);
      }
      void 0 !== d.bShdw &&
        d.bShdw.use &&
        (p[
          "row" == d.subtype
            ? p.mask
              ? "target"
              : p.con
              ? "con"
              : "el"
            : "column" == d.subtype && p.colbg
            ? "colbg"
            : "el"
        ].style.boxShadow =
          SR7.gV({ v: d.bShdw.h, id: h, u: "px", f: d.fluid.tx, s: "scale" }) +
          " " +
          SR7.gV({ v: d.bShdw.v, id: h, u: "px", f: d.fluid.tx, s: "scale" }) +
          " " +
          SR7.gV({
            v: d.bShdw.blur,
            id: h,
            u: "px",
            f: d.fluid.tx,
            s: "scale",
          }) +
          " " +
          SR7.gV({
            v: d.bShdw.spread,
            id: h,
            u: "px",
            f: d.fluid.tx,
            s: "scale",
          }) +
          " " +
          d.bShdw.color),
        "group" == d.subtype && (c.style.lineHeight = "0px");
      let F,
        _ = d.radius && ("video" == d.type || "video" == d.subtype);
      if (
        ((void 0 !== p.oflow || _) &&
          (p[p.mask ? "mask" : "el"].style.overflow =
            _ || (p.useAsImage && d.image?.style) ? "hidden" : p.oflow),
        "column" == d.subtype || "row" == d.subtype)
      )
        for (
          "column" == d.subtype
            ? ((d.break ??= g.slides[u].layers[d.pid].break),
              "1/1" !== d.size.col && (null == d.break || d.break > g.LEV)
                ? ((b = d.size.col.split("/")),
                  (b = (100 / parseInt(b[1])) * b[0] + "%"),
                  (p.display = "table-cell"))
                : ((b = "100%"), (p.display = "block")))
            : p.con
            ? ((p.conDisplay =
                null == d.break || d.break > g.LEV ? "table" : "block"),
              "row" == d.subtype && p.mask && (b = "100%"))
            : ((p.display =
                null == d.break || d.break > g.LEV ? "table" : "block"),
              (b = "100%")),
            v = 0;
          v < 4;
          v++
        )
          (p.el.style["padding" + SR7.D.DL[v]] =
            parseInt(
              SR7.gV({
                v: d.m?.[SR7.D.DS[v]] ?? 0,
                id: h,
                u: 0,
                f: d.fluid.sp,
                m: "round",
              })
            ) +
            parseInt(
              "row" != d.subtype ||
                (1 != v && 3 != v) ||
                "slide" === d.rTo ||
                ("carousel" === g.settings.type &&
                  !g.settings.carousel.stretch &&
                  !g.slides[u].slide.global)
                ? 0
                : (p.con["margin" + SR7.D.DL[v]] = g.dims.CFC.x)
            ) +
            "px"),
            (p["rp" + SR7.D.DS[v]] = parseInt(
              p.el.style["padding" + SR7.D.DL[v]]
            )),
            (p[p.con ? "con" : "el"].style["padding" + SR7.D.DL[v]] =
              SR7.gV({
                v: d.p?.[SR7.D.DS[v]] ?? 0,
                id: h,
                u: 0,
                f: d.fluid.sp,
                m: "round",
              }) + "px"),
            "container" == p.type &&
              (p["_p" + SR7.D.DL[v]] = parseInt(
                p.el.style["padding" + SR7.D.DL[v]]
              )),
            p.colbg &&
              ((p.colbg.style[SR7.D.DL[v].toLowerCase()] =
                p.el.style["padding" + SR7.D.DL[v]]),
              p.colbgMask &&
                (p.colbgMask.style[SR7.D.DL[v].toLowerCase()] = "0px")),
            p.editVals &&
              ((p.editVals[d.subtype]["padding" + SR7.D.DL[v]] =
                SR7.gV({
                  v: d.p?.[SR7.D.DS[v]] ?? 0,
                  id: h,
                  u: 0,
                  f: d.fluid.sp,
                  m: "round",
                }) + "px"),
              (p.editVals[d.subtype]["margin" + SR7.D.DL[v]] =
                SR7.gV({
                  v: d.m?.[SR7.D.DS[v]] ?? 0,
                  id: h,
                  u: 0,
                  f: d.fluid.sp,
                  m: "round",
                }) + "px"));
      else {
        let e;
        for (y of SR7.D.spacings)
          if (
            ("absolute" != d.pos.pos && "fullinset" != d.size.cMode) ||
            "margin" != y
          )
            for (v = 0; v < 4; v++)
              (p["padding" !== y ? p.LME : "el"].style[y + SR7.D.DL[v]] = e =
                (void 0 !== d[y[0]] && void 0 !== d[y[0]][SR7.D.DS[v]]
                  ? SR7.gV({
                      v: d[y[0]][SR7.D.DS[v]],
                      id: h,
                      u: 0,
                      f: d.fluid.sp,
                      m: "round",
                      s: "padding" == y ? "scale" : "inherit",
                    })
                  : 0) + "px"),
                "0px" !== e && (F = !0),
                p.editVals && (p.editVals.el[y + SR7.D.DL[v]] = e);
      }
      "absolute" == d.pos.pos && "fullinset" == d.size.cMode
        ? ((p.target.style.width = "auto"), (p.target.style.height = "auto"))
        : ((p.imgtype = p.useAsImage
            ? p.imgHeight > p.imgWidth
              ? "portrait"
              : p.imgHeight < p.imgWidth
              ? "landscape"
              : void 0
            : void 0),
          (p.aspectRatio ??=
            p.media && p.media?.player?.aspectRatio
              ? p.media.player.aspectRatio
              : p.canvas?.canvas?.image
              ? p.canvas.canvas.naturalWidth / p.canvas.canvas.naturalHeight
              : void 0),
          (p.mih = t("minHeight", p.mih, d.size.minH, h, S, p.minMaxCon)),
          (p.miw = t("minWidth", p.miw, d.size.minW, h, S, p.minMaxCon)),
          (p.mah = t("maxHeight", p.mah, d.size.maxH, h, S, p.minMaxCon)),
          (p.maw = t("maxWidth", p.maw, d.size.maxW, h, S, p.minMaxCon)),
          (p.w =
            "auto" !== b
              ? b
              : "shape" == d.type && p.useAsImage && p.imgHeight
              ? ((t, i) =>
                  "auto" == i
                    ? e(t.imgWidth, t.maw, t.miw)
                    : s(
                        i,
                        t.imgHeight,
                        t.imgWidth,
                        t.mah,
                        t.mih,
                        t.par?.rch ?? t.par?.ch
                      ))(p, R)
              : "absolute" == d.pos.pos &&
                "text" !== d.type &&
                "group" !== d.subtype
              ? p.useAsImage
                ? "landscape" == p.imgtype
                  ? "100%"
                  : "auto"
                : "100%"
              : "auto"),
          (p.h =
            "fullheight" == d.size.cMode ||
            "cover" == d.size.cMode ||
            "cover-proportional" == d.size.cMode
              ? "100%"
              : "auto" == R && "shape" == d.type && p.useAsImage && p.imgHeight
              ? ((t, i) =>
                  "auto" == i
                    ? e(t.imgHeight, t.mah, t.mih)
                    : s(
                        i,
                        t.imgWidth,
                        t.imgHeight,
                        t.maw,
                        t.miw,
                        t.par?.rcw ?? t.par?.cw
                      ))(p, b)
              : R),
          (p.h = "-1" == String(p.h) ? "auto" : p.h),
          (p.target.style.width =
            -1 == d.pid && "slide" !== d.rTo
              ? "auto" == p.w
                ? "none" != p.maw && p.maw
                  ? p.maw
                  : "auto"
                : _tpt.posToNum(
                    _tpt.unitize(p.w),
                    g.dims.CFC?.[l]?.w ?? g.dims.CFC.w
                  ) + "px"
              : _tpt.unitize(p.w)),
          (p.target.style.height =
            -1 == d.pid &&
            "slide" == d.rTo &&
            "100%" == R &&
            g.settings.fixed &&
            g.settings.size.fullHeight
              ? _tpt.winH + "px"
              : -1 == d.pid && "slide" !== d.rTo && "auto" !== p.h
              ? _tpt.posToNum(_tpt.unitize(p.h), g.dims.CFC.h) + "px"
              : "auto" !== p.h && -1 == d.pid && "slide" == d.rTo
              ? _tpt.posToNum(
                  _tpt.unitize(p.h),
                  g.fHVCarousel ? g.dims.CFC.h : g.dims.content.h
                ) + "px"
              : _tpt.unitize(p.h, "px")),
          p.mask &&
            p.loop &&
            "absolute" == p.target.style.position &&
            ((p.mask.style.height = "100%"), (p.mask.style.width = "100%")),
          "bg" == p.imageType &&
            p.image?.style &&
            (p.image.style.backgroundSize = p.w + " " + p.h)),
        -1 !== d.pid &&
          ((p.target.style.cssFloat = SR7.gV({ v: d.pos.float, id: h })),
          "none" !== p.target.style.cssFloat &&
            "group" == p.par?.subtype &&
            p.par.el.classList.add("sr7-clear"),
          (p.target.style.clear = SR7.gV({ v: d.pos.clear, id: h })));
      let M =
        "column" == d.subtype && p.colbgMask
          ? "colbgMask"
          : "column" == d.subtype && p.colbg
          ? "colbg"
          : "row" == d.subtype && p.con
          ? "con"
          : "el";
      if (d.border) {
        for (
          p[M].style.borderStyle = SR7.gV({ v: d.border.s, id: h }), v = 0;
          v < 4;
          v++
        )
          p[M].style[SR7.D.BWID[v]] = _tpt.unitize(
            SR7.gV({
              v: d.border?.w?.[SR7.D.DS[v]] ?? 0 ?? "0px",
              id: h,
              f: S,
              m: "round",
            })
          );
        (p.borderH ??=
          parseInt(p[M].style.borderLeftWidth) +
          parseInt(p[M].style.borderRightWidth)),
          (p.borderV ??=
            parseInt(p[M].style.borderTopWidth) +
            parseInt(p[M].style.borderBottomWidth));
      }
      if ("prepare" == o) {
        if (
          ("container" == d.type &&
            "auto" == p.target.style.height &&
            "done" !== (g.c?.autoParents?.[u] ?? !1) &&
            ((g.c.autoParents ??= {}),
            (g.c.autoParents[u] ??= []),
            -1 == g.c.autoParents[u].indexOf(m) && g.c.autoParents[u].push(m)),
          d.border && (p[M].style.borderColor = d.border.c),
          (p.target.style.zIndex =
            "zone" == d.subtype
              ? d.zIndex && -1 !== d.zIndex
                ? d.zIndex
                : (g?.zoneIndexes?.[d.id] ?? 100) + 1
              : d.zIndex + ("slidebg" == d.subtype ? 0 : 1)),
          d.spike &&
            !SR7.E.backend &&
            (p.el.style.clipPath = SR7.F.getSpikePath(d.spike)),
          "normal" !== (d.blend ?? "normal") &&
            (p.target.style.mixBlendMode = d.blend),
          void 0 !== d.radius)
        )
          for (v = 0; v < 4; v++)
            void 0 !== d.radius[SR7.D.DS[v]] &&
              (p[M].style[SR7.D.BRAD[v]] = _tpt.unitize(d.radius[SR7.D.DS[v]]));
        if (
          ((p.target.style.position = d.pos.pos),
          void 0 !== p.mask &&
            void 0 !== d.tr &&
            ((p.mask.style.transform =
              "perspective(600px) rotate(" +
              _tpt.unitize(d.tr.rZ ?? 0, "deg") +
              ") rotateY(" +
              _tpt.unitize(d.tr.rY ?? 0, "deg") +
              ") rotateX(" +
              _tpt.unitize(d.tr.rX ?? 0, "deg") +
              ")"),
            (p.mask.style.opacity = d.tr.o ?? 1)),
          d.cursor && (p.target.style.cursor = d.cursor),
          (p.state ??= "prepared"),
          p.addonWrap &&
            p.parallax &&
            ((p.parallax.style.visibility = "inherit"),
            (p.parallax.style.display = "block")),
          (p.addonWrap || p.loop || p.parallax) &&
            p.mask &&
            ((p.mask.style.visibility = "inherit"),
            (p.mask.style.display = "block")),
          p.addonWrap &&
            p.loop &&
            ((p.loop.style.visibility = "inherit"),
            (p.loop.style.display = "block")),
          "container" == d.type || "text" == d.type || "relative" == d.pos.pos)
        ) {
          let e =
            "container" !== d.type && -1 !== d.pid && "relative" == d.pos.pos;
          (c.style.verticalAlign = e
            ? p.mask && "shape" == p.type
              ? "top"
              : "inherit"
            : SR7.gV({ v: d.vA, id: h, u: 0 })),
            p.mask &&
              (p.mask.style.verticalAlign =
                e && "shape" == p.type ? "inherit" : c.style.verticalAlign);
        }
      }
      p.transferOrigins?.target &&
        p.el.style.transformOrigin !== p.transferOrigins.target &&
        (p.el.style.transformOrigin = p.transferOrigins.target
          .split(" ")
          .slice(0, 2)
          .join(" ")),
        p.loop &&
          p.transferOrigins?.loop &&
          p.loop.style.transformOrigin !== p.transferOrigins.loop &&
          _tpt.gsap.set(p.loop, { transformOrigin: p.transferOrigins.loop }),
        (d?.vis?.[g.LEV] ?? 1) ||
          ("relative" != d.pos.pos && "inline-block" != p.display) ||
          (p.display = "none"),
        (p.visibility =
          d?.vis?.[g.LEV] ?? 1
            ? -1 !== d.pid && "zone" !== p.ptype
              ? "inherit"
              : "visible"
            : "hidden"),
        "update" != o ||
          ("animated" != p.state && "zone" != p.subtype) ||
          (p.target.style.visibility = p.visibility),
        (p.target.style.display = p.display),
        "container" == d.type &&
          (SR7.gV({ v: d.vis, id: h }) ?? 1
            ? p.target.className.includes("sr-force-hidden") &&
              p.target.classList.remove("sr-force-hidden")
            : p.target.classList.add("sr-force-hidden")),
        "linebreak" == p.type && (p.target.style.clear = "both"),
        "prepare" == o &&
          "transparent" == (d?.bg?.color ?? "") &&
          d?.codes?.css &&
          (d.codes.css.includes("background") ||
            d.codes.css.includes("background-color")) &&
          (p.bgByCSS = !0),
        "el" !== p.LME &&
          "column" !== d.subtype &&
          ((c.style.width =
            ("absolute" == d.pos.pos &&
              "fullinset" == d.size.cMode &&
              p.mask) ||
            ("" + p.target.style.width).includes("%")
              ? "100%"
              : p.target.style.width),
          (c.style.height =
            ("absolute" == d.pos.pos &&
              ("fullinset" == d.size.cMode ||
                (p.media &&
                  ("video" == p.type || "video" == p.subtype) &&
                  "auto" == p.h)) &&
              p.mask) ||
            ("" + p.target.style.height).includes("%")
              ? "100%"
              : p.target.style.height),
          (c.style.display = "block"),
          (c.style.visibility = "inherit"),
          p.prepared
            ? "animated" == p.state &&
              (p[p.LME].style.visibility = p.visibility)
            : (p[p.LME].style.visibility = "hidden"),
          p.conDisplay && (p[p.LME].style.width = "100%")),
        p.useAsImage
          ? null == p.image
            ? d.bg?.image?.seo || ("fullinset" != d.size.cMode && !p.w)
              ? ((p.image = "pending"),
                (p.imageType = "img"),
                "relative" == d.pos.pos || ("auto" == b && "auto" == R)
                  ? f.push(a({ layer: d, el: c, c: p, id: h, skey: u }))
                  : a({ layer: d, el: c, c: p, id: h, skey: u }))
              : ((p.image = "done"),
                (p.imageType = "bg"),
                f.push(
                  SR7.F.drawBG(
                    c,
                    {
                      image: d.bg.image,
                      color: d?.bg?.color,
                      overlay:
                        "slidebg" == p.subtype &&
                        g.settings?.bg?.overlay?.type &&
                        !d.bg.overlay?.type
                          ? g.settings.bg.overlay
                          : void 0,
                    },
                    !0,
                    d.tl && d.tl.in && d.tl.in.bg ? "canvas" : "bg"
                  ).promise
                ),
                F && (p.bgClip = "content-box"),
                "relative" == d.pos.pos || "auto" == b || "auto" == R
                  ? f.push(a({ layer: d, el: c, c: p, id: h, skey: u }, !1))
                  : a({ layer: d, el: c, c: p, id: h, skey: u }, !1))
            : d.tl &&
              d.tl.in &&
              d.tl.in.bg &&
              ("slidebg" == p.subtype &&
                g.settings?.bg?.overlay?.type &&
                !d.bg.overlay?.type &&
                (d.bg.overlay = g.settings.bg.overlay),
              f.push(
                SR7.F.drawBG(
                  "row" == d.subtype && p.con
                    ? p.con
                    : "column" == d.subtype && p.colbg
                    ? p.colbg
                    : p.el,
                  d.bg,
                  !0,
                  "canvas"
                ).promise
              ))
          : "video" == d.type ||
            "audio" == d.type ||
            "" !== (d.bg?.video?.src ?? "")
          ? ((p.mediaSettings =
              "video" == d.type || "audio" == d.type ? d.content : d.bg.video),
            p.dOverlay ||
              "none" === (d?.overlay?.type ?? "none") ||
              ((p.dOverlay = SR7.F.addOverlay(
                d.overlay.type,
                d.overlay.size,
                d.overlay.cA,
                d.overlay.cB
              )),
              p.el.appendChild(p.dOverlay)),
            p.mediaPosterAdded ||
              ("" !== p.mediaSettings?.poster?.src
                ? !p.mediaPoster || ("video" != d.type && "video" != d.subtype)
                  ? "audio" !== d.type &&
                    f.push(
                      SR7.F.drawBG(
                        p.el,
                        {
                          image: {
                            src: p.mediaSettings.poster.src,
                            size: "cover",
                            pos: { x: "50%", y: "50%" },
                          },
                        },
                        !0,
                        "canvas"
                      ).promise
                    )
                  : f.push(
                      SR7.F.drawBG(
                        p.mediaPoster,
                        {
                          image: {
                            src: p.mediaSettings.poster.src,
                            size: "cover",
                            pos: { x: "50%", y: "50%" },
                          },
                        },
                        !0,
                        "bg"
                      ).promise
                    )
                : "slidebg" == p.subtype &&
                  f.push(
                    SR7.F.drawBG(
                      p.mediaPoster ? p.mediaPoster : p.el,
                      { color: "transparent" },
                      !0,
                      "canvas"
                    ).promise
                  )),
            (p.mediaPosterAdded = !0),
            null != p.media || n
              ? void 0 === p.media ||
                void 0 === p.media.updateSize ||
                n ||
                p.media.updateSize(
                  c.style.width,
                  c.style.height,
                  p.mediaSettings.cover ?? 1 ? "cover" : "contain"
                )
              : (_tpt.is_mobile &&
                !0 === (p.mediaSettings.poster?.insteadVideo ?? !1)
                  ? p.mediaContainer.remove()
                  : ((p.media = new SR7.videoPlayer(
                      p.mediaContainer,
                      p.el,
                      _tpt.extend(
                        {
                          type:
                            "audio" == d.type ? "audio" : p.mediaSettings.type,
                          subtype: d.subtype,
                          width: c.style.width,
                          height: c.style.height,
                          inline:
                            "slidebg" == d.subtype || p.mediaSettings.inline,
                          target: p.target,
                        },
                        p.mediaSettings
                      )
                    )),
                    f.push(p.media.add())),
                "relative" == d.pos.pos &&
                  (p.mediaContainer.style.position = "relative")))
          : d.tl && d.tl.in && d.tl.in.bg
          ? ("slidebg" == p.subtype &&
              g.settings?.bg?.overlay?.type &&
              !d.bg.overlay?.type &&
              (d.bg.overlay = g.settings.bg.overlay),
            f.push(
              SR7.F.drawBG(
                "row" == d.subtype && p.con
                  ? p.con
                  : "column" == d.subtype && p.colbg
                  ? p.colbg
                  : p.el,
                d.bg,
                !0,
                "canvas"
              ).promise
            ))
          : (f.push(
              SR7.F.drawBG(
                "row" == d.subtype && p.con
                  ? p.con
                  : "column" == d.subtype && p.colbg
                  ? p.colbg
                  : p.el,
                d.bg,
                x,
                "bg"
              ).promise
            ),
            null == d.bg.image &&
              x &&
              SR7.F.cache(p.cache, "color", ["bg"], [d.bg.color])),
        "svg" == d.type &&
          null == p.svg &&
          ((p.svg = "loading"),
          _tpt.getSVG(d.content.src, function (e) {
            if (void 0 === e || null == e || "" == e)
              return void (p.svg = "failed");
            (c.innerHTML = e.innerHTML),
              (p.svg = c.getElementsByTagName("svg")[0]),
              (p.svg.innerHTML = p.svg.innerHTML.replaceAll(
                "#SVGID_1_",
                "#SVGID_1_" + p.el.id
              ));
            let t = p.svg.getElementById("SVGID_1_");
            t && (t.id = "SVGID_1_" + p.el.id),
              i(p.svg),
              SR7.F.positionLayer(r, l),
              SR7.F.drawSVG(h, d.content, p);
          }));
      for (let e in d.addOns)
        _tpt.hop(d.addOns, e) &&
          SR7.A?.[e]?.drawLayer &&
          SR7.A[e].drawLayer(r, o);
      if (
        (SR7.F.positionLayer(r, l),
        p.prepared || ((g.c.reposLayers ??= []), g.c.reposLayers.push(r)),
        (p.prepared = "group" !== d.subtype || !n),
        "update" == o && "slidebg" !== p.subtype)
      ) {
        let e = p.tl[p.animState.scene]?.TL?.time?.();
        void 0 !== e &&
          p.tl[p.animState.scene].TL.invalidate().render(e, !0, !0);
      }
      return f;
    };
    const i = (e) => {
      const t = "svg_" + Math.random().toString(36).substr(2, 9) + "_";
      e.querySelectorAll("[id]").forEach((s) => {
        const i = s.id,
          a = t + i;
        (s.id = a),
          e.querySelectorAll("*").forEach((e) => {
            ["fill", "stroke", "clip-path", "mask", "filter", "style"].forEach(
              (t) => {
                if (e.hasAttribute(t)) {
                  const s = e.getAttribute(t);
                  if (s?.includes(`url(#${i})`)) {
                    const r = s.replace(`url(#${i})`, `url(#${a})`);
                    e.setAttribute(t, r);
                  }
                }
              }
            ),
              ["xlink:href", "href"].forEach((t) => {
                if (e.hasAttribute(t)) {
                  e.getAttribute(t) === `#${i}` && e.setAttribute(t, `#${a}`);
                }
              });
          });
      });
    };
    (SR7.F.drawSVG = (e, t, s) => {
      if (
        s.svg &&
        ((s.svgPaths ??= s.el.querySelectorAll(
          0 == t.all
            ? "path"
            : "path, circle, ellipse, line, polygon, polyline, rect"
        )),
        !0 !== t.oC)
      ) {
        let i = SR7.gV({ v: t.color, id: e });
        s.svgPaths.forEach(function (e) {
          e.style.fill = i;
        }),
          0 == s.svgPaths.length && (s.el.style.fill = i),
          void 0 !== t.stroke.c &&
            "transparent" !== t.stroke.c &&
            ((s.svg.style.stroke = t.stroke.c),
            void 0 !== t.stroke.w &&
              (s.svg.style.strokeWidth = parseInt(t.stroke.w) + "px"),
            void 0 !== t.stroke.o &&
              (s.svg.style.strokeDashoffset = t.stroke.o),
            void 0 !== t.stroke.d &&
              (s.svg.style.strokeDasharray = t.stroke.d));
      }
    }),
      (SR7.F.reposLayers = (e) => {
        if (
          void 0 !== SR7.M[e].c.reposLayers &&
          SR7.M[e].c.reposLayers.length > 0
        )
          for (let t of SR7.M[e].c.reposLayers) SR7.F.positionLayer(t);
        delete SR7.M[e].c.reposLayers,
          SR7.F.reposContainers(e, SR7.M[e].current.id);
      }),
      (SR7.F.reposContainers = (e, t) => {
        if (null == t || -1 == t) return;
        let s = SR7.M[e],
          i = s.slides[t].layers,
          a = s.c?.PO?.[t];
        if (null == a || null == s.zones[t]) return;
        s.zones[t].cache = s.zones[t].all;
        let r = !1;
        for (let s in a)
          if (
            _tpt.hop(a, s) &&
            void 0 !== i[a[s]] &&
            "zone" == i[a[s]].subtype
          ) {
            let { c: o } = SR7.F.getLayer({ lkey: a[s], skey: t, id: e });
            o.el.offsetHeight !== o.ch &&
              void 0 !== o.ch &&
              ((r = !0),
              SR7.F.drawRawLayer(
                SR7.F.attrId(i[a[s]].attr?.id) ??
                  e + "-" + t + "-" + i[a[s]].id,
                "prepare",
                t
              ));
          }
        r &&
          requestAnimationFrame(function () {
            SR7.F.getZoneHeights(e, t) !== s.zones[t].cache &&
              SR7.F.updateModuleDims(e, !0);
          });
      }),
      (SR7.F.positionLayer = function (e, t) {
        var {
          layer: s,
          c: i,
          id: a,
          skey: r,
        } = e.layer && e.c && e.id && e.skey ? e : SR7.F.getLayer(e);
        t ??= r;
        const o = SR7.M[a];
        if (
          ((i.par =
            -1 !== s.pid
              ? SR7.F.getLayer({ id: a, skey: r, lkey: s.pid }).c
              : "slide" !== s.rTo && "zone" !== s.subtype
              ? o.dims.CFC?.[t] ?? o.dims.CFC
              : "carousel" == o.settings.type
              ? "v" != o.settings.carousel.type ||
                o.slides[r].slide.global ||
                "slide" != s.rTo
                ? o.dims.CFC?.[t + "_slide"] ?? o.dims.CFC?.[t] ?? o.dims.CFC
                : o.dims.CFC?.[t + "_full"] ?? o.dims.CFC
              : o.settings.fixed &&
                o.settings.size.fullHeight &&
                "slide" == s.rTo
              ? { cw: _tpt.winW, ch: _tpt.winH }
              : o.dims.content),
          null == i.par)
        )
          return;
        let l = i.aspectRatio ?? 1.77777777,
          n =
            ("column" != s.subtype && "row" != s.subtype) || !i.con
              ? i.el.offsetWidth - (s.subtype, 0)
              : i.con.offsetWidth,
          d =
            (i.image || i.media) && 0 !== i.cw && "auto" == i.h
              ? n / l
              : ("column" != s.subtype && "row" != s.subtype) || !i.con
              ? i.el.offsetHeight - (s.subtype, 0)
              : i.con.offsetHeight,
          c = !!(0 == n && d > 0 && i.image && "bg" == i.imageType) && d * l;
        if (
          (c && (n = c), "absolute" == s.pos.pos && "fullinset" == s.size.cMode)
        )
          (i.top = i[i.LME].style.top =
            SR7.gV({ v: s.m.t, id: a, u: 0, f: s.fluid.sp, m: "round" }) +
            "px"),
            (i.bottom = i[i.LME].style.bottom =
              SR7.gV({ v: s.m.b, id: a, u: 0, f: s.fluid.sp, m: "round" }) +
              "px"),
            (i.left = i[i.LME].style.left =
              SR7.gV({ v: s.m.l, id: a, u: 0, f: s.fluid.sp, m: "round" }) +
              "px"),
            (i.right = i[i.LME].style.right =
              SR7.gV({ v: s.m.r, id: a, u: 0, f: s.fluid.sp, m: "round" }) +
              "px");
        else if (
          "absolute" == s.pos.pos &&
          "row" !== s.subtype &&
          "column" !== s.subtype
        ) {
          void 0 === i.par.el ||
            (null != i.par.cw && null != i.par.ch) ||
            ((i.par.cw = _tpt.posToNum(
              i.par.w,
              i.par.el.offsetWidth -
                ("group" == i.ptype ? i.par.borderH ?? i.par.borderH : 0)
            )),
            (i.par.ch = _tpt.posToNum(
              i.par.h,
              i.par.el.offsetHeight -
                ("group" == i.ptype ? i.par.borderV ?? i.par.borderV : 0)
            ))),
            (i.par.cw ??= i.par.w),
            (i.par.ch ??= i.par.h),
            (i.cw = "auto" == i.w ? n : _tpt.posToNum(i.w, i.par.cw)),
            (i.cw =
              void 0 !== i.maw && "none" !== i.maw && parseInt(i.maw) < i.cw
                ? parseInt(i.maw)
                : i.cw),
            (i.ch =
              "auto" == i.h
                ? i.useAsImage && "auto" == i.h && void 0 !== i.image
                  ? i.imgHeight * (i.cw / i.imgWidth)
                  : d
                : _tpt.posToNum(i.h, i.par.ch));
          let e = SR7.gV({ v: s.pos.h, id: a }),
            t = SR7.gV({ v: s.pos.v, id: a });
          (i.ox =
            (i.ignoreParXY ? 0 : i.par.x ?? 0) +
            ("left" == e
              ? 0
              : "right" == e
              ? i.par.cw - i.cw
              : (i.par.cw - i.cw) / 2)),
            (i.oy =
              (i.ignoreParXY ? 0 : i.par.y ?? 0) +
              ("top" == t
                ? 0
                : "bottom" == t
                ? i.par.ch - i.ch
                : (i.par.ch - i.ch) / 2)),
            "group" != s.subtype ||
            "auto" != i.w ||
            "right" != e ||
            ("slide" != s.rTo && void 0 === i.par.el)
              ? (void 0 !== i.right &&
                  (i.right = i[i.LME].style.right = "auto"),
                (i.left = i[i.LME].style.left =
                  i.ox +
                  ("right" == e ? -1 : 1) *
                    _tpt.posToNum(
                      SR7.gV({ v: s.pos.x, id: a, s: "scale" }),
                      i.par.cw
                    ) *
                    (s.fluid?.sp ? o.MP : 1) +
                  "px"))
              : ((i.right = i[i.LME].style.right =
                  _tpt.posToNum(
                    SR7.gV({ v: s.pos.x, id: a, s: "scale" }),
                    i.par.cw
                  ) *
                    (s.fluid.sp ? o.MP : 1) +
                  "px"),
                (i.left = i[i.LME].style.left = "auto")),
            (i.top = i[i.LME].style.top =
              i.oy +
              ("bottom" == t ? -1 : 1) *
                _tpt.posToNum(
                  SR7.gV({ v: s.pos.y, id: a, s: "scale" }),
                  i.par.ch
                ) *
                (s.fluid?.sp ? o.MP : 1) +
              "px"),
            "bg" == i.imageType &&
              "shape" !== s.type &&
              (i.el.style.backgroundPosition = e + " " + t);
        } else (i.left = i.el.offsetLeft), (i.top = i.el.offsetTop);
        (i.cPos = {
          left: parseInt(i.left) || i.left,
          top: parseInt(i.top) || i.top,
        }),
          (i.cw = n - ("group" == i.subtype ? i.borderH ?? 0 : 0)),
          (i.ch = d - ("group" == i.subtype ? i.borderV ?? 0 : 0)),
          "container" == i.type &&
            ((i.rcw =
              i.cw - ((i._pLeft ?? 0) + (i._pRight ?? 0) + (i.borderH ?? 0))),
            (i.rch =
              i.ch - ((i._pTop ?? 0) + (i._pBottom ?? 0) + (i.borderV ?? 0)))),
          (i.image || i.media) &&
            0 !== i.cw &&
            "auto" == i.h &&
            ((i.target.style.height = i.cw / l + "px"),
            (i.image || i.media) && (i.el.style.height = i.cw / l + "px")),
          i.image && c && (i.el.style.width = c + "px"),
          "column" != s.subtype || (0 !== i.cw && 0 != i.ch) || void 0 === i.par
            ? "row" == s.subtype &&
              (i.ciw =
                "slide" !== s.rTo ? o.dims.CFC?.[t]?.w ?? o.dims.CFC.w : i.cw)
            : ((i.cw = 0 == i.cw ? _tpt.posToNum(i.w, i.par.cw) : i.cw),
              (i.ch = 0 == i.ch ? _tpt.posToNum(i.h, i.par.ch) : i.ch)),
          SR7.E.backend && SR7.editor?.elements?.ghost?.build?.(i),
          0 == i.ch &&
            "auto" == i.h &&
            "shape" == i.type &&
            i.global &&
            (!i.tryReposition || i.tryReposition < 3) &&
            ((i.tryReposition ??= 0),
            setTimeout(function () {
              SR7.F.positionLayer(e, t), i.tryReposition++;
            }, 19));
      });
    let a = (e, t) => {
      let { el: s, c: i, src: a, layer: r, skey: o } = e;
      return new Promise((l) => {
        _tpt.registerImage(
          a || r.bg?.image?.src,
          0,
          function (a) {
            if ("error" == a.state) SR7.F.positionLayer(e, o), l();
            else {
              if (null == a.image) return void l();
              (i.image = a.image?.used ? a.image?.cloneNode() : a.image),
                (a.image.used = !0),
                (i.imgWidth = a.width),
                (i.imgHeight = a.height),
                (i.aspectRatio = i.imgWidth / i.imgHeight),
                t
                  ? (s.appendChild(i.image),
                    (i.image.style.width = "100%"),
                    (i.image.style.height = "auto"),
                    SR7.F.positionLayer(e, o))
                  : SR7.F.positionLayer(e, o),
                i.bgClip && (i.el.style.backgroundClip = "content-box"),
                l();
            }
          },
          "load_img_in_layer_" + s.id
        );
      });
    };
    (_tpt.R = _tpt.R || {}),
      (_tpt.R.draw = _tpt.extend
        ? _tpt.extend(_tpt.R.draw, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    (window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      (_tpt.idRegistry ??= {});
    const tags = [
      "div",
      "a",
      "p",
      "span",
      "sr7-layer",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "label",
      "img",
      "video",
      "audio",
      "iframe",
      "sr7-txt",
      "sr7-video",
      "sr7-audio",
      "sr7-poster",
      "sr7-img",
      "sr7-shape",
      "sr7-button",
      "sr7-bg",
      "sr7-col",
      "sr7-col-bg",
      "sr7-col-bg-mask",
      "sr7-row",
      "sr7-row-con",
      "sr7-col-con",
      "sr7-media",
      "sr7-poster",
      "sr7-ao",
      "sr7-ao-in",
      "sr7-px",
      "sr7-mask",
      "sr7-fxc",
      "sr7-loop",
      "sr7-3dwrap",
      "sr7-3dwrap-bg",
      "sr7-3dwrap-layers",
    ];
    function openUrlOrScroll(e, t, s) {
      if (
        "#" == e?.link ||
        String(e.link).toLowerCase().includes("mailto:") ||
        String(e.link).toLowerCase().includes("tel:")
      )
        return e.link;
      let i = new URL(window.location.href),
        a = i.hostname,
        r = i.pathname.endsWith("/") ? i.pathname : i.pathname + "/",
        o = "";
      switch (e.http) {
        case "auto":
        default:
          o = window.location.protocol;
          break;
        case "keep":
          o = "";
          break;
        case "http":
          o = "http:";
          break;
        case "https":
          o = "https:";
      }
      let l =
        e.link && e.link.indexOf("://") > -1 ? e.link.split("://")[0] : "";
      e.link =
        e.link &&
        e.link
          .replace(l + "://", "")
          .replace(l + "//", "")
          .replace("//", "");
      let n,
        d,
        c = e.link;
      "" == c || null == c
        ? (c = void 0)
        : c.startsWith("#")
        ? (c = window.location.href.split("#")[0] + c)
        : !c.startsWith("/") && o
        ? (c = o + "//" + c)
        : c.startsWith("/") || o
        ? o && (c = o + "//" + e.link)
        : (c = "https://" + c);
      try {
        n =
          null == c || "" == c
            ? new URL(window.location.href)
            : c.startsWith("/") && "/" !== c[2]
            ? new URL(c, window.location.href)
            : new URL(c);
      } catch (e) {
        console.log(e);
      }
      try {
        d = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
      } catch (e) {
        console.log(e);
      }
      if (s || a != n.hostname || r != d) {
        if (s) return n?.href;
        e.anchor && (n.hash = e.anchor), window.open(n.href, e.target);
      } else
        SR7.F.scrollToId({
          id: t,
          offset: e.offset ?? 0,
          action: e.a,
          anchor: e.anchor,
          speed: e.s ?? 1e3,
          ease: e.e,
        });
    }
    void 0 === SR7.F.getLayer &&
      ((SR7.F.getLKey = (e, t, s) =>
        SR7.F.attrId(SR7.M[e].slides[t].layers[s].attr?.id)
          ? SR7.M[e].slides[t].layers[s].attr?.id
          : e + "-" + t + "-" + s),
      (SR7.F.getLayer = function (e) {
        if (!e)
          return {
            id: void 0,
            skey: void 0,
            el: void 0,
            lkey: void 0,
            layer: void 0,
          };
        let t, s, i, a, r, o;
        const l = typeof e;
        if ("object" !== l || void 0 !== e.lid) {
          e = "object" == l ? e.lid : e;
          for (const l in SR7.M)
            !t &&
              _tpt.hop(SR7.M, l) &&
              SR7.M[l].c.layers &&
              SR7.M[l].c.layers[SR7.lToK[e]] &&
              ((o = SR7.M[l].c.layers[SR7.lToK[e]]),
              (t = o.el),
              (a = o.skey),
              (r = o.lkey),
              (s = SR7.M[l].slides[a].layers[r]),
              (i = l));
        } else {
          const { id: l, skey: n, lkey: d } = e;
          (s = SR7.M[l]?.slides?.[n]?.layers?.[d] ?? {}),
            (o =
              SR7.M[l]?.c.layers?.[
                SR7.lToK[SR7.F.attrId(s.attr?.id) ?? `${l}-${n}-${d}`]
              ] ?? void 0),
            (t = o?.el ?? void 0),
            (a = n),
            (r = d),
            (i = l);
        }
        return { id: i, skey: a, el: t, lkey: r, layer: s, c: o };
      }),
      (SR7.F.getCarouselLayers = (e, t, s) => {
        const i = SR7.M[e],
          a = [];
        if (-1 != t && null != i.slides[t]) {
          for (let r in i.slides[t].layers) {
            if (!_tpt.hop(i.slides[t].layers, r)) continue;
            let o =
              "slidebg" == i.slides[t].layers[r].subtype ||
              i.slides[t].layers[r].viOC;
            if (("visible" == s && o) || ("outfocus" == s && !o)) a.push(r);
            else if ("infocus" == s) {
              let s = i.c.layers[SR7.lToK[`${e}-${t}-${r}`]];
              void 0 !== s && "in" !== (s.animState?.scene ?? "") && a.push(r);
            }
          }
          return a;
        }
      }),
      (SR7.F.getSlideBG = (e, t) => {
        let s,
          i = SR7.M[e].slides[t]?.layers ?? void 0;
        if (null != i) {
          for (let e in i)
            !s && _tpt.hop(i, e) && "slidebg" == i[e].subtype && (s = i[e]);
          return s;
        }
      }),
      (SR7.F.resetGlobalLayers = function (e) {
        const t = SR7.M[e];
        if (t?.slides)
          for (let s of t.staticSlides)
            for (let i in t.slides[s].layers) {
              let { c: t } = SR7.F.getLayer({ id: e, skey: s, lkey: i });
              t &&
                ((t.animState = { runningFrames: [] }),
                delete t.gpos,
                delete t.lastEventCalled,
                delete t.state,
                (t.cache = {}),
                (t.prepared = !1));
            }
      }),
      (SR7.F.layerAddonWraps = (e, t) => {
        if (!t) return;
        let s;
        for (let i in t.addOns) {
          if (!_tpt.hop(t.addOns, i) || !SR7.A?.[i]?.getLayerWraps) continue;
          const a = SR7.A?.[i]?.getLayerWraps(e, t) ?? void 0;
          null != a &&
            ((s ??= {}),
            (s.wrap ??= {}),
            (s.wrap.class =
              (null == s.wrap.class ? "" : s.wrap.class + " ") + a.wrap.class),
            (s.wrap.use = s.wrap.use || a.wrap.use),
            !1 !== (a.innerWrap?.use ?? !1) &&
              ((s.innerWrap ??= {}),
              (s.innerWrap.class =
                (null == (s.innerWrap?.class ?? void 0)
                  ? ""
                  : s.innerWrap.class + " ") + (a.innerWrap?.class ?? "")),
              (s.innerWrap.use = s.innerWrap.use || (a.innerWrap?.use ?? !1))));
        }
        return s;
      }),
      (SR7.F.prepareLayerAddon = async (e, t, s, i) => {
        if (null == SR7.A || !t) return;
        let a = [];
        for (let r in SR7.A) {
          if (!_tpt.hop(SR7.A, r) || !SR7.A?.[r]?.prepareLayer) continue;
          const o = (await SR7.A?.[r]?.prepareLayer(e, t, s, i)) ?? void 0;
          null != o && (Array.isArray(o) ? a.push(...o) : a.push(o));
        }
        return a;
      }),
      (SR7.F.prepareLayer = async (e, t, s, i, a, r, o, l, n, d, c) => {
        let p = SR7.M[e];
        const h =
          (!t?.vis || t.vis?.[p.LEV]) &&
          ("c" == (t.tl?.in?.content?.all?.[1]?.fx ?? !1)[0] ||
            "c" == (t.tl?.out?.content?.all?.[0]?.fx ?? !1)[0]);
        let u = e + "-" + s + "-" + t.id,
          m = 0 == String(t.attr?.id ?? "").length ? u : t.attr.id,
          g = SR7.D.hasActionLike(e, s, i, "link");
        const f = `${_tpt.mText(t.attr?.class ?? "")} ${
          "row" == t.subtype && "slide" !== t.rTo ? "sr7-galign" : ""
        } ${t.attr?.iClass ?? ""} ${
          ("video" != t.type && "video" != t.subtype) ||
          g ||
          !t.content?.noInteract
            ? ""
            : "nointeraction"
        }`;
        let v,
          y = p.c.layers;
        y[m] && (m = t.attr.id += "_DBL_" + Math.round(9999 * Math.random())),
          "slidebg" == t.subtype && (p.c.slideBGs[s] = { lid: m, lkey: i }),
          "slidebg" == t.subtype && p.migrate
            ? ((v = document.getElementById(e + "-" + s + "-slidebg")),
              null !== v && (v.id = m))
            : (v = document.getElementById(m)),
          (g = !1 !== g && "a" == g.ltype && g),
          void 0 !== t.tag &&
            (t.tag = -1 == tags.indexOf(t.tag) ? "sr7-layer" : t.tag);
        const S = g
          ? "a"
          : "slidebg" == t.subtype
          ? "sr7-bg"
          : "column" == t.subtype
          ? "sr7-col"
          : "sr7-layer" == t.tag || null == t.tag
          ? SR7.D.tagLib[
              "" !== t.subtype && void 0 !== t.subtype ? t.subtype : t.type
            ]
          : t.tag;
        v &&
          v.tagName.toLowerCase() !== S.toLowerCase() &&
          (v.parentElement.removeChild(v), (v = void 0)),
          t.codes?.css && t.codes.css,
          "container" !== t.type && v
            ? (v.parentElement.removeChild(v),
              (v.className = _tpt.mText(v.className, f)),
              l.fragment.appendChild(v),
              "text" == t.type &&
                p.fromStream &&
                null == v.getAttribute("srscsrc") &&
                (v.innerHTML = SR7.F.updateDynamicMetas(
                  e,
                  o.slide.order,
                  _tpt.lineBreaks(t.content.text, SR7.gV({ v: t.ws, id: e }))
                )))
            : ((v = l.add({ tag: S, class: f, id: m })),
              "text" == t.type &&
                (f.includes("sr7-brg") ||
                  (t.content.text = _tpt.lineBreaks(
                    t.content.text,
                    SR7.gV({ v: t.ws, id: e })
                  )),
                (v.innerHTML = p.fromStream
                  ? SR7.F.updateDynamicMetas(e, o.slide.order, t.content.text)
                  : t.content.text))),
          p.hasTouchSwipe &&
            (SR7.D.hasActionLike(e, s, i, "simulate") ||
              SR7.D.hasActionLike(e, s, i, "click")) &&
            (v.dataset.clickable = "true"),
          g &&
            (g?.shrlink
              ? _tpt.checkResources(["sharing"]).then(() => {
                  SR7.A?.sharing?.postProcessLayer &&
                    SR7.A.sharing.postProcessLayer(e, t, y[m], s);
                })
              : ((v.href = p.fromStream
                  ? SR7.F.updateDynamicMetas(e, o.slide.order, g.link)
                  : openUrlOrScroll(g, e, !0)),
                (v.target = g.target),
                "nofollow" == g.flw && (v.rel = "nofollow"),
                "_blank" == g.target &&
                  (v.rel =
                    (v.rel ?? "") +
                    (void 0 !== v.rel && v.rel.length > 0 ? " " : "") +
                    "noopener"))),
          t.viSH &&
            ((p.c.viSH ??= {}), (p.c.viSH.el ??= []), p.c.viSH.el.push(m)),
          !v.className.includes("sr7-layer") && v.classList.add("sr7-layer"),
          (y[m] = {
            el: v,
            mid: e,
            skey: s,
            lkey: i,
            oflow: t.oflow,
            cache: {},
            tl: {},
            listeners: {
              hover: !1 !== (t.hov?.u ?? !1),
              action:
                void 0 !== t.listen &&
                t.listen.length > 0 &&
                _tpt.tEvt(t.listen),
              aCache: {},
            },
            type: t.type,
            subtype: t.subtype,
            animState: { runningFrames: [] },
            ignoreParXY:
              "carousel" == p.settings.type &&
              "v" == p.settings?.carousel?.type &&
              "slide" == t.rTo,
          }),
          (SR7.lToK[u] = m),
          u !== m && (SR7.lToK[m] = m),
          "row" == t.subtype &&
            (p.zoneIndexes[t.pid] =
              null == p.zoneIndexes[t.pid] || p.zoneIndexes[t.pid] < t.zIndex
                ? t.zIndex
                : p.zoneIndexes[t.pid]),
          (t.pE = y[m].pE =
            ("default" == t.uS && p.settings.uS) || "true" == String(t.uS)
              ? "auto"
              : "none" == t.pE ||
                ("text" !== t.type &&
                  p.settings.fixed &&
                  !y[m].listeners.hover &&
                  !y[m].listeners.action &&
                  "auto" == t.pE)
              ? "none"
              : t.pE),
          "none" == y[m].pE && (v.style.pointerEvents = "none"),
          t.content?.fromStream &&
            p.stream &&
            ((t.content.src = SR7.F.getFeed(p, o.slide.order, "media")),
            (t.content.src &&
              -1 === t.content.src.indexOf("video_dashinit.mp4")) ||
              (t.content.src = SR7.F.getFeed(p, o.slide.order, "thumb")),
            (t.content.crossOrigin =
              "youtube" !== (SR7.M.settings?.source?.type ?? "")),
            t.content?.poster?.fromStream &&
              (t.content.poster.src = SR7.F.getFeed(
                p,
                o.slide.order,
                "thumb"
              ))),
          t.bg?.image?.fromStream &&
            p.stream &&
            ((t.bg.image.crossOrigin =
              "youtube" !== (SR7.M.settings?.source?.type ?? "")),
            (t.bg.image.src = SR7.F.getFeed(
              p,
              o.slide.order,
              "image",
              void 0,
              void 0,
              t.bg.image.src
            ))),
          t.bg?.video?.fromStream &&
            p.stream &&
            ((t.bg.video.src = SR7.F.getFeed(p, o.slide.order, "media")),
            t.bg.video.poster.fromStream &&
              (t.bg.video.poster.src = SR7.F.getFeed(
                p,
                o.slide.order,
                "thumb"
              ))),
          ("video" != t.type &&
            "audio" != t.type &&
            "" === (t.bg?.video?.src ?? "")) ||
            (v.appendChild(
              (y[m].mediaContainer = l.add({
                tag: "sr7-media",
                class: "sr7-media",
                id: m + ("audio" == t.type ? "_audio" : "_video"),
              }))
            ),
            "audio" === t.type ||
              ("" === (t.bg?.video?.poster?.src ?? "") &&
                "" === (t.content?.poster?.src ?? "")) ||
              v.appendChild(
                (y[m].mediaPoster = l.add({
                  tag: "sr7-poster",
                  class: "sr7-poster",
                  id: m + "_poster",
                }))
              )),
          o.slide.global &&
            ((y[m].global = !0),
            (t.sStart = parseInt(t.sStart ?? 1)),
            (t.sEnd = parseInt(t.sEnd ?? p.len) || p.len),
            void 0 !== t.sZ &&
              "default" !== t.sZ &&
              t.sZ !== o.slide.pos &&
              -1 == t.pid &&
              d.push(m)),
          (y[m].addOns = SR7.F.layerAddonWraps(e, t));
        let b,
          R = await SR7.F.prepareLayerAddon(e, t, m, s);
        void 0 !== R && a.push(...R);
        let w = SR7.F.checkWrap(t.tl, "mask") || (t.hov?.m ?? !1);
        !w && h && ((w = h), (y[m].maskForFx = !0));
        let x,
          F,
          _,
          M =
            "" !== (t?.attr?.wrapClass ?? "") ||
            "" !== (t?.attr?.wrapId ?? "") ||
            "slidebg" == t.subtype,
          k = SR7.F.checkWrap(t.tl, "loop");
        (y[m].transferOrigins = {
          target: t.tl?.in?.content?.orig
            ? (t.tl.in.content.orig.x ?? "50%") +
              " " +
              (t.tl.in.content.orig.y ?? "50%") +
              " " +
              (_tpt.unitize(t.tl.in.content.orig.z) ?? "50%")
            : void 0,
          loop:
            k &&
            (t.tl?.in?.loop?.orig
              ? (t.tl.in.loop.orig.x ?? "50%") +
                " " +
                (t.tl.in.loop.orig.y ?? "50%") +
                " " +
                (_tpt.unitize(t.tl.in.loop.orig.z) ?? "50%")
              : void 0),
        }),
          (y[m].mod = SR7.F.modify.prepare(t.mod, e)),
          y[m].mod &&
            ((p.c.mod ??= {}),
            (p.c.mod[s] ??= []),
            p.c.mod[s].push(m),
            (w = w || (t.mod?.mask ?? !1))),
          ((void 0 !== t.tr &&
            ((void 0 !== t.tr.rX && 0 !== parseInt(t.tr.rX)) ||
              (void 0 !== t.tr.rY && 0 !== parseInt(t.tr.rY)) ||
              (void 0 !== t.tr.rZ && 0 !== parseInt(t.tr.rZ)) ||
              (void 0 !== t.tr.o && 1 !== t.tr.o))) ||
            w ||
            M) &&
            ((x = y[m].mask =
              l.add({
                tag: "sr7-mask",
                class: t.attr.wrapClass ?? "",
                id: t.attr.wrapId ?? "",
              })),
            w && !y[m].maskForFx
              ? (y[m].oflow = "hidden")
              : M && (y[m].oflow = "visible"),
            (w = !0),
            h &&
              ((y[m].fxc = l.add({ tag: "sr7-fxc" })),
              y[m].mask.append(y[m].fxc))),
          k && (F = y[m].loop = l.add({ tag: "sr7-loop" })),
          "container" == t.type
            ? (b = k || w || SR7.F.checkMargin(t.m))
            : "text" == t.type &&
              !1 !== (t.tog?.u ?? !1) &&
              ((y[m].listeners.toggle = !0),
              (y[m].tog = {
                state: !1,
                toggled: t.tog.i
                  ? t.content.text
                  : _tpt.lineBreaks(t.tog.t, SR7.gV({ v: t.ws, id: e })),
              }),
              t.tog.i &&
                (v.innerHTML = _tpt.lineBreaks(
                  t.tog.t,
                  SR7.gV({ v: t.ws, id: e })
                )));
        const C = (y[m].addonWrap = y[m].addOns?.wrap?.use
            ? l.add({ tag: "sr7-ao", class: y[m].addOns.wrap.class })
            : void 0),
          L = (y[m].addonInnerWrap = y[m].addOns?.innerWrap?.use
            ? l.add({ tag: "sr7-ao-in", class: y[m].addOns.innerWrap.class })
            : void 0);
        let O = (t?.mod?.s?.u || t?.mod?.m?.u) && !t.mod.mask;
        if (
          (O && (_ = y[m].parallax = l.add({ tag: "sr7-px" })),
          ("row" == t.subtype && ("slide" !== t.rTo || O || k || w || b)) ||
            ("column" == t.subtype && (O || k || w || b)))
        ) {
          const e = (y[m].con = l.add({
              tag: "sr7-" + ("row" == t.subtype ? "row" : "col") + "-con",
            })),
            s = y[m].el;
          s.appendChild(C || L || (O ? _ : k ? F : w ? x : e)),
            C && C.appendChild(L || (O ? _ : k ? F : w ? x : e)),
            L && L.appendChild(O ? _ : k ? F : w ? x : e),
            O && _.appendChild(k ? F : w ? x : e),
            k && F.appendChild(w ? x : e),
            w && x.appendChild(e),
            "column" == t.subtype &&
              ((y[m].colbg = l.add({ tag: "sr7-col-bg" })),
              w
                ? ((y[m].colbgMask = l.add({ tag: "sr7-col-bg-mask" })),
                  y[m].colbgMask.appendChild(y[m].colbg),
                  O
                    ? _.appendChild(y[m].colbgMask)
                    : s.appendChild(y[m].colbgMask))
                : O
                ? _.appendChild(y[m].colbg)
                : s.appendChild(y[m].colbg));
        } else
          (C || O || k || w) &&
            (v.parentNode.insertBefore(C || L || (O ? _ : k ? F : x), v),
            C && C.appendChild(L || (O ? _ : k ? F : w ? x : v)),
            L && L.appendChild(O ? _ : k ? F : w ? x : v),
            O && _.appendChild(k ? F : w ? x : v),
            k && F.appendChild(w ? x : v),
            w && x.appendChild(v));
        void 0 !== S &&
          "SR7" !== S.slice(0, 3) &&
          ((v.dataset.type = t.type),
          void 0 !== t.subtype &&
            "" !== t.subtype &&
            (v.dataset.subtype = t.subtype));
        var E = SR7.F.drawRawLayer(m, "prepare", s, r);
        if (E.length > 0)
          for (let e in E) _tpt.hop(E, e) && void 0 !== E[e] && a.push(E[e]);
        return (
          "zone" == t.subtype
            ? ((p.zones[s].zones ??= {}), (p.zones[s].zones[m] = 0))
            : "slidebg" == t.subtype &&
              p.settings.mod?.d3 &&
              (c = {
                el: y[m].parallax
                  ? y[m].parallax
                  : y[m].loop
                  ? y[m].loop
                  : y[m].mask
                  ? y[m].mask
                  : y[m].el,
                use: t.mod?.m?.u ?? !1,
              }),
          p.settings.mod?.d3 &&
            t.mod?.m?.aBG &&
            ((p.c.d3tobg ??= {}),
            (p.c.d3tobg[s] ??= []),
            p.c.d3tobg[s].push(y[m])),
          "none" !== (t.mF ?? "none") &&
            (a.push(_tpt.checkResources(["cssfilters"])),
            v.classList.add(t.mF)),
          "none" == t.pE && _ && (_.style.pointerEvents = "none"),
          "none" == t.pE && F && (F.style.pointerEvents = "none"),
          { globalLowLayers: d, buildLayers: l, promises: a, d3tobg: c }
        );
      }),
      (SR7.F.prepareLayers = async (e, t, s) => {
        const i = SR7.M[e],
          a = i.slides[t];
        if (i?.layersPrepared?.[t]) return;
        let r,
          o = [],
          { layers: l } = a,
          n = _tpt.collector(),
          d = SR7.F.setLayerProcOrder(e, t);
        (i.hasTouchSwipe ??=
          "carousel" == i.settings.type ||
          _tpt.is_mobile ||
          ("off" !== String(i.settings.nav?.s?.use) &&
            "false" !== String(i.settings.nav?.s?.use) &&
            i.settings.nav?.s?.desk)),
          (i.c.layers ??= {}),
          (SR7.lToK ??= {}),
          (i.c.slideBGs ??= {});
        let c = i.c.layers,
          p = [];
        i.zoneIndexes ??= {};
        for (let i in d) {
          if (!_tpt.hop(d, i) || null == l[d[i]]) continue;
          ({
            globalLowLayers: p,
            buildLayers: n,
            promises: o,
            d3tobg: r,
          } = await SR7.F.prepareLayer(
            e,
            l[d[i]],
            t,
            d[i],
            o,
            s,
            a,
            n,
            "",
            p,
            r
          ));
          const h = l[d[i]].id;
          if ("-1" === String(l[h].pid)) continue;
          const u = c[SR7.F.getLKey(e, t, h)],
            m = c[SR7.F.getLKey(e, t, l[h].pid)];
          m[null == m.con ? "el" : "con"].appendChild(
            "column" == l[h].subtype || "row" == l[h].subtype
              ? u.el
              : u.addonWrap
              ? u.addonWrap
              : u.parallax
              ? u.parallax
              : u.loop
              ? u.loop
              : u.mask
              ? u.mask
              : u.el
          ),
            (u.ptype = m.subtype);
        }
        if (i.settings.mod?.d3) {
          if (
            ((i.c.d3 ??= {}),
            (i.c.d3[t] ??= {}),
            (i.c.d3[t].layers = _tpt.addContainer({
              tag: "sr7-3dwrap",
              class: "sr7-3dwrap-layers",
            })),
            n.append(i.c.d3[t].layers),
            r)
          ) {
            let e = _tpt.addContainer({
              tag: "sr7-3dwrap",
              class: "sr7-3dwrap-bg" + (r.use ? "" : "-no-3d"),
            });
            if ((e.appendChild(r.el), i.c.d3tobg?.[t]?.length > 0))
              for (let s of i.c.d3tobg[t]) e.appendChild(s.el);
            n.append(e),
              r.use && (i.c.d3[t].bg = e),
              i.c.slides[t].appendChild(e);
          }
          i.c.slides[t].appendChild(i.c.d3[t].layers);
        } else n.append(i.c.slides[t]);
        for (let s in d) {
          if (!_tpt.hop(d, s)) continue;
          const i = l[d[s]],
            a = SR7.F.attrId(i.attr?.id) ?? e + "-" + t + "-" + i.id;
          for (let s in i.addOns)
            _tpt.hop(i.addOns, s) &&
              SR7.A?.[s]?.postProcessLayer &&
              SR7.A[s].postProcessLayer(e, i, c[a], t);
        }
        if (
          ((i.layersPrepared ??= {}),
          (i.layersPrepared[t] = !0),
          a.slide.global)
        )
          for (const e of p)
            i.c.slides[t + "_2"].appendChild(
              "column" == c[e].subtype || "row" == c[e].subtype
                ? c[e].el
                : c[e].addonWrap
                ? c[e].addonWrap
                : c[e].parallax
                ? c[e].parallax
                : c[e].loop
                ? c[e].loop
                : c[e].mask
                ? c[e].mask
                : c[e].el
            );
        return (
          _tpt.injectCssJs("", void 0, void 0, e + "_" + t + "_layerstyles"),
          _tpt.R.fonts &&
            !SR7.M[e].c.waitingOnFont &&
            (_tpt.waitFonts(
              _tpt.R.fonts.required,
              function () {
                SR7.F.updateModuleDims(e, !0, !0);
              },
              e
            ),
            (SR7.M[e].c.waitingOnFont = !0)),
          Promise.all(o)
        );
      }),
      (SR7.F.getSlideBGSource = (e, t) => {
        const { bg: s } =
          SR7.M[e].slides[t].layers[SR7.M[e].c.slideBGs[t].lkey];
        return s?.image?.src ?? s?.video?.poster?.src ?? void 0;
      }),
      (SR7.F.setLayerProcOrder = (e, t) => {
        if (void 0 === t || -1 === t) return;
        const s = SR7.M[e];
        s.c.PO ??= {};
        const i = s.slides[t],
          { layers: a } = i,
          r = (s.c.PO[t] ??= []),
          o = {};
        Object.keys(a).forEach((e) => {
          const t = a[e],
            s = String(t.pid);
          o[s] || (o[s] = []), o[s].push(t);
        });
        const l = (e) => {
          const t = o[e] ?? [];
          t.sort(
            (e, t) =>
              (void 0 !== e.order ? e.order : e.zIndex) -
              (void 0 !== t.order ? t.order : t.zIndex)
          );
          for (const e of t)
            if ((r.push(e.id), "container" === e.type && o[e.id])) {
              o[e.id].sort((e, t) => {
                if ("relative" === e.pos.pos && "relative" !== t.pos.pos)
                  return -1;
                if ("relative" !== e.pos.pos && "relative" === t.pos.pos)
                  return 1;
                return (
                  (void 0 !== e.order ? e.order : e.zIndex) -
                  (void 0 !== t.order ? t.order : t.zIndex)
                );
              }),
                l(e.id);
            }
        };
        return l("-1"), r;
      }),
      (SR7.F.layerListener = (e, t, s, i, a, r) => {
        if (void 0 !== s && !1 !== s) {
          let s;
          for (let o of t)
            (s = _tpt.tEvt(o)),
              (e.listeners[s] ??= _tpt.event.listen(
                e.el,
                s,
                SR7.F.layerMouse,
                e,
                r
              )),
              a &&
                ((e.listeners.callbacks ??= {}),
                (e.listeners.callbacks[s] ??= {}),
                (e.listeners.callbacks[s][i] = a));
        } else {
          let s;
          for (let i of t)
            (s = _tpt.tEvt(i)),
              _tpt.event.rm(e.el, e.listeners[s]),
              delete e.listeners[s];
        }
        return _tpt.event.hasListener(e.el);
      }),
      (SR7.F.manageLayerListeners = (e, t, s, i, a, r) => {
        e.listeners.hover &&
          (e.listeners.hasAny = SR7.F.layerListener(
            e,
            _tpt.is_mobile
              ? ["touchstart", "touchend", "touchmove"]
              : ["mousemove", "mouseleave", "mouseenter"],
            s
          )),
          e.listeners.toggle &&
            (e.listeners.hasAny = SR7.F.layerListener(e, ["click"], s)),
          void 0 !== t &&
            void 0 !== e.listeners.action &&
            !1 !== e.listeners.action &&
            (e.listeners.hasAny = SR7.F.layerListener(
              e,
              _tpt.tEvt(t.listen),
              s
            )),
          void 0 !== i &&
            !1 !== e.listeners[i] &&
            (e.listeners.hasAny = SR7.F.layerListener(e, a, s, i, r)),
          void 0 === e.media ||
            "slidebg" === e.subtype ||
            t?.content?.noInteract ||
            ((e.media.player.options.controls ?? "").includes("s") &&
              !e.media.player.options.canHide) ||
            (e.listeners.hasAny = SR7.F.layerListener(e, ["click"], s));
      }),
      (SR7.F.layerMouse = (e, t) => {
        let s = _tpt.tEvt(e.type);
        if (
          ("mouseenter" == s ||
          "touchstart" == s ||
          "mousemove" == s ||
          "touchmove" == s
            ? t.listeners.hover &&
              SR7.F.processHover(SR7.F.getLayer(t.el.id), "hover")
            : "mouseleave" == s || "touchend" == s
            ? t.listeners.hover &&
              SR7.F.processHover(SR7.F.getLayer(t.el.id), "idle")
            : "click" == s &&
              (t.listeners.toggle && SR7.F.toggleLayer(SR7.F.getLayer(t.el.id)),
              void 0 === t.media ||
                ((t.media.player.options.controls ?? "").includes("s") &&
                  !t.media.isHidden()) ||
                t.media.toggle()),
          "touchend" === s)
        ) {
          let t = e.touches[0] || e.changedTouches[0];
          e.target !== document.elementFromPoint(t.clientX, t.clientY) &&
            (s = "mouseleave");
        }
        if (
          (t.listeners.action &&
            t.listeners.action.indexOf(s) >= 0 &&
            SR7.F.processActions(s, t),
          t.listeners.callbacks?.[s])
        )
          for (let i in t.listeners.callbacks[s])
            _tpt.hop(t.listeners.callbacks[s], i) &&
              t.listeners.callbacks[s][i](t.mid, e, t);
      }),
      (SR7.F.processActions = (e, t) => {
        const { id: s, skey: i } = SR7.F.getLayer(t.el.id),
          a = String(t.lkey);
        let r = _tpt.tEvt(e);
        const o = _tpt.tEvt(
          "mouseleave" == r || "touchend" == r
            ? "mouseenter"
            : "mouseenter" == r || "touchstart" == r
            ? "mouseleave"
            : "click"
        );
        if (
          ((t.delayedAction ??= {}), null != SR7.M[s].slides[i].slide.actions)
        ) {
          if (
            ((t.listeners.aCache[r] ??= SR7.M[s].slides[i].slide.actions.filter(
              (e) => e.src.some((e) => String(e) === a) && _tpt.tEvt(e.evt) == r
            )),
            t.delayedAction[o])
          )
            for (let e of t.delayedAction[o])
              void 0 !== e && void 0 !== e.kill && e.kill();
          (t.delayedAction[o] = []), (t.delayedAction[r] = []);
          for (let e in t.listeners.aCache[r])
            if (_tpt.hop(t.listeners.aCache[r], e)) {
              let a = t.listeners.aCache[r][e];
              if (!SR7.F.shouldUpdate(t, a.rd, a.a)) continue;
              if (!t.animState?.stageState) continue;
              t.delayedAction[r].push(
                _tpt.gsap.delayedCall(
                  parseInt(a.d ?? 0) / 1e3,
                  SR7.F.actionCall,
                  [s, i, a, t.el]
                )
              );
            }
        }
      }),
      (SR7.F.updateAllTogglePrgLayers = (e) => {
        requestAnimationFrame(function () {
          let t = SR7.M[e];
          for (let s in t.slides)
            if (
              _tpt.hop(t.slides, s) &&
              null != (t.slides?.[s]?.slide?.actions ?? void 0) &&
              0 != t.slides[s].slide.actions.length
            )
              for (let i of t.slides[s].slide.actions)
                if ("togglePrg" == i.a)
                  for (let a of i.src) {
                    let i = SR7.F.getLayer({ skey: s, lkey: a, id: e });
                    i.c &&
                      i.layer &&
                      SR7.F.toggleLayer(
                        i,
                        "paused" == (t.slideShow?.state ?? "playing")
                      );
                  }
        });
      }),
      (SR7.F.actionCall = (id, skey, action, el) => {
        const M = SR7.M[id];
        switch (
          ((M.states.actions ??= {}),
          (M.states.debounceTimers ??= new Map()),
          action.a)
        ) {
          case "playScene":
            if (null == action.target) return;
            for (let e of action.target) {
              let [t, s] = String(e).includes(":")
                ? String(e).split(":")
                : [skey, e];
              M.states.debounceTimers.has(t + "_" + s) &&
                clearTimeout(M.states.debounceTimers.get(t + "_" + s)),
                M.states.debounceTimers.set(
                  t + "_" + s,
                  setTimeout(() => {
                    SR7.F.animateLayers({
                      id: id,
                      skey: t,
                      layers: [s],
                      scene: action.sc,
                      reset: action.rec,
                      caller: "action",
                    }),
                      M.states.debounceTimers.delete(t + "_" + s);
                  }, 19)
                );
            }
            break;
          case "toggleScenes":
            if (action.target)
              for (let e of action.target) {
                let [t, s] = String(e).includes(":")
                  ? String(e).split(":")
                  : [skey, e];
                M.states.debounceTimers.has(t + "_" + s) &&
                  clearTimeout(M.states.debounceTimers.get(t + "_" + s)),
                  M.states.debounceTimers.set(
                    t + "_" + s,
                    setTimeout(() => {
                      (M.states.actions[skey] ??= {}),
                        SR7.F.shouldUpdate(M.states.actions[skey], 31, s) &&
                          SR7.F.animateLayers({
                            id: id,
                            skey: t,
                            layers: [s],
                            scene:
                              (M.c.layers[SR7.lToK[id + "-" + t + "-" + s]]
                                ?.animState?.scene ?? "") == action.scn
                                ? action.scm
                                : action.scn,
                            reset: action.rec,
                            caller: "action",
                          }),
                        M.states.debounceTimers.delete(t + "_" + s);
                    }, 19)
                  );
              }
            break;
          case "callSlide":
            SR7.F.requestSlide({
              id: id,
              slide:
                "first" == action.target
                  ? "#" + M.navSlideOrder[0]
                  : "last" == action.target
                  ? "#" + M.navSlideOrder[M.len - 1]
                  : "random" == action.target
                  ? Math.round(Math.random() * M.navLen + 1)
                  : "#" +
                    (Array.isArray(action.target)
                      ? action.target[0]
                      : action.target),
            });
            break;
          case "pause":
            SR7.slideShow.pause(id);
            break;
          case "resume":
            SR7.slideShow.resume(id);
            break;
          case "togglePrg":
            SR7.slideShow[
              "paused" == (M.slideShow?.state ?? "nothing") ? "resume" : "pause"
            ](id);
            break;
          case "prev":
            SR7.F.requestSlide({ id: id, slide: "-1" });
            break;
          case "next":
            SR7.F.requestSlide({ id: id, slide: "+1" });
            break;
          case "toggleClass":
            for (let e of action.target) {
              let t = M.c.layers[SR7.lToK[id + "-" + skey + "-" + e]].el;
              t.classList[
                t.className.includes(action.class) ? "remove" : "add"
              ](action.class);
            }
            break;
          case "simulate":
            if (SR7.M[id].c?.swipeAble && SR7.M[id].c.swipeAble.length)
              for (let e of SR7.M[id].c.swipeAble) e.disable();
            for (let e of action.target)
              M.c.layers[
                SR7.lToK[id + "-" + skey + "-" + e] ?? SR7.lToK[id + "-" + e]
              ].el.dispatchEvent(new Event(action.typ, { bubbles: !0 }));
            if (SR7.M[id].c?.swipeAble && SR7.M[id].c.swipeAble.length)
              for (let e of SR7.M[id].c.swipeAble) e.enable();
            break;
          case "menu":
          case "link":
            ("a" !== action.ltype ||
              ("" !== action.anchor && void 0 !== action.anchor)) &&
              openUrlOrScroll(action, id);
            break;
          case "callback":
            eval(action.target);
            break;
          case "scroll":
            SR7.F.scrollToId({
              id: id,
              offset: action.offset,
              action: action.a,
              anchor: action.target,
              speed: action.s ?? 1e3,
              ease: action.e,
            });
            break;
          case "scrollbelow":
            SR7.F.scrollToId({
              id: id,
              offset: action.offset,
              action: action.a,
              speed: action.s ?? 1e3,
              ease: action.e,
            });
            break;
          case "getAccelerationPermission":
            _tpt.getAccelerationPermission(id);
            break;
          case "open_modal":
            String(action.msl).includes("rs-") &&
              SR7?.D?.fixSR6IDs &&
              (action.msl =
                "#" + SR7.D.fixSR6IDs(action.msl.replace("rs-", ""))),
              SR7.F.modal.open(action.target, action.msl ?? 0);
            break;
          case "close_modal":
            SR7.F.modal.close();
            break;
          case "mute_video":
          case "unmute_video":
          case "toggle_mute_video":
            for (let e of action.target) {
              let [t, s] = String(e).includes(":")
                ? String(e).split(":")
                : [skey, e];
              if (
                ("backgroundvideo" == s && (s = SR7.F.getSlideBG(id, t).id),
                M.c.layers[SR7.lToK[id + "-" + t + "-" + s]].media)
              ) {
                let e = M.c.layers[SR7.lToK[id + "-" + t + "-" + s]].media,
                  i = "audio" == e?.player?.options?.type,
                  a =
                    "mute_video" == action.a
                      ? "mute"
                      : "unmute_video" == action.a ||
                        (null == e.player.muted
                          ? e.player.player.muted
                          : e.player.muted) ||
                        (i && e.player.player.paused)
                      ? "unmute"
                      : "mute";
                i && "unmute" == a && e.play(), e[a]();
              }
            }
            break;
          case "toggle_video":
          case "stop_video":
          case "start_video":
            for (let e of action.target) {
              let [t, s] = String(e).includes(":")
                ? String(e).split(":")
                : [skey, e];
              if (
                ("backgroundvideo" == s && (s = SR7.F.getSlideBG(id, t).id),
                M.c.layers[SR7.lToK[id + "-" + t + "-" + s]].media)
              ) {
                let e =
                  M.c.layers[SR7.lToK[id + "-" + t + "-" + s]].media.player
                    .lastPlayerState;
                (e =
                  "start_video" == action.a
                    ? "play"
                    : "stop_video" == action.a || 1 == e
                    ? "pause"
                    : "play"),
                  M.c.layers[SR7.lToK[id + "-" + t + "-" + s]].media[e]();
              }
            }
            break;
          case "exitfullscreen":
          case "togglefullscreen":
          case "gofullscreen":
            SR7.F.module.fullScreen(
              id,
              "gofullscreen" == action.a ||
                ("togglefullscreen" == action.a && !M.states.inFullscreen)
            );
            break;
          default:
            for (let e of action.target) {
              e = "" + e;
              let [t, s] = String(e).includes(":")
                ? String(e).split(":")
                : [skey, e];
              _tpt.event.trigger("dom", "sr.layer.action", {
                id: id,
                action: action,
                scene: action.sc,
                skey: t,
                lkey: s,
                eventtype: action.a,
              });
            }
        }
      }),
      (SR7.F.shouldUpdate = (e, t = 0, s) => {
        if (!t || 0 == t) return !0;
        (t = parseInt(t)), (e.timeStamps ??= {});
        const i = new Date().getTime(),
          a = e.timeStamps[s] ? i - e.timeStamps[s] : t + 100;
        return a > t && (e.timeStamps[s] = i), a > t;
      }),
      (SR7.F.toggleLayer = (e, t) => {
        let { c: s, skey: i } = e;
        null != s.tog &&
          ((s.tog.default ??= s.el.innerHTML),
          (s.el.innerHTML =
            !0 === t
              ? s.tog.default
              : !1 === t
              ? s.tog.toggled
              : s.tog.state
              ? s.tog.default
              : s.tog.toggled),
          (s.tog.state = 1 == t || (!1 !== t && !s.tog.state)),
          SR7.F.positionLayer(e, i));
      }),
      (SR7.F.showHideLayersOnHover = (e, t) => {
        let s = "hide" == t || "mouseleave" == t.type ? "add" : "remove";
        SR7.M[e].c.viSH.el.forEach((t) => {
          SR7.M[e].c.layers[SR7.lToK[t]].el.classList[s]("sr7--hidden");
        });
      }),
      (_tpt.R ??= {}),
      (_tpt.R.layer = _tpt.extend
        ? _tpt.extend(_tpt.R.layer, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" }));
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      !SR7.loadVideoAPI)
    ) {
      SR7.loadVideoAPI = (e) =>
        new Promise((t, s) => {
          if ("html5" === e || "audio" === e) return void t();
          const i = {
            youtube: {
              globalObjectName: "YT",
              playerObjectName: "Player",
              scriptSrc: "https://www.youtube.com/iframe_api",
            },
            vimeo: {
              globalObjectName: "Vimeo",
              playerObjectName: "Player",
              scriptSrc: "https://player.vimeo.com/api/player.js",
            },
          }[e];
          if (!i)
            return void s(
              new Error('Invalid API name. Please use "youtube" or "vimeo"')
            );
          const a = () =>
              window[i.globalObjectName] &&
              window[i.globalObjectName][i.playerObjectName],
            r = Array.from(document.getElementsByTagName("script")).find(
              (e) => e.src === i.scriptSrc
            );
          if (a()) t();
          else {
            if (r) {
              const e = setInterval(() => {
                a() && (t(), clearInterval(e));
              }, 50);
              return;
            }
            {
              const r = document.createElement("script");
              (r.src = i.scriptSrc),
                (r.onload = () => {
                  const e = setInterval(() => {
                    a() && (t(), clearInterval(e));
                  }, 50);
                }),
                (r.onerror = () => s(new Error(`Failed to load ${e} API`))),
                document.head.appendChild(r);
            }
          }
        });
      class e {
        states = {
          unstarted: -1,
          ended: 0,
          playing: 1,
          paused: 2,
          buffering: 3,
          cued: 4,
        };
        constructor(e, t, s) {
          let { id: i, skey: a, lkey: r } = SR7.F.getLayer(t.id);
          (this.el = t),
            (this.id = i),
            (this.skey = a),
            (this.container = e),
            (this.containerId = e.id),
            (this.options = s),
            (this.player = null),
            (this.aspectRatio = _tpt.getRatio(this.options.ratio)),
            (this.options.loop = s.loop || !1),
            (this.options.start = parseInt(this.convertSec(s.start))),
            (this.options.end = parseInt(this.convertSec(s.end))),
            (this.state = null),
            (this.type = s.type),
            (this.requestedAction = null),
            (this.listeners = {}),
            (this.options.canHide =
              (!_tpt.is_mobile &&
                1 == (this.options.poster?.showOnPause ?? void 0)) ||
              (_tpt.is_mobile &&
                !0 !== (this.options.poster?.noOnMobile ?? !1) &&
                1 == (this.options.poster?.showOnPause ?? void 0)));
        }
        convertSec(e) {
          return "" == e
            ? 0
            : null == e
            ? -1
            : _tpt.isNumeric(e)
            ? e
            : e.split(":").length > 1
            ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0)
            : e;
        }
        async waitForContainer(e) {
          let t = 0;
          return new Promise((s, i) => {
            let a = document.getElementById(e);
            if (a) return void s(a);
            const r = setInterval(() => {
              let a = document.getElementById(e);
              a
                ? (clearInterval(r), s(a))
                : t >= 100 &&
                  (clearInterval(r),
                  i(
                    new Error(
                      "Container element not found within the timeout period."
                    )
                  )),
                (t += 19);
            }, 19);
          });
        }
        showHide() {
          if (null == this.lastPlayerState)
            this.options.canHide &&
              _tpt.gsap.set(this.container, {
                opacity: 0,
                pointerEvents: "none",
              }),
              (this.hidden = !0);
          else if (this.lastPlayerState == this.states.playing) {
            if (((this.pauseBy = null), this.container.style.opacity < 1)) {
              let e = new Date().getTime() - (this.frameStart ?? 0);
              _tpt.gsap.to(this.container, e < 500 ? 0 : 0.5, {
                opacity: 1,
                pointerEvents: (this.options.controls ?? "").includes("s")
                  ? "auto"
                  : "none",
              }),
                (this.hidden = !1);
            }
          } else
            (this.lastPlayerState != this.states.paused &&
              this.lastPlayerState != this.states.ended) ||
              (this.options.canHide &&
                "scroll" !== this.pauseBy &&
                (_tpt.gsap.to(this.container, 0.5, {
                  opacity: 0,
                  pointerEvents: "none",
                }),
                (this.hidden = !0)));
          "none" == this.options.controls &&
            this.canvas &&
            (this.canvas.wrap.style.pointerEvents = "none");
        }
        isHidden() {
          return this.hidden;
        }
        isPlaying() {
          return this.lastPlayerState == this.states.playing;
        }
        toggle() {
          this.player &&
            (this.lastPlayerState == this.states.playing
              ? this.pause()
              : this.play());
        }
        hasEvent(e) {
          return this.listeners[e];
        }
        removeEvent(e) {
          this.listeners[e] && delete this.listeners[e];
        }
        playingList(e, t) {
          null != t &&
            ((SR7.M[t.id].videosPlaying ??= {}),
            "add" === e
              ? (SR7.M[t.id].videosPlaying[t.containerId] = t)
              : "remove" == e &&
                delete SR7.M[t.id].videosPlaying[t.containerId]);
        }
        stopPlayingMedias() {
          if (null != SR7.M[this.id].videosPlaying)
            for (let e in SR7.M[this.id].videosPlaying)
              _tpt.hop(SR7.M[this.id].videosPlaying, e) &&
                e !== this.containerId &&
                SR7.M[this.id].videosPlaying[e].pause();
        }
        dispatch(e, t) {
          if (!this.listeners) return;
          const s = this.listeners[e];
          s && s.callback(t, s.params);
        }
        async ensureReadyAndExecute(e, t, s) {
          this.requestedAction = t;
          let i = this.requestedAction;
          this.playerReady
            ? this.readyEventWaitAdded && this.removeEvent("ready")
            : await new Promise((e) => {
                (this.readyEventWaitAdded = !0),
                  (this.readyListenerID = this.addEvent("ready", e));
              }),
            i === this.requestedAction && e.call(this, s);
        }
      }
      class t extends e {
        async add() {
          await SR7.loadVideoAPI("youtube");
          try {
            await this.waitForContainer(this.containerId);
          } catch (e) {
            return void console.error(e);
          }
          (this.player = new YT.Player(this.containerId, {
            height: _tpt.unitize(this.options.height, "px"),
            width: _tpt.unitize(this.options.width, "px"),
            videoId: this.options.src,
            playerVars: {
              origin: window.location.origin,
              playsinline: this.options.inline,
              enablejsapi: 1,
              controls: (this.options.controls ?? "").includes("s") ? 1 : 0,
              showinfo: 0,
              modestbranding: 1,
              wmode: "opaque",
              muted: this.options.mute,
              html5: 1,
              start: this.options.start,
              end: this.options.end,
              loop: this.options.loop ? 1 : 0,
              rel: 0,
            },
            events: {
              onReady: (e) => {
                (this.playerReady = !0),
                  this.player.setVolume(this.options.volume),
                  this.updateSize(this.options.width, this.options.height),
                  this.dispatch("ready", e);
              },
            },
          })),
            this.addEvent(),
            (this.container = document.getElementById(this.containerId)),
            (this.muted = this.options.mute),
            this.showHide();
        }
        rewind(e) {
          this.player &&
            this.player.seekTo &&
            (this.player.seekTo(this.options.start, !0),
            ("pause" != this.requestedAction && "pause" != e) || this.pause());
        }
        remove() {
          this.player && (this.player.destroy(), (this.player = null));
        }
        mute() {
          this.player &&
            (this.player.mute(), (this.player.muted = this.muted = !0));
        }
        unmute() {
          this.player &&
            (this.player.unMute(), (this.player.muted = this.muted = !1));
        }
        async play() {
          this.player &&
            (await this.ensureReadyAndExecute(async () => {
              this.player.playVideo(),
                await new Promise((e) => setTimeout(e, 1e3)),
                1 !== this.player.getPlayerState() &&
                  (this.player.mute(), this.player.playVideo());
            }, "play"));
        }
        pause(e) {
          this.player &&
            ((this.pauseBy = e),
            this.ensureReadyAndExecute(() => {
              this.player.pauseVideo();
            }, "pause"));
        }
        updateSize(e, t) {
          this.options.cover
            ? (this.aspectRatio <= this.el.clientWidth / this.el.clientHeight
                ? (t = (e = this.el.clientWidth) / this.aspectRatio) <
                    this.el.clientHeight && (t = this.el.clientHeight)
                : (e = (t = this.el.clientHeight) * this.aspectRatio) <
                    this.el.clientWidth && (e = this.el.clientWidth),
              void 0 !== e &&
                0 !== e &&
                e !== this.container.width &&
                (this.container.style.width = this.container.width =
                  _tpt.unitize(e, "px")),
              void 0 !== t &&
                0 !== t &&
                t !== this.container.height &&
                (this.container.style.height = this.container.height =
                  _tpt.unitize(t, "px")),
              t > this.el.clientHeight
                ? (this.container.style.transform =
                    "translateX(0px) translateY(" +
                    _tpt.unitize((this.el.clientHeight - t) / 2, "px") +
                    ")")
                : e > this.el.clientWidth
                ? ((this.container.style.transform =
                    "translateY(0px) translateX(" +
                    _tpt.unitize((this.el.clientWidth - e) / 2, "px") +
                    ")"),
                  (this.container.style.maxWidth = "none"))
                : (this.container.style.transform =
                    "translateY(0px) translateX(0px)"))
            : (void 0 !== e &&
                0 !== e &&
                e !== this.container.width &&
                (this.container.width = _tpt.unitize(e, "px")),
              void 0 !== t &&
                0 !== t &&
                t !== this.container.height &&
                (this.container.height = _tpt.unitize(t, "px")));
        }
        addEvent(e, t, s) {
          let i;
          return (
            this.stateChangeListenerAdded ||
              ((this.lastPlayerState = null),
              this.player.addEventListener("onError", (e) => {
                console.group("SR7 YT Embeding Issue"),
                  console.log(e),
                  console.groupEnd("SR7 YT Embeding Issue");
              }),
              (i = this.player.addEventListener("onStateChange", (e) => {
                switch (
                  (0 !== this.options.end &&
                  this.player.getCurrentTime() >= this.options.end
                    ? (e.data = this.states.ended)
                    : 0 !== this.options.start &&
                      e.data == this.states.playing &&
                      this.player.getCurrentTime() < this.options.start &&
                      this.rewind(),
                  "false" !== this.options.autoPlay &&
                  !1 !== this.options.autoPlay &&
                  "no1sttime" !== this.options.autoPlay &&
                  !this.muteFallBack &&
                  "play" == this.requestedAction &&
                  this.playerReady &&
                  this.lastPlayerState === this.states.unstarted &&
                  e.data !== this.states.playing
                    ? (this.player.mute(),
                      this.player.playVideo(),
                      (this.muteFallBack = !0),
                      (this.requestedAction = "play"))
                    : e.data === this.states.ended &&
                      (this.options.loop
                        ? (this.rewind(),
                          this.player.playVideo(),
                          (this.requestedAction = "play"))
                        : (this.options.rewind && this.rewind(),
                          this.player.pauseVideo(),
                          (this.requestedAction = "pause"))),
                  this.muted && this.player.mute(),
                  e.data)
                ) {
                  case this.states.paused:
                    this.playingList("remove", this),
                      this.dispatch("paused", e),
                      (this.state = "paused"),
                      SR7.F.triggerMediaEvent(this, "update");
                    break;
                  case this.states.playing:
                    this.playingList("add", this),
                      this.dispatch("playing", e),
                      (this.state = "playing"),
                      SR7.F.triggerMediaEvent(this, "update");
                    break;
                  case this.states.ended:
                    this.playingList("remove", this),
                      -1 !== this.lastPlayerState
                        ? (this.dispatch("finished", e), (this.state = "ended"))
                        : (this.state = "paused"),
                      SR7.F.triggerMediaEvent(this, "update");
                }
                (this.lastPlayerState = e.data), this.showHide();
              })),
              (this.stateChangeListenerAdded = !0)),
            void 0 !== e && (this.listeners[e] = { callback: t, params: s }),
            i
          );
        }
      }
      class s extends e {
        async add() {
          await SR7.loadVideoAPI("vimeo"),
            (this.options.args = this.options.args ?? "");
          try {
            await this.waitForContainer(this.containerId);
          } catch (e) {
            return void console.error(e);
          }
          let e = {
            height: _tpt.unitize(this.options.height, "px"),
            width: _tpt.unitize(this.options.width, "px"),
            id: this.options.src,
            controls: !!(this.options.controls ?? "").includes("s"),
            autoplay: this.options.autoPlay,
            loop: this.options.loop,
            muted: this.options.mute,
            playsinline: this.options.inline,
            responsive: !1,
            title:
              !(
                !this.options.args.includes("title=true") &&
                !this.options.args.includes("title=1")
              ) ||
              (!this.options.args.includes("title=false") &&
                !this.options.args.includes("title=0") &&
                void 0),
          };
          (this.options.args.includes("transparent=false") ||
            this.options.args.includes("transparent=0")) &&
            (e.transparent = !1),
            (this.options.args.includes("transcript=false") ||
              this.options.args.includes("transcript=0")) &&
              (e.transcript = !1);
          let t = this.options.args.includes("quality=144p")
              ? "144p"
              : this.options.args.includes("quality=240p")
              ? "240p"
              : this.options.args.includes("quality=360p")
              ? "360p"
              : this.options.args.includes("quality=540p")
              ? "540p"
              : this.options.args.includes("quality=720p")
              ? "720p"
              : this.options.args.includes("quality=1080p")
              ? "1080p"
              : this.options.args.includes("quality=2k")
              ? "2k"
              : this.options.args.includes("quality=4k")
              ? "4k"
              : void 0,
            s =
              !(
                !this.options.args.includes("portrait=true") &&
                !this.options.args.includes("portrait=1")
              ) ||
              (!this.options.args.includes("portrait=false") &&
                !this.options.args.includes("portrait=0") &&
                void 0),
            i =
              !(
                !this.options.args.includes("dnt=true") &&
                !this.options.args.includes("dnt=1")
              ) ||
              (!this.options.args.includes("dnt=false") &&
                !this.options.args.includes("dnt=0") &&
                void 0);
          t && (e.quality = t),
            s && (e.portrait = s),
            i && (e.dnt = i),
            (e.pip = !(
              !this.options.args.includes("pip=true") &&
              !this.options.args.includes("pip=1")
            )),
            (this.player = new Vimeo.Player(this.containerId, e)),
            (this.pauseRequested = !1),
            this.player.setCurrentTime(this.options.start),
            this.player.ready().then(() => {
              (this.iframe = this.container.getElementsByTagName("IFRAME")),
                null !== this.iframe && (this.iframe = this.iframe[0]),
                (this.playerReady = !0),
                this.updateSize(this.options.width, this.options.height),
                (this.iframe.style.opacity = 1),
                this.dispatch("ready");
            }),
            (this.muted = this.options.mute),
            this.addEvent(),
            this.showHide(),
            this.rewind("pause"),
            (this.muteFallBack = !1);
        }
        rewind(e) {
          this.player &&
            (this.player.setCurrentTime(this.options.start),
            "pause" == e && this.pause());
        }
        remove() {
          this.player &&
            this.player.unload().then(() => {
              this.player = null;
            });
        }
        mute() {
          if (!this.player) return;
          let e = this,
            t = this.player;
          this.player
            .getVolume()
            .then(function (s) {
              (e.player.muted = !0),
                (e.lastVolume = 0 == s ? 1 : s),
                t.setVolume(0),
                (e.muted = !0);
            })
            .catch(function (e) {
              console.error("Error getting volume:", e);
            });
        }
        unmute() {
          if (!this.player) return;
          let e = this;
          (e.lastVolume =
            null == e.lastVolume || 0 == e.lastVolume ? 1 : e.lastVolume),
            this.player.setVolume(e.lastVolume).catch(function (e) {
              console.error("Error setting volume:", e);
            }),
            (e.muted = !1),
            (e.player.muted = !1);
        }
        updateSize(e, t) {
          this.player &&
            this.playerReady &&
            (this.options.cover
              ? (this.aspectRatio <= this.el.clientWidth / this.el.clientHeight
                  ? (t = (e = this.container.clientWidth) / this.aspectRatio)
                  : (e = (t = this.container.clientHeight) * this.aspectRatio),
                void 0 !== e &&
                  0 !== e &&
                  e !== this.iframe.width &&
                  (this.iframe.style.width = this.iframe.width =
                    _tpt.unitize(e, "px")),
                void 0 !== t &&
                  0 !== t &&
                  t !== this.iframe.height &&
                  (this.iframe.style.height = this.iframe.height =
                    _tpt.unitize(t, "px")),
                t > this.container.clientHeight
                  ? (this.iframe.style.transform =
                      "translateX(0px) translateY(" +
                      _tpt.unitize(
                        (this.container.clientHeight - t) / 2,
                        "px"
                      ) +
                      ")")
                  : e > this.container.clientWidth &&
                    (this.iframe.style.transform =
                      "translateY(0px) translateX(" +
                      _tpt.unitize((this.container.clientWidth - e) / 2, "px") +
                      ")"))
              : (void 0 !== e &&
                  0 !== e &&
                  e !== this.iframe.width &&
                  (this.iframe.width = _tpt.unitize(e, "px")),
                void 0 !== t &&
                  0 !== t &&
                  t !== this.iframe.height &&
                  (this.iframe.height = _tpt.unitize(t, "px"))));
        }
        async play() {
          this.player &&
            ((this.pauseRequested = !1),
            this.ensureReadyAndExecute(async () => {
              try {
                if (
                  (!_tpt.userInteracted &&
                    this.options.autoPlay &&
                    this.player.setVolume(0),
                  await this.player.play(),
                  this.pauseRequested)
                )
                  return void this.pause();
                this.lastPlayerState = this.states.playing;
              } catch (e) {
                if ("NotAllowedError" === e.name)
                  (this.muteFallBack = !0),
                    this.player.setVolume(0),
                    "false" !== this.options.autoPlay &&
                      !1 !== this.options.autoPlay &&
                      "no1sttime" !== this.options.autoPlay &&
                      this.play();
                else if ("AbortError" === e.name)
                  console.log("Play was interrupted."),
                    (this.lastPlayerState = this.states.paused);
                else {
                  if ("PlayInterrupted" !== e.name) throw e;
                  console.log("Play was interrupted by a pause request.");
                }
              }
            }, "play"));
        }
        async pause(e) {
          (this.pauseRequested = !0),
            this.player &&
              ((this.pauseBy = e),
              this.ensureReadyAndExecute(async () => {
                try {
                  if (await this.player.getPaused()) return;
                  await this.player.pause(),
                    (this.lastPlayerState = this.states.paused);
                } catch (e) {
                  if ("NotAllowedError" === e.name)
                    this.player.setVolume(0), this.pause();
                  else {
                    if ("AbortError" !== e.name) throw e;
                    console.log("Pause was interrupted."),
                      (this.lastPlayerState = this.states.paused);
                  }
                }
              }, "pause"));
        }
        addEvent(e, t, s) {
          let i;
          return (
            this.stateChangeListenerAdded ||
              ((this.lastPlayerState = null),
              this.player.on("play", () => {
                (this.lastPlayerState = this.states.playing),
                  this.playingList("add", this),
                  this.dispatch("playing"),
                  this.showHide(),
                  (this.state = "playing"),
                  SR7.F.triggerMediaEvent(this, "update");
              }),
              this.player.on("pause", () => {
                (this.lastPlayerState = this.states.paused),
                  this.playingList("remove", this),
                  this.dispatch("paused"),
                  this.showHide(),
                  (this.state = "paused"),
                  SR7.F.triggerMediaEvent(this, "update");
              }),
              this.player.on("ended", () => {
                (this.lastPlayerState = this.states.ended),
                  this.playingList("remove", this),
                  this.dispatch("finished"),
                  this.showHide(),
                  (this.state = "finished"),
                  SR7.F.triggerMediaEvent(this, "update");
              }),
              (i = this.player.on("timeupdate", (e) => {
                0 !== this.options.end && e.seconds >= this.options.end
                  ? this.options.loop
                    ? (this.rewind(), this.play())
                    : (this.options.rewind && this.rewind(),
                      this.pause(),
                      this.dispatch("finished"))
                  : 0 !== this.options.start &&
                    e.seconds < this.options.start &&
                    this.rewind(),
                  this.muted && this.player.setVolume(0),
                  this.dispatch("timeupdate", e),
                  (this.lastPlayerState = this.getState()),
                  this.showHide();
              })),
              (this.stateChangeListenerAdded = !0)),
            void 0 !== e && (this.listeners[e] = { callback: t, params: s }),
            i
          );
        }
      }
      class i extends e {
        constructor(e, t, s) {
          super(e, t, s), (this.player = null);
        }
        async add() {
          try {
            await this.waitForContainer(this.containerId);
          } catch (e) {
            return void console.error(e);
          }
          const e = document.createElement(
            "audio" == this.options.type ? "audio" : "video"
          );
          e.setAttribute("id", this.containerId + "_html5"),
            (e.className = "sr7-html5-video"),
            e.setAttribute("src", _tpt.urlProtocol(this.options.src)),
            e.setAttribute("preload", "metadata"),
            e.setAttribute("playsInline", "metadata"),
            (this.options.controls ?? "").includes("s") &&
              e.setAttribute("controls", ""),
            "audio" == this.options.type &&
              void 0 !== this.options.controls &&
              (this.options.controls = this.options.controls.replace("xl", "")),
            (("audio" == this.options.type && "" == this.options.controls) ||
              null == this.options.controls) &&
              this.el.classList.add("sr7-hidden-audio"),
            1 == this.options.mute && e.setAttribute("muted", ""),
            1 == this.options.loop && e.setAttribute("loop", ""),
            this.container.appendChild(e),
            (this.player = e),
            (this.container.style.width = "100%"),
            (this.player.style.width = "100%"),
            (this.container.style.height =
              "auto" == this.options.target.style.height ? "auto" : "100%"),
            (this.player.style.height =
              "auto" == this.options.target.style.height ? "auto" : "100%"),
            (this.playerReady = !0),
            (this.options.volume = this.options.volume ?? 1),
            (this.options.volume =
              this.options.volume > 1
                ? this.options.volume / 100
                : this.options.volume),
            (this.player.volume = this.options.volume),
            this.dispatch("ready"),
            this.addEvent(),
            this.showHide(),
            this.updateSize(
              this.options.width,
              this.options.height,
              this.options.cover ?? 1 ? "cover" : "contain"
            ),
            this.rewind("pause"),
            this.largeControls();
        }
        rewind(e) {
          this.player &&
            ((this.player.currentTime = this.options.start),
            ("pause" != this.requestedAction && "pause" != e) || this.pause());
        }
        drawCanvas() {
          !0 === this.toCanvas &&
            null != this.canvas &&
            (this.canvas.image && this.canvas.drawImg(this.player),
            requestAnimationFrame(this.drawCanvas.bind(this)));
        }
        startCanvas(e) {
          this.hideCanvas && (this.hideCanvas.kill(), (this.hideCanvas = null)),
            (this.canvas = e),
            (this.toCanvas = !0),
            this.drawCanvas(),
            (this.container.style.visibility = "hidden");
        }
        resumeCanvas() {
          (this.toCanvas = !0), this.drawCanvas();
        }
        pauseCanvas() {
          this.toCanvas = !1;
        }
        stopCanvas() {
          (this.hideCanvas = _tpt.gsap.fromTo(
            this.container,
            0.3,
            { opacity: 0, visibility: "hidden" },
            { opacity: 1, visibility: "visible" }
          )),
            this.hideCanvas.eventCallback(
              "onComplete",
              (e) => {
                (e.toCanvas = !1), delete e.canvas, (this.hideCanvas = null);
              },
              [this]
            ),
            (this.container.style.visibility = "visible");
        }
        largeControls() {
          if ((this.options.controls ?? "").includes("xl")) {
            if (null == this.lrgbutton) {
              const e = _tpt.collector();
              (this.lrgbutton = e.add({ tag: "sr7-lrg-ctrl" })),
                (this.lrgPlay = e.add({ tag: "sr7-lrg-play" })),
                (this.lrgPause = e.add({ tag: "sr7-lrg-pause" })),
                this.lrgbutton.appendChild(this.lrgPlay),
                this.lrgbutton.appendChild(this.lrgPause),
                this.container.parentNode.appendChild(this.lrgbutton);
            }
            this.lastPlayerState == this.states.playing
              ? (this.lrgbutton.classList.remove("playing"),
                this.lrgbutton.classList.add("paused"))
              : (this.lrgbutton.classList.add("playing"),
                this.lrgbutton.classList.remove("paused"));
          }
        }
        getState() {
          return this.player
            ? this.player.ended
              ? this.states.ended
              : this.player.paused
              ? this.states.paused
              : this.player.playing
              ? this.states.playing
              : this.states.unstarted
            : null;
        }
        remove() {
          this.player &&
            (this.player.pause(),
            (this.player.src = ""),
            this.player.load(),
            (this.player = null));
        }
        mute() {
          this.player && ((this.player.muted = !0), (this.muted = !0));
        }
        unmute() {
          this.player &&
            ((this.player.muted = !1),
            0 == this.player.volume && (this.player.volume = 1),
            (this.muted = !1));
        }
        play() {
          this.player &&
            (!_tpt.userInteracted &&
              this.options.autoPlay &&
              (this.player.muted = !0),
            console.log("play", this),
            this.ensureReadyAndExecute(() => {
              this.player.play().catch((e) => {
                "NotAllowedError" === e.name &&
                  ((this.player.muted = !0), this.player.play());
              });
            }, "play"));
        }
        pause(e) {
          this.player &&
            ((this.pauseBy = e),
            this.ensureReadyAndExecute(() => {
              this.player.pause();
            }, "pause"));
        }
        updateSize(e, t, s) {
          this.player &&
            (this.player.arCalculated ||
              void 0 === this.player.videoHeight ||
              0 === this.player.videoHeight ||
              ((this.aspectRatio =
                this.player.videoWidth / this.player.videoHeight),
              (this.player.arCalculated = !0)),
            ("cover" !== s && "contain" !== s) ||
              (this.player.style.objectFit = s),
            this.el.classList[
              "auto" == this.el?.style?.height ? "add" : "remove"
            ]("sr7_miah"));
        }
        addEvent(e, t, s) {
          this.stateChangeListenerAdded ||
            ((this.lastPlayerState = null),
            this.player.addEventListener("play", (e) => {
              (this.lastPlayerState = this.states.playing),
                this.playingList("add", this),
                this.dispatch("playing", e),
                this.showHide(),
                this.largeControls(),
                (this.state = "playing"),
                SR7.F.triggerMediaEvent(this, "update");
            }),
            this.player.addEventListener("pause", (e) => {
              (this.lastPlayerState = this.states.paused),
                this.playingList("remove", this),
                this.dispatch("paused", e),
                this.showHide(),
                this.largeControls(),
                (this.state = "paused"),
                SR7.F.triggerMediaEvent(this, "update");
            }),
            this.player.addEventListener("ended", (e) => {
              (this.lastPlayerState = this.states.ended),
                this.playingList("remove", this),
                this.dispatch("finished", e),
                this.showHide(),
                this.largeControls(),
                (this.state = "finished"),
                SR7.F.triggerMediaEvent(this, "update");
            }),
            this.player.addEventListener("timeupdate", (e) => {
              this.player.currentTime >= this.options.end &&
              0 !== this.options.end
                ? this.options.loop
                  ? (this.rewind(), this.play())
                  : (this.options.rewind && this.rewind(),
                    this.pause(),
                    this.dispatch("finished"))
                : this.player.currentTime < this.options.start &&
                  0 !== this.options.start &&
                  this.rewind(),
                this.muted && (this.player.muted = !0),
                this.dispatch("timeupdate", e);
            }),
            (this.stateChangeListenerAdded = !0)),
            void 0 !== e && (this.listeners[e] = { callback: t, params: s });
        }
      }
      (SR7.videoPlayer = class {
        constructor(e, a, r) {
          switch (
            ("slidebg" == r.subtype &&
              "html5" !== r.type &&
              ((r.autoPlay = !1), (r.poster.showOnPause = !0)),
            r.type)
          ) {
            case "youtube":
              this.player = new t(e, a, r);
              break;
            case "vimeo":
              this.player = new s(e, a, r);
              break;
            case "html5":
            case "audio":
              this.player = new i(e, a, r);
              break;
            default:
              throw new Error(
                `Invalid video type. Please use "youtube", "vimeo", or "html5". Received: ${r.type}`
              );
          }
        }
        add() {
          return this.player.add();
        }
        remove() {
          this.player.remove();
        }
        rewind() {
          this.player.rewind();
        }
        play() {
          let { c: e } = SR7.F.getLayer(this?.player?.el?.id);
          (this.pauseBy = null),
            ("slidebg" == e?.subtype &&
              String(SR7.M[e.mid].current.id) !== String(e.skey)) ||
              this.player.play();
        }
        pause(e) {
          (this.pauseBy = e), this.player.pause();
        }
        mute() {
          this.player.mute();
        }
        unmute() {
          this.player.unmute();
        }
        updateSize(e, t) {
          this.player.updateSize(e, t);
        }
        isPlaying() {
          return this.player.isPlaying();
        }
        isHidden() {
          return this.player.isHidden();
        }
        update(e) {
          return this.remove(), (this.player.options = e), this.add();
        }
        hasEvent(e) {
          return this.player.hasEvent(e);
        }
        addEvent(e, t, s) {
          this.player.addEvent(e, t, s);
        }
        isReady() {
          return this.player.isReady();
        }
        toggle() {
          this.player.toggle();
        }
        stopPlayingMedias() {
          this.player.stopPlayingMedias();
        }
        startCanvas(e) {
          this.player.startCanvas && this.player.startCanvas(e);
        }
        stopCanvas() {
          this.player.stopCanvas && this.player.stopCanvas();
        }
        drawCanvas() {
          this.player.drawCanvas() && this.player.drawCanvas();
        }
      }),
        (_tpt.R ??= {}),
        (_tpt.R.media = _tpt.extend
          ? _tpt.extend(_tpt.R.media, { status: 2, version: "1.0" })
          : { status: 2, version: "1.0" });
    }
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      (SR7.E ??= {}),
      void 0 !== SR7.F.modify)
    )
      return;
    (SR7.F.getFXCoverAnim = (e, t, s, i) => {
      if (
        "out" == s &&
        ("hidden" == e.el.style.visibility ||
          e.el.className.includes("sr7-fx-hidden"))
      )
        return;
      let a = _tpt.gsap.timeline();
      (e.fxitl = _tpt.gsap.timeline()), (e.fxotl = _tpt.gsap.timeline());
      let r = o("in", t.fx, t.fxe, t.fxc),
        l = o("out", t.fx);
      return (
        e.fxitl.eventCallback(
          "onStart",
          (e) => {
            (e.mask.style.overflow = "hidden"),
              e.el.classList["in" == s && i < 2 ? "add" : "remove"](
                "sr7-fx-hidden"
              );
          },
          [e, s, i]
        ),
        e.fxitl.eventCallback(
          "onComplete",
          (e) => {
            e.maskForFx && (e.mask.style.overflow = "visible"),
              e.el.classList[
                ("in" == s && i < 2) || "out" == s ? "remove" : "add"
              ]("sr7-fx-hidden");
          },
          [e, s, i]
        ),
        e.fxitl.add(
          _tpt.gsap.fromTo(e.fxc, t.fxs / 2e3, r, { scaleX: 1, scaleY: 1 }),
          0
        ),
        e.fxotl.add(_tpt.gsap.to(e.fxc, t.fxs / 2e3, l), 0),
        a.add(e.fxitl, 0),
        a.add(e.fxotl, t.fxs / 2e3),
        a
      );
    }),
      (SR7.F.pan = {
        getBox: function (e, t, s) {
          let i = e.width / _tpt.dpr,
            a = e.height / _tpt.dpr,
            r = a * t,
            o = i * t;
          if (null == e.image) return;
          i / a < e.image.width / e.image.height
            ? (o = e.image.width * (r / e.image.height))
            : (r = e.image.height * (o / e.image.width));
          let l = {
            l:
              (0 -
                ("center" == s.x
                  ? 0.5
                  : "left" == s.x
                  ? 0
                  : "right" == s.x
                  ? 1
                  : parseInt(s.x) / 100 || 0)) *
              Math.abs(i - o),
            t:
              (0 -
                ("center" == s.y
                  ? 0.5
                  : "top" == s.y
                  ? 0
                  : "bottom" == s.y
                  ? 1
                  : parseInt(s.y) / 100 || 0)) *
              Math.abs(a - r),
            w: o,
            h: r,
          };
          return (l.r = l.l + o), (l.b = l.t + r), l;
        },
        getStep: function (e) {
          const { canvas: t, x: s, y: i, scale: a, rotate: r, pos: o } = e,
            l = SR7.F.pan.getBox(t, a, o);
          if (null == l) return;
          const n = {
              rZ: (Math.PI / 180) * r,
              scale: a,
              x: parseFloat(s) + l.l,
              y: parseFloat(i) + l.t,
              w: l.w,
              h: l.h,
            },
            d = l.r - l.l,
            c = l.b - l.t;
          return (
            (n.x =
              n.x > 0
                ? 0
                : d + n.x < t.width / _tpt.dpr
                ? t.width / _tpt.dpr - d
                : n.x),
            (n.y =
              n.y > 0
                ? 0
                : c + n.y < t.height / _tpt.dpr
                ? t.height / _tpt.dpr - c
                : n.y),
            n
          );
        },
        observe: (e) => {
          void 0 === SR7.M[e].c.pans.observing &&
            (_tpt.resizeObserver.observe(
              (e) => {
                SR7.F.pan.refresh(e, SR7.M[e].current.id);
              },
              19,
              e
            ),
            (SR7.M[e].c.pans.observing = !0));
        },
        refresh: (e, t) => {
          SR7.M[e].c.pans?.[t] &&
            requestAnimationFrame(function () {
              for (let s of SR7.M[e].c.pans[t])
                SR7.F.animateLayers({
                  id: e,
                  skey: t,
                  layers: [s],
                  scene: "in",
                  caller: "update",
                  update: "pan",
                });
            });
        },
      }),
      (SR7.F.modify = {
        prepare: (e) => {
          if (
            null != e &&
            ("false" != String(e.s?.u ?? !1) ||
              "false" != String(e.s?.uf ?? !1) ||
              "false" != String(e.m?.u ?? !1))
          )
            return {
              mx: 0,
              my: 0,
              sx: 0,
              sy: 0,
              srx: 0,
              sry: 0,
              srz: 0,
              ssc: 1,
              sg: 0,
              sb: 0,
              sr: 100,
              sf: 100,
              mask: e.mask,
              mouse: e?.m ?? {},
              scroll: e?.s ?? {},
            };
        },
        get: (r, o, l, n, d, c, p, h) => {
          if (((l.modifiers ??= {}), "opacity" == h))
            (l.modifiers.opacity = i(n)),
              "in" == d &&
                0 == c &&
                ((n.mod.animElemOpacity = o), (n.el.tf = l.tf));
          else if ("xy" == h)
            "in" == d &&
              0 == c &&
              ((n.mod.animElemXY = o),
              (o.tx = l.x?.() ?? 0),
              (o.ty = l.y?.() ?? 0),
              (o.tx = "inherit" == o.tx ? 0 : o.tx),
              (o.ty = "inherit" == o.ty ? 0 : o.ty)),
              (l.modifiers.x = e(n, "x")),
              (l.modifiers.y = e(n, "y"));
          else if ("filter" == h) {
            n.mod.animElemFilter = o;
            const {
              blur: e,
              grayscale: t,
              brightness: s,
            } = n.filters.simple.filters;
            n.filters.simple.used.blur && (l.tb = e),
              n.filters.simple.used.grayscale && (l.tg = t),
              n.filters.simple.used.brightness && (l.tr = s),
              "in" == d &&
                0 == c &&
                ((o.tb = l.tb ?? 0), (o.tg = l.tg ?? 0), (o.tr = l.tr ?? 100)),
              (l.modifiers.filter = a(n.filters.simple, n));
          } else
            "transform" == h &&
              ((n.mod.animElemTransform = o),
              "in" == d &&
                0 == c &&
                ((o.rx = l.rotationX ?? 0),
                (o.ry = l.rotationY ?? 0),
                (o.rz = l.rotationZ ?? 0)),
              (l.modifiers.rotationX = t(n, "x")),
              (l.modifiers.rotationY = t(n, "y")),
              (l.modifiers.rotation = t(n, "z")),
              (l.modifiers.scaleX = s(n)),
              (l.modifiers.scaleY = s(n)));
          return l;
        },
        handleListeners: (e) => {
          const t = SR7.M[e];
          if (
            !t.settings.mod?.use ||
            null == t.c.mod ||
            (_tpt.is_mobile && t.settings.mod?.dOM)
          )
            return;
          let s = !1,
            i = !1;
          for (let e in t.c.mod[t.current.id]) {
            if (s && i) continue;
            const a = t.c.layers[SR7.lToK[t.c.mod[t.current.id][e]]];
            (s = s || "" + (a.mod.mouse?.u ?? !1) != "false"),
              (i = i || "" + (a.mod.scroll?.u ?? !1) != "false");
          }
          for (let e in t.staticSlides)
            if (
              _tpt.hop(t.staticSlides, e) &&
              "" != t.staticSlides[e] &&
              (!s || !i)
            )
              for (let a in t.c.mod[t.staticSlides[e]]) {
                const r = t.c.layers[SR7.lToK[t.c.mod[t.staticSlides[e]][a]]];
                (s = s || "" + (r.mod.mouse?.u ?? !1) != "false"),
                  (i = i || "" + (r.mod.scroll?.u ?? !1) != "false");
              }
          if (s)
            (SR7.M[e].c.moduleListeners ??= {}),
              (SR7.M[e].c.moduleListeners.modify ??= {}),
              (SR7.M[e].c.moduleListeners.modify.enter ??=
                SR7.F.module.listeners.reg(
                  e,
                  _tpt.is_mobile ? "touchstart" : "mouseenter",
                  SR7.F.module.listeners.updateMouseCoordinates
                )),
              (SR7.M[e].c.moduleListeners.modify.coord ??=
                SR7.F.module.listeners.reg(
                  e,
                  _tpt.is_mobile ? "touchmove" : "mousemove",
                  SR7.F.module.listeners.updateMouseCoordinates
                )),
              (SR7.M[e].c.moduleListeners.modify.process ??=
                SR7.F.module.listeners.reg(
                  e,
                  _tpt.is_mobile ? "touchmove" : "mousemove",
                  function (e, t) {
                    SR7.F.modify.process(e, "mouse", void 0, t);
                  }
                )),
              _tpt.is_mobile &&
                (SR7.M[e].c.moduleListeners.modify.processTouch ??=
                  SR7.F.module.listeners.reg(e, "touchstart", function (e, t) {
                    SR7.F.modify.process(e, "touch", void 0, t);
                  }));
          else
            for (let t of ["enter", "coord", "process", "processTouch"])
              SR7.M[e].c?.moduleListeners?.modify?.[t] &&
                (SR7.F.module.listeners.del(
                  e,
                  "enter" == t
                    ? _tpt.is_mobile
                      ? "touchstart"
                      : "mouseenter"
                    : _tpt.is_mobile
                    ? "touchmove"
                    : "mousemove",
                  SR7.M[e].c.moduleListeners.modify[t]
                ),
                delete SR7.M[e].c.moduleListeners.modify[t]);
          i
            ? ((SR7.M[e].c.moduleListeners ??= {}),
              (SR7.M[e].c.moduleListeners.modify ??= {}),
              (SR7.M[e].c.moduleListeners.modify.scroll ??=
                SR7.F.module.listeners.reg(e, "scroll", function (e, s) {
                  "carousel" == t.settings.type
                    ? SR7.F.modify.processAll(e, "scroll")
                    : SR7.F.modify.process(e, "scroll");
                })))
            : SR7.M[e].c?.moduleListeners?.modify?.scroll &&
              (SR7.F.module.listeners.del(
                e,
                "scroll",
                SR7.M[e].c.moduleListeners.modify.scroll
              ),
              delete SR7.M[e].c.moduleListeners.modify.scroll);
        },
        processAll: (e, t) => {
          for (let s in SR7.M[e].slideOrder)
            (SR7.M[e].slides[SR7.M[e].slideOrder[s]].slide.visible ||
              SR7.M[e].slideOrder[s] == SR7.M[e].current.id) &&
              SR7.F.modify.process(
                e,
                t,
                void 0,
                void 0,
                SR7.M[e].slideOrder[s]
              );
        },
        process: (e, t, s, i, a) => {
          SR7.F.modify.pOS(e, t, s, a ?? SR7.M[e].current.id);
          for (let i of SR7.M[e].staticSlides) SR7.F.modify.pOS(e, t, s, i);
        },
        pOS: (e, t, s, i) => {
          const a = SR7.M[e];
          if (
            !a.settings.mod?.use ||
            null == a.c.mod ||
            null == a.c.mod[i] ||
            (_tpt.is_mobile && a.settings.mod?.dOM)
          )
            return;
          const o = a.c.d3?.[i] && (a.settings.mod?.d3 ?? !1);
          if (o) {
            const t = Math.round(
                ((a.mouse?.cDY ?? 0) * a.settings.mod.d3d) / a.dims.module.h
              ),
              s = -Math.round(
                ((a.mouse?.cDX ?? 0) * a.settings.mod.d3d) / a.dims.module.w
              );
            _tpt.gsap.to([a.c.d3[i].layers, a.c.d3[i].bg], a.settings.mod.d3s, {
              rotateX: t,
              rotateY: s,
              z: r(e, Math.abs(t) + Math.abs(s) / 2),
              ease: a.settings.mod.d3e,
              overwrite: "auto",
            });
          }
          for (let e in a.c.mod[i]) {
            if (void 0 !== s && s !== e) continue;
            const r = a.c.layers[SR7.lToK[a.c.mod[i][e]]];
            if (
              ((r.mod.use3d = o),
              ("mouse" == t || "touch" == t) &&
                "" + (r.mod.mouse?.u ?? !1) != "false")
            ) {
              let e, s;
              if (
                (null == r.mod.animElemXY &&
                  "slidebg" == r.subtype &&
                  (r.mod.animElemXY = r.px ? r.px : r.mask ? r.mask : r.el),
                "mousedrag" === a.settings.mod.t)
              ) {
                let t,
                  i = a.settings.mod.sm,
                  r = a.settings.mod.om;
                "opposite" === a.settings.mod.dir &&
                  ((t = i), (i = r), (r = i)),
                  (e =
                    ((a.c.carousel.src.lpX -
                      (a.c.carousel.src.s.realDragging
                        ? a.c.carousel.src.pX
                        : 0)) *
                      Math.max(1, i)) /
                    10),
                  (s =
                    ((a.c.carousel.src.lpY - a.c.carousel.src.pY) *
                      Math.max(1, r)) /
                    10),
                  "same" === a.settings.mod.dir
                    ? "h" === a.settings.carousel.type
                      ? (s = 0)
                      : "v" === a.settings.carousel.type && (e = 0)
                    : "opposite" === a.settings.mod.dir &&
                      ("h" === a.settings.carousel.type
                        ? ((s = e), (e = 0))
                        : "v" === a.settings.carousel.type &&
                          ((e = s), (s = 0)));
              } else {
                let i = "touch" == t ? "F" : "";
                (e =
                  ((a.mouse[r.mod.mouse.o + "DX" + i] ?? 0) * r.mod.mouse.x) /
                  (o ? ("slidebg" !== r.subtype ? 200 : 155) : 100)),
                  (s =
                    ((a.mouse[r.mod.mouse.o + "DY" + i] ?? 0) * r.mod.mouse.y) /
                    (o ? ("slidebg" !== r.subtype ? 200 : 80) : 100));
              }
              (r.mod.tlM = _tpt.gsap.to(r.mod, r.mod.mouse.s, {
                mx: e,
                my: s,
                ease: r.mod.mouse.e,
                overwrite: "auto",
              })),
                r.mod.tlM.eventCallback("onUpdate", SR7.F.modify.tlupdate, [
                  r,
                  "xy",
                ]);
            }
            if ("scroll" == t) {
              let e = { ease: "power3.out", overwrite: "auto" };
              if (
                ("false" !== (r.mod.scroll?.u ?? "false") &&
                  ((e.sx =
                    Math.round(
                      a.scrollProc *
                        ((-r.mod.scroll.x / 100) * a.dims.module.h) *
                        10
                    ) / 10 || 0),
                  (e.sy =
                    Math.round(
                      a.scrollProc *
                        ((-r.mod.scroll.y / 100) * a.dims.module.h) *
                        10
                    ) / 10 || 0)),
                r.mod.scroll.uf || r.mod.scroll.ut)
              ) {
                const t = r.mod.scroll.t / 2;
                let s = a.scrollProc;
                (s =
                  s > t
                    ? Math.min(1, (s - t) / (1 - t))
                    : s < -t
                    ? Math.max(-1, (s + t) / (1 - t))
                    : 0),
                  r.mod.scroll.uf &&
                    (null == r.mod.animElemFilter &&
                      ((r.mod.animElemFilter = r.mask ? r.mask : r.el),
                      (r.filters ??= {}),
                      (r.filters.simple = SR7.F.getFilterStyle(
                        r.mod.scroll,
                        "",
                        r.filters?.simple?.used ?? void 0
                      ))),
                    (e.sg =
                      0 == r.mod.scroll.g
                        ? 0
                        : Math.round(Math.abs(s) * r.mod.scroll.g)),
                    (e.sb =
                      0 == r.mod.scroll.b
                        ? 0
                        : Math.round(Math.abs(s) * r.mod.scroll.b)),
                    (e.sr =
                      100 == r.mod.scroll.r
                        ? 100
                        : Math.round((1 - Math.abs(s)) * r.mod.scroll.r)),
                    (e.sf =
                      "off" == r.mod.scroll.f
                        ? 100
                        : 1 -
                          Math.abs(s) -
                          Math.abs(s) * ((r.mod.scroll.f - 100) / 100))),
                  r.mod.scroll.ut &&
                    ((e.srx =
                      0 == r.mod.scroll.rX
                        ? 0
                        : Math.round(s * r.mod.scroll.rX)),
                    (e.sry =
                      0 == r.mod.scroll.rY
                        ? 0
                        : Math.round(s * r.mod.scroll.rY)),
                    (e.srz =
                      0 == r.mod.scroll.rZ
                        ? 0
                        : Math.round(s * r.mod.scroll.rZ)),
                    (e.ssc =
                      1 == r.mod.scroll.sc
                        ? 1
                        : 1 + Math.abs(s) * r.mod.scroll.sc));
              }
              (r.mod.tlS = _tpt.gsap.to(r.mod, r.mod.scroll.s || 0.001, e)),
                r.mod.tlS.eventCallback("onUpdate", SR7.F.modify.tlupdate, [
                  r,
                  "xy,filter,opacity,rotate",
                ]);
            }
          }
        },
        tlupdate: (r, o) => {
          if (
            (o.includes("xy") &&
              !SR7.F.modify.isTweening(r, "xy") &&
              (r.mod.animElemXY || r.mod.animElem) &&
              _tpt.gsap.set(r.mod.animElemXY || r.mod.animElem, {
                x: e(r, "x")(),
                y: e(r, "y")(),
              }),
            o.includes("rotate") &&
              r.mod.scroll?.ut &&
              _tpt.gsap.set(r.mask, {
                rotationX: t(r, "x")(),
                rotationY: t(r, "y")(),
                rotationZ: t(r, "z")(),
                scaleX: s(r)(),
                scaleY: s(r)(),
              }),
            o.includes("filter") &&
              r.mod.animElemFilter &&
              !SR7.F.modify.isTweening(r, "filter"))
          ) {
            let e = void 0 === r.filters ? "" : a(r.filters.simple, r)();
            _tpt.gsap.set(r.mod.animElemFilter, {
              filter: "" === e ? "none" : e,
            });
          }
          !o.includes("opacity") ||
            ("slidebg" != r.subtype && !r.mod.animElemOpacity) ||
            ("slidebg" != r.subtype && SR7.F.modify.isTweening(r, "opacity")) ||
            _tpt.gsap.set(r.el, {
              opacity:
                "slidebg" == r.subtype
                  ? Math.min(1, parseFloat(r.mod.sf) || 1)
                  : i(r),
            });
        },
        isTweening: (e, t) => {
          let s = !1;
          if (null == (e.mod?.coreTween?.[t] ?? void 0)) return !1;
          for (let i in e.mod.coreTween[t])
            !s &&
              _tpt.hop(e.mod.coreTween[t], i) &&
              (s = e.tl?.[i]?.[e.mod.coreTween[t][i]]?.isActive() ?? !1);
          return s;
        },
      }),
      (SR7.F.sbt = {
        init: (e) => {
          (SR7.M[e].c.moduleListeners ??= {}),
            (SR7.M[e].c.moduleListeners.sbt ??= {}),
            null == SR7.M[e].c.moduleListeners.sbt.scroll &&
              ((SR7.M[e].c.moduleListeners.sbt.scroll =
                SR7.F.module.listeners.reg(
                  e,
                  "scroll",
                  function (e, t) {
                    SR7.F.sbt.process(e, "scroll");
                  },
                  !0
                )),
              SR7.F.sbt.process(e, "init"),
              requestAnimationFrame(() => {
                _tpt.scrollObserver.process(SR7.M[e].c.module, !0);
              }));
        },
        process: (e, t, s) => {
          const i = SR7.M[e];
          if (i.settings.sbt?.f) {
            const t = i.dims.content.h < _tpt.winH,
              s =
                _tpt.winH -
                i.dims.content.h -
                parseInt(i.dims.reduceHeight ?? 0),
              a = i.settings.sbt.a ?? "top";
            if (
              (i.useAsModal &&
                (SR7.F.module.box(e),
                (SR7.F.modal.sbt = !0),
                SR7.F.modal.underlay("show"),
                (i.c.module.style.transform = "none")),
              (i.sbt.__runTime ??= 0),
              (i.dims.moduleRect.top < 0 ||
                (i.dims.moduleRect.top + i.dims.content.h < _tpt.winH &&
                  "travel" == a) ||
                (i.dims.moduleRect.top + i.dims.content.h <= _tpt.winH &&
                  "bottom" == a)) &&
                i.dims.moduleRect.bottom -
                  i.dims.content.h -
                  ("bottom" == a ? s : 0) >
                  (i.dims.content.h > _tpt.winH ? s : 0) &&
                i.dims.moduleRect.top < _tpt.winH)
            ) {
              !0 !== i.sbtFreeze &&
                ((i.c.content.style.position = "fixed"),
                (i.c.content.style.top = "0px"),
                i.settings.size.fullWidth && (i.c.content.style.left = "0px"),
                (i.c.content.style.bottom = "auto"),
                (i.sbtFreeze = !0));
              const e = i.dims.sbt - (i.dims.content.h + (t ? -s : s));
              let r = t
                ? "travel" == a
                  ? parseInt(i.dims.reduceHeight ?? 0) +
                    s +
                    ((i.dims.moduleRect.top - s) / e) * s
                  : "bottom" == a
                  ? _tpt.winH -
                    i.dims.content.h -
                    parseInt(i.dims.reduceHeight ?? 0)
                  : 0
                : 0 - (i.dims.moduleRect.top / e) * s;
              _tpt.gsap.set(i.c.content, { y: r });
            } else
              !1 !== i.sbtFreeze &&
                ((i.c.content.style.position = "absolute"),
                (i.sbtFreeze = !1),
                i.dims.moduleRect.top >= 0
                  ? ((i.c.content.style.top = "0px"),
                    i.settings.size.fullWidth &&
                      (i.c.content.style.left =
                        i.dims.content.shiftx + i.dims.content.mwshiftx + "px"),
                    (i.c.content.style.bottom = "auto"),
                    _tpt.gsap.set(i.c.content, { y: 0 }))
                  : ((i.c.content.style.top = "auto"),
                    (i.c.content.style.bottom = "0px"),
                    i.settings.size.fullWidth &&
                      (i.c.content.style.left =
                        i.dims.content.shiftx + i.dims.content.mwshiftx + "px"),
                    _tpt.gsap.set(i.c.content, { y: 0 })));
          }
          let a;
          if (
            ((a =
              i.settings.sbt?.f && i.settings.sbt.nL
                ? i.dims.moduleRect.top >= (i.dims.reduceHeight ?? 0) &&
                  i.dims.moduleRect.top <= _tpt.winH
                  ? (i.sbt.__slen * (1 - i.dims.moduleRect.top / _tpt.winH)) /
                    1e3
                  : i.dims.moduleRect.top <= (i.dims.reduceHeight ?? 0) &&
                    i.dims.moduleRect.bottom >= i.dims.module.h
                  ? (i.sbt.__slen +
                      i.sbt.__mlen *
                        (Math.abs(i.dims.moduleRect.top) /
                          (i.dims.moduleRect.height - i.dims.module.h))) /
                    1e3
                  : i.dims.moduleRect.top > _tpt.winH
                  ? 0
                  : (parseInt(i.settings.sbt.fEnd ?? 0) +
                      i.sbt.__elen *
                        (1 - i.dims.moduleRect.bottom / i.dims.content.h)) /
                    1e3
                : _tpt.gsap.utils.mapRange(
                    1,
                    -1,
                    0,
                    i.sbt.__len / 1e3,
                    i.scrollProcSA
                  )),
            (i.sbt.__time ??= a),
            "scroll" == t)
          ) {
            if (
              ((i.sbt.done = !0),
              (i.sbt.__time = a),
              -1 == (i.current?.id ?? -1))
            )
              return;
            !(function (e, t) {
              const s = SR7.M[e];
              for (var i in s.sbt[s.current.id])
                _tpt.hop(s.sbt[s.current.id], i) &&
                  (s.sbt[s.current.id][i].tl.paused() ||
                    s.sbt[s.current.id][i].tl.pause(),
                  _tpt.gsap.to(s.sbt[s.current.id][i].tl, {
                    duration: s.settings.sbt.s,
                    time: _tpt.gsap.utils.clamp(
                      s.sbt[s.current.id][i].so,
                      s.sbt[s.current.id][i].tl.duration(),
                      t
                    ),
                  }));
            })(e, i.sbt.__time);
          }
        },
      });
    const e = (e, t) => () =>
        parseFloat(e.mod.animElem["t" + t] ?? 0) +
        (e.mod?.["m" + t] ?? 0) +
        (e.mod?.["s" + t] ?? 0) +
        "px",
      t = (e, t) => () =>
        parseFloat(e.mod.animElem["r" + t] ?? 0) +
        (e.mod?.["sr" + t] ?? 0) +
        (e.mod?.["mr" + t] ?? 0) +
        "deg",
      s = (e) => () => parseFloat(e.mod?.ssc ?? 1),
      i = (e) => () => parseFloat(e.el.tf ?? 0) * (e.mod?.sf ?? 0),
      a = (e, t) => () =>
        (e.used?.blur
          ? "blur(" +
            (parseInt(t.el.tb ?? 0) + parseInt(t.mod?.sb ?? 0)) +
            "px) "
          : "") +
        (e.used?.grayscale
          ? "grayscale(" +
            (parseInt(t.el.tg ?? 0) + parseInt(t.mod?.sg ?? 0)) +
            "%) "
          : "") +
        (e.used?.brightness
          ? "brightness(" + parseInt(t.el.tr ?? 100) + "%)"
          : ""),
      r = (e, t) => (s, i) =>
        parseInt(SR7.M[e].settings.mod.d3z ?? 65) *
          (i.className.includes("-bg") ? -t / 5 : 1) +
        "px";
    let o = (e, t, s, i) => {
      let a =
        "in" == e
          ? "cright" == t
            ? { transformOrigin: "0% 50%", scaleX: 0, scaleY: 1 }
            : "cleft" == t
            ? { transformOrigin: "100% 50%", scaleX: 0, scaleY: 1 }
            : "cbottom" == t
            ? { transformOrigin: "50% 0%", scaleX: 1, scaleY: 0 }
            : { transformOrigin: "50% 100%", scaleX: 1, scaleY: 0 }
          : "cleft" == t
          ? { transformOrigin: "0% 50%", scaleX: 0, scaleY: 1 }
          : "cright" == t
          ? { transformOrigin: "100% 50%", scaleX: 0, scaleY: 1 }
          : "ctop" == t
          ? { transformOrigin: "50% 0%", scaleX: 1, scaleY: 0 }
          : { transformOrigin: "50% 100%", scaleX: 1, scaleY: 0 };
      return (a.ease = s), (a.backgroundColor = i), a;
    };
    (_tpt.R ??= {}),
      (_tpt.R.modifiers = _tpt.extend
        ? _tpt.extend(_tpt.R.modifiers, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      void 0 !== SR7.F.navigation)
    )
      return;
    SR7.F.navigation = {
      init: (e) => {
        SR7.F.navigation.create(e),
          a(e),
          _tpt.resizeObserver.observe(
            (e) => {
              SR7.F.navigation.showHide(e);
            },
            19,
            e
          );
      },
      update: (e) => {
        const t = SR7.M[e];
        t.c.nav &&
          "hero" != t.settings.type &&
          (t.settings.nav?.arrows?.set && h(e),
          t.settings.nav?.bullets?.set && n(e),
          t.settings.nav?.tabs?.set && d(e, "tabs"),
          t.settings.nav?.thumbs?.set && d(e, "thumbs"),
          t.settings.nav?.scrubber?.set && c(e, "scrubber"));
      },
      select: (e, t) => {
        const s = SR7.M[e];
        if ("hero" != s.settings.type) {
          for (let e of ["bullets", "tabs", "thumbs", "scrubber"]) {
            let i = 0;
            if (s.settings?.nav?.[e]?.set)
              for (let a of s.c?.nav?.[e]?.elements)
                a.classList[a.dataset.key == t ? "add" : "remove"]("selected"),
                  "scrubber" == e &&
                    a.dataset.key == t &&
                    s.c.nav?.scrubber?.srScrubber &&
                    !s.c.nav.scrubber.srScrubber.dragging &&
                    s.c.nav.scrubber.srScrubber.goTo(i),
                  i++;
          }
          SR7.F.navigation.refreshContent(e);
        }
      },
      refreshContent: (e, t) => {
        const s = SR7.M[e];
        if (!s.c?.nav || !s.settings?.nav || !s.settings.nav?.arrows?.set)
          return;
        let i = s.c.nav.arrows;
        for (let t of ["left", "right"]) {
          let a =
            s.slides?.[
              s.slideOrder[
                SR7.F.requestSlide({
                  id: e,
                  slide: i[t].dataset.dir,
                  force: !1,
                  getter: !0,
                })
              ]
            ]?.slide;
          a &&
            (f(i[t + "_dcs"], a),
            void 0 !== i[t + "_img_live"] &&
              v(
                e,
                a,
                i[t + "_img_live"],
                i[t + "_img_tmp"],
                s.settings.nav.arrows.m ?? "hslide",
                t
              ));
        }
      },
      remove: (e, t) => {
        const s = SR7.M[e],
          i = s?.c?.nav,
          a = s?.settings?.nav;
        i &&
          a &&
          ["bullets", "tabs", "thumbs"].forEach((e) => {
            if (!a[e]?.set) return;
            let s = i[e].elements.findIndex((e) => e.dataset.key == t);
            -1 !== s && (i[e].elements[s].remove(), i[e].elements.splice(s, 1));
          });
      },
      showHide: (e, t, i) => {
        i = i || "touchstart" == t || "mouseenter" == t;
        const a = SR7.M[e],
          r = a.c?.nav ?? !1;
        if (!r || !a.settings?.nav) return;
        let o = t;
        if (
          ((t =
            null == t
              ? SR7.M[e].states.overModule
                ? 1
                : 0
              : "mouseenter" == t || "touchstart" == t
              ? 1
              : 0),
          r.dCalls)
        )
          for (let e of r.dCalls) void 0 !== e && void 0 !== e.kill && e.kill();
        r.dCalls = [];
        let l = !1;
        ["arrows", "bullets", "tabs", "thumbs", "scrubber"].forEach((n) => {
          if (!a.settings.nav?.[n]?.set) return;
          let d = a.settings.nav[n];
          (t = d?.on ? 1 : t), (i = !d?.on && i);
          let c = "arrows" == n ? [r[n].left, r[n].right] : r[n].wrap;
          if (0 == (d?.show?.[a.LEV] ?? !0))
            _tpt.gsap.set(c, { display: "none" }), (r[n + "visible"] = !1);
          else {
            if (
              (0 == r[n + "visible"] &&
                (null == o
                  ? _tpt.gsap.set(c, { display: "block", opacity: 1 })
                  : _tpt.gsap.set(c, { display: "block" }),
                (r[n + "visible"] = !0),
                (l = !0)),
              null == o)
            )
              return;
            "arrows" == n
              ? (1 == t &&
                  0 == i &&
                  !0 !== r[n].animated &&
                  (r.dCalls.push(
                    s(e, 0, r[n].left, 0, d.l.anim, r[n].pos_left, !0)
                  ),
                  r.dCalls.push(
                    s(e, 0, r[n].right, 0, d.r.anim, r[n].pos_right, !0)
                  ),
                  (r[n].animated = !0)),
                r.dCalls.push(
                  s(e, d, r[n].left, t, d.l.anim, r[n].pos_left, i)
                ),
                r.dCalls.push(
                  s(e, d, r[n].right, t, d.r.anim, r[n].pos_right, i)
                ))
              : (1 == t &&
                  0 == i &&
                  !0 !== r[n].animated &&
                  (r.dCalls.push(s(e, 0, r[n].wrap, 0, d.anim, r[n].pos, !0)),
                  (r[n].animated = !0)),
                r.dCalls.push(s(e, d, r[n].wrap, t, d.anim, r[n].pos, i)));
          }
        }),
          l &&
            requestAnimationFrame(function () {
              SR7.F.navigation.update(e);
            });
      },
      create: (s, a = ["arrows", "bullets", "tabs", "thumbs", "scrubber"]) => {
        const r = SR7.M[s];
        for (let o of a)
          if (r.settings.nav?.[o]?.set) {
            (r.c.nav ??= {}), (r.c.nav[o] ??= {});
            let a = r.c.nav[o],
              n = r.settings.nav[o],
              d = _tpt.collector();
            if ("arrows" == o)
              for (let e of ["left", "right"]) {
                const t = (a[e] = d.add({
                  tag: "sr7-arrow",
                  datas: { dir: "left" == e ? "-1" : "+1" },
                  class: "sr7-" + e + "arrow sr7-arrows " + n.key,
                }));
                (t.innerHTML = m(n.html)),
                  (a[e + "_dcs"] = t.getElementsByTagName("sr7-navdc")),
                  n.html.includes("sr7-nav-img") &&
                    ((a[e + "_img"] = t.getElementsByClassName("sr7-nav-img")),
                    null !== a[e + "_img"] && void 0 !== a[e + "_img"]
                      ? ((a[e + "_img"] = a[e + "_img"][0]),
                        (a[e + "_img_live"] = d.add({
                          tag: "sr7-nav-img-live",
                        })),
                        (a[e + "_img_tmp"] = d.add({ tag: "sr7-nav-img-tmp" })),
                        a[e + "_img"].appendChild(a[e + "_img_tmp"]),
                        a[e + "_img"].appendChild(a[e + "_img_live"]))
                      : delete a[e + "_img"]),
                  (t.style.opacity = 0),
                  d.fragment.appendChild(a[e]),
                  i(s, t, "arrow");
              }
            else if ("bullets" == o) {
              (a.wrap = d.add({
                tag: "sr7-bullets",
                class:
                  "sr7-bullets " +
                  n.key +
                  " sr7-nd" +
                  SR7.gV({ v: n.d, id: s, u: 0 })[0] +
                  " sr7-nph" +
                  SR7.gV({ v: n.h, id: s, u: 0 })[0] +
                  " sr7-npv" +
                  SR7.gV({ v: n.v, id: s, u: 0 })[0],
              })),
                (a.wrap.style.opacity = 0),
                d.fragment.appendChild(a.wrap),
                (a.elements = []);
              for (let e of r.slideOrder) {
                if (r.slides[e]?.slide?.slideshow?.hfn) continue;
                let t = d.add({
                  tag: "sr7-bullet",
                  class: "sr7-bullet",
                  datas: { key: e },
                });
                t.innerHTML = g(n.html, r.slides[e].slide);
                let o = t.getElementsByClassName("sr7-bullimg");
                null != o && v(s, r.slides[e].slide, o[0]),
                  i(s, t),
                  a.wrap.appendChild(t),
                  a.elements.push(t);
              }
            } else if ("tabs" == o || "thumbs" == o) {
              const e = "tabs" == o ? "sr7-tab" : "sr7-thumb";
              (a.wrap = d.add({
                tag: "sr7-" + o,
                class:
                  "sr7-" +
                  o +
                  " " +
                  n.key +
                  " sr7-nd" +
                  SR7.gV({ v: n.d, id: s, u: 0 })[0] +
                  " sr7-nph" +
                  SR7.gV({ v: n.h, id: s, u: 0 })[0] +
                  " sr7-npv" +
                  SR7.gV({ v: n.v, id: s, u: 0 })[0],
              })),
                (a.mask = d.add({
                  tag: "sr7-tt-mask",
                  class: "sr7-" + o + "-mask",
                })),
                (a.iwrap = d.add({
                  tag: "sr7-" + o + "-wrap",
                  class: "sr7-ntiw",
                })),
                a.wrap.appendChild(a.mask),
                a.mask.appendChild(a.iwrap),
                (a.wrap.style.opacity = 0),
                (a.wrap.style.paddingTop =
                  a.wrap.style.paddingBottom =
                  a.wrap.style.paddingLeft =
                  a.wrap.style.paddingRight =
                    (SR7.gV({ v: n.wr.p, id: s, u: 0 }) ?? 0) + "px"),
                SR7.F.drawBG(a.wrap, { color: n.wr.c }, !0, "bg"),
                (a.elements = []);
              for (let t of r.slideOrder) {
                if (r.slides[t]?.slide?.slideshow?.hfn) continue;
                let l = d.add({ tag: e, class: e, datas: { key: t } });
                l.innerHTML = g(n.html, r.slides[t].slide);
                let c = l.getElementsByClassName(
                  "tabs" == o ? "sr7-tab-img" : "sr7-thumb-img"
                );
                null != c && v(s, r.slides[t].slide, c[0]),
                  i(s, l),
                  a.iwrap.appendChild(l),
                  a.elements.push(l);
              }
            } else if ("scrubber" == o) {
              const i = SR7.gV({ v: n.h, id: s, u: 0 }),
                l = SR7.gV({ v: n.v, id: s, u: 0 }),
                c = "horizontal" == SR7.gV({ v: n.d, id: s, u: 0 });
              (a.wrap = d.add({
                tag: "sr7-" + o,
                class:
                  "sr7-" +
                  o +
                  " " +
                  n.key +
                  " sr7-nd" +
                  SR7.gV({ v: n.d, id: s, u: 0 })[0] +
                  " sr7-nph" +
                  SR7.gV({ v: n.h, id: s, u: 0 })[0] +
                  " sr7-npv" +
                  SR7.gV({ v: n.v, id: s, u: 0 })[0],
              })),
                (a.iWrap = d.add({
                  tag: "sr7-" + o + "-wrap",
                  class: "sr7-" + o + "-wrap",
                })),
                (a.handle = d.add({
                  tag: "sr7-" + o + "-handle",
                  class: "sr7-" + o + "-handle",
                })),
                (a.svg = new t({ id: s, tp: n.tp, d: c })),
                a.iWrap.appendChild(a.svg.svg),
                (a.svg.svg.style.position = "absolute"),
                c &&
                  n.ha &&
                  ((a.rightHandleArrow = d.add({
                    tag: "sr7-" + o + "-hra",
                    class: "sr7-" + o + "-hra sr7-" + o + "-ha",
                  })),
                  (a.leftHandleArrow = d.add({
                    tag: "sr7-" + o + "-hla",
                    class: "sr7-" + o + "-hla sr7-" + o + "-ha",
                  })),
                  a.handle.appendChild(a.rightHandleArrow),
                  a.handle.appendChild(a.leftHandleArrow)),
                a.wrap.appendChild(a.iWrap),
                a.iWrap.appendChild(a.handle),
                (a.wrap.style.opacity = 0),
                (a.wrap.style.paddingTop =
                  a.wrap.style.paddingBottom =
                  a.wrap.style.paddingLeft =
                  a.wrap.style.paddingRight =
                    (SR7.gV({ v: n.wr.p, id: s, u: 0 }) ?? 0) + "px"),
                SR7.F.drawBG(a.wrap, { color: n.wr.c }, !0, "bg"),
                (a.elemsWrap = d.add({
                  tag: "sr7-" + o + "-thumbwrap",
                  class: "sr7-" + o + "-thumbwrap",
                })),
                (a.elements = []);
              for (let e of r.slideOrder) {
                if (r.slides[e]?.slide?.slideshow?.hfn) continue;
                let t = d.add({
                  tag: "sr7-" + o + "-thumb",
                  class: "sr7-" + o + "-thumb",
                  datas: { key: e },
                });
                if (((t.innerHTML = g(n.html, r.slides[e].slide)), n.tn)) {
                  let i = t.getElementsByClassName("sr7-scrubber-img");
                  null != i && v(s, r.slides[e].slide, i[0]);
                }
                a.elemsWrap.appendChild(t), a.elements.push(t);
              }
              if (
                (a.handle.appendChild(a.elemsWrap),
                d.fragment.appendChild(a.wrap),
                n.hp && r.settings.slideshow.auto)
              ) {
                const e =
                  "left" === n.pa && c
                    ? "0% 50%"
                    : "left" !== n.pa || c
                    ? "center" === n.pa
                      ? "50% 50%"
                      : c
                      ? "100% 50%"
                      : "50% 100%"
                    : "50% 0%";
                (a.progress = d.add({
                  tag: "sr7-" + o + "-progress",
                  class: "sr7-" + o + "-progress",
                })),
                  a.handle.appendChild(a.progress),
                  (a.progTween = _tpt.gsap.fromTo(
                    a.progress,
                    {
                      scaleX: c ? 0 : 1,
                      scaleY: c ? 1 : 0,
                      transformOrigin: e,
                    },
                    { scaleX: 1, scaleY: 1 }
                  )),
                  a.progTween.pause();
              }
              if (((a.hoverTween = _tpt.gsap.timeline()), 100 != n.sc)) {
                const e =
                  ("left" === i ? "0%" : "center" === i ? "50%" : "100%") +
                  " " +
                  ("top" === l ? "0%" : "center" === l ? "50%" : "100%");
                a.hoverTween.fromTo(
                  a.iWrap,
                  {
                    transformOrigin: e,
                    scaleX: c ? 1 : n.sc / 100,
                    scaleY: c ? n.sc / 100 : 1,
                  },
                  { duration: 0.2, scaleX: 1, scaleY: 1 },
                  0
                );
              }
              if (
                (0 !== n.to &&
                  a.hoverTween.fromTo(
                    a.elemsWrap,
                    { opacity: 0 },
                    { duration: 0.2, opacity: 1 },
                    0
                  ),
                c && n.ha)
              ) {
                const t = e(n, !0, "left"),
                  s = e(n, !0, "right");
                a.hoverTween
                  .fromTo(a.leftHandleArrow, t.from, t.to, 0.2)
                  .fromTo(a.rightHandleArrow, s.from, s.to, 0.2);
              }
              a.hoverTween.pause();
            }
            l({
              css: n.css ?? "",
              key: n.key,
              within: r.c.module.id,
              id: s,
              cst: r.settings.nav[o].cst,
              def: r.settings.nav[o].def,
            });
            for (let e in r.slides)
              void 0 !== r.slides[e]?.slide?.nav?.[o] &&
                l({
                  css: n.css ?? "",
                  key: n.key,
                  within: r.c.module.id,
                  id: s,
                  navkey: r.settings.nav[o].key,
                  cst: r.settings.nav[o].cst,
                  def: r.settings.nav[o].def,
                  scst: r.slides[e].slide.nav[o],
                  sid: e,
                });
            d.append("o" == n.io ? r.c.module : r.c.content);
          }
        o(s),
          requestAnimationFrame(function () {
            SR7.F.navigation.update(s),
              (SR7.M[s].states.overModule ??=
                SR7.M[s].c.module.matches(":hover")),
              SR7.M[s].states.overModule
                ? SR7.F.navigation.showHide(s, "mouseenter")
                : SR7.F.navigation.showHide(s, "mouseleave", !0);
          });
      },
    };
    const e = function (e, t, s) {
        const i = {
            scale: t ? 0 : 1,
            opacity: t ? 0 : 1,
            rotation: t ? 180 : -180,
            x: t ? ("left" === s ? e.tr : -e.tr) : 0,
          },
          a = {
            scale: t ? 1 : 0,
            opacity: t ? 1 : 0,
            rotation: 0,
            x: t ? 0 : "left" === s ? e.tr : -e.tr,
          };
        return (
          e.asc || (delete i.scale, delete a.scale),
          e.sp || (delete i.rotation, delete a.rotation),
          0 === e.tr && (delete i.x, delete a.x),
          e.f || (delete i.opacity, delete a.opacity),
          (a.duration = 0.2),
          { from: i, to: a }
        );
      },
      t = function (e) {
        const t = "http://www.w3.org/2000/svg";
        (this.s = e),
          (this.svg = document.createElementNS(t, "svg")),
          (this.svg.style.display = "block"),
          (this.rect = document.createElementNS(t, "rect")),
          (this.pattern = document.createElementNS(t, "pattern")),
          this.pattern.setAttributeNS(null, "patternUnits", "userSpaceOnUse"),
          this.pattern.setAttributeNS(null, "id", this.s.id + "-pattern"),
          "dots" === e.tp
            ? ((this.circle = document.createElementNS(t, "circle")),
              this.circle.setAttributeNS(null, "class", "pattern-color"),
              this.pattern.appendChild(this.circle))
            : ("vlines" !== this.s.tp && "hlines" !== this.s.tp) ||
              ((this.circle = document.createElementNS(t, "rect")),
              this.circle.setAttributeNS(null, "class", "pattern-color"),
              this.pattern.appendChild(this.circle)),
          this.svg.appendChild(this.pattern),
          this.svg.appendChild(this.rect),
          this.rect.setAttributeNS(
            null,
            "fill",
            "url(#" + this.s.id + "-pattern"
          );
      };
    t.prototype.resize = function () {
      if (
        (this.s.d
          ? ((this.dw = this.w), (this.dh = this.h))
          : ((this.dw = this.h), (this.dh = this.w)),
        (this.svg.style.width = this.w + "px"),
        (this.svg.style.height = this.h + "px"),
        this.rect.setAttributeNS(null, "width", this.w),
        this.rect.setAttributeNS(null, "height", this.h),
        this.pattern.setAttributeNS(null, "width", this.dh),
        this.pattern.setAttributeNS(null, "height", this.dh),
        "dots" === this.s.tp)
      )
        this.circle.setAttributeNS(null, "cx", this.dh / 2),
          this.circle.setAttributeNS(null, "cy", this.dh / 2),
          this.circle.setAttributeNS(null, "r", 1);
      else if ("vlines" === this.s.tp || "hlines" === this.s.tp) {
        var e = "vlines" === this.s.tp ? 1 : this.dh / 4,
          t = "vlines" === this.s.tp ? this.dh / 4 : 1;
        this.circle.setAttributeNS(null, "x", (this.dh - e) / 2),
          this.circle.setAttributeNS(null, "y", (this.dh - t) / 2),
          this.circle.setAttributeNS(null, "width", e),
          this.circle.setAttributeNS(null, "height", t);
      }
    };
    const s = (e, t, s, i, a, r, o) =>
        _tpt.gsap.delayedCall(
          o ? 0 : SR7.gV({ v: t[1 == i ? "dIn" : "dOut"], id: e, u: 0 }) / 1e3,
          function (e, t, s, i, a) {
            void 0 !== e.anim && e.anim.kill();
            let r = Math.max(
                0.01,
                1 == i ? t * (1 - e.style.opacity) : t * e.style.opacity
              ),
              o = ((e = "fade", t = 1, s = { x: 0, y: 0 }) => {
                let i =
                  1 == t
                    ? {
                        opacity: 1,
                        pointerEvents: "auto",
                        ease: "power3.inOut",
                      }
                    : { opacity: 0, ease: "power3.inOut" };
                return (
                  ("left" != e && "right" != e) ||
                    (i.x =
                      1 == t
                        ? s.x
                        : "left" == e
                        ? s.x - 50
                        : "right" == e
                        ? s.x + 50
                        : s.x),
                  ("top" != e && "bottom" != e) ||
                    (i.y =
                      1 == t
                        ? s.y
                        : "top" == e
                        ? s.y - 50
                        : "bottom" == e
                        ? s.y + 50
                        : s.y),
                  "zoomin" == e
                    ? (i.scaleX = i.scaleY = 1 == t ? 1 : 0.5)
                    : "zoomout" == e &&
                      (i.scaleX = i.scaleY = 1 == t ? 1 : 1.2),
                  i
                );
              })(s, i, a);
            i ||
              ((o.onCompleteParams = [e]),
              (o.onComplete = (e) => {
                e.style.pointerEvents = "none";
              })),
              (e.anim = _tpt.gsap.to(e, r, o));
          },
          [s, t.s / 1e3, a, i, r]
        ),
      i = (e, t, s) => {
        t.addEventListener(_tpt.is_mobile ? "touchend" : "click", function (i) {
          this.moved ||
            (s
              ? SR7.F.requestSlide({ id: e, slide: this.dataset.dir })
              : SR7.F.requestSlide({ id: e, slide: "#" + this.dataset.key })),
            _tpt.is_mobile &&
              requestAnimationFrame(function () {
                t.classList.remove("sr7-touchhover");
              });
        }),
          _tpt.is_mobile &&
            t.addEventListener("touchmove", function (e) {
              (Math.abs(e.touches[0].clientX - this.startX) > 5 ||
                Math.abs(e.touches[0].clientY - this.startY) > 5) &&
                (this.moved = !0);
            });
      },
      a = (e) => {
        const t = SR7.M[e];
        if (void 0 === SR7.M[e].states.touchListener) {
          t.settings?.nav?.scrubber?.set && r(e),
            SR7.M[e].c.module
              .querySelectorAll(
                _tpt.is_mobile
                  ? ".sr7-bullet, .sr7-tab, .sr7-thumb, .sr7-rightarrow, .sr7-leftarrow"
                  : ".sr7-arrows, .sr7-bullets, .sr7-bullet, .sr7-tab, .sr7-thumb, .sr7-thumbs, .sr7-tabs, .sr7-rightarrow, .sr7-leftarrow"
              )
              .forEach(function (e) {
                e.addEventListener(
                  _tpt.is_mobile ? "touchstart" : "mouseenter",
                  function (e) {
                    this.classList.add("sr7-touchhover"),
                      _tpt.is_mobile &&
                        ((this.startX = e.touches[0].clientX),
                        (this.startY = e.touches[0].clientY),
                        (this.moved = !1));
                  }
                ),
                  e.addEventListener("mouseleave", function (e) {
                    var t = this;
                    requestAnimationFrame(function () {
                      t.classList.remove("sr7-touchhover");
                    });
                  });
              }),
            (SR7.M[e].states.touchListener = !0);
        }
      },
      r = function (e) {
        const t = SR7.M[e];
        let s = SR7.M[e].c.module.querySelector(
          100 === t.settings.nav.scrubber.sc
            ? ".sr7-scrubber-handle"
            : ".sr7-scrubber"
        );
        s.addEventListener(
          _tpt.is_mobile ? "touchstart" : "mouseenter",
          function (s) {
            this.classList.add("sr7-touchhover"),
              t.c.nav?.scrubber?.hoverTween &&
                t.c.nav.scrubber.hoverTween.play(),
              t.c.nav.scrubber.progTween?.progress &&
                t.c.nav.scrubber.progTween.progress(1),
              SR7.slideShow.pause(e);
          }
        ),
          s.addEventListener(
            _tpt.is_mobile ? "touchend" : "mouseleave",
            function (s) {
              var i = this;
              requestAnimationFrame(function () {
                t.c.nav?.scrubber?.srScrubber?.dragging ||
                  (i.classList.remove("sr7-touchhover"),
                  t.c.nav?.scrubber?.hoverTween &&
                    (t.c.nav.scrubber.hoverTween.reverse(),
                    SR7.slideShow.resume(e)));
              });
            }
          );
      },
      o = (e) => {
        void 0 === SR7.M[e].states.navSHListener &&
          (SR7.F.module.listeners.reg(
            e,
            _tpt.is_mobile ? "touchstart touchend" : "mouseenter mouseleave",
            function (e, t) {
              SR7.F.navigation.showHide(e, t.type);
            }
          ),
          (SR7.M[e].states.navSHListener = !0));
      },
      l = (e) => {
        let { within: t, key: s, scst: i, sid: a, navkey: r } = e,
          o = new RegExp(
            `\\.(${s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}[^,{]*)(?=,|{)`,
            "g"
          ),
          l = SR7.F.navCSS(e);
        _tpt.injectCssJs(
          l.replace(
            o,
            `#${t + (r && a && i ? '[data-current="' + a + '"]' : "")} .$1`
          ),
          void 0,
          void 0,
          e.id + "_navigationstyles" + (e.sid ? "_" + e.sid : "")
        );
      };
    SR7.F.navCSS = (e) => {
      let { css: t, cst: s = {}, def: i = {}, scst: a } = e,
        r = "" + t;
      const o = r.match(/##(.*?)##/g);
      if (o)
        for (let e = 0; e < o.length; e++) {
          const t = o[e].slice(2, -2);
          a && a.hasOwnProperty(t)
            ? (r = r.replaceAll(o[e], a[t]))
            : s.hasOwnProperty(t) && s[t + "-def"]
            ? (r = r.replaceAll(o[e], s[t]))
            : i.hasOwnProperty(t) && (r = r.replaceAll(o[e], i[t].data));
        }
      return r;
    };
    const n = (e) => {
        const t = SR7.M[e],
          s = t.settings.nav.bullets,
          i = t.c.nav.bullets;
        if (!i.elements.length) return;
        const a = {
            w: i.elements[0].offsetWidth,
            h: i.elements[0].offsetHeight,
          },
          r = { w: 0, h: 0 },
          o = "horizontal" == SR7.gV({ v: s.d, id: e, u: 0 });
        for (let e of i.elements)
          (e.style.top = o ? "0px" : r.h + "px"),
            (e.style.left = o ? r.w + "px" : "0px"),
            (r.w = o ? r.w + a.w + (s.g ?? 0) : a.w),
            (r.h = o ? a.h : r.h + a.h + (s.g ?? 0));
        (r.w = r.w - (o ? s.g ?? 0 : 0)),
          (r.h = r.h - (o ? 0 : s.g ?? 0)),
          (i.wrap.style.width = r.w + "px"),
          (i.wrap.style.height = r.h + "px"),
          (i.pos = u(e, i.wrap, s, r, o));
      },
      d = (e, t) => {
        const s = SR7.M[e],
          i = s.settings.nav[t];
        if (!s.c.nav || !s.c.nav[t]) return;
        const a = s.c.nav[t];
        let r;
        if (0 == i.size.t) {
          let e = Math.max(0, Math.min(1, (_tpt.winW - 480) / 500)),
            t = Math.max(i.size.nw * e, i.size.mw);
          r = { w: t, h: (t / i.size.nw) * i.size.nh };
        } else
          r = {
            w: SR7.gV({ v: i.size.w, id: e, u: 0, a: !0 }),
            h: SR7.gV({ v: i.size.h, id: e, u: 0 }),
          };
        const o = { w: 0, h: 0 },
          l = { w: 0, h: 0 },
          n = 2 * SR7.gV({ v: i.wr.mx, id: e, u: 0 }),
          d = 2 * SR7.gV({ v: i.wr.my, id: e, u: 0 }),
          c = "horizontal" == SR7.gV({ v: i.d, id: e, u: 0 }),
          p = SR7.gV({ v: i.wr.p, id: e, u: 0 }),
          h = "o" != i.io || c ? s.dims.content.h : s.dims.module.h,
          m = { w: s.dims.content.w - 2 * p, h: h - 2 * p };
        let g = Math.min(SR7.gV({ v: i.m, id: e, u: 0 }), s.len);
        g = Math.min(
          g,
          c
            ? Math.ceil(s.dims.content.w / (r.w + i.g))
            : Math.round(h / (r.h + i.g))
        );
        let f = 1;
        for (let e of a.elements)
          (e.style.top = c ? "0px" : o.h + "px"),
            (e.style.width = r.w + "px"),
            (e.style.height = r.h + "px"),
            f <= g &&
              ((l.w = c ? l.w + r.w + (f == g ? 0 : i.g ?? 0) : r.w),
              (l.h = c ? r.h : l.h + r.h + (f == g ? 0 : i.g ?? 0))),
            f++;
        if (
          ((l.w += c ? 0 : n),
          (l.h += c ? d : 0),
          (o.w = c ? (i.wr.s ? m.w : Math.min(l.w, m.w)) : l.w),
          (o.h = c ? l.h : i.wr.s ? m.h : Math.min(l.h, m.h)),
          (l.w = c
            ? Math.min(o.w + n, r.w * g + ((g - 1) * i.g ?? 0) + n)
            : l.w),
          (l.h = c
            ? l.h
            : Math.min(o.h + d, r.h * g + ((g - 1) * i.g ?? 0) + d)),
          i.wr.s)
        ) {
          let t = SR7.gV({ v: i.h, id: e, u: 0 }),
            s = SR7.gV({ v: i.v, id: e, u: 0 });
          (a.mask.style.left = c
            ? "left" == t
              ? parseInt(SR7.gV({ v: i.x, id: e, u: 0 })) + p + "px"
              : "right" == t
              ? ""
              : "50%"
            : ""),
            (a.mask.style.right =
              c && "right" == t
                ? parseInt(SR7.gV({ v: i.y, id: e, u: 0 })) + p + "px"
                : ""),
            (a.mask.style.top =
              c || "top" == s ? p + "px" : "bottom" == s ? "" : "50%"),
            (a.mask.style.bottom = c || "bottom" != s ? "" : p + "px"),
            (a.mask.style.transform =
              "translate(" +
              (c && "center" == t ? "-50%" : "0px") +
              "," +
              (c || "center" != s ? "0px" : "-50%") +
              ")");
        }
        if (
          ((a.mask.style.width = l.w + "px"),
          (a.mask.style.height = l.h + "px"),
          (a.mask.style.padding = 0.5 * d + "px " + 0.5 * n + "px"),
          (a.wrap.style.width = o.w + "px"),
          (a.wrap.style.height = o.h + "px"),
          (a.pos = u(e, a.wrap, i, o, c, p)),
          (l.w -= n),
          (l.h -= d),
          s.settings.nav?.[t]?.set && s.c?.nav?.[t]?.srcr)
        ) {
          var v = s.c.nav[t].srcr.s;
          let e = !v.everbuild;
          (v.everbuild = !0),
            v.width !== r.w && ((v.width = r.w), (e = !0)),
            v.height !== r.h && ((v.height = r.h), (e = !0)),
            v.space !== i.g && ((v.space = i.g), (e = !0)),
            v.type !== (c ? "h" : "v") && ((v.type = c ? "h" : "v"), (e = !0)),
            v.wrapWidth !== l.w && ((v.wrapWidth = l.w), (e = !0)),
            v.wrapHeight !== l.h && ((v.wrapHeight = l.h), (e = !0)),
            e && s.c.nav[t].srcr.rebuild();
        } else
          s.settings.nav?.[t]?.set &&
            (s.c.nav[t].srcr = new srCarousel({
              trigger: s.c.nav[t].wrap,
              wrap: s.c.nav[t].iwrap,
              slides: s.c.nav[t].elements,
              width: r.w,
              height: r.h,
              space: i.g,
              maxV: s.navLen,
              infinity: !1,
              spin: "off",
              spinA: 0,
              align: "left",
              type: c ? "h" : "v",
              sightSnap: !0,
              dur: 0.3,
              ignoreOpacity: !0,
              wrapWidth: l.w,
              wrapHeight: l.h,
            }));
      },
      c = (e, t) => {
        const s = SR7.M[e],
          i = s.settings.nav[t],
          a = s.c.nav[t],
          r = {
            w: SR7.gV({ v: i.size.w, id: e, u: 0, a: !0 }),
            h: SR7.gV({ v: i.size.h, id: e, u: 0 }),
          },
          o = { w: 400, h: 50 },
          l = "horizontal" == SR7.gV({ v: i.d, id: e, u: 0 }),
          n = SR7.gV({ v: i.wr.p, id: e, u: 0 }),
          d = SR7.gV({ v: i.h, id: e, u: 0 }),
          c = SR7.gV({ v: i.v, id: e, u: 0 });
        let h = s.navLen,
          m = (r.h * i.hs) / 100;
        if (!l) {
          const e = r.w;
          (r.w = r.h), (r.h = e), (m = (r.w * i.hs) / 100);
        }
        (o.w = Math.min(
          s.dims.module.w,
          l
            ? Math.max(
                (s.dims.module.w * i.ms) / 100,
                r.w * h + ((h - 1) * i.g ?? 0)
              )
            : r.w
        )),
          (o.h = Math.min(
            s.dims.module.h,
            l
              ? r.h
              : Math.max(
                  (s.dims.module.h * i.ms) / 100,
                  r.h * h + ((h - 1) * i.g ?? 0)
                )
          )),
          (a.handle.style.width = r.w + "px"),
          (a.handle.style.height = r.h + "px"),
          100 !== i.hs && l
            ? ((a.handle.style.height = m + "px"),
              (a.handle.style.top = -(m - r.h) / 2 + "px"),
              i.ho &&
                a.hoverTween.fromTo(
                  a.handle,
                  { height: r.h, top: 0 },
                  {
                    top: "bottom" === c ? (r.h - m) / 2 : 0,
                    height: m,
                    duration: 0.2,
                  },
                  0
                ))
            : 100 !== i.hs &&
              ((a.handle.style.width = m + "px"),
              (a.handle.style.left = -(m - r.h) / 2 + "px"),
              i.ho &&
                a.hoverTween.fromTo(
                  a.handle,
                  { left: 0, width: r.w },
                  {
                    left: "right" === d ? (r.w - m) / 2 : 0,
                    width: m,
                    duration: 0.2,
                  },
                  0
                ));
        for (let e = 0; e < s.navLen; e++) {
          var g = a.elements[e];
          (g.style.width = l ? "100%" : (100 * i.ts) / 100 + "%"),
            (g.style.height = l ? (100 * i.ts) / 100 + "%" : "100%"),
            (g.style.position = "absolute"),
            (g.style.display = "block"),
            _tpt.gsap.set(g, {
              xPercent: l ? 0 : "left" === d ? i.to : -i.to,
              yPercent: l ? ("top" === c ? i.to : -i.to) : 0,
            });
        }
        let f = o.w,
          v = o.h;
        (o.w = l
          ? i.wr.s
            ? s.dims.module.w - 2 * n
            : Math.min(o.w, s.dims.module.w - 2 * n)
          : r.w),
          (o.h = l
            ? r.h
            : i.wr.s
            ? s.dims.module.h - 2 * n
            : Math.min(o.h, s.dims.module.h - 2 * n)),
          (a.wrap.style.width = a.iWrap.style.width = o.w + "px"),
          (a.wrap.style.height = a.iWrap.style.height = o.h + "px"),
          a.svg && ((a.svg.w = o.w), (a.svg.h = o.h), a.svg.resize()),
          i.wr.s && ((f = o.w), (v = o.h)),
          (o.w += 2 * n),
          (o.h += 2 * n),
          (a.pos = u(e, a.wrap, i, o, l, n)),
          s.settings.nav?.[t]?.set && s.c?.nav?.[t]?.srScrubber
            ? ((a.srScrubber.s.d = l),
              (a.srScrubber.s.ww = f),
              (a.srScrubber.s.wh = v),
              (a.srScrubber.s.w = r.w),
              (a.srScrubber.s.h = r.h),
              (a.srScrubber.s.padding = n),
              (a.srScrubber.s.space = i.g),
              a.srScrubber.resize())
            : s.settings.nav?.[t]?.set &&
              (s.c.nav[t].srScrubber = new p({
                elems: a.elements,
                handle: a.handle,
                d: l,
                ww: f,
                wh: v,
                w: r.w,
                h: r.h,
                padding: n,
                space: i.g,
                sk: i.sk,
                cor: i.cor,
                changeSlide: function (t) {
                  ("carousel" !== s.settings.type ||
                    s.settings.carousel.justify) &&
                    SR7.F.requestSlide({
                      id: e,
                      slide: "#" + a.elements[t].dataset.key,
                    });
                },
                changeProgress: function (e, t) {
                  "carousel" === s.settings.type &&
                    !s.settings.carousel.justify &&
                    s.c.carousel?.src &&
                    s.c.carousel.src.rebuild({ p: e, targetIndex: t });
                },
                onInteract: function () {
                  s.c.nav.scrubber.progTween?.progress &&
                    s.c.nav.scrubber.progTween.progress(1);
                },
                onIdle: function () {
                  SR7.slideShow.resume(e),
                    a.wrap.classList.remove("sr7-touchhover"),
                    s.c.nav.scrubber?.hoverTween &&
                      s.c.nav.scrubber.hoverTween.reverse();
                },
              }));
      },
      p = function (e) {
        (this.s = e),
          this.setDefaults(),
          (this.len = e.elems.length),
          (this.dl = e.elems.length - 1),
          (this.hl = (this.s[this.wdim] - this.s[this.dim]) / this.dl),
          (this.updateScrubber = this.update.bind(this));
        const t = this;
        (this.draggable = _tpt.draggable.create(e.handle, {
          type: e.d ? "x" : "y",
          inertia: !0,
          cursor: "grab",
          activeCursor: "grabbing",
          bounds: e.d
            ? { minX: 0, maxX: e.ww - e.w }
            : { minY: 0, maxY: e.wh - e.h },
          throwResistance: 1e4,
          edgeResistance: 0.8,
          minDuration: 0.1,
          maxDuration: 1.5,
          onPress: function () {
            (t.dragging = !0), e.onInteract && e.onInteract();
          },
          onDrag: this.updateScrubber,
          onThrowUpdate: this.updateScrubber,
          onClick: function () {
            (t.dragging = !1), e.onIdle && e.onIdle();
          },
          onThrowComplete: function () {
            (t.dragging = !1), e.onIdle && e.onIdle();
          },
          snap: {
            [e.d ? "x" : "y"]: function (e) {
              return Math.round(e / t.hl) * t.hl;
            },
          },
          zIndexBoost: !1,
          allowContextMenu: !0,
        })[0]),
          (this.clampIndex = _tpt.gsap.utils.clamp(0, this.len - 1)),
          (this.lerpHandler = this.lerp.bind(this)),
          (this.v = this.lv = 0);
      };
    (p.prototype.setDefaults = function () {
      this.s.d
        ? ((this.tr = "x"), (this.dim = "w"), (this.wdim = "ww"))
        : ((this.tr = "y"), (this.dim = "h"), (this.wdim = "wh"));
    }),
      (p.prototype.resize = function () {
        (this.hl = (this.s[this.wdim] - this.s[this.dim]) / this.dl),
          this.draggable.applyBounds({
            minX: 0,
            maxX: this.s[this.wdim] - this.s[this.dim],
            minY: 0,
            maxY: this.s[this.wdim] - this.s[this.dim],
          }),
          _tpt.gsap.set(this.s.handle, { [this.tr]: this.hl * this.lastIndex });
      }),
      (p.prototype.update = function () {
        var e = this.hl;
        const t = this;
        let s = this.draggable[this.tr] / e,
          i = (-this.draggable[this.tr] % e) / e,
          a = this.clampIndex(Math.round(this.draggable[this.tr] / e));
        s <= -1 ? (i = 1) : s >= this.len && (i = -1),
          a !== this.lastIndex &&
            (_tpt.gsap.to(this.s.elems, { opacity: 0 }),
            _tpt.gsap.to(this.s.elems[a], { opacity: 1 }),
            (t.s.cor && t.draggable.isPressed) || (this.lastIndex = a),
            this.s.changeSlide &&
              (this.scDelay && this.scDelay.pause && this.scDelay.pause(),
              (this.scDelay = _tpt.gsap.delayedCall(0.2, function () {
                (t.s.cor && t.draggable.isPressed) || t.s.changeSlide(a);
              })))),
          (this.v = this.draggable[this.tr]),
          this.tick ||
            0 === this.s.sk ||
            (this.tick = requestAnimationFrame(this.lerpHandler)),
          this.s.changeProgress &&
            this.s.changeProgress(
              i,
              this.clampIndex(
                Math.floor(
                  (this.draggable[this.tr] - (this.draggable[this.tr] % e)) / e
                )
              )
            );
      }),
      (p.prototype.lerp = function () {
        (this.tick = cancelAnimationFrame(this.tick)),
          this.tick || (this.tick = requestAnimationFrame(this.lerpHandler));
        let e = this.v - this.lv;
        (this.lv += 0.2 * e),
          _tpt.gsap.set(this.s.elems, {
            [this.s.d ? "skewX" : "skewY"]:
              this.s.sk * Math.max(-1, Math.min(1, e / 100)),
            [this.tr]: -e / 2,
          });
      }),
      (p.prototype.rebuild = function (e) {
        let { p: t, targetIndex: s } = e;
        (this.lv = -t * this.hl + this.hl * s),
          _tpt.gsap.set(this.s.handle, {
            [this.tr]: -t * this.hl + this.hl * s,
          });
      }),
      (p.prototype.goTo = function (e) {
        const t = this;
        (this.lv = this.hl * e),
          _tpt.gsap.to(this.s.handle, {
            [this.tr]: this.hl * e,
            onUpdate: function () {
              t.updateThumbs();
            },
          });
      }),
      (p.prototype.updateThumbs = function () {
        let e = parseFloat(this.s.handle._gsap[this.tr]),
          t = this.clampIndex(Math.round(e / this.hl));
        t !== this.lastIndex &&
          (_tpt.gsap.to(this.s.elems, { opacity: 0 }),
          _tpt.gsap.to(this.s.elems[t], { opacity: 1 }));
      });
    const h = (e) => {
        const t = SR7.M[e];
        if (null != t.c.nav)
          for (let s of ["left", "right"])
            t.c.nav.arrows["pos_" + s] = u(
              e,
              t.c.nav.arrows[s],
              t.settings.nav.arrows[s[0]],
              {
                w: t.c.nav.arrows[s].offsetWidth,
                h: t.c.nav.arrows[s].offsetHeight,
              }
            );
      },
      u = (e, t, s, i, a, r) => {
        const o = SR7.M[e];
        let l =
            "o" == s.io && o.settings.size.fullWidth
              ? o.dims?.moduleRect?.x ?? 0
              : 0,
          n = (o.dims.content.h - o.dims.CFC.h) / 2,
          d = {
            left:
              s.wr?.s && a
                ? "o" === s.io
                  ? -l
                  : 0
                : "left" == SR7.gV({ v: s.h, id: e, u: 0 })
                ? "grid" == s.a
                  ? parseInt(o.dims.CFC.x) + "px"
                  : 0 - l + "px"
                : "right" == SR7.gV({ v: s.h, id: e, u: 0 })
                ? "auto"
                : "50%",
            right:
              s.wr?.s && a
                ? 0
                : "right" == SR7.gV({ v: s.h, id: e, u: 0 })
                ? "grid" == s.a
                  ? o.dims.content.w -
                    (parseInt(o.dims.CFC.x) + parseInt(o.dims.CFC.w)) +
                    "px"
                  : 0 - l + "px"
                : "auto",
            top:
              s.wr?.s && !a
                ? 0
                : "top" == SR7.gV({ v: s.v, id: e, u: 0 })
                ? ("grid" == s.a ? n : 0) + "px"
                : "bottom" == SR7.gV({ v: s.v, id: e, u: 0 })
                ? "auto"
                : "50%",
            bottom:
              s.wr?.s && !a
                ? 0
                : "bottom" == SR7.gV({ v: s.v, id: e, u: 0 })
                ? ("grid" == s.a ? n : 0) + "px"
                : "auto",
            x:
              s.wr?.s && a
                ? 0
                : "center" == SR7.gV({ v: s.h, id: e, u: 0 })
                ? parseInt(SR7.gV({ v: s.x, id: e, u: 0 })) - i.w / 2 - (r ?? 0)
                : "right" == SR7.gV({ v: s.h, id: e, u: 0 })
                ? 0 - parseInt(SR7.gV({ v: s.x, id: e, u: 0 }))
                : parseInt(SR7.gV({ v: s.x, id: e, u: 0 })),
            y:
              s.wr?.s && !a
                ? 0
                : "center" == SR7.gV({ v: s.v, id: e, u: 0 })
                ? parseInt(SR7.gV({ v: s.y, id: e, u: 0 })) - i.h / 2 - (r ?? 0)
                : "bottom" == SR7.gV({ v: s.v, id: e, u: 0 })
                ? 0 - parseInt(SR7.gV({ v: s.y, id: e, u: 0 }))
                : parseInt(SR7.gV({ v: s.y, id: e, u: 0 })),
          };
        return _tpt.gsap.set(t, d), d;
      },
      m = (e, t) => {
        e = e
          .replaceAll("{{title}}", '<sr7-navdc data-type="title"></sr7-navdc>')
          .replaceAll(
            "{{description}}",
            '<sr7-navdc data-type="description"></sr7-navdc>'
          );
        for (let t = 0; t < 10; t++)
          e = e.replaceAll(
            "{{params" + t + "}}",
            '<sr7-navdc data-type="params" data-index="' + t + '" ></sr7-navdc>'
          );
        return e;
      },
      g = (e, t) => {
        e = e
          .replaceAll("{{title}}", t.title)
          .replaceAll("{{description}}", t.description);
        let s,
          i = new DOMParser();
        for (let a = 1; a <= 10; a++)
          (s = i.parseFromString(t?.params?.[a - 1]?.v ?? "", "text/html")),
            (e = e.replaceAll(
              "{{param" + a + "}}",
              String(s.body.textContent || "").substr(
                0,
                parseInt(t.params?.[a - 1]?.l ?? 500)
              )
            ));
        return e;
      },
      f = (e, t) => {
        for (let s of e)
          s.textContent =
            void 0 !== s.dataset.index
              ? t.params?.[s.dataset.index]?.v ?? ""
              : t?.[s.dataset.type] ?? "";
      },
      v = (e, t, s, i, a, r) => {
        let o = t?.thumb?.src ?? "",
          l = SR7.F.getSlideBG(e, t.id)?.bg;
        (o = "" != o || l ? o : t?.thumb?.admin ?? ""),
          (o =
            "" == o ||
            "#" == o[o.length - 1] ||
            (o.includes("://server.local/") &&
              !window.location.hostname.startsWith("server.local"))
              ? l
              : {
                  image: {
                    src: o,
                    size: "cover",
                    repeat: "no-repeat",
                    pos: { x: "center", y: "center" },
                  },
                }),
          (o =
            0 == (o?.image?.src ?? !1)
              ? 0 == (o?.video?.poster?.src ?? !1)
                ? o
                : {
                    image: {
                      src: o?.video.poster.src,
                      size: "cover",
                      repeat: "no-repeat",
                      pos: { x: "center", y: "center" },
                    },
                  }
              : o),
          (o =
            null == o
              ? {
                  image: {
                    src: o,
                    size: "cover",
                    repeat: "no-repeat",
                    pos: { x: "center", y: "center" },
                  },
                }
              : o),
          (o.slidebg = l),
          o?.image?.src
            ? _tpt.registerImage(
                o.image.src,
                0,
                function (e) {
                  if ("error" == e.state)
                    return (
                      console.log(
                        "Fall back to Slide Image instead of Thumbnail"
                      ),
                      y(s, i, o.slidebg, a, r)
                    );
                  y(s, i, o, a, r);
                },
                "load_nav_thumbnail_" + Math.round(1e4 * Math.random()),
                void 0,
                "youtube" !== (SR7.M[e].settings?.source?.type ?? "")
              )
            : y(s, i, o, a, r);
      },
      y = (e, t, s, i = "", a) => {
        if ("" == i)
          void 0 !== e && SR7.F.drawBG(e, s, void 0, "bg"),
            void 0 !== t && SR7.F.drawBG(t, s, void 0, "bg");
        else {
          if ("simple" == i || "fade" == i)
            return void _tpt.gsap.fromTo(
              e,
              0.4,
              { opacity: 0 },
              {
                opacity: 1,
                onStart: function () {
                  SR7.F.drawBG(e, s, void 0, "bg");
                },
                onComplete: function () {
                  SR7.F.drawBG(t, s, void 0, "bg");
                },
              }
            );
          if ("hslide" == i) {
            let i = e.parentNode.style.overflow;
            (e.parentNode.style.overflow = "hidden"),
              _tpt.gsap.fromTo(
                t,
                0.4,
                { opacity: 1, x: "0%" },
                { opacity: 1, x: "left" == a ? "100%" : "-100%" }
              ),
              _tpt.gsap.fromTo(
                e,
                0.4,
                { opacity: 1, x: "left" == a ? "-100%" : "100%" },
                {
                  opacity: 1,
                  x: "0%",
                  onStart: function () {
                    (t.style.opacity = 1), SR7.F.drawBG(e, s, void 0, "bg");
                  },
                  onComplete: function () {
                    (t.style.opacity = 0),
                      SR7.F.drawBG(t, s, void 0, "bg"),
                      (e.parentNode.style.overflow = i);
                  },
                }
              );
          }
        }
      };
    (_tpt.R ??= {}),
      (_tpt.R.navigation = _tpt.extend
        ? _tpt.extend(_tpt.R.navigation, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      (SR7.D ??= {}),
      void 0 !== SR7.F.prepareSlides)
    )
      return;
    const e = (e, t, s, i) => {
        const a = `${t}STR${s + 1}`;
        (e.slides[a] = _tpt.extend({}, SR7.M[i].slides[t])),
          (e.slides[a].slide.order = s + 1),
          (e.slides[a].slide.id = a);
      },
      t = async (t, s, i) =>
        new Promise(async (a) => {
          if (null == s?.sourceSlideId || null == s?.sourceModuleId)
            return void a(!1);
          let r,
            o = SR7.E?.v6v7ids?.n?.[s?.sourceSlideId];
          for (let e in SR7.JSON)
            if (!r && String(SR7.JSON[e]?.id) === String(s?.sourceModuleId))
              if (SR7.JSON[e]?.slides?.[s?.sourceSlideId]) r = e;
              else
                for (let t in SR7.JSON[e]?.slides)
                  String(SR7.JSON[e]?.slides[t]?.slide?.id) ===
                    String(s?.sourceSlideId) ||
                  String(SR7.JSON[e]?.slides[t]?.id) ===
                    String(s?.sourceSlideId)
                    ? (r = e)
                    : (String(SR7.JSON[e]?.slides[t]?.slide?.id) !==
                        String(o) &&
                        String(SR7.JSON[e]?.slides[t]?.id) !== String(o)) ||
                      ((r = e), (s.sourceSlideId = o));
          void 0 !== r &&
            void 0 === SR7.M[r] &&
            ((SR7.M[r] = {}),
            (SR7.M[r].c = {}),
            await SR7.F.prepareModule({
              id: s?.sourceModuleId,
              result: SR7.JSON[r],
              onlyPrepare: !0,
            })),
            void 0 === r
              ? ((r = s?.sourceModuleId),
                _tpt.restAPI({
                  action: "get_full_slider_object",
                  version: s?.sourceModuleEngine ?? 7,
                  id: r,
                  callBack: async (l) => {
                    try {
                      l = "object" != typeof l ? JSON.parse(l) : l;
                    } catch (e) {
                      l = _tpt.fixResponse(l);
                    }
                    !1 === l.success
                      ? a(!1)
                      : (SR7.F.regAddonResources(l.addOns ?? {}),
                        (SR7.JSON ??= {}),
                        (SR7.JSON[r] = l),
                        (SR7.M[r] = {}),
                        (SR7.M[r].c = {}),
                        await SR7.F.prepareModule({
                          id: r,
                          result: l,
                          onlyPrepare: !0,
                        }),
                        void 0 === SR7.M[r].slides[s?.sourceSlideId] &&
                          (null == o && (o = l?.v6v7ids?.n?.[s?.sourceSlideId]),
                          void 0 !== o && (s.sourceSlideId = o)),
                        e(t, s?.sourceSlideId, i, r),
                        a(!0));
                  },
                }))
              : (e(t, s?.sourceSlideId, i, r), a(!0));
        }),
      s = (s) => {
        const i = SR7.M[s];
        return ((e) => {
          const t = SR7.M[e];
          return new Promise((s) => {
            if (void 0 !== t.stream && Object.keys(t.stream).length > 0) s();
            else {
              let i =
                "wp-gallery" == t.settings.source.type
                  ? t.settings.source.sourceids
                  : t.settings?.dbid ?? "";
              (i =
                "" == i
                  ? t.c?.module?.dataset?.id ??
                    e.replace("SR7_", "").split("_")[0]
                  : i),
                _tpt.restAPI({
                  action: "get_stream_data",
                  id: i,
                  callBack: (e) => {
                    if ("object" != typeof e)
                      try {
                        e = JSON.parse(e);
                      } catch (t) {
                        e = _tpt.fixResponse(e);
                      }
                    0 == e.success
                      ? console.log("Feed could not be Loaded")
                      : (delete e.success, (t.stream = e.data)),
                      s();
                  },
                });
            }
          });
        })(s).then(async () => {
          const a = Object.entries(i.slides).filter(
            ([e, { slide: t }]) => _tpt.hop(i.slides, e) && !t.global
          );
          if (
            ((i.slideTMP = a.map(([e, { slide: t }]) => ({
              key: e,
              order: t.order - 1,
            }))),
            null == i.stream || 0 == Object.keys(i.stream).length)
          ) {
            let e =
              i.settings.source.type.charAt(0).toUpperCase() +
              i.settings.source.type.slice(1);
            return void SR7.F.errorSlide({
              id: s,
              subtitle: e + " reports: Please check the settings",
            });
          }
          const r = Object.keys(i.stream).length;
          if (0 == r) return;
          const { length: o } = i.slideTMP;
          let l = 0;
          SR7.JSON ??= {};
          for (let a = 0; a < r; a++) {
            (await t(i, i.stream[a], a)) || e(i, i.slideTMP[l++ % o].key, a, s);
          }
          for (let e of i.slideTMP) {
            i.c.slides[e.key] &&
              i.c.slides[e.key].parentNode.removeChild(i.c.slides[e.key]);
            let t = document.getElementById(s + "-" + e.key);
            t && t.parentNode.removeChild(t), delete i.slides[e.key];
          }
          i.fromStream = !0;
        });
      };
    (SR7.F.errorSlide = ({
      id: e,
      title: t = "There is nothing to show here!",
      subtitle: s = "Instagram reports: Please check the settings",
      icon: i = '<i class="fa-warning"></i>',
      bg: a = "#ffffff",
    }) => {
      const r = SR7.M[e];
      (r.migrate = void 0),
        (r.settings.type = "hero"),
        (r.settings.nav = void 0),
        (r.slides = {
          error: {
            slide: { id: "error", version: "7.0.0", order: 1 },
            layers: {
              1: {
                id: 1,
                content: { text: s },
                pos: {
                  y: ["21px", "21px", "17px", "12px", "7px"],
                  h: ["center"],
                  v: ["middle"],
                  pos: "absolute",
                },
                tl: {
                  in: {
                    content: {
                      all: [
                        { pE: "d", sX: 0.9, sY: 0.9, o: 0 },
                        { t: 370, d: 850, f: 850, pE: "d", sX: 1, sY: 1, o: 1 },
                      ],
                    },
                  },
                  out: {
                    content: { all: [{ t: 0, d: 300, f: 300, pE: "n", o: 0 }] },
                  },
                },
                tA: ["center"],
                color: ["#000000"],
                font: {
                  family: "'Arial, Helvetica, sans-serif'",
                  size: ["#a", 20, 16, 12, 7],
                  weight: ["200", "200", "200", "200", "200"],
                  ls: [0, 0, 0, 0, 0],
                },
                lh: ["#a", 20, 16, 12, 7],
                type: "text",
              },
              2: {
                id: 2,
                content: { text: t },
                pos: {
                  y: ["-20px", "-20px", "-16px", "-12px", "-7px"],
                  h: ["center"],
                  v: ["middle"],
                  pos: "absolute",
                },
                tl: {
                  in: {
                    content: {
                      all: [
                        { pE: "d", sX: 0.9, sY: 0.9, o: 0 },
                        { t: 200, d: 1e3, f: 1e3, pE: "d", sX: 1, sY: 1, o: 1 },
                      ],
                    },
                  },
                  out: {
                    content: { all: [{ t: 0, d: 300, f: 300, pE: "n", o: 0 }] },
                  },
                },
                tA: ["center"],
                color: ["#000000"],
                font: {
                  family: "'Arial, Helvetica, sans-serif'",
                  size: ["30px", "30px", "24px", "18px", "11px"],
                  weight: ["200", "200", "200", "200", "200"],
                  ls: [0, 0, 0, 0, 0],
                },
                lh: ["30px", "30px", "24px", "18px", "11px"],
                type: "text",
              },
              3: {
                id: 3,
                content: { text: i },
                pos: {
                  y: ["-70px", "-70px", "-57px", "-43px", "-26px"],
                  h: ["center"],
                  v: ["middle"],
                  pos: "absolute",
                },
                tl: {
                  in: {
                    content: {
                      all: [
                        { pE: "d", sX: 0.9, sY: 0.9, o: 0 },
                        { t: 0, d: 1040, f: 1040, pE: "d", sX: 1, sY: 1, o: 1 },
                      ],
                    },
                  },
                  out: {
                    content: { all: [{ t: 0, d: 300, f: 300, pE: "n", o: 0 }] },
                  },
                },
                tA: ["center"],
                color: ["#000000"],
                font: {
                  family: "'Arial, Helvetica, sans-serif'",
                  size: ["50px", "50px", "41px", "31px", "19px"],
                  weight: [400, 400, 400, 400, 400],
                  ls: [0, 0, 0, 0, 0],
                },
                lh: ["50px", "50px", "41px", "31px", "19px"],
                type: "text",
              },
              4: {
                id: 4,
                subtype: "slidebg",
                size: { cMode: "cover" },
                bg: { color: a },
                tl: {
                  in: {
                    bg: {
                      ms: 1e3,
                      rnd: !1,
                      temp: {
                        t: "*opacity* Fade In",
                        p: "fade",
                        m: "basic",
                        g: "fade",
                      },
                      in: { o: 0 },
                      out: { a: !1 },
                    },
                  },
                },
                type: "shape",
              },
            },
          },
        }),
        (r.slides.error = _tpt.extend(
          r.slides.error,
          SR7.D.slideObj(e, r.slides.error.slide, 1)
        )),
        (r.slides.error.layers = _tpt.extend(
          r.slides.error.layers,
          SR7.D.layerObjects({
            id: e,
            slide: r.slides.error,
            sid: "error",
            msource: "gallery",
          })
        ));
    }),
      (SR7.F.prepareSlide = (e, t, s, a) => {
        const r = SR7.M[e];
        r.zones[t] ??= {};
        let o = r.slides[t].slide?.attr?.id ?? "";
        if (
          ((o = "" == o ? e + "-" + t : o),
          (r.c.slides[t] = document.getElementById(o)),
          r.fromStream && !r.slides[t].slide.global)
        ) {
          (r.slides[t].slide.title = SR7.F.getFeed(
            r,
            r.slides[t].slide.order,
            "title"
          )),
            (r.slides[t].slide.thumb.src = SR7.F.getFeed(
              r,
              r.slides[t].slide.order,
              "thumb",
              void 0,
              void 0,
              r.slides[t].slide.thumb?.default?.image?.src
            ));
          for (let s = 0; s <= r.slides[t].slide?.actions?.length; s++)
            r.slides[t]?.slide?.actions?.[s]?.link &&
              ((r.slides[t].slide.actions[s] = _tpt.extend(
                {},
                r.slides[t].slide.actions[s]
              )),
              r.slides[t].slide.actions[s].link?.includes("{{") &&
                (r.slides[t].slide.actions[s].link = SR7.F.updateDynamicMetas(
                  e,
                  r.slides[t].slide.order,
                  r.slides[t].slide.actions[s].link
                )));
          for (let s = 0; s <= 10; s++)
            void 0 !== (r.slides[t]?.slide?.params?.[s] ?? void 0) &&
              (r.slides[t].slide.params[s].v = SR7.F.updateDynamicMetas(
                e,
                r.slides[t].slide.order,
                r.slides[t].slide.params[s].v
              )
                .trim()
                .replaceAll("<br>", "")
                .replace(/  +/g, " "));
        }
        null == r.c.slides[t] &&
          ((s ??= _tpt.collector()),
          (r.c.slides[t] = s.add({
            tag: "sr7-slide",
            id: e + "-" + t,
            class: r.slides[t].slide.global ? "sr7-staticslide" : "",
            datas: { key: t },
          })));
        for (let s in r.slides[t].slide.addOns) {
          if (!_tpt.hop(r.slides[t].slide.addOns, s)) continue;
          SR7.A?.[s]?.prepareSlide && SR7.A[s].prepareSlide(e, t);
        }
        return (
          r.slides[t].slide.global
            ? ((a += ("" == a ? "" : ",") + t),
              r.c.slides[t].classList.add("sr7-staticslide"),
              r.c.slides[t].classList.add(
                "back" == r.slides[t].slide.pos
                  ? "sr7-staticslide-low"
                  : "sr7-staticslide-high"
              ),
              (r.c.slides[t].style.pointerEvents = "none"),
              r.staticDiffLayers &&
                ((s ??= _tpt.collector()),
                (r.c.slides[t + "_2"] = s.add({
                  tag: "sr7-slide",
                  id: e + "-" + t + "_2",
                  class:
                    "sr7-staticslide " +
                    ("back" == r.slides[t].slide.pos
                      ? "sr7-staticslide-high"
                      : "sr7-staticslide-low"),
                  datas: { key: t + "_2" },
                })),
                (a += ("" == a ? "" : ",") + t + "_2"),
                (r.slides[t + "_2"] = { slide: { global: !0 }, layers: {} })))
            : void 0 !== r.slides[t].slide.order
            ? (r.slideOrder[r.slides[t].slide.order - 1] = t)
            : r.slideOrder.push(t),
          r.settings.mod.d3 &&
            _tpt.gsap.set(r.c.slides[t], {
              perspective: 1600,
              transformStyle: "preserve-3d",
            }),
          "carousel" == r.settings.type &&
            "v" == r.settings.carousel.type &&
            (r.c.slides[t].style.overflow = "hidden"),
          i(r.slides[t].slide.actions),
          { missingSlides: s, staticSlides: a }
        );
      }),
      (SR7.F.prepareSlides = async function (e) {
        const t = SR7.M[e];
        (t.slides ??= {}), (t.c.slides ??= {}), (t.zones ??= {});
        let i,
          a,
          r = "";
        if (
          ("gallery" !== t.settings.source.type && (await s(e)),
          "hero" == t.settings.type)
        ) {
          t.slideOrder = Array(1);
          let s = 999999,
            o = "";
          for (a in t.slides)
            _tpt.hop(t.slides, a) &&
              (void 0 !== t.slides[a].slide.order &&
                s > t.slides[a].slide.order &&
                ((s = t.slides[a].slide.order), (o = a)),
              t.slides[a].slide.global
                ? ({ missingSlides: i, staticSlides: r } = SR7.F.prepareSlide(
                    e,
                    a,
                    i,
                    r
                  ))
                : "" == o && (o = a));
          ({ missingSlides: i, staticSlides: r } = SR7.F.prepareSlide(
            e,
            o,
            i,
            r
          ));
        } else
          for (a in ((t.slideOrder = Array(Object.keys(t.slides).length)),
          t.slides))
            _tpt.hop(t.slides, a) &&
              ({ missingSlides: i, staticSlides: r } = SR7.F.prepareSlide(
                e,
                a,
                i,
                r
              ));
        if (
          (i &&
            ((t.c.adjuster ??=
              t.c.module.getElementsByTagName("sr7-adjuster")[0]),
            (t.c.content ??= t.c.module.getElementsByTagName("sr7-content")[0]),
            (t.c.carousel ??=
              t.c.module.getElementsByTagName("sr7-carousel")[0]),
            i.append(
              "carousel" == t.settings.type ? t.c.carousel : t.c.content
            )),
          (t.slideOrder = t.slideOrder.filter(Boolean)),
          (t.slideOrder = t.settings.slideshow.shuffle
            ? _tpt.gsap.utils.shuffle(t.slideOrder)
            : t.slideOrder),
          (t.staticSlides = r.split(",")),
          "carousel" == t.settings.type)
        )
          for (let e in t.staticSlides)
            _tpt.hop(t.staticSlides, e) &&
              t.staticSlides[e] &&
              t.slides[t.staticSlides[e]].slide.respVP &&
              t.c.content.appendChild(t.c.slides[t.staticSlides[e]]);
        (t.prev ??= {}), (t.current ??= {}), (t.next ??= {});
        for (let e of ["index", "slide", "id"])
          t.current[e] = t.prev[e] = t.next[e] = -1;
        for (var o in ((t.navSlideOrder = []), t.slideOrder))
          t.slides[t.slideOrder[o]]?.slide?.slideshow?.hfn ||
            t.navSlideOrder.push(t.slideOrder[o]);
        (t.len = t.slideOrder.length), (t.navLen = t.navSlideOrder.length);
      });
    const i = (e) => {
      if (null != e)
        for (let t in e)
          if (_tpt.hop(e, t) && "open_modal" == e[t].a) {
            let s = e[t].target;
            if (SR7.F?.modal?.prepared?.[s]) continue;
            (SR7.F.modal.prepared ??= {}), (SR7.F.modal.prepared[s] = !0);
            let i = SR7.F.module.getIdByAlias(s);
            if (void 0 !== i && void 0 !== SR7.M[i].c.module) {
              let e = _tpt.strSetToObj(
                SR7.M?.[i]?.c?.module?.dataset?.modal ?? ""
              );
              SR7.F.modal.register({
                id: i,
                alias: s,
                speed: parseInt(e.sp ?? 1e3) / 1e3,
                bg: e.bg ?? "transparent",
                pS: e.pS,
                v: e.v ?? "middle",
                h: e.h ?? "center",
              });
            } else
              _tpt.restAPI({
                action: "get_modal_settings",
                version: 7,
                id: i,
                alias: s,
                forcealias: null == i,
                callBack: (e) => {
                  if ("object" != typeof e)
                    try {
                      e = JSON.parse(e);
                    } catch (t) {
                      e = _tpt.fixResponse(e);
                    }
                  0 == e.success
                    ? console.log(s + " Could not be Loaded from DB")
                    : ((e.sp = "" == e.sp ? "1000" : e.sp),
                      e.v6v7ids &&
                        (SR7.E.v6v7ids = _tpt.extend(SR7.E.v6v7ids, e.v6v7ids)),
                      e.trans &&
                        (SR7.E.transtable = _tpt.extend(
                          SR7.E.transtable,
                          e.trans
                        )),
                      e.navs && (SR7.NAV = _tpt.extend(SR7.NAV, obj.p)),
                      SR7.F.modal.register({
                        id: e.id,
                        alias: s,
                        speed: parseInt(e.sp ?? 1e3) / 1e3,
                        bg: e.bg ?? "transpaent",
                        pS: e.pS,
                        v: e.v ?? "middle",
                        h: e.h ?? "center",
                      }));
                },
              });
          }
    };
    SR7.F.getSlideARatios = (e) => {
      const t = SR7.M[e];
      if (void 0 === t.slideRatios)
        for (let e in t.c.slides)
          if (_tpt.hop(t.slides, e))
            for (let s in t.slides[e].layers)
              (t.slideRatios ??= {}),
                _tpt.hop(t.slides[e].layers, s) &&
                  "slidebg" == t.slides[e].layers[s].subtype &&
                  (t.slideRatios[e] =
                    "" != (t.slides[e].layers[s].bg?.image?.src ?? "") &&
                    _tpt.getRatio(
                      (t.slides[e].layers[s].bg?.image?.ratio ?? void 0) ||
                        (t.slides[e].layers[s].bg?.video?.ratio ?? void 0) ||
                        1
                    ));
    };
    document.addEventListener("sr.slide.changeRequest", async function (e) {
      const t = SR7.M[e.id];
      if (null == t || null == t || 0 == t.states.inViewPort) {
        void 0 !== t.c.module.observParams &&
          ((t.c.module.observParams.callBack = function (e) {
            _tpt.event.trigger("dom", "sr.slide.changeRequest", { id: e.id });
          }),
          (t.c.module.observParams.runonce = !0),
          (t.c.module.observParams.obj = t));
        let e = t.settings?.vPort ?? "100px";
        return (
          (e = Array.isArray(e) ? e[0] : e),
          void _tpt.observeModule(t.c.module, e)
        );
      }
      SR7.F.triggerSlideEvent(e.id, "beforeChange", ["onbeforeswap"]),
        await SR7.F.drawSlide({
          id: e.id,
          slideid: t.next.id,
          type: "process",
          global: !0,
          render: !0,
          callback: e.callback,
          inlayers: e.inlayers,
          outlayers: e.outlayers,
        });
    }),
      (SR7.F.closeSlide = async (e) => {
        const t = SR7.M[e];
        -1 != t.current.id &&
          (await SR7.F.animateLayers({
            id: e,
            skey: t.current.id,
            scene: "out",
          }),
          (t.current = { id: -1, slide: -1, index: -1 }));
      });
    const a = async (e, t) =>
      new Promise((s) => {
        Object.keys(SR7.M[e].slides[t]?.layers).length > 0 ||
        SR7.M[e].slides[t]?.slide?.global ||
        0 == Object.keys(SR7.M[e].slides[t]?.slide).length
          ? s()
          : _tpt.restAPI({
              action: "get_full_slider_object",
              version: 7,
              id: SR7.M[e].c.module.dataset.id ?? e,
              slideid: t,
              callBack: (t) => {
                if ("object" != typeof t)
                  try {
                    t = JSON.parse(t);
                  } catch (e) {
                    t = _tpt.fixResponse(t);
                  }
                if (t.success) {
                  for (let s in t.slides) {
                    let i = t.slides[s].slide.id;
                    Object.keys(SR7.M[e].slides[i]?.layers).length > 0 ||
                      (SR7.M[e].slides[i].layers = _tpt.extend(
                        SR7.M[e].slides[i].layers,
                        SR7.D.layerObjects({
                          id: e,
                          slide: t.slides[s],
                          sid: i,
                          msource: SR7.M[e].settings.source?.type ?? "gallery",
                        })
                      ));
                  }
                  s();
                }
              },
            });
      });
    (SR7.F.preLoadSiblings = (e, t) => {
      let s = SR7.M[e],
        i = s.slideOrder[t];
      i &&
        ("preparing" == s.prepareMap[i] ||
          s.prepareMap[i] ||
          ((s.prepareMap[i] = "preparing"),
          a(e, i).then(async () => {
            await SR7.F.prepareLayers(e, i, !0).then(() => {
              s.prepareMap[i] = !0;
            });
          })));
    }),
      (SR7.F.drawSlide = async (e) => {
        await a(e.id, e.slideid).then(async () => {
          var t;
          0 == SR7.M[e.id].c.content.offsetWidth &&
            (await ((t = SR7.M[e.id].c.content),
            new Promise((e) => {
              !(function s() {
                t.offsetWidth > 0
                  ? requestAnimationFrame(() => e())
                  : requestAnimationFrame(s);
              })();
            }))),
            await SR7.F.drawSlideProc(e);
        });
      }),
      (SR7.F.drawSlideProc = async (e) => {
        let {
          id: t,
          slideid: s,
          type: i,
          global: a,
          render: r,
          callback: o,
          inlayers: l,
          outlayers: n,
          keepSlideVisible: d,
        } = e;
        const c = SR7.M[t];
        if (null != SR7.M[t].slides[s]) {
          if (
            ((SR7.preLoader.state(t) &&
              SR7.preLoader.state(t, c.c.slides[s])) ||
              SR7.preLoader.show(t, c.c.slides[s]),
            (c.prepareMap ??= {}),
            "preparing" == c.prepareMap[s])
          )
            return setTimeout(async function () {
              await SR7.F.drawSlideProc(e);
            }, 19);
          if (
            (null == c.prepareMap[s] && (c.prepareMap[s] = "preparing"),
            await SR7.F.prepareLayers(t, s),
            c.fpsChecked ||
              (_tpt.measureAverageFrameRate(4e3, t).then((e) => {
                (c.averageFPS = e.averageFPS),
                  (c.lowFrameRateCount = e.lowFrameRateCount),
                  c.averageFPS < 30 &&
                    _tpt.event.trigger("dom", "sr7.lowfps", {
                      id: t,
                      fps: e.averageFPS,
                    });
              }),
              (c.fpsChecked = !0)),
            (c.prepareMap[s] = !0),
            SR7.preLoader.hide(t),
            SR7.preLoader.hide(t, c.c.slides[s]),
            "process" == i)
          ) {
            let e = c.navLen - 1;
            if (
              ((c.lastChangeDir =
                void 0 !== c.current.index && -1 !== c.current.index
                  ? (c.current.index < c.next.index && c.next.index !== e) ||
                    (c.current.index == e && 0 == c.next.index)
                    ? 1
                    : c.current.index > c.next.index ||
                      (0 == c.current.index && c.next.index == e)
                    ? -1
                    : 1
                  : 1),
              !0 !== d &&
                -1 !== c.current.id &&
                c.current.id !== c.next.id &&
                (await SR7.F.animateLayers({
                  id: t,
                  skey: c.current.id,
                  scene: "out",
                  layers: n,
                })),
              !0 !== d)
            )
              for (let e of ["index", "slide", "id"])
                (c.prev[e] = c.current[e]),
                  (c.current[e] = c.next[e]),
                  (c.next[e] = -1);
            c.navLen > 1 &&
              c.slides[c.prev.id]?.slide.slideshow.hal &&
              ((e, t) => {
                const s = SR7.M[e];
                if (
                  ((s.hideAfterLoop ??= {}),
                  (s.hideAfterLoop[t] ??= 0),
                  s.hideAfterLoop[t]++,
                  s.hideAfterLoop[t] >=
                    parseInt(s.slides[t].slide.slideshow.hal))
                ) {
                  void 0 !== SR7.F.navigation && SR7.F.navigation.remove(e, t);
                  let i = s.navSlideOrder.findIndex((e) => e == t);
                  -1 !== i && s.navSlideOrder.splice(i, 1),
                    (i = s.slideOrder.findIndex((e) => e == t)),
                    -1 !== i && s.slideOrder.splice(i, 1),
                    (s.current.index = s.navSlideOrder.findIndex(
                      (e) => e == s.current.id
                    ));
                }
              })(t, c.prev.id),
              !0 !== d &&
                SR7.F.navigation &&
                SR7.F.navigation.select(t, c.current.id),
              c.settings.fixed ||
                c.slides[s].slide.global ||
                (c.c.slides[s].style.pointerEvents = c.settings.mod.d3
                  ? "none"
                  : "auto");
          }
          if (
            ((c.c.slides[s].style.visibility = "visible"),
            (c.c.slides[s].style.display = "block"),
            a)
          )
            for (let e in c.staticSlides)
              _tpt.hop(c.staticSlides, e) &&
                "" != c.staticSlides[e] &&
                (await SR7.F.prepareLayers(t, c.staticSlides[e]).then(
                  async () => {
                    (c.c.slides[c.staticSlides[e]].style.display = "block"),
                      (c.c.slides[c.staticSlides[e]].style.visibility =
                        "visible"),
                      await SR7.F.drawRawLayers(
                        t,
                        c.staticSlides[e],
                        "prepare"
                      ),
                      await SR7.F.animateLayers({
                        id: t,
                        skey: c.staticSlides[e],
                        scene: "out",
                      }),
                      await SR7.F.animateLayers({
                        id: t,
                        skey: c.staticSlides[e],
                        scene: "in",
                      });
                  }
                ));
          if (
            (!0 !== d && SR7.F.modify.handleListeners(t),
            SR7.F.updateBasicMetas(t),
            SR7.F.drawRawLayers(t, s, "prepare"),
            r &&
              ((c.firstRendering ??= {}),
              (c.firstRendering[s] ??= !0),
              SR7.F.animateLayers({ id: t, skey: s, layers: l })),
            "carousel" == c.settings.type)
          ) {
            let i = c.c.layers?.[c.c.slideBGs[c.current.id]?.lid],
              a = c.c.layers?.[c.c.slideBGs[c.prev.id]?.lid];
            if (
              (e.skipPan ||
                (i?.tl?.in?.pan && SR7.F.pan.refresh(t, c.current.id),
                a?.tl?.in?.pan && a.tl.in.pan.timeScale(-3)),
              a?.media)
            ) {
              let e = a.media.player.options;
              "1sttime" == e.autoPlay && (e.autoPlay = !1),
                "no1sttime" == e.autoPlay && (e.autoPlay = !0),
                a.media.pause(),
                e.rewind && a.media.rewind();
            }
            for (let e in c.videosPlaying)
              _tpt.hop(c.videosPlaying, e) &&
                (c.videosPlaying[e].skey === c.current.id ||
                  c.videoDontInterrupt?.[e] ||
                  c.videosPlaying[e].pause());
            if (s == c.current.id)
              for (let e in c.videoPlayInFocus) {
                if (!_tpt.hop(c.videoPlayInFocus, e)) continue;
                const t = c.videoPlayInFocus[e];
                t.skey == c.current.id &&
                  "false" !== String(t.options.autoPlay) &&
                  "no1sttime" !== t.options.autoPlay &&
                  t.play(),
                  ("no1sttime" !== t.options.autoPlay &&
                    "1sttime" !== t.options.autoPlay) ||
                    (t.carouselFirstFocus
                      ? (t.options.autoPlay =
                          "no1sttime" === t.options.autoPlay)
                      : (t.carouselFirstFocus = !0));
              }
            i?.media && i.media.play(),
              SR7.F.modify?.processAll && SR7.F.modify.processAll(t, "scroll");
          }
          if (
            (requestAnimationFrame(function () {
              "carousel" !== c.settings.type &&
                c.zones[s]?.all &&
                ((c.zones[s].all < (c.dims.lastZoneHeight ?? 0) ||
                  c.zones[s].all > (c.dims.lastHeight ?? 0)) &&
                  SR7.F.updateModuleDims(t, !0),
                (c.dims.lastHeight = c.dims.content.h),
                (c.dims.lastZoneHeight = c.zones[s].all)),
                ("all" !== c.settings.carousel.showAllLayers &&
                  s != SR7.M[t].current.id) ||
                  SR7.F.reposLayers(t),
                SR7.M[t].c.autoParents?.[s] &&
                  requestAnimationFrame(async function () {
                    c.firstRendering[s] = !1;
                    for (let e of SR7.M[t].c.autoParents[s])
                      (("carousel" == c.settings.type &&
                        "all" === c.settings.carousel.showAllLayers) ||
                        ("individual" === c.settings.carousel.showAllLayers &&
                          SR7.M[t].slides[s].layers[e].viOC) ||
                        s == SR7.M[t].current.id) &&
                        (await SR7.F.animateLayers({
                          id: t,
                          skey: s,
                          layers: [e],
                          scene: "in",
                          caller: "update",
                          update: "content",
                        }));
                  });
            }),
            "process" == i &&
              (c.zOrder.managed || SR7.F.swapSlidezIndex(t),
              "hero" !== c.settings.type && c.len > 1 && SR7.slideShow.start(t),
              requestAnimationFrame(() => {
                _tpt.scrollObserver.run(c.c.module);
              }),
              void 0 !== c.c.viSH &&
                ((c.c.viSH.me ??= SR7.F.module.listeners.reg(
                  t,
                  _tpt.is_mobile ? "touchstart" : "mouseenter",
                  SR7.F.showHideLayersOnHover
                )),
                (c.c.viSH.ml ??= SR7.F.module.listeners.reg(
                  t,
                  _tpt.is_mobile ? "touchend" : "mouseleave",
                  SR7.F.showHideLayersOnHover
                )),
                c.states.overModule || SR7.F.showHideLayersOnHover(t, "hide")),
              void 0 !== c.c.pans && SR7.F.pan.observe(t)),
            "function" == typeof o && o(t),
            (c.c.module.dataset.current = c.current.id),
            "carousel" !== c.settings.type &&
              requestAnimationFrame(() => {
                SR7.F.preLoadSiblings(t, c.current.index + 1, !0),
                  SR7.F.preLoadSiblings(
                    t,
                    c.current.index - 1 >= 0
                      ? c.current.index - 1
                      : c.navLen - 1,
                    !0
                  );
              }),
            !0 === c.settings.browser.useURLDeeplink)
          ) {
            const e = c.slides[c.current.id].slide.attr.deepLink;
            e && window.location.hash !== e && (window.location.hash = e);
          }
        }
      }),
      (SR7.F.swapSlidezIndex = (e, t) => {
        const s = SR7.M[e];
        for (let e in s.c.slides)
          _tpt.hop(s.c.slides, e) &&
            !s.slides[e].slide.global &&
            e !== t &&
            e !== s.current.id &&
            e !== s.prev.id &&
            (s.c.slides[e].style.zIndex = 1);
        void 0 !== t && void 0 !== s.c.slides[t]
          ? ((s.c.slides[t].style.zIndex = 5),
            void 0 !== s.c.slides[s.current.id] &&
              (s.c.slides[s.current.id].style.zIndex = 2))
          : (void 0 !== s.c.slides[s.prev.id] &&
              (s.c.slides[s.prev.id].style.zIndex = 2),
            void 0 !== s.c.slides[s.current.id] &&
              (s.c.slides[s.current.id].style.zIndex = 5));
      }),
      (SR7.F.requestSlide = function (e) {
        let { id: t, slide: s, force: i = !1, getter: a, indicator: r } = e;
        var o = SR7.M[t];
        if (
          "carousel" !== o.settings.type &&
          parseInt(o.settings?.nav?.nd ?? 0) > 0 &&
          o.states.sceneInProgress
        )
          return (
            (o.states.waitingForNextCall = e),
            void (
              o.states.waitingForNextCallTimer ||
              (o.states.waitingForNextCallTimer = setTimeout(() => {
                SR7.F.slideDelayFinished(t);
              }, parseInt(o.settings.nav.nd)))
            )
          );
        delete o.states.waitingForNextCall;
        let l = !0;
        if (void 0 !== s) {
          if (
            ((s =
              "#" == String(s)[0] &&
              -1 == _tpt.findIndex(o.slideOrder, s.replace("#", ""))
                ? parseInt(s) > 50
                  ? 0
                  : s.replace("#", "")
                : s),
            "#" !== String(s)[0])
          ) {
            let e = o.navSlideOrder.indexOf(
              o.slideOrder[-1 !== o.next.index ? o.next.index : o.current.index]
            );
            (e =
              -1 == e
                ? o.navSlideOrder.indexOf(o.slideOrder[o.lastNavRequested])
                : e),
              (s =
                "#" +
                o.navSlideOrder[
                  _tpt.gsap.utils.wrap(
                    0,
                    o.navLen,
                    "+" == ("" + s)[0] || "-" == ("" + s)[0]
                      ? parseInt(e) + parseInt(s)
                      : parseInt(s)
                  )
                ]);
          }
          (o.required =
            "#undefined" == s
              ? 0
              : _tpt.findIndex(o.slideOrder, s.replace("#", ""))),
            (l = -1 !== o.navSlideOrder.indexOf(o.slideOrder[o.required])),
            l &&
              ((o.lastNavRequested = o.required),
              (o.navRequired = o.navSlideOrder.indexOf(
                o.slideOrder[o.required]
              )));
        }
        if (a) return o.required;
        if (
          (!e.skipNav &&
            l &&
            (o.c.nav?.thumbs?.srcr &&
              o.c.nav.thumbs.srcr.goTo(o.navRequired ?? o.required),
            o.c.nav?.tabs?.srcr &&
              o.c.nav.tabs.srcr.goTo(o.navRequired ?? o.required)),
          "carousel" != o.settings.type || "carousel" === r)
        ) {
          if (-1 == o.next.index && -1 !== o.required)
            (o.next.index = o.required),
              (o.required = -1),
              (o.next.id = o.slideOrder[o.next.index]),
              (o.next.slide = o.c.slides[o.next.id]);
          else if (!i) return;
          if (o.current.id != o.next.id)
            _tpt.event.trigger("dom", "sr.slide.changeRequest", e);
          else for (let e of ["index", "slide", "id"]) o.next[e] = -1;
        } else o.c.carousel?.src && o.c.carousel.src.goTo(o.required);
      }),
      (SR7.F.requestSlideFocus = (e, t) => {
        const s = SR7.M[e];
        if (null == s) return;
        let i = "all" == (s.settings?.carousel?.showAllLayers ?? !1);
        SR7.F.requestSlide({
          id: e,
          slide: "#" + t,
          indicator: s.settings.type,
          inlayers: i ? [] : SR7.F.getCarouselLayers(e, t, "infocus"),
          outlayers: i
            ? []
            : SR7.F.getCarouselLayers(e, s.current.id, "outfocus"),
          skipNav: !0,
          render: !i,
        });
      }),
      (SR7.F.redrawBG = async (e, t, s) => {
        await SR7.F.drawSlide({
          id: e,
          slideid: t,
          skipPan: !0,
          type: "draw",
          global: !1,
          inlayers: SR7.F.getCarouselLayers(e, t, "visible"),
          render: s,
          callback: function () {
            "carousel" === SR7.M[e].settings.type &&
              SR7.F.showCarouselSlide(e, t);
          },
        });
      }),
      (SR7.F.nborSlide = (e, t) => {
        const s = SR7.M[e];
        return (
          s.current.index - 1 == t ||
          s.current.index == t - 1 ||
          (0 == s.current.index && t == s.len - 1) ||
          (0 == t && s.current.index == s.len - 1)
        );
      }),
      (SR7.slideShow = {
        build: (e) => {
          const t = SR7.M[e],
            s = t.settings.pbar,
            i = (t.slideShow = { t: 0, d: 0 });
          return (
            (t.useProgressBar = void 0 !== s && s.set),
            void 0 !== t.settings.slideshow.stopAt &&
              t.settings.slideshow.stopAt >= 0 &&
              (i.stopAt = parseInt(t.settings.slideshow.stopAt)),
            void 0 !== t.settings.slideshow.loop &&
              t.settings.slideshow.loop >= 0 &&
              ((i.loop = parseInt(t.settings.slideshow.loop) - 1),
              (i.stopAt = i.stopAt || t.navLen)),
            !_tpt.is_mobile &&
              t.settings.slideshow.auto &&
              t.settings.slideshow.sOH &&
              ((i.listenEnter = SR7.F.module.listeners.reg(
                e,
                _tpt.is_mobile ? "touchstart" : "mouseenter",
                SR7.slideShow.pauseOnHover
              )),
              (i.listenLeave = SR7.F.module.listeners.reg(
                e,
                _tpt.is_mobile ? "touchstart" : "mouseleave",
                SR7.slideShow.resumeOnLeave
              ))),
            null == i.loop && i.stopAt >= 0 && (i.loop = 0),
            t.useProgressBar
              ? ((i.c = _tpt
                  .collector()
                  .add({ tag: "canvas", class: "sr7-pbar", id: e + "-pbar" })),
                (i.ctx = i.c.getContext("2d")),
                (i.parts = "slide" == s.base ? 1 : t.navLen),
                (i.gap = parseInt("slide" == s.base ? 0 : s.g ? s.gs : 0)),
                (s.s = parseInt(s.s)),
                t.c.content.appendChild(i.c),
                SR7.slideShow.resize(e),
                "cw" == s.t || "ccw" == s.t
                  ? (i.r = parseInt(s.r))
                  : ((i.totalSize = "horizontal" === s.t ? i.w : i.h),
                    (i.partSize =
                      (i.totalSize - (i.parts - 1) * i.gap) / i.parts),
                    (i._ = {
                      w: parseInt("horizontal" == s.t ? i.partSize : s.s),
                      h: parseInt("horizontal" == s.t ? s.s : i.partSize),
                      x: 0,
                      y: 0,
                      gw: "horizontal" == s.t ? i.gap : s.s,
                      gh: "horizontal" == s.t ? s.s : i.gap,
                      k: "horizontal" == s.t ? "x" : "y",
                    })),
                (i.rtl =
                  "horizontal" == s.t
                    ? "right" == s.h
                    : "vertical" == s.t && "bottom" == s.v),
                (i.tween = _tpt.gsap.fromTo(
                  i,
                  9,
                  { t: 0 },
                  { t: 100, ease: "none" }
                )),
                i.tween.pause(),
                i.tween.eventCallback(
                  "onUpdate",
                  SR7.slideShow[
                    "cw" == s.t || "ccw" == s.t ? "drawCircle" : "drawBar"
                  ],
                  [e]
                ),
                i.tween.eventCallback(
                  "onComplete",
                  (e) => {
                    SR7.F.requestSlide({ id: e, slide: "+1" }),
                      SR7.F.triggerSlideEvent(e, "ended");
                  },
                  [e]
                ),
                (t.settings.pbar.s = parseInt(t.settings.pbar.s)),
                _tpt.resizeObserver.observe(
                  (e) => {
                    SR7.slideShow.resize(e);
                  },
                  19,
                  e
                ),
                i)
              : ((i.tween = _tpt.gsap.fromTo(
                  i,
                  9,
                  { t: 0 },
                  { t: 100, ease: "none" }
                )),
                i.tween.eventCallback(
                  "onComplete",
                  (e) => {
                    SR7.F.requestSlide({ id: e, slide: "+1" }),
                      SR7.F.triggerSlideEvent(e, "ended");
                  },
                  [e]
                ),
                void i.tween.eventCallback(
                  "onUpdate",
                  function () {
                    t?.c?.nav?.scrubber?.progTween &&
                      !t?.c?.nav?.scrubber?.srScrubber?.dragging &&
                      t.c.nav.scrubber.progTween.progress(this.progress());
                  },
                  [e]
                ))
          );
        },
        fastForward: (e) => {
          const t = SR7.M[e],
            s = t.settings.pbar,
            i = t.slideShow;
          (i.FF = {
            Sindex: i.Sindex,
            Reverse: t.current.index < i.Sindex,
            extra: 0 != i.tween.progress() && t.current.index < i.Sindex,
            t:
              100 * i.tween.progress() ||
              (i.Sindex < t.current.index ? 0 : 100),
          }),
            (i.tweenFF = _tpt.gsap.to(i, {
              duration:
                i.tween.progress() > 0
                  ? (i.FF.Reverse
                      ? i.tween.progress()
                      : 1 - i.tween.progress()) / 10
                  : 0.1,
              ease: "none",
            })),
            i.tween && (i.tween.progress(0), i.tween.pause()),
            i.tweenFF.eventCallback(
              "onUpdate",
              SR7.slideShow[
                "cw" == s.t || "ccw" == s.t ? "drawCircle" : "drawBar"
              ],
              [e, !0]
            ),
            i.tweenFF.eventCallback(
              "onComplete",
              (e, t, s) => {
                t.FF.Sindex < s.current.index
                  ? t.FF.Sindex++
                  : t.FF.Sindex > s.current.index && t.FF.Sindex--,
                  t.FF.Reverse && (t.tweenFF.invalidate(), (t.FF.t = 100)),
                  t.FF.Sindex !== s.current.index || t.FF.extra
                    ? t.tweenFF.play(0)
                    : SR7.slideShow.play(e),
                  (t.FF.extra = !1),
                  t.tweenFF.duration(0.1);
              },
              [e, i, t]
            );
        },
        nullTimer: (e) => {
          const t = SR7.M[e],
            s = t.slideShow;
          (t.useProgressBar = !1),
            (t.settings.slideshow.auto = !1),
            void 0 !== s &&
              void 0 !== s.c &&
              _tpt.gsap.to(s.c, 0.5, {
                opacity: 0,
                onComplete: () => {
                  s.c.remove();
                },
              });
        },
        pauseOnHover: (e, t) => {
          (SR7.M[e].slideShow.sOH = !0), SR7.slideShow.pause(e, t);
        },
        resumeOnLeave: (e, t) => {
          (SR7.M[e].slideShow.sOH = !1), SR7.slideShow.resume(e);
        },
        pause: (e, t) => {
          null != SR7.M[e].slideShow &&
            null != SR7.M[e].slideShow.tween &&
            (!0 === t && (SR7.M[e].states.forcedPause = !0),
            SR7.M[e].slideShow.tween.pause(),
            (SR7.M[e].slideShow.state = "paused"),
            SR7.F.updateAllTogglePrgLayers(e),
            SR7.F.triggerSlideEvent(e, "pause", ["onpause"]));
        },
        resume: (e) => {
          null != SR7.M[e].slideShow &&
            null != SR7.M[e].slideShow.tween &&
            (delete SR7.M[e].states.forcedPause,
            delete SR7.M[e].slideShow.state,
            SR7.M[e].slideShow.tween.play(),
            SR7.F.updateAllTogglePrgLayers(e),
            SR7.F.triggerSlideEvent(e, "resume", ["onresume"]));
        },
        getLen: (e) => {
          const t = SR7.M[e];
          return parseInt(
            "default" ==
              (t.slides[t.current?.id ?? -1]?.slide?.slideshow?.len ??
                "default")
              ? t.settings.default.len ?? 9e3
              : t.slides[t.current.id ?? -1].slide.slideshow.len ?? 9e3
          );
        },
        start: (e) => {
          const t = SR7.M[e],
            s = t.settings.slideshow.auto
              ? t.slideShow || SR7.slideShow.build(e)
              : void 0;
          if (
            !t.settings.slideshow.auto ||
            (void 0 !== s && 0 == s.loop && s.stopAt - 1 == t.current.index)
          )
            return (
              SR7.slideShow.nullTimer(e),
              void _tpt.event.trigger("dom", "sr.module.finished", { id: e })
            );
          void 0 !== s &&
            s.loop >= 0 &&
            t.current.index == t.len - 1 &&
            s.loop--,
            t.useProgressBar
              ? (SR7.slideShow.resize(e),
                "animate" == t.settings.pbar.rev &&
                ("paused" == SR7.M[e].slideShow.state ||
                  (1 !== s.tween.progress() && 0 !== s.tween.progress()) ||
                  t.current.index < s.Sindex ||
                  t.current.index > s.Sindex + 1)
                  ? SR7.slideShow.fastForward(e)
                  : SR7.slideShow.play(e))
              : SR7.slideShow.play(e);
        },
        play: (e, t = 0) => {
          const s = SR7.M[e],
            i = s.slideShow;
          (i.Sindex = s.current.index),
            (i.d = SR7.slideShow.getLen(e)),
            i.tween.duration(i.d / 1e3),
            SR7.F.updateAllTogglePrgLayers(e),
            "paused" == SR7.M[e].slideShow.state
              ? (i.tween.play(0),
                requestAnimationFrame(function () {
                  i.tween.pause();
                }))
              : i.tween.play(t);
        },
        resize: (e) => {
          const t = SR7.M[e];
          if (!t.settings.slideshow.auto || !t.useProgressBar) return;
          const s = t.settings.pbar,
            i = t.slideShow;
          (i.w = parseInt(
            "horizontal" == s.t
              ? "grid" == s.a
                ? t.dims.CFC.w
                : t.dims.content.w
              : "vertical" == s.t
              ? parseInt(s.s)
              : 2 * parseInt(s.r)
          )),
            (i.h = parseInt(
              "horizontal" == s.t
                ? parseInt(s.s)
                : "vertical" == s.t
                ? "grid" == s.a
                  ? t.dims.CFC.h
                  : t.dims.content.h
                : 2 * parseInt(s.r)
            )),
            (i.c.style.width = i.w + "px"),
            (i.c.style.height = i.h + "px"),
            (i.c.width = i.w * window.devicePixelRatio),
            (i.c.height = i.h * window.devicePixelRatio),
            i.ctx.scale(window.devicePixelRatio, window.devicePixelRatio),
            (i.resized = !0),
            SR7.gV({ v: s.vis, id: e })
              ? ((i.c.style.visibility = "visible"),
                (i.c.style.top =
                  "vertical" !== s.t
                    ? "top" == s.v
                      ? parseInt(s.y ?? 0) +
                        ("grid" == s.a ? t.dims.CFC.y : 0) +
                        "px"
                      : (("grid" == s.a
                          ? t.dims.CFC.y + t.dims.CFC.h
                          : t.dims.content.h) -
                          parseInt(s.y ?? 0) -
                          ("cw" == s.t || "ccw" == s.t
                            ? 2 * parseInt(s.r)
                            : parseInt(s.s))) /
                          ("bottom" == s.v ? 1 : 2) +
                        "px"
                    : "grid" == s.a
                    ? t.dims.CFC.y + "px"
                    : "0px"),
                (i.c.style.left =
                  ("horizontal" !== s.t
                    ? "left" == s.h
                      ? parseInt(s.x ?? 0) + ("grid" == s.a ? t.dims.CFC.x : 0)
                      : (("grid" == s.a
                          ? t.dims.CFC.x + t.dims.CFC.w
                          : t.dims.content.w) +
                          ("right" == s.h ? -1 : 1) * parseInt(s.x ?? 0) -
                          ("cw" == s.t || "ccw" == s.t
                            ? 2 * parseInt(s.r)
                            : parseInt(s.s))) /
                        ("right" == s.h ? 1 : 2)
                    : "grid" == s.a
                    ? t.dims.CFC.x
                    : 0) + "px"),
                "cw" != s.t &&
                  "ccw" != s.t &&
                  ((i.totalSize = "horizontal" === s.t ? i.w : i.h),
                  (i.partSize =
                    (i.totalSize - (i.parts - 1) * i.gap) / i.parts),
                  null != i._ &&
                    ((i._.w = parseInt("horizontal" == s.t ? i.partSize : s.s)),
                    (i._.h = parseInt("horizontal" == s.t ? s.s : i.partSize)),
                    SR7.slideShow[
                      "cw" == s.t || "ccw" == s.t ? "drawCircle" : "drawBar"
                    ](e))))
              : (i.c.style.visibility = "hidden");
        },
        drawCircle: (e, t) => {
          const s = SR7.M[e],
            i = s.slideShow;
          if (!t && void 0 !== i.tweenFF && i.tweenFF.isActive()) return;
          const a = s.settings.pbar,
            r = t ? i.FF.Sindex : i.Sindex,
            o = (t ? i.FF.t : i.t) / 100;
          s?.c?.nav?.scrubber?.progTween &&
            !s?.c?.nav?.scrubber?.srScrubber?.dragging &&
            s.c.nav.scrubber.progTween.progress(o);
          let l = "slide" == a.base ? 360 * o : (360 / i.parts) * o;
          "slide" !== a.base && (l += (360 / i.parts) * r),
            "ccw" == a.t && (l = 360 - l),
            i.r - parseInt(a.s) <= 0 && (a.s = a.r / 4),
            (i.ctx.lineCap = "round"),
            i.ctx.clearRect(0, 0, 2 * a.r, 2 * a.r),
            i.ctx.beginPath(),
            i.ctx.arc(
              i.r,
              i.r,
              a.r - a.s,
              (Math.PI / 180) * 270,
              (Math.PI / 180) * 630
            ),
            (i.ctx.strokeStyle = a.bg),
            (i.ctx.lineWidth = a.s - 1),
            i.ctx.stroke(),
            i.ctx.beginPath(),
            (i.ctx.strokeStyle = a.c),
            (i.ctx.lineWidth = a.s),
            i.ctx.arc(
              i.r,
              i.r,
              a.r - a.s,
              (Math.PI / 180) * 270,
              (Math.PI / 180) * (270 + l),
              "cw" !== a.t
            ),
            i.ctx.stroke();
        },
        drawBar: (e, t) => {
          const s = SR7.M[e],
            i = s.slideShow;
          if (!t && void 0 !== i.tweenFF && i.tweenFF.isActive()) return;
          const a = s.settings.pbar,
            r = t ? i.FF.Sindex : i.Sindex;
          i.ctx.clearRect(0, 0, i.c.width, i.c.height);
          const o = (t ? i.FF.t : i.t) / 100,
            l = i.partSize * o;
          s?.c?.nav?.scrubber?.progTween &&
            !s?.c?.nav?.scrubber?.srScrubber?.dragging &&
            s.c.nav.scrubber.progTween.progress(o),
            (i._.pw = "horizontal" == a.t ? l : a.s),
            (i._.ph = "horizontal" == a.t ? a.s : l);
          for (let e = 0; e < i.parts; e++)
            (i._[i._.k] = i.rtl
              ? i.totalSize - (e + 1) * (i.partSize + i.gap) + i.gap
              : e * (i.partSize + i.gap)),
              (i.ctx.fillStyle =
                (e < r && 1 !== i.parts) || (e === r && 100 === i.t)
                  ? a.c
                  : a.bg),
              i.ctx.fillRect(i._.x, i._.y, i._.w, i._.h),
              (e !== r && 1 != i.parts) ||
                ((i._[i._.k] = i.rtl
                  ? i._[i._.k] + i.partSize - l
                  : i._[i._.k]),
                (i.ctx.fillStyle = a.c),
                i.ctx.fillRect(i._.x, i._.y, i._.pw, i._.ph));
          if (i.gap > 0) {
            i.ctx.fillStyle = a.gc;
            for (let e = 1; e < i.parts; e++)
              (i._[i._.k] = i.rtl
                ? i.totalSize - e * (i.partSize + i.gap)
                : e * i.partSize + (e - 1) * i.gap),
                "transparent" == a.gc
                  ? i.ctx.clearRect(i._.x, i._.y, i._.gw, i._.gh)
                  : i.ctx.fillRect(i._.x, i._.y, i._.gw, i._.gh);
          }
        },
      }),
      (_tpt.R ??= {}),
      (_tpt.R.slide = _tpt.extend
        ? _tpt.extend(_tpt.R.slide, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F = SR7.F || {}),
      void 0 !== SR7.F.initCarousel)
    )
      return;
    SR7.F.initCarousel = function (s, i) {
      var a = SR7.M[s];
      if ("carousel" === a.settings.type) {
        void 0 === a.c.carousel && (a.c.carousel = {});
        var r = a.c.carousel;
        r.slides = [];
        for (var o = 0; o < a.len; o++)
          r.slides.push(a.c.slides[a.slideOrder[o]]);
        var l = SR7.F.setCarouselSlideDims(s),
          n = {
            startIndex: i,
            mID: s,
            slides: r.slides,
            trigger: a.c.module,
            wrap: a.c.carousel,
            width: l.width,
            height: l.height,
            syncO: !0,
            length: SR7.slideShow.getLen(s),
            slideChange: function (e) {
              SR7.F.requestSlideFocus(s, a.slideOrder[e]);
            },
            snappingTo: function (e) {
              a.c.nav?.thumbs?.srcr &&
                a.c.nav.thumbs.srcr.goTo(
                  a.c.nav.thumbs.srcr.getRealIndex(
                    a.c.nav.thumbs.srcr.wrapIndex(e)
                  )
                ),
                a.c.nav?.tabs?.srcr &&
                  a.c.nav.tabs.srcr.goTo(
                    a.c.nav.tabs.srcr.getRealIndex(
                      a.c.nav.tabs.srcr.wrapIndex(e)
                    )
                  );
            },
            slideVisible: function (e, t) {
              var i = r.slides[e].dataset.key;
              (a.slides[i].slide.visible = !0),
                t && a.checkCarouselDone && SR7.F.redrawBG(s, i);
            },
            slideHidden: function (e) {
              var t = r.slides[e].dataset.key;
              a.slides[t].slide.visible = !1;
            },
            onInteract: function () {
              SR7.slideShow.pause(s);
            },
            onIdle: function () {
              SR7.M[s]?.slideShow?.sOH || SR7.slideShow.resume(s);
            },
            exclude: ["SR7-THUMBS", "SR7-TABS", "SR7-SCRUBBER"],
            callRebuild: function (e, t) {
              !a.c.nav?.scrubber?.srScrubber?.rebuild ||
                a.c.nav.scrubber.srScrubber.dragging ||
                a.settings.carousel.justify ||
                a.c.nav.scrubber.srScrubber.rebuild({ p: e, targetIndex: t });
            },
          };
        "mousedrag" === a.settings.mod.t &&
          ((n.mouseDrag = !0),
          (n.processMod = function () {
            for (var e in a.slideOrder)
              a.slides[a.slideOrder[e]].slide.visible &&
                SR7.F.modify.pOS(s, "mouse", void 0, a.slideOrder[e]);
          })),
          (("false" == String(a.settings.nav?.s?.mobC) && _tpt.is_mobile) ||
            ("false" == String(a.settings.nav?.s?.deskC) && !_tpt.is_mobile)) &&
            (n.ignoreDrag = !0),
          (n = e(
            _tpt.extend(n, a.settings.carousel, {
              length: SR7.slideShow.getLen(s),
            })
          )),
          (r.src = new t(n)),
          _tpt.resizeObserver.observe(
            (e) => {
              SR7.F.rebuildCarousel(e);
            },
            19,
            s
          );
      }
    };
    let e = (e) => (
      (e.minS = parseFloat(e.minS ?? 100) / 100),
      (e.maxR = parseFloat(e.maxR ?? 0)),
      (e.maxO = parseFloat(e.maxO) / 100),
      (e.ease = e.ease.replace(".inOut", ".out").replace(".in", ".out")),
      (e.dur = Math.min(parseInt(e.dur ?? 800), e.length) / 1e3),
      e
    );
    function t(e) {
      (this.proxy = document.createElement("div")),
        (this.follower = document.createElement("div")),
        (this.slides = e.slides),
        (this.ignoreDrag = e.ignoreDrag),
        (this.arr = []),
        (this.s = e),
        (this.len = e.slides.length),
        (this.last = this.len - 1),
        (this.lerp = 0.1),
        (this.pX = this.lpX = this.pY = this.lpY = 0),
        this.setDefaults(),
        this.setType(),
        this.lastMouseEvent;
      var t = this;
      !0 !== this.ignoreDrag &&
        (this.draggable = _tpt.draggable.create(this.proxy, {
          trigger: e.trigger,
          type: "h" == this.type ? "x" : "y",
          inertia: !0,
          cursor: "grab",
          activeCursor: "grabbing",
          throwResistance: this.s.snap ? 8e3 : 500,
          edgeResistance: 0.8,
          dragClickables: !1,
          clickableTest: (e) => {
            if ("true" == String(e?.dataset?.clickable)) return !0;
          },
          onPress: function (e) {
            t.lastMouseEvent = "press";
            if (((t.onDragDone = !1), t.s.exclude))
              for (var s = 0; s < t.s.exclude.length; s++)
                _tpt.closestNode(e.target, t.s.exclude[s]) && this.endDrag();
            _tpt.gsap.to(t, { lerp: 0.1 }), t.s.onInteract && t.s.onInteract();
          },
          onClick: function (e) {
            if (
              ((t.lastMouseEvent = "click"),
              _tpt.is_mobile &&
                ("SR7-TABS" == this.vars.trigger.tagName ||
                  "SR7-THUMBS" == this.vars.trigger.tagName))
            )
              for (var s = e.target; s && s !== document; ) {
                if ("SR7-TAB" === s.tagName || "SR7-THUMB" === s.tagName) {
                  s.click();
                  break;
                }
                s = s.parentNode;
              }
          },
          onDragStart: function () {
            (t.lpX = t.pX = this.pointerX),
              (t.lpY = t.pY = this.pointerY),
              (t.direction = this.getDirection()),
              t.tick || (t.tick = window.requestAnimationFrame(t.lerpHandler)),
              (t.dragging = !0),
              (t.s.lastDirection = this.getDirection()),
              (t.s.realDragging = !0),
              (t.s.dragTime = new Date().getTime()),
              (t.beforeDragFocused = t.focused);
          },
          onDragEnd: function () {
            (t.s.realDragging = !1),
              (t.s.dragTimeDiff = new Date().getTime() - t.s.dragTime);
          },
          onDrag: function (e) {
            if (((t.lastMouseEvent = "drag"), 0 === e.pressure))
              return t.draggable.endDrag();
            (t.onDragDone = !0),
              (t.pX = this.pointerX),
              (t.pY = this.pointerY),
              (t.s.dragTimeDiff = new Date().getTime() - t.s.dragTime),
              t.s.lastDirection !== this.getDirection() &&
                (t.s.directionChanged = !0),
              (t.s.lastDirection = this.getDirection()),
              SR7.A?.mousetrap &&
                (SR7.A.mousetrap.processOnSlide(
                  t.s.trigger.id,
                  { type: "dragmove", clientX: t.pX, clientY: t.pY },
                  !0
                ),
                SR7.A.mousetrap.processOnLayer(t.s.trigger.id, {
                  type: "dragmove",
                  clientX: t.pX,
                  clientY: t.pY,
                }));
          },
          onRelease: function (e) {
            !t.onDragDone && t.s.onIdle && t.s.onIdle();
          },
          snap: {
            [this.tr]: (e) => {
              let s = t.s.trigger.id;
              return (
                (!this.forceScroll || !SR7.M[s]) && this.snap.bind(this)(e)
              );
            },
          },
          zIndexBoost: !1,
          allowContextMenu: !0,
        })[0]),
        _tpt.gsap.set([this.proxy, this.follower], { [this.tr]: "+=0" }),
        (this.lerpHandler = this.updateSlides.bind(this)),
        (this.tick = window.requestAnimationFrame(t.lerpHandler)),
        this.rebuild({ targetIndex: e.startIndex }),
        delete e.startIndex;
    }
    (SR7.F.hideCarouselSlides = function (e) {
      const t = SR7.M[e];
      for (var s = 0; s < t.len; s++) {
        let e = t.slideOrder[s];
        _tpt.gsap.set(t.c.slides[e], { opacity: 0 });
      }
    }),
      (SR7.F.showCarouselSlide = function (e, t) {
        const s = SR7.M[e];
        for (var i = 0; i < s.len; i++) {
          let e = s.c.carousel.src.arr[i],
            a = e.elem.dataset.key;
          a === t &&
            requestAnimationFrame(function () {
              _tpt.gsap.to(e, {
                syncedO: 1,
                duration: 1,
                onUpdate: function (e, t) {
                  _tpt.gsap.set(s.c.slides[e], {
                    opacity:
                      void 0 === t.opacity
                        ? t.syncedO
                        : Math.min(t.syncedO, t.opacity),
                  });
                },
                onUpdateParams: [a, e],
              });
            });
        }
      }),
      (SR7.F.rebuildCarousel = function (e, t = !0) {
        var s = SR7.M[e];
        if (s?.c?.carousel?.src) {
          var i = s.c.carousel.src.s,
            a = SR7.F.setCarouselSlideDims(e);
          (i.width = a.width), (i.height = a.height);
          var r = s.dims.module.w,
            o = s.dims.content.h;
          i.justify ||
            ("h" === i.type &&
              (r = Math.min(
                r,
                i.width * i.maxV + i.space * Math.max(i.maxV - 2, 0)
              )),
            "v" === i.type &&
              (o = Math.min(
                o,
                i.height * i.maxV + i.space * Math.max(i.maxV - 2, 0)
              ))),
            (i.wrapWidth = r),
            (i.wrapHeight = o),
            _tpt.gsap.set(s.c.carousel, {
              width: r,
              height: o,
              left:
                "center" === i.align
                  ? (s.dims.module.w - r) / 2 -
                    ("left" != (s.dims.outNav?.align ?? "left") ||
                    s.settings.size.fullWidth
                      ? 0
                      : (s.dims.outNav?.w ?? 0) / 2)
                  : "end" === i.align
                  ? s.dims.module.w - r
                  : 0,
              top:
                "center" === i.align
                  ? (s.dims.content.h - o) / 2
                  : "end" === i.align
                  ? s.dims.content.h - o
                  : 0,
            }),
            s.c.carousel.src.rebuild();
        }
        if (t)
          for (var l in s.slides)
            s.slides[l].slide.visible && SR7.F.redrawBG(e, l);
      }),
      (SR7.F.carSlideChange = function (e, t) {
        var s = SR7.M[e];
        "carousel" === s.settings.type &&
          void 0 !== s.c.carousel &&
          s.c.carousel.src.goTo(s.next.index);
      }),
      (SR7.F.setCarouselSlideDims = (e) => {
        var t = SR7.M[e],
          s = [],
          i = [];
        if (t.settings.carousel.justify)
          for (var a in t.slides)
            t.slides[a].slide.global ||
              (s.push(
                t.settings.carousel.jMWidth
                  ? Math.min(t.dims.CFC[a].w, t.dims.module.w)
                  : t.dims.CFC[a].w
              ),
              i.push(
                t.settings.carousel.jMWidth
                  ? Math.min(t.dims.CFC[a].h, t.dims.content.h)
                  : t.dims.CFC[a].h
              ));
        return {
          width: t.settings.carousel.justify
            ? s
            : t.settings.carousel.stretch
            ? t.dims.module.w
            : t.dims.CFC.w,
          height: t.settings.carousel.justify
            ? i
            : "v" === t.settings.carousel.type
            ? t.dims.CFC.ch
            : t.dims.content.h,
        };
      }),
      (window.srCarousel = t),
      (t.prototype.setDefaults = function () {
        var e = this.s;
        (this.s.wrap = this.s.wrap ?? this.s.trigger),
          (this.s.trigger = this.s.trigger ?? this.s.wrap),
          void 0 === this.wrapWPreset &&
            (this.wrapWPreset = void 0 !== e.wrapWidth),
          void 0 === this.wrapHPreset &&
            (this.wrapHPreset = void 0 !== e.wrapHeight),
          (this.s.wrapWidth = this.wrapWPreset
            ? e.wrapWidth
            : this.s.wrap.offsetWidth),
          (this.s.wrapHeight = this.wrapHPreset
            ? e.wrapHeight
            : this.s.wrap.offsetHeight),
          (this.s.type = this.type = e.type ?? "h"),
          (this.s.align = this.s.sightSnap ? "left" : this.s.align ?? "left"),
          (this.s.maxV = Math.max(
            "3d" == this.s.spin ? 3 : 1,
            parseInt(this.s.maxV ?? 3)
          )),
          (this.s.justify = this.s.justify ?? !1),
          (this.s.minS = this.s.scale ? this.s.minS ?? 1 : 1),
          (this.s.vScale = this.s.vScale ?? !1),
          (this.s.oScale = this.s.oScale ?? !1),
          (this.s.space = parseFloat(this.s.space ?? 0)),
          (this.s.maxR = this.s.rotation ? this.s.maxR ?? 0 : 0),
          (this.s.varR = this.s.varR ?? !1),
          (this.s.maxO = this.s.opacity
            ? 1 == this.s.maxV && 1 !== this.s.maxO
              ? 0
              : this.s.opacity
              ? this.s.maxO ?? 1
              : 1
            : 1),
          (this.s.varO = this.s.varO ?? !1),
          (this.s.spin = this.s.spin ?? "off"),
          (this.s.spinA = parseInt(this.s.spinA ?? 0)),
          (this.s.wrapPerspective = this.s.wrapPerspective ?? 1200),
          (this.s.snap = this.s.snap ?? !0),
          (this.s.infinity = this.s.infinity ?? !0),
          (this.s.skewX = parseFloat(this.s.skewX ?? 0)),
          (this.s.skewY = parseFloat(this.s.skewY ?? 0)),
          (this.s.dur = this.s.dur ?? 0.8),
          this.s[this.dim] && this.s.space < -this.s[this.dim]
            ? (this.space = 0.8 * this.s.space)
            : (this.space = this.s.space),
          (this.s.align =
            this.s.align && "center" !== this.s.align
              ? "left" === this.s.align ||
                "top" === this.s.align ||
                "start" === this.s.align
                ? "start"
                : "end"
              : "center"),
          !0 !== this.s.justify &&
            this.s.maxV > this.len &&
            (this.s.maxV = this.len % 2 ? this.len : this.len + 1);
      }),
      (t.prototype.setType = function (e) {
        void 0 === e && (e = this.type),
          "h" === e
            ? ((this.tr = "x"),
              (this.dim = "width"),
              (this.wrapDim = "wrapWidth"))
            : ((this.tr = "y"),
              (this.dim = "height"),
              (this.wrapDim = "wrapHeight"));
      }),
      (t.prototype.rebuild = function (e = {}) {
        var t,
          s = e.p ?? 0;
        if (
          (this.setDefaults(),
          e.type && ((this.type = type), this.setType()),
          this.draggable &&
            void 0 !== this.totalWidth &&
            (this.totalWidth > this.s[this.wrapDim]
              ? this.draggable.enable()
              : this.draggable.disable()),
          _tpt.gsap.killTweensOf([this.proxy, this.follower], this.tr),
          (void 0 !== this.closest && void 0 === e.targetIndex) ||
            (this.closest = this.focused = e.targetIndex ?? 0),
          (this.lastFocused = this.focused),
          "center" === this.s.align
            ? (this.offset =
                (this.s[this.wrapDim] -
                  (void 0 === this.s[this.dim]
                    ? this.slides[0][
                        "h" === this.type ? "offsetWidth" : "offsetHeight"
                      ]
                    : "object" == typeof this.s[this.dim]
                    ? this.s[this.dim][0]
                    : this.s[this.dim])) /
                2)
            : "end" === this.s.align
            ? (this.offset =
                this.s[this.wrapDim] -
                (void 0 === this.s[this.dim]
                  ? this.slides[0][
                      "h" === this.type ? "offsetWidth" : "offsetHeight"
                    ]
                  : "object" == typeof this.s[this.dim]
                  ? this.s[this.dim][0]
                  : this.s[this.dim]))
            : (this.offset = 0),
          this.built)
        ) {
          for (r = 0; r < this.len; r++)
            for (var i = 0; i < this.len; i++)
              if (this.slides[r] === this.arr[i].elem) {
                var a = this.arr[r];
                (this.arr[r] = this.arr[i]), (this.arr[i] = a);
              }
        } else
          for (var r = 0; r < this.len; r++)
            this.arr.push({
              elem: this.slides[r],
              index: 1,
              syncedO: this.s.syncO ? 0 : void 0,
            });
        if ((this.positionSlides(this.focused, s), "off" !== this.s.spin)) {
          var o = this.arr[0][this.dim] / 2;
          this.s.spinA = Math.max(
            Math.min(this.s.spinA, 360 / this.len),
            -360 / this.len
          );
          var l = o / Math.sin(((this.s.spinA / 2) * Math.PI) / 180);
          (this.spinR =
            (Math.sqrt(l * l - o * o) + this.space) * Math.sign(this.s.spinA)),
            "2d" === this.s.spin && "h" === this.s.type
              ? (this.spinR += (this.s.spinA <= 0 ? 0 : 1) * this.s.wrapHeight)
              : "2d" === this.s.spin &&
                (this.spinR += (this.s.spinA <= 0 ? 0 : 1) * this.s.wrapWidth);
        }
        ((0 === this.s.maxR && "3d" !== this.s.spin) ||
          _tpt.gsap.set(this.s.slides[0].parentNode, {
            perspective: this.s.wrapPerspective,
          }),
        this.s.infinity) ||
          ("center" === this.s.align
            ? (t = (this.s[this.wrapDim] - this.arr[this.last][this.dim]) / 2)
            : "end" === this.s.align &&
              (t = this.s[this.wrapDim] - this.arr[this.last][this.dim]),
          this.s.sightSnap
            ? (this.minTr = this.s[this.wrapDim] - this.totalWidth + this.space)
            : "start" === this.s.align
            ? (this.minTr = this.arr[this.last][this.dim] - this.totalWidth)
            : (this.minTr =
                this.s[this.wrapDim] -
                this.totalWidth -
                ("end" === this.s.align ? 0 : t)),
          void 0 === s &&
            (this.draggable.applyBounds({
              minX: this.minTr >= 0 ? this.minTr : 0,
              maxX: this.minTr >= 0 ? this.s[this.wrapDim] : 0,
            }),
            this.draggable.update()),
          this.minTr > 0
            ? _tpt.gsap.set([this.proxy, this.follower], {
                [this.tr]: this.proxyShift,
              })
            : this.s.sightSnap &&
              (this.positionSlides(0, s),
              _tpt.gsap.set([this.proxy, this.follower], { [this.tr]: 0 })));
        this.s.sightSnap ||
          _tpt.gsap.set([this.proxy, this.follower], {
            [this.tr]: -this.proxyShift,
          }),
          this.s.bR &&
            _tpt.gsap.set(this.s.slides, {
              borderRadius: this.s.bR,
              overflow: "hidden",
            }),
          (this.built = !0),
          this.setRange(),
          this.s.infinity && this.swapSlides(),
          this.getClosest(),
          this.updateSlides();
      }),
      (t.prototype.positionSlides = function (e, t) {
        var s = (this.totalWidth = this.offset),
          i = (t ?? 0) * (this.arr[e]?.width ?? 0);
        s += i;
        for (var a = e; a < this.len; a++)
          for (var r = 0; r < this.len; r++)
            this.slides[a] === this.arr[r].elem &&
              ((this.arr[r][this.dim] =
                void 0 === this.s[this.dim]
                  ? "h" === this.s.type
                    ? this.slides[a].offsetWidth
                    : this.slides[a].offsetHeight
                  : "object" == typeof this.s[this.dim]
                  ? this.s[this.dim][a]
                  : this.s[this.dim]),
              _tpt.gsap.set(this.slides[a], {
                [this.tr]: this.totalWidth,
                position: "absolute",
                left: 0,
                top: 0,
                x: 0,
                y: 0,
              }),
              (this.arr[r].pos = this.totalWidth + i),
              (this.arr[r][this.tr] = this.totalWidth + i),
              _tpt.gsap.set(this.arr[r].elem, {
                [this.tr]: this.totalWidth + i,
              }),
              (this.totalWidth +=
                this.arr[r][this.dim] + (r === this.last ? 0 : this.space)));
        this.proxyShift = 0;
        for (a = e - 1; a >= 0; a--)
          for (r = 0; r < this.len; r++)
            this.slides[a] === this.arr[r].elem &&
              (_tpt.gsap.set(this.slides[a], {
                [this.tr]: s,
                position: "absolute",
                left: 0,
                top: 0,
                x: 0,
                y: 0,
              }),
              (this.arr[r][this.dim] =
                void 0 === this.s[this.dim]
                  ? "h" === this.s.type
                    ? this.slides[a].offsetWidth
                    : this.slides[a].offsetHeight
                  : "object" == typeof this.s[this.dim]
                  ? this.s[this.dim][a]
                  : this.s[this.dim]),
              (s -= this.arr[r][this.dim] + this.space),
              (this.arr[r].pos = s),
              (this.arr[r][this.tr] = s),
              _tpt.gsap.set(this.arr[r].elem, { [this.tr]: s }),
              (this.totalWidth += this.arr[r][this.dim] + this.space),
              (this.proxyShift += this.arr[r][this.dim] + this.space));
      }),
      (t.prototype.updateSlides = function () {
        this.tick = window.requestAnimationFrame(this.lerpHandler);
        var e = parseFloat(this.proxy._gsap[this.tr]),
          t = parseFloat(this.follower._gsap[this.tr]),
          s = t + (e - t) * this.lerp,
          i = s - t;
        _tpt.gsap.set(this.follower, { [this.tr]: s }),
          this.s.mouseDrag &&
            (this.s.realDragging
              ? (this.lpX += (this.pX - this.lpX) * this.lerp)
              : (this.lpX = 2 * (t - s)),
            (this.lpY += (this.pY - this.lpY) * this.lerp),
            this.s.processMod && this.s.processMod()),
          !this.dragging &&
            (!this.tween || !this.tween.isActive()) &&
            !this.waitTweenInit &&
            Math.abs(t - e) < 0.03 &&
            Math.abs(i) < 0.03 &&
            ((t = e),
            _tpt.gsap.set(this.follower, { [this.tr]: e }),
            (i = 0),
            (this.tick = window.cancelAnimationFrame(this.tick))),
          (this.dx = i);
        for (var a = 0; a < this.arr.length; a++)
          (this.arr[a][this.tr] += i),
            _tpt.gsap.set(this.arr[a].elem, {
              [this.tr]: this.arr[a][this.tr],
            });
        0 !== this.s.skewX &&
          _tpt.gsap.set(this.s.slides, {
            skewX: this.s.skewX * Math.max(-1, Math.min(1, i / 100)),
          }),
          0 !== this.s.skewY &&
            _tpt.gsap.set(this.s.slides, {
              skewY: this.s.skewY * Math.max(-1, Math.min(1, i / 100)),
            }),
          this.getClosest(),
          this.s.infinity && this.swapSlides(),
          this.applyDE();
      }),
      (t.prototype.applyDE = function () {
        (this.lastSlideProgress ??= 1), (this.tempAlign ??= this.s.align);
        let e = this.offset;
        "v" !== this.s.type ||
          this.s.infinity ||
          this.s.justify ||
          (e =
            this.offset +
            (this.s[this.wrapDim] - this.s[this.dim] - this.offset) *
              (1 - this.lastSlideProgress));
        for (var t = 0; t < this.len; t++) {
          var s = {},
            i = parseFloat(this.arr[t][this.tr]) - e,
            a = (this.arr[t].sign = 0 === Math.sign(i) ? 1 : Math.sign(i));
          this.arr[t].p = Math.abs(i) / (this.arr[t][this.dim] + this.space);
          var r = (this.arr[t].ap = this.arr[t].p);
          "v" !== this.s.type ||
            this.s.infinity ||
            t !== this.last ||
            (r <= ("left" === this.dir ? 0.9 : 0.1) && !this.vertAlignBottom
              ? (tpGS.gsap.to(this, { lastSlideProgress: 0, duration: 0.2 }),
                (this.vertAlignDefault = !1),
                (this.vertAlignBottom = !0),
                (this.tempAlign = "end"),
                this.setRange("end"))
              : r > ("left" === this.dir ? 0.9 : 0.1) &&
                !this.vertAlignDefault &&
                (tpGS.gsap.to(this, { lastSlideProgress: 1, duration: 0.2 }),
                (this.vertAlignDefault = !0),
                (this.vertAlignBottom = !1),
                (this.tempAlign = this.s.align),
                this.setRange(this.s.align)));
          var o = (this.arr[t].vp =
            (this.arr[t].ap / Math.ceil(this.pDiv)) *
            ("center" === this.tempAlign
              ? 1
              : "start" === this.tempAlign
              ? a
              : -a));
          if ("off" !== this.s.spin) {
            if (null == this.tr) continue;
            (s[this.tr] = e),
              "2d" === this.s.spin
                ? ((s.rotation =
                    this.s.spinA * r * ("h" === this.s.type ? a : -a)),
                  "h" === this.s.type
                    ? (s.transformOrigin = "center " + this.spinR + "px 0")
                    : (s.transformOrigin = this.spinR + "px center 0"))
                : ("h" === this.s.type
                    ? (s.rotationY = this.s.spinA * r * -a)
                    : (s.rotationX = this.s.spinA * r * a),
                  (s.transformOrigin = "center center " + this.spinR + "px"));
          } else if (0 === this.s.minS || this.s.justify) {
            if (null == this.tr) continue;
            s[this.tr] = this.arr[t][this.tr];
          } else {
            r = Math.min(1, r);
            var l = 1 - (this.s.vScale ? o : r) * (1 - this.s.minS);
            l = Math.max(0, l);
            var n = this.s.oScale
              ? ((this.arr[t].sign *
                  (this.arr[t][this.dim] +
                    this.space -
                    (this.arr[t][this.dim] + this.space) * l)) /
                  2) *
                this.arr[t].ap
              : ((this.arr[t].sign *
                  (this.arr[t][this.dim] - this.arr[t][this.dim] * l)) /
                  2) *
                this.arr[t].ap;
            (s[this.tr] = this.arr[t][this.tr] - n), (s.scale = l);
          }
          this.s.syncO || (s.opacity = 1),
            this.s.justify ||
              ((r = Math.min(1, r)),
              0 !== this.s.maxR &&
                (s.rotationY = this.s.maxR * (this.s.varR ? o : r) * -a),
              (s.opacity = 1 + (this.s.maxO - 1) * (this.s.varO ? o : r)),
              o > this.edgeRatio
                ? (s.opacity = this.oRange(o))
                : o < 0
                ? (s.opacity = this.oRangeMin(o))
                : 1 === this.s.maxO && (s.opacity = 1)),
            (this.arr[t].opacity = s.opacity),
            this.s.syncO &&
              s.opacity > this.arr[t].syncedO &&
              (s.opacity = this.arr[t].syncedO),
            s.opacity <= 0
              ? (this.s.slideHidden &&
                  (void 0 === this.arr[t].visible || this.arr[t].visible) &&
                  this.s.slideHidden(this.getRealIndex(t)),
                (this.arr[t].visible = !1))
              : (!this.s.slideVisible ||
                  (!1 !== this.arr[t].visible &&
                    void 0 !== this.arr[t].visible) ||
                  this.s.slideVisible(
                    this.getRealIndex(t),
                    void 0 !== this.arr[t].visible
                  ),
                (this.arr[t].visible = !0)),
            (s.zIndex = 100 - 5 * Math.round(this.arr[t].ap)),
            t === this.closest &&
              this.s.callRebuild &&
              this.s.callRebuild(
                this.arr[t].p * this.arr[t].sign,
                this.getRealIndex(t)
              ),
            this.s.ignoreOpacity && delete s.opacity,
            _tpt.gsap.set(this.arr[t].elem, s);
        }
      }),
      (t.prototype.getRealIndex = function (e) {
        for (var t = 0; t < this.len; t++)
          if (this.slides[t] === this.arr[e].elem) return t;
      }),
      (t.prototype.getArrIndex = function (e) {
        for (var t = 0; t < this.len; t++)
          if (this.slides[e] === this.arr[t].elem) return t;
      }),
      (t.prototype.setRange = function (e) {
        (e ??= this.s.align),
          (this.pDiv = "center" === e ? this.s.maxV / 2 : this.s.maxV),
          (this.edgeRatio =
            Math.floor(this.pDiv - ("center" === e ? 0 : 1)) /
            Math.ceil(this.pDiv)),
          1 === this.s.maxV && (this.edgeRatio = 1),
          (this.oEdge =
            1 === this.s.maxO
              ? 1
              : this.s.varO
              ? 1 + (this.s.maxO - 1) * this.edgeRatio
              : this.s.maxO),
          (this.oEdge = 1 === this.s.maxV ? this.s.maxO : this.oEdge),
          (this.oRange =
            this.s.maxV > 1
              ? _tpt.gsap.utils.mapRange(this.edgeRatio, 1, this.oEdge, 0)
              : _tpt.gsap.utils.mapRange(1, 1.1, this.oEdge, 0)),
          (this.oRangeMin = _tpt.gsap.utils.mapRange(
            -1 / this.s.maxV,
            -1.1 / this.s.maxV,
            1,
            0
          )),
          (this.wrapIndex = this.s.infinity
            ? _tpt.gsap.utils.wrap(0, this.len)
            : _tpt.gsap.utils.clamp(0, this.len - 1));
      }),
      (t.prototype.swapSlides = function () {
        for (var e, t = !0; t; ) {
          let i =
              this.arr[0][this.tr] >= 0 ||
              (void 0 !== this.arr[0].p &&
                this.arr[0].p <= this.s.maxV / 2 &&
                !(this.arr[this.last].p <= this.s.maxV / 2) &&
                parseFloat(this.arr[this.last][this.tr]) >=
                  this.s[this.wrapDim]),
            a =
              this.arr[this.last][this.tr] + this.arr[this.last][this.dim] <=
                this.s[this.wrapDim] ||
              (void 0 !== this.arr[this.last].p &&
                this.arr[this.last].p <= this.s.maxV / 2 &&
                !(this.arr[0].p <= this.s.maxV / 2) &&
                parseFloat(this.arr[0][this.tr]) + this.arr[0][this.dim] <= 0);
          if (i && !a) {
            this.arr[this.last][this.tr] =
              -this.arr[this.last][this.dim] +
              this.arr[0][this.tr] -
              this.space;
            var s = this.arr.pop();
            this.arr.unshift(s),
              s === e && (t = !1),
              (e = s),
              _tpt.gsap.set(this.arr[0].elem, {
                [this.tr]: this.arr[0][this.tr],
              });
          } else if (a && !i) {
            this.arr[0][this.tr] =
              this.arr[this.last][this.tr] +
              this.arr[this.last][this.dim] +
              this.space;
            s = this.arr.shift();
            this.arr.push(s),
              s === e && (t = !1),
              (e = s),
              _tpt.gsap.set(this.arr[this.arr.length - 1].elem, {
                [this.tr]: this.arr[this.arr.length - 1][this.tr],
              });
          } else t = !1;
        }
      }),
      (t.prototype.snap = function (e) {
        _tpt.gsap.killTweensOf([this.proxy, this.follower], this.tr),
          this.tween && this.tween.pause && this.tween.pause(),
          Math.abs(t) < 3 && (t = 0);
        var t =
          "v" === this.s.type
            ? e - this.draggable.endY
            : e - this.draggable.endX;
        this.s.snap && (e = this.newPos(e)),
          (t = this.draggable[this.tr] - e),
          this.s.infinity || "v" !== this.s.type
            ? this.s.infinity ||
              (e >= 0 ? (e = 0) : e <= this.minTr && (e = this.minTr))
            : e <= this.s[this.wrapDim] - this.totalWidth
            ? (e = this.s[this.wrapDim] - this.totalWidth)
            : e >= 0 && (e = 0);
        var s = this;
        if (this.s.overshoot) {
          _tpt.gsap.to(this, { duration: this.s.snap ? 0.3 : 0.5, lerp: 0.8 });
          var i =
              Math.min(
                0 === this.draggable.deltaX
                  ? Math.abs(t) / 20
                  : Math.abs(this.draggable.deltaX) / 2,
                this.s[this.wrapDim] / 4
              ) * Math.sign(t),
            a = Math.abs(i / 100);
          (a = Math.min(Math.max(a / 10, 0.6 * this.s.dur), this.s.dur)),
            (this.tween = _tpt.gsap.timeline({
              onComplete: function () {
                (s.dragging = !1),
                  s.s.onIdle && s.s.onIdle(),
                  s.waitingDragEnd &&
                    (s.s.slideChange && s.s.slideChange(s.focused),
                    (s.waitingDragEnd = !1)),
                  SR7.F.updateModuleDims(s.s.mID, !0);
              },
            })),
            this.tween
              .to(this.proxy, {
                [this.tr]: e - i,
                duration: a,
                ease: "power2.out",
              })
              .to(
                this.proxy,
                {
                  [this.tr]: e,
                  duration: Math.min(2 * a, 0.6),
                  ease: this.s.ease,
                },
                "overshoot"
              )
              .to(
                this,
                { duration: Math.min(2 * a, 0.6), lerp: 1 },
                "overshoot"
              );
        } else if (this.s.dragTimeDiff > 130 && !this.s.directionChanged) {
          let e = this.focused;
          if (this.focused == this.beforeDragFocused) {
            let t =
                "h" == this.s.type
                  ? this.draggable.startX - this.draggable.endX
                  : this.draggable.startY - this.draggable.endY,
              s = Math.abs(t) / this.arr[this.focused].width;
            if (Math.abs(s) > 0.1) {
              (e += this.dist < 0 ? 1 : -1),
                e > this.arr.length - 1 &&
                  (e = this.s.infinity ? 0 : this.arr.length - 1),
                e < 0 && (e = this.s.infinity ? this.arr.length - 1 : 0);
            }
          }
          (s.dragging = !1),
            s.goTo(e, !0, this.focused !== this.beforeDragFocused);
        } else
          (a = Math.abs(t / 100)),
            (a = Math.min(Math.max(a / 10, 0.6 * this.s.dur), this.s.dur)),
            this.tween && this.tween.kill && this.tween.kill(),
            (this.tween = _tpt.gsap.timeline({
              onComplete: function () {
                (s.dragging = !1),
                  s.s.onIdle && s.s.onIdle(),
                  s.waitingDragEnd &&
                    (s.s.slideChange && s.s.slideChange(s.focused),
                    (s.waitingDragEnd = !1)),
                  SR7.F.updateModuleDims(s.s.mID, !0);
              },
            })),
            this.tween.to(
              this.proxy,
              {
                [this.tr]: e,
                ease: this.s.ease,
                duration: a,
                onComplete: function () {
                  (s.dragging = !1), SR7.F.updateModuleDims(s.s.mID, !0);
                },
              },
              0
            ),
            this.tween.to(this, { lerp: 1, duration: a }, 0);
        return e;
      }),
      (t.prototype.goTo = function (e, t, s) {
        if (this.dragging && !0 !== t) return;
        this.lastRequestedIndex !== e &&
          _tpt.gsap.killTweensOf([this.proxy, this.follower], this.tr),
          (this.waitTweenInit = !0);
        let i = parseFloat(this.proxy._gsap[this.tr]),
          a = this;
        this.getClosest();
        var r = this.newPos(i, e, this.getDir(this.focused, e), void 0, s);
        s &&
          (r +=
            parseFloat(this.follower._gsap[this.tr]) -
            parseFloat(this.proxy._gsap[this.tr]));
        let o =
          this.s.dur +
          (this.steps >= 2 ? ((this.steps - 1) * this.s.dur) / 10 : 0);
        a.s.slideChange && a.s.slideChange(e),
          clearTimeout(this.tweenRequest),
          (this.tweenRequest = setTimeout(
            () => {
              (this.lastRequestedIndex = e),
                (this.tween = _tpt.gsap
                  .timeline({
                    onComplete: function () {
                      a.s.onIdle && a.s.onIdle(),
                        SR7.F.updateModuleDims(a.s.mID, !0);
                    },
                    onStart: function () {
                      a.waitTweenInit = !1;
                    },
                  })
                  .to(
                    this.proxy,
                    { [this.tr]: r, ease: this.s.ease, duration: o },
                    0
                  )
                  .to(this, { lerp: 1, duration: o }, 0)
                  .to(
                    {},
                    { duration: 0.3 * o, onComplete: function () {} },
                    0
                  )),
                this.tick ||
                  (this.tick = window.requestAnimationFrame(this.lerpHandler));
            },
            (this.s?.mID ? SR7.slideShow.getLen(this.s.mID) : 9e3) /
              (1e3 * this.s.dur) <
              1.2
              ? 0
              : 50
          ));
      }),
      (t.prototype.getDir = function (e, t) {
        var s = t - e,
          i = "right",
          a = 0,
          r = 0;
        if (this.s.infinity) {
          for (var o = e; o != t; ) (r += 1), (o = ++o >= this.len ? 0 : o);
          for (o = e; o != t; ) (a += 1), (o = --o < 0 ? this.last : o);
          i = r <= a ? "left" : "right";
        } else
          (i = t - e >= 0 ? "left" : "right"),
            (r = Math.abs(t - e)),
            0 === s && ((i = "right"), !0);
        return (this.steps = r <= a ? r : a), i;
      }),
      (t.prototype.newPos = function (e, t, s, i) {
        this.getClosest(),
          void 0 === s && (s = this.draggable.getDirection()),
          (s =
            "v" == this.s.type && s.includes("up")
              ? "left"
              : "v" == this.s.type && s.includes("down")
              ? "right"
              : s.includes("left")
              ? "left"
              : "right"),
          (this.dir = s);
        let a =
          parseFloat(this.follower._gsap[this.tr]) -
          parseFloat(this.arr[this.closest][this.tr]);
        if (
          (("center" !== this.s.align && "end" !== this.s.align) ||
            (a += this.offset),
          this.s.sightSnap && void 0 !== t)
        )
          return this.checkSightSnap(t);
        if (this.focused === t)
          return (
            parseFloat(this.proxy._gsap[this.tr]) -
            (this.arr[this.getArrIndex(t)][this.tr] - this.offset)
          );
        for (var r = this.closest, o = 0; !(++o > 100); ) {
          var l;
          if (
            ("right" === s
              ? ((l = this.wrapIndex(r)), r--)
              : (l = this.wrapIndex(r + 1)),
            (r = this.wrapIndex(r)),
            "press" !== this.lastMouseEvent &&
              ("center" === this.s.align
                ? (a +=
                    ((this.arr[r][this.dim] +
                      this.space +
                      this.arr[l][this.dim] +
                      this.space) /
                      2) *
                    ("left" === s ? -1 : 1))
                : "end" === this.s.align
                ? (a +=
                    (this.arr[l][this.dim] + this.space) *
                    ("left" === s ? -1 : 1))
                : (a +=
                    (this.arr[r][this.dim] + this.space) *
                    ("left" === s ? -1 : 1))),
            "left" === s && void 0 !== t && (r = this.wrapIndex(r + 1)),
            (void 0 === t &&
              (("left" === s && e > a) || ("right" === s && e < a))) ||
              (void 0 !== r && this.arr[r].elem === this.slides[t]))
          ) {
            this.s.snappingTo &&
              void 0 === t &&
              !0 !== i &&
              ("left" === s &&
                this.s.snappingTo(this.getRealIndex(this.wrapIndex(r + 1))),
              "right" === s &&
                this.s.snappingTo(this.getRealIndex(this.wrapIndex(l - 1))));
            break;
          }
          "left" === s && void 0 === t && r++;
        }
        return (
          (e = a),
          this.s.infinity ||
            "v" !== this.s.type ||
            (e <= this.s[this.wrapDim] - this.totalWidth &&
              (e = this.s[this.wrapDim] - this.totalWidth)),
          e
        );
      }),
      (t.prototype.checkSightSnap = function (e) {
        const t =
            parseFloat(this.follower._gsap[this.tr]) -
            this.arr[this.closest][this.tr],
          s = this.getArrIndex(e),
          i = this.wrapIndex(s - 1),
          a = this.wrapIndex(s + 1),
          r = this.arr[this.closest][this.tr],
          o =
            (this.arr[i][this.tr] + this.arr[i][this.dim]) /
              this.arr[i][this.dim] >=
            0.75,
          l =
            (this.s[this.wrapDim] -
              (this.arr[s][this.tr] + this.arr[a][this.dim])) /
              this.arr[a][this.dim] >=
            0.75,
          n = this.arr[this.wrapIndex(s)][this.tr],
          d = this.arr[i][this.dim],
          c = this.s[this.wrapDim];
        return (c - this.space) / d < 2 && !this.s.infinity
          ? 0 === s
            ? ((this.lastAlign = "left"), (this.lastTi = s), 0)
            : s == a ||
              (this.lastTi == s && "left" == this.lastAlign) ||
              this.lastFocused >= s
            ? ((this.lastAlign = "right"),
              (this.lastTi = s),
              c - (2 * d + this.space) - (i * this.space + i * d))
            : (this.lastTi == s && "right" == this.lastAlign) ||
              this.lastFocused < s
            ? ((this.lastAlign = "left"),
              (this.lastTi = s),
              0 - (s * this.space + s * d))
            : void 0
          : o && l
          ? t
          : o
          ? l
            ? t
            : t +
              c -
              (n +
                this.arr[this.wrapIndex(s)][this.dim] +
                (s !== a || a !== this.last || this.s.infinity
                  ? this.arr[a][this.dim] + this.space
                  : 0)) +
              r
          : t -
            n +
            (s !== i || 0 !== s || this.s.infinity ? this.space + d : 0) +
            r;
      }),
      (t.prototype.getClosest = function () {
        for (var e = 1 / 0, t = this, s = 0; s < this.arr.length; s++) {
          var i;
          (i =
            "center" === this.s.align
              ? (this.arr[s][this.tr] +
                  this.arr[s][this.dim] / 2 -
                  this.s[this.wrapDim] / 2) %
                this.totalWidth
              : "end" === this.s.align
              ? (this.arr[s][this.tr] +
                  this.arr[s][this.dim] -
                  this.s[this.wrapDim]) %
                this.totalWidth
              : this.arr[s][this.tr] % this.totalWidth),
            Math.abs(i) < Math.abs(e) &&
              ((e = i), (this.closest = s), (this.dist = i));
        }
        "center" === this.s.align
          ? (this.offset =
              (this.s[this.wrapDim] - this.arr[this.closest][this.dim]) / 2)
          : "end" === this.s.align &&
            (this.offset =
              this.s[this.wrapDim] - this.arr[this.closest][this.dim]),
          (this.lastFocused = this.focused);
        for (s = 0; s < this.len; s++)
          this.arr[this.closest].elem === this.s.slides[s] &&
            (this.focused = s);
        this.focused !== this.lastFocused &&
          ((this.waitingDragEnd = !0),
          this.s.slideChange &&
            this.dragging &&
            (this.scDelay && this.scDelay.pause && this.scDelay.pause(),
            (this.scDelay = _tpt.gsap.delayedCall(0.2, function () {
              (t.waitingDragEnd = !1), t.s.slideChange(t.focused);
            }))));
      }),
      (_tpt.R = _tpt.R || {}),
      (_tpt.R.carousel = _tpt.extend
        ? _tpt.extend(_tpt.R.carousel, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })(),
  (function () {
    "use strict";
    if (
      ((window.SR7 ??= {}),
      (window._tpt ??= {}),
      (SR7.F ??= {}),
      void 0 !== SR7.F.module)
    )
      return;
    document.addEventListener("sr.module.loaded", function (e) {
      SR7.F.prepareModule(e);
    }),
      (SR7.F.prepareModule = (e) =>
        new Promise(async (t, s) => {
          let i,
            a,
            r = e.id,
            o = SR7.M[r];
          try {
            a = "object" != typeof e.result ? JSON.parse(e.result) : e.result;
          } catch (e) {
            a =
              "object" != typeof e.result
                ? _tpt.fixResponse(e.result)
                : e.result;
          }
          null == a.settings && (o.migrate = !0);
          let l = ["defaults"];
          o.migrate &&
            ((a.slider_params.title = a.title),
            (a.slider_params.alias = a.alias),
            l.push("migration"),
            a.slider_params.codes?.javascript.includes("var snowsettings") &&
              ((a.slider_params.addOns ??= {}),
              (a.slider_params.addOns["revslider-snow-addon"] ??= {
                enable: !0,
              })),
            (l = [
              ...l,
              ...SR7.F.preLoadAddonsToMigrate(a.slider_params?.addOns ?? {}),
            ])),
            _tpt.checkResources(l).then(() => {
              if (
                (a?.slider_params && (a.slider_params.dbid = a.id),
                o.migrate &&
                  (SR7.migrate.collectNav(a.navs),
                  SR7.migrate.collectTransition(a.trans)),
                o.migrate &&
                  a?.slider_params &&
                  (a.slider_params = SR7.migrate.snowConvert(a.slider_params)),
                (o.settings = _tpt.extend(
                  o.settings,
                  SR7.D.moduleObj(r, a?.slider_params ?? a?.settings ?? {})
                )),
                void 0 !== o.cacheSize?.fullWidth &&
                  (o.settings.size.fullWidth = o.cacheSize.fullWidth),
                void 0 !== o.cacheSize?.fullHeight &&
                  (o.settings.size.fullHeight = o.cacheSize.fullHeight),
                o.settings.general?.fallbackURL &&
                  (_tpt.is_mobile ||
                    ("IE" === _tpt.browser &&
                      (-1 !== _tpt.browserVersion.indexOf("MSIE 8") ||
                        -1 !== _tpt.browserVersion.indexOf("MSIE 7")))))
              ) {
                let e = document.createElement("img");
                return (
                  (e.src = o.settings.general.fallbackURL),
                  (e.style.width = "100%"),
                  (e.style.height = "auto"),
                  void o.c.bgcanvas.appendChild(e)
                );
              }
              let s;
              e.onlyPrepare ||
                (SR7.preLoader.state(r) &&
                  SR7.preLoader.state(r, o.c.module)) ||
                SR7.preLoader.show(r, o.c.module),
                void 0 !== o.c?.module?.dataset?.source &&
                  ((o.settings.source ??= {}),
                  (o.settings.source.type = o.c.module.dataset.source),
                  (o.settings.source.sourceids = o.c.module.dataset.sourceids)),
                e.onlyPrepare ||
                  "carousel" != o.settings.type ||
                  null != o.c.carousel ||
                  ((o.c.carousel = document.createElement("sr7-carousel")),
                  o.c.content.appendChild(o.c.carousel)),
                (o.slides ??= {});
              let l = a?.slides ?? {},
                n = 1;
              for (i in l) {
                (s = o.migrate ? SR7.D.fixSR6IDs(l[i].id) : l[i].slide.id),
                  (o.slides[s] = _tpt.extend(
                    o.slides[s],
                    SR7.D.slideObj(r, o.migrate ? l[i] : l[i].slide, n++)
                  ));
                let e =
                  "default" == (o.slides[s]?.slide?.slideshow?.len ?? "default")
                    ? o.settings?.default?.len ?? 9e3
                    : o.slides[s]?.slide?.slideshow?.len ?? 9e3;
                (o.slides[s].layers = _tpt.extend(
                  o.slides[s].layers,
                  SR7.D.layerObjects({
                    dLEN: e,
                    id: r,
                    slide: l[i],
                    sid: s,
                    msource: o.settings.source?.type ?? "gallery",
                    snow:
                      o.migrate &&
                      null != a.static_slide &&
                      void 0 !== a.static_slide.id
                        ? void 0
                        : a.slider_params?.addOns?.["revslider-snow-addon"],
                  })
                )),
                  o.migrate &&
                    (o.slides[s].layers = SR7.migrate.fixParallax(
                      o.slides[s].layers,
                      a?.slider_params ?? a?.settings ?? {}
                    ));
              }
              for (s in (o.migrate &&
                null != a.static_slide &&
                void 0 !== a.static_slide.id &&
                ((s = SR7.D.fixSR6IDs(a.static_slide.id, !0)),
                (a.static_slide.global = !0),
                (o.slides[s] = _tpt.extend(
                  o.slides[s],
                  SR7.D.slideObj(r, a.static_slide)
                )),
                (o.slides[s].layers = _tpt.extend(
                  o.slides[s].layers,
                  SR7.D.layerObjects({
                    id: r,
                    slide: a.static_slide,
                    sid: s,
                    snow: a.slider_params?.addOns?.["revslider-snow-addon"],
                    msource: o.settings.source?.type ?? "gallery",
                  })
                )),
                o.migrate &&
                  (o.slides[s].layers = SR7.migrate.fixParallax(
                    o.slides[s].layers,
                    a?.slider_params ?? a?.settings ?? {}
                  ))),
              (o.staticDiffLayers = !1),
              o.slides))
                if (!o.staticDiffLayers && o.slides[s].slide.global)
                  for (let e in o.slides[s].layers)
                    (!o.staticDiffLayers ||
                      (_tpt.hop(o.slides[s].layers, e) &&
                        void 0 !== o.slides[s].layers[e].sZ &&
                        "default" !== o.slides[s].layers[e].sZ &&
                        o.slides[s].layers[e].sZ !== o.slides[s].slide.pos)) &&
                      (o.staticDiffLayers = !0);
              if (o.migrate) {
                let e = SR7.D.fixSR6IDs(a.static_slide?.id ?? void 0, !0);
                for (let t in l)
                  (s = SR7.D.fixSR6IDs(l[t].id)),
                    (o.slides[s].slide.actions = SR7.migrate.fixActions(
                      r,
                      s,
                      e
                    ));
                e &&
                  (o.slides[e].slide.actions = SR7.migrate.fixActions(r, e, e));
              }
              if (e.onlyPrepare) return void t();
              SR7.D.registerModuleFonts(r),
                _tpt.loadFonts(),
                o.c?.bgcanvas || _tpt.bgStyle(r),
                "forceTrue" == o.settings?.size?.overflow &&
                  o.c.module.classList.add("sr7-overflow-force"),
                (o.fHVCarousel =
                  o.settings.size.fullHeight &&
                  "carousel" == o.settings.type &&
                  "v" == o.settings.carousel.type);
              let d = [
                "slide",
                "layer",
                "draw",
                "animate",
                "modifiers",
                "srtools",
                "csslp",
                "carousel",
              ];
              (o.settings?.codes?.js ?? "").includes("jQuery") &&
                (console.info(
                  "%cDeprecation Notice:%cjQuery functions are deprecated and no longer supported in %cSlider Revolution 6.5+. \n%cPlease refer to our documentation for alternatives and further guidance: https://www.sliderrevolution.com/manual/",
                  "color: #ee4433; font-size: 12px; font-weight: bold;",
                  "color: #aaa; font-size: 12px; ",
                  "color: #ff9800; font-size: 12px;font-weight: bold;",
                  "color: #aaa; font-size: 12px; "
                ),
                _tpt.regResource({
                  id: "jQuery",
                  url: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                }),
                null == window.jQuery && d.push("jQuery")),
                o.useAsModal &&
                  !o.modalRegistered &&
                  (SR7.F.modal.register({
                    id: r,
                    alias: o.alias,
                    speed: parseInt(o.settings.modal?.sp ?? 1e3) / 1e3,
                    bg: o.settings.modal?.bg ?? "transpaent",
                    pS: o.settings.modal?.pS,
                    v: o.settings.modal?.v ?? "middle",
                    h: o.settings.modal?.h ?? "center",
                  }),
                  SR7.F.modal.underlay("show")),
                _tpt
                  .checkResources(d)
                  .then(() => {
                    o.migrate && SR7.migrate.orderGroups(o),
                      _tpt.injectCssJs(
                        o.settings.codes?.css ?? "",
                        o.settings.codes?.js ?? "",
                        o.c.module,
                        r + "_modulestyles"
                      ),
                      SR7.F.updateModuleDims(r, !1),
                      _tpt.resizeObserver.observe(
                        (e) => {
                          SR7.F.updateModuleDims(e, !0, !0);
                        },
                        19,
                        r
                      ),
                      _tpt.orientationObserver.observe(
                        (e) => {
                          o.c.bgcanvas &&
                            (o.c.bgcanvas.style.maxWidth = "100%"),
                            SR7.F.orientationChanged(e, 3);
                        },
                        400,
                        r
                      ),
                      o.settings.wClass?.length > 0 &&
                        o.c.module.parentNode.classList.add(o.settings.wClass),
                      _tpt.is_mobile &&
                        document.addEventListener(
                          "gestureend",
                          function () {
                            o.c.bgcanvas &&
                              (o.c.bgcanvas.style.maxWidth = "100%"),
                              SR7.F.orientationChanged(r, 3);
                          },
                          !1
                        ),
                      window.removeEventListener(
                        "resize",
                        o.earlyResizerFunction
                      ),
                      delete o.earlyResizerFunction,
                      _tpt
                        .checkResources(SR7.F.getRequiredResources(r))
                        .then(() => {
                          o.J &&
                            (o.J.trigger("revolution.slide.onloaded"),
                            o.J.trigger("sr.module.ready")),
                            _tpt.event.trigger("dom", "sr.module.ready", {
                              id: r,
                            }),
                            SR7.F.prepareSlides(r).then(() => {
                              let t;
                              if ("" !== window.location.hash) {
                                o.deepLinked = window.location.hash.replace(
                                  "#",
                                  ""
                                );
                                for (let e in o.slides)
                                  o.slides[e].slide?.attr?.deepLink ==
                                    o.deepLinked &&
                                    (t = o.navSlideOrder.indexOf(e));
                              } else
                                e?.slide && o.navSlideOrder.includes(e.slide)
                                  ? (t = o.navSlideOrder.indexOf(e.slide))
                                  : ((t =
                                      o.settings?.slideshow?.firstSlide ??
                                      void 0),
                                    (t =
                                      "auto" == t ? void 0 : parseInt(t) - 1));
                              SR7.M[r].settings.slideshow?.waitApi ||
                                SR7.F.runModule(r, t);
                            }),
                            o.earlyResizerFunction &&
                              (window.removeEventListener(
                                "resize",
                                o.earlyResizerFunction
                              ),
                              delete o.earlyResizerFunction);
                        });
                  })
                  .catch(function (e) {
                    throw e;
                  }),
                t();
            });
        })),
      (SR7.F.orientationChanged = (e, t) => {
        requestAnimationFrame(() => {
          (document.documentElement.scrollLeft = 0),
            (document.body.scrollLeft = 0),
            _tpt.getWinDim(),
            SR7.F.updateModuleDims(e, !0, !0, !0),
            SR7.F.reposLayers(e),
            --t > 0
              ? SR7.F.orientationChanged(e, t)
              : ((_tpt.screenHeightWithUrlBar = window.innerHeight),
                SR7.M[e].c.bgcanvas &&
                  (SR7.M[e].c.bgcanvas.style.maxWidth = "none"));
        });
      }),
      (SR7.F.runModule = (e, t) => {
        SR7.F.updateModuleDims(e, !0, !0),
          SR7.F.module.run(e, t),
          SR7.F.module.listeners.init(e),
          (SR7.M[e].c.module.observParams.toggleCall = SR7.F.module.toggle),
          SR7.F.initCarousel(e, t);
      }),
      (SR7.F.triggerSlideEvent = (e, t = "", s) => {
        let i = SR7.M[e];
        _tpt.event.trigger("dom", "sr.slide" + ("" !== t ? "." + t : ""), {
          id: e,
          current: i.current,
          next: i.next,
          previous: i.prev,
        }),
          _tpt.event.trigger(
            i.c.module,
            "sr.slide" + ("" !== t ? "." + t : ""),
            { id: e, current: i.current, next: i.next, previous: i.prev }
          );
      }),
      (SR7.F.triggerMediaEvent = (e, t) => {
        _tpt.event.trigger("dom", "sr.media." + t, {
          mediatype: e.type,
          player: e.player,
          options: e.options,
          layer: e.el,
          id: e.id,
          layerid: e.el.id,
          skey: e.skey,
          state: e.state,
        });
      }),
      (SR7.F.focusBlurCheck = (e, t) => {
        let s = SR7.M[t];
        "blur" == e
          ? s.settings.browser.freezeOnBlur &&
            SR7.M[t].states.inViewPort &&
            ((s.states ??= {}),
            (s.states.stateBeforeFL = s.slideShow?.state),
            "paused" !== s.slideShow?.state && SR7.F.module.pause(t, "blur"),
            _tpt.event.trigger("dom", "sr.slide.tabblured", { id: t }))
          : "focus" == e &&
            s.settings.browser.freezeOnBlur &&
            SR7.M[t].states.inViewPort &&
            ("paused" !== s.states?.stateBeforeFL &&
              SR7.F.module.resume(t, "focus"),
            (s.states ??= {}),
            (s.states.stateBeforeFL = s.slideShow?.state),
            _tpt.event.trigger("dom", "sr.slide.tabfocused", { id: t }));
      }),
      (SR7.F.triggerLayerEvent = async (e, t) => {
        let s = {
          id: e.id,
          eventtype: t,
          caller: e.caller,
          scene: e.animState?.scene ?? e.c.animState.scene,
          frame: e.animState?.frame ?? e.c.animState.frame,
          c: e.c,
          layer: e.c.el,
          layerid: e.c.el.id,
          layertype: e.layer?.type ?? "",
          layersettings: e.layer,
        };
        e.action && (s.action = e.action),
          e.ease && (s.ease = e.ease),
          e.start && (s.start = e.start),
          e.duration && (s.duration = e.duration),
          (e.c.lastEventCalled = t),
          _tpt.event.trigger("dom", "sr.layer.action", s),
          _tpt.event.trigger(SR7.M[e.id].c.module, "sr.layer.action", s);
      }),
      (SR7.F.preLoadAddonsToMigrate = (e) => {
        let t = [];
        if (void 0 !== e)
          for (let s in e)
            _tpt.hop(e, s) &&
              0 != e[s] &&
              "false" != ("" + e[s]?.enable ?? !1) &&
              ((s = s.replace("revslider-", "").replace("-addon", "")),
              void 0 !== SR7.E.resources[s] && t.push(s),
              void 0 !== SR7.E.resources["css" + s] && t.push("css" + s));
        return t;
      }),
      (SR7.F.initAddons = (e) => {
        const t = [],
          s = SR7.M[e];
        if (null != s.settings.addOns) {
          for (let i in s.settings.addOns)
            if (_tpt.hop(s.settings.addOns, i) && SR7.A?.[i]?.init) {
              let s = SR7.A[i].init(e);
              Array.isArray(s) ? t.push(...s) : s || t.push(s);
            }
          return t;
        }
      }),
      (SR7.F.module = {
        get: (e) => {
          let t,
            s = document.getElementsByTagName("sr7-module");
          for (var i in s)
            ("" + (s[i].dataset?.id ?? "") != e &&
              "" + (s[i].dataset?.alias ?? "") != e &&
              "" + s[i].id != e) ||
              (t = s[i]);
          return t;
        },
        getNextSuffx: (e) => {
          let t = 1,
            s = SR7.M["SR7_" + e + "_" + t];
          for (; void 0 !== s; ) t++, (s = SR7.M["SR7_" + e + "_" + t]);
          return t;
        },
        collect: () => {
          SR7.M = SR7.M || {};
          let e = document.getElementsByTagName("sr7-module");
          for (var t in e)
            _tpt.hop(e, t) &&
              SR7.F.module.register(
                e[t],
                e[t].id,
                !SR7.F.modal.trigger(
                  e[t].dataset?.alias ?? void 0,
                  e[t],
                  e[t].dataset?.modal ?? void 0
                ) && "viewport"
              );
          _tpt.displayDeprecationWarnings &&
            _tpt.displayDeprecationWarnings(window.SR7?.E?.php);
        },
        register: (e, t, s = "viewport") => {
          const i = (SR7.M[t] ??= {});
          (i.c ??= { module: e }),
            (i.c.slideBGStates ??= {}),
            (i.zOrder ??= {}),
            (i.alias = e.dataset.alias),
            (i.dims ??= {}),
            (i.dims.CFC ??= {}),
            (i.dims.module ??= {}),
            (i.dims.content ??= { x: 0, y: 0 }),
            (SR7.preLoader.state(t) && SR7.preLoader.state(t, i.c.module)) ||
              SR7.preLoader.show(t, i.c.module),
            (i.LEV = _tpt.getResponsiveLevel(SR7.G.breakPoints, t));
          const a = i.c.module.getElementsByTagName("image_lists");
          if (void 0 !== a[0]) {
            const e = a[0].getElementsByTagName("img");
            if (void 0 !== e[0]) {
              i.imgList = Array();
              for (let t in e)
                if (_tpt.hop(e, t)) {
                  let s =
                    e[t].dataset.src ||
                    e[t].getAttribute("src") ||
                    e[t].getAttribute("data -src");
                  s &&
                    i.imgList.push({ old: atob(e[t].dataset.dbsrc), new: s });
                }
            }
            a[0].remove();
          }
          i.settings?.fixed
            ? ((i.states.inViewPort = !0),
              SR7.F.module.init(i.c.module),
              (i.c.module.observParams = { obj: i }))
            : (i.c.module.observParams =
                "viewport" == s
                  ? { callBack: SR7.F.module.init, runonce: !0, obj: i }
                  : { obj: i });
          let r = i.settings?.vPort ?? "-100px";
          (r = Array.isArray(r) ? r[0] : r),
            String(r).includes("&#039;,") && (r = r.split("&#039;,")[0]),
            i.settings?.sbt?.use && (r = "-200px"),
            String(r).includes("px") &&
              parseInt(r) > i.settings?.size?.height?.[i.LEV] &&
              (r = i.settings.size.height[i.LEV] - 10 + "px"),
            _tpt.observeModule(i.c.module, r),
            SR7.revapi.init(e.id);
        },
        getIdByAlias: (e) => {
          for (let t in SR7.M)
            if (
              _tpt.hop(SR7.M, t) &&
              (SR7.M[t].alias == e || (SR7.M[t]?.settings?.alias ?? "") == e)
            )
              return t;
        },
        init: (e) => {
          const t = SR7.M[e.id];
          SR7.revapi.init(e.id),
            (window.gM = t),
            (t.alias = _tpt.gA(e, "alias", e.id)),
            (t.states.inited = !0),
            (SR7.JSON ??= {}),
            void 0 !== SR7.JSON[e.id]
              ? "string" == typeof SR7.JSON[e.id] &&
                ".json" == SR7.JSON[e.id].slice(-5).toLowerCase()
                ? _tpt.getJSON({
                    url: SR7.JSON[e.id],
                    callBack: (t) => {
                      if ("object" != typeof t)
                        try {
                          t = JSON.parse(t);
                        } catch (e) {
                          t = _tpt.fixResponse(t);
                        }
                      _tpt.event.trigger("dom", "sr.module.loaded", {
                        result: t,
                        id: e.id,
                      });
                    },
                  })
                : _tpt.event.trigger("dom", "sr.module.loaded", {
                    result: SR7.JSON[e.id],
                    id: e.id,
                  })
              : _tpt.restAPI({
                  action: "get_full_slider_object",
                  version: 7,
                  id: t.c.module.dataset.id ?? e.id,
                  callBack: (s) => {
                    if ("object" != typeof s)
                      try {
                        s = JSON.parse(s);
                      } catch (e) {
                        s = _tpt.fixResponse(s);
                      }
                    0 == s.success
                      ? console.log(t.alias + " Could not be Loaded from DB")
                      : (SR7.F.regAddonResources(s.addOns ?? {}),
                        _tpt.event.trigger("dom", "sr.module.loaded", {
                          result: s,
                          id: e.id,
                        }));
                  },
                });
        },
        run: (e, t) => {
          const s = SR7.M[e];
          let i = SR7.F.initAddons(e);
          "carousel" === s.settings.type && SR7.F.hideCarouselSlides(e),
            _tpt.checkResources(i).then(() => {
              SR7.F.requestSlide({
                id: e,
                slide: t ?? 0,
                callback: SR7.F.module.checkCarousel,
                indicator: s.settings.type,
              }),
                _tpt.getWinDim(),
                "hero" !== s.settings.type &&
                  SR7.F.navigation &&
                  SR7.F.navigation.init(e),
                s.settings?.sbt?.use && SR7.F.sbt.init(e),
                "off" !== String(s.settings.nav?.m?.use) &&
                  "false" !== String(s.settings.nav?.m?.use) &&
                  (SR7.F.module.wheelModules
                    ? -1 === SR7.F.module.wheelModules.indexOf(e) &&
                      SR7.F.module.wheelModules.push(e)
                    : ((SR7.F.module.wheelModules = [e]),
                      window.addEventListener(
                        "wheel",
                        SR7.F.module.listeners.wheel,
                        { passive: !1 }
                      ))),
                "carousel" !== s.settings.type &&
                  "off" !== String(s.settings.nav?.s?.use) &&
                  "false" !== String(s.settings.nav?.s?.use) &&
                  (_tpt.is_mobile || s.settings.nav?.s?.desk) &&
                  SR7.F.module.listeners.touchSwipe(e),
                "off" !== (s.settings.nav?.k?.use ?? "off") &&
                  _tpt.keyBoard.reg(
                    e,
                    "navListener",
                    SR7.F.module.listeners.keyboard,
                    ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter"]
                  );
            });
        },
        checkCarousel: async (e) => {
          const t = SR7.M[e];
          if ("carousel" === t.settings.type) {
            const s = [];
            for (let i in t.slides)
              _tpt.hop(t.slides, i) &&
                (_tpt.getWinDim(),
                s.push(
                  new Promise((s) => {
                    setTimeout(async () => {
                      await SR7.F.redrawBG(e, i, !0),
                        "all" === t.settings.carousel.showAllLayers &&
                          setTimeout(() => {
                            SR7.F.drawSlide({
                              id: e,
                              slideid: i,
                              keepSlideVisible: !0,
                              type: "process",
                              global: !0,
                              render: !0,
                              callback: () => SR7.F.showCarouselSlide(e, i),
                            });
                          }, 0),
                        s();
                    }, 0);
                  })
                ));
            await Promise.all(s);
          }
          t.checkCarouselDone = !0;
        },
        toggle: (e, t, s) => {
          SR7.M[e].states.inViewPort
            ? SR7.M[e].states?.forcedPause || SR7.F.module.resume(e, s)
            : SR7.F.module.pause(e, s);
          for (let t in SR7.M[e].settings.addOns)
            _tpt.hop(SR7.M[e].settings.addOns, t) &&
              SR7.A?.[t]?.toggle &&
              SR7.A[t].toggle(e, t);
        },
        pause: (e, t) => {
          const s = SR7.M[e];
          if (null != s.c.tl) {
            SR7.slideShow.pause(e), (s.c.tl.cachePlayed = []);
            for (let e in s.c.tl[s.current.id]) {
              if (
                !_tpt.hop(s.c.tl[s.current.id], e) ||
                null == s.c.tl[s.current.id][e]
              )
                continue;
              let t = s.c.tl[s.current.id][e];
              for (let i in t)
                _tpt.hop(t, i) &&
                  t[i].isActive() &&
                  (s.c.tl.cachePlayed.push({ scenes: e, tl: i }), t[i].pause());
            }
            if (["scroll", "blur"].includes(t) && !s.settings.browser.mISB) {
              s.videosPlayingCache ??= {};
              for (let e in s.videosPlaying)
                _tpt.hop(s.videosPlaying, e) &&
                  (("carousel" === s.settings.type &&
                    s.videosPlaying[e]?.skey === s.current.id) ||
                    ((s.videosPlayingCache[e] = s.videosPlaying[e]),
                    s.videosPlaying[e].pause("scroll")));
            }
          }
        },
        resume: (e, t) => {
          const s = SR7.M[e],
            i = s.c?.tl?.cachePlayed ?? void 0;
          if ((SR7.slideShow.resume(e), i))
            for (let e in i)
              s.c.tl[s.current.id][i[e].scenes][i[e].tl].resume();
          if (["scroll", "focus"].includes(t) && !s.settings.browser.mISB)
            for (let e in s.videosPlayingCache)
              _tpt.hop(s.videosPlayingCache, e) &&
                (("carousel" === s.settings.type &&
                  s.videosPlaying[e]?.skey === s.current.id) ||
                  (s.videosPlayingCache[e].play(),
                  delete s.videosPlayingCache[e]));
        },
        size: (t) => {
          const s = SR7.M[t];
          if (
            (e(t, s, "t"),
            e(t, s, "b"),
            (s.c.module.style.height = (s.dims.sbt ?? s.dims.module.h) + "px"),
            (s.c.adjuster.style.height = s.dims.module.h + "px"),
            (s.c.content.style.height = s.dims.content.h + "px"),
            (s.c.content.style.width = s.dims.content.w + "px"),
            (s.c.content.style.left =
              1 == s.sbtFreeze
                ? "0px"
                : s.dims.content.mwshiftx + s.dims.content.shiftx + "px"),
            null == s.dims.sbt &&
              (s.c.content.style.top = s.dims.content.shifty + "px"),
            s.slideRatios && "v" !== (s.settings?.carousel?.type ?? ""))
          )
            for (let e in s.slideRatios)
              _tpt.hop(s.slideRatios, e) &&
                !s.slides[e].slide.global &&
                (s.c.slides[e].style.width =
                  Math.ceil(
                    s.settings.carousel.jMWidth
                      ? Math.min(s.dims.CFC[e].w, s.dims.module.w)
                      : s.dims.CFC[e].w
                  ) + "px");
          else if ("carousel" === s.settings.type)
            for (let e in s.c.slides)
              s.slides[e].slide.global
                ? s.slides[e].slide.fullHeight &&
                  ((s.c.slides[e].style.height = s.dims.module.h + "px"),
                  (s.c.slides[e].style.top =
                    0 - (s.dims.carousel?.pT ?? 0) + "px"))
                : ((s.c.slides[e].style.width =
                    ("v" === s.settings.carousel.type ||
                    s.settings.carousel.stretch
                      ? s.dims.module.w
                      : s.dims.CFC.w) + "px"),
                  "v" === s.settings.carousel.type &&
                    (s.c.slides[e].style.height =
                      parseInt(s.settings.size.height[s.LEV]) + "px"));
        },
        box: (e) => {
          SR7.M[e].dims.moduleRect = SR7.M[e].c.module.getBoundingClientRect();
        },
        fullScreen: (e, t) => {
          requestAnimationFrame(function () {
            const s = SR7.M[e];
            t && !s.states.inFullscreen
              ? s.c.module.classList.add("sr7-fullscreen")
              : !t &&
                s.states.inFullscreen &&
                s.c.module.classList.remove("sr7-fullscreen"),
              (s.states.cachedFullheight ??= s.settings.size.fullHeight),
              (s.states.inFullscreen = t),
              (s.settings.size.fullHeight = !!t || s.states.cachedFullheight),
              _tpt.resizeObserver.execute(),
              _tpt.scrollObserver.run(s.c.module);
          });
        },
        isFirstSlide: (e) => 0 == SR7.M[e].current.index,
        isLastSlide: (e) =>
          SR7.M[e].current.index ===
          (void 0 !== SR7.M[e].navSlideOrder
            ? SR7.M[e].navLen - 1
            : SR7.M[e].len - 1),
        listeners: {
          init: (e) => {
            const t = SR7.M[e];
            (t.settings.mod?.use || t.settings.sbt?.use) &&
              _tpt.scrollObserver.observe(t.c.module),
              (t.c.module.observParams.scrollCallback = (e) => {
                t.settings.mod?.use &&
                  SR7.F.callBackHandler(e, "parallax", "start"),
                  t.settings.sbt?.use &&
                    SR7.F.callBackHandler(e, "sbt", "start"),
                  t.c?.moduleListeners?.scroll &&
                    SR7.F.module.listeners.callBacks(
                      e,
                      t.c.moduleListeners.scroll
                    );
              }),
              t.settings?.browser?.freezeOnBlur &&
                _tpt.focusObserver.observe(
                  (e, t) => {
                    SR7.F.focusBlurCheck(e, t);
                  },
                  0,
                  e
                );
          },
          callBacks: (e, t) => {
            for (let s in t) _tpt.hop(t, s) && t[s](e);
          },
          keyboard: (e, t) => {
            const s = SR7.M[t.id];
            (void 0 !== s.states.navKeyDown &&
              new Date().getTime() - s.states.navKeyDown < 500) ||
              (("horizontal" == s.settings.nav.k.use && 39 == e.keyCode) ||
              ("vertical" == s.settings.nav.k.use && 40 == e.keyCode)
                ? SR7.F.requestSlide({ id: t.id, slide: "+1" })
                : (("horizontal" == s.settings.nav.k.use && 37 == e.keyCode) ||
                    ("vertical" == s.settings.nav.k.use && 38 == e.keyCode)) &&
                  SR7.F.requestSlide({ id: t.id, slide: "-1" }),
              (s.states.navKeyDown = new Date().getTime()));
          },
          mouse: (e, t) => {
            const s = SR7.M[t.id];
            if (
              ("mouseenter" == e.type || "touchstart" == e.type
                ? (s.states.overModule = !0)
                : "mouseleave" == e.type || "touchend" == e.type
                ? (s.states.overModule = !1)
                : "mousemove" == e.type || "touchmove" == e.type
                ? (s.states.overModule = !0)
                : e.type,
              s.c?.moduleListeners?.[e.type])
            )
              for (let i in s.c.moduleListeners[e.type])
                _tpt.hop(s.c.moduleListeners[e.type], i) &&
                  s.c.moduleListeners[e.type][i](t.id, e);
          },
          touchSwipe: (e) => {
            let t = { ...SR7.M[e].settings.nav.s };
            (t.t = parseInt(t.t ?? 1)),
              (_tpt.is_touch ??=
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0),
              _tpt.is_touch && t.t > 1
                ? SR7.F.module.listeners.touchSwipeMulti(e, t)
                : SR7.F.module.listeners.touchSwipeSimple(e, t);
          },
          touchSwipeMulti: (e, t) => {
            let s = 0,
              i = 0,
              a = 0,
              r = 0,
              o = !1,
              l = !1;
            function n(n) {
              if (!o) return;
              let d;
              if (
                ((o = !1),
                (d =
                  Math.abs(r - i) > Math.abs(a - s)
                    ? r < i
                      ? "up"
                      : "down"
                    : a < s
                    ? "left"
                    : "right"),
                l ||
                  ("vertical" === t.d &&
                    (("up" === d && SR7.F.module.isLastSlide(e)) ||
                      ("down" === d && SR7.F.module.isFirstSlide(e)))))
              )
                return SR7.F.scrollTo(
                  e,
                  "up" === d
                    ? SR7.M[e].c.module.offsetTop + SR7.M[e].dims.module.h
                    : document.documentElement.scrollTop -
                        (window.innerHeight -
                          SR7.M[e].c.module.getBoundingClientRect().top)
                );
              ("horizontal" === t.d && "left" === d) ||
              ("vertical" === t.d && "up" === d)
                ? SR7.F.requestSlide({ id: e, slide: "+1" })
                : (("horizontal" === t.d && "right" === d) ||
                    ("vertical" === t.d && "down" === d)) &&
                  SR7.F.requestSlide({ id: e, slide: "-1" });
            }
            SR7.M[e].c.module.addEventListener(
              "touchstart",
              function (e) {
                if (null === e.target.closest(".sr7-tabs, .sr7-thumbs"))
                  if (e.touches.length === t.t) {
                    const a = e.touches[0];
                    (s = a.pageX),
                      (i = a.pageY),
                      (o = !0),
                      !_tpt.is_mobile && t.bV && e.preventDefault();
                  } else o = !1;
                else o = !1;
              },
              { passive: !1 }
            ),
              SR7.M[e].c.module.addEventListener(
                "touchmove",
                function (n) {
                  if (!o || n.touches.length !== t.t) return void (o = !1);
                  const d = n.touches[0];
                  (a = d.pageX), (r = d.pageY);
                  let c =
                    Math.abs(r - i) > Math.abs(a - s)
                      ? "vertical"
                      : "horizontal";
                  c === t.d &&
                    (n.preventDefault(),
                    (l =
                      "vertical" === c &&
                      ((r < i && SR7.M[e].current.index === SR7.M[e].navLen) ||
                        (r > i && 0 === SR7.M[e].current.index))));
                },
                { passive: !1 }
              ),
              SR7.M[e].c.module.addEventListener("touchend", n, {
                passive: !1,
              }),
              SR7.M[e].c.module.addEventListener("touchcancel", n, {
                passive: !1,
              });
          },
          touchSwipeSimple: (e, t) => {
            (SR7.M[e].c.swipeProxy = document.createElement("div")),
              (SR7.M[e].c.swipeAble = _tpt.draggable.create(
                SR7.M[e].c.swipeProxy,
                {
                  trigger: SR7.M[e].c.module,
                  type: "horizontal" === t.d ? "x" : "y",
                  cursor: "pointer",
                  lockAxis: !0,
                  allowContextMenu: _tpt.is_mobile && !t.bV,
                  allowEventDefault: !t.bV,
                  onPress: function (s) {
                    null !== s.target.closest(".sr7-tabs, .sr7-thumbs") &&
                      (SR7.M[e].c.swipeAble[0].endDrag(),
                      SR7.M[e].c.swipeAble[0].disable()),
                      (t.pressX = s.pageX),
                      (t.pressY = s.pageY);
                  },
                  onDragStart: function () {
                    t.forceScroll =
                      ("up" === this.getDirection() &&
                        SR7.M[e].current.index == SR7.M[e].navLen) ||
                      ("down" === this.getDirection() &&
                        0 === SR7.M[e].current.index);
                  },
                  onDragEnd: function (s) {
                    var i = this.getDirection();
                    if (
                      Math.abs(s.pageY - t.pressY) >
                      Math.abs(s.pageX - t.pressX)
                    ) {
                      if ("right" === i || "left" === i) return;
                    } else if (
                      Math.abs(s.pageY - t.pressY) >
                        Math.abs(s.pageX - t.pressX) &&
                      ("up" === i || "down" === i)
                    )
                      return;
                    return t.forceScroll ||
                      ("vertical" == t.d &&
                        "up" == i &&
                        SR7.F.module.isLastSlide(e)) ||
                      ("vertical" == t.d &&
                        "down" == i &&
                        SR7.F.module.isFirstSlide(e))
                      ? SR7.F.scrollTo(
                          e,
                          "up" === i
                            ? SR7.M[e].c.module.offsetTop +
                                SR7.M[e].dims.module.h
                            : document.documentElement.scrollTop -
                                (window.innerHeight -
                                  SR7.M[e].c.module.getBoundingClientRect().top)
                        )
                      : (_tpt.is_mobile &&
                          (SR7.M[e].settings.nav?.nd ?? 0) > 200 &&
                          (SR7.M[e].settings.nav.nd = 50),
                        ("horizontal" == t.d && "left" == i) ||
                        ("vertical" == t.d && "up" == i)
                          ? (SR7.F.requestSlide({ id: e, slide: "+1" }), !1)
                          : ("horizontal" == t.d && "right" == i) ||
                            ("vertical" == t.d && "down" == i)
                          ? (SR7.F.requestSlide({ id: e, slide: "-1" }), !1)
                          : void 0);
                  },
                }
              ));
          },
          wheel: function (e) {
            if (
              ((SR7.F.module.wheelModules ??= []),
              !SR7.F.module.wheelModules.length)
            )
              return;
            let t = document.elementFromPoint(e.x, e.y);
            for (let s of SR7.F.module.wheelModules) {
              let i = SR7.M[s];
              if (!t.closest(`#${i.c.module.id}`)) continue;
              let a = _tpt.normalizeWheel(e),
                r = i.settings.nav.m,
                o = r.v / 100,
                l = window.pageYOffset || document.documentElement.scrollTop,
                n =
                  SR7.F.module[
                    "reverse" == r.r ? "isLastSlide" : "isFirstSlide"
                  ](s),
                d =
                  SR7.F.module[
                    "reverse" !== r.r ? "isLastSlide" : "isFirstSlide"
                  ](s);
              i.dims.moduleRect = SR7.M[s].c.module.getBoundingClientRect();
              let c = SR7.F.calculateVisiblePercentage(i.dims.moduleRect),
                p = a < 0 ? -1 : 1,
                h = !1,
                u = !1;
              if (
                ((r.cd ??= parseInt(r.cd ?? 1500)),
                !(o - c <= r.st / 100) ||
                  c >= o ||
                  (i.dims.moduleRect.top >= 0 && -1 === p) ||
                  (i.dims.moduleRect.top <= 0 && 1 === p) ||
                  ((u = !0),
                  i.mScrollTween ||
                    (i.mScrollTween = SR7.F.scrollTo(
                      s,
                      l +
                        i.dims.moduleRect.top +
                        (p * ("reverse" == r.r ? -1 : 1) == 1
                          ? i.dims.moduleRect.height - _tpt.winH
                          : 0),
                      _tpt.isWebkit ? 1 : 0.7,
                      "power2.out",
                      function () {
                        (SR7.M[s].dims.moduleRect =
                          SR7.M[s].c.module.getBoundingClientRect()),
                          SR7.M[s].mScrollTween.kill(),
                          delete SR7.M[s].mScrollTween;
                      }
                    ))),
                Math.abs(c - o) < 0.1 ||
                  c >= o ||
                  (Math.abs(c - o) >= 0.1 &&
                    c < o &&
                    ((p * ("reverse" == r.r ? -1 : 1) == 1 &&
                      Math.abs(
                        _tpt.winH -
                          i.dims.moduleRect.top -
                          i.dims.moduleRect.height
                      ) /
                        i.dims.moduleRect.height <
                        0.1) ||
                      (p * ("reverse" == r.r ? -1 : 1) == -1 &&
                        Math.abs(i.dims.moduleRect.top) /
                          i.dims.moduleRect.height <
                          0.1))))
              ) {
                let t =
                  ("reverse" === r.r && p < 0) || ("reverse" !== r.r && p > 0)
                    ? "reverse" !== r.r
                      ? 0
                      : 1
                    : "reverse" !== r.r
                    ? 1
                    : 0;
                return (
                  "carousel" === i.settings.nav.m.use ||
                  (0 === t && !d) ||
                  (1 === t && !n)
                    ? ((t =
                        0 == t
                          ? "reverse" == r.r
                            ? "-1"
                            : "+1"
                          : "reverse" == r.r
                          ? "+1"
                          : "-1"),
                      !0 !== i.wheelAction &&
                        (SR7.F.requestSlide({ id: s, slide: t }),
                        (i.wheelAction = !0),
                        setTimeout(function () {
                          i.wheelAction = !1;
                        }, r.cd)))
                    : !0 !== i.wheelAction && (h = !0),
                  h
                    ? (i.mScrollTween &&
                        ((SR7.M[s].dims.moduleRect =
                          SR7.M[s].c.module.getBoundingClientRect()),
                        SR7.M[s].mScrollTween.kill(),
                        delete SR7.M[s].mScrollTween),
                      !0)
                    : (e.preventDefault(), !1)
                );
              }
              u && e.preventDefault();
            }
          },
          updateMouseCoordinates: (e, t, s) => {
            const i = SR7.M[e];
            let a, r;
            if (t.type.includes("touch")) {
              if (void 0 === t.touches[0]) return;
              (a = t.touches[0].clientX), (r = t.touches[0].clientY);
            } else (a = t.clientX), (r = t.clientY);
            (void 0 !== i.mouse.enterX &&
              void 0 !== i.mouse.enterY &&
              "mouseenter" !== t.type &&
              "touchstart" !== t.type) ||
              (SR7.F.module.box(e),
              (i.mouse.enterX = a - i.dims.moduleRect.left),
              (i.mouse.enterY = r - i.dims.moduleRect.top)),
              ("mousemove" !== t.type &&
                "touchmove" !== t.type &&
                "dragmove" !== t.type) ||
                ((i.mouse.x = a),
                (i.mouse.y = r),
                (i.mouse.relX =
                  a -
                  ("dragmove" == t.type || i.settings.size.fullWidth
                    ? 0
                    : i.dims.moduleRect.left + i.dims.content.mwshiftx)),
                (i.mouse.relY =
                  r -
                  ("dragmove" == t.type
                    ? _tpt.scrollObserver.y + i.dims.moduleRect.top
                    : i.dims.moduleRect.top)),
                (i.mouse.eDX = i.mouse.enterX - i.mouse.relX),
                (i.mouse.eDY = i.mouse.enterY - i.mouse.relY),
                (i.mouse.cDX = i.dims.module.w / 2 - i.mouse.relX),
                (i.mouse.cDY = i.dims.module.h / 2 - i.mouse.relY)),
              ("touchstart" != t.type && "touchend" != t.type) ||
                ((i.mouse.relX =
                  a -
                  (i.settings.size.fullWidth
                    ? 0
                    : i.dims.moduleRect.left + i.dims.content.mwshiftx)),
                (i.mouse.relY = r - i.dims.moduleRect.top),
                (i.mouse.eDXF = i.mouse.cDXF =
                  i.dims.module.w / 2 - i.mouse.relX),
                (i.mouse.eDYF = i.mouse.cDYF =
                  i.dims.module.h / 2 - i.mouse.relY));
          },
          reg: (e, t, s, i) => {
            const a = SR7.M[e];
            (a.mouse ??= {}), (t = t.split(" "));
            let r = Math.round(1e6 * Math.random());
            for (let e in t)
              void 0 !== (a.c.moduleListeners?.[t[e]]?.[r] ?? void 0) && r++;
            for (let o in t)
              0 == (a.c.moduleListeners?.[t[o]] ?? !1) &&
                _tpt.event.listen(
                  a.c.module,
                  t[o],
                  SR7.F.module.listeners.mouse,
                  { id: e },
                  i
                ),
                (a.c.moduleListeners ??= {}),
                (a.c.moduleListeners[t[o]] ??= {}),
                (a.c.moduleListeners[t[o]][r] = s);
            return r;
          },
          del: (e, t, s) => {
            SR7.M[e]?.c?.moduleListeners?.[t]?.[s] &&
              delete SR7.M[e].c.moduleListeners[t][s];
          },
        },
      }),
      (SR7.F.getRequiredResources = function (e) {
        const t = Array(50),
          s = SR7.M[e];
        let i = 0;
        if (
          (SR7.R?.nav && ((t[i++] = "navigation"), (t[i++] = "cssnav")),
          (t[i++] = "media"),
          (t[i++] = "cssmedia"),
          SR7.R?.cssbtns && (t[i++] = "cssbtns"),
          void 0 !== s.settings.addOns)
        )
          for (let e in s.settings.addOns)
            _tpt.hop(s.settings.addOns, e) &&
              0 != s.settings.addOns[e] &&
              (void 0 !== SR7.E.resources[e] && (t[i++] = e),
              void 0 !== SR7.E.resources["css" + e] && (t[i++] = "css" + e));
        for (let e in SR7.E.gAddons)
          _tpt.hop(SR7.E.gAddons, e) &&
            (void 0 !== SR7.E.resources[e] &&
              ((t[i++] = e),
              (s.settings.addOns ??= {}),
              (s.settings.addOns[e] = { u: !0 })),
            void 0 !== SR7.E.resources["css" + e] && (t[i++] = "css" + e));
        return t;
      }),
      (SR7.F.getNewId = async function (e, t, s) {
        return new Promise((i, a) => {
          "slide" == e && void 0 !== t
            ? i(t)
            : "module" == e && void 0 !== s
            ? i(s)
            : "slide" == e && null == s
            ? a(null)
            : _tpt.ajax({
                action: "get_" + e + "id",
                data: { module: s },
                callBack: (e) => i(e),
                errorHandler: (e) => a(e),
              });
        });
      }),
      (SR7.F.getGlobalZoneHeights = (e) => {
        (SR7.M[e].zones ??= {}),
          (SR7.M[e].zones.globals ??= {}),
          (SR7.M[e].zones.globals.all = 0);
        for (let t in SR7.M[e].staticSlides)
          _tpt.hop(SR7.M[e].staticSlides, t) &&
            (SR7.M[e].zones.globals.all = Math.max(
              SR7.M[e].zones.globals.all || 0,
              SR7.F.getZoneHeights(e, SR7.M[e].staticSlides[t]) || 0
            ));
        return SR7.M[e].zones.globals.all || 0;
      }),
      (SR7.F.getZoneHeights = function (e, t) {
        let s = SR7.M[e];
        if (
          (null != t || null != s.current) &&
          -1 != s.current.id &&
          ((t ??= s.current.id), s.zones[t] && null != s.zones[t].zones)
        ) {
          s.zones[t].all = 0;
          for (let e in s.zones[t].zones)
            (s.zones[t].zones[e] = s.c.layers[SR7.lToK[e]].el.offsetHeight),
              (s.zones[t].all += s.zones[t].zones[e]);
          return s.zones[t].all;
        }
      }),
      (SR7.F.getONavs = (e) => {
        const t = SR7.M[e];
        t.dims.outNav = { w: 0, h: 0, x: 0, y: 0, align: "left" };
        for (let s of ["tabs", "thumbs", "scrubber"])
          if (t.settings.nav?.[s]?.set) {
            let i = t.settings.nav?.[s];
            if ("i" == i.io || 0 == (i?.show?.[t.LEV] ?? !0)) continue;
            let a = 2 * SR7.gV({ v: i.wr.p, id: e, u: 0 });
            "vertical" == SR7.gV({ v: i.d, id: e, u: 0 })
              ? ((t.dims.outNav.w = Math.max(
                  t.dims.outNav.w,
                  SR7.gV({ v: i.size.w, id: e, u: 0, a: !0 }) + a
                )),
                (t.dims.outNav.x =
                  "left" == SR7.gV({ v: i.h, id: e, u: 0 })
                    ? t.dims.outNav.w
                    : -t.dims.outNav.w / 2),
                (t.dims.outNav.align =
                  "left" == SR7.gV({ v: i.h, id: e, u: 0 }) ? "left" : "right"))
              : ((t.dims.outNav.h = Math.max(
                  t.dims.outNav.h,
                  SR7.gV({ v: i.size.h, id: e, u: 0 }) + a
                )),
                (t.dims.outNav.y =
                  "top" == SR7.gV({ v: i.v, id: e, u: 0 })
                    ? t.dims.outNav.h
                    : 0),
                (t.dims.outNav.align =
                  "top" == SR7.gV({ v: i.v, id: e, u: 0 }) ? "top" : "bottom"));
          }
      });
    const e = (e, t, s) => {
      let i = SR7.gV({ v: t.settings.size.m?.[s] ?? 0, id: e, u: 0 });
      (t.dims.margins?.[s] ?? 0) !== i &&
        ((t.c.module.style["margin" + ("t" == s ? "Top" : "Bottom")] =
          i + "px"),
        (t.dims.margins ??= {}),
        (t.dims.margins[s] = i)),
        t.offsetPrepared &&
          t.c.bgcanvas &&
          ((t.c.bgcanvas.style.visibility = "visible"),
          delete t.offsetPrepared);
    };
    (SR7.F.updateModuleDims = function (e, t, s, i) {
      null == _tpt.winWAll && _tpt.getWinDim();
      let a = SR7.M[e],
        r = "carousel" === a.settings.type;
      (a.dims.module.w = a.settings.size.fullWidth
        ? _tpt.winW
        : a.c.module.offsetWidth),
        (a.LEV = _tpt.getResponsiveLevel(SR7.G.breakPoints, e)),
        SR7.F.getONavs(e),
        (a.dims.cache ??= []),
        a.dims.cache.push({ w: _tpt.winW, h: _tpt.winH }),
        a.dims.cache.length > 10 && a.dims.cache.shift();
      let o = SR7.gV({ v: a.settings.size.width, id: e, u: 0 }),
        l = parseInt(SR7.gV({ v: a.settings.size.height, id: e, u: 0 }));
      if (
        !a.settings.size.fullWidth &&
        0 == a.dims.module.w &&
        0 == a.dims.module.h
      ) {
        try {
          "flex" ==
            getComputedStyle(a.c?.module?.parentNode?.parentNode)?.display &&
            (a.c.module.parentNode.style.width = "100%"),
            (a.dims.module.w = o),
            (a.dims.module.h = l);
        } catch (e) {}
        console.log(
          a.alias,
          " set to auto width but its parents element Dimension is 0px. Please check parrent element ! "
        );
      }
      (a.dims.reduceHeight =
        (a.settings.size.fullHeight &&
          !a.states.inFullscreen &&
          SR7.F.getContsHeights(
            a.settings.size.fullHeightOffset,
            a.dims.module.h
          )) ||
        0),
        (a.dims.padding = {
          t: SR7.gV({ v: a.settings.size.p?.t ?? 0, id: e, u: 0 }),
          b: SR7.gV({ v: a.settings.size.p?.b ?? 0, id: e, u: 0 }),
          l: SR7.gV({ v: a.settings.size.p?.l ?? 0, id: e, u: 0 }),
          r: SR7.gV({ v: a.settings.size.p?.r ?? 0, id: e, u: 0 }),
        }),
        (a.dims.CFC.w = Math.min(o, a.dims.module.w - a.dims.outNav.w) || 0),
        (a.MP =
          r && a.settings.carousel.justify ? 1 : Math.min(1, a.dims.CFC.w / o)),
        (a.useHMP =
          ((!a.settings.sbt?.use &&
            a.settings.size.fullHeight &&
            _tpt.winH < l) ||
            ((a.settings.sbt?.use ?? !1) && _tpt.winW < o)) &&
          a.LEV < 3),
        a.useHMP
          ? (a.settings.sbt?.use ||
              (a.MP = Math.min(
                a.MP,
                Math.max(640, _tpt.winH - a.dims.reduceHeight) / l
              )),
            (a.dims.CFC.w =
              Math.min(o * a.MP, a.dims.module.w - a.dims.outNav.w) || 0))
          : (a.useHMP = !0),
        (a.dims.zones = Math.max(
          SR7.F.getGlobalZoneHeights(e) || 0,
          SR7.F.getZoneHeights(e) || 0
        ));
      let n = SR7.gV({ v: a.settings.size.minHeight, id: e, u: 0 });
      n = "none" == n ? 0 : n;
      let d =
        _tpt.is_mobile &&
        a.settings.size.fullHeight &&
        _tpt.is_mobile &&
        a.settings.mobileURLJumpFix
          ? Math.max(l, Math.max(a.dims.zones, _tpt.screenHeightWithUrlBar))
          : a.settings.size.respectRatio
          ? (l / o) * a.dims.module.w
          : SR7.gV({ v: a.settings.size.maxHeight, id: e, u: 0 });
      (a.dims.module.h = a.settings.size.respectRatio
        ? (l / o) * a.dims.module.w
        : Math.max(
            a.dims.zones,
            Math.max(
              a.settings.size.fullHeight
                ? _tpt.is_mobile && a.settings.mobileURLJumpFix
                  ? _tpt.screenHeightWithUrlBar
                  : _tpt.winH
                : 0,
              Math.max(l, n) * (a.settings.size.keepBPHeight ? 1 : a.MP)
            )
          )),
        d > 0 && (a.dims.module.h = Math.min(d, a.dims.module.h)),
        a.useAsModal &&
          (a.dims.module.h < _tpt.winH
            ? ((a.c.module.style.inset = "50% 0px auto"),
              (a.c.module.style.transform = "translate(0px, -50%)"))
            : ((a.c.module.style.inset = "auto"),
              (a.c.module.style.transform = "translate(0px, 0px)"))),
        r &&
          ((a.dims.carousel = {
            pT: parseInt(a.settings.carousel.pT ?? 0) * a.MP,
            pB: parseInt(a.settings.carousel.pB ?? 0) * a.MP,
          }),
          a.settings.size.fullHeight ||
            "v" !== a.settings.carousel.type ||
            ((a.dims.module.pNV = _tpt.posToNum(
              a.settings.carousel.pNV,
              a.dims.module.h
            )),
            (a.dims.module.h += a.dims.module.pNV))),
        (a.dims.CFC.h = Math.max(
          a.dims.zones,
          Math.max(l, n) * (a.settings.size.keepBPHeight ? 1 : a.MP)
        )),
        (a.dims.module.h -= a.dims.reduceHeight),
        (a.dims.content.h = a.dims.module.h),
        a.settings.size.fullWidth && SR7.F.module.box(e);
      let c =
        (a.settings.size.fullWidth ? _tpt.winWAll : a.dims.module.w) -
        (null == a.settings.size.p ? 0 : a.dims.padding.l + a.dims.padding.r) -
        a.dims.outNav.w;
      if (
        ((a.dims.content.w = a.settings.size.fullWidth
          ? c
          : Math.min(
              parseInt(_tpt.posToNum(a.settings.size.maxWidth, _tpt.winWAll)) ||
                _tpt.winWAll,
              c
            )),
        (a.dims.content.mwshiftx = (c - a.dims.content.w) / 2),
        (a.dims.module.h +=
          (null == a.settings.size.p
            ? 0
            : a.dims.padding.t + a.dims.padding.b) +
          a.dims.outNav.h +
          (r ? a.dims.carousel.pT + a.dims.carousel.pB : 0)),
        (a.dims.content.shiftx =
          a.dims.outNav.x < 0
            ? 0 - (a.settings.size.fullWidth ? a.dims.moduleRect.left ?? 0 : 0)
            : a.settings.size.fullWidth
            ? -(a.dims.moduleRect.left ?? 0) +
              a.dims.padding.l +
              a.dims.outNav.x
            : a.dims.padding.l + a.dims.outNav.x),
        (a.dims.content.shifty =
          a.dims.padding.t + a.dims.outNav.y + (r ? a.dims.carousel.pT : 0)),
        (a.dims.CFC.x = Math.max(0, (a.dims.content.w - a.dims.CFC.w) / 2)),
        (a.dims.CFC.y = Math.max(0, (a.dims.content.h - a.dims.CFC.h) / 2)),
        (a.dims.content.cw = a.dims.content.w),
        (a.dims.content.ch = a.dims.content.h),
        (a.dims.CFC.cw = a.dims.CFC.w),
        (a.dims.CFC.ch = a.dims.CFC.h),
        a.settings.sbt?.use &&
          ((a.sbt ??= {}),
          (a.sbt.__len = SR7.slideShow.getLen(e)),
          (a.sbt.__slen = parseInt(a.settings.sbt.fStart ?? 0)),
          (a.sbt.__elen =
            a.sbt.__len - parseInt(a.settings.sbt.fEnd ?? a.sbt.__len)),
          (a.sbt.__mlen = a.sbt.__len - (a.sbt.__slen + a.sbt.__elen)),
          a.settings.sbt?.f &&
            (a.dims.sbt = Math.max(2 * a.dims.module.h, a.sbt.__len / 3))),
        r)
      ) {
        (a.dims.CFC.ch = a.dims.CFC.h =
          "v" === a.settings.carousel.type
            ? Math.min(
                a.dims.module.h,
                parseFloat(a.settings.size.height[a.LEV])
              )
            : Math.min(a.dims.content.h, a.dims.module.h)),
          a.settings.carousel.justify && SR7.F.getSlideARatios(e);
        for (let e in a.c.slides)
          _tpt.hop(a.c.slides, e) &&
            ((a.dims.CFC[e] ??= {}),
            (a.dims.content[e] ??= {}),
            (a.dims.CFC[e].cw = a.dims.CFC[e].w =
              a.slides[e].slide.global
                ? a.settings.carousel.justify
                  ? a.dims.content.w
                  : a.dims.CFC.w
                : "v" === a.settings.carousel.type
                ? a.dims.CFC.w
                : a.settings.carousel.justify
                ? a.dims.module.h * a.slideRatios[e] || a.dims.CFC.w
                : a.settings.carousel.stretch
                ? a.dims.module.w
                : a.dims.CFC.w),
            (a.dims.CFC[e].cw = a.dims.CFC[e].w =
              Math.min(a.dims.CFC[e].cw, a.dims.module.w)),
            (a.dims.CFC[e].ch = a.dims.CFC[e].h =
              a.slides[e].slide.global
                ? a.dims.CFC.h +
                  (a.settings.carousel.justify
                    ? 0
                    : a.dims.carousel.pT + a.dims.carousel.pB)
                : (a.slides[e].slide.fullHeight, a.dims.CFC.h)),
            a.slides[e].slide.global &&
              !a.settings.carousel.justify &&
              ((a.dims.CFC[e].x = a.dims.CFC.x),
              (a.dims.CFC[e + "_slide"] ??= {}),
              (a.dims.CFC[e + "_slide"].cw = a.dims.CFC[e + "_slide"].w =
                a.dims.module.w),
              (a.dims.CFC[e + "_slide"].ch = a.dims.CFC[e + "_slide"].h =
                a.dims.CFC[e].ch),
              (a.dims.CFC[e + "_slide"].x = 0)),
            "v" == a.settings?.carousel?.type
              ? ((a.dims.CFC[e].x = a.dims.CFC.x),
                (a.dims.CFC[e].y = 0),
                (a.dims.CFC[e + "_full"] ??= {}),
                (a.dims.CFC[e + "_full"].cw = a.dims.CFC[e + "_full"].w =
                  a.dims.content.w),
                (a.dims.CFC[e + "_full"].ch = a.dims.CFC.h = a.dims.CFC[e].ch),
                (a.dims.CFC[e + "_full"].x = a.dims.content.x))
              : a.slides[e].slide.global &&
                a.settings.size.fullHeight &&
                ((a.dims.CFC[e].x = 0), (a.dims.CFC[e].y = 0)));
      }
      !(function (e) {
        const t = SR7.M[e];
        null == t.c.bgOverlay &&
          t.settings.bg?.overlay?.type &&
          (null == t.c.bgcanvas && _tpt.bgStyle(e, void 0, !1, !0, !0),
          (t.c.bgOverlay = SR7.F.addOverlay(
            t.settings.bg.overlay.type,
            t.settings.bg.overlay.size,
            t.settings.bg.overlay.cA,
            t.settings.bg.overlay.cB
          )),
          t.c.bgcanvas.appendChild(t.c.bgOverlay));
        if (null == t.c.bgcanvas) return;
        (t.c.bgcanvas.dataset.pos ??= t.c.bgcanvas.closest("SR7-CONTENT")
          ? "content"
          : "module"),
          (t.c.bgcanvas.style.width = t.settings.size.fullWidth
            ? _tpt.winW + "px"
            : t.dims.content.w + (t.dims.outNav?.w ?? 0) + "px"),
          (t.c.bgcanvas.style.height =
            ("carousel" == t.settings.type
              ? t.dims.module.h
              : t.dims.content.h +
                parseInt(
                  (t.dims.padding.t ?? 0) + parseInt(t.dims.padding.b ?? 0)
                ) +
                parseInt(t.dims.outNav?.h ?? 0)) + "px"),
          (t.c.bgcanvas.style.left =
            (t.settings.sbt?.use && t.settings.sbt?.f) ||
            "content" == t.c.bgcanvas.dataset.pos
              ? "0px"
              : (t.settings.size.fullWidth
                  ? t.dims.content.mwshiftx + t.dims.content.shiftx
                  : 0) +
                (t.dims.padding?.l ?? 0) -
                ("left" == (t.dims.outNav?.align ?? "left") &&
                t.settings.size.fullWidth
                  ? t.dims.outNav?.w ?? 0
                  : 0) +
                "px"),
          t.settings.size.fullWidth ||
            0 === t.dims.padding.t ||
            (t.c.bgcanvas.style.top = 0 - t.dims.padding.t + "px");
      })(e),
        a.useAsModal &&
          SR7.F.modal.visible &&
          SR7.F.modal.requested == a.alias &&
          (SR7.F.modal.updatePos(),
          SR7.F?.modal?.sbt &&
            (SR7.F.modal.wrap.style.height = a.dims.moduleRect.height + "px")),
        t &&
          ((_tpt.is_mobile &&
            a.dims.content.Ccw == a.dims.content.w &&
            a.dims.content.Cch == a.dims.content.h &&
            a.dims.CFC.Ccw == a.dims.CFC.w &&
            a.dims.CFC.Cch == a.dims.CFC.h) ||
            ((a.dims.content.Ccw = a.dims.content.w),
            (a.dims.content.Cch = a.dims.content.h),
            (a.dims.CFC.Ccw = a.dims.CFC.w),
            (a.dims.CFC.Cch = a.dims.CFC.h),
            i || cancelAnimationFrame(a.updateModuleDimsrAF),
            (a.updateModuleDimsrAF = requestAnimationFrame(function () {
              if (
                ("hero" !== a.settings.type &&
                  SR7.F?.navigation?.update &&
                  SR7.F.navigation.update(e),
                SR7.F.module.size(e),
                -1 != (a.current?.id ?? -1))
              ) {
                if (
                  !(
                    (function (e) {
                      if (e.length < 10) return !1;
                      let t = e.slice(-10),
                        s = [];
                      for (let e = 0; e < t.length; e++)
                        s.some((s) => s.w === t[e].w && s.h === t[e].h) ||
                          s.push(t[e]);
                      return 2 === s.length;
                    })(a.dims.cache) &&
                    (_tpt.getWinDim(), !0 !== s && _tpt.winW >= a.dims.module.w)
                  )
                ) {
                  _tpt.scrollObserver.run(a.c.module, !0),
                    SR7.F.drawRawLayers(e, a.current.id, "update");
                  for (let t in a.staticSlides)
                    _tpt.hop(a.staticSlides, t) &&
                      "" != a.staticSlides[t] &&
                      SR7.F.drawRawLayers(e, a.staticSlides[t], "update");
                  r &&
                    requestAnimationFrame(() => {
                      SR7.F.rebuildCarousel(e);
                    }),
                    _tpt.getWinDim(),
                    (a.dims.cache[a.dims.cache.length - 1].w === _tpt.winW &&
                      a.dims.cache[a.dims.cache.length - 1].h === _tpt.winH) ||
                      SR7.F.updateModuleDims(e, !0);
                }
              } else
                r &&
                  a.dims.oldWinW !== _tpt.winW &&
                  (requestAnimationFrame(() => {
                    SR7.F.rebuildCarousel(e, !1);
                  }),
                  (a.dims.oldWinW = _tpt.winW));
            }))));
    }),
      (SR7.F.callBackHandler = (e, t, s) => {
        if (SR7.M[e].c.callBacks)
          for (let i of SR7.M[e].c.callBacks)
            i.inmodule == t &&
              i.atposition == s &&
              void 0 !== i.callback &&
              i.callback.call();
      }),
      (_tpt.R ??= {}),
      (_tpt.R.module = _tpt.extend
        ? _tpt.extend(_tpt.R.module, { status: 2, version: "1.0" })
        : { status: 2, version: "1.0" });
  })();
