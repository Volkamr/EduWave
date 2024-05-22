import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Usuario from './components/Usuario/Usuario';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import ForumPage from './components/ForumPage/ForumPage';
import SideBar from './components/SideBar/SideBar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/EduWave"element={<Usuario/>}/>
        <Route path="/EduWave/perfil" element={<PerfilUsuario/>}/>
        <Route path="/EduWave/foros" element={<ForumPage />} />

      </Routes>
    </div>
  );
}

export default App;
