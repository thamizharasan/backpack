$(document).ready(function(){
	var sideNavHeight = $(window).height();

	$('.side-nav').height(sideNavHeight);
}, $(document).resize(function(){

	var sideNavHeight = $(window).height();
	$('.side-nav').height(sideNavHeight);
})
);