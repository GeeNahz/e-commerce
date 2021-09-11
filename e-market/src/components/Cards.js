import Button from "./Button";
import img from "./hdp.png";
import { Link } from 'react-router-dom';

// const handleClick = () => (
//   <Link to="/buy">Purchase</Link>
// )

const Cards = ({ products }) => {


  return (

      <div className="card">

        {products.map((product) => (
          <div className="container" key={product.id}>
            <div className="mycard">
              <Link to={`/product/${product.id}`}>
                <div className="img">
                  <img src={img} alt="some_images" />
                </div>
                <div className="myinfo">
                  <h1 className="name">
                    {product.name_of_product.length <= 15 ?
                      product.name_of_product :
                      `${product.name_of_product.substring(0, 18)}...`}
                  </h1>
                  <h3 className="des">
                    {product.description.length <= 25 ?
                      product.description :
                      `${product.description.substring(0, 25)}...`}
                  </h3>
                  <h3 className="price">Price: {product.price}</h3>
                </div>
              </Link>
              
              <div className="btns">
                <Button className='active' to="/purchase" onClick={(e) => {
                  console.log('custom event', e);
                }}>Buy</Button>
                <Button
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
