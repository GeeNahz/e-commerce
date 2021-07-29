import Button from "./Button"
import shoe from './sneaker.png';


const Card = () => {
  return (
    <div className="container">
      <div className="mycard">
        <div className="img">
          <div className="circle"></div>
          <img src={shoe} alt="img" />
        </div>
        <div className="myinfo">
          <h1 className="mytitle">Title</h1>
          <h3 className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore adipisci impedit, quidem placeat expedita voluptatum ea. Corrupti eaque nulla cumque inventore velit fugiat magni unde atque dolores. Facere, ab ipsum.</h3>
          <div className="btns">
            <button>Cart</button>
            <button className="active">Details</button>
          </div>
          <div className="purchase">
            <Button to="/buy" onClick={(e) => {
              console.log('custom event', e);
            }}>Buy</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;