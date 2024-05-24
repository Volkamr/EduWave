import axios from "axios";

export const createEstudiante = async(estudiante) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/Estudiante', estudiante);
}

export const postLoginEstudianteRequest = async (cedula, password) =>{
    return await axios.post('http://localhost:4000/Eduwave/Api/Estudiante/Login',
    {
        cedula: cedula,
        password: password
    })
}