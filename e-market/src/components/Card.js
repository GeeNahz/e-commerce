// import Button from "./Button"
import shoe from './sneaker.png';
import Button from "./Button";
import { Link } from 'react-router-dom';


const Card = ({ product }) => {
  
  
  return (
     <div className="containers" >
        <div className="ca" key={ product.id }>
          <Link to='/purchase'>
            <img src={shoe} alt="alt_img" />
            <div className="details">
            <h2>{product.name_of_product }</h2>
            <h3>{product.price }</h3>
            </div>
          </Link>
          <div className="btn">
            <Button
              to='./cart'
              onClick={(e) => {
                console.log('custom event', e);
              }}
            >Add to cart</Button>
          </div>
        </div>
    </div>
  );
}

export default Card;