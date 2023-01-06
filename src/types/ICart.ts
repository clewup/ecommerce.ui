import { Guid } from "guid-typescript";
import { IProduct, mockedProducts } from "./IProduct";
import { mockedUser } from "./IUser";

export interface ICart {
  id: Guid;
  userId: Guid;
  products: IProduct[];
  total: number;
  discountedTotal?: number;
  totalSavings?: number;
}

export const mockedCart: ICart = {
  id: Guid.parse("1234"),
  userId: mockedUser.id,
  products: mockedProducts,
  total: 99.99,
};
