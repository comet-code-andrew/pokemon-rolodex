import './loader.styles.css'

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader;
