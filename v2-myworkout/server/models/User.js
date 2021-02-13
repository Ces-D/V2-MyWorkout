const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {}
User.init(
    {
        userName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        hashedPassword: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            set(value) {
                const hash = bcrypt.hashSync(value, 10);
                this.setDataValue("hashedPassword", hash);
            },
        },
    },
    { sequelize, timestamps: false }
);

module.exports = User;
