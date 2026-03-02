const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const Chat = require('./modules/chat.js');
const methodOverride = require("method-override")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main().then( ()=> {
    console.log("Connection Successful");
}).catch((err)=> {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

// const chat1 = new Chat({
//     from : "neha",
//     to : 'isha',
//     msg : 'Hello',
//     create_at : new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

app.post("/chats", (req, res) => {
    let {from, msg, to} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        create_at : new Date()
    })
    newChat.save().then(() => {
        console.log("Added Successfully");
    }).catch((err) => {
        console.log(err)
    })
    res.redirect("/chats");
})

app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {runValidators : true, new : true}
    );
    console.log(updateChat);
    res.redirect("/chats");
})

app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;   
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.delete("/chats", async (req, res) => {   
    let deletedChat = await Chat.deleteMany({});
    console.log(deletedChat);
    res.redirect("/chats");
})
app.get("/chats/:id/edit",async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

app.get("/chats/new", (req,res) => {
    res.render("new")
})

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/chats",async (req, res) => {
    let chats = await Chat.find();
    res.render("allchats", {chats})
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
