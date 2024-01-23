/* Скрипты для страницы "О нас" */

$(document).ready(function() {

	/* Вопросы */
	$(".faqs").on("click", ".faq__question", function (event) {
		$(this).parents(".faq").toggleClass("open").find(".faq__answer").slideToggle(300);
	});
	
});