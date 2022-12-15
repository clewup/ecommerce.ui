import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetUserOrders = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.USER_ORDERS}`);
};
export default GetUserOrders;
