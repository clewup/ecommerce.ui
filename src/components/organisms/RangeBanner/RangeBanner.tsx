import "./range-banner.scss";
import { rangeData } from "../../../data/rangeData";
import RangeTile from "../../molecules/RangeTile/RangeTile";

const RangeBanner = () => {
  return (
    <div id={"range-banner"}>
      {rangeData.map((range) => {
        return (
          <div key={range.name}>
            <RangeTile range={range} />
          </div>
        );
      })}
    </div>
  );
};
export default RangeBanner;
