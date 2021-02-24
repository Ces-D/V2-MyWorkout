const express = require("express");
const next = require("next");
const helmet = require("helmet");
const compression = require("compression");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(async () => {
        const server = express();
        // Any files requiring process.env must come after app.prepare
        const api = require("./api");
        const sequelize = require("./config/db");

        sequelize.sync();
        server.use(helmet());
        server.use(compression());
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
        server.use(cookieParser());
        server.use(
            cookieSession({
                name: "token",
                // secret: process.env.SESSION_SECRET, //"secret",
                keys:["key1"],
                httpOnly: true,
                maxAge: 1 * 60 * 1000,
            })
        );

        api(server);

        server.all("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT);
    })
    .catch((err) => console.log(err.stack));
