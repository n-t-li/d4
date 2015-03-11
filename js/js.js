$(document).ready(function(){

	$('.header_center.arrow .arrow').click(function(){
		$(this).toggleClass('active');
		$('.header_center.content_top').slideToggle(600);
	});

	$('.menu .menu_show').click(function(){
		$('.menu > ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu > ul').slideUp(600);
			}
		}
		if ($(e.target).parents().filter('.header_top:visible').length != 1){
			$(this).removeClass('active');
			$('.header_center.content_top').slideUp(600);
		}
	});

	tmp_footer = $('.footer').height();
	tmp_footer_2 = $('.footer').height()+30;
	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);

});

$(window).resize(function(){
	if($(window).width() < 590){
		$('.menu > ul').css('display', 'none');
	}
	if($(window).width() > 590){
		$('.menu > ul').css('display', 'block');
	}

	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);
});