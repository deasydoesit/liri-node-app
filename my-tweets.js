require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var myTweets = function() {
    client.get('statuses/user_timeline', {screen_name: 'busterbutt1'}, function(error, tweets, response) {
        if (!error) {
            console.log("\n\n\n");
            console.log("   -------------------------------------");
            for (var i = 0; i < tweets.length; i++) {
                console.log("\n   - " + tweets[i].text);
                console.log("\n   " + tweets[i].created_at + "\n");
                console.log("   -------------------------------------");
            }
            console.log("\n\n\n");
        }
    }); 
}
module.exports = myTweets;

