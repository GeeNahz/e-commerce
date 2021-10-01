import pork from "./pork.jpg";


const About = () => {
  return (
    <div className="about" >
      <div className="abt">
        <div className="img">
          <img src={ pork } alt="abt-img" />
        </div>
        <div className="details">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et excepturi quasi asperiores inventore magnam saepe odio veritatis eveniet, iusto nobis vitae deleniti pariatur quod libero tempora fugiat ullam tempore eos?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
