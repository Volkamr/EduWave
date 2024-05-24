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

export const getProfeRequest = async (authToken) => {

    const response = await axios.get(`http://localhost:4000/EduWave/Api/Profesor/${authToken}`,
        {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
    );
    return response;
}