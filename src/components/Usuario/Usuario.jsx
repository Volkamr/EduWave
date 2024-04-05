import React from 'react';
import NavToggle from '../NavToggle/NavToggle';
import './Usuario.css';
import SliderCursos from '../SliderCursos/SliderCursos';
import Capacitacion from "../../assets/capacitacion.png";

const Usuario = () => {
    return (
        <div className="user-wrapper">
            <div className="nav-container">
                <NavToggle />
            </div>
            <div className="inicio">
                <div className="texto">
                    <h1 className="h1_inicio">
                        Te damos la bienvenida
                    </h1>
                    <h1 className="h1_inicio" id="eduwave">
                        a EduWave
                    </h1>
                </div>
                <div className="imagen_inicio">
                    <img src={Capacitacion} height="400px" />
                </div>
            </div>
            <div className="cursos">
                <h2 className="h2__cursos">Mis Cursos</h2>
            </div>
            <div className="slider-curso">
                <SliderCursos />
            </div>
        </div>
    );
};

export default Usuario;