import { Router } from "express";
import UserController from "../Controllers/UserController.js";
let router = Router()

router.post("/user", UserController.Create)
router.post("/auth", UserController.Login)

export default router