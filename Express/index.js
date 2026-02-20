// ------------------------------------------------------------
// Importing Express
// ------------------------------------------------------------

const express = require("express");
const app = express();


// ------------------------------------------------------------
// Defining server port
// ------------------------------------------------------------

let port = 8080;


// ------------------------------------------------------------
// Starting the server
// ------------------------------------------------------------

app.listen(port, () => {
    console.log("App is listening on port", port);
});


// ------------------------------------------------------------
// Middleware example
// NOTE:
// If this middleware sends a response, routes below will not run
// ------------------------------------------------------------

app.use((req, res, next) => {
    console.log("request received");
    next();     // pass control to the next route
});


// ------------------------------------------------------------
// Root route
// ------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("I am root");
});


// ------------------------------------------------------------
// Route parameters example
// URL example: /sangharsh/101
// ------------------------------------------------------------

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let code = `<h1>Welcome @${username}</h1>`;
    res.send(code);
});


// ------------------------------------------------------------
// Query parameter example
// URL example: /search?q=apple
// ------------------------------------------------------------

app.get("/search", (req, res) => {

    let { q } = req.query;

    if (!q) {
        return res.send("<h1>Nothing searched</h1>");
    }

    res.send(`<h1>search results for query: ${q}</h1>`);
});


// ------------------------------------------------------------
// Simple routes
// ------------------------------------------------------------

app.get("/fruit", (req, res) => {
    res.send("you contacted fruit path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});


// ------------------------------------------------------------
// 404 handler
// ------------------------------------------------------------

app.use((req, res) => {
    res.status(404).send("This path does not exist");
});