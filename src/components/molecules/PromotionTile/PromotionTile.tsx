import { IPromotion } from "../../../interfaces/IPromotion";
import React, { SetStateAction } from "react";
import Text from "../../atoms/Text/Text";
import "./promotion-tile.scss";
import { Button } from "@mui/material";
import { formatDateRangeText } from "../../organisms/PromotionForm/utils/formatters";
import { Guid } from "guid-typescript";
import deletePromotion from "../../../api/DeletePromotion";

interface IProps {
  promotion: IPromotion;
  setPromotionModalOpen: React.Dispatch<SetStateAction<boolean>>;
  setSelectedPromotion: React.Dispatch<SetStateAction<IPromotion | undefined>>;
  deletePromotion: (id: Guid) => void;
}

const PromotionTile: React.FC<IProps> = ({
  promotion,
  setPromotionModalOpen,
  setSelectedPromotion,
}) => {
  return (
    <div id={"promotion-tile"}>
      <div className={"promotion-tile-content"}>
        <Text>{promotion.name}</Text>
        <Text>{promotion.description}</Text>
        <Text>
          {formatDateRangeText(
            promotion.startDate ? new Date(promotion.startDate) : null,
            promotion.endDate ? new Date(promotion.endDate) : null
          )}
        </Text>
        <Text>Applying a {promotion.discount?.percentage}% discount.</Text>
      </div>
      <div className={"promotion-tile-actions"}>
        <Button
          size={"large"}
          type={"button"}
          variant={"text"}
          color={"info"}
          onClick={() => {
            setSelectedPromotion(promotion);
            setPromotionModalOpen(true);
          }}
        >
          Edit
        </Button>
        <Button
          size={"large"}
          type={"button"}
          variant={"text"}
          color={"error"}
          onClick={() => deletePromotion(promotion.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default PromotionTile;
