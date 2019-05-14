function getScrollAmountForStickyHeader () {
  return typeof page_scroll_amount_for_sticky !== 'undefined' ? amount = page_scroll_amount_for_sticky : $j('.carousel.full_screen').length ? amount = $j('.carousel').height() : amount = scroll_amount_for_sticky, amount
}

function headerSize (e) {
  'use strict';
  if ($j('header.page_header').hasClass('scroll_top') && $j('header.page_header').hasClass('has_top') && ($j('header.page_header').hasClass('fixed') || $j('header.page_header').hasClass('fixed_hiding')) && (e >= 0 && e <= 34 ? ($j('header.page_header').css('top', -e), $j('header.page_header').css('margin-top', 0), $j('.header_top').show()) : e > 34 && ($j('header.page_header').css('top', '-34px'), $j('header.page_header').css('margin-top', 34), $j('.header_top').hide())), sticky_amount = getScrollAmountForStickyHeader(), $j('header').hasClass('regular') && (header_height - logo_height >= 10 ? $j('.q_logo a').height(logo_height) : $j('.q_logo a').height(header_height - 10), $j('.q_logo a img').css('height', '100%')), $j('header.page_header').hasClass('fixed') && ($top_header_height = $j('header.page_header').hasClass('scroll_top') ? 34 : 0, header_height - e + $top_header_height >= min_header_height_scroll && e >= $top_header_height ? ($j('header.page_header').removeClass('scrolled'), $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', header_height - e + $top_header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', header_height - e + $top_header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', header_height - e + $top_header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user').css('height', header_height - e + $top_header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', header_height - e + $top_header_height + 'px'), header_height - logo_height > 0 ? $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', logo_height + 'px') : $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', header_height - e + $top_header_height - 10 + 'px')) : e < $top_header_height ? ($j('header.page_header').removeClass('scrolled'), $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user').css('height', header_height + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', header_height + 'px'), header_height - logo_height > 0 ? $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', logo_height + 'px') : $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', header_height - 10 + 'px')) : header_height - e + $top_header_height < min_header_height_scroll && ($j('header.page_header').addClass('scrolled'), $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', min_header_height_scroll + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', min_header_height_scroll + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', min_header_height_scroll + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user').css('height', min_header_height_scroll + 'px'), $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', min_header_height_scroll + 'px'), min_header_height_scroll - logo_height > 0 ? $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', logo_height + 'px') : $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', min_header_height_scroll - 10 + 'px')), $j('header.page_header').hasClass('centered_logo') && $j('header.page_header').hasClass('centered_logo_animate') ? header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e >= $top_header_height ? $j('.q_logo a').height(header_height - e + $top_header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e < $top_header_height ? $j('.q_logo a').height(header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10 ? $j('.q_logo a').height(min_header_height_scroll - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10 ? $j('.q_logo a').height(logo_height) : (e + $top_header_height === 0 && header_height, $j('.q_logo a').height(logo_height)) : $j('header.page_header').hasClass('centered_logo') ? ($j('.q_logo a').height(logo_height), $j('.q_logo img').height('auto')) : $j('.q_logo img').height('100%'), setLeftPostionedMenuPadding()), $j('header.page_header').hasClass('fixed_hiding') && (e < scroll_amount_for_fixed_hiding ? $j('header.page_header').removeClass('scrolled') : $j('header.page_header').addClass('scrolled'), $j('.q_logo a').height(logo_height / 2), $j('.q_logo img').height('100%')), $j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu')) {
    if (e > sticky_amount) {
      if (!$j('header.page_header').hasClass('sticky')) {
        $top_header_height = $j('header.page_header').hasClass('has_top') ? 34 : 0;
        var t = $j('header.page_header').hasClass('centered_logo') ? $j('header.page_header').height() : header_height + $top_header_height;
        $j('header.page_header').hasClass('menu_bottom') && (t = header_height + 60), $j('header.page_header').addClass('sticky'), $j('.content').css('padding-top', t), window.clearTimeout(sticky_animate), sticky_animate = window.setTimeout(function () {
          $j('header.page_header').addClass('sticky_animate')
        }, 100), min_header_height_sticky - logo_height >= 10 ? $j('.q_logo a').height(logo_height) : $j('.q_logo a').height(min_header_height_sticky - 10), $j('header.page_header').hasClass('menu_bottom') && initDropDownMenu()
      }
      min_header_height_sticky - logo_height >= 10 ? $j('.q_logo a').height(logo_height) : $j('.q_logo a').height(min_header_height_sticky - 10)
    } else {
$j('header.page_header').hasClass('sticky') && ($j('header').removeClass('sticky_animate'), $j('header').removeClass('sticky'), $j('.content').css('padding-top', '0px'), $j('header.page_header').hasClass('menu_bottom') && initDropDownMenu()), setMargingsForLeftAndRightMenu(), $j('header.page_header').hasClass('centered_logo') ? ($j('.q_logo a').height(logo_height), $j('.q_logo img').height('auto')) : header_height - logo_height >= 10 ? $j('.q_logo a').height(logo_height) : $j('.q_logo a').height(header_height - 10), $j('.q_logo a img').css('height', '100%');
}
    setLeftPostionedMenuPadding()
  }
}

function qodeMobileHeaderBehavior () {
  if ($j('header').hasClass('sticky_mobile')) {
    var e = $j('.page_header'),
      t = (e.find('.mobile_menu_button'), e.outerHeight()),
      i = $j('#wpadminbar').length ? $j('#wpadminbar').height() : 0,
      o = t,
      a = $scroll,
      n = function () {
        if (e.find('.header_inner').css('padding-top', 0), $window_width < 1e3) {
          var n = $scroll;
          n > o ? (e.addClass('qode-animate-mobile-header'), $j('.content').css('padding-top', t)) : (e.removeClass('qode-animate-mobile-header'), $j('.content').css('padding-top', 0)), n > a && n >= o || n <= o ? (e.removeClass('mobile-header-appear'), e.find('.header_inner').css('padding-top', 0)) : (e.addClass('mobile-header-appear'), e.find('.header_inner').css('padding-top', i)), a = $scroll
        }
      };
    qode_window.on('scroll resize', function () {
      n()
    })
  }
}

function setMargingsForLeftAndRightMenu () {
  'use strict';
  if ($j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('header.page_header').hasClass('left_right_margin_set')) {
    var e = $j('.q_logo a img').width() / 2;
    $scroll == 0 && e != 0 && $j('header.page_header').addClass('left_right_margin_set'), $j('.logo_wrapper').width(2 * e), $j('nav.main_menu.left_side > ul > li:last-child').css('margin-right', e), $j('nav.main_menu.right_side > ul > li:first-child').css('margin-left', e), $j('.rtl nav.main_menu.left_side > ul > li:first-child').css('margin-right', e), $j('.rtl nav.main_menu.left_side > ul > li:last-child').css('margin-right', 0), $j('.rtl nav.main_menu.right_side > ul > li:last-child').css('margin-left', e), $j('.rtl nav.main_menu.right_side > ul > li:first-child').css('margin-left', 0)
  }
}

function setLeftPostionedMenuPadding () {
  'use strict';
  var e = $j('header:not(.centered_logo) nav.main_menu');
  if (e.length && e.hasClass('left')) {
    var t = $j('.q_logo a img').filter(function () {
      return $j(this).css('opacity') == '1'
    });
    e.css('left', t.width())
  }
}

function logoSizeOnSmallScreens () {
  'use strict';
  logo_height > 80 ? $j('.q_logo a').height(80) : $j('.q_logo a').height(logo_height), $j('.q_logo a img').css('height', '100%'), $j('header.page_header').removeClass('sticky_animate sticky'), $j('.content').css('padding-top', '0px')
}

function contentMinHeight () {
  'use strict';
  if ($j('header .header_bottom').length || $j('header .bottom_header').length) {
    if ($j('header .header_bottom').length) {
var e = $j('header .header_bottom').css('background-color');
}
    if ($j('header .bottom_header').length) {
var e = $j('header .bottom_header').css('background-color');
}
    var t = e.substring(e.indexOf('(') + 1, e.lastIndexOf(')')).split(/,\s*/)[3],
      i = void 0 != t || $j('header.page_header').hasClass('transparent') ? 0 : $j('header.page_header').height();
    $j('body .content').css('min-height', $window_height - i - $j('footer:not(.uncover)').height())
  }
}

function contentMinHeightWithPaspartu () {
  'use strict';
  if ($j('.paspartu_enabled').length) {
    var e, t = 0,
      i = $window_width * paspartu_width,
      o = $j('footer').height();
    if ($j('.disable_footer').length && (o = 0), $j('.vertical_menu_enabled').length ? $j('.paspartu_top').length && $j('.paspartu_middle_inner').length && (t += i) : $j('.paspartu_top').length && (t += i), !$j('.paspartu_bottom').length && $j('.disable_bottom_paspartu').length || (t += i), $j('.vertical_menu_enabled').length) {
e = $window_height - t - o;
} else {
      if ($j('header .header_bottom').length) {
var a = $j('header .header_bottom').css('background-color');
}
      if ($j('header .bottom_header').length) {
var a = $j('header .bottom_header').css('background-color');
}
      var n = a.substring(a.indexOf('(') + 1, a.lastIndexOf(')')).split(/,\s*/)[3],
        s = void 0 != n || $j('header.page_header').hasClass('transparent') ? 0 : $j('header.page_header').height();
      e = $window_height - s - t - o
    }
    $j('.content').length && $j('.content').css('min-height', e)
  }
}

function initQodeSlider () {
  'use strict';
  var e = /url\(["']?([^'")]+)['"]?\)/;
  if (default_header_style = '', $j('header.page_header').hasClass('light') && (default_header_style = 'light'), $j('header.page_header').hasClass('dark') && (default_header_style = 'dark'), $j('.carousel').length) {
    var t = {
      zoom_center: '1.2, 0, 0, 1.2, 0, 0',
      zoom_top_left: '1.2, 0, 0, 1.2, -150, -150',
      zoom_top_right: '1.2, 0, 0, 1.2, 150, -150',
      zoom_bottom_left: '1.2, 0, 0, 1.2, -150, 150',
      zoom_bottom_right: '1.2, 0, 0, 1.2, 150, 150',
    };
    !(function (e) {
      var t = /\([0-9epx\.\, \t\-]+/gi,
        i = function (e) {
          return e.match(t)[0].substr(1).split(',')
.map(function (e) {
            return parseFloat(e)
          })
        },
        o = ['transform', '-webkit-transform', ],
        a = function (e) {
          var t = null;

return o.some(function (i) {
            return (t = e.css(i)) !== null && t !== ''
          }), t = t && t !== 'none' ? t : 'matrix(1,0,0,1,0,0)', i(t)
        },
        n = function (e, t) {
          for (var i = 'matrix(' + t.join(',') + ')', a = o.length - 1; a >= 0; --a) {
e.css(o[a], i + ' rotate(0.01deg)')
}
        },
        s = function (e, t, i) {
          return e + i / 100 * (t - e)
        };
      e.fn.transformAnimate = function (t) {
        var o = {
          transform: 'matrix(1,0,0,1,0,0)',
        };
        e.extend(o, t), this.css('percentAnim', 0);
        var r = a(this),
          d = i(o.transform);

return o.step = function (i, o) {
          var a = e(this),
            l = r.map(function (e, t) {
              return s(e, d[t], i)
            });
          n(a, l), t.step && t.step.apply(this, [l, o, ])
        }, this.stop().animate({
          percentAnim: 100,
        }, o)
      }
    }(jQuery)), $j('.carousel').each(function () {
      function i (e, t) {
        var i = t;
        e.hasClass('advanced_responsiveness') ? $window_width > v[0] ? i = t : $window_width > v[1] ? i = 0.75 * t : $window_width > v[2] ? i = 0.6 * t : $window_width > v[3] ? i = 0.55 * t : $window_width <= v[3] && (i = 0.45 * t) : $window_width > v[0] ? i = t : $window_width > v[1] ? i = 0.8 * t : $window_width > v[2] ? i = 0.7 * t : $window_width <= v[2] && (i = Number(t)), e.css({
          height: i + 'px',
        }), e.find('.qode_slider_preloader').css({
          height: i + 'px',
        }), e.find('.qode_slider_preloader .ajax_loader').css({
          display: 'block',
        }), e.find('.item').css({
          height: i + 'px',
        })
      }

      function o (e) {
        p.css({
          height: e + 'px',
        }), p.find('.qode_slider_preloader').css({
          height: e + 'px',
        }), p.find('.qode_slider_preloader .ajax_loader').css({
          display: 'block',
        }), p.find('.item').css({
          height: e + 'px',
        })
      }

      function a (e, t) {
        window['slider_graphic_width_' + t] = [], window['slider_graphic_height_' + t] = [], window['slider_svg_width_' + t] = [], window['slider_svg_height_' + t] = [], window['slider_title_' + t] = [], window['slider_subtitle_' + t] = [], window['slider_text_' + t] = [], window['slider_button1_' + t] = [], window['slider_button2_' + t] = [], window['slider_separator_' + t] = [], window['slider_graphic_width_' + t].push(parseFloat(e.find('.thumb img').data('width'))), window['slider_graphic_height_' + t].push(parseFloat(e.find('.thumb img').data('height'))), window['slider_svg_width_' + t].push(parseFloat(e.find('.qode_slide-svg-holder svg').attr('width'))), window['slider_svg_height_' + t].push(parseFloat(e.find('.qode_slide-svg-holder svg').attr('height'))), window['slider_title_' + t].push(parseFloat(e.find('.q_slide_title').css('font-size'))), window['slider_subtitle_' + t].push(parseFloat(e.find('.q_slide_subtitle').css('font-size'))), window['slider_text_' + t].push(parseFloat(e.find('.q_slide_text').css('font-size'))), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('font-size'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('font-size'))), window['slider_title_' + t].push(parseFloat(e.find('.q_slide_title').css('line-height'))), window['slider_subtitle_' + t].push(parseFloat(e.find('.q_slide_subtitle').css('line-height'))), window['slider_text_' + t].push(parseFloat(e.find('.q_slide_text').css('line-height'))), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('line-height'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('line-height'))), window['slider_title_' + t].push(parseFloat(e.find('.q_slide_title').css('letter-spacing'))), window['slider_subtitle_' + t].push(parseFloat(e.find('.q_slide_subtitle').css('letter-spacing'))), window['slider_text_' + t].push(parseFloat(e.find('.q_slide_text').css('letter-spacing'))), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('letter-spacing'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('letter-spacing'))), window['slider_title_' + t].push(parseFloat(e.find('.q_slide_title').css('margin-bottom'))), window['slider_subtitle_' + t].push(parseFloat(e.find('.q_slide_subtitle').css('margin-bottom'))), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('height'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('height'))), parseFloat(e.find('.qbutton:eq(0)').css('width')) != 0 ? window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('width'))) : window['slider_button1_' + t].push(0), parseFloat(e.find('.qbutton:eq(1)').css('width')) != 0 ? window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('width'))) : window['slider_button2_' + t].push(0), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('padding-left'))), window['slider_button1_' + t].push(parseFloat(e.find('.qbutton:eq(0)').css('padding-right'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('padding-left'))), window['slider_button2_' + t].push(parseFloat(e.find('.qbutton:eq(1)').css('padding-right'))), window['slider_separator_' + t].push(parseFloat(e.find('.separator').css('margin-top'))), window['slider_separator_' + t].push(parseFloat(e.find('.separator').css('margin-bottom')))
      }

      function n (e, t) {
        $window_width > v[0] ? (c = j[0], h = w[0], _ = b[0], u = q[0], f = y[0]) : $window_width > v[1] ? (c = j[1], h = w[1], _ = b[1], u = q[1], f = y[1]) : $window_width > v[2] ? (c = j[2], h = w[2], _ = b[2], u = q[2], f = y[2]) : $window_width > v[3] ? (c = j[3], h = w[3], _ = b[3], u = q[3], f = y[3]) : $window_width > v[4] ? (c = j[4], h = w[4], _ = b[4], u = q[4], f = y[4]) : $window_width > v[5] ? (c = j[5], h = w[5], _ = b[5], u = q[5], f = y[5]) : (c = j[6], h = w[6], _ = b[6], u = q[6], f = y[6]);
        var i = h,
          o = _,
          a = u;
        $window_width <= v[0] && (i = h / 2, o = _ / 2, a = u / 2), e.find('.thumb').css({
          width: Math.round(window['slider_graphic_width_' + t][0] * c) + 'px',
        })
.css({
          height: Math.round(window['slider_graphic_height_' + t][0] * c) + 'px',
        }), e.find('.qode_slide-svg-holder svg').css({
          width: Math.round(window['slider_svg_width_' + t][0] * c) + 'px',
        })
.css({
          height: Math.round(window['slider_svg_height_' + t][0] * c) + 'px',
        }), e.find('.q_slide_title').css({
          'font-size': Math.round(window['slider_title_' + t][0] * h) + 'px',
        }), e.find('.q_slide_title').css({
          'line-height': Math.round(window['slider_title_' + t][1] * h) + 'px',
        }), e.find('.q_slide_title').css({
          'letter-spacing': Math.round(window['slider_title_' + t][2] * i) + 'px',
        }), e.find('.q_slide_title').css({
          'margin-bottom': Math.round(window['slider_title_' + t][3] * h) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'font-size': Math.round(window['slider_subtitle_' + t][0] * _) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'line-height': Math.round(window['slider_subtitle_' + t][1] * _) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'letter-spacing': Math.round(window['slider_subtitle_' + t][2] * o) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'margin-bottom': Math.round(window['slider_subtitle_' + t][3] * _) + 'px',
        }), e.find('.q_slide_text').css({
          'font-size': Math.round(window['slider_text_' + t][0] * u) + 'px',
        }), e.find('.q_slide_text').css({
          'line-height': Math.round(window['slider_text_' + t][1] * u) + 'px',
        }), e.find('.q_slide_text').css({
          'letter-spacing': Math.round(window['slider_text_' + t][2] * a) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'font-size': Math.round(window['slider_button1_' + t][0] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'font-size': Math.round(window['slider_button2_' + t][0] * f) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'line-height': Math.round(window['slider_button1_' + t][1] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'line-height': Math.round(window['slider_button2_' + t][1] * f) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'letter-spacing': Math.round(window['slider_button1_' + t][2] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'letter-spacing': Math.round(window['slider_button2_' + t][2] * f) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          height: Math.round(window['slider_button1_' + t][3] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          height: Math.round(window['slider_button2_' + t][3] * f) + 'px',
        }), window['slider_button1_' + t][4] != 0 ? e.find('.qbutton:eq(0)').css({
          width: Math.round(window['slider_button1_' + t][4] * f) + 'px',
        }) : e.find('.qbutton:eq(0)').css({
          width: 'auto',
        }), window['slider_button2_' + t][4] != 0 ? e.find('.qbutton:eq(1)').css({
          width: Math.round(window['slider_button2_' + t][4] * f) + 'px',
        }) : e.find('.qbutton:eq(1)').css({
          width: 'auto',
        }), e.find('.qbutton:eq(0)').css({
          'padding-left': Math.round(window['slider_button1_' + t][5] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'padding-left': Math.round(window['slider_button2_' + t][5] * f) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'padding-right': Math.round(window['slider_button1_' + t][6] * f) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'padding-right': Math.round(window['slider_button2_' + t][6] * f) + 'px',
        }), e.find('.separator').css({
          'margin-top': Math.round(window['slider_separator_' + t][0] * h) + 'px',
        }), e.find('.separator').css({
          'margin-bottom': Math.round(window['slider_separator_' + t][1] * h) + 'px',
        })
      }

      function s (e, t) {
        e.find('.thumb').css({
          width: Math.round(window['slider_graphic_width_' + t][0]) + 'px',
        })
.css({
          height: Math.round(window['slider_graphic_height_' + t][0]) + 'px',
        }), e.find('.qode_slide-svg-holder svg').css({
          width: Math.round(window['slider_svg_width_' + t][0]) + 'px',
        })
.css({
          height: Math.round(window['slider_svg_height_' + t][0]) + 'px',
        }), e.find('.q_slide_title').css({
          'font-size': Math.round(window['slider_title_' + t][0]) + 'px',
        }), e.find('.q_slide_title').css({
          'line-height': Math.round(window['slider_title_' + t][1]) + 'px',
        }), e.find('.q_slide_title').css({
          'letter-spacing': Math.round(window['slider_title_' + t][2]) + 'px',
        }), e.find('.q_slide_title').css({
          'margin-bottom': Math.round(window['slider_title_' + t][3]) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'font-size': Math.round(window['slider_subtitle_' + t][0]) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'line-height': Math.round(window['slider_subtitle_' + t][1]) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'letter-spacing': Math.round(window['slider_subtitle_' + t][2]) + 'px',
        }), e.find('.q_slide_subtitle').css({
          'margin-bottom': Math.round(window['slider_subtitle_' + t][3]) + 'px',
        }), e.find('.q_slide_text').css({
          'font-size': Math.round(window['slider_text_' + t][0]) + 'px',
        }), e.find('.q_slide_text').css({
          'line-height': Math.round(window['slider_text_' + t][1]) + 'px',
        }), e.find('.q_slide_text').css({
          'letter-spacing': Math.round(window['slider_text_' + t][2]) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'font-size': Math.round(window['slider_button1_' + t][0]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'font-size': Math.round(window['slider_button2_' + t][0]) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'line-height': Math.round(window['slider_button1_' + t][1]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'line-height': Math.round(window['slider_button2_' + t][1]) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'letter-spacing': Math.round(window['slider_button1_' + t][2]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'letter-spacing': Math.round(window['slider_button2_' + t][2]) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          height: Math.round(window['slider_button1_' + t][3]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          height: Math.round(window['slider_button2_' + t][3]) + 'px',
        }), window['slider_button1_' + t][4] != 0 ? e.find('.qbutton:eq(0)').css({
          width: Math.round(window['slider_button1_' + t][4]) + 'px',
        }) : e.find('.qbutton:eq(0)').css({
          width: 'auto',
        }), window['slider_button2_' + t][4] != 0 ? e.find('.qbutton:eq(1)').css({
          width: Math.round(window['slider_button2_' + t][4]) + 'px',
        }) : e.find('.qbutton:eq(1)').css({
          width: 'auto',
        }), e.find('.qbutton:eq(0)').css({
          'padding-left': Math.round(window['slider_button1_' + t][5]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'padding-left': Math.round(window['slider_button2_' + t][5]) + 'px',
        }), e.find('.qbutton:eq(0)').css({
          'padding-right': Math.round(window['slider_button1_' + t][6]) + 'px',
        }), e.find('.qbutton:eq(1)').css({
          'padding-right': Math.round(window['slider_button2_' + t][6]) + 'px',
        }), e.find('.separator').css({
          'margin-top': Math.round(window['slider_separator_' + t][0]) + 'px',
        }), e.find('.separator').css({
          'margin-bottom': Math.round(window['slider_separator_' + t][1]) + 'px',
        })
      }

      function r (e, t) {
        e == 1 ? (p.find('.left.carousel-control .prev').html(t), p.find('.right.carousel-control .next').html(e + 1)) : e == t ? (p.find('.left.carousel-control .prev').html(e - 1), p.find('.right.carousel-control .next').html(1)) : (p.find('.left.carousel-control .prev').html(e - 1), p.find('.right.carousel-control .next').html(e + 1))
      }

      function d () {
        p.find('.carousel-inner .item:first-child').addClass('active'), checkSliderForHeaderStyle($j('.carousel .active'), p.hasClass('header_effect')), p.hasClass('slider_thumbs') && (r(1, M), p.find('.active').next('div')
.find('.image').length ? (src = e.exec(p.find('.active').next('div')
.find('.image')
.attr('style')), next_image = new Image(), next_image.src = src[1]) : (next_image = p.find('.active').next('div')
.find('> .video')
.clone(), next_image.find('.video-overlay').remove(), next_image.find('.video-wrap').width(170)
.height(95), next_image.find('.mejs-container').width(170)
.height(95), next_image.find('video').width(170)
.height(95)), p.find('.right.carousel-control .img').html(next_image)
.find('img, div.video')
.addClass('old'), p.find('.carousel-inner .item:last-child .image').length ? (src = e.exec(p.find('.carousel-inner .item:last-child .image').attr('style')), prev_image = new Image(), prev_image.src = src[1]) : (prev_image = p.find('.carousel-inner .item:last-child > .video').clone(), prev_image.find('.video-overlay').remove(), prev_image.find('.video-wrap').width(170)
.height(95), prev_image.find('.mejs-container').width(170)
.height(95), prev_image.find('video').width(170)
.height(95)), p.find('.left.carousel-control .img').html(prev_image)
.find('img, div.video')
.addClass('old')), p.hasClass('q_auto_start') ? p.carousel({
          interval: k,
          pause: !1,
        }) : p.carousel({
          interval: 0,
          pause: !1,
        }), p.find('.item video').length && initVideoBackgroundSize(), p.hasClass('advanced_responsiveness') && (p.hasClass('responsive_height') || p.hasClass('full_screen')) && p.find('.item').each(function (e) {
          a($j(this), e), n($j(this), e)
        }), $j('.carousel-inner .item:first-child').hasClass('animate_image') && $window_width > 1e3 && p.find('.carousel-inner .item.animate_image:first-child .image').transformAnimate({
          transform: 'matrix(' + t[$j('.carousel-inner .item:first-child').data('animate_image')] + ')',
          duration: 3e4,
        })
      }
      var l, c, h, _, u, f, p = $j(this),
        l = $j(window).width() < 1e3 ? $j('header.page_header').height() : 0,
        g = $window_width > 1e3 && !$j('header.page_header').hasClass('transparent') && $j('body.paspartu_on_top_fixed').length == 0 ? $j('header.page_header').height() : 0,
        m = $j('.paspartu_outer:not(.disable_top_paspartu)').length > 0 ? Math.round($window_width * paspartu_width + g) : 0,
        $ = $j('.paspartu_outer.paspartu_on_bottom_slider').length > 0 ? Math.round($window_width * paspartu_width) : 0,
        v = [1300, 1e3, 768, ];
      if (p.hasClass('advanced_responsiveness')) {
        v = [1600, 1200, 900, 650, 500, 320, ], p.data('q_responsive_breakpoints') && p.data('q_responsive_breakpoints') == 'set2' && (v = [1600, 1300, 1e3, 768, 567, 320, ]);
        var j = p.data('q_responsive_graphic_coefficients').split(','),
          w = p.data('q_responsive_title_coefficients').split(','),
          b = p.data('q_responsive_subtitle_coefficients').split(','),
          q = p.data('q_responsive_text_coefficients').split(','),
          y = p.data('q_responsive_button_coefficients').split(',')
      }
      if (p.hasClass('full_screen')) {
p.css({
        height: $j(window).height() - l - m - $ + 'px',
      }), p.find('.qode_slider_preloader').css({
        height: $j(window).height() - l - m - $ + 'px',
      }), p.find('.qode_slider_preloader .ajax_loader').css({
        display: 'block',
      }), p.find('.item').css({
        height: $j(window).height() - l - m - $ + 'px',
      }), $j('.paspartu_outer:not(.disable_top_paspartu)').length && ($j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), $j(window).resize(function () {
        l = $j(window).width() < 1e3 ? $j('header.page_header').height() : 0, g = $window_width > 1e3 && !$j('header.page_header').hasClass('transparent') && $j('body.paspartu_on_top_fixed').length == 0 ? $j('header.page_header').height() : 0, m = $j('.paspartu_outer:not(.disable_top_paspartu)').length > 0 ? Math.round($window_width * paspartu_width + g) : 0, $ = $j('.paspartu_outer.paspartu_on_bottom_slider').length > 0 ? Math.round($window_width * paspartu_width) : 0, p.css({
          height: $j(window).height() - l - m - $ + 'px',
        }), p.find('.qode_slider_preloader .ajax_loader').css({
          display: 'block',
        }), p.find('.item').css({
          height: $j(window).height() - l - m - $ + 'px',
        }), $j('.paspartu_outer:not(.disable_top_paspartu)').length && ($j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), p.hasClass('advanced_responsiveness') && p.find('.item').each(function (e) {
          n($j(this), e)
        })
      });
} else if (p.hasClass('responsive_height')) {
        var C = p.data('height');
        p.find('.qode_slider_preloader').css({
          height: p.height() - l - m - $ + 'px',
          display: 'block',
        }), $j('.paspartu_outer:not(.disable_top_paspartu)').length && ($j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), i(p, C), $j(window).resize(function () {
          $j('.paspartu_outer:not(.disable_top_paspartu)').length && (g = $window_width > 1e3 && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0, $j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), i(p, C), p.hasClass('advanced_responsiveness') && p.find('.item').each(function (e) {
            n($j(this), e)
          })
        })
      } else {
p.find('.qode_slider_preloader').css({
        height: p.height() - l + 'px',
        display: 'block',
      }), p.find('.qode_slider_preloader .ajax_loader').css({
        display: 'block',
      }), $j('.paspartu_outer:not(.disable_top_paspartu)').length && ($j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), p.hasClass('advanced_responsiveness') && p.find('.item').each(function (e) {
        a($j(this), e), n($j(this), e)
      }), $window_width < 1e3 ? i(p, C) : o(C), $j(window).resize(function () {
        $j('.paspartu_outer:not(.disable_top_paspartu)').length && (g = $window_width > 1e3 && !$j('header.page_header').hasClass('transparent') ? $j('header.page_header').height() : 0, $j('body').hasClass('paspartu_on_top_fixed') || p.closest('.q_slider').css('padding-top', Math.round(g + $window_width * paspartu_width))), $j('.paspartu_outer.paspartu_on_bottom_slider').length && p.closest('.q_slider').css('padding-bottom', Math.round($window_width * paspartu_width)), $window_width < 1e3 ? (i(p, C), p.hasClass('advanced_responsiveness') && p.find('.item').each(function (e) {
          n($j(this), e)
        })) : (o(C), p.hasClass('advanced_responsiveness') && p.find('.item').each(function (e) {
          s($j(this), e)
        }))
      });
}
      if ($j('body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_hidden):not(.page-template-landing_page-php)').hasClass('vertical_menu_enabled') && $j(window).width() > 1e3) {
        var x = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
        p.find('.carousel-inner').width($window_width - 260 - x), $j(window).resize(function () {
          $j(window).width() > 1e3 ? (x = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0, p.find('.carousel-inner').width($window_width - 260 - x)) : p.find('.carousel-inner').css('width', '100%')
        })
      }
      if ($j('body:not(.boxed):not(.vertical_menu_transparency):not(.page-template-landing_page-php)').hasClass('vertical_menu_hidden') && $window_width > 1e3) {
        var x = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0;
        p.find('.carousel-inner').width($window_width - 40 - x), $j(window).resize(function () {
          $j(window).width() > 1e3 ? (x = $j('body').hasClass('paspartu_enabled') ? 2 * Math.round($window_width * paspartu_width) : 0, p.find('.carousel-inner').width($window_width - 40 - x)) : p.find('.carousel-inner').css('width', '100%')
        })
      }
      $j(window).scroll(function () {
        $scroll > p.height() + $j('header.page_header').height() && $j(window).width() > 1e3 ? p.find('.carousel-inner, .carousel-indicators, button').hide() : p.find('.carousel-inner, .carousel-indicators, button').show()
      });
      var k = p.data('slide_animation');
      k === '' && (k = 6e3);
      var M = $j('div.item').length;
      if ($j('html').hasClass('touch')) {
        if (p.find('.item:first-child .mobile-video-image').length > 0) {
          if (src = e.exec(p.find('.item:first-child .mobile-video-image').attr('style'))) {
            var S = new Image();
            S.src = src[1], $j(S).load(function () {
              $j('.qode_slider_preloader').fadeOut(500), d(), checkSVG(p)
            })
          }
        } else if (src = e.exec(p.find('.item:first-child .image').attr('style'))) {
          var S = new Image();
          S.src = src[1], $j(S).load(function () {
            $j('.qode_slider_preloader').fadeOut(500), d(), checkSVG(p)
          })
        }
      } else if (p.find('.item:first-child video').length > 0) {
p.find('.item:first-child video').get(0)
.addEventListener('loadeddata', function () {
        $j('.qode_slider_preloader').fadeOut(500), d(), checkSVG(p)
      });
} else if (src = e.exec(p.find('.item:first-child .image').attr('style'))) {
        var S = new Image();
        S.src = src[1], $j(S).load(function () {
          $j('.qode_slider_preloader').fadeOut(500), d(), checkSVG(p)
        })
      }
      p.on('slide.bs.carousel', function () {
        p.addClass('in_progress'), p.find('.active .slider_content_outer').fadeTo(800, 0)
      }), p.on('slid.bs.carousel', function () {
        if (p.removeClass('in_progress'),
          p.find('.active .slider_content_outer').fadeTo(0, 1), checkSVG(p), $j('div.item.animate_image .image').stop()
.css({
            transform: '',
            '-webkit-transform': '',
          }), $j('div.item.active').hasClass('animate_image') && $window_width > 1e3 && $j('div.item.animate_image.active .image').transformAnimate({
            transform: 'matrix(' + t[$j('div.item.animate_image.active').data('animate_image')] + ')',
            duration: 3e4,
          }), p.hasClass('slider_thumbs')) {
          r($j('div.item').index($j('div.item.active')[0]) + 1, M), p.find('.active').prev('div.item').length ? (p.find('.active').prev('div')
.find('.image').length ? (src = e.exec(p.find('.active').prev('div')
.find('.image')
.attr('style')), prev_image = new Image(), prev_image.src = src[1]) : (prev_image = p.find('.active').prev('div')
.find('> .video')
.clone(), prev_image.find('.video-overlay').remove(), prev_image.find('.video-wrap').width(170)
.height(95), prev_image.find('.mejs-container').width(170)
.height(95), prev_image.find('video').width(170)
.height(95)), p.find('.left.carousel-control .img .old').fadeOut(300, function () {
            $j(this).remove()
          }), p.find('.left.carousel-control .img').append(prev_image)
.find('img, div.video')
.fadeIn(300)
.addClass('old')) : (p.find('.carousel-inner .item:last-child .image').length ? (src = e.exec(p.find('.carousel-inner .item:last-child .image').attr('style')), prev_image = new Image(), prev_image.src = src[1]) : (prev_image = p.find('.carousel-inner .item:last-child > .video').clone(), prev_image.find('.video-overlay').remove(), prev_image.find('.video-wrap').width(170)
.height(95), prev_image.find('.mejs-container').width(170)
.height(95), prev_image.find('video').width(170)
.height(95)), p.find('.left.carousel-control .img .old').fadeOut(300, function () {
            $j(this).remove()
          }), p.find('.left.carousel-control .img').append(prev_image)
.find('img, div.video')
.fadeIn(300)
.addClass('old')), p.find('.active').next('div.item').length ? (p.find('.active').next('div')
.find('.image').length ? (src = e.exec(p.find('.active').next('div')
.find('.image')
.attr('style')), next_image = new Image(), next_image.src = src[1]) : (next_image = p.find('.active').next('div')
.find('> .video')
.clone(), next_image.find('.video-overlay').remove(), next_image.find('.video-wrap').width(170)
.height(95), next_image.find('.mejs-container').width(170)
.height(95), next_image.find('video').width(170)
.height(95)), p.find('.right.carousel-control .img .old').fadeOut(300, function () {
            $j(this).remove()
          }), p.find('.right.carousel-control .img').append(next_image)
.find('img, div.video')
.fadeIn(300)
.addClass('old')) : (p.find('.carousel-inner .item:first-child .image').length ? (src = e.exec(p.find('.carousel-inner .item:first-child .image').attr('style')), next_image = new Image(), next_image.src = src[1]) : (next_image = p.find('.carousel-inner .item:first-child > .video').clone(), next_image.find('.video-overlay').remove(), next_image.find('.video-wrap').width(170)
.height(95), next_image.find('.mejs-container').width(170)
.height(95), next_image.find('video').width(170)
.height(95)), p.find('.right.carousel-control .img .old').fadeOut(300, function () {
            $j(this).remove()
          }), p.find('.right.carousel-control .img').append(next_image)
.find('img, div.video')
.fadeIn(300)
.addClass('old'))
        }
      }), p.swipe({
        swipeLeft: function (e, t, i, o, a) {
          p.carousel('next')
        },
        swipeRight: function (e, t, i, o, a) {
          p.carousel('prev')
        },
        threshold: 20,
      })
    }), $j('.no-touch .carousel').length && (skrollr_slider = skrollr.init({
      edgeStrategy: 'set',
      smoothScrolling: !0,
      forceHeight: !1,
    }), skrollr_slider.refresh())
  }
}

function checkSliderForHeaderStyle (e, t) {
  'use strict';
  var i = '',
    o = e.data('navigation-color');
  e.hasClass('light') && (i = 'light'), e.hasClass('dark') && (i = 'dark'), i !== '' ? (t && ($j('header.page_header').removeClass('dark light')
.addClass(i), $j('aside.vertical_menu_area').removeClass('dark light')
.addClass(i)), $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light')
.addClass(i)) : (t && ($j('header.page_header').removeClass('dark light')
.addClass(default_header_style), $j('aside.vertical_menu_area').removeClass('dark light')
.addClass(default_header_style)), $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light')
.addClass(default_header_style)), void 0 !== o ? ($j('.carousel-control .thumb_holder .thumb_top, .carousel-indicators li').css('background-color', o), $j('.carousel-control .prev_nav, .carousel-control .next_nav').css('border-color', o), $j('.carousel-control .prev_nav i, .carousel-control .next_nav i').css('color', o)) : ($j('.carousel-control .thumb_holder .thumb_top, .carousel-indicators li').css('background-color', ''), $j('.carousel-control .prev_nav, .carousel-control .next_nav').css('border-color', ''), $j('.carousel-control .prev_nav i, .carousel-control .next_nav i').css('color', ''))
}

function calculateHeights () {
  $j('.portfolio_slides').length && $j('.portfolio_slides').each(function () {
    $j(this).parents('.caroufredsel_wrapper')
.css({
      height: $j(this).find('li.item')
.outerHeight() - 3 + 'px',
    })
  }), $j('.qode_carousels .slides').length && $j('.qode_carousels .slides').each(function () {
    $j(this).parents('.caroufredsel_wrapper')
.css({
      height: $j(this).find('li.item')
.outerHeight() + 'px',
    })
  }), $j('.blog_slides').length && $j('.blog_slides').each(function () {
    $j(this).parents('.caroufredsel_wrapper')
.css({
      height: $j(this).find('li.item')
.outerHeight() - 3 + 'px',
    })
  }), $j('.qode-bct-posts').length && $j('.qode-bct-posts').each(function () {
    $j(this).parents('.caroufredsel_wrapper')
.css({
      height: $j(this).find('.qode-bct-post')
.outerHeight() + 'px',
    })
  })
}

function initQodeCarousel () {
  'use strict';
  $j('.qode_carousels').length && ($j('.qode_carousels').each(function () {
    var e = $j(this),
      t = 6;
    void 0 !== e.data('number-of-visible-items') && e.data('number-of-visible-items') !== '' && (e.data('number-of-visible-items') === 4 ? t = 4 : e.data('number-of-visible-items') === 5 && (t = 5));
    var i = e.parents('.grid_section').length == 1 ? 170 : 315,
      o = 6;
    t === 4 ? (i = e.parents('.grid_section').length == 1 ? 255 : 472, o = 4) : t === 5 && (i = e.parents('.grid_section').length == 1 ? 204 : 378, o = 5), e.find('.slides').carouFredSel({
      circular: !0,
      responsive: !0,
      scroll: {
        items: 1,
        duration: 1e3,
        pauseOnHover: !1,
      },
      items: {
        width: i,
        visible: {
          min: 1,
          max: o,
        },
      },
      auto: !0,
      mousewheel: !1,
      swipe: {
        onMouse: !0,
        onTouch: !0,
      },
    })
.animate({
      opacity: 1,
    }, 1e3)
  }), calculateHeights())
}

function initPortfolioSlider () {
  'use strict';
  $j('.portfolio_slider').length && ($j('.portfolio_slider').each(function () {
    var e, t;
    switch (e = void 0 !== $j(this).data('number_of_items') ? $j(this).data('number_of_items') : 'auto') {
      case 4:
        t = 500;
        break;
      case 5:
        t = 350;
        break;
      default:
        t = 500
    }
    var i = $j(this).parents('.grid_section').length == 1 ? 3 : e,
      o = $j(this).parents('.grid_section').length == 1 ? 353 : t;
    $j(this).find('.portfolio_slides')
.carouFredSel({
      circular: !0,
      responsive: !0,
      scroll: 1,
      prev: {
        button: function () {
          return $j(this).parent()
.siblings('.caroufredsel-direction-nav')
.find('#caroufredsel-prev')
        },
      },
      next: {
        button: function () {
          return $j(this).parent()
.siblings('.caroufredsel-direction-nav')
.find('#caroufredsel-next')
        },
      },
      items: {
        width: o,
        visible: {
          min: 1,
          max: i,
        },
      },
      auto: !1,
      mousewheel: !1,
      swipe: {
        onMouse: !0,
        onTouch: !0,
      },
    })
.animate({
      opacity: 1,
    }, 1e3)
  }), calculateHeights(), $j('.portfolio_slider .flex-direction-nav a').click(function (e) {
    e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
  }))
}

function initBlogSlider () {
  'use strict';
  $j('.blog_slider').length && ($j('.blog_slider').each(function () {
    var e, t, i, o = $j(this),
      a = !1;
    if (e = void 0 !== o.data('blogs_shown') ? o.data('blogs_shown') : o.hasClass('simple_slider') ? 1 : 'auto', a = o.data('auto_start'), o.hasClass('simple_slider')) {
t = 1, i = 300;
} else {
      t = o.parents('.grid_section').length == 1 ? 3 : e;
      var n;
      switch (e) {
        case 3:
          n = 667;
          break;
        case 4:
          n = 500;
          break;
        case 5:
          n = 400;
          break;
        case 6:
          n = 334;
          break;
        default:
          n = 500
      }
      i = o.parents('.grid_section').length == 1 ? 353 : n
    }
    o.find('.blog_slides').carouFredSel({
      circular: !0,
      responsive: !0,
      scroll: 1,
      prev: {
        button: function () {
          return $j(this).parent()
.siblings('.caroufredsel-direction-nav')
.find('#caroufredsel-prev')
        },
      },
      next: {
        button: function () {
          return $j(this).parent()
.siblings('.caroufredsel-direction-nav')
.find('#caroufredsel-next')
        },
      },
      items: {
        width: i,
        visible: {
          min: 1,
          max: t,
        },
      },
      auto: a,
      mousewheel: !1,
      swipe: {
        onMouse: !0,
        onTouch: !0,
      },
    })
.animate({
      opacity: 1,
    }, 1e3)
  }), calculateHeights(), $j('.blog_slider .flex-direction-nav a').click(function (e) {
    e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
  }))
}

function qodeInitBlogCarouselTitled () {
  'use strict';
  $j('.qode-blog-carousel-titled').length && ($j('.qode-blog-carousel-titled').each(function () {
    var e, t = $j(this),
      i = 4;
    void 0 !== t.data('posts-shown') && (i = t.data('posts-shown')), $window_width < 769 && i > 2 && (i = 2), $window_width < 601 && i > 1 && (i = 1), e = t.width() / i, t.find('.qode-bct-posts').carouFredSel({
      circular: !0,
      responsive: !0,
      scroll: 1,
      prev: {
        button: function () {
          return t.find('.qode-bct-caroufredsel-prev')
        },
      },
      next: {
        button: function () {
          return t.find('.qode-bct-caroufredsel-next')
        },
      },
      items: {
        width: e,
        visible: {
          min: 1,
          max: i,
        },
      },
      auto: !1,
      mousewheel: !1,
      swipe: {
        onMouse: !0,
        onTouch: !0,
      },
    }), t.animate({
      opacity: 1,
    }, 1e3)
  }), calculateHeights())
}

function initSideMenu () {
  'use strict';
  $j('body').hasClass('side_area_uncovered_from_content') && $j('.side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu').click(function (e) {
    if (e.preventDefault(), $j('.side_menu').css({
        right: '0',
      }), $j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')) {
      $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened'), $j('body').removeClass('right_side_menu_opened');
      var t = setTimeout(function () {
        $j('.side_menu').css({
          visibility: 'hidden',
        }), clearTimeout(t)
      }, 400)
    } else {
$j('.side_menu').css({
      visibility: 'visible',
    }), $j(this).addClass('opened'), $j('body').addClass('right_side_menu_opened'), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
      if (Math.abs($scroll - current_scroll) > 400) {
        $j('body').removeClass('right_side_menu_opened'), $j('.side_menu_button_wrapper a').removeClass('opened');
        var e = setTimeout(function () {
          $j('.side_menu').css({
            visibility: 'hidden',
          }), clearTimeout(e)
        }, 400)
      }
    })
}
  }), $j('body').hasClass('side_menu_slide_with_content') && $j('.side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu').click(function (e) {
    e.preventDefault(), $j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened') ? ($j('body').removeClass('side_menu_open'), $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened'), $j('body').removeClass('side_menu_open')) : ($j(this).addClass('opened'), $j('body').addClass('side_menu_open'), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
      Math.abs($scroll - current_scroll) > 400 && ($j('body').removeClass('side_menu_open'), $j('.side_menu_button_wrapper a').removeClass('opened'))
    })), e.stopPropagation(), $j('.wrapper').click(function () {
      e.preventDefault(), $j('body').removeClass('side_menu_open'), $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened'), $j('body').removeClass('side_menu_open')
    })
  }), $j('body').hasClass('side_menu_slide_from_right') && ($j('.wrapper').prepend('<div class="cover"/>'), $j('.side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu').click(function (e) {
    e.preventDefault(), $j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened') ? ($j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened'), $j('body').removeClass('right_side_menu_opened')) : ($j(this).addClass('opened'), $j('body').addClass('right_side_menu_opened'), $j(' .wrapper .cover').click(function () {
      $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened'), $j('body').removeClass('right_side_menu_opened'), $j('.side_menu_button_wrapper a').removeClass('opened')
    }), current_scroll = $j(window).scrollTop(), $j(window).scroll(function () {
      Math.abs($scroll - current_scroll) > 400 && ($j('body').removeClass('right_side_menu_opened'), $j('.side_menu_button_wrapper a').removeClass('opened'))
    }))
  }))
}

