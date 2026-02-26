const mongooes = require("mongoose");

main().then((res) => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongooes.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongooes.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String
    },
    price : {
        type : Number
    }
});

const Book = mongooes.model("Book", bookSchema);

const book2 = new Book({
    title : "Math XII",
    author : "RD Sharma",
    price : "123"
});

book2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

