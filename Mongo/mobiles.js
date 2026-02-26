const mongoose = require("mongoose");
main().then((res) => {
    console.log("Connected Successfully")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const mobileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    stock : {
        type : Number,
        default : 0 
    },
    price : {
        type : Number,
        min : [1,"Price is to low for amzon selling"]
    },
    categary :{
        type : String,
        enum : ["Android", "IPhone"]
    }
});

const Mobile = mongoose.model("Mobile", mobileSchema);

const mobile1 = new Mobile({
    name : "Samsung J7",
    description : "Old one",
    Stock : 3,
    price : 12000,
    categary : "Android"
});

mobile1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
});

Mobile.insertMany([
    {name : "IPhone 17", description : "New branded one", stock : 24, price: 145000, categary: "IPhone"},
    {name : "Narz0 50A", description : "6000 mhA Battery", stock : 12, price: 9999, categary: "Android"},
    {name : "OnePlus", description : "Best for photos", stock : 20, price: 45000, categary: "Android"}
]).then((res)=> {
    console.log(res);
})


Mobile.find({categary : "Android"}).then((res)=> {
    console.log(res);
});


 Mobile.findOne({categary : "IPhone"}).then((res)=> {
     console.log(res);
 });

Mobile.findById('699ee23f646e04e550cb99a5').then((res)=> {
     console.log(res);
 });

Mobile.findOneAndUpdate({categary : "IPhone"}, {price : 149900}, {new : true}).then((res) => {
    console.log(res);
})

Mobile.findByIdAndUpdate('699ee23f646e04e550cb99a5', {stock : 20}, {new : true}).then((res) => {
    console.log(res);
});

Mobile.deleteOne({categary : "IPhone"}).then((res) => {
    console.log(res);
});

Mobile.deleteMany({categary : "Android"}).then((res) => {
    console.log(res);
});

findOneAndDelete();
findByIdAndDelete();


