/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1,
        o = -1,
        n = function(t) {
            return parseFloat(t) || 0
        },
        a = function(e) {
            var o = 1,
                a = t(e),
                i = null,
                r = [];
            return a.each(function() {
                var e = t(this),
                    a = e.offset().top - n(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a
            }), r
        },
        i = function(e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function(e) {
            var o = i(e);
            if (o.remove) {
                var n = this;
                return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                    e.elements = e.elements.not(n)
                }), this
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({
                elements: this,
                options: o
            }), r._apply(this, o), this)
        };
    r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function(e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return u.each(function() {
                    var e = t(this);
                    e.data("style-cache", e.attr("style"))
                }), u.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                    var e = t(this),
                        o = e.css("display");
                    "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                        display: o,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px",
                        overflow: "hidden"
                    })
                }), l = a(h), h.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || "")
                })), t.each(l, function(e, o) {
                    var a = t(o),
                        i = 0;
                    if (s.target) i = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                        a.each(function() {
                            var e = t(this),
                                o = e.attr("style"),
                                n = e.css("display");
                            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                            var a = {
                                display: n
                            };
                            a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                        })
                    }
                    a.each(function() {
                        var e = t(this),
                            o = 0;
                        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"))
                    })
                }), u.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || null)
                }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    n = o.attr("data-mh") || o.attr("data-match-height");
                n in e ? e[n] = e[n].add(o) : e[n] = o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
    var s = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(n, a) {
        if (a && "resize" === a.type) {
            var i = t(window).width();
            if (i === e) return;
            e = i;
        }
        n ? o === -1 && (o = setTimeout(function() {
            s(a), o = -1
        }, r._throttle)) : s(a)
    }, t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function(t) {
        r._update(!1, t)
    }), t(window)[h]("resize orientationchange", function(t) {
        r._update(!0, t)
    })
});




