import React, { useState } from "react";
import SideBarAdm from "../SideBarAdm/SideBarAdm";
import { IoSearchOutline } from "react-icons/io5";
import BuscarCurso from "./BuscarCurso/BuscarCurso";
import BuscarPro from "./BuscarPro/BuscarPro";
import BuscarEst from "./BuscarEst/BuscarEst";
import DetallesCurso from "./Detalles/DetallesCursos/DetallesCurso";
import DetallesEst from "./Detalles/DetallesEst/DetallesEst";
import DetallesPro from "./Detalles/DetallesPro/DetallesPro";
import { FaWindowClose } from "react-icons/fa";

const BuscarAdm = () => {

    const [detCursos, setdetCursos] = useState(false);
    const [detEst, setdetEst] = useState(false);
    const [detPro, setdetPro] = useState(false);

    return (
        <section className='cursosPro'>
            <div>
                <SideBarAdm ></SideBarAdm>
            </div>
            <div className="cursosP">
                <div className="listaCursos">
                    <div className="buscador">
                        <IoSearchOutline className="lupa" />
                        <p>Buscar un curso</p>
                    </div>
                    <div className="cabeceraBuscador">
                        <h2>Resultados</h2>
                        <div className="filtrosBusq">
                            <p className="fp">Filtrar por: </p>
                            <select id="opcNivel" name="nivel" className="opcBusq">
                                <option value="volvo">Nivel</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select id="opcIdioma" name="idioma" className="opcBusq">
                                <option value="volvo">Idioma</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select id="opcTipo" name="tipo" className="opcBusq">
                                <option value="volvo">Tipo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="resultadosBusq" >
                        <div onClick={()=>setdetCursos(!detCursos)}>
                            <BuscarCurso />
                        </div>
                        <div onClick={()=>setdetPro(!detPro)}>
                            <BuscarPro />
                        </div>

                        <div onClick={()=>setdetEst(!detEst)}>
                            <BuscarEst />
                        </div>
                    </div>
                </div>
                <div className="detallesCurso">
                    {
                        detCursos?  <div className=""> <DetallesCurso /> <FaWindowClose className="closeIconForm" onClick={()=>setdetCursos(!detCursos)} /> </div> : <div className=""></div>
                    }
                    {
                        detEst?  <div className=""> <DetallesEst /> <FaWindowClose className="closeIconForm" onClick={()=>setdetEst(!detEst)} /> </div> : <div className=""></div>
                    }
                    {
                        detPro?  <div className=""> <DetallesPro /> <FaWindowClose className="closeIconForm" onClick={()=>setdetPro(!detPro)} /> </div> : <div className=""></div>
                    }
                </div>
            </div>
        </section>
    );
};

export default BuscarAdm;