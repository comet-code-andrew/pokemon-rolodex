import {useEffect, useState} from "react";
import PokemonSetList from "../../components/pokemon-set-list/pokemon-set-list.component";
import axios from "axios";
import SearchBox from "../../components/search-box/search-box.component";

function PokemonSet() {

  const [pokemonSets, setPokemonSets] = useState([]);
  const [filteredPokemonSets, setFilteredPokemonSets] = useState('')
  const [isLoading, setLoading] = useState(true)
  const [searchField, setSearchField] = useState('')

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

  useEffect(() => {
    const filteredData = pokemonSets.filter((pokemonSet) => {
      return pokemonSet.name.toLowerCase().includes(searchField);
    })
    setFilteredPokemonSets(filteredData)
  }, [pokemonSets, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="Search pokimon"
      />
      <div className="App">

        <PokemonSetList isLoading={isLoading} props={filteredPokemonSets}/>
      </div>
    </>
  );
}

export default PokemonSet;
