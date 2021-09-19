const Loader = ({ show }) => {
    return (
        (show) ?
        <div className="container text-center my-5 py-5">
         <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> </div>: ""
    )
}
export default Loader;
