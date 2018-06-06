var fs = require("fs");

function DoWhatItSays () { 
    
    fs.readFile("random.txt", "utf8", function(err, data) {

    if (err) {
        return console.log(err);
    }

    var dataArr = data.split(",");  
    return dataArr;
    
    });
}

module.exports = DoWhatItSays;