import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const GetCart = (userId: Guid) => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.CART_BY_ID(userId)}`);
};
export default GetCart;
