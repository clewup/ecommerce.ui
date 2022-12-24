import "./value-tile.scss";
import Text from "../../atoms/Text/Text";
import { textSize } from "../../../enums/typography";
import { Tooltip } from "@mui/material";
import React from "react";
import { IValue } from "../../../types/IValue";

interface IProps {
  value: IValue;
}

const ValueTile: React.FC<IProps> = ({ value }) => {
  return (
    <Tooltip title={value.tooltip}>
      <div id={"value-tile"}>
        <img src={value.icon} alt={"icon"} />
        <Text size={textSize.LARGE}>{value.text}</Text>
      </div>
    </Tooltip>
  );
};

export default ValueTile;
