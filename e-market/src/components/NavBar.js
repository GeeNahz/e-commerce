import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="align">
        <h1 className="title">e-markit</h1>
      </div>
      <div className="links">
        <Link to='/' className="home-nav" >HOME</Link>
        <Link to='#' className="dropdown">
          <div className="dropbtn" >CATEGORY</div>
          <div className="dropdown-content" >
            <Link to="/gadget" >Accessories</Link>
            <Link to="/book" >Books</Link>
            <Link to="/fashion" >Fashion</Link>
          </div>
        </Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/cart'>MY CART</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;