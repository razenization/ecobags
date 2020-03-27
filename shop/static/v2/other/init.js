(function ($) {
    $(function () {

        // button-to-top scripts
        var btn = $('#button-to-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() < 800) {
                btn.css("opacity", 0);
                btn.css("visibility", "hidden");
            } else {
                btn.css("opacity", 1);
                btn.css("visibility", "visible");
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });

        $('#order__form').submit(function (e) {
            $('#comment__holder').val($('#comment__input').val());
            let shownOrders = $('.products__item').filter(function () {
                return $(this).css('display') === 'block';
            });
            $.each(shownOrders, function () {
                // console.log(this);
                let currentType = $(this).find('.products__item-type');
                let currentColor = $(this).find('.products__item-color');
                let currentSize = $(this).find('.products__item-size');
                let currentPaint = $(this).find('.products__item-print');

                $('#order__holder').val(function (i, val) {
                    return val + `${currentType.text() + currentColor.text().replace(')', '').replace('(', '') + ' ' + currentSize.text() + ' ' + currentPaint.text()}, `;
                });
            });
            if ($('#order__holder').val()) {
                return true;
            } else {
                if (!$('.alert-empty').length) {
                    $('.input-field').prepend('<p class="alert-empty" style="color: red; margin-bottom: 5px;">You cannot send blank order.</p>')
                }
                return false;
            }
        });

        // $('.order__comment').oninput = function () {
        //     $('#comment__holder').val();
        // };

        // function initializeMap() {
        //     var myLatlng = new google.maps.LatLng(-34.397, 150.644);
        //     var myOptions = {
        //         zoom: 8,
        //         center: myLatlng,
        //         mapTypeId: google.maps.MapTypeId.ROADMAP
        //     };
        //     var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        //
        //     var marker = new google.maps.Marker({
        //         position: myLatlng,
        //         map: map,
        //         title: "Hello World!"
        //     });
        // }

        $('.slick-autoplay-sponsor').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            pauseOnHover: false,
            infinite: true,
            // centerMode: true,
        });

        $('.slick-autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });
        
    }); // end of document ready
})(jQuery); // end of jQuery name space