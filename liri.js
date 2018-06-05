require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log("Hey this is my spotify object" + JSON.stringify(spotify, null, 2) + "\n\n\n\n");
console.log("Hey this is my client(twitter) object" +JSON.stringify(client, null, 2) + "\n\n\n\n");