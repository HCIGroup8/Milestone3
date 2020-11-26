// ------------------
// Global Variables
// ------------------

// Page Divs
var addr = document.getElementById("addrPage");
var prefs = document.getElementById("categoriesPage");
var rests = document.getElementById("restaurantsPage");
var menu = document.getElementById("menuPage");
var cart = document.getElementById("cartPage");

// Array holding names of selected cuisine preferences
var selectedPrefs = [];

const MAX_FEE = 1500;

// Restaurant Data Objects
var mcdonaldsObj = {
    name: "McDonald's",
    img: "./Images/McDonald's_logo.png",
    description: "Your favourite place.",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "20-25",
    distance: 2
};

var burgerKingObj = {
    name: "Burger King",
    img: "./Images/BurgerKing_logo.png",
    description: "Eat like a king",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "5-10",
    distance: 0.5
};

var awObj = {
    name: "A & W",
    img: "./Images/A&W_logo.png",
    description: "A Family Place",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "10-15",
    distance: 1
};

var dairyQueenObj = {
    name: "Dairy Queen",
    img: "./Images/DairyQueen_logo.png",
    description: "Treat yo self",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "10-15",
    distance: 5
};

var kfcObj = {
    name: "KFC",
    img: "./Images/KFC_Logo.png",
    description: "Finger Lickin Good",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "1",
    distance: 2
};

var popeyesObj = {
    name: "Popeye's",
    img: "./Images/Popeyes_logo.png",
    description: "Louisiana Chicken",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "30",
    distance: 15
};

var marybrownsObj = {
    name: "Mary Brown's",
    img: "./Images/MaryBrowns_logo.png",
    description: "Made Fresh From Scratch",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "7",
    distance: 7
};

var littlecaesarsObj = {
    name: "Little Caesar's",
    img: "./Images/LittleCaesars_logo.png",
    description: "Pizza! Pizza!",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "10",
    distance: 3
};

var dominosObj = {
    name: "Domino's",
    img: "./Images/Dominos_logo.png",
    description: "Its what we do!",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "7",
    distance: 3
};

var tacodelmarObj = {
    name: "Taco Del Mar",
    img: "./Images/TacoDelMar_logo.png",
    description: "Its taco time",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "4",
    distance: 1
};

var qdobaObj = {
    name: "Qdoba",
    img: "./Images/Qdoba_logo.png",
    description: "Its what we do!",
    deliveryFee: Math.random() * MAX_FEE,
    deliveryTime: "10",
    distance: 7
};

// ------------
// Functions
// ------------

function categoriesPageClick() {
    addr.style.display = "none";
    prefs.style.display = "inline";
}

function categoriesPageBack() {
    prefs.style.display = "none";
    addr.style.display = "inline";
}

function resturantsPageClick() {
    getPreferences();
    if(selectedPrefs.length == 0){
        selectAllRest();
        getPreferences();
    }
    showValidRestaurants();
    showPreferenceChips();
    prefs.style.display = "none";
    rests.style.display = "inline";
}

function restaurantsPageBack() {
    rests.style.display = "none";
    prefs.style.display = "inline";
}

function menuPageClick(name) {
    rests.style.display = "none";
    menu.style.display = "inline";
    insertRestaurantInfo(name);
}

function menuBack() {
    menu.style.display = "none";
    rests.style.display = "inline";
}

function cartClick() {
    menu.style.display = "none";
    cart.style.display = "inline";
}

function cartBack() {
    cart.style.display = "none";
    menu.style.display = "inline"
}

// -------------------------------------------------------------------------
// prefSelect()
//
// Purpose: checks the checkbox when the button that contains it is clicked
// -------------------------------------------------------------------------
function prefSelect(cbID) {

    var prefCB = document.getElementById(cbID);
    
    if(prefCB.checked){
        prefCB.checked = false;
    }
    else{
        prefCB.checked = true;
    }
}

// ----------------------------------------------------------------
// refinePreferences()
//
// Purpose: show/hide cuisine preferences based on a users search criteria
// ----------------------------------------------------------------
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

