require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var spotifyThisSong = function(songName) {
    if (songName === undefined ) {
        console.log(`\n\n\n   Artist Name: Fetty Wap`);
        console.log(`   Song Name: Trap Queen`);
        console.log(`   Album Name: Fetty Wap`);
        console.log(`   Spotify Link to Song: https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL\n\n\n`);
    } else {
        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            } else {
                console.log(`\n\n\n   Artist Name: ${data.tracks.items[0].album.artists[0].name}`);
                console.log(`   Song Name: ${songName}`);
                console.log(`   Album Name: ${data.tracks.items[0].album.name}`);
                console.log(`   Spotify Link to Song: ${data.tracks.items[0].album.artists[0].external_urls.spotify}\n\n\n`);
            }
        });
    }
}

module.exports = spotifyThisSong;