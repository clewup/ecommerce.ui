import "./values-banner.scss";
import ValueTile from "../../molecules/ValueTile/ValueTile";
import { valueData } from "./data/valueData";

const ValuesBanner = () => {
  return (
    <div id={"values-banner"}>
      {valueData.map((value) => {
        return (
          <div key={value.text}>
            <ValueTile value={value} />
          </div>
        );
      })}
    </div>
  );
};
export default ValuesBanner;
