import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProductRanges = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_RANGES}`);
};
export default GetProductRanges;
