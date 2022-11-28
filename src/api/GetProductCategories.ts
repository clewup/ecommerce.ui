import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProductCategories = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_CATEGORIES}`);
};
export default GetProductCategories;
