const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const userModel = require("./usermodel");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", function (req, res, next) {
  console.log("middleware working");
  next();
});

app.get("/", (req, res) => {
  res.send("router is working");
});

app.get("/create", async function (req, res) {
  let createduser = await userModel.create({
    name: "rohan",
    username: "rohan@123",
    email: "rohan@gmai.com",
  });
  res.send(createduser);
});

app.get("/update", async function (req, res) {
  let updateuser = await userModel.findOneAndUpdate(
    { username: "Rohit@123" },
    { name: "Rohit patidar" },
    { new: true },
  );
  res.send(updateuser);
});

app.get("/red", async function (req, res) {
  let user = await userModel.find();
  res.send(user);
});

app.get("/redone", async function (req, res) {
  let user = await userModel.find({ username: "rohan@123" }); //find array deta hai fineOne obj deta hai
  res.send(user);
});

app.get("/delete", async function (req, res) {
  let deleteuser = await userModel.findOneAndDelete({ username: "Rohit@123" });
  res.send(deleteuser);
});

app.listen(3000, function () {
  console.log(`Server running at http://localhost:${3000}`);
});
