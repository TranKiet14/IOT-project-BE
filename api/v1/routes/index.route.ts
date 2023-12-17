import { Express } from "express"
import { temperatureRoutes } from "./temperature.route";
import { humidityRoutes } from "./humidity.route";
import { notificationRoutes } from "./notification.route";


const mainV1Routes = (app: Express): void => {
  const version = "/api/v1";
  app.use(version + "/temperature", temperatureRoutes);
  app.use(version + "/humidity", humidityRoutes);
  app.use(version + "/notifications", notificationRoutes)
};

export default mainV1Routes