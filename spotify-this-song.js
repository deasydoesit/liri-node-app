require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var spotifyThisSong = function(songName) {
    if (songName === undefined ) {
        console.log(`\n\n\nArtist Name: Fetty Wap`);
        console.log(`\nSong Name: Trap Queen`);
        console.log(`\nAlbum Name: Fetty Wap`);
        console.log(`\nSpotify Link to Song: https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL\n\n\n`);
    } else {
        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            } else {
                console.log(`\n\n\nArtist Name: ${data.tracks.items[0].album.artists[0].name}`);
                console.log(`\nSong Name: ${songName}`);
                console.log(`\nAlbum Name: ${data.tracks.items[0].album.name}`);
                console.log(`\nSpotify Link to Song: ${data.tracks.items[0].album.artists[0].external_urls.spotify}\n\n\n`);
            }
        });
    }
}

module.exports = spotifyThisSong;