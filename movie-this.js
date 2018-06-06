var request = require("request");

var movieThis = function (movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(`\n\n\nMovie Title: ${JSON.parse(body).Title}`);
        console.log(`Release Year: ${JSON.parse(body).Year}`);
        console.log(`IMDB Rating: ${JSON.parse(body).imdbRating}`);
        console.log(`Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
        console.log(`Country of Production: ${JSON.parse(body).Country}`);
        console.log(`Plot: ${JSON.parse(body).Plot}`);
        console.log(`Actors: ${JSON.parse(body).Actors}\n\n\n`);
    }
    });
}; 

module.exports = movieThis;

