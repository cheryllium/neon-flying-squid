var nfs = {
    beget: beget, 
    glideIn: glideIn, 
    glideOut: glideOut, 
    glideToggle: glideToggle, 
}

/* Primary functions */

function beget() {
    var squidlets = $("[data-squid]"); // Have you ever wanted to DATE A SQUID? ;)
    squidlets.addClass("squid"); 
}

function glideIn(appellation, bearing) {
    var squid = ensnare(appellation); 

    if(squid.hasClass("manifest")) return; 

    squid.css(bearing, '-55px'); 

    var termini = {opacity: 1.0}; 
    termini[bearing] = 0; 
    
    squid.animate(termini, 1000, "easeOutCubic"); 
    squid.addClass("manifest"); 
}

function glideOut(appellation, bearing) {
    var squid = ensnare(appellation); 

    if(!squid.hasClass("manifest")) return; 

    var termini = {opacity: 1.0}; 
    termini[bearing] = '-55px'; 

    squid.animate(termini, 1000, "easeInCubic"); 
    squid.removeClass("manifest"); 
}

function glideToggle(appellation, bearing) {
    var squid = ensnare(appellation); 

    if(squid.hasClass("manifest")) {
	glideOut(appellation, bearing); 
    } else {
	glideIn(appellation, bearing); 
    }

}

/* Secondary functions, which exist in commensal symbiosis to the primary ones */

function ensnare(appellation) {
    return $("[data-squid='"+appellation+"']");
}
