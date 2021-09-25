const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise Type is Required",
  },

  name: {
    type: String,
    trim: true,
    required: "Exercise Name is Required",
  },

  duration: {
    type: Number,
    required: "Exercise Duration is Required",
  },

  weight: {
    type: Number,
    required: "Exercise Weight is Required",
  },

  reps: {
    type: Number,
    required: "Exercise Reps are Required",
  },

  sets: {
    type: Number,
    required: "Exercise Sets are Required",
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
