var request = require("request");

var movieThis = function (movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body, null, 2));
    }
    });
}; 

module.exports = movieThis;

