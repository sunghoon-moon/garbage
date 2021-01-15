// main.js

// $(function(){
// 	$('.menu_btn').click(function(){
// 		$('.gnb').css('display', 'block'),
// 		$('.menu_btn').css('display', 'none');
// 	});
// 	$('.close').click(function(){
// 		$('.gnb').css('display', 'none'),
// 		$('.menu_btn').css('display', 'block');
// 	});
// })

// menu toggle
$(function(){
    $('.menu_btn').click(function(){
        $('.gnb').addClass('show');
        $('.overlay').show();
    });
    $('.close').click(function(){
        $('.gnb').removeClass('show');
        $('.overlay').hide();
    });
    $('.overlay').on('click', function () {
        $('.gnb').removeClass('show');
        $('.overlay').hide();
    });
})