// ------------------------------------------
// selectAllRest()
//
// Purpose: checks all preference checkboxes
// ------------------------------------------
function selectAllRest() {
    // Get all the cuisine options from the document
    var listOfPrefs = document.getElementById("prefDiv");
    var cuisOptionsArray = listOfPrefs.getElementsByTagName('div');
    var cuisCB;

    // Loop through all cuisine options and check all the checkboxes
    for(var i = 0; i<cuisOptionsArray.length; i++){
        cuisCB = cuisOptionsArray[i].getElementsByTagName("input")[0];

        if(!cuisCB.checked && !cuisCB.disabled){
            cuisCB.checked = true;
        }
    }
}

// ---------------------------------------------------------------------------------------
// getPreferences()
//
// Purpose: populates an array with the names of the user's selected cuisine preferences
// ---------------------------------------------------------------------------------------
function getPreferences() {
    // Get all the cuisine options from the document
    var prefDiv = document.getElementById("prefDiv");
    var arrayOfPrefCards = prefDiv.getElementsByTagName("div");
    var prefCB;
    var prefName;

    // Loop through all cuisine options
    // If a cuisine is checked off, add it to the selectedPrefs array
    for(var i=0; i<arrayOfPrefCards.length; i++) {
        prefCB = arrayOfPrefCards[i].getElementsByTagName("input")[0];
        prefName = prefCB.getAttribute("name");

        // Add preference name to array if its checkbox is checked
        // and if it doesn't exist in the array already
        if(prefCB.checked && !selectedPrefs.includes(prefName)){
            selectedPrefs.push(prefName);
        }
        // If checkbox is not checked remove the preference from the array if it exists
        else if(!prefCB.checked && selectedPrefs.includes(prefName)){
            var index = selectedPrefs.indexOf(prefName);
            selectedPrefs.splice(index, 1);
        }   
    }
}

// ----------------------------------------------------------------------------------
// showValidRestaurants()
//
// Purpose: shows only restaurants matching the user's selected cuisine preferences
// ----------------------------------------------------------------------------------
function showValidRestaurants() {
    // Get all of the restaurant category divs
    var restaurantsDiv = document.getElementById("restaurantsDiv");
    var restaurantTypes = restaurantsDiv.getElementsByTagName("div");
    var restaurantTypeName;

    // Loop through array of restaurant category divs
    // Only display categories that are in the selectedPrefs array
    for(var i = 0; i < restaurantTypes.length; i++){
        restaurantTypeName = restaurantTypes[i].getAttribute("id");
        if(selectedPrefs.indexOf(restaurantTypeName) > -1){
            restaurantTypes[i].style.display = "inline";
        }
        else{
            restaurantTypes[i].style.display = "none";
        }
    }
}

// ----------------------------------------------------------
// showPrefenceChips()
//
// Purpose: shows user selected preferences as chips
// ----------------------------------------------------------
function showPreferenceChips(){
    var chipDiv = document.getElementById("prefChipsDiv");
    var chipHTML = "";
    var chipPlus = "<div class=\"chip\" onclick=\"restaurantsPageBack()\"><span>&plus;</span></div>"

    for(var i = 0; i < selectedPrefs.length; i++){
        chipHTML += `<div class=\"chip\">
                        ${selectedPrefs[i]}
                        <span class="closeBtn" onclick="removePreference('${selectedPrefs[i]}')">&times;</span>
                    </div>`;
    }

    chipHTML += chipPlus;
    chipDiv.innerHTML = chipHTML;
}

// -------------------------------------------------------------------------------------
// removePreference
//
// Purpose: removes a preference from the preferences array and any chips/checkboxes 
//
// Parameters: prefName -> (String) name of the preference to be removed
// -------------------------------------------------------------------------------------
function removePreference(prefName){
    var index = selectedPrefs.indexOf(prefName); // index of preference in the selected prefs array
    var checkboxID = prefName.concat("CB"); // id of the checkbox corresponding to the preference
    var prefCb = document.getElementById(checkboxID); // preference checkbox

    // Uncheck the coresponding checkbox
    prefCb.checked = false;

    // Remove the preference from the array
    selectedPrefs.splice(index, 1); 

    // Display only the chips/restaurants for the new set of selected preferences
    showPreferenceChips();
    showValidRestaurants();
}

