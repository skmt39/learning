$(window).load(function(){
	
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