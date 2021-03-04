/**
 * The query for a single day
 * Return the workout for that requested day
 * query should be a date formatted string
 */

import { Op } from "sequelize";
import { Workout } from "../../../server/models";
import withSession from "../../../lib/withSession";

export default withSession(async (req, res) => {
    console.log("\n\n", "Hellooooooooo", "\n\n\n");
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
        console.error("Today Workout Api Error: ", error);
        res.status(400).json({ error: error });
    }
});
