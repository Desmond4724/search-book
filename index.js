const express = require("express");
const path = require("path");

const port = process.env.port || 3000;

const app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(__dirname, "/dist/index.html");
});

app.listen(port, () => {
  console.log("Successfully run");
});
