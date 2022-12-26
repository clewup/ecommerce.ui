import "./range-tile.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IRange } from "../../../types/IRange";
import { fontColor } from "../../../enums/typography";

interface IProps {
  range: IRange;
}

const RangeTile: React.FC<IProps> = ({ range }) => {
  const navigate = useNavigate();

  return (
    <div
      id={"range-tile"}
      style={{
        backgroundImage: `url(${range.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={"range-tile-text"}>
        <Subheading color={fontColor.WHITE}>{range.name}</Subheading>
        <Button
          onClick={() => navigate("store")}
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"info"}
          className={"discover-btn"}
        >
          DISCOVER
        </Button>
      </div>
    </div>
  );
};
export default RangeTile;