import { IPromotion } from "../../../../interfaces/IPromotion";
import { createGuid } from "../../../../utils/createGuid";
import { IDiscount } from "../../../../interfaces/IDiscount";

const mockedDiscount: IDiscount = {
  id: createGuid(),
  name: "Discount 1",
  percentage: 12.5,
};

export const mockedPromotions: IPromotion[] = [
  {
    id: createGuid(),
    name: "Promotion 1",
    description: "Promotion 1 Description",
    startDate: "10/01/2023",
    endDate: "20/01/2023",
    discount: mockedDiscount,
  },
  {
    id: createGuid(),
    name: "Promotion 2",
    description: "Promotion 2 Description",
    startDate: "10/01/2023",
    endDate: "20/01/2023",
    discount: mockedDiscount,
  },
  {
    id: createGuid(),
    name: "Promotion 3",
    description: "Promotion 3 Description",
    startDate: "10/01/2023",
    endDate: "20/01/2023",
    discount: mockedDiscount,
  },
  {
    id: createGuid(),
    name: "Promotion 4",
    description: "Promotion 4 Description",
    startDate: "10/01/2023",
    endDate: "20/01/2023",
    discount: mockedDiscount,
  },
];
