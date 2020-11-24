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
    showValidRestaurants();
    showPreferenceChips();
    prefs.style.display = "none";
    rests.style.display = "inline";
}

function restaurantsPageBack() {
    rests.style.display = "none";
    prefs.style.display = "inline";
}

function menuPageClick() {
    rests.style.display = "none";
    menu.style.display = "inline";
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
    var chipPlus = "<div class=\"chip\" onclick=\"restaurantsPageBack()\"><span >&plus;</span></div>"

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


// js for cart page below

//below removeItem 1-5 are for remove the itemBoxes
function removeItem1() {
    var deleteItem1 = document.getElementById("item1");
    deleteItem1.remove();
  }
  
  function removeItem2(){
    var deleteItem2 = document.getElementById("item2");
    deleteItem2.remove();
  }

  function removeItem3(){
    var deleteItem3 = document.getElementById("item3");
    deleteItem3.remove();
  }

  function removeItem4(){
    var deleteItem4 = document.getElementById("item4");
    deleteItem4.remove();
  }

  function removeItem5(){
    var deleteItem5 = document.getElementById("item5");
    deleteItem5.remove();
  }
 //end of itemboxes deletion


  var quantity = 3;
//this is for the popup quantity customization for decrease 1 quantity
function minusQty() {
    quantity -= 1;
    document.getElementById("quantity").innerHTML = quantity;
}

//this is for the popup quantity customization for increase 1 quantity
function plusQty(){
    quantity +=1;
    document.getElementById("quantity").innerHTML = quantity;

}

//this is for the popup quantity cusomization to show
function openPopUpQty(){
    document.getElementById("qtyInfo").style.display = "block";
}

//this is for the popup quantity cusomization to close
function closePopUpQty() {
     document.getElementById("qtyInfo").style.display = "none";
} 

//end js for cart page