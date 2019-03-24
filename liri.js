require("dotenv").config();

//REQUIRE DATA FOR THE NPM
var fs = require("fs");


//variables to get import from the different APIS
var keys = require("./keys.js");
var mySpotify = require('./spotify.js');
var myMovies = require('./movies.js');
var myBands = require('./bands.js');


//USER INSERT REQUIREMENT
var userRequest = process.argv[2];
//User input
var userInput = process.argv.splice(3,process.argv.length).join(' ');

//Commands for the program

switch(userRequest){
    case "help":
    console.log ("Please use the following command to use the App\n"+
    "'concert-this': to search your favorite bands and artis concerts\n"+
    "'spotify-this-song': to search your favorite song on spotify\n"+
    "'movie-this': to search your favorite movie \n"+
    "'do-what-it-says': using command from random.txt \n"
    );
    break;

    case "concert-this":
    myBands(userInput);
    break;
    case "spotify-this-song":
    mySpotify(userInput);
    break;
    case "movie-this":
    myMovies(userInput);
    break;
    case "do-what-it-says":
    doWhatItSays();
    break;
    default:
    console.log("LIRI command not accepted please type node liri.js Help for more information");
};
    

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        //Return error if error occurs.
        if (error) {
            return console.log(error);
        }
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        
        // Each command is represented. Because of the format in the txt file, remove the quotes to run these commands. 
        if (dataArr[0] === "spotify-this-song") {
            var songcheck = dataArr[1].slice(1, -1);
            console.log("Song Check: "+songcheck)
            mySpotify(songcheck);
        } else if (dataArr[0] === "concert-this") {
            var venueName = dataArr[1].slice(1, -1);
            console.log("Venue Name: "+venueName)
            myConcert(venueName);
        } else if(dataArr[0] === "movie-this") {
            var movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            myMovies(movieName);
        }
    });
};
