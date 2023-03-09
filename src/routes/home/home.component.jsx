import {Route, Routes} from "react-router-dom";

import PokemonSet from "../pokemon-set/pokemon-set.component";
import Pokemon from "../pokemon/pokemon.component";

const Home = () => {
  return (
    <Routes>
      <Route index element={<PokemonSet/>}/>
      <Route path=":set" element={<Pokemon/>}/>
    </Routes>
  )
}

export default Home;