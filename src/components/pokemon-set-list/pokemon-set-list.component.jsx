const PokemonSetList = ( {props} ) => {
  return(
    <div className='card-list'>
      { props.map( ( set ) => {
        return (<p>{set.name}</p>)
      })}
    </div>
  )
}

export default PokemonSetList
