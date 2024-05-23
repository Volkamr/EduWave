import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Usuario from './components/Usuario/Usuario';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';

import L_progreso from './components/L_progreso/l_progreso';
import L_favoritos from './components/L_favoritos/l_favoritos';
import L_terminados from './components/L_terminados/l_terminados';
import PerfilProfesor from './components/Profesor/PerfilProfesor';
import CursosP from './components/Profesor/CursosP/CursosP';
import CrearCursos from './components/Profesor/Crear/CrearCursos';
import EditarCursos from './components/Profesor/Editar/EditarCursos';
import ForumPage from './components/ForumPage/ForumPage';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EduWave" element={<Usuario />} />
        <Route path="/EduWave/perfil" element={<PerfilUsuario />} />
        <Route path="/EduWave/perfil/progreso" element={<L_progreso />} />
        <Route path="/EduWave/perfil/favoritos" element={<L_favoritos />} />
        <Route path="/EduWave/perfil/terminados" element={<L_terminados />} />
        <Route path='/EduWave/profesor' element={<PerfilProfesor/>}/>
        <Route path='/EduWave/profesor/cursos' element={<CursosP/>}/>
        <Route path='/EduWave/profesor/cursos/crear' element={<CrearCursos />}/>
        <Route path='/EduWave/profesor/cursos/editar' element={<EditarCursos />}/>
        <Route path="/EduWave/foros" element={<ForumPage />} />
      </Routes>
    </div>
  );
}

export default App;
