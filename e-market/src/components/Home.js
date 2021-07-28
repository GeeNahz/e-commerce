import SiteDetails from "./SiteDetails";
// import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";
import img from "./hdp.png";


const Home = () => {

  const { data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/`);

  return (
    <div className="home">
      <div className="home-cards">
        { isPending && <h2>Loading...</h2> }
        { error && <h2>{ error }</h2> }
        { products && <div>
          <SiteDetails products={ products } />
          <div className="trusted">
            <h2 className="one" >Trusted By</h2>
            <img src={img} alt="img" className="five" />
            <p className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum itaque accusamus commodi, minus soluta dignissimos repellendus, vero cumque aperiam veritatis obcaecati officiis nihil nesciunt nulla reiciendis tempora perspiciatis!?</p>

            <h2 className="three" >Trusted By</h2>
            <img src={img} alt="img" className="six" />
            <p className="four" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestiae doloribus iure laudantium, minus assumenda expedita quos? Natus, error odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, molestiae.</p>
          </div>
        </div> }
      </div>
    </div>
  );
}
 
export default Home;