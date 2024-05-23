import React from "react";
import SideBarP from "../SideBarP/SideBarP";
import './EditarCursos.css';
import { FaImage } from "react-icons/fa6";

const EditarCursos = () => {
    return (
        
        <section className="CrearCursos">
            <div>
                <SideBarP></SideBarP>
            </div>
            <div className="crearCursosContenido">
                <div className="formulariosCrear">
                    <p className="tituloForm">Editar Curso</p>
                    <div className="formularioPri">
                        <div className="imgFileContainerPri">
                            <form action="" className="imgPriF">
                                <input className="file" type="file" hidden />
                                <div className="icon">
                                    <FaImage  className="iconFile"/>
                                </div>
                                <p> Subir una portada del curso </p>
                            </form>
                        </div>
                        <div className="imgFileContainerSec">
                            <form action="" className="imgSecF">
                                <input className="file" type="file" hidden />
                                <div className="iconSec">
                                    <FaImage  className="iconFile"/>
                                </div>
                                <p> Subir una portada del curso </p>
                            </form>
                        </div>
                        <form action="" className="infoPriCurso">
                            <label htmlFor="fTitulo" className="labelTitulo"> Titulo </label>
                            <input type="text" id="fTitulo" name="fTitulo" className="inputBox" placeholder="Titulo"/>
                            <label htmlFor="fDescCorta" className="labelTitulo"> Decripcion Corta </label>
                            <input type="text" id="fDescCorta" name="fDescCorta" className="inputBox" placeholder="Descripcion"/>
                        </form>
                    </div>
                    <form action="" className="infoAdcCurso">
                        <div className="fDescC">
                            <label htmlFor="fDesc" className="labelTitulo"> Descripcion </label>
                            <input type="text" id="fDes" name="fDes" className="inputBoxG" placeholder="Descripcion"/>
                        </div>
                        <div className="selectContenedor">
                            <label for="cars" className="labelTitulo">Nivel</label>
                            <select id="cars" name="cars" className="inputBoxS">
                                <option value="volvo">Nivel</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <label for="cars" className="labelTitulo">Idioma</label>
                            <select id="cars" name="cars" className="inputBoxS">
                                <option value="volvo">Idioma</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <label for="cars" className="labelTitulo">Tipo</label>
                            <select id="cars" name="cars" className="inputBoxS">
                                <option value="volvo">Tipo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </form>
                    <div className="contenidoCurso">
                        <p className="TituloSeg">Contenido del Curso</p>
                        <div className="formContenidoC">
                            <form action="" className="fPriLect">
                                <div className="infoPriLect">
                                    <label for="cars" className="labelTitulo">Seleccionar Lectura</label>
                                    <select id="cars" name="cars" className="inputBoxS">
                                        <option value="volvo">Lectura</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <label htmlFor="fLect" className="labelTitulo"> Titulo de lectura </label>
                                    <input type="text" id="fLect" name="fLect" className="inputBox" placeholder="Titulo de lectura"/>
                                    <label htmlFor="fDescCLect" className="labelTitulo"> Descripcion Corta </label>
                                    <input type="text" id="fDescCLect" name="fDescCLect" className="inputBoxV2" placeholder="Descripcion corta"/>
                                </div>
                                <div className="descLectura">
                                    <label htmlFor="fDescLect" className="labelTitulo"> Descripcion </label>
                                    <input type="text" id="fDescLect" name="fDescLect" className="inputBoxDE" placeholder="Descripcion"/>
                                </div>
                            </form>
                            <form action="">
                                <label for="cars" className="labelTitulo">Seleccionar Link</label>
                                <select id="cars" name="cars" className="inputBoxS">
                                    <option value="volvo">Link</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <label htmlFor="fTituloL" className="labelTitulo"> Titulo Link </label>
                                <input type="text" id="fTituloL" name="fTituloL" className="inputBox" placeholder="Titulo link"/>
                                <label htmlFor="fLink" className="labelTitulo"> Link </label>
                                <input type="text" id="fLink" name="fLink" className="inputBox" placeholder="Link"/>
                                <p className="botonForm"> Editar Link </p>
                            </form>
                        </div>
                        <p className="botonReg"> Editar Leccion </p>
                        <div className="tareasCurso">
                            <p className="TituloSeg"> Tareas del curso </p>
                            <div className="formsTareas">
                                <form action="" className="fPriTarea">
                                    <div className="infoPriTarea">
                                        <label for="cars" className="labelTitulo">Selecccionar Tarea</label>
                                        <select id="cars" name="cars" className="inputBoxS">
                                            <option value="volvo">Tarea</option>
                                            <option value="saab">Saab</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <label htmlFor="fTarea" className="labelTitulo"> Titulo de tarea </label>
                                        <input type="text" id="fTarea" name="fTarea" className="inputBox" placeholder="Titulo de tarea"/>
                                        <label htmlFor="fFechaT" className="labelTitulo" > Fecha </label>
                                        <input type="text" id="fFechaT" name="fFechaT" className="inputBox" placeholder="Fecha"/>
                                    </div>
                                    <div className="descTarea">
                                        <label htmlFor="fDescTarea" className="labelTitulo"> Instrucciones </label>
                                        <input type="text" id="fDescTarea" name="fDescTarea" className="inputBoxV3GEditar" placeholder="Instrucciones"/>
                                    </div>
                                </form>
                                <div className="evaFormC">
                                    <label for="cars" className="labelTitulo">Seleccionar Pregunta</label>
                                    <select id="cars" name="cars" className="inputBoxEditar">
                                        <option value="volvo">Pregunta</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <form action="" className="evaForm">
                                        <div className="evaPreg">
                                            <label htmlFor="fPreg" className="labelTitulo"> Pregunta </label>
                                            <input type="text" id="fPreg" name="fPreg" className="inputBoxV3" placeholder="Pregunta"/>
                                            <label htmlFor="fRes" className="labelTitulo"> Respuesta </label>
                                            <input type="text" id="fRes" name="fRes" className="inputBoxV3" placeholder="Respuesta"/>
                                        </div>
                                        <div className="evaOpc">
                                            <label htmlFor="fOpc" className="labelTitulo"> Opciones erroneas </label>
                                            <input type="text" id="fOpc" name="fOpc" className="inputBoxV3" placeholder="Opciones erroneas"/>
                                            <p className="botonFormV2"> Editar Pregunta </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <p className="botonReg"> Editar Tarea </p>
                        </div>
                    </div>
                    <div className="botonOpc">
                        <p className="botonRegV2"> Editar Curso </p>
                        <p className="botonReg"> Cancelar </p>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default EditarCursos;