import { Guid } from "guid-typescript";
import { ICart } from "../../../../interfaces/ICart";
import { mockedProducts } from "../../Products/data/mockData";
import { mockedUser } from "../../UserForm/data/mockData";

export const mockedCart: ICart = {
  id: Guid.parse("7CA75A70-B90E-4990-9314-15C1629536D9"),
  userId: mockedUser.id,
  products: mockedProducts,
  total: 99.99,
};
