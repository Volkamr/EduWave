import { Router } from "express";
import {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante,
    postLoginEstudiante
} from '../controllers/estudiante.controllers.js'

const router = Router();

router.get("/EduWave/Api/estudiante", getEstudiantes);
router.get('/EduWave/Api/Estudiante/:accessToken', getEstudiante)
router.post("/EduWave/Api/estudiante", createEstudiante);
router.post("/EduWave/Api/Estudiante/Login", postLoginEstudiante);
router.put("/EduWave/Api/estudiante/:id", updateEstudiante);
router.delete("/EduWave/Api/estudiante/:id", deleteEstudiante);

export default router;