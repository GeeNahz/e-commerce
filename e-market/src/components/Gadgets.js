// import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";
import Cards from "./Cards";
// import SiteDetails from "./SiteDetails";


const Gadgets = () => {

  const {data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/`);


  return (
    <div className="access-cat" id="page">
      <h1> Accessories </h1>
      { isPending && <h2>Please wait</h2> }
      { error && <div>{ error }</div> }
      { products && <div>
        <Cards products={ products.filter((product) => product.category === "Accessories") } />
      </div> }
    </div>
  );
}
 
export default Gadgets;
