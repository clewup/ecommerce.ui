import "./value-tile.scss";
import Text from "../../atoms/Text/Text";
import { textSize } from "../../../enums/typography";
import React from "react";
import { IValue } from "../../../interfaces/IValue";

interface IProps {
  value: IValue;
}

const ValueTile: React.FC<IProps> = ({ value }) => {
  return (
    <div id={"value-tile"}>
      <img src={value.icon} alt={"icon"} />
      <Text size={textSize.LARGE}>{value.heading}</Text>
      <Text align={"center"}>{value.text}</Text>
    </div>
  );
};

export default ValueTile;
