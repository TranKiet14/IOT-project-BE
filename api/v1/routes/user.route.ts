import { Router } from "express"
import * as controller from "../controllers/user.controller";
// import * as authMiddleware from "../middlewares/auth.middleware";

const router = Router()

router.post("/register", controller.register);

router.post("/login", controller.login);

// router.get("/detail", authMiddleware.requireAuth, controller.detail);

// router.get("/list", controller.listUser)
export const userRoutes: Router = router;
