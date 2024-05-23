import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Usuario from './components/Usuario/Usuario';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import L_progreso from './components/L_progreso/L_progreso';
import L_favoritos from './components/L_favoritos/L_favoritos';
import L_terminados from './components/L_terminados/L_terminados';
import PerfilProfesor from './components/Profesor/PerfilProfesor';
import CursoSP from './components/Profesor/CursosP/CursosP';
import CrearCursos from './components/Profesor/Crear/CrearCursos';
import EditarCursos from './components/Profesor/Editar/EditarCursos';
import CursoDetallado from './components/CursoDetallado/CursoDetallado';
import LeccionDetallada from './components/LeccionDetallada/LeccionDetallada';
import TareaDetallada from './components/TareaDetallada/TareaDetallada';
import BuscarAdm from './components/Admin/Buscar/BuscarAdm';
import ForumPage from './components/ForumPage/ForumPage';
import SideBar from './components/SideBar/SideBar';
import Examen from './components/Examen/Examen';

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
        <Route path="/EduWave/profesor" element={<PerfilProfesor />} />
        <Route path="/EduWave/profesor/cursos" element={<CursoSP />} />
        <Route path="/EduWave/profesor/cursos/crear" element={<CrearCursos />} />
        <Route path="/EduWave/profesor/cursos/editar" element={<EditarCursos />} />
        <Route path="/EduWave/cursos" element={<CursoDetallado />} />
        <Route path="/EduWave/leccion" element={<LeccionDetallada />} />
        <Route path="/EduWave/tarea" element={<TareaDetallada />} />
        <Route path="/EduWave/admin/buscar" element={<BuscarAdm />} />
        <Route path="/EduWave/foros" element={<ForumPage />} />
        <Route path="/EduWave/perfil/curso/tarea/examen" element={<Examen />} />
      </Routes>
    </div>
  );
}

export default App;

