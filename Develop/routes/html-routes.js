const router = require("express").Router();
const Workout = require("../models/workout.js");
var path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

// router.get("/stats")

module.exports = router;