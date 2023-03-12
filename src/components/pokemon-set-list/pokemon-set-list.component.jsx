import PokemonSetListCard from "../pokemon-set-list-card/pokemon-set-list-card.component";

import './pokemon-set-list.styles.css'
import Loader from "../loader/loader.component";

const PokemonSetList = ( {isLoading, props} ) => {
  return isLoading ?
    (
      <Loader/>
    ) : (
      <div className='card-list'>
        { props.map( ( set ) => {
          return (<PokemonSetListCard props={set}/>)
        })}
      </div>
    )
}

export default PokemonSetList
