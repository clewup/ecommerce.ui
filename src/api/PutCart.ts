import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { ICart } from "../types/ICart";

const PutCart = (cart: ICart) => {
  return axios.put(`${apiUrls.ECOMMERCE}${apiEndpoints.CART}`, cart);
};
export default PutCart;
