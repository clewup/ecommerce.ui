import { IPromotion } from "../../../interfaces/IPromotion";
import React from "react";
import Text from "../../atoms/Text/Text";
import "./promotion-tile.scss";
import { Button } from "@mui/material";

interface IProps {
  promotion: IPromotion;
}

const PromotionTile: React.FC<IProps> = ({ promotion }) => {
  return (
    <div id={"promotion-tile"}>
      <div className={"promotion-tile-content"}>
        <Text>{promotion.name}</Text>
        <Text>{promotion.description}</Text>
        <Text>
          Enabled from {promotion.startDate?.toLocaleDateString()} to{" "}
          {promotion.endDate?.toLocaleDateString()}
        </Text>
        <Text>Applying a {promotion.discount?.percentage}% discount.</Text>
      </div>
      <div className={"promotion-tile-actions"}>
        <Button size={"large"} type={"button"} variant={"text"} color={"info"}>
          Edit
        </Button>
        <Button size={"large"} type={"button"} variant={"text"} color={"error"}>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default PromotionTile;
