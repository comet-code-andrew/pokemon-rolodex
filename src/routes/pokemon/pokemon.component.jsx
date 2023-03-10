import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PokemonList from "../../components/pokemon-list/pokemon-list.component";
import axios from "axios";
import SearchBox from "../../components/search-box/search-box.component";

const Pokemon = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState('')
  const [searchField, setSearchField] = useState('')
  const [loading, setLoading] = useState([]);

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

  useEffect(() => {
    const filteredData = pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchField);
    })
    setFilteredPokemon(filteredData)
  }, [pokemon, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="Search Pokémon"
      />
      <PokemonList isLoading={loading} props={filteredPokemon}/>
    </>
  )
}

export default Pokemon;

