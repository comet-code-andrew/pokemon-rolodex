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
      <div className="app-header">
        <h1 className="app-title">Pokédex</h1>
        <p className="app-description">On the desk there is my
          invention, POKEDEX! It contains all POKEMON trading card game sets and cards that have been released thus far
          using Pokemon TCG API! It's a hi-tech encyclopedia! Search for Sets and POKEMON!</p>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='set/:set' element={<Pokemon/>}/>
      </Routes>
    </>
  );
};

export default App;
