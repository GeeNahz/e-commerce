import Button from "./Button";
import img from "./4-300x300.jpg"
// import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";




const Cart = () => {

  // const { id } = useParams();
  const { data: items, isPending, error } = useFetch(`http://127.0.0.1:8000/api/orderitem/`);

  const empty = "";

  return (

    <div className="cart" id="page views">

      {isPending && <div>Pending</div>}
      {error && <div>{ error }</div>}
      {items && <div className="product-items">
        
        <div className="items general">
          <h4>No. of Items: {"items"}</h4>
          <h4>Total: {"total"}</h4>
          <Button
            className="btns"
            to='/checkout'
            onClick={(e) => {
              console.log('custom event', e);
            }}
          >Checkout</Button>
        </div>

        <div className="verify general">
          <header className="headers">
            <h4>{empty}</h4>
            <h4>Items</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </header>

          {items.map((item) => (
            <section key={ item.id } className="items-list headers">
              {/* <img src={ item.the_image } alt="prod-img" /> */}
              <img src={ item.the_image } alt="prod-img" />
              <p>{ item.the_product_name }</p>
              <p>{item.the_product_price }</p>
              <p><input type="number" name="qntty" value={ item.quantity } /></p>
              <p>{ item.the_total }</p>
            </section>
          ))}
        </div>

      </div>}


    </div>
  );
}

export default Cart;
