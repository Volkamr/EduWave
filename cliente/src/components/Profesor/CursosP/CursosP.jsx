import React from "react";
import SideBarP from '../SideBarP/SideBarP';
import './CursosP.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { BsChatRightQuoteFill } from "react-icons/bs";
import Good from '../../../assets/Good.png'
import { useParams } from "react-router-dom";
import { useState } from "react";

const CursosP = () => {
    const [token, setToken] = useState(useParams().accessToken);

    return (
        <section className='cursosPro'>
            <div>
                <SideBarP accessToken={token}></SideBarP>
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
                    <div className="resultadosBusq">
                        <div className="cursoBusq">
                            <div className="contenidoCursoB">
                                <div className="imgCursoBC">
                                    <img src={Good} alt="" className="imgCursoB"/>
                                </div>
                                <div className="infoCursoBusq">
                                    <h2> Nombre completo del curso </h2>
                                    <p> Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion  </p>
                                    <div className="peq">
                                        <p> # puntuacion </p>
                                        <p> (# votos) </p>
                                    </div>
                                </div>
                                <IoMdMore className="puntosMas"/>
                            </div>
                        </div>
                        <div className="cursoBusq">
                            <div className="contenidoCursoB">
                                <div className="imgCursoBC">
                                    <img src={Good} alt="" className="imgCursoB"/>
                                </div>
                                <div className="infoCursoBusq">
                                    <h2> Nombre completo del curso </h2>
                                    <p> Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion  </p>
                                    <div className="peq">
                                        <p> # puntuacion </p>
                                        <p> (# votos) </p>
                                    </div>
                                </div>
                                <IoMdMore className="puntosMas"/>
                            </div>
                        </div>
                        <div className="cursoBusq">
                            <div className="contenidoCursoB">
                                <div className="imgCursoBC">
                                    <img src={Good} alt="" className="imgCursoB"/>
                                </div>
                                <div className="infoCursoBusq">
                                    <h2> Nombre completo del curso </h2>
                                    <p> Pequeña Descripcion del curso.Pequeña Descripcion del curso.Pequeña Descripcion  </p>
                                    <div className="peq">
                                        <p> # puntuacion </p>
                                        <p> (# votos) </p>
                                    </div>
                                </div>
                                <IoMdMore className="puntosMas"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detallesCurso">
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
                        <p className="opcEdt"> Editar </p>
                        <p className="opcEli"> Eliminar </p>
                        <BsChatRightQuoteFill className="imgOpi"/>
                        <p className="opcOpi"> Opiniones </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CursosP;