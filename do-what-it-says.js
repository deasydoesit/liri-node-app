var fs = require("fs");

var doWhatItSays = function() { 
     return fs.readFileSync("random.txt", "utf8", function(err, data) {
                if (err) {
                    return console.log(err);
                }
                return data;
            });
}

module.exports = doWhatItSays; 
