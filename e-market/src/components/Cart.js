import Button from "./Button";
import img from "./4-300x300.jpg"
// import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";
import arrow from './angle-up.svg';




const Cart = () => {

  // const { id } = useParams();
  const { data: orders, orderIsPending, orderError } = useFetch(`http://localhost:8000/api/order/`);

  const { data: items, isPending, error } = useFetch(`http://127.0.0.1:8000/api/orderitem/`);
  

  const empty = "";

  return (

    <div className="cart" id="page views">
      
      {orderIsPending && <div>Pending</div>}
      {orderError && <div>{ orderError }</div>}
      {orders && <div className="product-totals">

        {orders.map((order) => (
          <div className="items general" key={order.id}>
            <p>No. of Items: <span> {order.cart_total_items} </span></p>
            <p>Total: <span> { order.cart_total_price } </span></p>
            <Button
              className="btns"
              to='/checkout'
              onClick={(e) => {
                console.log('custom event', e);
              }}
            >Checkout</Button>
          </div>
        ))}

      </div>}


      {isPending && <div>Pending</div>}
      {error && <div>{ error }</div>}
      {items && <div className="product-items">

        <div className="items verify general">
          <header className="headers">
            <h4>{empty}</h4>
            <h4>Items</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </header>

          {items.map((item) => (
            <section key={ item.id } className="items-list headers">
              <img src={ item.the_image } alt="prod-img" />
              <p>{ item.the_product_name }</p>
              <p>{ item.the_product_price }</p>
              <div className="quantity-container">
                <p className="qnt" >{item.quantity}</p>
                <div className="img-container">
                  < img src={arrow} alt="" className="arrow up" />
                  < img src={arrow} alt="" className="arrow down" />
                </div>
              </div>
              
              <p>{ item.the_total }</p>
            </section>
          ))}
        </div>

      </div>}


    </div>
  );
}

export default Cart;
