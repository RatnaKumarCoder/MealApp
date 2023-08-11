// required dom elements
var mealSection=document.getElementById("meal-section");
var mealName=document.getElementById("input-meal");
var search=document.getElementById("search");
var recipe_detail=document.getElementById("recipe-details-block");


// To fetch and render the items
async function search_N_Display(){
    
    mealSection.innerHTML= "";

    let name=mealName.value;

    let response= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+name);

    let data= await response.json();

    console.log(data.meals);

    for(let one of data.meals){

        let div=document.createElement("div");

        div.id=one.idMeal;

        div.className="shadow-lg mx-3 my-2";
        div.innerHTML=`
        <div class="item-image">
                <img src="${one.strMealThumb}" alt="food" id="image">
        </div> 
        <div class="meal-name ms-1 mb-2">
            <h3 class="meal-heading text-wrap text-light">${one.strMeal}</h3>
            <p class="m-0 p-0 text-light">Type: ${one.strArea}</p>
            <p class="m-0 p-0 text-light">Category: ${one.strCategory}</p>
            <div id="recipe-details" type="submit" class="btn btn-sm  text-bg-dark recipe-button  my-2 text-light"> View Recipe Details </div>
        </div>
        <button id="favourite" type="submit" class="btn btn-sm btn-outline-primary favourite-button mx-2 my-2"> Add To Favourites </button>
        `;

        mealSection.append(div);

    }


}

// To add to favourites and keep that list persistent
function addToFavourites(event){
    
    if (!event.target.classList.contains("favourite-button")) {
        return;
    }   

    let itemId=event.target.parentElement.id;

    let AllFavouriteItems;

    if (localStorage.getItem("favourites") === null) {
        AllFavouriteItems = [];
    } 
    else {
        AllFavouriteItems = JSON.parse(localStorage.getItem("favourites"));
    }

    // check if the mealId is already present
    if (AllFavouriteItems.indexOf(itemId)!== -1) {
        window.alert("Item Already added to the favourites");
        return;
    }

    AllFavouriteItems.push(itemId);
    localStorage.setItem("favourites", JSON.stringify(AllFavouriteItems));
    window.alert("Successfully Added to Favourites");

}


// The fetch instruction details of particular item
function getRecipeDetails(event){

    if (!event.target.classList.contains("recipe-button")) {
        return;
    } 

    let itemId=event.target.parentElement.parentElement.id;

    console.log(itemId);

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+itemId).then((response)=>response.json()).then((data)=>{displayRecipeDetails(data.meals[0]); console.log(data);});
}

function displayRecipeDetails(item){

    recipe_detail.innerHTML="";

    mealSection.classList.add("no-show-recipe");

    let div1=document.createElement('div');

    div1.innerHTML=`
    <div class="recipe-image m-2">
    <img src="${item.strMealThumb}" id="image"/>
    </div>
    <div class="recipe-text-container m-2">
        <h2 class="text-light text-center">${item.strMeal}</h2>
        <h4 class="text-light text-center">${item.strCategory}</h4>
        <p class="text-light">${item.strInstructions}</p>
    </div>
    <div class="m-2">
        <p><a href="${item.strSource}">For more details</a></p>
        <p><a hres="${item.strYoutube}>Watch making video</a></p>
        <div id="back-btn" type="submit" class="btn btn-sm text-bg-dark back-button text-light"> Back to homepage </div>
    </div>`;

    recipe_detail.append(div1);

    recipe_detail.classList.add("show-recipe");

}

// Function for the feature of getting back to home page from the detail page
function back_to_hompage(event){

    if (!event.target.classList.contains("back-button")) {
        return;
    } 

    recipe_detail.classList.remove("show-recipe");

    mealSection.classList.remove("no-show-recipe");

}



// clcik events
search.addEventListener('click',search_N_Display);
mealSection.addEventListener('click ',addToFavourites);
mealSection.addEventListener('click',getRecipeDetails);
recipe_detail.addEventListener('click',back_to_hompage);
