import React from 'react';
import './Cursos_U.css';
import SideBar from '../SideBar/SideBar';
import lupa from '../../assets/lupa2.png';


const Cursos = () => {
    return (
        <div className='grid_principal'>
            <SideBar></SideBar>
            <div className='cont_pag'>
                <h1>Cursos en progreso</h1>
                <div className='inp_bot'>

                </div>
            </div>
        </div>

    );
};

export default Cursos;