import React, { useState } from "react";
import Select from "react-select";
import './Login.css';
import Swal from "sweetalert2";
import { postLoginEstudianteRequest } from "../../api/estudiantes.api";
import { postLoginProfesorRequest } from "../../api/profesores.api";
import { postLoginAdminRequest } from "../../api/admin.api";

const Login = () => {

    const roles = [
        { label: "Empleado", value: 'Empleado' },
        { label: 'Instructor', value: 'Instructor' },
        { label: 'Administrador', value: 'Administrador' }
    ]

    const [rol, setRol] = useState(roles[0]);
    const opcionesFiltradas = roles.filter((rol_s) => rol_s.value !== rol.value);

    const handleSelectItem = (event) => {
        setRol(event);
    }

    const [password_log, setPassword] = useState('');
    const [cedula, setCedula] = useState('');
    const [adminusr, setAdminUsr] = useState('');

    const cedulaChange = (e) => {
        setCedula(e.target.value)
    }
    const AdminUSrChange = (e) => {
        setAdminUsr(e.target.value)
    }

    const passLoginChange = (p) => {
        setPassword(p.target.value)
    }

    const handleLoginEstudiante = async (event) => {
        event.preventDefault();

        try {

            const response = await postLoginEstudianteRequest(cedula, password_log)

            if (response.status < 200 || response.status >= 300) {
                throw new Error(`Error - ${response.status}`);
            }

            const data = response.data;

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: "Login exitoso",
                    text: "Será redireccionado",
                    showConfirmButton: false,
                    timer: 2000
                })
                
                    .then(() => {
                        localStorage.setItem('UserToken', JSON.stringify({ token: data.accessToken, rol: 'Empleado', cedula: cedula }));
                        window.location.href = `EduWave/${data.accessToken}`;
                    });
                

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login fallido',
                    text: data.message
                });
            }

        } catch (error) {
            console.error('Login error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Login Fallido',
                text: 'Error en el servidor'
            });
        }

    }

    const handleLoginProfesor = async (event) => {
        event.preventDefault();

        try {

            const response = await postLoginProfesorRequest(cedula, password_log)

            if (response.status < 200 || response.status >= 300) {
                throw new Error(`Error - ${response.status}`);
            }

            const data = response.data;

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: "Login exitoso",
                    text: "Será redireccionado",
                    showConfirmButton: true,
                })
                
                    .then(() => {
                        localStorage.setItem('UserToken', JSON.stringify({ token: data.accessToken, rol: 'Instructor', cedula: cedula }));
                        window.location.href = `EduWave/profesor/${data.accessToken}`;
                    });
                

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login fallido',
                    text: data.message
                });
            }

        } catch (error) {
            console.error('Login error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Login Fallido',
                text: 'Error en el servidor'
            });
        }

    }

    const handleLoginAdmin = async (event) => {
        event.preventDefault();

        try {

            const response = await postLoginAdminRequest(adminusr, password_log)

            if (response.status < 200 || response.status >= 300) {
                throw new Error(`Error - ${response.status}`);
            }

            const data = response.data;

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: "Login exitoso",
                    text: "Será redireccionado",
                    showConfirmButton: true,
                })
                
                    .then(() => {
                        localStorage.setItem('UserToken', JSON.stringify({ token: data.accessToken, rol: 'Administrador', adminusr: adminusr }));
                        window.location.href = `EduWave/admin/${data.accessToken}`;
                    });
                

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login fallido',
                    text: data.message
                });
            }

        } catch (error) {
            console.error('Login error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Login Fallido',
                text: 'Error en el servidor'
            });
        }

    }

    return (
        <container className="login">
            <container className="login-container">
                <div className="izquierda">
                    <h2 className="h2-izquierda">Bienvenido a EduWave</h2>
                    <span className="l-izquierda"></span>
                </div>
                <div className="derecha">
                    <form onSubmit={rol.value === "Empleado" ? (handleLoginEstudiante) : rol.value === "Administrador" ? (handleLoginAdmin) : handleLoginProfesor}>
                        <div className="titulo">
                            <h2 className="h2-login">Login</h2>
                            <span className="line"></span>
                        </div>

                        <div className="inputs">
                            <label for="select-r">Seleccione su rol</label>
                            <Select id="select-r"
                                value={rol}
                                options={opcionesFiltradas}
                                onChange={handleSelectItem}
                            >
                            </Select>

                            <label for="input-log" >{rol.value === 'Administrador' ? "Usuario admin" : "Cédula"}</label>
                            <input className="input-log" type={rol.value==="Administrador"?"text":"number"} name="usuario" required
                                placeholder={rol.value === 'Administrador' ? "Ingrese su usuario de administrador" : "Ingrese su cédula"}
                                onChange={rol.value === "Administrador" ? (AdminUSrChange) : (cedulaChange)}
                                ></input>


                            <label for="psswd">Contraseña</label>
                            <input className="input-log" type="password" name="password" required
                                placeholder="Ingrese su contraseña" id="psswd"
                                onChange={passLoginChange}
                                ></input>


                            <input className="btn-login-reg btn-login-depth" type="submit" value="Ingresar"></input>

                            <p className="mensaje">
                                ¿Olvidó su contraseña?
                                <a className="a-login">Recuperar contraseña</a>
                            </p>
                        </div>
                    </form>

                </div>
            </container>
        </container>
    );
};

export default Login;
