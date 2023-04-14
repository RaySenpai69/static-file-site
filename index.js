const express = require("express");
const app = express();
const fs = require('fs');
require("dotenv").config();
const { join } = require('path');

const port = process.env.PORT || 8080;

app.use('/test', express.static(join(__dirname, 'test')));
app.get("/", (req, res) => {
    res.send({
        "/test": "A test repo storing file in a static website",
        "Owmer": "RaySenpai"
    });
  });
  app.get("/", (req, res) => {
    res.send({
        "/test": "A test repo storing file in a static website",
        "Owmer": "RaySenpai"
    });
  });
  app.get("/test", (req, res) => {
    fs.readdir(join(__dirname, 'test'), (err, files) => {
        if (err) {
            res.status(500).send('Error reading directory');
        } else {
            res.send(files);
        }
    });
});

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});