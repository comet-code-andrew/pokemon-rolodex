import PokemonListCard from "../pokemon-list-card/pokemon-list-card.component";

const PokemonList = ( {props} ) => {
  return(
    <div className='card-list'>
      { props.map( ( pokemon ) => {
        return (<PokemonListCard props={pokemon}/>)
      })}
    </div>
  )
}

export default PokemonList;