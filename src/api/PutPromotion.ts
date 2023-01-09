import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IPromotion } from "../interfaces/IPromotion";

const PutPromotion = (promotion: IPromotion) => {
  return axios.put(`${apiUrls.ECOMMERCE}${apiEndpoints.PROMOTION}`, promotion);
};
export default PutPromotion;
