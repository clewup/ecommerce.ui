import "./home.scss";
import Hero from "../../molecules/Hero/Hero";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import TrendingProducts from "../../organisms/TrendingProducts/TrendingProducts";
import SaleProducts from "../../organisms/SaleProducts/SaleProducts";
import AdvertisementsBanner from "../../organisms/AdvertisementsBanner/AdvertisementsBanner";
import CategoriesBanner from "../../organisms/CategoriesBanner/CategoriesBanner";

const Home = () => {
  return (
    <Wrapper id={"home"}>
      <Hero />
      <AdvertisementsBanner />
      <CategoriesBanner />
      <TrendingProducts />
      <SaleProducts />
    </Wrapper>
  );
};
export default Home;
