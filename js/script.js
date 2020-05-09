$(document).ready(function() {
	$('.header__slider').slick({
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		dots: true,
		// autoplay: true,
		autoplaySpeed: 2500,
		
	});


	$('.menu__burger').on('click', function() {
		$('.menu-list').slideToggle();
	})

});