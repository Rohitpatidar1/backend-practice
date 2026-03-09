const express = require("express");
const app = express();

const node = [];

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("hello kise ho");
});

// Create data
app.post("/node", (req, res) => {
  console.log("Data received:", req.body);
  node.push(req.body);
  res.send("Data created successfully");
});

// Get all data
app.get("/node", (req, res) => {
  console.log("Data in array:", node); // console par data dikhega
  res.send(node);
});

app.delete("/node/:index", function (req, res) {
  delete node[req.params.index];
  res.send("node delete successfully");
});

app.patch("/node/:index", function (req, res) {
  node[req.params.index].description = req.body.description;
  res.send("description create successfully");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
