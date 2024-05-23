import React, { useState } from "react";
import './PerfilAdmin.css'
import SideBarAdm from "./SideBarAdm/SideBarAdm";
import Good from '../../assets/Good.png';
import Hola from '../../assets/hola.png';
import { FaImage } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const PerfilProfesor = () => {

    const [openCrPro, setOpenCrPro] = useState(false);
    const [openCrEst, setOpenCrEst] = useState(false);

    return (
        <section className='perfilAdmin'>
            <div>
                <SideBarAdm></SideBarAdm>
            </div>
            <div className="AdminContenido">
                <div className="cabecera">
                    <h2 className='titulo'>Hello, Adm. Maria Paula</h2>
                    <p> Hoy es Miercoles, 30 Octubre 2021 </p>
                </div>

                <div className="funciones">
                    <div className="crearAdm" onClick={()=>setOpenCrPro(!openCrPro)}>
                        <h2>Crear Profesores</h2>
                        <p>Aqui puedes crear las cuentas para los profesores de la aplicacion</p>
                    </div>
                    <div className="buscarAdm" onClick={()=>setOpenCrEst(!openCrEst)}>
                        <h2>Crear Estudiantes</h2>
                        <p>Aqui puedes crear las cuentas para los estudiantes de la aplicacion</p>
                    </div>
                    <div className="crearAdm">
                        <h2>Buscar Cursos</h2>
                        <p>Aqui puedes buscar todos los cursos presentes en la aplicacion</p>
                    </div>
                </div>

                <div className="contenidoProfe">
                    <div className="popularesProfe">
                        <h2 className='tituloSeg'>Cursos Populares</h2>
                        <div className="popCurso">
                            <div className="num">
                                <h2>#</h2>
                                <p>Total Estudiantes</p>
                            </div>
                            <div className="infoPopCurso">
                                <img src={Good} alt="" className='popCursoImg' />
                                <div className='infoPopCursoIndv'>
                                    <h2>Nombre Curso</h2>
                                    <p>Aqui puedes crear las cuentas para los profesores de la aplicacion</p>
                                </div>
                            </div>
                        </div>
                        <div className="popCurso">
                            <div className="num">
                                <h2>#</h2>
                                <p>Total Estudiantes</p>
                            </div>
                            <div className="infoPopCurso">
                                <img src={Good} alt="" className='popCursoImg' />
                                <div className='infoPopCursoIndv'>
                                    <h2>Nombre Curso</h2>
                                    <p>Aqui puedes crear las cuentas para los profesores de la aplicacion</p>
                                </div>
                            </div>
                        </div>
                        <div className="popCurso">
                            <div className="num">
                                <h2>#</h2>
                                <p>Total Estudiantes</p>
                            </div>
                            <div className="infoPopCurso">
                                <img src={Good} alt="" className='popCursoImg' />
                                <div className='infoPopCursoIndv'>
                                    <h2>Nombre Curso</h2>
                                    <p>Aqui puedes crear las cuentas para los profesores de la aplicacion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="estadisticasProfe">
                        <h2 className='tituloSeg'>Estadisticas</h2>
                        <div className="numEstadisticas">
                            <div className="est">
                                <h2>#</h2>
                                <p>Total Profesores</p>
                            </div>
                            <div className="est">
                                <h2>#</h2>
                                <p>Total Estudiantes</p>
                            </div>
                            <div className="est">
                                <h2>#</h2>
                                <p>Total Cursos</p>
                            </div>
                        </div>
                        <div className="imgContenedor">
                            <img src={Hola} alt="" className='ImgPri' />
                        </div>
                    </div>
                </div>
                <div className={`crearProfesorMenu ${openCrPro? 'active' : 'inactive'}`} >
                    <div className="cabeceraFromCrPro">
                        <FaWindowClose className="closeIconForm" onClick={()=>setOpenCrPro(!openCrPro)}/>
                        <p> Agregar Profesor </p>
                    </div>
                    <div className="principalFormCrP">
                        <div className="contenidoFormCrPro">
                            <form action="" className="">
                                <div className="priInfoFormCrPro">
                                    <div className="imgFormCrPro">
                                        <input className="file" type="file" hidden />
                                        <div className="imgPro">
                                            <FaImage  className="iconFile"/>
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
                                <p className="botonRegV2"> Agregar Profesor </p>
                                <p className="botonReg"  onClick={()=>setOpenCrPro(!openCrPro)}> Cancelar </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`crearProfesorMenu ${openCrEst? 'active' : 'inactive'}`} >
                    <div className="cabeceraFromCrPro">
                        <FaWindowClose className="closeIconForm" onClick={()=>setOpenCrEst(!openCrEst)}/>
                        <p> Agregar Estudiante </p>
                    </div>
                    <div className="principalFormCrP">
                        <div className="contenidoFormCrPro">
                            <form action="" className="">
                                <div className="priInfoFormCrPro">
                                    <div className="imgFormCrPro">
                                        <input className="file" type="file" hidden />
                                        <div className="imgPro">
                                            <FaImage  className="iconFile"/>
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
                                        <label htmlFor="fContraPro" className="labelTitulo"> Contraseña </label>
                                        <input type="password" id="fContraPro" name="fContraPro" className="inputBoxObs" placeholder="Contraseña"/>
                                        <label htmlFor="fDeptPro" className="labelTitulo"> Departamento </label>
                                        <input type="text" id="fDeptPro" name="fDeptPro" className="inputBoxObs" placeholder="Departamento"/>
                                    </div>
                                </div>
                            </form>
                            <div className="botonOpc">
                                <p className="botonRegV2"> Agregar Estudiante </p>
                                <p className="botonReg"  onClick={()=>setOpenCrEst(!openCrEst)}> Cancelar </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfilProfesor;