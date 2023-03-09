import './pokemon-set-list-card.styles.css'

const PokemonSetListCard = ( {props} ) => {
  console.log({props})
  return(
    <div className='card-container'>
      <img className="card-container-image" alt={`Pokemon set ${props.name}`} src={`${props.images.logo}`} />
      <h2>{props.name}</h2>
    </div>
  )
}

export default PokemonSetListCard