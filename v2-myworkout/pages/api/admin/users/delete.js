import { User } from "../../../../server/models";

export default async function handler(req, res) {
    try {
        await User.destroy({ truncate: true, cascade: true });
        res.status(200).json({ data: "All Users Deleted" });
    } catch (error) {
        console.error("ADMIN Delete Users: ", error);
        res.status(400).json({ error: error });
    }
}
