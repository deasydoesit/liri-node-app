function error() {
    console.log("\n\n\n   - Hey! Provide a proper command! We're looking for something in the following format: \n");
    console.log("      node liri.js <command>\n");
    console.log("   - <command>'s include 'my-tweets', 'spotify-this-song', 'movie-this', and 'do-what-it-says'.\n");
    console.log("   - If you pick the 'spotify-this-song' command, you also need to provide a song name, like so: \n");
    console.log("      node liri.js spotify-this-song 'Trap Queen'\n");
    console.log("   - If you pick the 'movie-this' command, you also need to provide a movie name in string format, like so: \n");
    console.log("      node liri.js movie-this 'Avatar'\n\n\n");
}

module.exports = error;