/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2016 Sachin N; Licensed MIT */
/*! lightslider - v1.1.3 - 2015-04-14
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2015 Sachin N; Licensed MIT */
! function(e, i) {
    "use strict";
    var t = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(e) {},
        onSliderLoad: function(e) {},
        onBeforeSlide: function(e, i) {},
        onAfterSlide: function(e, i) {},
        onBeforeNextSlide: function(e, i) {},
        onBeforePrevSlide: function(e, i) {}
    };
    e.fn.lightSlider = function(i) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            e(this).lightSlider(i)
        }), this;
        var n = {},
            l = e.extend(!0, {}, t, i),
            a = {},
            s = this;
        n.$el = this, "fade" === l.mode && (l.vertical = !1);
        var o = s.children(),
            r = e(window).width(),
            d = null,
            c = 0,
            u = 0,
            f = !1,
            h = 0,
            g = "",
            v = 0,
            p = !0 === l.vertical ? "height" : "width",
            m = !0 === l.vertical ? "margin-bottom" : "margin-right",
            S = 0,
            b = 0,
            C = 0,
            M = 0,
            T = null,
            w = "ontouchstart" in document.documentElement,
            x = {
                chbreakpoint: function() {
                    if (r = e(window).width(), l.responsive.length) {
                        var i;
                        if (!1 === l.autoWidth && (i = l.item), r < l.responsive[0].breakpoint)
                            for (var t = 0; t < l.responsive.length; t++) r < l.responsive[t].breakpoint && (l.responsive[t].breakpoint, d = l.responsive[t]);
                        if (null != d)
                            for (var n in d.settings) d.settings.hasOwnProperty(n) && (void 0 !== a[n] && null !== a[n] || (a[n] = l[n]), l[n] = d.settings[n]);
                        if (!e.isEmptyObject(a) && r > l.responsive[0].breakpoint)
                            for (var s in a) a.hasOwnProperty(s) && (l[s] = a[s]);
                        !1 === l.autoWidth && S > 0 && C > 0 && i !== l.item && (v = Math.round(S / ((C + l.slideMargin) * l.slideMove)))
                    }
                },
                calSW: function() {
                    !1 === l.autoWidth && (C = (h - (l.item * l.slideMargin - l.slideMargin)) / l.item)
                },
                calWidth: function(e) {
                    var i = !0 === e ? g.find(".lslide").length : o.length;
                    if (!1 === l.autoWidth) u = i * (C + l.slideMargin);
                    else {
                        u = 0;
                        for (var t = 0; t < i; t++) u += parseInt(o.eq(t).width()) + l.slideMargin
                    }
                    return u
                }
            };
        return (n = {
            doCss: function() {
                return !(!l.useCSS || ! function() {
                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], i = document.documentElement, t = 0; t < e.length; t++)
                        if (e[t] in i.style) return !0
                }())
            },
            keyPress: function() {
                l.keyPress && e(document).on("keyup.lightslider", function(i) {
                    e(":focus").is("input, textarea") || (i.preventDefault ? i.preventDefault() : i.returnValue = !1, 37 === i.keyCode ? s.goToPrevSlide() : 39 === i.keyCode && s.goToNextSlide())
                })
            },
            controls: function() {
                l.controls && (s.parent(".lSSlideWrapper").after('<div class="lSAction"><a class="lSPrev">' + l.prevHtml + '</a><a class="lSNext">' + l.nextHtml + "</a></div>"), l.autoWidth ? x.calWidth(!1) < h && g.find(".lSAction").hide() : c <= l.item && g.find(".lSAction").hide(), g.parent().find(".lSAction a").on("click", function(i) {
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, "lSPrev" === e(this).attr("class") ? s.goToPrevSlide() : s.goToNextSlide(), !1
                }))
            },
            initialStyle: function() {
                var e = this;
                "fade" === l.mode && (l.autoWidth = !1, l.slideEndAnimation = !1), l.auto && (l.slideEndAnimation = !1), l.autoWidth && (l.slideMove = 1, l.item = 1), l.loop && (l.slideMove = 1, l.freeMove = !1), l.onBeforeStart.call(this, s), x.chbreakpoint(), s.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + l.addClass + '"><div class="lSSlideWrapper"></div></div>'), g = s.parent(".lSSlideWrapper"), !0 === l.rtl && g.parent().addClass("lSrtl"), l.vertical ? (g.parent().addClass("vertical"), h = l.verticalHeight, g.css("height", h + "px")) : h = s.outerWidth(), o.addClass("lslide"), !0 === l.loop && "slide" === l.mode && (x.calSW(), x.clone = function() {
                    if (x.calWidth(!0) > h) {
                        for (var i = 0, t = 0, n = 0; n < o.length && (t++, !((i += parseInt(s.find(".lslide").eq(n).width()) + l.slideMargin) >= h + l.slideMargin)); n++);
                        var a = !0 === l.autoWidth ? t : l.item;
                        if (a < s.find(".clone.left").length)
                            for (var r = 0; r < s.find(".clone.left").length - a; r++) o.eq(r).remove();
                        if (a < s.find(".clone.right").length)
                            for (var d = o.length - 1; d > o.length - 1 - s.find(".clone.right").length; d--) v--, o.eq(d).remove();
                        for (var c = s.find(".clone.right").length; c < a; c++) s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s), v++;
                        for (var u = s.find(".lslide").length - s.find(".clone.left").length; u > s.find(".lslide").length - a; u--) s.find(".lslide").eq(u - 1).clone().removeClass("lslide").addClass("clone left").prependTo(s);
                        o = s.children()
                    } else o.hasClass("clone") && (s.find(".clone").remove(), e.move(s, 0))
                }, x.clone()), x.sSW = function() {
                    c = o.length, !0 === l.rtl && !1 === l.vertical && (m = "margin-left"), !1 === l.autoWidth && o.css(p, C + "px"), o.css(m, l.slideMargin + "px"), u = x.calWidth(!1), s.css(p, u + "px"), !0 === l.loop && "slide" === l.mode && !1 === f && (v = s.find(".clone.left").length)
                }, x.calL = function() {
                    o = s.children(), c = o.length
                }, this.doCss() && g.addClass("usingCss"), x.calL(), "slide" === l.mode ? (x.calSW(), x.sSW(), !0 === l.loop && (S = e.slideValue(), this.move(s, S)), !1 === l.vertical && this.setHeight(s, !1)) : (this.setHeight(s, !0), s.addClass("lSFade"), this.doCss() || (o.fadeOut(0), o.eq(v).fadeIn(0))), !0 === l.loop && "slide" === l.mode ? o.eq(v).addClass("active") : o.first().addClass("active")
            },
            pager: function() {
                var e = this;
                if (x.createPager = function() {
                        M = (h - (l.thumbItem * l.thumbMargin - l.thumbMargin)) / l.thumbItem;
                        var i = g.find(".lslide"),
                            t = g.find(".lslide").length,
                            n = 0,
                            a = "",
                            o = 0;
                        for (n = 0; n < t; n++) {
                            "slide" === l.mode && (l.autoWidth ? o += (parseInt(i.eq(n).width()) + l.slideMargin) * l.slideMove : o = n * ((C + l.slideMargin) * l.slideMove));
                            var r = i.eq(n * l.slideMove).attr("data-thumb");
                            if (!0 === l.gallery ? a += '<li style="width:100%;' + p + ":" + M + "px;" + m + ":" + l.thumbMargin + 'px"><a href="#"><img src="' + r + '" /></a></li>' : a += '<li><a href="#">' + (n + 1) + "</a></li>", "slide" === l.mode && o >= u - h - l.slideMargin) {
                                n += 1;
                                var d = 2;
                                l.autoWidth && (a += '<li><a href="#">' + (n + 1) + "</a></li>", d = 1), n < d ? (a = null, g.parent().addClass("noPager")) : g.parent().removeClass("noPager");
                                break
                            }
                        }
                        var c = g.parent();
                        c.find(".lSPager").html(a), !0 === l.gallery && (!0 === l.vertical && c.find(".lSPager").css("width", l.vThumbWidth + "px"), b = n * (l.thumbMargin + M) + .5, c.find(".lSPager").css({
                            property: b + "px",
                            "transition-duration": l.speed + "ms"
                        }), !0 === l.vertical && g.parent().css("padding-right", l.vThumbWidth + l.galleryMargin + "px"), c.find(".lSPager").css(p, b + "px"));
                        var f = c.find(".lSPager").find("li");
                        f.first().addClass("active"), f.on("click", function() {
                            return !0 === l.loop && "slide" === l.mode ? v += f.index(this) - c.find(".lSPager").find("li.active").index() : v = f.index(this), s.mode(!1), !0 === l.gallery && e.slideThumb(), !1
                        })
                    }, l.pager) {
                    var i = "lSpg";
                    l.gallery && (i = "lSGallery"), g.after('<ul class="lSPager ' + i + '"></ul>'), x.createPager()
                }
                setTimeout(function() {
                    x.init()
                }, 0)
            },
            setHeight: function(e, i) {
                var t = null,
                    n = this;
                t = l.loop ? e.children(".lslide ").first() : e.children().first();
                var a = function() {
                    var n = t.outerHeight(),
                        l = 0,
                        a = n;
                    i && (n = 0, l = 100 * a / h), e.css({
                        height: n + "px",
                        "padding-bottom": l + "%"
                    })
                };
                a(), t.find("img").length ? t.find("img")[0].complete ? (a(), T || n.auto()) : t.find("img").on("load", function() {
                    setTimeout(function() {
                        a(), T || n.auto()
                    }, 100)
                }) : T || n.auto()
            },
            active: function(e, i) {
                this.doCss() && "fade" === l.mode && g.addClass("on");
                var t, n, a = 0;
                v * l.slideMove < c ? (e.removeClass("active"), this.doCss() || "fade" !== l.mode || !1 !== i || e.fadeOut(l.speed), a = !0 === i ? v : v * l.slideMove, !0 === i && (n = (t = e.length) - 1, a + 1 >= t && (a = n)), !0 === l.loop && "slide" === l.mode && (a = !0 === i ? v - s.find(".clone.left").length : v * l.slideMove, !0 === i && (n = (t = e.length) - 1, a + 1 === t ? a = n : a + 1 > t && (a = 0))), this.doCss() || "fade" !== l.mode || !1 !== i || e.eq(a).fadeIn(l.speed), e.eq(a).addClass("active")) : (e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== l.mode || !1 !== i || (e.fadeOut(l.speed), e.eq(a).fadeIn(l.speed)))
            },
            move: function(e, i) {
                !0 === l.rtl && (i = -i), this.doCss() ? !0 === l.vertical ? e.css({
                    transform: "translate3d(0px, " + -i + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -i + "px, 0px)"
                }) : e.css({
                    transform: "translate3d(" + -i + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -i + "px, 0px, 0px)"
                }) : !0 === l.vertical ? e.css("position", "relative").animate({
                    top: -i + "px"
                }, l.speed, l.easing) : e.css("position", "relative").animate({
                    left: -i + "px"
                }, l.speed, l.easing);
                var t = g.parent().find(".lSPager").find("li");
                this.active(t, !0)
            },
            fade: function() {
                this.active(o, !1);
                var e = g.parent().find(".lSPager").find("li");
                this.active(e, !0)
            },
            slide: function() {
                var e = this;
                x.calSlide = function() {
                    u > h && (S = e.slideValue(), e.active(o, !1), S > u - h - l.slideMargin ? S = u - h - l.slideMargin : S < 0 && (S = 0), e.move(s, S), !0 === l.loop && "slide" === l.mode && (v >= c - s.find(".clone.left").length / l.slideMove && e.resetSlide(s.find(".clone.left").length), 0 === v && e.resetSlide(g.find(".lslide").length)))
                }, x.calSlide()
            },
            resetSlide: function(e) {
                var i = this;
                g.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    v = e, g.css("transition-duration", "0ms"), S = i.slideValue(), i.active(o, !1), n.move(s, S), setTimeout(function() {
                        g.css("transition-duration", l.speed + "ms"), g.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, l.speed + 100)
            },
            slideValue: function() {
                var e = 0;
                if (!1 === l.autoWidth) e = v * ((C + l.slideMargin) * l.slideMove);
                else {
                    e = 0;
                    for (var i = 0; i < v; i++) e += parseInt(o.eq(i).width()) + l.slideMargin
                }
                return e
            },
            slideThumb: function() {
                var e;
                switch (l.currentPagerPosition) {
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = h / 2 - M / 2;
                        break;
                    case "right":
                        e = h - M
                }
                var i = v - s.find(".clone.left").length,
                    t = g.parent().find(".lSPager");
                "slide" === l.mode && !0 === l.loop && (i >= t.children().length ? i = 0 : i < 0 && (i = t.children().length));
                var n = i * (M + l.thumbMargin) - e;
                n + h > b && (n = b - h - l.thumbMargin), n < 0 && (n = 0), this.move(t, n)
            },
            auto: function() {
                l.auto && (clearInterval(T), T = setInterval(function() {
                    s.goToNextSlide()
                }, l.pause))
            },
            pauseOnHover: function() {
                var i = this;
                l.auto && l.pauseOnHover && (g.on("mouseenter", function() {
                    e(this).addClass("ls-hover"), s.pause(), l.auto = !0
                }), g.on("mouseleave", function() {
                    e(this).removeClass("ls-hover"), g.find(".lightSlider").hasClass("lsGrabbing") || i.auto()
                }))
            },
            touchMove: function(e, i) {
                if (g.css("transition-duration", "0ms"), "slide" === l.mode) {
                    var t = S - (e - i);
                    if (t >= u - h - l.slideMargin)
                        if (!1 === l.freeMove) t = u - h - l.slideMargin;
                        else {
                            var n = u - h - l.slideMargin;
                            t = n + (t - n) / 5
                        }
                    else t < 0 && (!1 === l.freeMove ? t = 0 : t /= 5);
                    this.move(s, t)
                }
            },
            touchEnd: function(e) {
                if (g.css("transition-duration", l.speed + "ms"), "slide" === l.mode) {
                    var i = !1,
                        t = !0;
                    (S -= e) > u - h - l.slideMargin ? (S = u - h - l.slideMargin, !1 === l.autoWidth && (i = !0)) : S < 0 && (S = 0);
                    var n = function(e) {
                        var t = 0;
                        if (i || e && (t = 1), l.autoWidth)
                            for (var n = 0, a = 0; a < o.length && (n += parseInt(o.eq(a).width()) + l.slideMargin, v = a + t, !(n >= S)); a++);
                        else {
                            var s = S / ((C + l.slideMargin) * l.slideMove);
                            v = parseInt(s) + t, S >= u - h - l.slideMargin && s % 1 != 0 && v++
                        }
                    };
                    e >= l.swipeThreshold ? (n(!1), t = !1) : e <= -l.swipeThreshold && (n(!0), t = !1), s.mode(t), this.slideThumb()
                } else e >= l.swipeThreshold ? s.goToPrevSlide() : e <= -l.swipeThreshold && s.goToNextSlide()
            },
            enableDrag: function() {
                var i = this;
                if (!w) {
                    var t = 0,
                        n = 0,
                        a = !1;
                    g.find(".lightSlider").addClass("lsGrab"), g.on("mousedown", function(i) {
                        if (u < h && 0 !== u) return !1;
                        "lSPrev" !== e(i.target).attr("class") && "lSNext" !== e(i.target).attr("class") && (t = !0 === l.vertical ? i.pageY : i.pageX, a = !0, i.preventDefault ? i.preventDefault() : i.returnValue = !1, g.scrollLeft += 1, g.scrollLeft -= 1, g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(T))
                    }), e(window).on("mousemove", function(e) {
                        a && (n = !0 === l.vertical ? e.pageY : e.pageX, i.touchMove(n, t))
                    }), e(window).on("mouseup", function(s) {
                        if (a) {
                            g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), a = !1;
                            var o = (n = !0 === l.vertical ? s.pageY : s.pageX) - t;
                            Math.abs(o) >= l.swipeThreshold && e(window).on("click.ls", function(i) {
                                i.preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopImmediatePropagation(), i.stopPropagation(), e(window).off("click.ls")
                            }), i.touchEnd(o)
                        }
                    })
                }
            },
            enableTouch: function() {
                var e = this;
                if (w) {
                    var i = {},
                        t = {};
                    g.on("touchstart", function(e) {
                        t = e.originalEvent.targetTouches[0], i.pageX = e.originalEvent.targetTouches[0].pageX, i.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(T)
                    }), g.on("touchmove", function(n) {
                        if (u < h && 0 !== u) return !1;
                        var a = n.originalEvent;
                        t = a.targetTouches[0];
                        var s = Math.abs(t.pageX - i.pageX),
                            o = Math.abs(t.pageY - i.pageY);
                        !0 === l.vertical ? (3 * o > s && n.preventDefault(), e.touchMove(t.pageY, i.pageY)) : (3 * s > o && n.preventDefault(), e.touchMove(t.pageX, i.pageX))
                    }), g.on("touchend", function() {
                        if (u < h && 0 !== u) return !1;
                        var n;
                        n = !0 === l.vertical ? t.pageY - i.pageY : t.pageX - i.pageX, e.touchEnd(n)
                    })
                }
            },
            build: function() {
                var i = this;
                i.initialStyle(), this.doCss() && (!0 === l.enableTouch && i.enableTouch(), !0 === l.enableDrag && i.enableDrag()), e(window).on("focus", function() {
                    i.auto()
                }), e(window).on("blur", function() {
                    clearInterval(T)
                }), i.pager(), i.pauseOnHover(), i.controls(), i.keyPress()
            }
        }).build(), x.init = function() {
            x.chbreakpoint(), !0 === l.vertical ? (h = l.item > 1 ? l.verticalHeight : o.outerHeight(), g.css("height", h + "px")) : h = g.outerWidth(), !0 === l.loop && "slide" === l.mode && x.clone(), x.calL(), "slide" === l.mode && s.removeClass("lSSlide"), "slide" === l.mode && (x.calSW(), x.sSW()), setTimeout(function() {
                "slide" === l.mode && s.addClass("lSSlide")
            }, 1e3), l.pager && x.createPager(), !0 === l.adaptiveHeight && !1 === l.vertical && s.css("height", o.eq(v).outerHeight(!0)), !1 === l.adaptiveHeight && ("slide" === l.mode ? !1 === l.vertical ? n.setHeight(s, !1) : n.auto() : n.setHeight(s, !0)), !0 === l.gallery && n.slideThumb(), "slide" === l.mode && n.slide(), !1 === l.autoWidth ? o.length <= l.item ? g.find(".lSAction").hide() : g.find(".lSAction").show() : x.calWidth(!1) < h && 0 !== u ? g.find(".lSAction").hide() : g.find(".lSAction").show()
        }, s.goToPrevSlide = function() {
            if (v > 0) l.onBeforePrevSlide.call(this, s, v), v--, s.mode(!1), !0 === l.gallery && n.slideThumb();
            else if (!0 === l.loop) {
                if (l.onBeforePrevSlide.call(this, s, v), "fade" === l.mode) v = parseInt((c - 1) / l.slideMove);
                s.mode(!1), !0 === l.gallery && n.slideThumb()
            } else !0 === l.slideEndAnimation && (s.addClass("leftEnd"), setTimeout(function() {
                s.removeClass("leftEnd")
            }, 400))
        }, s.goToNextSlide = function() {
            var e = !0;
            "slide" === l.mode && (e = n.slideValue() < u - h - l.slideMargin);
            v * l.slideMove < c - l.slideMove && e ? (l.onBeforeNextSlide.call(this, s, v), v++, s.mode(!1), !0 === l.gallery && n.slideThumb()) : !0 === l.loop ? (l.onBeforeNextSlide.call(this, s, v), v = 0, s.mode(!1), !0 === l.gallery && n.slideThumb()) : !0 === l.slideEndAnimation && (s.addClass("rightEnd"), setTimeout(function() {
                s.removeClass("rightEnd")
            }, 400))
        }, s.mode = function(e) {
            !0 === l.adaptiveHeight && !1 === l.vertical && s.css("height", o.eq(v).outerHeight(!0)), !1 === f && ("slide" === l.mode ? n.doCss() && (s.addClass("lSSlide"), "" !== l.speed && g.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && g.css("transition-timing-function", l.cssEasing)) : n.doCss() && ("" !== l.speed && s.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && s.css("transition-timing-function", l.cssEasing))), e || l.onBeforeSlide.call(this, s, v), "slide" === l.mode ? n.slide() : n.fade(), g.hasClass("ls-hover") || n.auto(), setTimeout(function() {
                e || l.onAfterSlide.call(this, s, v)
            }, l.speed), f = !0
        }, s.play = function() {
            s.goToNextSlide(), l.auto = !0, n.auto()
        }, s.pause = function() {
            l.auto = !1, clearInterval(T)
        }, s.refresh = function() {
            x.init()
        }, s.getCurrentSlideCount = function() {
            var e = v;
            if (l.loop) {
                var i = g.find(".lslide").length,
                    t = s.find(".clone.left").length;
                e = v <= t - 1 ? i + (v - t) : v >= i + t ? v - i - t : v - t
            }
            return e + 1
        }, s.getTotalSlideCount = function() {
            return g.find(".lslide").length
        }, s.goToSlide = function(e) {
            v = l.loop ? e + s.find(".clone.left").length - 1 : e, s.mode(!1), !0 === l.gallery && n.slideThumb()
        }, s.destroy = function() {
            s.lightSlider && (s.goToPrevSlide = function() {}, s.goToNextSlide = function() {}, s.mode = function() {}, s.play = function() {}, s.pause = function() {}, s.refresh = function() {}, s.getCurrentSlideCount = function() {}, s.getTotalSlideCount = function() {}, s.goToSlide = function() {}, s.lightSlider = null, x = {
                init: function() {}
            }, s.parent().parent().find(".lSAction, .lSPager").remove(), s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), s.children().removeAttr("style"), o.removeClass("lslide active"), s.find(".clone").remove(), o = null, T = null, f = !1, v = 0)
        }, setTimeout(function() {
            l.onSliderLoad.call(this, s)
        }, 10), e(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1, x.init()
            }, 200)
        }), this
    }
}(jQuery);
! function(e, i) {
    "use strict";
    var t = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(e) {},
        onSliderLoad: function(e) {},
        onBeforeSlide: function(e, i) {},
        onAfterSlide: function(e, i) {},
        onBeforeNextSlide: function(e, i) {},
        onBeforePrevSlide: function(e, i) {}
    };
    e.fn.lightSlider = function(i) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            e(this).lightSlider(i)
        }), this;
        var n = {},
            l = e.extend(!0, {}, t, i),
            a = {},
            s = this;
        n.$el = this, "fade" === l.mode && (l.vertical = !1);
        var o = s.children(),
            r = e(window).width(),
            d = null,
            c = 0,
            u = 0,
            f = !1,
            h = 0,
            g = "",
            v = 0,
            p = !0 === l.vertical ? "height" : "width",
            m = !0 === l.vertical ? "margin-bottom" : "margin-right",
            S = 0,
            b = 0,
            C = 0,
            M = 0,
            T = null,
            w = "ontouchstart" in document.documentElement,
            x = {
                chbreakpoint: function() {
                    if (r = e(window).width(), l.responsive.length) {
                        var i;
                        if (!1 === l.autoWidth && (i = l.item), r < l.responsive[0].breakpoint)
                            for (var t = 0; t < l.responsive.length; t++) r < l.responsive[t].breakpoint && (l.responsive[t].breakpoint, d = l.responsive[t]);
                        if (null != d)
                            for (var n in d.settings) d.settings.hasOwnProperty(n) && (void 0 !== a[n] && null !== a[n] || (a[n] = l[n]), l[n] = d.settings[n]);
                        if (!e.isEmptyObject(a) && r > l.responsive[0].breakpoint)
                            for (var s in a) a.hasOwnProperty(s) && (l[s] = a[s]);
                        !1 === l.autoWidth && S > 0 && C > 0 && i !== l.item && (v = Math.round(S / ((C + l.slideMargin) * l.slideMove)))
                    }
                },
                calSW: function() {
                    !1 === l.autoWidth && (C = (h - (l.item * l.slideMargin - l.slideMargin)) / l.item)
                },
                calWidth: function(e) {
                    var i = !0 === e ? g.find(".lslide").length : o.length;
                    if (!1 === l.autoWidth) u = i * (C + l.slideMargin);
                    else {
                        u = 0;
                        for (var t = 0; t < i; t++) u += parseInt(o.eq(t).width()) + l.slideMargin
                    }
                    return u
                }
            };
        return (n = {
            doCss: function() {
                return !(!l.useCSS || ! function() {
                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], i = document.documentElement, t = 0; t < e.length; t++)
                        if (e[t] in i.style) return !0
                }())
            },
            keyPress: function() {
                l.keyPress && e(document).on("keyup.lightslider", function(i) {
                    e(":focus").is("input, textarea") || (i.preventDefault ? i.preventDefault() : i.returnValue = !1, 37 === i.keyCode ? s.goToPrevSlide() : 39 === i.keyCode && s.goToNextSlide())
                })
            },
            controls: function() {
                l.controls && (s.parent(".lSSlideWrapper").after('<div class="lSAction"><a class="lSPrev">' + l.prevHtml + '</a><a class="lSNext">' + l.nextHtml + "</a></div>"), l.autoWidth ? x.calWidth(!1) < h && g.find(".lSAction").hide() : c <= l.item && g.find(".lSAction").hide(), g.parent().find(".lSAction a").on("click", function(i) {
                    return i.preventDefault ? i.preventDefault() : i.returnValue = !1, "lSPrev" === e(this).attr("class") ? s.goToPrevSlide() : s.goToNextSlide(), !1
                }))
            },
            initialStyle: function() {
                var e = this;
                "fade" === l.mode && (l.autoWidth = !1, l.slideEndAnimation = !1), l.auto && (l.slideEndAnimation = !1), l.autoWidth && (l.slideMove = 1, l.item = 1), l.loop && (l.slideMove = 1, l.freeMove = !1), l.onBeforeStart.call(this, s), x.chbreakpoint(), s.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + l.addClass + '"><div class="lSSlideWrapper"></div></div>'), g = s.parent(".lSSlideWrapper"), !0 === l.rtl && g.parent().addClass("lSrtl"), l.vertical ? (g.parent().addClass("vertical"), h = l.verticalHeight, g.css("height", h + "px")) : h = s.outerWidth(), o.addClass("lslide"), !0 === l.loop && "slide" === l.mode && (x.calSW(), x.clone = function() {
                    if (x.calWidth(!0) > h) {
                        for (var i = 0, t = 0, n = 0; n < o.length && (t++, !((i += parseInt(s.find(".lslide").eq(n).width()) + l.slideMargin) >= h + l.slideMargin)); n++);
                        var a = !0 === l.autoWidth ? t : l.item;
                        if (a < s.find(".clone.left").length)
                            for (var r = 0; r < s.find(".clone.left").length - a; r++) o.eq(r).remove();
                        if (a < s.find(".clone.right").length)
                            for (var d = o.length - 1; d > o.length - 1 - s.find(".clone.right").length; d--) v--, o.eq(d).remove();
                        for (var c = s.find(".clone.right").length; c < a; c++) s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s), v++;
                        for (var u = s.find(".lslide").length - s.find(".clone.left").length; u > s.find(".lslide").length - a; u--) s.find(".lslide").eq(u - 1).clone().removeClass("lslide").addClass("clone left").prependTo(s);
                        o = s.children()
                    } else o.hasClass("clone") && (s.find(".clone").remove(), e.move(s, 0))
                }, x.clone()), x.sSW = function() {
                    c = o.length, !0 === l.rtl && !1 === l.vertical && (m = "margin-left"), !1 === l.autoWidth && o.css(p, C + "px"), o.css(m, l.slideMargin + "px"), u = x.calWidth(!1), s.css(p, u + "px"), !0 === l.loop && "slide" === l.mode && !1 === f && (v = s.find(".clone.left").length)
                }, x.calL = function() {
                    o = s.children(), c = o.length
                }, this.doCss() && g.addClass("usingCss"), x.calL(), "slide" === l.mode ? (x.calSW(), x.sSW(), !0 === l.loop && (S = e.slideValue(), this.move(s, S)), !1 === l.vertical && this.setHeight(s, !1)) : (this.setHeight(s, !0), s.addClass("lSFade"), this.doCss() || (o.fadeOut(0), o.eq(v).fadeIn(0))), !0 === l.loop && "slide" === l.mode ? o.eq(v).addClass("active") : o.first().addClass("active")
            },
            pager: function() {
                var e = this;
                if (x.createPager = function() {
                        M = (h - (l.thumbItem * l.thumbMargin - l.thumbMargin)) / l.thumbItem;
                        var i = g.find(".lslide"),
                            t = g.find(".lslide").length,
                            n = 0,
                            a = "",
                            o = 0;
                        for (n = 0; n < t; n++) {
                            "slide" === l.mode && (l.autoWidth ? o += (parseInt(i.eq(n).width()) + l.slideMargin) * l.slideMove : o = n * ((C + l.slideMargin) * l.slideMove));
                            var r = i.eq(n * l.slideMove).attr("data-thumb");
                            if (!0 === l.gallery ? a += '<li style="width:100%;' + p + ":" + M + "px;" + m + ":" + l.thumbMargin + 'px"><a href="#"><img src="' + r + '" /></a></li>' : a += '<li><a href="#">' + (n + 1) + "</a></li>", "slide" === l.mode && o >= u - h - l.slideMargin) {
                                n += 1;
                                var d = 2;
                                l.autoWidth && (a += '<li><a href="#">' + (n + 1) + "</a></li>", d = 1), n < d ? (a = null, g.parent().addClass("noPager")) : g.parent().removeClass("noPager");
                                break
                            }
                        }
                        var c = g.parent();
                        c.find(".lSPager").html(a), !0 === l.gallery && (!0 === l.vertical && c.find(".lSPager").css("width", l.vThumbWidth + "px"), b = n * (l.thumbMargin + M) + .5, c.find(".lSPager").css({
                            property: b + "px",
                            "transition-duration": l.speed + "ms"
                        }), !0 === l.vertical && g.parent().css("padding-right", l.vThumbWidth + l.galleryMargin + "px"), c.find(".lSPager").css(p, b + "px"));
                        var f = c.find(".lSPager").find("li");
                        f.first().addClass("active"), f.on("click", function() {
                            return !0 === l.loop && "slide" === l.mode ? v += f.index(this) - c.find(".lSPager").find("li.active").index() : v = f.index(this), s.mode(!1), !0 === l.gallery && e.slideThumb(), !1
                        })
                    }, l.pager) {
                    var i = "lSpg";
                    l.gallery && (i = "lSGallery"), g.after('<ul class="lSPager ' + i + '"></ul>'), x.createPager()
                }
                setTimeout(function() {
                    x.init()
                }, 0)
            },
            setHeight: function(e, i) {
                var t = null,
                    n = this;
                t = l.loop ? e.children(".lslide ").first() : e.children().first();
                var a = function() {
                    var n = t.outerHeight(),
                        l = 0,
                        a = n;
                    i && (n = 0, l = 100 * a / h), e.css({
                        height: n + "px",
                        "padding-bottom": l + "%"
                    })
                };
                a(), t.find("img").length ? t.find("img")[0].complete ? (a(), T || n.auto()) : t.find("img").on("load", function() {
                    setTimeout(function() {
                        a(), T || n.auto()
                    }, 100)
                }) : T || n.auto()
            },
            active: function(e, i) {
                this.doCss() && "fade" === l.mode && g.addClass("on");
                var t, n, a = 0;
                v * l.slideMove < c ? (e.removeClass("active"), this.doCss() || "fade" !== l.mode || !1 !== i || e.fadeOut(l.speed), a = !0 === i ? v : v * l.slideMove, !0 === i && (n = (t = e.length) - 1, a + 1 >= t && (a = n)), !0 === l.loop && "slide" === l.mode && (a = !0 === i ? v - s.find(".clone.left").length : v * l.slideMove, !0 === i && (n = (t = e.length) - 1, a + 1 === t ? a = n : a + 1 > t && (a = 0))), this.doCss() || "fade" !== l.mode || !1 !== i || e.eq(a).fadeIn(l.speed), e.eq(a).addClass("active")) : (e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== l.mode || !1 !== i || (e.fadeOut(l.speed), e.eq(a).fadeIn(l.speed)))
            },
            move: function(e, i) {
                !0 === l.rtl && (i = -i), this.doCss() ? !0 === l.vertical ? e.css({
                    transform: "translate3d(0px, " + -i + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -i + "px, 0px)"
                }) : e.css({
                    transform: "translate3d(" + -i + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -i + "px, 0px, 0px)"
                }) : !0 === l.vertical ? e.css("position", "relative").animate({
                    top: -i + "px"
                }, l.speed, l.easing) : e.css("position", "relative").animate({
                    left: -i + "px"
                }, l.speed, l.easing);
                var t = g.parent().find(".lSPager").find("li");
                this.active(t, !0)
            },
            fade: function() {
                this.active(o, !1);
                var e = g.parent().find(".lSPager").find("li");
                this.active(e, !0)
            },
            slide: function() {
                var e = this;
                x.calSlide = function() {
                    u > h && (S = e.slideValue(), e.active(o, !1), S > u - h - l.slideMargin ? S = u - h - l.slideMargin : S < 0 && (S = 0), e.move(s, S), !0 === l.loop && "slide" === l.mode && (v >= c - s.find(".clone.left").length / l.slideMove && e.resetSlide(s.find(".clone.left").length), 0 === v && e.resetSlide(g.find(".lslide").length)))
                }, x.calSlide()
            },
            resetSlide: function(e) {
                var i = this;
                g.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    v = e, g.css("transition-duration", "0ms"), S = i.slideValue(), i.active(o, !1), n.move(s, S), setTimeout(function() {
                        g.css("transition-duration", l.speed + "ms"), g.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, l.speed + 100)
            },
            slideValue: function() {
                var e = 0;
                if (!1 === l.autoWidth) e = v * ((C + l.slideMargin) * l.slideMove);
                else {
                    e = 0;
                    for (var i = 0; i < v; i++) e += parseInt(o.eq(i).width()) + l.slideMargin
                }
                return e
            },
            slideThumb: function() {
                var e;
                switch (l.currentPagerPosition) {
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = h / 2 - M / 2;
                        break;
                    case "right":
                        e = h - M
                }
                var i = v - s.find(".clone.left").length,
                    t = g.parent().find(".lSPager");
                "slide" === l.mode && !0 === l.loop && (i >= t.children().length ? i = 0 : i < 0 && (i = t.children().length));
                var n = i * (M + l.thumbMargin) - e;
                n + h > b && (n = b - h - l.thumbMargin), n < 0 && (n = 0), this.move(t, n)
            },
            auto: function() {
                l.auto && (clearInterval(T), T = setInterval(function() {
                    s.goToNextSlide()
                }, l.pause))
            },
            pauseOnHover: function() {
                var i = this;
                l.auto && l.pauseOnHover && (g.on("mouseenter", function() {
                    e(this).addClass("ls-hover"), s.pause(), l.auto = !0
                }), g.on("mouseleave", function() {
                    e(this).removeClass("ls-hover"), g.find(".lightSlider").hasClass("lsGrabbing") || i.auto()
                }))
            },
            touchMove: function(e, i) {
                if (g.css("transition-duration", "0ms"), "slide" === l.mode) {
                    var t = S - (e - i);
                    if (t >= u - h - l.slideMargin)
                        if (!1 === l.freeMove) t = u - h - l.slideMargin;
                        else {
                            var n = u - h - l.slideMargin;
                            t = n + (t - n) / 5
                        }
                    else t < 0 && (!1 === l.freeMove ? t = 0 : t /= 5);
                    this.move(s, t)
                }
            },
            touchEnd: function(e) {
                if (g.css("transition-duration", l.speed + "ms"), "slide" === l.mode) {
                    var i = !1,
                        t = !0;
                    (S -= e) > u - h - l.slideMargin ? (S = u - h - l.slideMargin, !1 === l.autoWidth && (i = !0)) : S < 0 && (S = 0);
                    var n = function(e) {
                        var t = 0;
                        if (i || e && (t = 1), l.autoWidth)
                            for (var n = 0, a = 0; a < o.length && (n += parseInt(o.eq(a).width()) + l.slideMargin, v = a + t, !(n >= S)); a++);
                        else {
                            var s = S / ((C + l.slideMargin) * l.slideMove);
                            v = parseInt(s) + t, S >= u - h - l.slideMargin && s % 1 != 0 && v++
                        }
                    };
                    e >= l.swipeThreshold ? (n(!1), t = !1) : e <= -l.swipeThreshold && (n(!0), t = !1), s.mode(t), this.slideThumb()
                } else e >= l.swipeThreshold ? s.goToPrevSlide() : e <= -l.swipeThreshold && s.goToNextSlide()
            },
            enableDrag: function() {
                var i = this;
                if (!w) {
                    var t = 0,
                        n = 0,
                        a = !1;
                    g.find(".lightSlider").addClass("lsGrab"), g.on("mousedown", function(i) {
                        if (u < h && 0 !== u) return !1;
                        "lSPrev" !== e(i.target).attr("class") && "lSNext" !== e(i.target).attr("class") && (t = !0 === l.vertical ? i.pageY : i.pageX, a = !0, i.preventDefault ? i.preventDefault() : i.returnValue = !1, g.scrollLeft += 1, g.scrollLeft -= 1, g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(T))
                    }), e(window).on("mousemove", function(e) {
                        a && (n = !0 === l.vertical ? e.pageY : e.pageX, i.touchMove(n, t))
                    }), e(window).on("mouseup", function(s) {
                        if (a) {
                            g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"), a = !1;
                            var o = (n = !0 === l.vertical ? s.pageY : s.pageX) - t;
                            Math.abs(o) >= l.swipeThreshold && e(window).on("click.ls", function(i) {
                                i.preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopImmediatePropagation(), i.stopPropagation(), e(window).off("click.ls")
                            }), i.touchEnd(o)
                        }
                    })
                }
            },
            enableTouch: function() {
                var e = this;
                if (w) {
                    var i = {},
                        t = {};
                    g.on("touchstart", function(e) {
                        t = e.originalEvent.targetTouches[0], i.pageX = e.originalEvent.targetTouches[0].pageX, i.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(T)
                    }), g.on("touchmove", function(n) {
                        if (u < h && 0 !== u) return !1;
                        var a = n.originalEvent;
                        t = a.targetTouches[0];
                        var s = Math.abs(t.pageX - i.pageX),
                            o = Math.abs(t.pageY - i.pageY);
                        !0 === l.vertical ? (3 * o > s && n.preventDefault(), e.touchMove(t.pageY, i.pageY)) : (3 * s > o && n.preventDefault(), e.touchMove(t.pageX, i.pageX))
                    }), g.on("touchend", function() {
                        if (u < h && 0 !== u) return !1;
                        var n;
                        n = !0 === l.vertical ? t.pageY - i.pageY : t.pageX - i.pageX, e.touchEnd(n)
                    })
                }
            },
            build: function() {
                var i = this;
                i.initialStyle(), this.doCss() && (!0 === l.enableTouch && i.enableTouch(), !0 === l.enableDrag && i.enableDrag()), e(window).on("focus", function() {
                    i.auto()
                }), e(window).on("blur", function() {
                    clearInterval(T)
                }), i.pager(), i.pauseOnHover(), i.controls(), i.keyPress()
            }
        }).build(), x.init = function() {
            x.chbreakpoint(), !0 === l.vertical ? (h = l.item > 1 ? l.verticalHeight : o.outerHeight(), g.css("height", h + "px")) : h = g.outerWidth(), !0 === l.loop && "slide" === l.mode && x.clone(), x.calL(), "slide" === l.mode && s.removeClass("lSSlide"), "slide" === l.mode && (x.calSW(), x.sSW()), setTimeout(function() {
                "slide" === l.mode && s.addClass("lSSlide")
            }, 1e3), l.pager && x.createPager(), !0 === l.adaptiveHeight && !1 === l.vertical && s.css("height", o.eq(v).outerHeight(!0)), !1 === l.adaptiveHeight && ("slide" === l.mode ? !1 === l.vertical ? n.setHeight(s, !1) : n.auto() : n.setHeight(s, !0)), !0 === l.gallery && n.slideThumb(), "slide" === l.mode && n.slide(), !1 === l.autoWidth ? o.length <= l.item ? g.find(".lSAction").hide() : g.find(".lSAction").show() : x.calWidth(!1) < h && 0 !== u ? g.find(".lSAction").hide() : g.find(".lSAction").show()
        }, s.goToPrevSlide = function() {
            if (v > 0) l.onBeforePrevSlide.call(this, s, v), v--, s.mode(!1), !0 === l.gallery && n.slideThumb();
            else if (!0 === l.loop) {
                if (l.onBeforePrevSlide.call(this, s, v), "fade" === l.mode) v = parseInt((c - 1) / l.slideMove);
                s.mode(!1), !0 === l.gallery && n.slideThumb()
            } else !0 === l.slideEndAnimation && (s.addClass("leftEnd"), setTimeout(function() {
                s.removeClass("leftEnd")
            }, 400))
        }, s.goToNextSlide = function() {
            var e = !0;
            "slide" === l.mode && (e = n.slideValue() < u - h - l.slideMargin);
            v * l.slideMove < c - l.slideMove && e ? (l.onBeforeNextSlide.call(this, s, v), v++, s.mode(!1), !0 === l.gallery && n.slideThumb()) : !0 === l.loop ? (l.onBeforeNextSlide.call(this, s, v), v = 0, s.mode(!1), !0 === l.gallery && n.slideThumb()) : !0 === l.slideEndAnimation && (s.addClass("rightEnd"), setTimeout(function() {
                s.removeClass("rightEnd")
            }, 400))
        }, s.mode = function(e) {
            !0 === l.adaptiveHeight && !1 === l.vertical && s.css("height", o.eq(v).outerHeight(!0)), !1 === f && ("slide" === l.mode ? n.doCss() && (s.addClass("lSSlide"), "" !== l.speed && g.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && g.css("transition-timing-function", l.cssEasing)) : n.doCss() && ("" !== l.speed && s.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && s.css("transition-timing-function", l.cssEasing))), e || l.onBeforeSlide.call(this, s, v), "slide" === l.mode ? n.slide() : n.fade(), g.hasClass("ls-hover") || n.auto(), setTimeout(function() {
                e || l.onAfterSlide.call(this, s, v)
            }, l.speed), f = !0
        }, s.play = function() {
            s.goToNextSlide(), l.auto = !0, n.auto()
        }, s.pause = function() {
            l.auto = !1, clearInterval(T)
        }, s.refresh = function() {
            x.init()
        }, s.getCurrentSlideCount = function() {
            var e = v;
            if (l.loop) {
                var i = g.find(".lslide").length,
                    t = s.find(".clone.left").length;
                e = v <= t - 1 ? i + (v - t) : v >= i + t ? v - i - t : v - t
            }
            return e + 1
        }, s.getTotalSlideCount = function() {
            return g.find(".lslide").length
        }, s.goToSlide = function(e) {
            v = l.loop ? e + s.find(".clone.left").length - 1 : e, s.mode(!1), !0 === l.gallery && n.slideThumb()
        }, s.destroy = function() {
            s.lightSlider && (s.goToPrevSlide = function() {}, s.goToNextSlide = function() {}, s.mode = function() {}, s.play = function() {}, s.pause = function() {}, s.refresh = function() {}, s.getCurrentSlideCount = function() {}, s.getTotalSlideCount = function() {}, s.goToSlide = function() {}, s.lightSlider = null, x = {
                init: function() {}
            }, s.parent().parent().find(".lSAction, .lSPager").remove(), s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), s.children().removeAttr("style"), o.removeClass("lslide active"), s.find(".clone").remove(), o = null, T = null, f = !1, v = 0)
        }, setTimeout(function() {
            l.onSliderLoad.call(this, s)
        }, 10), e(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1, x.init()
            }, 200)
        }), this
    }
}(jQuery);






