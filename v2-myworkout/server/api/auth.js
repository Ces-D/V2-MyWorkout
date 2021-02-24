const authRouter = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

/**
 * Register New User
 */
authRouter.post("/register", async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.findOne({
            where: { userName: req.body.username },
        });
        if (user) {
            throw "User already exists";
        } else {
            await User.create(
                {
                    userName: req.body.username,
                    hashedPassword: req.body.password,
                },
                { fields: ["userName", "hashedPassword"] }
            );
            res.sendStatus(200);
        }
    } catch (error) {
        res.json({ error: error });
    }
});

/**
 * Login Existing User
 */
authRouter.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            where: { userName: req.body.username },
        });
        if (user) {
            const passwordValid = bcrypt.compare(
                req.body.password,
                user.hashedPassword
            );
            if (passwordValid) {
                console.log("User Details", user.dataValues.id);
                req.session.user = user.dataValues.id;
                console.log("Session Complete");
                res.sendStatus(200);
            } else {
                throw "User not authenticated";
            }
        } else {
            throw "User does not exist";
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

/**
 * Delete Existing User
 */
authRouter.post("/delete", async (req, res) => {
    try {
        await User.destroy({ where: { id: req.session.user } });
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

/**
 * Update Existing User
 */
authRouter.post("/update", async (req, res) => {
    try {
        let updates = {};
        if (body["password"] || 0 !== body["password"].length) {
            updates.hashedPassword = body.password;
        }
        if (body["username"] || 0 !== body["username"].length) {
            updates.userName = body.username;
        }
        const user = await User.findByPk(req.session.user);
        await user.update(updates);
        res.send("User updated");
    } catch (error) {
        res.json({ error: error });
    }
});

/**
 * Load Existing User
 */
authRouter.post("/user", async (req, res) => {
    console.log("Profile User", req.session.user);
    try {
        const user = await User.findByPk(req.session.user);
        res.json({ user: user.dataValues.userName });
    } catch (error) {
        res.json({ error: error });
    }
});

/**
 * Check if User Authenticated Session Exists
 */
authRouter.post("/check", (req, res) => {
    console.log("Check User", req.session.user);
    if (req.session.user) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});
module.exports = authRouter;
