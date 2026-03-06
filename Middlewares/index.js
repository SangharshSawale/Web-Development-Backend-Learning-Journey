const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hii, I am first middleware");
//     next()
// })

const checktoken =("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next()
    }
   throw new Error("Access Denied")
})

app.get("/api",checktoken, (req, res) => {
    res.send("Data");
})
// app.use((req, res, next) => {
//     console.log("Hii, I am second middleware");
//     next()
// })

//logger
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time)
//     next()
// })

app.use("/random",(req, res, next) => {
    console.log("This is only for random");
    next()
})

app.use((req, res) => {
    res.send("Error 404 ");
})

app.get("/",(req,res) => {
    res.send("Hi, I am root");
})

app.get("/random",(req, res) => {
    res.send("This is a random page")
})


app.listen(8080, () => {
    console.log("Server listening to port 8080")
})