import "./home.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import TrendingProducts from "../../organisms/TrendingProducts/TrendingProducts";
import SaleProducts from "../../organisms/SaleProducts/SaleProducts";
import AdvertisementsBanner from "../../organisms/AdvertisementsBanner/AdvertisementsBanner";
import CategoriesBanner from "../../organisms/CategoriesBanner/CategoriesBanner";
import RangeBanner from "../../organisms/RangeBanner/RangeBanner";

const Home = () => {
  return (
    <Wrapper id={"home"}>
      <div className={"top-section"}>
        <AdvertisementsBanner />
        <CategoriesBanner />
        <RangeBanner />
        <TrendingProducts />
      </div>
      <div className={"bottom-section"}>
        <SaleProducts />
      </div>
    </Wrapper>
  );
};
export default Home;
