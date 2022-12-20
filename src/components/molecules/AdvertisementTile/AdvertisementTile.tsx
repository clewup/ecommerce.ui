import "./advertisement-tile.scss";
import Text from "../../atoms/Text/Text";
import { Button } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";
import { IAdvertisement } from "../../../types/IAdvertisement";
import React from "react";
import { textSize } from "../../../enums/typography";

interface IProps {
  advertisement: IAdvertisement;
}

const AdvertisementTile: React.FC<IProps> = ({ advertisement }) => {
  return (
    <div
      id={"advertisement-tile"}
      style={{
        backgroundImage: `url(${advertisement.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={"advertisement-tile-text"}>
        <Subheading color={advertisement.titleColor}>
          {advertisement.title}
        </Subheading>
        <Text size={textSize.LARGE} color={advertisement.captionColor}>
          {advertisement.caption}
        </Text>
      </div>
      <div className={"advertisement-tile-actions"}>
        <Button
          onClick={advertisement.onClick}
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"info"}
        >
          {advertisement.buttonText}
        </Button>
      </div>
    </div>
  );
};
export default AdvertisementTile;
