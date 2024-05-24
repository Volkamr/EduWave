import React from 'react';
import './l_favoritos.css';
import SideBar from '../SideBar/SideBar';
import lupa from '../../assets/lupa2.png';
import saludo from '../../assets/saludo_ekisde.png';
import cal from '../../assets/nuevo_calendar.png';
import estrella from '../../assets/estrela.png';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const L_favoritos = () => {
    const [token, setToken] = useState(useParams().accessToken)

    return (
        <div className='grid_principal'>
            <SideBar accessToken={token}></SideBar>
            <div className='cont_pag'>
                <h1>Cursos favoritos</h1>
                <div className='inp_bot'>
                    <button type='button' className='e'>
                        <img src={lupa} alt="" />
                    </button>
                    <div className='inputbox'>
                        <input type='text' required='required'></input>
                        <span> Encuentra un curso</span>
                    </div>
                    <div className='dr'>
                        <select className='dropdown'>
                            <option value='recientes'>Recientes</option>
                            <option value='antiguos'>Más antiguo</option>
                        </select>
                    </div>
                    <div></div>
                    <button type='button' className='e2'>
                        <a className="a_cursos" href={`/EduWave/${token}/perfil/progreso`}>En progreso</a>
                    </button>
                    <div></div>
                    <button type='button' className='e1'>
                        <a className="a_cursos" href={`/EduWave/${token}/perfil/favoritos`}>Favoritos</a>
                    </button>
                    <div></div>
                    <button type='button' className='e2'>
                        <a className="a_cursos" href={`/EduWave/${token}/perfil/terminados`}>Terminados</a>
                    </button>
                    <div className='separador'></div>
                    <div className='separador2'></div>
                    <div className='mallac'>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                        <div className='tarjeta_cursofav'>
                            <h2>Nombre del curso</h2>
                            <img src={saludo} alt="" className='principalfav' />
                            <div className='rowa'>
                                <img src={cal} className='calfav' alt="" />
                                <h6 className='tifav'>Terminado: 20/02/2025</h6>
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                                <img src={estrella} className='str' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default L_favoritos;