
//Required modules
//---------------------------------------
var fs = require("fs");

var myTweets = require("./my-tweets.js")
var spotifyThisSong = require("./spotify-this-song.js");
var movieThis = require("./movie-this.js");
var doWhatItSays = require("./do-what-it-says.js");
var error = require("./error.js");
//---------------------------------------

var userInputs = {};
for (var i = 2; i < process.argv.length; i++) {
    userInputs["input" + i] = process.argv[i];
}

if (userInputs.input2 === "my-tweets") {

    myTweets();

} else if (userInputs.input2 === "spotify-this-song") {

    spotifyThisSong(userInputs.input3);

} else if (userInputs.input2 === "movie-this") {

    if (userInputs.input3) {
        movieThis(userInputs.input3);
    } else {
        movieThis("Mr. Nobody");
    }

} else if (userInputs.input2 === "do-what-it-says") {

    var dataArr = doWhatItSays().split(",");

    if (dataArr[0] === "spotify-this-song") {
        spotifyThisSong(dataArr[1]);
    } else if (dataArr[0] === "my-tweets") {
        myTweets();
    } else {
        movieThis(dataArr[1]);
    }

} else {

    error();
    
}
