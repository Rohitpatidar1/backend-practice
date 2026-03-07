const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  console.log(req.url);

  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", (req, res) => {
  console.log(req.url);
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    log(filedata);
    res.render("show", {
      filename: req.params.filename,
      filedata: filedata,
    });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  console.log(req.body);

  const oldPath = `./files/${req.body.previous}`;
  const newPath = `./files/${req.body.new}.txt`;

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log(err);
      return res.send("Error renaming file");
    }
    res.redirect("/");
  });
});
app.post("/create", (req, res) => {
  console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (error) => {
      res.redirect("/");
    },
  );
});
app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
