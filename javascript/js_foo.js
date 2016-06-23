

var all_smallpdcthref = document.querySelectorAll(".small-pdt-href") ;

for ( var j = 0 ; j< all_smallpdcthref.length ; j++) {
    var current_smallpdcthref = all_smallpdcthref[j] ;
    current_smallpdcthref.setAttribute('href', 'http://www.yahoo.com') ;
}