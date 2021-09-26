const router = require("express").Router();
const db = require("../../models/workout");

router.get("/", (req, res) => {
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});
router.put("/:id", (req, res) => {
  db.Workout.update({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});
router.post("/", (req, res) => {
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});
// console.log(Workout.find({}));
module.exports = router;
