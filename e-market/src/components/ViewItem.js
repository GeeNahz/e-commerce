import useFetch from './useFetch';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';



const ViewItem = () => {

  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/${ id }`);

  return(
    <div className="item-view" id="page views">
      <div className="box">
        <div className="top">
          <div className="img">
            {product && <img src={ product.image } alt="item" />}
          </div>
          {error && <p>{ error }</p>}
          {isPending && <p>Please Wait</p>}
          {product && <div className="inner-grid">
            <div className="name">
              Name: {product.name}
            </div>
            <div className="price">
              Price: { product.price }
            </div>
            <div className="des">
              Description: { product.description }
            </div>
            <div className="num">
              Number Available: { product.number_avail }
            </div>

          </div>}
        </div>
        <div className="middle">
          <h2>Specs</h2>
          {product && product.specification}
          <div className="btn">
            <Button
              to={`cart/${ id }`}
              onClick={(e) => {
                console.log('custom event', e);
              }}
            >Add to Cart</Button>
          </div>
          
        </div>
        <div className="bottom">
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </div>
      </div>
    </div>
  )
}

export default ViewItem;
