import {useEffect, useState} from "react";
import PokemonSetList from "../../components/pokemon-set-list/pokemon-set-list.component";
import axios from "axios";

function PokemonSet() {

  const [pokemonSets, setPokemonSets] = useState([]);
  const [isLoading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetch('https://api.pokemontcg.io/v2/sets')
  //     .then( ( response) => response.json()  )
  //     .then( ( pokemon ) => setPokemonSets( pokemon.data ) )
  // }, [])

  useEffect (() => {
    const getItems = async () => {
      const result = await axios(
        `https://api.pokemontcg.io/v2/sets` //Endpoint and parameter or base Url
      )
      setPokemonSets(result.data.data)//sets the data to appear
      setLoading(false) //stop loading when data is fetched
    }
    getItems()
  },[])


  return (
    <div className="App">
      <PokemonSetList isLoading={isLoading} props={pokemonSets}/>
    </div>
  );
}

export default PokemonSet;
