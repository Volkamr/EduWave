import React from 'react';
import './PerfilProfesor.css';
import SideBarP from '../Profesor/SideBarP/SideBarP';
import Good from '../../assets/Good.png'
import Hola from '../../assets/hola.png'
import { Link } from 'react-router-dom';


const PerfilProfesor = () => {
    return (
        <section className='perfilProfesor'>
            <div>
                <SideBarP></SideBarP>
            </div>
            <div className="profesorContenido">
                <div className="cabecera">
                    <h2 className='titulo'>Hello, Ms. Maria Paula</h2>
                    <p> Hoy es Miercoles, 30 Octubre 2021 </p>
                </div>

                <div className="funciones">
                    <Link to="/EduWave/profesor/cursos/crear" className="crear">
                        <h2>Crear Cursos</h2>
                        <p>Aqui puedes crear los cursos para los estudiantes de la aplicacion</p>
                    </Link>

                    <Link to="/EduWave/profesor/cursos" className="crear">
                        <h2>Buscar Cursos</h2>
                        <p>Aqui puedes encontrar tus cursos presentes dentro de la aplicacion</p>
                    </Link>
                    
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
                                <p>Total Cursos</p>
                            </div>
                            <div className="est">
                                <h2>#</h2>
                                <p>Calificacion General</p>
                            </div>
                            <div className="est">
                                <h2>#</h2>
                                <p>Total Opiniones</p>
                            </div>
                        </div>
                        <div className="imgContenedor">
                            <img src={Hola} alt="" className='ImgPri' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfilProfesor;