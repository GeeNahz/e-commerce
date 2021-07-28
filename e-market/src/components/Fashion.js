import UseFetch from "./UseFetch";
import Cards from "./Cards";



const Fashion = () => {

  const { data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/`);

  return (
    <div className="fashion" id="page">
      <h1>Fashion</h1>
      { isPending && <h2>Please wait</h2> }
      { error && <p>{ error }</p> }
      { products && <div>
        <Cards name={ products.category } products={ products.filter((product) => product.category === "Fashion") }/>
      </div> }
    </div>
  );
}
 
export default Fashion;