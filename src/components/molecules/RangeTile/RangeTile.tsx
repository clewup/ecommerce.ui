import "./range-tile.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IRange } from "../../../types/IRange";
import { ProductContext } from "../../../contexts/Product";
import { colors } from "../../../styles/colors";
import ScaleAnimation from "../../../lib/FramerMotion/ScaleAnimation";

interface IProps {
  range: IRange;
}

const RangeTile: React.FC<IProps> = ({ range }) => {
  const navigate = useNavigate();
  const { setRangeQuery } = useContext(ProductContext);

  return (
    <div
      id={"range-tile"}
      style={{
        backgroundImage: `url(${range.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ScaleAnimation>
        <div className={"range-tile-text"}>
          <Subheading color={colors.WHITE}>
            {range.name.toUpperCase()}
          </Subheading>
          <Button
            onClick={() => {
              navigate("store");
              setRangeQuery(range.name);
            }}
            size={"large"}
            type={"button"}
            variant={"contained"}
            color={"_black"}
            className={"discover-btn"}
          >
            DISCOVER
          </Button>
        </div>
      </ScaleAnimation>
    </div>
  );
};
export default RangeTile;
