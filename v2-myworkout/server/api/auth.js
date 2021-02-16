const authRouter = require("express").Router();
const { User } = require("../models/index");

// TODO: Complete the api endpoints

/**
 * Register New User
 */
authRouter.post("/register", async (req, res) => {
    try {
        res.json({ user: "John Doe" });
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Login Existing User
 */
authRouter.post("/login", async (req, res) => {
    console.log(req.body);
    try {
        res.json({ user: "Logged In" });
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Delete Existing User
 */
authRouter.post("/delete", async (req, res) => {
    try {
        res.json({ user: "Delete User" });
    } catch (error) {
        res.json({ error: error.message });
    }
});

/**
 * Update Existing User
 */
authRouter.post("/update", async (req, res) => {
    try {
        res.json({ user: "Update User" });
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = authRouter;
