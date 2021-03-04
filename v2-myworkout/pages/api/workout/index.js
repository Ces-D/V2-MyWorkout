/**
 * Always return a todays workout data
 */

import { Op } from "sequelize";
import { Workout } from "../../../server/models";
import withSession from "../../../lib/withSession";

export default withSession(async (req, res) => {
    const userId = req.session.get("user").id;
    try {
        const workout = await Workout.findOne({
            where: {
                [Op.and]: [
                    {
                        sessionDate: new Date(),
                        workoutAuthor: userId,
                    },
                ],
            },
        });
        res.status(200).json({ data: workout });
    } catch (error) {
        console.error("\n\n\n\n\nToday Workout Api Error: ", error);
        res.status(400).json({ error: error });
    }
});
