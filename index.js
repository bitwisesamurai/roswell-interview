const path = require("path");

const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/test", (req, res) => {
  res.send("Roswell Studios");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, DIR_PUBLIC, "index.html"));
// });

app.use(express.static(path.join(__dirname, "app", "build")));

app.listen(8000, () => {
  console.log("roswell-interview started...");
});
