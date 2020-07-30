var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://spyfall-2.firebaseio.com"
});

var config = {
    apiKey: "AIzaSyAz9tGeCMt2wtOfTky2EZsyfy-wTwfJyOs",
    authDomain: "spyfall-2.firebaseapp.com",
    databaseURL: "https://spyfall-2.firebaseio.com",
    storageBucket: "spyfall-2.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


function getPlayerName() {
    var playerName = document.getElementById("player_name").value;

    //this makes a lil pop up when you click "I accept my fate"!
    window.alert(playerName + " is here!");

    // // this was supposed to input the player name into the *Name goes here* part of the game page but alas
    // document.getElementById("player_in_game").innerHTML = playerName;

    // // this was supposed to put the player name in the database but alas
    // firebase.database().ref('users/' + playerName).set({
    //     player: playerName;
    // });
}

// function getPlayerName(name) {
//     firebase.database().ref('users/' + playerName).set({
//         username: playerName
//     });
// }