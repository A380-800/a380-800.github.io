$(document).ready(function() {
	var nav_margin = $(".banner").width()*0.0125;
	// alert(nav_margin);
	$(window).scroll(function() {
		var wScroll = $(window).scrollTop();
		if (wScroll > nav_margin) {
			$(".nav").addClass("nav_scroll");
			// $(".nav").addClass("nav_seudo");
		} else {
			$(".nav").removeClass("nav_scroll");
			// $(".nav").removeClass("nav_seudo");
		}
	});
});
