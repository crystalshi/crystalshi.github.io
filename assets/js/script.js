$(document).ready(function() {
	
	//sticky nav bar
	$(window).scroll(function() {
		if ($(this).scrollTop() > 299) {
			$('#nav-bar').addClass("sticky");
		}
		else {
			$('#nav-bar').removeClass("sticky");
		}
	});

	//sticky nav bar color
	$(window).scroll(function() {
		if ($(this).scrollTop() > 645) {
			$('#nav-bar').addClass("sticky-color");
		}
		else {
			$('#nav-bar').removeClass("sticky-color");
		}
	});

	// navigation buttons
	$("li").click(function () {
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top
		}, 500);
	});

	//about section animation
	$(window).scroll(function() {
		var aboutPics = $("#about-pics-row").children();
		var left = aboutPics.first();
		var middle = left.next();
		var right = middle.next();

		if ($(this).scrollTop() > 684) {
			$(left).removeClass("hidden");
			setTimeout(function() {
				$(middle).removeClass("hidden"); }, 1000);
			setTimeout(function() {
				$(right).removeClass("hidden"); }, 2000); 

			setTimeout(function() {
				$(left).addClass("move-left-pic");
				$(middle).addClass("move-middle-pic");
				$(right).addClass("move-right-pic"); }, 3500); 
			setTimeout(function() {
				$(middle).addClass("move-middle-pic2");
				$(right).addClass("move-right-pic2"); }, 4500); 
			setTimeout(function() {
				$(".about-row").removeClass("hidden"); }, 5500); 
		}
	});

	//contact form submission
	$("#submit").click(function () {
		var name = $("input[name=name]").val();
		if (name == '') {
			$("<p> Thanks! Your message has been received. </p>").appendTo("#submitted-message"); 
		} else {
			$("<p> Thanks, " + name + "! Your message has been received. </p>").appendTo("#submitted-message"); 
		}

		$("#form-container").addClass("submitted");
		setTimeout(function () {
			$("#open-envelope").removeClass("hidden"); }, 700);
		setTimeout(function (){
			$("#open-envelope").addClass("hidden"); }, 1400);
		setTimeout(function () {
			$("#closed-envelope").removeClass("hidden"); }, 1400);
		setTimeout(function () { 
			$("#submitted-message").show(1500); }, 1500);
	});
})