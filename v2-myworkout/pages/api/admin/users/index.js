import { User } from "../../../../server/models";

/**
 * Return all Users
 */
export default async function handler(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).json({ data: users });
    } catch (error) {
        console.error("ADMIN Find Users: ", error)
        res.status(400).json({ error: error });
    }
}
