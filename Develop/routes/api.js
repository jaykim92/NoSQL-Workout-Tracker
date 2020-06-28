const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch((err) => {
          res.status(400).json(err);
      })
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("put route find by id and update")
  Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body}})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch (err => {
      res.status(400).json(err);
    })
})

// get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(error => {
    res.status(400).json(err);
  })
});

// app.get("/api/workouts/range", (req, res) => {
//   Workout.find()
// })

module.exports = router;
