import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetMostPopularProducts = (amount: number) => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.MOST_POPULAR(amount)}`);
};
export default GetMostPopularProducts;
