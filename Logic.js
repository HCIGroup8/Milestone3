function catagoriesPageClick() {
    var addr = document.getElementById("addrPage");
    var prefs = document.getElementById("categoriesPage");
    var rests = document.getElementById("restaurantsPage");
    var menu = document.getElementById("menuPage");
    var cart = document.getElementById("cartPage");

    addr.style.display = "none";
    prefs.style.display = "inline";
}


function resturantsPageClick() {
    var prefs = document.getElementById("categoriesPage");
    var rests = document.getElementById("restaurantsPage");

    prefs.style.display = "none";
    rests.style.display = "inline";
}