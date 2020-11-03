

$(function() {

    /*---Fixed Header---*/

    let header = $("#header");
    let intro = $("#intro");
    let introH; //--С помощью этого метода узнаем высоту блока intro--
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle=$("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        introH = intro.innerHeight(); 
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });
header.addClass("fixed");

    function checkScroll(scrollPos, introH){
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*---Smooth Scroll---*/ 
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 1000);
    });


    //Nav Toggle

        $("#navToggle").on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    
    });



    //Slider : https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        dots: true
    });




});










