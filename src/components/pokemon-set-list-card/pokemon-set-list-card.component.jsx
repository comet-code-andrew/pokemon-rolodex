import './pokemon-set-list-card.styles.css'
import {Link} from "react-router-dom";

const PokemonSetListCard = ( {props} ) => {
  return(
    <div className='card-container'>
      <img className="card-container-image" alt={`Pokemon set ${props.name}`} src={`${props.images.logo}`} />
      <h2>
        <Link className={'title'} to={`set/${props.id}`}> {props.name} {props.id} </Link>
      </h2>
    </div>
  )
}

export default PokemonSetListCard