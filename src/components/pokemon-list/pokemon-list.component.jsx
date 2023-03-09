import PokemonListCard from "../pokemon-list-card/pokemon-list-card.component";
import Loader from "../loader/loader.component";
import PokemonSetListCard from "../pokemon-set-list-card/pokemon-set-list-card.component";

const PokemonList = ( {isLoading, props} ) => {
  return isLoading ?
    (
     <Loader/>
    ) : (
    <div className='card-list'>
      { props.map( ( pokemon ) => {
        return (<PokemonListCard props={pokemon}/>)
      })}
    </div>
  )


  // return isLoading ?
  //   (
  //     <Loader/>
  //   ) : (
  //     <div className='card-list'>
  //       { props.map( ( set ) => {
  //         return (<PokemonSetListCard props={set}/>)
  //       })}
  //     </div>
  //   )




}

export default PokemonList;