const handleGet = require('./handlers/get.js');
const handlePost = require('./handlers/post.js');
const config = require('../config.json');
const express = require("express");

const app = express().disable("x-powered-by");

app.post("/", handlePost);
app.get("/:filename", handleGet)
app.use((req, res) => {
  res.redirect("https://not.thomiz.dev")
})

app.listen(config.port, () =>
  console.log('Listening to port', config.port)
);
