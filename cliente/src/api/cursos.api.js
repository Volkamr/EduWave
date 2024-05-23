import axios from "axios";

export const createCurso = async(curso) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/curso', curso);
}

export const createLeccion = async(leccion) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/leccion', leccion);
}

export const createLink = async(link) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/link', link);
}

export const createTarea = async(tarea) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/tarea', tarea);
}

export const createPregunta = async(pregunta) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/pregunta', pregunta);
}