import React, { useState } from 'react';
import Profile from "../../../assets/profile.png";
import { Link } from "react-router-dom";
import 'boxicons';
import './SideBarAdm.css';

const SideBarAdm = () => {

    const [action, setAction] = useState("");
    const toggleAction = () => {
        setAction(action === "" ? "active" : "");
    };

    return (

        <div className="cuerpo">
            <div className={`sidebar ${action === 'active' ? 'active' : ''}`}>
                <div className="logo_content">
                    <div className="logo">
                        <box-icon color="white" className="bx bxl-sushi" type='solid' name='sushi'></box-icon>
                        <div className="logo_name">EduWave</div>
                    </div>
                    <box-icon className="bx bx-menu" id="btn" name='menu'
                        onClick={toggleAction}
                    ></box-icon>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link to="/EduWave/admin">
                            <box-icon class="bx bx-home" type='solid' name='home'></box-icon>
                            <span className="links_name">Home</span>
                        </Link>
                        <a href="/EduWave">

                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <Link to="/EduWave/admin/buscar">
                            <box-icon className="bx bx-folder" type='solid' name='folder'></box-icon>
                            <span className="links_name">Cursos</span>
                        </Link>
                        <span className="tooltip">Cursos</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_detail">
                            <img src={Profile} alt=""></img>
                            <div className="name_job">
                                <div className="nombre">Maria Paula</div>
                                <div className="job">Administradora</div>
                            </div>
                        </div>
                        <box-icon className="bx bx-logout" id="log_out" name='log-out-circle'></box-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarAdm;