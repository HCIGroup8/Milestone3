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

function prefSelect(cbID) {
    // checks the checkbox when the corresponding button is clicked

    var prefCB = document.getElementById(cbID);
    
    if(prefCB.checked){
        prefCB.checked = false;
    }
    else{
        prefCB.checked = true;
    }
}

function refinePreferences() {
    // Get the user entered text from the search bar
    var searchBar = document.getElementById("prefSearch");
    var filterText = searchBar.value.toLowerCase();

    // Get all the cuisine options from the document
    var listOfPrefs = document.getElementById("prefDiv");
    var cuisOptionsArray = listOfPrefs.getElementsByTagName('div');
    var cuisBtn;
    var btnText;

    // Loop through all cuisine options and hide ones that don't match user entered string
    for(var i = 0; i<cuisOptionsArray.length; i++){
        cuisBtn = cuisOptionsArray[i].getElementsByTagName("button")[0];
        btnText = cuisBtn.innerText.toLowerCase();

        if(btnText.indexOf(filterText) > -1){
            cuisOptionsArray[i].style.display = "";
        }
        else{
            cuisOptionsArray[i].style.display = "none";
        }
    }

}

function getPreferences() {
    var fastFood = document.getElementById("fastfoodCB");
    var pizza = document.getElementById("pizzaCB");

    var fastFoodChecked = fastFood.checked();
    var pizzaChecked = pizza.checked();

    var cuisPrefs = {
        ff: fastFoodChecked,
        pi: pizzaChecked
    };

    return prefs;
}