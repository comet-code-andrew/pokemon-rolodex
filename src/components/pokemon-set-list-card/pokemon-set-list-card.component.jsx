import './pokemon-set-list-card.styles.css'
import {Link} from "react-router-dom";

const PokemonSetListCard = ( {props} ) => {
  return(
    <Link className='card-container rainbow'  to={`set/${props.id}`}>
      <img className="card-container-image" alt={`Pokemon set ${props.name}`} src={`${props.images.logo}`} />
      <p> set: {props.name}</p>
      <p> printed: {props.printedTotal}</p>
      <p> released: {props.releaseDate}</p>
    </Link>
  )
}

export default PokemonSetListCard
