import "./home.scss";
import Hero from "../../molecules/Hero/Hero";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Tile, { tileVariant } from "../../molecules/Tile/Tile";
import { useNavigate } from "react-router-dom";
import CategoryTile from "../../molecules/CategoryTile/CategoryTile";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";
import TrendingProducts from "../../organisms/TrendingProducts/TrendingProducts";
import SaleProducts from "../../organisms/SaleProducts/SaleProducts";

const Home = () => {
  const navigate = useNavigate();
  const { categories } = useContext(ProductContext);

  return (
    <Wrapper id={"home"}>
      <Hero />
      <div className={"tiles"}>
        <Tile
          variant={tileVariant.BORN_TO_SKI}
          heading={"BORN TO SKI"}
          caption={"Essentials available for beginners and professionals."}
          buttonText={"SHOP NOW"}
          buttonOnClick={() => navigate("store")}
        />
        <Tile
          variant={tileVariant.LIVE_TO_EXPLORE}
          heading={"LIVE TO EXPLORE"}
          caption={"Huge savings on ski wear and accessories."}
          buttonText={"BROWSE"}
          buttonOnClick={() => navigate("store")}
        />
        <Tile
          variant={tileVariant.DARE_TO_PUSH_LIMITS}
          heading={"DARE TO ENJOY"}
          caption={"Hit the slopes in style with the latest products of 2022."}
          buttonText={"TAKE A PEEK"}
          buttonOnClick={() => navigate("store")}
        />
      </div>
      <div className={"categories"}>
        {categories?.map((category) => {
          return <CategoryTile category={category} />;
        })}
      </div>
      <TrendingProducts />
      <SaleProducts />
    </Wrapper>
  );
};
export default Home;
