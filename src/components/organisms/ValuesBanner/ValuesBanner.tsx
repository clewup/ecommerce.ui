import "./values-banner.scss";
import ValueTile from "../../molecules/ValueTile/ValueTile";
import { valuesData } from "../../../data/valuesData";

const ValuesBanner = () => {
  return (
    <div id={"values-banner"}>
      {valuesData.map((value) => {
        return (
          <div key={value.text}>
            <ValueTile
              icon={value.icon}
              text={value.text}
              tooltip={value.tooltip}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ValuesBanner;
