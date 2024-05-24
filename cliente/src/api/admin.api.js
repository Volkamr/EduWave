import axios from "axios";

export const postLoginAdminRequest = async (adminusr, password) =>{
    return await axios.post('http://localhost:4000/Eduwave/Api/Admin/Login',
    {
        adminusr: adminusr,
        password: password
    })
}