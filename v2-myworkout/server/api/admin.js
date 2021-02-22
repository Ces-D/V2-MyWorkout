const adminRouter = require("express").Router();
const models = require("../models");

/**
 * Read All Users
 */
adminRouter.get("/all/users", async (req, res) => {
    try {
        const users = await models.User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Read all Workouts
 */
adminRouter.get("/all/workouts", async (req, res) => {
    try {
        const workouts = await models.Workout.findAll();
        res.json(workouts);
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Read all Programs
 */
adminRouter.get("/all/programs", async (req, res) => {
    try {
        const workouts = await models.Program.findAll();
        res.json(workouts);
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Read all Exercises
 */
adminRouter.get("/all/exercises", async (req, res) => {
    try {
        const exercises = await models.Exercise.findAll();
        res.json(exercises);
    } catch (error) {
        res.json({ error: error.message });
    }
});
module.exports = adminRouter;
