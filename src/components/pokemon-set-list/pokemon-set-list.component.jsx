import PokemonSetListCard from "../pokemon-set-list-card/pokemon-set-list-card.component";

import './pokemon-set-list.styles.css'

const PokemonSetList = ( {props} ) => {
  return(
    <div className='card-list'>
      { props.map( ( set ) => {
        return (<PokemonSetListCard props={set}/>)
      })}
    </div>
  )
}

export default PokemonSetList