// ---------------------------------------------------------------
// insertRestaurantInfo
//
// Purpose: dynamically generate the restaurant info to display 
// ---------------------------------------------------------------
function insertRestaurantInfo(restName) {
    // Get the containing div from the document
    var restInfoDiv = document.getElementById("RestaurantInfo");
    var restaurant; // restaurant object we care about
    var infoHTML = ""; // string to fill with HTML code

    switch (restName) {
        case value:
            
            break;
    
        default:
            restaurant = mcdonaldsObj;
            break;
    }

    // Build up the string of html to insert
    infoHTML += `<img src="${restaurant.img}" width=70px height=70px style="margin-right:25px">`;
    infoHTML += `<p id="RestaurantName">${restaurant.name}</p>`;
    infoHTML += `<p style="padding-left: 300px;">${restaurant.description}</p>`;
    infoHTML += `<div class="restaurantDescription">`;
    infoHTML += `<p>Distance: ${restaurant.distance}km away</p>`;
    infoHTML += `<p>Est. Delivery Time: 20-25 min</p>`;
    infoHTML += `<p>Delivery Fee: $${restaurant.deliveryFee/100}</p>`;
    infoHTML += `</div>`;

    // Insert the html into the document
    restInfoDiv.innerHTML = infoHTML;
}

function insertMenuItems() {
    var menuItemsDiv = document.getElementById("MenuItems");

}


// js for cart page below

function removeItem2(){//to be deleted
    var deleteItem2 = document.getElementById("item2");
    deleteItem2.remove();
  }
  
  function removeItem3(){//to be deleted
    var deleteItem3 = document.getElementById("item3");
    deleteItem3.remove();
  }
  
  function removeItem4(){//to be deleted
    var deleteItem4 = document.getElementById("item4");
    deleteItem4.remove();
  }
  
  function removeItem5(){//to be deleted
    var deleteItem5 = document.getElementById("item5");
    deleteItem5.remove();
  }
  
  //for remove itemCard
  function removeItem(toDelete){
   var toRemove = document.getElementById(toDelete);
   toRemove.remove();
  }
  
  var currItemQuantity = 1; //for storing current deleteing item qty
  document.getElementById("itemQtyjs").innerHTML = currItemQuantity;
  
  var bigMacQty = 3;
  var FriesQty = 3;
  var aComboQty = 1;
  var mcNugQty = 1;
  var fantaQty = 3;
  
  document.getElementById("bigMacbr").innerHTML = bigMacQty;
  document.getElementById("friesbr").innerHTML = FriesQty;
  document.getElementById("aCombobr").innerHTML = aComboQty;
  document.getElementById("mcNugbr").innerHTML = mcNugQty;
  document.getElementById("fantabr").innerHTML = fantaQty;
  
  //this is for the popup quantity cusomization to show
  function openPopUpQty(qtyToShow){
    document.getElementById("qtyInfo").style.display = "block";
    currItemQtyEdit(qtyToShow);
  }
  
  //this is for the popup quantity cusomization to close
  function closePopUpQty() {
    if(currItemQuantity == 0){
      removeItem("item1"); //to be corrected
    }
     document.getElementById("qtyInfo").style.display = "none";
  }   
  
  window.onclick = function(event) {
    if (event.target == document.getElementById("qtyInfo")) {
      document.getElementById("qtyInfo").style.display = "none";
    }
  }
  
  //this is for the popup quantity customization for decrease 1 quantity
  function minusQty() {
    if(currItemQuantity > 0){
        currItemQuantity -= 1;
        bigMacQty = currItemQuantity;  //to be corrected
        document.getElementById("bigMacbr").innerHTML =  bigMacQty; //to be corrected
        document.getElementById("itemQtyjs").innerHTML =  currItemQuantity;
    }
  
   }
  
   //this is for the popup quantity customization for increase 1 quantity
  function plusQty(){
    currItemQuantity +=1;
    bigMacQty = currItemQuantity; //to be corrected
    document.getElementById("bigMacbr").innerHTML = bigMacQty; //to be corrected
      document.getElementById("itemQtyjs").innerHTML =  currItemQuantity;
    
  }
  
  function currItemQtyEdit(toEdit){ //not able to use
     currItemQuantity = document.getElementById(toEdit).innerHTML.value;
     document.getElementById("itemQtyjs").innerHTML = currItemQuantity;
  }
  
  function openPopUpCredit(){
    document.getElementById("creditInfo").style.display = "block";
  }
  
  function closePopUpCredit() {
     document.getElementById("creditInfo").style.display = "none";
  } 
  
  window.onclick = function(event) {
    if (event.target == document.getElementById("creditInfo")) {
      document.getElementById("creditInfo").style.display = "none";
    }
  }

//end js for cart page