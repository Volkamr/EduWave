import { Router } from "express";
import {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
} from '../controllers/estudiante.controllers.js'

const router = Router();

router.get("/EduWave/Api/estudiante", getEstudiantes);
router.get("/EduWave/Api/estudiante/:id", getEstudiante)
router.post("/EduWave/Api/estudiante", createEstudiante);
router.put("/EduWave/Api/estudiante/:id", updateEstudiante);
router.delete("/EduWave/Api/estudiante/:id", deleteEstudiante);

export default router;