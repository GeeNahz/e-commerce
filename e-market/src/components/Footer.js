import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="location">
          <h2>Location</h2>
          <Link to="/abj" >Abuja</Link>
          <Link to="/lag" >Lagos</Link>
          <Link to="/ibdn" >Ibadan</Link>
          <Link to="/ph" >Port Harcourt</Link>
          <Link to="/kano" >Kano</Link>
        </div>
        <div className="contact">
          <h2>Contact Info</h2>
          <p>+123 4567 8901 234</p>
          <p>+123 4567 8901 234</p>
          <p>odswebmail@ods.com</p>
          <p>odswebmail@gmail.com</p>
        </div>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <Link to="/" >Home</Link>
          <Link to="/contact" className="contact" >Contact Us</Link>
          <Link to="/about" className="about" >About Us</Link>
          <Link to="/feedback" className="feedback">Feedback</Link>
        </div>
        <div className="follow">
          <h2>Follow Us</h2>
          <Link to="/fb" >Abuja</Link>
          <Link to="/ig" >Lagos</Link>
          <Link to="/tweet" >Ibadan</Link>
        </div>
      </div>
      <p>copyright @ 2021 By <Link to="/some-site"><span>Od's Web</span></Link> </p>
    </footer>
  );
}
 
export default Footer;