
$(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('burger_active');
    });
    $('.burger').click(function(){
        $('.menu_ul').toggleClass('active');
    });
    $('.menu_ul li').click(function(){
        $('.menu_ul').removeClass('active');
        $('.burger').removeClass('burger_active');
    });
    $('.dropdowm').click(function(){
        $('.for-up').toggleClass('active');
        $('.drop-inner').toggleClass('active');
    });
    $('.phone').click(function(){
        $('.modul2').toggleClass('active');
    });
    $('.x').click(function(){
        $('.modul2').toggleClass('active');
    });
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("nav").addClass("active");
        $(".header-info").addClass("active");
    }
    else{
        $("nav").removeClass("active");
        $(".header-info").removeClass("active");
    }
});
