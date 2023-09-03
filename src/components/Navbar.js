const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Lets Call</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <button onClick={clicked} className="btn btn-outline-dark" type="submit">GET USER DATA</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
export default Navbar;

