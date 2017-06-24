$(window).load(function(){
	
	$("footer p a").click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
			return false;
	});
	
	var def_width = 0;
	var initPC = false, initSP = false;
	
	$(window).resize(function() {
		var w = $(window).width();
		var x = 641;

		if (def_width == w) {
			return;
		} else {
			def_width = w;
		}

		if (w > x) {
			//PC
			if (!initPC) {
				initPC = true;
				setEventPCUser();
			}
		} else {
			//SP
			if (!initSP) {
				initSP = true;
				setEventSPUser();
			}
		}
	}).trigger('resize');
	
	
	
	// PC --------------------------------------------------------------------
	function setEventPCUser() {
		
		// PC表示時のjsを記述
		
	}
	
	
	// SP --------------------------------------------------------------------
	function setEventSPUser() {
		
		// SP表示時のjsを記述
		
	}
});


// rollover --------------------------------------------------------------------
$(function(){
	$(".over a img").mouseover(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_o$2"));
	}).mouseout(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)_o(\.[a-z]+)$/, "$1$2"));
	}).each(function(){
		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_o$2"));
	});
});

// for IE png --------------------------------------------------------------------
jQuery(function() {
	if(navigator.userAgent.indexOf("MSIE") != -1) {
		jQuery('img').each(function() {
			if(jQuery(this).attr('src').indexOf('.png') != -1) {
				jQuery(this).css({'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + jQuery(this).attr('src') + '", sizingMethod="scale");'});
			}
		});
	}
});