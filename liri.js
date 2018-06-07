var fs = require("fs");

var myTweets = require("./my-tweets.js")
var spotifyThisSong = require("./spotify-this-song.js");
var movieThis = require("./movie-this.js");

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

    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(",");  
        if (dataArr[0] === "spotify-this-song") {
            spotifyThisSong(dataArr[1]);
        } else if (dataArr[0] === "my-tweets") {
            myTweets();
        } else {
            movieThis(dataArr[1]);
        }
        });

} else {
    console.log("\n\n\nHey! Provide a proper command! We're looking for something in the following format: \n\n\n");
    console.log("      node liri.js <command>\n\n\n");
    console.log("<command>'s include 'my-tweets', 'spotify-this-song', 'movie-this', and 'do-what-it-says'.\n\n\n");
    console.log("If you pick the 'spotify-this-song' command, you also need to provide a song name, like so: \n\n\n");
    console.log("      node liri.js spotify-this-song 'Trap Queen'\n\n\n");
    console.log("If you pick the 'movie-this' command, you also need to provide a movie name in string format, like so: \n\n\n");
    console.log("      node liri.js movie-this 'Avatar'\n\n\n");
}
