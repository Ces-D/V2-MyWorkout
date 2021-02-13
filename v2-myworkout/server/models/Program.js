const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

class Program extends Sequelize.Model {}
Program.init(
    {
        programName: {
            type: Sequelize.DataTypes.STRING,
            unique: true,
        },
        purpose: {
            type: Sequelize.DataTypes.STRING(1234),
        },
    },
    { sequelize }
);

module.exports = Program