import Button from "./Button";

// images
// import headphone from "./hdp.png";
import H_potter from "./136251._SY475_.jpg";
// import mouse from "./30764.jpg";
import shoe from "./5.jpg";



const SiteDetails = ({ products }) => {

  let now = <img src={ H_potter } alt="img" />;
  let hey = <img src={ shoe } alt="img" />;
  
  // products && products.map((prod) => {
  //   switch (prod.name_of_product) {
  //     case "Headphone":
  //       then = <img src={headphone} alt="img" />
  //       break;
  //     case "Shoe":
  //       then = <img src={shoe} alt="img" />
  //       break;
  //     case "Wireless Mouse":
  //       then = <img src={mouse} alt="img" />
  //       break;
  //     case "Harry Porter: Deathly Hallows":
  //       then = <img scr={H_potter} alt="img" />
  //       break;
  //     default:
  //       then = null;
  //       break;
  //   }
  //   return then;
  // });
  


  return (
    <div className="site-details">
      {products.map((product) => (
        <div className="product" key={product.id}>

          {/* <h2 className="card-title" >{ product.category }</h2> */}
          <div className="p-details">
            <div className="img">
              { product.name_of_product === "Shoe" ? hey : now }
              {/* <img src={H_potter} alt="img" /> */}
            </div>
            <div className="info">
              <h3>{ product.name_of_product }</h3>
              <div className="des">{ product.description }</div>
              <div className="price" >{ product.price }</div>
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