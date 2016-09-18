var nfs = {
    beget: function() {
	var squidlets = $("[data-squid]"); // Have you ever wanted to DATE A SQUID? ;)
	squidlets.addClass("squid"); 
    }, 
    glideIn: function(appellation, bearing) {
	var squid = $("[data-squid='"+appellation+"']");
	if(squid.hasClass("manifest")) return; 

	squid.css(bearing, '-55px'); 

	var termini = {opacity: 1.0}; 
	termini[bearing] = 0; 
	
	squid.animate(termini, 1000, "easeOutCubic"); 
	squid.addClass("manifest"); 
    }, 
    glideOut: function(appellation, bearing) {
	var squid = $("[data-squid='"+appellation+"']");
	if(!squid.hasClass("manifest")) return; 

	var termini = {opacity: 0}; 
	termini[bearing] = '-55px'; 

	squid.animate(termini, 1000, "easeInCubic", function() {
	    squid.css(bearing, 0); 
	}); 
	squid.removeClass("manifest"); 
    }, 
}

nfs.glideToggle = function(appellation, bearing) {
    var squid = $("[data-squid='"+appellation+"']");

    if(squid.hasClass("manifest")) {
	nfs.glideOut(appellation, bearing); 
    } else {
	nfs.glideIn(appellation, bearing); 
    }
}; 

