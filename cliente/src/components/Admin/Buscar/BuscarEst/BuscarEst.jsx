import React from "react";
import Good from '../../../../assets/Good.png';
import './BuscarEst.css';
import { IoMdMore } from "react-icons/io";

const BuscarEst = () => {
    return (
        <div className="proBusq">
            <div className="contenidoProB">
                <div className="imgProBC">
                    <img src={Good} alt="" className="imgProB"/>
                </div>
                <div className="infoProBusq">
                    <h2> Nombre completo del estudiante </h2>
                    <div className="infoProBusqIndv">
                        <div className="infoProBusqPri">
                            <p> Corrreo Electronico</p>
                            <p> Edad </p>
                        </div>
                        <div className="peqPro">
                            <p> <span>  # puntuacion </span>  </p>
                        </div>
                    </div>
                </div>
                <IoMdMore className="puntosMasPro"/>
            </div>
        </div>
    );
};

export default BuscarEst;