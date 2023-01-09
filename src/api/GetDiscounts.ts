import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetDiscounts = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.DISCOUNT}`);
};
export default GetDiscounts;
