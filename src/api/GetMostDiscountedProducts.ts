import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetMostDiscountedProducts = (amount: number) => {
  return axios.get(
    `${apiUrls.ECOMMERCE}${apiEndpoints.STATISTICS_MOST_DISCOUNTED(amount)}`
  );
};
export default GetMostDiscountedProducts;
