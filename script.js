function js_style(){
    var element = document.getElementById('text');
    element.style = 'font-size: 40px; color: red; font-family: Arial';
}

function firstLastName() {
    var firstName = document.getElementsByName("fname")[0].value;
    var lastName = document.getElementsByName("lname")[0].value;
    alert(firstName + " " + lastName);
}

function paragraphChange() {
    var element = document.getElementsByTagName("p")[0];
    element.style.backgroundColor="red";
}




//var hover = document.getElementsByTagName("a")[0];
//hover.addEventListener("mouseover", highlight);
//
//function highlight() {
//    document.getElementsByTagName("b")[0].style.background="yellow";
//    document.getElementsByTagName("b")[1].style.background="yellow";
//    document.getElementsByTagName("b")[2].style.background="yellow";
//}

function values() {
    var a = document.getElementById("w3r");
    var href = a.getAttribute("href");
    var hreflang = a.getAttribute("hreflang");
    var rel = a.getAttribute("rel");
    var target = a.getAttribute("target");
    var type = a.getAttribute("type");
}