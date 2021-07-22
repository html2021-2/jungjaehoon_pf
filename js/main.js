$(document).ready(function(){

    /* slick */
    $('.img_slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });
    
    /* fade */
    $(window).on('scroll', function () {
    const scrollY = $(this).scrollTop() + $(this).height() * 2/3; 

        $('.fade').each(function () {
            if (scrollY > $(this).offset().top) {
            $(this).addClass('on');
            } else { 
            $(this).removeClass('on');
            }
        });
    });

    // 메뉴 열기
    $('#header .toggle').on('click', function () {
        $(this).toggleClass('active').next().toggleClass('active');

        $('#header .toggle').on('keydown', function (e) {
            if (e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                $("#gnb ul li:last a").focus();
            }
        });
        $("#gnb ul li:last a").on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                $('#header .toggle').focus();
            }
        });
   });

    
    $("#gnb ul li a").on({
        'mouseenter focus': function () {
            const bgNum = $(this).parent().index();
            $('#header .gnb_bg').addClass('bg'+bgNum);
        },
        'mouseleave blur': function () {
            $('#header .gnb_bg').removeClass('bg0 bg1 bg2 bg3');
        }
    });
/*  
    $('.toggle').click(function() {
        $(this).toggleClass("active");
    $('.gnb_bg').toggleClass("active");
    });

    const all = $("#gnb ul li a")
    const home = $("#gnb .menu1 a")
    const project = $("#gnb .menu2 a")
    const about = $("#gnb .menu3 a")
    const contact = $("#gnb .menu4 a")
    const bg = $(".gnb_bg")

    all.click(function(){
        $(bg).removeClass("active");
        $('.toggle').removeClass("active");
    });

    스크립트에서 css()메서드를 사용하는 대신 클래스명을 추가합니다
    home.mouseover(function(){
        $(bg).css("background","#233067")
    });
    home.mouseout(function(){
        $(bg).css("background","#000")
    });
    project.mouseover(function(){
        $(bg).css("background","#2f4f4f")
    });
    project.mouseout(function(){
        $(bg).css("background","#000")
    });
    about.mouseover(function(){
        $(bg).css("background","#6f4f28")
    });
    about.mouseout(function(){
        $(bg).css("background","#000")
    });
    contact.mouseover(function(){
        $(bg).css("background","#723838")
    });
    contact.mouseout(function(){
        $(bg).css("background","#000")
    }); */
      


});    
    