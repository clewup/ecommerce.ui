import "./promotion-banner.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import Text from "../../atoms/Text/Text";
import { subheadingSize, textSize } from "../../../enums/typography";
import Snowfall from "react-snowfall";

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
        <Subheading align={"center"} size={subheadingSize.XLARGE}>
          WINTER WONDERLAND SALE
        </Subheading>
        <Text size={textSize.XLARGE}>
          Discount on selected ski equipment and clothing.
        </Text>
      </div>
      <div className={"promotion-discount"}>
        <Text>20%-50% off!</Text>
      </div>
    </div>
  );
};
export default PromotionBanner;
