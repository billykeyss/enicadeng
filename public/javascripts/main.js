function showStuff(r) {
    r.style.display = "block";
}

function changeText(r) {
    document.getElementById("expertTitle").innerHTML = r;
}! function (r) {
    if (r(window).scroll(function () {
            r(this).scrollTop() > 100 ? r(".scrollup").fadeIn() : r(".scrollup").fadeOut();
        }), r(".scrollup").click(function () {
            return r("html, body").animate({
                scrollTop: 0
            }, 1e3), !1;
        }), jQuery(".navbar").localScroll({
            hash: !0,
            offset: {
                top: 0
            },
            duration: 800,
            easing: "easeInOutExpo"
        }), r("#quickstart").hover(function () {
            r("#visiblepanel").toggle();
        }), r(".isotopeWrapper").length) {
        var o = r(".isotopeWrapper"),
            t = r(".isotopeWrapper").attr("id");
        o.isotope({
            itemSelector: ".isotopeItem",
            resizable: !1,
            masonry: {
                columnWidth: o.width() / t
            }
        }), r("#filter a").click(function () {
            r("#filter a").removeClass("current"), r(this).addClass("current");
            var e = r(this).attr("data-filter");
            return o.isotope({
                filter: e,
                animationOptions: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    queue: !1
                }
            }), !1;
        }), r(window).smartresize(function () {
            o.isotope({
                masonry: {
                    columnWidth: o.width() / t
                }
            });
        });
    }
    if (jQuery(".fancybox").fancybox(), Modernizr.mq("screen and (max-width:1024px)")) jQuery("body").toggleClass("body");
    else {
        skrollr.init({
            mobileDeceleration: 1,
            edgeStrategy: "set",
            forceHeight: !0,
            smoothScrolling: !0,
            smoothScrollingDuration: 300,
            easing: {
                WTF: Math.random,
                inverted: function (r) {
                    return 1 - r;
                }
            }
        });
    }
    jQuery(".appear").appear(), jQuery(".appear").on("appear", function (e) {
        var o = r(this).attr("id");
        jQuery(".nav li").removeClass("active"), jQuery(".nav a[href='#" + o + "']").parent().addClass("active")
    });
    var i = !1;
}(jQuery);