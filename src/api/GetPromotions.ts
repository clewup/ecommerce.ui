import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetPromotions = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PROMOTION}`);
};
export default GetPromotions;
