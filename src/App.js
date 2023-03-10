import {Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component";
import Pokemon from "./routes/pokemon/pokemon.component";
import './App.css'

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <h1 className="app-title">Savage Pokédex</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='set/:set' element={<Pokemon/>}/>
      </Routes>
    </>
  );
};

export default App;
