import React, { useEffect, useState } from 'react';
import './cursoDetallado.css';
import { lista_fechas } from '../../Data';
import SideBar from '../SideBar/SideBar';
import { lista_lecciones } from '../../Data';
import Imagen from '../../assets/imagen_mas.png'
import Hombre from '../../assets/hombre.jpg';

const CursoDetallado = () => {

    const [checkedItems, setCheckedItems] = useState(Array(lista_lecciones.length).fill(false));

    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    }

    return (

        <div className="curso_det_body">
            <div className="sidebar_home">
                <SideBar />
            </div>
            <div className="curso_det_content">
                <div className="curso_content">
                    <div className="imagen_curso">
                        <img src={Imagen} height="300px"></img>
                    </div>
                    <div className="detalles_curso">
                        <h1 className="nombre_curso_det">Nombre completo del curso</h1>
                        <p>Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante. Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante</p>
                    </div>
                    <div className="profesor">
                        <div className="foto_prof">
                            <img src={Hombre}></img>
                        </div>
                        <div className="detalles_prof">
                            <h5>Nombre profesor</h5>
                            <p>Profesion</p>
                        </div>
                    </div>
                    <div className="lecciones">
                        <h2>Contenido del curso</h2>
                        {lista_lecciones.map(({ nombre, descripcion }, index) => {
                            return (
                                <div className="leccion" key={index}>
                                    <div className="img_leccion"></div>
                                    <div className="detalle_leccion">
                                        <h4>{nombre}</h4>
                                        <p>{descripcion}</p>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="calendario">
                    <h1 className="titulo tit_calendario">Calendario</h1>
                    <div className="fechas_div">
                        {
                            lista_fechas.map(({ fecha, tareas }, index) => {
                                return (
                                    <div className="tareas">
                                        <div className="fecha_div">{fecha}</div>
                                        <div className="tareas_fecha">
                                            {
                                                tareas.map((tarea, index) => (
                                                    <div className="tarea_fecha_det" key={index}>
                                                        <div className="hora">
                                                            <h4>{tarea.hora}</h4>
                                                        </div>
                                                        <div className="detalles_tarea">
                                                            <h3 className="nombre_tarea">{tarea.nombre}</h3>
                                                            <p className="texto_p">Curso: {tarea.curso}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CursoDetallado;