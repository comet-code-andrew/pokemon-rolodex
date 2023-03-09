import {useEffect, useState} from "react";
import PokemonSetList from "../../components/pokemon-set-list/pokemon-set-list.component";

function PokemonSet() {

  const [pokemonSets, setPokemonSets] = useState([]);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/sets')
      .then( ( response) => response.json()  )
      .then( ( pokemon ) => setPokemonSets( pokemon.data ) )
  }, [])

  console.log(pokemonSets)

  return (
    <div className="App">
      <PokemonSetList props={pokemonSets}/>
    </div>
  );
}

export default PokemonSet;
