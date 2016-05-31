/* var current_path = window.location.href ;
var current_path_parent = current_path.substring(0, current_path.lastIndexOf("/") + 1) ;
current_path_parent = current_path_parent.replace(/^file:\/\//,'yarns://') ;
var current_path_base = document.getElementById("E160327_174349").href ;
var test = absolute (current_path_parent, current_path_base) ; */


/* DOM test.
var_length = document.getElementsByTagName('p');
var_a = document.getElementsByTagName('p');

for ( var i=0 ; i<var_a.length ; i++) {
    var_b = var_a.parentNode ;
    
    var_c = document.createElement('a') ;
    var_c.setAttribute('href', 'foobar-link')
    var_d = document.createTextNode('water') ;
    var_c.appendChild(var_d) ;
    var_a[i].appendChild(var_c) ;
}
*/

all_yarns = document.querySelectorAll(".yarns-link") ;


for ( var i = "0" ; i< all_yarns.length ; i++) {
    var current_testing_element = all_yarns[i] ;
    current_path = current_testing_element.href ;
    current_path_yarns = current_path.replace(/^file:\/\//,'yarns://') ;
    
    var yarns_protocol_element = document.createElement('a') ;
    yarns_protocol_element.setAttribute('class', 'yarns-protocol') ;
    yarns_protocol_element.setAttribute('href', current_path_yarns) ;
    var yarns_protocol_textNode = document.createTextNode('(Y)') ;
    yarns_protocol_element.appendChild(yarns_protocol_textNode) ;
    
    var yarns_protocol_element_parent = current_testing_element.parentNode ;
    yarns_protocol_element_parent.insertBefore(yarns_protocol_element, current_testing_element.nextSibling) ;
          
}

/* This function will not be used now, but it will return true if an element have specific class name. */
function hasClass(element, cls) {
return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function absolute(base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}