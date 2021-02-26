import { User } from "../../../server/models";

export default async function handler(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { userName: username },
        });
        if (user) {
            throw "User already exists";
        } else {
            await User.create(
                {
                    userName: username,
                    hashedPassword: password,
                },
                { fields: ["userName", "hashedPassword"] }
            );
            res.sendStatus(200);
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
