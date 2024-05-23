import React from 'react';
import SideBar from '../SideBar/SideBar'; // Asegúrate de importar tu componente SideBar correctamente
import { lista_preguntas } from '../../Data'; // Importar lista_preguntas directamente
import './Examen.css'

const Examen = () => {
    return (
        <div className="curso_det_body">
        <div className="sidebar_home">
            <SideBar />
        </div>
        <div className="examen_det_content">
            <div className="examen_content">
                <div className="detalles_leccion">
                    <h1 className="nombre_leccion_det">Examen</h1>
                    <div className="detalles_examen">
                        <h3 className="h3_det_examen">Preguntas: #</h3>
                        <h3 className="h3_det_examen">Tiempo: ##:##</h3>
                    </div>
                    <p>
                        Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante.
                        Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante.
                        Descripcion completa sobre el curso. con todo lo que se necesita saber el estudiante.
                    </p>
                </div>
                <div className="Preguntas">
                    {
                        lista_preguntas.map(({ pregunta, descripcion, opciones }, index) => (
                            <div className="detalle_pregunta" key={index}>
                                <h4>{pregunta}</h4>
                                <p>{descripcion}</p>
                                <div className="opciones">
                                    {
                                        opciones.map((opcion, idx) => (
                                            <div className="opcion" key={idx}>
                                                <input 
                                                    type="checkbox" 
                                                    id={`pregunta-${index}-opcion-${idx}`} 
                                                    name={`pregunta-${index}`} 
                                                    value={opcion} 
                                                    className="checkbox-circular"
                                                />
                                                <label htmlFor={`pregunta-${index}-opcion-${idx}`}>{opcion}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="finalizar-btn">Finalizar</button>
            </div>
        </div>
    </div>
    
    );
};

export default Examen;

