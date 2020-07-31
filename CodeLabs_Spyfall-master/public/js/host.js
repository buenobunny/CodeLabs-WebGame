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

function itemsLoad() {
    document.getElementById("generate").style.display = "initial";
    document.getElementById("leggo").style.display = "none";
    document.getElementById("share").style.display = "none";
}

window.onload = itemsLoad;


function room() {
    var eventName = document.getElementById("event").value;
    var numofPlayers = document.getElementById('players').value;
    var duration = document.getElementById('duration').value;

    if (eventName == "" || numofPlayers == null || duration == null) {
        alert("Please fill out the form to proceed.")
    }
    else {

        var database = firebase.database();
        const autoId = database.ref().push().key

        database.ref("Host/" + autoId).set({
            event_name: eventName,
            number_of_players: numofPlayers,
            time_limit: duration,
            room_code: autoId
        });

        document.getElementById("generate").style.display = "none";
        document.getElementById("share").style.display = "initial";
        document.getElementById("code").innerHTML = autoId
    }

}

function share() {
    // make a thing that copies the code onto clipboard

    document.getElementById("leggo").style.display = "initial";
}