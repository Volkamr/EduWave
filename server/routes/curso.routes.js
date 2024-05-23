import { Router } from "express";
import {
    createCurso,
    createLeccion,
    createLink,
    createTarea,
    createPregunta
} from '../controllers/curso.controllers.js'

const router = Router();

router.post("/EduWave/Api/curso", createCurso);
router.post("/EduWave/Api/leccion", createLeccion);
router.post("/EduWave/Api/link", createLink);
router.post("/EduWave/Api/tarea", createTarea);
router.post("/EduWave/Api/pregunta", createPregunta);

export default router;