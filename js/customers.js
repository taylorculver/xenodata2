window.onload = function() {

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	  	console.log("blah")
	    this.classList.toggle("active-accordion");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}

	$('.objective').siblings("p").hide();

	$( ".objective" ).click(function() {
	  $(this).next("p").toggle();
	});
};