import Hero from "../../molecules/Hero/Hero";
import FeaturedProducts from "../../organisms/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div id={"home"}>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Home;
