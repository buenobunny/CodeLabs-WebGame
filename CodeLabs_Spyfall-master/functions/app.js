var express = require('express');
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const app = express();

var firebase = require("firebase/app");
const functions = require('firebase-functions');
const admin = require('firebase-admin');

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


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.get('/', (request, response) => {
    response.render('index.handlebars');
});

app.get('/home', (request, response) => {
    response.render('home.handlebars');
});

app.get('/host', (request, response) => {
    response.render('host.handlebars');
});

app.get('/join', (request, response) => {
    response.render('join.handlebars');
});

app.get('/game', (request, response) => {
    response.render('game.handlebars');
});

app.get('/game-over', (request, response) => {
    response.render('game-over.handlebars');
});

app.get('/time-up', (request, response) => {
    response.render('time-up.handlebars');
});

app.get('/aboutus', (request, response) => {
    response.render('aboutus.handlebars');
});

// app.get('/joinroom/:variableName', (req, res) => {
//     console.log()
// })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});

exports.app = functions.https.onRequest(app);