import Button from "./Button";
import img from "./4-300x300.jpg"
import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";




const Cart = () => {

  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/${id}`);


  const orderItems = [
    {
        name: 'shirt',
        price: '230',
        quantity: '1'
    },
    {
        name: 'Headphone',
        price: '120',
        quantity: '2'
    },
    {
        name: 'Short',
        price: '123',
        quantity: '1'
    }
  ]
  const empty = "";
  const items = "";
  const total = "";
  // const name = "Short";
  // const [qntty, setQntty] = useState();
  // const price = "1234";
  // const Total = parseInt(qntty) * parseInt(price);


  return (

    <div className="cart" id="page views">

      {isPending && <div>Pending</div>}
      {error && <div>{ error }</div>}
      {product && <div className="product-items">
        
        <div className="items general">
          <h4>No. of Items: {items}</h4>
          <h4>Total: {total}</h4>
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

          {orderItems.map((orderItem) => (
            <section key={ orderItem.name } className="items-list headers">
            <img src={img} alt="prod-img" />
            <p>{ orderItem.name }</p>
            <p>{ orderItem.price }</p>
            <p><input type="number" name="qntty" value={ orderItem.quantity } /></p>
            <p>{ "Total" }</p>
            </section>
          ))}
        </div>

      </div>}


    </div>
  );
}

export default Cart;
