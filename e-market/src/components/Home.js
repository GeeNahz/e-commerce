import UseFetch from "./UseFetch";
import img from "./hdp.png";
import Cards from "./Cards";
import Card from "./Card";


const Home = () => {

  const { data: products, isPending, error } = UseFetch(`http://127.0.0.1:8000/api/product/`);

  // const shuffleArray = (arr) => {
  //   let newArray = [];
  //   let arrSize = arr.length;
    
  //   // loop through the length of the main array
  //   for (let index = 0; index < arrSize; index++) {
  //     let arrLength = arr.length;
  //     console.log('arrlenght', arrLength);
  //     // select a random item from the array
  //     let randNum = Math.floor(Math.random() * (arrLength));
  //     console.log(randNum);
  //     const randElement = arr[randNum];
  //     // push it to the new array
  //     newArray.push(randElement);
  //     // remove it from the previous array
  //     arr.splice(randNum, 1);

      
  //   }

  //   return newArray;
  // }
  
  
//   const renderCards = () => {
//     if (products){
//       return products.map((product, i) => {
//         console.log(product);
//         return i <= limit && <Card product={product} key={product.id} />
//       })
//     }
// }
//   let limit = 3;
//   const array = products && shuffleArray(products);
  
  // if (products && products.length > 1) { console.log('shuffled array', shuffleArray(products)) }

  // return (
  //   <div className="home">
  //     <div className="home-cards">
  //       { isPending && <h2>Please wait</h2> }
  //       { error && <h2>{ error }</h2> }
  //       <br />
  //       <br />
  //       <br />
  //       <div>
  //         <div className="exibit">
  //           {renderCards()}
  //         </div>
  //       </div>
  //       {/* { (products && products.length > 1) && <div>
  //         {console.log('ss', shuffleArray(products))}
  //         <div className="exibit">
  //           {(shuffleArray(products).map((product, i) => {
  //             return i <= limit && <Card product={product} key={ product.id } /> 
  //           }))}
  //         </div>
  //         } */}
  //         <br />
  //         <br />
  //         <br />
  //         <div>

    return (
      <div className="home" id="page">
        {isPending && <h2>Please wait</h2>}
        {error && <p>{error}</p>}
        {products && <div className="exibit">
          {products.map((product, i) => {
            return i <= 8 && <Card product={ product } key={ product.id }/>
          })}
        </div>}

        <div className="trusted">
          <h2 className="one" >Trusted By</h2>
          <img src={img} alt="img" className="five" />
          <div className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum itaque accusamus commodi, minus soluta dignissimos repellendus, vero cumque aperiam veritatis obcaecati officiis nihil nesciunt nulla reiciendis tempora perspiciatis!?</div>

          <h2 className="three" >Trusted By</h2>
          <img src={img} alt="img" className="six" />
          <div className="four" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestiae doloribus iure laudantium, minus assumenda expedita quos? Natus, error odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, molestiae.</div>
        </div>

      </div>

    );
  }

 
export default Home;