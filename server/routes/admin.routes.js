import { Router } from "express";
import { postLoginAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.post("/EduWave/Api/Admin/Login", postLoginAdmin);


export default router;