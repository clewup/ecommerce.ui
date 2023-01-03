import "./promotion-banner.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import Text from "../../atoms/Text/Text";
import { subheadingSize, textSize } from "../../../enums/typography";
import Snowfall from "react-snowfall";
import TextAnimation from "../../../lib/FramerMotion/TextAnimation";
import CharacterAnimation from "../../../lib/FramerMotion/CharacterAnimation";

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
        <TextAnimation text={"WINTER WONDERLAND SALE"} size={"3rem"} />
        <TextAnimation
          text={"Discount on selected ski equipment and clothing."}
        />
      </div>
      <div className={"promotion-discount"}>
        <CharacterAnimation text={"20%-50% off!"} size={"5rem"} />
      </div>
    </div>
  );
};
export default PromotionBanner;
