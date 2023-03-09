import {Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home.component";
import Pokemon from "./routes/pokemon/pokemon.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='set/:set' element={<Pokemon/>}/>
    </Routes>
  );
};

export default App;
