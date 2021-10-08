import useFetch from "./useFetch";
import Card from "./Card";
import hero from "./hero_img.jpg";
import mdp from "./male-dp.jpg";


const Home = () => {

  const { data: products, isPending, error } = useFetch(`http://127.0.0.1:8000/api/product/`);


  // const shuffleArray = (arr) => {
  //   let arrSize = arr.length;
  //   let newArray = [];

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
  //   console.log(newArray);

  //   return newArray;
  // }

  const shuffleArray = (arr) => {
    const shuffle = arr.sort(() => 0.5 - Math.random());
    return shuffle;
  }


    return (
      <div className="home" id="page">
        <div className="hero">
          <div className="img">
            <img src={hero} alt="hero-img" />
          </div>
          <h1>Markit</h1>
          <p className="first" >mark it</p>
          <p className="second" >and get it</p>
        </div>
        <div className="popular">
          <h2 className="green" >Popular Products</h2>

          {isPending && <h2>Please wait</h2>}
          {error && <p>{error}</p>}
          {products && <div className="exibit">
            {shuffleArray(products).map((product, i) => {
              return i <= 3 && <Card product={ product } key={ product.id }/>
            })}
          </div>
          }
        </div>

        <div className="trusted">
          <h2>What they say about us</h2>
          <div className="reviews">
            <div className="review-card">
              <div className="head">
                <img src={ mdp } alt="dp" />
                <h4>Bryan Noore</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste! Assumenda modi maxime minus fugiat laborum, hic dolore sint voluptatum.</p>
            </div>
            <div className="review-card">
              <div className="head">
                <img src={ mdp } alt="dp" />
                <h4>Bryan Noore</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste! Assumenda modi maxime minus fugiat laborum, hic dolore sint voluptatum.</p>
            </div>
            <div className="review-card">
              <div className="head">
                <img src={ mdp } alt="dp" />
                <h4>Bryan Noore</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste! Assumenda modi maxime minus fugiat laborum, hic dolore sint voluptatum.</p>
            </div>
          </div>
        </div>

      </div>

    );
  }


export default Home;
