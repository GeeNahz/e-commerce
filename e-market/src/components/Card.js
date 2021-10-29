import { Link } from 'react-router-dom';



const Card = ({ product }) => {

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  let csrftoken = getCookie('csrftoken');


  const updateCartDetails = (productId, action) => {

    let url = `http://127.0.0.1:8000/item_update/`;

    fetch(url, {
      credentials:'same-origin',
      method:'POST',
      mode:'cors',
      header:{
        'Accept': '/',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({'productID':productId, 'action':action})
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log('This is the data: ', data);
    }).catch(err => {
      console.log("Error found: " + err);
    })
  }

  return (
    <div className="gom">
      <div className="containers" >
          <div className="ca" key={ product.id }>
            <Link to={`product/${ product.id }`}>
              <img src={ product.image } alt="product" />
              <div className="details">
              <h3>{product.name }</h3>
              <h4>{product.price }</h4>
              </div>
            </Link>
            <div className="btn">
              <button onClick={ function(){
                updateCartDetails(product.id, "add")
              }} >Add to Cart</button>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Card;
