$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    /*var docWidth = $(window).width();
	var leftWidth = $('.leftBlock').width();
	var rightWidth = $('.rightBlock').width();
	var len = docWidth - leftWidth - rightWidth - 30;
	$('.rightBlock').css({'margin-left' : len});*/
	var docHeight = $(window).height();
	$('.logo').css({'margin-top' : ((docHeight / 2) - 270)});
	if (((docHeight / 2) - 270) <= 0) {
		$('.logo').css({'margin-top' : 50});
	}
});

$(window).resize(function () {
	/*var docWidth = $(window).width();
	var leftWidth = $('.leftBlock').width();
	var rightWidth = $('.rightBlock').width();
	var len = docWidth - leftWidth - rightWidth - 30;
	$('.rightBlock').css({'margin-left' : len});*/
	var docHeight = $(window).height();
	$('.logo').css({'margin-top' : ((docHeight / 2) - 270)});
	if (((docHeight / 2) - 270) <= 0) {
		$('.logo').css({'margin-top' : 50});
	}
});
