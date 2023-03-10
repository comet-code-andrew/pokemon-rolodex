import './search-box.styles.css';

const SearchBox = ( props )=> {
  return(

    <div className="wrap">
      <div className="search">
        <input
          className={`search-box ${props.className}`}
          type={"search"}
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
        />
      </div>
    </div>
  );
}

export default SearchBox;
