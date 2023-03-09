import {useEffect, useState} from "react";
import PokemonSetList from "../../components/pokemon-set-list/pokemon-set-list.component";

function Home() {

  const [pokemonSets, setPokemonSets] = useState([]);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/sets')
      .then( ( response) => response.json()  )
      .then( ( pokemon ) => setPokemonSets( pokemon.data ) )
  }, [])

  return (
    <div className="App">
      <PokemonSetList props={pokemonSets}/>
    </div>
  );
}

export default Home;