import Hero from "../../molecules/Hero/Hero";
import FeaturedProducts from "../../organisms/FeaturedProducts/FeaturedProducts";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Home = () => {
  return (
    <Wrapper id={"home"}>
      <Hero />
      <FeaturedProducts />
    </Wrapper>
  );
};
export default Home;
