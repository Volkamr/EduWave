import React, { useState } from "react";
import Select from "react-select";
import './Login.css'

const Login = () => {

    const roles = [
        { label: "Usuario", value: 'Usuario' },
        { label: 'Administrador', value: 'Administrador' },
        { label: 'Veterinario', value: 'Veterinario' }
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
                <h2 className="h2-login">Bienvenido a EduWave</h2>
                <span></span>
                </div>
                <div className="derecha">
                <form >
                            <h2 className="h2-login">Login</h2>
                            <span className="line"></span>

                            <div className="inputs">
                                <p id="seleccionar-rol">Seleccione su rol</p>
                                <Select id="select-r"
                                    value={rol}
                                    options={opcionesFiltradas}
                                    onChange={handleSelectItem}
                                >
                                </Select>

                                <label for="input-log" >Usuario</label>
                                <input className="input-log" type="text"></input>


                                <label for="psswd">Contraseña</label>
                                <input className="input-log" type="password" name="password" required
                                    placeholder="Ingrese su contraseña" id="psswd"></input>
        

                                <input className="btn-login-reg btn-login-depth" type="submit" value="Ingresar"></input>

                            </div>
                        </form>

                </div>
            </container>
    </container>
    );
  };
  
export default Login;
