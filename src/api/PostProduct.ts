import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IProduct } from "../interfaces/IProduct";

const PostProduct = (product: IProduct) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT}`, product);
};
export default PostProduct;
