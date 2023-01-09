import { useState } from "react";
import { IPromotion } from "../interfaces/IPromotion";
import { AxiosError } from "axios";
import GetActivePromotions from "../api/GetActivePromotions";
import GetPromotions from "../api/GetPromotions";
import GetPromotionById from "../api/GetPromotionById";
import { Guid } from "guid-typescript";
import PostPromotion from "../api/PostPromotion";
import PutPromotion from "../api/PutPromotion";
import DeletePromotion from "../api/DeletePromotion";

interface IUsePromotion {
  activePromotions: IPromotion[] | undefined;
  promotions: IPromotion[] | undefined;
  promotion: IPromotion | undefined;
  isLoading: boolean;
  error: AxiosError | null;
  getActivePromotions: () => void;
  getPromotions: () => void;
  getPromotion: (id: Guid) => void;
  createPromotion: (promotion: IPromotion) => void;
  updatePromotion: (promotion: IPromotion) => void;
  deletePromotion: (id: Guid) => void;
}

const usePromotion = (): IUsePromotion => {
  const [activePromotions, setActivePromotions] = useState<IPromotion[]>();
  const [promotions, setPromotions] = useState<IPromotion[]>();
  const [promotion, setPromotion] = useState<IPromotion>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getActivePromotions = () => {
    setLoading(true);
    GetActivePromotions()
      .then((res) => setActivePromotions(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getPromotions = () => {
    setLoading(true);
    GetPromotions()
      .then((res) => setPromotions(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getPromotion = (id: Guid) => {
    setLoading(true);
    GetPromotionById(id)
      .then((res) => setPromotion(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const createPromotion = (promotion: IPromotion) => {
    setLoading(true);
    PostPromotion(promotion)
      .then((res) => setPromotion(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const updatePromotion = (promotion: IPromotion) => {
    setLoading(true);
    PutPromotion(promotion)
      .then((res) => setPromotion(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const deletePromotion = (id: Guid) => {
    setLoading(true);
    DeletePromotion(id)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    activePromotions,
    promotions,
    promotion,
    isLoading,
    error,
    getActivePromotions,
    getPromotions,
    getPromotion,
    createPromotion,
    updatePromotion,
    deletePromotion,
  };
};
export default usePromotion;
