// Portfolio Tab
"use strict";
jQuery(document)
    .ready(function(a) {
        var g = a(".isotope-filters");
        g.on("click", "a", function() {
                var b = a(this),
                    c = (b.data("filter"), b.closest(".isotope-filters"));
                return b.hasClass("selected") ? !1 : (c.find("a")
                    .removeClass("active"), b.addClass("active"), c.next()
                    .find(".isotope")
                    .addBack(".isotope")
                    .isotope({
                        filter: b.attr("data-filter")
                    }), !1)
            }), a(window)
            .smartresize(function() {
                a(".isotope")
                    .isotope("reLayout")
            }), a("[data-iconcolor]")
            .each(function() {
                var b = a(this),
                    c = a(b)
                    .css("background-color"),
                    d = a(b)
                    .find("i")
                    .css("color");
                b.on("mouseenter", function() {
                    b.css("background-color", b.attr("data-iconcolor")), b.find("i")
                        .css("color", "#ffffff"), b.parents(".social-icons")
                        .hasClass("social-simple") && b.find("i")
                        .css("color", b.attr("data-iconcolor"))
                }), b.on("mouseleave", function() {
                    b.css("background-color", c), b.find("i")
                        .css("color", d), b.parents(".social-icons")
                        .hasClass("social-simple") && b.find("i")
                        .css("color", d)
                })
				, a('[class*="oxy-agent-"] .section-fullheight')
    .removeClass("section-fullheight")
    .css("min-height", a(window)
        .height())
    .find(".container, .container-fullwidth")
    .css("min-height", a(window)
        .height())
    .find('.row, [class*="col-md"]')
    .css("position", "static"), a("html.ie8, html.ie9")
    .find("input, textarea")
    .placeholder(), a(".video-wrapper")
    .fitVids(), a(".section-background-video, audio")
    .mediaelementplayer({
        pauseOtherPlayers: !1,
        success: function (b) {
            var c = a(b)
                .closest("section"),
                d = c.outerHeight(),
                e = b.clientHeight;
            a(b)
                .css("margin-top", d / 2 - e / 2), c.find(".mejs-overlay-loading")
                .css("margin-top", d / 2 - e / 2)
        }
    })
            });

        a("body")
            .waypoint({
                offset: -200,
                handler: function(b) {
                    "down" === b ? a(".go-top")
                        .css("bottom", "12px")
                        .css("opacity", "1") : a(".go-top")
                        .css("bottom", "-44px")
                        .css("opacity", "0")
                }
            }), a(".go-top")
            .click(function(b) {
                b.preventDefault(), a("html, body")
                    .animate({
                        scrollTop: 0
                    }, 300)
            }), a(".os-animation")
            .each(function() {
                var b = a(this),
                    c = b.attr("data-os-animation"),
                    d = b.attr("data-os-animation-delay");
                b.css("-webkit-animation-delay", d), b.css("-moz-animation-delay", d), b.css("animation-delay", d), b.waypoint(function() {
                    a(this)
                        .addClass("animated")
                        .addClass(c)
                }, {
                    triggerOnce: !0,
                    offset: "100%"
                })
            });



        // Isotope Animation JS

        function f(a, b, c) {
            a.length && b.parent()
                .removeClass("active current-menu-item")
                .end()
                .filter('[href$="' + c.id + '"]')
                .parent()
                .addClass("active current-menu-item")
        }
        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? a(".section-fullheight")
            .removeClass("section-fullheight")
            .css("min-height", a(window)
                .height()) : skrollr.init({
                forceHeight: !1
            }), a(".flexslider[id]")
            .filter(function() {
                return a(this)
                    .parents(".carousel")
                    .length < 1
            })
            .each(function() {
                var b = this;
                a(this)
                    .imagesLoaded()
                    .done(function() {
                        c(b)
                    })
            }), !navigator.userAgent.match(/iPhone/i) && !navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i) || window.addEventListener && window.addEventListener("load", function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 0)
            }), a('[data-toggle="tooltip"]')
            .tooltip(), a(".carousel")
            .carousel({
                interval: 7e3
            }), a(".carousel")
            .on("slid", function() {
                setTimeout(function() {
                    d()
                }, 0)
            }), a(".counter")
            .each(function() {
                var b = a(this);
                b.waypoint(function() {
                    b.find(".odometer")
                        .html(b.attr("data-count"))
                }, {
                    triggerOnce: !0,
                    offset: "bottom-in-view"
                })
            }), a("[data-animation]")
            .each(function() {
                var b = a(this);
                b.on("mouseenter", function() {
                    b.addClass("animated " + b.attr("data-animation"))
                }), b.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    b.removeClass("animated " + b.attr("data-animation"))
                })
            }), a(".isotope")
            .each(function(b, c) {
                var d = a(c);
                d.imagesLoaded()
                    .done(function() {
                        setTimeout(function() {
                            d.isotope(), setTimeout(function() {
                                d.removeClass("no-transition")
                            }, 500)
                        }, 100)
                    })
            });
    });
