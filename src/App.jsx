import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
