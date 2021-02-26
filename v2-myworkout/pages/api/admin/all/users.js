import models from "../../../../server/models";

export default async function handler(req, res) {
    try {
        const users = await models.User.findAll();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
