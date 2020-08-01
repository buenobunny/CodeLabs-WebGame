function buttonLoad() {
    document.getElementById("enter").style.display = "initial";
    document.getElementById("proceed").style.display = "none";

    document.getElementById("home-text").style.display = "initial";
}

window.onload = buttonLoad;


function accept() {

    var database = firebase.database();
    var playerKey = database.ref().push().key

    var playerName = document.getElementById("player_name").value;
    if (playerName == "") {
        alert("Seriously, who are you?");
    }

    else {

        var database = firebase.database();
        database.ref("Players/" + playerKey).set({
            name: playerName,
            key: playerKey
        });

        document.getElementById("enter").style.display = "none";
        document.getElementById("proceed").style.display = "initial";
        document.getElementById("home-text").innerHTML = "Welcome, " + playerName + ". Your doom awaits.";

    }


}