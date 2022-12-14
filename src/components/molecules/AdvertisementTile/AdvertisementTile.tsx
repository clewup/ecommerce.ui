import "./advertisement-tile.scss";
import Text from "../../atoms/Text/Text";
import { Button } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";
import { IAdvertisement } from "../../../interfaces/IAdvertisement";
import React from "react";
import {
  fontSpacing,
  subheadingSize,
  textSize,
} from "../../../enums/typography";
import { useNavigate } from "react-router-dom";

interface IProps {
  advertisement: IAdvertisement;
}

const AdvertisementTile: React.FC<IProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  return (
    <div
      id={"advertisement-tile"}
      style={{
        backgroundImage: `url(${advertisement.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={"advertisement-information"}>
        <Subheading
          size={subheadingSize.LARGE}
          padding={fontSpacing.NONE}
          margin={fontSpacing.NONE}
        >
          {advertisement.title}
        </Subheading>
        <Text size={textSize.LARGE}>{advertisement.caption}</Text>
        <Button
          onClick={() => navigate("store")}
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"_black"}
          className={"discover-btn"}
        >
          DISCOVER
        </Button>
      </div>
    </div>
  );
};
export default AdvertisementTile;
