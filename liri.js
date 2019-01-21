// Read and set environment variables
require('dotenv').config();
fs = require('fs');
keys = require('./keys');
var songName= process.argv[3];
var movie = process.arg[3];


Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
// Make it so liri.js can take in one of the following commands:
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
  var songs = data.tracks.items; 
  for(var i = 0; i < songs.length; i++){
    console.log('artist:' + songs[i].album.artists[0].name);
    console.log('album:' + songs[i].album.name);
  }

  });

