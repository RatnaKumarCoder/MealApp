var favourites=document.getElementById("favourite-container");

// function to implement the --remove from list-- functionality
function removeFromFavourites(event){

    if (!event.target.classList.contains("favourite-button")) {
        return;
    }

    let itemId=event.target.parentElement.id;

    let favItems=[];
    favItems=JSON.parse(localStorage.getItem("favourites"));

    let new_favourites=favItems.filter((id)=> id !== itemId);

    localStorage.setItem("favourites", JSON.stringify(new_favourites));

    favourites.innerHTML="";

    fetchFavourites();

    alert("successfully removed from favourites");

}


// function to implement the displaying of items in list
function displayFavourites(items){

    for(let one of items.meals){

        let div=document.createElement("div");

        div.className="mx-3 my-3 fav-item";

        div.id=one.idMeal;

        div.innerHTML=`
        <div id="item-image">
            <img src="${one.strMealThumb}" alt="food" id="image">
        </div> 
        <div class="meal-name ms-1 mb-2">
            <h3 class="meal-heading text-light mt-1">${one.strMeal}</h3>
            <p class="m-0 p-0 text-light">Type: ${one.strArea}</p>
            <p class="m-0 p-0 text-light">Category: ${one.strCategory}</p>
        </div>
        <button id="remove" type="submit" class="btn btn-sm btn-outline-primary favourite-button mx-2 my-2 text-bg-light"> Remove from Favourites </button>
        `;

        favourites.append(div);
    }

}


// function to fetch the data from api of mealDB
function fetchFavourites(){

    let favItems=localStorage.getItem("favourites");

    if(favItems==='[]'){

        h2=document.createElement('h2');

        h2.innerHTML=`<h2 class="text-danger mx-auto">OOPS!! Your Favourite List is Empty</h2>

        <a href="index.html" class="fs-5 text-decoration-none"><p class="text-center my-5">Homepage</p></a>`;

        favourites.append(h2);

        return;
    }

    itemId=JSON.parse(favItems);

    console.log(itemId);

    for(let id of itemId){
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id).
        then((response)=>response.json()).then((data)=>{console.log(data);
            displayFavourites(data);});
    }


}

fetchFavourites();

// event listener for click action on remove button
document.addEventListener('click',removeFromFavourites);