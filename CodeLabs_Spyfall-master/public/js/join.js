function joinLoad() {
    document.getElementById("leggo").style.display = "none";
    document.getElementById("enterRoom").style.display = "initial";
}

window.onload = joinLoad;


//When user enters a code:
function enter() {

    var enteredRoomCode = document.getElementById("roomcode").value;

    if (enteredRoomCode == "") {
        alert("Please enter a room code.")
    }
    else {

        var database = firebase.database()
        // Checks if the roomcode exists in the database
        database.ref().child("Host").orderByChild("room_code").equalTo(enteredRoomCode).once("value", snapshot => {

            //if room code exist, bring them to the room with the corresponding room code
            // What's Missing: Actually making the room
            if (snapshot.exists()) {

                // Access the name of the event
                snapshot.forEach(function (childSnapshot) {
                    var event = childSnapshot.val().event_name;
                    console.log(event)

                    document.getElementById("enterRoom").style.display = "none";
                    // document.getElementById("leggo").style.display = "initial";
                    document.getElementById("joinroom").innerHTML = `Welcome to \"${event}\"! <br> The host will let you in soon!`

                });

            }

            //If not, they gotta try again
            else {
                alert("That room doesn't exist.. Try again?")
            }
        });

    }
}

/* Stuff to figure out:
- Assign the role of a player to the person with the name
- Will I or will I not get rid of the leggo button?
- If Person enters a room code, their name would be entered in "players" info of a host's room
*/