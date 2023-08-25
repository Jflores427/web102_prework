/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    // loop over each item in the data
    for(let game of games) {
        const gameObj = document.createElement("div");
        gameObj.classList.add("game-card");
        gameObj.innerHTML += ` <img class="game-img" src=${game.img}> 
                           <p> <strong> ${game.name} </strong> </p>
                           <p> <em>${game.description} </em> </p> 
                           <p> Backers: ${game.backers} </p>
                           <div class="progress-container">  
                                    <div class="progress-bar">.</div>
                                    <h4> ${ (game.pledged / game.goal) > 1 ? "100" : (game.pledged / game.goal * 100).toPrecision(3)}% </h4>  
                            </div> `
                           
      
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.appendChild(gameObj);
    }

    // Progress Bar Implementation
    const progressContainers = document.getElementsByClassName("progress-container");

    // Iterate through every progress Container and update the bar to reflect the pledged/goal percentage.
    for(let progressContainer of progressContainers) {
        const progressBar = progressContainer.firstElementChild;
        const progressDisplay = progressBar.nextSibling.nextSibling;
        progressBar.style.width = progressDisplay.innerHTML;
        if(Number(progressBar.style.width.substring(0, progressBar.style.width.length - 1)) < 1) {
            progressBar.style.color = "white";
        }
    }

        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games

addGamesToPage(GAMES_JSON);

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalBackers = GAMES_JSON.reduce((acc, game) => {
    return acc + game.backers;
}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML += `${totalBackers.toLocaleString("en-us")}`;


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
raisedCard.innerHTML = `$${GAMES_JSON.reduce( (acc, game) => {
    return acc + game.pledged;
}, 0).toLocaleString("en-US")}`;
// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = `${GAMES_JSON.length}`;

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const unfundedGames = GAMES_JSON.filter((game) => {
        return game.pledged < game.goal;
    });

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const fundedGames = GAMES_JSON.filter((game) => {
        return game.pledged >= game.goal;
    });

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(fundedGames);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button

unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const numOfUnfundedGames = GAMES_JSON.filter((game) => {
    return game.pledged < game.goal;
}).length;

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = `A total of $${GAMES_JSON.reduce((acc, game) => {
    return acc + game.pledged;
}, 0).toLocaleString("en-us")} has been raised for ${GAMES_JSON.length - numOfUnfundedGames} games${(numOfUnfundedGames !== 0) ? `. Currently, ${numOfUnfundedGames} remain unfunded. We need your help to fund these amazing games!` : `.` }`;

// create a new DOM element containing the template string and append it to the description container
const descriptionStr = document.createElement("p");
descriptionStr.innerHTML = displayStr;
descriptionContainer.appendChild(descriptionStr);
/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstGameElt = document.createElement("p");

firstGameElt.innerHTML = firstGame.name;
firstGameContainer.appendChild(firstGameElt);

// do the same for the runner up item
const secondGameElt = document.createElement("p");

secondGameElt.innerHTML = secondGame.name;
secondGameContainer.appendChild(secondGameElt);


// Implementation for Search Bar Feature

// Select the search bar element
const searchBar = document.getElementById("search-bar");

// gameCheck function that was made to filter out the list of games based on the search text
function gameCheck() {
    if(searchBar.value.length === 0) {
        showAllGames();
        return;
    }

    deleteChildElements(gamesContainer);

    const searchBarValue = `${searchBar.value}`;
    let re = new RegExp(searchBarValue, "i");
    const listOfGames = GAMES_JSON.filter((game) => {
        return game.name.search(re) === 0;
    });

    addGamesToPage(listOfGames);
    return;
}

// SearchResults function that used to correct an input delay bug for the displayed results
function searchResults() {
    setTimeout(gameCheck, 100);
}

searchBar.addEventListener("keydown", searchResults);
