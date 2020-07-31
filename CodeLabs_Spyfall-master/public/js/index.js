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

function buttonLoad() {
    document.getElementById("enter").style.display = "initial";
    document.getElementById("proceed").style.display = "none";

    document.getElementById("home-text").style.display = "initial";
}

window.onload = buttonLoad;


function accept() {

    var playerName = document.getElementById("player_name").value;
    if (playerName == "") {
        alert("Seriously, who are you?");
    }

    else {
        var data = {
            name: playerName
        }

        var database = firebase.database();
        var ref = database.ref("Players");
        ref.push(data)

        document.getElementById("enter").style.display = "none";
        document.getElementById("proceed").style.display = "initial";
        document.getElementById("home-text").innerHTML = "Welcome, " + playerName + ". Your doom awaits.";

    }


}