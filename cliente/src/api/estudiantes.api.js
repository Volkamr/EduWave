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

export const getUserRequest = async (authToken) => {

    const response = await axios.get(`http://localhost:4000/EduWave/Api/Estudiante/${authToken}`,
        {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
    );
    return response;
}