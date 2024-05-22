import React from 'react';
import './l_progreso.css';
import SideBar from '../SideBar/SideBar';
import lupa from '../../assets/lupa2.png';
import compu from '../../assets/prototipo.png';
import flecha from '../../assets/stonks.png';
import cal from '../../assets/ico_calendario.png';

const l_progreso = () => {
    return (
        <div className='grid_principal'>
            <SideBar></SideBar>
            <div className='cont_pag'>
                <h1>Cursos en progreso</h1>
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
                    <button type='button' className='e1'>
                        En progreso
                    </button>
                    <div></div>
                    <button type='button' className='e2'>
                        Favoritos
                    </button>
                    <div></div>
                    <button type='button' className='e2'>
                        Terminados
                    </button>
                    <div className='separador'></div>
                    <div className='separador2'></div>
                    <div className='mallac'>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                        <div className='tarjeta_curso'>
                            <h2>Nombre del curso</h2>
                            <img src={compu} alt="" />
                            <div className='row'>
                                <img src={flecha} alt="" className='img_flecha' />
                                <h6>Progreso: 80%</h6>
                                <img src={cal} className='calendario' alt="" />
                                <h6>Termina: 20/02/2025</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default l_progreso;