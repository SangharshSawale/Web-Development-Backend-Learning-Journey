const mongoose = require("mongoose");
const Chat = require("./modules/chat");

main().then( ()=> {
    console.log("Connection Successful");
}).catch((err)=> {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats = [
    {
        from: "Aman",
        to: "Riya",
        msg: "Hi Riya!",
        create_at: new Date()
    },
    {
        from: "Kunal",
        to: "Pooja",
        msg: "Are you coming today?",
        create_at: new Date()
    },
    {
        from: "Sneha",
        to: "Rahul",
        msg: "Call me when free",
        create_at: new Date()
    },
    {
        from: "Vikram",
        to: "Anjali",
        msg: "Meeting at 5 pm",
        create_at: new Date()
    },
    {
        from: "Rohit",
        to: "Neha",
        msg: "Good morning",
        create_at: new Date()
    }
];

Chat.insertMany(allChats);


