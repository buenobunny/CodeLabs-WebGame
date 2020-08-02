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
        const roomCode = autoId.substr(6, 5)
        const locationCode = Math.floor(Math.random() * 20)

        database.ref("Host/" + autoId).set({
            event_name: eventName,
            number_of_players: numofPlayers,
            time_limit: duration,
            room_code: roomCode,
            location_num: locationCode
        });

        document.getElementById("generate").style.display = "none";
        document.getElementById("share").style.display = "initial";
        document.getElementById("code").innerHTML = roomCode
    }

}

function share() {
    // make a thing that copies the code onto clipboard

    document.getElementById("leggo").style.display = "initial";
}