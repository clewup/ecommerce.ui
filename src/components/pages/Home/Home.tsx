import "./home.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import TrendingProducts from "../../organisms/TrendingProducts/TrendingProducts";
import SaleProducts from "../../organisms/SaleProducts/SaleProducts";
import AdvertisementsBanner from "../../organisms/AdvertisementsBanner/AdvertisementsBanner";
import RangeBanner from "../../organisms/RangeBanner/RangeBanner";
import PromotionBanner from "../../molecules/PromotionBanner/PromotionBanner";
import RecentlyViewedProducts from "../../organisms/RecentlyViewedProducts/RecentlyViewedProducts";

const Home = () => {
  return (
    <Wrapper id={"home"}>
      <AdvertisementsBanner />
      <div className={"top-section"}>
        <RangeBanner />
        <TrendingProducts />
        <RecentlyViewedProducts />
      </div>
      <PromotionBanner />
      <div className={"bottom-section"}>
        <SaleProducts />
      </div>
    </Wrapper>
  );
};
export default Home;
