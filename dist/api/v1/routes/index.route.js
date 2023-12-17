"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temperature_route_1 = require("./temperature.route");
const humidity_route_1 = require("./humidity.route");
const mainV1Routes = (app) => {
    const version = "/api/v1";
    app.use(version + "/temperature", temperature_route_1.temperatureRoutes);
    app.use(version + "/humidity", humidity_route_1.humidityRoutes);
};
exports.default = mainV1Routes;
