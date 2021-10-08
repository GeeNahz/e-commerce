import useFetch from "./useFetch";
import Card from "./Card";


const Gadgets = () => {

  const {data: products, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/`);


  return (
    <div className="access-cat cat" id="page">
      <h2 className="header"> Accessories </h2>
      { isPending && <h2>Please wait</h2> }
      { error && <div>{ error }</div> }
      { products && <div className="exibit">
        {products.map((product) => {
          return product.category === "Accessories" && <Card product={ product } />
        })}
      </div> }
    </div>
  );
}

export default Gadgets;
