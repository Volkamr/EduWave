import React from "react";
import Good from '../../../../assets/Good.png';
import './BuscarPro.css';
import { IoMdMore } from "react-icons/io";

const BuscarPro = () => {
    return (
        <div className="proBusq">
            <div className="contenidoProB">
                <div className="imgProBC">
                    <img src={Good} alt="" className="imgProB"/>
                </div>
                <div className="infoProBusq">
                    <h2> Nombre completo del profesor </h2>
                    <div className="infoProBusqIndv">
                        <div className="infoProBusqPri">
                            <p> Corrreo Electronico</p>
                            <p> Profesion </p>
                        </div>
                        <div className="peqPro">
                            <p> # puntuacion </p>
                            <p> <span> (# votos) </span>  </p>
                        </div>
                    </div>
                </div>
                <IoMdMore className="puntosMasPro"/>
            </div>
        </div>
    );
};

export default BuscarPro;