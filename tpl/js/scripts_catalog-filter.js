/* Скрипты для страницы "Каталог с фильтром" */

$(document).ready(function() {

	/* Фильтрация разделов */
	if($("*").is(".categories__filter")) {
		$(".categories__panel:not(.open)").hide(0);

		$(".categories__filter").on("click", ".btn", function (event) {
			link = $(this);
			if(!link.parent().hasClass("active")) {
				$(".categories__filter .active").removeClass("active").find(".btn").removeClass("btn-primary");
				$(".categories__panel").removeClass("open");

				setTimeout(function(){
					link.parent().addClass("active").find(".btn").addClass("btn-primary");
					$(".categories__panel").hide(0);
					$(link.attr("href")).show(0).addClass("open");
				}, 300);
			}
			return false;
		});
	}
	
});