import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PokemonList from "../../components/pokemon-list/pokemon-list.component";
import axios from "axios";

const Pokemon = () => {
  const params = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${params.set}`)
  //     .then( ( response) => response.json()  )
  //     .then( ( data ) => setPokemon( data.data ) )
  // }, [])

  useEffect (() => {
    const getItems = async () => {
      const result = await axios(
        `https://api.pokemontcg.io/v2/cards?q=set.id:${params.set}` //Endpoint and parameter or base Url
      )
      setPokemon(result.data.data)//sets the data to appear
      setLoading(false) //stop loading when data is fetched
    }
    getItems()
  },[])

  return (
    <>
      <PokemonList isLoading={loading} props={pokemon}/>
    </>
  )
}

export default Pokemon;

