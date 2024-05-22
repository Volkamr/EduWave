import React, { useState } from "react";
import Select from "react-select";
import './Login.css'

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

    return (
        <container className="login">
            <container className="login-container">
                <div className="izquierda">
                    <h2 className="h2-izquierda">Bienvenido a EduWave</h2>
                    <span className="l-izquierda"></span>
                </div>
                <div className="derecha">
                    <form >
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

                            <label for="input-log" >Usuario</label>
                            <input className="input-log" type="text" name="usuario" required
                                placeholder="Ingrese su usuario"></input>


                            <label for="psswd">Contraseña</label>
                            <input className="input-log" type="password" name="password" required
                                placeholder="Ingrese su contraseña" id="psswd"></input>


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
