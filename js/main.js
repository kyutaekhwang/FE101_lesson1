$("nav").onePageNav();

var menu = $("nav ul");

// when I click
$("#menu-icon").click(function() {
	//toggle the menu
	menu.slideToggle();
});


// when I resize the window
$(window).resize(function () {
	var width = $(window).width();
	// if window width is > 768 and the menu is hidden
	if(width > 768 && menu.is(":hidden")) {
		menu.removeAttr("style");
	}

});