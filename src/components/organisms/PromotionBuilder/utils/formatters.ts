import { IPromotion } from "../../../../interfaces/IPromotion";

export const filterPromotions = (promotions: IPromotion[], query: string) => {
  return promotions.filter((promotion) =>
    promotion.name.toLowerCase().includes(query.toLowerCase())
  );
};
