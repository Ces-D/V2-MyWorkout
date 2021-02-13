const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

class Exercise extends Sequelize.Model {}
Exercise.init(
    {
        exercise: {
            type: Sequelize.DataTypes.STRING,
        },
        weight: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true,
        },
        reps: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true,
        },
        duration: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true,
        },
    },
    { sequelize, timestamps: true }
);

module.exports = Exercise;
