import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetCategories = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.CATEGORIES}`);
};
export default GetCategories;
