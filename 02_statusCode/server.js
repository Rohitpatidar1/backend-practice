const app = require("./src/app");

const notes = [];
app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Server working");
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  // res.send(req.body);
  res.status(201).json({
    message: "Note create successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes create successfully",
    notes: notes,
  });
});

app.patch("/notes/:index", function (req, res) {
  notes[req.params.index].description = req.body.description;
  res.send("description create successfully");
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send(204).json({
    message: "notes delete successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
