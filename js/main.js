$(document).ready(function(){

    /* slick
    $('.img_slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });
     */

    /* fade */
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop() + $(this).height() * 2/3; 
        const scrollTop = $(this).scrollTop(); 

        $('.fade').each(function () {
            if (scrollY > $(this).offset().top) {
            $(this).addClass('on');
            } else { 
            $(this).removeClass('on');
            }
        });

        // 텍스트 한글자씩 처리하기 위해 h1.logo에 .on 제어
        if (scrollTop >= 0 && scrollTop <= $(this).height()) $('.logo').addClass('on');
        else $('.logo').removeClass('on');
    });
    $(window).trigger('scroll');

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
        },
        click: function (e) {
            e.preventDefault();
            $('#header .toggle').removeClass('active').next().removeClass('active');
            const $tg =  $($(this).attr('href'));
            $('html, body').stop().animate({scrollTop: $tg.offset().top});
        }
    });

    // 텍스트 한글자씩 처리
    const $logo = $('.logo');
    let wordArray = $logo.html().split(' ');
    // console.log(wordArray);
    let tagWrite = '';
    for (let i = 0; i < wordArray.length; i++) {
      $logo.html(''); //기존 태그 우선 지우기
      if (wordArray[i] === '<br>') {
        tagWrite += '<br>';
       } else {
        let spanArray = wordArray[i].split(''); //한글자씩 잘라서 배열에 저장
        // console.log(spanArray);
        // 반복문을 통해 각 div 부모 안에 막내 자식으로 span 동적생성
        tagWrite += '<div class="word">';
        for (let j = 0; j < spanArray.length; j++) {
          tagWrite += `<span class="up">${spanArray[j]}</span>`;
        }
        tagWrite += '</div>';
      }
      $logo.append(tagWrite);
    }

    // delay 시간 지정
    $('.logo .word .up').each(function (idx) {
        $(this).css('animationDelay', (idx * 0.04) + 0.4 + 's');
    });

});  