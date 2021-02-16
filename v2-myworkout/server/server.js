const express = require("express");
const next = require("next");
const helmet = require("helmet");
const compression = require("compression");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

const api = require("./api");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();

    server.use(helmet());
    server.use(compression());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser());
    server.use(
        cookieSession({
            name: "session",
            secret: process.env.SESSION_SECRET, //"secret",
            httpOnly: true,
            maxAge: 1 * 60 * 1000,
        })
    );

    api(server);

    server.all("*", (req, res) => {
        // TODO: Figure out what "handle"
        return handle(req, res);
    });

    server.listen(PORT);
});
