// ------------------
// Global Variables
// ------------------

// Page Divs
var addr = document.getElementById("addrPage");
var prefs = document.getElementById("categoriesPage");
var rests = document.getElementById("restaurantsPage");
var menu = document.getElementById("menuPage");
var cart = document.getElementById("cartPage");
var head = document.getElementById("mainHeader");
var cartButton = document.getElementById("cartButton");
var currentPage; 
var count = 0;

// Array holding names of selected cuisine preferences
var selectedPrefs = [];

// Array holding selected dish from restaurant's menu
var selectedDishes = [];

// Reference to current menu of restaurant user is looking at
var currentMenu = null;

var currentRestaurant = null;

const MAX_FEE = 15;

// Used for displaying/hiding menu options
var displayMeals = true;
var displayMains = true;
var displaySides = true;
var displayBeverages = true;
var displayDesserts = true;
var displaySpecials = true;


// Restaurant Data Objects

var mcdonaldsObj = {
    name: "McDonald's",
    img: "./Images/McDonald's_logo.png",
    description: "Your favourite place.",
    deliveryFee: 2.00,
    deliveryTime: "20-25",
    distance: 2,
    menu: {
        meals: [
            {
                name: "Big Mac Combo",
                price: 7.75
            },
            {
                name: "Quarter Pounder Combo",
                price: 6.5
            }
        ],
        mains: [
            {
                name: "Big Mac",
                price: 5.00,
                fID: "03"
            },
            {
                name: "Quarter Pounder",
                price: 4.50,
                fID: "04"
            },
            {
                name: "McChicken",
                price: 2.50,
                fID: "05"
            }
        ],
        sides: [
            {
                name: "Fries",
                price: 2.00,
                fID: "06"
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00,
                fID: "07"
            },
            {
                name: "Coke",
                price: 1.00,
                fID: "08"
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50,
                fID: "09"
            },
            {
                name: "McFlurry",
                price: 4.00,
                fID: "10"
            }
        ],
        specials: [
            {
                name: "Happy Meal",
                price: 2.50,
                fID: "11"
            },
            {
                name: "Junior Chicken",
                price: 2.50,
                fID: "12"
            }
        ]
    }
};

var burgerKingObj = {
    name: "Burger King",
    img: "./Images/BurgerKing_logo.png",
    description: "Eat like a king",
    deliveryFee: 3.00,
    deliveryTime: "5-10",
    distance: 3.00,
    menu: {
        meals: [
            {
                name: "Whopper Meal",
                price: 7.75,
                fID: "13"
            },
            {
                name: "Bacon Whopper Meal",
                price: 6.50,
                fID: "14"
            }
        ],
        mains: [
            {
                name: "Whopper",
                price: 5.00,
                fID: "15"
            },
            {
                name: "Quarter Pounder",
                price: 4.50,
                fID: "16"
            },
            {
                name: "Whopper Jr",
                price: 2.50,
                fID: "17"
            }
        ],
        sides: [
            {
                name: "Fries",
                price: 2.00,
                fID: "18"
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00,
                fID: "19"
            },
            {
                name: "Coke",
                price: 1.00,
                fID: "20"
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50,
                fID: "21"
            },
            {
                name: "Vanilla Cone",
                price: 4.00,
                fID: "22"
            }
        ],
        specials: [
            {
                name: "BBQ Bacon Whopper",
                price: 2.50,
                fID: "23"
            },
            {
                name: "Cheeseburger",
                price: 2.50,
                fID: "24"
            }
        ]
    }
};

