// Locations and Roles JSON files
var locations = [
    "Airplane", "Bank", "Beach", "Casino", "Cinema", "College", "Court", "Family Reunion",
    "Farm", "Grocery", "High School", "Hospital", "Moon", "Movie Set", "Office",
    "Pirate Ship", "Restaurant", "Spa", "Submarine", "Theme Park"
]

var roles = {
    "Airplane": ["Spy", "Pilot", "Karen", "Cry Baby", "Stewardess", "Businessman in First Class", "Sleeping Passenger", "First time Passenger"],
    "Bank": ["Spy", "Teller", "Security Guard", "Manager", "Janitor", "CFO", "Teller", "Security Guard"],
    "Beach": ["Spy", "Sunbather", "Sufer", "Volleyball Player", "Sandcastle Making Kid", "Instagrammer", "Seagull Stealing Food", "Volleyball Player"],
    "Casino": ["Spy", "Gambler", "Security Guard", "Angry Wife", "Kids looking at Arcades", "Gambler", "Security Guard", "Kids looking at Arcades"],
    "Cinema": ["Spy", "Popcorn Dude", "Audience", "Movie Hopping Teens", "Person manning the Projector", "Ticket Salesperson", "Audience", "Movie Hopping Teens"],
    "College": ["Spy", "Janitor", "Librarian", "Med Student", "Professor", "Sorority Girl", "CS Student", "Frat Boy"],
    "Court": ["Spy", "Defendant", "Plaintiff", "Jury Member", "Lawyer", "Judge", "Jury", "Lawyer"],
    "Family Reunion": ["Spy", "Kids", "Cousin that got promoted to adult table", "Weird Teenager", "Gossipy Mother", "Wine Aunt", "Kid", "Emo Teen"],
    "Farm": ["Spy", "Goat", "Farmer", "Farmer's Wife (Bertha)", "Cow", "Chicken", "Horse", "Pig"],
    "Grocery": ["Spy", "Person giving out samples", "Person checking membership card", "Gasoline Man", "Cashier", "Pharmacist", "Person giving out samples", "Person at food court"],
    "High School": ["Spy", "Lunch Lady", "Science Teacher", "Mascot", "GYM Teacher", "Student", "Football Player", "Band Kid"],
    "Hospital": ["Spy", "Med Student Intern", "Doctor", "Nurse", "Surgeon", "Person in the Giftshop", "Candy Striper", "Patient"],
    "Moon": ["Spy", "Astronaut", "Alien", "Rover", "Control Manager", "Space Dog", "Radioman", "Astronaut"],
    "Movie Set": ["Spy", "Director", "Caterer", "Producer", "Props Guy", "Extra", "Hair and Makeup Artist", "Main Actor/Actress"],
    "Office": ["Spy", "Coffee Runner", "Boss", "Salesman", "Receptionist", "College Intern", "Guy who's always late", "Software Engineer"],
    "Pirate Ship": ["Spy", "Parrot", "Mopper", "Sailor", "Pirate", "Captain", "Peg-legged Guy", "Pirate"],
    "Restaurant": ["Spy", "Busboy", "Waiter", "Chef", "Customer", "Bartender", "Valet", "Customer"],
    "Spa": ["Spy", "Nail Technician", "Masseuse", "Person washing Towels", "Person Getting a Facial", "Receptionist", "Person getting a facial", "Masseuse"],
    "Submarine": ["Spy", "Fish", "Passenger", "Mermaid", "Submarine Operator", "Passenger", "Passenger", "Mermaid"],
    "Theme Park": ["Spy", "Food Stand Owner", "Rollercoaster Operator", "Ride Engineer", "Kid on school trip", "Tired mother", "Kid on school trip", "Kid on School Trip"]
}

var database = firebase.database()

function infoLoad() {

    database.ref(`Host/-MDgiNJYDjEEAhEP9oiK/`).once("value", snapshot => {

        // Access info from database (kinda slow tho)
        var timeLimit = snapshot.val().time_limit;
        var numPlayers = snapshot.val().number_of_players;
        var event = snapshot.val().event_name;
        var locationCode = snapshot.val().location_num

        // Picks out the location
        var currentLocation = locations[locationCode]

        document.getElementById("time").innerHTML = `${timeLimit}:00`;
        document.getElementById("welcome").innerHTML = `Welcome to: ${event}!`
        document.getElementById("player_in_game").innerHTML = "Cirill";

        // Randomize the Role
        var ranRole = Math.floor(Math.random() * numPlayers)
        var playerRole = roles[currentLocation][ranRole]
        console.log(ranRole)

        if (playerRole == "Spy") {
            document.getElementById("role").innerHTML = "Role: " + playerRole;
            document.getElementById("place").innerHTML = "Location: ???";
        }
        else {
            document.getElementById("role").innerHTML = "Role: " + playerRole;
            document.getElementById("place").innerHTML = "Location: " + currentLocation;
        }

    });

}
window.onload = infoLoad;


/*

Stuff to figure out:
- Have different layouts depending on if they're the host or the player
- Line 35 has the hosting info.. figure out how to not do that (how to access info from previous pages)
- Access the name of the current player for the "Name here" (do we reaalllyyy need this)
- Should players be able to see the "end game" button too?
- name for now is hardcoded
*/