import { User } from "../../../server/models";
import withSession from "../../../lib/withSession";

/**
 * Register New User
 */
export default withSession(async (req, res) => {
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
            res.status(200).json({ data: "User Created Successfully" });
        }
    } catch (error) {
        console.error("Registration Error: ", error);
        res.status(400).json({ error: error });
    }
});
