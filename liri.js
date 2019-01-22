// Read and set environment variables
require('dotenv').config();
fs = require('fs');
keys = require('./keys');
request = require("request");

var request = require("request");


var userCommand = process.argv[2];
if (userCommand === "spotify-this-song"){
  var songName = process.argv[3];

  Spotify = require('node-spotify-api');

  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songs = data.tracks.items;
    
      console.log('artist:' + songs[0].album.artists[0].name);
      console.log('album:' + songs[0].album.name);
    

  });
}
else if (userCommand==="do-what-it-says"){
  var songName = "I Want it That Way";

  Spotify = require('node-spotify-api');

  var spotify = new Spotify(keys.spotify);
  // Make it so liri.js can take in one of the following commands:
  // `spotify-this-song`
  // `movie-this`
  // `do-what-it-says`

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songs = data.tracks.items;
    
      console.log('artist:' + songs[0].album.artists[0].name);
      console.log('album:' + songs[0].album.name);
  

  });
}
else {
  var movieName = process.argv[3];
 

  requestUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieName;
  request(requestUrl, function (err, res,data) {
    if (err) {
      return console.log('Error ocurred: ' + err);
    }
    var body =JSON.parse(data);
   console.log(body.Title);
   console.log(body.Released);
  // console.log(body.Rotten Tomatoes);
   console.log(body.imdbRating);
  //  Country where the movie was produced.
  console.log(body.Production);
  // * Language of the movie.
  console.log(body.Language);
  // * Plot of the movie.
  console.log(body.Actors);
  // * Actors in the movie.

  });
}







