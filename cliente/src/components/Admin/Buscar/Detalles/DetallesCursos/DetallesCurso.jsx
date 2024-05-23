import React from "react";
import Good from '../../../../../assets/Good.png';

const DetallesCurso = () => {
    return (
        <div>
            <div className="imgPriCursoC">
                <img src={Good} alt="" className="imgPriCurso"/>
            </div> 
            <h2> Nombre Completo Curso </h2>
            <p> Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante. Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante </p>
            <div className="infoDataCurso">
                <div className="infoDataIndv">
                    <h2>##</h2>
                    <p>Estudiantes</p>
                </div>
                <div className="infoDataIndv">
                    <h2>##</h2>
                    <p>Clases</p>
                </div>
                <div className="infoDataIndv">
                    <h2>##</h2>
                    <p>Tareas</p>
                </div>
            </div>
            <div className="opcCurso">
                <p className="opcVer"> Ver mas</p>
            </div>
        </div>
    );
};

export default DetallesCurso;