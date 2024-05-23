import React, { useEffect, useState } from 'react';
import './leccionDetallada.css';
import { lista_fechas } from '../../Data';
import SideBar from '../SideBar/SideBar';
import { lista_lecciones } from '../../Data';
import Imagen from '../../assets/imagen_mas.png'
import Hombre from '../../assets/hombre.jpg';
import { leccionDetallada, lista_temas } from '../../Data';
import 'boxicons';


const LeccionDetallada = () => {


    return (

        <div className="curso_det_body">
            <div className="sidebar_home">
                <SideBar />
            </div>
            <div className="leccion_det_content">
                <div className="leccion_content">               
                    <div className="detalles_leccion">
                        <h1 className="nombre_leccion_det">{leccionDetallada.nombre}</h1>
                        <p className="p_leccion">{leccionDetallada.descripcion_corta} 
                        <br/> {leccionDetallada.descripcion_corta}
                        <br/><br/>{leccionDetallada.descripcion_larga}
                        </p>
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
                </div>
                <div className="adicionales">
                    <h3 className="titulo_material">Material adicional</h3>
                    <div className="div_temas">
                        {
                            lista_temas.map(({ nombre, archivos }, index) => {
                                return (
                                    <div key={index} className="detalle_tema">
                                        <h3 className="nonmbre_tema">{nombre}</h3>
                                        {
                                            archivos.map(({nombre}, index) =>
                                                {
                                                    return(
                                                        <div className="detalle_archivos">
                                                            <h4 className="nombre_archivo">{nombre}</h4>
                                                        </div>
                                                    );
                                                })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="botones">
                        <div className="btn_terminada">
                            terminada
                        </div>
                        <div className="btn_next">
                            <box-icon type='solid' name='chevron-right'></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeccionDetallada;