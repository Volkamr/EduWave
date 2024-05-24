import { Router } from "express";
import {
    getProfesor,
    getProfesores,
    createProfesor,
    postLoginProfesor,
    updateProfesor,
    deleteProfesor
} from '../controllers/profesor.controllers.js'

const router = Router();

router.get("/EduWave/Api/profesor", getProfesores);
router.get("/EduWave/Api/profesor/:accessToken", getProfesor)
router.post("/EduWave/Api/profesor", createProfesor);
router.post("/EduWave/Api/profesor/Login", postLoginProfesor)
router.put("/EduWave/Api/profesor/:id", updateProfesor);
router.delete("/EduWave/Api/profesor/:id", deleteProfesor);

export default router;