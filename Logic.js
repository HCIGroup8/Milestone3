// Global Variables

// Page Divs
var addr = document.getElementById("addrPage");
var prefs = document.getElementById("categoriesPage");
var rests = document.getElementById("restaurantsPage");
var menu = document.getElementById("menuPage");
var cart = document.getElementById("cartPage");


function categoriesPageClick() {
    addr.style.display = "none";
    prefs.style.display = "inline";
}

function categoriesPageBack() {
    prefs.style.display = "none";
    addr.style.display = "inline";
}

function resturantsPageClick() {
    prefs.style.display = "none";
    rests.style.display = "inline";

    getPreferences();


}

function restaurantsPageBack() {
    rests.style.display = "none";
    prefs.style.display = "inline";
}

function getPreferences() {
    var fastFood = document.getElementById("fastfoodCB");
    var pizza = document.getElementById("pizzaCB");

    var fastFoodChecked = fastFood.checked();
    var pizzaChecked = pizza.checked();

    var prefs = {
        ff: fastFoodChecked,
        pi: pizzaChecked
    };

    return prefs;
}