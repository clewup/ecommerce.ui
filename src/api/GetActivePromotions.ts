import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetActivePromotions = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.ACTIVE_PROMOTIONS}`);
};
export default GetActivePromotions;