function setDropDownMenuPosition () {
  'use strict';
  var e = $j('.drop_down > ul > li.narrow');
  e.each(function (t) {
    var i, o = $j(window).width() - 16;
    switch (!0) {
      case qode_body.hasClass('qode_grid_1300'):
        i = 1350;
        break;
      case qode_body.hasClass('qode_grid_1200'):
        i = 1250;
        break;
      default:
        i = 1150
    }
    var a = $j(e[t]).offset().left,
      n = $j(e[t]).find('.second .inner ul')
.width(),
      s = 0;
    s = $j('body').hasClass('boxed') ? i - (a - (o - i) / 2) + 17 : o - a + 17;
    var r;
    $j(e[t]).find('li.sub').length > 0 && (r = s - n), (s < n || r < n) && ($j(e[t]).find('.second')
.addClass('right'), $j(e[t]).find('.second .inner ul')
.addClass('right'))
  })
}

function initDropDownMenu () {
  'use strict';
  var e = $j('.drop_down > ul > li');
  e.each(function (t) {
    if ($j(e[t]).find('.second').length > 0) {
      if ($j(e[t]).hasClass('wide')) {
        var i = $j(this),
          o = i.find('.inner > ul'),
          a = parseInt(o.css('padding-left').slice(0, -2)) + parseInt(o.css('padding-right').slice(0, -2)),
          n = i.find('.second > .inner > ul > li'),
          s = n.length;
        i.hasClass('left_position') || i.hasClass('right_position') || i.find('.second').css('left', 0);
        var r = 0;
        if (n.each(function () {
            var e = $j(this).height();
            e > r && (r = e)
          }), n.height(r), i.hasClass('full_width_wide_menu')) {
          var d = 100 / s + '%';
          n.css('width', d)
        } else {
          s > 4 && (s = 4);
          var l = s * n.outerWidth();
          o.width(l)
        }
        if (i.hasClass('wide_background')) {
          if (!i.hasClass('left_position') && !i.hasClass('right_position')) {
            var c = i.find('.second').offset().left;
            i.find('.second').css('left', -c), i.find('.second').css('width', $j(window).width())
          }
        } else if (!i.hasClass('left_position') && !i.hasClass('right_position')) {
          var c = ($j(window).width() - 2 * ($j(window).width() - $j(this).find('.second')
.offset().left)) / 2 + (l + a) / 2;
          i.find('.second').css('left', -c)
        }
      }
      if (menu_dropdown_height_set || ($j(e[t]).data('original_height', $j(e[t]).find('.second')
.height() + 'px'), $j(e[t]).find('.second')
.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
$j(e[t]).on('touchstart mouseenter', function () {
        $j(e[t]).find('.second')
.css({
          height: $j(e[t]).data('original_height'),
          overflow: 'visible',
          visibility: 'visible',
          opacity: '1',
        })
      })
.on('mouseleave', function () {
        $j(e[t]).find('.second')
.css({
          height: '0px',
          overflow: 'hidden',
          visivility: 'hidden',
          opacity: '0',
        })
      });
} else {
        var h = {
          interval: 0,
          over: function () {
            setTimeout(function () {
              $j(e[t]).find('.second')
.addClass('drop_down_start'), $j(e[t]).find('.second')
.stop()
.css({
                height: $j(e[t]).data('original_height'),
              })
            }, 150)
          },
          timeout: 150,
          out: function () {
            $j(e[t]).find('.second')
.stop()
.css({
              height: '0px',
            }), $j(e[t]).find('.second')
.removeClass('drop_down_start')
          },
        };
        $j(e[t]).hoverIntent(h)
      }
    }
  }), $j('.drop_down ul li.wide ul li a, .drop_down ul li.narrow ul li a').on('click', function () {
    var e = $j(this);
    e.next('ul').length || e.attr('href') === 'http://#' || e.attr('href') === '#' || e.hasClass('no_link') || setTimeout(function () {
      e.mouseleave()
    }, 500)
  }), menu_dropdown_height_set = !0
}

function initVerticalMenu () {
  'use strict';
  if ($j('.no-touch .vertical_menu_toggle').length) {
    var e = $j('.no-touch .vertical_menu_toggle > ul > li'),
      t = $j('.no-touch .vertical_menu_toggle ul li ul li');
    e.each(function (t) {
      if ($j(e[t]).hasClass('has_sub')) {
        var i = $j(e[t]).find('.inner > ul > li').length;
        $j(e[t]).hoverIntent({
          over: function () {
            $j(e[t]).addClass('open'), $j(e[t]).find('.second')
.slideDown(40 * i, 'easeInOutSine', function () {
              $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
            })
          },
          out: function () {
            $j(e[t]).removeClass('open'), $j(e[t]).find('.second')
.slideUp(40 * i, 'easeInOutSine')
          },
          timeout: 1e3,
        })
      }
    }), t.each(function (e) {
      if ($j(t[e]).hasClass('menu-item-has-children')) {
        var i = $j(t[e]).find('ul > li').length;
        $j(t[e]).hoverIntent({
          over: function () {
            $j(t[e]).addClass('open'), $j(t[e]).find('ul')
.slideDown(40 * i, 'easeInOutSine', function () {
              $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
            })
          },
          out: function () {
            $j(t[e]).removeClass('open'), $j(t[e]).find('ul')
.slideUp(40 * i, 'easeInOutSine')
          },
          timeout: 1e3,
        })
      }
    })
  } else if ($j('.vertical_menu_on_click').length) {
    var e = $j('.vertical_menu_on_click > ul > li > a'),
      t = $j('.vertical_menu_on_click ul li ul li a');
    e.each(function (t) {
      $j(e[t]).parent()
.hasClass('has_sub') && $j(e[t]).on('tap click', function (e) {
        return e.preventDefault(), $j(this).parent()
.hasClass('open') ? ($j(this).parent()
.removeClass('open'), $j(this).parent()
.find('.second')
.slideUp('fast', function () {
          $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
        })) : ($j('.vertical_menu_on_click > ul > li').removeClass('open'), $j('.vertical_menu_on_click > ul > li').find('.second')
.slideUp('fast'), $j(this).parent()
.addClass('open'), $j(this).parent()
.find('.second')
.slideDown('slow', function () {
          $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
        })), !1
      })
    }), t.each(function (e) {
      $j(t[e]).parent()
.hasClass('menu-item-has-children') && $j(t[e]).on('tap click', function (e) {
        return e.preventDefault(), $j(this).parent()
.hasClass('open') ? ($j(this).parent()
.removeClass('open'), $j(this).parent()
.find('ul')
.slideUp('fast', function () {
          $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
        })) : ($j('.vertical_menu_on_click ul li ul li').removeClass('open'), $j('.vertical_menu_on_click ul li ul li').find('ul')
.slideUp('fast'), $j(this).parent()
.addClass('open'), $j(this).parent()
.find('ul')
.slideDown('slow', function () {
          $j('.vertical_menu_area.with_scroll').getNiceScroll()
.resize()
        })), !1
      })
    })
  } else if ($j('.no-touch .vertical_menu_float').length) {
    var e = $j('.no-touch .vertical_menu_float > ul > li'),
      t = $j('.no-touch .vertical_menu_float ul li ul li');
    e.each(function (t) {
      $j(e[t]).hasClass('has_sub') && $j(e[t]).hoverIntent({
        over: function () {
          $j(e[t]).addClass('open'), $j(e[t]).find('.second')
.addClass('vertical_menu_start')
        },
        out: function () {
          $j(e[t]).removeClass('open'), $j(e[t]).find('.second')
.removeClass('vertical_menu_start')
        },
        timeout: 300,
      })
    }), t.each(function (e) {
      if ($j(t[e]).hasClass('menu-item-has-children')) {
        $j(t[e]).find('ul > li').length;
        $j(t[e]).hoverIntent({
          over: function () {
            $j(t[e]).addClass('open'), $j(t[e]).find('ul')
.addClass('vertical_submenu_start')
          },
          out: function () {
            $j(t[e]).removeClass('open'), $j(t[e]).find('ul')
.removeClass('vertical_submenu_start')
          },
          timeout: 300,
        })
      }
    })
  }
}

function initVerticalMobileMenu () {
  'use strict';
  $j('.vertical_menu_toggle').length ? ($j('.touch .vertical_menu_toggle > ul > li.has_sub > a .plus').on('tap click', function (e) {
    e.stopPropagation(), e.preventDefault(), $j(this).parent()
.next('div.second')
.is(':visible') ? ($j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub')
.removeClass('open'), $j(this).parent()
.next('div.second')
.slideUp(200)) : ($j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub')
.addClass('open'), $j(this).parent()
.next('div.second')
.slideDown(200))
  }), $j('.touch .vertical_menu_toggle ul li ul li > a .plus').on('tap click', function (e) {
    e.stopPropagation(), e.preventDefault(), $j(this).parent()
.next('ul')
.is(':visible') ? ($j(this).parents('.touch .vertical_menu_toggle ul li ul li')
.removeClass('open'), $j(this).parent()
.next('ul')
.slideUp(200)) : ($j(this).parents('.touch .vertical_menu_toggle ul li ul li')
.addClass('open'), $j(this).parent()
.next('ul')
.slideDown(200))
  })) : $j('.vertical_menu_float').length && ($j('.touch .vertical_menu_float > ul > li.has_sub > a .plus').on('tap click', function (e) {
    e.stopPropagation(), e.preventDefault(), $j(this).parent()
.next('div.second')
.hasClass('vertical_menu_start') ? ($j(this).parents('.touch .vertical_menu_float > ul > li.has_sub')
.removeClass('open'), $j(this).parents('.touch .vertical_menu_float > ul > li.has_sub')
.find('.second')
.removeClass('vertical_menu_start')) : ($j(this).parents('.touch .vertical_menu_float > ul > li.has_sub')
.addClass('open'), $j(this).parents('.touch .vertical_menu_float > ul > li.has_sub')
.find('.second')
.addClass('vertical_menu_start'))
  }), $j('.touch .vertical_menu_float ul li ul li > a .plus').on('tap click', function (e) {
    e.stopPropagation(), e.preventDefault(), $j(this).parent()
.next('ul')
.hasClass('vertical_submenu_start') ? ($j(this).parents('.touch .vertical_menu_float ul li ul li')
.removeClass('open'), $j(this).parents('.touch .vertical_menu_float ul li ul li')
.find('ul')
.removeClass('vertical_submenu_start')) : ($j(this).parents('.touch .vertical_menu_float ul li ul li')
.addClass('open'), $j(this).parents('.touch .vertical_menu_float ul li ul li')
.find('ul')
.addClass('vertical_submenu_start'))
  }))
}

function checkVerticalMenuTransparency () {
  $scroll !== 0 ? $j('body.vertical_menu_transparency').removeClass('vertical_menu_transparency_on') : $j('body.vertical_menu_transparency').addClass('vertical_menu_transparency_on')
}

function showHideVerticalMenu () {
  if ($j('.vertical_menu_hidden').length) {
    var e = $j('aside.vertical_menu_area'),
      t = $j('.vertical_menu_area_bottom_logo'),
      i = !0;
    $j('.vertical_menu_hidden_button').on('click', function (o) {
        o.preventDefault(), i ? (i = !1, current_scroll = $j(window).scrollTop(), e.addClass('active'), t.addClass('active')) : (i = !0, e.removeClass('active'), t.removeClass('active'))
      }), $j(window).scroll(function () {
        Math.abs($scroll - current_scroll) > 400 && (i = !0, e.removeClass('active'), t.removeClass('active'))
      }),
      function () {
        var e, t;
        e = (function () {
          function e () {
            this.objects = []
          }

return e.name = 'Outclick', e.prototype.check = function (e, t) {
            return !e.is(t.target) && e.has(t.target).length === 0
          }, e.prototype.trigger = function (e) {
            var t, i = this;

return t = !1, $j.each(this.objects, function (o, a) {
              if (i.check(a.container, e) && (a.related.length < 1 ? t = !0 : $j.each(a.related, function (o, a) {
                  return i.check(a, e) ? t = !0 : (t = !1, !1)
                }), t)) {
return a.callback.call(a.container)
}
            })
          }, e
        }()), t = new e(), $j.fn.outclick = function (e) {
          var i = this;

return e == null && (e = {}), e.related || (e.related = []), e.callback || (e.callback = function () {
            return i.hide()
          }), t.objects.push({
            container: this,
            related: e.related,
            callback: e.callback,
          })
        }, $j(document).mouseup(function (e) {
          return t.trigger(e)
        })
      }.call(this), $j(e).outclick({
        callback: function () {
          i = !0, e.removeClass('active'), t.removeClass('active')
        },
      })
  }
}

function initToCounter () {
  'use strict';
  $j('.counter.zero').length && $j('.counter.zero').each(function () {
    var e = $j(this).parent(),
      t = 200;
    if (void 0 !== e.data('element-appearance') && !1 !== e.data('element-appearance') && (t = e.data('element-appearance')), !$j(this).hasClass('executed')) {
if ($j(this).addClass('executed'), $j(this).parents('.vertical_split_slider').length) {
        $j(this).parent()
.css('opacity', '1');
        var i = parseFloat($j(this).text());
        $j(this).countTo({
          from: 0,
          to: i,
          speed: 1500,
          refreshInterval: 100,
        })
      } else {
$j(this).appear(function () {
        $j(this).parent()
.css('opacity', '1');
        var e = parseFloat($j(this).text());
        $j(this).countTo({
          from: 0,
          to: e,
          speed: 1500,
          refreshInterval: 100,
        })
      }, {
        accX: 0,
        accY: -t,
      })
}
}
  })
}

function initCounter () {
  'use strict';
  $j('.counter.random').length && $j('.counter.random').each(function () {
    var e = $j(this).parent(),
      t = 200;
    void 0 !== e.data('element-appearance') && !1 !== e.data('element-appearance') && (t = e.data('element-appearance')), $j(this).hasClass('executed') || ($j(this).addClass('executed'), $j(this).parents('.vertical_split_slider').length ? ($j(this).parent()
.css('opacity', '1'), $j(this).absoluteCounter({
      speed: 2e3,
      fadeInDelay: 1e3,
    })) : $j(this).appear(function () {
      $j(this).parent()
.css('opacity', '1'), $j(this).absoluteCounter({
        speed: 2e3,
        fadeInDelay: 1e3,
      })
    }, {
      accX: 0,
      accY: -t,
    }))
  })
}

function initCountdown () {
  'use strict';
  $j('.countdown').length && $j('.countdown').each(function () {
    var e, t, i, o, a, n, s, r, d, l, c, h, _, u, f = $j(this).attr('id'),
      p = $j('#' + f),
      g = 0,
      m = 0,
      $ = 0,
      v = 0,
      j = 0;
    void 0 !== p.data('year') && !1 !== p.data('year') && (g = p.data('year')), void 0 !== p.data('month') && !1 !== p.data('month') && (m = p.data('month')), void 0 !== p.data('day') && !1 !== p.data('day') && ($ = p.data('day')), void 0 !== p.data('hour') && !1 !== p.data('hour') && (v = p.data('hour')), void 0 !== p.data('minute') && !1 !== p.data('minute') && (j = p.data('minute')), void 0 !== p.data('monthslabel') && !1 !== p.data('monthslabel') && (e = p.data('monthslabel')), void 0 !== p.data('monthlabel') && !1 !== p.data('monthlabel') && (t = p.data('monthlabel')), void 0 !== p.data('dayslabel') && !1 !== p.data('dayslabel') && (i = p.data('dayslabel')), void 0 !== p.data('daylabel') && !1 !== p.data('daylabel') && (o = p.data('daylabel')), void 0 !== p.data('hourslabel') && !1 !== p.data('hourslabel') && (a = p.data('hourslabel')), void 0 !== p.data('hourlabel') && !1 !== p.data('hourlabel') && (n = p.data('hourlabel')), void 0 !== p.data('minuteslabel') && !1 !== p.data('minuteslabel') && (s = p.data('minuteslabel')), void 0 !== p.data('minutelabel') && !1 !== p.data('minutelabel') && (r = p.data('minutelabel')), void 0 !== p.data('secondslabel') && !1 !== p.data('secondslabel') && (d = p.data('secondslabel')), void 0 !== p.data('secondlabel') && !1 !== p.data('secondlabel') && (l = p.data('secondlabel')), void 0 !== p.data('tickf') && !1 !== p.data('tickf') && p.data('tickf'), void 0 !== p.data('timezone') && !1 !== p.data('timezone') && (c = p.data('timezone')), void 0 !== p.data('digitfs') && !1 !== p.data('digitfs') && (h = p.data('digitfs')), void 0 !== p.data('labelfs') && !1 !== p.data('labelfs') && (_ = p.data('labelfs')), void 0 !== p.data('color') && !1 !== p.data('color') && (u = p.data('color')), p.countdown({
      until: new Date(g, m - 1, $, v, j, 44),
      labels: ['Years', e, 'Weeks', i, a, s, d, ],
      labels1: ['Year', t, 'Week', o, n, r, l, ],
      format: 'ODHMS',
      timezone: c,
      padZeroes: !0,
      significant: 0,
      onTick: function () {
        h !== 'undefined' && h !== '' && p.find('.countdown-amount').css('font-size', h + 'px')
.css('line-height', h + 'px'), _ !== 'undefined' && _ !== '' && p.find('.countdown-period').css('font-size', _ + 'px'), u !== 'undefined' && u !== '' && p.find('.countdown_separator').css('background-color', u)
      },
    })
  })
}

function initProgressBars () {
  'use strict';
  $j('.q_progress_bar').length && $j('.q_progress_bar').each(function () {
    if ($j(this).parents('.vertical_split_slider').length) {
      initToCounterHorizontalProgressBar($j(this));
      var e = $j(this).find('.progress_content')
.data('percentage');
      $j(this).find('.progress_content')
.css('width', '0%'), $j(this).find('.progress_content')
.animate({
        width: e + '%',
      }, 1500), $j(this).find('.progress_number_wrapper')
.css('width', '0%'), $j(this).find('.progress_number_wrapper')
.animate({
        width: e + '%',
      }, 1500)
    } else {
$j(this).appear(function () {
      initToCounterHorizontalProgressBar($j(this));
      var e = $j(this).find('.progress_content')
.data('percentage');
      $j(this).find('.progress_content')
.css('width', '0%'), $j(this).find('.progress_content')
.animate({
        width: e + '%',
      }, 1500), $j(this).find('.progress_number_wrapper')
.css('width', '0%'), $j(this).find('.progress_number_wrapper')
.animate({
        width: e + '%',
      }, 1500)
    }, {
      accX: 0,
      accY: -200,
    })
}
  })
}

function initToCounterHorizontalProgressBar (e) {
  'use strict';
  var t = parseFloat(e.find('.progress_content').data('percentage'));
  e.find('.progress_number span').length && e.find('.progress_number span').each(function () {
    $j(this).parents('.progress_number_wrapper')
.css('opacity', '1'), $j(this).countTo({
      from: 0,
      to: t,
      speed: 1500,
      refreshInterval: 50,
    })
  })
}

function initListAnimation () {
  'use strict';
  $j('.animate_list').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.animate_list').each(function () {
    $j(this).appear(function () {
      $j(this).find('li')
.each(function (e) {
        var t = $j(this);
        setTimeout(function () {
          t.animate({
            opacity: 1,
            top: 0,
          }, 1500)
        }, 100 * e)
      })
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initPieChart () {
  'use strict';
  $j('.q_percentage').length && $j('.q_percentage').each(function () {
    var e = piechartcolor;
    void 0 !== $j(this).data('active') && $j(this).data('active') !== '' && (e = $j(this).data('active'));
    var t = '#eeeeee';
    void 0 !== $j(this).data('noactive') && $j(this).data('noactive') !== '' && (t = $j(this).data('noactive'));
    var i = 10;
    void 0 !== $j(this).data('linewidth') && $j(this).data('linewidth') !== '' && (i = $j(this).data('linewidth'));
    var o = 200;
    void 0 !== $j(this).data('element-appearance') && !1 !== $j(this).data('element-appearance') && (o = $j(this).data('element-appearance')), $j(this).appear(function () {
      initToCounterPieChart($j(this)), $j(this).parent()
.css('opacity', '1'), $j(this).easyPieChart({
        barColor: e,
        trackColor: t,
        scaleColor: !1,
        lineCap: 'butt',
        lineWidth: i,
        animate: 1500,
        size: 174,
      })
    }, {
      accX: 0,
      accY: -o,
    })
  })
}

function initPieChartWithIcon () {
  'use strict';
  $j('.q_percentage_with_icon').length && $j('.q_percentage_with_icon').each(function () {
    var e = piechartcolor;
    $j(this).data('active') !== '' && (e = $j(this).data('active'));
    var t = '#eeeeee';
    $j(this).data('noactive') !== '' && (t = $j(this).data('noactive'));
    var i = 10;
    $j(this).data('linewidth') !== '' && (i = $j(this).data('linewidth'));
    $j(this).appear(function () {
      $j(this).parent()
.css('opacity', '1'), $j(this).css('opacity', '1'), $j(this).easyPieChart({
        barColor: e,
        trackColor: t,
        scaleColor: !1,
        lineCap: 'butt',
        lineWidth: i,
        animate: 1500,
        size: 174,
      })
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initToCounterPieChart (e) {
  'use strict';
  $j(e).css('opacity', '1');
  var t = parseFloat($j(e).find('.tocounter')
.text());
  $j(e).find('.tocounter')
.countTo({
    from: 0,
    to: t,
    speed: 1500,
    refreshInterval: 50,
  })
}

function initPortfolio () {
  'use strict';
  $j('.projects_holder_outer:not(.masonry_with_space, .justified_gallery)').length && $j('.projects_holder_outer').each(function () {
    var e = $j(this).find('.projects_holder');
    if (getIEversion() != 9 && getIEversion() != 10 || e.addClass('ie-specific-styles'), $j('.filter_holder .filter').on('click', function () {
        var t = $j(this).text(),
          i = $j(this).data('filter');
        e.children('article').length && e.children('article').each(function () {
          var e = $j(this);
          e.hasClass(i) && i !== 'all' ? (e.find('a.lightbox').attr('rel', 'prettyPhoto[pretty_photo_gallery_' + t.toLowerCase() + ']'), e.find('a.lightbox').attr('data-rel', 'prettyPhoto[pretty_photo_gallery_' + t.toLowerCase() + ']')) : i === 'all' && (e.find('a.lightbox').attr('rel', 'prettyPhoto[pretty_photo_gallery]'), e.find('a.lightbox').attr('data-rel', 'prettyPhoto[pretty_photo_gallery]'))
        }), $j('.filter_holder').find('.label span')
.each(function () {
          $j(this).text(t)
        })
      }), e.hasClass('v1')) {
var t = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
} else if (e.hasClass('v2')) {
var t = new Array(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20);
} else if (e.hasClass('v3')) {
var t = new Array(1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 13, 12, 13, 14, 13, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18, 19, 18, 19, 20, 19, 20, 21, 20, 21, 22);
} else if (e.hasClass('v4')) {
var t = new Array(1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10, 8, 9, 10, 11, 9, 10, 11, 12, 10, 11, 12, 13, 11, 12, 13, 14, 12, 13, 14, 15, 13, 14, 15, 16, 14, 15, 16, 17, 15, 16, 17, 18, 16, 17, 18, 19, 17, 18, 19, 20, 18, 19, 20, 21);
} else if (e.hasClass('v5')) {
var t = new Array(1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 12, 13, 14, 15, 16, 13, 14, 15, 16, 17, 14, 15, 16, 17, 18, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 17, 18, 19, 20, 21, 18, 19, 20, 21, 22, 19, 20, 21, 22, 23);
} else if (e.hasClass('v6')) {
var t = new Array(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 12, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 12, 13, 14, 15, 16, 17, 13, 14, 15, 16, 17, 18, 14, 15, 16, 17, 18, 19, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 22);
}
    var i;
    i = window.location.hash && window.location.hash.indexOf('portfolio_category') == 1 ? window.location.hash.replace('#', '') : 'all', qodeInitPortFilterCounter($j(this)), e.mixitup({
      showOnLoad: i,
      transitionSpeed: 600,
      minHeight: 150,
      onMixLoad: function () {
        $j('.projects_holder').addClass('hideItems'), $j('.projects_holder article').css('visibility', 'visible'), e.hasClass('portfolio_one_by_one') && e.find('article').each(function (e) {
          var t = $j(this);
          if ($j('.vertical_split_slider').length) {

} else {

}
          setTimeout(function () {
            t.addClass('show')
          }, 100 * e)
        }), e.hasClass('slide_from_left') && e.find('article').each(function (e) {
          var t = $j(this);
          setTimeout(function () {
            t.addClass('show')
          }, 200 * Math.random())
        }), e.hasClass('slide_from_top') && e.find('article').each(function (e) {
          var i = $j(this);
          setTimeout(function () {
            i.addClass('show')
          }, 50 * t[e])
        }), e.hasClass('diagonal_fade') && e.find('article').each(function (e) {
          var i = $j(this);
          setTimeout(function () {
            i.addClass('show')
          }, 50 * t[e])
        }), initParallax()
      },
      onMixEnd: function () {
        initParallax()
      },
    })
  })
}

function initPortfolioZIndex () {
  'use strict';
  $j('.projects_holder_outer.portfolio_no_space').length && $j('.no_space.hover_text article').each(function (e) {
    $j(this).css('z-index', e + 10)
  })
}

function initPortfolioJustifiedGallery () {
  'use strict';
  var e = $j('.projects_holder_outer.justified_gallery');
  e.each(function () {
    var t = $j(this).find('.filter_holder');
    t.find('li.filter').first()
.addClass('current'), t.find('.filter').on('click', function () {
      var e = $j(this).text();
      t.find('.label span').each(function () {
        $j(this).text(e)
      });
      var o = $j(this).attr('data-filter'),
        a = i.find('article');

return a.css('transition', 'all 500ms ease'), a.not(o).css({
        transform: 'scale(0)',
      }), setTimeout(function () {
        a.filter(o).css({
          transform: '',
        }), i.css('transition', 'height 500ms ease').justifiedGallery({
          selector: '>article' + (o != '*' ? o : ''),
        })
      }, 550), setTimeout(function () {
        a.css('transition', ''), i.css('transition', '')
      }, 1100), $j('.filter').removeClass('current active'), $j(this).addClass('current active'), !1
    }), qodeInitPortFilterCounter(e);
    var i = $j(this).find('.projects_holder'),
      o = void 0 !== i.data('row-height') ? i.data('row-height') : 200,
      a = void 0 !== i.data('spacing') ? i.data('spacing') : 0,
      n = void 0 !== i.data('last-row') ? i.data('last-row') : 'nojustify',
      s = void 0 !== i.data('justify-threshold') ? i.data('justify-threshold') : 0.75;
    i.justifiedGallery({
      captions: !1,
      rowHeight: o,
      margins: a,
      border: 0,
      lastRow: n,
      justifyThreshold: s,
      selector: '> article',
    }).on('jg.complete jg.rowflush', function () {
      $j(this).find('article')
.addClass('show')
.each(function () {
        $j(this).height(Math.round($j(this).height()))
      })
    })
  })
}

function initPortfolioMasonryFilter () {
  'use strict';
  var e = $j('.projects_masonry_holder, .masonry_with_space .projects_holder');
  if (e.length) {
    var t = null;
    $j('.filter:first').addClass('current'), $j('.filter').click(function () {
      clearTimeout(t), $j('.isotope, .isotope .isotope-item').css('transition-duration', '0.8s'), t = setTimeout(function () {
        $j('.isotope, .isotope .isotope-item').css('transition-duration', '0s')
      }, 700);
      var i = $j(this).attr('data-filter');
      e.isotope({
        filter: i,
      }), $j('.filter').removeClass('current'), $j(this).addClass('current');
      var o = $j(this).text();

return i !== '*' && (i = i.substring(1)), e.children('article').length && e.children('article').each(function () {
        var e = $j(this);
        e.hasClass(i) && i !== '*' ? (e.find('a.lightbox').attr('rel', 'prettyPhoto[pretty_photo_gallery_' + o.toLowerCase() + ']'), e.find('a.lightbox').attr('data-rel', 'prettyPhoto[pretty_photo_gallery_' + o.toLowerCase() + ']')) : i === '*' && (e.find('a.lightbox').attr('rel', 'prettyPhoto[pretty_photo_gallery]'), e.find('a.lightbox').attr('data-rel', 'prettyPhoto[pretty_photo_gallery]'))
      }), setTimeout(setPortfolioMasZIndex(), 700), !1
    })
  }
}

function initPortfolioMasonry () {
  'use strict';
  var e = $j('.projects_masonry_holder, .masonry_with_space .projects_holder');
  e.length && e.each(function () {
    var t = $j(this),
      i = t.find('.qode-portfolio-masonry-gallery-grid-sizer').width();
    e.hasClass('projects_masonry_holder') && resizeMasonry(i, t), qodeInitMasonry(t), qodeInitPortFilterCounter(e.parent()), $j(window).resize(function () {
      setPortfolioMasZIndex(), e.hasClass('projects_masonry_holder') && resizeMasonry(i, t), qodeInitMasonry(t)
    })
  })
}

function qodeInitMasonry (e) {
  e.waitForImages(function () {
    e.animate({
      opacity: 1,
    }), e.isotope({
      itemSelector: '.portfolio_masonry_item, .masonry_with_space .mix',
      masonry: {
        columnWidth: '.qode-portfolio-masonry-gallery-grid-sizer',
      },
    }), e.hasClass('portfolio_one_by_one') && e.find('article').each(function (e) {
      var t = $j(this);
      setTimeout(function () {
        t.addClass('show')
      }, 100 * e)
    }), e.hasClass('portfolio_fade_from_bottom') && e.find('article').each(function (e) {
      var t = $j(this);
      $j(this).css({
        opacity: '0',
        transform: 'translateY(150px)',
      }), $j(this).appear(function () {
        setTimeout(function () {
          t.css({
            opacity: '1',
            transition: 'all .8s ease',
            transform: 'translateY(0)',
          })
        }, 100)
      }, {
        accX: 0,
        accY: -150,
      })
    })
  })
}

function resizeMasonry (e, t) {
  var i = jQuery(window);
  if (t.hasClass('portfolio_masonry_gallery_with_space')) {
    var o = t.find('.portfolio_masonry_item.default'),
      a = t.find('.large_width'),
      n = t.find('.large_height'),
      s = t.find('.large_width_height');
    o.css('height', e), n.css('height', Math.round(2 * e)), i.innerWidth() > 480 ? (s.css('height', Math.round(2 * e)), a.css('height', e)) : s.css('height', e)
  } else {
    var r;
    r = t.find('article[class*="default"]:first img').height() ? t.find('article[class*="default"]:first img').height() : t.find('article[class*="large_width"]:not(.large_width_height):first img').height() ? t.find('article[class*="large_width"]:not(.large_width_height):first img').height() : t.find('article[class*="large_width_height"]:first img').height() ? t.find('article[class*="large_width_height"]:first img').height() / 2 : t.find('article[class*="large_height"]:first img').height() / 2;
    var d = i.innerWidth() > 480 ? 2 : 1;
    t.find('article[class*="large_width_height"] img, article[class*="large_height"] img').css('height', r * d)
  }
}

function setPortfolioMasZIndex () {
  var e = {},
    t = {};
  $j('.projects_masonry_holder article').each(function () {
    e[$j(this).index()] = getPortfolioXPos($j(this).css('left'))
  });
  var i = $j.map(e, function (e) {
    return e
  });
  i = cleanPortfolioMasXArray(i), i.sort(function (e, t) {
    return e - t
  });
  for (var o = 0; o < i.length; o++) {
t[i[o]] = 10 * o;
}
  $j.each(e, function (e, i) {
    var o, a = i;
    $j.each(t, function (e, t) {
      a == e && (o = t)
    }), $j('.projects_masonry_holder article:eq(' + e + ')').css('z-index', o)
  })
}

function cleanPortfolioMasXArray (e) {
  var t, i = e.length,
    o = [],
    a = {};
  for (t = 0; t < i; t++) {
a[e[t]] = 0;
}
  for (t in a) {
o.push(t);
}

return o
}

function getPortfolioXPos (e) {
  return e.substr(0, e.length - 2)
}

function qodeInitPortFilterCounter (e) {
  function t (e, t, i) {
    e.find(t).text(i)
  }
  if (e.hasClass('portfolio_holder_fwn')) {
    var i = e.find('article'),
      o = e.find('.filter_holder ul li');
    o.each(function () {
      var o = $j(this);
      if (o.data('filter') == 'all' || o.data('filter') == '*') {
t(o, '.filter_number_of_items', i.length);
} else {
        var a = o.attr('data-filter');
        a = a.replace(/\./g, ''), t(o, '.filter_number_of_items', e.find('article.' + a).length)
      }
    }), o.css('opacity', '1')
  }
}

function qodeGridWidth () {
  var e = qode_body.attr('class');
  e.match(/grid[\w-]*\b/) && (gridClass = e.match(/grid[\w-]*\b/).toString(), qode_grid_width = parseInt(gridClass.substr(5)))
}

function initServiceAnimation () {
  'use strict';
  $j('.fade_in_circle_holder').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.fade_in_circle_holder').each(function () {
    $j(this).appear(function () {
      $j(this).addClass('animate_circle')
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function checkTitleToShowOrHide () {
  if ($j('.title_outer.animate_title_area').length) {
    var e = $j('.title_outer').data('height');
    $scroll > $j('.title').height() && $j('.title_outer').css({
      height: e,
      opacity: '1',
      overflow: 'visible',
    })
  }
}

function initTitleAreaAnimation () {
  if ($j('.title_outer.animate_title_area').length) {
    var e = $j('.title_outer').data('height');
    $j('.title_outer').hasClass('with_image') && (e = $j('.image.responsive').height()), $scroll < $j('.title').height() && $j('.title_outer').animate({
      height: e,
      opacity: 1,
    }, 500, function () {
      $j(this).css({
        overflow: 'visible',
      }), initPortfolioSingleInfo(), $j('nav.content_menu').length > 0 && (content_menu_position = $j('nav.content_menu').offset().top, contentMenuPosition())
    })
  }
}

function initParallaxTitle () {
  'use strict';
  if ($j('.title').length > 0 && $j('.touch').length === 0) {
    if ($j('.title.has_fixed_background').length) {
      var e = parseInt($j('.title.has_fixed_background').css('background-size')
.match(/\d+/)),
        t = $j('.title.has_fixed_background').height(),
        i = t / 1e4 * 7,
        o = $scroll - $j('.title.has_fixed_background').offset().top;
      $j('.title.has_fixed_background').css({
        'background-position': 'center ' + (0 + add_for_admin_bar) + 'px',
      }), $j('.title.has_fixed_background').hasClass('zoom_out') && $j('.title.has_fixed_background').css({
        'background-size': e - $scroll + 'px auto',
      })
    }
    $j(window).on('scroll', function () {
      if ($j('.title.has_fixed_background').length) {
        var t = $scroll - $j('.title.has_fixed_background').offset().top,
          o = -t * i;
        $j('.title.has_fixed_background').css({
          'background-position': 'center ' + (o + add_for_admin_bar) + 'px',
        }), $j('.title.has_fixed_background').hasClass('zoom_out') && $j('.title.has_fixed_background').css({
          'background-size': e - $scroll + 'px auto',
        })
      }
    })
  }
}

function initParallax () {
  'use strict';
  $j('.parallax_section_holder').length && $j('.parallax_section_holder').each(function () {
    var e = $j(this);
    e.hasClass('qode_full_screen_height_parallax') && e.height($window_height);
    var t = 0.4 * e.data('speed');
    e.parallax('50%', t)
  })
}

function initSideAreaScroll () {
  'use strict';
  $j('.side_menu').length && $j('.side_menu').niceScroll({
    scrollspeed: 60,
    mousescrollstep: 40,
    cursorwidth: 0,
    cursorborder: 0,
    cursorborderradius: 0,
    cursorcolor: 'transparent',
    autohidemode: !1,
    horizrailenabled: !1,
  })
}

function initVerticalAreaMenuScroll () {
  'use strict';
  $j('.vertical_menu_area.with_scroll').length && $j('.vertical_menu_area.with_scroll').niceScroll({
    scrollspeed: 60,
    mousescrollstep: 40,
    cursorwidth: 0,
    cursorborder: 0,
    cursorborderradius: 0,
    cursorcolor: 'transparent',
    autohidemode: !1,
    horizrailenabled: !1,
  })
}

function loadMore () {
  'use strict';
  var e = 1;
  $j('.load_more a').on('click', function (t) {
    t.preventDefault();
    var i = ($j(this), $j(this).closest('.projects_holder_outer')),
      o = $j(this).attr('href'),
      a = '.projects_holder',
      n = '.portfolio_paging .load_more a',
      s = $j(n).attr('href'),
      r = $j('.projects_holder .filler').length,
      d = $j('.portfolio_paging'),
      l = $j('.portfolio_paging_loading');
    d.hide(), l.show(), $j.get(String(o), function (t) {
      if ($j(a).is('.justified-gallery')) {
        var i = $j(a, t).wrapInner('')
.html();
        s = $j(n, t).attr('href'), $j(a, t).waitForImages(function () {
          $j(a).find('article:last')
.after(i), $j(a).find('article')
.css('visibility', 'visible'), $j(a).justifiedGallery('norewind'), prettyPhoto(), $j('.load_more').attr('rel') > e ? $j('.load_more a').attr('href', s) : $j('.load_more').remove(), $j('.projects_holder .portfolio_paging:last').remove(), d.show(), l.hide()
        })
      } else {
        $j('.projects_holder .filler').slice(-r)
.remove();
        var i = $j(a, t).wrapInner('')
.html();
        s = $j(n, t).attr('href'), $j(a, t).waitForImages(function () {
          if ($j('article.mix:last').after(i), $j('.projects_holder article').css('visibility', 'visible'), $j('article:not(.show)').each(function (e) {
              $j(this).addClass('show')
            }), $j('.masonry_with_space').length) {
$j('.masonry_with_space .projects_holder').isotope('reloadItems')
.isotope();
} else {
            var t = $j('article.mix:first').height();
            $j('article.mix').css('min-height', t), $j('.projects_holder').mixitup('remix', 'all')
          }
          prettyPhoto(), $j('.load_more').attr('rel') > e ? $j('.load_more a').attr('href', s) : $j('.load_more').remove(), $j('.projects_holder .portfolio_paging:last').remove(), $j('article.mix').css('min-height', 0), d.show(), l.hide()
        })
      }
    }).done(function () {
      setTimeout(function () {
        initPortfolioMasonry(), qodeInitPortFilterCounter(i)
      }, 1e3)
    }), e++
  })
}

function prettyPhoto () {
  'use strict';
  $j('a[data-rel]').each(function () {
    $j(this).attr('rel', $j(this).data('rel'))
  }), $j('a[rel^=\'prettyPhoto\']').prettyPhoto({
    animation_speed: 'normal',
    slideshow: !1,
    autoplay_slideshow: !1,
    opacity: 0.8,
    show_title: !0,
    allow_resize: !0,
    horizontal_padding: 0,
    default_width: 650,
    default_height: 400,
    counter_separator_label: '/',
    theme: 'pp_default',
    hideflash: !1,
    wmode: 'opaque',
    autoplay: !0,
    modal: !1,
    overlay_gallery: !1,
    keyboard_shortcuts: !0,
    deeplinking: !1,
    social_tools: !1,
    changepicturecallback: function () {
      $j($j(this).context.activeElement).hasClass('qode-single-image-pretty-photo') && $j('.pp_pic_holder').addClass('qode-pretty-photo-hide-navigation')
    },
  })
}

function initMobileMenu () {
  'use strict';
  $j('.mobile_menu_button > span').on('tap click', function (e) {
    e.preventDefault(), $j('.mobile_menu > ul').is(':visible') ? $j('.mobile_menu > ul').slideUp(200) : $j('.mobile_menu > ul').slideDown(200)
  }), $j('.mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*=\'#\']').on('tap click', function (e) {
    e.preventDefault(), $j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.is(':visible') ? ($j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.slideUp(200), $j(this).closest('li.has_sub')
.removeClass('open_sub')) : ($j(this).closest('li.has_sub')
.addClass('open_sub'), $j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.slideDown(200))
  }), $j('.mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*=\'#\']').on('tap click', function (e) {
    e.preventDefault(), $j(this).parent()
.find('ul.sub_menu')
.is(':visible') ? ($j(this).parent()
.find('ul.sub_menu')
.slideUp(200), $j(this).parent()
.removeClass('open_sub')) : ($j(this).parent()
.addClass('open_sub'), $j(this).parent()
.find('ul.sub_menu')
.slideDown(200))
  }), $j('.mobile_menu ul li > a, .q_logo a').on('click', function () {
    $j(this).attr('href') !== 'http://#' && $j(this).attr('href') !== '#' && $j('.mobile_menu > ul').slideUp()
  })
}

function initFlexSlider () {
  'use strict';
  $j('.flexslider').each(function () {
    var e = $j(this),
      t = 8e3;
    void 0 !== e.data('interval') && !1 !== e.data('interval') && (t = 1e3 * parseFloat(e.data('interval')));
    var i = !0;
    void 0 !== e.data('direction') && (i = e.data('direction'));
    var o = !1;
    void 0 !== e.data('control') && (o = e.data('control'));
    var a = !0;
    void 0 !== e.data('pause-on-hover') && (a = e.data('pause-on-hover'));
    var n = !1;
    void 0 !== e.data('drag') && (n = e.data('drag'));
    var s = !0;
    t === 0 && (s = !1);
    var r = 'slide';
    void 0 !== e.data('flex_fx') && !1 !== e.data('flex_fx') && (r = e.data('flex_fx')), e.flexslider({
      animationLoop: !0,
      controlNav: o,
      directionNav: i,
      useCSS: !1,
      pauseOnAction: a,
      pauseOnHover: a,
      slideshow: s,
      animation: r,
      prevText: '<div><i class=\'fa fa-angle-left\'></i></div>',
      nextText: '<div><i class=\'fa fa-angle-right\'></i></div>',
      animationSpeed: 600,
      slideshowSpeed: t,
      touch: !0,
      start: function () {
        setTimeout(function () {
          $j('.flexslider').fitVids()
        }, 100)
      },
    }), e.find('.flex-direction-nav a').click(function (e) {
      e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
    }), n && e.swipe({
      swipeLeft: function () {
        e.flexslider('next')
      },
      swipeRight: function () {
        e.flexslider('prev')
      },
      threshold: 20,
    })
  })
}

function fitVideo () {
  'use strict';
  $j('.portfolio_images').fitVids(), $j('.video_holder').fitVids(), $j('.format-video .post_image').fitVids(), $j('.format-video .q_masonry_blog_post_image').fitVids()
}

function initPortfolioSingleInfo () {
  'use strict';
  var e = $j('.portfolio_single_follow');
  if ($j('.portfolio_single_follow').length > 0) {
    var t = e.offset();
    $scrollHeight = $j('.portfolio_container').height();
    var i = $j('.portfolio_container').offset(),
      o = $j(window),
      a = parseInt($j('header.page_header').css('height'), 10);
    o.scroll(function () {
      o.width() > 960 ? o.scrollTop() + a + 3 > t.top ? o.scrollTop() + a + e.height() + 24 < i.top + $scrollHeight ? e.stop().animate({
        marginTop: o.scrollTop() - t.top + a,
      }) : e.stop().animate({
        marginTop: $scrollHeight - e.height() - 24,
      }) : e.stop().animate({
        marginTop: 0,
      }) : e.css('margin-top', 0)
    })
  }
}

function initTabs () {
  'use strict';
  if ($j('.q_tabs').length) {
    $j('.q_tabs').appear(function () {
      $j('.q_tabs').css('visibility', 'visible')
    }, {
      accX: 0,
      accY: -100,
    });
    var e = $j('.tabs-nav'),
      t = e.children('li');
    e.each(function () {
      var e = $j(this);
      e.next().children('.tab-content')
.stop(!0, !0)
.hide()
.first()
.show(), e.children('li').first()
.addClass('active')
.stop(!0, !0)
.show()
    }), t.on('click', function (e) {
      var t = $j(this);
      t.siblings().removeClass('active')
.end()
.addClass('active'), t.parent().next()
.children('.tab-content')
.stop(!0, !0)
.hide()
.siblings(t.find('a').attr('href'))
.fadeIn(), e.preventDefault()
    })
  }
}

function qodeInitAdvancedTabs () {
  var e = $j('.qode-advanced-tabs');
  e.length && e.each(function () {
    var e = $j(this);
    e.children('.qode-advanced-tab-container').each(function (e) {
      e += 1;
      var t = $j(this),
        i = t.attr('id'),
        o = t.parent().find('.qode-advanced-tabs-nav li:nth-child(' + e + ') a'),
        a = o.attr('href');
      i = '#' + i, i.indexOf(a) > -1 && o.attr('href', i)
    }), e.tabs()
  })
}

function qodeInitAdvancedTabsIcons () {
  var e = $j('.qode-advanced-tab-container');
  e.length && e.each(function () {
    var e = $j(this),
      t = e.attr('id'),
      i = '';
    void 0 === e.data('icon-html') && e.data('icon-html') === 'false' || (i = e.data('icon-html'));
    var o = e.parents('.qode-advanced-tabs').find('.qode-advanced-tabs-nav > li a[href="#' + t + '"]');
    void 0 !== o && o.children('.qode-advanced-icon-frame').append(i)
  })
}

function initAccordion () {
  'use strict';
  $j('.q_accordion_holder').length && ($j('.q_accordion_holder').appear(function () {
    $j('.q_accordion_holder').css('visibility', 'visible')
  }, {
    accX: 0,
    accY: -100,
  }), $j('.accordion').length && ($j('.accordion').accordion({
    animate: 'swing',
    collapsible: !0,
    active: !1,
    icons: '',
    heightStyle: 'content',
    activate: function (e, t) {
      initParallax()
    },
  }), $j('.accordion').each(function () {
    var e = parseInt($j(this).data('active-tab'));
    e !== '' && (e -= 1, $j(this).accordion('option', 'active', e));
    var t = parseInt($j(this).data('border-radius'));
    t !== '' && $j(this).find('.accordion_mark')
.css('border-radius', t + 'px');
    var i = $j(this).data('collapsible') == 'yes';
    $j(this).accordion('option', 'collapsible', i), $j(this).accordion('option', 'collapsible', i)
  })), $j('.toggle').addClass('accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset')
.find('.title-holder')
.addClass('ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom')
.hover(function () {
    $j(this).toggleClass('ui-state-hover')
  })
.click(function () {
    return $j(this).toggleClass('ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom')
.next()
.toggleClass('ui-accordion-content-active')
.slideToggle(400), !1
  })
.next()
.addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom')
.hide(), $j('.toggle').each(function () {
    var e = parseInt($j(this).data('active-tab'));
    e !== '' && e >= 1 && (e -= 1, $j(this).find('.ui-accordion-content')
.eq(e)
.show(), $j(this).find('.ui-accordion-header')
.eq(e)
.addClass('ui-state-active'))
  }))
}

function initAccordionContentLink () {
  'use strict';
  $j('.accordion').length && $j('.accordion_holder .accordion_inner .accordion_content a').click(function () {
    return $j(this).attr('target') === '_blank' ? window.open($j(this).attr('href'), '_blank') : window.open($j(this).attr('href'), '_self'), !1
  })
}

function initTestimonials () {
  'use strict';
  $j('.testimonials_carousel').length && $j('.testimonials_carousel').each(function () {
    var e = 5e3,
      t = $j(this);
    void 0 !== t.data('auto-rotate-slides') && !1 !== t.data('auto-rotate-slides') && (e = 1e3 * parseFloat(t.data('auto-rotate-slides')));
    var i = !0;
    e === 0 && (i = !1);
    var o = 'fade';
    void 0 !== t.data('animation-type') && !1 !== t.data('animation-type') && (o = t.data('animation-type'));
    var a = !0;
    void 0 !== t.data('show-navigation') && (a = t.data('show-navigation') != 'no');
    var n = 600;
    void 0 !== t.data('animation-speed') && !1 !== t.data('animation-speed') && (n = t.data('animation-speed'));
    var s = qodeNumberOfTestimonialsItems(t),
      r = 0,
      d = 0;
    void 0 !== s && s !== 1 && (r = 200, d = 40), t.flexslider({
      animationLoop: !0,
      controlNav: !1,
      directionNav: a,
      useCSS: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      slideshow: i,
      animation: o,
      itemMargin: d,
      minItems: s,
      maxItems: s,
      itemWidth: r,
      animationSpeed: n,
      slideshowSpeed: e,
      start: function (e) {
        initParallax()
      },
    })
  })
}

function qodeNumberOfTestimonialsItems (e) {
  var t = e.data('number-per-slide');

return $window_width < 768 && t > 1 ? t = 1 : $window_width < 1024 && t > 2 && (t = 2), t
}

function qodeNumberOfTestimonialsItemsResize () {
  var e = $j('.testimonials_carousel, .testimonials_c_carousel');
  e.length && e.each(function () {
    var e = $j(this),
      t = qodeNumberOfTestimonialsItems(e);
    void 0 !== e.data('flexslider') && (e.data('flexslider').vars.minItems = t), void 0 !== e.data('flexslider') && (e.data('flexslider').vars.maxItems = t)
  })
}

function initTestimonialsCarousel () {
  'use strict';
  $j('.testimonials_c_carousel').length && $j('.testimonials_c_carousel').each(function () {
    var e = 5e3,
      t = $j(this);
    void 0 !== t.data('auto-rotate-slides') && !1 !== t.data('auto-rotate-slides') && (e = 1e3 * parseFloat(t.data('auto-rotate-slides')));
    var i = !0;
    e === 0 && (i = !1);
    var o = !0;
    void 0 !== t.data('show-navigation') && (o = t.data('show-navigation') != 'no');
    var a = 600;
    void 0 !== t.data('animation-speed') && !1 !== t.data('animation-speed') && (a = t.data('animation-speed'));
    var n = qodeNumberOfTestimonialsItems(t),
      s = 0,
      r = 0;
    void 0 !== n && n !== 1 && (s = 300, r = 30), t.flexslider({
      animationLoop: !0,
      controlNav: o,
      directionNav: !1,
      useCSS: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      slideshow: i,
      animation: 'slide',
      itemMargin: r,
      minItems: n,
      maxItems: n,
      itemWidth: s,
      animationSpeed: a,
      slideshowSpeed: e,
      start: function (e) {
        initParallax()
      },
    })
  })
}

function initMessages () {
  'use strict';
  $j('.q_message').length && $j('.q_message').each(function () {
    $j(this).find('.close')
.click(function (e) {
      e.preventDefault(), $j(this).parent()
.parent()
.fadeOut(500)
    })
  })
}

function initElementsAnimation () {
  'use strict';
  $j('.element_from_fade').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_from_fade').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_from_fade_on')
    }, {
      accX: 0,
      accY: -100,
    })
  }), $j('.element_from_left').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_from_left').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_from_left_on')
    }, {
      accX: 0,
      accY: -100,
    })
  }), $j('.element_from_right').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_from_right').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_from_right_on')
    }, {
      accX: 0,
      accY: -100,
    })
  }), $j('.element_from_top').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_from_top').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_from_top_on')
    }, {
      accX: 0,
      accY: -100,
    })
  }), $j('.element_from_bottom').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_from_bottom').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_from_bottom_on')
    }, {
      accX: 0,
      accY: -100,
    })
  }), $j('.element_transform').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.element_transform').each(function () {
    var e = $j(this);
    e.appear(function () {
      e.addClass('element_transform_on')
    }, {
      accX: 0,
      accY: -100,
    })
  })
}

