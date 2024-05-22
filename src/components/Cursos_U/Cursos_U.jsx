import React from 'react';
import './Cursos_U.css';
import SideBar from '../SideBar/SideBar';
import lupa from '../../assets/lupa2.png';
import good from '../../assets/Good.png';
import guardado from '../../assets/guardado.png';
import puntos from '../../assets/puntos.png';
import hombre from '../../assets/hombre.jpg';
import opiniones from '../../assets/opiniones.png';
import gato from '../../assets/Gato.jpg';
import estrela from '../../assets/estrela.png';
import like from '../../assets/laik.png';


const Cursos = () => {
    return (
        <div className='grid_principal'>
            <SideBar></SideBar>
            <div className='cont_pagcurs'>
                <div className='divizquierda'>
                    <div className='busqueda'>
                        <button type='button' className='elboton'>
                            <img src={lupa} alt="" />
                        </button>
                        <div className='inputboxizq'>
                            <input type='text' required='required'></input>
                            <span> Encuentra un curso</span>
                        </div>
                    </div>
                    <h2 className='tituloh2'>Resultados</h2>
                    <div className='filaekisde'>
                        <h4 className='ofiltrar'>Filtrar por:</h4>
                        <div className='dree'>
                            <select className='dropdown'>
                                <option value='recientes'>Recientes</option>
                                <option value='antiguos'>Más antiguo</option>
                            </select>
                        </div>
                        <div className='dera'>
                            <select className='dropdown'>
                                <option value='recientes'>Recientes</option>
                                <option value='antiguos'>Más antiguo</option>
                            </select>
                        </div>
                        <div className='dirs'>
                            <select className='dropdown'>
                                <option value='recientes'>Recientes</option>
                                <option value='antiguos'>Más antiguo</option>
                            </select>
                        </div>
                    </div>
                    <div className='columnaekisde'>
                        <div className='curos'>
                            <img src={good} alt="" className='courseimg' />
                            <div className='trtrtr'>
                                <h3>Nombre del curso</h3>
                                <p className='ppppp'>descripciondescripciondesdes<br></br>descripciondescripciondesdes<br></br>descripciondescripciondes</p>
                                <p className='alo'>Creado por: Profesor</p>
                            </div>
                            <div className='extra'>
                                <button type='button' className='guardas'>
                                    <img src={guardado} alt="" />
                                </button>
                                <p className='punt'># Puntacion</p>
                                <p className='punt'># votos</p>
                            </div>
                            <button type='button' className='puntos'>
                                <img src={puntos} alt="" />
                            </button>
                        </div>
                        <div className='curos'>
                            <img src={good} alt="" className='courseimg' />
                            <div className='trtrtr'>
                                <h3>Nombre del curso</h3>
                                <p className='ppppp'>descripciondescripciondesdes<br></br>descripciondescripciondesdes<br></br>descripciondescripciondes</p>
                                <p className='alo'>Creado por: Profesor</p>
                            </div>
                            <div className='extra'>
                                <button type='button' className='guardas'>
                                    <img src={guardado} alt="" />
                                </button>
                                <p className='punt'># Puntacion</p>
                                <p className='punt'># votos</p>
                            </div>
                            <button type='button' className='puntos'>
                                <img src={puntos} alt="" />
                            </button>
                        </div>
                        <div className='curos'>
                            <img src={good} alt="" className='courseimg' />
                            <div className='trtrtr'>
                                <h3>Nombre del curso</h3>
                                <p className='ppppp'>descripciondescripciondesdes<br></br>descripciondescripciondesdes<br></br>descripciondescripciondes</p>
                                <p className='alo'>Creado por: Profesor</p>
                            </div>
                            <div className='extra'>
                                <button type='button' className='guardas'>
                                    <img src={guardado} alt="" />
                                </button>
                                <p className='punt'># Puntacion</p>
                                <p className='punt'># votos</p>
                            </div>
                            <button type='button' className='puntos'>
                                <img src={puntos} alt="" />
                            </button>
                        </div>
                        <div className='curos'>
                            <img src={good} alt="" className='courseimg' />
                            <div className='trtrtr'>
                                <h3>Nombre del curso</h3>
                                <p className='ppppp'>descripciondescripciondesdes<br></br>descripciondescripciondesdes<br></br>descripciondescripciondes</p>
                                <p className='alo'>Creado por: Profesor</p>
                            </div>
                            <div className='extra'>
                                <button type='button' className='guardas'>
                                    <img src={guardado} alt="" />
                                </button>
                                <p className='punt'># Puntacion</p>
                                <p className='punt'># votos</p>
                            </div>
                            <button type='button' className='puntos'>
                                <img src={puntos} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Comienzo de lo que va a la derecha */}
                <div className='divderecha'>
                    <div className="imagencursogrande">
                        <img src={good} alt="" className="imgPriCurso" />
                    </div>
                    <h2 className='nombre_cur_grande'> Nombre Completo Curso </h2>
                    <p className='descripcion_cur_grande'> Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante. Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante </p>
                    <div className="infocurso">
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
                    <div className="fila_botones">
                        <p className="sabermas"> Saber más </p>
                    </div>
                    <div className="informacionprofesor">
                        <img src={hombre} alt="" className="profesorfoto" />
                        <div className='textoprofe'>
                            <h3>Nombre del profesor</h3>
                            <h5>Profesión</h5>
                        </div>
                    </div>
                    <div className='opiniones'>
                        <img src={opiniones} alt="" className="opinions" />
                        <h2 className='textoop'>Opiniones de los usuarios</h2>
                    </div>
                    <div className='cuerpocom'>
                        <div className='persona'>
                            <img src={gato} alt="" className="pfp" />
                            <h4 className='nombreus'>Eleanor Sainz</h4>
                            <h6 className='trabajous'>UX/UI designer</h6>
                            <div className='likes'>
                                <img src={like} alt="" className="laik" />
                                <h6 className='numero'>15</h6>
                                <img src={opiniones} alt="" className="laik" />
                                <h6 className='numero'>20</h6>
                            </div>
                        </div>
                        <div className='infocom'>
                            <img src={estrela} alt="" className="llitas" />
                            <h6 className='comentario'>blablblablablbalbalblablablabblablbalblablblablablbalbalblab<br></br>lablabblablbalblablblablablbalbalblablablabblablbalbalblab<br></br>lablabblablbal</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cursos;