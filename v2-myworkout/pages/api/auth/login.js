import { User } from "../../../server/models";
import bcrypt from "bcrypt";
/**
 * Login Existing User
 */
export default async function handler(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { userName: username } });
        if (user) {
            const passwordValid = bcrypt.compare(password, user.hashedPassword);
            if (passwordValid) {
                console.log("Login User Details", user);
                res.status(200).json({ data: user });
            } else {
                throw "Password not matched";
            }
        } else {
            throw "User not found";
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
