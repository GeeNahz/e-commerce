import Button from "./Button";
import img from "./hdp.png";
import { Link } from 'react-router-dom';



const Cards = ({ products }) => {


  return (

      <div className="card">

        {products.map((product) => (
          <div className="cards" key={product.id}>

            <div className="main-card">
              <Link to={`/product/${ product.id }`}>
                <div className="inner-card">
                  <img src={img} alt="img" />
                  <div className="texts">
                    <h1 className="title">{product.name_of_product}</h1>
                    <h3>{product.description}</h3>
                    <h3>{product.price}</h3>
                  </div>
                </div>
              </Link>
              <div className="btns">
                <Button
                  className="buy-btn"
                  to='./purchase'
                  onClick={(e) => {
                    console.log('custom event', e);
                  }}
                >Buy</Button>
                <Button
                  className="cart-btn"
                  to='./cart'
                  onClick={(e) => {
                    console.log('custom event', e);
                  }}
                >Add to cart</Button>
              </div>
            </div>

          </div>
        ))}

      </div>
  );
}

export default Cards;
