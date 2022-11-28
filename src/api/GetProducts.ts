import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProducts = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT}`);
};
export default GetProducts;
