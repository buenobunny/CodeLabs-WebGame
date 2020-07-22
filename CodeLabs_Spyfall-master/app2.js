var express = require('express');
var fs = require('fs');
var path = require('path');
var handlebars = require("express-handlebars");
const { config } = require('process');

const app = express();

const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.get('/', (request, response) => {
    response.render('home');
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
