(function ($) {
    $(function () {
        // console.log(location.hash);
        let selected_bag = location.href.match(/selected_bag=(.*)/);

        if (selected_bag) {
            selected_bag = selected_bag[1];
            $('.filter__nav-link.active').removeClass('active');
            $(`.filter__nav-link.${selected_bag}`).addClass('active');
            if (document.documentElement.scrollTop < 400 && document.body.scrollTop < 400) {
                $('html, body').animate({ scrollTop: $('.filter__nav-link')[0].getBoundingClientRect().top },'75');
            }
        }

         $('.filter__nav-link').click(function () {
            $('.filter__nav-link.active').removeClass('active');
            $(this).addClass('active');
            // if (!(this.title.toLowerCase() === 'all')) {
            let url = new URL(location.href);
            url.searchParams.set('selected_bag', this.title.toLowerCase());
            location.href = url;

            // history.pushState("", document.title, window.location.pathname
            //                                        + window.location.search);

        });
    });
})(jQuery);