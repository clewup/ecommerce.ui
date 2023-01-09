import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./promotion-builder.scss";
import usePromotion from "../../../hooks/usePromotion";
import Loader from "../../atoms/Loader/Loader";
import PromotionTile from "../../molecules/PromotionTile/PromotionTile";
import Text from "../../atoms/Text/Text";
import PromotionForm from "../PromotionForm/PromotionForm";
import { IOrder } from "../../../interfaces/IOrder";
import Modal from "../../atoms/Modal/Modal";
import { mockedPromotions } from "./data/mockData";
import AppError from "../../molecules/AppError/AppError";
import { textSize } from "../../../enums/typography";

const PromotionBuilder = () => {
  const {
    //activePromotions,
    //promotions,
    isLoading,
    error,
    getActivePromotions,
    getPromotions,
  } = usePromotion();

  const activePromotions = mockedPromotions;
  const promotions = mockedPromotions;

  useEffect(() => {
    getActivePromotions();
    getPromotions();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  if (error) return <AppError error={error} />;

  return (
    <div id={"promotion-builder"}>
      <div className={"promotion-builder-header"}>
        <Button
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"info"}
          onClick={() => setModalOpen(true)}
        >
          Add Promotion
        </Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={"active-promotions"}>
            <Text size={textSize.XLARGE} bold>
              Active Promotions
            </Text>
            {activePromotions?.map((promotion) => {
              return (
                <div key={String(promotion.id)}>
                  <PromotionTile promotion={promotion} />
                </div>
              );
            })}
          </div>

          <div className={"all-promotions"}>
            <Text size={textSize.XLARGE} bold>
              All Promotions
            </Text>
            {promotions?.map((promotion) => {
              return (
                <div key={String(promotion.id)}>
                  <PromotionTile promotion={promotion} />
                </div>
              );
            })}
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <PromotionForm />
          </Modal>
        </>
      )}
    </div>
  );
};
export default PromotionBuilder;
