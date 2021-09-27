const router = require("express").Router();
const db = require("../../models/workout");

//gets all workouts
router.get("/", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

//gets all workouts in a week
router.get("/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbExercise) => {
      dbExercise.sort((a, b) => (a._id > b._id ? 1 : -1));
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exercise to workout
router.put("/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

//post route for new workout
router.post("/", async (req, res) => {
  console.log(req.body);
  await db.Workout.create({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
// console.log(Workout.find({}));
module.exports = router;
