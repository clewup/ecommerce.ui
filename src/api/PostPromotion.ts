import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IPromotion } from "../interfaces/IPromotion";

const PostPromotion = (promotion: IPromotion) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.PROMOTION}`, promotion);
};
export default PostPromotion;
