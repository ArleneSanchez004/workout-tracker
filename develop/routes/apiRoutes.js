const router = require("express").Router();
const Workout = require("../models/workout");

//GET
router.get("/api/workouts", ({ body }, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

//POST
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

//PUT
router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    Workout.findByIdAndUpdate(id, {$push: {exercises: req.body}})
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
        })
});

//module.exports = Router;