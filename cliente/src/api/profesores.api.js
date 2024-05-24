import axios from 'axios'

export const createProfesor = async(profesor) =>{
    return await axios.post('http://localhost:4000/EduWave/Api/Profesor', profesor);
}

export const postLoginProfesorRequest = async (cedula, password) =>{
    return await axios.post('http://localhost:4000/Eduwave/Api/profesor/Login',
    {
        cedula: cedula,
        password: password
    })
}