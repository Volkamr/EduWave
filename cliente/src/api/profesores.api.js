import axios from 'axios'

export const createProfesor = async(profesor) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/Profesor', profesor);
}