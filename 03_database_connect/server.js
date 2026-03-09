const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://Rohit:JU0tgRl0fRinQvjl@cluster0.ytsttsr.mongodb.net/newdatabase",
    )
    .then(() => {
      console.log("connect successfully");
    })
    .catch((err) => {
      console.log("DB connection error:", err);
    });
}
connectToDB();

app.get("/", (req, res) => {
  res.send("how are you");
});

app.listen(3000, () => {
  console.log(`http://localhost:${3000}`);
});
