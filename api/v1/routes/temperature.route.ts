import { Router } from "express"
import * as temperatureController from "../controllers/temperature.controller"

const router = Router()

router.get("/", temperatureController.index);

router.post("/create", temperatureController.create);

export const temperatureRoutes: Router = router