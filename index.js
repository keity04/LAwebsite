window.onload = function () {
    fade_effect();

    $(window).scroll(function () {
        fade_effect();
    });

    function fade_effect() {
        $('.fade').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).addClass('view');
            }
        });
    }
};