var awObj = {
    name: "A & W",
    img: "./Images/A&W_logo.png",
    description: "A Family Place",
    deliveryFee: 4.00,
    deliveryTime: "10-15",
    distance: 1,
    menu: {
        meals: [
            {
                name: "Papa Burger Meal",
                price: 7.75,
                fID: "25"
            },
            {
                name: "Teen Burger Meal",
                price: 6.50,
                fID: "26"
            }
        ],
        mains: [
            {
                name: "Papa Burger",
                price: 5.00,
                fID: "27"
            },
            {
                name: "Mama Burger",
                price: 4.50,
                fID: "28"
            },
            {
                name: "Teen Burger",
                price: 2.50,
                fID: "29"
            }
        ],
        sides: [
            {
                name: "Fries",
                price: 2.00,
                fID: "30"
            },
            {
                name: "Onion Rings",
                price: 3.50,
                fID: "31"
            }
        ],
        beverages: [
            {
                name: "Root Beer",
                price: 1.00,
                fID: "32"
            },
            {
                name: "Coke",
                price: 1.00,
                fID: "33"
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50,
                fID: "34"
            },
            {
                name: "Root Beer Float",
                price: 4.00,
                fID: "35"
            }
        ],
        specials: [
            {
                name: "Baby Burger",
                price: 2.50,
                fID: "36"
            },
            {
                name: "Junior Burger",
                price: 2.50,
                fID: "37"
            }
        ]
    }
};

var dairyQueenObj = {
    name: "Dairy Queen",
    img: "./Images/DairyQueen_logo.png",
    description: "Treat yo self",
    deliveryFee: 5.00,
    deliveryTime: "10-15",
    distance: 5,
    menu: {
        meals: [
            {
                name: "Chicken Strip Combo",
                price: 7.75,
                fID: "38"
            },
            {
                name: "Poutine Meal",
                price: 6.50,
                fID: "39"
            }
        ],
        mains: [
            {
                name: "Poutine",
                price: 5.00,
                fID: "40"
            },
            {
                name: "Chicken Strips",
                price: 4.50,
                fID: "41"
            },
            {
                name: "Cheeseburger",
                price: 2.50,
                fID: "42"
            }
        ],
        sides: [
            {
                name: "Fries",
                price: 2.00,
                fID: "43"
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00,
                fID: "44"
            },
            {
                name: "Milkshake",
                price: 1.00,
                fID: "45"
            }
        ],
        desserts: [
            {
                name: "Blizzard",
                price: 3.50,
                fID: "46"
            },
            {
                name: "Dilly Bar",
                price: 4.00,
                fID: "47"
            }
        ],
        specials: [
            {
                name: "Fudge Brownie Blizzard",
                price: 2.50,
                fID: "48"
            },
            {
                name: "3pc Chicken Strips",
                price: 2.50,
                fID: "49"
            }
        ]
    }
};

var kfcObj = {
    name: "KFC",
    img: "./Images/KFC_Logo.png",
    description: "Finger Lickin Good",
    deliveryFee: 3.00,
    deliveryTime: "1",
    distance: 2,
    menu: {
        meals: [
            {
                name: "12pc Chicken Meal",
                price: 7.75,
                fID: "50"
            },
            {
                name: "8pc Chicken Meal",
                price: 6.50,
                fID: "51"
            }
        ],
        mains: [
            {
                name: "Popcorn Chicken",
                price: 5.00,
                fID: "52"
            },
            {
                name: "Chicken Tenders",
                price: 4.50,
                fID: "53"
            },
            {
                name: "Chicken Wings",
                price: 2.50,
                fID: "54"
            }
        ],
        sides: [
            {
                name: "Mashed Potatoes",
                price: 2.00,
                fID: "55"
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00,
                fID: "56"
            },
            {
                name: "Coke",
                price: 1.00,
                fID: "56"
            }
        ],
        desserts: [
            {
                name: "Chocolate Chip Cake",
                price: 3.50,
                fID: "57"
            },
            {
                name: "Cookies",
                price: 4.00,
                fID: "58"
            }
        ],
        specials: [
            {
                name: "Party Bucket",
                price: 2.50,
                fID: "59"
            },
            {
                name: "Hot Wings",
                price: 2.50,
                fID: "60"
            }
        ]
    }
};

