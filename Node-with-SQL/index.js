const { faker } = require('@faker-js/faker');
const mysql  = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const { v4: uuid } = require('uuid');
const { connect } = require('http2');
const methodOverride = require("method-override")


app.use(methodOverride("__method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pass@2026"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}


//root route
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    connection.query(q,(err, result) =>{
        if(err){
            console.log("Some error in your DB")
        }
        let count = result[0]['COUNT(*)'];
        res.render("home.ejs", {count});
    }) 
   
})

//users route
app.get("/user",(req, res) => {
    let q = "SELECT id, username, email FROM user";
    connection.query(q, (err, users) => {
        if(err){
            console.log("Something error is occur")
        }
        res.render("user.ejs", {users});
        console.log(users);
    }) 
})


//edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err,result) => {
         if(err){
            console.log("Something error is occur")
        }
        let user = result[0];
        res.render("edit.ejs", {user});
        
    })

})

//update route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password : formPass, userName: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err, result) => {
        if(err){
            console.log("Something error is occur")
        }
        let user = result[0];
        if(formPass != user.password){
            res.send("WRONG Password");
        }
        else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err, result) => {
                if(err){
                    res.send("Error occur");
                }
                res.redirect("/user");
            });
        }
    })
});


app.get("/user/:id/delete", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err,result) => {
         if(err){
            console.log("Something error is occur")
        }
        let user = result[0];
        res.render("delete.ejs", {user});
        
    })

})

//delete route
app.delete("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password : formPass, email : formEmail} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err, result) => {
        if(err){
            console.log("Something error is occur")
        }
        let user = result[0];
        if(formPass != user.password || formEmail != user.email){
            res.send("WRONG Password or email");
        }
        else{
            let q2 = `DELETE FROM user WHERE id='${id}'`;
            connection.query(q2, (err, result) => {
                if(err){
                    res.send("Error occur");
                }
                res.redirect("/user");
            });
        }
    })
});


app.get("/user/new", (req, res) => {
    res.render("newuser.ejs")
})

//Add new user route
app.post("/user/new", (req, res) => {
    let {userName, email, password} = req.body;
    let id = uuid();

    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${userName}', '${email}', '${password}')` ;

    connection.query(q, (err, result) => {
        if(err){
            console.log("SQL Error", err)
            res.send("New error occur")
        }
        res.redirect("/user");
    })
})

app.listen(8080, () => {
    console.log("Listening to the port : 8080");
})



// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let userdata = [
//   [3, "abcd", "abc@gmail.com", "PQR"],
//   [4, "xyz", "xyz123@gmail.com", "xyz"]
// ];

// let data = [];
// for(let i=1; i<=100; i++){
//     console.log(getRandomUser());
//     data.push(getRandomUser());     //100 fake users
// }


// connection.query(q, [data], (err, result) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }

//   console.log(result);
//   connection.end();
// });
 

// console.log(getRandomUser());
