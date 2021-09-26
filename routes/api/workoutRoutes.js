const router = require("express").Router();
const db = require("../../models/workout");

//gets all workouts
router.get("/", async (req, res) => {
  await db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

//gets all workouts in range
router.get("/range", async (req, res) => {
  await db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
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
router.post("/", async ({ body }, res) => {
  await db.Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
// console.log(Workout.find({}));
module.exports = router;
