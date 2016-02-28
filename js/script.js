$("#background-button").on("click", function() {
	$(".information").fadeOut(0, function() {
		$(".background-information").fadeIn("slow");
	});
});

$("#work-button").on("click", function() {
	$(".background-information").fadeOut(0, function() {
		$(".project-information").fadeOut(0, function() {
			$(".work-information").fadeIn("slow");
		});
	});
});

$("#project-button").on("click", function() {
	$(".background-information").fadeOut(0,function() {
		$(".work-information").fadeOut(0, function() {
			$(".project-information").fadeIn("slow");
		});
	});
});
