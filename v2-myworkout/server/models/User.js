import { Sequelize } from "sequelize";
import sequelize from "../config/db";
import { hashSync } from "bcrypt";

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
                const hash = hashSync(value, 10);
                this.setDataValue("hashedPassword", hash);
            },
        },
    },
    { sequelize, timestamps: false }
);

export default User;
