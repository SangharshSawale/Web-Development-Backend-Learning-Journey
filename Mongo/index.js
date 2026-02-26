const mongoose = require('mongoose');
main()
.then(() => {
    console.log("Successfully connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
    name : "Rohit",
    email : "rohit123@gmail.com",
    age : 17
})

user1.save();

const user2 = new User({
    name : "Pankaj",
    email : "pankaj123@gmail.com",
    age : 28
})
user2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

User.insertMany([
    {name : "Vikki", email: "vikki23@gamail.com", age : 23},
    {name : "Adam", email : "adam123@gmail.com", age : 30},
    {name : "Alok" , email : "alok321@gmail.com", age : 14}
]);

User.find().then((res) => {
    console.log(res);
})
 
User.findById('699d91605be98c59d528f9f9').then((res) => {
    console.log(res);
})

User.updateOne({name : "Pankaj"}, {age : 26}).then((res) => {
    console.log(res);
});

User.updateMany({age : {$gt : 20 }},{age : 33}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

User.findOneAndUpdate({name : "Pankaj"}, {age : 63},{new : false}).then((res) => {
    console.log(res);
})
User.findByIdAndUpdate('699d91605be98c59d528f9f9',{age : 87}, {new : true}).then((res) => {
    console.log(res)});
User.deleteOne({name : "Vikki"}).then((res) => {
    console.log(res);
});
User.deleteMany({age : {$lt : 18}}).then((res) => {
    console.log(res);
})
User.findOneAndDelete({name : "Adam"}).then((res) => {
 console.log(res);
});

User.findByIdAndDelete('699d91605be98c59d528f9f9').then((res) => {
    console.log(res);
})