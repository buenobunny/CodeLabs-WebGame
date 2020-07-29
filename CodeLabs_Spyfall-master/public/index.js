var express = require('express');
const app = express();

// var serviceAccount = require("/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://spyfall-2.firebaseio.com'
});

(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyAz9tGeCMt2wtOfTky2EZsyfy-wTwfJyOs",
        authDomain: "spyfall-2.firebaseapp.com",
        databaseURL: "https://spyfall-2.firebaseio.com",
        projectId: "spyfall-2",
        storageBucket: "spyfall-2.appspot.com",
        messagingSenderId: "451719774814",
        appId: "1:451719774814:web:3a4a38e16c582953d32acf",
        measurementId: "G-7LJ4NQGS2E"
    };
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    const database = firebase.database();

    // Get info from Host

    function say_info() {
        const host_info = Array.from(document.querySelectorAll('#host_input input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        window.alert(host_info);
    }

    const playerName = document.getElementById("player_name");
    const playing = document.getElementById("player_in_game");

    const dbRefObject = firebase.database().ref().child('Locations');
    const dbRefList = dbRefObject.child('Airplane');

    dbRefObject.on('value', snap => {
        playing.innerText = JSON.stringify(snap.val(), null, 1);
    })



    // function getPlayerName() {
    //     var playerName = document.getElementById("player_name").value;

    //     //this makes a lil pop up when you click "I accept my fate"!
    //     window.alert(playerName + " is here!");

    //     // this was supposed to input the player name into the *Name goes here* part of the game page but alas
    //     document.getElementById("player_in_game").innerHTML = player_name

    //     // this was supposed to put the player name in the database but alas
    //     firebase.database().ref('users/' + playerName).set({
    //         player: player_name
    //     });

}

    ());