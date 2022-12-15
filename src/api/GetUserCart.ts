import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetUserCart = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.USER_CART}`);
};
export default GetUserCart;
