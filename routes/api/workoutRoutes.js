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

//gets all workouts in range
router.get("/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .limit(7)
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exercise
router.put("/:id", async (req, res) => {
  await db.Workout.updateOne({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
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
