var addr = document.getElementById("addrPage");
var prefs = document.getElementById("categoriesPage");
var rests = document.getElementById("restaurantsPage");
var menu = document.getElementById("menuPage");
var cart = document.getElementById("cartPage");

function catagoriesPageClick() {
    addr.style.display = "none";
    prefs.style.display = "inline";
}


function resturantsPageClick() {
    prefs.style.display = "none";
    rests.style.display = "inline";
}