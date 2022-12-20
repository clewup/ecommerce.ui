import "./value-tile.scss";
import Text from "../../atoms/Text/Text";
import { textSize } from "../../../enums/typography";
import { Tooltip } from "@mui/material";
import React from "react";

interface IProps {
  icon: string;
  text: string;
  tooltip: string;
}

const ValueTile: React.FC<IProps> = ({ icon, text, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <div id={"value-tile"}>
        <img src={icon} alt={"icon"} />
        <Text size={textSize.LARGE}>{text}</Text>
      </div>
    </Tooltip>
  );
};

export default ValueTile;
