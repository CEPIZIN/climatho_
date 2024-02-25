import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import MapController from "../Controllers/MapController.js";
import ProductManager from "../Controllers/ProductController.js";
let router = Router()

router
    .post("/user", UserController.Create)
    .post("/auth", UserController.Login)
    .get("/Map", MapController.GetPoints)
    .get('/Market',ProductManager.GetProduct)
    .get('/Market/search', ProductManager.GetByCategory)
 
export default router