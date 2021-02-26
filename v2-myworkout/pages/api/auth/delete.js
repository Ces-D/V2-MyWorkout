import { User } from "../../../server/models";

export default async function handler(req, res) {
    const userId = "userId";
    try {
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
