import PokemonSetListCard from "../pokemon-set-list-card/pokemon-set-list-card.component";

import './pokemon-set-list.styles.css'
import Loader from "../loader/loader.component";

const PokemonSetList = ( {isLoading, props} ) => {
  console.log(isLoading)
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

// const HouseNames = ({ items, isLoading }) => {
//   return isLoading ? (   //Checkif if is loading
//     <Loader/>
//   ) : (
//     <section className="frame">
//       {items.map((item)  => (   //here we map through the items
//         <h1>{item.name}</h1>
//       ))}
//     </section>
//   )
// }




export default PokemonSetList
