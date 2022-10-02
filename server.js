const express = require("express");
const ejs = require("ejs");
const expressLayer = require("express-ejs-layouts");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use("/", (req, res) => {
  res.render("home");
});

// set Template engine
app.use(expressLayer);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
