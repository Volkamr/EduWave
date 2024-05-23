import React, { useState } from "react";
import './PerfilAdmin.css'
import SideBarAdm from "./SideBarAdm/SideBarAdm";
import Good from '../../assets/Good.png';
import Hola from '../../assets/hola.png';
import { FaImage } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import {Form, Formik} from 'formik';
import { createProfesor } from "../../api/profesores.api";
import { createEstudiante } from "../../api/estudiantes.api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PerfilProfesor = () => {

    const [openCrPro, setOpenCrPro] = useState(false);
    const [openCrEst, setOpenCrEst] = useState(false);

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("Imagen sin seleccionar")
    const [imgForm, setImgForm] = useState("")

    const [image2, setImage2] = useState(null)
    const [fileName2, setFileName2] = useState("Imagen sin seleccionar")
    const [imgForm2, setImgForm2] = useState("")

    const blobToBase64 = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result.split(',')[1]);
            };
        });
    };

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
                    <Link to="/EduWave/admin/buscar" className="crearAdm">
                            <h2>Buscar Cursos</h2>
                            <p>Aqui puedes buscar todos los cursos presentes en la aplicacion</p>
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
                            <Formik
                                initialValues={{
                                    imagen: "",
                                    cedula: 0,
                                    nombre: "",
                                    edad: 0,
                                    celular: 0,
                                    email: "",
                                    municipio: "",
                                    genero: "",
                                    profesion: "",
                                    password: "",
                                    departamento: ""
                                }}
                                onSubmit={async(values, actions) =>{
                                    try {
                                        values.imagen = imgForm

                                        const response = await createProfesor(values)

                                        if(response.status < 200 || response.status >= 300){
                                            throw new Error(`Error - ${response.status}`)
                                        }

                                        const data = response.data
                                        if (data.success) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: data.message,
                                                text: "Profesor Creada Exitosamente",
                                                showConfirmButton: false,
                                                timer: 1500
                                            })

                                            actions.resetForm()

                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Creación de Profesor Fallida',
                                                text: data.message
                                            });
                                        }

                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            >
                            {({handleChange, handleSubmit, values, actions}) =>(
                                <Form onSubmit={handleSubmit}>
                                    <div className="priInfoFormCrPro">
                                        <div className="imgFormCrPro" onClick={() => { document.querySelector(".input-field").click() }}>
                                            <input type="file" accept='image/*' name='imagen' className='input-field' value={null} hidden onSubmit={handleSubmit} onChange={async ({ target: { files } }) => {
                                                files[0] && setFileName(files[0].name)
                                                if (files) {
                                                    setImage(URL.createObjectURL(files[0]));
                                                    const fileInput = document.querySelector('.input-field')
                                                    const myblob = fileInput.files[0]
                                                    const B64 = await blobToBase64(myblob)
                                                    setImgForm(B64)
                                                }
                                            }} />
                                            {
                                                image !== null ?
                                                    <img src={image} alt={fileName} className='iconFile' /> : 
                                                    <div className="">
                                                        <div className="imgPro">
                                                            <button type='button' > <FaImage  className="iconFile"/> </button>
                                                        </div>
                                                        <p> Subir una portada del curso </p>
                                                    </div>
                                            }   
                                        </div>
                                        <div className="infoPriFormPro">
                                            <label htmlFor="cedula" className="labelTitulo"> Cedula </label>
                                            <input type="number" name="cedula" className="inputBoxObs" placeholder="Cedula" onChange={handleChange} value={values.cedula}/>
                                            <label htmlFor="nombre" className="labelTitulo"> Nombre Completo </label>
                                            <input type="text" name="nombre" className="inputBoxObs" placeholder="Nombre Completo" onChange={handleChange} value={values.nombre}/>
                                        </div>
                                    </div>
                                    <div className="secInfoFormPro">
                                        <div className="SecInfoFormProIzq">
                                            <label htmlFor="edad" className="labelTitulo"> Edad </label>
                                            <input type="number" name="edad" className="inputBoxObs" placeholder="Edad" onChange={handleChange} value={values.edad}/>
                                            <label htmlFor="celular" className="labelTitulo"> Celular </label>
                                            <input type="number" name="celular" className="inputBoxObs" placeholder="Celular" onChange={handleChange} value={values.celular}/>
                                            <label htmlFor="email" className="labelTitulo"> Email </label>
                                            <input type="email" name="email" className="inputBoxObs" placeholder="Email" onChange={handleChange} value={values.email}/>
                                            <label htmlFor="municipio" className="labelTitulo"> Municipio </label>
                                            <input type="text" name="municipio" className="inputBoxObs" placeholder="Municipio" onChange={handleChange} value={values.municipio}/>
                                        </div>

                                        <div className="SecInfoFormProDer">
                                            <label for="genero" className="labelTitulo">Genero</label>
                                            <select name="genero" className="inputBoxSObs" onSubmit={handleSubmit} onChange={handleChange}>
                                                <option  value="" >Seleccione un genero</option>
                                                <option  value="hombre" >Hombre</option>
                                                <option  value="mujer" >Mujer</option>
                                            </select>
                                            <label htmlFor="profesion" className="labelTitulo"> Profesion </label>
                                            <input type="text" name="profesion" className="inputBoxObs" placeholder="Profesion" onChange={handleChange} value={values.profesion}/>
                                            <label htmlFor="password" className="labelTitulo"> Contraseña </label>
                                            <input type="password" name="password" className="inputBoxObs" placeholder="Contraseña" onChange={handleChange} value={values.password}/>
                                            <label htmlFor="departamento" className="labelTitulo"> Departamento </label>
                                            <input type="text" name="departamento" className="inputBoxObs" placeholder="Departamento" onChange={handleChange} value={values.departamento}/>
                                        </div>
                                    </div>

                                    <div className="botonOpc">
                                        <button type="submit" className="botonRegV2"> Agregar Profesor </button>
                                        <p className="botonReg"  onClick={()=>setOpenCrPro(!openCrPro)}> Cancelar </p>
                                    </div>

                                </Form>
                            )}    
                            </Formik>
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
                        <Formik
                                initialValues={{
                                    imagen: "",
                                    cedula: 0,
                                    nombre: "",
                                    edad: 0,
                                    celular: 0,
                                    email: "",
                                    municipio: "",
                                    genero: "",
                                    password: "",
                                    departamento: ""
                                }}
                                onSubmit={async(values, actions) =>{
                                    try {
                                        values.imagen = imgForm2

                                        const response = await createEstudiante(values)

                                        if(response.status < 200 || response.status >= 300){
                                            throw new Error(`Error - ${response.status}`)
                                        }

                                        const data = response.data
                                        if (data.success) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: data.message,
                                                text: "Estudiante Creado Exitosamente",
                                                showConfirmButton: false,
                                                timer: 1500
                                            })

                                            actions.resetForm()

                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Creación de Estudiante Fallida',
                                                text: data.message
                                            });
                                        }

                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            >
                            {({handleChange, handleSubmit, values}) =>(
                                <Form onSubmit={handleSubmit}>
                                    <div className="priInfoFormCrPro">
                                        <div className="imgFormCrPro" onClick={() => { document.querySelector(".input-field2").click() }}>
                                            <input type="file" accept='image/*' name='imagen' className='input-field2' value={null} hidden onSubmit={handleSubmit} onChange={async ({ target: { files } }) => {
                                                files[0] && setFileName2(files[0].name)
                                                if (files) {
                                                    setImage2(URL.createObjectURL(files[0]));
                                                    const fileInput = document.querySelector('.input-field2')
                                                    const myblob = fileInput.files[0]
                                                    const B64 = await blobToBase64(myblob)
                                                    setImgForm2(B64)
                                                }
                                            }} />
                                            {
                                                image2 !== null ?
                                                    <img src={image2} alt={fileName2} className='iconFile' /> : 
                                                    <div className="">
                                                        <div className="imgPro">
                                                            <button type='button' > <FaImage  className="iconFile"/> </button>
                                                        </div>
                                                        <p> Subir una portada del curso </p>
                                                    </div>
                                            }   
                                        </div>
                                        <div className="infoPriFormPro">
                                            <label htmlFor="cedula" className="labelTitulo"> Cedula </label>
                                            <input type="number" name="cedula" className="inputBoxObs" placeholder="Cedula" onChange={handleChange} value={values.cedula}/>
                                            <label htmlFor="nombre" className="labelTitulo"> Nombre Completo </label>
                                            <input type="text" name="nombre" className="inputBoxObs" placeholder="Nombre Completo" onChange={handleChange} value={values.nombre}/>
                                        </div>
                                    </div>
                                    <div className="secInfoFormPro">
                                        <div className="SecInfoFormProIzq">
                                            <label htmlFor="edad" className="labelTitulo"> Edad </label>
                                            <input type="number" name="edad" className="inputBoxObs" placeholder="Edad" onChange={handleChange} value={values.edad}/>
                                            <label htmlFor="celular" className="labelTitulo"> Celular </label>
                                            <input type="number" name="celular" className="inputBoxObs" placeholder="Celular" onChange={handleChange} value={values.celular}/>
                                            <label htmlFor="email" className="labelTitulo"> Email </label>
                                            <input type="email" name="email" className="inputBoxObs" placeholder="Email" onChange={handleChange} value={values.email}/>
                                            <label htmlFor="municipio" className="labelTitulo"> Municipio </label>
                                            <input type="text" name="municipio" className="inputBoxObs" placeholder="Municipio" onChange={handleChange} value={values.municipio}/>
                                        </div>

                                        <div className="SecInfoFormProDer">
                                            <label for="genero" className="labelTitulo">Genero</label>
                                            <select name="genero" className="inputBoxSObs" onSubmit={handleSubmit} onChange={handleChange}>
                                                <option  value="" >Seleccione un genero</option>
                                                <option  value="hombre" >Hombre</option>
                                                <option  value="mujer" >Mujer</option>
                                            </select>
                                            <label htmlFor="password" className="labelTitulo"> Contraseña </label>
                                            <input type="password" name="password" className="inputBoxObs" placeholder="Contraseña" onChange={handleChange} value={values.password}/>
                                            <label htmlFor="departamento" className="labelTitulo"> Departamento </label>
                                            <input type="text" name="departamento" className="inputBoxObs" placeholder="Departamento" onChange={handleChange} value={values.departamento}/>
                                        </div>
                                    </div>

                                    <div className="botonOpc">
                                        <button type="submit" className="botonRegV2"> Agregar Profesor </button>
                                        <p className="botonReg"  onClick={()=>setOpenCrEst(!openCrEst)}> Cancelar </p>
                                    </div>

                                </Form>
                            )}    
                        </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfilProfesor;