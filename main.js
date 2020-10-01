const fetch = require("node-fetch");


// Use any ONE of these API's that needs an API key to get data.
//https://www.omdbapi.com/


// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key

// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://allsportsapi.com/
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api


// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.


// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.

// let usersInput = `hello`
// let url = `http://www.omdbapi.com/?s=${usersInput}&apikey=fe85c221`

// fetch(url)
// .then((response) =>  response.json()) //converts to json
// .then((movies) => console.log(movies))//shows whats logged in json format
// .catch((error)=> console.log(error));//err

async function pickAMovie(ui) {
    const url = `http://www.omdbapi.com/?s=${ui}&apikey=fe85c221`;
    const fetcher = await fetch(url);
    const jsonBorne = await fetcher.json(); //api data formed into json
    //console.log(jsonBorne);
    console.log(`The movie(s) that you've chosen to search with your keyword(s) are: \n`);
    jsonBorne.Search.filter((func) => func.Year < 2020).map((fill) => console.log(`${fill.Year}  ${fill.Title}`));
}
pickAMovie('love');














