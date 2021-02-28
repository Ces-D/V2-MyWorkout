import { User } from "../../../server/models";
import withSession from "../../../lib/withSession";
import bcrypt from "bcrypt";

/**
 * Login Existing User
 */
export default withSession(async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: { userName: username },
        });
        if (user) {
            const passwordValid = bcrypt.compare(password, user.hashedPassword);
            if (passwordValid) {
                req.session.set("user", { id: user.dataValues.id });
                await req.session.save();
                res.status(200).json({ data: user });
            } else {
                throw "Password not matched";
            }
        } else {
            throw "User not found";
        }
    } catch (error) {
        console.error("Login Error: ", error);
        res.status(400).json({ error: error });
    }
});
