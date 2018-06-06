
require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var myTweets = function() {
    client.get('statuses/user_timeline', {screen_name: 'busterbutt1'}, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("\n" + tweets[i].text + "\n");
                console.log(tweets[i].created_at + "\n\n");
            }
        }
    }); 
}
module.exports = myTweets;