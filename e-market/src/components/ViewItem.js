import UseFetch from './UseFetch';
import img from './hdp.png';
import { useParams } from 'react-router-dom';



const ViewItem = () => {

  const { id } = useParams();
  const { data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/${ id }`);

  return(
    <div className="item-view" id="page">
      <div className="top">
        <img src={ img } alt="item-img" />
        {error && <p>{ error }</p>}
        {isPending && <p>Please Wait</p>}
        {products && <div className="inner-grid">
          <div className="name">
            Name: {products.name_of_product}
          </div>
          <div className="price">
            Price: { products.price }
          </div>
          <div className="des">
            Description: { products.description }
          </div>
          <div className="num">
            Number Available: { products.number_avail }
          </div>
          
        </div>}
      </div>
      <div className="middle">
        <h2>Specs</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde deleniti culpa beatae labore ullam repellat. Non accusantium in doloribus corporis doloremque consequuntur sequi molestiae! Sequi praesentium hic minus? Dicta corrupti, nobis veniam blanditiis, minus possimus, dolorem illum magni a repudiandae corporis. Adipisci enim reiciendis, velit nesciunt cumque exercitationem officia modi voluptas maxime provident asperiores qui? Nobis, ab id voluptas dolores quibusdam, voluptatum sapiente expedita saepe libero illum animi beatae.</p>
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