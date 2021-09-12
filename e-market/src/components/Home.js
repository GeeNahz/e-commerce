import UseFetch from "./UseFetch";
import img from "./hdp.png";
import Cards from "./Cards";
// import { useState } from 'react';
// import Cards from "./Cards";


const Home = () => {

  const { data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/`);

  return (
    <div className="home">
      <div className="home-cards">
        { isPending && <h2>Please wait</h2> }
        { error && <h2>{ error }</h2> }
        <br />
        <br />
        <br />
        { products && <div>
          <div className="exibit">
            <Cards products={ products.filter(product => product.id < 5) } />
          </div>
          <br />
          <br />
          <br />
          <div className="trusted">
            <h2 className="one" >Trusted By</h2>
            <img src={img} alt="img" className="five" />
            <div className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum itaque accusamus commodi, minus soluta dignissimos repellendus, vero cumque aperiam veritatis obcaecati officiis nihil nesciunt nulla reiciendis tempora perspiciatis!?</div>

            <h2 className="three" >Trusted By</h2>
            <img src={img} alt="img" className="six" />
            <div className="four" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestiae doloribus iure laudantium, minus assumenda expedita quos? Natus, error odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, molestiae.</div>
          </div>
          <br />
          <br />
          <br />
        </div> }
      </div>
    </div>
  );
}
 
export default Home;