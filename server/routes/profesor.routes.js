import { Router } from "express";
import {
    getProfesor,
    getProfesores,
    createProfesor,
    updateProfesor,
    deleteProfesor
} from '../controllers/profesor.controllers.js'

const router = Router();

router.get("/EduWave/Api/profesor", getProfesores);
router.get("/EduWave/Api/profesor/:id", getProfesor)
router.post("/EduWave/Api/profesor", createProfesor);
router.put("/EduWave/Api/profesor/:id", updateProfesor);
router.delete("/EduWave/Api/profesor/:id", deleteProfesor);

export default router;