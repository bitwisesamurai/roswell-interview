const path = require("path");

const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("Roswell Studios");
});

const DIR_PUBLIC = "public";

app.get("/server", (req, res) => {
  res.sendFile(path.join(__dirname, DIR_PUBLIC, "index.html"));
});

app.get("/server/:route", (req, res) => {
  const route = req.params.route;

  res.sendFile(path.join(__dirname, DIR_PUBLIC, route));
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Success" });
});

app.get("/api/data/:filename", (req, res) => {
  const filename = req.params.filename;
  const data = require(`./public/data/${filename}`);

  res.json(data);
});

// Serve the (built React) app
app.use(express.static(path.join(__dirname, "app", "build")));

app.listen(8000, () => {
  console.log("roswell-interview server started...");
});
