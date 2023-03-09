import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PokemonList from "../../components/pokemon-list/pokemon-list.component";

const Pokemon = () => {
  const params = useParams();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${params.set}`)
      .then( ( response) => response.json()  )
      .then( ( data ) => setPokemon( data.data ) )
  }, [])

  console.log(pokemon)

  return (
    <>
      <PokemonList props={pokemon}/>
    </>
  )
}

export default Pokemon;

