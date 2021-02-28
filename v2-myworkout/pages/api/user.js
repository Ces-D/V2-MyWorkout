import withSession from "../../lib/withSession";
import { User, Program } from "../../server/models";

export default withSession(async (req, res) => {
    const user = req.session.get("user");
    if (user) {
        try {
            const found = await User.findByPk(user.id);
            if (found) {
                res.status(200).json({
                    isLoggedIn: true,
                    ...found,
                });
            } else {
                res.status(401).json({ isLoggedIn: false });
            }
        } catch (error) {
            throw error;
        }
    } else {
        res.status(401).json({ isLoggedIn: false });
    }
});
