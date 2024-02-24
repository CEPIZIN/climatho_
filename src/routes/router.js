import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import MapController from "../Controllers/MapController.js";
let router = Router()

router
    .post("/user", UserController.Create)
    .post("/auth", UserController.Login)

    .get("/Map", MapController.GetPoints)

export default router