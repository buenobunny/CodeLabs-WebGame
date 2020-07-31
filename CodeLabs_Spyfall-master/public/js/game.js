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

document.getElementById("time").innerHTML = "Time";

function put_name() {
    $('player_in_game').innerHTML = "Cirill";
}