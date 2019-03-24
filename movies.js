var fs = require("fs");
var axios = require("axios");

function myMovies(userInput){
    var movie = userInput;
    if (!movie){
        console.log("If you haven't watched 'Mr. Nobody,' then you should.")
        console.log("It's on Netflix!")
        movie = "Mr. Nobody"
    }
    var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(url).then(
        function (response){
            console.log("*********************\n")
            console.log("Movie Title: " +response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("\n**********************\n")

        }

    );
};
module.exports = myMovies;