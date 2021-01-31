const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get("./notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

module.exports= router;