var popeyesObj = {
    name: "Popeye's",
    img: "./Images/Popeyes_logo.png",
    description: "Louisiana Chicken",
    deliveryFee: 4.00,
    deliveryTime: "30",
    distance: 15,
    menu: {
        meals: [
            {
                name: "Chicken Sandwich Combo",
                price: 7.75,
                fID: "61"
            },
            {
                name: "Signature Chicken Combo",
                price: 6.50,
                fID: "62"
            }
        ],
        mains: [
            {
                name: "Chicken Sandwich",
                price: 5.00,
                fID: "63"
            },
            {
                name: "6pc Chicken Tenders",
                price: 4.50,
                fID: "64"
            },
            {
                name: "4pc McChicken",
                price: 2.50,
                fID: "65"
            }
        ],
        sides: [
            {
                name: "Fries",
                price: 2.00,
                fID: "66"
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00,
                fID: "67"
            },
            {
                name: "Coke",
                price: 1.00,
                fID: "68"
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50,
                fID: "69"
            }
        ],
        specials: [
            {
                name: "Junior Chicken Sandwich",
                price: 2.50,
                fID: "70"
            }
        ]
    }
};

var marybrownsObj = {
    name: "Mary Brown's",
    img: "./Images/MaryBrowns_logo.png",
    description: "Made Fresh From Scratch",
    deliveryFee: 2.00,
    deliveryTime: "7",
    distance: 7,
    menu: {
        meals: [
            {
                name: "Big Mary Combo",
                price: 7.75
            },
            {
                name: "Spicy Big Mary Combo",
                price: 6.50
            }
        ],
        mains: [
            {
                name: "Big Mary",
                price: 5.00
            },
            {
                name: "Popcorn Chicken",
                price: 4.50
            },
            {
                name: "Chicken Fingers",
                price: 2.50
            }
        ],
        sides: [
            {
                name: "Taters",
                price: 2.00
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00
            },
            {
                name: "Coke",
                price: 1.00
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50
            },
            {
                name: "Brownies",
                price: 4.00
            }
        ],
        specials: [
            {
                name: "Chicken Fingers w. Taters",
                price: 2.50
            }
        ]
    }
};

var littlecaesarsObj = {
    name: "Little Caesar's",
    img: "./Images/LittleCaesars_logo.png",
    description: "Pizza! Pizza!",
    deliveryFee: 5.00,
    deliveryTime: "10",
    distance: 3,
    menu: {
        meals: [
            {
                name: "Hawaiian Pizza with Cheesebread",
                price: 7.75
            }
        ],
        mains: [
            {
                name: "Great Canadian Pizza",
                price: 5.00
            },
            {
                name: "Meatlovers Pizza",
                price: 4.50
            },
            {
                name: "Cheese Pizza",
                price: 2.50
            }
        ],
        sides: [
            {
                name: "Cheese Bread",
                price: 2.00
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00
            },
            {
                name: "Coke",
                price: 1.00
            }
        ],
        desserts: [
            {
                name: "Cinnamon Bites",
                price: 3.50
            }
        ],
        specials: [
            {
                name: "Garlic Cheesy Bread",
                price: 2.50
            }
        ]
    }
};

var dominosObj = {
    name: "Domino's",
    img: "./Images/Dominos_logo.png",
    description: "Its what we do!",
    deliveryFee: 2.00,
    deliveryTime: "7",
    distance: 3,
    menu: {
        meals: [
            {
                name: "Cheese Pizza Combo",
                price: 7.75
            }
        ],
        mains: [
            {
                name: "Pepperoni Pizza",
                price: 5.00
            },
            {
                name: "Hawaiin Pizza",
                price: 4.50
            },
            {
                name: "Cheese Pizza",
                price: 2.50
            }
        ],
        sides: [
            {
                name: "Cheese Bread",
                price: 2.00
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00
            },
            {
                name: "Coke",
                price: 1.00
            }
        ],
        desserts: [
            {
                name: "Cinnamon Bites",
                price: 3.50
            },
            {
                name: "Chocolate Lava Cake",
                price: 4.00
            }
        ],
        specials: [
            {
                name: "Mini Pizza",
                price: 2.50
            },
            {
                name: "Parmasean Bread",
                price: 2.50
            }
        ]
    }
};

