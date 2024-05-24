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
import PerfilAdmin from './components/Admin/PerfilAdmin';
import BuscarAdm from './components/Admin/Buscar/BuscarAdm';
import ForumPage from './components/ForumPage/ForumPage';
import SideBar from './components/SideBar/SideBar';
import Examen from './components/Examen/Examen';
import Cursos_U from './components/Cursos_U/Cursos_U'
import Opiniones from './components/Profesor/Opiniones/Opiniones'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EduWave/:accessToken" element={<Usuario />} />
        <Route path="/EduWave/:accessToken/perfil" element={<PerfilUsuario />} />
        <Route path="/EduWave/:accessToken/perfil/progreso" element={<L_progreso />} />
        <Route path="/EduWave/:accessToken/perfil/favoritos" element={<L_favoritos />} />
        <Route path="/EduWave/:accessToken/perfil/terminados" element={<L_terminados />} />
        <Route path="/EduWave/:accessToken/perfil/cursos" element={<Cursos_U />} />
        <Route path="/EduWave/profesor/:accessToken" element={<PerfilProfesor />} />
        <Route path="/EduWave/profesor/:accessToken/cursos" element={<CursoSP />} />
        <Route path="/EduWave/profesor/:accessToken/cursos/crear" element={<CrearCursos />} />
        <Route path="/EduWave/profesor/:accessToken/cursos/editar" element={<EditarCursos />} />
        <Route path="/EduWave/profesor/:accessToken/opiniones" element={<Opiniones />} />
        <Route path="/EduWave/:accessToken/curso" element={<CursoDetallado />} />
        <Route path="/EduWave/:accesssToken/leccion" element={<LeccionDetallada />} />
        <Route path="/EduWave/:accessToken/tarea" element={<TareaDetallada />} />
        <Route path='/EduWave/admin/:accessToken' element={<PerfilAdmin />}/>
        <Route path="/EduWave/admin/buscar" element={<BuscarAdm />} />
        <Route path="/EduWave/:accessToken/foros" element={<ForumPage />} />
        <Route path="/EduWave/:accessToken/tarea/examen" element={<Examen />} />
      </Routes>
    </div>
  );
}

export default App;

