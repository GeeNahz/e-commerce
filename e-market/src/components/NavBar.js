import { Link } from "react-router-dom";
import cart from "./Full-Cart-icon.png";
import search from "./search-icon.png";
import logo from "./dummy-logo.png";
import { useState } from "react";

const NavBar = () => {

  const [home, setHome] = useState("isSelected");
  const [about, setAbout] = useState();
  const [category, setCategory] = useState();
  

  const handleClick1 = () => {
    setHome("isSelected");
    setAbout("");
    setCategory("");
  }

  const handleClick2 = () => {
    setHome("");
    setAbout("isSelected");
    setCategory("");
  }

  const handleClick3 = () => {
    setHome("");
    setAbout("");
    setCategory("isSelected");
  }

  return (
    <nav className="main-nav">
      <div className="align">
        <img src={ logo } alt="" />
      </div>
      <div className="links">
        <ul>
          <li><Link to='/' onClick={ handleClick1 } className={ home } >home</Link></li>
          <li>
            <div to='#' onClick={ handleClick3 } className={ "dropdown " + category }>
              <div className="dropbtn" >category</div>
              <div className="dropdown-content" >
                <Link to="/gadget" >Accessories</Link>
                <Link to="/book" >Books</Link>
                <Link to="/fashion" >Fashion</Link>
              </div>
            </div>
          </li>
          <li><Link to='/about' onClick={ handleClick2 } className={ about } >about us</Link></li>
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