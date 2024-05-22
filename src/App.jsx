import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Usuario from './components/Usuario/Usuario';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import L_progreso from './components/L_progreso/l_progreso';
import L_favoritos from './components/L_favoritos/l_favoritos';
import L_terminados from './components/L_terminados/l_terminados';
import Cursos from './components/Cursos_U/Cursos_U';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EduWave" element={<Usuario />} />
        <Route path="/EduWave/perfil" element={<PerfilUsuario />} />
        <Route path="/EduWave/perfil/cursos" element={<Cursos />} />
        <Route path="/EduWave/perfil/progreso" element={<L_progreso />} />
        <Route path="/EduWave/perfil/favoritos" element={<L_favoritos />} />
        <Route path="/EduWave/perfil/terminados" element={<L_terminados />} />
      </Routes>
    </div>
  );
}

export default App;
