const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("middleware chala ek baar", req.url);
  next();
});

app.use(function (req, res, next) {
  console.log("middle ware chala ek or baar");
  next();
});

app.get("/", function (req, res) {
  console.log("kuch to chala");
  res.send("ye screen par aana chaheye");
});

app.get("/about", function (req, res) {
  res.send("about chala ek or bar");
});

app.get("/profile/:username", function (req, res) {
  res.send(`welcome ${req.params.username}`);
});

app.get("/profile/:username/:age", function (req, res) {
  res.send(`welcome ${req.params.username} or ${req.params.age}`);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("somethink break!");
});
app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
