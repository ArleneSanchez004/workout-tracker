const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        name: {
            type: String,
            unique: true,
            required: "Enter name of exercise."
        },
        type: {
            type: String,
            required: "Enter type of exercise."
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: "Enter duration time."
        },
        distance: {
            type: Number
        }
    }],
    day: {
        type: Date,
        default: Date.now()
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;