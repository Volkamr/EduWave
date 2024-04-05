import React from 'react';
import NavToggle from '../NavToggle/NavToggle';
import './PerfilUsuario.css';
import { User1 } from '../../Data';
import Calendario from '../Calendario/Calendario';

const PerfilUsuario = () => {
    return (
        <container className="Container_info">
            <div className="user-info-wrapper">
                <NavToggle></NavToggle>
                <div className="info_personal">
                    <h1 className="h1_info_personal">Información Personal</h1>
                    <div className="foto_perfil">
                        <img src={User1.foto_perfil} className="img_perfil" height="200px" />
                        <div className="btn_editar_foto">
                            <p>Editar foto</p>
                        </div>
                    </div>
                    <div className="columna1">
                        <div className="info">
                            <h3 className="h3_info_perfil">Nombre</h3>
                            <p className="p_info_perfil">{User1.nombre}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Cargo</h3>
                            <p className="p_info_perfil">{User1.cargo}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Correo</h3>
                            <p className="p_info_perfil">{User1.correo}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Cédula</h3>
                            <p className="p_info_perfil">{User1.cedula}</p>
                        </div>
                    </div>
                    <div className="columna2">
                        <div className="info">
                            <h3 className="h3_info_perfil">Teléfono</h3>
                            <p className="p_info_perfil">{User1.telefono}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Dirección</h3>
                            <p className="p_info_perfil">{User1.direccion}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Ciudad de nacimiento</h3>
                            <p className="p_info_perfil">{User1.ciudad_nac}</p>
                        </div>
                        <div className="info">
                            <h3 className="h3_info_perfil">Fecha de Nacimiento</h3>
                            <p className="p_info_perfil">{User1.fecha_nac}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="calendario">
                <h1 className="h1_horario">Horario</h1>
                <Calendario></Calendario>
            </div>
        </container>

    );
};

export default PerfilUsuario;