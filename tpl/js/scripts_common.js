/* Общие скрипты */

var animate = false;
var wScroll;
var categoryDelay;

$(document).ready(function() {
	wscr();
	mobmenu();
	
	/* Маска для телефона */
	if($("*").is("input[name='phone']")) {
		$("input[name='phone']").inputmask("+7(999)-999-99-99",{ showMaskOnHover: true });
	}

	/* Мобильное меню */
	$(".out").on("click", ".mobmenu-toggle", function (event) {
		$("body,html").animate({scrollTop: 0}, 300);
		if(!animate) {
			animate = true;
			$(this).toggleClass("active");
			$(".mobmenu").toggleClass("open");
			if($(".mobmenu").hasClass("open")) {
				$("body").css("padding-right", wScroll + "px");
				setTimeout(function(){
					$("body").addClass("openmenu");
					animate = false;
				}, 600);
			}
			else {
				$("body").removeClass("openmenu");
				$("body").css("padding-right", "0px");
				setTimeout(function(){
					animate = false;
				}, 600);
			}
		}
		return false;
	});

	/* Скролл вверх */
	$(".out").on("click", ".scroll", function (event) {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top ;
		$("body,html").animate({scrollTop: destination }, 600);
		return false;
	});

	/* Модальные окна - общий скрипт*/
	$("body").on("click", ".openmodal", function(event){
		var modal = $(this).attr("href");

		$.fancybox.open({
			src : modal,
			touch : false,
			type : 'inline',
			autoFocus: false,
			beforeShow: function( instance, slide ) {
			},
			afterClose: function( instance, slide ) {
			}
		});

		return false;
	});
	
});

$(window).on("load", function(e) {
	wscr();
});

$(window).resize(function() {
	setTimeout(function(){
		wscr();
	}, 500);
});

function wscr() {
	if($(document).height() > $(window).height()) {
		var block = $('<div>').css({'height':'50px','width':'50px'}),
		indicator = $('<div>').css({'height':'200px'});

		$('body').append(block.append(indicator));
		var w1 = $('div', block).innerWidth();    
		block.css('overflow-y', 'scroll');
		var w2 = $('div', block).innerWidth();
		$(block).remove();
		wScroll = w1 - w2;
	}
	else {
		wScroll = 0;
	}
}

/* Мобильное меню */
function mobmenu() {
	$("body").append('<div class="mobmenu"><div class="mobmenu__table"><div class="mobmenu__content"><div class="container"></div></div></div></div>');
	$(".mobmenu .container").append('<div class="mobmenu__nav">' + $(".header .header__nav").html() + '</div>');
	$(".mobmenu .container").append('<div class="mobmenu__phones phones">' + $(".topline .topline__phones").html() + '</div>');
	$(".mobmenu .container").append('<div class="mobmenu__socials socials">' + $(".topline .topline__socials").html() + '</div>');
	$(".mobmenu .container").append('<div class="mobmenu__button">' + $(".header .header__button").html() + '</div>');
}