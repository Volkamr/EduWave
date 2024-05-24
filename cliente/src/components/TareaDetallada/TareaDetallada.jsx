import React, { useEffect, useState } from 'react';
import './tareaDetallada.css'
import Hombre from '../../assets/hombre.jpg';
import SideBar from '../SideBar/SideBar';
import { useParams } from 'react-router-dom';


const TareaDetallada = () => {

    const [token, setToken] = useState(useParams().accessToken)

    const handleClick = () => {
        window.location.href = `/EduWave/${token}/tarea/examen`;
      };
    return (

        <div className="curso_det_body">
            <div className="sidebar_home">
                <SideBar accessToken={token}/>
            </div>
            <div className="leccion_det_content">
                <div className="leccion_content">               
                    <div className="detalles_leccion">
                        <h1 className="nombre_leccion_det">Nombre completo de la tarea</h1>
                        <p>Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante. Descripcion completa sobre el curso. con todo lo que se necesita saber el estudianteDescripcion completa sobre el curso. con todo lo que se necesita saber el estudiante. </p>
                    </div>
                    <div className="evaluacion" onClick={handleClick}>
                        <div className="foto_evaluacion">
                            <box-icon type='solid' name='spreadsheet'></box-icon>
                        </div>
                        <div className="detalles_evaluacion">
                            <h5>Evaluación #1</h5>
                        </div>
                    </div>
                </div>
                <div className="puntuacion">
                    <h3 className="h3_puntuacion">Puntuación</h3>
                    <p className="p_puntuacion">Sin puntuación</p>
                </div>
            </div>
        </div>

    );
};

export default TareaDetallada;