function fitAudio () {
  'use strict';
  $j('audio.blog_audio').mediaelementplayer({
    audioWidth: '100%',
  })
}

function initBlog () {
  'use strict';
  if ($j('.blog_holder.masonry, .blog_holder.blog_pinterest').length) {
    var e = $j(this).closest('.container_inner')
.width();
    $j('.blog_holder').closest('.column_inner').length && (e = $j('.blog_holder').closest('.column_inner')
.width()), $j('.blog_holder').width(e);
    var t = $j('.blog_holder');
    if (t.waitForImages(function () {
        setTimeout(function () {
          t.isotope({
            itemSelector: 'article',
            resizable: !1,
            masonry: {
              columnWidth: '.blog_holder_grid_sizer',
              gutter: '.blog_holder_grid_gutter',
            },
          }), $j('.blog_holder.masonry, .blog_holder.blog_pinterest').animate({
            opacity: '1',
          }, 500)
        }, 400)
      }), $j('.filter').click(function () {
        var e = $j(this).attr('data-filter');

return t.isotope({
          filter: e,
        }), !1
      }), t.hasClass('masonry_infinite_scroll')) {
t.infinitescroll({
      navSelector: '.blog_infinite_scroll_button span',
      nextSelector: '.blog_infinite_scroll_button span a',
      itemSelector: 'article',
      loading: {
        finishedMsg: finished_text,
        msgText: loading_text,
      },
    }, function (e) {
      t.isotope('appended', $j(e)), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
        $j('.blog_holder.masonry, .blog_holder.blog_pinterest').isotope('layout')
      }, 400)
    });
} else if (t.hasClass('masonry_load_more')) {
      var i = 1;
      $j('.blog_load_more_button a').off('click tap')
.on('click tap', function (e) {
        e.preventDefault();
        var o = $j('.blog_load_more_button'),
          a = $j('.blog_load_more_button_loading');
        o.hide(), a.show();
        var n = $j(this).attr('href'),
          s = '.blog_load_more_button a',
          r = $j(s).attr('href');
        $j.get(String(n), function (e) {
          var n = $j('.masonry_load_more', e).wrapInner('')
.html();
          r = $j(s, e).attr('href'), t.append($j(n)).isotope('reloadItems')
.isotope({
            sortBy: 'original-order',
          }), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
            $j('.blog_holder.masonry, .blog_holder.blog_pinterest').isotope('layout')
          }, 400), o.show(), a.hide(), $j('.blog_load_more_button span').attr('rel') > i ? $j('.blog_load_more_button a').attr('href', r) : $j('.blog_load_more_button').remove()
        }), i++
      })
    }
  }
}

