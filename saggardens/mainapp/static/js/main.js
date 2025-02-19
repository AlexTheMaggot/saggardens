/* =======================================================================================
    Template : Agroly
    Create :   Sept. 5th 2020
   ========================================================================================== */


/* ===============================================
    Function Call - Call Function Ones
   =============================================== */

   jQuery(document).ready(function () {
       "use strict";

       // here all ready functions

       loader();
       scroll_top();
       magnific_popup();
       accordion();

   });

/* ===============================================
    1. PRELOADER
   =============================================== */
function loader() {
    "use strict";
    setTimeout(function () {
        $('#loader-wrapper').fadeOut();
    }, 1500);
};

/* ===============================================
    2. SCROLL TOP
   =============================================== */
function scroll_top() {
    "use strict";
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

};

/* ===============================================
    3. COUNTER
   =============================================== */
   $('.counter').each(function () {
       var $this = $(this),
           countTo = $this.attr('data-count');
       $({
           countNum: $this.text()
       }).animate({
               countNum: countTo
           },

           {
               duration: 8000,
               easing: 'linear',
               step: function () {
                   $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                   $this.text(this.countNum);
                   //alert('finished');
               }

           });
   });

/* ===============================================
    4. TEAM CAROUSEL
   =============================================== */
   $('.testimonials-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.testimonials-carousel .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           576: {
               items: 2
           },
           1200: {
               items: 3
           }
       }
   });

/* ===============================================
    5. CLIENTS CAROUSEL
   =============================================== */
   $('.clients-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.clients-carousel .custom-nav',
       responsive: {
           0: {
               items: 2
           },
           576 : {
               items: 3
           },
           767 : {
            items: 4
           },
           1200: {
               items: 5
           }
       }
   });

