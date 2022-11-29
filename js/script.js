$(document).ready(function () {

    $('.footer__btn').bind('click', function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });


    var header = $("#header"),
        introH = $("#banner").innerHeight()
    scrollOffset = $(window).scrollTop();


    /*fixed header*/
    chekScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        chekScroll(scrollOffset);
    });
    function chekScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    const burgerNav = $("#burger__nav")
    const burgerClose = $("#burger__close")


    const burgerBtn = $("#header__burger").click(function () {
        event.preventDefault();

        $("#burger__nav").addClass("burger__nav-active");
      
    });


     burgerClose.click(function () {
        event.preventDefault();
        $("#burger__nav").removeClass("burger__nav-active");
     }) 






});

