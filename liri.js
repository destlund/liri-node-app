require("dotenv").config();
var keys = require('./keys.js');
var spotifyAPI = require('node-spotify-api');
var twitterAPI = require('twitter');

// function Spotify(id, secret) {
//     this.id = keys.spotify.id;
//     this.secret = keys.spotify.secret;
// }

// function Twitter(consumer_key, consumer_secret, access_token_key, access_token_secret) {
//     this.consumer_key = keys.twitter.consumer_key;
//     this.consumer_secret = keys.twitter.consumer_secret;
//     this.access_token_key = keys.twitter.access_token_key;
//     this.access_token_secret = keys.twitter.access_token_secret;
// }

var spotify = new spotifyAPI(keys.spotify);
var twitter = new twitterAPI(keys.twitter);
var input = process.argv;
var command = input[2];
var argument = input[3];


// This will show your last 20 tweets and when they were created at in your terminal/bash window
if (command === 'my-tweets') {
    console.log('Someday my tweets will come...');
    twitter.get('statuses/user_timeline', {screen_name: 'davidestlund'},
        function(error, tweets, response) {
            if (error) {
                console.log('something went wrong: ' + error);
            } else {
                for (i=0 ; i < tweets.length ; i++) {
                    console.log(tweets[i].text);                    
                }
            }
                // console.log(tweets);
            })

}

// This will show the following information about the song in your terminal/bash window: 
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
if (command === 'spotify-this-song') {
    console.log('getting a song');
    spotify.search({
        // id: spotify.id,
        // secret: spotify.secret,
        type: 'track',
        query: argument,
        function(err, data) {
            if (err){
                console.log('An error occurred: ' + err);
            } else {
            console.log(data);
            console.log('halp!')
            }
        }
    });
}

// This will output the following information to your terminal/bash window:
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.


// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.