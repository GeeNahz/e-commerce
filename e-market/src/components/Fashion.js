import useFetch from "./useFetch";
import Card from "./Card";



const Fashion = () => {

  const { data: products, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/`);

  return (
    <div className="fashion cat" id="page">
      <h2 className="header" >Fashion</h2>
      { isPending && <h2>Please wait</h2> }
      { error && <div>{ error }</div> }
      { products && <div className="exibit">
        { products.map(product => (
          product.category === "Fashion" && <Card product={ product } />
        ))}
      </div>}
    </div>
  );
}

export default Fashion;
