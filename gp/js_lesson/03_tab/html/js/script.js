$(function() {
	$('.js-tabList').on('click' ,function(){
		var number = $('.js-tabList').index(this);

		$('.js-tabList').removeClass('active');
		$('.js-tabList').eq(number).addClass('active');

		$('.js-tabTxt').removeClass('active');
		$('.js-tabTxt').eq(number).addClass('active');
	})
});