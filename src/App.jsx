import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Usuario from './components/Usuario/Usuario';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/EduWave"element={<Usuario/>}/>
      </Routes>
    </div>
  );
}

export default App;
