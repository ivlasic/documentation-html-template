(function($) {
    "use strict";

    /* ==============================================
    ANIMATION -->
    =============================================== */

    new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    }).init();

    /* ==============================================
    LIGHTBOX -->
    =============================================== */

    jQuery('a[data-gal]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: true,
        overlay_gallery: true,
        social_tools: false,
        deeplinking: false
    });

    /* ==============================================
    SCROLL -->
    =============================================== */

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* ==============================================
    SCROLLSPY -->
    =============================================== */

    $('body').scrollspy({
        target: '.docs-sidebar'
    });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })

    /* ==============================================
    VIDEO FIX -->
    =============================================== */

    $(document).ready(function() {
        // Target your .container, .wrapper, .post, etc.
        $(".media").fitVids();
    });


        /* ==============================================
        AFFIX FIX -->
        =============================================== */

    $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 120) {
        $('.docs-sidebar').addClass('affix');
    } else{
        $('.docs-sidebar').removeClass('affix');
    }
    });


})(jQuery);
