// Fade in Call to Action Content
$(document).ready(function() {

	// Fade in CTA #3/4 on Scroll
	$(window).scroll(function() {  
	  if ($(window).scrollTop() > 250) { 
	  	$('#cta-1').slideDown(1000); $('#cta-2').fadeIn(1000);
	  };

	  if ($(window).scrollTop() > 500) { 
	  	$('#cta-3').slideDown(1000); $('#cta-4').fadeIn(1000);
	  };
	  
	  if ($(window).scrollTop() > 750) {
	  	$('#cta-5').slideDown(1000); $('#cta-6').fadeIn(1000);
	  };

	});
		});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}