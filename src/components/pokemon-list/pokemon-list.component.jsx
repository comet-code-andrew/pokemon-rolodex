const PokemonList = ( {props} ) => {
  return(
    <div className='card-list'>
      { props.map( ( pokemon ) => {
        return (<p> {pokemon.name}</p>)
      })}
    </div>
  )
}

export default PokemonList