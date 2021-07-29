// import Button from "./Button";
import img from "./hdp.png";
// import { Link } from 'react-router-dom';



const Cards = ({ products }) => {


  return (

      <div className="card">

        {products.map((product) => (
          <div className="container" key={product.id}>
            <div className="mycard">
              <div className="img">
                <img src={ img } alt="some_images" />
              </div>
              <div className="myinfo">
                <h1 className="name">Name: {product.name_of_product}</h1>
                <h3 className="des">Description: {product.description}</h3>
                <h3 className="price">Price: {product.price}</h3>
                <div className="empty"></div>
                <div className="btns">
                  <button className="active">Buy</button>
                  <button>Cart</button>
                  {/* <button>Details</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
  );
}

export default Cards;
