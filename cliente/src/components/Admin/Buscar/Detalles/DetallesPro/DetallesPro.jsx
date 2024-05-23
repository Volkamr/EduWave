import React, { useState } from "react";
import Good from '../../../../../assets/Good.png';
import './DetallesPro.css';
import { FaImage } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const DetallesPro = () => {
    const [openCrPro, setOpenCrPro] = useState(false);
    return (
        <div>
            <div className="infoDetPripro">
                <div className="imgDetProC">
                    <img src={Good} alt="" className="imgDetPro"/>
                </div>
                <div className="estDetPro">
                    <div className="estDetProIndv">
                        <h2>##</h2>
                        <p>Cursos</p>
                    </div>
                    <div className="estDetProIndv">
                        <h2>##</h2>
                        <p>Calificacion</p>
                    </div>
                </div>
            </div>
            <div className="infoGenDetPro">
                <div className="cabInfoGenDetPro">
                    <h2>Nombre Completo</h2>
                    <p>Cedula del profesor</p>
                </div>
                <div className="contInfoGenDetPro">
                    <div className="colm1Info">
                        <div className="InfoGenDetProInd">
                            <span> Edad </span>
                            <p>Edad</p>
                        </div>
                        <div className="InfoGenDetProInd">
                            <span> Profesion </span>
                            <p>Profesion</p>
                        </div>
                        <div className="InfoGenDetProInd">
                            <span> Municipio </span>
                            <p>Municipio</p>
                        </div>
                    </div>
                    <div className="colm2Info">
                        <div className="InfoGenDetProInd">
                            <span> Genero </span>
                            <p>Genero</p>
                        </div>
                        <div className="InfoGenDetProInd">
                            <span> Correo </span>
                            <p>Correo</p>
                        </div>
                        <div className="InfoGenDetProInd">
                            <span> Departamento </span>
                            <p>Departamento</p>
                        </div>
                    </div>
                    <div className="colm3nfo">
                        <div className="InfoGenDetProInd">
                            <span> Celular </span>
                            <p>Celular</p>
                        </div>
                        <div className="InfoGenDetProInd">
                            <span> Contraseña </span>
                            <p>Contraseña</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botonOpc">
                <p className="botonRegV2" onClick={()=>setOpenCrPro(!openCrPro)}> Editar </p>
                <p className="botonReg"> Cancelar </p>
            </div>
            <div className={`edtProfesorMenu ${openCrPro? 'active' : 'inactive'}`} >
                    <div className="cabeceraFromCrPro">
                        <FaWindowClose className="closeIconFormEdt" onClick={()=>setOpenCrPro(!openCrPro)}/>
                        <p> Editar Profesor </p>
                    </div>
                    <div className="principalFormCrP">
                        <div className="contenidoFormCrPro">
                            <form action="" className="">
                                <div className="priInfoFormCrPro">
                                    <div className="imgFormEdtPro">
                                        <input className="file" type="file" hidden />
                                        <div className="imgPro">
                                            <FaImage  className="iconFileEdt"/>
                                        </div>
                                        <p> Subir una portada del curso </p>
                                    </div>
                                    <div className="infoPriFormPro">
                                        <label htmlFor="fCedulaPro" className="labelTitulo"> Cedula </label>
                                        <input type="number" id="fCedulaPro" name="fCedulaPro" className="inputBoxObs" placeholder="Cedula"/>
                                        <label htmlFor="fNombrePro" className="labelTitulo"> Nombre Completo </label>
                                        <input type="text" id="fNombrePro" name="fNombrePro" className="inputBoxObs" placeholder="Nombre Completo"/>
                                    </div>
                                </div>
                                <div className="secInfoFormPro">
                                    <div className="SecInfoFormProIzq">
                                        <label htmlFor="fEdadPro" className="labelTitulo"> Edad </label>
                                        <input type="number" id="fEdadPro" name="fEdadPro" className="inputBoxObs" placeholder="Edad"/>
                                        <label htmlFor="fCelularPro" className="labelTitulo"> Celular </label>
                                        <input type="number" id="fCelularPro" name="fCelularPro" className="inputBoxObs" placeholder="Celular"/>
                                        <label htmlFor="fEmailPro" className="labelTitulo"> Email </label>
                                        <input type="email" id="fEmailPro" name="fEmailPro" className="inputBoxObs" placeholder="Email"/>
                                        <label htmlFor="fMunPro" className="labelTitulo"> Municipio </label>
                                        <input type="text" id="fMunPro" name="fMunPro" className="inputBoxObs" placeholder="Municipio"/>
                                    </div>

                                    <div className="SecInfoFormProDer">
                                        <label for="cars" className="labelTitulo">Genero</label>
                                        <select id="cars" name="cars" className="inputBoxSObs">
                                            <option value="volvo">Genero</option>
                                            <option value="saab">Saab</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <label htmlFor="fProfesionPro" className="labelTitulo"> Profesion </label>
                                        <input type="text" id="fProfesionPro" name="fProfesionPro" className="inputBoxObs" placeholder="Profesion"/>
                                        <label htmlFor="fContraPro" className="labelTitulo"> Contraseña </label>
                                        <input type="password" id="fContraPro" name="fContraPro" className="inputBoxObs" placeholder="Contraseña"/>
                                        <label htmlFor="fDeptPro" className="labelTitulo"> Departamento </label>
                                        <input type="text" id="fDeptPro" name="fDeptPro" className="inputBoxObs" placeholder="Departamento"/>
                                    </div>
                                </div>
                            </form>
                            <div className="botonOpc">
                                <p className="botonRegV2"> Editar Profesor </p>
                                <p className="botonReg"  onClick={()=>setOpenCrPro(!openCrPro)}> Cancelar </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default DetallesPro;