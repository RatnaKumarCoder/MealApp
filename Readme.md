# Conventional Meal App implemented over MealDB API.
1. The Meal App contains 2 html pages index page and FavouriteList page.
2. The instruction detail page for the items is implemented over the index page.

# Functions and Functionalities in landing page(index page or homepage)

# Functionalities
    Home Page:-
        Search any meal from the API and display the search results on the frontend (as I type the search results should update, just like Google does for suggestions).
        Each search result of the meal should have a favourite button, clicking on which the meal should be added to “My favourite meals” (a list).
        On clicking any particular search result (any meal), open a new page with more information about that meal(meal page)

    Meal Detail Page:-
        Should show information about the meal like its name, photo, instructions, etc (these are must, rest you can add if you want).

# Functions

    search_N_Display():- To fetch and render the items from MealDB.

    addToFavourites():- To add to favourites and store those in local storage keep that list persistent.

    getRecipeDetails():- The fetch instruction details of particular item.

    displayRecipeDetails():- Function to display full details of a recipe from the data we got from getRecipeDetails() function.

    back_to_hompage():- Function for the feature of getting back to home page from the detail page.


# Functions and Functionalities in FavouriteList page:

# Functionalities:-
    My favourite meals Page:-
        Display a list of all the favourite meals.
        Make this list persistent (should have the same number of meals before and after closing the browser/refreshing the browser).
        Remove from favourites button: Each meal should have remove from favourites button, clicking on which should remove that meal from the list.

# Functions:-

    removeFromFavourites() :- Function to implement the --remove from list-- functionality.

    fetchFavourites() :- Function to fetch the data from api mealDB used itedID stored in the localstorage.

    displayFavourites() :- Function to implement the displaying of items in list.

# Live Link for this project:- https://ratnakumarcoder.github.io/MealApp/
# Data Base API used mealDB:- https://www.themealdb.com/api.php


