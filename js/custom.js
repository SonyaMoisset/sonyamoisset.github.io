

jQuery(window)
        .load(function () {
            "use strict";

            var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
            var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);


            if (IS_IPAD == true || IS_IPHONE == true) {
                jQuery('#animationcss').remove();
            }
        })

/* =================================
 Sticky Nav
 ==================================== */

//Shrink Navigation
var cbpAnimatedHeader = (function () {
    function init() {
        "use strict";
        window.addEventListener('scroll', function (event) {
        }, false);
        window.addEventListener('scroll', function (e) {
            if ($(window)
                    .scrollTop() > 10) {
                $('nav')
                        .addClass('shrink-nav');
            } else {
                $('nav')
                        .removeClass('shrink-nav');
            }
        });
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();
})();

function init() {
}

window.onload = init();
$(document).ready(function () {
    /* =================================
    Fit Video
    ==================================== */

    // Target your .container, .wrapper, .post, etc.
    $(".video-main").fitVids();

    try {
        var url = window.location.href;
        var arr = url.split('?');
        if (arr[1])
        {
            $("#nav-" + arr[1]).trigger('click');
        }
    }
    catch (err) {
    }
    /* =================================
     Form To Email
     ==================================== */

    $("#submit-button").click(function () {
        var error = validationContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(".form-group form").serialize(),
                success: function (result) {
                    $('input[type=text]').each(function () {
                        $(this).val('');
                    })
                    $("textarea.form-control").val('');
                    $(".form-group form").delay(100).slideUp(1000, function () {
                        $("#success").html(result);
                        $('#success').delay(500).slideDown(500);
                    });
                }
            });
        }
    });

    function validationContactForm()
    {
        var error = true;
        $('input[type=text]').each(function (index) {

            if (index == 1)
            {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())))
                {
                    $("form").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    $("form").find("input:eq(" + index + ")").css({"border": "0px solid red"});
                }
            }
            else if (index == 0)
            {
                if ($(this).val() == null || $(this).val() == "")
                {
                    $("form").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    $("form").find("input:eq(" + index + ")").css({"border": "0px solid red"});
                }
            }
        });
        return error;
    }

    /* -------------- End -------------- */

    "use strict";
    // Blog Start
    $('.blog-content-out')
            .css("display", "none");
    $('.blog-content')
            .click(function () {
                jQuery('.blog-content-out')
                        .slideUp();
                jQuery('.blog-content')
                        .removeClass("active");
                if (jQuery(this)
                        .find('.blog-content-out')
                        .css("display") == "none") {
                    jQuery(this)
                            .find('.blog-content-out')
                            .slideDown();
                    jQuery(this)
                            .addClass('active');
                } else {
                    jQuery(this)
                            .removeClass("active");
                    jQuery(this)
                            .find('.blog-content-out')
                            .slideUp();
                }
            });

    // Shrink nav on scroll
    $(window)
            .scroll(function () {
                if ($(window)
                        .scrollTop() > 10) {
                    $('nav')
                            .addClass('shrink-nav');
                } else {
                    $('nav')
                            .removeClass('shrink-nav');
                }
            });

    // Mobile Toggle Control
    $('.mobile-toggle')
            .click(function () {
                $('nav')
                        .toggleClass('open-nav');
            });
    $('.dropdown-arrow')
            .click(function () {
                if ($('.mobile-toggle')
                        .is(":visible")) {
                    if ($(this)
                            .children('.dropdown')
                            .hasClass('open-nav')) {
                        $(this)
                                .children('.dropdown')
                                .removeClass('open-nav');
                    } else {
                        $('.dropdown')
                                .removeClass('open-nav');
                        $(this)
                                .children('.dropdown')
                                .addClass('open-nav');
                    }
                }
            });

    // Position Fullwidth Subnavs fullwidth correctly
    $('.dropdown-fullwidth')
            .each(function () {
                $(this)
                        .css('width', $('.row')
                                .width());
                var subNavOffset = -($('nav .row')
                        .innerWidth() - $('.menu')
                        .innerWidth() - 15);
                $(this)
                        .css('left', subNavOffset);
            });

    /* =================================
     Full Screen Header
     ==================================== */
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
    }
    SetResizeContent();
    //Navigation Visible On Scroll
    mainNav();
    //Popup Scrollbar

    var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);


    if (IS_IPAD == true || IS_IPHONE == true) {

    }
    else
    {
        $('li.content-scroll figure').removeAttr('class');

        try {
            $(".content-scroll").mCustomScrollbar({
                autoHideScrollbar: true,
                theme: "minimal-dark"
            });
        }
        catch (err) {
        }


    }


    //Slider carousel



    $('.carousel').each(function () {
        $(this).carousel({
            //Stop auto sliding
            //interval: false
            //Auto sliding, define time interval like 5000.
            interval: 5600
        });
        $(this).carousel('pause');
    });


    $(window)
            .scroll(function () {
                if ($(this)
                        .scrollTop() > 100) {
                    $('.scrollToTop')
                            .fadeIn();
                } else {
                    $('.scrollToTop')
                            .fadeOut();
                }
            });

    //Click event to scroll to top
    $('.scrollToTop')
            .click(function () {
                $('html, body')
                        .animate({
                            scrollTop: 0
                        }, 1000);
                return false;
            });

    /* =================================
     easyPieChart
     ==================================== */

    $('.chart').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#FFF',
        trackColor: '#fb905c',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart2').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#FFF',
        trackColor: '#e7c992',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart3').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#FFF',
        trackColor: '#a0004f',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart4').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#b3b3b3',
        trackColor: '#848484',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart5').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#12569b',
        trackColor: '#cdcdcd',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart6').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#aaaaaa',
        trackColor: '#e0e0e0',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart7').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#ffffff',
        trackColor: '#671718',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.chart8').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#676767',
        trackColor: '#4b4b4b',
        scaleColor: false,
        scaleLength: 5,
        percent: 67,
        lineCap: 'round',
        lineWidth: 15, //12
        size: 150, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    // Windows Resize Events
    $(window)
            .resize(function () {
                // Position Fullwidth Subnavs fullwidth correctly
                $('.dropdown-fullwidth')
                        .each(function () {
                            $(this)
                                    .css('width', $('.row')
                                            .width());
                            var subNavOffset = -($('nav .row')
                                    .innerWidth() - $('.menu')
                                    .innerWidth() - 15);
                            $(this)
                                    .css('left', subNavOffset);
                        });

                //Set Height of Full Screen Header
                SetResizeContent();

                //Portfolio Items Resize
                $('.portfolio').isotope('reLayout')

            });

    // Navigation Start
    $('.main-navigation')
            .onePageNav({
                scrollSpeed: 750,
                scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
                scrollOffset: 79 //Height of Navigation Bar
            });


    $('navbar-nav ul li a')
            .click(function (e) {

                $(".main section")
                        .removeClass(" ");
                $($(this)
                        .attr('href'))
                        .addClass(' ');
                $(this)
                        .parent()
                        .parent()
                        .parent()
                        .removeClass('in');
            });
});


