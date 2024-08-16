// 메인 슬라이더 책 목록 가져오기
$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"소설", size:12},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<12;i++){
        var str = msg.documents[i].title;
        $('.slider_wrap>li>a').eq(i).append(
            `<div>
                <img src="${msg.documents[i].thumbnail}">
            </div>
            <h5>${msg.documents[i].title}</h5>
            <p>${msg.documents[i].authors}</p>`
        );
    }
})

// 메인 슬라이더 넘기기
$('.arrow_right').click(function(){
    $('.slider_wrap').animate({marginLeft:"-180px"},300,function(){
        $('.slider_wrap>li').first().appendTo('.slider_wrap');
        $('.slider_wrap').css('margin-left','0');
    })
})














// 이벤트 슬라이더 넘기기
$('.e_arrow_right').click(function(){
    $('.event_area').animate({marginLeft:"-300px"},300,function(){
        $('.event_contents').first().appendTo('.event_area');
        $('.event_area').css('margin-left','0');
    })
})
$('.e_arrow_left').click(function(){
    $('.event_contents').last().prependTo('.event_area');
    $('.event_area').css('margin-left','-300px');
    $('.event_area').animate({marginLeft:"0"},300)
})
















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

















// 베스트 책 목록 가져오기
$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"자기계발", size:7},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<7;i++){
        var str = msg.documents[i].title;
        $('.best_list_01>li>a').eq(i).append(
            `<img class="b_thumbnail" src="${msg.documents[i].thumbnail}">
            <div class="b_info">
                <P class="b_number">${i+1}</P>
                <div>
                    <p class="b_title">${msg.documents[i].title}</p>
                    <p class="b_author">${msg.documents[i].authors}</p>
                    <p class="b_price">${msg.documents[i].sale_price}원</p>
                </div>
            </div>`
        );
    }
})

$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"인문", size:7},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<7;i++){
        var str = msg.documents[i].title;
        $('.best_list_02>li>a').eq(i).append(
            `<img class="b_thumbnail" src="${msg.documents[i].thumbnail}">
            <div class="b_info">
                <P class="b_number">${i+1}</P>
                <div>
                    <p class="b_title">${msg.documents[i].title}</p>
                    <p class="b_author">${msg.documents[i].authors}</p>
                    <p class="b_price">${msg.documents[i].sale_price}원</p>
                </div>
            </div>`
        );
    }
})

$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"여행", size:8},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<8;i++){
        var str = msg.documents[i].title;
        $('.best_list_03>li>a').eq(i).append(
            `<img class="b_thumbnail" src="${msg.documents[i+1].thumbnail}">
            <div class="b_info">
                <P class="b_number">${i+1}</P>
                <div>
                    <p class="b_title">${msg.documents[i+1].title}</p>
                    <p class="b_author">${msg.documents[i+1].authors}</p>
                    <p class="b_price">${msg.documents[i+1].sale_price}원</p>
                </div>
            </div>`
        );
    }
})



















// 북탭 책 목록 가져오기
$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"투자", size:8},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<8;i++){
        var str = msg.documents[i].title;
        $('.tab_contents>a').eq(i).append(
            `<div>
                <img class="tab_thumbnail" src="${msg.documents[i].thumbnail}">
            </div>
            <div class="tab_info">
                    <p class="tab_title">${msg.documents[i].title}</p>
                    <p class="tab_author">${msg.documents[i].authors}</p>
            </div>`
        );
    }
})

$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"축구", size:8},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<8;i++){
        var str = msg.documents[i].title;
        $('.tab_contents_02>a').eq(i).append(
            `
            <div>
                <img class="tab_thumbnail_02" src="${msg.documents[i].thumbnail}">
            </div>
            <div class="tab_info_02">
                    <p class="tab_title_02">${msg.documents[i].title}</p>
                    <p class="tab_author_02">${msg.documents[i].authors}</p>
            </div>`
        );
    }
})

// 북탭 슬라이더 넘기기
$('.t_arrow_right').click(function(){
    $('.tab_area').animate({marginLeft:"-180px"},300,function(){
        $('.tab_contents').first().appendTo('.tab_area');
        $('.tab_area').css('margin-left','0');
    })
})

$('.t_arrow_right_02').click(function(){
    $('.tab_area_02').animate({marginLeft:"-180px"},300,function(){
        $('.tab_contents_02').first().appendTo('.tab_area_02');
        $('.tab_area_02').css('margin-left','0');
    })
})
















// 북탭03 책 목록 가져오기
$.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book",
    data: {query:"컴퓨터", size:10},
    headers: {Authorization: "KakaoAK 140f9c3a7a959f1b938b863f3e1902eb"}
})
.done(function(msg){
    for(var i=0;i<10;i++){
        var str = msg.documents[i].title;
        $('.tab_contents_03>a').eq(i).append(
            `<div>
                <img class="tab_thumbnail_03" src="${msg.documents[i].thumbnail}">
            </div>
            <div class="tab_info_03">
                    <p class="tab_title_03">${msg.documents[i].title}</p>
                    <p class="tab_author_03">${msg.documents[i].authors}</p>
            </div>`
        );
    }
})
















// 이벤트02 슬라이더 넘기기
$('.e_arrow_right_02').click(function(){
    $('.event_area_02').animate({marginLeft:"-300px"},300,function(){
        $('.event_contents_02').first().appendTo('.event_area_02');
        $('.event_area_02').css('margin-left','0');
    })
})
$('.e_arrow_left_02').click(function(){
    $('.event_contents_02').last().prependTo('.event_area_02');
    $('.event_area_02').css('margin-left','-300px');
    $('.event_area_02').animate({marginLeft:"0"},300)
})










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