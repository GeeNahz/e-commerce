import { Link } from "react-router-dom";
import cart from "./Full-Cart-icon.png";
import search from "./search-icon.png";
import logo from "./dummy-logo.png";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="align">
        <img src={ logo } alt="" />
      </div>
      <div className="links">
        <ul>
          <li><Link to='/' className="home-nav" >HOME</Link></li>
          <li>
            <div to='#' className="dropdown">
              <div className="dropbtn" >CATEGORY</div>
              <div className="dropdown-content" >
                <Link to="/gadget" >Accessories</Link>
                <Link to="/book" >Books</Link>
                <Link to="/fashion" >Fashion</Link>
              </div>
            </div>
          </li>
          <li><Link to='/about'>ABOUT</Link></li>
         </ul>
      </div>
      <div className="icons">
        <Link to='/cart'>
          <img src={cart} alt="cart-icon" />
        </Link>
        <Link to="./purchase">
          <img src={ search } alt="search-icon" />
        </Link>
      </div>
    </nav>
  );
}
 
export default NavBar;