function initBlogMasonryFullWidth () {
  'use strict';
  if ($j('.masonry_full_width').length) {
    var e = $j('.full_width_inner').width();
    $j('.masonry_full_width').width(e);
    var t = $j('.masonry_full_width');
    if ($j('.filter').click(function () {
        var e = $j(this).attr('data-filter');

return t.isotope({
          filter: e,
        }), !1
      }), t.hasClass('masonry_infinite_scroll')) {
t.infinitescroll({
      navSelector: '.blog_infinite_scroll_button span',
      nextSelector: '.blog_infinite_scroll_button span a',
      itemSelector: 'article',
      loading: {
        finishedMsg: finished_text,
        msgText: loading_text,
      },
    }, function (e) {
      t.isotope('appended', $j(e)), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
        $j('.blog_holder.masonry_full_width').isotope('layout')
      }, 400)
    });
} else if (t.hasClass('masonry_load_more')) {
      var i = 1;
      $j('.blog_load_more_button a').off('click tap')
.on('click tap', function (e) {
        e.preventDefault();
        var o = $j(this).attr('href'),
          a = '.blog_load_more_button a',
          n = $j(a).attr('href');
        $j.get(String(o), function (e) {
          var o = $j('.masonry_load_more', e).wrapInner('')
.html();
          n = $j(a, e).attr('href'), t.append($j(o)).isotope('reloadItems')
.isotope({
            sortBy: 'original-order',
          }), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function () {
            $j('.blog_holder.masonry_full_width').isotope('layout')
          }, 400), $j('.blog_load_more_button span').attr('rel') > i ? $j('.blog_load_more_button a').attr('href', n) : $j('.blog_load_more_button').remove()
        }), i++
      })
    }
    t.waitForImages(function () {
      setTimeout(function () {
        t.isotope({
          itemSelector: 'article',
          resizable: !1,
          masonry: {
            columnWidth: '.blog_holder_grid_sizer',
            gutter: '.blog_holder_grid_gutter',
          },
        }), $j('.masonry_full_width').animate({
          opacity: '1',
        }, 500)
      }, 400)
    })
  }
}

function initBlogMasonryGallery () {
  'use strict';
  if ($j('.blog_holder.masonry_gallery').length) {
    qodeResizeBlogMasonryGallery($j('.blog_holder_grid_sizer').width());
    var e = $j('.blog_holder.masonry_gallery');
    if (e.width(Math.round(e.parent().width())), e.isotope({
        itemSelector: 'article',
        resizable: !1,
        masonry: {
          columnWidth: '.blog_holder_grid_sizer',
          gutter: '.blog_holder_grid_gutter',
        },
      }), e.waitForImages(function () {
        e.animate({
          opacity: '1',
        }, 300, function () {
          e.isotope().isotope('layout')
        })
      }), e.hasClass('masonry_infinite_scroll')) {
e.infinitescroll({
      navSelector: '.blog_infinite_scroll_button span',
      nextSelector: '.blog_infinite_scroll_button span a',
      itemSelector: 'article',
      loading: {
        finishedMsg: finished_text,
        msgText: loading_text,
      },
    }, function (t) {
      e.isotope('appended', $j(t)), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j('.blog_holder_grid_sizer').width()), setTimeout(function () {
        e.isotope('layout')
      }, 300)
    });
} else if (e.hasClass('masonry_load_more')) {
      var t = 1;
      $j('.blog_load_more_button a').off('click tap')
.on('click tap', function (i) {
        i.preventDefault();
        var o = $j(this).attr('href'),
          a = '.blog_load_more_button a',
          n = $j(a).attr('href');
        $j.get(String(o), function (i) {
          var o = $j('.masonry_load_more', i).wrapInner('')
.html();
          n = $j(a, i).attr('href'), e.append($j(o)).isotope('reloadItems')
.isotope({
            sortBy: 'original-order',
          }), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j('.blog_holder_grid_sizer').width()), setTimeout(function () {
            e.isotope('layout')
          }, 300), $j('.blog_load_more_button span').attr('rel') > t ? $j('.blog_load_more_button a').attr('href', n) : $j('.blog_load_more_button').remove()
        }), t++
      })
    }
    $j(window).resize(function () {
      qodeResizeBlogMasonryGallery($j('.blog_holder_grid_sizer').width()), e.isotope().isotope('layout'), e.width(Math.round(e.parent().width()))
    })
  }
}

function initBlogGallery () {
  'use strict';
  if ($j('.blog_holder.blog_gallery, .blog_holder.blog_chequered').length) {
    qodeResizeBlogGallery($j('.blog_holder_grid_sizer').width());
    var e = $j('.blog_holder.blog_gallery, .blog_holder.blog_chequered');
    if (e.width(Math.round(e.parent().width())), e.isotope({
        itemSelector: 'article',
        resizable: !1,
        masonry: {
          columnWidth: '.blog_holder_grid_sizer',
          gutter: '.blog_holder_grid_gutter',
        },
      }), e.waitForImages(function () {
        e.animate({
          opacity: '1',
        }, 300, function () {
          e.isotope().isotope('layout')
        })
      }), e.hasClass('masonry_infinite_scroll')) {
e.infinitescroll({
      navSelector: '.blog_infinite_scroll_button span',
      nextSelector: '.blog_infinite_scroll_button span a',
      itemSelector: 'article',
      loading: {
        finishedMsg: finished_text,
        msgText: loading_text,
      },
    }, function (t) {
      e.isotope('appended', $j(t)), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j('.blog_holder_grid_sizer').width()), setTimeout(function () {
        e.isotope('layout')
      }, 300)
    });
} else if (e.hasClass('masonry_load_more')) {
      var t = 1;
      $j('.blog_load_more_button a').off('click tap')
.on('click tap', function (i) {
        i.preventDefault();
        var o = $j(this).attr('href'),
          a = '.blog_load_more_button a',
          n = $j(a).attr('href');
        $j.get(String(o), function (i) {
          var o = $j('.masonry_load_more', i).wrapInner('')
.html();
          n = $j(a, i).attr('href'), e.append($j(o)).isotope('reloadItems')
.isotope({
            sortBy: 'original-order',
          }), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j('.blog_holder_grid_sizer').width()), setTimeout(function () {
            e.isotope('layout')
          }, 300), $j('.blog_load_more_button span').attr('rel') > t ? $j('.blog_load_more_button a').attr('href', n) : $j('.blog_load_more_button').remove(), qodeBlogGalleryAnimation()
        }), t++
      })
    }
    $j(window).resize(function () {
      qodeResizeBlogGallery($j('.blog_holder_grid_sizer').width()), e.isotope().isotope('layout'), e.width(Math.round(e.parent().width()))
    })
  }
}

function qodeResizeBlogMasonryGallery (e) {
  var t = $j('.blog_holder.masonry_gallery .large-height'),
    i = $j('.blog_holder.masonry_gallery .large-width'),
    o = $j('.blog_holder.masonry_gallery .large-width-height'),
    a = $j('.blog_holder.masonry_gallery .default');
  t.css('height', 2 * e), i.css('height', e), o.css('height', 2 * e), o.width() < 600 && o.css('height', o.width()), $window_width < 600 && t.css('height', t.width()), a.css('height', e)
}

function qodeResizeBlogGallery (e) {
  $j('.blog_holder.blog_chequered .default').css('height', e)
}

function initSmallImageBlogHeight () {
  'use strict';
  $j('.blog_small_image').length && $j('article').each(function () {
    $j(this).find('.post_text_inner')
.css('min-height', $j(this).find('.post_image')
.height() - 46)
  })
}

function initQBlog () {
  'use strict';
  $j('.q_masonry_blog').length && $j('.q_masonry_blog').each(function () {
    var e = $j(this);
    e.waitForImages(function () {
      setTimeout(function () {
        e.isotope({
          itemSelector: 'article',
          resizable: !1,
          masonry: {
            columnWidth: '.q_masonry_blog_grid_sizer',
            gutter: '.q_masonry_blog_grid_gutter',
          },
        }), e.animate({
          opacity: '1',
        }, 500)
      }, 400)
    })
  })
}

function qodeBlogCompundMasonryGallery () {
  var e = $j('.qode_blog_masonry_gallery'),
    t = e.find('.qode_blog_gallery_sizer').outerWidth(),
    i = t + 8,
    o = function () {
      t = e.find('.qode_blog_gallery_sizer').outerWidth(), i = t + 8;
      var o = e.find('.qode_blog_gallery_item.default'),
        a = e.find('.qode_blog_img_large_height'),
        n = e.find('.qode_blog_img_large_height_width');
      o.css('height', i), a.css('height', Math.round(2 * i)), $window_width > 600 ? n.css('height', Math.round(2 * i)) : n.css('height', i)
    },
    a = function () {
      e.isotope({
        itemSelector: '.qode_blog_gallery_item',
        masonry: {
          columnWidth: '.qode_blog_gallery_sizer',
          gutter: '.qode_blog_gallery_gutter',
        },
      })
    };

return {
    init: function () {
      e.length && (o(), a(), $j(window).resize(function () {
        o()
      }))
    },
  }
}

function qodeBlogHeadlines () {
  'use strict';
  if ($j('.blog_headlines').length) {
    var e = $j('.blog_headlines'),
      t = function () {
        e.bigtext({
          childSelector: '> article > h2',
          minfontsize: 20,
        }), e.find('h2').appear(function () {
          $j(this).addClass('show')
        }, {
          accX: 0,
          accY: -100,
        })
      };
    if (t(), e.hasClass('blog_infinite_scroll')) {
e.infinitescroll({
      navSelector: '.blog_infinite_scroll_button span',
      nextSelector: '.blog_infinite_scroll_button span a',
      itemSelector: 'article',
      loading: {
        finishedMsg: finished_text,
        msgText: loading_text,
      },
    }, function () {
      t()
    });
} else if (e.hasClass('blog_load_more')) {
      var i = 1;
      $j('.blog_load_more_button a').off('click tap')
.on('click tap', function (o) {
        o.preventDefault();
        var a = $j(this).attr('href'),
          n = '.blog_load_more_button a',
          s = $j(n).attr('href');
        $j.get(String(a), function (o) {
          var a = $j('.blog_load_more', o).wrapInner('')
.html();
          s = $j(n, o).attr('href'), e.append($j(a)), t(), $j('.blog_load_more_button span').attr('rel') > i ? $j('.blog_load_more_button a').attr('href', s) : $j('.blog_load_more_button').remove()
        }), i++
      })
    }
  }
}

function initProgressBarsIcon () {
  'use strict';
  $j('.q_progress_bars_icons_holder').length && $j('.q_progress_bars_icons_holder').each(function () {
    var e = $j(this),
      t = 200;
    void 0 !== e.data('element-appearance') && !1 !== e.data('element-appearance') && (t = e.data('element-appearance')), e.appear(function () {
      e.find('.q_progress_bars_icons').css('opacity', '1'), e.find('.q_progress_bars_icons').each(function () {
        var e = $j(this).find('.q_progress_bars_icons_inner')
.data('number'),
          t = $j(this).find('.q_progress_bars_icons_inner')
.data('size');
        t !== '' && ($j(this).find('.q_progress_bars_icons_inner.custom_size .bar')
.css({
          width: t + 'px',
          height: t + 'px',
        }), $j(this).find('.q_progress_bars_icons_inner.custom_size .bar .fa-stack')
.css({
          'font-size': t / 2 + 'px',
        }));
        var i = $j(this).find('.bar');
        i.each(function (t) {
          if (t < e) {
            var o = 150 * (t + 1);
            timeOuts[t] = setTimeout(function () {
              $j(i[t]).addClass('active')
            }, o)
          }
        })
      })
    }, {
      accX: 0,
      accY: -t,
    })
  })
}

function initMasonryGallery () {
  'use strict';
  resizeMasonryGallery($j('.grid-sizer').width()), $j('.masonry_gallery_holder').length && ($j('.masonry_gallery_holder').each(function () {
    var e = $j(this);
    e.waitForImages(function () {
      e.animate({
        opacity: 1,
      }), e.isotope({
        itemSelector: '.masonry_gallery_item',
        masonry: {
          columnWidth: '.grid-sizer',
        },
      }), e.find('.masonry_gallery_item.parallax_item').each(function (t) {
        $j(this).masonryParallax(e.data('parallax_item_speed'), !0, e.data('parallax_item_offset'))
      })
    })
  }), $j(window).resize(function () {
    resizeMasonryGallery($j('.grid-sizer').width()), $j('.masonry_gallery_holder').isotope('reloadItems')
  }))
}

function resizeMasonryGallery (e) {
  'use strict';
  var t = $j('.masonry_gallery_holder .rectangle_portrait'),
    i = $j('.masonry_gallery_holder .rectangle_landscape'),
    o = $j('.masonry_gallery_holder .square_big'),
    a = $j('.masonry_gallery_holder .square_small');
  t.css('height', 2 * e), window.innerWidth < 600 ? i.css('height', e / 2) : i.css('height', e), o.css('height', 2 * e),
    window.innerWidth < 600 && o.css('height', o.width() + 20), a.css('height', e)
}

function initMoreFacts () {
  'use strict';
  $j('.more_facts_holder').length && $j('.more_facts_holder').each(function () {
    var e = $j(this),
      t = 'More Facts';
    $j(this).find('.more_facts_button')
.data('morefacts') !== '' && (t = $j(this).find('.more_facts_button')
.data('morefacts'));
    var i = 'Less Facts';
    $j(this).find('.more_facts_button')
.data('lessfacts') !== '' && (i = $j(this).find('.more_facts_button')
.data('lessfacts')), e.find('.more_facts_button').on('mouseenter', function () {
      $j(this).css('color', $j(this).data('hovercolor'))
    })
.on('mouseleave', function () {
      e.find('.more_facts_outer').height() == 0 && $j(this).css('color', $j(this).data('color'))
    });
    var o = 70;
    e.find('.more_facts_inner').data('expandable_content_top_padding') !== '' && (o = e.find('.more_facts_inner').data('expandable_content_top_padding'), e.find('.more_facts_inner').css({
      'padding-top': o,
    }));
    var a = 0,
      n = 600;
    e.find('.more_facts_button').click(function () {
      a = e.find('.more_facts_inner').height() + o, n = a > 0 && a < 601 ? 800 : a > 600 && a < 1201 ? 1500 : 2100, e.hasClass('more_fact_opened') ? (e.find('.more_facts_fake_arrow').fadeOut(n), e.find('.more_facts_outer').stop()
.animate({
        height: '0px',
      }, n, function () {
        e.find('.more_facts_button').is(':hover') || e.find('.more_facts_button').css('color', e.find('.more_facts_button').data('color')), e.removeClass('more_fact_opened'), $j('.parallax_section_holder').length && initParallax()
      }), $j(this).find('.more_facts_button_text')
.text(t), $j(this).find('.more_facts_button_arrow')
.removeClass('rotate_arrow')) : (e.addClass('more_fact_opened'), e.find('.more_facts_fake_arrow').fadeIn(n), e.find('.more_facts_outer').stop()
.animate({
        height: a,
      }, n, function () {
        $j('.parallax_section_holder').length && initParallax()
      }), $j(this).find('.more_facts_button_text')
.text(i), $j(this).find('.more_facts_button_arrow')
.addClass('rotate_arrow'))
    })
  })
}

function placeholderReplace () {
  'use strict';
  $j('#contact-form [placeholder]').focus(function () {
    var e = $j(this);
    e.val() === e.attr('placeholder') && (this.originalType && (this.type = this.originalType, delete this.originalType), e.val(''), e.removeClass('placeholder'))
  })
.blur(function () {
    var e = $j(this);
    e.val() === '' && (this.type === 'password' && (this.originalType = this.type, this.type = 'text'), e.addClass('placeholder'), e.val(e.attr('placeholder')))
  })
.blur(), $j('#contact-form [placeholder]').parents('form')
.submit(function () {
    $j(this).find('[placeholder]')
.each(function () {
      var e = $j(this);
      e.val() === e.attr('placeholder') && e.val('')
    })
  })
}

function totop_button (e) {
  'use strict';
  var t = $j('#back_to_top');
  t.removeClass('off on'), e === 'on' ? t.addClass('on') : t.addClass('off')
}

function backButtonShowHide () {
  'use strict';
  $j(window).scroll(function () {
    var e, t = $j(this).scrollTop(),
      i = $j(this).height();
    e = t > 0 ? t + i / 2 : 1, totop_button(e < 1e3 ? 'off' : 'on')
  })
}

function backToTop () {
  'use strict';
  $j(document).on('click', '#back_to_top', function (e) {
    e.preventDefault(), $j('body,html').animate({
      scrollTop: 0,
    }, $j(window).scrollTop() / 3, 'linear')
  })
}

