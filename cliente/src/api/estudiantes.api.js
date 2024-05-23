import axios from "axios";

export const createEstudiante = async(estudiante) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/Estudiante', estudiante);
}