/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);





/**
 * Leaflet
 * @version v1.3.4
 * @link https://leafletjs.com/
 * @author Vladimir Agafonkin
 * @license The MIT License (MIT)
 **/
 ! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function(t) {
    "use strict";

    function i(t) {
        var i, e, n, o;
        for (e = 1, n = arguments.length; e < n; e++)
            for (i in o = arguments[e]) t[i] = o[i];
        return t
    }

    function e(t, i) {
        var e = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function() {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._leaflet_id = t._leaflet_id || ++Gt, t._leaflet_id
    }

    function o(t, i, e) {
        var n, o, s, r;
        return r = function() {
            n = !1, o && (s.apply(e, o), o = !1)
        }, s = function() {
            n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
        }
    }

    function s(t, i, e) {
        var n = i[1],
            o = i[0],
            s = n - o;
        return t === n && e ? t : ((t - o) % s + s) % s + o
    }

    function r() {
        return !1
    }

    function a(t, i) {
        var e = Math.pow(10, void 0 === i ? 6 : i);
        return Math.round(t * e) / e
    }

    function h(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function u(t) {
        return h(t).split(/\s+/)
    }

    function l(t, i) {
        for (var e in t.hasOwnProperty("options") || (t.options = t.options ? Vt(t.options) : {}), i) t.options[e] = i[e];
        return t.options
    }

    function c(t, i, e) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
    }

    function _(t, i) {
        return t.replace(Kt, function(t, e) {
            var n = i[e];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(i)), n
        })
    }

    function d(t, i) {
        for (var e = 0; e < t.length; e++)
            if (t[e] === i) return e;
        return -1
    }

    function p(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var i = +new Date,
            e = Math.max(0, 16 - (i - Jt));
        return Jt = i + e, window.setTimeout(t, e)
    }

    function f(t, i, n) {
        if (!n || $t !== m) return $t.call(window, e(t, i));
        t.call(i)
    }

    function g(t) {
        t && Qt.call(window, t)
    }

    function v() {}

    function y(t, i, e) {
        this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
    }

    function x(t, i, e) {
        return t instanceof y ? t : Yt(t) ? new y(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new y(t.x, t.y) : new y(t, i, e)
    }

    function w(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function P(t, i) {
        return !t || t instanceof w ? t : new w(t, i)
    }

    function b(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function T(t, i) {
        return t instanceof b ? t : new b(t, i)
    }

    function z(t, i, e) {
        if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
        this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
    }

    function M(t, i, e) {
        return t instanceof z ? t : Yt(t) && "object" != typeof t[0] ? 3 === t.length ? new z(t[0], t[1], t[2]) : 2 === t.length ? new z(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new z(t, i, e)
    }

    function C(t, i, e, n) {
        if (Yt(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = i, this._c = e, this._d = n
    }

    function S(t, i, e, n) {
        return new C(t, i, e, n)
    }

    function Z(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function E(t, i) {
        var e, n, o, s, r, a, h = "";
        for (e = 0, o = t.length; e < o; e++) {
            for (n = 0, s = (r = t[e]).length; n < s; n++) h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
            h += i ? Hi ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function k(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function A(t, i, e, n) {
        return "touchstart" === i ? B(t, e, n) : "touchmove" === i ? function(t, i, e) {
            var n = function(t) {
                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && D(t, i)
            };
            t["_leaflet_touchmove" + e] = n, t.addEventListener(Vi, n, !1)
        }(t, e, n) : "touchend" === i && function(t, i, e) {
            var n = function(t) {
                D(t, i)
            };
            t["_leaflet_touchend" + e] = n, t.addEventListener(Gi, n, !1), t.addEventListener(Ki, n, !1)
        }(t, e, n), this
    }

    function B(t, i, n) {
        var o = e(function(t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Yi.indexOf(t.target.tagName) < 0)) return;
                gt(t)
            }
            D(t, i)
        });
        t["_leaflet_touchstart" + n] = o, t.addEventListener(Ui, o, !1), Ji || (document.documentElement.addEventListener(Ui, I, !0), document.documentElement.addEventListener(Vi, O, !0), document.documentElement.addEventListener(Gi, R, !0), document.documentElement.addEventListener(Ki, R, !0), Ji = !0)
    }

    function I(t) {
        Xi[t.pointerId] = t, $i++
    }

    function O(t) {
        Xi[t.pointerId] && (Xi[t.pointerId] = t)
    }

    function R(t) {
        delete Xi[t.pointerId], $i--
    }

    function D(t, i) {
        for (var e in t.touches = [], Xi) t.touches.push(Xi[e]);
        t.changedTouches = [t], i(t)
    }

    function N(t, i, e) {
        function n(t) {
            var i;
            if (Oi) {
                if (!mi || "mouse" === t.pointerType) return;
                i = $i
            } else i = t.touches.length;
            if (!(i > 1)) {
                var e = Date.now(),
                    n = e - (s || e);
                r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
            }
        }

        function o(t) {
            if (a && !r.cancelBubble) {
                if (Oi) {
                    if (!mi || "mouse" === t.pointerType) return;
                    var e, n, o = {};
                    for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
                    r = o
                }
                r.type = "dblclick", i(r), s = null
            }
        }
        var s, r, a = !1,
            h = 250;
        return t[ie + Qi + e] = n, t[ie + te + e] = o, t[ie + "dblclick" + e] = i, t.addEventListener(Qi, n, !1), t.addEventListener(te, o, !1), t.addEventListener("dblclick", i, !1), this
    }

    function j(t, i) {
        var e = t[ie + Qi + i],
            n = t[ie + te + i],
            o = t[ie + "dblclick" + i];
        return t.removeEventListener(Qi, e, !1), t.removeEventListener(te, n, !1), mi || t.removeEventListener("dblclick", o, !1), this
    }

    function W(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function H(t, i) {
        var e = t.style[i] || t.currentStyle && t.currentStyle[i];
        if ((!e || "auto" === e) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            e = n ? n[i] : null
        }
        return "auto" === e ? null : e
    }

    function F(t, i, e) {
        var n = document.createElement(t);
        return n.className = i || "", e && e.appendChild(n), n
    }

    function q(t) {
        var i = t.parentNode;
        i && i.removeChild(t)
    }

    function U(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function V(t) {
        var i = t.parentNode;
        i.lastChild !== t && i.appendChild(t)
    }

    function G(t) {
        var i = t.parentNode;
        i.firstChild !== t && i.insertBefore(t, i.firstChild)
    }

    function K(t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var e = $(t);
        return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
    }

    function Y(t, i) {
        if (void 0 !== t.classList)
            for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
        else if (!K(t, i)) {
            var s = $(t);
            J(t, (s ? s + " " : "") + i)
        }
    }

    function X(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : J(t, h((" " + $(t) + " ").replace(" " + i + " ", " ")))
    }

    function J(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
    }

    function $(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function Q(t, i) {
        "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function(t, i) {
            var e = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                e = t.filters.item(n)
            } catch (t) {
                if (1 === i) return
            }
            i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
        }(t, i)
    }

    function tt(t) {
        for (var i = document.documentElement.style, e = 0; e < t.length; e++)
            if (t[e] in i) return t[e];
        return !1
    }

    function it(t, i, e) {
        var n = i || new y(0, 0);
        t.style[ee] = (Ci ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
    }

    function et(t, i) {
        t._leaflet_pos = i, Ei ? it(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
    }

    function nt(t) {
        return t._leaflet_pos || new y(0, 0)
    }

    function ot() {
        lt(window, "dragstart", gt)
    }

    function st() {
        ct(window, "dragstart", gt)
    }

    function rt(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (at(), re = t, ae = t.style.outline, t.style.outline = "none", lt(window, "keydown", at))
    }

    function at() {
        re && (re.style.outline = ae, re = void 0, ae = void 0, ct(window, "keydown", at))
    }

    function ht(t) {
        do {
            t = t.parentNode
        } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
        return t
    }

    function ut(t) {
        var i = t.getBoundingClientRect();
        return {
            x: i.width / t.offsetWidth || 1,
            y: i.height / t.offsetHeight || 1,
            boundingClientRect: i
        }
    }

    function lt(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) _t(t, o, i[o], e);
        else
            for (var s = 0, r = (i = u(i)).length; s < r; s++) _t(t, i[s], e, n);
        return this
    }

    function ct(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) dt(t, o, i[o], e);
        else if (i)
            for (var s = 0, r = (i = u(i)).length; s < r; s++) dt(t, i[s], e, n);
        else {
            for (var a in t[le]) dt(t, a, t[le][a]);
            delete t[le]
        }
        return this
    }

    function _t(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : "");
        if (t[le] && t[le][s]) return this;
        var r = function(i) {
                return e.call(o || t, i || window.event)
            },
            a = r;
        Oi && 0 === i.indexOf("touch") ? A(t, i, r, s) : !Ri || "dblclick" !== i || !N || Oi && Li ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) {
            i = i || window.event, Pt(t, i) && a(i)
        }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && gi && (r = function(t) {
            ! function(t, i) {
                var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                    n = he && e - he;
                n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? vt(t) : (he = e, i(t))
            }(t, a)
        }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : N(t, r, s), t[le] = t[le] || {}, t[le][s] = r
    }

    function dt(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : ""),
            r = t[le] && t[le][s];
        if (!r) return this;
        Oi && 0 === i.indexOf("touch") ? function(t, i, e) {
            var n = t["_leaflet_" + i + e];
            "touchstart" === i ? t.removeEventListener(Ui, n, !1) : "touchmove" === i ? t.removeEventListener(Vi, n, !1) : "touchend" === i && (t.removeEventListener(Gi, n, !1), t.removeEventListener(Ki, n, !1))
        }(t, i, s) : !Ri || "dblclick" !== i || !j || Oi && Li ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : j(t, s), t[le][s] = null
    }

    function pt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Lt(t), this
    }

    function mt(t) {
        return _t(t, "mousewheel", pt), this
    }

    function ft(t) {
        return lt(t, "mousedown touchstart dblclick", pt), _t(t, "click", wt), this
    }

    function gt(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function vt(t) {
        return gt(t), pt(t), this
    }

    function yt(t, i) {
        if (!i) return new y(t.clientX, t.clientY);
        var e = ut(i),
            n = e.boundingClientRect;
        return new y((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
    }

    function xt(t) {
        return mi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ce : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function wt(t) {
        _e[t.type] = !0
    }

    function Lt(t) {
        var i = _e[t.type];
        return _e[t.type] = !1, i
    }

    function Pt(t, i) {
        var e = i.relatedTarget;
        if (!e) return !0;
        try {
            for (; e && e !== t;) e = e.parentNode
        } catch (t) {
            return !1
        }
        return e !== t
    }

    function bt(t, i) {
        if (!i || !t.length) return t.slice();
        var e = i * i;
        return function(t, i) {
            var e = t.length,
                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
            n[0] = n[e - 1] = 1,
                function t(i, e, n, o, s) {
                    var r, a, h, u = 0;
                    for (a = o + 1; a <= s - 1; a++)(h = Zt(i[a], i[o], i[s], !0)) > u && (r = a, u = h);
                    u > n && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s))
                }(t, n, i, 0, e - 1);
            var o, s = [];
            for (o = 0; o < e; o++) n[o] && s.push(t[o]);
            return s
        }(t = function(t, i) {
            for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) St(t[n], t[o]) > i && (e.push(t[n]), o = n);
            return o < s - 1 && e.push(t[s - 1]), e
        }(t, e), e)
    }

    function Tt(t, i, e) {
        return Math.sqrt(Zt(t, i, e, !0))
    }

    function zt(t, i, e, n, o) {
        var s, r, a, h = n ? Pe : Ct(t, e),
            u = Ct(i, e);
        for (Pe = u;;) {
            if (!(h | u)) return [t, i];
            if (h & u) return !1;
            a = Ct(r = Mt(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
        }
    }

    function Mt(t, i, e, n, o) {
        var s, r, a = i.x - t.x,
            h = i.y - t.y,
            u = n.min,
            l = n.max;
        return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new y(s, r, o)
    }

    function Ct(t, i) {
        var e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
    }

    function St(t, i) {
        var e = i.x - t.x,
            n = i.y - t.y;
        return e * e + n * n
    }

    function Zt(t, i, e, n) {
        var o, s = i.x,
            r = i.y,
            a = e.x - s,
            h = e.y - r,
            u = a * a + h * h;
        return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new y(s, r)
    }

    function Et(t) {
        return !Yt(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function kt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Et(t)
    }

    function At(t, i, e) {
        var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
        for (o = 0, u = t.length; o < u; o++) t[o]._code = Ct(t[o], i);
        for (r = 0; r < 4; r++) {
            for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = Mt(h, a, l, i, e))._code = Ct(c, i), n.push(c)) : (h._code & l && ((c = Mt(h, a, l, i, e))._code = Ct(c, i), n.push(c)), n.push(a));
            t = n
        }
        return t
    }

    function Bt(t, i) {
        var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            u = i && i.pointToLayer,
            l = i && i.coordsToLatLng || It;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return e = l(a), u ? u(t, e) : new Fe(e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new Fe(e));
                return new Ne(h);
            case "LineString":
            case "MultiLineString":
                return n = Ot(a, "LineString" === r.type ? 0 : 1, l), new Ge(n, i);
            case "Polygon":
            case "MultiPolygon":
                return n = Ot(a, "Polygon" === r.type ? 1 : 2, l), new Ke(n, i);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = Bt({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, i);
                    c && h.push(c)
                }
                return new Ne(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function It(t) {
        return new z(t[1], t[0], t[2])
    }

    function Ot(t, i, e) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Ot(t[s], i - 1, e) : (e || It)(t[s]), o.push(n);
        return o
    }

    function Rt(t, i) {
        return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
    }

    function Dt(t, i, e, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Dt(t[s], i - 1, e, n) : Rt(t[s], n));
        return !i && e && o.push(o[0]), o
    }

    function Nt(t, e) {
        return t.feature ? i({}, t.feature, {
            geometry: e
        }) : jt(e)
    }

    function jt(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function Wt(t, i) {
        return new Ye(t, i)
    }

    function Ht(t, i) {
        return new rn(t, i)
    }

    function Ft(t) {
        return Wi ? new un(t) : null
    }

    function qt(t) {
        return Hi || Fi ? new dn(t) : null
    }
    var Ut = Object.freeze;
    Object.freeze = function(t) {
        return t
    };
    var Vt = Object.create || function() {
            function t() {}
            return function(i) {
                return t.prototype = i, new t
            }
        }(),
        Gt = 0,
        Kt = /\{ *([\w_-]+) *\}/g,
        Yt = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        Xt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        Jt = 0,
        $t = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
        Qt = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        },
        ti = (Object.freeze || Object)({
            freeze: Ut,
            extend: i,
            create: Vt,
            bind: e,
            lastId: Gt,
            stamp: n,
            throttle: o,
            wrapNum: s,
            falseFn: r,
            formatNum: a,
            trim: h,
            splitWords: u,
            setOptions: l,
            getParamString: c,
            template: _,
            isArray: Yt,
            indexOf: d,
            emptyImageUrl: Xt,
            requestFn: $t,
            cancelFn: Qt,
            requestAnimFrame: f,
            cancelAnimFrame: g
        });
    v.extend = function(t) {
        var e = function() {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
            },
            n = e.__super__ = this.prototype,
            o = Vt(n);
        for (var s in o.constructor = e, e.prototype = o, this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
        return t.statics && (i(e, t.statics), delete t.statics), t.includes && (function(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = Yt(t) ? t : [t];
                for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(Vt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
            }
        }, e
    }, v.include = function(t) {
        return i(this.prototype, t), this
    }, v.mergeOptions = function(t) {
        return i(this.prototype.options, t), this
    }, v.addInitHook = function(t) {
        var i = Array.prototype.slice.call(arguments, 1),
            e = "function" == typeof t ? t : function() {
                this[t].apply(this, i)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
    };
    var ii = {
        on: function(t, i, e) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], i);
            else
                for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
            return this
        },
        off: function(t, i, e) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], i);
                else
                    for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
            else delete this._events;
            return this
        },
        _on: function(t, i, e) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), e === this && (e = void 0);
            for (var o = {
                    fn: i,
                    ctx: e
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === i && s[r].ctx === e) return;
            s.push(o)
        },
        _off: function(t, i, e) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (i) {
                    if (e === this && (e = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var a = n[o];
                            if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
                    delete this._events[t]
                }
        },
        fire: function(t, e, n) {
            if (!this.listens(t, n)) return this;
            var o = i({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var r = 0, a = s.length; r < a; r++) {
                        var h = s[r];
                        h.fn.call(h.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        },
        listens: function(t, i) {
            var e = this._events && this._events[t];
            if (e && e.length) return !0;
            if (i)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, i)) return !0;
            return !1
        },
        once: function(t, i, n) {
            if ("object" == typeof t) {
                for (var o in t) this.once(o, t[o], i);
                return this
            }
            var s = e(function() {
                this.off(t, i, n).off(t, s, n)
            }, this);
            return this.on(t, i, n).on(t, s, n)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    ii.addEventListener = ii.on, ii.removeEventListener = ii.clearAllEventListeners = ii.off, ii.addOneTimeEventListener = ii.once, ii.fireEvent = ii.fire, ii.hasEventListeners = ii.listens;
    var ei = v.extend(ii),
        ni = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };
    y.prototype = {
        clone: function() {
            return new y(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(x(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(x(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function(t) {
            return new y(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new y(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = ni(this.x), this.y = ni(this.y), this
        },
        distanceTo: function(t) {
            var i = (t = x(t)).x - this.x,
                e = t.y - this.y;
            return Math.sqrt(i * i + e * e)
        },
        equals: function(t) {
            return (t = x(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = x(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + a(this.x) + ", " + a(this.y) + ")"
        }
    }, w.prototype = {
        extend: function(t) {
            return t = x(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new y((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new y(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new y(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var i, e;
            return (t = "number" == typeof t[0] || t instanceof y ? x(t) : P(t)) instanceof w ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        },
        intersects: function(t) {
            t = P(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= i.x && n.x <= e.x,
                r = o.y >= i.y && n.y <= e.y;
            return s && r
        },
        overlaps: function(t) {
            t = P(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x > i.x && n.x < e.x,
                r = o.y > i.y && n.y < e.y;
            return s && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    }, b.prototype = {
        extend: function(t) {
            var i, e, n = this._southWest,
                o = this._northEast;
            if (t instanceof z) i = t, e = t;
            else {
                if (!(t instanceof b)) return t ? this.extend(M(t) || T(t)) : this;
                if (i = t._southWest, e = t._northEast, !i || !e) return this
            }
            return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new z(i.lat, i.lng), this._northEast = new z(e.lat, e.lng)), this
        },
        pad: function(t) {
            var i = this._southWest,
                e = this._northEast,
                n = Math.abs(i.lat - e.lat) * t,
                o = Math.abs(i.lng - e.lng) * t;
            return new b(new z(i.lat - n, i.lng - o), new z(e.lat + n, e.lng + o))
        },
        getCenter: function() {
            return new z((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new z(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new z(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof z || "lat" in t ? M(t) : T(t);
            var i, e, n = this._southWest,
                o = this._northEast;
            return t instanceof b ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        },
        intersects: function(t) {
            t = T(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= i.lat && n.lat <= e.lat,
                r = o.lng >= i.lng && n.lng <= e.lng;
            return s && r
        },
        overlaps: function(t) {
            t = T(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > i.lat && n.lat < e.lat,
                r = o.lng > i.lng && n.lng < e.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, i) {
            return !!t && (t = T(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    }, z.prototype = {
        equals: function(t, i) {
            return !!t && (t = M(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
        },
        toString: function(t) {
            return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
        },
        distanceTo: function(t) {
            return si.distance(this, M(t))
        },
        wrap: function() {
            return si.wrapLatLng(this)
        },
        toBounds: function(t) {
            var i = 180 * t / 40075017,
                e = i / Math.cos(Math.PI / 180 * this.lat);
            return T([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
        },
        clone: function() {
            return new z(this.lat, this.lng, this.alt)
        }
    };
    var oi = {
            latLngToPoint: function(t, i) {
                var e = this.projection.project(t),
                    n = this.scale(i);
                return this.transformation._transform(e, n)
            },
            pointToLatLng: function(t, i) {
                var e = this.scale(i),
                    n = this.transformation.untransform(t, e);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite) return null;
                var i = this.projection.bounds,
                    e = this.scale(t);
                return new w(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
            },
            infinite: !1,
            wrapLatLng: function(t) {
                var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                return new z(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
            },
            wrapLatLngBounds: function(t) {
                var i = t.getCenter(),
                    e = this.wrapLatLng(i),
                    n = i.lat - e.lat,
                    o = i.lng - e.lng;
                if (0 === n && 0 === o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast();
                return new b(new z(s.lat - n, s.lng - o), new z(r.lat - n, r.lng - o))
            }
        },
        si = i({}, oi, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, i) {
                var e = Math.PI / 180,
                    n = t.lat * e,
                    o = i.lat * e,
                    s = Math.sin((i.lat - t.lat) * e / 2),
                    r = Math.sin((i.lng - t.lng) * e / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        ri = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var i = Math.PI / 180,
                    e = this.MAX_LATITUDE,
                    n = Math.max(Math.min(e, t.lat), -e),
                    o = Math.sin(n * i);
                return new y(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var i = 180 / Math.PI;
                return new z((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
            },
            bounds: function() {
                var t = 6378137 * Math.PI;
                return new w([-t, -t], [t, t])
            }()
        };
    C.prototype = {
        transform: function(t, i) {
            return this._transform(t.clone(), i)
        },
        _transform: function(t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        },
        untransform: function(t, i) {
            return i = i || 1, new y((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    };
    var ai, hi, ui, li = i({}, si, {
            code: "EPSG:3857",
            projection: ri,
            transformation: function() {
                var t = .5 / (Math.PI * ri.R);
                return S(t, .5, -t, .5)
            }()
        }),
        ci = i({}, li, {
            code: "EPSG:900913"
        }),
        _i = document.documentElement.style,
        di = "ActiveXObject" in window,
        pi = di && !document.addEventListener,
        mi = "msLaunchUri" in navigator && !("documentMode" in document),
        fi = k("webkit"),
        gi = k("android"),
        vi = k("android 2") || k("android 3"),
        yi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        xi = gi && k("Google") && yi < 537 && !("AudioNode" in window),
        wi = !!window.opera,
        Li = k("chrome"),
        Pi = k("gecko") && !fi && !wi && !di,
        bi = !Li && k("safari"),
        Ti = k("phantom"),
        zi = "OTransition" in _i,
        Mi = 0 === navigator.platform.indexOf("Win"),
        Ci = di && "transition" in _i,
        Si = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !vi,
        Zi = "MozPerspective" in _i,
        Ei = !window.L_DISABLE_3D && (Ci || Si || Zi) && !zi && !Ti,
        ki = "undefined" != typeof orientation || k("mobile"),
        Ai = ki && fi,
        Bi = ki && Si,
        Ii = !window.PointerEvent && window.MSPointerEvent,
        Oi = !(!window.PointerEvent && !Ii),
        Ri = !window.L_NO_TOUCH && (Oi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Di = ki && wi,
        Ni = ki && Pi,
        ji = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        Wi = !!document.createElement("canvas").getContext,
        Hi = !(!document.createElementNS || !Z("svg").createSVGRect),
        Fi = !Hi && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (t) {
                return !1
            }
        }(),
        qi = (Object.freeze || Object)({
            ie: di,
            ielt9: pi,
            edge: mi,
            webkit: fi,
            android: gi,
            android23: vi,
            androidStock: xi,
            opera: wi,
            chrome: Li,
            gecko: Pi,
            safari: bi,
            phantom: Ti,
            opera12: zi,
            win: Mi,
            ie3d: Ci,
            webkit3d: Si,
            gecko3d: Zi,
            any3d: Ei,
            mobile: ki,
            mobileWebkit: Ai,
            mobileWebkit3d: Bi,
            msPointer: Ii,
            pointer: Oi,
            touch: Ri,
            mobileOpera: Di,
            mobileGecko: Ni,
            retina: ji,
            canvas: Wi,
            svg: Hi,
            vml: Fi
        }),
        Ui = Ii ? "MSPointerDown" : "pointerdown",
        Vi = Ii ? "MSPointerMove" : "pointermove",
        Gi = Ii ? "MSPointerUp" : "pointerup",
        Ki = Ii ? "MSPointerCancel" : "pointercancel",
        Yi = ["INPUT", "SELECT", "OPTION"],
        Xi = {},
        Ji = !1,
        $i = 0,
        Qi = Ii ? "MSPointerDown" : Oi ? "pointerdown" : "touchstart",
        te = Ii ? "MSPointerUp" : Oi ? "pointerup" : "touchend",
        ie = "_leaflet_",
        ee = tt(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ne = tt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        oe = "webkitTransition" === ne || "OTransition" === ne ? ne + "End" : "transitionend";
    if ("onselectstart" in document) ai = function() {
        lt(window, "selectstart", gt)
    }, hi = function() {
        ct(window, "selectstart", gt)
    };
    else {
        var se = tt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        ai = function() {
            if (se) {
                var t = document.documentElement.style;
                ui = t[se], t[se] = "none"
            }
        }, hi = function() {
            se && (document.documentElement.style[se] = ui, ui = void 0)
        }
    }
    var re, ae, he, ue = (Object.freeze || Object)({
            TRANSFORM: ee,
            TRANSITION: ne,
            TRANSITION_END: oe,
            get: W,
            getStyle: H,
            create: F,
            remove: q,
            empty: U,
            toFront: V,
            toBack: G,
            hasClass: K,
            addClass: Y,
            removeClass: X,
            setClass: J,
            getClass: $,
            setOpacity: Q,
            testProp: tt,
            setTransform: it,
            setPosition: et,
            getPosition: nt,
            disableTextSelection: ai,
            enableTextSelection: hi,
            disableImageDrag: ot,
            enableImageDrag: st,
            preventOutline: rt,
            restoreOutline: at,
            getSizedParentNode: ht,
            getScale: ut
        }),
        le = "_leaflet_events",
        ce = Mi && Li ? 2 * window.devicePixelRatio : Pi ? window.devicePixelRatio : 1,
        _e = {},
        de = (Object.freeze || Object)({
            on: lt,
            off: ct,
            stopPropagation: pt,
            disableScrollPropagation: mt,
            disableClickPropagation: ft,
            preventDefault: gt,
            stop: vt,
            getMousePosition: yt,
            getWheelDelta: xt,
            fakeStop: wt,
            skipped: Lt,
            isExternalTarget: Pt,
            addListener: lt,
            removeListener: ct
        }),
        pe = ei.extend({
            run: function(t, i, e, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = nt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function() {
                this._animId = f(this._animate, this), this._step()
            },
            _step: function(t) {
                var i = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t, i) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                i && e._round(), et(this._el, e), this.fire("step")
            },
            _complete: function() {
                g(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        me = ei.extend({
            options: {
                crs: li,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, i) {
                i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(M(i.center), i.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = ne && Ei && !Di && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), lt(this._proxy, oe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function(t, e, n) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(M(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
                    animate: n.animate
                }, n.zoom), n.pan = i({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
            },
            setZoom: function(t, i) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: i
                }) : (this._zoom = t, this)
            },
            zoomIn: function(t, i) {
                return t = t || (Ei ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
            },
            zoomOut: function(t, i) {
                return t = t || (Ei ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
            },
            setZoomAround: function(t, i, e) {
                var n = this.getZoomScale(i),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof y ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, i, {
                    zoom: e
                })
            },
            _getBoundsCenterZoom: function(t, i) {
                i = i || {}, t = t.getBounds ? t.getBounds() : T(t);
                var e = x(i.paddingTopLeft || i.padding || [0, 0]),
                    n = x(i.paddingBottomRight || i.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, e.add(n));
                if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(e).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function(t, i) {
                if (!(t = T(t)).isValid()) throw new Error("Bounds are not valid.");
                var e = this._getBoundsCenterZoom(t, i);
                return this.setView(e.center, e.zoom, i)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, i) {
                return this.setView(t, this._zoom, {
                    pan: i
                })
            },
            panBy: function(t, i) {
                if (i = i || {}, !(t = x(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new pe, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                    Y(this._mapPane, "leaflet-pan-anim");
                    var e = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function(t, i, e) {
                function n(t) {
                    var i = (_ * _ - c * c + (t ? -1 : 1) * m * m * d * d) / (2 * (t ? _ : c) * m * d),
                        e = Math.sqrt(i * i + 1) - i;
                    return e < 1e-9 ? -18 : Math.log(e)
                }

                function o(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function s(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function r(t) {
                    return c * (s(g) * function(t) {
                        return o(t) / s(t)
                    }(g + p * t) - o(g)) / m
                }
                if (!1 === (e = e || {}).animate || !Ei) return this.setView(t, i, e);
                this._stop();
                var a = this.project(this.getCenter()),
                    h = this.project(t),
                    u = this.getSize(),
                    l = this._zoom;
                t = M(t), i = void 0 === i ? l : i;
                var c = Math.max(u.x, u.y),
                    _ = c * this.getZoomScale(l, i),
                    d = h.distanceTo(a) || 1,
                    p = 1.42,
                    m = p * p,
                    g = n(0),
                    v = Date.now(),
                    y = (n(1) - g) / p,
                    x = e.duration ? 1e3 * e.duration : 1e3 * y * .8;
                return this._moveStart(!0, e.noMoveStart),
                    function e() {
                        var n = (Date.now() - v) / x,
                            o = function(t) {
                                return 1 - Math.pow(1 - t, 1.5)
                            }(n) * y;
                        n <= 1 ? (this._flyToFrame = f(e, this), this._move(this.unproject(a.add(h.subtract(a).multiplyBy(r(o) / d)), l), this.getScaleZoom(c / function(t) {
                            return c * (s(g) / s(g + p * t))
                        }(o), l), {
                            flyTo: !0
                        })) : this._move(t, i)._moveEnd(!0)
                    }.call(this), this
            },
            flyToBounds: function(t, i) {
                var e = this._getBoundsCenterZoom(t, i);
                return this.flyTo(e.center, e.zoom, i)
            },
            setMaxBounds: function(t) {
                return (t = T(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                var i = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                var i = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, i) {
                this._enforcingBounds = !0;
                var e = this.getCenter(),
                    n = this._limitCenter(e, this._zoom, T(t));
                return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = i({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var n = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var o = this.getSize(),
                    s = n.divideBy(2).round(),
                    r = o.divideBy(2).round(),
                    a = s.subtract(r);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: n,
                    newSize: o
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = i({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var n = e(this._handleGeolocationResponse, this),
                    o = e(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var i = t.code,
                    e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: i,
                    message: "Geolocation error: " + e + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var i = new z(t.coords.latitude, t.coords.longitude),
                    e = i.toBounds(2 * t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var o = this.getBoundsZoom(e);
                    this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                }
                var s = {
                    latlng: i,
                    bounds: e,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function(t, i) {
                if (!i) return this;
                var e = this[t] = new i(this);
                return this._handlers.push(e), this.options[t] && e.enable(), this
            },
            remove: function() {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), q(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) q(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function(t, i) {
                var e = F("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                return t && (this._panes[t] = e), e
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds();
                return new b(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, i, e) {
                t = T(t), e = x(e || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(e),
                    u = P(this.project(a, n), this.project(r, n)).getSize(),
                    l = Ei ? this.options.zoomSnap : 1,
                    c = h.x / u.x,
                    _ = h.y / u.y,
                    d = i ? Math.max(c, _) : Math.min(c, _);
                return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new y(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, i) {
                var e = this._getTopLeftPoint(t, i);
                return new w(e, e.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, i) {
                var e = this.options.crs;
                return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
            },
            getScaleZoom: function(t, i) {
                var e = this.options.crs;
                i = void 0 === i ? this._zoom : i;
                var n = e.zoom(t * e.scale(i));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function(t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(M(t), i)
            },
            unproject: function(t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(x(t), i)
            },
            layerPointToLatLng: function(t) {
                var i = x(t).add(this.getPixelOrigin());
                return this.unproject(i)
            },
            latLngToLayerPoint: function(t) {
                return this.project(M(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(M(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(T(t))
            },
            distance: function(t, i) {
                return this.options.crs.distance(M(t), M(i))
            },
            containerPointToLayerPoint: function(t) {
                return x(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return x(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var i = this.containerPointToLayerPoint(x(t));
                return this.layerPointToLatLng(i)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(M(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return yt(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var i = this._container = W(t);
                if (!i) throw new Error("Map container not found.");
                if (i._leaflet_id) throw new Error("Map container is already initialized.");
                lt(i, "scroll", this._onScroll, this), this._containerId = n(i)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && Ei, Y(t, "leaflet-container" + (Ri ? " leaflet-touch" : "") + (ji ? " leaflet-retina" : "") + (pi ? " leaflet-oldie" : "") + (bi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var i = H(t, "position");
                "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), et(this._mapPane, new y(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Y(t.markerPane, "leaflet-zoom-hide"), Y(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, i) {
                et(this._mapPane, new y(0, 0));
                var e = !this._loaded;
                this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                var n = this._zoom !== i;
                this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
            },
            _moveStart: function(t, i) {
                return t && this.fire("zoomstart"), i || this.fire("movestart"), this
            },
            _move: function(t, i, e) {
                void 0 === i && (i = this._zoom);
                var n = this._zoom !== i;
                return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
                return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
                et(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {}, this._targets[n(this._container)] = this;
                var i = t ? ct : lt;
                i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Ei && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                g(this._resizeRequest), this._resizeRequest = f(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, i) {
                for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
                    if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                        a = !0;
                        break
                    }
                    if (e && e.listens(i, !0)) {
                        if (s && !Pt(r, t)) break;
                        if (o.push(e), s) break
                    }
                    if (r === this._container) break;
                    r = r.parentNode
                }
                return o.length || a || s || !Pt(r, t) || (o = [this]), o
            },
            _handleDOMEvent: function(t) {
                if (this._loaded && !Lt(t)) {
                    var i = t.type;
                    "mousedown" !== i && "keypress" !== i || rt(t.target || t.srcElement), this._fireDOMEvent(t, i)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, e, n) {
                if ("click" === t.type) {
                    var o = i({}, t);
                    o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                }
                if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                    var s = n[0];
                    "contextmenu" === e && s.listens(e, !0) && gt(t);
                    var r = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = s.getLatLng && (!s._radius || s._radius <= 10);
                        r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                    }
                    for (var h = 0; h < n.length; h++)
                        if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function(t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
            },
            whenReady: function(t, i) {
                return this._loaded ? t.call(i || this, {
                    target: this
                }) : this.on("load", t, i), this
            },
            _getMapPanePos: function() {
                return nt(this._mapPane) || new y(0, 0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, i) {
                return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, i) {
                var e = this.getSize()._divideBy(2);
                return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return this.project(t, i)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function(t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return P([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, i, e) {
                if (!e) return t;
                var n = this.project(t, i),
                    o = this.getSize().divideBy(2),
                    s = new w(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, e, i);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
            },
            _limitOffset: function(t, i) {
                if (!i) return t;
                var e = this.getPixelBounds(),
                    n = new w(e.min.add(t), e.max.add(t));
                return t.add(this._getBoundsOffset(n, i))
            },
            _getBoundsOffset: function(t, i, e) {
                var n = P(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new y(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function(t, i) {
                return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
            },
            _limitZoom: function(t) {
                var i = this.getMinZoom(),
                    e = this.getMaxZoom(),
                    n = Ei ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                X(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, i) {
                var e = this._getCenterOffset(t)._trunc();
                return !(!0 !== (i && i.animate) && !this.getSize().contains(e) || (this.panBy(e, i), 0))
            },
            _createAnimProxy: function() {
                var t = this._proxy = F("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                    var i = ee,
                        e = this._proxy.style[i];
                    it(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function() {
                    var t = this.getCenter(),
                        i = this.getZoom();
                    it(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                q(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, i, e) {
                if (this._animatingZoom) return !0;
                if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(i),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== e.animate && !this.getSize().contains(o) || (f(function() {
                    this._moveStart(!0, !1)._animateZoom(t, i, !0)
                }, this), 0))
            },
            _animateZoom: function(t, i, n, o) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, Y(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: i,
                    noUpdate: o
                }), setTimeout(e(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (this._mapPane && X(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() {
                    this._moveEnd(!0)
                }, this))
            }
        }),
        fe = v.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                l(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var i = this._map;
                return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this.remove(), this._map = t;
                var i = this._container = this.onAdd(t),
                    e = this.getPosition(),
                    n = t._controlCorners[e];
                return Y(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
            },
            remove: function() {
                return this._map ? (q(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
            },
            _refocusOnMap: function(t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        }),
        ge = function(t) {
            return new fe(t)
        };
    me.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.remove(), this
        },
        _initControlPos: function() {
            function t(t, o) {
                var s = e + t + " " + e + o;
                i[t + o] = F("div", s, n)
            }
            var i = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = F("div", e + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) q(this._controlCorners[t]);
            q(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var ve = fe.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, i, e, n) {
                    return e < n ? -1 : n < e ? 1 : 0
                }
            },
            initialize: function(t, i, e) {
                for (var n in l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                for (n in i) this._addLayer(i[n], n, !0)
            },
            onAdd: function(t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return fe.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, i) {
                return this._addLayer(t, i), this._map ? this._update() : this
            },
            addOverlay: function(t, i) {
                return this._addLayer(t, i, !0), this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var i = this._getLayer(n(t));
                return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
            },
            expand: function() {
                Y(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (Y(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : X(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function() {
                return X(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    i = this._container = F("div", t),
                    e = this.options.collapsed;
                i.setAttribute("aria-haspopup", !0), ft(i), mt(i);
                var n = this._form = F("form", t + "-list");
                e && (this._map.on("click", this.collapse, this), gi || lt(i, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = F("a", t + "-toggle", i);
                o.href = "#", o.title = "Layers", Ri ? (lt(o, "click", vt), lt(o, "click", this.expand, this)) : lt(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = F("div", t + "-base", n), this._separator = F("div", t + "-separator", n), this._overlaysList = F("div", t + "-overlays", n), i.appendChild(n)
            },
            _getLayer: function(t) {
                for (var i = 0; i < this._layers.length; i++)
                    if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
            },
            _addLayer: function(t, i, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: i,
                    overlay: n
                }), this.options.sortLayers && this._layers.sort(e(function(t, i) {
                    return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
                }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container) return this;
                U(this._baseLayersList), U(this._overlaysList), this._layerControlInputs = [];
                var t, i, e, n, o = 0;
                for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var i = this._getLayer(n(t.target)),
                    e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                e && this._map.fire(e, i)
            },
            _createRadioElement: function(t, i) {
                var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = e, n.firstChild
            },
            _addItem: function(t) {
                var i, e = document.createElement("label"),
                    o = this._map.hasLayer(t.layer);
                t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), lt(i, "click", this._onInputClick, this);
                var s = document.createElement("span");
                s.innerHTML = " " + t.name;
                var r = document.createElement("div");
                return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
            },
            _onInputClick: function() {
                var t, i, e = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        }),
        ye = fe.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var i = "leaflet-control-zoom",
                    e = F("div", i + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function() {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, i, e, n, o) {
                var s = F("a", e, n);
                return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), ft(s), lt(s, "click", vt), lt(s, "click", o, this), lt(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function() {
                var t = this._map,
                    i = "leaflet-disabled";
                X(this._zoomInButton, i), X(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Y(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Y(this._zoomInButton, i)
            }
        });
    me.mergeOptions({
        zoomControl: !0
    }), me.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ye, this.addControl(this.zoomControl))
    });
    var xe = fe.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var i = F("div", "leaflet-control-scale"),
                    e = this.options;
                return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, i, e) {
                t.metric && (this._mScale = F("div", i, e)), t.imperial && (this._iScale = F("div", i, e))
            },
            _update: function() {
                var t = this._map,
                    i = t.getSize().y / 2,
                    e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                this._updateScales(e)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var i = this._getRoundNum(t),
                    e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                this._updateScale(this._mScale, e, i / t)
            },
            _updateImperial: function(t) {
                var i, e, n, o = 3.2808399 * t;
                o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function(t, i, e) {
                t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
            },
            _getRoundNum: function(t) {
                var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                    e = t / i;
                return i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1)
            }
        }),
        we = fe.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                l(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                for (var i in t.attributionControl = this, this._container = F("div", "leaflet-control-attribution"), ft(this._container), t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var i in this._attributions) this._attributions[i] && t.push(i);
                    var e = [];
                    this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
                }
            }
        });
    me.mergeOptions({
        attributionControl: !0
    }), me.addInitHook(function() {
        this.options.attributionControl && (new we).addTo(this)
    }), fe.Layers = ve, fe.Zoom = ye, fe.Scale = xe, fe.Attribution = we, ge.layers = function(t, i, e) {
        return new ve(t, i, e)
    }, ge.zoom = function(t) {
        return new ye(t)
    }, ge.scale = function(t) {
        return new xe(t)
    }, ge.attribution = function(t) {
        return new we(t)
    };
    var Le = v.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
        },
        disable: function() {
            return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
        },
        enabled: function() {
            return !!this._enabled
        }
    });
    Le.addTo = function(t, i) {
        return t.addHandler(i, this), this
    };
    var Pe, be = {
            Events: ii
        },
        Te = Ri ? "touchstart mousedown" : "mousedown",
        ze = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        Me = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        Ce = ei.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, i, e, n) {
                l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
            },
            enable: function() {
                this._enabled || (lt(this._dragStartTarget, Te, this._onDown, this), this._enabled = !0)
            },
            disable: function() {
                this._enabled && (Ce._dragging === this && this.finishDrag(), ct(this._dragStartTarget, Te, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function(t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !K(this._element, "leaflet-zoom-anim") && !(Ce._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Ce._dragging = this, this._preventOutline && rt(this._element), ot(), ai(), this._moving)))) {
                    this.fire("down");
                    var i = t.touches ? t.touches[0] : t,
                        e = ht(this._element);
                    this._startPoint = new y(i.clientX, i.clientY), this._parentScale = ut(e), lt(document, Me[t.type], this._onMove, this), lt(document, ze[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && t.touches.length > 1) this._moved = !0;
                    else {
                        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            e = new y(i.clientX, i.clientY)._subtract(this._startPoint);
                        (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, gt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = nt(this._element).subtract(e), Y(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Y(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), et(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                for (var t in X(document.body, "leaflet-dragging"), this._lastTarget && (X(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Me) ct(document, Me[t], this._onMove, this), ct(document, ze[t], this._onUp, this);
                st(), hi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, Ce._dragging = !1
            }
        }),
        Se = (Object.freeze || Object)({
            simplify: bt,
            pointToSegmentDistance: Tt,
            closestPointOnSegment: function(t, i, e) {
                return Zt(t, i, e)
            },
            clipSegment: zt,
            _getEdgeIntersection: Mt,
            _getBitCode: Ct,
            _sqClosestPointOnSegment: Zt,
            isFlat: Et,
            _flat: kt
        }),
        Ze = (Object.freeze || Object)({
            clipPolygon: At
        }),
        Ee = {
            project: function(t) {
                return new y(t.lng, t.lat)
            },
            unproject: function(t) {
                return new z(t.y, t.x)
            },
            bounds: new w([-180, -90], [180, 90])
        },
        ke = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new w([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
                var i = Math.PI / 180,
                    e = this.R,
                    n = t.lat * i,
                    o = this.R_MINOR / e,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -e * Math.log(Math.max(a, 1e-10)), new y(t.lng * i * e, n)
            },
            unproject: function(t) {
                for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
                return new z(a * e, t.x * e / n)
            }
        },
        Ae = (Object.freeze || Object)({
            LonLat: Ee,
            Mercator: ke,
            SphericalMercator: ri
        }),
        Be = i({}, si, {
            code: "EPSG:3395",
            projection: ke,
            transformation: function() {
                var t = .5 / (Math.PI * ke.R);
                return S(t, .5, -t, .5)
            }()
        }),
        Ie = i({}, si, {
            code: "EPSG:4326",
            projection: Ee,
            transformation: S(1 / 180, 1, -1 / 180, .5)
        }),
        Oe = i({}, oi, {
            projection: Ee,
            transformation: S(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, i) {
                var e = i.lng - t.lng,
                    n = i.lat - t.lat;
                return Math.sqrt(e * e + n * n)
            },
            infinite: !0
        });
    oi.Earth = si, oi.EPSG3395 = Be, oi.EPSG3857 = li, oi.EPSG900913 = ci, oi.EPSG4326 = Ie, oi.Simple = Oe;
    var Re = ei.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this), this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[n(t)] = this, this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[n(t)], this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var i = t.target;
            if (i.hasLayer(this)) {
                if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                    var e = this.getEvents();
                    i.on(e, this), this.once("remove", function() {
                        i.off(e, this)
                    }, this)
                }
                this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    me.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var i = n(t);
            return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        },
        removeLayer: function(t) {
            var i = n(t);
            return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        },
        hasLayer: function(t) {
            return !!t && n(t) in this._layers
        },
        eachLayer: function(t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        },
        _addLayers: function(t) {
            for (var i = 0, e = (t = t ? Yt(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var i = n(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
                i = -1 / 0,
                e = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
            }
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var De = Re.extend({
            initialize: function(t, i) {
                var e, n;
                if (l(this, i), this._layers = {}, t)
                    for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
                var i = this.getLayerId(t);
                return this._layers[i] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var i = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
            },
            hasLayer: function(t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function(t) {
                var i, e, n = Array.prototype.slice.call(arguments, 1);
                for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
                return this
            },
            onAdd: function(t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function(t, i) {
                for (var e in this._layers) t.call(i, this._layers[e]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                return this.eachLayer(t.push, t), t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return n(t)
            }
        }),
        Ne = De.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), De.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), De.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new b;
                for (var i in this._layers) {
                    var e = this._layers[i];
                    t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                }
                return t
            }
        }),
        je = v.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function(t) {
                l(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, i) {
                var e = this._getIconUrl(t);
                if (!e) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, i) {
                var e = this.options,
                    n = e[i + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = x(n),
                    s = x("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function(t, i) {
                return (i = i || document.createElement("img")).src = t, i
            },
            _getIconUrl: function(t) {
                return ji && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        We = je.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [43, 55],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return We.imagePath || (We.imagePath = this._detectIconPath()), (this.options.imagePath || We.imagePath) + je.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = F("div", "leaflet-default-icon-path", document.body),
                    i = H(t, "background-image") || H(t, "backgroundImage");
                return document.body.removeChild(t), null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        He = Le.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new Ce(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), Y(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && X(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function(t) {
                var i = this._marker,
                    e = i._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = nt(i._icon),
                    r = e.getPixelBounds(),
                    a = e.getPixelOrigin(),
                    h = P(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                if (!h.contains(s)) {
                    var u = x((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                    e.panBy(u, {
                        animate: !1
                    }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), et(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function(t) {
                this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
            },
            _onDrag: function(t) {
                var i = this._marker,
                    e = i._shadow,
                    n = nt(i._icon),
                    o = i._map.layerPointToLatLng(n);
                e && et(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        Fe = Re.extend({
            options: {
                icon: new We,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function(t, i) {
                l(this, i), this._latlng = M(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var i = this._latlng;
                return this._latlng = M(t), this.update(), this.fire("move", {
                    oldLatLng: i,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    e = t.icon.createIcon(this._icon),
                    n = !1;
                e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), Y(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (Y(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), q(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && q(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                et(this._icon, t), this._shadow && et(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(i)
            },
            _initInteraction: function() {
                if (this.options.interactive && (Y(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), He)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new He(this), t && this.dragging.enable()
                }
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                Q(this._icon, t), this._shadow && Q(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        qe = Re.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
                return l(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(), this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        Ue = qe.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, i) {
                l(this, i), this._latlng = M(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
                return this._latlng = M(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var i = t && t.radius || this._radius;
                return qe.prototype.setStyle.call(this, t), this.setRadius(i), this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius,
                    i = this._radiusY || t,
                    e = this._clickTolerance(),
                    n = [t + e, i + e];
                this._pxBounds = new w(this._point.subtract(n), this._point.add(n))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        Ve = Ue.extend({
            initialize: function(t, e, n) {
                if ("number" == typeof e && (e = i({}, n, {
                        radius: e
                    })), l(this, e), this._latlng = M(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new b(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: qe.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    i = this._latlng.lat,
                    e = this._map,
                    n = e.options.crs;
                if (n.distance === si.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / si.R / o,
                        r = e.project([i + s, t]),
                        a = e.project([i - s, t]),
                        h = r.add(a).divideBy(2),
                        u = e.unproject(h).lat,
                        l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                    (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
                } else {
                    var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        }),
        Ge = qe.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, i) {
                l(this, i), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var i, e, n = 1 / 0, o = null, s = Zt, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                        var c = s(t, i = h[u - 1], e = h[u], !0);
                        c < n && (n = c, o = s(t, i, e))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === i) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, n = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], (n += e = o.distanceTo(s)) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, i) {
                return i = i || this._defaultShape(), t = M(t), i.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new b, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return Et(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var i = [], e = Et(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = M(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
                return i
            },
            _project: function() {
                var t = new w;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                var i = this._clickTolerance(),
                    e = new y(i, i);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
            },
            _projectLatlngs: function(t, i, e) {
                var n, o, s = t[0] instanceof z,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                    i.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var i, e, n, o, s, r, a, h = this._parts;
                        for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                            for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = zt(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
                    }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = bt(t[e], i)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, i) {
                var e, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (e = 0, s = this._parts.length; e < s; e++)
                    for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                        if ((i || 0 !== n) && Tt(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    Ge._flat = kt;
    var Ke = Ge.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                    l = u.length;
                if (!l) return null;
                for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function(t) {
                var i = Ge.prototype._convertLatLngs.call(this, t),
                    e = i.length;
                return e >= 2 && i[0] instanceof z && i[0].equals(i[e - 1]) && i.pop(), i
            },
            _setLatLngs: function(t) {
                Ge.prototype._setLatLngs.call(this, t), Et(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return Et(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    i = this.options.weight,
                    e = new y(i, i);
                if (t = new w(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = At(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var i, e, n, o, s, r, a, h, u = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
                return u || Ge.prototype._containsPoint.call(this, t, !0)
            }
        }),
        Ye = Ne.extend({
            initialize: function(t, i) {
                l(this, i), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var i, e, n, o = Yt(t) ? t : t.features;
                if (o) {
                    for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = Bt(t, s);
                return r ? (r.feature = jt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function(t) {
                return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function(t) {
                return this.eachLayer(function(i) {
                    this._setLayerStyle(i, t)
                }, this)
            },
            _setLayerStyle: function(t, i) {
                "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
            }
        }),
        Xe = {
            toGeoJSON: function(t) {
                return Nt(this, {
                    type: "Point",
                    coordinates: Rt(this.getLatLng(), t)
                })
            }
        };
    Fe.include(Xe), Ve.include(Xe), Ue.include(Xe), Ge.include({
        toGeoJSON: function(t) {
            var i = !Et(this._latlngs);
            return Nt(this, {
                type: (i ? "Multi" : "") + "LineString",
                coordinates: Dt(this._latlngs, i ? 1 : 0, !1, t)
            })
        }
    }), Ke.include({
        toGeoJSON: function(t) {
            var i = !Et(this._latlngs),
                e = i && !Et(this._latlngs[0]),
                n = Dt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]), Nt(this, {
                type: (e ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), De.include({
        toMultiPoint: function(t) {
            var i = [];
            return this.eachLayer(function(e) {
                i.push(e.toGeoJSON(t).geometry.coordinates)
            }), Nt(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(t) {
            var i = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === i) return this.toMultiPoint(t);
            var e = "GeometryCollection" === i,
                n = [];
            return this.eachLayer(function(i) {
                if (i.toGeoJSON) {
                    var o = i.toGeoJSON(t);
                    if (e) n.push(o.geometry);
                    else {
                        var s = jt(o);
                        "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                    }
                }
            }), e ? Nt(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var Je = Wt,
        $e = Re.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, i, e) {
                this._url = t, this._bounds = T(i), l(this, e)
            },
            onAdd: function() {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Y(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
                q(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
                return this._map && V(this._image), this
            },
            bringToBack: function() {
                return this._map && G(this._image), this
            },
            setUrl: function(t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
                return this._bounds = T(t), this._map && this._reset(), this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = "IMG" === this._url.tagName,
                    i = this._image = t ? this._url : F("img");
                Y(i, "leaflet-image-layer"), this._zoomAnimated && Y(i, "leaflet-zoom-animated"), this.options.className && Y(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
            },
            _animateZoom: function(t) {
                var i = this._map.getZoomScale(t.zoom),
                    e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                it(this._image, e, i)
            },
            _reset: function() {
                var t = this._image,
                    i = new w(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    e = i.getSize();
                et(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
            },
            _updateOpacity: function() {
                Q(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Qe = $e.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName,
                    i = this._image = t ? this._url : F("video");
                if (Y(i, "leaflet-image-layer"), this._zoomAnimated && Y(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
                    for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
                    this._url = n.length > 0 ? o : [i.src]
                } else {
                    Yt(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                    for (var a = 0; a < this._url.length; a++) {
                        var h = F("source");
                        h.src = this._url[a], i.appendChild(h)
                    }
                }
            }
        }),
        tn = Re.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, i) {
                l(this, t), this._source = i
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Q(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Q(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (Q(this._container, 0), this._removeTimeout = setTimeout(e(q, void 0, this._container), 200)) : q(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = M(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && V(this._container), this
            },
            bringToBack: function() {
                return this._map && G(this._container), this
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof i) t.innerHTML = i;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(i)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        i = x(this.options.offset),
                        e = this._getAnchor();
                    this._zoomAnimated ? et(this._container, t.add(e)) : i = i.add(t).add(e);
                    var n = this._containerBottom = -i.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        }),
        en = tn.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onAdd: function(t) {
                tn.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof qe || this._source.on("preclick", pt))
            },
            onRemove: function(t) {
                tn.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof qe || this._source.off("preclick", pt))
            },
            getEvents: function() {
                var t = tn.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t = "leaflet-popup",
                    i = this._container = F("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    e = this._wrapper = F("div", t + "-content-wrapper", i);
                if (this._contentNode = F("div", t + "-content", e), ft(e), mt(this._contentNode), lt(e, "contextmenu", pt), this._tipContainer = F("div", t + "-tip-container", i), this._tip = F("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = F("a", t + "-close-button", i);
                    n.href = "#close", n.innerHTML = "&#215;", lt(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    i = t.style;
                i.width = "", i.whiteSpace = "nowrap";
                var e = t.offsetWidth;
                e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight;
                o && n > o ? (i.height = o + "px", Y(t, "leaflet-popup-scrolled")) : X(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    e = this._getAnchor();
                et(this._container, i.add(e))
            },
            _adjustPan: function() {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map,
                        i = parseInt(H(this._container, "marginBottom"), 10) || 0,
                        e = this._container.offsetHeight + i,
                        n = this._containerWidth,
                        o = new y(this._containerLeft, -e - this._containerBottom);
                    o._add(nt(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = x(this.options.autoPanPadding),
                        a = x(this.options.autoPanPaddingTopLeft || r),
                        h = x(this.options.autoPanPaddingBottomRight || r),
                        u = t.getSize(),
                        l = 0,
                        c = 0;
                    s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), vt(t)
            },
            _getAnchor: function() {
                return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    me.mergeOptions({
        closePopupOnClick: !0
    }), me.include({
        openPopup: function(t, i, e) {
            return t instanceof en || (t = new en(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), Re.include({
        bindPopup: function(t, i) {
            return t instanceof en ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new en(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function(t, i) {
            if (t instanceof Re || (i = t, t = this), t instanceof Ne)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var i = t.layer || t.target;
            this._popup && this._map && (vt(t), i instanceof qe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var nn = tn.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            tn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            tn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = tn.prototype.getEvents.call(this);
            return Ri && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = F("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var i = this._map,
                e = this._container,
                n = i.latLngToContainerPoint(i.getCenter()),
                o = i.layerPointToContainerPoint(t),
                s = this.options.direction,
                r = e.offsetWidth,
                a = e.offsetHeight,
                h = x(this.options.offset),
                u = this._getAnchor();
            "top" === s ? t = t.add(x(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(x(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(x(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(x(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(x(r + u.x - h.x, a / 2 - u.y - h.y, !0))), X(e, "leaflet-tooltip-right"), X(e, "leaflet-tooltip-left"), X(e, "leaflet-tooltip-top"), X(e, "leaflet-tooltip-bottom"), Y(e, "leaflet-tooltip-" + s), et(e, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._container && Q(this._container, t)
        },
        _animateZoom: function(t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i)
        },
        _getAnchor: function() {
            return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    me.include({
        openTooltip: function(t, i, e) {
            return t instanceof nn || (t = new nn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t), this
        }
    }), Re.include({
        bindTooltip: function(t, i) {
            return t instanceof nn ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new nn(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
                var i = t ? "off" : "on",
                    e = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Ri && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function(t, i) {
            if (t instanceof Re || (i = t, t = this), t instanceof Ne)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (Y(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (X(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var i, e, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
        }
    });
    var on = je.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                e = this.options;
            if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                var n = x(e.bgPos);
                i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function() {
            return null
        }
    });
    je.Default = We;
    var sn = Re.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: ki,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                l(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), q(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (V(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (G(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof y ? t : new y(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !pi) {
                    Q(this._container, this.options.opacity);
                    var t = +new Date,
                        i = !1,
                        e = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            Q(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: r,
            _initContainer: function() {
                this._container || (this._container = F("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (q(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = F("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
                }
            },
            _onUpdateLevel: r,
            _onRemoveLevel: r,
            _onCreateLevel: r,
            _pruneTiles: function() {
                if (this._map) {
                    var t, i, e = this._map.getZoom();
                    if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)
                            if ((i = this._tiles[t]).current && !i.active) {
                                var n = i.coords;
                                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                            } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) q(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, i, e, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(i / 2),
                    r = e - 1,
                    a = new y(+o, +s);
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    u = this._tiles[h];
                return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
            },
            _retainChildren: function(t, i, e, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * i; s < 2 * i + 2; s++) {
                        var r = new y(o, s);
                        r.z = e + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                    }
            },
            _resetView: function(t) {
                var i = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var i = this.options;
                return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
            },
            _setView: function(t, i, e, n) {
                var o = this._clampZoom(Math.round(i));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
            },
            _setZoomTransforms: function(t, i) {
                for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
            },
            _setZoomTransform: function(t, i, e) {
                var n = this._map.getZoomScale(e, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                Ei ? it(t.el, o, n) : et(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    i = t.options.crs,
                    e = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var i = this._map,
                    e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                    n = i.getZoomScale(e, this._tileZoom),
                    o = i.project(t, this._tileZoom).floor(),
                    s = i.getSize().divideBy(2 * n);
                return new w(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var i = this._map;
                if (i) {
                    var e = this._clampZoom(i.getZoom());
                    if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new w(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var u in this._tiles) {
                            var l = this._tiles[u].coords;
                            l.z === this._tileZoom && h.contains(new y(l.x, l.y)) || (this._tiles[u].current = !1)
                        }
                        if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var _ = o.min.x; _ <= o.max.x; _++) {
                                    var d = new y(_, c);
                                    if (d.z = this._tileZoom, this._isValidTile(d)) {
                                        var p = this._tiles[this._tileCoordsToKey(d)];
                                        p ? p.current = !0 : r.push(d)
                                    }
                                }
                            if (r.sort(function(t, i) {
                                    return t.distanceTo(s) - i.distanceTo(s)
                                }), 0 !== r.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var i = this._map.options.crs;
                if (!i.infinite) {
                    var e = this._globalTileRange;
                    if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return T(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var i = this._map,
                    e = this.getTileSize(),
                    n = t.scaleBy(e),
                    o = n.add(e);
                return [i.unproject(n, t.z), i.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = new b(i[0], i[1]);
                return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var i = t.split(":"),
                    e = new y(+i[0], +i[1]);
                return e.z = +i[2], e
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                i && (q(i.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: i.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                Y(t, "leaflet-tile");
                var i = this.getTileSize();
                t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, pi && this.options.opacity < 1 && Q(t, this.options.opacity), gi && !vi && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, i) {
                var n = this._getTilePos(t),
                    o = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), et(s, n), this._tiles[o] = {
                    el: s,
                    coords: t,
                    current: !0
                }, i.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, i, n) {
                i && this.fire("tileerror", {
                    error: i,
                    tile: n,
                    coords: t
                });
                var o = this._tileCoordsToKey(t);
                (n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (Q(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (Y(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), pi || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var i = new y(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                return i.z = t.z, i
            },
            _pxBoundsToTileRange: function(t) {
                var i = this.getTileSize();
                return new w(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        rn = sn.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, i) {
                this._url = t, (i = l(this, i)).detectRetina && ji && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), gi || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, i) {
                return this._url = t, i || this.redraw(), this
            },
            createTile: function(t, i) {
                var n = document.createElement("img");
                return lt(n, "load", e(this._tileOnLoad, this, i, n)), lt(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
            },
            getTileUrl: function(t) {
                var e = {
                    r: ji ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var n = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = n), e["-y"] = n
                }
                return _(this._url, i(e, this.options))
            },
            _tileOnLoad: function(t, i) {
                pi ? setTimeout(e(t, this, null, i), 0) : t(null, i)
            },
            _tileOnError: function(t, i, e) {
                var n = this.options.errorTileUrl;
                n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
            },
            _getSubdomain: function(t) {
                var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[i]
            },
            _abortLoading: function() {
                var t, i;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = Xt, q(i), delete this._tiles[t]))
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                if (i) return xi || i.el.setAttribute("src", Xt), sn.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, i, e) {
                if (this._map && (!e || e.getAttribute("src") !== Xt)) return sn.prototype._tileReady.call(this, t, i, e)
            }
        }),
        an = rn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var n = i({}, this.defaultWmsParams);
                for (var o in e) o in this.options || (n[o] = e[o]);
                var s = (e = l(this, e)).detectRetina && ji ? 2 : 1,
                    r = this.getTileSize();
                n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[i] = this._crs.code, rn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = this._crs,
                    n = P(e.project(i[0]), e.project(i[1])),
                    o = n.min,
                    s = n.max,
                    r = (this._wmsVersion >= 1.3 && this._crs === Ie ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                    a = rn.prototype.getTileUrl.call(this, t);
                return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
            },
            setParams: function(t, e) {
                return i(this.wmsParams, t), e || this.redraw(), this
            }
        });
    rn.WMS = an, Ht.wms = function(t, i) {
        return new an(t, i)
    };
    var hn = Re.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function(t) {
                l(this, t), n(this), this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(), this._zoomAnimated && Y(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, i) {
                var e = this._map.getZoomScale(i, this._zoom),
                    n = nt(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, i),
                    r = this._map.project(t, i).subtract(s),
                    a = o.multiplyBy(-e).add(n).add(o).subtract(r);
                Ei ? it(this._container, a, e) : et(this._container, a)
            },
            _reset: function() {
                for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding,
                    i = this._map.getSize(),
                    e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                this._bounds = new w(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        un = hn.extend({
            getEvents: function() {
                var t = hn.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                hn.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                lt(t, "mousemove", o(this._onMouseMove, 32, this), this), lt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), lt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                g(this._redrawRequest), delete this._ctx, q(this._container), ct(this._container), delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {}, hn.prototype._update.call(this);
                    var t = this._bounds,
                        i = this._container,
                        e = t.getSize(),
                        n = ji ? 2 : 1;
                    et(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", ji && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function() {
                hn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t), this._layers[n(t)] = t;
                var i = t._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var i = t._order,
                    e = i.next,
                    o = i.prev;
                e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if ("string" == typeof t.options.dashArray) {
                    var i, e = t.options.dashArray.split(/[, ]+/),
                        n = [];
                    for (i = 0; i < e.length; i++) n.push(Number(e[i]));
                    t.options._dashArray = n
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                if (t._pxBounds) {
                    var i = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new w, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                }
            },
            _redraw: function() {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function() {
                var t = this._redrawBounds;
                if (t) {
                    var i = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function() {
                var t, i = this._redrawBounds;
                if (this._ctx.save(), i) {
                    var e = i.getSize();
                    this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function(t, i) {
                if (this._drawing) {
                    var e, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
                            for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            i && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function(t) {
                if (this._drawing && !t._empty()) {
                    var i = t._point,
                        e = this._ctx,
                        n = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                    this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
                }
            },
            _fillStroke: function(t, i) {
                var e = i.options;
                e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
            },
            _onClick: function(t) {
                for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
                e && (wt(t), this._fireEvent([e], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var i = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, i)
                }
            },
            _handleMouseOut: function(t) {
                var i = this._hoveredLayer;
                i && (X(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, i) {
                for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Y(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, i, e) {
                this._map._fireDOMEvent(i, e || i.type, t)
            },
            _bringToFront: function(t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
            },
            _bringToBack: function(t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
            }
        }),
        ln = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        cn = {
            _initContainer: function() {
                this._container = F("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (hn.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
                var i = t._container = ln("shape");
                Y(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = ln("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                var i = t._container;
                this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
            },
            _removePath: function(t) {
                var i = t._container;
                q(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
            },
            _updateStyle: function(t) {
                var i = t._stroke,
                    e = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = ln("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = Yt(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = ln("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
            },
            _updateCircle: function(t) {
                var i = t._point.round(),
                    e = Math.round(t._radius),
                    n = Math.round(t._radiusY || e);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
            },
            _setPath: function(t, i) {
                t._path.v = i
            },
            _bringToFront: function(t) {
                V(t._container)
            },
            _bringToBack: function(t) {
                G(t._container)
            }
        },
        _n = Fi ? ln : Z,
        dn = hn.extend({
            getEvents: function() {
                var t = hn.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
                this._container = _n("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = _n("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                q(this._container), ct(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    hn.prototype._update.call(this);
                    var t = this._bounds,
                        i = t.getSize(),
                        e = this._container;
                    this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), et(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function(t) {
                var i = t._path = _n("path");
                t.options.className && Y(i, t.options.className), t.options.interactive && Y(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                q(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
            },
            _updatePath: function(t) {
                t._project(), t._update()
            },
            _updateStyle: function(t) {
                var i = t._path,
                    e = t.options;
                i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, i) {
                this._setPath(t, E(t._parts, i))
            },
            _updateCircle: function(t) {
                var i = t._point,
                    e = Math.max(Math.round(t._radius), 1),
                    n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function(t, i) {
                t._path.setAttribute("d", i)
            },
            _bringToFront: function(t) {
                V(t._path)
            },
            _bringToBack: function(t) {
                G(t._path)
            }
        });
    Fi && dn.include(cn), me.include({
        getRenderer: function(t) {
            var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._paneRenderers[t];
            return void 0 === i && (i = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = i), i
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && Ft(t) || qt(t)
        }
    });
    var pn = Ke.extend({
        initialize: function(t, i) {
            Ke.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = T(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    dn.create = _n, dn.pointsToPath = E, Ye.geometryToLayer = Bt, Ye.coordsToLatLng = It, Ye.coordsToLatLngs = Ot, Ye.latLngToCoords = Rt, Ye.latLngsToCoords = Dt, Ye.getFeature = Nt, Ye.asFeature = jt, me.mergeOptions({
        boxZoom: !0
    });
    var mn = Le.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            lt(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            ct(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            q(this._pane), delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), ai(), ot(), this._startPoint = this._map.mouseEventToContainerPoint(t), lt(document, {
                contextmenu: vt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = F("div", "leaflet-zoom-box", this._container), Y(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var i = new w(this._point, this._startPoint),
                e = i.getSize();
            et(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
        },
        _finish: function() {
            this._moved && (q(this._box), X(this._container, "leaflet-crosshair")), hi(), st(), ct(document, {
                contextmenu: vt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
                var i = new b(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(i).fire("boxzoomend", {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    me.addInitHook("addHandler", "boxZoom", mn), me.mergeOptions({
        doubleClickZoom: !0
    });
    var fn = Le.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var i = this._map,
                e = i.getZoom(),
                n = i.options.zoomDelta,
                o = t.originalEvent.shiftKey ? e - n : e + n;
            "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
        }
    });
    me.addInitHook("addHandler", "doubleClickZoom", fn), me.mergeOptions({
        dragging: !0,
        inertia: !vi,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var gn = Le.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new Ce(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            Y(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function() {
            X(this._map._container, "leaflet-grab"), X(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var i = T(this._map.options.maxBounds);
                this._offsetLimit = P(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            if (this._map.options.inertia) {
                var i = this._lastTime = +new Date,
                    e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(e), this._times.push(i), this._prunePositions(i)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
                i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, i) {
            return t - (t - i) * this._viscosity
        },
        _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    i = this._offsetLimit;
                t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
                i = Math.round(t / 2),
                e = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - i + e) % t + i - e,
                s = (n + i + e) % t - i - e,
                r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var i = this._map,
                e = i.options,
                n = !e.inertia || this._times.length < 2;
            if (i.fire("dragend", t), n) i.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = e.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    u = Math.min(e.inertiaMaxSpeed, h),
                    l = a.multiplyBy(u / h),
                    c = u / (e.inertiaDeceleration * r),
                    _ = l.multiplyBy(-c / 2).round();
                _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function() {
                    i.panBy(_, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : i.fire("moveend")
            }
        }
    });
    me.addInitHook("addHandler", "dragging", gn), me.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var vn = Le.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), lt(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(), ct(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var t = document.body,
                    i = document.documentElement,
                    e = t.scrollTop || i.scrollTop,
                    n = t.scrollLeft || i.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, e)
            }
        },
        _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            var i, e, n = this._panKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
            for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
            for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
            for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            var i, e, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
            for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
        },
        _addHooks: function() {
            lt(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            ct(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, e = t.keyCode,
                    n = this._map;
                if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = x(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                else {
                    if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                vt(t)
            }
        }
    });
    me.addInitHook("addHandler", "keyboard", vn), me.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var yn = Le.extend({
        addHooks: function() {
            lt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            ct(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var i = xt(t),
                n = this._map.options.wheelDebounceTime;
            this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), vt(t)
        },
        _performZoom: function() {
            var t = this._map,
                i = t.getZoom(),
                e = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = e ? Math.ceil(o / e) * e : o,
                r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
        }
    });
    me.addInitHook("addHandler", "scrollWheelZoom", yn), me.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var xn = Le.extend({
        addHooks: function() {
            lt(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            ct(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (gt(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0],
                    n = i.target;
                this._startPos = this._newPos = new y(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Y(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), lt(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), ct(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0],
                    e = i.target;
                e && e.tagName && "a" === e.tagName.toLowerCase() && X(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var i = t.touches[0];
            this._newPos = new y(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
        },
        _simulateEvent: function(t, i) {
            var e = document.createEvent("MouseEvents");
            e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
        }
    });
    Ri && !Oi && me.addInitHook("addHandler", "tap", xn), me.mergeOptions({
        touchZoom: Ri && !vi,
        bounceAtZoomLimits: !0
    });
    var wn = Le.extend({
        addHooks: function() {
            Y(this._map._container, "leaflet-touch-zoom"), lt(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            X(this._map._container, "leaflet-touch-zoom"), ct(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var e = i.mouseEventToContainerPoint(t.touches[0]),
                    n = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), lt(document, "touchmove", this._onTouchMove, this), lt(document, "touchend", this._onTouchEnd, this), gt(t)
            }
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = this._map,
                    n = i.mouseEventToContainerPoint(t.touches[0]),
                    o = i.mouseEventToContainerPoint(t.touches[1]),
                    s = n.distanceTo(o) / this._startDist;
                if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === r.x && 0 === r.y) return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                }
                this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
                var a = e(i._move, i, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = f(a, this, !0), gt(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), ct(document, "touchmove", this._onTouchMove), ct(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    me.addInitHook("addHandler", "touchZoom", wn), me.BoxZoom = mn, me.DoubleClickZoom = fn, me.Drag = gn, me.Keyboard = vn, me.ScrollWheelZoom = yn, me.Tap = xn, me.TouchZoom = wn, Object.freeze = Ut, t.version = "1.3.4+HEAD.0e566b2", t.Control = fe, t.control = ge, t.Browser = qi, t.Evented = ei, t.Mixin = be, t.Util = ti, t.Class = v, t.Handler = Le, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = de, t.DomUtil = ue, t.PosAnimation = pe, t.Draggable = Ce, t.LineUtil = Se, t.PolyUtil = Ze, t.Point = y, t.point = x, t.Bounds = w, t.bounds = P, t.Transformation = C, t.transformation = S, t.Projection = Ae, t.LatLng = z, t.latLng = M, t.LatLngBounds = b, t.latLngBounds = T, t.CRS = oi, t.GeoJSON = Ye, t.geoJSON = Wt, t.geoJson = Je, t.Layer = Re, t.LayerGroup = De, t.layerGroup = function(t, i) {
        return new De(t, i)
    }, t.FeatureGroup = Ne, t.featureGroup = function(t) {
        return new Ne(t)
    }, t.ImageOverlay = $e, t.imageOverlay = function(t, i, e) {
        return new $e(t, i, e)
    }, t.VideoOverlay = Qe, t.videoOverlay = function(t, i, e) {
        return new Qe(t, i, e)
    }, t.DivOverlay = tn, t.Popup = en, t.popup = function(t, i) {
        return new en(t, i)
    }, t.Tooltip = nn, t.tooltip = function(t, i) {
        return new nn(t, i)
    }, t.Icon = je, t.icon = function(t) {
        return new je(t)
    }, t.DivIcon = on, t.divIcon = function(t) {
        return new on(t)
    }, t.Marker = Fe, t.marker = function(t, i) {
        return new Fe(t, i)
    }, t.TileLayer = rn, t.tileLayer = Ht, t.GridLayer = sn, t.gridLayer = function(t) {
        return new sn(t)
    }, t.SVG = dn, t.svg = qt, t.Renderer = hn, t.Canvas = un, t.canvas = Ft, t.Path = qe, t.CircleMarker = Ue, t.circleMarker = function(t, i) {
        return new Ue(t, i)
    }, t.Circle = Ve, t.circle = function(t, i, e) {
        return new Ve(t, i, e)
    }, t.Polyline = Ge, t.polyline = function(t, i) {
        return new Ge(t, i)
    }, t.Polygon = Ke, t.polygon = function(t, i) {
        return new Ke(t, i)
    }, t.Rectangle = pn, t.rectangle = function(t, i) {
        return new pn(t, i)
    }, t.Map = me, t.map = function(t, i) {
        return new me(t, i)
    };
    var Ln = window.L;
    t.noConflict = function() {
        return window.L = Ln, this
    }, window.L = t
}), L.TileLayer.Grayscale = L.TileLayer.extend({
    options: {
        quotaRed: 21,
        quotaGreen: 71,
        quotaBlue: 8,
        quotaDividerTune: 0,
        quotaDivider: function() {
            return this.quotaRed + this.quotaGreen + this.quotaBlue + this.quotaDividerTune
        }
    },
    initialize: function(t, i) {
        (i = i || {}).crossOrigin = !0, L.TileLayer.prototype.initialize.call(this, t, i), this.on("tileload", function(t) {
            this._makeGrayscale(t.tile)
        })
    },
    _createTile: function() {
        var t = L.TileLayer.prototype._createTile.call(this);
        return t.crossOrigin = "Anonymous", t
    },
    _makeGrayscale: function(t) {
        if (!t.getAttribute("data-grayscaled")) {
            t.crossOrigin = "";
            var i = document.createElement("canvas");
            i.width = t.width, i.height = t.height;
            var e = i.getContext("2d");
            e.drawImage(t, 0, 0);
            for (var n = e.getImageData(0, 0, i.width, i.height), o = n.data, s = 0, r = o.length; s < r; s += 4) o[s] = o[s + 1] = o[s + 2] = (this.options.quotaRed * o[s] + this.options.quotaGreen * o[s + 1] + this.options.quotaBlue * o[s + 2]) / this.options.quotaDivider();
            e.putImageData(n, 0, 0), t.setAttribute("data-grayscaled", !0), t.src = i.toDataURL()
        }
    }
}), L.tileLayer.grayscale = function(t, i) {
    return new L.TileLayer.Grayscale(t, i)
};





/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);





/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
})(this, function() {
    return function(t) {
        function e(n) {
            if (s[n]) return s[n].exports;
            var i = s[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var s = {};
        return e.m = t, e.c = s, e.p = "", e(0)
    }([function(t, e, s) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            r = s(1),
            o = s(3),
            a = function() {
                function t(e, s) {
                    n(this, t), r.initializer.load(this, s, e), this.begin()
                }
                return i(t, [{
                    key: "toggle",
                    value: function() {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(!1), this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var t = this;
                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(t, e) {
                        var s = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var n = this.humanizer(this.typeSpeed),
                            i = 1;
                        return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void(this.timeout = setTimeout(function() {
                            e = o.htmlParser.typeHtmlChars(t, e, s);
                            var n = 0,
                                r = t.substr(e);
                            if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                var a = 1;
                                r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                            }
                            if ("`" === r.charAt(0)) {
                                for (;
                                    "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                                var u = t.substring(0, e),
                                    l = t.substring(u.length + 1, e + i),
                                    c = t.substring(e + i + 1);
                                t = u + l + c, i--
                            }
                            s.timeout = setTimeout(function() {
                                s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                            }, n)
                        }, n))
                    }
                }, {
                    key: "keepTyping",
                    value: function(t, e, s) {
                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                        var n = t.substr(0, e);
                        this.replaceText(n), this.typewrite(t, e)
                    }
                }, {
                    key: "doneTyping",
                    value: function(t, e) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                            s.backspace(t, e)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(t, e) {
                        var s = this;
                        if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
                        if (this.fadeOut) return this.initFadeOut();
                        this.toggleBlinking(!1);
                        var n = this.humanizer(this.backSpeed);
                        this.timeout = setTimeout(function() {
                            e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                            var n = t.substr(0, e);
                            if (s.replaceText(n), s.smartBackspace) {
                                var i = s.strings[s.arrayPos + 1];
                                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                            }
                            e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                        }, n)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function(t, e, s) {
                        this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                    }
                }, {
                    key: "toggleBlinking",
                    value: function(t) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function(t) {
                        return Math.round(Math.random() * t / 2) + t
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function() {
                        this.shuffle && (this.sequence = this.sequence.sort(function() {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "initFadeOut",
                    value: function() {
                        var t = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function(t) {
                        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var t = this;
                        this.isInput && (this.el.addEventListener("focus", function(e) {
                            t.stop()
                        }), this.el.addEventListener("blur", function(e) {
                            t.el.value && 0 !== t.el.value.length || t.start()
                        }))
                    }
                }, {
                    key: "insertCursor",
                    value: function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), t
            }();
        e["default"] = a, t.exports = e["default"]
    }, function(t, e, s) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = arguments[e];
                    for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
                }
                return t
            },
            o = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            a = s(2),
            u = n(a),
            l = function() {
                function t() {
                    i(this, t)
                }
                return o(t, [{
                    key: "load",
                    value: function(t, e, s) {
                        if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(t) {
                                return t.trim()
                            }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                            t.strings = [], t.stringsElement.style.display = "none";
                            var n = Array.prototype.slice.apply(t.stringsElement.children),
                                i = n.length;
                            if (i)
                                for (var o = 0; o < i; o += 1) {
                                    var a = n[o];
                                    t.strings.push(a.innerHTML.trim())
                                }
                        }
                        t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: "",
                            curStrPos: 0
                        }, t.typingComplete = !1;
                        for (var o in t.strings) t.sequence[o] = o;
                        t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function(t) {
                        var e = "";
                        return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function(t) {
                        var e = "data-typed-js-css";
                        if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                            var s = document.createElement("style");
                            s.type = "text/css", s.setAttribute(e, !0);
                            var n = "";
                            t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                        }
                    }
                }]), t
            }();
        e["default"] = l;
        var c = new l;
        e.initializer = c
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function(t) {},
            preStringTyped: function(t, e) {},
            onStringTyped: function(t, e) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, e) {},
            onTypingResumed: function(t, e) {},
            onReset: function(t) {},
            onStop: function(t, e) {},
            onStart: function(t, e) {},
            onDestroy: function(t) {}
        };
        e["default"] = s, t.exports = e["default"]
    }, function(t, e) {
        "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            i = function() {
                function t() {
                    s(this, t)
                }
                return n(t, [{
                    key: "typeHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
                            e++
                        }
                        return e
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
                            e--
                        }
                        return e
                    }
                }]), t
            }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r
    }])
});






(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){"use strict";var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" />').text(i+1)},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange"}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)}return Slick}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==="boolean"){addBefore=index;index=null}else if(index<0||index>=_.slideCount){return false}_.unload();if(typeof index==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";_.$slideTrack.css(animProps)}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)"}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)"}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase}if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)))}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active")}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")});_.$slider.addClass("slick-slider");_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable")}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({width:100/_.options.slidesPerRow+"%",display:"inline-block"})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth}else if(_.respondTo==="slider"){respondToWidth=sliderWidth}else if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth)}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial);triggerBreakpoint=targetBreakpoint}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault()}if(!$target.is("li")){$target=$target.closest("li")}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate)}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate)}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}}return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off("keydown.slick",_.keyHandler)}}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off("keydown.slick",_.keyHandler);_.$nextArrow&&_.$nextArrow.off("keydown.slick",_.keyHandler)}}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler)}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(event){var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){if($sf.is(":focus")){_.focussed=true;_.autoPlay()}}},0)}).on("blur.slick","*",function(event){var $sf=$(this);if(_.options.pauseOnFocus){_.focussed=false;_.autoPlay()}})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===true){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5}else if(_.options.slidesToShow===1){coef=-2}}verticalOffset=verticalHeight*_.options.slidesToShow*coef}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,swipeTarget,centerOffset;centerOffset=_.options.centerMode===true?Math.floor(_.$list.width()/2):0;swipeTarget=_.swipeLeft*-1+centerOffset;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){var slideOuterWidth,slideOffset,slideRightBoundary;slideOuterWidth=$(slide).outerWidth();slideOffset=slide.offsetLeft;if(_.options.centerMode!==true){slideOffset+=slideOuterWidth/2}slideRightBoundary=slideOffset+slideOuterWidth;if(swipeTarget<slideRightBoundary){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()}if(creation){_.$slider.trigger("init",[_])}if(_.options.accessibility===true){_.initADA()}if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount});_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({role:"tabpanel",id:"slick-slide"+_.instanceUid+i,tabindex:-1});if(slideControlIndex!==-1){var ariaButtonControl="slick-slide-control"+_.instanceUid+slideControlIndex;if($("#"+ariaButtonControl).length){$(this).attr({"aria-describedby":ariaButtonControl})}}});_.$dots.attr("role","tablist").find("li").each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({role:"presentation"});$(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+_.instanceUid+i,"aria-controls":"slick-slide"+_.instanceUid+mappedSlideIndex,"aria-label":i+1+" of "+numDotGroups,"aria-selected":null,tabindex:"-1"})}).eq(_.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end()}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({tabindex:"0"})}else{_.$slides.eq(i).removeAttr("tabindex")}}_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on("keydown.slick",_.keyHandler);_.$nextArrow.on("keydown.slick",_.keyHandler)}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide);if(_.options.accessibility===true){_.$dots.on("keydown.slick",_.keyHandler)}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}})}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageSrcSet=$(this).attr("data-srcset"),imageSizes=$(this).attr("data-sizes")||_.$slider.attr("data-sizes"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")});_.$slider.trigger("lazyLoaded",[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource])};imageToLoad.src=imageSource})}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);if(_.options.lazyLoad==="anticipated"){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find(".slick-slide");for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition()}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr("tabindex",0).focus()}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageSrcSet=image.attr("data-srcset");imageSizes=image.attr("data-sizes")||_.$slider.attr("data-sizes");imageToLoad=document.createElement("img");imageToLoad.onload=function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition()}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger("allImagesLoaded",[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}l--}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else{index=removeBefore===true?--index:index}if(_.slideCount<1||index<0||index>_.slideCount-1){return false}_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps)}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:"0px "+_.options.centerPadding})}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+" 0px"})}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children(".slick-slide").length))}else if(_.options.variableWidth===true){_.$slideTrack.width(5e3*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length))}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];refresh=arguments[1];type="multiple"}else if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive"}else if(typeof arguments[1]!=="undefined"){type="single"}}if(type==="single"){_.options[option]=value}else if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}l--}_.options.responsive.push(value[item])}}}if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}_.$slider.trigger("setPosition",[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical")}else{_.$slider.removeClass("slick-vertical")}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined)_.animType=false}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition"}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false")}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center")}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center")}}_.$slides.eq(index).addClass("slick-center")}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false")}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false")}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}}}if(_.options.lazyLoad==="ondemand"||_.options.lazyLoad==="anticipated"){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return}_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return}if(_.options.fade===true&&_.currentSlide===index){return}if(sync===false){_.asNavFor(index)}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}if(_.options.autoplay){clearInterval(_.autoPlayTimer)}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}_.animateHeight();return}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}_.$slider.addClass("slick-loading")};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?"left":"right"}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?"left":"right"}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?"right":"left"}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return"down"}else{return"up"}}return"vertical"};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()])}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||"ontouchend"in document&&_.options.swipe===false){return}else if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault()}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==="right"||_.currentSlide>=_.getDotCount()&&swipeDirection==="left"){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset}if(_.options.fade===true||_.options.touchMove===false){return false}if(_.animating===true){_.swipeLeft=null;return false}_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").end();_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active")}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true}else{_.interrupted=false}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined")_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!="undefined")return ret}return _}});






// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);





/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
! function(e, t, n) {
    function a(t, n) {
        this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
    }
    var i = {
            label: "MENU",
            duplicate: !0,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            appendTo: "",
            parentTag: "a",
            closeOnClick: !1,
            allowParentLinks: !1,
            nestedParentLinks: !0,
            showChildren: !1,
            removeIds: !0,
            removeClasses: !1,
            removeStyles: !1,
            brand: "",
            animations: "jquery",
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        s = "slicknav",
        o = "slicknav",
        l = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
    a.prototype.init = function() {
        var n, a, i = this,
            s = e(this.element),
            r = this.settings;
        if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("id")
            })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("class")
            })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("style")
            })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
            var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
            e(a).append(c)
        }
        i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
        var p = i.mobileNav.find("li");
        e(p).each(function() {
            var t = e(this),
                n = {};
            if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
                var a = t.contents(),
                    s = !1,
                    l = [];
                e(a).each(function() {
                    return e(this).is("ul") ? !1 : (l.push(this), void(e(this).is("a") && (s = !0)))
                });
                var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
                if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
                else {
                    var p = e(l).wrapAll(c).parent();
                    p.addClass(o + "_row")
                }
                r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
                var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
                r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d)
            } else 0 === t.children().length && t.addClass(o + "_txtnode");
            t.children("a").attr("role", "menuitem").click(function(t) {
                r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
            }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function(t) {
                e(i.btn).click()
            }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function(t) {
                e(i.btn).click()
            }))
        }), e(p).each(function() {
            var t = e(this).data("menu");
            r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
        }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function() {
            i._outlines(!1)
        }), e(t).keyup(function() {
            i._outlines(!0)
        }), e(i.btn).click(function(e) {
            e.preventDefault(), i._menuToggle()
        }), i.mobileNav.on("click", "." + o + "_item", function(t) {
            t.preventDefault(), i._itemClick(e(this))
        }), e(i.btn).keydown(function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                case l.SPACE:
                case l.DOWN:
                    t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", "." + o + "_item", function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                    t.preventDefault(), i._itemClick(e(t.target));
                    break;
                case l.RIGHT:
                    t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.DOWN:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        r = s + 1;
                    a.length <= r && (r = 0);
                    var c = a.eq(r);
                    c.focus();
                    break;
                case l.UP:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        c = a.eq(s - 1);
                    c.focus();
                    break;
                case l.LEFT:
                    if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
                        var p = e(t.target).parent().parent().prev();
                        p.focus(), i._itemClick(p)
                    } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
                    break;
                case l.ESCAPE:
                    t.preventDefault(), i._menuToggle(), e(i.btn).focus()
            }
        }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function(e) {
            e.stopImmediatePropagation()
        })
    }, a.prototype._menuToggle = function(e) {
        var t = this,
            n = t.btn,
            a = t.mobileNav;
        n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n)
    }, a.prototype._itemClick = function(e) {
        var t = this,
            n = t.settings,
            a = e.data("menu");
        a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e))
    }, a.prototype._visibilityToggle = function(t, n, a, i, s) {
        function l(t, n) {
            e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t)
        }

        function r(n, a) {
            t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n)
        }
        var c = this,
            p = c.settings,
            d = c._getActionItems(t),
            u = 0;
        a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function() {
            l(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
            duration: u,
            easing: p.easingOpen,
            complete: function() {
                l(i, n)
            }
        }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function() {
            r(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
            duration: u,
            easing: p.easingClose,
            complete: function() {
                r(i, n)
            }
        }))
    }, a.prototype._setVisAttr = function(t, n) {
        var a = this,
            i = t.children("li").children("ul").not("." + o + "_hidden");
        n ? i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"), a._setVisAttr(t, n)
        }) : i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"), a._setVisAttr(t, n)
        })
    }, a.prototype._getActionItems = function(e) {
        var t = e.data("menu");
        if (!t) {
            t = {};
            var n = e.children("li"),
                a = n.find("a");
            t.links = a.add(n.find("." + o + "_item")), e.data("menu", t)
        }
        return t.links
    }, a.prototype._outlines = function(t) {
        t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
    }, a.prototype.toggle = function() {
        var e = this;
        e._menuToggle()
    }, a.prototype.open = function() {
        var e = this;
        e.btn.hasClass(o + "_collapsed") && e._menuToggle()
    }, a.prototype.close = function() {
        var e = this;
        e.btn.hasClass(o + "_open") && e._menuToggle()
    }, e.fn[s] = function(t) {
        var n = arguments;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
        });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var i;
            return this.each(function() {
                var o = e.data(this, "plugin_" + s);
                o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
            }), void 0 !== i ? i : this
        }
    }
}(jQuery, document, window);