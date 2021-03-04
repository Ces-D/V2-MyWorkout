import sequelize from "../../server/config/db";

export default async function initialSync(req, res) {
    const dbSync = false;
    if (!dbSync) {
        sequelize.sync();
        console.log("\n\n\nSynced\n\n\n");  
        res.json({ data: "Database synced", });
    }
    res.json({ data: "Database not synced"s });
}
