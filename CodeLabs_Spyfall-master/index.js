var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://spyfall-2.firebaseio.com"
});

const db = admin.firestore();

getDialogue().then(result => {
    console.log(result);
    const obj = result;
    const quoteData = {
        quote: obj.quote,
        author: obj.author
    };
    return db.collection('sampleData').doc('inspiration')
        .set(quoteData).then(() =>
            console.log('new Dialogue written to database'));
});

function getDialogue() {
    return new Promise(function (resolve, reject) {
        resolve({
            "quote": "I'm Batman",
            "author": "Batman"
        });
    })
}