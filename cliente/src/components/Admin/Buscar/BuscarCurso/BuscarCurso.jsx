import React from "react";
import Good from '../../../../assets/Good.png';
import './BuscarCurso.css';
import { IoMdMore } from "react-icons/io";

const BuscarCurso = () => {
    return (
        <div className="cursoBusq">
            <div className="contenidoCursoB">
                <div className="imgCursoBC">
                    <img src={Good} alt="" className="imgCursoB"/>
                </div>
                <div className="infoCursoBusq">
                    <h2> Nombre completo del curso </h2>
                    <p> Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion  </p>
                    <div className="peqBC">
                        <div className="infoByCurso">
                            <p> <span> Creado por: </span> Nombre Profe </p>
                        </div>
                        <div className="infoEstCurso">
                            <p> # puntuacion </p>
                            <p> <span> (# votos) </span> </p>
                        </div>
                    </div>
                </div>
                <IoMdMore className="puntosMas"/>
            </div>
        </div>
    );
};

export default BuscarCurso;