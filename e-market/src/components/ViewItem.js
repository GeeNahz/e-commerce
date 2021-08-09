import UseFetch from './UseFetch';
import img from './hdp.png';
import { useParams } from 'react-router-dom';



const ViewItem = () => {

  const { id } = useParams();
  const { data: product, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/${ id }`);

  return(
    <div className="item-view" id="page">
      <div className="top">
        <img src={ img } alt="item-img" />
        {error && <p>{ error }</p>}
        {isPending && <p>Please Wait</p>}
        {product && <div className="inner-grid">
          <div className="name">
            Name: {product.name_of_product}
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
        <p>
          {product && product.specification}
        </p>
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
  )
}

export default ViewItem;