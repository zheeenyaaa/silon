const preloader = document.querySelector('.preloader');
if (document.documentElement.clientWidth < 992) {
	preloader.style.display = 'none';
}

window.addEventListener('load', () => {
	setTimeout(() => {
		preloader.style.display = 'none';
	}, 1000)
});

$(document).ready(function () {
	var wow = new WOW(
		{
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0,          // distance to the element when triggering the animation (default is 0)
			mobile: false,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		}
	);
	wow.init();

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});