/* ===============================================
    6. GALLERY CAROUSEL
   =============================================== */
   $('.wide-slider-layer .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.wide-slider-layer .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    7. GALLERY CAROUSEL
   =============================================== */
   $('.wide-slider-layer-alt-2 .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.wide-slider-layer-alt-2 .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    8. GALLERY CAROUSEL
   =============================================== */
   $('.testimonial-carousel-alt .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: true,
       margin: 0,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.testimonial-carousel-alt .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   });

/* ===============================================
    9. NEWS CAROUSEL
   =============================================== */
   $('.news-carousel .owl-carousel').owlCarousel({
       stagePadding: 0,
       loop: true,
       dots: false,
       margin: 10,
       nav: true,
       navText: [
           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
           '<i class="fa fa-angle-right" aria-hidden="true"></i>'
       ],
       navContainer: '.news-carousel .custom-nav',
       responsive: {
           0: {
               items: 1
           },
           767: {
               items: 1
           },
           1000: {
               items: 3
           }
       }
   });

/* ===============================================
    10. TEAM CAROUSEL
   =============================================== */
    $('.team-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.team-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

/* ===============================================
    11. parallax-carousel
   =============================================== */
    $('.parallax-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: true,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.parallax-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

/* ===============================================
    12. ag-carousel
   =============================================== */
    $('.ag-carousel .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        navContainer: '.ag-carousel .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

/* ===============================================
    13. CUSTOM CAROUSEL
   =============================================== */
    $('.custom-carousel2 .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        navContainer: '.custom-carousel2 .custom-nav',
        responsive: {
            200: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

/* ===============================================
    14. MAGNIFIC POPUP GALLERY
   =============================================== */
    function magnific_popup() {
        $('.image-popup-vertical-fit_1').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

/* ===============================================
    15. YOUTUBE POPUP
   =============================================== */
   function video_popup() {
       var $btnLoadMore = $(
           '<div class="btn-wrapper text-center"><a href="#" class="btn load-more">Load More</a></div>'
       );
       var items = $(".youtube-popup[data-listnum]");
       var count = items.length;
       var slice = 2;
       var current = 0;

       if (items.length > slice) {
           //bind load more event
           $btnLoadMore.on("click", function (e) {
               e.preventDefault();
               loadMoreNews();
           });
           //append load more button
           items.closest(".salvattore-grid").after($btnLoadMore);
       }

       function getItem(listnum) {
           return items
               .filter(function (index) {
                   if ($(this).attr("data-listnum") == listnum) {
                       return true;
                   }
               });
       }

       function loadMoreNews() {
           var end = current + slice;
           if (end >= count) {
               end = count;
               $btnLoadMore.hide();
           }
           while (current < end) {
               var listnum = current + 1; //data-listnum : 1-based
               var item = getItem(listnum);
               if (item) {
                   item.fadeIn();
               }
               current++;
           }
       }

       //youtube popup
       $(".popup-youtube").magnificPopup({
           type: "iframe",
           removalDelay: 160,
           preloader: false,
           fixedContentPos: false,
           iframe: {
               markup: '<div class="mfp-iframe-scaler">' +
                   '<div class="mfp-close"></div>' +
                   '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                   "</div>",
               patterns: {
                   youtube: {
                       index: "youtube.com/",
                       id: "v=",
                       src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0"
                   }
               },
               srcAction: "iframe_src"
           }
       });

       //init load
       loadMoreNews();
   };

/* ===============================================
    16. FILTER GALLERY
   =============================================== */
   $(function () {
       var $margin = $("#kehl-grid").isotope({
           itemSelector: ".grid-box",
           // Different transition duration
           transitionDuration: "0.5s"
       });

       // on filter button click
       $(".filter-container li").click(function (e) {
           var $this = $(this);

           // Prevent default behaviour
           e.preventDefault();
           $('.filter li').removeClass('active');
           $this.addClass('active');

           // Get the filter data attribute from the button
           var $filter = $this.attr("data-filter");

           // filter
           $margin.isotope({
               filter: $filter
           });
       });
   });

/* ===============================================
    17. MASONRY GALLERY
   =============================================== */
    var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-box',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    }); 
    });

/* ===============================================
    18. FAQ ACCORDION
   =============================================== */
   function accordion() {};
   $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

   $('.accordion a').click(function (j) {
       var dropDown = $(this).closest('li').find('p');

       $(this).closest('.accordion').find('p').not(dropDown).slideUp();

       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
       } else {
           $(this).closest('.accordion').find('a.active').removeClass('active');
           $(this).addClass('active');
       }

       dropDown.stop(false, true).slideToggle();

       j.preventDefault();
   });
   (jQuery)

  /* ===============================================
    19. ANIMATION
   =============================================== */
    AOS.init({
        duration: 1200,
    })

  /* ===============================================
    20. VIDEO POPUP
   =============================================== */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /* ===============================================
    21. CONTACT FORM
    =============================================== */
"use strict";
$(function () {

    $('#contact-form').validator();

});


"use strict";
+function ($) {

  // VALIDATOR CLASS DEFINITION
  // ==========================

  function getValue($el) {
    return $el.is('[type="checkbox"]') ? $el.prop('checked')                                     :
           $el.is('[type="radio"]')    ? !!$('[name="' + $el.attr('name') + '"]:checked').length :
                                         $el.val()
  }

  var Validator = function (element, options) {
    this.options    = options
    this.validators = $.extend({}, Validator.VALIDATORS, options.custom)
    this.$element   = $(element)
    this.$btn       = $('button[type="submit"], input[type="submit"]')
                        .filter('[form="' + this.$element.attr('id') + '"]')
                        .add(this.$element.find('input[type="submit"], button[type="submit"]'))

    this.update()

    this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this))
    this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this))
    this.$element.on('reset.bs.validator', $.proxy(this.reset, this))

    this.$element.find('[data-match]').each(function () {
      var $this  = $(this)
      var target = $this.data('match')

      $(target).on('input.bs.validator', function (e) {
        getValue($this) && $this.trigger('input.bs.validator')
      })
    })

    this.$inputs.filter(function () { return getValue($(this)) }).trigger('focusout')

    this.$element.attr('novalidate', true) // disable automatic native validation
    this.toggleSubmit()
  }

  Validator.VERSION = '0.11.5'

  Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)'

  Validator.FOCUS_OFFSET = 20

  Validator.DEFAULTS = {
    delay: 500,
    html: false,
    disable: true,
    focus: true,
    custom: {},
    errors: {
      match: 'Does not match',
      minlength: 'Not long enough'
    },
    feedback: {
      success: 'glyphicon-ok',
      error: 'glyphicon-remove'
    }
  }

  Validator.VALIDATORS = {
    'native': function ($el) {
      var el = $el[0]
      if (el.checkValidity) {
        return !el.checkValidity() && !el.validity.valid && (el.validationMessage || "error!")
      }
    },
    'match': function ($el) {
      var target = $el.data('match')
      return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match
    },
    'minlength': function ($el) {
      var minlength = $el.data('minlength')
      return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength
    }
  }

  Validator.prototype.update = function () {
    this.$inputs = this.$element.find(Validator.INPUT_SELECTOR)
      .add(this.$element.find('[data-validate="true"]'))
      .not(this.$element.find('[data-validate="false"]'))

    return this
  }

  Validator.prototype.onInput = function (e) {
    var self        = this
    var $el         = $(e.target)
    var deferErrors = e.type !== 'focusout'

    if (!this.$inputs.is($el)) return

    this.validateInput($el, deferErrors).done(function () {
      self.toggleSubmit()
    })
  }

  Validator.prototype.validateInput = function ($el, deferErrors) {
    var value      = getValue($el)
    var prevErrors = $el.data('bs.validator.errors')
    var errors

    if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]')

    var e = $.Event('validate.bs.validator', {relatedTarget: $el[0]})
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    var self = this

    return this.runValidators($el).done(function (errors) {
      $el.data('bs.validator.errors', errors)

      errors.length
        ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el)
        : self.clearErrors($el)

      if (!prevErrors || errors.toString() !== prevErrors.toString()) {
        e = errors.length
          ? $.Event('invalid.bs.validator', {relatedTarget: $el[0], detail: errors})
          : $.Event('valid.bs.validator', {relatedTarget: $el[0], detail: prevErrors})

        self.$element.trigger(e)
      }

      self.toggleSubmit()

      self.$element.trigger($.Event('validated.bs.validator', {relatedTarget: $el[0]}))
    })
  }


  Validator.prototype.runValidators = function ($el) {
    var errors   = []
    var deferred = $.Deferred()

    $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject()
    $el.data('bs.validator.deferred', deferred)

    function getValidatorSpecificError(key) {
      return $el.data(key + '-error')
    }

    function getValidityStateError() {
      var validity = $el[0].validity
      return validity.typeMismatch    ? $el.data('type-error')
           : validity.patternMismatch ? $el.data('pattern-error')
           : validity.stepMismatch    ? $el.data('step-error')
           : validity.rangeOverflow   ? $el.data('max-error')
           : validity.rangeUnderflow  ? $el.data('min-error')
           : validity.valueMissing    ? $el.data('required-error')
           :                            null
    }

    function getGenericError() {
      return $el.data('error')
    }

    function getErrorMessage(key) {
      return getValidatorSpecificError(key)
          || getValidityStateError()
          || getGenericError()
    }

    $.each(this.validators, $.proxy(function (key, validator) {
      var error = null
      if ((getValue($el) || $el.attr('required')) &&
          ($el.data(key) || key == 'native') &&
          (error = validator.call(this, $el))) {
         error = getErrorMessage(key) || error
        !~errors.indexOf(error) && errors.push(error)
      }
    }, this))

    if (!errors.length && getValue($el) && $el.data('remote')) {
      this.defer($el, function () {
        var data = {}
        data[$el.attr('name')] = getValue($el)
        $.get($el.data('remote'), data)
          .fail(function (jqXHR, textStatus, error) { errors.push(getErrorMessage('remote') || error) })
          .always(function () { deferred.resolve(errors)})
      })
    } else deferred.resolve(errors)

    return deferred.promise()
  }

  Validator.prototype.validate = function () {
    var self = this

    $.when(this.$inputs.map(function (el) {
      return self.validateInput($(this), false)
    })).then(function () {
      self.toggleSubmit()
      self.focusError()
    })

    return this
  }

  Validator.prototype.focusError = function () {
    if (!this.options.focus) return

    var $input = this.$element.find(".has-error:first :input")
    if ($input.length === 0) return

    $('html, body').animate({scrollTop: $input.offset().top - Validator.FOCUS_OFFSET}, 250)
    $input.focus()
  }

  Validator.prototype.showErrors = function ($el) {
    var method = this.options.html ? 'html' : 'text'
    var errors = $el.data('bs.validator.errors')
    var $group = $el.closest('.form-group')
    var $block = $group.find('.help-block.with-errors')
    var $feedback = $group.find('.form-control-feedback')

    if (!errors.length) return

    errors = $('<ul/>')
      .addClass('list-unstyled')
      .append($.map(errors, function (error) { return $('<li/>')[method](error) }))

    $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html())
    $block.empty().append(errors)
    $group.addClass('has-error has-danger')

    $group.hasClass('has-feedback')
      && $feedback.removeClass(this.options.feedback.success)
      && $feedback.addClass(this.options.feedback.error)
      && $group.removeClass('has-success')
  }

  Validator.prototype.clearErrors = function ($el) {
    var $group = $el.closest('.form-group')
    var $block = $group.find('.help-block.with-errors')
    var $feedback = $group.find('.form-control-feedback')

    $block.html($block.data('bs.validator.originalContent'))
    $group.removeClass('has-error has-danger has-success')

    $group.hasClass('has-feedback')
      && $feedback.removeClass(this.options.feedback.error)
      && $feedback.removeClass(this.options.feedback.success)
      && getValue($el)
      && $feedback.addClass(this.options.feedback.success)
      && $group.addClass('has-success')
  }

  Validator.prototype.hasErrors = function () {
    function fieldErrors() {
      return !!($(this).data('bs.validator.errors') || []).length
    }

    return !!this.$inputs.filter(fieldErrors).length
  }

  Validator.prototype.isIncomplete = function () {
    function fieldIncomplete() {
      var value = getValue($(this))
      return !(typeof value == "string" ? $.trim(value) : value)
    }

    return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length
  }

  Validator.prototype.onSubmit = function (e) {
    this.validate()
    if (this.isIncomplete() || this.hasErrors()) e.preventDefault()
  }

  Validator.prototype.toggleSubmit = function () {
    if (!this.options.disable) return
    this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors())
  }

  Validator.prototype.defer = function ($el, callback) {
    callback = $.proxy(callback, this, $el)
    if (!this.options.delay) return callback()
    window.clearTimeout($el.data('bs.validator.timeout'))
    $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay))
  }

  Validator.prototype.reset = function () {
    this.$element.find('.form-control-feedback')
      .removeClass(this.options.feedback.error)
      .removeClass(this.options.feedback.success)

    this.$inputs
      .removeData(['bs.validator.errors', 'bs.validator.deferred'])
      .each(function () {
        var $this = $(this)
        var timeout = $this.data('bs.validator.timeout')
        window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout')
      })

    this.$element.find('.help-block.with-errors')
      .each(function () {
        var $this = $(this)
        var originalContent = $this.data('bs.validator.originalContent')

        $this
          .removeData('bs.validator.originalContent')
          .html(originalContent)
      })

    this.$btn.removeClass('disabled')

    this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success')

    return this
  }

  Validator.prototype.destroy = function () {
    this.reset()

    this.$element
      .removeAttr('novalidate')
      .removeData('bs.validator')
      .off('.bs.validator')

    this.$inputs
      .off('.bs.validator')

    this.options    = null
    this.validators = null
    this.$element   = null
    this.$btn       = null

    return this
  }

  // VALIDATOR PLUGIN DEFINITION
  // ===========================


  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var data    = $this.data('bs.validator')

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.validator', (data = new Validator(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.validator

  $.fn.validator             = Plugin
  $.fn.validator.Constructor = Validator


  // VALIDATOR NO CONFLICT
  // =====================

  $.fn.validator.noConflict = function () {
    $.fn.validator = old
    return this
  }


  // VALIDATOR DATA-API
  // ==================

  $(window).on('load', function () {
    $('form[data-toggle="validator"]').each(function () {
      var $form = $(this)
      Plugin.call($form, $form.data())
    })
    if (window.location.pathname.indexOf('/en/') !== -1) {
        let path, new_path;
        path = window.location.pathname;
        new_path = path.replace('/en/', '');
        $('#header_language_en').attr('href', path);
        $('#header_language_uzl').attr('href', '/uzl/' + new_path);
        $('#header_language_uzc').attr('href', '/uzc/' + new_path);
        $('#header_language_ru').attr('href', '/' + new_path);
    }
    else if (window.location.pathname.indexOf('/uzc/') !== -1) {
        let path, new_path;
        path = window.location.pathname;
        new_path = path.replace('/uzc/', '');
        $('#header_language_uzc').attr('href', path);
        $('#header_language_uzl').attr('href', '/uzl/' + new_path);
        $('#header_language_en').attr('href', '/en/' + new_path);
        $('#header_language_ru').attr('href', '/' + new_path);
    }
    else if (window.location.pathname.indexOf('/uzl/') !== -1) {
        let path, new_path;
        path = window.location.pathname;
        new_path = path.replace('/uzl/', '');
        $('#header_language_uzl').attr('href', path);
        $('#header_language_uzc').attr('href', '/uzc/' + new_path);
        $('#header_language_en').attr('href', '/en/' + new_path);
        $('#header_language_ru').attr('href', '/' + new_path);
    }
    else {
        let path;
        path = window.location.pathname;
        $('#header_language_ru').attr('href', path);
        $('#header_language_en').attr('href', '/en' + path);
        $('#header_language_uzc').attr('href', '/uzc' + path);
        $('#header_language_uzl').attr('href', '/uzl' + path);
    }
  })

}(jQuery);