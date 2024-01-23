/* Скрипты для главной страницы */

var categoryDelay;

$(document).ready(function() {

	/* Категории на главной странице */
	$('.categories .categories__list .category__name a').hover(
		function(){
			var link = $(this)			
			categoryDelay = setTimeout(function(){
				link.parents(".category").addClass("open").find(".category__image").fadeIn(300);
			}, 200);
		},
		function(){
	});
	$('.categories .categories__list .category').hover(
		function(){
		},
		function(){
			clearTimeout(categoryDelay);
			$(this).removeClass("open").find(".category__image").fadeOut(300);
	});

	/* Вопросы */
	$(".faqs").on("click", ".faq__question", function (event) {
		$(this).parents(".faq").toggleClass("open").find(".faq__answer").slideToggle(300);
	});

	/* Отзывы - карусель */
	if($("*").is(".reviews__carousel")) {
		$(".reviews__carousel").owlCarousel({ 
			loop: true,
			nav: true,
			dots: false,
			items: 4,
			margin: 16,
			navText: ["", ""],
			navContainer: $(".reviews .title .owl-nav"),
			responsive:{
				0:{
					items: 1
				},
				360:{
					items: 2
				},	        
				768:{
					items: 3
				},
				992:{
					items: 4
				}
			}
		});
	}

	/* Открыть отзывы */
	if($("*").is(".reviews")) {
		$('[data-fancybox="reviews"]').fancybox({
			hash: false,
			backFocus: false
		});
	}
	
});