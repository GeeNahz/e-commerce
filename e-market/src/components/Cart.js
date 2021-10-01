import { useState } from "react";
import Button from "./Button";



const Cart = () => {

  const empty = "";
  const items = "";
  const total = "";
  const name = "Short";
  const [qntty, setQntty] = useState("0");
  const price = "1234";
  const Total = parseInt(qntty) * parseInt(price);


  return (
    <div className="checkout" id="page views">
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
        <section className="items-list headers">
          <img src={"#"} alt="prod-img" />
          <p>{name}</p>
          <p>{price}</p>
          <p><input type="number" name="qntty" value={qntty} onChange={e => setQntty(e.target.value)} /></p>
          <p>{Total}</p>
        </section>
      </div>
    </div>
  );
}

export default Cart;
