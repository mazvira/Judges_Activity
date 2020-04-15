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

app.route("/data-activity")
    .get((req, res) => {
        res.sendFile(__dirname + '/stat_with_score');
    });

app.route("/data-month")
    .get((req, res) => {
        res.sendFile(__dirname + '/stat_by_month');
    });

app.route("/data-status")
    .get((req, res) => {
        res.sendFile(__dirname + '/judjes.csv');
    });


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(port, () => console.log("server running at localhost:" + port));
