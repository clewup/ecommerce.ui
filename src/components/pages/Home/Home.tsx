import "./home.scss";
import Hero from "../../molecules/Hero/Hero";
import FeaturedProducts from "../../organisms/FeaturedProducts/FeaturedProducts";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Tile, { tileVariant } from "../../molecules/Tile/Tile";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper id={"home"}>
      <Hero />
      <div className={"tiles"}>
        <Tile
          variant={tileVariant.BORN_TO_SKI}
          text={"BORN TO SKI"}
          buttonText={"SHOP NOW"}
          buttonOnClick={() => navigate("store")}
        />
        <Tile
          variant={tileVariant.LIVE_TO_EXPLORE}
          text={"LIVE TO EXPLORE"}
          buttonText={"BROWSE"}
          buttonOnClick={() => navigate("store")}
        />
        <Tile
          variant={tileVariant.DARE_TO_PUSH_LIMITS}
          text={"DARE TO PUSH LIMITS"}
          buttonText={"PURCHASE"}
          buttonOnClick={() => navigate("store")}
        />
      </div>
      <FeaturedProducts />
    </Wrapper>
  );
};
export default Home;
