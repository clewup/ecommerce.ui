import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetLinkedSubcategories = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.LINKED_SUBCATEGORIES}`);
};
export default GetLinkedSubcategories;
