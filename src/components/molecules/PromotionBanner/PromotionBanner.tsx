import "./promotion-banner.scss";
import Snowfall from "react-snowfall";
import {
  CharacterAnimation,
  TextAnimation,
} from "../../../lib/FramerMotion/animations";

const PromotionBanner = () => {
  return (
    <div id={"promotion-banner"}>
      <Snowfall
        snowflakeCount={100}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
        radius={[0.5, 2]}
      />
      <div className={"promotion-title"}>
        <TextAnimation size={"3rem"}>WINTER WONDERLAND SALE</TextAnimation>
        <TextAnimation>
          Discount on selected ski equipment and clothing.
        </TextAnimation>
      </div>
      <div className={"promotion-discount"}>
        <CharacterAnimation size={"5rem"}>20%-50% off!</CharacterAnimation>
      </div>
    </div>
  );
};
export default PromotionBanner;
