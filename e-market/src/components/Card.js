// import Button from "./Button"
// import shoe from './sneaker.png';
import Button from "./Button";


const Card = ({ product }) => {
  return (
    <div className="container">
      <img src="/#" alt="alt_img" />
      <h2>{ product.name }</h2>
      <h3>{ product.price }</h3>
      <Button
        to='./cart'
        onClick={(e) => {
          console.log('custom event', e);
        }}
      >Add to cart</Button>
    </div>
  );
}

export default Card;