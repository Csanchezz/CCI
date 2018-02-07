$(window).scroll(function() {
	if($(this).scrollTop()>300) {
		$( ".navbar-fixed-top" ).addClass("navbar-default");
	} else {
		$( ".navbar-fixed-top" ).removeClass("navbar-default");
	}
});

