const express = require('express');
//let bodyParser = require('body-parser');
const session = require('express-session');

const app = express(),
    port = process.env.PORT || 8080;

//app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
    key: 'user_sid',
    secret: 'Shh, its a secret!',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000000
    }
}));

const routes = require("./route.js");

app.route("/data")
    .get((req, res) => {
        res.sendFile(__dirname + '/index.html');
    });


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

routes(app);

app.listen(port, () => console.log("server running at localhost:" + port));
