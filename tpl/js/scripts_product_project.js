/* Скрипты для страницы изделия или проекта */

$(document).ready(function() {

	/* Фотогалерея изделия или проекта */
	if($("*").is(".productdetail")) {
		var thumbs = $(".productdetail__thumbs").owlCarousel({ 
			loop: false,
			nav: true,
			dots: false,
			items: 4,
			margin: 12,
			navText: ["", ""],
			responsive: {
				0:{
					items: 3,
				},
				992:{
					items: 4,
				}
			}
		});

		$(".productdetail__thumbs .productdetail__thumb").click(function() {		
			if(!$(this).hasClass("active")) {
				var index = $(".productdetail__thumbs .productdetail__thumb").index($(this));
				$(".productdetail__thumbs .productdetail__thumb").removeClass("active");
				$(this).addClass("active");			
				slideshow.owlCarousel('to', index);
			}
			return false;
		});

		var slideshow = $(".productdetail__slideshow").owlCarousel({ 
			loop: false,
			nav: false,
			dots: false,
			items: 1,
			margin: 16,
			navText: ["", ""],
			onChanged: function callback(event) {
				$(".productdetail__thumbs .productdetail__thumb").removeClass("active");
				$(".productdetail__thumbs .productdetail__thumb:eq(" + event.item.index + ")").addClass("active");
				thumbs.owlCarousel('to', event.item.index);
			},
			onInitialized: function callback(event) {
				$(".productdetail__thumbs .productdetail__thumb:eq(" + event.item.index + ")").addClass("active");
				thumbs.owlCarousel('to', event.item.index);
			},
		});
	}

	/* Продукция - карусель */
	if($("*").is(".products-carousel")) {
		$('.products-carousel').each(function(){
			var carousel = $(this).find(".products__carousel");
			carousel.owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				items: 4,
				margin: 16,
				navText: ["", ""],
				navContainer: carousel.parents(".products-carousel").find(".title .owl-nav"),
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
		});
	}
	
});