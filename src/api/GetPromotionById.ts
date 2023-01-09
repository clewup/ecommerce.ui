import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const GetPromotionById = (id: Guid) => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PROMOTION_BY_ID(id)}`);
};
export default GetPromotionById;
