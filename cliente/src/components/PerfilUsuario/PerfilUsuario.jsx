import React, { useState } from 'react';
import './PerfilUsuario.css';
import profileImage from '../../assets/john_usuario.png';  // Ruta al ícono
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SideBar from '../SideBar/SideBar';

const PerfilUsuario = () => {
  const [activeTab, setActiveTab] = useState('informacion');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(profileImage);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'informacion':
        return (
          <div className="contenido">
            <h2>Información general</h2>
            <form>
              <div className="form-group">
                <label>Nombre completo:</label>
                <input type="text" defaultValue="John Jario Smith del Carmen Cortéz" />
              </div>

              <div className="form-group-inline">
                <div className="form-group">
                  <label>Nombre de usuario:</label>
                  <input type="text" defaultValue="xXx_Jjohnmith234_xXx" />
                </div>

                <div className="form-group">
                  <label>Teléfono:</label>
                  <PhoneInput
                    country={'co'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    inputStyle={{ width: '100%' }}
                    containerStyle={{ width: '100%' }}
                    buttonStyle={{ paddingRight: '10px' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Correo electrónico:</label>
                <input type="email" defaultValue="xXx_Jjohnmith234_xXx@gmail.com" />
              </div>

              <div className="form-group">
                <label>Puesto en la compañía:</label>
                <input type="text" defaultValue="Visual Designer" />
              </div>

              <button type="button">Solicitar cambiar la información</button>
            </form>
          </div>
        );
      case 'notificaciones':
        return (
          <div className="contenido">
            <h2>Notificaciones</h2>
            <p>Las notificaciones están siendo enviadas al correo *correo*</p>
            <label>
              <input type="checkbox" />
              Permitir que Eduwave le envíe notificaciones al correo
            </label>
            <h3>Notificaciones de eventos</h3>
            <label>
              <input type="checkbox" />
              Recibir notificaciones de nuevos cursos, eventos, etc
            </label>
            <label>
              <input type="checkbox" />
              Recibir notificaciones de cursos en los que esté inscrito
            </label>
            <label>
              <input type="checkbox" />
              Recibir notificaciones de los foros de los cursos en los que esté inscrito
            </label>
          </div>
        );
      case 'certificados':
        return (
          <div className="contenido">
            <h2>Certificados</h2>
            <p>Aquí se mostrarán los certificados obtenidos.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid_principal">
      <SideBar />
      <div className="perfil-usuario">
        <aside>
          <div className="perfil">
            <img src={profilePic} className="img_perfil" alt="John Smith" height="200px" />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              id="fileInput" 
              style={{ display: 'none' }} 
            />
            <label htmlFor="fileInput" className="btn_editar_foto">Editar foto</label>
            <h2>John Smith</h2>
            <p>Visual Designer</p>
          </div>
          <nav>
            <ul>
              <li className={activeTab === 'informacion' ? 'activo' : ''} onClick={() => setActiveTab('informacion')}>
                Información general
              </li>
              <li className={activeTab === 'notificaciones' ? 'activo' : ''} onClick={() => setActiveTab('notificaciones')}>
                Notificaciones
              </li>
              <li className={activeTab === 'certificados' ? 'activo' : ''} onClick={() => setActiveTab('certificados')}>
                Certificados
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default PerfilUsuario;
