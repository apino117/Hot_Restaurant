// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Current Reservations (DATA)
// =============================================================
var currentReservations = [
    {
        name: "Alex",
        email: "alex@alex.alex",
        phone: 2155676006,
        id: 69
    },
    {
        name: "Johnny Codemaster",
        email: "imacodeboi@gmail.com",
        phone: 7037992609
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all currentReservations
app.get("/api/currentReservations", function (req, res) {
    return res.json(currentReservations);
});

// Post Paths
app.post("/api/currentReservations", function (req, res) {

    var newReservation = req.body;

    console.log(newReservation);

    currentReservations.push(newReservation);

    res.json(newReservation);

});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});