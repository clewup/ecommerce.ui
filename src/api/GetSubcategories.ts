import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetSubcategories = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.SUBCATEGORIES}`);
};
export default GetSubcategories;
