/* Скрипты для страницы "Контакты" */

$(document).ready(function() {

	/* Карта */
	if($("*").is("#map")) {
		ymaps.ready(function () {
			myMap = new ymaps.Map('map', {
				center: [47.211704, 39.648376],
				controls: [],
				zoom: 15,	      
			}, {
				searchControlProvider: 'yandex#search'
			});

			zoomControl = new ymaps.control.ZoomControl({
				options: {
					position: {
						right: 20,
						top: 20
					}
				}
			});

			myMap.controls.add(zoomControl);
			myMap.behaviors.disable('scrollZoom');

			myMap.geoObjects
				.add(new ymaps.Placemark([47.211704, 39.648376], {
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'tpl/img/icons/map-pointer.svg',
				iconImageSize: [42, 46],
				iconImageOffset: [-21, -40]
			}));
		});
	}
	
});