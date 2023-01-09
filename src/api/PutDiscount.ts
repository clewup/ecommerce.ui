import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IDiscount } from "../interfaces/IDiscount";

const PutDiscount = (discount: IDiscount) => {
  return axios.put(`${apiUrls.ECOMMERCE}${apiEndpoints.DISCOUNT}`, discount);
};
export default PutDiscount;