$(window)
        .scroll(function () {
            mainNav();
        });
if (matchMedia('(min-width: 992px), (max-width: 767px)')
        .matches) {
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40)
            $('.sticky-navigation')
                    .stop()
                    .animate({
                        "top": '0'
                    });
        else {
            $('.sticky-navigation')
                    .stop()
                    .animate({
                        "top": '-80'
                    });
            $('#navbar')
                    .removeClass('in');
        }
    }
}
if (matchMedia('(min-width: 768px) and (max-width: 991px)')
        .matches) {
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40)
            $('.sticky-navigation')
                    .stop()
                    .animate({
                        "top": '0'
                    });
        else
            $('.sticky-navigation')
                    .stop()
                    .animate({
                        "top": '-120'
                    });
    }
}
/* =================================
 Smooth Scroll
 ==================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop()
            .animate({
                'scrollTop': $(target)
                        .offset()
                        .top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
});
// Inner links
$('.inner-link').smoothScroll({
    speed: 900,
    offset: -68
});
/* =================================
 Stellar
 ==================================== */
$(window)
        .stellar({
            horizontalScrolling: false
        });
/* =================================
 IE10 On Windows 8 Fix
 =================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
            document.createTextNode(
                    '@-ms-viewport{width:auto!important}'
                    )
            )
    document.querySelector('head')
            .appendChild(msViewportStyle)
}
/* =================================
 Blog (load more)
 ==================================== */
var $group = $('.group');
$("#load-more").click(function () {
    if ($(this).hasClass('disable'))
        return false;
    var $hidden = $group.filter(':hidden:first').addClass('show');
    if (!$hidden.next('.group').length) {
        $(this).addClass('disable');
    }
});
//Bootstrap collapsed menu
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});
