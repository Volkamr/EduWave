import React, { useState } from 'react';
import Profile from "../../../assets/profile.png";
import 'boxicons';
import './SideBarP';

const SideBarP = () => {

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
                        <a href="#">
                            <box-icon class="bx bx-home" type='solid' name='home'></box-icon>
                            <span className="links_name">Home</span>
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <a href="#">
                            <box-icon className="bx bx-folder" type='solid' name='folder'></box-icon>
                            <span className="links_name">Cursos</span>
                        </a>
                        <span className="tooltip">Cursos</span>
                    </li>
                    <li>
                        <a href="#">
                            <box-icon className="bx bx-comment" type='solid' name='chat'></box-icon>
                            <span className="links_name">Opiniones</span>
                        </a>
                        <span className="tooltip">Foros</span>
                    </li>
                    <li>
                        <a href="#">
                            <box-icon className="bx bx-conf" type='solid' name='cog'></box-icon>
                            <span className="links_name">Config</span>
                        </a>
                        <span className="tooltip">Config</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_detail">
                            <img src={Profile} alt=""></img>
                            <div className="name_job">
                                <div className="nombre">Ms. Maria Paula</div>
                                <div className="job">Profesora</div>
                            </div>
                        </div>
                        <box-icon className="bx bx-logout" id="log_out" name='log-out-circle'></box-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarP;