import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IDiscount } from "../interfaces/IDiscount";

const PostDiscount = (discount: IDiscount) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.DISCOUNT}`, discount);
};
export default PostDiscount;
