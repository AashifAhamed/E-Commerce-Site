

// js by aashif
document.getElementById("c").onclick = function() {
  document.getElementById("circle").style.display = "none";
  alert('Item Removed');
}
document.getElementById("adi").value = "456/1 Dialog Road, Colombo";
document.getElementById("c1").onclick = function() {
  document.getElementById("circle1").style.display = "none";
  alert('Item Removed');
}
document.getElementById("checkout").onclick = function() {
  // document.getElementById("circle1").style.display = "none";
  alert('Your Order Added');
}

$(function() {
    // var baseURL = 'http://yourdomain.com/ajax/';
    //load content for first tab and initialize
    $('#home').load('profile.html', function() {
        $('#myTab').tab(); //initialize tabs
    });
    $('#myTab').bind('show', function(e) {
       var pattern=/#.+/gi //use regex to get anchor(==selector)
       var contentID = e.target.toString().match(pattern)[0]; //get anchor
       //load content for selected tab
       $(contentID).load(contentID.replace('#',''), function(){
            $('#myTab').tab(); //reinitialize tabs
       });
    });
});

// function showAlert() {
//     var country = "Item Removed";
//     console.log(conntry);
//     alert( 'Item Removed.');
// }
/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling

$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* play list music button */
$(document).ready(function(){

	var obj = document.createElement("audio");
	obj.src = "../HTML/audio/audio.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;

	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.disk');			/* disk image */

		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});

});

/* *************************************** */
// One page navigation
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling

$('.nav a').bind('click', function(e){
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* Owl-Carousel Client Slider */

$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1200,
	  paginationSpeed : 500,
	  stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  });
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		}
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});

});