var tacodelmarObj = {
    name: "Taco Del Mar",
    img: "./Images/TacoDelMar_logo.png",
    description: "Its taco time",
    deliveryFee: 7.00,
    deliveryTime: "4",
    distance: 1,
    menu: {
        meals: [
            {
                name: "Street Taco Combo",
                price: 7.75
            },
            {
                name: "Bean Burrito Combo",
                price: 6.50
            }
        ],
        mains: [
            {
                name: "Classic Tacos",
                price: 5.00
            },
            {
                name: "Baked Burrito",
                price: 4.50
            },
            {
                name: "Taco Salad",
                price: 2.50
            }
        ],
        sides: [
            {
                name: "Nachos",
                price: 2.00
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00
            },
            {
                name: "Coke",
                price: 1.00
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50
            },
            {
                name: "Churro",
                price: 4.00
            }
        ],
        specials: [
            {
                name: "Burrito Bowl",
                price: 2.50
            },
            {
                name: "Loaded Nachos",
                price: 2.50
            }
        ]
    }
};

var qdobaObj = {
    name: "Qdoba",
    img: "./Images/Qdoba_logo.png",
    description: "Its what we do!",
    deliveryFee: 3.00,
    deliveryTime: "10",
    distance: 7,
    menu: {
        meals: [
            {
                name: "Taco Combo",
                price: 7.75
            },
            {
                name: "Fajita Combo",
                price: 6.50
            }
        ],
        mains: [
            {
                name: "Burrito Bowl",
                price: 5.00
            },
            {
                name: "Fish Tacos",
                price: 4.50
            },
            {
                name: "Chicken Bowl",
                price: 2.50
            }
        ],
        sides: [
            {
                name: "Chips & Queso",
                price: 2.00
            }
        ],
        beverages: [
            {
                name: "Pepsi",
                price: 1.00
            },
            {
                name: "Coke",
                price: 1.00
            }
        ],
        desserts: [
            {
                name: "Apple Pie",
                price: 3.50
            },
            {
                name: "Churro",
                price: 4.00
            }
        ],
        specials: [
            {
                name: "Mini Fajitas",
                price: 2.50
            },
            {
                name: "Nacho Platter",
                price: 2.50
            }
        ]
    }
};

// ------------
// Functions
// ------------

function categoriesPageClick() {
    addr.style.display = "none";
    prefs.style.display = "inline";
    head.style.display = "block";
    currentPage = prefs;
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
    currentPage = rests;
}

function menuPageClick(name) {
    rests.style.display = "none";
    menu.style.display = "inline";
    cartButton.style.display = "block";
    insertRestaurantInfo(name);
    currentPage = menu;
}

function cartClick() {
    menu.style.display = "none";
    cart.style.display = "inline";
    cartButton.style.display = "none";
    currentPage = cart;
    fillCart();
}

