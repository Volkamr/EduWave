import React, { useState } from 'react';
import '../SideBarP/SideBarP.css';
import SideBarP from '../SideBarP/SideBarP';
import './Opiniones.css';
import { useParams } from 'react-router-dom';

const Opiniones = () => {
  const [token, setToken] = useState(useParams().accessToken);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const cursos = [
    { id: 1, nombre: "Curso número 1", fecha: "10 Sep 2024", participantes: 10 },
    { id: 2, nombre: "Curso número 2", fecha: "04 Oct 2024", participantes: 10 },
    { id: 3, nombre: "Curso número 3", fecha: "07 Nov 2024", participantes: 10 },
    { id: 4, nombre: "Curso número 4", fecha: "10 Dec 2024", participantes: 10 },
    { id: 5, nombre: "Curso número 5", fecha: "15 Jan 2025", participantes: 10 },
    { id: 6, nombre: "Curso número 6", fecha: "20 Feb 2025", participantes: 10 },
    { id: 7, nombre: "Curso número 7", fecha: "25 Mar 2025", participantes: 10 },
    { id: 8, nombre: "Curso número 8", fecha: "30 Apr 2025", participantes: 10 },
  ];

  const opiniones = [
    {
      id: 1,
      autor: "Eleanor Sainz",
      rol: "UI/UX designer",
      fecha: "25 Sep 2024",
      calificacion: 5,
      comentario: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    },
    {
      id: 2,
      autor: "Eleanor Sainz",
      rol: "UI/UX designer",
      fecha: "25 Sep 2024",
      calificacion: 3,
      comentario: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    },
    {
      id: 3,
      autor: "Eleanor Sainz",
      rol: "UI/UX designer",
      fecha: "25 Sep 2024",
      calificacion: 5,
      comentario: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    },
  ];

  return (
    <div className="opiniones-container">
      <SideBarP accessToken={token}/>
      <div className="contenido-opiniones">
        <div className="lista-cursos">
          <h1>Opiniones de estudiantes</h1>
          <ul>
            {cursos.map(curso => (
              <li key={curso.id} onClick={() => setSelectedCourse(curso)}>
                <h4>{curso.nombre}</h4>
                <p>{curso.fecha}</p>
                <p>{curso.participantes} participantes</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="detalle-curso">
          {selectedCourse ? (
            <>
              <h2>{selectedCourse.nombre}</h2>
              <div className="estadisticas">
                <h3>Estadísticas</h3>
                <p>Opiniones positivas: 20</p>
                <p>Opiniones neutras: 5</p>
                <p>Opiniones negativas: 5</p>
              </div>
              <div className="opiniones">
                {opiniones.map(opinion => (
                  <div key={opinion.id} className="opinion">
                    <h4>{opinion.autor}</h4>
                    <p>{opinion.rol}</p>
                    <p>{opinion.fecha}</p>
                    <div className="calificacion">
                      {"★".repeat(opinion.calificacion)}
                      {"☆".repeat(5 - opinion.calificacion)}
                    </div>
                    <p>{opinion.comentario}</p>
                    <button className="responder-btn">Responder</button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Selecciona un curso para ver los detalles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Opiniones;
