(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$(".embed-responsive iframe").addClass("embed-responsive-item");
		//        $(".carousel-inner .item:first-child").addClass("active");

		$('[data-toggle="tooltip"]').tooltip();
		$(".afilea_images").owlCarousel({

			autoPlay: 2000, //Set AutoPlay to 3 seconds

			items: 5,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3]

		});






	});


	jQuery(window).load(function () {


	});


}(jQuery));
