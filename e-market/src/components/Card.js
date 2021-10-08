import Button from "./Button";
import { Link } from 'react-router-dom';


const Card = ({ product }) => {


  return (
    <div className="gom">
      <div className="containers" >
          <div className="ca" key={ product.id }>
            <Link to={`product/${ product.id }`}>
              <img src={ product.image } alt="product" />
              <div className="details">
              <h3>{product.name }</h3>
              <h4>{product.price }</h4>
              </div>
            </Link>
            <div className="btn">
              <Button
                to={`product/${ product.id }`}
                onClick={(e) => {
                  console.log('custom event', e);
                }}
              >Add to cart</Button>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Card;
