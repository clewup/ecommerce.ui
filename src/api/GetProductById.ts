import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const GetProductById = (id: Guid) => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.PRODUCT_BY_ID(id)}`);
};
export default GetProductById;
