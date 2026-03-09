// const express = require("express");
// const app = express();
const { default: mongoose } = require("mongoose");
const app = require("./src/app");

function mongodbconnect() {
  mongoose
    .connect(
      "mongodb+srv://Rohit:JU0tgRl0fRinQvjl@cluster0.ytsttsr.mongodb.net/newdatabase",
    )
    .then(() => {
      console.log("database connectsuccessfully");
    });
}
mongodbconnect();

const notes = [];

app.post("/notes", function (req, res) {
  notes.push(req.body);
  res.status(201).json({
    message: "User created successfully",
    data: req.body,
  });
});

app.get("/notes", function (req, res) {
  res.status(200).json({
    message: "data gate successfully",
    data: notes,
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].name = req.body.name;
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(200).json({
    message: "data delete successfully",
    data: notes,
  });
});

app.get("/", function (req, res) {
  res.send("le bhai tera data");
});

app.listen(3000, function () {
  console.log(`http://localhost:${3000}`);
});
