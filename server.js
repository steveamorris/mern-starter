const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

console.log(process.env.PORT)

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mern-starter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully logged into DB");
  })
  .catch((err) => {
    console.log("Unable to connect to DB");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
