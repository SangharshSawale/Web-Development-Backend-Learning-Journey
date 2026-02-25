//start mongosh first

// switch to database
use college

// insert documents
db.student.insertOne({ name: "Sangharsh", age: 19, marks: 90 })

db.student.insertMany([
  { name: "Ajay", age: 21, marks: 93 }
])

db.student.insertMany([
  { name: "Roshan", age: 20, marks: 95 },
  { name: "Sumit", age: 20, marks: 88 }
])

// find all
db.student.find()

// find one
db.student.findOne({ name: "Roshan" })
db.student.findOne({ age: 20 })

// find many
db.student.find({ age: 20 })

db.student.find({ age: { $gt: 20 } })

db.student.find({ marks: { $gt: 90 } })

db.student.find({ age: { $in: [19, 21] } })

// update one
db.student.updateOne(
  { name: "Sangharsh" },
  { $set: { name: "Ranjit" } }
)

// check update
db.student.find({ name: "Ranjit" })

// update many
db.student.updateMany(
  { age: 20 },
  { $set: { city: "Amt" } }
)

// check update
db.student.find({ city: "Amt" })

// replace (no match case)
db.student.replaceOne(
  { name: "Ajat" },
  { name: "Rohan", age: 24, marks: 88 }
)

// show all
db.student.find()

// replace (correct one)
db.student.replaceOne(
  { name: "Ajay" },
  { name: "Rohan", age: 24, marks: 88 }
)

// show all
db.student.find()

// insert with embedded document
db.student.insertOne({
  name: "Ajay",
  performance: {
    marks: 90,
    grade: "A"
  }
})

// show all
db.student.find()

// query embedded field
db.student.find({ "performance.marks": 88 })

db.student.find({ "performance.marks": 90 })

// delete one
db.student.deleteOne({ name: "Ajay" })

// final data
db.student.find()