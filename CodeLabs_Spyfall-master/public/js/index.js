

// Get a reference to the database service
var database = firebase.database();
var rootRef = database.ref().child('names');

function getPlayerName() {
    var playerName = $("player_name").val();
    rootRef.set({
        player: playerName
    })

    //this makes a lil pop up when you click "I accept my fate"!
    window.alert(playerName + " is here!");

    // // this was supposed to input the player name into the *Name goes here* part of the game page but alas
    // document.getElementById("player_in_game").innerHTML = playerName;

}

// function getPlayerName(name) {
//     firebase.database().ref('users/' + playerName).set({
//         username: playerName
//     });
// }