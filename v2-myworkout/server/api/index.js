const authApi = require("./auth");
const adminApi = require("./admin");
function api(server) {
    server.use("/api/v1/auth/", authApi);
    server.use("/api/v1/admin/", adminApi);
}

module.exports = api;
