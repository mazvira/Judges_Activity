const express = require('express');
const session = require('express-session');
var cors = require('cors');

const app = express(),
    port = process.env.PORT || 8080;

app.use(cors());

app.use(session({
    key: 'user_sid',
    secret: 'Shh, its a secret!',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000000
    }
}));

app.route("/data")
    .get((req, res) => {
        res.sendFile(__dirname + '/stat.csv');
    });


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(port, () => console.log("server running at localhost:" + port));
