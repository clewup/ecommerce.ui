import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const DeleteDiscount = (id: Guid) => {
  return axios.delete(`${apiUrls.ECOMMERCE}${apiEndpoints.DISCOUNT_BY_ID(id)}`);
};
export default DeleteDiscount;
