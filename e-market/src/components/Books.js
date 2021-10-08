import Card from "./Card";
import useFetch from "./useFetch";


const Books = () => {

  const { data: products, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/`);

  return(
    <div className="books_container cat" id='page'>
      <h2 className="header">Books</h2>
      { isPending && <h2>Please wait</h2>}
      { error && <div>{ error }</div> }
      { products && <div className="exibit">
        { products.map((product) => (
          product.category === "Books" && <Card product={ product } />
        ))}
      </div> }
    </div>
  );
}

export default Books;
