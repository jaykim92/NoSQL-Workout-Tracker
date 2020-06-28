const router = require("express").Router();
const Workout = require("../models/workout.js");

// create a new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch((err) => {
          res.status(400).json(err);
      })
});

// update an existing documents
router.put("/api/workouts/:id", (req, res) => {
  // findbyidandupdate, first argument is the id we are finding
  // second argument is what we are updating, which in this case is the exercises array
  // $push because otherwise it will rewrite the entire array otherwise
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

// get back entire collection to be used for data viz
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(error => {
    res.statu(400).json(error);
  })
})

module.exports = router;
