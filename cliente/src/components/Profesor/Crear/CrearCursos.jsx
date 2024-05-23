import React, {useState} from "react";
import SideBarP from "../SideBarP/SideBarP";
import './CrearCursos.css';
import { FaImage } from "react-icons/fa6";
import Swal from "sweetalert2";
import {Form, Formik} from 'formik';

const CrearCursos = () => {

    const ced = 1062274391
    const [curso, setCurso] = useState("")
    const [leccion, setLeccion] = useState("")
    const [tarea, setTarea] = useState("")

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
        
        <section className="CrearCursos">
            <div>
                <SideBarP></SideBarP>
            </div>
            <div className="crearCursosContenido">
                <div className="formulariosCrear">
                    <p className="tituloForm">Crear Curso</p>
                    <Formik
                        initialValues={{
                            imagen: "",
                            imagen2: "",
                            titulo: "",
                            resumen: "",
                            descripcion: "",
                            nivel: "",
                            idioma: "",
                            tipo: "",
                            instructor_ced: ced
                        }}
                    >{({handleChange, handleSubmit, values}) =>(
                            <Form >
                                <div className="formularioPri">
                                    <div className="imgFileContainerPri" onClick={() => { document.querySelector(".input-field").click() }}>
                                        <div className="imgPriF">
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
                                                    <img src={image} alt={fileName} className='iconFileC' /> : 
                                                    <div className="">
                                                        <div className="icon">
                                                            <FaImage  className="iconFileC"/>
                                                        </div>
                                                        <p> Subir una portada del curso </p>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="imgFileContainerSec" onClick={() => { document.querySelector(".input-field2").click() }}>
                                        <div className="imgSecF">
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
                                                    <img src={image2} alt={fileName2} className='iconFileC' /> : 
                                                    <div className="">
                                                        <div className="iconSec">
                                                            <FaImage  className="iconFileC"/>
                                                        </div>
                                                        <p> Subir una portada del curso </p>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="infoPriCurso">
                                        <label htmlFor="fTitulo" className="labelTitulo"> Titulo </label>
                                        <input type="text" id="fTitulo" name="fTitulo" className="inputBox" placeholder="Titulo" onChange={handleChange}/>
                                        <label htmlFor="fDescCorta" className="labelTitulo"> Decripcion Corta </label>
                                        <input type="text" id="fDescCorta" name="fDescCorta" className="inputBox" placeholder="Descripcion" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="infoAdcCurso">
                                    <div className="fDescC">
                                        <label htmlFor="fDesc" className="labelTitulo"> Descripcion </label>
                                        <input type="text" id="fDes" name="fDes" className="inputBoxG" placeholder="Descripcion"/>
                                    </div>
                                    <div className="selectContenedor">
                                        <label for="nivel" className="labelTitulo">Nivel</label>
                                        <select name="nivel" className="inputBoxS">
                                            <option value="">Niveles</option>
                                            <option value="principiante">Principiante</option>
                                            <option value="intermedio">Intermedio</option>
                                            <option value="avanzado">Avanzado</option>
                                        </select>
                                        <label for="idioma" className="labelTitulo">Idioma</label>
                                        <select name="idioma" className="inputBoxS">
                                            <option value="">Idioma</option>
                                            <option value="español">Español</option>
                                            <option value="ingles">Ingles</option>
                                            <option value="frances">Frances</option>
                                        </select>
                                        <label for="tipo" className="labelTitulo">Tipo</label>
                                        <select name="tipo" className="inputBoxS">
                                            <option value="">Tipo</option>
                                            <option value="presencial">Presencial</option>
                                            <option value="virtual">Virtual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="botonOpc">
                                    <p className="botonRegV2"> CrearCurso </p>
                                    <p className="botonReg"> Cancelar </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="contenidoCurso">
                        <p className="TituloSeg">Contenido del Curso</p>
                        <div className="formContenidoC">
                            <form action="" className="fPriLect">
                                <div className="infoPriLect">
                                    <label htmlFor="fLect" className="labelTitulo"> Titulo de lectura </label>
                                    <input type="text" id="fLect" name="fLect" className="inputBox" placeholder="Titulo de lectura"/>
                                    <label htmlFor="fDescCLect" className="labelTitulo"> Descripcion Corta </label>
                                    <input type="text" id="fDescCLect" name="fDescCLect" className="inputBoxV2" placeholder="Descripcion corta"/>
                                </div>
                                <div className="descLectura">
                                    <label htmlFor="fDescLect" className="labelTitulo"> Descripcion </label>
                                    <input type="text" id="fDescLect" name="fDescLect" className="inputBoxD" placeholder="Descripcion"/>
                                </div>
                            </form>
                            <form action="">
                                <label htmlFor="fTituloL" className="labelTitulo"> Titulo Link </label>
                                <input type="text" id="fTituloL" name="fTituloL" className="inputBox" placeholder="Titulo link"/>
                                <label htmlFor="fLink" className="labelTitulo"> Link </label>
                                <input type="text" id="fLink" name="fLink" className="inputBox" placeholder="Link"/>
                                <p className="botonForm"> Agregar Link </p>
                            </form>
                        </div>
                        <p className="botonRegV2"> Agregar Leccion </p>
                        <div className="tareasCurso">
                            <p className="TituloSeg"> Tareas del curso </p>
                            <div className="formsTareas">
                                <form action="" className="fPriTarea">
                                    <div className="infoPriTarea">
                                        <label htmlFor="fTarea" className="labelTitulo"> Titulo de tarea </label>
                                        <input type="text" id="fTarea" name="fTarea" className="inputBox" placeholder="Titulo tarea"/>
                                        <label htmlFor="fFechaT" className="labelTitulo" > Fecha </label>
                                        <input type="text" id="fFechaT" name="fFechaT" className="inputBox" placeholder="fecha"/>
                                    </div>
                                    <div className="descTarea">
                                        <label htmlFor="fDescTarea" className="labelTitulo"> Instrucciones </label>
                                        <input type="text" id="fDescTarea" name="fDescTarea" className="inputBoxV3G" placeholder="Instrucciones"/>
                                    </div>
                                </form>
                                <div className="evaFormC">
                                    <form action="" className="evaForm">
                                        <div className="evaPreg">
                                            <label htmlFor="fPreg" className="labelTitulo"> Pregunta </label>
                                            <input type="text" id="fPreg" name="fPreg" className="inputBoxV3" placeholder="Pregunta"/>
                                            <label htmlFor="fRes" className="labelTitulo"> Respuesta </label>
                                            <input type="text" id="fRes" name="fRes" className="inputBoxV3" placeholder="Respuesta"/>
                                        </div>
                                        <div className="evaOpc">
                                            <label htmlFor="fOpc" className="labelTitulo"> Opciones erroneas </label>
                                            <input type="text" id="fOpc" name="fOpc" className="inputBoxV3" placeholder="Opciones Erroneas"/>
                                            <p className="botonFormV2"> Agregar Pregunta </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <p className="botonRegV2"> Agregar Tarea </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default CrearCursos;