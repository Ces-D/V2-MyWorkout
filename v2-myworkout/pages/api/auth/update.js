import { User } from "../../../server/models";

export default async function handler(req, res) {
    try {
        const userId = "userId";
        const body = req.body;
        let updates = {};
        if (body["password"] || 0 !== body["password"].length) {
            updates.hashedPassword = body.password;
        }
        if (body["username"] || 0 !== body["username"].length) {
            updates.userName = body.username;
        }
        const user = await User.findByPk(userId);
        await user.update(updates);
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
