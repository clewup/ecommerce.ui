import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { ICart } from "../interfaces/ICart";

const PostCart = (cart: ICart) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.CART}`, cart);
};
export default PostCart;
