import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetProductVariants = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_VARIANTS}`);
};
export default GetProductVariants;
