// 공지사항 슬라이더 넘기기
$('.notice_up').click(function(){
    $('.notice_area').animate({marginTop:"-51px"},300,function(){
        $('.notice_contents').first().appendTo('.notice_area');
        $('.notice_area').css('margin-top','0');
    })
})
$('.notice_dn').click(function(){
    $('.notice_contents').last().prependTo('.notice_area');
    $('.notice_area').css('margin-top','-51px');
    $('.notice_area').animate({marginTop:"0"},300)
})

function next (){
    $('.notice_area').animate({marginTop:"-51px"},300,function(){
        $('.notice_contents').first().appendTo('.notice_area');
        $('.notice_area').css('margin-top','0');
    });
}

setInterval(next,5000);










// 호버 메뉴
$('.header_bottom_left').mouseenter(function(){
    $('.main_menu').show();
})
$('.header_bottom_left').mouseleave(function(){
    $('.main_menu').hide();
})
$('.main_menu_ct').click(function(){
    $(this).addClass("menu_on");
    $(this).parent().siblings().children('a').removeClass('menu_on');
    $(this).nextAll().show();
    $(this).parent().siblings().children('a').nextAll().hide();
})












// 도서정보 리뷰 교환/반품 탭 고정시키기
$(window).scroll(function(){

    var h = $(document).scrollTop();
    
    if(h > 17400){
        $('.header').hide();
        $('.info_menu_bar').css("position","fixed");
        $('.info_menu_bar').css("top","0");
        $('.menu_tab').eq(0).removeClass("menu_tab_on");
        $('.menu_tab').eq(1).removeClass("menu_tab_on");
        $('.menu_tab').eq(2).addClass("menu_tab_on");
    }else if(h > 16000){
        $('.header').hide();
        $('.info_menu_bar').css("position","fixed");
        $('.info_menu_bar').css("top","0");
        $('.menu_tab').eq(0).removeClass("menu_tab_on");
        $('.menu_tab').eq(1).addClass("menu_tab_on");
        $('.menu_tab').eq(2).removeClass("menu_tab_on");
    }else if(h > 910){
        $('.header').hide();
        $('.info_menu_bar').css("position","fixed");
        $('.info_menu_bar').css("top","0");
        $('.menu_tab').eq(0).addClass("menu_tab_on");
        $('.menu_tab').eq(1).removeClass("menu_tab_on");
        $('.menu_tab').eq(2).removeClass("menu_tab_on");
    }else{
        $('.header').show();
        $('.info_menu_bar').css("position","relative");
    }
});










// 책 이미지 뒤집기 효과
$(function () {
    var isRotated = false;

    $(".book_img").click(function(){
        if(isRotated){
            // 처음 클릭해서 책표지 뒤집어진 후 한번더 클릭했을 떄
            $(this).css("transform","rotateY(35deg)");
            isRotated = false;
        }else{
            // 이미지에 마우스 들어간 후 처음 클릭했을 때
            $(this).css("transform","rotateY(180deg)");
            isRotated = true;
        }
    });

    $(".book_img").hover(
        // 마우스 들어갔을 때
        function(){
            if(!isRotated){
                $(this).css("transform", "rotateY(35deg)");
            }
        },
        // 마우스 다시 나왔을 때
        function(){
            if(!isRotated){
                $(this).css("transform", "rotateY(0deg)");
            }
        }
    );
});