function prevPage() {
    switch(currentPage) {
        
        case addr:    
            break;

        case prefs:
            prefs.style.display = "none";
            addr.style.display = "inline";
            head.style.display = "none";
            currentPage = addr;
            break;

        case rests:
            rests.style.display = "none";
            prefs.style.display = "inline";
            currentPage = prefs;
            break;

        case menu:
            menu.style.display = "none";
            rests.style.display = "inline";
            cartButton.style.display = "none";
            currentPage = rests;
            break;
    
        case cart:
            cart.style.display = "none";
            menu.style.display = "inline";
            cartButton.style.display = "block";
            currentPage = menu;
            break;
        default:
            break;
    }
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
    var chipPlus = "<div class=\"chip\" onclick=\"prevPage()\"><span>&plus;</span></div>"

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
        case 'mcdonalds':
            restaurant = mcdonaldsObj;
            break;
        case 'burgerking':
            restaurant = burgerKingObj;
            break;
        case 'aandw':
            restaurant = awObj;
            break;
        case 'dairyqueen':
            restaurant = dairyQueenObj;
            break;
        case 'kfc':
            restaurant = kfcObj;
            break;
        case 'popeyes':
            restaurant = popeyesObj;
            break;
        case 'marybrowns':
            restaurant = marybrownsObj;
            break;
        case 'littlecaesars':
            restaurant = littlecaesarsObj;
            break;
        case 'dominos':
            restaurant = dominosObj;
            break;
        case 'tacodelmar':
            restaurant = tacodelmarObj;
            break;
        case 'qdoba':
            restaurant = qdobaObj;
            break;
        default:
            // this should never execute, but....
            // display mcdonalds just in case
            restaurant = mcdonaldsObj;
            break;
    }

    // Build up the string of html to insert
    infoHTML += `<img src="${restaurant.img}" width=70px height=70px style="margin-right:25px">`;
    infoHTML += `<p id="RestaurantName">${restaurant.name}</p>`;
    infoHTML += `<div id="RestaurantSaying" >`;
    infoHTML += `<p>${restaurant.description}</p>`;
    infoHTML += `</div>`;
    infoHTML += `<div id="restaurantDescription" style = "height: 150px">`;
    infoHTML += `<p>Distance: ${restaurant.distance}km away</p>`;
    infoHTML += `<p>Est. Delivery Time: 20-25 min</p>`;
    infoHTML += `<p>Delivery Fee: $${restaurant.deliveryFee}</p>`;
    infoHTML += `</div>`;

    // Insert the html into the document
    restInfoDiv.innerHTML = infoHTML;

    currentRestaurant = restaurant;
    currentMenu = restaurant.menu;

    // Call a function to insert the restaurants menu
    resetDishDisplay();

    insertMenuItems(currentMenu);
}

function addItemToCart(dishName, dishPrice) {
    var alreadyExists = false;

    // Check if item already exists in cart
    // If so, increase quantity by 1
    for(var item of selectedDishes){
        if(item.name == dishName && item.price == dishPrice){
            alreadyExists = true;
            item.quantity++;
        }
    }

    // If the item doesnt exist, add it
    if(!alreadyExists){
        selectedDishes.push({
            name: dishName,
            price: dishPrice,
            quantity: 1
        });
    }
}

