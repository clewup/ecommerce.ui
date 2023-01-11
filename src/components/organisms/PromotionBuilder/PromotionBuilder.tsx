import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./promotion-builder.scss";
import usePromotion from "../../../hooks/usePromotion";
import Loader from "../../atoms/Loader/Loader";
import PromotionTile from "../../molecules/PromotionTile/PromotionTile";
import Text from "../../atoms/Text/Text";
import PromotionForm from "../PromotionForm/PromotionForm";
import Modal from "../../atoms/Modal/Modal";
import { mockedPromotions } from "./data/mockData";
import AppError from "../../molecules/AppError/AppError";
import { textSize } from "../../../enums/typography";
import DiscountManager from "../DiscountManager/DiscountManager";
import { IPromotion } from "../../../interfaces/IPromotion";
import Input from "../../atoms/Input/Input";
import { filterPromotions } from "./utils/formatters";

const PromotionBuilder = () => {
  const {
    activePromotions,
    promotions,
    isLoading,
    error,
    getActivePromotions,
    getPromotions,
    deletePromotion,
  } = usePromotion();

  useEffect(() => {
    getActivePromotions();
    getPromotions();
  }, []);

  const [isPromotionModalOpen, setPromotionModalOpen] = useState(false);
  const [isDiscountModalOpen, setDiscountModalOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState<IPromotion>();
  const [filteredPromotions, setFilteredPromotions] = useState(promotions);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (promotions && searchQuery !== "") {
      const searchResults = filterPromotions(promotions, searchQuery);
      setFilteredPromotions(searchResults);
    } else {
      setFilteredPromotions(promotions);
    }
  }, [searchQuery, promotions]);

  if (error) return <AppError error={error} />;

  return (
    <div id={"promotion-builder"}>
      <div className={"promotion-builder-header"}>
        <Input
          placeholder={"Search Promotions"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className={"promotion-builder-header-actions"}>
          <Button
            size={"large"}
            type={"button"}
            variant={"contained"}
            color={"info"}
            onClick={() => setDiscountModalOpen(true)}
          >
            Manage Discounts
          </Button>
          <Button
            size={"large"}
            type={"button"}
            variant={"contained"}
            color={"info"}
            onClick={() => setPromotionModalOpen(true)}
          >
            Add Promotion
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className={"promotions-loader"}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={"active-promotions"}>
            <Text size={textSize.XLARGE} bold>
              Active Promotions
            </Text>
            {activePromotions?.map((promotion) => {
              return (
                <div key={String(promotion.id)}>
                  <PromotionTile
                    promotion={promotion}
                    setPromotionModalOpen={setPromotionModalOpen}
                    setSelectedPromotion={setSelectedPromotion}
                    deletePromotion={deletePromotion}
                  />
                </div>
              );
            })}
          </div>

          <div className={"all-promotions"}>
            <Text size={textSize.XLARGE} bold>
              All Promotions
            </Text>
            {filteredPromotions?.map((promotion) => {
              return (
                <div key={String(promotion.id)}>
                  <PromotionTile
                    promotion={promotion}
                    setPromotionModalOpen={setPromotionModalOpen}
                    setSelectedPromotion={setSelectedPromotion}
                    deletePromotion={deletePromotion}
                  />
                </div>
              );
            })}
          </div>

          <Modal
            isOpen={isDiscountModalOpen}
            onClose={() => setDiscountModalOpen(false)}
          >
            <DiscountManager />
          </Modal>

          <Modal
            isOpen={isPromotionModalOpen}
            onClose={() => setPromotionModalOpen(false)}
          >
            <PromotionForm selectedPromotion={selectedPromotion} />
          </Modal>
        </>
      )}
    </div>
  );
};
export default PromotionBuilder;
