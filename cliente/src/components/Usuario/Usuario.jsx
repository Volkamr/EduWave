import React , {useState, useEffect}from 'react';
import './Usuario.css';
import SliderCursos from '../SliderCursos/SliderCursos';
import Sidebar from '../SideBar/SideBar';
import { lista_tareas, lista_fechas } from '../../Data';
import Imagen from '../../assets/imagen_mas.png'
import { getUserRequest } from '../../api/estudiantes.api';
import { useParams } from 'react-router-dom';

const Usuario = () => {

    
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(useParams().accessToken)

    const handleClick = () => {
        window.location.href = `/EduWave/${token}/tarea`;
      };

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('UserToken');
        const local_data = JSON.parse(loggedUserJSON)
        if (loggedUserJSON != null && loggedUserJSON.token == token) {
            setToken(JSON.stringify(local_data.token));
        }

    }, [token]);

    useEffect(() => {
        async function loadUser(token) {
            const response = await getUserRequest(token);
            setUser(response.data)
            console.log(response)
        }
        loadUser(token)
    }, [token]);


    const [fechaActual, setFechaActual] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFechaActual(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);
    return (

        <div className="home_body">
            <div className="sidebar_home">
                <Sidebar accessToken={token}/>
            </div>
            <div className="home_content">
                <div className="contenido">
                    <div className="header">
                        <h1 className="titulo">Hola, {user.nombre}</h1>
                        <p className="texto_p">Hoy es {fechaActual.toLocaleDateString()}</p>
                    </div>
                    <div className="cursos_container">
                        <SliderCursos accessToken={token}></SliderCursos>
                    </div>
                    <div className="info">
                        <div className="tareas_div">
                            <h1 className="titulo" id="tareas">Tareas para hoy</h1>
                            <div className='tareas'>
                            {
                                lista_tareas.map(({nombre, curso}, index)=>{
                                    return(
                                        <div className="tarea" onClick={handleClick}>
                                            <h3 className="nombre_tarea">{nombre}</h3>
                                            <p className="texto_p">Curso: {curso}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="estadisticas">
                            <h1 className="titulo">Estadísticas</h1>
                            <div className="stats">
                                <div className="stat_detail">
                                    <h4 className="stat_title">#</h4>
                                    <p className='stat_txt'>Cursos<br/> iniciados</p>
                                </div>
                                <div className="stat_detail">
                                    <h4 className="stat_title">#</h4>
                                    <p className='stat_txt'>Cursos<br/> terminados</p>
                                </div>
                                <div className="stat_detail">
                                    <h4 className="stat_title">#</h4>
                                    <p className='stat_txt'>Evaluaciones <br/>ganadas</p>
                                </div>
                            </div>
                            <div className="mas">
                                <div className="mas_txt">
                                    <h4>Aprende más</h4>
                                    <p className='texto_mas'>Encuentra los cursos <br/> que más te gustan</p>
                                    <div className="ver_mas">
                                        Ver más
                                    </div>
                                </div>
                                <div className="mas_img">
                                    <img src={Imagen} height="140px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calendario">
                    <h1 className="titulo tit_calendario">Calendario</h1>
                    <div className="fechas_div">
                            {
                                lista_fechas.map(({fecha, tareas}, index)=>{
                                    return(
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

export default Usuario;