function initSteps () {
  'use strict';
  $j('.q_steps_holder').length && $j('.q_steps_holder').each(function () {
    $j(this).appear(function () {
      $j(this).addClass('show')
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initMessageHeight () {
  'use strict';
  $j('.q_message.with_icon').length && $j('.q_message.with_icon').each(function () {
    $j(this).find('.message_text_holder')
.height() > $j(this).find('.q_message_icon_holder')
.height() ? $j(this).find('.q_message_icon_holder')
.height($j(this).find('.message_text')
.height()) : $j(this).find('.message_text')
.height($j(this).find('.q_message_icon_holder')
.height())
  })
}

function initImageHover () {
  'use strict';
  $j('.image_hover').length && $j('.image_hover').each(function () {
    $j(this).appear(function () {
      var e = $j(this).attr('data-transition-delay'),
        t = 300 + parseFloat(e),
        i = $j(this);
      setTimeout(function () {
        i.addClass('show')
      }, parseFloat(e)), setTimeout(function () {
        i.removeClass('show')
      }, t)
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initProgressBarsVertical () {
  'use strict';
  $j('.q_progress_bars_vertical').length && $j('.q_progress_bars_vertical').each(function () {
    $j(this).appear(function () {
      initToCounterVerticalProgressBar($j(this));
      var e = $j(this).find('.progress_content')
.data('percentage');
      $j(this).find('.progress_content')
.css('height', '0%'), $j(this).find('.progress_content')
.animate({
        height: e + '%',
      }, 1500)
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initToCounterVerticalProgressBar (e) {
  'use strict';
  e.find('.progress_number span').length && e.find('.progress_number span').each(function () {
    var e = parseFloat($j(this).text());
    $j(this).countTo({
      from: 0,
      to: e,
      speed: 1500,
      refreshInterval: 50,
    })
  })
}

function checkAnchorOnLoad () {
  'use strict';
  var e, t, i = window.location.hash,
    o = encodeURI(window.location.hash.split('#')[1]),
    a = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
  if (i !== '' && $j('[data-q_id="#' + o + '"]').length > 0) {
    if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
if (t = $j('header.page_header').hasClass('scroll_top') ? header_top_height : 0, !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
if (header_height - ($j('[data-q_id="' + i + '"]').offset().top + t) / 4 >= min_header_height_scroll) {
          var n = $j('[data-q_id="' + i + '"]').offset().top - header_height - a;
          e = n + n / 4 + n / 16 + n / 64 + 1
        } else {
e = $j('header.page_header').hasClass('centered_logo') ? $j('[data-q_id="' + i + '"]').offset().top - min_header_height_scroll - logo_height - 30 - a : $j('[data-q_id="' + i + '"]').offset().top - min_header_height_scroll - a;
}
} else {
e = $j('[data-q_id="' + i + '"]').offset().top - a;
}
} else {
e = $j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled') ? !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent') ? $j('[data-q_id="' + i + '"]').offset().top - header_top_height - a : $j('[data-q_id="' + i + '"]').offset().top - a : $j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled') ? !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent') ? $j('[data-q_id="' + i + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + i + '"]').offset().top - header_height - logo_height / 2 - 40 - a : $j('[data-q_id="' + i + '"]').offset().top - min_header_height_fixed_hidden - 40 - a : $j('[data-q_id="' + i + '"]').offset().top - a : ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) && (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) ? sticky_amount >= $j('[data-q_id="' + i + '"]').offset().top ? $j('[data-q_id="' + i + '"]').offset().top + 1 - a : $j('[data-q_id="' + i + '"]').offset().top - min_header_height_sticky - a : $j('[data-q_id="' + i + '"]').offset().top - a;
}
    $j('html, body').animate({
      scrollTop: Math.round(e),
    }, 1500, function () {})
  }
  $j('.main_menu a, .vertical_menu a, .mobile_menu a').each(function () {
    var e = $j(this).prop('hash');
    e !== '' && $j('[data-q_id="' + e + '"]').length > 0 && $j('[data-q_id="' + e + '"]').offset().top >= $window_height && $scroll === 0 && ($j(this).parent()
.removeClass('active current-menu-item'), $j(this).removeClass('current'))
  })
}

function changeActiveState (e) {
  'use strict';
  $j('.main_menu a[href*=\'#\']').length && $j('.main_menu a').parent()
.removeClass('active'), $j('.main_menu a').each(function () {
    $j(this).prop('hash') === e && ($j(this).closest('.second').length === 0 ? $j(this).parent()
.addClass('active') : $j(this).closest('.second')
.parent()
.addClass('active'), $j('.main_menu a').removeClass('current'), $j(this).addClass('current'))
  }), $j('.vertical_menu a[href*=\'#\']').length && $j('.vertical_menu a').parent()
.removeClass('active'), $j('.vertical_menu a').each(function () {
    $j(this).prop('hash') === e && ($j(this).closest('.second').length === 0 ? $j(this).parent()
.addClass('active') : $j(this).closest('.second')
.parent()
.addClass('active'), $j('.vertical_menu a').removeClass('current'), $j(this).addClass('current'))
  }), $j('.mobile_menu a[href*=\'#\']').length && $j('.mobile_menu a').parent()
.removeClass('active'), $j('.mobile_menu a').each(function () {
    $j(this).prop('hash') === e && ($j(this).closest('.sub_menu').length === 0 ? $j(this).parent()
.addClass('active') : $j(this).closest('.sub_menu')
.parent()
.addClass('active'), $j('.mobile_menu a').removeClass('current'), $j(this).addClass('current'))
  })
}

function checkAnchorOnScroll () {
  'use strict';
  $j('[data-q_id]').length && !$j('header.page_header').hasClass('regular') && ($j('[data-q_id]').waypoint(function (e) {
    e === 'down' && changeActiveState($j(this).data('q_id'))
  }, {
    offset: '50%',
  }), $j('[data-q_id]').waypoint(function (e) {
    e === 'up' && changeActiveState($j(this).data('q_id'))
  }, {
    offset: function () {
      return -($j(this).outerHeight() - 150)
    },
  }))
}

function initHashClick () {
  'use strict';
  var e, t = $j('html, body'),
    i = $j('body').hasClass('paspartu_on_top_fixed') ? $window_width * paspartu_width : 0;
  $j(document).on('click', '.main_menu a, .vertical_menu a, .qbutton:not(.contact_form_button, .qode-archive-submit-button, .qode-listing-archive-load-more), .anchor, .widget li.anchor a', function () {
    var o, a = $j(this),
      n = $j(this).prop('hash');
    if (n !== '' && $j(this).attr('href')
.split('#')[0] === '' || n !== '' && $j(this).attr('href')
.split('#')[0] !== '' && n === window.location.hash || n !== '' && $j(this).attr('href')
.split('#')[0] === window.location.href.split('#')[0]) {
      if ($j('header.page_header').hasClass('fixed') && !$j('body').hasClass('vertical_menu_enabled')) {
if (o = $j('header.page_header').hasClass('scroll_top') ? header_top_height : 0, !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) {
if (header_height - ($j('[data-q_id="' + n + '"]').offset().top + o) / 4 >= min_header_height_scroll) {
            var s = $j('[data-q_id="' + n + '"]').offset().top - header_height - i;
            e = s + s / 4 + s / 16 + s / 64 + 1
          } else {
e = $j('header.page_header').hasClass('centered_logo') ? $j('[data-q_id="' + n + '"]').offset().top - min_header_height_scroll - logo_height - i - 30 : $j('[data-q_id="' + n + '"]').offset().top - min_header_height_scroll - i;
}
} else {
e = $j('[data-q_id="' + n + '"]').offset().top - i;
}
} else {
e = $j('header.page_header').hasClass('fixed_top_header') && !$j('body').hasClass('vertical_menu_enabled') ? !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent') ? $j('[data-q_id="' + n + '"]').offset().top - header_top_height - i : $j('[data-q_id="' + n + '"]').offset().top - i : $j('header.page_header').hasClass('fixed_hiding') && !$j('body').hasClass('vertical_menu_enabled') ? !$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent') ? $j('[data-q_id="' + n + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + n + '"]').offset().top - header_height - logo_height / 2 - 40 - i : $j('[data-q_id="' + n + '"]').offset().top - min_header_height_fixed_hidden - 40 - i : $j('[data-q_id="' + n + '"]').offset().top - i : ($j('header.page_header').hasClass('stick') || $j('header.page_header').hasClass('stick_with_left_right_menu') && !$j('body').hasClass('vertical_menu_enabled')) && (!$j('header.page_header').hasClass('transparent') || $j('header.page_header').hasClass('scrolled_not_transparent')) ? sticky_amount >= $j('[data-q_id="' + n + '"]').offset().top ? $j('[data-q_id="' + n + '"]').offset().top + 2 - i : $j('[data-q_id="' + n + '"]').offset().top - min_header_height_sticky - i : $j('[data-q_id="' + n + '"]').offset().top - i;
}

return $j('[data-q_id="' + n + '"]').length > 0 && t.stop().animate({
        scrollTop: Math.round(e),
      }, 1500, function () {
        anchorActiveState(a)
      }), history.pushState && history.pushState(null, null, n), !1
    }
  }), $j(document).on('click', '.mobile_menu a', function () {
    var e = $j(this),
      i = $j(this).prop('hash');
    if (i !== '' && $j(this).attr('href')
.split('#')[0] === '' || i !== '' && $j(this).attr('href')
.split('#')[0] !== '' && i === window.location.hash || i !== '' && $j(this).attr('href')
.split('#')[0] === window.location.href.split('#')[0]) {
return $j('[data-q_id="' + i + '"]').length > 0 && t.animate({
      scrollTop: Math.round($j('[data-q_id="' + i + '"]').offset().top - $j('.mobile_menu').height()),
    }, 500, function () {
      anchorActiveState(e)
    }), history.pushState && history.pushState(null, null, i), !1
}
  })
}

function countClientsPerRow () {
  'use strict';
  $j('.qode_clients').length && $j('.qode_clients').each(function () {
    var e, t = $j(this),
      i = t.height(),
      o = t.width(),
      a = t.find('.qode_client_holder').width(),
      n = t.find('.qode_client_holder').length;
    t.find('.qode_client_holder').each(function () {
      e = e > $j(this).height() ? e : $j(this).height()
    }), e += 35;
    var s = (Math.ceil(i / e), Math.ceil(o / a)),
      r = Math.floor(n / s),
      d = n - s * r;
    d === 0 && (d = s), t.find('.qode_client_holder').removeClass('border-bottom-none');
    var l = n - d - 1;
    t.find('.qode_client_holder:gt(' + l + ')').addClass('border-bottom-none')
  })
}

function animatedTextIconHeight () {
  'use strict';
  if ($j('.animated_icons_with_text').length) {
    var e, t = $j('.animated_icons_with_text');
    t.find('.animated_text p').each(function () {
      e = e > $j(this).height() ? e : $j(this).height()
    }), e < 155 && (e = 155), t.find('.animated_icon_with_text_inner').height(e)
  }
}

function countAnimatedTextIconPerRow () {
  'use strict';
  $j('.animated_icons_with_text').length && $j('.animated_icons_with_text').each(function () {
    var e, t = $j(this),
      i = (t.height(), t.width()),
      o = t.find('.animated_icon_with_text_holder').width() + 1,
      a = t.find('.animated_icon_with_text_holder').length;
    t.find('.animated_icon_with_text_holder').each(function () {
      e = e > $j(this).height() ? e : $j(this).height()
    }), e += 30;
    var n = Math.ceil(i / o),
      s = Math.floor(a / n),
      r = a - n * s;
    r === 0 && (r = n), t.find('.animated_icon_with_text_holder').removeClass('border-bottom-none');
    var d = a - r - 1;
    t.find('.animated_icon_with_text_holder:gt(' + d + ')').addClass('border-bottom-none')
  })
}

function anchorActiveState (e) {
  e.closest('.main_menu').length > 0 && $j('.main_menu a').parent()
.removeClass('active'), e.closest('.vertical_menu').length > 0 && $j('.vertical_menu a').parent()
.removeClass('active'), e.closest('.second').length === 0 ? e.parent().addClass('active') : e.closest('.second').parent()
.addClass('active'), e.closest('.mobile_menu').length > 0 && ($j('.mobile_menu a').parent()
.removeClass('active'), e.parent().addClass('active')), $j('.mobile_menu a, .main_menu a, .vertical_menu a').removeClass('current'), e.addClass('current')
}

function initVideoBackground () {
  'use strict';
  $j('.video-wrap .video').mediaelementplayer({
    enableKeyboard: !1,
    iPadUseNativeControls: !1,
    pauseOtherPlayers: !1,
    iPhoneUseNativeControls: !1,
    AndroidUseNativeControls: !1,
  }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (initVideoBackgroundSize(), $j('.mobile-video-image').show(), $j('.video-wrap').remove())
}

function initVideoBackgroundSize () {
  'use strict';
  $j('.section .video-wrap').each(function (e) {
    var t = $j(this).closest('.section')
.outerWidth();
    $j(this).width(t);
    var i = $j(this).closest('.section')
.outerHeight();
    min_w = vid_ratio * (i + 20), $j(this).height(i);
    var o = t / video_width_original,
      a = (i - header_height) / video_height_original,
      n = a;
    o > a && (n = o), n * video_width_original < min_w && (n = min_w / video_width_original), $j(this).find('video, .mejs-overlay, .mejs-poster')
.width(Math.ceil(n * video_width_original + 2)), $j(this).find('video, .mejs-overlay, .mejs-poster')
.height(Math.ceil(n * video_height_original + 2)), $j(this).scrollLeft(($j(this).find('video')
.width() - t) / 2), $j(this).find('.mejs-overlay, .mejs-poster')
.scrollTop(($j(this).find('video')
.height() - i) / 2), $j(this).scrollTop(($j(this).find('video')
.height() - i) / 2), $j(this).css('opacity', 1), $j('.no-touch .section .mobile-video-image ').css('display', 'none')
  }), $j('.carousel .item .video .video-wrap').each(function (e) {
    var t = $j(window).width();
    $j(this).width(t);
    var i = $j(window).width() < 1e3 ? $j('header.page_header').height() - 6 : 0,
      o = $j(this).closest('.carousel.slide')
.height() - i;
    min_w = vid_ratio * (o + 20), $j(this).height(o);
    var a = t / video_width_original,
      n = (o - header_height) / video_height_original,
      s = n;
    a > n && (s = a), s * video_width_original < min_w && (s = min_w / video_width_original), $j(this).find('video, .mejs-overlay, .mejs-poster')
.width(Math.ceil(s * video_width_original + 2)), $j(this).find('video, .mejs-overlay, .mejs-poster')
.height(Math.ceil(s * video_height_original + 2)), $j(this).scrollLeft(($j(this).find('video')
.width() - t) / 2), $j(this).find('.mejs-overlay, .mejs-poster')
.scrollTop(($j(this).find('video')
.height() - o) / 2), $j(this).scrollTop(($j(this).find('video')
.height() - o) / 2)
  }), $j('.portfolio_single .video .video-wrap, .blog_holder .video .video-wrap').each(function (e) {
    var t = $j(this),
      i = $j(this).closest('.video')
.outerWidth();
    $j(this).width(i);
    var o = 9 * i / 16;
    navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (t.parent().width(i), t.parent().height(o)), min_w = vid_ratio * (o + 20), $j(this).height(o);
    var a = i / video_width_original,
      n = (o - header_height) / video_height_original,
      s = n;
    a > n && (s = a), s * video_width_original < min_w && (s = min_w / video_width_original), $j(this).find('video, .mejs-overlay, .mejs-poster')
.width(Math.ceil(s * video_width_original + 2)), $j(this).find('video, .mejs-overlay, .mejs-poster')
.height(Math.ceil(s * video_height_original + 2)), $j(this).scrollLeft(($j(this).find('video')
.width() - i) / 2), $j(this).find('.mejs-overlay, .mejs-poster')
.scrollTop(($j(this).find('video')
.height() - o) / 2), $j(this).scrollTop(($j(this).find('video')
.height() - o) / 2)
  })
}

function initIconWithTextAnimation () {
  'use strict';
  $j('.q_icon_animation').length > 0 && $j('.no_animation_on_touch').length === 0 && $j('.q_icon_animation').each(function () {
    $j(this).appear(function () {
      $j(this).addClass('q_show_animation')
    }, {
      accX: 0,
      accY: -200,
    })
  })
}

function initCheckSafariBrowser () {
  'use strict'; navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1 && $j('body').addClass('safari_browser')
}

function initSearchButton () {
  $j('.search_slides_from_window_top').length && $j('.search_slides_from_window_top').click(function (e) {
    if (e.preventDefault(), $j('html').hasClass('touch')) {
$j('.qode_search_form').height() == '0' ? ($j('.qode_search_form input[type="text"]').onfocus = function () {
      window.scrollTo(0, 0), document.body.scrollTop = 0
    }, $j('.qode_search_form input[type="text"]').onclick = function () {
      window.scrollTo(0, 0), document.body.scrollTop = 0
    }, $j('.header_top_bottom_holder').css('top', '50px'), $j('.qode_search_form').css('height', '50px'), $j('.content_inner').css('margin-top', '50px'), $scroll < 34 && $j('header.page_header').css('top', '0')) : ($j('.qode_search_form').css('height', '0'), $j('.header_top_bottom_holder').css('top', '0'), $j('.content_inner').css('margin-top', '0'), $scroll < 34 && $j('header.page_header').css('top', -$scroll)), $j(window).scroll(function () {
      $j('.qode_search_form').height() != '0' && $scroll > 50 && ($j('.qode_search_form').css('height', '0'), $j('.header_top_bottom_holder').css('top', '0'), $j('.content_inner').css('margin-top', '0'))
    }), $j('.qode_search_close').click(function (e) {
      e.preventDefault(), $j('.qode_search_form').css('height', '0'), $j('.header_top_bottom_holder').css('top', '0'), $j('.content_inner').css('margin-top', '0'), $scroll < 34 && $j('header.page_header').css('top', -$scroll)
    });
} else {
      if ($j('.title').hasClass('has_fixed_background')) {
var t = parseInt($j('.title.has_fixed_background').css('backgroundPosition')
.split(' ')[1]);
} else {
var t = 0;
}
      $j('.qode_search_form').height() == '0' ? ($j('.qode_search_form input[type="text"]').focus(), $j('.header_top_bottom_holder').stop()
.animate({
        top: '50px',
      }, 150), $j('.qode_search_form').stop()
.animate({
        height: '50px',
      }, 150), $j('.content_inner').stop()
.animate({
        marginTop: '50px',
      }, 150), $scroll < 34 && $j('header.page_header').stop()
.animate({
        top: 0,
      }, 150), $j('.title.has_fixed_background').animate({
        'background-position-y': t + 50 + 'px',
      }, 150)) : ($j('.qode_search_form').stop()
.animate({
        height: '0',
      }, 150), $j('.header_top_bottom_holder').stop()
.animate({
        top: '0px',
      }, 150), $j('.content_inner').stop()
.animate({
        marginTop: '0',
      }, 150), $scroll < 34 && $j('header.page_header').stop()
.animate({
        top: -$scroll,
      }, 150), $j('.title.has_fixed_background').animate({
        'background-position-y': t - 50 + 'px',
      }, 150)), $j(window).scroll(function () {
        $j('.qode_search_form').height() != '0' && $scroll > 50 && ($j('.qode_search_form').stop()
.animate({
          height: '0',
        }, 150), $j('.header_top_bottom_holder').stop()
.animate({
          top: '0px',
        }, 150), $j('.content_inner').stop()
.animate({
          marginTop: '0',
        }, 150), $j('.title.has_fixed_background').css('backgroundPosition', 'center ' + t + 'px'))
      }), $j('.qode_search_close').click(function (e) {
        e.preventDefault(), $j('.qode_search_form').stop()
.animate({
          height: '0',
        }, 150), $j('.content_inner').stop()
.animate({
          marginTop: '0',
        }, 150), $j('.header_top_bottom_holder').stop()
.animate({
          top: '0px',
        }, 150), $scroll < 34 && $j('header.page_header').stop()
.animate({
          top: -$scroll,
        }, 150), $j('.title.has_fixed_background').animate({
          'background-position-y': t + 'px',
        }, 150)
      })
    }
  }), $j('.search_slides_from_header_bottom').length && $j('.search_slides_from_header_bottom').click(function (e) {
    if (e.preventDefault(), $j('.qode_search_form_2').hasClass('animated')) {
$j('.qode_search_form_2').removeClass('animated'), $j('.qode_search_form_2').css('bottom', '0');
} else {
      $j('.qode_search_form input[type="text"]').focus(), $j('.qode_search_form_2').addClass('animated');
      var t = $j('.qode_search_form_2').height();
      $j('.qode_search_form_2').css('bottom', -t)
    }
    $j('.qode_search_form_2').addClass('disabled'), $j('.qode_search_form_2 input[type="submit"]').attr('disabled', 'disabled'), $j('.qode_search_form_2 .qode_search_field').val() !== '' && $j('.qode_search_form_2 .qode_search_field').val() !== ' ' ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr('disabled'), $j('.qode_search_form_2').removeClass('disabled')) : ($j('.qode_search_form_2').addClass('disabled'), $j('.qode_search_form_2 input[type="submit"]').attr('disabled', 'disabled')), $j('.qode_search_form_2 .qode_search_field').keyup(function () {
      $j(this).val() !== '' && $j(this).val() != ' ' ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr('disabled'), $j('.qode_search_form_2').removeClass('disabled')) : ($j('.qode_search_form_2 input[type="submit"]').attr('disabled', 'disabled'), $j('.qode_search_form_2').addClass('disabled'))
    }), $j('.content, footer').click(function (e) {
      e.preventDefault(), $j('.qode_search_form_2').removeClass('animated'), $j('.qode_search_form_2').css('bottom', '0')
    })
  }), $j('.search_covers_header').length && $j('.search_covers_header').click(function (e) {
    if (e.preventDefault(), $j('.search_covers_only_bottom').length) {
var t = $j('.header_bottom').height();
} else if ($j('.fixed_top_header').length) {
var t = $j('.top_header').height();
} else {
var t = $j('.header_top_bottom_holder').height();
}
    $j('.qode_search_form_3 .form_holder_outer').height(t), $j('.search_covers_only_bottom').length && ($j('.qode_search_form_3').css('bottom', 0), $j('.qode_search_form_3').css('top', 'auto')), $j('.qode_search_form_3').stop(!0)
.fadeIn(600, 'easeOutExpo'), $j('.qode_search_form_3 input[type="text"]').focus(), $j(window).scroll(function () {
      if ($j('.search_covers_only_bottom').length) {
var e = $j('.header_bottom').height();
} else if ($j('.fixed_top_header').length) {
var e = $j('.top_header').height();
} else {
var e = $j('.header_top_bottom_holder').height();
}
      $j('.qode_search_form_3 .form_holder_outer').height(e)
    }), $j('.qode_search_close, .content, footer').click(function (e) {
      e.preventDefault(), $j('.qode_search_form_3').stop(!0)
.fadeOut(450, 'easeOutExpo')
    }), $j('.qode_search_form_3').blur(function (e) {
      $j('.qode_search_form_3').stop(!0)
.fadeOut(450, 'easeOutExpo')
    })
  }), $j('.fullscreen_search').length && ($j('.fullscreen_search_holder.from_circle').length && ($j('.fullscreen_search').on('click', function (e) {
    e.preventDefault(), $j('.fullscreen_search_overlay').hasClass('animate') ? ($j('.fullscreen_search_overlay').removeClass('animate'), $j('.fullscreen_search_holder').css('opacity', '0'), $j('.fullscreen_search_close').css('opacity', '0'), $j('.fullscreen_search_close').css('visibility', 'hidden'), $j('.fullscreen_search').css('opacity', '1'), $j('.fullscreen_search_holder').css('display', 'none')) : ($j('.fullscreen_search_overlay').addClass('animate'), $j('.fullscreen_search_holder').css('display', 'block'), setTimeout(function () {
      $j('.fullscreen_search_holder').css('opacity', '1'), $j('.fullscreen_search_close').css('opacity', '1'), $j('.fullscreen_search_close').css('visibility', 'visible'), $j('.fullscreen_search').css('opacity', '0')
    }, 200))
  }), $j('.fullscreen_search_close').on('click', function (e) {
    e.preventDefault(), $j('.fullscreen_search_overlay').removeClass('animate'), $j('.fullscreen_search_holder').css('opacity', '0'), $j('.fullscreen_search_close').css('opacity', '0'), $j('.fullscreen_search_close').css('visibility', 'hidden'), $j('.fullscreen_search').css('opacity', '1'), $j('.fullscreen_search_holder').css('display', 'none')
  })), $j('.fullscreen_search_holder.fade').length && ($j('.fullscreen_search').on('click', function (e) {
    e.preventDefault(), $j('.fullscreen_search_holder').hasClass('animate') ? ($j('body').removeClass('fullscreen_search_opened'), $j('.fullscreen_search_holder').removeClass('animate'), $j('body').removeClass('search_fade_out'), $j('body').removeClass('search_fade_in')) : ($j('body').addClass('fullscreen_search_opened'), $j('body').removeClass('search_fade_out'), $j('body').addClass('search_fade_in'), $j('.fullscreen_search_holder').addClass('animate'))
  }), $j('.fullscreen_search_close').on('click', function (e) {
    e.preventDefault(), $j('body').removeClass('fullscreen_search_opened'), $j('.fullscreen_search_holder').removeClass('animate'), $j('body').removeClass('search_fade_in'), $j('body').addClass('search_fade_out')
  })), $j('.fullscreen_search_holder .search_field').focus(function () {
    $j('.fullscreen_search_holder .field_holder .line').css('width', '100%')
  }), $j('.fullscreen_search_holder .search_field').blur(function () {
    $j('.fullscreen_search_holder .field_holder .line').css('width', '0')
  }), $j(window).scroll(function () {
    var e = $j('.page_header .header_bottom').height();
    $j('.page_header').hasClass('sticky') ? ($j('.fullscreen_search_holder .side_menu_button').css('height', e), $j('.fullscreen_search_holder .close_container').css('top', '0')) : $j('.page_header').hasClass('fixed') ? $j('.fullscreen_search_holder .side_menu_button').css('height', e) : ($j('.fullscreen_search_holder .side_menu_button').css('height', ''), $j('.fullscreen_search_holder .close_container').css('top', ''))
  })), $j('.qode_search_submit').length && $j('.qode_search_submit').click(function (e) {
    e.preventDefault(), e.stopPropagation(), $j(this).parents('form')
.first()
.submit()
  })
}

function updateShoppingCart () {
  'use strict';

  function e (e, t, i) {
    var o = $j('.shopping_cart_header');
    if (t['div.widget_shopping_cart_content']) {
      var a = jQuery(t['div.widget_shopping_cart_content']),
        n = a.find('.cart_list'),
        s = a.find('.total').contents(':not(strong)')
.text();
      o.find('.shopping_cart_dropdown_inner').html('')
.append(n), o.find('.total span').html('')
.append(s)
    }
  }
  $j('body').bind('added_to_cart', e)
}

function setContentBottomMargin () {
  $j('.uncover').length && $j('.content').css('margin-bottom', $j('footer').height())
}

function footerWidth () {
  'use strict';
  $j('.uncover').length && $j('body').hasClass('vertical_menu_enabled') && $window_width > 1e3 ? $j('.uncover').width($window_width - $j('.vertical_menu_area').width()) : $j('.uncover').css('width', '100%')
}

function initCoverBoxes () {
  $j('.cover_boxes').length && $j('.cover_boxes').each(function () {
    var e = 0,
      t = 1;
    void 0 !== $j(this).data('active-element') && !1 !== $j(this).data('active-element') && (t = parseFloat($j(this).data('active-element')), e = t - 1);
    e = t > 3 ? 0 : e, $j(this).find('li')
.eq(e)
.addClass('act');
    var i = $j(this);
    $j(this).find('li')
.each(function () {
      $j(this).hover(function () {
        $j(i).find('li')
.removeClass('act'), $j(this).addClass('act')
      })
    })
  })
}

function createContentMenu () {
  'use strict';
  $j('.content_menu').each(function () {
    if ($j(this).find('ul').length === 0) {
      if ($j(this).css('background-color') !== '') {
var e = $j(this).css('background-color');
}
      var t = $j('<ul class=\'menu\'></ul>');
      t.appendTo($j(this));
      var i = $j(this).siblings('.in_content_menu');
      i.length && i.each(function () {
        var i, o = $j(this).data('q_id'),
          a = $j(this).data('q_title'),
          n = $j(this).data('q_icon'),
          s = $j('<li />'),
          r = $j('<i />', {
            class: 'fa ' + n,
          }),
          d = $j('<a />', {
            href: o,
            html: '<span>' + a + '</span>',
          });
        i = e !== '' ? $j('<div />', {
          class: 'arrow',
          style: 'border-color: ' + e + ' transparent transparent transparent',
        }) : $j('<div />', {
          class: 'arrow',
        }), r.prependTo(d), d.appendTo(s), i.appendTo(s), s.appendTo(t)
      })
    }
  })
}

function createSelectContentMenu () {
  'use strict';
  $j('.content_menu').each(function () {
    var e = $j(this),
      t = $j('<ul></ul>');
    t.appendTo($j(this).find('.nav_select_menu')), $j(this).find('ul.menu li a')
.each(function () {
      var e = $j(this).attr('href'),
        i = $j(this).text(),
        o = $j(this).find('i')
.clone();
      $j(this).parents('li').length === 2 && (i = '&nbsp;&nbsp;&nbsp;' + i), $j(this).parents('li').length === 3 && (i = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + i), $j(this).parents('li').length > 3 && (i = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + i);
      var a = $j('<li />'),
        n = $j('<a />', {
          href: e,
          html: i,
        });
      o.prependTo(n), n.appendTo(a), a.appendTo(t)
    }), e.find('.nav_select_button').on('click', function () {
      return e.find('.nav_select_menu ul').is(':visible') ? e.find('.nav_select_menu ul').slideUp() : e.find('.nav_select_menu ul').slideDown(), !1
    }), e.find('.nav_select_menu ul li a').on('click', function () {
      e.find('.nav_select_menu ul').slideUp();
      var t = $j(this),
        i = t.attr('href'),
        o = $j('div.wpb_row[data-q_id=\'' + i + '\'],section.parallax_section_holder[data-q_id=\'' + i + '\']').offset().top;

return $j('html,body').stop()
.animate({
        scrollTop: o,
      }, 500, 'swing', function () {
        $j('nav.content_menu ul li').removeClass('active'), t.parent().addClass('active')
      }), !1
    })
  })
}

function contentMenuPosition () {
  'use strict';
  if ($j('nav.content_menu').length) {
    if (content_menu_position > sticky_amount) {
var e = min_header_height_sticky;
} else {
var e = 0;
}
    content_menu_position - e - content_menu_top_add - $scroll <= 0 && ($j('header').hasClass('stick') || $j('header').hasClass('stick_with_left_right_menu')) ? (content_menu_position < sticky_amount ? $scroll > sticky_amount ? $j('nav.content_menu').css({
      position: 'fixed',
      top: min_header_height_sticky + content_menu_top_add,
    })
.addClass('fixed') : $j('nav.content_menu').css({
      position: 'fixed',
      top: 0,
      transition: 'none',
    })
.addClass('fixed') : $j('nav.content_menu').css({
      position: 'fixed',
      top: min_header_height_sticky + content_menu_top_add,
    })
.addClass('fixed'), $j('header.sticky').addClass('no_shadow'), $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_line_height), $j('.content > .content_inner > .full_width').css('margin-top', content_line_height)) : content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !$j('header').hasClass('stick') ? ($j('nav.content_menu').css({
      position: 'fixed',
      top: content_menu_top + content_menu_top_add,
    })
.addClass('fixed'), $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_line_height), $j('.content > .content_inner > .full_width').css('margin-top', content_line_height)) : ($j('nav.content_menu').css({
      position: 'relative',
      top: '0px',
    })
.removeClass('fixed'), $j('header.sticky').removeClass('no_shadow'), $j('.content > .content_inner > .container > .container_inner').css('margin-top', '0px'), $j('.content > .content_inner > .full_width').css('margin-top', '0px')), $j('.content .in_content_menu').waypoint(function (e) {
      var t = $j(this),
        i = t.data('q_id');
      $j('nav.content_menu.fixed li a').each(function () {
        $j(this).attr('href') === i ? $j(this).parent()
.addClass('active') : $j(this).parent()
.removeClass('active')
      })
    }, {
      offset: '150',
    })
  }
}

function contentMenuCheckLastSection () {
  'use strict';
  if ($j('nav.content_menu').length && $j('.content .in_content_menu').length) {
    var e = $j('.content .in_content_menu:last').offset().top + $j('.content .in_content_menu:last').height(),
      t = $j('.content .in_content_menu:first').offset().top - content_menu_top - content_menu_top_add - 100;
    e < $scroll && $j('nav.content_menu.fixed li').removeClass('active'), t > $scroll && $j('nav.content_menu li:first, nav.content_menu ul.menu li:first').removeClass('active')
  }
}

function contentMenuScrollTo () {
  'use strict';
  $j('nav.content_menu').length && $j('nav.content_menu ul.menu li a').on('click', function (e) {
    e.preventDefault();
    var t = $j(this);
    if ($j(this).parent()
.hasClass('active')) {
return !1;
}
    var i = t.attr('href'),
      o = $j('div.wpb_row[data-q_id=\'' + i + '\'],section.parallax_section_holder[data-q_id=\'' + i + '\']').offset().top - content_line_height - content_menu_top - content_menu_top_add;

return $j('html,body').stop()
.animate({
      scrollTop: o,
    }, 500, 'swing', function () {
      $j('nav.content_menu ul li').removeClass('active'), t.parent().addClass('active')
    }), !1
  })
}

function initButtonHover () {
  $j('.qbutton').length && $j('.qbutton').each(function () {
    if (void 0 !== $j(this).data('hover-background-color') && !1 !== $j(this).data('hover-background-color')) {
      var e = $j(this).data('hover-background-color'),
        t = $j(this).css('background-color');
      $j(this).hover(function () {
        $j(this).css('background-color', e)
      }, function () {
        $j(this).css('background-color', t)
      })
    }
    if (void 0 !== $j(this).data('hover-border-color') && !1 !== $j(this).data('hover-border-color')) {
      var i = $j(this).data('hover-border-color'),
        o = $j(this).css('border-top-color');
      $j(this).hover(function () {
        $j(this).css('border-color', i)
      }, function () {
        $j(this).css('border-color', o)
      })
    }
    if (void 0 !== $j(this).data('hover-color') && !1 !== $j(this).data('hover-color')) {
      var a = $j(this).data('hover-color'),
        n = $j(this).css('color');
      $j(this).hover(function () {
        $j(this).css('color', a)
      }, function () {
        $j(this).css('color', n)
      })
    }
  })
}

function initEnlargeButton () {
  $j('.qbutton.enlarge').length && $j('.qbutton.enlarge').each(function () {
    var e = $j(this),
      t = parseInt(e.css('padding-left')),
      i = Math.floor(t / 100 * 20);
    e.mouseenter(function () {
      e.css({
        'padding-left': t + i,
      }), e.css({
        'padding-right': t + i,
      })
    }), e.mouseleave(function () {
      e.css({
        'padding-left': t,
      }), e.css({
        'padding-right': t,
      })
    })
  })
}

function initSocialIconHover () {
  $j('.q_social_icon_holder').length && $j('.q_social_icon_holder').each(function () {
    if (void 0 !== $j(this).data('hover-background-color') && !1 !== $j(this).data('hover-background-color')) {
      var e = $j(this).data('hover-background-color'),
        t = $j(this).find('.fa-stack')
.css('background-color');
      $j(this).find('.fa-stack')
.hover(function () {
        $j(this).css('background-color', e)
      }, function () {
        $j(this).css('background-color', t)
      })
    }
    if (void 0 !== $j(this).data('hover-border-color') && !1 !== $j(this).data('hover-border-color')) {
      var i = $j(this).data('hover-border-color'),
        o = $j(this).find('.fa-stack')
.css('border-top-color');
      $j(this).find('.fa-stack')
.hover(function () {
        $j(this).css('border-color', i)
      }, function () {
        $j(this).css('border-color', o)
      })
    }
    if (void 0 !== $j(this).data('hover-color') && !1 !== $j(this).data('hover-color')) {
      var a, n, s = $j(this).data('hover-color');
      $j(this).find('.fa-stack i, .fa-stack span').length ? (a = void 0 !== $j(this).data('color') ? $j(this).data('color') : $j(this).find('.fa-stack i, .fa-stack span')
.css('color'), n = $j(this).find('.fa-stack i, .fa-stack span')
.attr('style')) : $j(this).find('.simple_social').length && (a = void 0 !== $j(this).data('color') ? $j(this).data('color') : $j(this).find('.simple_social')
.css('color'), n = $j(this).find('.simple_social')
.attr('style')), $j(this).find('.fa-stack').length ? $j(this).find('.fa-stack')
.hover(function () {
        $j(this).find('i, span')
.attr('style', function (e, t) {
          return n + 'color: ' + s + '!important;'
        })
      }, function () {
        $j(this).find('i, span')
.attr('style', function (e, t) {
          return n + 'color: ' + a + ';'
        })
      }) : $j(this).find('.simple_social').length && $j(this).find('.simple_social')
.hover(function () {
        $j(this).attr('style', function (e, t) {
          return n + 'color: ' + s + '!important;'
        })
      }, function () {
        $j(this).attr('style', function (e, t) {
          return n + 'color: ' + a + ';'
        })
      })
    }
  })
}

function initTabsActiveBorder () {
  $j('.q_tabs.vertical, .q_tabs.boxed').length && $j('.q_tabs.vertical, .q_tabs.boxed').each(function () {
    var e = getParentBackgroundColor($j(this)),
      t = $j(this).find('li.active a');
    $j(this).hasClass('boxed') && t.css('border-bottom-color', e), $j(this).hasClass('left') && t.css('border-right-color', e), $j(this).hasClass('right') && t.css('border-left-color', e)
  })
}

function getParentBackgroundColor (e) {
  return e.parents().filter(function () {
    var e = $j(this).css('background-color');

return e != 'transparent' && e != 'rgba(0, 0, 0, 0)'
  })
.eq(0)
.css('background-color')
}

function setActiveTabBorder () {
  $j('.q_tabs li.active').length && $j(this).click(function () {
    initTabsActiveBorder()
  })
}

function initPopupMenu () {
  'use strict';
  $j('a.popup_menu').length && ($j('.popup_menu_holder_outer').height($window_height)
.niceScroll({
    scrollspeed: 30,
    mousescrollstep: 20,
    cursorwidth: 0,
    cursorborder: 0,
    cursorborderradius: 0,
    cursorcolor: 'transparent',
    autohidemode: !1,
    horizrailenabled: !1,
  }), ($j('body').hasClass('qode_popup_menu_push_text_right') || $j('body').hasClass('qode_popup_menu_push_text_top')) && ($j('.popup_menu_holder_outer nav > ul > li > a').each(function (e) {
    $j(this).css({
      '-webkit-animation-delay': 70 * e + 'ms',
      'animation-delay': 70 * e + 'ms',
    })
  }), $j('.popup_menu_widget_holder > div').css({
    '-webkit-animation-delay': 70 * ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) + 'ms',
    'animation-delay': 70 * ($j('.popup_menu_holder_outer nav > ul > li > a').length + 1) + 'ms',
  })), $j(window).resize(function () {
    $j('.popup_menu_holder_outer').height($window_height)
  }), $j('a.popup_menu').on('click', function (e) {
    e.preventDefault(), $j(this).hasClass('opened') ? ($j(this).removeClass('opened'), $j('body').removeClass('popup_menu_opened'), ($j(this).hasClass('qode_popup_menu_push_text_right') || $j(this).hasClass('qode_popup_menu_push_text_top') || $j(this).hasClass('qode_popup_menu_text_scaledown')) && $j('body').removeClass('qode_popup_menu_fade_in')
.addClass('qode_popup_menu_fade_out'), $j(this).hasClass('qode_popup_menu_push_text_right') ? $j('body').addClass('qode_popup_menu_push_nav_right') : $j(this).hasClass('qode_popup_menu_push_text_top') && $j('body').addClass('qode_popup_menu_push_nav_top'), setTimeout(function () {
      $j('body').hasClass('page-template-full_screen-php') || $j('body').css('overflow', 'visible'), $j('nav.popup_menu ul.sub_menu').slideUp(200, function () {
        $j('nav.popup_menu').getNiceScroll()
.resize()
      })
    }, 400)) : ($j(this).addClass('opened'), $j('body').addClass('popup_menu_opened'), $j(this).hasClass('qode_popup_menu_push_text_right') ? ($j('body').addClass('qode_popup_menu_fade_in')
.removeClass('qode_popup_menu_fade_out'), $j('body').removeClass('qode_popup_menu_push_nav_right')) : $j(this).hasClass('qode_popup_menu_push_text_top') ? ($j('body').addClass('qode_popup_menu_fade_in')
.removeClass('qode_popup_menu_fade_out'), $j('body').removeClass('qode_popup_menu_push_nav_top')) : $j(this).hasClass('qode_popup_menu_text_scaledown') && $j('body').addClass('qode_popup_menu_fade_in')
.removeClass('qode_popup_menu_fade_out'), setTimeout(function () {
      $j('body').hasClass('page-template-full_screen-php') || $j('body').css('overflow', 'hidden')
    }, 400))
  }), $j('.popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6').on('tap click', function (e) {
    return e.preventDefault(), $j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.is(':visible') ? ($j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.slideUp(200, function () {
      $j('.popup_menu_holder_outer').getNiceScroll()
.resize()
    }), $j(this).closest('li.has_sub')
.removeClass('open_sub')) : ($j(this).closest('li.has_sub')
.addClass('open_sub'), $j(this).closest('li.has_sub')
.find('> ul.sub_menu')
.slideDown(200, function () {
      $j('.popup_menu_holder_outer').getNiceScroll()
.resize()
    })), !1
  }), $j('.popup_menu ul li:not(.has_sub) a').click(function () {
    if ($j(this).attr('href') === 'http://#' || $j(this).attr('href') === '#') {
return !1;
}
    $j('a.popup_menu').removeClass('opened'), $j('body').removeClass('popup_menu_opened')
.css('overflow', 'visible'), $j('nav.popup_menu ul.sub_menu').slideUp(200, function () {
      $j('nav.popup_menu').getNiceScroll()
.resize()
    })
  }))
}

function initFullScreenTemplate () {
  'use strict';
  if ($j('.full_screen_holder').length && $window_width > 600) {
    var e = '';
    e = $j('header.page_header').hasClass('light') ? 'light' : $j('header.page_header').hasClass('dark') ? 'dark' : header_style_admin, $j('.full_screen_preloader').css('height', $window_height), $j('#up_fs_button').on('click', function () {
      return $j.fn.fullpage.moveSectionUp(), !1
    }), $j('#down_fs_button').on('click', function () {
      return $j.fn.fullpage.moveSectionDown(), !1
    });
    var t = $j('.full_screen_inner > .full_screen_section').length;
    $j('.full_screen_inner').fullpage({
      sectionSelector: '.full_screen_section',
      scrollOverflow: !0,
      afterLoad: function (i, o) {
        checkActiveArrowsOnFullScrrenTemplate(t, o), checkFullScreenSectionsForHeaderStyle(o, e)
      },
      afterRender: function () {
        checkActiveArrowsOnFullScrrenTemplate(t, 1), checkFullScreenSectionsForHeaderStyle(1, e), t !== 1 && $j('.full_screen_holder').find('.full_screen_navigation_holder')
.css('visibility', 'visible'), $j('.full_screen_holder').find('.full_screen_inner')
.css('visibility', 'visible'), $j('.full_screen_preloader').hide(), $j('.full_screen_holder video.full_screen_sections_video').length && $j('.full_screen_holder video.full_screen_sections_video').each(function () {
          $j(this).get(0)
.play()
        })
      },
    })
  }
}

function checkActiveArrowsOnFullScrrenTemplate (e, t) {
  'use strict';
  t === 1 ? ($j('.full_screen_navigation_holder #up_fs_button').hide(), t != e && $j('.full_screen_navigation_holder #down_fs_button').show()) : t === e ? (e === 2 && $j('.full_screen_navigation_holder #up_fs_button').show(), $j('.full_screen_navigation_holder #down_fs_button').hide()) : ($j('.full_screen_navigation_holder #up_fs_button').show(), $j('.full_screen_navigation_holder #down_fs_button').show())
}

function checkFullScreenSectionsForHeaderStyle (e, t) {
  'use strict';
  if ($j('[data-q_header_style]').length > 0 && $j('header').hasClass('header_style_on_scroll')) {
if (void 0 !== $j($j('.full_screen_holder .full_screen_inner .full_screen_section')[e - 1]).data('q_header_style')) {
      var i = $j($j('.full_screen_holder .full_screen_inner .full_screen_section')[e - 1]).data('q_header_style');
      $j('header').removeClass('dark light')
.addClass(i)
    } else {
$j('header').removeClass('dark light')
.addClass(t)
}
}
}

function checkHeaderStyleOnScroll () {
  'use strict';
  if ($j('[data-q_header_style]').length > 0 && $j('header').hasClass('header_style_on_scroll')) {
    var e = '';
    e = $j('header.page_header').hasClass('light') ? 'light' : $j('header.page_header').hasClass('dark') ? 'dark' : header_style_admin;
    var t = $j('body').hasClass('paspartu_on_top_fixed') ? Math.round($window_width * paspartu_width) : 0,
      i = $j('body').hasClass('paspartu_on_bottom_fixed') ? Math.round($window_width * paspartu_width) : 0;
    $j('.full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section').waypoint(function (t) {
      if (t === 'down') {
if (void 0 !== $j(this).data('q_header_style')) {
          var i = $j(this).data('q_header_style');
          $j('header').removeClass('dark light')
.addClass(i)
        } else {
$j('header').removeClass('dark light')
.addClass(e)
}
}
    }, {
      offset: 0 + t,
    }), $j('.title, .full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section, .q_slider').waypoint(function (t) {
      if (t === 'up') {
if (void 0 !== $j(this).data('q_header_style')) {
          var i = $j(this).data('q_header_style');
          $j('header').removeClass('dark light')
.addClass(i)
        } else {
$j('header').removeClass('dark light')
.addClass(e)
}
}
    }, {
      offset: function () {
        return -$j(this).outerHeight() + i
      },
    })
  }
}

function initImageGallerySliderNoSpace () {
  $j('.qode_image_gallery_no_space').length && ($j('.qode_image_gallery_no_space').each(function () {
    $j(this).animate({
      opacity: 1,
    }, 1e3), $j(this).find('.qode_image_gallery_holder')
.lemmonSlider({
      infinite: !0,
    })
  }), $j('.qode_image_gallery_no_space').on('click', 'li:not(.active) a', function () {
    return !(window.innerWidth > 800)
  }))
}

function initVerticalSplitSlider () {
  'use strict';
  if ($j('html').hasClass('vertical_split_screen_initalized') && ($j('html').removeClass('vertical_split_screen_initalized'), $j.fn.multiscroll.destroy()), $j('.vertical_split_slider').length) {
    var e = '';
    e = $j('header.page_header').hasClass('light') ? 'light' : $j('header.page_header').hasClass('dark') ? 'dark' : header_style_admin;
    var t = $j('.vertical_split_slider').data('disable-header-skin-change');
    if ($j('.vertical_split_slider').height($window_height)
.animate({
        opacity: 1,
      }, 300), $j('.vertical_split_slider').multiscroll({
        scrollingSpeed: 500,
        navigation: !0,
        afterRender: function () {
          checkVerticalSplitSectionsForHeaderStyle($j('.ms-right .ms-section:last-child').data('header_style'), e, t), $j('html').addClass('vertical_split_screen_initalized'), initButtonHover();
          var i = $j('div.wpcf7 > form');
          if (i.length && i.each(function () {
              var e = $j(this);
              e.find('.wpcf7-submit').off()
.on('click', function (t) {
                t.preventDefault(), wpcf7.submit(e)
              })
            }), $j('body').hasClass('vss_responsive_adv')) {
            var o = $j('<div class=\'vertical_split_slider_responsive\' />');
            $j('.vertical_split_slider').after(o);
            for (var a = $j('.vertical_split_slider .ms-left > div'), n = $j('.vertical_split_slider .ms-right > div'), s = 0; s < a.length; s++) {
o.append($j(a[s]).clone(!0)), o.append($j(n[a.length - 1 - s]).clone(!0));
}
            $j('.vertical_split_slider_responsive .qode_google_map').length && $j('.vertical_split_slider_responsive .qode_google_map').each(function () {
              var e = $j(this);
              e.empty();
              var t = Math.floor(1e5 * Math.random() + 1);
              e.attr('id', 'map_canvas_' + t), e.data('unique-id', t)
            })
          }
          initProgressBars(), initCountdown(), showGoogleMap()
        },
        onLeave: function (i, o, a) {
          checkVerticalSplitSectionsForHeaderStyle($j($j('.ms-right .ms-section')[$j('.ms-right .ms-section').length - o]).data('header_style'), e, t)
        },
      }), $j('body').hasClass('vss_responsive_adv')) {
      var i = 768;
      $j('body').hasClass('vss_width_1000') && (i = 1e3), $j('body').hasClass('vss_width_600') && (i = 600), $window_width < i ? ($j.fn.multiscroll.destroy(), $j('html,body').css('height', 'auto')
.css('overflow', 'auto')) : ($j.fn.multiscroll.build(), $j('html,body').css('height', '100%')
.css('overflow', 'hidden')), $j(window).resize(function () {
        $window_width < i ? ($j.fn.multiscroll.destroy(), $j('html,body').css('height', 'auto')
.css('overflow', 'auto')) : ($j.fn.multiscroll.build(), $j('html,body').css('height', '100%')
.css('overflow', 'hidden'))
      })
    }
  } else {
$j('.full_screen_holder').length || $j('html,body').css('height', 'auto')
.css('overflow', 'auto')
}
}

function checkVerticalSplitSectionsForHeaderStyle (e, t, i) {
  'use strict';
  e != '' ? (i == 'no' && $j('header.page_header').removeClass('dark light')
.addClass(e), $j('#multiscroll-nav').removeClass('dark light')
.addClass(e)) : (i == 'no' && $j('header.page_header').removeClass('dark light')
.addClass(t), $j('#multiscroll-nav').removeClass('dark light')
.addClass(t))
}

function showGoogleMap () {
  'use strict';
  $j('.qode_google_map').length && $j('.qode_google_map').each(function () {
    var e = !1,
      t = '';
    if (void 0 !== $j(this).data('snazzy-map-style') && $j(this).data('snazzy-map-style') === 'yes') {
      e = !0;
      var i = $j(this).parent()
.find('.qode-snazzy-map'),
        o = i.val();
      i.length && o.length && (t = JSON.parse(o.replace(/`{`/g, '[').replace(/`}`/g, ']')
.replace(/``/g, '"')
.replace(/`/g, '')))
    }
    var a;
    void 0 !== $j(this).data('custom-map-style') && (a = $j(this).data('custom-map-style'));
    var n;
    void 0 !== $j(this).data('color-overlay') && !1 !== $j(this).data('color-overlay') && (n = $j(this).data('color-overlay'));
    var s;
    void 0 !== $j(this).data('saturation') && !1 !== $j(this).data('saturation') && (s = $j(this).data('saturation'));
    var r;
    void 0 !== $j(this).data('lightness') && !1 !== $j(this).data('lightness') && (r = $j(this).data('lightness'));
    var d;
    void 0 !== $j(this).data('zoom') && !1 !== $j(this).data('zoom') && (d = $j(this).data('zoom'));
    var l;
    void 0 !== $j(this).data('pin') && !1 !== $j(this).data('pin') && (l = $j(this).data('pin'));
    var c;
    void 0 !== $j(this).data('map-height') && !1 !== $j(this).data('map-height') && (c = $j(this).data('map-height'));
    var h;
    void 0 !== $j(this).data('unique-id') && !1 !== $j(this).data('unique-id') && (h = $j(this).data('unique-id'));
    var _;
    void 0 !== $j(this).data('google-maps-scroll-wheel') && (_ = $j(this).data('google-maps-scroll-wheel'));
    var u;
    void 0 !== $j(this).data('addresses') && !1 !== $j(this).data('addresses') && (u = $j(this).data('addresses')), initializeGoogleMap(e, t, a, n, s, r, _, d, 'map_canvas_' + h, c, l, 'map_' + h, 'geocoder_' + h, u)
  })
}

function initializeGoogleMap (e, t, i, o, a, n, s, r, d, l, c, h, _, u) {
  'use strict';
  if (typeof google !== 'undefined') {
    var f = [];
    f = e && t.length ? t : [{
      stylers: [{
        hue: o,
      }, {
        saturation: a,
      }, {
        lightness: n,
      }, {
        gamma: 1,
      }, ],
    }, ];
    var p;
    p = e || i ? 'qode_style' : google.maps.MapTypeId.ROADMAP;
    var g = new google.maps.StyledMapType(f, {
      name: 'Qode Google Map',
    });
    _ = new google.maps.Geocoder();
    var m = new google.maps.LatLng(-34.397, 150.644),
      $ = {
        zoom: r,
        scrollwheel: s,
        center: m,
        zoomControl: !0,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        scaleControl: !1,
        scaleControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        streetViewControl: !1,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        panControl: !1,
        panControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        mapTypeControl: !1,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style', ],
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        mapTypeId: p,
      };
    h = new google.maps.Map(document.getElementById(d), $), h.mapTypes.set('qode_style', g);
    var v;
    for (v = 0; v < u.length; ++v) {
initializeGoogleAddress(u[v], c, h, _);
}
    document.getElementById(d).style.height = l, isNaN(l) || (l += 'px')
  }
}

function initializeGoogleAddress (e, t, i, o) {
  'use strict';
  if (e !== '') {
    var a = '<div class="content_map"><div class="site_notice_map"></div><div class="body_content_map"><p>' + e + '</p></div></div>',
      n = new google.maps.InfoWindow({
        content: a,
      });
    o.geocode({
      address: e,
    }, function (o, a) {
      if (a === google.maps.GeocoderStatus.OK) {
        i.setCenter(o[0].geometry.location);
        var s = new google.maps.Marker({
          map: i,
          position: o[0].geometry.location,
          icon: t,
          title: e.store_title,
        });
        google.maps.event.addListener(s, 'click', function () {
          n.open(i, s)
        }), google.maps.event.addDomListener(window, 'resize', function () {
          i.setCenter(o[0].geometry.location)
        })
      }
    })
  }
}

function initHorizontalMarquee () {
  'use strict';
  $j('.qode-horizontal-marquee').each(function () {
    var e, t, i, o, a = function () {
        o = d.width(), i = 0, h.find('> .qode-hm-item').css('margin', 0), d.height(Math.min($window_height, c)), h.find('> .qode-hm-item').each(function () {
          $j(this).css('max-width', o), i += $j(this).outerWidth() + l
        }), i -= l, h.width(i).css('left', 0), h.find('> .qode-hm-item').css('margin-right', l + 'px')
      },
      n = function (i) {
        i = void 0 !== i.originalEvent ? i.originalEvent : i, i = i.type == 'touchstart' ? i.touches[0] : i, e = {
          x: i.clientX,
          y: i.clientY,
        }, t = parseInt(h.css('left'), 10), h.addClass('qode-dragged')
      },
      s = function (e) {
        h.removeClass('qode-dragged')
      },
      r = function (a) {
        a = void 0 !== a.originalEvent ? a.originalEvent : a;
        var n = a.type;
        a = n == 'touchmove' ? a.touches[0] : a;
        var s = {
          x: a.clientX,
          y: a.clientY,
        };
        (n == 'touchmove' || n == 'mousemove' && h.is('.qode-dragged')) && h.css({
          left: Math.max(-i + o, Math.min(t + (s.x - e.x), 0)) + 'px',
        })
      },
      d = $j(this),
      l = void 0 !== d.data('spacing') ? d.data('spacing') : 0,
      c = void 0 !== d.data('height') ? d.data('height') : 0,
      h = d.find('.qode-horizontal-marquee-inner');
    a(), $j(window).resize(a), h.find('img').on('dragstart', function (e) {
      e.preventDefault()
    }), d.hasClass('qode-loop') || (h.on('mousedown touchstart', n), h.on('mousemove touchmove', r), h.on('mouseup touchend mouseleave', s))
  })
}

function qodeHorizontalMarqueeLoop () {
  var e = $j('.qode-horizontal-marquee.qode-loop');
  e.length && e.each(function () {
    var e = $j(this);
    e.find('.qode-horizontal-marquee-inner').clone()
.appendTo(e);
    var t = e.find('.qode-horizontal-marquee-inner'),
      i = t.first(),
      o = t.last(),
      a = function () {
        var a, n, s = e.data('spacing') !== '' ? e.data('spacing') : 0,
          r = function () {
            n = i.width() + s, a = 0, i.css({
              left: 0,
            }), o.css({
              width: n,
              left: n,
            })
          };
        r(), qodeRequestAnimationFrame(), e.hasClass('qode-appear-fx') && e.addClass('qode-appeared'), t.each(function (e) {
          var t = $j(this),
            s = function () {
              a -= 1, t.position().left <= -n && (t.css('left', parseInt(n - 1)), a = 0), t.css({
                transform: 'translate3d(' + Number(a) + 'px,0,0)',
              }), Math.abs(i.position().left - o.position().left) < n - 1 && r(), requestNextAnimationFrame(s)
            };
          s()
        }), $j(window).resize(function () {
          setTimeout(function () {
            r()
          }, 200)
        })
      };
    e.waitForImages(function () {
      a()
    })
  })
}

function initTextMarquee () {
  'use strict';
  var e = $j('.qode-text-marquee');
  e.length && e.each(function () {
    var e = $j(this);
    $j('html').hasClass('touch') || e.find('.qode-text-marquee-wrapper').clone()
.appendTo(e);
    var t = e.find('.qode-text-marquee-wrapper'),
      i = e.find('.qode-text-marquee-title');
    $j('html').hasClass('touch') || t.each(function () {
      for (var e = $j(this), t = e.find('.qode-text-marquee-title'), i = t.html().split(' '), o = i.length, a = [], n = 0; n < o; n++) {
a[n] = '<span class="qode-inner-text">' + i[n] + '</span>';
}
      t.html(a.join('')), t.find('.qode-inner-text').css({
        display: 'inline-block',
        'margin-right': '40px',
      })
    }), i.stretch(), t.eq(1).addClass('qode-marquee-additional-title'), i.css('visibility', 'visible');
    var o = function () {
      i.unwrap('.stretch--resizer'), i.unwrap('.stretch--handle'), i.stretch()
    };
    if ($j('html').hasClass('touch')) {
$j(window).resize(function () {
      o()
    });
} else {
      qodeRequestAnimationFrame();
      var a = t.first(),
        n = a.offset().left,
        s = t.last(),
        r = !1;
      s.offset({
        left: n - $j(window).width(),
      }), t.each(function () {
        var e = $j(this),
          t = e.offset().left,
          a = 0,
          n = function () {
            r = !1, a += 2, e.offset().left > $j(window).width() && (a = -($j(window).width() + t)), e.css('transform', 'translate3d(' + a + 'px,0,0)'), requestAnimFrame(n), $j(window).resize(function () {
              r || (o(), a = 0, s.offset({
                left: -i.first().width(),
              }), r = !0)
            })
          };
        n()
      })
    }
  })
}

function qodeRequestAnimationFrame () {
  $j('html').hasClass('touch') || window.requestAnimFrame || (window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
      window.setTimeout(e, 1e3 / 60)
    }
  }()))
}

function initExpandingImages () {
  var e = $j('.qode-expanding-images');
  e.length && e.each(function () {
    var e = $j(this);
    (getIEversion() > 0 && e.addClass('qode-ie-specific'), $j('html').hasClass('touch')) || skrollr.init({
      edgeStrategy: 'set',
      smoothScrolling: !1,
      forceHeight: !1,
    }).refresh()
  })
}

function initItemShowcase () {
  var e = $j('.qode-item-showcase');
  e.length && e.each(function () {
    function e (e) {
      t.find(e).each(function (e) {
        var t = $j(this);
        setTimeout(function () {
          t.addClass('qode-appeared')
        }, 150 * e)
      })
    }
    var t = $j(this),
      i = t.find('.qode-item-left'),
      o = t.find('.qode-item-right'),
      a = t.find('.qode-item-image');
    i.wrapAll('<div class=\'qode-item-showcase-holder qode-holder-left\' />'), o.wrapAll('<div class=\'qode-item-showcase-holder qode-holder-right\' />'), t.find('.qode-item-showcase-holder').append('<span class=\'qode-item-line\'></span>');
    var n = $j('.qode-item-line');
    $j('html').hasClass('touch') ? n.each(function () {
      var e = $j(this),
        t = e.closest('.qode-item-showcase-holder'),
        i = t.height() - t.find('.qode-item').last()
.height();
      e.css('height', i), e.css('opacity', 1)
    }) : (t.animate({
      opacity: 1,
    }, 200), setTimeout(function () {
      t.appear(function () {
        a.addClass('qode-appeared'), n.each(function () {
          var e = $j(this),
            t = e.closest('.qode-item-showcase-holder'),
            i = t.height() - t.find('.qode-item').last()
.height();
          e.css('height', i), e.css('opacity', 1)
        }), t.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (t) {
          $window_width > 1200 ? (e('.qode-holder-left .qode-item'), e('.qode-holder-right .qode-item')) : e('.qode-item')
        })
      })
    }, 100))
  })
}

function initPreviewSlider () {
  'use strict';
  $j('.qode-preview-slider').each(function () {
    var e = $j(this),
      t = e.find('.qode-presl-main-slider'),
      i = e.find('.qode-presl-small-slider-holder'),
      o = i.find('.qode-presl-small-slider');
    t.find('.qode-presl-link.small').each(function (e) {
      $j('<li><div class="qode-presl-small-item"><div class="qode-presl-main-item-inner"></div></div></li>').appendTo(o.find('> .slides'))
.find('.qode-presl-main-item-inner')
.append($j(this))
    }), t.flexslider({
      animation: 'slide',
      animationSpeed: 700,
      slideshow: !0,
      slideshowSpeed: 5e3,
      useCSS: !0,
      touch: !0,
      autostart: !1,
      directionNav: !0,
      controlNav: !0,
      prevText: '<i class="icon-arrows-left"></i>',
      nextText: '<i class="icon-arrows-right"></i>',
      start: function (e) {
        e.find('.qode-presl-main-item').css({
          opacity: '1',
          filter: 'alpha(opacity=100)',
        })
.find('img')
.addClass('visible')
      },
      before: function (e) {
        var t = e.animatingTo,
          i = e.currentSlide;
        t == 0 ? e.find('.slides li:first-child').next()
.next()
.clone()
.appendTo(e.find('.slides'))
.removeClass('clone')
.addClass('clone_end') : t == e.count - 1 && e.find('.slides li:last-child').prev()
.prev()
.clone()
.appendTo(e.find('.slides'))
.removeClass('clone')
.addClass('clone_start'), t == 0 && i == e.count - 1 && e.direction == 'next' ? o.flexslider('next') : t == e.count - 1 && i == 0 && e.direction == 'prev' ? o.flexslider('prev') : o.find('.flex-control-nav a').eq(t)
.click(), e.find('.flex-direction-nav').addClass('moving')
      },
      after: function (e) {
        e.removeClass('control-initiated direction-initiated'), e.find('.clone_start, .clone_end').remove(), e.find('.flex-direction-nav').removeClass('moving')
      },
    }), o.flexslider({
      animation: 'slide',
      animationSpeed: 700,
      animationLoop: !0,
      useCSS: !0,
      touch: !1,
      slideshow: !1,
      directionNav: !1,
      controlNav: !0,
      start: function (e) {
        e.find('img').addClass('visible'), e.closest('.qode-presl-small-slider-holder').find('.qode-presl-phone')
.addClass('visible')
      },
    })
  })
}

function initInDeviceSlider () {
  'use strict';
  $j('.qode-in-device-slider').each(function () {
    var e = $j(this).find('.qode-ids-slider'),
      t = e.data('navigation') == 'yes',
      i = e.data('auto-start') == 'yes',
      o = i ? e.data('timeout') : 0,
      a = Boolean(e.closest('.qode-horizontal-marquee').length);
    if (getIEversion() > 0 && e.addClass('qode-ids-ie-specific'), e.flexslider({
        animation: 'slide',
        animationSpeed: 700,
        animationLoop: !0,
        useCSS: !0,
        touch: !a,
        slideshow: i,
        slideshowSpeed: o,
        directionNav: t,
        controlNav: !1,
        prevText: '<i class="icon-arrows-left"></i>',
        nextText: '<i class="icon-arrows-right"></i>',
        start: function (e) {
          e.find('img').addClass('visible'), e.closest('.qode-ids-slider-holder').find('.qode-ids-frame')
.addClass('visible'), e.is('.qode-ids-titles-on-hover') && e.hover(function () {
            $j(this).find('.qode-ids-link')
.addClass('hovered')
          }, function () {
            $j(this).find('.qode-ids-link')
.removeClass('hovered')
          })
        },
      }), a) {
      var n, s = !1,
        r = function (e) {
          e = void 0 !== e.originalEvent ? e.originalEvent : e, e = e.type == 'touchstart' ? e.touches[0] : e, n = {
            x: e.clientX,
            y: e.clientY,
          }
        },
        d = function (e) {
          e = void 0 !== e.originalEvent ? e.originalEvent : e, e = e.type == 'touchend' ? e.changedTouches[0] : e;
          var t = {
            x: e.clientX,
            y: e.clientY,
          };
          Math.abs(t.x - n.x) < 10 && (s = !0)
        },
        l = function (e) {
          s ? s = !1 : e.preventDefault()
        };
      e.find('.qode-ids-link').on('dragstart', function (e) {
        e.preventDefault()
      })
.on('click', l)
.on('mousedown touchstart', r)
.on('mouseup touchend', d)
    }
  })
}

function checkSVG (e) {
  'use strict';
  var t = e.find('.active .qode_slide-svg-holder');
  t.data('svg-drawing') === 'yes' && drawSVG(t)
}

function drawSVG (e) {
  'use strict';
  var t = Array.prototype.slice.call(e.find('svg')),
    i = [];
  t.forEach(function (e, t) {
    var o = new SVGEl(e);
    i[t] = o, setTimeout((function (e) {
      return function () {
        o.render()
      }
    }()), 0)
  })
}

function SVGEl (e) {
  this.el = e;
  var t = $j(this.el).closest('.qode_slide-svg-holder')
.data('svg-frames');
  this.image = this.el.previousElementSibling, this.current_frame = 0, this.total_frames = t, this.path = [], this.length = [], this.handle = 0, this.init()
}

function initPageTitleAnimation () {
  'use strict';
  if ($j('.title_outer').data('animation') === 'yes' && $j('.no-touch .title_outer').length > 0) {
    skrollr.init({
      edgeStrategy: 'set',
      smoothScrolling: !1,
      forceHeight: !1,
    }).refresh()
  }
}

function initQodeElementAnimationSkrollr () {
  'use strict';
  if ($j('.no-touch .carousel').length === 0) {
    $j('.no-touch .q_elements_holder > .q_elements_item').each(function () {
      if ((void 0 !== $j(this).data('animation') || void 0 !== $j('.title_outer').data('animation')) && $j(this).data('animation') === 'yes') {
        skrollr.init({
          edgeStrategy: 'set',
          smoothScrolling: !1,
          forceHeight: !1,
        }).refresh()
      }
    })
  }
}

function initIconShortcodeHover () {
  'use strict';
  $j('.qode_icon_shortcode').length && $j('.qode_icon_shortcode').each(function () {
    if (void 0 !== $j(this).data('type') && ['circle', 'square', ].indexOf($j(this).data('type')) != -1 && void 0 !== $j(this).data('hover-bg-color')) {
if ($j(this).data('type') == 'circle') {
        var e = $j(this).find('i')
.first(),
          t = $j(this).data('hover-bg-color'),
          i = e.attr('style');
        $j(this).hover(function () {
          e.attr('style', i + 'color: ' + t + '!important')
        }, function () {
          e.attr('style', i)
        })
      } else {
        var t = $j(this).data('hover-bg-color'),
          o = $j(this).css('background-color');
        $j(this).hover(function () {
          $j(this).css('background-color', t)
        }, function () {
          $j(this).css('background-color', o)
        })
      }
} if (void 0 !== $j(this).data('hover-icon-color')) {
      var a = $j(this).data('hover-icon-color'),
        n = $j(this).find('.qode_icon_element ')
.css('color');
      $j(this).hover(function () {
        $j(this).find('.qode_icon_element ')
.css('color', a)
      }, function () {
        $j(this).find('.qode_icon_element ')
.css('color', n)
      })
    }
  })
}

function initIconWithTextHover () {
  'use strict';
  $j('.qode_iwt_icon_holder').length && $j('.qode_iwt_icon_holder').each(function () {
    if (void 0 !== $j(this).data('icon-hover-bg-color')) {
      var e = $j(this).data('icon-hover-bg-color'),
        t = $j(this).css('background-color');
      $j(this).hover(function () {
        $j(this).css('background-color', e)
      }, function () {
        $j(this).css('background-color', t)
      })
    }
    if (void 0 !== $j(this).data('icon-hover-color')) {
      var i = $j(this).find('.qode_iwt_icon_element'),
        o = $j(this).data('icon-hover-color'),
        a = i.css('color');
      $j(this).hover(function () {
        i.css('color', o)
      }, function () {
        i.css('color', a)
      })
    }
  })
}

function initLoadNextPostOnBottom () {
  'use strict';
  if ($j('.blog_vertical_loop').length) {
    var e, t, i = $j('body').hasClass('paspartu_enabled') ? Math.round($window_width * paspartu_width) : 0;
    t = $j('header.page_header').hasClass('transparent') ? 0 : header_height;
    var o = !0,
      a = $j('.blog_vertical_loop .blog_holder');
    $j(document).on('click', '.blog_vertical_loop_button a', function (n) {
      if (n.preventDefault(), !o) {
return !1;
}
      o = !1;
      var s = $j(this),
        r = s.attr('href'),
        d = '.blog_vertical_loop_button_holder a',
        l = $j(d).attr('href');
      e = $window_width < 1e3 ? $j('header.page_header').height() : t;
      var c = $j(window).scrollTop(),
        h = s.closest('article').offset().top,
        _ = h - c - e - i;
      a.find('article:eq(1)').addClass('fade_out'), s.closest('article').addClass('move_up')
.removeClass('next_post')
.css('transform', 'translateY(-' + _ + 'px)'), setTimeout(function () {
        $j(window).scrollTop(0), a.find('article:eq(0)').remove(), a.find('article:eq(0)').addClass('previous_post'), s.closest('article').removeAttr('style')
.removeClass('move_up')
      }, 450), $j.get(String(r), function (e) {
        var t = $j(e).find('article')
.addClass('next_post');
        l = $j(d, e).attr('href'), a.append($j(t)), o = !0
      })
    }), $j(document).on('click', '.blog_vertical_loop_back_button a', function (e) {
      if (e.preventDefault(), !o) {
return !1;
}
      o = !1;
      var t = $j(this),
        i = t.attr('href'),
        n = '.blog_vertical_loop_button_holder.prev_post a',
        s = $j(n).attr('href');
      a.find('article:eq(0)').removeClass('fade_out')
.addClass('fade_in'), t.closest('article').addClass('move_up')
.css('transform', 'translateY(' + $window_height + 'px)'), setTimeout(function () {
        a.find('article:last-child').remove(), a.find('article:eq(0)').removeClass('previous_post fade_in'), t.closest('article').addClass('next_post')
.removeAttr('style')
.removeClass('move_up'), $j.get(String(i), function (e) {
          var t = $j(e).find('article')
.removeClass('next_post')
.addClass('previous_post');
          s = $j(n, e).attr('href'), a.prepend($j(t)), o = !0
        })
      }, 450)
    }), $j.get(String($j('.blog_vertical_loop_button_holder .last_page a').attr('href')), function (e) {
      var t = $j(e).find('article')
.removeClass('next_post')
.addClass('previous_post');
      a.prepend($j(t))
    }), $j.get(String($j('.blog_vertical_loop_button a').attr('href')), function (e) {
      var t = $j(e).find('article')
.addClass('next_post');
      a.append($j(t))
    })
  }
}

function setParallaxLayersHeight (e, t) {
  'use strict';
  var i = t,
    o = [1600, 1300, 1e3, 768, 567, 320, ];
  $window_width > o[0] ? i = t : $window_width > o[1] ? i = 0.75 * t : $window_width > o[2] ? i = 0.6 * t : $window_width > o[3] ? i = 0.55 * t : $window_width <= o[3] && (i = 0.45 * t), e.css({
    height: i + 'px',
  })
}

function parallaxLayers () {
  'use strict';
  $j('.qode_parallax_layers').length && $j('.qode_parallax_layers').each(function () {
    var e = $j(this);
    if ($j(this).hasClass('full_screen_height')) {
e.height($window_height), $j(window).resize(function () {
      e.height($window_height)
    });
} else {
      var t = $j(this).data('height');
      setParallaxLayersHeight(e, t), $j(window).resize(function () {
        setParallaxLayersHeight(e, t)
      })
    }
    var i = e.find('.qode_parallax_layers_holder'),
      o = 0,
      a = e.find('.image').length;
    e.find('.image').each(function () {
      var e = $j(this);
      if (e.css('background-image') != '' && e.css('background-image') != 'none') {
        var t = e.attr('style');
        if (t = t.match(/url\(["']?([^'")]+)['"]?\)/), t = t ? t[1] : '') {
          var n = new Image();
          n.src = t, $j(n).load(function () {
            ++o == a && (i.removeClass('preload_parallax_layers'), $j('html').hasClass('no-touch') && i.mouseParallax())
          })
        }
      }
    })
  })
}

function alterWPMLSwitcherHeaderBottom () {
  'use strict';
  if ($j('.header_bottom .main_menu li.menu-item-language').length) {
    var e = $j('.header_bottom .main_menu .menu-item-language').find('.submenu-languages');
    void 0 !== e && (e.parent('li').addClass('narrow'), e.wrap('<div class="second"><div class="inner"></div></div>'), e.show())
  }
  if ($j('.header_bottom .mobile_menu li.menu-item-language').length) {
    var e = $j('.header_bottom .mobile_menu .menu-item-language').find('.submenu-languages');
    void 0 !== e && (e.parent('li').addClass('has_sub'), e.prev('a').after('<span class="mobile_arrow"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span>'), e.addClass('sub_menu'))
  }
}

function initContentSlider () {
  'use strict';
  $j('.qode_content_slider').each(function () {
    var e = $j(this),
      t = 8e3;
    void 0 !== e.data('interval') && !1 !== e.data('interval') && (t = 1e3 * parseFloat(e.data('interval')));
    var i = !1;
    void 0 !== e.data('direction') && (i = e.data('direction'));
    var o = !1;
    void 0 !== e.data('control') && (o = e.data('control'));
    var a = !1;
    void 0 !== e.data('pause-on-hover') && (a = e.data('pause-on-hover'));
    var n = !1;
    void 0 !== e.data('drag') && (n = e.data('drag'));
    var s = !0;
    t === 0 && (s = !1);
    var r = 'slide';
    void 0 !== e.data('flex_fx') && !1 !== e.data('flex_fx') && (r = e.data('flex_fx'));
    var d = !1;
    e.find('.qode-lazy-image').length && (d = !0), e.flexslider({
      selector: '.qode_content_slider_inner > .qode_content_slider_item',
      animationLoop: !0,
      controlNav: o,
      directionNav: i,
      useCSS: !1,
      pauseOnAction: a,
      pauseOnHover: a,
      slideshow: s,
      animation: r,
      prevText: '<div><i class=\'fa fa-angle-left\'></i></div>',
      nextText: '<div><i class=\'fa fa-angle-right\'></i></div>',
      animationSpeed: 600,
      slideshowSpeed: t,
      touch: !0,
      smoothHeight: d,
      start: function () {
        l(e)
      },
      after: function () {
        l(e)
      },
    });
    var l = function (t) {
      e.find('.qode-lazy-image').length && qodeLazyImages()
    };
    if (e.find('.flex-direction-nav a').click(function (e) {
        e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
      }), n && e.swipe({
        swipeLeft: function () {
          e.flexslider('next')
        },
        swipeRight: function () {
          e.flexslider('prev')
        },
        threshold: 20,
      }), e.hasClass('control_nav_justified')) {
      var c = function (t) {
        var i = e.find('ol');
        i.addClass('qode-type1-gradient-left-to-right-after'), $window_width > 1440 ? i.css('max-width', qode_grid_width) : i.css('max-width', Math.round(0.8 * e.outerWidth()));
        var o = i.find('li'),
          a = o.outerWidth(),
          n = parseInt(i.css('max-width')),
          s = n - a * o.length,
          r = Math.floor(s / o.length);
        o.css('margin-right', r), o.last().css('margin-right', 0)
      };
      c(), $j(window).resize(function () {
        c()
      })
    }
  })
}

function qodeInitStickyWidget () {
  var e = $j('.qode-widget-sticky-sidebar');
  if (e.length && $window_width > 1e3) {
    var t = $j('header.page_header');
    sticky_amount = getScrollAmountForStickyHeader(), e.each(function () {
      var e = $j(this),
        i = 0,
        o = e.offset().top;
      if (e.parent('aside.sidebar').length) {
var a = e.parents('aside.sidebar');
} else if (e.parents('.wpb_widgetised_column').length) {
        var a = e.parents('.wpb_widgetised_column');
        e.closest('.wpb_column').css('position', 'static')
      }
      var n = a.offset().top;
      i = sticky_amount < n && (t.hasClass('stick') || t.hasClass('stick_with_left_right_menu')) ? min_header_height_sticky : t.hasClass('fixed') ? min_header_height_scroll + content_menu_top_add : t.hasClass('fixed_top_header') ? header_top_height : t.hasClass('fixed_hiding') ? min_header_height_fixed_hidden + 40 : (qode_window < 1e3 || $j('.vertical_menu_enabled').length, 0);
      var s = -(o - n - i - 10);
      a.stick_in_parent({
        parent: '.full_section_inner, .section_inner, .two_columns_75_25, .two_columns_25_75, .two_columns_66_33, .two_columns_33_66',
        sticky_class: 'qode-sticky-sidebar',
        inner_scrolling: !1,
        offset_top: s,
      }).on('sticky_kit:bottom', function () {
        a.addClass('qode-sticky-sidebar-on-bottom')
      })
.on('sticky_kit:unbottom', function () {
        a.removeClass('qode-sticky-sidebar-on-bottom')
      }), $j(window).scroll(function () {
        $window_width >= 1e3 && (sticky_amount > n && t.hasClass('sticky') && a.hasClass('qode-sticky-sidebar') && !a.hasClass('qode-sticky-sidebar-on-bottom') ? (a.css('-webkit-transform', 'translateY(' + min_header_height_sticky + 'px)'), a.css('transform', 'translateY(' + min_header_height_sticky + 'px)')) : (a.css('-webkit-transform', 'translateY(0px)'), a.css('transform', 'translateY(0px)')))
      })
    })
  }
}

function qodeBlogGalleryAnimation () {
  var e = $j('.blog_holder.blog_gallery');
  e.length && e.each(function () {
    $j(this).find('article')
.each(function () {
      var e = $j(this),
        t = e.find('.post_excerpt'),
        i = parseInt(t.outerHeight(!0)),
        o = e.find('.post_category'),
        a = e.find('.entry_title');
      o.css({
        transform: 'translateY(' + i + 'px)',
      }), a.css({
        transform: 'translateY(' + i + 'px)',
      }), e.mouseenter(function () {
        o.css({
          transform: 'translateY(0px)',
        }), a.css({
          transform: 'translateY(0px)',
        }), t.css({
          visibility: 'visible',
          opacity: '1',
        })
      }), e.mouseleave(function () {
        o.css({
          transform: 'translateY(' + i + 'px)',
        }), a.css({
          transform: 'translateY(' + i + 'px)',
        }), t.css({
          visibility: 'hidden',
          opacity: '0',
        })
      })
    })
  })
}

function qodeLazyImages () {
  $j.fn.preloader = function (e, t) {
    if (e && e == 'destroy') {
this.find('.qode-lazy-preloader').remove();
} else {
      var i = $j('<div class="qode-lazy-preloader"></div>');
      $j('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle stroke-linecap="round" cx="37.5" cy="37.5" r="33.5" stroke-width="4"/></svg>').appendTo(i), i.appendTo(this), typeof t === 'function' && t()
    }

return this
  }, $j('.qode-lazy-image[data-image][data-lazy="true"]:not(.lazyLoading)').each(function (e, t) {
    t = $j(t), t.attr('data-ratio') && t.height(t.width() * t.data('ratio'));
    var i = t[0].getBoundingClientRect(),
      o = $window_height || document.documentElement.clientHeight,
      a = $window_width || document.documentElement.clientWidth,
      n = t.outerHeight(),
      s = t.outerWidth();
    if ((i.top != 0 || i.right != 0 || i.bottom != 0 || i.left != 0) && (i.top >= 0 || i.top + n >= 0) && i.bottom >= 0 && i.bottom - n - o <= 0 && (i.left >= 0 || i.left + s >= 0) && i.right >= 0 && i.right - s - a <= 0) {
      var r = null;
      r = t.prop('tagName') == 'IMG' ? t.parent() : t, r && r.preloader('init'), t.addClass('lazyLoading');
      var d = new Image();
      $j(d).on('load', function () {
        switch (r.preloader('destroy'), t.removeAttr('data-image').removeData('image')
.removeAttr('data-lazy')
.removeData('lazy')
.removeClass('lazyLoading'), t.prop('tagName')) {
          case 'IMG':
            t.attr('src', $j(this).attr('src')), t.height('auto');
            break;
          case 'DIV':
          default:
            t.css('background-image', 'url(' + $j(this).attr('src') + ')')
        }
      })
.attr('src', t.data('image'))
    }
  })
}

function qodeCardsGallery () {
  $j('.qode-cards-gallery-holder').length && $j('.qode-cards-gallery-holder').each(function () {
    var e, t = $j(this),
      i = t.find('.card'),
      o = t.data('side');
    switch (o) {
      case 'left':
        e = '0 0 0 20%';
        break;
      case 'right':
        e = '0 20% 0 0';
        break;
      case 'top':
        e = '20% 0 0 0';
        break;
      case 'bottom':
        e = '0 0 20% 0'
    }
    i.each(function () {
      var o = $j(this);
      o.click(function () {
        if (!i.last().is(o)) {
return o.addClass('out').animate({
          opacity: 0,
          margin: e,
        }, 200, function () {
          o.detach(), o.insertAfter(i.last()).animate({
            opacity: 1,
            margin: '0',
          }, 500, function () {
            o.removeClass('out')
          }), i = t.find('.card')
        }), !1
}
      })
    })
  })
}

function qodeInitEllipticalSlider () {
  var e = $j('.qode-elliptical-slider');
  e.length && e.each(function () {
    var e = $j(this),
      t = $j('.qode-elliptical-slider > .qode-elliptical-slider-slides'),
      i = 600,
      o = !1;
    void 0 !== t.data('animation-speed') && !1 !== t.data('animation-speed') && (i = t.data('animation-speed')), t.data('autoplay') == 'yes' && (o = !0), e.flexslider({
      selector: '.qode-elliptical-slider-slides > .qode-elliptical-slide',
      animationLoop: !0,
      controlNav: !0,
      directionNav: !1,
      useCSS: !1,
      pauseOnAction: !0,
      pauseOnHover: !0,
      slideshow: o,
      animationSpeed: i,
      slideshowSpeed: 5e3,
      touch: !0,
    })
  })
}

function qodeInitPricingCalculator () {
  var e = $j('.qode-pricing-calculator');
  e.length && e.each(function () {
    var e = $j(this),
      t = $j(this).find('.qode-pricing-calculator-item'),
      i = 0;
    t.each(function () {
      var t = $j(this),
        o = t.data('price'),
        a = t.find('input');
      a.attr('checked') && (i += o), t.on('change', function (t) {
        a.attr('checked') ? i += o : i -= o, e.find('.qode-pricing-calculator-total-price').text(i)
      })
    })
  })
}

function qodeSlidingImageHolder () {
  var e = $j('.qode-sliding-image-holder');
  e.length && e.each(function () {
    var e = $j(this);
    if (!$j('html').hasClass('touch')) {
      qodeRequestAnimationFrame();
      var t = e.find('.qode-sliding-image-background-image'),
        i = Math.round(t.width());
      i == 0 && (i = 1920), e.find('.qode-aux-background-image').css('left', i), t.each(function (e) {
        var t = $j(this),
          o = 0,
          a = function () {
            o -= 1, Math.round(t.offset().left) <= -i && (t.css('left', parseInt(i - 2)), o = 0), t.css('transform', 'translate3d(' + o + 'px,0,0)'), requestNextAnimationFrame(a)
          };
        $j(window).load(function () {
          a()
        })
      })
    }
  })
}

function qodeRequestAnimationFrame () {
  window.requestNextAnimationFrame = (function () {
    var e = void 0,
      t = void 0,
      i = navigator.userAgent,
      o = 0,
      a = this;

return window.webkitRequestAnimationFrame && (t = function (e) {
      void 0 === e && (e = Number(new Date())), a.callback(e)
    }, e = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function (i, o) {
      a.callback = i, e(t, o)
    }), window.mozRequestAnimationFrame && (o = i.indexOf('rv:'), i.indexOf('Gecko') != -1 && i.substr(o + 3, 3) === '2.0' && (window.mozRequestAnimationFrame = void 0)), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
      var i, o;
      window.setTimeout(function () {
        i = Number(new Date()), e(i), o = Number(new Date()), a.timeout = 1e3 / 60 - (o - i)
      }, a.timeout)
    }
  }())
}

function qodePageTransitionEffect () {
  var e = $j('body.qode-page-loading-effect-enabled > .qode-page-loading-effect-holder');
  e.length && (e.fadeOut(500), $j(window).bind('pageshow', function (t) {
    t.originalEvent.persisted && e.fadeOut(500)
  }), $j('a').click(function (t) {
    var i = $j(this);
    !(t.which == 1 && i.attr('href').indexOf(window.location.host) >= 0 && void 0 === i.data('rel') && void 0 === i.attr('rel')) || i.hasClass('qode-like') || i.parents('.blog_load_more_button') || i.parents('.qode-single-product-images') || void 0 !== i.attr('target') && i.attr('target') !== '_self' || i.attr('href').split('#')[0] === window.location.href.split('#')[0] || (t.preventDefault(), e.addClass('qode-hide-spinner'), e.fadeIn(500, function () {
      window.location = i.attr('href')
    }))
  }))
}

function qodeInitAccordions () {
  'use strict';
  var e = $j('.qode-accordion-holder');
  e.length && e.each(function () {
    var e = $j(this);
    if (e.hasClass('qode-accordion') && e.accordion({
        animate: 'easeInOutQuint',
        collapsible: !0,
        active: 0,
        icons: '',
        heightStyle: 'content',
      }), e.hasClass('qode-toggle')) {
      var t = $j(this),
        i = t.find('.qode-title-holder'),
        o = i.next();
      t.addClass('accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset'), i.addClass('ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom'), o.addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom').hide(), i.each(function () {
        var e = $j(this);
        e.hover(function () {
          e.toggleClass('ui-state-hover')
        }), e.on('click', function () {
          e.toggleClass('ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom'), e.next().toggleClass('ui-accordion-content-active')
.slideToggle(300)
        })
      })
    }
  })
}

function qodeInitInteractiveIconShowcase () {
  var e = $j('.qode-int-icon-showcase'),
    t = $j('.no_animation_on_touch');
  e.length && e.each(function () {
    function e () {
      i = 0;
      setInterval(function () {
        l || (a.removeClass('qode-showcase-active qode-current'), i == h - 1 ? i = 0 : i++, a.eq(i).addClass('qode-showcase-active'))
      }, c)
    }
    var i, o = $j(this),
      a = o.find('.qode-showcase-item-holder'),
      n = o.find('.qode-showcase-icon'),
      s = (o.find('.qode-showcase-content'), o.find('.qode-showcase-item-holder:first-child')),
      r = o.find('.qode-showcase-item-holder.qode-showcase-active'),
      d = !1,
      l = !1,
      c = 3e3,
      h = a.length;
    void 0 !== o.data('interval') && !1 !== o.data('interval') && (c = o.data('interval')), t.length ? (s.addClass('qode-showcase-active'), d = !0) : o.appear(function () {
      setTimeout(function () {
        o.addClass('qode-appeared'), r.length || (d = !0, s.addClass('qode-showcase-active'), o.hasClass('qode-autoplay') && (e(), o.hover(function (e) {
          l = !0
        }, function (e) {
          l = !1
        })))
      }, 30)
    }, {
      accX: 0,
      accY: -200,
    }), n.each(function () {
      var e = $j(this),
        t = e.parent();
      e.mouseenter(function () {
        d == 1 && (t.siblings().removeClass('qode-showcase-active qode-current'), t.addClass('qode-showcase-active qode-current'), i = o.find('.qode-current').index())
      })
    })
  })
}

function qodeInitSendContactForm () {
  'use strict';
  var e = $j('.qode-contact-form-contact-template');
  e.length && e.each(function () {
    var e = $j(this);
    e.on('submit', function (t) {
      t.preventDefault();
      var i = !0;
      if (e.find('.contact-error').remove(), e.parent().find('.contact-success')
.remove(), e.find('.requiredField').each(function () {
          var t = $j(this);
          if (jQuery.trim(t.val()) == '' || jQuery.trim(t.val()) == jQuery.trim(t.attr('placeholder'))) {
t.parent().append('<strong class="contact-error">' + e.data('required-message') + '</strong>'), t.addClass('inputError'), i = !1;
} else if (t.hasClass('email')) {
            var o = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            o.test(jQuery.trim(t.val())) || (t.parent().append('<strong class="contact-error">' + e.data('wrong-email-message') + '</strong>'), t.addClass('inputError'), i = !1)
          }
        }), i) {
        var o = e.serialize(),
          a = {
            action: 'qode_send_contact_page_form',
            form_data: o,
          };
        $j.ajax({
          type: 'POST',
          data: a,
          url: QodeAdminAjax.ajaxurl,
          success: function (t) {
            var i = JSON.parse(t);
            i.status == 'success' ? (e.before('<div class="contact-success"><p>' + i.message + '</p></div>'), e.hide()) : e.before('<div class="contact-success"><p>' + i.message + '</p></div>')
          },
        })
      }
    })
  })
}

function qodeRecaptchaCallback () {
  'use strict';
  var e = $j('#qode-captcha-element-holder');
  e.length && grecaptcha.render('qode-captcha-element-holder', {
    sitekey: e.data('sitekey'),
  })
}

function qodeWorkflow () {
  var e = $j('.qode-workflow');
  e.length && e.each(function () {
    var e = $j(this);
    if (e.hasClass('qode-workflow-animate')) {
      var t = e.find('.qode-workflow-item');
      e.appear(function () {
        e.addClass('qode-appeared'), setTimeout(function () {
          t.each(function (e) {
            var t = $j(this);
            setTimeout(function () {
              t.addClass('qode-appeared')
            }, 350 * e)
          })
        }, 350)
      }, {
        accX: 0,
        accY: -$window_height / 3,
      })
    }
  })
}

function getLoadMoreData (e) {
  var t = e.data(),
    i = {};
  for (var o in t) {
t.hasOwnProperty(o) && void 0 !== t[o] && !1 !== t[o] && (i[o] = t[o]);
}

return i
}

function setLoadMoreAjaxData (e, t) {
  var i = {
    action: t,
  };
  for (var o in e) {
e.hasOwnProperty(o) && void 0 !== e[o] && !1 !== e[o] && (i[o] = e[o]);
}

return i
}

function qodeOwlSlider () {
  var e = $j('.qode-owl-slider');
  e.length && e.each(function () {
    var e = $j(this),
      t = e.children().length,
      i = 1,
      o = !0,
      a = !0,
      n = !0,
      s = 5e3,
      r = 600,
      d = 0,
      l = 0,
      c = 0,
      h = !1,
      _ = !1,
      u = !1,
      f = !1,
      p = !1,
      g = !0,
      m = !1,
      $ = Boolean(e.hasClass('qode-pl-is-slider')),
      v = $ ? e.parent() : e;
    void 0 === e.data('number-of-items') || !1 === e.data('number-of-items') || $ || (i = e.data('number-of-items')), void 0 !== v.data('number-of-columns') && !1 !== v.data('number-of-columns') && $ && (i = v.data('number-of-columns')), v.data('enable-loop') === 'no' && (o = !1), v.data('enable-autoplay') === 'no' && (a = !1), v.data('enable-autoplay-hover-pause') === 'no' && (n = !1), void 0 !== v.data('slider-speed') && !1 !== v.data('slider-speed') && (s = v.data('slider-speed')), void 0 !== v.data('slider-speed-animation') && !1 !== v.data('slider-speed-animation') && (r = v.data('slider-speed-animation')), void 0 !== v.data('slider-margin') && !1 !== v.data('slider-margin') && (d = v.data('slider-margin')), e.parent().hasClass('qode-huge-space') ? d = 60 : e.parent().hasClass('qode-large-space') ? d = 50 : e.parent().hasClass('qode-medium-space') ? d = 40 : e.parent().hasClass('qode-normal-space') ? d = 30 : e.parent().hasClass('qode-small-space') ? d = 20 : e.parent().hasClass('qode-tiny-space') && (d = 10), v.data('slider-padding') === 'yes' && (h = !0, c = parseInt(0.28 * e.outerWidth()), d = 50), v.data('enable-center') === 'yes' && (_ = !0), v.data('enable-auto-width') === 'yes' && (u = !0), void 0 !== v.data('slider-animate-in') && !1 !== v.data('slider-animate-in') && (f = v.data('slider-animate-in')), void 0 !== v.data('slider-animate-out') && !1 !== v.data('slider-animate-out') && (p = v.data('slider-animate-out')), v.data('enable-navigation') === 'no' && (g = !1), v.data('enable-pagination') === 'yes' && (m = !0), g && m && e.addClass('qode-slider-has-both-nav'), t <= 1 && (o = !1, a = !1, g = !1, m = !1);
    var j = 2,
      w = 3,
      b = i;
    i < 3 && (j = i, w = i), i > 4 && (b = 4), (h || d > 0) && (l = 20), e.owlCarousel({
      items: i,
      loop: o,
      autoplay: a,
      autoplayHoverPause: n,
      autoplayTimeout: s,
      smartSpeed: r,
      margin: d,
      stagePadding: c,
      center: _,
      autoWidth: u,
      animateInClass: f,
      animateOut: p,
      dots: m,
      nav: g,
      navText: ['<span class="qode-prev-icon fa fa-angle-left"></span>', '<span class="qode-next-icon fa fa-angle-right"></span>', ],
      responsive: {
        0: {
          items: 1,
          margin: l,
          stagePadding: 0,
          center: !1,
          autoWidth: !1,
        },
        681: {
          items: j,
        },
        769: {
          items: w,
        },
        1025: {
          items: b,
        },
        1281: {
          items: i,
        },
      },
      onInitialize: function () {
        e.css('visibility', 'visible')
      },
      onChanged: function () {
        e.parent().length && e.parent().hasClass('qode-image-behavior-lightbox') && prettyPhoto()
      },
    })
  })
}

function qodeScrollingImage () {
  var e = $j('.qode-scrolling-image-holder');
  e.length && e.each(function () {
    var e, t, i, o, a = $j(this),
      n = a.find('.qode-si-content-holder'),
      s = a.find('.qode-si-frame'),
      r = a.find('.qode-si-image'),
      d = !1,
      l = function () {
        e = s.height(), t = r.height(), i = Math.round(t - e), o = 2 * Math.round(t / e), t > e && (d = !0)
      },
      c = function () {
        n.mouseenter(function () {
          r.css('transition-duration', o + 's'), r.css('transform', 'translate3d(0px, -' + i + 'px, 0px)')
        }), n.mouseleave(function () {
          d && (r.css('transition-duration', Math.min(o / 3, 3) + 's'), r.css('transform', 'translate3d(0px, 0px, 0px)'))
        })
      };
    a.waitForImages(function () {
      a.css('visibility', 'visible'), l(), c()
    }), $j(window).resize(function () {
      l()
    })
  })
}

function animationEventEnd () {
  var e = document.createElement('animationDetector'),
    t = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };
  for (var i in t) {
if (void 0 !== e.style[i]) {
return t[i]
}
}
}

function transitionEventEnd () {
  var e = document.createElement('transitionDetector'),
    t = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      transition: 'transitionend',
    };
  for (var i in t) {
if (void 0 !== e.style[i]) {
return t[i]
}
}
}

function qodeCustomFontTypeOut () {
  var e = $j('.qode-cf-typed');
  e.length && e.each(function () {
    var e = $j(this),
      t = e.parent('.qode-cf-typed-wrap'),
      i = t.parent('.custom_font_holder'),
      o = [],
      a = e.find('.qode-cf-typed');
    a.length && a.each(function () {
      o.push($j(this).text())
    }), i.appear(function () {
      e.typed({
        strings: o,
        typeSpeed: 90,
        backDelay: 700,
        loop: !0,
        contentType: 'text',
        loopCount: !1,
        cursorChar: '_',
      })
    }, {
      accX: 0,
      accY: 200,
    })
  })
}

function qodeContactPageAcceptance () {
  var e = $j('.qode-contact-form-contact-template'),
    t = e.find('.contact_form_acceptance .contact_form_acceptance_value'),
    i = e.find('.contact_form_button');
  t.length && t.each(function () {
    var e = $j(this);
    i.attr('disabled', 'disabled'), e.change(function () {
      e.is(':checked') ? i.removeAttr('disabled') : i.attr('disabled', 'disabled')
    })
  })
}
var $j = jQuery.noConflict();
window.qode = {}, qode.modules = {};
var common = {};
qode.modules.common = common;
var $scroll = 0,
  qode_body = $j('body'),
  qode_document = $j('document'),
  qode_window = $j(window),
  $window_width = $j(window).width();
qode.windowWidth = $window_width;
var $window_height = $j(window).height();
qode.windowHeight = $window_height;
var logo_height, menu_dropdown_height_set = !1,
  sticky_amount = 0,
  qode_grid_width = 1100,
  content_menu_position, content_menu_top, content_menu_top_add = 0,
  src, next_image, prev_image, $top_header_height, min_w = 1500,
  video_width_original = 1280,
  video_height_original = 720,
  vid_ratio = 1280 / 720,
  skrollr_slider, paspartu_width;
if (void 0 === paspartu_width_init) {
var paspartu_width_init = 0.02;
}
common.getLoadMoreData = getLoadMoreData, common.setLoadMoreAjaxData = setLoadMoreAjaxData, qode.animationEnd = animationEventEnd(), qode.transitionEnd = transitionEventEnd(), $j(document).ready(function () {
  'use strict';
  if ($j('header').hasClass('regular') && (content_menu_top = 0), $j('header').hasClass('fixed_top_header') && (content_menu_top = header_height), $j('header').hasClass('fixed') && (content_menu_top = min_header_height_scroll), $j('header').hasClass('fixed_hiding') && (content_menu_top = min_header_height_fixed_hidden + 40), ($j('header').hasClass('stick') || $j('header').hasClass('stick_with_left_right_menu')) && (content_menu_top = 0), !$j('header.page_header').hasClass('scroll_top') && $j('header.page_header').hasClass('has_top') && $j('header.page_header').hasClass('fixed') && (content_menu_top_add = 34), $j('body').hasClass('vertical_menu_enabled')) {
    content_menu_top = 0, content_menu_top_add = 0
  }
  paspartu_width = $window_width < 1024 ? 0.02 : paspartu_width_init, contentMinHeight(), contentMinHeightWithPaspartu(), qodeGridWidth(), setDropDownMenuPosition(), initDropDownMenu(), initVerticalMenu(), initVerticalMobileMenu(), initQodeSlider(), initSideMenu(), initPopupMenu(), initMessageHeight(), initToCounter(), initCounter(), $j('.vertical_split_slider').length || initCountdown(), initProgressBars(), initListAnimation(), initPieChart(), initPieChartWithIcon(), initServiceAnimation(), initParallaxTitle(), initSideAreaScroll(), initVerticalAreaMenuScroll(), loadMore(), prettyPhoto(), alterWPMLSwitcherHeaderBottom(), initMobileMenu(), initFlexSlider(), fitVideo(), fitAudio(), initAccordion(), initAccordionContentLink(), qodeInitAccordions(), initMessages(), initProgressBarsIcon(), initMoreFacts(), placeholderReplace(), backButtonShowHide(), backToTop(), initSteps(), showGoogleMap(), initProgressBarsVertical(), initElementsAnimation(), updateShoppingCart(), initHashClick(), initIconWithTextAnimation(), initVideoBackground(), initCheckSafariBrowser(), initSearchButton(), initCoverBoxes(), createContentMenu(), contentMenuScrollTo(), createSelectContentMenu(), initButtonHover(), initEnlargeButton(), initSocialIconHover(), initPageTitleAnimation(), initIconShortcodeHover(), qodeIcon().init(), initIconWithTextHover(), parallaxLayers(), initHorizontalMarquee(), qodeHorizontalMarqueeLoop(), initTextMarquee(), initExpandingImages(), qodeLazyImages(), initItemShowcase(), qodeCTASection().init(), qodeInitInteractiveIconShowcase(), qodeInitSendContactForm(), qodeWorkflow(), qodeCustomFontTypeOut(), qodeMobileHeaderBehavior(), $j('.widget #searchform').mousedown(function () {
    $j(this).addClass('form_focus')
  })
.focusout(function () {
    $j(this).removeClass('form_focus')
  }), $scroll = $j(window).scrollTop(), checkTitleToShowOrHide(), checkVerticalMenuTransparency(), $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), $j('header:not(.stick_with_left_right_menu) .q_logo a').css('visibility', 'visible'), initFullScreenTemplate(), showHideVerticalMenu(), initMasonryGallery(), initLoadNextPostOnBottom(), initBlogMasonryGallery(), initBlogGallery(), qodeV2Button().init(), qodeCardsSlider().init(), qodeCardsGallery(), qodeInitEllipticalSlider(), qodeInitPricingCalculator(), qodeSlidingImageHolder(), qodeOwlSlider(), qodeScrollingImage()
}), $j(window).load(function () {
  'use strict';
  $j('.touch .main_menu li:has(div.second)').doubleTapToGo(), setLeftPostionedMenuPadding(), initSmallImageBlogHeight(), setDropDownMenuPosition(), initDropDownMenu(), initPortfolio(), initPortfolioZIndex(), initPortfolioSingleInfo(), initTestimonials(), initTestimonialsCarousel(), initVideoBackgroundSize(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), initPortfolioJustifiedGallery(), initPortfolioMasonry(), initPortfolioMasonryFilter(), initTabs(), qodeInitAdvancedTabs(), qodeInitAdvancedTabsIcons(), countClientsPerRow(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initTitleAreaAnimation(), setContentBottomMargin(), footerWidth(), $j('nav.content_menu').length > 0 && (content_menu_position = $j('nav.content_menu').offset().top, contentMenuPosition()), contentMenuCheckLastSection(), initQodeCarousel(), initPortfolioSlider(), initBlogSlider(), qodeInitBlogCarouselTitled(), initPreviewSlider(), initInDeviceSlider(), initTabsActiveBorder(), setActiveTabBorder(), initImageHover(), $j('header.stick_with_left_right_menu .q_logo a').css('visibility', 'visible'), setMargingsForLeftAndRightMenu(), initImageGallerySliderNoSpace(), initVerticalSplitSlider(), initParallax(), initQodeElementAnimationSkrollr(), qodeBlogCompundMasonryGallery().init(), qodeInitStickyWidget(), qodeBlogHeadlines(), qodeCardsSlider().load(), initContentSlider(), qodePageTransitionEffect(), qodeContactPageAcceptance(), setTimeout(function () {
    checkAnchorOnScroll(), qodeBlogGalleryAnimation(), checkAnchorOnLoad(), checkHeaderStyleOnScroll(), $j('.no-touch .carousel').length && skrollr_slider.refresh()
  }, 700)
}), $j(window).scroll(function () {
  'use strict';
  $scroll = $j(window).scrollTop(), $j(window).width() > 1e3 && headerSize($scroll), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), checkVerticalMenuTransparency(), qodeLazyImages(), $j('.touch .drop_down > ul > li').mouseleave(), $j('.touch .drop_down > ul > li').blur()
}), $j(window).resize(function () {
  'use strict';
  $window_width = $j(window).width(), $window_height = $j(window).height(), paspartu_width = $window_width < 1024 ? 0.02 : paspartu_width_init, $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), initMessageHeight(), qodeNumberOfTestimonialsItemsResize(), fitAudio(), initSmallImageBlogHeight(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initVideoBackgroundSize(), countClientsPerRow(), setContentBottomMargin(), footerWidth(), calculateHeights(), $j('.vertical_split_slider').height($window_height), initMasonryGallery(), initPortfolioMasonry(), contentMinHeight(), contentMinHeightWithPaspartu(), qodeInitStickyWidget()
});
var sticky_animate, default_header_style, current_scroll;
!(function (e) {
  'use strict';
  e.fn.countTo = function (t) {
    t = e.extend({}, e.fn.countTo.defaults, t || {});
    var i = Math.ceil(t.speed / t.refreshInterval),
      o = (t.to - t.from) / i;

return e(this).each(function () {
      function a () {
        r += o, s++, e(n).html(r.toFixed(t.decimals)), typeof t.onUpdate === 'function' && t.onUpdate.call(n, r), s >= i && (clearInterval(d), r = t.to, typeof t.onComplete === 'function' && t.onComplete.call(n, r))
      }
      var n = this,
        s = 0,
        r = t.from,
        d = setInterval(a, t.refreshInterval)
    })
  }, e.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null,
  }
}(jQuery)),
(function (e) {
  var t = e(window),
    i = t.height();
  t.resize(function () {
    i = t.height()
  }), e.fn.parallax = function (o, a, n) {
    function s () {
      var n = t.scrollTop();
      l.each(function () {
        var t = e(this),
          s = t.offset().top;
        s + r(t) < n || s > n + i || l.css('backgroundPosition', o + ' ' + Math.round((d - n) * a) + 'px')
      })
    }
    var r, d, l = e(this);
    l.each(function () {
      d = l.offset().top
    }), r = n ? function (e) {
      return e.outerHeight(!0)
    } : function (e) {
      return e.height()
    }, (arguments.length < 1 || o === null) && (o = '50%'), (arguments.length < 2 || a === null) && (a = 0.1), (arguments.length < 3 || n === null) && (n = !0), t.bind('scroll', s).resize(s), s()
  }
}(jQuery));
var $scrollHeight, timeOuts = [];
!(function (e) {
  'use strict';
  var t = e(window);
  e.fn.masonryParallax = function (i, o, a) {
    function n () {
      c + h < $scroll || c > $scroll + $window_height || d.css('transform', 'translate3d(0px, ' + Math.round((r - h - $scroll) * i + l) + 'px, 0px)')
    }
    var s, r, d = e(this),
      l = 0;
    r = d.offset().top, s = o ? function (e) {
      return e.outerHeight(!0)
    } : function (e) {
      return e.height()
    }, a != 0 && (l = a), (arguments.length < 1 || i === null) && (i = 0.1), (arguments.length < 2 || o === null) && (o = !0);
    var c = d.offset().top,
      h = s(d);
    t.bind('scroll', n).resize(n), n()
  }
}(jQuery));
var qodeV2Button = function () {
    var e = $j('.qode-btn'),
      t = function (e) {
        if (void 0 !== e.data('hover-color')) {
          var t = function (e) {
              e.data.button.css('color', e.data.color)
            },
            i = e.css('color'),
            o = e.data('hover-color');
          e.hasClass('qode-btn-3d-hover') || (e.on('mouseenter', {
            button: e,
            color: o,
          }, t), e.on('mouseleave', {
            button: e,
            color: i,
          }, t))
        }
      },
      i = function (e) {
        if (void 0 !== e.data('hover-bg-color')) {
          var t = function (e) {
              e.data.button.css('background-color', e.data.color)
            },
            i = e.css('background-color'),
            o = e.data('hover-bg-color');
          e.hasClass('qode-btn-3d-hover') || (e.on('mouseenter', {
            button: e,
            color: o,
          }, t), e.on('mouseleave', {
            button: e,
            color: i,
          }, t))
        }
      },
      o = function (e) {
        var t = e.find('.qode-button-v2-icon-holder');
        if (void 0 !== t.data('hover-icon-border-color')) {
          var i = function (e) {
              e.data.iconHolder.css('border-color', e.data.color)
            },
            o = t.css('borderLeftColor'),
            a = t.data('hover-icon-border-color');
          e.hasClass('qode-btn-3d-hover') || (e.on('mouseenter', {
            iconHolder: t,
            color: a,
          }, i), e.on('mouseleave', {
            iconHolder: t,
            color: o,
          }, i))
        }
      },
      a = function (e) {
        var t = e.find('.qode-button-v2-icon-holder');
        if (void 0 !== t.data('hover-icon-bg-color')) {
          var i = function (e) {
              e.data.iconHolder.css('background-color', e.data.color)
            },
            o = t.css('backgroundColor'),
            a = t.data('hover-icon-bg-color');
          e.hasClass('qode-btn-3d-hover') || (e.on('mouseenter', {
            iconHolder: t,
            color: a,
          }, i), e.on('mouseleave', {
            iconHolder: t,
            color: o,
          }, i))
        }
      },
      n = function (e) {
        if (e.hasClass('qode-btn-3d-hover')) {
          var t = e.closest('.qode-3d-button-holder'),
            i = t.find('.qode-btn-3d-hover'),
            o = i.first(),
            a = i.last(),
            n = a.find('.qode-button-v2-icon-holder'),
            s = t.outerHeight(),
            r = Math.round(s / 2);
          if (o.css('transform', 'rotateX(0deg) translateZ(' + r + 'px)'), a.css('transform', 'rotateX(90deg) translateZ(' + r + 'px)'), setTimeout(function () {
              t.css('opacity', '1')
            }, 200), t.on('mouseenter', function () {
              o.css('transform', 'rotateX(-90deg) translateZ(' + r + 'px)'), a.css('transform', 'rotateX(0deg) translateZ(' + r + 'px)')
            }), t.on('mouseleave', function () {
              o.css('transform', 'rotateX(0deg) translateZ(' + r + 'px)'), a.css('transform', 'rotateX(90deg) translateZ(' + r + 'px)')
            }), void 0 !== a.data('hover-color')) {
            var d = a.data('hover-color');
            a.css('color', d)
          }
          if (void 0 !== a.data('hover-bg-color')) {
            var l = a.data('hover-bg-color');
            a.css('background-color', l)
          }
          if (void 0 !== a.data('hover-border-color')) {
            var c = a.data('hover-border-color');
            a.css('border-color', c)
          }
          if (void 0 !== n.data('hover-icon-border-color')) {
            var h = n.data('hover-icon-border-color');
            n.css('border-color', h)
          }
          if (void 0 !== n.data('hover-icon-bg-color')) {
            var _ = n.data('hover-icon-bg-color');
            n.css('background-color', _)
          }
        }
      };

return {
      init: function () {
        e.length && e.each(function () {
          t($j(this)), i($j(this)), o($j(this)), a($j(this)), n($j(this))
        })
      },
    }
  },
  qodeCTASection = function () {
    'use strict';
    var e = $j('.qode-cta-section'),
      t = function () {
        e.each(function () {
          var e = $j(this),
            t = e.find('img'),
            i = e.find('.qode-cta-section-text-wrapper');
          if (!$j('html').hasClass('touch') && e.hasClass('qode-cta-appear-effect')) {
            var o = function (e) {
              e.appear(function () {
                setTimeout(function () {
                  e.addClass('qode-appeared')
                }, 30)
              }, {
                accX: 0,
                accY: -$window_height / 3,
              })
            };
            o(t), o(i)
          }
        })
      };

return {
      init: function () {
        e.length && t()
      },
    }
  },
  getIEversion = function () {
    var e = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      var t = navigator.userAgent,
        i = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
      i.exec(t) != null && (e = parseFloat(RegExp.$1))
    } else if (navigator.appName == 'Netscape') {
      var t = navigator.userAgent,
        i = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');
      i.exec(t) != null && (e = parseFloat(RegExp.$1))
    }

return e
  },
  docElem = window.document.documentElement;
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60)
  }
}()), window.cancelAnimFrame = (function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
    window.clearTimeout(e)
  }
}()), SVGEl.prototype.init = function () {
  var e = this;
  [].slice.call(this.el.querySelectorAll('path')).forEach(function (t, i) {
    e.path[i] = t;
    var o = e.path[i].getTotalLength();
    e.length[i] = o, e.path[i].style.strokeDasharray = o + ' ' + o, e.path[i].style.strokeDashoffset = o
  })
}, SVGEl.prototype.render = function () {
  this.rendered || (this.rendered = !0, this.draw())
}, SVGEl.prototype.draw = function () {
  var e = this,
    t = this.current_frame / this.total_frames;
  if (t > 1) {
window.cancelAnimFrame(this.handle);
} else {
    this.current_frame++;
    for (var i = 0, o = this.path.length; i < o; i++) {
this.path[i].style.strokeDashoffset = Math.floor(this.length[i] * (1 - t));
}
    this.handle = window.requestAnimFrame(function () {
      e.draw()
    })
  }
};
var qodeIcon = function () {
  var e = $j('.qode-icon-holder'),
    t = function (e) {
      if (void 0 !== e.data('hover-color')) {
        var t = function (e) {
            e.data.icon.css('color', e.data.color)
          },
          i = e.find('.qode-icon-element'),
          o = e.data('hover-color'),
          a = i.css('color');
        o !== '' && (e.parents('.qode-start-icon-hover').length ? (e.parents('.qode-start-icon-hover').on('mouseenter', {
          icon: i,
          color: o,
        }, t), e.parents('.qode-start-icon-hover').on('mouseleave', {
          icon: i,
          color: a,
        }, t)) : (e.on('mouseenter', {
          icon: i,
          color: o,
        }, t), e.on('mouseleave', {
          icon: i,
          color: a,
        }, t)))
      }
    },
    i = function (e) {
      if (void 0 !== e.data('hover-background-color')) {
        var t = function (e) {
            e.data.icon.css('background-color', e.data.color)
          },
          i = e.data('hover-background-color'),
          o = e.css('background-color');
        i !== '' && (e.parents('.qode-start-icon-hover').length ? (e.parents('.qode-start-icon-hover').on('mouseenter', {
          icon: e,
          color: i,
        }, t), e.parents('.qode-start-icon-hover').on('mouseleave', {
          icon: e,
          color: o,
        }, t)) : (e.on('mouseenter', {
          icon: e,
          color: i,
        }, t), e.on('mouseleave', {
          icon: e,
          color: o,
        }, t)))
      }
    };

return {
    init: function () {
      e.length && e.each(function () {
        t($j(this)), i($j(this))
      })
    },
  }
};
!(function (e) {
  'use strict';
  e.fn.extend({
    mouseParallax: function (t) {
      var i = {
          moveFactor: 1.5,
          targetContainer: this,
        },
        t = e.extend(i, t);

return this.each(function () {
        var i = t,
          o = e(i.targetContainer).find('.image, .paralax_layers_content_holder');
        o.each(function (t) {
          e(this).css('z-index', t)
        });
        var a, n;
        a = e(i.targetContainer).offset().left, n = e(i.targetContainer).offset().top, e(i.targetContainer).on('mouseenter', function (t) {
          a = t.pageX - e(this).offset().left, n = t.pageY - e(this).offset().top
        }), e(i.targetContainer).on('mousemove', function (t) {
          var s = e(this).offset().left + a,
            r = e(this).offset().top + n,
            d = t.pageX - s,
            l = t.pageY - r;
          o.each(function (t) {
            e(this).css({
              marginLeft: -d / 100 * i.moveFactor * (t + 1),
              marginTop: -l / 100 * i.moveFactor * (t + 1),
            }, 100)
          })
        });
        var s = {
          interval: 0,
          over: function () {},
          timeout: 500,
          out: function () {
            o.each(function (t) {
              e(this).stop()
.animate({
                marginLeft: 0,
                marginTop: 0,
              }, 300)
            })
          },
        };
        e(i.targetContainer).hoverIntent(s)
      })
    },
  })
}(jQuery));
var qodeCardsSlider = function () {
  var e = function (e, t, i, o, a, n) {
      t.data('card-slide', o).attr('data-card-slide', o),
        t.find('.qode-card-slider').css('margin-left', n ? -a.position().left + $j(t).outerWidth() / 2 - a.outerWidth() / 2 : -a.position().left), setTimeout(function () {
          qodeLazyImages()
        }, 500);
      var s = i < o ? 1 : -1;
      s > 0 && o == e.length ? t.find('.button[data-direction="next"]').addClass('hidden') : t.find('.button[data-direction="next"]').removeClass('hidden'), s < 0 && o == 1 ? t.find('.button[data-direction="prev"]').addClass('hidden') : t.find('.button[data-direction="prev"]').removeClass('hidden')
    },
    t = function (t, i, o) {
      t.each(function (t, a) {
        var n = $j(a).find('.qode-card-slider > .slide'),
          s = $j(a).find('.dot'),
          r = Math.round(n.length / 2) - 1;
        i ? (s.length > 0 ? $j(s[r]).click() : e(n, $j(a), 1, r, $j(n[r]), o), $j(a).data('card-slide', r + 1)
.attr('data-card-slide', r + 1), $j(a).find('.button')
.removeClass('hidden')) : s.length > 0 ? $j(s[0]).click() : e(n, $j(a), 1, 1, $j(n[0]), o)
      })
    },
    i = function (e, t, i) {
      t.find('.qode-card-slider').width(99999), e.each(function () {
        $j(this).css('max-width', t.outerWidth())
      })
    },
    o = function () {
      $j('.cards').each(function () {
        var e = $j(this),
          t = e.find('.card');
        t.each(function () {
          var i = $j(this);
          i.click(function () {
            return t.last().is(i) || (i.detach(), i.insertAfter(t.last()), t = e.find('.card')), !1
          })
        })
      })
    },
    a = function () {
      $j('.cards').each(function () {
        var e = $j(this),
          t = e.find('.card').get()
.reverse();
        e.appear(function () {
          $j(t).each(function (e) {
            var t = $j(this);
            setTimeout(function () {
              t.addClass('hovered'), setTimeout(function () {
                t.removeClass('hovered')
              }, 600)
            }, 200 * e)
          })
        }, {
          accX: 0,
          accY: -$window_height / 3,
        })
      })
    },
    n = function () {
      $j('.qode-cards-holder .card').each(function (e, t) {
        $j(t).click(function () {
          var e = $j('.' + $j(t).data('value'));

return e.closest('.qode-card-panes').find('.pane')
.removeClass('active'), e.addClass('active'), qodeLazyImages(), !1
        })
      }), $j('.qode-cards-holder').each(function (e, t) {
        $j(t).find('.qode-card-panes .pane')
.last()
.addClass('active'), $j(t).find('.qode-card-panes .pane .card').length ? $j(t).find('.qode-card-panes .pane .card')
.each(function (e, i) {
          $j(i).detach(), $j(t).find('.qode-cards-header')
.append($j(i))
        }) : $j(t).find('.qode-cards-header')
.remove()
      })
    },
    s = function () {
      $j('.qode-card-panes').each(function () {
        var e = $j(this),
          t = -1,
          i = e.find('.pane').height();
        t = t > i ? t : i, e.height(t)
      })
    },
    r = function (e) {
      e.swipe({
        swipeLeft: function () {
          e.find('.button[data-direction="next"]').click()
        },
        swipeRight: function () {
          e.find('.button[data-direction="prev"]').click()
        },
        threshold: 20,
      })
    },
    d = function () {
      $j('.qode-card-slider-holder').each(function (o, a) {
        var n = $j(a).find('.qode-card-slider > .slide'),
          d = $j(a).data('active-middle-slide'),
          l = $j(a).data('center');
        $j(a).find('.button')
.each(function (t, i) {
          $j(i).click(function () {
            var t = $j(i).data('direction') == 'prev' ? -1 : 1,
              o = $j(a).data('card-slide'),
              s = $j(a).data('card-slide') + t,
              r = $j(a).find('.slide[data-card-slide="' + s + '"]');

return r.length && (e(n, $j(a), o, s, r, l), $j(a).find('.dot')
.removeClass('active')
.filter('[data-card-slide="' + s + '"]')
.addClass('active')), !1
          })
        }), $j(a).find('.dot')
.each(function (t, i) {
          $j(i).click(function () {
            $j(a).find('.dot')
.removeClass('active'), $j(i).addClass('active');
            var t = $j(a).data('card-slide'),
              o = $j(i).data('card-slide'),
              s = $j(a).find('.slide[data-card-slide="' + o + '"]');

return s.length && e(n, $j(a), t, o, s, l), !1
          })
        }), i(n, $j(a)), t($j(a), d, l), r($j(a)), $j(window).resize(function () {
          i(n, $j(a)), t($j(a), d, l), s()
        })
      })
    };

return {
    init: function () {
      $j('.qode-card-slider-holder').length && (d(), s(), n(), o())
    },
    load: function () {
      $j('.qode-card-slider-holder').length && (s(), a())
    },
  }
};
!(function (e) {
  'use strict';

  function t () {
    i()
  }

  function i () {
    var t = e('.qode-advanced-image-gallery.qode-aig-masonry-type');
    t.length && t.each(function () {
      var t = e(this),
        i = t.find('.qode-aig-masonry');
      o(t.find('.qode-aig-grid-sizer').width(), t), i.waitForImages(function () {
        i.isotope({
          layoutMode: 'packery',
          itemSelector: '.qode-aig-image',
          percentPosition: !0,
          packery: {
            gutter: '.qode-aig-grid-gutter',
            columnWidth: '.qode-aig-grid-sizer',
          },
        }), setTimeout(function () {
          i.isotope('layout'), initParallax()
        }, 800), i.css('opacity', '1')
      })
    })
  }

  function o (e, t) {
    if (t.hasClass('qode-aig-images-fixed')) {
      var i = parseInt(t.find('.qode-aig-image').css('padding-left')),
        o = t.find('.qode-aig-default-masonry-item'),
        a = t.find('.qode-aig-large-width-masonry-item'),
        n = t.find('.qode-aig-large-height-masonry-item'),
        s = t.find('.qode-aig-large-masonry-item');
      qode.windowWidth > 680 ? (o.css('height', e - 2 * i), n.css('height', Math.round(2 * e) - 2 * i), s.css('height', Math.round(2 * e) - 2 * i), a.css('height', e - 2 * i)) : (o.css('height', e - 2 * i), n.css('height', 2 * e - 2 * i), s.css('height', e - 2 * i), a.css('height', Math.floor(e / 2) - 2 * i))
    }
  }
  var a = {};
  qode.modules.imageGallery = a, a.qodeInitAdvancedImageGalleryMasonry = i, a.qodeOnWindowLoad = t, e(window).load(t)
}(jQuery)),
(function (e) {
  'use strict';

  function t () {
    i()
  }

  function i () {
    var e = $j('.qode-comparison-slider');
    e.length && e.each(function (e) {
      var t = $j(this),
        i = t.data('orientation'),
        o = t.data('offset') / 100;
      t.waitForImages(function () {
        t.css('visibility', 'visible'), t.twentytwenty({
          default_offset_pct: 1.1,
          orientation: i,
        })
      }), t.appear(function () {
        setTimeout(function () {
          var e = t.height(),
            a = t.width(),
            n = e * o,
            s = a * o,
            r = t.find('.twentytwenty-handle'),
            d = t.find('img:first-of-type'),
            l = function () {
              i == 'horizontal' ? (r.css({
                left: Number(s) + 1 + 'px',
              }), d.css({
                clip: 'rect(0px ' + s + 'px ' + e + 'px 0px)',
              })) : (r.css({
                top: Number(n) + 1 + 'px',
              }), d.css({
                clip: 'rect(0px ' + a + 'px ' + n + 'px 0px)',
              }))
            };
          d.css('transition', 'all 700ms cubic-bezier(0.645, 0.045, 0.355, 1) 100ms'), r.css('transition', 'all 700ms cubic-bezier(0.645, 0.045, 0.355, 1) 100ms'), l(), setTimeout(function () {
            d.css('transition', 'none'), r.css('transition', 'none')
          }, 700), $j(window).resize(function () {
            e = t.height(), a = t.width(), n = e * o, s = a * o, l()
          })
        }, 100)
      }, {
        accX: 0,
        accY: -200,
      })
    })
  }
  var o = {};
  qode.modules.comparisonSlider = o, o.qodeInitComparisonSlider = i, o.qodeOnWindowLoad = t, e(document).ready(t)
}(jQuery)),
(function (e) {
  'use strict';

  function t () {
    i()
  }

  function i () {
    function t (e, t, i) {
      var o = h(e.eventsWrapper),
        n = Number(e.timelineWrapper.css('width').replace('px', ''));
      i === 'next' ? a(e, o - n + v, n - t) : a(e, o + n - v)
    }

    function i (e, t, i) {
      var a = e.eventsContent.find('.selected');
      if ((i === 'next' ? a.next() : a.prev()).length > 0) {
        var n = e.eventsWrapper.find('.selected'),
          r = i === 'next' ? n.parent('li').next('li')
.children('a') : n.parent('li').prev('li')
.children('a');
        s(r, e.fillingLine, t), l(r, e.eventsContent), r.addClass('selected'), n.removeClass('selected'), c(r), o(i, r, e)
      }
    }

    function o (e, t, i) {
      var o = window.getComputedStyle(t.get(0), null),
        n = Number(o.getPropertyValue('left').replace('px', '')),
        s = Number(i.timelineWrapper.css('width').replace('px', '')),
        r = Number(i.eventsWrapper.css('width').replace('px', '')),
        d = h(i.eventsWrapper);
      (e === 'next' && n > s - d || e == 'prev' && n < -d) && a(i, s / 2 - n, s - r)
    }

    function a (e, t, i) {
      var o = e.eventsWrapper.get(0);
      t = t > 0 ? 0 : t, t = void 0 !== i && t < i ? i : t, _(o, 'translateX', t + 'px'), t === 0 ? e.timelineNavigation.find('.qode-prev').addClass('inactive') : e.timelineNavigation.find('.qode-prev').removeClass('inactive'), t === i ? e.timelineNavigation.find('.qode-next').addClass('inactive') : e.timelineNavigation.find('.qode-next').removeClass('inactive')
    }

    function n (e) {
      e.timelineNavigation.find('.qode-prev').addClass('inactive'), e.timelineNavigation.find('.qode-next').addClass('inactive')
    }

    function s (e, t, i) {
      var o = window.getComputedStyle(e.get(0), null),
        a = o.getPropertyValue('left'),
        n = o.getPropertyValue('width');
      a = Number(a.replace('px', '')) + Number(n.replace('px', '')) / 2;
      var s = a / i;
      _(t.get(0), 'scaleX', s)
    }

    function r (e, t, i) {
      for (var o = !1, a = 0; a < e.timelineDates.length; a++) {
        var s = f(e.timelineDates[0], e.timelineDates[a]),
          r = Math.round(s / e.eventsMinLapse) + 1;
        e.timelineEvents.eq(a).css('left', r * t - 24 + 'px'), o = r * t < i.outerWidth() - 80
      }
      if (o) {
        n(e);
        for (var d = (i.outerWidth() - 80 - 24 * (e.timelineDates.length - 1)) / (e.timelineDates.length + 1), a = 0; a < e.timelineDates.length; a++) {
e.timelineEvents.eq(a).css('left', (a + 1) * d + 'px')
}
      }
    }

    function d (e, t, i) {
      var a = f(e.timelineDates[0], e.timelineDates[e.timelineDates.length - 1]),
        n = a / e.eventsMinLapse,
        n = Math.round(n) + 2,
        r = n * t;

return r < i.outerWidth() - 80 && (r = i.outerWidth() - 80), e.eventsWrapper.css('width', r + 'px'), s(e.eventsWrapper.find('a.selected'), e.fillingLine, r), o('next', e.eventsWrapper.find('a.selected'), e), r
    }

    function l (e, t) {
      var i = e.data('date'),
        o = t.find('.selected'),
        a = t.find('[data-date="' + i + '"]'),
        n = a.height();
      if (a.index() > o.index()) {
var s = 'selected qode-enter-right',
        r = 'qode-leave-left';
} else {
var s = 'selected qode-enter-left',
        r = 'qode-leave-right';
}
      a.attr('class', s), o.attr('class', r).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        o.removeClass('qode-leave-right qode-leave-left'), a.removeClass('qode-enter-left qode-enter-right')
      }), t.css('height', n + 'px')
    }

    function c (e) {
      e.parent('li').prevAll('li')
.children('a')
.addClass('older-event')
.end()
.end()
.nextAll('li')
.children('a')
.removeClass('older-event')
    }

    function h (e) {
      var t = window.getComputedStyle(e.get(0), null),
        i = t.getPropertyValue('-webkit-transform') || t.getPropertyValue('-moz-transform') || t.getPropertyValue('-ms-transform') || t.getPropertyValue('-o-transform') || t.getPropertyValue('transform');
      if (i.indexOf('(') >= 0) {
        var i = i.split('(')[1];
        i = i.split(')')[0], i = i.split(',');
        var o = i[4]
      } else {
var o = 0;
}

return Number(o)
    }

    function _ (e, t, i) {
      e.style['-webkit-transform'] = t + '(' + i + ')', e.style['-moz-transform'] = t + '(' + i + ')', e.style['-ms-transform'] = t + '(' + i + ')', e.style['-o-transform'] = t + '(' + i + ')', e.style.transform = t + '(' + i + ')'
    }

    function u (t) {
      var i = [];

return t.each(function () {
        var t = e(this),
          o = t.data('date').split('T');
        if (o.length > 1) {
var a = o[0].split('/'),
          n = o[1].split(':');
} else if (o[0].indexOf(':') >= 0) {
var a = ['2000', '0', '0', ],
          n = o[0].split(':');
} else {
var a = o[0].split('/'),
          n = ['0', '0', ];
}
        var s = new Date(a[2], a[1] - 1, a[0], n[0], n[1]);
        i.push(s)
      }), i
    }

    function f (e, t) {
      return Math.round(t - e)
    }

    function p (e) {
      for (var t = [], i = 1; i < e.length; i++) {
        var o = f(e[i - 1], e[i]);
        t.push(o)
      }

return Math.min.apply(null, t)
    }

    function g (e) {
      for (var t = e.offsetTop, i = e.offsetLeft, o = e.offsetWidth, a = e.offsetHeight; e.offsetParent;) {
e = e.offsetParent, t += e.offsetTop, i += e.offsetLeft;
}

return t < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && t + a > window.pageYOffset && i + o > window.pageXOffset
    }

    function m () {
      return window.getComputedStyle(document.querySelector('.qode-horizontal-timeline'), '::before').getPropertyValue('content')
.replace(/'/g, '')
.replace(/"/g, '')
    }
    var $ = e('.qode-horizontal-timeline'),
      v = 120;
    qode.windowWidth > 680 && qode.windowWidth <= 1024 ? v = 60 : qode.windowWidth < 680 && (v = 105), $.length && $.each(function () {
      var o = e(this),
        a = {};
      a.timelineWrapper = o.find('.qode-events-wrapper'), a.eventsWrapper = a.timelineWrapper.children('.qode-events'), a.fillingLine = a.eventsWrapper.children('.qode-filling-line'), a.timelineEvents = a.eventsWrapper.find('a'), a.timelineDates = u(a.timelineEvents), a.eventsMinLapse = p(a.timelineDates), a.timelineNavigation = o.find('.qode-timeline-navigation'), a.eventsContent = o.children('.qode-events-content'), a.eventsWrapper.find('ol li:first-child a').addClass('selected'), a.eventsContent.find('ol li:first-child').addClass('selected'), r(a, v, o);
      var n = d(a, v, o);
      o.addClass('loaded'), a.timelineNavigation.on('click', '.qode-next', function (e) {
        e.preventDefault(), t(a, n, 'next')
      }), a.timelineNavigation.on('click', '.qode-prev', function (e) {
        e.preventDefault(), t(a, n, 'prev')
      }), a.eventsWrapper.on('click', 'a', function (t) {
        t.preventDefault(), a.timelineEvents.removeClass('selected'), e(this).addClass('selected'), c(e(this)), s(e(this), a.fillingLine, n), l(e(this), a.eventsContent)
      }), a.eventsContent.on('swipeleft', function () {
        m() == 'mobile' && i(a, n, 'next')
      }), a.eventsContent.on('swiperight', function () {
        m() == 'mobile' && i(a, n, 'prev')
      }), e(document).keyup(function (e) {
        e.which === '37' && g(o.get(0)) ? i(a, n, 'prev') : e.which === '39' && g(o.get(0)) && i(a, n, 'next')
      })
    })
  }
  var o = {};
  qode.modules.timeline = o, o.qodeInitHorizontalTimeline = i, o.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery)),
(function (e) {
  'use strict';

  function t () {
    i()
  }

  function i () {
    o()
  }

  function o () {
    var t = e('.qode-irc-holder');
    t.length && t.each(function () {
      var t, i = e(this),
        o = i.find('.irc-range-slider');
      i.data('rate') != '' && (t = parseFloat(i.data('rate'))), o.rangeslider({
        polyfill: !1,
        onInit: function (e, o) {
          if (i.data('active-color') != '') {
            var n = i.data('active-color');
            i.find('.rangeslider__fill').css('background-color', n), i.find('.rangeslider__handle').css('background-color', n)
          }
          a(i, t)
        },
        onSlide: function (e, o) {
          a(i, t)
        },
      })
    })
  }

  function a (e, t) {
    var i, o, a, n, s, r = e.find('.irc-range-slider-loan'),
      d = e.find('.irc-range-slider-period'),
      l = e.find('.qode-irc-borrow-row .qode-irc-value'),
      c = e.find('.qode-irc-interest-row .qode-irc-value'),
      h = e.find('.qode-irc-total-row .qode-irc-value'),
      _ = e.find('.qode-irc-slider-loan-value.irc-current .irc-current-value'),
      u = e.find('.qode-irc-slider-period-value.irc-current .irc-current-value');
    i = parseFloat(r.val()), o = parseFloat(d.val()), a = i * t / 100, s = i + a, o != 0 && (n = s / o), l.html(Math.round(100 * n) / 100), c.html(Math.round(100 * a) / 100), h.html(Math.round(100 * s) / 100), _.html(i), u.html(o)
  }
  var n = {};
  qode.modules.interestRateCalculator = n, n.qodeInitInterestRateCalculator = i, n.qodeOnWindowLoad = t, e(document).ready(t)
}(jQuery)),
(function (e) {
  'use strict';

  function t () {
    i()
  }

  function i () {
    var t = e('#qode-multi-device-showcase');
    if (t.length) {
      var i = t.height(),
        o = t.offset().top,
        a = i - o,
        n = e('#qode-mds-laptop-slider'),
        s = n.find('.qode-mds-slide'),
        r = e('#qode-mds-tablet-slider'),
        d = r.find('.qode-mds-slide'),
        l = e('#qode-mds-phone-slider'),
        c = l.find('.qode-mds-slide'),
        h = e('#qode-mds-spinner'),
        _ = !1,
        u = !1,
        f = !1,
        p = function () {
          var e = $window_height - t.offset().top;
          t.css('height', e)
        },
        g = function (t) {
          t.find('.qode-mds-slides-inner').each(function () {
            var t = e(this),
              i = Math.round(t.parent().height() - 1),
              o = Math.round(t.parent().width() - 1);
            t.css({
              height: i,
              width: o,
            })
          })
        },
        m = function (t, i, o, a) {
          t.first().addClass('qode-active qode-mds-no-animation'), _ || a != o || (_ = !0, e(document).trigger('qodeMDSSlidePrepped'))
        },
        $ = function (e) {
          e.filter('.qode-active').next()
.index() > 0 ? (e.removeClass('qode-remove qode-mds-no-animation'), e.filter('.qode-active').removeClass('qode-active')
.addClass('qode-remove'), e.filter('.qode-remove').next()
.addClass('qode-active')) : (e.removeClass('qode-active qode-remove qode-mds-no-animation'), e.last().addClass('qode-remove'), e.first().addClass('qode-active'))
        },
        v = function () {
          var i = n.add(r).add(l),
            o = i.length,
            a = t.data('start-delay'),
            h = t.data('slide-interval');
          i.each(function (t) {
            var i = e(this),
              a = i.find('.qode-mds-slide');
            a.length;
            m(a, 0, o, t + 1)
          }), qodeRequestAnimationFrame(), t.addClass('qode-mds-animating');
          var _ = function () {
            r.is(':visible') && l.is(':visible') ? ($(s), n.one(qode.animationEnd, function () {
              $(d), r.one(qode.animationEnd, function () {
                $(c), l.one(qode.animationEnd, function () {
                  setTimeout(function () {
                    requestAnimFrame(_)
                  }, h)
                })
              })
            })) : ($(s), n.one(qode.animationEnd, function () {
              setTimeout(function () {
                requestAnimFrame(_)
              }, h)
            }))
          };
          setTimeout(function () {
            _()
          }, a)
        },
        j = function () {
          if (t.hasClass('qode-mds-appear-effect') && !e('html').hasClass('touch')) {
            var i = t.find('.qode-mds-device-holder'),
              o = t.find('.qode-mds-content-holder');
            t.addClass('qode-mds-loading'), h.fadeOut(300, function () {
              i.addClass('qode-show-device'), t.one(qode.transitionEnd, function () {
                o.addClass('qode-show-item'), o.last().one(qode.transitionEnd, function () {
                  f || (f = !0, e(document).trigger('qodeMDSReadyToScroll'))
                })
              })
            })
          } else {
h.fadeOut(300), f || (f = !0, e(document).trigger('qodeMDSReadyToScroll'))
}
        },
        w = function () {
          u || (u = !0, e('.qode-demos-filter-holder').length && e('.qode-demos-filter-holder').css('visibility', 'visible'))
        },
        b = function () {
          i = t.height(), o = t.offset().top, a = i - o
        };
      !(function () {
        if (t.hasClass('qode-mds-one-scroll-to-content') && !e('html').hasClass('touch')) {
          var i = !1,
            n = !1,
            s = !1,
            r = !0,
            d = !1,
            l = function () {
              e(window).scrollTop() < a && (r = !1);
              var t = function () {
                w(), n = !0, e('html, body').stop(!0)
.animate({
                  scrollTop: a,
                }, 1e3, 'easeInOutQuint', function () {
                  d = !0, d && e(window).scrollTop(a), e(window).scroll(function () {
                    d && e(window).scrollTop(a)
                  }), r = !0, s = !1, setTimeout(function () {
                    n = !1, d = !1, e(document).trigger('qodeMDSScrolled')
                  }, 200)
                })
              };
              e(window).scroll(function () {
                $scroll < a && (s = !0, i && (r = !1))
              }), window.addEventListener('wheel', function (e) {
                if ($scroll < a) {
                  var o = e.deltaY;
                  i = o > 0, n || r ? (r || e.preventDefault(), r && !i && s && (n = !1, r = !1, e.preventDefault())) : i && (e.preventDefault(), t())
                }
                n && e.preventDefault()
              }), e(document).on('mousedown', function (i) {
                e(window).outerWidth() <= i.pageX && $scroll <= a && (i.preventDefault(), t())
              })
            };
          window.addEventListener('wheel', function (e) {
            f && u || e.preventDefault()
          }), window.addEventListener('scroll', function () {
            f && u || e(window).scrollTop(o)
          }), e(document).on('qodeMDSReadyToScroll', function () {
            l()
          })
        }
      }()),
      (function () {
        if (t.hasClass('qode-mds-btn-scroll-below')) {
          t.find('.qode-mds-button-holder .qbutton').on('click', function (t) {
            return t.preventDefault(), f && (w(), e('html, body').stop()
.animate({
              scrollTop: a,
            }, 1e3, 'easeInOutQuint', function () {
              e(document).trigger('qodeMDSScrolled')
            })), !1
          })
        }
      }()), t.imagesLoaded({
        background: !0,
      }, function () {
        p(), v()
      }), e(document).on('qodeMDSSlidePrepped', function () {
        j()
      }), e(window).load(function () {
        g(n)
      }), e(window).scroll(function () {
        b()
      }), e(window).resize(function () {
        p(), b(), g(n)
      })
    }
  }
  var o = {};
  qode.modules.multiDeviceShowcase = o, o.qodeInitMultiDeviceShowcase = i, o.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery)),
(function (e) {
  'use strict';
  e(document).ready(function () {})
}(jQuery));
