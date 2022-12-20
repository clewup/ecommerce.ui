import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProductsSearch = (query: string) => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_SEARCH(query)}`);
};
export default GetProductsSearch;
