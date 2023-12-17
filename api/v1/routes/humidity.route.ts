import { Router } from "express"
import * as humidityController from "../controllers/humidity.controller"

const router = Router()

router.get("/", humidityController.index);

router.post("/create", humidityController.create);

export const humidityRoutes: Router = router