const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();
function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URL)
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
