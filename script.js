$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
	var docHeight = $(window).height();
	$('.logo').css({'margin-top' : ((docHeight / 2) - 270)});
	if (((docHeight / 2) - 270) <= 0) {
		$('.logo').css({'margin-top' : 50});
	}
});

$(window).resize(function () {
	var docHeight = $(window).height();
	$('.logo').css({'margin-top' : ((docHeight / 2) - 270)});
	if (((docHeight / 2) - 270) <= 0) {
		$('.logo').css({'margin-top' : 50});
	}
});
