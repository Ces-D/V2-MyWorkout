const { Sequelize } = require("sequelize");
const sequelize =
    process.env.NODE_ENV === "production"
        ? new Sequelize(process.env.HEROKU_PG_CONNECTION)
        : new Sequelize({
              dialect: "postgres",
              database: process.env.PG_DEV_NAME,
              username: process.env.PG_DEV_USER,
              password: process.env.PG_DEV_PASSWORD,
              options: {
                  host: "localhost",
                  port: process.env.PG_DEV_PORT,
              },
          });
module.exports = sequelize;
