(function ($) {
    $(function () {
        //materialize activators
        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.dropdown-trigger').dropdown({hover: true});
        $('.fixed-action-btn').floatingActionButton();


        // button-to-top scripts
        var btn = $('#button-to-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });


        $('.slick-autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500,
            dots: true
        });

        $('.slick-autoplay-sponsor').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            pauseOnHover: false,
            // centerMode: true,
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space
