import "./hero.scss";
import Heading from "../../atoms/Heading/Heading";

const Hero = () => {
  return (
    <div id={"hero"}>
      <div className={"hero-image"}></div>
      <div className={"hero-text"}>
        <Heading>Ecommerce</Heading>
        <p>Your one stop shop for the latest trends.</p>
      </div>
    </div>
  );
};
export default Hero;
