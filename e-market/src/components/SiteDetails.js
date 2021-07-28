import Button from "./Button";
import img from "./hdp.png";


const SiteDetails = ({ products }) => {


  return (
    <div className="site-details">
      {products.map((product) => (
        <div className="product" key={product.id}>

          <h2 className="card-title" >{ product.category }</h2>
          <div className="p-details">
            <div className="img">
              <img src={ img } alt="img" />
            </div>
            <div className="info">
              <h3>{ product.name_of_product }</h3>
              <p>{ product.description }</p>
              <p>{ product.price }</p>
            </div>
            <div className="btns">
              <Button
                to='./purchase'
                onClick={(e) => {
                  console.log('custom event', e);
                }}
              >Buy</Button>
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
 
export default SiteDetails;