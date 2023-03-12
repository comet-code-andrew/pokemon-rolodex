import './search-box.styles.css';

const SearchBox = ( props )=> {

  return (

    <div className="wrap">
      <div className="search">
        <input
          className={`search-box ${props.className}`}
          type={"search"}
          onChange={props.onChangeHandler}
        />
      </div>
    </div>

      );
}

export default SearchBox;
