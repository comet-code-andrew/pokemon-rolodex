import './pokemon-list-card.styles.css'
import {Link} from "react-router-dom";

const PokemonListCard = ({props}) => {
  console.log(props)
  return (
    <div className="pokemon-card-container">
      <img className="pokemon-card-container-image" src={`${props.images.large}`} alt="Vaporeon"/>
    </div>
  )
}


// <div className='card-container'>
//   <img className="card-container-image" alt={`Pokemon set ${props.name}`} src={`${props.images.logo}`} />
//   <h2>
//     <Link className={'title'} to={`set/${props.id}`}> {props.name} {props.id} </Link>
//   </h2>
// </div>

export default PokemonListCard;
