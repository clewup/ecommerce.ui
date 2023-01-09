import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const DeletePromotion = (id: Guid) => {
  return axios.delete(
    `${apiUrls.ECOMMERCE}${apiEndpoints.PROMOTION_BY_ID(id)}`
  );
};
export default DeletePromotion;
