require("dotenv").config();

var myTweets = require("./my-tweets.js")
var spotifyThisSong = require("./spotify-this-song.js");
var movieThis = require("./movie-this.js");

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInputs = {};
for (var i = 2; i < process.argv.length; i++) {
    userInputs["input" + i] = process.argv[i];
}

// console.log("Hey this is my spotify object" + JSON.stringify(spotify, null, 2) + "\n\n\n\n");
// console.log("Hey this is my client(twitter) object" +JSON.stringify(client, null, 2) + "\n\n\n\n");

if (userInputs.input2 === "my-tweets") {
    myTweets();
    // var params = {screen_name: 'busterbutt1'};
    // client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //     if (!error) {
    //         for (var i = 0; i < tweets.length; i++) {
    //             console.log("\n" + tweets[i].text + "\n");
    //             console.log(tweets[i].created_at + "\n\n");
    //         }
    //     }
    // }); 
} else if (userInputs.input2 === "spotify-this-song") {
    spotifyThisSong(userInputs.input3);
    // if (userInputs.input3 === undefined ) {
    //     console.log(`\n\n\nArtist Name: Fetty Wap`);
    //     console.log(`\nSong Name: Trap Queen`);
    //     console.log(`\nAlbum Name: Fetty Wap`);
    //     console.log(`\nSpotify Link to Song: https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL\n\n\n`);
    // } else {
    //     spotify.search({ type: 'track', query: userInputs.input3 }, function(err, data) {
    //         if (err) {
    //         return console.log('Error occurred: ' + err);
    //         } else {
    //             console.log(`\n\n\nArtist Name: ${data.tracks.items[0].album.artists[0].name}`);
    //             console.log(`\nSong Name: ${userInputs.input3}`);
    //             console.log(`\nAlbum Name: ${data.tracks.items[0].album.name}`);
    //             console.log(`\nSpotify Link to Song: ${data.tracks.items[0].album.artists[0].external_urls.spotify}\n\n\n`);
    //         }
    //     });
    // }
} else if (userInputs.input2 === "movie-this") {
    movieThis(userInputs.input3);

} else if (userInputs.input2 === "do-what-it-says") {

} else {
    console.log("\n\n\nHey! Provide a proper command! We're looking for something in the following format: \n\n\n");
    console.log("      node liri.js <command>\n\n\n");
    console.log("<command>'s include 'my-tweets', 'spotify-this-song', 'movie-this', and 'do-what-it-says'.\n\n\n");
    console.log("If you pick the 'spotify-this-song' command, you also need to provide a song name, like so: \n\n\n");
    console.log("      node liri.js spotify-this-song 'Trap Queen'\n\n\n");
    console.log("If you pick the 'movie-this' command, you also need to provide a movie name in string format, like so: \n\n\n");
    console.log("      node liri.js movie-this 'Avatar'\n\n\n");
}
