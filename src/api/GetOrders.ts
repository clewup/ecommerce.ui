import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetOrders = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.ORDER}`);
};
export default GetOrders;