function insertMenuItems(restMenu) {
    var menuItemsDiv = document.getElementById("MenuItems");
    var outputHTML = "";
    var dish; // current dish being examined
    
    if(displayMeals){
        // Add all meals
        for(dish of restMenu.meals){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/'A'combo.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }
    

    if(displayMains){
        // Add all mains
        for(dish of restMenu.mains){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/'A'combo.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }

    if(displaySides){
        // Add all sides
        for(dish of restMenu.sides){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/'A'combo.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }

    if(displayBeverages){
        // Add all beverages
        for(dish of restMenu.beverages){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/softDrink.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }


    if(displayDesserts){
        // Add all desserts
        for(dish of restMenu.desserts){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/softDrink.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }


    if(displaySpecials){
        // Add all specials
        for(dish of restMenu.specials){
            outputHTML += `<div class=item>`;
            outputHTML += `<div class="itemImg">`;
            outputHTML += `<img src="./Images/'A'combo.jpeg" width="70px" height="70px" style="margin-right: 25px;">`;
            outputHTML += `</div>`;
            outputHTML += '<div class=itemText>';
            outputHTML += `<p class="foodName">${dish.name}</p>`;
            outputHTML += `<p class="foodPrice">$${dish.price}</p>`;
            outputHTML += `</div>`;
            outputHTML += `<div class="itemAdd">`;
            outputHTML += `<button type="button" onclick='addItemToCart("temp",${dish.price})'>Add to Cart +</button>`.replace("temp", dish.name);
            outputHTML += `</div>`;
            outputHTML += `</div>`;
        }
    }

    // Insert the food items into the document
    menuItemsDiv.innerHTML = outputHTML;

}

function refineDishDisplay(menuCatagory) {
    falsifyDishDisplay();
    switch(menuCatagory) {
        case "meals": 
            displayMeals = true;
            break;
        case "mains":
            displayMains = true;
            break;
        case "sides": 
            displaySides = true
            break;
        case "beverages":
            displayBeverages = true;
            break;
        case "desserts":
            displayDesserts = true;
            break;
        case "specials":
            displaySpecials = true;
            break;
        case "all":
            resetDishDisplay();
            break;
        default:
            break;
    }
    
    insertMenuItems(currentMenu);
}

function falsifyDishDisplay(){
    displayMeals = false;
    displayMains = false;
    displaySides = false;
    displayBeverages = false;
    displayDesserts = false;
    displaySpecials = false;
}

function resetDishDisplay(){
    displayMeals = true;
    displayMains = true;
    displaySides = true;
    displayBeverages = true;
    displayDesserts = true;
    displaySpecials = true;
}


// js for cart page below

function fillCart(){
    var cartItemsDiv = document.getElementById("itemList");
    var costAmountDiv = document.getElementById("costAmount");
    var costHTML = "";
    var itemHTML = "";
    var totalCost = 0.0;

    for(var cartItem of selectedDishes){
        if(cartItem.quantity > 0){
            itemHTML += `<div class="itemCard">`;
            itemHTML += `<img class="itemPic" src="./Images/FoodItemPlaceholder.png">`;
            itemHTML += `<p style="margin-left:5%">${cartItem.name}</p>`;    
            itemHTML += `<p style="margin-left:5%">$${(cartItem.price * cartItem.quantity).toFixed(2)} <a style="float:right; margin-right:5% ">Qty: ${cartItem.quantity}</a></p>`;
            itemHTML += `<button id="editCart" onclick='plusCartItem("name", ${cartItem.price})'>+</button>`.replace("name", cartItem.name);
            itemHTML += `<div class="emptyBlock"></div>`;
            itemHTML += `<button id="deleteCart" onclick='deleteCartItem("name", ${cartItem.price})'>-</button>`.replace("name", cartItem.name);
            itemHTML += `</div>`;

            totalCost += cartItem.price * cartItem.quantity;
        }
        
    }

    costHTML += `<p>$${totalCost.toFixed(2)}</p>`;
    costHTML += `<p>$${(totalCost * 0.05).toFixed(2)}</p>`;
    costHTML += `<p>$${(totalCost * 0.07).toFixed(2)}</p>`;
    costHTML += `<p>$${currentRestaurant.deliveryFee.toFixed(2)}</p>`;
    costHTML += `<p>$${((totalCost + currentRestaurant.deliveryFee) * 1.12).toFixed(2)}</p>`;

    cartItemsDiv.innerHTML = itemHTML;
    costAmountDiv.innerHTML = costHTML;
}

function deleteCartItem(dishName, dishPrice){
    for(var cartItem of selectedDishes){
        if(cartItem.name == dishName && cartItem.price == dishPrice && cartItem.quantity > 0){
            cartItem.quantity--;
        }
    }
    fillCart();
}

function plusCartItem(dishName, dishPrice){
    for(var cartItem of selectedDishes){
        if(cartItem.name == dishName && cartItem.price == dishPrice && cartItem.quantity > 0){
            cartItem.quantity++;
        }
    }
    fillCart();
}

//end js for cart page

function changeColour(id) {
    count++;
    var stuff = document.getElementById(id);
    if (count == 1) {
        stuff.style.backgroundColor = "green";
    } else if (count == 3) {
        stuff.style.backgroundColor = "red";
        count = 0;
    }
}   